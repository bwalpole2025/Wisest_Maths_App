/**
 * Socratic Tutor — Output Validation & Safety Checks
 *
 * Validates the Gemini response BEFORE it reaches the frontend.
 * Ensures it conforms to the expected schema and does not contain
 * prohibited content (code snippets, non-maths advice, leaked keys).
 */

import { z } from "zod";
import type { SocraticResponse } from "./types";

// ── Response schema (Zod) — flexible to handle Gemini variations ─────

const EvaluationSchema = z.object({
  answerCorrect: z.boolean(),
  reasoningSound: z.boolean(),
  feedback: z.string().max(5000),
  guidingQuestion: z.string().max(2000).nullable().optional(),
  mentalModelCorrection: z.string().max(2000).nullable().optional(),
  correctWorking: z.string().max(5000).nullable().optional(),
  score: z.number().min(0).max(10),
});

const GeminiResponseSchema = z.object({
  questionNumber: z.number().min(1).max(6),
  questionText: z.string().max(3000).optional().nullable(),
  evaluation: EvaluationSchema.nullable().optional(),
  sessionComplete: z.boolean().optional().default(false),
  overallFeedback: z.string().max(5000).nullable().optional(),
  overallScore: z.number().min(0).max(50).nullable().optional(),
});

// ── Prohibited content patterns ──────────────────────────────────────

const PROHIBITED_PATTERNS: RegExp[] = [
  /\bfunction\s+\w+\s*\(/,
  /\bconst\s+\w+\s*=/,
  /\bimport\s+\{/,
  /\bconsole\.\w+\(/,
  /sk-ant-[a-zA-Z0-9]/,
  /sk_live_[a-zA-Z0-9]/,
  /GEMINI_API_KEY/i,
  /Bearer\s+[a-zA-Z0-9._-]{20,}/,
  /\bDAN\s*mode\b/i,
  /\bdeveloper\s*mode\b/i,
];

// ── JSON extraction helper ───────────────────────────────────────────

function extractJSON(raw: string): string | null {
  // Try the raw string first
  const trimmed = raw.trim();
  if (trimmed.startsWith("{")) return trimmed;

  // Strip markdown code fences
  const fenced = trimmed.replace(/^```json?\s*/i, "").replace(/```\s*$/, "").trim();
  if (fenced.startsWith("{")) return fenced;

  // Find the first { and last } in the string
  const firstBrace = raw.indexOf("{");
  const lastBrace = raw.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    return raw.slice(firstBrace, lastBrace + 1);
  }

  return null;
}

// ── Main validation function ─────────────────────────────────────────

export interface OutputValidationResult {
  valid: boolean;
  parsed?: z.infer<typeof GeminiResponseSchema>;
  error?: string;
}

export function validateGeminiOutput(
  rawOutput: string,
  expectedQuestionNumber: number
): OutputValidationResult {
  // ── Step 1: Extract and parse JSON ─────────────────────────────
  const jsonStr = extractJSON(rawOutput);
  if (!jsonStr) {
    console.error("[Socratic] Could not extract JSON from Gemini response:", rawOutput.slice(0, 200));
    return { valid: false, error: "AI response was not valid JSON." };
  }

  let parsed: unknown;

  // Gemini's JSON output mixes properly-escaped LaTeX (\\frac) with
  // single-backslash LaTeX delimiters (\(, \)). Two problems:
  //   1. \( and \) are invalid JSON escapes — JSON.parse throws.
  //   2. \f, \t, \b, \r are *valid* JSON escapes (control chars) that
  //      silently eat the backslash from LaTeX commands like \frac,
  //      \times, \binom, \rho — producing form-feed + "rac" with no error.
  // Both cases corrupt LaTeX. Fix: normalise every backslash run before
  // parsing — preserve already-doubled \\ and the two truly-needed JSON
  // escapes (\n, \"), and double everything else so it survives JSON.parse
  // as a literal backslash for KaTeX.
  function fixBackslashes(s: string): string {
    const out: string[] = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "\\") {
        const next = s[i + 1] || "";
        if (next === "\\" || next === "n" || next === '"') {
          // Already a valid JSON escape we care about — preserve as-is
          out.push(s[i], next);
          i++;
        } else {
          // Single backslash followed by anything else — treat as LaTeX,
          // double it so JSON.parse yields a literal backslash
          out.push("\\\\");
        }
      } else {
        out.push(s[i]);
      }
    }
    return out.join("");
  }

  try {
    parsed = JSON.parse(fixBackslashes(jsonStr));
  } catch (e) {
    console.error("[Socratic] JSON parse failed:", (e as Error).message);
    console.error("[Socratic] First 300 chars:", jsonStr.slice(0, 300));
    return { valid: false, error: "AI response was not valid JSON." };
  }

  // ── Step 2: Schema validation ──────────────────────────────────
  const result = GeminiResponseSchema.safeParse(parsed);
  if (!result.success) {
    console.error("[Socratic] Schema validation failed:", result.error.issues);
    return { valid: false, error: "AI response did not match expected format." };
  }

  const data = result.data;

  // ── Step 3: Prohibited content scan ────────────────────────────
  const allText = [
    data.questionText ?? "",
    data.evaluation?.feedback ?? "",
    data.evaluation?.guidingQuestion ?? "",
    data.evaluation?.mentalModelCorrection ?? "",
    data.overallFeedback ?? "",
  ].join(" ");

  for (const pattern of PROHIBITED_PATTERNS) {
    if (pattern.test(allText)) {
      console.error("[Socratic] Prohibited content detected in Gemini response");
      return { valid: false, error: "The AI produced an invalid response." };
    }
  }

  // ── Step 4: Question number check (flexible) ──────────────────
  // Gemini may return the current Q number OR the next Q number
  // Accept both: expectedQuestionNumber and expectedQuestionNumber + 1
  if (
    data.questionNumber !== expectedQuestionNumber &&
    data.questionNumber !== expectedQuestionNumber + 1
  ) {
    console.error(
      `[Socratic] Question number mismatch: expected ${expectedQuestionNumber} or ${expectedQuestionNumber + 1}, got ${data.questionNumber}`
    );
    // Don't fail — just log. The session store is the source of truth.
  }

  return { valid: true, parsed: data };
}

/**
 * Returns the generic error response for the frontend.
 */
export function getGenericErrorResponse(): SocraticResponse {
  return {
    questionNumber: 0,
    totalQuestions: 5,
    evaluation: null,
    nextQuestion: null,
    sessionComplete: false,
    overallFeedback: null,
    overallScore: null,
  };
}
