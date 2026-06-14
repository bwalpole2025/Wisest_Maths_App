/**
 * Topic: Factorising quadratics x^2 + bx + c
 * Ref: ga09  (DfE A4)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: factorising MONIC quadratics (leading coefficient 1) into two
 *   linear brackets using the "two numbers" method — find two numbers that
 *   MULTIPLY to c and ADD to b. Clusters covered:
 *     (1) b>0, c>0  — both numbers positive, e.g. x^2+7x+12=(x+3)(x+4);
 *     (2) c>0, b<0  — both numbers negative, e.g. x^2-7x+12=(x-3)(x-4);
 *     (3) c<0       — numbers of opposite sign, e.g. x^2+2x-15, x^2-3x-10;
 *     (4) perfect-square trinomials, e.g. x^2+6x+9=(x+3)^2;
 *     (5) factorise-then-solve x^2+bx+c=0 by the zero-product principle
 *         (a few Challenge items connecting factorising to the roots).
 *   Includes ONE difference-of-two-squares item (x^2-9) purely as a contrast.
 *   NOT covered: ax^2+bx+c with a>1 (bank ga10); general difference of two
 *   squares (bank ga11).
 *
 * Difficulty split (30 total):
 *   - Foundation: ga09-001 .. ga09-004  (4)
 *   - Standard:   ga09-005 .. ga09-018  (14)
 *   - Challenge:  ga09-019 .. ga09-030  (12)
 * Id range: ga09-001 .. ga09-030.
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
    id: "ga09-001",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 5x + 6\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising quadratics", "monic quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the target form of the brackets.",
          workingLatex: "x^2 + 5x + 6 = (x + p)(x + q)",
          explanation:
            "A monic quadratic (the x^2 has coefficient 1) factorises into two brackets that each start with x. The unknowns p and q are the numbers we have to find.",
        },
        {
          stepNumber: 2,
          description: "Expand the general brackets to see the pattern.",
          workingLatex: "(x + p)(x + q) = x^2 + (p + q)x + pq",
          explanation:
            "Multiplying out shows the coefficient of x is the SUM p+q and the constant is the PRODUCT pq. This is the key fact behind the whole method.",
        },
        {
          stepNumber: 3,
          description: "Read off the two conditions on p and q.",
          workingLatex: "p + q = 5, \\quad pq = 6",
          explanation:
            "Match x^2 + (p+q)x + pq against x^2 + 5x + 6: the two numbers must MULTIPLY to c = 6 and ADD to b = 5.",
        },
        {
          stepNumber: 4,
          description: "Fix the signs from b and c.",
          workingLatex: "c = 6 > 0, \\quad b = 5 > 0 \\;\\Rightarrow\\; \\text{both numbers positive}",
          explanation:
            "Before listing factors, decide the signs. A positive product means the two numbers share a sign, and a positive sum then forces that shared sign to be positive. So we only need to search positive factor pairs.",
        },
        {
          stepNumber: 5,
          description: "List the positive factor pairs of c = 6.",
          workingLatex: "6 = 1 \\cdot 6 = 2 \\cdot 3",
          explanation:
            "Write out every way to make 6 from two positive whole numbers: 1 and 6, then 2 and 3. Listing them in order means none is missed.",
        },
        {
          stepNumber: 6,
          description: "Pick the pair that adds to b = 5.",
          workingLatex: "1 + 6 = 7, \\qquad 2 + 3 = 5 \\checkmark",
          explanation:
            "Test each pair against the required sum: 1+6 = 7 (no), 2+3 = 5 (yes). The numbers we want are 2 and 3.",
        },
        {
          stepNumber: 7,
          description: "Write the brackets.",
          workingLatex: "x^2 + 5x + 6 = (x + 2)(x + 3)",
          explanation:
            "Place 2 and 3 into the brackets in place of p and q. The order does not matter — (x+2)(x+3) and (x+3)(x+2) are the same.",
        },
        {
          stepNumber: 8,
          description: "Check by expanding (FOIL).",
          workingLatex:
            "(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6 \\checkmark",
          explanation:
            "ALWAYS verify by multiplying out: x\\cdot x = x^2, the inner and outer terms give 3x + 2x = 5x, and 2\\cdot 3 = 6. This matches the original, so the factorisation is correct.",
        },
      ],
      finalAnswer: "\\((x+2)(x+3)\\)",
      canonicalAnswer: "(x+2)(x+3)",
    },
  },
  {
    id: "ga09-002",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 7x + 10\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising quadratics", "monic quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the target form of the brackets.",
          workingLatex: "x^2 + 7x + 10 = (x + p)(x + q)",
          explanation:
            "The quadratic is monic, so it factorises into (x+p)(x+q). Our job is to find the numbers p and q.",
        },
        {
          stepNumber: 2,
          description: "Expand the general brackets.",
          workingLatex: "(x + p)(x + q) = x^2 + (p + q)x + pq",
          explanation:
            "Multiplying out shows the coefficient of x is the SUM p+q and the constant is the PRODUCT pq. This is the engine of the whole method.",
        },
        {
          stepNumber: 3,
          description: "State the target product and sum.",
          workingLatex: "pq = 10, \\quad p + q = 7",
          explanation:
            "Match x^2 + (p+q)x + pq against x^2 + 7x + 10: the two numbers must multiply to c = 10 and add to b = 7.",
        },
        {
          stepNumber: 4,
          description: "List the positive factor pairs of 10.",
          workingLatex: "10 = 1 \\cdot 10 = 2 \\cdot 5",
          explanation:
            "With c positive and b positive, both numbers share the same (positive) sign, so we search only positive pairs. The positive factor pairs of 10 are 1 and 10, and 2 and 5.",
        },
        {
          stepNumber: 5,
          description: "Choose the pair adding to 7.",
          workingLatex: "1 + 10 = 11, \\qquad 2 + 5 = 7 \\checkmark",
          explanation:
            "Add each pair and compare to b = 7: 1+10 = 11 (no), 2+5 = 7 (yes). So the numbers we need are 2 and 5.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 + 7x + 10 = (x + 2)(x + 5)",
          explanation:
            "Put 2 and 5 into the brackets in place of p and q. The order of the brackets does not matter.",
        },
        {
          stepNumber: 7,
          description: "Verify by expansion.",
          workingLatex:
            "(x + 2)(x + 5) = x^2 + 5x + 2x + 10 = x^2 + 7x + 10 \\checkmark",
          explanation:
            "Expanding confirms the middle term 5x + 2x = 7x and the constant 2\\cdot 5 = 10, matching the original quadratic.",
        },
      ],
      finalAnswer: "\\((x+2)(x+5)\\)",
      canonicalAnswer: "(x+2)(x+5)",
    },
  },
  {
    id: "ga09-003",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 8x + 12\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising quadratics", "monic quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the two-number conditions.",
          workingLatex: "pq = 12, \\quad p + q = 8",
          explanation:
            "For x^2 + 8x + 12 = (x+p)(x+q) we need two numbers whose product is c = 12 and whose sum is b = 8, because expanding (x+p)(x+q) gives x^2 + (p+q)x + pq.",
        },
        {
          stepNumber: 2,
          description: "Fix the signs from b and c.",
          workingLatex: "c = 12 > 0,\\; b = 8 > 0 \\;\\Rightarrow\\; \\text{both numbers positive}",
          explanation:
            "A positive product means the numbers share a sign, and a positive sum forces that sign to be positive. So we only need to hunt through positive factor pairs.",
        },
        {
          stepNumber: 3,
          description: "List the positive factor pairs of 12.",
          workingLatex: "12 = 1 \\cdot 12 = 2 \\cdot 6 = 3 \\cdot 4",
          explanation:
            "Write out every way to make 12 from two positive whole numbers: 1\\cdot 12, 2\\cdot 6 and 3\\cdot 4. Listing them in order means none is missed.",
        },
        {
          stepNumber: 4,
          description: "Work out each sum.",
          workingLatex: "1+12=13, \\quad 2+6=8 \\checkmark, \\quad 3+4=7",
          explanation:
            "Add each factor pair and compare to b = 8. The pair 2 and 6 adds to 8, so that is the pair we want.",
        },
        {
          stepNumber: 5,
          description: "Write the factorisation.",
          workingLatex: "x^2 + 8x + 12 = (x + 2)(x + 6)",
          explanation:
            "Place 2 and 6 into the brackets in place of p and q.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex:
            "(x + 2)(x + 6) = x^2 + 6x + 2x + 12 = x^2 + 8x + 12 \\checkmark",
          explanation:
            "Multiplying the brackets back out gives the original quadratic, confirming the answer.",
        },
      ],
      finalAnswer: "\\((x+2)(x+6)\\)",
      canonicalAnswer: "(x+2)(x+6)",
    },
  },
  {
    id: "ga09-004",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 6x + 8\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["factorising quadratics", "monic quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the product and sum required.",
          workingLatex: "pq = 8, \\quad p + q = 6",
          explanation:
            "For x^2 + 6x + 8 = (x+p)(x+q) we need pq = c = 8 and p+q = b = 6, since expanding (x+p)(x+q) gives x^2 + (p+q)x + pq.",
        },
        {
          stepNumber: 2,
          description: "Fix the signs from b and c.",
          workingLatex: "c = 8 > 0,\\; b = 6 > 0 \\;\\Rightarrow\\; \\text{both numbers positive}",
          explanation:
            "A positive product with a positive sum means both numbers are positive, so we only list positive factor pairs.",
        },
        {
          stepNumber: 3,
          description: "List positive factor pairs of 8.",
          workingLatex: "8 = 1 \\cdot 8 = 2 \\cdot 4",
          explanation:
            "The positive factor pairs of 8 are 1 and 8, and 2 and 4. Listing them in order keeps the search complete.",
        },
        {
          stepNumber: 4,
          description: "Work out each sum and pick 6.",
          workingLatex: "1 + 8 = 9, \\qquad 2 + 4 = 6 \\checkmark",
          explanation:
            "Add each pair: 1+8 = 9 (no), 2+4 = 6 (yes). So the two numbers are 2 and 4.",
        },
        {
          stepNumber: 5,
          description: "Write the brackets.",
          workingLatex: "x^2 + 6x + 8 = (x + 2)(x + 4)",
          explanation:
            "Place 2 and 4 into the brackets in place of p and q.",
        },
        {
          stepNumber: 6,
          description: "Verify by expanding.",
          workingLatex:
            "(x + 2)(x + 4) = x^2 + 4x + 2x + 8 = x^2 + 6x + 8 \\checkmark",
          explanation:
            "Expanding reproduces x^2 + 6x + 8, so the factorisation is correct.",
        },
      ],
      finalAnswer: "\\((x+2)(x+4)\\)",
      canonicalAnswer: "(x+2)(x+4)",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga09-005",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 7x + 12\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "monic quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare with the general expanded form.",
          workingLatex:
            "(x + p)(x + q) = x^2 + (p + q)x + pq",
          explanation:
            "Expanding (x+p)(x+q) shows the coefficient of x is the SUM p+q and the constant is the PRODUCT pq. Matching x^2 + 7x + 12 gives p+q = 7 and pq = 12.",
        },
        {
          stepNumber: 2,
          description: "Decide the signs from b and c.",
          workingLatex: "c = 12 > 0, \\quad b = 7 > 0 \\;\\Rightarrow\\; \\text{both numbers positive}",
          explanation:
            "Sign rule: when c > 0 the two numbers have the SAME sign, and that shared sign matches the sign of b. Here b is positive, so both numbers are positive.",
        },
        {
          stepNumber: 3,
          description: "List the positive factor pairs of 12.",
          workingLatex: "12 = 1 \\cdot 12 = 2 \\cdot 6 = 3 \\cdot 4",
          explanation:
            "Systematically write every positive factor pair so none is missed.",
        },
        {
          stepNumber: 4,
          description: "Find the pair whose sum is 7.",
          workingLatex: "1+12=13, \\quad 2+6=8, \\quad 3+4=7 \\checkmark",
          explanation:
            "Add each pair and compare to b = 7: the sums are 13, 8 and 7. Only 3 and 4 add to 7, so those are the numbers.",
        },
        {
          stepNumber: 5,
          description: "Write the brackets.",
          workingLatex: "x^2 + 7x + 12 = (x + 3)(x + 4)",
          explanation:
            "Put 3 and 4 into the brackets in place of p and q.",
        },
        {
          stepNumber: 6,
          description: "Check by expanding.",
          workingLatex:
            "(x + 3)(x + 4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12 \\checkmark",
          explanation:
            "FOIL gives x^2, then 4x + 3x = 7x, then 3\\cdot 4 = 12 — exactly the original. The factorisation is confirmed.",
        },
      ],
      finalAnswer: "\\((x+3)(x+4)\\)",
      canonicalAnswer: "(x+3)(x+4)",
    },
  },
  {
    id: "ga09-006",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 11x + 24\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "monic quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the conditions on the two numbers.",
          workingLatex: "pq = 24, \\quad p + q = 11",
          explanation:
            "Matching x^2 + 11x + 24 with (x+p)(x+q) = x^2 + (p+q)x + pq requires pq = 24 and p+q = 11.",
        },
        {
          stepNumber: 2,
          description: "Determine the signs.",
          workingLatex: "c = 24 > 0,\\; b = 11 > 0 \\;\\Rightarrow\\; \\text{both positive}",
          explanation:
            "c > 0 means the two numbers share a sign, and b > 0 forces that sign to be positive.",
        },
        {
          stepNumber: 3,
          description: "List positive factor pairs of 24.",
          workingLatex: "24 = 1\\cdot 24 = 2\\cdot 12 = 3\\cdot 8 = 4\\cdot 6",
          explanation:
            "Write all positive factor pairs of 24 in order so none is overlooked.",
        },
        {
          stepNumber: 4,
          description: "Compute the sums of each pair.",
          workingLatex:
            "1{+}24{=}25, \\; 2{+}12{=}14, \\; 3{+}8{=}11 \\checkmark, \\; 4{+}6{=}10",
          explanation:
            "Add each pair and compare to b = 11: the sums are 25, 14, 11 and 10. Only 3 and 8 add to 11, so those are the numbers. Keep the product pq = 24 in mind too — both conditions must hold.",
        },
        {
          stepNumber: 5,
          description: "Write the factorisation.",
          workingLatex: "x^2 + 11x + 24 = (x + 3)(x + 8)",
          explanation:
            "Place 3 and 8 into the brackets.",
        },
        {
          stepNumber: 6,
          description: "Verify by expanding.",
          workingLatex:
            "(x + 3)(x + 8) = x^2 + 8x + 3x + 24 = x^2 + 11x + 24 \\checkmark",
          explanation:
            "Expanding confirms 8x + 3x = 11x and 3\\cdot 8 = 24, matching the original.",
        },
      ],
      finalAnswer: "\\((x+3)(x+8)\\)",
      canonicalAnswer: "(x+3)(x+8)",
    },
  },
  {
    id: "ga09-007",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 7x + 12\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative b"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = 12, \\quad p + q = -7",
          explanation:
            "For x^2 - 7x + 12 we need pq = c = 12 and p+q = b = -7. The minus sign on the 7x makes b negative.",
        },
        {
          stepNumber: 2,
          description: "Use the sign rule to fix the signs.",
          workingLatex: "c = 12 > 0,\\; b = -7 < 0 \\;\\Rightarrow\\; \\text{both numbers negative}",
          explanation:
            "Since c > 0 the numbers share a sign; since their sum b is negative, both numbers must be NEGATIVE. A common slip is to forget the brackets need minus signs here.",
        },
        {
          stepNumber: 3,
          description: "List negative factor pairs of 12.",
          workingLatex: "12 = (-1)(-12) = (-2)(-6) = (-3)(-4)",
          explanation:
            "Two negatives multiply to a positive, so list the negative pairs: (-1,-12), (-2,-6), (-3,-4).",
        },
        {
          stepNumber: 4,
          description: "Compute each sum and pick -7.",
          workingLatex: "-13, \\; -8, \\; -7 \\checkmark \\quad\\Rightarrow\\quad (-3) + (-4) = -7",
          explanation:
            "Add each negative pair: (-1)+(-12) = -13, (-2)+(-6) = -8, (-3)+(-4) = -7. Only -3 and -4 give the required sum -7, so those are the numbers.",
        },
        {
          stepNumber: 5,
          description: "Write the brackets.",
          workingLatex: "x^2 - 7x + 12 = (x - 3)(x - 4)",
          explanation:
            "Place -3 and -4 into the brackets, which appear as (x-3) and (x-4).",
        },
        {
          stepNumber: 6,
          description: "Verify by expansion.",
          workingLatex:
            "(x - 3)(x - 4) = x^2 - 4x - 3x + 12 = x^2 - 7x + 12 \\checkmark",
          explanation:
            "Expanding: -4x - 3x = -7x and (-3)(-4) = +12, matching the original quadratic exactly.",
        },
      ],
      finalAnswer: "\\((x-3)(x-4)\\)",
      canonicalAnswer: "(x-3)(x-4)",
    },
  },
  {
    id: "ga09-008",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 9x + 20\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative b"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = 20, \\quad p + q = -9",
          explanation:
            "We need two numbers with product c = 20 and sum b = -9.",
        },
        {
          stepNumber: 2,
          description: "Fix the signs.",
          workingLatex: "c = 20 > 0,\\; b = -9 < 0 \\;\\Rightarrow\\; \\text{both negative}",
          explanation:
            "A positive product with a negative sum means both numbers are negative.",
        },
        {
          stepNumber: 3,
          description: "List negative factor pairs of 20.",
          workingLatex: "20 = (-1)(-20) = (-2)(-10) = (-4)(-5)",
          explanation:
            "The negative factor pairs of 20 are (-1,-20), (-2,-10) and (-4,-5).",
        },
        {
          stepNumber: 4,
          description: "Compute each sum and pick -9.",
          workingLatex: "-21, \\; -12, \\; -9 \\checkmark \\quad\\Rightarrow\\quad (-4)+(-5) = -9",
          explanation:
            "Add each negative pair: (-1)+(-20) = -21, (-2)+(-10) = -12, (-4)+(-5) = -9. Only -4 and -5 give the required sum, so those are the numbers.",
        },
        {
          stepNumber: 5,
          description: "Write the brackets.",
          workingLatex: "x^2 - 9x + 20 = (x - 4)(x - 5)",
          explanation:
            "Place -4 and -5 into the brackets.",
        },
        {
          stepNumber: 6,
          description: "Verify by expanding.",
          workingLatex:
            "(x - 4)(x - 5) = x^2 - 5x - 4x + 20 = x^2 - 9x + 20 \\checkmark",
          explanation:
            "Expansion gives -5x - 4x = -9x and (-4)(-5) = +20, confirming the factorisation.",
        },
      ],
      finalAnswer: "\\((x-4)(x-5)\\)",
      canonicalAnswer: "(x-4)(x-5)",
    },
  },
  {
    id: "ga09-009",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 2x - 15\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = -15, \\quad p + q = 2",
          explanation:
            "For x^2 + 2x - 15 we need pq = c = -15 and p+q = b = 2.",
        },
        {
          stepNumber: 2,
          description: "Apply the sign rule for c < 0.",
          workingLatex: "c = -15 < 0 \\;\\Rightarrow\\; \\text{numbers have OPPOSITE signs}",
          explanation:
            "When c is negative, the two numbers have opposite signs (one +, one -), because only a positive times a negative gives a negative product.",
        },
        {
          stepNumber: 3,
          description: "Decide which sign dominates.",
          workingLatex: "b = 2 > 0 \\;\\Rightarrow\\; \\text{larger-magnitude number is positive}",
          explanation:
            "The number with the bigger magnitude takes the sign of b. Since b = +2 > 0, the positive number is the larger one.",
        },
        {
          stepNumber: 4,
          description: "List magnitude pairs of 15.",
          workingLatex: "15 = 1\\cdot 15 = 3\\cdot 5",
          explanation:
            "Magnitudes that multiply to 15 are 1&15 and 3&5; one of each pair will be made negative. We want the pair whose difference is 2, so 3 and 5.",
        },
        {
          stepNumber: 5,
          description: "Find the signed pair adding to 2.",
          workingLatex:
            "-3 + 5 = 2 \\checkmark, \\qquad 3 + (-5) = -2",
          explanation:
            "Take 3 and 5 with opposite signs and try both arrangements: -3 and +5 give sum +2, while +3 and -5 give sum -2. We want sum +2, so the larger number (5) is the positive one, exactly as the sign rule predicted. A common slip is to put the minus on the wrong number and land on -2.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 + 2x - 15 = (x - 3)(x + 5)",
          explanation:
            "Place -3 and +5 into the brackets, giving (x-3)(x+5).",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding.",
          workingLatex:
            "(x - 3)(x + 5) = x^2 + 5x - 3x - 15 = x^2 + 2x - 15 \\checkmark",
          explanation:
            "Expanding: 5x - 3x = 2x and (-3)(5) = -15, which matches the original.",
        },
      ],
      finalAnswer: "\\((x-3)(x+5)\\)",
      canonicalAnswer: "(x-3)(x+5)",
    },
  },
  {
    id: "ga09-010",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 3x - 10\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = -10, \\quad p + q = -3",
          explanation:
            "We need product c = -10 and sum b = -3.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -10 < 0 \\;\\Rightarrow\\; \\text{opposite signs}",
          explanation:
            "A negative c means one number is positive and one is negative.",
        },
        {
          stepNumber: 3,
          description: "Decide which sign dominates.",
          workingLatex: "b = -3 < 0 \\;\\Rightarrow\\; \\text{larger-magnitude number is negative}",
          explanation:
            "Since the sum b = -3 is negative, the number with the larger magnitude must be the negative one.",
        },
        {
          stepNumber: 4,
          description: "List magnitude pairs of 10.",
          workingLatex: "10 = 1\\cdot 10 = 2\\cdot 5",
          explanation:
            "Magnitudes multiplying to 10: 1&10 and 2&5. We want the pair whose difference is 3, so 2 and 5.",
        },
        {
          stepNumber: 5,
          description: "Pick the signed pair adding to -3.",
          workingLatex: "2 + (-5) = -3 \\checkmark, \\qquad -2 + 5 = 3",
          explanation:
            "Using magnitudes 2 and 5, try both sign arrangements: +2 and -5 give sum -3, while -2 and +5 give sum +3. We want -3, so the larger number (5) carries the minus sign, matching the rule that the larger-magnitude number takes the sign of b.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 - 3x - 10 = (x + 2)(x - 5)",
          explanation:
            "Place +2 and -5 into the brackets, giving (x+2)(x-5).",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding.",
          workingLatex:
            "(x + 2)(x - 5) = x^2 - 5x + 2x - 10 = x^2 - 3x - 10 \\checkmark",
          explanation:
            "Expansion gives -5x + 2x = -3x and (2)(-5) = -10, matching the quadratic.",
        },
      ],
      finalAnswer: "\\((x+2)(x-5)\\)",
      canonicalAnswer: "(x+2)(x-5)",
    },
  },
  {
    id: "ga09-011",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 4x - 21\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = -21, \\quad p + q = 4",
          explanation:
            "We need product c = -21 and sum b = 4.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -21 < 0 \\;\\Rightarrow\\; \\text{numbers have opposite signs}",
          explanation:
            "A negative product can only come from one positive and one negative number, so the two numbers have opposite signs.",
        },
        {
          stepNumber: 3,
          description: "Decide which sign dominates.",
          workingLatex: "b = 4 > 0 \\;\\Rightarrow\\; \\text{larger-magnitude number is positive}",
          explanation:
            "The number with the bigger magnitude carries the sign of b. Since b = +4 is positive, the larger number is the positive one.",
        },
        {
          stepNumber: 4,
          description: "List magnitude pairs of 21.",
          workingLatex: "21 = 1\\cdot 21 = 3\\cdot 7",
          explanation:
            "Magnitudes that multiply to 21: 1&21 and 3&7. We want the pair whose difference is 4 (the size of b), so 3 and 7.",
        },
        {
          stepNumber: 5,
          description: "Pick the signed pair adding to 4.",
          workingLatex: "-3 + 7 = 4 \\checkmark, \\qquad 3 + (-7) = -4",
          explanation:
            "Take 3 and 7 with opposite signs: -3 and +7 give product -21 and sum +4. The larger number (7) is positive, as predicted.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 + 4x - 21 = (x - 3)(x + 7)",
          explanation:
            "Place -3 and +7 into the brackets, giving (x-3)(x+7).",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding.",
          workingLatex:
            "(x - 3)(x + 7) = x^2 + 7x - 3x - 21 = x^2 + 4x - 21 \\checkmark",
          explanation:
            "Expanding gives 7x - 3x = 4x and (-3)(7) = -21, confirming the answer.",
        },
      ],
      finalAnswer: "\\((x-3)(x+7)\\)",
      canonicalAnswer: "(x-3)(x+7)",
    },
  },
  {
    id: "ga09-012",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - x - 12\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off b and state product/sum.",
          workingLatex: "pq = -12, \\quad p + q = -1",
          explanation:
            "Note that -x means b = -1 (the coefficient of x is -1, not 0). We need product -12 and sum -1.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -12 < 0 \\;\\Rightarrow\\; \\text{numbers have opposite signs}",
          explanation:
            "A negative product means one number is positive and one is negative.",
        },
        {
          stepNumber: 3,
          description: "Decide which sign dominates.",
          workingLatex: "b = -1 < 0 \\;\\Rightarrow\\; \\text{larger-magnitude number is negative}",
          explanation:
            "Since the sum b = -1 is negative, the number with the larger magnitude must carry the minus sign.",
        },
        {
          stepNumber: 4,
          description: "List magnitude pairs of 12.",
          workingLatex: "12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4",
          explanation:
            "We want two magnitudes that differ by 1 (so the signed sum is -1). Of the pairs 1&12, 2&6, 3&4, only 3 and 4 differ by 1.",
        },
        {
          stepNumber: 5,
          description: "Pick the signed pair adding to -1.",
          workingLatex: "3 + (-4) = -1 \\checkmark, \\qquad (3)(-4) = -12 \\checkmark",
          explanation:
            "Choosing +3 and -4 gives product -12 and sum -1, as required. The bigger magnitude (4) carries the minus sign, matching the sign rule.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 - x - 12 = (x + 3)(x - 4)",
          explanation:
            "Place +3 and -4 into the brackets, giving (x+3)(x-4).",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding.",
          workingLatex:
            "(x + 3)(x - 4) = x^2 - 4x + 3x - 12 = x^2 - x - 12 \\checkmark",
          explanation:
            "Expansion gives -4x + 3x = -x and (3)(-4) = -12, matching the original.",
        },
      ],
      finalAnswer: "\\((x+3)(x-4)\\)",
      canonicalAnswer: "(x+3)(x-4)",
    },
  },
  {
    id: "ga09-013",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 2x - 35\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = -35, \\quad p + q = -2",
          explanation:
            "Product c = -35 and sum b = -2.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -35 < 0 \\;\\Rightarrow\\; \\text{numbers have opposite signs}",
          explanation:
            "A negative product comes from one positive and one negative number, so the signs are opposite.",
        },
        {
          stepNumber: 3,
          description: "Decide which sign dominates.",
          workingLatex: "b = -2 < 0 \\;\\Rightarrow\\; \\text{larger-magnitude number is negative}",
          explanation:
            "Because the sum b = -2 is negative, the number with the larger magnitude is the negative one.",
        },
        {
          stepNumber: 4,
          description: "List magnitude pairs of 35.",
          workingLatex: "35 = 1\\cdot 35 = 5\\cdot 7",
          explanation:
            "Magnitudes multiplying to 35: 1&35 and 5&7. We want them to differ by 2 (the size of b), so 5 and 7.",
        },
        {
          stepNumber: 5,
          description: "Pick the signed pair adding to -2.",
          workingLatex: "5 + (-7) = -2 \\checkmark, \\qquad (5)(-7) = -35 \\checkmark",
          explanation:
            "Choosing +5 and -7 gives product -35 and sum -2; the larger magnitude (7) takes the minus sign, as predicted.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 - 2x - 35 = (x + 5)(x - 7)",
          explanation:
            "Place +5 and -7 into the brackets, giving (x+5)(x-7).",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding.",
          workingLatex:
            "(x + 5)(x - 7) = x^2 - 7x + 5x - 35 = x^2 - 2x - 35 \\checkmark",
          explanation:
            "Expanding confirms -7x + 5x = -2x and (5)(-7) = -35.",
        },
      ],
      finalAnswer: "\\((x+5)(x-7)\\)",
      canonicalAnswer: "(x+5)(x-7)",
    },
  },
  {
    id: "ga09-014",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 10x + 25\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "perfect square trinomial"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = 25, \\quad p + q = 10",
          explanation:
            "We need product c = 25 and sum b = 10, with both numbers positive (c>0, b>0).",
        },
        {
          stepNumber: 2,
          description: "List positive factor pairs of 25.",
          workingLatex: "25 = 1\\cdot 25 = 5\\cdot 5",
          explanation:
            "The factor pairs are 1&25 and 5&5. Notice 25 is a perfect square, hinting at a repeated factor.",
        },
        {
          stepNumber: 3,
          description: "Pick the pair summing to 10.",
          workingLatex: "1 + 25 = 26, \\qquad 5 + 5 = 10 \\checkmark",
          explanation:
            "Add each pair: 1+25 = 26 (no), 5+5 = 10 (yes). The two numbers are EQUAL, which is the tell-tale sign of a perfect-square trinomial — the brackets will be identical.",
        },
        {
          stepNumber: 4,
          description: "Write as a repeated bracket.",
          workingLatex: "x^2 + 10x + 25 = (x + 5)(x + 5)",
          explanation:
            "Because both numbers are 5, the factorisation is (x+5)(x+5).",
        },
        {
          stepNumber: 5,
          description: "Write compactly as a square.",
          workingLatex: "(x + 5)(x + 5) = (x + 5)^2",
          explanation:
            "Two identical brackets are written as a single squared bracket — this is a perfect-square trinomial.",
        },
        {
          stepNumber: 6,
          description: "Verify by expanding the square.",
          workingLatex:
            "(x + 5)^2 = x^2 + 2\\cdot 5 \\cdot x + 25 = x^2 + 10x + 25 \\checkmark",
          explanation:
            "Using (x+a)^2 = x^2 + 2ax + a^2 with a = 5 reproduces the original. This confirms it is a perfect square.",
        },
      ],
      finalAnswer: "\\((x+5)^2\\)",
      canonicalAnswer: "(x+5)^2",
    },
  },
  {
    id: "ga09-015",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 12x + 36\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "perfect square trinomial"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = 36, \\quad p + q = -12",
          explanation:
            "Product c = 36 and sum b = -12; c>0 with b<0 means both numbers are negative.",
        },
        {
          stepNumber: 2,
          description: "List negative factor pairs of 36.",
          workingLatex: "36 = (-1)(-36) = (-2)(-18) = (-3)(-12) = (-4)(-9) = (-6)(-6)",
          explanation:
            "Negative factor pairs of 36. Notice 36 is a perfect square, so (-6)(-6) is among them.",
        },
        {
          stepNumber: 3,
          description: "Pick the pair summing to -12.",
          workingLatex: "(-1)+(-36) = -37, \\;\\ldots\\; (-6) + (-6) = -12 \\checkmark",
          explanation:
            "Scanning the negative pairs, the equal pair -6 and -6 adds to -12. Equal numbers mean the brackets are identical, so this is a perfect-square trinomial.",
        },
        {
          stepNumber: 4,
          description: "Write the repeated bracket.",
          workingLatex: "x^2 - 12x + 36 = (x - 6)(x - 6)",
          explanation:
            "Both numbers are -6, giving identical brackets (x-6).",
        },
        {
          stepNumber: 5,
          description: "Write compactly as a square.",
          workingLatex: "(x - 6)(x - 6) = (x - 6)^2",
          explanation:
            "The two identical brackets combine into (x-6)^2.",
        },
        {
          stepNumber: 6,
          description: "Verify by expanding.",
          workingLatex:
            "(x - 6)^2 = x^2 - 2\\cdot 6 \\cdot x + 36 = x^2 - 12x + 36 \\checkmark",
          explanation:
            "Using (x-a)^2 = x^2 - 2ax + a^2 with a = 6 reproduces the original.",
        },
      ],
      finalAnswer: "\\((x-6)^2\\)",
      canonicalAnswer: "(x-6)^2",
    },
  },
  {
    id: "ga09-016",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 9x + 18\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "monic quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = 18, \\quad p + q = 9",
          explanation:
            "Matching x^2 + 9x + 18 with (x+p)(x+q) = x^2 + (p+q)x + pq, we need product c = 18 and sum b = 9.",
        },
        {
          stepNumber: 2,
          description: "Fix the signs from b and c.",
          workingLatex: "c = 18 > 0,\\; b = 9 > 0 \\;\\Rightarrow\\; \\text{both numbers positive}",
          explanation:
            "A positive product with a positive sum means both numbers are positive, so we only search positive factor pairs.",
        },
        {
          stepNumber: 3,
          description: "List positive factor pairs of 18.",
          workingLatex: "18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6",
          explanation:
            "Write the positive factor pairs of 18 in order: 1&18, 2&9, 3&6.",
        },
        {
          stepNumber: 4,
          description: "Compute each sum and pick 9.",
          workingLatex: "1{+}18{=}19, \\; 2{+}9{=}11, \\; 3{+}6{=}9 \\checkmark",
          explanation:
            "The sums are 19, 11, 9; the pair 3 and 6 adds to 9, so those are the numbers.",
        },
        {
          stepNumber: 5,
          description: "Write the factorisation.",
          workingLatex: "x^2 + 9x + 18 = (x + 3)(x + 6)",
          explanation:
            "Place 3 and 6 into the brackets in place of p and q.",
        },
        {
          stepNumber: 6,
          description: "Verify by expanding.",
          workingLatex:
            "(x + 3)(x + 6) = x^2 + 6x + 3x + 18 = x^2 + 9x + 18 \\checkmark",
          explanation:
            "Expansion gives 6x + 3x = 9x and 3\\cdot 6 = 18, reproducing the original quadratic.",
        },
      ],
      finalAnswer: "\\((x+3)(x+6)\\)",
      canonicalAnswer: "(x+3)(x+6)",
    },
  },
  {
    id: "ga09-017",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 5x - 24\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = -24, \\quad p + q = -5",
          explanation:
            "Product c = -24 and sum b = -5.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -24 < 0 \\;\\Rightarrow\\; \\text{numbers have opposite signs}",
          explanation:
            "A negative product comes from one positive and one negative number, so the signs are opposite.",
        },
        {
          stepNumber: 3,
          description: "Decide which sign dominates.",
          workingLatex: "b = -5 < 0 \\;\\Rightarrow\\; \\text{larger-magnitude number is negative}",
          explanation:
            "Since the sum b = -5 is negative, the number with the larger magnitude must be the negative one.",
        },
        {
          stepNumber: 4,
          description: "List magnitude pairs of 24.",
          workingLatex: "24 = 1\\cdot 24 = 2\\cdot 12 = 3\\cdot 8 = 4\\cdot 6",
          explanation:
            "We want magnitudes differing by 5 (so the signed sum is -5). Checking differences: 24-1=23, 12-2=10, 8-3=5, 6-4=2 — the pair 3 and 8 differs by 5.",
        },
        {
          stepNumber: 5,
          description: "Pick the signed pair adding to -5.",
          workingLatex: "3 + (-8) = -5 \\checkmark, \\qquad (3)(-8) = -24 \\checkmark",
          explanation:
            "Choosing +3 and -8 gives product -24 and sum -5; the larger magnitude (8) takes the minus sign, as predicted.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 - 5x - 24 = (x + 3)(x - 8)",
          explanation:
            "Place +3 and -8 into the brackets, giving (x+3)(x-8).",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding.",
          workingLatex:
            "(x + 3)(x - 8) = x^2 - 8x + 3x - 24 = x^2 - 5x - 24 \\checkmark",
          explanation:
            "Expansion gives -8x + 3x = -5x and (3)(-8) = -24, matching the original.",
        },
      ],
      finalAnswer: "\\((x+3)(x-8)\\)",
      canonicalAnswer: "(x+3)(x-8)",
    },
  },
  {
    id: "ga09-018",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 9\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the missing middle term.",
          workingLatex: "x^2 - 9 = x^2 + 0x - 9",
          explanation:
            "There is no x-term, so b = 0. Writing in the +0x makes it clear we still seek two numbers with product c = -9 and sum b = 0. This is a CONTRAST case — really a difference of two squares (studied fully in bank ga11) — but the two-number method still works.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -9 < 0 \\;\\Rightarrow\\; \\text{opposite signs}; \\; b = 0",
          explanation:
            "Opposite signs and a sum of zero means the two numbers are negatives of each other (equal magnitude, opposite sign).",
        },
        {
          stepNumber: 3,
          description: "Pick the pair summing to 0.",
          workingLatex: "(+3) + (-3) = 0, \\qquad (+3)(-3) = -9 \\checkmark",
          explanation:
            "Two numbers that add to zero must be negatives of each other, and to multiply to -9 their common magnitude must be 3. So +3 and -3 fit both conditions.",
        },
        {
          stepNumber: 4,
          description: "Write the brackets.",
          workingLatex: "x^2 - 9 = (x + 3)(x - 3)",
          explanation:
            "Place +3 and -3 into the brackets, giving (x+3)(x-3).",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex:
            "(x + 3)(x - 3) = x^2 - 3x + 3x - 9 = x^2 - 9 \\checkmark",
          explanation:
            "The middle terms -3x and +3x cancel, leaving x^2 - 9. This is the difference-of-two-squares pattern a^2 - b^2 = (a+b)(a-b) with a = x, b = 3.",
        },
      ],
      finalAnswer: "\\((x+3)(x-3)\\)",
      canonicalAnswer: "(x+3)(x-3)",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga09-019",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 13x + 42\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "larger constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the two-number conditions.",
          workingLatex: "(x + p)(x + q): \\quad pq = 42, \\quad p + q = 13",
          explanation:
            "Match x^2 + 13x + 42 with (x+p)(x+q): the product is c = 42 and the sum is b = 13. With c>0 and b>0, both numbers are positive.",
        },
        {
          stepNumber: 2,
          description: "List ALL positive factor pairs of 42 carefully.",
          workingLatex: "42 = 1\\cdot 42 = 2\\cdot 21 = 3\\cdot 14 = 6\\cdot 7",
          explanation:
            "With a larger constant it is easy to miss a pair, so list them systematically: 1&42, 2&21, 3&14, 6&7.",
        },
        {
          stepNumber: 3,
          description: "Compute each sum and select 13.",
          workingLatex: "1{+}42{=}43, \\; 2{+}21{=}23, \\; 3{+}14{=}17, \\; 6{+}7{=}13 \\checkmark",
          explanation:
            "Add each pair: 43, 23, 17, 13. Only 6 and 7 add to b = 13, and they also multiply to 42 = c, so both conditions hold.",
        },
        {
          stepNumber: 4,
          description: "Write the brackets.",
          workingLatex: "x^2 + 13x + 42 = (x + 6)(x + 7)",
          explanation:
            "Place 6 and 7 into the brackets.",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding (FOIL).",
          workingLatex:
            "(x + 6)(x + 7) = x^2 + 7x + 6x + 42 = x^2 + 13x + 42 \\checkmark",
          explanation:
            "Expanding confirms 7x + 6x = 13x and 6\\cdot 7 = 42, exactly the original.",
        },
      ],
      finalAnswer: "\\((x+6)(x+7)\\)",
      canonicalAnswer: "(x+6)(x+7)",
    },
  },
  {
    id: "ga09-020",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 4x - 45\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = -45, \\quad p + q = -4",
          explanation:
            "We need product c = -45 and sum b = -4.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -45 < 0 \\;\\Rightarrow\\; \\text{numbers have opposite signs}",
          explanation:
            "A negative product comes from one positive and one negative number, so the two signs are opposite.",
        },
        {
          stepNumber: 3,
          description: "Decide which sign dominates.",
          workingLatex: "b = -4 < 0 \\;\\Rightarrow\\; \\text{larger-magnitude number is negative}",
          explanation:
            "Because the sum b = -4 is negative, the number with the larger magnitude must be the negative one.",
        },
        {
          stepNumber: 4,
          description: "List magnitude pairs of 45.",
          workingLatex: "45 = 1\\cdot 45 = 3\\cdot 15 = 5\\cdot 9",
          explanation:
            "We need magnitudes differing by 4 (so the signed sum is -4). Of 1&45, 3&15, 5&9, only 5 and 9 differ by 4.",
        },
        {
          stepNumber: 5,
          description: "Pick the signed pair adding to -4.",
          workingLatex: "5 + (-9) = -4 \\checkmark, \\qquad (5)(-9) = -45 \\checkmark",
          explanation:
            "Choosing +5 and -9 gives product -45 and sum -4; the larger magnitude (9) takes the minus sign, as predicted.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 - 4x - 45 = (x + 5)(x - 9)",
          explanation:
            "Place +5 and -9 into the brackets, giving (x+5)(x-9).",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding.",
          workingLatex:
            "(x + 5)(x - 9) = x^2 - 9x + 5x - 45 = x^2 - 4x - 45 \\checkmark",
          explanation:
            "Expansion gives -9x + 5x = -4x and (5)(-9) = -45, confirming the factorisation.",
        },
      ],
      finalAnswer: "\\((x+5)(x-9)\\)",
      canonicalAnswer: "(x+5)(x-9)",
    },
  },
  {
    id: "ga09-021",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + 3x - 54\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = -54, \\quad p + q = 3",
          explanation:
            "Product c = -54 and sum b = 3.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -54 < 0 \\;\\Rightarrow\\; \\text{numbers have opposite signs}",
          explanation:
            "A negative product comes from one positive and one negative number, so the two signs are opposite.",
        },
        {
          stepNumber: 3,
          description: "Decide which sign dominates.",
          workingLatex: "b = 3 > 0 \\;\\Rightarrow\\; \\text{larger-magnitude number is positive}",
          explanation:
            "Since the sum b = +3 is positive, the number with the larger magnitude is the positive one.",
        },
        {
          stepNumber: 4,
          description: "List magnitude pairs of 54.",
          workingLatex: "54 = 1\\cdot 54 = 2\\cdot 27 = 3\\cdot 18 = 6\\cdot 9",
          explanation:
            "We need magnitudes differing by 3 (so the signed sum is +3). Of 1&54, 2&27, 3&18, 6&9, only 6 and 9 differ by 3.",
        },
        {
          stepNumber: 5,
          description: "Pick the signed pair adding to 3.",
          workingLatex: "-6 + 9 = 3 \\checkmark, \\qquad (-6)(9) = -54 \\checkmark",
          explanation:
            "Choosing -6 and +9 gives product -54 and sum +3; the larger magnitude (9) is positive, as predicted.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 + 3x - 54 = (x - 6)(x + 9)",
          explanation:
            "Place -6 and +9 into the brackets, giving (x-6)(x+9).",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding.",
          workingLatex:
            "(x - 6)(x + 9) = x^2 + 9x - 6x - 54 = x^2 + 3x - 54 \\checkmark",
          explanation:
            "Expanding gives 9x - 6x = +3x and (-6)(9) = -54, matching the original.",
        },
      ],
      finalAnswer: "\\((x-6)(x+9)\\)",
      canonicalAnswer: "(x-6)(x+9)",
    },
  },
  {
    id: "ga09-022",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 14x + 49\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "perfect square trinomial"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = 49, \\quad p + q = -14",
          explanation:
            "Product c = 49 and sum b = -14; c>0 with b<0 means both numbers are negative.",
        },
        {
          stepNumber: 2,
          description: "Test for a perfect square.",
          workingLatex: "\\sqrt{49} = 7, \\qquad 2\\cdot 7 = 14",
          explanation:
            "A quick perfect-square check: c = 49 = 7^2, and 2\\times 7 = 14 equals |b|. When the constant is a square and twice its root equals |b|, the quadratic is a perfect-square trinomial (x \\pm 7)^2 — here with a minus because b is negative.",
        },
        {
          stepNumber: 3,
          description: "List the negative factor pairs of 49.",
          workingLatex: "49 = (-1)(-49) = (-7)(-7)",
          explanation:
            "The negative factor pairs of 49 are (-1,-49) and (-7,-7), since 49 is prime-squared (only 1, 7, 49 divide it).",
        },
        {
          stepNumber: 4,
          description: "Pick the pair summing to -14.",
          workingLatex: "(-1)+(-49) = -50, \\quad (-7)+(-7) = -14 \\checkmark",
          explanation:
            "Only -7 and -7 sum to -14, confirming the equal pair predicted by the perfect-square check.",
        },
        {
          stepNumber: 5,
          description: "Write the repeated bracket as a square.",
          workingLatex: "(x - 7)(x - 7) = (x - 7)^2",
          explanation:
            "Equal numbers -7 give identical brackets, which combine into (x-7)^2.",
        },
        {
          stepNumber: 6,
          description: "Verify by expanding the square.",
          workingLatex:
            "(x - 7)^2 = x^2 - 2\\cdot 7 \\cdot x + 49 = x^2 - 14x + 49 \\checkmark",
          explanation:
            "Using (x-a)^2 = x^2 - 2ax + a^2 with a = 7 reproduces the original quadratic.",
        },
      ],
      finalAnswer: "\\((x-7)^2\\)",
      canonicalAnswer: "(x-7)^2",
    },
  },
  {
    id: "ga09-023",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 11x + 30\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative b"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = 30, \\quad p + q = -11",
          explanation:
            "Matching x^2 - 11x + 30 with (x+p)(x+q), we need product c = 30 and sum b = -11.",
        },
        {
          stepNumber: 2,
          description: "Fix the signs from b and c.",
          workingLatex: "c = 30 > 0,\\; b = -11 < 0 \\;\\Rightarrow\\; \\text{both numbers negative}",
          explanation:
            "A positive product means the numbers share a sign; a negative sum then forces that shared sign to be negative. A common slip is to forget the minus signs and write (x+5)(x+6).",
        },
        {
          stepNumber: 3,
          description: "List negative factor pairs of 30.",
          workingLatex: "30 = (-1)(-30) = (-2)(-15) = (-3)(-10) = (-5)(-6)",
          explanation:
            "Write all negative factor pairs of 30 in order so none is missed.",
        },
        {
          stepNumber: 4,
          description: "Compute sums and select -11.",
          workingLatex: "-31, \\; -17, \\; -13, \\; -11 \\checkmark \\Rightarrow (-5)+(-6) = -11",
          explanation:
            "The sums are -31, -17, -13, -11; only the pair -5 and -6 gives -11, so those are the numbers.",
        },
        {
          stepNumber: 5,
          description: "Write the brackets.",
          workingLatex: "x^2 - 11x + 30 = (x - 5)(x - 6)",
          explanation:
            "Use -5 and -6 in the brackets, which appear as (x-5) and (x-6).",
        },
        {
          stepNumber: 6,
          description: "Verify by expanding.",
          workingLatex:
            "(x - 5)(x - 6) = x^2 - 6x - 5x + 30 = x^2 - 11x + 30 \\checkmark",
          explanation:
            "Expansion gives -6x - 5x = -11x and (-5)(-6) = +30, confirming the answer.",
        },
      ],
      finalAnswer: "\\((x-5)(x-6)\\)",
      canonicalAnswer: "(x-5)(x-6)",
    },
  },
  {
    id: "ga09-024",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(x^2 + x - 56\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off b and state product/sum.",
          workingLatex: "pq = -56, \\quad p + q = 1",
          explanation:
            "Here +x means b = +1. We need product -56 and sum +1.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -56 < 0 \\;\\Rightarrow\\; \\text{numbers have opposite signs}",
          explanation:
            "A negative product comes from one positive and one negative number, so the two signs are opposite.",
        },
        {
          stepNumber: 3,
          description: "Decide which sign dominates.",
          workingLatex: "b = 1 > 0 \\;\\Rightarrow\\; \\text{larger-magnitude number is positive}",
          explanation:
            "Since the sum b = +1 is positive, the larger-magnitude number is the positive one, and it is just one bigger than the negative one.",
        },
        {
          stepNumber: 4,
          description: "List magnitude pairs of 56.",
          workingLatex: "56 = 1\\cdot 56 = 2\\cdot 28 = 4\\cdot 14 = 7\\cdot 8",
          explanation:
            "We want two magnitudes differing by 1. Of 1&56, 2&28, 4&14, 7&8, only 7 and 8 differ by 1.",
        },
        {
          stepNumber: 5,
          description: "Pick the signed pair adding to 1.",
          workingLatex: "-7 + 8 = 1 \\checkmark, \\qquad (-7)(8) = -56 \\checkmark",
          explanation:
            "Choosing -7 and +8 gives product -56 and sum +1; the larger magnitude (8) is positive, as predicted.",
        },
        {
          stepNumber: 6,
          description: "Write the brackets.",
          workingLatex: "x^2 + x - 56 = (x - 7)(x + 8)",
          explanation:
            "Place -7 and +8 into the brackets, giving (x-7)(x+8).",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding.",
          workingLatex:
            "(x - 7)(x + 8) = x^2 + 8x - 7x - 56 = x^2 + x - 56 \\checkmark",
          explanation:
            "Expansion gives 8x - 7x = +x and (-7)(8) = -56, matching the original.",
        },
      ],
      finalAnswer: "\\((x-7)(x+8)\\)",
      canonicalAnswer: "(x-7)(x+8)",
    },
  },
  {
    id: "ga09-025",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Factorise \\(x^2 - 13x + 40\\), and hence write down the value of \\(x^2 - 13x + 40\\) when \\(x = 5\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "negative b"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = 40, \\quad p + q = -13",
          explanation:
            "First factorise the quadratic: matching x^2 - 13x + 40 with (x+p)(x+q), we need product c = 40 and sum b = -13.",
        },
        {
          stepNumber: 2,
          description: "Fix the signs from b and c.",
          workingLatex: "c = 40 > 0,\\; b = -13 < 0 \\;\\Rightarrow\\; \\text{both numbers negative}",
          explanation:
            "A positive product means a shared sign; a negative sum makes that sign negative, so both numbers are negative.",
        },
        {
          stepNumber: 3,
          description: "List negative factor pairs of 40.",
          workingLatex: "40 = (-1)(-40) = (-2)(-20) = (-4)(-10) = (-5)(-8)",
          explanation:
            "Write all negative factor pairs of 40 in order so none is missed.",
        },
        {
          stepNumber: 4,
          description: "Select the pair summing to -13.",
          workingLatex: "-41, \\; -22, \\; -14, \\; -13 \\checkmark \\Rightarrow (-5)+(-8) = -13",
          explanation:
            "The sums are -41, -22, -14, -13; only -5 and -8 give -13, so those are the numbers.",
        },
        {
          stepNumber: 5,
          description: "Write and verify the factorisation.",
          workingLatex:
            "(x - 5)(x - 8) = x^2 - 8x - 5x + 40 = x^2 - 13x + 40 \\checkmark",
          explanation:
            "Place -5 and -8 into the brackets; expanding confirms -8x - 5x = -13x and (-5)(-8) = +40.",
        },
        {
          stepNumber: 6,
          description: "Substitute x = 5 into the factorised form.",
          workingLatex: "(5 - 5)(5 - 8) = (0)(-3) = 0",
          explanation:
            "The factorised form makes evaluation easy: at x = 5 the first bracket (x-5) is zero, so the whole product is 0. (Check on the original: 25 - 65 + 40 = 0.)",
        },
      ],
      finalAnswer: "\\((x-5)(x-8)\\); value at \\(x=5\\) is \\(0\\).",
      canonicalAnswer: "(x-5)(x-8)",
    },
  },
  {
    id: "ga09-026",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText:
      "By factorising, solve \\(x^2 + 5x + 6 = 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics", "factorising", "zero-product principle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the two-number conditions.",
          workingLatex: "pq = 6, \\quad p + q = 5",
          explanation:
            "First factorise the left-hand side: we need two numbers multiplying to 6 and adding to 5 (both positive).",
        },
        {
          stepNumber: 2,
          description: "Find the numbers.",
          workingLatex: "2\\cdot 3 = 6, \\quad 2 + 3 = 5 \\checkmark",
          explanation:
            "The numbers 2 and 3 multiply to 6 and add to 5, so they are the right pair.",
        },
        {
          stepNumber: 3,
          description: "Factorise the left-hand side.",
          workingLatex: "x^2 + 5x + 6 = (x + 2)(x + 3)",
          explanation:
            "Place 2 and 3 into the brackets to factorise.",
        },
        {
          stepNumber: 4,
          description: "Verify the factorisation.",
          workingLatex: "(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6 \\checkmark",
          explanation:
            "Always check by expanding before solving — a factorising slip here would give wrong roots.",
        },
        {
          stepNumber: 5,
          description: "Apply the zero-product principle.",
          workingLatex: "(x + 2)(x + 3) = 0 \\;\\Rightarrow\\; x + 2 = 0 \\;\\text{or}\\; x + 3 = 0",
          explanation:
            "The zero-product principle states that if a product equals zero then at least one factor must be zero. So we solve each bracket equal to zero.",
        },
        {
          stepNumber: 6,
          description: "Solve each linear equation.",
          workingLatex: "x + 2 = 0 \\Rightarrow x = -2, \\quad x + 3 = 0 \\Rightarrow x = -3",
          explanation:
            "Solve each bracket: from x+2 = 0 subtract 2 to get x = -2, and from x+3 = 0 subtract 3 to get x = -3. Notice the roots are the NEGATIVES of the numbers inside the brackets.",
        },
        {
          stepNumber: 7,
          description: "Check by substituting back.",
          workingLatex:
            "(-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0; \\quad (-3)^2 + 5(-3) + 6 = 9 - 15 + 6 = 0 \\checkmark",
          explanation:
            "Both values give 0, confirming the roots. Note the roots are the NEGATIVES of the numbers inside the brackets.",
        },
      ],
      finalAnswer: "\\(x = -2\\) or \\(x = -3\\)",
      canonicalAnswer: "{-3,-2}",
    },
  },
  {
    id: "ga09-027",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText: "By factorising, solve \\(x^2 - 2x - 8 = 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics", "factorising", "negative c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = -8, \\quad p + q = -2",
          explanation:
            "Factorise the left-hand side: product c = -8 and sum b = -2.",
        },
        {
          stepNumber: 2,
          description: "Apply the c < 0 sign rule.",
          workingLatex: "c = -8 < 0 \\;\\Rightarrow\\; \\text{opposite signs}; \\quad b = -2 < 0 \\;\\Rightarrow\\; \\text{larger is negative}",
          explanation:
            "A negative product means opposite signs, and a negative sum means the larger-magnitude number carries the minus sign.",
        },
        {
          stepNumber: 3,
          description: "Find the numbers.",
          workingLatex: "2 + (-4) = -2, \\quad (2)(-4) = -8 \\checkmark",
          explanation:
            "Magnitudes 2 and 4 multiply to 8 and differ by 2. With the larger (4) negative, the pair +2 and -4 gives product -8 and sum -2, exactly what we need.",
        },
        {
          stepNumber: 4,
          description: "Factorise the left-hand side.",
          workingLatex: "x^2 - 2x - 8 = (x + 2)(x - 4)",
          explanation:
            "Place +2 and -4 into the brackets, giving (x+2)(x-4).",
        },
        {
          stepNumber: 5,
          description: "Verify the factorisation.",
          workingLatex: "(x + 2)(x - 4) = x^2 - 4x + 2x - 8 = x^2 - 2x - 8 \\checkmark",
          explanation:
            "Expansion confirms -4x + 2x = -2x and (2)(-4) = -8. Always check before solving — a factorising slip here would give wrong roots.",
        },
        {
          stepNumber: 6,
          description: "Apply the zero-product principle.",
          workingLatex: "(x + 2)(x - 4) = 0 \\;\\Rightarrow\\; x + 2 = 0 \\;\\text{or}\\; x - 4 = 0",
          explanation:
            "If the product of two factors is zero, at least one factor is zero, so set each bracket to zero.",
        },
        {
          stepNumber: 7,
          description: "Solve each linear equation.",
          workingLatex: "x + 2 = 0 \\Rightarrow x = -2, \\quad x - 4 = 0 \\Rightarrow x = 4",
          explanation:
            "From x+2 = 0 we get x = -2, and from x-4 = 0 we get x = 4.",
        },
        {
          stepNumber: 8,
          description: "Check by substituting back.",
          workingLatex:
            "(-2)^2-2(-2)-8 = 4+4-8 = 0, \\quad 4^2-2(4)-8 = 16-8-8 = 0 \\checkmark",
          explanation:
            "Substituting both roots into the original quadratic gives 0, confirming the solutions.",
        },
      ],
      finalAnswer: "\\(x = -2\\) or \\(x = 4\\)",
      canonicalAnswer: "{-2,4}",
    },
  },
  {
    id: "ga09-028",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText: "By factorising, solve \\(x^2 - 8x + 16 = 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics", "perfect square trinomial", "repeated root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State product and sum.",
          workingLatex: "pq = 16, \\quad p + q = -8",
          explanation:
            "Product c = 16 and sum b = -8; c>0 with b<0 means both numbers negative.",
        },
        {
          stepNumber: 2,
          description: "Spot the perfect square.",
          workingLatex: "16 = 4^2, \\quad 2\\cdot 4 = 8 = |b| \\;\\Rightarrow\\; (-4) + (-4) = -8",
          explanation:
            "Since c = 16 = 4^2 and 2\\times 4 = 8 = |b|, this is a perfect-square trinomial with the equal pair -4, -4.",
        },
        {
          stepNumber: 3,
          description: "Write as a square.",
          workingLatex: "x^2 - 8x + 16 = (x - 4)(x - 4) = (x - 4)^2",
          explanation:
            "Both numbers are -4, so the two brackets are identical and combine into a single square (x-4)^2.",
        },
        {
          stepNumber: 4,
          description: "Verify the factorisation.",
          workingLatex: "(x - 4)^2 = x^2 - 2(4)x + 16 = x^2 - 8x + 16 \\checkmark",
          explanation:
            "Using (x-a)^2 = x^2 - 2ax + a^2 with a = 4 reproduces the original quadratic, confirming the factorisation.",
        },
        {
          stepNumber: 5,
          description: "Apply the zero-product principle.",
          workingLatex: "(x - 4)^2 = 0 \\;\\Rightarrow\\; x - 4 = 0",
          explanation:
            "A square equals zero only when its base is zero, so x - 4 = 0. Both factors are identical here, which is why there is only one distinct equation to solve.",
        },
        {
          stepNumber: 6,
          description: "Solve and check.",
          workingLatex: "x = 4 \\quad (\\text{repeated root}); \\quad 4^2 - 8(4) + 16 = 16 - 32 + 16 = 0 \\checkmark",
          explanation:
            "There is one repeated root, x = 4 (sometimes written x = 4 twice). Substituting back gives 0, confirming the root.",
        },
      ],
      finalAnswer: "\\(x = 4\\) (a repeated root)",
      canonicalAnswer: "{4}",
    },
  },
  {
    id: "ga09-029",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText:
      "A rectangle has width \\((x)\\) cm and length \\((x + 3)\\) cm. Its area is \\(40\\) cm\\(^2\\). By forming and factorising a quadratic, find the value of \\(x\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics", "factorising", "problem solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form an equation from the area.",
          workingLatex: "x(x + 3) = 40",
          explanation:
            "Area = width \\times length, so x(x+3) = 40.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket.",
          workingLatex: "x^2 + 3x = 40",
          explanation:
            "Multiply out x(x+3) = x^2 + 3x to get a quadratic in standard shape (apart from the constant being on the right).",
        },
        {
          stepNumber: 3,
          description: "Rearrange so the quadratic equals zero.",
          workingLatex: "x^2 + 3x - 40 = 0",
          explanation:
            "Subtract 40 from both sides. The quadratic MUST equal zero before factorising to solve — the zero-product principle only works against zero.",
        },
        {
          stepNumber: 4,
          description: "Factorise using the two-number method.",
          workingLatex: "pq = -40,\\; p+q = 3 \\;\\Rightarrow\\; -5 + 8 = 3,\\; (-5)(8) = -40",
          explanation:
            "Product -40 (negative, so opposite signs) and sum +3 (positive, so the larger number is positive): the pair -5 and +8 multiplies to -40 and adds to +3.",
        },
        {
          stepNumber: 5,
          description: "Write and verify the factorisation.",
          workingLatex: "(x - 5)(x + 8) = x^2 + 8x - 5x - 40 = x^2 + 3x - 40 \\checkmark",
          explanation:
            "Place -5 and +8 into the brackets; expanding confirms x^2 + 3x - 40.",
        },
        {
          stepNumber: 6,
          description: "Apply the zero-product principle.",
          workingLatex: "(x - 5)(x + 8) = 0 \\;\\Rightarrow\\; x = 5 \\;\\text{or}\\; x = -8",
          explanation:
            "Set each factor to zero to obtain the two candidate solutions.",
        },
        {
          stepNumber: 7,
          description: "Reject the invalid root using context.",
          workingLatex: "x = 5 \\quad (\\text{reject } x = -8 \\text{: a width cannot be negative})",
          explanation:
            "A length must be positive, so x = -8 is rejected. Check: width 5, length 8, area 5\\times 8 = 40 \\checkmark.",
        },
      ],
      finalAnswer: "\\(x = 5\\) cm",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga09-030",
    topicRef: "ga09",
    topicTitle: "Factorising quadratics x² + bx + c",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText:
      "The quadratic \\(x^2 + bx + c\\) factorises as \\((x - 2)(x + 9)\\). Find \\(b\\) and \\(c\\), and hence solve \\(x^2 + bx + c = 0\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["factorising quadratics", "solving quadratics", "reverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the given factorised form.",
          workingLatex: "(x - 2)(x + 9) = x^2 + 9x - 2x - 18",
          explanation:
            "Work the problem backwards: expand the brackets using FOIL to recover the quadratic.",
        },
        {
          stepNumber: 2,
          description: "Collect like terms.",
          workingLatex: "x^2 + 9x - 2x - 18 = x^2 + 7x - 18",
          explanation:
            "Combine the x-terms: 9x - 2x = 7x, leaving the constant -18.",
        },
        {
          stepNumber: 3,
          description: "Read off b and c.",
          workingLatex: "b = 7, \\qquad c = -18",
          explanation:
            "Comparing x^2 + bx + c with x^2 + 7x - 18 gives b = 7 and c = -18. (As a sanity check on the two-number method: the numbers -2 and +9 multiply to -18 = c and add to 7 = b.)",
        },
        {
          stepNumber: 4,
          description: "Apply the zero-product principle.",
          workingLatex: "(x - 2)(x + 9) = 0 \\;\\Rightarrow\\; x - 2 = 0 \\;\\text{or}\\; x + 9 = 0",
          explanation:
            "Since the equation is already factorised, set each factor to zero rather than re-factorising.",
        },
        {
          stepNumber: 5,
          description: "Solve each linear equation.",
          workingLatex: "x - 2 = 0 \\Rightarrow x = 2, \\quad x + 9 = 0 \\Rightarrow x = -9",
          explanation:
            "From x-2 = 0 add 2 to get x = 2, and from x+9 = 0 subtract 9 to get x = -9. As always, the roots are the negatives of the constants inside the brackets.",
        },
        {
          stepNumber: 6,
          description: "Check by substituting back.",
          workingLatex:
            "2^2 + 7(2) - 18 = 0, \\quad (-9)^2 + 7(-9) - 18 = 0 \\checkmark",
          explanation:
            "Substituting each root into x^2 + 7x - 18 gives 0, confirming both solutions.",
        },
      ],
      finalAnswer: "\\(b = 7,\\; c = -18\\); roots \\(x = 2\\) or \\(x = -9\\).",
      canonicalAnswer: "{-9,2}",
    },
  },
];
