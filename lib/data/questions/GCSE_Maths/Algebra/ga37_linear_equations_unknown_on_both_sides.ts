/**
 * Topic: Linear equations with the unknown on both sides
 * Ref: ga37  (DfE A17)
 * Strand: Algebra — GCSE Maths (Foundation and Higher tiers)
 *
 * Coverage: solving linear equations that have the variable on BOTH sides.
 *   Core method used throughout — collect the variable terms on ONE side and
 *   the constants on the OTHER, then divide to isolate the variable. Solutions
 *   stress WHY each move is made:
 *     - collect the x-terms onto the side that keeps the x-coefficient POSITIVE
 *       (so you avoid dividing by a negative and the sign errors that follow);
 *     - expand brackets FIRST when present, then collect;
 *     - clear fractions by multiplying through by a common denominator before
 *       collecting;
 *     - form an equation from a worded / geometry context (equal perimeters,
 *       equal lengths, "I think of a number") and then solve it;
 *     - CHECK the answer by substituting it back into BOTH sides of the
 *       original equation.
 *   Clusters:
 *     (1) basic both-sides (collect, no brackets);
 *     (2) brackets on one or both sides, expand then collect;
 *     (3) negative x-coefficient — collect onto the larger-coefficient side to
 *         keep x positive;
 *     (4) fractional coefficients — clear denominators first;
 *     (5) form-and-solve from a worded or geometric context;
 *     (6) check by substitution / answers that are fractions.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga37-001 .. ga37-004  (4)   clean both-sides, integer answers
 *   - Standard:   ga37-005 .. ga37-018  (14)
 *   - Challenge:  ga37-019 .. ga37-030  (12)
 * Id range: ga37-001 .. ga37-030.
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
    id: "ga37-001",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Solve \\(5x = 2x + 12\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "collecting like terms", "basic both-sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 2x from both sides.",
          workingLatex: "5x - 2x = 2x + 12 - 2x",
          explanation:
            "The unknown appears on both sides, so the first job is to gather all the x-terms on one side. We subtract 2x from both sides because 5x is the larger x-term — collecting onto the left keeps the coefficient positive, which means no dividing by a negative later.",
        },
        {
          stepNumber: 2,
          description: "Simplify each side.",
          workingLatex: "3x = 12",
          explanation:
            "On the left, 5x - 2x = 3x. On the right the +2x and -2x cancel, leaving just 12. The x has now gone from the right-hand side completely.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 3.",
          workingLatex: "x = \\frac{12}{3} = 4",
          explanation:
            "Dividing by 3 undoes the 'times 3' and isolates x. Check: left = 5(4) = 20, right = 2(4) + 12 = 20, and 20 = 20, so x = 4 is correct.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga37-002",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Solve \\(7x + 1 = 4x + 16\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "collecting like terms", "basic both-sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 4x from both sides.",
          workingLatex: "7x - 4x + 1 = 16",
          explanation:
            "Collect the x-terms onto the left, where the coefficient is larger (7x), so the result stays positive. Subtracting 4x removes the x from the right-hand side.",
        },
        {
          stepNumber: 2,
          description: "Simplify the x-terms.",
          workingLatex: "3x + 1 = 16",
          explanation:
            "On the left, 7x - 4x = 3x. The constant +1 is untouched for now — it gets dealt with in the next step.",
        },
        {
          stepNumber: 3,
          description: "Subtract 1 from both sides.",
          workingLatex: "3x = 16 - 1 = 15",
          explanation:
            "Now move the constants to the other side: subtracting 1 from both sides cancels the +1 on the left so the x-term stands alone.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 3.",
          workingLatex: "x = \\frac{15}{3} = 5",
          explanation:
            "Dividing by 3 isolates x. Check: left = 7(5) + 1 = 36, right = 4(5) + 16 = 36, so both sides equal 36.",
        },
      ],
      finalAnswer: "\\(x = 5\\)",
      canonicalAnswer: "x=5",
    },
  },
  {
    id: "ga37-003",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Solve \\(6x - 5 = 4x + 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "collecting like terms", "basic both-sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 4x from both sides.",
          workingLatex: "6x - 4x - 5 = 3",
          explanation:
            "Collect the x-terms on the left, where the coefficient is larger (6x), to keep x positive. Subtracting 4x removes the x from the right.",
        },
        {
          stepNumber: 2,
          description: "Simplify the x-terms.",
          workingLatex: "2x - 5 = 3",
          explanation:
            "On the left, 6x - 4x = 2x. The -5 is left in place for now.",
        },
        {
          stepNumber: 3,
          description: "Add 5 to both sides.",
          workingLatex: "2x = 3 + 5 = 8",
          explanation:
            "Add 5 to both sides to cancel the -5 on the left, moving the constant across so the x-term stands alone.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2.",
          workingLatex: "x = \\frac{8}{2} = 4",
          explanation:
            "Dividing by 2 isolates x. Check: left = 6(4) - 5 = 19, right = 4(4) + 3 = 19.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga37-004",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Solve \\(8x + 2 = 3x + 17\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "collecting like terms", "basic both-sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 3x from both sides.",
          workingLatex: "8x - 3x + 2 = 17",
          explanation:
            "Gather the x-terms on the left, where 8x is the larger term. Subtracting 3x removes the x from the right and keeps the x-coefficient positive.",
        },
        {
          stepNumber: 2,
          description: "Simplify the x-terms.",
          workingLatex: "5x + 2 = 17",
          explanation:
            "On the left, 8x - 3x = 5x. The +2 stays put until the next step.",
        },
        {
          stepNumber: 3,
          description: "Subtract 2 from both sides.",
          workingLatex: "5x = 17 - 2 = 15",
          explanation:
            "Subtracting 2 cancels the +2 on the left, moving the constant to the right so the x-term is isolated.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 5.",
          workingLatex: "x = \\frac{15}{5} = 3",
          explanation:
            "Dividing by 5 isolates x. Check: left = 8(3) + 2 = 26, right = 3(3) + 17 = 26.",
        },
      ],
      finalAnswer: "\\(x = 3\\)",
      canonicalAnswer: "x=3",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga37-005",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(9x - 4 = 5x + 20\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "collecting like terms", "basic both-sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide which side to collect the x-terms on.",
          workingLatex: "9x \\text{ vs } 5x: \\; 9 > 5 \\Rightarrow \\text{collect on the left}",
          explanation:
            "The x-coefficients are 9 (left) and 5 (right). Collecting onto the side with the larger coefficient — here the left — keeps the resulting x-coefficient positive, which avoids dividing by a negative number later.",
        },
        {
          stepNumber: 2,
          description: "Subtract 5x from both sides.",
          workingLatex: "9x - 5x - 4 = 20 \\Rightarrow 4x - 4 = 20",
          explanation:
            "Subtracting 5x removes the x from the right and leaves 9x - 5x = 4x on the left. The constant -4 is carried along for now.",
        },
        {
          stepNumber: 3,
          description: "Add 4 to both sides to move the constant.",
          workingLatex: "4x = 20 + 4 = 24",
          explanation:
            "Adding 4 cancels the -4 on the left and moves it across, leaving the x-term alone on its side.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 4 and check.",
          workingLatex: "x = \\frac{24}{4} = 6",
          explanation:
            "Dividing by 4 gives x = 6. Check by substituting into the original: left = 9(6) - 4 = 50, right = 5(6) + 20 = 50, so both sides agree.",
        },
      ],
      finalAnswer: "\\(x = 6\\)",
      canonicalAnswer: "x=6",
    },
  },
  {
    id: "ga37-006",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(4x + 9 = 10x - 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "collecting like terms", "basic both-sides", "collect to keep x positive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the side with the larger x-coefficient.",
          workingLatex: "10x \\text{ vs } 4x: \\; 10 > 4 \\Rightarrow \\text{collect on the right}",
          explanation:
            "The larger x-term, 10x, is on the RIGHT. Collecting the x-terms there keeps the coefficient positive, so we subtract the smaller term 4x from both sides rather than 10x.",
        },
        {
          stepNumber: 2,
          description: "Subtract 4x from both sides.",
          workingLatex: "9 = 10x - 4x - 3 \\Rightarrow 9 = 6x - 3",
          explanation:
            "Subtracting 4x removes the x from the left; 10x - 4x = 6x remains on the right, with a positive coefficient.",
        },
        {
          stepNumber: 3,
          description: "Add 3 to both sides.",
          workingLatex: "9 + 3 = 6x \\Rightarrow 12 = 6x",
          explanation:
            "Add 3 to both sides to cancel the -3 and move the constant away from the x-term.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 6 and check.",
          workingLatex: "x = \\frac{12}{6} = 2",
          explanation:
            "Dividing by 6 gives x = 2. Check: left = 4(2) + 9 = 17, right = 10(2) - 3 = 17, so both sides equal 17.",
        },
      ],
      finalAnswer: "\\(x = 2\\)",
      canonicalAnswer: "x=2",
    },
  },
  {
    id: "ga37-007",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(2(x + 4) = 5x - 7\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "expanding brackets", "brackets then both-sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket on the left.",
          workingLatex: "2(x + 4) = 2x + 8",
          explanation:
            "When a bracket appears, multiply it out before collecting terms. 2 × x = 2x and 2 × 4 = 8, so the left side becomes 2x + 8.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the equation with the bracket expanded.",
          workingLatex: "2x + 8 = 5x - 7",
          explanation:
            "Replacing the bracket gives a standard both-sides equation. Now compare the x-coefficients: 2x on the left, 5x on the right.",
        },
        {
          stepNumber: 3,
          description: "Subtract 2x from both sides (collect on the right).",
          workingLatex: "8 = 5x - 2x - 7 \\Rightarrow 8 = 3x - 7",
          explanation:
            "The larger x-term is 5x on the right, so collecting there keeps x positive: 5x - 2x = 3x.",
        },
        {
          stepNumber: 4,
          description: "Add 7 to both sides.",
          workingLatex: "8 + 7 = 3x \\Rightarrow 15 = 3x",
          explanation:
            "Add 7 to both sides to cancel the -7 and isolate the x-term.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 3 and check.",
          workingLatex: "x = \\frac{15}{3} = 5",
          explanation:
            "Dividing by 3 gives x = 5. Check: left = 2(5 + 4) = 18, right = 5(5) - 7 = 18.",
        },
      ],
      finalAnswer: "\\(x = 5\\)",
      canonicalAnswer: "x=5",
    },
  },
  {
    id: "ga37-008",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(3(2x - 1) = 4(x + 2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "expanding brackets", "brackets both sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand both brackets.",
          workingLatex: "3(2x - 1) = 6x - 3, \\quad 4(x + 2) = 4x + 8",
          explanation:
            "Multiply out each side: 3 × 2x = 6x and 3 × (-1) = -3; 4 × x = 4x and 4 × 2 = 8. Always expand before collecting terms.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the equation without brackets.",
          workingLatex: "6x - 3 = 4x + 8",
          explanation:
            "With both brackets gone, this is now a standard both-sides equation. The x-coefficients are 6 (left) and 4 (right).",
        },
        {
          stepNumber: 3,
          description: "Subtract 4x from both sides (collect on the left).",
          workingLatex: "6x - 4x - 3 = 8 \\Rightarrow 2x - 3 = 8",
          explanation:
            "The larger x-term is 6x on the left, so collect there: 6x - 4x = 2x, keeping the coefficient positive.",
        },
        {
          stepNumber: 4,
          description: "Add 3 to both sides.",
          workingLatex: "2x = 8 + 3 = 11",
          explanation:
            "Add 3 to both sides to cancel the -3 and move the constant across.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 2 and check.",
          workingLatex: "x = \\frac{11}{2}",
          explanation:
            "Dividing by 2 gives x = 11/2 = 5.5; not every both-sides equation has a whole-number answer. Check: left = 3(2 \\cdot 5.5 - 1) = 3(10) = 30, right = 4(5.5 + 2) = 4(7.5) = 30.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{11}{2}\\)",
      canonicalAnswer: "x=11/2",
    },
  },
  {
    id: "ga37-009",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(3x + 14 = 8x - 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "collecting like terms", "collect to keep x positive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 3x from both sides (collect on the right).",
          workingLatex: "14 = 8x - 3x - 1 \\Rightarrow 14 = 5x - 1",
          explanation:
            "The larger x-term is 8x on the right, so subtract the smaller 3x from both sides. This collects the x on the right as 8x - 3x = 5x, with a positive coefficient.",
        },
        {
          stepNumber: 2,
          description: "Add 1 to both sides.",
          workingLatex: "14 + 1 = 5x \\Rightarrow 15 = 5x",
          explanation:
            "Add 1 to both sides to cancel the -1, moving the constant away from the x-term.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 5 and check.",
          workingLatex: "x = \\frac{15}{5} = 3",
          explanation:
            "Dividing by 5 gives x = 3. Check: left = 3(3) + 14 = 23, right = 8(3) - 1 = 23.",
        },
      ],
      finalAnswer: "\\(x = 3\\)",
      canonicalAnswer: "x=3",
    },
  },
  {
    id: "ga37-010",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(4 - x = 2x + 10\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "negative x-coefficient", "collect to keep x positive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare the x-terms to choose a side.",
          workingLatex: "-x \\text{ (left) vs } +2x \\text{ (right)} \\Rightarrow \\text{collect on the right}",
          explanation:
            "The x-term on the left is -x (coefficient -1) and on the right is +2x. To avoid ending up with a negative x-coefficient, collect the x-terms on the RIGHT, where the coefficient is already positive.",
        },
        {
          stepNumber: 2,
          description: "Add x to both sides.",
          workingLatex: "4 = 2x + x + 10 \\Rightarrow 4 = 3x + 10",
          explanation:
            "Adding x cancels the -x on the left and combines with 2x on the right: 2x + x = 3x, with a positive coefficient.",
        },
        {
          stepNumber: 3,
          description: "Subtract 10 from both sides.",
          workingLatex: "4 - 10 = 3x \\Rightarrow -6 = 3x",
          explanation:
            "Subtract 10 from both sides to move the constant across. Don't be put off by the negative — answers can be negative.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 3 and check.",
          workingLatex: "x = \\frac{-6}{3} = -2",
          explanation:
            "Dividing by 3 gives x = -2. Check: left = 4 - (-2) = 6, right = 2(-2) + 10 = 6.",
        },
      ],
      finalAnswer: "\\(x = -2\\)",
      canonicalAnswer: "x=-2",
    },
  },
  {
    id: "ga37-011",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(5x - 3 = 17 - 2x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "negative x-coefficient", "collect to keep x positive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add 2x to both sides to collect x on the left.",
          workingLatex: "5x + 2x - 3 = 17 \\Rightarrow 7x - 3 = 17",
          explanation:
            "The right side has -2x. Adding 2x to both sides removes it from the right and combines with 5x to give 7x on the left — a positive coefficient, which is exactly what we want.",
        },
        {
          stepNumber: 2,
          description: "Add 3 to both sides.",
          workingLatex: "7x = 17 + 3 = 20",
          explanation:
            "Add 3 to both sides to cancel the -3 and move the constant across, isolating the x-term.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 7.",
          workingLatex: "x = \\frac{20}{7}",
          explanation:
            "Dividing by 7 gives x = 20/7, which does not simplify (20 and 7 share no common factor), so leave it as a fraction.",
        },
        {
          stepNumber: 4,
          description: "Check by substitution.",
          workingLatex: "5 \\cdot \\frac{20}{7} - 3 = \\frac{100}{7} - \\frac{21}{7} = \\frac{79}{7}, \\quad 17 - 2 \\cdot \\frac{20}{7} = \\frac{119}{7} - \\frac{40}{7} = \\frac{79}{7}",
          explanation:
            "Substituting x = 20/7 into each side gives 79/7 on both, so the answer is correct. Writing 3 as 21/7 and 17 as 119/7 makes the fraction arithmetic clean.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{20}{7}\\)",
      canonicalAnswer: "x=20/7",
    },
  },
  {
    id: "ga37-012",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{x}{2} + 5 = x - 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "fractional coefficient", "clear denominators"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply every term by 2 to clear the fraction.",
          workingLatex: "2 \\cdot \\frac{x}{2} + 2 \\cdot 5 = 2 \\cdot x - 2 \\cdot 1",
          explanation:
            "Multiplying EVERY term by the denominator 2 removes the fraction. The slip to watch for is multiplying only the fraction and forgetting the other terms — each term must be doubled.",
        },
        {
          stepNumber: 2,
          description: "Simplify each term.",
          workingLatex: "x + 10 = 2x - 2",
          explanation:
            "Note 2 × (x/2) = x (the 2s cancel), 2 × 5 = 10, 2 × x = 2x, and 2 × 1 = 2. The fraction is gone, leaving a clean both-sides equation.",
        },
        {
          stepNumber: 3,
          description: "Subtract x from both sides (collect on the right).",
          workingLatex: "10 = 2x - x - 2 \\Rightarrow 10 = x - 2",
          explanation:
            "The larger x-term, 2x, is on the right, so collect there: 2x - x = x, keeping the coefficient positive.",
        },
        {
          stepNumber: 4,
          description: "Add 2 to both sides and check.",
          workingLatex: "10 + 2 = x \\Rightarrow x = 12",
          explanation:
            "Add 2 to both sides to isolate x, giving x = 12. Check in the original: left = 12/2 + 5 = 11, right = 12 - 1 = 11.",
        },
      ],
      finalAnswer: "\\(x = 12\\)",
      canonicalAnswer: "x=12",
    },
  },
  {
    id: "ga37-013",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{2x}{3} = \\dfrac{x}{2} + 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "fractional coefficient", "clear denominators"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common denominator of 3 and 2.",
          workingLatex: "\\text{LCM}(3, 2) = 6",
          explanation:
            "Both fractions have different denominators (3 and 2). The lowest common multiple is 6, so multiplying through by 6 will clear both fractions in one go.",
        },
        {
          stepNumber: 2,
          description: "Multiply every term by 6.",
          workingLatex: "6 \\cdot \\frac{2x}{3} = 6 \\cdot \\frac{x}{2} + 6 \\cdot 1 \\Rightarrow 4x = 3x + 6",
          explanation:
            "6 × (2x/3) = 4x (since 6 ÷ 3 = 2, then 2 × 2x = 4x) and 6 × (x/2) = 3x; the +1 becomes +6. This turns the equation into a simple both-sides problem.",
        },
        {
          stepNumber: 3,
          description: "Subtract 3x from both sides.",
          workingLatex: "4x - 3x = 6 \\Rightarrow x = 6",
          explanation:
            "Collect the x-terms on the left (4x is larger): 4x - 3x = x, which directly gives x = 6 — no division needed.",
        },
        {
          stepNumber: 4,
          description: "Check by substitution.",
          workingLatex: "\\frac{2 \\cdot 6}{3} = 4, \\quad \\frac{6}{2} + 1 = 4",
          explanation:
            "Both sides equal 4, so x = 6 is correct.",
        },
      ],
      finalAnswer: "\\(x = 6\\)",
      canonicalAnswer: "x=6",
    },
  },
  {
    id: "ga37-014",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(5(x - 2) = 3(x + 2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "expanding brackets", "brackets both sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand both brackets.",
          workingLatex: "5(x - 2) = 5x - 10, \\quad 3(x + 2) = 3x + 6",
          explanation:
            "Multiply out each side: 5 × x = 5x and 5 × (-2) = -10; 3 × x = 3x and 3 × 2 = 6. Expand first, then collect.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the equation without brackets.",
          workingLatex: "5x - 10 = 3x + 6",
          explanation:
            "This is now a standard both-sides equation, with x-coefficients 5 (left) and 3 (right).",
        },
        {
          stepNumber: 3,
          description: "Subtract 3x from both sides (collect on the left).",
          workingLatex: "5x - 3x - 10 = 6 \\Rightarrow 2x - 10 = 6",
          explanation:
            "The larger x-term is 5x on the left, so collect there: 5x - 3x = 2x, keeping the coefficient positive.",
        },
        {
          stepNumber: 4,
          description: "Add 10 to both sides.",
          workingLatex: "2x = 6 + 10 = 16",
          explanation:
            "Add 10 to both sides to cancel the -10 and move the constant across.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 2 and check.",
          workingLatex: "x = \\frac{16}{2} = 8",
          explanation:
            "Dividing by 2 gives x = 8. Check: left = 5(8 - 2) = 30, right = 3(8 + 2) = 30.",
        },
      ],
      finalAnswer: "\\(x = 8\\)",
      canonicalAnswer: "x=8",
    },
  },
  {
    id: "ga37-015",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "I think of a number. When I multiply it by 4 and add 5, I get the same result as multiplying it by 6 and subtracting 3. Form an equation and find the number.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "forming equations", "form and solve"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Let the number be x and translate each phrase.",
          workingLatex: "\\text{multiply by 4, add 5} \\to 4x + 5, \\quad \\text{multiply by 6, subtract 3} \\to 6x - 3",
          explanation:
            "Call the unknown number x. 'Multiply by 4 and add 5' becomes 4x + 5; 'multiply by 6 and subtract 3' becomes 6x - 3. Building each expression separately keeps the translation tidy.",
        },
        {
          stepNumber: 2,
          description: "Set the two expressions equal.",
          workingLatex: "4x + 5 = 6x - 3",
          explanation:
            "'The same result' means the two expressions are equal, giving an equation with x on both sides.",
        },
        {
          stepNumber: 3,
          description: "Subtract 4x from both sides (collect on the right).",
          workingLatex: "5 = 6x - 4x - 3 \\Rightarrow 5 = 2x - 3",
          explanation:
            "The larger x-term is 6x on the right, so collecting there keeps x positive: 6x - 4x = 2x.",
        },
        {
          stepNumber: 4,
          description: "Add 3 to both sides.",
          workingLatex: "5 + 3 = 2x \\Rightarrow 8 = 2x",
          explanation:
            "Add 3 to both sides to cancel the -3 and isolate the x-term.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 2 and check.",
          workingLatex: "x = \\frac{8}{2} = 4",
          explanation:
            "The number is 4. Check: 4(4) + 5 = 21 and 6(4) - 3 = 21, so both give 21.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga37-016",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A rectangle has length \\((3x + 1)\\) cm. A square has side \\((x + 5)\\) cm. Twice the rectangle's length equals twice the square's side. Form an equation and find \\(x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "forming equations", "geometry context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate the condition into an equation.",
          workingLatex: "2(3x + 1) = 2(x + 5)",
          explanation:
            "'Twice the rectangle's length' is 2(3x + 1); 'twice the square's side' is 2(x + 5). Setting them equal gives an equation with x on both sides.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 2 to simplify.",
          workingLatex: "3x + 1 = x + 5",
          explanation:
            "Both sides share a factor of 2, so dividing through by 2 immediately simplifies the equation. This is quicker than expanding and then collecting.",
        },
        {
          stepNumber: 3,
          description: "Subtract x from both sides (collect on the left).",
          workingLatex: "3x - x + 1 = 5 \\Rightarrow 2x + 1 = 5",
          explanation:
            "The larger x-term is 3x on the left, so collect there: 3x - x = 2x.",
        },
        {
          stepNumber: 4,
          description: "Subtract 1 from both sides.",
          workingLatex: "2x = 5 - 1 = 4",
          explanation:
            "Subtract 1 from both sides to cancel the +1 and isolate the x-term.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 2 and check.",
          workingLatex: "x = \\frac{4}{2} = 2",
          explanation:
            "Dividing by 2 gives x = 2. Check: 2(3 \\cdot 2 + 1) = 2(7) = 14 and 2(2 + 5) = 2(7) = 14, so both are 14 cm.",
        },
      ],
      finalAnswer: "\\(x = 2\\)",
      canonicalAnswer: "x=2",
    },
  },
  {
    id: "ga37-017",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(7x - 2 = 3(x + 6)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "expanding brackets", "brackets then both-sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket on the right.",
          workingLatex: "3(x + 6) = 3x + 18 \\Rightarrow 7x - 2 = 3x + 18",
          explanation:
            "Multiply out the bracket before collecting: 3 × x = 3x and 3 × 6 = 18. The equation becomes 7x - 2 = 3x + 18.",
        },
        {
          stepNumber: 2,
          description: "Subtract 3x from both sides (collect on the left).",
          workingLatex: "7x - 3x - 2 = 18 \\Rightarrow 4x - 2 = 18",
          explanation:
            "The larger x-term is 7x on the left, so collect there: 7x - 3x = 4x, keeping the coefficient positive.",
        },
        {
          stepNumber: 3,
          description: "Add 2 to both sides.",
          workingLatex: "4x = 18 + 2 = 20",
          explanation:
            "Add 2 to both sides to cancel the -2 and move the constant across.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 4 and check.",
          workingLatex: "x = \\frac{20}{4} = 5",
          explanation:
            "Dividing by 4 gives x = 5. Check: left = 7(5) - 2 = 33, right = 3(5 + 6) = 33.",
        },
      ],
      finalAnswer: "\\(x = 5\\)",
      canonicalAnswer: "x=5",
    },
  },
  {
    id: "ga37-018",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Solve \\(6x + 7 = 2x + 10\\), giving your answer as a fraction in its simplest form.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "collecting like terms", "fractional answer"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 2x from both sides (collect on the left).",
          workingLatex: "6x - 2x + 7 = 10 \\Rightarrow 4x + 7 = 10",
          explanation:
            "The larger x-term is 6x on the left, so collect there: 6x - 2x = 4x, keeping the coefficient positive.",
        },
        {
          stepNumber: 2,
          description: "Subtract 7 from both sides.",
          workingLatex: "4x = 10 - 7 = 3",
          explanation:
            "Subtract 7 from both sides to cancel the +7 and isolate the x-term.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 4.",
          workingLatex: "x = \\frac{3}{4}",
          explanation:
            "Dividing by 4 gives x = 3/4. Since 3 and 4 share no common factor, this is already in its simplest form, as required.",
        },
        {
          stepNumber: 4,
          description: "Check by substitution.",
          workingLatex: "6 \\cdot \\frac{3}{4} + 7 = \\frac{9}{2} + 7 = \\frac{23}{2}, \\quad 2 \\cdot \\frac{3}{4} + 10 = \\frac{3}{2} + 10 = \\frac{23}{2}",
          explanation:
            "Both sides equal 23/2, confirming x = 3/4. Writing the whole numbers over the same denominator keeps the fraction arithmetic clean.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{3}{4}\\)",
      canonicalAnswer: "x=3/4",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga37-019",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(4(2x - 3) = 2(3x + 1) - 4\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "expanding brackets", "brackets both sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket on the left.",
          workingLatex: "4(2x - 3) = 8x - 12",
          explanation:
            "Multiply out: 4 × 2x = 8x and 4 × (-3) = -12, so the left side is 8x - 12.",
        },
        {
          stepNumber: 2,
          description: "Expand the right side, then simplify the constants.",
          workingLatex: "2(3x + 1) - 4 = 6x + 2 - 4 = 6x - 2",
          explanation:
            "2(3x + 1) = 6x + 2; then the trailing -4 combines with the +2 to give 6x - 2. The equation is now 8x - 12 = 6x - 2.",
        },
        {
          stepNumber: 3,
          description: "Subtract 6x from both sides (collect on the left).",
          workingLatex: "8x - 6x - 12 = -2 \\Rightarrow 2x - 12 = -2",
          explanation:
            "The larger x-term is 8x on the left, so collect there: 8x - 6x = 2x, keeping the coefficient positive.",
        },
        {
          stepNumber: 4,
          description: "Add 12 to both sides.",
          workingLatex: "2x = -2 + 12 = 10",
          explanation:
            "Add 12 to both sides to cancel the -12. The right side becomes -2 + 12 = 10.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 2 and check.",
          workingLatex: "x = \\frac{10}{2} = 5",
          explanation:
            "Dividing by 2 gives x = 5. Check: left = 4(2 \\cdot 5 - 3) = 4(7) = 28; right = 2(3 \\cdot 5 + 1) - 4 = 2(16) - 4 = 28.",
        },
      ],
      finalAnswer: "\\(x = 5\\)",
      canonicalAnswer: "x=5",
    },
  },
  {
    id: "ga37-020",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(3(2x + 1) - 2(x - 4) = 5x + 2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "expanding brackets", "negative bracket"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand both brackets on the left, watching the negative.",
          workingLatex: "3(2x + 1) = 6x + 3, \\quad -2(x - 4) = -2x + 8",
          explanation:
            "The second bracket is multiplied by -2: -2 × x = -2x and -2 × (-4) = +8. The most common slip is forgetting that -2 × (-4) is positive — a negative times a negative is a positive.",
        },
        {
          stepNumber: 2,
          description: "Combine like terms on the left.",
          workingLatex: "6x + 3 - 2x + 8 = 4x + 11",
          explanation:
            "Collect: 6x - 2x = 4x and 3 + 8 = 11, so the left side simplifies to 4x + 11. The equation is now 4x + 11 = 5x + 2.",
        },
        {
          stepNumber: 3,
          description: "Subtract 4x from both sides (collect on the right).",
          workingLatex: "11 = 5x - 4x + 2 \\Rightarrow 11 = x + 2",
          explanation:
            "The larger x-term is 5x on the right, so collect there: 5x - 4x = x, keeping the coefficient positive.",
        },
        {
          stepNumber: 4,
          description: "Subtract 2 from both sides and check.",
          workingLatex: "11 - 2 = x \\Rightarrow x = 9",
          explanation:
            "Subtracting 2 isolates x, giving x = 9. Check: left = 3(2 \\cdot 9 + 1) - 2(9 - 4) = 3(19) - 2(5) = 57 - 10 = 47; right = 5(9) + 2 = 47.",
        },
      ],
      finalAnswer: "\\(x = 9\\)",
      canonicalAnswer: "x=9",
    },
  },
  {
    id: "ga37-021",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{3x - 1}{2} = x + 4\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "fractional coefficient", "clear denominators"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply both sides by 2 to clear the fraction.",
          workingLatex: "3x - 1 = 2(x + 4)",
          explanation:
            "Multiplying both sides by the denominator 2 removes the fraction on the left. The WHOLE right side must be multiplied by 2, so it becomes 2(x + 4) — keep it bracketed so every term inside gets doubled.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket.",
          workingLatex: "3x - 1 = 2x + 8",
          explanation:
            "2(x + 4) = 2x + 8. Now it is a standard both-sides equation.",
        },
        {
          stepNumber: 3,
          description: "Subtract 2x from both sides (collect on the left).",
          workingLatex: "3x - 2x - 1 = 8 \\Rightarrow x - 1 = 8",
          explanation:
            "The larger x-term is 3x on the left, so collect there: 3x - 2x = x.",
        },
        {
          stepNumber: 4,
          description: "Add 1 to both sides and check.",
          workingLatex: "x = 8 + 1 = 9",
          explanation:
            "Add 1 to both sides to isolate x, giving x = 9. Check: left = (3 \\cdot 9 - 1)/2 = 26/2 = 13; right = 9 + 4 = 13.",
        },
      ],
      finalAnswer: "\\(x = 9\\)",
      canonicalAnswer: "x=9",
    },
  },
  {
    id: "ga37-022",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{x + 3}{4} = \\dfrac{2x - 1}{3}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "fractional coefficient", "cross-multiplying"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Cross-multiply to clear both denominators.",
          workingLatex: "3(x + 3) = 4(2x - 1)",
          explanation:
            "With a single fraction equal to a single fraction, cross-multiply: the left numerator times the right denominator equals the right numerator times the left denominator. Equivalently, multiplying every term by 12 (the LCM of 4 and 3) gives 12/4 = 3 on the left and 12/3 = 4 on the right.",
        },
        {
          stepNumber: 2,
          description: "Expand both brackets.",
          workingLatex: "3x + 9 = 8x - 4",
          explanation:
            "3(x + 3) = 3x + 9 and 4(2x - 1) = 8x - 4. Now it is a standard both-sides equation.",
        },
        {
          stepNumber: 3,
          description: "Subtract 3x from both sides (collect on the right).",
          workingLatex: "9 = 8x - 3x - 4 \\Rightarrow 9 = 5x - 4",
          explanation:
            "The larger x-term is 8x on the right, so collect there: 8x - 3x = 5x, keeping the coefficient positive.",
        },
        {
          stepNumber: 4,
          description: "Add 4 to both sides.",
          workingLatex: "9 + 4 = 5x \\Rightarrow 13 = 5x",
          explanation:
            "Add 4 to both sides to cancel the -4 and isolate the x-term.",
        },
        {
          stepNumber: 5,
          description: "Divide by 5 and check.",
          workingLatex: "x = \\frac{13}{5}",
          explanation:
            "Dividing by 5 gives x = 13/5 (no common factor, so it does not simplify). Check: left = (13/5 + 3)/4 = (28/5)/4 = 28/20 = 7/5; right = (2 \\cdot 13/5 - 1)/3 = (21/5)/3 = 21/15 = 7/5.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{13}{5}\\)",
      canonicalAnswer: "x=13/5",
    },
  },
  {
    id: "ga37-023",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(2(5 - 2x) = 3 - (x - 4)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "negative bracket", "negative x-coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the left bracket.",
          workingLatex: "2(5 - 2x) = 10 - 4x",
          explanation:
            "2 × 5 = 10 and 2 × (-2x) = -4x, so the left side is 10 - 4x.",
        },
        {
          stepNumber: 2,
          description: "Expand the right side, treating -(x - 4) carefully.",
          workingLatex: "3 - (x - 4) = 3 - x + 4 = 7 - x",
          explanation:
            "The minus sign in front of the bracket flips both signs inside: -(x - 4) = -x + 4. Then 3 + 4 = 7, so the right side is 7 - x. The equation is now 10 - 4x = 7 - x.",
        },
        {
          stepNumber: 3,
          description: "Add 4x to both sides to keep x positive.",
          workingLatex: "10 = 7 - x + 4x \\Rightarrow 10 = 7 + 3x",
          explanation:
            "Both x-terms are negative; adding 4x to both sides clears the -4x on the left and gives -x + 4x = 3x on the right, with a positive coefficient.",
        },
        {
          stepNumber: 4,
          description: "Subtract 7 from both sides.",
          workingLatex: "10 - 7 = 3x \\Rightarrow 3 = 3x",
          explanation:
            "Subtract 7 from both sides to move the constant across, isolating the x-term.",
        },
        {
          stepNumber: 5,
          description: "Divide by 3 and check.",
          workingLatex: "x = \\frac{3}{3} = 1",
          explanation:
            "Dividing by 3 gives x = 1. Check: left = 2(5 - 2) = 6; right = 3 - (1 - 4) = 3 - (-3) = 6.",
        },
      ],
      finalAnswer: "\\(x = 1\\)",
      canonicalAnswer: "x=1",
    },
  },
  {
    id: "ga37-024",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A rectangle has length \\((4x - 3)\\) cm and width \\((x + 2)\\) cm. An equilateral triangle has side \\((2x + 1)\\) cm. The perimeter of the rectangle equals the perimeter of the triangle. Find \\(x\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "forming equations", "perimeter", "geometry context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the perimeter of the rectangle.",
          workingLatex: "P_{\\text{rect}} = 2(4x - 3) + 2(x + 2)",
          explanation:
            "A rectangle's perimeter is 2(length) + 2(width). Substituting the given expressions gives 2(4x - 3) + 2(x + 2).",
        },
        {
          stepNumber: 2,
          description: "Expand and simplify the rectangle's perimeter.",
          workingLatex: "8x - 6 + 2x + 4 = 10x - 2",
          explanation:
            "Expand each bracket: 2(4x - 3) = 8x - 6 and 2(x + 2) = 2x + 4. Then collect: 8x + 2x = 10x and -6 + 4 = -2, giving 10x - 2.",
        },
        {
          stepNumber: 3,
          description: "Write the perimeter of the equilateral triangle.",
          workingLatex: "P_{\\text{tri}} = 3(2x + 1) = 6x + 3",
          explanation:
            "An equilateral triangle has three equal sides, so its perimeter is 3 × side = 3(2x + 1) = 6x + 3.",
        },
        {
          stepNumber: 4,
          description: "Set the perimeters equal and collect x-terms.",
          workingLatex: "10x - 2 = 6x + 3 \\Rightarrow 10x - 6x - 2 = 3 \\Rightarrow 4x - 2 = 3",
          explanation:
            "The problem states the two perimeters are equal. Collect onto the left (10x is larger): 10x - 6x = 4x, keeping the coefficient positive.",
        },
        {
          stepNumber: 5,
          description: "Add 2, divide by 4, and check.",
          workingLatex: "4x = 5 \\Rightarrow x = \\frac{5}{4}",
          explanation:
            "Add 2 to both sides to get 4x = 5, then divide by 4. Check: rectangle = 10 \\cdot \\frac{5}{4} - 2 = \\frac{50}{4} - 2 = \\frac{42}{4} = \\frac{21}{2}; triangle = 6 \\cdot \\frac{5}{4} + 3 = \\frac{30}{4} + 3 = \\frac{42}{4} = \\frac{21}{2}.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{5}{4}\\)",
      canonicalAnswer: "x=5/4",
    },
  },
  {
    id: "ga37-025",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Two vertically opposite angles are \\((5x + 10)^\\circ\\) and \\((7x - 50)^\\circ\\). Form an equation and find \\(x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "forming equations", "angles", "geometry context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the fact that vertically opposite angles are equal.",
          workingLatex: "5x + 10 = 7x - 50",
          explanation:
            "Vertically opposite angles (formed where two straight lines cross) are always equal, so the two angle expressions must be equal. This gives an equation with x on both sides.",
        },
        {
          stepNumber: 2,
          description: "Subtract 5x from both sides (collect on the right).",
          workingLatex: "10 = 7x - 5x - 50 \\Rightarrow 10 = 2x - 50",
          explanation:
            "The larger x-term is 7x on the right, so collect there: 7x - 5x = 2x, keeping the coefficient positive.",
        },
        {
          stepNumber: 3,
          description: "Add 50 to both sides.",
          workingLatex: "10 + 50 = 2x \\Rightarrow 60 = 2x",
          explanation:
            "Add 50 to both sides to cancel the -50 and isolate the x-term.",
        },
        {
          stepNumber: 4,
          description: "Divide by 2 and check.",
          workingLatex: "x = \\frac{60}{2} = 30",
          explanation:
            "Dividing by 2 gives x = 30. Check: 5(30) + 10 = 160 and 7(30) - 50 = 160, so both angles are 160°.",
        },
      ],
      finalAnswer: "\\(x = 30\\)",
      canonicalAnswer: "x=30",
    },
  },
  {
    id: "ga37-026",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{2x + 1}{3} = \\dfrac{x - 2}{2} + 1\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "fractional coefficient", "clear denominators"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply every term by 6 (the LCM of 3 and 2).",
          workingLatex: "6 \\cdot \\frac{2x + 1}{3} = 6 \\cdot \\frac{x - 2}{2} + 6 \\cdot 1",
          explanation:
            "The common denominator of 3 and 2 is 6. Multiplying EVERY term — including the lone +1 — by 6 clears both fractions. Forgetting to multiply the +1 is a common error.",
        },
        {
          stepNumber: 2,
          description: "Simplify each term.",
          workingLatex: "2(2x + 1) = 3(x - 2) + 6",
          explanation:
            "6 ÷ 3 = 2 multiplies the first numerator; 6 ÷ 2 = 3 multiplies the second; 6 × 1 = 6. Keep each numerator bracketed so it gets multiplied as a whole.",
        },
        {
          stepNumber: 3,
          description: "Expand both sides.",
          workingLatex: "4x + 2 = 3x - 6 + 6",
          explanation:
            "2(2x + 1) = 4x + 2 and 3(x - 2) = 3x - 6, with the +6 still trailing on the right.",
        },
        {
          stepNumber: 4,
          description: "Simplify the constants on the right.",
          workingLatex: "4x + 2 = 3x",
          explanation:
            "On the right, -6 + 6 = 0, so the right side is just 3x. The equation is now 4x + 2 = 3x.",
        },
        {
          stepNumber: 5,
          description: "Subtract 3x from both sides (collect on the left).",
          workingLatex: "4x - 3x + 2 = 0 \\Rightarrow x + 2 = 0",
          explanation:
            "The larger x-term is 4x on the left, so collect there: 4x - 3x = x.",
        },
        {
          stepNumber: 6,
          description: "Subtract 2 and check.",
          workingLatex: "x = -2",
          explanation:
            "Subtracting 2 gives x = -2. Check: left = (2(-2) + 1)/3 = (-3)/3 = -1; right = (-2 - 2)/2 + 1 = -2 + 1 = -1.",
        },
      ],
      finalAnswer: "\\(x = -2\\)",
      canonicalAnswer: "x=-2",
    },
  },
  {
    id: "ga37-027",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(5(2x - 1) - 3(x + 2) = 4(x - 1)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "expanding brackets", "negative bracket"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets on the left, watching the negative.",
          workingLatex: "5(2x - 1) = 10x - 5, \\quad -3(x + 2) = -3x - 6",
          explanation:
            "5(2x - 1) = 10x - 5; the second bracket is multiplied by -3, so -3 × x = -3x and -3 × 2 = -6. The leading minus must hit BOTH terms inside.",
        },
        {
          stepNumber: 2,
          description: "Combine like terms on the left.",
          workingLatex: "10x - 5 - 3x - 6 = 7x - 11",
          explanation:
            "Collect: 10x - 3x = 7x and -5 - 6 = -11, so the left side is 7x - 11.",
        },
        {
          stepNumber: 3,
          description: "Expand the right side.",
          workingLatex: "4(x - 1) = 4x - 4 \\Rightarrow 7x - 11 = 4x - 4",
          explanation:
            "4(x - 1) = 4x - 4. The equation is now 7x - 11 = 4x - 4.",
        },
        {
          stepNumber: 4,
          description: "Subtract 4x from both sides (collect on the left).",
          workingLatex: "7x - 4x - 11 = -4 \\Rightarrow 3x - 11 = -4",
          explanation:
            "The larger x-term is 7x on the left, so collect there: 7x - 4x = 3x, keeping the coefficient positive.",
        },
        {
          stepNumber: 5,
          description: "Add 11, divide by 3, and check.",
          workingLatex: "3x = 7 \\Rightarrow x = \\frac{7}{3}",
          explanation:
            "Add 11 to both sides to get 3x = 7, then divide by 3. Check: left = 5(2 \\cdot 7/3 - 1) - 3(7/3 + 2) = 5 \\cdot \\frac{11}{3} - 3 \\cdot \\frac{13}{3} = \\frac{55 - 39}{3} = \\frac{16}{3}; right = 4(7/3 - 1) = 4 \\cdot \\frac{4}{3} = \\frac{16}{3}.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{7}{3}\\)",
      canonicalAnswer: "x=7/3",
    },
  },
  {
    id: "ga37-028",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Ravi is \\(x\\) years old. His sister is 4 years older than him. In 6 years' time, three times Ravi's current age will equal twice his sister's age in 6 years' time. Form an equation and find \\(x\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "forming equations", "age problem", "form and solve"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write expressions for the ages described.",
          workingLatex: "\\text{Ravi now} = x, \\quad \\text{sister now} = x + 4, \\quad \\text{sister in 6 yrs} = x + 10",
          explanation:
            "Ravi is x; his sister is 4 years older, so x + 4. In 6 years the sister will be (x + 4) + 6 = x + 10. 'Three times Ravi's current age' is 3x.",
        },
        {
          stepNumber: 2,
          description: "Translate the condition into an equation.",
          workingLatex: "3x = 2(x + 10)",
          explanation:
            "'Three times Ravi's current age equals twice his sister's age in 6 years' time' becomes 3x = 2(x + 10). The unknown will appear on both sides once the bracket is expanded.",
        },
        {
          stepNumber: 3,
          description: "Expand the bracket.",
          workingLatex: "3x = 2x + 20",
          explanation:
            "2(x + 10) = 2x + 20, giving a standard both-sides equation.",
        },
        {
          stepNumber: 4,
          description: "Subtract 2x from both sides.",
          workingLatex: "3x - 2x = 20 \\Rightarrow x = 20",
          explanation:
            "Collect onto the left (3x is larger): 3x - 2x = x, which gives x = 20 directly.",
        },
        {
          stepNumber: 5,
          description: "Check in context.",
          workingLatex: "3(20) = 60, \\quad 2(20 + 10) = 60",
          explanation:
            "Ravi is 20. Three times his current age is 60; his sister will be 30 in 6 years, and twice that is 60. Both sides equal 60.",
        },
      ],
      finalAnswer: "\\(x = 20\\)",
      canonicalAnswer: "x=20",
    },
  },
  {
    id: "ga37-029",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Solve \\(\\dfrac{4x - 1}{3} - \\dfrac{x + 2}{2} = x - 3\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "fractional coefficient", "clear denominators", "negative bracket"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply every term by 6 (the LCM of 3 and 2).",
          workingLatex: "6 \\cdot \\frac{4x - 1}{3} - 6 \\cdot \\frac{x + 2}{2} = 6 \\cdot (x - 3)",
          explanation:
            "The common denominator of 3 and 2 is 6. Multiplying every term by 6 clears both fractions and scales the right side; keep each numerator bracketed so the subtraction is handled correctly.",
        },
        {
          stepNumber: 2,
          description: "Simplify each term.",
          workingLatex: "2(4x - 1) - 3(x + 2) = 6(x - 3)",
          explanation:
            "6 ÷ 3 = 2 multiplies the first numerator and 6 ÷ 2 = 3 multiplies the second. The middle term keeps its leading minus sign in front of the 3(x + 2).",
        },
        {
          stepNumber: 3,
          description: "Expand all brackets, watching the negative.",
          workingLatex: "8x - 2 - 3x - 6 = 6x - 18",
          explanation:
            "2(4x - 1) = 8x - 2; -3(x + 2) = -3x - 6 (both signs come from the -3); 6(x - 3) = 6x - 18.",
        },
        {
          stepNumber: 4,
          description: "Combine like terms on the left.",
          workingLatex: "5x - 8 = 6x - 18",
          explanation:
            "Collect: 8x - 3x = 5x and -2 - 6 = -8, so the left side simplifies to 5x - 8.",
        },
        {
          stepNumber: 5,
          description: "Subtract 5x from both sides (collect on the right).",
          workingLatex: "-8 = 6x - 5x - 18 \\Rightarrow -8 = x - 18",
          explanation:
            "The larger x-term is 6x on the right, so collect there: 6x - 5x = x, keeping the coefficient positive.",
        },
        {
          stepNumber: 6,
          description: "Add 18 and check.",
          workingLatex: "-8 + 18 = x \\Rightarrow x = 10",
          explanation:
            "Add 18 to both sides to isolate x, giving x = 10. Check: left = (4 \\cdot 10 - 1)/3 - (10 + 2)/2 = 39/3 - 12/2 = 13 - 6 = 7; right = 10 - 3 = 7.",
        },
      ],
      finalAnswer: "\\(x = 10\\)",
      canonicalAnswer: "x=10",
    },
  },
  {
    id: "ga37-030",
    topicRef: "ga37",
    topicTitle: "Linear equations with the unknown on both sides",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "An isosceles triangle has two equal sides of length \\((3x - 2)\\) cm and a base of \\((x + 6)\\) cm. A separate rectangle has perimeter equal to this triangle's perimeter; the rectangle's perimeter is \\((6x - 4)\\) cm. Find \\(x\\) and hence the perimeter.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear equations unknown on both sides", "forming equations", "perimeter", "geometry context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the perimeter of the isosceles triangle.",
          workingLatex: "P_{\\text{tri}} = 2(3x - 2) + (x + 6)",
          explanation:
            "An isosceles triangle has two equal sides plus the base, so its perimeter is 2 × (equal side) + base = 2(3x - 2) + (x + 6).",
        },
        {
          stepNumber: 2,
          description: "Expand and simplify the triangle's perimeter.",
          workingLatex: "6x - 4 + x + 6 = 7x + 2",
          explanation:
            "2(3x - 2) = 6x - 4, and adding the base x + 6 gives 6x - 4 + x + 6. Collect: 6x + x = 7x and -4 + 6 = 2, so the perimeter is 7x + 2.",
        },
        {
          stepNumber: 3,
          description: "Set the triangle's perimeter equal to the rectangle's.",
          workingLatex: "7x + 2 = 6x - 4",
          explanation:
            "The two perimeters are equal, giving an equation with x on both sides.",
        },
        {
          stepNumber: 4,
          description: "Subtract 6x from both sides.",
          workingLatex: "7x - 6x + 2 = -4 \\Rightarrow x + 2 = -4",
          explanation:
            "Collect onto the left (7x is larger): 7x - 6x = x, keeping the coefficient positive.",
        },
        {
          stepNumber: 5,
          description: "Subtract 2 to solve for x.",
          workingLatex: "x = -4 - 2 = -6",
          explanation:
            "Subtracting 2 gives x = -6. The algebra is fine, but x is negative — for a geometry problem we must check whether this produces sensible (positive) lengths.",
        },
        {
          stepNumber: 6,
          description: "Interpret the result and state the conclusion.",
          workingLatex: "3x - 2 = 3(-6) - 2 = -20 < 0 \\;\\Rightarrow\\; x = -6 \\text{ rejected}",
          explanation:
            "With x = -6 the equal side 3x - 2 = -20 cm, which is impossible for a length. The equation does balance (check: 7(-6) + 2 = -40 and 6(-6) - 4 = -40), but because it forces negative side lengths, x = -6 must be rejected: there is no positive value of x for which these perimeters are equal, so the configuration described cannot occur.",
        },
      ],
      finalAnswer: "\\(x = -6\\) (rejected: gives negative lengths)",
      canonicalAnswer: "x=-6",
    },
  },
];
