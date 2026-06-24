import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Laws of Surds
 * Ref:   a5
 */
export const lesson: Lesson = {
  topicRef: "a5",
  title: "Laws of Surds",
  intro:
    "A surd is a root that won't simplify to a whole number, like \\(\\sqrt{2}\\). Two rules — splitting a root over a product and squaring a root to remove it — let you simplify, multiply, and add surds exactly.",
  cards: [
    {
      id: "a5-c1",
      title: "Split off the square factor",
      concept:
        "Surds simplify using \\(\\sqrt{ab} = \\sqrt{a} \\times \\sqrt{b}\\). To simplify \\(\\sqrt{12}\\), find the largest square number that divides \\(12\\) — that is \\(4\\) — and split: \\(\\sqrt{12} = \\sqrt{4 \\times 3} = \\sqrt{4}\\,\\sqrt{3} = 2\\sqrt{3}\\). Always pull out the *largest* square factor so the surd that remains is as small as possible.",
      miniQuestion: {
        prompt: "Simplify \\(\\sqrt{75}\\).",
        expectedAnswer: "\\(5\\sqrt{3}\\)",
        options: [
          "\\(5\\sqrt{3}\\)",
          "\\(3\\sqrt{5}\\)",
          "\\(25\\sqrt{3}\\)",
          "\\(15\\sqrt{5}\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "\\(25\\) is the largest square factor of \\(75\\): \\(\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}\\).",
        hints: [
          "Which square number divides \\(75\\)?",
          "Write \\(75\\) as \\(25 \\times 3\\).",
          "\\(\\sqrt{25} = 5\\), so you get \\(5\\sqrt{3}\\).",
        ],
      },
    },
    {
      id: "a5-c2",
      title: "Squaring removes the root",
      concept:
        "By definition, \\(\\sqrt{a} \\times \\sqrt{a} = a\\), so \\((\\sqrt{5})^2 = 5\\) and \\(\\sqrt{6} \\times \\sqrt{6} = 6\\). When a number sits in front, square it separately: \\((3\\sqrt{7})^2 = 3^2 \\times (\\sqrt{7})^2 = 9 \\times 7 = 63\\). The coefficient and the surd each get squared.",
      miniQuestion: {
        prompt: "Evaluate \\((2\\sqrt{13})^2\\).",
        expectedAnswer: "\\(52\\)",
        options: ["\\(26\\)", "\\(52\\)", "\\(169\\)", "\\(13\\)"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "Square the coefficient and the surd separately: \\(2^2 \\times (\\sqrt{13})^2 = 4 \\times 13 = 52\\).",
        hints: [
          "Square the \\(2\\) and the \\(\\sqrt{13}\\) separately.",
          "\\((\\sqrt{13})^2 = 13\\) and \\(2^2 = 4\\).",
          "Multiply \\(4 \\times 13\\).",
        ],
      },
    },
    {
      id: "a5-c3",
      title: "Multiplying surds",
      concept:
        "To multiply surds, multiply the numbers out front and multiply what's inside the roots: \\(p\\sqrt{a} \\times q\\sqrt{b} = pq\\sqrt{ab}\\). So \\(2\\sqrt{3} \\times 4\\sqrt{7} = 8\\sqrt{21}\\). If the inside numbers match, the roots collapse to a whole number: \\(3\\sqrt{2} \\times 5\\sqrt{2} = 15 \\times 2 = 30\\).",
      miniQuestion: {
        prompt: "Evaluate \\(3\\sqrt{6} \\times 2\\sqrt{6}\\).",
        expectedAnswer: "\\(36\\)",
        options: ["\\(6\\sqrt{6}\\)", "\\(6\\sqrt{12}\\)", "\\(36\\)", "\\(12\\)"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Multiply coefficients \\(3 \\times 2 = 6\\), and \\(\\sqrt{6} \\times \\sqrt{6} = 6\\), so \\(6 \\times 6 = 36\\).",
        hints: [
          "Multiply the numbers in front: \\(3 \\times 2\\).",
          "Then \\(\\sqrt{6} \\times \\sqrt{6} = 6\\).",
          "Combine: \\(6 \\times 6\\).",
        ],
      },
    },
    {
      id: "a5-c4",
      title: "Add only matching surds",
      concept:
        "Surds add like algebra: \\(2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}\\), but \\(\\sqrt{3} + \\sqrt{2}\\) won't combine because the roots differ. The trick is to simplify each surd first so the matching ones appear. For \\(\\sqrt{48} + \\sqrt{27}\\): \\(\\sqrt{48} = 4\\sqrt{3}\\) and \\(\\sqrt{27} = 3\\sqrt{3}\\), so the sum is \\(7\\sqrt{3}\\).",
      miniQuestion: {
        prompt: "Express \\(\\sqrt{50} - \\sqrt{8}\\) in the form \\(k\\sqrt{2}\\).",
        expectedAnswer: "\\(3\\sqrt{2}\\)",
        options: [
          "\\(7\\sqrt{2}\\)",
          "\\(3\\sqrt{2}\\)",
          "\\(\\sqrt{42}\\)",
          "\\(2\\sqrt{2}\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(\\sqrt{50} = 5\\sqrt{2}\\) and \\(\\sqrt{8} = 2\\sqrt{2}\\); subtracting gives \\((5 - 2)\\sqrt{2} = 3\\sqrt{2}\\).",
        hints: [
          "Simplify each surd to a multiple of \\(\\sqrt{2}\\) first.",
          "\\(\\sqrt{50} = 5\\sqrt{2}\\) and \\(\\sqrt{8} = 2\\sqrt{2}\\).",
          "Subtract the coefficients: \\(5 - 2\\).",
        ],
      },
    },
    {
      id: "a5-c5",
      title: "Expanding brackets with surds",
      concept:
        "Two surd brackets multiply like any two brackets — every term times every term — then simplify, using \\(\\sqrt{a} \\times \\sqrt{a} = a\\). For \\((\\sqrt{11} + 3)(\\sqrt{11} - 3)\\): the products are \\(11 - 3\\sqrt{11} + 3\\sqrt{11} - 9\\); the surd terms cancel, leaving \\(11 - 9 = 2\\). Conjugate pairs like this always clear the surd — the idea behind rationalising.",
      miniQuestion: {
        prompt: "Expand and simplify \\((\\sqrt{5} + 3)(\\sqrt{5} - 1)\\).",
        expectedAnswer: "\\(2 + 2\\sqrt{5}\\)",
        options: [
          "\\(8 + 2\\sqrt{5}\\)",
          "\\(2 + 2\\sqrt{5}\\)",
          "\\(2 + 4\\sqrt{5}\\)",
          "\\(5 + 2\\sqrt{5}\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The four products are \\(5 - \\sqrt{5} + 3\\sqrt{5} - 3 = 2 + 2\\sqrt{5}\\): \\(\\sqrt{5}\\times\\sqrt{5} = 5\\) and the middle terms combine.",
        hints: [
          "Multiply each term in the first bracket by each in the second.",
          "Remember \\(\\sqrt{5} \\times \\sqrt{5} = 5\\).",
          "Collect: constants \\(5 - 3 = 2\\), surds \\(-\\sqrt{5} + 3\\sqrt{5} = 2\\sqrt{5}\\).",
        ],
      },
    },
  ],
};
