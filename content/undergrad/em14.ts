import { Question } from "@/lib/types";

/**
 * Topic: Vector Calculus
 * Ref:   em14  (Undergraduate Engineering Mathematics)  prereq: em03, em06
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Gradient, divergence, curl, the Laplacian, directional derivatives,
 * conservative fields and potentials, and line integrals of gradient fields.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em14-001",
    topicRef: "em14",
    topicTitle: "Vector Calculus 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\nabla\\phi \\) for \\( \\phi=x^{2}+y^{2}+z^{2} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take the partial derivatives.",
          workingLatex: "\\nabla\\phi=(2x,\\,2y,\\,2z)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2x\\,\\mathbf{i}+2y\\,\\mathbf{j}+2z\\,\\mathbf{k} \\)",
      canonicalAnswer: "(2*x,2*y,2*z)",
    },
  },
  {
    id: "em14-002",
    topicRef: "em14",
    topicTitle: "Vector Calculus 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\nabla\\phi \\) for \\( \\phi=xyz \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate with respect to each variable.",
          workingLatex: "\\nabla\\phi=(yz,\\,xz,\\,xy)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( yz\\,\\mathbf{i}+xz\\,\\mathbf{j}+xy\\,\\mathbf{k} \\)",
      canonicalAnswer: "(y*z,x*z,x*y)",
    },
  },
  {
    id: "em14-003",
    topicRef: "em14",
    topicTitle: "Vector Calculus 03",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Find the divergence of \\( \\mathbf{F}=x\\,\\mathbf{i}+y\\,\\mathbf{j}+z\\,\\mathbf{k} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "divergence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add the matching partial derivatives.",
          workingLatex: "\\nabla\\cdot\\mathbf{F}=1+1+1=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3 \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "em14-004",
    topicRef: "em14",
    topicTitle: "Vector Calculus 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the divergence of \\( \\mathbf{F}=x^{2}\\,\\mathbf{i}+y^{2}\\,\\mathbf{j}+z^{2}\\,\\mathbf{k} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "divergence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Sum the partials.",
          workingLatex: "\\nabla\\cdot\\mathbf{F}=2x+2y+2z",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2x+2y+2z \\)",
      canonicalAnswer: "2*x+2*y+2*z",
    },
  },
  {
    id: "em14-005",
    topicRef: "em14",
    topicTitle: "Vector Calculus 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the curl of \\( \\mathbf{F}=x\\,\\mathbf{i}+y\\,\\mathbf{j}+z\\,\\mathbf{k} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "curl"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Each component of the curl involves cross-partials that vanish here.",
          workingLatex: "\\nabla\\times\\mathbf{F}=(0,\\,0,\\,0)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\mathbf{0} \\)",
      canonicalAnswer: "(0,0,0)",
    },
  },
  {
    id: "em14-006",
    topicRef: "em14",
    topicTitle: "Vector Calculus 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\nabla\\phi \\) for \\( \\phi=3x+4y+5z \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Constant partial derivatives.",
          workingLatex: "\\nabla\\phi=(3,\\,4,\\,5)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3\\,\\mathbf{i}+4\\,\\mathbf{j}+5\\,\\mathbf{k} \\)",
      canonicalAnswer: "(3,4,5)",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em14-007",
    topicRef: "em14",
    topicTitle: "Vector Calculus 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the curl of \\( \\mathbf{F}=y\\,\\mathbf{i}-x\\,\\mathbf{j} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "curl"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "With \\( P=y \\), \\( Q=-x \\), \\( R=0 \\), only the \\( \\mathbf{k} \\) component survives.",
          workingLatex: "\\nabla\\times\\mathbf{F}=\\left(Q_x-P_y\\right)\\mathbf{k}=(-1-1)\\mathbf{k}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "-2\\,\\mathbf{k}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( -2\\,\\mathbf{k} \\)",
      canonicalAnswer: "(0,0,-2)",
    },
  },
  {
    id: "em14-008",
    topicRef: "em14",
    topicTitle: "Vector Calculus 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the divergence of \\( \\mathbf{F}=x^{2}y\\,\\mathbf{i}+y^{2}z\\,\\mathbf{j}+z^{2}x\\,\\mathbf{k} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "divergence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate each component by its own variable.",
          workingLatex: "\\nabla\\cdot\\mathbf{F}=2xy+2yz+2zx",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2xy+2yz+2zx \\)",
      canonicalAnswer: "2*x*y+2*y*z+2*z*x",
    },
  },
  {
    id: "em14-009",
    topicRef: "em14",
    topicTitle: "Vector Calculus 09",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the directional derivative of \\( \\phi=x^{2}+y^{2} \\) at \\( (1,2) \\) in the direction of \\( 3\\mathbf{i}+4\\mathbf{j} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "directional derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Gradient at the point.",
          workingLatex: "\\nabla\\phi=(2x,2y)=(2,4)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Unit direction.",
          workingLatex: "\\hat{\\mathbf{u}}=\\frac{1}{5}(3,4)",
          explanation: "\\( |3\\mathbf{i}+4\\mathbf{j}|=5 \\).",
        },
        {
          stepNumber: 3,
          description: "Dot product.",
          workingLatex: "\\nabla\\phi\\cdot\\hat{\\mathbf{u}}=\\frac{6+16}{5}=\\frac{22}{5}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{22}{5} \\)",
      canonicalAnswer: "22/5",
    },
  },
  {
    id: "em14-010",
    topicRef: "em14",
    topicTitle: "Vector Calculus 10",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Find the Laplacian \\( \\nabla^{2}\\phi \\) of \\( \\phi=x^{2}+y^{2}+z^{2} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "laplacian"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Sum the unmixed second partials.",
          workingLatex: "\\nabla^{2}\\phi=2+2+2=6",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 6 \\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "em14-011",
    topicRef: "em14",
    topicTitle: "Vector Calculus 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that \\( \\mathbf{F}=2x\\,\\mathbf{i}+2y\\,\\mathbf{j} \\) is conservative by computing its (2-D) curl.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "conservative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The 2-D curl is \\( Q_x-P_y \\) with \\( P=2x \\), \\( Q=2y \\).",
          workingLatex: "Q_x-P_y=0-0=0",
          explanation: "A zero curl on a simply-connected domain means conservative.",
        },
      ],
      finalAnswer: "\\( 0 \\) (conservative)",
      canonicalAnswer: "0",
    },
  },
  {
    id: "em14-012",
    topicRef: "em14",
    topicTitle: "Vector Calculus 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find a scalar potential \\( \\phi \\) for \\( \\mathbf{F}=2x\\,\\mathbf{i}+2y\\,\\mathbf{j} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "potential"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Integrate \\( \\phi_x=2x \\).",
          workingLatex: "\\phi=x^{2}+g(y)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Match \\( \\phi_y=2y \\) to find \\( g \\).",
          workingLatex: "g'(y)=2y\\ \\Rightarrow\\ g(y)=y^{2}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\phi=x^{2}+y^{2}+C \\)",
      canonicalAnswer: "x^2+y^2+C",
    },
  },
  {
    id: "em14-013",
    topicRef: "em14",
    topicTitle: "Vector Calculus 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the curl of \\( \\mathbf{F}=yz\\,\\mathbf{i}+xz\\,\\mathbf{j}+xy\\,\\mathbf{k} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "curl"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Each component is a difference of equal cross-partials.",
          workingLatex: "\\nabla\\times\\mathbf{F}=(x-x,\\ y-y,\\ z-z)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "(0,0,0)",
          explanation: "This field is the gradient of \\( xyz \\), so its curl is zero.",
        },
      ],
      finalAnswer: "\\( \\mathbf{0} \\)",
      canonicalAnswer: "(0,0,0)",
    },
  },
  {
    id: "em14-014",
    topicRef: "em14",
    topicTitle: "Vector Calculus 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the divergence of \\( \\mathbf{F}=e^{x}\\,\\mathbf{i}+e^{y}\\,\\mathbf{j}+e^{z}\\,\\mathbf{k} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "divergence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Sum the partials.",
          workingLatex: "\\nabla\\cdot\\mathbf{F}=e^{x}+e^{y}+e^{z}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( e^{x}+e^{y}+e^{z} \\)",
      canonicalAnswer: "e^x+e^y+e^z",
    },
  },
  {
    id: "em14-015",
    topicRef: "em14",
    topicTitle: "Vector Calculus 15",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find \\( |\\nabla\\phi| \\) for \\( \\phi=x^{2}+y^{2} \\) at the point \\( (3,4) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vector calculus", "gradient", "magnitude"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Gradient at the point.",
          workingLatex: "\\nabla\\phi=(2x,2y)=(6,8)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Magnitude.",
          workingLatex: "\\sqrt{6^{2}+8^{2}}=10",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 10 \\)",
      canonicalAnswer: "10",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em14-016",
    topicRef: "em14",
    topicTitle: "Vector Calculus 16",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Evaluate the line integral \\( \\displaystyle\\int_{C}\\mathbf{F}\\cdot d\\mathbf{r} \\) for \\( \\mathbf{F}=y\\,\\mathbf{i}+x\\,\\mathbf{j} \\) along any path from \\( (0,0) \\) to \\( (1,1) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "line integral", "conservative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "\\( \\mathbf{F} \\) is conservative with potential \\( \\phi=xy \\).",
          workingLatex: "\\nabla(xy)=(y,x)=\\mathbf{F}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Use the fundamental theorem for line integrals.",
          workingLatex: "\\phi(1,1)-\\phi(0,0)=1-0=1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1 \\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "em14-017",
    topicRef: "em14",
    topicTitle: "Vector Calculus 17",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Evaluate \\( \\displaystyle\\int_{C}(2x\\,dx+2y\\,dy) \\) from \\( (0,0) \\) to \\( (1,2) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "line integral", "conservative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The integrand is \\( d(x^{2}+y^{2}) \\).",
          workingLatex: "\\phi=x^{2}+y^{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate the potential at the endpoints.",
          workingLatex: "\\phi(1,2)-\\phi(0,0)=(1+4)-0=5",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 5 \\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "em14-018",
    topicRef: "em14",
    topicTitle: "Vector Calculus 18",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Verify that \\( \\nabla\\times(\\nabla\\phi)=\\mathbf{0} \\) for \\( \\phi=x^{2}y \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "curl", "gradient identity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the gradient.",
          workingLatex: "\\nabla\\phi=(2xy,\\ x^{2},\\ 0)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Take the curl; the \\( \\mathbf{k} \\) component is \\( \\partial_x(x^{2})-\\partial_y(2xy) \\).",
          workingLatex: "(0,\\ 0,\\ 2x-2x)=(0,0,0)",
          explanation: "Curl of a gradient is always zero.",
        },
      ],
      finalAnswer: "\\( \\mathbf{0} \\)",
      canonicalAnswer: "(0,0,0)",
    },
  },
  {
    id: "em14-019",
    topicRef: "em14",
    topicTitle: "Vector Calculus 19",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the directional derivative of \\( \\phi=xyz \\) at \\( (1,1,1) \\) in the direction of \\( \\mathbf{i}+\\mathbf{j}+\\mathbf{k} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "directional derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Gradient at the point.",
          workingLatex: "\\nabla\\phi=(yz,xz,xy)=(1,1,1)",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Unit direction.",
          workingLatex: "\\hat{\\mathbf{u}}=\\frac{1}{\\sqrt{3}}(1,1,1)",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Dot product.",
          workingLatex: "\\frac{1+1+1}{\\sqrt{3}}=\\frac{3}{\\sqrt{3}}=\\sqrt{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\sqrt{3} \\)",
      canonicalAnswer: "sqrt(3)",
    },
  },
  {
    id: "em14-020",
    topicRef: "em14",
    topicTitle: "Vector Calculus 20",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Show that \\( \\phi=\\ln(x^{2}+y^{2}) \\) is harmonic by evaluating \\( \\nabla^{2}\\phi \\) (for \\( (x,y)\\ne(0,0) \\)).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["vector calculus", "laplacian", "harmonic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First partials.",
          workingLatex: "\\phi_x=\\frac{2x}{x^{2}+y^{2}},\\qquad \\phi_y=\\frac{2y}{x^{2}+y^{2}}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Second partials (quotient rule).",
          workingLatex: "\\phi_{xx}=\\frac{2(y^{2}-x^{2})}{(x^{2}+y^{2})^{2}},\\qquad \\phi_{yy}=\\frac{2(x^{2}-y^{2})}{(x^{2}+y^{2})^{2}}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Add.",
          workingLatex: "\\nabla^{2}\\phi=\\phi_{xx}+\\phi_{yy}=0",
          explanation: "So \\( \\phi \\) is harmonic.",
        },
      ],
      finalAnswer: "\\( 0 \\)",
      canonicalAnswer: "0",
    },
  },
];
