/**
 * Deterministic "Check Answer" for typed working.
 *
 * Grades a student's free-form, multi-line working two ways, with NO AI:
 *   1. Final answer — symbolic equivalence vs the worked solution's canonical
 *      answer (the same hybrid mathjs→SymPy path as /api/quiz/grade, reused via
 *      `gradeRecognisedAnswer`).
 *   2. The workings — for each worked-solution step that carries `workingLatex`,
 *      check whether some line of the student's working is symbolically
 *      equivalent to it (mathjs only — fast, no per-step SymPy spawn).
 *
 * Step-matching is approximate: a valid ALTERNATIVE method may match few model
 * steps, so callers must present `matchedSteps` as guidance, never as a mark.
 */

import { checkEquivalence, canonicalFor, type EquivalenceResult } from "@/lib/services/symbolicGrading";
import { gradeRecognisedAnswer } from "@/lib/services/handwritingMarking";
import type { Question } from "@/lib/types";

export interface WorkingCheckResult {
  finalAnswer: {
    equivalent: boolean | null;
    needsManualGrade: boolean;
    method: EquivalenceResult["method"];
    detail: string;
  };
  working: {
    totalSteps: number;
    matchedSteps: number;
    /** Model steps not found in the student's working (description = a hint, not the maths). */
    missing: { stepNumber: number; description: string }[];
  };
}

/** Non-empty, trimmed lines of the student's working. */
function toLines(working: string): string[] {
  return working
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

/** Best-effort final-answer candidate: the last line, after the last "=" if present. */
function finalCandidate(working: string): string {
  const lines = toLines(working);
  const last = lines[lines.length - 1] ?? working.trim();
  const eq = last.lastIndexOf("=");
  const tail = eq >= 0 ? last.slice(eq + 1).trim() : last;
  return tail.length > 0 ? tail : last;
}

export async function checkWorking(working: string, question: Question): Promise<WorkingCheckResult> {
  const canonical = canonicalFor(question.workedSolution);
  const lines = toLines(working);

  // 1. Final answer — hybrid symbolic grade of the final-line candidate.
  let graded = await gradeRecognisedAnswer(finalCandidate(working), question);
  // Leniency: if the last line wasn't the answer, accept any line that is
  // symbolically equal to the canonical (fast mathjs check only).
  if (graded.equivalent !== true && canonical) {
    const anyLineMatches = lines.some((l) => checkEquivalence(l, canonical).equivalent === true);
    if (anyLineMatches) {
      graded = { ...graded, equivalent: true, detail: "A line of your working matches the final answer." };
    }
  }

  // 2. The workings — match each model step (that has working) to a student line.
  const steps = (question.workedSolution.steps ?? []).filter(
    (s) => typeof s.workingLatex === "string" && s.workingLatex.trim().length > 0,
  );
  const missing: { stepNumber: number; description: string }[] = [];
  let matchedSteps = 0;
  for (const step of steps) {
    const hit = lines.some((l) => checkEquivalence(l, step.workingLatex).equivalent === true);
    if (hit) matchedSteps += 1;
    else missing.push({ stepNumber: step.stepNumber, description: step.description });
  }

  return {
    finalAnswer: {
      equivalent: graded.equivalent,
      needsManualGrade: graded.equivalent === null,
      method: graded.method,
      detail: graded.detail,
    },
    working: { totalSteps: steps.length, matchedSteps, missing },
  };
}
