/**
 * Validation of the handwriting vision model's JSON output.
 *
 * The model is instructed to return strict JSON; we never trust that, so we
 * strip code fences, parse, and validate against a Zod schema. Anything that
 * doesn't conform is treated as "could not read" rather than crashing the route.
 */

import { z } from "zod";

const RecognitionSchema = z
  .object({
    recognisedAnswer: z.string().max(512),
    legible: z.boolean(),
    confidence: z.number().min(0).max(1).catch(0),
    notes: z.string().max(200).optional().default(""),
  })
  .strip();

export type Recognition = z.infer<typeof RecognitionSchema>;

/**
 * Parse + validate the raw model text. Returns a normalised Recognition, or
 * a not-legible result if the output is missing/malformed.
 */
export function parseRecognition(raw: string): Recognition {
  let text = (raw ?? "").trim();
  // Strip markdown code fences if the model wrapped the JSON.
  if (text.startsWith("```")) {
    text = text.replace(/^```json?\s*/i, "").replace(/```\s*$/, "").trim();
  }
  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    return { recognisedAnswer: "", legible: false, confidence: 0, notes: "unparseable model output" };
  }
  const parsed = RecognitionSchema.safeParse(json);
  if (!parsed.success) {
    return { recognisedAnswer: "", legible: false, confidence: 0, notes: "invalid model output" };
  }
  // Empty answer can never be legible, regardless of what the model claimed.
  if (!parsed.data.recognisedAnswer.trim()) {
    return { ...parsed.data, legible: false };
  }
  return parsed.data;
}
