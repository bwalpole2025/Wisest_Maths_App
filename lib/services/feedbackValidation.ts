/**
 * Load-time validation for per-question `feedbackRules` (Layer 2).
 *
 * Invariant: a student-facing hint must NEVER contain the question's final
 * answer — a hint should nudge, not give the answer away. `feedbackRules.test.ts`
 * runs `findLeakyFeedbackRules` across the whole bank and fails CI on any leak.
 */
import type { Question } from "@/lib/types";

/** Strip LaTeX math delimiters + whitespace and lowercase, for substring tests. */
function strip(s: string): string {
  return s
    .replace(/\\[()[\]]/g, "") // \( \) \[ \]
    .replace(/[$\s]/g, "")
    .toLowerCase();
}

/**
 * True if `hint` appears to contain the question's answer. Conservative: a
 * non-trivial answer surface (canonicalAnswer / finalAnswer, length ≥ 3 after
 * stripping, to avoid coincidental matches on "0"/"x"/etc.) must not be a
 * substring of the stripped hint.
 */
export function hintLeaksAnswer(hint: string, question: Question): boolean {
  const h = strip(hint);
  if (!h) return false;
  const answers = [question.workedSolution.canonicalAnswer, question.workedSolution.finalAnswer]
    .filter((a): a is string => typeof a === "string" && a.trim().length > 0)
    .map(strip)
    .filter((a) => a.length >= 3);
  return answers.some((a) => h.includes(a));
}

/** Every feedbackRule whose hint leaks the answer (empty = clean). */
export function findLeakyFeedbackRules(question: Question): { index: number; hint: string }[] {
  const rules = question.feedbackRules ?? [];
  const leaks: { index: number; hint: string }[] = [];
  rules.forEach((rule, index) => {
    if (hintLeaksAnswer(rule.hint, question)) leaks.push({ index, hint: rule.hint });
  });
  return leaks;
}
