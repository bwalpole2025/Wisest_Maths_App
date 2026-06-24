import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Algebraic Division
 * Ref:   qc11
 */
export const lesson: Lesson = {
  topicRef: "qc11",
  title: "Algebraic Division",
  intro:
    "Algebraic (long) division divides one polynomial by another, just like dividing numbers. It's how you turn a known factor of a cubic into the quadratic that completes the factorisation.",
  cards: [
    {
      id: "qc11-c1",
      title: "Divide the leading terms",
      concept:
        "At each step of polynomial long division, divide the leading term of what's left by the leading term of the divisor. Dividing \\(x^3 + \\dots\\) by \\(x - 2\\): the first quotient term is \\(x^3 \\div x = x^2\\).",
      miniQuestion: {
        prompt: "Dividing \\(x^3 - 3x^2 - 4x + 12\\) by \\((x - 2)\\), what is the first term of the quotient?",
        expectedAnswer: "\\(x^2\\)",
        options: ["\\(x^3\\)", "\\(x\\)", "\\(x^2\\)", "\\(2x^2\\)"],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Divide leading terms: \\(x^3 \\div x = x^2\\). Each step of long division is driven by the highest-power terms.",
        hints: [
          "Compare the leading term of the dividend with that of the divisor.",
          "\\(x^3 \\div x = ?\\)",
        ],
      },
    },
    {
      id: "qc11-c2",
      title: "Multiply back and subtract",
      concept:
        "Multiply the quotient term by the whole divisor, subtract it from the current polynomial, and bring down the next term. After \\(x^2 \\times (x - 2) = x^3 - 2x^2\\), subtracting from \\(x^3 - 3x^2\\) leaves \\(-x^2\\). Watch the signs when subtracting.",
      miniQuestion: {
        prompt: "After subtracting \\(x^3 - 2x^2\\) from \\(x^3 - 3x^2\\), what \\(x^2\\) term remains?",
        expectedAnswer: "\\(-x^2\\)",
        options: ["\\(-5x^2\\)", "\\(x^2\\)", "\\(-x^2\\)", "\\(-6x^2\\)"],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "\\((-3x^2) - (-2x^2) = -x^2\\). Subtraction flips the sign of every term you take away — the commonest place to slip.",
        hints: [
          "Subtract: \\(-3x^2 - (-2x^2)\\).",
          "Subtracting a negative adds: \\(-3x^2 + 2x^2\\).",
        ],
      },
    },
    {
      id: "qc11-c3",
      title: "Repeat until the remainder",
      concept:
        "Keep dividing, multiplying, and subtracting until the leftover has lower degree than the divisor — that leftover is the remainder. When \\((x - a)\\) is a known factor, the remainder is zero and the quotient is the quadratic you wanted.",
      miniQuestion: {
        prompt: "Dividing \\(x^3 - 3x^2 - 4x + 12\\) by \\((x - 2)\\) gives which quotient quadratic?",
        expectedAnswer: "\\(x^2 - x - 6\\)",
        options: [
          "\\(x^2 - 5x + 6\\)",
          "\\(x^2 - x - 6\\)",
          "\\(x^2 - x + 6\\)",
          "\\(x^2 + x - 6\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The division gives quotient \\(x^2 - x - 6\\) with remainder \\(0\\), confirming \\((x - 2)\\) is a factor: \\(x^3 - 3x^2 - 4x + 12 = (x - 2)(x^2 - x - 6)\\).",
        hints: [
          "The quotient is a quadratic starting \\(x^2\\); its constant times \\(-2\\) must give \\(+12\\).",
          "Check by expanding \\((x - 2)(x^2 - x - 6)\\).",
        ],
      },
    },
    {
      id: "qc11-c4",
      title: "Finish the factorisation",
      concept:
        "Once division yields the quotient quadratic, factorise it to complete the cubic. \\(x^2 - x - 6\\) needs a pair multiplying to \\(-6\\) and adding to \\(-1\\): \\(-3\\) and \\(2\\), giving \\((x - 3)(x + 2)\\).",
      miniQuestion: {
        prompt: "Fully factorise \\(x^3 - 3x^2 - 4x + 12\\), given \\((x - 2)\\) is a factor.",
        expectedAnswer: "\\((x - 2)(x - 3)(x + 2)\\)",
        options: [
          "\\((x - 2)(x + 3)(x - 2)\\)",
          "\\((x - 2)(x - 3)(x + 2)\\)",
          "\\((x - 2)(x - 6)(x + 1)\\)",
          "\\((x + 2)(x + 3)(x - 2)\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The quotient \\(x^2 - x - 6 = (x - 3)(x + 2)\\), so the cubic factorises as \\((x - 2)(x - 3)(x + 2)\\). Division plus a quadratic factorisation finishes the job.",
        hints: [
          "Factorise the quotient \\(x^2 - x - 6\\).",
          "Multiply by the known factor \\((x - 2)\\).",
        ],
      },
    },
  ],
};
