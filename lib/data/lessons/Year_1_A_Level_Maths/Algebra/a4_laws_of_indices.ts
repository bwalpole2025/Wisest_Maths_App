import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Laws of Indices
 * Ref:   a4
 */
export const lesson: Lesson = {
  topicRef: "a4",
  title: "Laws of Indices",
  intro:
    "An index just counts how many times you multiply a base by itself. A handful of rules let you combine indices without ever writing the multiplication out — and they extend neatly to zero, negative, and fractional powers.",
  cards: [
    {
      id: "a4-c1",
      title: "Add to multiply, subtract to divide",
      concept:
        "With the same base, multiplying means adding the indices and dividing means subtracting them: \\(a^m \\times a^n = a^{m+n}\\) and \\(a^m \\div a^n = a^{m-n}\\). So \\(5^3 \\times 5^4 = 5^{7}\\) and \\(8^5 \\div 8^2 = 8^{3}\\). This only works when the base is the same — you cannot combine \\(2^3 \\times 3^2\\) this way.",
      miniQuestion: {
        prompt: "Simplify, leaving your answer as a power: \\(\\frac{6^{11}}{6^6}\\).",
        expectedAnswer: "\\(6^{5}\\)",
        options: ["\\(6^{17}\\)", "\\(6^{5}\\)", "\\(1^{5}\\)", "\\(6^{6}\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Dividing same-base powers subtracts the indices: \\(6^{11 - 6} = 6^{5}\\).",
        hints: [
          "Dividing powers of the same base means doing what to the indices?",
          "Subtract: \\(11 - 6\\).",
        ],
      },
    },
    {
      id: "a4-c2",
      title: "Power of a power multiplies",
      concept:
        "Raising a power to another power multiplies the indices: \\((a^m)^n = a^{mn}\\). So \\((6^3)^2 = 6^{3 \\times 2} = 6^{6}\\). Don't confuse this with multiplying powers, where you *add* — a bracketed power that is itself raised to a power *multiplies*.",
      miniQuestion: {
        prompt: "Simplify \\((k^{-2})^5\\).",
        expectedAnswer: "\\(k^{-10}\\)",
        options: ["\\(k^{3}\\)", "\\(k^{10}\\)", "\\(k^{-10}\\)", "\\(k^{-7}\\)"],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Multiply the indices: \\(-2 \\times 5 = -10\\), giving \\(k^{-10}\\). The negative index carries through the multiplication.",
        hints: [
          "A power raised to a power: multiply the two indices.",
          "Work out \\(-2 \\times 5\\).",
        ],
      },
    },
    {
      id: "a4-c3",
      title: "Zero and negative indices",
      concept:
        "Anything (non-zero) to the power \\(0\\) is \\(1\\): \\(7^0 = 1\\). A negative index means \"one over\": \\(a^{-n} = \\frac{1}{a^n}\\). Both follow from the division rule — \\(a^m \\div a^m = a^0 = 1\\), and \\(a^0 \\div a^n = a^{-n} = \\frac{1}{a^n}\\). So \\(\\frac{1}{m} = m^{-1}\\).",
      miniQuestion: {
        prompt: "Evaluate \\(4^{-\\frac{1}{2}}\\).",
        expectedAnswer: "\\(\\frac{1}{2}\\)",
        options: ["\\(2\\)", "\\(-2\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{1}{16}\\)"],
        correctIndex: 2,
        answerType: "exactValue",
        insight:
          "The negative index flips it: \\(4^{-\\frac{1}{2}} = \\frac{1}{4^{1/2}} = \\frac{1}{\\sqrt{4}} = \\frac{1}{2}\\).",
        hints: [
          "A negative index means take the reciprocal: \\(4^{-1/2} = \\frac{1}{4^{1/2}}\\).",
          "What does the power \\(\\tfrac{1}{2}\\) do? It takes the square root.",
          "\\(\\sqrt{4} = 2\\), so you have \\(\\frac{1}{2}\\).",
        ],
      },
    },
    {
      id: "a4-c4",
      title: "Fractional indices are roots",
      concept:
        "A unit fraction index is a root: \\(a^{\\frac{1}{n}} = \\sqrt[n]{a}\\), so \\(9^{\\frac{1}{2}} = \\sqrt{9} = 3\\) and \\(8^{\\frac{1}{3}} = \\sqrt[3]{8} = 2\\). For a general fraction, \\(a^{\\frac{m}{n}} = \\left(\\sqrt[n]{a}\\right)^m\\): take the root first, then raise to the power — it keeps the numbers small.",
      miniQuestion: {
        prompt: "Evaluate \\(16^{\\frac{3}{4}}\\).",
        expectedAnswer: "\\(8\\)",
        options: ["\\(12\\)", "\\(8\\)", "\\(6\\)", "\\(64\\)"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "Root first: \\(\\sqrt[4]{16} = 2\\); then cube it: \\(2^3 = 8\\). Taking the \\(4\\)th root before the power avoids handling \\(16^3\\).",
        hints: [
          "The denominator \\(4\\) is the root; the numerator \\(3\\) is the power.",
          "Find \\(\\sqrt[4]{16}\\) first.",
          "\\(\\sqrt[4]{16} = 2\\); now raise that to the power \\(3\\).",
        ],
      },
    },
    {
      id: "a4-c5",
      title: "Combine the laws in one expression",
      concept:
        "Bigger expressions just apply these laws in turn: deal with brackets (multiply indices), then group same bases and add or subtract. For \\(\\frac{2^3 \\times 2}{2^5}\\), the top is \\(2^{3+1} = 2^4\\), so \\(\\frac{2^4}{2^5} = 2^{4-5} = 2^{-1} = \\frac{1}{2}\\). Remember a lone \\(2\\) means \\(2^1\\).",
      miniQuestion: {
        prompt: "Evaluate \\(\\frac{7^3 \\times 7^4}{7^6}\\).",
        expectedAnswer: "\\(7\\)",
        options: ["\\(49\\)", "\\(1\\)", "\\(7\\)", "\\(7^{13}\\)"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Top: \\(7^{3+4} = 7^7\\); then \\(7^{7-6} = 7^1 = 7\\). Add the indices on top, subtract for the division.",
        hints: [
          "Combine the two powers on the top by adding their indices.",
          "That gives \\(7^7\\) on top over \\(7^6\\).",
          "Subtract: \\(7^{7-6}\\).",
        ],
      },
    },
  ],
};
