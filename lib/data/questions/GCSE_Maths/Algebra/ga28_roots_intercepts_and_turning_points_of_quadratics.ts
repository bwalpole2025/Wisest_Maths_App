/**
 * Topic: Roots, intercepts and turning points of quadratics
 * Ref: ga28  (DfE A11)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: identifying the key features of the graph y = ax^2 + bx + c. The
 *   features used throughout — ROOTS / x-intercepts are where y = 0 (set the
 *   quadratic to 0 and solve, usually by factorising); the Y-INTERCEPT is where
 *   x = 0, so it is simply the constant term c; the TURNING POINT (vertex) is
 *   the minimum of an upward parabola (a > 0) or maximum of a downward one
 *   (a < 0). The vertex can be found two equivalent ways — by COMPLETING THE
 *   SQUARE, y = a(x - p)^2 + q giving vertex (p, q); or via the LINE OF SYMMETRY
 *   x = -b/(2a), then substituting back for the y-coordinate. The DISCRIMINANT
 *   b^2 - 4ac fixes the NUMBER OF REAL ROOTS (>0 two, =0 one repeated, <0 none).
 *   Clusters:
 *   (1) roots by factorising;
 *   (2) the y-intercept;
 *   (3) turning point by completing the square;
 *   (4) turning point via the line of symmetry x = -b/(2a);
 *   (5) nature / coordinates of the vertex (min or max value, range);
 *   (6) sketching from roots + y-intercept (key coordinates);
 *   (7) discriminant ↔ number of roots.
 *   Solutions stress: roots come from y = 0, intercept from x = 0; the sign of a
 *   tells you minimum vs maximum; completing the square reads the vertex off
 *   directly; the axis of symmetry sits exactly halfway between the roots; and a
 *   final CHECK by substituting roots / the vertex back in.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga28-001 .. ga28-004  (4)   cleanest single-feature items
 *   - Standard:   ga28-005 .. ga28-018  (14)
 *   - Challenge:  ga28-019 .. ga28-030  (12)
 * Id range: ga28-001 .. ga28-030.
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
    id: "ga28-001",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Find the roots of \\(y = (x - 2)(x - 5)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["roots of quadratics", "factorised form", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0, because the roots are where the curve crosses the x-axis.",
          workingLatex: "(x - 2)(x - 5) = 0",
          explanation:
            "The roots (also called the x-intercepts) are the x-values where y = 0. The expression is already factorised, so set the whole product equal to 0.",
        },
        {
          stepNumber: 2,
          description: "Use the fact that a product is zero only if a factor is zero.",
          workingLatex: "x - 2 = 0 \\;\\; \\text{or} \\;\\; x - 5 = 0 \\;\\Rightarrow\\; x = 2 \\;\\text{or}\\; x = 5",
          explanation:
            "If two numbers multiply to give 0, at least one of them must be 0. So either x - 2 = 0, giving x = 2, or x - 5 = 0, giving x = 5.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-3, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 2)*(x - 5)} domain={[0.5, 6.5]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={0} color="var(--mafs-fg-blue)" />
  <Text x={2} y={0} attach="n" attachDistance={18}>(2, 0)</Text>
  <Point x={5} y={0} color="var(--mafs-fg-blue)" />
  <Text x={5} y={0} attach="n" attachDistance={18}>(5, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 2\\) or \\(x = 5\\)",
      canonicalAnswer: "{2,5}",
    },
  },
  {
    id: "ga28-002",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "State the \\(y\\)-intercept of the curve \\(y = x^2 - 3x + 7\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["y-intercept of quadratics", "y-intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The y-intercept is the value of y when x = 0.",
          workingLatex: "x = 0: \\; y = (0)^2 - 3(0) + 7",
          explanation:
            "A curve crosses the y-axis where x = 0. Substitute x = 0 into the equation to find that y-value.",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "y = 0 - 0 + 7 = 7",
          explanation:
            "The squared and linear terms both vanish, leaving only the constant term. So the y-intercept is the constant term, 7, at the point (0, 7).",
          mafs: `<Mafs viewBox={{ x: [-3, 5], y: [-1, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 3*x + 7} domain={[-1.5, 4.5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={7} color="var(--mafs-fg-green)" />
  <Text x={0} y={7} attach="w" attachDistance={18}>(0, 7)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(7\\)",
      canonicalAnswer: "7",
    },
  },
  {
    id: "ga28-003",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The quadratic \\(y = (x - 3)^2 + 4\\) is written in completed-square form. State the coordinates of its turning point.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "completing the square", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare with the standard completed-square form y = (x - p)^2 + q.",
          workingLatex: "y = (x - p)^2 + q, \\quad p = 3, \\; q = 4",
          explanation:
            "In completed-square form the turning point is read off directly: the vertex is at (p, q). Match the brackets: (x - 3)^2 gives p = 3, and the +4 outside gives q = 4.",
        },
        {
          stepNumber: 2,
          description: "State the turning point.",
          workingLatex: "(p,\\, q) = (3,\\, 4)",
          explanation:
            "The squared bracket is smallest (zero) when x = 3, and there y takes its least value 4. Since the x^2 coefficient is positive the curve opens upward, so (3, 4) is a minimum point.",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [2, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 3)*(x - 3) + 4} domain={[0.5, 5.5]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={4} color="var(--mafs-fg-orange)" />
  <Text x={3} y={4} attach="s" attachDistance={18}>min (3, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,4)\\)",
      canonicalAnswer: "(3,4)",
    },
  },
  {
    id: "ga28-004",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "Find the roots of \\(y = x^2 - 9\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["roots of quadratics", "difference of two squares", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0 and solve.",
          workingLatex: "x^2 - 9 = 0 \\;\\Rightarrow\\; x^2 = 9",
          explanation:
            "Roots occur where y = 0. Rearranging gives x^2 = 9.",
        },
        {
          stepNumber: 2,
          description: "Square root both sides, keeping both signs.",
          workingLatex: "x = \\pm \\sqrt{9} = \\pm 3 \\;\\Rightarrow\\; x = 3 \\;\\text{or}\\; x = -3",
          explanation:
            "Taking the square root gives two values: a positive and a negative root, because both 3^2 and (-3)^2 equal 9. The two roots are x = 3 and x = -3.",
          mafs: `<Mafs viewBox={{ x: [-5, 5], y: [-11, 5] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 9} domain={[-4, 4]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={0} attach="n" attachDistance={18}>(-3, 0)</Text>
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="n" attachDistance={18}>(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 3\\) or \\(x = -3\\)",
      canonicalAnswer: "{-3,3}",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga28-005",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Find the roots of \\(y = x^2 - 7x + 12\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["roots of quadratics", "factorising", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0 to find the roots.",
          workingLatex: "x^2 - 7x + 12 = 0",
          explanation:
            "The roots are the x-intercepts, where y = 0. Set the quadratic equal to zero so it can be solved by factorising.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers that multiply to +12 and add to -7.",
          workingLatex: "(-3) \\cdot (-4) = 12, \\quad (-3) + (-4) = -7",
          explanation:
            "For x^2 + bx + c you need two numbers whose product is the constant c = 12 and whose sum is the coefficient b = -7. Both must be negative: -3 and -4 work.",
        },
        {
          stepNumber: 3,
          description: "Factorise and solve each factor.",
          workingLatex: "(x - 3)(x - 4) = 0 \\;\\Rightarrow\\; x = 3 \\;\\text{or}\\; x = 4",
          explanation:
            "Write the brackets using those numbers. A product is zero only when a factor is zero, so x = 3 or x = 4. Check: 3 + 4 = 7 and 3 \\cdot 4 = 12, matching the equation.",
          mafs: `<Mafs viewBox={{ x: [1, 6], y: [-2, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 7*x + 12} domain={[1.5, 5.5]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="n" attachDistance={18}>(3, 0)</Text>
  <Point x={4} y={0} color="var(--mafs-fg-blue)" />
  <Text x={4} y={0} attach="n" attachDistance={18}>(4, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 3\\) or \\(x = 4\\)",
      canonicalAnswer: "{3,4}",
    },
  },
  {
    id: "ga28-006",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Find the roots of \\(y = x^2 + 2x - 15\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["roots of quadratics", "factorising", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0.",
          workingLatex: "x^2 + 2x - 15 = 0",
          explanation:
            "Roots are where y = 0, so set the quadratic to zero ready to factorise.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product -15 and sum +2.",
          workingLatex: "(+5) \\cdot (-3) = -15, \\quad (+5) + (-3) = +2",
          explanation:
            "The constant is negative, so the two numbers have opposite signs. +5 and -3 multiply to -15 and add to +2.",
        },
        {
          stepNumber: 3,
          description: "Factorise and solve.",
          workingLatex: "(x + 5)(x - 3) = 0 \\;\\Rightarrow\\; x = -5 \\;\\text{or}\\; x = 3",
          explanation:
            "Setting each factor to zero gives x = -5 (from x + 5 = 0) and x = 3 (from x - 3 = 0).",
          mafs: `<Mafs viewBox={{ x: [-7, 5], y: [-18, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 2*x - 15} domain={[-6, 4]} color="var(--mafs-fg-accent)" />
  <Point x={-5} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-5} y={0} attach="n" attachDistance={18}>(-5, 0)</Text>
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="n" attachDistance={18}>(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = -5\\) or \\(x = 3\\)",
      canonicalAnswer: "{-5,3}",
    },
  },
  {
    id: "ga28-007",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the coordinates of both points where \\(y = x^2 - 5x + 6\\) crosses the \\(x\\)-axis, and the point where it crosses the \\(y\\)-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["roots of quadratics", "y-intercept of quadratics", "intercepts", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "x-axis crossings: set y = 0 and factorise.",
          workingLatex: "x^2 - 5x + 6 = 0 \\;\\Rightarrow\\; (x - 2)(x - 3) = 0",
          explanation:
            "The curve crosses the x-axis where y = 0. Two numbers multiplying to +6 and adding to -5 are -2 and -3, giving these factors.",
        },
        {
          stepNumber: 2,
          description: "Solve for the x-intercepts.",
          workingLatex: "x = 2 \\;\\text{or}\\; x = 3 \\;\\Rightarrow\\; (2,\\,0) \\text{ and } (3,\\,0)",
          explanation:
            "Each factor gives a root. On the x-axis the y-coordinate is 0, so the crossing points are (2, 0) and (3, 0).",
        },
        {
          stepNumber: 3,
          description: "y-axis crossing: set x = 0.",
          workingLatex: "x = 0: \\; y = 0 - 0 + 6 = 6 \\;\\Rightarrow\\; (0,\\,6)",
          explanation:
            "The curve crosses the y-axis where x = 0; this is just the constant term, 6. So the y-intercept is (0, 6).",
          mafs: `<Mafs viewBox={{ x: [-2, 5], y: [-2, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 5*x + 6} domain={[-0.5, 4.5]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={0} color="var(--mafs-fg-blue)" />
  <Text x={2} y={0} attach="s" attachDistance={18}>(2, 0)</Text>
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="s" attachDistance={18}>(3, 0)</Text>
  <Point x={0} y={6} color="var(--mafs-fg-green)" />
  <Text x={0} y={6} attach="e" attachDistance={18}>(0, 6)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((2,\\,0)\\), \\((3,\\,0)\\) and \\((0,\\,6)\\)",
      canonicalAnswer: "(2,0),(3,0),(0,6)",
    },
  },
  {
    id: "ga28-008",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the line of symmetry of \\(y = x^2 - 6x + 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "line of symmetry", "axis of symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the coefficients a and b.",
          workingLatex: "a = 1, \\quad b = -6",
          explanation:
            "Compare with y = ax^2 + bx + c. Here a = 1 (coefficient of x^2) and b = -6 (coefficient of x).",
        },
        {
          stepNumber: 2,
          description: "Use the axis-of-symmetry formula x = -b/(2a).",
          workingLatex: "x = -\\frac{b}{2a} = -\\frac{-6}{2 \\cdot 1} = \\frac{6}{2}",
          explanation:
            "A parabola is symmetric about a vertical line through its vertex, located at x = -b/(2a). Substitute b = -6 and a = 1, being careful that -(-6) = +6.",
        },
        {
          stepNumber: 3,
          description: "Simplify to give the line of symmetry.",
          workingLatex: "x = 3",
          explanation:
            "The line of symmetry is the vertical line x = 3. The turning point lies on this line.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-9, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 6*x + 1} domain={[0, 6]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[3, -9]} point2={[3, 4]} color="var(--mafs-fg-orange)" />
  <Point x={3} y={-8} color="var(--mafs-fg-orange)" />
  <Text x={3} y={-8} attach="e" attachDistance={18}>x = 3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 3\\)",
      canonicalAnswer: "x=3",
    },
  },
  {
    id: "ga28-009",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "By completing the square, find the coordinates of the turning point of \\(y = x^2 + 8x + 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "completing the square", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x to start the square.",
          workingLatex: "x^2 + 8x = (x + 4)^2 - 16",
          explanation:
            "To complete the square, halve the coefficient of x (8 ÷ 2 = 4) to form (x + 4)^2. But (x + 4)^2 = x^2 + 8x + 16, so we must subtract 16 to keep the value unchanged.",
        },
        {
          stepNumber: 2,
          description: "Put back the constant term and tidy up.",
          workingLatex: "y = (x + 4)^2 - 16 + 3 = (x + 4)^2 - 13",
          explanation:
            "Bring down the +3 from the original expression and combine the constants: -16 + 3 = -13. The quadratic is now in completed-square form.",
        },
        {
          stepNumber: 3,
          description: "Read off the turning point.",
          workingLatex: "(x + 4)^2 \\ge 0 \\;\\Rightarrow\\; \\text{vertex at } (-4,\\, -13)",
          explanation:
            "A square is never negative, so y is smallest when (x + 4)^2 = 0, i.e. x = -4, giving y = -13. The minimum turning point is (-4, -13).",
          mafs: `<Mafs viewBox={{ x: [-9, 1], y: [-15, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 8*x + 3} domain={[-8, 0]} color="var(--mafs-fg-accent)" />
  <Point x={-4} y={-13} color="var(--mafs-fg-orange)" />
  <Text x={-4} y={-13} attach="s" attachDistance={18}>min (-4, -13)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((-4,\\,-13)\\)",
      canonicalAnswer: "(-4,-13)",
    },
  },
  {
    id: "ga28-010",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "By completing the square, find the coordinates of the turning point of \\(y = x^2 - 10x + 30\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "completing the square", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square on the x-terms.",
          workingLatex: "x^2 - 10x = (x - 5)^2 - 25",
          explanation:
            "Halve the coefficient of x: -10 ÷ 2 = -5, giving (x - 5)^2. Since (x - 5)^2 = x^2 - 10x + 25, subtract 25 to compensate.",
        },
        {
          stepNumber: 2,
          description: "Include the +30 and simplify.",
          workingLatex: "y = (x - 5)^2 - 25 + 30 = (x - 5)^2 + 5",
          explanation:
            "Combine the constants: -25 + 30 = 5. The completed-square form is (x - 5)^2 + 5.",
        },
        {
          stepNumber: 3,
          description: "Read off the vertex.",
          workingLatex: "\\text{minimum at } (5,\\, 5)",
          explanation:
            "The bracket is zero when x = 5, and then y = 5, its least value. So the turning point (a minimum, since a > 0) is at (5, 5).",
          mafs: `<Mafs viewBox={{ x: [1, 9], y: [3, 16] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 10*x + 30} domain={[2, 8]} color="var(--mafs-fg-accent)" />
  <Point x={5} y={5} color="var(--mafs-fg-orange)" />
  <Text x={5} y={5} attach="s" attachDistance={18}>min (5, 5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((5,\\,5)\\)",
      canonicalAnswer: "(5,5)",
    },
  },
  {
    id: "ga28-011",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the minimum value of \\(y = x^2 - 4x + 11\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "completing the square", "minimum value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 - 4x = (x - 2)^2 - 4",
          explanation:
            "Halve -4 to get -2, forming (x - 2)^2. Subtract 4 because (x - 2)^2 carries an extra +4.",
        },
        {
          stepNumber: 2,
          description: "Add the constant term.",
          workingLatex: "y = (x - 2)^2 - 4 + 11 = (x - 2)^2 + 7",
          explanation:
            "Combine -4 + 11 = 7 to reach completed-square form.",
        },
        {
          stepNumber: 3,
          description: "Read off the minimum value of y.",
          workingLatex: "(x - 2)^2 \\ge 0 \\;\\Rightarrow\\; y_{\\min} = 7",
          explanation:
            "The square term is at least 0, so the smallest y can be is the constant outside the bracket, 7 (attained at x = 2). The minimum value is 7.",
          mafs: `<Mafs viewBox={{ x: [-2, 6], y: [5, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 4*x + 11} domain={[-1, 5]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={7} color="var(--mafs-fg-orange)" />
  <Text x={2} y={7} attach="s" attachDistance={18}>min (2, 7)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(7\\)",
      canonicalAnswer: "7",
    },
  },
  {
    id: "ga28-012",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The curve \\(y = -x^2 + 6x - 5\\) has a maximum point. Find the coordinates of this maximum point using the line of symmetry.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "line of symmetry", "maximum point", "negative leading coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a and b, and note the curve opens downward.",
          workingLatex: "a = -1, \\quad b = 6",
          explanation:
            "Here a = -1 and b = 6. Because a < 0 the parabola opens downward, so its turning point is a maximum.",
        },
        {
          stepNumber: 2,
          description: "Find the x-coordinate from x = -b/(2a).",
          workingLatex: "x = -\\frac{6}{2 \\cdot (-1)} = -\\frac{6}{-2} = 3",
          explanation:
            "The maximum lies on the line of symmetry x = -b/(2a). With b = 6 and a = -1, the denominator is -2, so x = -6/(-2) = 3.",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 3 to find the y-coordinate.",
          workingLatex: "y = -(3)^2 + 6(3) - 5 = -9 + 18 - 5 = 4",
          explanation:
            "Put x = 3 back into the equation: -9 + 18 - 5 = 4. So the maximum point is (3, 4).",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [-2, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -x*x + 6*x - 5} domain={[0.5, 5.5]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={4} color="var(--mafs-fg-orange)" />
  <Text x={3} y={4} attach="n" attachDistance={18}>max (3, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,4)\\)",
      canonicalAnswer: "(3,4)",
    },
  },
  {
    id: "ga28-013",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "How many real roots does \\(y = x^2 + 4x + 7\\) have? Use the discriminant to justify your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["discriminant", "number of roots", "discriminant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify a, b, c.",
          workingLatex: "a = 1, \\quad b = 4, \\quad c = 7",
          explanation:
            "Compare with ax^2 + bx + c. The number of real roots is decided by the discriminant b^2 - 4ac.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the discriminant.",
          workingLatex: "b^2 - 4ac = 4^2 - 4 \\cdot 1 \\cdot 7 = 16 - 28 = -12",
          explanation:
            "Substitute: 16 - 28 = -12. Watch the order of operations — square b first, then subtract 4ac.",
        },
        {
          stepNumber: 3,
          description: "Interpret the sign of the discriminant.",
          workingLatex: "b^2 - 4ac = -12 < 0 \\;\\Rightarrow\\; \\text{no real roots}",
          explanation:
            "A negative discriminant means there is no real square root, so the formula gives no real solutions: the curve does not cross the x-axis. There are 0 real roots.",
          mafs: `<Mafs viewBox={{ x: [-6, 2], y: [-2, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 4*x + 7} domain={[-5, 1]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={3} color="var(--mafs-fg-orange)" />
  <Text x={-2} y={3} attach="s" attachDistance={18}>min (-2, 3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(0\\) real roots",
      canonicalAnswer: "0",
    },
  },
  {
    id: "ga28-014",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Show that \\(y = x^2 - 6x + 9\\) has exactly one (repeated) root, and state that root.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["discriminant", "repeated root", "factorising", "number of roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the discriminant.",
          workingLatex: "b^2 - 4ac = (-6)^2 - 4 \\cdot 1 \\cdot 9 = 36 - 36 = 0",
          explanation:
            "With a = 1, b = -6, c = 9 the discriminant is 36 - 36 = 0. A zero discriminant means exactly one repeated real root.",
        },
        {
          stepNumber: 2,
          description: "Factorise to find the repeated root.",
          workingLatex: "x^2 - 6x + 9 = (x - 3)^2 = 0",
          explanation:
            "The expression is a perfect square: two numbers multiplying to 9 and adding to -6 are -3 and -3, giving (x - 3)^2. The equal factors confirm the repeated root.",
        },
        {
          stepNumber: 3,
          description: "Solve for the root.",
          workingLatex: "(x - 3)^2 = 0 \\;\\Rightarrow\\; x = 3",
          explanation:
            "Setting the bracket to zero gives x = 3, the single repeated root. Here the curve touches the x-axis at (3, 0) rather than crossing it.",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [-2, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 6*x + 9} domain={[0.5, 5.5]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="n" attachDistance={18}>(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "One repeated root, \\(x = 3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga28-015",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Find the roots of \\(y = 2x^2 - 7x + 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["roots of quadratics", "factorising", "leading coefficient", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0; factorise with a leading coefficient of 2.",
          workingLatex: "2x^2 - 7x + 3 = 0",
          explanation:
            "Roots occur where y = 0. Because the x^2 coefficient is 2, look for two numbers that multiply to a·c = 2 \\cdot 3 = 6 and add to b = -7.",
        },
        {
          stepNumber: 2,
          description: "Split the middle term using -6 and -1.",
          workingLatex: "2x^2 - 6x - x + 3 = 2x(x - 3) - 1(x - 3) = (2x - 1)(x - 3)",
          explanation:
            "-6 and -1 multiply to 6 and add to -7. Split -7x into -6x - x, then factorise in pairs: 2x(x - 3) - 1(x - 3) shares the bracket (x - 3), giving (2x - 1)(x - 3).",
        },
        {
          stepNumber: 3,
          description: "Solve each factor.",
          workingLatex: "2x - 1 = 0 \\Rightarrow x = \\frac{1}{2}, \\qquad x - 3 = 0 \\Rightarrow x = 3",
          explanation:
            "From 2x - 1 = 0 we get x = 1/2, and from x - 3 = 0 we get x = 3. So the roots are x = 1/2 and x = 3.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-5, 5] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x*x - 7*x + 3} domain={[-0.2, 3.6]} color="var(--mafs-fg-accent)" />
  <Point x={0.5} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0.5} y={0} attach="n" attachDistance={18}>(1/2, 0)</Text>
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="n" attachDistance={18}>(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = \\dfrac{1}{2}\\) or \\(x = 3\\)",
      canonicalAnswer: "{1/2,3}",
    },
  },
  {
    id: "ga28-016",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A quadratic curve crosses the \\(x\\)-axis at \\((-1,\\,0)\\) and \\((5,\\,0)\\). Find the equation of its line of symmetry.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "line of symmetry", "symmetry from roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall that the line of symmetry sits halfway between the roots.",
          workingLatex: "\\text{roots at } x = -1 \\text{ and } x = 5",
          explanation:
            "A parabola is symmetric, so its axis of symmetry passes exactly midway between the two x-intercepts. We only need the average of the root x-values.",
        },
        {
          stepNumber: 2,
          description: "Average the two root x-coordinates.",
          workingLatex: "x = \\frac{-1 + 5}{2} = \\frac{4}{2} = 2",
          explanation:
            "Add the roots and divide by 2: (-1 + 5)/2 = 2. This is the x-coordinate of the vertex.",
        },
        {
          stepNumber: 3,
          description: "State the line of symmetry.",
          workingLatex: "x = 2",
          explanation:
            "The line of symmetry is the vertical line x = 2, which passes through the turning point.",
          mafs: `<Mafs viewBox={{ x: [-3, 7], y: [-11, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x + 1)*(x - 5)} domain={[-2, 6]} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={0} attach="n" attachDistance={18}>(-1, 0)</Text>
  <Point x={5} y={0} color="var(--mafs-fg-blue)" />
  <Text x={5} y={0} attach="n" attachDistance={18}>(5, 0)</Text>
  <Line.Segment point1={[2, -11]} point2={[2, 4]} color="var(--mafs-fg-orange)" />
  <Text x={2} y={2} attach="e" attachDistance={14}>x = 2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 2\\)",
      canonicalAnswer: "x=2",
    },
  },
  {
    id: "ga28-017",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the turning point of \\(y = x^2 - 2x - 8\\) by first finding its line of symmetry.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "line of symmetry", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the line of symmetry from x = -b/(2a).",
          workingLatex: "a = 1, \\; b = -2 \\;\\Rightarrow\\; x = -\\frac{-2}{2 \\cdot 1} = 1",
          explanation:
            "The turning point lies on the axis of symmetry x = -b/(2a). With a = 1 and b = -2, this gives x = 2/2 = 1.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 1 to find the y-coordinate.",
          workingLatex: "y = (1)^2 - 2(1) - 8 = 1 - 2 - 8 = -9",
          explanation:
            "Put x = 1 into the original equation: 1 - 2 - 8 = -9. This is the y-value at the vertex.",
        },
        {
          stepNumber: 3,
          description: "State the turning point.",
          workingLatex: "(1,\\, -9)",
          explanation:
            "The turning point is (1, -9). Since a > 0 the curve opens upward, so this is a minimum.",
          mafs: `<Mafs viewBox={{ x: [-4, 6], y: [-11, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 2*x - 8} domain={[-3, 5]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={-9} color="var(--mafs-fg-orange)" />
  <Text x={1} y={-9} attach="s" attachDistance={18}>min (1, -9)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((1,\\,-9)\\)",
      canonicalAnswer: "(1,-9)",
    },
  },
  {
    id: "ga28-018",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "State the y-intercept of \\(y = (x - 4)(x + 6)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["y-intercept of quadratics", "factorised form", "y-intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The y-intercept is the value of y when x = 0.",
          workingLatex: "x = 0: \\; y = (0 - 4)(0 + 6)",
          explanation:
            "Substitute x = 0 into the factorised form — there is no need to expand the whole bracket first.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the product.",
          workingLatex: "y = (-4)(6) = -24",
          explanation:
            "Multiply the two bracket values: (-4) × 6 = -24. A negative times a positive is negative.",
        },
        {
          stepNumber: 3,
          description: "State the intercept.",
          workingLatex: "(0,\\, -24)",
          explanation:
            "So the curve crosses the y-axis at (0, -24). (Expanding gives x^2 + 2x - 24, whose constant term -24 confirms this.)",
          mafs: `<Mafs viewBox={{ x: [-8, 6], y: [-28, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 4)*(x + 6)} domain={[-7, 5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-24} color="var(--mafs-fg-green)" />
  <Text x={0} y={-24} attach="e" attachDistance={18}>(0, -24)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((0,\\,-24)\\)",
      canonicalAnswer: "(0,-24)",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga28-019",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\(y = x^2 - 4x - 12\\), find the coordinates of the two \\(x\\)-intercepts, the \\(y\\)-intercept, and the turning point.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["roots of quadratics", "y-intercept of quadratics", "turning point of quadratics", "sketching", "key coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the x-intercepts by setting y = 0 and factorising.",
          workingLatex: "x^2 - 4x - 12 = 0 \\;\\Rightarrow\\; (x - 6)(x + 2) = 0",
          explanation:
            "Two numbers multiplying to -12 and adding to -4 are -6 and +2. Setting the product to zero gives the roots.",
        },
        {
          stepNumber: 2,
          description: "Solve for the x-intercepts.",
          workingLatex: "x = 6 \\;\\text{or}\\; x = -2 \\;\\Rightarrow\\; (6,\\,0) \\text{ and } (-2,\\,0)",
          explanation:
            "Each factor gives a root, so the curve crosses the x-axis at (6, 0) and (-2, 0).",
        },
        {
          stepNumber: 3,
          description: "Find the y-intercept by setting x = 0.",
          workingLatex: "x = 0: \\; y = -12 \\;\\Rightarrow\\; (0,\\,-12)",
          explanation:
            "At x = 0, y is the constant term -12, so the y-intercept is (0, -12).",
        },
        {
          stepNumber: 4,
          description: "Find the line of symmetry (midway between the roots).",
          workingLatex: "x = \\frac{6 + (-2)}{2} = \\frac{4}{2} = 2",
          explanation:
            "The vertex lies halfway between the roots: average 6 and -2 to get x = 2. (Equivalently x = -b/(2a) = 4/2 = 2.)",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 2 to find the turning point.",
          workingLatex: "y = (2)^2 - 4(2) - 12 = 4 - 8 - 12 = -16 \\;\\Rightarrow\\; (2,\\,-16)",
          explanation:
            "Putting x = 2 into the equation gives y = -16. The turning point (a minimum) is (2, -16).",
          mafs: `<Mafs viewBox={{ x: [-4, 8], y: [-18, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 4*x - 12} domain={[-3, 7]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={0} attach="n" attachDistance={16}>(-2, 0)</Text>
  <Point x={6} y={0} color="var(--mafs-fg-blue)" />
  <Text x={6} y={0} attach="n" attachDistance={16}>(6, 0)</Text>
  <Point x={0} y={-12} color="var(--mafs-fg-green)" />
  <Text x={0} y={-12} attach="e" attachDistance={16}>(0, -12)</Text>
  <Point x={2} y={-16} color="var(--mafs-fg-orange)" />
  <Text x={2} y={-16} attach="s" attachDistance={16}>min (2, -16)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "x-intercepts \\((6,\\,0)\\), \\((-2,\\,0)\\); y-intercept \\((0,\\,-12)\\); turning point \\((2,\\,-16)\\)",
      canonicalAnswer: "(6,0),(-2,0),(0,-12),(2,-16)",
    },
  },
  {
    id: "ga28-020",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "By completing the square, find the turning point of \\(y = x^2 + 5x + 2\\), giving the coordinates as fractions.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "completing the square", "fractional vertex", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the odd coefficient of x.",
          workingLatex: "x^2 + 5x = \\left(x + \\frac{5}{2}\\right)^2 - \\frac{25}{4}",
          explanation:
            "Half of 5 is 5/2, giving (x + 5/2)^2. That bracket expands to x^2 + 5x + 25/4, so subtract 25/4 to keep the value the same.",
        },
        {
          stepNumber: 2,
          description: "Add the constant term.",
          workingLatex: "y = \\left(x + \\frac{5}{2}\\right)^2 - \\frac{25}{4} + 2",
          explanation:
            "Bring down the +2 from the original expression, ready to combine with -25/4.",
        },
        {
          stepNumber: 3,
          description: "Combine the constants over a common denominator.",
          workingLatex: "-\\frac{25}{4} + 2 = -\\frac{25}{4} + \\frac{8}{4} = -\\frac{17}{4}",
          explanation:
            "Write 2 as 8/4 so the fractions add directly: -25/4 + 8/4 = -17/4. So y = (x + 5/2)^2 - 17/4.",
        },
        {
          stepNumber: 4,
          description: "Read off the turning point.",
          workingLatex: "\\text{vertex at } \\left(-\\frac{5}{2},\\, -\\frac{17}{4}\\right)",
          explanation:
            "The bracket is zero when x = -5/2, where y reaches its minimum -17/4. The turning point is (-5/2, -17/4).",
          mafs: `<Mafs viewBox={{ x: [-6, 1], y: [-6, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 5*x + 2} domain={[-5.3, 0.3]} color="var(--mafs-fg-accent)" />
  <Point x={-2.5} y={-4.25} color="var(--mafs-fg-orange)" />
  <Text x={-2.5} y={-4.25} attach="s" attachDistance={18}>min (-5/2, -17/4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\left(-\\dfrac{5}{2},\\,-\\dfrac{17}{4}\\right)\\)",
      canonicalAnswer: "(-5/2,-17/4)",
    },
  },
  {
    id: "ga28-021",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "The curve \\(y = x^2 - 6x + 13\\) has a minimum point. By completing the square, find the range of possible values of \\(y\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "completing the square", "range", "minimum value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the square.",
          workingLatex: "x^2 - 6x = (x - 3)^2 - 9",
          explanation:
            "Halve -6 to get -3, forming (x - 3)^2; subtract 9 to undo the extra constant it introduces.",
        },
        {
          stepNumber: 2,
          description: "Add the constant term.",
          workingLatex: "y = (x - 3)^2 - 9 + 13 = (x - 3)^2 + 4",
          explanation:
            "Combine -9 + 13 = 4. The minimum y-value is therefore 4.",
        },
        {
          stepNumber: 3,
          description: "Use the fact that a square is never negative.",
          workingLatex: "(x - 3)^2 \\ge 0",
          explanation:
            "For every real x, the squared bracket is at least 0. Its smallest value, 0, occurs at x = 3.",
        },
        {
          stepNumber: 4,
          description: "Deduce the range of y.",
          workingLatex: "y = (x - 3)^2 + 4 \\ge 0 + 4 = 4",
          explanation:
            "Adding 4 to something that is at least 0 means y is at least 4. So y can equal 4 (at the minimum) and anything larger.",
        },
        {
          stepNumber: 5,
          description: "State the range.",
          workingLatex: "y \\ge 4",
          explanation:
            "The range of the curve is y ≥ 4; the curve never goes below its minimum value of 4.",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [2, 14] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 6*x + 13} domain={[0.5, 5.5]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={4} color="var(--mafs-fg-orange)" />
  <Text x={3} y={4} attach="s" attachDistance={18}>min (3, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y \\ge 4\\)",
      canonicalAnswer: "y>=4",
    },
  },
  {
    id: "ga28-022",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The equation \\(x^2 + kx + 9 = 0\\) has exactly one repeated root, and \\(k > 0\\). Find the value of \\(k\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["discriminant", "repeated root", "find unknown", "number of roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the condition for a repeated root.",
          workingLatex: "b^2 - 4ac = 0",
          explanation:
            "Exactly one repeated root means the discriminant is zero. Set b^2 - 4ac = 0 and solve for k.",
        },
        {
          stepNumber: 2,
          description: "Substitute a = 1, b = k, c = 9.",
          workingLatex: "k^2 - 4 \\cdot 1 \\cdot 9 = 0 \\;\\Rightarrow\\; k^2 - 36 = 0",
          explanation:
            "Here b = k, so b^2 = k^2, and 4ac = 36. The condition becomes k^2 - 36 = 0.",
        },
        {
          stepNumber: 3,
          description: "Solve for k.",
          workingLatex: "k^2 = 36 \\;\\Rightarrow\\; k = \\pm 6",
          explanation:
            "Taking the square root gives k = 6 or k = -6. Both make the discriminant zero.",
        },
        {
          stepNumber: 4,
          description: "Apply the condition k > 0.",
          workingLatex: "k > 0 \\;\\Rightarrow\\; k = 6",
          explanation:
            "Only the positive value is allowed, so k = 6. Check: x^2 + 6x + 9 = (x + 3)^2, a perfect square with the single repeated root x = -3.",
          mafs: `<Mafs viewBox={{ x: [-6, 0], y: [-2, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 6*x + 9} domain={[-5.5, -0.5]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={0} attach="n" attachDistance={18}>(-3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = 6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga28-023",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the coordinates of the turning point of \\(y = 2x^2 - 12x + 5\\) by completing the square.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "completing the square", "leading coefficient", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the leading coefficient out of the x-terms only.",
          workingLatex: "y = 2(x^2 - 6x) + 5",
          explanation:
            "When a ≠ 1 you must first take the leading coefficient out of the x^2 and x terms, leaving the constant alone. Here factor out 2: 2x^2 - 12x = 2(x^2 - 6x).",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside the bracket.",
          workingLatex: "x^2 - 6x = (x - 3)^2 - 9",
          explanation:
            "Halve -6 to get -3, giving (x - 3)^2, then subtract 9 to compensate for the extra constant.",
        },
        {
          stepNumber: 3,
          description: "Multiply the 2 back through the bracket.",
          workingLatex: "y = 2\\big((x - 3)^2 - 9\\big) + 5 = 2(x - 3)^2 - 18 + 5",
          explanation:
            "Distribute the factor of 2 across both terms: 2 × (x - 3)^2 and 2 × (-9) = -18. The +5 outside is unaffected.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants.",
          workingLatex: "y = 2(x - 3)^2 - 13",
          explanation:
            "-18 + 5 = -13, giving the completed-square form y = 2(x - 3)^2 - 13.",
        },
        {
          stepNumber: 5,
          description: "Read off the turning point.",
          workingLatex: "\\text{minimum at } (3,\\, -13)",
          explanation:
            "The bracket is zero at x = 3, where y = -13, its least value. The turning point is (3, -13).",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [-15, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x*x - 12*x + 5} domain={[0.5, 5.5]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={-13} color="var(--mafs-fg-orange)" />
  <Text x={3} y={-13} attach="s" attachDistance={18}>min (3, -13)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,-13)\\)",
      canonicalAnswer: "(3,-13)",
    },
  },
  {
    id: "ga28-024",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A quadratic has roots \\(x = -2\\) and \\(x = 6\\) and passes through \\((0,\\,-24)\\). Find its equation in the form \\(y = ax^2 + bx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["roots of quadratics", "y-intercept of quadratics", "equation from roots", "find unknown"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the quadratic in factorised form using the roots.",
          workingLatex: "y = a(x + 2)(x - 6)",
          explanation:
            "Roots at x = -2 and x = 6 mean (x + 2) and (x - 6) are factors. A scale factor a is needed because many quadratics share the same roots.",
        },
        {
          stepNumber: 2,
          description: "Use the point (0, -24) to find a.",
          workingLatex: "-24 = a(0 + 2)(0 - 6)",
          explanation:
            "The curve passes through (0, -24), so substitute x = 0 and y = -24 to create an equation for a.",
        },
        {
          stepNumber: 3,
          description: "Simplify and solve for a.",
          workingLatex: "-24 = a(2)(-6) = -12a \\;\\Rightarrow\\; a = 2",
          explanation:
            "Evaluate the brackets: (2)(-6) = -12, so -24 = -12a. Dividing both sides by -12 gives a = 2.",
        },
        {
          stepNumber: 4,
          description: "Substitute a back in.",
          workingLatex: "y = 2(x + 2)(x - 6)",
          explanation:
            "With a = 2 the factorised equation is fixed; now expand it into the requested form.",
        },
        {
          stepNumber: 5,
          description: "Expand the two brackets.",
          workingLatex: "(x + 2)(x - 6) = x^2 - 6x + 2x - 12 = x^2 - 4x - 12",
          explanation:
            "Multiply out: x·x = x^2, the cross terms -6x + 2x = -4x, and 2·(-6) = -12.",
        },
        {
          stepNumber: 6,
          description: "Multiply through by a = 2 and check the y-intercept.",
          workingLatex: "y = 2x^2 - 8x - 24; \\quad x = 0: \\; y = -24 \\checkmark",
          explanation:
            "Multiplying every term by 2 gives the final equation. The constant term is -24, confirming the curve passes through (0, -24).",
          mafs: `<Mafs viewBox={{ x: [-4, 8], y: [-34, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x*x - 8*x - 24} domain={[-3, 7]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={0} attach="n" attachDistance={16}>(-2, 0)</Text>
  <Point x={6} y={0} color="var(--mafs-fg-blue)" />
  <Text x={6} y={0} attach="n" attachDistance={16}>(6, 0)</Text>
  <Point x={0} y={-24} color="var(--mafs-fg-green)" />
  <Text x={0} y={-24} attach="e" attachDistance={16}>(0, -24)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 2x^2 - 8x - 24\\)",
      canonicalAnswer: "y=2x^2-8x-24",
    },
  },
  {
    id: "ga28-025",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Find the exact roots of \\(y = x^2 - 4x - 1\\), giving your answers in surd form.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["roots of quadratics", "completing the square", "surd roots", "exact roots"],
    answerMeta: { exactForm: true },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0; the quadratic does not factorise nicely, so complete the square.",
          workingLatex: "x^2 - 4x - 1 = 0",
          explanation:
            "No integer pair multiplies to -1 and adds to -4, so factorising fails. Completing the square gives the exact (surd) roots.",
        },
        {
          stepNumber: 2,
          description: "Complete the square on the left.",
          workingLatex: "(x - 2)^2 - 4 - 1 = 0 \\;\\Rightarrow\\; (x - 2)^2 - 5 = 0",
          explanation:
            "Halve -4 to get -2, forming (x - 2)^2, then subtract 4 to compensate; combine -4 - 1 = -5.",
        },
        {
          stepNumber: 3,
          description: "Isolate the squared bracket.",
          workingLatex: "(x - 2)^2 = 5",
          explanation:
            "Add 5 to both sides so the perfect square is alone, ready to square-root.",
        },
        {
          stepNumber: 4,
          description: "Square root both sides, keeping both signs.",
          workingLatex: "x - 2 = \\pm \\sqrt{5}",
          explanation:
            "Taking the square root introduces ± because both the positive and negative root satisfy the equation.",
        },
        {
          stepNumber: 5,
          description: "Solve for x.",
          workingLatex: "x = 2 \\pm \\sqrt{5}",
          explanation:
            "Add 2 to both sides. The exact roots are x = 2 + √5 and x = 2 - √5 (these are irrational, which is why surd form is required).",
          mafs: `<Mafs viewBox={{ x: [-3, 7], y: [-6, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 4*x - 1} domain={[-1.5, 5.5]} color="var(--mafs-fg-accent)" />
  <Point x={-0.236} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-0.236} y={0} attach="nw" attachDistance={14}>2 - √5</Text>
  <Point x={4.236} y={0} color="var(--mafs-fg-blue)" />
  <Text x={4.236} y={0} attach="ne" attachDistance={14}>2 + √5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 2 + \\sqrt{5}\\) or \\(x = 2 - \\sqrt{5}\\)",
      canonicalAnswer: "{2+sqrt(5),2-sqrt(5)}",
    },
  },
  {
    id: "ga28-026",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Find the values of \\(k\\) for which \\(y = x^2 + 6x + k\\) crosses the \\(x\\)-axis at two distinct points.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["discriminant", "two distinct roots", "inequality", "find unknown"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Two distinct x-axis crossings means two distinct real roots.",
          workingLatex: "b^2 - 4ac > 0",
          explanation:
            "A quadratic crosses the x-axis twice exactly when it has two different real roots, which happens when the discriminant is strictly positive.",
        },
        {
          stepNumber: 2,
          description: "Substitute a = 1, b = 6, c = k.",
          workingLatex: "6^2 - 4 \\cdot 1 \\cdot k > 0 \\;\\Rightarrow\\; 36 - 4k > 0",
          explanation:
            "Replace the coefficients: b^2 = 36 and 4ac = 4k. The inequality becomes 36 - 4k > 0.",
        },
        {
          stepNumber: 3,
          description: "Solve the inequality for k.",
          workingLatex: "36 > 4k \\;\\Rightarrow\\; 9 > k",
          explanation:
            "Add 4k to both sides, then divide by 4. Dividing by a positive number keeps the inequality direction, giving k < 9.",
        },
        {
          stepNumber: 4,
          description: "State the answer.",
          workingLatex: "k < 9",
          explanation:
            "For any k less than 9 the discriminant is positive, so the curve has two distinct x-intercepts. (At k = 9 it would touch the axis once; above 9 it misses it.)",
          mafs: `<Mafs viewBox={{ x: [-8, 2], y: [-11, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 6*x} domain={[-7, 1]} color="var(--mafs-fg-accent)" />
  <Point x={-6} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-6} y={0} attach="n" attachDistance={16}>(-6, 0)</Text>
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="n" attachDistance={16}>(0, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k < 9\\)",
      canonicalAnswer: "k<9",
    },
  },
  {
    id: "ga28-027",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Show that the curve \\(y = x^2 - 8x + 20\\) does not cross the \\(x\\)-axis, and find the coordinates of its minimum point.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["discriminant", "turning point of quadratics", "completing the square", "no real roots", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test for x-axis crossings using the discriminant.",
          workingLatex: "b^2 - 4ac = (-8)^2 - 4 \\cdot 1 \\cdot 20 = 64 - 80 = -16",
          explanation:
            "With a = 1, b = -8, c = 20 the discriminant is 64 - 80 = -16. A negative discriminant means no real roots.",
        },
        {
          stepNumber: 2,
          description: "Interpret the negative discriminant.",
          workingLatex: "b^2 - 4ac = -16 < 0 \\;\\Rightarrow\\; \\text{no real roots}",
          explanation:
            "Since b^2 - 4ac < 0 there are no real solutions of y = 0, so the curve never meets the x-axis.",
        },
        {
          stepNumber: 3,
          description: "Complete the square to find the minimum point.",
          workingLatex: "y = (x - 4)^2 - 16 + 20 = (x - 4)^2 + 4",
          explanation:
            "Halve -8 to get -4, forming (x - 4)^2; subtract 16, then add the +20: -16 + 20 = 4.",
        },
        {
          stepNumber: 4,
          description: "Read off the vertex.",
          workingLatex: "\\text{minimum at } (4,\\, 4)",
          explanation:
            "The bracket is zero at x = 4, where y = 4. The minimum point is (4, 4).",
          mafs: `<Mafs viewBox={{ x: [1, 7], y: [2, 16] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 8*x + 20} domain={[1.5, 6.5]} color="var(--mafs-fg-accent)" />
  <Point x={4} y={4} color="var(--mafs-fg-orange)" />
  <Text x={4} y={4} attach="s" attachDistance={18}>min (4, 4)</Text>
</Mafs>`,
        },
        {
          stepNumber: 5,
          description: "Confirm consistency with no roots.",
          workingLatex: "y_{\\min} = 4 > 0",
          explanation:
            "The lowest point is at height y = 4, which is above the x-axis. Because the whole curve sits above y = 0, it indeed never crosses the x-axis — consistent with the negative discriminant.",
        },
      ],
      finalAnswer: "No real roots; minimum point \\((4,\\,4)\\)",
      canonicalAnswer: "(4,4)",
    },
  },
  {
    id: "ga28-028",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The curve \\(y = -x^2 + 4x + 5\\) crosses the \\(x\\)-axis at two points and has a maximum. Find the two \\(x\\)-intercepts and the maximum point.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["roots of quadratics", "turning point of quadratics", "negative leading coefficient", "maximum point", "key coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0 for the x-intercepts.",
          workingLatex: "-x^2 + 4x + 5 = 0",
          explanation:
            "The x-intercepts are where y = 0. With a negative x^2 term it helps to make the leading coefficient positive first.",
        },
        {
          stepNumber: 2,
          description: "Multiply through by -1 to ease factorising.",
          workingLatex: "x^2 - 4x - 5 = 0",
          explanation:
            "Multiplying every term by -1 flips all the signs and leaves the same roots, giving a more familiar form to factorise.",
        },
        {
          stepNumber: 3,
          description: "Factorise and solve.",
          workingLatex: "(x - 5)(x + 1) = 0 \\;\\Rightarrow\\; x = 5 \\;\\text{or}\\; x = -1",
          explanation:
            "Two numbers multiplying to -5 and adding to -4 are -5 and +1. The x-intercepts are (5, 0) and (-1, 0).",
        },
        {
          stepNumber: 4,
          description: "Find the line of symmetry, midway between the roots.",
          workingLatex: "x = \\frac{5 + (-1)}{2} = \\frac{4}{2} = 2",
          explanation:
            "The vertex sits halfway between the roots: (5 + (-1))/2 = 2.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 2 into the original equation.",
          workingLatex: "y = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9",
          explanation:
            "Use the original (negative) form: -4 + 8 + 5 = 9. This is the y-coordinate of the turning point.",
        },
        {
          stepNumber: 6,
          description: "State the maximum point.",
          workingLatex: "\\text{maximum at } (2,\\, 9)",
          explanation:
            "Since a = -1 < 0 the parabola opens downward, so (2, 9) is the maximum point.",
          mafs: `<Mafs viewBox={{ x: [-3, 7], y: [-2, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -x*x + 4*x + 5} domain={[-2, 6]} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={0} attach="s" attachDistance={16}>(-1, 0)</Text>
  <Point x={5} y={0} color="var(--mafs-fg-blue)" />
  <Text x={5} y={0} attach="s" attachDistance={16}>(5, 0)</Text>
  <Point x={2} y={9} color="var(--mafs-fg-orange)" />
  <Text x={2} y={9} attach="n" attachDistance={16}>max (2, 9)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "x-intercepts \\((5,\\,0)\\), \\((-1,\\,0)\\); maximum \\((2,\\,9)\\)",
      canonicalAnswer: "(5,0),(-1,0),(2,9)",
    },
  },
  {
    id: "ga28-029",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A quadratic \\(y = a(x - h)^2 + k\\) has a minimum turning point at \\((3,\\,-2)\\) and passes through \\((1,\\,6)\\). Find the values of \\(a\\), \\(h\\) and \\(k\\), and hence the y-intercept.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "completing the square", "y-intercept of quadratics", "find unknown", "vertex form"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read h and k straight from the vertex.",
          workingLatex: "h = 3, \\quad k = -2",
          explanation:
            "In vertex form y = a(x - h)^2 + k the turning point is (h, k). The given vertex (3, -2) gives h = 3 and k = -2 immediately.",
        },
        {
          stepNumber: 2,
          description: "Write the equation with h and k filled in.",
          workingLatex: "y = a(x - 3)^2 - 2",
          explanation:
            "Only a is still unknown. Use the extra point on the curve to pin it down.",
        },
        {
          stepNumber: 3,
          description: "Substitute the point (1, 6).",
          workingLatex: "6 = a(1 - 3)^2 - 2 = a(-2)^2 - 2 = 4a - 2",
          explanation:
            "Put x = 1, y = 6. The bracket (1 - 3) = -2, and (-2)^2 = 4, so the right-hand side is 4a - 2.",
        },
        {
          stepNumber: 4,
          description: "Solve for a.",
          workingLatex: "6 = 4a - 2 \\;\\Rightarrow\\; 8 = 4a \\;\\Rightarrow\\; a = 2",
          explanation:
            "Add 2 to both sides to get 8 = 4a, then divide by 4 to find a = 2. Since a > 0 the vertex is indeed a minimum, as required.",
        },
        {
          stepNumber: 5,
          description: "State the full equation.",
          workingLatex: "y = 2(x - 3)^2 - 2",
          explanation:
            "With a = 2, h = 3, k = -2 the curve is fully determined.",
        },
        {
          stepNumber: 6,
          description: "Find the y-intercept by setting x = 0.",
          workingLatex: "x = 0: \\; y = 2(0 - 3)^2 - 2 = 2(9) - 2 = 16 \\;\\Rightarrow\\; (0,\\,16)",
          explanation:
            "At x = 0 the bracket is (-3)^2 = 9, so y = 18 - 2 = 16. The y-intercept is (0, 16).",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-4, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*(x - 3)*(x - 3) - 2} domain={[0, 5]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={-2} color="var(--mafs-fg-orange)" />
  <Text x={3} y={-2} attach="s" attachDistance={16}>min (3, -2)</Text>
  <Point x={0} y={16} color="var(--mafs-fg-green)" />
  <Text x={0} y={16} attach="e" attachDistance={16}>(0, 16)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(a = 2,\\; h = 3,\\; k = -2\\); y-intercept \\((0,\\,16)\\)",
      canonicalAnswer: "(0,16)",
    },
  },
  {
    id: "ga28-030",
    topicRef: "ga28",
    topicTitle: "Roots, intercepts and turning points of quadratics",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "By completing the square, find the turning point of \\(y = 3x^2 + 12x + 7\\), and state whether it is a maximum or a minimum.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["turning point of quadratics", "completing the square", "leading coefficient", "minimum point", "vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the leading coefficient out of the x-terms.",
          workingLatex: "y = 3(x^2 + 4x) + 7",
          explanation:
            "Take 3 out of the x^2 and x terms only: 3x^2 + 12x = 3(x^2 + 4x). The constant +7 stays outside.",
        },
        {
          stepNumber: 2,
          description: "Complete the square inside the bracket.",
          workingLatex: "x^2 + 4x = (x + 2)^2 - 4",
          explanation:
            "Halve 4 to get 2, forming (x + 2)^2; subtract 4 to cancel the extra constant (x + 2)^2 introduces.",
        },
        {
          stepNumber: 3,
          description: "Multiply the 3 back through.",
          workingLatex: "y = 3\\big((x + 2)^2 - 4\\big) + 7 = 3(x + 2)^2 - 12 + 7",
          explanation:
            "Distribute the 3: 3 × (x + 2)^2 and 3 × (-4) = -12. The +7 is added afterwards.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants.",
          workingLatex: "y = 3(x + 2)^2 - 5",
          explanation:
            "-12 + 7 = -5, giving completed-square form y = 3(x + 2)^2 - 5.",
        },
        {
          stepNumber: 5,
          description: "Read off the turning point.",
          workingLatex: "\\text{vertex at } (-2,\\, -5)",
          explanation:
            "The bracket is zero when x = -2, where y = -5, its least value. The turning point is (-2, -5).",
        },
        {
          stepNumber: 6,
          description: "Decide maximum or minimum from the sign of a.",
          workingLatex: "a = 3 > 0 \\;\\Rightarrow\\; \\text{minimum}",
          explanation:
            "Because the coefficient of x^2 is positive, the parabola opens upward, so the turning point (-2, -5) is a minimum.",
          mafs: `<Mafs viewBox={{ x: [-5, 1], y: [-7, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3*x*x + 12*x + 7} domain={[-4.3, 0.3]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={-5} color="var(--mafs-fg-orange)" />
  <Text x={-2} y={-5} attach="s" attachDistance={18}>min (-2, -5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "Minimum point \\((-2,\\,-5)\\)",
      canonicalAnswer: "(-2,-5)",
    },
  },
];
