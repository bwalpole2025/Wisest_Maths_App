/**
 * Topic: Expanding products of more than two binomials
 * Ref: ga07  (DfE A4)
 * Strand: Algebra — GCSE Maths (Higher)
 *
 * Coverage: expanding products of three (or more) binomials into a cubic /
 *   expanded polynomial. Clusters:
 *     (1) (x+a)(x+b)(x+c) all positive;
 *     (2) products containing negatives, e.g. (x-1)(x+2)(x-3);
 *     (3) perfect cubes (x+a)^3 and (x-a)^3 — shown via the full binomial ladder;
 *     (4) a repeated factor, e.g. (x+2)^2(x-1);
 *     (5) leading coefficients, e.g. (2x+1)(x-3)(x+2).
 *   Method throughout: expand the FIRST pair of binomials to a quadratic (FOIL),
 *   then multiply that quadratic by the remaining binomial, distributing every
 *   term and collecting like terms carefully by degree (x^3, x^2, x, constant).
 *
 * Difficulty split (30 total):
 *   - Foundation: ga07-001 .. ga07-004  (4)   — cleanest 3-binomial expansions
 *   - Standard:   ga07-005 .. ga07-018  (14)
 *   - Challenge:  ga07-019 .. ga07-030  (12)
 * Id range: ga07-001 .. ga07-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga07-001",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+1)(x+2)(x+3)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding binomials", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the first pair of brackets to expand.",
          workingLatex: "(x+1)(x+2)(x+3) = \\big[(x+1)(x+2)\\big](x+3)",
          explanation:
            "Three brackets cannot all be multiplied at once. The plan is to expand the first two into a quadratic, then multiply that quadratic by the third bracket. Taking the left-hand pair first is just a convenient choice.",
        },
        {
          stepNumber: 2,
          description: "Apply FOIL to the first pair.",
          workingLatex:
            "(x+1)(x+2) = x\\cdot x + x\\cdot 2 + 1\\cdot x + 1\\cdot 2",
          explanation:
            "FOIL multiplies First (x\\cdot x), Outer (x\\cdot 2), Inner (1\\cdot x) and Last (1\\cdot 2). Writing the four products out before simplifying means none gets skipped.",
        },
        {
          stepNumber: 3,
          description: "Simplify the first pair to a quadratic.",
          workingLatex: "= x^2 + 2x + x + 2 = x^2 + 3x + 2",
          explanation:
            "The two middle terms 2x and x are like terms and combine to 3x. This leaves the quadratic x^2 + 3x + 2.",
        },
        {
          stepNumber: 4,
          description: "Distribute each quadratic term over (x+3).",
          workingLatex:
            "(x^2 + 3x + 2)(x+3) = x^2(x+3) + 3x(x+3) + 2(x+3)",
          explanation:
            "Each term of the quadratic must multiply the whole bracket (x+3). Splitting it into three smaller products keeps every partial product visible so none is lost.",
        },
        {
          stepNumber: 5,
          description: "Work out each partial product.",
          workingLatex:
            "x^2(x+3) = x^3 + 3x^2,\\quad 3x(x+3) = 3x^2 + 9x,\\quad 2(x+3) = 2x + 6",
          explanation:
            "Multiply term by term, adding the indices when the bases match (x^2\\cdot x = x^3).",
        },
        {
          stepNumber: 6,
          description: "Group the partial products by degree.",
          workingLatex:
            "x^3 + (3x^2 + 3x^2) + (9x + 2x) + 6",
          explanation:
            "Sort every term into its degree column: cubic, quadratic, linear, constant. Bracketing the like terms before adding them is the surest way to avoid losing one.",
        },
        {
          stepNumber: 7,
          description: "Combine like terms for the final cubic.",
          workingLatex:
            "x^3 + 6x^2 + 11x + 6",
          explanation:
            "3x^2+3x^2 = 6x^2 and 9x+2x = 11x. Check at x=1: the product (2)(3)(4)=24 and x^3+6x^2+11x+6 = 1+6+11+6 = 24, so the expansion is consistent.",
        },
      ],
      finalAnswer: "\\(x^3 + 6x^2 + 11x + 6\\)",
      canonicalAnswer: "x^3+6x^2+11x+6",
    },
  },
  {
    id: "ga07-002",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+1)(x+1)(x+4)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding binomials", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the first pair to expand.",
          workingLatex: "(x+1)(x+1)(x+4) = \\big[(x+1)(x+1)\\big](x+4)",
          explanation:
            "The two identical brackets form a perfect square, which is the easiest pair to expand first, leaving (x+4) for the second stage.",
        },
        {
          stepNumber: 2,
          description: "Apply FOIL to the first pair.",
          workingLatex:
            "(x+1)(x+1) = x\\cdot x + x\\cdot 1 + 1\\cdot x + 1\\cdot 1",
          explanation:
            "Even though the brackets are identical, FOIL still has four products. Writing them all out guards against treating (x+1)(x+1) as just x^2+1, a very common slip.",
        },
        {
          stepNumber: 3,
          description: "Simplify the first pair to a quadratic.",
          workingLatex: "= x^2 + x + x + 1 = x^2 + 2x + 1",
          explanation:
            "The two middle terms x and x combine to 2x, giving the perfect-square quadratic x^2 + 2x + 1.",
        },
        {
          stepNumber: 4,
          description: "Distribute each quadratic term over (x+4).",
          workingLatex:
            "(x^2 + 2x + 1)(x+4) = x^2(x+4) + 2x(x+4) + 1(x+4)",
          explanation:
            "Every term of x^2+2x+1 multiplies the complete bracket (x+4). Three grouped products keep the work organised.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x+4) = x^3 + 4x^2,\\quad 2x(x+4) = 2x^2 + 8x,\\quad 1(x+4) = x + 4",
          explanation: "Multiply term by term, adding indices for like bases.",
        },
        {
          stepNumber: 6,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (4x^2 + 2x^2) + (8x + x) + 4",
          explanation:
            "Collect each power into its own bracket before adding: one cubic, two quadratic terms, two linear terms and the constant.",
        },
        {
          stepNumber: 7,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 + 6x^2 + 9x + 4",
          explanation:
            "4x^2+2x^2 = 6x^2 and 8x+x = 9x. Check at x=1: (2)(2)(5)=20 and 1+6+9+4 = 20.",
        },
      ],
      finalAnswer: "\\(x^3 + 6x^2 + 9x + 4\\)",
      canonicalAnswer: "x^3+6x^2+9x+4",
    },
  },
  {
    id: "ga07-003",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+2)(x+3)(x+5)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding binomials", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the first pair to expand.",
          workingLatex: "(x+2)(x+3)(x+5) = \\big[(x+2)(x+3)\\big](x+5)",
          explanation:
            "Expand the left-hand pair into a quadratic first, then multiply by the remaining bracket (x+5).",
        },
        {
          stepNumber: 2,
          description: "Apply FOIL to the first pair.",
          workingLatex:
            "(x+2)(x+3) = x\\cdot x + x\\cdot 3 + 2\\cdot x + 2\\cdot 3",
          explanation:
            "First x^2, Outer 3x, Inner 2x, Last 2\\cdot 3. Listing the four products keeps every contribution accounted for.",
        },
        {
          stepNumber: 3,
          description: "Simplify the first pair to a quadratic.",
          workingLatex: "= x^2 + 3x + 2x + 6 = x^2 + 5x + 6",
          explanation:
            "Outer 3x and Inner 2x combine to 5x; the constant is 2\\cdot 3 = 6.",
        },
        {
          stepNumber: 4,
          description: "Distribute each quadratic term over (x+5).",
          workingLatex:
            "(x^2 + 5x + 6)(x+5) = x^2(x+5) + 5x(x+5) + 6(x+5)",
          explanation:
            "Three partial products keep the bookkeeping clear; each term of the quadratic multiplies the whole bracket.",
        },
        {
          stepNumber: 5,
          description: "Evaluate each partial product.",
          workingLatex:
            "x^2(x+5) = x^3 + 5x^2,\\quad 5x(x+5) = 5x^2 + 25x,\\quad 6(x+5) = 6x + 30",
          explanation: "Add indices when bases match, e.g. x^2\\cdot x = x^3.",
        },
        {
          stepNumber: 6,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (5x^2 + 5x^2) + (25x + 6x) + 30",
          explanation:
            "Sort the six terms into degree columns before adding: one cubic, two quadratic, two linear, one constant.",
        },
        {
          stepNumber: 7,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 + 10x^2 + 31x + 30",
          explanation:
            "5x^2+5x^2 = 10x^2 and 25x+6x = 31x. Check at x=1: (3)(4)(6)=72 and 1+10+31+30 = 72.",
        },
      ],
      finalAnswer: "\\(x^3 + 10x^2 + 31x + 30\\)",
      canonicalAnswer: "x^3+10x^2+31x+30",
    },
  },
  {
    id: "ga07-004",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand and simplify \\(x(x+1)(x+2)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding binomials", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the two true binomials first.",
          workingLatex:
            "(x+1)(x+2) = x\\cdot x + x\\cdot 2 + 1\\cdot x + 1\\cdot 2",
          explanation:
            "It is easiest to multiply the two genuine binomials together first, then deal with the single factor x. Writing out all four FOIL products keeps the step transparent.",
        },
        {
          stepNumber: 2,
          description: "Simplify the pair to a quadratic.",
          workingLatex: "= x^2 + 2x + x + 2 = x^2 + 3x + 2",
          explanation:
            "Outer 2x and Inner x combine to 3x, giving x^2 + 3x + 2.",
        },
        {
          stepNumber: 3,
          description: "Distribute the leading factor x over the quadratic.",
          workingLatex:
            "x(x^2 + 3x + 2) = x\\cdot x^2 + x\\cdot 3x + x\\cdot 2",
          explanation:
            "The single factor x multiplies each of the three terms in turn. Multiplying by x raises every power by one.",
        },
        {
          stepNumber: 4,
          description: "Simplify each product.",
          workingLatex: "x\\cdot x^2 + x\\cdot 3x + x\\cdot 2 = x^3 + 3x^2 + 2x",
          explanation:
            "x\\cdot x^2 = x^3, x\\cdot 3x = 3x^2 and x\\cdot 2 = 2x. Each term has a different degree, so there are no like terms to merge.",
        },
        {
          stepNumber: 5,
          description: "State the final cubic.",
          workingLatex: "x^3 + 3x^2 + 2x",
          explanation:
            "Notice the whole expression has x as a common factor, which is expected since x was a factor of the original product. Check at x=2: (2)(3)(4)=24 and 8+12+4 = 24.",
        },
      ],
      finalAnswer: "\\(x^3 + 3x^2 + 2x\\)",
      canonicalAnswer: "x^3+3x^2+2x",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga07-005",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-1)(x+2)(x-3)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "cubic expansion", "negative terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply FOIL to the first pair, tracking signs.",
          workingLatex:
            "(x-1)(x+2) = x\\cdot x + x\\cdot 2 + (-1)\\cdot x + (-1)\\cdot 2 = x^2 + 2x - x - 2",
          explanation:
            "Treat the -1 as a signed number throughout: (-1)\\cdot x = -x and (-1)\\cdot 2 = -2. Writing the sign explicitly in brackets stops it being dropped.",
        },
        {
          stepNumber: 2,
          description: "Simplify the quadratic.",
          workingLatex: "x^2 + 2x - x - 2 = x^2 + x - 2",
          explanation: "2x - x = x, giving the quadratic x^2 + x - 2.",
        },
        {
          stepNumber: 3,
          description: "Distribute each term over (x-3).",
          workingLatex:
            "(x^2 + x - 2)(x-3) = x^2(x-3) + x(x-3) - 2(x-3)",
          explanation:
            "Carry the sign of each term into its product; the last term carries a minus sign into -2(x-3).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x-3) = x^3 - 3x^2,\\quad x(x-3) = x^2 - 3x,\\quad -2(x-3) = -2x + 6",
          explanation:
            "Note -2\\cdot(-3) = +6: a negative times a negative gives a positive constant. This sign flip is the easiest place to go wrong.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (-3x^2 + x^2) + (-3x - 2x) + 6",
          explanation:
            "Collect every term into its degree column, keeping its sign attached. Bracketing the like terms before adding makes the signs easy to check.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 - 2x^2 - 5x + 6",
          explanation:
            "-3x^2+x^2 = -2x^2 and -3x-2x = -5x. Check at x=1: (0)(3)(-2)=0 and 1-2-5+6 = 0, confirming the signs are right.",
        },
      ],
      finalAnswer: "\\(x^3 - 2x^2 - 5x + 6\\)",
      canonicalAnswer: "x^3-2x^2-5x+6",
    },
  },
  {
    id: "ga07-006",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-2)(x-3)(x+1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "cubic expansion", "negative terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply FOIL to the first pair, both negative.",
          workingLatex:
            "(x-2)(x-3) = x\\cdot x + x\\cdot(-3) + (-2)\\cdot x + (-2)\\cdot(-3) = x^2 - 3x - 2x + 6",
          explanation:
            "The Last product (-2)\\cdot(-3) = +6 is positive because two negatives multiply to a positive. Forgetting this and writing -6 is a classic error.",
        },
        {
          stepNumber: 2,
          description: "Simplify the quadratic.",
          workingLatex: "x^2 - 3x - 2x + 6 = x^2 - 5x + 6",
          explanation: "-3x - 2x = -5x, so the quadratic is x^2 - 5x + 6.",
        },
        {
          stepNumber: 3,
          description: "Distribute each term over (x+1).",
          workingLatex:
            "(x^2 - 5x + 6)(x+1) = x^2(x+1) - 5x(x+1) + 6(x+1)",
          explanation: "Each term keeps its sign as it multiplies (x+1); the middle term carries a minus.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x+1) = x^3 + x^2,\\quad -5x(x+1) = -5x^2 - 5x,\\quad 6(x+1) = 6x + 6",
          explanation: "The middle product is negative throughout because of the -5x multiplier.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (x^2 - 5x^2) + (-5x + 6x) + 6",
          explanation:
            "Sort into degree columns: one cubic, the x^2 terms, the x terms, and the constant.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 - 4x^2 + x + 6",
          explanation:
            "x^2-5x^2 = -4x^2 and -5x+6x = x. Check at x=1: (-1)(-2)(2)=4 and 1-4+1+6 = 4.",
        },
      ],
      finalAnswer: "\\(x^3 - 4x^2 + x + 6\\)",
      canonicalAnswer: "x^3-4x^2+x+6",
    },
  },
  {
    id: "ga07-007",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+2)^3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "perfect cube", "binomial expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the cube as three identical brackets.",
          workingLatex: "(x+2)^3 = (x+2)(x+2)(x+2)",
          explanation:
            "A cube means three copies multiplied together. A common slip is to write (x+2)^3 = x^3 + 8; the cube of a sum is not the sum of cubes, so the brackets must be expanded fully.",
        },
        {
          stepNumber: 2,
          description: "Apply FOIL to the first pair (a perfect square).",
          workingLatex:
            "(x+2)(x+2) = x^2 + 2x + 2x + 4 = x^2 + 4x + 4",
          explanation: "The two middle terms 2x and 2x combine to 4x; the constant is 2\\cdot 2 = 4.",
        },
        {
          stepNumber: 3,
          description: "Distribute the square over the third (x+2).",
          workingLatex:
            "(x^2 + 4x + 4)(x+2) = x^2(x+2) + 4x(x+2) + 4(x+2)",
          explanation: "Each term of the square multiplies the remaining bracket in full.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x+2) = x^3 + 2x^2,\\quad 4x(x+2) = 4x^2 + 8x,\\quad 4(x+2) = 4x + 8",
          explanation: "Multiply term by term, adding indices when bases match.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (2x^2 + 4x^2) + (8x + 4x) + 8",
          explanation: "Collect each power into its column before adding.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 + 6x^2 + 12x + 8",
          explanation:
            "This matches the binomial pattern (x+a)^3 = x^3 + 3ax^2 + 3a^2x + a^3 with a=2: 3a=6, 3a^2=12, a^3=8. Check at x=1: 3^3=27 and 1+6+12+8 = 27.",
        },
      ],
      finalAnswer: "\\(x^3 + 6x^2 + 12x + 8\\)",
      canonicalAnswer: "x^3+6x^2+12x+8",
    },
  },
  {
    id: "ga07-008",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-1)^3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "perfect cube", "binomial expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the cube as three identical brackets.",
          workingLatex: "(x-1)^3 = (x-1)(x-1)(x-1)",
          explanation:
            "Three copies of (x-1) multiplied together. Expand the first pair, then multiply by the third bracket. Do not shortcut this to x^3 - 1.",
        },
        {
          stepNumber: 2,
          description: "Apply FOIL to the first pair (a perfect square).",
          workingLatex:
            "(x-1)(x-1) = x^2 - x - x + 1 = x^2 - 2x + 1",
          explanation:
            "Both Outer and Inner products are -x, giving -2x; the Last is (-1)(-1)=+1.",
        },
        {
          stepNumber: 3,
          description: "Distribute the square over (x-1).",
          workingLatex:
            "(x^2 - 2x + 1)(x-1) = x^2(x-1) - 2x(x-1) + 1(x-1)",
          explanation: "Carry each sign into its bracket product; the middle term keeps its minus.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the partial products carefully.",
          workingLatex:
            "x^2(x-1) = x^3 - x^2,\\quad -2x(x-1) = -2x^2 + 2x,\\quad 1(x-1) = x - 1",
          explanation:
            "Note -2x\\cdot(-1) = +2x: the double negative flips the sign to positive. Missing this turns the answer wrong.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (-x^2 - 2x^2) + (2x + x) - 1",
          explanation: "Collect cubic, quadratic, linear and constant terms, keeping each sign attached.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 - 3x^2 + 3x - 1",
          explanation:
            "Matches (x-a)^3 = x^3 - 3ax^2 + 3a^2x - a^3 with a=1 (signs alternate). Check at x=2: 1^3=1 and 8-12+6-1 = 1.",
        },
      ],
      finalAnswer: "\\(x^3 - 3x^2 + 3x - 1\\)",
      canonicalAnswer: "x^3-3x^2+3x-1",
    },
  },
  {
    id: "ga07-009",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+2)^2(x-1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "repeated factor", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square the repeated factor first.",
          workingLatex:
            "(x+2)^2 = (x+2)(x+2) = x^2 + 2x + 2x + 4 = x^2 + 4x + 4",
          explanation:
            "Deal with the squared bracket before bringing in the (x-1). The two middle 2x terms combine to 4x.",
        },
        {
          stepNumber: 2,
          description: "Distribute the square over (x-1).",
          workingLatex:
            "(x^2 + 4x + 4)(x-1) = x^2(x-1) + 4x(x-1) + 4(x-1)",
          explanation: "Each term multiplies the whole bracket (x-1).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x-1) = x^3 - x^2,\\quad 4x(x-1) = 4x^2 - 4x,\\quad 4(x-1) = 4x - 4",
          explanation: "Watch the negative inside each bracket — every product picks up a minus term.",
        },
        {
          stepNumber: 4,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (-x^2 + 4x^2) + (-4x + 4x) + (-4)",
          explanation:
            "Collect each power. Notice the x terms -4x and +4x are about to cancel — a sign of a missing-term answer.",
        },
        {
          stepNumber: 5,
          description: "Combine like terms and drop the zero term.",
          workingLatex: "x^3 + 3x^2 - 4",
          explanation:
            "-x^2+4x^2 = 3x^2, and -4x+4x = 0 so there is no x term. Check at x=1: (3)^2(0)=0 and 1+3-4 = 0.",
        },
      ],
      finalAnswer: "\\(x^3 + 3x^2 - 4\\)",
      canonicalAnswer: "x^3+3x^2-4",
    },
  },
  {
    id: "ga07-010",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-3)^2(x+2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "repeated factor", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square the repeated factor.",
          workingLatex:
            "(x-3)^2 = (x-3)(x-3) = x^2 - 3x - 3x + 9 = x^2 - 6x + 9",
          explanation:
            "Two middle terms of -3x give -6x; the Last is (-3)(-3)=+9, positive because two negatives multiply.",
        },
        {
          stepNumber: 2,
          description: "Distribute the square over (x+2).",
          workingLatex:
            "(x^2 - 6x + 9)(x+2) = x^2(x+2) - 6x(x+2) + 9(x+2)",
          explanation: "Carry each sign through; the middle term keeps its minus.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x+2) = x^3 + 2x^2,\\quad -6x(x+2) = -6x^2 - 12x,\\quad 9(x+2) = 9x + 18",
          explanation: "The middle product is negative throughout because of the -6x multiplier.",
        },
        {
          stepNumber: 4,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (2x^2 - 6x^2) + (-12x + 9x) + 18",
          explanation: "Collect each power into its column, keeping the signs attached.",
        },
        {
          stepNumber: 5,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 - 4x^2 - 3x + 18",
          explanation:
            "2x^2-6x^2 = -4x^2 and -12x+9x = -3x. Check at x=0: (9)(2)=18 and the constant is 18.",
        },
      ],
      finalAnswer: "\\(x^3 - 4x^2 - 3x + 18\\)",
      canonicalAnswer: "x^3-4x^2-3x+18",
    },
  },
  {
    id: "ga07-011",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x+1)(x-3)(x+2)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "leading coefficient", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the two plain binomials first.",
          workingLatex:
            "(x-3)(x+2) = x^2 + 2x - 3x - 6 = x^2 - x - 6",
          explanation:
            "Multiplying the two coefficient-1 brackets first keeps the harder (2x+1) step until last, when the quadratic is already tidy. Outer 2x and Inner -3x give -x.",
        },
        {
          stepNumber: 2,
          description: "Distribute (2x+1) over the quadratic.",
          workingLatex:
            "(2x+1)(x^2 - x - 6) = 2x(x^2 - x - 6) + 1(x^2 - x - 6)",
          explanation:
            "Both terms of (2x+1) must multiply every term of the quadratic. Splitting into the 2x piece and the 1 piece keeps them separate.",
        },
        {
          stepNumber: 3,
          description: "Expand the 2x piece.",
          workingLatex: "2x(x^2 - x - 6) = 2x^3 - 2x^2 - 12x",
          explanation: "Multiply 2x by each term, doubling the coefficient and raising each power by one.",
        },
        {
          stepNumber: 4,
          description: "Expand the 1 piece.",
          workingLatex: "1(x^2 - x - 6) = x^2 - x - 6",
          explanation: "Multiplying by 1 leaves the quadratic unchanged.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "2x^3 + (-2x^2 + x^2) + (-12x - x) - 6",
          explanation:
            "Collect the two pieces into degree columns: the cubic stands alone, then the x^2, x and constant terms pair up.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "2x^3 - x^2 - 13x - 6",
          explanation:
            "-2x^2+x^2 = -x^2 and -12x-x = -13x. Check at x=1: (3)(-2)(3)=-18 and 2-1-13-6 = -18.",
        },
      ],
      finalAnswer: "\\(2x^3 - x^2 - 13x - 6\\)",
      canonicalAnswer: "2x^3-x^2-13x-6",
    },
  },
  {
    id: "ga07-012",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((3x-1)(x+2)(x+1)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "leading coefficient", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the two plain binomials first.",
          workingLatex:
            "(x+2)(x+1) = x^2 + x + 2x + 2 = x^2 + 3x + 2",
          explanation:
            "Take the two coefficient-1 brackets first so the (3x-1) multiplies a tidy quadratic. Outer x and Inner 2x combine to 3x.",
        },
        {
          stepNumber: 2,
          description: "Distribute (3x-1) over the quadratic.",
          workingLatex:
            "(3x-1)(x^2 + 3x + 2) = 3x(x^2 + 3x + 2) - 1(x^2 + 3x + 2)",
          explanation: "The -1 carries a minus sign onto every term of the quadratic in the second piece.",
        },
        {
          stepNumber: 3,
          description: "Expand the 3x piece.",
          workingLatex: "3x(x^2 + 3x + 2) = 3x^3 + 9x^2 + 6x",
          explanation: "Multiply 3x across each term, tripling the coefficient and raising each power.",
        },
        {
          stepNumber: 4,
          description: "Expand the -1 piece.",
          workingLatex: "-1(x^2 + 3x + 2) = -x^2 - 3x - 2",
          explanation: "Negating the quadratic flips every sign. Forgetting to negate the last term is a common slip.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "3x^3 + (9x^2 - x^2) + (6x - 3x) - 2",
          explanation: "Collect the cubic, then the x^2, x and constant terms from the two pieces.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "3x^3 + 8x^2 + 3x - 2",
          explanation:
            "9x^2-x^2 = 8x^2 and 6x-3x = 3x. Check at x=1: (2)(3)(2)=12 and 3+8+3-2 = 12.",
        },
      ],
      finalAnswer: "\\(3x^3 + 8x^2 + 3x - 2\\)",
      canonicalAnswer: "3x^3+8x^2+3x-2",
    },
  },
  {
    id: "ga07-013",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-4)(x+4)(x-2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "difference of two squares", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the difference of two squares in the first pair.",
          workingLatex:
            "(x-4)(x+4) = x^2 + 4x - 4x - 16 = x^2 - 16",
          explanation:
            "The Outer and Inner terms +4x and -4x cancel, leaving x^2 - 16 (difference of two squares). Recognising this saves carrying a middle term through the next stage.",
        },
        {
          stepNumber: 2,
          description: "Distribute the quadratic over (x-2).",
          workingLatex:
            "(x^2 - 16)(x-2) = x^2(x-2) - 16(x-2)",
          explanation:
            "There is no x term in x^2-16, so only two partial products are needed.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x-2) = x^3 - 2x^2,\\quad -16(x-2) = -16x + 32",
          explanation: "Note -16\\cdot(-2) = +32: a negative times a negative gives a positive constant.",
        },
        {
          stepNumber: 4,
          description: "Combine into the final cubic.",
          workingLatex: "x^3 - 2x^2 - 16x + 32",
          explanation:
            "Each power appears once, so there are no like terms to merge. Check at x=2: (-2)(6)(0)=0 and 8-8-32+32 = 0.",
        },
      ],
      finalAnswer: "\\(x^3 - 2x^2 - 16x + 32\\)",
      canonicalAnswer: "x^3-2x^2-16x+32",
    },
  },
  {
    id: "ga07-014",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+5)(x-1)(x+3)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "cubic expansion", "negative terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply FOIL to the first pair.",
          workingLatex:
            "(x+5)(x-1) = x^2 - x + 5x - 5 = x^2 + 4x - 5",
          explanation: "Outer -x and Inner 5x combine to +4x; the Last is 5\\cdot(-1)=-5.",
        },
        {
          stepNumber: 2,
          description: "Distribute the quadratic over (x+3).",
          workingLatex:
            "(x^2 + 4x - 5)(x+3) = x^2(x+3) + 4x(x+3) - 5(x+3)",
          explanation: "Carry each sign through; the constant term is negative, so it becomes -5(x+3).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x+3) = x^3 + 3x^2,\\quad 4x(x+3) = 4x^2 + 12x,\\quad -5(x+3) = -5x - 15",
          explanation: "Multiply each term carefully; the third product is negative throughout.",
        },
        {
          stepNumber: 4,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (3x^2 + 4x^2) + (12x - 5x) - 15",
          explanation: "Collect each power into its column before adding.",
        },
        {
          stepNumber: 5,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 + 7x^2 + 7x - 15",
          explanation:
            "3x^2+4x^2 = 7x^2 and 12x-5x = 7x. Check at x=1: (6)(0)(4)=0 and 1+7+7-15 = 0.",
        },
      ],
      finalAnswer: "\\(x^3 + 7x^2 + 7x - 15\\)",
      canonicalAnswer: "x^3+7x^2+7x-15",
    },
  },
  {
    id: "ga07-015",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+3)^3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "perfect cube", "binomial expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the cube as three identical brackets.",
          workingLatex: "(x+3)^3 = (x+3)(x+3)(x+3)",
          explanation:
            "A cube is three copies multiplied. Expand the first square, then multiply by the third bracket — never shortcut to x^3 + 27.",
        },
        {
          stepNumber: 2,
          description: "Apply FOIL to the first pair (a perfect square).",
          workingLatex:
            "(x+3)(x+3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9",
          explanation: "Two middle terms of 3x give 6x; the Last is 3\\cdot 3 = 9.",
        },
        {
          stepNumber: 3,
          description: "Distribute the square over (x+3).",
          workingLatex:
            "(x^2 + 6x + 9)(x+3) = x^2(x+3) + 6x(x+3) + 9(x+3)",
          explanation: "Each term multiplies the third bracket in full.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x+3) = x^3 + 3x^2,\\quad 6x(x+3) = 6x^2 + 18x,\\quad 9(x+3) = 9x + 27",
          explanation: "Multiply term by term, adding indices where bases match.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (3x^2 + 6x^2) + (18x + 9x) + 27",
          explanation: "Collect each power into its column before adding.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 + 9x^2 + 27x + 27",
          explanation:
            "Matches (x+a)^3 with a=3: 3a=9, 3a^2=27, a^3=27. Check at x=1: 4^3=64 and 1+9+27+27 = 64.",
        },
      ],
      finalAnswer: "\\(x^3 + 9x^2 + 27x + 27\\)",
      canonicalAnswer: "x^3+9x^2+27x+27",
    },
  },
  {
    id: "ga07-016",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-1)(x-2)(x-3)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "cubic expansion", "negative terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply FOIL to the first pair (both negative).",
          workingLatex:
            "(x-1)(x-2) = x^2 - 2x - x + 2 = x^2 - 3x + 2",
          explanation: "Outer -2x and Inner -x give -3x; the Last (-1)(-2)=+2 is positive.",
        },
        {
          stepNumber: 2,
          description: "Distribute the quadratic over (x-3).",
          workingLatex:
            "(x^2 - 3x + 2)(x-3) = x^2(x-3) - 3x(x-3) + 2(x-3)",
          explanation: "Carry signs carefully into each bracket; the middle term keeps its minus.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x-3) = x^3 - 3x^2,\\quad -3x(x-3) = -3x^2 + 9x,\\quad 2(x-3) = 2x - 6",
          explanation: "Note -3x\\cdot(-3) = +9x: the double negative flips the sign.",
        },
        {
          stepNumber: 4,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (-3x^2 - 3x^2) + (9x + 2x) - 6",
          explanation: "Collect each power, keeping every sign attached.",
        },
        {
          stepNumber: 5,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 - 6x^2 + 11x - 6",
          explanation:
            "-3x^2-3x^2 = -6x^2 and 9x+2x = 11x. Check at x=1: (0)(-1)(-2)=0 and 1-6+11-6 = 0.",
        },
      ],
      finalAnswer: "\\(x^3 - 6x^2 + 11x - 6\\)",
      canonicalAnswer: "x^3-6x^2+11x-6",
    },
  },
  {
    id: "ga07-017",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+1)^2(x+5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "repeated factor", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square the repeated factor.",
          workingLatex:
            "(x+1)^2 = (x+1)(x+1) = x^2 + x + x + 1 = x^2 + 2x + 1",
          explanation: "Standard perfect-square expansion: the two middle x terms give 2x.",
        },
        {
          stepNumber: 2,
          description: "Distribute the square over (x+5).",
          workingLatex:
            "(x^2 + 2x + 1)(x+5) = x^2(x+5) + 2x(x+5) + 1(x+5)",
          explanation: "Each term multiplies the full bracket (x+5).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x+5) = x^3 + 5x^2,\\quad 2x(x+5) = 2x^2 + 10x,\\quad 1(x+5) = x + 5",
          explanation: "Multiply term by term, adding indices where bases match.",
        },
        {
          stepNumber: 4,
          description: "Group the terms by degree.",
          workingLatex:
            "x^3 + (5x^2 + 2x^2) + (10x + x) + 5",
          explanation: "Collect each power into its column before adding.",
        },
        {
          stepNumber: 5,
          description: "Combine like terms for the final cubic.",
          workingLatex: "x^3 + 7x^2 + 11x + 5",
          explanation:
            "5x^2+2x^2 = 7x^2 and 10x+x = 11x. Check at x=1: (2)^2(6)=24 and 1+7+11+5 = 24.",
        },
      ],
      finalAnswer: "\\(x^3 + 7x^2 + 11x + 5\\)",
      canonicalAnswer: "x^3+7x^2+11x+5",
    },
  },
  {
    id: "ga07-018",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x-1)(x+1)(x-4)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "leading coefficient", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the two plain binomials first.",
          workingLatex:
            "(x+1)(x-4) = x^2 - 4x + x - 4 = x^2 - 3x - 4",
          explanation:
            "Take the coefficient-1 brackets first so (2x-1) multiplies a tidy quadratic. Outer -4x and Inner x combine to -3x; Last 1\\cdot(-4)=-4.",
        },
        {
          stepNumber: 2,
          description: "Distribute (2x-1) over the quadratic.",
          workingLatex:
            "(2x-1)(x^2 - 3x - 4) = 2x(x^2 - 3x - 4) - 1(x^2 - 3x - 4)",
          explanation: "The -1 negates the entire quadratic in the second piece.",
        },
        {
          stepNumber: 3,
          description: "Expand the 2x piece.",
          workingLatex: "2x(x^2 - 3x - 4) = 2x^3 - 6x^2 - 8x",
          explanation: "Multiply 2x across each term, doubling coefficients and raising each power.",
        },
        {
          stepNumber: 4,
          description: "Expand the -1 piece.",
          workingLatex: "-1(x^2 - 3x - 4) = -x^2 + 3x + 4",
          explanation: "Negating flips every sign: -x^2 + 3x + 4. Note the -4 becomes +4.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "2x^3 + (-6x^2 - x^2) + (-8x + 3x) + 4",
          explanation: "Collect the cubic, then the x^2, x and constant terms from the two pieces.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "2x^3 - 7x^2 - 5x + 4",
          explanation:
            "-6x^2-x^2 = -7x^2 and -8x+3x = -5x. Check at x=1: (1)(2)(-3)=-6 and 2-7-5+4 = -6.",
        },
      ],
      finalAnswer: "\\(2x^3 - 7x^2 - 5x + 4\\)",
      canonicalAnswer: "2x^3-7x^2-5x+4",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga07-019",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x+3)(3x-1)(x+2)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "leading coefficient", "cubic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply FOIL to the first pair, both with coefficients.",
          workingLatex:
            "(2x+3)(3x-1) = 2x\\cdot 3x + 2x\\cdot(-1) + 3\\cdot 3x + 3\\cdot(-1)",
          explanation:
            "FOIL with coefficients: multiply the numbers and the x's together for each of the four products. The First product gives 2\\cdot 3 = 6 as the leading coefficient.",
        },
        {
          stepNumber: 2,
          description: "Simplify the quadratic.",
          workingLatex:
            "= 6x^2 - 2x + 9x - 3 = 6x^2 + 7x - 3",
          explanation: "Combine -2x + 9x = 7x. The leading coefficient is 6.",
        },
        {
          stepNumber: 3,
          description: "Distribute the quadratic over (x+2).",
          workingLatex:
            "(6x^2 + 7x - 3)(x+2) = 6x^2(x+2) + 7x(x+2) - 3(x+2)",
          explanation: "Three grouped products, keeping the constant term negative as -3(x+2).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the partial products.",
          workingLatex:
            "6x^2(x+2) = 6x^3 + 12x^2,\\quad 7x(x+2) = 7x^2 + 14x,\\quad -3(x+2) = -3x - 6",
          explanation: "Multiply each term by both terms of the bracket; the third product is negative throughout.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "6x^3 + (12x^2 + 7x^2) + (14x - 3x) - 6",
          explanation: "Collect each power into its column before adding.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "6x^3 + 19x^2 + 11x - 6",
          explanation:
            "12x^2+7x^2 = 19x^2 and 14x-3x = 11x. Check at x=1: (5)(2)(3)=30 and 6+19+11-6 = 30.",
        },
      ],
      finalAnswer: "\\(6x^3 + 19x^2 + 11x - 6\\)",
      canonicalAnswer: "6x^3+19x^2+11x-6",
    },
  },
  {
    id: "ga07-020",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x-1)^3\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "perfect cube", "leading coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the cube as three identical brackets.",
          workingLatex: "(2x-1)^3 = (2x-1)(2x-1)(2x-1)",
          explanation: "Expand the first square, then multiply by the third bracket. The coefficient 2 will appear cubed in the leading term.",
        },
        {
          stepNumber: 2,
          description: "Square the bracket.",
          workingLatex:
            "(2x-1)(2x-1) = 4x^2 - 2x - 2x + 1 = 4x^2 - 4x + 1",
          explanation:
            "First 2x\\cdot 2x = 4x^2; the two middle products are each -2x giving -4x; Last (-1)(-1)=+1.",
        },
        {
          stepNumber: 3,
          description: "Distribute the square over (2x-1).",
          workingLatex:
            "(4x^2 - 4x + 1)(2x-1) = 4x^2(2x-1) - 4x(2x-1) + 1(2x-1)",
          explanation: "Each term multiplies the full third bracket, carrying its sign.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the partial products carefully.",
          workingLatex:
            "4x^2(2x-1) = 8x^3 - 4x^2,\\quad -4x(2x-1) = -8x^2 + 4x,\\quad 1(2x-1) = 2x - 1",
          explanation:
            "Note -4x\\cdot(-1) = +4x, a sign flip. Coefficients multiply: 4\\cdot 2 = 8 for the leading term.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "8x^3 + (-4x^2 - 8x^2) + (4x + 2x) - 1",
          explanation: "Collect each power, keeping the signs attached.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "8x^3 - 12x^2 + 6x - 1",
          explanation:
            "-4x^2-8x^2 = -12x^2 and 4x+2x = 6x. Check at x=1: 1^3=1 and 8-12+6-1 = 1.",
        },
      ],
      finalAnswer: "\\(8x^3 - 12x^2 + 6x - 1\\)",
      canonicalAnswer: "8x^3-12x^2+6x-1",
    },
  },
  {
    id: "ga07-021",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+3)^2(2x-1)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "repeated factor", "leading coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square the repeated factor.",
          workingLatex:
            "(x+3)^2 = (x+3)(x+3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9",
          explanation: "Perfect-square expansion: the two middle 3x terms give 6x; constant 9.",
        },
        {
          stepNumber: 2,
          description: "Distribute (2x-1) over the quadratic.",
          workingLatex:
            "(2x-1)(x^2 + 6x + 9) = 2x(x^2 + 6x + 9) - 1(x^2 + 6x + 9)",
          explanation: "Split into the 2x piece and the -1 piece; the -1 will negate each term of the quadratic.",
        },
        {
          stepNumber: 3,
          description: "Expand the 2x piece.",
          workingLatex: "2x(x^2 + 6x + 9) = 2x^3 + 12x^2 + 18x",
          explanation: "Multiply 2x across each term, doubling coefficients and raising each power.",
        },
        {
          stepNumber: 4,
          description: "Expand the -1 piece.",
          workingLatex: "-1(x^2 + 6x + 9) = -x^2 - 6x - 9",
          explanation: "Negating flips every sign of the quadratic.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "2x^3 + (12x^2 - x^2) + (18x - 6x) - 9",
          explanation: "Collect the cubic, then the x^2, x and constant terms from the two pieces.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "2x^3 + 11x^2 + 12x - 9",
          explanation:
            "12x^2-x^2 = 11x^2 and 18x-6x = 12x. Check at x=1: (4)^2(1)=16 and 2+11+12-9 = 16.",
        },
      ],
      finalAnswer: "\\(2x^3 + 11x^2 + 12x - 9\\)",
      canonicalAnswer: "2x^3+11x^2+12x-9",
    },
  },
  {
    id: "ga07-022",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x+1)^2(3x-2)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "repeated factor", "leading coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square the repeated factor (with a coefficient).",
          workingLatex:
            "(2x+1)^2 = (2x+1)(2x+1) = 4x^2 + 2x + 2x + 1 = 4x^2 + 4x + 1",
          explanation: "First 2x\\cdot 2x = 4x^2; the two middle 2x terms give 4x; Last 1\\cdot 1 = 1.",
        },
        {
          stepNumber: 2,
          description: "Distribute (3x-2) over the quadratic.",
          workingLatex:
            "(3x-2)(4x^2 + 4x + 1) = 3x(4x^2 + 4x + 1) - 2(4x^2 + 4x + 1)",
          explanation: "Split into the 3x piece and the -2 piece; the -2 multiplies and negates each term.",
        },
        {
          stepNumber: 3,
          description: "Expand the 3x piece.",
          workingLatex: "3x(4x^2 + 4x + 1) = 12x^3 + 12x^2 + 3x",
          explanation: "Coefficients multiply: 3\\cdot 4 = 12 leads, then 3\\cdot 4 = 12 and 3\\cdot 1 = 3.",
        },
        {
          stepNumber: 4,
          description: "Expand the -2 piece.",
          workingLatex: "-2(4x^2 + 4x + 1) = -8x^2 - 8x - 2",
          explanation: "Each term is multiplied by -2: -2\\cdot 4 = -8 twice, then -2\\cdot 1 = -2.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "12x^3 + (12x^2 - 8x^2) + (3x - 8x) - 2",
          explanation: "Collect the cubic, then the x^2, x and constant terms from the two pieces.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "12x^3 + 4x^2 - 5x - 2",
          explanation:
            "12x^2-8x^2 = 4x^2 and 3x-8x = -5x. Check at x=1: (3)^2(1)=9 and 12+4-5-2 = 9.",
        },
      ],
      finalAnswer: "\\(12x^3 + 4x^2 - 5x - 2\\)",
      canonicalAnswer: "12x^3+4x^2-5x-2",
    },
  },
  {
    id: "ga07-023",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-2)(x+3)(2x-5)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "leading coefficient", "negative terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the two plain binomials first.",
          workingLatex:
            "(x-2)(x+3) = x^2 + 3x - 2x - 6 = x^2 + x - 6",
          explanation:
            "Take the coefficient-1 brackets first so (2x-5) multiplies a tidy quadratic. Outer 3x and Inner -2x combine to +x; Last (-2)(3)=-6.",
        },
        {
          stepNumber: 2,
          description: "Distribute (2x-5) over the quadratic.",
          workingLatex:
            "(2x-5)(x^2 + x - 6) = 2x(x^2 + x - 6) - 5(x^2 + x - 6)",
          explanation: "Split into the 2x piece and the -5 piece; the -5 multiplies and negates every term.",
        },
        {
          stepNumber: 3,
          description: "Expand the 2x piece.",
          workingLatex: "2x(x^2 + x - 6) = 2x^3 + 2x^2 - 12x",
          explanation: "Multiply 2x across each term, raising each power and doubling the coefficient.",
        },
        {
          stepNumber: 4,
          description: "Expand the -5 piece.",
          workingLatex: "-5(x^2 + x - 6) = -5x^2 - 5x + 30",
          explanation: "Note -5\\cdot(-6) = +30 for the constant: a negative times a negative gives a positive.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "2x^3 + (2x^2 - 5x^2) + (-12x - 5x) + 30",
          explanation: "Collect the cubic, then the x^2, x and constant terms from the two pieces.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "2x^3 - 3x^2 - 17x + 30",
          explanation:
            "2x^2-5x^2 = -3x^2 and -12x-5x = -17x. Check at x=1: (-1)(4)(-3)=12 and 2-3-17+30 = 12.",
        },
      ],
      finalAnswer: "\\(2x^3 - 3x^2 - 17x + 30\\)",
      canonicalAnswer: "2x^3-3x^2-17x+30",
    },
  },
  {
    id: "ga07-024",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((3x-2)(2x+1)(x-3)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "leading coefficient", "negative terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply FOIL to the first pair (both with coefficients).",
          workingLatex:
            "(3x-2)(2x+1) = 3x\\cdot 2x + 3x\\cdot 1 + (-2)\\cdot 2x + (-2)\\cdot 1 = 6x^2 + 3x - 4x - 2",
          explanation: "FOIL with coefficients; keep track of every sign. First gives 3\\cdot 2 = 6 as the leading coefficient.",
        },
        {
          stepNumber: 2,
          description: "Simplify the quadratic.",
          workingLatex: "6x^2 + 3x - 4x - 2 = 6x^2 - x - 2",
          explanation: "3x - 4x = -x, giving the quadratic 6x^2 - x - 2.",
        },
        {
          stepNumber: 3,
          description: "Distribute the quadratic over (x-3).",
          workingLatex:
            "(6x^2 - x - 2)(x-3) = 6x^2(x-3) - x(x-3) - 2(x-3)",
          explanation: "Three grouped products, each carrying its sign; two of them are negative.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the partial products.",
          workingLatex:
            "6x^2(x-3) = 6x^3 - 18x^2,\\quad -x(x-3) = -x^2 + 3x,\\quad -2(x-3) = -2x + 6",
          explanation: "Note -x\\cdot(-3) = +3x and -2\\cdot(-3) = +6: both sign flips matter.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "6x^3 + (-18x^2 - x^2) + (3x - 2x) + 6",
          explanation: "Collect each power, keeping every sign attached.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final cubic.",
          workingLatex: "6x^3 - 19x^2 + x + 6",
          explanation:
            "-18x^2-x^2 = -19x^2 and 3x-2x = x. Check at x=1: (1)(3)(-2)=-6 and 6-19+1+6 = -6.",
        },
      ],
      finalAnswer: "\\(6x^3 - 19x^2 + x + 6\\)",
      canonicalAnswer: "6x^3-19x^2+x+6",
    },
  },
  {
    id: "ga07-025",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+1)(x+2)(x+3)(x+4)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "quartic expansion", "four factors"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Pair the brackets to make two quadratics.",
          workingLatex:
            "(x+1)(x+2)(x+3)(x+4) = \\big[(x+1)(x+4)\\big]\\big[(x+2)(x+3)\\big]",
          explanation:
            "Pairing the outer and inner brackets makes both quadratics share the same x and constant structure, which simplifies the final multiplication. Any pairing works, but this one is tidiest here.",
        },
        {
          stepNumber: 2,
          description: "Expand the first pair.",
          workingLatex:
            "(x+1)(x+4) = x^2 + 4x + x + 4 = x^2 + 5x + 4",
          explanation: "Outer 4x and Inner x combine to 5x; constant 1\\cdot 4 = 4.",
        },
        {
          stepNumber: 3,
          description: "Expand the second pair.",
          workingLatex:
            "(x+2)(x+3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6",
          explanation: "Both quadratics share the same x^2 + 5x part, differing only in the constant (4 versus 6).",
        },
        {
          stepNumber: 4,
          description: "Distribute the first quadratic over the second.",
          workingLatex:
            "(x^2 + 5x + 4)(x^2 + 5x + 6) = x^2(x^2+5x+6) + 5x(x^2+5x+6) + 4(x^2+5x+6)",
          explanation: "Every term of the first quadratic multiplies the whole second quadratic — nine partial products in all.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the three grouped products.",
          workingLatex:
            "x^2(\\cdots) = x^4 + 5x^3 + 6x^2,\\quad 5x(\\cdots) = 5x^3 + 25x^2 + 30x,\\quad 4(\\cdots) = 4x^2 + 20x + 24",
          explanation: "Multiply each term across all three terms of the second quadratic, adding indices where bases match.",
        },
        {
          stepNumber: 6,
          description: "Group the terms by degree.",
          workingLatex:
            "x^4 + (5x^3 + 5x^3) + (6x^2 + 25x^2 + 4x^2) + (30x + 20x) + 24",
          explanation: "Sort every term into its degree column: x^4, x^3, x^2, x and constant.",
        },
        {
          stepNumber: 7,
          description: "Combine like terms for the final quartic.",
          workingLatex: "x^4 + 10x^3 + 35x^2 + 50x + 24",
          explanation:
            "5x^3+5x^3 = 10x^3; 6x^2+25x^2+4x^2 = 35x^2; 30x+20x = 50x. Check at x=1: (2)(3)(4)(5)=120 and 1+10+35+50+24 = 120.",
        },
      ],
      finalAnswer: "\\(x^4 + 10x^3 + 35x^2 + 50x + 24\\)",
      canonicalAnswer: "x^4+10x^3+35x^2+50x+24",
    },
  },
  {
    id: "ga07-026",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-2)^2(x+2)^2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "difference of two squares", "quartic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group the squares as a single product squared.",
          workingLatex:
            "(x-2)^2(x+2)^2 = \\big[(x-2)(x+2)\\big]^2",
          explanation:
            "Since both factors are squared, the rule a^2 b^2 = (ab)^2 lets us multiply the bases first and square once. This avoids expanding two separate quadratics and multiplying them.",
        },
        {
          stepNumber: 2,
          description: "Expand the inner difference of two squares.",
          workingLatex:
            "(x-2)(x+2) = x^2 + 2x - 2x - 4 = x^2 - 4",
          explanation: "The +2x and -2x cancel, leaving x^2 - 4.",
        },
        {
          stepNumber: 3,
          description: "Square the result with FOIL.",
          workingLatex:
            "(x^2 - 4)^2 = (x^2 - 4)(x^2 - 4) = x^4 - 4x^2 - 4x^2 + 16",
          explanation: "FOIL the bracket with itself; both middle terms are -4x^2, and the Last is (-4)(-4)=+16.",
        },
        {
          stepNumber: 4,
          description: "Collect like terms for the final quartic.",
          workingLatex: "x^4 - 8x^2 + 16",
          explanation:
            "-4x^2-4x^2 = -8x^2, and there are no odd-degree terms. Check at x=1: (x-2)^2(x+2)^2 = (1)(9) = 9 and 1-8+16 = 9.",
        },
      ],
      finalAnswer: "\\(x^4 - 8x^2 + 16\\)",
      canonicalAnswer: "x^4-8x^2+16",
    },
  },
  {
    id: "ga07-027",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x+1)(2x-1)(x+3)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "difference of two squares", "leading coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first pair (difference of two squares).",
          workingLatex:
            "(2x+1)(2x-1) = 4x^2 - 2x + 2x - 1 = 4x^2 - 1",
          explanation:
            "Outer -2x and Inner +2x cancel; (2x)^2 = 4x^2 and 1\\cdot(-1)=-1, giving 4x^2 - 1. Spotting the difference of two squares avoids a middle term.",
        },
        {
          stepNumber: 2,
          description: "Distribute the quadratic over (x+3).",
          workingLatex:
            "(4x^2 - 1)(x+3) = 4x^2(x+3) - 1(x+3)",
          explanation: "Only two grouped products are needed since there is no x term in 4x^2 - 1.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial products.",
          workingLatex:
            "4x^2(x+3) = 4x^3 + 12x^2,\\quad -1(x+3) = -x - 3",
          explanation: "Distribute carefully, keeping the minus sign on the second bracket: -1(x+3) = -x - 3.",
        },
        {
          stepNumber: 4,
          description: "Combine into the final cubic.",
          workingLatex: "4x^3 + 12x^2 - x - 3",
          explanation:
            "Each power appears once, so there are no like terms to merge. Check at x=1: (3)(1)(4)=12 and 4+12-1-3 = 12.",
        },
      ],
      finalAnswer: "\\(4x^3 + 12x^2 - x - 3\\)",
      canonicalAnswer: "4x^3+12x^2-x-3",
    },
  },
  {
    id: "ga07-028",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-1)^2(x+3)^2\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "repeated factor", "quartic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square the first repeated factor.",
          workingLatex:
            "(x-1)^2 = x^2 - 2x + 1",
          explanation: "Perfect-square expansion: middle term -2x, constant +1.",
        },
        {
          stepNumber: 2,
          description: "Square the second repeated factor.",
          workingLatex:
            "(x+3)^2 = x^2 + 6x + 9",
          explanation: "Perfect-square expansion: middle term +6x, constant +9.",
        },
        {
          stepNumber: 3,
          description: "Distribute the first quadratic over the second.",
          workingLatex:
            "(x^2 - 2x + 1)(x^2 + 6x + 9) = x^2(x^2+6x+9) - 2x(x^2+6x+9) + 1(x^2+6x+9)",
          explanation: "Each term of the first quadratic multiplies the full second quadratic, carrying its sign.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the three grouped products.",
          workingLatex:
            "x^2(\\cdots) = x^4 + 6x^3 + 9x^2,\\quad -2x(\\cdots) = -2x^3 - 12x^2 - 18x,\\quad 1(\\cdots) = x^2 + 6x + 9",
          explanation: "Carry the signs of the multiplier through the middle bracket; the -2x piece is negative throughout.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "x^4 + (6x^3 - 2x^3) + (9x^2 - 12x^2 + x^2) + (-18x + 6x) + 9",
          explanation: "Sort every term into its degree column: x^4, x^3, x^2, x and constant.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms for the final quartic.",
          workingLatex: "x^4 + 4x^3 - 2x^2 - 12x + 9",
          explanation:
            "6x^3-2x^3 = 4x^3; 9x^2-12x^2+x^2 = -2x^2; -18x+6x = -12x. Check at x=1: (0)^2(4)^2=0 and 1+4-2-12+9 = 0.",
        },
      ],
      finalAnswer: "\\(x^4 + 4x^3 - 2x^2 - 12x + 9\\)",
      canonicalAnswer: "x^4+4x^3-2x^2-12x+9",
    },
  },
  {
    id: "ga07-029",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+a)(x-a)(x+b)\\), giving your answer in terms of \\(a\\) and \\(b\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "difference of two squares", "algebraic constants"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first pair as a difference of two squares.",
          workingLatex:
            "(x+a)(x-a) = x^2 - ax + ax - a^2 = x^2 - a^2",
          explanation:
            "The Outer -ax and Inner +ax cancel, leaving the difference of two squares x^2 - a^2. Treat a as a constant throughout.",
        },
        {
          stepNumber: 2,
          description: "Distribute the quadratic over (x+b).",
          workingLatex:
            "(x^2 - a^2)(x+b) = x^2(x+b) - a^2(x+b)",
          explanation: "Two grouped products: one from x^2, one from -a^2. There is no x term to carry through.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial products.",
          workingLatex:
            "x^2(x+b) = x^3 + bx^2,\\quad -a^2(x+b) = -a^2 x - a^2 b",
          explanation: "Treat a and b as constants; -a^2 multiplies both terms of (x+b).",
        },
        {
          stepNumber: 4,
          description: "Order the terms by degree in x.",
          workingLatex: "x^3 + bx^2 - a^2 x - a^2 b",
          explanation:
            "Ordered by power of x: x^3, then bx^2, then -a^2 x, then the constant -a^2 b. Check with a=1, b=1, x=1: (2)(0)(2)=0 and 1+1-1-1 = 0.",
        },
      ],
      finalAnswer: "\\(x^3 + bx^2 - a^2 x - a^2 b\\)",
      canonicalAnswer: "x^3+bx^2-a^2x-a^2b",
    },
  },
  {
    id: "ga07-030",
    topicRef: "ga07",
    topicTitle: "Expanding products of more than two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The volume of a cuboid is \\(V = (x+1)(x+2)(2x-1)\\). Expand and simplify to express \\(V\\) as a cubic in \\(x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding binomials", "leading coefficient", "volume context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the two plain binomials first.",
          workingLatex:
            "(x+1)(x+2) = x^2 + 2x + x + 2 = x^2 + 3x + 2",
          explanation:
            "Multiply the two unit-coefficient brackets together first; the (2x-1) is brought in afterwards. Outer 2x and Inner x combine to 3x.",
        },
        {
          stepNumber: 2,
          description: "Distribute (2x-1) over the quadratic.",
          workingLatex:
            "(2x-1)(x^2 + 3x + 2) = 2x(x^2 + 3x + 2) - 1(x^2 + 3x + 2)",
          explanation: "Split into the 2x piece and the -1 piece; the -1 negates each term of the quadratic.",
        },
        {
          stepNumber: 3,
          description: "Expand the 2x piece.",
          workingLatex: "2x(x^2 + 3x + 2) = 2x^3 + 6x^2 + 4x",
          explanation: "Multiply 2x across each term, raising each power and doubling the coefficient.",
        },
        {
          stepNumber: 4,
          description: "Expand the -1 piece.",
          workingLatex: "-1(x^2 + 3x + 2) = -x^2 - 3x - 2",
          explanation: "Negating flips every sign of the quadratic.",
        },
        {
          stepNumber: 5,
          description: "Group the terms by degree.",
          workingLatex:
            "2x^3 + (6x^2 - x^2) + (4x - 3x) - 2",
          explanation: "Collect the cubic, then the x^2, x and constant terms from the two pieces.",
        },
        {
          stepNumber: 6,
          description: "Combine like terms to give V.",
          workingLatex: "V = 2x^3 + 5x^2 + x - 2",
          explanation:
            "6x^2-x^2 = 5x^2 and 4x-3x = x. Check at x=1: (2)(3)(1)=6 and 2+5+1-2 = 6.",
        },
      ],
      finalAnswer: "\\(V = 2x^3 + 5x^2 + x - 2\\)",
      canonicalAnswer: "2x^3+5x^2+x-2",
    },
  },
];
