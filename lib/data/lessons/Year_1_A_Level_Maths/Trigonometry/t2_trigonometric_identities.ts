import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Trigonometric Identities
 * Ref:   t2
 */
export const lesson: Lesson = {
  topicRef: "t2",
  title: "Trigonometric Identities",
  intro:
    "Two identities do almost all the work in trig proofs: the Pythagorean identity and the quotient identity. Learn to spot where they fit and most proofs collapse to a single line.",
  cards: [
    {
      id: "t2-c1",
      title: "The Pythagorean identity",
      concept:
        "For every angle \\(\\theta\\), \\(\\sin^2\\theta + \\cos^2\\theta \\equiv 1\\). The \\(\\equiv\\) sign means it is true for all \\(\\theta\\), not just a few — so you can substitute either way at any point in a proof.",
      miniQuestion: {
        prompt:
          "Given \\(\\cos^2\\theta = 0.36\\), use \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) to find \\(\\sin^2\\theta\\).",
        expectedAnswer: "0.64",
        options: ["0.36", "0.64", "1.36", "0.8"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\(\\sin^2\\theta = 1 - \\cos^2\\theta = 1 - 0.36 = 0.64\\). The identity lets you swap between \\(\\sin^2\\) and \\(\\cos^2\\) freely.",
        hints: [
          "Rearrange to \\(\\sin^2\\theta = 1 - \\cos^2\\theta\\).",
          "Subtract \\(0.36\\) from \\(1\\).",
        ],
      },
    },
    {
      id: "t2-c2",
      title: "The two rearrangements",
      concept:
        "The Pythagorean identity is most useful rearranged: \\(\\sin^2\\theta \\equiv 1 - \\cos^2\\theta\\) and \\(\\cos^2\\theta \\equiv 1 - \\sin^2\\theta\\). Whenever a proof shows \\(1 - \\cos^2\\theta\\) or \\(1 - \\sin^2\\theta\\), replace it with the single squared term.",
      miniQuestion: {
        prompt:
          "Write \\(1 - \\sin^2\\theta\\) as a single trigonometric term.",
        expectedAnswer: "\\(\\cos^2\\theta\\)",
        options: [
          "\\(\\sin^2\\theta\\)",
          "\\(\\cos^2\\theta\\)",
          "\\(\\tan^2\\theta\\)",
          "\\(2\\cos^2\\theta - 1\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(1 - \\sin^2\\theta \\equiv \\cos^2\\theta\\). Recognising this swap is the engine of nearly every identity proof.",
        hints: [
          "Start from \\(\\sin^2\\theta + \\cos^2\\theta = 1\\).",
          "Subtract \\(\\sin^2\\theta\\) from both sides.",
        ],
      },
    },
    {
      id: "t2-c3",
      title: "The quotient identity",
      concept:
        "Tangent is defined by \\(\\tan\\theta \\equiv \\dfrac{\\sin\\theta}{\\cos\\theta}\\). This converts any \\(\\tan\\) into sines and cosines (and vice-versa), so an expression mixing all three functions can be reduced to just \\(\\sin\\) and \\(\\cos\\).",
      miniQuestion: {
        prompt:
          "Simplify \\(\\cos\\theta \\tan\\theta\\) using \\(\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}\\).",
        expectedAnswer: "\\(\\sin\\theta\\)",
        options: [
          "\\(\\cos\\theta\\)",
          "\\(\\tan\\theta\\)",
          "\\(\\sin\\theta\\)",
          "\\(\\sin\\theta\\cos\\theta\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "\\(\\cos\\theta \\cdot \\dfrac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta\\): the \\(\\cos\\theta\\) cancels. Rewriting \\(\\tan\\) as a fraction lets factors cancel.",
        hints: [
          "Replace \\(\\tan\\theta\\) with \\(\\dfrac{\\sin\\theta}{\\cos\\theta}\\).",
          "Cancel the common \\(\\cos\\theta\\).",
        ],
      },
    },
    {
      id: "t2-c4",
      title: "Proving from one side",
      concept:
        "To prove an identity, start with one side (usually the more complicated one) and manipulate it until it equals the other — never move terms across the \\(\\equiv\\). A reliable opener is to expand a bracket, then apply an identity. For example \\((1-\\cos\\theta)(1+\\cos\\theta)\\) is a difference of two squares.",
      miniQuestion: {
        prompt:
          "Expand \\((1 - \\cos\\theta)(1 + \\cos\\theta)\\) and simplify to a single squared term.",
        expectedAnswer: "\\(\\sin^2\\theta\\)",
        options: [
          "\\(1 - \\cos^2\\theta\\)",
          "\\(\\cos^2\\theta\\)",
          "\\(\\sin^2\\theta\\)",
          "\\(1 + \\cos^2\\theta\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "\\((1-\\cos\\theta)(1+\\cos\\theta) = 1 - \\cos^2\\theta = \\sin^2\\theta\\). Expanding first reveals the \\(1 - \\cos^2\\theta\\) pattern, then the identity finishes it.",
        hints: [
          "Difference of two squares: \\((1-c)(1+c) = 1 - c^2\\).",
          "Now replace \\(1 - \\cos^2\\theta\\).",
        ],
      },
    },
    {
      id: "t2-c5",
      title: "Combining both identities",
      concept:
        "Harder proofs use the quotient identity to introduce \\(\\sin\\) and \\(\\cos\\), then the Pythagorean identity to simplify. For instance \\(\\tan^2\\theta\\) becomes \\(\\dfrac{\\sin^2\\theta}{\\cos^2\\theta}\\), opening the door to a \\(\\sin^2\\theta + \\cos^2\\theta\\) substitution.",
      miniQuestion: {
        prompt:
          "Using \\(\\tan^2\\theta = \\dfrac{\\sin^2\\theta}{\\cos^2\\theta}\\), simplify \\(\\dfrac{\\sin^2\\theta}{\\cos^2\\theta} + 1\\) to a single fraction (combine over \\(\\cos^2\\theta\\)).",
        expectedAnswer: "\\(\\dfrac{1}{\\cos^2\\theta}\\)",
        options: [
          "\\(\\dfrac{1}{\\cos^2\\theta}\\)",
          "\\(\\dfrac{1}{\\sin^2\\theta}\\)",
          "\\(\\dfrac{2}{\\cos^2\\theta}\\)",
          "\\(\\cos^2\\theta\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "\\(\\dfrac{\\sin^2\\theta}{\\cos^2\\theta} + 1 = \\dfrac{\\sin^2\\theta + \\cos^2\\theta}{\\cos^2\\theta} = \\dfrac{1}{\\cos^2\\theta}\\). The numerator collapses by the Pythagorean identity — the two identities working together.",
        hints: [
          "Write \\(1\\) as \\(\\dfrac{\\cos^2\\theta}{\\cos^2\\theta}\\) to share the denominator.",
          "The numerator becomes \\(\\sin^2\\theta + \\cos^2\\theta = 1\\).",
        ],
      },
    },
  ],
};
