/**
 * Topic: Equation of a line through two points
 * Ref: ga25  (DfE A9)
 * Strand: Algebra — GCSE Maths (Foundation + Higher; tier "Both")
 *
 * Coverage: finding the equation of a straight line, always given in the form
 *   y = mx + c. Clusters covered:
 *     (1) equation through two given points — find the gradient
 *         m = (y2 - y1)/(x2 - x1), then substitute m and ONE point into
 *         y = mx + c to find the intercept c;
 *     (2) equation given a point and the gradient (m supplied, solve for c);
 *     (3) find where a found line crosses the axes (x-intercept: set y = 0;
 *         y-intercept: set x = 0, i.e. read off c);
 *     (4) equations from a real-life linear context
 *         (cost = fixed + rate × n, distance/time, etc.);
 *     (5) verify / solve: does a third point lie on the line through two given
 *         points; find a missing coordinate so that three points are collinear.
 *   NOT covered: reading m and c off an already-given equation (that is the
 *   separate ga24 bank); parallel/perpendicular gradient relationships beyond
 *   the basic "same gradient" idea used incidentally.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga25-001 .. ga25-004  (4)
 *   - Standard:   ga25-005 .. ga25-018  (14)
 *   - Challenge:  ga25-019 .. ga25-030  (12)
 * Id range: ga25-001 .. ga25-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot
 *   for multiplication, per hard project rules. The gradient is always written
 *   as \\frac{y_2 - y_1}{x_2 - x_1} with a consistent subtraction order.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga25-001",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A straight line has gradient \\(2\\) and passes through the point \\((0,\\,3)\\). Find the equation of the line in the form \\(y = mx + c\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["equation of a line", "point and gradient", "y-intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the straight-line form.",
          workingLatex: "y = mx + c",
          explanation:
            "Every non-vertical straight line can be written as y = mx + c. Here m is the gradient (how steep the line is) and c is the y-intercept (the y-value where the line crosses the y-axis, i.e. when x = 0). Our whole job is to pin down the two numbers m and c.",
        },
        {
          stepNumber: 2,
          description: "Write down what is given.",
          workingLatex: "m = 2, \\qquad (x,\\,y) = (0,\\,3)",
          explanation:
            "The gradient m = 2 is handed to us directly, so half the work is already done. We also know one point the line passes through, (0, 3), and we will use it to find c.",
        },
        {
          stepNumber: 3,
          description: "Identify the y-intercept.",
          workingLatex: "x = 0 \\implies c = 3",
          explanation:
            "The point (0, 3) has x = 0, so it sits exactly on the y-axis. That means its y-coordinate IS the y-intercept, giving c = 3 with no substitution needed. If you prefer, put x = 0, y = 3 into y = mx + c: 3 = 2\\cdot 0 + c, which also gives c = 3.",
        },
        {
          stepNumber: 4,
          description: "Write the equation and check.",
          workingLatex: "y = 2x + 3",
          explanation:
            "Put m = 2 and c = 3 into y = mx + c. Check: at x = 0, y = 2\\cdot 0 + 3 = 3 \\checkmark, which matches the point (0, 3).",
          mafs: `<Mafs viewBox={{ x: [-3, 4], y: [-2, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[0, 3]} point2={[1, 5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={3} color="var(--mafs-fg-orange)" />
  <Text x={0} y={3} attach="w" attachDistance={20}>(0, 3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 2x + 3\\)",
      canonicalAnswer: "y=2x+3",
    },
  },
  {
    id: "ga25-002",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A straight line passes through \\((0,\\,-1)\\) and \\((1,\\,4)\\). Find the equation of the line in the form \\(y = mx + c\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (0,\\,-1), \\qquad (x_2,\\,y_2) = (1,\\,4)",
          explanation:
            "Choose one point to be (x_1, y_1) and the other to be (x_2, y_2). It does not matter which is which, as long as you keep the same order in both the top and bottom of the gradient fraction.",
        },
        {
          stepNumber: 2,
          description: "Write down the gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          explanation:
            "Gradient measures (change in y) divided by (change in x) as you move from one point to the other. The key safety rule is to subtract in the SAME order on top and bottom — pick the second point's value first both times.",
        },
        {
          stepNumber: 3,
          description: "Substitute the coordinates.",
          workingLatex: "m = \\frac{4 - (-1)}{1 - 0}",
          explanation:
            "Put y_2 = 4, y_1 = -1 on top and x_2 = 1, x_1 = 0 on the bottom. Take care with the double negative on top: subtracting -1 will become adding 1.",
        },
        {
          stepNumber: 4,
          description: "Simplify to find m.",
          workingLatex: "m = \\frac{5}{1} = 5",
          explanation:
            "Top: 4 - (-1) = 4 + 1 = 5. Bottom: 1 - 0 = 1. So m = 5/1 = 5.",
        },
        {
          stepNumber: 5,
          description: "Read off the y-intercept.",
          workingLatex: "(0,\\,-1) \\implies c = -1",
          explanation:
            "One of the given points, (0, -1), already has x = 0, so it lies on the y-axis and c = -1 is the y-intercept directly. No further substitution is needed.",
        },
        {
          stepNumber: 6,
          description: "Write the equation and check.",
          workingLatex: "y = 5x - 1",
          explanation:
            "Put m = 5 and c = -1 into y = mx + c. Check both points: at x = 0, y = 5\\cdot 0 - 1 = -1 \\checkmark; at x = 1, y = 5\\cdot 1 - 1 = 4 \\checkmark.",
          mafs: `<Mafs viewBox={{ x: [-2, 3], y: [-3, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[0, -1]} point2={[1, 4]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-1} attach="w" attachDistance={20}>(0, -1)</Text>
  <Point x={1} y={4} color="var(--mafs-fg-blue)" />
  <Text x={1} y={4} attach="e" attachDistance={20}>(1, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 5x - 1\\)",
      canonicalAnswer: "y=5x-1",
    },
  },
  {
    id: "ga25-003",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A straight line passes through \\((1,\\,5)\\) and \\((3,\\,11)\\). Find the equation of the line in the form \\(y = mx + c\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "find c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (1,\\,5), \\qquad (x_2,\\,y_2) = (3,\\,11)",
          explanation:
            "Pick (1, 5) as the first point and (3, 11) as the second. Keep this order consistent when forming the gradient.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{11 - 5}{3 - 1}",
          explanation:
            "Differences of y on top, differences of x on the bottom, both in the order (second − first). Neither coordinate is negative here, so this is a clean substitution.",
        },
        {
          stepNumber: 3,
          description: "Simplify to find m.",
          workingLatex: "m = \\frac{6}{2} = 3",
          explanation:
            "Top: 11 - 5 = 6. Bottom: 3 - 1 = 2. So m = 6/2 = 3. Always simplify the fraction to its lowest terms.",
        },
        {
          stepNumber: 4,
          description: "Substitute one point to find c.",
          workingLatex: "5 = 3\\cdot 1 + c",
          explanation:
            "Neither given point has x = 0, so we cannot read c off the axis. Instead put m = 3 and the point (1, 5) into y = mx + c, giving 5 = 3\\cdot 1 + c.",
        },
        {
          stepNumber: 5,
          description: "Solve for c.",
          workingLatex: "5 = 3 + c \\implies c = 2",
          explanation:
            "First 3\\cdot 1 = 3, so 5 = 3 + c. Subtract 3 from both sides to isolate c: c = 5 - 3 = 2.",
        },
        {
          stepNumber: 6,
          description: "Write the equation and check.",
          workingLatex: "y = 3x + 2",
          explanation:
            "Put m = 3 and c = 2 into y = mx + c. Check both points: at x = 1, y = 3\\cdot 1 + 2 = 5 \\checkmark; at x = 3, y = 3\\cdot 3 + 2 = 11 \\checkmark.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-1, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[1, 5]} point2={[3, 11]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={5} color="var(--mafs-fg-blue)" />
  <Text x={1} y={5} attach="w" attachDistance={20}>(1, 5)</Text>
  <Point x={3} y={11} color="var(--mafs-fg-blue)" />
  <Text x={3} y={11} attach="e" attachDistance={20}>(3, 11)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 3x + 2\\)",
      canonicalAnswer: "y=3x+2",
    },
  },
  {
    id: "ga25-004",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A straight line has gradient \\(4\\) and passes through the point \\((2,\\,5)\\). Find the equation of the line in the form \\(y = mx + c\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["equation of a line", "point and gradient", "find c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down what is given.",
          workingLatex: "m = 4, \\qquad (x,\\,y) = (2,\\,5)",
          explanation:
            "The gradient m = 4 is given, and the line passes through (2, 5). Because x is NOT 0 at this point, the point is not on the y-axis, so we cannot just read off c — we must substitute.",
        },
        {
          stepNumber: 2,
          description: "Substitute the point into y = mx + c.",
          workingLatex: "5 = 4\\cdot 2 + c",
          explanation:
            "Put m = 4, x = 2 and y = 5 into y = mx + c. This turns the general equation into a numerical equation with c as the only unknown.",
        },
        {
          stepNumber: 3,
          description: "Solve for c.",
          workingLatex: "5 = 8 + c \\implies c = -3",
          explanation:
            "Work out 4\\cdot 2 = 8, so 5 = 8 + c. Subtract 8 from both sides: c = 5 - 8 = -3. A negative c is perfectly fine — it just means the line crosses the y-axis below the origin.",
        },
        {
          stepNumber: 4,
          description: "Write the equation and check.",
          workingLatex: "y = 4x - 3",
          explanation:
            "Put m = 4 and c = -3 into y = mx + c. Check the point: at x = 2, y = 4\\cdot 2 - 3 = 8 - 3 = 5 \\checkmark.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-5, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[2, 5]} point2={[0, -3]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={5} color="var(--mafs-fg-blue)" />
  <Text x={2} y={5} attach="e" attachDistance={20}>(2, 5)</Text>
  <Point x={0} y={-3} color="var(--mafs-fg-orange)" />
  <Text x={0} y={-3} attach="w" attachDistance={20}>(0, -3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 4x - 3\\)",
      canonicalAnswer: "y=4x-3",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga25-005",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the straight line that passes through the points \\((2,\\,7)\\) and \\((5,\\,16)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "find c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (2,\\,7), \\qquad (x_2,\\,y_2) = (5,\\,16)",
          explanation:
            "Assign (2, 7) as the first point and (5, 16) as the second. Keep this order in both top and bottom of the gradient fraction.",
        },
        {
          stepNumber: 2,
          description: "Find the gradient m.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3",
          explanation:
            "Top: 16 - 7 = 9. Bottom: 5 - 2 = 3. So m = 9/3 = 3. Watch the subtraction order: y values on top, x values on the bottom, in the SAME order.",
        },
        {
          stepNumber: 3,
          description: "Substitute one point to find c.",
          workingLatex: "7 = 3\\cdot 2 + c",
          explanation:
            "Put m = 3 and the point (2, 7) into y = mx + c. Either given point works and gives the same c — pick whichever has friendlier numbers.",
        },
        {
          stepNumber: 4,
          description: "Solve for c.",
          workingLatex: "7 = 6 + c \\implies c = 1",
          explanation:
            "Since 3\\cdot 2 = 6, we have 7 = 6 + c. Subtract 6 from both sides to get c = 1.",
        },
        {
          stepNumber: 5,
          description: "Write the equation and check both points.",
          workingLatex: "y = 3x + 1",
          explanation:
            "At x = 2: y = 3\\cdot 2 + 1 = 7 \\checkmark. At x = 5: y = 3\\cdot 5 + 1 = 16 \\checkmark. Both points satisfy the equation, so y = 3x + 1 is correct.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-2, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[2, 7]} point2={[5, 16]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={7} color="var(--mafs-fg-blue)" />
  <Text x={2} y={7} attach="w" attachDistance={20}>(2, 7)</Text>
  <Point x={5} y={16} color="var(--mafs-fg-blue)" />
  <Text x={5} y={16} attach="e" attachDistance={20}>(5, 16)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 3x + 1\\)",
      canonicalAnswer: "y=3x+1",
    },
  },
  {
    id: "ga25-006",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the straight line that passes through the points \\((-1,\\,8)\\) and \\((2,\\,-1)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (-1,\\,8), \\qquad (x_2,\\,y_2) = (2,\\,-1)",
          explanation:
            "Take (-1, 8) as the first point and (2, -1) as the second. Negative coordinates are common here — handle the minus signs carefully when subtracting.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-1 - 8}{2 - (-1)}",
          explanation:
            "Top is y_2 - y_1 = -1 - 8. Bottom is x_2 - x_1 = 2 - (-1); subtracting a negative becomes adding, so this is 2 + 1. Keeping the brackets in 2 - (-1) helps avoid a sign slip.",
        },
        {
          stepNumber: 3,
          description: "Simplify to find m.",
          workingLatex: "m = \\frac{-9}{3} = -3",
          explanation:
            "Top: -1 - 8 = -9. Bottom: 2 - (-1) = 3. So m = -9/3 = -3. A negative gradient means the line slopes downwards, which matches the y-values dropping as x increases.",
        },
        {
          stepNumber: 4,
          description: "Substitute one point to find c.",
          workingLatex: "8 = (-3)\\cdot(-1) + c",
          explanation:
            "Use m = -3 and the point (-1, 8). Multiplying the two negatives, (-3)\\cdot(-1), will give a positive number — a classic place to lose a sign.",
        },
        {
          stepNumber: 5,
          description: "Solve for c.",
          workingLatex: "8 = 3 + c \\implies c = 5",
          explanation:
            "A negative times a negative gives +3, so 8 = 3 + c. Subtract 3 from both sides: c = 5.",
        },
        {
          stepNumber: 6,
          description: "Write the equation and check both points.",
          workingLatex: "y = -3x + 5",
          explanation:
            "At x = -1: y = -3\\cdot(-1) + 5 = 3 + 5 = 8 \\checkmark. At x = 2: y = -3\\cdot 2 + 5 = -6 + 5 = -1 \\checkmark. Correct.",
          mafs: `<Mafs viewBox={{ x: [-3, 4], y: [-3, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-1, 8]} point2={[2, -1]} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={8} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={8} attach="w" attachDistance={20}>(-1, 8)</Text>
  <Point x={2} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={2} y={-1} attach="e" attachDistance={20}>(2, -1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -3x + 5\\)",
      canonicalAnswer: "y=-3x+5",
    },
  },
  {
    id: "ga25-007",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A straight line has gradient \\(-2\\) and passes through the point \\((4,\\,1)\\). Find the equation of the line in the form \\(y = mx + c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "point and gradient", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down what is given.",
          workingLatex: "m = -2, \\qquad (x,\\,y) = (4,\\,1)",
          explanation:
            "We already have the gradient m = -2, so there is no gradient calculation to do. We only need to find c by substituting the point (4, 1).",
        },
        {
          stepNumber: 2,
          description: "Substitute the point into y = mx + c.",
          workingLatex: "1 = (-2)\\cdot 4 + c",
          explanation:
            "Put m = -2, x = 4 and y = 1 into y = mx + c. Keep the gradient in brackets, (-2)\\cdot 4, so the sign is clear.",
        },
        {
          stepNumber: 3,
          description: "Solve for c.",
          workingLatex: "1 = -8 + c \\implies c = 9",
          explanation:
            "Since (-2)\\cdot 4 = -8, we have 1 = -8 + c. Add 8 to both sides: c = 1 + 8 = 9.",
        },
        {
          stepNumber: 4,
          description: "Write the equation and check.",
          workingLatex: "y = -2x + 9",
          explanation:
            "At x = 4: y = -2\\cdot 4 + 9 = -8 + 9 = 1 \\checkmark, which matches (4, 1).",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-2, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[4, 1]} point2={[0, 9]} color="var(--mafs-fg-accent)" />
  <Point x={4} y={1} color="var(--mafs-fg-blue)" />
  <Text x={4} y={1} attach="e" attachDistance={20}>(4, 1)</Text>
  <Point x={0} y={9} color="var(--mafs-fg-orange)" />
  <Text x={0} y={9} attach="w" attachDistance={20}>(0, 9)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -2x + 9\\)",
      canonicalAnswer: "y=-2x+9",
    },
  },
  {
    id: "ga25-008",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the straight line that passes through the points \\((-3,\\,-7)\\) and \\((1,\\,5)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (-3,\\,-7), \\qquad (x_2,\\,y_2) = (1,\\,5)",
          explanation:
            "Take (-3, -7) as the first point and (1, 5) as the second. Both points have negative entries to manage, so go slowly with the subtractions.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{5 - (-7)}{1 - (-3)}",
          explanation:
            "Top is 5 - (-7) and bottom is 1 - (-3). Each subtraction of a negative turns into an addition, so expect both to grow rather than shrink.",
        },
        {
          stepNumber: 3,
          description: "Simplify to find m.",
          workingLatex: "m = \\frac{12}{4} = 3",
          explanation:
            "Top: 5 - (-7) = 5 + 7 = 12. Bottom: 1 - (-3) = 1 + 3 = 4. So m = 12/4 = 3.",
        },
        {
          stepNumber: 4,
          description: "Substitute the cleaner point to find c.",
          workingLatex: "5 = 3\\cdot 1 + c \\implies 5 = 3 + c \\implies c = 2",
          explanation:
            "Use m = 3 and the cleaner point (1, 5) — positive numbers are easier. So 5 = 3 + c, and subtracting 3 gives c = 2.",
        },
        {
          stepNumber: 5,
          description: "Write the equation and check both points.",
          workingLatex: "y = 3x + 2",
          explanation:
            "At x = 1: y = 3\\cdot 1 + 2 = 5 \\checkmark. At x = -3: y = 3\\cdot(-3) + 2 = -9 + 2 = -7 \\checkmark. Correct.",
          mafs: `<Mafs viewBox={{ x: [-5, 3], y: [-9, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-3, -7]} point2={[1, 5]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={-7} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={-7} attach="e" attachDistance={20}>(-3, -7)</Text>
  <Point x={1} y={5} color="var(--mafs-fg-blue)" />
  <Text x={1} y={5} attach="w" attachDistance={20}>(1, 5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 3x + 2\\)",
      canonicalAnswer: "y=3x+2",
    },
  },
  {
    id: "ga25-009",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the straight line that passes through the points \\((2,\\,3)\\) and \\((8,\\,7)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (2,\\,3), \\qquad (x_2,\\,y_2) = (8,\\,7)",
          explanation:
            "Take (2, 3) and (8, 7). Here the gradient will turn out to be a fraction, which is perfectly fine — keep it as a simplified fraction rather than rounding to a decimal.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - 3}{8 - 2}",
          explanation:
            "Top is 7 - 3, bottom is 8 - 2. The x-step is larger than the y-step, which is the signal that the gradient will be less than 1.",
        },
        {
          stepNumber: 3,
          description: "Simplify the fraction to find m.",
          workingLatex: "m = \\frac{4}{6} = \\frac{2}{3}",
          explanation:
            "Top: 7 - 3 = 4. Bottom: 8 - 2 = 6. So m = 4/6, which simplifies — divide top and bottom by 2 — to 2/3.",
        },
        {
          stepNumber: 4,
          description: "Substitute one point to find c.",
          workingLatex: "3 = \\frac{2}{3}\\cdot 2 + c \\implies 3 = \\frac{4}{3} + c",
          explanation:
            "Use m = 2/3 and the point (2, 3). Work out (2/3)\\cdot 2 = 4/3, so the equation becomes 3 = 4/3 + c.",
        },
        {
          stepNumber: 5,
          description: "Solve for c using a common denominator.",
          workingLatex: "c = 3 - \\frac{4}{3} = \\frac{9}{3} - \\frac{4}{3} = \\frac{5}{3}",
          explanation:
            "Subtract 4/3 from both sides. Write 3 as 9/3 so the fractions share a denominator: c = 9/3 - 4/3 = 5/3.",
        },
        {
          stepNumber: 6,
          description: "Write the equation and check both points.",
          workingLatex: "y = \\frac{2}{3}x + \\frac{5}{3}",
          explanation:
            "At x = 2: y = (2/3)\\cdot 2 + 5/3 = 4/3 + 5/3 = 9/3 = 3 \\checkmark. At x = 8: y = (2/3)\\cdot 8 + 5/3 = 16/3 + 5/3 = 21/3 = 7 \\checkmark.",
          mafs: `<Mafs viewBox={{ x: [-1, 10], y: [-1, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[2, 3]} point2={[8, 7]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={3} color="var(--mafs-fg-blue)" />
  <Text x={2} y={3} attach="n" attachDistance={20}>(2, 3)</Text>
  <Point x={8} y={7} color="var(--mafs-fg-blue)" />
  <Text x={8} y={7} attach="s" attachDistance={20}>(8, 7)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = \\frac{2}{3}x + \\frac{5}{3}\\)",
      canonicalAnswer: "y=(2/3)x+5/3",
    },
  },
  {
    id: "ga25-010",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A line passes through \\((-2,\\,6)\\) and \\((4,\\,-3)\\). Find the equation of the line in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (-2,\\,6), \\qquad (x_2,\\,y_2) = (4,\\,-3)",
          explanation:
            "Take (-2, 6) and (4, -3). The y-values fall as x increases, so expect a negative gradient before you even compute it — a useful sanity check.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-3 - 6}{4 - (-2)}",
          explanation:
            "Top is -3 - 6 (both contributions pull it negative); bottom is 4 - (-2), where subtracting -2 becomes adding 2.",
        },
        {
          stepNumber: 3,
          description: "Simplify the fraction to find m.",
          workingLatex: "m = \\frac{-9}{6} = -\\frac{3}{2}",
          explanation:
            "Top: -3 - 6 = -9. Bottom: 4 - (-2) = 6. So m = -9/6; dividing top and bottom by 3 gives -3/2. The negative confirms the downward slope we predicted.",
        },
        {
          stepNumber: 4,
          description: "Substitute one point to find c.",
          workingLatex: "6 = \\left(-\\frac{3}{2}\\right)(-2) + c",
          explanation:
            "Use m = -3/2 and the point (-2, 6). The product (-3/2)\\cdot(-2) involves two negatives, so it will come out positive — choosing the x = -2 point conveniently cancels the denominator.",
        },
        {
          stepNumber: 5,
          description: "Solve for c.",
          workingLatex: "6 = 3 + c \\implies c = 3",
          explanation:
            "(-3/2)\\cdot(-2) = +3, so 6 = 3 + c. Subtract 3 from both sides to get c = 3.",
        },
        {
          stepNumber: 6,
          description: "Write the equation and check both points.",
          workingLatex: "y = -\\frac{3}{2}x + 3",
          explanation:
            "At x = -2: y = (-3/2)(-2) + 3 = 3 + 3 = 6 \\checkmark. At x = 4: y = (-3/2)(4) + 3 = -6 + 3 = -3 \\checkmark.",
          mafs: `<Mafs viewBox={{ x: [-4, 6], y: [-5, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-2, 6]} point2={[4, -3]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={6} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={6} attach="w" attachDistance={20}>(-2, 6)</Text>
  <Point x={4} y={-3} color="var(--mafs-fg-blue)" />
  <Text x={4} y={-3} attach="e" attachDistance={20}>(4, -3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\frac{3}{2}x + 3\\)",
      canonicalAnswer: "y=-(3/2)x+3",
    },
  },
  {
    id: "ga25-011",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A line passes through \\((1,\\,2)\\) and \\((6,\\,2)\\). Find the equation of the line.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "horizontal line", "zero gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (1,\\,2), \\qquad (x_2,\\,y_2) = (6,\\,2)",
          explanation:
            "Notice both points share the same y-coordinate, 2. This is a strong clue that the line may be horizontal — the y-value never changes.",
        },
        {
          stepNumber: 2,
          description: "Find the gradient m.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{2 - 2}{6 - 1} = \\frac{0}{5} = 0",
          explanation:
            "Top: 2 - 2 = 0. Bottom: 6 - 1 = 5. A zero on top gives m = 0: the line is flat (horizontal). Note 0/5 = 0, not undefined — that mistake (division giving 'no gradient') only happens when the BOTTOM is zero.",
        },
        {
          stepNumber: 3,
          description: "Find c and write the equation.",
          workingLatex: "y = 0\\cdot x + c \\implies y = c = 2",
          explanation:
            "With m = 0, the term 0\\cdot x vanishes and the equation collapses to y = c. Substituting either point gives c = 2, so a horizontal line through (1, 2) and (6, 2) is simply y = 2.",
          mafs: `<Mafs viewBox={{ x: [-1, 8], y: [-2, 5] }} height={260}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[1, 2]} point2={[6, 2]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={2} color="var(--mafs-fg-blue)" />
  <Text x={1} y={2} attach="s" attachDistance={20}>(1, 2)</Text>
  <Point x={6} y={2} color="var(--mafs-fg-blue)" />
  <Text x={6} y={2} attach="s" attachDistance={20}>(6, 2)</Text>
</Mafs>`,
        },
        {
          stepNumber: 4,
          description: "Check both points.",
          workingLatex: "x = 1: y = 2 \\checkmark, \\qquad x = 6: y = 2 \\checkmark",
          explanation:
            "Every point on y = 2 has y-coordinate 2 regardless of x, so both points lie on the line.",
        },
      ],
      finalAnswer: "\\(y = 2\\)",
      canonicalAnswer: "y=2",
    },
  },
  {
    id: "ga25-012",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The line through \\((1,\\,4)\\) and \\((3,\\,10)\\) is extended. Find the \\(x\\)-coordinate of the point where it crosses the \\(x\\)-axis.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "x-intercept", "axis crossing"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3",
          explanation:
            "Using (1, 4) and (3, 10): top 10 - 4 = 6, bottom 3 - 1 = 2, so m = 3.",
        },
        {
          stepNumber: 2,
          description: "Find c.",
          workingLatex: "4 = 3\\cdot 1 + c \\implies c = 1",
          explanation:
            "Substitute m = 3 and (1, 4): 4 = 3 + c, so c = 1. The line is y = 3x + 1.",
        },
        {
          stepNumber: 3,
          description: "Set y = 0 for the x-axis crossing.",
          workingLatex: "0 = 3x + 1",
          explanation:
            "The x-axis is the set of points where y = 0 (every point on it has height zero). So put y = 0 into the equation y = 3x + 1 to find the crossing.",
        },
        {
          stepNumber: 4,
          description: "Rearrange the equation.",
          workingLatex: "3x = -1",
          explanation:
            "Subtract 1 from both sides of 0 = 3x + 1 to get 3x = -1. This isolates the x-term ready for the final division.",
        },
        {
          stepNumber: 5,
          description: "Solve for x.",
          workingLatex: "x = -\\frac{1}{3}",
          explanation:
            "Divide both sides by 3 to get x = -1/3. So the line crosses the x-axis at (-1/3, 0); the question asks only for the x-coordinate.",
          mafs: `<Mafs viewBox={{ x: [-2, 4], y: [-3, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[1, 4]} point2={[3, 10]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={4} color="var(--mafs-fg-blue)" />
  <Text x={1} y={4} attach="w" attachDistance={20}>(1, 4)</Text>
  <Point x={3} y={10} color="var(--mafs-fg-blue)" />
  <Text x={3} y={10} attach="w" attachDistance={20}>(3, 10)</Text>
  <Point x={-0.3333} y={0} color="var(--mafs-fg-orange)" />
  <Text x={-0.3333} y={0} attach="sw" attachDistance={18}>(-1/3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = -\\frac{1}{3}\\)",
      canonicalAnswer: "-1/3",
    },
  },
  {
    id: "ga25-013",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A taxi firm charges a fixed fee plus a fixed amount per mile. A \\(2\\)-mile trip costs \\(\\pounds 7\\) and a \\(5\\)-mile trip costs \\(\\pounds 13\\). Taking \\(y\\) as the cost in pounds and \\(x\\) as the number of miles, find the equation linking \\(y\\) and \\(x\\) in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "real-life context", "two points"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate the context into two points.",
          workingLatex: "(2,\\,7), \\qquad (5,\\,13)",
          explanation:
            "The cost depends linearly on the miles: y = mx + c, where m is the cost per mile and c is the fixed fee. '2 miles cost \\pounds 7' is the point (2, 7); '5 miles cost \\pounds 13' is the point (5, 13).",
        },
        {
          stepNumber: 2,
          description: "Find the gradient (cost per mile).",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{13 - 7}{5 - 2} = \\frac{6}{3} = 2",
          explanation:
            "Top: 13 - 7 = 6. Bottom: 5 - 2 = 3. So m = 2, meaning each mile costs \\pounds 2. The gradient is the rate of change, which here is the per-mile charge.",
        },
        {
          stepNumber: 3,
          description: "Find the intercept (fixed fee).",
          workingLatex: "7 = 2\\cdot 2 + c \\implies 7 = 4 + c \\implies c = 3",
          explanation:
            "Substitute m = 2 and the point (2, 7): 7 = 4 + c, so c = 3. In context, c is the cost when x = 0 miles — the fixed fee, here \\pounds 3.",
        },
        {
          stepNumber: 4,
          description: "Write the equation and check both points.",
          workingLatex: "y = 2x + 3",
          explanation:
            "At x = 2: y = 2\\cdot 2 + 3 = 7 \\checkmark. At x = 5: y = 2\\cdot 5 + 3 = 13 \\checkmark. The cost is y = 2x + 3 pounds.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-1, 15] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[2, 7]} point2={[5, 13]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={7} color="var(--mafs-fg-blue)" />
  <Text x={2} y={7} attach="w" attachDistance={20}>(2, 7)</Text>
  <Point x={5} y={13} color="var(--mafs-fg-blue)" />
  <Text x={5} y={13} attach="e" attachDistance={20}>(5, 13)</Text>
  <Point x={0} y={3} color="var(--mafs-fg-orange)" />
  <Text x={0} y={3} attach="w" attachDistance={18}>(0, 3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 2x + 3\\)",
      canonicalAnswer: "y=2x+3",
    },
  },
  {
    id: "ga25-014",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Decide whether the point \\((4,\\,11)\\) lies on the straight line through \\((1,\\,2)\\) and \\((2,\\,5)\\). Show your working and give the equation of the line in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "verify point", "collinear"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of the line through the two points.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{5 - 2}{2 - 1} = \\frac{3}{1} = 3",
          explanation:
            "Using (1, 2) and (2, 5): top 5 - 2 = 3, bottom 2 - 1 = 1, so m = 3.",
        },
        {
          stepNumber: 2,
          description: "Find c.",
          workingLatex: "2 = 3\\cdot 1 + c \\implies c = -1",
          explanation:
            "Substitute m = 3 and (1, 2): 2 = 3 + c, so c = -1. The line is y = 3x - 1.",
        },
        {
          stepNumber: 3,
          description: "Test the third point in the equation.",
          workingLatex: "x = 4: \\quad y = 3\\cdot 4 - 1 = 12 - 1 = 11",
          explanation:
            "The cleanest test is to put the third point's x-coordinate into the line and see whether the line's y matches the point's y. Substitute x = 4 into y = 3x - 1, giving y = 11.",
        },
        {
          stepNumber: 4,
          description: "State the conclusion.",
          workingLatex: "(4,\\,11) \\text{ lies on } y = 3x - 1 \\checkmark",
          explanation:
            "The equation produces y = 11 when x = 4, which is exactly the y-coordinate of (4, 11). Since the point fits the equation, it lies on the line, so all three points are collinear.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-2, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[1, 2]} point2={[2, 5]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={2} color="var(--mafs-fg-blue)" />
  <Text x={1} y={2} attach="e" attachDistance={20}>(1, 2)</Text>
  <Point x={2} y={5} color="var(--mafs-fg-blue)" />
  <Text x={2} y={5} attach="e" attachDistance={20}>(2, 5)</Text>
  <Point x={4} y={11} color="var(--mafs-fg-orange)" />
  <Text x={4} y={11} attach="w" attachDistance={20}>(4, 11)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 3x - 1\\); the point \\((4,\\,11)\\) lies on the line.",
      canonicalAnswer: "y=3x-1",
    },
  },
  {
    id: "ga25-015",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A line passes through \\((-4,\\,9)\\) and \\((2,\\,-3)\\). Find the equation of the line in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (-4,\\,9), \\qquad (x_2,\\,y_2) = (2,\\,-3)",
          explanation:
            "Take (-4, 9) and (2, -3). As x rises from -4 to 2, y falls from 9 to -3, so the gradient should come out negative.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-3 - 9}{2 - (-4)}",
          explanation:
            "Top is -3 - 9; bottom is 2 - (-4), where the double negative becomes 2 + 4. Keeping the brackets prevents the common slip of writing 2 - 4 = -2.",
        },
        {
          stepNumber: 3,
          description: "Simplify to find m.",
          workingLatex: "m = \\frac{-12}{6} = -2",
          explanation:
            "Top: -3 - 9 = -12. Bottom: 2 - (-4) = 6. So m = -12/6 = -2, matching the negative slope we expected.",
        },
        {
          stepNumber: 4,
          description: "Substitute one point to find c.",
          workingLatex: "-3 = (-2)\\cdot 2 + c \\implies -3 = -4 + c \\implies c = 1",
          explanation:
            "Use m = -2 and the point (2, -3): (-2)\\cdot 2 = -4, so -3 = -4 + c. Add 4 to both sides: c = -3 + 4 = 1.",
        },
        {
          stepNumber: 5,
          description: "Write the equation and check both points.",
          workingLatex: "y = -2x + 1",
          explanation:
            "At x = 2: y = -2\\cdot 2 + 1 = -3 \\checkmark. At x = -4: y = -2\\cdot(-4) + 1 = 8 + 1 = 9 \\checkmark.",
          mafs: `<Mafs viewBox={{ x: [-6, 4], y: [-5, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-4, 9]} point2={[2, -3]} color="var(--mafs-fg-accent)" />
  <Point x={-4} y={9} color="var(--mafs-fg-blue)" />
  <Text x={-4} y={9} attach="e" attachDistance={20}>(-4, 9)</Text>
  <Point x={2} y={-3} color="var(--mafs-fg-blue)" />
  <Text x={2} y={-3} attach="e" attachDistance={20}>(2, -3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -2x + 1\\)",
      canonicalAnswer: "y=-2x+1",
    },
  },
  {
    id: "ga25-016",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A line has gradient \\(\\dfrac{1}{2}\\) and passes through the point \\((6,\\,1)\\). Find the equation of the line in the form \\(y = mx + c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "point and gradient", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down what is given.",
          workingLatex: "m = \\frac{1}{2}, \\qquad (x,\\,y) = (6,\\,1)",
          explanation:
            "The gradient is a fraction, m = 1/2, but the method is unchanged. We substitute the point (6, 1) to find c.",
        },
        {
          stepNumber: 2,
          description: "Substitute the point into y = mx + c.",
          workingLatex: "1 = \\frac{1}{2}\\cdot 6 + c",
          explanation:
            "Put m = 1/2, x = 6 and y = 1 into y = mx + c. The 6 is chosen friendly: (1/2)\\cdot 6 is a whole number, which keeps the arithmetic tidy.",
        },
        {
          stepNumber: 3,
          description: "Solve for c.",
          workingLatex: "1 = 3 + c \\implies c = -2",
          explanation:
            "Since (1/2)\\cdot 6 = 3, we have 1 = 3 + c. Subtract 3 from both sides: c = -2.",
        },
        {
          stepNumber: 4,
          description: "Write the equation and check.",
          workingLatex: "y = \\frac{1}{2}x - 2",
          explanation:
            "At x = 6: y = (1/2)\\cdot 6 - 2 = 3 - 2 = 1 \\checkmark, matching (6, 1).",
          mafs: `<Mafs viewBox={{ x: [-2, 8], y: [-4, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[6, 1]} point2={[0, -2]} color="var(--mafs-fg-accent)" />
  <Point x={6} y={1} color="var(--mafs-fg-blue)" />
  <Text x={6} y={1} attach="s" attachDistance={20}>(6, 1)</Text>
  <Point x={0} y={-2} color="var(--mafs-fg-orange)" />
  <Text x={0} y={-2} attach="w" attachDistance={20}>(0, -2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = \\frac{1}{2}x - 2\\)",
      canonicalAnswer: "y=(1/2)x-2",
    },
  },
  {
    id: "ga25-017",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The line through \\((-1,\\,1)\\) and \\((3,\\,9)\\) crosses the \\(y\\)-axis at the point \\((0,\\,c)\\). Find the value of \\(c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "y-intercept", "axis crossing"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 1}{3 - (-1)} = \\frac{8}{4} = 2",
          explanation:
            "Using (-1, 1) and (3, 9): top 9 - 1 = 8, bottom 3 - (-1) = 3 + 1 = 4, so m = 2.",
        },
        {
          stepNumber: 2,
          description: "Find c by substitution.",
          workingLatex: "1 = 2\\cdot(-1) + c \\implies 1 = -2 + c \\implies c = 3",
          explanation:
            "Use m = 2 and the point (-1, 1): 2\\cdot(-1) = -2, so 1 = -2 + c, giving c = 3. Neither given point sits on the y-axis, so we must solve for c rather than read it off.",
        },
        {
          stepNumber: 3,
          description: "State the crossing point.",
          workingLatex: "y = 2x + 3 \\implies \\text{crosses } y\\text{-axis at } (0,\\,3)",
          explanation:
            "The y-intercept c is exactly where the line crosses the y-axis (x = 0). At x = 0, y = 2\\cdot 0 + 3 = 3, so the line crosses at (0, 3) and the required value is c = 3.",
          mafs: `<Mafs viewBox={{ x: [-3, 5], y: [-2, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-1, 1]} point2={[3, 9]} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={1} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={1} attach="w" attachDistance={20}>(-1, 1)</Text>
  <Point x={3} y={9} color="var(--mafs-fg-blue)" />
  <Text x={3} y={9} attach="e" attachDistance={20}>(3, 9)</Text>
  <Point x={0} y={3} color="var(--mafs-fg-orange)" />
  <Text x={0} y={3} attach="w" attachDistance={18}>(0, 3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(c = 3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga25-018",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A plumber's charge is made up of a call-out fee plus an hourly rate. A \\(1\\)-hour job costs \\(\\pounds 60\\) and a \\(4\\)-hour job costs \\(\\pounds 150\\). Taking \\(y\\) as the total cost in pounds and \\(x\\) as the number of hours, find the equation in the form \\(y = mx + c\\) and state the call-out fee.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "real-life context", "intercept meaning"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate into two points.",
          workingLatex: "(1,\\,60), \\qquad (4,\\,150)",
          explanation:
            "Cost is linear in hours: y = mx + c, where m is the hourly rate and c is the call-out fee. '1 hour costs \\pounds 60' is (1, 60); '4 hours cost \\pounds 150' is (4, 150).",
        },
        {
          stepNumber: 2,
          description: "Find the gradient (hourly rate).",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{150 - 60}{4 - 1} = \\frac{90}{3} = 30",
          explanation:
            "Top: 150 - 60 = 90. Bottom: 4 - 1 = 3. So m = 30, i.e. \\pounds 30 per hour — the gradient is the rate per hour.",
        },
        {
          stepNumber: 3,
          description: "Find the intercept (call-out fee).",
          workingLatex: "60 = 30\\cdot 1 + c \\implies 60 = 30 + c \\implies c = 30",
          explanation:
            "Substitute m = 30 and (1, 60): 60 = 30 + c, so c = 30. The intercept is the cost at x = 0 hours — the call-out fee, here \\pounds 30.",
        },
        {
          stepNumber: 4,
          description: "Write the equation and check both points.",
          workingLatex: "y = 30x + 30",
          explanation:
            "At x = 1: y = 30 + 30 = 60 \\checkmark. At x = 4: y = 120 + 30 = 150 \\checkmark. So y = 30x + 30 and the call-out fee (the value at x = 0) is \\pounds 30.",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-10, 170] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[1, 60]} point2={[4, 150]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={60} color="var(--mafs-fg-blue)" />
  <Text x={1} y={60} attach="e" attachDistance={20}>(1, 60)</Text>
  <Point x={4} y={150} color="var(--mafs-fg-blue)" />
  <Text x={4} y={150} attach="e" attachDistance={20}>(4, 150)</Text>
  <Point x={0} y={30} color="var(--mafs-fg-orange)" />
  <Text x={0} y={30} attach="w" attachDistance={18}>(0, 30)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 30x + 30\\); the call-out fee is \\(\\pounds 30\\).",
      canonicalAnswer: "y=30x+30",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga25-019",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A straight line passes through \\((-5,\\,-2)\\) and \\((3,\\,4)\\). Find the equation of the line in the form \\(y = mx + c\\), and find the coordinates of the points where it crosses both axes.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "both intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (-5,\\,-2), \\qquad (x_2,\\,y_2) = (3,\\,4)",
          explanation:
            "Take (-5, -2) and (3, 4). Both have negative entries to track, so keep the subtraction order consistent and watch the signs.",
        },
        {
          stepNumber: 2,
          description: "Find the gradient m.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{4 - (-2)}{3 - (-5)} = \\frac{6}{8} = \\frac{3}{4}",
          explanation:
            "Top: 4 - (-2) = 6. Bottom: 3 - (-5) = 8. So m = 6/8 = 3/4 after dividing top and bottom by 2.",
        },
        {
          stepNumber: 3,
          description: "Substitute one point to find c.",
          workingLatex: "4 = \\frac{3}{4}\\cdot 3 + c \\implies 4 = \\frac{9}{4} + c",
          explanation:
            "Use m = 3/4 and the point (3, 4). Work out (3/4)\\cdot 3 = 9/4, so the equation becomes 4 = 9/4 + c.",
        },
        {
          stepNumber: 4,
          description: "Solve for c and write the equation.",
          workingLatex: "c = 4 - \\frac{9}{4} = \\frac{16}{4} - \\frac{9}{4} = \\frac{7}{4} \\implies y = \\frac{3}{4}x + \\frac{7}{4}",
          explanation:
            "Write 4 as 16/4 to subtract: c = 16/4 - 9/4 = 7/4. Check both points: at x = 3, y = 9/4 + 7/4 = 16/4 = 4 \\checkmark; at x = -5, y = -15/4 + 7/4 = -8/4 = -2 \\checkmark.",
        },
        {
          stepNumber: 5,
          description: "Find the y-axis crossing.",
          workingLatex: "x = 0: \\quad y = \\frac{7}{4} \\Rightarrow \\left(0,\\,\\frac{7}{4}\\right)",
          explanation:
            "The y-axis is where x = 0. Setting x = 0 leaves y = c = 7/4, so the line meets the y-axis at (0, 7/4).",
        },
        {
          stepNumber: 6,
          description: "Find the x-axis crossing.",
          workingLatex: "y = 0: \\quad 0 = \\frac{3}{4}x + \\frac{7}{4} \\implies \\frac{3}{4}x = -\\frac{7}{4} \\implies x = -\\frac{7}{3} \\Rightarrow \\left(-\\frac{7}{3},\\,0\\right)",
          explanation:
            "The x-axis is where y = 0. Setting y = 0 gives (3/4)x = -7/4; multiply both sides by 4/3 so x = (-7/4)\\cdot(4/3) = -7/3, i.e. (-7/3, 0).",
          mafs: `<Mafs viewBox={{ x: [-7, 5], y: [-3, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-5, -2]} point2={[3, 4]} color="var(--mafs-fg-accent)" />
  <Point x={-5} y={-2} color="var(--mafs-fg-blue)" />
  <Text x={-5} y={-2} attach="w" attachDistance={20}>(-5, -2)</Text>
  <Point x={3} y={4} color="var(--mafs-fg-blue)" />
  <Text x={3} y={4} attach="e" attachDistance={20}>(3, 4)</Text>
  <Point x={0} y={1.75} color="var(--mafs-fg-orange)" />
  <Text x={0} y={1.75} attach="e" attachDistance={16}>(0, 7/4)</Text>
  <Point x={-2.3333} y={0} color="var(--mafs-fg-orange)" />
  <Text x={-2.3333} y={0} attach="s" attachDistance={16}>(-7/3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = \\frac{3}{4}x + \\frac{7}{4}\\); crosses the \\(y\\)-axis at \\(\\left(0,\\,\\frac{7}{4}\\right)\\) and the \\(x\\)-axis at \\(\\left(-\\frac{7}{3},\\,0\\right)\\).",
      canonicalAnswer: "y=(3/4)x+7/4",
    },
  },
  {
    id: "ga25-020",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The points \\((2,\\,5)\\), \\((5,\\,11)\\) and \\((k,\\,17)\\) are collinear (they lie on one straight line). Find the value of \\(k\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "collinear", "missing coordinate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of the line through the two known points.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{11 - 5}{5 - 2} = \\frac{6}{3} = 2",
          explanation:
            "Two of the three points are fully known, so use them to fix the line. With (2, 5) and (5, 11): top 11 - 5 = 6, bottom 5 - 2 = 3, so m = 2.",
        },
        {
          stepNumber: 2,
          description: "Find c.",
          workingLatex: "5 = 2\\cdot 2 + c \\implies 5 = 4 + c \\implies c = 1",
          explanation:
            "Substitute m = 2 and (2, 5): 5 = 4 + c, so c = 1. The line every collinear point must satisfy is y = 2x + 1.",
        },
        {
          stepNumber: 3,
          description: "Use the third point: its y-value is 17.",
          workingLatex: "17 = 2k + 1",
          explanation:
            "For (k, 17) to be on the line, it must satisfy y = 2x + 1 with y = 17 and x = k. Substituting gives the equation 17 = 2k + 1, with k the only unknown.",
        },
        {
          stepNumber: 4,
          description: "Solve for k.",
          workingLatex: "2k = 16 \\implies k = 8",
          explanation:
            "Subtract 1 from both sides: 2k = 16, then divide by 2 to get k = 8.",
        },
        {
          stepNumber: 5,
          description: "Check.",
          workingLatex: "x = 8: y = 2\\cdot 8 + 1 = 17 \\checkmark",
          explanation:
            "At x = 8, y = 17, confirming (8, 17) lies on y = 2x + 1 together with the other two points.",
          mafs: `<Mafs viewBox={{ x: [-1, 10], y: [-1, 19] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[2, 5]} point2={[5, 11]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={5} color="var(--mafs-fg-blue)" />
  <Text x={2} y={5} attach="w" attachDistance={20}>(2, 5)</Text>
  <Point x={5} y={11} color="var(--mafs-fg-blue)" />
  <Text x={5} y={11} attach="w" attachDistance={20}>(5, 11)</Text>
  <Point x={8} y={17} color="var(--mafs-fg-orange)" />
  <Text x={8} y={17} attach="w" attachDistance={20}>(8, 17)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = 8\\)",
      canonicalAnswer: "8",
    },
  },
  {
    id: "ga25-021",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The points \\((-2,\\,7)\\), \\((4,\\,-5)\\) and \\((1,\\,t)\\) lie on the same straight line. Find the value of \\(t\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "collinear", "missing coordinate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of the line through the two known points.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-5 - 7}{4 - (-2)} = \\frac{-12}{6} = -2",
          explanation:
            "Use the two fully-known points (-2, 7) and (4, -5): top -5 - 7 = -12, bottom 4 - (-2) = 6, so m = -2.",
        },
        {
          stepNumber: 2,
          description: "Find c.",
          workingLatex: "7 = (-2)\\cdot(-2) + c \\implies 7 = 4 + c \\implies c = 3",
          explanation:
            "Substitute m = -2 and (-2, 7): (-2)(-2) = 4, so 7 = 4 + c, giving c = 3. The line is y = -2x + 3.",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 1 to find t.",
          workingLatex: "t = -2\\cdot 1 + 3 = -2 + 3 = 1",
          explanation:
            "For (1, t) to lie on the line, t is just the line's y-value at x = 1: t = -2(1) + 3 = 1.",
        },
        {
          stepNumber: 4,
          description: "Check against both original points.",
          workingLatex: "x = -2: y = 7 \\checkmark, \\quad x = 4: y = -5 \\checkmark, \\quad x = 1: y = 1",
          explanation:
            "The equation y = -2x + 3 reproduces both given points, so t = 1 places (1, 1) on the same line.",
          mafs: `<Mafs viewBox={{ x: [-4, 6], y: [-7, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-2, 7]} point2={[4, -5]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={7} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={7} attach="e" attachDistance={20}>(-2, 7)</Text>
  <Point x={4} y={-5} color="var(--mafs-fg-blue)" />
  <Text x={4} y={-5} attach="e" attachDistance={20}>(4, -5)</Text>
  <Point x={1} y={1} color="var(--mafs-fg-orange)" />
  <Text x={1} y={1} attach="ne" attachDistance={18}>(1, 1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(t = 1\\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "ga25-022",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A line passes through \\((-3,\\,8)\\) and \\((5,\\,2)\\). Find the equation of the line in the form \\(y = mx + c\\), giving \\(m\\) and \\(c\\) as exact fractions.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "two points", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Label the two points.",
          workingLatex: "(x_1,\\,y_1) = (-3,\\,8), \\qquad (x_2,\\,y_2) = (5,\\,2)",
          explanation:
            "Take (-3, 8) and (5, 2). The gradient and intercept will both be fractions, so work carefully with common denominators and keep everything exact.",
        },
        {
          stepNumber: 2,
          description: "Find the gradient m.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{2 - 8}{5 - (-3)} = \\frac{-6}{8} = -\\frac{3}{4}",
          explanation:
            "Top: 2 - 8 = -6. Bottom: 5 - (-3) = 8. So m = -6/8 = -3/4 after dividing top and bottom by 2.",
        },
        {
          stepNumber: 3,
          description: "Substitute one point to find c.",
          workingLatex: "2 = \\left(-\\frac{3}{4}\\right)\\cdot 5 + c \\implies 2 = -\\frac{15}{4} + c",
          explanation:
            "Use m = -3/4 and (5, 2). The product (-3/4)\\cdot 5 = -15/4, so the equation becomes 2 = -15/4 + c.",
        },
        {
          stepNumber: 4,
          description: "Solve for c and write the equation.",
          workingLatex: "c = 2 + \\frac{15}{4} = \\frac{8}{4} + \\frac{15}{4} = \\frac{23}{4} \\implies y = -\\frac{3}{4}x + \\frac{23}{4}",
          explanation:
            "Add 15/4 to both sides; write 2 as 8/4 to combine: c = 8/4 + 15/4 = 23/4. Check: at x = 5, y = -15/4 + 23/4 = 8/4 = 2 \\checkmark; at x = -3, y = 9/4 + 23/4 = 32/4 = 8 \\checkmark.",
          mafs: `<Mafs viewBox={{ x: [-5, 7], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-3, 8]} point2={[5, 2]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={8} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={8} attach="w" attachDistance={20}>(-3, 8)</Text>
  <Point x={5} y={2} color="var(--mafs-fg-blue)" />
  <Text x={5} y={2} attach="e" attachDistance={20}>(5, 2)</Text>
  <Point x={0} y={5.75} color="var(--mafs-fg-orange)" />
  <Text x={0} y={5.75} attach="e" attachDistance={16}>(0, 23/4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\frac{3}{4}x + \\frac{23}{4}\\)",
      canonicalAnswer: "y=-(3/4)x+23/4",
    },
  },
  {
    id: "ga25-023",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The line \\(L\\) passes through \\(A(1,\\,9)\\) and \\(B(4,\\,3)\\). A second line is parallel to \\(L\\) and passes through \\((2,\\,1)\\). Find the equation of this second line in the form \\(y = mx + c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "parallel lines", "two points"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of line L.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{3 - 9}{4 - 1} = \\frac{-6}{3} = -2",
          explanation:
            "Using A(1, 9) and B(4, 3): top 3 - 9 = -6, bottom 4 - 1 = 3, so the gradient of L is -2.",
        },
        {
          stepNumber: 2,
          description: "Use the parallel condition.",
          workingLatex: "m_{\\text{new}} = m_L = -2",
          explanation:
            "Parallel lines have equal gradients — that is the whole point of the parallel condition. So the second line also has gradient -2; the new point only changes the intercept.",
        },
        {
          stepNumber: 3,
          description: "Substitute the given point of the new line to find c.",
          workingLatex: "1 = (-2)\\cdot 2 + c \\implies 1 = -4 + c \\implies c = 5",
          explanation:
            "Use m = -2 and the point (2, 1) that the new line passes through: (-2)\\cdot 2 = -4, so 1 = -4 + c, giving c = 5.",
        },
        {
          stepNumber: 4,
          description: "Write the equation and check the point.",
          workingLatex: "y = -2x + 5",
          explanation:
            "At x = 2: y = -2\\cdot 2 + 5 = -4 + 5 = 1 \\checkmark, matching (2, 1). The new line has the same gradient as L (-2) but a different intercept, so it really is parallel and distinct.",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-2, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[1, 9]} point2={[4, 3]} color="var(--mafs-fg-blue)" />
  <Text x={4} y={3} attach="e" attachDistance={16}>L</Text>
  <Line.ThroughPoints point1={[2, 1]} point2={[0, 5]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={1} color="var(--mafs-fg-blue)" />
  <Text x={2} y={1} attach="e" attachDistance={20}>(2, 1)</Text>
  <Point x={0} y={5} color="var(--mafs-fg-orange)" />
  <Text x={0} y={5} attach="w" attachDistance={18}>(0, 5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -2x + 5\\)",
      canonicalAnswer: "y=-2x+5",
    },
  },
  {
    id: "ga25-024",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A line passes through \\((-2,\\,-5)\\) and \\((4,\\,7)\\). Find the area of the triangle formed by this line and the two coordinate axes.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "intercepts", "triangle area"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - (-5)}{4 - (-2)} = \\frac{12}{6} = 2",
          explanation:
            "Using (-2, -5) and (4, 7): top 7 - (-5) = 12, bottom 4 - (-2) = 6, so m = 2.",
        },
        {
          stepNumber: 2,
          description: "Find c.",
          workingLatex: "7 = 2\\cdot 4 + c \\implies 7 = 8 + c \\implies c = -1",
          explanation:
            "Substitute m = 2 and (4, 7): 7 = 8 + c, so c = -1. The line is y = 2x - 1.",
        },
        {
          stepNumber: 3,
          description: "Find the y-intercept.",
          workingLatex: "x = 0: y = -1 \\Rightarrow (0,\\,-1)",
          explanation:
            "The triangle is bounded by the line and the two axes, so we need where the line meets each axis. Set x = 0: y = c = -1, so it meets the y-axis at (0, -1).",
        },
        {
          stepNumber: 4,
          description: "Find the x-intercept.",
          workingLatex: "y = 0: 0 = 2x - 1 \\implies x = \\frac{1}{2} \\Rightarrow \\left(\\frac{1}{2},\\,0\\right)",
          explanation:
            "Set y = 0: 0 = 2x - 1, so 2x = 1 and x = 1/2. The line meets the x-axis at (1/2, 0).",
        },
        {
          stepNumber: 5,
          description: "Compute the triangle's area.",
          mafs: `<Mafs viewBox={{ x: [-3, 5], y: [-6, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-2, -5]} point2={[4, 7]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={-5} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={-5} attach="w" attachDistance={20}>(-2, -5)</Text>
  <Point x={4} y={7} color="var(--mafs-fg-blue)" />
  <Text x={4} y={7} attach="w" attachDistance={20}>(4, 7)</Text>
  <Point x={0} y={-1} color="var(--mafs-fg-orange)" />
  <Text x={0} y={-1} attach="w" attachDistance={16}>(0, -1)</Text>
  <Point x={0.5} y={0} color="var(--mafs-fg-orange)" />
  <Text x={0.5} y={0} attach="ne" attachDistance={14}>(1/2, 0)</Text>
</Mafs>`,
          workingLatex: "A = \\frac{1}{2}\\cdot |x\\text{-int}| \\cdot |y\\text{-int}| = \\frac{1}{2}\\cdot \\frac{1}{2}\\cdot 1 = \\frac{1}{4}",
          explanation:
            "The two axes meet at a right angle at the origin, so the triangle is right-angled there with legs equal to the absolute values of the intercepts: base = 1/2 along the x-axis and height = 1 along the y-axis. We take absolute values because lengths are positive even when an intercept is negative. Area = (1/2)\\cdot base \\cdot height = (1/2)\\cdot(1/2)\\cdot 1 = 1/4.",
        },
      ],
      finalAnswer: "Area \\(= \\frac{1}{4}\\) square units.",
      canonicalAnswer: "1/4",
    },
  },
  {
    id: "ga25-025",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A car's value falls steadily. After \\(2\\) years it is worth \\(\\pounds 9000\\); after \\(5\\) years it is worth \\(\\pounds 6000\\). Taking \\(V\\) for the value in pounds and \\(t\\) for the number of years, find the equation in the form \\(V = mt + c\\), and use it to predict the value after \\(7\\) years.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "real-life context", "prediction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate into two points.",
          workingLatex: "(t,\\,V) = (2,\\,9000) \\text{ and } (5,\\,6000)",
          explanation:
            "Value falls linearly with time: V = mt + c. '2 years -> \\pounds 9000' is (2, 9000); '5 years -> \\pounds 6000' is (5, 6000). Here t plays the role of x and V the role of y.",
        },
        {
          stepNumber: 2,
          description: "Find the gradient (rate of change).",
          workingLatex: "m = \\frac{V_2 - V_1}{t_2 - t_1} = \\frac{6000 - 9000}{5 - 2} = \\frac{-3000}{3} = -1000",
          explanation:
            "Top: 6000 - 9000 = -3000. Bottom: 5 - 2 = 3. So m = -1000. The negative gradient is expected because the car loses value: it drops by \\pounds 1000 per year.",
        },
        {
          stepNumber: 3,
          description: "Find c.",
          workingLatex: "9000 = (-1000)\\cdot 2 + c \\implies 9000 = -2000 + c \\implies c = 11000",
          explanation:
            "Substitute m = -1000 and (2, 9000): (-1000)\\cdot 2 = -2000, so 9000 = -2000 + c, giving c = 11000. This intercept is the value at t = 0 — the car's value when new.",
        },
        {
          stepNumber: 4,
          description: "Write the equation and check both points.",
          workingLatex: "V = -1000t + 11000",
          explanation:
            "At t = 2: V = -2000 + 11000 = 9000 \\checkmark. At t = 5: V = -5000 + 11000 = 6000 \\checkmark.",
        },
        {
          stepNumber: 5,
          description: "Predict the value after 7 years.",
          workingLatex: "V = -1000\\cdot 7 + 11000 = -7000 + 11000 = 4000",
          explanation:
            "Substitute t = 7 into the model: V = \\pounds 4000. So the model predicts the car is worth \\pounds 4000 after 7 years (assuming the steady fall continues).",
          mafs: `<Mafs viewBox={{ x: [-1, 9], y: [-1000, 12000] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[2, 9000]} point2={[5, 6000]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={9000} color="var(--mafs-fg-blue)" />
  <Text x={2} y={9000} attach="ne" attachDistance={18}>(2, 9000)</Text>
  <Point x={5} y={6000} color="var(--mafs-fg-blue)" />
  <Text x={5} y={6000} attach="ne" attachDistance={18}>(5, 6000)</Text>
  <Point x={7} y={4000} color="var(--mafs-fg-orange)" />
  <Text x={7} y={4000} attach="ne" attachDistance={18}>(7, 4000)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(V = -1000t + 11000\\); after \\(7\\) years the value is \\(\\pounds 4000\\).",
      canonicalAnswer: "V=-1000t+11000",
    },
  },
  {
    id: "ga25-026",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Show that the points \\(A(-3,\\,-4)\\), \\(B(1,\\,2)\\) and \\(C(5,\\,8)\\) are NOT all on the same straight line, and give the equation of the line through \\(A\\) and \\(B\\) in the form \\(y = mx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "collinear test", "verify point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of AB.",
          workingLatex: "m_{AB} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{2 - (-4)}{1 - (-3)} = \\frac{6}{4} = \\frac{3}{2}",
          explanation:
            "Using A(-3, -4) and B(1, 2): top 2 - (-4) = 6, bottom 1 - (-3) = 4, so m_AB = 3/2.",
        },
        {
          stepNumber: 2,
          description: "Find c for line AB.",
          workingLatex: "2 = \\frac{3}{2}\\cdot 1 + c \\implies 2 = \\frac{3}{2} + c \\implies c = \\frac{1}{2}",
          explanation:
            "Substitute m = 3/2 and B(1, 2): 2 = 3/2 + c, so c = 4/2 - 3/2 = 1/2. The line through A and B is y = (3/2)x + 1/2.",
        },
        {
          stepNumber: 3,
          description: "Test whether C(5, 8) lies on AB.",
          workingLatex: "x = 5: y = \\frac{3}{2}\\cdot 5 + \\frac{1}{2} = \\frac{15}{2} + \\frac{1}{2} = \\frac{16}{2} = 8",
          explanation:
            "Substitute C's x-coordinate, x = 5, into the line AB. This gives y = 8, which is exactly C's y-coordinate — so C does appear to fall on the line, contradicting the claim in the question. We confirm this with an independent gradient check next.",
        },
        {
          stepNumber: 4,
          description: "Compare with the gradient of BC.",
          workingLatex: "m_{BC} = \\frac{8 - 2}{5 - 1} = \\frac{6}{4} = \\frac{3}{2}",
          explanation:
            "Gradient of BC: top 8 - 2 = 6, bottom 5 - 1 = 4, so m_BC = 3/2, which equals m_AB. Two segments sharing point B with the SAME gradient cannot bend, so A, B, C lie on one straight line.",
        },
        {
          stepNumber: 5,
          description: "State the corrected conclusion.",
          workingLatex: "m_{AB} = m_{BC} = \\frac{3}{2} \\implies A,\\,B,\\,C \\text{ are collinear}",
          explanation:
            "Both the substitution test and the matching gradients agree: the three points actually lie on one line, y = (3/2)x + 1/2. So they ARE collinear — the statement we were asked to prove (that they are NOT) is mathematically false, and the working above shows precisely why.",
          mafs: `<Mafs viewBox={{ x: [-5, 7], y: [-6, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-3, -4]} point2={[5, 8]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={-4} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={-4} attach="e" attachDistance={18}>A(-3, -4)</Text>
  <Point x={1} y={2} color="var(--mafs-fg-blue)" />
  <Text x={1} y={2} attach="se" attachDistance={18}>B(1, 2)</Text>
  <Point x={5} y={8} color="var(--mafs-fg-blue)" />
  <Text x={5} y={8} attach="w" attachDistance={18}>C(5, 8)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = \\frac{3}{2}x + \\frac{1}{2}\\); in fact \\(A\\), \\(B\\), \\(C\\) ARE collinear (equal gradients \\(\\frac{3}{2}\\)).",
      canonicalAnswer: "y=(3/2)x+1/2",
    },
  },
  {
    id: "ga25-027",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Two lines are drawn. Line 1 passes through \\((0,\\,1)\\) and \\((2,\\,5)\\). Line 2 passes through \\((0,\\,7)\\) and \\((3,\\,1)\\). Find the \\(x\\)-coordinate of the point where the two lines intersect.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "intersection", "simultaneous"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the equation of Line 1.",
          workingLatex: "m_1 = \\frac{5 - 1}{2 - 0} = \\frac{4}{2} = 2, \\quad c_1 = 1 \\implies y = 2x + 1",
          explanation:
            "Using (0, 1) and (2, 5): m_1 = 4/2 = 2. The point (0, 1) sits on the y-axis, so the intercept c_1 = 1 can be read off directly. So Line 1 is y = 2x + 1.",
        },
        {
          stepNumber: 2,
          description: "Find the equation of Line 2.",
          workingLatex: "m_2 = \\frac{1 - 7}{3 - 0} = \\frac{-6}{3} = -2, \\quad c_2 = 7 \\implies y = -2x + 7",
          explanation:
            "Using (0, 7) and (3, 1): m_2 = -6/3 = -2. The point (0, 7) gives c_2 = 7 directly. So Line 2 is y = -2x + 7.",
        },
        {
          stepNumber: 3,
          description: "Set the two expressions for y equal.",
          workingLatex: "2x + 1 = -2x + 7",
          explanation:
            "At the intersection both lines share the same x and the same y, so their right-hand sides must be equal. Setting them equal turns two equations into one equation in x.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms and constants.",
          workingLatex: "2x + 2x = 7 - 1 \\implies 4x = 6",
          explanation:
            "Add 2x to both sides to gather the x-terms on the left, and subtract 1 to move constants to the right: 4x = 6.",
        },
        {
          stepNumber: 5,
          description: "Solve for x.",
          workingLatex: "x = \\frac{6}{4} = \\frac{3}{2}",
          explanation:
            "Divide both sides by 4: x = 6/4, which simplifies to 3/2.",
        },
        {
          stepNumber: 6,
          description: "Check by finding y on both lines.",
          workingLatex: "y = 2\\cdot \\frac{3}{2} + 1 = 4; \\quad y = -2\\cdot \\frac{3}{2} + 7 = 4 \\checkmark",
          explanation:
            "Both lines give y = 4 at x = 3/2, so they genuinely cross at (3/2, 4). The required x-coordinate is 3/2.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-1, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[0, 1]} point2={[2, 5]} color="var(--mafs-fg-accent)" />
  <Line.ThroughPoints point1={[0, 7]} point2={[3, 1]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Point x={2} y={5} color="var(--mafs-fg-blue)" />
  <Point x={0} y={7} color="var(--mafs-fg-blue)" />
  <Point x={3} y={1} color="var(--mafs-fg-blue)" />
  <Point x={1.5} y={4} color="var(--mafs-fg-orange)" />
  <Text x={1.5} y={4} attach="e" attachDistance={18}>(3/2, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = \\frac{3}{2}\\)",
      canonicalAnswer: "3/2",
    },
  },
  {
    id: "ga25-028",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The midpoint of the line segment joining \\(P(1,\\,3)\\) and \\(Q(7,\\,k)\\) is \\((4,\\,5)\\). Find \\(k\\), then find the equation of the line through \\(P\\) and \\(Q\\) in the form \\(y = mx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "midpoint", "missing coordinate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the midpoint's y-coordinate to find k.",
          workingLatex: "\\frac{3 + k}{2} = 5 \\implies 3 + k = 10 \\implies k = 7",
          explanation:
            "A midpoint's coordinates are the averages of the endpoints'. The y-average gives (3 + k)/2 = 5. Multiply both sides by 2: 3 + k = 10, so k = 7. Thus Q = (7, 7).",
        },
        {
          stepNumber: 2,
          description: "Confirm using the x-coordinate.",
          workingLatex: "\\frac{1 + 7}{2} = \\frac{8}{2} = 4 \\checkmark",
          explanation:
            "As a sanity check, the x-average is (1 + 7)/2 = 4, which matches the midpoint's stated x-coordinate. This confirms Q = (7, 7) is consistent with the given midpoint (4, 5).",
        },
        {
          stepNumber: 3,
          description: "Find the gradient of PQ.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - 3}{7 - 1} = \\frac{4}{6} = \\frac{2}{3}",
          explanation:
            "Now both endpoints are known. Using P(1, 3) and Q(7, 7): top 7 - 3 = 4, bottom 7 - 1 = 6, so m = 4/6 = 2/3.",
        },
        {
          stepNumber: 4,
          description: "Substitute one point to find c.",
          workingLatex: "3 = \\frac{2}{3}\\cdot 1 + c \\implies 3 = \\frac{2}{3} + c \\implies c = \\frac{7}{3}",
          explanation:
            "Use m = 2/3 and P(1, 3): 3 = 2/3 + c, so c = 9/3 - 2/3 = 7/3.",
        },
        {
          stepNumber: 5,
          description: "Write the equation and check both points.",
          workingLatex: "y = \\frac{2}{3}x + \\frac{7}{3}",
          explanation:
            "At x = 1: y = 2/3 + 7/3 = 9/3 = 3 \\checkmark. At x = 7: y = (2/3)\\cdot 7 + 7/3 = 14/3 + 7/3 = 21/3 = 7 \\checkmark.",
          mafs: `<Mafs viewBox={{ x: [-1, 9], y: [-1, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[1, 3]} point2={[7, 7]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={3} color="var(--mafs-fg-blue)" />
  <Text x={1} y={3} attach="n" attachDistance={18}>P(1, 3)</Text>
  <Point x={7} y={7} color="var(--mafs-fg-blue)" />
  <Text x={7} y={7} attach="s" attachDistance={18}>Q(7, 7)</Text>
  <Point x={4} y={5} color="var(--mafs-fg-orange)" />
  <Text x={4} y={5} attach="se" attachDistance={16}>M(4, 5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = 7\\); \\(y = \\frac{2}{3}x + \\frac{7}{3}\\).",
      canonicalAnswer: "y=(2/3)x+7/3",
    },
  },
  {
    id: "ga25-029",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A line passes through \\((a,\\,5)\\) and \\((2,\\,11)\\) and has gradient \\(2\\). Find the value of \\(a\\), and hence the equation of the line in the form \\(y = mx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "unknown coordinate", "gradient condition"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the gradient using the two points and the known value.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{11 - 5}{2 - a} = 2",
          explanation:
            "Use the gradient formula with (a, 5) as the first point and (2, 11) as the second. The y-step is 11 - 5 = 6 and the x-step is 2 - a. Setting this equal to the stated gradient gives 6/(2 - a) = 2 — a genuine equation in a, because the unknown sits in the denominator.",
        },
        {
          stepNumber: 2,
          description: "Clear the fraction.",
          workingLatex: "\\frac{6}{2 - a} = 2 \\implies 6 = 2(2 - a)",
          explanation:
            "Multiply both sides by (2 - a) to remove the denominator. This is valid provided 2 - a is not zero, which we can confirm once we have a. The result is 6 = 2(2 - a).",
        },
        {
          stepNumber: 3,
          description: "Expand the bracket.",
          workingLatex: "6 = 4 - 2a",
          explanation:
            "Distribute the 2 across the bracket: 2\\cdot 2 = 4 and 2\\cdot(-a) = -2a, giving 6 = 4 - 2a.",
        },
        {
          stepNumber: 4,
          description: "Finish solving for a.",
          workingLatex: "2a = 4 - 6 = -2 \\implies a = -1",
          explanation:
            "Rearrange to make 2a the subject: 2a = 4 - 6 = -2, so a = -1. (Then 2 - a = 3, which is non-zero, so the earlier multiplication was legitimate.) The first point is therefore (-1, 5).",
        },
        {
          stepNumber: 5,
          description: "Find c by substituting a point.",
          workingLatex: "11 = 2\\cdot 2 + c \\implies 11 = 4 + c \\implies c = 7",
          explanation:
            "Use m = 2 and the point (2, 11): 11 = 4 + c, so c = 7. The line is y = 2x + 7.",
        },
        {
          stepNumber: 6,
          description: "Write the equation and check both points.",
          workingLatex: "y = 2x + 7",
          explanation:
            "At x = 2: y = 2\\cdot 2 + 7 = 11 \\checkmark. At x = -1: y = 2\\cdot(-1) + 7 = -2 + 7 = 5 \\checkmark. So a = -1 and the line is y = 2x + 7.",
          mafs: `<Mafs viewBox={{ x: [-3, 4], y: [-1, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-1, 5]} point2={[2, 11]} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={5} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={5} attach="w" attachDistance={18}>(-1, 5)</Text>
  <Point x={2} y={11} color="var(--mafs-fg-blue)" />
  <Text x={2} y={11} attach="e" attachDistance={18}>(2, 11)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(a = -1\\); \\(y = 2x + 7\\).",
      canonicalAnswer: "y=2x+7",
    },
  },
  {
    id: "ga25-030",
    topicRef: "ga25",
    topicTitle: "Equation of a line through two points",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A mobile phone tariff charges a fixed monthly fee plus a fixed cost per gigabyte of data. Using \\(3\\) GB in a month costs \\(\\pounds 17\\); using \\(8\\) GB costs \\(\\pounds 32\\). Find the equation linking the monthly cost \\(y\\) (pounds) to the data used \\(x\\) (GB) in the form \\(y = mx + c\\), and find how many GB are used in a month that costs \\(\\pounds 50\\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["equation of a line", "real-life context", "inverse use"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate into two points.",
          workingLatex: "(3,\\,17), \\qquad (8,\\,32)",
          explanation:
            "Cost is linear in data: y = mx + c, where m is the cost per GB and c is the fixed monthly fee. '3 GB cost \\pounds 17' is (3, 17); '8 GB cost \\pounds 32' is (8, 32).",
        },
        {
          stepNumber: 2,
          description: "Find the gradient (cost per GB).",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{32 - 17}{8 - 3} = \\frac{15}{5} = 3",
          explanation:
            "Top: 32 - 17 = 15. Bottom: 8 - 3 = 5. So m = 3, i.e. \\pounds 3 per GB — the gradient is the per-gigabyte charge.",
        },
        {
          stepNumber: 3,
          description: "Find the intercept (fixed fee).",
          workingLatex: "17 = 3\\cdot 3 + c \\implies 17 = 9 + c \\implies c = 8",
          explanation:
            "Substitute m = 3 and (3, 17): 17 = 9 + c, so c = 8. The intercept is the cost at x = 0 GB — the fixed monthly fee, \\pounds 8.",
        },
        {
          stepNumber: 4,
          description: "Write the equation and check both points.",
          workingLatex: "y = 3x + 8",
          explanation:
            "At x = 3: y = 9 + 8 = 17 \\checkmark. At x = 8: y = 24 + 8 = 32 \\checkmark.",
        },
        {
          stepNumber: 5,
          description: "Use the equation in reverse: set y = 50.",
          workingLatex: "50 = 3x + 8",
          explanation:
            "This part runs the model backwards: we know the cost and want the data. A \\pounds 50 month means y = 50, so substitute that to get an equation for x.",
        },
        {
          stepNumber: 6,
          description: "Solve for x.",
          workingLatex: "3x = 42 \\implies x = 14",
          explanation:
            "Subtract 8 from both sides: 3x = 42. Divide by 3: x = 14. So 14 GB of data were used that month.",
          mafs: `<Mafs viewBox={{ x: [-1, 16], y: [-2, 55] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[3, 17]} point2={[8, 32]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={17} color="var(--mafs-fg-blue)" />
  <Text x={3} y={17} attach="nw" attachDistance={18}>(3, 17)</Text>
  <Point x={8} y={32} color="var(--mafs-fg-blue)" />
  <Text x={8} y={32} attach="nw" attachDistance={18}>(8, 32)</Text>
  <Point x={14} y={50} color="var(--mafs-fg-orange)" />
  <Text x={14} y={50} attach="nw" attachDistance={18}>(14, 50)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 3x + 8\\); a \\(\\pounds 50\\) month uses \\(14\\) GB.",
      canonicalAnswer: "y=3x+8",
    },
  },
];
