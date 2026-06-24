import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Expanding Brackets
 * Ref:   a1
 */
export const lesson: Lesson = {
  topicRef: "a1",
  title: "Expanding Brackets",
  intro:
    "Two brackets multiplied together hide four little products. In this lesson you'll learn to find all four — and, crucially, get every sign right.",
  cards: [
    {
      id: "a1-c1",
      title: "Every term meets every term",
      concept:
        "To expand \\((a+b)(c+d)\\) you distribute the first bracket across the second: \\(a(c+d) + b(c+d)\\). That gives four products — \\(ac\\), \\(ad\\), \\(bc\\), \\(bd\\) — because each term in the first bracket must multiply each term in the second. Miss one and the expansion is wrong.",
      miniQuestion: {
        prompt:
          "How many separate products do you get when you expand \\((x+2)(x+5)\\) before collecting like terms?",
        expectedAnswer: "4",
        options: ["2", "3", "4", "6"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Two terms times two terms gives \\(2 \\times 2 = 4\\) products. Keeping track of all four is the whole game.",
        hints: [
          "How many terms are in the first bracket? How many in the second?",
          "Each term in the first bracket multiplies each term in the second — so it's (terms in first) × (terms in second).",
        ],
      },
    },
    {
      id: "a1-c2",
      title: "Watch the signs",
      concept:
        "A subtraction inside a bracket is really a negative term: \\((x-3)\\) means \\(x + (-3)\\). When you distribute, that minus sign travels with the 3. So in \\((x+1)(x-3)\\), one of your products is \\(1 \\times (-3) = -3\\), not \\(+3\\).",
      miniQuestion: {
        prompt: "In the expansion of \\((x+1)(x-3)\\), what is the product of the two constant terms \\(1\\) and \\(-3\\)?",
        expectedAnswer: "-3",
        options: ["3", "-3", "-2", "2"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(1 \\times (-3) = -3\\). The sign belongs to the number — a negative inside the bracket stays negative when you multiply.",
        hints: [
          "Rewrite \\((x-3)\\) as \\(x + (-3)\\). What is the second constant?",
          "A positive times a negative gives a…?",
        ],
      },
    },
    {
      id: "a1-c3",
      title: "Collecting the middle terms",
      concept:
        "After distributing \\((x+1)(x-3)\\) you get \\(x^2 - 3x + x - 3\\). The two middle terms \\(-3x\\) and \\(+x\\) are like terms, so they combine: \\(-3x + x = -2x\\). The finished expansion is \\(x^2 - 2x - 3\\).",
      miniQuestion: {
        prompt: "Expand and simplify \\((x+4)(x-1)\\).",
        expectedAnswer: "\\(x^2 + 3x - 4\\)",
        options: [
          "\\(x^2 + 3x - 4\\)",
          "\\(x^2 - 3x - 4\\)",
          "\\(x^2 + 5x - 4\\)",
          "\\(x^2 + 3x + 4\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "Distributing gives \\(x^2 - x + 4x - 4\\); combining \\(-x + 4x = 3x\\) leaves \\(x^2 + 3x - 4\\). The constant \\(4 \\times (-1) = -4\\) is what makes the last term negative.",
        hints: [
          "Distribute first: \\(x(x-1) + 4(x-1)\\). What four terms do you get?",
          "You should have \\(x^2 - x + 4x - 4\\). Now combine the two \\(x\\) terms.",
          "What is \\(4 \\times (-1)\\)? That fixes the constant term's sign.",
        ],
      },
    },
    {
      id: "a1-c4",
      title: "A coefficient out front",
      concept:
        "When a bracket has a coefficient, like \\((2x+1)\\), it multiplies normally: \\(2x \\times x = 2x^2\\) and \\(2x \\times (-3) = -6x\\). Nothing new — just keep the coefficient attached to its term as you distribute.",
      miniQuestion: {
        prompt: "Expand and simplify \\((2x+1)(x-3)\\).",
        expectedAnswer: "\\(2x^2 - 5x - 3\\)",
        options: [
          "\\(2x^2 - 7x - 3\\)",
          "\\(2x^2 - 5x - 3\\)",
          "\\(2x^2 - 5x + 3\\)",
          "\\(2x^2 - 6x - 3\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(2x(x-3) + 1(x-3) = 2x^2 - 6x + x - 3\\); combining \\(-6x + x = -5x\\) gives \\(2x^2 - 5x - 3\\). The coefficient just rides along with its \\(x\\).",
        hints: [
          "Distribute: \\(2x(x-3) + 1(x-3)\\).",
          "That gives \\(2x^2 - 6x + x - 3\\). Combine the \\(x\\) terms.",
          "What is \\(-6x + x\\)?",
        ],
      },
    },
  ],
};
