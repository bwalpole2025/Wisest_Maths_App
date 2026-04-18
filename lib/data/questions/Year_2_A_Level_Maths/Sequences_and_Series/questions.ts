import { Question } from "@/lib/types";

/**
 * Chapter 3 — Sequences and series (Year 2)
 * 3.1 Arithmetic sequences, 3.2 Arithmetic series, 3.3 Geometric sequences,
 * 3.4 Geometric series, 3.5 Sum to infinity, 3.6 Sigma notation, 3.7 Recurrence relations.
 */
export const questions: Question[] = [
  {
    id: "y2ss1-001",
    topicRef: "y2ss1",
    topicTitle: "Arithmetic Sequences",
    difficulty: "Foundation",
    questionText: "Find the nth term of the arithmetic sequence: \\( 6, 20, 34, 48, 62, \\ldots \\)",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["arithmetic sequence", "nth term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify first term and common difference.", workingLatex: "a = 6,\\; d = 14", explanation: "Each term increases by 14." },
        { stepNumber: 2, description: "Apply \\( u_n = a + (n-1)d \\).", workingLatex: "u_n = 6 + 14(n - 1) = 14n - 8", explanation: "" },
      ],
      finalAnswer: "\\( u_n = 14n - 8 \\)",
    },
  },
  {
    id: "y2ss2-001",
    topicRef: "y2ss2",
    topicTitle: "Arithmetic Series",
    difficulty: "Standard",
    questionText: "Find the least number of terms required for the sum of the arithmetic series \\( 4 + 9 + 14 + 19 + \\ldots \\) to exceed 2000.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["arithmetic series", "sum"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\( a = 4,\\; d = 5 \\).", workingLatex: "S_n = \\tfrac{n}{2}\\left[2a + (n-1)d\\right] = \\tfrac{n}{2}(5n + 3)", explanation: "Substitute \\( a \\) and \\( d \\)." },
        { stepNumber: 2, description: "Set up the inequality \\( S_n > 2000 \\).", workingLatex: "\\tfrac{n}{2}(5n + 3) > 2000 \\;\\Rightarrow\\; 5n^2 + 3n - 4000 > 0", explanation: "" },
        { stepNumber: 3, description: "Solve the quadratic in \\( n \\).", workingLatex: "n = \\dfrac{-3 + \\sqrt{9 + 80000}}{10} \\approx 28.0", explanation: "Take the positive root." },
        { stepNumber: 4, description: "Since \\( n \\) must be an integer, round up.", workingLatex: "n = 29,\\; S_{29} = 2117 > 2000", explanation: "Check \\( n = 28 \\) gives 1988 which is under." },
      ],
      finalAnswer: "\\( n = 29 \\)",
    },
  },
  {
    id: "y2ss3-001",
    topicRef: "y2ss3",
    topicTitle: "Geometric Sequences",
    difficulty: "Foundation",
    questionText: "The first three terms of a geometric sequence are \\( 3,\\; 6,\\; 12 \\). Find the 10th term.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["geometric sequence", "nth term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\( a \\) and \\( r \\).", workingLatex: "a = 3,\\; r = 2", explanation: "Divide consecutive terms." },
        { stepNumber: 2, description: "Apply \\( u_n = ar^{n-1} \\).", workingLatex: "u_{10} = 3 \\cdot 2^{9} = 3 \\cdot 512 = 1536", explanation: "" },
      ],
      finalAnswer: "\\( u_{10} = 1536 \\)",
    },
  },
  {
    id: "y2ss4-001",
    topicRef: "y2ss4",
    topicTitle: "Geometric Series",
    difficulty: "Standard",
    questionText: "Evaluate the sum of the first 10 terms of \\( 2 + 6 + 18 + 54 + \\ldots \\)",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["geometric series", "sum"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\( a \\) and \\( r \\).", workingLatex: "a = 2,\\; r = 3", explanation: "" },
        { stepNumber: 2, description: "Apply \\( S_n = \\dfrac{a(r^n - 1)}{r - 1} \\) with \\( n = 10 \\).", workingLatex: "S_{10} = \\dfrac{2(3^{10} - 1)}{2} = 3^{10} - 1 = 59\\,048", explanation: "" },
      ],
      finalAnswer: "\\( S_{10} = 59\\,048 \\)",
    },
  },
  {
    id: "y2ss5-001",
    topicRef: "y2ss5",
    topicTitle: "Sum to Infinity",
    difficulty: "Standard",
    questionText: "A geometric series has first term 10 and sum to infinity 30. Find the common ratio \\( r \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["geometric", "sum to infinity"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use \\( S_\\infty = \\dfrac{a}{1 - r} \\) with \\( a = 10,\\; S_\\infty = 30 \\).", workingLatex: "30 = \\dfrac{10}{1 - r}", explanation: "" },
        { stepNumber: 2, description: "Solve for \\( r \\).", workingLatex: "1 - r = \\tfrac{1}{3} \\;\\Rightarrow\\; r = \\tfrac{2}{3}", explanation: "Check \\( |r| < 1 \\) ✓." },
      ],
      finalAnswer: "\\( r = \\tfrac{2}{3} \\)",
      commonMistakes: ["Forgetting to check \\( |r| < 1 \\) is required for the sum to infinity to exist."],
    },
  },
  {
    id: "y2ss6-001",
    topicRef: "y2ss6",
    topicTitle: "Sigma Notation",
    difficulty: "Standard",
    questionText: "Evaluate \\( \\displaystyle\\sum_{r=1}^{20}(4r + 1) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sigma", "arithmetic"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Split the sum using linearity.", workingLatex: "\\sum_{r=1}^{20}(4r + 1) = 4\\sum_{r=1}^{20} r + \\sum_{r=1}^{20} 1", explanation: "" },
        { stepNumber: 2, description: "Apply standard results \\( \\sum r = \\tfrac{n(n+1)}{2} \\) and \\( \\sum 1 = n \\).", workingLatex: "= 4 \\cdot \\tfrac{20 \\cdot 21}{2} + 20 = 840 + 20 = 860", explanation: "" },
      ],
      finalAnswer: "\\( 860 \\)",
    },
  },
  {
    id: "y2ss7-001",
    topicRef: "y2ss7",
    topicTitle: "Recurrence Relations",
    difficulty: "Foundation",
    questionText: "A sequence is defined by \\( u_{n+1} = 3u_n - 2 \\) with \\( u_1 = 4 \\). Find \\( u_4 \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["recurrence", "sequence"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute \\( u_2 \\).", workingLatex: "u_2 = 3(4) - 2 = 10", explanation: "" },
        { stepNumber: 2, description: "Compute \\( u_3 \\).", workingLatex: "u_3 = 3(10) - 2 = 28", explanation: "" },
        { stepNumber: 3, description: "Compute \\( u_4 \\).", workingLatex: "u_4 = 3(28) - 2 = 82", explanation: "" },
      ],
      finalAnswer: "\\( u_4 = 82 \\)",
    },
  },
];
