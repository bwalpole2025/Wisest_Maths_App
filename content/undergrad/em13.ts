import { Question } from "@/lib/types";

/**
 * Topic: Eigenvalues and Eigenvectors
 * Ref:   em13  (Undergraduate Engineering Mathematics)  prereq: em02
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Characteristic equation, eigenvalues of 2×2 and 3×3 (diagonal/triangular/
 * symmetric) matrices, eigenvectors, complex eigenvalues, repeated eigenvalues,
 * and the trace/determinant relations.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em13-001",
    topicRef: "em13",
    topicTitle: "Eigenvalues 01",
    difficulty: "Foundation",
    answerType: "set",
    questionText: "Find the eigenvalues of \\( \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["eigenvalues", "diagonal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "For a diagonal matrix the eigenvalues are the diagonal entries.",
          workingLatex: "\\lambda=2,\\ 3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=2,\\ 3 \\)",
      canonicalAnswer: "{2, 3}",
    },
  },
  {
    id: "em13-002",
    topicRef: "em13",
    topicTitle: "Eigenvalues 02",
    difficulty: "Foundation",
    answerType: "set",
    questionText: "Find the eigenvalues of \\( \\begin{pmatrix} 5 & 0 \\\\ 0 & -1 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["eigenvalues", "diagonal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Diagonal entries are the eigenvalues.",
          workingLatex: "\\lambda=5,\\ -1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=5,\\ -1 \\)",
      canonicalAnswer: "{5, -1}",
    },
  },
  {
    id: "em13-003",
    topicRef: "em13",
    topicTitle: "Eigenvalues 03",
    difficulty: "Foundation",
    answerType: "set",
    questionText: "Find the eigenvalues of \\( \\begin{pmatrix} 4 & 7 \\\\ 0 & 2 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["eigenvalues", "triangular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "For a triangular matrix the eigenvalues are the diagonal entries.",
          workingLatex: "\\lambda=4,\\ 2",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=4,\\ 2 \\)",
      canonicalAnswer: "{4, 2}",
    },
  },
  {
    id: "em13-004",
    topicRef: "em13",
    topicTitle: "Eigenvalues 04",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The eigenvalues of a matrix sum to its trace. Find the sum of the eigenvalues of \\( \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["eigenvalues", "trace"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add the diagonal entries.",
          workingLatex: "3+4=7",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 7 \\)",
      canonicalAnswer: "7",
    },
  },
  {
    id: "em13-005",
    topicRef: "em13",
    topicTitle: "Eigenvalues 05",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The eigenvalues of a matrix multiply to its determinant. Find the product of the eigenvalues of \\( \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["eigenvalues", "determinant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the determinant.",
          workingLatex: "3\\cdot4-1\\cdot2=10",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 10 \\)",
      canonicalAnswer: "10",
    },
  },
  {
    id: "em13-006",
    topicRef: "em13",
    topicTitle: "Eigenvalues 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Write the characteristic equation of \\( \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["eigenvalues", "characteristic equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set \\( \\det(A-\\lambda I)=0 \\).",
          workingLatex: "(1-\\lambda)(4-\\lambda)-6=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Expand.",
          workingLatex: "\\lambda^{2}-5\\lambda-2=0",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda^{2}-5\\lambda-2=0 \\)",
      canonicalAnswer: "lambda^2-5*lambda-2=0",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em13-007",
    topicRef: "em13",
    topicTitle: "Eigenvalues 07",
    difficulty: "Standard",
    answerType: "set",
    questionText: "Find the eigenvalues of \\( \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Characteristic equation.",
          workingLatex: "(2-\\lambda)^{2}-1=0\\ \\Rightarrow\\ \\lambda^{2}-4\\lambda+3=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Factorise.",
          workingLatex: "(\\lambda-1)(\\lambda-3)=0\\ \\Rightarrow\\ \\lambda=1,\\ 3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=1,\\ 3 \\)",
      canonicalAnswer: "{1, 3}",
    },
  },
  {
    id: "em13-008",
    topicRef: "em13",
    topicTitle: "Eigenvalues 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find an eigenvector of \\( \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix} \\) corresponding to \\( \\lambda=3 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvectors"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Solve \\( (A-3I)\\mathbf{v}=\\mathbf{0} \\).",
          workingLatex: "\\begin{pmatrix} -1 & 1 \\\\ 1 & -1 \\end{pmatrix}\\mathbf{v}=\\mathbf{0}\\ \\Rightarrow\\ -v_1+v_2=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Read off a solution.",
          workingLatex: "\\mathbf{v}=\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\)",
      canonicalAnswer: "(1,1)",
    },
  },
  {
    id: "em13-009",
    topicRef: "em13",
    topicTitle: "Eigenvalues 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find an eigenvector of \\( \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix} \\) corresponding to \\( \\lambda=1 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvectors"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Solve \\( (A-I)\\mathbf{v}=\\mathbf{0} \\).",
          workingLatex: "\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}\\mathbf{v}=\\mathbf{0}\\ \\Rightarrow\\ v_1+v_2=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Read off a solution.",
          workingLatex: "\\mathbf{v}=\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\)",
      canonicalAnswer: "(1,-1)",
    },
  },
  {
    id: "em13-010",
    topicRef: "em13",
    topicTitle: "Eigenvalues 10",
    difficulty: "Standard",
    answerType: "set",
    questionText: "Find the eigenvalues of \\( \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Characteristic equation (trace 7, determinant 10).",
          workingLatex: "\\lambda^{2}-7\\lambda+10=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Factorise.",
          workingLatex: "(\\lambda-2)(\\lambda-5)=0\\ \\Rightarrow\\ \\lambda=2,\\ 5",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=2,\\ 5 \\)",
      canonicalAnswer: "{2, 5}",
    },
  },
  {
    id: "em13-011",
    topicRef: "em13",
    topicTitle: "Eigenvalues 11",
    difficulty: "Standard",
    answerType: "set",
    questionText: "Find the eigenvalues of \\( \\begin{pmatrix} 0 & 1 \\\\ -2 & -3 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Characteristic equation.",
          workingLatex: "\\lambda^{2}+3\\lambda+2=0",
          explanation: "Trace \\( -3 \\), determinant \\( 2 \\).",
        },
        {
          stepNumber: 2,
          description: "Factorise.",
          workingLatex: "(\\lambda+1)(\\lambda+2)=0\\ \\Rightarrow\\ \\lambda=-1,\\ -2",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=-1,\\ -2 \\)",
      canonicalAnswer: "{-1, -2}",
    },
  },
  {
    id: "em13-012",
    topicRef: "em13",
    topicTitle: "Eigenvalues 12",
    difficulty: "Standard",
    answerType: "set",
    questionText: "Find the eigenvalues of \\( \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Characteristic equation.",
          workingLatex: "(1-\\lambda)^{2}-4=0\\ \\Rightarrow\\ \\lambda^{2}-2\\lambda-3=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Factorise.",
          workingLatex: "(\\lambda-3)(\\lambda+1)=0\\ \\Rightarrow\\ \\lambda=3,\\ -1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=3,\\ -1 \\)",
      canonicalAnswer: "{3, -1}",
    },
  },
  {
    id: "em13-013",
    topicRef: "em13",
    topicTitle: "Eigenvalues 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find an eigenvector of \\( \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix} \\) corresponding to \\( \\lambda=2 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvectors"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Solve \\( (A-2I)\\mathbf{v}=\\mathbf{0} \\).",
          workingLatex: "\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}\\mathbf{v}=\\mathbf{0}\\ \\Rightarrow\\ 2v_1+v_2=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Choose \\( v_1=1 \\).",
          workingLatex: "\\mathbf{v}=\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} \\)",
      canonicalAnswer: "(1,-2)",
    },
  },
  {
    id: "em13-014",
    topicRef: "em13",
    topicTitle: "Eigenvalues 14",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Find the eigenvalues of \\( \\begin{pmatrix} 3 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 5 \\end{pmatrix} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["eigenvalues", "diagonal", "3x3"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Diagonal entries are the eigenvalues.",
          workingLatex: "\\lambda=3,\\ 2,\\ 5",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=2,\\ 3,\\ 5 \\)",
      canonicalAnswer: "{2, 3, 5}",
    },
  },
  {
    id: "em13-015",
    topicRef: "em13",
    topicTitle: "Eigenvalues 15",
    difficulty: "Standard",
    answerType: "set",
    questionText: "Find the eigenvalues of \\( \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues", "complex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Characteristic equation.",
          workingLatex: "\\lambda^{2}+1=0",
          explanation: "Trace 0, determinant 1.",
        },
        {
          stepNumber: 2,
          description: "Solve.",
          workingLatex: "\\lambda=\\pm i",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=\\pm i \\)",
      canonicalAnswer: "{i, -i}",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em13-016",
    topicRef: "em13",
    topicTitle: "Eigenvalues 16",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Find the eigenvalues of \\( \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & 1 \\end{pmatrix} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues", "triangular", "3x3"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Upper-triangular: eigenvalues are the diagonal entries.",
          workingLatex: "\\lambda=2,\\ 3,\\ 1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=1,\\ 2,\\ 3 \\)",
      canonicalAnswer: "{1, 2, 3}",
    },
  },
  {
    id: "em13-017",
    topicRef: "em13",
    topicTitle: "Eigenvalues 17",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Find the eigenvalues of \\( \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 1 \\\\ 0 & 1 & 3 \\end{pmatrix} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues", "symmetric", "3x3"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The first row/column is decoupled, giving \\( \\lambda=2 \\).",
          workingLatex: "\\lambda_1=2",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "The lower \\( 2\\times2 \\) block \\( \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix} \\) has \\( \\lambda^{2}-6\\lambda+8=0 \\).",
          workingLatex: "(\\lambda-2)(\\lambda-4)=0\\ \\Rightarrow\\ \\lambda=2,\\ 4",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Collect all eigenvalues.",
          workingLatex: "\\lambda=2,\\ 2,\\ 4",
          explanation: "\\( \\lambda=2 \\) has multiplicity 2.",
        },
      ],
      finalAnswer: "\\( \\lambda=2,\\ 2,\\ 4 \\)",
      canonicalAnswer: "{2, 2, 4}",
    },
  },
  {
    id: "em13-018",
    topicRef: "em13",
    topicTitle: "Eigenvalues 18",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the eigenvalues and corresponding eigenvectors of \\( \\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix} \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues", "eigenvectors"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Characteristic equation (trace 7, determinant 6).",
          workingLatex: "\\lambda^{2}-7\\lambda+6=0\\ \\Rightarrow\\ \\lambda=1,\\ 6",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "For \\( \\lambda=6 \\): \\( (A-6I)\\mathbf{v}=0 \\) gives \\( -v_1+4v_2=0 \\).",
          workingLatex: "\\mathbf{v}=\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "For \\( \\lambda=1 \\): \\( (A-I)\\mathbf{v}=0 \\) gives \\( v_1+v_2=0 \\).",
          workingLatex: "\\mathbf{v}=\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=6,\\ \\mathbf{v}=\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix};\\quad \\lambda=1,\\ \\mathbf{v}=\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\)",
      canonicalAnswer: "lambda=6 v=(4,1); lambda=1 v=(1,-1)",
    },
  },
  {
    id: "em13-019",
    topicRef: "em13",
    topicTitle: "Eigenvalues 19",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Find the eigenvalues of \\( \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues", "block", "3x3"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The \\( 2\\times2 \\) block \\( \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix} \\) gives \\( \\lambda=1,3 \\).",
          workingLatex: "\\lambda^{2}-4\\lambda+3=0\\ \\Rightarrow\\ \\lambda=1,\\ 3",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "The decoupled entry gives \\( \\lambda=3 \\).",
          workingLatex: "\\lambda=1,\\ 3,\\ 3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=1,\\ 3,\\ 3 \\)",
      canonicalAnswer: "{1, 3, 3}",
    },
  },
  {
    id: "em13-020",
    topicRef: "em13",
    topicTitle: "Eigenvalues 20",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A \\( 2\\times2 \\) matrix has trace 6 and determinant 9. Find its eigenvalues.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["eigenvalues", "trace", "determinant", "repeated"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Eigenvalues satisfy \\( \\lambda^{2}-(\\text{trace})\\lambda+\\det=0 \\).",
          workingLatex: "\\lambda^{2}-6\\lambda+9=0",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Factorise.",
          workingLatex: "(\\lambda-3)^{2}=0\\ \\Rightarrow\\ \\lambda=3\\ \\text{(repeated)}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\lambda=3 \\) (repeated)",
      canonicalAnswer: "{3, 3}",
    },
  },
];
