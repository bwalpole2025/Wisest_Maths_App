/**
 * Topic: Graph transformations — translations and reflections
 * Ref: ga31  (DfE A13)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: the GCSE transformations of y = f(x). Only translations and
 *   reflections are GCSE; STRETCHES (y = a f(x), y = f(ax)) are A-Level and are
 *   deliberately EXCLUDED. The four rules drilled here:
 *     • y = f(x) + a   — translation by vector (0, a): shifts the graph UP by a
 *       (down if a < 0). OUTSIDE f, so it acts on the y-values, the "expected"
 *       direction.
 *     • y = f(x + a)   — translation by vector (-a, 0): shifts the graph LEFT by
 *       a when a > 0. This is the COUNTERINTUITIVE one — "+a inside means move
 *       in the NEGATIVE x-direction" — stressed throughout the solutions.
 *     • y = -f(x)      — reflection in the x-axis (y -> -y): the outside minus
 *       flips every point vertically.
 *     • y = f(-x)      — reflection in the y-axis (x -> -x): the inside minus
 *       flips every point horizontally.
 *   Clusters:
 *     (1) vertical translation f(x) + a;
 *     (2) horizontal translation f(x + a) (the LEFT-for-positive trap);
 *     (3) reflection in the x-axis, -f(x);
 *     (4) reflection in the y-axis, f(-x);
 *     (5) effect on a named point / turning point / intercept;
 *     (6) image coordinates, writing the new equation, and describing a given
 *         transformation.
 *   Solutions stress WHY each rule moves the graph the way it does, the
 *   inside-vs-outside distinction, and a final CHECK by substituting a point.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga31-001 .. ga31-004  (4)   one clean rule each
 *   - Standard:   ga31-005 .. ga31-018  (14)
 *   - Challenge:  ga31-019 .. ga31-030  (12)
 * Id range: ga31-001 .. ga31-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) and \\cdot for
 *   multiplication, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga31-001",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) is transformed to give \\(y = f(x) + 4\\). Describe the single transformation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["graph transformations", "vertical translation", "f(x)+a"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify where the change is made — outside or inside f.",
          workingLatex: "y = f(x) + 4 \\quad (\\text{the } +4 \\text{ is OUTSIDE } f)",
          explanation:
            "Adding a number OUTSIDE the function, after f(x), changes the OUTPUT (the y-values). Every y-value goes up by 4, so the whole graph moves vertically.",
        },
        {
          stepNumber: 2,
          description: "State the translation.",
          workingLatex: "\\text{translation by } \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}",
          explanation:
            "f(x) + 4 raises every point by 4, so the graph is translated 4 units UP, i.e. by the vector (0, 4).",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [-1, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x + 4} domain={[-3, 3]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="e" attachDistance={22}>(0, 0)</Text>
  <Point x={0} y={4} color="var(--mafs-fg-green)" />
  <Text x={0} y={4} attach="e" attachDistance={22}>(0, 4)</Text>
  <Text x={2.4} y={9.5} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={1.6} y={11.5} attach="w" color="var(--mafs-fg-accent)">y = f(x)+4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Translation } 4 \\text{ units up, vector } \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}\\)",
    },
  },
  {
    id: "ga31-002",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) is transformed to give \\(y = f(x + 3)\\). Describe the single transformation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["graph transformations", "horizontal translation", "f(x+a)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify that the change is INSIDE f, acting on x.",
          workingLatex: "y = f(x + 3) \\quad (\\text{the } +3 \\text{ is INSIDE } f)",
          explanation:
            "The +3 is inside the brackets, so it acts on the INPUT x. Inside changes move the graph horizontally — and they move it the OPPOSITE way to the sign.",
        },
        {
          stepNumber: 2,
          description: "Apply the inside rule: +a moves LEFT.",
          workingLatex: "f(x + 3) \\Rightarrow \\text{translation by } \\begin{pmatrix} -3 \\\\ 0 \\end{pmatrix}",
          explanation:
            "f(x + 3) shifts the graph 3 units to the LEFT, not right. Reason: the point that was at x now needs an input 3 smaller to give the same f-value, so the curve slides in the negative x-direction. This is the counterintuitive rule — +inside means LEFT.",
          mafs: `<Mafs viewBox={{ x: [-6, 4], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x + 3)*(x + 3)} domain={[-6, 0]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="e" attachDistance={20}>(0, 0)</Text>
  <Point x={-3} y={0} color="var(--mafs-fg-green)" />
  <Text x={-3} y={0} attach="w" attachDistance={20}>(-3, 0)</Text>
  <Text x={2.6} y={8} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={-3} y={8} attach="e" color="var(--mafs-fg-accent)">y = f(x+3)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Translation } 3 \\text{ units left, vector } \\begin{pmatrix} -3 \\\\ 0 \\end{pmatrix}\\)",
    },
  },
  {
    id: "ga31-003",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) is transformed to give \\(y = -f(x)\\). Describe the single transformation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "-f(x)", "x-axis"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The minus sign is OUTSIDE f, so it acts on the y-values.",
          workingLatex: "y = -f(x) \\quad\\Rightarrow\\quad y \\to -y",
          explanation:
            "A minus outside the function negates every output. Each y-value becomes its opposite, so a point (x, y) maps to (x, -y).",
        },
        {
          stepNumber: 2,
          description: "State the reflection.",
          workingLatex: "(x,\\,y) \\to (x,\\,-y) \\Rightarrow \\text{reflection in the } x\\text{-axis}",
          explanation:
            "Sending y to -y while keeping x fixed flips the graph vertically about the line y = 0. So y = -f(x) is a reflection in the x-axis.",
          mafs: `<Mafs viewBox={{ x: [-3, 4], y: [-7, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 2*x} domain={[-1.6, 3.6]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => -(x*x - 2*x)} domain={[-1.6, 3.6]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={1} y={-1} attach="s" attachDistance={18}>(1, -1)</Text>
  <Point x={1} y={1} color="var(--mafs-fg-green)" />
  <Text x={1} y={1} attach="n" attachDistance={18}>(1, 1)</Text>
  <Text x={3.4} y={4.5} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={3.4} y={-4.5} attach="w" color="var(--mafs-fg-accent)">y = -f(x)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Reflection in the } x\\text{-axis}\\)",
    },
  },
  {
    id: "ga31-004",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) is transformed to give \\(y = f(-x)\\). Describe the single transformation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "f(-x)", "y-axis"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The minus sign is INSIDE f, so it acts on the input x.",
          workingLatex: "y = f(-x) \\quad\\Rightarrow\\quad x \\to -x",
          explanation:
            "A minus inside the brackets negates the input. The value the graph took at x is now taken at -x, so each point (x, y) maps to (-x, y).",
        },
        {
          stepNumber: 2,
          description: "State the reflection.",
          workingLatex: "(x,\\,y) \\to (-x,\\,y) \\Rightarrow \\text{reflection in the } y\\text{-axis}",
          explanation:
            "Sending x to -x while keeping y fixed flips the graph horizontally about the line x = 0. So y = f(-x) is a reflection in the y-axis.",
          mafs: `<Mafs viewBox={{ x: [-4, 4], y: [-2, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 2*x} domain={[-1, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x + 2*x} domain={[-3, 1]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={1} y={-1} attach="e" attachDistance={18}>(1, -1)</Text>
  <Point x={-1} y={-1} color="var(--mafs-fg-green)" />
  <Text x={-1} y={-1} attach="w" attachDistance={18}>(-1, -1)</Text>
  <Text x={3} y={5.5} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={-3} y={5.5} attach="e" color="var(--mafs-fg-accent)">y = f(-x)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Reflection in the } y\\text{-axis}\\)",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga31-005",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The curve \\(y = x^2\\) is translated by the vector \\(\\begin{pmatrix} 0 \\\\ -5 \\end{pmatrix}\\). Write down the equation of the new curve.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "vertical translation", "f(x)+a", "writing the equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the vector and decide which rule applies.",
          workingLatex: "\\begin{pmatrix} 0 \\\\ -5 \\end{pmatrix} \\Rightarrow \\text{move } 5 \\text{ down}",
          explanation:
            "The vector has 0 in the x-slot and -5 in the y-slot, so the curve moves 5 units down with no horizontal shift. A vertical move uses the OUTSIDE rule y = f(x) + a.",
        },
        {
          stepNumber: 2,
          description: "Apply y = f(x) + a with a = -5.",
          workingLatex: "y = f(x) + a = x^2 + (-5)",
          explanation:
            "Moving DOWN by 5 means adding a = -5 to the function. Here f(x) = x^2, so the new output is x^2 + (-5).",
        },
        {
          stepNumber: 3,
          description: "Simplify to give the equation.",
          workingLatex: "y = x^2 - 5",
          explanation:
            "The translated curve is y = x^2 - 5. Check: the original vertex (0, 0) moves to (0, -5), which matches a 5-unit downward shift.",
          mafs: `<Mafs viewBox={{ x: [-4, 4], y: [-6, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3.4, 3.4]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x - 5} domain={[-3.4, 3.4]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="e" attachDistance={20}>(0, 0)</Text>
  <Point x={0} y={-5} color="var(--mafs-fg-green)" />
  <Text x={0} y={-5} attach="e" attachDistance={20}>(0, -5)</Text>
  <Text x={2.7} y={7} attach="w" color="var(--mafs-fg-orange)">y = x^2</Text>
  <Text x={3.3} y={3.5} attach="w" color="var(--mafs-fg-accent)">y = x^2-5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = x^2 - 5\\)",
      canonicalAnswer: "y=x^2-5",
    },
  },
  {
    id: "ga31-006",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x) = x^2 + 1\\), write down a simplified expression for \\(f(x) + 6\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "vertical translation", "f(x)+a", "function notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise that f(x) + 6 adds 6 to the whole function.",
          workingLatex: "f(x) + 6 = (x^2 + 1) + 6",
          explanation:
            "f(x) + 6 takes the entire output of f and adds 6 to it. Substitute f(x) = x^2 + 1 in brackets so nothing is lost.",
        },
        {
          stepNumber: 2,
          description: "Collect the constant terms.",
          workingLatex: "= x^2 + 1 + 6 = x^2 + 7",
          explanation:
            "Only the constants 1 and 6 combine; the x^2 term is unchanged. So f(x) + 6 = x^2 + 7.",
        },
        {
          stepNumber: 3,
          description: "Interpret the result as a transformation.",
          workingLatex: "y = x^2 + 7 \\quad (\\text{original raised by } 7)",
          explanation:
            "This is the curve y = x^2 + 1 translated 7 units up by the vector (0, 7) — the +6 outside f adds to the constant already present.",
          mafs: `<Mafs viewBox={{ x: [-3, 3], y: [0, 16] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 1} domain={[-2.6, 2.6]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x + 7} domain={[-2.6, 2.6]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Text x={0} y={1} attach="e" attachDistance={20}>(0, 1)</Text>
  <Point x={0} y={7} color="var(--mafs-fg-green)" />
  <Text x={0} y={7} attach="e" attachDistance={20}>(0, 7)</Text>
  <Text x={2.3} y={4.5} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={1.7} y={13} attach="w" color="var(--mafs-fg-accent)">y = f(x)+6</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(x^2 + 7\\)",
      canonicalAnswer: "x^2+7",
    },
  },
  {
    id: "ga31-007",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) passes through the point \\((2,\\,7)\\). State the coordinates of the corresponding point on the graph of \\(y = f(x) - 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "vertical translation", "f(x)+a", "image point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the transformation.",
          workingLatex: "y = f(x) - 3 \\quad (\\text{outside: } a = -3)",
          explanation:
            "Subtracting 3 outside f lowers every output by 3, a translation of the graph 3 units down by vector (0, -3).",
        },
        {
          stepNumber: 2,
          description: "A vertical shift leaves x unchanged and changes y.",
          workingLatex: "(x,\\,y) \\to (x,\\,y - 3)",
          explanation:
            "Because only the y-values change, the x-coordinate of the point stays the same; the y-coordinate drops by 3.",
        },
        {
          stepNumber: 3,
          description: "Apply this to the point (2, 7).",
          workingLatex: "(2,\\,7) \\to (2,\\,7 - 3) = (2,\\,4)",
          explanation:
            "Keep x = 2 and reduce y from 7 to 4. The image point is (2, 4). Check: f(2) = 7, so f(2) - 3 = 4.",
          mafs: `<Mafs viewBox={{ x: [-3, 4], y: [-1, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 3} domain={[-2.7, 2.7]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x} domain={[-2.7, 2.7]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={7} color="var(--mafs-fg-blue)" />
  <Text x={2} y={7} attach="e" attachDistance={18}>(2, 7)</Text>
  <Point x={2} y={4} color="var(--mafs-fg-green)" />
  <Text x={2} y={4} attach="e" attachDistance={18}>(2, 4)</Text>
  <Text x={-2.7} y={9} attach="e" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={-2.7} y={5.5} attach="e" color="var(--mafs-fg-accent)">y = f(x)-3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((2,\\,4)\\)",
      canonicalAnswer: "(2,4)",
    },
  },
  {
    id: "ga31-008",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) is translated to give \\(y = f(x - 2)\\). Describe fully the single transformation.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "horizontal translation", "f(x+a)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the change: inside f, acting on x.",
          workingLatex: "y = f(x - 2) \\quad (\\text{inside change})",
          explanation:
            "The -2 sits inside the brackets with x, so it affects the INPUT and produces a HORIZONTAL shift. Inside changes always go the opposite way to the sign.",
        },
        {
          stepNumber: 2,
          description: "Apply the inside rule: f(x - a) moves RIGHT by a.",
          workingLatex: "f(x - 2) \\Rightarrow \\text{move RIGHT by } 2",
          explanation:
            "Here the bracket is (x - 2), i.e. a = +2 subtracted. f(x - a) shifts RIGHT by a. Reason: to get the old output you now need an input 2 larger, so the curve slides in the positive x-direction.",
        },
        {
          stepNumber: 3,
          description: "State the translation vector.",
          workingLatex: "\\text{translation by } \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}",
          explanation:
            "A 2-unit rightward shift is the vector (2, 0). (Contrast f(x + 2), which would move LEFT — the inside sign is deliberately deceptive.)",
          mafs: `<Mafs viewBox={{ x: [-4, 6], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x - 2)*(x - 2)} domain={[-1, 5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="w" attachDistance={18}>(0, 0)</Text>
  <Point x={2} y={0} color="var(--mafs-fg-green)" />
  <Text x={2} y={0} attach="e" attachDistance={18}>(2, 0)</Text>
  <Text x={-2.6} y={8} attach="e" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={4.6} y={8} attach="w" color="var(--mafs-fg-accent)">y = f(x-2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Translation } 2 \\text{ units right, vector } \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}\\)",
    },
  },
  {
    id: "ga31-009",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The curve \\(y = x^2\\) is translated 4 units to the left. Write down the equation of the new curve.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "horizontal translation", "f(x+a)", "writing the equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the rule for a horizontal shift.",
          workingLatex: "\\text{horizontal shift} \\Rightarrow y = f(x + a)",
          explanation:
            "A left/right move is an INSIDE change, so it uses y = f(x + a), replacing x by (x + a) inside the function.",
        },
        {
          stepNumber: 2,
          description: "A move LEFT by 4 needs +4 inside.",
          workingLatex: "\\text{left } 4 \\Rightarrow x \\to x + 4",
          explanation:
            "Because the inside sign is reversed, moving 4 units LEFT means adding 4 to x: replace x with (x + 4). (If you instead want RIGHT you would subtract.)",
        },
        {
          stepNumber: 3,
          description: "Substitute into f(x) = x^2.",
          workingLatex: "y = (x + 4)^2",
          explanation:
            "Replace x by (x + 4) in x^2 to get y = (x + 4)^2. Check: the vertex of y = x^2 at x = 0 moves to where x + 4 = 0, i.e. x = -4 — 4 units to the left, as required.",
          mafs: `<Mafs viewBox={{ x: [-8, 4], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x + 4)*(x + 4)} domain={[-7, -1]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="e" attachDistance={18}>(0, 0)</Text>
  <Point x={-4} y={0} color="var(--mafs-fg-green)" />
  <Text x={-4} y={0} attach="w" attachDistance={18}>(-4, 0)</Text>
  <Text x={2.7} y={8} attach="w" color="var(--mafs-fg-orange)">y = x^2</Text>
  <Text x={-4} y={8} attach="e" color="var(--mafs-fg-accent)">y = (x+4)^2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = (x + 4)^2\\)",
      canonicalAnswer: "y=(x+4)^2",
    },
  },
  {
    id: "ga31-010",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) passes through the point \\((1,\\,9)\\). State the coordinates of the corresponding point on the graph of \\(y = f(x + 5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "horizontal translation", "f(x+a)", "image point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the transformation.",
          workingLatex: "y = f(x + 5) \\quad (\\text{inside: } +5 \\Rightarrow \\text{LEFT } 5)",
          explanation:
            "The +5 inside the brackets shifts the graph 5 units to the LEFT (the counterintuitive inside rule), vector (-5, 0).",
        },
        {
          stepNumber: 2,
          description: "A horizontal shift changes x and leaves y unchanged.",
          workingLatex: "(x,\\,y) \\to (x - 5,\\,y)",
          explanation:
            "Moving 5 left reduces the x-coordinate by 5; the y-coordinate is untouched. (Algebraically, the new graph hits the same height where its input x + 5 equals the old input, so x is 5 smaller.)",
        },
        {
          stepNumber: 3,
          description: "Apply this to (1, 9).",
          workingLatex: "(1,\\,9) \\to (1 - 5,\\,9) = (-4,\\,9)",
          explanation:
            "Subtract 5 from x: 1 - 5 = -4, keep y = 9. The image point is (-4, 9). Check: at x = -4, x + 5 = 1, so f(x + 5) = f(1) = 9.",
          mafs: `<Mafs viewBox={{ x: [-9, 5], y: [-1, 14] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 8} domain={[-2.2, 2.2]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x + 5)*(x + 5) + 8} domain={[-7.2, -2.8]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={9} color="var(--mafs-fg-blue)" />
  <Text x={1} y={9} attach="e" attachDistance={16}>(1, 9)</Text>
  <Point x={-4} y={9} color="var(--mafs-fg-green)" />
  <Text x={-4} y={9} attach="w" attachDistance={16}>(-4, 9)</Text>
  <Text x={2.2} y={12.5} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={-5} y={12.5} attach="e" color="var(--mafs-fg-accent)">y = f(x+5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((-4,\\,9)\\)",
      canonicalAnswer: "(-4,9)",
    },
  },
  {
    id: "ga31-011",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\(f(x) = x^2 - 4x + 1\\), write down a simplified expression for \\(-f(x)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "-f(x)", "x-axis"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise that -f(x) negates the whole function.",
          workingLatex: "-f(x) = -(x^2 - 4x + 1)",
          explanation:
            "The minus is outside f, so it multiplies the ENTIRE expression by -1. Put f(x) in brackets first so every term is negated.",
        },
        {
          stepNumber: 2,
          description: "Distribute the minus sign across every term.",
          workingLatex: "= -x^2 + 4x - 1",
          explanation:
            "Each sign flips: -x^2, then -(-4x) = +4x, then -(+1) = -1. A common slip is to negate only the first term — every term must change sign.",
        },
        {
          stepNumber: 3,
          description: "Interpret as a transformation.",
          workingLatex: "y = -x^2 + 4x - 1 \\quad (\\text{reflection in } x\\text{-axis})",
          explanation:
            "y = -f(x) is the curve reflected in the x-axis; every point (x, y) maps to (x, -y).",
          mafs: `<Mafs viewBox={{ x: [-2, 6], y: [-5, 5] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 4*x + 1} domain={[-0.4, 4.4]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => -(x*x - 4*x + 1)} domain={[-0.4, 4.4]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={-3} color="var(--mafs-fg-blue)" />
  <Text x={2} y={-3} attach="s" attachDistance={16}>(2, -3)</Text>
  <Point x={2} y={3} color="var(--mafs-fg-green)" />
  <Text x={2} y={3} attach="n" attachDistance={16}>(2, 3)</Text>
  <Text x={5} y={4} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={5} y={-4} attach="w" color="var(--mafs-fg-accent)">y = -f(x)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-x^2 + 4x - 1\\)",
      canonicalAnswer: "-x^2+4x-1",
    },
  },
  {
    id: "ga31-012",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) has a maximum point at \\((3,\\,8)\\). State the coordinates of the corresponding point on the graph of \\(y = -f(x)\\), and say whether it is a maximum or a minimum.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "-f(x)", "turning point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the transformation and its effect on points.",
          workingLatex: "y = -f(x): \\; (x,\\,y) \\to (x,\\,-y)",
          explanation:
            "y = -f(x) reflects the graph in the x-axis, so x stays the same while y changes sign.",
        },
        {
          stepNumber: 2,
          description: "Apply this to the maximum point (3, 8).",
          workingLatex: "(3,\\,8) \\to (3,\\,-8)",
          explanation:
            "Keep x = 3 and negate y: 8 becomes -8, giving the image point (3, -8).",
        },
        {
          stepNumber: 3,
          description: "Decide whether it is now a maximum or minimum.",
          workingLatex: "\\text{max} \\to \\text{min at } (3,\\,-8)",
          explanation:
            "Reflecting in the x-axis turns the graph upside down, so a highest point (maximum) becomes a lowest point (minimum). Hence (3, -8) is a minimum.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-10, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(x - 3)*(x - 3) + 8} domain={[0.1, 5.9]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x - 3)*(x - 3) - 8} domain={[0.1, 5.9]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={8} color="var(--mafs-fg-blue)" />
  <Text x={3} y={8} attach="n" attachDistance={14}>(3, 8) max</Text>
  <Point x={3} y={-8} color="var(--mafs-fg-green)" />
  <Text x={3} y={-8} attach="s" attachDistance={14}>(3, -8) min</Text>
  <Text x={6} y={5} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={6} y={-5} attach="w" color="var(--mafs-fg-accent)">y = -f(x)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,-8),\\ \\text{a minimum}\\)",
      canonicalAnswer: "(3,-8)",
    },
  },
  {
    id: "ga31-013",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) passes through the point \\((6,\\,2)\\). State the coordinates of the corresponding point on the graph of \\(y = f(-x)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "f(-x)", "y-axis", "image point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the transformation.",
          workingLatex: "y = f(-x): \\; (x,\\,y) \\to (-x,\\,y)",
          explanation:
            "The minus inside f reflects the graph in the y-axis, so the x-coordinate changes sign while y stays the same.",
        },
        {
          stepNumber: 2,
          description: "Apply this to (6, 2).",
          workingLatex: "(6,\\,2) \\to (-6,\\,2)",
          explanation:
            "Negate x: 6 becomes -6, keep y = 2. The image point is (-6, 2).",
        },
        {
          stepNumber: 3,
          description: "Sanity-check by the function values.",
          workingLatex: "x = -6: \\; f(-(-6)) = f(6) = 2 \\checkmark",
          explanation:
            "At x = -6 the new curve gives f(-x) = f(6) = 2, confirming the point (-6, 2) lies on y = f(-x).",
          mafs: `<Mafs viewBox={{ x: [-10, 10], y: [-1, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 6)*(x - 6) + 2} domain={[3, 9]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x + 6)*(x + 6) + 2} domain={[-9, -3]} color="var(--mafs-fg-accent)" />
  <Point x={6} y={2} color="var(--mafs-fg-blue)" />
  <Text x={6} y={2} attach="e" attachDistance={14}>(6, 2)</Text>
  <Point x={-6} y={2} color="var(--mafs-fg-green)" />
  <Text x={-6} y={2} attach="w" attachDistance={14}>(-6, 2)</Text>
  <Text x={6} y={9} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={-6} y={9} attach="e" color="var(--mafs-fg-accent)">y = f(-x)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((-6,\\,2)\\)",
      canonicalAnswer: "(-6,2)",
    },
  },
  {
    id: "ga31-014",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The curve \\(y = x^2 - 3x\\) is reflected in the \\(y\\)-axis. Write down a simplified equation of the new curve.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "f(-x)", "y-axis", "writing the equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the rule for reflection in the y-axis.",
          workingLatex: "\\text{reflect in } y\\text{-axis} \\Rightarrow y = f(-x)",
          explanation:
            "Reflection in the y-axis replaces x by -x inside the function, giving y = f(-x).",
        },
        {
          stepNumber: 2,
          description: "Substitute -x for x in x^2 - 3x.",
          workingLatex: "y = (-x)^2 - 3(-x)",
          explanation:
            "Every x in the equation becomes (-x), kept in brackets so the squaring and the sign are handled correctly.",
        },
        {
          stepNumber: 3,
          description: "Simplify each term.",
          workingLatex: "= x^2 + 3x",
          explanation:
            "(-x)^2 = x^2 (a square is always non-negative), and -3(-x) = +3x. So the reflected curve is y = x^2 + 3x. Check the original root x = 3 reflects to x = -3: putting x = -3 gives 9 - 9 = 0. ✓",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-3, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 3*x} domain={[-0.6, 3.6]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x + 3*x} domain={[-3.6, 0.6]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={0} color="var(--mafs-fg-blue)" />
  <Text x={3} y={0} attach="e" attachDistance={14}>(3, 0)</Text>
  <Point x={-3} y={0} color="var(--mafs-fg-green)" />
  <Text x={-3} y={0} attach="w" attachDistance={14}>(-3, 0)</Text>
  <Text x={3.6} y={4} attach="w" color="var(--mafs-fg-orange)">y = x^2-3x</Text>
  <Text x={-3.6} y={4} attach="e" color="var(--mafs-fg-accent)">y = x^2+3x</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = x^2 + 3x\\)",
      canonicalAnswer: "y=x^2+3x",
    },
  },
  {
    id: "ga31-015",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) crosses the \\(x\\)-axis at \\((4,\\,0)\\). State where the graph of \\(y = f(x) + 2\\) is, relative to \\((4,\\,0)\\), and explain whether this transformed graph still passes through \\((4,\\,0)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "vertical translation", "f(x)+a", "intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the transformation acting on the point.",
          workingLatex: "y = f(x) + 2: \\; (x,\\,y) \\to (x,\\,y + 2)",
          explanation:
            "Adding 2 outside f raises every point by 2; x is unchanged and y increases by 2.",
        },
        {
          stepNumber: 2,
          description: "Apply it to the x-intercept (4, 0).",
          workingLatex: "(4,\\,0) \\to (4,\\,0 + 2) = (4,\\,2)",
          explanation:
            "The point on the original x-axis crossing moves up to (4, 2).",
        },
        {
          stepNumber: 3,
          description: "Decide whether (4, 0) is still on the graph.",
          workingLatex: "\\text{new graph at } x = 4 \\text{ has } y = 2 \\neq 0",
          explanation:
            "At x = 4 the transformed graph now has height 2, not 0, so it no longer passes through (4, 0); its crossing has lifted off the x-axis. The original x-intercept becomes the point (4, 2).",
          mafs: `<Mafs viewBox={{ x: [-2, 7], y: [-5, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 4*x} domain={[-0.7, 4.7]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x - 4*x + 2} domain={[-0.7, 4.7]} color="var(--mafs-fg-accent)" />
  <Point x={4} y={0} color="var(--mafs-fg-blue)" />
  <Text x={4} y={0} attach="s" attachDistance={14}>(4, 0)</Text>
  <Point x={4} y={2} color="var(--mafs-fg-green)" />
  <Text x={4} y={2} attach="e" attachDistance={14}>(4, 2)</Text>
  <Text x={-1} y={5} attach="e" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={-1} y={2.5} attach="e" color="var(--mafs-fg-accent)">y = f(x)+2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Moves to } (4,\\,2); \\text{ no, it no longer passes through } (4,\\,0)\\)",
      canonicalAnswer: "(4,2)",
    },
  },
  {
    id: "ga31-016",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) is transformed to give \\(y = f(x) - 7\\). Describe fully the single transformation, and state the effect on the \\(y\\)-intercept if the original graph crosses the \\(y\\)-axis at \\((0,\\,3)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "vertical translation", "f(x)+a", "y-intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the transformation.",
          workingLatex: "y = f(x) - 7 \\quad (\\text{outside: } a = -7)",
          explanation:
            "Subtracting 7 outside f lowers every output by 7, a translation 7 units down by vector (0, -7).",
        },
        {
          stepNumber: 2,
          description: "Apply the shift to the y-intercept (0, 3).",
          workingLatex: "(0,\\,3) \\to (0,\\,3 - 7) = (0,\\,-4)",
          explanation:
            "The y-intercept has x = 0; lowering it by 7 takes y from 3 to -4, with x unchanged.",
        },
        {
          stepNumber: 3,
          description: "State both parts of the answer.",
          workingLatex: "\\text{translation } \\begin{pmatrix} 0 \\\\ -7 \\end{pmatrix}; \\quad y\\text{-intercept } (0,\\,-4)",
          explanation:
            "The transformation is a translation 7 units down, and the new y-intercept is (0, -4).",
          mafs: `<Mafs viewBox={{ x: [-4, 4], y: [-6, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 3} domain={[-2.2, 2.2]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x - 4} domain={[-2.2, 2.2]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={3} color="var(--mafs-fg-blue)" />
  <Text x={0} y={3} attach="e" attachDistance={16}>(0, 3)</Text>
  <Point x={0} y={-4} color="var(--mafs-fg-green)" />
  <Text x={0} y={-4} attach="e" attachDistance={16}>(0, -4)</Text>
  <Text x={2.2} y={6} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={2.2} y={-2} attach="w" color="var(--mafs-fg-accent)">y = f(x)-7</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Translation } 7 \\text{ down } \\begin{pmatrix} 0 \\\\ -7 \\end{pmatrix}; \\text{ new } y\\text{-intercept } (0,\\,-4)\\)",
      canonicalAnswer: "(0,-4)",
    },
  },
  {
    id: "ga31-017",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = x^2\\) is reflected in the \\(x\\)-axis and then translated 3 units up. Write down the equation of the resulting curve.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "-f(x)", "vertical translation", "combined"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Reflect y = x^2 in the x-axis first.",
          workingLatex: "y = -f(x) = -x^2",
          explanation:
            "Reflection in the x-axis applies a minus outside the function: y = x^2 becomes y = -x^2.",
        },
        {
          stepNumber: 2,
          description: "Now translate the result 3 units up.",
          workingLatex: "y = -x^2 + 3",
          explanation:
            "A 3-unit upward shift adds 3 outside the (already reflected) function, giving y = -x^2 + 3. Order matters here, but adding the +3 after the reflection is exactly what 'then translated up' means.",
        },
        {
          stepNumber: 3,
          description: "Check a point.",
          workingLatex: "x = 0: \\; y = -(0)^2 + 3 = 3 \\;\\checkmark",
          explanation:
            "The original vertex (0, 0) reflects to (0, 0) then rises to (0, 3), matching y = -x^2 + 3 at x = 0. The curve is an upside-down parabola with maximum (0, 3).",
          mafs: `<Mafs viewBox={{ x: [-4, 4], y: [-6, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-2.7, 2.7]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => -x*x + 3} domain={[-2.9, 2.9]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="e" attachDistance={16}>(0, 0)</Text>
  <Point x={0} y={3} color="var(--mafs-fg-green)" />
  <Text x={0} y={3} attach="e" attachDistance={16}>(0, 3) max</Text>
  <Text x={2.6} y={6} attach="w" color="var(--mafs-fg-orange)">y = x^2</Text>
  <Text x={2.9} y={-3} attach="w" color="var(--mafs-fg-accent)">y = -x^2+3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = -x^2 + 3\\)",
      canonicalAnswer: "y=-x^2+3",
    },
  },
  {
    id: "ga31-018",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The point \\((-2,\\,5)\\) lies on the graph of \\(y = f(x)\\). State the coordinates of the corresponding point on the graph of \\(y = f(x - 4)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "horizontal translation", "f(x+a)", "image point", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the transformation.",
          workingLatex: "y = f(x - 4) \\quad (\\text{inside: } -4 \\Rightarrow \\text{RIGHT } 4)",
          explanation:
            "The -4 inside the brackets shifts the graph 4 units to the RIGHT, vector (4, 0). (Inside, a minus moves it right.)",
        },
        {
          stepNumber: 2,
          description: "A rightward shift adds to x and leaves y unchanged.",
          workingLatex: "(x,\\,y) \\to (x + 4,\\,y)",
          explanation:
            "Moving 4 right increases the x-coordinate by 4; y is untouched.",
        },
        {
          stepNumber: 3,
          description: "Apply this to (-2, 5).",
          workingLatex: "(-2,\\,5) \\to (-2 + 4,\\,5) = (2,\\,5)",
          explanation:
            "Add 4 to x: -2 + 4 = 2, keep y = 5. The image point is (2, 5). Check: at x = 2, x - 4 = -2, so f(x - 4) = f(-2) = 5.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-1, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x + 2)*(x + 2) + 5} domain={[-4.4, 0.4]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x - 6)*(x - 6) + 5} domain={[3.6, 8.4]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={5} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={5} attach="w" attachDistance={14}>(-2, 5)</Text>
  <Point x={2} y={5} color="var(--mafs-fg-green)" />
  <Text x={2} y={5} attach="e" attachDistance={14}>(2, 5)</Text>
  <Text x={-4} y={10} attach="e" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={3.6} y={10} attach="w" color="var(--mafs-fg-accent)">y = f(x-4)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((2,\\,5)\\)",
      canonicalAnswer: "(2,5)",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga31-019",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The curve \\(y = x^2 + 2x\\) is translated by the vector \\(\\begin{pmatrix} 0 \\\\ 5 \\end{pmatrix}\\). Write the equation of the new curve in the form \\(y = x^2 + bx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "vertical translation", "f(x)+a", "writing the equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the vector.",
          workingLatex: "\\begin{pmatrix} 0 \\\\ 5 \\end{pmatrix} \\Rightarrow \\text{move } 5 \\text{ up}",
          explanation:
            "The x-component is 0 and the y-component is 5, so this is a purely vertical shift of 5 units up — the outside rule y = f(x) + 5.",
        },
        {
          stepNumber: 2,
          description: "Add 5 to the whole function.",
          workingLatex: "y = (x^2 + 2x) + 5",
          explanation:
            "Apply y = f(x) + 5 with f(x) = x^2 + 2x. Put f(x) in brackets and add 5 outside.",
        },
        {
          stepNumber: 3,
          description: "Simplify into the requested form.",
          workingLatex: "y = x^2 + 2x + 5",
          explanation:
            "There are no like terms to combine beyond appending the constant, so the new curve is y = x^2 + 2x + 5 (here b = 2, c = 5).",
        },
        {
          stepNumber: 4,
          description: "Check with a point.",
          workingLatex: "x = 0: \\; \\text{old } y = 0, \\; \\text{new } y = 5 \\;\\checkmark",
          explanation:
            "At x = 0 the original gives y = 0 and the new curve gives y = 5, a rise of exactly 5, confirming the vertical translation.",
          mafs: `<Mafs viewBox={{ x: [-5, 3], y: [-2, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 2*x} domain={[-3.6, 1.6]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x + 2*x + 5} domain={[-3.6, 1.6]} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={-1} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={-1} attach="s" attachDistance={14}>(-1, -1)</Text>
  <Point x={-1} y={4} color="var(--mafs-fg-green)" />
  <Text x={-1} y={4} attach="e" attachDistance={14}>(-1, 4)</Text>
  <Text x={1.6} y={6} attach="w" color="var(--mafs-fg-orange)">y = x^2+2x</Text>
  <Text x={1.6} y={10} attach="w" color="var(--mafs-fg-accent)">+5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = x^2 + 2x + 5\\)",
      canonicalAnswer: "y=x^2+2x+5",
    },
  },
  {
    id: "ga31-020",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The curve \\(y = x^2\\) is translated 2 units to the right. Write the resulting equation in the expanded form \\(y = x^2 + bx + c\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "horizontal translation", "f(x+a)", "expanding"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the horizontal-shift rule.",
          workingLatex: "\\text{right } 2 \\Rightarrow x \\to x - 2 \\Rightarrow y = f(x - 2)",
          explanation:
            "A rightward shift replaces x by (x - 2): moving RIGHT uses a MINUS inside (the reverse of the apparent sign).",
        },
        {
          stepNumber: 2,
          description: "Substitute into f(x) = x^2.",
          workingLatex: "y = (x - 2)^2",
          explanation:
            "Replace x by (x - 2) in x^2 to get the vertex form y = (x - 2)^2, whose minimum is at x = 2 — 2 units right of the original, as required.",
        },
        {
          stepNumber: 3,
          description: "Expand the bracket.",
          workingLatex: "(x - 2)^2 = x^2 - 4x + 4",
          explanation:
            "Use (x - 2)^2 = x^2 - 2 \\cdot 2 \\cdot x + 2^2 = x^2 - 4x + 4.",
        },
        {
          stepNumber: 4,
          description: "State the answer and check the vertex.",
          workingLatex: "y = x^2 - 4x + 4; \\quad x = 2: \\; 4 - 8 + 4 = 0 \\;\\checkmark",
          explanation:
            "The expanded equation is y = x^2 - 4x + 4. At x = 2 it gives y = 0, the moved vertex, confirming the 2-unit rightward translation.",
          mafs: `<Mafs viewBox={{ x: [-4, 6], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x - 2)*(x - 2)} domain={[-1, 5]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="w" attachDistance={16}>(0, 0)</Text>
  <Point x={2} y={0} color="var(--mafs-fg-green)" />
  <Text x={2} y={0} attach="e" attachDistance={16}>(2, 0)</Text>
  <Text x={-2.6} y={8} attach="e" color="var(--mafs-fg-orange)">y = x^2</Text>
  <Text x={4.6} y={8} attach="w" color="var(--mafs-fg-accent)">y = (x-2)^2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = x^2 - 4x + 4\\)",
      canonicalAnswer: "y=x^2-4x+4",
    },
  },
  {
    id: "ga31-021",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) is translated to give \\(y = f(x - 3) + 2\\). Describe fully the single transformation as a column vector.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "combined translation", "f(x+a)", "f(x)+a", "vector"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate the inside and outside changes.",
          workingLatex: "y = f(\\underbrace{x - 3}_{\\text{inside}}) + \\underbrace{2}_{\\text{outside}}",
          explanation:
            "There are two changes: (x - 3) inside f (horizontal) and + 2 outside f (vertical). Each is handled by its own rule, and together they make a single translation.",
        },
        {
          stepNumber: 2,
          description: "Deal with the inside part (x - 3).",
          workingLatex: "f(x - 3) \\Rightarrow \\text{right } 3 \\Rightarrow \\text{x-component } +3",
          explanation:
            "A minus inside means a shift to the RIGHT, so the horizontal component of the vector is +3.",
        },
        {
          stepNumber: 3,
          description: "Deal with the outside part + 2.",
          workingLatex: "+ 2 \\Rightarrow \\text{up } 2 \\Rightarrow \\text{y-component } +2",
          explanation:
            "Adding 2 outside raises the graph by 2, so the vertical component is +2.",
        },
        {
          stepNumber: 4,
          description: "Combine into one vector.",
          workingLatex: "\\text{translation by } \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}",
          explanation:
            "Putting the components together, the single transformation is a translation by the vector (3, 2): 3 right and 2 up.",
          mafs: `<Mafs viewBox={{ x: [-4, 7], y: [-1, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x - 3)*(x - 3) + 2} domain={[0, 6]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="w" attachDistance={14}>(0, 0)</Text>
  <Point x={3} y={2} color="var(--mafs-fg-green)" />
  <Text x={3} y={2} attach="e" attachDistance={14}>(3, 2)</Text>
  <Text x={-2.6} y={8} attach="e" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={5.6} y={9} attach="w" color="var(--mafs-fg-accent)">f(x-3)+2</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Translation by } \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}\\)",
      canonicalAnswer: "(3,2)",
    },
  },
  {
    id: "ga31-022",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The point \\((4,\\,-3)\\) lies on the graph of \\(y = f(x)\\). State the coordinates of the corresponding point on the graph of \\(y = f(x + 1) - 6\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "combined translation", "image point", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify both changes acting on the point.",
          workingLatex: "y = f(x + 1) - 6: \\; \\text{inside } +1, \\; \\text{outside } -6",
          explanation:
            "The +1 inside f shifts the graph LEFT by 1; the -6 outside shifts it DOWN by 6. The combined translation is by vector (-1, -6).",
        },
        {
          stepNumber: 2,
          description: "Write the mapping of a general point.",
          workingLatex: "(x,\\,y) \\to (x - 1,\\,y - 6)",
          explanation:
            "Left 1 reduces x by 1; down 6 reduces y by 6.",
        },
        {
          stepNumber: 3,
          description: "Apply it to (4, -3).",
          workingLatex: "(4,\\,-3) \\to (4 - 1,\\,-3 - 6) = (3,\\,-9)",
          explanation:
            "x: 4 - 1 = 3. y: -3 - 6 = -9. So the image point is (3, -9).",
        },
        {
          stepNumber: 4,
          description: "Check the image lies on the new graph.",
          workingLatex: "x = 3: \\; f(3 + 1) - 6 = f(4) - 6 = -3 - 6 = -9 \\;\\checkmark",
          explanation:
            "At x = 3 the new curve gives f(4) - 6 = -3 - 6 = -9, matching the y-coordinate, so (3, -9) is correct.",
          mafs: `<Mafs viewBox={{ x: [-1, 8], y: [-11, 4] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 4)*(x - 4) - 3} domain={[1.8, 6.2]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x - 3)*(x - 3) - 9} domain={[0.8, 5.2]} color="var(--mafs-fg-accent)" />
  <Point x={4} y={-3} color="var(--mafs-fg-blue)" />
  <Text x={4} y={-3} attach="e" attachDistance={14}>(4, -3)</Text>
  <Point x={3} y={-9} color="var(--mafs-fg-green)" />
  <Text x={3} y={-9} attach="s" attachDistance={14}>(3, -9)</Text>
  <Text x={6} y={2} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={0} y={-7} attach="e" color="var(--mafs-fg-accent)">f(x+1)-6</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,-9)\\)",
      canonicalAnswer: "(3,-9)",
    },
  },
  {
    id: "ga31-023",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) has a minimum point at \\((-2,\\,1)\\). State the coordinates of the minimum or maximum point on the graph of \\(y = f(x + 5)\\), and state which it is.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "horizontal translation", "f(x+a)", "turning point", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the transformation.",
          workingLatex: "y = f(x + 5) \\quad (\\text{inside } +5 \\Rightarrow \\text{LEFT } 5)",
          explanation:
            "The +5 inside f translates the graph 5 units to the LEFT (the counterintuitive inside rule), vector (-5, 0). A pure horizontal shift does not flip the curve, so a minimum stays a minimum.",
        },
        {
          stepNumber: 2,
          description: "Map a general point under a left-5 shift.",
          workingLatex: "(x,\\,y) \\to (x - 5,\\,y)",
          explanation:
            "Left 5 reduces the x-coordinate by 5 and leaves y unchanged.",
        },
        {
          stepNumber: 3,
          description: "Apply this to the minimum (-2, 1).",
          workingLatex: "(-2,\\,1) \\to (-2 - 5,\\,1) = (-7,\\,1)",
          explanation:
            "x: -2 - 5 = -7, keep y = 1. The turning point moves to (-7, 1).",
        },
        {
          stepNumber: 4,
          description: "State the nature of the turning point.",
          workingLatex: "\\text{still a minimum at } (-7,\\,1)",
          explanation:
            "A horizontal translation does not turn the curve over, so the point is still a minimum, now located at (-7, 1).",
          mafs: `<Mafs viewBox={{ x: [-11, 3], y: [-1, 11] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x + 2)*(x + 2) + 1} domain={[-5, 1]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x + 7)*(x + 7) + 1} domain={[-10, -4]} color="var(--mafs-fg-accent)" />
  <Point x={-2} y={1} color="var(--mafs-fg-blue)" />
  <Text x={-2} y={1} attach="e" attachDistance={14}>(-2, 1) min</Text>
  <Point x={-7} y={1} color="var(--mafs-fg-green)" />
  <Text x={-7} y={1} attach="w" attachDistance={14}>(-7, 1) min</Text>
  <Text x={1} y={8} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={-7} y={9} attach="e" color="var(--mafs-fg-accent)">f(x+5)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((-7,\\,1),\\ \\text{a minimum}\\)",
      canonicalAnswer: "(-7,1)",
    },
  },
  {
    id: "ga31-024",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) has a maximum at \\((3,\\,4)\\). The graph is reflected in the \\(x\\)-axis and then translated by the vector \\(\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}\\). State the coordinates of the turning point of the resulting graph and whether it is a maximum or a minimum.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "-f(x)", "vertical translation", "turning point", "combined"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the reflection in the x-axis to the maximum point.",
          workingLatex: "y = -f(x): \\; (3,\\,4) \\to (3,\\,-4)",
          explanation:
            "Reflection in the x-axis sends (x, y) to (x, -y), so the maximum (3, 4) maps to (3, -4).",
        },
        {
          stepNumber: 2,
          description: "Note the change in the nature of the turning point.",
          workingLatex: "\\text{max} \\to \\text{min}",
          explanation:
            "Flipping vertically turns the highest point into the lowest, so after the reflection the point is a MINIMUM.",
        },
        {
          stepNumber: 3,
          description: "Now translate by (0, 1): up 1.",
          workingLatex: "(3,\\,-4) \\to (3,\\,-4 + 1) = (3,\\,-3)",
          explanation:
            "The vector (0, 1) raises every point by 1, so x stays 3 and y goes from -4 to -3.",
        },
        {
          stepNumber: 4,
          description: "A vertical translation does not change the nature.",
          workingLatex: "\\text{still a minimum}",
          explanation:
            "Sliding up does not flip the curve, so the point remains a minimum.",
        },
        {
          stepNumber: 5,
          description: "State the final turning point.",
          workingLatex: "(3,\\,-3) \\; \\text{(minimum)}",
          explanation:
            "After reflecting then translating up 1, the turning point is at (3, -3) and it is a minimum.",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-6, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => -(x - 3)*(x - 3) + 4} domain={[0.2, 5.8]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x - 3)*(x - 3) - 3} domain={[0.2, 5.8]} color="var(--mafs-fg-accent)" />
  <Point x={3} y={4} color="var(--mafs-fg-blue)" />
  <Text x={3} y={4} attach="n" attachDistance={12}>(3, 4) max</Text>
  <Point x={3} y={-3} color="var(--mafs-fg-green)" />
  <Text x={3} y={-3} attach="s" attachDistance={12}>(3, -3) min</Text>
  <Text x={6} y={3} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={6} y={-2} attach="w" color="var(--mafs-fg-accent)">-f(x)+1</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,-3),\\ \\text{a minimum}\\)",
      canonicalAnswer: "(3,-3)",
    },
  },
  {
    id: "ga31-025",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) is the same as the graph of \\(y = g(x)\\) after \\(g\\) has been translated by the vector \\(\\begin{pmatrix} -2 \\\\ 0 \\end{pmatrix}\\). Express \\(f(x)\\) in terms of \\(g\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "horizontal translation", "f(x+a)", "function notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the vector: a horizontal shift only.",
          workingLatex: "\\begin{pmatrix} -2 \\\\ 0 \\end{pmatrix} \\Rightarrow \\text{move } 2 \\text{ left}",
          explanation:
            "The y-component is 0, so this is a purely horizontal translation of 2 units to the LEFT (negative x-direction).",
        },
        {
          stepNumber: 2,
          description: "Recall how a horizontal shift appears inside the function.",
          workingLatex: "\\text{left } a \\Rightarrow y = g(x + a)",
          explanation:
            "Moving a graph LEFT by a is achieved by adding a inside the function (the inside sign is reversed). Here a = 2.",
        },
        {
          stepNumber: 3,
          description: "Write f in terms of g.",
          workingLatex: "f(x) = g(x + 2)",
          explanation:
            "Replacing x by (x + 2) inside g shifts its graph 2 units left, which is exactly f. So f(x) = g(x + 2).",
        },
        {
          stepNumber: 4,
          description: "Sanity-check a point.",
          workingLatex: "x = -2: \\; f(-2) = g(0)",
          explanation:
            "f at x = -2 equals g at 0 — the feature of g at x = 0 now appears 2 units to the left at x = -2 on f, confirming the leftward shift.",
          mafs: `<Mafs viewBox={{ x: [-6, 4], y: [-1, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x + 2)*(x + 2)} domain={[-5, 1]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="e" attachDistance={14}>g: (0, 0)</Text>
  <Point x={-2} y={0} color="var(--mafs-fg-green)" />
  <Text x={-2} y={0} attach="w" attachDistance={14}>f: (-2, 0)</Text>
  <Text x={2.6} y={8} attach="w" color="var(--mafs-fg-orange)">y = g(x)</Text>
  <Text x={-2} y={8} attach="e" color="var(--mafs-fg-accent)">y = g(x+2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(f(x) = g(x + 2)\\)",
      canonicalAnswer: "g(x+2)",
    },
  },
  {
    id: "ga31-026",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The curve \\(y = x^2 - 6x + 5\\) is reflected in the \\(y\\)-axis. Write the equation of the new curve in the form \\(y = x^2 + bx + c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "f(-x)", "y-axis", "expanding"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the reflection in the y-axis.",
          workingLatex: "\\text{reflect in } y\\text{-axis} \\Rightarrow y = f(-x)",
          explanation:
            "Reflection in the y-axis replaces every x with -x inside the function.",
        },
        {
          stepNumber: 2,
          description: "Substitute -x for x.",
          workingLatex: "y = (-x)^2 - 6(-x) + 5",
          explanation:
            "Replace each x by (-x), keeping the brackets so signs and squares are correct.",
        },
        {
          stepNumber: 3,
          description: "Simplify each term.",
          workingLatex: "(-x)^2 = x^2, \\quad -6(-x) = +6x",
          explanation:
            "Squaring removes the sign: (-x)^2 = x^2. The middle term -6 \\cdot (-x) becomes +6x. The constant +5 is unchanged.",
        },
        {
          stepNumber: 4,
          description: "Write the new equation.",
          workingLatex: "y = x^2 + 6x + 5",
          explanation:
            "So the reflected curve is y = x^2 + 6x + 5 (b = 6, c = 5).",
        },
        {
          stepNumber: 5,
          description: "Check using a root.",
          workingLatex: "\\text{root } x = 1 \\to x = -1: \\; 1 - 6 + 5 = 0 \\;\\checkmark",
          explanation:
            "The original has a root at x = 1; reflected in the y-axis it should appear at x = -1. Substituting x = -1 into x^2 + 6x + 5 gives 1 - 6 + 5 = 0. ✓",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-5, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x - 6*x + 5} domain={[0.2, 5.8]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => x*x + 6*x + 5} domain={[-5.8, -0.2]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Text x={1} y={0} attach="ne" attachDistance={12}>(1, 0)</Text>
  <Point x={-1} y={0} color="var(--mafs-fg-green)" />
  <Text x={-1} y={0} attach="nw" attachDistance={12}>(-1, 0)</Text>
  <Text x={4} y={4} attach="w" color="var(--mafs-fg-orange)">x^2-6x+5</Text>
  <Text x={-4} y={4} attach="e" color="var(--mafs-fg-accent)">x^2+6x+5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(y = x^2 + 6x + 5\\)",
      canonicalAnswer: "y=x^2+6x+5",
    },
  },
  {
    id: "ga31-027",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = f(x)\\) is transformed to give the graph of \\(y = -f(x) + 4\\). The original graph passes through \\((1,\\,3)\\). Find the coordinates of the corresponding point on the new graph.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "-f(x)", "vertical translation", "image point", "combined"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Break the transformation into its two parts.",
          workingLatex: "y = -f(x) + 4: \\; \\text{reflect in } x\\text{-axis, then up } 4",
          explanation:
            "The -f(x) reflects the graph in the x-axis; the +4 then raises it by 4. Apply them in that order to the point.",
        },
        {
          stepNumber: 2,
          description: "Reflect the point (1, 3) in the x-axis.",
          workingLatex: "(1,\\,3) \\to (1,\\,-3)",
          explanation:
            "Reflection in the x-axis negates y: (1, 3) maps to (1, -3). x is unchanged.",
        },
        {
          stepNumber: 3,
          description: "Translate the reflected point up 4.",
          workingLatex: "(1,\\,-3) \\to (1,\\,-3 + 4) = (1,\\,1)",
          explanation:
            "Adding 4 to the y-coordinate: -3 + 4 = 1, giving (1, 1).",
        },
        {
          stepNumber: 4,
          description: "Confirm directly from the new equation.",
          workingLatex: "x = 1: \\; -f(1) + 4 = -3 + 4 = 1 \\;\\checkmark",
          explanation:
            "Substituting x = 1 into -f(x) + 4 uses f(1) = 3 to give -3 + 4 = 1, matching the y-coordinate. So the image point is (1, 1).",
          mafs: `<Mafs viewBox={{ x: [-3, 5], y: [-5, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 1)*(x - 1) + 3} domain={[-1, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => -(x - 1)*(x - 1) + 1} domain={[-1, 3]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={3} color="var(--mafs-fg-blue)" />
  <Text x={1} y={3} attach="e" attachDistance={14}>(1, 3)</Text>
  <Point x={1} y={1} color="var(--mafs-fg-green)" />
  <Text x={1} y={1} attach="e" attachDistance={14}>(1, 1)</Text>
  <Text x={3} y={6} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={3} y={-3} attach="w" color="var(--mafs-fg-accent)">-f(x)+4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((1,\\,1)\\)",
      canonicalAnswer: "(1,1)",
    },
  },
  {
    id: "ga31-028",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The diagram of \\(y = f(x)\\) has \\(x\\)-intercepts at \\((-1,\\,0)\\) and \\((5,\\,0)\\). State the \\(x\\)-intercepts of the graph of \\(y = f(x - 2)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "horizontal translation", "f(x+a)", "intercept", "set"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the transformation.",
          workingLatex: "y = f(x - 2) \\quad (\\text{inside } -2 \\Rightarrow \\text{RIGHT } 2)",
          explanation:
            "The -2 inside f shifts the whole graph 2 units to the RIGHT. The x-axis crossings are points on the graph, so they move the same way.",
        },
        {
          stepNumber: 2,
          description: "Map each intercept 2 units right.",
          workingLatex: "(x,\\,0) \\to (x + 2,\\,0)",
          explanation:
            "A rightward shift adds 2 to the x-coordinate; the intercepts stay on the x-axis (y = 0).",
        },
        {
          stepNumber: 3,
          description: "Apply to both given intercepts.",
          workingLatex: "(-1,\\,0) \\to (1,\\,0), \\qquad (5,\\,0) \\to (7,\\,0)",
          explanation:
            "-1 + 2 = 1 and 5 + 2 = 7, so the new x-intercepts are (1, 0) and (7, 0).",
        },
        {
          stepNumber: 4,
          description: "Check with the function values.",
          workingLatex: "x = 1: f(1 - 2) = f(-1) = 0; \\quad x = 7: f(7 - 2) = f(5) = 0 \\;\\checkmark",
          explanation:
            "At x = 1 and x = 7 the new graph evaluates to f(-1) = 0 and f(5) = 0, the original roots, confirming the intercepts.",
          mafs: `<Mafs viewBox={{ x: [-3, 9], y: [-10, 6] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x + 1)*(x - 5)} domain={[-1.6, 5.6]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x - 1)*(x - 7)} domain={[0.4, 7.6]} color="var(--mafs-fg-accent)" />
  <Point x={-1} y={0} color="var(--mafs-fg-blue)" />
  <Text x={-1} y={0} attach="nw" attachDistance={12}>(-1, 0)</Text>
  <Point x={5} y={0} color="var(--mafs-fg-blue)" />
  <Point x={1} y={0} color="var(--mafs-fg-green)" />
  <Text x={1} y={0} attach="n" attachDistance={12}>(1, 0)</Text>
  <Point x={7} y={0} color="var(--mafs-fg-green)" />
  <Text x={7} y={0} attach="ne" attachDistance={12}>(7, 0)</Text>
  <Text x={-2} y={3} attach="e" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={8} y={3} attach="w" color="var(--mafs-fg-accent)">f(x-2)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\((1,\\,0) \\text{ and } (7,\\,0)\\)",
      canonicalAnswer: "{1,7}",
    },
  },
  {
    id: "ga31-029",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = g(x)\\) is obtained from the graph of \\(y = x^2\\) by the equation \\(y = (x - 3)^2 + 4\\). Describe fully the single transformation that maps \\(y = x^2\\) onto \\(y = g(x)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "combined translation", "f(x+a)", "f(x)+a", "vector", "completed square"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the completed-square form as f(x - 3) + 4.",
          workingLatex: "y = (x - 3)^2 + 4 = f(x - 3) + 4, \\quad f(x) = x^2",
          explanation:
            "Writing f(x) = x^2, the equation (x - 3)^2 + 4 is exactly f(x - 3) + 4: an inside change (x - 3) and an outside change + 4.",
        },
        {
          stepNumber: 2,
          description: "Interpret the inside part (x - 3).",
          workingLatex: "f(x - 3) \\Rightarrow \\text{right } 3 \\Rightarrow x\\text{-component } +3",
          explanation:
            "A minus inside shifts the graph RIGHT, so the horizontal component is +3.",
        },
        {
          stepNumber: 3,
          description: "Interpret the outside part + 4.",
          workingLatex: "+ 4 \\Rightarrow \\text{up } 4 \\Rightarrow y\\text{-component } +4",
          explanation:
            "Adding 4 outside lifts the graph by 4, so the vertical component is +4.",
        },
        {
          stepNumber: 4,
          description: "Combine and check via the vertex.",
          workingLatex: "\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}; \\quad (0,0) \\to (3,\\,4) \\;\\checkmark",
          explanation:
            "The single transformation is a translation by (3, 4). Check: the vertex of y = x^2 at (0, 0) maps to the vertex of (x - 3)^2 + 4 at (3, 4), confirming 3 right and 4 up.",
          mafs: `<Mafs viewBox={{ x: [-4, 8], y: [-1, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[-3, 3]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x - 3)*(x - 3) + 4} domain={[0.4, 5.6]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Text x={0} y={0} attach="w" attachDistance={14}>(0, 0)</Text>
  <Point x={3} y={4} color="var(--mafs-fg-green)" />
  <Text x={3} y={4} attach="e" attachDistance={14}>(3, 4)</Text>
  <Text x={-2.6} y={9} attach="e" color="var(--mafs-fg-orange)">y = x^2</Text>
  <Text x={5.6} y={10} attach="w" color="var(--mafs-fg-accent)">(x-3)^2+4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Translation by } \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\; (3 \\text{ right, } 4 \\text{ up})\\)",
      canonicalAnswer: "(3,4)",
    },
  },
  {
    id: "ga31-030",
    topicRef: "ga31",
    topicTitle: "Graph transformations: translations and reflections",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The point \\(P\\) lies on the graph of \\(y = f(x)\\). After the graph is transformed to \\(y = f(-x) + 3\\), the image of \\(P\\) is the point \\((-2,\\,10)\\). Find the coordinates of the original point \\(P\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["graph transformations", "reflection", "f(-x)", "vertical translation", "reverse", "image point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the forward mapping P -> image.",
          workingLatex: "y = f(-x) + 3: \\; (x,\\,y) \\to (-x,\\,y + 3)",
          explanation:
            "The inside minus reflects in the y-axis (x -> -x); the + 3 outside raises y by 3. So a point (x, y) on the original maps to (-x, y + 3).",
        },
        {
          stepNumber: 2,
          description: "We are given the image; reverse the mapping.",
          workingLatex: "(-x,\\,y + 3) = (-2,\\,10)",
          explanation:
            "Set the image of P equal to the given point and solve for the original coordinates (x, y).",
        },
        {
          stepNumber: 3,
          description: "Solve the x-equation.",
          workingLatex: "-x = -2 \\Rightarrow x = 2",
          explanation:
            "The reflected x-coordinate is -2, so -x = -2 gives x = 2 for the original point.",
        },
        {
          stepNumber: 4,
          description: "Solve the y-equation.",
          workingLatex: "y + 3 = 10 \\Rightarrow y = 7",
          explanation:
            "The raised y-coordinate is 10, so y + 3 = 10 gives y = 7 for the original point.",
        },
        {
          stepNumber: 5,
          description: "State P and check forwards.",
          workingLatex: "P = (2,\\,7); \\quad (2,\\,7) \\to (-2,\\,7 + 3) = (-2,\\,10) \\;\\checkmark",
          explanation:
            "So P = (2, 7). Checking forwards: reflecting (2, 7) in the y-axis gives (-2, 7), then up 3 gives (-2, 10), the stated image.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [4, 16] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => (x - 2)*(x - 2) + 7} domain={[-0.2, 4.2]} color="var(--mafs-fg-orange)" />
  <Plot.OfX y={(x) => (x + 2)*(x + 2) + 10} domain={[-4.2, 0.2]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={7} color="var(--mafs-fg-blue)" />
  <Text x={2} y={7} attach="e" attachDistance={14}>P (2, 7)</Text>
  <Point x={-2} y={10} color="var(--mafs-fg-green)" />
  <Text x={-2} y={10} attach="w" attachDistance={14}>(-2, 10)</Text>
  <Text x={4} y={9} attach="w" color="var(--mafs-fg-orange)">y = f(x)</Text>
  <Text x={-4} y={13} attach="e" color="var(--mafs-fg-accent)">f(-x)+3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(P = (2,\\,7)\\)",
      canonicalAnswer: "(2,7)",
    },
  },
];
