"use server";

import { runAgent } from "../chat/agent";
import { executeTool } from "../chat/executor";
import {
  AgentResponseType,
  AIActionResponse,
  ToolCallResponse,
  ChatMessage,
  NavigateToResponse,
  ToolResponseType,
} from "@/types/chat";

/**
 * Main entry point for AI chat processing
 * Implements a while loop where the LLM calls tools one at a time
 * and explicitly indicates when the final answer is ready
 */
export async function runAI(
  message: string,
  conversationHistory?: ChatMessage[],
  contentDictionary?: Record<
    string,
    { id: number; type?: "movie" | "tv"; title: string }
  >,
): Promise<AIActionResponse> {
  if (!message || message.trim().length === 0) {
    return {
      type: "text",
      content: "Please enter a message.",
      updatedContentDictionary: contentDictionary,
    };
  }

  // Build initial conversation history with user message
  const toolHistory: ChatMessage[] = [
    ...(conversationHistory || []),
    {
      type: "user",
      content: message,
      timestamp: Date.now(),
    },
  ];

  let iterations = 0;
  const MAX_ITERATIONS = 7;
  let navigateData: NavigateToResponse | null = null; // Track if navigate_to was called

  // Dictionary to store all referenced content items (movies/tv shows/people)
  // Start with existing dictionary or empty
  const contentDict: Record<
    string,
    { id: number; type?: "movie" | "tv"; title: string }
  > = { ...(contentDictionary || {}) };

  // Loop until LLM provides a final answer
  while (iterations < MAX_ITERATIONS) {
    iterations++;
    console.log(`\n=== Iteration ${iterations} ===`);

    try {
      // Call the LLM with current history (no duplicate message)
      // On first iteration, pass the message; on subsequent iterations, pass empty string
      const messageParam = iterations === 1 ? message : "";
      const agentResult: AgentResponseType = await runAgent(
        messageParam,
        toolHistory,
        contentDict,
      );

      console.log("LLM Response:\n", agentResult);

      // Check if this is a final text response
      if ("text" in agentResult && "final" in agentResult) {
        if (agentResult.final === true) {
          // LLM is done! Return the final answer
          console.log("Final answer received from LLM");

          // Add the final assistant response to toolHistory for LLM context
          toolHistory.push({
            type: "assistant",
            content: agentResult.text,
            timestamp: Date.now(),
          });

          const response: AIActionResponse = {
            type: "text",
            content: agentResult.text,
            updatedContentDictionary: contentDict,
            updatedLlmHistory: toolHistory,
          };

          // If navigation was called, attach that data
          if (navigateData) {
            response.type = "tool";
            response.tool = "navigate_to";
            response.data = navigateData;
          }

          return response;
        } else {
          // Text response but not final (shouldn't happen, but handle it)
          // Add to history and continue loop
          toolHistory.push({
            type: "assistant",
            content: agentResult.text,
            timestamp: Date.now(),
          });
          continue;
        }
      }

      // Check if this is a tool call
      if ("tool" in agentResult && agentResult.tool) {
        const toolCall = agentResult as ToolCallResponse;

        console.log(`Executing tool: ${toolCall.tool}`);

        try {
          // Execute the tool
          const toolResult = await executeTool(
            toolCall.tool,
            toolCall.arguments,
          );

          console.log(`Tool result from ${toolCall.tool}:`, toolResult);

          // Track the latest searched/detailed content ID for navigation
          if (
            (toolCall.tool === "search_movies" ||
              toolCall.tool === "search_tv") &&
            toolResult &&
            typeof toolResult === "object" &&
            "results" in toolResult &&
            Array.isArray(
              (toolResult as unknown as { results: unknown[] }).results,
            ) &&
            (
              (toolResult as unknown as { results: unknown[] })
                .results as unknown[]
            ).length > 0
          ) {
            const results = (toolResult as unknown as { results: unknown[] })
              .results as unknown[];
            const firstResult = results[0] as Record<string, unknown>;
            const contentId = firstResult.id as number;
            const contentTitle = (firstResult.title ||
              firstResult.name) as string;
            const contentType =
              toolCall.tool === "search_movies" ? "movie" : "tv";

            // Add to dictionary with normalized key
            const normalizedKey = contentTitle.toLowerCase().trim();
            contentDict[normalizedKey] = {
              id: contentId,
              type: contentType,
              title: contentTitle,
            };

            console.log(
              `Added to dictionary: "${contentTitle}" (${contentType} ID: ${contentId})`,
            );
          } else if (
            (toolCall.tool === "get_movie_details" ||
              toolCall.tool === "get_tv_details") &&
            toolResult &&
            typeof toolResult === "object" &&
            "data" in toolResult
          ) {
            const data = (toolResult as unknown as { data: unknown })
              .data as Record<string, unknown>;
            const contentId = data.id as number;
            const contentTitle = (data.title || data.name) as string;
            const contentType =
              toolCall.tool === "get_movie_details" ? "movie" : "tv";

            // Add to dictionary with normalized key
            const normalizedKey = contentTitle.toLowerCase().trim();
            contentDict[normalizedKey] = {
              id: contentId,
              type: contentType,
              title: contentTitle,
            };

            console.log(
              `Added to dictionary: "${contentTitle}" (${contentType} ID: ${contentId})`,
            );
          } else if (
            toolCall.tool === "search_people" &&
            toolResult &&
            typeof toolResult === "object" &&
            "results" in toolResult &&
            Array.isArray(
              (toolResult as unknown as { results: unknown[] }).results,
            ) &&
            (
              (toolResult as unknown as { results: unknown[] })
                .results as unknown[]
            ).length > 0
          ) {
            const results = (toolResult as unknown as { results: unknown[] })
              .results as unknown[];
            const firstResult = results[0] as Record<string, unknown>;
            const contentId = firstResult.id as number;
            const contentTitle = firstResult.name as string;

            // Add to dictionary with normalized key (person has no type)
            const normalizedKey = contentTitle.toLowerCase().trim();
            contentDict[normalizedKey] = {
              id: contentId,
              title: contentTitle,
            };

            console.log(
              `Added to dictionary: "${contentTitle}" (person ID: ${contentId})`,
            );
          } else if (
            toolCall.tool === "get_person_details" &&
            toolResult &&
            typeof toolResult === "object" &&
            "data" in toolResult
          ) {
            const data = (toolResult as unknown as { data: unknown })
              .data as Record<string, unknown>;
            const contentId = data.id as number;
            const contentTitle = data.name as string;

            // Add to dictionary with normalized key (person has no type)
            const normalizedKey = contentTitle.toLowerCase().trim();
            contentDict[normalizedKey] = {
              id: contentId,
              title: contentTitle,
            };

            console.log(
              `Added to dictionary: "${contentTitle}" (person ID: ${contentId})`,
            );
          }

          // Validate navigate_to calls - only allow IDs from dictionary
          if (toolCall.tool === "navigate_to") {
            const route =
              ((toolCall.arguments as unknown as { route?: string })
                ?.route as string) || "";
            const idMatch = route.match(/\/(movies|tv-shows|people)\/(\d+)/);

            if (idMatch) {
              const routeId = parseInt(idMatch[2], 10);

              // Check if this ID exists in the dictionary
              const idExistsInDict = Object.values(contentDict).some(
                (item) => item.id === routeId,
              );

              if (!idExistsInDict) {
                // ID not in dictionary - this is a hallucinated/invalid ID!
                const errorMessage = `❌ INVALID ID ERROR: The ID ${routeId} is not in the known content dictionary. This ID was not retrieved from any search or details API call. You must only navigate to items that have been found through searches. Please search for the item first, then navigate.`;

                console.error(errorMessage);
                console.log(
                  `Dictionary contains these IDs:`,
                  Object.values(contentDict).map((item) => ({
                    id: item.id,
                    title: item.title,
                    type: item.type,
                  })),
                );

                // Add error message to history and continue loop
                toolHistory.push({
                  type: "tool",
                  content: `Executed tool: ${toolCall.tool}`,
                  toolCall,
                  toolResult: {
                    success: false,
                    error: errorMessage,
                  },
                  timestamp: Date.now(),
                });

                // Continue loop to let LLM search for the correct item
                continue;
              }
            }

            // ID validation passed - track the navigation
            if (
              toolResult &&
              typeof toolResult === "object" &&
              "type" in toolResult &&
              "route" in toolResult &&
              (toolResult as unknown as { type: unknown }).type === "navigate"
            ) {
              navigateData = toolResult;
            }
          }

          // Limit results in tool response to reduce token usage
          const limitedResult = limitToolResults(toolResult);

          // Add tool call and result to history
          toolHistory.push({
            type: "tool",
            content: `Executed tool: ${toolCall.tool}`,
            toolCall,
            toolResult: limitedResult,
            timestamp: Date.now(),
          });

          // Continue loop to let LLM decide what to do next
          continue;
        } catch (error) {
          console.error(`Error executing tool ${toolCall.tool}:`, error);

          // Add error to history
          toolHistory.push({
            type: "tool",
            content: `Tool execution failed: ${toolCall.tool}`,
            toolCall,
            toolResult: {
              success: false,
              error: `Failed to execute ${toolCall.tool}: ${error instanceof Error ? error.message : String(error)}`,
            },
            timestamp: Date.now(),
          });

          // Continue loop to let LLM handle the error
          continue;
        }
      }

      // If we get here, response format was invalid
      console.warn("Invalid response format from LLM:", agentResult);
      return {
        type: "text",
        content:
          "I encountered an error processing your request. Please try again.",
        updatedContentDictionary: contentDict,
        updatedLlmHistory: toolHistory,
      };
    } catch (error) {
      console.error(`Error in iteration ${iterations}:`, error);

      // Check if it's a rate limit error
      if (
        error instanceof Error &&
        error.message.includes("429") &&
        error.message.includes("RESOURCE_EXHAUSTED")
      ) {
        return {
          type: "text",
          content: "I've hit the API rate limit. Please try again in a moment.",
          updatedContentDictionary: contentDict,
          updatedLlmHistory: toolHistory,
        };
      }

      return {
        type: "text",
        content:
          "I encountered an error while processing your request. Please try again.",
        updatedContentDictionary: contentDict,
        updatedLlmHistory: toolHistory,
      };
    }
  }

  // Max iterations reached
  console.error(
    `Max iterations (${MAX_ITERATIONS}) reached without final answer`,
  );
  return {
    type: "text",
    content:
      "I was unable to complete your request. Please try again with a simpler query.",
    updatedContentDictionary: contentDict,
  };
}

