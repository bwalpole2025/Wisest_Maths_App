/**
 * Topic: Solving quadratics by factorising
 * Ref: ga38  (DfE A18)
 * Strand: Algebra — GCSE Maths (Foundation & Higher tiers)
 *
 * Coverage: solving ax^2 + bx + c = 0 by factorising, then applying the
 *   NULL-FACTOR LAW — a product of factors is zero if and only if at least one
 *   of the factors is zero. Every solution stresses WHY this works: once the
 *   quadratic is written as (…)(…) = 0, the only way the product can equal zero
 *   is for one bracket to be zero, which splits the problem into simple linear
 *   equations. Clusters:
 *   (1) common factor only, x^2 + bx = 0 → x(x + b) = 0 (root x = 0 included);
 *   (2) monic x^2 + bx + c = 0 (a = 1), find two numbers multiplying to c and
 *       adding to b;
 *   (3) difference of two squares, x^2 - k^2 = 0 → (x - k)(x + k) = 0;
 *   (4) rearrange to = 0 first, THEN factorise (you cannot use the null-factor
 *       law until one side is zero);
 *   (5) non-monic a > 1 (Higher), splitting the middle term;
 *   (6) worded / geometry problems that FORM a quadratic and solve it;
 *   (7) interpreting roots — rejecting a negative (non-physical) length or an
 *       impossible value in context.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga38-001 .. ga38-004  (4)   cleanest factorise-and-solve items
 *   - Standard:   ga38-005 .. ga38-018  (14)
 *   - Challenge:  ga38-019 .. ga38-030  (12)
 * Id range: ga38-001 .. ga38-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac), \\cdot for multiplication
 *   and braced exponents like x^{2}, per hard project rules.
 *   answerType is "set" for two-root answers and "numeric" for single-root cases.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga38-001",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve \\(x^2 + 5x = 0\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "common factor", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the common factor x.",
          workingLatex: "x^{2} + 5x",
          explanation:
            "Look at the two terms x^2 and 5x. The first is x \\cdot x and the second is 5 \\cdot x, so every term contains an x. There is no constant term sitting on its own, which is the signal that a single common factor (rather than two-number factorising) is the way in.",
        },
        {
          stepNumber: 2,
          description: "Take out the common factor of x.",
          workingLatex: "x^{2} + 5x = x(x + 5)",
          explanation:
            "Pull one x outside a bracket. Inside we are left with what each term becomes after dividing by x: x^2 \\div x = x and 5x \\div x = 5, so the bracket is (x + 5). You can always check by expanding back: x \\cdot x = x^2 and x \\cdot 5 = 5x.",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "x(x + 5) = 0 \\Rightarrow x = 0 \\quad \\text{or} \\quad x + 5 = 0",
          explanation:
            "We now have a product of two things, x and (x + 5), multiplying to give zero. The only way a product equals zero is if at least one of the factors is itself zero. So either x = 0 or x + 5 = 0 — split into these two simple cases.",
        },
        {
          stepNumber: 4,
          description: "Solve each linear equation.",
          workingLatex: "x = 0 \\quad \\text{or} \\quad x = -5",
          explanation:
            "The first factor already reads x = 0, so that is a solution as it stands. For the second, subtract 5 from both sides of x + 5 = 0 to get x = -5. A very common slip is to throw away x = 0 as if it 'doesn't count' — it is a genuine root, so keep both.",
        },
      ],
      finalAnswer: "\\(x = 0 \\text{ or } x = -5\\)",
      canonicalAnswer: "x=0 or x=-5",
    },
  },
  {
    id: "ga38-002",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve \\(x^2 + 7x + 12 = 0\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "monic quadratic", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State what the two numbers must do.",
          workingLatex: "\\text{product} = 12, \\quad \\text{sum} = 7",
          explanation:
            "This is a monic quadratic (the coefficient of x^2 is 1), so it factorises as (x + p)(x + q). Expanding that gives x^2 + (p + q)x + pq, which tells us the two numbers must multiply to the constant 12 and add to the middle coefficient 7.",
        },
        {
          stepNumber: 2,
          description: "Find the pair: 3 and 4.",
          workingLatex: "3 \\cdot 4 = 12, \\quad 3 + 4 = 7",
          explanation:
            "Both numbers are positive because the product and the sum are both positive. Run through the factor pairs of 12 (1 and 12, 2 and 6, 3 and 4); only 3 and 4 also add to 7.",
        },
        {
          stepNumber: 3,
          description: "Write the factorised form.",
          workingLatex: "x^{2} + 7x + 12 = (x + 3)(x + 4) = 0",
          explanation:
            "Drop the two numbers straight into the brackets: (x + 3)(x + 4). It is worth a quick mental expand to confirm the middle term comes back as 3x + 4x = 7x.",
        },
        {
          stepNumber: 4,
          description: "Apply the null-factor law and solve.",
          workingLatex: "x + 3 = 0 \\text{ or } x + 4 = 0 \\Rightarrow x = -3 \\quad \\text{or} \\quad x = -4",
          explanation:
            "The product of the two brackets is zero, so one of them must be zero. Setting each to zero and solving gives x = -3 or x = -4. Check: (-3)^2 + 7(-3) + 12 = 9 - 21 + 12 = 0 and (-4)^2 + 7(-4) + 12 = 16 - 28 + 12 = 0.",
        },
      ],
      finalAnswer: "\\(x = -3 \\text{ or } x = -4\\)",
      canonicalAnswer: "x=-3 or x=-4",
    },
  },
  {
    id: "ga38-003",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve \\(x^2 - 9 = 0\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "difference of two squares", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "x^{2} - 9 = x^{2} - 3^{2}",
          explanation:
            "There is no x-term here, just a square minus a number, and that number 9 is a perfect square (9 = 3^2). That is the fingerprint of a difference of two squares, a^2 - b^2, with a = x and b = 3.",
        },
        {
          stepNumber: 2,
          description: "Factorise using a^2 - b^2 = (a - b)(a + b).",
          workingLatex: "x^{2} - 3^{2} = (x - 3)(x + 3)",
          explanation:
            "The difference of two squares always splits into the two 'conjugate' brackets (x - 3) and (x + 3) — same numbers, opposite signs. Expanding back, the -3x and +3x cancel, which is exactly why there was no x-term to begin with.",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "(x - 3)(x + 3) = 0 \\Rightarrow x - 3 = 0 \\text{ or } x + 3 = 0",
          explanation:
            "The product of the brackets is zero, so one of them must be zero. Set each bracket to zero in turn.",
        },
        {
          stepNumber: 4,
          description: "Solve each bracket.",
          workingLatex: "x = 3 \\quad \\text{or} \\quad x = -3",
          explanation:
            "Adding or subtracting 3 gives the two roots. Notice they are equal and opposite, which always happens for a difference of squares. Check: 3^2 - 9 = 0 and (-3)^2 - 9 = 0.",
        },
      ],
      finalAnswer: "\\(x = 3 \\text{ or } x = -3\\)",
      canonicalAnswer: "x=3 or x=-3",
    },
  },
  {
    id: "ga38-004",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve \\(x^2 - 2x - 15 = 0\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "monic quadratic", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide the signs of the two numbers.",
          workingLatex: "\\text{product} = -15 < 0, \\quad \\text{sum} = -2",
          explanation:
            "For the monic quadratic we need two numbers with product -15 and sum -2. Because the product is negative, the two numbers must have opposite signs. The sum is -2, so the bigger-magnitude number is the negative one.",
        },
        {
          stepNumber: 2,
          description: "Find the pair: -5 and 3.",
          workingLatex: "(-5) \\cdot 3 = -15, \\quad -5 + 3 = -2",
          explanation:
            "The factor pairs of 15 are 1 and 15, 3 and 5. Trying 3 and 5 with opposite signs, the combination -5 and +3 gives product -15 and sum -2, exactly what we need.",
        },
        {
          stepNumber: 3,
          description: "Factorise and apply the null-factor law.",
          workingLatex: "(x - 5)(x + 3) = 0 \\Rightarrow x - 5 = 0 \\text{ or } x + 3 = 0",
          explanation:
            "Place -5 and +3 into the brackets to get (x - 5)(x + 3). Since this product is zero, one of the two brackets must be zero.",
        },
        {
          stepNumber: 4,
          description: "Solve each bracket.",
          workingLatex: "x = 5 \\quad \\text{or} \\quad x = -3",
          explanation:
            "Adding 5 to the first equation gives x = 5; subtracting 3 from the second gives x = -3. Check: 5^2 - 2(5) - 15 = 25 - 10 - 15 = 0 and (-3)^2 - 2(-3) - 15 = 9 + 6 - 15 = 0.",
        },
      ],
      finalAnswer: "\\(x = 5 \\text{ or } x = -3\\)",
      canonicalAnswer: "x=5 or x=-3",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga38-005",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 - 8x = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "common factor", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the common factor.",
          workingLatex: "x^{2} - 8x",
          explanation:
            "Both terms share a factor of x and there is no constant term, so the right first move is to factor out x. Crucially, do NOT divide both sides by x to 'cancel' it — dividing by x assumes x is non-zero and silently throws away the perfectly good solution x = 0.",
        },
        {
          stepNumber: 2,
          description: "Factorise out x.",
          workingLatex: "x^{2} - 8x = x(x - 8)",
          explanation:
            "Take x outside the bracket; dividing each term by x leaves x - 8 inside. Check by expanding: x \\cdot x = x^2 and x \\cdot (-8) = -8x, which rebuilds the original.",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "x(x - 8) = 0 \\Rightarrow x = 0 \\quad \\text{or} \\quad x - 8 = 0",
          explanation:
            "A product of two factors is zero only when at least one factor is zero, so set each factor to zero in turn: the lone x, and the bracket x - 8.",
        },
        {
          stepNumber: 4,
          description: "Solve each equation.",
          workingLatex: "x = 0 \\quad \\text{or} \\quad x = 8",
          explanation:
            "The first factor gives x = 0 directly; the second gives x = 8 after adding 8. Both are valid — this is exactly the root we would have lost by dividing through. Check: 0^2 - 8(0) = 0 and 8^2 - 8(8) = 64 - 64 = 0.",
        },
      ],
      finalAnswer: "\\(x = 0 \\text{ or } x = 8\\)",
      canonicalAnswer: "x=0 or x=8",
    },
  },
  {
    id: "ga38-006",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 + 9x + 20 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "monic quadratic", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State what the two numbers must do.",
          workingLatex: "\\text{product} = 20, \\quad \\text{sum} = 9",
          explanation:
            "For x^2 + bx + c with a = 1, we factorise as (x + p)(x + q), which expands to x^2 + (p + q)x + pq. Matching coefficients, the two numbers must multiply to c = 20 and add to b = 9.",
        },
        {
          stepNumber: 2,
          description: "List factor pairs of 20 and pick the right one.",
          workingLatex: "1 \\cdot 20, \\; 2 \\cdot 10, \\; 4 \\cdot 5; \\quad 4 + 5 = 9",
          explanation:
            "Both numbers are positive since the product and sum are positive. Going through the factor pairs of 20, only 4 and 5 also add to 9.",
        },
        {
          stepNumber: 3,
          description: "Write the factorised form.",
          workingLatex: "x^{2} + 9x + 20 = (x + 4)(x + 5) = 0",
          explanation:
            "Drop 4 and 5 into the brackets. A quick expand check confirms the middle term: 4x + 5x = 9x.",
        },
        {
          stepNumber: 4,
          description: "Apply the null-factor law and solve.",
          workingLatex: "x + 4 = 0 \\text{ or } x + 5 = 0 \\Rightarrow x = -4 \\quad \\text{or} \\quad x = -5",
          explanation:
            "The product of the brackets is zero, so one bracket must be zero. Solving each gives x = -4 or x = -5. Check: (-4)^2 + 9(-4) + 20 = 16 - 36 + 20 = 0 and (-5)^2 + 9(-5) + 20 = 25 - 45 + 20 = 0.",
        },
      ],
      finalAnswer: "\\(x = -4 \\text{ or } x = -5\\)",
      canonicalAnswer: "x=-4 or x=-5",
    },
  },
  {
    id: "ga38-007",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 + 3x - 28 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "monic quadratic", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide the signs of the two numbers.",
          workingLatex: "\\text{product} = -28 < 0, \\quad \\text{sum} = 3",
          explanation:
            "We need two numbers with product c = -28 and sum b = 3. A negative product means the two numbers have opposite signs; a positive sum means the larger-magnitude number is the positive one.",
        },
        {
          stepNumber: 2,
          description: "Find the pair: 7 and -4.",
          workingLatex: "7 \\cdot (-4) = -28, \\quad 7 + (-4) = 3",
          explanation:
            "The factor pairs of 28 are 1 and 28, 2 and 14, 4 and 7. Testing 4 and 7 with opposite signs, the combination +7 and -4 gives product -28 and sum +3.",
        },
        {
          stepNumber: 3,
          description: "Factorise and apply the null-factor law.",
          workingLatex: "(x + 7)(x - 4) = 0 \\Rightarrow x + 7 = 0 \\text{ or } x - 4 = 0",
          explanation:
            "Place +7 and -4 into the brackets. The product is zero, so one bracket must vanish.",
        },
        {
          stepNumber: 4,
          description: "Solve each bracket.",
          workingLatex: "x = -7 \\quad \\text{or} \\quad x = 4",
          explanation:
            "Solving each linear equation gives x = -7 or x = 4. Check: (-7)^2 + 3(-7) - 28 = 49 - 21 - 28 = 0 and 4^2 + 3(4) - 28 = 16 + 12 - 28 = 0.",
        },
      ],
      finalAnswer: "\\(x = -7 \\text{ or } x = 4\\)",
      canonicalAnswer: "x=-7 or x=4",
    },
  },
  {
    id: "ga38-008",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 - 49 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "difference of two squares", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "x^{2} - 49 = x^{2} - 7^{2}",
          explanation:
            "There is no x-term, and the constant 49 is a perfect square, 49 = 7^2. A square minus a square is the difference of two squares a^2 - b^2, here with a = x and b = 7.",
        },
        {
          stepNumber: 2,
          description: "Factorise using a^2 - b^2 = (a - b)(a + b).",
          workingLatex: "x^{2} - 7^{2} = (x - 7)(x + 7)",
          explanation:
            "The difference of two squares always factorises into the two conjugate brackets (x - 7) and (x + 7). When expanded, the -7x and +7x cancel, which is why the original had no x-term.",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "(x - 7)(x + 7) = 0 \\Rightarrow x - 7 = 0 \\text{ or } x + 7 = 0",
          explanation:
            "The product is zero, so one of the two brackets must be zero. Set each to zero.",
        },
        {
          stepNumber: 4,
          description: "Solve each bracket.",
          workingLatex: "x = 7 \\quad \\text{or} \\quad x = -7",
          explanation:
            "The two roots are \\pm 7 — equal and opposite, as always for a difference of squares. Check: 7^2 - 49 = 0 and (-7)^2 - 49 = 0.",
        },
      ],
      finalAnswer: "\\(x = 7 \\text{ or } x = -7\\)",
      canonicalAnswer: "x=7 or x=-7",
    },
  },
  {
    id: "ga38-009",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 = 6x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "rearrange to zero", "common factor", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange so that one side is zero.",
          workingLatex: "x^{2} = 6x \\Rightarrow x^{2} - 6x = 0",
          explanation:
            "The null-factor law only works when one side is zero, so subtract 6x from both sides first. It is tempting to divide both sides by x to get x = 6, but that would assume x \\neq 0 and lose the root x = 0 — never divide by the variable here.",
        },
        {
          stepNumber: 2,
          description: "Factorise out the common factor x.",
          workingLatex: "x^{2} - 6x = x(x - 6) = 0",
          explanation:
            "Both terms share a factor of x. Taking it outside leaves x - 6 in the bracket, giving the product x(x - 6).",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "x = 0 \\quad \\text{or} \\quad x - 6 = 0",
          explanation:
            "A product is zero only if one of its factors is zero, so set each factor equal to zero.",
        },
        {
          stepNumber: 4,
          description: "Solve each equation.",
          workingLatex: "x = 0 \\quad \\text{or} \\quad x = 6",
          explanation:
            "The first factor gives x = 0; the second gives x = 6. Both satisfy the original equation, so keep x = 0. Check: 0^2 = 6(0) reads 0 = 0, and 6^2 = 36 = 6(6).",
        },
      ],
      finalAnswer: "\\(x = 0 \\text{ or } x = 6\\)",
      canonicalAnswer: "x=0 or x=6",
    },
  },
  {
    id: "ga38-010",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 + 4x = 21\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "rearrange to zero", "monic quadratic", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange to the form = 0.",
          workingLatex: "x^{2} + 4x = 21 \\Rightarrow x^{2} + 4x - 21 = 0",
          explanation:
            "Subtract 21 from both sides so the right-hand side becomes zero. Only with a zero on one side can the null-factor law be used, so this rearranging always comes first.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers: product -21, sum 4.",
          workingLatex: "7 \\cdot (-3) = -21, \\quad 7 + (-3) = 4",
          explanation:
            "We need product c = -21 and sum b = 4. The negative product means opposite signs; the positive sum means the larger-magnitude number is positive. The factor pair 3 and 7 with signs +7 and -3 fits.",
        },
        {
          stepNumber: 3,
          description: "Factorise and apply the null-factor law.",
          workingLatex: "(x + 7)(x - 3) = 0 \\Rightarrow x + 7 = 0 \\text{ or } x - 3 = 0",
          explanation:
            "Drop +7 and -3 into the brackets. Since the product is zero, one of the brackets must equal zero.",
        },
        {
          stepNumber: 4,
          description: "Solve each bracket.",
          workingLatex: "x = -7 \\quad \\text{or} \\quad x = 3",
          explanation:
            "Solving each linear equation gives x = -7 or x = 3. Check in the ORIGINAL equation: (-7)^2 + 4(-7) = 49 - 28 = 21 and 3^2 + 4(3) = 9 + 12 = 21.",
        },
      ],
      finalAnswer: "\\(x = -7 \\text{ or } x = 3\\)",
      canonicalAnswer: "x=-7 or x=3",
    },
  },
  {
    id: "ga38-011",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 - 10x + 25 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "monic quadratic", "repeated root", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide the signs and find the pair.",
          workingLatex: "(-5) \\cdot (-5) = 25, \\quad -5 + (-5) = -10",
          explanation:
            "We need product 25 and sum -10. A positive product with a negative sum means both numbers are negative. The pair turns out to be -5 and -5 — the same number twice, which is the tell-tale sign of a perfect square.",
        },
        {
          stepNumber: 2,
          description: "Factorise as a perfect square.",
          workingLatex: "(x - 5)(x - 5) = (x - 5)^{2} = 0",
          explanation:
            "Because both brackets are identical, the factorisation is the perfect square (x - 5)^2. This is why the two numbers came out equal in step 1.",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "(x - 5)^{2} = 0 \\Rightarrow x - 5 = 0",
          explanation:
            "The only way a square equals zero is if the thing being squared is zero, so x - 5 = 0. There is just one distinct factor to set to zero, not two.",
        },
        {
          stepNumber: 4,
          description: "Solve for the repeated root.",
          workingLatex: "x = 5",
          explanation:
            "Adding 5 gives x = 5. This is a single repeated root rather than two different roots — the curve touches the x-axis at one point. Check: 5^2 - 10(5) + 25 = 25 - 50 + 25 = 0.",
        },
      ],
      finalAnswer: "\\(x = 5\\)",
      canonicalAnswer: "x=5",
    },
  },
  {
    id: "ga38-012",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(2x^2 - 7x - 4 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "non-monic", "splitting the middle term", "null-factor law", "Higher"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute a·c for the ac method.",
          workingLatex: "a \\cdot c = 2 \\cdot (-4) = -8",
          explanation:
            "When a > 1 the simple two-number trick is replaced by the 'ac method'. First multiply the coefficient of x^2 by the constant: a \\cdot c = 2 \\cdot (-4) = -8. We will split the middle term using two numbers built from this product.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers: product -8, sum -7.",
          workingLatex: "(-8) \\cdot 1 = -8, \\quad -8 + 1 = -7",
          explanation:
            "Find two numbers multiplying to a \\cdot c = -8 and adding to b = -7. The pair -8 and +1 works: their product is -8 and their sum is -7.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term.",
          workingLatex: "2x^{2} - 8x + x - 4 = 0",
          explanation:
            "Rewrite the middle term -7x as -8x + x using the two numbers found. The quadratic is unchanged in value, but it now has four terms that can be grouped in pairs.",
        },
        {
          stepNumber: 4,
          description: "Factorise by grouping.",
          workingLatex: "2x(x - 4) + 1(x - 4) = 0 \\Rightarrow (2x + 1)(x - 4) = 0",
          explanation:
            "Group the first two terms and the last two: from 2x^2 - 8x take out 2x to get 2x(x - 4); from x - 4 take out 1 to get 1(x - 4). Both share the bracket (x - 4), which factors out, leaving (2x + 1)(x - 4).",
        },
        {
          stepNumber: 5,
          description: "Apply the null-factor law and solve.",
          workingLatex: "2x + 1 = 0 \\text{ or } x - 4 = 0 \\Rightarrow x = -\\frac{1}{2} \\text{ or } x = 4",
          explanation:
            "Set each bracket to zero. From 2x + 1 = 0 we get x = -\\frac{1}{2}; from x - 4 = 0 we get x = 4. Check: 2(-\\frac{1}{2})^2 - 7(-\\frac{1}{2}) - 4 = \\frac{1}{2} + \\frac{7}{2} - 4 = 0 and 2(4)^2 - 7(4) - 4 = 32 - 28 - 4 = 0.",
        },
      ],
      finalAnswer: "\\(x = -\\dfrac{1}{2} \\text{ or } x = 4\\)",
      canonicalAnswer: "x=-1/2 or x=4",
    },
  },
  {
    id: "ga38-013",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(3x^2 + 10x + 8 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "non-monic", "splitting the middle term", "null-factor law", "Higher"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute a·c for the ac method.",
          workingLatex: "a \\cdot c = 3 \\cdot 8 = 24",
          explanation:
            "With a = 3 > 1 we use the ac method. Multiply the coefficient of x^2 by the constant: a \\cdot c = 3 \\cdot 8 = 24. The split of the middle term will come from a factor pair of 24.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers: product 24, sum 10.",
          workingLatex: "6 \\cdot 4 = 24, \\quad 6 + 4 = 10",
          explanation:
            "We need two numbers multiplying to a \\cdot c = 24 and adding to b = 10. Both are positive since the product and sum are positive. The pair 6 and 4 works.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term.",
          workingLatex: "3x^{2} + 6x + 4x + 8 = 0",
          explanation:
            "Replace 10x with 6x + 4x so the expression has four terms, ready to be grouped into two pairs.",
        },
        {
          stepNumber: 4,
          description: "Factorise by grouping.",
          workingLatex: "3x(x + 2) + 4(x + 2) = 0 \\Rightarrow (3x + 4)(x + 2) = 0",
          explanation:
            "From the first pair 3x^2 + 6x take out 3x to get 3x(x + 2); from 4x + 8 take out 4 to get 4(x + 2). Both leave the common bracket (x + 2), which factors out, giving (3x + 4)(x + 2).",
        },
        {
          stepNumber: 5,
          description: "Apply the null-factor law and solve.",
          workingLatex: "3x + 4 = 0 \\text{ or } x + 2 = 0 \\Rightarrow x = -\\frac{4}{3} \\text{ or } x = -2",
          explanation:
            "Set each bracket to zero. From 3x + 4 = 0 we get x = -\\frac{4}{3}; from x + 2 = 0 we get x = -2. Check: 3(-\\frac{4}{3})^2 + 10(-\\frac{4}{3}) + 8 = \\frac{16}{3} - \\frac{40}{3} + 8 = -8 + 8 = 0 and 3(-2)^2 + 10(-2) + 8 = 12 - 20 + 8 = 0.",
        },
      ],
      finalAnswer: "\\(x = -\\dfrac{4}{3} \\text{ or } x = -2\\)",
      canonicalAnswer: "x=-4/3 or x=-2",
    },
  },
  {
    id: "ga38-014",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(4x^2 - 25 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "difference of two squares", "non-monic", "null-factor law", "Higher"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write both terms as squares.",
          workingLatex: "4x^{2} - 25 = (2x)^{2} - 5^{2}",
          explanation:
            "There is no x-term, so look for a difference of two squares. Both pieces are perfect squares: 4x^2 = (2x)^2 and 25 = 5^2. So this is a^2 - b^2 with a = 2x and b = 5.",
        },
        {
          stepNumber: 2,
          description: "Factorise using a^2 - b^2 = (a - b)(a + b).",
          workingLatex: "(2x)^{2} - 5^{2} = (2x - 5)(2x + 5) = 0",
          explanation:
            "Apply the difference-of-two-squares pattern with a = 2x and b = 5, giving the conjugate brackets (2x - 5) and (2x + 5).",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "2x - 5 = 0 \\quad \\text{or} \\quad 2x + 5 = 0",
          explanation:
            "The product is zero, so one of the two brackets must be zero. Set each to zero in turn.",
        },
        {
          stepNumber: 4,
          description: "Solve each bracket.",
          workingLatex: "x = \\frac{5}{2} \\quad \\text{or} \\quad x = -\\frac{5}{2}",
          explanation:
            "Each gives a linear equation: 2x = 5 so x = \\frac{5}{2}, and 2x = -5 so x = -\\frac{5}{2}. Check: 4(\\frac{5}{2})^2 - 25 = 4 \\cdot \\frac{25}{4} - 25 = 0, and the same for x = -\\frac{5}{2}.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{5}{2} \\text{ or } x = -\\dfrac{5}{2}\\)",
      canonicalAnswer: "x=5/2 or x=-5/2",
    },
  },
  {
    id: "ga38-015",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 - 13x + 36 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "monic quadratic", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide the signs of the two numbers.",
          workingLatex: "\\text{product} = 36 > 0, \\quad \\text{sum} = -13 < 0",
          explanation:
            "We need two numbers with product c = 36 and sum b = -13. A positive product with a negative sum forces both numbers to be negative.",
        },
        {
          stepNumber: 2,
          description: "Find the pair: -4 and -9.",
          workingLatex: "(-4) \\cdot (-9) = 36, \\quad -4 + (-9) = -13",
          explanation:
            "Among the factor pairs of 36 (1 and 36, 2 and 18, 3 and 12, 4 and 9, 6 and 6), the pair 4 and 9 adds to 13. Making both negative gives product 36 and sum -13.",
        },
        {
          stepNumber: 3,
          description: "Factorise and apply the null-factor law.",
          workingLatex: "(x - 4)(x - 9) = 0 \\Rightarrow x - 4 = 0 \\text{ or } x - 9 = 0",
          explanation:
            "Drop -4 and -9 into the brackets to get (x - 4)(x - 9). The product is zero, so one bracket must be zero.",
        },
        {
          stepNumber: 4,
          description: "Solve each bracket.",
          workingLatex: "x = 4 \\quad \\text{or} \\quad x = 9",
          explanation:
            "Solving each linear equation gives x = 4 or x = 9. Check: 4^2 - 13(4) + 36 = 16 - 52 + 36 = 0 and 9^2 - 13(9) + 36 = 81 - 117 + 36 = 0.",
        },
      ],
      finalAnswer: "\\(x = 4 \\text{ or } x = 9\\)",
      canonicalAnswer: "x=4 or x=9",
    },
  },
  {
    id: "ga38-016",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(2x^2 + 5x = 12\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "rearrange to zero", "non-monic", "null-factor law", "Higher"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange to = 0.",
          workingLatex: "2x^{2} + 5x = 12 \\Rightarrow 2x^{2} + 5x - 12 = 0",
          explanation:
            "Subtract 12 from both sides to get a zero on the right. The null-factor law needs a zero on one side before any factorising is useful.",
        },
        {
          stepNumber: 2,
          description: "Compute a·c and find two numbers.",
          workingLatex: "a \\cdot c = 2 \\cdot (-12) = -24; \\quad 8 \\cdot (-3) = -24, \\; 8 + (-3) = 5",
          explanation:
            "With a = 2 use the ac method: a \\cdot c = 2 \\cdot (-12) = -24. Find two numbers multiplying to -24 and adding to b = 5. The pair 8 and -3 works.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term and group.",
          workingLatex: "2x^{2} + 8x - 3x - 12 = 0 \\Rightarrow 2x(x + 4) - 3(x + 4) = 0",
          explanation:
            "Rewrite 5x as 8x - 3x, then group in pairs: from 2x^2 + 8x take out 2x to get 2x(x + 4); from -3x - 12 take out -3 to get -3(x + 4). Both leave the common bracket (x + 4).",
        },
        {
          stepNumber: 4,
          description: "Factorise, apply the null-factor law and solve.",
          workingLatex: "(2x - 3)(x + 4) = 0 \\Rightarrow x = \\frac{3}{2} \\text{ or } x = -4",
          explanation:
            "The common bracket factors out to give (2x - 3)(x + 4) = 0. Setting each to zero, 2x - 3 = 0 gives x = \\frac{3}{2} and x + 4 = 0 gives x = -4. Check in the ORIGINAL: 2(\\frac{3}{2})^2 + 5(\\frac{3}{2}) = \\frac{9}{2} + \\frac{15}{2} = 12 and 2(-4)^2 + 5(-4) = 32 - 20 = 12.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{3}{2} \\text{ or } x = -4\\)",
      canonicalAnswer: "x=3/2 or x=-4",
    },
  },
  {
    id: "ga38-017",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 + 6x + 9 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "monic quadratic", "repeated root", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find two numbers: product 9, sum 6.",
          workingLatex: "3 \\cdot 3 = 9, \\quad 3 + 3 = 6",
          explanation:
            "We need two numbers multiplying to 9 and adding to 6. Both are positive, and the pair is 3 and 3 — the same number repeated, which signals a perfect square.",
        },
        {
          stepNumber: 2,
          description: "Write as a perfect square.",
          workingLatex: "(x + 3)(x + 3) = (x + 3)^{2} = 0",
          explanation:
            "Since both brackets are (x + 3), the factorisation is the perfect square (x + 3)^2. Equal numbers in step 1 always collapse to a square like this.",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "(x + 3)^{2} = 0 \\Rightarrow x + 3 = 0",
          explanation:
            "A square equals zero only when the thing being squared, its base, is zero. So x + 3 = 0 — there is a single factor to handle, not two distinct ones.",
        },
        {
          stepNumber: 4,
          description: "Solve for the repeated root.",
          workingLatex: "x = -3",
          explanation:
            "Subtracting 3 gives x = -3, a single repeated root. Check: (-3)^2 + 6(-3) + 9 = 9 - 18 + 9 = 0.",
        },
      ],
      finalAnswer: "\\(x = -3\\)",
      canonicalAnswer: "x=-3",
    },
  },
  {
    id: "ga38-018",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve \\(x^2 = 5x + 24\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "rearrange to zero", "monic quadratic", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Move every term to one side.",
          workingLatex: "x^{2} = 5x + 24 \\Rightarrow x^{2} - 5x - 24 = 0",
          explanation:
            "Subtract both 5x and 24 from each side so the right-hand side becomes zero. This is the standard ax^2 + bx + c = 0 form we need before factorising.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers: product -24, sum -5.",
          workingLatex: "(-8) \\cdot 3 = -24, \\quad -8 + 3 = -5",
          explanation:
            "We need product c = -24 and sum b = -5. The negative product means opposite signs; the negative sum means the larger-magnitude number is the negative one. The pair -8 and +3 fits.",
        },
        {
          stepNumber: 3,
          description: "Factorise and apply the null-factor law.",
          workingLatex: "(x - 8)(x + 3) = 0 \\Rightarrow x - 8 = 0 \\text{ or } x + 3 = 0",
          explanation:
            "Place -8 and +3 into the brackets. Since the product is zero, one bracket must equal zero.",
        },
        {
          stepNumber: 4,
          description: "Solve each bracket.",
          workingLatex: "x = 8 \\quad \\text{or} \\quad x = -3",
          explanation:
            "Solving each gives x = 8 or x = -3. Check in the original: 8^2 = 64 and 5(8) + 24 = 64; (-3)^2 = 9 and 5(-3) + 24 = 9.",
        },
      ],
      finalAnswer: "\\(x = 8 \\text{ or } x = -3\\)",
      canonicalAnswer: "x=8 or x=-3",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga38-019",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve \\((x + 2)(x - 3) = 6\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "rearrange to zero", "expand brackets", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the left-hand side.",
          workingLatex: "(x + 2)(x - 3) = x^{2} - 3x + 2x - 6 = x^{2} - x - 6",
          explanation:
            "The right-hand side is 6, not 0, so the null-factor law cannot be used yet: knowing the brackets multiply to 6 tells you nothing about either bracket individually. Multiply out first using each term in turn (x times x, x times -3, 2 times x, 2 times -3), then collect -3x + 2x = -x.",
        },
        {
          stepNumber: 2,
          description: "Set the equation equal to zero.",
          workingLatex: "x^{2} - x - 6 = 6 \\Rightarrow x^{2} - x - 12 = 0",
          explanation:
            "Subtract 6 from both sides so the right-hand side becomes zero. This is the crucial move: only now is the equation in the form needed for the null-factor law. The constant changes from -6 to -12.",
        },
        {
          stepNumber: 3,
          description: "Factorise the new quadratic.",
          workingLatex: "x^{2} - x - 12 = (x - 4)(x + 3) = 0",
          explanation:
            "We need two numbers with product -12 and sum -1. The pair -4 and +3 gives product -12 and sum -1, so the factorisation is (x - 4)(x + 3).",
        },
        {
          stepNumber: 4,
          description: "Apply the null-factor law and solve.",
          workingLatex: "x - 4 = 0 \\text{ or } x + 3 = 0 \\Rightarrow x = 4 \\text{ or } x = -3",
          explanation:
            "Set each bracket to zero to get x = 4 or x = -3. Check in the original: (4 + 2)(4 - 3) = 6 \\cdot 1 = 6 and (-3 + 2)(-3 - 3) = (-1)(-6) = 6.",
        },
      ],
      finalAnswer: "\\(x = 4 \\text{ or } x = -3\\)",
      canonicalAnswer: "x=4 or x=-3",
    },
  },
  {
    id: "ga38-020",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A rectangle has width \\(x\\) cm and length \\((x + 4)\\) cm. Its area is \\(45\\) cm\\(^2\\). Find the value of \\(x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "forming a quadratic", "geometry", "reject negative root", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form an equation from the area.",
          workingLatex: "x(x + 4) = 45",
          explanation:
            "The area of a rectangle is width \\times length. Here that is x \\cdot (x + 4). Setting it equal to the given area 45 turns the worded problem into an equation we can solve.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket.",
          workingLatex: "x^{2} + 4x = 45",
          explanation:
            "Multiply x through the bracket: x \\cdot x = x^2 and x \\cdot 4 = 4x. This gives the quadratic expression on the left.",
        },
        {
          stepNumber: 3,
          description: "Rearrange to = 0.",
          workingLatex: "x^{2} + 4x - 45 = 0",
          explanation:
            "Subtract 45 from both sides so one side is zero, ready for the null-factor law.",
        },
        {
          stepNumber: 4,
          description: "Factorise.",
          workingLatex: "(x + 9)(x - 5) = 0",
          explanation:
            "We need two numbers with product -45 and sum 4. The pair 9 and -5 gives product -45 and sum 4, so the factorisation is (x + 9)(x - 5).",
        },
        {
          stepNumber: 5,
          description: "Solve and reject the non-physical root.",
          workingLatex: "x = -9 \\text{ (rejected)} \\quad \\text{or} \\quad x = 5",
          explanation:
            "Setting each bracket to zero gives x = -9 or x = 5. But x is a width, so it must be positive; x = -9 is impossible and is rejected. Hence x = 5. Check: width 5, length 9, area 5 \\cdot 9 = 45 cm^2.",
        },
      ],
      finalAnswer: "\\(x = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga38-021",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The product of two consecutive positive integers is \\(72\\). By forming and solving a quadratic equation, find the two integers.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "forming a quadratic", "consecutive integers", "reject negative root", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define the integers and form an equation.",
          workingLatex: "n(n + 1) = 72",
          explanation:
            "Let the smaller integer be n. 'Consecutive' means the next integer is one more, n + 1. Their product is given as 72, so n(n + 1) = 72.",
        },
        {
          stepNumber: 2,
          description: "Expand and rearrange to = 0.",
          workingLatex: "n^{2} + n = 72 \\Rightarrow n^{2} + n - 72 = 0",
          explanation:
            "Expand the bracket to n^2 + n, then subtract 72 from both sides so one side is zero, ready for the null-factor law.",
        },
        {
          stepNumber: 3,
          description: "Factorise.",
          workingLatex: "(n + 9)(n - 8) = 0",
          explanation:
            "We need two numbers with product -72 and sum 1. The pair 9 and -8 gives product -72 and sum 1, so the factorisation is (n + 9)(n - 8).",
        },
        {
          stepNumber: 4,
          description: "Solve and reject the non-positive root.",
          workingLatex: "n = -9 \\text{ (rejected)} \\quad \\text{or} \\quad n = 8",
          explanation:
            "Setting each bracket to zero gives n = -9 or n = 8. The integers are stated to be positive, so n = -9 is rejected. With n = 8 the two integers are 8 and 9; check 8 \\cdot 9 = 72.",
        },
      ],
      finalAnswer: "\\(8 \\text{ and } 9\\)",
      canonicalAnswer: "8 and 9",
    },
  },
  {
    id: "ga38-022",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve \\(6x^2 - x - 2 = 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "non-monic", "splitting the middle term", "null-factor law", "Higher"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute a·c and find two numbers.",
          workingLatex: "a \\cdot c = 6 \\cdot (-2) = -12; \\quad (-4) \\cdot 3 = -12, \\; -4 + 3 = -1",
          explanation:
            "With a = 6 use the ac method: a \\cdot c = 6 \\cdot (-2) = -12. Find two numbers multiplying to -12 and adding to b = -1. The pair -4 and 3 works (note b = -1 because the middle term is just -x).",
        },
        {
          stepNumber: 2,
          description: "Split the middle term.",
          workingLatex: "6x^{2} - 4x + 3x - 2 = 0",
          explanation:
            "Rewrite -x as -4x + 3x so the expression has four terms, ready for grouping. The value is unchanged because -4x + 3x = -x.",
        },
        {
          stepNumber: 3,
          description: "Factorise by grouping.",
          workingLatex: "2x(3x - 2) + 1(3x - 2) = 0 \\Rightarrow (2x + 1)(3x - 2) = 0",
          explanation:
            "From 6x^2 - 4x take out 2x to get 2x(3x - 2); from 3x - 2 take out 1 to get 1(3x - 2). Both share the bracket (3x - 2), which factors out, leaving (2x + 1)(3x - 2).",
        },
        {
          stepNumber: 4,
          description: "Apply the null-factor law and solve.",
          workingLatex: "2x + 1 = 0 \\text{ or } 3x - 2 = 0 \\Rightarrow x = -\\frac{1}{2} \\text{ or } x = \\frac{2}{3}",
          explanation:
            "Set each bracket to zero: 2x + 1 = 0 gives x = -\\frac{1}{2}, and 3x - 2 = 0 gives x = \\frac{2}{3}. Check: 6(-\\frac{1}{2})^2 - (-\\frac{1}{2}) - 2 = \\frac{6}{4} + \\frac{1}{2} - 2 = 0 and 6(\\frac{2}{3})^2 - \\frac{2}{3} - 2 = \\frac{24}{9} - \\frac{2}{3} - 2 = \\frac{8}{3} - \\frac{2}{3} - 2 = 0.",
        },
      ],
      finalAnswer: "\\(x = -\\dfrac{1}{2} \\text{ or } x = \\dfrac{2}{3}\\)",
      canonicalAnswer: "x=-1/2 or x=2/3",
    },
  },
  {
    id: "ga38-023",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A right-angled triangle has a base of \\((x + 1)\\) cm and a height of \\((x - 2)\\) cm. Its area is \\(14\\) cm\\(^2\\). Find the value of \\(x\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "forming a quadratic", "geometry", "reject negative root", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the area formula.",
          workingLatex: "\\frac{1}{2}(x + 1)(x - 2) = 14",
          explanation:
            "The area of a triangle is \\frac{1}{2} \\times base \\times height. Substituting the given expressions, that is \\frac{1}{2}(x + 1)(x - 2), and it equals the given area 14.",
        },
        {
          stepNumber: 2,
          description: "Clear the fraction.",
          workingLatex: "(x + 1)(x - 2) = 28",
          explanation:
            "Multiply both sides by 2 to remove the \\frac{1}{2}. Doing this early keeps the later algebra free of fractions.",
        },
        {
          stepNumber: 3,
          description: "Expand the brackets.",
          workingLatex: "x^{2} - x - 2 = 28",
          explanation:
            "Expand (x + 1)(x - 2): the terms are x \\cdot x = x^2, x \\cdot (-2) = -2x, 1 \\cdot x = x and 1 \\cdot (-2) = -2, and -2x + x = -x, giving x^2 - x - 2.",
        },
        {
          stepNumber: 4,
          description: "Rearrange to = 0.",
          workingLatex: "x^{2} - x - 30 = 0",
          explanation:
            "Subtract 28 from both sides so one side is zero. The constant becomes -2 - 28 = -30.",
        },
        {
          stepNumber: 5,
          description: "Factorise.",
          workingLatex: "(x - 6)(x + 5) = 0",
          explanation:
            "We need two numbers with product -30 and sum -1. The pair -6 and 5 gives product -30 and sum -1, so the factorisation is (x - 6)(x + 5).",
        },
        {
          stepNumber: 6,
          description: "Solve and reject the impossible root.",
          workingLatex: "x = 6 \\quad \\text{or} \\quad x = -5 \\text{ (rejected)}",
          explanation:
            "Setting each bracket to zero gives x = 6 or x = -5. If x = -5 the height x - 2 = -7 would be negative, which is impossible for a length, so reject it. Hence x = 6, giving base 7 and height 4, with area \\frac{1}{2}(7)(4) = 14 cm^2.",
        },
      ],
      finalAnswer: "\\(x = 6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga38-024",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve \\(\\dfrac{x^2 - 16}{x - 4} = 0\\), stating any value of \\(x\\) that must be excluded.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "difference of two squares", "algebraic fraction", "null-factor law", "Higher"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the excluded value.",
          workingLatex: "x - 4 \\neq 0 \\Rightarrow x \\neq 4",
          explanation:
            "Division by zero is undefined, so the denominator x - 4 cannot be zero. That rules out x = 4 from the very start; if a solution turns out to be 4, it must be discarded.",
        },
        {
          stepNumber: 2,
          description: "Set the numerator to zero.",
          workingLatex: "x^{2} - 16 = 0",
          explanation:
            "A fraction equals zero exactly when its numerator is zero (and the denominator is non-zero). So the equation reduces to solving the top, x^2 - 16 = 0.",
        },
        {
          stepNumber: 3,
          description: "Factorise the numerator (difference of two squares).",
          workingLatex: "x^{2} - 16 = (x - 4)(x + 4) = 0",
          explanation:
            "Since 16 = 4^2, the numerator is a difference of two squares, factorising as (x - 4)(x + 4). Notice the bracket (x - 4) is exactly the denominator — that is what makes the excluded value matter.",
        },
        {
          stepNumber: 4,
          description: "Apply the null-factor law, then discard the excluded root.",
          workingLatex: "x = 4 \\text{ (excluded)} \\quad \\text{or} \\quad x = -4",
          explanation:
            "The two bracket roots are x = 4 and x = -4, but x = 4 makes the denominator zero and was excluded in step 1, so it is not allowed. The only valid solution is x = -4. Check: \\frac{(-4)^2 - 16}{-4 - 4} = \\frac{0}{-8} = 0.",
        },
      ],
      finalAnswer: "\\(x = -4\\)",
      canonicalAnswer: "x=-4",
    },
  },
  {
    id: "ga38-025",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A number is added to its square to give \\(56\\). Given that the number is negative, find the number.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "forming a quadratic", "interpret roots", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form an equation.",
          workingLatex: "n^{2} + n = 56",
          explanation:
            "Let the number be n. Its square is n^2, and 'added to its square' means n^2 + n. This equals the given total 56.",
        },
        {
          stepNumber: 2,
          description: "Rearrange to = 0.",
          workingLatex: "n^{2} + n - 56 = 0",
          explanation:
            "Subtract 56 from both sides so one side is zero, putting the equation in the form needed for the null-factor law.",
        },
        {
          stepNumber: 3,
          description: "Factorise.",
          workingLatex: "(n + 8)(n - 7) = 0",
          explanation:
            "We need two numbers with product -56 and sum 1. The pair 8 and -7 gives product -56 and sum 1, so the factorisation is (n + 8)(n - 7).",
        },
        {
          stepNumber: 4,
          description: "Solve and select the root fitting the condition.",
          workingLatex: "n = -8 \\quad \\text{or} \\quad n = 7",
          explanation:
            "Setting each bracket to zero gives n = -8 or n = 7. Both are mathematically valid, but the problem says the number is negative, so we choose n = -8 and reject n = 7. Check: (-8)^2 + (-8) = 64 - 8 = 56.",
        },
      ],
      finalAnswer: "\\(n = -8\\)",
      canonicalAnswer: "-8",
    },
  },
  {
    id: "ga38-026",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve \\(3x^2 = 12x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "rearrange to zero", "common factor", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange to = 0.",
          workingLatex: "3x^{2} = 12x \\Rightarrow 3x^{2} - 12x = 0",
          explanation:
            "Subtract 12x from both sides so one side is zero. As with all 'x^2 = kx' problems, do NOT divide both sides by x to cancel — that would assume x \\neq 0 and lose the root x = 0.",
        },
        {
          stepNumber: 2,
          description: "Take out the common factor 3x.",
          workingLatex: "3x^{2} - 12x = 3x(x - 4) = 0",
          explanation:
            "Both terms share a factor of 3x: 3x \\cdot x = 3x^2 and 3x \\cdot (-4) = -12x. Pulling out the largest common factor leaves the simple bracket (x - 4).",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "3x = 0 \\quad \\text{or} \\quad x - 4 = 0",
          explanation:
            "The product is zero, so one factor must be zero. The constant 3 cannot be zero, so 3x = 0 forces x = 0; the other case is x - 4 = 0.",
        },
        {
          stepNumber: 4,
          description: "Solve each equation.",
          workingLatex: "x = 0 \\quad \\text{or} \\quad x = 4",
          explanation:
            "From 3x = 0 we get x = 0, and from x - 4 = 0 we get x = 4. Both roots are valid. Check: 3(0)^2 = 0 = 12(0) and 3(4)^2 = 48 = 12(4).",
        },
      ],
      finalAnswer: "\\(x = 0 \\text{ or } x = 4\\)",
      canonicalAnswer: "x=0 or x=4",
    },
  },
  {
    id: "ga38-027",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A rectangular garden is \\(3\\) m longer than it is wide. Its area is \\(40\\) m\\(^2\\). Find the width of the garden.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "forming a quadratic", "geometry", "reject negative root", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Introduce a variable and express the sides.",
          workingLatex: "\\text{width} = w, \\quad \\text{length} = w + 3",
          explanation:
            "Let the width be w metres. The garden is 3 m longer than it is wide, so the length is the width plus 3, that is w + 3.",
        },
        {
          stepNumber: 2,
          description: "Form an equation from the area.",
          workingLatex: "w(w + 3) = 40",
          explanation:
            "Area equals width \\times length, here w(w + 3). Setting it equal to the given area 40 turns the description into an equation.",
        },
        {
          stepNumber: 3,
          description: "Expand and rearrange to = 0.",
          workingLatex: "w^{2} + 3w = 40 \\Rightarrow w^{2} + 3w - 40 = 0",
          explanation:
            "Expand the bracket to w^2 + 3w, then subtract 40 from both sides so one side is zero, ready for the null-factor law.",
        },
        {
          stepNumber: 4,
          description: "Factorise.",
          workingLatex: "(w + 8)(w - 5) = 0",
          explanation:
            "We need two numbers with product -40 and sum 3. The pair 8 and -5 gives product -40 and sum 3, so the factorisation is (w + 8)(w - 5).",
        },
        {
          stepNumber: 5,
          description: "Solve and reject the negative width.",
          workingLatex: "w = -8 \\text{ (rejected)} \\quad \\text{or} \\quad w = 5",
          explanation:
            "Setting each bracket to zero gives w = -8 or w = 5. A width cannot be negative, so reject w = -8. The width is 5 m; check 5 \\times (5 + 3) = 5 \\times 8 = 40 m^2.",
        },
      ],
      finalAnswer: "\\(w = 5 \\text{ m}\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga38-028",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve \\(4x^2 + 12x + 9 = 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "non-monic", "repeated root", "perfect square", "null-factor law", "Higher"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute a·c and find two numbers.",
          workingLatex: "a \\cdot c = 4 \\cdot 9 = 36; \\quad 6 \\cdot 6 = 36, \\; 6 + 6 = 12",
          explanation:
            "With a = 4 use the ac method: a \\cdot c = 4 \\cdot 9 = 36. Find two numbers multiplying to 36 and adding to b = 12. The pair 6 and 6 repeats — a hint that this is a perfect square.",
        },
        {
          stepNumber: 2,
          description: "Split the middle term and group.",
          workingLatex: "4x^{2} + 6x + 6x + 9 = 0 \\Rightarrow 2x(2x + 3) + 3(2x + 3) = 0",
          explanation:
            "Rewrite 12x as 6x + 6x, then group: from 4x^2 + 6x take out 2x to get 2x(2x + 3); from 6x + 9 take out 3 to get 3(2x + 3). Both leave the common bracket (2x + 3).",
        },
        {
          stepNumber: 3,
          description: "Factorise as a perfect square.",
          workingLatex: "(2x + 3)(2x + 3) = (2x + 3)^{2} = 0",
          explanation:
            "Both brackets are (2x + 3), so the factorisation is the perfect square (2x + 3)^2. The repeated number 6 in step 1 is exactly why this collapses to a square.",
        },
        {
          stepNumber: 4,
          description: "Apply the null-factor law and solve.",
          workingLatex: "(2x + 3)^{2} = 0 \\Rightarrow 2x + 3 = 0 \\Rightarrow x = -\\frac{3}{2}",
          explanation:
            "A square is zero only when its base is zero, so 2x + 3 = 0, giving the single repeated root x = -\\frac{3}{2}. Check: 4(-\\frac{3}{2})^2 + 12(-\\frac{3}{2}) + 9 = 9 - 18 + 9 = 0.",
        },
      ],
      finalAnswer: "\\(x = -\\dfrac{3}{2}\\)",
      canonicalAnswer: "x=-3/2",
    },
  },
  {
    id: "ga38-029",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A ball is thrown and its height \\(h\\) metres after \\(t\\) seconds is given by \\(h = 20t - 5t^2\\). Find the time at which the ball returns to the ground (\\(h = 0\\)), other than at launch.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "common factor", "interpret roots", "kinematics", "null-factor law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the height to zero.",
          workingLatex: "20t - 5t^{2} = 0",
          explanation:
            "The ball is on the ground when its height h = 0, so substitute h = 0 into h = 20t - 5t^2 to get the equation 20t - 5t^2 = 0.",
        },
        {
          stepNumber: 2,
          description: "Take out the common factor 5t.",
          workingLatex: "20t - 5t^{2} = 5t(4 - t) = 0",
          explanation:
            "Both terms share a factor of 5t: 5t \\cdot 4 = 20t and 5t \\cdot (-t) = -5t^2. Factoring it out leaves the bracket (4 - t). As always, do not divide by t — that would discard the launch solution.",
        },
        {
          stepNumber: 3,
          description: "Apply the null-factor law.",
          workingLatex: "5t = 0 \\quad \\text{or} \\quad 4 - t = 0",
          explanation:
            "The product is zero, so one factor must be zero. The constant 5 cannot be zero, so 5t = 0 forces t = 0; the other case is 4 - t = 0.",
        },
        {
          stepNumber: 4,
          description: "Solve each factor.",
          workingLatex: "t = 0 \\quad \\text{or} \\quad t = 4",
          explanation:
            "From 5t = 0 we get t = 0, and from 4 - t = 0 we get t = 4. So the ball is at ground level at these two times.",
        },
        {
          stepNumber: 5,
          description: "Interpret in context.",
          workingLatex: "t = 4 \\text{ s}",
          explanation:
            "t = 0 is the launch moment, when the ball starts at ground level. The question asks for the return time other than launch, so the answer is t = 4 s. Check: h = 20(4) - 5(4)^2 = 80 - 80 = 0.",
        },
      ],
      finalAnswer: "\\(t = 4 \\text{ s}\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga38-030",
    topicRef: "ga38",
    topicTitle: "Solving quadratics by factorising",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The lengths of the two shorter sides of a right-angled triangle are \\(x\\) cm and \\((x + 7)\\) cm. The hypotenuse is \\(13\\) cm. Using Pythagoras' theorem, form and solve a quadratic to find \\(x\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics by factorising", "forming a quadratic", "Pythagoras", "reject negative root", "null-factor law", "Higher"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply Pythagoras' theorem.",
          workingLatex: "x^{2} + (x + 7)^{2} = 13^{2}",
          explanation:
            "In a right-angled triangle Pythagoras' theorem says the squares of the two shorter sides add up to the square of the hypotenuse. The shorter sides are x and x + 7, and the hypotenuse is 13.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket and the constant.",
          workingLatex: "x^{2} + x^{2} + 14x + 49 = 169",
          explanation:
            "Expand (x + 7)^2 = x^2 + 14x + 49 (remember the middle term 2 \\cdot 7 \\cdot x = 14x, a common place to slip), and evaluate 13^2 = 169.",
        },
        {
          stepNumber: 3,
          description: "Collect terms and rearrange to = 0.",
          workingLatex: "2x^{2} + 14x + 49 - 169 = 0 \\Rightarrow 2x^{2} + 14x - 120 = 0",
          explanation:
            "Combine the two x^2 terms into 2x^2, then subtract 169 from both sides. The constant becomes 49 - 169 = -120.",
        },
        {
          stepNumber: 4,
          description: "Divide through by the common factor 2.",
          workingLatex: "x^{2} + 7x - 60 = 0",
          explanation:
            "Every term is divisible by 2, so dividing through simplifies the quadratic to a monic one, which is much easier to factorise. Here this is safe (unlike dividing by a variable) because 2 is a non-zero constant.",
        },
        {
          stepNumber: 5,
          description: "Factorise.",
          workingLatex: "(x + 12)(x - 5) = 0",
          explanation:
            "We need two numbers with product -60 and sum 7. The pair 12 and -5 gives product -60 and sum 7, so the factorisation is (x + 12)(x - 5).",
        },
        {
          stepNumber: 6,
          description: "Solve and reject the negative length.",
          workingLatex: "x = -12 \\text{ (rejected)} \\quad \\text{or} \\quad x = 5",
          explanation:
            "Setting each bracket to zero gives x = -12 or x = 5. A side length cannot be negative, so reject x = -12. Hence x = 5; check 5^2 + 12^2 = 25 + 144 = 169 = 13^2.",
        },
      ],
      finalAnswer: "\\(x = 5\\)",
      canonicalAnswer: "5",
    },
  },
];
