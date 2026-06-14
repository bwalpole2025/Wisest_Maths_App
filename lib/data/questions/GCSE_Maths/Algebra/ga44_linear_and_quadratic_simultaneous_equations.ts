/**
 * Topic: Linear and quadratic simultaneous equations
 * Ref: ga44  (DfE A19)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: solving a pair of simultaneous equations where one is linear and
 *   one is quadratic (or otherwise nonlinear). The universal method:
 *   SUBSTITUTE the linear equation into the quadratic to eliminate one
 *   variable, forming a single quadratic in the other; solve it (factorise or
 *   formula, showing the discriminant); back-substitute EACH solution into the
 *   LINEAR equation to recover the matching value; state BOTH coordinate pairs;
 *   and CHECK each pair in both original equations. Clusters:
 *   (1) a straight line y = mx + c meets a quadratic y = ax^2 + bx + c — two
 *       intersection points;
 *   (2) a line meets a CIRCLE x^2 + y^2 = r^2 (and translated circles) — two
 *       intersection points;
 *   (3) a rectangular hyperbola xy = k or y = k/x meeting a linear equation;
 *   (4) cases giving ONE repeated root — the line is a TANGENT, so there is a
 *       single point of contact;
 *   (5) discriminant reasoning (b^2 - 4ac): show a line is a tangent, find k
 *       for tangency, or show a line never meets a curve;
 *   (6) worded / geometric framing — intersection of two graphs, or the length
 *       of the chord joining the two intersection points.
 *   Solutions stress: rearrange the linear equation for the variable that is
 *   easiest to substitute; expand brackets carefully (watch signs and the
 *   square of a binomial); collect to a = 0 quadratic; solve and back-substitute
 *   into the LINEAR equation (cheaper and avoids spurious roots); and always
 *   verify both points in both originals.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga44-001 .. ga44-004  (4)   cleanest line-meets-y=x^2 items
 *   - Standard:   ga44-005 .. ga44-018  (14)
 *   - Challenge:  ga44-019 .. ga44-030  (12)
 * Id range: ga44-001 .. ga44-030.
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
    id: "ga44-001",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = x^2\\) and \\(y = x + 2\\). Give both points \\((x,\\,y)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the two expressions for y equal and form a quadratic.",
          workingLatex: "x^2 = x + 2 \\;\\Rightarrow\\; x^2 - x - 2 = 0",
          explanation:
            "Both equations give y, so the right-hand sides are equal. Move everything to one side to get a quadratic equal to zero.",
        },
        {
          stepNumber: 2,
          description: "Factorise and solve for x.",
          workingLatex: "(x - 2)(x + 1) = 0 \\;\\Rightarrow\\; x = 2 \\text{ or } x = -1",
          explanation:
            "Find two numbers multiplying to -2 and adding to -1: these are -2 and +1.",
        },
        {
          stepNumber: 3,
          description: "Back-substitute each x into y = x + 2.",
          workingLatex: "x=2:\\; y = 4; \\qquad x=-1:\\; y = 1",
          explanation:
            "Use the linear equation y = x + 2 to find each y. The points are (2, 4) and (-1, 1).",
        },
      ],
      finalAnswer: "\\((2,\\,4)\\) and \\((-1,\\,1)\\)",
      canonicalAnswer: "(2,4) and (-1,1)",
    },
  },
  {
    id: "ga44-002",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = x^2\\) and \\(y = 4x - 3\\). Give both points \\((x,\\,y)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Equate the two expressions for y and rearrange.",
          workingLatex: "x^2 = 4x - 3 \\;\\Rightarrow\\; x^2 - 4x + 3 = 0",
          explanation:
            "Substitute y = x^2 into y = 4x - 3 and bring all terms to one side.",
        },
        {
          stepNumber: 2,
          description: "Factorise and solve.",
          workingLatex: "(x - 1)(x - 3) = 0 \\;\\Rightarrow\\; x = 1 \\text{ or } x = 3",
          explanation:
            "Two numbers multiplying to +3 and adding to -4 are -1 and -3.",
        },
        {
          stepNumber: 3,
          description: "Find each y from y = 4x - 3.",
          workingLatex: "x=1:\\; y = 1; \\qquad x=3:\\; y = 9",
          explanation:
            "Substitute back into the linear equation. The points are (1, 1) and (3, 9).",
        },
      ],
      finalAnswer: "\\((1,\\,1)\\) and \\((3,\\,9)\\)",
      canonicalAnswer: "(1,1) and (3,9)",
    },
  },
  {
    id: "ga44-003",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = x^2\\) and \\(y = 2x + 8\\). Give both points \\((x,\\,y)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Equate and rearrange to a quadratic.",
          workingLatex: "x^2 = 2x + 8 \\;\\Rightarrow\\; x^2 - 2x - 8 = 0",
          explanation:
            "Substitute y = x^2 into the linear equation and move all terms to one side.",
        },
        {
          stepNumber: 2,
          description: "Factorise and solve.",
          workingLatex: "(x - 4)(x + 2) = 0 \\;\\Rightarrow\\; x = 4 \\text{ or } x = -2",
          explanation:
            "Two numbers multiplying to -8 and adding to -2 are -4 and +2.",
        },
        {
          stepNumber: 3,
          description: "Find each y from y = 2x + 8.",
          workingLatex: "x=4:\\; y = 16; \\qquad x=-2:\\; y = 4",
          explanation:
            "Substitute back into the linear equation. The points are (4, 16) and (-2, 4).",
        },
      ],
      finalAnswer: "\\((4,\\,16)\\) and \\((-2,\\,4)\\)",
      canonicalAnswer: "(4,16) and (-2,4)",
    },
  },
  {
    id: "ga44-004",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = x^2\\) and \\(y = -x + 6\\). Give both points \\((x,\\,y)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Equate the two expressions for y and rearrange.",
          workingLatex: "x^2 = -x + 6 \\;\\Rightarrow\\; x^2 + x - 6 = 0",
          explanation:
            "Substitute y = x^2 into y = -x + 6 and collect all terms on the left.",
        },
        {
          stepNumber: 2,
          description: "Factorise and solve.",
          workingLatex: "(x + 3)(x - 2) = 0 \\;\\Rightarrow\\; x = -3 \\text{ or } x = 2",
          explanation:
            "Two numbers multiplying to -6 and adding to +1 are +3 and -2.",
        },
        {
          stepNumber: 3,
          description: "Find each y from y = -x + 6.",
          workingLatex: "x=-3:\\; y = 9; \\qquad x=2:\\; y = 4",
          explanation:
            "Substitute back into the linear equation. The points are (-3, 9) and (2, 4).",
        },
      ],
      finalAnswer: "\\((-3,\\,9)\\) and \\((2,\\,4)\\)",
      canonicalAnswer: "(-3,9) and (2,4)",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga44-005",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = x^2 - 3x + 2\\) and \\(y = x - 1\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "factorising", "line meets quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the linear expression for y into the quadratic.",
          workingLatex: "x - 1 = x^2 - 3x + 2",
          explanation:
            "Both equations give y, so set the right-hand sides equal. This eliminates y and leaves a single equation in x.",
        },
        {
          stepNumber: 2,
          description: "Collect all terms on one side.",
          workingLatex: "0 = x^2 - 3x + 2 - x + 1 = x^2 - 4x + 3",
          explanation:
            "Subtract (x - 1) from both sides: -3x - x = -4x and +2 + 1 = +3.",
        },
        {
          stepNumber: 3,
          description: "Factorise the quadratic.",
          workingLatex: "x^2 - 4x + 3 = (x - 1)(x - 3) = 0",
          explanation:
            "Two numbers multiplying to +3 and adding to -4 are -1 and -3.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = 1 \\quad \\text{or} \\quad x = 3",
          explanation:
            "Set each factor to zero.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute each x into the LINEAR equation y = x - 1.",
          workingLatex: "x=1:\\; y = 0; \\qquad x=3:\\; y = 2",
          explanation:
            "Using the linear equation is quickest. The candidate points are (1, 0) and (3, 2).",
        },
        {
          stepNumber: 6,
          description: "Check each point in the quadratic.",
          workingLatex: "(1):\\; 1 - 3 + 2 = 0 \\checkmark; \\quad (3):\\; 9 - 9 + 2 = 2 \\checkmark",
          explanation:
            "Both points satisfy y = x^2 - 3x + 2, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((1,\\,0)\\) and \\((3,\\,2)\\)",
      canonicalAnswer: "(1,0) and (3,2)",
    },
  },
  {
    id: "ga44-006",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = x^2 + 2x - 1\\) and \\(y = 3x + 5\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "factorising", "line meets quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the expressions for y equal.",
          workingLatex: "x^2 + 2x - 1 = 3x + 5",
          explanation:
            "Eliminate y by equating both right-hand sides.",
        },
        {
          stepNumber: 2,
          description: "Collect to one side.",
          workingLatex: "x^2 + 2x - 1 - 3x - 5 = 0 \\;\\Rightarrow\\; x^2 - x - 6 = 0",
          explanation:
            "2x - 3x = -x and -1 - 5 = -6.",
        },
        {
          stepNumber: 3,
          description: "Factorise.",
          workingLatex: "(x - 3)(x + 2) = 0",
          explanation:
            "Two numbers multiplying to -6 and adding to -1 are -3 and +2.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = 3 \\quad \\text{or} \\quad x = -2",
          explanation:
            "Set each factor to zero.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute into y = 3x + 5.",
          workingLatex: "x=3:\\; y = 14; \\qquad x=-2:\\; y = -1",
          explanation:
            "The candidate points are (3, 14) and (-2, -1).",
        },
        {
          stepNumber: 6,
          description: "Check in the quadratic.",
          workingLatex: "(3):\\; 9 + 6 - 1 = 14 \\checkmark; \\quad (-2):\\; 4 - 4 - 1 = -1 \\checkmark",
          explanation:
            "Both points satisfy the quadratic, so the solutions are confirmed.",
        },
      ],
      finalAnswer: "\\((3,\\,14)\\) and \\((-2,\\,-1)\\)",
      canonicalAnswer: "(3,14) and (-2,-1)",
    },
  },
  {
    id: "ga44-007",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = x + 1\\) and \\(x^2 + y^2 = 25\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "circle", "line meets circle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the linear equation into the circle.",
          workingLatex: "x^2 + (x + 1)^2 = 25",
          explanation:
            "Replace y with x + 1 in x^2 + y^2 = 25 so the equation is in x only.",
        },
        {
          stepNumber: 2,
          description: "Expand the square.",
          workingLatex: "x^2 + x^2 + 2x + 1 = 25",
          explanation:
            "(x + 1)^2 = x^2 + 2x + 1. Be careful to include the middle term 2x.",
        },
        {
          stepNumber: 3,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "2x^2 + 2x - 24 = 0 \\;\\Rightarrow\\; x^2 + x - 12 = 0",
          explanation:
            "Combine like terms then divide through by 2 to simplify.",
        },
        {
          stepNumber: 4,
          description: "Factorise and solve.",
          workingLatex: "(x + 4)(x - 3) = 0 \\;\\Rightarrow\\; x = -4 \\text{ or } x = 3",
          explanation:
            "Two numbers multiplying to -12 and adding to +1 are +4 and -3.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute into y = x + 1.",
          workingLatex: "x=-4:\\; y = -3; \\qquad x=3:\\; y = 4",
          explanation:
            "The candidate points are (-4, -3) and (3, 4).",
        },
        {
          stepNumber: 6,
          description: "Check in the circle.",
          workingLatex: "16 + 9 = 25 \\checkmark; \\qquad 9 + 16 = 25 \\checkmark",
          explanation:
            "Both points lie on x^2 + y^2 = 25, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((-4,\\,-3)\\) and \\((3,\\,4)\\)",
      canonicalAnswer: "(-4,-3) and (3,4)",
    },
  },
  {
    id: "ga44-008",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = x - 7\\) and \\(x^2 + y^2 = 25\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "circle", "line meets circle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute y = x - 7 into the circle.",
          workingLatex: "x^2 + (x - 7)^2 = 25",
          explanation:
            "Replace y so the equation is in x only.",
        },
        {
          stepNumber: 2,
          description: "Expand the square.",
          workingLatex: "x^2 + x^2 - 14x + 49 = 25",
          explanation:
            "(x - 7)^2 = x^2 - 14x + 49.",
        },
        {
          stepNumber: 3,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "2x^2 - 14x + 24 = 0 \\;\\Rightarrow\\; x^2 - 7x + 12 = 0",
          explanation:
            "Combine like terms (49 - 25 = 24) and divide by 2.",
        },
        {
          stepNumber: 4,
          description: "Factorise and solve.",
          workingLatex: "(x - 3)(x - 4) = 0 \\;\\Rightarrow\\; x = 3 \\text{ or } x = 4",
          explanation:
            "Two numbers multiplying to +12 and adding to -7 are -3 and -4.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute into y = x - 7.",
          workingLatex: "x=3:\\; y = -4; \\qquad x=4:\\; y = -3",
          explanation:
            "The candidate points are (3, -4) and (4, -3).",
        },
        {
          stepNumber: 6,
          description: "Check in the circle.",
          workingLatex: "9 + 16 = 25 \\checkmark; \\qquad 16 + 9 = 25 \\checkmark",
          explanation:
            "Both points lie on the circle, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((3,\\,-4)\\) and \\((4,\\,-3)\\)",
      canonicalAnswer: "(3,-4) and (4,-3)",
    },
  },
  {
    id: "ga44-009",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = 2x\\) and \\(xy = 8\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "hyperbola", "line meets hyperbola"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute y = 2x into xy = 8.",
          workingLatex: "x(2x) = 8 \\;\\Rightarrow\\; 2x^2 = 8",
          explanation:
            "Replace y in the product equation. This gives a quadratic in x with no linear term.",
        },
        {
          stepNumber: 2,
          description: "Solve for x.",
          workingLatex: "x^2 = 4 \\;\\Rightarrow\\; x = \\pm 2",
          explanation:
            "Divide by 2 then take the square root, keeping BOTH the positive and negative roots.",
        },
        {
          stepNumber: 3,
          description: "Back-substitute into y = 2x.",
          workingLatex: "x=2:\\; y = 4; \\qquad x=-2:\\; y = -4",
          explanation:
            "The candidate points are (2, 4) and (-2, -4).",
        },
        {
          stepNumber: 4,
          description: "Check in xy = 8.",
          workingLatex: "2 \\cdot 4 = 8 \\checkmark; \\qquad (-2)(-4) = 8 \\checkmark",
          explanation:
            "Both products equal 8, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((2,\\,4)\\) and \\((-2,\\,-4)\\)",
      canonicalAnswer: "(2,4) and (-2,-4)",
    },
  },
  {
    id: "ga44-010",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(x + y = 5\\) and \\(xy = 6\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "hyperbola", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the linear equation for y.",
          workingLatex: "y = 5 - x",
          explanation:
            "Make y the subject so it can be substituted into the product equation.",
        },
        {
          stepNumber: 2,
          description: "Substitute into xy = 6.",
          workingLatex: "x(5 - x) = 6 \\;\\Rightarrow\\; 5x - x^2 = 6",
          explanation:
            "Replace y with 5 - x and expand the bracket.",
        },
        {
          stepNumber: 3,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "x^2 - 5x + 6 = 0",
          explanation:
            "Move all terms to one side; multiplying through by -1 leaves a positive x^2 coefficient.",
        },
        {
          stepNumber: 4,
          description: "Factorise and solve.",
          workingLatex: "(x - 2)(x - 3) = 0 \\;\\Rightarrow\\; x = 2 \\text{ or } x = 3",
          explanation:
            "Two numbers multiplying to +6 and adding to -5 are -2 and -3.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute into y = 5 - x.",
          workingLatex: "x=2:\\; y = 3; \\qquad x=3:\\; y = 2",
          explanation:
            "The candidate points are (2, 3) and (3, 2).",
        },
        {
          stepNumber: 6,
          description: "Check in xy = 6.",
          workingLatex: "2 \\cdot 3 = 6 \\checkmark; \\qquad 3 \\cdot 2 = 6 \\checkmark",
          explanation:
            "Both points satisfy both equations, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((2,\\,3)\\) and \\((3,\\,2)\\)",
      canonicalAnswer: "(2,3) and (3,2)",
    },
  },
  {
    id: "ga44-011",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = 2x + 1\\) and \\(y = x^2 + x - 1\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "factorising", "line meets quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the expressions for y equal.",
          workingLatex: "2x + 1 = x^2 + x - 1",
          explanation:
            "Eliminate y by equating the two right-hand sides.",
        },
        {
          stepNumber: 2,
          description: "Collect to one side.",
          workingLatex: "0 = x^2 + x - 1 - 2x - 1 = x^2 - x - 2",
          explanation:
            "x - 2x = -x and -1 - 1 = -2.",
        },
        {
          stepNumber: 3,
          description: "Factorise.",
          workingLatex: "(x - 2)(x + 1) = 0",
          explanation:
            "Two numbers multiplying to -2 and adding to -1 are -2 and +1.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = 2 \\quad \\text{or} \\quad x = -1",
          explanation:
            "Set each factor to zero.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute into y = 2x + 1.",
          workingLatex: "x=2:\\; y = 5; \\qquad x=-1:\\; y = -1",
          explanation:
            "The candidate points are (2, 5) and (-1, -1).",
        },
        {
          stepNumber: 6,
          description: "Check in the quadratic.",
          workingLatex: "(2):\\; 4 + 2 - 1 = 5 \\checkmark; \\quad (-1):\\; 1 - 1 - 1 = -1 \\checkmark",
          explanation:
            "Both points satisfy the quadratic, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((2,\\,5)\\) and \\((-1,\\,-1)\\)",
      canonicalAnswer: "(2,5) and (-1,-1)",
    },
  },
  {
    id: "ga44-012",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(2x + y = 1\\) and \\(y = x^2 - 4\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "rearranging", "line meets quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the linear equation for y.",
          workingLatex: "y = 1 - 2x",
          explanation:
            "Make y the subject so it can be substituted into the quadratic.",
        },
        {
          stepNumber: 2,
          description: "Substitute into y = x^2 - 4.",
          workingLatex: "1 - 2x = x^2 - 4",
          explanation:
            "Replace y on the quadratic's left with the linear expression.",
        },
        {
          stepNumber: 3,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "0 = x^2 - 4 - 1 + 2x = x^2 + 2x - 5",
          explanation:
            "Bring all terms to one side: -4 - 1 = -5 and the +2x comes from moving -2x across.",
        },
        {
          stepNumber: 4,
          description: "The quadratic does not factorise; use the formula. Compute the discriminant.",
          workingLatex: "b^2 - 4ac = 2^2 - 4(1)(-5) = 4 + 20 = 24",
          explanation:
            "With a = 1, b = 2, c = -5. The discriminant 24 > 0, so there are two distinct real roots.",
        },
        {
          stepNumber: 5,
          description: "Apply the quadratic formula and simplify the surd.",
          workingLatex: "x = \\frac{-2 \\pm \\sqrt{24}}{2} = \\frac{-2 \\pm 2\\sqrt{6}}{2} = -1 \\pm \\sqrt{6}",
          explanation:
            "\\sqrt{24} = 2\\sqrt{6}; dividing numerator and denominator by 2 gives -1 \\pm \\sqrt{6}.",
        },
        {
          stepNumber: 6,
          description: "Back-substitute into y = 1 - 2x.",
          workingLatex: "y = 1 - 2(-1 \\pm \\sqrt 6) = 3 \\mp 2\\sqrt 6",
          explanation:
            "For x = -1 + \\sqrt 6, y = 3 - 2\\sqrt 6; for x = -1 - \\sqrt 6, y = 3 + 2\\sqrt 6.",
        },
      ],
      finalAnswer: "\\((-1+\\sqrt{6},\\,3-2\\sqrt{6})\\) and \\((-1-\\sqrt{6},\\,3+2\\sqrt{6})\\)",
      canonicalAnswer: "(-1+sqrt(6),3-2*sqrt(6)) and (-1-sqrt(6),3+2*sqrt(6))",
    },
  },
  {
    id: "ga44-013",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = x - 1\\) and \\(x^2 + y^2 = 5\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "circle", "line meets circle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute y = x - 1 into the circle.",
          workingLatex: "x^2 + (x - 1)^2 = 5",
          explanation:
            "Replace y so the equation is in x only.",
        },
        {
          stepNumber: 2,
          description: "Expand and simplify.",
          workingLatex: "x^2 + x^2 - 2x + 1 = 5 \\;\\Rightarrow\\; 2x^2 - 2x - 4 = 0",
          explanation:
            "(x - 1)^2 = x^2 - 2x + 1; combine, then move 5 across (1 - 5 = -4).",
        },
        {
          stepNumber: 3,
          description: "Divide by 2 and factorise.",
          workingLatex: "x^2 - x - 2 = 0 \\;\\Rightarrow\\; (x - 2)(x + 1) = 0",
          explanation:
            "Simplify first, then factorise: numbers multiplying to -2 and adding to -1 are -2 and +1.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = 2 \\quad \\text{or} \\quad x = -1",
          explanation:
            "Set each factor to zero.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute into y = x - 1.",
          workingLatex: "x=2:\\; y = 1; \\qquad x=-1:\\; y = -2",
          explanation:
            "The candidate points are (2, 1) and (-1, -2).",
        },
        {
          stepNumber: 6,
          description: "Check in the circle.",
          workingLatex: "4 + 1 = 5 \\checkmark; \\qquad 1 + 4 = 5 \\checkmark",
          explanation:
            "Both points lie on x^2 + y^2 = 5, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((2,\\,1)\\) and \\((-1,\\,-2)\\)",
      canonicalAnswer: "(2,1) and (-1,-2)",
    },
  },
  {
    id: "ga44-014",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = 4 - x\\) and \\(y = x^2 - 2x - 2\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "factorising", "line meets quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the expressions for y equal.",
          workingLatex: "4 - x = x^2 - 2x - 2",
          explanation:
            "Eliminate y by equating both right-hand sides.",
        },
        {
          stepNumber: 2,
          description: "Collect to one side.",
          workingLatex: "0 = x^2 - 2x - 2 - 4 + x = x^2 - x - 6",
          explanation:
            "-2x + x = -x and -2 - 4 = -6.",
        },
        {
          stepNumber: 3,
          description: "Factorise and solve.",
          workingLatex: "(x - 3)(x + 2) = 0 \\;\\Rightarrow\\; x = 3 \\text{ or } x = -2",
          explanation:
            "Two numbers multiplying to -6 and adding to -1 are -3 and +2.",
        },
        {
          stepNumber: 4,
          description: "Back-substitute into y = 4 - x.",
          workingLatex: "x=3:\\; y = 1; \\qquad x=-2:\\; y = 6",
          explanation:
            "The candidate points are (3, 1) and (-2, 6).",
        },
        {
          stepNumber: 5,
          description: "Check in the quadratic.",
          workingLatex: "(3):\\; 9 - 6 - 2 = 1 \\checkmark; \\quad (-2):\\; 4 + 4 - 2 = 6 \\checkmark",
          explanation:
            "Both points satisfy the quadratic, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((3,\\,1)\\) and \\((-2,\\,6)\\)",
      canonicalAnswer: "(3,1) and (-2,6)",
    },
  },
  {
    id: "ga44-015",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = \\dfrac{12}{x}\\) and \\(y = x + 1\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "hyperbola", "line meets hyperbola"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the expressions for y equal.",
          workingLatex: "\\frac{12}{x} = x + 1",
          explanation:
            "Both equations give y, so equate the right-hand sides.",
        },
        {
          stepNumber: 2,
          description: "Multiply through by x to clear the fraction.",
          workingLatex: "12 = x(x + 1) = x^2 + x",
          explanation:
            "Multiplying both sides by x removes the denominator (x \\neq 0).",
        },
        {
          stepNumber: 3,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "x^2 + x - 12 = 0",
          explanation:
            "Move 12 across to the left.",
        },
        {
          stepNumber: 4,
          description: "Factorise and solve.",
          workingLatex: "(x + 4)(x - 3) = 0 \\;\\Rightarrow\\; x = -4 \\text{ or } x = 3",
          explanation:
            "Two numbers multiplying to -12 and adding to +1 are +4 and -3.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute into y = x + 1.",
          workingLatex: "x=-4:\\; y = -3; \\qquad x=3:\\; y = 4",
          explanation:
            "The candidate points are (-4, -3) and (3, 4).",
        },
        {
          stepNumber: 6,
          description: "Check in y = 12/x.",
          workingLatex: "\\frac{12}{-4} = -3 \\checkmark; \\qquad \\frac{12}{3} = 4 \\checkmark",
          explanation:
            "Both points satisfy y = 12/x, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((-4,\\,-3)\\) and \\((3,\\,4)\\)",
      canonicalAnswer: "(-4,-3) and (3,4)",
    },
  },
  {
    id: "ga44-016",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = 2x - 3\\) and \\(x^2 + y^2 = 2\\). Give both points \\((x,\\,y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "circle", "line meets circle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute y = 2x - 3 into the circle.",
          workingLatex: "x^2 + (2x - 3)^2 = 2",
          explanation:
            "Replace y so the equation is in x only.",
        },
        {
          stepNumber: 2,
          description: "Expand the square.",
          workingLatex: "x^2 + 4x^2 - 12x + 9 = 2",
          explanation:
            "(2x - 3)^2 = 4x^2 - 12x + 9.",
        },
        {
          stepNumber: 3,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "5x^2 - 12x + 7 = 0",
          explanation:
            "Combine like terms (9 - 2 = 7).",
        },
        {
          stepNumber: 4,
          description: "Factorise and solve.",
          workingLatex: "(5x - 7)(x - 1) = 0 \\;\\Rightarrow\\; x = \\frac{7}{5} \\text{ or } x = 1",
          explanation:
            "Check: (5x - 7)(x - 1) = 5x^2 - 5x - 7x + 7 = 5x^2 - 12x + 7.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute into y = 2x - 3.",
          workingLatex: "x=\\frac{7}{5}:\\; y = \\frac{14}{5} - 3 = -\\frac{1}{5}; \\qquad x=1:\\; y = -1",
          explanation:
            "The candidate points are (7/5, -1/5) and (1, -1).",
        },
        {
          stepNumber: 6,
          description: "Check in the circle.",
          workingLatex: "\\frac{49}{25} + \\frac{1}{25} = \\frac{50}{25} = 2 \\checkmark; \\qquad 1 + 1 = 2 \\checkmark",
          explanation:
            "Both points lie on x^2 + y^2 = 2, confirming the solutions.",
        },
      ],
      finalAnswer: "\\(\\left(\\dfrac{7}{5},\\,-\\dfrac{1}{5}\\right)\\) and \\((1,\\,-1)\\)",
      canonicalAnswer: "(7/5,-1/5) and (1,-1)",
    },
  },
  {
    id: "ga44-017",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The line \\(y = x + 4\\) meets the curve \\(y = x^2 + 2\\) at two points. Find the coordinates of both points of intersection.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "factorising", "intersection points"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "At an intersection the y-values are equal, so equate them.",
          workingLatex: "x + 4 = x^2 + 2",
          explanation:
            "Intersection points satisfy both equations, so set the two expressions for y equal.",
        },
        {
          stepNumber: 2,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "0 = x^2 + 2 - x - 4 = x^2 - x - 2",
          explanation:
            "Bring all terms to one side: 2 - 4 = -2.",
        },
        {
          stepNumber: 3,
          description: "Factorise and solve.",
          workingLatex: "(x - 2)(x + 1) = 0 \\;\\Rightarrow\\; x = 2 \\text{ or } x = -1",
          explanation:
            "Two numbers multiplying to -2 and adding to -1 are -2 and +1.",
        },
        {
          stepNumber: 4,
          description: "Back-substitute into y = x + 4.",
          workingLatex: "x=2:\\; y = 6; \\qquad x=-1:\\; y = 3",
          explanation:
            "The candidate points are (2, 6) and (-1, 3).",
        },
        {
          stepNumber: 5,
          description: "Check in the curve.",
          workingLatex: "(2):\\; 4 + 2 = 6 \\checkmark; \\quad (-1):\\; 1 + 2 = 3 \\checkmark",
          explanation:
            "Both points lie on the curve, confirming the intersections.",
        },
      ],
      finalAnswer: "\\((2,\\,6)\\) and \\((-1,\\,3)\\)",
      canonicalAnswer: "(2,6) and (-1,3)",
    },
  },
  {
    id: "ga44-018",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(x - y = 1\\) and \\(x^2 - xy = 6\\). Give both points \\((x,\\,y)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "rearranging", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the linear equation for y.",
          workingLatex: "y = x - 1",
          explanation:
            "Make y the subject so it can be substituted into the second equation.",
        },
        {
          stepNumber: 2,
          description: "Substitute into x^2 - xy = 6.",
          workingLatex: "x^2 - x(x - 1) = 6",
          explanation:
            "Replace y with x - 1 in the nonlinear equation.",
        },
        {
          stepNumber: 3,
          description: "Expand and simplify.",
          workingLatex: "x^2 - x^2 + x = 6 \\;\\Rightarrow\\; x = 6",
          explanation:
            "The x^2 terms cancel, leaving a linear equation. There is a single x-value, x = 6.",
        },
        {
          stepNumber: 4,
          description: "Back-substitute into y = x - 1.",
          workingLatex: "x=6:\\; y = 5",
          explanation:
            "Only one solution arises here because the x^2 terms cancelled; the point is (6, 5).",
        },
        {
          stepNumber: 5,
          description: "Check in x^2 - xy = 6.",
          workingLatex: "36 - 6 \\cdot 5 = 36 - 30 = 6 \\checkmark",
          explanation:
            "The point (6, 5) satisfies both equations, confirming the single solution.",
        },
      ],
      finalAnswer: "\\((6,\\,5)\\)",
      canonicalAnswer: "(6,5)",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga44-019",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(2x + y = 5\\) and \\(x^2 + y^2 = 10\\). Give both points \\((x,\\,y)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "circle", "line meets circle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the linear equation for y.",
          workingLatex: "y = 5 - 2x",
          explanation:
            "Make y the subject so it can be substituted into the circle.",
        },
        {
          stepNumber: 2,
          description: "Substitute into x^2 + y^2 = 10.",
          workingLatex: "x^2 + (5 - 2x)^2 = 10",
          explanation:
            "Replace y so the equation involves only x.",
        },
        {
          stepNumber: 3,
          description: "Expand the square.",
          workingLatex: "x^2 + 25 - 20x + 4x^2 = 10",
          explanation:
            "(5 - 2x)^2 = 25 - 20x + 4x^2. Take care with the middle term.",
        },
        {
          stepNumber: 4,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "5x^2 - 20x + 15 = 0 \\;\\Rightarrow\\; x^2 - 4x + 3 = 0",
          explanation:
            "Combine like terms (25 - 10 = 15) then divide by 5.",
        },
        {
          stepNumber: 5,
          description: "Factorise and solve.",
          workingLatex: "(x - 1)(x - 3) = 0 \\;\\Rightarrow\\; x = 1 \\text{ or } x = 3",
          explanation:
            "Two numbers multiplying to +3 and adding to -4 are -1 and -3.",
        },
        {
          stepNumber: 6,
          description: "Back-substitute into y = 5 - 2x.",
          workingLatex: "x=1:\\; y = 3; \\qquad x=3:\\; y = -1",
          explanation:
            "The candidate points are (1, 3) and (3, -1).",
        },
        {
          stepNumber: 7,
          description: "Check in the circle.",
          workingLatex: "1 + 9 = 10 \\checkmark; \\qquad 9 + 1 = 10 \\checkmark",
          explanation:
            "Both points lie on x^2 + y^2 = 10, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((1,\\,3)\\) and \\((3,\\,-1)\\)",
      canonicalAnswer: "(1,3) and (3,-1)",
    },
  },
  {
    id: "ga44-020",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Show that the line \\(y = x + 1\\) is a tangent to the curve \\(y = x^2 - 3x + 5\\), and find the coordinates of the point of contact.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "tangent", "repeated root", "discriminant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the expressions for y equal.",
          workingLatex: "x + 1 = x^2 - 3x + 5",
          explanation:
            "At any intersection the y-values agree, so equate the right-hand sides.",
        },
        {
          stepNumber: 2,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "0 = x^2 - 3x + 5 - x - 1 = x^2 - 4x + 4",
          explanation:
            "-3x - x = -4x and 5 - 1 = 4.",
        },
        {
          stepNumber: 3,
          description: "Compute the discriminant to test for tangency.",
          workingLatex: "b^2 - 4ac = (-4)^2 - 4(1)(4) = 16 - 16 = 0",
          explanation:
            "A discriminant of zero means the quadratic has one repeated root, so the line meets the curve at exactly one point — it is a tangent.",
        },
        {
          stepNumber: 4,
          description: "Solve the repeated root.",
          workingLatex: "x^2 - 4x + 4 = (x - 2)^2 = 0 \\;\\Rightarrow\\; x = 2",
          explanation:
            "The perfect square confirms the single (repeated) solution x = 2.",
        },
        {
          stepNumber: 5,
          description: "Back-substitute into y = x + 1 and check.",
          workingLatex: "y = 2 + 1 = 3; \\quad \\text{curve: } 4 - 6 + 5 = 3 \\checkmark",
          explanation:
            "Both equations give y = 3 at x = 2, so the point of contact is (2, 3).",
        },
      ],
      finalAnswer: "\\(\\text{Tangent (repeated root); point of contact } (2,\\,3)\\)",
      canonicalAnswer: "(2,3)",
    },
  },
  {
    id: "ga44-021",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The line \\(y = 2x + k\\) is a tangent to the curve \\(y = x^2 + 4x + 7\\). Find the value of \\(k\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "tangent", "discriminant", "find unknown"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the expressions for y equal.",
          workingLatex: "2x + k = x^2 + 4x + 7",
          explanation:
            "Equate the line and the curve to find where they meet.",
        },
        {
          stepNumber: 2,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "0 = x^2 + 4x + 7 - 2x - k = x^2 + 2x + (7 - k)",
          explanation:
            "4x - 2x = 2x; the constant is 7 - k. The coefficient of x is fixed but the constant depends on k.",
        },
        {
          stepNumber: 3,
          description: "Tangency requires a repeated root, so set the discriminant to zero.",
          workingLatex: "b^2 - 4ac = 2^2 - 4(1)(7 - k) = 0",
          explanation:
            "A tangent touches at exactly one point, which means the quadratic has a single repeated root and b^2 - 4ac = 0.",
        },
        {
          stepNumber: 4,
          description: "Expand and solve for k.",
          workingLatex: "4 - 28 + 4k = 0 \\;\\Rightarrow\\; 4k = 24 \\;\\Rightarrow\\; k = 6",
          explanation:
            "Multiply out -4(7 - k) = -28 + 4k, combine with 4, and solve.",
        },
        {
          stepNumber: 5,
          description: "Check: with k = 6 the quadratic should be a perfect square.",
          workingLatex: "x^2 + 2x + 1 = (x + 1)^2 = 0 \\;\\Rightarrow\\; x = -1 \\text{ (repeated)} \\checkmark",
          explanation:
            "7 - k = 1, giving (x + 1)^2 — a repeated root at x = -1, confirming tangency.",
        },
      ],
      finalAnswer: "\\(k = 6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga44-022",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Show that the line \\(y = x + 6\\) does not intersect the curve \\(y = x^2 + 3x + 10\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "discriminant", "no intersection", "proof"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the expressions for y equal.",
          workingLatex: "x + 6 = x^2 + 3x + 10",
          explanation:
            "If the graphs met, their y-values would agree there, so equate the right-hand sides.",
        },
        {
          stepNumber: 2,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "0 = x^2 + 3x + 10 - x - 6 = x^2 + 2x + 4",
          explanation:
            "3x - x = 2x and 10 - 6 = 4.",
        },
        {
          stepNumber: 3,
          description: "Compute the discriminant.",
          workingLatex: "b^2 - 4ac = 2^2 - 4(1)(4) = 4 - 16 = -12",
          explanation:
            "With a = 1, b = 2, c = 4. A negative discriminant means there are no real roots.",
        },
        {
          stepNumber: 4,
          description: "Interpret the result.",
          workingLatex: "b^2 - 4ac = -12 < 0 \\;\\Rightarrow\\; \\text{no real solutions}",
          explanation:
            "Because the quadratic has no real roots, the line and the curve never meet, as required.",
        },
      ],
      finalAnswer: "\\(b^2 - 4ac = -12 < 0\\), so there is no intersection.",
      canonicalAnswer: "no intersection",
    },
  },
  {
    id: "ga44-023",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = 2x - 1\\) and \\((x - 1)^2 + (y - 2)^2 = 10\\). Give both points \\((x,\\,y)\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "translated circle", "line meets circle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute y = 2x - 1 into the circle.",
          workingLatex: "(x - 1)^2 + (2x - 1 - 2)^2 = 10",
          explanation:
            "Replace y with 2x - 1; the second bracket becomes (2x - 3).",
        },
        {
          stepNumber: 2,
          description: "Simplify the brackets.",
          workingLatex: "(x - 1)^2 + (2x - 3)^2 = 10",
          explanation:
            "2x - 1 - 2 = 2x - 3.",
        },
        {
          stepNumber: 3,
          description: "Expand both squares.",
          workingLatex: "(x^2 - 2x + 1) + (4x^2 - 12x + 9) = 10",
          explanation:
            "(x - 1)^2 = x^2 - 2x + 1 and (2x - 3)^2 = 4x^2 - 12x + 9.",
        },
        {
          stepNumber: 4,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "5x^2 - 14x + 10 = 10 \\;\\Rightarrow\\; 5x^2 - 14x = 0",
          explanation:
            "Combine like terms (1 + 9 = 10), then subtract 10 from both sides.",
        },
        {
          stepNumber: 5,
          description: "Factor out x and solve.",
          workingLatex: "x(5x - 14) = 0 \\;\\Rightarrow\\; x = 0 \\text{ or } x = \\frac{14}{5}",
          explanation:
            "There is no constant term, so x is a common factor.",
        },
        {
          stepNumber: 6,
          description: "Back-substitute into y = 2x - 1.",
          workingLatex: "x=0:\\; y = -1; \\qquad x=\\frac{14}{5}:\\; y = \\frac{28}{5} - 1 = \\frac{23}{5}",
          explanation:
            "The candidate points are (0, -1) and (14/5, 23/5).",
        },
        {
          stepNumber: 7,
          description: "Check (0, -1) in the circle.",
          workingLatex: "(0-1)^2 + (-1-2)^2 = 1 + 9 = 10 \\checkmark",
          explanation:
            "The first point satisfies the circle; the second can be verified similarly, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((0,\\,-1)\\) and \\(\\left(\\dfrac{14}{5},\\,\\dfrac{23}{5}\\right)\\)",
      canonicalAnswer: "(0,-1) and (14/5,23/5)",
    },
  },
  {
    id: "ga44-024",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The line \\(y = x + 4\\) intersects the circle \\(x^2 + y^2 = 16\\) at two points \\(A\\) and \\(B\\). Find the exact length of the chord \\(AB\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "circle", "chord length", "distance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute y = x + 4 into the circle.",
          workingLatex: "x^2 + (x + 4)^2 = 16",
          explanation:
            "Find the intersection points by replacing y in the circle equation.",
        },
        {
          stepNumber: 2,
          description: "Expand and collect.",
          workingLatex: "x^2 + x^2 + 8x + 16 = 16 \\;\\Rightarrow\\; 2x^2 + 8x = 0",
          explanation:
            "(x + 4)^2 = x^2 + 8x + 16; the constants 16 cancel.",
        },
        {
          stepNumber: 3,
          description: "Factorise and solve for x.",
          workingLatex: "2x(x + 4) = 0 \\;\\Rightarrow\\; x = 0 \\text{ or } x = -4",
          explanation:
            "Factor out 2x; the two x-coordinates are 0 and -4.",
        },
        {
          stepNumber: 4,
          description: "Find the corresponding y-values from y = x + 4.",
          workingLatex: "x=0:\\; y = 4 \\Rightarrow A(0, 4); \\qquad x=-4:\\; y = 0 \\Rightarrow B(-4, 0)",
          explanation:
            "These are the two intersection points A and B.",
        },
        {
          stepNumber: 5,
          description: "Apply the distance formula to A and B.",
          workingLatex: "AB = \\sqrt{(0 - (-4))^2 + (4 - 0)^2} = \\sqrt{4^2 + 4^2}",
          explanation:
            "Length = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}, with \\Delta x = 4 and \\Delta y = 4.",
        },
        {
          stepNumber: 6,
          description: "Simplify the surd.",
          workingLatex: "AB = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}",
          explanation:
            "\\sqrt{32} = \\sqrt{16 \\cdot 2} = 4\\sqrt{2}. The exact chord length is 4\\sqrt{2}.",
        },
      ],
      finalAnswer: "\\(AB = 4\\sqrt{2}\\)",
      canonicalAnswer: "4*sqrt(2)",
    },
  },
  {
    id: "ga44-025",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(3x - y = 2\\) and \\(2x^2 - xy = 8\\). Give both points \\((x,\\,y)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "rearranging", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the linear equation for y.",
          workingLatex: "y = 3x - 2",
          explanation:
            "Make y the subject so it can be substituted into the second equation.",
        },
        {
          stepNumber: 2,
          description: "Substitute into 2x^2 - xy = 8.",
          workingLatex: "2x^2 - x(3x - 2) = 8",
          explanation:
            "Replace y with 3x - 2.",
        },
        {
          stepNumber: 3,
          description: "Expand and simplify.",
          workingLatex: "2x^2 - 3x^2 + 2x = 8 \\;\\Rightarrow\\; -x^2 + 2x - 8 = 0",
          explanation:
            "Distribute -x(3x - 2) = -3x^2 + 2x, then move 8 across.",
        },
        {
          stepNumber: 4,
          description: "Multiply by -1 and inspect the discriminant.",
          workingLatex: "x^2 - 2x + 8 = 0; \\quad b^2 - 4ac = 4 - 32 = -28",
          explanation:
            "A negative discriminant means there are NO real solutions, so the line and curve never meet.",
        },
        {
          stepNumber: 5,
          description: "State the conclusion.",
          workingLatex: "b^2 - 4ac = -28 < 0 \\;\\Rightarrow\\; \\text{no real solutions}",
          explanation:
            "There are no real coordinate pairs satisfying both equations simultaneously.",
        },
      ],
      finalAnswer: "\\(\\text{No real solutions } (b^2 - 4ac = -28 < 0)\\)",
      canonicalAnswer: "no real solutions",
    },
  },
  {
    id: "ga44-026",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A rectangle has perimeter \\(20\\,\\text{cm}\\) and area \\(24\\,\\text{cm}^2\\). By forming and solving simultaneous equations, find the lengths of its two sides.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "worded problem", "substitution", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Let the sides be x and y. Form a linear equation from the perimeter.",
          workingLatex: "2(x + y) = 20 \\;\\Rightarrow\\; x + y = 10",
          explanation:
            "Perimeter of a rectangle is 2(length + width). Dividing by 2 gives the linear equation x + y = 10.",
        },
        {
          stepNumber: 2,
          description: "Form a second equation from the area.",
          workingLatex: "xy = 24",
          explanation:
            "Area is length × width, giving the nonlinear equation xy = 24.",
        },
        {
          stepNumber: 3,
          description: "Make y the subject of the linear equation and substitute.",
          workingLatex: "y = 10 - x \\;\\Rightarrow\\; x(10 - x) = 24",
          explanation:
            "Substitute y = 10 - x into xy = 24.",
        },
        {
          stepNumber: 4,
          description: "Expand and collect to a quadratic.",
          workingLatex: "10x - x^2 = 24 \\;\\Rightarrow\\; x^2 - 10x + 24 = 0",
          explanation:
            "Move all terms to one side so the x^2 coefficient is positive.",
        },
        {
          stepNumber: 5,
          description: "Factorise and solve.",
          workingLatex: "(x - 4)(x - 6) = 0 \\;\\Rightarrow\\; x = 4 \\text{ or } x = 6",
          explanation:
            "Two numbers multiplying to +24 and adding to -10 are -4 and -6.",
        },
        {
          stepNumber: 6,
          description: "Find the matching side and interpret.",
          workingLatex: "x=4:\\; y = 6; \\qquad x=6:\\; y = 4",
          explanation:
            "Both roots describe the same rectangle: the two sides are 4 cm and 6 cm. Check: perimeter 2(10) = 20, area 4 × 6 = 24.",
        },
      ],
      finalAnswer: "\\(\\text{Sides } 4\\,\\text{cm and } 6\\,\\text{cm}\\)",
      canonicalAnswer: "(4,6) and (6,4)",
    },
  },
  {
    id: "ga44-027",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y = 3x - 2\\) and \\(y = 2x^2 - x + 1\\). Give both points \\((x,\\,y)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "quadratic formula", "discriminant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the expressions for y equal.",
          workingLatex: "3x - 2 = 2x^2 - x + 1",
          explanation:
            "Equate the line and the curve to eliminate y.",
        },
        {
          stepNumber: 2,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "0 = 2x^2 - x + 1 - 3x + 2 = 2x^2 - 4x + 3",
          explanation:
            "-x - 3x = -4x and 1 + 2 = 3.",
        },
        {
          stepNumber: 3,
          description: "Compute the discriminant.",
          workingLatex: "b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8",
          explanation:
            "With a = 2, b = -4, c = 3. A negative discriminant means no real roots.",
        },
        {
          stepNumber: 4,
          description: "Interpret.",
          workingLatex: "b^2 - 4ac = -8 < 0 \\;\\Rightarrow\\; \\text{no real solutions}",
          explanation:
            "The line and the curve do not intersect, so there are no real coordinate solutions.",
        },
      ],
      finalAnswer: "\\(\\text{No real solutions } (b^2 - 4ac = -8 < 0)\\)",
      canonicalAnswer: "no real solutions",
    },
  },
  {
    id: "ga44-028",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(x + 2y = 5\\) and \\(x^2 + y^2 = 10\\). Give both points \\((x,\\,y)\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "circle", "line meets circle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the linear equation for x.",
          workingLatex: "x = 5 - 2y",
          explanation:
            "Here making x the subject is cleaner because x appears to the first power.",
        },
        {
          stepNumber: 2,
          description: "Substitute into x^2 + y^2 = 10.",
          workingLatex: "(5 - 2y)^2 + y^2 = 10",
          explanation:
            "Replace x so the equation is in y only.",
        },
        {
          stepNumber: 3,
          description: "Expand the square.",
          workingLatex: "25 - 20y + 4y^2 + y^2 = 10",
          explanation:
            "(5 - 2y)^2 = 25 - 20y + 4y^2.",
        },
        {
          stepNumber: 4,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "5y^2 - 20y + 15 = 0 \\;\\Rightarrow\\; y^2 - 4y + 3 = 0",
          explanation:
            "Combine (25 - 10 = 15) and divide by 5.",
        },
        {
          stepNumber: 5,
          description: "Factorise and solve.",
          workingLatex: "(y - 1)(y - 3) = 0 \\;\\Rightarrow\\; y = 1 \\text{ or } y = 3",
          explanation:
            "Two numbers multiplying to +3 and adding to -4 are -1 and -3.",
        },
        {
          stepNumber: 6,
          description: "Back-substitute into x = 5 - 2y.",
          workingLatex: "y=1:\\; x = 3; \\qquad y=3:\\; x = -1",
          explanation:
            "The candidate points are (3, 1) and (-1, 3).",
        },
        {
          stepNumber: 7,
          description: "Check in the circle.",
          workingLatex: "9 + 1 = 10 \\checkmark; \\qquad 1 + 9 = 10 \\checkmark",
          explanation:
            "Both points lie on x^2 + y^2 = 10, confirming the solutions.",
        },
      ],
      finalAnswer: "\\((3,\\,1)\\) and \\((-1,\\,3)\\)",
      canonicalAnswer: "(3,1) and (-1,3)",
    },
  },
  {
    id: "ga44-029",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the simultaneous equations \\(y - x = 4\\) and \\(y = x^2 + 2x + 1\\), giving your answers in exact (surd) form. Give both points \\((x,\\,y)\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "substitution", "quadratic formula", "surds"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the linear equation for y.",
          workingLatex: "y = x + 4",
          explanation:
            "Make y the subject so it can be substituted into the quadratic.",
        },
        {
          stepNumber: 2,
          description: "Set equal to the quadratic.",
          workingLatex: "x + 4 = x^2 + 2x + 1",
          explanation:
            "Both equal y, so equate them.",
        },
        {
          stepNumber: 3,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "0 = x^2 + 2x + 1 - x - 4 = x^2 + x - 3",
          explanation:
            "2x - x = x and 1 - 4 = -3.",
        },
        {
          stepNumber: 4,
          description: "The quadratic does not factorise; compute the discriminant.",
          workingLatex: "b^2 - 4ac = 1^2 - 4(1)(-3) = 1 + 12 = 13",
          explanation:
            "With a = 1, b = 1, c = -3. The discriminant 13 > 0 (and not a perfect square), so there are two irrational roots.",
        },
        {
          stepNumber: 5,
          description: "Apply the quadratic formula.",
          workingLatex: "x = \\frac{-1 \\pm \\sqrt{13}}{2}",
          explanation:
            "Substitute into x = (-b \\pm \\sqrt{b^2 - 4ac})/(2a).",
        },
        {
          stepNumber: 6,
          description: "Back-substitute into y = x + 4.",
          workingLatex: "y = \\frac{-1 \\pm \\sqrt{13}}{2} + 4 = \\frac{7 \\pm \\sqrt{13}}{2}",
          explanation:
            "Add 4 = 8/2 to each x-value. The points are ((-1+\\sqrt{13})/2, (7+\\sqrt{13})/2) and ((-1-\\sqrt{13})/2, (7-\\sqrt{13})/2).",
        },
      ],
      finalAnswer: "\\(\\left(\\dfrac{-1+\\sqrt{13}}{2},\\,\\dfrac{7+\\sqrt{13}}{2}\\right)\\) and \\(\\left(\\dfrac{-1-\\sqrt{13}}{2},\\,\\dfrac{7-\\sqrt{13}}{2}\\right)\\)",
      canonicalAnswer: "((-1+sqrt(13))/2,(7+sqrt(13))/2) and ((-1-sqrt(13))/2,(7-sqrt(13))/2)",
    },
  },
  {
    id: "ga44-030",
    topicRef: "ga44",
    topicTitle: "Linear and quadratic simultaneous equations",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The curve \\(y = x^2 - 2x + 3\\) and the line \\(y = 2x + c\\) meet at exactly one point. Find the value of \\(c\\) and the coordinates of the point of contact.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["linear and quadratic simultaneous equations", "tangent", "discriminant", "find unknown", "repeated root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the expressions for y equal.",
          workingLatex: "2x + c = x^2 - 2x + 3",
          explanation:
            "Equate line and curve to find their meeting point(s).",
        },
        {
          stepNumber: 2,
          description: "Collect to a quadratic equal to zero.",
          workingLatex: "0 = x^2 - 2x + 3 - 2x - c = x^2 - 4x + (3 - c)",
          explanation:
            "-2x - 2x = -4x; the constant is 3 - c.",
        },
        {
          stepNumber: 3,
          description: "One point of contact means a repeated root: set the discriminant to zero.",
          workingLatex: "b^2 - 4ac = (-4)^2 - 4(1)(3 - c) = 0",
          explanation:
            "'Meet at exactly one point' means the line is a tangent, so the quadratic has a single repeated root.",
        },
        {
          stepNumber: 4,
          description: "Solve for c.",
          workingLatex: "16 - 12 + 4c = 0 \\;\\Rightarrow\\; 4 + 4c = 0 \\;\\Rightarrow\\; c = -1",
          explanation:
            "Expand -4(3 - c) = -12 + 4c, combine with 16, and solve.",
        },
        {
          stepNumber: 5,
          description: "With c = -1, solve the repeated root.",
          workingLatex: "x^2 - 4x + 4 = (x - 2)^2 = 0 \\;\\Rightarrow\\; x = 2",
          explanation:
            "3 - c = 3 - (-1) = 4, giving (x - 2)^2; the repeated root is x = 2.",
        },
        {
          stepNumber: 6,
          description: "Find y and state the point of contact.",
          workingLatex: "y = 2(2) + (-1) = 3; \\quad \\text{curve: } 4 - 4 + 3 = 3 \\checkmark",
          explanation:
            "Both equations give y = 3 at x = 2, so c = -1 and the point of contact is (2, 3).",
        },
      ],
      finalAnswer: "\\(c = -1,\\ \\text{point of contact } (2,\\,3)\\)",
      canonicalAnswer: "(2,3)",
    },
  },
];
