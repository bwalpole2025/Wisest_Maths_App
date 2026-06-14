/**
 * Topic: Solving linear inequalities
 * Ref: ga46  (DfE A22)
 * Strand: Algebra — GCSE Maths (tier: Both)
 *
 * Coverage: solving linear inequalities and representing the solution as a
 *   range of values. Key ideas used throughout — an inequality is solved with
 *   the SAME balancing moves as an equation (add/subtract the same from both
 *   sides; multiply/divide both sides by the same number), with ONE crucial
 *   extra rule: multiplying or dividing both sides by a NEGATIVE number REVERSES
 *   the inequality sign (\\(<\\) becomes \\(>\\), \\(\\le\\) becomes \\(\\ge\\)).
 *   Clusters:
 *   (1) one-step inequalities (add/subtract, or divide by a positive);
 *   (2) two-step inequalities;
 *   (3) unknown on BOTH sides;
 *   (4) the SIGN FLIP when multiplying/dividing by a negative (a recurring,
 *       emphasised trap);
 *   (5) compound/double inequalities a < expr ≤ b — operate on all three parts;
 *   (6) brackets / fractional coefficients first, then solve;
 *   (7) list the INTEGER values satisfying an inequality (and "smallest integer
 *       n such that…") and worded contexts.
 *   Solutions stress: do the SAME thing to both sides; flip the sign only when
 *   you multiply/divide by a negative; for double inequalities operate on all
 *   three parts together; state the final solution set clearly; and CHECK a
 *   value inside the solution set (and, where useful, just outside the boundary).
 *
 * Difficulty split (30 total):
 *   - Foundation: ga46-001 .. ga46-004  (4)   cleanest one/two-step items
 *   - Standard:   ga46-005 .. ga46-018  (14)
 *   - Challenge:  ga46-019 .. ga46-030  (12)
 * Id range: ga46-001 .. ga46-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules. Inequality symbols use \\le, \\ge,
 *   < and >.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga46-001",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Foundation",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(x + 3 < 7\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "one-step", "subtract"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide which operation undoes the +3.",
          workingLatex: "x + 3 < 7",
          explanation:
            "Solving an inequality uses exactly the same balancing moves as solving an equation: whatever you do to one side, do to the other. Here x has 3 added to it, so to get x on its own we need to subtract 3.",
        },
        {
          stepNumber: 2,
          description: "Subtract 3 from both sides.",
          workingLatex: "x + 3 - 3 < 7 - 3",
          explanation:
            "Take 3 away from each side. We are only adding/subtracting (not multiplying or dividing by a negative), so the inequality sign stays exactly as it is: still <.",
        },
        {
          stepNumber: 3,
          description: "Simplify both sides.",
          workingLatex: "x < 4",
          explanation:
            "On the left +3 - 3 cancels to leave x; on the right 7 - 3 = 4. This is the solution: every number less than 4 works.",
        },
        {
          stepNumber: 4,
          description: "Check a value inside and the boundary.",
          workingLatex: "x = 3:\\; 3 + 3 = 6 < 7 \\;\\checkmark \\qquad x = 5:\\; 5 + 3 = 8 \\not< 7",
          explanation:
            "Test x = 3 (inside the solution): 6 < 7 is true. Test x = 5 (outside): 8 is not less than 7, so 5 is correctly excluded. The answer behaves as expected.",
        },
      ],
      finalAnswer: "\\(x < 4\\)",
      canonicalAnswer: "x<4",
    },
  },
  {
    id: "ga46-002",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Foundation",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(x - 5 \\ge 2\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "one-step", "add"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide which operation undoes the −5.",
          workingLatex: "x - 5 \\ge 2",
          explanation:
            "x currently has 5 subtracted from it. The inverse of subtracting 5 is adding 5, so that is the move that will leave x by itself.",
        },
        {
          stepNumber: 2,
          description: "Add 5 to both sides.",
          workingLatex: "x - 5 + 5 \\ge 2 + 5",
          explanation:
            "Add 5 to each side. Adding the same amount to both sides keeps the inequality true and never changes its direction, so the sign stays \\ge.",
        },
        {
          stepNumber: 3,
          description: "Simplify both sides.",
          workingLatex: "x \\ge 7",
          explanation:
            "On the left -5 + 5 cancels to leave x; on the right 2 + 5 = 7. The \\ge sign means 7 itself is included in the solution.",
        },
        {
          stepNumber: 4,
          description: "Check the boundary value.",
          workingLatex: "x = 7:\\; 7 - 5 = 2 \\ge 2 \\;\\checkmark",
          explanation:
            "Test the boundary x = 7: 7 - 5 = 2, and 2 \\ge 2 is true, confirming that 7 is correctly included.",
        },
      ],
      finalAnswer: "\\(x \\ge 7\\)",
      canonicalAnswer: "x>=7",
    },
  },
  {
    id: "ga46-003",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Foundation",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(3x \\le 12\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "one-step", "divide by positive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide which operation undoes the ×3.",
          workingLatex: "3x \\le 12",
          explanation:
            "x is multiplied by 3. The inverse of multiplying by 3 is dividing by 3, so dividing both sides by 3 will isolate x.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 3.",
          workingLatex: "\\frac{3x}{3} \\le \\frac{12}{3}",
          explanation:
            "Divide each side by 3. Crucially, 3 is POSITIVE, so the inequality sign does NOT flip — it stays \\le. (You only reverse the sign when dividing by a negative.)",
        },
        {
          stepNumber: 3,
          description: "Simplify both sides.",
          workingLatex: "x \\le 4",
          explanation:
            "On the left 3x \\div 3 = x; on the right 12 \\div 3 = 4. The solution is every number up to and including 4.",
        },
        {
          stepNumber: 4,
          description: "Check the boundary value.",
          workingLatex: "x = 4:\\; 3 \\cdot 4 = 12 \\le 12 \\;\\checkmark",
          explanation:
            "Test the boundary x = 4: 3 \\times 4 = 12, and 12 \\le 12 is true, so 4 is correctly included.",
        },
      ],
      finalAnswer: "\\(x \\le 4\\)",
      canonicalAnswer: "x<=4",
    },
  },
  {
    id: "ga46-004",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Foundation",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(2x + 1 > 9\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "two-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 1 from both sides.",
          workingLatex: "2x + 1 - 1 > 9 - 1",
          explanation:
            "This is a two-step inequality, so undo the operations in reverse order: deal with the +1 first. Subtract 1 from each side; adding/subtracting never changes the direction of the sign.",
        },
        {
          stepNumber: 2,
          description: "Simplify to isolate the x-term.",
          workingLatex: "2x > 8",
          explanation:
            "On the left +1 - 1 cancels, leaving 2x; on the right 9 - 1 = 8. Now only the multiplication by 2 remains to be undone.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 2 (positive, no flip).",
          workingLatex: "\\frac{2x}{2} > \\frac{8}{2}",
          explanation:
            "Divide each side by 2 to undo the ×2. Because 2 is positive, the > sign is unchanged.",
        },
        {
          stepNumber: 4,
          description: "Simplify and check.",
          workingLatex: "x > 4",
          explanation:
            "2x \\div 2 = x and 8 \\div 2 = 4. Check x = 5: 2(5) + 1 = 11 > 9, true; x = 4 gives 9, which is not > 9, so the boundary is correctly excluded.",
        },
      ],
      finalAnswer: "\\(x > 4\\)",
      canonicalAnswer: "x>4",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga46-005",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(4x - 3 \\ge 13\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "two-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Plan the two steps.",
          workingLatex: "4x - 3 \\ge 13",
          explanation:
            "This is a two-step inequality. Undo the operations in reverse: deal with the -3 first, then the multiplication by 4. The \\ge sign will only ever move if we divide by a negative, which we won't here.",
        },
        {
          stepNumber: 2,
          description: "Add 3 to both sides.",
          workingLatex: "4x \\ge 16",
          explanation:
            "Add 3 to each side to remove the -3: on the right 13 + 3 = 16. Adding the same number to both sides never changes the direction of the inequality.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 4 (positive, no flip).",
          workingLatex: "\\frac{4x}{4} \\ge \\frac{16}{4}",
          explanation:
            "Divide both sides by 4 to isolate x. Since 4 is positive, the \\ge sign is unchanged.",
        },
        {
          stepNumber: 4,
          description: "Simplify and check the boundary.",
          workingLatex: "x \\ge 4",
          explanation:
            "4x \\div 4 = x and 16 \\div 4 = 4, so x \\ge 4. Check the boundary x = 4: 4(4) - 3 = 13 \\ge 13, true, so 4 is included.",
        },
      ],
      finalAnswer: "\\(x \\ge 4\\)",
      canonicalAnswer: "x>=4",
    },
  },
  {
    id: "ga46-006",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(5x + 7 < 2x + 19\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "unknown both sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 2x from both sides to collect x-terms.",
          workingLatex: "5x + 7 - 2x < 2x + 19 - 2x",
          explanation:
            "With x on both sides, move all the x-terms to one side. Subtracting 2x from each side removes x from the right and keeps the larger x-coefficient positive on the left, so we'll avoid dividing by a negative.",
        },
        {
          stepNumber: 2,
          description: "Simplify both sides.",
          workingLatex: "3x + 7 < 19",
          explanation:
            "5x - 2x = 3x on the left; on the right the x-terms cancel, leaving 19. It is now an ordinary two-step inequality.",
        },
        {
          stepNumber: 3,
          description: "Subtract 7 from both sides.",
          workingLatex: "3x < 12",
          explanation:
            "Remove the +7 by subtracting 7 from each side: 19 - 7 = 12. This leaves just the x-term on the left.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 3 (positive, no flip).",
          workingLatex: "x < 4",
          explanation:
            "Dividing by the positive number 3 keeps the < sign: 12 \\div 3 = 4. Check x = 0: 7 < 19, true; x = 4 gives 27 < 27, false, so 4 is correctly excluded.",
        },
      ],
      finalAnswer: "\\(x < 4\\)",
      canonicalAnswer: "x<4",
    },
  },
  {
    id: "ga46-007",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(-2x > 6\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "sign flip", "divide by negative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide how to isolate x.",
          workingLatex: "-2x > 6",
          explanation:
            "x is multiplied by -2. To undo this we must divide both sides by -2 — and because that divisor is NEGATIVE, the inequality sign will have to be reversed.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by −2 and FLIP the sign.",
          workingLatex: "\\frac{-2x}{-2} \\; \\boxed{<} \\; \\frac{6}{-2}",
          explanation:
            "Dividing by a negative reverses the inequality, so > becomes <. This is the single most important rule for inequalities, and forgetting to flip is the most common mistake students make here.",
        },
        {
          stepNumber: 3,
          description: "Simplify both sides.",
          workingLatex: "x < -3",
          explanation:
            "On the left -2x \\div -2 = x; on the right 6 \\div (-2) = -3. So the solution is x < -3.",
        },
        {
          stepNumber: 4,
          description: "Check a value inside and the boundary.",
          workingLatex: "x = -4:\\; -2(-4) = 8 > 6 \\;\\checkmark \\qquad x = 0:\\; 0 \\not> 6",
          explanation:
            "Test x = -4 (inside): -2 \\times -4 = 8 > 6, true. Test x = 0 (outside): 0 is not > 6, so 0 is correctly excluded — confirming the flipped direction is right.",
        },
      ],
      finalAnswer: "\\(x < -3\\)",
      canonicalAnswer: "x<-3",
    },
  },
  {
    id: "ga46-008",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(8 - 3x \\le 20\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "sign flip", "divide by negative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 8 from both sides.",
          workingLatex: "8 - 3x - 8 \\le 20 - 8",
          explanation:
            "Remove the constant 8 from the left by subtracting 8 from each side. Subtracting does not affect the direction of the inequality.",
        },
        {
          stepNumber: 2,
          description: "Simplify both sides.",
          workingLatex: "-3x \\le 12",
          explanation:
            "On the left 8 - 8 cancels, leaving -3x; on the right 20 - 8 = 12. The coefficient of x is negative, which will matter at the next step.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by −3 and FLIP the sign.",
          workingLatex: "\\frac{-3x}{-3} \\; \\boxed{\\ge} \\; \\frac{12}{-3}",
          explanation:
            "Dividing by the negative number -3 reverses the inequality, so \\le becomes \\ge. Set up the division on both sides before simplifying so the flip is clearly justified.",
        },
        {
          stepNumber: 4,
          description: "Simplify and check.",
          workingLatex: "x \\ge -4",
          explanation:
            "-3x \\div -3 = x and 12 \\div (-3) = -4, so x \\ge -4. Check x = 0: 8 \\le 20, true; x = -5 (outside): 8 + 15 = 23, not \\le 20, so -5 is correctly excluded; boundary x = -4: 8 + 12 = 20 \\le 20, included.",
        },
      ],
      finalAnswer: "\\(x \\ge -4\\)",
      canonicalAnswer: "x>=-4",
    },
  },
  {
    id: "ga46-009",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(\\dfrac{x}{4} + 2 \\ge 5\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "two-step", "fractional coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 2 from both sides.",
          workingLatex: "\\frac{x}{4} + 2 - 2 \\ge 5 - 2",
          explanation:
            "Deal with the +2 first by subtracting 2 from each side. This leaves the x-term (a quarter of x) on its own.",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "\\frac{x}{4} \\ge 3",
          explanation:
            "On the left +2 - 2 cancels, leaving x/4; on the right 5 - 2 = 3. Now only the division by 4 remains.",
        },
        {
          stepNumber: 3,
          description: "Multiply both sides by 4 (positive, no flip).",
          workingLatex: "x \\ge 3 \\cdot 4",
          explanation:
            "x \\div 4 is undone by multiplying both sides by 4. Multiplying by the positive number 4 does not change the direction of the inequality.",
        },
        {
          stepNumber: 4,
          description: "Simplify and check.",
          workingLatex: "x \\ge 12",
          explanation:
            "3 \\times 4 = 12, so the solution is x \\ge 12. Check the boundary x = 12: 12/4 + 2 = 3 + 2 = 5 \\ge 5, true.",
        },
      ],
      finalAnswer: "\\(x \\ge 12\\)",
      canonicalAnswer: "x>=12",
    },
  },
  {
    id: "ga46-010",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(3(x - 2) < 9\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket.",
          workingLatex: "3x - 6 < 9",
          explanation:
            "Multiply everything inside the bracket by 3: 3 \\cdot x = 3x and 3 \\cdot (-2) = -6. (Alternatively you could divide both sides by 3 first; expanding is shown here.)",
        },
        {
          stepNumber: 2,
          description: "Add 6 to both sides.",
          workingLatex: "3x < 15",
          explanation:
            "Remove the -6 by adding 6 to each side: 9 + 6 = 15. Adding does not change the direction of the sign.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 3 (positive, no flip).",
          workingLatex: "x < 5",
          explanation:
            "Dividing by the positive number 3 keeps the < sign: 15 \\div 3 = 5. Check x = 4: 3(4 - 2) = 6 < 9, true; x = 5 gives 9, not < 9, so 5 is correctly excluded.",
        },
      ],
      finalAnswer: "\\(x < 5\\)",
      canonicalAnswer: "x<5",
    },
  },
  {
    id: "ga46-011",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(7x - 4 \\le 9x + 2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "unknown both sides", "sign flip"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 7x from both sides.",
          workingLatex: "7x - 4 - 7x \\le 9x + 2 - 7x",
          explanation:
            "There is x on both sides. Subtracting the smaller x-term, 7x, moves the x's to the right where the coefficient (9 - 7 = 2) stays positive. Choosing this side now avoids ever dividing by a negative.",
        },
        {
          stepNumber: 2,
          description: "Simplify both sides.",
          workingLatex: "-4 \\le 2x + 2",
          explanation:
            "On the left the x-terms cancel, leaving -4; on the right 9x - 7x = 2x, so it becomes 2x + 2.",
        },
        {
          stepNumber: 3,
          description: "Subtract 2 from both sides.",
          workingLatex: "-6 \\le 2x",
          explanation:
            "Remove the +2 from the right by subtracting 2 from both sides: -4 - 2 = -6.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2 (positive, no flip).",
          workingLatex: "-3 \\le x",
          explanation:
            "Dividing by the positive number 2 keeps the \\le sign: -6 \\div 2 = -3. The unknown is now isolated, but it is on the right.",
        },
        {
          stepNumber: 5,
          description: "Rewrite with x on the left and check.",
          workingLatex: "x \\ge -3",
          explanation:
            "'-3 \\le x' reads 'x is at least -3', which is the same as x \\ge -3 (flip the whole statement, and the sign points the other way). Check x = 0: -4 \\le 2, true; x = -4 (outside): -32 \\le -34 is false, so -4 is correctly excluded.",
        },
      ],
      finalAnswer: "\\(x \\ge -3\\)",
      canonicalAnswer: "x>=-3",
    },
  },
  {
    id: "ga46-012",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(4 - x > 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "sign flip"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 4 from both sides.",
          workingLatex: "4 - x - 4 > 1 - 4",
          explanation:
            "Remove the 4 by subtracting 4 from each side. Subtracting is safe — it does not change the direction of the inequality.",
        },
        {
          stepNumber: 2,
          description: "Simplify both sides.",
          workingLatex: "-x > -3",
          explanation:
            "On the left 4 - 4 cancels, leaving -x; on the right 1 - 4 = -3. The x-term is negative, so the next move needs care.",
        },
        {
          stepNumber: 3,
          description: "Multiply both sides by −1 and FLIP the sign.",
          workingLatex: "x \\; \\boxed{<} \\; 3",
          explanation:
            "To turn -x into x we multiply both sides by -1, which is negative, so the > sign reverses to <. The right side -3 becomes +3, giving x < 3.",
        },
        {
          stepNumber: 4,
          description: "Check a value inside and the boundary.",
          workingLatex: "x = 2:\\; 4 - 2 = 2 > 1 \\;\\checkmark \\qquad x = 3:\\; 4 - 3 = 1 \\not> 1",
          explanation:
            "Test x = 2 (inside): 2 > 1, true. Test x = 3 (boundary): 4 - 3 = 1, not > 1, so 3 is correctly excluded.",
        },
      ],
      finalAnswer: "\\(x < 3\\)",
      canonicalAnswer: "x<3",
    },
  },
  {
    id: "ga46-013",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the double inequality \\(1 < x + 4 \\le 6\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "double inequality", "compound"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the three-part structure.",
          workingLatex: "1 < x + 4 \\le 6",
          explanation:
            "A double inequality is really two inequalities sharing a middle. Solve it by doing the same operation to ALL THREE parts at once, keeping x in the middle on its own.",
        },
        {
          stepNumber: 2,
          description: "Subtract 4 from each part.",
          workingLatex: "1 - 4 < x + 4 - 4 \\le 6 - 4",
          explanation:
            "To isolate x in the middle, undo the +4 by subtracting 4 from the left part, the middle, and the right part. Forgetting one of the outer parts is the classic slip here.",
        },
        {
          stepNumber: 3,
          description: "Simplify and check.",
          workingLatex: "-3 < x \\le 2",
          explanation:
            "1 - 4 = -3 on the left, the middle becomes x, and 6 - 4 = 2 on the right. So x lies between -3 (excluded) and 2 (included). Check x = 0: 1 < 4 \\le 6, true; upper boundary x = 2: 1 < 6 \\le 6, true; x = -3 gives 1 < 1, false, so -3 is correctly excluded.",
        },
      ],
      finalAnswer: "\\(-3 < x \\le 2\\)",
      canonicalAnswer: "-3<x<=2",
    },
  },
  {
    id: "ga46-014",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the double inequality \\(-4 \\le 2x \\le 10\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "double inequality", "compound"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the operation needed.",
          workingLatex: "-4 \\le 2x \\le 10",
          explanation:
            "x in the middle is multiplied by 2, so divide every part by 2 to isolate it. Since 2 is positive, none of the signs will flip.",
        },
        {
          stepNumber: 2,
          description: "Divide all three parts by 2.",
          workingLatex: "\\frac{-4}{2} \\le \\frac{2x}{2} \\le \\frac{10}{2}",
          explanation:
            "Apply the division to the left part, the middle, and the right part together — treat the three-part chain as a single object.",
        },
        {
          stepNumber: 3,
          description: "Simplify and check.",
          workingLatex: "-2 \\le x \\le 5",
          explanation:
            "-4 \\div 2 = -2, 2x \\div 2 = x, and 10 \\div 2 = 5. So x is between -2 and 5, both included. Check x = 0: -4 \\le 0 \\le 10, true; check x = 5: -4 \\le 10 \\le 10, true.",
        },
      ],
      finalAnswer: "\\(-2 \\le x \\le 5\\)",
      canonicalAnswer: "-2<=x<=5",
    },
  },
  {
    id: "ga46-015",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "List all the integer values of \\(x\\) that satisfy \\(-2 \\le x < 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "integer values", "list integers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the lower boundary.",
          workingLatex: "-2 \\le x \\;\\Rightarrow\\; x \\text{ can equal } -2",
          explanation:
            "The sign \\le means 'greater than or equal to', so the smallest allowed integer is -2 itself — it is INCLUDED because of the line under the inequality.",
        },
        {
          stepNumber: 2,
          description: "Identify the upper boundary.",
          workingLatex: "x < 3 \\;\\Rightarrow\\; x \\text{ cannot equal } 3",
          explanation:
            "The sign < means 'strictly less than', so 3 is EXCLUDED. The largest integer that still satisfies x < 3 is therefore 2.",
        },
        {
          stepNumber: 3,
          description: "List every integer between the boundaries.",
          workingLatex: "x \\in \\{ -2, -1, 0, 1, 2 \\}",
          explanation:
            "Enumerate the integers from -2 up to 2 inclusive. Take care with the endpoints: -2 is in (because of \\le) but 3 is out (because of <).",
        },
      ],
      finalAnswer: "\\(-2,\\ -1,\\ 0,\\ 1,\\ 2\\)",
      canonicalAnswer: "{-2,-1,0,1,2}",
    },
  },
  {
    id: "ga46-016",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(2(3x + 1) \\ge 4x + 10\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "brackets", "unknown both sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket on the left.",
          workingLatex: "6x + 2 \\ge 4x + 10",
          explanation:
            "Multiply each term inside the bracket by 2: 2 \\cdot 3x = 6x and 2 \\cdot 1 = 2. Both terms get multiplied — don't multiply only the first.",
        },
        {
          stepNumber: 2,
          description: "Subtract 4x from both sides.",
          workingLatex: "2x + 2 \\ge 10",
          explanation:
            "Collect the x-terms on the left (keeping the coefficient positive): 6x - 4x = 2x. On the right the 4x is removed.",
        },
        {
          stepNumber: 3,
          description: "Subtract 2 from both sides.",
          workingLatex: "2x \\ge 8",
          explanation:
            "Remove the +2 from the left by subtracting 2 from each side: 10 - 2 = 8.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2 (positive, no flip).",
          workingLatex: "x \\ge 4",
          explanation:
            "Dividing by the positive number 2 keeps \\ge: 8 \\div 2 = 4. Check the boundary x = 4: 2(13) = 26 and 4(4) + 10 = 26, so 26 \\ge 26, true.",
        },
      ],
      finalAnswer: "\\(x \\ge 4\\)",
      canonicalAnswer: "x>=4",
    },
  },
  {
    id: "ga46-017",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the smallest integer \\(n\\) such that \\(5n + 3 > 28\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "smallest integer", "integer values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 3 from both sides.",
          workingLatex: "5n > 25",
          explanation:
            "Treat it as an inequality first. Subtract 3 from both sides to leave the n-term alone: 28 - 3 = 25.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 5 (positive, no flip).",
          workingLatex: "n > 5",
          explanation:
            "Dividing by the positive number 5 keeps the > sign: 25 \\div 5 = 5, giving n > 5.",
        },
        {
          stepNumber: 3,
          description: "Pick the smallest integer strictly greater than 5.",
          workingLatex: "n = 6",
          explanation:
            "Because the sign is strict (>), n = 5 is NOT allowed — it would give exactly 28, not more. The smallest integer greater than 5 is 6. Check n = 6: 5(6) + 3 = 33 > 28, true; n = 5 gives 28, not > 28.",
        },
      ],
      finalAnswer: "\\(n = 6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga46-018",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(\\dfrac{2x - 1}{3} \\le 5\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "fractional coefficient", "two-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply both sides by 3 to clear the fraction.",
          workingLatex: "2x - 1 \\le 15",
          explanation:
            "The WHOLE left side is divided by 3, so multiply both sides by 3 to remove the denominator: 5 \\cdot 3 = 15. Multiplying by the positive number 3 does not flip the sign. (The bracket of the numerator stays intact.)",
        },
        {
          stepNumber: 2,
          description: "Add 1 to both sides.",
          workingLatex: "2x \\le 16",
          explanation:
            "Undo the -1 by adding 1 to each side: 15 + 1 = 16.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 2 (positive, no flip).",
          workingLatex: "x \\le 8",
          explanation:
            "Dividing by the positive number 2 keeps \\le: 16 \\div 2 = 8. Check the boundary x = 8: (2(8) - 1)/3 = 15/3 = 5 \\le 5, true.",
        },
      ],
      finalAnswer: "\\(x \\le 8\\)",
      canonicalAnswer: "x<=8",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga46-019",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(3(2 - x) > x - 6\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "brackets", "unknown both sides", "sign flip"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket on the left.",
          workingLatex: "6 - 3x > x - 6",
          explanation:
            "Multiply each term inside the bracket by 3: 3 \\cdot 2 = 6 and 3 \\cdot (-x) = -3x. Keep the right-hand side unchanged for now.",
        },
        {
          stepNumber: 2,
          description: "Add 3x to both sides to keep x positive.",
          workingLatex: "6 - 3x + 3x > x - 6 + 3x",
          explanation:
            "The x-term on the left is negative. Adding 3x to both sides removes it from the left and makes the x-coefficient on the right positive (x + 3x = 4x), so we will not have to divide by a negative.",
        },
        {
          stepNumber: 3,
          description: "Simplify both sides.",
          workingLatex: "6 > 4x - 6",
          explanation:
            "On the left -3x + 3x cancels, leaving 6; on the right x + 3x = 4x, giving 4x - 6.",
        },
        {
          stepNumber: 4,
          description: "Add 6 to both sides.",
          workingLatex: "12 > 4x",
          explanation:
            "Remove the -6 on the right by adding 6 to both sides: 6 + 6 = 12.",
        },
        {
          stepNumber: 5,
          description: "Divide by 4, then rewrite with x on the left.",
          workingLatex: "3 > x \\quad\\Rightarrow\\quad x < 3",
          explanation:
            "Dividing by the positive number 4 keeps the sign: 12 \\div 4 = 3. '3 > x' means 'x is less than 3', i.e. x < 3. Check x = 0: 3(2) = 6 > -6, true; x = 3 gives 3(-1) = -3 and 3 - 6 = -3, so -3 > -3 is false — 3 correctly excluded.",
        },
      ],
      finalAnswer: "\\(x < 3\\)",
      canonicalAnswer: "x<3",
    },
  },
  {
    id: "ga46-020",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(\\dfrac{x}{2} - 3 > \\dfrac{x}{5}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "fractional coefficient", "unknown both sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply every term by the LCD, 10.",
          workingLatex: "10 \\cdot \\frac{x}{2} - 10 \\cdot 3 > 10 \\cdot \\frac{x}{5}",
          explanation:
            "The denominators are 2 and 5; their lowest common multiple is 10. Multiplying EVERY term (including the whole-number -3) by 10 clears the fractions. 10 is positive, so the direction is unchanged.",
        },
        {
          stepNumber: 2,
          description: "Simplify each term.",
          workingLatex: "5x - 30 > 2x",
          explanation:
            "10 \\div 2 = 5 gives 5x; 10 \\cdot 3 = 30; and 10 \\div 5 = 2 gives 2x. The fractions are gone.",
        },
        {
          stepNumber: 3,
          description: "Subtract 2x from both sides.",
          workingLatex: "3x - 30 > 0",
          explanation:
            "Collect the x-terms on the left: 5x - 2x = 3x. The right side loses its 2x, becoming 0.",
        },
        {
          stepNumber: 4,
          description: "Add 30 to both sides.",
          workingLatex: "3x > 30",
          explanation:
            "Move the constant across by adding 30 to each side: 0 + 30 = 30.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 3 (positive, no flip) and check.",
          workingLatex: "x > 10",
          explanation:
            "Dividing by the positive number 3 keeps >: 30 \\div 3 = 10. Check x = 20: 20/2 - 3 = 7 and 20/5 = 4, so 7 > 4, true; x = 10 gives 5 - 3 = 2 and 2, so 2 > 2 is false — 10 correctly excluded.",
        },
      ],
      finalAnswer: "\\(x > 10\\)",
      canonicalAnswer: "x>10",
    },
  },
  {
    id: "ga46-021",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(15 - 4x \\ge 2x - 9\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "unknown both sides", "sign flip"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add 4x to both sides to keep x positive.",
          workingLatex: "15 \\ge 6x - 9",
          explanation:
            "The x-term on the left is negative. Adding 4x to both sides removes the -4x and collects the x-terms on the right: 2x + 4x = 6x. Working towards a positive coefficient avoids dividing by a negative later.",
        },
        {
          stepNumber: 2,
          description: "Add 9 to both sides.",
          workingLatex: "24 \\ge 6x",
          explanation:
            "Remove the -9 on the right by adding 9 to both sides: 15 + 9 = 24.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 6 (positive, no flip).",
          workingLatex: "4 \\ge x",
          explanation:
            "Dividing by the positive number 6 keeps the sign: 24 \\div 6 = 4. The unknown is isolated, but on the right.",
        },
        {
          stepNumber: 4,
          description: "Rewrite with x on the left and check.",
          workingLatex: "x \\le 4",
          explanation:
            "'4 \\ge x' means 'x is at most 4', i.e. x \\le 4. Check x = 0: 15 \\ge -9, true; boundary x = 4: 15 - 16 = -1 and 8 - 9 = -1, so -1 \\ge -1, true (included).",
        },
      ],
      finalAnswer: "\\(x \\le 4\\)",
      canonicalAnswer: "x<=4",
    },
  },
  {
    id: "ga46-022",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the double inequality \\(-7 < 3x + 2 \\le 11\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "double inequality", "compound"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 2 from all three parts.",
          workingLatex: "-7 - 2 < 3x + 2 - 2 \\le 11 - 2",
          explanation:
            "To isolate x in the middle, first undo the +2. Whatever you do to the middle you must also do to BOTH outer parts.",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "-9 < 3x \\le 9",
          explanation:
            "-7 - 2 = -9 on the left and 11 - 2 = 9 on the right; the middle becomes 3x.",
        },
        {
          stepNumber: 3,
          description: "Divide all three parts by 3 (positive, no flip).",
          workingLatex: "\\frac{-9}{3} < \\frac{3x}{3} \\le \\frac{9}{3}",
          explanation:
            "Divide every part by 3 to leave x in the middle. Since 3 is positive, no signs reverse.",
        },
        {
          stepNumber: 4,
          description: "Simplify and check.",
          workingLatex: "-3 < x \\le 3",
          explanation:
            "-9 \\div 3 = -3, 3x \\div 3 = x, and 9 \\div 3 = 3. So -3 < x \\le 3. Check x = 0: -7 < 2 \\le 11, true; upper boundary x = 3: -7 < 11 \\le 11, true; x = -3 gives 3x + 2 = -7, and -7 < -7 is false, so -3 is correctly excluded.",
        },
      ],
      finalAnswer: "\\(-3 < x \\le 3\\)",
      canonicalAnswer: "-3<x<=3",
    },
  },
  {
    id: "ga46-023",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "List all the integer values of \\(x\\) that satisfy \\(4x - 1 < 19\\) and \\(x + 6 \\ge 4\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "integer values", "list integers", "two inequalities"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Solve the first inequality.",
          workingLatex: "4x - 1 < 19 \\;\\Rightarrow\\; 4x < 20 \\;\\Rightarrow\\; x < 5",
          explanation:
            "Add 1 to both sides to get 4x < 20, then divide by the positive number 4 (no flip): 20 \\div 4 = 5, so x < 5.",
        },
        {
          stepNumber: 2,
          description: "Solve the second inequality.",
          workingLatex: "x + 6 \\ge 4 \\;\\Rightarrow\\; x \\ge -2",
          explanation:
            "Subtract 6 from both sides: 4 - 6 = -2, so x \\ge -2.",
        },
        {
          stepNumber: 3,
          description: "Combine the two conditions.",
          workingLatex: "-2 \\le x < 5",
          explanation:
            "x must satisfy BOTH inequalities, so it lies in their overlap: at least -2 (included, because \\ge) and less than 5 (excluded, because <).",
        },
        {
          stepNumber: 4,
          description: "List the integers in this range.",
          workingLatex: "x \\in \\{ -2, -1, 0, 1, 2, 3, 4 \\}",
          explanation:
            "Enumerate from -2 (included) up to 4 (since 5 is excluded by the strict <). That gives seven integers.",
        },
      ],
      finalAnswer: "\\(-2,\\ -1,\\ 0,\\ 1,\\ 2,\\ 3,\\ 4\\)",
      canonicalAnswer: "{-2,-1,0,1,2,3,4}",
    },
  },
  {
    id: "ga46-024",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(\\dfrac{4 - 2x}{3} \\ge 2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "fractional coefficient", "sign flip", "divide by negative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply both sides by 3 to clear the fraction.",
          workingLatex: "4 - 2x \\ge 6",
          explanation:
            "The whole left side is over 3, so multiply both sides by 3: 2 \\cdot 3 = 6. Multiplying by the positive number 3 keeps the \\ge sign.",
        },
        {
          stepNumber: 2,
          description: "Subtract 4 from both sides.",
          workingLatex: "-2x \\ge 2",
          explanation:
            "Remove the 4 by subtracting 4 from each side: 6 - 4 = 2. The left becomes -2x. Notice the coefficient of x is now negative.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by −2 and FLIP the sign.",
          workingLatex: "\\frac{-2x}{-2} \\; \\boxed{\\le} \\; \\frac{2}{-2}",
          explanation:
            "Now we divide by -2, a NEGATIVE number, so the inequality reverses: \\ge becomes \\le. Set up the division on both sides so the flip is clearly justified.",
        },
        {
          stepNumber: 4,
          description: "Simplify and check.",
          workingLatex: "x \\le -1",
          explanation:
            "-2x \\div -2 = x and 2 \\div (-2) = -1, giving x \\le -1. Check x = -1: (4 - 2(-1))/3 = (4 + 2)/3 = 6/3 = 2 \\ge 2, true (included); check x = 0: 4/3 \\approx 1.33, not \\ge 2, so 0 is correctly excluded.",
        },
      ],
      finalAnswer: "\\(x \\le -1\\)",
      canonicalAnswer: "x<=-1",
    },
  },
  {
    id: "ga46-025",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the double inequality \\(2 \\le 8 - 2x < 12\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "double inequality", "compound", "sign flip", "divide by negative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 8 from all three parts.",
          workingLatex: "2 - 8 \\le 8 - 2x - 8 < 12 - 8",
          explanation:
            "Begin isolating x in the middle by removing the 8. Subtract 8 from the left part, the middle, and the right part together.",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "-6 \\le -2x < 4",
          explanation:
            "2 - 8 = -6 and 12 - 8 = 4; in the middle 8 - 8 cancels, leaving -2x. The middle coefficient is negative, so the next step needs the flip rule.",
        },
        {
          stepNumber: 3,
          description: "Divide all three parts by −2 and FLIP BOTH signs.",
          workingLatex: "\\frac{-6}{-2} \\; \\boxed{\\ge} \\; \\frac{-2x}{-2} \\; \\boxed{>} \\; \\frac{4}{-2}",
          explanation:
            "Dividing by -2 (negative) reverses EVERY inequality in the chain: \\le becomes \\ge and < becomes >. Forgetting to flip even one of them is the classic error in double-inequality questions.",
        },
        {
          stepNumber: 4,
          description: "Simplify each part.",
          workingLatex: "3 \\ge x > -2",
          explanation:
            "-6 \\div (-2) = 3, -2x \\div (-2) = x, and 4 \\div (-2) = -2. Reading the chain: x is at most 3 and greater than -2.",
        },
        {
          stepNumber: 5,
          description: "Reorder so the smaller value is on the left, and check.",
          workingLatex: "-2 < x \\le 3",
          explanation:
            "It is conventional to write the range with the smaller number first; reversing the whole chain flips each sign back to point left. Check x = 0: 8 - 0 = 8, and 2 \\le 8 < 12, true; boundary x = 3: 8 - 6 = 2 \\le 2, included; x = -2 gives 8 + 4 = 12, and 12 < 12 is false, so -2 is correctly excluded.",
        },
      ],
      finalAnswer: "\\(-2 < x \\le 3\\)",
      canonicalAnswer: "-2<x<=3",
    },
  },
  {
    id: "ga46-026",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Find the largest integer \\(x\\) that satisfies \\(3(x - 4) < 5x - 2\\) and \\(2x + 1 \\le 9\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "integer values", "two inequalities", "sign flip", "brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first inequality.",
          workingLatex: "3(x - 4) < 5x - 2 \\;\\Rightarrow\\; 3x - 12 < 5x - 2",
          explanation:
            "Multiply out the bracket: 3 \\cdot x = 3x and 3 \\cdot (-4) = -12.",
        },
        {
          stepNumber: 2,
          description: "Subtract 3x to keep the x-coefficient positive.",
          workingLatex: "-12 < 2x - 2",
          explanation:
            "Subtracting 3x from both sides leaves 5x - 3x = 2x on the right — a positive coefficient — so no division by a negative will be needed.",
        },
        {
          stepNumber: 3,
          description: "Add 2, then divide by 2.",
          workingLatex: "-10 < 2x \\;\\Rightarrow\\; -5 < x",
          explanation:
            "Add 2 to both sides: -12 + 2 = -10. Then divide by the positive number 2: -10 \\div 2 = -5, giving -5 < x, i.e. x > -5.",
        },
        {
          stepNumber: 4,
          description: "Solve the second inequality.",
          workingLatex: "2x + 1 \\le 9 \\;\\Rightarrow\\; 2x \\le 8 \\;\\Rightarrow\\; x \\le 4",
          explanation:
            "Subtract 1 from both sides (9 - 1 = 8), then divide by the positive number 2 to get x \\le 4.",
        },
        {
          stepNumber: 5,
          description: "Combine and pick the largest integer.",
          workingLatex: "-5 < x \\le 4 \\;\\Rightarrow\\; x = 4",
          explanation:
            "x must satisfy both, so it lies strictly above -5 and at most 4. Since x \\le 4 includes 4, the largest integer is 4. Check x = 4: first inequality 3(0) = 0 < 18, true; second 9 \\le 9, true.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga46-027",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(\\dfrac{2x + 5}{4} \\le \\dfrac{x - 1}{3}\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "fractional coefficient", "brackets", "sign flip"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply both sides by the LCD, 12.",
          workingLatex: "12 \\cdot \\frac{2x + 5}{4} \\le 12 \\cdot \\frac{x - 1}{3}",
          explanation:
            "The denominators 4 and 3 have lowest common multiple 12. Multiplying both sides by 12 clears the fractions; 12 is positive, so the sign is unchanged.",
        },
        {
          stepNumber: 2,
          description: "Simplify each side.",
          workingLatex: "3(2x + 5) \\le 4(x - 1)",
          explanation:
            "12 \\div 4 = 3 multiplies the first numerator; 12 \\div 3 = 4 multiplies the second. Keep each numerator in a bracket so the whole thing gets multiplied.",
        },
        {
          stepNumber: 3,
          description: "Expand both brackets.",
          workingLatex: "6x + 15 \\le 4x - 4",
          explanation:
            "3(2x + 5) = 6x + 15 and 4(x - 1) = 4x - 4. Multiply both terms inside each bracket.",
        },
        {
          stepNumber: 4,
          description: "Subtract 4x from both sides.",
          workingLatex: "2x + 15 \\le -4",
          explanation:
            "Collect the x-terms on the left: 6x - 4x = 2x. The right loses its 4x, becoming -4.",
        },
        {
          stepNumber: 5,
          description: "Subtract 15 from both sides.",
          workingLatex: "2x \\le -19",
          explanation:
            "Move the constant: -4 - 15 = -19. This leaves just the x-term on the left.",
        },
        {
          stepNumber: 6,
          description: "Divide both sides by 2 (positive, no flip) and check.",
          workingLatex: "x \\le -\\frac{19}{2}",
          explanation:
            "Dividing by the positive number 2 keeps \\le: x \\le -19/2 = -9.5. Check x = -9.5: left = (-14)/4 = -3.5, right = (-10.5)/3 = -3.5, so -3.5 \\le -3.5, true (the boundary is included).",
        },
      ],
      finalAnswer: "\\(x \\le -\\dfrac{19}{2}\\)",
      canonicalAnswer: "x<=-19/2",
    },
  },
  {
    id: "ga46-028",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Ben buys \\(x\\) identical pens at £3 each. He pays with a £20 note and must have at least £5 change. Form an inequality in \\(x\\) and solve it to find the greatest number of pens Ben can buy.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "worded context", "form an inequality", "integer values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the cost and the change in terms of x.",
          workingLatex: "\\text{cost} = 3x, \\qquad \\text{change} = 20 - 3x",
          explanation:
            "Each pen costs £3, so x pens cost 3x pounds. Paying with £20, the change left is 20 - 3x pounds.",
        },
        {
          stepNumber: 2,
          description: "Translate 'at least £5 change' into an inequality.",
          workingLatex: "20 - 3x \\ge 5",
          explanation:
            "'At least £5' means the change is 5 or more, which is \\ge 5 (not strictly greater). So 20 - 3x \\ge 5.",
        },
        {
          stepNumber: 3,
          description: "Subtract 20 from both sides.",
          workingLatex: "-3x \\ge -15",
          explanation:
            "Remove the 20 by subtracting 20 from each side: 5 - 20 = -15. The left becomes -3x.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by −3 and FLIP the sign.",
          workingLatex: "x \\; \\boxed{\\le} \\; 5",
          explanation:
            "Dividing by -3 (negative) reverses the inequality: \\ge becomes \\le. -15 \\div (-3) = 5, so x \\le 5.",
        },
        {
          stepNumber: 5,
          description: "Interpret in context.",
          workingLatex: "x \\le 5 \\;\\Rightarrow\\; \\text{greatest } x = 5",
          explanation:
            "x must be a whole number of pens, and x \\le 5, so the greatest possible is 5. Check: 5 pens cost £15, change = £5 \\ge £5, true; 6 pens would cost £18, leaving only £2 change.",
        },
      ],
      finalAnswer: "\\(x \\le 5\\) (greatest number of pens is \\(5\\))",
      canonicalAnswer: "x<=5",
    },
  },
  {
    id: "ga46-029",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(5 - 2(x - 1) \\le 3(4 - x)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "brackets", "unknown both sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket on the left, watching the negative.",
          workingLatex: "5 - 2x + 2 \\le 3(4 - x)",
          explanation:
            "-2(x - 1) = -2x + 2: the -2 multiplies BOTH terms, so -2 \\cdot (-1) = +2. A common slip is to forget the sign change on the second term and write -2.",
        },
        {
          stepNumber: 2,
          description: "Simplify the left and expand the right.",
          workingLatex: "7 - 2x \\le 12 - 3x",
          explanation:
            "On the left, 5 + 2 = 7, giving 7 - 2x. On the right, 3(4 - x) = 12 - 3x.",
        },
        {
          stepNumber: 3,
          description: "Add 3x to both sides to keep x positive.",
          workingLatex: "7 + x \\le 12",
          explanation:
            "Adding 3x gives -2x + 3x = x on the left and removes the -3x on the right. Choosing to add 3x (rather than collect on the left) avoids dividing by a negative.",
        },
        {
          stepNumber: 4,
          description: "Subtract 7 from both sides and check.",
          workingLatex: "x \\le 5",
          explanation:
            "12 - 7 = 5, so x \\le 5. Check x = 0: 5 - 2(-1) = 7 and 3(4) = 12, so 7 \\le 12, true; boundary x = 5: 5 - 8 = -3 and 3(-1) = -3, so -3 \\le -3, true (included).",
        },
      ],
      finalAnswer: "\\(x \\le 5\\)",
      canonicalAnswer: "x<=5",
    },
  },
  {
    id: "ga46-030",
    topicRef: "ga46",
    topicTitle: "Solving linear inequalities",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "\\(n\\) is an integer such that \\(\\dfrac{n}{2} + 1 \\le 6\\) and \\(2n - 3 > -7\\). Write down all the possible values of \\(n\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving linear inequalities", "integer values", "two inequalities", "fractional coefficient", "list integers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 1 from the first inequality.",
          workingLatex: "\\frac{n}{2} + 1 \\le 6 \\;\\Rightarrow\\; \\frac{n}{2} \\le 5",
          explanation:
            "Deal with the first inequality. Subtract 1 from both sides to leave the n-term alone: 6 - 1 = 5.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 2 (positive, no flip).",
          workingLatex: "n \\le 10",
          explanation:
            "Undo the division by 2 by multiplying both sides by 2: 5 \\cdot 2 = 10. So n \\le 10.",
        },
        {
          stepNumber: 3,
          description: "Add 3 to the second inequality.",
          workingLatex: "2n - 3 > -7 \\;\\Rightarrow\\; 2n > -4",
          explanation:
            "Now the second inequality. Add 3 to both sides: -7 + 3 = -4.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2 (positive, no flip).",
          workingLatex: "n > -2",
          explanation:
            "Dividing by the positive number 2 keeps the > sign: -4 \\div 2 = -2, so n > -2.",
        },
        {
          stepNumber: 5,
          description: "Combine the two conditions.",
          workingLatex: "-2 < n \\le 10",
          explanation:
            "n must satisfy both: strictly greater than -2 (so -2 is excluded) and at most 10 (so 10 is included).",
        },
        {
          stepNumber: 6,
          description: "List the integers.",
          workingLatex: "n \\in \\{ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 \\}",
          explanation:
            "The smallest integer greater than -2 is -1; the largest allowed is 10. Enumerate every integer between them inclusive — twelve values in all.",
        },
      ],
      finalAnswer: "\\(-1,\\ 0,\\ 1,\\ 2,\\ 3,\\ 4,\\ 5,\\ 6,\\ 7,\\ 8,\\ 9,\\ 10\\)",
      canonicalAnswer: "{-1,0,1,2,3,4,5,6,7,8,9,10}",
    },
  },
];
