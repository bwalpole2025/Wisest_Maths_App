import { Question } from "@/lib/types";

/**
 * Topic: Matrices and Determinants
 * Ref:   em02  (Undergraduate Engineering Mathematics)
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Matrix arithmetic, multiplication, transpose, 2×2 and 3×3 determinants,
 * inverses, solving linear systems, singular-matrix conditions, det properties.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em02-001",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find the sum \\( \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["matrices", "addition"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add corresponding entries.",
          workingLatex:
            "\\begin{pmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{pmatrix}=\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix} \\)",
      canonicalAnswer: "[[6,8],[10,12]]",
    },
  },
  {
    id: "em02-002",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find \\( 3\\begin{pmatrix} 1 & -2 \\\\ 0 & 4 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["matrices", "scalar multiplication"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply every entry by \\( 3 \\).",
          workingLatex: "\\begin{pmatrix} 3 & -6 \\\\ 0 & 12 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 3 & -6 \\\\ 0 & 12 \\end{pmatrix} \\)",
      canonicalAnswer: "[[3,-6],[0,12]]",
    },
  },
  {
    id: "em02-003",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 03",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Find the determinant of \\( \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["matrices", "determinant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply \\( \\det=ad-bc \\).",
          workingLatex: "3\\cdot 4-1\\cdot 2=12-2=10",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 10 \\)",
      canonicalAnswer: "10",
    },
  },
  {
    id: "em02-004",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Write down the transpose of \\( \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["matrices", "transpose"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Swap rows and columns.",
          workingLatex: "\\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}",
          explanation: "Row \\( i \\) becomes column \\( i \\).",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix} \\)",
      canonicalAnswer: "[[1,4],[2,5],[3,6]]",
    },
  },
  {
    id: "em02-005",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find \\( \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["matrices", "matrix-vector product"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take the dot product of each row with the column.",
          workingLatex:
            "\\begin{pmatrix} 2\\cdot 1+0\\cdot 2 \\\\ 1\\cdot 1+3\\cdot 2 \\end{pmatrix}=\\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix} \\)",
      canonicalAnswer: "[[2],[7]]",
    },
  },
  {
    id: "em02-006",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find \\( \\begin{pmatrix} 5 & 3 \\\\ 2 & 8 \\end{pmatrix} - \\begin{pmatrix} 1 & 1 \\\\ 2 & 3 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["matrices", "subtraction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract corresponding entries.",
          workingLatex: "\\begin{pmatrix} 4 & 2 \\\\ 0 & 5 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 4 & 2 \\\\ 0 & 5 \\end{pmatrix} \\)",
      canonicalAnswer: "[[4,2],[0,5]]",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em02-007",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the product \\( \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "multiplication"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Each entry is row (of the first) dotted with column (of the second).",
          workingLatex:
            "\\begin{pmatrix} 1\\cdot5+2\\cdot7 & 1\\cdot6+2\\cdot8 \\\\ 3\\cdot5+4\\cdot7 & 3\\cdot6+4\\cdot8 \\end{pmatrix}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "\\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix} \\)",
      canonicalAnswer: "[[19,22],[43,50]]",
    },
  },
  {
    id: "em02-008",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 08",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Evaluate the determinant \\( \\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{vmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "determinant", "3x3"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand along the first row.",
          workingLatex:
            "1\\begin{vmatrix} 1 & 4 \\\\ 6 & 0 \\end{vmatrix}-2\\begin{vmatrix} 0 & 4 \\\\ 5 & 0 \\end{vmatrix}+3\\begin{vmatrix} 0 & 1 \\\\ 5 & 6 \\end{vmatrix}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate the 2×2 minors.",
          workingLatex: "1(0-24)-2(0-20)+3(0-5)",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "-24+40-15=1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1 \\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "em02-009",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the inverse of \\( \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "inverse", "2x2"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the determinant.",
          workingLatex: "\\det=2\\cdot3-1\\cdot5=1",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply \\( A^{-1}=\\tfrac{1}{\\det}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} \\).",
          workingLatex: "\\frac{1}{1}\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}=\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} \\)",
      canonicalAnswer: "[[3,-1],[-5,2]]",
    },
  },
  {
    id: "em02-010",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Solve the simultaneous equations \\( x+2y=5 \\) and \\( 3x+4y=6 \\) using matrix methods.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "linear systems"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write as \\( A\\mathbf{x}=\\mathbf{b} \\).",
          workingLatex:
            "\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Find \\( A^{-1} \\) (det \\( =-2 \\)).",
          workingLatex: "A^{-1}=\\frac{1}{-2}\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Compute \\( \\mathbf{x}=A^{-1}\\mathbf{b} \\).",
          workingLatex:
            "\\frac{1}{-2}\\begin{pmatrix} 4\\cdot5-2\\cdot6 \\\\ -3\\cdot5+1\\cdot6 \\end{pmatrix}=\\frac{1}{-2}\\begin{pmatrix} 8 \\\\ -9 \\end{pmatrix}",
          explanation: "",
        },
        {
          stepNumber: 4,
          description: "Simplify.",
          workingLatex: "\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -4 \\\\ \\tfrac{9}{2} \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( x=-4,\\ y=\\tfrac{9}{2} \\)",
      canonicalAnswer: "x=-4, y=9/2",
    },
  },
  {
    id: "em02-011",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 11",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Evaluate the determinant of the lower-triangular matrix \\( \\begin{pmatrix} 2 & 0 & 0 \\\\ 3 & 1 & 0 \\\\ 4 & 5 & 6 \\end{pmatrix} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["matrices", "determinant", "triangular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "For a triangular matrix the determinant is the product of the diagonal.",
          workingLatex: "2\\cdot 1\\cdot 6=12",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 12 \\)",
      canonicalAnswer: "12",
    },
  },
  {
    id: "em02-012",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\( A=\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} \\), find \\( A^{2} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["matrices", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply \\( A \\) by itself.",
          workingLatex:
            "\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}=\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} \\)",
      canonicalAnswer: "[[1,2],[0,1]]",
    },
  },
  {
    id: "em02-013",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 13",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Find the values of \\( k \\) for which \\( \\begin{pmatrix} k & 2 \\\\ 3 & k \\end{pmatrix} \\) is singular.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "singular", "determinant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Singular means the determinant is zero.",
          workingLatex: "k\\cdot k-2\\cdot 3=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Solve.",
          workingLatex: "k^{2}=6\\ \\Rightarrow\\ k=\\pm\\sqrt{6}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( k=\\pm\\sqrt{6} \\)",
      canonicalAnswer: "{sqrt(6), -sqrt(6)}",
    },
  },
  {
    id: "em02-014",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the inverse of \\( \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "inverse", "2x2"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the determinant.",
          workingLatex: "\\det=1\\cdot4-2\\cdot3=-2",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply the 2×2 inverse formula.",
          workingLatex:
            "\\frac{1}{-2}\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}=\\begin{pmatrix} -2 & 1 \\\\ \\tfrac{3}{2} & -\\tfrac{1}{2} \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} -2 & 1 \\\\ \\tfrac{3}{2} & -\\tfrac{1}{2} \\end{pmatrix} \\)",
      canonicalAnswer: "[[-2,1],[3/2,-1/2]]",
    },
  },
  {
    id: "em02-015",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find \\( \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 2 & 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["matrices", "matrix-vector product", "3x3"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Dot each row with the column vector.",
          workingLatex:
            "\\begin{pmatrix} 1+0+6 \\\\ 0+2+3 \\\\ 2+0+3 \\end{pmatrix}=\\begin{pmatrix} 7 \\\\ 5 \\\\ 5 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 7 \\\\ 5 \\\\ 5 \\end{pmatrix} \\)",
      canonicalAnswer: "[[7],[5],[5]]",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em02-016",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 16",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Solve the system \\( x+y+z=6 \\), \\( 2x+y-z=1 \\), \\( x-y+2z=5 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "linear systems", "elimination"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "From equation 1, \\( z=6-x-y \\); substitute into equations 2 and 3.",
          workingLatex: "3x+2y=7,\\qquad x+3y=7",
          explanation: "Eq 2: \\( 2x+y-(6-x-y)=1 \\); Eq 3: \\( x-y+2(6-x-y)=5 \\).",
        },
        {
          stepNumber: 2,
          description: "Solve the 2×2 system.",
          workingLatex: "x=7-3y\\ \\Rightarrow\\ 3(7-3y)+2y=7\\ \\Rightarrow\\ -7y=-14\\ \\Rightarrow\\ y=2",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Back-substitute.",
          workingLatex: "x=7-3(2)=1,\\qquad z=6-1-2=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( x=1,\\ y=2,\\ z=3 \\)",
      canonicalAnswer: "x=1, y=2, z=3",
    },
  },
  {
    id: "em02-017",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 17",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Evaluate the determinant \\( \\begin{vmatrix} 2 & 1 & 3 \\\\ 1 & 0 & 2 \\\\ 4 & 1 & 8 \\end{vmatrix} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "determinant", "3x3"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand along the first row.",
          workingLatex:
            "2\\begin{vmatrix} 0 & 2 \\\\ 1 & 8 \\end{vmatrix}-1\\begin{vmatrix} 1 & 2 \\\\ 4 & 8 \\end{vmatrix}+3\\begin{vmatrix} 1 & 0 \\\\ 4 & 1 \\end{vmatrix}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate the minors and simplify.",
          workingLatex: "2(0-2)-1(8-8)+3(1-0)=-4-0+3=-1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( -1 \\)",
      canonicalAnswer: "-1",
    },
  },
  {
    id: "em02-018",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 18",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the inverse of \\( \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix} \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "inverse", "3x3", "adjugate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the determinant (expand along row 1).",
          workingLatex:
            "1\\begin{vmatrix} -1 & 3 \\\\ 1 & 8 \\end{vmatrix}+2\\begin{vmatrix} 2 & -1 \\\\ 4 & 1 \\end{vmatrix}=(-11)+2(6)=1",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Form the cofactor matrix.",
          workingLatex:
            "\\begin{pmatrix} -11 & -4 & 6 \\\\ 2 & 0 & -1 \\\\ 2 & 1 & -1 \\end{pmatrix}",
          explanation: "\\( C_{ij}=(-1)^{i+j}M_{ij} \\).",
        },
        {
          stepNumber: 3,
          description: "Transpose to get the adjugate; divide by \\( \\det=1 \\).",
          workingLatex:
            "A^{-1}=\\begin{pmatrix} -11 & 2 & 2 \\\\ -4 & 0 & 1 \\\\ 6 & -1 & -1 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} -11 & 2 & 2 \\\\ -4 & 0 & 1 \\\\ 6 & -1 & -1 \\end{pmatrix} \\)",
      canonicalAnswer: "[[-11,2,2],[-4,0,1],[6,-1,-1]]",
    },
  },
  {
    id: "em02-019",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 19",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A is a \\( 3\\times 3 \\) matrix with \\( \\det(A)=5 \\). Find \\( \\det(2A) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "determinant", "properties"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\det(kA)=k^{n}\\det(A) \\) for an \\( n\\times n \\) matrix.",
          workingLatex: "\\det(2A)=2^{3}\\det(A)",
          explanation: "Scaling a matrix scales each of its \\( n \\) rows by \\( k \\).",
        },
        {
          stepNumber: 2,
          description: "Substitute.",
          workingLatex: "8\\cdot 5=40",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 40 \\)",
      canonicalAnswer: "40",
    },
  },
  {
    id: "em02-020",
    topicRef: "em02",
    topicTitle: "Matrices and Determinants 20",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Find the values of \\( \\lambda \\) for which \\( \\begin{pmatrix} 2-\\lambda & 1 \\\\ 1 & 2-\\lambda \\end{pmatrix} \\) is singular.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["matrices", "singular", "characteristic equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the determinant to zero.",
          workingLatex: "(2-\\lambda)^{2}-1=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Solve.",
          workingLatex: "(2-\\lambda)^{2}=1\\ \\Rightarrow\\ 2-\\lambda=\\pm 1\\ \\Rightarrow\\ \\lambda=1\\ \\text{or}\\ \\lambda=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=1 \\) or \\( \\lambda=3 \\)",
      canonicalAnswer: "{1, 3}",
    },
  },
];
