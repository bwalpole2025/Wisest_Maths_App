import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Differentiating y = f(x)
 * Ref:   d2
 */
export const lesson: Lesson = {
  topicRef: "d2",
  title: "Differentiating y = f(x)",
  intro:
    "Differentiation finds the gradient function — a formula for the slope at any point on a curve. For powers of \\(x\\), one rule does almost all the work.",
  cards: [
    {
      id: "d2-c1",
      title: "The power rule",
      concept:
        "If \\(y = x^n\\), then \\(\\frac{dy}{dx} = n x^{n-1}\\). In words: bring the index down to the front as a multiplier, then reduce the index by one. So \\(x^5\\) differentiates to \\(5x^4\\).",
      miniQuestion: {
        prompt: "Differentiate \\(y = x^5\\).",
        expectedAnswer: "\\(5x^4\\)",
        options: ["\\(5x^5\\)", "\\(5x^4\\)", "\\(x^4\\)", "\\(4x^5\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Bring the 5 down and reduce the power: \\(5x^{5-1} = 5x^4\\). The old index becomes the coefficient; the new index is one less.",
        hints: [
          "The rule is \\(\\frac{dy}{dx} = n x^{n-1}\\). Here \\(n = 5\\).",
          "Multiply by the index (5), then subtract 1 from the index.",
        ],
      },
    },
    {
      id: "d2-c2",
      title: "Constants ride along",
      concept:
        "A constant coefficient just multiplies the result: if \\(y = a x^n\\) then \\(\\frac{dy}{dx} = a n x^{n-1}\\). For \\(y = 3x^2\\), bring the 2 down to multiply the 3, giving \\(6x\\).",
      miniQuestion: {
        prompt: "Differentiate \\(y = 4x^3\\).",
        expectedAnswer: "\\(12x^2\\)",
        options: ["\\(12x^3\\)", "\\(7x^2\\)", "\\(3x^2\\)", "\\(12x^2\\)"],
        correctIndex: 3,
        answerType: "expression",
        insight:
          "Bring the 3 down to multiply the 4: \\(4 \\times 3 = 12\\), and reduce the power to 2, giving \\(12x^2\\).",
        hints: [
          "Differentiate \\(x^3\\) first, then keep the 4 attached.",
          "\\(4 \\times (\\text{index})\\) gives the new coefficient. What is \\(4 \\times 3\\)?",
        ],
      },
    },
    {
      id: "d2-c3",
      title: "Differentiate term by term",
      concept:
        "A sum is differentiated one term at a time. Also remember two special cases: \\(x\\) (which is \\(x^1\\)) differentiates to \\(1\\), and a plain constant differentiates to \\(0\\) — a constant has no slope.",
      miniQuestion: {
        prompt: "Differentiate \\(y = x^2 + 3x + 7\\).",
        expectedAnswer: "\\(2x + 3\\)",
        options: ["\\(2x + 3 + 7\\)", "\\(2x + 3\\)", "\\(2x\\)", "\\(x + 3\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Term by term: \\(x^2 \\to 2x\\), \\(3x \\to 3\\), and \\(7 \\to 0\\). The constant vanishes because a flat constant has zero gradient. So \\(\\frac{dy}{dx} = 2x + 3\\).",
        hints: [
          "Differentiate each term separately.",
          "What does \\(3x\\) differentiate to? And what does the constant \\(7\\) become?",
        ],
      },
    },
  ],
};
