import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Exponentials
 * Ref:   el1
 */
export const lesson: Lesson = {
  topicRef: "el1",
  title: "Exponentials",
  intro:
    "An exponential function puts the variable up in the power. That one change controls the whole shape of the graph — and gives the special number \\( e \\) a property no other function has.",
  cards: [
    {
      id: "el1-c1",
      title: "The shape of \\( y = a^x \\)",
      concept:
        "Every graph of \\( y = a^x \\) with \\( a > 1 \\) shares two features: it passes through \\( (0, 1) \\), because \\( a^0 = 1 \\) for any base, and it has the \\( x \\)-axis as a horizontal asymptote, since \\( a^x \\to 0 \\) as \\( x \\to -\\infty \\). The curve never touches \\( y = 0 \\) — it just gets arbitrarily close.",
      miniQuestion: {
        prompt:
          "Through which point does the graph of \\( y = 7^x \\) pass on the \\( y \\)-axis?",
        expectedAnswer: "\\( (0, 1) \\)",
        options: [
          "\\( (1, 0) \\)",
          "\\( (0, 1) \\)",
          "\\( (0, 7) \\)",
          "\\( (0, 0) \\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Any base to the power zero is 1, so \\( 7^0 = 1 \\). The \\( y \\)-intercept is \\( (0,1) \\) no matter what the base is.",
        hints: [
          "The \\( y \\)-axis is where \\( x = 0 \\). What is \\( 7^0 \\)?",
          "Anything (positive) to the power 0 equals 1.",
        ],
      },
    },
    {
      id: "el1-c2",
      title: "A negative power flips it",
      concept:
        "Writing \\( \\left(\\tfrac{1}{a}\\right)^x \\) is the same as \\( a^{-x} \\), because \\( \\frac{1}{a^x} = a^{-x} \\). Replacing \\( x \\) with \\( -x \\) reflects the graph in the \\( y \\)-axis, turning an increasing curve into a decreasing one. So \\( y = 3^{-x} \\) and \\( y = \\left(\\tfrac{1}{3}\\right)^x \\) are exactly the same graph.",
      miniQuestion: {
        prompt: "Rewrite \\( \\left(\\dfrac{1}{5}\\right)^x \\) as a power of 5.",
        expectedAnswer: "\\( 5^{-x} \\)",
        options: [
          "\\( 5^{-x} \\)",
          "\\( 5^{x} \\)",
          "\\( -5^{x} \\)",
          "\\( 5^{1/x} \\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "\\( \\left(\\tfrac{1}{5}\\right)^x = \\frac{1}{5^x} = 5^{-x} \\). A reciprocal base is just a negative exponent in disguise.",
        hints: [
          "\\( \\frac{1}{5} = 5^{-1} \\). Now raise that to the power \\( x \\).",
          "Use \\( (a^m)^x = a^{mx} \\): \\( (5^{-1})^x = 5^{-x} \\).",
        ],
      },
    },
    {
      id: "el1-c3",
      title: "The special number \\( e \\)",
      concept:
        "The constant \\( e \\approx 2.718 \\) is chosen so that the gradient of \\( y = e^x \\) at every point equals the function's own value: \\( \\frac{d}{dx}(e^x) = e^x \\). No other base behaves this way — that is what makes \\( e \\) the natural choice for exponential models.",
      miniQuestion: {
        prompt:
          "For \\( y = e^x \\), what is the gradient of the curve at the point \\( (0, 1) \\)?",
        expectedAnswer: "1",
        options: ["0", "1", "\\( e \\)", "\\( 2.718 \\)"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "The gradient of \\( e^x \\) equals \\( e^x \\). At \\( x = 0 \\) that is \\( e^0 = 1 \\) — the curve and its slope agree everywhere.",
        hints: [
          "The gradient of \\( e^x \\) is \\( e^x \\). Evaluate it at \\( x = 0 \\).",
          "What is \\( e^0 \\)?",
        ],
      },
    },
    {
      id: "el1-c4",
      title: "Differentiating \\( y = Ae^{kx} \\)",
      concept:
        "For the general exponential \\( y = Ae^{kx} \\), the gradient is \\( \\frac{dy}{dx} = kAe^{kx} \\): you multiply by the power's coefficient \\( k \\) and leave the exponential unchanged. So the gradient of \\( y = 4e^{2x} \\) is \\( 8e^{2x} \\).",
      miniQuestion: {
        prompt: "Find the gradient of \\( y = 7e^{5x} \\) at \\( x = 0 \\).",
        expectedAnswer: "35",
        options: ["7", "12", "35", "35e"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\( \\frac{dy}{dx} = 5 \\times 7 e^{5x} = 35e^{5x} \\); at \\( x = 0 \\), \\( e^0 = 1 \\) gives \\( 35 \\). The factor \\( k \\) is what scales the gradient.",
        hints: [
          "Differentiate: multiply \\( A = 7 \\) by \\( k = 5 \\) to get the coefficient.",
          "You get \\( 35e^{5x} \\). Now put \\( x = 0 \\) and use \\( e^0 = 1 \\).",
        ],
      },
    },
    {
      id: "el1-c5",
      title: "Recovering \\( A \\) and \\( k \\)",
      concept:
        "If you know the gradient function you can read off \\( A \\) and \\( k \\). Since \\( \\frac{dy}{dx} = kAe^{kx} \\), match the exponent to get \\( k \\), then match the coefficient: \\( kA \\) equals the number out front, so \\( A = \\frac{\\text{coefficient}}{k} \\).",
      miniQuestion: {
        prompt:
          "The curve \\( y = Ae^{kx} \\) has gradient \\( 6e^{3x} \\). Find \\( A \\).",
        expectedAnswer: "2",
        options: ["18", "6", "2", "3"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "The exponent gives \\( k = 3 \\); then \\( kA = 6 \\) gives \\( A = \\frac{6}{3} = 2 \\), so \\( y = 2e^{3x} \\).",
        hints: [
          "Compare \\( kAe^{kx} \\) with \\( 6e^{3x} \\). What is \\( k \\)?",
          "With \\( k = 3 \\) and \\( kA = 6 \\), solve for \\( A \\).",
        ],
      },
    },
  ],
};
