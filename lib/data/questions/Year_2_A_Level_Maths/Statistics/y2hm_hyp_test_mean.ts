import { Question } from "@/lib/types";

/**
 * Year 2 — Statistics § Hypothesis Test — Normal Mean
 * Ref: y2hm
 * 71 questions. No diagrams.
 */
export const questions: Question[] = [
  {
    id: "y2hm-001",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 01",
    difficulty: "Foundation",
    questionText: "A machine fills bags of flour so that the mean mass is stated to be \\( 500\\,\\mathrm{g} \\). A supervisor believes the machine has started to overfill the bags, so that the mean mass has increased. Write down the null hypothesis \\( H_0 \\) and the alternative hypothesis \\( H_1 \\) for a test of this belief.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "hypotheses", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the null hypothesis using the stated mean.", workingLatex: "H_0: \\mu = 500", explanation: "The null hypothesis assumes no change, so the population mean stays at its stated value \\( \\mu_0 = 500\\,\\mathrm{g} \\)." },
        { stepNumber: 2, description: "State the alternative hypothesis matching 'increased'.", workingLatex: "H_1: \\mu > 500", explanation: "The supervisor believes the mean has gone up, so the alternative is a one-tailed (upper) hypothesis \\( \\mu > 500 \\)." }
      ],
      finalAnswer: "\\( H_0: \\mu = 500,\\ \\ H_1: \\mu > 500 \\)",
    },
  },
  {
    id: "y2hm-002",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 02",
    difficulty: "Foundation",
    questionText: "The mean lifetime of a brand of battery is stated to be \\( 18 \\) hours. A consumer group suspects that the true mean lifetime is less than this. Write down the null hypothesis \\( H_0 \\) and the alternative hypothesis \\( H_1 \\) for a test of this suspicion.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "hypotheses", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the null hypothesis using the stated mean.", workingLatex: "H_0: \\mu = 18", explanation: "The null hypothesis assumes the claim is correct, so the population mean is \\( \\mu_0 = 18 \\) hours." },
        { stepNumber: 2, description: "State the alternative hypothesis matching 'less than'.", workingLatex: "H_1: \\mu < 18", explanation: "The group suspects the mean lifetime is lower, so the alternative is a one-tailed (lower) hypothesis \\( \\mu < 18 \\)." }
      ],
      finalAnswer: "\\( H_0: \\mu = 18,\\ \\ H_1: \\mu < 18 \\)",
    },
  },
  {
    id: "y2hm-003",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 03",
    difficulty: "Foundation",
    questionText: "A component is manufactured to have a mean length of \\( 25\\,\\mathrm{mm} \\). An engineer wants to test whether the mean length has changed in either direction. Write down the null hypothesis \\( H_0 \\) and the alternative hypothesis \\( H_1 \\) for this test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "hypotheses", "two-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the null hypothesis using the target mean.", workingLatex: "H_0: \\mu = 25", explanation: "The null hypothesis assumes the mean is unchanged, so \\( \\mu_0 = 25\\,\\mathrm{mm} \\)." },
        { stepNumber: 2, description: "State the alternative hypothesis for a change in either direction.", workingLatex: "H_1: \\mu \\ne 25", explanation: "Because the engineer is testing for a change in either direction, the alternative is two-tailed, \\( \\mu \\ne 25 \\)." }
      ],
      finalAnswer: "\\( H_0: \\mu = 25,\\ \\ H_1: \\mu \\ne 25 \\)",
    },
  },
  {
    id: "y2hm-004",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 04",
    difficulty: "Foundation",
    questionText: "A population is modelled by \\( X \\sim N(\\mu, \\sigma^2) \\) with \\( \\mu = 80 \\) and \\( \\sigma = 6 \\). A random sample of \\( n = 9 \\) observations is taken and the sample mean \\( \\bar X \\) is calculated. Write down the distribution of \\( \\bar X \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "distribution of sample mean"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the distribution of the sample mean.", workingLatex: "\\bar X \\sim N\\!\\left(\\mu, \\dfrac{\\sigma^2}{n}\\right)", explanation: "For a sample of size \\( n \\) from a normal population, the sample mean is normally distributed with the same mean and variance \\( \\sigma^2/n \\)." },
        { stepNumber: 2, description: "Substitute \\( \\mu = 80,\\ \\sigma = 6,\\ n = 9 \\).", workingLatex: "\\bar X \\sim N\\!\\left(80, \\dfrac{6^2}{9}\\right) = N(80, 4)", explanation: "The variance is \\( \\sigma^2/n = 36/9 = 4 \\), so \\( \\bar X \\sim N(80, 4) \\)." }
      ],
      finalAnswer: "\\( \\bar X \\sim N(80, 4) \\)",
      canonicalAnswer: "N(80, 4)",
    },
  },
  {
    id: "y2hm-005",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 05",
    difficulty: "Foundation",
    questionText: "Under a null hypothesis, \\( \\bar X \\sim N\\!\\left(100, \\dfrac{15^2}{36}\\right) \\). A sample of size \\( n = 36 \\) gives a sample mean of \\( \\bar x = 98 \\). Calculate the value of the test statistic \\( Z = \\dfrac{\\bar X - \\mu_0}{\\sigma/\\sqrt{n}} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "standardise sample mean", "test statistic"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the standard error \\( \\sigma/\\sqrt{n} \\).", workingLatex: "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{15}{\\sqrt{36}} = 2.5", explanation: "The standard deviation of the sample mean is \\( \\sigma/\\sqrt{n} = 15/6 = 2.5 \\)." },
        { stepNumber: 2, description: "Substitute into the test statistic with \\( \\mu_0 = 100,\\ \\bar x = 98 \\).", workingLatex: "Z = \\dfrac{98 - 100}{2.5} = -0.8", explanation: "Standardising the observed sample mean gives \\( Z = -0.8 \\)." }
      ],
      finalAnswer: "\\( Z = -0.8 \\)",
      canonicalAnswer: "-0.8",
    },
  },
  {
    id: "y2hm-006",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 06",
    difficulty: "Foundation",
    questionText: "Under a null hypothesis \\( \\mu_0 = 50 \\), the population standard deviation is \\( \\sigma = 4 \\). A random sample of size \\( n = 25 \\) has sample mean \\( \\bar x = 51.2 \\). Calculate the value of the test statistic \\( Z = \\dfrac{\\bar X - \\mu_0}{\\sigma/\\sqrt{n}} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "standardise sample mean", "test statistic"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the standard error \\( \\sigma/\\sqrt{n} \\).", workingLatex: "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{4}{\\sqrt{25}} = 0.8", explanation: "The standard deviation of the sample mean is \\( 4/5 = 0.8 \\)." },
        { stepNumber: 2, description: "Substitute into the test statistic with \\( \\mu_0 = 50,\\ \\bar x = 51.2 \\).", workingLatex: "Z = \\dfrac{51.2 - 50}{0.8} = 1.5", explanation: "Standardising the observed sample mean gives \\( Z = 1.5 \\)." }
      ],
      finalAnswer: "\\( Z = 1.5 \\)",
      canonicalAnswer: "1.5",
    },
  },
  {
    id: "y2hm-007",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 07",
    difficulty: "Foundation",
    questionText: "A normal population has standard deviation \\( \\sigma = 2.5 \\). Under \\( H_0: \\mu = 20 \\), a random sample of size \\( n = 16 \\) gives sample mean \\( \\bar x = 20.6 \\). Calculate the value of the test statistic \\( Z = \\dfrac{\\bar X - \\mu_0}{\\sigma/\\sqrt{n}} \\), giving your answer to 3 significant figures.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "standardise sample mean", "test statistic"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the standard error \\( \\sigma/\\sqrt{n} \\).", workingLatex: "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{2.5}{\\sqrt{16}} = 0.625", explanation: "The standard deviation of the sample mean is \\( 2.5/4 = 0.625 \\)." },
        { stepNumber: 2, description: "Substitute into the test statistic with \\( \\mu_0 = 20,\\ \\bar x = 20.6 \\).", workingLatex: "Z = \\dfrac{20.6 - 20}{0.625} = 0.96", explanation: "Standardising gives \\( Z = 0.6/0.625 = 0.96 \\) to 3 s.f." }
      ],
      finalAnswer: "\\( Z = 0.96 \\)",
      canonicalAnswer: "0.96",
    },
  },
  {
    id: "y2hm-008",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 08",
    difficulty: "Foundation",
    questionText: "Under \\( H_0: \\mu = 5 \\), a normal population has \\( \\sigma = 0.4 \\). A random sample of size \\( n = 64 \\) gives sample mean \\( \\bar x = 4.85 \\). Calculate the test statistic \\( Z = \\dfrac{\\bar X - \\mu_0}{\\sigma/\\sqrt{n}} \\) and state which tail the observed value lies in.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "test statistic", "identify tail"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the standard error and substitute into the test statistic.", workingLatex: "\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{0.4}{\\sqrt{64}} = 0.05,\\quad Z = \\dfrac{4.85 - 5}{0.05}", explanation: "The standard error is \\( 0.4/8 = 0.05 \\); standardising the sample mean uses this value." },
        { stepNumber: 2, description: "Evaluate \\( Z \\) and identify the tail.", workingLatex: "Z = -3,\\quad \\text{lower tail}", explanation: "Since \\( \\bar x = 4.85 < \\mu_0 = 5 \\), the test statistic is negative, \\( Z = -3 \\), so the observed value lies in the lower (left) tail." }
      ],
      finalAnswer: "\\( Z = -3 \\text{ (lower tail)} \\)",
      canonicalAnswer: "-3",
    },
  },
  {
    id: "y2hm-009",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 09",
    difficulty: "Foundation",
    questionText: "A normal population has mean \\( \\mu = 300 \\) and standard deviation \\( \\sigma = 12 \\). A random sample of size \\( n = 20 \\) is taken. Find \\( P(\\bar X > 305) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "tail probability", "upper tail"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the sample mean \\( \\bar x = 305 \\).", workingLatex: "Z = \\dfrac{305 - 300}{12/\\sqrt{20}} = 1.8634", explanation: "The standard error is \\( 12/\\sqrt{20} \\approx 2.6833 \\), so \\( Z = 5/2.6833 = 1.8634 \\) to 4 s.f." },
        { stepNumber: 2, description: "Find the upper-tail probability.", workingLatex: "P(\\bar X > 305) = P(Z > 1.8634) = 1 - 0.9688 = 0.0312", explanation: "Using the standard normal distribution, \\( P(Z \\le 1.8634) = 0.9688 \\), so \\( P(\\bar X > 305) = 0.0312 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(\\bar X > 305) = 0.0312 \\)",
      canonicalAnswer: "0.0312",
    },
  },
  {
    id: "y2hm-010",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 10",
    difficulty: "Foundation",
    questionText: "A normal population has mean \\( \\mu = 1.5 \\) and standard deviation \\( \\sigma = 0.05 \\). A random sample of size \\( n = 10 \\) is taken. Find \\( P(\\bar X < 1.48) \\), giving your answer to 4 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "tail probability", "lower tail"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Standardise the sample mean \\( \\bar x = 1.48 \\).", workingLatex: "Z = \\dfrac{1.48 - 1.5}{0.05/\\sqrt{10}} = -1.2649", explanation: "The standard error is \\( 0.05/\\sqrt{10} \\approx 0.015811 \\), so \\( Z = -0.02/0.015811 = -1.2649 \\) to 4 s.f." },
        { stepNumber: 2, description: "Find the lower-tail probability.", workingLatex: "P(\\bar X < 1.48) = P(Z < -1.2649) = 0.1030", explanation: "Using the standard normal distribution, \\( P(Z < -1.2649) = 0.1030 \\) to 4 d.p." }
      ],
      finalAnswer: "\\( P(\\bar X < 1.48) = 0.1030 \\)",
      canonicalAnswer: "0.1030",
    },
  },
  {
    id: "y2hm-011",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 11",
    difficulty: "Foundation",
    questionText: "A normal population has variance \\( \\sigma^2 = 36 \\). Under \\( H_0: \\mu = 70 \\), a random sample of size \\( n = 9 \\) gives sample mean \\( \\bar x = 73.4 \\). Calculate the value of the test statistic \\( Z = \\dfrac{\\bar X - \\mu_0}{\\sigma/\\sqrt{n}} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "variance", "test statistic"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find \\( \\sigma \\) from the variance, then the standard error.", workingLatex: "\\sigma = \\sqrt{36} = 6,\\quad \\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{6}{\\sqrt{9}} = 2", explanation: "Take the square root of the variance to get \\( \\sigma = 6 \\); the standard error is then \\( 6/3 = 2 \\)." },
        { stepNumber: 2, description: "Substitute into the test statistic with \\( \\mu_0 = 70,\\ \\bar x = 73.4 \\).", workingLatex: "Z = \\dfrac{73.4 - 70}{2} = 1.7", explanation: "Standardising the observed sample mean gives \\( Z = 3.4/2 = 1.7 \\)." }
      ],
      finalAnswer: "\\( Z = 1.7 \\)",
      canonicalAnswer: "1.7",
    },
  },
  {
    id: "y2hm-012",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 012",
    difficulty: "Foundation",
    questionText: "A hypothesis test for the mean of a normal distribution uses \\( H_0: \\mu = 50 \\) and \\( H_1: \\mu > 50 \\) at the 5% significance level. The test statistic is calculated to be \\( z = 2.13 \\). The critical value for this upper one-tailed test is \\( 1.645 \\). State, with a reason, whether \\( H_0 \\) should be rejected.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "test statistic", "decision", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the test statistic with the critical value for an upper one-tailed test.", workingLatex: "z = 2.13 > 1.645", explanation: "For an upper one-tailed test, \\( H_0 \\) is rejected when the test statistic exceeds the critical value. Here \\( 2.13 > 1.645 \\)." },
        { stepNumber: 2, description: "State the conclusion.", workingLatex: "\\text{Reject } H_0", explanation: "Since \\( z = 2.13 \\) lies in the critical (rejection) region, there is sufficient evidence at the 5% level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( z = 2.13 > 1.645, \\text{ so reject } H_0. \\)",
    },
  },
  {
    id: "y2hm-013",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 013",
    difficulty: "Foundation",
    questionText: "A hypothesis test for the mean of a normal distribution uses \\( H_0: \\mu = 200 \\) and \\( H_1: \\mu > 200 \\) at the 5% significance level. The test statistic is calculated to be \\( z = 1.42 \\). The critical value for this upper one-tailed test is \\( 1.645 \\). State, with a reason, whether \\( H_0 \\) should be rejected.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "test statistic", "decision", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the test statistic with the critical value for an upper one-tailed test.", workingLatex: "z = 1.42 < 1.645", explanation: "For an upper one-tailed test, \\( H_0 \\) is rejected only when the test statistic exceeds the critical value. Here \\( 1.42 < 1.645 \\)." },
        { stepNumber: 2, description: "State the conclusion.", workingLatex: "\\text{Do not reject } H_0", explanation: "Since \\( z = 1.42 \\) does not reach the critical value, it lies outside the rejection region, so there is insufficient evidence at the 5% level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( z = 1.42 < 1.645, \\text{ so do not reject } H_0. \\)",
    },
  },
  {
    id: "y2hm-014",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 014",
    difficulty: "Foundation",
    questionText: "A hypothesis test for the mean of a normal distribution uses \\( H_0: \\mu = 80 \\) and \\( H_1: \\mu < 80 \\) at the 5% significance level. The test statistic is calculated to be \\( z = -1.80 \\). The critical value for this lower one-tailed test is \\( -1.645 \\). State, with a reason, whether \\( H_0 \\) should be rejected.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "test statistic", "decision", "one-tailed", "lower tail"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the test statistic with the critical value for a lower one-tailed test.", workingLatex: "z = -1.80 < -1.645", explanation: "For a lower one-tailed test, \\( H_0 \\) is rejected when the test statistic is less than the (negative) critical value. Here \\( -1.80 < -1.645 \\)." },
        { stepNumber: 2, description: "State the conclusion.", workingLatex: "\\text{Reject } H_0", explanation: "Since \\( z = -1.80 \\) lies in the lower critical region, there is sufficient evidence at the 5% level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( z = -1.80 < -1.645, \\text{ so reject } H_0. \\)",
    },
  },
  {
    id: "y2hm-015",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 015",
    difficulty: "Foundation",
    questionText: "A hypothesis test for the mean of a normal distribution uses \\( H_0: \\mu = 15 \\) and \\( H_1: \\mu \\ne 15 \\) at the 5% significance level. The test statistic is calculated to be \\( z = 2.45 \\). The critical values for this two-tailed test are \\( \\pm 1.96 \\). State, with a reason, whether \\( H_0 \\) should be rejected.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "test statistic", "decision", "two-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the magnitude of the test statistic with the two-tailed critical value.", workingLatex: "z = 2.45 > 1.96", explanation: "For a two-tailed test at 5%, \\( H_0 \\) is rejected when \\( |z| > 1.96 \\). Here \\( 2.45 > 1.96 \\)." },
        { stepNumber: 2, description: "State the conclusion.", workingLatex: "\\text{Reject } H_0", explanation: "Since \\( z = 2.45 \\) exceeds the upper critical value \\( 1.96 \\), it lies in the rejection region, so there is sufficient evidence at the 5% level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( z = 2.45 > 1.96, \\text{ so reject } H_0. \\)",
    },
  },
  {
    id: "y2hm-016",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 016",
    difficulty: "Foundation",
    questionText: "A hypothesis test for the mean of a normal distribution uses \\( H_0: \\mu = 120 \\) and \\( H_1: \\mu \\ne 120 \\) at the 5% significance level. The test statistic is calculated to be \\( z = -1.55 \\). The critical values for this two-tailed test are \\( \\pm 1.96 \\). State, with a reason, whether \\( H_0 \\) should be rejected.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "test statistic", "decision", "two-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the magnitude of the test statistic with the two-tailed critical value.", workingLatex: "|z| = 1.55 < 1.96", explanation: "For a two-tailed test at 5%, \\( H_0 \\) is rejected only when \\( |z| > 1.96 \\). Here \\( |-1.55| = 1.55 < 1.96 \\)." },
        { stepNumber: 2, description: "State the conclusion.", workingLatex: "\\text{Do not reject } H_0", explanation: "Since \\( z = -1.55 \\) lies between the critical values \\( -1.96 \\) and \\( 1.96 \\), it is outside the rejection region, so there is insufficient evidence at the 5% level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( |z| = 1.55 < 1.96, \\text{ so do not reject } H_0. \\)",
    },
  },
  {
    id: "y2hm-017",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 017",
    difficulty: "Foundation",
    questionText: "A hypothesis test for the mean of a normal distribution uses \\( H_0: \\mu = 30 \\) and \\( H_1: \\mu > 30 \\). The test is carried out at the 5% significance level using the standard normal distribution. Write down the critical value for this test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "critical value", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the type of test and the area in the relevant tail.", workingLatex: "P(Z > z_{\\text{crit}}) = 0.05", explanation: "The alternative \\( \\mu > 30 \\) gives an upper one-tailed test, so all 5% of the significance level is placed in the upper tail." },
        { stepNumber: 2, description: "State the corresponding critical value of the standard normal distribution.", workingLatex: "z_{\\text{crit}} = 1.645", explanation: "The value of \\( z \\) with an upper-tail area of \\( 0.05 \\) is \\( 1.645 \\) (4 s.f.), so the critical value is \\( 1.645 \\)." }
      ],
      finalAnswer: "\\( z_{\\text{crit}} = 1.645 \\)",
      canonicalAnswer: "1.645",
    },
  },
  {
    id: "y2hm-018",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 018",
    difficulty: "Foundation",
    questionText: "A hypothesis test for the mean of a normal distribution uses \\( H_0: \\mu = 5 \\) and \\( H_1: \\mu > 5 \\) at the 1% significance level. The test statistic is calculated to be \\( z = 2.50 \\). The critical value for this upper one-tailed test is \\( 2.326 \\). State, with a reason, whether \\( H_0 \\) should be rejected.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "test statistic", "decision", "one-tailed", "1% level"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the test statistic with the critical value for an upper one-tailed test at 1%.", workingLatex: "z = 2.50 > 2.326", explanation: "For an upper one-tailed test at the 1% level, \\( H_0 \\) is rejected when the test statistic exceeds the critical value. Here \\( 2.50 > 2.326 \\)." },
        { stepNumber: 2, description: "State the conclusion.", workingLatex: "\\text{Reject } H_0", explanation: "Since \\( z = 2.50 \\) lies in the critical region, there is sufficient evidence at the 1% level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( z = 2.50 > 2.326, \\text{ so reject } H_0. \\)",
    },
  },
  {
    id: "y2hm-019",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 019",
    difficulty: "Foundation",
    questionText: "A hypothesis test for the mean of a normal distribution uses \\( H_0: \\mu = 60 \\) and \\( H_1: \\mu \\ne 60 \\). The test is carried out at the 5% significance level using the standard normal distribution. Write down the critical values for this test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "critical value", "two-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the type of test and the area in each tail.", workingLatex: "P(Z > z_{\\text{crit}}) = \\frac{0.05}{2} = 0.025", explanation: "The alternative \\( \\mu \\ne 60 \\) gives a two-tailed test, so the 5% is split equally, placing \\( 0.025 \\) in each tail." },
        { stepNumber: 2, description: "State the corresponding critical values of the standard normal distribution.", workingLatex: "z_{\\text{crit}} = \\pm 1.96", explanation: "The value of \\( z \\) with an upper-tail area of \\( 0.025 \\) is \\( 1.96 \\), so by symmetry the critical values are \\( \\pm 1.96 \\)." }
      ],
      finalAnswer: "\\( z_{\\text{crit}} = \\pm 1.96 \\)",
    },
  },
  {
    id: "y2hm-020",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 020",
    difficulty: "Foundation",
    questionText: "A random sample of \\( n = 36 \\) observations is taken from a normal distribution with population standard deviation \\( \\sigma = 12 \\). For a hypothesis test on the mean, calculate the standard error of the sample mean, \\( \\dfrac{\\sigma}{\\sqrt{n}} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "standard error"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute the values into the standard error formula.", workingLatex: "\\frac{\\sigma}{\\sqrt{n}} = \\frac{12}{\\sqrt{36}}", explanation: "The standard error of the sample mean is \\( \\sigma/\\sqrt{n} \\); here \\( \\sigma = 12 \\) and \\( n = 36 \\)." },
        { stepNumber: 2, description: "Evaluate the expression.", workingLatex: "\\frac{12}{\\sqrt{36}} = \\frac{12}{6} = 2", explanation: "Since \\( \\sqrt{36} = 6 \\), the standard error is \\( 12 \\div 6 = 2 \\)." }
      ],
      finalAnswer: "\\( \\dfrac{\\sigma}{\\sqrt{n}} = 2 \\)",
      canonicalAnswer: "2",
    },
  },
  {
    id: "y2hm-021",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 021",
    difficulty: "Foundation",
    questionText: "The mean lifetime of a type of battery is stated to be \\( 80 \\) hours. A consumer group wishes to test whether the mean lifetime has changed. Stating your reason, determine whether this is a one-tailed or a two-tailed test.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "two-tailed", "wording"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Interpret the wording of the claim being tested.", workingLatex: "H_1: \\mu \\ne 80", explanation: "The word 'changed' means the mean could be either larger or smaller than \\( 80 \\), so the alternative hypothesis is \\( \\mu \\ne 80 \\)." },
        { stepNumber: 2, description: "Classify the test from the alternative hypothesis.", workingLatex: "\\text{Two-tailed test}", explanation: "Because the alternative hypothesis uses \\( \\ne \\) and considers a change in either direction, the test is two-tailed." }
      ],
      finalAnswer: "\\( \\text{Two-tailed test (since 'changed' gives } H_1: \\mu \\ne 80\\text{).} \\)",
    },
  },
  {
    id: "y2hm-022",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 022",
    difficulty: "Foundation",
    questionText: "A hypothesis test for the mean of a normal distribution uses \\( H_0: \\mu = 250 \\) and \\( H_1: \\mu < 250 \\) at the 5% significance level. The test statistic is calculated to be \\( z = -2.05 \\). The critical value for this lower one-tailed test is \\( -1.645 \\). State, with a reason, whether \\( H_0 \\) should be rejected.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "test statistic", "decision", "one-tailed", "lower tail"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the test statistic with the critical value for a lower one-tailed test.", workingLatex: "z = -2.05 < -1.645", explanation: "For a lower one-tailed test, \\( H_0 \\) is rejected when the test statistic is less than the (negative) critical value. Here \\( -2.05 < -1.645 \\)." },
        { stepNumber: 2, description: "State the conclusion.", workingLatex: "\\text{Reject } H_0", explanation: "Since \\( z = -2.05 \\) lies in the lower critical region, there is sufficient evidence at the 5% level to reject \\( H_0 \\)." }
      ],
      finalAnswer: "\\( z = -2.05 < -1.645, \\text{ so reject } H_0. \\)",
    },
  },
  {
    id: "y2hm-023",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 23",
    difficulty: "Standard",
    questionText: "A machine fills bottles with a sports drink. The mass of drink dispensed is normally distributed with standard deviation \\( 7.5\\,\\mathrm{g} \\). The machine is set to dispense a mean of \\( 500\\,\\mathrm{g} \\). A technician suspects the machine is now over-filling. A random sample of \\( 20 \\) bottles has a mean mass of \\( 503.4\\,\\mathrm{g} \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence that the machine is over-filling.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "fill weight", "critical value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean mass of drink dispensed per bottle},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{7.5^2}{20}\\right)", explanation: "Let \\( \\mu \\) be the mean mass (in \\( \\mathrm{g} \\)) of drink dispensed per bottle. Since the population is normal with known \\( \\sigma=7.5 \\), the sample mean of \\( n=20 \\) bottles is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and the significance level. Over-filling means the mean has increased, so this is an upper-tailed test.", workingLatex: "H_0:\\mu = 500, \\quad H_1:\\mu > 500, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) the mean is the set value \\( 500\\,\\mathrm{g} \\); the alternative \\( \\mu>500 \\) captures the suspicion of over-filling." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{\\bar x - \\mu_0}{\\sigma/\\sqrt n} = \\frac{503.4 - 500}{7.5/\\sqrt{20}} = 2.0274", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=2.0274 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the critical value for a one-tailed test at \\( 5\\% \\) and compare.", workingLatex: "z_{\\text{crit}} = 1.6449, \\quad 2.0274 > 1.6449 \\implies \\text{reject } H_0", explanation: "The upper \\( 5\\% \\) critical value is \\( 1.6449 \\). Since \\( 2.0274 \\) lies in the critical region, we reject \\( H_0 \\). (Equivalently \\( P(Z>2.0274)=0.0213<0.05 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu > 500", explanation: "There is sufficient evidence at the \\( 5\\% \\) level that the machine is over-filling: the mean mass dispensed exceeds \\( 500\\,\\mathrm{g} \\)." }
      ],
      finalAnswer: "\\( z=2.0274 > 1.6449, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the machine is over-filling, with a mean mass exceeding } 500\\,\\mathrm{g}. \\)",
    },
  },
  {
    id: "y2hm-024",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 24",
    difficulty: "Standard",
    questionText: "The lifetimes of a brand of car tyre are normally distributed with mean \\( 1200 \\) (hundreds of km) and standard deviation \\( 80 \\) (hundreds of km). After a change of rubber compound, a manager believes the mean lifetime has decreased. A random sample of \\( 25 \\) tyres has a mean lifetime of \\( 1165 \\) (hundreds of km). Test, at the \\( 5\\% \\) significance level, whether there is evidence that the mean lifetime has decreased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "lifetime", "p-value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean tyre lifetime (hundreds of km)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{80^2}{25}\\right)", explanation: "Let \\( \\mu \\) be the mean lifetime of a tyre. With known \\( \\sigma=80 \\) and a normal population, the mean of \\( n=25 \\) tyres is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. A decrease is suspected, so this is a lower-tailed test.", workingLatex: "H_0:\\mu = 1200, \\quad H_1:\\mu < 1200, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) the mean is unchanged at \\( 1200 \\); the alternative \\( \\mu<1200 \\) represents a shorter mean lifetime." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{1165 - 1200}{80/\\sqrt{25}} = -2.1875", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=-2.1875 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the p-value for the lower tail and compare with \\( \\alpha \\).", workingLatex: "P(Z < -2.1875) = 0.0144, \\quad 0.0144 < 0.05 \\implies \\text{reject } H_0", explanation: "The lower-tail probability is \\( 0.0144 \\). Since \\( 0.0144<0.05 \\) the result is significant, so we reject \\( H_0 \\). (Equivalently \\( z=-2.1875<-1.6449 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu < 1200", explanation: "There is sufficient evidence at the \\( 5\\% \\) level that the mean tyre lifetime has decreased below \\( 1200 \\) hundred km." }
      ],
      finalAnswer: "\\( P(Z<-2.1875)=0.0144 < 0.05, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the mean tyre lifetime has fallen below } 1200 \\text{ hundred km}. \\)",
    },
  },
  {
    id: "y2hm-025",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 25",
    difficulty: "Standard",
    questionText: "The time taken for a commuter to travel to work is normally distributed with standard deviation \\( 6 \\) minutes. Historically the mean journey time has been \\( 34 \\) minutes. After a new road layout is introduced, the commuter believes the mean journey time has fallen. Over a random sample of \\( 16 \\) journeys the mean time is \\( 30.5 \\) minutes. Test, at the \\( 5\\% \\) significance level, whether there is evidence that the mean journey time has decreased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "commute time", "p-value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean journey time (minutes)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{6^2}{16}\\right)", explanation: "Let \\( \\mu \\) be the mean journey time in minutes. With known \\( \\sigma=6 \\) and a normal population, the mean of \\( n=16 \\) journeys is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. A decrease is believed, so this is a lower-tailed test.", workingLatex: "H_0:\\mu = 34, \\quad H_1:\\mu < 34, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) the mean is the historical \\( 34 \\) minutes; the alternative \\( \\mu<34 \\) represents a shorter mean time." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{30.5 - 34}{6/\\sqrt{16}} = -2.3333", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=-2.3333 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the p-value for the lower tail and compare with \\( \\alpha \\).", workingLatex: "P(Z < -2.3333) = 0.0098, \\quad 0.0098 < 0.05 \\implies \\text{reject } H_0", explanation: "The lower-tail probability is \\( 0.0098 \\). Since \\( 0.0098<0.05 \\) the result is significant, so we reject \\( H_0 \\). (Equivalently \\( z=-2.3333<-1.6449 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu < 34", explanation: "There is sufficient evidence at the \\( 5\\% \\) level that the mean journey time has decreased below \\( 34 \\) minutes." }
      ],
      finalAnswer: "\\( P(Z<-2.3333)=0.0098 < 0.05, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the mean journey time has fallen below } 34 \\text{ minutes}. \\)",
    },
  },
  {
    id: "y2hm-026",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 26",
    difficulty: "Standard",
    questionText: "A factory produces metal bolts whose lengths are normally distributed with standard deviation \\( 0.4\\,\\mathrm{mm} \\). The target mean length is \\( 25.0\\,\\mathrm{mm} \\). An engineer suspects the mean length has increased. A random sample of \\( 36 \\) bolts has a mean length of \\( 25.12\\,\\mathrm{mm} \\). Test, at the \\( 1\\% \\) significance level, whether there is evidence that the mean length has increased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "length", "do not reject"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean bolt length (mm)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{0.4^2}{36}\\right)", explanation: "Let \\( \\mu \\) be the mean length of a bolt in \\( \\mathrm{mm} \\). With known \\( \\sigma=0.4 \\) and a normal population, the mean of \\( n=36 \\) bolts is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. An increase is suspected, so this is an upper-tailed test.", workingLatex: "H_0:\\mu = 25.0, \\quad H_1:\\mu > 25.0, \\quad \\alpha = 0.01", explanation: "Under \\( H_0 \\) the mean is the target \\( 25.0\\,\\mathrm{mm} \\); the alternative \\( \\mu>25.0 \\) represents a longer mean length." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{25.12 - 25.0}{0.4/\\sqrt{36}} = 1.8000", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=1.8000 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the critical value for a one-tailed test at \\( 1\\% \\) and compare.", workingLatex: "z_{\\text{crit}} = 2.3263, \\quad 1.8000 < 2.3263 \\implies \\text{do not reject } H_0", explanation: "The upper \\( 1\\% \\) critical value is \\( 2.3263 \\). Since \\( 1.8000 \\) does not exceed it, the result is not significant. (Equivalently \\( P(Z>1.8000)=0.0359>0.01 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\text{insufficient evidence that } \\mu > 25.0", explanation: "There is insufficient evidence at the \\( 1\\% \\) level to conclude that the mean bolt length has increased above \\( 25.0\\,\\mathrm{mm} \\)." }
      ],
      finalAnswer: "\\( z=1.8000 < 2.3263, \\text{ so do not reject } H_0. \\text{ There is insufficient evidence at the } 1\\% \\text{ level that the mean bolt length has increased above } 25.0\\,\\mathrm{mm}. \\)",
    },
  },
  {
    id: "y2hm-027",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 27",
    difficulty: "Standard",
    questionText: "The running time of a brand of rechargeable battery is normally distributed with standard deviation \\( 1.5 \\) hours and a stated mean of \\( 18.0 \\) hours. A reviewer claims that the mean running time is actually greater than stated. A random sample of \\( 40 \\) batteries has a mean running time of \\( 18.55 \\) hours. Test, at the \\( 5\\% \\) significance level, whether the reviewer's claim is supported.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "battery", "p-value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean battery running time (hours)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{1.5^2}{40}\\right)", explanation: "Let \\( \\mu \\) be the mean running time in hours. With known \\( \\sigma=1.5 \\) and a normal population, the mean of \\( n=40 \\) batteries is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. The claim is of a greater mean, so this is an upper-tailed test.", workingLatex: "H_0:\\mu = 18.0, \\quad H_1:\\mu > 18.0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) the mean is the stated \\( 18.0 \\) hours; the alternative \\( \\mu>18.0 \\) captures the reviewer's claim of a longer mean time." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{18.55 - 18.0}{1.5/\\sqrt{40}} = 2.3190", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=2.3190 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the p-value for the upper tail and compare with \\( \\alpha \\).", workingLatex: "P(Z > 2.3190) = 0.0102, \\quad 0.0102 < 0.05 \\implies \\text{reject } H_0", explanation: "The upper-tail probability is \\( 0.0102 \\). Since \\( 0.0102<0.05 \\) the result is significant, so we reject \\( H_0 \\). (Equivalently \\( z=2.3190>1.6449 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu > 18.0", explanation: "There is sufficient evidence at the \\( 5\\% \\) level to support the reviewer's claim that the mean battery running time exceeds \\( 18.0 \\) hours." }
      ],
      finalAnswer: "\\( P(Z>2.3190)=0.0102 < 0.05, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level to support the claim that the mean running time exceeds } 18.0 \\text{ hours}. \\)",
    },
  },
  {
    id: "y2hm-028",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 28",
    difficulty: "Standard",
    questionText: "The reaction times of athletes to a starting signal are normally distributed with standard deviation \\( 0.040 \\) seconds and a mean of \\( 0.250 \\) seconds. After a new training programme, a coach believes the mean reaction time has decreased. A random sample of \\( 50 \\) starts has a mean reaction time of \\( 0.238 \\) seconds. Test, at the \\( 5\\% \\) significance level, whether there is evidence that the mean reaction time has decreased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "reaction time", "p-value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean reaction time (seconds)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{0.040^2}{50}\\right)", explanation: "Let \\( \\mu \\) be the mean reaction time in seconds. With known \\( \\sigma=0.040 \\) and a normal population, the mean of \\( n=50 \\) starts is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. A decrease is believed, so this is a lower-tailed test.", workingLatex: "H_0:\\mu = 0.250, \\quad H_1:\\mu < 0.250, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) the mean is unchanged at \\( 0.250 \\) seconds; the alternative \\( \\mu<0.250 \\) represents a faster mean reaction time." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{0.238 - 0.250}{0.040/\\sqrt{50}} = -2.1213", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=-2.1213 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the p-value for the lower tail and compare with \\( \\alpha \\).", workingLatex: "P(Z < -2.1213) = 0.0169, \\quad 0.0169 < 0.05 \\implies \\text{reject } H_0", explanation: "The lower-tail probability is \\( 0.0169 \\). Since \\( 0.0169<0.05 \\) the result is significant, so we reject \\( H_0 \\). (Equivalently \\( z=-2.1213<-1.6449 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu < 0.250", explanation: "There is sufficient evidence at the \\( 5\\% \\) level that the new training programme has reduced the mean reaction time below \\( 0.250 \\) seconds." }
      ],
      finalAnswer: "\\( P(Z<-2.1213)=0.0169 < 0.05, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the mean reaction time has fallen below } 0.250 \\text{ seconds}. \\)",
    },
  },
  {
    id: "y2hm-029",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 29",
    difficulty: "Standard",
    questionText: "A cereal packaging line fills boxes whose contents have mass normally distributed with standard deviation \\( 12\\,\\mathrm{g} \\). The nominal mean content is \\( 750\\,\\mathrm{g} \\). A consumer group suspects boxes are being under-filled. A random sample of \\( 30 \\) boxes has a mean content of \\( 745\\,\\mathrm{g} \\). Test, at the \\( 10\\% \\) significance level, whether there is evidence that the mean content is below \\( 750\\,\\mathrm{g} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "cereal weight", "critical value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean box content (g)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{12^2}{30}\\right)", explanation: "Let \\( \\mu \\) be the mean content of a box in \\( \\mathrm{g} \\). With known \\( \\sigma=12 \\) and a normal population, the mean of \\( n=30 \\) boxes is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. Under-filling means the mean is lower, so this is a lower-tailed test.", workingLatex: "H_0:\\mu = 750, \\quad H_1:\\mu < 750, \\quad \\alpha = 0.10", explanation: "Under \\( H_0 \\) the mean is the nominal \\( 750\\,\\mathrm{g} \\); the alternative \\( \\mu<750 \\) captures the suspicion of under-filling." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{745 - 750}{12/\\sqrt{30}} = -2.2822", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=-2.2822 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the critical value for a one-tailed test at \\( 10\\% \\) and compare.", workingLatex: "z_{\\text{crit}} = -1.2816, \\quad -2.2822 < -1.2816 \\implies \\text{reject } H_0", explanation: "The lower \\( 10\\% \\) critical value is \\( -1.2816 \\). Since \\( -2.2822 \\) lies in the critical region, we reject \\( H_0 \\). (Equivalently \\( P(Z<-2.2822)=0.0112<0.10 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu < 750", explanation: "There is sufficient evidence at the \\( 10\\% \\) level that the mean box content is below \\( 750\\,\\mathrm{g} \\), supporting the consumer group's suspicion of under-filling." }
      ],
      finalAnswer: "\\( z=-2.2822 < -1.2816, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 10\\% \\text{ level that the mean box content is below } 750\\,\\mathrm{g}. \\)",
    },
  },
  {
    id: "y2hm-030",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 30",
    difficulty: "Standard",
    questionText: "A workshop cuts metal rods to a target mean length of \\( 100.0\\,\\mathrm{cm} \\). The lengths are normally distributed with standard deviation \\( 2.0\\,\\mathrm{cm} \\). A supervisor suspects the rods are being cut too long on average. A random sample of \\( 25 \\) rods has a mean length of \\( 101.0\\,\\mathrm{cm} \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence that the mean length exceeds \\( 100.0\\,\\mathrm{cm} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "rod length", "critical value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean rod length (cm)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{2.0^2}{25}\\right)", explanation: "Let \\( \\mu \\) be the mean length of a rod in \\( \\mathrm{cm} \\). With known \\( \\sigma=2.0 \\) and a normal population, the mean of \\( n=25 \\) rods is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. Too long means the mean has increased, so this is an upper-tailed test.", workingLatex: "H_0:\\mu = 100.0, \\quad H_1:\\mu > 100.0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) the mean is the target \\( 100.0\\,\\mathrm{cm} \\); the alternative \\( \\mu>100.0 \\) captures the suspicion of over-long rods." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{101.0 - 100.0}{2.0/\\sqrt{25}} = 2.5000", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=2.5000 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the critical value for a one-tailed test at \\( 5\\% \\) and compare.", workingLatex: "z_{\\text{crit}} = 1.6449, \\quad 2.5000 > 1.6449 \\implies \\text{reject } H_0", explanation: "The upper \\( 5\\% \\) critical value is \\( 1.6449 \\). Since \\( 2.5000 \\) lies in the critical region, we reject \\( H_0 \\). (Equivalently \\( P(Z>2.5000)=0.0062<0.05 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu > 100.0", explanation: "There is sufficient evidence at the \\( 5\\% \\) level that the mean rod length exceeds \\( 100.0\\,\\mathrm{cm} \\)." }
      ],
      finalAnswer: "\\( z=2.5000 > 1.6449, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the mean rod length exceeds } 100.0\\,\\mathrm{cm}. \\)",
    },
  },
  {
    id: "y2hm-031",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 31",
    difficulty: "Standard",
    questionText: "The lifetimes of a type of light bulb are normally distributed with standard deviation \\( 150 \\) hours and a stated mean of \\( 2000 \\) hours. A manufacturer believes a redesign has increased the mean lifetime. A random sample of \\( 36 \\) bulbs has a mean lifetime of \\( 2055 \\) hours. Test, at the \\( 5\\% \\) significance level, whether there is evidence that the mean lifetime has increased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "bulb lifetime", "p-value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean bulb lifetime (hours)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{150^2}{36}\\right)", explanation: "Let \\( \\mu \\) be the mean lifetime of a bulb in hours. With known \\( \\sigma=150 \\) and a normal population, the mean of \\( n=36 \\) bulbs is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. An increase is believed, so this is an upper-tailed test.", workingLatex: "H_0:\\mu = 2000, \\quad H_1:\\mu > 2000, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) the mean is the stated \\( 2000 \\) hours; the alternative \\( \\mu>2000 \\) represents a longer mean lifetime." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{2055 - 2000}{150/\\sqrt{36}} = 2.2000", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=2.2000 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the p-value for the upper tail and compare with \\( \\alpha \\).", workingLatex: "P(Z > 2.2000) = 0.0139, \\quad 0.0139 < 0.05 \\implies \\text{reject } H_0", explanation: "The upper-tail probability is \\( 0.0139 \\). Since \\( 0.0139<0.05 \\) the result is significant, so we reject \\( H_0 \\). (Equivalently \\( z=2.2000>1.6449 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu > 2000", explanation: "There is sufficient evidence at the \\( 5\\% \\) level that the redesign has increased the mean bulb lifetime above \\( 2000 \\) hours." }
      ],
      finalAnswer: "\\( P(Z>2.2000)=0.0139 < 0.05, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the mean bulb lifetime exceeds } 2000 \\text{ hours}. \\)",
    },
  },
  {
    id: "y2hm-032",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 32",
    difficulty: "Standard",
    questionText: "The waiting time at a pharmacy counter is normally distributed with standard deviation \\( 1.2 \\) minutes and a historical mean of \\( 8.5 \\) minutes. After staffing changes, the manager believes the mean waiting time has fallen. A random sample of \\( 45 \\) customers has a mean waiting time of \\( 8.10 \\) minutes. Test, at the \\( 5\\% \\) significance level, whether there is evidence that the mean waiting time has decreased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "waiting time", "critical value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean waiting time (minutes)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{1.2^2}{45}\\right)", explanation: "Let \\( \\mu \\) be the mean waiting time in minutes. With known \\( \\sigma=1.2 \\) and a normal population, the mean of \\( n=45 \\) customers is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. A fall is believed, so this is a lower-tailed test.", workingLatex: "H_0:\\mu = 8.5, \\quad H_1:\\mu < 8.5, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) the mean is the historical \\( 8.5 \\) minutes; the alternative \\( \\mu<8.5 \\) represents a shorter mean waiting time." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{8.10 - 8.5}{1.2/\\sqrt{45}} = -2.2361", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=-2.2361 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the critical value for a one-tailed test at \\( 5\\% \\) and compare.", workingLatex: "z_{\\text{crit}} = -1.6449, \\quad -2.2361 < -1.6449 \\implies \\text{reject } H_0", explanation: "The lower \\( 5\\% \\) critical value is \\( -1.6449 \\). Since \\( -2.2361 \\) lies in the critical region, we reject \\( H_0 \\). (Equivalently \\( P(Z<-2.2361)=0.0127<0.05 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu < 8.5", explanation: "There is sufficient evidence at the \\( 5\\% \\) level that the mean waiting time has decreased below \\( 8.5 \\) minutes." }
      ],
      finalAnswer: "\\( z=-2.2361 < -1.6449, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the mean waiting time has fallen below } 8.5 \\text{ minutes}. \\)",
    },
  },
  {
    id: "y2hm-033",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 33",
    difficulty: "Standard",
    questionText: "A supplier sells bags of sand with mass normally distributed with standard deviation \\( 0.6\\,\\mathrm{kg} \\) and a labelled mean of \\( 25.0\\,\\mathrm{kg} \\). A retailer suspects the bags are heavier than labelled on average. A random sample of \\( 16 \\) bags has a mean mass of \\( 25.35\\,\\mathrm{kg} \\). Test, at the \\( 1\\% \\) significance level, whether there is evidence that the mean mass exceeds \\( 25.0\\,\\mathrm{kg} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "bag mass", "critical value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean bag mass (kg)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{0.6^2}{16}\\right)", explanation: "Let \\( \\mu \\) be the mean mass of a bag in \\( \\mathrm{kg} \\). With known \\( \\sigma=0.6 \\) and a normal population, the mean of \\( n=16 \\) bags is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. Heavier means the mean has increased, so this is an upper-tailed test.", workingLatex: "H_0:\\mu = 25.0, \\quad H_1:\\mu > 25.0, \\quad \\alpha = 0.01", explanation: "Under \\( H_0 \\) the mean is the labelled \\( 25.0\\,\\mathrm{kg} \\); the alternative \\( \\mu>25.0 \\) captures the suspicion of heavier bags." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{25.35 - 25.0}{0.6/\\sqrt{16}} = 2.3333", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=2.3333 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the critical value for a one-tailed test at \\( 1\\% \\) and compare.", workingLatex: "z_{\\text{crit}} = 2.3263, \\quad 2.3333 > 2.3263 \\implies \\text{reject } H_0", explanation: "The upper \\( 1\\% \\) critical value is \\( 2.3263 \\). Since \\( 2.3333 \\) just exceeds it, the result is significant and we reject \\( H_0 \\). (Equivalently \\( P(Z>2.3333)=0.0098<0.01 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu > 25.0", explanation: "There is sufficient evidence at the \\( 1\\% \\) level that the mean bag mass exceeds \\( 25.0\\,\\mathrm{kg} \\)." }
      ],
      finalAnswer: "\\( z=2.3333 > 2.3263, \\text{ so reject } H_0. \\text{ There is (just) significant evidence at the } 1\\% \\text{ level that the mean bag mass exceeds } 25.0\\,\\mathrm{kg}. \\)",
    },
  },
  {
    id: "y2hm-034",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 34",
    difficulty: "Standard",
    questionText: "The times taken by members of a swimming squad to complete a particular race are normally distributed with standard deviation \\( 1.8 \\) seconds and a mean of \\( 62.0 \\) seconds. After a new coaching method, the coach believes the mean time has improved (decreased). A random sample of \\( 20 \\) swims has a mean time of \\( 61.0 \\) seconds. Test, at the \\( 5\\% \\) significance level, whether there is evidence that the mean time has decreased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "swim time", "p-value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean in context and state the distribution of the sample mean.", workingLatex: "\\mu = \\text{mean race time (seconds)},\\quad \\bar X \\sim N\\!\\left(\\mu,\\, \\frac{1.8^2}{20}\\right)", explanation: "Let \\( \\mu \\) be the mean race time in seconds. With known \\( \\sigma=1.8 \\) and a normal population, the mean of \\( n=20 \\) swims is normally distributed." },
        { stepNumber: 2, description: "State the hypotheses and significance level. An improved (decreased) time is believed, so this is a lower-tailed test.", workingLatex: "H_0:\\mu = 62.0, \\quad H_1:\\mu < 62.0, \\quad \\alpha = 0.05", explanation: "Under \\( H_0 \\) the mean is unchanged at \\( 62.0 \\) seconds; the alternative \\( \\mu<62.0 \\) represents a faster mean time." },
        { stepNumber: 3, description: "Assume \\( H_0 \\) true and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{61.0 - 62.0}{1.8/\\sqrt{20}} = -2.4845", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=-2.4845 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Find the p-value for the lower tail and compare with \\( \\alpha \\).", workingLatex: "P(Z < -2.4845) = 0.0065, \\quad 0.0065 < 0.05 \\implies \\text{reject } H_0", explanation: "The lower-tail probability is \\( 0.0065 \\). Since \\( 0.0065<0.05 \\) the result is significant, so we reject \\( H_0 \\). (Equivalently \\( z=-2.4845<-1.6449 \\).)" },
        { stepNumber: 5, description: "State the conclusion in context.", workingLatex: "\\mu < 62.0", explanation: "There is sufficient evidence at the \\( 5\\% \\) level that the new coaching method has reduced the mean race time below \\( 62.0 \\) seconds." }
      ],
      finalAnswer: "\\( P(Z<-2.4845)=0.0065 < 0.05, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the mean race time has fallen below } 62.0 \\text{ seconds}. \\)",
    },
  },
  {
    id: "y2hm-035",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 35",
    difficulty: "Standard",
    questionText: "A factory produces sheets of plastic whose thickness is normally distributed with standard deviation \\( 0.05\\,\\mathrm{mm} \\) and a target mean of \\( 1.50\\,\\mathrm{mm} \\). An operator suspects the mean thickness has increased. A random sample of \\( 40 \\) sheets has a mean thickness of \\( 1.515\\,\\mathrm{mm} \\). Test, at the \\( 5\\% \\) significance level, whether there is evidence that the mean thickness has increased.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "thickness", "critical value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean and state hypotheses and significance level. An increase is suspected, so this is an upper-tailed test.", workingLatex: "\\mu = \\text{mean sheet thickness (mm)}; \\quad H_0:\\mu = 1.50, \\quad H_1:\\mu > 1.50, \\quad \\alpha = 0.05", explanation: "Let \\( \\mu \\) be the mean thickness in \\( \\mathrm{mm} \\). Under \\( H_0 \\) the mean is the target \\( 1.50\\,\\mathrm{mm} \\); the alternative \\( \\mu>1.50 \\) captures the suspected increase." },
        { stepNumber: 2, description: "Assume \\( H_0 \\) true, so \\( \\bar X \\sim N(1.50, 0.05^2/40) \\), and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{\\bar x - \\mu_0}{\\sigma/\\sqrt n} = \\frac{1.515 - 1.50}{0.05/\\sqrt{40}} = 1.8974", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=1.8974 \\) (4 d.p.)." },
        { stepNumber: 3, description: "Compare with the critical value and conclude in context.", workingLatex: "z_{\\text{crit}} = 1.6449, \\quad 1.8974 > 1.6449 \\implies \\text{reject } H_0 \\;(\\mu > 1.50)", explanation: "Since \\( 1.8974>1.6449 \\) (equivalently \\( P(Z>1.8974)=0.0289<0.05 \\)), we reject \\( H_0 \\). There is sufficient evidence at the \\( 5\\% \\) level that the mean sheet thickness exceeds \\( 1.50\\,\\mathrm{mm} \\)." }
      ],
      finalAnswer: "\\( z=1.8974 > 1.6449, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the mean sheet thickness exceeds } 1.50\\,\\mathrm{mm}. \\)",
    },
  },
  {
    id: "y2hm-036",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 36",
    difficulty: "Standard",
    questionText: "The time to download a large file over a network is normally distributed with standard deviation \\( 0.50 \\) seconds and a mean of \\( 4.20 \\) seconds. After an upgrade, an engineer believes the mean download time has decreased. A random sample of \\( 25 \\) downloads has a mean time of \\( 3.95 \\) seconds. Test, at the \\( 5\\% \\) significance level, whether there is evidence that the mean download time has decreased.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "z-test", "download time", "p-value"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the population mean and state hypotheses and significance level. A decrease is believed, so this is a lower-tailed test.", workingLatex: "\\mu = \\text{mean download time (seconds)}; \\quad H_0:\\mu = 4.20, \\quad H_1:\\mu < 4.20, \\quad \\alpha = 0.05", explanation: "Let \\( \\mu \\) be the mean download time in seconds. Under \\( H_0 \\) the mean is unchanged at \\( 4.20 \\) seconds; the alternative \\( \\mu<4.20 \\) captures the suspected decrease." },
        { stepNumber: 2, description: "Assume \\( H_0 \\) true, so \\( \\bar X \\sim N(4.20, 0.50^2/25) \\), and compute the test statistic \\( z \\).", workingLatex: "z = \\frac{\\bar x - \\mu_0}{\\sigma/\\sqrt n} = \\frac{3.95 - 4.20}{0.50/\\sqrt{25}} = -2.5000", explanation: "Standardising the observed sample mean under \\( H_0 \\) gives \\( z=-2.5000 \\) (4 d.p.)." },
        { stepNumber: 3, description: "Find the p-value, compare with \\( \\alpha \\) and conclude in context.", workingLatex: "P(Z < -2.5000) = 0.0062, \\quad 0.0062 < 0.05 \\implies \\text{reject } H_0 \\;(\\mu < 4.20)", explanation: "Since \\( P(Z<-2.5000)=0.0062<0.05 \\) (equivalently \\( z=-2.5000<-1.6449 \\)), we reject \\( H_0 \\). There is sufficient evidence at the \\( 5\\% \\) level that the upgrade has reduced the mean download time below \\( 4.20 \\) seconds." }
      ],
      finalAnswer: "\\( P(Z<-2.5000)=0.0062 < 0.05, \\text{ so reject } H_0. \\text{ There is significant evidence at the } 5\\% \\text{ level that the mean download time has fallen below } 4.20 \\text{ seconds}. \\)",
    },
  },
  {
    id: "y2hm-037",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 37",
    difficulty: "Standard",
    questionText: "The mass of cereal in a packet is modelled by a Normal distribution with mean \\( \\mu\\,\\mathrm{g} \\) and known standard deviation \\( 8\\,\\mathrm{g} \\). The packets are designed to contain a mean of \\( 500\\,\\mathrm{g} \\). A quality inspector takes a random sample of \\( 16 \\) packets to test, at the \\( 5\\% \\) significance level, whether the mean mass has increased. Find the critical value of the sample mean \\( \\bar X \\) and hence state the critical region for this test.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "critical region", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses in terms of the population mean.", workingLatex: "H_0:\\ \\mu = 500 \\qquad H_1:\\ \\mu > 500", explanation: "The test concerns whether the mean mass has increased, so under the null the mean stays at its design value \\( 500\\,\\mathrm{g} \\) and the alternative is a one-tailed (upper) test \\( \\mu > 500 \\)." },
        { stepNumber: 2, description: "State the distribution of the sample mean under \\( H_0 \\).", workingLatex: "\\bar X \\sim N\\!\\left(500,\\ \\dfrac{8^{2}}{16}\\right) = N(500,\\ 4)", explanation: "For a sample of size \\( n = 16 \\) from \\( N(\\mu, \\sigma^2) \\), the sample mean is Normal with mean \\( \\mu \\) and variance \\( \\sigma^2/n = 64/16 = 4 \\), so its standard deviation is \\( \\sigma/\\sqrt n = 8/\\sqrt{16} = 2\\,\\mathrm{g} \\)." },
        { stepNumber: 3, description: "Identify the critical z-value for a one-tailed \\( 5\\% \\) upper test.", workingLatex: "z^{*} = 1.6449", explanation: "For an upper-tail test at the \\( 5\\% \\) level we need the value with \\( 0.95 \\) of the probability below it, giving \\( z^{*} = 1.6449 \\) to 4 d.p." },
        { stepNumber: 4, description: "Compute the critical value of \\( \\bar X \\) and state the critical region.", workingLatex: "\\bar x_{crit} = 500 + 1.6449\\times\\dfrac{8}{\\sqrt{16}} = 503.29\\ (\\text{2 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = \\mu_0 + z^{*}\\,\\sigma/\\sqrt n = 500 + 1.6449\\times 2 = 503.29\\,\\mathrm{g} \\). The critical region is therefore \\( \\bar X \\ge 503.29\\,\\mathrm{g} \\): a sample mean at or above this value would lead to rejecting \\( H_0 \\)." }
      ],
      finalAnswer: "\\( \\bar x_{crit} = 503.29\\,\\mathrm{g} \\); critical region \\( \\bar X \\ge 503.29\\,\\mathrm{g} \\).",
      canonicalAnswer: "503.29",
    },
  },
  {
    id: "y2hm-038",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 38",
    difficulty: "Standard",
    questionText: "A machine fills bottles with a volume of liquid that is Normally distributed with mean \\( \\mu\\,\\mathrm{ml} \\) and known standard deviation \\( 5\\,\\mathrm{ml} \\). The machine is set to deliver a mean of \\( 330\\,\\mathrm{ml} \\). A technician suspects the machine is now under-filling and takes a random sample of \\( 25 \\) bottles. Using a \\( 5\\% \\) significance level, find the critical value of the sample mean and state the critical region for \\( \\bar X \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "critical region", "one-tailed"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 330 \\qquad H_1:\\ \\mu < 330", explanation: "Under-filling means the mean volume has fallen, so the alternative is a one-tailed (lower) test \\( \\mu < 330 \\)." },
        { stepNumber: 2, description: "State the distribution of \\( \\bar X \\) under \\( H_0 \\).", workingLatex: "\\bar X \\sim N\\!\\left(330,\\ \\dfrac{5^{2}}{25}\\right) = N(330,\\ 1)", explanation: "With \\( n = 25 \\), the sample mean has variance \\( \\sigma^2/n = 25/25 = 1 \\), so the standard error is \\( \\sigma/\\sqrt n = 5/5 = 1\\,\\mathrm{ml} \\)." },
        { stepNumber: 3, description: "Identify the critical z-value for a one-tailed \\( 5\\% \\) lower test.", workingLatex: "z^{*} = -1.6449", explanation: "For a lower-tail test at the \\( 5\\% \\) level the critical z-value is \\( -1.6449 \\), leaving \\( 0.05 \\) of the probability in the lower tail." },
        { stepNumber: 4, description: "Compute the critical value of \\( \\bar X \\) and state the critical region.", workingLatex: "\\bar x_{crit} = 330 - 1.6449\\times\\dfrac{5}{\\sqrt{25}} = 328.36\\ (\\text{2 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = \\mu_0 - z^{*}\\,\\sigma/\\sqrt n = 330 - 1.6449\\times 1 = 328.36\\,\\mathrm{ml} \\). The critical region is \\( \\bar X \\le 328.36\\,\\mathrm{ml} \\); a sample mean at or below this value rejects \\( H_0 \\)." }
      ],
      finalAnswer: "\\( \\bar x_{crit} = 328.36\\,\\mathrm{ml} \\); critical region \\( \\bar X \\le 328.36\\,\\mathrm{ml} \\).",
      canonicalAnswer: "328.36",
    },
  },
  {
    id: "y2hm-039",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 39",
    difficulty: "Standard",
    questionText: "The length of a machined rod is Normally distributed with mean \\( \\mu\\,\\mathrm{cm} \\) and known standard deviation \\( 0.4\\,\\mathrm{cm} \\). The target mean length is \\( 20\\,\\mathrm{cm} \\). An engineer tests at the \\( 1\\% \\) significance level whether the rods are now too long, using a random sample of \\( 10 \\) rods. Find the critical value of the sample mean and state the critical region for \\( \\bar X \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "critical region", "one-tailed", "1 percent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 20 \\qquad H_1:\\ \\mu > 20", explanation: "Testing whether the rods are too long is an upper-tail test \\( \\mu > 20 \\)." },
        { stepNumber: 2, description: "State the distribution of \\( \\bar X \\) under \\( H_0 \\).", workingLatex: "\\bar X \\sim N\\!\\left(20,\\ \\dfrac{0.4^{2}}{10}\\right), \\qquad \\dfrac{\\sigma}{\\sqrt n} = \\dfrac{0.4}{\\sqrt{10}} = 0.1265", explanation: "With \\( n = 10 \\), the standard error is \\( \\sigma/\\sqrt n = 0.4/\\sqrt{10} = 0.1265\\,\\mathrm{cm} \\) to 4 d.p." },
        { stepNumber: 3, description: "Identify the critical z-value for a one-tailed \\( 1\\% \\) upper test.", workingLatex: "z^{*} = 2.3263", explanation: "For an upper-tail test at the \\( 1\\% \\) level we need \\( 0.99 \\) below the critical value, giving \\( z^{*} = 2.3263 \\) to 4 d.p." },
        { stepNumber: 4, description: "Compute the critical value of \\( \\bar X \\) and state the critical region.", workingLatex: "\\bar x_{crit} = 20 + 2.3263\\times\\dfrac{0.4}{\\sqrt{10}} = 20.294\\ (\\text{3 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = 20 + 2.3263\\times 0.1265 = 20.294\\,\\mathrm{cm} \\). The critical region is \\( \\bar X \\ge 20.294\\,\\mathrm{cm} \\)." }
      ],
      finalAnswer: "\\( \\bar x_{crit} = 20.294\\,\\mathrm{cm} \\); critical region \\( \\bar X \\ge 20.294\\,\\mathrm{cm} \\).",
      canonicalAnswer: "20.294",
    },
  },
  {
    id: "y2hm-040",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 40",
    difficulty: "Standard",
    questionText: "The time taken to complete a standard assembly task is Normally distributed with mean \\( \\mu \\) minutes and known standard deviation \\( 6 \\) minutes. The established mean time is \\( 45 \\) minutes. After new training, a manager tests at the \\( 1\\% \\) significance level whether the mean time has decreased, using a random sample of \\( 36 \\) workers. Find the critical value of the sample mean and state the critical region for \\( \\bar X \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "critical region", "one-tailed", "1 percent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 45 \\qquad H_1:\\ \\mu < 45", explanation: "A decrease in the mean time is a lower-tail test \\( \\mu < 45 \\)." },
        { stepNumber: 2, description: "State the distribution of \\( \\bar X \\) under \\( H_0 \\).", workingLatex: "\\bar X \\sim N\\!\\left(45,\\ \\dfrac{6^{2}}{36}\\right) = N(45,\\ 1)", explanation: "With \\( n = 36 \\), the variance of \\( \\bar X \\) is \\( 36/36 = 1 \\), so the standard error is \\( \\sigma/\\sqrt n = 6/6 = 1 \\) minute." },
        { stepNumber: 3, description: "Identify the critical z-value for a one-tailed \\( 1\\% \\) lower test.", workingLatex: "z^{*} = -2.3263", explanation: "For a lower-tail test at the \\( 1\\% \\) level the critical z-value is \\( -2.3263 \\)." },
        { stepNumber: 4, description: "Compute the critical value of \\( \\bar X \\) and state the critical region.", workingLatex: "\\bar x_{crit} = 45 - 2.3263\\times\\dfrac{6}{\\sqrt{36}} = 42.674\\ (\\text{3 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = 45 - 2.3263\\times 1 = 42.674 \\) minutes. The critical region is \\( \\bar X \\le 42.674 \\) minutes." }
      ],
      finalAnswer: "\\( \\bar x_{crit} = 42.674 \\) minutes; critical region \\( \\bar X \\le 42.674 \\) minutes.",
      canonicalAnswer: "42.674",
    },
  },
  {
    id: "y2hm-041",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 41",
    difficulty: "Standard",
    questionText: "The operating temperature of a process is Normally distributed with mean \\( \\mu\\,^{\\circ}\\mathrm{C} \\) and known standard deviation \\( 1.2\\,^{\\circ}\\mathrm{C} \\). The process should run at a mean of \\( 37\\,^{\\circ}\\mathrm{C} \\). An operator suspects the process is running hot and records a random sample of \\( 9 \\) readings, with sample mean \\( \\bar x = 37.9\\,^{\\circ}\\mathrm{C} \\). Test at the \\( 5\\% \\) significance level, using the critical value of \\( \\bar X \\), whether the mean temperature has increased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "decision", "one-tailed", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 37 \\qquad H_1:\\ \\mu > 37", explanation: "Running hot means an increased mean, so this is an upper-tail test \\( \\mu > 37 \\)." },
        { stepNumber: 2, description: "Find the standard error and critical z-value.", workingLatex: "\\dfrac{\\sigma}{\\sqrt n} = \\dfrac{1.2}{\\sqrt 9} = 0.4, \\qquad z^{*} = 1.6449", explanation: "With \\( n = 9 \\) the standard error is \\( 1.2/3 = 0.4\\,^{\\circ}\\mathrm{C} \\); the \\( 5\\% \\) upper critical z-value is \\( 1.6449 \\)." },
        { stepNumber: 3, description: "Compute the critical value of \\( \\bar X \\).", workingLatex: "\\bar x_{crit} = 37 + 1.6449\\times 0.4 = 37.658\\ (\\text{3 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = 37 + 1.6449\\times 0.4 = 37.658\\,^{\\circ}\\mathrm{C} \\), so the critical region is \\( \\bar X \\ge 37.658\\,^{\\circ}\\mathrm{C} \\)." },
        { stepNumber: 4, description: "Compare the observed mean and decide.", workingLatex: "\\bar x = 37.9 > 37.658 \\ \\Rightarrow\\ \\text{reject } H_0", explanation: "The observed sample mean \\( 37.9\\,^{\\circ}\\mathrm{C} \\) lies inside the critical region, so we reject \\( H_0 \\). There is sufficient evidence at the \\( 5\\% \\) level that the mean operating temperature has increased above \\( 37\\,^{\\circ}\\mathrm{C} \\)." }
      ],
      finalAnswer: "\\( \\bar x = 37.9 > 37.658 \\), so reject \\( H_0 \\): significant evidence at the \\( 5\\% \\) level that the mean temperature has increased.",
      canonicalAnswer: "37.658",
    },
  },
  {
    id: "y2hm-042",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 42",
    difficulty: "Standard",
    questionText: "The lifetime of a type of rechargeable battery is Normally distributed with mean \\( \\mu \\) hours and known standard deviation \\( 1.5 \\) hours. The manufacturer claims a mean lifetime of \\( 12 \\) hours. A consumer group suspects the mean is lower and tests a random sample of \\( 20 \\) batteries, obtaining a sample mean of \\( \\bar x = 11.2 \\) hours. Using the critical value of \\( \\bar X \\), test the claim at the \\( 5\\% \\) significance level.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "decision", "one-tailed", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 12 \\qquad H_1:\\ \\mu < 12", explanation: "The suspicion that the mean lifetime is lower gives a lower-tail test \\( \\mu < 12 \\)." },
        { stepNumber: 2, description: "Find the standard error and critical z-value.", workingLatex: "\\dfrac{\\sigma}{\\sqrt n} = \\dfrac{1.5}{\\sqrt{20}} = 0.3354, \\qquad z^{*} = -1.6449", explanation: "With \\( n = 20 \\) the standard error is \\( 1.5/\\sqrt{20} = 0.3354 \\) hours (4 d.p.); the \\( 5\\% \\) lower critical z-value is \\( -1.6449 \\)." },
        { stepNumber: 3, description: "Compute the critical value of \\( \\bar X \\).", workingLatex: "\\bar x_{crit} = 12 - 1.6449\\times 0.3354 = 11.448\\ (\\text{3 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = 12 - 1.6449\\times 0.3354 = 11.448 \\) hours, so the critical region is \\( \\bar X \\le 11.448 \\) hours." },
        { stepNumber: 4, description: "Compare the observed mean and decide.", workingLatex: "\\bar x = 11.2 < 11.448 \\ \\Rightarrow\\ \\text{reject } H_0", explanation: "The observed sample mean \\( 11.2 \\) hours lies in the critical region, so we reject \\( H_0 \\). There is sufficient evidence at the \\( 5\\% \\) level that the mean battery lifetime is less than \\( 12 \\) hours." }
      ],
      finalAnswer: "\\( \\bar x = 11.2 < 11.448 \\), so reject \\( H_0 \\): significant evidence at the \\( 5\\% \\) level that the mean lifetime is below \\( 12 \\) hours.",
      canonicalAnswer: "11.448",
    },
  },
  {
    id: "y2hm-043",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 43",
    difficulty: "Standard",
    questionText: "The mass of a hand-poured chocolate bar is Normally distributed with mean \\( \\mu\\,\\mathrm{g} \\) and known standard deviation \\( 10\\,\\mathrm{g} \\). The target mean mass is \\( 250\\,\\mathrm{g} \\). A supervisor tests, at the \\( 2.5\\% \\) significance level, whether the mean mass has increased, using a random sample of \\( 25 \\) bars with sample mean \\( \\bar x = 253\\,\\mathrm{g} \\). Use the critical value of \\( \\bar X \\) to carry out the test.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "decision", "one-tailed", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 250 \\qquad H_1:\\ \\mu > 250", explanation: "Testing for an increase in mean mass gives an upper-tail test \\( \\mu > 250 \\)." },
        { stepNumber: 2, description: "Find the standard error and critical z-value.", workingLatex: "\\dfrac{\\sigma}{\\sqrt n} = \\dfrac{10}{\\sqrt{25}} = 2, \\qquad z^{*} = 1.9600", explanation: "With \\( n = 25 \\) the standard error is \\( 10/5 = 2\\,\\mathrm{g} \\); for an upper-tail test at \\( 2.5\\% \\) we need \\( 0.975 \\) below the critical value, giving \\( z^{*} = 1.9600 \\) to 4 d.p." },
        { stepNumber: 3, description: "Compute the critical value of \\( \\bar X \\).", workingLatex: "\\bar x_{crit} = 250 + 1.9600\\times 2 = 253.92\\ (\\text{2 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = 250 + 1.9600\\times 2 = 253.92\\,\\mathrm{g} \\), so the critical region is \\( \\bar X \\ge 253.92\\,\\mathrm{g} \\)." },
        { stepNumber: 4, description: "Compare the observed mean and decide.", workingLatex: "\\bar x = 253 < 253.92 \\ \\Rightarrow\\ \\text{do not reject } H_0", explanation: "The observed sample mean \\( 253\\,\\mathrm{g} \\) lies below the critical value, so it is not in the critical region and we do not reject \\( H_0 \\). There is insufficient evidence at the \\( 2.5\\% \\) level that the mean mass has increased above \\( 250\\,\\mathrm{g} \\)." }
      ],
      finalAnswer: "\\( \\bar x = 253 < 253.92 \\), so do not reject \\( H_0 \\): insufficient evidence at the \\( 2.5\\% \\) level of an increase in the mean mass.",
      canonicalAnswer: "253.92",
    },
  },
  {
    id: "y2hm-044",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 44",
    difficulty: "Standard",
    questionText: "The salt content of a brand of soup is Normally distributed with mean \\( \\mu\\,\\mathrm{g} \\) per portion and known standard deviation \\( 0.2\\,\\mathrm{g} \\). A reformulation aims to keep the mean at \\( 1.4\\,\\mathrm{g} \\) but a campaigner believes it has been reduced. A random sample of \\( 16 \\) portions has sample mean \\( \\bar x = 1.25\\,\\mathrm{g} \\). Using the critical value of \\( \\bar X \\), test at the \\( 1\\% \\) significance level whether the mean salt content has fallen.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "decision", "one-tailed", "context", "1 percent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 1.4 \\qquad H_1:\\ \\mu < 1.4", explanation: "A belief that the mean has been reduced gives a lower-tail test \\( \\mu < 1.4 \\)." },
        { stepNumber: 2, description: "Find the standard error and critical z-value.", workingLatex: "\\dfrac{\\sigma}{\\sqrt n} = \\dfrac{0.2}{\\sqrt{16}} = 0.05, \\qquad z^{*} = -2.3263", explanation: "With \\( n = 16 \\) the standard error is \\( 0.2/4 = 0.05\\,\\mathrm{g} \\); the \\( 1\\% \\) lower critical z-value is \\( -2.3263 \\)." },
        { stepNumber: 3, description: "Compute the critical value of \\( \\bar X \\).", workingLatex: "\\bar x_{crit} = 1.4 - 2.3263\\times 0.05 = 1.2837\\ (\\text{4 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = 1.4 - 2.3263\\times 0.05 = 1.2837\\,\\mathrm{g} \\), so the critical region is \\( \\bar X \\le 1.2837\\,\\mathrm{g} \\)." },
        { stepNumber: 4, description: "Compare the observed mean and decide.", workingLatex: "\\bar x = 1.25 < 1.2837 \\ \\Rightarrow\\ \\text{reject } H_0", explanation: "The observed sample mean \\( 1.25\\,\\mathrm{g} \\) lies in the critical region, so we reject \\( H_0 \\). There is sufficient evidence at the \\( 1\\% \\) level that the mean salt content has fallen below \\( 1.4\\,\\mathrm{g} \\)." }
      ],
      finalAnswer: "\\( \\bar x = 1.25 < 1.2837 \\), so reject \\( H_0 \\): significant evidence at the \\( 1\\% \\) level that the mean salt content has decreased.",
      canonicalAnswer: "1.2837",
    },
  },
  {
    id: "y2hm-045",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 45",
    difficulty: "Standard",
    questionText: "A component's resistance is Normally distributed with mean \\( \\mu\\,\\Omega \\) and known standard deviation \\( 6\\,\\Omega \\). The nominal mean is \\( 100\\,\\Omega \\). A random sample of \\( 30 \\) components has sample mean \\( \\bar x = 102.5\\,\\Omega \\). By calculating a p-value, test at the \\( 5\\% \\) significance level whether the mean resistance has increased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "p-value", "one-tailed", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 100 \\qquad H_1:\\ \\mu > 100", explanation: "Testing for an increase in mean resistance gives an upper-tail test \\( \\mu > 100 \\)." },
        { stepNumber: 2, description: "Standardise the observed sample mean.", workingLatex: "z = \\dfrac{\\bar x - \\mu_0}{\\sigma/\\sqrt n} = \\dfrac{102.5 - 100}{6/\\sqrt{30}} = 2.2822", explanation: "The standard error is \\( 6/\\sqrt{30} = 1.0954\\,\\Omega \\), giving the test statistic \\( z = 2.5/1.0954 = 2.2822 \\) to 4 d.p." },
        { stepNumber: 3, description: "Compute the p-value for the upper tail.", workingLatex: "p = P(Z \\ge 2.2822) = 1 - 0.9888 = 0.0112", explanation: "The p-value is the upper-tail probability \\( P(Z \\ge 2.2822) = 0.0112 \\) to 4 d.p." },
        { stepNumber: 4, description: "Compare the p-value with the significance level and decide.", workingLatex: "0.0112 < 0.05 \\ \\Rightarrow\\ \\text{reject } H_0", explanation: "Since the p-value \\( 0.0112 \\) is less than \\( 0.05 \\), we reject \\( H_0 \\). There is sufficient evidence at the \\( 5\\% \\) level that the mean resistance has increased above \\( 100\\,\\Omega \\)." }
      ],
      finalAnswer: "\\( p = 0.0112 < 0.05 \\), so reject \\( H_0 \\): significant evidence at the \\( 5\\% \\) level that the mean resistance has increased.",
      canonicalAnswer: "0.0112",
    },
  },
  {
    id: "y2hm-046",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 46",
    difficulty: "Standard",
    questionText: "The mean weekly water usage of households on an estate is Normally distributed with mean \\( \\mu \\) litres and known standard deviation \\( 4 \\) litres. A water company believes the mean is \\( 50 \\) litres but suspects a recent campaign has reduced usage. A random sample of \\( 16 \\) households has sample mean \\( \\bar x = 48.4 \\) litres. By calculating a p-value, test at the \\( 5\\% \\) significance level whether the mean usage has decreased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "p-value", "one-tailed", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 50 \\qquad H_1:\\ \\mu < 50", explanation: "Testing for reduced usage gives a lower-tail test \\( \\mu < 50 \\)." },
        { stepNumber: 2, description: "Standardise the observed sample mean.", workingLatex: "z = \\dfrac{\\bar x - \\mu_0}{\\sigma/\\sqrt n} = \\dfrac{48.4 - 50}{4/\\sqrt{16}} = -1.6000", explanation: "The standard error is \\( 4/\\sqrt{16} = 1 \\) litre, giving the test statistic \\( z = -1.6/1 = -1.6000 \\)." },
        { stepNumber: 3, description: "Compute the p-value for the lower tail.", workingLatex: "p = P(Z \\le -1.6000) = 0.0548", explanation: "The p-value is the lower-tail probability \\( P(Z \\le -1.6000) = 0.0548 \\) to 4 d.p." },
        { stepNumber: 4, description: "Compare the p-value with the significance level and decide.", workingLatex: "0.0548 > 0.05 \\ \\Rightarrow\\ \\text{do not reject } H_0", explanation: "Since the p-value \\( 0.0548 \\) exceeds \\( 0.05 \\), we do not reject \\( H_0 \\). There is insufficient evidence at the \\( 5\\% \\) level that the mean weekly water usage has decreased below \\( 50 \\) litres." }
      ],
      finalAnswer: "\\( p = 0.0548 > 0.05 \\), so do not reject \\( H_0 \\): insufficient evidence at the \\( 5\\% \\) level of a decrease in mean usage.",
      canonicalAnswer: "0.0548",
    },
  },
  {
    id: "y2hm-047",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 47",
    difficulty: "Standard",
    questionText: "The pH of a chemical solution is Normally distributed with mean \\( \\mu \\) and known standard deviation \\( 0.5 \\). A standard process produces a mean pH of \\( 5.0 \\). After a change to the process, a chemist takes a random sample of \\( 40 \\) batches and finds a sample mean of \\( \\bar x = 5.18 \\). By calculating a p-value, test at the \\( 5\\% \\) significance level whether the mean pH has increased.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "p-value", "one-tailed", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 5.0 \\qquad H_1:\\ \\mu > 5.0", explanation: "Testing for an increase in mean pH gives an upper-tail test \\( \\mu > 5.0 \\)." },
        { stepNumber: 2, description: "Standardise the observed sample mean.", workingLatex: "z = \\dfrac{\\bar x - \\mu_0}{\\sigma/\\sqrt n} = \\dfrac{5.18 - 5.0}{0.5/\\sqrt{40}} = 2.2768", explanation: "The standard error is \\( 0.5/\\sqrt{40} = 0.0791 \\), giving the test statistic \\( z = 0.18/0.0791 = 2.2768 \\) to 4 d.p." },
        { stepNumber: 3, description: "Compute the p-value for the upper tail.", workingLatex: "p = P(Z \\ge 2.2768) = 0.0114", explanation: "The p-value is the upper-tail probability \\( P(Z \\ge 2.2768) = 0.0114 \\) to 4 d.p." },
        { stepNumber: 4, description: "Compare the p-value with the significance level and decide.", workingLatex: "0.0114 < 0.05 \\ \\Rightarrow\\ \\text{reject } H_0", explanation: "Since the p-value \\( 0.0114 \\) is less than \\( 0.05 \\), we reject \\( H_0 \\). There is sufficient evidence at the \\( 5\\% \\) level that the mean pH has increased above \\( 5.0 \\)." }
      ],
      finalAnswer: "\\( p = 0.0114 < 0.05 \\), so reject \\( H_0 \\): significant evidence at the \\( 5\\% \\) level that the mean pH has increased.",
      canonicalAnswer: "0.0114",
    },
  },
  {
    id: "y2hm-048",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 48",
    difficulty: "Standard",
    questionText: "The breaking strength of a climbing rope is Normally distributed with mean \\( \\mu\\,\\mathrm{kg} \\) and known standard deviation \\( 20\\,\\mathrm{kg} \\). The manufacturer states a mean breaking strength of \\( 750\\,\\mathrm{kg} \\). A safety inspector suspects the mean has fallen and tests a random sample of \\( 25 \\) ropes, obtaining a sample mean of \\( \\bar x = 741\\,\\mathrm{kg} \\). (a) Using the critical value of \\( \\bar X \\), test at the \\( 5\\% \\) significance level whether the mean breaking strength has decreased. (b) State one assumption required for the test to be valid.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "decision", "modelling assumption", "one-tailed", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 750 \\qquad H_1:\\ \\mu < 750", explanation: "A suspected fall in mean strength gives a lower-tail test \\( \\mu < 750 \\)." },
        { stepNumber: 2, description: "Find the standard error and critical z-value.", workingLatex: "\\dfrac{\\sigma}{\\sqrt n} = \\dfrac{20}{\\sqrt{25}} = 4, \\qquad z^{*} = -1.6449", explanation: "With \\( n = 25 \\) the standard error is \\( 20/5 = 4\\,\\mathrm{kg} \\); the \\( 5\\% \\) lower critical z-value is \\( -1.6449 \\)." },
        { stepNumber: 3, description: "Compute the critical value of \\( \\bar X \\).", workingLatex: "\\bar x_{crit} = 750 - 1.6449\\times 4 = 743.42\\ (\\text{2 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = 750 - 1.6449\\times 4 = 743.42\\,\\mathrm{kg} \\), so the critical region is \\( \\bar X \\le 743.42\\,\\mathrm{kg} \\)." },
        { stepNumber: 4, description: "Compare the observed mean and decide.", workingLatex: "\\bar x = 741 < 743.42 \\ \\Rightarrow\\ \\text{reject } H_0", explanation: "The observed sample mean \\( 741\\,\\mathrm{kg} \\) lies in the critical region, so we reject \\( H_0 \\). There is sufficient evidence at the \\( 5\\% \\) level that the mean breaking strength has decreased below \\( 750\\,\\mathrm{kg} \\)." },
        { stepNumber: 5, description: "State a modelling assumption required for validity.", workingLatex: "\\sigma = 20\\,\\mathrm{kg}\\ \\text{known};\\quad \\text{population Normal};\\quad \\text{random sample}", explanation: "For this test to be valid we assume the population standard deviation \\( \\sigma = 20\\,\\mathrm{kg} \\) is known (and unchanged), the breaking strengths are Normally distributed, and the \\( 25 \\) ropes form a random sample. Stating any one of these is acceptable; the assumption that \\( \\sigma \\) is known is essential because it is used directly to standardise \\( \\bar X \\)." }
      ],
      finalAnswer: "\\( \\bar x = 741 < 743.42 \\), so reject \\( H_0 \\): significant evidence at the \\( 5\\% \\) level that the mean breaking strength has decreased; the test assumes \\( \\sigma = 20\\,\\mathrm{kg} \\) is known and the strengths are Normally distributed.",
    },
  },
  {
    id: "y2hm-049",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 49",
    difficulty: "Standard",
    questionText: "Scores on a reasoning test are modelled as Normally distributed with mean \\( \\mu \\) and known standard deviation \\( 5 \\). The historical mean score is \\( 68 \\). A psychologist tests, at the \\( 1\\% \\) significance level, whether a new coaching method has raised the mean score, using a random sample of \\( 16 \\) candidates with sample mean \\( \\bar x = 70.2 \\). (a) Find the critical value of \\( \\bar X \\) and state the critical region. (b) Carry out the test. (c) Comment on the need for the Normality assumption here.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "mean", "normal distribution", "critical value", "critical region", "decision", "modelling assumption", "one-tailed", "context", "1 percent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the population mean.", workingLatex: "H_0:\\ \\mu = 68 \\qquad H_1:\\ \\mu > 68", explanation: "Testing whether coaching has raised the mean gives an upper-tail test \\( \\mu > 68 \\)." },
        { stepNumber: 2, description: "Find the standard error and critical z-value.", workingLatex: "\\dfrac{\\sigma}{\\sqrt n} = \\dfrac{5}{\\sqrt{16}} = 1.25, \\qquad z^{*} = 2.3263", explanation: "With \\( n = 16 \\) the standard error is \\( 5/4 = 1.25 \\); the \\( 1\\% \\) upper critical z-value is \\( 2.3263 \\)." },
        { stepNumber: 3, description: "Compute the critical value of \\( \\bar X \\) and state the critical region.", workingLatex: "\\bar x_{crit} = 68 + 2.3263\\times 1.25 = 70.908\\ (\\text{3 d.p.})", explanation: "The critical value is \\( \\bar x_{crit} = 68 + 2.3263\\times 1.25 = 70.908 \\), so the critical region is \\( \\bar X \\ge 70.908 \\)." },
        { stepNumber: 4, description: "Compare the observed mean and decide.", workingLatex: "\\bar x = 70.2 < 70.908 \\ \\Rightarrow\\ \\text{do not reject } H_0", explanation: "The observed sample mean \\( 70.2 \\) is below the critical value, so it is not in the critical region and we do not reject \\( H_0 \\). There is insufficient evidence at the \\( 1\\% \\) level that the coaching has raised the mean score above \\( 68 \\)." },
        { stepNumber: 5, description: "Comment on the Normality assumption.", workingLatex: "\\bar X \\sim N\\!\\left(\\mu,\\ \\dfrac{\\sigma^{2}}{n}\\right)\\ \\text{requires Normal population for small } n", explanation: "The sample size \\( n = 16 \\) is small, so we cannot rely on the Central Limit Theorem to make \\( \\bar X \\) approximately Normal. The test therefore depends on the assumption that the underlying score distribution is itself Normal; if scores were strongly skewed the stated critical value (and hence the conclusion) would be unreliable." }
      ],
      finalAnswer: "\\( \\bar x_{crit} = 70.908 \\), critical region \\( \\bar X \\ge 70.908 \\); since \\( \\bar x = 70.2 < 70.908 \\) do not reject \\( H_0 \\), and with \\( n = 16 \\) small the Normality of the population is essential for the test to be valid.",
    },
  },
  {
    id: "y2hm-050",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 050",
    difficulty: "Challenge",
    questionText: "The masses of bags of flour produced by a machine are normally distributed with standard deviation \\( 2.5\\,\\mathrm{g} \\). When correctly set, the mean mass is \\( 50\\,\\mathrm{g} \\). A technician suspects the machine has drifted and takes a random sample of \\( 40 \\) bags, finding a sample mean mass of \\( 50.8\\,\\mathrm{g} \\). Using a two-tailed test at the \\( 5\\% \\) level of significance, test whether the mean mass has changed. State your conclusion in context.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "z-test", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for a two-tailed test.", workingLatex: "H_0:\\ \\mu = 50 \\qquad H_1:\\ \\mu \\neq 50", explanation: "The technician tests whether the mean has changed in either direction, so the alternative is two-tailed about the set value \\( \\mu_0 = 50 \\)." },
        { stepNumber: 2, description: "State the distribution of the sample mean under \\( H_0 \\).", workingLatex: "\\bar{X} \\sim N\\!\\left(50,\\ \\frac{2.5^2}{40}\\right)", explanation: "With \\( \\sigma \\) known, the sample mean is normally distributed with mean \\( \\mu_0 \\) and variance \\( \\sigma^2/n \\)." },
        { stepNumber: 3, description: "Compute the standard error.", workingLatex: "\\frac{\\sigma}{\\sqrt{n}} = \\frac{2.5}{\\sqrt{40}} = 0.3953", explanation: "The standard error of the sample mean is \\( \\sigma/\\sqrt{n} = 0.3953 \\) to 4 d.p." },
        { stepNumber: 4, description: "Standardise the observed sample mean to a \\( z \\)-value.", workingLatex: "z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}} = \\frac{50.8 - 50}{0.3953} = 2.0239", explanation: "The test statistic is \\( z = 2.0239 \\) to 4 d.p." },
        { stepNumber: 5, description: "State the two-tailed critical values at the \\( 5\\% \\) level.", workingLatex: "z = \\pm 1.96 \\quad (2.5\\% \\text{ in each tail})", explanation: "For a two-tailed test at \\( 5\\% \\) the critical values are \\( \\pm 1.96 \\); reject \\( H_0 \\) if \\( |z| > 1.96 \\)." },
        { stepNumber: 6, description: "Compare and conclude in context.", workingLatex: "2.0239 > 1.96 \\implies \\text{reject } H_0", explanation: "Since \\( z = 2.0239 \\) lies in the critical region, the result is significant at the \\( 5\\% \\) level. There is evidence that the mean mass of the bags of flour has changed (it appears to have increased above \\( 50\\,\\mathrm{g} \\)), so the machine has drifted." }
      ],
      finalAnswer: "\\( z = 2.0239 > 1.96,\\ \\text{so reject } H_0 \\text{ — there is evidence at the } 5\\% \\text{ level that the mean mass has changed.} \\)",
    },
  },
  {
    id: "y2hm-051",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 051",
    difficulty: "Challenge",
    questionText: "A component has a target breaking strength with mean \\( 100\\,\\mathrm{N} \\) and known standard deviation \\( 12\\,\\mathrm{N} \\), and strengths are normally distributed. An engineer wishes to test, at the \\( 1\\% \\) level of significance, whether the mean breaking strength differs from the target. A random sample of \\( 50 \\) components has a mean breaking strength of \\( 104.5\\,\\mathrm{N} \\). Carry out the two-tailed test and state your conclusion in context.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "1% level", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses.", workingLatex: "H_0:\\ \\mu = 100 \\qquad H_1:\\ \\mu \\neq 100", explanation: "The engineer tests for a difference from the target in either direction, so the test is two-tailed about \\( \\mu_0 = 100 \\)." },
        { stepNumber: 2, description: "State the distribution of the sample mean under \\( H_0 \\).", workingLatex: "\\bar{X} \\sim N\\!\\left(100,\\ \\frac{12^2}{50}\\right)", explanation: "With \\( \\sigma = 12 \\) known, \\( \\bar{X} \\) is normal with mean \\( 100 \\) and variance \\( \\sigma^2/n \\)." },
        { stepNumber: 3, description: "Compute the standard error.", workingLatex: "\\frac{\\sigma}{\\sqrt{n}} = \\frac{12}{\\sqrt{50}} = 1.6971", explanation: "The standard error is \\( 1.6971 \\) to 4 d.p." },
        { stepNumber: 4, description: "Standardise the observed sample mean.", workingLatex: "z = \\frac{104.5 - 100}{1.6971} = 2.6517", explanation: "The test statistic is \\( z = 2.6517 \\) to 4 d.p." },
        { stepNumber: 5, description: "State the two-tailed critical values at the \\( 1\\% \\) level.", workingLatex: "z = \\pm 2.576 \\quad (0.5\\% \\text{ in each tail})", explanation: "For a two-tailed test at \\( 1\\% \\) the critical values are \\( \\pm 2.5758 \\); reject \\( H_0 \\) if \\( |z| > 2.5758 \\)." },
        { stepNumber: 6, description: "Compare and conclude in context.", workingLatex: "2.6517 > 2.5758 \\implies \\text{reject } H_0", explanation: "Since \\( z = 2.6517 \\) exceeds \\( 2.5758 \\), the result is significant at the \\( 1\\% \\) level. There is evidence that the mean breaking strength of the components differs from the target of \\( 100\\,\\mathrm{N} \\) (it appears to be higher)." }
      ],
      finalAnswer: "\\( z = 2.6517 > 2.576,\\ \\text{so reject } H_0 \\text{ — there is evidence at the } 1\\% \\text{ level that the mean breaking strength differs from } 100\\,\\mathrm{N}. \\)",
    },
  },
  {
    id: "y2hm-052",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 052",
    difficulty: "Challenge",
    questionText: "The volume of liquid dispensed by a filling machine is normally distributed with standard deviation \\( 24\\,\\mathrm{ml} \\). The machine is set to dispense a mean of \\( 500\\,\\mathrm{ml} \\). A random sample of \\( 36 \\) bottles has a mean volume of \\( 510\\,\\mathrm{ml} \\). Using the doubled-tail \\( p \\)-value method, test at the \\( 5\\% \\) level of significance whether the mean volume dispensed has changed, and state your conclusion in context.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "p-value", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses.", workingLatex: "H_0:\\ \\mu = 500 \\qquad H_1:\\ \\mu \\neq 500", explanation: "The test is for a change in either direction, so it is two-tailed about \\( \\mu_0 = 500 \\)." },
        { stepNumber: 2, description: "State the distribution of the sample mean and the standard error.", workingLatex: "\\bar{X} \\sim N\\!\\left(500,\\ \\frac{24^2}{36}\\right), \\quad \\frac{\\sigma}{\\sqrt{n}} = \\frac{24}{6} = 4", explanation: "With \\( \\sigma = 24 \\) and \\( n = 36 \\), the standard error of \\( \\bar{X} \\) is \\( 4 \\)." },
        { stepNumber: 3, description: "Standardise the observed sample mean.", workingLatex: "z = \\frac{510 - 500}{4} = 2.5", explanation: "The observed value is above the mean, giving a test statistic \\( z = 2.5 \\)." },
        { stepNumber: 4, description: "Find the upper-tail probability.", workingLatex: "P(\\bar{X} \\ge 510) = P(Z \\ge 2.5) = 0.0062", explanation: "Using the standard normal distribution, the single-tail probability is \\( 1 - \\Phi(2.5) = 0.0062 \\) to 4 d.p." },
        { stepNumber: 5, description: "Double the tail probability for the two-tailed test.", workingLatex: "\\text{two-tailed } p\\text{-value} = 2 \\times 0.0062 = 0.0124", explanation: "Because the alternative is two-sided, the relevant \\( p \\)-value is twice the smaller tail: \\( 0.0124 \\)." },
        { stepNumber: 6, description: "Compare with \\( \\alpha \\) and conclude in context.", workingLatex: "0.0124 < 0.05 \\implies \\text{reject } H_0", explanation: "Since the \\( p \\)-value is below \\( 0.05 \\), the result is significant. There is evidence at the \\( 5\\% \\) level that the mean volume dispensed has changed (it appears to have increased above \\( 500\\,\\mathrm{ml} \\))." }
      ],
      finalAnswer: "\\( p\\text{-value} = 2(0.0062) = 0.0124 < 0.05,\\ \\text{so reject } H_0 \\text{ — the mean volume dispensed has changed.} \\)",
    },
  },
  {
    id: "y2hm-053",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 053",
    difficulty: "Challenge",
    questionText: "A random variable \\( X \\) is normally distributed with known standard deviation \\( 4 \\). A sample of size \\( 25 \\) is used to test \\( H_0:\\ \\mu = 20 \\) against \\( H_1:\\ \\mu \\neq 20 \\) at the \\( 5\\% \\) level of significance. Find the critical region for the sample mean \\( \\bar{X} \\), giving the boundary values to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "critical region", "xbar"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the distribution of the sample mean under \\( H_0 \\).", workingLatex: "\\bar{X} \\sim N\\!\\left(20,\\ \\frac{4^2}{25}\\right)", explanation: "Under \\( H_0 \\), \\( \\bar{X} \\) is normal with mean \\( 20 \\) and variance \\( \\sigma^2/n \\)." },
        { stepNumber: 2, description: "Compute the standard error.", workingLatex: "\\frac{\\sigma}{\\sqrt{n}} = \\frac{4}{\\sqrt{25}} = 0.8", explanation: "The standard error of \\( \\bar{X} \\) is \\( 4/5 = 0.8 \\)." },
        { stepNumber: 3, description: "State the two-tailed critical \\( z \\)-values.", workingLatex: "z = \\pm 1.96 \\quad (2.5\\% \\text{ in each tail})", explanation: "At the \\( 5\\% \\) level with a two-tailed test, the critical values of \\( Z \\) are \\( \\pm 1.96 \\)." },
        { stepNumber: 4, description: "Convert the critical \\( z \\)-values back to values of \\( \\bar{X} \\).", workingLatex: "\\bar{x} = \\mu_0 \\pm 1.96 \\times \\frac{\\sigma}{\\sqrt{n}} = 20 \\pm 1.96 \\times 0.8", explanation: "Rearranging \\( z = (\\bar{x} - \\mu_0)/(\\sigma/\\sqrt{n}) \\) gives the critical sample-mean values." },
        { stepNumber: 5, description: "Evaluate the boundary values and state the critical region.", workingLatex: "\\bar{x} = 18.4320 \\text{ or } \\bar{x} = 21.5680 \\\\ \\text{CR: } \\bar{X} < 18.4320 \\text{ or } \\bar{X} > 21.5680", explanation: "The critical region is \\( \\bar{X} < 18.4320 \\) or \\( \\bar{X} > 21.5680 \\) (to 4 d.p.); a sample mean in this region leads to rejection of \\( H_0 \\)." }
      ],
      finalAnswer: "\\( \\text{CR: } \\bar{X} < 18.4320 \\text{ or } \\bar{X} > 21.5680 \\)",
    },
  },
  {
    id: "y2hm-054",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 054",
    difficulty: "Challenge",
    questionText: "Reaction times of subjects in an experiment are normally distributed with known standard deviation \\( 15\\,\\mathrm{ms} \\). A random sample of \\( 36 \\) subjects is used to test \\( H_0:\\ \\mu = 80 \\) against \\( H_1:\\ \\mu \\neq 80 \\) at the \\( 1\\% \\) level of significance. Find the critical region for the sample mean reaction time \\( \\bar{X} \\), giving the boundary values to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "critical region", "1% level"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the distribution of the sample mean under \\( H_0 \\).", workingLatex: "\\bar{X} \\sim N\\!\\left(80,\\ \\frac{15^2}{36}\\right)", explanation: "Under \\( H_0 \\), \\( \\bar{X} \\) is normal with mean \\( 80 \\) and variance \\( \\sigma^2/n \\)." },
        { stepNumber: 2, description: "Compute the standard error.", workingLatex: "\\frac{\\sigma}{\\sqrt{n}} = \\frac{15}{\\sqrt{36}} = 2.5", explanation: "The standard error of \\( \\bar{X} \\) is \\( 15/6 = 2.5 \\)." },
        { stepNumber: 3, description: "State the two-tailed critical \\( z \\)-values at the \\( 1\\% \\) level.", workingLatex: "z = \\pm 2.576 \\quad (0.5\\% \\text{ in each tail})", explanation: "At the \\( 1\\% \\) level with a two-tailed test, the critical values of \\( Z \\) are \\( \\pm 2.5758 \\)." },
        { stepNumber: 4, description: "Convert the critical \\( z \\)-values back to values of \\( \\bar{X} \\).", workingLatex: "\\bar{x} = 80 \\pm 2.5758 \\times 2.5", explanation: "Rearranging the standardisation formula gives the critical sample-mean boundaries." },
        { stepNumber: 5, description: "Evaluate the boundary values and state the critical region.", workingLatex: "\\bar{x} = 73.5604 \\text{ or } \\bar{x} = 86.4396 \\\\ \\text{CR: } \\bar{X} < 73.5604 \\text{ or } \\bar{X} > 86.4396", explanation: "The critical region is \\( \\bar{X} < 73.5604 \\) or \\( \\bar{X} > 86.4396 \\) (to 4 d.p.); a sample mean here leads to rejection of \\( H_0 \\)." }
      ],
      finalAnswer: "\\( \\text{CR: } \\bar{X} < 73.5604 \\text{ or } \\bar{X} > 86.4396 \\)",
    },
  },
  {
    id: "y2hm-055",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 055",
    difficulty: "Challenge",
    questionText: "The lengths of metal rods are normally distributed with known standard deviation \\( 5\\,\\mathrm{mm} \\). A test of \\( H_0:\\ \\mu = 210 \\) against \\( H_1:\\ \\mu \\neq 210 \\) is carried out at the \\( 5\\% \\) level of significance. A sample of \\( n \\) rods gives a sample mean of \\( 212\\,\\mathrm{mm} \\). Find the smallest sample size \\( n \\) for which this sample mean would lead to rejection of \\( H_0 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "least sample size", "unknown n"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses and the rejection condition.", workingLatex: "H_0:\\ \\mu = 210, \\quad H_1:\\ \\mu \\neq 210 \\\\ \\text{reject if } |z| \\ge 1.96", explanation: "For a two-tailed test at \\( 5\\% \\), \\( H_0 \\) is rejected when the magnitude of the standardised statistic reaches the critical value \\( 1.96 \\)." },
        { stepNumber: 2, description: "Write the standardised statistic for the observed mean.", workingLatex: "|z| = \\frac{|\\bar{x} - \\mu_0|}{\\sigma/\\sqrt{n}} = \\frac{|212 - 210|}{5/\\sqrt{n}} = \\frac{2\\sqrt{n}}{5}", explanation: "Substituting \\( \\bar{x} = 212 \\), \\( \\mu_0 = 210 \\) and \\( \\sigma = 5 \\) gives the standardised statistic as a function of \\( n \\)." },
        { stepNumber: 3, description: "Set up the rejection inequality.", workingLatex: "\\frac{2\\sqrt{n}}{5} \\ge 1.96", explanation: "Rejection requires the standardised statistic to be at least the critical value \\( 1.96 \\)." },
        { stepNumber: 4, description: "Solve the inequality for \\( n \\).", workingLatex: "n \\ge \\left(\\frac{1.96 \\times 5}{2}\\right)^2 = (4.8999)^2 = 24.0091", explanation: "Rearranging gives \\( n \\ge (z^{*}\\sigma/|\\bar{x}-\\mu_0|)^2 = 24.0091 \\) to 4 d.p." },
        { stepNumber: 5, description: "Round up to the smallest integer sample size.", workingLatex: "n = \\lceil 24.0091 \\rceil = 25", explanation: "Since \\( n \\) must be an integer satisfying \\( n \\ge 24.0091 \\), the smallest valid sample size is \\( 25 \\)." },
        { stepNumber: 6, description: "Verify that \\( n = 25 \\) rejects but \\( n = 24 \\) does not.", workingLatex: "n=25:\\ |z| = \\frac{2\\sqrt{25}}{5} = 2.0000 \\ge 1.96 \\\\ n=24:\\ |z| = \\frac{2\\sqrt{24}}{5} = 1.9596 < 1.96", explanation: "With \\( n = 25 \\) the statistic \\( 2.0000 \\) exceeds \\( 1.96 \\) (reject), while \\( n = 24 \\) gives \\( 1.9596 < 1.96 \\) (do not reject), confirming \\( n = 25 \\) is the least sample size." }
      ],
      finalAnswer: "\\( n = 25 \\)",
      canonicalAnswer: "25",
    },
  },
  {
    id: "y2hm-056",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 056",
    difficulty: "Challenge",
    questionText: "The contents of jars are normally distributed with known standard deviation \\( 0.4\\,\\mathrm{g} \\). A test of \\( H_0:\\ \\mu = 5.0 \\) against \\( H_1:\\ \\mu \\neq 5.0 \\) is carried out at the \\( 1\\% \\) level of significance. A sample of \\( n \\) jars gives a sample mean of \\( 4.9\\,\\mathrm{g} \\). Find the smallest sample size \\( n \\) for which this sample mean would lead to rejection of \\( H_0 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "least sample size", "1% level"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rejection condition for a two-tailed test at \\( 1\\% \\).", workingLatex: "\\text{reject if } |z| \\ge 2.576", explanation: "At the \\( 1\\% \\) level a two-tailed test rejects \\( H_0 \\) when the magnitude of the standardised statistic reaches \\( 2.5758 \\)." },
        { stepNumber: 2, description: "Write the standardised statistic for the observed mean.", workingLatex: "|z| = \\frac{|4.9 - 5.0|}{0.4/\\sqrt{n}} = \\frac{0.1\\sqrt{n}}{0.4} = \\frac{\\sqrt{n}}{4}", explanation: "Substituting the values gives the standardised statistic as a function of \\( n \\)." },
        { stepNumber: 3, description: "Set up the rejection inequality.", workingLatex: "\\frac{\\sqrt{n}}{4} \\ge 2.5758", explanation: "Rejection requires the standardised statistic to be at least \\( 2.5758 \\)." },
        { stepNumber: 4, description: "Solve the inequality for \\( n \\).", workingLatex: "n \\ge \\left(\\frac{2.5758 \\times 0.4}{0.1}\\right)^2 = 106.1583", explanation: "Rearranging gives \\( n \\ge (z^{*}\\sigma/|\\bar{x}-\\mu_0|)^2 = 106.1583 \\) to 4 d.p." },
        { stepNumber: 5, description: "Round up to the smallest integer sample size.", workingLatex: "n = \\lceil 106.1583 \\rceil = 107", explanation: "Since \\( n \\) must satisfy \\( n \\ge 106.1583 \\), the smallest integer value is \\( 107 \\)." },
        { stepNumber: 6, description: "Verify that \\( n = 107 \\) rejects but \\( n = 106 \\) does not.", workingLatex: "n=107:\\ |z| = \\frac{\\sqrt{107}}{4} = 2.5860 \\ge 2.576 \\\\ n=106:\\ |z| = \\frac{\\sqrt{106}}{4} = 2.5739 < 2.576", explanation: "With \\( n = 107 \\) the statistic \\( 2.5860 \\) exceeds \\( 2.5758 \\) (reject), while \\( n = 106 \\) gives \\( 2.5739 < 2.5758 \\) (do not reject), confirming \\( n = 107 \\)." }
      ],
      finalAnswer: "\\( n = 107 \\)",
      canonicalAnswer: "107",
    },
  },
  {
    id: "y2hm-057",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 057",
    difficulty: "Challenge",
    questionText: "The masses of items are normally distributed with known standard deviation \\( 8\\,\\mathrm{g} \\). A test of \\( H_0:\\ \\mu = 150 \\) against \\( H_1:\\ \\mu \\neq 150 \\) is carried out at the \\( 5\\% \\) level of significance. A sample of \\( n \\) items gives a sample mean of \\( 153\\,\\mathrm{g} \\). Find the smallest sample size \\( n \\) for which this sample mean would lead to rejection of \\( H_0 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "least sample size", "unknown n"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rejection condition for a two-tailed test at \\( 5\\% \\).", workingLatex: "\\text{reject if } |z| \\ge 1.96", explanation: "At the \\( 5\\% \\) level a two-tailed test rejects \\( H_0 \\) when \\( |z| \\) reaches the critical value \\( 1.96 \\)." },
        { stepNumber: 2, description: "Write the standardised statistic for the observed mean.", workingLatex: "|z| = \\frac{|153 - 150|}{8/\\sqrt{n}} = \\frac{3\\sqrt{n}}{8}", explanation: "Substituting \\( \\bar{x} = 153 \\), \\( \\mu_0 = 150 \\) and \\( \\sigma = 8 \\) gives the standardised statistic in terms of \\( n \\)." },
        { stepNumber: 3, description: "Set up the rejection inequality.", workingLatex: "\\frac{3\\sqrt{n}}{8} \\ge 1.96", explanation: "Rejection requires the standardised statistic to be at least \\( 1.96 \\)." },
        { stepNumber: 4, description: "Solve the inequality for \\( n \\).", workingLatex: "n \\ge \\left(\\frac{1.96 \\times 8}{3}\\right)^2 = (5.2266)^2 = 27.3170", explanation: "Rearranging gives \\( n \\ge (z^{*}\\sigma/|\\bar{x}-\\mu_0|)^2 = 27.3170 \\) to 4 d.p." },
        { stepNumber: 5, description: "Round up to the smallest integer sample size.", workingLatex: "n = \\lceil 27.3170 \\rceil = 28", explanation: "Since \\( n \\ge 27.3170 \\) and \\( n \\) is an integer, the smallest valid sample size is \\( 28 \\)." },
        { stepNumber: 6, description: "Verify that \\( n = 28 \\) rejects but \\( n = 27 \\) does not.", workingLatex: "n=28:\\ |z| = \\frac{3\\sqrt{28}}{8} = 1.9843 \\ge 1.96 \\\\ n=27:\\ |z| = \\frac{3\\sqrt{27}}{8} = 1.9486 < 1.96", explanation: "With \\( n = 28 \\) the statistic \\( 1.9843 \\) exceeds \\( 1.96 \\) (reject), while \\( n = 27 \\) gives \\( 1.9486 < 1.96 \\) (do not reject), confirming \\( n = 28 \\) is the least sample size." }
      ],
      finalAnswer: "\\( n = 28 \\)",
      canonicalAnswer: "28",
    },
  },
  {
    id: "y2hm-058",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 058",
    difficulty: "Challenge",
    questionText: "A quantity is normally distributed with unknown standard deviation \\( \\sigma \\). A two-tailed test of \\( H_0:\\ \\mu = 48 \\) against \\( H_1:\\ \\mu \\neq 48 \\) is carried out at the \\( 5\\% \\) level using a random sample of \\( 30 \\) observations, which gives a sample mean of \\( 46 \\). Find the largest value of \\( \\sigma \\) (to 4 decimal places) for which this sample would lead to rejection of \\( H_0 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "unknown sigma", "borderline"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rejection condition for the two-tailed test.", workingLatex: "\\text{reject if } |z| \\ge 1.96, \\quad z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}", explanation: "At the \\( 5\\% \\) level the test rejects \\( H_0 \\) when \\( |z| \\) reaches \\( 1.96 \\)." },
        { stepNumber: 2, description: "Write the magnitude of the standardised statistic in terms of \\( \\sigma \\).", workingLatex: "|z| = \\frac{|46 - 48|}{\\sigma/\\sqrt{30}} = \\frac{2\\sqrt{30}}{\\sigma}", explanation: "Substituting \\( \\bar{x} = 46 \\), \\( \\mu_0 = 48 \\) and \\( n = 30 \\) leaves \\( \\sigma \\) as the only unknown." },
        { stepNumber: 3, description: "Set up the rejection inequality.", workingLatex: "\\frac{2\\sqrt{30}}{\\sigma} \\ge 1.96", explanation: "A larger \\( \\sigma \\) makes \\( |z| \\) smaller, so there is a greatest \\( \\sigma \\) at which the boundary \\( |z| = 1.96 \\) is reached." },
        { stepNumber: 4, description: "Solve the inequality for \\( \\sigma \\).", workingLatex: "\\sigma \\le \\frac{2\\sqrt{30}}{1.96} = \\frac{|\\bar{x}-\\mu_0|\\sqrt{n}}{z^{*}}", explanation: "Rearranging gives \\( \\sigma \\) bounded above by \\( |\\bar{x}-\\mu_0|\\sqrt{n}/z^{*} \\)." },
        { stepNumber: 5, description: "Evaluate the boundary value.", workingLatex: "\\sigma_{\\max} = \\frac{2\\sqrt{30}}{1.96} = 5.5890", explanation: "The largest standard deviation for which the sample still leads to rejection is \\( 5.5890 \\) to 4 d.p." },
        { stepNumber: 6, description: "Check the result.", workingLatex: "\\sigma = 5.5890 \\implies |z| = \\frac{2\\sqrt{30}}{5.5890} = 1.9600", explanation: "At \\( \\sigma = 5.5890 \\) the statistic equals \\( 1.96 \\) exactly (borderline rejection); any smaller \\( \\sigma \\) gives \\( |z| > 1.96 \\), so this is the largest \\( \\sigma \\) that rejects \\( H_0 \\)." }
      ],
      finalAnswer: "\\( \\sigma = 5.5890 \\)",
      canonicalAnswer: "5.5890",
    },
  },
  {
    id: "y2hm-059",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 059",
    difficulty: "Challenge",
    questionText: "A measurement is normally distributed with unknown standard deviation \\( \\sigma \\). A two-tailed test of \\( H_0:\\ \\mu = 80 \\) against \\( H_1:\\ \\mu \\neq 80 \\) is carried out at the \\( 1\\% \\) level using a random sample of \\( 25 \\) observations, which gives a sample mean of \\( 82 \\). Find the largest value of \\( \\sigma \\) (to 4 decimal places) for which this sample would lead to rejection of \\( H_0 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "unknown sigma", "1% level"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rejection condition for the two-tailed test at \\( 1\\% \\).", workingLatex: "\\text{reject if } |z| \\ge 2.576, \\quad z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}", explanation: "At the \\( 1\\% \\) level the test rejects \\( H_0 \\) when \\( |z| \\) reaches \\( 2.5758 \\)." },
        { stepNumber: 2, description: "Write the magnitude of the standardised statistic in terms of \\( \\sigma \\).", workingLatex: "|z| = \\frac{|82 - 80|}{\\sigma/\\sqrt{25}} = \\frac{2 \\times 5}{\\sigma} = \\frac{10}{\\sigma}", explanation: "Substituting \\( \\bar{x} = 82 \\), \\( \\mu_0 = 80 \\) and \\( n = 25 \\) leaves \\( \\sigma \\) as the only unknown." },
        { stepNumber: 3, description: "Set up the rejection inequality.", workingLatex: "\\frac{10}{\\sigma} \\ge 2.5758", explanation: "A larger \\( \\sigma \\) reduces \\( |z| \\), so there is a greatest \\( \\sigma \\) at which the boundary is reached." },
        { stepNumber: 4, description: "Solve the inequality for \\( \\sigma \\).", workingLatex: "\\sigma \\le \\frac{10}{2.5758} = \\frac{|\\bar{x}-\\mu_0|\\sqrt{n}}{z^{*}}", explanation: "Rearranging gives \\( \\sigma \\) bounded above by \\( |\\bar{x}-\\mu_0|\\sqrt{n}/z^{*} \\)." },
        { stepNumber: 5, description: "Evaluate the boundary value.", workingLatex: "\\sigma_{\\max} = \\frac{10}{2.5758} = 3.8822", explanation: "The largest standard deviation for which the sample still leads to rejection is \\( 3.8822 \\) to 4 d.p." },
        { stepNumber: 6, description: "Check the result.", workingLatex: "\\sigma = 3.8822 \\implies |z| = \\frac{10}{3.8822} = 2.5758", explanation: "At \\( \\sigma = 3.8822 \\) the statistic equals \\( 2.5758 \\) exactly (borderline rejection); any smaller \\( \\sigma \\) gives \\( |z| > 2.5758 \\), so this is the largest \\( \\sigma \\) that rejects \\( H_0 \\)." }
      ],
      finalAnswer: "\\( \\sigma = 3.8822 \\)",
      canonicalAnswer: "3.8822",
    },
  },
  {
    id: "y2hm-060",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 060",
    difficulty: "Challenge",
    questionText: "A process produces items whose values are normally distributed with known standard deviation \\( 18 \\). The target mean is \\( 200 \\). A random sample of \\( 25 \\) items has a sample mean of \\( 207 \\). Using a two-tailed test at the \\( 5\\% \\) level of significance, determine carefully whether there is sufficient evidence to conclude that the mean has changed, and state your conclusion in context.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "borderline", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses.", workingLatex: "H_0:\\ \\mu = 200 \\qquad H_1:\\ \\mu \\neq 200", explanation: "The test is for a change in either direction, so it is two-tailed about \\( \\mu_0 = 200 \\)." },
        { stepNumber: 2, description: "State the distribution of the sample mean and the standard error.", workingLatex: "\\bar{X} \\sim N\\!\\left(200,\\ \\frac{18^2}{25}\\right), \\quad \\frac{\\sigma}{\\sqrt{n}} = \\frac{18}{5} = 3.6", explanation: "With \\( \\sigma = 18 \\) and \\( n = 25 \\), the standard error of \\( \\bar{X} \\) is \\( 3.6 \\)." },
        { stepNumber: 3, description: "Standardise the observed sample mean.", workingLatex: "z = \\frac{207 - 200}{3.6} = 1.9444", explanation: "The test statistic is \\( z = 1.9444 \\) to 4 d.p." },
        { stepNumber: 4, description: "State the two-tailed critical value at the \\( 5\\% \\) level.", workingLatex: "z = \\pm 1.96 \\quad (2.5\\% \\text{ in each tail})", explanation: "For a two-tailed test at \\( 5\\% \\), reject \\( H_0 \\) only if \\( |z| > 1.96 \\)." },
        { stepNumber: 5, description: "Compare the statistic with the critical value.", workingLatex: "1.9444 < 1.96 \\implies \\bar{x} \\text{ is not in the critical region}", explanation: "Although close, \\( z = 1.9444 \\) does not reach \\( 1.96 \\); equivalently the two-tailed \\( p \\)-value is \\( 2(1-\\Phi(1.9444)) = 0.0518 > 0.05 \\)." },
        { stepNumber: 6, description: "Conclude in context.", workingLatex: "\\text{do not reject } H_0", explanation: "There is insufficient evidence at the \\( 5\\% \\) level to conclude that the mean of the process has changed from \\( 200 \\). Despite being a borderline result, the data do not quite reach significance, so \\( H_0 \\) is retained." }
      ],
      finalAnswer: "\\( z = 1.9444 < 1.96 \\ (p = 0.0518 > 0.05),\\ \\text{so do not reject } H_0 \\text{ — insufficient evidence that the mean has changed.} \\)",
    },
  },
  {
    id: "y2hm-061",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 061",
    difficulty: "Challenge",
    questionText: "The mass, in grams, of a component is modelled by a Normal distribution with mean \\( \\mu \\) and known standard deviation \\( 4\\,\\mathrm{g} \\). A target value is \\( \\mu = 50\\,\\mathrm{g} \\), and an engineer wishes to test whether the mean mass has departed from target in either direction. A random sample of \\( 16 \\) components has mean mass \\( \\bar{x} = 52.3\\,\\mathrm{g} \\). Test, at the \\( 5\\% \\) level of significance, whether the mean mass differs from \\( 50\\,\\mathrm{g} \\), and comment on your conclusion in context.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "test then comment", "context", "known variance"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the hypotheses for the two-tailed test.", workingLatex: "H_0:\\ \\mu = 50 \\qquad H_1:\\ \\mu \\neq 50", explanation: "The engineer is testing for a departure in either direction, so the alternative is two-sided." },
        { stepNumber: 2, description: "State the sampling distribution of the sample mean under \\( H_0 \\).", workingLatex: "\\bar{X} \\sim N\\!\\left(50,\\ \\frac{4^2}{16}\\right)", explanation: "Because the population is Normal with known \\( \\sigma = 4 \\), the sample mean of \\( n = 16 \\) values is exactly Normal with mean \\( \\mu_0 = 50 \\) and variance \\( \\sigma^2/n \\)." },
        { stepNumber: 3, description: "Compute the standard error.", workingLatex: "\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{4}{\\sqrt{16}} = 1", explanation: "The standard error of the mean is \\( \\sigma/\\sqrt{n} = 4/4 = 1\\,\\mathrm{g} \\)." },
        { stepNumber: 4, description: "Standardise the observed sample mean to form the test statistic.", workingLatex: "z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}} = \\frac{52.3 - 50}{1} = 2.3", explanation: "Under \\( H_0 \\) the statistic \\( Z = (\\bar{X} - \\mu_0)/(\\sigma/\\sqrt{n}) \\sim N(0,1) \\); the observed value is \\( z = 2.3 \\)." },
        { stepNumber: 5, description: "Find the two-tailed critical value at the \\( 5\\% \\) level and compare.", workingLatex: "z_{0.975} = 1.96; \\quad 2.3 > 1.96", explanation: "For a two-tailed test the \\( 5\\% \\) is split into \\( 2.5\\% \\) per tail, giving critical values \\( \\pm 1.96 \\). Since \\( 2.3 > 1.96 \\), the statistic lies in the critical region." },
        { stepNumber: 6, description: "Conclude and comment in context.", workingLatex: "\\text{reject } H_0; \\quad \\text{two-tailed } p\\text{-value} = 2\\bigl(1 - \\Phi(2.3)\\bigr) = 0.0214 < 0.05", explanation: "Reject \\( H_0 \\). There is evidence at the \\( 5\\% \\) level that the mean mass differs from \\( 50\\,\\mathrm{g} \\). In context, since \\( \\bar{x} = 52.3 > 50 \\), the components appear to be heavier than the target on average, so the process should be checked and re-set." }
      ],
      finalAnswer: "\\( z = 2.3 > 1.96,\\ \\text{so reject } H_0 \\text{ — there is evidence the mean mass differs from } 50\\,\\mathrm{g}, \\text{ and it appears the components are too heavy.} \\)",
      canonicalAnswer: "Reject H0; z=2.3>1.96; mean mass differs from 50 g (too heavy).",
    },
  },
  {
    id: "y2hm-062",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 062",
    difficulty: "Challenge",
    questionText: "Bags of flour are filled by a machine. The mass per bag is Normally distributed with known standard deviation \\( 12\\,\\mathrm{g} \\) and nominal mean \\( 500\\,\\mathrm{g} \\). A supervisor suspects the machine is overfilling and takes a random sample of \\( 25 \\) bags, with mean mass \\( \\bar{x} = 505.2\\,\\mathrm{g} \\). Test the supervisor's suspicion at the \\( 5\\% \\) level of significance, and then state, with justification, whether the conclusion would change if the test were instead carried out at the \\( 1\\% \\) level.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "5% vs 1%", "compare conclusions", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the one-tailed hypotheses.", workingLatex: "H_0:\\ \\mu = 500 \\qquad H_1:\\ \\mu > 500", explanation: "Overfilling means a larger mean, so the alternative is the upper one-tailed \\( \\mu > 500 \\)." },
        { stepNumber: 2, description: "State the distribution of \\( \\bar{X} \\) under \\( H_0 \\) and compute the standard error.", workingLatex: "\\bar{X} \\sim N\\!\\left(500,\\ \\frac{12^2}{25}\\right), \\quad \\sigma_{\\bar{X}} = \\frac{12}{\\sqrt{25}} = 2.4", explanation: "The population is Normal with known \\( \\sigma = 12 \\), so \\( \\bar{X} \\) is Normal with standard error \\( 12/5 = 2.4\\,\\mathrm{g} \\)." },
        { stepNumber: 3, description: "Compute the test statistic.", workingLatex: "z = \\frac{505.2 - 500}{2.4} = \\frac{5.2}{2.4} = 2.1667", explanation: "Standardising the observed mean gives \\( z = 2.1667 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Test at the \\( 5\\% \\) level.", workingLatex: "z_{0.95} = 1.6449; \\quad 2.1667 > 1.6449 \\implies \\text{reject } H_0", explanation: "The upper \\( 5\\% \\) critical value is \\( 1.6449 \\). Since \\( 2.1667 > 1.6449 \\), reject \\( H_0 \\): at the \\( 5\\% \\) level there is evidence the machine is overfilling." },
        { stepNumber: 5, description: "Test at the \\( 1\\% \\) level.", workingLatex: "z_{0.99} = 2.3263; \\quad 2.1667 < 2.3263 \\implies \\text{do not reject } H_0", explanation: "The upper \\( 1\\% \\) critical value is \\( 2.3263 \\). Since \\( 2.1667 < 2.3263 \\), do not reject \\( H_0 \\): at the \\( 1\\% \\) level there is insufficient evidence of overfilling." },
        { stepNumber: 6, description: "Compare and justify the change using the \\( p \\)-value.", workingLatex: "p\\text{-value} = 1 - \\Phi(2.1667) = 0.0151; \\quad 0.01 < 0.0151 < 0.05", explanation: "The conclusion changes. The \\( p \\)-value of \\( 0.0151 \\) lies between \\( 0.01 \\) and \\( 0.05 \\), so the result is significant at \\( 5\\% \\) but not at \\( 1\\% \\). A smaller significance level demands stronger evidence, so the same data can lead to opposite decisions; the conclusion is borderline and depends on the chosen level." }
      ],
      finalAnswer: "\\( z = 2.1667;\\ \\text{reject } H_0 \\text{ at } 5\\% \\ (1.6449) \\text{ but not at } 1\\% \\ (2.3263),\\ \\text{since } p = 0.0151 \\text{ lies between the two levels.} \\)",
      canonicalAnswer: "z=2.1667; reject at 5% (crit 1.6449), do not reject at 1% (crit 2.3263); p=0.0151.",
    },
  },
  {
    id: "y2hm-063",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 063",
    difficulty: "Challenge",
    questionText: "The lifetime, in hours, of a type of battery is Normally distributed with known standard deviation \\( 20\\,\\mathrm{h} \\). The manufacturer states a mean lifetime of \\( 1000\\,\\mathrm{h} \\). A consumer group suspects the true mean is less than this and tests a random sample of \\( 10 \\) batteries, obtaining a mean lifetime of \\( \\bar{x} = 988\\,\\mathrm{h} \\). Test the group's suspicion at the \\( 5\\% \\) level of significance, and comment on what your conclusion means for the manufacturer's claim.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "one-tailed", "test then comment", "context", "known variance"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the one-tailed hypotheses.", workingLatex: "H_0:\\ \\mu = 1000 \\qquad H_1:\\ \\mu < 1000", explanation: "The group suspects the mean lifetime is lower, so the alternative is the lower one-tailed \\( \\mu < 1000 \\)." },
        { stepNumber: 2, description: "State the distribution of \\( \\bar{X} \\) under \\( H_0 \\).", workingLatex: "\\bar{X} \\sim N\\!\\left(1000,\\ \\frac{20^2}{10}\\right)", explanation: "The population is Normal with known \\( \\sigma = 20 \\), so the sample mean of \\( 10 \\) values is Normal with mean \\( 1000 \\) and variance \\( 400/10 \\)." },
        { stepNumber: 3, description: "Compute the standard error.", workingLatex: "\\sigma_{\\bar{X}} = \\frac{20}{\\sqrt{10}} = 6.3246", explanation: "The standard error is \\( 20/\\sqrt{10} = 6.3246\\,\\mathrm{h} \\) (4 d.p.)." },
        { stepNumber: 4, description: "Compute the test statistic.", workingLatex: "z = \\frac{988 - 1000}{6.3246} = \\frac{-12}{6.3246} = -1.8974", explanation: "Standardising the observed mean gives \\( z = -1.8974 \\) (4 d.p.)." },
        { stepNumber: 5, description: "Compare with the lower-tail critical value at \\( 5\\% \\).", workingLatex: "-z_{0.95} = -1.6449; \\quad -1.8974 < -1.6449 \\implies \\text{reject } H_0", explanation: "The lower \\( 5\\% \\) critical value is \\( -1.6449 \\). Since \\( -1.8974 < -1.6449 \\), the statistic lies in the critical region: reject \\( H_0 \\). Equivalently \\( p = \\Phi(-1.8974) = 0.0289 < 0.05 \\)." },
        { stepNumber: 6, description: "Comment in context.", workingLatex: "\\text{reject } H_0; \\quad p = 0.0289 < 0.05", explanation: "There is evidence at the \\( 5\\% \\) level that the mean battery lifetime is less than \\( 1000\\,\\mathrm{h} \\). In context, the sample provides evidence against the manufacturer's stated mean: the batteries appear to last, on average, less than claimed, so the claim is not supported by these data." }
      ],
      finalAnswer: "\\( z = -1.8974 < -1.6449,\\ \\text{so reject } H_0 \\text{ — there is evidence the mean lifetime is below } 1000\\,\\mathrm{h}, \\text{ contradicting the claim.} \\)",
      canonicalAnswer: "Reject H0; z=-1.8974<-1.6449 (p=0.0289); mean lifetime below 1000 h, claim not supported.",
    },
  },
  {
    id: "y2hm-064",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 064",
    difficulty: "Challenge",
    questionText: "A test of \\( H_0:\\ \\mu = \\mu_0 \\) against \\( H_1:\\ \\mu \\neq \\mu_0 \\) for a Normal population with known variance is carried out at the \\( 5\\% \\) level of significance. A student claims: \"If we reject \\( H_0 \\), there is only a \\( 5\\% \\) chance that we have made a mistake.\" Explain carefully what a Type I error is in this test, state its probability, and explain why the student's statement is not a correct interpretation.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "Type I error", "significance level", "interpretation", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define a Type I error in this context.", workingLatex: "\\text{Type I error: reject } H_0 \\text{ when } H_0 \\text{ is in fact true}", explanation: "A Type I error occurs when the test leads us to reject the null hypothesis even though it is actually true — here, concluding the mean has changed from \\( \\mu_0 \\) when in reality it has not." },
        { stepNumber: 2, description: "State the probability of a Type I error.", workingLatex: "P(\\text{Type I error}) = P(\\text{reject } H_0 \\mid H_0 \\text{ true}) = \\alpha = 0.05", explanation: "By construction, the critical region is chosen so that the probability of landing in it when \\( H_0 \\) is true equals the significance level. For a continuous Normal test statistic this probability is exactly \\( \\alpha = 0.05 \\)." },
        { stepNumber: 3, description: "Identify what the \\( 5\\% \\) figure is conditional on.", workingLatex: "\\alpha = P(\\text{reject} \\mid H_0\\text{ true}) \\ \\neq\\ P(H_0\\text{ true} \\mid \\text{reject})", explanation: "The significance level is the probability of rejecting given that \\( H_0 \\) is true. It is a conditional probability that assumes \\( H_0 \\) holds; it is not the probability that \\( H_0 \\) is true given that we rejected it." },
        { stepNumber: 4, description: "Explain why the student's statement is wrong.", workingLatex: "P(\\text{wrongly rejected} \\mid \\text{we rejected}) \\neq 0.05", explanation: "The student treats \\( 5\\% \\) as the chance of being wrong after rejecting, which would be \\( P(H_0\\text{ true} \\mid \\text{reject}) \\). This is a different (posterior) quantity that depends on how often \\( H_0 \\) is true, and it cannot be read off from \\( \\alpha \\) alone. The \\( 5\\% \\) describes the long-run error rate of the procedure when \\( H_0 \\) is true, not the reliability of a single rejection." },
        { stepNumber: 5, description: "State the correct interpretation.", workingLatex: "\\alpha = 0.05 = \\text{long-run rate of rejecting a true } H_0", explanation: "Correctly stated: if \\( H_0 \\) were true and the test were repeated many times, we would reject \\( H_0 \\) on about \\( 5\\% \\) of occasions. This is the probability of a Type I error, and it equals the significance level." }
      ],
      finalAnswer: "\\( P(\\text{Type I error}) = \\alpha = 0.05 = P(\\text{reject } H_0 \\mid H_0 \\text{ true}),\\ \\text{not } P(H_0 \\text{ true} \\mid \\text{reject}); \\text{ the student's claim confuses the two.} \\)",
    },
  },
  {
    id: "y2hm-065",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 065",
    difficulty: "Challenge",
    questionText: "A quantity is Normally distributed with known standard deviation \\( \\sigma = 15 \\). Two researchers test the same hypotheses about the mean: one uses a random sample of size \\( 25 \\), the other a random sample of size \\( 100 \\). Find the standard error of the sample mean in each case, state by what factor the standard error changes, and explain the effect this has on the test for a fixed true value of the mean.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "sample size", "standard error", "interpretation", "known variance"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the standard error formula.", workingLatex: "\\sigma_{\\bar{X}} = \\frac{\\sigma}{\\sqrt{n}}", explanation: "The standard error of the sample mean depends on the known population standard deviation and the sample size as \\( \\sigma/\\sqrt{n} \\)." },
        { stepNumber: 2, description: "Compute the standard error for \\( n = 25 \\).", workingLatex: "\\sigma_{\\bar{X}} = \\frac{15}{\\sqrt{25}} = \\frac{15}{5} = 3", explanation: "With \\( n = 25 \\) the standard error is \\( 15/5 = 3 \\)." },
        { stepNumber: 3, description: "Compute the standard error for \\( n = 100 \\).", workingLatex: "\\sigma_{\\bar{X}} = \\frac{15}{\\sqrt{100}} = \\frac{15}{10} = 1.5", explanation: "With \\( n = 100 \\) the standard error is \\( 15/10 = 1.5 \\)." },
        { stepNumber: 4, description: "State the factor by which the standard error changes.", workingLatex: "\\frac{3}{1.5} = 2; \\quad \\sqrt{\\frac{100}{25}} = 2", explanation: "Quadrupling the sample size from \\( 25 \\) to \\( 100 \\) halves the standard error (a factor of \\( 1/2 \\)), because the standard error scales with \\( 1/\\sqrt{n} \\): multiplying \\( n \\) by \\( 4 \\) divides the standard error by \\( 2 \\)." },
        { stepNumber: 5, description: "Explain the effect on the test.", workingLatex: "z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}; \\quad \\sigma/\\sqrt{n}\\downarrow \\implies |z|\\uparrow", explanation: "A smaller standard error makes the sampling distribution of \\( \\bar{X} \\) more tightly concentrated about \\( \\mu_0 \\) under \\( H_0 \\). For a fixed true difference \\( \\bar{x} - \\mu_0 \\), the test statistic \\( z \\) is larger in magnitude, so the larger sample is more likely to detect a given departure from \\( \\mu_0 \\): the test is more sensitive (more powerful)." }
      ],
      finalAnswer: "\\( \\sigma_{\\bar{X}} = 3 \\text{ for } n = 25 \\text{ and } 1.5 \\text{ for } n = 100; \\text{ it halves (factor } \\tfrac{1}{2}), \\text{ so the larger sample gives a more sensitive test.} \\)",
    },
  },
  {
    id: "y2hm-066",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 066",
    difficulty: "Challenge",
    questionText: "A one-tailed test of \\( H_0:\\ \\mu = 20 \\) against \\( H_1:\\ \\mu > 20 \\) is carried out at the \\( 5\\% \\) level for a Normal population with known standard deviation \\( \\sigma = 5 \\), using the sample mean \\( \\bar{X} \\) as the test statistic. For a random sample of size \\( 25 \\), find the critical value of \\( \\bar{X} \\) and hence the probability that the test rejects \\( H_0 \\) when the true mean is actually \\( \\mu = 22 \\). State what this probability represents, and describe how it would change if the sample size were increased to \\( 100 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "sample size", "power", "critical value", "interpretation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the standard error for \\( n = 25 \\) and the critical value of \\( \\bar{X} \\).", workingLatex: "\\sigma_{\\bar{X}} = \\frac{5}{\\sqrt{25}} = 1; \\quad \\bar{x}_{\\text{crit}} = 20 + 1.6449(1) = 21.6449", explanation: "Under \\( H_0 \\), \\( \\bar{X} \\sim N(20, 1^2) \\). The upper \\( 5\\% \\) critical value is \\( \\mu_0 + z_{0.95}\\,\\sigma_{\\bar{X}} = 20 + 1.6449 = 21.6449 \\); we reject \\( H_0 \\) if \\( \\bar{x} \\ge 21.6449 \\)." },
        { stepNumber: 2, description: "State the distribution of \\( \\bar{X} \\) when the true mean is \\( 22 \\).", workingLatex: "\\bar{X} \\sim N(22, 1^2) \\text{ when } \\mu = 22", explanation: "If the true mean is \\( 22 \\), the sample mean is Normal with mean \\( 22 \\) and the same standard error \\( 1 \\)." },
        { stepNumber: 3, description: "Compute the probability of rejecting \\( H_0 \\) (the power) when \\( \\mu = 22 \\).", workingLatex: "P(\\bar{X} \\ge 21.6449) = P\\!\\left(Z \\ge \\frac{21.6449 - 22}{1}\\right) = P(Z \\ge -0.3551) = 0.6388", explanation: "Standardising under the true mean \\( 22 \\): \\( P(Z \\ge -0.3551) = 1 - \\Phi(-0.3551) = 0.6388 \\) (4 d.p.)." },
        { stepNumber: 4, description: "State what the probability represents.", workingLatex: "\\text{power} = P(\\text{reject } H_0 \\mid \\mu = 22) = 0.6388", explanation: "This is the power of the test at \\( \\mu = 22 \\): the probability that the test correctly rejects \\( H_0 \\) when the true mean really is \\( 22 \\). Equivalently, the probability of a Type II error here is \\( 1 - 0.6388 = 0.3612 \\)." },
        { stepNumber: 5, description: "Recompute the critical value for \\( n = 100 \\).", workingLatex: "\\sigma_{\\bar{X}} = \\frac{5}{\\sqrt{100}} = 0.5; \\quad \\bar{x}_{\\text{crit}} = 20 + 1.6449(0.5) = 20.8224", explanation: "With \\( n = 100 \\) the standard error halves to \\( 0.5 \\), so the critical value moves closer to \\( 20 \\), namely \\( 20.8224 \\)." },
        { stepNumber: 6, description: "Recompute the power for \\( n = 100 \\) and describe the change.", workingLatex: "P(\\bar{X} \\ge 20.8224 \\mid \\mu = 22) = P\\!\\left(Z \\ge \\frac{20.8224 - 22}{0.5}\\right) = P(Z \\ge -2.3551) = 0.9907", explanation: "With \\( n = 100 \\) the power rises to \\( 0.9907 \\). Increasing the sample size shrinks the standard error, so both sampling distributions are narrower; the test detects the true departure \\( \\mu = 22 \\) far more reliably. Larger samples give greater power (and smaller Type II error) for the same significance level." }
      ],
      finalAnswer: "\\( \\bar{x}_{\\text{crit}} = 21.6449; \\ \\text{power} = P(\\bar{X} \\ge 21.6449 \\mid \\mu = 22) = 0.6388, \\text{ rising to } 0.9907 \\text{ when } n = 100. \\)",
    },
  },
  {
    id: "y2hm-067",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 067",
    difficulty: "Challenge",
    questionText: "After testing \\( H_0:\\ \\mu = 80 \\) against \\( H_1:\\ \\mu \\neq 80 \\) at the \\( 5\\% \\) level for a Normal population with known variance, a researcher obtains a test statistic that does not fall in the critical region and writes: \"We accept \\( H_0 \\), so we have proved that \\( \\mu = 80 \\).\" Explain why this conclusion is incorrect, and state how the conclusion should be expressed.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "do not reject", "accept", "interpretation", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State what a non-significant result actually tells us.", workingLatex: "z \\notin \\text{critical region} \\implies \\text{insufficient evidence against } H_0", explanation: "A statistic outside the critical region means the data are reasonably consistent with \\( H_0 \\); there is not enough evidence to reject it. This is a statement about the strength of evidence, not a proof." },
        { stepNumber: 2, description: "Explain why we cannot \"accept\" or \"prove\" \\( H_0 \\).", workingLatex: "\\text{not reject } H_0 \\ \\neq\\ H_0 \\text{ is true}", explanation: "Failing to reject \\( H_0 \\) does not establish that \\( \\mu = 80 \\) exactly. Many values of \\( \\mu \\) close to \\( 80 \\) would also fail to be rejected by the same data, so the test cannot single out \\( 80 \\) as the true value, let alone prove it." },
        { stepNumber: 3, description: "Link the issue to Type II error and power.", workingLatex: "P(\\text{do not reject} \\mid H_1 \\text{ true}) = \\beta > 0", explanation: "A non-significant result may occur because \\( H_0 \\) is true, but it may also occur because the sample was too small to detect a real difference (a Type II error). Since \\( \\beta \\) is generally not small, absence of evidence is not evidence of absence." },
        { stepNumber: 4, description: "Give the correct wording of the conclusion.", workingLatex: "\\text{do not reject } H_0 \\text{ at the } 5\\% \\text{ level}", explanation: "The correct conclusion is: \"There is insufficient evidence at the \\( 5\\% \\) level to reject \\( H_0 \\); the data are consistent with \\( \\mu = 80 \\).\" We never \"accept\" or \"prove\" \\( H_0 \\); we only fail to find evidence against it." },
        { stepNumber: 5, description: "Summarise the distinction.", workingLatex: "\\text{\"do not reject\"} \\neq \\text{\"accept\"}", explanation: "\"Do not reject\" is a cautious statement about lack of evidence; \"accept\" or \"prove\" overstates the conclusion by claiming \\( H_0 \\) is true, which the test cannot justify." }
      ],
      finalAnswer: "\\( \\text{The test only shows insufficient evidence to reject } H_0; \\text{ it cannot prove } \\mu = 80, \\text{ so write \"do not reject } H_0 \\text{\", not \"accept } H_0 \\text{\".} \\)",
    },
  },
  {
    id: "y2hm-068",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 068",
    difficulty: "Challenge",
    questionText: "A hypothesis test for the mean uses the statistic \\( Z = \\dfrac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}} \\), compared with critical values from the standard Normal distribution. Explain the role played by the assumptions that the population is Normal and that the standard deviation \\( \\sigma \\) is known, and discuss carefully what changes if \\( \\sigma \\) is not known but is instead estimated from the sample.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "assumptions", "known sigma", "estimated sigma", "interpretation", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Explain why the Normality assumption is needed.", workingLatex: "X \\sim N(\\mu, \\sigma^2) \\implies \\bar{X} \\sim N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\right) \\text{ exactly}", explanation: "If the population is Normal, the sample mean is exactly Normally distributed for every sample size \\( n \\). This guarantees that the standardised statistic follows the standard Normal distribution, so the critical values and \\( p \\)-values are valid even for small \\( n \\)." },
        { stepNumber: 2, description: "Explain the role of the known \\( \\sigma \\).", workingLatex: "Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}} \\sim N(0,1)", explanation: "When \\( \\sigma \\) is known, the only random quantity in the standardised statistic is \\( \\bar{X} \\). The denominator \\( \\sigma/\\sqrt{n} \\) is a fixed constant, so under \\( H_0 \\) the statistic is exactly \\( N(0,1) \\) and the Normal critical values apply." },
        { stepNumber: 3, description: "Describe what goes wrong if \\( \\sigma \\) is replaced by a sample estimate.", workingLatex: "S^2 = \\frac{1}{n-1}\\sum (X_i - \\bar{X})^2; \\quad \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}} \\not\\sim N(0,1)", explanation: "If \\( \\sigma \\) is unknown and estimated by the sample standard deviation \\( S \\), the denominator is now itself random and varies from sample to sample. This extra variability means the standardised statistic no longer follows the standard Normal distribution, especially for small \\( n \\)." },
        { stepNumber: 4, description: "State the correct reference distribution when \\( \\sigma \\) is estimated.", workingLatex: "T = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}} \\sim t_{\\,n-1}", explanation: "With an estimated standard deviation the appropriate statistic follows a \\( t \\)-distribution with \\( n - 1 \\) degrees of freedom. The \\( t \\)-distribution has heavier tails than \\( N(0,1) \\), so its critical values are larger in magnitude, making the test more conservative for small samples." },
        { stepNumber: 5, description: "Note the large-sample behaviour.", workingLatex: "t_{\\,n-1} \\to N(0,1) \\text{ as } n \\to \\infty", explanation: "For large \\( n \\), \\( S \\) estimates \\( \\sigma \\) accurately and the \\( t \\)-distribution is very close to \\( N(0,1) \\), so using the Normal critical values is then an acceptable approximation. The distinction matters most for small samples." },
        { stepNumber: 6, description: "Summarise the roles of the two assumptions.", workingLatex: "\\text{Normal population} + \\text{known } \\sigma \\implies Z\\text{-test exact}", explanation: "In summary, the Normality assumption makes \\( \\bar{X} \\) exactly Normal so the test is valid for any \\( n \\); the known-\\( \\sigma \\) assumption fixes the standard error so the statistic is exactly \\( N(0,1) \\). If \\( \\sigma \\) must be estimated, the correct procedure replaces the Normal distribution with a \\( t_{n-1} \\) distribution (which only matters appreciably for small samples)." }
      ],
      finalAnswer: "\\( \\text{Normality makes } \\bar{X} \\text{ exactly Normal and known } \\sigma \\text{ fixes the standard error so } Z \\sim N(0,1); \\text{ if } \\sigma \\text{ is estimated by } S, \\text{ use } T \\sim t_{\\,n-1} \\text{ instead.} \\)",
    },
  },
  {
    id: "y2hm-069",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 069",
    difficulty: "Challenge",
    questionText: "In a one-tailed test of \\( H_0:\\ \\mu = 30 \\) against \\( H_1:\\ \\mu > 30 \\) at the \\( 5\\% \\) level for a Normal population with known variance, a student obtains a \\( p \\)-value of \\( 0.0008 \\) and writes: \"Since the \\( p \\)-value is so small, the mean must be much greater than \\( 30 \\), and this proves the effect is very important.\" Critically evaluate this statement, explaining what the small \\( p \\)-value does and does not tell us.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "critique", "interpretation", "p-value", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State what the small \\( p \\)-value correctly indicates.", workingLatex: "p = 0.0008 < 0.05 \\implies \\text{reject } H_0", explanation: "The \\( p \\)-value is the probability, assuming \\( H_0 \\) is true, of obtaining a result at least as extreme as observed. A value of \\( 0.0008 \\) is strong evidence against \\( H_0 \\), so we reject it: there is evidence the mean exceeds \\( 30 \\)." },
        { stepNumber: 2, description: "Distinguish statistical significance from the size of the effect.", workingLatex: "\\text{small } p \\ \\neq\\ \\text{large } (\\mu - 30)", explanation: "A small \\( p \\)-value measures how strong the evidence against \\( H_0 \\) is, not how large the difference \\( \\mu - 30 \\) is. A very small but real difference can produce a tiny \\( p \\)-value if the sample is large, because the standard error is then small." },
        { stepNumber: 3, description: "Explain the role of sample size.", workingLatex: "z = \\frac{\\bar{x} - 30}{\\sigma/\\sqrt{n}}; \\quad n \\uparrow \\implies |z| \\uparrow \\implies p \\downarrow", explanation: "With a large \\( n \\) the standard error is small, so even a modest \\( \\bar{x} - 30 \\) gives a large \\( z \\) and a tiny \\( p \\)-value. Thus the smallness of \\( p \\) by itself cannot tell us that the mean is 'much greater' than \\( 30 \\)." },
        { stepNumber: 4, description: "Address the claim about importance.", workingLatex: "\\text{statistical significance} \\neq \\text{practical importance}", explanation: "Statistical significance does not establish practical or real-world importance. Whether an effect matters depends on context (the size of \\( \\mu - 30 \\) relative to what is meaningful), not on the \\( p \\)-value. The student wrongly equates a small \\( p \\)-value with a large and important effect." },
        { stepNumber: 5, description: "Give a corrected interpretation.", workingLatex: "\\text{reject } H_0; \\text{ estimate the size of } \\mu - 30 \\text{ separately}", explanation: "Correctly: the small \\( p \\)-value gives strong evidence that \\( \\mu > 30 \\), but says nothing about by how much. To judge the magnitude and importance, one should report the estimated difference (e.g. \\( \\bar{x} - 30 \\)) or a confidence interval, and interpret it in context." }
      ],
      finalAnswer: "\\( p = 0.0008 \\text{ gives strong evidence that } \\mu > 30 \\text{ but says nothing about the size or importance of the difference; significance } \\neq \\text{ a large or important effect.} \\)",
    },
  },
  {
    id: "y2hm-070",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 070",
    difficulty: "Challenge",
    questionText: "The diameter, in mm, of a machined rod is Normally distributed with known standard deviation \\( 8\\,\\mathrm{mm} \\) and target mean \\( 100\\,\\mathrm{mm} \\). A quality controller will take a random sample of \\( 16 \\) rods and test \\( H_0:\\ \\mu = 100 \\) against \\( H_1:\\ \\mu \\neq 100 \\) at the \\( 5\\% \\) level, using the sample mean \\( \\bar{X} \\) as the test statistic. Find the critical region for \\( \\bar{X} \\), and hence comment on what the controller should conclude if the sample mean turns out to be \\( 104.5\\,\\mathrm{mm} \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "two-tailed", "critical region", "test then comment", "context"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the distribution of \\( \\bar{X} \\) under \\( H_0 \\) and the standard error.", workingLatex: "\\bar{X} \\sim N\\!\\left(100, \\frac{8^2}{16}\\right), \\quad \\sigma_{\\bar{X}} = \\frac{8}{\\sqrt{16}} = 2", explanation: "The population is Normal with known \\( \\sigma = 8 \\), so under \\( H_0 \\) the sample mean is Normal with mean \\( 100 \\) and standard error \\( 8/4 = 2\\,\\mathrm{mm} \\)." },
        { stepNumber: 2, description: "Identify the two-tailed critical \\( z \\)-values.", workingLatex: "\\pm z_{0.975} = \\pm 1.96", explanation: "For a two-tailed test at \\( 5\\% \\), the \\( 2.5\\% \\) in each tail gives critical values \\( \\pm 1.96 \\)." },
        { stepNumber: 3, description: "Convert the lower critical \\( z \\)-value to a critical value of \\( \\bar{X} \\).", workingLatex: "100 - 1.96 \\times 2 = 100 - 3.92 = 96.08", explanation: "The lower critical value of \\( \\bar{X} \\) is \\( \\mu_0 - 1.96\\,\\sigma_{\\bar{X}} = 96.08 \\) (4 d.p.)." },
        { stepNumber: 4, description: "Convert the upper critical \\( z \\)-value to a critical value of \\( \\bar{X} \\).", workingLatex: "100 + 1.96 \\times 2 = 100 + 3.92 = 103.92", explanation: "The upper critical value of \\( \\bar{X} \\) is \\( \\mu_0 + 1.96\\,\\sigma_{\\bar{X}} = 103.92 \\) (4 d.p.)." },
        { stepNumber: 5, description: "State the critical region for \\( \\bar{X} \\).", workingLatex: "\\text{CR: } \\bar{X} < 96.08 \\ \\text{or} \\ \\bar{X} > 103.92", explanation: "Reject \\( H_0 \\) if the sample mean is below \\( 96.08\\,\\mathrm{mm} \\) or above \\( 103.92\\,\\mathrm{mm} \\)." },
        { stepNumber: 6, description: "Compare \\( \\bar{x} = 104.5 \\) with the critical region and comment in context.", workingLatex: "104.5 > 103.92 \\implies \\text{reject } H_0", explanation: "Since \\( 104.5 > 103.92 \\), the sample mean lies in the upper critical region: reject \\( H_0 \\). There is evidence at the \\( 5\\% \\) level that the mean diameter differs from \\( 100\\,\\mathrm{mm} \\); as \\( \\bar{x} > 100 \\), the rods appear to be too wide on average, so the controller should stop and adjust the machine." }
      ],
      finalAnswer: "\\( \\text{CR: } \\bar{X} < 96.08 \\text{ or } \\bar{X} > 103.92; \\ \\bar{x} = 104.5 \\text{ is in the CR, so reject } H_0 \\text{ — the rods appear too wide.} \\)",
      canonicalAnswer: "CR: Xbar<96.08 or Xbar>103.92; 104.5 in CR, reject H0, rods too wide.",
    },
  },
  {
    id: "y2hm-071",
    topicRef: "y2hm",
    topicTitle: "Hypothesis Test — Normal Mean 071",
    difficulty: "Challenge",
    questionText: "A student carries out a test of \\( H_0:\\ \\mu = 60 \\) against \\( H_1:\\ \\mu \\neq 60 \\) using a small random sample of size \\( 8 \\) from a Normal population. The true population standard deviation is unknown, so the student estimates it from the sample, then computes a \\( Z \\)-statistic and compares it with \\( \\pm 1.96 \\) as if \\( \\sigma \\) were known. Explain why this procedure is not strictly valid, state what effect it has on the reliability of the conclusion, and describe the correct approach.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["hypothesis test", "normal mean", "estimated sigma", "assumptions", "interpretation", "critique"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the assumption the student has breached.", workingLatex: "\\sigma \\text{ unknown, estimated by } S; \\quad Z = \\frac{\\bar{X}-60}{S/\\sqrt{n}}", explanation: "The standard Normal \\( Z \\)-test assumes \\( \\sigma \\) is known. Here \\( \\sigma \\) is unknown and replaced by the sample standard deviation \\( S \\), so the denominator is estimated, not a fixed constant." },
        { stepNumber: 2, description: "Explain why this invalidates the \\( N(0,1) \\) reference.", workingLatex: "\\frac{\\bar{X}-60}{S/\\sqrt{n}} \\not\\sim N(0,1)", explanation: "Because \\( S \\) varies from sample to sample, the statistic has extra variability beyond that of \\( \\bar{X} \\) alone, so it does not follow the standard Normal distribution. With \\( n = 8 \\) this discrepancy is substantial." },
        { stepNumber: 3, description: "State the effect on the reliability of the conclusion.", workingLatex: "t_{7} \\text{ has heavier tails than } N(0,1) \\implies \\text{true tail prob} > 5\\%", explanation: "The correct distribution \\( t_7 \\) has heavier tails, so the true probability of \\( |\\text{statistic}| > 1.96 \\) exceeds \\( 5\\% \\). Using \\( \\pm 1.96 \\) therefore rejects \\( H_0 \\) too readily: the actual Type I error rate is higher than the nominal \\( 5\\% \\), making the conclusion unreliable." },
        { stepNumber: 4, description: "Describe the correct critical values.", workingLatex: "\\pm t_{7,\\,0.975} = \\pm 2.365 \\ (> 1.96)", explanation: "With \\( \\sigma \\) estimated and \\( n - 1 = 7 \\) degrees of freedom, the correct two-tailed \\( 5\\% \\) critical values come from the \\( t_7 \\) distribution, namely about \\( \\pm 2.365 \\), which are wider than \\( \\pm 1.96 \\)." },
        { stepNumber: 5, description: "State the correct approach.", workingLatex: "T = \\frac{\\bar{X}-60}{S/\\sqrt{n}} \\sim t_{7}; \\ \\text{compare with } \\pm 2.365", explanation: "Correctly, the student should treat the statistic as a \\( t \\)-statistic with \\( 7 \\) degrees of freedom and compare it with the \\( t_7 \\) critical values \\( \\pm 2.365 \\) (rather than \\( \\pm 1.96 \\)). For such a small sample the Normal approximation is not adequate and the \\( t \\)-test is required." }
      ],
      finalAnswer: "\\( \\text{Estimating } \\sigma \\text{ makes the statistic } t_{7}, \\text{ not } N(0,1); \\text{ using } \\pm 1.96 \\text{ inflates the Type I error, so compare with } t_7 \\text{ critical values } (\\approx \\pm 2.365) \\text{ instead.} \\)",
    },
  },
];
