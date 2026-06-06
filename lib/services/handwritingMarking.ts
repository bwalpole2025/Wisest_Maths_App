/**
 * Handwriting marking service.
 *
 * Orchestrates: vision recognition of the student's final answer (Gemini) →
 * deterministic SYMBOLIC marking against the question's canonical solution,
 * reusing the exact engine behind /api/quiz/grade (symbolicGrading + sympy).
 * The grade therefore never depends on the vision model "deciding" correctness —
 * it only transcribes; the maths engine marks.
 *
 * The image is processed in-memory by the caller; nothing is persisted here.
 */

import type { Question, HandwritingMarkingResult } from "@/lib/types";
import {
  canonicalFor,
  isFormSensitive,
  checkEquivalence,
  type EquivalenceResult,
} from "./symbolicGrading";
import { gradeWithSympy } from "./sympyGrading";
import { recogniseHandwriting } from "@/lib/ai/marking/recognise";
import { sanitiseRecognisedAnswer } from "@/lib/ai/marking/sanitise";
import type { Recognition } from "@/lib/ai/marking/validateOutput";

export interface MarkInput {
  imageBase64: string;
  mimeType: string;
  question: Question;
}

/** Injectable dependency so the orchestration can be unit-tested without network. */
export interface MarkDeps {
  recognise?: (i: { imageBase64: string; mimeType: string; questionText: string }) => Promise<Recognition>;
}

/**
 * Mark an already-recognised answer string against a question — the same hybrid
 * logic as /api/quiz/grade: SymPy is authoritative for form-sensitive questions
 * ("simplify", "in surd form", …); otherwise a fast mathjs check first, then
 * defer to SymPy, then fall back. Pure with respect to the answer + question.
 */
export async function gradeRecognisedAnswer(
  recognised: string,
  question: Question,
): Promise<EquivalenceResult> {
  const canonical = canonicalFor(question.workedSolution);
  const strict = isFormSensitive(question.tags);

  if (strict) {
    return gradeWithSympy(recognised, canonical, true);
  }
  const fast = checkEquivalence(recognised, canonical);
  if (fast.equivalent === true) return fast;
  const sympy = await gradeWithSympy(recognised, canonical, false);
  return sympy.equivalent !== null ? sympy : fast;
}

/**
 * Recognise the final answer in the photo, then mark it. Returns a result that
 * is safe to send to the client (no canonical answer leaked).
 */
export async function markHandwriting(
  input: MarkInput,
  deps: MarkDeps = {},
): Promise<HandwritingMarkingResult> {
  const recognise = deps.recognise ?? recogniseHandwriting;

  const recog = await recognise({
    imageBase64: input.imageBase64,
    mimeType: input.mimeType,
    questionText: input.question.questionText,
  });

  if (!recog.legible || !recog.recognisedAnswer.trim()) {
    return {
      recognised: null,
      legible: false,
      equivalent: null,
      needsManualGrade: true,
      method: "recognition",
      detail: recog.notes?.trim() || "Couldn't read a final answer from the photo — try a clearer picture.",
    };
  }

  const answer = sanitiseRecognisedAnswer(recog.recognisedAnswer);
  const graded = await gradeRecognisedAnswer(answer, input.question);

  return {
    recognised: answer,
    legible: true,
    equivalent: graded.equivalent,
    needsManualGrade: graded.equivalent === null,
    method: graded.method,
    detail: graded.detail,
  };
}
