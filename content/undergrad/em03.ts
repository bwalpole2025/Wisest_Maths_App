import { Question } from "@/lib/types";

/**
 * Topic: Vectors and Vector Algebra
 * Ref:   em03  (Undergraduate Engineering Mathematics)
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Addition/scaling, magnitude, unit vectors, dot product, angle between,
 * perpendicularity, cross product, area/normal, projections, scalar triple
 * product, coplanarity, and the vector equation of a line.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em03-001",
    topicRef: "em03",
    topicTitle: "Vectors 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Given \\( \\mathbf{a}=2\\mathbf{i}+\\mathbf{j}-\\mathbf{k} \\) and \\( \\mathbf{b}=\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k} \\), find \\( \\mathbf{a}+\\mathbf{b} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "addition"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add components.",
          workingLatex: "(2+1)\\mathbf{i}+(1+3)\\mathbf{j}+(-1+2)\\mathbf{k}=3\\mathbf{i}+4\\mathbf{j}+\\mathbf{k}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3\\mathbf{i}+4\\mathbf{j}+\\mathbf{k} \\)",
      canonicalAnswer: "(3,4,1)",
    },
  },
  {
    id: "em03-002",
    topicRef: "em03",
    topicTitle: "Vectors 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( 3(\\mathbf{i}-2\\mathbf{j}+4\\mathbf{k}) \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "scalar multiplication"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Scale each component by \\( 3 \\).",
          workingLatex: "3\\mathbf{i}-6\\mathbf{j}+12\\mathbf{k}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3\\mathbf{i}-6\\mathbf{j}+12\\mathbf{k} \\)",
      canonicalAnswer: "(3,-6,12)",
    },
  },
  {
    id: "em03-003",
    topicRef: "em03",
    topicTitle: "Vectors 03",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Find the magnitude of \\( \\mathbf{a}=2\\mathbf{i}-\\mathbf{j}+2\\mathbf{k} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "magnitude"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply \\( |\\mathbf{a}|=\\sqrt{x^{2}+y^{2}+z^{2}} \\).",
          workingLatex: "\\sqrt{2^{2}+(-1)^{2}+2^{2}}=\\sqrt{9}=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3 \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "em03-004",
    topicRef: "em03",
    topicTitle: "Vectors 04",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Find the scalar product \\( \\mathbf{a}\\cdot\\mathbf{b} \\) where \\( \\mathbf{a}=\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k} \\) and \\( \\mathbf{b}=4\\mathbf{i}-\\mathbf{j}+2\\mathbf{k} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "dot product"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply matching components and add.",
          workingLatex: "1\\cdot4+2\\cdot(-1)+3\\cdot2=4-2+6=8",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 8 \\)",
      canonicalAnswer: "8",
    },
  },
  {
    id: "em03-005",
    topicRef: "em03",
    topicTitle: "Vectors 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find a unit vector in the direction of \\( 3\\mathbf{j}+4\\mathbf{k} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "unit vector"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the magnitude.",
          workingLatex: "\\sqrt{0^{2}+3^{2}+4^{2}}=5",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Divide the vector by its magnitude.",
          workingLatex: "\\tfrac{1}{5}(3\\mathbf{j}+4\\mathbf{k})=\\tfrac{3}{5}\\mathbf{j}+\\tfrac{4}{5}\\mathbf{k}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\tfrac{3}{5}\\mathbf{j}+\\tfrac{4}{5}\\mathbf{k} \\)",
      canonicalAnswer: "(0,3/5,4/5)",
    },
  },
  {
    id: "em03-006",
    topicRef: "em03",
    topicTitle: "Vectors 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Given \\( \\mathbf{a}=5\\mathbf{i}+2\\mathbf{k} \\) and \\( \\mathbf{b}=\\mathbf{i}+3\\mathbf{j}+2\\mathbf{k} \\), find \\( \\mathbf{a}-\\mathbf{b} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "subtraction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract components.",
          workingLatex: "(5-1)\\mathbf{i}+(0-3)\\mathbf{j}+(2-2)\\mathbf{k}=4\\mathbf{i}-3\\mathbf{j}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 4\\mathbf{i}-3\\mathbf{j} \\)",
      canonicalAnswer: "(4,-3,0)",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em03-007",
    topicRef: "em03",
    topicTitle: "Vectors 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the vector product \\( (\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k})\\times(4\\mathbf{i}+5\\mathbf{j}+6\\mathbf{k}) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "cross product"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the determinant.",
          workingLatex:
            "\\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{vmatrix}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Expand along the top row.",
          workingLatex:
            "\\mathbf{i}(2\\cdot6-3\\cdot5)-\\mathbf{j}(1\\cdot6-3\\cdot4)+\\mathbf{k}(1\\cdot5-2\\cdot4)",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "-3\\mathbf{i}+6\\mathbf{j}-3\\mathbf{k}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( -3\\mathbf{i}+6\\mathbf{j}-3\\mathbf{k} \\)",
      canonicalAnswer: "(-3,6,-3)",
    },
  },
  {
    id: "em03-008",
    topicRef: "em03",
    topicTitle: "Vectors 08",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the angle between \\( \\mathbf{i} \\) and \\( \\mathbf{i}+\\mathbf{j} \\), in radians.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "angle between"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\cos\\theta=\\dfrac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|} \\).",
          workingLatex: "\\cos\\theta=\\frac{1\\cdot1+0\\cdot1}{1\\cdot\\sqrt{2}}=\\frac{1}{\\sqrt{2}}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Take the inverse cosine.",
          workingLatex: "\\theta=\\frac{\\pi}{4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\tfrac{\\pi}{4} \\)",
      canonicalAnswer: "pi/4",
    },
  },
  {
    id: "em03-009",
    topicRef: "em03",
    topicTitle: "Vectors 09",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the value of \\( t \\) for which \\( 2\\mathbf{i}-\\mathbf{j}+3\\mathbf{k} \\) and \\( t\\mathbf{i}+5\\mathbf{j}+\\mathbf{k} \\) are perpendicular.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "perpendicular", "dot product"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Perpendicular vectors have zero dot product.",
          workingLatex: "2t+(-1)(5)+3(1)=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Solve.",
          workingLatex: "2t-2=0\\ \\Rightarrow\\ t=1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( t=1 \\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "em03-010",
    topicRef: "em03",
    topicTitle: "Vectors 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find a unit vector in the direction of \\( 2\\mathbf{i}+3\\mathbf{j}+6\\mathbf{k} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "unit vector"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the magnitude.",
          workingLatex: "\\sqrt{2^{2}+3^{2}+6^{2}}=\\sqrt{49}=7",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Divide by the magnitude.",
          workingLatex: "\\tfrac{1}{7}(2\\mathbf{i}+3\\mathbf{j}+6\\mathbf{k})",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\tfrac{2}{7}\\mathbf{i}+\\tfrac{3}{7}\\mathbf{j}+\\tfrac{6}{7}\\mathbf{k} \\)",
      canonicalAnswer: "(2/7,3/7,6/7)",
    },
  },
  {
    id: "em03-011",
    topicRef: "em03",
    topicTitle: "Vectors 11",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the magnitude of \\( (\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k})\\times(4\\mathbf{i}+5\\mathbf{j}+6\\mathbf{k}) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "cross product", "magnitude"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The cross product is \\( -3\\mathbf{i}+6\\mathbf{j}-3\\mathbf{k} \\).",
          workingLatex: "\\mathbf{a}\\times\\mathbf{b}=-3\\mathbf{i}+6\\mathbf{j}-3\\mathbf{k}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Take its magnitude.",
          workingLatex: "\\sqrt{(-3)^{2}+6^{2}+(-3)^{2}}=\\sqrt{54}=3\\sqrt{6}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3\\sqrt{6} \\)",
      canonicalAnswer: "3*sqrt(6)",
    },
  },
  {
    id: "em03-012",
    topicRef: "em03",
    topicTitle: "Vectors 12",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the scalar projection of \\( \\mathbf{a}=2\\mathbf{i}+3\\mathbf{j}+6\\mathbf{k} \\) onto \\( \\mathbf{b}=\\mathbf{i}+2\\mathbf{j}+2\\mathbf{k} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "projection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Scalar projection is \\( \\dfrac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{b}|} \\).",
          workingLatex: "\\mathbf{a}\\cdot\\mathbf{b}=2+6+12=20,\\qquad |\\mathbf{b}|=\\sqrt{1+4+4}=3",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Divide.",
          workingLatex: "\\frac{20}{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\tfrac{20}{3} \\)",
      canonicalAnswer: "20/3",
    },
  },
  {
    id: "em03-013",
    topicRef: "em03",
    topicTitle: "Vectors 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find a vector perpendicular to both \\( \\mathbf{i}+\\mathbf{k} \\) and \\( \\mathbf{j}+\\mathbf{k} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "cross product", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "A vector perpendicular to both is their cross product.",
          workingLatex:
            "\\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{vmatrix}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Expand.",
          workingLatex:
            "\\mathbf{i}(0-1)-\\mathbf{j}(1-0)+\\mathbf{k}(1-0)=-\\mathbf{i}-\\mathbf{j}+\\mathbf{k}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( -\\mathbf{i}-\\mathbf{j}+\\mathbf{k} \\)",
      canonicalAnswer: "(-1,-1,1)",
    },
  },
  {
    id: "em03-014",
    topicRef: "em03",
    topicTitle: "Vectors 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Write down a vector equation of the line through \\( (1,2,3) \\) parallel to \\( 2\\mathbf{i}-\\mathbf{j}+4\\mathbf{k} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "line equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\mathbf{r}=\\mathbf{a}+t\\mathbf{d} \\) with position \\( \\mathbf{a} \\) and direction \\( \\mathbf{d} \\).",
          workingLatex: "\\mathbf{r}=(\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k})+t(2\\mathbf{i}-\\mathbf{j}+4\\mathbf{k})",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\mathbf{r}=(\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k})+t(2\\mathbf{i}-\\mathbf{j}+4\\mathbf{k}) \\)",
      canonicalAnswer: "(1,2,3)+t(2,-1,4)",
    },
  },
  {
    id: "em03-015",
    topicRef: "em03",
    topicTitle: "Vectors 15",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the distance between the points \\( A(1,2,2) \\) and \\( B(3,4,1) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vectors", "distance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form \\( \\vec{AB} \\).",
          workingLatex: "\\vec{AB}=(3-1,\\,4-2,\\,1-2)=(2,2,-1)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Take its magnitude.",
          workingLatex: "\\sqrt{2^{2}+2^{2}+(-1)^{2}}=\\sqrt{9}=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3 \\)",
      canonicalAnswer: "3",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em03-016",
    topicRef: "em03",
    topicTitle: "Vectors 16",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Find the scalar triple product \\( \\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c}) \\) for \\( \\mathbf{a}=\\mathbf{i}+2\\mathbf{j}+3\\mathbf{k} \\), \\( \\mathbf{b}=\\mathbf{j}+4\\mathbf{k} \\), \\( \\mathbf{c}=5\\mathbf{i}+6\\mathbf{j} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "scalar triple product"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The scalar triple product is the determinant of the components.",
          workingLatex:
            "\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{vmatrix}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Expand along the first row.",
          workingLatex: "1(0-24)-2(0-20)+3(0-5)=-24+40-15=1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1 \\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "em03-017",
    topicRef: "em03",
    topicTitle: "Vectors 17",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the angle between \\( \\mathbf{i}+\\mathbf{j} \\) and \\( \\mathbf{i}+\\mathbf{k} \\), in radians.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "angle between"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the dot product and magnitudes.",
          workingLatex: "\\mathbf{a}\\cdot\\mathbf{b}=1,\\qquad |\\mathbf{a}|=|\\mathbf{b}|=\\sqrt{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply the cosine formula.",
          workingLatex: "\\cos\\theta=\\frac{1}{\\sqrt{2}\\cdot\\sqrt{2}}=\\frac{1}{2}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Invert.",
          workingLatex: "\\theta=\\frac{\\pi}{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\tfrac{\\pi}{3} \\)",
      canonicalAnswer: "pi/3",
    },
  },
  {
    id: "em03-018",
    topicRef: "em03",
    topicTitle: "Vectors 18",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the area of the triangle with vertices \\( A(1,0,0) \\), \\( B(0,1,0) \\) and \\( C(0,0,1) \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "cross product", "area"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form two edge vectors.",
          workingLatex: "\\vec{AB}=-\\mathbf{i}+\\mathbf{j},\\qquad \\vec{AC}=-\\mathbf{i}+\\mathbf{k}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Cross them.",
          workingLatex:
            "\\vec{AB}\\times\\vec{AC}=\\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -1 & 1 & 0 \\\\ -1 & 0 & 1 \\end{vmatrix}=\\mathbf{i}+\\mathbf{j}+\\mathbf{k}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Area is half the magnitude of the cross product.",
          workingLatex: "\\tfrac{1}{2}\\sqrt{1^{2}+1^{2}+1^{2}}=\\frac{\\sqrt{3}}{2}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\tfrac{\\sqrt{3}}{2} \\)",
      canonicalAnswer: "sqrt(3)/2",
    },
  },
  {
    id: "em03-019",
    topicRef: "em03",
    topicTitle: "Vectors 19",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Determine whether the vectors \\( \\mathbf{i}+2\\mathbf{j}+3\\mathbf{k} \\), \\( 2\\mathbf{i}+3\\mathbf{j}+4\\mathbf{k} \\) and \\( 3\\mathbf{i}+4\\mathbf{j}+5\\mathbf{k} \\) are coplanar by evaluating their scalar triple product.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "coplanar", "scalar triple product"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate the determinant of the components.",
          workingLatex:
            "\\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 4 & 5 \\end{vmatrix}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Rows 2 and 3 minus row 1 are equal multiples, so the rows are dependent.",
          workingLatex: "R_2-R_1=(1,1,1),\\quad R_3-R_1=(2,2,2)=2(R_2-R_1)\\ \\Rightarrow\\ \\det=0",
          explanation: "A zero scalar triple product means the vectors are coplanar.",
        },
      ],
      finalAnswer: "\\( 0 \\) (the vectors are coplanar)",
      canonicalAnswer: "0",
    },
  },
  {
    id: "em03-020",
    topicRef: "em03",
    topicTitle: "Vectors 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Resolve \\( \\mathbf{a}=2\\mathbf{i}+2\\mathbf{j}+\\mathbf{k} \\) into a component parallel to \\( \\mathbf{b}=3\\mathbf{j}+4\\mathbf{k} \\) and a component perpendicular to \\( \\mathbf{b} \\); state the perpendicular component.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vectors", "projection", "resolution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the parallel component (vector projection onto \\( \\mathbf{b} \\)).",
          workingLatex:
            "\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{b}|^{2}}\\mathbf{b}=\\frac{0+6+4}{25}(3\\mathbf{j}+4\\mathbf{k})=\\tfrac{2}{5}(3\\mathbf{j}+4\\mathbf{k})",
          explanation: "\\( \\mathbf{a}\\cdot\\mathbf{b}=10 \\), \\( |\\mathbf{b}|^{2}=25 \\).",
        },
        {
          stepNumber: 2,
          description: "Subtract from \\( \\mathbf{a} \\) to get the perpendicular component.",
          workingLatex:
            "\\mathbf{a}-\\tfrac{2}{5}(3\\mathbf{j}+4\\mathbf{k})=2\\mathbf{i}+\\left(2-\\tfrac{6}{5}\\right)\\mathbf{j}+\\left(1-\\tfrac{8}{5}\\right)\\mathbf{k}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "2\\mathbf{i}+\\tfrac{4}{5}\\mathbf{j}-\\tfrac{3}{5}\\mathbf{k}",
          explanation: "Check: this dotted with \\( \\mathbf{b} \\) gives \\( \\tfrac{12}{5}-\\tfrac{12}{5}=0 \\).",
        },
      ],
      finalAnswer: "\\( 2\\mathbf{i}+\\tfrac{4}{5}\\mathbf{j}-\\tfrac{3}{5}\\mathbf{k} \\)",
      canonicalAnswer: "(2,4/5,-3/5)",
    },
  },
];