/**
 * Limit the number of results in API responses to reduce token usage
 */
function limitToolResults(result: unknown): ToolResponseType {
  if (!result || typeof result !== "object") {
    return { success: false, results: [], count: 0 };
  }

  const limited = { ...result } as Record<string, unknown>;

  // Limit search results to top 5
  if (limited.results && Array.isArray(limited.results)) {
    limited.results = limited.results.slice(0, 5).map((item: unknown) => {
      if (typeof item !== "object" || item === null) return item;
      const itemObj = item as Record<string, unknown>;
      return {
        backdrop_path: itemObj.backdrop_path,
        id: itemObj.id,
        title: itemObj.title || itemObj.name,
        overview: itemObj.overview
          ? String(itemObj.overview).substring(0, 150)
          : "",
        poster_path: itemObj.poster_path,
        release_date: itemObj.release_date || itemObj.first_air_date,
        vote_average: itemObj.vote_average,
      };
    });
    limited.count = Math.min((limited.count as number) || 0, 5);
  }

  // Limit cast to top 5
  if (limited.data && typeof limited.data === "object") {
    const data = limited.data as Record<string, unknown>;
    if (data.credits && typeof data.credits === "object") {
      const credits = data.credits as Record<string, unknown>;
      if (credits.cast && Array.isArray(credits.cast)) {
        credits.cast = credits.cast.slice(0, 5);
      }
    }

    // Limit similar results to top 5
    if (data.similar && typeof data.similar === "object") {
      const similar = data.similar as Record<string, unknown>;
      if (similar.results && Array.isArray(similar.results)) {
        similar.results = similar.results.slice(0, 5);
      }
    }

    // Remove videos if present to save tokens
    if (data.videos) {
      delete data.videos;
    }
  }

  return limited as unknown as ToolResponseType;
}
