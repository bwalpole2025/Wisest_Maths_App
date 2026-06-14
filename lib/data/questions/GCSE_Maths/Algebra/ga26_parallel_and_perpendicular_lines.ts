/**
 * Topic: Parallel and perpendicular lines
 * Ref: ga26  (DfE A9)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: gradients of parallel and perpendicular lines. Key facts used
 *   throughout — parallel lines have EQUAL gradients (m1 = m2); perpendicular
 *   lines have gradients whose product is -1, so each is the NEGATIVE
 *   RECIPROCAL of the other (m2 = -1/m1). Clusters:
 *   (1) state the gradient of a line parallel/perpendicular to a given line;
 *   (2) decide whether two given lines are parallel, perpendicular, or neither
 *       (rearrange BOTH to y = mx + c first, then compare gradients and test
 *       m1·m2 = -1);
 *   (3) find the equation of a line parallel to a given line through a point;
 *   (4) find the equation of a line perpendicular to a given line through a
 *       point;
 *   (5) perpendicular bisector of a segment (midpoint, perpendicular gradient,
 *       equation) and other multi-step problems.
 *   Solutions stress: rearrange to y = mx + c before comparing gradients; the
 *   minus sign survives when taking the reciprocal; care with fractional
 *   gradients; and a final CHECK (point lies on the line; product of
 *   perpendicular gradients is -1).
 *
 * Difficulty split (30 total):
 *   - Foundation: ga26-001 .. ga26-004  (4)   cleanest "state the gradient" items
 *   - Standard:   ga26-005 .. ga26-018  (14)
 *   - Challenge:  ga26-019 .. ga26-030  (12)
 * Id range: ga26-001 .. ga26-030.
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
    id: "ga26-001",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A line has equation \\(y = 3x + 5\\). State the gradient of any line that is parallel to it.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "parallel gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the gradient of the given line from y = mx + c.",
          workingLatex: "y = 3x + 5 \\quad\\Rightarrow\\quad m = 3",
          explanation:
            "The equation is already in the form y = mx + c, where m is the gradient and c is the y-intercept. Here the number multiplying x is 3, so the gradient of the given line is 3.",
        },
        {
          stepNumber: 2,
          description: "Apply the rule for parallel lines.",
          workingLatex: "\\text{parallel} \\Rightarrow m_2 = m_1 = 3",
          explanation:
            "Parallel lines never meet, so they point in the same direction and therefore have EQUAL gradients. A line parallel to y = 3x + 5 must also have gradient 3 (only its intercept can differ).",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3*x + 5} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 3*x - 2} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={1} attach="w" attachDistance={6}>y = 3x + 5</Text>
  <Text x={2} y={2} attach="e" attachDistance={6}>y = 3x - 2 (parallel)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga26-002",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A line has equation \\(y = 4x - 7\\). State the gradient of any line that is perpendicular to it.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "perpendicular gradient", "negative reciprocal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the gradient of the given line.",
          workingLatex: "y = 4x - 7 \\quad\\Rightarrow\\quad m_1 = 4",
          explanation:
            "The equation is in the form y = mx + c, so the gradient is the number multiplying x: m1 = 4.",
        },
        {
          stepNumber: 2,
          description: "Apply the perpendicular rule: take the negative reciprocal.",
          workingLatex: "m_2 = -\\frac{1}{m_1} = -\\frac{1}{4}",
          explanation:
            "For perpendicular lines the gradients multiply to -1, so the second gradient is the negative reciprocal of the first: flip 4 to 1/4 and change the sign. Keep the minus sign — that is the most common slip.",
        },
        {
          stepNumber: 3,
          description: "Check the product of the gradients.",
          workingLatex: "m_1 \\cdot m_2 = 4 \\cdot \\left(-\\frac{1}{4}\\right) = -1",
          explanation:
            "The product is -1, confirming the two gradients describe perpendicular lines.",
          mafs: `<Mafs viewBox={{ x: [-8, 8], y: [-8, 8] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 4*x - 7} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(1/4)*x} color="var(--mafs-fg-blue)" />
  <Text x={2} y={1} attach="e" attachDistance={6}>y = 4x - 7</Text>
  <Text x={-6} y={1.5} attach="w" attachDistance={6}>gradient -1/4 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-\\dfrac{1}{4}\\)",
      canonicalAnswer: "-1/4",
    },
  },
  {
    id: "ga26-003",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A line has equation \\(y = \\dfrac{2}{5}x + 1\\). State the gradient of any line that is perpendicular to it.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "perpendicular gradient", "negative reciprocal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the gradient of the given line.",
          workingLatex: "y = \\frac{2}{5}x + 1 \\quad\\Rightarrow\\quad m_1 = \\frac{2}{5}",
          explanation:
            "The coefficient of x is the gradient, so m1 = 2/5.",
        },
        {
          stepNumber: 2,
          description: "Take the negative reciprocal of the fraction.",
          workingLatex: "m_2 = -\\frac{1}{\\frac{2}{5}} = -\\frac{5}{2}",
          explanation:
            "To find the reciprocal of a fraction you turn it upside down: the reciprocal of 2/5 is 5/2. Then apply the minus sign required for perpendicularity, giving -5/2.",
        },
        {
          stepNumber: 3,
          description: "Check the product of the gradients.",
          workingLatex: "\\frac{2}{5} \\cdot \\left(-\\frac{5}{2}\\right) = -\\frac{10}{10} = -1",
          explanation:
            "The product equals -1, so the gradients are perpendicular.",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-7, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (2/5)*x + 1} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(5/2)*x} color="var(--mafs-fg-blue)" />
  <Text x={4} y={2} attach="e" attachDistance={6}>y = (2/5)x + 1</Text>
  <Text x={-1.2} y={3} attach="w" attachDistance={6}>gradient -5/2 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-\\dfrac{5}{2}\\)",
      canonicalAnswer: "-5/2",
    },
  },
  {
    id: "ga26-004",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A line has equation \\(y = -2x + 9\\). State the gradient of any line that is parallel to it.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "parallel gradient", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the gradient of the given line, including its sign.",
          workingLatex: "y = -2x + 9 \\quad\\Rightarrow\\quad m_1 = -2",
          explanation:
            "The coefficient of x is -2, so the gradient of the given line is -2. The negative sign belongs to the gradient and must be carried through.",
        },
        {
          stepNumber: 2,
          description: "Apply the parallel rule.",
          workingLatex: "\\text{parallel} \\Rightarrow m_2 = m_1 = -2",
          explanation:
            "Parallel lines have equal gradients, so a parallel line also has gradient -2. (A common error is to change the sign — but that would describe a line going the other way, not a parallel one.)",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -2*x + 9} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -2*x + 2} color="var(--mafs-fg-blue)" />
  <Text x={3} y={3} attach="e" attachDistance={6}>y = -2x + 9</Text>
  <Text x={-1} y={4} attach="w" attachDistance={6}>y = -2x + 2 (parallel)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-2\\)",
      canonicalAnswer: "-2",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga26-005",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A line has equation \\(2y = 6x - 8\\). State the gradient of any line parallel to it.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "rearranging", "parallel gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The equation is not yet in the form y = mx + c, so rearrange it.",
          workingLatex: "2y = 6x - 8",
          explanation:
            "You cannot read off the gradient until the equation is in the form y = mx + c. Here y has a coefficient of 2, so the gradient is NOT simply 6 — you must divide through first.",
        },
        {
          stepNumber: 2,
          description: "Divide every term by 2 to make y the subject.",
          workingLatex: "y = \\frac{6x}{2} - \\frac{8}{2} = 3x - 4",
          explanation:
            "Dividing both sides by 2 isolates y. Each term on the right is divided by 2: 6x ÷ 2 = 3x and -8 ÷ 2 = -4.",
        },
        {
          stepNumber: 3,
          description: "Read the gradient and apply the parallel rule.",
          workingLatex: "m_1 = 3 \\Rightarrow m_2 = 3",
          explanation:
            "Now in the form y = 3x - 4, the gradient is 3. Parallel lines share the same gradient, so any parallel line has gradient 3.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3*x - 4} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 3*x + 1} color="var(--mafs-fg-blue)" />
  <Text x={2} y={2} attach="e" attachDistance={6}>y = 3x - 4</Text>
  <Text x={-1.5} y={2} attach="w" attachDistance={6}>gradient 3 (parallel)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga26-006",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A line has equation \\(3x + 4y = 12\\). State the gradient of any line perpendicular to it.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "rearranging", "perpendicular gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange to make y the subject.",
          workingLatex: "3x + 4y = 12 \\Rightarrow 4y = -3x + 12",
          explanation:
            "Subtract 3x from both sides so the y-term is alone on the left. The equation is in the form ax + by = c, so it must be rearranged before any gradient can be read.",
        },
        {
          stepNumber: 2,
          description: "Divide every term by 4.",
          workingLatex: "y = -\\frac{3}{4}x + 3",
          explanation:
            "Dividing through by 4 gives y on its own. The gradient is therefore m1 = -3/4.",
        },
        {
          stepNumber: 3,
          description: "Take the negative reciprocal for the perpendicular gradient.",
          workingLatex: "m_2 = -\\frac{1}{m_1} = -\\frac{1}{-\\frac{3}{4}} = \\frac{4}{3}",
          explanation:
            "The negative reciprocal of -3/4 is +4/3: turn the fraction upside down (4/3) and change the sign (which makes the negative gradient positive). Note both sign changes combine to give a positive result.",
        },
        {
          stepNumber: 4,
          description: "Check the product is -1.",
          workingLatex: "-\\frac{3}{4} \\cdot \\frac{4}{3} = -\\frac{12}{12} = -1",
          explanation:
            "The product of the two gradients is -1, confirming perpendicularity.",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-7, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(3/4)*x + 3} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => (4/3)*x} color="var(--mafs-fg-blue)" />
  <Text x={-3} y={5} attach="w" attachDistance={6}>y = -(3/4)x + 3</Text>
  <Text x={3} y={4} attach="e" attachDistance={6}>gradient 4/3 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\dfrac{4}{3}\\)",
      canonicalAnswer: "4/3",
    },
  },
  {
    id: "ga26-007",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Decide whether the lines \\(y = 2x + 1\\) and \\(y = 2x - 5\\) are parallel, perpendicular, or neither.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "compare gradients", "parallel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the gradient of each line (both already in y = mx + c form).",
          workingLatex: "m_1 = 2, \\qquad m_2 = 2",
          explanation:
            "Both equations are already in the form y = mx + c, so the gradients can be read directly: the coefficient of x is 2 in each case.",
        },
        {
          stepNumber: 2,
          description: "Compare the gradients.",
          workingLatex: "m_1 = m_2 = 2",
          explanation:
            "Equal gradients mean the lines point in the same direction. The different intercepts (+1 and -5) show they are not the same line.",
        },
        {
          stepNumber: 3,
          description: "Conclude.",
          workingLatex: "m_1 = m_2 \\Rightarrow \\text{parallel}",
          explanation:
            "Because the gradients are equal but the lines are distinct, the lines are parallel.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x + 1} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 2*x - 5} color="var(--mafs-fg-blue)" />
  <Text x={1.5} y={4} attach="e" attachDistance={6}>y = 2x + 1</Text>
  <Text x={2.5} y={0} attach="e" attachDistance={6}>y = 2x - 5 (parallel)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Parallel}\\)",
      canonicalAnswer: "parallel",
    },
  },
  {
    id: "ga26-008",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Decide whether the lines \\(y = \\dfrac{1}{3}x + 4\\) and \\(y = -3x + 2\\) are parallel, perpendicular, or neither.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "compare gradients", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two gradients.",
          workingLatex: "m_1 = \\frac{1}{3}, \\qquad m_2 = -3",
          explanation:
            "Both equations are in y = mx + c form, so read the coefficients of x directly.",
        },
        {
          stepNumber: 2,
          description: "The gradients are different, so test for perpendicularity using m1·m2.",
          workingLatex: "m_1 \\cdot m_2 = \\frac{1}{3} \\cdot (-3) = -\\frac{3}{3} = -1",
          explanation:
            "Since the gradients are not equal, the lines are not parallel. Multiply the gradients together: if the product is -1 the lines are perpendicular.",
        },
        {
          stepNumber: 3,
          description: "Conclude.",
          workingLatex: "m_1 \\cdot m_2 = -1 \\Rightarrow \\text{perpendicular}",
          explanation:
            "The product equals -1, so the lines are perpendicular.",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-7, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (1/3)*x + 4} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -3*x + 2} color="var(--mafs-fg-blue)" />
  <Text x={3} y={5} attach="e" attachDistance={6}>y = (1/3)x + 4</Text>
  <Text x={-1.5} y={5} attach="w" attachDistance={6}>y = -3x + 2 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Perpendicular}\\)",
      canonicalAnswer: "perpendicular",
    },
  },
  {
    id: "ga26-009",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Decide whether the lines \\(2x - y = 3\\) and \\(x + 2y = 8\\) are parallel, perpendicular, or neither.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "rearranging", "compare gradients", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the first line into y = mx + c.",
          workingLatex: "2x - y = 3 \\Rightarrow -y = -2x + 3 \\Rightarrow y = 2x - 3",
          explanation:
            "Subtract 2x from both sides, then multiply through by -1 to make y positive. Both lines are given implicitly, so each MUST be rearranged before gradients can be compared.",
        },
        {
          stepNumber: 2,
          description: "Rearrange the second line into y = mx + c.",
          workingLatex: "x + 2y = 8 \\Rightarrow 2y = -x + 8 \\Rightarrow y = -\\frac{1}{2}x + 4",
          explanation:
            "Subtract x from both sides, then divide every term by 2.",
        },
        {
          stepNumber: 3,
          description: "Identify the gradients and compare.",
          workingLatex: "m_1 = 2, \\qquad m_2 = -\\frac{1}{2}",
          explanation:
            "The gradients are not equal, so the lines are not parallel. Test the product to check for perpendicularity.",
        },
        {
          stepNumber: 4,
          description: "Test the product of gradients.",
          workingLatex: "m_1 \\cdot m_2 = 2 \\cdot \\left(-\\frac{1}{2}\\right) = -1 \\Rightarrow \\text{perpendicular}",
          explanation:
            "The product is -1, so the two lines are perpendicular.",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-7, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x - 3} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(1/2)*x + 4} color="var(--mafs-fg-blue)" />
  <Text x={3.5} y={4} attach="e" attachDistance={6}>y = 2x - 3</Text>
  <Text x={-3} y={5} attach="w" attachDistance={6}>y = -(1/2)x + 4 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Perpendicular}\\)",
      canonicalAnswer: "perpendicular",
    },
  },
  {
    id: "ga26-010",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Decide whether the lines \\(y = 5x - 2\\) and \\(y = -\\dfrac{1}{2}x + 7\\) are parallel, perpendicular, or neither.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "compare gradients", "neither"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two gradients.",
          workingLatex: "m_1 = 5, \\qquad m_2 = -\\frac{1}{2}",
          explanation:
            "Both equations are already in y = mx + c form.",
        },
        {
          stepNumber: 2,
          description: "They are unequal, so test the product for perpendicularity.",
          workingLatex: "m_1 \\cdot m_2 = 5 \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{5}{2}",
          explanation:
            "The gradients differ (5 ≠ -1/2), ruling out parallel. The product is -5/2, which is not -1, so the lines are not perpendicular either.",
        },
        {
          stepNumber: 3,
          description: "Conclude.",
          workingLatex: "m_1 \\neq m_2 \\text{ and } m_1 \\cdot m_2 \\neq -1 \\Rightarrow \\text{neither}",
          explanation:
            "The lines are neither parallel nor perpendicular. (For perpendicularity to 5 we would need a gradient of -1/5, not -1/2.)",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-7, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 5*x - 2} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(1/2)*x + 7} color="var(--mafs-fg-blue)" />
  <Text x={1.2} y={4} attach="e" attachDistance={6}>y = 5x - 2</Text>
  <Text x={-3} y={6} attach="w" attachDistance={6}>y = -(1/2)x + 7 (neither)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Neither}\\)",
      canonicalAnswer: "neither",
    },
  },
  {
    id: "ga26-011",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the line parallel to \\(y = 2x + 1\\) that passes through the point \\((3,\\,5)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "equation of a line", "parallel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the required gradient using the parallel rule.",
          workingLatex: "m = 2",
          explanation:
            "A line parallel to y = 2x + 1 has the same gradient, so m = 2. Only the intercept c will be different.",
        },
        {
          stepNumber: 2,
          description: "Write the partial equation with the known gradient.",
          workingLatex: "y = 2x + c",
          explanation:
            "We know the gradient but not the y-intercept c, so substitute the given point to find it.",
        },
        {
          stepNumber: 3,
          description: "Substitute the point (3, 5) to find c.",
          workingLatex: "5 = 2(3) + c \\Rightarrow 5 = 6 + c \\Rightarrow c = -1",
          explanation:
            "The point (3, 5) lies on the line, so its coordinates satisfy the equation. Put x = 3, y = 5 and solve for c: 5 = 6 + c gives c = -1.",
        },
        {
          stepNumber: 4,
          description: "Write the full equation and check the point.",
          workingLatex: "y = 2x - 1; \\quad x=3: \\; 2(3)-1 = 5 \\checkmark",
          explanation:
            "Substituting x = 3 gives y = 5, confirming the line passes through (3, 5) and has the correct gradient 2.",
          mafs: `<Mafs viewBox={{ x: [-4, 8], y: [-4, 8] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x + 1} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 2*x - 1} color="var(--mafs-fg-blue)" />
  <Point x={3} y={5} color="var(--mafs-fg-green)" />
  <Text x={3} y={5} attach="e" attachDistance={14}>(3, 5)</Text>
  <Text x={-1.5} y={-1} attach="w" attachDistance={6}>y = 2x + 1</Text>
  <Text x={4} y={7} attach="e" attachDistance={6}>y = 2x - 1 (parallel)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 2x - 1\\)",
      canonicalAnswer: "y=2x-1",
    },
  },
  {
    id: "ga26-012",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the line parallel to \\(y = -3x + 4\\) that passes through the point \\((-2,\\,7)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "equation of a line", "parallel", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the required gradient using the parallel rule.",
          workingLatex: "m = -3",
          explanation:
            "Parallel lines share a gradient, so the new line also has gradient -3.",
        },
        {
          stepNumber: 2,
          description: "Substitute the point (-2, 7) into y = -3x + c.",
          workingLatex: "7 = -3(-2) + c \\Rightarrow 7 = 6 + c",
          explanation:
            "Take care with the double negative: -3 × -2 = +6. The point's coordinates must satisfy the equation.",
        },
        {
          stepNumber: 3,
          description: "Solve for c.",
          workingLatex: "c = 7 - 6 = 1",
          explanation:
            "Subtract 6 from both sides to isolate c, giving c = 1.",
        },
        {
          stepNumber: 4,
          description: "State the equation and check.",
          workingLatex: "y = -3x + 1; \\quad x=-2: \\; -3(-2)+1 = 7 \\checkmark",
          explanation:
            "Substituting x = -2 returns y = 7, so the line passes through the given point.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-2, 10] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -3*x + 4} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -3*x + 1} color="var(--mafs-fg-blue)" />
  <Point x={-2} y={7} color="var(--mafs-fg-green)" />
  <Text x={-2} y={7} attach="w" attachDistance={14}>(-2, 7)</Text>
  <Text x={1.5} y={1} attach="e" attachDistance={6}>y = -3x + 4</Text>
  <Text x={0.5} y={2} attach="e" attachDistance={6}>y = -3x + 1 (parallel)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -3x + 1\\)",
      canonicalAnswer: "y=-3x+1",
    },
  },
  {
    id: "ga26-013",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the line perpendicular to \\(y = 2x + 3\\) that passes through the point \\((4,\\,1)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "equation of a line", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of the given line.",
          workingLatex: "m_1 = 2",
          explanation:
            "The line y = 2x + 3 has gradient 2.",
        },
        {
          stepNumber: 2,
          description: "Take the negative reciprocal for the perpendicular gradient.",
          workingLatex: "m_2 = -\\frac{1}{m_1} = -\\frac{1}{2}",
          explanation:
            "Perpendicular gradients multiply to -1, so flip 2 to 1/2 and apply the minus sign, giving -1/2. Do not forget the minus sign.",
        },
        {
          stepNumber: 3,
          description: "Substitute the point (4, 1) into y = -1/2 x + c.",
          workingLatex: "1 = -\\frac{1}{2}(4) + c \\Rightarrow 1 = -2 + c",
          explanation:
            "With m = -1/2, put x = 4 and y = 1. The term -1/2 × 4 = -2.",
        },
        {
          stepNumber: 4,
          description: "Solve for c and state the equation.",
          workingLatex: "c = 3 \\Rightarrow y = -\\frac{1}{2}x + 3",
          explanation:
            "Adding 2 to both sides gives c = 3. Check: -1/2 × 4 + 3 = -2 + 3 = 1, so (4, 1) lies on the line, and 2 × (-1/2) = -1 confirms perpendicularity.",
          mafs: `<Mafs viewBox={{ x: [-4, 8], y: [-4, 8] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x + 3} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(1/2)*x + 3} color="var(--mafs-fg-blue)" />
  <Point x={4} y={1} color="var(--mafs-fg-green)" />
  <Text x={4} y={1} attach="e" attachDistance={14}>(4, 1)</Text>
  <Text x={-2} y={-1} attach="w" attachDistance={6}>y = 2x + 3</Text>
  <Text x={5} y={0.5} attach="e" attachDistance={6}>y = -(1/2)x + 3 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\dfrac{1}{2}x + 3\\)",
      canonicalAnswer: "y=-1/2x+3",
    },
  },
  {
    id: "ga26-014",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the line perpendicular to \\(y = -\\dfrac{1}{4}x + 2\\) that passes through the point \\((1,\\,6)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "equation of a line", "perpendicular", "negative reciprocal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of the given line.",
          workingLatex: "m_1 = -\\frac{1}{4}",
          explanation:
            "The coefficient of x is -1/4, so m1 = -1/4.",
        },
        {
          stepNumber: 2,
          description: "Take the negative reciprocal.",
          workingLatex: "m_2 = -\\frac{1}{-\\frac{1}{4}} = 4",
          explanation:
            "The reciprocal of -1/4 is -4; applying the extra minus sign gives +4. Equivalently, flipping the fraction and changing sign turns -1/4 into 4. Check: -1/4 × 4 = -1.",
        },
        {
          stepNumber: 3,
          description: "Substitute the point (1, 6) into y = 4x + c.",
          workingLatex: "6 = 4(1) + c \\Rightarrow 6 = 4 + c",
          explanation:
            "Put x = 1 and y = 6 to find c.",
        },
        {
          stepNumber: 4,
          description: "Solve for c and state the equation.",
          workingLatex: "c = 2 \\Rightarrow y = 4x + 2",
          explanation:
            "Subtracting 4 gives c = 2. Check: 4(1) + 2 = 6, so the point lies on the line.",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-7, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(1/4)*x + 2} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 4*x + 2} color="var(--mafs-fg-blue)" />
  <Point x={1} y={6} color="var(--mafs-fg-green)" />
  <Text x={1} y={6} attach="e" attachDistance={14}>(1, 6)</Text>
  <Text x={4} y={1} attach="e" attachDistance={6}>y = -(1/4)x + 2</Text>
  <Text x={-1.5} y={3} attach="w" attachDistance={6}>y = 4x + 2 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 4x + 2\\)",
      canonicalAnswer: "y=4x+2",
    },
  },
  {
    id: "ga26-015",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the line parallel to \\(4x + 2y = 5\\) that passes through the point \\((1,\\,-2)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "rearranging", "equation of a line", "parallel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the given line to find its gradient.",
          workingLatex: "4x + 2y = 5 \\Rightarrow 2y = -4x + 5 \\Rightarrow y = -2x + \\frac{5}{2}",
          explanation:
            "Subtract 4x and divide by 2. The gradient is -2 (the intercept 5/2 is not needed).",
        },
        {
          stepNumber: 2,
          description: "Use the parallel rule for the required gradient.",
          workingLatex: "m = -2",
          explanation:
            "A parallel line has the same gradient, so m = -2.",
        },
        {
          stepNumber: 3,
          description: "Substitute the point (1, -2) into y = -2x + c.",
          workingLatex: "-2 = -2(1) + c \\Rightarrow -2 = -2 + c \\Rightarrow c = 0",
          explanation:
            "Putting x = 1, y = -2 gives -2 = -2 + c, so c = 0.",
        },
        {
          stepNumber: 4,
          description: "State the equation and check.",
          workingLatex: "y = -2x; \\quad x=1: \\; -2(1) = -2 \\checkmark",
          explanation:
            "With c = 0 the line is y = -2x. Substituting x = 1 gives y = -2, confirming the point lies on the line.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -2*x + 5/2} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -2*x} color="var(--mafs-fg-blue)" />
  <Point x={1} y={-2} color="var(--mafs-fg-green)" />
  <Text x={1} y={-2} attach="e" attachDistance={14}>(1, -2)</Text>
  <Text x={-1.5} y={4} attach="w" attachDistance={6}>y = -2x + 5/2</Text>
  <Text x={2} y={-3} attach="e" attachDistance={6}>y = -2x (parallel)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -2x\\)",
      canonicalAnswer: "y=-2x",
    },
  },
  {
    id: "ga26-016",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the line perpendicular to \\(x - 3y = 6\\) that passes through the point \\((2,\\,5)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "rearranging", "equation of a line", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the given line to find its gradient.",
          workingLatex: "x - 3y = 6 \\Rightarrow -3y = -x + 6 \\Rightarrow y = \\frac{1}{3}x - 2",
          explanation:
            "Subtract x, then divide every term by -3 (note -x ÷ -3 = x/3 and 6 ÷ -3 = -2). The gradient is m1 = 1/3.",
        },
        {
          stepNumber: 2,
          description: "Take the negative reciprocal for the perpendicular gradient.",
          workingLatex: "m_2 = -\\frac{1}{\\frac{1}{3}} = -3",
          explanation:
            "Flip 1/3 to 3 and apply the minus sign, giving -3. Check: 1/3 × -3 = -1.",
        },
        {
          stepNumber: 3,
          description: "Substitute the point (2, 5) into y = -3x + c.",
          workingLatex: "5 = -3(2) + c \\Rightarrow 5 = -6 + c",
          explanation:
            "Put x = 2 and y = 5 to find the intercept.",
        },
        {
          stepNumber: 4,
          description: "Solve for c and state the equation.",
          workingLatex: "c = 11 \\Rightarrow y = -3x + 11",
          explanation:
            "Adding 6 to both sides gives c = 11. Check: -3(2) + 11 = -6 + 11 = 5, so (2, 5) lies on the line.",
          mafs: `<Mafs viewBox={{ x: [-3, 9], y: [-3, 9] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (1/3)*x - 2} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -3*x + 11} color="var(--mafs-fg-blue)" />
  <Point x={2} y={5} color="var(--mafs-fg-green)" />
  <Text x={2} y={5} attach="e" attachDistance={14}>(2, 5)</Text>
  <Text x={6} y={0} attach="e" attachDistance={6}>y = (1/3)x - 2</Text>
  <Text x={1} y={8} attach="e" attachDistance={6}>y = -3x + 11 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -3x + 11\\)",
      canonicalAnswer: "y=-3x+11",
    },
  },
  {
    id: "ga26-017",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The line \\(y = kx - 1\\) is perpendicular to the line \\(y = \\dfrac{2}{3}x + 5\\). Find the value of \\(k\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "find unknown gradient", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the gradient of the given line.",
          workingLatex: "m_1 = \\frac{2}{3}",
          explanation:
            "The second line has gradient 2/3. The first line has gradient k, which we must find.",
        },
        {
          stepNumber: 2,
          description: "Apply the perpendicular condition: k is the negative reciprocal of 2/3.",
          workingLatex: "k = -\\frac{1}{\\frac{2}{3}} = -\\frac{3}{2}",
          explanation:
            "Because the lines are perpendicular, the gradient k must be the negative reciprocal of 2/3: flip to 3/2 and change the sign.",
        },
        {
          stepNumber: 3,
          description: "Check the product of the gradients.",
          workingLatex: "\\frac{2}{3} \\cdot \\left(-\\frac{3}{2}\\right) = -1 \\checkmark",
          explanation:
            "The product is -1, confirming k = -3/2 makes the lines perpendicular.",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-7, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (2/3)*x + 5} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(3/2)*x - 1} color="var(--mafs-fg-blue)" />
  <Text x={-4} y={3} attach="w" attachDistance={6}>y = (2/3)x + 5</Text>
  <Text x={2} y={-4} attach="e" attachDistance={6}>y = -(3/2)x - 1 (k = -3/2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = -\\dfrac{3}{2}\\)",
      canonicalAnswer: "-3/2",
    },
  },
  {
    id: "ga26-018",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the equation of the line parallel to \\(y = \\dfrac{3}{2}x - 4\\) that passes through the point \\((4,\\,1)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "equation of a line", "parallel", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the parallel rule to find the gradient.",
          workingLatex: "m = \\frac{3}{2}",
          explanation:
            "A parallel line has the same gradient, so m = 3/2.",
        },
        {
          stepNumber: 2,
          description: "Substitute the point (4, 1) into y = 3/2 x + c.",
          workingLatex: "1 = \\frac{3}{2}(4) + c = 6 + c",
          explanation:
            "With x = 4, the term 3/2 × 4 = 12/2 = 6. Take care multiplying a fraction by an integer: 3/2 × 4 = 6.",
        },
        {
          stepNumber: 3,
          description: "Solve for c.",
          workingLatex: "c = 1 - 6 = -5",
          explanation:
            "Subtract 6 from both sides to obtain c = -5.",
        },
        {
          stepNumber: 4,
          description: "State the equation and check.",
          workingLatex: "y = \\frac{3}{2}x - 5; \\quad x=4: \\; \\frac{3}{2}(4) - 5 = 1 \\checkmark",
          explanation:
            "Substituting x = 4 returns y = 1, so the line passes through (4, 1).",
          mafs: `<Mafs viewBox={{ x: [-4, 8], y: [-7, 5] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (3/2)*x - 4} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => (3/2)*x - 5} color="var(--mafs-fg-blue)" />
  <Point x={4} y={1} color="var(--mafs-fg-green)" />
  <Text x={4} y={1} attach="e" attachDistance={14}>(4, 1)</Text>
  <Text x={-1} y={-3} attach="w" attachDistance={6}>y = (3/2)x - 4</Text>
  <Text x={1} y={-4} attach="e" attachDistance={6}>y = (3/2)x - 5 (parallel)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = \\dfrac{3}{2}x - 5\\)",
      canonicalAnswer: "y=3/2x-5",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga26-019",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A line passes through the points \\(A(1,\\,2)\\) and \\(B(5,\\,10)\\). Find the equation of the line through the point \\((0,\\,3)\\) that is perpendicular to \\(AB\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "gradient from two points", "perpendicular", "equation of a line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of AB from the two points.",
          workingLatex: "m_{AB} = \\frac{10 - 2}{5 - 1} = \\frac{8}{4} = 2",
          explanation:
            "Use gradient = (change in y) ÷ (change in x). Subtracting in the same order top and bottom gives (10-2)/(5-1) = 2.",
        },
        {
          stepNumber: 2,
          description: "Find the perpendicular gradient.",
          workingLatex: "m_\\perp = -\\frac{1}{2}",
          explanation:
            "The perpendicular gradient is the negative reciprocal of 2, i.e. -1/2. Check: 2 × (-1/2) = -1.",
        },
        {
          stepNumber: 3,
          description: "Use the given point (0, 3); this is the y-intercept.",
          workingLatex: "y = -\\frac{1}{2}x + c, \\quad 3 = -\\frac{1}{2}(0) + c",
          explanation:
            "Substituting x = 0, y = 3 gives 3 = 0 + c, so c = 3. (Because the point has x = 0 it is the y-intercept directly.)",
        },
        {
          stepNumber: 4,
          description: "State the equation.",
          workingLatex: "c = 3 \\Rightarrow y = -\\frac{1}{2}x + 3",
          explanation:
            "The required line is y = -1/2 x + 3, with gradient -1/2 (perpendicular to AB) and passing through (0, 3).",
          mafs: `<Mafs viewBox={{ x: [-6, 8], y: [-2, 12] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(1/2)*x + 3} color="var(--mafs-fg-blue)" />
  <Point x={1} y={2} color="var(--mafs-fg-orange)" />
  <Text x={1} y={2} attach="e" attachDistance={12}>A(1, 2)</Text>
  <Point x={5} y={10} color="var(--mafs-fg-orange)" />
  <Text x={5} y={10} attach="w" attachDistance={12}>B(5, 10)</Text>
  <Point x={0} y={3} color="var(--mafs-fg-green)" />
  <Text x={0} y={3} attach="w" attachDistance={12}>(0, 3)</Text>
  <Text x={4} y={9} attach="e" attachDistance={6}>AB: y = 2x</Text>
  <Text x={-5} y={5} attach="w" attachDistance={6}>y = -(1/2)x + 3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\dfrac{1}{2}x + 3\\)",
      canonicalAnswer: "y=-1/2x+3",
    },
  },
  {
    id: "ga26-020",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the equation of the perpendicular bisector of the line segment joining \\(A(1,\\,2)\\) and \\(B(7,\\,6)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "perpendicular bisector", "midpoint", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the midpoint of AB (the bisector passes through it).",
          workingLatex: "M = \\left( \\frac{1+7}{2}, \\frac{2+6}{2} \\right) = (4,\\,4)",
          explanation:
            "A perpendicular bisector cuts the segment in half at right angles, so it must pass through the midpoint. The midpoint averages the x- and y-coordinates of A and B.",
        },
        {
          stepNumber: 2,
          description: "Find the gradient of AB.",
          workingLatex: "m_{AB} = \\frac{6 - 2}{7 - 1} = \\frac{4}{6} = \\frac{2}{3}",
          explanation:
            "Gradient = rise/run = (6-2)/(7-1) = 4/6, which simplifies to 2/3.",
        },
        {
          stepNumber: 3,
          description: "Find the perpendicular gradient.",
          workingLatex: "m_\\perp = -\\frac{1}{\\frac{2}{3}} = -\\frac{3}{2}",
          explanation:
            "The bisector is perpendicular to AB, so its gradient is the negative reciprocal of 2/3, i.e. -3/2. Check: 2/3 × (-3/2) = -1.",
        },
        {
          stepNumber: 4,
          description: "Substitute the midpoint (4, 4) into y = -3/2 x + c.",
          workingLatex: "4 = -\\frac{3}{2}(4) + c = -6 + c",
          explanation:
            "The line passes through M(4, 4), so substitute x = 4, y = 4. The term -3/2 × 4 = -6.",
        },
        {
          stepNumber: 5,
          description: "Solve for c and state the equation.",
          workingLatex: "c = 10 \\Rightarrow y = -\\frac{3}{2}x + 10",
          explanation:
            "Adding 6 gives c = 10. Check: at x = 4, y = -6 + 10 = 4, the midpoint. The gradient -3/2 is perpendicular to AB.",
          mafs: `<Mafs viewBox={{ x: [-2, 10], y: [-2, 10] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (2/3)*x + 4/3} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(3/2)*x + 10} color="var(--mafs-fg-blue)" />
  <Point x={1} y={2} color="var(--mafs-fg-orange)" />
  <Text x={1} y={2} attach="w" attachDistance={12}>A(1, 2)</Text>
  <Point x={7} y={6} color="var(--mafs-fg-orange)" />
  <Text x={7} y={6} attach="e" attachDistance={12}>B(7, 6)</Text>
  <Point x={4} y={4} color="var(--mafs-fg-green)" />
  <Text x={4} y={4} attach="s" attachDistance={12}>M(4, 4)</Text>
  <Text x={8} y={5} attach="e" attachDistance={6}>AB</Text>
  <Text x={1} y={8} attach="e" attachDistance={6}>y = -(3/2)x + 10</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\dfrac{3}{2}x + 10\\)",
      canonicalAnswer: "y=-3/2x+10",
    },
  },
  {
    id: "ga26-021",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the equation of the perpendicular bisector of the line segment joining \\(P(-2,\\,3)\\) and \\(Q(4,\\,-1)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "perpendicular bisector", "midpoint", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the midpoint of PQ.",
          workingLatex: "M = \\left( \\frac{-2+4}{2}, \\frac{3+(-1)}{2} \\right) = (1,\\,1)",
          explanation:
            "Average the coordinates: x = (-2+4)/2 = 1, y = (3-1)/2 = 1. The bisector passes through M(1, 1).",
        },
        {
          stepNumber: 2,
          description: "Find the gradient of PQ.",
          workingLatex: "m_{PQ} = \\frac{-1 - 3}{4 - (-2)} = \\frac{-4}{6} = -\\frac{2}{3}",
          explanation:
            "Be careful with signs: top is -1 - 3 = -4, bottom is 4 - (-2) = 6, giving -4/6 = -2/3.",
        },
        {
          stepNumber: 3,
          description: "Find the perpendicular gradient.",
          workingLatex: "m_\\perp = -\\frac{1}{-\\frac{2}{3}} = \\frac{3}{2}",
          explanation:
            "The negative reciprocal of -2/3 is +3/2: flip the fraction and change the sign (two negatives give a positive). Check: -2/3 × 3/2 = -1.",
        },
        {
          stepNumber: 4,
          description: "Substitute the midpoint (1, 1) into y = 3/2 x + c.",
          workingLatex: "1 = \\frac{3}{2}(1) + c = \\frac{3}{2} + c",
          explanation:
            "Put x = 1, y = 1. The term 3/2 × 1 = 3/2.",
        },
        {
          stepNumber: 5,
          description: "Solve for c and state the equation.",
          workingLatex: "c = 1 - \\frac{3}{2} = -\\frac{1}{2} \\Rightarrow y = \\frac{3}{2}x - \\frac{1}{2}",
          explanation:
            "Subtract 3/2 from 1 to get -1/2. Check: at x = 1, y = 3/2 - 1/2 = 1, the midpoint.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(2/3)*x + 5/3} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => (3/2)*x - 1/2} color="var(--mafs-fg-blue)" />
  <Point x={-2} y={3} color="var(--mafs-fg-orange)" />
  <Text x={-2} y={3} attach="w" attachDistance={12}>P(-2, 3)</Text>
  <Point x={4} y={-1} color="var(--mafs-fg-orange)" />
  <Text x={4} y={-1} attach="e" attachDistance={12}>Q(4, -1)</Text>
  <Point x={1} y={1} color="var(--mafs-fg-green)" />
  <Text x={1} y={1} attach="se" attachDistance={12}>M(1, 1)</Text>
  <Text x={4} y={0.5} attach="e" attachDistance={6}>PQ</Text>
  <Text x={2} y={4} attach="e" attachDistance={6}>y = (3/2)x - 1/2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = \\dfrac{3}{2}x - \\dfrac{1}{2}\\)",
      canonicalAnswer: "y=3/2x-1/2",
    },
  },
  {
    id: "ga26-022",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the equation of the line perpendicular to \\(3x + 5y = 15\\) that passes through the point \\((6,\\,-2)\\). Give your answer in the form \\(ax + by = c\\) where \\(a\\), \\(b\\) and \\(c\\) are integers.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "rearranging", "perpendicular", "integer form"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the given line to find its gradient.",
          workingLatex: "3x + 5y = 15 \\Rightarrow 5y = -3x + 15 \\Rightarrow y = -\\frac{3}{5}x + 3",
          explanation:
            "Subtract 3x and divide by 5. The gradient is m1 = -3/5.",
        },
        {
          stepNumber: 2,
          description: "Take the negative reciprocal.",
          workingLatex: "m_2 = -\\frac{1}{-\\frac{3}{5}} = \\frac{5}{3}",
          explanation:
            "The negative reciprocal of -3/5 is +5/3. Check: -3/5 × 5/3 = -1.",
        },
        {
          stepNumber: 3,
          description: "Substitute the point (6, -2) into y = 5/3 x + c.",
          workingLatex: "-2 = \\frac{5}{3}(6) + c = 10 + c \\Rightarrow c = -12",
          explanation:
            "With x = 6, the term 5/3 × 6 = 30/3 = 10, so -2 = 10 + c gives c = -12.",
        },
        {
          stepNumber: 4,
          description: "Write the equation in y = mx + c form.",
          workingLatex: "y = \\frac{5}{3}x - 12",
          explanation:
            "This is correct but not yet in integer ax + by = c form, so clear the fraction next.",
        },
        {
          stepNumber: 5,
          description: "Multiply through by 3 and rearrange to integer form.",
          workingLatex: "3y = 5x - 36 \\Rightarrow 5x - 3y = 36",
          explanation:
            "Multiply every term by 3 to remove the fraction, then move terms so x and y are on one side. Check: 5(6) - 3(-2) = 30 + 6 = 36, so (6, -2) satisfies it.",
          mafs: `<Mafs viewBox={{ x: [-2, 10], y: [-8, 4] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(3/5)*x + 3} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => (5/3)*x - 12} color="var(--mafs-fg-blue)" />
  <Point x={6} y={-2} color="var(--mafs-fg-green)" />
  <Text x={6} y={-2} attach="e" attachDistance={12}>(6, -2)</Text>
  <Text x={-1} y={3} attach="w" attachDistance={6}>3x + 5y = 15</Text>
  <Text x={8} y={1} attach="e" attachDistance={6}>5x - 3y = 36 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(5x - 3y = 36\\)",
      canonicalAnswer: "5x-3y=36",
    },
  },
  {
    id: "ga26-023",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The line \\(2y = (k+1)x + 4\\) is parallel to the line \\(y = 3x - 2\\). Find the value of \\(k\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "rearranging", "find unknown", "parallel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of the second line.",
          workingLatex: "y = 3x - 2 \\Rightarrow m = 3",
          explanation:
            "The line we must match has gradient 3.",
        },
        {
          stepNumber: 2,
          description: "Rearrange the first line into y = mx + c form.",
          workingLatex: "2y = (k+1)x + 4 \\Rightarrow y = \\frac{k+1}{2}x + 2",
          explanation:
            "Divide every term by 2. The gradient of the first line is (k+1)/2. You must rearrange first — the gradient is not k+1.",
        },
        {
          stepNumber: 3,
          description: "Set the gradients equal (parallel rule) and solve.",
          workingLatex: "\\frac{k+1}{2} = 3 \\Rightarrow k+1 = 6 \\Rightarrow k = 5",
          explanation:
            "Parallel lines have equal gradients. Multiply both sides by 2, then subtract 1 to find k = 5.",
        },
        {
          stepNumber: 4,
          description: "Check.",
          workingLatex: "k=5: \\; \\frac{5+1}{2} = \\frac{6}{2} = 3 \\checkmark",
          explanation:
            "With k = 5 the first line's gradient is 3, matching the second line, so they are parallel.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3*x - 2} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 3*x + 2} color="var(--mafs-fg-blue)" />
  <Text x={1.5} y={1} attach="e" attachDistance={6}>y = 3x - 2</Text>
  <Text x={-1} y={2} attach="w" attachDistance={6}>y = 3x + 2 (k = 5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga26-024",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Triangle \\(OAB\\) has vertices \\(O(0,\\,0)\\), \\(A(4,\\,2)\\) and \\(B(1,\\,3)\\). Show, using gradients, that angle \\(OAB\\) is a right angle, and state the relationship between lines \\(AO\\) and \\(AB\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "gradient from two points", "perpendicular", "proof"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The right angle is at A, so find the gradients of the two lines meeting at A: AO and AB.",
          workingLatex: "\\text{lines through } A(4,2): \\; AO \\text{ and } AB",
          explanation:
            "Angle OAB is the angle at vertex A, formed by the lines AO and AB. To test whether it is a right angle, compare the gradients of these two lines.",
        },
        {
          stepNumber: 2,
          description: "Find the gradient of AO.",
          workingLatex: "m_{AO} = \\frac{0 - 2}{0 - 4} = \\frac{-2}{-4} = \\frac{1}{2}",
          explanation:
            "Using A(4, 2) and O(0, 0): (0-2)/(0-4) = -2/-4 = 1/2.",
        },
        {
          stepNumber: 3,
          description: "Find the gradient of AB.",
          workingLatex: "m_{AB} = \\frac{3 - 2}{1 - 4} = \\frac{1}{-3} = -\\frac{1}{3}",
          explanation:
            "Using A(4, 2) and B(1, 3): (3-2)/(1-4) = 1/-3 = -1/3.",
        },
        {
          stepNumber: 4,
          description: "Test the product of the gradients.",
          workingLatex: "m_{AO} \\cdot m_{AB} = \\frac{1}{2} \\cdot \\left(-\\frac{1}{3}\\right) = -\\frac{1}{6}",
          explanation:
            "For a right angle the product would have to equal -1. Here it equals -1/6, which is not -1.",
        },
        {
          stepNumber: 5,
          description: "Conclude.",
          workingLatex: "m_{AO} \\cdot m_{AB} = -\\frac{1}{6} \\neq -1 \\Rightarrow \\text{not perpendicular}",
          explanation:
            "Since the product is not -1, the lines AO and AB are NOT perpendicular, so angle OAB is NOT a right angle. The claim is therefore false; AO and AB are neither parallel nor perpendicular.",
          mafs: `<Mafs viewBox={{ x: [-3, 7], y: [-3, 7] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (1/2)*x} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(1/3)*x + 10/3} color="var(--mafs-fg-blue)" />
  <Point x={0} y={0} color="var(--mafs-fg-orange)" />
  <Text x={0} y={0} attach="sw" attachDistance={12}>O(0, 0)</Text>
  <Point x={4} y={2} color="var(--mafs-fg-green)" />
  <Text x={4} y={2} attach="se" attachDistance={12}>A(4, 2)</Text>
  <Point x={1} y={3} color="var(--mafs-fg-orange)" />
  <Text x={1} y={3} attach="w" attachDistance={12}>B(1, 3)</Text>
  <Text x={5} y={2.5} attach="e" attachDistance={6}>AO: y = (1/2)x</Text>
  <Text x={-1} y={4} attach="w" attachDistance={6}>AB</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Not a right angle: } m_{AO}\\cdot m_{AB} = -\\tfrac{1}{6} \\neq -1\\)",
      canonicalAnswer: "not perpendicular",
    },
  },
  {
    id: "ga26-025",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A line \\(L\\) is perpendicular to \\(y = \\dfrac{4}{3}x + 1\\) and passes through the point \\((8,\\,3)\\). Find where \\(L\\) crosses the \\(x\\)-axis.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "perpendicular", "x-intercept", "equation of a line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the perpendicular gradient.",
          workingLatex: "m_1 = \\frac{4}{3} \\Rightarrow m_2 = -\\frac{1}{\\frac{4}{3}} = -\\frac{3}{4}",
          explanation:
            "The negative reciprocal of 4/3 is -3/4. Check: 4/3 × (-3/4) = -1.",
        },
        {
          stepNumber: 2,
          description: "Substitute the point (8, 3) into y = -3/4 x + c.",
          workingLatex: "3 = -\\frac{3}{4}(8) + c = -6 + c",
          explanation:
            "With x = 8, the term -3/4 × 8 = -24/4 = -6.",
        },
        {
          stepNumber: 3,
          description: "Solve for c.",
          workingLatex: "c = 9 \\Rightarrow y = -\\frac{3}{4}x + 9",
          explanation:
            "Adding 6 gives c = 9, so L has equation y = -3/4 x + 9.",
        },
        {
          stepNumber: 4,
          description: "Set y = 0 to find the x-intercept.",
          workingLatex: "0 = -\\frac{3}{4}x + 9 \\Rightarrow \\frac{3}{4}x = 9",
          explanation:
            "A line crosses the x-axis where y = 0. Substitute y = 0 and rearrange.",
        },
        {
          stepNumber: 5,
          description: "Solve for x.",
          workingLatex: "x = 9 \\cdot \\frac{4}{3} = \\frac{36}{3} = 12",
          explanation:
            "Multiply both sides by 4/3 (the reciprocal of 3/4) to get x = 12. So L crosses the x-axis at (12, 0).",
          mafs: `<Mafs viewBox={{ x: [-2, 14], y: [-4, 12] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (4/3)*x + 1} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(3/4)*x + 9} color="var(--mafs-fg-blue)" />
  <Point x={8} y={3} color="var(--mafs-fg-green)" />
  <Text x={8} y={3} attach="ne" attachDistance={12}>(8, 3)</Text>
  <Point x={12} y={0} color="var(--mafs-fg-orange)" />
  <Text x={12} y={0} attach="se" attachDistance={12}>(12, 0)</Text>
  <Text x={4} y={7} attach="w" attachDistance={6}>y = (4/3)x + 1</Text>
  <Text x={2} y={8} attach="e" attachDistance={6}>L: y = -(3/4)x + 9</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((12,\\,0)\\)",
      canonicalAnswer: "(12,0)",
    },
  },
  {
    id: "ga26-026",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The line \\(y = mx + c\\) is perpendicular to \\(y = \\dfrac{1}{2}x + 7\\) and passes through the point \\((-4,\\,11)\\). Find \\(m\\) and \\(c\\), and hence the equation of the line.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "perpendicular", "equation of a line", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the perpendicular gradient m.",
          workingLatex: "m = -\\frac{1}{\\frac{1}{2}} = -2",
          explanation:
            "The negative reciprocal of 1/2 is -2. Check: 1/2 × (-2) = -1, so m = -2.",
        },
        {
          stepNumber: 2,
          description: "Substitute the point (-4, 11) into y = -2x + c.",
          workingLatex: "11 = -2(-4) + c = 8 + c",
          explanation:
            "Take care with the double negative: -2 × -4 = +8.",
        },
        {
          stepNumber: 3,
          description: "Solve for c.",
          workingLatex: "c = 11 - 8 = 3",
          explanation:
            "Subtract 8 from both sides to get c = 3.",
        },
        {
          stepNumber: 4,
          description: "State the equation and check.",
          workingLatex: "y = -2x + 3; \\quad x=-4: \\; -2(-4)+3 = 11 \\checkmark",
          explanation:
            "So m = -2, c = 3 and the line is y = -2x + 3. Substituting x = -4 returns y = 11, confirming the point lies on the line.",
          mafs: `<Mafs viewBox={{ x: [-9, 5], y: [-1, 13] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (1/2)*x + 7} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -2*x + 3} color="var(--mafs-fg-blue)" />
  <Point x={-4} y={11} color="var(--mafs-fg-green)" />
  <Text x={-4} y={11} attach="e" attachDistance={12}>(-4, 11)</Text>
  <Text x={3} y={8} attach="e" attachDistance={6}>y = (1/2)x + 7</Text>
  <Text x={-2} y={7} attach="e" attachDistance={6}>y = -2x + 3 (perpendicular)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -2x + 3 \\;\\; (m = -2,\\; c = 3)\\)",
      canonicalAnswer: "y=-2x+3",
    },
  },
  {
    id: "ga26-027",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the equation of the perpendicular bisector of the line segment joining \\(A(-3,\\,-1)\\) and \\(B(5,\\,5)\\). Give your answer in the form \\(y = mx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "perpendicular bisector", "midpoint", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the midpoint of AB.",
          workingLatex: "M = \\left( \\frac{-3+5}{2}, \\frac{-1+5}{2} \\right) = (1,\\,2)",
          explanation:
            "Average the coordinates: x = (-3+5)/2 = 1, y = (-1+5)/2 = 2. The bisector passes through M(1, 2).",
        },
        {
          stepNumber: 2,
          description: "Find the gradient of AB.",
          workingLatex: "m_{AB} = \\frac{5 - (-1)}{5 - (-3)} = \\frac{6}{8} = \\frac{3}{4}",
          explanation:
            "Top: 5 - (-1) = 6. Bottom: 5 - (-3) = 8. So m_AB = 6/8 = 3/4.",
        },
        {
          stepNumber: 3,
          description: "Find the perpendicular gradient.",
          workingLatex: "m_\\perp = -\\frac{1}{\\frac{3}{4}} = -\\frac{4}{3}",
          explanation:
            "The negative reciprocal of 3/4 is -4/3. Check: 3/4 × (-4/3) = -1.",
        },
        {
          stepNumber: 4,
          description: "Substitute the midpoint (1, 2) into y = -4/3 x + c.",
          workingLatex: "2 = -\\frac{4}{3}(1) + c = -\\frac{4}{3} + c",
          explanation:
            "Put x = 1, y = 2. The term -4/3 × 1 = -4/3.",
        },
        {
          stepNumber: 5,
          description: "Solve for c and state the equation.",
          workingLatex: "c = 2 + \\frac{4}{3} = \\frac{6}{3} + \\frac{4}{3} = \\frac{10}{3} \\Rightarrow y = -\\frac{4}{3}x + \\frac{10}{3}",
          explanation:
            "Write 2 as 6/3 and add 4/3 to get 10/3. Check: at x = 1, y = -4/3 + 10/3 = 6/3 = 2, the midpoint.",
          mafs: `<Mafs viewBox={{ x: [-6, 8], y: [-5, 9] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (3/4)*x + 5/4} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(4/3)*x + 10/3} color="var(--mafs-fg-blue)" />
  <Point x={-3} y={-1} color="var(--mafs-fg-orange)" />
  <Text x={-3} y={-1} attach="w" attachDistance={12}>A(-3, -1)</Text>
  <Point x={5} y={5} color="var(--mafs-fg-orange)" />
  <Text x={5} y={5} attach="e" attachDistance={12}>B(5, 5)</Text>
  <Point x={1} y={2} color="var(--mafs-fg-green)" />
  <Text x={1} y={2} attach="se" attachDistance={12}>M(1, 2)</Text>
  <Text x={6} y={6} attach="e" attachDistance={6}>AB</Text>
  <Text x={-3} y={6} attach="w" attachDistance={6}>y = -(4/3)x + 10/3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\dfrac{4}{3}x + \\dfrac{10}{3}\\)",
      canonicalAnswer: "y=-4/3x+10/3",
    },
  },
  {
    id: "ga26-028",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Two lines have equations \\(y = (2k - 1)x + 3\\) and \\(y = \\dfrac{1}{5}x - 2\\). Given that the lines are perpendicular, find the value of \\(k\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "find unknown", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the gradient of the second line.",
          workingLatex: "m_2 = \\frac{1}{5}",
          explanation:
            "The second line has gradient 1/5. The first line has gradient 2k - 1.",
        },
        {
          stepNumber: 2,
          description: "Use the perpendicular condition m1·m2 = -1.",
          workingLatex: "(2k - 1) \\cdot \\frac{1}{5} = -1",
          explanation:
            "Perpendicular gradients multiply to -1. Set up the equation with the unknown gradient.",
        },
        {
          stepNumber: 3,
          description: "Multiply both sides by 5.",
          workingLatex: "2k - 1 = -5",
          explanation:
            "Clearing the fraction: multiply both sides by 5 to leave 2k - 1 on the left.",
        },
        {
          stepNumber: 4,
          description: "Solve for k.",
          workingLatex: "2k = -4 \\Rightarrow k = -2",
          explanation:
            "Add 1 to both sides, then divide by 2: k = -2.",
        },
        {
          stepNumber: 5,
          description: "Check.",
          workingLatex: "2(-2) - 1 = -5, \\quad -5 \\cdot \\frac{1}{5} = -1 \\checkmark",
          explanation:
            "With k = -2 the first gradient is -5, and -5 × 1/5 = -1, confirming perpendicularity.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (1/5)*x - 2} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -5*x + 3} color="var(--mafs-fg-blue)" />
  <Text x={3} y={-1.5} attach="e" attachDistance={6}>y = (1/5)x - 2</Text>
  <Text x={1} y={-3} attach="e" attachDistance={6}>y = -5x + 3 (k = -2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(k = -2\\)",
      canonicalAnswer: "-2",
    },
  },
  {
    id: "ga26-029",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The line \\(L_1\\) passes through \\(A(2,\\,7)\\) and \\(B(6,\\,1)\\). The line \\(L_2\\) is parallel to \\(L_1\\) and passes through \\(C(0,\\,-4)\\). Find the equation of \\(L_2\\) in the form \\(y = mx + c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "gradient from two points", "parallel", "equation of a line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the gradient of L1 from A and B.",
          workingLatex: "m_{L_1} = \\frac{1 - 7}{6 - 2} = \\frac{-6}{4} = -\\frac{3}{2}",
          explanation:
            "Gradient = (1-7)/(6-2) = -6/4 = -3/2.",
        },
        {
          stepNumber: 2,
          description: "Use the parallel rule for L2's gradient.",
          workingLatex: "m_{L_2} = -\\frac{3}{2}",
          explanation:
            "Parallel lines have equal gradients, so L2 also has gradient -3/2.",
        },
        {
          stepNumber: 3,
          description: "Use the point C(0, -4); since x = 0 this is the y-intercept.",
          workingLatex: "-4 = -\\frac{3}{2}(0) + c \\Rightarrow c = -4",
          explanation:
            "Substituting x = 0, y = -4 gives c = -4 directly (the point is on the y-axis).",
        },
        {
          stepNumber: 4,
          description: "State the equation.",
          workingLatex: "y = -\\frac{3}{2}x - 4",
          explanation:
            "L2 has gradient -3/2 (parallel to L1) and y-intercept -4, so y = -3/2 x - 4.",
          mafs: `<Mafs viewBox={{ x: [-4, 10], y: [-7, 11] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(3/2)*x + 10} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(3/2)*x - 4} color="var(--mafs-fg-blue)" />
  <Point x={2} y={7} color="var(--mafs-fg-orange)" />
  <Text x={2} y={7} attach="e" attachDistance={12}>A(2, 7)</Text>
  <Point x={6} y={1} color="var(--mafs-fg-orange)" />
  <Text x={6} y={1} attach="e" attachDistance={12}>B(6, 1)</Text>
  <Point x={0} y={-4} color="var(--mafs-fg-green)" />
  <Text x={0} y={-4} attach="w" attachDistance={12}>C(0, -4)</Text>
  <Text x={5} y={4} attach="e" attachDistance={6}>L1</Text>
  <Text x={2} y={-6} attach="e" attachDistance={6}>L2: y = -(3/2)x - 4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\dfrac{3}{2}x - 4\\)",
      canonicalAnswer: "y=-3/2x-4",
    },
  },
  {
    id: "ga26-030",
    topicRef: "ga26",
    topicTitle: "Parallel and perpendicular lines",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A line \\(L\\) is perpendicular to \\(2x - y = 1\\). The line \\(L\\) passes through the point where \\(2x - y = 1\\) crosses the \\(y\\)-axis. Find the equation of \\(L\\) in the form \\(y = mx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["parallel and perpendicular lines", "rearranging", "perpendicular", "y-intercept", "equation of a line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange the given line into y = mx + c form.",
          workingLatex: "2x - y = 1 \\Rightarrow -y = -2x + 1 \\Rightarrow y = 2x - 1",
          explanation:
            "Subtract 2x, then multiply by -1. The gradient is 2 and the y-intercept is -1.",
        },
        {
          stepNumber: 2,
          description: "Find where the given line crosses the y-axis.",
          workingLatex: "x = 0: \\; y = 2(0) - 1 = -1 \\Rightarrow (0,\\,-1)",
          explanation:
            "A line crosses the y-axis where x = 0. Substituting gives y = -1, so the crossing point is (0, -1). L must pass through this point.",
        },
        {
          stepNumber: 3,
          description: "Find the perpendicular gradient.",
          workingLatex: "m_L = -\\frac{1}{2}",
          explanation:
            "The negative reciprocal of 2 is -1/2. Check: 2 × (-1/2) = -1.",
        },
        {
          stepNumber: 4,
          description: "Use the point (0, -1); since x = 0 it gives the intercept.",
          workingLatex: "-1 = -\\frac{1}{2}(0) + c \\Rightarrow c = -1",
          explanation:
            "Substituting x = 0, y = -1 gives c = -1 directly.",
        },
        {
          stepNumber: 5,
          description: "State the equation.",
          workingLatex: "y = -\\frac{1}{2}x - 1",
          explanation:
            "L has gradient -1/2 (perpendicular to the given line) and passes through (0, -1), so y = -1/2 x - 1.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 2*x - 1} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => -(1/2)*x - 1} color="var(--mafs-fg-blue)" />
  <Point x={0} y={-1} color="var(--mafs-fg-green)" />
  <Text x={0} y={-1} attach="se" attachDistance={12}>(0, -1)</Text>
  <Text x={2.5} y={4} attach="e" attachDistance={6}>2x - y = 1</Text>
  <Text x={-4} y={1} attach="w" attachDistance={6}>L: y = -(1/2)x - 1</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -\\dfrac{1}{2}x - 1\\)",
      canonicalAnswer: "y=-1/2x-1",
    },
  },
];
