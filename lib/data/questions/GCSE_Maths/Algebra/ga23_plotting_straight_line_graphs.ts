/**
 * Topic: Plotting straight-line graphs
 * Ref: ga23  (DfE A9)
 * Strand: Algebra — GCSE Maths (Both tiers — Foundation & Higher)
 *
 * Coverage: GENERATING COORDINATES and plotting straight lines from their
 *   equations. The "plotting" is described in words — we produce the
 *   coordinate table; no rendered diagram is required. Clusters:
 *   (1) complete a table of values for y = mx + c (and forms such as
 *       y = 2x - 1, y = -x + 4) for given x-values;
 *   (2) decide whether a given point lies on a line (substitute the
 *       x-coordinate and compare the computed y with the point's y);
 *   (3) horizontal and vertical lines x = a and y = b;
 *   (4) find where a line crosses the axes (set x = 0 for the y-intercept,
 *       set y = 0 for the x-intercept);
 *   (5) equations in implicit form such as x + y = 5 or 2x + y = 6 — build a
 *       table / find axis intercepts ready to plot.
 *   Gradient / intercept INTERPRETATION is a separate bank (ga24) and is not
 *   covered here.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga23-001 .. ga23-004  (4)
 *   - Standard:   ga23-005 .. ga23-018  (14)
 *   - Challenge:  ga23-019 .. ga23-030  (12)
 * Id range: ga23-001 .. ga23-030.
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
    id: "ga23-001",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The line has equation \\(y = x + 3\\). Complete the table of values by finding \\(y\\) when \\(x = 2\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "table of values", "y=mx+c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down the equation and the x-value.",
          workingLatex: "y = x + 3, \\quad x = 2",
          explanation:
            "Each column of a table of values is one point on the line. We are told x = 2, and the equation y = x + 3 tells us how to turn that x into its matching y.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 2 into the equation.",
          workingLatex: "y = 2 + 3",
          explanation:
            "Replace the x in y = x + 3 by the number 2. The '+ 3' stays exactly as it is — only the x changes.",
        },
        {
          stepNumber: 3,
          description: "Work out the sum.",
          workingLatex: "y = 2 + 3 = 5",
          explanation:
            "2 + 3 = 5, so when x = 2 the line passes through the point (2, 5). Check: starting at (0, 3), every step right of 1 raises y by 1, and two steps right gives 3 + 2 = 5.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-1, 8] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x + 3} color="var(--mafs-fg-accent)" />
  <Point x={2} y={5} color="var(--mafs-fg-blue)" />
  <Text x={2} y={5} attach="e" attachDistance={18}>(2, 5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga23-002",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A line has equation \\(y = 2x - 1\\). Find the value of \\(y\\) when \\(x = 4\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "table of values", "y=mx+c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 4 into the equation.",
          workingLatex: "y = 2x - 1 = 2 \\cdot 4 - 1",
          explanation:
            "Replace x by 4. The 2x means '2 times x', so 2x becomes 2 multiplied by 4. The '- 1' is left untouched for now.",
        },
        {
          stepNumber: 2,
          description: "Do the multiplication first.",
          workingLatex: "2 \\cdot 4 = 8, \\quad \\text{so } y = 8 - 1",
          explanation:
            "Order of operations says multiply before subtracting, so work out 2 · 4 = 8 first. A common slip is to read left-to-right and try to compute (2 minus something); always do the multiplication first.",
        },
        {
          stepNumber: 3,
          description: "Complete the subtraction.",
          workingLatex: "y = 8 - 1 = 7",
          explanation:
            "8 - 1 = 7, so when x = 4 the line passes through the point (4, 7).",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-2, 8] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2 * x - 1} color="var(--mafs-fg-accent)" />
  <Point x={4} y={7} color="var(--mafs-fg-blue)" />
  <Text x={4} y={7} attach="w" attachDistance={18}>(4, 7)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 7\\)",
      canonicalAnswer: "7",
    },
  },
  {
    id: "ga23-003",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Complete the table of values for \\(y = x + 1\\): \\[\\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline y & ? & ? & ? \\end{array}\\] Give your three \\(y\\)-values as the coordinates of the three points.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "table of values", "coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 0.",
          workingLatex: "y = x + 1 = 0 + 1 = 1",
          explanation:
            "Take the first column, x = 0, and put it into y = x + 1: 0 + 1 = 1. This gives the point (0, 1).",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 1.",
          workingLatex: "y = x + 1 = 1 + 1 = 2",
          explanation:
            "Now the second column, x = 1: 1 + 1 = 2, giving the point (1, 2).",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 2.",
          workingLatex: "y = x + 1 = 2 + 1 = 3",
          explanation:
            "Finally x = 2: 2 + 1 = 3, giving the point (2, 3).",
        },
        {
          stepNumber: 4,
          description: "Collect the three coordinates.",
          workingLatex: "(0, 1), \\ (1, 2), \\ (2, 3)",
          explanation:
            "Pair each x with the y you found to get the three points. Notice the y-values go up by 1 each time x goes up by 1 — that even step is a sign the points lie on a straight line.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-1, 4] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x + 1} color="var(--mafs-fg-accent)" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Point x={1} y={2} color="var(--mafs-fg-blue)" />
  <Point x={2} y={3} color="var(--mafs-fg-blue)" />
  <Text x={0} y={1} attach="w" attachDistance={18}>(0, 1)</Text>
  <Text x={2} y={3} attach="e" attachDistance={18}>(2, 3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((0,1),\\ (1,2),\\ (2,3)\\)",
    },
  },
  {
    id: "ga23-004",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A line has equation \\(y = -x + 4\\). Find the value of \\(y\\) when \\(x = 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "table of values", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 3 into the equation.",
          workingLatex: "y = -x + 4 = -(3) + 4",
          explanation:
            "The term -x means 'the negative of x'. With x = 3 this becomes -(3), i.e. -3. Keep the minus sign firmly attached to the x.",
        },
        {
          stepNumber: 2,
          description: "Write the negative term as -3.",
          workingLatex: "y = -3 + 4",
          explanation:
            "-(3) is just -3, so the calculation is now -3 + 4. Writing -(3) as +3 by mistake here is the classic trap and would give the wrong answer.",
        },
        {
          stepNumber: 3,
          description: "Combine the terms.",
          workingLatex: "y = -3 + 4 = 1",
          explanation:
            "-3 + 4 = 1 (you go 3 below zero and then up 4), so when x = 3 the line passes through (3, 1).",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-2, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -x + 4} color="var(--mafs-fg-accent)" />
  <Point x={3} y={1} color="var(--mafs-fg-blue)" />
  <Text x={3} y={1} attach="e" attachDistance={18}>(3, 1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 1\\)",
      canonicalAnswer: "1",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga23-005",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Complete the table of values for \\(y = 3x - 2\\): \\[\\begin{array}{c|ccc} x & -1 & 0 & 2 \\\\ \\hline y & ? & ? & ? \\end{array}\\] State the three \\(y\\)-values.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "table of values", "y=mx+c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -1 and multiply first.",
          workingLatex: "y = 3 \\cdot (-1) - 2 = -3 - 2",
          explanation:
            "Multiply before subtracting: 3 · (-1) = -3. A negative x makes the 3x term negative, so be careful with the sign here.",
        },
        {
          stepNumber: 2,
          description: "Finish the first value.",
          workingLatex: "y = -3 - 2 = -5",
          explanation:
            "-3 - 2 means go 3 below zero, then 2 further down, landing on -5. So the first point is (-1, -5).",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 0.",
          workingLatex: "y = 3 \\cdot 0 - 2 = 0 - 2 = -2",
          explanation:
            "When x = 0 the term 3x vanishes (3 · 0 = 0), so y equals the constant term, -2. This point (0, -2) is where the line crosses the y-axis.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 2.",
          workingLatex: "y = 3 \\cdot 2 - 2 = 6 - 2 = 4",
          explanation:
            "3 · 2 = 6, then 6 - 2 = 4, giving (2, 4). The completed table reads y = -5, -2, 4; plotting (-1,-5), (0,-2), (2,4) and joining them gives the line.",
          mafs: `<Mafs viewBox={{ x: [-2, 4], y: [-7, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3 * x - 2} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={-5} color="var(--mafs-fg-blue)" />
  <Point x={0} y={-2} color="var(--mafs-fg-blue)" />
  <Point x={2} y={4} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={-5} attach="w" attachDistance={18}>(-1, -5)</Text>
  <Text x={2} y={4} attach="w" attachDistance={18}>(2, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -5,\\ -2,\\ 4\\)",
    },
  },
  {
    id: "ga23-006",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Does the point \\((3, 7)\\) lie on the line \\(y = 2x + 1\\)? Show your working and state Yes or No.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "point on a line", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the point's x-coordinate.",
          workingLatex: "y = 2x + 1 = 2 \\cdot 3 + 1",
          explanation:
            "To test whether a point lies on a line, put its x-coordinate into the equation and see what y the line gives at that x. Here the point's x-coordinate is 3.",
        },
        {
          stepNumber: 2,
          description: "Multiply, then add.",
          workingLatex: "y = 6 + 1 = 7",
          explanation:
            "Multiply first (2 · 3 = 6), then add 1 to get 7. So at x = 3 the line itself sits at height y = 7.",
        },
        {
          stepNumber: 3,
          description: "Compare with the point's y-coordinate.",
          workingLatex: "\\text{line gives } y = 7, \\quad \\text{point has } y = 7",
          explanation:
            "The predicted y (7) matches the point's y-coordinate (7). Since both agree, the point satisfies the equation, so it lies on the line. Answer: Yes.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-1, 9] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2 * x + 1} color="var(--mafs-fg-accent)" />
  <Point x={3} y={7} color="var(--mafs-fg-accent)" />
  <Text x={3} y={7} attach="w" attachDistance={18}>(3, 7) on line</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "Yes — substituting \\(x=3\\) gives \\(y=7\\), matching the point.",
      canonicalAnswer: "Yes",
    },
  },
  {
    id: "ga23-007",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Does the point \\((4, 5)\\) lie on the line \\(y = 2x - 1\\)? Show your working and state Yes or No.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "point on a line", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the point's x-coordinate x = 4.",
          workingLatex: "y = 2x - 1 = 2 \\cdot 4 - 1",
          explanation:
            "Put the point's x-coordinate, 4, into the equation to find the y-value the line actually has at x = 4.",
        },
        {
          stepNumber: 2,
          description: "Multiply, then subtract.",
          workingLatex: "y = 8 - 1 = 7",
          explanation:
            "Multiply first (2 · 4 = 8), then subtract 1 to get 7. So the line passes through (4, 7).",
        },
        {
          stepNumber: 3,
          description: "Compare with the point's y-coordinate.",
          workingLatex: "\\text{line gives } y = 7, \\quad \\text{point has } y = 5, \\quad 7 \\neq 5",
          explanation:
            "The line's y at x = 4 is 7, but the point's y is 5. They do not match, so the point does NOT lie on the line. Answer: No.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-2, 9] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2 * x - 1} color="var(--mafs-fg-accent)" />
  <Point x={4} y={7} color="var(--mafs-fg-blue)" />
  <Text x={4} y={7} attach="w" attachDistance={18}>line: (4, 7)</Text>
  <Point x={4} y={5} color="var(--mafs-fg-orange)" />
  <Text x={4} y={5} attach="e" attachDistance={18}>(4, 5) off</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "No — at \\(x=4\\) the line gives \\(y=7\\), not \\(5\\).",
      canonicalAnswer: "No",
    },
  },
  {
    id: "ga23-008",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Complete the table of values for \\(y = -2x + 5\\): \\[\\begin{array}{c|ccc} x & -1 & 1 & 3 \\\\ \\hline y & ? & ? & ? \\end{array}\\] State the three \\(y\\)-values.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "table of values", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -1, watching the double negative.",
          workingLatex: "y = -2 \\cdot (-1) + 5 = 2 + 5 = 7",
          explanation:
            "Multiply first: -2 · (-1) = +2, because a negative times a negative is positive. Then 2 + 5 = 7, giving (-1, 7). This sign change is the easiest place to slip.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 1.",
          workingLatex: "y = -2 \\cdot 1 + 5 = -2 + 5 = 3",
          explanation:
            "Here -2 · 1 = -2, then -2 + 5 = 3, giving the point (1, 3).",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 3.",
          workingLatex: "y = -2 \\cdot 3 + 5 = -6 + 5 = -1",
          explanation:
            "-2 · 3 = -6, then -6 + 5 = -1, giving (3, -1). The y-values fall by 2 each time x rises by 1, matching the gradient of -2.",
          mafs: `<Mafs viewBox={{ x: [-2, 5], y: [-3, 9] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -2 * x + 5} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={7} color="var(--mafs-fg-blue)" />
  <Point x={1} y={3} color="var(--mafs-fg-blue)" />
  <Point x={3} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={7} attach="e" attachDistance={18}>(-1, 7)</Text>
  <Text x={3} y={-1} attach="e" attachDistance={18}>(3, -1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 7,\\ 3,\\ -1\\)",
    },
  },
  {
    id: "ga23-009",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Write the coordinates of any two points on the horizontal line \\(y = 3\\), and state where it crosses the \\(y\\)-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "horizontal line", "y=b"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the equation y = 3.",
          workingLatex: "y = 3 \\text{ for every } x",
          explanation:
            "The equation y = 3 puts no condition on x. Whatever x is, y must equal 3, so every point on the line has y-coordinate 3. This is a HORIZONTAL line (parallel to the x-axis), not a vertical one — a frequent mix-up.",
        },
        {
          stepNumber: 2,
          description: "Choose two convenient x-values.",
          workingLatex: "x = 0 \\Rightarrow (0, 3); \\quad x = 5 \\Rightarrow (5, 3)",
          explanation:
            "Pick any two x-values, say 0 and 5; the y-coordinate stays 3 for both, giving the points (0, 3) and (5, 3).",
        },
        {
          stepNumber: 3,
          description: "Find the crossing with the y-axis.",
          workingLatex: "\\text{y-axis is } x = 0 \\Rightarrow (0, 3)",
          explanation:
            "The y-axis is the line x = 0. Putting x = 0 still gives y = 3, so the line crosses the y-axis at (0, 3) — which is conveniently one of the points we already chose.",
          mafs: `<Mafs viewBox={{ x: [-2, 7], y: [-2, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={() => 3} color="var(--mafs-fg-accent)" />
  <Point x={0} y={3} color="var(--mafs-fg-blue)" />
  <Point x={5} y={3} color="var(--mafs-fg-blue)" />
  <Text x={0} y={3} attach="w" attachDistance={18}>(0, 3)</Text>
  <Text x={5} y={3} attach="e" attachDistance={18}>(5, 3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "Two points e.g. \\((0,3)\\) and \\((5,3)\\); crosses the \\(y\\)-axis at \\((0,3)\\).",
    },
  },
  {
    id: "ga23-010",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Write the coordinates of any two points on the vertical line \\(x = -2\\), and state where it crosses the \\(x\\)-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "vertical line", "x=a"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the equation x = -2.",
          workingLatex: "x = -2 \\text{ for every } y",
          explanation:
            "The equation x = -2 fixes x at -2 and says nothing about y. Every point on the line has x-coordinate -2, so this is a VERTICAL line (parallel to the y-axis). Remember: x = a is vertical, y = b is horizontal.",
        },
        {
          stepNumber: 2,
          description: "Choose two convenient y-values.",
          workingLatex: "y = 0 \\Rightarrow (-2, 0); \\quad y = 4 \\Rightarrow (-2, 4)",
          explanation:
            "Pick any two y-values, say 0 and 4; the x-coordinate stays -2, giving the points (-2, 0) and (-2, 4).",
        },
        {
          stepNumber: 3,
          description: "Find the crossing with the x-axis.",
          workingLatex: "\\text{x-axis is } y = 0 \\Rightarrow (-2, 0)",
          explanation:
            "The x-axis is the line y = 0. On our line x is always -2, so it crosses the x-axis at (-2, 0).",
          mafs: `<Mafs viewBox={{ x: [-5, 2], y: [-2, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-2, 0]} point2={[-2, 4]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={0} color="var(--mafs-fg-blue)" />
  <Point x={-2} y={4} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={0} attach="e" attachDistance={18}>(-2, 0)</Text>
  <Text x={-2} y={4} attach="e" attachDistance={18}>(-2, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "Two points e.g. \\((-2,0)\\) and \\((-2,4)\\); crosses the \\(x\\)-axis at \\((-2,0)\\).",
    },
  },
  {
    id: "ga23-011",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the coordinates of the points where the line \\(y = 2x - 6\\) crosses the \\(x\\)-axis and the \\(y\\)-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "axis intercepts", "y=mx+c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the y-intercept by setting x = 0.",
          workingLatex: "y = 2 \\cdot 0 - 6 = -6",
          explanation:
            "The y-axis is where x = 0. Put x = 0 into the equation: 2 · 0 = 0, so y = -6. The line crosses the y-axis at (0, -6).",
        },
        {
          stepNumber: 2,
          description: "Find the x-intercept by setting y = 0.",
          workingLatex: "0 = 2x - 6",
          explanation:
            "The x-axis is where y = 0. Set y to 0, giving the equation 0 = 2x - 6 to solve for x. Do NOT confuse this with the y-intercept — for the x-axis crossing it is y that is zero.",
        },
        {
          stepNumber: 3,
          description: "Add 6 to both sides.",
          workingLatex: "0 = 2x - 6 \\Rightarrow 2x = 6",
          explanation:
            "Undo the '- 6' by adding 6 to both sides, leaving the x-term on its own: 2x = 6.",
        },
        {
          stepNumber: 4,
          description: "Divide by 2 to solve for x.",
          workingLatex: "x = \\frac{6}{2} = 3 \\Rightarrow (3, 0)",
          explanation:
            "Divide both sides by 2 to get x = 3. The line crosses the x-axis at (3, 0).",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-8, 3] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2 * x - 6} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-6} color="var(--mafs-fg-blue)" />
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-6} attach="w" attachDistance={18}>(0, -6)</Text>
  <Text x={3} y={0} attach="ne" attachDistance={18}>(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "Crosses the \\(y\\)-axis at \\((0,-6)\\) and the \\(x\\)-axis at \\((3,0)\\).",
    },
  },
  {
    id: "ga23-012",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the coordinates of the points where the line \\(x + y = 5\\) crosses the two axes.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "implicit form", "axis intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set x = 0 to find the y-intercept.",
          workingLatex: "0 + y = 5 \\Rightarrow y = 5",
          explanation:
            "On the y-axis x = 0. Substituting into x + y = 5 gives 0 + y = 5, so y = 5. The line crosses the y-axis at (0, 5).",
        },
        {
          stepNumber: 2,
          description: "Set y = 0 to find the x-intercept.",
          workingLatex: "x + 0 = 5 \\Rightarrow x = 5",
          explanation:
            "On the x-axis y = 0. Substituting gives x + 0 = 5, so x = 5. The line crosses the x-axis at (5, 0).",
        },
        {
          stepNumber: 3,
          description: "State the two crossing points.",
          workingLatex: "(0, 5) \\text{ and } (5, 0)",
          explanation:
            "These two intercepts are enough to plot the line: mark (0, 5) and (5, 0) and draw the straight line through them.",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-1, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[0, 5]} point2={[5, 0]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={5} color="var(--mafs-fg-blue)" />
  <Point x={5} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={5} attach="e" attachDistance={18}>(0, 5)</Text>
  <Text x={5} y={0} attach="n" attachDistance={18}>(5, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "Crosses the \\(y\\)-axis at \\((0,5)\\) and the \\(x\\)-axis at \\((5,0)\\).",
    },
  },
  {
    id: "ga23-013",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "For the line \\(2x + y = 6\\), complete the table of values: \\[\\begin{array}{c|ccc} x & 0 & 1 & 3 \\\\ \\hline y & ? & ? & ? \\end{array}\\] State the three \\(y\\)-values.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "implicit form", "table of values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange to make y the subject.",
          workingLatex: "2x + y = 6 \\Rightarrow y = 6 - 2x",
          explanation:
            "It is easiest to fill a table when y is alone on one side. Subtract 2x from both sides of 2x + y = 6 to get y = 6 - 2x.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 0.",
          workingLatex: "y = 6 - 2 \\cdot 0 = 6 - 0 = 6",
          explanation:
            "When x = 0 the 2x term is zero, so y = 6, giving the point (0, 6).",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 1.",
          workingLatex: "y = 6 - 2 \\cdot 1 = 6 - 2 = 4",
          explanation:
            "2 · 1 = 2, then 6 - 2 = 4, giving the point (1, 4).",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 3.",
          workingLatex: "y = 6 - 2 \\cdot 3 = 6 - 6 = 0",
          explanation:
            "2 · 3 = 6, then 6 - 6 = 0, giving (3, 0) — this is also where the line meets the x-axis.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-1, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 6 - 2 * x} color="var(--mafs-fg-accent)" />
  <Point x={0} y={6} color="var(--mafs-fg-blue)" />
  <Point x={1} y={4} color="var(--mafs-fg-blue)" />
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={6} attach="e" attachDistance={18}>(0, 6)</Text>
  <Text x={3} y={0} attach="ne" attachDistance={18}>(3, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 6,\\ 4,\\ 0\\)",
    },
  },
  {
    id: "ga23-014",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The line \\(y = \\dfrac{1}{2}x + 1\\) passes through a table of values. Find \\(y\\) when \\(x = 6\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "fractional gradient", "table of values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 6.",
          workingLatex: "y = \\frac{1}{2}x + 1 = \\frac{1}{2} \\cdot 6 + 1",
          explanation:
            "Replace x by 6. The term (1/2)x means 'half of x', so we need half of 6 before adding 1.",
        },
        {
          stepNumber: 2,
          description: "Take half of 6.",
          workingLatex: "\\frac{1}{2} \\cdot 6 = \\frac{6}{2} = 3",
          explanation:
            "Multiplying by 1/2 is the same as dividing by 2: 6 ÷ 2 = 3. Choosing an even x avoids fractions in the answer.",
        },
        {
          stepNumber: 3,
          description: "Add the constant.",
          workingLatex: "y = 3 + 1 = 4",
          explanation:
            "3 + 1 = 4, so when x = 6, y = 4, giving the point (6, 4).",
          mafs: `<Mafs viewBox={{ x: [-1, 8], y: [-1, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 0.5 * x + 1} color="var(--mafs-fg-accent)" />
  <Point x={6} y={4} color="var(--mafs-fg-blue)" />
  <Text x={6} y={4} attach="n" attachDistance={18}>(6, 4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga23-015",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Does the point \\((-2, 9)\\) lie on the line \\(y = -3x + 3\\)? Show your working and state Yes or No.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "point on a line", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the x-coordinate x = -2.",
          workingLatex: "y = -3x + 3 = -3 \\cdot (-2) + 3",
          explanation:
            "Put the point's x-coordinate, -2, into the equation. Take care with the product -3 multiplied by -2.",
        },
        {
          stepNumber: 2,
          description: "Resolve the double negative.",
          workingLatex: "-3 \\cdot (-2) = 6, \\quad \\text{so } y = 6 + 3",
          explanation:
            "-3 · (-2) = +6, because a negative times a negative is positive. A sign slip here (writing -6) would flip the conclusion, so this is the step to be careful at.",
        },
        {
          stepNumber: 3,
          description: "Finish the arithmetic.",
          workingLatex: "y = 6 + 3 = 9",
          explanation:
            "6 + 3 = 9, so the line's height at x = -2 is y = 9.",
        },
        {
          stepNumber: 4,
          description: "Compare with the point's y-coordinate.",
          workingLatex: "\\text{line gives } y = 9, \\quad \\text{point has } y = 9",
          explanation:
            "The line's y at x = -2 is 9, which equals the point's y-coordinate. So the point lies on the line. Answer: Yes.",
          mafs: `<Mafs viewBox={{ x: [-4, 3], y: [-2, 11] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -3 * x + 3} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={9} color="var(--mafs-fg-accent)" />
  <Text x={-2} y={9} attach="e" attachDistance={18}>(-2, 9) on line</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "Yes — at \\(x=-2\\) the line gives \\(y=9\\), matching the point.",
      canonicalAnswer: "Yes",
    },
  },
  {
    id: "ga23-016",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the coordinates of the points where the line \\(y = -x + 4\\) crosses the \\(x\\)-axis and the \\(y\\)-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "axis intercepts", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the y-intercept by setting x = 0.",
          workingLatex: "y = -0 + 4 = 4",
          explanation:
            "On the y-axis x = 0, so -x = 0 and y = 4. The line crosses the y-axis at (0, 4).",
        },
        {
          stepNumber: 2,
          description: "Find the x-intercept by setting y = 0.",
          workingLatex: "0 = -x + 4",
          explanation:
            "On the x-axis y = 0, giving the equation 0 = -x + 4 to solve. Remember it is y that is zero here, not x.",
        },
        {
          stepNumber: 3,
          description: "Solve for x.",
          workingLatex: "0 = -x + 4 \\Rightarrow x = 4 \\Rightarrow (4, 0)",
          explanation:
            "Add x to both sides to remove the -x, giving x = 4. The line crosses the x-axis at (4, 0).",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-1, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -x + 4} color="var(--mafs-fg-accent)" />
  <Point x={0} y={4} color="var(--mafs-fg-blue)" />
  <Point x={4} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={4} attach="e" attachDistance={18}>(0, 4)</Text>
  <Text x={4} y={0} attach="ne" attachDistance={18}>(4, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "Crosses the \\(y\\)-axis at \\((0,4)\\) and the \\(x\\)-axis at \\((4,0)\\).",
    },
  },
  {
    id: "ga23-017",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Complete the table of values for \\(y = 4 - x\\): \\[\\begin{array}{c|cccc} x & -2 & 0 & 2 & 5 \\\\ \\hline y & ? & ? & ? & ? \\end{array}\\] State the four \\(y\\)-values.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "table of values", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -2, subtracting a negative.",
          workingLatex: "y = 4 - x = 4 - (-2) = 4 + 2 = 6",
          explanation:
            "Subtracting a negative is the same as adding: 4 - (-2) = 4 + 2 = 6, giving (-2, 6). This double-negative is the classic trap on this question.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 0.",
          workingLatex: "y = 4 - 0 = 4",
          explanation:
            "When x = 0 nothing is taken away, so y = 4, giving (0, 4).",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 2.",
          workingLatex: "y = 4 - 2 = 2",
          explanation:
            "4 - 2 = 2, giving the point (2, 2).",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 5.",
          workingLatex: "y = 4 - 5 = -1",
          explanation:
            "4 - 5 = -1 (taking 5 from 4 drops you one below zero), giving (5, -1). The y-values fall by 1 each time x rises by 1, matching the gradient of -1.",
          mafs: `<Mafs viewBox={{ x: [-3, 6], y: [-3, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 4 - x} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={6} color="var(--mafs-fg-blue)" />
  <Point x={0} y={4} color="var(--mafs-fg-blue)" />
  <Point x={2} y={2} color="var(--mafs-fg-blue)" />
  <Point x={5} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={6} attach="e" attachDistance={18}>(-2, 6)</Text>
  <Text x={5} y={-1} attach="e" attachDistance={18}>(5, -1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 6,\\ 4,\\ 2,\\ -1\\)",
    },
  },
  {
    id: "ga23-018",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A line is drawn through the points generated by \\(x = 4\\). Give two points on this line and state where, if anywhere, it crosses the \\(y\\)-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "vertical line", "x=a"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret x = 4.",
          workingLatex: "x = 4 \\text{ for every } y",
          explanation:
            "x = 4 fixes the x-coordinate at 4 and leaves y free, so this is a VERTICAL line through x = 4 (parallel to the y-axis). Do not read it as a horizontal line — x = a is always vertical.",
        },
        {
          stepNumber: 2,
          description: "Pick two points.",
          workingLatex: "y = 0 \\Rightarrow (4, 0); \\quad y = 3 \\Rightarrow (4, 3)",
          explanation:
            "Any two y-values work; the x-coordinate stays 4, giving for example (4, 0) and (4, 3).",
        },
        {
          stepNumber: 3,
          description: "Decide about the y-axis.",
          workingLatex: "\\text{y-axis is } x = 0, \\text{ but here } x = 4 \\neq 0",
          explanation:
            "The y-axis is the line x = 0. Our line has x = 4 everywhere, which is never 0, so the vertical line x = 4 does NOT cross the y-axis — it runs parallel to it.",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-2, 5] }} height={260}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[4, 0]} point2={[4, 3]} color="var(--mafs-fg-accent)" />
  <Point x={4} y={0} color="var(--mafs-fg-blue)" />
  <Point x={4} y={3} color="var(--mafs-fg-blue)" />
  <Text x={4} y={0} attach="e" attachDistance={18}>(4, 0)</Text>
  <Text x={4} y={3} attach="e" attachDistance={18}>(4, 3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "Two points e.g. \\((4,0)\\) and \\((4,3)\\); it does not cross the \\(y\\)-axis (parallel to it).",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga23-019",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "For the line \\(3x + 2y = 12\\), complete the table of values: \\[\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y & ? & ? & ? \\end{array}\\] State the three \\(y\\)-values.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "implicit form", "table of values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 3x from both sides.",
          workingLatex: "3x + 2y = 12 \\Rightarrow 2y = 12 - 3x",
          explanation:
            "To make a table we want y by itself. Start by moving the 3x across: subtract 3x from both sides, leaving 2y = 12 - 3x.",
        },
        {
          stepNumber: 2,
          description: "Divide by the coefficient of y.",
          workingLatex: "y = \\frac{12 - 3x}{2}",
          explanation:
            "The coefficient of y is 2, so divide the whole right-hand side by 2. This gives a formula for y in terms of x, ready for the table.",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 0.",
          workingLatex: "y = \\frac{12 - 3 \\cdot 0}{2} = \\frac{12}{2} = 6",
          explanation:
            "With x = 0 the 3x term vanishes, so y = 12/2 = 6, giving (0, 6) — the y-axis crossing.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 2.",
          workingLatex: "y = \\frac{12 - 3 \\cdot 2}{2} = \\frac{12 - 6}{2} = \\frac{6}{2} = 3",
          explanation:
            "3 · 2 = 6, so the top is 12 - 6 = 6, and 6/2 = 3, giving (2, 3).",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 4.",
          workingLatex: "y = \\frac{12 - 3 \\cdot 4}{2} = \\frac{12 - 12}{2} = \\frac{0}{2} = 0",
          explanation:
            "3 · 4 = 12, so the top is 12 - 12 = 0 and y = 0, giving (4, 0) — the x-axis crossing. The y-values fall by 3 as x rises by 2, a constant rate confirming a straight line.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-1, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (12 - 3 * x) / 2} color="var(--mafs-fg-accent)" />
  <Point x={0} y={6} color="var(--mafs-fg-blue)" />
  <Point x={2} y={3} color="var(--mafs-fg-blue)" />
  <Point x={4} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={6} attach="e" attachDistance={18}>(0, 6)</Text>
  <Text x={4} y={0} attach="ne" attachDistance={18}>(4, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 6,\\ 3,\\ 0\\)",
    },
  },
  {
    id: "ga23-020",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the coordinates where the line \\(2x + 3y = 12\\) crosses each axis.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "implicit form", "axis intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set x = 0 for the y-intercept.",
          workingLatex: "2 \\cdot 0 + 3y = 12 \\Rightarrow 3y = 12",
          explanation:
            "On the y-axis x = 0, so the 2x term disappears, leaving 3y = 12.",
        },
        {
          stepNumber: 2,
          description: "Solve for y.",
          workingLatex: "y = \\frac{12}{3} = 4 \\Rightarrow (0, 4)",
          explanation:
            "Divide both sides by 3: y = 4. The line crosses the y-axis at (0, 4).",
        },
        {
          stepNumber: 3,
          description: "Set y = 0 for the x-intercept.",
          workingLatex: "2x + 3 \\cdot 0 = 12 \\Rightarrow 2x = 12",
          explanation:
            "On the x-axis y = 0, so the 3y term disappears, leaving 2x = 12.",
        },
        {
          stepNumber: 4,
          description: "Solve for x.",
          workingLatex: "x = \\frac{12}{2} = 6 \\Rightarrow (6, 0)",
          explanation:
            "Divide both sides by 2: x = 6. The line crosses the x-axis at (6, 0).",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-1, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[0, 4]} point2={[6, 0]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={4} color="var(--mafs-fg-blue)" />
  <Point x={6} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={4} attach="e" attachDistance={18}>(0, 4)</Text>
  <Text x={6} y={0} attach="n" attachDistance={18}>(6, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "Crosses the \\(y\\)-axis at \\((0,4)\\) and the \\(x\\)-axis at \\((6,0)\\).",
    },
  },
  {
    id: "ga23-021",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Does the point \\(\\left(\\tfrac{1}{2}, 4\\right)\\) lie on the line \\(y = 4x + 2\\)? Show your working and state Yes or No.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "point on a line", "fractional coordinate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the x-coordinate x = 1/2.",
          workingLatex: "y = 4x + 2 = 4 \\cdot \\frac{1}{2} + 2",
          explanation:
            "Put the point's x-coordinate, 1/2, into the equation. The term 4x becomes 4 times one half.",
        },
        {
          stepNumber: 2,
          description: "Work out 4 times a half.",
          workingLatex: "4 \\cdot \\frac{1}{2} = \\frac{4}{2} = 2",
          explanation:
            "Multiplying 4 by 1/2 halves it: four halves make 2. So the 4x term is worth 2 here.",
        },
        {
          stepNumber: 3,
          description: "Add the constant.",
          workingLatex: "y = 2 + 2 = 4",
          explanation:
            "2 + 2 = 4, so the line's y at x = 1/2 is 4.",
        },
        {
          stepNumber: 4,
          description: "Compare with the point's y-coordinate.",
          workingLatex: "\\text{line gives } y = 4, \\quad \\text{point has } y = 4",
          explanation:
            "The computed y (4) equals the point's y-coordinate (4), so the point lies on the line. Answer: Yes.",
          mafs: `<Mafs viewBox={{ x: [-2, 3], y: [-2, 8] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 4 * x + 2} color="var(--mafs-fg-accent)" />
  <Point x={0.5} y={4} color="var(--mafs-fg-accent)" />
  <Text x={0.5} y={4} attach="e" attachDistance={18}>(1/2, 4) on line</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "Yes — at \\(x=\\tfrac12\\) the line gives \\(y=4\\), matching the point.",
      canonicalAnswer: "Yes",
    },
  },
  {
    id: "ga23-022",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The point \\((a, 11)\\) lies on the line \\(y = 3x - 1\\). Find the value of \\(a\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "point on a line", "solve for x"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the fact that the point satisfies the equation.",
          workingLatex: "y = 3x - 1 \\text{ with } x = a, \\ y = 11",
          explanation:
            "Because the point (a, 11) is on the line, its coordinates must fit the equation. Substitute x = a and y = 11.",
        },
        {
          stepNumber: 2,
          description: "Write the resulting equation.",
          workingLatex: "11 = 3a - 1",
          explanation:
            "Replacing y by 11 and x by a gives 11 = 3a - 1 — an equation in the single unknown a, which we now solve.",
        },
        {
          stepNumber: 3,
          description: "Add 1 to both sides.",
          workingLatex: "11 + 1 = 3a \\Rightarrow 12 = 3a",
          explanation:
            "Undo the '- 1' by adding 1 to both sides, giving 12 = 3a.",
        },
        {
          stepNumber: 4,
          description: "Divide by 3.",
          workingLatex: "a = \\frac{12}{3} = 4",
          explanation:
            "Divide both sides by 3 to isolate a, so a = 4, meaning the point is (4, 11). Check: 3 · 4 - 1 = 11. Correct.",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-2, 13] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3 * x - 1} color="var(--mafs-fg-accent)" />
  <Point x={4} y={11} color="var(--mafs-fg-blue)" />
  <Text x={4} y={11} attach="w" attachDistance={18}>(4, 11)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(a = 4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga23-023",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Complete the table of values for \\(y = \\dfrac{1}{2}x - 3\\): \\[\\begin{array}{c|cccc} x & -2 & 0 & 4 & 6 \\\\ \\hline y & ? & ? & ? & ? \\end{array}\\] State the four \\(y\\)-values.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "fractional gradient", "table of values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -2.",
          workingLatex: "y = \\frac{1}{2} \\cdot (-2) - 3 = -1 - 3 = -4",
          explanation:
            "Half of -2 is -1; then -1 - 3 = -4, giving (-2, -4). Keep the minus sign through the halving — half of a negative is still negative.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 0.",
          workingLatex: "y = \\frac{1}{2} \\cdot 0 - 3 = 0 - 3 = -3",
          explanation:
            "Half of 0 is 0, so y = -3, giving (0, -3) — the y-axis crossing.",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 4.",
          workingLatex: "y = \\frac{1}{2} \\cdot 4 - 3 = 2 - 3 = -1",
          explanation:
            "Half of 4 is 2; then 2 - 3 = -1, giving (4, -1).",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 6.",
          workingLatex: "y = \\frac{1}{2} \\cdot 6 - 3 = 3 - 3 = 0",
          explanation:
            "Half of 6 is 3; then 3 - 3 = 0, giving (6, 0) — the x-axis crossing. The x-values were chosen even so each half is a whole number.",
          mafs: `<Mafs viewBox={{ x: [-3, 7], y: [-5, 2] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 0.5 * x - 3} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={-4} color="var(--mafs-fg-blue)" />
  <Point x={0} y={-3} color="var(--mafs-fg-blue)" />
  <Point x={4} y={-1} color="var(--mafs-fg-blue)" />
  <Point x={6} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={-4} attach="w" attachDistance={18}>(-2, -4)</Text>
  <Text x={6} y={0} attach="ne" attachDistance={18}>(6, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -4,\\ -3,\\ -1,\\ 0\\)",
    },
  },
  {
    id: "ga23-024",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the coordinates where the line \\(y = \\dfrac{2}{3}x - 4\\) crosses each axis.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "fractional gradient", "axis intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set x = 0 for the y-intercept.",
          workingLatex: "y = \\frac{2}{3} \\cdot 0 - 4 = 0 - 4 = -4",
          explanation:
            "On the y-axis x = 0, so the (2/3)x term is 0 and y = -4. The line crosses the y-axis at (0, -4).",
        },
        {
          stepNumber: 2,
          description: "Set y = 0 for the x-intercept.",
          workingLatex: "0 = \\frac{2}{3}x - 4",
          explanation:
            "On the x-axis y = 0, giving the equation 0 = (2/3)x - 4 to solve for x.",
        },
        {
          stepNumber: 3,
          description: "Isolate the x-term.",
          workingLatex: "\\frac{2}{3}x = 4",
          explanation:
            "Add 4 to both sides so the x-term stands alone: (2/3)x = 4.",
        },
        {
          stepNumber: 4,
          description: "Multiply by the reciprocal to solve for x.",
          workingLatex: "x = 4 \\cdot \\frac{3}{2} = \\frac{12}{2} = 6 \\Rightarrow (6, 0)",
          explanation:
            "Dividing by 2/3 is the same as multiplying by its reciprocal 3/2: x = 4 · 3/2 = 6. The line crosses the x-axis at (6, 0).",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-5, 2] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (2 / 3) * x - 4} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-4} color="var(--mafs-fg-blue)" />
  <Point x={6} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-4} attach="w" attachDistance={18}>(0, -4)</Text>
  <Text x={6} y={0} attach="ne" attachDistance={18}>(6, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "Crosses the \\(y\\)-axis at \\((0,-4)\\) and the \\(x\\)-axis at \\((6,0)\\).",
    },
  },
  {
    id: "ga23-025",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A line has equation \\(4x - y = 8\\). (a) Find where it crosses each axis. (b) Hence write the coordinates of two points you would use to plot it.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "implicit form", "axis intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set x = 0 for the y-intercept.",
          workingLatex: "4 \\cdot 0 - y = 8 \\Rightarrow -y = 8",
          explanation:
            "On the y-axis x = 0, so 4x = 0, leaving -y = 8. Note the minus sign sitting in front of y — it is not done yet.",
        },
        {
          stepNumber: 2,
          description: "Solve for y by multiplying by -1.",
          workingLatex: "-y = 8 \\Rightarrow y = -8 \\Rightarrow (0, -8)",
          explanation:
            "Multiply both sides by -1 to turn -y into y: y = -8. The line crosses the y-axis at (0, -8). Forgetting this sign flip gives the wrong point (0, 8).",
        },
        {
          stepNumber: 3,
          description: "Set y = 0 for the x-intercept.",
          workingLatex: "4x - 0 = 8 \\Rightarrow 4x = 8 \\Rightarrow x = 2 \\Rightarrow (2, 0)",
          explanation:
            "On the x-axis y = 0, so 4x = 8 and dividing by 4 gives x = 2. The line crosses the x-axis at (2, 0).",
        },
        {
          stepNumber: 4,
          description: "State the plotting points.",
          workingLatex: "(0, -8) \\text{ and } (2, 0)",
          explanation:
            "The two axis intercepts (0, -8) and (2, 0) are the natural pair of points to plot; mark them and draw the straight line through them.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-10, 2] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 4 * x - 8} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-8} color="var(--mafs-fg-blue)" />
  <Point x={2} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-8} attach="e" attachDistance={18}>(0, -8)</Text>
  <Text x={2} y={0} attach="ne" attachDistance={18}>(2, 0)</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "Crosses the \\(y\\)-axis at \\((0,-8)\\), the \\(x\\)-axis at \\((2,0)\\); plot these two points.",
    },
  },
  {
    id: "ga23-026",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Two points are claimed to lie on the line \\(y = 2x + 3\\): \\(P(-3, -3)\\) and \\(Q(1, 6)\\). For each, decide whether it lies on the line.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "point on a line", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test P by substituting x = -3.",
          workingLatex: "y = 2 \\cdot (-3) + 3 = -6 + 3 = -3",
          explanation:
            "Multiply first: 2 · (-3) = -6, then -6 + 3 = -3. So the line's height at x = -3 is -3.",
        },
        {
          stepNumber: 2,
          description: "Compare with P's y-coordinate.",
          workingLatex: "\\text{line gives } -3, \\quad P \\text{ has } -3 \\Rightarrow \\text{on the line}",
          explanation:
            "P's y-coordinate is -3, which matches the value the line gives. So P(-3, -3) lies on the line.",
        },
        {
          stepNumber: 3,
          description: "Test Q by substituting x = 1.",
          workingLatex: "y = 2 \\cdot 1 + 3 = 2 + 3 = 5",
          explanation:
            "For Q, put x = 1: 2 · 1 = 2, then 2 + 3 = 5. So the line's height at x = 1 is 5.",
        },
        {
          stepNumber: 4,
          description: "Compare with Q's y-coordinate.",
          workingLatex: "\\text{line gives } 5, \\quad Q \\text{ has } 6, \\quad 5 \\neq 6",
          explanation:
            "Q's y-coordinate is 6 but the line gives 5, so Q(1, 6) does NOT lie on the line. Final: P on the line, Q not.",
          mafs: `<Mafs viewBox={{ x: [-5, 4], y: [-5, 8] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2 * x + 3} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={-3} color="var(--mafs-fg-accent)" />
  <Text x={-3} y={-3} attach="w" attachDistance={18}>P(-3, -3) on</Text>
  <Point x={1} y={6} color="var(--mafs-fg-orange)" />
  <Text x={1} y={6} attach="e" attachDistance={18}>Q(1, 6) off</Text>
</Mafs>`,
        },
      ],
      finalAnswer:
        "\\(P(-3,-3)\\) lies on the line; \\(Q(1,6)\\) does not (line gives \\(y=5\\)).",
    },
  },
  {
    id: "ga23-027",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The point \\((-3, k)\\) lies on the line \\(2x + y = 1\\). Find the value of \\(k\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "implicit form", "solve for y"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the known coordinates into the equation.",
          workingLatex: "2x + y = 1 \\text{ with } x = -3, \\ y = k",
          explanation:
            "The point (-3, k) is on the line, so its coordinates satisfy 2x + y = 1. Put x = -3 and y = k.",
        },
        {
          stepNumber: 2,
          description: "Form the equation in k.",
          workingLatex: "2 \\cdot (-3) + k = 1",
          explanation:
            "Replacing x by -3 and y by k gives 2 · (-3) + k = 1.",
        },
        {
          stepNumber: 3,
          description: "Simplify the number term.",
          workingLatex: "-6 + k = 1",
          explanation:
            "2 · (-3) = -6 (negative because positive times negative), so the equation becomes -6 + k = 1.",
        },
        {
          stepNumber: 4,
          description: "Solve for k.",
          workingLatex: "k = 1 + 6 = 7",
          explanation:
            "Add 6 to both sides to undo the -6: k = 7. So the point is (-3, 7). Check: 2 · (-3) + 7 = -6 + 7 = 1. Correct.",
          mafs: `<Mafs viewBox={{ x: [-5, 3], y: [-2, 9] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 1 - 2 * x} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={7} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={7} attach="e" attachDistance={18}>(-3, 7)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = 7\\)",
      canonicalAnswer: "7",
    },
  },
  {
    id: "ga23-028",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A rectangle has its four sides on the lines \\(x = 1\\), \\(x = 5\\), \\(y = 2\\) and \\(y = 7\\). Write the coordinates of its four corners.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "horizontal and vertical lines", "intersection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Classify the four lines.",
          workingLatex: "x = 1, \\ x = 5 \\text{ vertical}; \\quad y = 2, \\ y = 7 \\text{ horizontal}",
          explanation:
            "x = a is a vertical line, y = b is horizontal. So x = 1 and x = 5 are the vertical sides; y = 2 and y = 7 are the horizontal sides. A corner is where a vertical side meets a horizontal side.",
        },
        {
          stepNumber: 2,
          description: "Find the corners on x = 1.",
          workingLatex: "(1, 2) \\text{ and } (1, 7)",
          explanation:
            "The line x = 1 meets y = 2 at (1, 2) and meets y = 7 at (1, 7): take the x from the vertical line and the y from the horizontal line.",
        },
        {
          stepNumber: 3,
          description: "Find the corners on x = 5.",
          workingLatex: "(5, 2) \\text{ and } (5, 7)",
          explanation:
            "Similarly x = 5 meets y = 2 at (5, 2) and y = 7 at (5, 7).",
        },
        {
          stepNumber: 4,
          description: "State all four corners.",
          workingLatex: "(1, 2), \\ (5, 2), \\ (5, 7), \\ (1, 7)",
          explanation:
            "Listing them in order around the rectangle: width = 5 - 1 = 4 and height = 7 - 2 = 5, consistent with the four corner coordinates.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-1, 9] }} height={260}>
  <Coordinates.Cartesian />
  <Polygon points={[[1, 2], [5, 2], [5, 7], [1, 7]]} color="var(--mafs-fg-blue)" fillOpacity={0.15} />
  <Point x={1} y={2} color="var(--mafs-fg-accent)" />
  <Point x={5} y={2} color="var(--mafs-fg-accent)" />
  <Point x={5} y={7} color="var(--mafs-fg-accent)" />
  <Point x={1} y={7} color="var(--mafs-fg-accent)" />
  <Text x={1} y={2} attach="sw" attachDistance={18}>(1, 2)</Text>
  <Text x={5} y={2} attach="se" attachDistance={18}>(5, 2)</Text>
  <Text x={5} y={7} attach="ne" attachDistance={18}>(5, 7)</Text>
  <Text x={1} y={7} attach="nw" attachDistance={18}>(1, 7)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((1,2),\\ (5,2),\\ (5,7),\\ (1,7)\\)",
    },
  },
  {
    id: "ga23-029",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The line \\(y = 2x - 1\\) and the vertical line \\(x = 3\\) are both plotted. Find the coordinates of the point where they cross.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "intersection", "vertical line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the vertical line to fix x.",
          workingLatex: "x = 3",
          explanation:
            "The line x = 3 forces the x-coordinate of the crossing point to be 3, whatever the other line says. So at the intersection x = 3.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 3 into the sloping line.",
          workingLatex: "y = 2x - 1 = 2 \\cdot 3 - 1",
          explanation:
            "The crossing point also lies on y = 2x - 1, so its y must satisfy that equation at x = 3. Substitute x = 3.",
        },
        {
          stepNumber: 3,
          description: "Evaluate y.",
          workingLatex: "y = 6 - 1 = 5",
          explanation:
            "2 · 3 = 6, then 6 - 1 = 5, so y = 5 at the crossing.",
        },
        {
          stepNumber: 4,
          description: "State the intersection point.",
          workingLatex: "(3, 5)",
          explanation:
            "Combining the fixed x = 3 with the computed y = 5 gives the single crossing point (3, 5).",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-2, 8] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2 * x - 1} color="var(--mafs-fg-accent)" />
  <Line.ThroughPoints point1={[3, -2]} point2={[3, 8]} color="var(--mafs-fg-green)" />
  <Point x={3} y={5} color="var(--mafs-fg-blue)" />
  <Text x={3} y={5} attach="w" attachDistance={18}>(3, 5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3, 5)\\)",
      canonicalAnswer: "(3, 5)",
    },
  },
  {
    id: "ga23-030",
    topicRef: "ga23",
    topicTitle: "Plotting straight-line graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "For the line \\(5x - 2y = 10\\), complete the table of values: \\[\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y & ? & ? & ? \\end{array}\\] State the three \\(y\\)-values.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["plotting straight-line graphs", "implicit form", "table of values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 5x from both sides.",
          workingLatex: "5x - 2y = 10 \\Rightarrow -2y = 10 - 5x",
          explanation:
            "Begin isolating y by moving the 5x term: subtract 5x from both sides, leaving -2y = 10 - 5x. The y-term still carries a negative coefficient.",
        },
        {
          stepNumber: 2,
          description: "Divide by -2 (signs flip).",
          workingLatex: "y = \\frac{10 - 5x}{-2} = \\frac{5x - 10}{2}",
          explanation:
            "Divide both sides by -2. Dividing by a negative flips every sign on top, so 10 - 5x becomes 5x - 10, giving y = (5x - 10)/2; equivalently y = (5/2)x - 5.",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 0.",
          workingLatex: "y = \\frac{5 \\cdot 0 - 10}{2} = \\frac{-10}{2} = -5",
          explanation:
            "With x = 0 the top is 0 - 10 = -10, so y = -10/2 = -5, giving (0, -5) — the y-axis crossing.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 2.",
          workingLatex: "y = \\frac{5 \\cdot 2 - 10}{2} = \\frac{10 - 10}{2} = \\frac{0}{2} = 0",
          explanation:
            "5 · 2 = 10, so the top is 10 - 10 = 0 and y = 0, giving (2, 0) — the x-axis crossing.",
        },
        {
          stepNumber: 5,
          description: "Substitute x = 4.",
          workingLatex: "y = \\frac{5 \\cdot 4 - 10}{2} = \\frac{20 - 10}{2} = \\frac{10}{2} = 5",
          explanation:
            "5 · 4 = 20, so the top is 20 - 10 = 10 and y = 10/2 = 5, giving (4, 5). The y-values rise by 5 as x rises by 2 (gradient 5/2), confirming a straight line.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-7, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (5 * x - 10) / 2} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-5} color="var(--mafs-fg-blue)" />
  <Point x={2} y={0} color="var(--mafs-fg-blue)" />
  <Point x={4} y={5} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-5} attach="w" attachDistance={18}>(0, -5)</Text>
  <Text x={4} y={5} attach="w" attachDistance={18}>(4, 5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -5,\\ 0,\\ 5\\)",
    },
  },
];
