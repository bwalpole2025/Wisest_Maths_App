import katex from "katex";

export function renderLatex(tex: string, displayMode = false): string {
  return katex.renderToString(tex, { throwOnError: false, displayMode });
}

export function displayMath(tex: string): string {
  return `\\[${tex}\\]`;
}

export function inlineMath(tex: string): string {
  return `\\(${tex}\\)`;
}

/* ── Simulated AI scoring ───────────────────────────── */

export interface AIFeedbackResult {
  score: number;
  feedback: string;
  correct: string;
  improvements: string[];
}

/**
 * Simulate AI assessment scoring.
 * Scores 0–10 based on substring matching with the correct answer.
 * Returns placeholder feedback strings based on the score band.
 *
 * TODO: Replace with a real Claude API call via POST /api/assess
 */
export function simulateAIFeedback(
  _questionText: string,
  studentAnswer: string,
  studentExplanation: string,
  correctAnswer: string,
): AIFeedbackResult {
  const norm = studentAnswer.toLowerCase().replace(/\s+/g, " ").trim();
  const correct = correctAnswer
    .toLowerCase()
    .replace(/\\[a-z]+/g, " ")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  /* simple keyword overlap scoring */
  const keywords = correct
    .split(/[^a-z0-9.\-]+/)
    .filter((k) => k.length > 1);
  const matchCount = keywords.filter((k) => norm.includes(k)).length;
  let score = Math.min(
    10,
    Math.round((matchCount / Math.max(keywords.length, 1)) * 7),
  );

  /* bonus for a detailed explanation */
  const expLen = studentExplanation.trim().length;
  if (expLen > 50) score = Math.min(10, score + 2);
  if (expLen > 120) score = Math.min(10, score + 1);

  let feedback: string;
  let correctMsg: string;
  let improvements: string[];

  if (score >= 7) {
    feedback =
      "Great work! You demonstrated a solid understanding of the method and arrived at the right approach.";
    correctMsg =
      "You correctly identified the technique and applied it accurately.";
    improvements = [
      "Consider showing more detailed intermediate working.",
      "Double-check arithmetic in your final steps.",
    ];
  } else if (score >= 4) {
    feedback =
      "You showed some understanding of the topic, but there are key steps that need attention.";
    correctMsg =
      "You identified the right general approach to the problem.";
    improvements = [
      "Make sure to show all intermediate steps clearly.",
      "Check that your final answer matches the expected form.",
      "Review the standard method for this type of problem.",
    ];
  } else {
    feedback =
      "This topic needs more practice. Review the worked examples and try similar problems.";
    correctMsg =
      "You made an attempt, which is a good start.";
    improvements = [
      "Revisit the core method for this topic.",
      "Practice similar problems from the question bank.",
      "Use the formula sheet for reference.",
      "Watch the video lesson again before re-attempting.",
    ];
  }

  return { score, feedback, correct: correctMsg, improvements };
}
