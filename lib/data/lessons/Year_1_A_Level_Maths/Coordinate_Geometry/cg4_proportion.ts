import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Proportion
 * Ref:   cg4
 */
export const lesson: Lesson = {
  topicRef: "cg4",
  title: "Proportion",
  intro:
    "Proportion turns a relationship between two quantities into an equation with a single constant. Find that constant once, and you can predict any value.",
  cards: [
    {
      id: "cg4-c1",
      title: "Direct proportion as an equation",
      concept:
        "\\(y \\propto x\\) means \\(y\\) is a constant multiple of \\(x\\), so \\(y = kx\\) for some constant of proportionality \\(k\\). The whole method is: turn the \\(\\propto\\) into \\(= k\\,\\), then find \\(k\\) from a given pair of values.",
      miniQuestion: {
        prompt:
          "Write \\(y \\propto x\\) as an equation involving a constant \\(k\\).",
        expectedAnswer: "\\(y = kx\\)",
        options: ["\\(y = x + k\\)", "\\(y = kx\\)", "\\(y = \\dfrac{k}{x}\\)", "\\(y = \\dfrac{x}{k}\\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Proportionality is just multiplication by a fixed number: \\(y = kx\\). Everything else is finding \\(k\\).",
        hints: [
          "\\(\\propto\\) becomes \\(=\\) with a constant attached.",
          "Multiply \\(x\\) by the constant \\(k\\).",
        ],
      },
    },
    {
      id: "cg4-c2",
      title: "Finding the constant k",
      concept:
        "Substitute the known pair into \\(y = kx\\) and solve for \\(k\\). If \\(y = 45\\) when \\(x = 9\\), then \\(45 = k \\times 9\\), so \\(k = 5\\) and the rule is \\(y = 5x\\). Now any \\(x\\) gives its \\(y\\).",
      miniQuestion: {
        prompt:
          "Given \\(y \\propto x\\) with \\(y = 45\\) when \\(x = 9\\), find \\(y\\) when \\(x = 5\\).",
        expectedAnswer: "\\(25\\)",
        options: ["\\(9\\)", "\\(41\\)", "\\(25\\)", "\\(81\\)"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "From \\(k = 5\\), the rule is \\(y = 5x\\), so \\(y = 5 \\times 5 = 25\\). Find \\(k\\) first, then everything else follows.",
        hints: [
          "Use the pair to find \\(k\\): \\(45 = 9k\\).",
          "With \\(k = 5\\), evaluate \\(y = 5x\\) at \\(x = 5\\).",
        ],
      },
    },
    {
      id: "cg4-c3",
      title: "Inverse proportion",
      concept:
        "\\(y\\) inversely proportional to \\(x\\) means \\(y \\propto \\dfrac{1}{x}\\), so \\(y = \\dfrac{k}{x}\\). Equivalently the product \\(xy = k\\) stays constant. As \\(x\\) grows, \\(y\\) shrinks. If \\(y = 8\\) when \\(x = 5\\), then \\(k = xy = 40\\).",
      miniQuestion: {
        prompt:
          "If \\(y\\) is inversely proportional to \\(x\\) and \\(y = 8\\) when \\(x = 5\\), find \\(k\\).",
        expectedAnswer: "\\(40\\)",
        options: ["\\(1.6\\)", "\\(0.625\\)", "\\(13\\)", "\\(40\\)"],
        correctIndex: 3,
        answerType: "numeric",
        insight:
          "For inverse proportion \\(k = xy\\), so \\(k = 5 \\times 8 = 40\\). The product of the pair is the constant.",
        hints: [
          "Inverse proportion gives \\(y = \\dfrac{k}{x}\\), so \\(k = xy\\).",
          "Multiply the known \\(x\\) and \\(y\\).",
        ],
      },
    },
    {
      id: "cg4-c4",
      title: "Using the inverse rule",
      concept:
        "Once \\(k\\) is known, use \\(y = \\dfrac{k}{x}\\) for any new value. With \\(k = 40\\), at \\(x = 20\\) we get \\(y = \\dfrac{40}{20} = 2\\). The bigger \\(x\\) makes \\(y\\) smaller — the hallmark of inverse proportion.",
      miniQuestion: {
        prompt:
          "With \\(y = \\dfrac{40}{x}\\), find \\(y\\) when \\(x = 20\\).",
        expectedAnswer: "\\(2\\)",
        options: ["\\(2\\)", "\\(800\\)", "\\(0.5\\)", "\\(20\\)"],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "\\(y = \\dfrac{40}{20} = 2\\). Quadrupling \\(x\\) from \\(5\\) to \\(20\\) quartered \\(y\\) from \\(8\\) to \\(2\\).",
        hints: [
          "Substitute \\(x = 20\\) into \\(y = \\dfrac{40}{x}\\).",
          "Divide \\(40\\) by \\(20\\).",
        ],
      },
    },
  ],
};
