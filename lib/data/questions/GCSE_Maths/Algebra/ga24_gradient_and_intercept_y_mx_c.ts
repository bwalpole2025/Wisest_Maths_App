/**
 * Topic: Gradient and intercept; y = mx + c
 * Ref: ga24  (DfE A9, A10)
 * Strand: Algebra — GCSE Maths (Both tiers)
 *
 * Coverage: gradient and y-intercept of straight lines written in the form
 *   y = mx + c. Clusters covered:
 *   (1) reading the gradient m and y-intercept c straight off an equation
 *       already in the form y = mx + c, e.g. y = 3x - 2;
 *   (2) computing a gradient from two points using
 *       m = (y2 - y1)/(x2 - x1), including negative and fractional gradients,
 *       stressing a consistent subtraction order top and bottom;
 *   (3) rearranging into y = mx + c form first (e.g. 2y = 4x + 6, x + y = 5,
 *       3x - 2y = 8) and only THEN stating m and c;
 *   (4) writing the equation of a line given its gradient and y-intercept;
 *   (5) interpreting the gradient (steepness / sign) and finding the y-value
 *       at a given x by substitution.
 *   NOT covered: finding the full equation through two arbitrary points
 *   (that is ga25) — though computing a gradient from two points belongs here.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga24-001 .. ga24-004  (4)
 *   - Standard:   ga24-005 .. ga24-018  (14)
 *   - Challenge:  ga24-019 .. ga24-030  (12)
 * Id range: ga24-001 .. ga24-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot
 *   for multiplication, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga24-001",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The line \\(y = 4x + 3\\) is written in the form \\(y = mx + c\\). Write down the gradient \\(m\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradient and intercept", "y=mx+c", "reading off gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what each letter means in y = mx + c.",
          workingLatex: "y = mx + c \\quad\\Rightarrow\\quad m = \\text{gradient},\\ c = \\text{y-intercept}",
          explanation:
            "In the standard form y = mx + c, the two letters m and c each have a fixed meaning. The number multiplying x is the gradient m — it measures how steep the line is. The number sitting on its own (no x attached) is the y-intercept c — where the line crosses the y-axis.",
        },
        {
          stepNumber: 2,
          description: "Line up the given equation with y = mx + c.",
          workingLatex: "y = \\underbrace{4}_{m}\\,x + \\underbrace{3}_{c}",
          explanation:
            "Write the given equation directly underneath the template and see which number sits in each slot. The number stuck to x is 4, so it sits in the m position; the lone number 3 sits in the c position.",
        },
        {
          stepNumber: 3,
          description: "Read off the coefficient of x.",
          workingLatex: "m = 4",
          explanation:
            "The gradient is whatever multiplies x, which is 4. The question only asks for the gradient, so we ignore the 3 (that would be the y-intercept). A common slip is to write the constant 3 instead — make sure you take the number attached to x.",
          mafs: `<Mafs viewBox={{ x: [-2, 4], y: [-2, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 4*x + 3} color="var(--mafs-fg-accent)" />
  <Point x={0} y={3} color="var(--mafs-fg-blue)" />
  <Text x={0} y={3} attach="w" attachDistance={18}>(0, 3)</Text>
  <Line.Segment point1={[0, 3]} point2={[1, 3]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1, 3]} point2={[1, 7]} color="var(--mafs-fg-green)" />
  <Text x={0.5} y={3} attach="s" attachDistance={16}>run 1</Text>
  <Text x={1} y={5} attach="e" attachDistance={16}>rise 4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = 4\\)",
      canonicalAnswer: "m=4",
    },
  },
  {
    id: "ga24-002",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Write down the \\(y\\)-intercept of the line \\(y = 2x - 5\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradient and intercept", "y=mx+c", "reading off intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the meaning of c in y = mx + c.",
          workingLatex: "y = mx + c,\\quad c = \\text{y-intercept}",
          explanation:
            "The y-intercept is the constant term c in y = mx + c. It is the value of y when x = 0, which is exactly the point where the line crosses the y-axis.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the subtraction as adding a negative.",
          workingLatex: "y = 2x - 5 = 2x + (-5)",
          explanation:
            "The template has a plus sign (mx + c), but our equation has a minus. Rewriting -5 as +(-5) makes the constant term's sign explicit, so we don't accidentally drop the minus.",
        },
        {
          stepNumber: 3,
          description: "Read off the constant term, keeping its sign.",
          workingLatex: "c = -5",
          explanation:
            "The constant sitting in the c slot is -5, so the y-intercept is -5. Be careful with the sign here: a very common slip is to answer +5 by ignoring the minus.",
        },
        {
          stepNumber: 4,
          description: "Check by setting x = 0.",
          workingLatex: "x = 0:\\ y = 2(0) - 5 = 0 - 5 = -5",
          explanation:
            "The y-intercept is where x = 0. Substituting x = 0 gives y = -5, confirming the line crosses the y-axis at the point (0, -5).",
          mafs: `<Mafs viewBox={{ x: [-3, 5], y: [-8, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x - 5} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-5} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-5} attach="w" attachDistance={18}>(0, -5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(c = -5\\)",
      canonicalAnswer: "c=-5",
    },
  },
  {
    id: "ga24-003",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A straight line has gradient \\(m = -2\\). A line is steeper the larger the size of its gradient. Find the value of \\(y\\) on the line \\(y = -2x + 7\\) when \\(x = 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradient and intercept", "y=mx+c", "y-value at given x", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 3 into the equation.",
          workingLatex: "y = -2(3) + 7",
          explanation:
            "To find the y-value at a particular x, replace every x in y = -2x + 7 with that number. Here x = 3, so we write -2(3) + 7. Keeping the bracket round the 3 helps us remember to multiply by the -2 first.",
        },
        {
          stepNumber: 2,
          description: "Do the multiplication before the addition.",
          workingLatex: "y = -6 + 7",
          explanation:
            "Following the order of operations, multiply before you add: -2 times 3 is -6. A common slip is to add the 7 to the 3 first — but multiplication binds the -2 to the 3, so it must be done first.",
        },
        {
          stepNumber: 3,
          description: "Add the two numbers to finish.",
          workingLatex: "y = -6 + 7 = 1",
          explanation:
            "Now add: -6 + 7 = 1. So when x = 3 the y-value on the line is 1, meaning the point (3, 1) lies on the line.",
          mafs: `<Mafs viewBox={{ x: [-2, 5], y: [-2, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -2*x + 7} color="var(--mafs-fg-accent)" />
  <Point x={0} y={7} color="var(--mafs-fg-blue)" />
  <Text x={0} y={7} attach="w" attachDistance={18}>(0, 7)</Text>
  <Point x={3} y={1} color="var(--mafs-fg-green)" />
  <Text x={3} y={1} attach="e" attachDistance={18}>(3, 1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 1\\)",
      canonicalAnswer: "y=1",
    },
  },
  {
    id: "ga24-004",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A straight line has gradient \\(3\\) and crosses the \\(y\\)-axis at \\((0, 1)\\). Write down its equation in the form \\(y = mx + c\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradient and intercept", "y=mx+c", "writing the equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Pick out the gradient m.",
          workingLatex: "m = 3",
          explanation:
            "Writing an equation is the reverse of reading one off: we collect m and c, then slot them into the template. The gradient is given directly as 3, so m = 3.",
        },
        {
          stepNumber: 2,
          description: "Pick out the intercept c from the crossing point.",
          workingLatex: "c = 1 \\quad \\text{(from } (0, 1) \\text{)}",
          explanation:
            "The line crosses the y-axis at (0, 1). Any point on the y-axis has x = 0, and its y-coordinate is the y-intercept. So c = 1.",
        },
        {
          stepNumber: 3,
          description: "Substitute m and c into y = mx + c.",
          workingLatex: "y = 3x + 1",
          explanation:
            "Putting m = 3 and c = 1 into y = mx + c gives y = 3x + 1. The x-term comes from m, the constant from c.",
        },
        {
          stepNumber: 4,
          description: "Check the intercept by setting x = 0.",
          workingLatex: "x = 0:\\ y = 3(0) + 1 = 1\\ \\checkmark",
          explanation:
            "Setting x = 0 gives y = 1, so the line really does pass through (0, 1) as required. This quick check confirms we placed the numbers in the right slots.",
          mafs: `<Mafs viewBox={{ x: [-2, 4], y: [-2, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3*x + 1} color="var(--mafs-fg-accent)" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Text x={0} y={1} attach="w" attachDistance={18}>(0, 1)</Text>
  <Line.Segment point1={[0, 1]} point2={[1, 1]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1, 1]} point2={[1, 4]} color="var(--mafs-fg-green)" />
  <Text x={0.5} y={1} attach="s" attachDistance={16}>run 1</Text>
  <Text x={1} y={2.5} attach="e" attachDistance={16}>rise 3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 3x + 1\\)",
      canonicalAnswer: "y=3x+1",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga24-005",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A straight line passes through the points \\((1, 2)\\) and \\((4, 11)\\). Find the gradient of the line.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "gradient from two points", "y=mx+c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down the gradient formula and label the points.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad (x_1, y_1) = (1, 2),\\ (x_2, y_2) = (4, 11)",
          explanation:
            "The gradient between two points is the change in y divided by the change in x. Before substituting, label one point as point 1 and the other as point 2, and keep that choice fixed throughout.",
        },
        {
          stepNumber: 2,
          description: "Substitute, keeping the same order top and bottom.",
          workingLatex: "m = \\frac{11 - 2}{4 - 1}",
          explanation:
            "Subtract the point-1 values from the point-2 values in BOTH the numerator and the denominator. Mixing the order — say 11 - 2 on top but 1 - 4 on the bottom — is the classic mistake and flips the sign.",
        },
        {
          stepNumber: 3,
          description: "Work out the change in y (numerator).",
          workingLatex: "11 - 2 = 9",
          explanation:
            "The numerator is the rise: how far the line goes up between the two points. From y = 2 to y = 11 is a rise of 9.",
        },
        {
          stepNumber: 4,
          description: "Work out the change in x (denominator).",
          workingLatex: "4 - 1 = 3",
          explanation:
            "The denominator is the run: how far the line goes across. From x = 1 to x = 4 is a run of 3.",
        },
        {
          stepNumber: 5,
          description: "Divide rise by run and simplify.",
          workingLatex: "m = \\frac{9}{3} = 3",
          explanation:
            "Dividing the rise 9 by the run 3 gives 3, so the gradient is 3. This means each step of 1 to the right raises the line by 3.",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-2, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[1, 2]} point2={[4, 11]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={2} color="var(--mafs-fg-blue)" />
  <Text x={1} y={2} attach="w" attachDistance={18}>(1, 2)</Text>
  <Point x={4} y={11} color="var(--mafs-fg-blue)" />
  <Text x={4} y={11} attach="w" attachDistance={18}>(4, 11)</Text>
  <Line.Segment point1={[1, 2]} point2={[4, 2]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[4, 2]} point2={[4, 11]} color="var(--mafs-fg-green)" />
  <Text x={2.5} y={2} attach="s" attachDistance={16}>run 3</Text>
  <Text x={4} y={6.5} attach="e" attachDistance={16}>rise 9</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = 3\\)",
      canonicalAnswer: "m=3",
    },
  },
  {
    id: "ga24-006",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A straight line passes through \\((-2, 5)\\) and \\((3, -5)\\). Find its gradient.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "gradient from two points", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the formula and label the points.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad (x_1, y_1) = (-2, 5),\\ (x_2, y_2) = (3, -5)",
          explanation:
            "Use the gradient formula. Take the first point as point 1 and the second as point 2 — the labelling is your choice, but it must stay consistent once you've made it.",
        },
        {
          stepNumber: 2,
          description: "Substitute carefully, watching the signs.",
          workingLatex: "m = \\frac{-5 - 5}{3 - (-2)}",
          explanation:
            "Top: y2 - y1 = -5 - 5. Bottom: x2 - x1 = 3 - (-2). With negative coordinates the brackets matter — keep them so you don't lose a sign.",
        },
        {
          stepNumber: 3,
          description: "Simplify the numerator.",
          workingLatex: "-5 - 5 = -10",
          explanation:
            "On top, -5 - 5 means starting at -5 and going down a further 5, giving -10.",
        },
        {
          stepNumber: 4,
          description: "Simplify the denominator (subtracting a negative).",
          workingLatex: "3 - (-2) = 3 + 2 = 5",
          explanation:
            "On the bottom, subtracting -2 is the same as adding 2, so 3 - (-2) = 5. Turning the double negative into a plus is the step students most often slip on.",
        },
        {
          stepNumber: 5,
          description: "Divide to get the gradient.",
          workingLatex: "m = \\frac{-10}{5} = -2",
          explanation:
            "-10 divided by 5 is -2. A negative gradient makes sense here: as x increases the y-values fall, from 5 down to -5.",
          mafs: `<Mafs viewBox={{ x: [-4, 5], y: [-7, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-2, 5]} point2={[3, -5]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={5} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={5} attach="w" attachDistance={18}>(-2, 5)</Text>
  <Point x={3} y={-5} color="var(--mafs-fg-blue)" />
  <Text x={3} y={-5} attach="e" attachDistance={18}>(3, -5)</Text>
  <Line.Segment point1={[-2, 5]} point2={[3, 5]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[3, 5]} point2={[3, -5]} color="var(--mafs-fg-green)" />
  <Text x={0.5} y={5} attach="n" attachDistance={16}>run 5</Text>
  <Text x={3} y={0} attach="e" attachDistance={16}>rise -10</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = -2\\)",
      canonicalAnswer: "m=-2",
    },
  },
  {
    id: "ga24-007",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the gradient of the line through \\((2, 1)\\) and \\((8, 5)\\), giving your answer as a fraction in its simplest form.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "gradient from two points", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad (x_1, y_1) = (2, 1),\\ (x_2, y_2) = (8, 5)",
          explanation:
            "Change in y over change in x, with a fixed, consistent labelling of the points. Here the gradient will be a fraction, so we keep it as a fraction rather than rounding.",
        },
        {
          stepNumber: 2,
          description: "Substitute the coordinates.",
          workingLatex: "m = \\frac{5 - 1}{8 - 2}",
          explanation:
            "Same order top and bottom: point-2 values minus point-1 values in each.",
        },
        {
          stepNumber: 3,
          description: "Carry out the two subtractions.",
          workingLatex: "m = \\frac{4}{6}",
          explanation:
            "5 - 1 = 4 on top and 8 - 2 = 6 on the bottom, so the gradient is 4/6 before simplifying.",
        },
        {
          stepNumber: 4,
          description: "Cancel the common factor of 2.",
          workingLatex: "m = \\frac{4}{6} = \\frac{2}{3}",
          explanation:
            "The question asks for the fraction in simplest form. Both 4 and 6 divide by 2, giving 2/3. This is a gentle positive slope: up 2 for every 3 across.",
          mafs: `<Mafs viewBox={{ x: [-1, 10], y: [-2, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[2, 1]} point2={[8, 5]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={1} color="var(--mafs-fg-blue)" />
  <Text x={2} y={1} attach="w" attachDistance={18}>(2, 1)</Text>
  <Point x={8} y={5} color="var(--mafs-fg-blue)" />
  <Text x={8} y={5} attach="w" attachDistance={18}>(8, 5)</Text>
  <Line.Segment point1={[2, 1]} point2={[8, 1]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[8, 1]} point2={[8, 5]} color="var(--mafs-fg-green)" />
  <Text x={5} y={1} attach="s" attachDistance={16}>run 6</Text>
  <Text x={8} y={3} attach="e" attachDistance={16}>rise 4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = \\frac{2}{3}\\)",
      canonicalAnswer: "m=2/3",
    },
  },
  {
    id: "ga24-008",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Rearrange \\(2y = 4x + 6\\) into the form \\(y = mx + c\\) and hence state the gradient and \\(y\\)-intercept.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "y=mx+c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Notice that y is not yet on its own.",
          workingLatex: "2y = 4x + 6",
          explanation:
            "We cannot read off m and c yet, because the left side is 2y, not y. We must divide through to isolate a single y first. Reading the 4 as the gradient at this stage would be wrong.",
        },
        {
          stepNumber: 2,
          description: "Divide every term by 2.",
          workingLatex: "\\frac{2y}{2} = \\frac{4x}{2} + \\frac{6}{2}",
          explanation:
            "To make the coefficient of y equal to 1, divide BOTH terms on the right (and the left) by 2. Every term must be divided, not just one — a common slip is to halve only the 4x.",
        },
        {
          stepNumber: 3,
          description: "Simplify each term.",
          workingLatex: "y = 2x + 3",
          explanation:
            "4x/2 = 2x and 6/2 = 3, so the equation in y = mx + c form is y = 2x + 3.",
        },
        {
          stepNumber: 4,
          description: "Read off m and c.",
          workingLatex: "m = 2,\\qquad c = 3",
          explanation:
            "Now that y stands alone, the coefficient of x is the gradient (2) and the constant is the y-intercept (3).",
          mafs: `<Mafs viewBox={{ x: [-3, 4], y: [-2, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x + 3} color="var(--mafs-fg-accent)" />
  <Point x={0} y={3} color="var(--mafs-fg-blue)" />
  <Text x={0} y={3} attach="w" attachDistance={18}>(0, 3)</Text>
  <Line.Segment point1={[0, 3]} point2={[1, 3]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1, 3]} point2={[1, 5]} color="var(--mafs-fg-green)" />
  <Text x={0.5} y={3} attach="s" attachDistance={16}>run 1</Text>
  <Text x={1} y={4} attach="e" attachDistance={16}>rise 2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 2x + 3,\\ m = 2,\\ c = 3\\)",
      canonicalAnswer: "y=2x+3",
    },
  },
  {
    id: "ga24-009",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Rearrange \\(x + y = 5\\) into the form \\(y = mx + c\\) and state the gradient.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide what to move to isolate y.",
          workingLatex: "x + y = 5",
          explanation:
            "y is added to x on the left. To get y by itself we must remove the +x term, which we do by subtracting x from both sides.",
        },
        {
          stepNumber: 2,
          description: "Subtract x from both sides.",
          workingLatex: "y = 5 - x",
          explanation:
            "Taking x off the left leaves just y; doing the same on the right turns 5 into 5 - x.",
        },
        {
          stepNumber: 3,
          description: "Reorder into the standard mx + c form.",
          workingLatex: "y = -x + 5",
          explanation:
            "Rewriting 5 - x as -x + 5 puts the x-term first, matching y = mx + c. Note that -x means a coefficient of -1, not 0.",
        },
        {
          stepNumber: 4,
          description: "Read off the gradient and intercept.",
          workingLatex: "m = -1,\\qquad c = 5",
          explanation:
            "The coefficient of x is -1, so the gradient is -1 (the line slopes downwards). The y-intercept is 5.",
          mafs: `<Mafs viewBox={{ x: [-2, 7], y: [-2, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -x + 5} color="var(--mafs-fg-accent)" />
  <Point x={0} y={5} color="var(--mafs-fg-blue)" />
  <Text x={0} y={5} attach="w" attachDistance={18}>(0, 5)</Text>
  <Line.Segment point1={[0, 5]} point2={[1, 5]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1, 5]} point2={[1, 4]} color="var(--mafs-fg-green)" />
  <Text x={0.5} y={5} attach="n" attachDistance={16}>run 1</Text>
  <Text x={1} y={4.5} attach="e" attachDistance={16}>rise -1</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -x + 5,\\ m = -1\\)",
      canonicalAnswer: "y=-x+5",
    },
  },
  {
    id: "ga24-010",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Rearrange \\(3x - 2y = 8\\) into the form \\(y = mx + c\\) and state the gradient and \\(y\\)-intercept.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the y-term first.",
          workingLatex: "3x - 2y = 8 \\ \\Rightarrow\\ -2y = 8 - 3x",
          explanation:
            "Subtract 3x from both sides so that only the -2y term is left on the left-hand side. Keep the -2 attached to the y; we deal with it in the next step.",
        },
        {
          stepNumber: 2,
          description: "Divide every term by -2.",
          workingLatex: "\\frac{-2y}{-2} = \\frac{8}{-2} - \\frac{3x}{-2}",
          explanation:
            "The coefficient of y is -2, so divide each term by -2. Dividing by a negative flips the sign of every term — a common slip is to forget this on one of the terms.",
        },
        {
          stepNumber: 3,
          description: "Simplify each term, watching the double negative.",
          workingLatex: "y = -4 + \\frac{3}{2}x",
          explanation:
            "8/(-2) = -4, and (-3x)/(-2) = +(3/2)x because the two negatives in the x-term cancel to give a positive.",
        },
        {
          stepNumber: 4,
          description: "Write in mx + c order and read off m and c.",
          workingLatex: "y = \\frac{3}{2}x - 4,\\qquad m = \\frac{3}{2},\\ c = -4",
          explanation:
            "Putting the x-term first gives the standard form. The gradient is 3/2 and the y-intercept is -4.",
        },
        {
          stepNumber: 5,
          description: "Check with a point. Put x = 2.",
          workingLatex: "y = \\frac{3}{2}(2) - 4 = 3 - 4 = -1;\\quad 3(2) - 2(-1) = 6 + 2 = 8\\ \\checkmark",
          explanation:
            "x = 2 gives y = -1 from our rearranged form. Substituting (2, -1) back into the original 3x - 2y returns 8, confirming the rearrangement is correct.",
          mafs: `<Mafs viewBox={{ x: [-2, 6], y: [-7, 5] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (3/2)*x - 4} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-4} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-4} attach="w" attachDistance={18}>(0, -4)</Text>
  <Line.Segment point1={[0, -4]} point2={[2, -4]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[2, -4]} point2={[2, -1]} color="var(--mafs-fg-green)" />
  <Text x={1} y={-4} attach="s" attachDistance={16}>run 2</Text>
  <Text x={2} y={-2.5} attach="e" attachDistance={16}>rise 3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = \\frac{3}{2}x - 4,\\ m = \\frac{3}{2},\\ c = -4\\)",
      canonicalAnswer: "y=3/2x-4",
    },
  },
  {
    id: "ga24-011",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A straight line has gradient \\(-\\dfrac{1}{2}\\) and passes through \\((0, 4)\\). Write down its equation in the form \\(y = mx + c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "writing the equation", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify m from the gradient.",
          workingLatex: "m = -\\frac{1}{2}",
          explanation:
            "The gradient is given directly, so m = -1/2. The sign tells us the line slopes downwards from left to right.",
        },
        {
          stepNumber: 2,
          description: "Identify c from the y-axis crossing.",
          workingLatex: "c = 4 \\quad \\text{(from } (0, 4) \\text{)}",
          explanation:
            "The point (0, 4) has x = 0, so it lies on the y-axis. Its y-coordinate, 4, is therefore the y-intercept c.",
        },
        {
          stepNumber: 3,
          description: "Substitute m and c into y = mx + c.",
          workingLatex: "y = -\\frac{1}{2}x + 4",
          explanation:
            "Inserting m = -1/2 and c = 4 gives the equation. Keep the fraction as the coefficient of x — there is no need to clear it.",
          mafs: `<Mafs viewBox={{ x: [-3, 8], y: [-2, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(1/2)*x + 4} color="var(--mafs-fg-accent)" />
  <Point x={0} y={4} color="var(--mafs-fg-blue)" />
  <Text x={0} y={4} attach="w" attachDistance={18}>(0, 4)</Text>
  <Line.Segment point1={[0, 4]} point2={[2, 4]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[2, 4]} point2={[2, 3]} color="var(--mafs-fg-green)" />
  <Text x={1} y={4} attach="n" attachDistance={16}>run 2</Text>
  <Text x={2} y={3.5} attach="e" attachDistance={16}>rise -1</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\frac{1}{2}x + 4\\)",
      canonicalAnswer: "y=-1/2x+4",
    },
  },
  {
    id: "ga24-012",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The line \\(y = 5x - 8\\) passes through the point \\((p, 12)\\). Find the value of \\(p\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "y=mx+c", "substitution", "solving for x"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the known y-value into the equation.",
          workingLatex: "12 = 5p - 8",
          explanation:
            "The point (p, 12) lies on the line, so its coordinates must satisfy y = 5x - 8. Here y = 12 and x = p, giving 12 = 5p - 8. This is now an equation we can solve for p.",
        },
        {
          stepNumber: 2,
          description: "Add 8 to both sides.",
          workingLatex: "12 + 8 = 5p \\ \\Rightarrow\\ 20 = 5p",
          explanation:
            "Move the -8 across by adding 8 to both sides, which isolates the term in p on the right.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 5.",
          workingLatex: "p = \\frac{20}{5} = 4",
          explanation:
            "Dividing 20 by 5 gives p = 4.",
        },
        {
          stepNumber: 4,
          description: "Check by substituting back.",
          workingLatex: "y = 5(4) - 8 = 20 - 8 = 12\\ \\checkmark",
          explanation:
            "With x = 4 the equation gives y = 12, matching the point, so p = 4 is correct.",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-10, 14] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 5*x - 8} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-8} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-8} attach="w" attachDistance={18}>(0, -8)</Text>
  <Point x={4} y={12} color="var(--mafs-fg-green)" />
  <Text x={4} y={12} attach="e" attachDistance={18}>(4, 12)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(p = 4\\)",
      canonicalAnswer: "p=4",
    },
  },
  {
    id: "ga24-013",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Two lines are \\(y = 3x + 1\\) and \\(y = -2x + 6\\). Which line is steeper, and what is the gradient of the steeper line?",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "interpreting gradient", "steepness"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off each gradient.",
          workingLatex: "y = 3x + 1 \\Rightarrow m_1 = 3;\\qquad y = -2x + 6 \\Rightarrow m_2 = -2",
          explanation:
            "Both equations are already in y = mx + c form, so the coefficients of x give the gradients directly: 3 and -2.",
        },
        {
          stepNumber: 2,
          description: "Compare steepness using the size of each gradient.",
          workingLatex: "|m_1| = 3,\\qquad |m_2| = |-2| = 2",
          explanation:
            "Steepness depends on the SIZE (magnitude) of the gradient, ignoring the sign. The sign only tells you the direction of the slope (up or down), not how steep it is.",
        },
        {
          stepNumber: 3,
          description: "Decide which magnitude is larger.",
          workingLatex: "3 > 2 \\ \\Rightarrow\\ y = 3x + 1 \\text{ is steeper}",
          explanation:
            "Since 3 > 2, the first line is steeper. Its gradient is 3. The second line slopes downwards (negative gradient) but less steeply, so it is not the answer.",
          mafs: `<Mafs viewBox={{ x: [-3, 4], y: [-4, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3*x + 1} color="var(--mafs-fg-accent)" />
  <Text x={1.5} y={5.5} attach="w" attachDistance={6}>y = 3x + 1 (steeper)</Text>
  <Plot.OfX y={(x) => -2*x + 6} color="var(--mafs-fg-blue)" />
  <Text x={-1.5} y={9} attach="e" attachDistance={6}>y = -2x + 6</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 3x + 1\\) is steeper; gradient \\(= 3\\)",
      canonicalAnswer: "m=3",
    },
  },
  {
    id: "ga24-014",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the gradient of the line through \\((-3, -1)\\) and \\((1, -9)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "gradient from two points", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the formula and label the points.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad (x_1, y_1) = (-3, -1),\\ (x_2, y_2) = (1, -9)",
          explanation:
            "Both points have negative coordinates, so careful sign work is essential. Fix the labelling — first point as 1, second as 2 — before substituting.",
        },
        {
          stepNumber: 2,
          description: "Substitute, taking care with double negatives.",
          workingLatex: "m = \\frac{-9 - (-1)}{1 - (-3)}",
          explanation:
            "Top: y2 - y1 = -9 - (-1). Bottom: x2 - x1 = 1 - (-3). Keep the brackets round the negative coordinates so the double negatives are handled cleanly in the next step.",
        },
        {
          stepNumber: 3,
          description: "Simplify the numerator.",
          workingLatex: "-9 - (-1) = -9 + 1 = -8",
          explanation:
            "On top, subtracting -1 is the same as adding 1, so -9 - (-1) = -9 + 1 = -8.",
        },
        {
          stepNumber: 4,
          description: "Simplify the denominator.",
          workingLatex: "1 - (-3) = 1 + 3 = 4",
          explanation:
            "On the bottom, subtracting -3 becomes adding 3, so 1 - (-3) = 4.",
        },
        {
          stepNumber: 5,
          description: "Divide to finish.",
          workingLatex: "m = \\frac{-8}{4} = -2",
          explanation:
            "-8 divided by 4 is -2. The negative gradient matches the fact that y drops from -1 to -9 as x increases.",
          mafs: `<Mafs viewBox={{ x: [-5, 3], y: [-11, 3] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-3, -1]} point2={[1, -9]} color="var(--mafs-fg-accent)" />
  <Point x={-3} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={-1} attach="w" attachDistance={18}>(-3, -1)</Text>
  <Point x={1} y={-9} color="var(--mafs-fg-blue)" />
  <Text x={1} y={-9} attach="e" attachDistance={18}>(1, -9)</Text>
  <Line.Segment point1={[-3, -1]} point2={[1, -1]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1, -1]} point2={[1, -9]} color="var(--mafs-fg-green)" />
  <Text x={-1} y={-1} attach="n" attachDistance={16}>run 4</Text>
  <Text x={1} y={-5} attach="e" attachDistance={16}>rise -8</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = -2\\)",
      canonicalAnswer: "m=-2",
    },
  },
  {
    id: "ga24-015",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Rearrange \\(y - 3 = 2(x + 1)\\) into the form \\(y = mx + c\\) and state the gradient and \\(y\\)-intercept.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket on the right.",
          workingLatex: "y - 3 = 2 \\cdot x + 2 \\cdot 1 = 2x + 2",
          explanation:
            "Multiply everything inside the bracket by 2: 2 times x is 2x, and 2 times 1 is 2. Make sure the 2 reaches both terms inside, not just the first.",
        },
        {
          stepNumber: 2,
          description: "Add 3 to both sides to isolate y.",
          workingLatex: "y = 2x + 2 + 3",
          explanation:
            "Move the -3 across by adding 3 to both sides, so that y stands alone on the left.",
        },
        {
          stepNumber: 3,
          description: "Combine the constants.",
          workingLatex: "y = 2x + 5",
          explanation:
            "2 + 3 = 5, giving the equation in y = mx + c form.",
        },
        {
          stepNumber: 4,
          description: "Read off m and c.",
          workingLatex: "m = 2,\\qquad c = 5",
          explanation:
            "The coefficient of x is the gradient (2) and the constant is the y-intercept (5).",
          mafs: `<Mafs viewBox={{ x: [-4, 3], y: [-2, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x + 5} color="var(--mafs-fg-accent)" />
  <Point x={0} y={5} color="var(--mafs-fg-blue)" />
  <Text x={0} y={5} attach="w" attachDistance={18}>(0, 5)</Text>
  <Line.Segment point1={[0, 5]} point2={[1, 5]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1, 5]} point2={[1, 7]} color="var(--mafs-fg-green)" />
  <Text x={0.5} y={5} attach="s" attachDistance={16}>run 1</Text>
  <Text x={1} y={6} attach="e" attachDistance={16}>rise 2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 2x + 5,\\ m = 2,\\ c = 5\\)",
      canonicalAnswer: "y=2x+5",
    },
  },
  {
    id: "ga24-016",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A line through \\((-1, 6)\\) and \\((5, 6)\\) is drawn. Find its gradient and describe the line.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "gradient from two points", "zero gradient", "horizontal line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{6 - 6}{5 - (-1)}",
          explanation:
            "Label (x1, y1) = (-1, 6) and (x2, y2) = (5, 6) and substitute, keeping the order consistent top and bottom.",
        },
        {
          stepNumber: 2,
          description: "Simplify the numerator and denominator.",
          workingLatex: "m = \\frac{0}{6}",
          explanation:
            "The two y-coordinates are equal, so the numerator is 6 - 6 = 0. The denominator is 5 - (-1) = 6.",
        },
        {
          stepNumber: 3,
          description: "Divide: zero over a non-zero number.",
          workingLatex: "m = \\frac{0}{6} = 0",
          explanation:
            "Zero divided by 6 is 0, so the gradient is 0. Note this is genuinely zero, NOT undefined — a zero on the bottom (a vertical line) would be undefined, but here the zero is on top.",
        },
        {
          stepNumber: 4,
          description: "Interpret the result.",
          workingLatex: "y = 6 \\ \\text{(a horizontal line)}",
          explanation:
            "A gradient of 0 means the line is flat (horizontal): it neither rises nor falls. Both points have y = 6, so the line is y = 6.",
          mafs: `<Mafs viewBox={{ x: [-3, 7], y: [-2, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 0*x + 6} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={6} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={6} attach="n" attachDistance={18}>(-1, 6)</Text>
  <Point x={5} y={6} color="var(--mafs-fg-blue)" />
  <Text x={5} y={6} attach="n" attachDistance={18}>(5, 6)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = 0\\) (horizontal line \\(y = 6\\))",
      canonicalAnswer: "m=0",
    },
  },
  {
    id: "ga24-017",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Rearrange \\(6x + 3y = 12\\) into the form \\(y = mx + c\\), then state the gradient and the coordinates of the \\(y\\)-intercept.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Move the x-term to the right.",
          workingLatex: "3y = 12 - 6x",
          explanation:
            "Subtract 6x from both sides so that only the 3y term remains on the left-hand side.",
        },
        {
          stepNumber: 2,
          description: "Divide every term by 3.",
          workingLatex: "\\frac{3y}{3} = \\frac{12}{3} - \\frac{6x}{3}",
          explanation:
            "To make the coefficient of y equal to 1, divide each term by 3 — including the constant 12, not just the x-term.",
        },
        {
          stepNumber: 3,
          description: "Simplify each term.",
          workingLatex: "y = 4 - 2x",
          explanation:
            "12/3 = 4 and 6x/3 = 2x, with the minus sign carried through onto the x-term.",
        },
        {
          stepNumber: 4,
          description: "Write in mx + c order and read off the values.",
          workingLatex: "y = -2x + 4,\\qquad m = -2,\\ c = 4",
          explanation:
            "Putting the x-term first gives the standard form. The gradient is -2 and the y-intercept is at (0, 4) — the question asks for the intercept as a coordinate.",
          mafs: `<Mafs viewBox={{ x: [-2, 5], y: [-4, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -2*x + 4} color="var(--mafs-fg-accent)" />
  <Point x={0} y={4} color="var(--mafs-fg-blue)" />
  <Text x={0} y={4} attach="w" attachDistance={18}>(0, 4)</Text>
  <Line.Segment point1={[0, 4]} point2={[1, 4]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1, 4]} point2={[1, 2]} color="var(--mafs-fg-green)" />
  <Text x={0.5} y={4} attach="n" attachDistance={16}>run 1</Text>
  <Text x={1} y={3} attach="e" attachDistance={16}>rise -2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -2x + 4,\\ m = -2,\\) y-intercept \\((0, 4)\\)",
      canonicalAnswer: "y=-2x+4",
    },
  },
  {
    id: "ga24-018",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A line has gradient \\(4\\) and passes through the point \\((0, -3)\\). Find its equation, then use it to find \\(y\\) when \\(x = 2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "writing the equation", "y-value at given x"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify m and c.",
          workingLatex: "m = 4,\\qquad c = -3 \\quad \\text{(from } (0, -3) \\text{)}",
          explanation:
            "The gradient gives m = 4. The point (0, -3) is on the y-axis (x = 0), so the y-intercept is c = -3.",
        },
        {
          stepNumber: 2,
          description: "Write the equation.",
          workingLatex: "y = 4x - 3",
          explanation:
            "Substituting m = 4 and c = -3 into y = mx + c. Note the intercept is negative, so it is written as '- 3', not '+ 3'.",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 2 into the equation.",
          workingLatex: "y = 4(2) - 3",
          explanation:
            "Replace x with 2 in the equation just found, to read off the y-value at that point.",
        },
        {
          stepNumber: 4,
          description: "Evaluate.",
          workingLatex: "y = 8 - 3 = 5",
          explanation:
            "4 times 2 is 8, minus 3 gives 5. So when x = 2, y = 5; the point (2, 5) lies on the line.",
          mafs: `<Mafs viewBox={{ x: [-2, 4], y: [-5, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 4*x - 3} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-3} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-3} attach="w" attachDistance={18}>(0, -3)</Text>
  <Point x={2} y={5} color="var(--mafs-fg-green)" />
  <Text x={2} y={5} attach="e" attachDistance={18}>(2, 5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 4x - 3\\); when \\(x = 2,\\ y = 5\\)",
      canonicalAnswer: "y=4x-3",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga24-019",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Rearrange \\(\\dfrac{y + 1}{2} = 3x - 4\\) into the form \\(y = mx + c\\) and state the gradient and \\(y\\)-intercept.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "clearing fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Clear the fraction by multiplying both sides by 2.",
          workingLatex: "y + 1 = 2(3x - 4)",
          explanation:
            "The left side is divided by 2, so multiply BOTH sides by 2 to clear it. The whole right-hand side gets multiplied, which is why we wrap it in a bracket.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket.",
          workingLatex: "y + 1 = 6x - 8",
          explanation:
            "Multiply each term inside the bracket by 2: 2 times 3x is 6x and 2 times -4 is -8.",
        },
        {
          stepNumber: 3,
          description: "Subtract 1 from both sides.",
          workingLatex: "y = 6x - 8 - 1",
          explanation:
            "Move the +1 across by subtracting 1 from both sides, isolating y on the left.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants and read off m and c.",
          workingLatex: "y = 6x - 9,\\qquad m = 6,\\ c = -9",
          explanation:
            "-8 - 1 = -9, so the equation is y = 6x - 9. The gradient is 6 and the y-intercept is -9.",
        },
        {
          stepNumber: 5,
          description: "Check at x = 1.",
          workingLatex: "y = 6(1) - 9 = -3;\\quad \\frac{-3 + 1}{2} = \\frac{-2}{2} = -1,\\ \\ 3(1) - 4 = -1\\ \\checkmark",
          explanation:
            "x = 1 gives y = -3 from our form. Putting (1, -3) into the original equation: left side (-3+1)/2 = -1, right side 3(1)-4 = -1. They agree, so the rearrangement is correct.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-12, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 6*x - 9} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-9} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-9} attach="w" attachDistance={18}>(0, -9)</Text>
  <Line.Segment point1={[0, -9]} point2={[1, -9]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1, -9]} point2={[1, -3]} color="var(--mafs-fg-green)" />
  <Text x={0.5} y={-9} attach="s" attachDistance={16}>run 1</Text>
  <Text x={1} y={-6} attach="e" attachDistance={16}>rise 6</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 6x - 9,\\ m = 6,\\ c = -9\\)",
      canonicalAnswer: "y=6x-9",
    },
  },
  {
    id: "ga24-020",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A straight line passes through \\(\\left(\\tfrac{1}{2}, 3\\right)\\) and \\(\\left(\\tfrac{5}{2}, 11\\right)\\). Find its gradient.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "gradient from two points", "fractional coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the gradient formula with the fractional points.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1},\\quad (x_1, y_1) = \\left(\\frac{1}{2}, 3\\right),\\ (x_2, y_2) = \\left(\\frac{5}{2}, 11\\right)",
          explanation:
            "The formula is exactly the same even with fractional coordinates; we just have to substitute the fractions carefully and tidy the denominator at the end.",
        },
        {
          stepNumber: 2,
          description: "Substitute, keeping order consistent.",
          workingLatex: "m = \\frac{11 - 3}{\\frac{5}{2} - \\frac{1}{2}}",
          explanation:
            "Point-2 minus point-1 on top and bottom. The denominator is now a subtraction of two fractions that conveniently share the denominator 2.",
        },
        {
          stepNumber: 3,
          description: "Simplify the numerator.",
          workingLatex: "11 - 3 = 8",
          explanation:
            "The change in y is straightforward: 11 - 3 = 8.",
        },
        {
          stepNumber: 4,
          description: "Simplify the fractional denominator.",
          workingLatex: "\\frac{5}{2} - \\frac{1}{2} = \\frac{4}{2} = 2",
          explanation:
            "Same denominators, so subtract the numerators: 5/2 - 1/2 = 4/2 = 2. The change in x is 2.",
        },
        {
          stepNumber: 5,
          description: "Divide to get the gradient.",
          workingLatex: "m = \\frac{8}{2} = 4",
          explanation:
            "8 divided by 2 is 4, so the gradient is 4.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-1, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[0.5, 3]} point2={[2.5, 11]} color="var(--mafs-fg-accent)" />
  <Point x={0.5} y={3} color="var(--mafs-fg-blue)" />
  <Text x={0.5} y={3} attach="w" attachDistance={18}>(1/2, 3)</Text>
  <Point x={2.5} y={11} color="var(--mafs-fg-blue)" />
  <Text x={2.5} y={11} attach="w" attachDistance={18}>(5/2, 11)</Text>
  <Line.Segment point1={[0.5, 3]} point2={[2.5, 3]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[2.5, 3]} point2={[2.5, 11]} color="var(--mafs-fg-green)" />
  <Text x={1.5} y={3} attach="s" attachDistance={16}>run 2</Text>
  <Text x={2.5} y={7} attach="e" attachDistance={16}>rise 8</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = 4\\)",
      canonicalAnswer: "m=4",
    },
  },
  {
    id: "ga24-021",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The line \\(\\dfrac{x}{4} + \\dfrac{y}{3} = 1\\) is written in intercept form. By rearranging into \\(y = mx + c\\), find its gradient.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "clearing fractions", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the y-term.",
          workingLatex: "\\frac{y}{3} = 1 - \\frac{x}{4}",
          explanation:
            "Subtract x/4 from both sides so the y-term is alone on the left. We will clear the /3 next.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 3.",
          workingLatex: "y = 3\\left(1 - \\frac{x}{4}\\right)",
          explanation:
            "The y-term is divided by 3, so multiply both sides by 3 to clear it. Wrap the right-hand side in a bracket so the 3 is applied to the whole thing.",
        },
        {
          stepNumber: 3,
          description: "Expand the bracket.",
          workingLatex: "y = 3 - \\frac{3x}{4}",
          explanation:
            "Multiply each term inside by 3: 3 times 1 is 3, and 3 times x/4 is 3x/4. Don't forget to multiply the second term as well as the first.",
        },
        {
          stepNumber: 4,
          description: "Write in mx + c order and state the gradient.",
          workingLatex: "y = -\\frac{3}{4}x + 3,\\qquad m = -\\frac{3}{4}",
          explanation:
            "Rearranging puts the x-term first. The coefficient of x is -3/4, so the gradient is -3/4 (and the y-intercept is the constant 3).",
        },
        {
          stepNumber: 5,
          description: "Sense-check using the axis intercepts.",
          workingLatex: "x\\text{-int}: (4, 0),\\quad y\\text{-int}: (0, 3),\\quad m = \\frac{0 - 3}{4 - 0} = -\\frac{3}{4}\\ \\checkmark",
          explanation:
            "Intercept form x/4 + y/3 = 1 crosses the axes at (4, 0) and (0, 3); the gradient between those two points is -3/4, matching our answer.",
          mafs: `<Mafs viewBox={{ x: [-2, 6], y: [-2, 5] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(3/4)*x + 3} color="var(--mafs-fg-accent)" />
  <Point x={0} y={3} color="var(--mafs-fg-blue)" />
  <Text x={0} y={3} attach="w" attachDistance={18}>(0, 3)</Text>
  <Line.Segment point1={[0, 3]} point2={[4, 3]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[4, 3]} point2={[4, 0]} color="var(--mafs-fg-green)" />
  <Text x={2} y={3} attach="n" attachDistance={16}>run 4</Text>
  <Text x={4} y={1.5} attach="e" attachDistance={16}>rise -3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = -\\frac{3}{4}\\)",
      canonicalAnswer: "m=-3/4",
    },
  },
  {
    id: "ga24-022",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A straight line passes through \\((a, 7)\\) and \\((a + 4, 1)\\). Find the gradient of the line in terms of, and show it does not depend on, \\(a\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "gradient from two points", "algebraic coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the gradient formula with the algebraic points.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{1 - 7}{(a + 4) - a}",
          explanation:
            "Take (x1, y1) = (a, 7) and (x2, y2) = (a + 4, 1). Substitute as usual, keeping the same order top and bottom. The unknown a appears only in the denominator.",
        },
        {
          stepNumber: 2,
          description: "Simplify the denominator.",
          workingLatex: "(a + 4) - a = a + 4 - a = 4",
          explanation:
            "The two a-terms cancel: a - a = 0, leaving just 4. This cancellation is exactly why the final gradient will not involve a.",
        },
        {
          stepNumber: 3,
          description: "Simplify the numerator.",
          workingLatex: "1 - 7 = -6",
          explanation:
            "The change in y is -6, since y decreases from 7 to 1.",
        },
        {
          stepNumber: 4,
          description: "Form and simplify the gradient.",
          workingLatex: "m = \\frac{-6}{4} = -\\frac{3}{2}",
          explanation:
            "-6/4 simplifies to -3/2 by dividing top and bottom by 2. Because the a cancelled in step 2, the gradient is -3/2 for every value of a — it is independent of a.",
          mafs: `<Mafs viewBox={{ x: [-2, 6], y: [-2, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[0, 7]} point2={[4, 1]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={7} color="var(--mafs-fg-blue)" />
  <Text x={0} y={7} attach="w" attachDistance={18}>(a, 7)</Text>
  <Point x={4} y={1} color="var(--mafs-fg-blue)" />
  <Text x={4} y={1} attach="e" attachDistance={18}>(a+4, 1)</Text>
  <Line.Segment point1={[0, 7]} point2={[4, 7]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[4, 7]} point2={[4, 1]} color="var(--mafs-fg-green)" />
  <Text x={2} y={7} attach="n" attachDistance={16}>run 4</Text>
  <Text x={4} y={4} attach="e" attachDistance={16}>rise -6</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = -\\frac{3}{2}\\) (independent of \\(a\\))",
      canonicalAnswer: "m=-3/2",
    },
  },
  {
    id: "ga24-023",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The line \\(y = mx + 2\\) passes through the point \\((3, 14)\\). Find the gradient \\(m\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "y=mx+c", "finding gradient by substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the point into the equation.",
          workingLatex: "14 = m(3) + 2",
          explanation:
            "The point (3, 14) lies on the line, so x = 3 and y = 14 must satisfy y = mx + 2. Here the unknown is m, not x or y.",
        },
        {
          stepNumber: 2,
          description: "Write the term in m clearly.",
          workingLatex: "14 = 3m + 2",
          explanation:
            "m times 3 is 3m. The equation is now linear in the single unknown m, so we can solve it like any other linear equation.",
        },
        {
          stepNumber: 3,
          description: "Subtract 2 from both sides.",
          workingLatex: "12 = 3m",
          explanation:
            "14 - 2 = 12, leaving 3m on the right.",
        },
        {
          stepNumber: 4,
          description: "Divide by 3 and check.",
          workingLatex: "m = \\frac{12}{3} = 4;\\quad y = 4(3) + 2 = 14\\ \\checkmark",
          explanation:
            "12 divided by 3 gives m = 4. Substituting back, 4(3) + 2 = 14, confirming the point lies on the line.",
          mafs: `<Mafs viewBox={{ x: [-2, 5], y: [-2, 16] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 4*x + 2} color="var(--mafs-fg-accent)" />
  <Point x={0} y={2} color="var(--mafs-fg-blue)" />
  <Text x={0} y={2} attach="w" attachDistance={18}>(0, 2)</Text>
  <Point x={3} y={14} color="var(--mafs-fg-green)" />
  <Text x={3} y={14} attach="e" attachDistance={18}>(3, 14)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = 4\\)",
      canonicalAnswer: "m=4",
    },
  },
  {
    id: "ga24-024",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Rearrange \\(5(x - y) = 2x + 10\\) into the form \\(y = mx + c\\) and state the gradient and \\(y\\)-intercept.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "expanding brackets", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket on the left.",
          workingLatex: "5x - 5y = 2x + 10",
          explanation:
            "Multiply both terms inside the bracket by 5: 5 times x is 5x, and 5 times -y is -5y. The -y keeps its minus sign.",
        },
        {
          stepNumber: 2,
          description: "Collect the y-term alone on one side.",
          workingLatex: "-5y = 2x + 10 - 5x",
          explanation:
            "Subtract 5x from both sides so the only y-term, -5y, is isolated on the left.",
        },
        {
          stepNumber: 3,
          description: "Simplify the right-hand side.",
          workingLatex: "-5y = -3x + 10",
          explanation:
            "Combine the x-terms on the right: 2x - 5x = -3x, so the right side becomes -3x + 10.",
        },
        {
          stepNumber: 4,
          description: "Divide every term by -5.",
          workingLatex: "y = \\frac{-3x}{-5} + \\frac{10}{-5}",
          explanation:
            "The coefficient of y is -5, so divide each term by -5. Because we are dividing by a negative, watch the sign on every term separately.",
        },
        {
          stepNumber: 5,
          description: "Simplify each term and read off m and c.",
          workingLatex: "y = \\frac{3}{5}x - 2,\\qquad m = \\frac{3}{5},\\ c = -2",
          explanation:
            "(-3x)/(-5) = +(3/5)x because two negatives make a positive, and 10/(-5) = -2. So the gradient is 3/5 and the y-intercept is -2.",
          mafs: `<Mafs viewBox={{ x: [-2, 8], y: [-4, 5] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (3/5)*x - 2} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-2} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-2} attach="w" attachDistance={18}>(0, -2)</Text>
  <Line.Segment point1={[0, -2]} point2={[5, -2]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[5, -2]} point2={[5, 1]} color="var(--mafs-fg-green)" />
  <Text x={2.5} y={-2} attach="s" attachDistance={16}>run 5</Text>
  <Text x={5} y={-0.5} attach="e" attachDistance={16}>rise 3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = \\frac{3}{5}x - 2,\\ m = \\frac{3}{5},\\ c = -2\\)",
      canonicalAnswer: "y=3/5x-2",
    },
  },
  {
    id: "ga24-025",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A straight line has the same gradient as \\(2y = 6x - 1\\) and the same \\(y\\)-intercept as \\(y = -4x + 5\\). Find the equation of the line in the form \\(y = mx + c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "combining conditions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the first line into y = mx + c.",
          workingLatex: "2y = 6x - 1 \\ \\Rightarrow\\ y = 3x - \\frac{1}{2}",
          explanation:
            "Divide every term by 2: 6x/2 = 3x and -1/2 stays as -1/2. We need this line in standard form before we can read its gradient.",
        },
        {
          stepNumber: 2,
          description: "Take the gradient from the first line.",
          workingLatex: "m = 3",
          explanation:
            "The gradient of the rearranged line is 3, and our new line is to have the SAME gradient, so m = 3. We do not need this first line's intercept (-1/2).",
        },
        {
          stepNumber: 3,
          description: "Read the y-intercept from the second line.",
          workingLatex: "y = -4x + 5 \\ \\Rightarrow\\ c = 5",
          explanation:
            "The second line is already in y = mx + c form; its constant term is 5, so the required y-intercept is c = 5. We deliberately ignore its gradient of -4.",
        },
        {
          stepNumber: 4,
          description: "Combine m and c into one equation.",
          workingLatex: "y = 3x + 5",
          explanation:
            "Using m = 3 from the first line and c = 5 from the second gives the line y = 3x + 5.",
          mafs: `<Mafs viewBox={{ x: [-4, 3], y: [-2, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3*x + 5} color="var(--mafs-fg-accent)" />
  <Point x={0} y={5} color="var(--mafs-fg-blue)" />
  <Text x={0} y={5} attach="w" attachDistance={18}>(0, 5)</Text>
  <Line.Segment point1={[0, 5]} point2={[1, 5]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1, 5]} point2={[1, 8]} color="var(--mafs-fg-green)" />
  <Text x={0.5} y={5} attach="s" attachDistance={16}>run 1</Text>
  <Text x={1} y={6.5} attach="e" attachDistance={16}>rise 3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 3x + 5\\)",
      canonicalAnswer: "y=3x+5",
    },
  },
  {
    id: "ga24-026",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A line passes through \\((-4, k)\\) and \\((2, 5)\\) and has gradient \\(-\\dfrac{1}{3}\\). Find the value of \\(k\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "gradient from two points", "solving for a coordinate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the gradient formula equal to the given gradient.",
          workingLatex: "\\frac{y_2 - y_1}{x_2 - x_1} = -\\frac{1}{3},\\quad (x_1, y_1) = (-4, k),\\ (x_2, y_2) = (2, 5)",
          explanation:
            "The gradient computed from the two points must equal the given gradient -1/3. This gives an equation we can solve for the unknown k.",
        },
        {
          stepNumber: 2,
          description: "Substitute the coordinates.",
          workingLatex: "\\frac{5 - k}{2 - (-4)} = -\\frac{1}{3}",
          explanation:
            "Top: y2 - y1 = 5 - k. Bottom: x2 - x1 = 2 - (-4). Keep the order consistent and the brackets in place.",
        },
        {
          stepNumber: 3,
          description: "Simplify the denominator.",
          workingLatex: "\\frac{5 - k}{6} = -\\frac{1}{3}",
          explanation:
            "2 - (-4) = 6, so the equation becomes (5 - k)/6 = -1/3.",
        },
        {
          stepNumber: 4,
          description: "Multiply both sides by 6.",
          workingLatex: "5 - k = 6 \\cdot \\left(-\\frac{1}{3}\\right) = -2",
          explanation:
            "Multiplying both sides by 6 clears the fraction. On the right, 6 times -1/3 is -2.",
        },
        {
          stepNumber: 5,
          description: "Solve for k and check.",
          workingLatex: "5 - k = -2 \\ \\Rightarrow\\ k = 7;\\quad \\frac{5 - 7}{6} = \\frac{-2}{6} = -\\frac{1}{3}\\ \\checkmark",
          explanation:
            "From 5 - k = -2, subtract 5 to get -k = -7, so k = 7. Checking: the gradient is (5 - 7)/6 = -2/6 = -1/3, as required.",
          mafs: `<Mafs viewBox={{ x: [-6, 4], y: [-1, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Line.ThroughPoints point1={[-4, 7]} point2={[2, 5]} color="var(--mafs-fg-accent)" />
  <Point x={-4} y={7} color="var(--mafs-fg-blue)" />
  <Text x={-4} y={7} attach="w" attachDistance={18}>(-4, 7)</Text>
  <Point x={2} y={5} color="var(--mafs-fg-blue)" />
  <Text x={2} y={5} attach="e" attachDistance={18}>(2, 5)</Text>
  <Line.Segment point1={[-4, 7]} point2={[2, 7]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[2, 7]} point2={[2, 5]} color="var(--mafs-fg-green)" />
  <Text x={-1} y={7} attach="n" attachDistance={16}>run 6</Text>
  <Text x={2} y={6} attach="e" attachDistance={16}>rise -2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = 7\\)",
      canonicalAnswer: "k=7",
    },
  },
  {
    id: "ga24-027",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Rearrange \\(ax + by = c\\) (with \\(b \\neq 0\\)) into the form \\(y = mx + c\\) and write down the gradient and \\(y\\)-intercept in terms of \\(a\\), \\(b\\) and \\(c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "rearranging into y=mx+c", "general form", "algebraic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the by-term.",
          workingLatex: "by = c - ax",
          explanation:
            "Subtract ax from both sides to leave only the term in y on the left. We treat a, b and c as fixed numbers we just don't know yet.",
        },
        {
          stepNumber: 2,
          description: "Divide every term by b.",
          workingLatex: "y = \\frac{c}{b} - \\frac{a}{b}x",
          explanation:
            "Since b is not zero we may divide both terms on the right by b: c/b stays, and (ax)/b becomes (a/b)x. The condition b ≠ 0 is exactly what makes this division legal.",
        },
        {
          stepNumber: 3,
          description: "Write in mx + c order.",
          workingLatex: "y = -\\frac{a}{b}x + \\frac{c}{b}",
          explanation:
            "Putting the x-term first matches y = mx + c. Note the gradient term carries the minus sign that came with -ax.",
        },
        {
          stepNumber: 4,
          description: "Identify the gradient and intercept.",
          workingLatex: "\\text{gradient} = -\\frac{a}{b},\\qquad \\text{y-intercept} = \\frac{c}{b}",
          explanation:
            "The coefficient of x, namely -a/b, is the gradient; the constant term c/b is the y-intercept.",
        },
        {
          stepNumber: 5,
          description: "Sanity-check with numbers.",
          workingLatex: "a = 3,\\ b = -2,\\ c = 8:\\ -\\frac{a}{b} = -\\frac{3}{-2} = \\frac{3}{2},\\quad \\frac{c}{b} = \\frac{8}{-2} = -4\\ \\checkmark",
          explanation:
            "For 3x - 2y = 8 (from ga24-010) this formula gives gradient -3/(-2) = 3/2 and intercept 8/(-2) = -4, matching the earlier worked result exactly.",
          mafs: `<Mafs viewBox={{ x: [-2, 6], y: [-7, 5] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (3/2)*x - 4} color="var(--mafs-fg-accent)" />
  <Point x={0} y={-4} color="var(--mafs-fg-blue)" />
  <Text x={0} y={-4} attach="w" attachDistance={18}>(0, -4)</Text>
  <Line.Segment point1={[0, -4]} point2={[2, -4]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[2, -4]} point2={[2, -1]} color="var(--mafs-fg-green)" />
  <Text x={1} y={-4} attach="s" attachDistance={16}>run 2</Text>
  <Text x={2} y={-2.5} attach="e" attachDistance={16}>rise 3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\frac{a}{b}x + \\frac{c}{b}\\); gradient \\(-\\frac{a}{b}\\), intercept \\(\\frac{c}{b}\\)",
      canonicalAnswer: "y=-(a/b)x+c/b",
    },
  },
  {
    id: "ga24-028",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A line has equation \\(y = \\dfrac{2}{5}x + 1\\). The point \\((10, t)\\) lies on the line. Find \\(t\\), and state how much \\(y\\) increases for every increase of \\(5\\) in \\(x\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "interpreting gradient", "y-value at given x", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 10 into the equation.",
          workingLatex: "t = \\frac{2}{5}(10) + 1",
          explanation:
            "The point (10, t) lies on the line, so put x = 10 into y = (2/5)x + 1 to find its y-coordinate t.",
        },
        {
          stepNumber: 2,
          description: "Work out the fraction times 10.",
          workingLatex: "\\frac{2}{5}(10) = \\frac{2 \\cdot 10}{5} = \\frac{20}{5} = 4",
          explanation:
            "Multiply the numerator by 10 then divide by 5: 2/5 of 10 is 20/5 = 4.",
        },
        {
          stepNumber: 3,
          description: "Add the intercept.",
          workingLatex: "t = 4 + 1 = 5",
          explanation:
            "Adding the constant 1 gives t = 5, so the point on the line is (10, 5).",
        },
        {
          stepNumber: 4,
          description: "Interpret the gradient as a rate of change.",
          workingLatex: "\\Delta y = m \\cdot \\Delta x = \\frac{2}{5} \\cdot 5 = 2",
          explanation:
            "The gradient 2/5 means y rises by 2/5 for each 1 increase in x. For an increase of 5 in x, multiply: (2/5) times 5 = 2, so y increases by 2.",
          mafs: `<Mafs viewBox={{ x: [-2, 12], y: [-2, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (2/5)*x + 1} color="var(--mafs-fg-accent)" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Text x={0} y={1} attach="w" attachDistance={18}>(0, 1)</Text>
  <Point x={10} y={5} color="var(--mafs-fg-green)" />
  <Text x={10} y={5} attach="s" attachDistance={18}>(10, 5)</Text>
  <Line.Segment point1={[5, 3]} point2={[10, 3]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[10, 3]} point2={[10, 5]} color="var(--mafs-fg-green)" />
  <Text x={7.5} y={3} attach="s" attachDistance={16}>run 5</Text>
  <Text x={10} y={4} attach="e" attachDistance={16}>rise 2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(t = 5\\); \\(y\\) increases by \\(2\\) for every increase of \\(5\\) in \\(x\\)",
      canonicalAnswer: "t=5",
    },
  },
  {
    id: "ga24-029",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A line passes through \\((1, 7)\\) and \\((4, 1)\\). Find its gradient, then find its \\(y\\)-intercept and write the equation in the form \\(y = mx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "gradient from two points", "writing the equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the gradient from the two points.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{1 - 7}{4 - 1}",
          explanation:
            "Label (x1, y1) = (1, 7) and (x2, y2) = (4, 1). Substitute with consistent order top and bottom.",
        },
        {
          stepNumber: 2,
          description: "Simplify the gradient.",
          workingLatex: "m = \\frac{-6}{3} = -2",
          explanation:
            "1 - 7 = -6 and 4 - 1 = 3, so m = -6/3 = -2. The negative value tells us the line slopes downwards.",
        },
        {
          stepNumber: 3,
          description: "Substitute m and one known point into y = mx + c.",
          workingLatex: "7 = -2(1) + c",
          explanation:
            "Use m = -2 with the point (1, 7) to find the unknown c. Substituting a point we know lies on the line lets us pin down the intercept.",
        },
        {
          stepNumber: 4,
          description: "Solve for c.",
          workingLatex: "7 = -2 + c \\ \\Rightarrow\\ c = 9",
          explanation:
            "-2(1) = -2, so 7 = -2 + c. Adding 2 to both sides gives c = 9.",
        },
        {
          stepNumber: 5,
          description: "Write the equation.",
          workingLatex: "y = -2x + 9",
          explanation:
            "With m = -2 and c = 9 the line is y = -2x + 9.",
        },
        {
          stepNumber: 6,
          description: "Check with the second point.",
          workingLatex: "x = 4:\\ y = -2(4) + 9 = -8 + 9 = 1\\ \\checkmark",
          explanation:
            "x = 4 gives y = 1, matching the second point (4, 1) we were given, so the equation is correct.",
          mafs: `<Mafs viewBox={{ x: [-2, 6], y: [-2, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -2*x + 9} color="var(--mafs-fg-accent)" />
  <Point x={0} y={9} color="var(--mafs-fg-blue)" />
  <Text x={0} y={9} attach="w" attachDistance={18}>(0, 9)</Text>
  <Point x={1} y={7} color="var(--mafs-fg-green)" />
  <Text x={1} y={7} attach="e" attachDistance={18}>(1, 7)</Text>
  <Point x={4} y={1} color="var(--mafs-fg-green)" />
  <Text x={4} y={1} attach="e" attachDistance={18}>(4, 1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(m = -2,\\ y = -2x + 9\\)",
      canonicalAnswer: "y=-2x+9",
    },
  },
  {
    id: "ga24-030",
    topicRef: "ga24",
    topicTitle: "Gradient and intercept; y = mx + c",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The cost \\(C\\) (in £) of hiring a tool for \\(d\\) days is modelled by \\(C = 6d + 15\\). State the gradient and explain what it represents, and find the \\(y\\)-intercept and what it represents.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradient and intercept", "interpreting gradient", "real-world context", "y=mx+c"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Match the model to y = mx + c.",
          workingLatex: "C = \\underbrace{6}_{m}\\,d + \\underbrace{15}_{c}",
          explanation:
            "Here C plays the role of y and d plays the role of x. So the coefficient of d (which is 6) is the gradient, and 15 is the intercept (the value of C when d = 0).",
        },
        {
          stepNumber: 2,
          description: "State and interpret the gradient.",
          workingLatex: "m = 6\\ (\\pounds\\text{ per day})",
          explanation:
            "The gradient is 6. In context it is the daily charge: the cost increases by £6 for each extra day of hire. The gradient is always a rate of change — here, pounds per day.",
        },
        {
          stepNumber: 3,
          description: "State and interpret the intercept.",
          workingLatex: "d = 0:\\ C = 6(0) + 15 = 15\\ (\\pounds)",
          explanation:
            "Setting d = 0 gives C = 15. In context this fixed £15 is the cost before any daily charges — for example a one-off booking fee paid even for zero days.",
        },
        {
          stepNumber: 4,
          description: "Confirm with a value.",
          workingLatex: "d = 3:\\ C = 6(3) + 15 = 18 + 15 = 33",
          explanation:
            "Three days cost £33: the £15 fixed fee plus 3 lots of £6. This confirms the gradient as the per-day cost and the intercept as the fixed fee.",
          mafs: `<Mafs viewBox={{ x: [-1, 5], y: [-3, 38] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 6*x + 15} color="var(--mafs-fg-accent)" />
  <Point x={0} y={15} color="var(--mafs-fg-blue)" />
  <Text x={0} y={15} attach="e" attachDistance={18}>(0, 15) fixed fee</Text>
  <Line.Segment point1={[1, 21]} point2={[2, 21]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[2, 21]} point2={[2, 27]} color="var(--mafs-fg-green)" />
  <Text x={1.5} y={21} attach="s" attachDistance={16}>1 day</Text>
  <Text x={2} y={24} attach="e" attachDistance={16}>£6</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "gradient \\(= 6\\) (£ per day); \\(y\\)-intercept \\(= 15\\) (£ fixed charge)",
      canonicalAnswer: "m=6, c=15",
    },
  },
];
