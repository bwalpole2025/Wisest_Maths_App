import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Completing the Square
 * Ref:   qc3
 */
export const lesson: Lesson = {
  topicRef: "qc3",
  title: "Completing the Square",
  intro:
    "Completing the square rewrites a quadratic so its turning point is staring right at you. The trick is one idea: a perfect square \\((x+p)^2\\) hides a constant you have to subtract back off.",
  cards: [
    {
      id: "qc3-c1",
      title: "The perfect square that's almost right",
      concept:
        "Expand \\((x+p)^2\\) and you get \\(x^2 + 2px + p^2\\). Notice the \\(x\\)-coefficient is \\(2p\\). So if you see \\(x^2 + 4x\\), the \\(p\\) that builds it must satisfy \\(2p = 4\\), i.e. \\(p = 2\\). You halve the \\(x\\)-coefficient to find \\(p\\).",
      miniQuestion: {
        prompt: "For \\(x^2 + 10x + 3\\), what value of \\(p\\) makes \\((x+p)^2\\) reproduce the \\(x^2 + 10x\\) part?",
        expectedAnswer: "5",
        options: ["10", "20", "5", "25"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "Halve the \\(x\\)-coefficient: \\(p = \\tfrac{10}{2} = 5\\). That's because \\((x+p)^2\\) has middle term \\(2px\\), so \\(2p = 10\\).",
        hints: [
          "\\((x+p)^2 = x^2 + 2px + p^2\\). What must \\(2p\\) equal?",
          "Set \\(2p = 10\\) and solve for \\(p\\).",
        ],
      },
    },
    {
      id: "qc3-c2",
      title: "Subtracting the leftover",
      concept:
        "\\((x+p)^2\\) gives you \\(x^2 + 2px + p^2\\) — but you only wanted \\(x^2 + 2px\\). You've added an extra \\(p^2\\), so you must subtract it back. Hence \\(x^2 + 4x = (x+2)^2 - 4\\), since \\(p^2 = 2^2 = 4\\).",
      miniQuestion: {
        prompt: "Write \\(x^2 + 4x + 9\\) in the form \\((x+p)^2 + q\\).",
        expectedAnswer: "\\((x+2)^2 + 5\\)",
        options: [
          "\\((x+2)^2 + 9\\)",
          "\\((x+2)^2 + 5\\)",
          "\\((x+2)^2 + 13\\)",
          "\\((x+4)^2 - 7\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(p = 2\\), so \\((x+2)^2 = x^2 + 4x + 4\\). You need \\(+9\\), and you already have \\(+4\\) inside the square, so \\(q = 9 - 4 = 5\\): \\((x+2)^2 + 5\\).",
        hints: [
          "Halve the 4 to get \\(p\\), then write \\((x+p)^2\\).",
          "\\((x+2)^2 = x^2 + 4x + 4\\). You wanted \\(+9\\); how much more do you add on?",
          "\\(q = 9 - p^2 = 9 - 4\\).",
        ],
      },
    },
    {
      id: "qc3-c3",
      title: "Reading off the turning point",
      concept:
        "Once a quadratic is \\((x+p)^2 + q\\), the squared term is smallest (zero) when \\(x = -p\\), and there the whole expression equals \\(q\\). So the minimum point is \\((-p,\\, q)\\). This is the real payoff of completing the square.",
      miniQuestion: {
        prompt: "The quadratic \\(x^2 + 4x + 9\\) equals \\((x+2)^2 + 5\\). What are the coordinates of its minimum point?",
        expectedAnswer: "\\((-2, 5)\\)",
        options: ["\\((2, 5)\\)", "\\((-2, -5)\\)", "\\((-2, 5)\\)", "\\((2, -5)\\)"],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "\\((x+2)^2\\) is smallest (zero) when \\(x = -2\\); there the value is \\(5\\). So the minimum is \\((-2, 5)\\) — read straight off the completed-square form.",
        hints: [
          "The square \\((x+2)^2\\) is never negative. What value of \\(x\\) makes it exactly zero?",
          "At that \\(x\\), the expression equals the constant \\(q\\). What is \\(q\\)?",
        ],
      },
    },
  ],
};
