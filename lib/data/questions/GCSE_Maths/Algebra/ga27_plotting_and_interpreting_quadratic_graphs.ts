/**
 * Topic: Plotting and interpreting quadratic graphs
 * Ref: ga27  (DfE A11 / A12)
 * Strand: Algebra — GCSE Maths (Foundation & Higher tiers)
 *
 * Coverage: working with the parabola y = ax^2 + bx + c. Every item is
 *   answerable from the EQUATION or a DATA TABLE given in the stem — no item
 *   requires reading an unprovided figure. Key facts used throughout:
 *   substitute an x-value to get the corresponding y-value when completing a
 *   table; a parabola is symmetric about the vertical line through its turning
 *   point; the y-intercept is the constant term (the value at x = 0); the roots
 *   are the x-values where y = 0 (factorise or read symmetric pairs); the turning
 *   point lies on the line of symmetry, midway between the roots; solving
 *   f(x) = k means finding the x-values where the curve reaches height k.
 *   Clusters:
 *   (1) completing tables of values (substitution, sign care on squares);
 *   (2) reading the y-intercept and roots from an equation (factorising);
 *   (3) line of symmetry and turning point (midpoint of roots; min/max value);
 *   (4) using the graph to solve f(x) = k and counting solutions;
 *   (5) interpreting quadratic graphs in context (height, profit, area).
 *   Solutions stress: square BEFORE multiplying/adding; (-a)^2 = +a^2 so a
 *   negative x can give a positive term; the turning point's y is the min/max
 *   of the function; and a final substitution CHECK where possible.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga27-001 .. ga27-004  (4)   single substitutions / read-offs
 *   - Standard:   ga27-005 .. ga27-018  (14)
 *   - Challenge:  ga27-019 .. ga27-030  (12)
 * Id range: ga27-001 .. ga27-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, with braced exponents x^{2}, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  // ──── completing a table of values ────
  {
    id: "ga27-001",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "For the curve \\(y = x^2 + 1\\), find the value of \\(y\\) when \\(x = 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["plotting quadratic graphs", "table of values", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 3 into the equation.",
          workingLatex: "y = (3)^{2} + 1",
          explanation:
            "To find the height of the curve at x = 3, replace every x in y = x^2 + 1 with the number 3. Keeping the 3 in a bracket reminds us the whole value is being squared.",
        },
        {
          stepNumber: 2,
          description: "Work out the square first.",
          workingLatex: "y = 9 + 1",
          explanation:
            "Following the order of operations (BIDMAS), powers come before addition, so evaluate 3^2 = 9 before touching the +1.",
        },
        {
          stepNumber: 3,
          description: "Add to get y.",
          workingLatex: "y = 10",
          explanation:
            "Now complete the addition: 9 + 1 = 10. So when x = 3 the curve passes through the point (3, 10).",
          mafs: `<Mafs viewBox={{ x: [-4, 4], y: [-1, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 1} domain={[-3.2, 3.2]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={10} color="var(--mafs-fg-blue)" />
  <Text x={3} y={10} attach="w" attachDistance={20}>(3, 10)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 10\\)",
      canonicalAnswer: "10",
    },
  },
  {
    id: "ga27-002",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "For the curve \\(y = x^2 - 2x\\), find the value of \\(y\\) when \\(x = -2\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["plotting quadratic graphs", "table of values", "negative substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -2 into each term.",
          workingLatex: "y = (-2)^{2} - 2(-2)",
          explanation:
            "Replace x with -2 in both terms. Wrapping -2 in brackets is essential so the minus sign is included in the square and in the multiplication.",
        },
        {
          stepNumber: 2,
          description: "Square the negative number.",
          workingLatex: "(-2)^{2} = 4",
          explanation:
            "(-2)^2 means (-2) × (-2). Two negatives multiply to a positive, so this is +4, not -4 — the classic slip here is to write -4.",
        },
        {
          stepNumber: 3,
          description: "Simplify the second term.",
          workingLatex: "-2(-2) = +4",
          explanation:
            "Multiplying -2 by -2 again gives a positive: +4. So subtracting the term -2x has actually added 4 here.",
        },
        {
          stepNumber: 4,
          description: "Add the terms.",
          workingLatex: "y = 4 + 4 = 8",
          explanation:
            "Both terms came out positive, so 4 + 4 = 8. Hence y = 8 when x = -2, giving the point (-2, 8).",
          mafs: `<Mafs viewBox={{ x: [-4, 5], y: [-2, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 2*x} domain={[-3, 4]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={8} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={8} attach="e" attachDistance={20}>(-2, 8)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 8\\)",
      canonicalAnswer: "8",
    },
  },
  // ──── reading y-intercept off an equation ────
  {
    id: "ga27-003",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The curve \\(y = x^2 + 4x - 5\\) crosses the \\(y\\)-axis at one point. State the \\(y\\)-coordinate of that point.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "y-intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "On the y-axis, x = 0.",
          workingLatex: "x = 0",
          explanation:
            "Every point on the y-axis has x-coordinate 0. So to find where the curve meets the y-axis, we set x = 0 and find the height.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 0 into the equation.",
          workingLatex: "y = (0)^{2} + 4(0) - 5",
          explanation:
            "Putting x = 0 makes the x^2 term and the 4x term both zero, because anything times 0 is 0.",
        },
        {
          stepNumber: 3,
          description: "Read off the constant.",
          workingLatex: "y = -5",
          explanation:
            "Only the constant term survives, so y = -5. In general the y-intercept of y = ax^2 + bx + c is always the constant term c — here that is -5.",
          mafs: `<Mafs viewBox={{ x: [-6, 3], y: [-11, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 4*x - 5} domain={[-5.5, 1.5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-5} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-5} attach="e" attachDistance={20}>(0, -5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-5\\)",
      canonicalAnswer: "-5",
    },
  },
  // ──── reading turning point off completed-square form ────
  {
    id: "ga27-004",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The curve \\(y = x^2\\) has a turning point. State the \\(y\\)-coordinate of its lowest point.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "turning point", "minimum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "A square is never negative.",
          workingLatex: "x^{2} \\ge 0 \\text{ for all } x",
          explanation:
            "Squaring any real number — positive, negative or zero — gives a result that is zero or positive. So y = x^2 can never dip below 0.",
        },
        {
          stepNumber: 2,
          description: "Find where the smallest value occurs.",
          workingLatex: "x = 0 \\Rightarrow y = (0)^{2} = 0",
          explanation:
            "The only way x^2 can equal its smallest value, 0, is when x itself is 0. At x = 0 the curve sits at y = 0.",
        },
        {
          stepNumber: 3,
          description: "State the lowest y-coordinate.",
          workingLatex: "y_{\\min} = 0",
          explanation:
            "Since the curve never goes below 0 and actually reaches 0 at x = 0, the lowest point of y = x^2 has y-coordinate 0 (the turning point is (0, 0)).",
          mafs: `<Mafs viewBox={{ x: [-4, 4], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3.2, 3.2]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-orange)" />
  <Text x={0} y={0} attach="se" attachDistance={20}>min (0, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(0\\)",
      canonicalAnswer: "0",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  // ──── completing tables of values ────
  {
    id: "ga27-005",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A table of values is being completed for \\(y = x^2 - 3\\). Find the value of \\(y\\) when \\(x = -4\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting quadratic graphs", "table of values", "negative substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write out the substitution before evaluating.",
          workingLatex: "y = (-4)^{2} - 3",
          explanation:
            "Replace x with -4. Keep the bracket around -4 so the whole value is squared, not just the 4. Writing it out first prevents rushed sign errors.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the square.",
          workingLatex: "(-4)^{2} = (-4) \\cdot (-4) = 16",
          explanation:
            "(-4)^2 means (-4) × (-4). Two negatives make a positive, so the result is +16. A very common slip is to write -16 by squaring only the 4 and keeping the sign.",
        },
        {
          stepNumber: 3,
          description: "Subtract the constant.",
          workingLatex: "y = 16 - 3 = 13",
          explanation:
            "Now subtract the 3: 16 - 3 = 13. So the missing table entry is y = 13 at x = -4.",
          mafs: `<Mafs viewBox={{ x: [-5, 5], y: [-4, 15] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 3} domain={[-4.2, 4.2]} color="var(--mafs-fg-accent)" />
  <Point x={-4} y={13} color="var(--mafs-fg-blue)" />
  <Text x={-4} y={13} attach="e" attachDistance={20}>(-4, 13)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 13\\)",
      canonicalAnswer: "13",
    },
  },
  {
    id: "ga27-006",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Complete the table of values for \\(y = 2x^2 - x + 1\\) by finding \\(y\\) when \\(x = -3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting quadratic graphs", "table of values", "negative substitution", "coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -3 into each term.",
          workingLatex: "y = 2(-3)^{2} - (-3) + 1",
          explanation:
            "Replace x with -3 everywhere. The middle term -x becomes -(-3). Brackets around -3 keep every sign correct as you substitute.",
        },
        {
          stepNumber: 2,
          description: "Square the -3 first.",
          workingLatex: "(-3)^{2} = 9",
          explanation:
            "Order of operations: deal with the power before any multiplication. (-3)^2 = 9 (positive, since two negatives multiply to a positive).",
        },
        {
          stepNumber: 3,
          description: "Multiply by the coefficient 2.",
          workingLatex: "2 \\cdot 9 = 18",
          explanation:
            "Only now multiply by the coefficient 2 to get 18. Do not multiply -3 by 2 first — the square must be done before the coefficient is applied.",
        },
        {
          stepNumber: 4,
          description: "Resolve the middle term's double negative.",
          workingLatex: "-(-3) = +3",
          explanation:
            "Subtracting a negative is the same as adding: -(-3) = +3. So the middle term contributes +3, not -3.",
        },
        {
          stepNumber: 5,
          description: "Add the three terms.",
          workingLatex: "y = 18 + 3 + 1 = 22",
          explanation:
            "Combine all three contributions: 18 + 3 + 1 = 22. So y = 22 when x = -3.",
          mafs: `<Mafs viewBox={{ x: [-4, 3], y: [-2, 24] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x*x - x + 1} domain={[-3.3, 2.3]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={22} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={22} attach="e" attachDistance={20}>(-3, 22)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 22\\)",
      canonicalAnswer: "22",
    },
  },
  {
    id: "ga27-007",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "For \\(y = -x^2 + 4x + 2\\), find the value of \\(y\\) when \\(x = 5\\) (a missing entry in a table of values).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting quadratic graphs", "table of values", "negative coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 5 into each term.",
          workingLatex: "y = -(5)^{2} + 4(5) + 2",
          explanation:
            "Replace x with 5. The leading term -x^2 means -(x^2): the minus sits outside the square, so square first and then apply the minus.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the squared term with its sign.",
          workingLatex: "-(5)^{2} = -(25) = -25",
          explanation:
            "5^2 = 25, and the leading minus is outside the square, so this term is -25. The minus does not get squared away.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the linear term.",
          workingLatex: "4(5) = 20",
          explanation:
            "The middle term is the coefficient 4 times x = 5, giving 4 × 5 = 20.",
        },
        {
          stepNumber: 4,
          description: "Combine all terms.",
          workingLatex: "y = -25 + 20 + 2 = -3",
          explanation:
            "Add the three contributions left to right: -25 + 20 = -5, then -5 + 2 = -3. So y = -3 when x = 5.",
          mafs: `<Mafs viewBox={{ x: [-2, 6], y: [-5, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -x*x + 4*x + 2} domain={[-1, 5.3]} color="var(--mafs-fg-accent)" />
  <Point x={5} y={-3} color="var(--mafs-fg-blue)" />
  <Text x={5} y={-3} attach="e" attachDistance={20}>(5, -3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -3\\)",
      canonicalAnswer: "-3",
    },
  },
  // ──── y-intercept and roots from an equation ────
  {
    id: "ga27-008",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Find the \\(x\\)-coordinates of the points where the curve \\(y = x^2 - 5x + 6\\) crosses the \\(x\\)-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "roots", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "On the x-axis y = 0, so set the equation to zero.",
          workingLatex: "x^{2} - 5x + 6 = 0",
          explanation:
            "The curve crosses the x-axis where its height is 0. Setting y = 0 turns the problem into solving a quadratic equation for x.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product 6 and sum -5.",
          workingLatex: "(-2) \\times (-3) = 6, \\quad (-2) + (-3) = -5",
          explanation:
            "To factorise x^2 - 5x + 6 we need two numbers that multiply to the constant +6 and add to the x-coefficient -5. Testing factor pairs of 6, the pair -2 and -3 works.",
        },
        {
          stepNumber: 3,
          description: "Write the factorised form.",
          workingLatex: "(x - 2)(x - 3) = 0",
          explanation:
            "Those two numbers go straight into the brackets, giving (x - 2)(x - 3). Expanding back mentally is a quick check that this returns x^2 - 5x + 6.",
        },
        {
          stepNumber: 4,
          description: "Apply the zero-product rule.",
          workingLatex: "x - 2 = 0 \\;\\text{ or }\\; x - 3 = 0",
          explanation:
            "If a product of two factors is zero, at least one factor must be zero. So set each bracket equal to 0 separately.",
        },
        {
          stepNumber: 5,
          description: "Solve each bracket.",
          workingLatex: "x = 2 \\quad\\text{or}\\quad x = 3",
          explanation:
            "Solving each gives x = 2 and x = 3, so the curve crosses the x-axis at the points (2, 0) and (3, 0).",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-2, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 5*x + 6} domain={[-0.3, 5.3]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={0} color="var(--mafs-fg-blue)" />
  <Text x={2} y={0} attach="nw" attachDistance={18}>(2, 0)</Text>
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="ne" attachDistance={18}>(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 2 \\text{ and } x = 3\\)",
      canonicalAnswer: "{2,3}",
    },
  },
  {
    id: "ga27-009",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The curve \\(y = x^2 - 9\\) crosses the \\(x\\)-axis at two points. Find their \\(x\\)-coordinates.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "roots", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0.",
          workingLatex: "x^{2} - 9 = 0",
          explanation:
            "The x-axis crossings occur where the height is zero, so we solve x^2 - 9 = 0.",
        },
        {
          stepNumber: 2,
          description: "Recognise the difference of two squares.",
          workingLatex: "x^{2} - 9 = (x - 3)(x + 3) = 0",
          explanation:
            "Since 9 = 3^2, this is the pattern a^2 - b^2 = (a - b)(a + b) with a = x and b = 3. (You could instead rearrange to x^2 = 9 and take square roots.)",
        },
        {
          stepNumber: 3,
          description: "Apply the zero-product rule.",
          workingLatex: "x - 3 = 0 \\;\\text{ or }\\; x + 3 = 0",
          explanation:
            "One of the two brackets must be zero, so set each equal to zero in turn.",
        },
        {
          stepNumber: 4,
          description: "Solve each factor.",
          workingLatex: "x = 3 \\quad\\text{or}\\quad x = -3",
          explanation:
            "This gives x = 3 and x = -3. The curve crosses at (3, 0) and (-3, 0), symmetric about the y-axis as expected for y = x^2 - 9.",
          mafs: `<Mafs viewBox={{ x: [-5, 5], y: [-11, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 9} domain={[-4.1, 4.1]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={0} attach="nw" attachDistance={18}>(-3, 0)</Text>
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="ne" attachDistance={18}>(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 3 \\text{ and } x = -3\\)",
      canonicalAnswer: "{3,-3}",
    },
  },
  {
    id: "ga27-010",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "State the coordinates of the point where \\(y = x^2 - 6x + 8\\) crosses the \\(y\\)-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "y-intercept", "coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The y-axis crossing has x = 0.",
          workingLatex: "x = 0",
          explanation:
            "Any point on the y-axis has x-coordinate 0, so substitute x = 0 into the equation to find the height there.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 0 into the equation.",
          workingLatex: "y = (0)^{2} - 6(0) + 8",
          explanation:
            "Putting x = 0 makes both the x^2 term and the -6x term zero, since each is multiplied by 0.",
        },
        {
          stepNumber: 3,
          description: "Read off the constant.",
          workingLatex: "y = 8",
          explanation:
            "Only the constant survives, so y = 8. The y-intercept of a quadratic always equals its constant term.",
        },
        {
          stepNumber: 4,
          description: "Write as a coordinate.",
          workingLatex: "(0,\\,8)",
          explanation:
            "Pair the x-value 0 with the height 8: the curve crosses the y-axis at the point (0, 8).",
          mafs: `<Mafs viewBox={{ x: [-2, 7], y: [-2, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 6*x + 8} domain={[-0.5, 6.5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={8} color="var(--mafs-fg-blue)" />
  <Text x={0} y={8} attach="e" attachDistance={20}>(0, 8)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((0,\\,8)\\)",
      canonicalAnswer: "(0,8)",
    },
  },
  // ──── line of symmetry & turning point ────
  {
    id: "ga27-011",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A quadratic curve crosses the \\(x\\)-axis at \\((1,\\,0)\\) and \\((7,\\,0)\\). Find the equation of its line of symmetry.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "line of symmetry", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The line of symmetry sits midway between the roots.",
          workingLatex: "x = \\frac{1 + 7}{2}",
          explanation:
            "A parabola is symmetric, so its vertical line of symmetry passes exactly halfway between the two x-axis crossings. We find that midpoint by averaging the two root x-values.",
        },
        {
          stepNumber: 2,
          description: "Add the roots.",
          workingLatex: "1 + 7 = 8",
          explanation:
            "First add the two x-coordinates of the roots together: 1 + 7 = 8.",
        },
        {
          stepNumber: 3,
          description: "Halve to find the midpoint.",
          workingLatex: "x = \\frac{8}{2} = 4",
          explanation:
            "Divide the total by 2 to get the midpoint: 8 ÷ 2 = 4.",
        },
        {
          stepNumber: 4,
          description: "State the line.",
          workingLatex: "x = 4",
          explanation:
            "The line of symmetry is the vertical line x = 4. The turning point also lies on this line, directly below or above x = 4.",
          mafs: `<Mafs viewBox={{ x: [-1, 9], y: [-11, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 1)*(x - 7)} domain={[-0.2, 8.2]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[4, -11]} point2={[4, 6]} color="var(--mafs-fg-green)" style="dashed" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Text x={1} y={0} attach="nw" attachDistance={18}>(1, 0)</Text>
  <Point x={7} y={0} color="var(--mafs-fg-blue)" />
  <Text x={7} y={0} attach="ne" attachDistance={18}>(7, 0)</Text>
  <Text x={4} y={5} attach="e" attachDistance={12}>x = 4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga27-012",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The curve \\(y = (x - 3)^2 + 2\\) has a minimum turning point. State its coordinates.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "turning point", "completing the square", "minimum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "A squared bracket is never negative.",
          workingLatex: "(x - 3)^{2} \\ge 0",
          explanation:
            "The term (x - 3)^2 is a square, so it is always zero or positive. To make y as small as possible we want this squared term as small as possible.",
        },
        {
          stepNumber: 2,
          description: "Find the x that makes the bracket zero.",
          workingLatex: "x - 3 = 0 \\Rightarrow x = 3",
          explanation:
            "The smallest a square can be is 0, reached when its inside is 0. So set x - 3 = 0, giving x = 3 as the x-coordinate of the turning point.",
        },
        {
          stepNumber: 3,
          description: "Find the minimum y by setting the bracket to 0.",
          workingLatex: "x = 3 \\Rightarrow y = 0 + 2 = 2",
          explanation:
            "At x = 3 the squared term contributes 0, leaving y = 2. That is the lowest value the curve reaches.",
        },
        {
          stepNumber: 4,
          description: "State the turning point.",
          workingLatex: "(3,\\,2)",
          explanation:
            "In completed-square form y = (x - p)^2 + q the turning point is (p, q). Here p = 3 and q = 2, giving the minimum (3, 2).",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [0, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 3)*(x - 3) + 2} domain={[0, 6]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={2} color="var(--mafs-fg-orange)" />
  <Text x={3} y={2} attach="s" attachDistance={18}>min (3, 2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,2)\\)",
      canonicalAnswer: "(3,2)",
    },
  },
  {
    id: "ga27-013",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The curve \\(y = (x + 2)^2 - 9\\) has a turning point. State its coordinates and say whether it is a maximum or a minimum.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "turning point", "completing the square", "minimum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the squared bracket to its smallest value.",
          workingLatex: "(x + 2)^{2} \\ge 0, \\text{ smallest when } x + 2 = 0",
          explanation:
            "The square (x + 2)^2 is never negative, so the curve is lowest where this bracket equals 0, i.e. where x + 2 = 0.",
        },
        {
          stepNumber: 2,
          description: "Solve for the x-coordinate.",
          workingLatex: "x + 2 = 0 \\Rightarrow x = -2",
          explanation:
            "Solving x + 2 = 0 gives x = -2. Note the sign: a bracket (x + 2) is zero at x = -2, not x = +2 — a frequent mix-up.",
        },
        {
          stepNumber: 3,
          description: "Find the y-value there.",
          workingLatex: "x = -2 \\Rightarrow y = 0 - 9 = -9",
          explanation:
            "Putting x = -2 makes the square 0, leaving y = -9. That is the lowest point of the curve.",
        },
        {
          stepNumber: 4,
          description: "Classify the turning point.",
          workingLatex: "(-2,\\,-9), \\text{ a minimum}",
          explanation:
            "The coefficient of x^2 (hidden inside the expanded form) is +1, positive, so the parabola opens upwards and the turning point (-2, -9) is a minimum.",
          mafs: `<Mafs viewBox={{ x: [-7, 3], y: [-11, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x + 2)*(x + 2) - 9} domain={[-6.1, 2.1]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={-9} color="var(--mafs-fg-orange)" />
  <Text x={-2} y={-9} attach="n" attachDistance={18}>min (-2, -9)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((-2,\\,-9), \\text{ a minimum}\\)",
      canonicalAnswer: "(-2,-9)",
    },
  },
  // ──── using the graph to solve f(x) = k ────
  {
    id: "ga27-014",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Using the curve \\(y = x^2\\), find the values of \\(x\\) for which \\(y = 16\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "solve f(x)=k", "square root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the height equal to 16.",
          workingLatex: "x^{2} = 16",
          explanation:
            "Asking where the curve reaches height 16 means solving y = 16. Since y = x^2, this becomes x^2 = 16.",
        },
        {
          stepNumber: 2,
          description: "Take the square root of both sides.",
          workingLatex: "x = \\pm\\sqrt{16}",
          explanation:
            "To undo the square, take the square root of both sides. Crucially, include the ± sign: both a positive and a negative number can square to 16.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the root.",
          workingLatex: "x = \\pm 4",
          explanation:
            "√16 = 4, so x = +4 or x = -4. The graph reaches height 16 on each side of the y-axis.",
        },
        {
          stepNumber: 4,
          description: "State both solutions.",
          workingLatex: "x = 4 \\quad\\text{or}\\quad x = -4",
          explanation:
            "Forgetting the negative root is the classic error; the symmetry of the parabola guarantees a matching point on the left at x = -4.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-2, 20] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-4.4, 4.4]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[-6, 16]} point2={[6, 16]} color="var(--mafs-fg-green)" style="dashed" />
  <Point x={-4} y={16} color="var(--mafs-fg-blue)" />
  <Text x={-4} y={16} attach="w" attachDistance={18}>(-4, 16)</Text>
  <Point x={4} y={16} color="var(--mafs-fg-blue)" />
  <Text x={4} y={16} attach="e" attachDistance={18}>(4, 16)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 4 \\text{ and } x = -4\\)",
      canonicalAnswer: "{4,-4}",
    },
  },
  {
    id: "ga27-015",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The table below gives values of \\(y = x^2 - 4x\\):\n\n| \\(x\\) | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| \\(y\\) | 0 | -3 | -4 | -3 | 0 |\n\nUse the symmetry shown in the table to state the \\(x\\)-coordinate of the turning point.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting quadratic graphs", "table of values", "line of symmetry", "turning point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the symmetric pattern in the y-values.",
          workingLatex: "y(1) = y(3) = -3, \\quad y(0) = y(4) = 0",
          explanation:
            "Reading across the table, the y-values mirror: x = 1 and x = 3 both give -3, and x = 0 and x = 4 both give 0. This mirroring is the symmetry of the parabola.",
        },
        {
          stepNumber: 2,
          description: "The line of symmetry is midway between a matching pair.",
          workingLatex: "x = \\frac{1 + 3}{2} = 2",
          explanation:
            "The turning point sits on the line of symmetry, exactly halfway between any matching pair such as x = 1 and x = 3. The midpoint of 1 and 3 is 2.",
        },
        {
          stepNumber: 3,
          description: "Confirm with the lowest tabulated y.",
          workingLatex: "y(2) = -4 \\text{ is the smallest value}",
          explanation:
            "As a check, x = 2 gives y = -4, the lowest value in the table — exactly where a (upward) parabola's turning point should be. So its x-coordinate is 2.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-6, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 4*x} domain={[0, 4]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Point x={1} y={-3} color="var(--mafs-fg-blue)" />
  <Point x={3} y={-3} color="var(--mafs-fg-blue)" />
  <Point x={4} y={0} color="var(--mafs-fg-blue)" />
  <Point x={2} y={-4} color="var(--mafs-fg-orange)" />
  <Text x={2} y={-4} attach="s" attachDistance={16}>min (2, -4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 2\\)",
      canonicalAnswer: "2",
    },
  },
  {
    id: "ga27-016",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Using the curve \\(y = x^2 - 2x - 3\\), find the values of \\(x\\) at which \\(y = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "roots", "factorising", "solve f(x)=k"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the curve's height to 0.",
          workingLatex: "x^{2} - 2x - 3 = 0",
          explanation:
            "Finding where y = 0 means solving this quadratic — these x-values are where the curve meets the x-axis.",
        },
        {
          stepNumber: 2,
          description: "Find two numbers with product -3 and sum -2.",
          workingLatex: "(-3) \\times (+1) = -3, \\quad (-3) + (+1) = -2",
          explanation:
            "To factorise we need two numbers multiplying to the constant -3 and adding to the x-coefficient -2. The pair -3 and +1 fits both.",
        },
        {
          stepNumber: 3,
          description: "Write the factorised form.",
          workingLatex: "(x - 3)(x + 1) = 0",
          explanation:
            "Drop those numbers into brackets to get (x - 3)(x + 1). Expanding back confirms x^2 - 2x - 3.",
        },
        {
          stepNumber: 4,
          description: "Apply the zero-product rule and solve.",
          workingLatex: "x - 3 = 0 \\;\\text{ or }\\; x + 1 = 0 \\Rightarrow x = 3 \\text{ or } x = -1",
          explanation:
            "One factor must be zero, so set each bracket to 0. This gives the two roots x = 3 and x = -1, where the curve meets y = 0.",
          mafs: `<Mafs viewBox={{ x: [-3, 5], y: [-6, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 2*x - 3} domain={[-2.1, 4.1]} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={0} attach="nw" attachDistance={18}>(-1, 0)</Text>
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="ne" attachDistance={18}>(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 3 \\text{ and } x = -1\\)",
      canonicalAnswer: "{3,-1}",
    },
  },
  {
    id: "ga27-017",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "How many times does the curve \\(y = x^2 + 4\\) cross the line \\(y = 1\\)? Justify your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "solve f(x)=k", "number of solutions", "discriminant idea"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the two heights equal.",
          workingLatex: "x^{2} + 4 = 1",
          explanation:
            "The curve crosses the line y = 1 wherever its own height equals 1. So set x^2 + 4 equal to 1.",
        },
        {
          stepNumber: 2,
          description: "Rearrange to isolate the square.",
          workingLatex: "x^{2} = 1 - 4 = -3",
          explanation:
            "Subtract 4 from both sides. This asks for a number x whose square is -3.",
        },
        {
          stepNumber: 3,
          description: "Recognise that no real x has a negative square.",
          workingLatex: "x^{2} = -3 \\text{ has no real solution}",
          explanation:
            "Any real number squared is zero or positive, never -3, so the equation has no solutions.",
        },
        {
          stepNumber: 4,
          description: "Interpret graphically.",
          workingLatex: "y_{\\min} = 4 > 1 \\Rightarrow 0 \\text{ crossings}",
          explanation:
            "The minimum of y = x^2 + 4 is 4 (at x = 0), already above 1, so the curve never dips down to y = 1. The two graphs meet 0 times.",
          mafs: `<Mafs viewBox={{ x: [-4, 4], y: [-1, 14] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 4} domain={[-3.1, 3.1]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[-4, 1]} point2={[4, 1]} color="var(--mafs-fg-green)" style="dashed" />
  <Text x={3.5} y={1} attach="n" attachDistance={10}>y = 1</Text>
  <Point x={0} y={4} color="var(--mafs-fg-orange)" />
  <Text x={0} y={4} attach="e" attachDistance={18}>min (0, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(0 \\text{ times}\\)",
      canonicalAnswer: "0",
    },
  },
  // ──── interpreting in context ────
  {
    id: "ga27-018",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A ball is thrown so its height in metres after \\(t\\) seconds is \\(h = 20t - 5t^2\\). Find the height of the ball after \\(2\\) seconds.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "context", "substitution", "projectile"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute t = 2 into the height formula.",
          workingLatex: "h = 20(2) - 5(2)^{2}",
          explanation:
            "The height after 2 seconds is found by putting t = 2 into h = 20t - 5t^2, replacing every t with 2.",
        },
        {
          stepNumber: 2,
          description: "Square the t first.",
          workingLatex: "(2)^{2} = 4",
          explanation:
            "Order of operations: deal with the power before multiplying. 2^2 = 4.",
        },
        {
          stepNumber: 3,
          description: "Evaluate each term.",
          workingLatex: "20(2) = 40, \\quad 5 \\cdot 4 = 20",
          explanation:
            "The first term is 20 × 2 = 40. The second term takes the 4 from squaring and multiplies by 5 to get 20.",
        },
        {
          stepNumber: 4,
          description: "Combine the terms.",
          workingLatex: "h = 40 - 20 = 20",
          explanation:
            "Subtract: 40 - 20 = 20. So the ball is 20 metres high after 2 seconds.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-2, 24] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 20*x - 5*x*x} domain={[0, 4]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={20} color="var(--mafs-fg-blue)" />
  <Text x={2} y={20} attach="n" attachDistance={16}>(2, 20)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(20 \\text{ m}\\)",
      canonicalAnswer: "20",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  // ──── turning point via roots / completing the square ────
  {
    id: "ga27-019",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the coordinates of the turning point of \\(y = x^2 - 6x + 5\\) by first finding where it crosses the \\(x\\)-axis.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "turning point", "roots", "line of symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0 and factorise.",
          workingLatex: "x^{2} - 6x + 5 = 0 \\Rightarrow (x - 1)(x - 5) = 0",
          explanation:
            "The roots are where the curve crosses the x-axis, so set y = 0. Two numbers with product +5 and sum -6 are -1 and -5, giving the factors (x - 1)(x - 5).",
        },
        {
          stepNumber: 2,
          description: "Solve for the roots.",
          workingLatex: "x = 1 \\quad\\text{or}\\quad x = 5",
          explanation:
            "Setting each bracket to zero gives x = 1 and x = 5: the curve crosses the x-axis at (1, 0) and (5, 0).",
        },
        {
          stepNumber: 3,
          description: "Average the roots for the line of symmetry.",
          workingLatex: "x = \\frac{1 + 5}{2} = 3",
          explanation:
            "The turning point lies on the line of symmetry, exactly midway between the two roots. Averaging 1 and 5 gives x = 3.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 3 for the y-coordinate.",
          workingLatex: "y = (3)^{2} - 6(3) + 5 = 9 - 18 + 5 = -4",
          explanation:
            "Putting x = 3 into the original equation gives the turning point's height: 9 - 18 + 5 = -4 (square the 3 first).",
        },
        {
          stepNumber: 5,
          description: "State the turning point.",
          workingLatex: "(3,\\,-4)",
          explanation:
            "Since the x^2 coefficient is positive (+1), the parabola opens upwards, so (3, -4) is a minimum turning point.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-6, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 6*x + 5} domain={[-0.2, 6.2]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Text x={1} y={0} attach="nw" attachDistance={16}>(1, 0)</Text>
  <Point x={5} y={0} color="var(--mafs-fg-blue)" />
  <Text x={5} y={0} attach="ne" attachDistance={16}>(5, 0)</Text>
  <Point x={3} y={-4} color="var(--mafs-fg-orange)" />
  <Text x={3} y={-4} attach="s" attachDistance={16}>min (3, -4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,-4)\\)",
      canonicalAnswer: "(3,-4)",
    },
  },
  {
    id: "ga27-020",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "By completing the square, find the coordinates of the turning point of \\(y = x^2 + 8x + 11\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "completing the square", "turning point", "minimum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Halve the coefficient of x for the bracket.",
          workingLatex: "(x + 4)^{2} = x^{2} + 8x + 16",
          explanation:
            "Take half of the x-coefficient 8, which is 4, to form the bracket (x + 4). Expanding (x + 4)^2 produces x^2 + 8x + 16 — note the extra +16 we did not want.",
        },
        {
          stepNumber: 2,
          description: "Subtract the unwanted constant.",
          workingLatex: "x^{2} + 8x = (x + 4)^{2} - 16",
          explanation:
            "Since (x + 4)^2 carries an extra +16, we subtract 16 to cancel it, so x^2 + 8x equals (x + 4)^2 - 16 exactly.",
        },
        {
          stepNumber: 3,
          description: "Reassemble the full expression.",
          workingLatex: "y = (x + 4)^{2} - 16 + 11",
          explanation:
            "Bring the original +11 back in alongside the completed square.",
        },
        {
          stepNumber: 4,
          description: "Simplify the constants.",
          workingLatex: "y = (x + 4)^{2} - 5",
          explanation:
            "Combine -16 + 11 = -5, giving the completed-square form y = (x + 4)^2 - 5.",
        },
        {
          stepNumber: 5,
          description: "Read off the turning point.",
          workingLatex: "x + 4 = 0 \\Rightarrow x = -4, \\quad y = -5",
          explanation:
            "The square is smallest (0) when x + 4 = 0, i.e. x = -4, where y = -5. So the turning point is (-4, -5).",
        },
        {
          stepNumber: 6,
          description: "Check by substitution.",
          workingLatex: "(-4)^{2} + 8(-4) + 11 = 16 - 32 + 11 = -5 \\checkmark",
          explanation:
            "Substituting x = -4 into the original equation gives -5, confirming the turning point (-4, -5).",
          mafs: `<Mafs viewBox={{ x: [-9, 1], y: [-7, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 8*x + 11} domain={[-7.7, -0.3]} color="var(--mafs-fg-accent)" />
  <Point x={-4} y={-5} color="var(--mafs-fg-orange)" />
  <Text x={-4} y={-5} attach="s" attachDistance={16}>min (-4, -5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((-4,\\,-5)\\)",
      canonicalAnswer: "(-4,-5)",
    },
  },
  {
    id: "ga27-021",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The curve \\(y = -x^2 + 6x - 5\\) has a maximum turning point. Find its coordinates and state the maximum value of \\(y\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "turning point", "maximum", "negative coefficient", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0 and tidy the signs.",
          workingLatex: "-x^{2} + 6x - 5 = 0 \\Rightarrow x^{2} - 6x + 5 = 0",
          explanation:
            "To find the roots, set y = 0. Multiplying through by -1 flips every sign and makes factorising easier; it does not change where y = 0.",
        },
        {
          stepNumber: 2,
          description: "Factorise and solve.",
          workingLatex: "(x - 1)(x - 5) = 0 \\Rightarrow x = 1 \\text{ or } x = 5",
          explanation:
            "Two numbers with product +5 and sum -6 are -1 and -5, so the curve crosses the x-axis at x = 1 and x = 5.",
        },
        {
          stepNumber: 3,
          description: "Average the roots for the line of symmetry.",
          workingLatex: "x = \\frac{1 + 5}{2} = 3",
          explanation:
            "The turning point's x-coordinate is the midpoint of the two roots, so x = 3.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 3 into the original equation.",
          workingLatex: "y = -(3)^{2} + 6(3) - 5 = -9 + 18 - 5 = 4",
          explanation:
            "Use the original (un-flipped) equation. Square first: 3^2 = 9, and the leading minus gives -9. Then -9 + 18 - 5 = 4.",
        },
        {
          stepNumber: 5,
          description: "Classify and state.",
          workingLatex: "(3,\\,4) \\text{ is a maximum}",
          explanation:
            "The coefficient of x^2 is negative, so the parabola opens downwards and (3, 4) is a maximum. The maximum value of y is 4.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-6, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -x*x + 6*x - 5} domain={[-0.2, 6.2]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Text x={1} y={0} attach="sw" attachDistance={16}>(1, 0)</Text>
  <Point x={5} y={0} color="var(--mafs-fg-blue)" />
  <Text x={5} y={0} attach="se" attachDistance={16}>(5, 0)</Text>
  <Point x={3} y={4} color="var(--mafs-fg-orange)" />
  <Text x={3} y={4} attach="n" attachDistance={16}>max (3, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,4), \\text{ maximum value } y = 4\\)",
      canonicalAnswer: "(3,4)",
    },
  },
  // ──── completing a table & plotting reasoning ────
  {
    id: "ga27-022",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A student completes a table for \\(y = x^2 - 4x + 1\\) and obtains the entries below.\n\n| \\(x\\) | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| \\(y\\) | 1 | -2 | -2 | -2 | 1 |\n\nExactly one entry is wrong. Identify which \\(x\\)-value has the incorrect \\(y\\), and give the correct value.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting quadratic graphs", "table of values", "error spotting", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the line of symmetry from the end values.",
          workingLatex: "y(0) = y(4) = 1 \\Rightarrow \\text{symmetry at } x = 2",
          explanation:
            "The outer entries x = 0 and x = 4 both give 1, so they are a symmetric pair. The line of symmetry is midway between them, at x = 2.",
        },
        {
          stepNumber: 2,
          description: "Note that three equal -2's cannot all be right.",
          workingLatex: "y(1) = y(2) = y(3) = -2 \\;?",
          explanation:
            "By symmetry x = 1 and x = 3 should match, but x = 2 (the turning point) should be the single lowest value — strictly below its neighbours. Three equal values is impossible, so one of these is wrong.",
        },
        {
          stepNumber: 3,
          description: "Recompute y at x = 1.",
          workingLatex: "y = (1)^{2} - 4(1) + 1 = 1 - 4 + 1 = -2",
          explanation:
            "Substituting x = 1 gives -2, so this entry is correct.",
        },
        {
          stepNumber: 4,
          description: "Recompute y at x = 3.",
          workingLatex: "y = (3)^{2} - 4(3) + 1 = 9 - 12 + 1 = -2",
          explanation:
            "Substituting x = 3 also gives -2, correct and matching x = 1 by symmetry. So the suspect entry is x = 2.",
        },
        {
          stepNumber: 5,
          description: "Recompute y at the vertex x = 2.",
          workingLatex: "y = (2)^{2} - 4(2) + 1 = 4 - 8 + 1 = -3",
          explanation:
            "Substituting x = 2 gives -3, not -2. This is the lowest value, below the -2's either side, exactly as a turning point should be — confirming the table's -2 there is wrong.",
        },
        {
          stepNumber: 6,
          description: "State the correction.",
          workingLatex: "x = 2: \\; y = -3",
          explanation:
            "The incorrect entry is at x = 2; the correct value is y = -3.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-5, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 4*x + 1} domain={[0, 4]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Point x={1} y={-2} color="var(--mafs-fg-blue)" />
  <Point x={3} y={-2} color="var(--mafs-fg-blue)" />
  <Point x={4} y={1} color="var(--mafs-fg-blue)" />
  <Point x={2} y={-3} color="var(--mafs-fg-orange)" />
  <Text x={2} y={-3} attach="s" attachDistance={16}>min (2, -3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 2 \\text{ should be } y = -3\\)",
      canonicalAnswer: "-3",
    },
  },
  // ──── solving f(x) = k from the graph ────
  {
    id: "ga27-023",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The graph of \\(y = x^2 - 2x\\) is drawn. By forming and solving an equation, find the \\(x\\)-coordinates of the points where the curve meets the line \\(y = 3\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "solve f(x)=k", "factorising", "intersection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the curve's height equal to 3.",
          workingLatex: "x^{2} - 2x = 3",
          explanation:
            "Where the curve meets the line y = 3, the two heights are equal, so equate the curve's expression to 3.",
        },
        {
          stepNumber: 2,
          description: "Rearrange to standard quadratic form.",
          workingLatex: "x^{2} - 2x - 3 = 0",
          explanation:
            "Subtract 3 from both sides so the equation equals zero, ready to factorise.",
        },
        {
          stepNumber: 3,
          description: "Find two numbers with product -3 and sum -2.",
          workingLatex: "(-3) \\times (+1) = -3, \\quad (-3) + (+1) = -2",
          explanation:
            "We need a pair multiplying to the constant -3 and adding to the x-coefficient -2. The numbers -3 and +1 work.",
        },
        {
          stepNumber: 4,
          description: "Factorise and solve.",
          workingLatex: "(x - 3)(x + 1) = 0 \\Rightarrow x = 3 \\text{ or } x = -1",
          explanation:
            "The brackets are (x - 3)(x + 1); setting each to zero gives the two intersection x-values, x = 3 and x = -1.",
        },
        {
          stepNumber: 5,
          description: "Check one solution.",
          workingLatex: "x = 3: \\; (3)^{2} - 2(3) = 9 - 6 = 3 \\checkmark",
          explanation:
            "Substituting x = 3 back into y = x^2 - 2x gives 3, confirming the curve really is at height 3 there.",
          mafs: `<Mafs viewBox={{ x: [-3, 5], y: [-3, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 2*x} domain={[-2.1, 4.1]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[-3, 3]} point2={[5, 3]} color="var(--mafs-fg-green)" style="dashed" />
  <Text x={4.5} y={3} attach="n" attachDistance={10}>y = 3</Text>
  <Point x={-1} y={3} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={3} attach="w" attachDistance={16}>(-1, 3)</Text>
  <Point x={3} y={3} color="var(--mafs-fg-blue)" />
  <Text x={3} y={3} attach="e" attachDistance={16}>(3, 3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 3 \\text{ and } x = -1\\)",
      canonicalAnswer: "{3,-1}",
    },
  },
  {
    id: "ga27-024",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "For what value of \\(k\\) does the curve \\(y = x^2 - 6x + 11\\) touch the line \\(y = k\\) at exactly one point? Give the value of \\(k\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "turning point", "tangent line", "completing the square", "minimum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "A horizontal line touches a parabola once only at its turning point.",
          workingLatex: "y = k \\text{ touches once} \\Leftrightarrow k = y_{\\min}",
          explanation:
            "A horizontal line cuts a U-shaped parabola twice if it is above the minimum, never if it is below, and exactly once if it passes through the turning point. So k must equal the minimum y-value.",
        },
        {
          stepNumber: 2,
          description: "Halve the coefficient of x to complete the square.",
          workingLatex: "(x - 3)^{2} = x^{2} - 6x + 9",
          explanation:
            "Half of -6 is -3, so the bracket is (x - 3). Expanding (x - 3)^2 gives x^2 - 6x + 9, carrying an extra +9 we must account for.",
        },
        {
          stepNumber: 3,
          description: "Adjust the constants.",
          workingLatex: "x^{2} - 6x + 11 = (x - 3)^{2} - 9 + 11",
          explanation:
            "Replace x^2 - 6x with (x - 3)^2 - 9 (subtracting the unwanted +9), then keep the original +11.",
        },
        {
          stepNumber: 4,
          description: "Simplify to completed-square form.",
          workingLatex: "y = (x - 3)^{2} + 2",
          explanation:
            "Combine -9 + 11 = 2, giving y = (x - 3)^2 + 2.",
        },
        {
          stepNumber: 5,
          description: "Read the minimum value.",
          workingLatex: "(x - 3)^{2} \\ge 0 \\Rightarrow y_{\\min} = 2 \\text{ at } x = 3",
          explanation:
            "The squared term is least (0) at x = 3, so the smallest y the curve reaches is 2.",
        },
        {
          stepNumber: 6,
          description: "State k.",
          workingLatex: "k = 2",
          explanation:
            "The line y = 2 passes through the turning point (3, 2) and so touches the curve at exactly one point.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-1, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 6*x + 11} domain={[0, 6]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[-1, 2]} point2={[7, 2]} color="var(--mafs-fg-green)" style="dashed" />
  <Text x={6.5} y={2} attach="n" attachDistance={10}>y = 2</Text>
  <Point x={3} y={2} color="var(--mafs-fg-orange)" />
  <Text x={3} y={2} attach="s" attachDistance={16}>(3, 2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = 2\\)",
      canonicalAnswer: "2",
    },
  },
  // ──── line of symmetry from equation ────
  {
    id: "ga27-025",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A quadratic curve passes through \\((-1,\\,12)\\) and \\((5,\\,12)\\). These two points have the same \\(y\\)-value. Find the equation of the curve's line of symmetry, and explain why.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "line of symmetry", "symmetry", "reasoning"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the two points as a symmetric pair.",
          workingLatex: "y(-1) = y(5) = 12",
          explanation:
            "Two points on a parabola at the same height are mirror images of each other in the line of symmetry. So (-1, 12) and (5, 12) are reflections of one another.",
        },
        {
          stepNumber: 2,
          description: "The line of symmetry is midway between them.",
          workingLatex: "x = \\frac{-1 + 5}{2}",
          explanation:
            "The axis of symmetry passes exactly halfway between any symmetric pair, so we average their x-coordinates.",
        },
        {
          stepNumber: 3,
          description: "Add the x-coordinates.",
          workingLatex: "-1 + 5 = 4",
          explanation:
            "Add the two x-values: -1 + 5 = 4. Take care with the negative.",
        },
        {
          stepNumber: 4,
          description: "Halve to find the midpoint.",
          workingLatex: "x = \\frac{4}{2} = 2",
          explanation:
            "Divide by 2 to reach the midpoint: 4 ÷ 2 = 2.",
        },
        {
          stepNumber: 5,
          description: "State the line and the reason.",
          workingLatex: "x = 2",
          explanation:
            "The line of symmetry is x = 2. The reason: a parabola is symmetric, so points at equal height are equidistant from the axis, which therefore sits exactly at their midpoint.",
          mafs: `<Mafs viewBox={{ x: [-3, 7], y: [0, 16] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 2)*(x - 2) + 3} domain={[-1.2, 5.2]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[2, 0]} point2={[2, 16]} color="var(--mafs-fg-green)" style="dashed" />
  <Text x={2} y={15} attach="e" attachDistance={12}>x = 2</Text>
  <Point x={-1} y={12} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={12} attach="w" attachDistance={16}>(-1, 12)</Text>
  <Point x={5} y={12} color="var(--mafs-fg-blue)" />
  <Text x={5} y={12} attach="e" attachDistance={16}>(5, 12)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 2\\)",
      canonicalAnswer: "x=2",
    },
  },
  // ──── interpreting in context ────
  {
    id: "ga27-026",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A ball's height in metres after \\(t\\) seconds is \\(h = 20t - 5t^2\\). Find the time at which the ball reaches its greatest height, and state that greatest height.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "context", "turning point", "maximum", "projectile"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set h = 0 and factor out the common term.",
          workingLatex: "20t - 5t^{2} = 0 \\Rightarrow 5t(4 - t) = 0",
          explanation:
            "Both terms share a factor of 5t, so factor it out. The ball is at ground level (h = 0) at launch and on landing; the peak is exactly halfway between these times by symmetry.",
        },
        {
          stepNumber: 2,
          description: "Solve for the two ground times.",
          workingLatex: "5t = 0 \\;\\text{ or }\\; 4 - t = 0 \\Rightarrow t = 0 \\text{ or } t = 4",
          explanation:
            "Set each factor to zero: the ball leaves the ground at t = 0 and lands at t = 4 seconds.",
        },
        {
          stepNumber: 3,
          description: "The maximum occurs midway between the roots.",
          workingLatex: "t = \\frac{0 + 4}{2} = 2",
          explanation:
            "By the symmetry of the parabola, the peak is at the average of the two ground times, t = 2 seconds.",
        },
        {
          stepNumber: 4,
          description: "Substitute t = 2 to find the greatest height.",
          workingLatex: "h = 20(2) - 5(2)^{2} = 40 - 20 = 20",
          explanation:
            "Square first: 2^2 = 4, times 5 is 20. Then 40 - 20 = 20.",
        },
        {
          stepNumber: 5,
          description: "State the result.",
          workingLatex: "t = 2 \\text{ s}, \\quad h = 20 \\text{ m}",
          explanation:
            "The ball reaches its greatest height of 20 m after 2 seconds.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-2, 24] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 20*x - 5*x*x} domain={[0, 4]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Point x={4} y={0} color="var(--mafs-fg-blue)" />
  <Point x={2} y={20} color="var(--mafs-fg-orange)" />
  <Text x={2} y={20} attach="n" attachDistance={16}>max (2, 20)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(t = 2 \\text{ s}, \\; h = 20 \\text{ m}\\)",
      canonicalAnswer: "20",
    },
  },
  {
    id: "ga27-027",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A ball's height in metres after \\(t\\) seconds is \\(h = 20t - 5t^2\\). Find the times at which the ball is exactly \\(15\\) metres above the ground.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "context", "solve f(x)=k", "factorising", "projectile"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the height equal to 15.",
          workingLatex: "20t - 5t^{2} = 15",
          explanation:
            "We want the times when h = 15, so equate the height formula to 15.",
        },
        {
          stepNumber: 2,
          description: "Rearrange to standard form.",
          workingLatex: "-5t^{2} + 20t - 15 = 0",
          explanation:
            "Bring all terms to one side by subtracting 15 from both sides, ordering by descending power of t.",
        },
        {
          stepNumber: 3,
          description: "Divide through by -5 to simplify.",
          workingLatex: "t^{2} - 4t + 3 = 0",
          explanation:
            "Dividing every term by -5 clears the awkward leading coefficient and flips the signs, leaving a simple monic quadratic.",
        },
        {
          stepNumber: 4,
          description: "Find two numbers with product 3 and sum -4.",
          workingLatex: "(-1) \\times (-3) = 3, \\quad (-1) + (-3) = -4",
          explanation:
            "We need a pair multiplying to +3 and adding to -4. The numbers -1 and -3 fit both conditions.",
        },
        {
          stepNumber: 5,
          description: "Factorise and solve.",
          workingLatex: "(t - 1)(t - 3) = 0 \\Rightarrow t = 1 \\text{ or } t = 3",
          explanation:
            "The brackets are (t - 1)(t - 3); setting each to zero gives t = 1 s (on the way up) and t = 3 s (on the way down).",
        },
        {
          stepNumber: 6,
          description: "Sense-check against the peak.",
          workingLatex: "\\text{peak at } t = 2, \\; 1 < 2 < 3 \\checkmark",
          explanation:
            "Both times straddle the peak at t = 2 s, exactly what we expect for a height below the maximum.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-2, 24] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 20*x - 5*x*x} domain={[0, 4]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[-1, 15]} point2={[5, 15]} color="var(--mafs-fg-green)" style="dashed" />
  <Text x={4.5} y={15} attach="n" attachDistance={10}>h = 15</Text>
  <Point x={1} y={15} color="var(--mafs-fg-blue)" />
  <Text x={1} y={15} attach="w" attachDistance={16}>(1, 15)</Text>
  <Point x={3} y={15} color="var(--mafs-fg-blue)" />
  <Text x={3} y={15} attach="e" attachDistance={16}>(3, 15)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(t = 1 \\text{ s and } t = 3 \\text{ s}\\)",
      canonicalAnswer: "{1,3}",
    },
  },
  {
    id: "ga27-028",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The profit \\(P\\) (in £) made from selling \\(x\\) items is modelled by \\(P = -x^2 + 40x - 300\\). Find the number of items that gives the maximum profit, and state that maximum profit.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "context", "turning point", "maximum", "completing the square"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Maximum profit is at the turning point of the downward parabola.",
          workingLatex: "P = -x^{2} + 40x - 300, \\;\\text{ coefficient of } x^{2} < 0",
          explanation:
            "The negative x^2 coefficient means the graph opens downwards, so its turning point is a maximum — exactly the most profitable output.",
        },
        {
          stepNumber: 2,
          description: "Factor out -1 from the x terms.",
          workingLatex: "P = -\\left(x^{2} - 40x\\right) - 300",
          explanation:
            "Pull -1 out of the x^2 and x terms so the bracket has a +x^2, which is easier to complete the square on. The -300 stays outside.",
        },
        {
          stepNumber: 3,
          description: "Complete the square inside the bracket.",
          workingLatex: "x^{2} - 40x = (x - 20)^{2} - 400",
          explanation:
            "Half of -40 is -20; (x - 20)^2 = x^2 - 40x + 400, so subtract 400 to cancel the unwanted +400.",
        },
        {
          stepNumber: 4,
          description: "Substitute back and distribute the -1.",
          workingLatex: "P = -\\left[(x - 20)^{2} - 400\\right] - 300",
          explanation:
            "Replace the bracket with the completed-square version, ready to multiply by the -1 outside.",
        },
        {
          stepNumber: 5,
          description: "Simplify the constants.",
          workingLatex: "P = -(x - 20)^{2} + 400 - 300 = -(x - 20)^{2} + 100",
          explanation:
            "Distributing the -1 turns -(-400) into +400; then 400 - 300 = 100, giving P = -(x - 20)^2 + 100.",
        },
        {
          stepNumber: 6,
          description: "Read the maximum, then check.",
          workingLatex: "P_{\\max} = 100 \\text{ at } x = 20; \\quad -(20)^{2} + 40(20) - 300 = 100 \\checkmark",
          explanation:
            "The squared term is at most 0 (when x = 20), so the largest P is 100. Substituting x = 20 into the original gives -400 + 800 - 300 = 100, confirming a maximum profit of £100 from 20 items.",
          mafs: `<Mafs viewBox={{ x: [0, 40], y: [-50, 130] }} height={280}>
  <Coordinates.Cartesian subdivisions={2} />
  <Plot.OfX y={(x) => -x*x + 40*x - 300} domain={[7, 33]} color="var(--mafs-fg-accent)" />
  <Point x={10} y={0} color="var(--mafs-fg-blue)" />
  <Text x={10} y={0} attach="sw" attachDistance={14}>(10, 0)</Text>
  <Point x={30} y={0} color="var(--mafs-fg-blue)" />
  <Text x={30} y={0} attach="se" attachDistance={14}>(30, 0)</Text>
  <Point x={20} y={100} color="var(--mafs-fg-orange)" />
  <Text x={20} y={100} attach="n" attachDistance={16}>max (20, 100)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(20 \\text{ items}, \\; \\text{maximum profit } £100\\)",
      canonicalAnswer: "100",
    },
  },
  {
    id: "ga27-029",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A curve has equation \\(y = x^2 + bx + c\\). It crosses the \\(x\\)-axis at \\((2,\\,0)\\) and \\((6,\\,0)\\). Find the values of \\(b\\) and \\(c\\), and hence the coordinates of the turning point.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "roots", "find coefficients", "turning point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the equation in factorised form from its roots.",
          workingLatex: "y = (x - 2)(x - 6)",
          explanation:
            "If a curve with leading coefficient 1 crosses the x-axis at x = 2 and x = 6, those are its roots, so it factorises as (x - 2)(x - 6).",
        },
        {
          stepNumber: 2,
          description: "Expand the brackets.",
          workingLatex: "y = x^{2} - 6x - 2x + 12",
          explanation:
            "Multiply each term in the first bracket by each in the second: x·x = x^2, x·(-6) = -6x, (-2)·x = -2x, (-2)·(-6) = +12.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "y = x^{2} - 8x + 12",
          explanation:
            "Combine the two x terms: -6x - 2x = -8x. This is the standard form.",
        },
        {
          stepNumber: 4,
          description: "Compare coefficients.",
          workingLatex: "b = -8, \\quad c = 12",
          explanation:
            "Matching x^2 + bx + c against x^2 - 8x + 12 reads off b = -8 and c = 12 directly.",
        },
        {
          stepNumber: 5,
          description: "Find the line of symmetry and y-coordinate.",
          workingLatex: "x = \\frac{2 + 6}{2} = 4, \\quad y = (4)^{2} - 8(4) + 12 = -4",
          explanation:
            "The turning point's x-coordinate is the midpoint of the roots, x = 4. Substituting x = 4 gives 16 - 32 + 12 = -4, the minimum value.",
        },
        {
          stepNumber: 6,
          description: "State all results.",
          workingLatex: "b = -8, \\; c = 12, \\; \\text{turning point } (4,\\,-4)",
          explanation:
            "So b = -8, c = 12, and the turning point is (4, -4) — a minimum, since the x^2 coefficient is positive.",
          mafs: `<Mafs viewBox={{ x: [-1, 9], y: [-6, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 8*x + 12} domain={[0, 8]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={0} color="var(--mafs-fg-blue)" />
  <Text x={2} y={0} attach="nw" attachDistance={16}>(2, 0)</Text>
  <Point x={6} y={0} color="var(--mafs-fg-blue)" />
  <Text x={6} y={0} attach="ne" attachDistance={16}>(6, 0)</Text>
  <Point x={4} y={-4} color="var(--mafs-fg-orange)" />
  <Text x={4} y={-4} attach="s" attachDistance={16}>min (4, -4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(b = -8, \\; c = 12, \\; \\text{turning point } (4,\\,-4)\\)",
      canonicalAnswer: "(4,-4)",
    },
  },
  {
    id: "ga27-030",
    topicRef: "ga27",
    topicTitle: "Plotting and interpreting quadratic graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The curve \\(y = x^2 + 2x + 5\\) and the line \\(y = k\\) are drawn on the same axes. Find the smallest value of \\(k\\) for which the line and curve meet (i.e. for which the curve reaches height \\(k\\)).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interpreting quadratic graphs", "minimum", "completing the square", "number of solutions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The curve reaches height k only if k is at least the minimum y.",
          workingLatex: "y = x^{2} + 2x + 5 \\ge y_{\\min}",
          explanation:
            "An upward parabola has a lowest point and never goes below it. A horizontal line y = k meets the curve only when k is at or above that minimum value.",
        },
        {
          stepNumber: 2,
          description: "Halve the coefficient of x to complete the square.",
          workingLatex: "(x + 1)^{2} = x^{2} + 2x + 1",
          explanation:
            "Half of 2 is 1, so the bracket is (x + 1). Expanding (x + 1)^2 gives x^2 + 2x + 1, carrying an extra +1.",
        },
        {
          stepNumber: 3,
          description: "Adjust the constants.",
          workingLatex: "x^{2} + 2x + 5 = (x + 1)^{2} - 1 + 5",
          explanation:
            "Replace x^2 + 2x with (x + 1)^2 - 1 (subtracting the extra +1), then keep the original +5.",
        },
        {
          stepNumber: 4,
          description: "Simplify to completed-square form.",
          workingLatex: "y = (x + 1)^{2} + 4",
          explanation:
            "Combine -1 + 5 = 4, giving y = (x + 1)^2 + 4.",
        },
        {
          stepNumber: 5,
          description: "Identify the minimum.",
          workingLatex: "(x + 1)^{2} \\ge 0 \\Rightarrow y_{\\min} = 4 \\text{ at } x = -1",
          explanation:
            "The square is least (0) at x = -1, so the smallest height the curve reaches is 4.",
        },
        {
          stepNumber: 6,
          description: "State the smallest k.",
          workingLatex: "k = 4",
          explanation:
            "For k below 4 the line lies under the whole curve and they never meet; the smallest k that touches the curve is k = 4, at the turning point (-1, 4).",
          mafs: `<Mafs viewBox={{ x: [-5, 3], y: [0, 14] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 2*x + 5} domain={[-4, 2]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[-5, 4]} point2={[3, 4]} color="var(--mafs-fg-green)" style="dashed" />
  <Text x={2.5} y={4} attach="n" attachDistance={10}>y = 4</Text>
  <Point x={-1} y={4} color="var(--mafs-fg-orange)" />
  <Text x={-1} y={4} attach="s" attachDistance={16}>min (-1, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = 4\\)",
      canonicalAnswer: "4",
    },
  },
];
