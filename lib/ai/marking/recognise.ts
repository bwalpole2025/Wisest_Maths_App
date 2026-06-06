/**
 * Handwriting recognition via the Google Gemini vision model.
 *
 * Mirrors the raw-fetch pattern used by the Socratic tutor (app/api/socratic),
 * adding an inlineData image part. Returns the validated transcription of the
 * student's final answer; it does NOT mark the work (see handwritingMarking).
 *
 * The image bytes are passed through in-memory and never persisted.
 */

import { HANDWRITING_SYSTEM_INSTRUCTIONS } from "./systemInstructions";
import { parseRecognition, type Recognition } from "./validateOutput";

const GEMINI_MODEL = "gemini-2.5-flash";

export interface RecogniseInput {
  /** Base64-encoded image bytes (no data: URL prefix). */
  imageBase64: string;
  /** Image MIME type, e.g. "image/jpeg". */
  mimeType: string;
  /** The question stem, given to the model for context. */
  questionText: string;
}

/**
 * Send the photo + question to Gemini and return the validated final-answer
 * transcription. Throws if the API key is missing or the API call fails — the
 * caller (the route) maps those to 503 / 502 responses.
 */
export async function recogniseHandwriting(input: RecogniseInput): Promise<Recognition> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const userText = `Question:\n${input.questionText}\n\nRead the student's final answer from the attached file (a photo or PDF of their working) and return the JSON described in your instructions.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: HANDWRITING_SYSTEM_INSTRUCTIONS }] },
        contents: [
          {
            role: "user",
            parts: [
              { text: userText },
              { inlineData: { mimeType: input.mimeType, data: input.imageBase64 } },
            ],
          },
        ],
        generationConfig: {
          temperature: 0,
          maxOutputTokens: 1024,
          thinkingConfig: { thinkingBudget: 0 },
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[Marking] Gemini API error:", response.status, errorText);
    throw new Error(`Gemini API returned ${response.status}`);
  }

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts;
  let text = "";
  if (Array.isArray(parts)) {
    for (let i = parts.length - 1; i >= 0; i--) {
      if (parts[i].thought) continue;
      if (parts[i].text) {
        text = parts[i].text;
        break;
      }
    }
  }
  return parseRecognition(text);
}
