/**
 * A-Level mark-scheme grader — provider abstraction.
 *
 * The marking service depends only on `MarkGrader`, so the LLM vendor (Google
 * Gemini today) can be swapped. The grader takes the question, the official mark scheme,
 * and the student's CONFIRMED working, and returns a validated MarkBreakdown.
 */

import type { MarkScheme, MarkBreakdown } from "@/lib/types";

export type GraderErrorCode =
  | "config" // API key / model not configured
  | "gemini_auth" // 401/403
  | "gemini_http" // other HTTP / network failure
  | "anthropic_auth" // 401/403 (legacy Anthropic grader)
  | "anthropic_http" // other HTTP / network failure (legacy Anthropic grader)
  | "timeout" // request aborted / timed out
  | "schema"; // response was not valid JSON / failed schema or scheme conformance

/** Typed, non-secret error from the grader. */
export class GraderError extends Error {
  constructor(
    public readonly code: GraderErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "GraderError";
  }
}

export interface GradeInput {
  questionText: string;
  scheme: MarkScheme;
  /** The student-approved working — NEVER the raw OCR. */
  confirmedLatex: string;
}

export interface MarkGrader {
  /** The model id used (persisted as MarkingResult.markerModel). */
  readonly model: string;
  grade(input: GradeInput): Promise<MarkBreakdown>;
}
