/** Wrap text as an Anthropic Messages API response envelope (per the docs). */
export function messagesResponse(text: string) {
  return {
    id: "msg_test",
    type: "message",
    role: "assistant",
    model: "claude-opus-4-8",
    content: [{ type: "text", text }],
    stop_reason: "end_turn",
    stop_sequence: null,
    usage: { input_tokens: 100, output_tokens: 200 },
  };
}

/** A Response object carrying a Messages envelope whose text is `text`. */
export function anthropicTextResponse(text: string, status = 200): Response {
  return new Response(JSON.stringify(messagesResponse(text)), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
