import { Question } from "@/lib/types";

/**
 * Topic: Sequences and Series
 * Ref:   em07  (Undergraduate Engineering Mathematics)  prereq: em04
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Arithmetic & geometric progressions, sum to infinity, standard sigma results,
 * binomial series, Maclaurin series (eˣ, sin, cos, ln(1+x)), the ratio test /
 * radius of convergence, and a binomial estimate.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em07-001",
    topicRef: "em07",
    topicTitle: "Sequences and Series 01",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "An arithmetic progression has first term \\( a=3 \\) and common difference \\( d=4 \\). Find the 10th term.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "arithmetic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( u_{n}=a+(n-1)d \\).",
          workingLatex: "u_{10}=3+9\\cdot 4=39",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 39 \\)",
      canonicalAnswer: "39",
    },
  },
  {
    id: "em07-002",
    topicRef: "em07",
    topicTitle: "Sequences and Series 02",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Find the sum of the first 10 terms of the arithmetic progression with \\( a=3 \\) and \\( d=4 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "arithmetic", "sum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( S_{n}=\\frac{n}{2}\\left(2a+(n-1)d\\right) \\).",
          workingLatex: "S_{10}=\\frac{10}{2}\\left(6+36\\right)=5\\cdot 42=210",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 210 \\)",
      canonicalAnswer: "210",
    },
  },
  {
    id: "em07-003",
    topicRef: "em07",
    topicTitle: "Sequences and Series 03",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A geometric progression has first term \\( a=2 \\) and common ratio \\( r=3 \\). Find the 5th term.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "geometric"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( u_{n}=ar^{n-1} \\).",
          workingLatex: "u_{5}=2\\cdot 3^{4}=2\\cdot 81=162",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 162 \\)",
      canonicalAnswer: "162",
    },
  },
  {
    id: "em07-004",
    topicRef: "em07",
    topicTitle: "Sequences and Series 04",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Find the sum of the first 5 terms of the geometric progression with \\( a=2 \\) and \\( r=3 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "geometric", "sum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( S_{n}=\\frac{a(r^{n}-1)}{r-1} \\).",
          workingLatex: "S_{5}=\\frac{2(3^{5}-1)}{3-1}=\\frac{2\\cdot 242}{2}=242",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 242 \\)",
      canonicalAnswer: "242",
    },
  },
  {
    id: "em07-005",
    topicRef: "em07",
    topicTitle: "Sequences and Series 05",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Find the sum to infinity of the geometric series with \\( a=8 \\) and \\( r=\\tfrac{1}{2} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "geometric", "sum to infinity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( S_{\\infty}=\\frac{a}{1-r} \\) (valid since \\( |r|<1 \\)).",
          workingLatex: "S_{\\infty}=\\frac{8}{1-\\frac{1}{2}}=16",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 16 \\)",
      canonicalAnswer: "16",
    },
  },
  {
    id: "em07-006",
    topicRef: "em07",
    topicTitle: "Sequences and Series 06",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Evaluate \\( \\displaystyle\\sum_{n=1}^{4} n^{2} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "sigma"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add the terms.",
          workingLatex: "1+4+9+16=30",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 30 \\)",
      canonicalAnswer: "30",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em07-007",
    topicRef: "em07",
    topicTitle: "Sequences and Series 07",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "An arithmetic progression has \\( u_{1}=5 \\) and \\( u_{7}=29 \\). Find the common difference \\( d \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "arithmetic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( u_{7}=u_{1}+6d \\).",
          workingLatex: "29=5+6d",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Solve.",
          workingLatex: "6d=24\\ \\Rightarrow\\ d=4",
          explanation: "",
        },
      ],
      finalAnswer: "\\( d=4 \\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "em07-008",
    topicRef: "em07",
    topicTitle: "Sequences and Series 08",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A geometric progression has \\( a=4 \\) and third term \\( 36 \\). Find the positive common ratio \\( r \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "geometric"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( u_{3}=ar^{2} \\).",
          workingLatex: "4r^{2}=36\\ \\Rightarrow\\ r^{2}=9",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Take the positive root.",
          workingLatex: "r=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( r=3 \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "em07-009",
    topicRef: "em07",
    topicTitle: "Sequences and Series 09",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the sum to infinity of \\( 1+\\tfrac{2}{3}+\\tfrac{4}{9}+\\cdots \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "geometric", "sum to infinity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify \\( a=1 \\), \\( r=\\frac{2}{3} \\).",
          workingLatex: "S_{\\infty}=\\frac{1}{1-\\frac{2}{3}}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "\\frac{1}{\\frac{1}{3}}=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3 \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "em07-010",
    topicRef: "em07",
    topicTitle: "Sequences and Series 10",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Use the standard result \\( \\displaystyle\\sum_{r=1}^{n} r=\\tfrac{n(n+1)}{2} \\) to evaluate \\( \\displaystyle\\sum_{r=1}^{10} r \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "sigma", "standard results"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute \\( n=10 \\).",
          workingLatex: "\\frac{10\\cdot 11}{2}=55",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 55 \\)",
      canonicalAnswer: "55",
    },
  },
  {
    id: "em07-011",
    topicRef: "em07",
    topicTitle: "Sequences and Series 11",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Evaluate \\( \\displaystyle\\sum_{r=1}^{6} r^{2} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "sigma", "standard results"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\sum_{r=1}^{n} r^{2}=\\frac{n(n+1)(2n+1)}{6} \\) with \\( n=6 \\).",
          workingLatex: "\\frac{6\\cdot 7\\cdot 13}{6}=91",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 91 \\)",
      canonicalAnswer: "91",
    },
  },
  {
    id: "em07-012",
    topicRef: "em07",
    topicTitle: "Sequences and Series 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the binomial series for \\( (1+x)^{1/2} \\) up to and including the term in \\( x^{2} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["series", "binomial"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( (1+x)^{n}=1+nx+\\frac{n(n-1)}{2!}x^{2}+\\cdots \\) with \\( n=\\frac{1}{2} \\).",
          workingLatex: "1+\\tfrac{1}{2}x+\\frac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2}x^{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Simplify the coefficients.",
          workingLatex: "1+\\frac{x}{2}-\\frac{x^{2}}{8}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1+\\dfrac{x}{2}-\\dfrac{x^{2}}{8} \\)",
      canonicalAnswer: "1 + x/2 - x^2/8",
    },
  },
  {
    id: "em07-013",
    topicRef: "em07",
    topicTitle: "Sequences and Series 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the Maclaurin series for \\( e^{x} \\) up to and including the term in \\( x^{3} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["series", "maclaurin"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "All derivatives of \\( e^{x} \\) are \\( e^{x} \\), equal to \\( 1 \\) at \\( x=0 \\).",
          workingLatex: "e^{x}=\\sum_{n\\ge 0}\\frac{x^{n}}{n!}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Write the first four terms.",
          workingLatex: "1+x+\\frac{x^{2}}{2}+\\frac{x^{3}}{6}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1+x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6} \\)",
      canonicalAnswer: "1 + x + x^2/2 + x^3/6",
    },
  },
  {
    id: "em07-014",
    topicRef: "em07",
    topicTitle: "Sequences and Series 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the Maclaurin series for \\( \\sin x \\) up to and including the term in \\( x^{5} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["series", "maclaurin", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Only odd powers appear, with alternating signs.",
          workingLatex: "\\sin x=x-\\frac{x^{3}}{3!}+\\frac{x^{5}}{5!}-\\cdots",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate the factorials.",
          workingLatex: "x-\\frac{x^{3}}{6}+\\frac{x^{5}}{120}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( x-\\dfrac{x^{3}}{6}+\\dfrac{x^{5}}{120} \\)",
      canonicalAnswer: "x - x^3/6 + x^5/120",
    },
  },
  {
    id: "em07-015",
    topicRef: "em07",
    topicTitle: "Sequences and Series 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Express the recurring decimal \\( 0.\\overline{4} \\) as a fraction in lowest terms.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["sequences", "geometric", "recurring decimal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write as a geometric series.",
          workingLatex: "0.4+0.04+0.004+\\cdots,\\quad a=0.4,\\ r=0.1",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Sum to infinity.",
          workingLatex: "\\frac{0.4}{1-0.1}=\\frac{0.4}{0.9}=\\frac{4}{9}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{4}{9} \\)",
      canonicalAnswer: "4/9",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em07-016",
    topicRef: "em07",
    topicTitle: "Sequences and Series 16",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the Maclaurin series for \\( \\cos x \\) up to and including the term in \\( x^{4} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["series", "maclaurin", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Only even powers appear, with alternating signs.",
          workingLatex: "\\cos x=1-\\frac{x^{2}}{2!}+\\frac{x^{4}}{4!}-\\cdots",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate the factorials.",
          workingLatex: "1-\\frac{x^{2}}{2}+\\frac{x^{4}}{24}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1-\\dfrac{x^{2}}{2}+\\dfrac{x^{4}}{24} \\)",
      canonicalAnswer: "1 - x^2/2 + x^4/24",
    },
  },
  {
    id: "em07-017",
    topicRef: "em07",
    topicTitle: "Sequences and Series 17",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the Maclaurin series for \\( \\ln(1+x) \\) up to and including the term in \\( x^{3} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["series", "maclaurin", "logarithm"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Integrate \\( \\frac{1}{1+x}=1-x+x^{2}-\\cdots \\) term by term.",
          workingLatex: "\\ln(1+x)=x-\\frac{x^{2}}{2}+\\frac{x^{3}}{3}-\\cdots",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Keep terms up to \\( x^{3} \\).",
          workingLatex: "x-\\frac{x^{2}}{2}+\\frac{x^{3}}{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( x-\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{3} \\)",
      canonicalAnswer: "x - x^2/2 + x^3/3",
    },
  },
  {
    id: "em07-018",
    topicRef: "em07",
    topicTitle: "Sequences and Series 18",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Use the ratio test to find the radius of convergence of \\( \\displaystyle\\sum_{n=1}^{\\infty} \\frac{x^{n}}{n} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["series", "ratio test", "convergence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the ratio of consecutive terms.",
          workingLatex: "\\left|\\frac{a_{n+1}}{a_{n}}\\right|=\\left|\\frac{x^{n+1}}{n+1}\\cdot\\frac{n}{x^{n}}\\right|=|x|\\frac{n}{n+1}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Take the limit as \\( n\\to\\infty \\).",
          workingLatex: "\\lim_{n\\to\\infty}|x|\\frac{n}{n+1}=|x|",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Converges when this limit is less than 1.",
          workingLatex: "|x|<1\\ \\Rightarrow\\ R=1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( R=1 \\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "em07-019",
    topicRef: "em07",
    topicTitle: "Sequences and Series 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find a closed form for \\( \\displaystyle\\sum_{r=1}^{n} (r^{2}+r) \\), fully factorised.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["series", "sigma", "standard results"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split using standard results.",
          workingLatex: "\\frac{n(n+1)(2n+1)}{6}+\\frac{n(n+1)}{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Take out \\( \\frac{n(n+1)}{6} \\).",
          workingLatex: "\\frac{n(n+1)}{6}\\big[(2n+1)+3\\big]=\\frac{n(n+1)(2n+4)}{6}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "\\frac{n(n+1)(n+2)}{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{n(n+1)(n+2)}{3} \\)",
      canonicalAnswer: "n*(n+1)*(n+2)/3",
    },
  },
  {
    id: "em07-020",
    topicRef: "em07",
    topicTitle: "Sequences and Series 20",
    difficulty: "Challenge",
    answerType: "numeric",
    answerMeta: { requiredDp: 3 },
    questionText:
      "Using the binomial expansion of \\( (1+x)^{5} \\), estimate \\( (1.01)^{5} \\) to three decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["series", "binomial", "estimation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand \\( (1+x)^{5} \\).",
          workingLatex: "1+5x+10x^{2}+10x^{3}+\\cdots",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Substitute \\( x=0.01 \\).",
          workingLatex: "1+0.05+10(0.0001)+10(0.000001)=1+0.05+0.001+0.00001",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Add and round.",
          workingLatex: "1.05101\\approx 1.051",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 1.051 \\)",
      canonicalAnswer: "1.051",
    },
  },
];
