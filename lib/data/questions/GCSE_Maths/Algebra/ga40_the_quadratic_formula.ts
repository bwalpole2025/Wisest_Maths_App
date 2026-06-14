/**
 * Topic: The quadratic formula
 * Ref: ga40  (DfE A18)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: solving ax^2 + bx + c = 0 using
 *   x = (-b ± sqrt(b^2 - 4ac)) / (2a). Key skills, used throughout:
 *   - identify a, b, c correctly, INCLUDING their signs (a missing sign in b
 *     or c is the most common slip — and remember -b flips the sign of b);
 *   - evaluate the discriminant b^2 - 4ac carefully (when b is negative,
 *     b^2 is still POSITIVE: e.g. (-5)^2 = 25);
 *   - give answers to a stated accuracy (2 d.p.) or as exact, fully
 *     simplified surds;
 *   - rearrange an equation to ax^2 + bx + c = 0 BEFORE reading off a, b, c;
 *   - use the discriminant alone to decide the NUMBER of real roots
 *     (D > 0 two, D = 0 one repeated, D < 0 none);
 *   - solve discriminant conditions (e.g. "equal roots" => D = 0);
 *   - form a quadratic from a worded / geometric context, then solve it and
 *     reject any non-physical (negative) root.
 *
 * Clusters:
 *   (1) identify a, b, c and substitute into the formula;
 *   (2) decimal answers to 2 d.p.;
 *   (3) exact, simplified surd answers;
 *   (4) rearrange to = 0 first, then solve;
 *   (5) the discriminant -> number of real roots;
 *   (6) discriminant condition problems (find k for equal/no/two roots);
 *   (7) worded / geometry forming and solving a quadratic.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga40-001 .. ga40-004  (4)   core technique, clean numbers
 *   - Standard:   ga40-005 .. ga40-018  (14)
 *   - Challenge:  ga40-019 .. ga40-030  (12)
 * Id range: ga40-001 .. ga40-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules. The formula is written
 *   x = \\frac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga40-001",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "For the equation \\(x^2 + 5x + 6 = 0\\), write down the values of \\(a\\), \\(b\\) and \\(c\\), then solve using the quadratic formula.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quadratic formula", "identify a b c", "solve quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare with ax^2 + bx + c = 0 to read off a, b, c.",
          workingLatex: "a = 1, \\quad b = 5, \\quad c = 6",
          explanation:
            "The coefficient of x^2 is a, the coefficient of x is b, and the constant term is c. Here every term is positive, so a = 1, b = 5, c = 6.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the quadratic formula and find the discriminant.",
          workingLatex: "x = \\frac{-5 \\pm \\sqrt{5^{2} - 4 \\cdot 1 \\cdot 6}}{2 \\cdot 1} = \\frac{-5 \\pm \\sqrt{25 - 24}}{2} = \\frac{-5 \\pm \\sqrt{1}}{2}",
          explanation:
            "The discriminant is b^2 - 4ac = 25 - 24 = 1. Since 1 is positive there are two real roots, and sqrt(1) = 1.",
        },
        {
          stepNumber: 3,
          description: "Work out the two roots.",
          workingLatex: "x = \\frac{-5 + 1}{2} = -2 \\quad \\text{or} \\quad x = \\frac{-5 - 1}{2} = -3",
          explanation:
            "Take the + sign for one root and the - sign for the other. This gives x = -2 or x = -3.",
        },
      ],
      finalAnswer: "\\(x = -2\\) or \\(x = -3\\)",
      canonicalAnswer: "x=-2 or x=-3",
    },
  },
  {
    id: "ga40-002",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve \\(x^2 + 3x - 10 = 0\\) using the quadratic formula.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quadratic formula", "identify a b c", "solve quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off a, b and c, keeping the sign of c.",
          workingLatex: "a = 1, \\quad b = 3, \\quad c = -10",
          explanation:
            "The constant term is -10, so c is negative: c = -10. Carrying that minus sign is essential.",
        },
        {
          stepNumber: 2,
          description: "Substitute and evaluate the discriminant.",
          workingLatex: "x = \\frac{-3 \\pm \\sqrt{3^{2} - 4 \\cdot 1 \\cdot (-10)}}{2 \\cdot 1} = \\frac{-3 \\pm \\sqrt{9 + 40}}{2} = \\frac{-3 \\pm \\sqrt{49}}{2}",
          explanation:
            "Because c = -10, the term -4ac = -4(1)(-10) = +40, so b^2 - 4ac = 9 + 40 = 49. sqrt(49) = 7.",
        },
        {
          stepNumber: 3,
          description: "Compute the two roots.",
          workingLatex: "x = \\frac{-3 + 7}{2} = 2 \\quad \\text{or} \\quad x = \\frac{-3 - 7}{2} = -5",
          explanation:
            "Using +7 gives 4/2 = 2; using -7 gives -10/2 = -5.",
        },
      ],
      finalAnswer: "\\(x = 2\\) or \\(x = -5\\)",
      canonicalAnswer: "x=2 or x=-5",
    },
  },
  {
    id: "ga40-003",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve \\(2x^2 - 7x + 3 = 0\\) using the quadratic formula.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quadratic formula", "identify a b c", "solve quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c, noting b is negative.",
          workingLatex: "a = 2, \\quad b = -7, \\quad c = 3",
          explanation:
            "The coefficient of x is -7, so b = -7. The leading coefficient is a = 2.",
        },
        {
          stepNumber: 2,
          description: "Substitute. Be careful: -b = -(-7) = +7 and b^2 = (-7)^2 = 49.",
          workingLatex: "x = \\frac{-(-7) \\pm \\sqrt{(-7)^{2} - 4 \\cdot 2 \\cdot 3}}{2 \\cdot 2} = \\frac{7 \\pm \\sqrt{49 - 24}}{4} = \\frac{7 \\pm \\sqrt{25}}{4}",
          explanation:
            "Two sign points: -b becomes +7, and squaring -7 gives +49 (a square is always positive). The discriminant is 49 - 24 = 25, and sqrt(25) = 5.",
        },
        {
          stepNumber: 3,
          description: "Work out the two roots.",
          workingLatex: "x = \\frac{7 + 5}{4} = 3 \\quad \\text{or} \\quad x = \\frac{7 - 5}{4} = \\frac{1}{2}",
          explanation:
            "12/4 = 3 and 2/4 = 1/2.",
        },
      ],
      finalAnswer: "\\(x = 3\\) or \\(x = \\dfrac{1}{2}\\)",
      canonicalAnswer: "x=3 or x=1/2",
    },
  },
  {
    id: "ga40-004",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve \\(x^2 - 6x + 8 = 0\\) using the quadratic formula.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quadratic formula", "identify a b c", "solve quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off a, b and c.",
          workingLatex: "a = 1, \\quad b = -6, \\quad c = 8",
          explanation:
            "The x-term is -6x, so b = -6; the constant is +8.",
        },
        {
          stepNumber: 2,
          description: "Substitute, using -b = +6 and (-6)^2 = 36.",
          workingLatex: "x = \\frac{6 \\pm \\sqrt{(-6)^{2} - 4 \\cdot 1 \\cdot 8}}{2 \\cdot 1} = \\frac{6 \\pm \\sqrt{36 - 32}}{2} = \\frac{6 \\pm \\sqrt{4}}{2}",
          explanation:
            "Squaring the negative b gives +36, and the discriminant is 36 - 32 = 4. sqrt(4) = 2.",
        },
        {
          stepNumber: 3,
          description: "Compute the roots.",
          workingLatex: "x = \\frac{6 + 2}{2} = 4 \\quad \\text{or} \\quad x = \\frac{6 - 2}{2} = 2",
          explanation:
            "8/2 = 4 and 4/2 = 2.",
        },
      ],
      finalAnswer: "\\(x = 4\\) or \\(x = 2\\)",
      canonicalAnswer: "x=4 or x=2",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga40-005",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 + 7x + 2 = 0\\), giving your answers to 2 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "decimal answers", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 1, \\quad b = 7, \\quad c = 2",
          explanation:
            "All terms are positive, so a = 1, b = 7, c = 2.",
        },
        {
          stepNumber: 2,
          description: "Write the quadratic formula.",
          workingLatex: "x = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}",
          explanation:
            "State the formula before substituting so each value goes in the right place.",
        },
        {
          stepNumber: 3,
          description: "Substitute the values.",
          workingLatex: "x = \\frac{-7 \\pm \\sqrt{7^{2} - 4 \\cdot 1 \\cdot 2}}{2 \\cdot 1}",
          explanation:
            "Replace b with 7, a with 1 and c with 2. Note -b = -7.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 49 - 8 = 41",
          explanation:
            "49 - 8 = 41, which is positive, so there are two real (irrational) roots. sqrt(41) does not simplify, so we will use a decimal.",
        },
        {
          stepNumber: 5,
          description: "Substitute the discriminant back.",
          workingLatex: "x = \\frac{-7 \\pm \\sqrt{41}}{2}, \\qquad \\sqrt{41} = 6.4031\\ldots",
          explanation:
            "Evaluate sqrt(41) to enough figures (here 4 decimal places) so the final rounding to 2 d.p. is reliable.",
        },
        {
          stepNumber: 6,
          description: "Compute both roots and round to 2 d.p.",
          workingLatex: "x = \\frac{-7 + 6.4031}{2} = -0.298\\ldots, \\quad x = \\frac{-7 - 6.4031}{2} = -6.701\\ldots",
          explanation:
            "The + branch gives -0.5969.../2... = -0.30 (3 d.p. -0.298 rounds to -0.30); the - branch gives -6.70. Round each to 2 d.p.",
        },
      ],
      finalAnswer: "\\(x = -0.30\\) or \\(x = -6.70\\)",
      canonicalAnswer: "x=-0.30 or x=-6.70",
    },
  },
  {
    id: "ga40-006",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(2x^2 + 5x - 4 = 0\\), giving your answers to 2 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "decimal answers", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c, keeping the sign of c.",
          workingLatex: "a = 2, \\quad b = 5, \\quad c = -4",
          explanation:
            "The constant is -4, so c = -4. The leading coefficient is a = 2.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the formula.",
          workingLatex: "x = \\frac{-5 \\pm \\sqrt{5^{2} - 4 \\cdot 2 \\cdot (-4)}}{2 \\cdot 2}",
          explanation:
            "Substitute a = 2, b = 5, c = -4. Take care with the double negative inside the root.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 25 - 4 \\cdot 2 \\cdot (-4) = 25 + 32 = 57",
          explanation:
            "Because c is negative, -4ac = -8(-4) = +32, so the discriminant is 25 + 32 = 57 (positive: two real roots).",
        },
        {
          stepNumber: 4,
          description: "Substitute the discriminant back.",
          workingLatex: "x = \\frac{-5 \\pm \\sqrt{57}}{4}, \\qquad \\sqrt{57} = 7.5498\\ldots",
          explanation:
            "57 is not a perfect square and has no square factor, so it stays under the root; evaluate it as a decimal.",
        },
        {
          stepNumber: 5,
          description: "Compute the two roots.",
          workingLatex: "x = \\frac{-5 + 7.5498}{4} = 0.637\\ldots, \\quad x = \\frac{-5 - 7.5498}{4} = -3.137\\ldots",
          explanation:
            "The + branch gives 2.5498/4 = 0.6375; the - branch gives -12.5498/4 = -3.1375.",
        },
        {
          stepNumber: 6,
          description: "Round to 2 decimal places.",
          workingLatex: "x = 0.64 \\quad \\text{or} \\quad x = -3.14",
          explanation:
            "0.6375 rounds to 0.64 and -3.1375 rounds to -3.14.",
        },
      ],
      finalAnswer: "\\(x = 0.64\\) or \\(x = -3.14\\)",
      canonicalAnswer: "x=0.64 or x=-3.14",
    },
  },
  {
    id: "ga40-007",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(3x^2 - 8x + 2 = 0\\), giving your answers to 2 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "decimal answers", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 3, \\quad b = -8, \\quad c = 2",
          explanation:
            "The x-term is -8x, so b = -8.",
        },
        {
          stepNumber: 2,
          description: "Substitute, using -b = +8 and (-8)^2 = 64.",
          workingLatex: "x = \\frac{-(-8) \\pm \\sqrt{(-8)^{2} - 4 \\cdot 3 \\cdot 2}}{2 \\cdot 3} = \\frac{8 \\pm \\sqrt{64 - 24}}{6}",
          explanation:
            "-b = +8, and squaring -8 gives +64. These two sign points are where marks are most often lost.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 64 - 24 = 40 > 0",
          explanation:
            "40 is positive, so there are two real roots. sqrt(40) = 2 sqrt(10) but a decimal answer is asked for.",
        },
        {
          stepNumber: 4,
          description: "Substitute the root value.",
          workingLatex: "x = \\frac{8 \\pm \\sqrt{40}}{6}, \\qquad \\sqrt{40} = 6.3246\\ldots",
          explanation:
            "Evaluate sqrt(40) to several decimal places before dividing.",
        },
        {
          stepNumber: 5,
          description: "Compute both roots.",
          workingLatex: "x = \\frac{8 + 6.3246}{6} = 2.387\\ldots, \\quad x = \\frac{8 - 6.3246}{6} = 0.279\\ldots",
          explanation:
            "14.3246/6 = 2.3874 and 1.6754/6 = 0.2792.",
        },
        {
          stepNumber: 6,
          description: "Round to 2 decimal places.",
          workingLatex: "x = 2.39 \\quad \\text{or} \\quad x = 0.28",
          explanation:
            "2.3874 rounds to 2.39 and 0.2792 rounds to 0.28.",
        },
      ],
      finalAnswer: "\\(x = 2.39\\) or \\(x = 0.28\\)",
      canonicalAnswer: "x=2.39 or x=0.28",
    },
  },
  {
    id: "ga40-008",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 - 4x - 6 = 0\\), giving your answers to 2 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "decimal answers", "2 decimal places", "negative coefficients"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c, both b and c negative.",
          workingLatex: "a = 1, \\quad b = -4, \\quad c = -6",
          explanation:
            "b = -4 and c = -6. Both signs must be carried through.",
        },
        {
          stepNumber: 2,
          description: "Substitute, with -b = +4 and (-4)^2 = 16.",
          workingLatex: "x = \\frac{4 \\pm \\sqrt{(-4)^{2} - 4 \\cdot 1 \\cdot (-6)}}{2 \\cdot 1}",
          explanation:
            "-b = -(-4) = +4. Inside the root, (-4)^2 = 16 and -4ac = -4(1)(-6) = +24.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 16 + 24 = 40 > 0",
          explanation:
            "16 + 24 = 40, positive, so two real roots.",
        },
        {
          stepNumber: 4,
          description: "Substitute the root value.",
          workingLatex: "x = \\frac{4 \\pm \\sqrt{40}}{2}, \\qquad \\sqrt{40} = 6.3246\\ldots",
          explanation:
            "Use a decimal value for sqrt(40).",
        },
        {
          stepNumber: 5,
          description: "Compute the roots and round.",
          workingLatex: "x = \\frac{4 + 6.3246}{2} = 5.162\\ldots, \\quad x = \\frac{4 - 6.3246}{2} = -1.162\\ldots",
          explanation:
            "10.3246/2 = 5.1623 -> 5.16; -2.3246/2 = -1.1623 -> -1.16.",
        },
      ],
      finalAnswer: "\\(x = 5.16\\) or \\(x = -1.16\\)",
      canonicalAnswer: "x=5.16 or x=-1.16",
    },
  },
  {
    id: "ga40-009",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(x^2 - 6x + 7 = 0\\), giving your answers in the form \\(p \\pm \\sqrt{q}\\) where \\(p\\) and \\(q\\) are integers.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "exact surd answer", "simplify surd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 1, \\quad b = -6, \\quad c = 7",
          explanation:
            "b = -6, c = 7, a = 1.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the formula.",
          workingLatex: "x = \\frac{6 \\pm \\sqrt{(-6)^{2} - 4 \\cdot 1 \\cdot 7}}{2 \\cdot 1}",
          explanation:
            "-b = +6, and (-6)^2 = 36.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 36 - 28 = 8",
          explanation:
            "36 - 28 = 8, positive so two real roots.",
        },
        {
          stepNumber: 4,
          description: "Simplify the surd sqrt(8).",
          workingLatex: "\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}",
          explanation:
            "8 has the square factor 4, so sqrt(8) = sqrt(4) sqrt(2) = 2 sqrt(2).",
        },
        {
          stepNumber: 5,
          description: "Substitute and simplify the whole expression.",
          workingLatex: "x = \\frac{6 \\pm 2\\sqrt{2}}{2} = \\frac{6}{2} \\pm \\frac{2\\sqrt{2}}{2} = 3 \\pm \\sqrt{2}",
          explanation:
            "Divide each part of the numerator by 2: 6/2 = 3 and 2 sqrt(2)/2 = sqrt(2). This gives the required form p ± sqrt(q) with p = 3, q = 2.",
        },
      ],
      finalAnswer: "\\(x = 3 \\pm \\sqrt{2}\\)",
      canonicalAnswer: "x=3+sqrt(2) or x=3-sqrt(2)",
    },
  },
  {
    id: "ga40-010",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(x^2 + 4x - 1 = 0\\), giving your answers as exact, simplified surds.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "exact surd answer", "simplify surd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 1, \\quad b = 4, \\quad c = -1",
          explanation:
            "b = 4, c = -1.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the formula.",
          workingLatex: "x = \\frac{-4 \\pm \\sqrt{4^{2} - 4 \\cdot 1 \\cdot (-1)}}{2 \\cdot 1}",
          explanation:
            "-b = -4; -4ac = -4(1)(-1) = +4.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 16 + 4 = 20",
          explanation:
            "16 + 4 = 20.",
        },
        {
          stepNumber: 4,
          description: "Simplify sqrt(20).",
          workingLatex: "\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}",
          explanation:
            "20 = 4 × 5, and 4 is a perfect square, so sqrt(20) = 2 sqrt(5).",
        },
        {
          stepNumber: 5,
          description: "Simplify the full expression.",
          workingLatex: "x = \\frac{-4 \\pm 2\\sqrt{5}}{2} = -2 \\pm \\sqrt{5}",
          explanation:
            "Divide numerator by 2: -4/2 = -2 and 2 sqrt(5)/2 = sqrt(5). So x = -2 ± sqrt(5).",
        },
      ],
      finalAnswer: "\\(x = -2 \\pm \\sqrt{5}\\)",
      canonicalAnswer: "x=-2+sqrt(5) or x=-2-sqrt(5)",
    },
  },
  {
    id: "ga40-011",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(2x^2 - 4x - 3 = 0\\), giving your answers in the form \\(\\dfrac{p \\pm \\sqrt{q}}{r}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "exact surd answer", "simplify surd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 2, \\quad b = -4, \\quad c = -3",
          explanation:
            "b = -4, c = -3, a = 2.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the formula.",
          workingLatex: "x = \\frac{-(-4) \\pm \\sqrt{(-4)^{2} - 4 \\cdot 2 \\cdot (-3)}}{2 \\cdot 2} = \\frac{4 \\pm \\sqrt{16 + 24}}{4}",
          explanation:
            "-b = +4; (-4)^2 = 16; -4ac = -8(-3) = +24.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 16 + 24 = 40",
          explanation:
            "16 + 24 = 40.",
        },
        {
          stepNumber: 4,
          description: "Simplify sqrt(40).",
          workingLatex: "\\sqrt{40} = \\sqrt{4 \\cdot 10} = 2\\sqrt{10}",
          explanation:
            "40 = 4 × 10, so sqrt(40) = 2 sqrt(10).",
        },
        {
          stepNumber: 5,
          description: "Simplify by dividing numerator and denominator by 2.",
          workingLatex: "x = \\frac{4 \\pm 2\\sqrt{10}}{4} = \\frac{2 \\pm \\sqrt{10}}{2}",
          explanation:
            "Every part has a factor of 2: 4/2 = 2, 2 sqrt(10)/2 = sqrt(10), 4/2 = 2. The simplest form is (2 ± sqrt(10))/2.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{2 \\pm \\sqrt{10}}{2}\\)",
      canonicalAnswer: "x=(2+sqrt(10))/2 or x=(2-sqrt(10))/2",
    },
  },
  {
    id: "ga40-012",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Rearrange and solve \\(x^2 + 5x = 3\\), giving your answers to 2 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "rearrange to zero", "decimal answers", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange to the form ax^2 + bx + c = 0.",
          workingLatex: "x^2 + 5x = 3 \\Rightarrow x^2 + 5x - 3 = 0",
          explanation:
            "Subtract 3 from both sides so that one side is zero. You cannot read off a, b, c until the equation equals zero.",
        },
        {
          stepNumber: 2,
          description: "Identify a, b and c.",
          workingLatex: "a = 1, \\quad b = 5, \\quad c = -3",
          explanation:
            "After rearranging, the constant is -3, so c = -3.",
        },
        {
          stepNumber: 3,
          description: "Substitute into the formula.",
          workingLatex: "x = \\frac{-5 \\pm \\sqrt{5^{2} - 4 \\cdot 1 \\cdot (-3)}}{2 \\cdot 1}",
          explanation:
            "Substitute the values; -4ac = -4(1)(-3) = +12.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 25 + 12 = 37 > 0",
          explanation:
            "25 + 12 = 37, positive, so two real roots.",
        },
        {
          stepNumber: 5,
          description: "Substitute the root value and compute.",
          workingLatex: "x = \\frac{-5 \\pm \\sqrt{37}}{2}, \\qquad \\sqrt{37} = 6.0828\\ldots",
          explanation:
            "Evaluate sqrt(37) as a decimal.",
        },
        {
          stepNumber: 6,
          description: "Compute both roots and round.",
          workingLatex: "x = \\frac{-5 + 6.0828}{2} = 0.541\\ldots, \\quad x = \\frac{-5 - 6.0828}{2} = -5.541\\ldots",
          explanation:
            "1.0828/2 = 0.5414 -> 0.54; -11.0828/2 = -5.5414 -> -5.54.",
        },
      ],
      finalAnswer: "\\(x = 0.54\\) or \\(x = -5.54\\)",
      canonicalAnswer: "x=0.54 or x=-5.54",
    },
  },
  {
    id: "ga40-013",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Rearrange and solve \\(3x^2 = 2x + 5\\) using the quadratic formula.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "rearrange to zero", "solve quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Bring all terms to one side.",
          workingLatex: "3x^2 = 2x + 5 \\Rightarrow 3x^2 - 2x - 5 = 0",
          explanation:
            "Subtract 2x and 5 from both sides to set the equation to zero.",
        },
        {
          stepNumber: 2,
          description: "Identify a, b and c.",
          workingLatex: "a = 3, \\quad b = -2, \\quad c = -5",
          explanation:
            "b = -2, c = -5.",
        },
        {
          stepNumber: 3,
          description: "Substitute, with -b = +2 and (-2)^2 = 4.",
          workingLatex: "x = \\frac{2 \\pm \\sqrt{(-2)^{2} - 4 \\cdot 3 \\cdot (-5)}}{2 \\cdot 3} = \\frac{2 \\pm \\sqrt{4 + 60}}{6}",
          explanation:
            "-4ac = -12(-5) = +60, so the discriminant is 4 + 60 = 64.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the discriminant and its root.",
          workingLatex: "b^{2} - 4ac = 64, \\qquad \\sqrt{64} = 8",
          explanation:
            "64 is a perfect square, so the roots are rational.",
        },
        {
          stepNumber: 5,
          description: "Compute the two roots.",
          workingLatex: "x = \\frac{2 + 8}{6} = \\frac{10}{6} = \\frac{5}{3} \\quad \\text{or} \\quad x = \\frac{2 - 8}{6} = \\frac{-6}{6} = -1",
          explanation:
            "10/6 simplifies to 5/3; -6/6 = -1.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{5}{3}\\) or \\(x = -1\\)",
      canonicalAnswer: "x=5/3 or x=-1",
    },
  },
  {
    id: "ga40-014",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Work out the value of the discriminant \\(b^2 - 4ac\\) for \\(2x^2 - 5x + 4 = 0\\), and hence state the number of real roots.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "discriminant", "number of roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 2, \\quad b = -5, \\quad c = 4",
          explanation:
            "b = -5, so squaring it later gives a positive value.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the discriminant b^2 - 4ac.",
          workingLatex: "b^{2} - 4ac = (-5)^{2} - 4 \\cdot 2 \\cdot 4",
          explanation:
            "Use (-5)^2 = 25 (a square is positive) and 4ac = 4(2)(4) = 32.",
        },
        {
          stepNumber: 3,
          description: "Evaluate.",
          workingLatex: "b^{2} - 4ac = 25 - 32 = -7",
          explanation:
            "25 - 32 = -7, a negative discriminant.",
        },
        {
          stepNumber: 4,
          description: "Interpret the sign of the discriminant.",
          workingLatex: "b^{2} - 4ac = -7 < 0 \\Rightarrow \\text{no real roots}",
          explanation:
            "A negative discriminant means the square root has no real value, so the equation has no real roots (the parabola does not cross the x-axis).",
        },
      ],
      finalAnswer: "\\(b^2 - 4ac = -7\\); no real roots",
      canonicalAnswer: "-7",
    },
  },
  {
    id: "ga40-015",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Use the discriminant to state how many real roots \\(x^2 - 6x + 9 = 0\\) has.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "discriminant", "number of roots", "repeated root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 1, \\quad b = -6, \\quad c = 9",
          explanation:
            "b = -6, c = 9.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the discriminant.",
          workingLatex: "b^{2} - 4ac = (-6)^{2} - 4 \\cdot 1 \\cdot 9",
          explanation:
            "(-6)^2 = 36 and 4ac = 36.",
        },
        {
          stepNumber: 3,
          description: "Evaluate.",
          workingLatex: "b^{2} - 4ac = 36 - 36 = 0",
          explanation:
            "The discriminant is exactly 0.",
        },
        {
          stepNumber: 4,
          description: "Interpret a zero discriminant.",
          workingLatex: "b^{2} - 4ac = 0 \\Rightarrow \\text{one repeated real root}",
          explanation:
            "When the discriminant is zero the ± term vanishes, giving a single (repeated) root. Here x = -b/2a = 6/2 = 3, the point where the curve just touches the x-axis.",
        },
      ],
      finalAnswer: "One repeated real root (discriminant \\(= 0\\))",
      canonicalAnswer: "one repeated root",
    },
  },
  {
    id: "ga40-016",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Use the discriminant to determine the number of real roots of \\(2x^2 + 3x - 5 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "discriminant", "number of roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 2, \\quad b = 3, \\quad c = -5",
          explanation:
            "c = -5 is negative.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the discriminant.",
          workingLatex: "b^{2} - 4ac = 3^{2} - 4 \\cdot 2 \\cdot (-5)",
          explanation:
            "Note -4ac = -8(-5) = +40, so this term is positive.",
        },
        {
          stepNumber: 3,
          description: "Evaluate.",
          workingLatex: "b^{2} - 4ac = 9 + 40 = 49 > 0",
          explanation:
            "9 + 40 = 49, which is positive.",
        },
        {
          stepNumber: 4,
          description: "Interpret the sign.",
          workingLatex: "b^{2} - 4ac > 0 \\Rightarrow \\text{two distinct real roots}",
          explanation:
            "A positive discriminant means two distinct real roots. (Here 49 is also a perfect square, so the roots are rational.)",
        },
      ],
      finalAnswer: "Two distinct real roots (discriminant \\(= 49 > 0\\))",
      canonicalAnswer: "two distinct real roots",
    },
  },
  {
    id: "ga40-017",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(5x^2 + 9x + 2 = 0\\), giving your answers to 2 decimal places.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "decimal answers", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 5, \\quad b = 9, \\quad c = 2",
          explanation:
            "All positive: a = 5, b = 9, c = 2.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the formula.",
          workingLatex: "x = \\frac{-9 \\pm \\sqrt{9^{2} - 4 \\cdot 5 \\cdot 2}}{2 \\cdot 5}",
          explanation:
            "-b = -9; 4ac = 40; denominator 2a = 10.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 81 - 40 = 41 > 0",
          explanation:
            "81 - 40 = 41, positive, two real roots.",
        },
        {
          stepNumber: 4,
          description: "Substitute the root value.",
          workingLatex: "x = \\frac{-9 \\pm \\sqrt{41}}{10}, \\qquad \\sqrt{41} = 6.4031\\ldots",
          explanation:
            "Use a decimal value for sqrt(41).",
        },
        {
          stepNumber: 5,
          description: "Compute both roots and round.",
          workingLatex: "x = \\frac{-9 + 6.4031}{10} = -0.259\\ldots, \\quad x = \\frac{-9 - 6.4031}{10} = -1.540\\ldots",
          explanation:
            "-2.5969/10 = -0.2597 -> -0.26; -15.4031/10 = -1.5403 -> -1.54.",
        },
      ],
      finalAnswer: "\\(x = -0.26\\) or \\(x = -1.54\\)",
      canonicalAnswer: "x=-0.26 or x=-1.54",
    },
  },
  {
    id: "ga40-018",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Standard",
    answerType: "set",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(x^2 - 2x - 4 = 0\\), giving your answers as exact, simplified surds.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "exact surd answer", "simplify surd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 1, \\quad b = -2, \\quad c = -4",
          explanation:
            "b = -2, c = -4.",
        },
        {
          stepNumber: 2,
          description: "Substitute, with -b = +2.",
          workingLatex: "x = \\frac{2 \\pm \\sqrt{(-2)^{2} - 4 \\cdot 1 \\cdot (-4)}}{2 \\cdot 1} = \\frac{2 \\pm \\sqrt{4 + 16}}{2}",
          explanation:
            "(-2)^2 = 4 and -4ac = -4(1)(-4) = +16.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 20",
          explanation:
            "4 + 16 = 20.",
        },
        {
          stepNumber: 4,
          description: "Simplify sqrt(20).",
          workingLatex: "\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}",
          explanation:
            "20 = 4 × 5, so sqrt(20) = 2 sqrt(5).",
        },
        {
          stepNumber: 5,
          description: "Simplify the expression.",
          workingLatex: "x = \\frac{2 \\pm 2\\sqrt{5}}{2} = 1 \\pm \\sqrt{5}",
          explanation:
            "Divide numerator by 2: 2/2 = 1, 2 sqrt(5)/2 = sqrt(5). So x = 1 ± sqrt(5).",
        },
      ],
      finalAnswer: "\\(x = 1 \\pm \\sqrt{5}\\)",
      canonicalAnswer: "x=1+sqrt(5) or x=1-sqrt(5)",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga40-019",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Rearrange and solve \\(\\dfrac{2x + 1}{x - 3} = x\\) using the quadratic formula, giving your answers to 2 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "rearrange to zero", "algebraic fraction", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply both sides by (x - 3) to clear the fraction.",
          workingLatex: "\\frac{2x + 1}{x - 3} = x \\Rightarrow 2x + 1 = x(x - 3)",
          explanation:
            "Multiplying by the denominator removes the fraction. (We need x ≠ 3 for this to be valid; check the final roots are not 3.)",
        },
        {
          stepNumber: 2,
          description: "Expand the right-hand side.",
          workingLatex: "2x + 1 = x^2 - 3x",
          explanation:
            "x(x - 3) = x^2 - 3x.",
        },
        {
          stepNumber: 3,
          description: "Rearrange to the form ax^2 + bx + c = 0.",
          workingLatex: "0 = x^2 - 3x - 2x - 1 \\Rightarrow x^2 - 5x - 1 = 0",
          explanation:
            "Bring 2x + 1 across: subtract 2x and 1 from both sides. -3x - 2x = -5x.",
        },
        {
          stepNumber: 4,
          description: "Identify a, b, c and substitute.",
          workingLatex: "a = 1, b = -5, c = -1; \\quad x = \\frac{5 \\pm \\sqrt{(-5)^{2} - 4 \\cdot 1 \\cdot (-1)}}{2}",
          explanation:
            "-b = +5; (-5)^2 = 25; -4ac = -4(1)(-1) = +4.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 25 + 4 = 29 > 0",
          explanation:
            "25 + 4 = 29, positive, so two real roots.",
        },
        {
          stepNumber: 6,
          description: "Compute the roots and round.",
          workingLatex: "x = \\frac{5 \\pm \\sqrt{29}}{2}, \\; \\sqrt{29} = 5.3852\\ldots \\Rightarrow x = 5.19 \\text{ or } x = -0.19",
          explanation:
            "(5 + 5.3852)/2 = 5.1926 -> 5.19; (5 - 5.3852)/2 = -0.1926 -> -0.19. Neither equals 3, so both are valid.",
        },
      ],
      finalAnswer: "\\(x = 5.19\\) or \\(x = -0.19\\)",
      canonicalAnswer: "x=5.19 or x=-0.19",
    },
  },
  {
    id: "ga40-020",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A rectangle has length \\((x + 3)\\) cm and width \\(x\\) cm. Its area is \\(20\\,\\text{cm}^2\\). Use the quadratic formula to find \\(x\\), giving your answer to 2 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "forming a quadratic", "area", "reject negative root", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form an equation for the area.",
          workingLatex: "x(x + 3) = 20",
          explanation:
            "Area of a rectangle = length × width = (x + 3) × x, and this equals 20.",
        },
        {
          stepNumber: 2,
          description: "Expand and rearrange to = 0.",
          workingLatex: "x^2 + 3x = 20 \\Rightarrow x^2 + 3x - 20 = 0",
          explanation:
            "Expand the bracket, then subtract 20 from both sides to set the equation to zero.",
        },
        {
          stepNumber: 3,
          description: "Identify a, b, c and substitute.",
          workingLatex: "a = 1, b = 3, c = -20; \\quad x = \\frac{-3 \\pm \\sqrt{3^{2} - 4 \\cdot 1 \\cdot (-20)}}{2}",
          explanation:
            "-4ac = -4(1)(-20) = +80.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 9 + 80 = 89 > 0",
          explanation:
            "9 + 80 = 89, positive, two real roots.",
        },
        {
          stepNumber: 5,
          description: "Compute both roots.",
          workingLatex: "x = \\frac{-3 \\pm \\sqrt{89}}{2}, \\; \\sqrt{89} = 9.4340\\ldots \\Rightarrow x = 3.217\\ldots \\text{ or } x = -6.217\\ldots",
          explanation:
            "(-3 + 9.4340)/2 = 3.2170; (-3 - 9.4340)/2 = -6.2170.",
        },
        {
          stepNumber: 6,
          description: "Reject the negative root (a width cannot be negative).",
          workingLatex: "x > 0 \\Rightarrow x = 3.22",
          explanation:
            "x is a width, so it must be positive. Reject -6.22 and take x = 3.22 (2 d.p.).",
        },
      ],
      finalAnswer: "\\(x = 3.22\\)",
      canonicalAnswer: "3.22",
    },
  },
  {
    id: "ga40-021",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The quadratic equation \\(x^2 + kx + 9 = 0\\) has a repeated root. Find the possible values of \\(k\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "discriminant", "repeated root", "discriminant condition", "find k"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the condition for a repeated root.",
          workingLatex: "b^{2} - 4ac = 0",
          explanation:
            "A repeated (equal) root occurs exactly when the discriminant is zero.",
        },
        {
          stepNumber: 2,
          description: "Identify a, b, c in terms of k.",
          workingLatex: "a = 1, \\quad b = k, \\quad c = 9",
          explanation:
            "Here b is the unknown k, a = 1 and c = 9.",
        },
        {
          stepNumber: 3,
          description: "Form the discriminant equation.",
          workingLatex: "k^{2} - 4 \\cdot 1 \\cdot 9 = 0 \\Rightarrow k^{2} - 36 = 0",
          explanation:
            "Substitute into b^2 - 4ac = 0. 4ac = 36.",
        },
        {
          stepNumber: 4,
          description: "Solve for k.",
          workingLatex: "k^{2} = 36 \\Rightarrow k = \\pm 6",
          explanation:
            "Take the square root of both sides, remembering both the positive and negative root: k = 6 or k = -6.",
        },
        {
          stepNumber: 5,
          description: "Check.",
          workingLatex: "k = 6: \\; x^2 + 6x + 9 = (x+3)^2; \\quad k = -6: \\; x^2 - 6x + 9 = (x-3)^2",
          explanation:
            "Both give a perfect square, confirming a repeated root in each case.",
        },
      ],
      finalAnswer: "\\(k = 6\\) or \\(k = -6\\)",
      canonicalAnswer: "k=6 or k=-6",
    },
  },
  {
    id: "ga40-022",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Find the range of values of \\(k\\) for which \\(x^2 + kx + 4 = 0\\) has two distinct real roots.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "discriminant", "discriminant condition", "inequality", "find k"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the condition for two distinct real roots.",
          workingLatex: "b^{2} - 4ac > 0",
          explanation:
            "Two distinct real roots require a strictly positive discriminant.",
        },
        {
          stepNumber: 2,
          description: "Identify a, b, c and form the inequality.",
          workingLatex: "a = 1, b = k, c = 4 \\Rightarrow k^{2} - 16 > 0",
          explanation:
            "Substitute into b^2 - 4ac > 0; 4ac = 16.",
        },
        {
          stepNumber: 3,
          description: "Factorise the difference of two squares.",
          workingLatex: "k^{2} - 16 > 0 \\Rightarrow (k - 4)(k + 4) > 0",
          explanation:
            "k^2 - 16 = (k - 4)(k + 4). The critical values are k = 4 and k = -4.",
        },
        {
          stepNumber: 4,
          description: "Solve the quadratic inequality.",
          workingLatex: "k < -4 \\quad \\text{or} \\quad k > 4",
          explanation:
            "An upward parabola is positive outside its roots, so the inequality holds for k < -4 or k > 4. (At k = ±4 the discriminant is 0, a repeated root, which is excluded.)",
        },
      ],
      finalAnswer: "\\(k < -4\\) or \\(k > 4\\)",
      canonicalAnswer: "k<-4 or k>4",
    },
  },
  {
    id: "ga40-023",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "The equation \\(2x^2 - 4x + k = 0\\) has no real roots. Find the range of values of \\(k\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "discriminant", "discriminant condition", "no real roots", "inequality", "find k"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the condition for no real roots.",
          workingLatex: "b^{2} - 4ac < 0",
          explanation:
            "No real roots means a negative discriminant.",
        },
        {
          stepNumber: 2,
          description: "Identify a, b, c.",
          workingLatex: "a = 2, \\quad b = -4, \\quad c = k",
          explanation:
            "The unknown is the constant c = k.",
        },
        {
          stepNumber: 3,
          description: "Form the inequality.",
          workingLatex: "(-4)^{2} - 4 \\cdot 2 \\cdot k < 0 \\Rightarrow 16 - 8k < 0",
          explanation:
            "(-4)^2 = 16 and 4ac = 8k.",
        },
        {
          stepNumber: 4,
          description: "Solve for k.",
          workingLatex: "16 < 8k \\Rightarrow k > 2",
          explanation:
            "Add 8k to both sides, then divide by 8. The inequality direction is preserved because 8 is positive.",
        },
        {
          stepNumber: 5,
          description: "Sanity check with a value.",
          workingLatex: "k = 3: \\; 16 - 24 = -8 < 0 \\checkmark",
          explanation:
            "For k = 3 the discriminant is -8 < 0, confirming no real roots when k > 2.",
        },
      ],
      finalAnswer: "\\(k > 2\\)",
      canonicalAnswer: "k>2",
    },
  },
  {
    id: "ga40-024",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "set",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(3x^2 - 6x + 1 = 0\\), giving your answers in the form \\(\\dfrac{p \\pm \\sqrt{q}}{r}\\) in fully simplified form.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "exact surd answer", "simplify surd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b and c.",
          workingLatex: "a = 3, \\quad b = -6, \\quad c = 1",
          explanation:
            "b = -6, c = 1.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the formula.",
          workingLatex: "x = \\frac{6 \\pm \\sqrt{(-6)^{2} - 4 \\cdot 3 \\cdot 1}}{2 \\cdot 3} = \\frac{6 \\pm \\sqrt{36 - 12}}{6}",
          explanation:
            "-b = +6, (-6)^2 = 36, 4ac = 12, denominator 2a = 6.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 24",
          explanation:
            "36 - 12 = 24.",
        },
        {
          stepNumber: 4,
          description: "Simplify sqrt(24).",
          workingLatex: "\\sqrt{24} = \\sqrt{4 \\cdot 6} = 2\\sqrt{6}",
          explanation:
            "24 = 4 × 6, so sqrt(24) = 2 sqrt(6).",
        },
        {
          stepNumber: 5,
          description: "Simplify by dividing through by the common factor 2.",
          workingLatex: "x = \\frac{6 \\pm 2\\sqrt{6}}{6} = \\frac{3 \\pm \\sqrt{6}}{3}",
          explanation:
            "Divide numerator and denominator by 2: 6/2 = 3, 2 sqrt(6)/2 = sqrt(6), 6/2 = 3. The fully simplified form is (3 ± sqrt(6))/3.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{3 \\pm \\sqrt{6}}{3}\\)",
      canonicalAnswer: "x=(3+sqrt(6))/3 or x=(3-sqrt(6))/3",
    },
  },
  {
    id: "ga40-025",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A right-angled triangle has its two shorter sides of length \\(x\\) cm and \\((x + 2)\\) cm, and a hypotenuse of \\(7\\) cm. Use the quadratic formula to find \\(x\\) to 2 decimal places.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "forming a quadratic", "Pythagoras", "reject negative root", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply Pythagoras' theorem.",
          workingLatex: "x^2 + (x + 2)^2 = 7^2",
          explanation:
            "The two shorter sides are the legs, so the sum of their squares equals the square of the hypotenuse (7).",
        },
        {
          stepNumber: 2,
          description: "Expand (x + 2)^2.",
          workingLatex: "x^2 + x^2 + 4x + 4 = 49",
          explanation:
            "(x + 2)^2 = x^2 + 4x + 4. And 7^2 = 49.",
        },
        {
          stepNumber: 3,
          description: "Collect terms and rearrange to = 0.",
          workingLatex: "2x^2 + 4x + 4 = 49 \\Rightarrow 2x^2 + 4x - 45 = 0",
          explanation:
            "Add the two x^2 terms, then subtract 49 from both sides.",
        },
        {
          stepNumber: 4,
          description: "Identify a, b, c and substitute.",
          workingLatex: "a = 2, b = 4, c = -45; \\quad x = \\frac{-4 \\pm \\sqrt{4^{2} - 4 \\cdot 2 \\cdot (-45)}}{2 \\cdot 2}",
          explanation:
            "-4ac = -8(-45) = +360.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 16 + 360 = 376 > 0",
          explanation:
            "16 + 360 = 376, positive, two real roots.",
        },
        {
          stepNumber: 6,
          description: "Compute the roots.",
          workingLatex: "x = \\frac{-4 \\pm \\sqrt{376}}{4}, \\; \\sqrt{376} = 19.3907\\ldots \\Rightarrow x = 3.847\\ldots \\text{ or } x = -5.847\\ldots",
          explanation:
            "(-4 + 19.3907)/4 = 3.8477; (-4 - 19.3907)/4 = -5.8477.",
        },
        {
          stepNumber: 7,
          description: "Reject the negative root (a length must be positive).",
          workingLatex: "x > 0 \\Rightarrow x = 3.85",
          explanation:
            "x is a side length, so take the positive root: x = 3.85 (2 d.p.).",
        },
      ],
      finalAnswer: "\\(x = 3.85\\)",
      canonicalAnswer: "3.85",
    },
  },
  {
    id: "ga40-026",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The quadratic equation \\(kx^2 + 6x + 3 = 0\\) (where \\(k \\neq 0\\)) has a repeated root. Find the value of \\(k\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "discriminant", "repeated root", "discriminant condition", "find k"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the repeated-root condition.",
          workingLatex: "b^{2} - 4ac = 0",
          explanation:
            "A repeated root requires a zero discriminant.",
        },
        {
          stepNumber: 2,
          description: "Identify a, b, c in terms of k.",
          workingLatex: "a = k, \\quad b = 6, \\quad c = 3",
          explanation:
            "Here the unknown k is the coefficient of x^2.",
        },
        {
          stepNumber: 3,
          description: "Form the equation.",
          workingLatex: "6^{2} - 4 \\cdot k \\cdot 3 = 0 \\Rightarrow 36 - 12k = 0",
          explanation:
            "Substitute into b^2 - 4ac = 0; 4ac = 12k.",
        },
        {
          stepNumber: 4,
          description: "Solve for k.",
          workingLatex: "12k = 36 \\Rightarrow k = 3",
          explanation:
            "Add 12k to both sides, then divide by 12.",
        },
        {
          stepNumber: 5,
          description: "Check.",
          workingLatex: "k = 3: \\; 3x^2 + 6x + 3 = 3(x + 1)^2 = 0 \\Rightarrow x = -1",
          explanation:
            "With k = 3 the equation factorises to 3(x + 1)^2 = 0, a repeated root at x = -1, confirming the answer.",
        },
      ],
      finalAnswer: "\\(k = 3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga40-027",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Rearrange and solve \\((2x - 1)(x + 4) = 5\\) using the quadratic formula, giving your answers to 2 decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "rearrange to zero", "expand brackets", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets.",
          workingLatex: "(2x - 1)(x + 4) = 2x^2 + 8x - x - 4 = 2x^2 + 7x - 4",
          explanation:
            "Multiply each term: 2x·x = 2x^2, 2x·4 = 8x, -1·x = -x, -1·4 = -4. Combine to 2x^2 + 7x - 4.",
        },
        {
          stepNumber: 2,
          description: "Set equal to 5 and rearrange to = 0.",
          workingLatex: "2x^2 + 7x - 4 = 5 \\Rightarrow 2x^2 + 7x - 9 = 0",
          explanation:
            "Subtract 5 from both sides: -4 - 5 = -9.",
        },
        {
          stepNumber: 3,
          description: "Identify a, b, c and substitute.",
          workingLatex: "a = 2, b = 7, c = -9; \\quad x = \\frac{-7 \\pm \\sqrt{7^{2} - 4 \\cdot 2 \\cdot (-9)}}{2 \\cdot 2}",
          explanation:
            "-4ac = -8(-9) = +72.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 49 + 72 = 121 > 0",
          explanation:
            "49 + 72 = 121, which is a perfect square (11^2), so the roots are actually rational.",
        },
        {
          stepNumber: 5,
          description: "Compute the two roots.",
          workingLatex: "x = \\frac{-7 \\pm 11}{4} = \\frac{4}{4} = 1 \\quad \\text{or} \\quad \\frac{-18}{4} = -4.5",
          explanation:
            "(-7 + 11)/4 = 1; (-7 - 11)/4 = -4.5. To 2 d.p. these are 1.00 and -4.50.",
        },
      ],
      finalAnswer: "\\(x = 1.00\\) or \\(x = -4.50\\)",
      canonicalAnswer: "x=1.00 or x=-4.50",
    },
  },
  {
    id: "ga40-028",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A ball is thrown so that its height \\(h\\) metres after \\(t\\) seconds is \\(h = 1 + 8t - 5t^2\\). Use the quadratic formula to find, to 2 decimal places, the time at which the ball hits the ground (\\(h = 0\\)).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "forming a quadratic", "kinematics", "reject negative root", "2 decimal places"],
    answerMeta: { requiredDp: 2 },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set h = 0.",
          workingLatex: "1 + 8t - 5t^2 = 0",
          explanation:
            "The ball hits the ground when its height is zero, so put h = 0.",
        },
        {
          stepNumber: 2,
          description: "Rewrite in standard form (leading coefficient positive).",
          workingLatex: "5t^2 - 8t - 1 = 0",
          explanation:
            "Multiply through by -1 to make the t^2 coefficient positive: -5t^2 becomes 5t^2, 8t becomes -8t, 1 becomes -1. This makes signs easier to handle.",
        },
        {
          stepNumber: 3,
          description: "Identify a, b, c.",
          workingLatex: "a = 5, \\quad b = -8, \\quad c = -1",
          explanation:
            "b = -8, c = -1.",
        },
        {
          stepNumber: 4,
          description: "Substitute into the formula.",
          workingLatex: "t = \\frac{8 \\pm \\sqrt{(-8)^{2} - 4 \\cdot 5 \\cdot (-1)}}{2 \\cdot 5}",
          explanation:
            "-b = +8; (-8)^2 = 64; -4ac = -20(-1) = +20.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 64 + 20 = 84 > 0",
          explanation:
            "64 + 20 = 84, positive, two real roots.",
        },
        {
          stepNumber: 6,
          description: "Compute both roots.",
          workingLatex: "t = \\frac{8 \\pm \\sqrt{84}}{10}, \\; \\sqrt{84} = 9.1652\\ldots \\Rightarrow t = 1.716\\ldots \\text{ or } t = -0.116\\ldots",
          explanation:
            "(8 + 9.1652)/10 = 1.7165; (8 - 9.1652)/10 = -0.1165.",
        },
        {
          stepNumber: 7,
          description: "Reject the negative time.",
          workingLatex: "t > 0 \\Rightarrow t = 1.72",
          explanation:
            "Time cannot be negative, so reject -0.12 and take t = 1.72 s (2 d.p.).",
        },
      ],
      finalAnswer: "\\(t = 1.72\\) seconds",
      canonicalAnswer: "1.72",
    },
  },
  {
    id: "ga40-029",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "set",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(x(x - 4) = 2\\) using the quadratic formula, giving your answers as exact, simplified surds.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "rearrange to zero", "exact surd answer", "simplify surd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand and rearrange to = 0.",
          workingLatex: "x(x - 4) = 2 \\Rightarrow x^2 - 4x = 2 \\Rightarrow x^2 - 4x - 2 = 0",
          explanation:
            "Expand x(x - 4) = x^2 - 4x, then subtract 2 from both sides.",
        },
        {
          stepNumber: 2,
          description: "Identify a, b, c and substitute.",
          workingLatex: "a = 1, b = -4, c = -2; \\quad x = \\frac{4 \\pm \\sqrt{(-4)^{2} - 4 \\cdot 1 \\cdot (-2)}}{2}",
          explanation:
            "-b = +4; (-4)^2 = 16; -4ac = -4(1)(-2) = +8.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the discriminant.",
          workingLatex: "b^{2} - 4ac = 16 + 8 = 24",
          explanation:
            "16 + 8 = 24.",
        },
        {
          stepNumber: 4,
          description: "Simplify sqrt(24).",
          workingLatex: "\\sqrt{24} = \\sqrt{4 \\cdot 6} = 2\\sqrt{6}",
          explanation:
            "24 = 4 × 6, so sqrt(24) = 2 sqrt(6).",
        },
        {
          stepNumber: 5,
          description: "Simplify the expression.",
          workingLatex: "x = \\frac{4 \\pm 2\\sqrt{6}}{2} = 2 \\pm \\sqrt{6}",
          explanation:
            "Divide numerator by 2: 4/2 = 2, 2 sqrt(6)/2 = sqrt(6). So x = 2 ± sqrt(6).",
        },
      ],
      finalAnswer: "\\(x = 2 \\pm \\sqrt{6}\\)",
      canonicalAnswer: "x=2+sqrt(6) or x=2-sqrt(6)",
    },
  },
  {
    id: "ga40-030",
    topicRef: "ga40",
    topicTitle: "The quadratic formula",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "The line \\(y = 2x + k\\) is a tangent to the curve \\(y = x^2 + 3x + 4\\). By forming a quadratic and using the discriminant, find the value of \\(k\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic formula", "discriminant", "tangent condition", "discriminant condition", "find k"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the line equal to the curve to find intersection points.",
          workingLatex: "2x + k = x^2 + 3x + 4",
          explanation:
            "Where the line meets the curve, their y-values are equal. A tangent touches the curve at exactly one point.",
        },
        {
          stepNumber: 2,
          description: "Rearrange to a quadratic in x equal to zero.",
          workingLatex: "0 = x^2 + 3x - 2x + 4 - k \\Rightarrow x^2 + x + (4 - k) = 0",
          explanation:
            "Bring everything to one side: 3x - 2x = x, and the constant is 4 - k.",
        },
        {
          stepNumber: 3,
          description: "State the tangency condition.",
          workingLatex: "b^{2} - 4ac = 0",
          explanation:
            "A tangent meets the curve at exactly one point, so this quadratic must have a single (repeated) root, i.e. discriminant zero.",
        },
        {
          stepNumber: 4,
          description: "Identify a, b, c and substitute.",
          workingLatex: "a = 1, b = 1, c = 4 - k \\Rightarrow 1^{2} - 4 \\cdot 1 \\cdot (4 - k) = 0",
          explanation:
            "Substitute into b^2 - 4ac = 0.",
        },
        {
          stepNumber: 5,
          description: "Simplify.",
          workingLatex: "1 - 4(4 - k) = 0 \\Rightarrow 1 - 16 + 4k = 0 \\Rightarrow 4k - 15 = 0",
          explanation:
            "Expand -4(4 - k) = -16 + 4k, then collect: 1 - 16 = -15.",
        },
        {
          stepNumber: 6,
          description: "Solve for k.",
          workingLatex: "4k = 15 \\Rightarrow k = \\frac{15}{4}",
          explanation:
            "Add 15 to both sides and divide by 4. So k = 15/4 = 3.75, the value that makes the line a tangent.",
        },
      ],
      finalAnswer: "\\(k = \\dfrac{15}{4}\\)",
      canonicalAnswer: "15/4",
    },
  },
];
