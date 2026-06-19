/**
 * Topic: Exponential and trigonometric graphs
 * Ref: ga30  (DfE A12)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: recognise, sketch, interpret and use exponential graphs
 *   y = ab^x (a > 0, b > 0) and the trigonometric graphs y = sin x,
 *   y = cos x and y = tan x over 0–360° (degrees only — no radians, no
 *   calculus). Key facts used throughout:
 *   EXPONENTIAL y = ab^x: at x = 0 the value is a (the y-intercept);
 *     multiplying x by 1 multiplies y by b (the multiplier per unit step);
 *     b > 1 gives growth, 0 < b < 1 gives decay; the graph has a horizontal
 *     ASYMPTOTE y = 0 and never touches the x-axis; a > 0 keeps it above it.
 *   SINE/COSINE: amplitude 1, period 360°, range -1 ≤ y ≤ 1; sin starts at
 *     (0, 0), cos starts at (0, 1); key values sin 30 = cos 60 = 1/2,
 *     sin 90 = cos 0 = 1, sin 150 = 1/2, cos 120 = -1/2, cos 180 = -1, etc.;
 *     symmetry rules sin(180 - x) = sin x, cos(360 - x) = cos x give a second
 *     solution in range.
 *   TANGENT: period 180°, passes through (0, 0), tan 45 = 1, tan 135 = -1,
 *     with vertical asymptotes at x = 90° and x = 270° where it is undefined.
 *   Clusters:
 *   (1) exponential tables & evaluating y = ab^x at given x;
 *   (2) recognising exponential shape, the multiplier b, and the asymptote y=0;
 *   (3) finding a and b from two points / growth & decay multipliers;
 *   (4) sin & cos graphs — amplitude, period, reading values over 0–360°;
 *   (5) tan graph features (period, asymptotes, key values);
 *   (6) matching equations to sketches & solving sin x = k / cos x = k in range.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga30-001 .. ga30-004  (4)   clean single-idea items
 *   - Standard:   ga30-005 .. ga30-018  (14)
 *   - Challenge:  ga30-019 .. ga30-030  (12)
 * Id range: ga30-001 .. ga30-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions, \\cdot for
 *   multiplication and braced exponents like b^{x}, per hard project rules.
 *   All angles are in degrees.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga30-001",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The graph of \\(y = 3 \\cdot 2^{x}\\) is drawn. State the value of \\(y\\) when \\(x = 0\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exponential graphs", "y-intercept", "evaluating"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 0 into the equation.",
          workingLatex: "y = 3 \\cdot 2^{0}",
          explanation:
            "The value of y when x = 0 is the y-intercept of the graph. Put x = 0 into y = 3·2^x.",
        },
        {
          stepNumber: 2,
          description: "Use the fact that any non-zero number to the power 0 is 1.",
          workingLatex: "2^{0} = 1 \\quad\\Rightarrow\\quad y = 3 \\cdot 1 = 3",
          explanation:
            "Since 2^0 = 1, the equation gives y = 3·1 = 3. For y = ab^x the y-intercept is always a, here a = 3.",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [-1, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => 3 * Math.pow(2, x)} domain={[-3, 2]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={3} color="var(--mafs-fg-blue)" />
  <Text x={0} y={3} attach="nw" color="var(--mafs-fg-blue)">(0, 3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga30-002",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Using the graph of \\(y = \\cos x\\) for \\(0^\\circ \\le x \\le 360^\\circ\\), write down the value of \\(\\cos 0^\\circ\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "cosine graph", "reading values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall where the cosine graph starts.",
          workingLatex: "y = \\cos x \\text{ starts at } (0^\\circ,\\, 1)",
          explanation:
            "The cosine curve begins at its maximum: at x = 0° the value of cos x is 1. (This is what distinguishes it from the sine curve, which starts at 0.)",
        },
        {
          stepNumber: 2,
          description: "Read off the value.",
          workingLatex: "\\cos 0^\\circ = 1",
          explanation:
            "So the y-coordinate of the graph at x = 0° is 1, meaning cos 0° = 1.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.cos(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Text x={0} y={1} attach="ne" color="var(--mafs-fg-blue)">(0°, 1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(1\\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "ga30-003",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Using the graph of \\(y = \\sin x\\) for \\(0^\\circ \\le x \\le 360^\\circ\\), write down the value of \\(\\sin 90^\\circ\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "sine graph", "reading values", "maximum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the shape of the sine graph.",
          workingLatex: "y = \\sin x: \\; (0,0) \\to \\text{max at } 90^\\circ \\to (180,0)",
          explanation:
            "The sine curve rises from (0°, 0) to its highest point at x = 90°, then falls back to 0 at 180°. The maximum value of sin x is 1.",
        },
        {
          stepNumber: 2,
          description: "Read off the maximum value.",
          workingLatex: "\\sin 90^\\circ = 1",
          explanation:
            "At x = 90° the graph reaches its peak, so sin 90° = 1.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.sin(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Point x={Math.PI / 2} y={1} color="var(--mafs-fg-blue)" />
  <Text x={Math.PI / 2} y={1} attach="ne" color="var(--mafs-fg-blue)">(90°, 1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(1\\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "ga30-004",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A curve has equation \\(y = 5^{x}\\). As \\(x\\) becomes very large and negative, the curve gets closer and closer to a horizontal line. Write down the equation of this line (the asymptote).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exponential graphs", "asymptote", "graph features"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Consider what 5^x does for large negative x.",
          workingLatex: "x = -1: 5^{-1} = \\frac{1}{5}, \\quad x = -2: 5^{-2} = \\frac{1}{25}, \\; \\ldots",
          explanation:
            "As x decreases, 5^x gives ever-smaller positive fractions (1/5, 1/25, 1/125, …). The values shrink towards 0 but never reach it.",
        },
        {
          stepNumber: 2,
          description: "State the asymptote.",
          workingLatex: "y = 0",
          explanation:
            "Every exponential graph y = ab^x (with a > 0, b > 0) has the x-axis as a horizontal asymptote, so the line is y = 0. The curve approaches it but never touches it.",
          mafs: `<Mafs viewBox={{ x: [-3, 2], y: [-2, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => Math.pow(5, x)} domain={[-3, 1.5]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[-3, 0]} point2={[2, 0]} color="var(--mafs-fg-blue)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={0} attach="n" color="var(--mafs-fg-blue)">asymptote y = 0</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 0\\)",
      canonicalAnswer: "y=0",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga30-005",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The table shows some values of \\(y = 2 \\cdot 3^{x}\\).\n\n| \\(x\\) | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| \\(y\\) | 2 | 6 | 18 | ? |\n\nFind the missing value of \\(y\\) when \\(x = 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "tables of values", "evaluating", "multiplier"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 3 into the equation.",
          workingLatex: "y = 2 \\cdot 3^{3}",
          explanation:
            "The missing entry is the value of y at x = 3, so put x = 3 into y = 2·3^x.",
        },
        {
          stepNumber: 2,
          description: "Work out the power first.",
          workingLatex: "3^{3} = 3 \\cdot 3 \\cdot 3 = 27",
          explanation:
            "Powers are evaluated before multiplication: 3^3 means three 3s multiplied together, which is 27.",
        },
        {
          stepNumber: 3,
          description: "Multiply by the coefficient a = 2.",
          workingLatex: "y = 2 \\cdot 27 = 54",
          explanation:
            "Finally multiply by 2 to get y = 54. Check using the multiplier: each step in x multiplies y by 3, and 18·3 = 54, which agrees.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-5, 60] }} height={280}>
  <Coordinates.Cartesian yAxis={{ lines: 10 }} />
  <Plot.OfX y={(x) => 2 * Math.pow(3, x)} domain={[-1, 3.2]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={2} color="var(--mafs-fg-blue)" />
  <Point x={1} y={6} color="var(--mafs-fg-blue)" />
  <Point x={2} y={18} color="var(--mafs-fg-blue)" />
  <Point x={3} y={54} color="var(--mafs-fg-blue)" />
  <Text x={3} y={54} attach="w" color="var(--mafs-fg-blue)">(3, 54)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(54\\)",
      canonicalAnswer: "54",
    },
  },
  {
    id: "ga30-006",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "For the curve \\(y = 4 \\cdot 2^{x}\\), each time \\(x\\) increases by 1 the value of \\(y\\) is multiplied by a fixed number. Write down this multiplier.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "multiplier", "growth factor"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down y at x and at x + 1.",
          workingLatex: "y(x) = 4 \\cdot 2^{x}, \\qquad y(x+1) = 4 \\cdot 2^{x+1}",
          explanation:
            "To see what happens when x increases by 1, compare the value at x + 1 with the value at x.",
        },
        {
          stepNumber: 2,
          description: "Use the index law to split the power.",
          workingLatex: "y(x+1) = 4 \\cdot 2^{x} \\cdot 2^{1} = 2 \\cdot (4 \\cdot 2^{x})",
          explanation:
            "Since 2^{x+1} = 2^x · 2^1, the new value is the old value multiplied by 2. The fixed multiplier is the base b.",
        },
        {
          stepNumber: 3,
          description: "State the multiplier.",
          workingLatex: "y(x+1) = 2 \\cdot y(x) \\Rightarrow \\text{multiplier} = 2",
          explanation:
            "Each unit increase in x doubles y, so the multiplier is 2. In general for y = ab^x the per-step multiplier is the base b.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-4, 36] }} height={280}>
  <Coordinates.Cartesian yAxis={{ lines: 5 }} />
  <Plot.OfX y={(x) => 4 * Math.pow(2, x)} domain={[-1, 3.2]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={4} color="var(--mafs-fg-blue)" />
  <Point x={1} y={8} color="var(--mafs-fg-blue)" />
  <Point x={2} y={16} color="var(--mafs-fg-blue)" />
  <Text x={1} y={8} attach="w" color="var(--mafs-fg-blue)">×2 each step</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(2\\)",
      canonicalAnswer: "2",
    },
  },
  {
    id: "ga30-007",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The value of a car is modelled by \\(V = 12000 \\cdot 0.8^{t}\\), where \\(V\\) is the value in pounds and \\(t\\) is the age in years. Find the value of the car when it is 2 years old.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "decay", "real-world model", "evaluating"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute t = 2 into the model.",
          workingLatex: "V = 12000 \\cdot 0.8^{2}",
          explanation:
            "The car is 2 years old, so put t = 2 into the formula. The base 0.8 (less than 1) means the value decays each year.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the power.",
          workingLatex: "0.8^{2} = 0.8 \\cdot 0.8 = 0.64",
          explanation:
            "Square the multiplier: 0.8 × 0.8 = 0.64. This represents 64% of the original value remaining after 2 years.",
        },
        {
          stepNumber: 3,
          description: "Multiply by the starting value.",
          workingLatex: "V = 12000 \\cdot 0.64 = 7680",
          explanation:
            "Multiplying gives V = £7680. Check: after 1 year 12000·0.8 = 9600, and 9600·0.8 = 7680, which agrees.",
          mafs: `<Mafs viewBox={{ x: [-1, 8], y: [-2000, 14000] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: 2000 }} />
  <Plot.OfX y={(x) => 12000 * Math.pow(0.8, x)} domain={[0, 7]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={12000} color="var(--mafs-fg-blue)" />
  <Point x={2} y={7680} color="var(--mafs-fg-blue)" />
  <Text x={2} y={7680} attach="ne" color="var(--mafs-fg-blue)">(2, 7680)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\pounds 7680\\)",
      canonicalAnswer: "7680",
    },
  },
  {
    id: "ga30-008",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The number of bacteria is given by \\(N = 200 \\cdot 2^{t}\\), where \\(t\\) is the time in hours. The number of bacteria reaches 3200. Find the value of \\(t\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "growth", "solving", "powers of 2"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the model equal to 3200.",
          workingLatex: "200 \\cdot 2^{t} = 3200",
          explanation:
            "We want the time when N = 3200, so set the expression equal to 3200 and solve for t.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 200 to isolate the power.",
          workingLatex: "2^{t} = \\frac{3200}{200} = 16",
          explanation:
            "Dividing by the coefficient 200 leaves the power on its own: 2^t = 16.",
        },
        {
          stepNumber: 3,
          description: "Write 16 as a power of 2 and compare exponents.",
          workingLatex: "16 = 2^{4} \\Rightarrow 2^{t} = 2^{4} \\Rightarrow t = 4",
          explanation:
            "Since 2^4 = 16, the powers match when t = 4. So after 4 hours there are 3200 bacteria. Check: 200·2^4 = 200·16 = 3200.",
          mafs: `<Mafs viewBox={{ x: [-0.5, 5], y: [-400, 3600] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: 500 }} />
  <Plot.OfX y={(x) => 200 * Math.pow(2, x)} domain={[0, 4.2]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 3200]} point2={[4, 3200]} color="var(--mafs-fg-blue)" style="dashed" />
  <Point x={4} y={3200} color="var(--mafs-fg-blue)" />
  <Text x={4} y={3200} attach="nw" color="var(--mafs-fg-blue)">(4, 3200)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(t = 4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga30-009",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Using the graph of \\(y = \\sin x\\) for \\(0^\\circ \\le x \\le 360^\\circ\\), write down the value of \\(\\sin 150^\\circ\\) as an exact fraction.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "sine graph", "exact values", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the symmetry of the sine graph about x = 90°.",
          workingLatex: "\\sin(180^\\circ - x) = \\sin x",
          explanation:
            "The sine curve is symmetric about its peak at 90°, so the value at 150° equals the value at its mirror point. Writing 150 = 180 - 30 gives sin 150° = sin 30°.",
        },
        {
          stepNumber: 2,
          description: "Apply the symmetry with x = 30°.",
          workingLatex: "\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ",
          explanation:
            "Both 30° and 150° give the same height on the graph because they are equally spaced either side of the peak at 90°.",
        },
        {
          stepNumber: 3,
          description: "State the exact value of sin 30°.",
          workingLatex: "\\sin 30^\\circ = \\frac{1}{2} \\Rightarrow \\sin 150^\\circ = \\frac{1}{2}",
          explanation:
            "sin 30° is a standard exact value equal to 1/2, so sin 150° = 1/2.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.sin(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Point x={Math.PI / 6} y={0.5} color="var(--mafs-fg-blue)" />
  <Point x={5 * Math.PI / 6} y={0.5} color="var(--mafs-fg-blue)" />
  <Text x={5 * Math.PI / 6} y={0.5} attach="ne" color="var(--mafs-fg-blue)">(150°, 1/2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\dfrac{1}{2}\\)",
      canonicalAnswer: "1/2",
    },
  },
  {
    id: "ga30-010",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Using the graph of \\(y = \\cos x\\) for \\(0^\\circ \\le x \\le 360^\\circ\\), write down the value of \\(\\cos 180^\\circ\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "cosine graph", "reading values", "minimum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the key points of the cosine graph.",
          workingLatex: "y = \\cos x: \\; (0,1) \\to (90,0) \\to (180,-1) \\to (270,0) \\to (360,1)",
          explanation:
            "The cosine curve starts at 1, crosses zero at 90°, reaches its lowest point at 180°, returns to zero at 270° and back to 1 at 360°.",
        },
        {
          stepNumber: 2,
          description: "Read the value at x = 180°.",
          workingLatex: "\\cos 180^\\circ = -1",
          explanation:
            "At x = 180° the graph is at its minimum, so cos 180° = -1.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.cos(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Point x={Math.PI} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={Math.PI} y={-1} attach="n" color="var(--mafs-fg-blue)">(180°, -1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-1\\)",
      canonicalAnswer: "-1",
    },
  },
  {
    id: "ga30-011",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The graph of \\(y = \\sin x\\) is drawn for \\(0^\\circ \\le x \\le 360^\\circ\\). State the period of the graph (in degrees).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "sine graph", "period"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what 'period' means for a trig graph.",
          workingLatex: "\\text{period} = \\text{horizontal length of one full repeat}",
          explanation:
            "The period is the smallest horizontal distance after which the wave repeats exactly, returning to the same height and direction.",
        },
        {
          stepNumber: 2,
          description: "Identify one complete cycle of the sine graph.",
          workingLatex: "(0,0) \\to (90,1) \\to (180,0) \\to (270,-1) \\to (360,0)",
          explanation:
            "Starting at (0, 0), the curve rises to a peak, falls through zero to a trough, then returns to (360, 0) — one complete wave.",
        },
        {
          stepNumber: 3,
          description: "State the period.",
          workingLatex: "\\text{period} = 360^\\circ",
          explanation:
            "The pattern repeats every 360°, so the period of y = sin x is 360°. (The same is true for y = cos x.)",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.sin(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Point x={2 * Math.PI} y={0} color="var(--mafs-fg-blue)" />
  <Text x={Math.PI} y={-1.3} attach="s" color="var(--mafs-fg-blue)">period = 360°</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(360^\\circ\\)",
      canonicalAnswer: "360",
    },
  },
  {
    id: "ga30-012",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Using the graph of \\(y = \\tan x\\) for \\(0^\\circ \\le x \\le 360^\\circ\\), write down the value of \\(\\tan 45^\\circ\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "tangent graph", "exact values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall a key point on the tangent graph.",
          workingLatex: "y = \\tan x \\text{ passes through } (0,0) \\text{ and } (45,1)",
          explanation:
            "The tangent curve passes through the origin and rises steeply. At x = 45° it reaches the height 1 — a standard exact value.",
        },
        {
          stepNumber: 2,
          description: "Read off the value.",
          workingLatex: "\\tan 45^\\circ = 1",
          explanation:
            "So tan 45° = 1. (Just beyond this, near x = 90°, the curve shoots up towards its vertical asymptote.)",
          mafs: `<Mafs viewBox={{ x: [0, Math.PI], y: [-5, 5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.tan(x)} domain={[0, Math.PI / 2 - 0.12]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => Math.tan(x)} domain={[Math.PI / 2 + 0.12, Math.PI]} color="var(--mafs-fg-accent)" />
  <Point x={Math.PI / 4} y={1} color="var(--mafs-fg-blue)" />
  <Text x={Math.PI / 4} y={1} attach="nw" color="var(--mafs-fg-blue)">(45°, 1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(1\\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "ga30-013",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The graph of \\(y = \\tan x\\) has a vertical asymptote between \\(0^\\circ\\) and \\(180^\\circ\\). State the value of \\(x\\) (in degrees) at which this asymptote occurs.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "tangent graph", "asymptote"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall where tan x is undefined.",
          workingLatex: "\\tan x = \\frac{\\sin x}{\\cos x}",
          explanation:
            "Tangent equals sine divided by cosine. Where cos x = 0 the fraction has zero on the bottom, so tan x is undefined and the graph has a vertical asymptote there.",
        },
        {
          stepNumber: 2,
          description: "Find where cos x = 0 in the given range.",
          workingLatex: "\\cos x = 0 \\text{ at } x = 90^\\circ \\text{ (between } 0^\\circ \\text{ and } 180^\\circ)",
          explanation:
            "Cosine is zero at 90° (and again at 270°). Between 0° and 180° this happens only at 90°.",
        },
        {
          stepNumber: 3,
          description: "State the asymptote.",
          workingLatex: "x = 90^\\circ",
          explanation:
            "So the tangent graph has a vertical asymptote at x = 90°: as x approaches 90° the curve rises without limit.",
          mafs: `<Mafs viewBox={{ x: [0, Math.PI], y: [-5, 5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.tan(x)} domain={[0, Math.PI / 2 - 0.12]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => Math.tan(x)} domain={[Math.PI / 2 + 0.12, Math.PI]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[Math.PI / 2, -5]} point2={[Math.PI / 2, 5]} color="var(--mafs-fg-blue)" style="dashed" />
  <Text x={Math.PI / 2} y={4} attach="e" color="var(--mafs-fg-blue)">x = 90°</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(90^\\circ\\)",
      canonicalAnswer: "90",
    },
  },
  {
    id: "ga30-014",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A curve has equation \\(y = a \\cdot b^{x}\\). The curve passes through \\((0,\\,5)\\) and \\((1,\\,15)\\). Find the value of \\(a\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "finding a and b", "y-intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the point with x = 0.",
          workingLatex: "y = a \\cdot b^{x}, \\quad (0,5): \\; 5 = a \\cdot b^{0}",
          explanation:
            "Substituting the point (0, 5) lets us find a quickly, because b^0 = 1 removes b from the equation.",
        },
        {
          stepNumber: 2,
          description: "Simplify using b^0 = 1.",
          workingLatex: "5 = a \\cdot 1 = a",
          explanation:
            "Since any base to the power 0 is 1, the equation becomes 5 = a. The y-intercept of y = ab^x is always a.",
        },
        {
          stepNumber: 3,
          description: "State the value of a.",
          workingLatex: "a = 5",
          explanation:
            "So a = 5. (The second point (1, 15) would be used next to find b, but a is determined by the y-intercept alone.)",
          mafs: `<Mafs viewBox={{ x: [-1, 2], y: [-2, 18] }} height={280}>
  <Coordinates.Cartesian yAxis={{ lines: 5 }} />
  <Plot.OfX y={(x) => 5 * Math.pow(3, x)} domain={[-1, 1.6]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={5} color="var(--mafs-fg-blue)" />
  <Point x={1} y={15} color="var(--mafs-fg-blue)" />
  <Text x={0} y={5} attach="w" color="var(--mafs-fg-blue)">(0, 5) so a = 5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(a = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga30-015",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "An exponential curve \\(y = a \\cdot b^{x}\\) passes through \\((0,\\,8)\\) and \\((1,\\,24)\\). Given that \\(a = 8\\), find the value of \\(b\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "finding a and b", "multiplier"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the point (1, 24) with a = 8.",
          workingLatex: "24 = 8 \\cdot b^{1}",
          explanation:
            "With a known, use the second point to find b. Put x = 1, y = 24 into y = 8·b^x. Note b^1 = b.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 8.",
          workingLatex: "b = \\frac{24}{8} = 3",
          explanation:
            "Dividing by 8 isolates b, giving b = 3. This is the multiplier: each step of 1 in x multiplies y by 3.",
        },
        {
          stepNumber: 3,
          description: "Check the equation works.",
          workingLatex: "y = 8 \\cdot 3^{x}: \\; x=0 \\Rightarrow 8, \\; x=1 \\Rightarrow 24 \\; \\checkmark",
          explanation:
            "The curve y = 8·3^x gives 8 at x = 0 and 24 at x = 1, matching both points, so b = 3 is correct.",
          mafs: `<Mafs viewBox={{ x: [-1, 2], y: [-3, 28] }} height={280}>
  <Coordinates.Cartesian yAxis={{ lines: 5 }} />
  <Plot.OfX y={(x) => 8 * Math.pow(3, x)} domain={[-1, 1.5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={8} color="var(--mafs-fg-blue)" />
  <Point x={1} y={24} color="var(--mafs-fg-blue)" />
  <Text x={1} y={24} attach="w" color="var(--mafs-fg-blue)">(1, 24)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(b = 3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga30-016",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Using the graph of \\(y = \\cos x\\) for \\(0^\\circ \\le x \\le 360^\\circ\\), write down the value of \\(\\cos 120^\\circ\\) as an exact fraction.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "cosine graph", "exact values", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the symmetry of the cosine graph about x = 180°.",
          workingLatex: "\\cos(180^\\circ - x) = -\\cos x",
          explanation:
            "Between 90° and 270° the cosine graph is below the axis. The value at 120° relates to the value at 60° by the rule cos(180 - x) = -cos x.",
        },
        {
          stepNumber: 2,
          description: "Apply the rule with x = 60°.",
          workingLatex: "\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ",
          explanation:
            "Writing 120 = 180 - 60 turns the problem into -cos 60°, a standard angle.",
        },
        {
          stepNumber: 3,
          description: "Use the exact value of cos 60°.",
          workingLatex: "\\cos 60^\\circ = \\frac{1}{2} \\Rightarrow \\cos 120^\\circ = -\\frac{1}{2}",
          explanation:
            "Since cos 60° = 1/2, we get cos 120° = -1/2. The negative sign is correct because 120° lies in the part of the graph below the x-axis.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.cos(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Point x={2 * Math.PI / 3} y={-0.5} color="var(--mafs-fg-blue)" />
  <Text x={2 * Math.PI / 3} y={-0.5} attach="se" color="var(--mafs-fg-blue)">(120°, -1/2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-\\dfrac{1}{2}\\)",
      canonicalAnswer: "-1/2",
    },
  },
  {
    id: "ga30-017",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Two curves are sketched. Curve A rises steeply from left to right and passes through \\((0,\\,1)\\), never touching the \\(x\\)-axis. Curve B is a wave oscillating between \\(-1\\) and \\(1\\). One has equation \\(y = 2^{x}\\) and the other \\(y = \\sin x\\). State which equation matches Curve A.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "trigonometric graphs", "matching graphs", "recognising shape"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the distinguishing features of each equation.",
          workingLatex: "y = 2^{x}: \\text{ rising curve, } y > 0; \\quad y = \\sin x: \\text{ wave, } -1 \\le y \\le 1",
          explanation:
            "An exponential y = 2^x increases without bound and stays positive (asymptote y = 0). A sine graph is a repeating wave bounded between -1 and 1.",
        },
        {
          stepNumber: 2,
          description: "Match Curve A's description.",
          workingLatex: "\\text{Curve A: rises steeply, passes } (0,1), \\text{ never touches } x\\text{-axis}",
          explanation:
            "Curve A keeps rising and never touches the x-axis — these are the signatures of an exponential graph, not a bounded wave. Also 2^0 = 1, matching the point (0, 1).",
        },
        {
          stepNumber: 3,
          description: "State the matching equation.",
          workingLatex: "\\text{Curve A} = y = 2^{x}",
          explanation:
            "So Curve A is y = 2^x. (Curve B, the wave, is y = sin x.)",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [-1, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => Math.pow(2, x)} domain={[-3, 3]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Text x={0} y={1} attach="nw" color="var(--mafs-fg-blue)">A: (0, 1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 2^{x}\\)",
      canonicalAnswer: "y=2^x",
    },
  },
  {
    id: "ga30-018",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The graph of \\(y = \\sin x\\) is drawn for \\(0^\\circ \\le x \\le 360^\\circ\\). Other than at \\(x = 0^\\circ\\), state the values of \\(x\\) where the graph crosses the \\(x\\)-axis.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "sine graph", "roots", "reading values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "A graph crosses the x-axis where y = 0.",
          workingLatex: "\\sin x = 0",
          explanation:
            "Crossing the x-axis means the height is zero, so we need the angles where sin x = 0 in the range 0° to 360°.",
        },
        {
          stepNumber: 2,
          description: "Read the zeros from the shape of the sine curve.",
          workingLatex: "\\sin x = 0 \\text{ at } x = 0^\\circ,\\, 180^\\circ,\\, 360^\\circ",
          explanation:
            "The sine wave starts at zero, returns to zero at the half-cycle (180°) and again at the end of the cycle (360°).",
        },
        {
          stepNumber: 3,
          description: "List the crossings other than x = 0°.",
          workingLatex: "x = 180^\\circ \\text{ and } x = 360^\\circ",
          explanation:
            "Excluding x = 0°, the graph crosses the x-axis at 180° and 360°.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.sin(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Point x={Math.PI} y={0} color="var(--mafs-fg-blue)" />
  <Point x={2 * Math.PI} y={0} color="var(--mafs-fg-blue)" />
  <Text x={Math.PI} y={0} attach="s" color="var(--mafs-fg-blue)">180°</Text>
  <Text x={2 * Math.PI} y={0} attach="sw" color="var(--mafs-fg-blue)">360°</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 180^\\circ \\text{ and } x = 360^\\circ\\)",
      canonicalAnswer: "180,360",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga30-019",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "An exponential curve \\(y = a \\cdot b^{x}\\) passes through the points \\((0,\\,7)\\) and \\((2,\\,63)\\). Find the values of \\(a\\) and \\(b\\), and hence write down the equation of the curve.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "finding a and b", "simultaneous", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the point (0, 7) to find a.",
          workingLatex: "7 = a \\cdot b^{0} = a \\cdot 1 \\Rightarrow a = 7",
          explanation:
            "Substituting x = 0 gives b^0 = 1, so the equation collapses to 7 = a. The y-intercept directly gives a = 7.",
        },
        {
          stepNumber: 2,
          description: "Substitute the second point (2, 63) with a = 7.",
          workingLatex: "63 = 7 \\cdot b^{2}",
          explanation:
            "Now use (2, 63) to find b. Put x = 2, y = 63 and a = 7 into y = a·b^x.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 7.",
          workingLatex: "b^{2} = \\frac{63}{7} = 9",
          explanation:
            "Dividing by 7 isolates the power: b^2 = 9.",
        },
        {
          stepNumber: 4,
          description: "Take the positive square root.",
          workingLatex: "b = \\sqrt{9} = 3",
          explanation:
            "Take the square root to find b. For an exponential graph the base must be positive, so we take b = 3 (rejecting -3).",
        },
        {
          stepNumber: 5,
          description: "State the equation and check.",
          workingLatex: "y = 7 \\cdot 3^{x}: \\; x=2 \\Rightarrow 7 \\cdot 9 = 63 \\; \\checkmark",
          explanation:
            "So a = 7, b = 3 and the curve is y = 7·3^x. Checking x = 2 gives 7·9 = 63, matching the second point.",
          mafs: `<Mafs viewBox={{ x: [-1, 3], y: [-5, 70] }} height={280}>
  <Coordinates.Cartesian yAxis={{ lines: 10 }} />
  <Plot.OfX y={(x) => 7 * Math.pow(3, x)} domain={[-1, 2.2]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={7} color="var(--mafs-fg-blue)" />
  <Point x={2} y={63} color="var(--mafs-fg-blue)" />
  <Text x={2} y={63} attach="w" color="var(--mafs-fg-blue)">(2, 63)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = 7 \\cdot 3^{x} \\;\\; (a = 7,\\; b = 3)\\)",
      canonicalAnswer: "y=7*3^x",
    },
  },
  {
    id: "ga30-020",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "An exponential curve \\(y = a \\cdot b^{x}\\) passes through \\((1,\\,12)\\) and \\((3,\\,48)\\). Find the values of \\(a\\) and \\(b\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "finding a and b", "simultaneous", "dividing equations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write an equation for each point.",
          workingLatex: "(1,12): \\; 12 = a \\cdot b^{1}; \\qquad (3,48): \\; 48 = a \\cdot b^{3}",
          explanation:
            "Neither point has x = 0, so we cannot read a off directly. Set up both equations and eliminate a by dividing.",
        },
        {
          stepNumber: 2,
          description: "Divide the second equation by the first.",
          workingLatex: "\\frac{48}{12} = \\frac{a \\cdot b^{3}}{a \\cdot b^{1}}",
          explanation:
            "Dividing the equations cancels a, leaving an equation in b only. This is the key step when neither point gives a directly.",
        },
        {
          stepNumber: 3,
          description: "Simplify using index laws.",
          workingLatex: "4 = b^{3-1} = b^{2}",
          explanation:
            "The left side is 48/12 = 4; on the right b^3 ÷ b^1 = b^2. So b^2 = 4.",
        },
        {
          stepNumber: 4,
          description: "Solve for b (positive base).",
          workingLatex: "b = \\sqrt{4} = 2",
          explanation:
            "Take the positive square root: b = 2 (a negative base is not allowed for an exponential graph).",
        },
        {
          stepNumber: 5,
          description: "Substitute b = 2 back into the first equation to find a.",
          workingLatex: "12 = a \\cdot 2 \\Rightarrow a = \\frac{12}{2} = 6",
          explanation:
            "Using 12 = a·b with b = 2 gives a = 6.",
        },
        {
          stepNumber: 6,
          description: "Check with the second point.",
          workingLatex: "y = 6 \\cdot 2^{x}: \\; x=3 \\Rightarrow 6 \\cdot 8 = 48 \\; \\checkmark",
          explanation:
            "The curve y = 6·2^x gives 6·2 = 12 at x = 1 and 6·8 = 48 at x = 3, so a = 6 and b = 2 are correct.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-5, 54] }} height={280}>
  <Coordinates.Cartesian yAxis={{ lines: 10 }} />
  <Plot.OfX y={(x) => 6 * Math.pow(2, x)} domain={[-1, 3.2]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={12} color="var(--mafs-fg-blue)" />
  <Point x={3} y={48} color="var(--mafs-fg-blue)" />
  <Text x={3} y={48} attach="w" color="var(--mafs-fg-blue)">(3, 48)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(a = 6,\\; b = 2\\)",
      canonicalAnswer: "a=6,b=2",
    },
  },
  {
    id: "ga30-021",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve \\(\\sin x = \\dfrac{1}{2}\\) for \\(0^\\circ \\le x \\le 360^\\circ\\), using the symmetry of the sine graph.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "sine graph", "solving equations", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the first solution from a known exact value.",
          workingLatex: "\\sin 30^\\circ = \\frac{1}{2} \\Rightarrow x = 30^\\circ",
          explanation:
            "sin 30° = 1/2 is a standard value, giving the first solution x = 30° (the point where the rising part of the curve has height 1/2).",
        },
        {
          stepNumber: 2,
          description: "Use the symmetry of the sine graph for the second solution.",
          workingLatex: "\\sin(180^\\circ - x) = \\sin x",
          explanation:
            "The sine curve is symmetric about its peak at 90°, so there is a second point of equal height on the falling part. It is found from x = 180° - (first solution).",
        },
        {
          stepNumber: 3,
          description: "Compute the second solution.",
          workingLatex: "x = 180^\\circ - 30^\\circ = 150^\\circ",
          explanation:
            "So the second solution is 150°. Both 30° and 150° give sin x = 1/2 and both lie in the range.",
        },
        {
          stepNumber: 4,
          description: "State all solutions in range.",
          workingLatex: "x = 30^\\circ, \\; 150^\\circ",
          explanation:
            "Beyond 180° the curve is below the axis (negative), so there are no further solutions to sin x = 1/2 in 0°–360°.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.sin(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={() => 0.5} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-blue)" style="dashed" />
  <Point x={Math.PI / 6} y={0.5} color="var(--mafs-fg-blue)" />
  <Point x={5 * Math.PI / 6} y={0.5} color="var(--mafs-fg-blue)" />
  <Text x={Math.PI / 6} y={0.5} attach="nw" color="var(--mafs-fg-blue)">30°</Text>
  <Text x={5 * Math.PI / 6} y={0.5} attach="ne" color="var(--mafs-fg-blue)">150°</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 30^\\circ,\\; 150^\\circ\\)",
      canonicalAnswer: "30,150",
    },
  },
  {
    id: "ga30-022",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve \\(\\cos x = -\\dfrac{1}{2}\\) for \\(0^\\circ \\le x \\le 360^\\circ\\), using the symmetry of the cosine graph.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "cosine graph", "solving equations", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the related acute angle from the positive value.",
          workingLatex: "\\cos 60^\\circ = \\frac{1}{2}",
          explanation:
            "First ignore the sign: cos 60° = 1/2 is the standard angle. We now adjust for the fact that we need cos x = -1/2 (a negative value).",
        },
        {
          stepNumber: 2,
          description: "Identify where cosine is negative.",
          workingLatex: "\\cos x < 0 \\text{ for } 90^\\circ < x < 270^\\circ",
          explanation:
            "On the cosine graph the curve is below the axis between 90° and 270°, so both solutions lie in that interval.",
        },
        {
          stepNumber: 3,
          description: "Use cos(180° - x) = -cos x for the first solution.",
          workingLatex: "x = 180^\\circ - 60^\\circ = 120^\\circ",
          explanation:
            "Since cos(180° - 60°) = -cos 60° = -1/2, one solution is x = 120°.",
        },
        {
          stepNumber: 4,
          description: "Use the symmetry of cosine about x = 180° for the second.",
          workingLatex: "x = 180^\\circ + 60^\\circ = 240^\\circ",
          explanation:
            "The cosine graph is symmetric about x = 180°, so the mirror of 120° is 240°, which also gives cos x = -1/2.",
        },
        {
          stepNumber: 5,
          description: "State both solutions.",
          workingLatex: "x = 120^\\circ, \\; 240^\\circ",
          explanation:
            "Both 120° and 240° satisfy cos x = -1/2 in the range 0°–360°. Check: each is in the region where the curve dips below the axis.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.cos(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={() => -0.5} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-blue)" style="dashed" />
  <Point x={2 * Math.PI / 3} y={-0.5} color="var(--mafs-fg-blue)" />
  <Point x={4 * Math.PI / 3} y={-0.5} color="var(--mafs-fg-blue)" />
  <Text x={2 * Math.PI / 3} y={-0.5} attach="nw" color="var(--mafs-fg-blue)">120°</Text>
  <Text x={4 * Math.PI / 3} y={-0.5} attach="ne" color="var(--mafs-fg-blue)">240°</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 120^\\circ,\\; 240^\\circ\\)",
      canonicalAnswer: "120,240",
    },
  },
  {
    id: "ga30-023",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A radioactive sample has mass given by \\(m = 80 \\cdot 0.5^{t}\\) grams, where \\(t\\) is the time in days. Find the number of days for the mass to fall to 10 grams.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "decay", "solving", "half-life"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the model equal to 10.",
          workingLatex: "80 \\cdot 0.5^{t} = 10",
          explanation:
            "We want the time when the mass is 10 g, so set the formula equal to 10 and solve for t.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 80.",
          workingLatex: "0.5^{t} = \\frac{10}{80} = \\frac{1}{8}",
          explanation:
            "Dividing by the starting mass 80 isolates the power: 0.5^t = 1/8.",
        },
        {
          stepNumber: 3,
          description: "Write 1/8 as a power of 0.5.",
          workingLatex: "\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^{3} = 0.5^{3}",
          explanation:
            "Since 0.5 = 1/2 and (1/2)^3 = 1/8, the right-hand side is 0.5^3. Now both sides are powers of 0.5.",
        },
        {
          stepNumber: 4,
          description: "Compare the exponents.",
          workingLatex: "0.5^{t} = 0.5^{3} \\Rightarrow t = 3",
          explanation:
            "Equal bases means equal exponents, so t = 3 days.",
        },
        {
          stepNumber: 5,
          description: "Check the answer.",
          workingLatex: "80 \\cdot 0.5^{3} = 80 \\cdot \\frac{1}{8} = 10 \\; \\checkmark",
          explanation:
            "After 3 days the mass is 80·(1/8) = 10 g, confirming t = 3. (Each day halves the mass: 80 → 40 → 20 → 10.)",
          mafs: `<Mafs viewBox={{ x: [-0.5, 6], y: [-10, 90] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: 10 }} />
  <Plot.OfX y={(x) => 80 * Math.pow(0.5, x)} domain={[0, 5.5]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 10]} point2={[3, 10]} color="var(--mafs-fg-blue)" style="dashed" />
  <Point x={3} y={10} color="var(--mafs-fg-blue)" />
  <Text x={3} y={10} attach="ne" color="var(--mafs-fg-blue)">(3, 10)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(t = 3 \\text{ days}\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga30-024",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A population grows by 20% each year and starts at 5000. The model is \\(P = 5000 \\cdot b^{t}\\), where \\(t\\) is the number of years. Write down the value of \\(b\\), then find the population after 3 years. Give your answer to the nearest whole number.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "growth", "multiplier", "percentage"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Convert the percentage increase into a multiplier.",
          workingLatex: "+20\\% \\Rightarrow b = 1 + \\frac{20}{100} = 1.2",
          explanation:
            "A 20% increase each year means each value is multiplied by 100% + 20% = 120% = 1.2. So the growth multiplier is b = 1.2.",
        },
        {
          stepNumber: 2,
          description: "Write the model.",
          workingLatex: "P = 5000 \\cdot 1.2^{t}",
          explanation:
            "With b = 1.2 the population model is P = 5000·1.2^t.",
        },
        {
          stepNumber: 3,
          description: "Substitute t = 3.",
          workingLatex: "P = 5000 \\cdot 1.2^{3}",
          explanation:
            "For the population after 3 years put t = 3 into the model.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the power.",
          workingLatex: "1.2^{3} = 1.2 \\cdot 1.2 \\cdot 1.2 = 1.728",
          explanation:
            "Cube the multiplier: 1.2 × 1.2 = 1.44, then 1.44 × 1.2 = 1.728.",
        },
        {
          stepNumber: 5,
          description: "Multiply by the starting population and round.",
          workingLatex: "P = 5000 \\cdot 1.728 = 8640",
          explanation:
            "5000 × 1.728 = 8640, which is already a whole number. So after 3 years the population is 8640.",
          mafs: `<Mafs viewBox={{ x: [-0.5, 5], y: [-1000, 11000] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: 2000 }} />
  <Plot.OfX y={(x) => 5000 * Math.pow(1.2, x)} domain={[0, 4.5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={5000} color="var(--mafs-fg-blue)" />
  <Point x={3} y={8640} color="var(--mafs-fg-blue)" />
  <Text x={3} y={8640} attach="nw" color="var(--mafs-fg-blue)">(3, 8640)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(b = 1.2,\\; P = 8640\\)",
      canonicalAnswer: "8640",
    },
  },
  {
    id: "ga30-025",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The graph of \\(y = \\tan x\\) is drawn for \\(0^\\circ \\le x \\le 360^\\circ\\). State the period of the graph and the values of \\(x\\) at which it has vertical asymptotes.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "tangent graph", "period", "asymptote"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the structure of the tangent graph.",
          workingLatex: "\\tan x = \\frac{\\sin x}{\\cos x}",
          explanation:
            "Tangent is sine over cosine. It repeats more often than sine or cosine, and becomes undefined wherever cos x = 0.",
        },
        {
          stepNumber: 2,
          description: "State the period.",
          workingLatex: "\\text{period} = 180^\\circ",
          explanation:
            "The tangent graph repeats every 180°, half the period of sine and cosine. So its period is 180°.",
        },
        {
          stepNumber: 3,
          description: "Find where cos x = 0 in range.",
          workingLatex: "\\cos x = 0 \\text{ at } x = 90^\\circ \\text{ and } x = 270^\\circ",
          explanation:
            "Cosine is zero at 90° and 270° within 0°–360°. At these angles tan x is undefined, giving vertical asymptotes.",
        },
        {
          stepNumber: 4,
          description: "State the asymptotes.",
          workingLatex: "x = 90^\\circ, \\; x = 270^\\circ",
          explanation:
            "So the graph has period 180° with vertical asymptotes at x = 90° and x = 270°.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-5, 5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.tan(x)} domain={[0, Math.PI / 2 - 0.12]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => Math.tan(x)} domain={[Math.PI / 2 + 0.12, 3 * Math.PI / 2 - 0.12]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => Math.tan(x)} domain={[3 * Math.PI / 2 + 0.12, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[Math.PI / 2, -5]} point2={[Math.PI / 2, 5]} color="var(--mafs-fg-blue)" style="dashed" />
  <Line.Segment point1={[3 * Math.PI / 2, -5]} point2={[3 * Math.PI / 2, 5]} color="var(--mafs-fg-blue)" style="dashed" />
  <Text x={Math.PI / 2} y={4} attach="e" color="var(--mafs-fg-blue)">90°</Text>
  <Text x={3 * Math.PI / 2} y={4} attach="e" color="var(--mafs-fg-blue)">270°</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{period } 180^\\circ; \\; \\text{asymptotes at } x = 90^\\circ,\\, 270^\\circ\\)",
      canonicalAnswer: "180;90,270",
    },
  },
  {
    id: "ga30-026",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve \\(\\sin x = -\\dfrac{1}{2}\\) for \\(0^\\circ \\le x \\le 360^\\circ\\), using the symmetry of the sine graph.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "sine graph", "solving equations", "negative values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the related acute angle ignoring the sign.",
          workingLatex: "\\sin 30^\\circ = \\frac{1}{2}",
          explanation:
            "The related angle comes from the positive value: sin 30° = 1/2. We now place the solutions where sin x is negative.",
        },
        {
          stepNumber: 2,
          description: "Identify where the sine graph is below the axis.",
          workingLatex: "\\sin x < 0 \\text{ for } 180^\\circ < x < 360^\\circ",
          explanation:
            "The sine curve dips below the x-axis between 180° and 360°, so both solutions to sin x = -1/2 lie in this interval.",
        },
        {
          stepNumber: 3,
          description: "First solution: 180° + related angle.",
          workingLatex: "x = 180^\\circ + 30^\\circ = 210^\\circ",
          explanation:
            "Just past 180° the curve falls to -1/2 at x = 210° (the related angle 30° measured from 180°).",
        },
        {
          stepNumber: 4,
          description: "Second solution: 360° - related angle.",
          workingLatex: "x = 360^\\circ - 30^\\circ = 330^\\circ",
          explanation:
            "As the curve rises back to 0 at 360°, it passes through -1/2 again at x = 330° (by symmetry about x = 270°).",
        },
        {
          stepNumber: 5,
          description: "State both solutions.",
          workingLatex: "x = 210^\\circ, \\; 330^\\circ",
          explanation:
            "Both 210° and 330° give sin x = -1/2 in the range. Check: sin 210° = -1/2 and sin 330° = -1/2.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.sin(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={() => -0.5} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-blue)" style="dashed" />
  <Point x={7 * Math.PI / 6} y={-0.5} color="var(--mafs-fg-blue)" />
  <Point x={11 * Math.PI / 6} y={-0.5} color="var(--mafs-fg-blue)" />
  <Text x={7 * Math.PI / 6} y={-0.5} attach="sw" color="var(--mafs-fg-blue)">210°</Text>
  <Text x={11 * Math.PI / 6} y={-0.5} attach="se" color="var(--mafs-fg-blue)">330°</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 210^\\circ,\\; 330^\\circ\\)",
      canonicalAnswer: "210,330",
    },
  },
  {
    id: "ga30-027",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The table shows values for \\(y = a \\cdot b^{x}\\).\n\n| \\(x\\) | 0 | 1 | 2 |\n|---|---|---|---|\n| \\(y\\) | 50 | 40 | 32 |\n\nFind \\(a\\) and \\(b\\), and state whether the model represents growth or decay.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "tables of values", "finding a and b", "decay"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read a from the x = 0 entry.",
          workingLatex: "x = 0: \\; y = a \\cdot b^{0} = a = 50 \\Rightarrow a = 50",
          explanation:
            "When x = 0 the value of y is a (since b^0 = 1). The table gives y = 50 there, so a = 50.",
        },
        {
          stepNumber: 2,
          description: "Find b as the multiplier between consecutive y-values.",
          workingLatex: "b = \\frac{y(1)}{y(0)} = \\frac{40}{50}",
          explanation:
            "For y = ab^x, dividing one y-value by the previous one gives the base b (the per-step multiplier). Use 40 ÷ 50.",
        },
        {
          stepNumber: 3,
          description: "Simplify the multiplier.",
          workingLatex: "b = \\frac{40}{50} = \\frac{4}{5} = 0.8",
          explanation:
            "40/50 simplifies to 4/5 = 0.8, so b = 0.8.",
        },
        {
          stepNumber: 4,
          description: "Check the multiplier with the next pair.",
          workingLatex: "\\frac{32}{40} = \\frac{4}{5} = 0.8 \\; \\checkmark",
          explanation:
            "The multiplier from x = 1 to x = 2 is 32/40 = 0.8, the same as before, confirming b = 0.8 fits the whole table.",
        },
        {
          stepNumber: 5,
          description: "State a, b and the equation.",
          workingLatex: "y = 50 \\cdot 0.8^{x}",
          explanation:
            "So a = 50, b = 0.8, giving the model y = 50·0.8^x.",
          mafs: `<Mafs viewBox={{ x: [-1, 4], y: [-5, 60] }} height={280}>
  <Coordinates.Cartesian yAxis={{ lines: 10 }} />
  <Plot.OfX y={(x) => 50 * Math.pow(0.8, x)} domain={[-1, 3.5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={50} color="var(--mafs-fg-blue)" />
  <Point x={1} y={40} color="var(--mafs-fg-blue)" />
  <Point x={2} y={32} color="var(--mafs-fg-blue)" />
  <Text x={0} y={50} attach="ne" color="var(--mafs-fg-blue)">(0, 50)</Text>
</Mafs>`,
        },
        {
          stepNumber: 6,
          description: "Decide growth or decay.",
          workingLatex: "0 < b < 1 \\Rightarrow \\text{decay}",
          explanation:
            "Because the base b = 0.8 is between 0 and 1, the values shrink each step, so this is exponential decay.",
        },
      ],
      finalAnswer: "\\(a = 50,\\; b = 0.8;\\; \\text{decay}\\)",
      canonicalAnswer: "a=50,b=0.8,decay",
    },
  },
  {
    id: "ga30-028",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A sketch shows a wave that starts at the origin \\((0,\\,0)\\), rises to a maximum of \\(1\\) at \\(x = 90^\\circ\\), returns to \\(0\\) at \\(x = 180^\\circ\\) and reaches a minimum of \\(-1\\) at \\(x = 270^\\circ\\). State the equation of the curve, and explain how it differs from \\(y = \\cos x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "matching graphs", "sine graph", "cosine graph"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the starting value.",
          workingLatex: "\\text{at } x = 0^\\circ, \\; y = 0",
          explanation:
            "A trig wave with amplitude 1 and period 360° is either y = sin x or y = cos x. The deciding feature is the starting height: this curve starts at 0.",
        },
        {
          stepNumber: 2,
          description: "Match the key points to the sine graph.",
          workingLatex: "(0,0) \\to (90,1) \\to (180,0) \\to (270,-1)",
          explanation:
            "Rising from 0 to a peak of 1 at 90°, back to 0 at 180°, down to -1 at 270° — these are exactly the key points of y = sin x.",
        },
        {
          stepNumber: 3,
          description: "State the equation.",
          workingLatex: "y = \\sin x",
          explanation:
            "So the curve is y = sin x.",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.sin(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Point x={Math.PI / 2} y={1} color="var(--mafs-fg-blue)" />
  <Point x={Math.PI} y={0} color="var(--mafs-fg-blue)" />
  <Point x={3 * Math.PI / 2} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={Math.PI / 2} y={1} attach="ne" color="var(--mafs-fg-blue)">(90°, 1)</Text>
  <Text x={3 * Math.PI / 2} y={-1} attach="se" color="var(--mafs-fg-blue)">(270°, -1)</Text>
</Mafs>`,
        },
        {
          stepNumber: 4,
          description: "Explain the difference from cos x.",
          workingLatex: "y = \\cos x \\text{ starts at } (0,1), \\text{ not } (0,0)",
          explanation:
            "y = cos x has the same shape but starts at its maximum (0, 1) rather than at 0; it is the sine graph shifted left by 90°. So this curve is sin x, distinguished by its starting value of 0.",
        },
      ],
      finalAnswer: "\\(y = \\sin x\\)",
      canonicalAnswer: "y=sin(x)",
    },
  },
  {
    id: "ga30-029",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Two exponential curves are \\(y = 3 \\cdot 2^{x}\\) and \\(y = 96 \\cdot 0.5^{x}\\). Find the value of \\(x\\) at which the two curves have the same \\(y\\)-value.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential graphs", "intersection", "solving", "index laws"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the two expressions equal.",
          workingLatex: "3 \\cdot 2^{x} = 96 \\cdot 0.5^{x}",
          explanation:
            "The curves meet where their y-values are equal, so set the two right-hand sides equal and solve for x.",
        },
        {
          stepNumber: 2,
          description: "Write 0.5 as a power of 2.",
          workingLatex: "0.5 = 2^{-1} \\Rightarrow 0.5^{x} = 2^{-x}",
          explanation:
            "Since 0.5 = 1/2 = 2^{-1}, we have 0.5^x = 2^{-x}. Now both sides use base 2.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the equation.",
          workingLatex: "3 \\cdot 2^{x} = 96 \\cdot 2^{-x}",
          explanation:
            "Substituting 0.5^x = 2^{-x} puts everything in terms of powers of 2.",
        },
        {
          stepNumber: 4,
          description: "Collect the powers of 2 on one side.",
          workingLatex: "\\frac{2^{x}}{2^{-x}} = \\frac{96}{3} \\Rightarrow 2^{x - (-x)} = 32",
          explanation:
            "Divide both sides by 3 and by 2^{-x}. Using the index law 2^x ÷ 2^{-x} = 2^{x+x} gives 2^{2x} = 32.",
        },
        {
          stepNumber: 5,
          description: "Write 32 as a power of 2 and equate exponents.",
          workingLatex: "2^{2x} = 2^{5} \\Rightarrow 2x = 5",
          explanation:
            "Since 32 = 2^5, equal bases give equal exponents: 2x = 5.",
        },
        {
          stepNumber: 6,
          description: "Solve for x and check.",
          workingLatex: "x = \\frac{5}{2} = 2.5",
          explanation:
            "Dividing by 2 gives x = 2.5. Check: 3·2^{2.5} = 3·5.657 ≈ 16.97 and 96·0.5^{2.5} = 96·0.1768 ≈ 16.97, so the curves meet at x = 2.5.",
          mafs: `<Mafs viewBox={{ x: [0, 5], y: [-5, 50] }} height={280}>
  <Coordinates.Cartesian yAxis={{ lines: 10 }} />
  <Plot.OfX y={(x) => 3 * Math.pow(2, x)} domain={[0, 4]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(x) => 96 * Math.pow(0.5, x)} domain={[1, 5]} color="var(--mafs-fg-blue)" />
  <Point x={2.5} y={16.97} color="var(--mafs-fg-blue)" />
  <Text x={2.5} y={16.97} attach="se" color="var(--mafs-fg-blue)">x = 2.5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = \\dfrac{5}{2}\\)",
      canonicalAnswer: "5/2",
    },
  },
  {
    id: "ga30-030",
    topicRef: "ga30",
    topicTitle: "Exponential and trigonometric graphs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The graph of \\(y = \\cos x\\) is drawn for \\(0^\\circ \\le x \\le 360^\\circ\\). A horizontal line \\(y = \\dfrac{1}{2}\\) is also drawn. Find the \\(x\\)-coordinates of the two points where the line crosses the curve.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["trigonometric graphs", "cosine graph", "solving equations", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate the crossings into an equation.",
          workingLatex: "\\cos x = \\frac{1}{2}",
          explanation:
            "The line and curve cross where their y-values are equal, so we need the angles with cos x = 1/2 in the range 0°–360°.",
        },
        {
          stepNumber: 2,
          description: "Find the first solution from a standard value.",
          workingLatex: "\\cos 60^\\circ = \\frac{1}{2} \\Rightarrow x = 60^\\circ",
          explanation:
            "cos 60° = 1/2 is a standard exact value, giving the first crossing at x = 60° (on the falling part near the start of the graph).",
        },
        {
          stepNumber: 3,
          description: "Use the symmetry of cosine about x = 360° (equivalently about the x-axis at 0/360).",
          workingLatex: "\\cos(360^\\circ - x) = \\cos x",
          explanation:
            "The cosine graph is symmetric so that cos(360° - x) = cos x. This gives a second angle with the same cosine value as the curve rises back towards 1 at 360°.",
        },
        {
          stepNumber: 4,
          description: "Compute the second solution.",
          workingLatex: "x = 360^\\circ - 60^\\circ = 300^\\circ",
          explanation:
            "So the second crossing is at x = 300°. Both 60° and 300° give cos x = 1/2 and lie in range.",
        },
        {
          stepNumber: 5,
          description: "State both x-coordinates.",
          workingLatex: "x = 60^\\circ, \\; 300^\\circ",
          explanation:
            "The line y = 1/2 crosses y = cos x at x = 60° and x = 300°. (Between these the curve dips below 1/2.)",
          mafs: `<Mafs viewBox={{ x: [0, 2 * Math.PI], y: [-1.5, 1.5] }} height={280}>
  <Coordinates.Cartesian xAxis={{ lines: Math.PI / 2 }} />
  <Plot.OfX y={(x) => Math.cos(x)} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={() => 0.5} domain={[0, 2 * Math.PI]} color="var(--mafs-fg-blue)" style="dashed" />
  <Point x={Math.PI / 3} y={0.5} color="var(--mafs-fg-blue)" />
  <Point x={5 * Math.PI / 3} y={0.5} color="var(--mafs-fg-blue)" />
  <Text x={Math.PI / 3} y={0.5} attach="nw" color="var(--mafs-fg-blue)">60°</Text>
  <Text x={5 * Math.PI / 3} y={0.5} attach="ne" color="var(--mafs-fg-blue)">300°</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x = 60^\\circ,\\; 300^\\circ\\)",
      canonicalAnswer: "60,300",
    },
  },
];
