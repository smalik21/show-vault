import { AgentResponseType } from "@/types/chat";

/**
 * Type guard to check if a value is a valid tool name
 */
function isValidToolName(value: unknown): boolean {
  const validTools = [
    "search_movies",
    "search_tv",
    "search_people",
    "search_multi",
    "get_trending",
    "get_popular",
    "get_latest_movies",
    "get_latest_tv",
    "get_upcoming_movies",
    "get_movie_details",
    "get_tv_details",
    "get_person_details",
    "get_similar_movies",
    "get_similar_tv",
    "navigate_to",
  ];
  return typeof value === "string" && validTools.includes(value);
}

/**
 * Type guard to check if an object is a tool call response
 */
function isToolCallResponse(obj: unknown): boolean {
  if (!obj || typeof obj !== "object") return false;

  const typed = obj as Record<string, unknown>;

  if (
    !isValidToolName(typed.tool) ||
    !typed.arguments ||
    typeof typed.arguments !== "object" ||
    Array.isArray(typed.arguments)
  ) {
    return false;
  }

  return true;
}

/**
 * Type guard to check if an object is a text response (with final flag)
 */
function isTextResponse(obj: unknown): boolean {
  if (!obj || typeof obj !== "object") return false;

  const typed = obj as Record<string, unknown>;

  return (
    typeof typed.text === "string" &&
    typed.text.length > 0 &&
    typeof typed.final === "boolean"
  );
}

/**
 * Validate and parse LLM response with comprehensive type checking
 */
export function validateAgentResponse(parsed: unknown): AgentResponseType {
  // Check if it's a valid tool call response
  if (isToolCallResponse(parsed)) {
    const typed = parsed as Record<string, unknown>;
    return {
      tool: typed.tool as string,
      arguments: typed.arguments as unknown as Record<string, unknown>,
    } as unknown as AgentResponseType;
  }

  // Check if it's a valid text response
  if (isTextResponse(parsed)) {
    const typed = parsed as Record<string, unknown>;
    return {
      text: typed.text as string,
      final: typed.final as boolean,
    };
  }

  // Last resort: return error as non-final text response
  console.warn(
    "Could not parse response as valid tool call or text response. Using raw text.",
  );
  return {
    text: "I encountered an error processing your request. Please try again.",
    final: false,
  };
}

/**
 * Extract JSON from LLM response, handling various formatting
 */
export function extractJSON(text: string): string {
  // Remove markdown code blocks
  let cleaned = text
    .replace(/```json\s*\n?/g, "")
    .replace(/```\s*\n?/g, "")
    .trim();

  // Try to extract JSON object if wrapped in other text
  const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    cleaned = jsonMatch[0];
  }

  return cleaned;
}

/**
 * Safely parse JSON with error handling
 */
export function safeJSONParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("JSON parse error:", error);
    return null;
  }
}
