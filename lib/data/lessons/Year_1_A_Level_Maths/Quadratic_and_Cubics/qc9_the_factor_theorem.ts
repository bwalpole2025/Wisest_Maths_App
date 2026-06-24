import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: The Factor Theorem
 * Ref:   qc9
 */
export const lesson: Lesson = {
  topicRef: "qc9",
  title: "The Factor Theorem",
  intro:
    "The Factor Theorem is the Remainder Theorem's most useful special case: a single substitution tells you whether \\((x - a)\\) is a factor of a polynomial, and it is the key to unlocking cubics.",
  cards: [
    {
      id: "qc9-c1",
      title: "The test for a factor",
      concept:
        "The Factor Theorem states: \\((x - a)\\) is a factor of \\(f(x)\\) if and only if \\(f(a) = 0\\). So to test a possible factor, substitute its root and check whether you get zero.",
      miniQuestion: {
        prompt: "For \\(f(x) = x^3 - 2x^2 - 5x + 6\\), evaluate \\(f(1)\\).",
        expectedAnswer: "0",
        options: ["10", "0", "-6", "2"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(f(1) = 1 - 2 - 5 + 6 = 0\\). Because \\(f(1) = 0\\), \\((x - 1)\\) is a factor of \\(f(x)\\).",
        hints: [
          "Substitute \\(x = 1\\) into every term.",
          "Compute \\(1 - 2 - 5 + 6\\).",
        ],
      },
    },
    {
      id: "qc9-c2",
      title: "Matching factor to root, with signs",
      concept:
        "A factor \\((x - a)\\) corresponds to testing \\(x = a\\); a factor \\((x + a)\\) corresponds to \\(x = -a\\). Getting the sign right matters: to test \\((x + 3)\\) as a factor, you evaluate \\(f(-3)\\).",
      miniQuestion: {
        prompt: "To test whether \\((x + 3)\\) is a factor of \\(f(x)\\), which value do you substitute?",
        expectedAnswer: "-3",
        options: ["3", "-3", "0", "-1"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\((x + 3)\\) is zero when \\(x = -3\\), so you check \\(f(-3)\\). The factor and the value you test always have opposite signs.",
        hints: [
          "Set \\(x + 3 = 0\\).",
          "Solve for \\(x\\).",
        ],
      },
    },
    {
      id: "qc9-c3",
      title: "Hunting for a first factor",
      concept:
        "To factorise a cubic with no obvious common factor, trial small values — usually the factors of the constant term \\(\\pm 1, \\pm 2, \\pm 3, \\dots\\) — until \\(f(a) = 0\\). That \\(a\\) gives your first linear factor \\((x - a)\\).",
      miniQuestion: {
        prompt: "For \\(f(x) = x^3 - 2x^2 - 5x + 6\\), which of \\(x = 2\\) or \\(x = 3\\) gives \\(f(x) = 0\\)?",
        expectedAnswer: "3",
        options: ["2", "3", "both", "neither"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(f(3) = 27 - 18 - 15 + 6 = 0\\), while \\(f(2) = 8 - 8 - 10 + 6 = -4 \\neq 0\\). So \\((x - 3)\\) is a factor; you test divisors of the constant term \\(6\\).",
        hints: [
          "Try each value in \\(f(x)\\) and look for a result of \\(0\\).",
          "Compute \\(f(3) = 27 - 18 - 15 + 6\\).",
        ],
      },
    },
    {
      id: "qc9-c4",
      title: "Why a zero means a factor",
      concept:
        "The reason it works: by the Remainder Theorem, \\(f(a)\\) is the remainder on dividing by \\((x - a)\\). A remainder of zero means the division is exact, so \\((x - a)\\) divides \\(f(x)\\) with nothing left over — the definition of a factor.",
      miniQuestion: {
        prompt: "If \\(f(-2) = 0\\), is \\((x + 2)\\) a factor of \\(f(x)\\)? Answer yes or no.",
        expectedAnswer: "yes",
        options: ["no", "yes", "only if \\(f(2) = 0\\)", "cannot tell"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Yes: \\(f(-2) = 0\\) is the remainder on dividing by \\((x + 2)\\), and a zero remainder means \\((x + 2)\\) is a factor.",
        hints: [
          "A zero value of \\(f\\) means a zero remainder.",
          "Zero remainder means exact division — a factor.",
        ],
      },
    },
  ],
};
