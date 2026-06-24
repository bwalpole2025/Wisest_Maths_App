import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: The Remainder Theorem
 * Ref:   qc8
 */
export const lesson: Lesson = {
  topicRef: "qc8",
  title: "The Remainder Theorem",
  intro:
    "The Remainder Theorem is a shortcut: it tells you the remainder when dividing a polynomial by \\((x - a)\\) without doing any division at all. You just evaluate the polynomial at one number.",
  cards: [
    {
      id: "qc8-c1",
      title: "The shortcut",
      concept:
        "The Remainder Theorem says: when \\(f(x)\\) is divided by \\((x - a)\\), the remainder is \\(f(a)\\). So instead of long division, substitute \\(x = a\\) into the polynomial. To find the remainder on dividing by \\((x - 1)\\), compute \\(f(1)\\).",
      miniQuestion: {
        prompt: "Find the remainder when \\(f(x) = x^3 - 4x^2 + x + 6\\) is divided by \\((x - 1)\\).",
        expectedAnswer: "4",
        options: ["0", "4", "-4", "6"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "By the theorem the remainder is \\(f(1) = 1 - 4 + 1 + 6 = 4\\). No division needed — one substitution gives the answer.",
        hints: [
          "Dividing by \\((x-1)\\) means evaluate \\(f(1)\\).",
          "Compute \\(1^3 - 4(1)^2 + 1 + 6\\).",
        ],
      },
    },
    {
      id: "qc8-c2",
      title: "Reading off the value of a",
      concept:
        "The divisor \\((x - a)\\) hands you \\(a\\) directly, but mind the sign. For \\((x - 3)\\), \\(a = 3\\). For \\((x + 2)\\), rewrite as \\((x - (-2))\\), so \\(a = -2\\). You always evaluate at the value that makes the bracket zero.",
      miniQuestion: {
        prompt: "When dividing by \\((x + 2)\\), at what value of \\(x\\) do you evaluate \\(f\\)?",
        expectedAnswer: "-2",
        options: ["2", "-2", "0", "-1"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\((x + 2) = (x - (-2))\\), so \\(a = -2\\): the remainder is \\(f(-2)\\). The right number is whatever makes the divisor zero.",
        hints: [
          "Set the divisor equal to zero: \\(x + 2 = 0\\).",
          "Solve for \\(x\\).",
        ],
      },
    },
    {
      id: "qc8-c3",
      title: "A zero remainder means a factor",
      concept:
        "If \\(f(a) = 0\\), the remainder is zero, which means \\((x - a)\\) divides \\(f(x)\\) exactly — it is a factor. A nonzero \\(f(a)\\) means it is not a factor. This link is the bridge to the Factor Theorem.",
      miniQuestion: {
        prompt: "For \\(f(x) = x^3 - 4x^2 + x + 6\\), compute \\(f(2)\\).",
        expectedAnswer: "0",
        options: ["8", "4", "0", "-8"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\(f(2) = 8 - 16 + 2 + 6 = 0\\). A remainder of zero means \\((x - 2)\\) is a factor of \\(f(x)\\) — the remainder doubles as a factor test.",
        hints: [
          "Substitute \\(x = 2\\).",
          "Compute \\(8 - 16 + 2 + 6\\).",
        ],
      },
    },
    {
      id: "qc8-c4",
      title: "Divisors of the form (bx − a)",
      concept:
        "When the divisor is \\((bx - a)\\), set it to zero to find \\(x = \\tfrac{a}{b}\\), then the remainder is \\(f\\!\\left(\\tfrac{a}{b}\\right)\\). For \\((2x - 1)\\), evaluate at \\(x = \\tfrac{1}{2}\\).",
      miniQuestion: {
        prompt: "When dividing by \\((2x - 1)\\), at what value of \\(x\\) do you evaluate \\(f\\)?",
        expectedAnswer: "\\(\\tfrac{1}{2}\\)",
        options: [
          "\\(1\\)",
          "\\(-\\tfrac{1}{2}\\)",
          "\\(\\tfrac{1}{2}\\)",
          "\\(2\\)",
        ],
        correctIndex: 2,
        answerType: "exactValue",
        insight:
          "Set \\(2x - 1 = 0\\), giving \\(x = \\tfrac{1}{2}\\); the remainder is \\(f\\!\\left(\\tfrac{1}{2}\\right)\\). The rule is always: evaluate where the divisor vanishes.",
        hints: [
          "Solve \\(2x - 1 = 0\\).",
          "Divide: \\(x = \\tfrac{1}{2}\\).",
        ],
      },
    },
  ],
};
