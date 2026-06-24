import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Modelling Exponential Growth and Decay
 * Ref:   el5
 */
export const lesson: Lesson = {
  topicRef: "el5",
  title: "Modelling Exponential Growth and Decay",
  intro:
    "Populations, savings, radioactive mass and cooling drinks all change exponentially. This lesson shows how to read a model, predict values, and find when a target is reached.",
  cards: [
    {
      id: "el5-c1",
      title: "Reading off the starting value",
      concept:
        "In a model \\( A = A_0 e^{kt} \\), the constant out front is the value at \\( t = 0 \\), because \\( e^{0} = 1 \\). So for \\( B = 200e^{0.05t} \\), the initial amount is simply \\( 200 \\) — substituting \\( t = 0 \\) leaves the multiplier untouched.",
      miniQuestion: {
        prompt:
          "For \\( B = 200e^{0.05t} \\), write down the initial value (at \\( t = 0 \\)).",
        expectedAnswer: "200",
        options: ["0", "210", "1", "200"],
        correctIndex: 3,
        answerType: "numeric",
        insight:
          "At \\( t = 0 \\), \\( e^{0} = 1 \\), so \\( B = 200 \\). The coefficient in front of \\( e \\) is always the starting amount.",
        hints: [
          "Substitute \\( t = 0 \\). What is \\( e^{0} \\)?",
          "\\( e^0 = 1 \\), so \\( B = 200 \\times 1 \\).",
        ],
      },
    },
    {
      id: "el5-c2",
      title: "Growth vs decay: the sign of \\( k \\)",
      concept:
        "The sign of the exponent's coefficient decides the behaviour. A positive \\( k \\) means growth (the quantity increases), while a negative \\( k \\) means decay (it decreases towards zero). So \\( M = 500e^{-0.03t} \\) is a decay model — the mass falls over time.",
      miniQuestion: {
        prompt:
          "Does \\( M = 500e^{-0.03t} \\) model growth or decay?",
        expectedAnswer: "decay",
        options: ["growth", "decay", "neither", "both"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The exponent coefficient \\( -0.03 \\) is negative, so \\( M \\) decreases over time — exponential decay.",
        hints: [
          "Look at the sign of the number multiplying \\( t \\) in the exponent.",
          "A negative exponent coefficient means the quantity shrinks.",
        ],
      },
    },
    {
      id: "el5-c3",
      title: "Predicting a value",
      concept:
        "To predict the quantity at a given time, substitute that \\( t \\) and evaluate. For \\( B = 200e^{0.05t} \\) after 10 hours: \\( B = 200e^{0.5} \\approx 200 \\times 1.6487 \\approx 330 \\). Keep \\( e^{0.5} \\) exact until the final calculator step.",
      miniQuestion: {
        prompt:
          "Using \\( C = 4e^{-0.2t} \\), find the value when \\( t = 3 \\), to 3 s.f. (use \\( e^{-0.6} \\approx 0.5488 \\)).",
        expectedAnswer: "2.20",
        options: ["7.29", "2.20", "0.549", "1.20"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\( C = 4e^{-0.6} \\approx 4 \\times 0.5488 \\approx 2.20 \\). Substitute, evaluate the exponential, then multiply.",
        hints: [
          "Substitute \\( t = 3 \\): the exponent becomes \\( -0.2 \\times 3 = -0.6 \\).",
          "\\( C = 4 \\times 0.5488 \\). Round to 3 s.f.",
        ],
      },
    },
    {
      id: "el5-c4",
      title: "Finding when a target is reached",
      concept:
        "To find the time at which the quantity hits a target, set the model equal to that value, isolate the exponential, then apply \\( \\ln \\). For \\( P = 150e^{0.06t} = 500 \\): divide to get \\( e^{0.06t} = \\tfrac{10}{3} \\), so \\( 0.06t = \\ln\\tfrac{10}{3} \\) and \\( t = \\dfrac{\\ln(10/3)}{0.06} \\approx 20.1 \\).",
      miniQuestion: {
        prompt:
          "For \\( M = 800e^{-0.04t} \\), find the time for the mass to fall to 200 g, to 3 s.f.",
        expectedAnswer: "\\( t \\approx 34.7 \\)",
        options: [
          "\\( t \\approx 34.7 \\)",
          "\\( t \\approx -34.7 \\)",
          "\\( t \\approx 17.3 \\)",
          "\\( t \\approx 25.0 \\)",
        ],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "\\( e^{-0.04t} = 0.25 \\Rightarrow -0.04t = \\ln 0.25 = -\\ln 4 \\), so \\( t = \\dfrac{\\ln 4}{0.04} \\approx 34.7 \\) years. The negatives cancel.",
        hints: [
          "Set \\( 800e^{-0.04t} = 200 \\) and divide by 800 to isolate the exponential.",
          "Apply \\( \\ln \\): \\( -0.04t = \\ln 0.25 \\), then solve for \\( t \\).",
        ],
      },
    },
    {
      id: "el5-c5",
      title: "The long-run limit",
      concept:
        "A decay model with a shift, like \\( T = 220 - 200e^{-0.1t} \\), approaches a limiting value as \\( t \\to \\infty \\). Since \\( e^{-0.1t} \\to 0 \\), the term subtracted vanishes and \\( T \\to 220 \\). That limit is the long-run temperature the oven settles at.",
      miniQuestion: {
        prompt:
          "For \\( T = 220 - 200e^{-0.1t} \\), what value does \\( T \\) approach as \\( t \\to \\infty \\)?",
        expectedAnswer: "220",
        options: ["20", "0", "220", "420"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "As \\( t \\to \\infty \\), \\( e^{-0.1t} \\to 0 \\), so the \\( -200e^{-0.1t} \\) term disappears and \\( T \\to 220 \\). That is the model's horizontal asymptote.",
        hints: [
          "What happens to \\( e^{-0.1t} \\) as \\( t \\) gets very large?",
          "It tends to 0, so \\( T \\to 220 - 0 \\).",
        ],
      },
    },
  ],
};
