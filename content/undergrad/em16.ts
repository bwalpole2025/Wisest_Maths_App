import { Question } from "@/lib/types";

/**
 * Topic: Probability and Statistics
 * Ref:   em16  (Undergraduate Engineering Mathematics)
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Basic & conditional probability, mean/variance/standard deviation,
 * combinations, expectation, the binomial, Poisson and normal distributions,
 * and Bayes' theorem.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em16-001",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 01",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "A fair die is rolled. Find the probability of scoring a 4.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["probability"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "One favourable outcome out of six.",
          workingLatex: "P(4)=\\frac{1}{6}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{6} \\)",
      canonicalAnswer: "1/6",
    },
  },
  {
    id: "em16-002",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 02",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Two fair coins are tossed. Find the probability of two heads.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["probability"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Independent events multiply.",
          workingLatex: "\\frac{1}{2}\\cdot\\frac{1}{2}=\\frac{1}{4}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{4} \\)",
      canonicalAnswer: "1/4",
    },
  },
  {
    id: "em16-003",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 03",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Find the mean of the data set \\( 2,\\,4,\\,6,\\,8,\\,10 \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["statistics", "mean"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Sum and divide by the count.",
          workingLatex: "\\frac{2+4+6+8+10}{5}=\\frac{30}{5}=6",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 6 \\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "em16-004",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 04",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A bag has 3 red and 7 blue balls. Find the probability of drawing a red ball.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["probability"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Favourable over total.",
          workingLatex: "\\frac{3}{10}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{3}{10} \\)",
      canonicalAnswer: "3/10",
    },
  },
  {
    id: "em16-005",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 05",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Given \\( P(A)=0.3 \\), find \\( P(A') \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["probability", "complement"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( P(A')=1-P(A) \\).",
          workingLatex: "1-0.3=0.7",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.7 \\)",
      canonicalAnswer: "0.7",
    },
  },
  {
    id: "em16-006",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 06",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "A fair die is rolled. Find the probability of an even score.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["probability"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Three even faces out of six.",
          workingLatex: "\\frac{3}{6}=\\frac{1}{2}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{2} \\)",
      canonicalAnswer: "1/2",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em16-007",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 07",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Evaluate \\( \\binom{5}{2} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["combinatorics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\binom{n}{r}=\\frac{n!}{r!(n-r)!} \\).",
          workingLatex: "\\frac{5!}{2!\\,3!}=\\frac{120}{2\\cdot 6}=10",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 10 \\)",
      canonicalAnswer: "10",
    },
  },
  {
    id: "em16-008",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 08",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "For \\( X\\sim B(4,0.5) \\), find \\( P(X=2) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["binomial"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( \\binom{4}{2}p^{2}(1-p)^{2} \\).",
          workingLatex: "\\binom{4}{2}(0.5)^{2}(0.5)^{2}=6\\cdot 0.0625",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "0.375",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.375 \\)",
      canonicalAnswer: "0.375",
    },
  },
  {
    id: "em16-009",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 09",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "For \\( X\\sim B(10,0.3) \\), find the mean \\( E(X) \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["binomial", "mean"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Mean of a binomial is \\( np \\).",
          workingLatex: "10\\cdot 0.3=3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 3 \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "em16-010",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 10",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "For \\( X\\sim B(10,0.3) \\), find the variance.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["binomial", "variance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Variance of a binomial is \\( np(1-p) \\).",
          workingLatex: "10\\cdot 0.3\\cdot 0.7=2.1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2.1 \\)",
      canonicalAnswer: "2.1",
    },
  },
  {
    id: "em16-011",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 11",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Given \\( P(A\\cap B)=0.2 \\) and \\( P(B)=0.5 \\), find \\( P(A\\mid B) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["conditional probability"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)} \\).",
          workingLatex: "\\frac{0.2}{0.5}=0.4",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.4 \\)",
      canonicalAnswer: "0.4",
    },
  },
  {
    id: "em16-012",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 12",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Find the variance of the data set \\( 2,\\,4,\\,6,\\,8,\\,10 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["statistics", "variance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The mean is 6; square the deviations.",
          workingLatex: "(-4)^{2}+(-2)^{2}+0^{2}+2^{2}+4^{2}=40",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Divide by the count.",
          workingLatex: "\\frac{40}{5}=8",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 8 \\)",
      canonicalAnswer: "8",
    },
  },
  {
    id: "em16-013",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 13",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the standard deviation of the data set \\( 2,\\,4,\\,6,\\,8,\\,10 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["statistics", "standard deviation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take the square root of the variance \\( 8 \\).",
          workingLatex: "\\sqrt{8}=2\\sqrt{2}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2\\sqrt{2} \\)",
      canonicalAnswer: "2*sqrt(2)",
    },
  },
  {
    id: "em16-014",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 14",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A random variable \\( X \\) takes values \\( 1,2,3 \\) with probabilities \\( 0.2,0.3,0.5 \\). Find \\( E(X) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expectation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( E(X)=\\sum x\\,P(x) \\).",
          workingLatex: "1(0.2)+2(0.3)+3(0.5)=0.2+0.6+1.5",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Add.",
          workingLatex: "2.3",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2.3 \\)",
      canonicalAnswer: "2.3",
    },
  },
  {
    id: "em16-015",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 15",
    difficulty: "Standard",
    answerType: "numeric",
    answerMeta: { requiredDp: 4 },
    questionText: "For \\( X\\sim \\mathrm{Poisson}(2) \\), find \\( P(X=0) \\) to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( P(X=0)=e^{-\\lambda} \\).",
          workingLatex: "e^{-2}=0.1353",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.1353 \\)",
      canonicalAnswer: "0.1353",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em16-016",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 16",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "For \\( X\\sim B(3,0.2) \\), find \\( P(X\\ge 1) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["binomial"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the complement \\( 1-P(X=0) \\).",
          workingLatex: "1-(0.8)^{3}=1-0.512",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "0.488",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.488 \\)",
      canonicalAnswer: "0.488",
    },
  },
  {
    id: "em16-017",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 17",
    difficulty: "Challenge",
    answerType: "numeric",
    answerMeta: { requiredDp: 4 },
    questionText:
      "For the standard normal \\( Z\\sim N(0,1) \\), find \\( P(Z<1) \\) using tables, to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["normal distribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read \\( \\Phi(1) \\) from the standard normal table.",
          workingLatex: "P(Z<1)=\\Phi(1)=0.8413",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.8413 \\)",
      canonicalAnswer: "0.8413",
    },
  },
  {
    id: "em16-018",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 18",
    difficulty: "Challenge",
    answerType: "numeric",
    answerMeta: { requiredDp: 4 },
    questionText:
      "A test is 90% sensitive (\\( P(+\\mid D)=0.9 \\)) with a 5% false-positive rate (\\( P(+\\mid D')=0.05 \\)). If \\( P(D)=0.01 \\), find \\( P(D\\mid +) \\) to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["bayes", "conditional probability"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Total probability of a positive test.",
          workingLatex: "P(+)=0.9(0.01)+0.05(0.99)=0.009+0.0495=0.0585",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Apply Bayes' theorem.",
          workingLatex: "P(D\\mid +)=\\frac{0.009}{0.0585}=0.1538",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.1538 \\)",
      canonicalAnswer: "0.1538",
    },
  },
  {
    id: "em16-019",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 19",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A random variable \\( X \\) takes values \\( 0,1,2 \\) with probabilities \\( 0.5,0.3,0.2 \\). Find \\( \\mathrm{Var}(X) \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expectation", "variance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Mean.",
          workingLatex: "E(X)=0(0.5)+1(0.3)+2(0.2)=0.7",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Second moment.",
          workingLatex: "E(X^{2})=0+1(0.3)+4(0.2)=1.1",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Use \\( \\mathrm{Var}(X)=E(X^{2})-[E(X)]^{2} \\).",
          workingLatex: "1.1-0.7^{2}=1.1-0.49=0.61",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.61 \\)",
      canonicalAnswer: "0.61",
    },
  },
  {
    id: "em16-020",
    topicRef: "em16",
    topicTitle: "Probability and Statistics 20",
    difficulty: "Challenge",
    answerType: "numeric",
    answerMeta: { requiredDp: 4 },
    questionText: "For \\( X\\sim \\mathrm{Poisson}(3) \\), find \\( P(X\\le 1) \\) to 4 decimal places.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Sum \\( P(X=0)+P(X=1) \\).",
          workingLatex: "e^{-3}+3e^{-3}=4e^{-3}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "4(0.049787)=0.1991",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0.1991 \\)",
      canonicalAnswer: "0.1991",
    },
  },
];
