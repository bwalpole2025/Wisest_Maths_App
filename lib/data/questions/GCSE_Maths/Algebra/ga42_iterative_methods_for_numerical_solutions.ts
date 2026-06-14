/**
 * Topic: Iterative methods for numerical solutions
 * Ref: ga42  (DfE A20)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: numerical (iterative) solution of equations. Key ideas used
 *   throughout:
 *   (1) A continuous function f changes sign across a root: if f(a) and f(b)
 *       have OPPOSITE signs then f(x) = 0 somewhere between a and b, so a root
 *       lies in that interval.
 *   (2) An iteration formula x_{n+1} = g(x_n) is applied repeatedly from a
 *       starting value x_0 to generate x_1, x_2, x_3, ...; if the iterates
 *       settle (converge) they approach a root of the original equation.
 *   (3) Each iterate may be rounded to a stated number of decimal places.
 *   (4) A root quoted to a required accuracy is JUSTIFIED by a sign change of
 *       f across the rounding interval (the two values that round to it):
 *       e.g. to confirm a root is 1.3 to 1 d.p. show f(1.25) and f(1.35) have
 *       opposite signs, so the root lies in [1.25, 1.35] and rounds to 1.3.
 *   (5) Rearranging f(x) = 0 into the form x = g(x) suitable for iteration.
 *   Clusters:
 *     (C1) locate a root by a sign change (evaluate f at two integers);
 *     (C2) carry out a single iteration step x_0 -> x_1;
 *     (C3) run an iteration to x_3 / x_4;
 *     (C4) round iterates to a stated number of d.p.;
 *     (C5) give a root to a required accuracy and justify it via a sign change;
 *     (C6) rearrange f(x) = 0 into x = g(x) for iteration.
 *   Solutions stress: WHY a sign change implies a root (continuous function);
 *   show every iterate explicitly with its substitution; recompute g(x_n)
 *   numerically; explain how convergence is observed; and explain WHY checking
 *   the endpoints of the rounding interval justifies a rounded root.
 *   NOTE: GCSE Higher only — no calculus / Newton–Raphson.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga42-001 .. ga42-004  (4)   2 marks each, examStyle false
 *   - Standard:   ga42-005 .. ga42-018  (14)  3 marks each, examStyle true
 *   - Challenge:  ga42-019 .. ga42-030  (12)  4+ marks, examStyle true
 * Id range: ga42-001 .. ga42-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions and subscripts x_{0}, x_{n+1} in the stem; workingLatex is
 *   RAW LaTeX (no \\(...\\) or $...$ wrappers) and uses \\frac (never \\tfrac),
 *   \\cdot for multiplication, \\sqrt{...} and braced exponents/subscripts, per
 *   hard project rules. finalAnswer matches the last workingLatex step.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga42-001",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Show that the equation \\(x^{2} - 7 = 0\\) has a solution between \\(x = 2\\) and \\(x = 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["iterative methods", "sign change", "root location"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write f(x) and evaluate it at the two ends.",
          workingLatex: "f(x) = x^{2} - 7: \\quad f(2) = 2^{2} - 7 = -3, \\quad f(3) = 3^{2} - 7 = 2",
          explanation:
            "Let f(x) = x^2 - 7, so a solution of the equation is a value where f(x) = 0. Substitute the two end values: f(2) = 4 - 7 = -3 and f(3) = 9 - 7 = 2.",
        },
        {
          stepNumber: 2,
          description: "Note the sign change and conclude.",
          workingLatex: "f(2) = -3 < 0, \\quad f(3) = 2 > 0 \\;\\Rightarrow\\; \\text{root between } 2 \\text{ and } 3",
          explanation:
            "f is a continuous function (a smooth curve with no breaks), and it goes from negative at x = 2 to positive at x = 3. To get from below the x-axis to above it the curve must cross y = 0 somewhere in between, so there is a solution between x = 2 and x = 3.",
        },
      ],
      finalAnswer: "\\(f(2) = -3 < 0,\\; f(3) = 2 > 0\\), so a root lies between \\(2\\) and \\(3\\).",
      canonicalAnswer: "sign change, root between 2 and 3",
    },
  },
  {
    id: "ga42-002",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = \\sqrt{2x_{n} + 3}\\) with \\(x_{0} = 2\\) to find \\(x_{1}\\). Give your answer to 3 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["iterative methods", "single iteration step", "rounding"],
    answerMeta: { requiredDp: 3 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x_0 = 2 into the formula.",
          workingLatex: "x_{1} = \\sqrt{2x_{0} + 3} = \\sqrt{2 \\cdot 2 + 3}",
          explanation:
            "One iteration step means putting the current value x_0 into the right-hand side to get the next value x_1. Replace x_n by x_0 = 2.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the surd and round.",
          workingLatex: "x_{1} = \\sqrt{7} = 2.6457\\ldots = 2.646 \\; (3\\text{ d.p.})",
          explanation:
            "Inside the root, 2(2) + 3 = 7, so x_1 = √7 = 2.6457..., which is 2.646 to 3 decimal places.",
        },
      ],
      finalAnswer: "\\(x_{1} \\approx 2.646\\)",
      canonicalAnswer: "2.646",
    },
  },
  {
    id: "ga42-003",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = \\dfrac{8}{x_{n} + 1}\\) with \\(x_{0} = 2\\) to find \\(x_{1}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["iterative methods", "single iteration step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x_0 = 2 into the formula.",
          workingLatex: "x_{1} = \\frac{8}{x_{0} + 1} = \\frac{8}{2 + 1}",
          explanation:
            "Put the starting value x_0 = 2 into the right-hand side to produce the first iterate x_1.",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "x_{1} = \\frac{8}{3} = 2.6666\\ldots",
          explanation:
            "The denominator is 2 + 1 = 3, so x_1 = 8/3 = 2.666... (which equals 2 and two-thirds).",
        },
      ],
      finalAnswer: "\\(x_{1} = \\dfrac{8}{3}\\)",
      canonicalAnswer: "8/3",
    },
  },
  {
    id: "ga42-004",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = \\dfrac{1}{x_{n} + 2}\\) with \\(x_{0} = 0\\) to find \\(x_{1}\\) and \\(x_{2}\\). Give each answer to 2 decimal places.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["iterative methods", "running an iteration", "rounding"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find x_1 by substituting x_0 = 0.",
          workingLatex: "x_{1} = \\frac{1}{x_{0} + 2} = \\frac{1}{0 + 2} = 0.5",
          explanation:
            "Put x_0 = 0 into the right-hand side: 0 + 2 = 2, so x_1 = 1/2 = 0.50.",
        },
        {
          stepNumber: 2,
          description: "Find x_2 by substituting x_1 = 0.5.",
          workingLatex: "x_{2} = \\frac{1}{x_{1} + 2} = \\frac{1}{0.5 + 2} = \\frac{1}{2.5} = 0.4",
          explanation:
            "Feed the new value x_1 = 0.5 back into the formula: 0.5 + 2 = 2.5, so x_2 = 1/2.5 = 0.40 to 2 decimal places.",
        },
      ],
      finalAnswer: "\\(x_{1} = 0.50,\\; x_{2} = 0.40\\)",
      canonicalAnswer: "x1=0.5, x2=0.4",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga42-005",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that the equation \\(x^{3} - 2x - 5 = 0\\) has a solution between \\(x = 2\\) and \\(x = 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "sign change", "root location", "cubic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define f(x) so that a root is where f(x) = 0.",
          workingLatex: "f(x) = x^{3} - 2x - 5",
          explanation:
            "Let f(x) be the left-hand side. A solution of the equation is exactly a value of x where f(x) = 0, so we look for a place where the value of f changes sign.",
        },
        {
          stepNumber: 2,
          description: "Evaluate f at the lower end x = 2.",
          workingLatex: "f(2) = 2^{3} - 2 \\cdot 2 - 5 = 8 - 4 - 5 = -1",
          explanation:
            "Substitute x = 2: 8 - 4 - 5 = -1, which is negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate f at the upper end x = 3.",
          workingLatex: "f(3) = 3^{3} - 2 \\cdot 3 - 5 = 27 - 6 - 5 = 16",
          explanation:
            "Substitute x = 3: 27 - 6 - 5 = 16, which is positive.",
        },
        {
          stepNumber: 4,
          description: "State the sign change and the conclusion.",
          workingLatex: "f(2) = -1 < 0, \\quad f(3) = 16 > 0 \\;\\Rightarrow\\; \\text{root in } (2, 3)",
          explanation:
            "f is continuous, and it changes from negative at x = 2 to positive at x = 3. A continuous curve cannot jump across the x-axis, so it must cross y = 0 between x = 2 and x = 3; therefore the equation has a solution in that interval.",
        },
      ],
      finalAnswer: "\\(f(2) = -1 < 0,\\; f(3) = 16 > 0\\), so a root lies between \\(2\\) and \\(3\\).",
      canonicalAnswer: "sign change, root between 2 and 3",
    },
  },
  {
    id: "ga42-006",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that the equation \\(x^{3} + x - 3 = 0\\) has a solution between \\(x = 1\\) and \\(x = 2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "sign change", "root location", "cubic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define f(x).",
          workingLatex: "f(x) = x^{3} + x - 3",
          explanation:
            "Let f(x) equal the left-hand side, so a solution corresponds to f(x) = 0.",
        },
        {
          stepNumber: 2,
          description: "Evaluate at x = 1.",
          workingLatex: "f(1) = 1^{3} + 1 - 3 = 1 + 1 - 3 = -1",
          explanation:
            "Substitute x = 1: 1 + 1 - 3 = -1, which is negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate at x = 2.",
          workingLatex: "f(2) = 2^{3} + 2 - 3 = 8 + 2 - 3 = 7",
          explanation:
            "Substitute x = 2: 8 + 2 - 3 = 7, which is positive.",
        },
        {
          stepNumber: 4,
          description: "Conclude from the sign change.",
          workingLatex: "f(1) = -1 < 0, \\quad f(2) = 7 > 0 \\;\\Rightarrow\\; \\text{root in } (1, 2)",
          explanation:
            "Because f is continuous and changes sign between x = 1 and x = 2, the curve must cross the x-axis there, so the equation has a solution between 1 and 2.",
        },
      ],
      finalAnswer: "\\(f(1) = -1 < 0,\\; f(2) = 7 > 0\\), so a root lies between \\(1\\) and \\(2\\).",
      canonicalAnswer: "sign change, root between 1 and 2",
    },
  },
  {
    id: "ga42-007",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = \\sqrt[3]{2x_{n} + 5}\\) with \\(x_{0} = 2\\) to find \\(x_{1}\\). Give your answer to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "single iteration step", "cube root", "rounding"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x_0 = 2 into the right-hand side.",
          workingLatex: "x_{1} = \\sqrt[3]{2x_{0} + 5} = \\sqrt[3]{2 \\cdot 2 + 5}",
          explanation:
            "To take one iteration step, replace x_n with the current value x_0 = 2.",
        },
        {
          stepNumber: 2,
          description: "Simplify inside the cube root.",
          workingLatex: "x_{1} = \\sqrt[3]{4 + 5} = \\sqrt[3]{9}",
          explanation:
            "Work out 2(2) + 5 = 9, so x_1 is the cube root of 9.",
        },
        {
          stepNumber: 3,
          description: "Evaluate and round.",
          workingLatex: "x_{1} = \\sqrt[3]{9} = 2.08008\\ldots = 2.0801 \\; (4\\text{ d.p.})",
          explanation:
            "The cube root of 9 is 2.08008..., which is 2.0801 to 4 decimal places.",
        },
      ],
      finalAnswer: "\\(x_{1} \\approx 2.0801\\)",
      canonicalAnswer: "2.0801",
    },
  },
  {
    id: "ga42-008",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = \\dfrac{5}{x_{n}^{2} + 1}\\) with \\(x_{0} = 1\\) to find \\(x_{1}\\) and \\(x_{2}\\). Give your answers to 4 decimal places where appropriate.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "running an iteration", "rounding"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find x_1 by substituting x_0 = 1.",
          workingLatex: "x_{1} = \\frac{5}{x_{0}^{2} + 1} = \\frac{5}{1^{2} + 1} = \\frac{5}{2} = 2.5",
          explanation:
            "Square x_0 = 1 to get 1, add 1 to get 2, so x_1 = 5/2 = 2.5 exactly.",
        },
        {
          stepNumber: 2,
          description: "Find x_2 by substituting x_1 = 2.5.",
          workingLatex: "x_{2} = \\frac{5}{x_{1}^{2} + 1} = \\frac{5}{2.5^{2} + 1} = \\frac{5}{6.25 + 1}",
          explanation:
            "Feed the previous value back in. Square 2.5 to get 6.25, then add 1 to get 7.25.",
        },
        {
          stepNumber: 3,
          description: "Evaluate x_2 and round.",
          workingLatex: "x_{2} = \\frac{5}{7.25} = 0.68965\\ldots = 0.6897 \\; (4\\text{ d.p.})",
          explanation:
            "5 ÷ 7.25 = 0.68965..., which rounds to 0.6897 to 4 decimal places.",
        },
      ],
      finalAnswer: "\\(x_{1} = 2.5,\\; x_{2} \\approx 0.6897\\)",
      canonicalAnswer: "x1=2.5, x2=0.6897",
    },
  },
  {
    id: "ga42-009",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = \\sqrt[3]{2x_{n} + 5}\\) with \\(x_{0} = 2\\) to find \\(x_{1}\\), \\(x_{2}\\) and \\(x_{3}\\). Give your answers to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "running an iteration", "cube root", "rounding"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find x_1 from x_0 = 2.",
          workingLatex: "x_{1} = \\sqrt[3]{2 \\cdot 2 + 5} = \\sqrt[3]{9} = 2.0801 \\; (4\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 2: inside the root 2(2) + 5 = 9, so x_1 = ∛9 = 2.08008... = 2.0801.",
        },
        {
          stepNumber: 2,
          description: "Find x_2 from the unrounded x_1.",
          workingLatex: "x_{2} = \\sqrt[3]{2 \\cdot 2.08008\\ldots + 5} = \\sqrt[3]{9.16016\\ldots} = 2.0924",
          explanation:
            "Always feed the full-accuracy previous value back in (not the rounded 2.0801). Here 2(2.08008...) + 5 = 9.16016..., and its cube root is 2.09235... = 2.0924 to 4 d.p.",
        },
        {
          stepNumber: 3,
          description: "Find x_3 from the unrounded x_2.",
          workingLatex: "x_{3} = \\sqrt[3]{2 \\cdot 2.09235\\ldots + 5} = \\sqrt[3]{9.18470\\ldots} = 2.0942",
          explanation:
            "Using x_2 = 2.09235..., we get 2(2.09235...) + 5 = 9.18470..., whose cube root is 2.09421... = 2.0942 to 4 d.p. The values are settling down, which suggests convergence to a root.",
        },
      ],
      finalAnswer: "\\(x_{1} \\approx 2.0801,\\; x_{2} \\approx 2.0924,\\; x_{3} \\approx 2.0942\\)",
      canonicalAnswer: "x1=2.0801, x2=2.0924, x3=2.0942",
    },
  },
  {
    id: "ga42-010",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = \\sqrt{2x_{n} + 3}\\) with \\(x_{0} = 2\\) to find \\(x_{1}\\), \\(x_{2}\\) and \\(x_{3}\\). Give your answers to 4 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "running an iteration", "square root", "rounding"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find x_1 from x_0 = 2.",
          workingLatex: "x_{1} = \\sqrt{2 \\cdot 2 + 3} = \\sqrt{7} = 2.6458 \\; (4\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 2: inside the root 2(2) + 3 = 7, so x_1 = √7 = 2.64575... = 2.6458.",
        },
        {
          stepNumber: 2,
          description: "Find x_2 from the unrounded x_1.",
          workingLatex: "x_{2} = \\sqrt{2 \\cdot 2.64575\\ldots + 3} = \\sqrt{8.29150\\ldots} = 2.8795",
          explanation:
            "Use the full value x_1 = 2.64575.... Then 2(2.64575...) + 3 = 8.29150..., and √8.29150... = 2.87950... = 2.8795 to 4 d.p.",
        },
        {
          stepNumber: 3,
          description: "Find x_3 from the unrounded x_2.",
          workingLatex: "x_{3} = \\sqrt{2 \\cdot 2.87950\\ldots + 3} = \\sqrt{8.75899\\ldots} = 2.9596",
          explanation:
            "With x_2 = 2.87950..., we get 2(2.87950...) + 3 = 8.75899..., so x_3 = √8.75899... = 2.95956... = 2.9596 to 4 d.p. The iterates are increasing towards a limit (a root).",
        },
      ],
      finalAnswer: "\\(x_{1} \\approx 2.6458,\\; x_{2} \\approx 2.8795,\\; x_{3} \\approx 2.9596\\)",
      canonicalAnswer: "x1=2.6458, x2=2.8795, x3=2.9596",
    },
  },
  {
    id: "ga42-011",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = 1 + \\dfrac{1}{x_{n}}\\) with \\(x_{0} = 1\\) to find \\(x_{1}\\), \\(x_{2}\\), \\(x_{3}\\) and \\(x_{4}\\). Give exact values where convenient.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "running an iteration", "reciprocal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find x_1 from x_0 = 1.",
          workingLatex: "x_{1} = 1 + \\frac{1}{x_{0}} = 1 + \\frac{1}{1} = 2",
          explanation:
            "Substitute x_0 = 1: the reciprocal of 1 is 1, so x_1 = 1 + 1 = 2.",
        },
        {
          stepNumber: 2,
          description: "Find x_2 from x_1 = 2.",
          workingLatex: "x_{2} = 1 + \\frac{1}{2} = \\frac{3}{2} = 1.5",
          explanation:
            "The reciprocal of 2 is 1/2, so x_2 = 1 + 1/2 = 3/2 = 1.5.",
        },
        {
          stepNumber: 3,
          description: "Find x_3 from x_2 = 3/2.",
          workingLatex: "x_{3} = 1 + \\frac{1}{\\frac{3}{2}} = 1 + \\frac{2}{3} = \\frac{5}{3} = 1.6666\\ldots",
          explanation:
            "The reciprocal of 3/2 is 2/3, so x_3 = 1 + 2/3 = 5/3 = 1.666....",
        },
        {
          stepNumber: 4,
          description: "Find x_4 from x_3 = 5/3.",
          workingLatex: "x_{4} = 1 + \\frac{1}{\\frac{5}{3}} = 1 + \\frac{3}{5} = \\frac{8}{5} = 1.6",
          explanation:
            "The reciprocal of 5/3 is 3/5, so x_4 = 1 + 3/5 = 8/5 = 1.6. The values are closing in around 1.6, homing in on a root (the equation x = 1 + 1/x rearranges to x^2 - x - 1 = 0).",
        },
      ],
      finalAnswer: "\\(x_{1} = 2,\\; x_{2} = 1.5,\\; x_{3} = \\dfrac{5}{3},\\; x_{4} = 1.6\\)",
      canonicalAnswer: "x1=2, x2=1.5, x3=5/3, x4=1.6",
    },
  },
  {
    id: "ga42-012",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = \\sqrt[3]{2x_{n} + 5}\\) with \\(x_{0} = 2\\) to find \\(x_{1}\\), \\(x_{2}\\) and \\(x_{3}\\), giving each iterate to 3 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "running an iteration", "cube root", "rounding"],
    answerMeta: { requiredDp: 3 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find x_1.",
          workingLatex: "x_{1} = \\sqrt[3]{2 \\cdot 2 + 5} = \\sqrt[3]{9} = 2.080 \\; (3\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 2: 2(2) + 5 = 9, so x_1 = ∛9 = 2.08008... = 2.080 to 3 d.p.",
        },
        {
          stepNumber: 2,
          description: "Find x_2 from the full-accuracy x_1.",
          workingLatex: "x_{2} = \\sqrt[3]{2 \\cdot 2.08008\\ldots + 5} = \\sqrt[3]{9.16016\\ldots} = 2.092",
          explanation:
            "Keep the unrounded x_1 = 2.08008... in the calculator: 2(2.08008...) + 5 = 9.16016..., whose cube root is 2.09235... = 2.092 to 3 d.p.",
        },
        {
          stepNumber: 3,
          description: "Find x_3 from the full-accuracy x_2.",
          workingLatex: "x_{3} = \\sqrt[3]{2 \\cdot 2.09235\\ldots + 5} = \\sqrt[3]{9.18470\\ldots} = 2.094",
          explanation:
            "Using x_2 = 2.09235..., we get 2(2.09235...) + 5 = 9.18470..., so x_3 = ∛9.18470... = 2.09421... = 2.094 to 3 d.p.",
        },
      ],
      finalAnswer: "\\(x_{1} \\approx 2.080,\\; x_{2} \\approx 2.092,\\; x_{3} \\approx 2.094\\)",
      canonicalAnswer: "x1=2.080, x2=2.092, x3=2.094",
    },
  },
  {
    id: "ga42-013",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use the iteration formula \\(x_{n+1} = \\sqrt{3x_{n} + 4}\\) with \\(x_{0} = 2\\) to find \\(x_{1}\\), \\(x_{2}\\) and \\(x_{3}\\), giving each iterate to 2 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "running an iteration", "square root", "rounding"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find x_1.",
          workingLatex: "x_{1} = \\sqrt{3 \\cdot 2 + 4} = \\sqrt{10} = 3.16 \\; (2\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 2: 3(2) + 4 = 10, so x_1 = √10 = 3.16227... = 3.16 to 2 d.p.",
        },
        {
          stepNumber: 2,
          description: "Find x_2 from the full-accuracy x_1.",
          workingLatex: "x_{2} = \\sqrt{3 \\cdot 3.16227\\ldots + 4} = \\sqrt{13.48683\\ldots} = 3.67",
          explanation:
            "Use the unrounded x_1 = 3.16227...: 3(3.16227...) + 4 = 13.48683..., so x_2 = √13.48683... = 3.67244... = 3.67 to 2 d.p.",
        },
        {
          stepNumber: 3,
          description: "Find x_3 from the full-accuracy x_2.",
          workingLatex: "x_{3} = \\sqrt{3 \\cdot 3.67244\\ldots + 4} = \\sqrt{15.01732\\ldots} = 3.88",
          explanation:
            "With x_2 = 3.67244..., we get 3(3.67244...) + 4 = 15.01732..., so x_3 = √15.01732... = 3.87521... = 3.88 to 2 d.p.",
        },
      ],
      finalAnswer: "\\(x_{1} \\approx 3.16,\\; x_{2} \\approx 3.67,\\; x_{3} \\approx 3.88\\)",
      canonicalAnswer: "x1=3.16, x2=3.67, x3=3.88",
    },
  },
  {
    id: "ga42-014",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The equation \\(x^{3} - 2x - 5 = 0\\) has a root near \\(x = 2\\). By substituting \\(x = 2.05\\) and \\(x = 2.15\\) into \\(f(x) = x^{3} - 2x - 5\\), show that this root is \\(2.1\\) correct to 1 decimal place.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "root to required accuracy", "sign change", "justification"],
    answerMeta: { requiredDp: 1 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the interval that rounds to 2.1.",
          workingLatex: "2.05 \\le x < 2.15 \\;\\Rightarrow\\; x = 2.1 \\;(1\\text{ d.p.})",
          explanation:
            "Any value from 2.05 up to (but not including) 2.15 rounds to 2.1 to 1 decimal place. So if we can trap the root inside this interval, it must equal 2.1 to 1 d.p. We test the two endpoints.",
        },
        {
          stepNumber: 2,
          description: "Evaluate f at the lower endpoint x = 2.05.",
          workingLatex: "f(2.05) = 2.05^{3} - 2 \\cdot 2.05 - 5 = 8.615125 - 4.1 - 5 = -0.4849\\ldots",
          explanation:
            "Substitute x = 2.05: 2.05^3 = 8.615125, then subtract 2(2.05) = 4.1 and 5, giving -0.4849..., which is negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate f at the upper endpoint x = 2.15.",
          workingLatex: "f(2.15) = 2.15^{3} - 2 \\cdot 2.15 - 5 = 9.938375 - 4.3 - 5 = 0.6384\\ldots",
          explanation:
            "Substitute x = 2.15: 2.15^3 = 9.938375, then subtract 4.3 and 5, giving 0.6384..., which is positive.",
        },
        {
          stepNumber: 4,
          description: "Use the sign change to justify the rounded root.",
          workingLatex: "f(2.05) < 0, \\; f(2.15) > 0 \\;\\Rightarrow\\; \\text{root in } (2.05, 2.15) \\;\\Rightarrow\\; x = 2.1",
          explanation:
            "f is continuous and changes sign between 2.05 and 2.15, so the root lies in (2.05, 2.15). Every value in that interval rounds to 2.1, so the root is 2.1 correct to 1 decimal place.",
        },
      ],
      finalAnswer: "\\(x = 2.1\\) (1 d.p.)",
      canonicalAnswer: "2.1",
    },
  },
  {
    id: "ga42-015",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A root of \\(x^{3} + x - 3 = 0\\) is approximately \\(1.21\\). By substituting \\(x = 1.205\\) and \\(x = 1.215\\) into \\(f(x) = x^{3} + x - 3\\), show that the root is \\(1.21\\) correct to 2 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "root to required accuracy", "sign change", "justification"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the rounding interval for 1.21 (2 d.p.).",
          workingLatex: "1.205 \\le x < 1.215 \\;\\Rightarrow\\; x = 1.21 \\;(2\\text{ d.p.})",
          explanation:
            "All values from 1.205 up to (but not including) 1.215 round to 1.21 to 2 decimal places. If the root lies between these endpoints, it rounds to 1.21. Test both endpoints in f.",
        },
        {
          stepNumber: 2,
          description: "Evaluate f at x = 1.205.",
          workingLatex: "f(1.205) = 1.205^{3} + 1.205 - 3 = 1.74976\\ldots + 1.205 - 3 = -0.0453\\ldots",
          explanation:
            "Substitute x = 1.205: 1.205^3 = 1.749690..., add 1.205 and subtract 3 to get -0.0453..., which is negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate f at x = 1.215.",
          workingLatex: "f(1.215) = 1.215^{3} + 1.215 - 3 = 1.79361\\ldots + 1.215 - 3 = 0.0086\\ldots",
          explanation:
            "Substitute x = 1.215: 1.215^3 = 1.793613..., add 1.215 and subtract 3 to get 0.0086..., which is positive.",
        },
        {
          stepNumber: 4,
          description: "Conclude from the sign change.",
          workingLatex: "f(1.205) < 0, \\; f(1.215) > 0 \\;\\Rightarrow\\; \\text{root in } (1.205, 1.215) \\;\\Rightarrow\\; x = 1.21",
          explanation:
            "f is continuous and changes sign across the interval, so the root lies between 1.205 and 1.215. Every value there rounds to 1.21, so the root is 1.21 correct to 2 decimal places.",
        },
      ],
      finalAnswer: "\\(x = 1.21\\) (2 d.p.)",
      canonicalAnswer: "1.21",
    },
  },
  {
    id: "ga42-016",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that the equation \\(x^{3} - 2x - 5 = 0\\) can be rearranged into the iterative form \\(x = \\sqrt[3]{2x + 5}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "rearranging", "x=g(x)", "cube root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Move the linear terms to the other side to isolate the cube term.",
          workingLatex: "x^{3} - 2x - 5 = 0 \\;\\Rightarrow\\; x^{3} = 2x + 5",
          explanation:
            "Add 2x and 5 to both sides so that x^3 is alone on the left. We want to end up with a single x on the left, so first isolate the highest power.",
        },
        {
          stepNumber: 2,
          description: "Take the cube root of both sides.",
          workingLatex: "x = \\sqrt[3]{2x + 5}",
          explanation:
            "Cube-rooting both sides undoes the cube on the left, leaving a single x. The right-hand side becomes the iteration function g(x) = ∛(2x + 5).",
        },
        {
          stepNumber: 3,
          description: "State the iteration formula.",
          workingLatex: "x_{n+1} = \\sqrt[3]{2x_{n} + 5}",
          explanation:
            "Writing this in iteration notation gives x_{n+1} = ∛(2x_n + 5), which can be used to generate successive approximations to the root.",
        },
      ],
      finalAnswer: "\\(x = \\sqrt[3]{2x + 5}\\)",
      canonicalAnswer: "x=(2x+5)^(1/3)",
    },
  },
  {
    id: "ga42-017",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that the equation \\(x^{2} - 2x - 4 = 0\\) can be rearranged into the iterative form \\(x = \\sqrt{2x + 4}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "rearranging", "x=g(x)", "square root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the squared term.",
          workingLatex: "x^{2} - 2x - 4 = 0 \\;\\Rightarrow\\; x^{2} = 2x + 4",
          explanation:
            "Add 2x and 4 to both sides so x^2 is by itself on the left.",
        },
        {
          stepNumber: 2,
          description: "Take the (positive) square root of both sides.",
          workingLatex: "x = \\sqrt{2x + 4}",
          explanation:
            "Square-rooting both sides removes the square on the left, giving a single x. We take the positive root to target the positive root of the equation. The right-hand side is g(x) = √(2x + 4).",
        },
        {
          stepNumber: 3,
          description: "Write the iteration formula.",
          workingLatex: "x_{n+1} = \\sqrt{2x_{n} + 4}",
          explanation:
            "In iteration notation this is x_{n+1} = √(2x_n + 4), ready to generate approximations from a starting value.",
        },
      ],
      finalAnswer: "\\(x = \\sqrt{2x + 4}\\)",
      canonicalAnswer: "x=sqrt(2x+4)",
    },
  },
  {
    id: "ga42-018",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that the equation \\(x^{3} + 4x - 10 = 0\\) can be rearranged into the iterative form \\(x = \\dfrac{10 - x^{3}}{4}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "rearranging", "x=g(x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the term in x (the 4x).",
          workingLatex: "x^{3} + 4x - 10 = 0 \\;\\Rightarrow\\; 4x = 10 - x^{3}",
          explanation:
            "We want a single x on the left, so keep the 4x term and move everything else across: subtract x^3 and add 10 to both sides, giving 4x = 10 - x^3.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 4.",
          workingLatex: "x = \\frac{10 - x^{3}}{4}",
          explanation:
            "Dividing by 4 leaves a single x on the left. The right-hand side becomes g(x) = (10 - x^3)/4.",
        },
        {
          stepNumber: 3,
          description: "Write the iteration formula.",
          workingLatex: "x_{n+1} = \\frac{10 - x_{n}^{3}}{4}",
          explanation:
            "In iteration notation this is x_{n+1} = (10 - x_n^3)/4. (There are other valid rearrangements, such as x = ∛(10 - 4x); this is just one of them.)",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{10 - x^{3}}{4}\\)",
      canonicalAnswer: "x=(10-x^3)/4",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga42-019",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The equation \\(x^{3} - 6x + 2 = 0\\) has three real roots. By evaluating \\(f(x) = x^{3} - 6x + 2\\) at suitable integer values, find three consecutive-integer intervals, each containing exactly one root.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "sign change", "root location", "multiple roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Build a small table of f at integer values.",
          workingLatex: "f(-3) = -7, \\; f(-2) = 6, \\; f(-1) = 7, \\; f(0) = 2, \\; f(1) = -3, \\; f(2) = -2, \\; f(3) = 11",
          explanation:
            "Evaluate f(x) = x^3 - 6x + 2 at several integers. For example f(-3) = -27 + 18 + 2 = -7, f(-2) = -8 + 12 + 2 = 6, f(0) = 2, f(1) = 1 - 6 + 2 = -3, f(2) = 8 - 12 + 2 = -2, f(3) = 27 - 18 + 2 = 11. A root sits wherever consecutive values have opposite signs.",
        },
        {
          stepNumber: 2,
          description: "First sign change: between x = -3 and x = -2.",
          workingLatex: "f(-3) = -7 < 0, \\; f(-2) = 6 > 0 \\;\\Rightarrow\\; \\text{root in } (-3, -2)",
          explanation:
            "f goes from negative at -3 to positive at -2, so by the sign-change rule (f is continuous) there is a root between -3 and -2.",
        },
        {
          stepNumber: 3,
          description: "Second sign change: between x = 0 and x = 1.",
          workingLatex: "f(0) = 2 > 0, \\; f(1) = -3 < 0 \\;\\Rightarrow\\; \\text{root in } (0, 1)",
          explanation:
            "f goes from positive at 0 to negative at 1, so a second root lies between 0 and 1.",
        },
        {
          stepNumber: 4,
          description: "Third sign change: between x = 2 and x = 3.",
          workingLatex: "f(2) = -2 < 0, \\; f(3) = 11 > 0 \\;\\Rightarrow\\; \\text{root in } (2, 3)",
          explanation:
            "f goes from negative at 2 to positive at 3, giving a third root between 2 and 3. A cubic has at most three real roots, so these three intervals account for all of them.",
        },
      ],
      finalAnswer: "Roots in \\((-3, -2)\\), \\((0, 1)\\) and \\((2, 3)\\).",
      canonicalAnswer: "(-3,-2), (0,1), (2,3)",
    },
  },
  {
    id: "ga42-020",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The equation \\(x^{3} + x - 7 = 0\\) can be written as \\(x_{n+1} = \\sqrt[3]{7 - x_{n}}\\). Starting with \\(x_{0} = 2\\), find \\(x_{1}\\), \\(x_{2}\\), \\(x_{3}\\) and \\(x_{4}\\), giving each to 4 decimal places.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "running an iteration", "cube root", "rounding"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find x_1 from x_0 = 2.",
          workingLatex: "x_{1} = \\sqrt[3]{7 - x_{0}} = \\sqrt[3]{7 - 2} = \\sqrt[3]{5} = 1.7100 \\; (4\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 2: 7 - 2 = 5, so x_1 = ∛5 = 1.70997... = 1.7100 to 4 d.p.",
        },
        {
          stepNumber: 2,
          description: "Find x_2 from the full-accuracy x_1.",
          workingLatex: "x_{2} = \\sqrt[3]{7 - 1.70997\\ldots} = \\sqrt[3]{5.29002\\ldots} = 1.7424",
          explanation:
            "Use the unrounded x_1 = 1.70997...: 7 - 1.70997... = 5.29002..., so x_2 = ∛5.29002... = 1.74241... = 1.7424 to 4 d.p.",
        },
        {
          stepNumber: 3,
          description: "Find x_3 from the full-accuracy x_2.",
          workingLatex: "x_{3} = \\sqrt[3]{7 - 1.74241\\ldots} = \\sqrt[3]{5.25758\\ldots} = 1.7388",
          explanation:
            "With x_2 = 1.74241..., we get 7 - 1.74241... = 5.25758..., so x_3 = ∛5.25758... = 1.73884... = 1.7388 to 4 d.p.",
        },
        {
          stepNumber: 4,
          description: "Find x_4 from the full-accuracy x_3.",
          workingLatex: "x_{4} = \\sqrt[3]{7 - 1.73884\\ldots} = \\sqrt[3]{5.26115\\ldots} = 1.7392",
          explanation:
            "Using x_3 = 1.73884..., we get 7 - 1.73884... = 5.26115..., so x_4 = ∛5.26115... = 1.73924... = 1.7392 to 4 d.p. The iterates are oscillating slightly but closing in, indicating convergence to the root near 1.739.",
        },
      ],
      finalAnswer: "\\(x_{1} \\approx 1.7100,\\; x_{2} \\approx 1.7424,\\; x_{3} \\approx 1.7388,\\; x_{4} \\approx 1.7392\\)",
      canonicalAnswer: "x1=1.7100, x2=1.7424, x3=1.7388, x4=1.7392",
    },
  },
  {
    id: "ga42-021",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The equation \\(x^{3} + x - 5 = 0\\) can be written as \\(x_{n+1} = \\sqrt[3]{5 - x_{n}}\\). Starting with \\(x_{0} = 1\\), find \\(x_{1}\\), \\(x_{2}\\) and \\(x_{3}\\), giving each to 4 decimal places.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "running an iteration", "cube root", "rounding"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find x_1 from x_0 = 1.",
          workingLatex: "x_{1} = \\sqrt[3]{5 - x_{0}} = \\sqrt[3]{5 - 1} = \\sqrt[3]{4} = 1.5874 \\; (4\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 1: 5 - 1 = 4, so x_1 = ∛4 = 1.58740... = 1.5874 to 4 d.p.",
        },
        {
          stepNumber: 2,
          description: "Find x_2 from the full-accuracy x_1.",
          workingLatex: "x_{2} = \\sqrt[3]{5 - 1.58740\\ldots} = \\sqrt[3]{3.41259\\ldots} = 1.5055",
          explanation:
            "Use the unrounded x_1 = 1.58740...: 5 - 1.58740... = 3.41259..., so x_2 = ∛3.41259... = 1.50554... = 1.5055 to 4 d.p.",
        },
        {
          stepNumber: 3,
          description: "Find x_3 from the full-accuracy x_2.",
          workingLatex: "x_{3} = \\sqrt[3]{5 - 1.50554\\ldots} = \\sqrt[3]{3.49445\\ldots} = 1.5175",
          explanation:
            "With x_2 = 1.50554..., we get 5 - 1.50554... = 3.49445..., so x_3 = ∛3.49445... = 1.51749... = 1.5175 to 4 d.p. The values are settling around 1.516, the root of the equation.",
        },
      ],
      finalAnswer: "\\(x_{1} \\approx 1.5874,\\; x_{2} \\approx 1.5055,\\; x_{3} \\approx 1.5175\\)",
      canonicalAnswer: "x1=1.5874, x2=1.5055, x3=1.5175",
    },
  },
  {
    id: "ga42-022",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Show that \\(x^{3} - 2x - 7 = 0\\) has a root between \\(2\\) and \\(3\\). Then, using the iteration \\(x_{n+1} = \\sqrt[3]{2x_{n} + 7}\\) with \\(x_{0} = 2\\), find \\(x_{1}\\), \\(x_{2}\\) and \\(x_{3}\\) to 3 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "sign change", "running an iteration", "cube root", "rounding"],
    answerMeta: { requiredDp: 3 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check the sign change for the root location.",
          workingLatex: "f(x) = x^{3} - 2x - 7: \\quad f(2) = 8 - 4 - 7 = -3, \\quad f(3) = 27 - 6 - 7 = 14",
          explanation:
            "Let f(x) = x^3 - 2x - 7. Then f(2) = -3 (negative) and f(3) = 14 (positive). f is continuous, so the sign change means a root lies between 2 and 3.",
        },
        {
          stepNumber: 2,
          description: "Find x_1 from x_0 = 2.",
          workingLatex: "x_{1} = \\sqrt[3]{2 \\cdot 2 + 7} = \\sqrt[3]{11} = 2.224 \\; (3\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 2: 2(2) + 7 = 11, so x_1 = ∛11 = 2.22398... = 2.224 to 3 d.p.",
        },
        {
          stepNumber: 3,
          description: "Find x_2 from the full-accuracy x_1.",
          workingLatex: "x_{2} = \\sqrt[3]{2 \\cdot 2.22398\\ldots + 7} = \\sqrt[3]{11.44796\\ldots} = 2.254",
          explanation:
            "Use x_1 = 2.22398...: 2(2.22398...) + 7 = 11.44796..., so x_2 = ∛11.44796... = 2.25377... = 2.254 to 3 d.p.",
        },
        {
          stepNumber: 4,
          description: "Find x_3 from the full-accuracy x_2.",
          workingLatex: "x_{3} = \\sqrt[3]{2 \\cdot 2.25377\\ldots + 7} = \\sqrt[3]{11.50754\\ldots} = 2.258",
          explanation:
            "With x_2 = 2.25377..., we get 2(2.25377...) + 7 = 11.50754..., so x_3 = ∛11.50754... = 2.25767... = 2.258 to 3 d.p. The iterates are converging to the root in (2, 3).",
        },
      ],
      finalAnswer: "Root in \\((2,3)\\); \\(x_{1} \\approx 2.224,\\; x_{2} \\approx 2.254,\\; x_{3} \\approx 2.258\\)",
      canonicalAnswer: "x1=2.224, x2=2.254, x3=2.258",
    },
  },
  {
    id: "ga42-023",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Using the iteration \\(x_{n+1} = \\sqrt[3]{5 - x_{n}}\\) with \\(x_{0} = 1\\) for the equation \\(x^{3} + x - 5 = 0\\), the iterates settle near \\(x = 1.5\\). By evaluating \\(f(x) = x^{3} + x - 5\\) at \\(x = 1.45\\) and \\(x = 1.55\\), show that the root is \\(1.5\\) correct to 1 decimal place.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "root to required accuracy", "sign change", "justification"],
    answerMeta: { requiredDp: 1 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the rounding interval for 1.5 (1 d.p.).",
          workingLatex: "1.45 \\le x < 1.55 \\;\\Rightarrow\\; x = 1.5 \\;(1\\text{ d.p.})",
          explanation:
            "Any value from 1.45 up to (but not including) 1.55 rounds to 1.5 to 1 decimal place. To confirm the root is 1.5 to 1 d.p. we trap it inside this interval using a sign change.",
        },
        {
          stepNumber: 2,
          description: "Evaluate f at the lower endpoint x = 1.45.",
          workingLatex: "f(1.45) = 1.45^{3} + 1.45 - 5 = 3.048625 + 1.45 - 5 = -0.5014\\ldots",
          explanation:
            "Substitute x = 1.45: 1.45^3 = 3.048625, add 1.45 and subtract 5 to get -0.5014..., which is negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate f at the upper endpoint x = 1.55.",
          workingLatex: "f(1.55) = 1.55^{3} + 1.55 - 5 = 3.723875 + 1.55 - 5 = 0.2739\\ldots",
          explanation:
            "Substitute x = 1.55: 1.55^3 = 3.723875, add 1.55 and subtract 5 to get 0.2739..., which is positive.",
        },
        {
          stepNumber: 4,
          description: "Justify the rounded root with the sign change.",
          workingLatex: "f(1.45) < 0, \\; f(1.55) > 0 \\;\\Rightarrow\\; \\text{root in } (1.45, 1.55) \\;\\Rightarrow\\; x = 1.5",
          explanation:
            "f is continuous and changes sign across the interval, so the root lies between 1.45 and 1.55. Every value in that interval rounds to 1.5, so the root is 1.5 correct to 1 decimal place.",
        },
      ],
      finalAnswer: "\\(x = 1.5\\) (1 d.p.)",
      canonicalAnswer: "1.5",
    },
  },
  {
    id: "ga42-024",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The equation \\(x^{3} - 5x + 1 = 0\\) has a small positive root near \\(0.2\\). Using \\(f(x) = x^{3} - 5x + 1\\), evaluate \\(f(0.195)\\) and \\(f(0.205)\\) and hence show that this root is \\(0.20\\) correct to 2 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "root to required accuracy", "sign change", "justification"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the rounding interval for 0.20 (2 d.p.).",
          workingLatex: "0.195 \\le x < 0.205 \\;\\Rightarrow\\; x = 0.20 \\;(2\\text{ d.p.})",
          explanation:
            "Values from 0.195 up to (but not including) 0.205 round to 0.20 to 2 decimal places. If the root lies between these endpoints it must be 0.20 to 2 d.p. We test the endpoints.",
        },
        {
          stepNumber: 2,
          description: "Evaluate f at x = 0.195.",
          workingLatex: "f(0.195) = 0.195^{3} - 5 \\cdot 0.195 + 1 = 0.007415\\ldots - 0.975 + 1 = 0.0324\\ldots",
          explanation:
            "Substitute x = 0.195: 0.195^3 = 0.007415..., then -5(0.195) = -0.975 and +1, giving 0.0324..., which is positive.",
        },
        {
          stepNumber: 3,
          description: "Evaluate f at x = 0.205.",
          workingLatex: "f(0.205) = 0.205^{3} - 5 \\cdot 0.205 + 1 = 0.008615\\ldots - 1.025 + 1 = -0.0164\\ldots",
          explanation:
            "Substitute x = 0.205: 0.205^3 = 0.008615..., then -5(0.205) = -1.025 and +1, giving -0.0164..., which is negative.",
        },
        {
          stepNumber: 4,
          description: "Conclude from the sign change.",
          workingLatex: "f(0.195) > 0, \\; f(0.205) < 0 \\;\\Rightarrow\\; \\text{root in } (0.195, 0.205) \\;\\Rightarrow\\; x = 0.20",
          explanation:
            "f is continuous and changes sign between 0.195 and 0.205 (here from positive to negative), so the root lies in that interval. Every value there rounds to 0.20, so the root is 0.20 correct to 2 decimal places.",
        },
      ],
      finalAnswer: "\\(x = 0.20\\) (2 d.p.)",
      canonicalAnswer: "0.20",
    },
  },
  {
    id: "ga42-025",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The iteration \\(x_{n+1} = \\sqrt[3]{9 - 2x_{n}}\\) (with \\(x_{0} = 1\\)) converges to a root of \\(x^{3} + 2x - 9 = 0\\) near \\(1.76\\). By evaluating \\(f(x) = x^{3} + 2x - 9\\) at \\(x = 1.755\\) and \\(x = 1.765\\), show that the root is \\(1.76\\) correct to 2 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "root to required accuracy", "sign change", "justification"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the rounding interval for 1.76 (2 d.p.).",
          workingLatex: "1.755 \\le x < 1.765 \\;\\Rightarrow\\; x = 1.76 \\;(2\\text{ d.p.})",
          explanation:
            "Values from 1.755 up to (but not including) 1.765 round to 1.76 to 2 decimal places. We confirm the root sits in this interval via a sign change of f.",
        },
        {
          stepNumber: 2,
          description: "Evaluate f at x = 1.755.",
          workingLatex: "f(1.755) = 1.755^{3} + 2 \\cdot 1.755 - 9 = 5.405443\\ldots + 3.51 - 9 = -0.0846\\ldots",
          explanation:
            "Substitute x = 1.755: 1.755^3 = 5.405443..., add 2(1.755) = 3.51 and subtract 9, giving -0.0846..., which is negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate f at x = 1.765.",
          workingLatex: "f(1.765) = 1.765^{3} + 2 \\cdot 1.765 - 9 = 5.498372\\ldots + 3.53 - 9 = 0.0284\\ldots",
          explanation:
            "Substitute x = 1.765: 1.765^3 = 5.498372..., add 2(1.765) = 3.53 and subtract 9, giving 0.0284..., which is positive.",
        },
        {
          stepNumber: 4,
          description: "Conclude from the sign change.",
          workingLatex: "f(1.755) < 0, \\; f(1.765) > 0 \\;\\Rightarrow\\; \\text{root in } (1.755, 1.765) \\;\\Rightarrow\\; x = 1.76",
          explanation:
            "f is continuous and changes sign across the interval, so the root lies between 1.755 and 1.765. Every value there rounds to 1.76, so the root is 1.76 correct to 2 decimal places.",
        },
      ],
      finalAnswer: "\\(x = 1.76\\) (2 d.p.)",
      canonicalAnswer: "1.76",
    },
  },
  {
    id: "ga42-026",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The equation \\(x^{3} - x - 1 = 0\\) can be rearranged to \\(x_{n+1} = \\sqrt[3]{x_{n} + 1}\\). With \\(x_{0} = 1\\) the iterates converge to a root near \\(1.325\\). By evaluating \\(f(x) = x^{3} - x - 1\\) at \\(x = 1.3245\\) and \\(x = 1.3255\\), show that the root is \\(1.325\\) correct to 3 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "rearranging", "root to required accuracy", "sign change", "justification"],
    answerMeta: { requiredDp: 3 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Confirm the rearrangement is equivalent to the equation.",
          workingLatex: "x^{3} - x - 1 = 0 \\;\\Rightarrow\\; x^{3} = x + 1 \\;\\Rightarrow\\; x = \\sqrt[3]{x + 1}",
          explanation:
            "Add x and 1 to both sides to isolate x^3, then cube-root both sides. This gives the iteration x_{n+1} = ∛(x_n + 1), so its limit is a genuine root of the original equation.",
        },
        {
          stepNumber: 2,
          description: "State the rounding interval for 1.325 (3 d.p.).",
          workingLatex: "1.3245 \\le x < 1.3255 \\;\\Rightarrow\\; x = 1.325 \\;(3\\text{ d.p.})",
          explanation:
            "Values from 1.3245 up to (but not including) 1.3255 round to 1.325 to 3 decimal places. We trap the root in this interval with a sign change.",
        },
        {
          stepNumber: 3,
          description: "Evaluate f at x = 1.3245.",
          workingLatex: "f(1.3245) = 1.3245^{3} - 1.3245 - 1 = 2.323570\\ldots - 1.3245 - 1 = -0.0009\\ldots",
          explanation:
            "Substitute x = 1.3245: 1.3245^3 = 2.323570..., then subtract 1.3245 and 1 to get -0.0009..., which is negative.",
        },
        {
          stepNumber: 4,
          description: "Evaluate f at x = 1.3255.",
          workingLatex: "f(1.3255) = 1.3255^{3} - 1.3255 - 1 = 2.328837\\ldots - 1.3255 - 1 = 0.0033\\ldots",
          explanation:
            "Substitute x = 1.3255: 1.3255^3 = 2.328837..., then subtract 1.3255 and 1 to get 0.0033..., which is positive.",
        },
        {
          stepNumber: 5,
          description: "Conclude from the sign change.",
          workingLatex: "f(1.3245) < 0, \\; f(1.3255) > 0 \\;\\Rightarrow\\; \\text{root in } (1.3245, 1.3255) \\;\\Rightarrow\\; x = 1.325",
          explanation:
            "f is continuous and changes sign across the narrow interval, so the root lies between 1.3245 and 1.3255. Every value there rounds to 1.325, so the root is 1.325 correct to 3 decimal places.",
        },
      ],
      finalAnswer: "\\(x = 1.325\\) (3 d.p.)",
      canonicalAnswer: "1.325",
    },
  },
  {
    id: "ga42-027",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Show that \\(2x^{2} - x - 4 = 0\\) can be rearranged into the iterative form \\(x = \\sqrt{\\dfrac{x + 4}{2}}\\). Then, starting with \\(x_{0} = 1\\), use this iteration to find \\(x_{1}\\) and \\(x_{2}\\), giving each to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "rearranging", "x=g(x)", "running an iteration", "rounding"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the squared term.",
          workingLatex: "2x^{2} - x - 4 = 0 \\;\\Rightarrow\\; 2x^{2} = x + 4",
          explanation:
            "Add x and 4 to both sides so the 2x^2 term is alone on the left.",
        },
        {
          stepNumber: 2,
          description: "Make x^2 the subject, then take the square root.",
          workingLatex: "x^{2} = \\frac{x + 4}{2} \\;\\Rightarrow\\; x = \\sqrt{\\frac{x + 4}{2}}",
          explanation:
            "Divide both sides by 2 to get x^2 = (x + 4)/2, then take the positive square root of both sides to leave a single x on the left. This gives g(x) = √((x + 4)/2).",
        },
        {
          stepNumber: 3,
          description: "Find x_1 from x_0 = 1.",
          workingLatex: "x_{1} = \\sqrt{\\frac{1 + 4}{2}} = \\sqrt{2.5} = 1.5811 \\; (4\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 1: (1 + 4)/2 = 2.5, so x_1 = √2.5 = 1.58113... = 1.5811 to 4 d.p.",
        },
        {
          stepNumber: 4,
          description: "Find x_2 from the full-accuracy x_1.",
          workingLatex: "x_{2} = \\sqrt{\\frac{1.58113\\ldots + 4}{2}} = \\sqrt{2.79056\\ldots} = 1.6705",
          explanation:
            "Use x_1 = 1.58113...: (1.58113... + 4)/2 = 2.79056..., so x_2 = √2.79056... = 1.67050... = 1.6705 to 4 d.p.",
        },
      ],
      finalAnswer: "\\(x = \\sqrt{\\dfrac{x+4}{2}}\\); \\(x_{1} \\approx 1.5811,\\; x_{2} \\approx 1.6705\\)",
      canonicalAnswer: "x1=1.5811, x2=1.6705",
    },
  },
  {
    id: "ga42-028",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Show that \\(x^{3} + 4x - 10 = 0\\) can be rearranged into the iterative form \\(x = \\sqrt[3]{10 - 4x}\\). Then, starting with \\(x_{0} = 1\\), use this iteration to find \\(x_{1}\\) and \\(x_{2}\\), giving each to 4 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "rearranging", "x=g(x)", "running an iteration", "cube root", "rounding"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the cube term.",
          workingLatex: "x^{3} + 4x - 10 = 0 \\;\\Rightarrow\\; x^{3} = 10 - 4x",
          explanation:
            "Move the 4x and the 10 across: subtract 4x and add 10 to both sides so x^3 is alone on the left.",
        },
        {
          stepNumber: 2,
          description: "Take the cube root of both sides.",
          workingLatex: "x = \\sqrt[3]{10 - 4x}",
          explanation:
            "Cube-rooting both sides leaves a single x on the left. The right-hand side is g(x) = ∛(10 - 4x).",
        },
        {
          stepNumber: 3,
          description: "Find x_1 from x_0 = 1.",
          workingLatex: "x_{1} = \\sqrt[3]{10 - 4 \\cdot 1} = \\sqrt[3]{6} = 1.8171 \\; (4\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 1: 10 - 4(1) = 6, so x_1 = ∛6 = 1.81712... = 1.8171 to 4 d.p.",
        },
        {
          stepNumber: 4,
          description: "Find x_2 from the full-accuracy x_1.",
          workingLatex: "x_{2} = \\sqrt[3]{10 - 4 \\cdot 1.81712\\ldots} = \\sqrt[3]{2.73152\\ldots} = 1.3979",
          explanation:
            "Use x_1 = 1.81712...: 10 - 4(1.81712...) = 2.73152..., so x_2 = ∛2.73152... = 1.39786... = 1.3979 to 4 d.p. (This rearrangement converges slowly with oscillation, but each iterate is still a valid step toward the root near 1.36.)",
        },
      ],
      finalAnswer: "\\(x = \\sqrt[3]{10 - 4x}\\); \\(x_{1} \\approx 1.8171,\\; x_{2} \\approx 1.3979\\)",
      canonicalAnswer: "x1=1.8171, x2=1.3979",
    },
  },
  {
    id: "ga42-029",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Show that \\(x^{3} - 7x + 2 = 0\\) can be rearranged into the iterative form \\(x = \\dfrac{x^{3} + 2}{7}\\). Then, starting with \\(x_{0} = 0\\), use this iteration to find \\(x_{1}\\), \\(x_{2}\\) and \\(x_{3}\\), giving each to 4 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "rearranging", "x=g(x)", "running an iteration", "rounding"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the term in x (the 7x).",
          workingLatex: "x^{3} - 7x + 2 = 0 \\;\\Rightarrow\\; 7x = x^{3} + 2",
          explanation:
            "We want a single x on the left, so keep the 7x term: add 7x to both sides (and the other terms stay together), giving 7x = x^3 + 2.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 7.",
          workingLatex: "x = \\frac{x^{3} + 2}{7}",
          explanation:
            "Dividing by 7 leaves a single x on the left. The iteration function is g(x) = (x^3 + 2)/7.",
        },
        {
          stepNumber: 3,
          description: "Find x_1 from x_0 = 0.",
          workingLatex: "x_{1} = \\frac{0^{3} + 2}{7} = \\frac{2}{7} = 0.2857 \\; (4\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 0: 0^3 + 2 = 2, so x_1 = 2/7 = 0.28571... = 0.2857 to 4 d.p.",
        },
        {
          stepNumber: 4,
          description: "Find x_2 from the full-accuracy x_1.",
          workingLatex: "x_{2} = \\frac{0.28571\\ldots^{3} + 2}{7} = \\frac{2.02332\\ldots}{7} = 0.2890",
          explanation:
            "Use x_1 = 0.28571...: 0.28571...^3 = 0.023323..., add 2 to get 2.023323..., then divide by 7 to get 0.28904... = 0.2890 to 4 d.p.",
        },
        {
          stepNumber: 5,
          description: "Find x_3 from the full-accuracy x_2.",
          workingLatex: "x_{3} = \\frac{0.28904\\ldots^{3} + 2}{7} = \\frac{2.02415\\ldots}{7} = 0.2892",
          explanation:
            "With x_2 = 0.28904..., we get 0.28904...^3 = 0.024152..., add 2 to get 2.024152..., divide by 7 to get 0.28916... = 0.2892 to 4 d.p. The iterates are converging to the small root near 0.289.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{x^{3} + 2}{7}\\); \\(x_{1} \\approx 0.2857,\\; x_{2} \\approx 0.2890,\\; x_{3} \\approx 0.2892\\)",
      canonicalAnswer: "x1=0.2857, x2=0.2890, x3=0.2892",
    },
  },
  {
    id: "ga42-030",
    topicRef: "ga42",
    topicTitle: "Iterative methods for numerical solutions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Show that \\(x^{3} + 2x - 9 = 0\\) has a root between \\(1\\) and \\(2\\). Rearrange the equation into the form \\(x = \\sqrt[3]{9 - 2x}\\), and use the iteration \\(x_{n+1} = \\sqrt[3]{9 - 2x_{n}}\\) with \\(x_{0} = 1\\) to find \\(x_{1}\\), \\(x_{2}\\) and \\(x_{3}\\), giving each to 4 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["iterative methods", "sign change", "rearranging", "x=g(x)", "running an iteration", "cube root"],
    answerMeta: { requiredDp: 4 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check the sign change to locate the root.",
          workingLatex: "f(x) = x^{3} + 2x - 9: \\quad f(1) = 1 + 2 - 9 = -6, \\quad f(2) = 8 + 4 - 9 = 3",
          explanation:
            "Let f(x) = x^3 + 2x - 9. Then f(1) = -6 (negative) and f(2) = 3 (positive). f is continuous, so the change of sign means a root lies between 1 and 2.",
        },
        {
          stepNumber: 2,
          description: "Rearrange into the iterative form.",
          workingLatex: "x^{3} + 2x - 9 = 0 \\;\\Rightarrow\\; x^{3} = 9 - 2x \\;\\Rightarrow\\; x = \\sqrt[3]{9 - 2x}",
          explanation:
            "Subtract 2x and add 9 to both sides to isolate x^3, then take the cube root to get x = ∛(9 - 2x). This confirms the given rearrangement, so its limit is a root of the equation.",
        },
        {
          stepNumber: 3,
          description: "Find x_1 from x_0 = 1.",
          workingLatex: "x_{1} = \\sqrt[3]{9 - 2 \\cdot 1} = \\sqrt[3]{7} = 1.9129 \\; (4\\text{ d.p.})",
          explanation:
            "Substitute x_0 = 1: 9 - 2(1) = 7, so x_1 = ∛7 = 1.91293... = 1.9129 to 4 d.p.",
        },
        {
          stepNumber: 4,
          description: "Find x_2 from the full-accuracy x_1.",
          workingLatex: "x_{2} = \\sqrt[3]{9 - 2 \\cdot 1.91293\\ldots} = \\sqrt[3]{5.17414\\ldots} = 1.7296",
          explanation:
            "Use x_1 = 1.91293...: 9 - 2(1.91293...) = 5.17414..., so x_2 = ∛5.17414... = 1.72959... = 1.7296 to 4 d.p.",
        },
        {
          stepNumber: 5,
          description: "Find x_3 from the full-accuracy x_2.",
          workingLatex: "x_{3} = \\sqrt[3]{9 - 2 \\cdot 1.72959\\ldots} = \\sqrt[3]{5.54081\\ldots} = 1.7695",
          explanation:
            "With x_2 = 1.72959..., we get 9 - 2(1.72959...) = 5.54081..., so x_3 = ∛5.54081... = 1.76953... = 1.7695 to 4 d.p. The iterates oscillate but close in on the root near 1.76, consistent with the sign change in (1, 2).",
        },
      ],
      finalAnswer: "Root in \\((1,2)\\); \\(x_{1} \\approx 1.9129,\\; x_{2} \\approx 1.7296,\\; x_{3} \\approx 1.7695\\)",
      canonicalAnswer: "x1=1.9129, x2=1.7296, x3=1.7695",
    },
  },
];
