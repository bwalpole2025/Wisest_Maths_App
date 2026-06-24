import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Solving Exponential and Logarithmic Equations
 * Ref:   el4
 */
export const lesson: Lesson = {
  topicRef: "el4",
  title: "Solving Exponential and Logarithmic Equations",
  intro:
    "When the unknown is stuck up in an exponent, logarithms are the tool that bring it down. This lesson builds the standard method: take logs, use the power law, then solve a linear equation.",
  cards: [
    {
      id: "el4-c1",
      title: "Take logs to free the power",
      concept:
        "To solve \\( a^x = b \\), take \\( \\log \\) of both sides and use the power law \\( \\log(a^x) = x\\log a \\). That converts the exponent into a coefficient, leaving \\( x\\log a = \\log b \\), so \\( x = \\dfrac{\\log b}{\\log a} \\).",
      miniQuestion: {
        prompt:
          "Solve \\( 5^x = 40 \\), giving your answer to 3 significant figures.",
        expectedAnswer: "\\( x \\approx 2.29 \\)",
        options: [
          "\\( x \\approx 8.00 \\)",
          "\\( x \\approx 0.436 \\)",
          "\\( x \\approx 2.29 \\)",
          "\\( x \\approx 2.30 \\)",
        ],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\( x = \\dfrac{\\log 40}{\\log 5} \\approx 2.29 \\). Sanity check: \\( 5^2 = 25 \\) and \\( 5^3 = 125 \\), so a value near 2.3 is sensible.",
        hints: [
          "Take logs of both sides, then use \\( \\log(5^x) = x\\log 5 \\).",
          "Rearrange to \\( x = \\dfrac{\\log 40}{\\log 5} \\) and evaluate.",
        ],
      },
    },
    {
      id: "el4-c2",
      title: "Keep a compound exponent together",
      concept:
        "When the exponent is an expression like \\( x - 1 \\) or \\( 2x + 1 \\), the power law brings the whole thing down — so bracket it: \\( \\log(4^{x-1}) = (x-1)\\log 4 \\). Solve for the bracket first, then unpick \\( x \\).",
      miniQuestion: {
        prompt:
          "Solve \\( 4^{x-1} = 30 \\), giving your answer to 3 significant figures.",
        expectedAnswer: "\\( x \\approx 3.45 \\)",
        options: [
          "\\( x \\approx 2.45 \\)",
          "\\( x \\approx 3.45 \\)",
          "\\( x \\approx 1.45 \\)",
          "\\( x \\approx 4.45 \\)",
        ],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\( (x-1) = \\dfrac{\\log 30}{\\log 4} \\approx 2.45 \\), so \\( x \\approx 3.45 \\). Bracketing the exponent stops the \\( -1 \\) being lost.",
        hints: [
          "Take logs: \\( (x-1)\\log 4 = \\log 30 \\). Keep the bracket.",
          "Find \\( x - 1 = \\dfrac{\\log 30}{\\log 4} \\), then add 1.",
        ],
      },
    },
    {
      id: "el4-c3",
      title: "The unknown in two exponents",
      concept:
        "If \\( x \\) sits in two different powers, as in \\( 5^x = 2^{x+3} \\), take logs of both sides, bring each exponent down, then collect the \\( x \\)-terms: \\( x\\log 5 = (x+3)\\log 2 \\). Factor out \\( x \\) and divide, treating each \\( \\log \\) as a constant.",
      miniQuestion: {
        prompt:
          "Solve \\( 5^x = 2^{x+3} \\), giving your answer to 3 significant figures.",
        expectedAnswer: "\\( x \\approx 2.27 \\)",
        options: [
          "\\( x \\approx 2.27 \\)",
          "\\( x \\approx 3.00 \\)",
          "\\( x \\approx 0.756 \\)",
          "\\( x \\approx 1.29 \\)",
        ],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "Collecting terms gives \\( x(\\log 5 - \\log 2) = 3\\log 2 \\), so \\( x = \\dfrac{3\\log 2}{\\log 2.5} \\approx 2.27 \\). The logs behave just like ordinary constants.",
        hints: [
          "Take logs: \\( x\\log 5 = (x+3)\\log 2 \\). Expand the right side.",
          "Gather \\( x \\)-terms: \\( x(\\log 5 - \\log 2) = 3\\log 2 \\), then divide.",
        ],
      },
    },
    {
      id: "el4-c4",
      title: "When the log holds the unknown",
      concept:
        "If instead the equation is \\( \\log_a(\\text{expression}) = k \\), convert to index form using \\( \\log_a b = c \\Leftrightarrow a^c = b \\). For example \\( \\log_3(4x) = 4 \\) gives \\( 3^4 = 4x \\), so \\( 81 = 4x \\) and \\( x = \\tfrac{81}{4} \\).",
      miniQuestion: {
        prompt: "Solve \\( \\log_3(4x) = 4 \\) for \\( x \\).",
        expectedAnswer: "\\( x = \\dfrac{81}{4} \\)",
        options: [
          "\\( x = \\dfrac{64}{4} \\)",
          "\\( x = \\dfrac{81}{4} \\)",
          "\\( x = \\dfrac{4}{81} \\)",
          "\\( x = 12 \\)",
        ],
        correctIndex: 1,
        answerType: "exactValue",
        insight:
          "Index form gives \\( 3^4 = 4x \\), i.e. \\( 81 = 4x \\), so \\( x = \\tfrac{81}{4} \\). Converting to a power is what releases \\( x \\) from inside the log.",
        hints: [
          "Use \\( \\log_a b = c \\Leftrightarrow a^c = b \\): rewrite as \\( 3^4 = 4x \\).",
          "\\( 3^4 = 81 \\), so solve \\( 81 = 4x \\).",
        ],
      },
    },
    {
      id: "el4-c5",
      title: "Hidden quadratics in the exponent",
      concept:
        "Some equations, like \\( e^{2x} - 5e^x + 6 = 0 \\), are quadratics in disguise. Substitute \\( u = e^x \\) (so \\( e^{2x} = u^2 \\)) to get \\( u^2 - 5u + 6 = 0 \\), factorise to find \\( u \\), then solve \\( e^x = u \\) with \\( \\ln \\). Reject any non-positive \\( u \\), since \\( e^x > 0 \\) always.",
      miniQuestion: {
        prompt:
          "After substituting \\( u = e^x \\), what quadratic does \\( e^{2x} - 5e^x + 6 = 0 \\) become?",
        expectedAnswer: "\\( u^2 - 5u + 6 = 0 \\)",
        options: [
          "\\( u^2 - 5u + 6 = 0 \\)",
          "\\( 2u - 5u + 6 = 0 \\)",
          "\\( u^2 - 5u^2 + 6 = 0 \\)",
          "\\( u - 5u + 6 = 0 \\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "Since \\( e^{2x} = (e^x)^2 = u^2 \\), the equation is \\( u^2 - 5u + 6 = 0 \\), which factorises to \\( (u-2)(u-3)=0 \\) — then solve \\( e^x = 2 \\) and \\( e^x = 3 \\).",
        hints: [
          "What is \\( e^{2x} \\) in terms of \\( u = e^x \\)?",
          "\\( e^{2x} = u^2 \\), so replace each term to get a quadratic in \\( u \\).",
        ],
      },
    },
  ],
};
