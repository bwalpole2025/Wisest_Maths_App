/**
 * Topic: Solving linear equations
 * Ref: ga36  (DfE A17)
 * Strand: Algebra — GCSE Maths (Foundation & Higher tiers)
 *
 * Coverage: solving linear equations in one unknown. The unknown appears on ONE
 *   side only — equations with the unknown on BOTH sides are the separate
 *   subtopic ga37 and are deliberately excluded here. Central idea used
 *   throughout: an equation is a balance, so we undo operations with their
 *   INVERSES (×↔÷, +↔−), doing the SAME thing to both sides at every step until
 *   the unknown is isolated. Clusters:
 *   (1) one-step equations (single inverse operation);
 *   (2) two-step equations (multiply/divide then add/subtract, in the right
 *       order — undo addition/subtraction first, then the multiplication);
 *   (3) equations with brackets (expand first, or divide through, then solve);
 *   (4) equations with fractions — single-side fractions and fractional
 *       coefficients; clear the denominator by multiplying the WHOLE equation;
 *   (5) negative coefficients (keep the sign attached; divide by the negative);
 *   (6) form-and-solve from a simple worded context (translate words → equation
 *       → solve → interpret);
 *   (7) checking the solution by substituting it back into the ORIGINAL
 *       equation.
 *   Solutions stress: state which inverse operation is being applied and why;
 *   keep the equation balanced (same operation to both sides); take care with
 *   signs when dividing by a negative; and a final CHECK by substitution where
 *   natural.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga36-001 .. ga36-004  (4)   one-step / clean two-step
 *   - Standard:   ga36-005 .. ga36-018  (14)
 *   - Challenge:  ga36-019 .. ga36-030  (12)
 * Id range: ga36-001 .. ga36-030.
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
    id: "ga36-001",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Solve \\(x + 7 = 12\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving linear equations", "one-step equation", "inverse operations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off what is happening to x.",
          workingLatex: "x + 7 = 12",
          explanation:
            "The variable x has 7 added to it, and the result is 12. To solve, we want x on its own on one side. Think of the equation as a balanced scale: whatever we do to one side, we must do to the other to keep it balanced.",
        },
        {
          stepNumber: 2,
          description: "Choose the inverse operation: subtract 7.",
          workingLatex: "x + 7 - 7 = 12 - 7",
          explanation:
            "The operation glued to x is '+7', so we undo it with its inverse, '-7'. We subtract 7 from BOTH sides at once — doing it to only one side would unbalance the equation and give a wrong answer.",
        },
        {
          stepNumber: 3,
          description: "Simplify each side.",
          workingLatex: "x = 5",
          explanation:
            "On the left, +7 - 7 cancels to zero, leaving x by itself. On the right, 12 - 7 = 5. So x = 5.",
        },
      ],
      finalAnswer: "\\(x = 5\\)",
      canonicalAnswer: "x=5",
    },
  },
  {
    id: "ga36-002",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Solve \\(5x = 35\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving linear equations", "one-step equation", "inverse operations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the operation acting on x.",
          workingLatex: "5x = 35",
          explanation:
            "The notation 5x means 5 multiplied by x. So the operation attached to x is '×5', and we need to undo it to leave x alone.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 5.",
          workingLatex: "\\frac{5x}{5} = \\frac{35}{5}",
          explanation:
            "The inverse of multiplying by 5 is dividing by 5, so we divide BOTH sides by 5 to keep the balance. Writing each side as a fraction over 5 makes the cancelling clear.",
        },
        {
          stepNumber: 3,
          description: "Simplify each side.",
          workingLatex: "x = 7",
          explanation:
            "On the left, the 5 in the numerator and the 5 in the denominator cancel, leaving x. On the right, 35 ÷ 5 = 7. So x = 7.",
        },
      ],
      finalAnswer: "\\(x = 7\\)",
      canonicalAnswer: "x=7",
    },
  },
  {
    id: "ga36-003",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Solve \\(2x + 3 = 11\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving linear equations", "two-step equation", "inverse operations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the two operations and plan the order.",
          workingLatex: "2x + 3 = 11",
          explanation:
            "Two things happen to x here: it is multiplied by 2, and then 3 is added. To unwind them we work in REVERSE order, so we deal with the '+3' first and the '×2' last — just like taking off your shoes before your socks.",
        },
        {
          stepNumber: 2,
          description: "Subtract 3 from both sides.",
          workingLatex: "2x + 3 - 3 = 11 - 3 \\quad\\Rightarrow\\quad 2x = 8",
          explanation:
            "Undo the +3 with its inverse, -3, on both sides. On the left +3 - 3 cancels; on the right 11 - 3 = 8, leaving 2x = 8.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 2.",
          workingLatex: "\\frac{2x}{2} = \\frac{8}{2} \\quad\\Rightarrow\\quad x = 4",
          explanation:
            "Now only the ×2 remains, so divide both sides by 2 to isolate x: 8 ÷ 2 = 4, giving x = 4.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga36-004",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{x}{4} = 6\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving linear equations", "one-step equation", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the operation acting on x.",
          workingLatex: "\\frac{x}{4} = 6",
          explanation:
            "The expression x/4 means x divided by 4. So the operation attached to x is '÷4', and we need its inverse to release x.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 4.",
          workingLatex: "\\frac{x}{4} \\cdot 4 = 6 \\cdot 4",
          explanation:
            "The inverse of dividing by 4 is multiplying by 4, so multiply BOTH sides by 4 to keep things balanced.",
        },
        {
          stepNumber: 3,
          description: "Simplify each side.",
          workingLatex: "x = 24",
          explanation:
            "On the left, multiplying x/4 by 4 cancels the division and leaves x. On the right, 6 × 4 = 24. So x = 24.",
        },
      ],
      finalAnswer: "\\(x = 24\\)",
      canonicalAnswer: "x=24",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga36-005",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(3x - 7 = 14\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "two-step equation", "inverse operations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Plan the order of inverse operations.",
          workingLatex: "3x - 7 = 14",
          explanation:
            "x is multiplied by 3, then 7 is subtracted. To unwind, undo the operations in reverse order: deal with the subtraction first (add 7), and the multiplication last (divide by 3).",
        },
        {
          stepNumber: 2,
          description: "Add 7 to both sides to undo the subtraction.",
          workingLatex: "3x - 7 + 7 = 14 + 7 \\quad\\Rightarrow\\quad 3x = 21",
          explanation:
            "Adding 7 to both sides keeps the balance. On the left -7 + 7 cancels; on the right 14 + 7 = 21, leaving 3x = 21.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 3.",
          workingLatex: "\\frac{3x}{3} = \\frac{21}{3} \\quad\\Rightarrow\\quad x = 7",
          explanation:
            "Only the ×3 is left, so divide both sides by 3 to isolate x: 21 ÷ 3 = 7.",
        },
        {
          stepNumber: 4,
          description: "Check by substituting back into the original equation.",
          workingLatex: "3(7) - 7 = 21 - 7 = 14 \\checkmark",
          explanation:
            "Always substitute into the ORIGINAL equation, not a rearranged line, so an earlier slip can't hide. Putting x = 7 into the left-hand side gives 14, which matches the right-hand side, confirming the solution.",
        },
      ],
      finalAnswer: "\\(x = 7\\)",
      canonicalAnswer: "x=7",
    },
  },
  {
    id: "ga36-006",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{x}{3} + 5 = 9\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "two-step equation", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two operations acting on x.",
          workingLatex: "\\frac{x}{3} + 5 = 9",
          explanation:
            "x is divided by 3, then 5 is added. Working in reverse, undo the '+5' first, then undo the division. Resist the urge to multiply by 3 first — the +5 isn't divided by 3, so multiplying first would multiply it by 3 too.",
        },
        {
          stepNumber: 2,
          description: "Subtract 5 from both sides.",
          workingLatex: "\\frac{x}{3} + 5 - 5 = 9 - 5 \\quad\\Rightarrow\\quad \\frac{x}{3} = 4",
          explanation:
            "Subtracting 5 from both sides cancels the +5 on the left and gives 9 - 5 = 4 on the right, leaving the clean fractional term x/3 = 4.",
        },
        {
          stepNumber: 3,
          description: "Multiply both sides by 3 to undo the division.",
          workingLatex: "\\frac{x}{3} \\cdot 3 = 4 \\cdot 3 \\quad\\Rightarrow\\quad x = 12",
          explanation:
            "Multiplying by 3 cancels the ÷3 on the left, and 4 × 3 = 12 on the right, so x = 12.",
        },
        {
          stepNumber: 4,
          description: "Check by substitution.",
          workingLatex: "\\frac{12}{3} + 5 = 4 + 5 = 9 \\checkmark",
          explanation:
            "Substituting x = 12 into the original: 12 ÷ 3 = 4, then 4 + 5 = 9, matching the right-hand side.",
        },
      ],
      finalAnswer: "\\(x = 12\\)",
      canonicalAnswer: "x=12",
    },
  },
  {
    id: "ga36-007",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(4(x - 3) = 20\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "brackets", "expanding"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket.",
          workingLatex: "4(x - 3) = 20 \\quad\\Rightarrow\\quad 4x - 12 = 20",
          explanation:
            "Multiply EACH term inside the bracket by the 4 outside: 4 × x = 4x and 4 × (-3) = -12. A common slip is to multiply only the first term — every term in the bracket must be multiplied.",
        },
        {
          stepNumber: 2,
          description: "Add 12 to both sides.",
          workingLatex: "4x - 12 + 12 = 20 + 12 \\quad\\Rightarrow\\quad 4x = 32",
          explanation:
            "Now it's a standard two-step equation. Undo the -12 by adding 12 to both sides: 20 + 12 = 32, leaving 4x = 32.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 4.",
          workingLatex: "\\frac{4x}{4} = \\frac{32}{4} \\quad\\Rightarrow\\quad x = 8",
          explanation:
            "Dividing by 4 isolates x: 32 ÷ 4 = 8.",
        },
        {
          stepNumber: 4,
          description: "Check by substituting into the original.",
          workingLatex: "4(8 - 3) = 4 \\cdot 5 = 20 \\checkmark",
          explanation:
            "Substitute into the original bracketed form: with x = 8 the bracket is 8 - 3 = 5, and 4 × 5 = 20, which matches.",
        },
      ],
      finalAnswer: "\\(x = 8\\)",
      canonicalAnswer: "x=8",
    },
  },
  {
    id: "ga36-008",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(2(3x + 1) = 26\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "brackets", "two-step equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot that dividing through is cleaner than expanding.",
          workingLatex: "2(3x + 1) = 26",
          explanation:
            "The whole bracket is multiplied by 2, and the right-hand side 26 is a multiple of 2. So instead of expanding, we can divide the whole equation by 2 — this removes the outside factor in one neat move.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 2.",
          workingLatex: "\\frac{2(3x + 1)}{2} = \\frac{26}{2} \\quad\\Rightarrow\\quad 3x + 1 = 13",
          explanation:
            "On the left the 2 outside the bracket cancels with the 2 underneath, leaving the bracket contents 3x + 1. On the right 26 ÷ 2 = 13.",
        },
        {
          stepNumber: 3,
          description: "Subtract 1 from both sides.",
          workingLatex: "3x + 1 - 1 = 13 - 1 \\quad\\Rightarrow\\quad 3x = 12",
          explanation:
            "Now undo the +1 by subtracting 1 from both sides: 13 - 1 = 12, leaving 3x = 12.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 3.",
          workingLatex: "\\frac{3x}{3} = \\frac{12}{3} \\quad\\Rightarrow\\quad x = 4",
          explanation:
            "Dividing by 3 gives x = 4.",
        },
        {
          stepNumber: 5,
          description: "Check by substitution.",
          workingLatex: "2(3 \\cdot 4 + 1) = 2(13) = 26 \\checkmark",
          explanation:
            "With x = 4, 3 × 4 + 1 = 13 and 2 × 13 = 26, confirming the solution.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga36-009",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(15 - 2x = 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "negative coefficient", "two-step equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the x-term is negative.",
          workingLatex: "15 - 2x = 3",
          explanation:
            "Read this as 15 + (-2x) = 3. The term containing x is -2x, and that minus sign belongs to the coefficient — it must travel with the x-term through every step.",
        },
        {
          stepNumber: 2,
          description: "Subtract 15 from both sides to isolate the x-term.",
          workingLatex: "15 - 2x - 15 = 3 - 15 \\quad\\Rightarrow\\quad -2x = -12",
          explanation:
            "Move the constant 15 away by subtracting it from both sides. On the left 15 - 15 cancels; on the right 3 - 15 = -12, leaving -2x = -12.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by -2.",
          workingLatex: "\\frac{-2x}{-2} = \\frac{-12}{-2} \\quad\\Rightarrow\\quad x = 6",
          explanation:
            "Divide by the FULL coefficient, including its sign, so we divide by -2 (not 2). A negative divided by a negative is positive: -12 ÷ -2 = 6, so x = 6.",
        },
        {
          stepNumber: 4,
          description: "Check by substituting into the original.",
          workingLatex: "15 - 2(6) = 15 - 12 = 3 \\checkmark",
          explanation:
            "With x = 6, 2 × 6 = 12 and 15 - 12 = 3, matching the right-hand side.",
        },
      ],
      finalAnswer: "\\(x = 6\\)",
      canonicalAnswer: "x=6",
    },
  },
  {
    id: "ga36-010",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(7 - 3x = 22\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "negative coefficient", "negative solution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the negative x-term.",
          workingLatex: "7 - 3x = 22",
          explanation:
            "The term in x is -3x. Keep the minus sign attached to the coefficient throughout — the coefficient is -3, not 3.",
        },
        {
          stepNumber: 2,
          description: "Subtract 7 from both sides to isolate the x-term.",
          workingLatex: "7 - 3x - 7 = 22 - 7 \\quad\\Rightarrow\\quad -3x = 15",
          explanation:
            "Move the 7 away by subtracting it from both sides. On the right, 22 - 7 = 15, leaving -3x = 15.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by -3.",
          workingLatex: "\\frac{-3x}{-3} = \\frac{15}{-3} \\quad\\Rightarrow\\quad x = -5",
          explanation:
            "Divide by the full coefficient -3. A positive divided by a negative is negative: 15 ÷ -3 = -5, so x = -5. Don't be alarmed by a negative answer — it's perfectly valid.",
        },
        {
          stepNumber: 4,
          description: "Check by substitution.",
          workingLatex: "7 - 3(-5) = 7 + 15 = 22 \\checkmark",
          explanation:
            "With x = -5, -3 × -5 = +15 (negative times negative is positive), so 7 + 15 = 22, which matches. The check is especially reassuring here because it confirms the negative solution is correct.",
        },
      ],
      finalAnswer: "\\(x = -5\\)",
      canonicalAnswer: "x=-5",
    },
  },
  {
    id: "ga36-011",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{2x}{5} = 6\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "fractional coefficient", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "See two operations on x: ×2 and ÷5.",
          workingLatex: "\\frac{2x}{5} = 6",
          explanation:
            "The expression 2x/5 means x is multiplied by 2 and divided by 5. We'll clear the denominator first (multiply by 5), then deal with the ×2.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 5 to clear the denominator.",
          workingLatex: "\\frac{2x}{5} \\cdot 5 = 6 \\cdot 5 \\quad\\Rightarrow\\quad 2x = 30",
          explanation:
            "Multiplying both sides by 5 removes the division by 5 on the left and gives 6 × 5 = 30 on the right, leaving 2x = 30.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 2.",
          workingLatex: "\\frac{2x}{2} = \\frac{30}{2} \\quad\\Rightarrow\\quad x = 15",
          explanation:
            "Now undo the ×2 by dividing both sides by 2: 30 ÷ 2 = 15.",
        },
        {
          stepNumber: 4,
          description: "Check by substitution.",
          workingLatex: "\\frac{2(15)}{5} = \\frac{30}{5} = 6 \\checkmark",
          explanation:
            "With x = 15, 2 × 15 = 30 and 30 ÷ 5 = 6, which matches.",
        },
      ],
      finalAnswer: "\\(x = 15\\)",
      canonicalAnswer: "x=15",
    },
  },
  {
    id: "ga36-012",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{x + 4}{3} = 5\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "fractions", "brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the whole numerator is divided by 3.",
          workingLatex: "\\frac{x + 4}{3} = 5",
          explanation:
            "The fraction bar acts like an invisible bracket: the ENTIRE expression x + 4 is divided by 3, not just the x. So our first move is to clear that division.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 3 to clear the fraction.",
          workingLatex: "\\frac{x + 4}{3} \\cdot 3 = 5 \\cdot 3 \\quad\\Rightarrow\\quad x + 4 = 15",
          explanation:
            "Multiplying both sides by 3 cancels the ÷3, lifting the whole numerator x + 4 onto a single line. The right becomes 5 × 3 = 15.",
        },
        {
          stepNumber: 3,
          description: "Subtract 4 from both sides.",
          workingLatex: "x + 4 - 4 = 15 - 4 \\quad\\Rightarrow\\quad x = 11",
          explanation:
            "Undo the +4 by subtracting 4 from both sides: 15 - 4 = 11, so x = 11.",
        },
        {
          stepNumber: 4,
          description: "Check by substitution.",
          workingLatex: "\\frac{11 + 4}{3} = \\frac{15}{3} = 5 \\checkmark",
          explanation:
            "With x = 11, the numerator is 11 + 4 = 15, and 15 ÷ 3 = 5, which matches.",
        },
      ],
      finalAnswer: "\\(x = 11\\)",
      canonicalAnswer: "x=11",
    },
  },
  {
    id: "ga36-013",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(5x + 8 = 2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "two-step equation", "negative solution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 8 from both sides.",
          workingLatex: "5x + 8 - 8 = 2 - 8 \\quad\\Rightarrow\\quad 5x = -6",
          explanation:
            "Undo the +8 by subtracting 8 from both sides. On the right, 2 - 8 = -6 (we cross below zero), leaving 5x = -6. Don't panic at the negative — it just means x will turn out negative.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 5.",
          workingLatex: "\\frac{5x}{5} = \\frac{-6}{5} \\quad\\Rightarrow\\quad x = -\\frac{6}{5}",
          explanation:
            "Dividing by 5 isolates x. Here -6 does not divide exactly by 5, so the answer is the fraction -6/5 (equivalently -1.2). Leave it as an exact fraction rather than rounding.",
        },
        {
          stepNumber: 3,
          description: "Check by substitution.",
          workingLatex: "5 \\cdot \\left(-\\frac{6}{5}\\right) + 8 = -6 + 8 = 2 \\checkmark",
          explanation:
            "With x = -6/5, the 5 in front cancels the 5 in the denominator to give -6, and -6 + 8 = 2, which matches. The check is worth doing whenever the answer is a fraction.",
        },
      ],
      finalAnswer: "\\(x = -\\dfrac{6}{5}\\)",
      canonicalAnswer: "x=-6/5",
    },
  },
  {
    id: "ga36-014",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(3(2x - 5) = 9\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "brackets", "expanding"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot that the right-hand side is a multiple of 3.",
          workingLatex: "3(2x - 5) = 9",
          explanation:
            "Since 9 is divisible by 3, dividing the whole equation by 3 is quicker than expanding the bracket — it strips off the outside factor immediately.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 3.",
          workingLatex: "\\frac{3(2x - 5)}{3} = \\frac{9}{3} \\quad\\Rightarrow\\quad 2x - 5 = 3",
          explanation:
            "The 3 outside the bracket cancels with the 3 underneath, leaving the bracket contents 2x - 5. On the right 9 ÷ 3 = 3.",
        },
        {
          stepNumber: 3,
          description: "Add 5 to both sides.",
          workingLatex: "2x - 5 + 5 = 3 + 5 \\quad\\Rightarrow\\quad 2x = 8",
          explanation:
            "Undo the -5 by adding 5 to both sides: 3 + 5 = 8, leaving 2x = 8.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2.",
          workingLatex: "\\frac{2x}{2} = \\frac{8}{2} \\quad\\Rightarrow\\quad x = 4",
          explanation:
            "Dividing by 2 gives x = 4.",
        },
        {
          stepNumber: 5,
          description: "Check by substitution.",
          workingLatex: "3(2 \\cdot 4 - 5) = 3(3) = 9 \\checkmark",
          explanation:
            "With x = 4, 2 × 4 - 5 = 3 and 3 × 3 = 9, confirming the solution.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga36-015",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "I think of a number, multiply it by 4 and then add 9. The result is 33. Form an equation and solve it to find the number.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "form and solve", "worded problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define the unknown with a letter.",
          workingLatex: "\\text{let the number be } x",
          explanation:
            "The first step in any 'form and solve' problem is to name the unknown. Calling the mystery number x lets us turn the sentence into algebra.",
        },
        {
          stepNumber: 2,
          description: "Translate the words into an equation.",
          workingLatex: "4x + 9 = 33",
          explanation:
            "Build the expression phrase by phrase: 'multiply it by 4' gives 4x; 'then add 9' gives 4x + 9; 'the result is 33' sets this equal to 33. Following the word order keeps the operations in the right place.",
        },
        {
          stepNumber: 3,
          description: "Subtract 9 from both sides.",
          workingLatex: "4x + 9 - 9 = 33 - 9 \\quad\\Rightarrow\\quad 4x = 24",
          explanation:
            "Undo the +9 by subtracting 9 from both sides: 33 - 9 = 24, leaving 4x = 24.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 4.",
          workingLatex: "\\frac{4x}{4} = \\frac{24}{4} \\quad\\Rightarrow\\quad x = 6",
          explanation:
            "Dividing by 4 gives x = 6, so the number thought of is 6.",
        },
        {
          stepNumber: 5,
          description: "Check against the original wording.",
          workingLatex: "4(6) + 9 = 24 + 9 = 33 \\checkmark",
          explanation:
            "Read the check back as a sentence: 6 multiplied by 4 is 24, plus 9 is 33, which matches the stated result.",
        },
      ],
      finalAnswer: "\\(x = 6\\)",
      canonicalAnswer: "x=6",
    },
  },
  {
    id: "ga36-016",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(6 = 4x - 10\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "two-step equation", "unknown on right"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Notice the unknown is on the right.",
          workingLatex: "6 = 4x - 10",
          explanation:
            "Here the x-term sits on the right-hand side, but that's completely fine — the balance method works whichever side x is on. You could swap the sides first, but it isn't necessary; we'll just isolate x where it is.",
        },
        {
          stepNumber: 2,
          description: "Add 10 to both sides to isolate the x-term.",
          workingLatex: "6 + 10 = 4x - 10 + 10 \\quad\\Rightarrow\\quad 16 = 4x",
          explanation:
            "Add 10 to both sides to undo the -10 on the right. On the left 6 + 10 = 16, leaving 16 = 4x.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 4.",
          workingLatex: "\\frac{16}{4} = \\frac{4x}{4} \\quad\\Rightarrow\\quad 4 = x",
          explanation:
            "Dividing both sides by 4 gives 4 = x, which we usually write as x = 4. The equation reads the same forwards or backwards.",
        },
        {
          stepNumber: 4,
          description: "Check by substitution.",
          workingLatex: "4(4) - 10 = 16 - 10 = 6 \\checkmark",
          explanation:
            "With x = 4, 4 × 4 - 10 = 16 - 10 = 6, matching the left-hand side.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga36-017",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{3x}{4} - 2 = 7\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "fractional coefficient", "two-step equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Plan: deal with the -2 before the fraction.",
          workingLatex: "\\frac{3x}{4} - 2 = 7",
          explanation:
            "The x-term is 3x/4 and a constant 2 has been subtracted from it. Working in reverse, undo the '-2' first, then clear the denominator, then the ×3.",
        },
        {
          stepNumber: 2,
          description: "Add 2 to both sides to isolate the fractional term.",
          workingLatex: "\\frac{3x}{4} - 2 + 2 = 7 + 2 \\quad\\Rightarrow\\quad \\frac{3x}{4} = 9",
          explanation:
            "Add 2 to both sides: 7 + 2 = 9, leaving the lone fractional term 3x/4 = 9.",
        },
        {
          stepNumber: 3,
          description: "Multiply both sides by 4 to clear the denominator.",
          workingLatex: "\\frac{3x}{4} \\cdot 4 = 9 \\cdot 4 \\quad\\Rightarrow\\quad 3x = 36",
          explanation:
            "Multiplying by 4 removes the division by 4 on the left, and 9 × 4 = 36 on the right, leaving 3x = 36.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 3.",
          workingLatex: "\\frac{3x}{3} = \\frac{36}{3} \\quad\\Rightarrow\\quad x = 12",
          explanation:
            "Dividing by 3 gives x = 12.",
        },
        {
          stepNumber: 5,
          description: "Check by substitution.",
          workingLatex: "\\frac{3(12)}{4} - 2 = \\frac{36}{4} - 2 = 9 - 2 = 7 \\checkmark",
          explanation:
            "With x = 12: 3 × 12 = 36, 36 ÷ 4 = 9, and 9 - 2 = 7, which matches.",
        },
      ],
      finalAnswer: "\\(x = 12\\)",
      canonicalAnswer: "x=12",
    },
  },
  {
    id: "ga36-018",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(4 - \\dfrac{x}{2} = 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "negative coefficient", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the negative fractional x-term.",
          workingLatex: "4 - \\frac{x}{2} = 1",
          explanation:
            "Read the x-term as -x/2, i.e. x divided by -2. The minus sign in front belongs to the term and must be carried through to the end.",
        },
        {
          stepNumber: 2,
          description: "Subtract 4 from both sides to isolate the x-term.",
          workingLatex: "4 - \\frac{x}{2} - 4 = 1 - 4 \\quad\\Rightarrow\\quad -\\frac{x}{2} = -3",
          explanation:
            "Subtract 4 from both sides to clear the constant. On the right, 1 - 4 = -3, leaving -x/2 = -3.",
        },
        {
          stepNumber: 3,
          description: "Multiply both sides by -2.",
          workingLatex: "-\\frac{x}{2} \\cdot (-2) = -3 \\cdot (-2) \\quad\\Rightarrow\\quad x = 6",
          explanation:
            "Since -x/2 means x ÷ (-2), the inverse is to multiply by -2, which cancels back to a single x on the left. On the right, -3 × -2 = 6 (negative times negative is positive), so x = 6.",
        },
        {
          stepNumber: 4,
          description: "Check by substitution.",
          workingLatex: "4 - \\frac{6}{2} = 4 - 3 = 1 \\checkmark",
          explanation:
            "With x = 6, 6 ÷ 2 = 3, and 4 - 3 = 1, which matches.",
        },
      ],
      finalAnswer: "\\(x = 6\\)",
      canonicalAnswer: "x=6",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga36-019",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(5(2x - 3) + 4 = 29\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "brackets", "expanding", "multi-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket.",
          workingLatex: "5(2x - 3) + 4 = 10x - 15 + 4",
          explanation:
            "Here we can't simply divide through, because the +4 is outside the bracket. So expand instead: multiply each term inside by 5, giving 5 × 2x = 10x and 5 × (-3) = -15. The +4 stays put for now.",
        },
        {
          stepNumber: 2,
          description: "Collect the constant terms on the left.",
          workingLatex: "10x - 15 + 4 = 10x - 11 \\quad\\Rightarrow\\quad 10x - 11 = 29",
          explanation:
            "Combine the two constants on the left: -15 + 4 = -11. The equation tidies up to 10x - 11 = 29, which is now a standard two-step equation.",
        },
        {
          stepNumber: 3,
          description: "Add 11 to both sides.",
          workingLatex: "10x - 11 + 11 = 29 + 11 \\quad\\Rightarrow\\quad 10x = 40",
          explanation:
            "Undo the -11 by adding 11 to both sides: 29 + 11 = 40, leaving 10x = 40.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 10.",
          workingLatex: "\\frac{10x}{10} = \\frac{40}{10} \\quad\\Rightarrow\\quad x = 4",
          explanation:
            "Dividing by 10 gives x = 4.",
        },
        {
          stepNumber: 5,
          description: "Check by substituting into the original.",
          workingLatex: "5(2 \\cdot 4 - 3) + 4 = 5(5) + 4 = 25 + 4 = 29 \\checkmark",
          explanation:
            "With x = 4: 2 × 4 - 3 = 5, 5 × 5 = 25, and 25 + 4 = 29, confirming the solution.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga36-020",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(2(x + 5) + 3(x - 1) = 22\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "brackets", "collecting like terms", "multi-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "2(x + 5) = 2x + 10",
          explanation:
            "Take the brackets one at a time to avoid mistakes. Multiply each term in the first bracket by 2: 2 × x = 2x and 2 × 5 = 10.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket.",
          workingLatex: "3(x - 1) = 3x - 3",
          explanation:
            "Now the second bracket: 3 × x = 3x and 3 × (-1) = -3. The whole left-hand side is therefore 2x + 10 + 3x - 3.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "2x + 3x + 10 - 3 = 5x + 7 \\quad\\Rightarrow\\quad 5x + 7 = 22",
          explanation:
            "Group the x-terms and the constants separately: 2x + 3x = 5x and 10 - 3 = 7. The equation simplifies to 5x + 7 = 22.",
        },
        {
          stepNumber: 4,
          description: "Subtract 7 from both sides.",
          workingLatex: "5x + 7 - 7 = 22 - 7 \\quad\\Rightarrow\\quad 5x = 15",
          explanation:
            "Undo the +7 by subtracting 7: 22 - 7 = 15, leaving 5x = 15.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 5.",
          workingLatex: "\\frac{5x}{5} = \\frac{15}{5} \\quad\\Rightarrow\\quad x = 3",
          explanation:
            "Dividing by 5 gives x = 3.",
        },
        {
          stepNumber: 6,
          description: "Check by substitution.",
          workingLatex: "2(3 + 5) + 3(3 - 1) = 2(8) + 3(2) = 16 + 6 = 22 \\checkmark",
          explanation:
            "With x = 3, the two bracket values are 8 and 2, giving 16 + 6 = 22, which matches.",
        },
      ],
      finalAnswer: "\\(x = 3\\)",
      canonicalAnswer: "x=3",
    },
  },
  {
    id: "ga36-021",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(3(2x - 1) - 2(x - 4) = 17\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "brackets", "negative bracket", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "3(2x - 1) = 6x - 3",
          explanation:
            "Multiply each term in the first bracket by 3: 3 × 2x = 6x and 3 × (-1) = -3.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket, watching the negative sign.",
          workingLatex: "-2(x - 4) = -2x + 8",
          explanation:
            "The multiplier here is -2, not 2 — the minus in front of the bracket is part of it. So -2 × x = -2x and -2 × (-4) = +8. The double negative flips the last term to positive; forgetting this is the single most common error in these questions.",
        },
        {
          stepNumber: 3,
          description: "Combine and collect like terms.",
          workingLatex: "6x - 3 - 2x + 8 = 4x + 5 \\quad\\Rightarrow\\quad 4x + 5 = 17",
          explanation:
            "Put the two expansions together. Collect x-terms: 6x - 2x = 4x. Collect constants: -3 + 8 = 5. The equation becomes 4x + 5 = 17.",
        },
        {
          stepNumber: 4,
          description: "Subtract 5 from both sides.",
          workingLatex: "4x + 5 - 5 = 17 - 5 \\quad\\Rightarrow\\quad 4x = 12",
          explanation:
            "Undo the +5 by subtracting 5: 17 - 5 = 12, leaving 4x = 12.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 4.",
          workingLatex: "\\frac{4x}{4} = \\frac{12}{4} \\quad\\Rightarrow\\quad x = 3",
          explanation:
            "Dividing by 4 gives x = 3.",
        },
        {
          stepNumber: 6,
          description: "Check by substitution.",
          workingLatex: "3(2 \\cdot 3 - 1) - 2(3 - 4) = 3(5) - 2(-1) = 15 + 2 = 17 \\checkmark",
          explanation:
            "With x = 3, the first bracket is 5 and the second is -1, giving 15 - (-2) = 15 + 2 = 17, which matches. The check confirms the tricky sign handling was correct.",
        },
      ],
      finalAnswer: "\\(x = 3\\)",
      canonicalAnswer: "x=3",
    },
  },
  {
    id: "ga36-022",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{2x - 1}{3} = 5\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "fractions", "brackets", "multi-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the whole numerator is over 3.",
          workingLatex: "\\frac{2x - 1}{3} = 5",
          explanation:
            "The fraction bar groups the whole numerator 2x - 1, so all of it is divided by 3. Clear that division first before touching anything inside.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 3 to clear the denominator.",
          workingLatex: "\\frac{2x - 1}{3} \\cdot 3 = 5 \\cdot 3 \\quad\\Rightarrow\\quad 2x - 1 = 15",
          explanation:
            "Multiplying both sides by 3 cancels the ÷3 and lifts the whole numerator onto one line. The right becomes 5 × 3 = 15.",
        },
        {
          stepNumber: 3,
          description: "Add 1 to both sides.",
          workingLatex: "2x - 1 + 1 = 15 + 1 \\quad\\Rightarrow\\quad 2x = 16",
          explanation:
            "Undo the -1 by adding 1 to both sides: 15 + 1 = 16, leaving 2x = 16.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2.",
          workingLatex: "\\frac{2x}{2} = \\frac{16}{2} \\quad\\Rightarrow\\quad x = 8",
          explanation:
            "Dividing by 2 gives x = 8.",
        },
        {
          stepNumber: 5,
          description: "Check by substitution.",
          workingLatex: "\\frac{2(8) - 1}{3} = \\frac{16 - 1}{3} = \\frac{15}{3} = 5 \\checkmark",
          explanation:
            "With x = 8, the numerator is 16 - 1 = 15, and 15 ÷ 3 = 5, which matches.",
        },
      ],
      finalAnswer: "\\(x = 8\\)",
      canonicalAnswer: "x=8",
    },
  },
  {
    id: "ga36-023",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{x}{2} + \\dfrac{x}{3} = 10\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "fractions", "common denominator", "multi-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common denominator of the fractions.",
          workingLatex: "\\text{LCM of } 2 \\text{ and } 3 = 6",
          explanation:
            "Two fractions with denominators 2 and 3 are awkward to add directly. The lowest common multiple of 2 and 3 is 6, and multiplying the whole equation by 6 will clear both denominators at once.",
        },
        {
          stepNumber: 2,
          description: "Multiply every term by 6.",
          workingLatex: "6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 10",
          explanation:
            "Multiply EVERY term — both fractions and the 10 — by 6. Forgetting to multiply the right-hand side is a classic slip that throws the answer off.",
        },
        {
          stepNumber: 3,
          description: "Simplify each term.",
          workingLatex: "3x + 2x = 60",
          explanation:
            "Cancel within each term: 6 × x/2 = 3x and 6 × x/3 = 2x, while 6 × 10 = 60. No fractions remain.",
        },
        {
          stepNumber: 4,
          description: "Collect like terms.",
          workingLatex: "5x = 60",
          explanation:
            "Add the x-terms: 3x + 2x = 5x.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 5.",
          workingLatex: "\\frac{5x}{5} = \\frac{60}{5} \\quad\\Rightarrow\\quad x = 12",
          explanation:
            "Dividing by 5 gives x = 12.",
        },
        {
          stepNumber: 6,
          description: "Check by substitution.",
          workingLatex: "\\frac{12}{2} + \\frac{12}{3} = 6 + 4 = 10 \\checkmark",
          explanation:
            "With x = 12, 12 ÷ 2 = 6 and 12 ÷ 3 = 4, giving 6 + 4 = 10, which matches.",
        },
      ],
      finalAnswer: "\\(x = 12\\)",
      canonicalAnswer: "x=12",
    },
  },
  {
    id: "ga36-024",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{x + 1}{2} + \\dfrac{x - 2}{5} = 4\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "fractions", "common denominator", "brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common denominator.",
          workingLatex: "\\text{LCM of } 2 \\text{ and } 5 = 10",
          explanation:
            "The denominators are 2 and 5, whose lowest common multiple is 10. Multiplying the whole equation by 10 will clear both fractions simultaneously.",
        },
        {
          stepNumber: 2,
          description: "Multiply every term by 10.",
          workingLatex: "10 \\cdot \\frac{x + 1}{2} + 10 \\cdot \\frac{x - 2}{5} = 10 \\cdot 4",
          explanation:
            "Multiply each term by 10, including the 4 on the right. Each numerator is a two-part expression, so we'll keep it in brackets as we cancel.",
        },
        {
          stepNumber: 3,
          description: "Simplify each term, keeping numerators in brackets.",
          workingLatex: "5(x + 1) + 2(x - 2) = 40",
          explanation:
            "Cancel: 10 ÷ 2 = 5 so the first term becomes 5(x + 1); 10 ÷ 5 = 2 so the second becomes 2(x - 2); 10 × 4 = 40. Keeping the brackets is essential — it reminds us to multiply BOTH parts of each numerator in the next step.",
        },
        {
          stepNumber: 4,
          description: "Expand the brackets.",
          workingLatex: "5x + 5 + 2x - 4 = 40",
          explanation:
            "Expand each: 5(x + 1) = 5x + 5 and 2(x - 2) = 2x - 4.",
        },
        {
          stepNumber: 5,
          description: "Collect like terms.",
          workingLatex: "7x + 1 = 40",
          explanation:
            "Add the x-terms: 5x + 2x = 7x. Add the constants: 5 - 4 = 1. The equation becomes 7x + 1 = 40.",
        },
        {
          stepNumber: 6,
          description: "Subtract 1 from both sides.",
          workingLatex: "7x + 1 - 1 = 40 - 1 \\quad\\Rightarrow\\quad 7x = 39",
          explanation:
            "Undo the +1 by subtracting 1: 40 - 1 = 39, leaving 7x = 39.",
        },
        {
          stepNumber: 7,
          description: "Divide both sides by 7.",
          workingLatex: "\\frac{7x}{7} = \\frac{39}{7} \\quad\\Rightarrow\\quad x = \\frac{39}{7}",
          explanation:
            "Dividing by 7 gives x = 39/7. Since 39 isn't a multiple of 7, this doesn't simplify to an integer, so leave it as an exact fraction rather than a rounded decimal.",
        },
        {
          stepNumber: 8,
          description: "Check by substitution.",
          workingLatex: "\\frac{\\frac{39}{7} + 1}{2} + \\frac{\\frac{39}{7} - 2}{5} = \\frac{46/7}{2} + \\frac{25/7}{5} = \\frac{23}{7} + \\frac{5}{7} = \\frac{28}{7} = 4 \\checkmark",
          explanation:
            "With x = 39/7: x + 1 = 46/7 so the first fraction is (46/7)/2 = 23/7; x - 2 = 25/7 so the second is (25/7)/5 = 5/7. Their sum 23/7 + 5/7 = 28/7 = 4, which matches. The check is well worth doing when the answer is an awkward fraction.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{39}{7}\\)",
      canonicalAnswer: "x=39/7",
    },
  },
  {
    id: "ga36-025",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The perimeter of a rectangle is \\(46\\,\\text{cm}\\). The length is \\(5\\,\\text{cm}\\) more than the width. Letting the width be \\(x\\,\\text{cm}\\), form an equation and solve it to find the width.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "form and solve", "perimeter", "brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write expressions for the two dimensions.",
          workingLatex: "\\text{width} = x, \\qquad \\text{length} = x + 5",
          explanation:
            "We're told to let the width be x cm. 'The length is 5 cm more than the width' means we add 5 to the width, so the length is x + 5 cm.",
        },
        {
          stepNumber: 2,
          description: "Recall the perimeter formula.",
          workingLatex: "P = 2 \\times (\\text{width} + \\text{length})",
          explanation:
            "A rectangle has two widths and two lengths, so the perimeter is 2(width + length). Stating the formula before substituting keeps the algebra organised.",
        },
        {
          stepNumber: 3,
          description: "Form the perimeter equation.",
          workingLatex: "2(x + (x + 5)) = 46",
          explanation:
            "Substitute the width x and length x + 5 into the formula and set it equal to the given perimeter, 46.",
        },
        {
          stepNumber: 4,
          description: "Simplify inside the bracket and expand.",
          workingLatex: "2(2x + 5) = 46 \\quad\\Rightarrow\\quad 4x + 10 = 46",
          explanation:
            "Inside the bracket, x + x + 5 = 2x + 5. Then multiply out by 2: 2 × 2x = 4x and 2 × 5 = 10, giving 4x + 10 = 46.",
        },
        {
          stepNumber: 5,
          description: "Subtract 10 from both sides.",
          workingLatex: "4x + 10 - 10 = 46 - 10 \\quad\\Rightarrow\\quad 4x = 36",
          explanation:
            "Undo the +10 by subtracting 10: 46 - 10 = 36, leaving 4x = 36.",
        },
        {
          stepNumber: 6,
          description: "Divide by 4 and interpret in context.",
          workingLatex: "\\frac{4x}{4} = \\frac{36}{4} \\quad\\Rightarrow\\quad x = 9",
          explanation:
            "Dividing by 4 gives x = 9, so the width is 9 cm. Sanity check: length = 9 + 5 = 14 cm, and perimeter = 2(9 + 14) = 2 × 23 = 46 cm, as required. Always state the units when answering a contextual question.",
        },
      ],
      finalAnswer: "\\(x = 9\\) cm",
      canonicalAnswer: "x=9",
    },
  },
  {
    id: "ga36-026",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Three consecutive integers add up to \\(72\\). By letting the smallest be \\(n\\), form an equation and solve it to find the three integers.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "form and solve", "consecutive integers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the three integers in terms of n.",
          workingLatex: "n, \\quad n + 1, \\quad n + 2",
          explanation:
            "Consecutive integers go up in steps of 1. If the smallest is n, the next one is n + 1 and the one after is n + 2. Using a single letter for the smallest means all three are expressed in terms of n.",
        },
        {
          stepNumber: 2,
          description: "Form the equation from the sum.",
          workingLatex: "n + (n + 1) + (n + 2) = 72",
          explanation:
            "'Add up to 72' means their total is 72, so we add the three expressions and set the sum equal to 72.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "3n + 3 = 72",
          explanation:
            "Group the n-terms: n + n + n = 3n. Group the constants: 0 + 1 + 2 = 3. The equation simplifies to 3n + 3 = 72.",
        },
        {
          stepNumber: 4,
          description: "Subtract 3 from both sides.",
          workingLatex: "3n + 3 - 3 = 72 - 3 \\quad\\Rightarrow\\quad 3n = 69",
          explanation:
            "Undo the +3 by subtracting 3: 72 - 3 = 69, leaving 3n = 69.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 3.",
          workingLatex: "\\frac{3n}{3} = \\frac{69}{3} \\quad\\Rightarrow\\quad n = 23",
          explanation:
            "Dividing by 3 gives n = 23, the smallest integer.",
        },
        {
          stepNumber: 6,
          description: "State the integers and check.",
          workingLatex: "23, \\; 24, \\; 25; \\quad 23 + 24 + 25 = 72 \\checkmark",
          explanation:
            "With n = 23 the integers are 23, 24 and 25. Adding them: 23 + 24 + 25 = 72, confirming the answer. The question asks for the integers, so quote all three, not just n.",
        },
      ],
      finalAnswer: "\\(n = 23\\) (integers \\(23, 24, 25\\))",
      canonicalAnswer: "n=23",
    },
  },
  {
    id: "ga36-027",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{4x}{5} + 3 = \\dfrac{x}{5} + 9\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "fractions", "common denominator", "multi-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note both fractions share denominator 5.",
          workingLatex: "\\frac{4x}{5} + 3 = \\frac{x}{5} + 9",
          explanation:
            "Both fractional terms are over 5, so multiplying the whole equation by 5 will clear every denominator. The x-terms here only differ by a multiple of x/5, so once the fractions are gone this collapses to a single-side linear equation.",
        },
        {
          stepNumber: 2,
          description: "Multiply every term by 5.",
          workingLatex: "5 \\cdot \\frac{4x}{5} + 5 \\cdot 3 = 5 \\cdot \\frac{x}{5} + 5 \\cdot 9",
          explanation:
            "Multiply EVERY term on both sides by 5, including the constants 3 and 9, not just the fractions — multiplying only some terms would unbalance the equation.",
        },
        {
          stepNumber: 3,
          description: "Simplify each term.",
          workingLatex: "4x + 15 = x + 45",
          explanation:
            "Cancel each fraction and multiply each constant: 5 × 4x/5 = 4x, 5 × 3 = 15, 5 × x/5 = x and 5 × 9 = 45.",
        },
        {
          stepNumber: 4,
          description: "Gather the x-terms on one side.",
          workingLatex: "4x - x + 15 = 45 \\quad\\Rightarrow\\quad 3x + 15 = 45",
          explanation:
            "Subtract x from both sides so the x-terms combine on the left: 4x - x = 3x, leaving 3x + 15 = 45.",
        },
        {
          stepNumber: 5,
          description: "Subtract 15 from both sides.",
          workingLatex: "3x + 15 - 15 = 45 - 15 \\quad\\Rightarrow\\quad 3x = 30",
          explanation:
            "Undo the +15 by subtracting 15: 45 - 15 = 30, leaving 3x = 30.",
        },
        {
          stepNumber: 6,
          description: "Divide both sides by 3.",
          workingLatex: "\\frac{3x}{3} = \\frac{30}{3} \\quad\\Rightarrow\\quad x = 10",
          explanation:
            "Dividing by 3 gives x = 10.",
        },
        {
          stepNumber: 7,
          description: "Check by substitution.",
          workingLatex: "\\frac{4(10)}{5} + 3 = 8 + 3 = 11, \\quad \\frac{10}{5} + 9 = 2 + 9 = 11 \\checkmark",
          explanation:
            "With x = 10, the left side is 40/5 + 3 = 8 + 3 = 11 and the right side is 10/5 + 9 = 2 + 9 = 11, so both sides agree.",
        },
      ],
      finalAnswer: "\\(x = 10\\)",
      canonicalAnswer: "x=10",
    },
  },
  {
    id: "ga36-028",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(7 - 2(x - 4) = 3\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "brackets", "negative coefficient", "negative bracket"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket, taking care with the negative.",
          workingLatex: "7 - 2(x - 4) = 7 - 2x + 8",
          explanation:
            "The bracket is multiplied by -2 (the minus belongs to the multiplier). So -2 × x = -2x and -2 × (-4) = +8. The leading 7 is untouched. Don't be tempted to subtract 2 from the 7 first — the 2 is attached to the bracket, not to the 7.",
        },
        {
          stepNumber: 2,
          description: "Collect the constant terms.",
          workingLatex: "7 + 8 - 2x = 15 - 2x \\quad\\Rightarrow\\quad 15 - 2x = 3",
          explanation:
            "Combine the constants 7 + 8 = 15, giving 15 - 2x = 3. Note the x-term is negative, so keep that minus sign attached.",
        },
        {
          stepNumber: 3,
          description: "Subtract 15 from both sides.",
          workingLatex: "15 - 2x - 15 = 3 - 15 \\quad\\Rightarrow\\quad -2x = -12",
          explanation:
            "Move the constant 15 across by subtracting it from both sides. On the right, 3 - 15 = -12, leaving -2x = -12.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by -2.",
          workingLatex: "\\frac{-2x}{-2} = \\frac{-12}{-2} \\quad\\Rightarrow\\quad x = 6",
          explanation:
            "Divide by the full coefficient -2. A negative divided by a negative is positive: -12 ÷ -2 = 6, so x = 6.",
        },
        {
          stepNumber: 5,
          description: "Check by substitution.",
          workingLatex: "7 - 2(6 - 4) = 7 - 2(2) = 7 - 4 = 3 \\checkmark",
          explanation:
            "With x = 6: 6 - 4 = 2, 2 × 2 = 4, and 7 - 4 = 3, which matches.",
        },
      ],
      finalAnswer: "\\(x = 6\\)",
      canonicalAnswer: "x=6",
    },
  },
  {
    id: "ga36-029",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A taxi fare is made up of a fixed charge of \\(£3\\) plus \\(£2\\) for every mile travelled. A journey costs \\(£20\\). By forming an equation, find the number of miles \\(m\\) travelled.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "form and solve", "worded problem", "real-life context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate the cost structure into an expression.",
          workingLatex: "\\text{cost} = 3 + 2m",
          explanation:
            "Break the fare into its two parts: a fixed £3 that's always paid, plus £2 for each of the m miles, which contributes 2m. The total cost is therefore 3 + 2m pounds.",
        },
        {
          stepNumber: 2,
          description: "Set the cost equal to £20.",
          workingLatex: "3 + 2m = 20",
          explanation:
            "The journey costs £20, so set the cost expression equal to 20. This is our equation to solve for m.",
        },
        {
          stepNumber: 3,
          description: "Subtract 3 from both sides.",
          workingLatex: "3 + 2m - 3 = 20 - 3 \\quad\\Rightarrow\\quad 2m = 17",
          explanation:
            "Undo the fixed charge by subtracting 3 from both sides: 20 - 3 = 17, leaving 2m = 17.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2 and interpret.",
          workingLatex: "\\frac{2m}{2} = \\frac{17}{2} \\quad\\Rightarrow\\quad m = 8.5",
          explanation:
            "Dividing by 2 gives m = 8.5 miles. A non-whole answer is fine here — distance can be a fraction of a mile. Check: 3 + 2 × 8.5 = 3 + 17 = 20, matching the fare.",
        },
      ],
      finalAnswer: "\\(m = 8.5\\) miles",
      canonicalAnswer: "m=8.5",
    },
  },
  {
    id: "ga36-030",
    topicRef: "ga36",
    topicTitle: "Solving linear equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{3(x - 2)}{4} = 6\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear equations", "fractions", "brackets", "multi-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the layered structure.",
          workingLatex: "\\frac{3(x - 2)}{4} = 6",
          explanation:
            "There are three layers wrapped around x: subtract 2, multiply by 3, divide by 4. We peel them off from the outside in — clear the ÷4 first, then the ×3, then the -2.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 4 to clear the denominator.",
          workingLatex: "\\frac{3(x - 2)}{4} \\cdot 4 = 6 \\cdot 4 \\quad\\Rightarrow\\quad 3(x - 2) = 24",
          explanation:
            "The whole expression 3(x - 2) is divided by 4, so multiply both sides by 4 to cancel the division. The right becomes 6 × 4 = 24.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 3 to remove the outside factor.",
          workingLatex: "\\frac{3(x - 2)}{3} = \\frac{24}{3} \\quad\\Rightarrow\\quad x - 2 = 8",
          explanation:
            "Since 24 is a multiple of 3, dividing through by 3 is neater than expanding: it cancels the 3 outside the bracket and gives x - 2 = 8.",
        },
        {
          stepNumber: 4,
          description: "Add 2 to both sides.",
          workingLatex: "x - 2 + 2 = 8 + 2 \\quad\\Rightarrow\\quad x = 10",
          explanation:
            "Undo the -2 by adding 2 to both sides: 8 + 2 = 10, so x = 10.",
        },
        {
          stepNumber: 5,
          description: "Check by substitution.",
          workingLatex: "\\frac{3(10 - 2)}{4} = \\frac{3(8)}{4} = \\frac{24}{4} = 6 \\checkmark",
          explanation:
            "With x = 10: 10 - 2 = 8, 3 × 8 = 24, and 24 ÷ 4 = 6, which matches.",
        },
      ],
      finalAnswer: "\\(x = 10\\)",
      canonicalAnswer: "x=10",
    },
  },
];
