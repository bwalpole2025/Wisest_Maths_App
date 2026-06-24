import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Laws of Logarithms
 * Ref:   el3
 */
export const lesson: Lesson = {
  topicRef: "el3",
  title: "Laws of Logarithms",
  intro:
    "Three laws turn products into sums, quotients into differences, and powers into multipliers. Master them and you can combine or split logarithms at will — the key to solving log equations.",
  cards: [
    {
      id: "el3-c1",
      title: "The product law",
      concept:
        "Adding two logs of the same base multiplies their arguments: \\( \\log_a x + \\log_a y = \\log_a(xy) \\). So \\( \\log_3 5 + \\log_3 4 = \\log_3 20 \\). Watch the trap: this is \\( \\log_a(xy) \\), the log of a product — it is not \\( \\log_a(x+y) \\).",
      miniQuestion: {
        prompt: "Write \\( \\log_2 6 + \\log_2 3 \\) as a single logarithm.",
        expectedAnswer: "\\( \\log_2 18 \\)",
        options: [
          "\\( \\log_2 9 \\)",
          "\\( \\log_2 18 \\)",
          "\\( \\log_4 18 \\)",
          "\\( \\log_2 6^3 \\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The product law multiplies the arguments: \\( 6 \\times 3 = 18 \\), giving \\( \\log_2 18 \\). Adding logs never adds the insides.",
        hints: [
          "Use \\( \\log_a x + \\log_a y = \\log_a(xy) \\).",
          "Multiply the arguments: \\( 6 \\times 3 \\).",
        ],
      },
    },
    {
      id: "el3-c2",
      title: "The quotient law",
      concept:
        "Subtracting logs of the same base divides their arguments: \\( \\log_a x - \\log_a y = \\log_a\\!\\left(\\tfrac{x}{y}\\right) \\). Sometimes the result simplifies fully — \\( \\log_5 40 - \\log_5 8 = \\log_5 5 = 1 \\), using \\( \\log_a a = 1 \\).",
      miniQuestion: {
        prompt:
          "Write \\( \\ln 30 - \\ln 5 \\) as a single natural logarithm.",
        expectedAnswer: "\\( \\ln 6 \\)",
        options: [
          "\\( \\ln 25 \\)",
          "\\( \\ln 150 \\)",
          "\\( \\ln 6 \\)",
          "\\( \\dfrac{\\ln 30}{\\ln 5} \\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Subtraction divides the arguments: \\( 30 \\div 5 = 6 \\), giving \\( \\ln 6 \\). The law works for any base, including \\( e \\).",
        hints: [
          "Use \\( \\log_a x - \\log_a y = \\log_a\\!\\left(\\tfrac{x}{y}\\right) \\).",
          "Divide: \\( 30 \\div 5 \\).",
        ],
      },
    },
    {
      id: "el3-c3",
      title: "The power law",
      concept:
        "A coefficient in front of a log can move up to become an exponent: \\( n\\log_a x = \\log_a(x^n) \\). So \\( 4\\log_2 3 = \\log_2(3^4) = \\log_2 81 \\). A fractional coefficient gives a root: \\( \\tfrac{1}{2}\\log_{10} 49 = \\log_{10}\\sqrt{49} = \\log_{10} 7 \\).",
      miniQuestion: {
        prompt: "Write \\( 3\\ln 2 \\) as a single natural logarithm.",
        expectedAnswer: "\\( \\ln 8 \\)",
        options: [
          "\\( \\ln 6 \\)",
          "\\( \\ln 8 \\)",
          "\\( 3\\ln 2 \\)",
          "\\( \\ln 5 \\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The coefficient becomes the exponent: \\( 3\\ln 2 = \\ln(2^3) = \\ln 8 \\). The multiplier out front always rides up into the power.",
        hints: [
          "Use \\( n\\log_a x = \\log_a(x^n) \\).",
          "Evaluate \\( 2^3 \\).",
        ],
      },
    },
    {
      id: "el3-c4",
      title: "Combining all three",
      concept:
        "Mixed expressions collapse to one log by applying the laws in order: turn coefficients into powers, then combine sums (product law) and differences (quotient law). For instance \\( \\log_4 3 + \\log_4 5 - \\log_4 15 = \\log_4\\!\\left(\\tfrac{3 \\times 5}{15}\\right) = \\log_4 1 = 0 \\).",
      miniQuestion: {
        prompt:
          "Simplify \\( \\log_4 3 + \\log_4 5 - \\log_4 15 \\) to a single number.",
        expectedAnswer: "0",
        options: ["1", "0", "\\( \\log_4 15 \\)", "15"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "Combining gives \\( \\log_4\\!\\left(\\tfrac{15}{15}\\right) = \\log_4 1 \\), and \\( \\log_a 1 = 0 \\) because \\( a^0 = 1 \\).",
        hints: [
          "Combine the sum first: \\( \\log_4 3 + \\log_4 5 = \\log_4 15 \\).",
          "Then subtract: \\( \\log_4 15 - \\log_4 15 = \\log_4 1 \\). What is that?",
        ],
      },
    },
    {
      id: "el3-c5",
      title: "Splitting a log apart",
      concept:
        "The laws also run in reverse, letting you break a single log into pieces — useful for differentiating or solving. For example \\( \\log_a\\!\\left(\\tfrac{x^3}{y}\\right) = 3\\log_a x - \\log_a y \\): the power comes down as a multiplier and the division becomes a subtraction.",
      miniQuestion: {
        prompt:
          "Write \\( \\log_a(x^2 y) \\) in terms of \\( \\log_a x \\) and \\( \\log_a y \\).",
        expectedAnswer: "\\( 2\\log_a x + \\log_a y \\)",
        options: [
          "\\( 2\\log_a x - \\log_a y \\)",
          "\\( (\\log_a x)^2 + \\log_a y \\)",
          "\\( 2\\log_a x + \\log_a y \\)",
          "\\( 2\\log_a x \\times \\log_a y \\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "The product splits into a sum, then the power on \\( x^2 \\) drops to a coefficient: \\( \\log_a(x^2 y) = 2\\log_a x + \\log_a y \\).",
        hints: [
          "First split the product: \\( \\log_a(x^2 y) = \\log_a(x^2) + \\log_a y \\).",
          "Then bring the power down: \\( \\log_a(x^2) = 2\\log_a x \\).",
        ],
      },
    },
  ],
};
