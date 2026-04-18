import { Question } from "@/lib/types";

/**
 * Chapter 5 — Radians (Year 2)
 * 5.1 Radian measure, 5.2 Arc length, 5.3 Areas of sectors and segments,
 * 5.4 Solving trig equations, 5.5 Small angle approximations.
 */
export const questions: Question[] = [
  {
    id: "y2ra1-001",
    topicRef: "y2ra1",
    topicTitle: "Radian Measure",
    difficulty: "Foundation",
    questionText: "Convert \\( 135^\\circ \\) into radians, giving your answer as a multiple of \\( \\pi \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["radians", "conversion"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the conversion \\( 180^\\circ = \\pi \\) radians.", workingLatex: "135^\\circ = 135 \\times \\tfrac{\\pi}{180}", explanation: "" },
        { stepNumber: 2, description: "Simplify.", workingLatex: "= \\tfrac{135\\pi}{180} = \\tfrac{3\\pi}{4}", explanation: "" },
      ],
      finalAnswer: "\\( \\dfrac{3\\pi}{4} \\text{ rad} \\)",
    },
  },
  {
    id: "y2ra2-001",
    topicRef: "y2ra2",
    topicTitle: "Arc Length",
    difficulty: "Foundation",
    questionText: "A circle has radius \\( 8 \\) cm. Find the arc length subtended by an angle of \\( \\tfrac{\\pi}{6} \\) radians at the centre.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["arc length", "radians"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use \\( s = r\\theta \\) with \\( \\theta \\) in radians.", workingLatex: "s = 8 \\times \\tfrac{\\pi}{6} = \\tfrac{4\\pi}{3}", explanation: "" },
      ],
      finalAnswer: "\\( s = \\tfrac{4\\pi}{3}\\text{ cm} \\approx 4.19 \\text{ cm} \\)",
    },
  },
  {
    id: "y2ra3-001",
    topicRef: "y2ra3",
    topicTitle: "Areas of Sectors and Segments",
    difficulty: "Standard",
    questionText: "A sector of a circle of radius \\( 10 \\) cm subtends an angle of \\( 1.2 \\) radians at the centre. Find (a) the area of the sector, (b) the area of the minor segment cut off by the chord.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sector area", "segment area"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Area of sector: \\( A = \\tfrac{1}{2}r^2\\theta \\).", workingLatex: "A = \\tfrac{1}{2}(100)(1.2) = 60\\text{ cm}^2", explanation: "" },
        { stepNumber: 2, description: "Area of triangle formed by the two radii: \\( \\tfrac{1}{2}r^2 \\sin\\theta \\).", workingLatex: "T = \\tfrac{1}{2}(100)\\sin 1.2 \\approx 46.602\\text{ cm}^2", explanation: "" },
        { stepNumber: 3, description: "Segment area = sector area \\( - \\) triangle area.", workingLatex: "S = 60 - 46.602 \\approx 13.4\\text{ cm}^2", explanation: "" },
      ],
      finalAnswer: "(a) \\( 60 \\text{ cm}^2 \\);\\; (b) \\( \\approx 13.4 \\text{ cm}^2 \\).",
    },
  },
  {
    id: "y2ra4-001",
    topicRef: "y2ra4",
    topicTitle: "Solving Trigonometric Equations (radians)",
    difficulty: "Standard",
    questionText: "Solve \\( 2\\sin\\theta = 1 \\) for \\( 0 \\le \\theta < 2\\pi \\). Give exact answers.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["trigonometric equations", "radians"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rearrange.", workingLatex: "\\sin\\theta = \\tfrac{1}{2}", explanation: "" },
        { stepNumber: 2, description: "Principal value.", workingLatex: "\\theta = \\tfrac{\\pi}{6}", explanation: "" },
        { stepNumber: 3, description: "Use symmetry of sine: \\( \\sin(\\pi - \\theta) = \\sin\\theta \\).", workingLatex: "\\theta = \\pi - \\tfrac{\\pi}{6} = \\tfrac{5\\pi}{6}", explanation: "" },
      ],
      finalAnswer: "\\( \\theta = \\tfrac{\\pi}{6},\\; \\tfrac{5\\pi}{6} \\)",
    },
  },
  {
    id: "y2ra5-001",
    topicRef: "y2ra5",
    topicTitle: "Small Angle Approximations",
    difficulty: "Standard",
    questionText: "Using small angle approximations, estimate the value of \\( \\dfrac{\\sin(2\\theta) - \\theta\\cos\\theta}{\\theta^3} \\) when \\( \\theta \\) is small.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["small angle", "approximation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use \\( \\sin x \\approx x - \\tfrac{x^3}{6} \\) and \\( \\cos x \\approx 1 - \\tfrac{x^2}{2} \\) for small \\( x \\).", workingLatex: "\\sin(2\\theta) \\approx 2\\theta - \\tfrac{(2\\theta)^3}{6} = 2\\theta - \\tfrac{4\\theta^3}{3}", explanation: "" },
        { stepNumber: 2, description: "Expand the second term.", workingLatex: "\\theta\\cos\\theta \\approx \\theta\\left(1 - \\tfrac{\\theta^2}{2}\\right) = \\theta - \\tfrac{\\theta^3}{2}", explanation: "" },
        { stepNumber: 3, description: "Combine numerators.", workingLatex: "\\sin(2\\theta) - \\theta\\cos\\theta \\approx \\theta - \\tfrac{4\\theta^3}{3} + \\tfrac{\\theta^3}{2} = \\theta - \\tfrac{5\\theta^3}{6}", explanation: "The dominant term is \\( \\theta \\), so dividing by \\( \\theta^3 \\) gives \\( \\frac{1}{\\theta^2} - \\tfrac{5}{6} \\). Actually keep all terms:" },
        { stepNumber: 4, description: "The first non-cancelling term gives the leading behaviour.", workingLatex: "\\dfrac{\\sin(2\\theta) - \\theta\\cos\\theta}{\\theta^3} \\approx \\dfrac{\\theta - \\tfrac{5\\theta^3}{6}}{\\theta^3}", explanation: "As \\( \\theta \\to 0 \\) this diverges like \\( \\tfrac{1}{\\theta^2} \\), so the expression grows without bound." },
      ],
      finalAnswer: "The expression behaves like \\( \\dfrac{1}{\\theta^2} - \\tfrac{5}{6} \\), so it tends to infinity as \\( \\theta \\to 0 \\).",
      commonMistakes: ["Forgetting that \\( \\sin(2\\theta) \\) must be expanded using the small angle approximation with argument \\( 2\\theta \\), not \\( \\theta \\)."],
    },
  },
];
