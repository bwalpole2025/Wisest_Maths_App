/**
 * Shared Google Gemini client for the AI features (Socratic tutor, Guided
 * Learning). Calls the Generative Language REST API directly (no SDK) and
 * returns the model's raw text, with Gemini-2.5 thinking-parts and markdown
 * code fences stripped. Callers validate/parse the JSON themselves.
 *
 * Extracted from app/api/socratic/route.ts so both the tutor and lessons routes
 * share one implementation.
 */

import "server-only";

export type GeminiTurn = { role: string; parts: Array<{ text: string }> };

/**
 * Send a system prompt + conversation history + a new user message to Gemini and
 * return the model's text output. Throws if GEMINI_API_KEY is unset or the API
 * errors — callers should guard on the key and catch failures.
 */
export async function callGemini(
  conversationHistory: GeminiTurn[],
  userMessage: string,
  systemInstructions: string,
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemInstructions }],
        },
        contents: [
          ...conversationHistory,
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
        generationConfig: {
          temperature: 0.3, // Low temperature for consistent, accurate maths
          maxOutputTokens: 8192,
          thinkingConfig: {
            thinkingBudget: 0, // Disable thinking — all tokens go to the JSON output
          },
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[Gemini] API error:", response.status, errorText);
    throw new Error(`Gemini API returned ${response.status}`);
  }

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts;
  if (!parts || parts.length === 0) {
    throw new Error("Empty response from Gemini");
  }

  // Gemini 2.5 returns thinking parts (thought=true) and output parts.
  // Skip thinking parts; take the last non-thinking text part.
  let text = "";
  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i].thought) continue;
    if (parts[i].text) {
      text = parts[i].text;
      break;
    }
  }
  if (!text) {
    throw new Error("No text in Gemini response");
  }

  // Strip markdown code fences if present.
  text = text.trim();
  if (text.startsWith("```")) {
    text = text.replace(/^```json?\s*/i, "").replace(/```\s*$/, "").trim();
  }

  return text;
}
