import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § Hypothesis Test — Correlation
 * Ref: y2hc
 * 71 questions. No diagrams.
 */
export const questions: Question[] = [
  {
    id: "y2hc-001",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 01",
    difficulty: "Foundation",
    questionText: "A scientist collects bivariate data on \\( n \\) pairs of observations and wants to test whether there is correlation between the two variables. Using the population correlation coefficient \\( \\rho \\), write down the null hypothesis \\( H_0 \\) and the alternative hypothesis \\( H_1 \\) for this test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "hypotheses", "two-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the null hypothesis of no correlation.", workingLatex: "H_0: \\rho = 0", explanation: "The null hypothesis assumes there is no correlation in the population, so the population correlation coefficient is \\( \\rho = 0 \\)." },
        { stepNumber: 2, description: "State the alternative hypothesis matching 'correlation' in either direction.", workingLatex: "H_1: \\rho \\neq 0", explanation: "The scientist only tests for correlation, not a particular direction, so the alternative is two-tailed, \\( \\rho \\neq 0 \\)." }
      ],
      finalAnswer: "\\( H_0: \\rho = 0,\\ \\ H_1: \\rho \\neq 0 \\)",
    },
  },
  {
    id: "y2hc-002",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 02",
    difficulty: "Foundation",
    questionText: "A researcher believes that as the number of hours of revision increases, exam marks tend to increase, suggesting positive correlation. Using the population correlation coefficient \\( \\rho \\), write down the null hypothesis \\( H_0 \\) and the alternative hypothesis \\( H_1 \\) for a test of this belief.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "hypotheses", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the null hypothesis of no correlation.", workingLatex: "H_0: \\rho = 0", explanation: "The null hypothesis assumes no correlation in the population, so \\( \\rho = 0 \\)." },
        { stepNumber: 2, description: "State the alternative hypothesis matching 'positive correlation'.", workingLatex: "H_1: \\rho > 0", explanation: "The researcher is testing specifically for positive correlation, so the alternative is one-tailed (upper), \\( \\rho > 0 \\)." }
      ],
      finalAnswer: "\\( H_0: \\rho = 0,\\ \\ H_1: \\rho > 0 \\)",
    },
  },
  {
    id: "y2hc-003",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 03",
    difficulty: "Foundation",
    questionText: "An economist suspects that as the price of an item increases, the quantity sold tends to decrease, suggesting negative correlation. Using the population correlation coefficient \\( \\rho \\), write down the null hypothesis \\( H_0 \\) and the alternative hypothesis \\( H_1 \\) for a test of this suspicion.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "hypotheses", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the null hypothesis of no correlation.", workingLatex: "H_0: \\rho = 0", explanation: "The null hypothesis assumes no correlation in the population, so \\( \\rho = 0 \\)." },
        { stepNumber: 2, description: "State the alternative hypothesis matching 'negative correlation'.", workingLatex: "H_1: \\rho < 0", explanation: "The economist is testing specifically for negative correlation, so the alternative is one-tailed (lower), \\( \\rho < 0 \\)." }
      ],
      finalAnswer: "\\( H_0: \\rho = 0,\\ \\ H_1: \\rho < 0 \\)",
    },
  },
  {
    id: "y2hc-004",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 04",
    difficulty: "Foundation",
    questionText: "A student investigates whether there is some correlation between daily temperature and ice-cream sales. State whether a hypothesis test of this claim should be one-tailed or two-tailed, and write down the alternative hypothesis \\( H_1 \\) in terms of \\( \\rho \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "identify tail"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Read the wording to identify the tail.", workingLatex: "\\text{'some correlation'} \\Rightarrow \\text{two-tailed}", explanation: "The phrase 'some correlation' does not specify a direction, so the test is two-tailed." },
        { stepNumber: 2, description: "Write the matching alternative hypothesis.", workingLatex: "H_1: \\rho \\neq 0", explanation: "A two-tailed test for correlation uses the alternative \\( \\rho \\neq 0 \\)." }
      ],
      finalAnswer: "\\( \\text{Two-tailed; } H_1: \\rho \\neq 0 \\)",
    },
  },
  {
    id: "y2hc-005",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 05",
    difficulty: "Foundation",
    questionText: "A gardener wants to test whether there is positive correlation between the amount of fertiliser used and plant height. State whether a hypothesis test of this claim should be one-tailed or two-tailed, and write down the alternative hypothesis \\( H_1 \\) in terms of \\( \\rho \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "identify tail"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Read the wording to identify the tail.", workingLatex: "\\text{'positive correlation'} \\Rightarrow \\text{one-tailed}", explanation: "The phrase 'positive correlation' specifies a direction, so the test is one-tailed (upper)." },
        { stepNumber: 2, description: "Write the matching alternative hypothesis.", workingLatex: "H_1: \\rho > 0", explanation: "A one-tailed test for positive correlation uses the alternative \\( \\rho > 0 \\)." }
      ],
      finalAnswer: "\\( \\text{One-tailed; } H_1: \\rho > 0 \\)",
    },
  },
  {
    id: "y2hc-006",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 06",
    difficulty: "Foundation",
    questionText: "A test uses \\( H_0: \\rho = 0 \\) and \\( H_1: \\rho > 0 \\) at the \\( 5\\% \\) significance level. The sample gives a PMCC of \\( r = 0.62 \\) and the critical value from tables is \\( 0.497 \\). Compare \\( r \\) with the critical value and state the conclusion of the test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "decision", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the observed PMCC with the critical value.", workingLatex: "r = 0.62 > 0.497", explanation: "For an upper-tailed test we reject \\( H_0 \\) when the observed \\( r \\) is greater than the positive critical value. Here \\( 0.62 > 0.497 \\)." },
        { stepNumber: 2, description: "State the decision and conclusion in context.", workingLatex: "\\text{Reject } H_0", explanation: "Since \\( r \\) exceeds the critical value, we reject \\( H_0 \\): there is evidence of positive correlation." }
      ],
      finalAnswer: "\\( r = 0.62 > 0.497,\\ \\text{so reject } H_0;\\ \\text{evidence of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-007",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 07",
    difficulty: "Foundation",
    questionText: "A test uses \\( H_0: \\rho = 0 \\) and \\( H_1: \\rho < 0 \\) at the \\( 5\\% \\) significance level. The sample gives a PMCC of \\( r = -0.58 \\) and the critical value from tables is \\( -0.532 \\). Compare \\( r \\) with the critical value and state the conclusion of the test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "decision", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the observed PMCC with the critical value.", workingLatex: "r = -0.58 < -0.532", explanation: "For a lower-tailed test we reject \\( H_0 \\) when the observed \\( r \\) is less than the negative critical value. Here \\( -0.58 < -0.532 \\)." },
        { stepNumber: 2, description: "State the decision and conclusion in context.", workingLatex: "\\text{Reject } H_0", explanation: "Since \\( r \\) is more negative than the critical value, we reject \\( H_0 \\): there is evidence of negative correlation." }
      ],
      finalAnswer: "\\( r = -0.58 < -0.532,\\ \\text{so reject } H_0;\\ \\text{evidence of negative correlation.} \\)",
    },
  },
  {
    id: "y2hc-008",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 08",
    difficulty: "Foundation",
    questionText: "A test uses \\( H_0: \\rho = 0 \\) and \\( H_1: \\rho > 0 \\) at the \\( 5\\% \\) significance level. The sample gives a PMCC of \\( r = 0.41 \\) and the critical value from tables is \\( 0.549 \\). Compare \\( r \\) with the critical value and state the conclusion of the test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "decision", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the observed PMCC with the critical value.", workingLatex: "r = 0.41 < 0.549", explanation: "For an upper-tailed test we reject \\( H_0 \\) only when \\( r \\) exceeds the critical value. Here \\( 0.41 < 0.549 \\), so it does not." },
        { stepNumber: 2, description: "State the decision and conclusion in context.", workingLatex: "\\text{Do not reject } H_0", explanation: "Since \\( r \\) does not reach the critical value, we do not reject \\( H_0 \\): there is insufficient evidence of positive correlation." }
      ],
      finalAnswer: "\\( r = 0.41 < 0.549,\\ \\text{so do not reject } H_0;\\ \\text{insufficient evidence of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-009",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 09",
    difficulty: "Foundation",
    questionText: "A two-tailed test uses \\( H_0: \\rho = 0 \\) and \\( H_1: \\rho \\neq 0 \\). The sample gives a PMCC of \\( r = 0.71 \\) and the critical value from tables is \\( 0.632 \\). By comparing \\( |r| \\) with the critical value, state the conclusion of the test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "decision", "two-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the magnitude of the observed PMCC with the critical value.", workingLatex: "|r| = 0.71 > 0.632", explanation: "For a two-tailed test we compare the size of \\( r \\) with the (positive) critical value. Here \\( 0.71 > 0.632 \\)." },
        { stepNumber: 2, description: "State the decision and conclusion in context.", workingLatex: "\\text{Reject } H_0", explanation: "Since \\( |r| \\) exceeds the critical value, we reject \\( H_0 \\): there is evidence of correlation between the variables." }
      ],
      finalAnswer: "\\( |r| = 0.71 > 0.632,\\ \\text{so reject } H_0;\\ \\text{evidence of correlation.} \\)",
    },
  },
  {
    id: "y2hc-010",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 10",
    difficulty: "Foundation",
    questionText: "A two-tailed test uses \\( H_0: \\rho = 0 \\) and \\( H_1: \\rho \\neq 0 \\). The sample gives a PMCC of \\( r = -0.39 \\) and the critical value from tables is \\( 0.468 \\). By comparing \\( |r| \\) with the critical value, state the conclusion of the test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "decision", "two-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the magnitude of the observed PMCC with the critical value.", workingLatex: "|r| = 0.39 < 0.468", explanation: "For a two-tailed test we compare the size of \\( r \\) with the critical value. Here \\( |-0.39| = 0.39 < 0.468 \\)." },
        { stepNumber: 2, description: "State the decision and conclusion in context.", workingLatex: "\\text{Do not reject } H_0", explanation: "Since \\( |r| \\) does not reach the critical value, we do not reject \\( H_0 \\): there is insufficient evidence of correlation." }
      ],
      finalAnswer: "\\( |r| = 0.39 < 0.468,\\ \\text{so do not reject } H_0;\\ \\text{insufficient evidence of correlation.} \\)",
    },
  },
  {
    id: "y2hc-011",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 11",
    difficulty: "Foundation",
    questionText: "A test uses \\( H_0: \\rho = 0 \\) and \\( H_1: \\rho < 0 \\) at the \\( 5\\% \\) significance level. The sample gives a PMCC of \\( r = -0.44 \\) and the critical value from tables is \\( -0.521 \\). Compare \\( r \\) with the critical value and state the conclusion of the test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "decision", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the observed PMCC with the critical value.", workingLatex: "r = -0.44 > -0.521", explanation: "For a lower-tailed test we reject \\( H_0 \\) only when \\( r \\) is less than the negative critical value. Here \\( -0.44 > -0.521 \\), so it is not in the critical region." },
        { stepNumber: 2, description: "State the decision and conclusion in context.", workingLatex: "\\text{Do not reject } H_0", explanation: "Since \\( r \\) is not below the critical value, we do not reject \\( H_0 \\): there is insufficient evidence of negative correlation." }
      ],
      finalAnswer: "\\( r = -0.44 > -0.521,\\ \\text{so do not reject } H_0;\\ \\text{insufficient evidence of negative correlation.} \\)",
    },
  },
  {
    id: "y2hc-012",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 012",
    difficulty: "Foundation",
    questionText: "A test of \\( H_0: \\rho = 0 \\) against \\( H_1: \\rho > 0 \\) uses the \\( 5\\% \\) significance level. For the sample size used, the critical value is given as \\( 0.4973 \\). The observed product moment correlation coefficient is \\( r = 0.582 \\). State whether the result is significant and which hypothesis is accepted.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "compare with critical value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the observed \\( r \\) with the given critical value.", workingLatex: "r = 0.582 > 0.4973", explanation: "For a one-tailed upper test we compare \\( r \\) directly with the critical value; the observation is more extreme because it is larger." },
        { stepNumber: 2, description: "State the decision and conclusion.", workingLatex: "\\text{Significant: reject } H_0 \\text{, accept } H_1", explanation: "Since \\( r \\) exceeds the critical value, there is sufficient evidence at the \\( 5\\% \\) level to reject \\( H_0 \\) in favour of \\( H_1: \\rho > 0 \\)." }
      ],
      finalAnswer: "\\( r = 0.582 > 0.4973 \\Rightarrow \\text{reject } H_0 \\text{; accept } H_1: \\rho > 0. \\)",
    },
  },
  {
    id: "y2hc-013",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 013",
    difficulty: "Foundation",
    questionText: "A test of \\( H_0: \\rho = 0 \\) against \\( H_1: \\rho > 0 \\) is carried out at the \\( 1\\% \\) significance level. For the sample size used, the critical value is given as \\( 0.6581 \\). The observed product moment correlation coefficient is \\( r = 0.514 \\). State whether the result is significant and which hypothesis is retained.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "not significant"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the observed \\( r \\) with the given critical value.", workingLatex: "r = 0.514 < 0.6581", explanation: "For this upper-tail test the observation is significant only if it reaches the critical value; here \\( r \\) is smaller." },
        { stepNumber: 2, description: "State the decision and conclusion.", workingLatex: "\\text{Not significant: do not reject } H_0", explanation: "Since \\( r \\) does not exceed the critical value, there is insufficient evidence at the \\( 1\\% \\) level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( r = 0.514 < 0.6581 \\Rightarrow \\text{do not reject } H_0. \\)",
    },
  },
  {
    id: "y2hc-014",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 014",
    difficulty: "Foundation",
    questionText: "A test of \\( H_0: \\rho = 0 \\) against \\( H_1: \\rho < 0 \\) uses the \\( 5\\% \\) significance level. For the sample size used, the critical value is given as \\( -0.5494 \\). The observed product moment correlation coefficient is \\( r = -0.612 \\). State whether the result is significant and which hypothesis is accepted.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "negative correlation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the observed \\( r \\) with the given negative critical value.", workingLatex: "r = -0.612 < -0.5494", explanation: "For a lower-tail test the observation is more extreme when it is more negative, so we check whether \\( r \\) is below the critical value." },
        { stepNumber: 2, description: "State the decision and conclusion.", workingLatex: "\\text{Significant: reject } H_0 \\text{, accept } H_1", explanation: "Since \\( r \\) is more negative than the critical value, there is sufficient evidence at the \\( 5\\% \\) level to reject \\( H_0 \\) in favour of \\( H_1: \\rho < 0 \\)." }
      ],
      finalAnswer: "\\( r = -0.612 < -0.5494 \\Rightarrow \\text{reject } H_0 \\text{; accept } H_1: \\rho < 0. \\)",
    },
  },
  {
    id: "y2hc-015",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 015",
    difficulty: "Foundation",
    questionText: "A test of \\( H_0: \\rho = 0 \\) against \\( H_1: \\rho < 0 \\) is carried out at the \\( 2.5\\% \\) significance level. For the sample size used, the critical value is given as \\( -0.6319 \\). The observed product moment correlation coefficient is \\( r = -0.488 \\). State whether the result is significant and which hypothesis is retained.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "negative correlation", "not significant"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the observed \\( r \\) with the given negative critical value.", workingLatex: "r = -0.488 > -0.6319", explanation: "For a lower-tail test the observation is significant only if it is below (more negative than) the critical value; here \\( r \\) lies above it." },
        { stepNumber: 2, description: "State the decision and conclusion.", workingLatex: "\\text{Not significant: do not reject } H_0", explanation: "Since \\( r \\) is not below the critical value, there is insufficient evidence at the \\( 2.5\\% \\) level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( r = -0.488 > -0.6319 \\Rightarrow \\text{do not reject } H_0. \\)",
    },
  },
  {
    id: "y2hc-016",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 016",
    difficulty: "Foundation",
    questionText: "A test of \\( H_0: \\rho = 0 \\) against \\( H_1: \\rho \\ne 0 \\) uses the \\( 5\\% \\) significance level. For the sample size used, the critical value is given as \\( 0.6664 \\). The observed product moment correlation coefficient is \\( r = -0.701 \\). By comparing \\( |r| \\) with the critical value, state whether the result is significant.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "modulus comparison"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Take the modulus of the observed \\( r \\).", workingLatex: "|r| = |-0.701| = 0.701", explanation: "For a two-tailed test the sign of \\( r \\) is not what matters; we compare its size with the positive critical value." },
        { stepNumber: 2, description: "Compare \\( |r| \\) with the given critical value and conclude.", workingLatex: "|r| = 0.701 > 0.6664 \\Rightarrow \\text{reject } H_0", explanation: "Since \\( |r| \\) exceeds the critical value, there is sufficient evidence at the \\( 5\\% \\) level to reject \\( H_0 \\) in favour of \\( H_1: \\rho \\ne 0 \\)." }
      ],
      finalAnswer: "\\( |r| = 0.701 > 0.6664 \\Rightarrow \\text{reject } H_0 \\text{; accept } H_1: \\rho \\ne 0. \\)",
    },
  },
  {
    id: "y2hc-017",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 017",
    difficulty: "Foundation",
    questionText: "A test of \\( H_0: \\rho = 0 \\) against \\( H_1: \\rho \\ne 0 \\) is carried out at the \\( 2\\% \\) significance level. For the sample size used, the critical value is given as \\( 0.7155 \\). The observed product moment correlation coefficient is \\( r = 0.642 \\). By comparing \\( |r| \\) with the critical value, state whether the result is significant.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "modulus comparison", "not significant"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Take the modulus of the observed \\( r \\).", workingLatex: "|r| = |0.642| = 0.642", explanation: "For a two-tailed test we compare the size of \\( r \\) with the positive critical value, ignoring its sign." },
        { stepNumber: 2, description: "Compare \\( |r| \\) with the given critical value and conclude.", workingLatex: "|r| = 0.642 < 0.7155 \\Rightarrow \\text{do not reject } H_0", explanation: "Since \\( |r| \\) does not reach the critical value, there is insufficient evidence at the \\( 2\\% \\) level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( |r| = 0.642 < 0.7155 \\Rightarrow \\text{do not reject } H_0. \\)",
    },
  },
  {
    id: "y2hc-018",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 018",
    difficulty: "Foundation",
    questionText: "For a set of bivariate data the product moment correlation coefficient is found to be \\( r = 0.03 \\). State what this value suggests about the linear correlation between the two variables.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "interpretation", "r near zero"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note that \\( r \\) is very close to zero.", workingLatex: "r = 0.03 \\approx 0", explanation: "The product moment correlation coefficient lies between \\( -1 \\) and \\( 1 \\), and a value near \\( 0 \\) indicates the absence of a clear linear trend." },
        { stepNumber: 2, description: "Interpret the value in context.", workingLatex: "\\text{little or no linear correlation}", explanation: "An \\( r \\) close to \\( 0 \\) suggests there is little or no linear correlation between the two variables." }
      ],
      finalAnswer: "\\( r = 0.03 \\approx 0 \\Rightarrow \\text{little or no linear correlation.} \\)",
    },
  },
  {
    id: "y2hc-019",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 019",
    difficulty: "Foundation",
    questionText: "For a set of bivariate data the product moment correlation coefficient is found to be \\( r = 0.98 \\). State what this value suggests about the linear correlation between the two variables.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "interpretation", "r near plus one"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note that \\( r \\) is close to \\( +1 \\).", workingLatex: "r = 0.98 \\approx 1", explanation: "Values of \\( r \\) near \\( +1 \\) indicate that the points lie close to a straight line of positive gradient." },
        { stepNumber: 2, description: "Interpret the value in context.", workingLatex: "\\text{strong positive linear correlation}", explanation: "An \\( r \\) close to \\( +1 \\) suggests a strong positive linear correlation between the two variables." }
      ],
      finalAnswer: "\\( r = 0.98 \\approx 1 \\Rightarrow \\text{strong positive linear correlation.} \\)",
    },
  },
  {
    id: "y2hc-020",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 020",
    difficulty: "Foundation",
    questionText: "For a set of bivariate data the product moment correlation coefficient is found to be \\( r = -0.96 \\). State what this value suggests about the linear correlation between the two variables.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "interpretation", "r near minus one"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note that \\( r \\) is close to \\( -1 \\).", workingLatex: "r = -0.96 \\approx -1", explanation: "Values of \\( r \\) near \\( -1 \\) indicate that the points lie close to a straight line of negative gradient." },
        { stepNumber: 2, description: "Interpret the value in context.", workingLatex: "\\text{strong negative linear correlation}", explanation: "An \\( r \\) close to \\( -1 \\) suggests a strong negative linear correlation between the two variables." }
      ],
      finalAnswer: "\\( r = -0.96 \\approx -1 \\Rightarrow \\text{strong negative linear correlation.} \\)",
    },
  },
  {
    id: "y2hc-021",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 021",
    difficulty: "Foundation",
    questionText: "A one-tailed test of \\( H_0: \\rho = 0 \\) against \\( H_1: \\rho > 0 \\) is to be carried out at the \\( 5\\% \\) significance level. From a table for the relevant sample size, the values \\( 0.4973 \\) (for \\( 5\\% \\) one-tailed) and \\( 0.5760 \\) (for \\( 2.5\\% \\) one-tailed) are given. State which critical value should be used for this test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "select critical value", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Match the significance level and tail to the table column.", workingLatex: "5\\% \\text{ one-tailed}", explanation: "The test is one-tailed at the \\( 5\\% \\) level, so we read the value listed under the \\( 5\\% \\) one-tailed column, not the \\( 2.5\\% \\) one." },
        { stepNumber: 2, description: "Write down the correct critical value.", workingLatex: "\\text{critical value} = 0.4973", explanation: "The value \\( 0.4973 \\) corresponds to the \\( 5\\% \\) one-tailed level, so this is the critical value to use." }
      ],
      finalAnswer: "\\( \\text{Use the critical value } 0.4973. \\)",
    },
  },
  {
    id: "y2hc-022",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 022",
    difficulty: "Foundation",
    questionText: "A two-tailed test of \\( H_0: \\rho = 0 \\) against \\( H_1: \\rho \\ne 0 \\) is to be carried out at the \\( 5\\% \\) significance level. From a table for the relevant sample size, the values \\( 0.4973 \\) (for \\( 5\\% \\) one-tailed) and \\( 0.5760 \\) (for \\( 2.5\\% \\) one-tailed) are given. State which critical value should be used for this test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "select critical value", "two-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Split the significance level between the two tails.", workingLatex: "\\tfrac{5\\%}{2} = 2.5\\% \\text{ in each tail}", explanation: "For a two-tailed test at \\( 5\\% \\), each tail carries \\( 2.5\\% \\), so we read the \\( 2.5\\% \\) one-tailed column of the table." },
        { stepNumber: 2, description: "Write down the correct critical value.", workingLatex: "\\text{critical value} = 0.5760", explanation: "The value \\( 0.5760 \\) corresponds to \\( 2.5\\% \\) in one tail, which is the critical value for a \\( 5\\% \\) two-tailed test." }
      ],
      finalAnswer: "\\( \\text{Use the critical value } 0.5760. \\)",
    },
  },
  {
    id: "y2hc-023",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 23",
    difficulty: "Standard",
    questionText: "An agricultural scientist records, for \\( 12 \\) farms, the monthly rainfall (mm) and the crop yield (tonnes per hectare). The product moment correlation coefficient for the sample is found to be \\( r = 0.621 \\). The scientist believes that higher rainfall is associated with higher yield, and tests this at the \\( 5\\% \\) significance level. For \\( n = 12 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( 0.4973 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "rainfall", "yield"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between monthly rainfall and crop yield}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between monthly rainfall and crop yield for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho > 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a positive association gives the one-tailed alternative \\( \\rho > 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = 0.621 > 0.4973", explanation: "The observed \\( r = 0.621 \\) is compared with the critical value \\( 0.4973 \\) for \\( n = 12 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho > 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 5\\% \\) level of a positive correlation between monthly rainfall and crop yield." }
      ],
      finalAnswer: "\\( r = 0.621\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }5\\%\\text{ level of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-024",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 24",
    difficulty: "Standard",
    questionText: "A used-car dealer records the age (years) and the selling price (\\( \\pounds \\)) of \\( 15 \\) cars of the same model. The product moment correlation coefficient for the sample is \\( r = -0.706 \\). The dealer believes that older cars sell for less, and tests this at the \\( 5\\% \\) significance level. For \\( n = 15 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( -0.4409 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "age", "price"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between age of a car and selling price}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between age of a car and selling price for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho < 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a negative association gives the one-tailed alternative \\( \\rho < 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = -0.706 < -0.4409", explanation: "The observed \\( r = -0.706 \\) is compared with the critical value \\( -0.4409 \\) for \\( n = 15 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho < 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 5\\% \\) level of a negative correlation between the age of a car and its selling price." }
      ],
      finalAnswer: "\\( r = -0.706\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }5\\%\\text{ level of negative correlation.} \\)",
    },
  },
  {
    id: "y2hc-025",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 25",
    difficulty: "Standard",
    questionText: "A teacher records, for \\( 10 \\) students, the number of hours of revision and the exam score (\\%). The product moment correlation coefficient for the sample is \\( r = 0.548 \\). The teacher believes that more revision is associated with higher scores, and tests this at the \\( 5\\% \\) significance level. For \\( n = 10 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( 0.5494 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "revision", "score"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between hours of revision and exam score}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between hours of revision and exam score for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho > 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a positive association gives the one-tailed alternative \\( \\rho > 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = 0.548 < 0.5494", explanation: "The observed \\( r = 0.548 \\) is compared with the critical value \\( 0.5494 \\) for \\( n = 10 \\). Since \\( r \\) does not lie in the critical region, we do not reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho > 0\\quad(\\text{not supported})", explanation: "There is insufficient evidence at the \\( 5\\% \\) level of a positive correlation between hours of revision and exam score." }
      ],
      finalAnswer: "\\( r = 0.548\\text{ is not more extreme than the critical value, so do not reject }H_0\\text{: there is insufficient evidence at the }5\\%\\text{ level of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-026",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 26",
    difficulty: "Standard",
    questionText: "A kiosk owner records, on \\( 8 \\) days, the mean daily temperature (\\( ^\\circ\\mathrm{C} \\)) and the number of ice creams sold. The product moment correlation coefficient for the sample is \\( r = 0.842 \\). The owner believes higher temperatures are associated with more sales, and tests this at the \\( 1\\% \\) significance level. For \\( n = 8 \\) at the \\( 1\\% \\) level (one-tailed), the critical value is \\( 0.7887 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "temperature", "sales"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between daily temperature and ice-cream sales}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between daily temperature and ice-cream sales for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho > 0, \\quad \\alpha = 0.01", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a positive association gives the one-tailed alternative \\( \\rho > 0 \\), tested at the \\( 1\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = 0.842 > 0.7887", explanation: "The observed \\( r = 0.842 \\) is compared with the critical value \\( 0.7887 \\) for \\( n = 8 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho > 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 1\\% \\) level of a positive correlation between daily temperature and ice-cream sales." }
      ],
      finalAnswer: "\\( r = 0.842\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }1\\%\\text{ level of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-027",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 27",
    difficulty: "Standard",
    questionText: "A geographer records the altitude (m) and the mean annual temperature (\\( ^\\circ\\mathrm{C} \\)) at \\( 20 \\) weather stations. The product moment correlation coefficient for the sample is \\( r = -0.391 \\). The geographer believes that higher altitude is associated with lower temperature, and tests this at the \\( 5\\% \\) significance level. For \\( n = 20 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( -0.3783 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "altitude", "temperature"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between altitude and mean temperature}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between altitude and mean temperature for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho < 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a negative association gives the one-tailed alternative \\( \\rho < 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = -0.391 < -0.3783", explanation: "The observed \\( r = -0.391 \\) is compared with the critical value \\( -0.3783 \\) for \\( n = 20 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho < 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 5\\% \\) level of a negative correlation between altitude and mean annual temperature." }
      ],
      finalAnswer: "\\( r = -0.391\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }5\\%\\text{ level of negative correlation.} \\)",
    },
  },
  {
    id: "y2hc-028",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 28",
    difficulty: "Standard",
    questionText: "An engineer records, for \\( 14 \\) days, the hours of sunshine and the energy generated (kWh) by a solar panel. The product moment correlation coefficient for the sample is \\( r = 0.512 \\). The engineer believes that more sunshine is associated with greater energy output, and tests this at the \\( 5\\% \\) significance level. For \\( n = 14 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( 0.4575 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "sunshine", "energy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between hours of sunshine and energy generated}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between hours of sunshine and energy generated for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho > 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a positive association gives the one-tailed alternative \\( \\rho > 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = 0.512 > 0.4575", explanation: "The observed \\( r = 0.512 \\) is compared with the critical value \\( 0.4575 \\) for \\( n = 14 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho > 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 5\\% \\) level of a positive correlation between hours of sunshine and energy generated." }
      ],
      finalAnswer: "\\( r = 0.512\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }5\\%\\text{ level of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-029",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 29",
    difficulty: "Standard",
    questionText: "A retailer records the price (\\( \\pounds \\)) and the weekly demand (units) for a product over \\( 11 \\) weeks. The product moment correlation coefficient for the sample is \\( r = -0.498 \\). The retailer believes that a higher price is associated with lower demand, and tests this at the \\( 5\\% \\) significance level. For \\( n = 11 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( -0.5214 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "price", "demand"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between price of a product and weekly demand}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between price of a product and weekly demand for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho < 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a negative association gives the one-tailed alternative \\( \\rho < 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = -0.498 > -0.5214", explanation: "The observed \\( r = -0.498 \\) is compared with the critical value \\( -0.5214 \\) for \\( n = 11 \\). Since \\( r \\) does not lie in the critical region, we do not reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho < 0\\quad(\\text{not supported})", explanation: "There is insufficient evidence at the \\( 5\\% \\) level of a negative correlation between price and weekly demand." }
      ],
      finalAnswer: "\\( r = -0.498\\text{ is not more extreme than the critical value, so do not reject }H_0\\text{: there is insufficient evidence at the }5\\%\\text{ level of negative correlation.} \\)",
    },
  },
  {
    id: "y2hc-030",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 30",
    difficulty: "Standard",
    questionText: "A botanist records, for \\( 9 \\) plants, the mass of fertiliser applied (g) and the plant height (cm). The product moment correlation coefficient for the sample is \\( r = 0.798 \\). The botanist believes that more fertiliser is associated with greater height, and tests this at the \\( 1\\% \\) significance level. For \\( n = 9 \\) at the \\( 1\\% \\) level (one-tailed), the critical value is \\( 0.7498 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "fertiliser", "height"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between fertiliser applied and plant height}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between fertiliser applied and plant height for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho > 0, \\quad \\alpha = 0.01", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a positive association gives the one-tailed alternative \\( \\rho > 0 \\), tested at the \\( 1\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = 0.798 > 0.7498", explanation: "The observed \\( r = 0.798 \\) is compared with the critical value \\( 0.7498 \\) for \\( n = 9 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho > 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 1\\% \\) level of a positive correlation between mass of fertiliser applied and plant height." }
      ],
      finalAnswer: "\\( r = 0.798\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }1\\%\\text{ level of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-031",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 31",
    difficulty: "Standard",
    questionText: "A motoring journalist records the engine size (litres) and the fuel economy (mpg) of \\( 16 \\) cars. The product moment correlation coefficient for the sample is \\( r = -0.402 \\). The journalist believes that a larger engine is associated with worse fuel economy, and tests this at the \\( 5\\% \\) significance level. For \\( n = 16 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( -0.4259 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "engine", "economy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between engine size and fuel economy}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between engine size and fuel economy for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho < 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a negative association gives the one-tailed alternative \\( \\rho < 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = -0.402 > -0.4259", explanation: "The observed \\( r = -0.402 \\) is compared with the critical value \\( -0.4259 \\) for \\( n = 16 \\). Since \\( r \\) does not lie in the critical region, we do not reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho < 0\\quad(\\text{not supported})", explanation: "There is insufficient evidence at the \\( 5\\% \\) level of a negative correlation between engine size and fuel economy." }
      ],
      finalAnswer: "\\( r = -0.402\\text{ is not more extreme than the critical value, so do not reject }H_0\\text{: there is insufficient evidence at the }5\\%\\text{ level of negative correlation.} \\)",
    },
  },
  {
    id: "y2hc-032",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 32",
    difficulty: "Standard",
    questionText: "A coach records, for \\( 13 \\) athletes, the weekly training hours and the \\( 5\\,\\mathrm{km} \\) race time (minutes). The product moment correlation coefficient for the sample is \\( r = -0.611 \\). The coach believes that more training is associated with faster (lower) race times, and tests this at the \\( 5\\% \\) significance level. For \\( n = 13 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( -0.4762 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "training", "race time"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between training hours and race time}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between training hours and race time for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho < 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a negative association gives the one-tailed alternative \\( \\rho < 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = -0.611 < -0.4762", explanation: "The observed \\( r = -0.611 \\) is compared with the critical value \\( -0.4762 \\) for \\( n = 13 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho < 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 5\\% \\) level of a negative correlation between weekly training hours and race time." }
      ],
      finalAnswer: "\\( r = -0.611\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }5\\%\\text{ level of negative correlation.} \\)",
    },
  },
  {
    id: "y2hc-033",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 33",
    difficulty: "Standard",
    questionText: "A marketing analyst records, for \\( 18 \\) months, the advertising spend (\\( \\pounds000 \\)) and the monthly sales (\\( \\pounds000 \\)). The product moment correlation coefficient for the sample is \\( r = 0.589 \\). The analyst believes that greater advertising spend is associated with higher sales, and tests this at the \\( 1\\% \\) significance level. For \\( n = 18 \\) at the \\( 1\\% \\) level (one-tailed), the critical value is \\( 0.5614 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "advertising", "sales"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between advertising spend and monthly sales}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between advertising spend and monthly sales for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho > 0, \\quad \\alpha = 0.01", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a positive association gives the one-tailed alternative \\( \\rho > 0 \\), tested at the \\( 1\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = 0.589 > 0.5614", explanation: "The observed \\( r = 0.589 \\) is compared with the critical value \\( 0.5614 \\) for \\( n = 18 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho > 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 1\\% \\) level of a positive correlation between advertising spend and monthly sales." }
      ],
      finalAnswer: "\\( r = 0.589\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }1\\%\\text{ level of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-034",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 34",
    difficulty: "Standard",
    questionText: "A technician records, on \\( 10 \\) occasions, the relative humidity (\\%) and the time taken for paint to dry (minutes). The product moment correlation coefficient for the sample is \\( r = 0.673 \\). The technician believes that higher humidity is associated with longer drying times, and tests this at the \\( 5\\% \\) significance level. For \\( n = 10 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( 0.5494 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "humidity", "drying time"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between humidity and drying time}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between humidity and drying time for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho > 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a positive association gives the one-tailed alternative \\( \\rho > 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = 0.673 > 0.5494", explanation: "The observed \\( r = 0.673 \\) is compared with the critical value \\( 0.5494 \\) for \\( n = 10 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho > 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 5\\% \\) level of a positive correlation between relative humidity and drying time." }
      ],
      finalAnswer: "\\( r = 0.673\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }5\\%\\text{ level of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-035",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 35",
    difficulty: "Standard",
    questionText: "A researcher records, for \\( 22 \\) teenagers, the daily screen time (hours) and the nightly hours of sleep. The product moment correlation coefficient for the sample is \\( r = -0.347 \\). The researcher believes that more screen time is associated with less sleep, and tests this at the \\( 5\\% \\) significance level. For \\( n = 22 \\) at the \\( 5\\% \\) level (one-tailed), the critical value is \\( -0.3598 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "screen time", "sleep"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between screen time and hours of sleep}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between screen time and hours of sleep for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho < 0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a negative association gives the one-tailed alternative \\( \\rho < 0 \\), tested at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = -0.347 > -0.3598", explanation: "The observed \\( r = -0.347 \\) is compared with the critical value \\( -0.3598 \\) for \\( n = 22 \\). Since \\( r \\) does not lie in the critical region, we do not reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho < 0\\quad(\\text{not supported})", explanation: "There is insufficient evidence at the \\( 5\\% \\) level of a negative correlation between daily screen time and nightly hours of sleep." }
      ],
      finalAnswer: "\\( r = -0.347\\text{ is not more extreme than the critical value, so do not reject }H_0\\text{: there is insufficient evidence at the }5\\%\\text{ level of negative correlation.} \\)",
    },
  },
  {
    id: "y2hc-036",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 36",
    difficulty: "Standard",
    questionText: "An economist records, for \\( 25 \\) households, the annual income (\\( \\pounds000 \\)) and the annual savings (\\( \\pounds000 \\)). The product moment correlation coefficient for the sample is \\( r = 0.521 \\). The economist believes that higher income is associated with higher savings, and tests this at the \\( 1\\% \\) significance level. For \\( n = 25 \\) at the \\( 1\\% \\) level (one-tailed), the critical value is \\( 0.4622 \\). Carry out the test, stating your hypotheses and conclusion clearly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "critical value", "conclusion in context", "income", "savings"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient in context.", workingLatex: "\\rho = \\text{population correlation between income and household savings}", explanation: "Let \\( \\rho \\) denote the product moment correlation coefficient between income and household savings for the whole population, of which the sample is a representative part." },
        { stepNumber: 2, description: "State the hypotheses and the significance level.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho > 0, \\quad \\alpha = 0.01", explanation: "Under \\( H_0 \\) there is no correlation (\\( \\rho = 0 \\)). The belief of a positive association gives the one-tailed alternative \\( \\rho > 0 \\), tested at the \\( 1\\% \\) level." },
        { stepNumber: 3, description: "Compare the given sample PMCC with the given critical value.", workingLatex: "r = 0.521 > 0.4622", explanation: "The observed \\( r = 0.521 \\) is compared with the critical value \\( 0.4622 \\) for \\( n = 25 \\). Since \\( r \\) lies in the critical region, we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context using safe wording.", workingLatex: "\\rho > 0\\quad(\\text{supported})", explanation: "There is evidence at the \\( 1\\% \\) level of a positive correlation between annual income and annual savings." }
      ],
      finalAnswer: "\\( r = 0.521\\text{ is more extreme than the critical value, so reject }H_0\\text{: there is evidence at the }1\\%\\text{ level of positive correlation.} \\)",
    },
  },
  {
    id: "y2hc-037",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 37",
    difficulty: "Standard",
    questionText: "A researcher records the daily maximum temperature \\( t \\) and the number of cups of hot chocolate \\( h \\) sold at a cafe for a random sample of \\( 12 \\) days. The product moment correlation coefficient for the sample is \\( r = -0.624 \\). The researcher wishes to test, at the \\( 5\\% \\) significance level, whether there is any (non-zero) correlation between temperature and hot chocolate sales. The two-tailed critical value for \\( n = 12 \\) at the \\( 5\\% \\) level is \\( 0.5760 \\). Carry out the test and state your conclusion in context.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "critical value", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population parameter \\( \\rho \\).", workingLatex: "\\rho = \\text{population correlation coefficient between } t \\text{ and } h", explanation: "The test concerns the population product moment correlation coefficient \\( \\rho \\) between daily maximum temperature and hot chocolate sales." },
        { stepNumber: 2, description: "State the hypotheses. 'Any correlation' means a two-tailed test.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.05", explanation: "The null hypothesis is no correlation; the alternative \\( \\rho \\neq 0 \\) is two-tailed because we test for correlation in either direction." },
        { stepNumber: 3, description: "State the two-tailed critical value and form the critical region for the sign of \\( r \\).", workingLatex: "\\text{Critical value} = 0.5760; \\quad \\text{reject } H_0 \\text{ if } |r| > 0.5760", explanation: "For a two-tailed test we compare the magnitude \\( |r| \\) with the given two-tailed critical value \\( 0.5760 \\)." },
        { stepNumber: 4, description: "Compare \\( |r| \\) with the critical value.", workingLatex: "|r| = 0.624 > 0.5760 \\implies \\text{reject } H_0", explanation: "Since \\( |{-0.624}| = 0.624 \\) exceeds the critical value \\( 0.5760 \\), the result lies in the critical region, so we reject \\( H_0 \\)." },
        { stepNumber: 5, description: "State the conclusion in context, noting the negative direction.", workingLatex: "\\rho \\neq 0", explanation: "There is sufficient evidence at the \\( 5\\% \\) level of a (negative) correlation between daily maximum temperature and the number of cups of hot chocolate sold." }
      ],
      finalAnswer: "\\( |r| = 0.624 > 0.5760, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level of a (negative) correlation between temperature and hot chocolate sales.} \\)",
    },
  },
  {
    id: "y2hc-038",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 38",
    difficulty: "Standard",
    questionText: "A teacher collects the number of hours of sleep \\( s \\) and a reaction-time score \\( w \\) for a random sample of \\( 15 \\) students. The product moment correlation coefficient is \\( r = 0.482 \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence of any correlation between hours of sleep and reaction-time score. The two-tailed \\( 5\\% \\) critical value for \\( n = 15 \\) is \\( 0.5140 \\). State your conclusion in context.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "critical value", "accept H0"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population parameter.", workingLatex: "\\rho = \\text{population correlation coefficient between } s \\text{ and } w", explanation: "Let \\( \\rho \\) be the population product moment correlation coefficient between hours of sleep and reaction-time score." },
        { stepNumber: 2, description: "State the two-tailed hypotheses.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.05", explanation: "Testing for 'any correlation' gives the two-tailed alternative \\( \\rho \\neq 0 \\)." },
        { stepNumber: 3, description: "State the critical region using the given two-tailed critical value.", workingLatex: "\\text{Reject } H_0 \\text{ if } |r| > 0.5140", explanation: "We compare the magnitude of the sample correlation coefficient with the two-tailed critical value \\( 0.5140 \\)." },
        { stepNumber: 4, description: "Compare \\( |r| \\) with the critical value.", workingLatex: "|r| = 0.482 < 0.5140 \\implies \\text{do not reject } H_0", explanation: "Since \\( 0.482 \\) does not exceed \\( 0.5140 \\), the result is not in the critical region, so we do not reject \\( H_0 \\)." },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\rho = 0 \\text{ not contradicted}", explanation: "There is insufficient evidence at the \\( 5\\% \\) level of any correlation between hours of sleep and reaction-time score." }
      ],
      finalAnswer: "\\( |r| = 0.482 < 0.5140, \\text{ so do not reject } H_0. \\text{ There is insufficient evidence at the } 5\\% \\text{ level of correlation between hours of sleep and reaction-time score.} \\)",
    },
  },
  {
    id: "y2hc-039",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 39",
    difficulty: "Standard",
    questionText: "For a random sample of \\( 10 \\) towns, a planner records the average rainfall \\( x \\) and the number of outdoor markets per month \\( y \\). The product moment correlation coefficient is \\( r = -0.701 \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence of correlation between rainfall and the number of outdoor markets. The two-tailed \\( 5\\% \\) critical value for \\( n = 10 \\) is \\( 0.6319 \\). State your conclusion in context.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "negative correlation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population parameter.", workingLatex: "\\rho = \\text{population correlation coefficient between } x \\text{ and } y", explanation: "Let \\( \\rho \\) be the population correlation coefficient between average rainfall and the number of outdoor markets." },
        { stepNumber: 2, description: "State the two-tailed hypotheses.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.05", explanation: "We test for correlation in either direction, so the alternative is two-tailed." },
        { stepNumber: 3, description: "State the critical region. Because \\( r \\) is negative, compare with the negative critical value, equivalently compare \\( |r| \\).", workingLatex: "\\text{Reject } H_0 \\text{ if } r < -0.6319 \\text{ (i.e. } |r| > 0.6319)", explanation: "For a negative sample correlation in a two-tailed test, reject \\( H_0 \\) when \\( r \\) is below the negative critical value \\( -0.6319 \\), which is the same as \\( |r| > 0.6319 \\)." },
        { stepNumber: 4, description: "Compare \\( r \\) with the negative critical value.", workingLatex: "r = -0.701 < -0.6319 \\implies \\text{reject } H_0", explanation: "Since \\( -0.701 \\) is more negative than \\( -0.6319 \\), the result lies in the lower critical region, so we reject \\( H_0 \\)." },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\rho \\neq 0", explanation: "There is sufficient evidence at the \\( 5\\% \\) level of a (negative) correlation between average rainfall and the number of outdoor markets per month." }
      ],
      finalAnswer: "\\( r = -0.701 < -0.6319, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level of a negative correlation between rainfall and the number of outdoor markets.} \\)",
    },
  },
  {
    id: "y2hc-040",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 40",
    difficulty: "Standard",
    questionText: "Over a random sample of \\( 20 \\) days, a city analyst records the number of ice creams sold \\( a \\) and the number of recorded sunburn cases \\( b \\). The product moment correlation coefficient is \\( r = 0.553 \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence of correlation between ice cream sales and sunburn cases. The two-tailed \\( 5\\% \\) critical value for \\( n = 20 \\) is \\( 0.4438 \\). State your conclusion in context, and comment on whether this shows that buying ice creams causes sunburn.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "causation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the parameter and state the two-tailed hypotheses.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.05", explanation: "Let \\( \\rho \\) be the population correlation coefficient between ice cream sales and sunburn cases; we test for any correlation, so the alternative is two-tailed." },
        { stepNumber: 2, description: "State the critical region using the given two-tailed critical value.", workingLatex: "\\text{Reject } H_0 \\text{ if } |r| > 0.4438", explanation: "Compare the magnitude of the sample correlation coefficient with the two-tailed critical value \\( 0.4438 \\)." },
        { stepNumber: 3, description: "Compare \\( |r| \\) with the critical value.", workingLatex: "|r| = 0.553 > 0.4438 \\implies \\text{reject } H_0", explanation: "Since \\( 0.553 > 0.4438 \\), the result is significant, so we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context.", workingLatex: "\\rho \\neq 0", explanation: "There is sufficient evidence at the \\( 5\\% \\) level of a correlation between the number of ice creams sold and the number of sunburn cases." },
        { stepNumber: 5, description: "Comment on causation.", workingLatex: "\\text{correlation does not imply causation}", explanation: "The test only shows association; correlation does not imply causation. Buying ice creams does not cause sunburn — both are likely driven by a third factor such as hot, sunny weather." }
      ],
      finalAnswer: "\\( |r| = 0.553 > 0.4438, \\text{ so reject } H_0; \\text{ there is correlation, but correlation does not imply causation, so buying ice creams does not cause sunburn (both are linked to hot, sunny weather).} \\)",
    },
  },
  {
    id: "y2hc-041",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 41",
    difficulty: "Standard",
    questionText: "A biologist tests for correlation between two variables using a random sample of \\( 18 \\) observations at the \\( 5\\% \\) significance level. She wishes to detect correlation in either direction. The one-tailed critical values for \\( n = 18 \\) are \\( 0.3994 \\) at the \\( 5\\% \\) level and \\( 0.4716 \\) at the \\( 2.5\\% \\) level. State, with a reason, which critical value she should use, and write down the critical region for \\( r \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "select critical value", "significance level"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the type of test from the wording.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0", explanation: "Detecting correlation 'in either direction' means a two-tailed test, with alternative \\( \\rho \\neq 0 \\)." },
        { stepNumber: 2, description: "Split the significance level between the two tails to choose the correct critical value.", workingLatex: "\\frac{5\\%}{2} = 2.5\\% \\text{ in each tail} \\implies \\text{use } 0.4716", explanation: "For a two-tailed test at \\( 5\\% \\), each tail carries \\( 2.5\\% \\), so the appropriate critical value is the \\( 2.5\\% \\) value \\( 0.4716 \\), not the one-tailed \\( 5\\% \\) value." },
        { stepNumber: 3, description: "Write down the critical region for \\( r \\).", workingLatex: "r < -0.4716 \\text{ or } r > 0.4716 \\quad (|r| > 0.4716)", explanation: "The critical region consists of both tails: reject \\( H_0 \\) if \\( |r| > 0.4716 \\)." }
      ],
      finalAnswer: "\\( \\text{Use the } 2.5\\% \\text{ value } 0.4716; \\text{ critical region: } |r| > 0.4716 \\ (r < -0.4716 \\text{ or } r > 0.4716). \\)",
    },
  },
  {
    id: "y2hc-042",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 42",
    difficulty: "Standard",
    questionText: "An economist studies the relationship between the unemployment rate \\( u \\) and a measure of consumer confidence \\( c \\) over a random sample of \\( 25 \\) regions. The product moment correlation coefficient is \\( r = -0.547 \\). Test, at the \\( 1\\% \\) significance level, whether there is evidence of correlation between unemployment and consumer confidence. The two-tailed \\( 1\\% \\) critical value for \\( n = 25 \\) is \\( 0.4869 \\). State your conclusion in context.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "1% level", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the parameter and state the two-tailed hypotheses.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.01", explanation: "Let \\( \\rho \\) be the population correlation coefficient between unemployment and consumer confidence; we test for any correlation at the \\( 1\\% \\) level." },
        { stepNumber: 2, description: "State the critical region. As \\( r \\) is negative, compare with the negative critical value, equivalently \\( |r| \\).", workingLatex: "\\text{Reject } H_0 \\text{ if } r < -0.4869 \\text{ (i.e. } |r| > 0.4869)", explanation: "The given value \\( 0.4869 \\) is the two-tailed \\( 1\\% \\) critical value; for a negative \\( r \\) we test against \\( -0.4869 \\)." },
        { stepNumber: 3, description: "Compare \\( r \\) with the negative critical value.", workingLatex: "r = -0.547 < -0.4869 \\implies \\text{reject } H_0", explanation: "Since \\( -0.547 \\) is more negative than \\( -0.4869 \\) (equivalently \\( |r| = 0.547 > 0.4869 \\)), the result is in the critical region." },
        { stepNumber: 4, description: "State the conclusion in context.", workingLatex: "\\rho \\neq 0", explanation: "There is sufficient evidence at the \\( 1\\% \\) level of a (negative) correlation between the unemployment rate and consumer confidence." }
      ],
      finalAnswer: "\\( r = -0.547 < -0.4869, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 1\\% \\text{ level of a negative correlation between unemployment and consumer confidence.} \\)",
    },
  },
  {
    id: "y2hc-043",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 43",
    difficulty: "Standard",
    questionText: "A student tests for correlation between two variables using a random sample of \\( 14 \\) paired observations and a two-tailed test at the \\( 10\\% \\) significance level. The relevant one-tailed critical values for \\( n = 14 \\) are \\( 0.4575 \\) at the \\( 5\\% \\) level and \\( 0.3961 \\) at the \\( 10\\% \\) level. State which critical value should be used, with a reason, and write down the critical region for \\( r \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "select critical value", "10% level"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the test.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.10", explanation: "A two-tailed test at the \\( 10\\% \\) level has alternative \\( \\rho \\neq 0 \\)." },
        { stepNumber: 2, description: "Split the significance level across the two tails.", workingLatex: "\\frac{10\\%}{2} = 5\\% \\text{ per tail} \\implies \\text{use } 0.4575", explanation: "Each tail carries \\( 5\\% \\), so the correct critical value is the \\( 5\\% \\) one-tailed value \\( 0.4575 \\)." },
        { stepNumber: 3, description: "Write down the critical region.", workingLatex: "|r| > 0.4575 \\quad (r < -0.4575 \\text{ or } r > 0.4575)", explanation: "Reject \\( H_0 \\) if the sample correlation coefficient satisfies \\( |r| > 0.4575 \\)." }
      ],
      finalAnswer: "\\( \\text{Use the } 5\\% \\text{ value } 0.4575; \\text{ critical region: } |r| > 0.4575. \\)",
    },
  },
  {
    id: "y2hc-044",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 44",
    difficulty: "Standard",
    questionText: "A nutritionist records, for a random sample of \\( 16 \\) people, the amount of dietary fibre eaten per day \\( f \\) and a digestive-discomfort score \\( d \\). The product moment correlation coefficient is \\( r = -0.398 \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence of correlation between fibre intake and discomfort score. The two-tailed \\( 5\\% \\) critical value for \\( n = 16 \\) is \\( 0.4973 \\). State your conclusion in context.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "negative correlation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the parameter and state the two-tailed hypotheses.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.05", explanation: "Let \\( \\rho \\) be the population correlation coefficient between fibre intake and discomfort score; the test is two-tailed." },
        { stepNumber: 2, description: "State the critical region using the magnitude of \\( r \\).", workingLatex: "\\text{Reject } H_0 \\text{ if } |r| > 0.4973 \\text{ (here } r < -0.4973)", explanation: "Because \\( r \\) is negative, we test whether \\( r < -0.4973 \\), equivalently \\( |r| > 0.4973 \\)." },
        { stepNumber: 3, description: "Compare \\( |r| \\) with the critical value.", workingLatex: "|r| = 0.398 < 0.4973 \\implies \\text{do not reject } H_0", explanation: "Since \\( -0.398 \\) is not below \\( -0.4973 \\) (i.e. \\( 0.398 < 0.4973 \\)), the result is not in the critical region." },
        { stepNumber: 4, description: "State the conclusion in context.", workingLatex: "\\rho = 0 \\text{ not contradicted}", explanation: "There is insufficient evidence at the \\( 5\\% \\) level of any correlation between daily fibre intake and the digestive-discomfort score." }
      ],
      finalAnswer: "\\( |r| = 0.398 < 0.4973, \\text{ so do not reject } H_0. \\text{ There is insufficient evidence at the } 5\\% \\text{ level of correlation between fibre intake and discomfort score.} \\)",
    },
  },
  {
    id: "y2hc-045",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 45",
    difficulty: "Standard",
    questionText: "A sports scientist records the resting heart rate \\( h \\) and a fitness score \\( g \\) for a random sample of \\( 30 \\) athletes. The product moment correlation coefficient is \\( r = -0.412 \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence of correlation between resting heart rate and fitness score. The two-tailed \\( 5\\% \\) critical value for \\( n = 30 \\) is \\( 0.3610 \\). State your conclusion in context.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "critical value", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the parameter and state the two-tailed hypotheses.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.05", explanation: "Let \\( \\rho \\) be the population correlation coefficient between resting heart rate and fitness score; the test is two-tailed." },
        { stepNumber: 2, description: "State the critical region. As \\( r \\) is negative, compare with the negative critical value, equivalently \\( |r| \\).", workingLatex: "\\text{Reject } H_0 \\text{ if } r < -0.3610 \\text{ (i.e. } |r| > 0.3610)", explanation: "The given two-tailed critical value is \\( 0.3610 \\); for negative \\( r \\) we compare against \\( -0.3610 \\)." },
        { stepNumber: 3, description: "Compare \\( r \\) with the negative critical value.", workingLatex: "r = -0.412 < -0.3610 \\implies \\text{reject } H_0", explanation: "Since \\( -0.412 \\) is more negative than \\( -0.3610 \\) (\\( |r| = 0.412 > 0.3610 \\)), the result is in the critical region." },
        { stepNumber: 4, description: "State the conclusion in context.", workingLatex: "\\rho \\neq 0", explanation: "There is sufficient evidence at the \\( 5\\% \\) level of a (negative) correlation between resting heart rate and fitness score." }
      ],
      finalAnswer: "\\( r = -0.412 < -0.3610, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level of a negative correlation between resting heart rate and fitness score.} \\)",
    },
  },
  {
    id: "y2hc-046",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 46",
    difficulty: "Standard",
    questionText: "Across a random sample of \\( 22 \\) countries, a journalist records the number of mobile phones per person \\( m \\) and the average life expectancy \\( l \\). The product moment correlation coefficient is \\( r = 0.608 \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence of correlation between mobile phone ownership and life expectancy. The two-tailed \\( 5\\% \\) critical value for \\( n = 22 \\) is \\( 0.4227 \\). State your conclusion in context, and explain why this does not show that owning more phones increases life expectancy.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "causation", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the two-tailed hypotheses.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.05", explanation: "Let \\( \\rho \\) be the population correlation coefficient between phones per person and life expectancy; the test is two-tailed." },
        { stepNumber: 2, description: "State the critical region.", workingLatex: "\\text{Reject } H_0 \\text{ if } |r| > 0.4227", explanation: "Compare the magnitude of \\( r \\) with the given two-tailed critical value \\( 0.4227 \\)." },
        { stepNumber: 3, description: "Compare and decide.", workingLatex: "|r| = 0.608 > 0.4227 \\implies \\text{reject } H_0", explanation: "Since \\( 0.608 > 0.4227 \\), the result is significant, so we reject \\( H_0 \\)." },
        { stepNumber: 4, description: "State the conclusion in context.", workingLatex: "\\rho \\neq 0", explanation: "There is sufficient evidence at the \\( 5\\% \\) level of a correlation between mobile phones per person and average life expectancy." },
        { stepNumber: 5, description: "Explain the limitation regarding causation.", workingLatex: "\\text{correlation does not imply causation}", explanation: "Correlation does not imply causation; owning more phones does not increase life expectancy. Both are likely associated with a country's wealth or level of development." }
      ],
      finalAnswer: "\\( |r| = 0.608 > 0.4227, \\text{ so reject } H_0; \\text{ there is correlation, but correlation does not imply causation, so phone ownership does not increase life expectancy (both reflect national wealth/development).} \\)",
    },
  },
  {
    id: "y2hc-047",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 47",
    difficulty: "Standard",
    questionText: "A researcher will test for correlation between two variables using a random sample of \\( 28 \\) paired observations, with a two-tailed test at the \\( 1\\% \\) significance level. The one-tailed critical values for \\( n = 28 \\) are \\( 0.4276 \\) at the \\( 1\\% \\) level and \\( 0.4629 \\) at the \\( 0.5\\% \\) level. State, with a reason, which critical value should be used and write down the critical region for \\( r \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "select critical value", "1% level"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the test.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.01", explanation: "A two-tailed test at the \\( 1\\% \\) level has alternative \\( \\rho \\neq 0 \\)." },
        { stepNumber: 2, description: "Split the significance level across the two tails.", workingLatex: "\\frac{1\\%}{2} = 0.5\\% \\text{ per tail} \\implies \\text{use } 0.4629", explanation: "Each tail carries \\( 0.5\\% \\), so the correct critical value is the \\( 0.5\\% \\) one-tailed value \\( 0.4629 \\)." },
        { stepNumber: 3, description: "Write down the critical region.", workingLatex: "|r| > 0.4629 \\quad (r < -0.4629 \\text{ or } r > 0.4629)", explanation: "Reject \\( H_0 \\) if \\( |r| > 0.4629 \\)." }
      ],
      finalAnswer: "\\( \\text{Use the } 0.5\\% \\text{ value } 0.4629; \\text{ critical region: } |r| > 0.4629. \\)",
    },
  },
  {
    id: "y2hc-048",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 48",
    difficulty: "Standard",
    questionText: "A psychologist records, for a random sample of \\( 11 \\) participants, the daily screen time \\( s \\) (hours) and a self-reported wellbeing score \\( w \\). The product moment correlation coefficient is \\( r = -0.602 \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence of correlation between screen time and wellbeing. The two-tailed \\( 5\\% \\) critical value for \\( n = 11 \\) is \\( 0.6021 \\). State your conclusion in context.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "negative correlation", "borderline"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the two-tailed hypotheses.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.05", explanation: "Let \\( \\rho \\) be the population correlation coefficient between screen time and wellbeing; the test is two-tailed." },
        { stepNumber: 2, description: "State the critical region. As \\( r \\) is negative, compare with the negative critical value.", workingLatex: "\\text{Reject } H_0 \\text{ if } r < -0.6021 \\text{ (i.e. } |r| > 0.6021)", explanation: "The two-tailed critical value is \\( 0.6021 \\); for negative \\( r \\) we test \\( r < -0.6021 \\)." },
        { stepNumber: 3, description: "Compare \\( r \\) with the negative critical value.", workingLatex: "r = -0.602 > -0.6021 \\implies \\text{do not reject } H_0", explanation: "Since \\( -0.602 \\) is (just) greater than \\( -0.6021 \\), i.e. \\( |r| = 0.602 < 0.6021 \\), the result is not in the critical region." },
        { stepNumber: 4, description: "State the conclusion in context.", workingLatex: "\\rho = 0 \\text{ not contradicted}", explanation: "There is insufficient evidence at the \\( 5\\% \\) level of correlation between daily screen time and the wellbeing score (the result is extremely close to the critical value)." }
      ],
      finalAnswer: "\\( r = -0.602 > -0.6021 \\ (|r| = 0.602 < 0.6021), \\text{ so do not reject } H_0. \\text{ There is insufficient evidence at the } 5\\% \\text{ level of correlation between screen time and wellbeing.} \\)",
    },
  },
  {
    id: "y2hc-049",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 49",
    difficulty: "Standard",
    questionText: "A geographer records the altitude \\( a \\) (metres) and the mean annual temperature \\( T \\) (°C) at a random sample of \\( 13 \\) weather stations. The product moment correlation coefficient is \\( r = -0.668 \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence of correlation between altitude and mean annual temperature. The two-tailed \\( 5\\% \\) critical value for \\( n = 13 \\) is \\( 0.5529 \\). State your conclusion in context.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two-tailed", "critical value", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the parameter and state the two-tailed hypotheses.", workingLatex: "H_0: \\rho = 0, \\quad H_1: \\rho \\neq 0, \\quad \\alpha = 0.05", explanation: "Let \\( \\rho \\) be the population correlation coefficient between altitude and mean annual temperature; the test is two-tailed." },
        { stepNumber: 2, description: "State the critical region. As \\( r \\) is negative, compare with the negative critical value, equivalently \\( |r| \\).", workingLatex: "\\text{Reject } H_0 \\text{ if } r < -0.5529 \\text{ (i.e. } |r| > 0.5529)", explanation: "The given two-tailed critical value is \\( 0.5529 \\); for negative \\( r \\) we compare against \\( -0.5529 \\)." },
        { stepNumber: 3, description: "Compare \\( r \\) with the negative critical value.", workingLatex: "r = -0.668 < -0.5529 \\implies \\text{reject } H_0", explanation: "Since \\( -0.668 \\) is more negative than \\( -0.5529 \\) (\\( |r| = 0.668 > 0.5529 \\)), the result is in the critical region." },
        { stepNumber: 4, description: "State the conclusion in context.", workingLatex: "\\rho \\neq 0", explanation: "There is sufficient evidence at the \\( 5\\% \\) level of a (negative) correlation between altitude and mean annual temperature." }
      ],
      finalAnswer: "\\( r = -0.668 < -0.5529, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level of a negative correlation between altitude and mean annual temperature.} \\)",
    },
  },
  {
    id: "y2hc-050",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 050",
    difficulty: "Challenge",
    questionText: "Over one summer, a seaside town records the daily number of ice creams sold and the daily number of people treated for sunburn. The product moment correlation coefficient for the \\( n = 30 \\) days is \\( r = 0.78 \\). A one-tailed test of \\( H_0:\\ \\rho = 0 \\) against \\( H_1:\\ \\rho > 0 \\) at the \\( 5\\% \\) level uses the critical value \\( 0.3061 \\). The local newspaper reports that 'eating ice cream causes sunburn'. Comment on whether the data support this claim, and explain carefully what the test does and does not show.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "causation", "confounding variable", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Carry out the significance test on the data.", workingLatex: "r = 0.78 > 0.3061 \\implies \\text{reject } H_0", explanation: "The observed PMCC \\( 0.78 \\) exceeds the given critical value \\( 0.3061 \\), so the result is significant at the \\( 5\\% \\) level: there is evidence of positive correlation between ice cream sales and sunburn cases." },
        { stepNumber: 2, description: "State precisely what a significant result establishes.", workingLatex: "\\text{significant } r \\implies \\text{association, not mechanism}", explanation: "The test only shows that the two variables tend to increase together across the sample of days; it gives evidence of a statistical association between the daily figures, nothing more." },
        { stepNumber: 3, description: "Identify a confounding variable that explains the link.", workingLatex: "\\text{hot, sunny weather} \\to \\uparrow \\text{ice cream sales and } \\uparrow \\text{sunburn}", explanation: "On hotter, sunnier days more people buy ice cream AND more people get sunburnt. The amount of sunshine (temperature) is a confounding variable driving both quantities, which manufactures the correlation without any direct link between them." },
        { stepNumber: 4, description: "Conclude on the newspaper's claim in context.", workingLatex: "\\text{correlation} \\ne \\text{causation}", explanation: "Although the correlation is significant, this does NOT support the claim that eating ice cream causes sunburn. Correlation does not imply causation; the association is plausibly explained by the confounding effect of hot, sunny weather, so the newspaper's causal conclusion is not justified." }
      ],
      finalAnswer: "\\( r = 0.78 > 0.3061,\\ \\text{so the correlation is significant, but correlation does not imply causation — the link is plausibly explained by the confounding variable (hot, sunny weather), so the data do NOT support the claim that ice cream causes sunburn.} \\)",
    },
  },
  {
    id: "y2hc-051",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 051",
    difficulty: "Challenge",
    questionText: "A researcher collects data from \\( n = 40 \\) primary schools on the average shoe size of pupils and their average score on a reading test. She finds \\( r = 0.71 \\) and, testing \\( H_0:\\ \\rho = 0 \\) against \\( H_1:\\ \\rho \\neq 0 \\) at the \\( 5\\% \\) level with critical value \\( 0.3120 \\), concludes that 'having bigger feet improves reading ability'. Carry out the test and critique her conclusion, identifying a confounding variable.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "causation", "confounding variable", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the test and compare with the critical value.", workingLatex: "H_0:\\ \\rho = 0,\\quad H_1:\\ \\rho \\neq 0 \\\\ |r| = 0.71 > 0.3120 \\implies \\text{reject } H_0", explanation: "This is a two-tailed test, so we compare \\( |r| \\) with the given critical value. Since \\( 0.71 > 0.3120 \\) the result is significant at the \\( 5\\% \\) level: there is evidence of (positive) correlation between shoe size and reading score." },
        { stepNumber: 2, description: "State what the significant result does and does not establish.", workingLatex: "\\text{significant } r \\implies \\text{association only}", explanation: "A significant PMCC shows the two variables are statistically associated across the schools; it does not establish that one variable causes the other." },
        { stepNumber: 3, description: "Identify the confounding variable.", workingLatex: "\\text{age of pupil} \\to \\uparrow \\text{shoe size and } \\uparrow \\text{reading score}", explanation: "Older children have bigger feet AND, being more developed, read better. The age of the pupils is a confounding variable that increases both quantities together." },
        { stepNumber: 4, description: "Explain why this undermines the causal claim.", workingLatex: "\\text{age drives both} \\implies \\text{no direct causal link}", explanation: "Because age influences both shoe size and reading ability, the correlation can be entirely explained without any direct effect of foot size on reading; the apparent link is spurious." },
        { stepNumber: 5, description: "Conclude on the researcher's claim.", workingLatex: "\\text{correlation} \\ne \\text{causation}", explanation: "The researcher's conclusion is not justified. A significant correlation does not imply causation, and here the confounding variable (age) plausibly accounts for the whole relationship, so it is wrong to claim that bigger feet improve reading ability." }
      ],
      finalAnswer: "\\( |r| = 0.71 > 0.3120,\\ \\text{so the correlation is significant, but the causal claim is invalid — age is a confounding variable that raises both shoe size and reading score, so correlation does not imply causation here.} \\)",
    },
  },
  {
    id: "y2hc-052",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 052",
    difficulty: "Challenge",
    questionText: "Two studies each test \\( H_0:\\ \\rho = 0 \\) against \\( H_1:\\ \\rho > 0 \\) at the \\( 5\\% \\) level. Study A uses \\( n = 10 \\) (critical value \\( 0.5494 \\)) and Study B uses \\( n = 50 \\) (critical value \\( 0.2353 \\)). Both observe a sample PMCC of \\( r = 0.30 \\). Determine the conclusion of each test, and explain how and why the sample size affects the critical value and hence the outcome.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "sample size", "critical value", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the test for Study A.", workingLatex: "\\text{Study A: } r = 0.30 < 0.5494 \\implies \\text{do not reject } H_0", explanation: "With \\( n = 10 \\) the critical value is \\( 0.5494 \\). Since \\( 0.30 < 0.5494 \\), the result is not significant: there is insufficient evidence of positive correlation." },
        { stepNumber: 2, description: "Apply the test for Study B.", workingLatex: "\\text{Study B: } r = 0.30 > 0.2353 \\implies \\text{reject } H_0", explanation: "With \\( n = 50 \\) the critical value is only \\( 0.2353 \\). Since \\( 0.30 > 0.2353 \\), the result IS significant: there is evidence of positive correlation." },
        { stepNumber: 3, description: "State the effect of sample size on the critical value.", workingLatex: "n \\uparrow \\implies \\text{critical value} \\downarrow", explanation: "A larger sample size gives a smaller critical value (\\( 0.5494 \\) for \\( n=10 \\) versus \\( 0.2353 \\) for \\( n=50 \\))." },
        { stepNumber: 4, description: "Explain why a larger sample lowers the critical value.", workingLatex: "\\text{larger } n \\implies \\text{less sampling variability in } r", explanation: "With more data points, the sample PMCC is a more reliable estimate of \\( \\rho \\) and varies less under \\( H_0 \\), so a smaller value of \\( r \\) is already unlikely to arise by chance. The threshold for significance therefore drops." },
        { stepNumber: 5, description: "Conclude on the comparison.", workingLatex: "\\text{same } r,\\ \\text{different conclusion}", explanation: "An identical PMCC of \\( 0.30 \\) is not significant with \\( n = 10 \\) but is significant with \\( n = 50 \\). A larger sample makes it easier to detect a genuine correlation, because even a modest \\( r \\) becomes strong evidence once enough data support it." }
      ],
      finalAnswer: "\\( \\text{Study A: } 0.30 < 0.5494 \\text{ (not significant); Study B: } 0.30 > 0.2353 \\text{ (significant). Larger } n \\Rightarrow \\text{ smaller critical value} \\Rightarrow \\text{ easier to detect correlation.} \\)",
    },
  },
  {
    id: "y2hc-053",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 053",
    difficulty: "Challenge",
    questionText: "A student writes: 'To make it as hard as possible to wrongly reject \\( H_0:\\ \\rho = 0 \\), you should collect a very large sample, because then the critical value is bigger.' A test of \\( H_1:\\ \\rho > 0 \\) at the \\( 5\\% \\) level has critical value \\( 0.4973 \\) when \\( n = 12 \\) and critical value \\( 0.1654 \\) when \\( n = 100 \\). Use these values to explain why the student's reasoning is incorrect, and state the correct effect of increasing \\( n \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "sample size", "critical value", "explanation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the two given critical values.", workingLatex: "n = 12:\\ 0.4973 \\qquad n = 100:\\ 0.1654", explanation: "As the sample size rises from \\( 12 \\) to \\( 100 \\), the critical value falls from \\( 0.4973 \\) to \\( 0.1654 \\)." },
        { stepNumber: 2, description: "Identify the student's factual error.", workingLatex: "n \\uparrow \\implies \\text{critical value} \\downarrow \\ (\\text{not } \\uparrow)", explanation: "The student claims a larger sample gives a bigger critical value, but the given values show the opposite: a larger \\( n \\) gives a SMALLER critical value, so the premise of the argument is wrong." },
        { stepNumber: 3, description: "Explain the direction of the effect.", workingLatex: "\\text{larger } n \\implies r \\text{ more reliable, smaller threshold}", explanation: "A larger sample reduces the sampling variability of \\( r \\) under \\( H_0 \\), so even a small observed correlation becomes unlikely by chance; the threshold for significance therefore decreases." },
        { stepNumber: 4, description: "State the correct conclusion about detecting correlation.", workingLatex: "n \\uparrow \\implies \\text{easier to reject } H_0", explanation: "Because the critical value is smaller, a larger sample makes it EASIER (not harder) to reject \\( H_0 \\) and to detect a genuine correlation. The student's reasoning is therefore incorrect in both the claim and its purpose." }
      ],
      finalAnswer: "\\( n \\uparrow \\Rightarrow \\text{ critical value } \\downarrow\\ (0.4973 \\to 0.1654),\\ \\text{so a larger sample makes rejecting } H_0 \\text{ easier, not harder — the student's reasoning is wrong.} \\)",
    },
  },
  {
    id: "y2hc-054",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 054",
    difficulty: "Challenge",
    questionText: "A market analyst examines \\( n = 200 \\) companies and finds the correlation between two financial measures is \\( r = 0.18 \\). Testing \\( H_0:\\ \\rho = 0 \\) against \\( H_1:\\ \\rho \\neq 0 \\) at the \\( 5\\% \\) level uses the critical value \\( 0.1388 \\). The analyst reports that the two measures have 'a strong, statistically proven relationship'. Carry out the test and critique this statement, explaining why a significant result need not indicate a strong relationship.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "sample size", "strength of relationship", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Carry out the two-tailed test.", workingLatex: "|r| = 0.18 > 0.1388 \\implies \\text{reject } H_0", explanation: "Since \\( |r| = 0.18 \\) exceeds the given critical value \\( 0.1388 \\), the result is significant at the \\( 5\\% \\) level: there is evidence of a non-zero correlation." },
        { stepNumber: 2, description: "Distinguish significance from strength.", workingLatex: "\\text{significance} \\ne \\text{strength}", explanation: "Significance answers 'is the correlation likely to be non-zero?', whereas strength is measured by how close \\( |r| \\) is to \\( 1 \\). These are different questions." },
        { stepNumber: 3, description: "Assess the strength of the relationship.", workingLatex: "r = 0.18 \\approx 0 \\ll 1", explanation: "A PMCC of \\( 0.18 \\) is very close to \\( 0 \\), indicating a weak linear relationship: the two measures are barely linearly related, and the scatter would be very spread out." },
        { stepNumber: 4, description: "Explain the role of the large sample.", workingLatex: "\\text{large } n \\implies \\text{tiny critical value} (0.1388)", explanation: "With \\( n = 200 \\) the critical value is very small, so even a weak correlation of \\( 0.18 \\) clears the threshold. A large sample can make a weak relationship statistically significant." },
        { stepNumber: 5, description: "Critique the analyst's statement.", workingLatex: "\\text{significant but weak; nothing 'proven'}", explanation: "The relationship is statistically significant but NOT strong — \\( r = 0.18 \\) is weak. Also, a test never 'proves' anything; it only provides evidence against \\( H_0 \\). The analyst has confused statistical significance with practical strength, so the statement is misleading." }
      ],
      finalAnswer: "\\( |r| = 0.18 > 0.1388,\\ \\text{so the correlation is significant, but } r = 0.18 \\text{ is weak — a large sample makes a weak relationship significant, so calling it 'strong' (or 'proven') is misleading.} \\)",
    },
  },
  {
    id: "y2hc-055",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 055",
    difficulty: "Challenge",
    questionText: "In a study with \\( n = 150 \\), the correlation between hours of background music and worker productivity is \\( r = 0.16 \\). A one-tailed test of \\( H_0:\\ \\rho = 0 \\) against \\( H_1:\\ \\rho > 0 \\) at the \\( 5\\% \\) level uses the critical value \\( 0.1348 \\). Explain what can and cannot be concluded about the usefulness of background music for predicting productivity.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "strength of relationship", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the one-tailed test.", workingLatex: "r = 0.16 > 0.1348 \\implies \\text{reject } H_0", explanation: "Since \\( 0.16 > 0.1348 \\), the result is significant at the \\( 5\\% \\) level: there is evidence of positive correlation between background music and productivity." },
        { stepNumber: 2, description: "State what the significant result allows us to conclude.", workingLatex: "\\rho > 0 \\text{ supported by the evidence}", explanation: "We can conclude there is evidence that the population correlation is positive — productivity tends to rise (slightly) with more background music in this population." },
        { stepNumber: 3, description: "Assess the strength of the relationship.", workingLatex: "r = 0.16 \\text{ is close to } 0", explanation: "A PMCC of only \\( 0.16 \\) indicates a very weak linear relationship; most of the variation in productivity is unrelated to background music. The significant result is largely a consequence of the large sample size \\( n = 150 \\)." },
        { stepNumber: 4, description: "Conclude on usefulness for prediction.", workingLatex: "\\text{significant} \\ne \\text{useful predictor}", explanation: "Although significant, the relationship is too weak to make background music a useful predictor of productivity. A significant \\( r \\) does not imply a strong or practically useful relationship, so we should not rely on music to predict productivity." }
      ],
      finalAnswer: "\\( r = 0.16 > 0.1348,\\ \\text{so there is evidence of positive correlation, but } r = 0.16 \\text{ is very weak — significance (driven by large } n \\text{) does not make music a useful predictor of productivity.} \\)",
    },
  },
  {
    id: "y2hc-056",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 056",
    difficulty: "Challenge",
    questionText: "An agronomist measures the correlation between rainfall and crop yield for \\( n = 18 \\) regions, obtaining \\( r = 0.40 \\). She wishes to test at the \\( 5\\% \\) level whether there is positive correlation. For \\( n = 18 \\) at the \\( 5\\% \\) level, the one-tailed critical value is \\( 0.3994 \\) and the two-tailed critical value is \\( 0.4683 \\). Carry out both a one-tailed test (\\( H_1:\\ \\rho > 0 \\)) and a two-tailed test (\\( H_1:\\ \\rho \\neq 0 \\)), and explain why the choice of test changes the conclusion.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "two-tailed", "conclusion changes"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for each test.", workingLatex: "\\text{One-tailed: } H_0:\\rho = 0,\\ H_1:\\rho > 0 \\\\ \\text{Two-tailed: } H_0:\\rho = 0,\\ H_1:\\rho \\neq 0", explanation: "The same null hypothesis is used; the alternative is directional for the one-tailed test and non-directional for the two-tailed test." },
        { stepNumber: 2, description: "Carry out the one-tailed test.", workingLatex: "r = 0.40 > 0.3994 \\implies \\text{reject } H_0", explanation: "Comparing \\( r \\) with the one-tailed critical value \\( 0.3994 \\): since \\( 0.40 > 0.3994 \\), the result is significant. There is evidence of positive correlation between rainfall and crop yield." },
        { stepNumber: 3, description: "Carry out the two-tailed test.", workingLatex: "|r| = 0.40 < 0.4683 \\implies \\text{do not reject } H_0", explanation: "Comparing \\( |r| \\) with the two-tailed critical value \\( 0.4683 \\): since \\( 0.40 < 0.4683 \\), the result is NOT significant. There is insufficient evidence of any correlation." },
        { stepNumber: 4, description: "Explain why the critical values differ.", workingLatex: "\\text{two-tailed: split } 5\\% \\to 2.5\\% \\text{ each tail}", explanation: "In a two-tailed test the \\( 5\\% \\) is shared between two tails (\\( 2.5\\% \\) each), so a more extreme \\( r \\) is needed to reach significance; hence the two-tailed critical value \\( 0.4683 \\) is larger than the one-tailed \\( 0.3994 \\)." },
        { stepNumber: 5, description: "Explain why the conclusion changes.", workingLatex: "0.3994 < r = 0.40 < 0.4683", explanation: "The observed \\( r = 0.40 \\) lies between the two critical values, so it is significant one-tailed but not two-tailed. The same data give different conclusions depending on the tail choice." },
        { stepNumber: 6, description: "Comment on justifying the choice.", workingLatex: "\\text{choose tail BEFORE seeing the data}", explanation: "The decision between one- and two-tailed must be made in advance and justified by the context. A one-tailed test is only valid if there is prior reason to expect a positive correlation; otherwise the (more conservative) two-tailed test should be used, here giving a non-significant result." }
      ],
      finalAnswer: "\\( \\text{One-tailed: } 0.40 > 0.3994 \\Rightarrow \\text{ reject } H_0 \\text{ (significant); two-tailed: } 0.40 < 0.4683 \\Rightarrow \\text{ do not reject } H_0. \\text{ The conclusion changes because } 0.3994 < 0.40 < 0.4683; \\text{ the tail choice must be fixed in advance.} \\)",
    },
  },
  {
    id: "y2hc-057",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 057",
    difficulty: "Challenge",
    questionText: "A psychologist expected, before collecting any data, that two test scores would be negatively correlated. For \\( n = 22 \\) participants she finds \\( r = -0.38 \\). At the \\( 5\\% \\) level the one-tailed critical value is \\( 0.3598 \\) and the two-tailed critical value is \\( 0.4227 \\). She runs a two-tailed test, gets a non-significant result, and concludes 'there is no correlation'. Explain why a one-tailed test would have been appropriate here, carry it out, and critique her conclusion.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "two-tailed", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Carry out the two-tailed test she used.", workingLatex: "|r| = 0.38 < 0.4227 \\implies \\text{do not reject } H_0", explanation: "For \\( H_1:\\rho \\neq 0 \\), since \\( |{-0.38}| = 0.38 < 0.4227 \\), the result is not significant, which is the outcome she obtained." },
        { stepNumber: 2, description: "Explain why a one-tailed test is justified.", workingLatex: "\\text{prediction made BEFORE data: } H_1:\\ \\rho < 0", explanation: "She had a clear, pre-stated expectation of a negative correlation. When a direction is predicted in advance on sound grounds, a one-tailed test (\\( H_1:\\rho < 0 \\)) is the appropriate, more powerful choice." },
        { stepNumber: 3, description: "Carry out the one-tailed test.", workingLatex: "r = -0.38,\\quad |r| = 0.38 > 0.3598 \\implies \\text{reject } H_0", explanation: "For a lower-tail test we compare with \\( -0.3598 \\): since \\( -0.38 < -0.3598 \\) (equivalently \\( 0.38 > 0.3598 \\)), the result IS significant. There is evidence of negative correlation." },
        { stepNumber: 4, description: "Identify the error in her conclusion.", workingLatex: "\\text{'no correlation' overstates a non-significant result}", explanation: "Even the two-tailed non-significant result does not prove 'no correlation' — it only means there was insufficient evidence to reject \\( H_0 \\). Failing to reject \\( H_0 \\) is not the same as accepting it." },
        { stepNumber: 5, description: "State the correct conclusion.", workingLatex: "0.3598 < 0.38 < 0.4227", explanation: "Because \\( 0.38 \\) lies between the two critical values, the correct (one-tailed) test gives a significant result. Her use of a two-tailed test was unnecessarily conservative and led her to wrongly dismiss a real, predicted negative correlation." }
      ],
      finalAnswer: "\\( \\text{One-tailed (justified): } 0.38 > 0.3598 \\Rightarrow \\text{ reject } H_0 \\text{ (significant negative corr.)}; \\text{ two-tailed: } 0.38 < 0.4227 \\text{ (not significant). 'No correlation' wrongly equates failing to reject with accepting } H_0. \\)",
    },
  },
  {
    id: "y2hc-058",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 058",
    difficulty: "Challenge",
    questionText: "For a sample of \\( n = 25 \\) athletes, the correlation between training hours and performance score is \\( r = 0.42 \\). A two-tailed test of \\( H_0:\\ \\rho = 0 \\) against \\( H_1:\\ \\rho \\neq 0 \\) is considered. The two-tailed critical values are \\( 0.3961 \\) at the \\( 5\\% \\) level and \\( 0.5052 \\) at the \\( 1\\% \\) level. Test at both levels, compare the conclusions, and explain why a more demanding significance level can change the outcome.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "5% vs 1%", "significance level", "comparison"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Carry out the test at the 5% level.", workingLatex: "|r| = 0.42 > 0.3961 \\implies \\text{reject } H_0", explanation: "At the \\( 5\\% \\) level, \\( |r| = 0.42 \\) exceeds the critical value \\( 0.3961 \\), so the result is significant: there is evidence of correlation between training hours and performance." },
        { stepNumber: 2, description: "Carry out the test at the 1% level.", workingLatex: "|r| = 0.42 < 0.5052 \\implies \\text{do not reject } H_0", explanation: "At the \\( 1\\% \\) level the critical value rises to \\( 0.5052 \\). Since \\( 0.42 < 0.5052 \\), the result is NOT significant: there is insufficient evidence of correlation at this stricter level." },
        { stepNumber: 3, description: "Explain why the critical value increases.", workingLatex: "1\\% < 5\\% \\implies \\text{smaller rejection region} \\implies \\text{larger CV}", explanation: "A \\( 1\\% \\) level demands stronger evidence before rejecting \\( H_0 \\). The rejection region is smaller, so the critical value is further from \\( 0 \\) (\\( 0.5052 \\) vs \\( 0.3961 \\))." },
        { stepNumber: 4, description: "Explain why the conclusion changes.", workingLatex: "0.3961 < r = 0.42 < 0.5052", explanation: "The observed \\( r = 0.42 \\) lies between the two critical values, so it is significant at \\( 5\\% \\) but not at \\( 1\\% \\). Lowering the significance level reduces the chance of a Type I error but makes it harder to reject \\( H_0 \\)." },
        { stepNumber: 5, description: "Conclude in context.", workingLatex: "\\text{evidence is moderate, not strong}", explanation: "There is moderate evidence of correlation between training hours and performance — enough to be significant at \\( 5\\% \\) but not at the more stringent \\( 1\\% \\) level. The strength of the conclusion depends on the significance level chosen." }
      ],
      finalAnswer: "\\( 5\\%:\\ 0.42 > 0.3961 \\Rightarrow \\text{ reject } H_0;\\ 1\\%:\\ 0.42 < 0.5052 \\Rightarrow \\text{ do not reject } H_0. \\text{ The stricter } 1\\% \\text{ level has a larger critical value, so the same } r \\text{ (lying between them) gives only moderate evidence of correlation.} \\)",
    },
  },
  {
    id: "y2hc-059",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 059",
    difficulty: "Challenge",
    questionText: "A geographer tests \\( H_0:\\ \\rho = 0 \\) against \\( H_1:\\ \\rho > 0 \\) for \\( n = 30 \\) river sites, finding \\( r = 0.55 \\). The one-tailed critical values are \\( 0.3061 \\) at the \\( 5\\% \\) level and \\( 0.4226 \\) at the \\( 1\\% \\) level. State the conclusion at each level, and explain what it means that the result is significant at the \\( 1\\% \\) level as well as the \\( 5\\% \\) level.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "5% vs 1%", "significance level", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Test at the 5% level.", workingLatex: "r = 0.55 > 0.3061 \\implies \\text{reject } H_0", explanation: "Since \\( 0.55 > 0.3061 \\), the result is significant at the \\( 5\\% \\) level: there is evidence of positive correlation." },
        { stepNumber: 2, description: "Test at the 1% level.", workingLatex: "r = 0.55 > 0.4226 \\implies \\text{reject } H_0", explanation: "Since \\( 0.55 > 0.4226 \\), the result is ALSO significant at the stricter \\( 1\\% \\) level." },
        { stepNumber: 3, description: "Interpret significance at the stricter level.", workingLatex: "\\text{significant at } 1\\% \\implies \\text{stronger evidence}", explanation: "Being significant at \\( 1\\% \\) (not just \\( 5\\% \\)) means the evidence against \\( H_0 \\) is stronger: a result this extreme would occur by chance under \\( H_0 \\) less than \\( 1 \\) time in \\( 100 \\)." },
        { stepNumber: 4, description: "Conclude in context.", workingLatex: "\\text{strong evidence of positive correlation}", explanation: "There is strong evidence of positive correlation between the river-site variables: the conclusion holds even when we demand a much smaller risk of a Type I error, so we can be more confident the correlation is real." }
      ],
      finalAnswer: "\\( 5\\%:\\ 0.55 > 0.3061 \\text{ and } 1\\%:\\ 0.55 > 0.4226,\\ \\text{so reject } H_0 \\text{ at both levels — significance at the } 1\\% \\text{ level means stronger evidence of positive correlation (chance probability under } H_0 \\text{ below } 1\\%).} \\)",
    },
  },
  {
    id: "y2hc-060",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 060",
    difficulty: "Challenge",
    questionText: "A biologist studies the correlation between a pollutant level and a fish health index across \\( n = 16 \\) lakes, finding \\( r = -0.45 \\). She suspected, before collecting data, that higher pollutant levels reduce fish health. The relevant critical values at the \\( 5\\% \\) level are: one-tailed \\( 0.4259 \\) and two-tailed \\( 0.4973 \\). Carry out the most appropriate test, state the conclusion, and explain why an inappropriate choice of test (two-tailed) would have changed the conclusion. Comment on what the significant result does and does not establish.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one-tailed", "two-tailed", "5% vs 1%", "conclusion changes", "synthesis"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Choose and justify the appropriate test.", workingLatex: "\\text{prior prediction of decline} \\implies H_1:\\ \\rho < 0 \\ (\\text{one-tailed})", explanation: "Because the biologist predicted a negative relationship in advance, a one-tailed lower test is appropriate, with \\( H_0:\\rho = 0 \\) against \\( H_1:\\rho < 0 \\)." },
        { stepNumber: 2, description: "Carry out the one-tailed test.", workingLatex: "r = -0.45,\\ |r| = 0.45 > 0.4259 \\implies \\text{reject } H_0", explanation: "Compare with the lower critical value \\( -0.4259 \\): since \\( -0.45 < -0.4259 \\) (i.e. \\( 0.45 > 0.4259 \\)), the result is significant. There is evidence of negative correlation between pollutant level and fish health." },
        { stepNumber: 3, description: "Show the two-tailed test would not be significant.", workingLatex: "|r| = 0.45 < 0.4973 \\implies \\text{do not reject } H_0", explanation: "Had she used a two-tailed test (\\( H_1:\\rho \\neq 0 \\)), \\( 0.45 < 0.4973 \\), so the result would NOT be significant." },
        { stepNumber: 4, description: "Explain why the conclusion changes with the test choice.", workingLatex: "0.4259 < r = 0.45 < 0.4973", explanation: "The observed \\( |r| = 0.45 \\) lies between the one- and two-tailed critical values, so the conclusion depends entirely on the tail choice. The one-tailed test (justified by the prior prediction) is significant; an unjustified two-tailed test would have missed the effect." },
        { stepNumber: 5, description: "State what the significant result establishes.", workingLatex: "\\rho < 0 \\text{ supported}", explanation: "We have evidence that the population correlation is negative — higher pollutant levels are associated with lower fish health across these lakes." },
        { stepNumber: 6, description: "State the limitations of the result.", workingLatex: "\\text{association} \\ne \\text{causation; } |r|=0.45 \\text{ moderate}", explanation: "The test does not prove the pollutant CAUSES poorer fish health — other factors (e.g. temperature, oxygen levels) could be confounding variables — and \\( r = -0.45 \\) indicates only a moderate, not strong, linear relationship. The conclusion must remain an evidenced association at the \\( 5\\% \\) level, not a proven causal mechanism." }
      ],
      finalAnswer: "\\( \\text{One-tailed (justified): } 0.45 > 0.4259 \\Rightarrow \\text{ reject } H_0 \\text{ (significant negative corr.)}; \\text{ two-tailed: } 0.45 < 0.4973 \\text{ (not sig.) since } 0.4259 < 0.45 < 0.4973. \\text{ Shows association, not causation; } r = -0.45 \\text{ is only moderate.} \\)",
    },
  },
  {
    id: "y2hc-061",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 061",
    difficulty: "Challenge",
    questionText: "A researcher records, for a random sample of \\( 12 \\) towns, the number of fast-food outlets \\( x \\) and the mean adult body mass index \\( y \\). The product moment correlation coefficient for the sample is \\( r = 0.612 \\). The critical value for a two-tailed test at the \\( 5\\% \\) significance level with \\( n = 12 \\) is \\( 0.5760 \\). (a) State suitable hypotheses for a test of whether there is a correlation between the number of outlets and mean BMI, defining your symbol. (b) Carry out the test at the \\( 5\\% \\) level and state your conclusion in context. (c) The researcher concludes that building fewer outlets would reduce BMI. Comment on this conclusion.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "critical value", "two-tailed", "critique", "causation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population correlation coefficient and state the hypotheses for a two-tailed test.", workingLatex: "\\rho = \\text{population PMCC between number of outlets and mean BMI} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho \\neq 0", explanation: "We test whether the underlying population correlation is zero. Because the researcher asks only whether a correlation exists (not its direction), the alternative is two-tailed, \\( \\rho \\neq 0 \\)." },
        { stepNumber: 2, description: "Write down the comparison the test requires.", workingLatex: "\\text{Reject } H_0 \\text{ if } |r| > \\text{critical value} = 0.5760", explanation: "For a two-tailed test we compare the magnitude of the sample PMCC with the given critical value at the \\( 5\\% \\) level." },
        { stepNumber: 3, description: "Compare the observed \\( r \\) with the critical value.", workingLatex: "|r| = 0.612 > 0.5760", explanation: "The sample correlation \\( 0.612 \\) exceeds the critical value \\( 0.5760 \\), so the result falls in the critical region." },
        { stepNumber: 4, description: "State the statistical decision.", workingLatex: "0.612 > 0.5760 \\implies \\text{reject } H_0", explanation: "Because \\( r \\) lies beyond the critical value we reject the null hypothesis at the \\( 5\\% \\) level." },
        { stepNumber: 5, description: "Interpret the decision in context.", workingLatex: "\\text{Significant positive association at } 5\\%", explanation: "There is evidence at the \\( 5\\% \\) significance level of a (positive) correlation between the number of fast-food outlets and mean adult BMI across towns." },
        { stepNumber: 6, description: "Critique the causal conclusion (part c).", workingLatex: "\\text{correlation} \\neq \\text{causation}", explanation: "The conclusion is not justified. A significant correlation does not establish that outlets cause higher BMI: the association could be driven by a confounding factor (for example population wealth or density), or the causation could run the other way. Reducing outlets cannot be assumed to reduce BMI on the basis of this test." }
      ],
      finalAnswer: "\\( |r| = 0.612 > 0.5760,\\ \\text{so reject } H_0 \\text{ — evidence at } 5\\% \\text{ of correlation; but correlation does not imply causation, so the causal claim is unjustified.} \\)",
    },
  },
  {
    id: "y2hc-062",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 062",
    difficulty: "Challenge",
    questionText: "An agronomist studies whether higher rainfall is associated with higher wheat yield. For a random sample of \\( 15 \\) fields she finds a product moment correlation coefficient of \\( r = 0.452 \\). For a one-tailed test with \\( n = 15 \\) the critical values are \\( 0.4409 \\) at the \\( 5\\% \\) level and \\( 0.5923 \\) at the \\( 1\\% \\) level. (a) State the hypotheses, justifying your choice of a one-tailed test. (b) Test the claim at both the \\( 5\\% \\) and the \\( 1\\% \\) levels of significance, stating each conclusion in context. (c) Comment on the strength of the evidence given that the result is only just significant at the \\( 5\\% \\) level.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "two significance levels", "one-tailed", "critique", "near-critical"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses and justify the one-tailed choice.", workingLatex: "\\rho = \\text{population PMCC between rainfall and yield} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho > 0", explanation: "The agronomist asks specifically whether higher rainfall is associated with higher yield — a directional (positive) claim — so a one-tailed test with \\( H_1:\\ \\rho > 0 \\) is appropriate." },
        { stepNumber: 2, description: "Test at the \\( 5\\% \\) level.", workingLatex: "r = 0.452 > 0.4409", explanation: "At the \\( 5\\% \\) level the critical value is \\( 0.4409 \\). Since \\( 0.452 > 0.4409 \\), the result is in the critical region: reject \\( H_0 \\)." },
        { stepNumber: 3, description: "Interpret the \\( 5\\% \\) result in context.", workingLatex: "\\text{Reject } H_0 \\text{ at } 5\\%", explanation: "There is evidence at the \\( 5\\% \\) level of positive correlation between rainfall and wheat yield." },
        { stepNumber: 4, description: "Test at the \\( 1\\% \\) level.", workingLatex: "r = 0.452 < 0.5923", explanation: "At the \\( 1\\% \\) level the critical value is \\( 0.5923 \\). Since \\( 0.452 < 0.5923 \\), the result is not in the critical region: do not reject \\( H_0 \\)." },
        { stepNumber: 5, description: "Interpret the \\( 1\\% \\) result in context.", workingLatex: "\\text{Do not reject } H_0 \\text{ at } 1\\%", explanation: "At the stricter \\( 1\\% \\) level there is insufficient evidence of positive correlation between rainfall and yield." },
        { stepNumber: 6, description: "Comment on the strength of evidence (part c).", workingLatex: "0.4409 < 0.452 \\ll 0.5923", explanation: "The evidence is weak. The sample value \\( 0.452 \\) only just exceeds the \\( 5\\% \\) critical value and falls well short of the \\( 1\\% \\) value, so the conclusion is sensitive to the chosen significance level. A small change in the data could reverse the decision, so the result should be treated with caution rather than as firm evidence." }
      ],
      finalAnswer: "\\( r = 0.452 > 0.4409 \\text{ (reject at } 5\\%) \\text{ but } 0.452 < 0.5923 \\text{ (do not reject at } 1\\%) \\text{ — only marginal evidence, conclusion is level-sensitive.} \\)",
    },
  },
  {
    id: "y2hc-063",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 063",
    difficulty: "Challenge",
    questionText: "A teacher records the number of hours \\( x \\) that each of \\( 10 \\) students spent revising and their test score \\( y \\). The product moment correlation coefficient is \\( r = 0.658 \\). The critical value for a two-tailed test at the \\( 5\\% \\) level with \\( n = 10 \\) is \\( 0.6319 \\). (a) Test at the \\( 5\\% \\) level whether there is a correlation between revision time and score, stating your conclusion in context. (b) On inspecting the data the teacher notices one student who revised for many hours but scored very poorly, lying far from the pattern of the other points. Explain how removing this point would be likely to affect \\( r \\) and the outcome of the test, and discuss whether the point should be removed.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "outlier", "critique", "two-tailed", "critical value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses.", workingLatex: "\\rho = \\text{population PMCC between revision time and score} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho \\neq 0", explanation: "A two-tailed test is used as we are testing for any correlation between revision time and score." },
        { stepNumber: 2, description: "Compare \\( r \\) with the critical value.", workingLatex: "|r| = 0.658 > 0.6319", explanation: "The sample PMCC exceeds the \\( 5\\% \\) two-tailed critical value, so the observation is in the critical region." },
        { stepNumber: 3, description: "State the decision and conclusion in context.", workingLatex: "0.658 > 0.6319 \\implies \\text{reject } H_0", explanation: "Reject \\( H_0 \\): there is evidence at the \\( 5\\% \\) level of a positive correlation between revision time and test score." },
        { stepNumber: 4, description: "Describe the effect of the outlier on \\( r \\) (part b).", workingLatex: "\\text{outlier opposes the trend} \\Rightarrow r \\text{ is reduced}", explanation: "The flagged point (long revision, low score) runs against the positive pattern, so it pulls \\( r \\) down. Removing it would increase \\( r \\), strengthening the apparent positive correlation." },
        { stepNumber: 5, description: "Explain the effect on the test outcome.", workingLatex: "r_{\\text{new}} > 0.658 > 0.6319", explanation: "Since the current \\( r \\) is already significant and removing the outlier raises \\( r \\), the test would still reject \\( H_0 \\) — and more emphatically. The single outlier was masking, not creating, the significant result." },
        { stepNumber: 6, description: "Discuss whether the point should be removed.", workingLatex: "\\text{Remove only if justified}", explanation: "A point should not be discarded merely because it is inconvenient. It should only be removed if there is a genuine reason (for example a recording error or that the student was unwell). Otherwise it is valid data and removing it would bias the analysis and overstate the correlation." }
      ],
      finalAnswer: "\\( |r| = 0.658 > 0.6319,\\ \\text{reject } H_0; \\text{ removing the contrary outlier would raise } r \\text{ but it should only be removed with valid justification.} \\)",
    },
  },
  {
    id: "y2hc-064",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 064",
    difficulty: "Challenge",
    questionText: "For a random sample of \\( 20 \\) cars, an engineer records engine size \\( x \\) (litres) and fuel consumption \\( y \\) (litres per 100 km). The product moment correlation coefficient is \\( r = 0.704 \\). The car sizes in the sample range from \\( 1.0 \\) to \\( 2.5 \\) litres. For a one-tailed test at the \\( 1\\% \\) level with \\( n = 20 \\) the critical value is \\( 0.5155 \\). (a) Test, at the \\( 1\\% \\) level, the claim that larger engines have higher fuel consumption, stating your conclusion in context. (b) Using the result, the engineer predicts the fuel consumption of a \\( 6.0 \\) litre engine. Critique this prediction. (c) State one further assumption that should hold for the PMCC test to be valid here.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "extrapolation", "critique", "one-tailed", "prediction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the directional claim.", workingLatex: "\\rho = \\text{population PMCC between engine size and consumption} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho > 0", explanation: "The claim is that larger engines give higher consumption — a positive directional claim — so a one-tailed test with \\( H_1:\\ \\rho > 0 \\) is used." },
        { stepNumber: 2, description: "Compare \\( r \\) with the \\( 1\\% \\) critical value.", workingLatex: "r = 0.704 > 0.5155", explanation: "The sample PMCC exceeds the one-tailed critical value at the \\( 1\\% \\) level, so the result lies in the critical region." },
        { stepNumber: 3, description: "State the decision and conclusion in context.", workingLatex: "0.704 > 0.5155 \\implies \\text{reject } H_0", explanation: "Reject \\( H_0 \\): there is strong evidence at the \\( 1\\% \\) level that larger engines are associated with higher fuel consumption." },
        { stepNumber: 4, description: "Critique the \\( 6.0 \\) litre prediction (part b).", workingLatex: "6.0 \\notin [1.0,\\ 2.5]", explanation: "A \\( 6.0 \\) litre engine lies far outside the sampled range \\( 1.0 \\) to \\( 2.5 \\) litres. Predicting for it is extrapolation: the linear relationship found within the data need not continue beyond it, so the prediction is unreliable." },
        { stepNumber: 5, description: "Reinforce why the correlation does not license the prediction.", workingLatex: "\\text{validity of } r \\text{ limited to observed range}", explanation: "A significant PMCC only describes the strength of linear association across the observed values; it gives no information about behaviour outside that range, so the engineer should not use it to predict at \\( 6.0 \\) litres." },
        { stepNumber: 6, description: "State a required assumption (part c).", workingLatex: "\\text{(x,y) approximately bivariate Normal / linear relationship}", explanation: "For the PMCC test to be valid the data should come from a bivariate Normal distribution (so the underlying relationship is linear). Without approximate linearity and Normality the critical value and conclusion may not be reliable." }
      ],
      finalAnswer: "\\( r = 0.704 > 0.5155,\\ \\text{reject } H_0; \\text{ predicting at } 6.0 \\text{ L is unsafe extrapolation, and the test assumes a bivariate Normal (linear) relationship.} \\)",
    },
  },
  {
    id: "y2hc-065",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 065",
    difficulty: "Challenge",
    questionText: "A biologist measures, for \\( 14 \\) ponds, the water temperature \\( x \\) and the rate of algal growth \\( y \\). A scatter diagram shows the points rising to a peak and then falling, forming a clear curved pattern. The biologist computes \\( r = 0.143 \\) and, for a two-tailed test at the \\( 5\\% \\) level with \\( n = 14 \\), uses the critical value \\( 0.5324 \\). (a) Carry out the test and state the statistical conclusion. (b) The biologist concludes that temperature and algal growth are unrelated. Explain why this conclusion is unsafe, referring to the scatter diagram. (c) State, with a reason, whether a PMCC test is appropriate for these data.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "appropriateness", "linearity", "bivariate normal", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses.", workingLatex: "\\rho = \\text{population PMCC between temperature and algal growth} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho \\neq 0", explanation: "A two-tailed test is used to test for linear correlation between temperature and algal growth." },
        { stepNumber: 2, description: "Compare \\( r \\) with the critical value.", workingLatex: "|r| = 0.143 < 0.5324", explanation: "The magnitude of the sample PMCC is well below the \\( 5\\% \\) two-tailed critical value, so the result is not in the critical region." },
        { stepNumber: 3, description: "State the statistical decision.", workingLatex: "0.143 < 0.5324 \\implies \\text{do not reject } H_0", explanation: "There is insufficient evidence at the \\( 5\\% \\) level of a (linear) correlation between temperature and algal growth." },
        { stepNumber: 4, description: "Explain why 'unrelated' is unsafe (part b).", workingLatex: "r \\approx 0 \\text{ measures only LINEAR association}", explanation: "The PMCC measures linear association only. The scatter diagram rises then falls — a strong non-linear (curved) relationship — and such a relationship can give \\( r \\) near zero. So a small \\( r \\) does not mean the variables are unrelated; here they are clearly related, just not linearly." },
        { stepNumber: 5, description: "Connect the curved pattern to the low \\( r \\).", workingLatex: "\\text{curved trend} \\Rightarrow r \\text{ understates the true relationship}", explanation: "Because the trend reverses, positive and negative contributions to \\( r \\) cancel, producing a value close to \\( 0 \\) despite a strong underlying relationship." },
        { stepNumber: 6, description: "Judge appropriateness of the PMCC test (part c).", workingLatex: "\\text{Not appropriate — relationship is non-linear}", explanation: "A PMCC test is not appropriate here. It assumes an underlying linear (bivariate Normal) relationship, but the data are clearly curved. The test and its conclusion are therefore invalid; a different method is needed to describe this relationship." }
      ],
      finalAnswer: "\\( |r| = 0.143 < 0.5324,\\ \\text{do not reject } H_0; \\text{ but the curved scatter shows a non-linear relationship, so the PMCC test is inappropriate and 'unrelated' is wrong.} \\)",
    },
  },
  {
    id: "y2hc-066",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 066",
    difficulty: "Challenge",
    questionText: "A psychologist believes that the more hours people spend on social media, the lower their reported sleep quality. For a random sample of \\( 18 \\) people she finds \\( r = -0.461 \\). She is unsure whether to use a one-tailed or a two-tailed test. The critical values with \\( n = 18 \\) are: one-tailed \\( 5\\% \\), \\( 0.3994 \\); two-tailed \\( 5\\% \\), \\( 0.4683 \\). (a) State which test is appropriate to her belief and justify your choice. (b) Carry out the appropriate test at the \\( 5\\% \\) level and state your conclusion in context. (c) State what the conclusion would have been had she instead used the other test, and comment.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "one vs two tailed", "justify", "critical value", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Decide one- vs two-tailed and justify (part a).", workingLatex: "H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho < 0", explanation: "Her belief is directional — that more social media goes with lower sleep quality, i.e. negative correlation. A one-tailed test with \\( H_1:\\ \\rho < 0 \\) matches a prediction made in advance about the direction, so it is the appropriate choice." },
        { stepNumber: 2, description: "Select the matching critical value.", workingLatex: "\\text{one-tailed } 5\\%:\\ \\text{critical value } = -0.3994", explanation: "For a lower-tailed test we compare \\( r \\) with the negative critical value \\( -0.3994 \\) (reject \\( H_0 \\) if \\( r < -0.3994 \\))." },
        { stepNumber: 3, description: "Carry out the one-tailed test (part b).", workingLatex: "r = -0.461 < -0.3994 \\implies \\text{reject } H_0", explanation: "Since \\( -0.461 \\) is more negative than \\( -0.3994 \\), the result is in the critical region: reject \\( H_0 \\). There is evidence at the \\( 5\\% \\) level of negative correlation between social-media hours and sleep quality." },
        { stepNumber: 4, description: "Find the outcome of the two-tailed test (part c).", workingLatex: "|r| = 0.461 < 0.4683 \\implies \\text{do not reject } H_0", explanation: "Had she used a two-tailed test, the critical value would be \\( 0.4683 \\). Since \\( 0.461 < 0.4683 \\), she would not reject \\( H_0 \\): no significant correlation at the \\( 5\\% \\) level." },
        { stepNumber: 5, description: "Comment on the difference.", workingLatex: "\\text{one-tailed: reject;\\quad two-tailed: do not reject}", explanation: "The two tests give opposite conclusions because the one-tailed test places the whole \\( 5\\% \\) in one tail, giving a smaller critical value and more power to detect a predicted direction. This is why the tail choice must be decided from the research question before seeing the data, not chosen to obtain a significant result." }
      ],
      finalAnswer: "\\( \\text{One-tailed: } r=-0.461 < -0.3994 \\Rightarrow \\text{reject } H_0; \\text{ two-tailed: } 0.461 < 0.4683 \\Rightarrow \\text{do not reject — tail choice must be fixed in advance.} \\)",
    },
  },
  {
    id: "y2hc-067",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 067",
    difficulty: "Challenge",
    questionText: "A health analyst tests whether daily step count \\( x \\) is correlated with resting heart rate \\( y \\) for a random sample of \\( 25 \\) adults, obtaining \\( r = -0.396 \\). For a two-tailed test with \\( n = 25 \\) the critical values are \\( 0.3961 \\) at the \\( 5\\% \\) level and \\( 0.5052 \\) at the \\( 1\\% \\) level. (a) Carry out the test at the \\( 5\\% \\) level and state your conclusion in context. (b) Interpret the result, given how close \\( r \\) is to the \\( 5\\% \\) critical value. (c) Explain the effect on your conclusion of testing at the \\( 1\\% \\) level instead.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "near-critical", "interpretation", "two significance levels", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses.", workingLatex: "\\rho = \\text{population PMCC between step count and resting heart rate} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho \\neq 0", explanation: "A two-tailed test for any correlation between step count and resting heart rate." },
        { stepNumber: 2, description: "Compare \\( |r| \\) with the \\( 5\\% \\) critical value (part a).", workingLatex: "|r| = 0.396 < 0.3961", explanation: "The magnitude of \\( r \\) is just below the \\( 5\\% \\) critical value \\( 0.3961 \\)." },
        { stepNumber: 3, description: "State the statistical decision and conclusion.", workingLatex: "0.396 < 0.3961 \\implies \\text{do not reject } H_0", explanation: "Do not reject \\( H_0 \\): there is insufficient evidence at the \\( 5\\% \\) level of correlation between daily step count and resting heart rate." },
        { stepNumber: 4, description: "Interpret the near-critical result (part b).", workingLatex: "0.396 \\approx 0.3961 \\ (\\text{difference} \\approx 0.0001)", explanation: "The result is extremely close to the boundary — it fails to reach significance by a tiny margin. Such a borderline outcome should be reported with caution: the data are very nearly significant, and a slightly larger sample or minor change in the data could tip the decision. It would be misleading to state firmly that there is 'no relationship'." },
        { stepNumber: 5, description: "Effect of testing at the \\( 1\\% \\) level (part c).", workingLatex: "|r| = 0.396 < 0.5052 \\implies \\text{do not reject } H_0", explanation: "At the stricter \\( 1\\% \\) level the critical value rises to \\( 0.5052 \\), which \\( 0.396 \\) is well below, so \\( H_0 \\) is again not rejected — and now by a clear margin. Lowering the significance level makes it harder to reject \\( H_0 \\), so the conclusion is unchanged but no longer borderline." }
      ],
      finalAnswer: "\\( |r| = 0.396 < 0.3961,\\ \\text{do not reject } H_0 \\text{ (only just); at } 1\\% \\text{ the critical value } 0.5052 \\text{ leaves } H_0 \\text{ comfortably not rejected.} \\)",
    },
  },
  {
    id: "y2hc-068",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 068",
    difficulty: "Challenge",
    questionText: "A journalist surveys visitors leaving a single gym on a Monday morning, recording weekly exercise hours \\( x \\) and self-reported happiness \\( y \\) for \\( 16 \\) people. She finds \\( r = 0.589 \\). The critical value for a two-tailed test at the \\( 5\\% \\) level with \\( n = 16 \\) is \\( 0.4973 \\). (a) Test at the \\( 5\\% \\) level whether there is a correlation, stating your conclusion in context. (b) Give two reasons why the sample may not support a general claim about the population of all adults. (c) The journalist writes that 'exercising more makes people happier'. Explain why the test does not justify this.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "sampling", "critique", "two-tailed", "causation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses.", workingLatex: "\\rho = \\text{population PMCC between exercise hours and happiness} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho \\neq 0", explanation: "A two-tailed test for correlation between exercise hours and happiness." },
        { stepNumber: 2, description: "Compare \\( r \\) with the critical value (part a).", workingLatex: "|r| = 0.589 > 0.4973", explanation: "The sample PMCC exceeds the \\( 5\\% \\) two-tailed critical value, so the result is in the critical region." },
        { stepNumber: 3, description: "State the decision and conclusion in context.", workingLatex: "0.589 > 0.4973 \\implies \\text{reject } H_0", explanation: "Reject \\( H_0 \\): there is evidence at the \\( 5\\% \\) level of a positive correlation between weekly exercise hours and happiness among those surveyed." },
        { stepNumber: 4, description: "First sampling criticism (part b).", workingLatex: "\\text{sample drawn from one gym} \\Rightarrow \\text{not representative}", explanation: "Everyone surveyed already attends a gym, so the sample is not representative of all adults (it excludes non-exercisers entirely). The conclusion cannot be generalised to the whole population." },
        { stepNumber: 5, description: "Second sampling criticism.", workingLatex: "\\text{one location, one time, } n=16", explanation: "The data come from a single gym on a single Monday morning and the sample is small (\\( 16 \\)). This makes the sample unlikely to be random or representative, and time/place may bias the type of person captured." },
        { stepNumber: 6, description: "Explain why causation is not justified (part c).", workingLatex: "\\text{correlation} \\neq \\text{causation}", explanation: "A significant correlation does not show that exercising more causes greater happiness. The direction could be reversed (happier people may choose to exercise more) or a third variable (such as health or income) could drive both. So the causal claim is not supported by the test." }
      ],
      finalAnswer: "\\( |r| = 0.589 > 0.4973,\\ \\text{reject } H_0; \\text{ but the gym-only, single-time sample is unrepresentative and correlation does not justify the causal claim.} \\)",
    },
  },
  {
    id: "y2hc-069",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 069",
    difficulty: "Challenge",
    questionText: "An economist examines the relationship between average years of schooling \\( x \\) and gross domestic product per capita \\( y \\) for a sample of \\( 11 \\) countries, finding \\( r = 0.553 \\). The critical values for a two-tailed test with \\( n = 11 \\) are \\( 0.6021 \\) at the \\( 5\\% \\) level and \\( 0.7348 \\) at the \\( 1\\% \\) level. (a) Test at the \\( 5\\% \\) level and state your conclusion in context. (b) The economist notes that one very wealthy country with relatively low schooling lies far from the other points. Explain how this single country is likely to be affecting \\( r \\) and the test result. (c) Explain what would happen to your conclusion if the test were carried out at the \\( 1\\% \\) level.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "outlier", "two significance levels", "critique", "two-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses.", workingLatex: "\\rho = \\text{population PMCC between schooling and GDP per capita} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho \\neq 0", explanation: "A two-tailed test for correlation between years of schooling and GDP per capita." },
        { stepNumber: 2, description: "Compare \\( |r| \\) with the \\( 5\\% \\) critical value (part a).", workingLatex: "|r| = 0.553 < 0.6021", explanation: "The sample PMCC is below the \\( 5\\% \\) two-tailed critical value, so the result is not in the critical region." },
        { stepNumber: 3, description: "State the decision and conclusion.", workingLatex: "0.553 < 0.6021 \\implies \\text{do not reject } H_0", explanation: "Do not reject \\( H_0 \\): there is insufficient evidence at the \\( 5\\% \\) level of a correlation between schooling and GDP per capita." },
        { stepNumber: 4, description: "Explain the outlier's effect on \\( r \\) (part b).", workingLatex: "\\text{outlier: high } y, \\text{ low } x \\Rightarrow \\text{opposes positive trend}", explanation: "A wealthy country with low schooling sits against the otherwise positive pattern, pulling \\( r \\) down. This distortion from one point is plausibly why \\( r \\) fell short of significance; without it \\( r \\) would likely be larger." },
        { stepNumber: 5, description: "Comment on the test result given the outlier.", workingLatex: "r_{\\text{without outlier}} > 0.553", explanation: "Because a single influential point can dominate a small sample (\\( n = 11 \\)), the non-significant result is fragile: removing or correcting this country could change the outcome. The economist should investigate the point rather than treat 'no correlation' as established." },
        { stepNumber: 6, description: "Effect of testing at the \\( 1\\% \\) level (part c).", workingLatex: "|r| = 0.553 < 0.6021 < 0.7348", explanation: "At the \\( 1\\% \\) level the critical value is even larger (\\( 0.7348 \\)), so \\( 0.553 \\) is again below it and \\( H_0 \\) is still not rejected. Using a stricter level makes rejection harder, so the conclusion is unchanged." }
      ],
      finalAnswer: "\\( |r| = 0.553 < 0.6021,\\ \\text{do not reject } H_0; \\text{ one contrary outlier likely depressed } r, \\text{ and at } 1\\% \\ (0.7348) \\ H_0 \\text{ is still not rejected.} \\)",
    },
  },
  {
    id: "y2hc-070",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 070",
    difficulty: "Challenge",
    questionText: "A sports scientist tests whether longer warm-up time \\( x \\) is associated with faster sprint time \\( y \\) (so a negative correlation is predicted) for a random sample of \\( 22 \\) athletes, obtaining \\( r = -0.602 \\). For a one-tailed test with \\( n = 22 \\) the critical value at the \\( 1\\% \\) level is \\( 0.4921 \\). (a) State the hypotheses and justify a one-tailed test. (b) Carry out the test at the \\( 1\\% \\) level and state your conclusion in context. (c) The athletes were all from one elite squad. State, with reasons, two conditions that should hold for the PMCC test to be valid, and comment on whether the sampling supports generalising the result.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "appropriateness", "bivariate normal", "one-tailed", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses and justify the one-tailed test (part a).", workingLatex: "\\rho = \\text{population PMCC between warm-up time and sprint time} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho < 0", explanation: "A specific direction is predicted in advance (longer warm-up associated with faster, i.e. lower, sprint times — negative correlation), so a one-tailed test with \\( H_1:\\ \\rho < 0 \\) is justified." },
        { stepNumber: 2, description: "Select the matching critical value.", workingLatex: "\\text{Reject } H_0 \\text{ if } r < -0.4921", explanation: "For a lower-tailed test at the \\( 1\\% \\) level we compare \\( r \\) with the negative critical value \\( -0.4921 \\)." },
        { stepNumber: 3, description: "Carry out the test (part b).", workingLatex: "r = -0.602 < -0.4921 \\implies \\text{reject } H_0", explanation: "Since \\( -0.602 \\) is more negative than \\( -0.4921 \\), the result is in the critical region: reject \\( H_0 \\). There is strong evidence at the \\( 1\\% \\) level that longer warm-up time is associated with faster sprint time." },
        { stepNumber: 4, description: "State the first validity condition (part c).", workingLatex: "\\text{(x,y) from a bivariate Normal distribution}", explanation: "The PMCC test requires the data to be a random sample from a bivariate Normal distribution. This underpins the use of the published critical value." },
        { stepNumber: 5, description: "State the second validity condition.", workingLatex: "\\text{relationship between } x,y \\text{ is linear}", explanation: "The underlying relationship should be (approximately) linear, since the PMCC measures linear association only. If it were curved, \\( r \\) and the test would be misleading." },
        { stepNumber: 6, description: "Comment on generalising from one elite squad.", workingLatex: "\\text{one elite squad} \\Rightarrow \\text{not representative of all athletes}", explanation: "All athletes came from a single elite squad, so the sample is not representative of athletes in general. The significant result applies to this restricted group; generalising it to all athletes is not supported by the sampling." }
      ],
      finalAnswer: "\\( r = -0.602 < -0.4921,\\ \\text{reject } H_0; \\text{ valid only if data are bivariate Normal and linear, and the single-squad sample cannot be generalised to all athletes.} \\)",
    },
  },
  {
    id: "y2hc-071",
    topicRef: "y2hc",
    topicTitle: "Hypothesis Test — Correlation 071",
    difficulty: "Challenge",
    questionText: "Over a sample of \\( 13 \\) consecutive years, an analyst records a city's annual ice-cream sales \\( x \\) and the number of drowning incidents \\( y \\), finding \\( r = 0.681 \\). The critical values for a two-tailed test with \\( n = 13 \\) are \\( 0.5529 \\) at the \\( 5\\% \\) level and \\( 0.6835 \\) at the \\( 1\\% \\) level. (a) Test at both the \\( 5\\% \\) and \\( 1\\% \\) levels, stating each conclusion in context. (b) The analyst claims ice-cream sales cause drownings. Critique this, suggesting a more plausible explanation. (c) The analyst also predicts drownings for a year with ice-cream sales double the largest in the sample. Comment on this prediction.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "correlation", "PMCC", "synthesis", "two significance levels", "causation", "extrapolation", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses.", workingLatex: "\\rho = \\text{population PMCC between ice-cream sales and drownings} \\\\ H_0:\\ \\rho = 0 \\qquad H_1:\\ \\rho \\neq 0", explanation: "A two-tailed test for correlation between annual ice-cream sales and drowning incidents." },
        { stepNumber: 2, description: "Test at the \\( 5\\% \\) level (part a).", workingLatex: "|r| = 0.681 > 0.5529 \\implies \\text{reject } H_0", explanation: "The sample PMCC exceeds the \\( 5\\% \\) critical value, so reject \\( H_0 \\): there is evidence at the \\( 5\\% \\) level of positive correlation between ice-cream sales and drownings." },
        { stepNumber: 3, description: "Test at the \\( 1\\% \\) level.", workingLatex: "|r| = 0.681 < 0.6835 \\implies \\text{do not reject } H_0", explanation: "At the \\( 1\\% \\) level the critical value is \\( 0.6835 \\), which \\( 0.681 \\) does not quite reach, so do not reject \\( H_0 \\): insufficient evidence at the \\( 1\\% \\) level. The result is significant at \\( 5\\% \\) but only marginally fails at \\( 1\\% \\)." },
        { stepNumber: 4, description: "Critique the causal claim (part b).", workingLatex: "\\text{correlation} \\neq \\text{causation; confounder present}", explanation: "Ice-cream sales do not cause drownings. The correlation is spurious, driven by a confounding variable: hot weather increases both ice-cream sales and the number of people swimming (and hence drownings). The two variables move together only because both depend on temperature." },
        { stepNumber: 5, description: "State the more plausible explanation explicitly.", workingLatex: "\\text{warm weather} \\to \\uparrow \\text{ sales and } \\uparrow \\text{ swimming} \\to \\uparrow \\text{ drownings}", explanation: "A lurking third variable (temperature/season) explains the association, so neither variable causes the other." },
        { stepNumber: 6, description: "Comment on the prediction (part c).", workingLatex: "x = 2 \\times x_{\\max} \\Rightarrow \\text{extrapolation}", explanation: "Predicting for sales double the largest observed value is extrapolation far beyond the data range; the relationship need not persist there, so the prediction is unreliable. Combined with the spurious nature of the correlation, the prediction has no sound basis." }
      ],
      finalAnswer: "\\( |r| = 0.681 > 0.5529 \\text{ (reject at } 5\\%) \\text{ but } < 0.6835 \\text{ (do not reject at } 1\\%); \\text{ the link is spurious (temperature confounder) and the doubled-sales prediction is invalid extrapolation.} \\)",
    },
  },
];
