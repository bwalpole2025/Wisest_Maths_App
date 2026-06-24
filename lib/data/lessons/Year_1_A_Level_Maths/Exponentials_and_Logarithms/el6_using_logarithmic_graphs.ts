import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Using Logarithmic Graphs
 * Ref:   el6
 */
export const lesson: Lesson = {
  topicRef: "el6",
  title: "Using Logarithmic Graphs",
  intro:
    "Take logs of a power law or an exponential law and a curve becomes a straight line. From its gradient and intercept you can recover the hidden constants — that is the whole point of log graphs.",
  cards: [
    {
      id: "el6-c1",
      title: "Linearising \\( y = ax^n \\)",
      concept:
        "Taking \\( \\log_{10} \\) of \\( y = ax^n \\) gives \\( \\log y = \\log a + n\\log x \\), using the product and power laws. This is straight-line form \\( Y = mX + c \\) with \\( Y = \\log y \\) and \\( X = \\log x \\): plotting \\( \\log y \\) against \\( \\log x \\) gives gradient \\( n \\) and vertical intercept \\( \\log a \\).",
      miniQuestion: {
        prompt:
          "Taking logs of \\( y = ax^n \\), what does the gradient of \\( \\log y \\) against \\( \\log x \\) represent?",
        expectedAnswer: "\\( n \\)",
        options: [
          "\\( \\log a \\)",
          "\\( n \\)",
          "\\( a \\)",
          "\\( \\log n \\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "In \\( \\log y = n\\log x + \\log a \\), the coefficient of \\( \\log x \\) is the gradient, which is \\( n \\) — the power in the original law.",
        hints: [
          "Compare \\( \\log y = n\\log x + \\log a \\) with \\( Y = mX + c \\).",
          "The number multiplying \\( \\log x \\) is the gradient.",
        ],
      },
    },
    {
      id: "el6-c2",
      title: "Recovering \\( a \\) from the intercept",
      concept:
        "For \\( y = ax^n \\), the vertical intercept of the \\( \\log y \\) vs \\( \\log x \\) line equals \\( \\log a \\), not \\( a \\) itself. To get \\( a \\), undo the log: \\( a = 10^{\\text{intercept}} \\). An intercept of \\( 0.5 \\) gives \\( a = 10^{0.5} = \\sqrt{10} \\approx 3.16 \\).",
      miniQuestion: {
        prompt:
          "A \\( \\log y \\) vs \\( \\log x \\) line for \\( y = ax^n \\) has vertical intercept 3. Find \\( a \\).",
        expectedAnswer: "1000",
        options: ["3", "30", "1000", "100"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "The intercept is \\( \\log a = 3 \\), so \\( a = 10^3 = 1000 \\). The intercept gives \\( \\log a \\), so always raise 10 to it.",
        hints: [
          "The intercept equals \\( \\log a \\), not \\( a \\).",
          "Solve \\( \\log a = 3 \\) by taking \\( 10^3 \\).",
        ],
      },
    },
    {
      id: "el6-c3",
      title: "Linearising \\( y = kb^x \\)",
      concept:
        "An exponential law \\( y = kb^x \\) linearises differently. Taking logs gives \\( \\log y = \\log k + x\\log b \\), so you plot \\( \\log y \\) against \\( x \\) (not \\( \\log x \\)). The gradient is \\( \\log b \\) and the vertical intercept is \\( \\log k \\).",
      miniQuestion: {
        prompt:
          "To linearise \\( y = kb^x \\), what do you plot \\( \\log y \\) against?",
        expectedAnswer: "\\( x \\)",
        options: [
          "\\( \\log x \\)",
          "\\( x \\)",
          "\\( \\log b \\)",
          "\\( b^x \\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Because the variable is in the exponent, \\( \\log y = (\\log b)x + \\log k \\) is linear in \\( x \\) itself — so plot \\( \\log y \\) against \\( x \\). For a power law you would use \\( \\log x \\) instead.",
        hints: [
          "Take logs: \\( \\log y = \\log k + x\\log b \\). Which variable is \\( X \\)?",
          "The \\( x \\) appears un-logged, so plot \\( \\log y \\) against \\( x \\).",
        ],
      },
    },
    {
      id: "el6-c4",
      title: "Finding \\( b \\) from the gradient",
      concept:
        "For \\( y = kb^x \\), the gradient of the \\( \\log y \\) vs \\( x \\) line is \\( \\log b \\). Recover \\( b \\) with \\( b = 10^{\\text{gradient}} \\). A gradient of \\( 0.3 \\) gives \\( b = 10^{0.3} \\approx 2.00 \\); the intercept gives \\( k = 10^{\\text{intercept}} \\).",
      miniQuestion: {
        prompt:
          "A \\( \\log y \\) vs \\( x \\) line for \\( y = kb^x \\) has gradient 0.3. Find \\( b \\) to 3 s.f.",
        expectedAnswer: "2.00",
        options: ["0.300", "1.35", "3.00", "2.00"],
        correctIndex: 3,
        answerType: "numeric",
        insight:
          "The gradient is \\( \\log b = 0.3 \\), so \\( b = 10^{0.3} \\approx 2.00 \\). The gradient gives \\( \\log b \\), so raise 10 to it.",
        hints: [
          "The gradient equals \\( \\log b \\).",
          "Solve \\( \\log b = 0.3 \\) by taking \\( 10^{0.3} \\).",
        ],
      },
    },
    {
      id: "el6-c5",
      title: "Two points, full law",
      concept:
        "Given two points on the linear graph you can find everything. Compute the gradient from the two points, then use one point to find the intercept via \\( \\log y = (\\text{gradient})X + c \\). For \\( y = ax^n \\) through \\( (0,1.2) \\) and \\( (2,3.2) \\) on a \\( \\log y \\) vs \\( \\log x \\) plot: gradient \\( = \\tfrac{3.2-1.2}{2-0} = 1 = n \\), and the intercept \\( 1.2 = \\log a \\).",
      miniQuestion: {
        prompt:
          "A \\( \\log y \\) vs \\( \\log x \\) line passes through \\( (0, 1.2) \\) and \\( (2, 3.2) \\). Find \\( n \\) in \\( y = ax^n \\).",
        expectedAnswer: "1",
        options: ["2", "1.2", "1", "1.6"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "The gradient is \\( \\tfrac{3.2 - 1.2}{2 - 0} = 1 \\), and for a power law the gradient is exactly \\( n \\), so \\( n = 1 \\).",
        hints: [
          "Gradient \\( = \\dfrac{\\Delta(\\log y)}{\\Delta(\\log x)} \\) using the two points.",
          "\\( \\dfrac{3.2 - 1.2}{2 - 0} \\), and that gradient equals \\( n \\).",
        ],
      },
    },
  ],
};
