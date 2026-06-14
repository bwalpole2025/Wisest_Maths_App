/**
 * Topic: Factorising quadratics ax^2 + bx + c
 * Ref: ga10  (DfE A4)
 * Strand: Algebra — GCSE Maths (Higher)
 *
 * Coverage: factorising NON-MONIC quadratics (leading coefficient a > 1, or
 *   a < 0) into two linear brackets, primarily by the "split the middle term"
 *   / AC method — compute a·c, find two numbers multiplying to a·c and adding
 *   to b, rewrite bx as the sum of those two terms, then factorise by grouping.
 *   Clusters covered:
 *     (1) a>1 with all positive coefficients, e.g. 2x^2+7x+3;
 *     (2) a>1 with a negative constant, e.g. 3x^2+x-2, 2x^2-5x-3;
 *     (3) take out a common numerical factor first, then factorise,
 *         e.g. 4x^2+10x+4 = 2(2x^2+5x+2);
 *     (4) a<0 or a rearrangement, handled by factoring out -1,
 *         e.g. 6-x-2x^2;
 *     (5) factorise-then-solve ax^2+bx+c=0 by the zero-product principle
 *         (a few Challenge items connecting factorising to the roots).
 *   NOT covered: monic quadratics x^2+bx+c (bank ga09); difference of two
 *   squares (bank ga11).
 *
 * Difficulty split (30 total):
 *   - Foundation: ga10-001 .. ga10-004  (4)  — cleanest a=2 cases.
 *   - Standard:   ga10-005 .. ga10-018  (14)
 *   - Challenge:  ga10-019 .. ga10-030  (12)
 * Id range: ga10-001 .. ga10-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot
 *   for multiplication, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga10-001",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(2x^2 + 7x + 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off a, b and c.",
          workingLatex: "a = 2, \\; b = 7, \\; c = 3",
          explanation:
            "Match the quadratic to the template ax^2 + bx + c. Here the leading coefficient a = 2 is not 1, so we cannot just look for two numbers that multiply to c and add to b — we use the AC method instead.",
        },
        {
          stepNumber: 2,
          description: "Compute the product a·c.",
          workingLatex: "a\\cdot c = 2\\cdot 3 = 6",
          explanation:
            "The AC method hinges on the product a·c = 6. This is the number our two split values must multiply to; their sum must come out as b = 7.",
        },
        {
          stepNumber: 3,
          description: "Find two numbers with product 6 and sum 7.",
          workingLatex: "1\\cdot 6 = 6, \\quad 1 + 6 = 7",
          explanation:
            "Every coefficient is positive, so look at positive factor pairs of 6: (1,6) and (2,3). Check their sums: 1+6 = 7 (yes, this is b) while 2+3 = 5 (no). So the numbers are 1 and 6.",
        },
        {
          stepNumber: 4,
          description: "Split the middle term 7x using those numbers.",
          workingLatex: "2x^2 + 7x + 3 = 2x^2 + x + 6x + 3",
          explanation:
            "Rewrite 7x as x + 6x. The trinomial becomes a four-term expression, which is exactly what we need to factorise by grouping. The order x then 6x is chosen so the first pair shares a factor.",
        },
        {
          stepNumber: 5,
          description: "Group the terms in pairs and factor each pair.",
          workingLatex: "= x(2x + 1) + 3(2x + 1)",
          explanation:
            "From 2x^2 + x take out x to get x(2x+1); from 6x + 3 take out 3 to get 3(2x+1). The two brackets must match — if they don't, the split was wrong or written in the wrong order.",
        },
        {
          stepNumber: 6,
          description: "Factor out the common bracket (2x + 1).",
          workingLatex: "= (2x + 1)(x + 3)",
          explanation:
            "Both terms now share the factor (2x+1). Taking it out leaves x + 3 as the second bracket.",
        },
        {
          stepNumber: 7,
          description: "Check by expanding.",
          workingLatex: "(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3 \\checkmark",
          explanation:
            "Expanding the brackets returns the original quadratic, confirming the factorisation. A quick expand-back is the fastest way to catch a sign or arithmetic slip.",
        },
      ],
      finalAnswer: "\\((2x+1)(x+3)\\)",
      canonicalAnswer: "(2x+1)(x+3)",
    },
  },
  {
    id: "ga10-002",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(2x^2 + 5x + 2\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off a, b and c.",
          workingLatex: "a = 2, \\; b = 5, \\; c = 2",
          explanation:
            "The leading coefficient a = 2 is not 1, so the AC method applies. Identifying a, b and c cleanly first prevents mix-ups later.",
        },
        {
          stepNumber: 2,
          description: "Compute the product a·c.",
          workingLatex: "a\\cdot c = 2\\cdot 2 = 4",
          explanation:
            "We need two numbers multiplying to a·c = 4 and adding to b = 5.",
        },
        {
          stepNumber: 3,
          description: "Find two numbers with product 4 and sum 5.",
          workingLatex: "1\\cdot 4 = 4, \\quad 1 + 4 = 5",
          explanation:
            "All coefficients are positive, so try positive factor pairs of 4: (1,4) and (2,2). Their sums are 5 and 4; only 1 and 4 give the sum b = 5.",
        },
        {
          stepNumber: 4,
          description: "Split the middle term 5x.",
          workingLatex: "2x^2 + 5x + 2 = 2x^2 + x + 4x + 2",
          explanation:
            "Rewrite 5x as x + 4x to produce a four-term expression ready for grouping.",
        },
        {
          stepNumber: 5,
          description: "Group in pairs and factor each pair.",
          workingLatex: "= x(2x + 1) + 2(2x + 1)",
          explanation:
            "From 2x^2 + x take out x; from 4x + 2 take out 2. Both groups leave the same bracket (2x+1), which confirms the split was correct.",
        },
        {
          stepNumber: 6,
          description: "Factor out the common bracket.",
          workingLatex: "= (2x + 1)(x + 2)",
          explanation:
            "Taking out the shared factor (2x+1) leaves x + 2.",
        },
        {
          stepNumber: 7,
          description: "Check by expanding.",
          workingLatex: "(2x + 1)(x + 2) = 2x^2 + 4x + x + 2 = 2x^2 + 5x + 2 \\checkmark",
          explanation:
            "The expansion matches the original, so the factorisation is correct.",
        },
      ],
      finalAnswer: "\\((2x+1)(x+2)\\)",
      canonicalAnswer: "(2x+1)(x+2)",
    },
  },
  {
    id: "ga10-003",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(2x^2 + 9x + 4\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off a, b and c.",
          workingLatex: "a = 2, \\; b = 9, \\; c = 4",
          explanation:
            "With a = 2 ≠ 1 we use the AC method rather than the simple 'two numbers' shortcut for monic quadratics.",
        },
        {
          stepNumber: 2,
          description: "Compute the product a·c.",
          workingLatex: "a\\cdot c = 2\\cdot 4 = 8",
          explanation:
            "We need two numbers multiplying to a·c = 8 and adding to b = 9.",
        },
        {
          stepNumber: 3,
          description: "Find two numbers with product 8 and sum 9.",
          workingLatex: "1\\cdot 8 = 8, \\quad 1 + 8 = 9",
          explanation:
            "Positive factor pairs of 8 are (1,8) and (2,4). Their sums are 9 and 6; the pair 1 and 8 gives b = 9.",
        },
        {
          stepNumber: 4,
          description: "Split the middle term 9x.",
          workingLatex: "2x^2 + 9x + 4 = 2x^2 + x + 8x + 4",
          explanation:
            "Rewrite 9x as x + 8x, giving four terms ready to group.",
        },
        {
          stepNumber: 5,
          description: "Group in pairs and factor each pair.",
          workingLatex: "= x(2x + 1) + 4(2x + 1)",
          explanation:
            "From 2x^2 + x take out x; from 8x + 4 take out 4. Both leave (2x+1).",
        },
        {
          stepNumber: 6,
          description: "Factor out the common bracket.",
          workingLatex: "= (2x + 1)(x + 4)",
          explanation:
            "Taking out (2x+1) leaves x + 4.",
        },
        {
          stepNumber: 7,
          description: "Check by expanding.",
          workingLatex: "(2x + 1)(x + 4) = 2x^2 + 8x + x + 4 = 2x^2 + 9x + 4 \\checkmark",
          explanation:
            "The expansion reproduces the original quadratic.",
        },
      ],
      finalAnswer: "\\((2x+1)(x+4)\\)",
      canonicalAnswer: "(2x+1)(x+4)",
    },
  },
  {
    id: "ga10-004",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(2x^2 + 11x + 5\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off a, b and c.",
          workingLatex: "a = 2, \\; b = 11, \\; c = 5",
          explanation:
            "The leading coefficient a = 2 is not 1, so the AC method is needed.",
        },
        {
          stepNumber: 2,
          description: "Compute the product a·c.",
          workingLatex: "a\\cdot c = 2\\cdot 5 = 10",
          explanation:
            "We need two numbers multiplying to a·c = 10 and adding to b = 11.",
        },
        {
          stepNumber: 3,
          description: "Find two numbers with product 10 and sum 11.",
          workingLatex: "1\\cdot 10 = 10, \\quad 1 + 10 = 11",
          explanation:
            "Positive factor pairs of 10 are (1,10) and (2,5). Their sums are 11 and 7; the pair 1 and 10 gives b = 11.",
        },
        {
          stepNumber: 4,
          description: "Split the middle term 11x.",
          workingLatex: "2x^2 + 11x + 5 = 2x^2 + x + 10x + 5",
          explanation:
            "Rewrite 11x as x + 10x to set up the grouping.",
        },
        {
          stepNumber: 5,
          description: "Group in pairs and factor each pair.",
          workingLatex: "= x(2x + 1) + 5(2x + 1)",
          explanation:
            "From 2x^2 + x take out x; from 10x + 5 take out 5. Both leave (2x+1).",
        },
        {
          stepNumber: 6,
          description: "Factor out the common bracket.",
          workingLatex: "= (2x + 1)(x + 5)",
          explanation:
            "Taking out (2x+1) leaves x + 5.",
        },
        {
          stepNumber: 7,
          description: "Check by expanding.",
          workingLatex: "(2x + 1)(x + 5) = 2x^2 + 10x + x + 5 = 2x^2 + 11x + 5 \\checkmark",
          explanation:
            "The expansion matches, confirming the answer.",
        },
      ],
      finalAnswer: "\\((2x+1)(x+5)\\)",
      canonicalAnswer: "(2x+1)(x+5)",
    },
  },

  // ─────────────────────────── STANDARD (005–018) ───────────────────────────
  {
    id: "ga10-005",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(3x^2 + 10x + 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term", "factorising by grouping"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c.",
          workingLatex: "a = 3, \\; b = 10, \\; c = 3 \\;\\Rightarrow\\; a\\cdot c = 3\\cdot 3 = 9",
          explanation:
            "With a = 3 ≠ 1 we use the AC method. The target product is a·c = 9 and the target sum is b = 10.",
        },
        {
          stepNumber: 2,
          description: "List factor pairs of 9 and pick the pair summing to 10.",
          workingLatex: "9 = 1\\cdot 9 = 3\\cdot 3, \\quad 1 + 9 = 10",
          explanation:
            "All coefficients are positive, so both numbers are positive. The pair (3,3) adds to 6, but (1,9) adds to 10 = b. So the numbers are 1 and 9.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the middle term 10x as 1x + 9x.",
          workingLatex: "3x^2 + 10x + 3 = 3x^2 + x + 9x + 3",
          explanation:
            "Splitting 10x using our two numbers turns the trinomial into a four-term expression ready for grouping.",
        },
        {
          stepNumber: 4,
          description: "Group into pairs and take out common factors.",
          workingLatex: "= x(3x + 1) + 3(3x + 1)",
          explanation:
            "From 3x^2 + x take out x to get x(3x+1); from 9x + 3 take out 3 to get 3(3x+1). The bracket (3x+1) must match in both groups — that confirms the split was correct.",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (3x + 1)(x + 3)",
          explanation:
            "Both terms share the factor (3x+1); taking it out leaves x + 3 as the other bracket.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(3x + 1)(x + 3) = 3x^2 + 9x + x + 3 = 3x^2 + 10x + 3 \\checkmark",
          explanation:
            "The expansion returns the original, so the factorisation is correct.",
        },
      ],
      finalAnswer: "\\((3x+1)(x+3)\\)",
      canonicalAnswer: "(3x+1)(x+3)",
    },
  },
  {
    id: "ga10-006",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(6x^2 + 11x + 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term", "factorising by grouping"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c.",
          workingLatex: "a = 6, \\; b = 11, \\; c = 3 \\;\\Rightarrow\\; a\\cdot c = 6\\cdot 3 = 18",
          explanation:
            "We need two numbers multiplying to a·c = 18 and adding to b = 11.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product 18 and sum 11.",
          workingLatex: "18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6, \\quad 2 + 9 = 11",
          explanation:
            "All coefficients are positive, so test positive factor pairs of 18. Their sums are 19, 11 and 9; only (2,9) gives b = 11.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term 11x.",
          workingLatex: "6x^2 + 11x + 3 = 6x^2 + 2x + 9x + 3",
          explanation:
            "Write 11x as 2x + 9x. Putting 2x first is convenient because 6x^2 and 2x share the factor 2x, keeping the grouping clean.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= 2x(3x + 1) + 3(3x + 1)",
          explanation:
            "From 6x^2 + 2x take out 2x; from 9x + 3 take out 3. Both groups leave (3x+1).",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (3x + 1)(2x + 3)",
          explanation:
            "Taking out (3x+1) leaves 2x + 3.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(3x + 1)(2x + 3) = 6x^2 + 9x + 2x + 3 = 6x^2 + 11x + 3 \\checkmark",
          explanation:
            "The expansion matches the original quadratic.",
        },
      ],
      finalAnswer: "\\((3x+1)(2x+3)\\)",
      canonicalAnswer: "(3x+1)(2x+3)",
    },
  },
  {
    id: "ga10-007",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(3x^2 + x - 2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "negative constant", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c (mind the sign).",
          workingLatex: "a = 3, \\; b = 1, \\; c = -2 \\;\\Rightarrow\\; a\\cdot c = 3\\cdot(-2) = -6",
          explanation:
            "Because c is negative, a·c = -6 is negative. A negative product means the two numbers have OPPOSITE signs. Their sum must be b = 1.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product -6 and sum 1.",
          workingLatex: "(-2)\\cdot 3 = -6, \\quad -2 + 3 = 1",
          explanation:
            "Opposite-sign pairs giving product -6: (-1,6), (1,-6), (-2,3), (2,-3). The pair -2 and 3 adds to 1 = b. Because the sum is positive, the larger-magnitude number (3) is the positive one.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term x.",
          workingLatex: "3x^2 + x - 2 = 3x^2 - 2x + 3x - 2",
          explanation:
            "Rewrite x as -2x + 3x. Keep each sign attached carefully — a sign slip while splitting is the single most common mistake on these.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= x(3x - 2) + 1(3x - 2)",
          explanation:
            "From 3x^2 - 2x take out x to get x(3x-2); from 3x - 2 take out 1 to get 1(3x-2). Both leave (3x-2). Writing the explicit '1' keeps the grouping pattern visible.",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (3x - 2)(x + 1)",
          explanation:
            "Taking out (3x-2) leaves x + 1.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(3x - 2)(x + 1) = 3x^2 + 3x - 2x - 2 = 3x^2 + x - 2 \\checkmark",
          explanation:
            "The expansion returns the original, confirming the factorisation.",
        },
      ],
      finalAnswer: "\\((3x-2)(x+1)\\)",
      canonicalAnswer: "(3x-2)(x+1)",
    },
  },
  {
    id: "ga10-008",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(2x^2 - 5x - 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "negative constant", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c.",
          workingLatex: "a = 2, \\; b = -5, \\; c = -3 \\;\\Rightarrow\\; a\\cdot c = 2\\cdot(-3) = -6",
          explanation:
            "a·c = -6 is negative, so the two numbers have opposite signs. Their sum must equal b = -5.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product -6 and sum -5.",
          workingLatex: "1\\cdot(-6) = -6, \\quad 1 + (-6) = -5",
          explanation:
            "Opposite-sign pairs with product -6: the pair 1 and -6 adds to -5 = b. Since the required sum is negative, the larger-magnitude number (6) carries the minus sign.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term -5x.",
          workingLatex: "2x^2 - 5x - 3 = 2x^2 + x - 6x - 3",
          explanation:
            "Rewrite -5x as +x - 6x. Ordering the +x first lets 2x^2 + x group cleanly.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= x(2x + 1) - 3(2x + 1)",
          explanation:
            "From 2x^2 + x take out x; from -6x - 3 take out -3 (NOT +3) so the bracket comes out as (2x+1) to match the first group. Pulling out a negative factor is the step students most often get wrong.",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (2x + 1)(x - 3)",
          explanation:
            "Taking out (2x+1) leaves x - 3.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(2x + 1)(x - 3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3 \\checkmark",
          explanation:
            "The expansion reproduces the original quadratic.",
        },
      ],
      finalAnswer: "\\((2x+1)(x-3)\\)",
      canonicalAnswer: "(2x+1)(x-3)",
    },
  },
  {
    id: "ga10-009",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(5x^2 - 13x + 6\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term", "factorising by grouping"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c.",
          workingLatex: "a = 5, \\; b = -13, \\; c = 6 \\;\\Rightarrow\\; a\\cdot c = 5\\cdot 6 = 30",
          explanation:
            "a·c = 30 is positive but b = -13 is negative. A positive product with a negative sum forces BOTH numbers to be negative: they multiply to +30 and add to -13.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product 30 and sum -13.",
          workingLatex: "(-3)\\cdot(-10) = 30, \\quad -3 + (-10) = -13",
          explanation:
            "Negative factor pairs of 30: (-1,-30), (-2,-15), (-3,-10), (-5,-6). Their sums are -31, -17, -13, -11; only (-3,-10) gives b = -13.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term -13x.",
          workingLatex: "5x^2 - 13x + 6 = 5x^2 - 3x - 10x + 6",
          explanation:
            "Rewrite -13x as -3x - 10x, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= x(5x - 3) - 2(5x - 3)",
          explanation:
            "From 5x^2 - 3x take out x; from -10x + 6 take out -2 (so the bracket is (5x-3) again, not (-5x+3)). Watch the sign carefully when factoring -10x + 6.",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (5x - 3)(x - 2)",
          explanation:
            "Taking out (5x-3) leaves x - 2.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(5x - 3)(x - 2) = 5x^2 - 10x - 3x + 6 = 5x^2 - 13x + 6 \\checkmark",
          explanation:
            "The expansion matches the original.",
        },
      ],
      finalAnswer: "\\((5x-3)(x-2)\\)",
      canonicalAnswer: "(5x-3)(x-2)",
    },
  },
  {
    id: "ga10-010",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(4x^2 + 4x - 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "negative constant", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c.",
          workingLatex: "a = 4, \\; b = 4, \\; c = -3 \\;\\Rightarrow\\; a\\cdot c = 4\\cdot(-3) = -12",
          explanation:
            "a·c = -12 is negative, so the two numbers have opposite signs and add to b = 4.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product -12 and sum 4.",
          workingLatex: "(-2)\\cdot 6 = -12, \\quad -2 + 6 = 4",
          explanation:
            "Opposite-sign pairs of -12: (-1,12), (1,-12), (-2,6), (2,-6), (-3,4), (3,-4). The pair -2 and 6 adds to 4 = b.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term 4x.",
          workingLatex: "4x^2 + 4x - 3 = 4x^2 - 2x + 6x - 3",
          explanation:
            "Rewrite 4x as -2x + 6x, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= 2x(2x - 1) + 3(2x - 1)",
          explanation:
            "From 4x^2 - 2x take out 2x; from 6x - 3 take out 3. Both leave (2x-1).",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (2x - 1)(2x + 3)",
          explanation:
            "Taking out (2x-1) leaves 2x + 3.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(2x - 1)(2x + 3) = 4x^2 + 6x - 2x - 3 = 4x^2 + 4x - 3 \\checkmark",
          explanation:
            "The expansion returns the original quadratic.",
        },
      ],
      finalAnswer: "\\((2x-1)(2x+3)\\)",
      canonicalAnswer: "(2x-1)(2x+3)",
    },
  },
  {
    id: "ga10-011",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(4x^2 + 10x + 4\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "common factor first", "AC method", "factorising fully"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Look for a common numerical factor FIRST.",
          workingLatex: "\\gcd(4, 10, 4) = 2 \\;\\Rightarrow\\; 4x^2 + 10x + 4 = 2(2x^2 + 5x + 2)",
          explanation:
            "Before applying the AC method, always check whether all three coefficients share a factor. Here 4, 10 and 4 are all divisible by 2, so take 2 outside. Forgetting this step is a common way to lose the 'factorise FULLY' mark.",
        },
        {
          stepNumber: 2,
          description: "Compute a·c for the bracket 2x^2 + 5x + 2.",
          workingLatex: "a = 2, \\; b = 5, \\; c = 2 \\;\\Rightarrow\\; a\\cdot c = 2\\cdot 2 = 4",
          explanation:
            "Now factorise the simpler quadratic inside. We need two numbers multiplying to 4 and adding to 5.",
        },
        {
          stepNumber: 3,
          description: "Find the two numbers.",
          workingLatex: "1\\cdot 4 = 4, \\quad 1 + 4 = 5",
          explanation:
            "Positive factor pairs of 4 are (1,4) and (2,2), summing to 5 and 4. The pair 1 and 4 gives b = 5.",
        },
        {
          stepNumber: 4,
          description: "Split the middle term 5x.",
          workingLatex: "2x^2 + 5x + 2 = 2x^2 + x + 4x + 2",
          explanation:
            "Rewrite 5x as x + 4x, ready to group.",
        },
        {
          stepNumber: 5,
          description: "Group and factor out the common bracket.",
          workingLatex: "= x(2x + 1) + 2(2x + 1) = (2x + 1)(x + 2)",
          explanation:
            "From 2x^2 + x take out x; from 4x + 2 take out 2. Both leave (2x+1), which factors out to give (2x+1)(x+2).",
        },
        {
          stepNumber: 6,
          description: "Reattach the factor of 2.",
          workingLatex: "4x^2 + 10x + 4 = 2(2x + 1)(x + 2)",
          explanation:
            "Do not forget the 2 you took out at the start — the full factorisation must include it. Dropping it is the classic 'fully' error.",
        },
        {
          stepNumber: 7,
          description: "Check by expanding.",
          workingLatex: "2(2x + 1)(x + 2) = 2(2x^2 + 5x + 2) = 4x^2 + 10x + 4 \\checkmark",
          explanation:
            "Expanding the inner brackets then multiplying by 2 returns the original.",
        },
      ],
      finalAnswer: "\\(2(2x+1)(x+2)\\)",
      canonicalAnswer: "2(2x+1)(x+2)",
    },
  },
  {
    id: "ga10-012",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(6x^2 - 9x - 6\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "common factor first", "negative constant", "factorising fully"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take out the common numerical factor first.",
          workingLatex: "\\gcd(6, 9, 6) = 3 \\;\\Rightarrow\\; 6x^2 - 9x - 6 = 3(2x^2 - 3x - 2)",
          explanation:
            "6, 9 and 6 are all divisible by 3. Take 3 outside to simplify the quadratic before factorising — and to secure the 'fully' mark.",
        },
        {
          stepNumber: 2,
          description: "Compute a·c for 2x^2 - 3x - 2.",
          workingLatex: "a = 2, \\; b = -3, \\; c = -2 \\;\\Rightarrow\\; a\\cdot c = 2\\cdot(-2) = -4",
          explanation:
            "a·c = -4 is negative, so the two numbers have opposite signs and add to b = -3.",
        },
        {
          stepNumber: 3,
          description: "Find the two numbers.",
          workingLatex: "1\\cdot(-4) = -4, \\quad 1 + (-4) = -3",
          explanation:
            "Opposite-sign pairs of -4: (1,-4), (-1,4), (2,-2). The pair 1 and -4 adds to -3 = b.",
        },
        {
          stepNumber: 4,
          description: "Split the middle term -3x.",
          workingLatex: "2x^2 - 3x - 2 = 2x^2 + x - 4x - 2",
          explanation:
            "Rewrite -3x as +x - 4x, ready to group.",
        },
        {
          stepNumber: 5,
          description: "Group and factor out the common bracket.",
          workingLatex: "= x(2x + 1) - 2(2x + 1) = (2x + 1)(x - 2)",
          explanation:
            "From 2x^2 + x take out x; from -4x - 2 take out -2 so the bracket is (2x+1). Factoring it out gives (2x+1)(x-2).",
        },
        {
          stepNumber: 6,
          description: "Reattach the factor of 3.",
          workingLatex: "6x^2 - 9x - 6 = 3(2x + 1)(x - 2)",
          explanation:
            "Include the 3 taken out at the start to give the full factorisation.",
        },
        {
          stepNumber: 7,
          description: "Check by expanding.",
          workingLatex: "3(2x + 1)(x - 2) = 3(2x^2 - 3x - 2) = 6x^2 - 9x - 6 \\checkmark",
          explanation:
            "The expansion matches the original.",
        },
      ],
      finalAnswer: "\\(3(2x+1)(x-2)\\)",
      canonicalAnswer: "3(2x+1)(x-2)",
    },
  },
  {
    id: "ga10-013",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(6x^2 + 7x - 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "negative constant", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c.",
          workingLatex: "a = 6, \\; b = 7, \\; c = -3 \\;\\Rightarrow\\; a\\cdot c = 6\\cdot(-3) = -18",
          explanation:
            "a·c = -18 is negative, so the two numbers have opposite signs and add to b = 7.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product -18 and sum 7.",
          workingLatex: "(-2)\\cdot 9 = -18, \\quad -2 + 9 = 7",
          explanation:
            "Opposite-sign pairs of -18: (-1,18), (-2,9), (-3,6) and their swaps. The pair -2 and 9 adds to 7 = b.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term 7x.",
          workingLatex: "6x^2 + 7x - 3 = 6x^2 - 2x + 9x - 3",
          explanation:
            "Rewrite 7x as -2x + 9x, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= 2x(3x - 1) + 3(3x - 1)",
          explanation:
            "From 6x^2 - 2x take out 2x; from 9x - 3 take out 3. Both leave (3x-1).",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (3x - 1)(2x + 3)",
          explanation:
            "Taking out (3x-1) leaves 2x + 3.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(3x - 1)(2x + 3) = 6x^2 + 9x - 2x - 3 = 6x^2 + 7x - 3 \\checkmark",
          explanation:
            "The expansion returns the original quadratic.",
        },
      ],
      finalAnswer: "\\((3x-1)(2x+3)\\)",
      canonicalAnswer: "(3x-1)(2x+3)",
    },
  },
  {
    id: "ga10-014",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(8x^2 + 2x - 15\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "negative constant", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c.",
          workingLatex: "a = 8, \\; b = 2, \\; c = -15 \\;\\Rightarrow\\; a\\cdot c = 8\\cdot(-15) = -120",
          explanation:
            "a·c = -120 is negative, so the two numbers have opposite signs and add to b = 2.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product -120 and sum 2.",
          workingLatex: "(-10)\\cdot 12 = -120, \\quad -10 + 12 = 2",
          explanation:
            "Opposite-sign factors of 120 that sum to 2 must differ by 2 in magnitude. The pair 10 and 12 multiplies to 120 and differs by 2; making the smaller one negative gives -10 and 12, which add to 2 = b.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term 2x.",
          workingLatex: "8x^2 + 2x - 15 = 8x^2 - 10x + 12x - 15",
          explanation:
            "Rewrite 2x as -10x + 12x, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= 2x(4x - 5) + 3(4x - 5)",
          explanation:
            "From 8x^2 - 10x take out 2x; from 12x - 15 take out 3. Both leave (4x-5).",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (4x - 5)(2x + 3)",
          explanation:
            "Taking out (4x-5) leaves 2x + 3.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(4x - 5)(2x + 3) = 8x^2 + 12x - 10x - 15 = 8x^2 + 2x - 15 \\checkmark",
          explanation:
            "The expansion matches the original.",
        },
      ],
      finalAnswer: "\\((4x-5)(2x+3)\\)",
      canonicalAnswer: "(4x-5)(2x+3)",
    },
  },
  {
    id: "ga10-015",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(3x^2 - 11x + 6\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term", "factorising by grouping"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c.",
          workingLatex: "a = 3, \\; b = -11, \\; c = 6 \\;\\Rightarrow\\; a\\cdot c = 3\\cdot 6 = 18",
          explanation:
            "a·c = 18 is positive and b = -11 is negative, so both numbers are NEGATIVE: product +18, sum -11.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product 18 and sum -11.",
          workingLatex: "(-2)\\cdot(-9) = 18, \\quad -2 + (-9) = -11",
          explanation:
            "Negative factor pairs of 18: (-1,-18), (-2,-9), (-3,-6), with sums -19, -11, -9. Only (-2,-9) gives b = -11.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term -11x.",
          workingLatex: "3x^2 - 11x + 6 = 3x^2 - 2x - 9x + 6",
          explanation:
            "Rewrite -11x as -2x - 9x, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= x(3x - 2) - 3(3x - 2)",
          explanation:
            "From 3x^2 - 2x take out x; from -9x + 6 take out -3 so the bracket is (3x-2). Pulling out the negative here is where sign slips happen.",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (3x - 2)(x - 3)",
          explanation:
            "Taking out (3x-2) leaves x - 3.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(3x - 2)(x - 3) = 3x^2 - 9x - 2x + 6 = 3x^2 - 11x + 6 \\checkmark",
          explanation:
            "The expansion returns the original quadratic.",
        },
      ],
      finalAnswer: "\\((3x-2)(x-3)\\)",
      canonicalAnswer: "(3x-2)(x-3)",
    },
  },
  {
    id: "ga10-016",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(10x^2 - 11x + 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term", "factorising by grouping"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c and compute a·c.",
          workingLatex: "a = 10, \\; b = -11, \\; c = 3 \\;\\Rightarrow\\; a\\cdot c = 10\\cdot 3 = 30",
          explanation:
            "a·c = 30 is positive with b = -11 negative, so both numbers are negative: product +30, sum -11.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product 30 and sum -11.",
          workingLatex: "(-5)\\cdot(-6) = 30, \\quad -5 + (-6) = -11",
          explanation:
            "Negative factor pairs of 30: (-1,-30), (-2,-15), (-3,-10), (-5,-6). Only (-5,-6) adds to -11 = b.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term -11x.",
          workingLatex: "10x^2 - 11x + 3 = 10x^2 - 5x - 6x + 3",
          explanation:
            "Rewrite -11x as -5x - 6x, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= 5x(2x - 1) - 3(2x - 1)",
          explanation:
            "From 10x^2 - 5x take out 5x; from -6x + 3 take out -3 so the bracket is (2x-1).",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (2x - 1)(5x - 3)",
          explanation:
            "Taking out (2x-1) leaves 5x - 3.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(2x - 1)(5x - 3) = 10x^2 - 6x - 5x + 3 = 10x^2 - 11x + 3 \\checkmark",
          explanation:
            "The expansion matches the original.",
        },
      ],
      finalAnswer: "\\((2x-1)(5x-3)\\)",
      canonicalAnswer: "(2x-1)(5x-3)",
    },
  },
  {
    id: "ga10-017",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(2 + 5x - 3x^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "negative leading coefficient", "rearrangement", "AC method"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write in standard order, highest power first.",
          workingLatex: "2 + 5x - 3x^2 = -3x^2 + 5x + 2",
          explanation:
            "Rearrange into the form ax^2 + bx + c so we can apply the method. Here a = -3, b = 5, c = 2.",
        },
        {
          stepNumber: 2,
          description: "Factor out -1 to make the leading coefficient positive.",
          workingLatex: "-3x^2 + 5x + 2 = -(3x^2 - 5x - 2)",
          explanation:
            "When a is negative, take out -1 first; every inner sign flips. Factorising with a positive leading coefficient is far less error-prone — don't try to split a negative a directly.",
        },
        {
          stepNumber: 3,
          description: "Compute a·c for the bracket 3x^2 - 5x - 2.",
          workingLatex: "a = 3, \\; b = -5, \\; c = -2 \\;\\Rightarrow\\; a\\cdot c = 3\\cdot(-2) = -6",
          explanation:
            "We need two numbers multiplying to -6 (opposite signs) and adding to -5.",
        },
        {
          stepNumber: 4,
          description: "Find the two numbers.",
          workingLatex: "1\\cdot(-6) = -6, \\quad 1 + (-6) = -5",
          explanation:
            "Opposite-sign pairs of -6: (1,-6), (-1,6), (2,-3), (-2,3). The pair 1 and -6 adds to -5 = b.",
        },
        {
          stepNumber: 5,
          description: "Split the middle term -5x.",
          workingLatex: "3x^2 - 5x - 2 = 3x^2 + x - 6x - 2",
          explanation:
            "Rewrite -5x as +x - 6x, ready to group.",
        },
        {
          stepNumber: 6,
          description: "Group and factor out the common bracket.",
          workingLatex: "= x(3x + 1) - 2(3x + 1) = (3x + 1)(x - 2)",
          explanation:
            "From 3x^2 + x take out x; from -6x - 2 take out -2 so the bracket is (3x+1). Factoring it out gives (3x+1)(x-2).",
        },
        {
          stepNumber: 7,
          description: "Reattach the -1.",
          workingLatex: "2 + 5x - 3x^2 = -(3x + 1)(x - 2)",
          explanation:
            "Reintroduce the factor of -1 taken out in step 2. You could also absorb the minus into a bracket, e.g. (3x+1)(2-x), but leaving it as -(3x+1)(x-2) is standard.",
        },
        {
          stepNumber: 8,
          description: "Check by expanding.",
          workingLatex: "-(3x + 1)(x - 2) = -(3x^2 - 5x - 2) = -3x^2 + 5x + 2 = 2 + 5x - 3x^2 \\checkmark",
          explanation:
            "The expansion returns the original expression.",
        },
      ],
      finalAnswer: "\\(-(3x+1)(x-2)\\)",
      canonicalAnswer: "-(3x+1)(x-2)",
    },
  },
  {
    id: "ga10-018",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(6 - x - 2x^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "negative leading coefficient", "rearrangement", "AC method"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write in standard order.",
          workingLatex: "6 - x - 2x^2 = -2x^2 - x + 6",
          explanation:
            "Rearrange into ax^2 + bx + c: a = -2, b = -1, c = 6.",
        },
        {
          stepNumber: 2,
          description: "Factor out -1.",
          workingLatex: "-2x^2 - x + 6 = -(2x^2 + x - 6)",
          explanation:
            "Take out -1 so the leading coefficient becomes positive; every inner sign flips (so -2x^2 → 2x^2, -x → +x, +6 → -6).",
        },
        {
          stepNumber: 3,
          description: "Compute a·c for 2x^2 + x - 6.",
          workingLatex: "a = 2, \\; b = 1, \\; c = -6 \\;\\Rightarrow\\; a\\cdot c = 2\\cdot(-6) = -12",
          explanation:
            "We need two numbers multiplying to -12 (opposite signs) and adding to 1.",
        },
        {
          stepNumber: 4,
          description: "Find the two numbers.",
          workingLatex: "(-3)\\cdot 4 = -12, \\quad -3 + 4 = 1",
          explanation:
            "Opposite-sign pairs of -12 that sum to 1: the pair -3 and 4 multiplies to -12 and adds to 1 = b.",
        },
        {
          stepNumber: 5,
          description: "Split the middle term x.",
          workingLatex: "2x^2 + x - 6 = 2x^2 - 3x + 4x - 6",
          explanation:
            "Rewrite x as -3x + 4x, ready to group.",
        },
        {
          stepNumber: 6,
          description: "Group and factor out the common bracket.",
          workingLatex: "= x(2x - 3) + 2(2x - 3) = (2x - 3)(x + 2)",
          explanation:
            "From 2x^2 - 3x take out x; from 4x - 6 take out 2. Both leave (2x-3), which factors out to (2x-3)(x+2).",
        },
        {
          stepNumber: 7,
          description: "Reattach the -1.",
          workingLatex: "6 - x - 2x^2 = -(2x - 3)(x + 2)",
          explanation:
            "Bring back the factor of -1 from step 2.",
        },
        {
          stepNumber: 8,
          description: "Check by expanding.",
          workingLatex: "-(2x - 3)(x + 2) = -(2x^2 + x - 6) = -2x^2 - x + 6 = 6 - x - 2x^2 \\checkmark",
          explanation:
            "The expansion returns the original expression.",
        },
      ],
      finalAnswer: "\\(-(2x-3)(x+2)\\)",
      canonicalAnswer: "-(2x-3)(x+2)",
    },
  },

  // ─────────────────────────── CHALLENGE (019–030) ───────────────────────────
  {
    id: "ga10-019",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(12x^2 + 7x - 12\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "negative constant", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check for a common factor.",
          workingLatex: "\\gcd(12, 7, 12) = 1",
          explanation:
            "Always test for a common factor first. Here 12, 7, 12 share none (7 is prime), so nothing comes out and we go straight to the AC method.",
        },
        {
          stepNumber: 2,
          description: "Compute a·c.",
          workingLatex: "a = 12, \\; b = 7, \\; c = -12 \\;\\Rightarrow\\; a\\cdot c = 12\\cdot(-12) = -144",
          explanation:
            "a·c = -144 is negative, so the two numbers have opposite signs and add to b = 7.",
        },
        {
          stepNumber: 3,
          description: "Find two numbers with product -144 and sum 7.",
          workingLatex: "(-9)\\cdot 16 = -144, \\quad -9 + 16 = 7",
          explanation:
            "We need opposite-sign factors of 144 differing by 7 in magnitude. The pair 9 and 16 multiplies to 144 and differs by 7; making 9 negative gives -9 and 16, which add to 7 = b.",
        },
        {
          stepNumber: 4,
          description: "Split the middle term 7x.",
          workingLatex: "12x^2 + 7x - 12 = 12x^2 - 9x + 16x - 12",
          explanation:
            "Rewrite 7x as -9x + 16x, ready to group.",
        },
        {
          stepNumber: 5,
          description: "Group and take out common factors.",
          workingLatex: "= 3x(4x - 3) + 4(4x - 3)",
          explanation:
            "From 12x^2 - 9x take out 3x; from 16x - 12 take out 4. Both leave (4x-3).",
        },
        {
          stepNumber: 6,
          description: "Factor out the common bracket.",
          workingLatex: "= (4x - 3)(3x + 4)",
          explanation:
            "Taking out (4x-3) leaves 3x + 4.",
        },
        {
          stepNumber: 7,
          description: "Check by expanding.",
          workingLatex: "(4x - 3)(3x + 4) = 12x^2 + 16x - 9x - 12 = 12x^2 + 7x - 12 \\checkmark",
          explanation:
            "The expansion matches the original quadratic.",
        },
      ],
      finalAnswer: "\\((4x-3)(3x+4)\\)",
      canonicalAnswer: "(4x-3)(3x+4)",
    },
  },
  {
    id: "ga10-020",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(15x^2 - 26x + 8\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "split the middle term", "factorising by grouping"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute a·c.",
          workingLatex: "a = 15, \\; b = -26, \\; c = 8 \\;\\Rightarrow\\; a\\cdot c = 15\\cdot 8 = 120",
          explanation:
            "a·c = 120 is positive with b = -26 negative, so both numbers are negative: product +120, sum -26.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product 120 and sum -26.",
          workingLatex: "(-6)\\cdot(-20) = 120, \\quad -6 + (-20) = -26",
          explanation:
            "Negative factor pairs of 120 include (-4,-30), (-5,-24), (-6,-20), (-8,-15). Their sums are -34, -29, -26, -23; only (-6,-20) gives b = -26.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term -26x.",
          workingLatex: "15x^2 - 26x + 8 = 15x^2 - 6x - 20x + 8",
          explanation:
            "Rewrite -26x as -6x - 20x, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= 3x(5x - 2) - 4(5x - 2)",
          explanation:
            "From 15x^2 - 6x take out 3x; from -20x + 8 take out -4 so the bracket is (5x-2).",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (5x - 2)(3x - 4)",
          explanation:
            "Taking out (5x-2) leaves 3x - 4.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(5x - 2)(3x - 4) = 15x^2 - 20x - 6x + 8 = 15x^2 - 26x + 8 \\checkmark",
          explanation:
            "The expansion returns the original.",
        },
      ],
      finalAnswer: "\\((5x-2)(3x-4)\\)",
      canonicalAnswer: "(5x-2)(3x-4)",
    },
  },
  {
    id: "ga10-021",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(12x^2 - 2x - 4\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "common factor first", "negative constant", "factorising fully"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take out the common numerical factor first.",
          workingLatex: "\\gcd(12, 2, 4) = 2 \\;\\Rightarrow\\; 12x^2 - 2x - 4 = 2(6x^2 - x - 2)",
          explanation:
            "All three coefficients are even, so take out 2 before factorising. Missing this would cost the 'fully' mark and leave harder numbers to split.",
        },
        {
          stepNumber: 2,
          description: "Compute a·c for 6x^2 - x - 2.",
          workingLatex: "a = 6, \\; b = -1, \\; c = -2 \\;\\Rightarrow\\; a\\cdot c = 6\\cdot(-2) = -12",
          explanation:
            "We need two numbers multiplying to -12 (opposite signs) and adding to -1.",
        },
        {
          stepNumber: 3,
          description: "Find the two numbers.",
          workingLatex: "3\\cdot(-4) = -12, \\quad 3 + (-4) = -1",
          explanation:
            "Opposite-sign pairs of -12 that sum to -1: the pair 3 and -4 multiplies to -12 and adds to -1 = b.",
        },
        {
          stepNumber: 4,
          description: "Split the middle term -x.",
          workingLatex: "6x^2 - x - 2 = 6x^2 + 3x - 4x - 2",
          explanation:
            "Rewrite -x as +3x - 4x, ready to group.",
        },
        {
          stepNumber: 5,
          description: "Group and factor out the common bracket.",
          workingLatex: "= 3x(2x + 1) - 2(2x + 1) = (2x + 1)(3x - 2)",
          explanation:
            "From 6x^2 + 3x take out 3x; from -4x - 2 take out -2 so the bracket is (2x+1). Factoring it out gives (2x+1)(3x-2).",
        },
        {
          stepNumber: 6,
          description: "Reattach the factor of 2.",
          workingLatex: "12x^2 - 2x - 4 = 2(2x + 1)(3x - 2)",
          explanation:
            "Include the 2 taken out at the start to complete the full factorisation.",
        },
        {
          stepNumber: 7,
          description: "Check by expanding.",
          workingLatex: "2(2x + 1)(3x - 2) = 2(6x^2 - x - 2) = 12x^2 - 2x - 4 \\checkmark",
          explanation:
            "The expansion matches the original.",
        },
      ],
      finalAnswer: "\\(2(2x+1)(3x-2)\\)",
      canonicalAnswer: "2(2x+1)(3x-2)",
    },
  },
  {
    id: "ga10-022",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(18x^2 + 3x - 36\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "common factor first", "negative constant", "factorising fully"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take out the common numerical factor first.",
          workingLatex: "\\gcd(18, 3, 36) = 3 \\;\\Rightarrow\\; 18x^2 + 3x - 36 = 3(6x^2 + x - 12)",
          explanation:
            "18, 3 and 36 are all divisible by 3. Take 3 outside first — it both secures the 'fully' mark and shrinks the numbers we have to split.",
        },
        {
          stepNumber: 2,
          description: "Compute a·c for 6x^2 + x - 12.",
          workingLatex: "a = 6, \\; b = 1, \\; c = -12 \\;\\Rightarrow\\; a\\cdot c = 6\\cdot(-12) = -72",
          explanation:
            "We need two numbers multiplying to -72 (opposite signs) and adding to 1.",
        },
        {
          stepNumber: 3,
          description: "Find the two numbers.",
          workingLatex: "(-8)\\cdot 9 = -72, \\quad -8 + 9 = 1",
          explanation:
            "Opposite-sign factors of 72 differing by 1: the pair 8 and 9. Making 8 negative gives -8 and 9, which add to 1 = b.",
        },
        {
          stepNumber: 4,
          description: "Split the middle term x.",
          workingLatex: "6x^2 + x - 12 = 6x^2 - 8x + 9x - 12",
          explanation:
            "Rewrite x as -8x + 9x, ready to group.",
        },
        {
          stepNumber: 5,
          description: "Group and factor out the common bracket.",
          workingLatex: "= 2x(3x - 4) + 3(3x - 4) = (3x - 4)(2x + 3)",
          explanation:
            "From 6x^2 - 8x take out 2x; from 9x - 12 take out 3. Both leave (3x-4), which factors out to (3x-4)(2x+3).",
        },
        {
          stepNumber: 6,
          description: "Reattach the factor of 3.",
          workingLatex: "18x^2 + 3x - 36 = 3(3x - 4)(2x + 3)",
          explanation:
            "Include the 3 taken out at the start to complete the full factorisation.",
        },
        {
          stepNumber: 7,
          description: "Check by expanding.",
          workingLatex: "3(3x - 4)(2x + 3) = 3(6x^2 + x - 12) = 18x^2 + 3x - 36 \\checkmark",
          explanation:
            "The expansion returns the original quadratic.",
        },
      ],
      finalAnswer: "\\(3(3x-4)(2x+3)\\)",
      canonicalAnswer: "3(3x-4)(2x+3)",
    },
  },
  {
    id: "ga10-023",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(20 + 7x - 6x^2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "negative leading coefficient", "rearrangement", "AC method"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write in standard order.",
          workingLatex: "20 + 7x - 6x^2 = -6x^2 + 7x + 20",
          explanation:
            "Rearrange into ax^2 + bx + c: a = -6, b = 7, c = 20.",
        },
        {
          stepNumber: 2,
          description: "Factor out -1.",
          workingLatex: "-6x^2 + 7x + 20 = -(6x^2 - 7x - 20)",
          explanation:
            "Take out -1 so the leading coefficient is positive; all inner signs flip. (Note 6, 7, 20 share no common factor, so -1 is all that comes out here.)",
        },
        {
          stepNumber: 3,
          description: "Compute a·c for 6x^2 - 7x - 20.",
          workingLatex: "a = 6, \\; b = -7, \\; c = -20 \\;\\Rightarrow\\; a\\cdot c = 6\\cdot(-20) = -120",
          explanation:
            "We need two numbers multiplying to -120 (opposite signs) and adding to -7.",
        },
        {
          stepNumber: 4,
          description: "Find the two numbers.",
          workingLatex: "8\\cdot(-15) = -120, \\quad 8 + (-15) = -7",
          explanation:
            "Opposite-sign factors of 120 differing by 7: the pair 8 and 15. Since the sum is negative, the larger (15) is negative: 8 and -15 add to -7 = b.",
        },
        {
          stepNumber: 5,
          description: "Split the middle term -7x.",
          workingLatex: "6x^2 - 7x - 20 = 6x^2 + 8x - 15x - 20",
          explanation:
            "Rewrite -7x as +8x - 15x, ready to group.",
        },
        {
          stepNumber: 6,
          description: "Group and factor out the common bracket.",
          workingLatex: "= 2x(3x + 4) - 5(3x + 4) = (3x + 4)(2x - 5)",
          explanation:
            "From 6x^2 + 8x take out 2x; from -15x - 20 take out -5 so the bracket is (3x+4). Factoring it out gives (3x+4)(2x-5).",
        },
        {
          stepNumber: 7,
          description: "Reattach the -1.",
          workingLatex: "20 + 7x - 6x^2 = -(3x + 4)(2x - 5)",
          explanation:
            "Bring back the factor of -1 from step 2.",
        },
        {
          stepNumber: 8,
          description: "Check by expanding.",
          workingLatex: "-(3x + 4)(2x - 5) = -(6x^2 - 7x - 20) = -6x^2 + 7x + 20 = 20 + 7x - 6x^2 \\checkmark",
          explanation:
            "The expansion returns the original expression.",
        },
      ],
      finalAnswer: "\\(-(3x+4)(2x-5)\\)",
      canonicalAnswer: "-(3x+4)(2x-5)",
    },
  },
  {
    id: "ga10-024",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(9x^2 - 12x + 4\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "perfect square trinomial", "AC method", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute a·c.",
          workingLatex: "a = 9, \\; b = -12, \\; c = 4 \\;\\Rightarrow\\; a\\cdot c = 9\\cdot 4 = 36",
          explanation:
            "a·c = 36 is positive with b = -12 negative, so both numbers are negative: product +36, sum -12.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product 36 and sum -12.",
          workingLatex: "(-6)\\cdot(-6) = 36, \\quad -6 + (-6) = -12",
          explanation:
            "Negative factor pairs of 36: (-1,-36), (-2,-18), (-3,-12), (-4,-9), (-6,-6). The pair -6 and -6 adds to -12 = b. A repeated number hints this may be a perfect square.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term -12x.",
          workingLatex: "9x^2 - 12x + 4 = 9x^2 - 6x - 6x + 4",
          explanation:
            "Rewrite -12x as -6x - 6x, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= 3x(3x - 2) - 2(3x - 2)",
          explanation:
            "From 9x^2 - 6x take out 3x; from -6x + 4 take out -2 so the bracket is (3x-2).",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket and recognise the square.",
          workingLatex: "= (3x - 2)(3x - 2) = (3x - 2)^2",
          explanation:
            "Both brackets are identical, so this is a perfect square: (3x-2)^2. Writing it squared is the tidiest fully-factorised form.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(3x - 2)^2 = (3x)^2 - 2(3x)(2) + 2^2 = 9x^2 - 12x + 4 \\checkmark",
          explanation:
            "Using (p-q)^2 = p^2 - 2pq + q^2 with p = 3x, q = 2 gives 9x^2 - 12x + 4, the original.",
        },
      ],
      finalAnswer: "\\((3x-2)^2\\)",
      canonicalAnswer: "(3x-2)^2",
    },
  },
  {
    id: "ga10-025",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(14x^2 + 17x - 6\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "non-monic quadratic", "AC method", "negative constant", "split the middle term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute a·c.",
          workingLatex: "a = 14, \\; b = 17, \\; c = -6 \\;\\Rightarrow\\; a\\cdot c = 14\\cdot(-6) = -84",
          explanation:
            "a·c = -84 is negative, so the two numbers have opposite signs and add to b = 17.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product -84 and sum 17.",
          workingLatex: "(-4)\\cdot 21 = -84, \\quad -4 + 21 = 17",
          explanation:
            "We want opposite-sign factors of 84 with a sum of 17, so they differ by 17 in magnitude. The pair 4 and 21 multiplies to 84; making 4 negative gives -4 and 21, summing to 17 = b.",
        },
        {
          stepNumber: 3,
          description: "Split the middle term 17x.",
          workingLatex: "14x^2 + 17x - 6 = 14x^2 - 4x + 21x - 6",
          explanation:
            "Rewrite 17x as -4x + 21x, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Group and take out common factors.",
          workingLatex: "= 2x(7x - 2) + 3(7x - 2)",
          explanation:
            "From 14x^2 - 4x take out 2x; from 21x - 6 take out 3. Both leave (7x-2).",
        },
        {
          stepNumber: 5,
          description: "Factor out the common bracket.",
          workingLatex: "= (7x - 2)(2x + 3)",
          explanation:
            "Taking out (7x-2) leaves 2x + 3.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex: "(7x - 2)(2x + 3) = 14x^2 + 21x - 4x - 6 = 14x^2 + 17x - 6 \\checkmark",
          explanation:
            "The expansion matches the original.",
        },
      ],
      finalAnswer: "\\((7x-2)(2x+3)\\)",
      canonicalAnswer: "(7x-2)(2x+3)",
    },
  },
  {
    id: "ga10-026",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText: "By factorising, solve \\(2x^2 + 7x + 3 = 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics", "factorising", "AC method", "zero-product principle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the AC method on the left-hand side.",
          workingLatex: "a\\cdot c = 2\\cdot 3 = 6, \\quad b = 7",
          explanation:
            "First factorise the quadratic. We need two numbers multiplying to a·c = 6 and adding to b = 7.",
        },
        {
          stepNumber: 2,
          description: "Find the numbers and split the middle term.",
          workingLatex: "1\\cdot 6 = 6, \\; 1 + 6 = 7 \\;\\Rightarrow\\; 2x^2 + 7x + 3 = 2x^2 + x + 6x + 3",
          explanation:
            "The numbers 1 and 6 multiply to 6 and add to 7. Rewrite 7x as x + 6x.",
        },
        {
          stepNumber: 3,
          description: "Group and factorise.",
          workingLatex: "= x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3)",
          explanation:
            "From 2x^2 + x take out x; from 6x + 3 take out 3. Both leave (2x+1), giving (2x+1)(x+3).",
        },
        {
          stepNumber: 4,
          description: "Verify the factorisation before solving.",
          workingLatex: "(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3 \\checkmark",
          explanation:
            "Always check by expanding before applying the zero-product principle — a wrong factorisation gives wrong roots.",
        },
        {
          stepNumber: 5,
          description: "Apply the zero-product principle.",
          workingLatex: "(2x + 1)(x + 3) = 0 \\;\\Rightarrow\\; 2x + 1 = 0 \\;\\text{or}\\; x + 3 = 0",
          explanation:
            "If a product of two factors is zero, at least one factor must be zero. Set each bracket to zero.",
        },
        {
          stepNumber: 6,
          description: "Solve each linear equation.",
          workingLatex: "2x + 1 = 0 \\Rightarrow x = -\\frac{1}{2}; \\quad x + 3 = 0 \\Rightarrow x = -3",
          explanation:
            "From 2x+1 = 0 subtract 1 then divide by 2 to get x = -1/2; from x+3 = 0 we get x = -3. Note that with a ≠ 1, a root can be a fraction.",
        },
        {
          stepNumber: 7,
          description: "Check by substituting back.",
          workingLatex: "2\\left(-\\frac{1}{2}\\right)^2 + 7\\left(-\\frac{1}{2}\\right) + 3 = \\frac{1}{2} - \\frac{7}{2} + 3 = 0; \\quad 2(-3)^2 + 7(-3) + 3 = 18 - 21 + 3 = 0 \\checkmark",
          explanation:
            "Both values give 0, confirming the roots.",
        },
      ],
      finalAnswer: "\\(x = -\\frac{1}{2}\\) or \\(x = -3\\)",
      canonicalAnswer: "{-3,-1/2}",
    },
  },
  {
    id: "ga10-027",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText: "By factorising, solve \\(3x^2 - 5x - 2 = 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics", "factorising", "AC method", "zero-product principle", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the AC method.",
          workingLatex: "a\\cdot c = 3\\cdot(-2) = -6, \\quad b = -5",
          explanation:
            "We need two numbers multiplying to -6 (opposite signs) and adding to -5.",
        },
        {
          stepNumber: 2,
          description: "Find the numbers and split.",
          workingLatex: "1\\cdot(-6) = -6, \\; 1 + (-6) = -5 \\;\\Rightarrow\\; 3x^2 - 5x - 2 = 3x^2 + x - 6x - 2",
          explanation:
            "The pair 1 and -6 multiplies to -6 and adds to -5. Rewrite -5x as +x - 6x.",
        },
        {
          stepNumber: 3,
          description: "Group and factorise.",
          workingLatex: "= x(3x + 1) - 2(3x + 1) = (3x + 1)(x - 2)",
          explanation:
            "From 3x^2 + x take out x; from -6x - 2 take out -2 so the bracket is (3x+1). Factoring out gives (3x+1)(x-2).",
        },
        {
          stepNumber: 4,
          description: "Verify the factorisation.",
          workingLatex: "(3x + 1)(x - 2) = 3x^2 - 6x + x - 2 = 3x^2 - 5x - 2 \\checkmark",
          explanation:
            "The expansion matches, so the factorisation is correct and we can solve safely.",
        },
        {
          stepNumber: 5,
          description: "Apply the zero-product principle.",
          workingLatex: "(3x + 1)(x - 2) = 0 \\;\\Rightarrow\\; 3x + 1 = 0 \\;\\text{or}\\; x - 2 = 0",
          explanation:
            "If the product is zero, at least one factor is zero. Set each bracket equal to zero.",
        },
        {
          stepNumber: 6,
          description: "Solve each linear equation.",
          workingLatex: "3x + 1 = 0 \\Rightarrow x = -\\frac{1}{3}; \\quad x - 2 = 0 \\Rightarrow x = 2",
          explanation:
            "From 3x+1 = 0 we get x = -1/3; from x-2 = 0 we get x = 2.",
        },
        {
          stepNumber: 7,
          description: "Check by substituting back.",
          workingLatex: "3\\left(-\\frac{1}{3}\\right)^2 - 5\\left(-\\frac{1}{3}\\right) - 2 = \\frac{1}{3} + \\frac{5}{3} - 2 = 0; \\quad 3(2)^2 - 5(2) - 2 = 12 - 10 - 2 = 0 \\checkmark",
          explanation:
            "Both values give 0, confirming the roots.",
        },
      ],
      finalAnswer: "\\(x = -\\frac{1}{3}\\) or \\(x = 2\\)",
      canonicalAnswer: "{-1/3,2}",
    },
  },
  {
    id: "ga10-028",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText: "By factorising, solve \\(6x^2 - 5x - 6 = 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics", "factorising", "AC method", "zero-product principle", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the AC method.",
          workingLatex: "a\\cdot c = 6\\cdot(-6) = -36, \\quad b = -5",
          explanation:
            "We need two numbers multiplying to -36 (opposite signs) and adding to -5.",
        },
        {
          stepNumber: 2,
          description: "Find the numbers and split.",
          workingLatex: "4\\cdot(-9) = -36, \\; 4 + (-9) = -5 \\;\\Rightarrow\\; 6x^2 - 5x - 6 = 6x^2 + 4x - 9x - 6",
          explanation:
            "Opposite-sign factors of 36 differing by 5: 4 and 9. With a negative sum the larger (9) is negative, so 4 and -9 give product -36 and sum -5. Rewrite -5x as +4x - 9x.",
        },
        {
          stepNumber: 3,
          description: "Group and factorise.",
          workingLatex: "= 2x(3x + 2) - 3(3x + 2) = (3x + 2)(2x - 3)",
          explanation:
            "From 6x^2 + 4x take out 2x; from -9x - 6 take out -3 so the bracket is (3x+2). Factoring out gives (3x+2)(2x-3).",
        },
        {
          stepNumber: 4,
          description: "Verify the factorisation.",
          workingLatex: "(3x + 2)(2x - 3) = 6x^2 - 9x + 4x - 6 = 6x^2 - 5x - 6 \\checkmark",
          explanation:
            "The expansion matches the original quadratic.",
        },
        {
          stepNumber: 5,
          description: "Apply the zero-product principle.",
          workingLatex: "(3x + 2)(2x - 3) = 0 \\;\\Rightarrow\\; 3x + 2 = 0 \\;\\text{or}\\; 2x - 3 = 0",
          explanation:
            "Set each factor equal to zero.",
        },
        {
          stepNumber: 6,
          description: "Solve each linear equation.",
          workingLatex: "3x + 2 = 0 \\Rightarrow x = -\\frac{2}{3}; \\quad 2x - 3 = 0 \\Rightarrow x = \\frac{3}{2}",
          explanation:
            "From 3x+2 = 0 we get x = -2/3; from 2x-3 = 0 we get x = 3/2. Both roots are fractions here, which is normal when a ≠ 1.",
        },
        {
          stepNumber: 7,
          description: "Check by substituting back.",
          workingLatex: "6\\left(-\\frac{2}{3}\\right)^2 - 5\\left(-\\frac{2}{3}\\right) - 6 = \\frac{8}{3} + \\frac{10}{3} - 6 = 0; \\quad 6\\left(\\frac{3}{2}\\right)^2 - 5\\left(\\frac{3}{2}\\right) - 6 = \\frac{27}{2} - \\frac{15}{2} - 6 = 0 \\checkmark",
          explanation:
            "Both values give 0, confirming the roots.",
        },
      ],
      finalAnswer: "\\(x = -\\frac{2}{3}\\) or \\(x = \\frac{3}{2}\\)",
      canonicalAnswer: "{-2/3,3/2}",
    },
  },
  {
    id: "ga10-029",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText: "By factorising fully, solve \\(8x^2 + 20x + 8 = 0\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics", "factorising", "common factor first", "AC method", "zero-product principle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take out the common numerical factor first.",
          workingLatex: "\\gcd(8, 20, 8) = 4 \\;\\Rightarrow\\; 8x^2 + 20x + 8 = 4(2x^2 + 5x + 2)",
          explanation:
            "All coefficients are divisible by 4. Take 4 outside; it simplifies both the factorising and the solving.",
        },
        {
          stepNumber: 2,
          description: "Set up the AC method on the bracket.",
          workingLatex: "a\\cdot c = 2\\cdot 2 = 4, \\quad b = 5",
          explanation:
            "For 2x^2 + 5x + 2 we need two numbers multiplying to 4 and adding to 5.",
        },
        {
          stepNumber: 3,
          description: "Find the numbers and split.",
          workingLatex: "1\\cdot 4 = 4, \\; 1 + 4 = 5 \\;\\Rightarrow\\; 2x^2 + 5x + 2 = 2x^2 + x + 4x + 2",
          explanation:
            "The numbers 1 and 4 work. Rewrite 5x as x + 4x.",
        },
        {
          stepNumber: 4,
          description: "Group and factorise the bracket.",
          workingLatex: "= x(2x + 1) + 2(2x + 1) = (2x + 1)(x + 2)",
          explanation:
            "From 2x^2 + x take out x; from 4x + 2 take out 2. Both leave (2x+1), giving (2x+1)(x+2).",
        },
        {
          stepNumber: 5,
          description: "Write the full factorised equation and verify.",
          workingLatex: "4(2x + 1)(x + 2) = 0; \\quad 4(2x^2 + 5x + 2) = 8x^2 + 20x + 8 \\checkmark",
          explanation:
            "Assemble the full factorisation and check by expanding. The constant 4 cannot be zero, so it contributes no root — only the brackets matter.",
        },
        {
          stepNumber: 6,
          description: "Apply the zero-product principle.",
          workingLatex: "(2x + 1)(x + 2) = 0 \\;\\Rightarrow\\; 2x + 1 = 0 \\;\\text{or}\\; x + 2 = 0",
          explanation:
            "Divide both sides by 4 first (or note 4 ≠ 0), then set each bracket to zero.",
        },
        {
          stepNumber: 7,
          description: "Solve each linear equation.",
          workingLatex: "2x + 1 = 0 \\Rightarrow x = -\\frac{1}{2}; \\quad x + 2 = 0 \\Rightarrow x = -2",
          explanation:
            "From 2x+1 = 0 we get x = -1/2; from x+2 = 0 we get x = -2.",
        },
        {
          stepNumber: 8,
          description: "Check by substituting back.",
          workingLatex: "8\\left(-\\frac{1}{2}\\right)^2 + 20\\left(-\\frac{1}{2}\\right) + 8 = 2 - 10 + 8 = 0; \\quad 8(-2)^2 + 20(-2) + 8 = 32 - 40 + 8 = 0 \\checkmark",
          explanation:
            "Both values give 0, confirming the roots.",
        },
      ],
      finalAnswer: "\\(x = -\\frac{1}{2}\\) or \\(x = -2\\)",
      canonicalAnswer: "{-2,-1/2}",
    },
  },
  {
    id: "ga10-030",
    topicRef: "ga10",
    topicTitle: "Factorising quadratics ax² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText: "By factorising, solve \\(3 + 5x - 2x^2 = 0\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics", "factorising", "negative leading coefficient", "rearrangement", "zero-product principle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write in standard order and factor out -1.",
          workingLatex: "3 + 5x - 2x^2 = -2x^2 + 5x + 3 = -(2x^2 - 5x - 3)",
          explanation:
            "Rearrange to ax^2 + bx + c with a = -2, then take out -1 so the leading coefficient is positive: -(2x^2 - 5x - 3). Factorising with positive a is much safer.",
        },
        {
          stepNumber: 2,
          description: "Set up the AC method on the bracket.",
          workingLatex: "a\\cdot c = 2\\cdot(-3) = -6, \\quad b = -5",
          explanation:
            "For 2x^2 - 5x - 3 we need two numbers multiplying to -6 (opposite signs) and adding to -5.",
        },
        {
          stepNumber: 3,
          description: "Find the numbers and split.",
          workingLatex: "1\\cdot(-6) = -6, \\; 1 + (-6) = -5 \\;\\Rightarrow\\; 2x^2 - 5x - 3 = 2x^2 + x - 6x - 3",
          explanation:
            "The pair 1 and -6 works. Rewrite -5x as +x - 6x.",
        },
        {
          stepNumber: 4,
          description: "Group and factorise the bracket.",
          workingLatex: "= x(2x + 1) - 3(2x + 1) = (2x + 1)(x - 3)",
          explanation:
            "From 2x^2 + x take out x; from -6x - 3 take out -3 so the bracket is (2x+1). Factoring out gives (2x+1)(x-3).",
        },
        {
          stepNumber: 5,
          description: "Write the full factorised equation and verify.",
          workingLatex: "-(2x + 1)(x - 3) = 0; \\quad -(2x^2 - 5x - 3) = -2x^2 + 5x + 3 = 3 + 5x - 2x^2 \\checkmark",
          explanation:
            "The expansion confirms the factorisation. The overall factor of -1 cannot be zero, so it contributes no root.",
        },
        {
          stepNumber: 6,
          description: "Apply the zero-product principle.",
          workingLatex: "(2x + 1)(x - 3) = 0 \\;\\Rightarrow\\; 2x + 1 = 0 \\;\\text{or}\\; x - 3 = 0",
          explanation:
            "Since -1 ≠ 0, the product of the two brackets must be zero, so set each bracket to zero.",
        },
        {
          stepNumber: 7,
          description: "Solve each linear equation.",
          workingLatex: "2x + 1 = 0 \\Rightarrow x = -\\frac{1}{2}; \\quad x - 3 = 0 \\Rightarrow x = 3",
          explanation:
            "From 2x+1 = 0 we get x = -1/2; from x-3 = 0 we get x = 3.",
        },
        {
          stepNumber: 8,
          description: "Check by substituting back.",
          workingLatex: "3 + 5\\left(-\\frac{1}{2}\\right) - 2\\left(-\\frac{1}{2}\\right)^2 = 3 - \\frac{5}{2} - \\frac{1}{2} = 0; \\quad 3 + 5(3) - 2(3)^2 = 3 + 15 - 18 = 0 \\checkmark",
          explanation:
            "Both values give 0, confirming the roots.",
        },
      ],
      finalAnswer: "\\(x = -\\frac{1}{2}\\) or \\(x = 3\\)",
      canonicalAnswer: "{-1/2,3}",
    },
  },
];
