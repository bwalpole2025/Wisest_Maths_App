import { Question } from "@/lib/types";

/**
 * Chapter 10 — Numerical methods (Year 2)
 * 10.1 Locating roots, 10.2 Iteration, 10.3 Newton-Raphson.
 */
export const questions: Question[] = [
  {
    id: "y2nm1-001",
    topicRef: "y2nm1",
    topicTitle: "Locating Roots",
    difficulty: "Standard",
    questionText: "Show that the equation \\( x^3 - x - 1 = 0 \\) has a root in the interval \\( [1, 2] \\). Justify your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sign change", "continuity"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define \\( f(x) = x^3 - x - 1 \\). Evaluate at the endpoints.", workingLatex: "f(1) = 1 - 1 - 1 = -1 < 0", explanation: "" },
        { stepNumber: 2, description: "Evaluate at the upper endpoint.", workingLatex: "f(2) = 8 - 2 - 1 = 5 > 0", explanation: "" },
        { stepNumber: 3, description: "Apply the sign-change criterion.", workingLatex: "f(1) < 0 < f(2)", explanation: "Since \\( f \\) is continuous and changes sign on \\( [1, 2] \\), there is at least one root in \\( (1, 2) \\) by the IVT." },
      ],
      finalAnswer: "There is a root in \\( [1, 2] \\) by the Intermediate Value Theorem.",
    },
  },
  {
    id: "y2nm2-001",
    topicRef: "y2nm2",
    topicTitle: "Iteration",
    difficulty: "Standard",
    questionText: "Use the iteration \\( x_{n+1} = (x_n + 1)^{1/3} \\) with \\( x_1 = 1 \\) to find \\( x_2,\\; x_3,\\; x_4 \\) to 4 d.p. State what root of \\( x^3 - x - 1 = 0 \\) this converges to.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iteration", "fixed point"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the iteration.", workingLatex: "x_2 = (1 + 1)^{1/3} = 2^{1/3} \\approx 1.2599", explanation: "" },
        { stepNumber: 2, description: "Next iterate.", workingLatex: "x_3 = (1.2599 + 1)^{1/3} \\approx 1.3123", explanation: "" },
        { stepNumber: 3, description: "Next iterate.", workingLatex: "x_4 = (1.3123 + 1)^{1/3} \\approx 1.3224", explanation: "Converges towards the real root \\( \\approx 1.3247 \\) of \\( x^3 - x - 1 = 0 \\)." },
      ],
      finalAnswer: "\\( x_2 \\approx 1.2599,\\; x_3 \\approx 1.3123,\\; x_4 \\approx 1.3224 \\). Converges to \\( \\approx 1.3247 \\).",
    },
  },
  {
    id: "y2nm3-001",
    topicRef: "y2nm3",
    topicTitle: "The Newton-Raphson Method",
    difficulty: "Standard",
    questionText: "Apply the Newton-Raphson method to \\( f(x) = x^2 - 5 \\) with \\( x_0 = 2 \\). Find \\( x_2 \\) correct to 4 d.p.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["newton-raphson", "iteration"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Newton-Raphson: \\( x_{n+1} = x_n - \\tfrac{f(x_n)}{f'(x_n)} \\). Here \\( f'(x) = 2x \\).", workingLatex: "x_{n+1} = x_n - \\tfrac{x_n^2 - 5}{2x_n} = \\tfrac{x_n^2 + 5}{2x_n}", explanation: "" },
        { stepNumber: 2, description: "Compute \\( x_1 \\).", workingLatex: "x_1 = \\tfrac{4 + 5}{4} = 2.25", explanation: "" },
        { stepNumber: 3, description: "Compute \\( x_2 \\).", workingLatex: "x_2 = \\tfrac{(2.25)^2 + 5}{2(2.25)} = \\tfrac{10.0625}{4.5} \\approx 2.2361", explanation: "Converges to \\( \\sqrt{5} \\approx 2.2361 \\)." },
      ],
      finalAnswer: "\\( x_2 \\approx 2.2361 \\), approaching \\( \\sqrt{5} \\).",
    },
  },
];
