import { Question } from "@/lib/types";

/**
 * Chapter 12 — Vectors (Year 2)
 * 12.1 3D coordinates, 12.2 Vectors in 3D, 12.3 Solving geometric problems, 12.4 Application to mechanics.
 */
export const questions: Question[] = [
  {
    id: "y2vc1-001",
    topicRef: "y2vc1",
    topicTitle: "3D Coordinates",
    difficulty: "Foundation",
    questionText: "Find the distance between the points \\( A(1, 2, 3) \\) and \\( B(4, 6, 3) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["3D", "distance"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the 3D distance formula.", workingLatex: "d = \\sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2}", explanation: "" },
        { stepNumber: 2, description: "Evaluate.", workingLatex: "= \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5", explanation: "" },
      ],
      finalAnswer: "\\( |AB| = 5 \\)",
    },
  },
  {
    id: "y2vc2-001",
    topicRef: "y2vc2",
    topicTitle: "Vectors in 3D",
    difficulty: "Foundation",
    questionText: "Find the magnitude of the vector \\( \\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j} + 12\\mathbf{k} \\) and write the unit vector \\( \\hat{\\mathbf{a}} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["3D vectors", "magnitude", "unit vector"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Magnitude \\( |\\mathbf{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2} \\).", workingLatex: "|\\mathbf{a}| = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13", explanation: "" },
        { stepNumber: 2, description: "Divide each component by the magnitude.", workingLatex: "\\hat{\\mathbf{a}} = \\tfrac{1}{13}(3\\mathbf{i} + 4\\mathbf{j} + 12\\mathbf{k})", explanation: "" },
      ],
      finalAnswer: "\\( |\\mathbf{a}| = 13 \\);\\; \\( \\hat{\\mathbf{a}} = \\tfrac{3}{13}\\mathbf{i} + \\tfrac{4}{13}\\mathbf{j} + \\tfrac{12}{13}\\mathbf{k} \\).",
    },
  },
  {
    id: "y2vc3-001",
    topicRef: "y2vc3",
    topicTitle: "Solving Geometric Problems",
    difficulty: "Standard",
    questionText: "The points \\( A(1, 0, 2),\\; B(3, 2, 4),\\; C(4, 5, 6),\\; D(2, 3, 4) \\) form a quadrilateral. Show that \\( ABCD \\) is a parallelogram.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["3D vectors", "parallelogram", "geometry"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute \\( \\vec{AB} \\).", workingLatex: "\\vec{AB} = B - A = (2, 2, 2)", explanation: "" },
        { stepNumber: 2, description: "Compute \\( \\vec{DC} \\).", workingLatex: "\\vec{DC} = C - D = (2, 2, 2)", explanation: "" },
        { stepNumber: 3, description: "Compare.", workingLatex: "\\vec{AB} = \\vec{DC}", explanation: "Since the opposite sides are equal and parallel, \\( ABCD \\) is a parallelogram." },
      ],
      finalAnswer: "\\( \\vec{AB} = \\vec{DC} = (2, 2, 2) \\), so \\( ABCD \\) is a parallelogram. \\(\\blacksquare\\)",
    },
  },
  {
    id: "y2vc4-001",
    topicRef: "y2vc4",
    topicTitle: "Application to Mechanics",
    difficulty: "Standard",
    questionText: "Three forces act on a particle: \\( \\mathbf{F}_1 = 2\\mathbf{i} - 3\\mathbf{j} + \\mathbf{k} \\), \\( \\mathbf{F}_2 = -\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k} \\), \\( \\mathbf{F}_3 = 3\\mathbf{i} - \\mathbf{j} + \\mathbf{k} \\) newtons. Find the resultant force and its magnitude.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "forces", "mechanics"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Add components.", workingLatex: "\\mathbf{R} = \\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = (2 - 1 + 3)\\mathbf{i} + (-3 + 4 - 1)\\mathbf{j} + (1 - 2 + 1)\\mathbf{k}", explanation: "" },
        { stepNumber: 2, description: "Simplify.", workingLatex: "\\mathbf{R} = 4\\mathbf{i} + 0\\mathbf{j} + 0\\mathbf{k}", explanation: "" },
        { stepNumber: 3, description: "Magnitude.", workingLatex: "|\\mathbf{R}| = \\sqrt{16} = 4\\text{ N}", explanation: "" },
      ],
      finalAnswer: "Resultant \\( \\mathbf{R} = 4\\mathbf{i}\\text{ N} \\); magnitude \\( 4 \\text{ N} \\).",
    },
  },
];
