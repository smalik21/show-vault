"use client";

import { useState, useRef, useEffect } from "react";
import { runAI } from "@/lib/actions/chat";
import { useRouter } from "next/navigation";
import {
  ChatMessage,
  AIActionResponse,
  NavigateToResponse,
} from "@/types/chat";
import styles from "./chat.module.scss";

export default function Chat() {
  // Display history: What user sees in the chat (user text + assistant text only)
  const [displayMessages, setDisplayMessages] = useState<ChatMessage[]>([]);

  // LLM history: Full context for the LLM including tool results (persisted across requests)
  const [llmHistory, setLlmHistory] = useState<ChatMessage[]>([]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [contentDictionary, setContentDictionary] = useState<
    Record<string, { id: number; type?: "movie" | "tv"; title: string }>
  >({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Auto-scroll to bottom when display messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayMessages, loading]);

  async function send() {
    if (!input.trim()) return;

    // Add user message to DISPLAY history
    const userMessage: ChatMessage = {
      type: "user",
      content: input,
      timestamp: Date.now(),
    };
    setDisplayMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Pass LLM history (with full tool results) and content dictionary to the AI
      const result: AIActionResponse = await runAI(
        input,
        llmHistory,
        contentDictionary,
      );

      // Update content dictionary if it was modified
      if (result.updatedContentDictionary) {
        setContentDictionary(result.updatedContentDictionary);
      }

      // Add assistant message to DISPLAY history (text response only)
      const assistantMessage: ChatMessage = {
        type: "assistant",
        content: result.content || "Request completed",
        timestamp: Date.now(),
      };
      setDisplayMessages((prev) => [...prev, assistantMessage]);

      // Update LLM history with the full response (including tool results)
      if (result.updatedLlmHistory) {
        setLlmHistory(result.updatedLlmHistory);
      }

      // Handle navigation responses (after adding the message)
      if (
        result.type === "tool" &&
        result.data &&
        "type" in result.data &&
        result.data.type === "navigate"
      ) {
        const navData = result.data as NavigateToResponse;
        router.push(navData.route);
        return;
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        type: "assistant",
        content: `Error: ${error instanceof Error ? error.message : "Something went wrong"}`,
        timestamp: Date.now(),
      };
      setDisplayMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className={styles.chatContainer}>
      {/* Floating Chat Button */}
      <button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        title="Open AI Chat"
      >
        💬
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className={styles.chatModal}>
          {/* Header */}
          <div className={styles.chatHeader}>
            <h2 className={styles.chatTitle}>ShowVault AI</h2>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              title="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className={styles.messagesContainer}>
            {displayMessages.length === 0 ? (
              <div className={styles.emptyState}>
                <div>🎬</div>
                <p>
                  Hello! I can help you search for movies, find similar shows,
                  and navigate the app. Ask me anything!
                </p>
              </div>
            ) : (
              <>
                {displayMessages.map((message, i) => (
                  <div
                    key={i}
                    className={`${styles.message} ${styles[message.type]}`}
                  >
                    <strong>
                      {message.type === "user"
                        ? "You"
                        : message.type === "tool"
                          ? "🔧 Tool"
                          : "AI Assistant"}
                    </strong>
                    <div style={{ marginTop: "0.2rem" }}>
                      {message.type === "tool" ? (
                        // Display tool message
                        <div>
                          {message.content}
                          {message.toolResult && (
                            <details
                              style={{
                                marginTop: "0.5rem",
                                fontSize: "0.9em",
                                opacity: 0.8,
                              }}
                            >
                              <summary>View tool result</summary>
                              <pre
                                style={{
                                  marginTop: "0.5rem",
                                  padding: "0.5rem",
                                  background: "rgba(0,0,0,0.1)",
                                  borderRadius: "4px",
                                  overflow: "auto",
                                  maxHeight: "150px",
                                }}
                              >
                                {JSON.stringify(message.toolResult, null, 2)}
                              </pre>
                            </details>
                          )}
                        </div>
                      ) : (
                        // Display regular message with markdown support
                        message.content
                          .split("\n")
                          .map((line: string, idx: number) => {
                            // Parse simple markdown-like formatting
                            const parts: (string | React.ReactNode)[] = [];
                            let lastIdx = 0;

                            // Handle **bold** text
                            const boldRegex = /\*\*(.+?)\*\*/g;
                            let match;
                            while ((match = boldRegex.exec(line)) !== null) {
                              parts.push(line.substring(lastIdx, match.index));
                              parts.push(
                                <strong key={`${idx}-${match.index}`}>
                                  {match[1]}
                                </strong>,
                              );
                              lastIdx = match.index + match[0].length;
                            }
                            parts.push(line.substring(lastIdx));

                            return (
                              <div key={idx}>
                                {parts.length > 1 ? parts : line}
                              </div>
                            );
                          })
                      )}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className={styles.thinkingIndicator}>Thinking...</div>
                )}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Container */}
          <div className={styles.inputContainer}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask something..."
              disabled={loading}
              className={styles.inputField}
              rows={1}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className={styles.sendButton}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
