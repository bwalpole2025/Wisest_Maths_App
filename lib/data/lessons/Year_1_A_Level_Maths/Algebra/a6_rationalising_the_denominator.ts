import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Rationalising the Denominator
 * Ref:   a6
 */
export const lesson: Lesson = {
  topicRef: "a6",
  title: "Rationalising the Denominator",
  intro:
    "A surd on the bottom of a fraction is considered untidy. Rationalising clears it — by multiplying top and bottom by just the right surd, so the denominator becomes a whole number.",
  cards: [
    {
      id: "a6-c1",
      title: "Multiply by the surd over itself",
      concept:
        "To clear a single surd from the denominator, multiply top and bottom by that surd. Since \\(\\frac{\\sqrt{a}}{\\sqrt{a}} = 1\\), the value is unchanged, but the bottom becomes \\(\\sqrt{a} \\times \\sqrt{a} = a\\). For \\(\\frac{1}{\\sqrt{2}}\\): multiply by \\(\\frac{\\sqrt{2}}{\\sqrt{2}}\\) to get \\(\\frac{\\sqrt{2}}{2}\\).",
      miniQuestion: {
        prompt: "Rationalise the denominator: \\(\\frac{1}{\\sqrt{5}}\\).",
        expectedAnswer: "\\(\\frac{\\sqrt{5}}{5}\\)",
        options: [
          "\\(\\frac{\\sqrt{5}}{5}\\)",
          "\\(\\frac{5}{\\sqrt{5}}\\)",
          "\\(\\frac{1}{5}\\)",
          "\\(\\frac{\\sqrt{5}}{25}\\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "Multiplying top and bottom by \\(\\sqrt{5}\\) gives \\(\\frac{\\sqrt{5}}{\\sqrt{5}\\times\\sqrt{5}} = \\frac{\\sqrt{5}}{5}\\).",
        hints: [
          "What do you multiply top and bottom by to clear \\(\\sqrt{5}\\)?",
          "Multiply by \\(\\frac{\\sqrt{5}}{\\sqrt{5}}\\).",
          "The bottom becomes \\(\\sqrt{5} \\times \\sqrt{5} = 5\\).",
        ],
      },
    },
    {
      id: "a6-c2",
      title: "Simplify the result",
      concept:
        "After rationalising, simplify the number that appears. For \\(\\frac{8}{\\sqrt{2}}\\), multiply by \\(\\frac{\\sqrt{2}}{\\sqrt{2}}\\) to get \\(\\frac{8\\sqrt{2}}{2}\\); the \\(8\\) and \\(2\\) cancel down to \\(4\\sqrt{2}\\). Always check whether the resulting fraction reduces.",
      miniQuestion: {
        prompt: "Simplify \\(\\frac{6}{\\sqrt{3}}\\), giving your answer in the form \\(p\\sqrt{q}\\).",
        expectedAnswer: "\\(2\\sqrt{3}\\)",
        options: [
          "\\(6\\sqrt{3}\\)",
          "\\(2\\sqrt{3}\\)",
          "\\(\\frac{6\\sqrt{3}}{3}\\)",
          "\\(3\\sqrt{2}\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Multiplying by \\(\\frac{\\sqrt{3}}{\\sqrt{3}}\\) gives \\(\\frac{6\\sqrt{3}}{3}\\), and \\(6 \\div 3 = 2\\), so the answer is \\(2\\sqrt{3}\\).",
        hints: [
          "Multiply top and bottom by \\(\\sqrt{3}\\).",
          "The bottom becomes \\(3\\), giving \\(\\frac{6\\sqrt{3}}{3}\\).",
          "Divide \\(6\\) by \\(3\\).",
        ],
      },
    },
    {
      id: "a6-c3",
      title: "When the denominator has a coefficient",
      concept:
        "If the bottom is something like \\(2\\sqrt{3}\\), you only need to multiply by the *surd* part, \\(\\sqrt{3}\\) — the whole number stays put. For \\(\\frac{5}{2\\sqrt{3}}\\): multiply top and bottom by \\(\\sqrt{3}\\) to get \\(\\frac{5\\sqrt{3}}{2 \\times 3} = \\frac{5\\sqrt{3}}{6}\\). The \\(2\\) just rides along on the denominator.",
      miniQuestion: {
        prompt: "Rationalise \\(\\frac{3}{\\sqrt{6}}\\).",
        expectedAnswer: "\\(\\frac{\\sqrt{6}}{2}\\)",
        options: [
          "\\(\\frac{3\\sqrt{6}}{6}\\)",
          "\\(\\frac{\\sqrt{6}}{3}\\)",
          "\\(\\frac{\\sqrt{6}}{2}\\)",
          "\\(\\frac{\\sqrt{6}}{6}\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Multiply by \\(\\frac{\\sqrt{6}}{\\sqrt{6}}\\): \\(\\frac{3\\sqrt{6}}{6}\\), and \\(3 \\div 6 = \\frac{1}{2}\\), so it simplifies to \\(\\frac{\\sqrt{6}}{2}\\).",
        hints: [
          "Multiply top and bottom by \\(\\sqrt{6}\\).",
          "That gives \\(\\frac{3\\sqrt{6}}{6}\\).",
          "Cancel \\(\\frac{3}{6}\\) down to \\(\\frac{1}{2}\\).",
        ],
      },
    },
    {
      id: "a6-c4",
      title: "Two-term denominators: the conjugate",
      concept:
        "When the bottom is a sum or difference like \\(1 + \\sqrt{3}\\), multiply by its *conjugate* — the same two terms with the sign flipped, \\(1 - \\sqrt{3}\\). This uses \\((a + b)(a - b) = a^2 - b^2\\), which clears the surd: \\((1+\\sqrt{3})(1-\\sqrt{3}) = 1 - 3 = -2\\). The surd terms cancel because of the opposite signs.",
      miniQuestion: {
        prompt: "What is the conjugate of \\(3 - \\sqrt{2}\\)?",
        expectedAnswer: "\\(3 + \\sqrt{2}\\)",
        options: [
          "\\(-3 + \\sqrt{2}\\)",
          "\\(3 + \\sqrt{2}\\)",
          "\\(-3 - \\sqrt{2}\\)",
          "\\(\\sqrt{2} - 3\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The conjugate flips the middle sign, giving \\(3 + \\sqrt{2}\\). Multiplying the two yields \\(3^2 - (\\sqrt{2})^2 = 9 - 2 = 7\\), a surd-free number.",
        hints: [
          "The conjugate keeps the same terms but flips the sign between them.",
          "Change the \\(-\\) to a \\(+\\).",
        ],
      },
    },
    {
      id: "a6-c5",
      title: "Rationalise with a conjugate",
      concept:
        "Multiply top and bottom by the conjugate, then simplify. For \\(\\frac{7}{3 - \\sqrt{2}}\\), multiply by \\(\\frac{3 + \\sqrt{2}}{3 + \\sqrt{2}}\\): the bottom becomes \\(9 - 2 = 7\\), the top becomes \\(7(3 + \\sqrt{2})\\), and the \\(7\\)s cancel to give \\(3 + \\sqrt{2}\\).",
      miniQuestion: {
        prompt: "Express in the form \\(a + b\\sqrt{k}\\): \\(\\frac{2}{1 + \\sqrt{3}}\\).",
        expectedAnswer: "\\(-1 + \\sqrt{3}\\)",
        options: [
          "\\(1 - \\sqrt{3}\\)",
          "\\(1 + \\sqrt{3}\\)",
          "\\(-1 + \\sqrt{3}\\)",
          "\\(-1 - \\sqrt{3}\\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Multiply by \\(\\frac{1 - \\sqrt{3}}{1 - \\sqrt{3}}\\): bottom \\(= 1 - 3 = -2\\), top \\(= 2(1 - \\sqrt{3})\\), so \\(\\frac{2(1 - \\sqrt{3})}{-2} = -(1 - \\sqrt{3}) = -1 + \\sqrt{3}\\).",
        hints: [
          "Multiply top and bottom by the conjugate \\(1 - \\sqrt{3}\\).",
          "The denominator becomes \\((1)^2 - (\\sqrt{3})^2 = -2\\).",
          "Then \\(\\frac{2(1-\\sqrt{3})}{-2}\\); the \\(2\\)s cancel and the sign flips.",
        ],
      },
    },
  ],
};
