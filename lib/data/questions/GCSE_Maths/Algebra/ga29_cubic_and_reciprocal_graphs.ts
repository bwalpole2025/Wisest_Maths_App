/**
 * Topic: Cubic and reciprocal graphs
 * Ref: ga29  (DfE A12)
 * Strand: Algebra — GCSE Maths (Foundation & Higher tiers)
 *
 * Coverage: recognising, plotting, and interpreting cubic graphs
 *   \(y = ax^3 + bx^2 + cx + d\) and reciprocal graphs \(y = \dfrac{k}{x}\).
 *   Key ideas used throughout:
 *     - A CUBIC is a smooth curve. With a positive \(x^3\) term it rises from
 *       bottom-left to top-right; with a negative \(x^3\) term it falls from
 *       top-left to bottom-right. Many cubics have two turning points (a local
 *       max and a local min); some have none.
 *     - For a FACTORISED cubic \(y = (x-a)(x-b)(x-c)\) the curve crosses the
 *       x-axis at \(x = a, b, c\) (set each factor to 0). The y-intercept is the
 *       value at \(x = 0\).
 *     - A RECIPROCAL graph \(y = k/x\) is a hyperbola in two separate branches.
 *       It NEVER touches the axes: \(x = 0\) and \(y = 0\) are asymptotes. For
 *       \(k > 0\) the branches sit in the first and third quadrants; for
 *       \(k < 0\) in the second and fourth.
 *   Clusters:
 *     (1) tables of values for cubics — substitute x to find y (mind \((-)^3\));
 *     (2) recognising / matching cubic shapes to equations (sign of x^3, roots);
 *     (3) roots and intercepts of factorised cubics;
 *     (4) reciprocal y = k/x tables and finding k from a point;
 *     (5) asymptotes and quadrant behaviour of reciprocal graphs;
 *     (6) interpreting & multi-step reasoning (turning points, symmetry, sketch).
 *   Solutions stress: cube the WHOLE value including its sign; read crossings
 *   from factors; reciprocal graphs have asymptotes they approach but never meet;
 *   and a final substitution CHECK where the problem admits one.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga29-001 .. ga29-004  (4)   clean single-idea items
 *   - Standard:   ga29-005 .. ga29-018  (14)
 *   - Challenge:  ga29-019 .. ga29-030  (12)
 * Id range: ga29-001 .. ga29-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions, \\cdot for
 *   multiplication, and braced exponents, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga29-001",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "For the cubic \\(y = x^3\\), find the value of \\(y\\) when \\(x = 2\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "table of values", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 2 into the equation.",
          workingLatex: "y = (2)^3",
          explanation:
            "To find a point on the curve we replace x with the given value. Here x = 2, so y becomes 2 cubed. Writing the 2 in brackets is a good habit, even though it makes no difference for a positive number.",
        },
        {
          stepNumber: 2,
          description: "Write out what cubing means.",
          workingLatex: "(2)^3 = 2 \\cdot 2 \\cdot 2",
          explanation:
            "The small 3 (the index) tells us how many times to multiply the base by itself: three lots of 2 multiplied together, not 2 times 3.",
        },
        {
          stepNumber: 3,
          description: "Multiply out to get y.",
          workingLatex: "y = 2 \\cdot 2 \\cdot 2 = 8",
          explanation:
            "Work along: 2 times 2 is 4, then 4 times 2 is 8. So y = 8 and the curve passes through the point (2, 8).",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [-10, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x} domain={[-2.2, 2.2]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={8} color="blue" />
  <Text x={2} y={8} attach="nw" color="blue">(2, 8)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(8\\)",
      canonicalAnswer: "8",
    },
  },
  {
    id: "ga29-002",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "For the cubic \\(y = x^3\\), find the value of \\(y\\) when \\(x = -3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "table of values", "negative values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -3 into the equation.",
          workingLatex: "y = (-3)^3",
          explanation:
            "Replace x with -3. Keep the brackets around -3 so that the whole value, including its minus sign, gets cubed — not just the 3.",
        },
        {
          stepNumber: 2,
          description: "Write the cube as three factors.",
          workingLatex: "(-3)^3 = (-3) \\cdot (-3) \\cdot (-3)",
          explanation:
            "Cubing means three copies of -3 multiplied together. Keeping each negative sign visible is what stops the most common slip here.",
        },
        {
          stepNumber: 3,
          description: "Multiply the first two factors.",
          workingLatex: "(-3) \\cdot (-3) = +9",
          explanation:
            "A negative times a negative is a positive, so the first two factors give +9.",
        },
        {
          stepNumber: 4,
          description: "Multiply by the last factor, tracking the sign.",
          workingLatex: "y = 9 \\cdot (-3) = -27",
          explanation:
            "Now a positive times a negative is negative: 9 times -3 is -27. So the curve passes through (-3, -27). The classic mistake is to write +27 by cubing only the 3 and forgetting the minus sign.",
          mafs: `<Mafs viewBox={{ x: [-3.5, 3.5], y: [-30, 30] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x} domain={[-3.1, 3.1]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={-27} color="blue" />
  <Text x={-3} y={-27} attach="ne" color="blue">(-3, -27)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-27\\)",
      canonicalAnswer: "-27",
    },
  },
  {
    id: "ga29-003",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "For the reciprocal graph \\(y = \\dfrac{12}{x}\\), find the value of \\(y\\) when \\(x = 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "table of values", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 3 into the equation.",
          workingLatex: "y = \\frac{12}{3}",
          explanation:
            "For a reciprocal graph y = 12/x, the x sits in the denominator (the bottom of the fraction). Replace it with 3.",
        },
        {
          stepNumber: 2,
          description: "Carry out the division.",
          workingLatex: "y = \\frac{12}{3} = 4",
          explanation:
            "12 divided by 3 is 4. So the curve passes through (3, 4). Notice both coordinates are positive — that is the first quadrant, where a positive-k reciprocal graph lives.",
          mafs: `<Mafs viewBox={{ x: [-13, 13], y: [-13, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 12/x} domain={[-12, -0.95]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 12/x} domain={[0.95, 12]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={4} color="blue" />
  <Text x={3} y={4} attach="ne" color="blue">(3, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga29-004",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The cubic \\(y = (x-1)(x-2)(x-5)\\) crosses the x-axis at three points. State the largest \\(x\\)-value at which it crosses.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "roots", "x-intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The curve crosses the x-axis where y = 0.",
          workingLatex: "(x-1)(x-2)(x-5) = 0",
          explanation:
            "Every point on the x-axis has height y = 0, so to find the crossings we set the whole expression equal to zero.",
        },
        {
          stepNumber: 2,
          description: "Use the zero-product rule on each factor.",
          workingLatex: "x - 1 = 0 \\quad\\text{or}\\quad x - 2 = 0 \\quad\\text{or}\\quad x - 5 = 0",
          explanation:
            "A product is zero only when one of the things being multiplied is zero. So each bracket in turn could be the zero one, giving one crossing each.",
        },
        {
          stepNumber: 3,
          description: "Solve to read off the three roots.",
          workingLatex: "x = 1, \\quad x = 2, \\quad x = 5",
          explanation:
            "Each bracket of the form (x - a) is zero when x = a. So the curve crosses at x = 1, 2 and 5.",
        },
        {
          stepNumber: 4,
          description: "Pick the largest root.",
          workingLatex: "\\max\\{1,\\, 2,\\, 5\\} = 5",
          explanation:
            "The question asks only for the largest crossing. Of 1, 2 and 5 the biggest is 5.",
          mafs: `<Mafs viewBox={{ x: [-1, 6.5], y: [-16, 24] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x-1)*(x-2)*(x-5)} domain={[0, 6]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={0} color="blue" />
  <Point x={2} y={0} color="blue" />
  <Point x={5} y={0} color="orange" />
  <Text x={5} y={0} attach="se" color="orange">x = 5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(5\\)",
      canonicalAnswer: "5",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga29-005",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Complete the table of values for \\(y = x^3 - 4x\\) by finding the value of \\(y\\) when \\(x = 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "table of values", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 3 into each term.",
          workingLatex: "y = (3)^3 - 4(3)",
          explanation:
            "Replace every x by 3. There are two terms: the cube term x^3 and the linear term -4x. Keeping them separate for now avoids slips.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the cube term.",
          workingLatex: "(3)^3 = 3 \\cdot 3 \\cdot 3 = 27",
          explanation:
            "3 cubed is three lots of 3 multiplied: 3 times 3 is 9, then 9 times 3 is 27.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the linear term.",
          workingLatex: "4(3) = 12",
          explanation:
            "The term is -4x, so with x = 3 it is -4 times 3 = -12. We compute the size, 12, and carry the minus sign into the next step.",
        },
        {
          stepNumber: 4,
          description: "Combine the two terms.",
          workingLatex: "y = 27 - 12 = 15",
          explanation:
            "Substituting both results back gives 27 - 12 = 15. So when x = 3, y = 15 and the curve passes through (3, 15).",
          mafs: `<Mafs viewBox={{ x: [-3.5, 3.5], y: [-18, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x - 4*x} domain={[-3.2, 3.2]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={15} color="blue" />
  <Text x={3} y={15} attach="nw" color="blue">(3, 15)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(15\\)",
      canonicalAnswer: "15",
    },
  },
  {
    id: "ga29-006",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Complete the table of values for \\(y = x^3 - 4x\\) by finding the value of \\(y\\) when \\(x = -2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "table of values", "negative values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -2, keeping brackets around the negative.",
          workingLatex: "y = (-2)^3 - 4(-2)",
          explanation:
            "Replace each x with -2. Brackets are essential so the minus sign is included both in the cube and in the multiplication that follows.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the cube term.",
          workingLatex: "(-2)^3 = (-2)(-2)(-2) = -8",
          explanation:
            "Three negatives multiplied: (-2)(-2) = +4, then +4 times (-2) = -8. An odd number of negative factors leaves a negative result.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the linear term, watching the double negative.",
          workingLatex: "-4(-2) = +8",
          explanation:
            "The term -4x with x = -2 is -4 times (-2). Two negatives multiply to a positive, so this is +8, not -8.",
        },
        {
          stepNumber: 4,
          description: "Combine the two results.",
          workingLatex: "y = -8 + 8 = 0",
          explanation:
            "Adding gives -8 + 8 = 0, so the curve passes through (-2, 0). A y-value of 0 means this is one of the points where the cubic crosses the x-axis.",
          mafs: `<Mafs viewBox={{ x: [-3.5, 3.5], y: [-18, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x - 4*x} domain={[-3.2, 3.2]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={0} color="blue" />
  <Text x={-2} y={0} attach="nw" color="blue">(-2, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(0\\)",
      canonicalAnswer: "0",
    },
  },
  {
    id: "ga29-007",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Complete the table of values for the reciprocal graph \\(y = \\dfrac{6}{x}\\) by finding \\(y\\) when \\(x = -4\\). Give your answer as a fraction in its simplest form.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "table of values", "negative values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -4 into y = 6/x.",
          workingLatex: "y = \\frac{6}{-4}",
          explanation:
            "Replace x in the denominator with -4. A positive numerator over a negative denominator gives a negative result, so we expect y to be negative.",
        },
        {
          stepNumber: 2,
          description: "Move the sign to the front of the fraction.",
          workingLatex: "y = \\frac{6}{-4} = -\\frac{6}{4}",
          explanation:
            "A fraction with a negative on the bottom is the same as a negative fraction. Writing the minus sign out front makes the next simplification cleaner.",
        },
        {
          stepNumber: 3,
          description: "Cancel the common factor of 2.",
          workingLatex: "-\\frac{6}{4} = -\\frac{3}{2}",
          explanation:
            "Divide top and bottom by their common factor 2: 6 becomes 3 and 4 becomes 2. So y = -3/2 (which is -1.5).",
        },
        {
          stepNumber: 4,
          description: "State the point on the curve.",
          workingLatex: "\\left(-4,\\ -\\frac{3}{2}\\right)",
          explanation:
            "The curve passes through (-4, -3/2). Both coordinates are negative, putting this point in the third quadrant — exactly where y = 6/x lives when both x and y are negative.",
          mafs: `<Mafs viewBox={{ x: [-8, 8], y: [-8, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 6/x} domain={[-7.5, -0.78]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 6/x} domain={[0.78, 7.5]} color="var(--mafs-fg-accent)" />
  <Point x={-4} y={-1.5} color="blue" />
  <Text x={-4} y={-1.5} attach="sw" color="blue">(-4, -3/2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-\\dfrac{3}{2}\\)",
      canonicalAnswer: "-3/2",
    },
  },
  {
    id: "ga29-008",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The graph of \\(y = \\dfrac{k}{x}\\) passes through the point \\((2,\\,9)\\). Find the value of \\(k\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "find k", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the point's coordinates into the equation.",
          workingLatex: "9 = \\frac{k}{2}",
          explanation:
            "Because (2, 9) lies on the curve, x = 2 and y = 9 must make y = k/x true. Putting them in gives 9 = k/2, an equation with k as the only unknown.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 2 to isolate k.",
          workingLatex: "9 \\cdot 2 = k",
          explanation:
            "k is being divided by 2, so we undo that by multiplying both sides by 2. The 2 on the right cancels, leaving k on its own.",
        },
        {
          stepNumber: 3,
          description: "Compute the value of k.",
          workingLatex: "k = 18",
          explanation:
            "9 times 2 is 18, so k = 18 and the equation of the graph is y = 18/x.",
        },
        {
          stepNumber: 4,
          description: "Check by substituting back.",
          workingLatex: "y = \\frac{18}{2} = 9 \\;\\checkmark",
          explanation:
            "Putting x = 2 into y = 18/x gives 18/2 = 9, which matches the y-coordinate we were given. The value k = 18 is confirmed.",
          mafs: `<Mafs viewBox={{ x: [-20, 20], y: [-20, 20] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 18/x} domain={[-18, -0.95]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 18/x} domain={[0.95, 18]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={9} color="blue" />
  <Text x={2} y={9} attach="ne" color="blue">(2, 9)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = 18\\)",
      canonicalAnswer: "18",
    },
  },
  {
    id: "ga29-009",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Find the three values of \\(x\\) where the cubic \\(y = (x+3)(x-1)(x-4)\\) crosses the x-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "roots", "x-intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0 to find where the curve meets the x-axis.",
          workingLatex: "(x+3)(x-1)(x-4) = 0",
          explanation:
            "The x-axis is the line y = 0, so the crossings are exactly the x-values that make the expression zero.",
        },
        {
          stepNumber: 2,
          description: "Apply the zero-product rule to the three factors.",
          workingLatex: "x+3 = 0 \\quad\\text{or}\\quad x-1 = 0 \\quad\\text{or}\\quad x-4 = 0",
          explanation:
            "A product of three brackets equals zero only when at least one bracket is zero. So we solve each bracket separately.",
        },
        {
          stepNumber: 3,
          description: "Solve the first bracket.",
          workingLatex: "x + 3 = 0 \\Rightarrow x = -3",
          explanation:
            "Subtract 3 from both sides. Note the sign flip: a (x + 3) factor gives the negative root x = -3, not +3.",
        },
        {
          stepNumber: 4,
          description: "Solve the remaining two brackets.",
          workingLatex: "x - 1 = 0 \\Rightarrow x = 1, \\qquad x - 4 = 0 \\Rightarrow x = 4",
          explanation:
            "Each (x - a) bracket gives the root x = a directly. So the three x-intercepts are x = -3, 1 and 4.",
          mafs: `<Mafs viewBox={{ x: [-4.5, 5.5], y: [-34, 30] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x+3)*(x-1)*(x-4)} domain={[-3.8, 4.8]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={0} color="blue" />
  <Point x={1} y={0} color="blue" />
  <Point x={4} y={0} color="blue" />
  <Text x={-3} y={0} attach="sw" color="blue">-3</Text>
  <Text x={4} y={0} attach="se" color="blue">4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = -3,\\; 1,\\; 4\\)",
      canonicalAnswer: "{-3, 1, 4}",
    },
  },
  {
    id: "ga29-010",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The cubic \\(y = (x+2)(x-1)(x-3)\\) crosses the y-axis at one point. Find the y-coordinate of that point.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "y-intercept", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The y-axis is where x = 0; substitute x = 0.",
          workingLatex: "y = (0+2)(0-1)(0-3)",
          explanation:
            "A graph crosses the y-axis where x = 0. Put x = 0 into each bracket to find the height there.",
        },
        {
          stepNumber: 2,
          description: "Evaluate each bracket.",
          workingLatex: "y = (2)(-1)(-3)",
          explanation:
            "Work out each bracket: 0 + 2 = 2, 0 - 1 = -1, and 0 - 3 = -3.",
        },
        {
          stepNumber: 3,
          description: "Multiply the first two brackets.",
          workingLatex: "(2)(-1) = -2",
          explanation:
            "Take the brackets in pairs. A positive times a negative is negative, so 2 times -1 is -2.",
        },
        {
          stepNumber: 4,
          description: "Multiply by the last bracket.",
          workingLatex: "y = (-2)(-3) = 6",
          explanation:
            "Now -2 times -3: two negatives give a positive, so y = 6. The y-intercept is the point (0, 6).",
          mafs: `<Mafs viewBox={{ x: [-3.5, 4.5], y: [-26, 22] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x+2)*(x-1)*(x-3)} domain={[-3, 3.9]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={6} color="blue" />
  <Text x={0} y={6} attach="ne" color="blue">(0, 6)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga29-011",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A cubic curve falls from top-left to bottom-right and has the general shape of a negative cubic. Which of these could be its equation: \\(y = x^3\\), \\(y = -x^3\\), or \\(y = \\dfrac{1}{x}\\)? Justify your choice.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "recognising shapes", "matching"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the shape of a positive cubic.",
          workingLatex: "+x^3:\\ \\text{bottom-left} \\to \\text{top-right}",
          explanation:
            "A positive x^3 coefficient makes the cubic rise overall: it comes up from the bottom-left and heads up to the top-right. That is the opposite of the falling shape described, so y = x^3 is ruled out.",
        },
        {
          stepNumber: 2,
          description: "Consider what a negative x^3 term does.",
          workingLatex: "-x^3 = -(x^3):\\ \\text{reflection in the x-axis}",
          explanation:
            "Multiplying x^3 by -1 reflects the whole curve in the x-axis, flipping its overall direction.",
        },
        {
          stepNumber: 3,
          description: "Match the reflected shape to the description.",
          workingLatex: "-x^3:\\ \\text{top-left} \\to \\text{bottom-right}",
          explanation:
            "After the reflection the curve falls overall — from top-left down to bottom-right. This is exactly the shape the question describes.",
        },
        {
          stepNumber: 4,
          description: "Rule out the reciprocal and conclude.",
          workingLatex: "y = \\frac{1}{x}\\ \\text{is a hyperbola} \\Rightarrow y = -x^3",
          explanation:
            "y = 1/x is a reciprocal graph made of two separate branches, not a single smooth cubic, so it cannot be the answer. The falling cubic must be y = -x^3.",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [-12, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(x*x*x)} domain={[-2.25, 2.25]} color="var(--mafs-fg-accent)" />
  <Text x={-2} y={8} attach="e" color="orange">y = -x^3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -x^3\\)",
      canonicalAnswer: "y=-x^3",
    },
  },
  {
    id: "ga29-012",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "State the equations of the two asymptotes of the reciprocal graph \\(y = \\dfrac{5}{x}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "asymptotes"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Consider what happens as x approaches 0.",
          workingLatex: "x \\to 0 \\Rightarrow y = \\frac{5}{x} \\to \\pm\\infty",
          explanation:
            "Dividing 5 by a number ever closer to 0 makes y grow without bound. The curve shoots up (or down) right beside the y-axis but never reaches it.",
        },
        {
          stepNumber: 2,
          description: "Name the vertical asymptote.",
          workingLatex: "x = 0",
          explanation:
            "A line the curve approaches but never touches is an asymptote. Since the curve hugs the y-axis as x nears 0, the line x = 0 is the vertical asymptote.",
        },
        {
          stepNumber: 3,
          description: "Consider what happens as x gets very large.",
          workingLatex: "x \\to \\pm\\infty \\Rightarrow y = \\frac{5}{x} \\to 0",
          explanation:
            "Dividing 5 by a very large number gives a value ever closer to 0. The curve flattens towards the x-axis but never settles on it.",
        },
        {
          stepNumber: 4,
          description: "Name the horizontal asymptote and state both.",
          workingLatex: "y = 0 \\quad \\text{and} \\quad x = 0",
          explanation:
            "The curve hugs the x-axis as x grows, so y = 0 is the horizontal asymptote. The two asymptotes are therefore the coordinate axes themselves: x = 0 and y = 0.",
          mafs: `<Mafs viewBox={{ x: [-10, 10], y: [-10, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 5/x} domain={[-9, -0.55]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 5/x} domain={[0.55, 9]} color="var(--mafs-fg-accent)" />
  <Text x={0} y={9} attach="e" color="orange">x = 0</Text>
  <Text x={9} y={0} attach="n" color="green">y = 0</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 0\\) and \\(y = 0\\)",
      canonicalAnswer: "{x=0, y=0}",
    },
  },
  {
    id: "ga29-013",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "For the cubic \\(y = 2x^3 + 1\\), find the value of \\(y\\) when \\(x = -2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "table of values", "negative values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -2 with brackets.",
          workingLatex: "y = 2(-2)^3 + 1",
          explanation:
            "Replace x with -2. By the order of operations (BIDMAS) the power is dealt with before the multiplication by 2, so we cube first, then multiply.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the cube.",
          workingLatex: "(-2)^3 = (-2)(-2)(-2) = -8",
          explanation:
            "(-2)(-2) = +4, then +4 times (-2) = -8. A negative number cubed stays negative.",
        },
        {
          stepNumber: 3,
          description: "Multiply by the coefficient 2.",
          workingLatex: "2 \\cdot (-8) = -16",
          explanation:
            "Now apply the coefficient: 2 times -8 is -16. Doing this only after cubing is what keeps the order of operations correct.",
        },
        {
          stepNumber: 4,
          description: "Add the constant.",
          workingLatex: "y = -16 + 1 = -15",
          explanation:
            "Finally add the +1: -16 + 1 = -15. So the curve passes through (-2, -15).",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [-19, 19] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x*x*x + 1} domain={[-2.1, 2.1]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={-15} color="blue" />
  <Text x={-2} y={-15} attach="ne" color="blue">(-2, -15)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-15\\)",
      canonicalAnswer: "-15",
    },
  },
  {
    id: "ga29-014",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The reciprocal graph \\(y = \\dfrac{k}{x}\\) has \\(k < 0\\). State the two quadrants in which its branches lie.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "quadrants", "sign of k"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test the sign of y for a positive x.",
          workingLatex: "x > 0,\\ k < 0 \\Rightarrow y = \\frac{k}{x} < 0",
          explanation:
            "A negative number (k) divided by a positive number (x) is negative. So when x is positive, y is negative.",
        },
        {
          stepNumber: 2,
          description: "Name the quadrant for positive x.",
          workingLatex: "x > 0,\\ y < 0:\\ \\text{4th quadrant}",
          explanation:
            "x positive and y negative is the bottom-right region, which is the fourth quadrant. One branch sits there.",
        },
        {
          stepNumber: 3,
          description: "Test the sign of y for a negative x.",
          workingLatex: "x < 0,\\ k < 0 \\Rightarrow y = \\frac{k}{x} > 0",
          explanation:
            "A negative divided by a negative is positive. So when x is negative, y comes out positive: x negative, y positive is the top-left, the second quadrant.",
        },
        {
          stepNumber: 4,
          description: "State both quadrants.",
          workingLatex: "\\text{2nd and 4th quadrants}",
          explanation:
            "With k < 0 the two branches sit in the second and fourth quadrants — the opposite pair to a positive reciprocal graph.",
          mafs: `<Mafs viewBox={{ x: [-9, 9], y: [-9, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -6/x} domain={[-8, -0.7]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -6/x} domain={[0.7, 8]} color="var(--mafs-fg-accent)" />
  <Text x={-4} y={4} attach="e" color="orange">Q2</Text>
  <Text x={4} y={-4} attach="w" color="orange">Q4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{2nd and 4th quadrants}\\)",
      canonicalAnswer: "second and fourth quadrants",
    },
  },
  {
    id: "ga29-015",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Find all the values of \\(x\\) where the cubic \\(y = x(x-3)(x+3)\\) crosses the x-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "roots", "x-intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set y = 0.",
          workingLatex: "x(x-3)(x+3) = 0",
          explanation:
            "The crossings are where y = 0. Note the first factor is just x on its own, which still counts as one of the three factors.",
        },
        {
          stepNumber: 2,
          description: "Apply the zero-product rule.",
          workingLatex: "x = 0 \\quad\\text{or}\\quad x-3 = 0 \\quad\\text{or}\\quad x+3 = 0",
          explanation:
            "Each factor in turn could be the one that is zero. The lone factor x = 0 hands us a root immediately.",
        },
        {
          stepNumber: 3,
          description: "Solve the remaining two brackets.",
          workingLatex: "x - 3 = 0 \\Rightarrow x = 3, \\qquad x + 3 = 0 \\Rightarrow x = -3",
          explanation:
            "x - 3 = 0 gives x = 3, and x + 3 = 0 gives x = -3 (mind the sign flip).",
        },
        {
          stepNumber: 4,
          description: "List the three roots.",
          workingLatex: "x = -3, \\quad x = 0, \\quad x = 3",
          explanation:
            "So the curve crosses at x = -3, 0 and 3. These are evenly spaced and symmetric about the y-axis, which fits this odd-looking but tidy cubic.",
          mafs: `<Mafs viewBox={{ x: [-4.5, 4.5], y: [-24, 24] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*(x-3)*(x+3)} domain={[-3.9, 3.9]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={0} color="blue" />
  <Point x={0} y={0} color="blue" />
  <Point x={3} y={0} color="blue" />
  <Text x={-3} y={0} attach="sw" color="blue">-3</Text>
  <Text x={3} y={0} attach="se" color="blue">3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = -3,\\; 0,\\; 3\\)",
      canonicalAnswer: "{-3, 0, 3}",
    },
  },
  {
    id: "ga29-016",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The reciprocal graph \\(y = \\dfrac{k}{x}\\) passes through \\((-5,\\,4)\\). Find the value of \\(k\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "find k", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the point into the equation.",
          workingLatex: "4 = \\frac{k}{-5}",
          explanation:
            "The point (-5, 4) is on the curve, so x = -5 and y = 4 must satisfy y = k/x. Substituting gives 4 = k/(-5).",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by -5 to isolate k.",
          workingLatex: "4 \\cdot (-5) = k",
          explanation:
            "k is being divided by -5, so multiply both sides by -5 to undo that. The -5 on the right cancels, leaving k alone.",
        },
        {
          stepNumber: 3,
          description: "Compute k.",
          workingLatex: "k = -20",
          explanation:
            "4 times -5 is -20, so k = -20. A negative k is exactly what we expect, since the point (-5, 4) sits in the second quadrant.",
        },
        {
          stepNumber: 4,
          description: "Check by substituting back.",
          workingLatex: "y = \\frac{-20}{-5} = 4 \\;\\checkmark",
          explanation:
            "Putting x = -5 into y = -20/x gives -20 divided by -5 = 4, matching the y-coordinate. So k = -20 is confirmed.",
          mafs: `<Mafs viewBox={{ x: [-22, 22], y: [-22, 22] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -20/x} domain={[-20, -0.95]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -20/x} domain={[0.95, 20]} color="var(--mafs-fg-accent)" />
  <Point x={-5} y={4} color="blue" />
  <Text x={-5} y={4} attach="ne" color="blue">(-5, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = -20\\)",
      canonicalAnswer: "-20",
    },
  },
  {
    id: "ga29-017",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A smooth curve passes through the origin, has rotational symmetry about the origin, and gets steeper as \\(|x|\\) increases, rising from bottom-left to top-right. Is it more likely to be a cubic of the form \\(y = ax^3\\) or a reciprocal of the form \\(y = \\dfrac{k}{x}\\)? Explain.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "recognising shapes", "matching", "interpreting"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test the reciprocal against 'passes through the origin'.",
          workingLatex: "x = 0 \\Rightarrow y = \\frac{k}{0}\\ \\text{is undefined}",
          explanation:
            "At x = 0 a reciprocal would require dividing by zero, which is undefined. So y = k/x has a gap (an asymptote) at the origin and cannot pass through it.",
        },
        {
          stepNumber: 2,
          description: "Rule out the reciprocal.",
          workingLatex: "y = \\frac{k}{x}\\ \\text{cannot pass through } (0,0)",
          explanation:
            "Because the described curve does go through the origin, it cannot be a reciprocal graph. That leaves the cubic to check.",
        },
        {
          stepNumber: 3,
          description: "Check the cubic against every clue.",
          workingLatex: "y = ax^3:\\ (0,0)\\ \\text{on it};\\ (-x)^3 = -(x^3)",
          explanation:
            "y = ax^3 passes through (0, 0), and because (-x)^3 = -(x^3) it has rotational symmetry about the origin. With a > 0 it rises from bottom-left to top-right and steepens as |x| grows. Every clue fits.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "y = ax^3",
          explanation:
            "Only the cubic matches all the features, so the curve is of the form y = ax^3 (with a > 0).",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [-12, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x} domain={[-2.25, 2.25]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="blue" />
  <Text x={1.4} y={4} attach="e" color="orange">y = ax^3, a &gt; 0</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = ax^3\\)",
      canonicalAnswer: "y=ax^3",
    },
  },
  {
    id: "ga29-018",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "For the cubic \\(y = x^3 - 6x^2 + 11x - 6\\), show by substitution that \\(x = 2\\) is a root, i.e. find \\(y\\) when \\(x = 2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "roots", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 2 into every term.",
          workingLatex: "y = (2)^3 - 6(2)^2 + 11(2) - 6",
          explanation:
            "Replace each x with 2. A value is a root when substituting it gives y = 0, so we evaluate carefully and aim to show the terms cancel.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the two powers first.",
          workingLatex: "(2)^3 = 8, \\qquad (2)^2 = 4",
          explanation:
            "By BIDMAS the powers come before the multiplications. 2 cubed is 8 and 2 squared is 4.",
        },
        {
          stepNumber: 3,
          description: "Carry out the multiplications.",
          workingLatex: "y = 8 - 6 \\cdot 4 + 11 \\cdot 2 - 6 = 8 - 24 + 22 - 6",
          explanation:
            "Apply each coefficient: -6 times 4 = -24 and 11 times 2 = 22. This leaves the four numbers 8 - 24 + 22 - 6.",
        },
        {
          stepNumber: 4,
          description: "Add the terms left to right.",
          workingLatex: "8 - 24 + 22 - 6 = -16 + 22 - 6 = 6 - 6 = 0",
          explanation:
            "Working along: 8 - 24 = -16, then -16 + 22 = 6, then 6 - 6 = 0. Since y = 0, x = 2 is indeed a root.",
          mafs: `<Mafs viewBox={{ x: [-0.5, 4], y: [-8, 5] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x - 6*x*x + 11*x - 6} domain={[0, 3.6]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={0} color="blue" />
  <Text x={2} y={0} attach="n" color="blue">(2, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(0\\)",
      canonicalAnswer: "0",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga29-019",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The cubic \\(y = x^3 - 7x + 6\\) has a root at \\(x = 1\\). Find the value of \\(y\\) when \\(x = -3\\), and state whether \\((-3,\\,y)\\) lies above or below the x-axis.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "substitution", "interpreting", "negative values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -3 with brackets.",
          workingLatex: "y = (-3)^3 - 7(-3) + 6",
          explanation:
            "Replace each x with -3. The brackets keep the minus sign attached to the 3 in both the cube and the multiplication.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the cube term.",
          workingLatex: "(-3)^3 = (-3)(-3)(-3) = -27",
          explanation:
            "(-3)(-3) = +9, then +9 times (-3) = -27. An odd power of a negative is negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the linear term, minding the double negative.",
          workingLatex: "-7(-3) = +21",
          explanation:
            "-7 multiplied by -3 gives +21, because a negative times a negative is positive.",
        },
        {
          stepNumber: 4,
          description: "Combine all three terms.",
          workingLatex: "y = -27 + 21 + 6 = 0",
          explanation:
            "Add in order: -27 + 21 = -6, then -6 + 6 = 0. So y = 0.",
        },
        {
          stepNumber: 5,
          description: "Interpret the result.",
          workingLatex: "y = 0 \\Rightarrow (-3, 0)\\ \\text{is ON the x-axis}",
          explanation:
            "Because y = 0, the point lies exactly on the x-axis (it is in fact another root of the cubic), so it is neither above nor below — it sits right on the axis.",
          mafs: `<Mafs viewBox={{ x: [-4, 3.5], y: [-13, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x - 7*x + 6} domain={[-3.3, 2.7]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={0} color="blue" />
  <Text x={-3} y={0} attach="sw" color="blue">(-3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 0\\) (on the x-axis)",
      canonicalAnswer: "0",
    },
  },
  {
    id: "ga29-020",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A cubic crosses the x-axis at \\(x = -2\\), \\(x = 1\\) and \\(x = 4\\), and has a positive \\(x^3\\) coefficient of 1. Write its equation in factorised form, then find its y-intercept.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "roots", "factorised form", "y-intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Turn each root into a factor.",
          workingLatex: "x = -2 \\to (x+2), \\quad x = 1 \\to (x-1), \\quad x = 4 \\to (x-4)",
          explanation:
            "If x = a is a root then (x - a) is a factor. A root at x = -2 gives (x - (-2)) = (x + 2); the others give (x - 1) and (x - 4). Watch the sign on the negative root.",
        },
        {
          stepNumber: 2,
          description: "Combine the factors and check the leading coefficient.",
          workingLatex: "y = (x+2)(x-1)(x-4)",
          explanation:
            "Multiplying the three factors gives a cubic whose x^3 coefficient is 1 times 1 times 1 = 1, which matches the requirement. So no extra multiplier out front is needed.",
        },
        {
          stepNumber: 3,
          description: "Find the y-intercept by setting x = 0.",
          workingLatex: "y = (0+2)(0-1)(0-4) = (2)(-1)(-4)",
          explanation:
            "The y-intercept is the value at x = 0. Substitute 0 into each bracket to get 2, -1 and -4.",
        },
        {
          stepNumber: 4,
          description: "Multiply the first two brackets.",
          workingLatex: "(2)(-1) = -2",
          explanation:
            "Take the product in pairs: 2 times -1 is -2.",
        },
        {
          stepNumber: 5,
          description: "Multiply by the last bracket.",
          workingLatex: "y = (-2)(-4) = 8",
          explanation:
            "-2 times -4 gives +8 (two negatives make a positive). So the y-intercept is (0, 8).",
          mafs: `<Mafs viewBox={{ x: [-3.5, 5.5], y: [-30, 30] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x+2)*(x-1)*(x-4)} domain={[-2.9, 4.9]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={8} color="blue" />
  <Text x={0} y={8} attach="ne" color="blue">(0, 8)</Text>
  <Point x={-2} y={0} color="orange" />
  <Point x={1} y={0} color="orange" />
  <Point x={4} y={0} color="orange" />
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = (x+2)(x-1)(x-4)\\), y-intercept \\(8\\)",
      canonicalAnswer: "8",
    },
  },
  {
    id: "ga29-021",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The graph of \\(y = \\dfrac{k}{x}\\) passes through \\((4,\\,3)\\). Using the same value of \\(k\\), find the value of \\(y\\) when \\(x = -6\\). Give your answer as a fraction in its simplest form.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "find k", "table of values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the given point to set up an equation in k.",
          workingLatex: "3 = \\frac{k}{4}",
          explanation:
            "The point (4, 3) lies on y = k/x, so x = 4 and y = 3 must satisfy it. This gives 3 = k/4.",
        },
        {
          stepNumber: 2,
          description: "Solve for k.",
          workingLatex: "k = 3 \\cdot 4 = 12",
          explanation:
            "Multiply both sides by 4 to undo the division: k = 12. So the curve is y = 12/x.",
        },
        {
          stepNumber: 3,
          description: "Substitute x = -6 into the now-known equation.",
          workingLatex: "y = \\frac{12}{-6}",
          explanation:
            "With k fixed at 12, replace x with -6 in y = 12/x. A positive over a negative will give a negative result.",
        },
        {
          stepNumber: 4,
          description: "Simplify the fraction.",
          workingLatex: "y = \\frac{12}{-6} = -2",
          explanation:
            "12 divided by -6 is -2. So the curve also passes through (-6, -2).",
        },
        {
          stepNumber: 5,
          description: "Check using the product rule x·y = k.",
          workingLatex: "x \\cdot y = (-6)(-2) = 12 = k \\;\\checkmark",
          explanation:
            "For y = k/x the product x times y always equals k. Here (-6)(-2) = 12 = k, which confirms the answer.",
          mafs: `<Mafs viewBox={{ x: [-14, 14], y: [-14, 14] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 12/x} domain={[-12, -0.9]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 12/x} domain={[0.9, 12]} color="var(--mafs-fg-accent)" />
  <Point x={4} y={3} color="blue" />
  <Text x={4} y={3} attach="ne" color="blue">(4, 3)</Text>
  <Point x={-6} y={-2} color="orange" />
  <Text x={-6} y={-2} attach="sw" color="orange">(-6, -2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-2\\)",
      canonicalAnswer: "-2",
    },
  },
  {
    id: "ga29-022",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Find all the points (with both coordinates) where the cubic \\(y = x^3 - 9x\\) crosses the coordinate axes.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "roots", "intercepts", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the y-intercept by setting x = 0.",
          workingLatex: "y = (0)^3 - 9(0) = 0 \\Rightarrow (0, 0)",
          explanation:
            "At x = 0 both terms vanish, so the curve passes through the origin (0, 0). That gives the y-intercept.",
        },
        {
          stepNumber: 2,
          description: "For the x-intercepts set y = 0 and take out a common factor.",
          workingLatex: "x^3 - 9x = 0 \\Rightarrow x(x^2 - 9) = 0",
          explanation:
            "The x-intercepts are where y = 0. Both terms share a factor of x, so we factor it out, leaving the bracket x^2 - 9.",
        },
        {
          stepNumber: 3,
          description: "Factorise the difference of two squares.",
          workingLatex: "x(x-3)(x+3) = 0",
          explanation:
            "x^2 - 9 = x^2 - 3^2 is a difference of two squares, which factorises as (x - 3)(x + 3). Now the cubic is fully split into three linear factors.",
        },
        {
          stepNumber: 4,
          description: "Solve for the three roots.",
          workingLatex: "x = 0, \\quad x = 3, \\quad x = -3",
          explanation:
            "Setting each factor to zero gives x = 0, x = 3 and x = -3 — the three x-intercepts.",
        },
        {
          stepNumber: 5,
          description: "List every axis-crossing point.",
          workingLatex: "(-3, 0), \\quad (0, 0), \\quad (3, 0)",
          explanation:
            "All three crossings have y = 0, and the origin doubles as both an x-intercept and the y-intercept. So the curve meets the axes at (-3, 0), (0, 0) and (3, 0).",
          mafs: `<Mafs viewBox={{ x: [-4.5, 4.5], y: [-24, 24] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x - 9*x} domain={[-3.9, 3.9]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={0} color="blue" />
  <Point x={0} y={0} color="blue" />
  <Point x={3} y={0} color="blue" />
  <Text x={-3} y={0} attach="sw" color="blue">(-3, 0)</Text>
  <Text x={3} y={0} attach="se" color="blue">(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((-3,0),\\ (0,0),\\ (3,0)\\)",
      canonicalAnswer: "{(-3,0), (0,0), (3,0)}",
    },
  },
  {
    id: "ga29-023",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The reciprocal graph \\(y = \\dfrac{8}{x}\\) and the line \\(y = x\\) intersect. Find the coordinates of both points of intersection.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "intersection", "simultaneous"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the two expressions for y equal.",
          workingLatex: "x = \\frac{8}{x}",
          explanation:
            "At an intersection both graphs share the same y at the same x. Substituting y = x into y = 8/x gives x = 8/x.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by x to clear the fraction.",
          workingLatex: "x^2 = 8",
          explanation:
            "Multiplying both sides by x removes the denominator (and x = 0 is not a solution, since 8/0 is undefined). This leaves x^2 = 8.",
        },
        {
          stepNumber: 3,
          description: "Take square roots, keeping both signs.",
          workingLatex: "x = \\pm\\sqrt{8}",
          explanation:
            "Square-rooting both sides must allow both a positive and a negative root, because both square to 8. Dropping the minus root would lose a whole intersection point.",
        },
        {
          stepNumber: 4,
          description: "Simplify the surd.",
          workingLatex: "\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2} \\Rightarrow x = \\pm 2\\sqrt{2}",
          explanation:
            "8 = 4 times 2 and 4 is a perfect square, so sqrt(8) = sqrt(4) times sqrt(2) = 2 sqrt(2). Hence x = +2 sqrt(2) or x = -2 sqrt(2).",
        },
        {
          stepNumber: 5,
          description: "Find each matching y from y = x and state the points.",
          workingLatex: "(2\\sqrt{2},\\ 2\\sqrt{2}) \\quad \\text{and} \\quad (-2\\sqrt{2},\\ -2\\sqrt{2})",
          explanation:
            "Because the line is y = x, each y equals its x. The two branches of the reciprocal graph (in the 1st and 3rd quadrants) each meet the line once, at (2 sqrt 2, 2 sqrt 2) and (-2 sqrt 2, -2 sqrt 2).",
          mafs: `<Mafs viewBox={{ x: [-8, 8], y: [-8, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 8/x} domain={[-7.5, -1.05]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 8/x} domain={[1.05, 7.5]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => x} domain={[-7, 7]} color="green" />
  <Point x={2.828} y={2.828} color="blue" />
  <Text x={2.828} y={2.828} attach="nw" color="blue">(2&radic;2, 2&radic;2)</Text>
  <Point x={-2.828} y={-2.828} color="blue" />
</Mafs>`,
        },
      ],
      finalAnswer: "\\((2\\sqrt{2},\\,2\\sqrt{2})\\) and \\((-2\\sqrt{2},\\,-2\\sqrt{2})\\)",
      canonicalAnswer: "{(2*sqrt(2),2*sqrt(2)), (-2*sqrt(2),-2*sqrt(2))}",
    },
  },
  {
    id: "ga29-024",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The cubic \\(y = (x-1)^2(x-4)\\) touches the x-axis at one point and crosses at another. Find the y-intercept of the curve.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "repeated root", "y-intercept", "interpreting"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off the behaviour at each root (context only).",
          workingLatex: "(x-1)^2 \\to \\text{touch at } x=1, \\quad (x-4) \\to \\text{cross at } x=4",
          explanation:
            "The squared factor (x-1)^2 means the curve touches the x-axis at x = 1 (a repeated root), while the single factor (x-4) means it crosses at x = 4. This is background; the y-intercept only needs x = 0.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 0.",
          workingLatex: "y = (0-1)^2(0-4)",
          explanation:
            "The y-intercept is the height at x = 0. Put 0 into the equation.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the squared bracket.",
          workingLatex: "(0-1)^2 = (-1)^2 = 1",
          explanation:
            "0 - 1 = -1, and squaring a negative removes the sign: (-1)^2 = 1.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the remaining bracket.",
          workingLatex: "(0 - 4) = -4",
          explanation:
            "The single factor at x = 0 is 0 - 4 = -4.",
        },
        {
          stepNumber: 5,
          description: "Multiply to get the y-intercept.",
          workingLatex: "y = 1 \\cdot (-4) = -4",
          explanation:
            "1 times -4 is -4, so the y-intercept is the point (0, -4).",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-13, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x-1)*(x-1)*(x-4)} domain={[-0.5, 4.6]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-4} color="blue" />
  <Text x={0} y={-4} attach="w" color="blue">(0, -4)</Text>
  <Point x={1} y={0} color="orange" />
  <Text x={1} y={0} attach="ne" color="orange">touch x=1</Text>
  <Point x={4} y={0} color="green" />
  <Text x={4} y={0} attach="se" color="green">cross x=4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-4\\)",
      canonicalAnswer: "-4",
    },
  },
  {
    id: "ga29-025",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Two reciprocal graphs are \\(y = \\dfrac{6}{x}\\) and \\(y = -\\dfrac{6}{x}\\). Describe how the second graph is obtained from the first, and state which quadrants each occupies.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "transformations", "quadrants", "interpreting"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Relate the two equations.",
          workingLatex: "y = -\\frac{6}{x} = -\\left(\\frac{6}{x}\\right)",
          explanation:
            "The second equation is exactly the negative of the first: every y-value of y = 6/x is multiplied by -1.",
        },
        {
          stepNumber: 2,
          description: "Interpret multiplying y by -1 as a transformation.",
          workingLatex: "y \\to -y:\\ \\text{reflection in the x-axis}",
          explanation:
            "Replacing y by -y reflects the whole graph in the x-axis. So y = -6/x is the reflection of y = 6/x in the x-axis. (Because of the graph's symmetry this is also a reflection in the y-axis.)",
        },
        {
          stepNumber: 3,
          description: "State the quadrants of the first graph.",
          workingLatex: "k = 6 > 0 \\Rightarrow \\text{1st and 3rd quadrants}",
          explanation:
            "With positive k, y = 6/x has x and y of the same sign, so it occupies the first quadrant (both positive) and the third (both negative).",
        },
        {
          stepNumber: 4,
          description: "State the quadrants of the reflected graph.",
          workingLatex: "k = -6 < 0 \\Rightarrow \\text{2nd and 4th quadrants}",
          explanation:
            "After reflection, y = -6/x has x and y of opposite signs, so it lies in the second and fourth quadrants — the gaps left by the first graph.",
          mafs: `<Mafs viewBox={{ x: [-9, 9], y: [-9, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 6/x} domain={[-8, -0.7]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 6/x} domain={[0.7, 8]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -6/x} domain={[-8, -0.7]} color="orange" />
  <Plot.OfX y={(x) => -6/x} domain={[0.7, 8]} color="orange" />
  <Text x={5} y={5} attach="w" color="var(--mafs-fg-accent)">y = 6/x</Text>
  <Text x={-5} y={5} attach="e" color="orange">y = -6/x</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "\\(y = -\\dfrac{6}{x}\\) is \\(y = \\dfrac{6}{x}\\) reflected in the x-axis; original in Q1 & Q3, reflection in Q2 & Q4.",
      canonicalAnswer: "reflection in the x-axis; Q1&Q3 to Q2&Q4",
    },
  },
  {
    id: "ga29-026",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A cubic of the form \\(y = ax^3\\) passes through the point \\((2,\\,40)\\). Find the value of \\(a\\), then find \\(y\\) when \\(x = -1\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "find coefficient", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the known point to form an equation in a.",
          workingLatex: "40 = a(2)^3",
          explanation:
            "The point (2, 40) lies on y = ax^3, so put x = 2 and y = 40. The only unknown left is the coefficient a.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the cube.",
          workingLatex: "(2)^3 = 8 \\Rightarrow 40 = 8a",
          explanation:
            "2 cubed is 8, so the equation simplifies to 40 = 8a.",
        },
        {
          stepNumber: 3,
          description: "Solve for a.",
          workingLatex: "a = \\frac{40}{8} = 5",
          explanation:
            "Divide both sides by 8: a = 5. So the equation of the curve is y = 5x^3.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = -1 into y = 5x^3.",
          workingLatex: "y = 5(-1)^3",
          explanation:
            "Now use the completed equation with x = -1. Keep the bracket so the minus sign is cubed.",
        },
        {
          stepNumber: 5,
          description: "Evaluate to find y.",
          workingLatex: "y = 5 \\cdot (-1) = -5",
          explanation:
            "(-1)^3 = -1, and 5 times -1 = -5. So when x = -1, y = -5 and the curve passes through (-1, -5).",
          mafs: `<Mafs viewBox={{ x: [-2, 2], y: [-18, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 5*x*x*x} domain={[-1.5, 1.5]} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={-5} color="blue" />
  <Text x={-1} y={-5} attach="ne" color="blue">(-1, -5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(a = 5,\\ y = -5\\)",
      canonicalAnswer: "-5",
    },
  },
  {
    id: "ga29-027",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The cubic \\(y = x^3 - 3x^2 + 4\\) has a turning point at \\(x = 0\\) and another at \\(x = 2\\). Find the y-coordinates of both turning points, then state the difference in height between them.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "turning points", "substitution", "interpreting"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the y-coordinate at the first turning point x = 0.",
          workingLatex: "y = (0)^3 - 3(0)^2 + 4 = 4",
          explanation:
            "Substitute x = 0: both x-terms vanish, leaving the constant 4. So the first turning point is (0, 4).",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 2 for the second turning point.",
          workingLatex: "y = (2)^3 - 3(2)^2 + 4",
          explanation:
            "Replace each x with 2. We evaluate the powers before multiplying, following BIDMAS.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the powers.",
          workingLatex: "(2)^3 = 8, \\qquad (2)^2 = 4",
          explanation:
            "2 cubed is 8 and 2 squared is 4.",
        },
        {
          stepNumber: 4,
          description: "Apply the coefficient and combine.",
          workingLatex: "y = 8 - 3 \\cdot 4 + 4 = 8 - 12 + 4 = 0",
          explanation:
            "-3 times 4 = -12, then 8 - 12 + 4 = 0. So the second turning point is (2, 0).",
        },
        {
          stepNumber: 5,
          description: "Find the difference in height.",
          workingLatex: "4 - 0 = 4",
          explanation:
            "The two turning points are at heights 4 and 0; their vertical difference is 4 - 0 = 4. Here (0, 4) is the local maximum and (2, 0) the local minimum.",
          mafs: `<Mafs viewBox={{ x: [-2, 4], y: [-6, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x - 3*x*x + 4} domain={[-1.4, 3.2]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={4} color="blue" />
  <Text x={0} y={4} attach="nw" color="blue">(0, 4) max</Text>
  <Point x={2} y={0} color="orange" />
  <Text x={2} y={0} attach="se" color="orange">(2, 0) min</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((0,4)\\) and \\((2,0)\\); difference \\(4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga29-028",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The points \\((3,\\,a)\\) and \\((b,\\,2)\\) both lie on the graph of \\(y = \\dfrac{18}{x}\\). Find the values of \\(a\\) and \\(b\\), and hence the value of \\(a + b\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "reciprocal graphs", "substitution", "find unknown"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the first point to find a.",
          workingLatex: "a = \\frac{18}{3} = 6",
          explanation:
            "The point (3, a) is on y = 18/x, so a is just the value of y when x = 3: a = 18/3 = 6.",
        },
        {
          stepNumber: 2,
          description: "Set up the equation for the second point.",
          workingLatex: "2 = \\frac{18}{b}",
          explanation:
            "The point (b, 2) is also on the curve, so substitute y = 2 with x = b unknown: 2 = 18/b. This time the unknown is in the denominator.",
        },
        {
          stepNumber: 3,
          description: "Multiply both sides by b.",
          workingLatex: "2b = 18",
          explanation:
            "Clear the fraction by multiplying both sides by b. This frees b from the denominator.",
        },
        {
          stepNumber: 4,
          description: "Solve for b.",
          workingLatex: "b = \\frac{18}{2} = 9",
          explanation:
            "Divide both sides by 2: b = 9.",
        },
        {
          stepNumber: 5,
          description: "Add the two values and check.",
          workingLatex: "a + b = 6 + 9 = 15; \\quad \\frac{18}{3} = 6 \\;\\checkmark, \\; \\frac{18}{9} = 2 \\;\\checkmark",
          explanation:
            "With a = 6 and b = 9 the sum is 15. Substituting both points back into y = 18/x checks out, confirming the answer.",
          mafs: `<Mafs viewBox={{ x: [-20, 20], y: [-20, 20] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 18/x} domain={[-18, -0.95]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 18/x} domain={[0.95, 18]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={6} color="blue" />
  <Text x={3} y={6} attach="ne" color="blue">(3, 6)</Text>
  <Point x={9} y={2} color="orange" />
  <Text x={9} y={2} attach="ne" color="orange">(9, 2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(a + b = 15\\)",
      canonicalAnswer: "15",
    },
  },
  {
    id: "ga29-029",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Explain why the curve \\(y = x^3\\) and the curve \\(y = \\dfrac{1}{x}\\) both pass through the point \\((1,\\,1)\\), but only one of them also passes through \\((-1,\\,-1)\\). Determine which.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "reciprocal graphs", "interpreting", "comparing"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test (1, 1) on the cubic.",
          workingLatex: "y = (1)^3 = 1 \\;\\checkmark",
          explanation:
            "Substituting x = 1 into y = x^3 gives 1, matching the y-coordinate, so (1, 1) is on the cubic.",
        },
        {
          stepNumber: 2,
          description: "Test (1, 1) on the reciprocal.",
          workingLatex: "y = \\frac{1}{1} = 1 \\;\\checkmark",
          explanation:
            "Substituting x = 1 into y = 1/x also gives 1, so (1, 1) is on the reciprocal too. Both curves pass through (1, 1).",
        },
        {
          stepNumber: 3,
          description: "Test (-1, -1) on the cubic.",
          workingLatex: "y = (-1)^3 = -1 \\;\\checkmark",
          explanation:
            "(-1)^3 = -1, which matches, so (-1, -1) IS on y = x^3.",
        },
        {
          stepNumber: 4,
          description: "Test (-1, -1) on the reciprocal.",
          workingLatex: "y = \\frac{1}{-1} = -1 \\;\\checkmark",
          explanation:
            "1 divided by -1 is also -1, which matches as well. So this point lies on the reciprocal too — contradicting the question's hint that only one curve passes through it.",
        },
        {
          stepNumber: 5,
          description: "Resolve the question using oddness.",
          workingLatex: "\\text{both odd} \\Rightarrow \\text{both pass through } (-1,-1)",
          explanation:
            "The premise that only one passes through (-1, -1) is false. Both y = x^3 and y = 1/x are odd functions, so each has rotational symmetry about the origin that sends (1, 1) to (-1, -1). The correct conclusion is that BOTH curves pass through (-1, -1).",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [-4, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x} domain={[-1.55, 1.55]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 1/x} domain={[-3, -0.26]} color="green" />
  <Plot.OfX y={(x) => 1/x} domain={[0.26, 3]} color="green" />
  <Point x={1} y={1} color="blue" />
  <Text x={1} y={1} attach="se" color="blue">(1, 1)</Text>
  <Point x={-1} y={-1} color="orange" />
  <Text x={-1} y={-1} attach="nw" color="orange">(-1, -1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Both curves pass through } (-1,-1)\\)",
      canonicalAnswer: "both",
    },
  },
  {
    id: "ga29-030",
    topicRef: "ga29",
    topicTitle: "Cubic and reciprocal graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A cubic \\(y = x^3 + bx\\) passes through the point \\((2,\\,2)\\). Find the value of \\(b\\), and hence find the value of \\(y\\) when \\(x = -2\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic and reciprocal graphs", "cubic graphs", "find coefficient", "substitution", "negative values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the point (2, 2) to form an equation in b.",
          workingLatex: "2 = (2)^3 + b(2)",
          explanation:
            "The point lies on the curve, so put x = 2 and y = 2 into y = x^3 + bx. The only unknown is the coefficient b.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the cube term.",
          workingLatex: "(2)^3 = 8 \\Rightarrow 2 = 8 + 2b",
          explanation:
            "2 cubed is 8, so the equation becomes 2 = 8 + 2b.",
        },
        {
          stepNumber: 3,
          description: "Subtract 8 from both sides.",
          workingLatex: "2 - 8 = 2b \\Rightarrow -6 = 2b",
          explanation:
            "Move the constant across to isolate the b-term: 2 - 8 = -6, so 2b = -6.",
        },
        {
          stepNumber: 4,
          description: "Solve for b.",
          workingLatex: "b = \\frac{-6}{2} = -3",
          explanation:
            "Divide both sides by 2: b = -3. So the curve is y = x^3 - 3x.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = -2 and evaluate each term.",
          workingLatex: "y = (-2)^3 - 3(-2);\\quad (-2)^3 = -8,\\ -3(-2) = +6",
          explanation:
            "Use the completed equation with x = -2, brackets kept. (-2)^3 = -8, and -3 times -2 = +6 (negative times negative).",
        },
        {
          stepNumber: 6,
          description: "Combine the terms.",
          workingLatex: "y = -8 + 6 = -2",
          explanation:
            "Adding gives -8 + 6 = -2. So when x = -2, y = -2. This fits y = x^3 - 3x being an odd function: x = 2 gave y = 2, so x = -2 gives y = -2.",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [-7, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x*x - 3*x} domain={[-2.3, 2.3]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={2} color="orange" />
  <Text x={2} y={2} attach="nw" color="orange">(2, 2)</Text>
  <Point x={-2} y={-2} color="blue" />
  <Text x={-2} y={-2} attach="se" color="blue">(-2, -2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(b = -3,\\ y = -2\\)",
      canonicalAnswer: "-2",
    },
  },
];
