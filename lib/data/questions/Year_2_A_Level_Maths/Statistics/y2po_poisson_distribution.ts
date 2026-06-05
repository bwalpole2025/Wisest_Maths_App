import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § The Poisson Distribution
 * Ref: y2po
 * 71 questions. No diagrams.
 */
export const questions: Question[] = [
  {
    id: "y2po-001",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 01",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(2.5) \\). Find \\( P(X = 0) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "P(X=0)", "exponential"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the special case of the Poisson formula for r = 0", workingLatex: "P(X=0) = e^{-\\lambda}", explanation: "When \\( r = 0 \\), the formula \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\) simplifies to \\( e^{-\\lambda} \\) because \\( \\lambda^0 = 1 \\) and \\( 0! = 1 \\)." },
        { stepNumber: 2, description: "Substitute \\( \\lambda = 2.5 \\) and evaluate", workingLatex: "P(X=0) = e^{-2.5} = 0.0821", explanation: "Evaluating \\( e^{-2.5} \\) gives 0.0821 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=0) = 0.0821 \\)",
      canonicalAnswer: "0.0821",
    },
  },
  {
    id: "y2po-002",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 02",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(4) \\). Find \\( P(X = 3) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "P(X=r)", "formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the Poisson probability formula with \\( \\lambda = 4 \\) and \\( r = 3 \\)", workingLatex: "P(X=3) = \\dfrac{e^{-4}\\,4^{3}}{3!}", explanation: "Substitute \\( \\lambda = 4 \\) and \\( r = 3 \\) into \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\)." },
        { stepNumber: 2, description: "Evaluate the powers and factorial, then compute", workingLatex: "P(X=3) = \\dfrac{e^{-4}\\times 64}{6} = 0.1954", explanation: "With \\( 4^3 = 64 \\) and \\( 3! = 6 \\), the result is 0.1954 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=3) = 0.1954 \\)",
      canonicalAnswer: "0.1954",
    },
  },
  {
    id: "y2po-003",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 03",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(1.8) \\). Find \\( P(X = 2) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "P(X=r)", "formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the Poisson probability formula with \\( \\lambda = 1.8 \\) and \\( r = 2 \\)", workingLatex: "P(X=2) = \\dfrac{e^{-1.8}\\,1.8^{2}}{2!}", explanation: "Substitute \\( \\lambda = 1.8 \\) and \\( r = 2 \\) into \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\)." },
        { stepNumber: 2, description: "Evaluate the square and factorial, then compute", workingLatex: "P(X=2) = \\dfrac{e^{-1.8}\\times 3.24}{2} = 0.2678", explanation: "With \\( 1.8^2 = 3.24 \\) and \\( 2! = 2 \\), the result is 0.2678 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=2) = 0.2678 \\)",
      canonicalAnswer: "0.2678",
    },
  },
  {
    id: "y2po-004",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 04",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(3.2) \\). Find \\( P(X = 0) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "P(X=0)", "exponential"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the special case of the Poisson formula for r = 0", workingLatex: "P(X=0) = e^{-\\lambda}", explanation: "When \\( r = 0 \\), \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\) reduces to \\( e^{-\\lambda} \\)." },
        { stepNumber: 2, description: "Substitute \\( \\lambda = 3.2 \\) and evaluate", workingLatex: "P(X=0) = e^{-3.2} = 0.0408", explanation: "Evaluating \\( e^{-3.2} \\) gives 0.0408 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=0) = 0.0408 \\)",
      canonicalAnswer: "0.0408",
    },
  },
  {
    id: "y2po-005",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 05",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(0.7) \\). Find \\( P(X = 1) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "P(X=r)", "formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the Poisson probability formula with \\( \\lambda = 0.7 \\) and \\( r = 1 \\)", workingLatex: "P(X=1) = \\dfrac{e^{-0.7}\\,0.7^{1}}{1!}", explanation: "Substitute \\( \\lambda = 0.7 \\) and \\( r = 1 \\) into \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\)." },
        { stepNumber: 2, description: "Simplify using \\( 0.7^1 = 0.7 \\) and \\( 1! = 1 \\), then compute", workingLatex: "P(X=1) = e^{-0.7}\\times 0.7 = 0.3476", explanation: "The result is 0.3476 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=1) = 0.3476 \\)",
      canonicalAnswer: "0.3476",
    },
  },
  {
    id: "y2po-006",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 06",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(5) \\). Find \\( P(X = 4) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "P(X=r)", "formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the Poisson probability formula with \\( \\lambda = 5 \\) and \\( r = 4 \\)", workingLatex: "P(X=4) = \\dfrac{e^{-5}\\,5^{4}}{4!}", explanation: "Substitute \\( \\lambda = 5 \\) and \\( r = 4 \\) into \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\)." },
        { stepNumber: 2, description: "Evaluate the power and factorial, then compute", workingLatex: "P(X=4) = \\dfrac{e^{-5}\\times 625}{24} = 0.1755", explanation: "With \\( 5^4 = 625 \\) and \\( 4! = 24 \\), the result is 0.1755 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=4) = 0.1755 \\)",
      canonicalAnswer: "0.1755",
    },
  },
  {
    id: "y2po-007",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 07",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(6.5) \\). Find \\( P(X = 5) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "P(X=r)", "formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the Poisson probability formula with \\( \\lambda = 6.5 \\) and \\( r = 5 \\)", workingLatex: "P(X=5) = \\dfrac{e^{-6.5}\\,6.5^{5}}{5!}", explanation: "Substitute \\( \\lambda = 6.5 \\) and \\( r = 5 \\) into \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\)." },
        { stepNumber: 2, description: "Evaluate the power and factorial, then compute", workingLatex: "P(X=5) = \\dfrac{e^{-6.5}\\times 11602.90625}{120} = 0.1454", explanation: "With \\( 6.5^5 = 11602.90625 \\) and \\( 5! = 120 \\), the result is 0.1454 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=5) = 0.1454 \\)",
      canonicalAnswer: "0.1454",
    },
  },
  {
    id: "y2po-008",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 08",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(3) \\). Find \\( P(X = 2) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "P(X=r)", "formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the Poisson probability formula with \\( \\lambda = 3 \\) and \\( r = 2 \\)", workingLatex: "P(X=2) = \\dfrac{e^{-3}\\,3^{2}}{2!}", explanation: "Substitute \\( \\lambda = 3 \\) and \\( r = 2 \\) into \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\)." },
        { stepNumber: 2, description: "Evaluate the square and factorial, then compute", workingLatex: "P(X=2) = \\dfrac{e^{-3}\\times 9}{2} = 0.2240", explanation: "With \\( 3^2 = 9 \\) and \\( 2! = 2 \\), the result is 0.2240 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=2) = 0.2240 \\)",
      canonicalAnswer: "0.2240",
    },
  },
  {
    id: "y2po-009",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 09",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(1.5) \\). Write down the value of \\( E(X) \\) and the value of \\( \\mathrm{Var}(X) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "mean", "variance"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the mean and variance of a Poisson distribution", workingLatex: "E(X) = \\lambda, \\qquad \\mathrm{Var}(X) = \\lambda", explanation: "A key property of the Poisson distribution is that the mean and the variance are both equal to the parameter \\( \\lambda \\)." },
        { stepNumber: 2, description: "Substitute \\( \\lambda = 1.5 \\)", workingLatex: "E(X) = 1.5, \\qquad \\mathrm{Var}(X) = 1.5", explanation: "Since \\( \\lambda = 1.5 \\), both \\( E(X) \\) and \\( \\mathrm{Var}(X) \\) equal 1.5." }
      ],
      finalAnswer: "\\( E(X) = 1.5,\\ \\mathrm{Var}(X) = 1.5 \\)",
      canonicalAnswer: "E(X)=1.5, Var(X)=1.5",
    },
  },
  {
    id: "y2po-010",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 10",
    difficulty: "Foundation",
    questionText: "The random variable \\( X \\sim Po(2.2) \\). Find \\( P(X = 3) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "P(X=r)", "formula"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the Poisson probability formula with \\( \\lambda = 2.2 \\) and \\( r = 3 \\)", workingLatex: "P(X=3) = \\dfrac{e^{-2.2}\\,2.2^{3}}{3!}", explanation: "Substitute \\( \\lambda = 2.2 \\) and \\( r = 3 \\) into \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\)." },
        { stepNumber: 2, description: "Evaluate the cube and factorial, then compute", workingLatex: "P(X=3) = \\dfrac{e^{-2.2}\\times 10.648}{6} = 0.1966", explanation: "With \\( 2.2^3 = 10.648 \\) and \\( 3! = 6 \\), the result is 0.1966 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=3) = 0.1966 \\)",
      canonicalAnswer: "0.1966",
    },
  },
  {
    id: "y2po-011",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 11",
    difficulty: "Foundation",
    questionText: "The number of emails arriving at an office help-desk is to be modelled by a Poisson distribution. State two conditions that must hold for this model to be appropriate.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "conditions", "modelling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the conditions required for a Poisson model", workingLatex: "\\text{events occur singly; independently; at a constant average rate}", explanation: "For a Poisson distribution the events (emails) must occur singly in space or time, occur independently of one another, and occur at a constant average rate." },
        { stepNumber: 2, description: "State two of these conditions in context", workingLatex: "\\text{emails arrive independently; emails arrive at a constant average rate}", explanation: "Any two of the three conditions earn the marks: that emails arrive one at a time (singly), that they arrive independently, and that they arrive at a constant average rate." }
      ],
      finalAnswer: "\\( \\text{The emails must occur independently and at a constant average rate (and singly).} \\)",
      canonicalAnswer: "Events occur independently and at a constant average rate (and singly).",
    },
  },
  {
    id: "y2po-012",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 12",
    difficulty: "Foundation",
    questionText: "A random variable \\(X\\) follows the distribution \\(X\\sim \\text{Po}(3.2)\\). Find \\(P(X=2)\\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson formula", "single probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the Poisson probability formula.", workingLatex: "P(X=2) = \\dfrac{e^{-3.2}\\,(3.2)^{2}}{2!}", explanation: "Substitute \\lambda = 3.2 and r = 2 into P(X=r) = e^{-\\lambda}\\lambda^{r}/r!." },
        { stepNumber: 2, description: "Evaluate each factor.", workingLatex: "= \\dfrac{0.040762 \\times 10.24}{2}", explanation: "Here e^{-3.2} = 0.040762, (3.2)^{2} = 10.24 and 2! = 2." },
        { stepNumber: 3, description: "Compute and round.", workingLatex: "= 0.208703\\ldots \\approx 0.2087", explanation: "This rounds to 0.2087 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=2) \\approx 0.2087 \\)",
      canonicalAnswer: "0.2087",
    },
  },
  {
    id: "y2po-013",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 13",
    difficulty: "Foundation",
    questionText: "The random variable \\(X\\sim \\text{Po}(1.5)\\). Find \\(P(X=4)\\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson formula", "single probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the Poisson probability formula.", workingLatex: "P(X=4) = \\dfrac{e^{-1.5}\\,(1.5)^{4}}{4!}", explanation: "Substitute \\lambda = 1.5 and r = 4 into P(X=r) = e^{-\\lambda}\\lambda^{r}/r!." },
        { stepNumber: 2, description: "Evaluate each factor.", workingLatex: "= \\dfrac{0.223130 \\times 5.0625}{24}", explanation: "Here e^{-1.5} = 0.223130, (1.5)^{4} = 5.0625 and 4! = 24." },
        { stepNumber: 3, description: "Compute and round.", workingLatex: "= 0.047067\\ldots \\approx 0.0471", explanation: "This rounds to 0.0471 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=4) \\approx 0.0471 \\)",
      canonicalAnswer: "0.0471",
    },
  },
  {
    id: "y2po-014",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 14",
    difficulty: "Foundation",
    questionText: "The random variable \\(X\\sim \\text{Po}(2.7)\\). Find \\(P(X=0)\\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson formula", "P(X=0)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the Poisson probability formula.", workingLatex: "P(X=0) = \\dfrac{e^{-2.7}\\,(2.7)^{0}}{0!}", explanation: "Substitute \\lambda = 2.7 and r = 0 into P(X=r) = e^{-\\lambda}\\lambda^{r}/r!." },
        { stepNumber: 2, description: "Simplify the factors.", workingLatex: "= e^{-2.7} \\quad \\text{since } (2.7)^{0} = 1 \\text{ and } 0! = 1", explanation: "When r = 0 the probability reduces to e^{-\\lambda}." },
        { stepNumber: 3, description: "Compute and round.", workingLatex: "= 0.067206\\ldots \\approx 0.0672", explanation: "This rounds to 0.0672 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=0) \\approx 0.0672 \\)",
      canonicalAnswer: "0.0672",
    },
  },
  {
    id: "y2po-015",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 15",
    difficulty: "Foundation",
    questionText: "The number of emails arriving at a help desk in a one-minute interval is modelled by \\(X\\sim \\text{Po}(0.8)\\). Find the probability that no emails arrive in a given one-minute interval, giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson formula", "P(X=0)", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the Poisson probability formula for no emails.", workingLatex: "P(X=0) = \\dfrac{e^{-0.8}\\,(0.8)^{0}}{0!}", explanation: "No emails means r = 0; substitute \\lambda = 0.8 into P(X=r) = e^{-\\lambda}\\lambda^{r}/r!." },
        { stepNumber: 2, description: "Simplify the factors.", workingLatex: "= e^{-0.8} \\quad \\text{since } (0.8)^{0} = 1 \\text{ and } 0! = 1", explanation: "When r = 0 the probability reduces to e^{-\\lambda}." },
        { stepNumber: 3, description: "Compute and round.", workingLatex: "= 0.449329\\ldots \\approx 0.4493", explanation: "This rounds to 0.4493 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=0) \\approx 0.4493 \\)",
      canonicalAnswer: "0.4493",
    },
  },
  {
    id: "y2po-016",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 16",
    difficulty: "Foundation",
    questionText: "The random variable \\(X\\sim \\text{Po}(4)\\). Find \\(P(X=1)\\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson formula", "P(X=1)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the Poisson probability formula.", workingLatex: "P(X=1) = \\dfrac{e^{-4}\\,(4)^{1}}{1!}", explanation: "Substitute \\lambda = 4 and r = 1 into P(X=r) = e^{-\\lambda}\\lambda^{r}/r!." },
        { stepNumber: 2, description: "Evaluate each factor.", workingLatex: "= \\dfrac{0.018316 \\times 4}{1}", explanation: "Here e^{-4} = 0.018316, (4)^{1} = 4 and 1! = 1." },
        { stepNumber: 3, description: "Compute and round.", workingLatex: "= 0.073263\\ldots \\approx 0.0733", explanation: "This rounds to 0.0733 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=1) \\approx 0.0733 \\)",
      canonicalAnswer: "0.0733",
    },
  },
  {
    id: "y2po-017",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 17",
    difficulty: "Foundation",
    questionText: "The number of flaws in a 1-metre length of cable is modelled by \\(X\\sim \\text{Po}(0.5)\\). Find the probability that a 1-metre length contains exactly one flaw, giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson formula", "P(X=1)", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the Poisson probability formula for one flaw.", workingLatex: "P(X=1) = \\dfrac{e^{-0.5}\\,(0.5)^{1}}{1!}", explanation: "Exactly one flaw means r = 1; substitute \\lambda = 0.5 into P(X=r) = e^{-\\lambda}\\lambda^{r}/r!." },
        { stepNumber: 2, description: "Evaluate each factor.", workingLatex: "= \\dfrac{0.606531 \\times 0.5}{1}", explanation: "Here e^{-0.5} = 0.606531, (0.5)^{1} = 0.5 and 1! = 1." },
        { stepNumber: 3, description: "Compute and round.", workingLatex: "= 0.303265\\ldots \\approx 0.3033", explanation: "This rounds to 0.3033 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=1) \\approx 0.3033 \\)",
      canonicalAnswer: "0.3033",
    },
  },
  {
    id: "y2po-018",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 18",
    difficulty: "Foundation",
    questionText: "The random variable \\(X\\sim \\text{Po}(5.6)\\). Find \\(P(X=3)\\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson formula", "single probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the Poisson probability formula.", workingLatex: "P(X=3) = \\dfrac{e^{-5.6}\\,(5.6)^{3}}{3!}", explanation: "Substitute \\lambda = 5.6 and r = 3 into P(X=r) = e^{-\\lambda}\\lambda^{r}/r!." },
        { stepNumber: 2, description: "Evaluate each factor.", workingLatex: "= \\dfrac{0.003698 \\times 175.616}{6}", explanation: "Here e^{-5.6} = 0.003698, (5.6)^{3} = 175.616 and 3! = 6." },
        { stepNumber: 3, description: "Compute and round.", workingLatex: "= 0.108223\\ldots \\approx 0.1082", explanation: "This rounds to 0.1082 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=3) \\approx 0.1082 \\)",
      canonicalAnswer: "0.1082",
    },
  },
  {
    id: "y2po-019",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 19",
    difficulty: "Foundation",
    questionText: "The random variable \\(X\\sim \\text{Po}(3.5)\\). Write down the mean and the variance of \\(X\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "mean and variance", "lambda"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the mean and variance of a Poisson distribution.", workingLatex: "E(X) = \\lambda, \\qquad \\text{Var}(X) = \\lambda", explanation: "For X \\sim \\text{Po}(\\lambda) the mean and the variance are both equal to \\lambda." },
        { stepNumber: 2, description: "Substitute the value of the parameter.", workingLatex: "E(X) = 3.5, \\qquad \\text{Var}(X) = 3.5", explanation: "Here \\lambda = 3.5, so both the mean and the variance equal 3.5." }
      ],
      finalAnswer: "\\( E(X) = 3.5 \\text{ and } \\text{Var}(X) = 3.5 \\)",
      canonicalAnswer: "mean = 3.5, variance = 3.5",
    },
  },
  {
    id: "y2po-020",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 20",
    difficulty: "Foundation",
    questionText: "Cars pass a checkpoint at a constant average rate of \\(15\\) cars per hour, and the number passing may be modelled by a Poisson distribution. Let \\(X\\) be the number of cars passing in a \\(20\\)-minute interval. State the value of \\(\\lambda\\) for \\(X\\) and write down the distribution of \\(X\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "identify lambda", "rate"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the rate to the required interval.", workingLatex: "\\lambda = 15 \\times \\dfrac{20}{60} = 15 \\times \\dfrac{1}{3}", explanation: "A 20-minute interval is one third of an hour, so the mean for that interval is one third of the hourly rate." },
        { stepNumber: 2, description: "Compute \\lambda and state the distribution.", workingLatex: "\\lambda = 5, \\qquad X \\sim \\text{Po}(5)", explanation: "The mean number of cars in 20 minutes is 5, so X follows a Poisson distribution with parameter 5." }
      ],
      finalAnswer: "\\( \\lambda = 5, \\ X \\sim \\text{Po}(5) \\)",
      canonicalAnswer: "lambda = 5",
    },
  },
  {
    id: "y2po-021",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 21",
    difficulty: "Foundation",
    questionText: "Accidents at a busy road junction occur randomly, independently and singly, at a constant average rate. Explain why the number of accidents in a fixed time period can be modelled by a Poisson distribution.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "modelling", "recognise context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Poisson modelling conditions that are met.", workingLatex: "\\text{The events occur singly, independently and at a constant average rate.}", explanation: "A Poisson model is appropriate when events occur one at a time, independently of one another, and at a constant mean rate." },
        { stepNumber: 2, description: "Apply this to the context.", workingLatex: "\\text{So the number of accidents in a fixed period is } \\sim \\text{Po}(\\lambda).", explanation: "Because accidents are rare events satisfying these conditions, the count in a fixed interval follows a Poisson distribution with mean \\lambda equal to the expected number of accidents in that interval." }
      ],
      finalAnswer: "\\( \\text{Events occur singly, independently and at a constant rate, so the count } \\sim \\text{Po}(\\lambda). \\)",
    },
  },
  {
    id: "y2po-022",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 22",
    difficulty: "Foundation",
    questionText: "Telephone calls arrive at a switchboard at a constant average rate of \\(2\\) calls per minute, modelled by a Poisson distribution. Find the expected number of calls arriving in a \\(3\\)-minute interval.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["poisson", "expected number", "interval"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the rate to the required interval.", workingLatex: "\\lambda = 2 \\times 3", explanation: "The expected number of events in an interval is the rate multiplied by the length of the interval; for a Poisson model the expected number equals \\lambda." },
        { stepNumber: 2, description: "Compute the expected number.", workingLatex: "\\lambda = 6", explanation: "At 2 calls per minute over 3 minutes, the expected number of calls is 6." }
      ],
      finalAnswer: "\\( \\lambda = 6 \\text{ calls} \\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "y2po-023",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 23",
    difficulty: "Standard",
    questionText: "The number of emails arriving at a help desk in a 10-minute period is modelled by a Poisson distribution with mean \\(3.5\\). Let \\(X\\) be the number of emails arriving in such a period. Find \\(P(X\\le 4)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cumulative probability", "at most", "Poisson tables"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the distribution.", workingLatex: "X \\sim Po(3.5)", explanation: "The number of emails in a fixed 10-minute interval has mean 3.5, so X is Poisson with lambda = 3.5." },
        { stepNumber: 2, description: "Write the required cumulative probability as a sum.", workingLatex: "P(X\\le 4) = \\sum_{k=0}^{4} e^{-3.5}\\,\\frac{3.5^{k}}{k!}", explanation: "P(X <= 4) is the sum of the individual Poisson probabilities for k = 0, 1, 2, 3, 4." },
        { stepNumber: 3, description: "Evaluate the cumulative sum.", workingLatex: "= 0.7254", explanation: "Adding the five terms (or reading the cumulative Poisson tables) gives 0.72544..., which rounds to 0.7254." }
      ],
      finalAnswer: "\\( P(X\\le 4) \\approx 0.7254 \\)",
      canonicalAnswer: "0.7254",
    },
  },
  {
    id: "y2po-024",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 24",
    difficulty: "Standard",
    questionText: "Calls reach a switchboard at a mean rate modelled by a Poisson distribution with mean \\(4.2\\) per minute. Let \\(X\\) be the number of calls in a given minute. Find \\(P(X\\ge 3)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cumulative probability", "at least", "complement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the distribution and rewrite using the complement.", workingLatex: "X \\sim Po(4.2), \\quad P(X\\ge 3) = 1 - P(X\\le 2)", explanation: "'At least 3' is the complement of 'at most 2', so subtract P(X <= 2) from 1." },
        { stepNumber: 2, description: "Evaluate the cumulative term.", workingLatex: "P(X\\le 2) = \\sum_{k=0}^{2} e^{-4.2}\\,\\frac{4.2^{k}}{k!} = 0.2102", explanation: "Summing the probabilities for k = 0, 1, 2 gives 0.21024..., i.e. 0.2102." },
        { stepNumber: 3, description: "Subtract from 1.", workingLatex: "P(X\\ge 3) = 1 - 0.2102 = 0.7898", explanation: "1 - 0.21024... = 0.78975..., which rounds to 0.7898." }
      ],
      finalAnswer: "\\( P(X\\ge 3) \\approx 0.7898 \\)",
      canonicalAnswer: "0.7898",
    },
  },
  {
    id: "y2po-025",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 25",
    difficulty: "Standard",
    questionText: "The number of flaws in a 1-metre length of cable is modelled by a Poisson distribution with mean \\(2.8\\). Let \\(X\\) be the number of flaws in such a length. Find \\(P(2\\le X\\le 5)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cumulative probability", "between", "range"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the distribution and write the range as a difference of cumulatives.", workingLatex: "X \\sim Po(2.8), \\quad P(2\\le X\\le 5) = P(X\\le 5) - P(X\\le 1)", explanation: "To include both endpoints 2 and 5, subtract P(X <= 1) from P(X <= 5)." },
        { stepNumber: 2, description: "Evaluate the two cumulative terms.", workingLatex: "P(X\\le 5) = 0.9349, \\quad P(X\\le 1) = 0.2311", explanation: "Each cumulative value comes from summing the Poisson probabilities (or reading tables) with lambda = 2.8." },
        { stepNumber: 3, description: "Subtract.", workingLatex: "P(2\\le X\\le 5) = 0.9349 - 0.2311 = 0.7038", explanation: "0.93489... - 0.23108... = 0.70381..., which rounds to 0.7038." }
      ],
      finalAnswer: "\\( P(2\\le X\\le 5) \\approx 0.7038 \\)",
      canonicalAnswer: "0.7038",
    },
  },
  {
    id: "y2po-026",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 26",
    difficulty: "Standard",
    questionText: "Customers enter a small shop at a mean rate modelled by a Poisson distribution with mean \\(6\\) per 5-minute period. Let \\(X\\) be the number of customers entering in a 5-minute period. Find \\(P(X>5)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cumulative probability", "more than", "complement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the distribution and rewrite 'more than 5' using the complement.", workingLatex: "X \\sim Po(6), \\quad P(X>5) = 1 - P(X\\le 5)", explanation: "'More than 5' means 6 or more, which is the complement of 'at most 5'." },
        { stepNumber: 2, description: "Evaluate the cumulative term.", workingLatex: "P(X\\le 5) = \\sum_{k=0}^{5} e^{-6}\\,\\frac{6^{k}}{k!} = 0.4457", explanation: "Summing the probabilities for k = 0 to 5 with lambda = 6 gives 0.44568..., i.e. 0.4457." },
        { stepNumber: 3, description: "Subtract from 1.", workingLatex: "P(X>5) = 1 - 0.4457 = 0.5543", explanation: "1 - 0.44568... = 0.55432..., which rounds to 0.5543." }
      ],
      finalAnswer: "\\( P(X>5) \\approx 0.5543 \\)",
      canonicalAnswer: "0.5543",
    },
  },
  {
    id: "y2po-027",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 27",
    difficulty: "Standard",
    questionText: "The number of cars passing a checkpoint in a fixed period is modelled by a Poisson distribution with mean \\(5\\). Let \\(X\\) be the number of cars in such a period. Find the probability that at most \\(3\\) cars pass the checkpoint, giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cumulative probability", "at most", "Poisson tables"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the distribution.", workingLatex: "X \\sim Po(5)", explanation: "The number of cars in a fixed period has mean 5, so X is Poisson with lambda = 5." },
        { stepNumber: 2, description: "Write 'at most 3' as a cumulative sum.", workingLatex: "P(X\\le 3) = \\sum_{k=0}^{3} e^{-5}\\,\\frac{5^{k}}{k!}", explanation: "'At most 3' means X = 0, 1, 2 or 3, so sum these four probabilities." },
        { stepNumber: 3, description: "Evaluate the cumulative sum.", workingLatex: "= 0.2650", explanation: "Adding the four terms (or reading the cumulative tables) gives 0.26503..., which rounds to 0.2650." }
      ],
      finalAnswer: "\\( P(X\\le 3) \\approx 0.2650 \\)",
      canonicalAnswer: "0.2650",
    },
  },
  {
    id: "y2po-028",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 28",
    difficulty: "Standard",
    questionText: "The number of typing errors on a page of a manuscript is modelled by a Poisson distribution with mean \\(1.5\\). Let \\(X\\) be the number of errors on a randomly chosen page. Find the probability that the page contains at least one error, giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["complement", "at least one", "single probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the distribution and use the complement for 'at least one'.", workingLatex: "X \\sim Po(1.5), \\quad P(X\\ge 1) = 1 - P(X=0)", explanation: "'At least one' is the complement of 'none', so subtract P(X = 0) from 1." },
        { stepNumber: 2, description: "Evaluate P(X = 0).", workingLatex: "P(X=0) = e^{-1.5} = 0.2231", explanation: "With lambda = 1.5, P(X = 0) = e^{-1.5} = 0.22313..." },
        { stepNumber: 3, description: "Subtract from 1.", workingLatex: "P(X\\ge 1) = 1 - e^{-1.5} = 0.7769", explanation: "1 - 0.22313... = 0.77687..., which rounds to 0.7769." }
      ],
      finalAnswer: "\\( P(X\\ge 1) = 1 - e^{-1.5} \\approx 0.7769 \\)",
      canonicalAnswer: "0.7769",
    },
  },
  {
    id: "y2po-029",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 29",
    difficulty: "Standard",
    questionText: "Faults occur on a production line at a mean rate of \\(12\\) per hour, modelled by a Poisson distribution. Let \\(Y\\) be the number of faults occurring in a randomly chosen 15-minute period. Find \\(P(Y\\le 2)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["scaling lambda", "cumulative probability", "at most"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the mean to a 15-minute interval.", workingLatex: "\\lambda = 12 \\times \\frac{15}{60} = 3, \\quad Y \\sim Po(3)", explanation: "15 minutes is one quarter of an hour, so the mean for that interval is 12 x 1/4 = 3." },
        { stepNumber: 2, description: "Write 'at most 2' as a cumulative sum.", workingLatex: "P(Y\\le 2) = \\sum_{k=0}^{2} e^{-3}\\,\\frac{3^{k}}{k!}", explanation: "Sum the Poisson probabilities for k = 0, 1, 2 with lambda = 3." },
        { stepNumber: 3, description: "Evaluate the cumulative sum.", workingLatex: "= 0.4232", explanation: "Adding the three terms gives 0.42319..., which rounds to 0.4232." }
      ],
      finalAnswer: "\\( P(Y\\le 2) \\approx 0.4232 \\)",
      canonicalAnswer: "0.4232",
    },
  },
  {
    id: "y2po-030",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 30",
    difficulty: "Standard",
    questionText: "Misprints occur in a newspaper at a mean rate of \\(0.8\\) per page, modelled by a Poisson distribution. Let \\(Y\\) be the number of misprints found across \\(5\\) randomly chosen pages. Find \\(P(Y\\ge 2)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["scaling lambda", "at least", "complement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the mean to 5 pages.", workingLatex: "\\lambda = 0.8 \\times 5 = 4, \\quad Y \\sim Po(4)", explanation: "Over 5 pages the mean number of misprints is 0.8 x 5 = 4." },
        { stepNumber: 2, description: "Rewrite 'at least 2' using the complement.", workingLatex: "P(Y\\ge 2) = 1 - P(Y\\le 1)", explanation: "'At least 2' is the complement of 'at most 1'." },
        { stepNumber: 3, description: "Evaluate the cumulative term and subtract.", workingLatex: "P(Y\\le 1) = 0.0916, \\quad P(Y\\ge 2) = 1 - 0.0916 = 0.9084", explanation: "P(Y <= 1) = e^{-4}(1 + 4) = 0.09158..., so 1 - 0.09158... = 0.90842..., i.e. 0.9084." }
      ],
      finalAnswer: "\\( P(Y\\ge 2) \\approx 0.9084 \\)",
      canonicalAnswer: "0.9084",
    },
  },
  {
    id: "y2po-031",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 31",
    difficulty: "Standard",
    questionText: "Vehicles arrive at a toll booth at a mean rate of \\(18\\) per hour, modelled by a Poisson distribution. Let \\(Y\\) be the number of vehicles arriving in a randomly chosen 20-minute period. Find \\(P(4\\le Y\\le 8)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["scaling lambda", "between", "range"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the mean to a 20-minute interval.", workingLatex: "\\lambda = 18 \\times \\frac{20}{60} = 6, \\quad Y \\sim Po(6)", explanation: "20 minutes is one third of an hour, so the mean is 18 x 1/3 = 6." },
        { stepNumber: 2, description: "Write the range as a difference of cumulatives.", workingLatex: "P(4\\le Y\\le 8) = P(Y\\le 8) - P(Y\\le 3)", explanation: "To include endpoints 4 and 8, subtract P(Y <= 3) from P(Y <= 8)." },
        { stepNumber: 3, description: "Evaluate and subtract.", workingLatex: "= 0.8472 - 0.1512 = 0.6960", explanation: "P(Y <= 8) = 0.84724... and P(Y <= 3) = 0.15120..., giving 0.69604..., i.e. 0.6960." }
      ],
      finalAnswer: "\\( P(4\\le Y\\le 8) \\approx 0.6960 \\)",
      canonicalAnswer: "0.6960",
    },
  },
  {
    id: "y2po-032",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 32",
    difficulty: "Standard",
    questionText: "In a call centre, calls about billing arrive independently at a Poisson mean rate of \\(2.5\\) per minute, and calls about technical support arrive independently at a Poisson mean rate of \\(3.5\\) per minute. Let \\(T\\) be the total number of calls (of either type) arriving in a given minute. Find the probability that at least one call arrives in that minute, giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sum of Poissons", "at least one", "complement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Combine the two independent Poissons.", workingLatex: "T = X_1 + X_2 \\sim Po(2.5 + 3.5) = Po(6)", explanation: "The sum of independent Poisson variables is Poisson with mean equal to the sum of the means: 2.5 + 3.5 = 6." },
        { stepNumber: 2, description: "Use the complement for 'at least one'.", workingLatex: "P(T\\ge 1) = 1 - P(T=0) = 1 - e^{-6}", explanation: "'At least one' is the complement of 'none', and P(T = 0) = e^{-6}." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "= 1 - 0.002479 = 0.9975", explanation: "e^{-6} = 0.00247..., so 1 - 0.00247... = 0.99752..., which rounds to 0.9975." }
      ],
      finalAnswer: "\\( P(T\\ge 1) = 1 - e^{-6} \\approx 0.9975 \\)",
      canonicalAnswer: "0.9975",
    },
  },
  {
    id: "y2po-033",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 33",
    difficulty: "Standard",
    questionText: "At a harbour, sailing boats arrive independently at a Poisson mean rate of \\(1.2\\) per hour and motor boats arrive independently at a Poisson mean rate of \\(2.3\\) per hour. Let \\(T\\) be the total number of boats arriving in a given hour. Find \\(P(T\\le 3)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sum of Poissons", "cumulative probability", "at most"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Combine the two independent Poissons.", workingLatex: "T \\sim Po(1.2 + 2.3) = Po(3.5)", explanation: "The total of two independent Poisson counts is Poisson with mean 1.2 + 2.3 = 3.5." },
        { stepNumber: 2, description: "Write 'at most 3' as a cumulative sum.", workingLatex: "P(T\\le 3) = \\sum_{k=0}^{3} e^{-3.5}\\,\\frac{3.5^{k}}{k!}", explanation: "Sum the Poisson probabilities for k = 0, 1, 2, 3 with lambda = 3.5." },
        { stepNumber: 3, description: "Evaluate the cumulative sum.", workingLatex: "= 0.5366", explanation: "Adding the four terms gives 0.53663..., which rounds to 0.5366." }
      ],
      finalAnswer: "\\( P(T\\le 3) \\approx 0.5366 \\)",
      canonicalAnswer: "0.5366",
    },
  },
  {
    id: "y2po-034",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 34",
    difficulty: "Standard",
    questionText: "Text messages arrive at a phone at a mean rate of \\(2.4\\) per 10-minute period, modelled by a Poisson distribution. Let \\(Y\\) be the number of messages arriving in a randomly chosen half-hour. Find \\(P(Y\\ge 5)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["scaling lambda", "at least", "complement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the mean to a half-hour interval.", workingLatex: "\\lambda = 2.4 \\times 3 = 7.2, \\quad Y \\sim Po(7.2)", explanation: "A half-hour is three 10-minute periods, so the mean is 2.4 x 3 = 7.2." },
        { stepNumber: 2, description: "Rewrite 'at least 5' using the complement.", workingLatex: "P(Y\\ge 5) = 1 - P(Y\\le 4)", explanation: "'At least 5' is the complement of 'at most 4'." },
        { stepNumber: 3, description: "Evaluate the cumulative term and subtract.", workingLatex: "P(Y\\le 4) = 0.1555, \\quad P(Y\\ge 5) = 1 - 0.1555 = 0.8445", explanation: "P(Y <= 4) = 0.15546..., so 1 - 0.15546... = 0.84453..., which rounds to 0.8445." }
      ],
      finalAnswer: "\\( P(Y\\ge 5) \\approx 0.8445 \\)",
      canonicalAnswer: "0.8445",
    },
  },
  {
    id: "y2po-035",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 35",
    difficulty: "Standard",
    questionText: "A website receives visits from desktop users independently at a Poisson mean rate of \\(4\\) per minute, and from mobile users independently at a Poisson mean rate of \\(5\\) per minute. Let \\(T\\) be the total number of visits in a given minute. Find \\(P(7\\le T\\le 11)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sum of Poissons", "between", "range"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Combine the two independent Poissons.", workingLatex: "T \\sim Po(4 + 5) = Po(9)", explanation: "The total number of visits is Poisson with mean 4 + 5 = 9." },
        { stepNumber: 2, description: "Write the range as a difference of cumulatives.", workingLatex: "P(7\\le T\\le 11) = P(T\\le 11) - P(T\\le 6)", explanation: "To include endpoints 7 and 11, subtract P(T <= 6) from P(T <= 11)." },
        { stepNumber: 3, description: "Evaluate and subtract.", workingLatex: "= 0.8030 - 0.2068 = 0.5962", explanation: "P(T <= 11) = 0.80301... and P(T <= 6) = 0.20678..., giving 0.59623..., i.e. 0.5962." }
      ],
      finalAnswer: "\\( P(7\\le T\\le 11) \\approx 0.5962 \\)",
      canonicalAnswer: "0.5962",
    },
  },
  {
    id: "y2po-036",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 36",
    difficulty: "Standard",
    questionText: "Particles are detected by a counter at a mean rate of \\(0.5\\) per minute, modelled by a Poisson distribution. Let \\(Y\\) be the number of particles detected in a randomly chosen 4-minute period. Find \\(P(Y>3)\\), giving your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["scaling lambda", "more than", "complement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the mean to a 4-minute interval.", workingLatex: "\\lambda = 0.5 \\times 4 = 2, \\quad Y \\sim Po(2)", explanation: "Over 4 minutes the mean number of particles is 0.5 x 4 = 2." },
        { stepNumber: 2, description: "Rewrite 'more than 3' using the complement.", workingLatex: "P(Y>3) = 1 - P(Y\\le 3)", explanation: "'More than 3' means 4 or more, the complement of 'at most 3'." },
        { stepNumber: 3, description: "Evaluate the cumulative term and subtract.", workingLatex: "P(Y\\le 3) = 0.8571, \\quad P(Y>3) = 1 - 0.8571 = 0.1429", explanation: "P(Y <= 3) = 0.85712..., so 1 - 0.85712... = 0.14288..., which rounds to 0.1429." }
      ],
      finalAnswer: "\\( P(Y>3) \\approx 0.1429 \\)",
      canonicalAnswer: "0.1429",
    },
  },
  {
    id: "y2po-037",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 37",
    difficulty: "Standard",
    questionText: "The number of emails arriving at a help desk in a randomly chosen minute follows a Poisson distribution with mean \\( 4.5 \\). Let \\( X \\) be the number of emails arriving in one minute, so \\( X \\sim \\mathrm{Po}(4.5) \\). Find the probability that at least \\( 6 \\) emails arrive in a given minute.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "cumulative", "P(X>=r)", "complement", "at least", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite 'at least 6' using the complement.", workingLatex: "P(X \\ge 6) = 1 - P(X \\le 5)", explanation: "The event \\( X \\ge 6 \\) is the complement of \\( X \\le 5 \\), so subtract the cumulative probability up to 5 from 1." },
        { stepNumber: 2, description: "Evaluate the cumulative probability.", workingLatex: "P(X \\le 5) = \\sum_{r=0}^{5} \\frac{e^{-4.5}\\,4.5^{r}}{r!} = 0.7029", explanation: "Summing the Poisson probabilities for \\( r = 0 \\) to \\( 5 \\) with \\( \\lambda = 4.5 \\) gives \\( 0.7029 \\) to 4 d.p." },
        { stepNumber: 3, description: "Subtract from 1.", workingLatex: "P(X \\ge 6) = 1 - 0.7029 = 0.2971", explanation: "Completing the complement gives the required probability to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\ge 6) = 0.2971 \\)",
      canonicalAnswer: "0.2971",
    },
  },
  {
    id: "y2po-038",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 38",
    difficulty: "Standard",
    questionText: "The number of cars passing a remote checkpoint in a \\( 10 \\)-minute interval is modelled by a Poisson distribution with mean \\( 5 \\). Let \\( X \\) be the number of cars in such an interval, so \\( X \\sim \\mathrm{Po}(5) \\). Find the probability that between \\( 3 \\) and \\( 7 \\) cars pass, inclusive.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "cumulative", "P(a<=X<=b)", "range", "between", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express the inclusive range using cumulative probabilities.", workingLatex: "P(3 \\le X \\le 7) = P(X \\le 7) - P(X \\le 2)", explanation: "Subtract \\( P(X \\le 2) \\) to remove the values \\( 0,1,2 \\) that lie below the range." },
        { stepNumber: 2, description: "Evaluate the upper cumulative probability.", workingLatex: "P(X \\le 7) = \\sum_{r=0}^{7} \\frac{e^{-5}\\,5^{r}}{r!} = 0.8666", explanation: "Summing the Poisson probabilities for \\( r = 0 \\) to \\( 7 \\) with \\( \\lambda = 5 \\) gives \\( 0.8666 \\) to 4 d.p." },
        { stepNumber: 3, description: "Evaluate the lower cumulative probability.", workingLatex: "P(X \\le 2) = \\sum_{r=0}^{2} \\frac{e^{-5}\\,5^{r}}{r!} = 0.1247", explanation: "Summing the Poisson probabilities for \\( r = 0 \\) to \\( 2 \\) gives \\( 0.1247 \\) to 4 d.p." },
        { stepNumber: 4, description: "Subtract.", workingLatex: "P(3 \\le X \\le 7) = 0.8666 - 0.1247 = 0.7419", explanation: "This gives the probability for the inclusive range to 4 d.p." }
      ],
      finalAnswer: "\\( P(3 \\le X \\le 7) = 0.7419 \\)",
      canonicalAnswer: "0.7419",
    },
  },
  {
    id: "y2po-039",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 39",
    difficulty: "Standard",
    questionText: "Faults occur along a fibre-optic cable at a mean rate of \\( 2 \\) per kilometre, independently of position. A \\( 4 \\) km section of cable is inspected. State the expected number of faults in this section, and find the probability that at least \\( 10 \\) faults are found.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "expected number", "scaling", "P(X>=r)", "complement", "at least", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the rate to the 4 km section.", workingLatex: "\\lambda = 2 \\times 4 = 8", explanation: "Over a length of 4 km at \\( 2 \\) faults per km, the mean number of faults is \\( 8 \\), so \\( X \\sim \\mathrm{Po}(8) \\)." },
        { stepNumber: 2, description: "State the expected number.", workingLatex: "E(X) = \\lambda = 8", explanation: "The expected number of faults in the 4 km section equals the mean \\( \\lambda = 8 \\)." },
        { stepNumber: 3, description: "Rewrite 'at least 10' using the complement.", workingLatex: "P(X \\ge 10) = 1 - P(X \\le 9)", explanation: "The event \\( X \\ge 10 \\) is the complement of \\( X \\le 9 \\)." },
        { stepNumber: 4, description: "Evaluate the cumulative probability and subtract.", workingLatex: "P(X \\le 9) = 0.7166 \\implies P(X \\ge 10) = 1 - 0.7166 = 0.2834", explanation: "Summing the Poisson probabilities for \\( r = 0 \\) to \\( 9 \\) with \\( \\lambda = 8 \\) gives \\( 0.7166 \\); the complement is \\( 0.2834 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( E(X) = 8 \\text{ faults}, \\quad P(X \\ge 10) = 0.2834 \\)",
      canonicalAnswer: "0.2834",
    },
  },
  {
    id: "y2po-040",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 40",
    difficulty: "Standard",
    questionText: "The number of customers entering a small shop in a \\( 5 \\)-minute interval follows a Poisson distribution with mean \\( 3.7 \\). Let \\( X \\sim \\mathrm{Po}(3.7) \\). Find the most likely number of customers (the mode of \\( X \\)), justifying your answer.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "mode", "most likely", "comparison", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the candidate values for the mode.", workingLatex: "\\lambda = 3.7 \\implies \\text{check } r = 3 \\text{ and } r = 4", explanation: "The mode lies at or just below \\( \\lambda \\); since \\( \\lambda = 3.7 \\) is not an integer, compare the probabilities at the two values either side, \\( r = 3 \\) and \\( r = 4 \\)." },
        { stepNumber: 2, description: "Evaluate the probability at r = 3.", workingLatex: "P(X = 3) = \\frac{e^{-3.7}\\,3.7^{3}}{3!} = 0.2087", explanation: "Substituting \\( \\lambda = 3.7 \\) and \\( r = 3 \\) gives \\( 0.2087 \\) to 4 d.p." },
        { stepNumber: 3, description: "Evaluate the probability at r = 4.", workingLatex: "P(X = 4) = \\frac{e^{-3.7}\\,3.7^{4}}{4!} = 0.1931", explanation: "Substituting \\( \\lambda = 3.7 \\) and \\( r = 4 \\) gives \\( 0.1931 \\) to 4 d.p." },
        { stepNumber: 4, description: "Compare and state the mode.", workingLatex: "0.2087 > 0.1931 \\implies \\text{mode} = 3", explanation: "Since \\( P(X=3) \\) is the larger probability, the most likely number of customers is \\( 3 \\)." }
      ],
      finalAnswer: "\\( \\text{mode} = 3 \\text{ customers} \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "y2po-041",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 41",
    difficulty: "Standard",
    questionText: "The number of meteors seen by an observer during a one-hour watch follows a Poisson distribution with mean \\( 9 \\). Using the fact that for a Poisson distribution the variance equals the mean, state the variance of the number of meteors seen and hence find the standard deviation.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "variance", "Var=lambda", "standard deviation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the Poisson variance property.", workingLatex: "X \\sim \\mathrm{Po}(\\lambda) \\implies \\mathrm{Var}(X) = \\lambda", explanation: "For a Poisson distribution the variance is equal to the mean \\( \\lambda \\)." },
        { stepNumber: 2, description: "Substitute the mean.", workingLatex: "\\mathrm{Var}(X) = 9", explanation: "With \\( \\lambda = 9 \\), the variance is \\( 9 \\)." },
        { stepNumber: 3, description: "Take the square root for the standard deviation.", workingLatex: "\\sigma = \\sqrt{\\mathrm{Var}(X)} = \\sqrt{9} = 3", explanation: "The standard deviation is the positive square root of the variance, giving \\( 3 \\)." }
      ],
      finalAnswer: "\\( \\mathrm{Var}(X) = 9, \\quad \\sigma = 3 \\)",
      canonicalAnswer: "Var(X) = 9, sd = 3",
    },
  },
  {
    id: "y2po-042",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 42",
    difficulty: "Standard",
    questionText: "Telephone calls reach a switchboard at a mean rate of \\( 0.9 \\) calls every \\( 5 \\) minutes, and the number of calls may be modelled by a Poisson distribution. Find the probability that at most \\( 2 \\) calls are received in a \\( 25 \\)-minute period.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "scaling", "combined intervals", "cumulative", "P(X<=r)", "at most", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the rate to the 25-minute period.", workingLatex: "\\lambda = 0.9 \\times \\frac{25}{5} = 0.9 \\times 5 = 4.5", explanation: "A 25-minute period is five 5-minute blocks, so the mean number of calls is \\( 0.9 \\times 5 = 4.5 \\), giving \\( X \\sim \\mathrm{Po}(4.5) \\)." },
        { stepNumber: 2, description: "Translate 'at most 2' into cumulative form.", workingLatex: "\\text{``at most 2''} \\implies P(X \\le 2)", explanation: "'At most 2' means \\( X \\) takes one of the values \\( 0,1,2 \\)." },
        { stepNumber: 3, description: "Write the cumulative probability as a sum.", workingLatex: "P(X \\le 2) = \\sum_{r=0}^{2} \\frac{e^{-4.5}\\,4.5^{r}}{r!}", explanation: "Add the Poisson probabilities for \\( r = 0,1,2 \\) with \\( \\lambda = 4.5 \\)." },
        { stepNumber: 4, description: "Evaluate the cumulative sum.", workingLatex: "P(X \\le 2) = 0.1736", explanation: "Computing the sum gives \\( 0.1736 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\le 2) = 0.1736 \\)",
      canonicalAnswer: "0.1736",
    },
  },
  {
    id: "y2po-043",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 43",
    difficulty: "Standard",
    questionText: "The number of flaws in a randomly chosen metre of woven fabric follows a Poisson distribution with mean \\( \\lambda \\). It is observed that the probability of finding at least one flaw in a metre is \\( 0.8 \\). Find the value of \\( \\lambda \\), giving your answer to 4 decimal places.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "P(X>=1)", "find rate", "logarithms", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express P(X >= 1) using the complement.", workingLatex: "P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-\\lambda}", explanation: "Since \\( P(X = 0) = e^{-\\lambda} \\), the probability of at least one flaw is \\( 1 - e^{-\\lambda} \\)." },
        { stepNumber: 2, description: "Set up the equation.", workingLatex: "1 - e^{-\\lambda} = 0.8", explanation: "Equate the complement expression to the given probability \\( 0.8 \\)." },
        { stepNumber: 3, description: "Rearrange to isolate the exponential.", workingLatex: "e^{-\\lambda} = 0.2", explanation: "Subtracting from 1 gives \\( e^{-\\lambda} = 0.2 \\)." },
        { stepNumber: 4, description: "Take natural logarithms and solve.", workingLatex: "-\\lambda = \\ln(0.2) \\implies \\lambda = -\\ln(0.2) = 1.6094", explanation: "Taking logs and changing sign gives \\( \\lambda = 1.6094 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( \\lambda = 1.6094 \\)",
      canonicalAnswer: "1.6094",
    },
  },
  {
    id: "y2po-044",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 44",
    difficulty: "Standard",
    questionText: "The number of misprints on a randomly chosen page of a newspaper follows a Poisson distribution with mean \\( 2.5 \\). Let \\( X \\) be the number of misprints on a page, so \\( X \\sim \\mathrm{Po}(2.5) \\). Find the probability that a randomly chosen page contains at least \\( 3 \\) misprints.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "cumulative", "P(X>=r)", "complement", "at least", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite 'at least 3' using the complement.", workingLatex: "P(X \\ge 3) = 1 - P(X \\le 2)", explanation: "The event \\( X \\ge 3 \\) is the complement of \\( X \\le 2 \\)." },
        { stepNumber: 2, description: "Evaluate the cumulative probability.", workingLatex: "P(X \\le 2) = \\sum_{r=0}^{2} \\frac{e^{-2.5}\\,2.5^{r}}{r!} = 0.5438", explanation: "Summing the Poisson probabilities for \\( r = 0,1,2 \\) with \\( \\lambda = 2.5 \\) gives \\( 0.5438 \\) to 4 d.p." },
        { stepNumber: 3, description: "Subtract from 1.", workingLatex: "P(X \\ge 3) = 1 - 0.5438 = 0.4562", explanation: "Completing the complement gives the required probability to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\ge 3) = 0.4562 \\)",
      canonicalAnswer: "0.4562",
    },
  },
  {
    id: "y2po-045",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 45",
    difficulty: "Standard",
    questionText: "Minor accidents are reported at a busy junction at a mean rate of \\( 1.8 \\) per day, and may be modelled by a Poisson distribution. Over a two-day weekend, find the probability that at least \\( 2 \\) minor accidents are reported.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "scaling", "combined intervals", "P(X>=r)", "complement", "at least", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the rate to the two-day period.", workingLatex: "\\lambda = 1.8 \\times 2 = 3.6", explanation: "Over two days at \\( 1.8 \\) accidents per day, the mean number of accidents is \\( 3.6 \\), so \\( X \\sim \\mathrm{Po}(3.6) \\)." },
        { stepNumber: 2, description: "Rewrite 'at least 2' using the complement.", workingLatex: "P(X \\ge 2) = 1 - P(X \\le 1)", explanation: "The event \\( X \\ge 2 \\) is the complement of \\( X \\le 1 \\)." },
        { stepNumber: 3, description: "Evaluate the cumulative probability.", workingLatex: "P(X \\le 1) = e^{-3.6}(1 + 3.6) = 0.1257", explanation: "Adding \\( P(X=0) \\) and \\( P(X=1) \\) with \\( \\lambda = 3.6 \\) gives \\( 0.1257 \\) to 4 d.p." },
        { stepNumber: 4, description: "Subtract from 1.", workingLatex: "P(X \\ge 2) = 1 - 0.1257 = 0.8743", explanation: "Completing the complement gives the required probability to 4 d.p." }
      ],
      finalAnswer: "\\( P(X \\ge 2) = 0.8743 \\)",
      canonicalAnswer: "0.8743",
    },
  },
  {
    id: "y2po-046",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 46",
    difficulty: "Standard",
    questionText: "Pot-holes occur along a country road at a mean rate of \\( 0.6 \\) per \\( 100 \\) m, and may be modelled by a Poisson distribution. A \\( 500 \\) m stretch of the road is surveyed. State the expected number of pot-holes in this stretch, and find the probability that \\( 5 \\) or more pot-holes are found.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "expected number", "scaling", "P(X>=r)", "complement", "at least", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the rate to the 500 m stretch.", workingLatex: "\\lambda = 0.6 \\times \\frac{500}{100} = 0.6 \\times 5 = 3", explanation: "A 500 m stretch is five 100 m blocks, so the mean number of pot-holes is \\( 0.6 \\times 5 = 3 \\), giving \\( X \\sim \\mathrm{Po}(3) \\)." },
        { stepNumber: 2, description: "State the expected number.", workingLatex: "E(X) = \\lambda = 3", explanation: "The expected number of pot-holes in the 500 m stretch equals the mean \\( \\lambda = 3 \\)." },
        { stepNumber: 3, description: "Rewrite '5 or more' using the complement.", workingLatex: "P(X \\ge 5) = 1 - P(X \\le 4)", explanation: "The event \\( X \\ge 5 \\) is the complement of \\( X \\le 4 \\)." },
        { stepNumber: 4, description: "Evaluate the cumulative probability and subtract.", workingLatex: "P(X \\le 4) = 0.8153 \\implies P(X \\ge 5) = 1 - 0.8153 = 0.1847", explanation: "Summing the Poisson probabilities for \\( r = 0 \\) to \\( 4 \\) with \\( \\lambda = 3 \\) gives \\( 0.8153 \\); the complement is \\( 0.1847 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( E(X) = 3 \\text{ pot-holes}, \\quad P(X \\ge 5) = 0.1847 \\)",
      canonicalAnswer: "0.1847",
    },
  },
  {
    id: "y2po-047",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 47",
    difficulty: "Standard",
    questionText: "The number of patients arriving at a minor-injuries clinic in any given hour follows a Poisson distribution with mean \\( 6 \\). Let \\( X \\sim \\mathrm{Po}(6) \\). Find the probability that between \\( 4 \\) and \\( 8 \\) patients arrive in a given hour, inclusive.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "cumulative", "P(a<=X<=b)", "range", "between", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express the inclusive range using cumulative probabilities.", workingLatex: "P(4 \\le X \\le 8) = P(X \\le 8) - P(X \\le 3)", explanation: "Subtract \\( P(X \\le 3) \\) to remove the values \\( 0,1,2,3 \\) that lie below the range." },
        { stepNumber: 2, description: "Evaluate the upper cumulative probability.", workingLatex: "P(X \\le 8) = \\sum_{r=0}^{8} \\frac{e^{-6}\\,6^{r}}{r!} = 0.8472", explanation: "Summing the Poisson probabilities for \\( r = 0 \\) to \\( 8 \\) with \\( \\lambda = 6 \\) gives \\( 0.8472 \\) to 4 d.p." },
        { stepNumber: 3, description: "Evaluate the lower cumulative probability.", workingLatex: "P(X \\le 3) = \\sum_{r=0}^{3} \\frac{e^{-6}\\,6^{r}}{r!} = 0.1512", explanation: "Summing the Poisson probabilities for \\( r = 0 \\) to \\( 3 \\) gives \\( 0.1512 \\) to 4 d.p." },
        { stepNumber: 4, description: "Subtract.", workingLatex: "P(4 \\le X \\le 8) = 0.8472 - 0.1512 = 0.6960", explanation: "This gives the probability for the inclusive range to 4 d.p." }
      ],
      finalAnswer: "\\( P(4 \\le X \\le 8) = 0.6960 \\)",
      canonicalAnswer: "0.6960",
    },
  },
  {
    id: "y2po-048",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 48",
    difficulty: "Standard",
    questionText: "A large factory employs \\( 2000 \\) workers. On any given day each worker is absent independently with a small probability \\( 0.002 \\). A manager wishes to model \\( X \\), the number of workers absent on a randomly chosen day. State which standard distribution provides a suitable model for \\( X \\), give the value of its parameter, and justify why this model is appropriate.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "binomial", "distribution selection", "rare events", "justification", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the underlying binomial structure.", workingLatex: "\\text{Each of } n = 2000 \\text{ workers is absent or not, independently, with } p = 0.002", explanation: "Strictly the number of absences is binomial \\( B(2000, 0.002) \\): a fixed number of independent trials with a constant small probability of 'success' (absence)." },
        { stepNumber: 2, description: "Note the rare-event conditions.", workingLatex: "n = 2000 \\text{ large}, \\quad p = 0.002 \\text{ small}, \\quad np = 4", explanation: "Because \\( n \\) is large and \\( p \\) is small (a rare event), the binomial distribution is well approximated by a Poisson distribution with mean \\( \\lambda = np \\)." },
        { stepNumber: 3, description: "State the Poisson parameter.", workingLatex: "\\lambda = np = 2000 \\times 0.002 = 4", explanation: "The Poisson mean is \\( \\lambda = np = 4 \\)." },
        { stepNumber: 4, description: "State the chosen model with justification.", workingLatex: "X \\sim \\mathrm{Po}(4)", explanation: "A Poisson model with \\( \\lambda = 4 \\) is appropriate: absences are rare, occur independently among a large workforce, and the constant small per-worker probability makes the Poisson a valid approximation to \\( B(2000, 0.002) \\)." }
      ],
      finalAnswer: "\\( X \\sim \\mathrm{Po}(4) \\)",
    },
  },
  {
    id: "y2po-049",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 49",
    difficulty: "Standard",
    questionText: "A vaccine produces a rare side-effect independently in each person with probability \\( 0.01 \\). A random sample of \\( 200 \\) vaccinated people is taken, and \\( X \\) is the number who experience the side-effect. Explain why \\( X \\) may be approximated by a Poisson distribution rather than evaluating the exact binomial, state the approximating distribution, and use it to find the probability that at least \\( 3 \\) people experience the side-effect.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "binomial", "distribution selection", "approximation", "rare events", "P(X>=r)", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Justify the Poisson approximation.", workingLatex: "X \\sim B(200, 0.01), \\quad n \\text{ large}, \\ p \\text{ small}", explanation: "Exactly, \\( X \\) is binomial with \\( n = 200 \\) and \\( p = 0.01 \\). Because \\( n \\) is large and \\( p \\) is small (a rare event), the binomial is well approximated by a Poisson distribution, which avoids the heavy binomial computation." },
        { stepNumber: 2, description: "State the approximating distribution.", workingLatex: "\\lambda = np = 200 \\times 0.01 = 2 \\implies X \\approx \\mathrm{Po}(2)", explanation: "The Poisson mean is \\( \\lambda = np = 2 \\)." },
        { stepNumber: 3, description: "Rewrite 'at least 3' using the complement.", workingLatex: "P(X \\ge 3) = 1 - P(X \\le 2)", explanation: "The event \\( X \\ge 3 \\) is the complement of \\( X \\le 2 \\)." },
        { stepNumber: 4, description: "Evaluate the cumulative probability and subtract.", workingLatex: "P(X \\le 2) = e^{-2}\\left(1 + 2 + 2\\right) = 0.6767 \\implies P(X \\ge 3) = 1 - 0.6767 = 0.3233", explanation: "Summing the Poisson probabilities for \\( r = 0,1,2 \\) with \\( \\lambda = 2 \\) gives \\( 0.6767 \\); the complement is \\( 0.3233 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( X \\approx \\mathrm{Po}(2), \\quad P(X \\ge 3) = 0.3233 \\)",
    },
  },
  {
    id: "y2po-050",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 50",
    difficulty: "Challenge",
    questionText: "The random variable \\( X \\sim Po(\\lambda) \\), where \\( \\lambda > 0 \\). Given that \\( P(X = 2) = 2\\,P(X = 1) \\), find the value of \\( \\lambda \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "find lambda", "probability statement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write each probability using the Poisson formula.", workingLatex: "P(X=2) = \\frac{e^{-\\lambda}\\lambda^2}{2!}, \\qquad P(X=1) = \\frac{e^{-\\lambda}\\lambda^1}{1!}", explanation: "The Poisson probability function is \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\); substitute \\( r=2 \\) and \\( r=1 \\)." },
        { stepNumber: 2, description: "Form the equation from the given condition.", workingLatex: "\\frac{e^{-\\lambda}\\lambda^2}{2} = 2 \\cdot e^{-\\lambda}\\lambda", explanation: "Substitute both expressions into \\( P(X=2)=2\\,P(X=1) \\)." },
        { stepNumber: 3, description: "Cancel the common factors.", workingLatex: "\\frac{\\lambda^2}{2} = 2\\lambda", explanation: "Divide both sides by \\( e^{-\\lambda} \\) (which is non-zero) and note \\( \\lambda \\neq 0 \\), so a factor of \\( \\lambda \\) can also be divided out shortly." },
        { stepNumber: 4, description: "Solve for \\( \\lambda \\).", workingLatex: "\\lambda^2 = 4\\lambda \\implies \\lambda = 4", explanation: "Multiply by 2, then divide by \\( \\lambda \\) (valid since \\( \\lambda>0 \\)) to obtain \\( \\lambda = 4 \\)." }
      ],
      finalAnswer: "\\( \\lambda = 4 \\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "y2po-051",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 51",
    difficulty: "Challenge",
    questionText: "The random variable \\( X \\sim Po(\\lambda) \\), where \\( \\lambda > 0 \\). Given that \\( P(X = 3) = P(X = 2) \\), find the value of \\( \\lambda \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "find lambda", "probability statement"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write each probability using the Poisson formula.", workingLatex: "P(X=3) = \\frac{e^{-\\lambda}\\lambda^3}{3!}, \\qquad P(X=2) = \\frac{e^{-\\lambda}\\lambda^2}{2!}", explanation: "Substitute \\( r=3 \\) and \\( r=2 \\) into \\( P(X=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\)." },
        { stepNumber: 2, description: "Form the equation from the given condition.", workingLatex: "\\frac{e^{-\\lambda}\\lambda^3}{6} = \\frac{e^{-\\lambda}\\lambda^2}{2}", explanation: "Set the two expressions equal, using \\( 3! = 6 \\) and \\( 2! = 2 \\)." },
        { stepNumber: 3, description: "Cancel the common factors.", workingLatex: "\\frac{\\lambda^3}{6} = \\frac{\\lambda^2}{2}", explanation: "Divide both sides by \\( e^{-\\lambda} \\), which is non-zero." },
        { stepNumber: 4, description: "Solve for \\( \\lambda \\).", workingLatex: "\\frac{\\lambda}{6} = \\frac{1}{2} \\implies \\lambda = 3", explanation: "Divide both sides by \\( \\lambda^2 \\) (valid since \\( \\lambda>0 \\)), then multiply by 6 to get \\( \\lambda = 3 \\)." }
      ],
      finalAnswer: "\\( \\lambda = 3 \\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "y2po-052",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 52",
    difficulty: "Challenge",
    questionText: "The random variable \\( X \\sim Po(\\lambda) \\). Given that \\( P(X = 0) = 0.20 \\), find the value of \\( \\lambda \\), giving your answer to 4 decimal places.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "find lambda", "P(X=0)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write \\( P(X=0) \\) in terms of \\( \\lambda \\).", workingLatex: "P(X=0) = e^{-\\lambda}", explanation: "When \\( r=0 \\) the Poisson formula reduces to \\( e^{-\\lambda} \\)." },
        { stepNumber: 2, description: "Form the equation.", workingLatex: "e^{-\\lambda} = 0.20", explanation: "Set the expression for \\( P(X=0) \\) equal to the given probability." },
        { stepNumber: 3, description: "Take natural logarithms of both sides.", workingLatex: "-\\lambda = \\ln(0.20)", explanation: "Applying \\( \\ln \\) undoes the exponential, since \\( \\ln(e^{-\\lambda}) = -\\lambda \\)." },
        { stepNumber: 4, description: "Solve for \\( \\lambda \\).", workingLatex: "\\lambda = -\\ln(0.20) = 1.6094", explanation: "Evaluating \\( -\\ln(0.20) \\) gives \\( 1.6094 \\) to 4 decimal places." }
      ],
      finalAnswer: "\\( \\lambda = 1.6094 \\)",
      canonicalAnswer: "1.6094",
    },
  },
  {
    id: "y2po-053",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 53",
    difficulty: "Challenge",
    questionText: "The number of breakdowns \\( X \\) of a machine in a week is modelled by \\( X \\sim Po(2.4) \\). Given that at least one breakdown occurs in a particular week, find the probability that exactly one breakdown occurs that week. Give your answer to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "conditional probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the conditional probability required.", workingLatex: "P(X=1 \\mid X \\ge 1) = \\frac{P(X=1 \\text{ and } X \\ge 1)}{P(X \\ge 1)} = \\frac{P(X=1)}{P(X \\ge 1)}", explanation: "Since the event \\( X=1 \\) already lies inside \\( X \\ge 1 \\), the intersection is just \\( X=1 \\)." },
        { stepNumber: 2, description: "Compute \\( P(X \\ge 1) \\) using the complement.", workingLatex: "P(X \\ge 1) = 1 - P(X=0) = 1 - e^{-2.4} = 1 - 0.0907 = 0.9093", explanation: "The complement of 'at least one' is 'none'; \\( e^{-2.4} = 0.0907 \\) to 4 dp." },
        { stepNumber: 3, description: "Compute \\( P(X=1) \\).", workingLatex: "P(X=1) = \\frac{e^{-2.4}\\,(2.4)^1}{1!} = 0.2177", explanation: "Substitute \\( \\lambda = 2.4 \\), \\( r = 1 \\) into the Poisson formula." },
        { stepNumber: 4, description: "Divide to obtain the conditional probability.", workingLatex: "P(X=1 \\mid X \\ge 1) = \\frac{0.2177}{0.9093} = 0.2394", explanation: "Dividing gives \\( 0.2394 \\) to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=1 \\mid X \\ge 1) = 0.2394 \\)",
      canonicalAnswer: "0.2394",
    },
  },
  {
    id: "y2po-054",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 54",
    difficulty: "Challenge",
    questionText: "The number of customers \\( X \\) arriving at a kiosk in a 5-minute period is modelled by \\( X \\sim Po(1.5) \\). Given that at least one customer arrives in such a period, find the probability that exactly two customers arrive. Give your answer to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "conditional probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the required conditional probability.", workingLatex: "P(X=2 \\mid X \\ge 1) = \\frac{P(X=2)}{P(X \\ge 1)}", explanation: "The event \\( X=2 \\) is contained in \\( X \\ge 1 \\), so the numerator is simply \\( P(X=2) \\)." },
        { stepNumber: 2, description: "Compute \\( P(X \\ge 1) \\).", workingLatex: "P(X \\ge 1) = 1 - e^{-1.5} = 1 - 0.2231 = 0.7769", explanation: "Use the complement; \\( e^{-1.5} = 0.2231 \\) to 4 dp." },
        { stepNumber: 3, description: "Compute \\( P(X=2) \\).", workingLatex: "P(X=2) = \\frac{e^{-1.5}\\,(1.5)^2}{2!} = 0.2510", explanation: "Substitute \\( \\lambda = 1.5 \\), \\( r = 2 \\) into the Poisson formula." },
        { stepNumber: 4, description: "Divide to obtain the conditional probability.", workingLatex: "P(X=2 \\mid X \\ge 1) = \\frac{0.2510}{0.7769} = 0.3231", explanation: "Dividing gives \\( 0.3231 \\) to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=2 \\mid X \\ge 1) = 0.3231 \\)",
      canonicalAnswer: "0.3231",
    },
  },
  {
    id: "y2po-055",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 55",
    difficulty: "Challenge",
    questionText: "The numbers of emails received in an hour at two independent inboxes are modelled by \\( X \\sim Po(3) \\) and \\( Y \\sim Po(5) \\). Let \\( S = X + Y \\) be the total number of emails received in an hour. Find \\( P(S = 10) \\), giving your answer to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "sum of independent Poissons"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the additive property of independent Poisson variables.", workingLatex: "S = X + Y \\sim Po(3 + 5) = Po(8)", explanation: "If \\( X \\sim Po(\\lambda_1) \\) and \\( Y \\sim Po(\\lambda_2) \\) are independent, then \\( X+Y \\sim Po(\\lambda_1+\\lambda_2) \\)." },
        { stepNumber: 2, description: "Write the required probability using the Poisson formula.", workingLatex: "P(S=10) = \\frac{e^{-8}\\,8^{10}}{10!}", explanation: "Substitute \\( \\lambda = 8 \\) and \\( r = 10 \\) into \\( P(S=r)=\\dfrac{e^{-\\lambda}\\lambda^r}{r!} \\)." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "P(S=10) = 0.0993", explanation: "Evaluating \\( \\dfrac{e^{-8}\\,8^{10}}{10!} \\) gives \\( 0.0993 \\) to 4 decimal places." }
      ],
      finalAnswer: "\\( P(S=10) = 0.0993 \\)",
      canonicalAnswer: "0.0993",
    },
  },
  {
    id: "y2po-056",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 56",
    difficulty: "Challenge",
    questionText: "A factory has two independent machines. The number of faults produced per shift by machine A is \\( A \\sim Po(2.2) \\) and by machine B is \\( B \\sim Po(1.8) \\). Let \\( T = A + B \\) be the total number of faults per shift. Find the probability that more than two faults are produced in a shift, giving your answer to 4 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "sum of independent Poissons", "P(X>=k)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Combine the independent Poisson variables.", workingLatex: "T = A + B \\sim Po(2.2 + 1.8) = Po(4)", explanation: "The sum of independent Poisson variables is Poisson with the summed mean, so \\( T \\sim Po(4) \\)." },
        { stepNumber: 2, description: "Express the required probability via the complement.", workingLatex: "P(T > 2) = 1 - P(T \\le 2) = 1 - [P(T=0) + P(T=1) + P(T=2)]", explanation: "'More than two' means \\( T \\ge 3 \\); it is easier to subtract \\( P(T \\le 2) \\) from 1." },
        { stepNumber: 3, description: "Compute the individual probabilities for \\( \\lambda = 4 \\).", workingLatex: "P(T=0)=e^{-4}=0.0183,\\quad P(T=1)=4e^{-4}=0.0733,\\quad P(T=2)=\\frac{16e^{-4}}{2}=0.1465", explanation: "Substitute \\( \\lambda = 4 \\) into the Poisson formula for \\( r = 0, 1, 2 \\)." },
        { stepNumber: 4, description: "Sum them.", workingLatex: "P(T \\le 2) = 0.0183 + 0.0733 + 0.1465 = 0.2381", explanation: "Add the three probabilities to obtain \\( P(T \\le 2) \\)." },
        { stepNumber: 5, description: "Subtract from 1.", workingLatex: "P(T > 2) = 1 - 0.2381 = 0.7619", explanation: "The required probability is \\( 0.7619 \\) to 4 decimal places." }
      ],
      finalAnswer: "\\( P(T > 2) = 0.7619 \\)",
      canonicalAnswer: "0.7619",
    },
  },
  {
    id: "y2po-057",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 57",
    difficulty: "Challenge",
    questionText: "A machine produces components, of which a proportion \\( 0.015 \\) are defective, independently of one another. A random sample of \\( 200 \\) components is taken. Using a suitable Poisson approximation, find the probability that exactly 4 components in the sample are defective. Give your answer to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "approximation to binomial"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the binomial model and justify the approximation.", workingLatex: "X \\sim B(200, 0.015)", explanation: "Each component is independently defective with probability \\( 0.015 \\), so \\( X \\sim B(n,p) \\). Since \\( n=200 \\) is large and \\( p=0.015 \\) is small, a Poisson approximation is appropriate." },
        { stepNumber: 2, description: "Compute the Poisson parameter.", workingLatex: "\\lambda = np = 200 \\times 0.015 = 3", explanation: "The approximating Poisson distribution has mean \\( \\lambda = np \\)." },
        { stepNumber: 3, description: "State the approximating distribution.", workingLatex: "X \\approx Po(3)", explanation: "Approximate \\( X \\) by a Poisson variable with \\( \\lambda = 3 \\)." },
        { stepNumber: 4, description: "Evaluate the required probability.", workingLatex: "P(X=4) \\approx \\frac{e^{-3}\\,3^4}{4!} = 0.1680", explanation: "Substitute \\( \\lambda = 3 \\), \\( r = 4 \\); this gives \\( 0.1680 \\) to 4 dp (the exact binomial value is \\( 0.1693 \\), confirming the approximation is close)." }
      ],
      finalAnswer: "\\( P(X=4) \\approx 0.1680 \\)",
      canonicalAnswer: "0.1680",
    },
  },
  {
    id: "y2po-058",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 58",
    difficulty: "Challenge",
    questionText: "On a production line, each item is independently faulty with probability \\( 0.006 \\). A batch of \\( 500 \\) items is inspected. Using a suitable Poisson approximation, find the probability that the batch contains at least two faulty items. Give your answer to 4 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "approximation to binomial", "P(X>=k)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the binomial model.", workingLatex: "X \\sim B(500, 0.006)", explanation: "The number of faulty items is binomial with \\( n=500 \\), \\( p=0.006 \\)." },
        { stepNumber: 2, description: "Justify and compute the Poisson parameter.", workingLatex: "\\lambda = np = 500 \\times 0.006 = 3", explanation: "As \\( n \\) is large and \\( p \\) is small, approximate by \\( Po(\\lambda) \\) with \\( \\lambda = np = 3 \\)." },
        { stepNumber: 3, description: "Express the required probability via the complement.", workingLatex: "P(X \\ge 2) = 1 - [P(X=0) + P(X=1)]", explanation: "'At least two' is the complement of 'none or one'." },
        { stepNumber: 4, description: "Compute the two probabilities for \\( \\lambda = 3 \\).", workingLatex: "P(X=0) = e^{-3} = 0.0498, \\qquad P(X=1) = 3e^{-3} = 0.1494", explanation: "Substitute \\( \\lambda = 3 \\) into the Poisson formula for \\( r = 0 \\) and \\( r = 1 \\)." },
        { stepNumber: 5, description: "Combine and subtract from 1.", workingLatex: "P(X \\ge 2) \\approx 1 - (0.0498 + 0.1494) = 1 - 0.1991 = 0.8009", explanation: "This gives \\( 0.8009 \\) to 4 dp (the exact binomial value is \\( 0.8017 \\), confirming the approximation)." }
      ],
      finalAnswer: "\\( P(X \\ge 2) \\approx 0.8009 \\)",
      canonicalAnswer: "0.8009",
    },
  },
  {
    id: "y2po-059",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 59",
    difficulty: "Challenge",
    questionText: "Flaws occur at random in a length of cable at a constant average rate of \\( 1.2 \\) flaws per metre. A \\( 5 \\)-metre length of the cable is selected at random. Find the probability that it contains at most two flaws, giving your answer to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "rate problem", "scaling lambda"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the rate to the required length.", workingLatex: "\\lambda = 1.2 \\times 5 = 6", explanation: "For a Poisson process the mean for a 5-metre length is the rate per metre multiplied by 5, so \\( X \\sim Po(6) \\)." },
        { stepNumber: 2, description: "Write the required probability.", workingLatex: "P(X \\le 2) = P(X=0) + P(X=1) + P(X=2)", explanation: "'At most two' means \\( X = 0, 1 \\) or \\( 2 \\)." },
        { stepNumber: 3, description: "Compute each probability for \\( \\lambda = 6 \\).", workingLatex: "P(X=0)=e^{-6}=0.0025,\\quad P(X=1)=6e^{-6}=0.0149,\\quad P(X=2)=\\frac{36e^{-6}}{2}=0.0446", explanation: "Substitute \\( \\lambda = 6 \\) into the Poisson formula for \\( r = 0, 1, 2 \\)." },
        { stepNumber: 4, description: "Sum the probabilities.", workingLatex: "P(X \\le 2) = 0.0025 + 0.0149 + 0.0446 = 0.0620", explanation: "Adding gives \\( 0.0620 \\) to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X \\le 2) = 0.0620 \\)",
      canonicalAnswer: "0.0620",
    },
  },
  {
    id: "y2po-060",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 60",
    difficulty: "Challenge",
    questionText: "Requests arrive at a server at a constant average rate of \\( 0.5 \\) requests per minute, modelled by a Poisson distribution. Let \\( X \\) be the number of requests arriving in a \\( 10 \\)-minute period. Find the probability that more than five requests arrive in such a period, giving your answer to 4 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "rate problem", "scaling lambda", "P(X>k)"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the rate to the required interval.", workingLatex: "\\lambda = 0.5 \\times 10 = 5", explanation: "The mean number of requests in 10 minutes is the per-minute rate times 10, so \\( X \\sim Po(5) \\)." },
        { stepNumber: 2, description: "Express the required probability via the complement.", workingLatex: "P(X > 5) = 1 - P(X \\le 5) = 1 - \\sum_{r=0}^{5} \\frac{e^{-5}\\,5^r}{r!}", explanation: "'More than five' means \\( X \\ge 6 \\); subtract \\( P(X \\le 5) \\) from 1." },
        { stepNumber: 3, description: "Compute the cumulative probability.", workingLatex: "P(X \\le 5) = \\sum_{r=0}^{5} \\frac{e^{-5}\\,5^r}{r!} = 0.6160", explanation: "Summing the Poisson probabilities for \\( r = 0 \\) to \\( 5 \\) with \\( \\lambda = 5 \\) gives \\( 0.6160 \\) to 4 dp." },
        { stepNumber: 4, description: "Subtract from 1.", workingLatex: "P(X > 5) = 1 - 0.6160 = 0.3840", explanation: "The required probability is \\( 0.3840 \\) to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X > 5) = 0.3840 \\)",
      canonicalAnswer: "0.3840",
    },
  },
  {
    id: "y2po-061",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 61",
    difficulty: "Challenge",
    questionText: "A technical helpline receives calls at a constant average rate of \\( 6 \\) calls per \\( 10 \\)-minute period, with calls arriving singly and independently. State, with full justification, which standard distribution (binomial, Poisson, continuous uniform or Normal) should be used to model \\( X \\), the number of calls received in a given \\( 10 \\)-minute period, and hence find \\( P(X=4) \\) to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "distribution-selection", "justification", "single-probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rule out binomial, uniform and Normal.", workingLatex: "\\text{count of events, no fixed } n;\\ \\text{not a fixed interval value; discrete not continuous}", explanation: "We are counting occurrences over a continuous time interval, not a fixed number of trials, so binomial does not apply. Continuous uniform and Normal both model continuous quantities, but the number of calls is a non-negative integer (discrete), so neither fits." },
        { stepNumber: 2, description: "Justify the Poisson model.", workingLatex: "X \\sim \\mathrm{Po}(\\lambda),\\ \\lambda = 6", explanation: "Events (calls) occur singly, independently and at a constant average rate over the interval. These are exactly the Poisson conditions, so X ~ Po(6) with mean 6 per 10-minute period." },
        { stepNumber: 3, description: "Apply the Poisson probability formula.", workingLatex: "P(X=4) = \\dfrac{e^{-6}\\,6^{4}}{4!}", explanation: "For X ~ Po(\\lambda), P(X=k)=e^{-\\lambda}\\lambda^{k}/k!. Substitute \\lambda=6 and k=4." },
        { stepNumber: 4, description: "Evaluate the numerator and denominator.", workingLatex: "= \\dfrac{0.00247875\\times 1296}{24} = \\dfrac{3.212463}{24}", explanation: "Here e^{-6}=0.00247875, 6^{4}=1296 and 4!=24." },
        { stepNumber: 5, description: "Compute and round.", workingLatex: "= 0.133853\\ldots \\approx 0.1339", explanation: "Dividing gives 0.13385..., which rounds to 0.1339 to 4 decimal places." }
      ],
      finalAnswer: "\\( X\\sim\\mathrm{Po}(6)\\ \\text{(counts, single/independent/constant rate);}\\ P(X=4)\\approx 0.1339 \\)",
    },
  },
  {
    id: "y2po-062",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 62",
    difficulty: "Challenge",
    questionText: "Buses are scheduled to pass a stop punctually every \\( 15 \\) minutes. A passenger who does not know the timetable arrives at the stop at a random time, and \\( W \\) is the number of minutes she must wait for the next bus. State, with full justification, which standard distribution (binomial, Poisson, continuous uniform or Normal) best models \\( W \\), and hence find \\( P(W > 10) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["distribution-selection", "continuous-uniform", "justification", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rule out the discrete models.", workingLatex: "W \\text{ is a continuous time, not a count}", explanation: "Binomial and Poisson are both discrete (counts of trials or events). The waiting time W can take any value in an interval, so it is continuous and neither discrete model applies." },
        { stepNumber: 2, description: "Choose between continuous uniform and Normal, and justify.", workingLatex: "W \\sim U[0,15]", explanation: "Because she arrives at a random time and buses are evenly spaced every 15 minutes, every waiting time between 0 and 15 minutes is equally likely. This constant density over a bounded interval is the continuous uniform model, not the bell-shaped Normal (which would make middle waits more likely)." },
        { stepNumber: 3, description: "Use the uniform probability as a proportion of length.", workingLatex: "P(W > 10) = \\dfrac{15 - 10}{15 - 0} = \\dfrac{5}{15}", explanation: "For W ~ U[a,b], P(W>w) equals the length of the sub-interval above w divided by the total length (b-a)." },
        { stepNumber: 4, description: "Simplify.", workingLatex: "= \\dfrac{1}{3} \\approx 0.3333", explanation: "5/15 = 1/3 = 0.3333 to 4 decimal places." }
      ],
      finalAnswer: "\\( W\\sim U[0,15]\\ \\text{(random arrival, evenly spaced);}\\ P(W>10)=\\tfrac{1}{3}\\approx 0.3333 \\)",
    },
  },
  {
    id: "y2po-063",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 63",
    difficulty: "Challenge",
    questionText: "In a large batch of microchips, each chip is independently faulty with probability \\( 0.012 \\). A random sample of \\( 200 \\) chips is taken and \\( X \\) is the number that are faulty. (a) Explain why a Poisson approximation to the binomial distribution is valid here, and state the approximating distribution. (b) Use the Poisson approximation to estimate \\( P(X=3) \\), and find the absolute error compared with the exact binomial value \\( 0.2104 \\). Give probabilities to 4 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson-approximation", "binomial", "validity", "error"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "(a) Justify the approximation.", workingLatex: "n = 200 \\text{ large},\\ p = 0.012 \\text{ small}", explanation: "The Poisson approximation to the binomial is valid when n is large and p is small (so np is moderate). Here n=200 is large and p=0.012 is small, so the conditions hold." },
        { stepNumber: 2, description: "State the approximating distribution.", workingLatex: "\\lambda = np = 200 \\times 0.012 = 2.4,\\quad X \\approx \\mathrm{Po}(2.4)", explanation: "The Poisson approximation uses \\lambda=np. With np=2.4, X is approximately Po(2.4)." },
        { stepNumber: 3, description: "(b) Apply the Poisson formula.", workingLatex: "P(X=3) \\approx \\dfrac{e^{-2.4}\\,2.4^{3}}{3!}", explanation: "Substitute \\lambda=2.4 and k=3 into P(X=k)=e^{-\\lambda}\\lambda^{k}/k!." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "= \\dfrac{0.0907180\\times 13.824}{6} = \\dfrac{1.254086}{6} = 0.209014\\ldots \\approx 0.2090", explanation: "Here e^{-2.4}=0.0907180, 2.4^{3}=13.824 and 3!=6, giving 0.20905, i.e. 0.2090 to 4 d.p." },
        { stepNumber: 5, description: "Find the absolute error.", workingLatex: "|0.2104 - 0.2090| = 0.0014", explanation: "The exact binomial value is 0.2104; the approximation is 0.2090. The absolute error is |0.2104-0.2090|=0.0014, confirming the approximation is very accurate." }
      ],
      finalAnswer: "\\( X\\approx\\mathrm{Po}(2.4)\\ (n\\text{ large},\\,p\\text{ small});\\ P(X=3)\\approx 0.2090,\\ \\text{error}=0.0014 \\)",
    },
  },
  {
    id: "y2po-064",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 64",
    difficulty: "Challenge",
    questionText: "During the working day, the number of work emails an office worker receives, \\( X \\), is modelled by \\( X\\sim\\mathrm{Po}(3) \\), and the number of personal emails, \\( Y \\), by \\( Y\\sim\\mathrm{Po}(2) \\), with \\( X \\) and \\( Y \\) independent. Let \\( T = X + Y \\) be the total number of emails. Given that exactly \\( 4 \\) emails are received in total, find the probability that exactly \\( 1 \\) of them is a work email. Give your answer to 4 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sum-of-poissons", "conditional-probability", "binomial-split"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the distribution of the total.", workingLatex: "T = X + Y \\sim \\mathrm{Po}(3 + 2) = \\mathrm{Po}(5)", explanation: "The sum of independent Poisson variables is Poisson with parameter equal to the sum of the means, so T ~ Po(5)." },
        { stepNumber: 2, description: "Write the required conditional probability.", workingLatex: "P(X = 1 \\mid T = 4) = \\dfrac{P(X=1\\ \\cap\\ Y=3)}{P(T=4)}", explanation: "If the total is 4 and exactly 1 is a work email, then exactly 3 are personal, so the event {X=1, T=4} is {X=1, Y=3}." },
        { stepNumber: 3, description: "Use independence in the numerator.", workingLatex: "P(X=1)P(Y=3) = \\dfrac{e^{-3}3^{1}}{1!}\\cdot\\dfrac{e^{-2}2^{3}}{3!} = 0.149361\\times 0.180447", explanation: "By independence the joint probability factorises. P(X=1)=e^{-3}\\cdot3=0.149361 and P(Y=3)=e^{-2}\\cdot8/6=0.180447." },
        { stepNumber: 4, description: "Evaluate the denominator.", workingLatex: "P(T=4) = \\dfrac{e^{-5}5^{4}}{4!} = 0.175467", explanation: "For T ~ Po(5), P(T=4)=e^{-5}\\cdot625/24=0.175467." },
        { stepNumber: 5, description: "Divide (equivalently this is a Binomial(4, 3/5) split).", workingLatex: "\\dfrac{0.149361\\times 0.180447}{0.175467} = \\dfrac{0.026952}{0.175467} = 0.153600", explanation: "The result equals C(4,1)(3/5)^{1}(2/5)^{3}, the conditional split of the total into work emails with probability 3/(3+2)=0.6." },
        { stepNumber: 6, description: "Round.", workingLatex: "P(X=1 \\mid T=4) \\approx 0.1536", explanation: "The conditional probability is 0.1536 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(X=1 \\mid T=4) \\approx 0.1536 \\)",
      canonicalAnswer: "0.1536",
    },
  },
  {
    id: "y2po-065",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 65",
    difficulty: "Challenge",
    questionText: "Flaws occur singly and independently along a roll of fabric at a constant average rate, so that the number of flaws in a randomly chosen \\( 1 \\)-metre length, \\( X \\), follows \\( X\\sim\\mathrm{Po}(\\lambda) \\). It is observed that the probability a \\( 1 \\)-metre length contains no flaws is \\( 0.2 \\). Show that \\( \\lambda = -\\ln 0.2 \\), and hence find \\( \\lambda \\) to 4 decimal places.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "given-target-derivation", "show-that", "find-lambda"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the probability of zero flaws.", workingLatex: "P(X=0) = \\dfrac{e^{-\\lambda}\\lambda^{0}}{0!} = e^{-\\lambda}", explanation: "For X ~ Po(\\lambda), P(X=0)=e^{-\\lambda}\\lambda^{0}/0!=e^{-\\lambda} since \\lambda^{0}=1 and 0!=1." },
        { stepNumber: 2, description: "Set equal to the observed value.", workingLatex: "e^{-\\lambda} = 0.2", explanation: "The probability of no flaws in a 1-metre length is given as 0.2, so e^{-\\lambda}=0.2." },
        { stepNumber: 3, description: "Take natural logarithms to derive the target.", workingLatex: "-\\lambda = \\ln 0.2 \\implies \\lambda = -\\ln 0.2", explanation: "Taking ln of both sides gives -\\lambda=\\ln 0.2, so \\lambda=-\\ln 0.2 as required." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "\\lambda = -\\ln 0.2 = 1.609437\\ldots \\approx 1.6094", explanation: "Since \\ln 0.2=-1.609437..., \\lambda=1.609437..., i.e. 1.6094 to 4 decimal places." }
      ],
      finalAnswer: "\\( \\lambda = -\\ln 0.2 \\approx 1.6094 \\)",
      canonicalAnswer: "1.6094",
    },
  },
  {
    id: "y2po-066",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 66",
    difficulty: "Challenge",
    questionText: "Faults along an undersea communications cable are believed to occur at a mean rate of \\( 0.8 \\) per \\( 100 \\) m. An engineer models the number of faults in a \\( 250 \\) m section, \\( X \\), by \\( X\\sim\\mathrm{Po}(2) \\). (a) Using this model, find \\( P(X\\geq 2) \\) to 4 decimal places. (b) In practice faults tend to occur in clusters where the cable has been damaged. State the Poisson assumption this violates, and explain its likely effect on the true value of \\( P(X\\geq 2) \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "critique", "clustering", "independence", "at-least-two"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "(a) Confirm the parameter.", workingLatex: "\\lambda = 0.8 \\times \\dfrac{250}{100} = 2", explanation: "The rate is 0.8 faults per 100 m, so over 250 m the mean is 0.8\\times2.5=2, consistent with X ~ Po(2)." },
        { stepNumber: 2, description: "Use the complement for 'at least 2'.", workingLatex: "P(X\\geq 2) = 1 - P(X=0) - P(X=1)", explanation: "It is easier to subtract the two small cases from 1 than to sum infinitely many terms." },
        { stepNumber: 3, description: "Evaluate the two terms.", workingLatex: "P(X=0) = e^{-2} = 0.135335,\\quad P(X=1) = 2e^{-2} = 0.270671", explanation: "P(X=0)=e^{-2}=0.135335 and P(X=1)=e^{-2}\\cdot2=0.270671." },
        { stepNumber: 4, description: "Combine and round.", workingLatex: "P(X\\geq 2) = 1 - 0.135335 - 0.270671 = 0.593994 \\approx 0.5940", explanation: "Subtracting gives 0.59399..., i.e. 0.5940 to 4 decimal places." },
        { stepNumber: 5, description: "(b) Identify the violated assumption.", workingLatex: "\\text{independence (events occur singly/independently) fails}", explanation: "Clustering means one fault makes nearby faults more likely, so faults are not independent and do not occur singly — the Poisson independence assumption is violated." },
        { stepNumber: 6, description: "(b) Explain the effect on the probability.", workingLatex: "\\text{Var} > \\text{mean (over-dispersion)} \\Rightarrow \\text{more } 0\\text{'s and more large counts}", explanation: "Clustering makes the data over-dispersed (variance exceeds the mean), piling extra probability at 0 faults (over-dispersion increases P(X=0) more than it thickens the tail). The extra mass at 0 outweighs the heavier tail, so the true P(X\\geq 2) would tend to be lower than the Poisson value 0.5940." }
      ],
      finalAnswer: "\\( \\text{(a) } P(X\\geq 2)\\approx 0.5940;\\ \\text{(b) independence fails (clustering) so true } P(X\\geq 2) \\text{ tends to be lower.} \\)",
    },
  },
  {
    id: "y2po-067",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 67",
    difficulty: "Challenge",
    questionText: "A busy customer-service inbox receives emails singly and independently at a constant average rate of \\( 20 \\) per hour. The supervisor wants to model \\( X \\), the number of emails received in a randomly chosen hour. (a) State, with justification, which standard distribution should be used, and explain why a binomial model is not appropriate here. (b) Find \\( P(X \\leq 15) \\), given that \\( \\sum_{k=0}^{15} \\dfrac{e^{-20}20^{k}}{k!} = 0.1565 \\), and interpret this probability in context.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["distribution-selection", "poisson", "justification", "interpretation", "cumulative"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "(a) Identify the model and justify.", workingLatex: "X \\sim \\mathrm{Po}(20)", explanation: "Emails arrive singly, independently and at a constant average rate over time, which are precisely the Poisson conditions, so X ~ Po(20) with \\lambda=20 per hour." },
        { stepNumber: 2, description: "(a) Explain why binomial is inappropriate.", workingLatex: "\\text{no fixed } n,\\ \\text{no per-trial } p", explanation: "A binomial model needs a fixed number of trials n and a constant per-trial success probability p. Here there is no fixed number of opportunities and no natural 'trial' — we simply count events over a continuous interval — so the binomial model does not apply." },
        { stepNumber: 3, description: "(b) State the required cumulative probability.", workingLatex: "P(X \\leq 15) = \\sum_{k=0}^{15} \\dfrac{e^{-20}20^{k}}{k!} = 0.1565", explanation: "Summing the Poisson probabilities for k=0 to 15 with \\lambda=20 gives the given value 0.1565 to 4 decimal places." },
        { stepNumber: 4, description: "(b) Interpret in context.", workingLatex: "P(X \\leq 15) \\approx 0.1565", explanation: "There is about a 15.65% chance that 15 or fewer emails arrive in a given hour — i.e. a fairly quiet hour (below the mean of 20) occurs roughly once in every six or seven hours." }
      ],
      finalAnswer: "\\( X\\sim\\mathrm{Po}(20)\\ \\text{(no fixed }n\\text{, so not binomial);}\\ P(X\\leq 15)\\approx 0.1565 \\)",
    },
  },
  {
    id: "y2po-068",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 68",
    difficulty: "Challenge",
    questionText: "Two independent tills, A and B, serve customers. The numbers served per hour are modelled by \\( A\\sim\\mathrm{Po}(4) \\) and \\( B\\sim\\mathrm{Po}(6) \\). In a particular hour a total of \\( 8 \\) customers are served between the two tills. Find the probability that exactly \\( 5 \\) of these \\( 8 \\) were served by till A. Give your answer to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["sum-of-poissons", "conditional-probability", "binomial-split"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the total distribution.", workingLatex: "T = A + B \\sim \\mathrm{Po}(4 + 6) = \\mathrm{Po}(10)", explanation: "The sum of independent Poisson variables is Poisson with the summed mean, so the hourly total T ~ Po(10)." },
        { stepNumber: 2, description: "Recognise the conditional split is binomial.", workingLatex: "A \\mid (T = 8) \\sim B\\!\\left(8,\\ \\dfrac{4}{4+6}\\right) = B(8, 0.4)", explanation: "Given a fixed total from two independent Poissons, each of the 8 customers is independently 'from A' with probability \\lambda_A/(\\lambda_A+\\lambda_B)=4/10=0.4. So the number from A is Binomial(8, 0.4)." },
        { stepNumber: 3, description: "Apply the binomial formula.", workingLatex: "P(A = 5 \\mid T = 8) = \\binom{8}{5}(0.4)^{5}(0.6)^{3}", explanation: "Substitute n=8, r=5, p=0.4 into the binomial probability formula." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "= 56 \\times 0.01024 \\times 0.216 = 0.123863", explanation: "Here C(8,5)=56, (0.4)^{5}=0.01024 and (0.6)^{3}=0.216." },
        { stepNumber: 5, description: "Round.", workingLatex: "\\approx 0.1239", explanation: "The probability is 0.12386..., i.e. 0.1239 to 4 decimal places." }
      ],
      finalAnswer: "\\( P(A=5 \\mid T=8) \\approx 0.1239 \\)",
      canonicalAnswer: "0.1239",
    },
  },
  {
    id: "y2po-069",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 69",
    difficulty: "Challenge",
    questionText: "A vaccine produces a particular mild side-effect in \\( 0.6\\% \\) of patients, independently. A clinic administers the vaccine to \\( 500 \\) patients and \\( X \\) is the number who report the side-effect. (a) Justify a Poisson approximation and state its parameter. (b) Use the Poisson approximation to estimate \\( P(X \\leq 2) \\), and state the absolute error given that the exact binomial value is \\( 0.4225 \\). Give probabilities to 4 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson-approximation", "binomial", "validity", "error", "cumulative"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "(a) Justify the approximation.", workingLatex: "n = 500 \\text{ large},\\ p = 0.006 \\text{ small}", explanation: "With n=500 large and p=0.006 small, the Poisson approximation to the binomial is valid, using \\lambda=np." },
        { stepNumber: 2, description: "(a) State the parameter.", workingLatex: "\\lambda = np = 500 \\times 0.006 = 3,\\quad X \\approx \\mathrm{Po}(3)", explanation: "np=3, so X is approximately Po(3)." },
        { stepNumber: 3, description: "(b) Write the cumulative probability.", workingLatex: "P(X \\leq 2) \\approx e^{-3}\\!\\left(1 + 3 + \\dfrac{3^{2}}{2!}\\right)", explanation: "P(X\\leq2)=P(X=0)+P(X=1)+P(X=2)=e^{-3}(1+\\lambda+\\lambda^{2}/2) with \\lambda=3." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "= e^{-3}(1 + 3 + 4.5) = 0.0497871 \\times 8.5 = 0.423190", explanation: "Here e^{-3}=0.0497871 and 1+3+4.5=8.5, giving 0.423190." },
        { stepNumber: 5, description: "Round the approximation.", workingLatex: "P(X \\leq 2) \\approx 0.4232", explanation: "0.42319... rounds to 0.4232 to 4 decimal places." },
        { stepNumber: 6, description: "Find the absolute error.", workingLatex: "|0.4225 - 0.4232| = 0.0007", explanation: "Comparing with the exact binomial value 0.4225, the absolute error is 0.0007, showing the approximation is highly accurate." }
      ],
      finalAnswer: "\\( X\\approx\\mathrm{Po}(3)\\ (n\\text{ large},\\,p\\text{ small});\\ P(X\\leq 2)\\approx 0.4232,\\ \\text{error}=0.0007 \\)",
    },
  },
  {
    id: "y2po-070",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 70",
    difficulty: "Challenge",
    questionText: "Over a full trading day, a small shop serves customers at an overall average rate of \\( 15 \\) per hour, and a manager models the number served in any one hour by \\( X\\sim\\mathrm{Po}(15) \\). (a) Using this model, find \\( P(X = 12) \\) to 4 decimal places. (b) The shop has a pronounced lunchtime rush and quiet mid-afternoon periods. State which Poisson assumption this casts doubt on, and explain why applying \\( X\\sim\\mathrm{Po}(15) \\) to a single specific hour (such as 1 pm) may be unreliable.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "critique", "constant-rate", "modelling", "single-probability"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "(a) Apply the Poisson formula.", workingLatex: "P(X = 12) = \\dfrac{e^{-15}15^{12}}{12!}", explanation: "Substitute \\lambda=15 and k=12 into P(X=k)=e^{-\\lambda}\\lambda^{k}/k!." },
        { stepNumber: 2, description: "Evaluate the components.", workingLatex: "e^{-15} = 3.05902\\times10^{-7},\\ 15^{12} = 1.29746\\times10^{14},\\ 12! = 479001600", explanation: "These are the three factors needed: e^{-15}, 15^{12} and 12!." },
        { stepNumber: 3, description: "Combine and round.", workingLatex: "P(X = 12) = 0.082859\\ldots \\approx 0.0829", explanation: "Evaluating gives 0.08287..., i.e. 0.0829 to 4 decimal places." },
        { stepNumber: 4, description: "(b) Identify the doubtful assumption.", workingLatex: "\\text{constant average rate fails}", explanation: "A lunchtime rush and quiet afternoons mean the average arrival rate changes during the day, so the Poisson 'constant rate' assumption does not hold across the whole day." },
        { stepNumber: 5, description: "(b) Explain the unreliability.", workingLatex: "\\lambda_{1\\text{pm}} > 15 > \\lambda_{\\text{afternoon}}", explanation: "The figure 15 is a day-long average. A specific hour like 1 pm has a genuinely higher rate, so Po(15) would understate busy-hour counts (and overstate quiet-hour counts). A reliable model would use an hour-specific \\lambda rather than the overall average." }
      ],
      finalAnswer: "\\( \\text{(a) } P(X=12)\\approx 0.0829;\\ \\text{(b) constant-rate fails, so Po(15) is unreliable for a specific hour.} \\)",
    },
  },
  {
    id: "y2po-071",
    topicRef: "y2po",
    topicTitle: "The Poisson Distribution 71",
    difficulty: "Challenge",
    questionText: "A random variable \\( X\\sim\\mathrm{Po}(\\lambda) \\). (a) Show that \\( \\dfrac{P(X = k+1)}{P(X = k)} = \\dfrac{\\lambda}{k+1} \\). (b) It is given that \\( P(X = 2) = P(X = 3) \\). Use the result in part (a) to find \\( \\lambda \\), and hence find \\( P(X = 3) \\) to 4 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["poisson", "show-that", "ratio-of-terms", "find-lambda"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "(a) Write the two consecutive probabilities.", workingLatex: "P(X=k+1) = \\dfrac{e^{-\\lambda}\\lambda^{k+1}}{(k+1)!},\\quad P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^{k}}{k!}", explanation: "Both come from the Poisson probability formula P(X=r)=e^{-\\lambda}\\lambda^{r}/r!." },
        { stepNumber: 2, description: "(a) Form the ratio and simplify.", workingLatex: "\\dfrac{P(X=k+1)}{P(X=k)} = \\dfrac{\\lambda^{k+1}/(k+1)!}{\\lambda^{k}/k!} = \\lambda\\cdot\\dfrac{k!}{(k+1)!} = \\dfrac{\\lambda}{k+1}", explanation: "The e^{-\\lambda} factors cancel; \\lambda^{k+1}/\\lambda^{k}=\\lambda and k!/(k+1)!=1/(k+1), giving \\lambda/(k+1) as required." },
        { stepNumber: 3, description: "(b) Apply the equal-probability condition with k=2.", workingLatex: "\\dfrac{P(X=3)}{P(X=2)} = \\dfrac{\\lambda}{3} = 1", explanation: "Since P(X=2)=P(X=3), their ratio is 1. Using part (a) with k=2 gives \\lambda/3=1." },
        { stepNumber: 4, description: "(b) Solve for \\( \\lambda \\).", workingLatex: "\\lambda = 3", explanation: "Rearranging \\lambda/3=1 gives \\lambda=3." },
        { stepNumber: 5, description: "(b) Compute \\( P(X=3) \\).", workingLatex: "P(X = 3) = \\dfrac{e^{-3}3^{3}}{3!} = \\dfrac{0.0497871\\times 27}{6}", explanation: "Substitute \\lambda=3 and k=3 into the Poisson formula; e^{-3}=0.0497871, 3^{3}=27, 3!=6." },
        { stepNumber: 6, description: "(b) Evaluate and round.", workingLatex: "= \\dfrac{1.344251}{6} = 0.224042\\ldots \\approx 0.2240", explanation: "Dividing gives 0.22404..., i.e. 0.2240 to 4 decimal places." }
      ],
      finalAnswer: "\\( \\lambda = 3,\\quad P(X=3) \\approx 0.2240 \\)",
      canonicalAnswer: "0.2240",
    },
  },
];
