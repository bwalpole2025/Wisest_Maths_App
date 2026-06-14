/**
 * Topic: Quadratic inequalities and set notation
 * Ref: ga48  (DfE A22)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: solving quadratic inequalities and expressing the solution set in
 *   inequality, set-builder and interval notation. Key methods used throughout:
 *   (1) x^2 < k  =>  -sqrt(k) < x < sqrt(k), and  x^2 > k  =>  x < -sqrt(k) or
 *       x > sqrt(k) — stress BOTH branches of the square-root step;
 *   (2) factorisable quadratics: rearrange to >0 / <0 form, find the roots a, b,
 *       SKETCH the parabola (described in prose — opens up since the x^2
 *       coefficient is positive, cuts the axis at the roots), then read off the
 *       region. (x-a)(x-b) < 0 => between the roots; (x-a)(x-b) > 0 => outside
 *       the roots (two branches);
 *   (3) leading coefficient a>1 (e.g. 2x^2 + ...): factorise or use the formula
 *       for the roots, then read the region from the (still upward) parabola;
 *   (4) roots via the quadratic formula (non-integer / surd roots) then state
 *       the region;
 *   (5) express solutions in SET notation { x : ... } and interval notation
 *       (-inf, a) ∪ (b, inf); convert between worded, inequality and set forms;
 *   (6) combine a quadratic inequality with a linear one, or find the INTEGER
 *       solutions of a quadratic inequality.
 *   Solutions stress: always rearrange so one side is 0, find the roots, state
 *   the parabola's shape and where it sits relative to the x-axis, then read the
 *   region; and CHECK a test value taken from each candidate region against the
 *   ORIGINAL inequality before locking.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga48-001 .. ga48-004  (4)   cleanest x^2 < k / x^2 > k forms
 *   - Standard:   ga48-005 .. ga48-018  (14)
 *   - Challenge:  ga48-019 .. ga48-030  (12)
 * Id range: ga48-001 .. ga48-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules. Set notation uses \\{ x : ... \\},
 *   union \\cup, and \\le / \\ge.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga48-001",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Foundation",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 < 9\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quadratic inequality", "square root both branches"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take the square root of both sides, keeping both signs.",
          workingLatex: "x^2 < 9 \\Rightarrow |x| < 3",
          explanation:
            "x^2 < 9 means the SIZE of x is less than 3. Since both 3 and -3 square to 9, the values of x that work are those squeezed between -3 and 3.",
        },
        {
          stepNumber: 2,
          description: "Write the squeezed region as a double inequality.",
          workingLatex: "-3 < x < 3",
          explanation:
            "x^2 < k (with k > 0) always gives the single region -sqrt(k) < x < sqrt(k). Here sqrt(9) = 3, so -3 < x < 3. Check: x = 0 gives 0 < 9 (true), while x = 4 gives 16 < 9 (false), confirming the region.",
        },
      ],
      finalAnswer: "\\(-3 < x < 3\\)",
      canonicalAnswer: "-3<x<3",
    },
  },
  {
    id: "ga48-002",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Foundation",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 > 16\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quadratic inequality", "square root both branches", "two branches"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take the square root of both sides, keeping both signs.",
          workingLatex: "x^2 > 16 \\Rightarrow |x| > 4",
          explanation:
            "x^2 > 16 means the SIZE of x is greater than 4. Numbers bigger than 4 OR more negative than -4 both have squares above 16, so there are two separate regions.",
        },
        {
          stepNumber: 2,
          description: "Write the two outer branches.",
          workingLatex: "x < -4 \\;\\text{or}\\; x > 4",
          explanation:
            "x^2 > k (with k > 0) always gives the TWO branches x < -sqrt(k) or x > sqrt(k). Here sqrt(16) = 4. Check: x = 5 gives 25 > 16 (true), x = -5 gives 25 > 16 (true), x = 0 gives 0 > 16 (false), confirming both outer regions.",
        },
      ],
      finalAnswer: "\\(x < -4 \\;\\text{or}\\; x > 4\\)",
      canonicalAnswer: "x<-4 or x>4",
    },
  },
  {
    id: "ga48-003",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Foundation",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 \\le 25\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quadratic inequality", "square root both branches", "inclusive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square root both sides; the inequality is inclusive.",
          workingLatex: "x^2 \\le 25 \\Rightarrow |x| \\le 5",
          explanation:
            "x^2 <= 25 includes equality, so x = 5 and x = -5 themselves are allowed. sqrt(25) = 5, so x lies between -5 and 5 inclusive.",
        },
        {
          stepNumber: 2,
          description: "Write the closed region.",
          workingLatex: "-5 \\le x \\le 5",
          explanation:
            "Because the sign is <= (not <) the endpoints are included, shown by the \\le symbols. Check: x = 5 gives 25 <= 25 (true, so the endpoint belongs), x = 6 gives 36 <= 25 (false).",
        },
      ],
      finalAnswer: "\\(-5 \\le x \\le 5\\)",
      canonicalAnswer: "-5<=x<=5",
    },
  },
  {
    id: "ga48-004",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Foundation",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 \\ge 4\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quadratic inequality", "square root both branches", "two branches", "inclusive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square root both sides; the inequality is inclusive.",
          workingLatex: "x^2 \\ge 4 \\Rightarrow |x| \\ge 2",
          explanation:
            "x^2 >= 4 includes equality, so x = 2 and x = -2 are allowed. sqrt(4) = 2, and a 'greater than' square always splits into two outer branches.",
        },
        {
          stepNumber: 2,
          description: "Write the two closed outer branches.",
          workingLatex: "x \\le -2 \\;\\text{or}\\; x \\ge 2",
          explanation:
            "The two branches are x <= -2 or x >= 2, with the endpoints included because of the >= sign. Check: x = 2 gives 4 >= 4 (true), x = 3 gives 9 >= 4 (true), x = 0 gives 0 >= 4 (false).",
        },
      ],
      finalAnswer: "\\(x \\le -2 \\;\\text{or}\\; x \\ge 2\\)",
      canonicalAnswer: "x<=-2 or x>=2",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga48-005",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 - 5x + 6 < 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "between the roots", "sketch"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The right side is already 0, so factorise the quadratic.",
          workingLatex: "x^2 - 5x + 6 = (x - 2)(x - 3)",
          explanation:
            "Find two numbers multiplying to +6 and adding to -5: those are -2 and -3. So the expression factorises as (x-2)(x-3).",
        },
        {
          stepNumber: 2,
          description: "Find the roots, where the expression equals 0.",
          workingLatex: "(x - 2)(x - 3) = 0 \\Rightarrow x = 2,\\; x = 3",
          explanation:
            "Setting each bracket to zero gives the roots x = 2 and x = 3. These are where the parabola crosses the x-axis.",
        },
        {
          stepNumber: 3,
          description: "Describe the parabola's shape.",
          workingLatex: "\\text{coefficient of } x^2 \\text{ is } +1 > 0 \\Rightarrow \\text{opens upward (U-shape)}",
          explanation:
            "Because the x^2 coefficient is positive the parabola is a U-shape. It dips BELOW the x-axis only between its two roots, and sits above the axis outside them.",
        },
        {
          stepNumber: 4,
          description: "Read off where the curve is below the axis (< 0).",
          workingLatex: "(x-2)(x-3) < 0 \\Rightarrow 2 < x < 3",
          explanation:
            "We want where the expression is NEGATIVE, i.e. below the axis. For a U-shaped curve that is the region BETWEEN the roots: 2 < x < 3. Test x = 2.5: (0.5)(-0.5) = -0.25 < 0 (true); test x = 1: (-1)(-2) = 2 > 0 (false). Confirmed.",
        },
      ],
      finalAnswer: "\\(2 < x < 3\\)",
      canonicalAnswer: "2<x<3",
    },
  },
  {
    id: "ga48-006",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 - x - 12 > 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "outside the roots", "two branches", "sketch"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic (right side already 0).",
          workingLatex: "x^2 - x - 12 = (x - 4)(x + 3)",
          explanation:
            "Two numbers multiplying to -12 and adding to -1 are -4 and +3, so the factors are (x-4)(x+3).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(x - 4)(x + 3) = 0 \\Rightarrow x = -3,\\; x = 4",
          explanation:
            "Setting each bracket to zero gives x = 4 and x = -3, the points where the parabola meets the x-axis.",
        },
        {
          stepNumber: 3,
          description: "State the shape and where it is above the axis.",
          workingLatex: "+x^2 \\Rightarrow \\text{U-shape; above axis OUTSIDE the roots}",
          explanation:
            "The positive x^2 coefficient gives a U-shape. A U-shape is ABOVE the axis (positive) to the left of the smaller root and to the right of the larger root.",
        },
        {
          stepNumber: 4,
          description: "Read off the two branches for > 0.",
          workingLatex: "(x-4)(x+3) > 0 \\Rightarrow x < -3 \\;\\text{or}\\; x > 4",
          explanation:
            "We want the expression POSITIVE, so the outer regions: x < -3 or x > 4. Test x = 5: (1)(8) = 8 > 0 (true); x = 0: (-4)(3) = -12 < 0 (false); x = -4: (-8)(-1) = 8 > 0 (true). Confirmed.",
        },
      ],
      finalAnswer: "\\(x < -3 \\;\\text{or}\\; x > 4\\)",
      canonicalAnswer: "x<-3 or x>4",
    },
  },
  {
    id: "ga48-007",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 + 2x - 8 \\le 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "between the roots", "inclusive", "sketch"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic.",
          workingLatex: "x^2 + 2x - 8 = (x + 4)(x - 2)",
          explanation:
            "Two numbers multiplying to -8 and adding to +2 are +4 and -2, giving (x+4)(x-2).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(x + 4)(x - 2) = 0 \\Rightarrow x = -4,\\; x = 2",
          explanation: "The parabola crosses the x-axis at x = -4 and x = 2.",
        },
        {
          stepNumber: 3,
          description: "State the shape and target region.",
          workingLatex: "+x^2 \\Rightarrow \\text{U-shape; below/on axis BETWEEN the roots}",
          explanation:
            "The U-shaped curve is at or below the x-axis between its roots. The inequality is <= 0, so the endpoints (the roots) are included.",
        },
        {
          stepNumber: 4,
          description: "Read off the closed region.",
          workingLatex: "(x+4)(x-2) \\le 0 \\Rightarrow -4 \\le x \\le 2",
          explanation:
            "Between the roots, with endpoints included: -4 <= x <= 2. Test x = 0: (4)(-2) = -8 <= 0 (true); x = 3: (7)(1) = 7 > 0 (false); endpoint x = 2: (6)(0) = 0 <= 0 (true, so included). Confirmed.",
        },
      ],
      finalAnswer: "\\(-4 \\le x \\le 2\\)",
      canonicalAnswer: "-4<=x<=2",
    },
  },
  {
    id: "ga48-008",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 + 5x \\ge 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "common factor", "outside the roots", "two branches"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise by taking out the common factor x.",
          workingLatex: "x^2 + 5x = x(x + 5)",
          explanation:
            "There is no constant term, so x is a common factor: x^2 + 5x = x(x+5). Do NOT divide both sides by x — that loses solutions and can flip the sign.",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "x(x + 5) = 0 \\Rightarrow x = -5,\\; x = 0",
          explanation: "The roots are x = 0 and x = -5.",
        },
        {
          stepNumber: 3,
          description: "State the shape and target region.",
          workingLatex: "+x^2 \\Rightarrow \\text{U-shape; on/above axis OUTSIDE the roots}",
          explanation:
            "The U-shaped parabola is at or above the axis outside the interval between the roots. Since the sign is >= 0, the roots themselves are included.",
        },
        {
          stepNumber: 4,
          description: "Read off the two closed branches.",
          workingLatex: "x(x+5) \\ge 0 \\Rightarrow x \\le -5 \\;\\text{or}\\; x \\ge 0",
          explanation:
            "Outer regions, endpoints included: x <= -5 or x >= 0. Test x = 1: (1)(6) = 6 >= 0 (true); x = -1: (-1)(4) = -4 < 0 (false); x = -6: (-6)(-1) = 6 >= 0 (true). Confirmed.",
        },
      ],
      finalAnswer: "\\(x \\le -5 \\;\\text{or}\\; x \\ge 0\\)",
      canonicalAnswer: "x<=-5 or x>=0",
    },
  },
  {
    id: "ga48-009",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 - 7x + 10 \\ge 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "outside the roots", "two branches", "inclusive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic.",
          workingLatex: "x^2 - 7x + 10 = (x - 2)(x - 5)",
          explanation:
            "Two numbers multiplying to +10 and adding to -7 are -2 and -5, giving (x-2)(x-5).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(x - 2)(x - 5) = 0 \\Rightarrow x = 2,\\; x = 5",
          explanation: "The parabola meets the x-axis at x = 2 and x = 5.",
        },
        {
          stepNumber: 3,
          description: "State the shape and target region.",
          workingLatex: "+x^2 \\Rightarrow \\text{U-shape; on/above axis OUTSIDE the roots}",
          explanation:
            "A U-shape is above the axis outside its roots. The >= sign includes the roots themselves.",
        },
        {
          stepNumber: 4,
          description: "Read off the two closed branches.",
          workingLatex: "(x-2)(x-5) \\ge 0 \\Rightarrow x \\le 2 \\;\\text{or}\\; x \\ge 5",
          explanation:
            "Outer regions with endpoints included: x <= 2 or x >= 5. Test x = 6: (4)(1) = 4 >= 0 (true); x = 3: (1)(-2) = -2 < 0 (false); x = 0: (-2)(-5) = 10 >= 0 (true). Confirmed.",
        },
      ],
      finalAnswer: "\\(x \\le 2 \\;\\text{or}\\; x \\ge 5\\)",
      canonicalAnswer: "x<=2 or x>=5",
    },
  },
  {
    id: "ga48-010",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 + 3x - 10 < 0\\) and write your answer in set notation.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "between the roots", "set notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic.",
          workingLatex: "x^2 + 3x - 10 = (x + 5)(x - 2)",
          explanation:
            "Two numbers multiplying to -10 and adding to +3 are +5 and -2, giving (x+5)(x-2).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(x + 5)(x - 2) = 0 \\Rightarrow x = -5,\\; x = 2",
          explanation: "The roots are x = -5 and x = 2.",
        },
        {
          stepNumber: 3,
          description: "U-shape, want below the axis: read the region between the roots.",
          workingLatex: "(x+5)(x-2) < 0 \\Rightarrow -5 < x < 2",
          explanation:
            "The positive x^2 coefficient gives a U-shape, negative only between the roots. Test x = 0: (5)(-2) = -10 < 0 (true); x = 3: (8)(1) = 8 > 0 (false). Confirmed.",
        },
        {
          stepNumber: 4,
          description: "Rewrite the region in set-builder notation.",
          workingLatex: "\\{ x : -5 < x < 2 \\}",
          explanation:
            "Set notation reads 'the set of all x such that -5 < x < 2'. The colon means 'such that'. As this is a single interval it is one set, with no union needed.",
        },
      ],
      finalAnswer: "\\(\\{ x : -5 < x < 2 \\}\\)",
      canonicalAnswer: "-5<x<2",
    },
  },
  {
    id: "ga48-011",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 - 9 > 0\\) and write your answer in set notation.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "difference of two squares", "two branches", "set notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise using the difference of two squares.",
          workingLatex: "x^2 - 9 = (x - 3)(x + 3)",
          explanation:
            "x^2 - 9 is a difference of two squares, factorising to (x-3)(x+3). (Equivalently x^2 > 9 gives |x| > 3.)",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(x - 3)(x + 3) = 0 \\Rightarrow x = -3,\\; x = 3",
          explanation: "The roots are x = -3 and x = 3.",
        },
        {
          stepNumber: 3,
          description: "U-shape, want above the axis: read the two outer branches.",
          workingLatex: "(x-3)(x+3) > 0 \\Rightarrow x < -3 \\;\\text{or}\\; x > 3",
          explanation:
            "A U-shape is positive outside its roots. Test x = 4: 16 - 9 = 7 > 0 (true); x = 0: -9 < 0 (false); x = -4: 16 - 9 = 7 > 0 (true). Confirmed.",
        },
        {
          stepNumber: 4,
          description: "Write the two branches as a union of sets.",
          workingLatex: "\\{ x : x < -3 \\} \\cup \\{ x : x > 3 \\}",
          explanation:
            "Two separate branches become the UNION (\\cup) of two sets: the set of x less than -3 together with the set of x greater than 3.",
        },
      ],
      finalAnswer: "\\(\\{ x : x < -3 \\} \\cup \\{ x : x > 3 \\}\\)",
      canonicalAnswer: "x<-3 or x>3",
    },
  },
  {
    id: "ga48-012",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(2x^2 - 5x - 3 \\le 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "leading coefficient", "between the roots", "fractional root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic (leading coefficient 2).",
          workingLatex: "2x^2 - 5x - 3 = (2x + 1)(x - 3)",
          explanation:
            "Split the middle term: 2 x -3 = -6, find two numbers multiplying to -6 and adding to -5: -6 and +1. So 2x^2 - 6x + x - 3 = 2x(x-3) + 1(x-3) = (2x+1)(x-3).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(2x + 1)(x - 3) = 0 \\Rightarrow x = -\\frac{1}{2},\\; x = 3",
          explanation:
            "2x + 1 = 0 gives x = -1/2; x - 3 = 0 gives x = 3. The roots are x = -1/2 and x = 3.",
        },
        {
          stepNumber: 3,
          description: "State the shape and target region.",
          workingLatex: "+2x^2 \\Rightarrow \\text{U-shape; on/below axis BETWEEN the roots}",
          explanation:
            "The x^2 coefficient is +2, still positive, so the curve is U-shaped and is negative only between the roots. The <= sign includes the endpoints.",
        },
        {
          stepNumber: 4,
          description: "Read off the closed region.",
          workingLatex: "-\\frac{1}{2} \\le x \\le 3",
          explanation:
            "Between the roots, inclusive: -1/2 <= x <= 3. Test x = 0: -3 <= 0 (true); x = 4: 32 - 20 - 3 = 9 > 0 (false). Confirmed.",
        },
      ],
      finalAnswer: "\\(-\\dfrac{1}{2} \\le x \\le 3\\)",
      canonicalAnswer: "-1/2<=x<=3",
    },
  },
  {
    id: "ga48-013",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(3x^2 + 5x - 2 > 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "leading coefficient", "outside the roots", "two branches"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic (leading coefficient 3).",
          workingLatex: "3x^2 + 5x - 2 = (3x - 1)(x + 2)",
          explanation:
            "Split the middle: 3 x -2 = -6, two numbers multiplying to -6 and adding to +5 are +6 and -1. So 3x^2 + 6x - x - 2 = 3x(x+2) - 1(x+2) = (3x-1)(x+2).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(3x - 1)(x + 2) = 0 \\Rightarrow x = \\frac{1}{3},\\; x = -2",
          explanation:
            "3x - 1 = 0 gives x = 1/3; x + 2 = 0 gives x = -2. The smaller root is -2.",
        },
        {
          stepNumber: 3,
          description: "State the shape and target region.",
          workingLatex: "+3x^2 \\Rightarrow \\text{U-shape; above axis OUTSIDE the roots}",
          explanation:
            "A positive leading coefficient gives a U-shape, positive outside the roots.",
        },
        {
          stepNumber: 4,
          description: "Read off the two branches.",
          workingLatex: "x < -2 \\;\\text{or}\\; x > \\frac{1}{3}",
          explanation:
            "Outer regions: x < -2 or x > 1/3. Test x = 1: 3 + 5 - 2 = 6 > 0 (true); x = 0: -2 < 0 (false); x = -3: 27 - 15 - 2 = 10 > 0 (true). Confirmed.",
        },
      ],
      finalAnswer: "\\(x < -2 \\;\\text{or}\\; x > \\dfrac{1}{3}\\)",
      canonicalAnswer: "x<-2 or x>1/3",
    },
  },
  {
    id: "ga48-014",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 + 4x \\le 12\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "rearrange to zero", "factorising", "between the roots", "inclusive"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange so that one side is 0.",
          workingLatex: "x^2 + 4x \\le 12 \\Rightarrow x^2 + 4x - 12 \\le 0",
          explanation:
            "You must collect everything on one side before factorising — subtract 12 from both sides to get x^2 + 4x - 12 <= 0.",
        },
        {
          stepNumber: 2,
          description: "Factorise the quadratic.",
          workingLatex: "x^2 + 4x - 12 = (x + 6)(x - 2)",
          explanation:
            "Two numbers multiplying to -12 and adding to +4 are +6 and -2, giving (x+6)(x-2).",
        },
        {
          stepNumber: 3,
          description: "Find the roots.",
          workingLatex: "(x + 6)(x - 2) = 0 \\Rightarrow x = -6,\\; x = 2",
          explanation: "The roots are x = -6 and x = 2.",
        },
        {
          stepNumber: 4,
          description: "U-shape, want on/below the axis: read between the roots.",
          workingLatex: "-6 \\le x \\le 2",
          explanation:
            "Between the roots, inclusive of endpoints: -6 <= x <= 2. Test x = 0 in the ORIGINAL: 0 <= 12 (true); x = 3: 9 + 12 = 21 <= 12 (false). Confirmed.",
        },
      ],
      finalAnswer: "\\(-6 \\le x \\le 2\\)",
      canonicalAnswer: "-6<=x<=2",
    },
  },
  {
    id: "ga48-015",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText: "Solve the inequality \\(x^2 > 2x + 8\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "rearrange to zero", "factorising", "outside the roots", "two branches"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange so one side is 0.",
          workingLatex: "x^2 > 2x + 8 \\Rightarrow x^2 - 2x - 8 > 0",
          explanation:
            "Subtract 2x and 8 from both sides to bring everything to the left: x^2 - 2x - 8 > 0.",
        },
        {
          stepNumber: 2,
          description: "Factorise.",
          workingLatex: "x^2 - 2x - 8 = (x - 4)(x + 2)",
          explanation:
            "Two numbers multiplying to -8 and adding to -2 are -4 and +2, giving (x-4)(x+2).",
        },
        {
          stepNumber: 3,
          description: "Find the roots.",
          workingLatex: "(x - 4)(x + 2) = 0 \\Rightarrow x = -2,\\; x = 4",
          explanation: "The roots are x = -2 and x = 4.",
        },
        {
          stepNumber: 4,
          description: "U-shape, want above the axis: read the two outer branches.",
          workingLatex: "x < -2 \\;\\text{or}\\; x > 4",
          explanation:
            "We want the expression > 0, so the outer regions. Test x = 5 in the ORIGINAL: 25 > 18 (true); x = 0: 0 > 8 (false); x = -3: 9 > 2 (true). Confirmed.",
        },
      ],
      finalAnswer: "\\(x < -2 \\;\\text{or}\\; x > 4\\)",
      canonicalAnswer: "x<-2 or x>4",
    },
  },
  {
    id: "ga48-016",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(x^2 - 6x + 8 \\le 0\\) and give your answer in interval notation.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "between the roots", "interval notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise.",
          workingLatex: "x^2 - 6x + 8 = (x - 2)(x - 4)",
          explanation:
            "Two numbers multiplying to +8 and adding to -6 are -2 and -4, giving (x-2)(x-4).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(x - 2)(x - 4) = 0 \\Rightarrow x = 2,\\; x = 4",
          explanation: "The roots are x = 2 and x = 4.",
        },
        {
          stepNumber: 3,
          description: "U-shape, want on/below the axis: between the roots, inclusive.",
          workingLatex: "2 \\le x \\le 4",
          explanation:
            "Test x = 3: (1)(-1) = -1 <= 0 (true); x = 5: (3)(1) = 3 > 0 (false). Endpoints included by <=. Confirmed.",
        },
        {
          stepNumber: 4,
          description: "Write in interval notation.",
          workingLatex: "[\\,2,\\; 4\\,]",
          explanation:
            "Square brackets [ ] mean the endpoints ARE included (closed interval), matching the <= sign. So the solution is the closed interval [2, 4].",
        },
      ],
      finalAnswer: "\\([\\,2,\\,4\\,]\\)",
      canonicalAnswer: "2<=x<=4",
    },
  },
  {
    id: "ga48-017",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "The solution to a quadratic inequality is \\(x < -1\\) or \\(x > 6\\). Write this solution in (a) set notation and (b) interval notation.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "set notation", "interval notation", "convert between forms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise this is a two-branch (outside-the-roots) solution.",
          workingLatex: "x < -1 \\;\\text{or}\\; x > 6",
          explanation:
            "Two separate branches joined by 'or' means a union of two regions — nothing lies between -1 and 6.",
        },
        {
          stepNumber: 2,
          description: "Write each branch as a set and join with union.",
          workingLatex: "\\{ x : x < -1 \\} \\cup \\{ x : x > 6 \\}",
          explanation:
            "'such that' is the colon; the two sets are combined with \\cup (union) because x satisfies the inequality if it is in EITHER branch.",
        },
        {
          stepNumber: 3,
          description: "Write the same regions as intervals.",
          workingLatex: "(-\\infty,\\, -1) \\cup (6,\\, \\infty)",
          explanation:
            "Round brackets mean the endpoints are excluded (strict < and >). Infinity always takes a round bracket. The union symbol again joins the two pieces.",
        },
      ],
      finalAnswer: "\\(\\{ x : x < -1 \\} \\cup \\{ x : x > 6 \\} = (-\\infty,\\,-1) \\cup (6,\\,\\infty)\\)",
      canonicalAnswer: "x<-1 or x>6",
    },
  },
  {
    id: "ga48-018",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Standard",
    answerType: "set",
    questionText: "List all the integer values of \\(x\\) that satisfy \\(x^2 - 4x - 5 \\le 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "between the roots", "integer solutions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise.",
          workingLatex: "x^2 - 4x - 5 = (x - 5)(x + 1)",
          explanation:
            "Two numbers multiplying to -5 and adding to -4 are -5 and +1, giving (x-5)(x+1).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(x - 5)(x + 1) = 0 \\Rightarrow x = -1,\\; x = 5",
          explanation: "The roots are x = -1 and x = 5.",
        },
        {
          stepNumber: 3,
          description: "U-shape, on/below the axis between the roots (inclusive).",
          workingLatex: "-1 \\le x \\le 5",
          explanation:
            "The continuous solution is -1 <= x <= 5. Test x = 0: -5 <= 0 (true); x = 6: 36 - 24 - 5 = 7 > 0 (false). Confirmed.",
        },
        {
          stepNumber: 4,
          description: "List the integers in that closed interval.",
          workingLatex: "x \\in \\{ -1, 0, 1, 2, 3, 4, 5 \\}",
          explanation:
            "Now pick out every whole number from -1 to 5 inclusive. Both endpoints are integers and are included, giving seven values.",
        },
      ],
      finalAnswer: "\\(-1, 0, 1, 2, 3, 4, 5\\)",
      canonicalAnswer: "{-1,0,1,2,3,4,5}",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga48-019",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(2x^2 + 3x - 5 < 0\\), giving your answer in both inequality and set notation.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "leading coefficient", "between the roots", "set notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic (leading coefficient 2).",
          workingLatex: "2x^2 + 3x - 5 = (2x + 5)(x - 1)",
          explanation:
            "Split the middle: 2 x -5 = -10, two numbers multiplying to -10 and adding to +3 are +5 and -2. So 2x^2 + 5x - 2x - 5 = x(2x+5) - 1(2x+5) = (2x+5)(x-1).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(2x + 5)(x - 1) = 0 \\Rightarrow x = -\\frac{5}{2},\\; x = 1",
          explanation:
            "2x + 5 = 0 gives x = -5/2; x - 1 = 0 gives x = 1. The smaller root is -5/2.",
        },
        {
          stepNumber: 3,
          description: "Describe the parabola and the target region.",
          workingLatex: "+2x^2 \\Rightarrow \\text{U-shape; below the axis BETWEEN the roots}",
          explanation:
            "Positive leading coefficient gives a U-shape, which is below the axis (negative) only between its two roots.",
        },
        {
          stepNumber: 4,
          description: "Read off the region and check a test value.",
          workingLatex: "-\\frac{5}{2} < x < 1",
          explanation:
            "Between the roots. Test x = 0: 0 + 0 - 5 = -5 < 0 (true); x = 2: 8 + 6 - 5 = 9 > 0 (false); x = -3: 18 - 9 - 5 = 4 > 0 (false). Confirmed.",
        },
        {
          stepNumber: 5,
          description: "Write in set notation.",
          workingLatex: "\\left\\{ x : -\\frac{5}{2} < x < 1 \\right\\}",
          explanation:
            "A single interval, so one set: the set of all x such that -5/2 < x < 1.",
        },
      ],
      finalAnswer: "\\(-\\dfrac{5}{2} < x < 1 \\;\\;\\text{i.e.}\\;\\; \\left\\{ x : -\\dfrac{5}{2} < x < 1 \\right\\}\\)",
      canonicalAnswer: "-5/2<x<1",
    },
  },
  {
    id: "ga48-020",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(x^2 - 4x - 1 > 0\\), giving the exact roots in surd form and your answer in inequality notation.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "quadratic formula", "surd roots", "outside the roots", "two branches"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "This does not factorise nicely, so use the quadratic formula for the roots.",
          workingLatex: "x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4(1)(-1)}}{2(1)}",
          explanation:
            "Find where x^2 - 4x - 1 = 0 using x = (-b ± sqrt(b^2 - 4ac)) / (2a) with a = 1, b = -4, c = -1.",
        },
        {
          stepNumber: 2,
          description: "Simplify the discriminant.",
          workingLatex: "x = \\frac{4 \\pm \\sqrt{16 + 4}}{2} = \\frac{4 \\pm \\sqrt{20}}{2}",
          explanation:
            "b^2 - 4ac = 16 - (-4) = 20. The discriminant is positive, so there are two real roots.",
        },
        {
          stepNumber: 3,
          description: "Simplify the surd.",
          workingLatex: "\\sqrt{20} = 2\\sqrt{5} \\Rightarrow x = \\frac{4 \\pm 2\\sqrt{5}}{2} = 2 \\pm \\sqrt{5}",
          explanation:
            "sqrt(20) = sqrt(4 x 5) = 2 sqrt(5). Dividing the whole numerator by 2 gives the exact roots x = 2 - sqrt(5) and x = 2 + sqrt(5). Numerically these are about -0.236 and 4.236.",
        },
        {
          stepNumber: 4,
          description: "U-shape, want above the axis: two outer branches.",
          workingLatex: "x < 2 - \\sqrt{5} \\;\\text{or}\\; x > 2 + \\sqrt{5}",
          explanation:
            "Positive x^2 coefficient => U-shape, positive outside the roots. Test x = 5: 25 - 20 - 1 = 4 > 0 (true); x = 0: -1 < 0 (false); x = -1: 1 + 4 - 1 = 4 > 0 (true). Confirmed.",
        },
      ],
      finalAnswer: "\\(x < 2 - \\sqrt{5} \\;\\text{or}\\; x > 2 + \\sqrt{5}\\)",
      canonicalAnswer: "x<2-sqrt(5) or x>2+sqrt(5)",
    },
  },
  {
    id: "ga48-021",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(x^2 - 6x + 7 \\le 0\\), giving the exact roots in surd form and your answer as an interval.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "quadratic formula", "surd roots", "between the roots", "interval notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the quadratic formula to find where the expression is 0.",
          workingLatex: "x = \\frac{6 \\pm \\sqrt{(-6)^2 - 4(1)(7)}}{2(1)}",
          explanation:
            "With a = 1, b = -6, c = 7, set x^2 - 6x + 7 = 0 and apply the formula.",
        },
        {
          stepNumber: 2,
          description: "Simplify the discriminant.",
          workingLatex: "x = \\frac{6 \\pm \\sqrt{36 - 28}}{2} = \\frac{6 \\pm \\sqrt{8}}{2}",
          explanation: "b^2 - 4ac = 36 - 28 = 8, which is positive, so two real roots.",
        },
        {
          stepNumber: 3,
          description: "Simplify the surd.",
          workingLatex: "\\sqrt{8} = 2\\sqrt{2} \\Rightarrow x = \\frac{6 \\pm 2\\sqrt{2}}{2} = 3 \\pm \\sqrt{2}",
          explanation:
            "sqrt(8) = 2 sqrt(2); dividing by 2 gives roots x = 3 - sqrt(2) ≈ 1.586 and x = 3 + sqrt(2) ≈ 4.414.",
        },
        {
          stepNumber: 4,
          description: "U-shape, on/below the axis between the roots (inclusive).",
          workingLatex: "3 - \\sqrt{2} \\le x \\le 3 + \\sqrt{2}",
          explanation:
            "Between the roots, endpoints included by <=. Test x = 3: 9 - 18 + 7 = -2 <= 0 (true); x = 5: 25 - 30 + 7 = 2 > 0 (false). Confirmed.",
        },
        {
          stepNumber: 5,
          description: "Write as a closed interval.",
          workingLatex: "\\left[\\, 3 - \\sqrt{2},\\; 3 + \\sqrt{2} \\,\\right]",
          explanation:
            "Square brackets show the endpoints are included, matching the <= sign.",
        },
      ],
      finalAnswer: "\\(\\left[\\, 3 - \\sqrt{2},\\; 3 + \\sqrt{2} \\,\\right]\\)",
      canonicalAnswer: "3-sqrt(2)<=x<=3+sqrt(2)",
    },
  },
  {
    id: "ga48-022",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Find all the integer values of \\(x\\) that satisfy both \\(x^2 - 3x - 10 < 0\\) and \\(x > 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "combined with linear", "integer solutions", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise and solve the quadratic inequality.",
          workingLatex: "x^2 - 3x - 10 = (x - 5)(x + 2)",
          explanation:
            "Two numbers multiplying to -10 and adding to -3 are -5 and +2, giving (x-5)(x+2). Roots x = -2 and x = 5.",
        },
        {
          stepNumber: 2,
          description: "Read the quadratic region (U-shape, below the axis between roots).",
          workingLatex: "(x-5)(x+2) < 0 \\Rightarrow -2 < x < 5",
          explanation:
            "The expression is negative between the roots. Test x = 0: -10 < 0 (true); x = 6: 36 - 18 - 10 = 8 > 0 (false). So -2 < x < 5.",
        },
        {
          stepNumber: 3,
          description: "Combine with the linear condition x > 0.",
          workingLatex: "(-2 < x < 5) \\;\\text{and}\\; (x > 0) \\Rightarrow 0 < x < 5",
          explanation:
            "Both conditions must hold, so take the OVERLAP of -2 < x < 5 and x > 0. The tighter lower bound is 0, giving 0 < x < 5.",
        },
        {
          stepNumber: 4,
          description: "List the integers strictly between 0 and 5.",
          workingLatex: "x \\in \\{ 1, 2, 3, 4 \\}",
          explanation:
            "Both bounds are strict, so 0 and 5 are excluded. The integers in the overlap are 1, 2, 3, 4.",
        },
      ],
      finalAnswer: "\\(1, 2, 3, 4\\)",
      canonicalAnswer: "{1,2,3,4}",
    },
  },
  {
    id: "ga48-023",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(6x^2 - x - 2 \\ge 0\\), giving your answer in both inequality and interval notation.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "factorising", "leading coefficient", "outside the roots", "interval notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic (leading coefficient 6).",
          workingLatex: "6x^2 - x - 2 = (3x - 2)(2x + 1)",
          explanation:
            "Split the middle: 6 x -2 = -12, two numbers multiplying to -12 and adding to -1 are -4 and +3. So 6x^2 - 4x + 3x - 2 = 2x(3x-2) + 1(3x-2) = (3x-2)(2x+1).",
        },
        {
          stepNumber: 2,
          description: "Find the roots.",
          workingLatex: "(3x - 2)(2x + 1) = 0 \\Rightarrow x = \\frac{2}{3},\\; x = -\\frac{1}{2}",
          explanation:
            "3x - 2 = 0 gives x = 2/3; 2x + 1 = 0 gives x = -1/2. The smaller root is -1/2.",
        },
        {
          stepNumber: 3,
          description: "U-shape, want on/above the axis: outside the roots (inclusive).",
          workingLatex: "x \\le -\\frac{1}{2} \\;\\text{or}\\; x \\ge \\frac{2}{3}",
          explanation:
            "Positive leading coefficient => U-shape, positive outside the roots; >= includes the endpoints. Test x = 1: 6 - 1 - 2 = 3 >= 0 (true); x = 0: -2 < 0 (false); x = -1: 6 + 1 - 2 = 5 >= 0 (true). Confirmed.",
        },
        {
          stepNumber: 4,
          description: "Write in interval notation.",
          workingLatex: "\\left(-\\infty,\\, -\\frac{1}{2}\\right] \\cup \\left[\\frac{2}{3},\\, \\infty\\right)",
          explanation:
            "Two branches => union of two intervals. The finite endpoints get square brackets (included, from >=); infinity always gets a round bracket.",
        },
      ],
      finalAnswer: "\\(x \\le -\\dfrac{1}{2} \\;\\text{or}\\; x \\ge \\dfrac{2}{3}\\)",
      canonicalAnswer: "x<=-1/2 or x>=2/3",
    },
  },
  {
    id: "ga48-024",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText: "Solve the inequality \\(12 + x - x^2 > 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "negative leading coefficient", "factorising", "between the roots", "sketch"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply by -1 to make the x^2 term positive (and FLIP the inequality).",
          workingLatex: "12 + x - x^2 > 0 \\Rightarrow x^2 - x - 12 < 0",
          explanation:
            "Multiplying (or dividing) an inequality by a negative number REVERSES its direction, so > becomes <. Working with a positive x^2 coefficient makes the U-shape reasoning straightforward.",
        },
        {
          stepNumber: 2,
          description: "Factorise.",
          workingLatex: "x^2 - x - 12 = (x - 4)(x + 3)",
          explanation:
            "Two numbers multiplying to -12 and adding to -1 are -4 and +3, giving (x-4)(x+3). Roots x = -3 and x = 4.",
        },
        {
          stepNumber: 3,
          description: "U-shape, want below the axis: between the roots.",
          workingLatex: "(x-4)(x+3) < 0 \\Rightarrow -3 < x < 4",
          explanation:
            "The rearranged expression is negative between its roots.",
        },
        {
          stepNumber: 4,
          description: "Check against the ORIGINAL inequality.",
          workingLatex: "x = 0: \\; 12 + 0 - 0 = 12 > 0 \\;\\checkmark",
          explanation:
            "Test x = 0 (inside): 12 > 0 (true). Test x = 5 (outside): 12 + 5 - 25 = -8 > 0 (false). Test x = -4: 12 - 4 - 16 = -8 > 0 (false). So -3 < x < 4 is correct.",
        },
      ],
      finalAnswer: "\\(-3 < x < 4\\)",
      canonicalAnswer: "-3<x<4",
    },
  },
  {
    id: "ga48-025",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\((x - 1)(x + 2) \\ge 4\\), giving your answer in inequality notation.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "expand and rearrange", "factorising", "outside the roots", "two branches"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the brackets.",
          workingLatex: "(x - 1)(x + 2) = x^2 + x - 2",
          explanation:
            "Expand first: x^2 + 2x - x - 2 = x^2 + x - 2. You cannot read roots off the factors directly because the right side is 4, not 0.",
        },
        {
          stepNumber: 2,
          description: "Rearrange so one side is 0.",
          workingLatex: "x^2 + x - 2 \\ge 4 \\Rightarrow x^2 + x - 6 \\ge 0",
          explanation:
            "Subtract 4 from both sides: x^2 + x - 2 - 4 = x^2 + x - 6 >= 0.",
        },
        {
          stepNumber: 3,
          description: "Factorise the new quadratic.",
          workingLatex: "x^2 + x - 6 = (x + 3)(x - 2)",
          explanation:
            "Two numbers multiplying to -6 and adding to +1 are +3 and -2, giving (x+3)(x-2). Roots x = -3 and x = 2.",
        },
        {
          stepNumber: 4,
          description: "U-shape, want on/above the axis: outside the roots (inclusive).",
          workingLatex: "x \\le -3 \\;\\text{or}\\; x \\ge 2",
          explanation:
            "Positive x^2 => U-shape, positive outside the roots; >= includes the endpoints.",
        },
        {
          stepNumber: 5,
          description: "Check against the ORIGINAL inequality.",
          workingLatex: "x = 2: \\; (1)(4) = 4 \\ge 4 \\;\\checkmark",
          explanation:
            "Test x = 2 (endpoint): (1)(4) = 4 >= 4 (true, so included). Test x = 0 (inside the gap): (-1)(2) = -2 >= 4 (false). Test x = -3: (-4)(-1) = 4 >= 4 (true). Confirmed.",
        },
      ],
      finalAnswer: "\\(x \\le -3 \\;\\text{or}\\; x \\ge 2\\)",
      canonicalAnswer: "x<=-3 or x>=2",
    },
  },
  {
    id: "ga48-026",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Find all the integer values of \\(n\\) that satisfy \\(n^2 \\le 30\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "square root both branches", "integer solutions", "non-perfect square"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square root both sides (k is not a perfect square).",
          workingLatex: "n^2 \\le 30 \\Rightarrow |n| \\le \\sqrt{30}",
          explanation:
            "n^2 <= 30 means |n| <= sqrt(30). Since 30 is not a perfect square the boundary is irrational, so we need its size.",
        },
        {
          stepNumber: 2,
          description: "Estimate sqrt(30).",
          workingLatex: "5^2 = 25 < 30 < 36 = 6^2 \\Rightarrow 5 < \\sqrt{30} < 6",
          explanation:
            "sqrt(30) lies between 5 and 6 (about 5.48). So the continuous solution is -5.48... <= n <= 5.48...",
        },
        {
          stepNumber: 3,
          description: "Write the inequality and find the integer cut-offs.",
          workingLatex: "-\\sqrt{30} \\le n \\le \\sqrt{30} \\Rightarrow -5 \\le n \\le 5",
          explanation:
            "The largest integer with n^2 <= 30 is 5 (5^2 = 25 <= 30), while 6^2 = 36 > 30 is too big. The same holds on the negative side, so integers run from -5 to 5.",
        },
        {
          stepNumber: 4,
          description: "List the integers.",
          workingLatex: "n \\in \\{ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 \\}",
          explanation:
            "That is eleven integers in total. Check the boundary: 5^2 = 25 <= 30 (true), 6^2 = 36 <= 30 (false).",
        },
      ],
      finalAnswer: "\\(-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5\\)",
      canonicalAnswer: "{-5,-4,-3,-2,-1,0,1,2,3,4,5}",
    },
  },
  {
    id: "ga48-027",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(x^2 + 2x - 5 \\le 0\\), giving the exact roots in surd form and your answer in set notation.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "quadratic formula", "surd roots", "between the roots", "set notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the quadratic formula to find the roots.",
          workingLatex: "x = \\frac{-2 \\pm \\sqrt{2^2 - 4(1)(-5)}}{2(1)}",
          explanation:
            "With a = 1, b = 2, c = -5, set x^2 + 2x - 5 = 0 and apply the formula.",
        },
        {
          stepNumber: 2,
          description: "Simplify the discriminant.",
          workingLatex: "x = \\frac{-2 \\pm \\sqrt{4 + 20}}{2} = \\frac{-2 \\pm \\sqrt{24}}{2}",
          explanation: "b^2 - 4ac = 4 - (-20) = 24, positive, so two real roots.",
        },
        {
          stepNumber: 3,
          description: "Simplify the surd.",
          workingLatex: "\\sqrt{24} = 2\\sqrt{6} \\Rightarrow x = \\frac{-2 \\pm 2\\sqrt{6}}{2} = -1 \\pm \\sqrt{6}",
          explanation:
            "sqrt(24) = 2 sqrt(6); dividing the whole numerator by 2 gives roots x = -1 - sqrt(6) ≈ -3.449 and x = -1 + sqrt(6) ≈ 1.449.",
        },
        {
          stepNumber: 4,
          description: "U-shape, on/below the axis between the roots (inclusive).",
          workingLatex: "-1 - \\sqrt{6} \\le x \\le -1 + \\sqrt{6}",
          explanation:
            "Test x = 0: -5 <= 0 (true); x = 2: 4 + 4 - 5 = 3 > 0 (false). Endpoints included by <=. Confirmed.",
        },
        {
          stepNumber: 5,
          description: "Write in set notation.",
          workingLatex: "\\left\\{ x : -1 - \\sqrt{6} \\le x \\le -1 + \\sqrt{6} \\right\\}",
          explanation:
            "A single closed interval, expressed as one set of x such that the surd bounds hold.",
        },
      ],
      finalAnswer: "\\(\\left\\{ x : -1 - \\sqrt{6} \\le x \\le -1 + \\sqrt{6} \\right\\}\\)",
      canonicalAnswer: "-1-sqrt(6)<=x<=-1+sqrt(6)",
    },
  },
  {
    id: "ga48-028",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Find the set of values of \\(x\\) for which both \\(x^2 - x - 6 < 0\\) and \\(2x - 1 > 0\\). Give your answer in inequality notation.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "combined with linear", "factorising", "intersection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Solve the quadratic inequality first.",
          workingLatex: "x^2 - x - 6 = (x - 3)(x + 2)",
          explanation:
            "Two numbers multiplying to -6 and adding to -1 are -3 and +2, giving (x-3)(x+2). Roots x = -2 and x = 3.",
        },
        {
          stepNumber: 2,
          description: "Read the quadratic region (U-shape, below axis between roots).",
          workingLatex: "(x-3)(x+2) < 0 \\Rightarrow -2 < x < 3",
          explanation:
            "Negative between the roots. Test x = 0: -6 < 0 (true); x = 4: 16 - 4 - 6 = 6 > 0 (false). So -2 < x < 3.",
        },
        {
          stepNumber: 3,
          description: "Solve the linear inequality.",
          workingLatex: "2x - 1 > 0 \\Rightarrow x > \\frac{1}{2}",
          explanation: "Add 1 then divide by 2: x > 1/2.",
        },
        {
          stepNumber: 4,
          description: "Find the overlap of the two solution sets.",
          workingLatex: "(-2 < x < 3) \\;\\text{and}\\; \\left(x > \\frac{1}{2}\\right)",
          explanation:
            "Both must hold simultaneously, so intersect the two regions. The lower bound tightens from -2 to 1/2; the upper bound stays at 3.",
        },
        {
          stepNumber: 5,
          description: "State the combined region.",
          workingLatex: "\\frac{1}{2} < x < 3",
          explanation:
            "Test x = 1: quadratic 1 - 1 - 6 = -6 < 0 (true) and 2(1) - 1 = 1 > 0 (true). Test x = 0: linear 2(0)-1 = -1 > 0 (false). So 1/2 < x < 3.",
        },
      ],
      finalAnswer: "\\(\\dfrac{1}{2} < x < 3\\)",
      canonicalAnswer: "1/2<x<3",
    },
  },
  {
    id: "ga48-029",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "A rectangle has length \\((x + 3)\\) cm and width \\((x - 1)\\) cm. Its area is less than \\(12\\,\\text{cm}^2\\). Given that the width must be positive, find the possible values of \\(x\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "problem solving", "combined with linear", "factorising", "context constraint"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the area inequality.",
          workingLatex: "(x + 3)(x - 1) < 12",
          explanation:
            "Area = length x width = (x+3)(x-1), and this must be less than 12.",
        },
        {
          stepNumber: 2,
          description: "Expand and rearrange to one side.",
          workingLatex: "x^2 + 2x - 3 < 12 \\Rightarrow x^2 + 2x - 15 < 0",
          explanation:
            "Expand: (x+3)(x-1) = x^2 + 2x - 3. Subtract 12: x^2 + 2x - 15 < 0.",
        },
        {
          stepNumber: 3,
          description: "Factorise and find the roots.",
          workingLatex: "x^2 + 2x - 15 = (x + 5)(x - 3) \\Rightarrow x = -5,\\; x = 3",
          explanation:
            "Two numbers multiplying to -15 and adding to +2 are +5 and -3. Roots x = -5 and x = 3.",
        },
        {
          stepNumber: 4,
          description: "Read the quadratic region (U-shape, below axis between roots).",
          workingLatex: "(x+5)(x-3) < 0 \\Rightarrow -5 < x < 3",
          explanation:
            "Negative between the roots, so the area condition alone gives -5 < x < 3.",
        },
        {
          stepNumber: 5,
          description: "Apply the physical constraint: the width must be positive.",
          workingLatex: "x - 1 > 0 \\Rightarrow x > 1",
          explanation:
            "A real width cannot be zero or negative, so x - 1 > 0, i.e. x > 1. (This also makes the length x+3 positive.)",
        },
        {
          stepNumber: 6,
          description: "Combine the two conditions.",
          workingLatex: "(-5 < x < 3) \\;\\text{and}\\; (x > 1) \\Rightarrow 1 < x < 3",
          explanation:
            "Intersect: the lower bound tightens to 1. So 1 < x < 3. Check x = 2: width 1, length 5, area 5 < 12 (true) and width 1 > 0 (true). Confirmed.",
        },
      ],
      finalAnswer: "\\(1 < x < 3\\)",
      canonicalAnswer: "1<x<3",
    },
  },
  {
    id: "ga48-030",
    topicRef: "ga48",
    topicTitle: "Quadratic inequalities and set notation",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "The quadratic \\(x^2 + bx + c\\) has solution set \\(\\{ x : -2 < x < 5 \\}\\) for the inequality \\(x^2 + bx + c < 0\\). Find \\(b\\) and \\(c\\), and hence state the solution of \\(x^2 + bx + c \\ge 0\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quadratic inequality", "reverse engineering", "set notation", "outside the roots", "find coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the roots from the given solution set.",
          workingLatex: "\\{ x : -2 < x < 5 \\} \\Rightarrow \\text{roots } x = -2,\\; x = 5",
          explanation:
            "For a U-shaped quadratic, '< 0 between -2 and 5' means the curve crosses the x-axis exactly at x = -2 and x = 5. Those are the roots.",
        },
        {
          stepNumber: 2,
          description: "Build the quadratic from its roots.",
          workingLatex: "x^2 + bx + c = (x + 2)(x - 5)",
          explanation:
            "A monic quadratic (leading coefficient 1) with roots -2 and 5 factorises as (x+2)(x-5).",
        },
        {
          stepNumber: 3,
          description: "Expand to read off b and c.",
          workingLatex: "(x + 2)(x - 5) = x^2 - 3x - 10",
          explanation:
            "Expand: x^2 - 5x + 2x - 10 = x^2 - 3x - 10. Comparing with x^2 + bx + c gives b = -3 and c = -10.",
        },
        {
          stepNumber: 4,
          description: "Now solve the 'greater than or equal' version.",
          workingLatex: "x^2 - 3x - 10 \\ge 0 \\Rightarrow (x+2)(x-5) \\ge 0",
          explanation:
            "For >= 0 we want where the U-shaped curve is on or above the axis, which is OUTSIDE the roots — the complement of the original region, plus the endpoints.",
        },
        {
          stepNumber: 5,
          description: "State the two-branch solution.",
          workingLatex: "x \\le -2 \\;\\text{or}\\; x \\ge 5",
          explanation:
            "Outside the roots, endpoints included by >=. Check x = 6: (8)(1) = 8 >= 0 (true); x = 0: (2)(-5) = -10 < 0 (false). So b = -3, c = -10, and the solution is x <= -2 or x >= 5.",
        },
      ],
      finalAnswer: "\\(b = -3,\\; c = -10; \\quad x \\le -2 \\;\\text{or}\\; x \\ge 5\\)",
      canonicalAnswer: "x<=-2 or x>=5",
    },
  },
];
