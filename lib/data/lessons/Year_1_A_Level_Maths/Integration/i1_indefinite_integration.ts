import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Indefinite Integration
 * Ref:   i1
 */
export const lesson: Lesson = {
  topicRef: "i1",
  title: "Indefinite Integration",
  intro:
    "Integration is differentiation run in reverse: it answers the question \\(\"\\)which expression has this as its derivative?\\(\"\\) One power rule does most of the work — as long as you never forget the \\(+c\\).",
  cards: [
    {
      id: "i1-c1",
      title: "Reversing the power rule",
      concept:
        "To integrate a power of \\(x\\), do the opposite of differentiating: add one to the index, then divide by the new index. The rule is \\(\\int x^n \\, dx = \\dfrac{x^{n+1}}{n+1} + c\\). For example \\(\\int x^6 \\, dx = \\dfrac{x^7}{7} + c\\).",
      miniQuestion: {
        prompt: "Find \\(\\int x^3 \\, dx\\).",
        expectedAnswer: "\\(\\dfrac{x^4}{4} + c\\)",
        options: [
          "\\(\\dfrac{x^4}{4} + c\\)",
          "\\(\\dfrac{x^4}{4}\\)",
          "\\(3x^2 + c\\)",
          "\\(x^4 + c\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "Add one to the index (\\(3 \\to 4\\)) and divide by it: \\(\\dfrac{x^4}{4} + c\\). Check by differentiating — \\(\\dfrac{x^4}{4}\\) gives back \\(x^3\\).",
        hints: [
          "Use \\(\\int x^n \\, dx = \\dfrac{x^{n+1}}{n+1} + c\\) with \\(n = 3\\).",
          "The new index is \\(4\\); divide by \\(4\\) and add \\(c\\).",
        ],
      },
    },
    {
      id: "i1-c2",
      title: "Never forget the +c",
      concept:
        "Any constant differentiates to zero, so when we reverse the process we cannot know what constant was lost. We add an arbitrary constant of integration, \\(+c\\), to every indefinite integral. Leaving it off is the single most common error — and it loses marks even when the rest is perfect.",
      miniQuestion: {
        prompt: "Find \\(\\int 5x^4 \\, dx\\).",
        expectedAnswer: "\\(x^5 + c\\)",
        options: [
          "\\(x^5\\)",
          "\\(x^5 + c\\)",
          "\\(20x^3 + c\\)",
          "\\(5x^5 + c\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Keep the constant \\(5\\): \\(5 \\cdot \\dfrac{x^5}{5} = x^5\\), and the \\(5\\)s cancel. Then add \\(+c\\). Without the \\(+c\\) the answer is incomplete.",
        hints: [
          "Increase the index from \\(4\\) to \\(5\\) and divide by \\(5\\).",
          "The constant \\(5\\) stays out front; remember to write \\(+c\\).",
        ],
      },
    },
    {
      id: "i1-c3",
      title: "Integrate term by term",
      concept:
        "A sum is integrated one term at a time, exactly as with differentiation. Two useful facts: a plain constant \\(k\\) integrates to \\(kx\\) (think of it as \\(kx^0\\)), and you write only a single \\(+c\\) at the end no matter how many terms there are.",
      miniQuestion: {
        prompt: "Find \\(\\int (3x^2 + 5x - 2) \\, dx\\).",
        expectedAnswer: "\\(x^3 + \\dfrac{5}{2}x^2 - 2x + c\\)",
        options: [
          "\\(x^3 + \\dfrac{5}{2}x^2 - 2 + c\\)",
          "\\(6x + 5 + c\\)",
          "\\(x^3 + \\dfrac{5}{2}x^2 - 2x + c\\)",
          "\\(x^3 + \\dfrac{5}{2}x^2 - 2x\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Term by term: \\(3x^2 \\to x^3\\), \\(5x \\to \\dfrac{5}{2}x^2\\), and \\(-2 \\to -2x\\). One \\(+c\\) covers the whole expression.",
        hints: [
          "Integrate each term separately using the power rule.",
          "The constant \\(-2\\) becomes \\(-2x\\); add a single \\(+c\\) at the end.",
        ],
      },
    },
    {
      id: "i1-c4",
      title: "Negative and fractional indices",
      concept:
        "The power rule still works for negative and fractional indices, provided \\(n \\neq -1\\). First rewrite roots and fractions as powers: \\(\\sqrt{x} = x^{1/2}\\) and \\(\\dfrac{1}{x^2} = x^{-2}\\). Then add one to the index and divide — adding one can make a negative index less negative.",
      miniQuestion: {
        prompt: "Find \\(\\int \\sqrt{x} \\, dx\\).",
        expectedAnswer: "\\(\\dfrac{2}{3}x^{3/2} + c\\)",
        options: [
          "\\(\\dfrac{3}{2}x^{3/2} + c\\)",
          "\\(\\dfrac{2}{3}x^{3/2} + c\\)",
          "\\(\\dfrac{2}{3}x^{3/2}\\)",
          "\\(\\dfrac{1}{2}x^{-1/2} + c\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Write \\(\\sqrt{x} = x^{1/2}\\). The new index is \\(\\tfrac{1}{2} + 1 = \\tfrac{3}{2}\\), and dividing by \\(\\tfrac{3}{2}\\) means multiplying by \\(\\tfrac{2}{3}\\): \\(\\dfrac{2}{3}x^{3/2} + c\\).",
        hints: [
          "Rewrite \\(\\sqrt{x}\\) as \\(x^{1/2}\\) before integrating.",
          "Dividing by \\(\\tfrac{3}{2}\\) is the same as multiplying by \\(\\tfrac{2}{3}\\).",
        ],
      },
    },
    {
      id: "i1-c5",
      title: "Finding the curve from its gradient",
      concept:
        "Integrating a gradient function \\(f'(x)\\) gives \\(f(x)\\) — but only up to that unknown \\(+c\\). If you know one point the curve passes through, substitute its coordinates to pin down \\(c\\) and get the exact equation. This is why the \\(+c\\) matters: a point fixes which member of the family is meant.",
      miniQuestion: {
        prompt:
          "A curve passes through \\((0, 3)\\) and has \\(f'(x) = 4x - 1\\). Find \\(f(x)\\).",
        expectedAnswer: "\\(f(x) = 2x^2 - x + 3\\)",
        options: [
          "\\(f(x) = 2x^2 - x + c\\)",
          "\\(f(x) = 2x^2 - x + 3\\)",
          "\\(f(x) = 4x^2 - x + 3\\)",
          "\\(f(x) = 2x^2 - x\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Integrate: \\(f(x) = 2x^2 - x + c\\). At \\((0,3)\\), \\(3 = 0 - 0 + c\\), so \\(c = 3\\). The point is exactly what turns the \\(+c\\) into a number.",
        hints: [
          "First integrate \\(4x - 1\\) to get \\(2x^2 - x + c\\).",
          "Substitute \\(x = 0\\), \\(f(x) = 3\\) to find \\(c\\).",
        ],
      },
    },
  ],
};
