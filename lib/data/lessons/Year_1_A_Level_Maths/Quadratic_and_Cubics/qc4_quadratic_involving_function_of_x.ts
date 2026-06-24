import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Quadratic Equations Involving a Function of x
 * Ref:   qc4
 */
export const lesson: Lesson = {
  topicRef: "qc4",
  title: "Quadratic Equations Involving a Function of x",
  intro:
    "Many equations that look harder than quadratics are quadratics in disguise. A single substitution turns \\(x^4\\), \\(2^x\\) or \\(\\cos x\\) problems into a plain quadratic you already know how to solve.",
  cards: [
    {
      id: "qc4-c1",
      title: "Spotting the hidden quadratic",
      concept:
        "An equation is a 'hidden quadratic' when one power is exactly double another. In \\(x^4 - 5x^2 + 4 = 0\\), the \\(x^4\\) is the square of \\(x^2\\). Letting \\(u = x^2\\) turns it into \\(u^2 - 5u + 4 = 0\\).",
      miniQuestion: {
        prompt: "What substitution turns \\(x^4 - 5x^2 + 4 = 0\\) into a quadratic?",
        expectedAnswer: "\\(u = x^2\\)",
        options: ["\\(u = x^4\\)", "\\(u = x^2\\)", "\\(u = x\\)", "\\(u = 2x\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Since \\(x^4 = (x^2)^2\\), setting \\(u = x^2\\) gives \\(u^2 - 5u + 4 = 0\\) — a standard quadratic. The clue is always that the top power is twice the middle one.",
        hints: [
          "Look at the powers: \\(4\\) is twice \\(2\\).",
          "Let the middle term's variable part be \\(u\\), so \\(u = x^2\\).",
        ],
      },
    },
    {
      id: "qc4-c2",
      title: "Solve for u, then undo the substitution",
      concept:
        "After substituting, solve the quadratic in \\(u\\), then return to \\(x\\). With \\(u = x^2\\), \\(u^2 - 5u + 4 = 0\\) gives \\((u-1)(u-4) = 0\\), so \\(u = 1\\) or \\(u = 4\\). Each value of \\(u\\) must then be converted back: \\(x^2 = u\\).",
      miniQuestion: {
        prompt: "If \\(u = x^2\\) and \\(u = 4\\), what are the values of \\(x\\)?",
        expectedAnswer: "\\(x = \\pm 2\\)",
        options: ["\\(x = 2\\)", "\\(x = \\pm 4\\)", "\\(x = \\pm 16\\)", "\\(x = \\pm 2\\)"],
        correctIndex: 3,
        answerType: "equationRoots",
        insight:
          "\\(x^2 = 4\\) means \\(x = \\pm 2\\) — both signs, because squaring either gives \\(4\\). Forgetting the negative root is the classic slip here.",
        hints: [
          "Replace \\(u\\) with \\(x^2\\): \\(x^2 = 4\\).",
          "Take the square root of both sides and remember \\(\\pm\\).",
        ],
      },
    },
    {
      id: "qc4-c3",
      title: "Every positive u gives two x-roots",
      concept:
        "Because \\(x^2 = u\\) has solutions \\(x = \\pm\\sqrt{u}\\), each positive \\(u\\) produces two \\(x\\)-values. So \\(u = 1\\) and \\(u = 4\\) together give four roots. A negative \\(u\\) gives no real \\(x\\), since a square cannot be negative.",
      miniQuestion: {
        prompt: "How many real solutions for \\(x\\) come from \\(u = 1\\) and \\(u = 4\\) (with \\(u = x^2\\))?",
        expectedAnswer: "4",
        options: ["2", "4", "3", "1"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(x^2 = 1\\) gives \\(x = \\pm 1\\) and \\(x^2 = 4\\) gives \\(x = \\pm 2\\): four roots in all, \\(x = -2, -1, 1, 2\\). Two positive \\(u\\)-values double up into four \\(x\\)-roots.",
        hints: [
          "Each positive value of \\(u\\) gives how many \\(x\\)?",
          "\\(\\pm\\sqrt{1}\\) and \\(\\pm\\sqrt{4}\\) — count them.",
        ],
      },
    },
    {
      id: "qc4-c4",
      title: "The same trick for other functions",
      concept:
        "The substitution idea is general. For \\(2^{2x} - 5\\cdot 2^x + 4 = 0\\), note \\(2^{2x} = (2^x)^2\\), so \\(u = 2^x\\). For trig, \\(2\\cos^2 x + 5\\cos x - 3 = 0\\) becomes a quadratic with \\(u = \\cos x\\). Pick \\(u\\) to be the repeated building block.",
      miniQuestion: {
        prompt: "What substitution converts \\(u^2 - 5u + 4 = 0\\) form for \\(4^{x} - 5\\cdot 2^{x} + 4 = 0\\)? Give \\(u\\).",
        expectedAnswer: "\\(u = 2^{x}\\)",
        options: [
          "\\(u = 4^{x}\\)",
          "\\(u = 2^{x}\\)",
          "\\(u = 2x\\)",
          "\\(u = x^{2}\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(4^x = (2^2)^x = (2^x)^2\\), so with \\(u = 2^x\\) the equation is \\(u^2 - 5u + 4 = 0\\). Always let \\(u\\) be the term whose square appears.",
        hints: [
          "Write \\(4^x\\) as a power of \\(2^x\\): \\(4^x = (2^x)^2\\).",
          "Let \\(u\\) equal the thing being squared.",
        ],
      },
    },
  ],
};
