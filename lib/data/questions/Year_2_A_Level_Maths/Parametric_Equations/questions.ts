import { Question } from "@/lib/types";

/**
 * Chapter 8 — Parametric equations (Year 2)
 * 8.1 Parametric equations, 8.2 Using trig identities, 8.3 Curve sketching, 8.4 Points of intersection.
 */
export const questions: Question[] = [
  {
    id: "y2pe1-001",
    topicRef: "y2pe1",
    topicTitle: "Parametric Equations",
    difficulty: "Foundation",
    questionText: "A curve has parametric equations \\( x = 2t,\\; y = t^2 - 1 \\). Find the Cartesian equation of the curve.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["parametric", "cartesian"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Make \\( t \\) the subject of the simpler equation.", workingLatex: "t = \\tfrac{x}{2}", explanation: "" },
        { stepNumber: 2, description: "Substitute into the equation for \\( y \\).", workingLatex: "y = \\left(\\tfrac{x}{2}\\right)^2 - 1 = \\tfrac{x^2}{4} - 1", explanation: "" },
      ],
      finalAnswer: "\\( y = \\tfrac{x^2}{4} - 1 \\)",
    },
  },
  {
    id: "y2pe2-001",
    topicRef: "y2pe2",
    topicTitle: "Using Trigonometric Identities",
    difficulty: "Standard",
    questionText: "A curve has parametric equations \\( x = 3\\cos t,\\; y = 2\\sin t \\) for \\( 0 \\le t < 2\\pi \\). Eliminate the parameter to find the Cartesian equation, and describe the curve.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parametric", "trigonometry", "ellipse"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Isolate \\( \\cos t \\) and \\( \\sin t \\).", workingLatex: "\\cos t = \\tfrac{x}{3},\\; \\sin t = \\tfrac{y}{2}", explanation: "" },
        { stepNumber: 2, description: "Use \\( \\cos^2 t + \\sin^2 t = 1 \\).", workingLatex: "\\tfrac{x^2}{9} + \\tfrac{y^2}{4} = 1", explanation: "" },
      ],
      finalAnswer: "\\( \\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1 \\). The curve is an ellipse with semi-axes 3 and 2.",
    },
  },
  {
    id: "y2pe3-001",
    topicRef: "y2pe3",
    topicTitle: "Curve Sketching",
    difficulty: "Standard",
    questionText: "A curve is defined by \\( x = t^2,\\; y = t^3 - 4t \\) for \\( -2 \\le t \\le 2 \\). Find where the curve crosses the x-axis and state the y-coordinates when \\( t = \\pm 2 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parametric", "sketch", "intercepts"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set \\( y = 0 \\) and solve for \\( t \\).", workingLatex: "t^3 - 4t = 0 \\;\\Rightarrow\\; t(t^2 - 4) = 0 \\;\\Rightarrow\\; t = 0, \\pm 2", explanation: "" },
        { stepNumber: 2, description: "Find corresponding \\( x \\).", workingLatex: "t = 0:\\; x = 0.\\;\\; t = \\pm 2:\\; x = 4.", explanation: "Curve crosses x-axis at \\( (0, 0) \\) and \\( (4, 0) \\)." },
        { stepNumber: 3, description: "At \\( t = \\pm 2 \\) compute \\( y \\) (consistency check).", workingLatex: "y(2) = 8 - 8 = 0,\\;\\; y(-2) = -8 + 8 = 0", explanation: "" },
      ],
      finalAnswer: "Curve crosses the x-axis at \\( (0, 0) \\) and \\( (4, 0) \\). At \\( t = \\pm 2 \\), \\( y = 0 \\) (same point \\( (4, 0) \\) visited twice).",
    },
  },
  {
    id: "y2pe4-001",
    topicRef: "y2pe4",
    topicTitle: "Points of Intersection",
    difficulty: "Standard",
    questionText: "Curve \\( C \\) has parametric equations \\( x = t + 1,\\; y = t^2 \\). Find the coordinates where \\( C \\) meets the line \\( y = 2x - 1 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parametric", "intersection"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute the parametric forms into the line equation.", workingLatex: "t^2 = 2(t + 1) - 1 = 2t + 1", explanation: "" },
        { stepNumber: 2, description: "Rearrange into a quadratic.", workingLatex: "t^2 - 2t - 1 = 0", explanation: "" },
        { stepNumber: 3, description: "Apply the quadratic formula.", workingLatex: "t = \\tfrac{2 \\pm \\sqrt{8}}{2} = 1 \\pm \\sqrt{2}", explanation: "" },
        { stepNumber: 4, description: "Find corresponding \\( (x, y) \\) for each value.", workingLatex: "t = 1 + \\sqrt{2}:\\; (2 + \\sqrt{2},\\; 3 + 2\\sqrt{2});\\;\\; t = 1 - \\sqrt{2}:\\; (2 - \\sqrt{2},\\; 3 - 2\\sqrt{2})", explanation: "Using \\( y = t^2 = (1 \\pm \\sqrt{2})^2 = 3 \\pm 2\\sqrt{2} \\)." },
      ],
      finalAnswer: "\\( (2 + \\sqrt{2},\\; 3 + 2\\sqrt{2}) \\) and \\( (2 - \\sqrt{2},\\; 3 - 2\\sqrt{2}) \\).",
    },
  },
];
