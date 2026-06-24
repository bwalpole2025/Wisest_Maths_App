/** Wrap text as a Gemini generateContent response envelope (per the docs). */
export function generateContentResponse(text: string) {
  return {
    candidates: [
      {
        content: { role: "model", parts: [{ text }] },
        finishReason: "STOP",
      },
    ],
    usageMetadata: { promptTokenCount: 100, candidatesTokenCount: 200 },
  };
}

/** A Response object carrying a generateContent envelope whose text is `text`. */
export function geminiTextResponse(text: string, status = 200): Response {
  return new Response(JSON.stringify(generateContentResponse(text)), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
