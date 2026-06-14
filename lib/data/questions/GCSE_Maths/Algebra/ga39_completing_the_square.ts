/**
 * Topic: Completing the square
 * Ref: ga39  (DfE A18)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: writing a quadratic in completed-square (vertex) form and using it.
 *   Core technique — to write x^2 + bx + c as (x + p)^2 + q, HALVE the
 *   coefficient of x to get p (so p = b/2), then SUBTRACT the square that was
 *   added back off: (x + p)^2 = x^2 + bx + p^2, so q = c - p^2. When a > 1,
 *   FACTOR the a out of the x^2 and x terms first, complete the square inside
 *   the bracket, then multiply back out: a(x + p)^2 + q. Clusters:
 *   (A) monic complete the square — find (x+p)^2 + q;
 *   (B) a > 1 — factor out the leading coefficient first, a(x+p)^2 + q;
 *   (C) turning point / vertex from the completed form — the vertex is (-p, q);
 *   (D) minimum / maximum value and the line of symmetry x = -p;
 *   (E) solve a quadratic by completing the square, giving EXACT surd roots;
 *   (F) "show that" / find p and q, and prove the completed form.
 *   Solutions stress WHY: halve the x-coefficient; subtract the square you
 *   added; the bracket is smallest (zero) when x = -p so the vertex is (-p, q);
 *   a positive a^2 coefficient opens up giving a minimum, a negative one a
 *   maximum; and an EXPAND-back check that the completed form equals the
 *   original.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga39-001 .. ga39-004  (4)   clean monic complete-the-square
 *   - Standard:   ga39-005 .. ga39-018  (14)
 *   - Challenge:  ga39-019 .. ga39-030  (12)
 * Id range: ga39-001 .. ga39-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac), \\cdot for multiplication,
 *   braced exponents like (x+3)^{2}, and \\sqrt{...} for surds, per hard
 *   project rules. answerType "exactValue" (with answerMeta.exactForm) is used
 *   for completed-square expressions and surd answers.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga39-001",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(x^2 + 6x\\) in the form \\((x + p)^2 + q\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["completing the square", "monic", "find p and q"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x to find p.",
          workingLatex: "p = \\frac{6}{2} = 3",
          explanation:
            "To complete the square you take half of the number in front of x. Here the coefficient of x is 6, and half of 6 is 3, so p = 3 and the bracket will be (x + 3).",
        },
        {
          stepNumber: 2,
          description: "Write the bracket and subtract the square that was added.",
          workingLatex: "(x + 3)^{2} - 3^{2} = (x + 3)^{2} - 9",
          explanation:
            "Expanding (x + 3)^2 gives x^2 + 6x + 9, which is 9 more than x^2 + 6x. To keep the value the same we must subtract that extra 9 (which is p^2 = 3^2). So x^2 + 6x = (x + 3)^2 - 9.",
        },
      ],
      finalAnswer: "\\((x + 3)^2 - 9\\)",
      canonicalAnswer: "(x+3)^2-9",
    },
  },
  {
    id: "ga39-002",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(x^2 + 8x + 5\\) in the form \\((x + p)^2 + q\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["completing the square", "monic", "find p and q"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x to find p.",
          workingLatex: "p = \\frac{8}{2} = 4 \\Rightarrow (x + 4)^{2}",
          explanation:
            "Half of the coefficient of x (which is 8) is 4, so the bracket is (x + 4). Note (x + 4)^2 = x^2 + 8x + 16.",
        },
        {
          stepNumber: 2,
          description: "Subtract the square added (16), then add the constant 5.",
          workingLatex: "x^2 + 8x + 5 = (x + 4)^{2} - 16 + 5",
          explanation:
            "Because (x + 4)^2 carries an extra +16, we subtract 16 to undo it, then keep the original constant +5. This leaves a value equal to the original expression.",
        },
        {
          stepNumber: 3,
          description: "Combine the constants.",
          workingLatex: "(x + 4)^{2} - 11",
          explanation:
            "Combine -16 + 5 = -11, giving the completed-square form (x + 4)^2 - 11.",
        },
      ],
      finalAnswer: "\\((x + 4)^2 - 11\\)",
      canonicalAnswer: "(x+4)^2-11",
    },
  },
  {
    id: "ga39-003",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(x^2 - 4x + 9\\) in the form \\((x + p)^2 + q\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["completing the square", "monic", "negative coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x, keeping its sign.",
          workingLatex: "p = \\frac{-4}{2} = -2 \\Rightarrow (x - 2)^{2}",
          explanation:
            "The coefficient of x is -4, and half of -4 is -2, so p = -2 and the bracket is (x - 2). The sign of the coefficient is carried into the bracket. Note (x - 2)^2 = x^2 - 4x + 4.",
        },
        {
          stepNumber: 2,
          description: "Subtract the square added (4), then add the constant 9.",
          workingLatex: "x^2 - 4x + 9 = (x - 2)^{2} - 4 + 9",
          explanation:
            "(x - 2)^2 brings an extra +4, so we subtract 4 to cancel it, then keep the +9 from the original expression.",
        },
        {
          stepNumber: 3,
          description: "Combine the constants.",
          workingLatex: "(x - 2)^{2} + 5",
          explanation:
            "Combine -4 + 9 = 5, giving (x - 2)^2 + 5.",
        },
      ],
      finalAnswer: "\\((x - 2)^2 + 5\\)",
      canonicalAnswer: "(x-2)^2+5",
    },
  },
  {
    id: "ga39-004",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(x^2 + 10x + 25\\) in the form \\((x + p)^2 + q\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["completing the square", "monic", "perfect square"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x to find p.",
          workingLatex: "p = \\frac{10}{2} = 5 \\Rightarrow (x + 5)^{2}",
          explanation:
            "Half of 10 is 5, so the bracket is (x + 5), and (x + 5)^2 = x^2 + 10x + 25.",
        },
        {
          stepNumber: 2,
          description: "Subtract the square added (25), then add the constant 25.",
          workingLatex: "(x + 5)^{2} - 25 + 25 = (x + 5)^{2} + 0",
          explanation:
            "Here the extra +25 from the bracket exactly cancels the original +25, so q = 0. The expression is a perfect square, equal to (x + 5)^2.",
        },
      ],
      finalAnswer: "\\((x + 5)^2\\)",
      canonicalAnswer: "(x+5)^2",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga39-005",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(x^2 + 12x + 20\\) in the form \\((x + p)^2 + q\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "monic", "find p and q"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x to find p.",
          workingLatex: "p = \\frac{12}{2} = 6",
          explanation:
            "Completing the square starts by halving the coefficient of x. Here it is 12, so p = 6 and the bracket is (x + 6).",
        },
        {
          stepNumber: 2,
          description: "Note what the bracket expands to.",
          workingLatex: "(x + 6)^{2} = x^2 + 12x + 36",
          explanation:
            "Expanding (x + 6)^2 reproduces the x^2 + 12x part but introduces an extra +36 (which is p^2 = 6^2). We must correct for that surplus.",
        },
        {
          stepNumber: 3,
          description: "Subtract the surplus 36 and add the original constant 20.",
          workingLatex: "x^2 + 12x + 20 = (x + 6)^{2} - 36 + 20",
          explanation:
            "Subtracting 36 removes the surplus the bracket added; the +20 is the constant from the original expression.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants and check by expanding back.",
          workingLatex: "(x + 6)^{2} - 16; \\quad (x+6)^2 - 16 = x^2 + 12x + 36 - 16 = x^2 + 12x + 20 \\checkmark",
          explanation:
            "Combine -36 + 20 = -16. Expanding (x + 6)^2 - 16 returns x^2 + 12x + 20, confirming the completed form is correct.",
        },
      ],
      finalAnswer: "\\((x + 6)^2 - 16\\)",
      canonicalAnswer: "(x+6)^2-16",
    },
  },
  {
    id: "ga39-006",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(x^2 - 6x - 1\\) in the form \\((x + p)^2 + q\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "monic", "negative coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x, keeping its sign.",
          workingLatex: "p = \\frac{-6}{2} = -3",
          explanation:
            "The coefficient of x is -6; halving gives -3, so p = -3 and the bracket is (x - 3).",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket to see the surplus.",
          workingLatex: "(x - 3)^{2} = x^2 - 6x + 9",
          explanation:
            "(x - 3)^2 reproduces x^2 - 6x but adds an extra +9, so we will subtract 9 to compensate.",
        },
        {
          stepNumber: 3,
          description: "Subtract the surplus 9 and keep the constant -1.",
          workingLatex: "x^2 - 6x - 1 = (x - 3)^{2} - 9 - 1",
          explanation:
            "Subtract the surplus 9, then carry the original constant -1.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants and check.",
          workingLatex: "(x - 3)^{2} - 10; \\quad (x-3)^2 - 10 = x^2 - 6x + 9 - 10 = x^2 - 6x - 1 \\checkmark",
          explanation:
            "Combine -9 - 1 = -10. Expanding back gives x^2 - 6x - 1, confirming the result.",
        },
      ],
      finalAnswer: "\\((x - 3)^2 - 10\\)",
      canonicalAnswer: "(x-3)^2-10",
    },
  },
  {
    id: "ga39-007",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(x^2 + 5x + 1\\) in the form \\((x + p)^2 + q\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "monic", "fractional p"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the (odd) coefficient of x, giving a fraction.",
          workingLatex: "p = \\frac{5}{2}",
          explanation:
            "The coefficient of x is 5, an odd number, so halving gives the fraction 5/2. The bracket is (x + 5/2). Don't round — keep it exact.",
        },
        {
          stepNumber: 2,
          description: "Square p to find the surplus.",
          workingLatex: "\\left(\\frac{5}{2}\\right)^{2} = \\frac{25}{4}",
          explanation:
            "(x + 5/2)^2 expands to x^2 + 5x + 25/4, so the surplus introduced is 25/4.",
        },
        {
          stepNumber: 3,
          description: "Subtract the surplus and add the constant 1.",
          workingLatex: "x^2 + 5x + 1 = \\left(x + \\frac{5}{2}\\right)^{2} - \\frac{25}{4} + 1",
          explanation:
            "Subtract 25/4 to cancel the surplus, then add the original +1.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants over a common denominator.",
          workingLatex: "-\\frac{25}{4} + 1 = -\\frac{25}{4} + \\frac{4}{4} = -\\frac{21}{4} \\Rightarrow \\left(x + \\frac{5}{2}\\right)^{2} - \\frac{21}{4}",
          explanation:
            "Write 1 as 4/4 and combine: -25/4 + 4/4 = -21/4. So the completed form is (x + 5/2)^2 - 21/4.",
        },
      ],
      finalAnswer: "\\(\\left(x + \\dfrac{5}{2}\\right)^2 - \\dfrac{21}{4}\\)",
      canonicalAnswer: "(x+5/2)^2-21/4",
    },
  },
  {
    id: "ga39-008",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(2x^2 + 8x + 3\\) in the form \\(a(x + p)^2 + q\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "leading coefficient", "factor out a"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the leading coefficient out of the x^2 and x terms only.",
          workingLatex: "2x^2 + 8x + 3 = 2(x^2 + 4x) + 3",
          explanation:
            "When a > 1 you cannot complete the square directly, so factor the 2 out of the terms containing x. The constant +3 is left outside the bracket for now.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside the bracket.",
          workingLatex: "x^2 + 4x = (x + 2)^{2} - 4",
          explanation:
            "Inside the bracket halve the coefficient of x (4 → 2) and subtract its square: (x + 2)^2 - 2^2 = (x + 2)^2 - 4.",
        },
        {
          stepNumber: 3,
          description: "Substitute back and multiply the 2 through.",
          workingLatex: "2\\big[(x + 2)^{2} - 4\\big] + 3 = 2(x + 2)^{2} - 8 + 3",
          explanation:
            "Replace the inside, then multiply the factor of 2 across BOTH terms in the square bracket: 2 × (x + 2)^2 and 2 × (-4) = -8. The outside +3 is untouched.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants and check.",
          workingLatex: "2(x + 2)^{2} - 5; \\quad 2(x+2)^2 - 5 = 2x^2 + 8x + 8 - 5 = 2x^2 + 8x + 3 \\checkmark",
          explanation:
            "Combine -8 + 3 = -5. Expanding 2(x + 2)^2 - 5 returns 2x^2 + 8x + 3, confirming the form.",
        },
      ],
      finalAnswer: "\\(2(x + 2)^2 - 5\\)",
      canonicalAnswer: "2(x+2)^2-5",
    },
  },
  {
    id: "ga39-009",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(3x^2 - 12x + 7\\) in the form \\(a(x + p)^2 + q\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "leading coefficient", "factor out a"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the 3 out of the x^2 and x terms.",
          workingLatex: "3x^2 - 12x + 7 = 3(x^2 - 4x) + 7",
          explanation:
            "Factor the leading coefficient 3 out of the terms in x: 3x^2 - 12x = 3(x^2 - 4x). The +7 stays outside.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside the bracket.",
          workingLatex: "x^2 - 4x = (x - 2)^{2} - 4",
          explanation:
            "Halve -4 to get -2, so the bracket is (x - 2); subtract its square 4: (x - 2)^2 - 4.",
        },
        {
          stepNumber: 3,
          description: "Substitute back and multiply the 3 through.",
          workingLatex: "3\\big[(x - 2)^{2} - 4\\big] + 7 = 3(x - 2)^{2} - 12 + 7",
          explanation:
            "Multiply the 3 across both terms inside the square bracket: 3 × (-4) = -12. The +7 is unchanged.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants and check.",
          workingLatex: "3(x - 2)^{2} - 5; \\quad 3(x-2)^2 - 5 = 3x^2 - 12x + 12 - 5 = 3x^2 - 12x + 7 \\checkmark",
          explanation:
            "Combine -12 + 7 = -5. Expanding back gives the original, confirming 3(x - 2)^2 - 5.",
        },
      ],
      finalAnswer: "\\(3(x - 2)^2 - 5\\)",
      canonicalAnswer: "3(x-2)^2-5",
    },
  },
  {
    id: "ga39-010",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The quadratic \\(x^2 - 8x + 11\\) is written as \\((x + p)^2 + q\\). Write down the coordinates of its turning point.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "turning point", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 - 8x + 11 = (x - 4)^{2} - 16 + 11 = (x - 4)^{2} - 5",
          explanation:
            "Halve -8 to -4, subtract its square 16, and add the constant 11: -16 + 11 = -5, giving (x - 4)^2 - 5.",
        },
        {
          stepNumber: 2,
          description: "Reason about when the square bracket is smallest.",
          workingLatex: "(x - 4)^{2} \\ge 0, \\quad \\text{least when } x - 4 = 0 \\Rightarrow x = 4",
          explanation:
            "A square is never negative, so (x - 4)^2 has its smallest value, 0, exactly when x - 4 = 0, i.e. x = 4. At that x the whole expression is least.",
        },
        {
          stepNumber: 3,
          description: "Find the minimum y-value and state the turning point.",
          workingLatex: "y_{\\min} = 0 - 5 = -5 \\Rightarrow (4,\\, -5)",
          explanation:
            "When x = 4 the bracket is 0, leaving y = -5. So the turning point (a minimum, since the x^2 coefficient is positive) is at (4, -5). In general (x + p)^2 + q has vertex (-p, q).",
        },
      ],
      finalAnswer: "\\((4,\\, -5)\\)",
      canonicalAnswer: "(4,-5)",
    },
  },
  {
    id: "ga39-011",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "By completing the square, find the coordinates of the turning point of \\(y = x^2 + 6x + 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "turning point", "vertex", "minimum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 + 6x + 1 = (x + 3)^{2} - 9 + 1 = (x + 3)^{2} - 8",
          explanation:
            "Halve 6 to 3, subtract 3^2 = 9, then add the constant 1: -9 + 1 = -8, giving (x + 3)^2 - 8.",
        },
        {
          stepNumber: 2,
          description: "Find the x-coordinate that makes the bracket zero.",
          workingLatex: "(x + 3)^{2} \\ge 0, \\quad = 0 \\text{ when } x = -3",
          explanation:
            "The square (x + 3)^2 is least (equal to 0) when x + 3 = 0, that is x = -3. This is the x-coordinate of the turning point.",
        },
        {
          stepNumber: 3,
          description: "Substitute to find the y-coordinate.",
          workingLatex: "y = 0 - 8 = -8 \\Rightarrow (-3,\\, -8)",
          explanation:
            "At x = -3 the bracket vanishes, leaving y = -8. The turning point is the minimum at (-3, -8) — matching the rule vertex = (-p, q).",
        },
      ],
      finalAnswer: "\\((-3,\\, -8)\\)",
      canonicalAnswer: "(-3,-8)",
    },
  },
  {
    id: "ga39-012",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the minimum value of \\(x^2 + 4x + 9\\) and the value of \\(x\\) at which it occurs.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "minimum value", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 + 4x + 9 = (x + 2)^{2} - 4 + 9 = (x + 2)^{2} + 5",
          explanation:
            "Halve 4 to 2, subtract 2^2 = 4, add the constant 9: -4 + 9 = 5, giving (x + 2)^2 + 5.",
        },
        {
          stepNumber: 2,
          description: "Use the fact that a square is at least 0.",
          workingLatex: "(x + 2)^{2} \\ge 0 \\Rightarrow (x + 2)^{2} + 5 \\ge 5",
          explanation:
            "Since (x + 2)^2 can never be negative, the smallest the expression can be is when that square is 0, leaving 5. So the minimum value is 5.",
        },
        {
          stepNumber: 3,
          description: "Find where the minimum occurs.",
          workingLatex: "(x + 2)^{2} = 0 \\Rightarrow x = -2",
          explanation:
            "The square is 0 only when x + 2 = 0, i.e. x = -2. So the minimum value 5 occurs at x = -2.",
        },
      ],
      finalAnswer: "\\(\\text{Minimum } 5 \\text{ at } x = -2\\)",
      canonicalAnswer: "min=5 at x=-2",
    },
  },
  {
    id: "ga39-013",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(x^2 - 10x + 30\\) in completed-square form, and hence state the equation of the line of symmetry of the curve \\(y = x^2 - 10x + 30\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "line of symmetry", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 - 10x + 30 = (x - 5)^{2} - 25 + 30 = (x - 5)^{2} + 5",
          explanation:
            "Halve -10 to -5, subtract (-5)^2 = 25, add 30: -25 + 30 = 5, giving (x - 5)^2 + 5.",
        },
        {
          stepNumber: 2,
          description: "Identify the x-coordinate of the vertex.",
          workingLatex: "\\text{vertex at } x = 5 \\;\\; (\\text{where } (x-5)^2 = 0)",
          explanation:
            "The vertex occurs where the bracket is zero, x = 5. A parabola is symmetric about a vertical line through its vertex.",
        },
        {
          stepNumber: 3,
          description: "State the line of symmetry.",
          workingLatex: "x = 5",
          explanation:
            "The line of symmetry is the vertical line through the vertex, so its equation is x = 5.",
        },
      ],
      finalAnswer: "\\((x - 5)^2 + 5,\\;\\; x = 5\\)",
      canonicalAnswer: "x=5",
    },
  },
  {
    id: "ga39-014",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "equationRoots",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(x^2 + 4x - 3 = 0\\) by completing the square, giving your answers in exact (surd) form.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "solve quadratic", "surds"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square on the left-hand side.",
          workingLatex: "x^2 + 4x - 3 = (x + 2)^{2} - 4 - 3 = (x + 2)^{2} - 7",
          explanation:
            "Halve 4 to 2, subtract 2^2 = 4, carry the -3: -4 - 3 = -7. So the equation becomes (x + 2)^2 - 7 = 0.",
        },
        {
          stepNumber: 2,
          description: "Isolate the square.",
          workingLatex: "(x + 2)^{2} = 7",
          explanation:
            "Add 7 to both sides so the squared bracket is alone — this lets us undo the square by rooting.",
        },
        {
          stepNumber: 3,
          description: "Take the square root of both sides (both signs).",
          workingLatex: "x + 2 = \\pm\\sqrt{7}",
          explanation:
            "Rooting both sides gives a plus-or-minus, because both +√7 and -√7 square to 7. Keeping both signs is essential or you lose a root.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = -2 \\pm \\sqrt{7}",
          explanation:
            "Subtract 2 from both sides. The two exact roots are x = -2 + √7 and x = -2 - √7 (≈ 0.646 and -4.646).",
        },
      ],
      finalAnswer: "\\(x = -2 + \\sqrt{7}\\) or \\(x = -2 - \\sqrt{7}\\)",
      canonicalAnswer: "x=-2+sqrt(7) or x=-2-sqrt(7)",
    },
  },
  {
    id: "ga39-015",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "equationRoots",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(x^2 - 6x + 2 = 0\\) by completing the square, giving your answers in exact form.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "solve quadratic", "surds"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 - 6x + 2 = (x - 3)^{2} - 9 + 2 = (x - 3)^{2} - 7",
          explanation:
            "Halve -6 to -3, subtract 9, carry +2: -9 + 2 = -7. The equation becomes (x - 3)^2 - 7 = 0.",
        },
        {
          stepNumber: 2,
          description: "Isolate the square.",
          workingLatex: "(x - 3)^{2} = 7",
          explanation:
            "Add 7 to both sides to leave the squared bracket on its own.",
        },
        {
          stepNumber: 3,
          description: "Square-root both sides with ±.",
          workingLatex: "x - 3 = \\pm\\sqrt{7}",
          explanation:
            "Taking the root introduces ±√7. Both signs are needed to capture the two solutions.",
        },
        {
          stepNumber: 4,
          description: "Solve for x and sanity-check.",
          workingLatex: "x = 3 \\pm \\sqrt{7}",
          explanation:
            "Add 3 to both sides. So x = 3 + √7 or x = 3 - √7 (≈ 5.646 and 0.354). Substituting either back gives 0, confirming the roots.",
        },
      ],
      finalAnswer: "\\(x = 3 + \\sqrt{7}\\) or \\(x = 3 - \\sqrt{7}\\)",
      canonicalAnswer: "x=3+sqrt(7) or x=3-sqrt(7)",
    },
  },
  {
    id: "ga39-016",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(x^2 + 3x - 4\\) in the form \\((x + p)^2 + q\\), giving \\(p\\) and \\(q\\) as fractions.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "monic", "fractional p"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x.",
          workingLatex: "p = \\frac{3}{2}",
          explanation:
            "Half of 3 is 3/2, so the bracket is (x + 3/2). Keep it as a fraction throughout.",
        },
        {
          stepNumber: 2,
          description: "Square p to find the surplus.",
          workingLatex: "\\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4}",
          explanation:
            "(x + 3/2)^2 expands to x^2 + 3x + 9/4, so the surplus is 9/4.",
        },
        {
          stepNumber: 3,
          description: "Subtract the surplus and add the constant -4.",
          workingLatex: "x^2 + 3x - 4 = \\left(x + \\frac{3}{2}\\right)^{2} - \\frac{9}{4} - 4",
          explanation:
            "Subtract 9/4 to cancel the surplus, then carry the original constant -4.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants over a common denominator.",
          workingLatex: "-\\frac{9}{4} - 4 = -\\frac{9}{4} - \\frac{16}{4} = -\\frac{25}{4} \\Rightarrow \\left(x + \\frac{3}{2}\\right)^{2} - \\frac{25}{4}",
          explanation:
            "Write -4 as -16/4 and combine: -9/4 - 16/4 = -25/4. So p = 3/2 and q = -25/4.",
        },
      ],
      finalAnswer: "\\(\\left(x + \\dfrac{3}{2}\\right)^2 - \\dfrac{25}{4}\\)",
      canonicalAnswer: "(x+3/2)^2-25/4",
    },
  },
  {
    id: "ga39-017",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The expression \\(5 + 4x - x^2\\) can be written as \\(q - (x + p)^2\\). Find \\(p\\) and \\(q\\), and hence the maximum value of the expression.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "negative leading coefficient", "maximum value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor -1 out of the x terms so the x^2 coefficient is positive inside.",
          workingLatex: "5 + 4x - x^2 = 5 - (x^2 - 4x)",
          explanation:
            "Taking -1 out of -x^2 + 4x gives -(x^2 - 4x). Both inner signs flip: -x^2 → -(x^2) and +4x → -(-4x). The +5 stays outside.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside the bracket.",
          workingLatex: "x^2 - 4x = (x - 2)^{2} - 4",
          explanation:
            "Halve -4 to -2, subtract 4: (x - 2)^2 - 4.",
        },
        {
          stepNumber: 3,
          description: "Substitute back and distribute the minus sign.",
          workingLatex: "5 - \\big[(x - 2)^{2} - 4\\big] = 5 - (x - 2)^{2} + 4",
          explanation:
            "The leading minus sign multiplies both inner terms: -(x - 2)^2 and -(-4) = +4.",
        },
        {
          stepNumber: 4,
          description: "Combine constants and read off the maximum.",
          workingLatex: "9 - (x - 2)^{2}; \\quad p = -2,\\; q = 9, \\quad \\text{max} = 9 \\text{ at } x = 2",
          explanation:
            "Combine 5 + 4 = 9. Since (x - 2)^2 ≥ 0, subtracting it makes the expression largest when the square is 0, i.e. x = 2, giving a maximum value of 9.",
        },
      ],
      finalAnswer: "\\(9 - (x - 2)^2,\\;\\; \\text{max} = 9\\)",
      canonicalAnswer: "9-(x-2)^2",
    },
  },
  {
    id: "ga39-018",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "By completing the square, find the coordinates of the turning point of \\(y = x^2 - 7x + 10\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "turning point", "fractional vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x.",
          workingLatex: "p = \\frac{-7}{2} = -\\frac{7}{2}",
          explanation:
            "Half of -7 is -7/2, so the bracket is (x - 7/2). The vertex x-coordinate will be 7/2.",
        },
        {
          stepNumber: 2,
          description: "Square p and complete the square.",
          workingLatex: "\\left(\\frac{7}{2}\\right)^{2} = \\frac{49}{4}; \\quad x^2 - 7x + 10 = \\left(x - \\frac{7}{2}\\right)^{2} - \\frac{49}{4} + 10",
          explanation:
            "Subtract the surplus 49/4 and add the constant 10.",
        },
        {
          stepNumber: 3,
          description: "Combine the constants.",
          workingLatex: "-\\frac{49}{4} + 10 = -\\frac{49}{4} + \\frac{40}{4} = -\\frac{9}{4} \\Rightarrow \\left(x - \\frac{7}{2}\\right)^{2} - \\frac{9}{4}",
          explanation:
            "Write 10 as 40/4 and combine: -49/4 + 40/4 = -9/4.",
        },
        {
          stepNumber: 4,
          description: "Read off the turning point.",
          workingLatex: "\\text{vertex } \\left(\\frac{7}{2},\\, -\\frac{9}{4}\\right)",
          explanation:
            "The square is least (0) when x = 7/2, leaving y = -9/4. So the minimum turning point is (7/2, -9/4).",
        },
      ],
      finalAnswer: "\\(\\left(\\dfrac{7}{2},\\, -\\dfrac{9}{4}\\right)\\)",
      canonicalAnswer: "(7/2,-9/4)",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga39-019",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Write \\(2x^2 + 6x + 1\\) in the form \\(a(x + p)^2 + q\\), giving \\(p\\) and \\(q\\) as exact fractions.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "leading coefficient", "fractional p", "factor out a"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the 2 out of the x terms.",
          workingLatex: "2x^2 + 6x + 1 = 2(x^2 + 3x) + 1",
          explanation:
            "Factor the leading 2 out of 2x^2 + 6x to get 2(x^2 + 3x); the +1 stays outside.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside the bracket (odd coefficient → fraction).",
          workingLatex: "x^2 + 3x = \\left(x + \\frac{3}{2}\\right)^{2} - \\frac{9}{4}",
          explanation:
            "Halve 3 to 3/2; subtract (3/2)^2 = 9/4. So x^2 + 3x = (x + 3/2)^2 - 9/4.",
        },
        {
          stepNumber: 3,
          description: "Substitute back and multiply the 2 through.",
          workingLatex: "2\\left[\\left(x + \\frac{3}{2}\\right)^{2} - \\frac{9}{4}\\right] + 1 = 2\\left(x + \\frac{3}{2}\\right)^{2} - \\frac{9}{2} + 1",
          explanation:
            "Multiply the 2 across both inner terms: 2 × (-9/4) = -9/2. The +1 outside is untouched.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants and check by expanding.",
          workingLatex: "2\\left(x + \\frac{3}{2}\\right)^{2} - \\frac{7}{2}; \\quad 2\\left(x+\\frac{3}{2}\\right)^2 - \\frac{7}{2} = 2x^2 + 6x + \\frac{9}{2} - \\frac{7}{2} = 2x^2 + 6x + 1 \\checkmark",
          explanation:
            "Combine -9/2 + 1 = -9/2 + 2/2 = -7/2. Expanding 2(x + 3/2)^2 gives 2x^2 + 6x + 9/2, and 9/2 - 7/2 = 1, confirming the original.",
        },
      ],
      finalAnswer: "\\(2\\left(x + \\dfrac{3}{2}\\right)^2 - \\dfrac{7}{2}\\)",
      canonicalAnswer: "2(x+3/2)^2-7/2",
    },
  },
  {
    id: "ga39-020",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "equationRoots",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(2x^2 + 8x + 1 = 0\\) by completing the square, giving your answers in the form \\(a \\pm \\dfrac{\\sqrt{b}}{c}\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "leading coefficient", "solve quadratic", "surds"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor 2 out of the x terms.",
          workingLatex: "2x^2 + 8x + 1 = 2(x^2 + 4x) + 1",
          explanation:
            "Factor the leading 2 out of the x-terms so the inner expression is monic and can be completed.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside and multiply back.",
          workingLatex: "2\\big[(x + 2)^{2} - 4\\big] + 1 = 2(x + 2)^{2} - 8 + 1 = 2(x + 2)^{2} - 7",
          explanation:
            "Inside: x^2 + 4x = (x + 2)^2 - 4. Multiply by 2: 2(x + 2)^2 - 8, then add 1 to get 2(x + 2)^2 - 7.",
        },
        {
          stepNumber: 3,
          description: "Set equal to 0 and isolate the square.",
          workingLatex: "2(x + 2)^{2} - 7 = 0 \\Rightarrow (x + 2)^{2} = \\frac{7}{2}",
          explanation:
            "Add 7 then divide by 2 to leave the squared bracket alone.",
        },
        {
          stepNumber: 4,
          description: "Square-root both sides and rationalise.",
          workingLatex: "x + 2 = \\pm\\sqrt{\\frac{7}{2}} = \\pm\\frac{\\sqrt{7}}{\\sqrt{2}} = \\pm\\frac{\\sqrt{14}}{2}",
          explanation:
            "Take the ± root. √(7/2) = √7/√2; rationalise by multiplying top and bottom by √2 to get √14/2.",
        },
        {
          stepNumber: 5,
          description: "Solve for x.",
          workingLatex: "x = -2 \\pm \\frac{\\sqrt{14}}{2}",
          explanation:
            "Subtract 2. The exact roots are x = -2 + √14/2 and x = -2 - √14/2 (≈ -0.13 and -3.87).",
        },
      ],
      finalAnswer: "\\(x = -2 \\pm \\dfrac{\\sqrt{14}}{2}\\)",
      canonicalAnswer: "x=-2+sqrt(14)/2 or x=-2-sqrt(14)/2",
    },
  },
  {
    id: "ga39-021",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "By completing the square, find the coordinates of the turning point of \\(y = 2x^2 - 12x + 23\\) and state whether it is a maximum or minimum.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "leading coefficient", "turning point", "minimum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor 2 out of the x terms.",
          workingLatex: "2x^2 - 12x + 23 = 2(x^2 - 6x) + 23",
          explanation:
            "Factor the leading 2 out of the x-terms; the +23 stays outside.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside.",
          workingLatex: "x^2 - 6x = (x - 3)^{2} - 9",
          explanation:
            "Halve -6 to -3 and subtract 9: (x - 3)^2 - 9.",
        },
        {
          stepNumber: 3,
          description: "Multiply the 2 through and combine constants.",
          workingLatex: "2(x - 3)^{2} - 18 + 23 = 2(x - 3)^{2} + 5",
          explanation:
            "2 × (-9) = -18; then -18 + 23 = 5, giving 2(x - 3)^2 + 5.",
        },
        {
          stepNumber: 4,
          description: "Read off the vertex and classify it.",
          workingLatex: "(x - 3)^{2} \\ge 0,\\; a = 2 > 0 \\Rightarrow \\text{minimum at } (3,\\, 5)",
          explanation:
            "The square is smallest (0) at x = 3, leaving y = 5. As the coefficient of the square, 2, is positive, the parabola opens upward, so (3, 5) is a minimum.",
        },
      ],
      finalAnswer: "\\((3,\\, 5)\\), minimum",
      canonicalAnswer: "(3,5)",
    },
  },
  {
    id: "ga39-022",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Show that \\(x^2 + 8x + 20\\) is always positive for all real values of \\(x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "proof", "always positive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 + 8x + 20 = (x + 4)^{2} - 16 + 20 = (x + 4)^{2} + 4",
          explanation:
            "Halve 8 to 4, subtract 16, add 20: -16 + 20 = 4. So the expression equals (x + 4)^2 + 4.",
        },
        {
          stepNumber: 2,
          description: "Use the non-negativity of a square.",
          workingLatex: "(x + 4)^{2} \\ge 0 \\quad \\text{for all real } x",
          explanation:
            "Any real number squared is greater than or equal to 0, so (x + 4)^2 ≥ 0 whatever value x takes.",
        },
        {
          stepNumber: 3,
          description: "Add 4 to both sides of the inequality.",
          workingLatex: "(x + 4)^{2} + 4 \\ge 0 + 4 = 4",
          explanation:
            "Adding 4 to a quantity that is at least 0 gives a quantity that is at least 4.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "x^2 + 8x + 20 \\ge 4 > 0 \\;\\; \\text{for all real } x",
          explanation:
            "The expression is always at least 4, which is greater than 0, so x^2 + 8x + 20 is positive for every real x. (Its minimum value, 4, occurs at x = -4.)",
        },
      ],
      finalAnswer: "\\((x + 4)^2 + 4 \\ge 4 > 0\\)",
      canonicalAnswer: "(x+4)^2+4",
    },
  },
  {
    id: "ga39-023",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The curve \\(y = x^2 + bx + c\\) has its minimum point at \\((3,\\,-4)\\). By writing the equation in completed-square form, find the values of \\(b\\) and \\(c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "vertex given", "find b and c", "reverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the completed-square form from the vertex.",
          workingLatex: "\\text{vertex } (3, -4) \\Rightarrow y = (x - 3)^{2} - 4",
          explanation:
            "A quadratic with vertex (h, k) and leading coefficient 1 is y = (x - h)^2 + k. Here (h, k) = (3, -4), so y = (x - 3)^2 - 4.",
        },
        {
          stepNumber: 2,
          description: "Expand the square.",
          workingLatex: "(x - 3)^{2} - 4 = x^2 - 6x + 9 - 4",
          explanation:
            "Expand (x - 3)^2 = x^2 - 6x + 9, then bring in the -4.",
        },
        {
          stepNumber: 3,
          description: "Simplify to y = x^2 + bx + c form.",
          workingLatex: "y = x^2 - 6x + 5",
          explanation:
            "Combine 9 - 4 = 5, giving y = x^2 - 6x + 5.",
        },
        {
          stepNumber: 4,
          description: "Compare coefficients to read b and c.",
          workingLatex: "b = -6, \\quad c = 5",
          explanation:
            "Matching x^2 + bx + c against x^2 - 6x + 5 gives b = -6 and c = 5.",
        },
        {
          stepNumber: 5,
          description: "Check the vertex.",
          workingLatex: "x^2 - 6x + 5 = (x - 3)^{2} - 4 \\Rightarrow \\text{min } (3, -4) \\checkmark",
          explanation:
            "Completing the square on x^2 - 6x + 5 returns (x - 3)^2 - 4, whose minimum is at (3, -4), as required.",
        },
      ],
      finalAnswer: "\\(b = -6,\\;\\; c = 5\\)",
      canonicalAnswer: "b=-6, c=5",
    },
  },
  {
    id: "ga39-024",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "equationRoots",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(x^2 + 5x + 2 = 0\\) by completing the square, giving your answers in the form \\(\\dfrac{a \\pm \\sqrt{b}}{c}\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "solve quadratic", "surds", "fractional"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square (odd coefficient → fraction).",
          workingLatex: "x^2 + 5x + 2 = \\left(x + \\frac{5}{2}\\right)^{2} - \\frac{25}{4} + 2",
          explanation:
            "Halve 5 to 5/2, subtract (5/2)^2 = 25/4, carry the +2.",
        },
        {
          stepNumber: 2,
          description: "Combine the constants.",
          workingLatex: "-\\frac{25}{4} + 2 = -\\frac{25}{4} + \\frac{8}{4} = -\\frac{17}{4} \\Rightarrow \\left(x + \\frac{5}{2}\\right)^{2} - \\frac{17}{4} = 0",
          explanation:
            "Write 2 as 8/4: -25/4 + 8/4 = -17/4. The equation is (x + 5/2)^2 - 17/4 = 0.",
        },
        {
          stepNumber: 3,
          description: "Isolate the square.",
          workingLatex: "\\left(x + \\frac{5}{2}\\right)^{2} = \\frac{17}{4}",
          explanation:
            "Add 17/4 to both sides to leave the squared bracket alone.",
        },
        {
          stepNumber: 4,
          description: "Square-root both sides with ±.",
          workingLatex: "x + \\frac{5}{2} = \\pm\\sqrt{\\frac{17}{4}} = \\pm\\frac{\\sqrt{17}}{2}",
          explanation:
            "√(17/4) = √17/√4 = √17/2. Keep the ± to capture both roots.",
        },
        {
          stepNumber: 5,
          description: "Solve for x and combine into a single fraction.",
          workingLatex: "x = -\\frac{5}{2} \\pm \\frac{\\sqrt{17}}{2} = \\frac{-5 \\pm \\sqrt{17}}{2}",
          explanation:
            "Subtract 5/2; both terms share denominator 2, so x = (-5 ± √17)/2 (≈ -0.44 and -4.56).",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{-5 \\pm \\sqrt{17}}{2}\\)",
      canonicalAnswer: "x=(-5+sqrt(17))/2 or x=(-5-sqrt(17))/2",
    },
  },
  {
    id: "ga39-025",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the minimum value of \\(3x^2 - 18x + 40\\) and state the value of \\(x\\) at which the minimum occurs.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "leading coefficient", "minimum value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor 3 out of the x terms.",
          workingLatex: "3x^2 - 18x + 40 = 3(x^2 - 6x) + 40",
          explanation:
            "Factor the leading 3 out of the x-terms; the +40 stays outside.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside.",
          workingLatex: "x^2 - 6x = (x - 3)^{2} - 9",
          explanation:
            "Halve -6 to -3 and subtract 9.",
        },
        {
          stepNumber: 3,
          description: "Multiply the 3 through and combine constants.",
          workingLatex: "3(x - 3)^{2} - 27 + 40 = 3(x - 3)^{2} + 13",
          explanation:
            "3 × (-9) = -27, then -27 + 40 = 13, giving 3(x - 3)^2 + 13.",
        },
        {
          stepNumber: 4,
          description: "Use the non-negativity of the square to find the minimum.",
          workingLatex: "3(x - 3)^{2} \\ge 0 \\Rightarrow 3(x - 3)^{2} + 13 \\ge 13, \\quad \\text{equality at } x = 3",
          explanation:
            "Since 3(x - 3)^2 ≥ 0, the expression is at least 13, reaching 13 exactly when x = 3. So the minimum value is 13, at x = 3.",
        },
      ],
      finalAnswer: "\\(\\text{Minimum } 13 \\text{ at } x = 3\\)",
      canonicalAnswer: "min=13 at x=3",
    },
  },
  {
    id: "ga39-026",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "\\(x^2 - 14x + 40\\) can be written as \\((x + p)^2 + q\\). Use this form to find the exact values of \\(x\\) where the curve \\(y = x^2 - 14x + 40\\) crosses the \\(x\\)-axis.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "x-intercepts", "solve quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 - 14x + 40 = (x - 7)^{2} - 49 + 40 = (x - 7)^{2} - 9",
          explanation:
            "Halve -14 to -7, subtract 49, add 40: -49 + 40 = -9. So y = (x - 7)^2 - 9.",
        },
        {
          stepNumber: 2,
          description: "Set y = 0 (the curve crosses the x-axis where y = 0).",
          workingLatex: "(x - 7)^{2} - 9 = 0 \\Rightarrow (x - 7)^{2} = 9",
          explanation:
            "On the x-axis y = 0, so set the completed form to 0 and isolate the square by adding 9.",
        },
        {
          stepNumber: 3,
          description: "Square-root both sides.",
          workingLatex: "x - 7 = \\pm\\sqrt{9} = \\pm 3",
          explanation:
            "√9 = 3, with both signs. Here the surd is exact and rational, so the roots are whole numbers.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = 7 \\pm 3 \\Rightarrow x = 10 \\text{ or } x = 4",
          explanation:
            "Add 7: x = 10 or x = 4.",
        },
        {
          stepNumber: 5,
          description: "Check by substitution.",
          workingLatex: "4^2 - 14(4) + 40 = 16 - 56 + 40 = 0 \\checkmark, \\quad 10^2 - 14(10) + 40 = 100 - 140 + 40 = 0 \\checkmark",
          explanation:
            "Both x = 4 and x = 10 give 0, so the curve crosses the x-axis at (4, 0) and (10, 0).",
        },
      ],
      finalAnswer: "\\(x = 4\\) or \\(x = 10\\)",
      canonicalAnswer: "x=4 or x=10",
    },
  },
  {
    id: "ga39-027",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "By completing the square, find the coordinates of the turning point of \\(y = 5 - 6x - x^2\\) and state whether it is a maximum or a minimum.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "negative leading coefficient", "turning point", "maximum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor -1 out of the x terms.",
          workingLatex: "5 - 6x - x^2 = 5 - (x^2 + 6x)",
          explanation:
            "Taking -1 out of -x^2 - 6x gives -(x^2 + 6x). Both signs inside flip. The +5 stays outside.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside.",
          workingLatex: "x^2 + 6x = (x + 3)^{2} - 9",
          explanation:
            "Halve 6 to 3 and subtract 9.",
        },
        {
          stepNumber: 3,
          description: "Substitute back and distribute the minus sign.",
          workingLatex: "5 - \\big[(x + 3)^{2} - 9\\big] = 5 - (x + 3)^{2} + 9 = 14 - (x + 3)^{2}",
          explanation:
            "The minus sign multiplies both inner terms: -(x + 3)^2 and -(-9) = +9. Then 5 + 9 = 14.",
        },
        {
          stepNumber: 4,
          description: "Locate the vertex.",
          workingLatex: "(x + 3)^{2} \\ge 0 \\Rightarrow 14 - (x + 3)^{2} \\le 14, \\quad \\text{equality at } x = -3",
          explanation:
            "Because we subtract a square, the expression is largest (14) when the square is 0, at x = -3. So the y-coordinate of the vertex is 14.",
        },
        {
          stepNumber: 5,
          description: "Classify and state the turning point.",
          workingLatex: "\\text{coefficient of } x^2 = -1 < 0 \\Rightarrow \\text{maximum at } (-3,\\, 14)",
          explanation:
            "The x^2 coefficient is negative, so the parabola opens downward and the turning point (-3, 14) is a maximum.",
        },
      ],
      finalAnswer: "\\((-3,\\, 14)\\), maximum",
      canonicalAnswer: "(-3,14)",
    },
  },
  {
    id: "ga39-028",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Given that \\(x^2 + 12x + 50 \\equiv (x + a)^2 + b\\), find \\(a\\) and \\(b\\), and hence write down the minimum value of \\(\\dfrac{1}{x^2 + 12x + 50}\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "find a and b", "reciprocal", "maximum value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 + 12x + 50 = (x + 6)^{2} - 36 + 50 = (x + 6)^{2} + 14",
          explanation:
            "Halve 12 to 6, subtract 36, add 50: -36 + 50 = 14. So a = 6 and b = 14.",
        },
        {
          stepNumber: 2,
          description: "Find the range of the denominator.",
          workingLatex: "(x + 6)^{2} \\ge 0 \\Rightarrow (x + 6)^{2} + 14 \\ge 14",
          explanation:
            "Since the square is at least 0, the denominator x^2 + 12x + 50 is at least 14 (its minimum, at x = -6), and is always positive.",
        },
        {
          stepNumber: 3,
          description: "Relate the fraction's behaviour to the denominator.",
          workingLatex: "\\frac{1}{x^2 + 12x + 50} = \\frac{1}{(x + 6)^{2} + 14}",
          explanation:
            "The fraction is 1 over a positive quantity. A fraction with a fixed numerator is SMALLEST when its denominator is LARGEST and LARGEST when its denominator is SMALLEST.",
        },
        {
          stepNumber: 4,
          description: "Identify the maximum of the fraction.",
          workingLatex: "\\text{denominator smallest} = 14 \\Rightarrow \\text{fraction largest} = \\frac{1}{14} \\text{ at } x = -6",
          explanation:
            "The denominator is smallest (14) at x = -6, so the fraction reaches its maximum there: 1/14.",
        },
        {
          stepNumber: 5,
          description: "State the minimum of the fraction.",
          workingLatex: "(x + 6)^{2} \\to \\infty \\Rightarrow \\frac{1}{(x+6)^2 + 14} \\to 0^{+}",
          explanation:
            "As the denominator grows without bound the fraction tends to 0 but never reaches it, so the fraction has NO minimum value (its greatest LOWER bound is 0, not attained). Its maximum is 1/14 at x = -6. a = 6, b = 14.",
        },
      ],
      finalAnswer: "\\(a = 6,\\; b = 14\\); the fraction has no minimum (it tends to \\(0\\)); its maximum is \\(\\dfrac{1}{14}\\)",
      canonicalAnswer: "a=6, b=14",
    },
  },
  {
    id: "ga39-029",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "equationRoots",
    answerMeta: { exactForm: true },
    questionText:
      "Solve \\(3x^2 - 6x - 2 = 0\\) by completing the square, giving your answers in the form \\(a \\pm \\dfrac{\\sqrt{b}}{c}\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "leading coefficient", "solve quadratic", "surds"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor 3 out of the x terms.",
          workingLatex: "3x^2 - 6x - 2 = 3(x^2 - 2x) - 2",
          explanation:
            "Factor the leading 3 out of the x-terms; the -2 stays outside.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside and multiply back.",
          workingLatex: "3\\big[(x - 1)^{2} - 1\\big] - 2 = 3(x - 1)^{2} - 3 - 2 = 3(x - 1)^{2} - 5",
          explanation:
            "Inside: x^2 - 2x = (x - 1)^2 - 1. Multiply by 3: 3(x - 1)^2 - 3, then subtract 2 to get 3(x - 1)^2 - 5.",
        },
        {
          stepNumber: 3,
          description: "Set equal to 0 and isolate the square.",
          workingLatex: "3(x - 1)^{2} - 5 = 0 \\Rightarrow (x - 1)^{2} = \\frac{5}{3}",
          explanation:
            "Add 5, then divide by 3 to leave the squared bracket alone.",
        },
        {
          stepNumber: 4,
          description: "Square-root both sides and rationalise.",
          workingLatex: "x - 1 = \\pm\\sqrt{\\frac{5}{3}} = \\pm\\frac{\\sqrt{5}}{\\sqrt{3}} = \\pm\\frac{\\sqrt{15}}{3}",
          explanation:
            "√(5/3) = √5/√3; multiply top and bottom by √3 to rationalise: √15/3.",
        },
        {
          stepNumber: 5,
          description: "Solve for x.",
          workingLatex: "x = 1 \\pm \\frac{\\sqrt{15}}{3}",
          explanation:
            "Add 1. The exact roots are x = 1 + √15/3 and x = 1 - √15/3 (≈ 2.29 and -0.29).",
        },
        {
          stepNumber: 6,
          description: "Sanity-check one root numerically.",
          workingLatex: "x \\approx 2.29: \\; 3(2.29)^2 - 6(2.29) - 2 \\approx 15.73 - 13.74 - 2 \\approx 0 \\checkmark",
          explanation:
            "Substituting x ≈ 2.29 gives approximately 0, confirming the root.",
        },
      ],
      finalAnswer: "\\(x = 1 \\pm \\dfrac{\\sqrt{15}}{3}\\)",
      canonicalAnswer: "x=1+sqrt(15)/3 or x=1-sqrt(15)/3",
    },
  },
  {
    id: "ga39-030",
    topicRef: "ga39",
    topicTitle: "Completing the square",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "A ball is thrown so that its height, \\(h\\) metres, after \\(t\\) seconds is \\(h = -5t^2 + 20t + 2\\). By completing the square, find the maximum height of the ball and the time at which it is reached.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["completing the square", "negative leading coefficient", "maximum value", "modelling"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor -5 out of the t terms.",
          workingLatex: "h = -5t^2 + 20t + 2 = -5(t^2 - 4t) + 2",
          explanation:
            "Factor the leading -5 out of the t-terms: -5t^2 + 20t = -5(t^2 - 4t). Dividing 20t by -5 gives -4t, so the inside is t^2 - 4t. The +2 stays outside.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside the bracket.",
          workingLatex: "t^2 - 4t = (t - 2)^{2} - 4",
          explanation:
            "Halve -4 to -2 and subtract 4: (t - 2)^2 - 4.",
        },
        {
          stepNumber: 3,
          description: "Substitute back and multiply the -5 through.",
          workingLatex: "-5\\big[(t - 2)^{2} - 4\\big] + 2 = -5(t - 2)^{2} + 20 + 2",
          explanation:
            "Multiply -5 across both inner terms: -5 × (-4) = +20. The +2 outside is unchanged.",
        },
        {
          stepNumber: 4,
          description: "Combine constants.",
          workingLatex: "h = -5(t - 2)^{2} + 22",
          explanation:
            "Combine 20 + 2 = 22, giving h = -5(t - 2)^2 + 22.",
        },
        {
          stepNumber: 5,
          description: "Use the non-positivity of the subtracted square to find the maximum.",
          workingLatex: "-5(t - 2)^{2} \\le 0 \\Rightarrow h \\le 22, \\quad \\text{equality when } t = 2",
          explanation:
            "Since -5(t - 2)^2 is never positive (it is ≤ 0), h is at most 22, reached exactly when (t - 2)^2 = 0, i.e. t = 2.",
        },
        {
          stepNumber: 6,
          description: "State the maximum height and check.",
          workingLatex: "h_{\\max} = 22 \\text{ m at } t = 2 \\text{ s}; \\quad -5(2)^2 + 20(2) + 2 = -20 + 40 + 2 = 22 \\checkmark",
          explanation:
            "The maximum height is 22 m, reached at t = 2 seconds. Substituting t = 2 into the original gives 22, confirming the result.",
        },
      ],
      finalAnswer: "\\(\\text{Maximum height } 22 \\text{ m at } t = 2 \\text{ s}\\)",
      canonicalAnswer: "max height=22 at t=2",
    },
  },
];
