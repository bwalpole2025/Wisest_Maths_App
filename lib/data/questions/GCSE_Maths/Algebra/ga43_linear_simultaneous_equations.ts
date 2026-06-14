/**
 * Topic: Linear simultaneous equations
 * Ref: ga43  (DfE A19)
 * Strand: Algebra — GCSE Maths (Foundation + Higher tier)
 *
 * Coverage: solving a pair of linear simultaneous equations in two unknowns by
 *   elimination and by substitution, and forming a pair from a worded context.
 *   The big idea throughout: two equations are needed to pin down two unknowns,
 *   and we proceed by removing ONE unknown to leave a single equation we can
 *   solve, then back-substituting to recover the other. Clusters:
 *   (1) elimination when one variable already has equal coefficients (add or
 *       subtract the equations directly);
 *   (2) elimination needing ONE equation multiplied to match a coefficient;
 *   (3) elimination needing BOTH equations multiplied (lowest common multiple of
 *       the coefficients);
 *   (4) substitution, where one equation already gives x = … or y = …;
 *   (5) worded / contextual problems where the student must FORM the pair (costs
 *       of two items, two unknown numbers, ages, perimeter) then solve;
 *   (6) fractional or decimal coefficients / equations needing rearranging to
 *       ax + by = c before any elimination can start.
 *   Solutions stress: line the equations up as ax + by = c first; "same signs
 *   subtract, different signs add" when eliminating; multiply EVERY term when
 *   scaling an equation; substitute back to find the second unknown; and a final
 *   CHECK putting both values into BOTH original equations.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga43-001 .. ga43-004  (4)   cleanest equal-coefficient items
 *   - Standard:   ga43-005 .. ga43-018  (14)
 *   - Challenge:  ga43-019 .. ga43-030  (12)
 * Id range: ga43-001 .. ga43-030.
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
    id: "ga43-001",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(x + y = 7\\) and \\(x - y = 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "equal coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare the y-terms in the two equations.",
          workingLatex: "x + y = 7 \\quad (1), \\qquad x - y = 3 \\quad (2)",
          explanation:
            "The y-terms are +y in (1) and -y in (2): equal in size, opposite in sign. Different signs means we add the equations to cancel y. (Same signs would mean subtract.)",
        },
        {
          stepNumber: 2,
          description: "Add the two equations.",
          workingLatex: "(x + y) + (x - y) = 7 + 3",
          explanation:
            "Add the left-hand sides together and the right-hand sides together. Adding +y and -y gives zero, so the y-terms disappear, leaving an equation in x only.",
        },
        {
          stepNumber: 3,
          description: "Simplify to a single equation in x.",
          workingLatex: "2x = 10",
          explanation:
            "On the left, x + x = 2x and y - y = 0. On the right, 7 + 3 = 10. So 2x = 10.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{10}{2} = 5",
          explanation:
            "Divide both sides by 2 to isolate x, giving x = 5.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 5 back into equation (1).",
          workingLatex: "5 + y = 7 \\Rightarrow y = 2",
          explanation:
            "Put x = 5 into x + y = 7. Subtracting 5 from both sides gives y = 2. So x = 5, y = 2.",
        },
      ],
      finalAnswer: "\\(x = 5,\\; y = 2\\)",
      canonicalAnswer: "x=5, y=2",
    },
  },
  {
    id: "ga43-002",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(2x + y = 11\\) and \\(x + y = 7\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "equal coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare the y-terms in the two equations.",
          workingLatex: "2x + y = 11 \\quad (1), \\qquad x + y = 7 \\quad (2)",
          explanation:
            "Both equations contain +y — the same sign and the same size. Same signs means we subtract one equation from the other to cancel y.",
        },
        {
          stepNumber: 2,
          description: "Subtract equation (2) from equation (1).",
          workingLatex: "(2x + y) - (x + y) = 11 - 7",
          explanation:
            "Take (2) away from (1), side by side. The +y in each cancels: y - y = 0. Take care to subtract every term, including the right-hand sides.",
        },
        {
          stepNumber: 3,
          description: "Simplify to find x.",
          workingLatex: "x = 4",
          explanation:
            "On the left, 2x - x = x and y - y = 0. On the right, 11 - 7 = 4. So x = 4 directly.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 4 back into equation (2).",
          workingLatex: "4 + y = 7 \\Rightarrow y = 3",
          explanation:
            "Put x = 4 into x + y = 7 and subtract 4 from both sides: y = 3. So x = 4, y = 3.",
        },
      ],
      finalAnswer: "\\(x = 4,\\; y = 3\\)",
      canonicalAnswer: "x=4, y=3",
    },
  },
  {
    id: "ga43-003",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(3x + 2y = 16\\) and \\(x + 2y = 8\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "equal coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare the y-terms in the two equations.",
          workingLatex: "3x + 2y = 16 \\quad (1), \\qquad x + 2y = 8 \\quad (2)",
          explanation:
            "Both equations contain +2y — same sign, same size. Same signs means subtract one equation from the other, and the y-terms will vanish.",
        },
        {
          stepNumber: 2,
          description: "Subtract equation (2) from equation (1).",
          workingLatex: "(3x + 2y) - (x + 2y) = 16 - 8",
          explanation:
            "Subtract (2) from (1) term by term. The +2y in each cancels: 2y - 2y = 0, leaving an equation in x only.",
        },
        {
          stepNumber: 3,
          description: "Simplify to a single equation in x.",
          workingLatex: "2x = 8",
          explanation:
            "On the left, 3x - x = 2x and 2y - 2y = 0. On the right, 16 - 8 = 8. So 2x = 8.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{8}{2} = 4",
          explanation:
            "Divide both sides by 2 to get x = 4.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 4 back into equation (2).",
          workingLatex: "4 + 2y = 8 \\Rightarrow 2y = 4 \\Rightarrow y = 2",
          explanation:
            "Put x = 4 into x + 2y = 8. Subtract 4 from both sides to get 2y = 4, then divide by 2 for y = 2. So x = 4, y = 2.",
        },
      ],
      finalAnswer: "\\(x = 4,\\; y = 2\\)",
      canonicalAnswer: "x=4, y=2",
    },
  },
  {
    id: "ga43-004",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(4x + 3y = 18\\) and \\(4x - 3y = 6\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "equal coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare the y-terms in the two equations.",
          workingLatex: "4x + 3y = 18 \\quad (1), \\qquad 4x - 3y = 6 \\quad (2)",
          explanation:
            "The y-terms are +3y and -3y: equal in size, opposite in sign. Different signs means we add the equations so the y-terms cancel. (Notice the x-terms match too, but only one variable can be removed at a time.)",
        },
        {
          stepNumber: 2,
          description: "Add the two equations.",
          workingLatex: "(4x + 3y) + (4x - 3y) = 18 + 6",
          explanation:
            "Add left to left and right to right. The +3y and -3y add to zero, removing y and leaving an equation in x.",
        },
        {
          stepNumber: 3,
          description: "Simplify to a single equation in x.",
          workingLatex: "8x = 24",
          explanation:
            "On the left, 4x + 4x = 8x and 3y - 3y = 0. On the right, 18 + 6 = 24. So 8x = 24.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{24}{8} = 3",
          explanation:
            "Divide both sides by 8 to get x = 3.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 3 back into equation (1).",
          workingLatex: "4(3) + 3y = 18 \\Rightarrow 12 + 3y = 18 \\Rightarrow 3y = 6 \\Rightarrow y = 2",
          explanation:
            "Put x = 3 into 4x + 3y = 18: 12 + 3y = 18, so 3y = 6 and y = 2. So x = 3, y = 2.",
        },
      ],
      finalAnswer: "\\(x = 3,\\; y = 2\\)",
      canonicalAnswer: "x=3, y=2",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga43-005",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(3x + 2y = 13\\) and \\(x - 2y = -1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "equal coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and look for a variable to eliminate.",
          workingLatex: "3x + 2y = 13 \\quad (1), \\qquad x - 2y = -1 \\quad (2)",
          explanation:
            "The y-coefficients are +2 and -2 — equal in size, opposite in sign — so y can be eliminated immediately by adding. Different signs add.",
        },
        {
          stepNumber: 2,
          description: "Add (1) and (2) to eliminate y.",
          workingLatex: "(3x + 2y) + (x - 2y) = 13 + (-1)",
          explanation:
            "Adding the equations line by line: on the y-terms, +2y + (-2y) = 0, so y is gone. Add the right-hand sides too: 13 + (-1).",
        },
        {
          stepNumber: 3,
          description: "Simplify to a single equation in x.",
          workingLatex: "4x = 12",
          explanation:
            "Collecting like terms: 3x + x = 4x, and 13 + (-1) = 12, so 4x = 12.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{12}{4} = 3",
          explanation:
            "Divide both sides by 4 to isolate x, giving x = 3.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 3 into equation (2) to find y.",
          workingLatex: "3 - 2y = -1 \\Rightarrow -2y = -4 \\Rightarrow y = 2",
          explanation:
            "Use the simpler equation. Put x = 3 into x - 2y = -1, subtract 3 from both sides to get -2y = -4, then divide by -2. Watch the double negative: -4 ÷ -2 = +2.",
        },
        {
          stepNumber: 6,
          description: "Check both values in both original equations.",
          workingLatex: "3(3)+2(2)=13 \\checkmark, \\quad 3-2(2)=-1 \\checkmark",
          explanation:
            "Substituting x = 3, y = 2 back: 9 + 4 = 13 and 3 - 4 = -1. Both equations are satisfied, so the solution is correct.",
        },
      ],
      finalAnswer: "\\(x = 3,\\; y = 2\\)",
      canonicalAnswer: "x=3, y=2",
    },
  },
  {
    id: "ga43-006",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(5x + 2y = 20\\) and \\(2x + 2y = 14\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "equal coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and choose the elimination.",
          workingLatex: "5x + 2y = 20 \\quad (1), \\qquad 2x + 2y = 14 \\quad (2)",
          explanation:
            "Both equations contain +2y — the same sign and size — so subtracting one from the other will eliminate y. Same signs subtract.",
        },
        {
          stepNumber: 2,
          description: "Subtract (2) from (1) to eliminate y.",
          workingLatex: "(5x + 2y) - (2x + 2y) = 20 - 14",
          explanation:
            "Subtract term by term. On the y-terms, 2y - 2y = 0, removing y. Subtract the right-hand sides too: 20 - 14.",
        },
        {
          stepNumber: 3,
          description: "Simplify and solve for x.",
          workingLatex: "3x = 6 \\Rightarrow x = 2",
          explanation:
            "On the left, 5x - 2x = 3x. On the right, 20 - 14 = 6. So 3x = 6, and dividing by 3 gives x = 2.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 2 into equation (2).",
          workingLatex: "2(2) + 2y = 14 \\Rightarrow 4 + 2y = 14",
          explanation:
            "Replace x with 2 in the simpler equation and evaluate 2 × 2 = 4.",
        },
        {
          stepNumber: 5,
          description: "Solve for y.",
          workingLatex: "2y = 10 \\Rightarrow y = 5",
          explanation:
            "Subtract 4 from both sides to get 2y = 10, then divide by 2 for y = 5.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "5(2)+2(5)=20 \\checkmark, \\quad 2(2)+2(5)=14 \\checkmark",
          explanation:
            "Substituting x = 2, y = 5: 10 + 10 = 20 and 4 + 10 = 14. Both equations hold, confirming the solution.",
        },
      ],
      finalAnswer: "\\(x = 2,\\; y = 5\\)",
      canonicalAnswer: "x=2, y=5",
    },
  },
  {
    id: "ga43-007",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(3x + y = 11\\) and \\(2x + 3y = 19\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "multiply one equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and choose a variable to eliminate.",
          workingLatex: "3x + y = 11 \\quad (1), \\qquad 2x + 3y = 19 \\quad (2)",
          explanation:
            "No coefficients match yet, so direct adding or subtracting won't cancel anything. The y-terms are easiest to match: (1) has y and (2) has 3y, so multiplying (1) by 3 will make its y-coefficient 3.",
        },
        {
          stepNumber: 2,
          description: "Multiply equation (1) by 3.",
          workingLatex: "3 \\cdot (3x + y) = 3 \\cdot 11 \\Rightarrow 9x + 3y = 33 \\quad (3)",
          explanation:
            "Multiply EVERY term by 3 — including the right-hand side — so the equation stays balanced. This gives 9x + 3y = 33, which now shares +3y with equation (2).",
        },
        {
          stepNumber: 3,
          description: "Subtract (2) from (3) to eliminate y.",
          workingLatex: "(9x + 3y) - (2x + 3y) = 33 - 19",
          explanation:
            "Both equations now have +3y, the same sign, so subtract to cancel: 3y - 3y = 0.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "7x = 14 \\Rightarrow x = 2",
          explanation:
            "On the left, 9x - 2x = 7x. On the right, 33 - 19 = 14. So 7x = 14 and x = 2.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 2 into equation (1).",
          workingLatex: "3(2) + y = 11 \\Rightarrow 6 + y = 11 \\Rightarrow y = 5",
          explanation:
            "Use the simplest original equation. 6 + y = 11 gives y = 5.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "3(2)+5=11 \\checkmark, \\quad 2(2)+3(5)=19 \\checkmark",
          explanation:
            "Substituting x = 2, y = 5: 6 + 5 = 11 and 4 + 15 = 19. Both equations are satisfied.",
        },
      ],
      finalAnswer: "\\(x = 2,\\; y = 5\\)",
      canonicalAnswer: "x=2, y=5",
    },
  },
  {
    id: "ga43-008",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(4x + 3y = 25\\) and \\(x + 2y = 10\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "multiply one equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and pick a variable to eliminate.",
          workingLatex: "4x + 3y = 25 \\quad (1), \\qquad x + 2y = 10 \\quad (2)",
          explanation:
            "The x-coefficients are 4 and 1. Since 1 divides into 4, multiplying (2) by 4 will match the 4x in (1) without touching equation (1) at all — the tidiest choice. We aim to eliminate x.",
        },
        {
          stepNumber: 2,
          description: "Multiply equation (2) by 4.",
          workingLatex: "4 \\cdot (x + 2y) = 4 \\cdot 10 \\Rightarrow 4x + 8y = 40 \\quad (3)",
          explanation:
            "Multiply every term by 4 so the x-coefficient becomes 4, matching equation (1). Don't forget the right-hand side: 4 × 10 = 40.",
        },
        {
          stepNumber: 3,
          description: "Subtract (1) from (3) to eliminate x.",
          workingLatex: "(4x + 8y) - (4x + 3y) = 40 - 25",
          explanation:
            "Both equations now have +4x, the same sign, so subtract to cancel x.",
        },
        {
          stepNumber: 4,
          description: "Solve for y.",
          workingLatex: "5y = 15 \\Rightarrow y = 3",
          explanation:
            "On the left, 8y - 3y = 5y. On the right, 40 - 25 = 15. So 5y = 15 and y = 3.",
        },
        {
          stepNumber: 5,
          description: "Substitute y = 3 into equation (2).",
          workingLatex: "x + 2(3) = 10 \\Rightarrow x + 6 = 10 \\Rightarrow x = 4",
          explanation:
            "Put y = 3 into the simpler equation: x + 6 = 10, so x = 4.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "4(4)+3(3)=25 \\checkmark, \\quad 4+2(3)=10 \\checkmark",
          explanation:
            "Substituting x = 4, y = 3: 16 + 9 = 25 and 4 + 6 = 10. Both equations hold.",
        },
      ],
      finalAnswer: "\\(x = 4,\\; y = 3\\)",
      canonicalAnswer: "x=4, y=3",
    },
  },
  {
    id: "ga43-009",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(2x + 5y = 16\\) and \\(3x - 2y = 5\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "multiply both equations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and plan the elimination.",
          workingLatex: "2x + 5y = 16 \\quad (1), \\qquad 3x - 2y = 5 \\quad (2)",
          explanation:
            "No coefficient matches and neither divides the other, so we must scale BOTH equations. To eliminate x, use the lowest common multiple of 2 and 3, which is 6.",
        },
        {
          stepNumber: 2,
          description: "Multiply (1) by 3 and (2) by 2 to make the x-coefficient 6.",
          workingLatex: "6x + 15y = 48 \\quad (3), \\qquad 6x - 4y = 10 \\quad (4)",
          explanation:
            "(1) × 3 gives 6x + 15y = 48; (2) × 2 gives 6x - 4y = 10. Multiply every term each time. Both new equations now start with 6x.",
        },
        {
          stepNumber: 3,
          description: "Subtract (4) from (3) to eliminate x.",
          workingLatex: "(6x + 15y) - (6x - 4y) = 48 - 10",
          explanation:
            "Same +6x in each, so subtract to cancel x. Watch the double sign carefully on the y-terms: 15y - (-4y) = 15y + 4y = 19y.",
        },
        {
          stepNumber: 4,
          description: "Solve for y.",
          workingLatex: "19y = 38 \\Rightarrow y = 2",
          explanation:
            "On the right, 48 - 10 = 38. So 19y = 38, and dividing by 19 gives y = 2.",
        },
        {
          stepNumber: 5,
          description: "Substitute y = 2 into equation (1).",
          workingLatex: "2x + 5(2) = 16 \\Rightarrow 2x + 10 = 16 \\Rightarrow 2x = 6 \\Rightarrow x = 3",
          explanation:
            "Put y = 2 into (1): 2x + 10 = 16, so 2x = 6 and x = 3.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "2(3)+5(2)=16 \\checkmark, \\quad 3(3)-2(2)=5 \\checkmark",
          explanation:
            "Substituting x = 3, y = 2: 6 + 10 = 16 and 9 - 4 = 5. Both equations are satisfied.",
        },
      ],
      finalAnswer: "\\(x = 3,\\; y = 2\\)",
      canonicalAnswer: "x=3, y=2",
    },
  },
  {
    id: "ga43-010",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = 2x + 1\\) and \\(3x + y = 16\\) using substitution.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the equation already arranged for substitution.",
          workingLatex: "y = 2x + 1 \\quad (1), \\qquad 3x + y = 16 \\quad (2)",
          explanation:
            "Equation (1) already gives y in terms of x. That makes substitution the natural method: replace y in equation (2) with the expression 2x + 1.",
        },
        {
          stepNumber: 2,
          description: "Substitute y = 2x + 1 into equation (2).",
          workingLatex: "3x + (2x + 1) = 16",
          explanation:
            "Wherever y appears in (2), write 2x + 1 instead. Keep it in a bracket so that every part of the expression is included.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "5x + 1 = 16",
          explanation:
            "The bracket can be dropped here since it is just being added: 3x + 2x = 5x, and the +1 stays. So 5x + 1 = 16.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "5x = 15 \\Rightarrow x = 3",
          explanation:
            "Subtract 1 from both sides to get 5x = 15, then divide by 5 for x = 3.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 3 back into equation (1) to find y.",
          workingLatex: "y = 2(3) + 1 = 7",
          explanation:
            "Use the rearranged equation (1) for the quickest route to y: 6 + 1 = 7.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "7 = 2(3)+1 \\checkmark, \\quad 3(3)+7=16 \\checkmark",
          explanation:
            "Substituting x = 3, y = 7: 2(3) + 1 = 7 and 9 + 7 = 16. Both equations hold.",
        },
      ],
      finalAnswer: "\\(x = 3,\\; y = 7\\)",
      canonicalAnswer: "x=3, y=7",
    },
  },
  {
    id: "ga43-011",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(x = 3y - 2\\) and \\(2x + y = 10\\) using substitution.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the substitution-ready equation.",
          workingLatex: "x = 3y - 2 \\quad (1), \\qquad 2x + y = 10 \\quad (2)",
          explanation:
            "Equation (1) gives x in terms of y, so substitute its right-hand side for x in equation (2).",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 3y - 2 into equation (2).",
          workingLatex: "2(3y - 2) + y = 10",
          explanation:
            "Replace x with the bracket (3y - 2). The bracket matters here because the factor of 2 in front must multiply both terms inside.",
        },
        {
          stepNumber: 3,
          description: "Expand the bracket.",
          workingLatex: "6y - 4 + y = 10",
          explanation:
            "Multiply out 2(3y - 2): 2 × 3y = 6y and 2 × (-2) = -4. A common slip is to multiply only the first term — be sure both are multiplied.",
        },
        {
          stepNumber: 4,
          description: "Collect like terms.",
          workingLatex: "7y - 4 = 10",
          explanation:
            "Gather the y-terms: 6y + y = 7y, leaving 7y - 4 = 10.",
        },
        {
          stepNumber: 5,
          description: "Solve for y.",
          workingLatex: "7y = 14 \\Rightarrow y = 2",
          explanation:
            "Add 4 to both sides to get 7y = 14, then divide by 7 for y = 2.",
        },
        {
          stepNumber: 6,
          description: "Substitute y = 2 into equation (1) to find x.",
          workingLatex: "x = 3(2) - 2 = 4",
          explanation:
            "Use the rearranged equation: x = 6 - 2 = 4.",
        },
        {
          stepNumber: 7,
          description: "Check in both original equations.",
          workingLatex: "4 = 3(2)-2 \\checkmark, \\quad 2(4)+2=10 \\checkmark",
          explanation:
            "Substituting x = 4, y = 2: 3(2) - 2 = 4 and 8 + 2 = 10. Both equations are satisfied.",
        },
      ],
      finalAnswer: "\\(x = 4,\\; y = 2\\)",
      canonicalAnswer: "x=4, y=2",
    },
  },
  {
    id: "ga43-012",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Two pens and three rubbers cost \\(\\pounds 1.30\\). Four pens and one rubber cost \\(\\pounds 1.60\\). Let a pen cost \\(p\\) pence and a rubber cost \\(r\\) pence. Form a pair of equations and find the cost of each item.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "forming equations", "elimination", "worded problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate each sentence into an equation, working in pence.",
          workingLatex: "2p + 3r = 130 \\quad (1), \\qquad 4p + r = 160 \\quad (2)",
          explanation:
            "The question tells us to work in pence, so convert: £1.30 = 130p and £1.60 = 160p. 'Two pens and three rubbers' gives 2p + 3r = 130; 'four pens and one rubber' gives 4p + r = 160.",
        },
        {
          stepNumber: 2,
          description: "Multiply (1) by 2 so the p-coefficients match.",
          workingLatex: "2 \\cdot (2p + 3r) = 2 \\cdot 130 \\Rightarrow 4p + 6r = 260 \\quad (3)",
          explanation:
            "Equation (2) has 4p, so scaling (1) by 2 makes its p-coefficient 4 as well. Multiply every term, including 130, to keep it balanced.",
        },
        {
          stepNumber: 3,
          description: "Subtract (2) from (3) to eliminate p.",
          workingLatex: "(4p + 6r) - (4p + r) = 260 - 160 \\Rightarrow 5r = 100",
          explanation:
            "Both have +4p, so subtract to cancel the pens: 6r - r = 5r and 260 - 160 = 100.",
        },
        {
          stepNumber: 4,
          description: "Solve for r.",
          workingLatex: "r = \\frac{100}{5} = 20",
          explanation:
            "Divide both sides by 5. A rubber costs 20 pence.",
        },
        {
          stepNumber: 5,
          description: "Substitute r = 20 into equation (2) to find p.",
          workingLatex: "4p + 20 = 160 \\Rightarrow 4p = 140 \\Rightarrow p = 35",
          explanation:
            "Use the simpler equation. Subtract 20 to get 4p = 140, then divide by 4: a pen costs 35 pence.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "2(35)+3(20)=130 \\checkmark, \\quad 4(35)+20=160 \\checkmark",
          explanation:
            "Substituting p = 35, r = 20: 70 + 60 = 130 and 140 + 20 = 160. Both totals are correct, so a pen costs 35p and a rubber 20p.",
        },
      ],
      finalAnswer: "\\(p = 35\\text{ p},\\; r = 20\\text{ p}\\)",
      canonicalAnswer: "p=35, r=20",
    },
  },
  {
    id: "ga43-013",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The sum of two numbers is \\(20\\) and their difference is \\(4\\). Find the two numbers.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "forming equations", "elimination", "worded problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define variables and form the equations.",
          workingLatex: "x + y = 20 \\quad (1), \\qquad x - y = 4 \\quad (2)",
          explanation:
            "Let the larger number be x and the smaller be y. 'Sum is 20' gives x + y = 20; 'difference is 4' gives x - y = 4.",
        },
        {
          stepNumber: 2,
          description: "Add (1) and (2) to eliminate y.",
          workingLatex: "(x + y) + (x - y) = 20 + 4",
          explanation:
            "The y-terms +y and -y have different signs, so adding the equations cancels them, leaving an equation in x.",
        },
        {
          stepNumber: 3,
          description: "Simplify and solve for x.",
          workingLatex: "2x = 24 \\Rightarrow x = \\frac{24}{2} = 12",
          explanation:
            "On the left, x + x = 2x; on the right, 20 + 4 = 24. Dividing by 2 gives x = 12, the larger number.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 12 into equation (1).",
          workingLatex: "12 + y = 20 \\Rightarrow y = 8",
          explanation:
            "Put x = 12 into x + y = 20 and subtract 12: the smaller number is y = 8.",
        },
        {
          stepNumber: 5,
          description: "Check in both original equations.",
          workingLatex: "12 + 8 = 20 \\checkmark, \\quad 12 - 8 = 4 \\checkmark",
          explanation:
            "The sum is 20 and the difference is 4, so the numbers are 12 and 8.",
        },
      ],
      finalAnswer: "\\(12 \\text{ and } 8\\)",
      canonicalAnswer: "x=12, y=8",
    },
  },
  {
    id: "ga43-014",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(5x - 2y = 4\\) and \\(3x + 2y = 12\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "equal coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and choose the elimination.",
          workingLatex: "5x - 2y = 4 \\quad (1), \\qquad 3x + 2y = 12 \\quad (2)",
          explanation:
            "The y-terms are -2y and +2y — equal size, opposite sign — so adding the equations eliminates y. Different signs add.",
        },
        {
          stepNumber: 2,
          description: "Add (1) and (2) to eliminate y.",
          workingLatex: "(5x - 2y) + (3x + 2y) = 4 + 12",
          explanation:
            "Adding line by line, the y-terms cancel: -2y + 2y = 0. Add the right-hand sides too.",
        },
        {
          stepNumber: 3,
          description: "Simplify to a single equation in x.",
          workingLatex: "8x = 16",
          explanation:
            "On the left, 5x + 3x = 8x. On the right, 4 + 12 = 16. So 8x = 16.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{16}{8} = 2",
          explanation:
            "Divide both sides by 8 to get x = 2.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 2 into equation (2).",
          workingLatex: "3(2) + 2y = 12 \\Rightarrow 6 + 2y = 12 \\Rightarrow 2y = 6 \\Rightarrow y = 3",
          explanation:
            "Put x = 2 into (2): 6 + 2y = 12, so 2y = 6 and y = 3.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "5(2)-2(3)=4 \\checkmark, \\quad 3(2)+2(3)=12 \\checkmark",
          explanation:
            "Substituting x = 2, y = 3: 10 - 6 = 4 and 6 + 6 = 12. Both equations are satisfied.",
        },
      ],
      finalAnswer: "\\(x = 2,\\; y = 3\\)",
      canonicalAnswer: "x=2, y=3",
    },
  },
  {
    id: "ga43-015",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(3x + 4y = 5\\) and \\(2x - y = 4\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "multiply one equation", "negative solution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and pick a variable to eliminate.",
          workingLatex: "3x + 4y = 5 \\quad (1), \\qquad 2x - y = 4 \\quad (2)",
          explanation:
            "The y-coefficients are 4 and -1. Since 1 divides 4, multiplying (2) by 4 makes its y-coefficient -4, matching the size in (1). We eliminate y.",
        },
        {
          stepNumber: 2,
          description: "Multiply equation (2) by 4.",
          workingLatex: "4 \\cdot (2x - y) = 4 \\cdot 4 \\Rightarrow 8x - 4y = 16 \\quad (3)",
          explanation:
            "Multiply every term by 4 to get 8x - 4y = 16. The y-term is now -4y, opposite in sign to the +4y in (1).",
        },
        {
          stepNumber: 3,
          description: "Add (1) and (3) to eliminate y.",
          workingLatex: "(3x + 4y) + (8x - 4y) = 5 + 16 \\Rightarrow 11x = 21",
          explanation:
            "Different signs add: +4y and -4y cancel. Then 3x + 8x = 11x and 5 + 16 = 21.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{21}{11}",
          explanation:
            "Dividing gives x = 21/11. It does not simplify, so keep it as an exact fraction rather than rounding.",
        },
        {
          stepNumber: 5,
          description: "Rearrange (2) for y and substitute x = 21/11.",
          workingLatex: "y = 2x - 4 = 2 \\cdot \\frac{21}{11} - 4 = \\frac{42}{11} - \\frac{44}{11} = -\\frac{2}{11}",
          explanation:
            "From 2x - y = 4, make y the subject: y = 2x - 4. Substitute x = 21/11, giving 42/11; write 4 as 44/11 to subtract the fractions over a common denominator.",
        },
        {
          stepNumber: 6,
          description: "Check in equation (1).",
          workingLatex: "3 \\cdot \\frac{21}{11} + 4 \\cdot \\left(-\\frac{2}{11}\\right) = \\frac{63 - 8}{11} = \\frac{55}{11} = 5 \\checkmark",
          explanation:
            "Substituting both values into 3x + 4y gives 63/11 - 8/11 = 55/11 = 5. Equation (1) is satisfied, so x = 21/11, y = -2/11.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{21}{11},\\; y = -\\dfrac{2}{11}\\)",
      canonicalAnswer: "x=21/11, y=-2/11",
    },
  },
  {
    id: "ga43-016",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(\\dfrac{x}{2} + y = 5\\) and \\(x - y = 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "fractional coefficients", "rearranging", "elimination"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Clear the fraction in the first equation.",
          workingLatex: "2 \\cdot \\left(\\frac{x}{2} + y\\right) = 2 \\cdot 5 \\Rightarrow x + 2y = 10 \\quad (1)",
          explanation:
            "Fractions make elimination awkward, so clear them first. Multiply every term by 2: 2 × x/2 = x, 2 × y = 2y, 2 × 5 = 10, giving the clean equation x + 2y = 10.",
        },
        {
          stepNumber: 2,
          description: "Write the second equation alongside.",
          workingLatex: "x - y = 1 \\quad (2)",
          explanation:
            "Equation (2) is already in integer form. Both x-coefficients are now 1, so subtracting will eliminate x.",
        },
        {
          stepNumber: 3,
          description: "Subtract (2) from (1) to eliminate x.",
          workingLatex: "(x + 2y) - (x - y) = 10 - 1",
          explanation:
            "Both have +x, so subtract to cancel x. Watch the sign on the y-terms: 2y - (-y) = 2y + y = 3y.",
        },
        {
          stepNumber: 4,
          description: "Solve for y.",
          workingLatex: "3y = 9 \\Rightarrow y = 3",
          explanation:
            "On the right, 10 - 1 = 9. So 3y = 9 and y = 3.",
        },
        {
          stepNumber: 5,
          description: "Substitute y = 3 into equation (2).",
          workingLatex: "x - 3 = 1 \\Rightarrow x = 4",
          explanation:
            "Put y = 3 into x - y = 1 and add 3 to both sides: x = 4.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "\\frac{4}{2}+3=5 \\checkmark, \\quad 4-3=1 \\checkmark",
          explanation:
            "Substituting x = 4, y = 3 into the ORIGINAL equations: 4/2 + 3 = 2 + 3 = 5 and 4 - 3 = 1. Both hold.",
        },
      ],
      finalAnswer: "\\(x = 4,\\; y = 3\\)",
      canonicalAnswer: "x=4, y=3",
    },
  },
  {
    id: "ga43-017",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(0.5x + 0.2y = 2.4\\) and \\(x + y = 7\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "decimal coefficients", "rearranging", "elimination"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Clear the decimals in the first equation.",
          workingLatex: "10 \\cdot (0.5x + 0.2y) = 10 \\cdot 2.4 \\Rightarrow 5x + 2y = 24 \\quad (1)",
          explanation:
            "Decimals are easiest to handle if we turn them into whole numbers. Multiply every term by 10: 0.5 → 5, 0.2 → 2, 2.4 → 24.",
        },
        {
          stepNumber: 2,
          description: "Write the second equation alongside.",
          workingLatex: "x + y = 7 \\quad (2)",
          explanation:
            "Equation (2) is already in integer form. To eliminate y we need its coefficient to match the 2y in (1), so we will scale (2) next.",
        },
        {
          stepNumber: 3,
          description: "Multiply (2) by 2 to match the y-coefficient.",
          workingLatex: "2 \\cdot (x + y) = 2 \\cdot 7 \\Rightarrow 2x + 2y = 14 \\quad (3)",
          explanation:
            "Multiplying every term by 2 gives 2x + 2y = 14. Now both (1) and (3) contain +2y, ready to subtract.",
        },
        {
          stepNumber: 4,
          description: "Subtract (3) from (1) to eliminate y.",
          workingLatex: "(5x + 2y) - (2x + 2y) = 24 - 14 \\Rightarrow 3x = 10",
          explanation:
            "Same +2y cancels. Then 5x - 2x = 3x and 24 - 14 = 10.",
        },
        {
          stepNumber: 5,
          description: "Solve for x.",
          workingLatex: "x = \\frac{10}{3}",
          explanation:
            "Dividing gives x = 10/3, which does not simplify. Keep the exact fraction rather than a rounded decimal.",
        },
        {
          stepNumber: 6,
          description: "Substitute x = 10/3 into equation (2).",
          workingLatex: "\\frac{10}{3} + y = 7 \\Rightarrow y = 7 - \\frac{10}{3} = \\frac{21 - 10}{3} = \\frac{11}{3}",
          explanation:
            "Use the simplest equation x + y = 7. Write 7 as 21/3 so it shares the denominator, then subtract: y = 11/3.",
        },
        {
          stepNumber: 7,
          description: "Check in the cleared first equation.",
          workingLatex: "5 \\cdot \\frac{10}{3} + 2 \\cdot \\frac{11}{3} = \\frac{50 + 22}{3} = \\frac{72}{3} = 24 \\checkmark",
          explanation:
            "5x + 2y = 50/3 + 22/3 = 72/3 = 24 holds, and x + y = 10/3 + 11/3 = 21/3 = 7, so both original equations are satisfied.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{10}{3},\\; y = \\dfrac{11}{3}\\)",
      canonicalAnswer: "x=10/3, y=11/3",
    },
  },
  {
    id: "ga43-018",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(2x + 3y = 4\\) and \\(5x + 2y = -1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "multiply both equations", "negative solution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and plan the elimination.",
          workingLatex: "2x + 3y = 4 \\quad (1), \\qquad 5x + 2y = -1 \\quad (2)",
          explanation:
            "No coefficient matches, so scale both equations. To eliminate y, use the lowest common multiple of 3 and 2, which is 6.",
        },
        {
          stepNumber: 2,
          description: "Multiply (1) by 2 and (2) by 3.",
          workingLatex: "4x + 6y = 8 \\quad (3), \\qquad 15x + 6y = -3 \\quad (4)",
          explanation:
            "(1) × 2 gives 4x + 6y = 8; (2) × 3 gives 15x + 6y = -3. Multiply every term, including the right-hand sides. Both now have +6y.",
        },
        {
          stepNumber: 3,
          description: "Subtract (3) from (4) to eliminate y.",
          workingLatex: "(15x + 6y) - (4x + 6y) = -3 - 8 \\Rightarrow 11x = -11",
          explanation:
            "Same +6y cancels. Then 15x - 4x = 11x and -3 - 8 = -11. Subtracting (3) from (4) keeps the x-coefficient positive, which is tidier.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{-11}{11} = -1",
          explanation:
            "Dividing both sides by 11 gives x = -1.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = -1 into equation (1).",
          workingLatex: "2(-1) + 3y = 4 \\Rightarrow -2 + 3y = 4 \\Rightarrow 3y = 6 \\Rightarrow y = 2",
          explanation:
            "Put x = -1 into (1): -2 + 3y = 4, so 3y = 6 and y = 2. Take care that 2 × (-1) = -2.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "2(-1)+3(2)=4 \\checkmark, \\quad 5(-1)+2(2)=-1 \\checkmark",
          explanation:
            "Substituting x = -1, y = 2: -2 + 6 = 4 and -5 + 4 = -1. Both equations hold.",
        },
      ],
      finalAnswer: "\\(x = -1,\\; y = 2\\)",
      canonicalAnswer: "x=-1, y=2",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga43-019",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(4x + 3y = 18\\) and \\(3x - 2y = 5\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "multiply both equations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and plan the elimination.",
          workingLatex: "4x + 3y = 18 \\quad (1), \\qquad 3x - 2y = 5 \\quad (2)",
          explanation:
            "We choose to eliminate y. The y-coefficients are 3 and -2; their lowest common multiple is 6, so we scale both equations to make the y-terms ±6.",
        },
        {
          stepNumber: 2,
          description: "Multiply (1) by 2 and (2) by 3.",
          workingLatex: "8x + 6y = 36 \\quad (3), \\qquad 9x - 6y = 15 \\quad (4)",
          explanation:
            "(1) × 2 gives 8x + 6y = 36; (2) × 3 gives 9x - 6y = 15. Multiply every term each time. The y-terms are now +6y and -6y.",
        },
        {
          stepNumber: 3,
          description: "Add (3) and (4) to eliminate y.",
          workingLatex: "(8x + 6y) + (9x - 6y) = 36 + 15 \\Rightarrow 17x = 51",
          explanation:
            "The y-terms have opposite signs, so add to cancel them: +6y - 6y = 0. Then 8x + 9x = 17x and 36 + 15 = 51.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{51}{17} = 3",
          explanation:
            "Divide both sides by 17. Since 17 × 3 = 51, x = 3.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 3 into equation (1) to find y.",
          workingLatex: "4(3) + 3y = 18 \\Rightarrow 12 + 3y = 18 \\Rightarrow 3y = 6 \\Rightarrow y = 2",
          explanation:
            "Put x = 3 into (1): 12 + 3y = 18, so 3y = 6 and y = 2.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "4(3)+3(2)=18 \\checkmark, \\quad 3(3)-2(2)=5 \\checkmark",
          explanation:
            "Substituting x = 3, y = 2: 12 + 6 = 18 and 9 - 4 = 5. Both equations are satisfied.",
        },
      ],
      finalAnswer: "\\(x = 3,\\; y = 2\\)",
      canonicalAnswer: "x=3, y=2",
    },
  },
  {
    id: "ga43-020",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(3x + 5y = 1\\) and \\(2x - 3y = 7\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "multiply both equations", "negative solution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and plan to eliminate x.",
          workingLatex: "3x + 5y = 1 \\quad (1), \\qquad 2x - 3y = 7 \\quad (2)",
          explanation:
            "The x-coefficients are 3 and 2; their lowest common multiple is 6, so we scale both equations to make both x-coefficients 6, then eliminate x.",
        },
        {
          stepNumber: 2,
          description: "Multiply (1) by 2 and (2) by 3.",
          workingLatex: "6x + 10y = 2 \\quad (3), \\qquad 6x - 9y = 21 \\quad (4)",
          explanation:
            "(1) × 2 gives 6x + 10y = 2; (2) × 3 gives 6x - 9y = 21. Multiply every term. Both new equations now start with 6x.",
        },
        {
          stepNumber: 3,
          description: "Subtract (4) from (3) to eliminate x.",
          workingLatex: "(6x + 10y) - (6x - 9y) = 2 - 21",
          explanation:
            "Same +6x cancels. Watch the double sign on the y-terms: 10y - (-9y) = 10y + 9y = 19y.",
        },
        {
          stepNumber: 4,
          description: "Solve for y.",
          workingLatex: "19y = -19 \\Rightarrow y = -1",
          explanation:
            "On the right, 2 - 21 = -19. So 19y = -19 and y = -1.",
        },
        {
          stepNumber: 5,
          description: "Substitute y = -1 into equation (1).",
          workingLatex: "3x + 5(-1) = 1 \\Rightarrow 3x - 5 = 1 \\Rightarrow 3x = 6 \\Rightarrow x = 2",
          explanation:
            "Put y = -1 into (1): 5 × (-1) = -5, so 3x - 5 = 1, giving 3x = 6 and x = 2.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "3(2)+5(-1)=1 \\checkmark, \\quad 2(2)-3(-1)=7 \\checkmark",
          explanation:
            "Substituting x = 2, y = -1: 6 - 5 = 1 and 4 + 3 = 7. Both equations hold.",
        },
      ],
      finalAnswer: "\\(x = 2,\\; y = -1\\)",
      canonicalAnswer: "x=2, y=-1",
    },
  },
  {
    id: "ga43-021",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A cinema sells \\(3\\) adult tickets and \\(2\\) child tickets for \\(\\pounds 31\\), and \\(2\\) adult tickets and \\(5\\) child tickets for \\(\\pounds 39\\). Find the price of an adult ticket and a child ticket.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "forming equations", "elimination", "multiply both equations", "worded problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define variables and form the equations (work in pounds).",
          workingLatex: "3a + 2c = 31 \\quad (1), \\qquad 2a + 5c = 39 \\quad (2)",
          explanation:
            "Let an adult ticket cost £a and a child ticket cost £c. '3 adults and 2 children for £31' gives 3a + 2c = 31; '2 adults and 5 children for £39' gives 2a + 5c = 39.",
        },
        {
          stepNumber: 2,
          description: "Plan to eliminate a; lowest common multiple of 3 and 2 is 6.",
          workingLatex: "(1) \\times 2, \\quad (2) \\times 3",
          explanation:
            "The a-coefficients are 3 and 2, with lowest common multiple 6. Scaling (1) by 2 and (2) by 3 makes both a-coefficients equal to 6.",
        },
        {
          stepNumber: 3,
          description: "Carry out the multiplications.",
          workingLatex: "6a + 4c = 62 \\quad (3), \\qquad 6a + 15c = 117 \\quad (4)",
          explanation:
            "Multiply every term: (1) × 2 = 6a + 4c = 62; (2) × 3 = 6a + 15c = 117. Both new equations start with 6a.",
        },
        {
          stepNumber: 4,
          description: "Subtract (3) from (4) to eliminate a.",
          workingLatex: "(6a + 15c) - (6a + 4c) = 117 - 62 \\Rightarrow 11c = 55",
          explanation:
            "Both have +6a, so subtract to remove the adults. Then 15c - 4c = 11c and 117 - 62 = 55.",
        },
        {
          stepNumber: 5,
          description: "Solve for c.",
          workingLatex: "c = \\frac{55}{11} = 5",
          explanation:
            "Divide both sides by 11. A child ticket costs £5.",
        },
        {
          stepNumber: 6,
          description: "Substitute c = 5 into equation (1) to find a.",
          workingLatex: "3a + 2(5) = 31 \\Rightarrow 3a + 10 = 31 \\Rightarrow 3a = 21 \\Rightarrow a = 7",
          explanation:
            "Put c = 5 into (1): 3a + 10 = 31, so 3a = 21 and a = 7. An adult ticket costs £7.",
        },
        {
          stepNumber: 7,
          description: "Check in both original equations.",
          workingLatex: "3(7)+2(5)=31 \\checkmark, \\quad 2(7)+5(5)=39 \\checkmark",
          explanation:
            "Substituting a = 7, c = 5: 21 + 10 = 31 and 14 + 25 = 39. Both totals match, so an adult ticket costs £7 and a child ticket £5.",
        },
      ],
      finalAnswer: "\\(a = \\pounds 7,\\; c = \\pounds 5\\)",
      canonicalAnswer: "a=7, c=5",
    },
  },
  {
    id: "ga43-022",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "At a café, \\(2\\) teas and \\(3\\) coffees cost \\(\\pounds 7.40\\), while \\(4\\) teas and \\(1\\) coffee cost \\(\\pounds 5.80\\). Find the cost of one tea and one coffee.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "forming equations", "elimination", "multiply one equation", "worded problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define variables and form the equations (work in pence).",
          workingLatex: "2t + 3c = 740 \\quad (1), \\qquad 4t + c = 580 \\quad (2)",
          explanation:
            "Let a tea cost t pence and a coffee c pence. Working in pence avoids decimals: £7.40 = 740p and £5.80 = 580p. The two purchases give the equations.",
        },
        {
          stepNumber: 2,
          description: "Multiply (2) by 3 so the coffee coefficients match.",
          workingLatex: "3 \\cdot (4t + c) = 3 \\cdot 580 \\Rightarrow 12t + 3c = 1740 \\quad (3)",
          explanation:
            "Equation (1) has 3c, so scale (2) to give 3c as well. Multiplying every term by 3 gives 12t + 3c = 1740.",
        },
        {
          stepNumber: 3,
          description: "Subtract (1) from (3) to eliminate c.",
          workingLatex: "(12t + 3c) - (2t + 3c) = 1740 - 740",
          explanation:
            "Both have +3c, so subtract to remove the coffees: 3c - 3c = 0.",
        },
        {
          stepNumber: 4,
          description: "Solve for t.",
          workingLatex: "10t = 1000 \\Rightarrow t = 100",
          explanation:
            "12t - 2t = 10t and 1740 - 740 = 1000, so 10t = 1000 and t = 100 pence.",
        },
        {
          stepNumber: 5,
          description: "Substitute t = 100 into equation (2).",
          workingLatex: "4(100) + c = 580 \\Rightarrow 400 + c = 580 \\Rightarrow c = 180",
          explanation:
            "Put t = 100 into (2): 400 + c = 580, so c = 180 pence.",
        },
        {
          stepNumber: 6,
          description: "Check, then convert back to pounds.",
          workingLatex: "2(100)+3(180)=740 \\checkmark, \\quad 4(100)+180=580 \\checkmark",
          explanation:
            "Substituting t = 100, c = 180: 200 + 540 = 740 and 400 + 180 = 580. Both totals match. Converting back, a tea costs £1.00 and a coffee £1.80.",
        },
      ],
      finalAnswer: "\\(t = \\pounds 1.00,\\; c = \\pounds 1.80\\)",
      canonicalAnswer: "t=100, c=180",
    },
  },
  {
    id: "ga43-023",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A man is \\(4\\) times as old as his son. In \\(6\\) years' time he will be \\(2\\) times as old as his son. How old are they now?",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "forming equations", "substitution", "ages problem", "worded problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define variables and form the equations.",
          workingLatex: "m = 4s \\quad (1), \\qquad m + 6 = 2(s + 6) \\quad (2)",
          explanation:
            "Let the man's age now be m and the son's age now be s. '4 times as old' gives m = 4s. In 6 years both ages rise by 6, so the man is m + 6 and the son s + 6, and then the man is twice the son: m + 6 = 2(s + 6).",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket in equation (2).",
          workingLatex: "m + 6 = 2s + 12",
          explanation:
            "Multiply out 2(s + 6) = 2s + 12. Be sure to multiply both terms inside the bracket by 2.",
        },
        {
          stepNumber: 3,
          description: "Substitute m = 4s from equation (1).",
          workingLatex: "4s + 6 = 2s + 12",
          explanation:
            "Replace m with 4s so the equation contains only s. This is substitution: equation (1) already gives m directly.",
        },
        {
          stepNumber: 4,
          description: "Collect the s-terms.",
          workingLatex: "4s - 2s = 12 - 6 \\Rightarrow 2s = 6",
          explanation:
            "Subtract 2s from both sides and subtract 6 from both sides to gather the s-terms on the left and the numbers on the right.",
        },
        {
          stepNumber: 5,
          description: "Solve for s, then find m.",
          workingLatex: "s = 3; \\quad m = 4(3) = 12",
          explanation:
            "Divide by 2: the son is 3. Then use m = 4s to get m = 12.",
        },
        {
          stepNumber: 6,
          description: "Check both conditions.",
          workingLatex: "12 = 4(3) \\checkmark, \\quad 12 + 6 = 18 = 2(3 + 6) \\checkmark",
          explanation:
            "Now the man (12) is 4 times the son (3). In 6 years he is 18 and the son 9, and 18 = 2 × 9. Both conditions hold.",
        },
      ],
      finalAnswer: "\\(\\text{man } 12,\\; \\text{son } 3\\)",
      canonicalAnswer: "m=12, s=3",
    },
  },
  {
    id: "ga43-024",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A rectangle has perimeter \\(34\\,\\text{cm}\\). Its length is \\(5\\,\\text{cm}\\) more than its width. Find the length and width.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "forming equations", "substitution", "perimeter", "worded problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define variables and form the equations.",
          workingLatex: "2L + 2W = 34 \\quad (1), \\qquad L = W + 5 \\quad (2)",
          explanation:
            "Let the length be L and the width W. The perimeter of a rectangle is 2L + 2W, so 2L + 2W = 34. 'Length 5 more than width' gives L = W + 5.",
        },
        {
          stepNumber: 2,
          description: "Simplify equation (1).",
          workingLatex: "L + W = 17 \\quad (1')",
          explanation:
            "Every term in (1) is even, so divide through by 2 to get the simpler L + W = 17. This makes the substitution cleaner.",
        },
        {
          stepNumber: 3,
          description: "Substitute L = W + 5 into (1').",
          workingLatex: "(W + 5) + W = 17",
          explanation:
            "Equation (2) gives L directly, so replace L with (W + 5) in (1'). Now only W remains.",
        },
        {
          stepNumber: 4,
          description: "Solve for W.",
          workingLatex: "2W + 5 = 17 \\Rightarrow 2W = 12 \\Rightarrow W = 6",
          explanation:
            "Collect: W + W = 2W, giving 2W + 5 = 17. Subtract 5 to get 2W = 12, then divide by 2 for W = 6.",
        },
        {
          stepNumber: 5,
          description: "Find L.",
          workingLatex: "L = 6 + 5 = 11",
          explanation:
            "Use equation (2): L = W + 5 = 6 + 5 = 11.",
        },
        {
          stepNumber: 6,
          description: "Check both conditions.",
          workingLatex: "2(11) + 2(6) = 34 \\checkmark, \\quad 11 = 6 + 5 \\checkmark",
          explanation:
            "The perimeter is 22 + 12 = 34 cm and the length exceeds the width by 5 cm, so length = 11 cm, width = 6 cm.",
        },
      ],
      finalAnswer: "\\(\\text{length } 11\\,\\text{cm},\\; \\text{width } 6\\,\\text{cm}\\)",
      canonicalAnswer: "L=11, W=6",
    },
  },
  {
    id: "ga43-025",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(\\dfrac{x}{3} + \\dfrac{y}{2} = 4\\) and \\(2x - y = 1\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "fractional coefficients", "rearranging", "elimination"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Clear the fractions in the first equation.",
          workingLatex: "6 \\cdot \\left(\\frac{x}{3} + \\frac{y}{2}\\right) = 6 \\cdot 4 \\Rightarrow 2x + 3y = 24 \\quad (1)",
          explanation:
            "Multiply every term by 6, the lowest common denominator of 3 and 2: 6 × x/3 = 2x, 6 × y/2 = 3y, 6 × 4 = 24. This clears both fractions at once.",
        },
        {
          stepNumber: 2,
          description: "Write the second equation alongside.",
          workingLatex: "2x - y = 1 \\quad (2)",
          explanation:
            "Equation (2) is already in integer form. Both equations now have a +2x term, so subtracting will eliminate x.",
        },
        {
          stepNumber: 3,
          description: "Subtract (2) from (1) to eliminate x.",
          workingLatex: "(2x + 3y) - (2x - y) = 24 - 1",
          explanation:
            "Same +2x cancels. Watch the sign on the y-terms: 3y - (-y) = 3y + y = 4y.",
        },
        {
          stepNumber: 4,
          description: "Solve for y.",
          workingLatex: "4y = 23 \\Rightarrow y = \\frac{23}{4}",
          explanation:
            "On the right, 24 - 1 = 23. So 4y = 23 and y = 23/4. It does not simplify, so keep the exact fraction.",
        },
        {
          stepNumber: 5,
          description: "Substitute y = 23/4 into equation (2).",
          workingLatex: "2x - \\frac{23}{4} = 1 \\Rightarrow 2x = 1 + \\frac{23}{4} = \\frac{27}{4} \\Rightarrow x = \\frac{27}{8}",
          explanation:
            "Add 23/4 to both sides; write 1 as 4/4 so 4/4 + 23/4 = 27/4. Then divide by 2, which doubles the denominator: x = 27/8.",
        },
        {
          stepNumber: 6,
          description: "Check in the cleared first equation.",
          workingLatex: "2 \\cdot \\frac{27}{8} + 3 \\cdot \\frac{23}{4} = \\frac{27}{4} + \\frac{69}{4} = \\frac{96}{4} = 24 \\checkmark",
          explanation:
            "2x + 3y = 27/4 + 69/4 = 96/4 = 24 holds, and 2x - y = 27/4 - 23/4 = 4/4 = 1, so both original equations are satisfied.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{27}{8},\\; y = \\dfrac{23}{4}\\)",
      canonicalAnswer: "x=27/8, y=23/4",
    },
  },
  {
    id: "ga43-026",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(2(x + y) = 3x - 4\\) and \\(5x - 2y = 19\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "rearranging", "elimination", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket in the first equation.",
          workingLatex: "2(x + y) = 3x - 4 \\Rightarrow 2x + 2y = 3x - 4",
          explanation:
            "Multiply out the bracket: 2(x + y) = 2x + 2y. The equation is not yet in standard ax + by = c form because x appears on both sides.",
        },
        {
          stepNumber: 2,
          description: "Collect the variable terms on one side.",
          workingLatex: "2y + 4 = 3x - 2x \\Rightarrow x - 2y = 4 \\quad (1)",
          explanation:
            "Subtract 2x from both sides (3x - 2x = x) and add 4 to both sides. Rearranging into standard form gives x - 2y = 4.",
        },
        {
          stepNumber: 3,
          description: "Write the second equation alongside.",
          workingLatex: "5x - 2y = 19 \\quad (2)",
          explanation:
            "Both equations now have a -2y term, the same sign and size, so subtracting will eliminate y.",
        },
        {
          stepNumber: 4,
          description: "Subtract (1) from (2) to eliminate y.",
          workingLatex: "(5x - 2y) - (x - 2y) = 19 - 4 \\Rightarrow 4x = 15",
          explanation:
            "Same -2y cancels: -2y - (-2y) = 0. Then 5x - x = 4x and 19 - 4 = 15.",
        },
        {
          stepNumber: 5,
          description: "Solve for x.",
          workingLatex: "x = \\frac{15}{4}",
          explanation:
            "Dividing by 4 gives x = 15/4, which does not simplify. Keep it as an exact fraction.",
        },
        {
          stepNumber: 6,
          description: "Substitute x = 15/4 into equation (1).",
          workingLatex: "\\frac{15}{4} - 2y = 4 \\Rightarrow -2y = 4 - \\frac{15}{4} = \\frac{1}{4} \\Rightarrow y = -\\frac{1}{8}",
          explanation:
            "Subtract 15/4 from both sides; write 4 as 16/4 so 16/4 - 15/4 = 1/4. Then -2y = 1/4, and dividing by -2 gives y = -1/8 (the negative sign matters).",
        },
        {
          stepNumber: 7,
          description: "Check in equation (2).",
          workingLatex: "5 \\cdot \\frac{15}{4} - 2 \\cdot \\left(-\\frac{1}{8}\\right) = \\frac{75}{4} + \\frac{1}{4} = \\frac{76}{4} = 19 \\checkmark",
          explanation:
            "Equation (2): 75/4 + 1/4 = 76/4 = 19 holds. Equation (1): 15/4 - 2(-1/8) = 15/4 + 1/4 = 16/4 = 4 holds too, so x = 15/4, y = -1/8.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{15}{4},\\; y = -\\dfrac{1}{8}\\)",
      canonicalAnswer: "x=15/4, y=-1/8",
    },
  },
  {
    id: "ga43-027",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(7x - 3y = 20\\) and \\(2x + 4y = -2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "elimination", "multiply both equations", "negative solution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the equations and plan to eliminate y.",
          workingLatex: "7x - 3y = 20 \\quad (1), \\qquad 2x + 4y = -2 \\quad (2)",
          explanation:
            "The y-coefficients are -3 and 4; their lowest common multiple is 12, so we scale both equations to make the y-terms ±12.",
        },
        {
          stepNumber: 2,
          description: "Multiply (1) by 4 and (2) by 3.",
          workingLatex: "28x - 12y = 80 \\quad (3), \\qquad 6x + 12y = -6 \\quad (4)",
          explanation:
            "(1) × 4 gives 28x - 12y = 80; (2) × 3 gives 6x + 12y = -6. Multiply every term. The y-terms are now -12y and +12y.",
        },
        {
          stepNumber: 3,
          description: "Add (3) and (4) to eliminate y.",
          workingLatex: "(28x - 12y) + (6x + 12y) = 80 + (-6) \\Rightarrow 34x = 74",
          explanation:
            "Opposite signs add to cancel y: -12y + 12y = 0. Then 28x + 6x = 34x and 80 - 6 = 74.",
        },
        {
          stepNumber: 4,
          description: "Solve for x and simplify the fraction.",
          workingLatex: "x = \\frac{74}{34} = \\frac{37}{17}",
          explanation:
            "Divide both sides by 34, then cancel the common factor of 2 (74 ÷ 2 = 37, 34 ÷ 2 = 17): x = 37/17.",
        },
        {
          stepNumber: 5,
          description: "Rearrange (2) for y and substitute x = 37/17.",
          workingLatex: "4y = -2 - 2 \\cdot \\frac{37}{17} = \\frac{-34 - 74}{17} = -\\frac{108}{17} \\Rightarrow y = -\\frac{27}{17}",
          explanation:
            "From 2x + 4y = -2, make y the subject: 4y = -2 - 2x. Write -2 as -34/17 and 2x as 74/17, combine to -108/17, then divide by 4 (108 ÷ 4 = 27).",
        },
        {
          stepNumber: 6,
          description: "Check in equation (1).",
          workingLatex: "7 \\cdot \\frac{37}{17} - 3 \\cdot \\left(-\\frac{27}{17}\\right) = \\frac{259 + 81}{17} = \\frac{340}{17} = 20 \\checkmark",
          explanation:
            "7x - 3y = 259/17 + 81/17 = 340/17 = 20. Equation (1) is satisfied, so x = 37/17, y = -27/17.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{37}{17},\\; y = -\\dfrac{27}{17}\\)",
      canonicalAnswer: "x=37/17, y=-27/17",
    },
  },
  {
    id: "ga43-028",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The line \\(y = 2x - 1\\) meets the line \\(3x + 2y = 12\\). Find the coordinates of their point of intersection.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "substitution", "point of intersection", "coordinate geometry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise that the intersection satisfies both equations.",
          workingLatex: "y = 2x - 1 \\quad (1), \\qquad 3x + 2y = 12 \\quad (2)",
          explanation:
            "At the point where two lines meet, the same (x, y) lies on both lines, so the coordinates solve the equations simultaneously. Equation (1) gives y directly, so substitution is the natural method.",
        },
        {
          stepNumber: 2,
          description: "Substitute y = 2x - 1 into equation (2).",
          workingLatex: "3x + 2(2x - 1) = 12",
          explanation:
            "Replace y in (2) with the expression 2x - 1, keeping the bracket so the factor 2 multiplies both terms inside.",
        },
        {
          stepNumber: 3,
          description: "Expand the bracket.",
          workingLatex: "3x + 4x - 2 = 12",
          explanation:
            "Multiply out 2(2x - 1) = 4x - 2. Make sure both terms inside the bracket are multiplied by 2.",
        },
        {
          stepNumber: 4,
          description: "Collect like terms and solve for x.",
          workingLatex: "7x - 2 = 12 \\Rightarrow 7x = 14 \\Rightarrow x = 2",
          explanation:
            "Combine the x-terms: 3x + 4x = 7x, giving 7x - 2 = 12. Add 2 to get 7x = 14, then divide by 7 for x = 2.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 2 into equation (1) to find y.",
          workingLatex: "y = 2(2) - 1 = 3",
          explanation:
            "Use the rearranged equation (1): y = 4 - 1 = 3.",
        },
        {
          stepNumber: 6,
          description: "Check in equation (2) and state the point.",
          workingLatex: "3(2) + 2(3) = 6 + 6 = 12 \\checkmark",
          explanation:
            "Substituting x = 2, y = 3 into (2): 6 + 6 = 12 holds. The lines meet at (2, 3). Remember to give the answer as a coordinate pair.",
        },
      ],
      finalAnswer: "\\((2,\\; 3)\\)",
      canonicalAnswer: "x=2, y=3",
    },
  },
  {
    id: "ga43-029",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A shop sells two sizes of box. \\(5\\) small boxes and \\(2\\) large boxes hold \\(54\\) items; \\(2\\) small boxes and \\(3\\) large boxes hold \\(59\\) items. How many items does each size of box hold?",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "forming equations", "elimination", "multiply both equations", "worded problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define variables and form the equations.",
          workingLatex: "5s + 2L = 54 \\quad (1), \\qquad 2s + 3L = 59 \\quad (2)",
          explanation:
            "Let a small box hold s items and a large box hold L items. '5 small and 2 large hold 54' gives 5s + 2L = 54; '2 small and 3 large hold 59' gives 2s + 3L = 59.",
        },
        {
          stepNumber: 2,
          description: "Plan to eliminate s; lowest common multiple of 5 and 2 is 10.",
          workingLatex: "(1) \\times 2, \\quad (2) \\times 5",
          explanation:
            "The s-coefficients are 5 and 2, with lowest common multiple 10. Scaling (1) by 2 and (2) by 5 makes both s-coefficients equal to 10.",
        },
        {
          stepNumber: 3,
          description: "Carry out the multiplications.",
          workingLatex: "10s + 4L = 108 \\quad (3), \\qquad 10s + 15L = 295 \\quad (4)",
          explanation:
            "Multiply every term: (1) × 2 = 10s + 4L = 108; (2) × 5 = 10s + 15L = 295. Both start with 10s.",
        },
        {
          stepNumber: 4,
          description: "Subtract (3) from (4) to eliminate s.",
          workingLatex: "(10s + 15L) - (10s + 4L) = 295 - 108 \\Rightarrow 11L = 187",
          explanation:
            "Same +10s cancels. Then 15L - 4L = 11L and 295 - 108 = 187.",
        },
        {
          stepNumber: 5,
          description: "Solve for L.",
          workingLatex: "L = \\frac{187}{11} = 17",
          explanation:
            "Divide both sides by 11. Since 11 × 17 = 187, a large box holds 17 items.",
        },
        {
          stepNumber: 6,
          description: "Substitute L = 17 into equation (1).",
          workingLatex: "5s + 2(17) = 54 \\Rightarrow 5s + 34 = 54 \\Rightarrow 5s = 20 \\Rightarrow s = 4",
          explanation:
            "Put L = 17 into (1): 5s + 34 = 54, so 5s = 20 and s = 4. A small box holds 4 items.",
        },
        {
          stepNumber: 7,
          description: "Check in both original equations.",
          workingLatex: "5(4)+2(17)=54 \\checkmark, \\quad 2(4)+3(17)=59 \\checkmark",
          explanation:
            "Substituting s = 4, L = 17: 20 + 34 = 54 and 8 + 51 = 59. Both equations hold, so a small box holds 4 items and a large box 17.",
        },
      ],
      finalAnswer: "\\(s = 4,\\; L = 17\\)",
      canonicalAnswer: "s=4, L=17",
    },
  },
  {
    id: "ga43-030",
    topicRef: "ga43",
    topicTitle: "Linear simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(\\dfrac{x + y}{2} = 4\\) and \\(\\dfrac{x - y}{3} = 1\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear simultaneous equations", "fractional coefficients", "rearranging", "elimination"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Clear the fraction in the first equation.",
          workingLatex: "\\frac{x + y}{2} = 4 \\Rightarrow x + y = 8 \\quad (1)",
          explanation:
            "Multiply both sides by 2 to remove the denominator. The whole numerator (x + y) is multiplied, giving x + y = 8.",
        },
        {
          stepNumber: 2,
          description: "Clear the fraction in the second equation.",
          workingLatex: "\\frac{x - y}{3} = 1 \\Rightarrow x - y = 3 \\quad (2)",
          explanation:
            "Multiply both sides by 3 to remove the denominator: x - y = 3. Now both equations are in clean integer form.",
        },
        {
          stepNumber: 3,
          description: "Add (1) and (2) to eliminate y.",
          workingLatex: "(x + y) + (x - y) = 8 + 3 \\Rightarrow 2x = 11",
          explanation:
            "The y-terms +y and -y have different signs, so adding cancels them: on the right, 8 + 3 = 11.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{11}{2}",
          explanation:
            "Dividing by 2 gives x = 11/2. It does not simplify, so keep the exact fraction.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 11/2 into equation (1).",
          workingLatex: "\\frac{11}{2} + y = 8 \\Rightarrow y = 8 - \\frac{11}{2} = \\frac{16 - 11}{2} = \\frac{5}{2}",
          explanation:
            "Use x + y = 8. Write 8 as 16/2 so it shares the denominator, then subtract: y = 5/2.",
        },
        {
          stepNumber: 6,
          description: "Check in both original equations.",
          workingLatex: "\\frac{\\frac{11}{2} + \\frac{5}{2}}{2} = \\frac{8}{2} = 4 \\checkmark, \\quad \\frac{\\frac{11}{2} - \\frac{5}{2}}{3} = \\frac{3}{3} = 1 \\checkmark",
          explanation:
            "First equation: (11/2 + 5/2)/2 = (16/2)/2 = 8/2 = 4. Second: (11/2 - 5/2)/3 = (6/2)/3 = 3/3 = 1. Both hold, so x = 11/2, y = 5/2.",
        },
      ],
      finalAnswer: "\\(x = \\dfrac{11}{2},\\; y = \\dfrac{5}{2}\\)",
      canonicalAnswer: "x=11/2, y=5/2",
    },
  },
];
