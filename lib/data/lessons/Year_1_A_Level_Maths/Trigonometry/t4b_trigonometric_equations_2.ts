import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Trigonometric Equations 2
 * Ref:   t5
 */
export const lesson: Lesson = {
  topicRef: "t5",
  title: "Trigonometric Equations 2",
  intro:
    "When an equation mixes \\(\\sin^2\\), \\(\\sin\\) and constants, you can't just hit \\(\\sin^{-1}\\). The trick is to reshape it — by identity or factorising — into something quadratic you already know how to solve.",
  cards: [
    {
      id: "t5-c1",
      title: "Treat it as a quadratic",
      concept:
        "An equation like \\(2\\sin^2 x - \\sin x = 0\\) is quadratic in \\(\\sin x\\). Let \\(s = \\sin x\\) and it becomes \\(2s^2 - s = 0\\). Solve for \\(s\\) first, then find every angle giving each value of \\(s\\).",
      miniQuestion: {
        prompt:
          "Factorise \\(2s^2 - s = 0\\) and give the two values of \\(s\\) (use \\(s = \\sin x\\)).",
        expectedAnswer: "\\(s = 0\\) and \\(s = \\tfrac{1}{2}\\)",
        options: [
          "\\(s = \\tfrac{1}{2}\\) only",
          "\\(s = 0\\) and \\(s = \\tfrac{1}{2}\\)",
          "\\(s = 0\\) and \\(s = 2\\)",
          "\\(s = 0\\) and \\(s = -\\tfrac{1}{2}\\)",
        ],
        correctIndex: 1,
        answerType: "set",
        insight:
          "\\(s(2s - 1) = 0\\) gives \\(s = 0\\) or \\(s = \\tfrac{1}{2}\\). Factorising out the common \\(s\\) is cleaner — and safer — than dividing by \\(\\sin x\\), which would lose the \\(s = 0\\) solutions.",
        hints: [
          "Take out the common factor \\(s\\).",
          "Set each factor \\(s\\) and \\(2s - 1\\) to zero.",
        ],
      },
    },
    {
      id: "t5-c2",
      title: "Use an identity to make it quadratic",
      concept:
        "If an equation has both \\(\\sin^2 x\\) and \\(\\cos x\\), use \\(\\sin^2 x = 1 - \\cos^2 x\\) so everything is in one function. Then \\(2\\sin^2 x - 5\\cos x - 1 = 0\\) becomes a quadratic in \\(\\cos x\\) you can solve.",
      miniQuestion: {
        prompt:
          "Replace \\(\\sin^2 x\\) in \\(2\\sin^2 x - 5\\cos x - 1 = 0\\) using \\(\\sin^2 x = 1 - \\cos^2 x\\), then simplify to a quadratic in \\(c = \\cos x\\) (write it as \\(\\dots = 0\\)).",
        expectedAnswer: "\\(2c^2 + 5c - 1 = 0\\)",
        options: [
          "\\(2c^2 - 5c - 1 = 0\\)",
          "\\(2c^2 + 5c - 1 = 0\\)",
          "\\(-2c^2 - 5c - 1 = 0\\)",
          "\\(2c^2 + 5c + 1 = 0\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(2(1 - c^2) - 5c - 1 = 2 - 2c^2 - 5c - 1 = -2c^2 - 5c + 1\\); multiplying by \\(-1\\) gives \\(2c^2 + 5c - 1 = 0\\). One identity turns a mixed equation into a standard quadratic.",
        hints: [
          "Substitute \\(\\sin^2 x = 1 - \\cos^2 x\\) and expand.",
          "Collect terms, then multiply through by \\(-1\\) to make the \\(c^2\\) term positive.",
        ],
      },
    },
    {
      id: "t5-c3",
      title: "Don't divide by a trig function",
      concept:
        "Faced with \\(\\sin x \\cos x = \\sin x\\), it is tempting to divide by \\(\\sin x\\) — but that throws away the solutions where \\(\\sin x = 0\\). Instead bring everything to one side and factorise: \\(\\sin x(\\cos x - 1) = 0\\).",
      miniQuestion: {
        prompt:
          "After writing \\(\\sin x \\cos x - \\sin x = 0\\) as \\(\\sin x(\\cos x - 1) = 0\\), what are the two equations you set equal to zero?",
        expectedAnswer: "\\(\\sin x = 0\\) and \\(\\cos x - 1 = 0\\)",
        options: [
          "\\(\\cos x - 1 = 0\\) only",
          "\\(\\sin x = 0\\) and \\(\\cos x + 1 = 0\\)",
          "\\(\\sin x = 0\\) and \\(\\cos x - 1 = 0\\)",
          "\\(\\sin x = 1\\) and \\(\\cos x = 1\\)",
        ],
        correctIndex: 2,
        answerType: "set",
        insight:
          "A product is zero when either factor is zero: \\(\\sin x = 0\\) or \\(\\cos x = 1\\). Factorising keeps the \\(\\sin x = 0\\) solutions that dividing would have deleted.",
        hints: [
          "A product \\(AB = 0\\) means \\(A = 0\\) or \\(B = 0\\).",
          "The two factors are \\(\\sin x\\) and \\(\\cos x - 1\\).",
        ],
      },
    },
    {
      id: "t5-c4",
      title: "Solving \\(\\tan^2 x = k\\)",
      concept:
        "When a squared trig function equals a constant, take the square root and keep both signs. \\(\\tan^2 x = 3\\) gives \\(\\tan x = \\sqrt{3}\\) or \\(\\tan x = -\\sqrt{3}\\) — and each must be solved across the whole interval, doubling the number of answers.",
      miniQuestion: {
        prompt:
          "Solve \\(\\tan^2 x = 3\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\). Give all exact solutions in degrees.",
        expectedAnswer: "\\(x = 60^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 300^\\circ\\)",
        options: [
          "\\(x = 60^\\circ,\\ 240^\\circ\\)",
          "\\(x = 60^\\circ,\\ 120^\\circ,\\ 240^\\circ,\\ 300^\\circ\\)",
          "\\(x = 60^\\circ,\\ 120^\\circ\\)",
          "\\(x = 30^\\circ,\\ 150^\\circ,\\ 210^\\circ,\\ 330^\\circ\\)",
        ],
        correctIndex: 1,
        answerType: "set",
        insight:
          "\\(\\tan x = \\sqrt{3}\\) gives \\(60^\\circ, 240^\\circ\\); \\(\\tan x = -\\sqrt{3}\\) gives \\(120^\\circ, 300^\\circ\\). Taking the square root introduces the second sign — miss it and you lose half the solutions.",
        hints: [
          "Square-root both sides: \\(\\tan x = \\pm\\sqrt{3}\\).",
          "Solve each of \\(\\tan x = \\sqrt{3}\\) and \\(\\tan x = -\\sqrt{3}\\) over the full interval.",
        ],
      },
    },
    {
      id: "t5-c5",
      title: "Rewriting with the quotient identity",
      concept:
        "Equations with \\(\\tan x\\) alongside \\(\\sin x\\) or \\(\\cos x\\) often simplify after \\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\). For \\(\\sin x \\tan x = 3\\cos x\\), substituting and multiplying through by \\(\\cos x\\) turns it into an equation in \\(\\sin\\) and \\(\\cos\\) only.",
      miniQuestion: {
        prompt:
          "In \\(\\sin x \\tan x = 3\\cos x\\), replace \\(\\tan x\\) with \\(\\dfrac{\\sin x}{\\cos x}\\) and multiply both sides by \\(\\cos x\\). What equation results?",
        expectedAnswer: "\\(\\sin^2 x = 3\\cos^2 x\\)",
        options: [
          "\\(\\sin^2 x = 3\\cos x\\)",
          "\\(\\sin^2 x = 3\\cos^2 x\\)",
          "\\(\\sin x = 3\\cos^2 x\\)",
          "\\(\\sin^2 x = \\tfrac{1}{3}\\cos^2 x\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "\\(\\sin x \\cdot \\dfrac{\\sin x}{\\cos x} = 3\\cos x \\Rightarrow \\dfrac{\\sin^2 x}{\\cos x} = 3\\cos x \\Rightarrow \\sin^2 x = 3\\cos^2 x\\). From here \\(\\tan^2 x = 3\\), linking back to the previous card.",
        hints: [
          "The left side becomes \\(\\dfrac{\\sin^2 x}{\\cos x}\\).",
          "Multiplying both sides by \\(\\cos x\\) clears the denominator.",
        ],
      },
    },
  ],
};
