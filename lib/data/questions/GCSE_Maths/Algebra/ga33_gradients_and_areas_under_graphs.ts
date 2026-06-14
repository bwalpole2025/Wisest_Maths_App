/**
 * Topic: Gradients and areas under graphs
 * Ref: ga33  (DfE A15)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: estimating the GRADIENT of a curve and the AREA under a curve using
 *   non-calculus methods, and interpreting both in context. Key ideas used
 *   throughout:
 *   - The gradient of a CHORD between two points (x1,y1),(x2,y2) on a curve is
 *     (y2 - y1)/(x2 - x1); it gives the AVERAGE rate of change over that interval.
 *   - The gradient of a TANGENT at a point estimates the INSTANTANEOUS rate of
 *     change there (e.g. the speed on a distance–time graph, the acceleration on
 *     a speed–time graph). A tangent is given by two points it passes through so
 *     the question is self-contained — no drawing required.
 *   - The AREA under a curve estimates an accumulated quantity (e.g. distance
 *     from a speed–time graph). It is estimated with ONE trapezium, or with
 *     several strips of equal width using the trapezium rule
 *     A ≈ (h/2)[ y0 + yn + 2(y1 + y2 + ... + y_{n-1}) ].
 *   - Over/under-estimate reasoning: straight chords lie ABOVE a curve that bends
 *     downward (concave, "frowns") so the trapezium rule OVER-estimates; they lie
 *     BELOW a curve that bends upward (convex, "smiles") so it UNDER-estimates.
 *   Clusters:
 *     (1) gradient of a chord (average rate);
 *     (2) gradient via a tangent at a point (two contact points given);
 *     (3) interpret a tangent gradient as a rate (speed / acceleration);
 *     (4) area by a single trapezium;
 *     (5) area by several strips / the trapezium rule;
 *     (6) interpret area as distance / accumulated quantity;
 *     (7) over / under-estimate reasoning from curvature.
 *   Solutions stress: subtract in a consistent order for gradients; a tangent
 *   touches at one point so its gradient is the rate THERE; the trapezium rule
 *   splits the region into trapezia; and WHY the estimate is an over- or
 *   under-estimate (which way the curve bends relative to the chords). NO
 *   calculus — these are estimation methods only.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga33-001 .. ga33-004  (4)   cleanest single-step estimates
 *   - Standard:   ga33-005 .. ga33-018  (14)
 *   - Challenge:  ga33-019 .. ga33-030  (12)
 * Id range: ga33-001 .. ga33-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules. Units are stated in prose, not inside
 *   the LaTeX.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga33-001",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Two points on a curve are \\(A(2,\\,3)\\) and \\(B(6,\\,15)\\). Find the gradient of the chord \\(AB\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "gradient of a chord", "average rate of change"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down the chord-gradient formula.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          explanation:
            "The chord joining two points has gradient equal to the change in y divided by the change in x. Subtract the coordinates in the same order on top and bottom.",
        },
        {
          stepNumber: 2,
          description: "Substitute A(2, 3) and B(6, 15).",
          workingLatex: "m = \\frac{15 - 3}{6 - 2} = \\frac{12}{4} = 3",
          explanation:
            "Top: 15 - 3 = 12. Bottom: 6 - 2 = 4. So the gradient of the chord is 12/4 = 3.",
          mafs: `<Mafs viewBox={{ x: [0, 8], y: [0, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[2, 3]} point2={[6, 15]} color="var(--mafs-fg-accent)" />
  <Polyline points={[[2, 3], [6, 3], [6, 15]]} color="var(--mafs-fg-green)" style="dashed" />
  <Point x={2} y={3} color="orange" />
  <Point x={6} y={15} color="orange" />
  <Text x={2} y={3} attach="nw" color="orange">A(2, 3)</Text>
  <Text x={6} y={15} attach="sw" color="orange">B(6, 15)</Text>
  <Text x={6} y={9} attach="w" color="var(--mafs-fg-green)">rise 12</Text>
  <Text x={4} y={3} attach="s" color="var(--mafs-fg-green)">run 4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga33-002",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A tangent is drawn to a curve at the point \\(P\\). The tangent passes through \\((1,\\,2)\\) and \\((4,\\,11)\\). Use the tangent to estimate the gradient of the curve at \\(P\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "tangent", "gradient at a point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The gradient of the curve at P equals the gradient of the tangent there.",
          workingLatex: "m = \\frac{y_2 - y_1}{x_2 - x_1}",
          explanation:
            "A tangent touches the curve at P and runs in the same direction as the curve there, so its gradient estimates the gradient of the curve at P. Use the two given points on the tangent.",
        },
        {
          stepNumber: 2,
          description: "Substitute the two points on the tangent.",
          workingLatex: "m = \\frac{11 - 2}{4 - 1} = \\frac{9}{3} = 3",
          explanation:
            "Top: 11 - 2 = 9. Bottom: 4 - 1 = 3. The tangent's gradient is 9/3 = 3, so the curve's gradient at P is about 3.",
          mafs: `<Mafs viewBox={{ x: [0, 5], y: [0, 13] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[1, 2]} point2={[4, 11]} color="var(--mafs-fg-green)" />
  <Point x={1} y={2} color="orange" />
  <Point x={4} y={11} color="orange" />
  <Text x={1} y={2} attach="se" color="orange">(1, 2)</Text>
  <Text x={4} y={11} attach="w" color="orange">(4, 11)</Text>
  <Text x={2.5} y={6.5} attach="nw" color="var(--mafs-fg-green)">tangent at P, m = 3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga33-003",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The region under a curve, between \\(x = 0\\) and \\(x = 4\\), is estimated by a single trapezium with parallel sides of length \\(3\\) and \\(7\\) and width \\(4\\). Estimate the area.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "area under a curve", "single trapezium"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the area formula for a trapezium.",
          workingLatex: "A = \\frac{1}{2}(a + b)h",
          explanation:
            "A trapezium's area is half the sum of the two parallel sides times the perpendicular distance between them. Here the parallel sides are the two curve heights (3 and 7) and the width is h = 4.",
        },
        {
          stepNumber: 2,
          description: "Substitute a = 3, b = 7, h = 4.",
          workingLatex: "A = \\frac{1}{2}(3 + 7) \\cdot 4 = \\frac{1}{2} \\cdot 10 \\cdot 4 = 20",
          explanation:
            "Add the parallel sides: 3 + 7 = 10. Then 1/2 × 10 × 4 = 20. The estimated area is 20 square units.",
          mafs: `<Mafs viewBox={{ x: [0, 5], y: [0, 9] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 3], [4, 7], [4, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Line.Segment point1={[0, 3]} point2={[4, 7]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={3} color="orange" />
  <Point x={4} y={7} color="orange" />
  <Text x={0} y={3} attach="e" color="orange">3</Text>
  <Text x={4} y={7} attach="w" color="orange">7</Text>
  <Text x={2} y={2} attach="s" color="var(--mafs-fg-blue)">A = 20</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(20\\)",
      canonicalAnswer: "20",
    },
  },
  {
    id: "ga33-004",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "On a speed–time graph, a tangent drawn at \\(t = 5\\) seconds passes through \\((2,\\,4)\\) and \\((8,\\,22)\\), where speed is in metres per second. Estimate the acceleration at \\(t = 5\\) seconds.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "tangent", "acceleration", "rate of change"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Acceleration is the gradient of the speed–time graph, estimated by the tangent.",
          workingLatex: "a = \\frac{\\text{change in speed}}{\\text{change in time}} = \\frac{22 - 4}{8 - 2}",
          explanation:
            "On a speed–time graph the gradient is the rate of change of speed, which is the acceleration. The tangent at t = 5 gives the instantaneous gradient there; use its two points.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the gradient.",
          workingLatex: "a = \\frac{18}{6} = 3",
          explanation:
            "Top: 22 - 4 = 18 m/s. Bottom: 8 - 2 = 6 s. So a = 18/6 = 3 m/s². The acceleration at t = 5 s is about 3 metres per second squared.",
          mafs: `<Mafs viewBox={{ x: [0, 9], y: [0, 24] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[2, 4]} point2={[8, 22]} color="var(--mafs-fg-green)" />
  <Point x={5} y={13} color="orange" />
  <Point x={2} y={4} color="var(--mafs-fg-green)" />
  <Point x={8} y={22} color="var(--mafs-fg-green)" />
  <Text x={5} y={13} attach="se" color="orange">t = 5</Text>
  <Text x={2} y={4} attach="se" color="var(--mafs-fg-green)">(2, 4)</Text>
  <Text x={8} y={22} attach="w" color="var(--mafs-fg-green)">(8, 22)</Text>
  <Text x={4.5} y={2} attach="n" color="var(--mafs-fg-fg)">time (s)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(3\\)",
      canonicalAnswer: "3",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga33-005",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A curve has equation \\(y = x^2\\). Find the gradient of the chord joining the points where \\(x = 1\\) and \\(x = 4\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "gradient of a chord", "average rate of change"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the y-coordinate at each x using y = x².",
          workingLatex: "x = 1:\\; y = 1^2 = 1; \\qquad x = 4:\\; y = 4^2 = 16",
          explanation:
            "The chord joins two points ON the curve, so first work out their heights from the equation. At x = 1, y = 1; at x = 4, y = 16.",
        },
        {
          stepNumber: 2,
          description: "Write the two points.",
          workingLatex: "(1,\\,1) \\quad \\text{and} \\quad (4,\\,16)",
          explanation:
            "These are the endpoints of the chord.",
        },
        {
          stepNumber: 3,
          description: "Apply the chord-gradient formula.",
          workingLatex: "m = \\frac{16 - 1}{4 - 1} = \\frac{15}{3} = 5",
          explanation:
            "Change in y is 16 - 1 = 15; change in x is 4 - 1 = 3. The chord gradient is 15/3 = 5. This is the average rate of change of the curve between x = 1 and x = 4.",
          mafs: `<Mafs viewBox={{ x: [0, 5], y: [0, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[0, 4.2]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[1, 1]} point2={[4, 16]} color="var(--mafs-fg-green)" />
  <Point x={1} y={1} color="var(--mafs-fg-orange)" />
  <Point x={4} y={16} color="var(--mafs-fg-orange)" />
  <Text x={1} y={1} attach="se" color="var(--mafs-fg-orange)">(1, 1)</Text>
  <Text x={4} y={16} attach="w" color="var(--mafs-fg-orange)">(4, 16)</Text>
  <Text x={2.2} y={9} attach="nw" color="var(--mafs-fg-green)">chord, m = 5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga33-006",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A distance–time graph passes through \\(A(2,\\,10)\\) and \\(B(7,\\,40)\\), where distance is in metres and time in seconds. Find the gradient of the chord \\(AB\\) and state what it represents.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "gradient of a chord", "average speed", "interpret rate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the chord-gradient formula.",
          workingLatex: "m = \\frac{40 - 10}{7 - 2}",
          explanation:
            "On a distance–time graph the gradient is distance ÷ time, which is speed. The chord gradient gives the AVERAGE speed between A and B.",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "m = \\frac{30}{5} = 6",
          explanation:
            "Top: 40 - 10 = 30 m. Bottom: 7 - 2 = 5 s. So m = 30/5 = 6.",
        },
        {
          stepNumber: 3,
          description: "Interpret the gradient in context.",
          workingLatex: "m = 6 \\text{ m/s} = \\text{average speed between } A \\text{ and } B",
          explanation:
            "Because the graph is distance against time, the gradient of the chord is the average speed over that interval: 6 metres per second.",
          mafs: `<Mafs viewBox={{ x: [0, 8], y: [0, 45] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[2, 10]} point2={[7, 40]} color="var(--mafs-fg-green)" />
  <Polyline points={[[2, 10], [7, 10], [7, 40]]} color="var(--mafs-fg-blue)" style="dashed" />
  <Point x={2} y={10} color="var(--mafs-fg-orange)" />
  <Point x={7} y={40} color="var(--mafs-fg-orange)" />
  <Text x={2} y={10} attach="nw" color="var(--mafs-fg-orange)">A(2, 10)</Text>
  <Text x={7} y={40} attach="sw" color="var(--mafs-fg-orange)">B(7, 40)</Text>
  <Text x={4.5} y={10} attach="s" color="var(--mafs-fg-fg)">time (s)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga33-007",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A tangent to a curve at the point \\(x = 3\\) passes through \\((1,\\,9)\\) and \\((5,\\,1)\\). Estimate the gradient of the curve at \\(x = 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "tangent", "gradient at a point", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State why the tangent gives the gradient at the point.",
          workingLatex: "m_{\\text{curve at } x=3} \\approx m_{\\text{tangent}}",
          explanation:
            "A tangent touches the curve at exactly one point and matches its direction there, so the gradient of the tangent estimates the instantaneous gradient of the curve at x = 3.",
        },
        {
          stepNumber: 2,
          description: "Apply the gradient formula to the tangent's two points.",
          workingLatex: "m = \\frac{1 - 9}{5 - 1} = \\frac{-8}{4}",
          explanation:
            "Subtract consistently: top is 1 - 9 = -8, bottom is 5 - 1 = 4. A falling tangent gives a negative gradient — keep the sign.",
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "m = -2",
          explanation:
            "-8 ÷ 4 = -2. The curve is decreasing at x = 3 with gradient about -2.",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [0, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[1, 9]} point2={[5, 1]} color="var(--mafs-fg-green)" />
  <Point x={3} y={5} color="var(--mafs-fg-orange)" />
  <Point x={1} y={9} color="var(--mafs-fg-green)" />
  <Point x={5} y={1} color="var(--mafs-fg-green)" />
  <Text x={3} y={5} attach="ne" color="var(--mafs-fg-orange)">x = 3</Text>
  <Text x={1} y={9} attach="e" color="var(--mafs-fg-green)">(1, 9)</Text>
  <Text x={5} y={1} attach="n" color="var(--mafs-fg-green)">(5, 1)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(-2\\)",
      canonicalAnswer: "-2",
    },
  },
  {
    id: "ga33-008",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The region under a curve between \\(x = 0\\) and \\(x = 6\\) is split into two strips of equal width. The curve heights at \\(x = 0,\\,3,\\,6\\) are \\(2,\\,5,\\,8\\). Use two trapezia to estimate the area.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "area under a curve", "trapezium rule", "strips"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the strip width.",
          workingLatex: "h = \\frac{6 - 0}{2} = 3",
          explanation:
            "The interval from 0 to 6 is split into 2 equal strips, so each strip has width h = 6/2 = 3. The heights are given at the strip edges x = 0, 3, 6.",
        },
        {
          stepNumber: 2,
          description: "Area of the first trapezium (heights 2 and 5).",
          workingLatex: "A_1 = \\frac{1}{2}(2 + 5) \\cdot 3 = \\frac{1}{2} \\cdot 7 \\cdot 3 = 10.5",
          explanation:
            "Each strip is a trapezium with the two curve heights as its parallel sides. First strip: 1/2 × (2 + 5) × 3 = 10.5.",
        },
        {
          stepNumber: 3,
          description: "Area of the second trapezium (heights 5 and 8).",
          workingLatex: "A_2 = \\frac{1}{2}(5 + 8) \\cdot 3 = \\frac{1}{2} \\cdot 13 \\cdot 3 = 19.5",
          explanation:
            "Second strip: 1/2 × (5 + 8) × 3 = 19.5.",
        },
        {
          stepNumber: 4,
          description: "Add the two areas.",
          workingLatex: "A = 10.5 + 19.5 = 30",
          explanation:
            "Total estimated area = 10.5 + 19.5 = 30 square units.",
          mafs: `<Mafs viewBox={{ x: [0, 7], y: [0, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 2], [3, 5], [3, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polygon points={[[3, 0], [3, 5], [6, 8], [6, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polyline points={[[0, 2], [3, 5], [6, 8]]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={2} color="var(--mafs-fg-orange)" />
  <Point x={3} y={5} color="var(--mafs-fg-orange)" />
  <Point x={6} y={8} color="var(--mafs-fg-orange)" />
  <Text x={0} y={2} attach="e" color="var(--mafs-fg-orange)">2</Text>
  <Text x={3} y={5} attach="nw" color="var(--mafs-fg-orange)">5</Text>
  <Text x={6} y={8} attach="w" color="var(--mafs-fg-orange)">8</Text>
  <Text x={3} y={1.5} attach="s" color="var(--mafs-fg-blue)">A = 30</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(30\\)",
      canonicalAnswer: "30",
    },
  },
  {
    id: "ga33-009",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A curve has equation \\(y = x^2 + 1\\). A tangent to the curve at \\(x = 2\\) passes through \\((2,\\,5)\\) and \\((3,\\,9)\\). Estimate the gradient of the curve at \\(x = 2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "tangent", "gradient at a point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The tangent gradient estimates the curve's gradient at x = 2.",
          workingLatex: "m \\approx m_{\\text{tangent through } (2,5),(3,9)}",
          explanation:
            "The point (2, 5) lies on the curve since 2² + 1 = 5, and the tangent touches there. Its gradient gives the rate of change of the curve at x = 2.",
        },
        {
          stepNumber: 2,
          description: "Apply the gradient formula.",
          workingLatex: "m = \\frac{9 - 5}{3 - 2} = \\frac{4}{1} = 4",
          explanation:
            "Top: 9 - 5 = 4. Bottom: 3 - 2 = 1. So the estimated gradient at x = 2 is 4.",
          mafs: `<Mafs viewBox={{ x: [0, 4.5], y: [0, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x + 1} domain={[0, 3.2]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[1, 1]} point2={[3.2, 9.8]} color="var(--mafs-fg-green)" />
  <Point x={2} y={5} color="var(--mafs-fg-orange)" />
  <Point x={3} y={9} color="var(--mafs-fg-green)" />
  <Text x={2} y={5} attach="se" color="var(--mafs-fg-orange)">(2, 5)</Text>
  <Text x={3} y={9} attach="w" color="var(--mafs-fg-green)">(3, 9)</Text>
  <Text x={0.6} y={3} attach="ne" color="var(--mafs-fg-green)">tangent, m = 4</Text>
</Mafs>`,
        },
        {
          stepNumber: 3,
          description: "Comment on the estimate.",
          workingLatex: "m \\approx 4",
          explanation:
            "Drawing-and-reading a tangent is an estimate, so an exact answer is not expected — here the tangent gives a gradient of about 4 at x = 2.",
        },
      ],
      finalAnswer: "\\(4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga33-010",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A speed–time graph (speed in m/s, time in s) has heights \\(0,\\,4,\\,6,\\,6\\) at times \\(t = 0,\\,2,\\,4,\\,6\\). Use the trapezium rule with three strips to estimate the distance travelled in the first 6 seconds.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "area as distance", "speed-time graph"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State why area gives distance, and find the strip width.",
          workingLatex: "h = \\frac{6 - 0}{3} = 2",
          explanation:
            "On a speed–time graph the area under the curve is the distance travelled (speed × time accumulated). Three equal strips over 0 to 6 give width h = 6/3 = 2.",
        },
        {
          stepNumber: 2,
          description: "Write the trapezium rule.",
          workingLatex: "A \\approx \\frac{h}{2}\\big[ y_0 + y_3 + 2(y_1 + y_2) \\big]",
          explanation:
            "The trapezium rule adds the first and last heights once and the interior heights twice, then multiplies by h/2. Here y0 = 0, y1 = 4, y2 = 6, y3 = 6.",
        },
        {
          stepNumber: 3,
          description: "Substitute the heights.",
          workingLatex: "A \\approx \\frac{2}{2}\\big[ 0 + 6 + 2(4 + 6) \\big] = 1 \\cdot [6 + 20]",
          explanation:
            "End heights: 0 + 6 = 6. Interior: 2 × (4 + 6) = 2 × 10 = 20. With h/2 = 1.",
        },
        {
          stepNumber: 4,
          description: "Evaluate.",
          workingLatex: "A \\approx 26",
          explanation:
            "6 + 20 = 26, times 1 = 26. The estimated distance travelled in the first 6 seconds is about 26 metres.",
          mafs: `<Mafs viewBox={{ x: [0, 7], y: [0, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 0], [2, 4], [4, 6], [6, 6], [6, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polyline points={[[0, 0], [2, 4], [4, 6], [6, 6]]} color="var(--mafs-fg-accent)" />
  <Point x={2} y={4} color="var(--mafs-fg-orange)" />
  <Point x={4} y={6} color="var(--mafs-fg-orange)" />
  <Point x={6} y={6} color="var(--mafs-fg-orange)" />
  <Text x={3} y={2} attach="n" color="var(--mafs-fg-blue)">distance = 26 m</Text>
  <Text x={3.5} y={0} attach="s" color="var(--mafs-fg-fg)">time (s)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(26\\)",
      canonicalAnswer: "26",
    },
  },
  {
    id: "ga33-011",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A curve passes through \\((1,\\,2)\\) and \\((1.5,\\,3.5)\\). Find the gradient of this chord, which estimates the gradient of the curve near \\(x = 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "gradient of a chord", "decimal coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the chord-gradient formula.",
          workingLatex: "m = \\frac{3.5 - 2}{1.5 - 1}",
          explanation:
            "A short chord between two nearby points on a curve estimates the gradient of the curve in that region. Subtract the coordinates consistently.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the differences.",
          workingLatex: "m = \\frac{1.5}{0.5}",
          explanation:
            "Top: 3.5 - 2 = 1.5. Bottom: 1.5 - 1 = 0.5.",
        },
        {
          stepNumber: 3,
          description: "Divide.",
          workingLatex: "m = \\frac{1.5}{0.5} = 3",
          explanation:
            "Dividing 1.5 by 0.5 (the same as 15 ÷ 5) gives 3. The estimated gradient near x = 1 is 3.",
          mafs: `<Mafs viewBox={{ x: [0, 2.5], y: [0, 4.5] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[1, 2]} point2={[1.5, 3.5]} color="var(--mafs-fg-green)" />
  <Polyline points={[[1, 2], [1.5, 2], [1.5, 3.5]]} color="var(--mafs-fg-blue)" style="dashed" />
  <Point x={1} y={2} color="var(--mafs-fg-orange)" />
  <Point x={1.5} y={3.5} color="var(--mafs-fg-orange)" />
  <Text x={1} y={2} attach="nw" color="var(--mafs-fg-orange)">(1, 2)</Text>
  <Text x={1.5} y={3.5} attach="w" color="var(--mafs-fg-orange)">(1.5, 3.5)</Text>
  <Text x={1.5} y={2.75} attach="w" color="var(--mafs-fg-blue)">1.5</Text>
  <Text x={1.25} y={2} attach="s" color="var(--mafs-fg-blue)">0.5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga33-012",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The region under a curve between \\(x = 1\\) and \\(x = 5\\) is estimated by one trapezium. The curve heights are \\(6\\) at \\(x = 1\\) and \\(2\\) at \\(x = 5\\). Estimate the area.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "area under a curve", "single trapezium"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the width of the trapezium.",
          workingLatex: "h = 5 - 1 = 4",
          explanation:
            "The horizontal width is the distance between the two x-values: 5 - 1 = 4.",
        },
        {
          stepNumber: 2,
          description: "Write the trapezium area formula.",
          workingLatex: "A = \\frac{1}{2}(a + b)h",
          explanation:
            "The parallel sides are the two curve heights a = 6 and b = 2; the width is h = 4.",
        },
        {
          stepNumber: 3,
          description: "Substitute and evaluate.",
          workingLatex: "A = \\frac{1}{2}(6 + 2) \\cdot 4 = \\frac{1}{2} \\cdot 8 \\cdot 4 = 16",
          explanation:
            "6 + 2 = 8, then 1/2 × 8 × 4 = 16. The estimated area is 16 square units.",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [0, 8] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[1, 0], [1, 6], [5, 2], [5, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Line.Segment point1={[1, 6]} point2={[5, 2]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={6} color="var(--mafs-fg-orange)" />
  <Point x={5} y={2} color="var(--mafs-fg-orange)" />
  <Text x={1} y={6} attach="e" color="var(--mafs-fg-orange)">6</Text>
  <Text x={5} y={2} attach="w" color="var(--mafs-fg-orange)">2</Text>
  <Text x={3} y={2} attach="s" color="var(--mafs-fg-blue)">A = 16</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(16\\)",
      canonicalAnswer: "16",
    },
  },
  {
    id: "ga33-013",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "On a speed–time graph (speed in m/s), the curve heights at \\(t = 0,\\,5,\\,10\\) seconds are \\(8,\\,20,\\,30\\). Use two trapezia to estimate the distance travelled in the first 10 seconds.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "area as distance", "speed-time graph"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the strip width and recall that area = distance.",
          workingLatex: "h = \\frac{10 - 0}{2} = 5",
          explanation:
            "Two equal strips over 0 to 10 give width h = 5. The area under a speed–time graph is the distance travelled.",
        },
        {
          stepNumber: 2,
          description: "First strip (heights 8 and 20).",
          workingLatex: "A_1 = \\frac{1}{2}(8 + 20) \\cdot 5 = \\frac{1}{2} \\cdot 28 \\cdot 5 = 70",
          explanation:
            "1/2 × (8 + 20) × 5 = 1/2 × 28 × 5 = 70.",
        },
        {
          stepNumber: 3,
          description: "Second strip (heights 20 and 30).",
          workingLatex: "A_2 = \\frac{1}{2}(20 + 30) \\cdot 5 = \\frac{1}{2} \\cdot 50 \\cdot 5 = 125",
          explanation:
            "1/2 × (20 + 30) × 5 = 1/2 × 50 × 5 = 125.",
        },
        {
          stepNumber: 4,
          description: "Add the strips.",
          workingLatex: "A = 70 + 125 = 195",
          explanation:
            "Total estimated distance = 70 + 125 = 195 metres.",
          mafs: `<Mafs viewBox={{ x: [0, 11], y: [0, 33] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 8], [5, 20], [5, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polygon points={[[5, 0], [5, 20], [10, 30], [10, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polyline points={[[0, 8], [5, 20], [10, 30]]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={8} color="var(--mafs-fg-orange)" />
  <Point x={5} y={20} color="var(--mafs-fg-orange)" />
  <Point x={10} y={30} color="var(--mafs-fg-orange)" />
  <Text x={0} y={8} attach="e" color="var(--mafs-fg-orange)">8</Text>
  <Text x={5} y={20} attach="nw" color="var(--mafs-fg-orange)">20</Text>
  <Text x={10} y={30} attach="w" color="var(--mafs-fg-orange)">30</Text>
  <Text x={5} y={5} attach="n" color="var(--mafs-fg-blue)">distance = 195 m</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(195\\)",
      canonicalAnswer: "195",
    },
  },
  {
    id: "ga33-014",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A curve has equation \\(y = x^2\\). Find the gradient of the chord from \\(x = 2\\) to \\(x = 2.1\\), giving your answer to 1 decimal place. (This chord estimates the gradient of the curve at \\(x = 2\\).)",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "gradient of a chord", "estimate gradient at a point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the y-values at the two x-values.",
          workingLatex: "x = 2:\\; y = 4; \\qquad x = 2.1:\\; y = 2.1^2 = 4.41",
          explanation:
            "From y = x²: at x = 2, y = 4; at x = 2.1, y = 2.1² = 4.41. A chord between two close points estimates the gradient at x = 2.",
        },
        {
          stepNumber: 2,
          description: "Apply the chord-gradient formula.",
          workingLatex: "m = \\frac{4.41 - 4}{2.1 - 2} = \\frac{0.41}{0.1}",
          explanation:
            "Top: 4.41 - 4 = 0.41. Bottom: 2.1 - 2 = 0.1.",
        },
        {
          stepNumber: 3,
          description: "Divide and round.",
          workingLatex: "m = 4.1",
          explanation:
            "0.41 ÷ 0.1 = 4.1. The estimated gradient at x = 2 is 4.1 (to 1 d.p.), close to the true value of 4 because the chord is short.",
          mafs: `<Mafs viewBox={{ x: [0, 3], y: [0, 7] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[0, 2.6]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[1.4, 0.76]} point2={[2.6, 6.52]} color="var(--mafs-fg-green)" />
  <Point x={2} y={4} color="var(--mafs-fg-orange)" />
  <Point x={2.1} y={4.41} color="var(--mafs-fg-orange)" />
  <Text x={2} y={4} attach="nw" color="var(--mafs-fg-orange)">(2, 4)</Text>
  <Text x={2.1} y={4.41} attach="se" color="var(--mafs-fg-orange)">(2.1, 4.41)</Text>
  <Text x={1.3} y={2} attach="ne" color="var(--mafs-fg-green)">short chord, m = 4.1</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(4.1\\)",
      canonicalAnswer: "4.1",
    },
  },
  {
    id: "ga33-015",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A curve bends upward throughout the interval (it is convex / \"smiles\"). A student uses the trapezium rule to estimate the area under it. State, with a reason, whether this gives an over-estimate or an under-estimate of the true area.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "over or under estimate", "reasoning"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Picture the straight chord against the curve.",
          workingLatex: "\\text{convex curve} \\Rightarrow \\text{chord lies ABOVE the curve}",
          explanation:
            "The trapezium rule replaces each arc of the curve with a straight chord. When the curve bends upward (convex, a 'smile'), the straight chord joining the strip ends sits ABOVE the curve.",
        },
        {
          stepNumber: 2,
          description: "Compare the trapezium area with the true area.",
          workingLatex: "\\text{trapezium area} > \\text{true area under the curve}",
          explanation:
            "Because each chord is above the curve, every trapezium covers slightly more region than the actual area under the arc, so the total exceeds the true area.",
        },
        {
          stepNumber: 3,
          description: "Conclude.",
          workingLatex: "\\Rightarrow \\text{over-estimate}",
          explanation:
            "For a curve that is convex throughout, the trapezium rule gives an OVER-estimate of the area under the curve.",
          mafs: `<Mafs viewBox={{ x: [0, 5], y: [0, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[1, 0], [1, 1], [4, 16], [4, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Plot.OfX y={(x) => x*x} domain={[1, 4]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[1, 1]} point2={[4, 16]} color="var(--mafs-fg-green)" />
  <Point x={1} y={1} color="var(--mafs-fg-orange)" />
  <Point x={4} y={16} color="var(--mafs-fg-orange)" />
  <Text x={2.6} y={11} attach="nw" color="var(--mafs-fg-green)">chord above curve</Text>
  <Text x={2.6} y={4} attach="n" color="var(--mafs-fg-accent)">convex curve</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Over-estimate}\\)",
      canonicalAnswer: "over-estimate",
    },
  },
  {
    id: "ga33-016",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A tangent drawn to a distance–time graph (distance in m, time in s) at \\(t = 4\\) seconds passes through \\((2,\\,5)\\) and \\((6,\\,25)\\). Estimate the speed at \\(t = 4\\) seconds.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "tangent", "speed", "rate of change"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Speed is the gradient of the distance–time graph at that instant.",
          workingLatex: "v = \\frac{\\text{change in distance}}{\\text{change in time}}",
          explanation:
            "On a distance–time graph the gradient is speed. The tangent at t = 4 gives the instantaneous gradient there, so its gradient is the speed at that moment.",
        },
        {
          stepNumber: 2,
          description: "Use the two tangent points.",
          workingLatex: "v = \\frac{25 - 5}{6 - 2} = \\frac{20}{4}",
          explanation:
            "Top: 25 - 5 = 20 m. Bottom: 6 - 2 = 4 s.",
        },
        {
          stepNumber: 3,
          description: "Evaluate.",
          workingLatex: "v = 5",
          explanation:
            "20 ÷ 4 = 5. The estimated speed at t = 4 s is 5 metres per second.",
          mafs: `<Mafs viewBox={{ x: [0, 7], y: [0, 28] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[2, 5]} point2={[6, 25]} color="var(--mafs-fg-green)" />
  <Point x={4} y={15} color="var(--mafs-fg-orange)" />
  <Point x={2} y={5} color="var(--mafs-fg-green)" />
  <Point x={6} y={25} color="var(--mafs-fg-green)" />
  <Text x={4} y={15} attach="se" color="var(--mafs-fg-orange)">t = 4</Text>
  <Text x={2} y={5} attach="se" color="var(--mafs-fg-green)">(2, 5)</Text>
  <Text x={6} y={25} attach="w" color="var(--mafs-fg-green)">(6, 25)</Text>
  <Text x={3.5} y={0} attach="s" color="var(--mafs-fg-fg)">time (s)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga33-017",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The heights of a curve at \\(x = 0,\\,1,\\,2,\\,3,\\,4\\) are \\(1,\\,3,\\,4,\\,4,\\,2\\). Use the trapezium rule with four strips of width \\(1\\) to estimate the area under the curve from \\(x = 0\\) to \\(x = 4\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "strips", "area under a curve"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the trapezium rule for four strips (h = 1).",
          workingLatex: "A \\approx \\frac{h}{2}\\big[ y_0 + y_4 + 2(y_1 + y_2 + y_3) \\big]",
          explanation:
            "The first and last heights are counted once; the three interior heights are counted twice. The strip width is h = 1.",
        },
        {
          stepNumber: 2,
          description: "Identify the heights.",
          workingLatex: "y_0 = 1,\\; y_1 = 3,\\; y_2 = 4,\\; y_3 = 4,\\; y_4 = 2",
          explanation:
            "Read the five heights in order from the table.",
        },
        {
          stepNumber: 3,
          description: "Substitute.",
          workingLatex: "A \\approx \\frac{1}{2}\\big[ 1 + 2 + 2(3 + 4 + 4) \\big] = \\frac{1}{2}\\big[ 3 + 2 \\cdot 11 \\big]",
          explanation:
            "End heights: 1 + 2 = 3. Interior sum: 3 + 4 + 4 = 11, doubled gives 22.",
        },
        {
          stepNumber: 4,
          description: "Evaluate.",
          workingLatex: "A \\approx \\frac{1}{2}\\big[ 3 + 22 \\big] = \\frac{1}{2} \\cdot 25 = 12.5",
          explanation:
            "3 + 22 = 25, and 1/2 × 25 = 12.5. The estimated area is 12.5 square units.",
          mafs: `<Mafs viewBox={{ x: [0, 5], y: [0, 5] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 1], [1, 3], [2, 4], [3, 4], [4, 2], [4, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polyline points={[[0, 1], [1, 3], [2, 4], [3, 4], [4, 2]]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={1} color="var(--mafs-fg-orange)" />
  <Point x={1} y={3} color="var(--mafs-fg-orange)" />
  <Point x={2} y={4} color="var(--mafs-fg-orange)" />
  <Point x={3} y={4} color="var(--mafs-fg-orange)" />
  <Point x={4} y={2} color="var(--mafs-fg-orange)" />
  <Text x={2} y={1.5} attach="n" color="var(--mafs-fg-blue)">A = 12.5</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(12.5\\)",
      canonicalAnswer: "12.5",
    },
  },
  {
    id: "ga33-018",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A curve has equation \\(y = x^2\\). Find the gradient of the chord between the points where \\(x = 3\\) and \\(x = 5\\), and explain why this OVER-estimates the gradient of the curve at \\(x = 3\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "gradient of a chord", "average rate of change", "reasoning"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the two points on the curve.",
          workingLatex: "x = 3:\\; y = 9; \\qquad x = 5:\\; y = 25",
          explanation:
            "From y = x²: at x = 3, y = 9; at x = 5, y = 25.",
        },
        {
          stepNumber: 2,
          description: "Find the chord gradient.",
          workingLatex: "m = \\frac{25 - 9}{5 - 3} = \\frac{16}{2} = 8",
          explanation:
            "Change in y is 16; change in x is 2; gradient = 16/2 = 8. This is the average rate of change between x = 3 and x = 5.",
        },
        {
          stepNumber: 3,
          description: "Compare with the gradient at x = 3.",
          workingLatex: "\\text{curve gets steeper as } x \\text{ increases}",
          explanation:
            "For y = x² the curve gets steeper as x increases, so the average gradient over [3, 5] includes the steeper part near x = 5 and is therefore larger than the gradient right at x = 3.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "8 > (\\text{gradient at } x = 3) \\Rightarrow \\text{over-estimate}",
          explanation:
            "Because the chord's average gradient (8) is pulled up by the steeper region, it over-estimates the true gradient of the curve at x = 3.",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [0, 27] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[1.5, 5.2]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[3, 9]} point2={[5, 25]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[1.5, 0]} point2={[4.5, 18]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={3} y={9} color="var(--mafs-fg-orange)" />
  <Point x={5} y={25} color="var(--mafs-fg-green)" />
  <Text x={3} y={9} attach="se" color="var(--mafs-fg-orange)">(3, 9)</Text>
  <Text x={5} y={25} attach="w" color="var(--mafs-fg-green)">(5, 25)</Text>
  <Text x={3.6} y={16} attach="nw" color="var(--mafs-fg-green)">chord m = 8</Text>
  <Text x={2} y={5} attach="e" color="var(--mafs-fg-orange)">tangent m = 6</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(8\\)",
      canonicalAnswer: "8",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga33-019",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A car's speed–time graph (speed in m/s) has heights \\(0,\\,5,\\,12,\\,18,\\,20\\) at times \\(t = 0,\\,4,\\,8,\\,12,\\,16\\) seconds. Use the trapezium rule with four strips to estimate the distance travelled in the first 16 seconds.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "area as distance", "speed-time graph"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall that area under a speed–time graph is distance, and find the strip width.",
          workingLatex: "h = \\frac{16 - 0}{4} = 4",
          explanation:
            "Four equal strips over 0 to 16 give width h = 16/4 = 4 seconds. The heights are given exactly at the strip edges, so the trapezium rule applies directly.",
        },
        {
          stepNumber: 2,
          description: "Write the trapezium rule.",
          workingLatex: "A \\approx \\frac{h}{2}\\big[ y_0 + y_4 + 2(y_1 + y_2 + y_3) \\big]",
          explanation:
            "First and last heights once; the three interior heights twice; all multiplied by h/2.",
        },
        {
          stepNumber: 3,
          description: "Identify the heights.",
          workingLatex: "y_0 = 0,\\; y_1 = 5,\\; y_2 = 12,\\; y_3 = 18,\\; y_4 = 20",
          explanation:
            "Read the five speeds in order.",
        },
        {
          stepNumber: 4,
          description: "Substitute the values.",
          workingLatex: "A \\approx \\frac{4}{2}\\big[ 0 + 20 + 2(5 + 12 + 18) \\big]",
          explanation:
            "End heights: 0 + 20 = 20. Interior sum: 5 + 12 + 18 = 35. And h/2 = 2.",
        },
        {
          stepNumber: 5,
          description: "Evaluate.",
          workingLatex: "A \\approx 2\\big[ 20 + 70 \\big] = 2 \\cdot 90 = 180",
          explanation:
            "2 × 35 = 70, plus 20 gives 90, times 2 = 180. The estimated distance travelled is about 180 metres.",
          mafs: `<Mafs viewBox={{ x: [0, 17], y: [0, 22] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 0], [4, 5], [8, 12], [12, 18], [16, 20], [16, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polyline points={[[0, 0], [4, 5], [8, 12], [12, 18], [16, 20]]} color="var(--mafs-fg-accent)" />
  <Point x={4} y={5} color="var(--mafs-fg-orange)" />
  <Point x={8} y={12} color="var(--mafs-fg-orange)" />
  <Point x={12} y={18} color="var(--mafs-fg-orange)" />
  <Point x={16} y={20} color="var(--mafs-fg-orange)" />
  <Text x={7} y={4} attach="n" color="var(--mafs-fg-blue)">distance = 180 m</Text>
  <Text x={8} y={0} attach="s" color="var(--mafs-fg-fg)">time (s)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(180\\)",
      canonicalAnswer: "180",
    },
  },
  {
    id: "ga33-020",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A curve has equation \\(y = x^2\\). By finding the gradients of the chords from \\(x = 2\\) to \\(x = 3\\), and from \\(x = 2\\) to \\(x = 2.5\\), explain what value the gradient of the curve at \\(x = 2\\) appears to approach.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "gradient of a chord", "estimate gradient at a point", "limiting argument"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Gradient of the chord from x = 2 to x = 3.",
          workingLatex: "m_1 = \\frac{3^2 - 2^2}{3 - 2} = \\frac{9 - 4}{1} = 5",
          explanation:
            "Heights are 9 and 4; change in x is 1. So the first chord has gradient 5.",
        },
        {
          stepNumber: 2,
          description: "Gradient of the chord from x = 2 to x = 2.5.",
          workingLatex: "m_2 = \\frac{2.5^2 - 2^2}{2.5 - 2} = \\frac{6.25 - 4}{0.5} = \\frac{2.25}{0.5} = 4.5",
          explanation:
            "Heights are 6.25 and 4; change in x is 0.5. So the second, shorter chord has gradient 4.5.",
        },
        {
          stepNumber: 3,
          description: "Observe the trend as the chord shortens.",
          workingLatex: "5 \\to 4.5 \\to \\ldots",
          explanation:
            "As the second point moves closer to x = 2, the chord gradient falls from 5 towards a value. The shorter the chord, the better it estimates the gradient AT x = 2.",
        },
        {
          stepNumber: 4,
          description: "State the value being approached.",
          workingLatex: "m \\to 4",
          explanation:
            "Continuing this process, the chord gradients approach 4 (e.g. from x = 2 to x = 2.1 the gradient is 4.1). So the gradient of the curve at x = 2 appears to be 4.",
          mafs: `<Mafs viewBox={{ x: [0, 4], y: [0, 10] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[0.5, 3.2]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[2, 4]} point2={[3, 9]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[2, 4]} point2={[2.5, 6.25]} color="var(--mafs-fg-blue)" />
  <Line.Segment point1={[1, 0]} point2={[3, 8]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={2} y={4} color="var(--mafs-fg-orange)" />
  <Text x={2} y={4} attach="nw" color="var(--mafs-fg-orange)">(2, 4)</Text>
  <Text x={3} y={9} attach="w" color="var(--mafs-fg-green)">m = 5</Text>
  <Text x={2.5} y={6.25} attach="se" color="var(--mafs-fg-blue)">m = 4.5</Text>
  <Text x={1} y={0} attach="ne" color="var(--mafs-fg-orange)">tangent m = 4</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga33-021",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A water tank fills so that the depth–time graph (depth in cm, time in min) has heights \\(0,\\,9,\\,16,\\,21,\\,24,\\,25\\) at \\(t = 0,\\,1,\\,2,\\,3,\\,4,\\,5\\). A tangent at \\(t = 1\\) passes through \\((0,\\,4)\\) and \\((2,\\,14)\\). Estimate the rate at which the depth is increasing at \\(t = 1\\) minute.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "tangent", "rate of change", "interpret rate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The rate of change of depth is the gradient of the depth–time graph at that instant.",
          workingLatex: "\\text{rate} = \\frac{\\text{change in depth}}{\\text{change in time}}",
          explanation:
            "The instantaneous rate at t = 1 is the gradient of the tangent at that point. The table is context; only the tangent's two points are needed for the rate at t = 1.",
        },
        {
          stepNumber: 2,
          description: "Use the tangent's two points.",
          workingLatex: "\\text{rate} = \\frac{14 - 4}{2 - 0} = \\frac{10}{2}",
          explanation:
            "Top: 14 - 4 = 10 cm. Bottom: 2 - 0 = 2 min.",
        },
        {
          stepNumber: 3,
          description: "Evaluate and interpret.",
          workingLatex: "\\text{rate} = 5",
          explanation:
            "10 ÷ 2 = 5. At t = 1 minute the depth is increasing at about 5 cm per minute.",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [0, 28] }} height={280}>
  <Coordinates.Cartesian />
  <Polyline points={[[0, 0], [1, 9], [2, 16], [3, 21], [4, 24], [5, 25]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 4]} point2={[2, 14]} color="var(--mafs-fg-green)" />
  <Point x={1} y={9} color="var(--mafs-fg-orange)" />
  <Text x={1} y={9} attach="se" color="var(--mafs-fg-orange)">t = 1</Text>
  <Text x={2} y={14} attach="w" color="var(--mafs-fg-green)">tangent, rate 5</Text>
  <Text x={3.5} y={0} attach="s" color="var(--mafs-fg-fg)">time (min)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga33-022",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A speed–time graph (speed in m/s) has heights \\(2,\\,6,\\,12,\\,14\\) at \\(t = 0,\\,3,\\,6,\\,9\\) seconds. (a) Use the trapezium rule with three strips to estimate the distance travelled. (b) Hence estimate the average speed over the 9 seconds.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "area as distance", "average speed"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the strip width.",
          workingLatex: "h = \\frac{9 - 0}{3} = 3",
          explanation:
            "Three equal strips over 0 to 9 give width h = 3 s.",
        },
        {
          stepNumber: 2,
          description: "Apply the trapezium rule for the distance.",
          workingLatex: "A \\approx \\frac{3}{2}\\big[ 2 + 14 + 2(6 + 12) \\big]",
          explanation:
            "End heights 2 and 14 once; interior heights 6 and 12 twice. Here h/2 = 1.5.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the distance.",
          workingLatex: "A \\approx \\frac{3}{2}\\big[ 16 + 36 \\big] = 1.5 \\cdot 52 = 78",
          explanation:
            "End sum 2 + 14 = 16; interior 2 × (6 + 12) = 36; total 52; times 1.5 = 78. The estimated distance is 78 metres.",
          mafs: `<Mafs viewBox={{ x: [0, 10], y: [0, 16] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 2], [3, 6], [6, 12], [9, 14], [9, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polyline points={[[0, 2], [3, 6], [6, 12], [9, 14]]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={2} color="var(--mafs-fg-orange)" />
  <Point x={3} y={6} color="var(--mafs-fg-orange)" />
  <Point x={6} y={12} color="var(--mafs-fg-orange)" />
  <Point x={9} y={14} color="var(--mafs-fg-orange)" />
  <Text x={4} y={3} attach="n" color="var(--mafs-fg-blue)">distance = 78 m</Text>
  <Text x={4.5} y={0} attach="s" color="var(--mafs-fg-fg)">time (s)</Text>
</Mafs>`,
        },
        {
          stepNumber: 4,
          description: "Find the average speed using distance ÷ time.",
          workingLatex: "\\bar{v} = \\frac{78}{9}",
          explanation:
            "Average speed is total distance divided by total time. The total time is 9 s.",
        },
        {
          stepNumber: 5,
          description: "Evaluate.",
          workingLatex: "\\bar{v} = \\frac{78}{9} \\approx 8.67",
          explanation:
            "78 ÷ 9 = 8.666..., so the average speed is about 8.67 m/s (3 s.f.).",
        },
      ],
      finalAnswer: "\\(78 \\text{ m},\\;\\; \\bar{v} \\approx 8.67\\)",
      canonicalAnswer: "78",
    },
  },
  {
    id: "ga33-023",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "On a speed–time graph the speed increases throughout, and the curve bends downward (it is concave, \"frowns\"). A student estimates the distance using the trapezium rule. State, with a reason, whether the estimate is too big or too small, and how the student could make it more accurate.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "over or under estimate", "reasoning"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare the chord with the curve.",
          workingLatex: "\\text{concave curve} \\Rightarrow \\text{chord lies BELOW the curve}",
          explanation:
            "The trapezium rule joins the strip ends with straight chords. For a curve that bends downward (concave, a 'frown'), the chord sits BELOW the curve, so each trapezium misses a thin sliver of area.",
        },
        {
          stepNumber: 2,
          description: "Decide over- or under-estimate.",
          workingLatex: "\\text{trapezium area} < \\text{true area} \\Rightarrow \\text{under-estimate}",
          explanation:
            "Since each trapezium lies below the curve, the total area found is less than the true area, so the distance estimate is too SMALL (an under-estimate).",
        },
        {
          stepNumber: 3,
          description: "State how to improve accuracy.",
          workingLatex: "\\text{use more (thinner) strips}",
          explanation:
            "Using more strips of smaller width makes each chord hug the curve more closely, reducing the missed slivers and giving a more accurate estimate.",
          mafs: `<Mafs viewBox={{ x: [0, 5], y: [0, 14] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 0], [4, 12], [4, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Plot.OfX y={(x) => 6 * Math.sqrt(x)} domain={[0, 4]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[0, 0]} point2={[4, 12]} color="var(--mafs-fg-green)" />
  <Point x={0} y={0} color="var(--mafs-fg-orange)" />
  <Point x={4} y={12} color="var(--mafs-fg-orange)" />
  <Text x={1.6} y={10} attach="w" color="var(--mafs-fg-accent)">concave curve</Text>
  <Text x={2.5} y={5} attach="ne" color="var(--mafs-fg-green)">chord below curve</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(\\text{Under-estimate; use more, thinner strips}\\)",
      canonicalAnswer: "under-estimate",
    },
  },
  {
    id: "ga33-024",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A curve has equation \\(y = 12 - x^2\\) for \\(0 \\le x \\le 3\\). Estimate the area under the curve from \\(x = 0\\) to \\(x = 3\\) using the trapezium rule with three strips of width \\(1\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "area under a curve", "evaluate from equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the curve heights at x = 0, 1, 2, 3 from the equation.",
          workingLatex: "y(0) = 12,\\; y(1) = 11,\\; y(2) = 8,\\; y(3) = 3",
          explanation:
            "Substitute into y = 12 - x²: 12 - 0 = 12, 12 - 1 = 11, 12 - 4 = 8, 12 - 9 = 3. These are the strip-edge heights.",
        },
        {
          stepNumber: 2,
          description: "Write the trapezium rule for three strips (h = 1).",
          workingLatex: "A \\approx \\frac{h}{2}\\big[ y_0 + y_3 + 2(y_1 + y_2) \\big]",
          explanation:
            "First and last heights once; interior heights twice; multiply by h/2 = 1/2.",
        },
        {
          stepNumber: 3,
          description: "Substitute the heights.",
          workingLatex: "A \\approx \\frac{1}{2}\\big[ 12 + 3 + 2(11 + 8) \\big]",
          explanation:
            "End heights: 12 + 3 = 15. Interior sum: 11 + 8 = 19, doubled gives 38.",
        },
        {
          stepNumber: 4,
          description: "Evaluate.",
          workingLatex: "A \\approx \\frac{1}{2}\\big[ 15 + 38 \\big] = \\frac{1}{2} \\cdot 53 = 26.5",
          explanation:
            "15 + 38 = 53, and 1/2 × 53 = 26.5. The estimated area is 26.5 square units.",
          mafs: `<Mafs viewBox={{ x: [0, 4], y: [0, 14] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 12], [1, 11], [2, 8], [3, 3], [3, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Plot.OfX y={(x) => 12 - x*x} domain={[0, 3]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={12} color="var(--mafs-fg-orange)" />
  <Point x={1} y={11} color="var(--mafs-fg-orange)" />
  <Point x={2} y={8} color="var(--mafs-fg-orange)" />
  <Point x={3} y={3} color="var(--mafs-fg-orange)" />
  <Text x={1.5} y={4} attach="n" color="var(--mafs-fg-blue)">A = 26.5</Text>
</Mafs>`,
        },
        {
          stepNumber: 5,
          description: "Note the nature of the estimate.",
          workingLatex: "y = 12 - x^2 \\text{ is concave} \\Rightarrow \\text{slight under-estimate}",
          explanation:
            "Since y = 12 - x² bends downward, the chords lie just below the curve, so 26.5 is a slight under-estimate of the true area.",
        },
      ],
      finalAnswer: "\\(26.5\\)",
      canonicalAnswer: "26.5",
    },
  },
  {
    id: "ga33-025",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A tangent to a curve at \\(x = 4\\) passes through \\((1,\\,13)\\) and \\((4,\\,4)\\). A second tangent, at \\(x = 7\\), passes through \\((5,\\,2)\\) and \\((9,\\,14)\\). Find the difference between the gradient of the curve at \\(x = 7\\) and the gradient at \\(x = 4\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "tangent", "gradient at a point", "compare gradients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Gradient of the curve at x = 4 from its tangent.",
          workingLatex: "m_4 = \\frac{4 - 13}{4 - 1} = \\frac{-9}{3} = -3",
          explanation:
            "Use the first tangent's two points: (4 - 13)/(4 - 1) = -9/3 = -3. The curve is falling at x = 4.",
        },
        {
          stepNumber: 2,
          description: "Gradient of the curve at x = 7 from its tangent.",
          workingLatex: "m_7 = \\frac{14 - 2}{9 - 5} = \\frac{12}{4} = 3",
          explanation:
            "Use the second tangent's two points: (14 - 2)/(9 - 5) = 12/4 = 3. The curve is rising at x = 7.",
        },
        {
          stepNumber: 3,
          description: "Find the difference (gradient at 7 minus gradient at 4).",
          workingLatex: "m_7 - m_4 = 3 - (-3) = 6",
          explanation:
            "Subtracting a negative adds: 3 - (-3) = 3 + 3 = 6. The gradient at x = 7 exceeds that at x = 4 by 6.",
          mafs: `<Mafs viewBox={{ x: [0, 10], y: [0, 16] }} height={280}>
  <Coordinates.Cartesian />
  <Line.Segment point1={[1, 13]} point2={[4, 4]} color="var(--mafs-fg-green)" />
  <Line.Segment point1={[5, 2]} point2={[9, 14]} color="var(--mafs-fg-blue)" />
  <Point x={4} y={4} color="var(--mafs-fg-orange)" />
  <Point x={7} y={8} color="var(--mafs-fg-orange)" />
  <Text x={4} y={4} attach="se" color="var(--mafs-fg-orange)">x = 4, m = -3</Text>
  <Text x={7} y={8} attach="nw" color="var(--mafs-fg-orange)">x = 7, m = 3</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga33-026",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A rocket's speed–time graph (speed in m/s) has heights \\(0,\\,8,\\,20,\\,36,\\,56\\) at \\(t = 0,\\,2,\\,4,\\,6,\\,8\\) seconds. (a) Use four strips and the trapezium rule to estimate the distance travelled. (b) A tangent at \\(t = 6\\) passes through \\((4,\\,20)\\) and \\((8,\\,52)\\); estimate the acceleration at \\(t = 6\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "area as distance", "tangent", "acceleration"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the strip width for part (a).",
          workingLatex: "h = \\frac{8 - 0}{4} = 2",
          explanation:
            "Four equal strips over 0 to 8 give width h = 2 s.",
        },
        {
          stepNumber: 2,
          description: "Apply the trapezium rule.",
          workingLatex: "A \\approx \\frac{2}{2}\\big[ 0 + 56 + 2(8 + 20 + 36) \\big]",
          explanation:
            "End heights 0 and 56 once; interior heights 8, 20, 36 twice; h/2 = 1.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the distance.",
          workingLatex: "A \\approx 1 \\cdot \\big[ 56 + 2 \\cdot 64 \\big] = 56 + 128 = 184",
          explanation:
            "Interior sum 8 + 20 + 36 = 64, doubled is 128; plus 56 gives 184. The estimated distance is 184 metres.",
          mafs: `<Mafs viewBox={{ x: [0, 9], y: [0, 60] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 0], [2, 8], [4, 20], [6, 36], [8, 56], [8, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polyline points={[[0, 0], [2, 8], [4, 20], [6, 36], [8, 56]]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[4, 20]} point2={[8, 52]} color="var(--mafs-fg-green)" />
  <Point x={6} y={36} color="var(--mafs-fg-orange)" />
  <Text x={6} y={36} attach="nw" color="var(--mafs-fg-orange)">t = 6</Text>
  <Text x={2.5} y={12} attach="n" color="var(--mafs-fg-blue)">distance = 184 m</Text>
  <Text x={6.5} y={44} attach="w" color="var(--mafs-fg-green)">a = 8</Text>
</Mafs>`,
        },
        {
          stepNumber: 4,
          description: "Part (b): acceleration is the gradient of the speed–time graph at t = 6.",
          workingLatex: "a = \\frac{52 - 20}{8 - 4} = \\frac{32}{4}",
          explanation:
            "Use the tangent's two points: (52 - 20)/(8 - 4) = 32/4. The tangent gradient estimates the instantaneous acceleration.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the acceleration.",
          workingLatex: "a = 8",
          explanation:
            "32 ÷ 4 = 8. The estimated acceleration at t = 6 s is 8 m/s².",
        },
      ],
      finalAnswer: "\\(184 \\text{ m},\\;\\; a = 8\\)",
      canonicalAnswer: "184",
    },
  },
  {
    id: "ga33-027",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The heights of a curve at \\(x = 1,\\,2,\\,3,\\,4,\\,5\\) are \\(2,\\,5,\\,10,\\,17,\\,26\\). Estimate the area under the curve from \\(x = 1\\) to \\(x = 5\\) using the trapezium rule, then state whether your answer is an over- or under-estimate, with a reason.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "area under a curve", "over or under estimate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the strip width.",
          workingLatex: "h = 1 \\quad (\\text{strips at } x = 1,2,3,4,5)",
          explanation:
            "The x-values are spaced 1 apart, so there are four strips each of width h = 1.",
        },
        {
          stepNumber: 2,
          description: "Write the trapezium rule.",
          workingLatex: "A \\approx \\frac{h}{2}\\big[ y_0 + y_4 + 2(y_1 + y_2 + y_3) \\big]",
          explanation:
            "First and last heights (2 and 26) once; the three interior heights (5, 10, 17) twice.",
        },
        {
          stepNumber: 3,
          description: "Substitute.",
          workingLatex: "A \\approx \\frac{1}{2}\\big[ 2 + 26 + 2(5 + 10 + 17) \\big]",
          explanation:
            "End heights: 2 + 26 = 28. Interior sum: 5 + 10 + 17 = 32, doubled gives 64.",
        },
        {
          stepNumber: 4,
          description: "Evaluate.",
          workingLatex: "A \\approx \\frac{1}{2}\\big[ 28 + 64 \\big] = \\frac{1}{2} \\cdot 92 = 46",
          explanation:
            "28 + 64 = 92, and 1/2 × 92 = 46. The estimated area is 46 square units.",
        },
        {
          stepNumber: 5,
          description: "Decide over- or under-estimate from the curvature.",
          workingLatex: "\\text{gaps between heights: } 3, 5, 7, 9 \\;\\Rightarrow\\; \\text{convex (increasing slope)}",
          explanation:
            "The heights rise by 3, then 5, 7, 9 — the increase is speeding up, so the curve bends upward (convex). Chords lie above a convex curve.",
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "\\text{convex} \\Rightarrow \\text{over-estimate}",
          explanation:
            "Because the curve is convex, the trapezium chords sit above it, so 46 is an OVER-estimate of the true area.",
          mafs: `<Mafs viewBox={{ x: [0, 6], y: [0, 28] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[1, 0], [1, 2], [2, 5], [3, 10], [4, 17], [5, 26], [5, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Plot.OfX y={(x) => x*x + 1} domain={[1, 5]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={2} color="var(--mafs-fg-orange)" />
  <Point x={2} y={5} color="var(--mafs-fg-orange)" />
  <Point x={3} y={10} color="var(--mafs-fg-orange)" />
  <Point x={4} y={17} color="var(--mafs-fg-orange)" />
  <Point x={5} y={26} color="var(--mafs-fg-orange)" />
  <Text x={2.5} y={6} attach="n" color="var(--mafs-fg-blue)">A = 46 (over-est.)</Text>
</Mafs>`,
        },
      ],
      finalAnswer: "\\(46\\)",
      canonicalAnswer: "46",
    },
  },
  {
    id: "ga33-028",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A curve has equation \\(y = x^2\\). The gradient of the curve at the point \\((a,\\,a^2)\\) is estimated by the chord from \\(x = a\\) to \\(x = a + h\\). Show that this chord gradient simplifies to \\(2a + h\\), and use it to estimate the gradient at \\(x = 3\\) when \\(h = 0.1\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "gradient of a chord", "algebraic chord", "estimate gradient at a point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the two points on the curve.",
          workingLatex: "(a,\\, a^2) \\quad \\text{and} \\quad (a + h,\\, (a + h)^2)",
          explanation:
            "Both points lie on y = x², so their heights are a² and (a + h)². The chord joins them.",
        },
        {
          stepNumber: 2,
          description: "Form the chord-gradient fraction.",
          workingLatex: "m = \\frac{(a + h)^2 - a^2}{(a + h) - a}",
          explanation:
            "Apply (change in y)/(change in x). The denominator simplifies to h.",
        },
        {
          stepNumber: 3,
          description: "Expand the numerator.",
          workingLatex: "(a + h)^2 - a^2 = a^2 + 2ah + h^2 - a^2 = 2ah + h^2",
          explanation:
            "Expand (a + h)² = a² + 2ah + h², then subtract a²; the a² terms cancel, leaving 2ah + h².",
        },
        {
          stepNumber: 4,
          description: "Divide by h.",
          workingLatex: "m = \\frac{2ah + h^2}{h} = \\frac{h(2a + h)}{h} = 2a + h",
          explanation:
            "Factor h from the numerator and cancel with the denominator (h ≠ 0), giving m = 2a + h as required.",
        },
        {
          stepNumber: 5,
          description: "Substitute a = 3 and h = 0.1.",
          workingLatex: "m = 2(3) + 0.1 = 6 + 0.1 = 6.1",
          explanation:
            "With a = 3 and h = 0.1, the chord gradient is 2 × 3 + 0.1 = 6.1.",
          mafs: `<Mafs viewBox={{ x: [0, 5], y: [0, 16] }} height={280}>
  <Coordinates.Cartesian />
  <Plot.OfX y={(x) => x*x} domain={[1.5, 3.7]} color="var(--mafs-fg-accent)" />
  <Line.Segment point1={[2, 2.61]} point2={[4, 14.81]} color="var(--mafs-fg-green)" />
  <Point x={3} y={9} color="var(--mafs-fg-orange)" />
  <Point x={3.1} y={9.61} color="var(--mafs-fg-orange)" />
  <Text x={3} y={9} attach="nw" color="var(--mafs-fg-orange)">(3, 9)</Text>
  <Text x={3.1} y={9.61} attach="se" color="var(--mafs-fg-orange)">(3.1, 9.61)</Text>
  <Text x={2} y={2.61} attach="ne" color="var(--mafs-fg-green)">m = 2a + h = 6.1</Text>
</Mafs>`,
        },
        {
          stepNumber: 6,
          description: "Interpret.",
          workingLatex: "m \\approx 6.1 \\;\\;(\\to 6 \\text{ as } h \\to 0)",
          explanation:
            "So the gradient of y = x² at x = 3 is about 6.1, and as h shrinks towards 0 the estimate approaches 6 — the exact gradient there.",
        },
      ],
      finalAnswer: "\\(6.1\\)",
      canonicalAnswer: "6.1",
    },
  },
  {
    id: "ga33-029",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A cyclist's speed–time graph (speed in m/s) has heights \\(4,\\,7,\\,9,\\,10,\\,10,\\,9\\) at \\(t = 0,\\,2,\\,4,\\,6,\\,8,\\,10\\) seconds. Use the trapezium rule with five strips to estimate the distance travelled, and hence estimate the average speed over the 10 seconds.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "area as distance", "average speed"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the strip width.",
          workingLatex: "h = \\frac{10 - 0}{5} = 2",
          explanation:
            "Five equal strips over 0 to 10 give width h = 2 s. The six heights are at the strip edges.",
        },
        {
          stepNumber: 2,
          description: "Write the trapezium rule for five strips.",
          workingLatex: "A \\approx \\frac{h}{2}\\big[ y_0 + y_5 + 2(y_1 + y_2 + y_3 + y_4) \\big]",
          explanation:
            "First and last heights once; the four interior heights twice; all times h/2 = 1.",
        },
        {
          stepNumber: 3,
          description: "Substitute the heights.",
          workingLatex: "A \\approx \\frac{2}{2}\\big[ 4 + 9 + 2(7 + 9 + 10 + 10) \\big]",
          explanation:
            "End heights: 4 + 9 = 13. Interior sum: 7 + 9 + 10 + 10 = 36, doubled gives 72.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the distance.",
          workingLatex: "A \\approx 1 \\cdot \\big[ 13 + 72 \\big] = 85",
          explanation:
            "13 + 72 = 85, times h/2 = 1 gives 85. The estimated distance is 85 metres.",
          mafs: `<Mafs viewBox={{ x: [0, 11], y: [0, 12] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 4], [2, 7], [4, 9], [6, 10], [8, 10], [10, 9], [10, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Polyline points={[[0, 4], [2, 7], [4, 9], [6, 10], [8, 10], [10, 9]]} color="var(--mafs-fg-accent)" />
  <Point x={0} y={4} color="var(--mafs-fg-orange)" />
  <Point x={2} y={7} color="var(--mafs-fg-orange)" />
  <Point x={4} y={9} color="var(--mafs-fg-orange)" />
  <Point x={6} y={10} color="var(--mafs-fg-orange)" />
  <Point x={8} y={10} color="var(--mafs-fg-orange)" />
  <Point x={10} y={9} color="var(--mafs-fg-orange)" />
  <Text x={5} y={2.5} attach="n" color="var(--mafs-fg-blue)">distance = 85 m</Text>
  <Text x={5} y={0} attach="s" color="var(--mafs-fg-fg)">time (s)</Text>
</Mafs>`,
        },
        {
          stepNumber: 5,
          description: "Compute the average speed.",
          workingLatex: "\\bar{v} = \\frac{85}{10} = 8.5",
          explanation:
            "Average speed = total distance ÷ total time = 85 ÷ 10 = 8.5 m/s.",
        },
      ],
      finalAnswer: "\\(85 \\text{ m},\\;\\; \\bar{v} = 8.5\\)",
      canonicalAnswer: "85",
    },
  },
  {
    id: "ga33-030",
    topicRef: "ga33",
    topicTitle: "Gradients and areas under graphs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A curve has equation \\(y = x^2\\) for \\(0 \\le x \\le 4\\). (a) Estimate the area under it from \\(x = 0\\) to \\(x = 4\\) using the trapezium rule with four strips of width \\(1\\). (b) The exact area is \\(\\dfrac{64}{3}\\). Find, to 1 decimal place, the error in the estimate, and explain why the estimate is too big.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["gradients and areas under graphs", "trapezium rule", "area under a curve", "over estimate", "error"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the curve heights at x = 0, 1, 2, 3, 4.",
          workingLatex: "y = 0,\\, 1,\\, 4,\\, 9,\\, 16",
          explanation:
            "From y = x²: 0², 1², 2², 3², 4² = 0, 1, 4, 9, 16. These are the strip-edge heights with width h = 1.",
        },
        {
          stepNumber: 2,
          description: "Apply the trapezium rule.",
          workingLatex: "A \\approx \\frac{1}{2}\\big[ 0 + 16 + 2(1 + 4 + 9) \\big]",
          explanation:
            "End heights 0 and 16 once; interior heights 1, 4, 9 twice; h/2 = 1/2.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the estimate.",
          workingLatex: "A \\approx \\frac{1}{2}\\big[ 16 + 28 \\big] = \\frac{1}{2} \\cdot 44 = 22",
          explanation:
            "Interior sum 1 + 4 + 9 = 14, doubled is 28; plus 16 gives 44; half of 44 is 22. The estimate is 22 square units.",
          mafs: `<Mafs viewBox={{ x: [0, 5], y: [0, 18] }} height={280}>
  <Coordinates.Cartesian />
  <Polygon points={[[0, 0], [0, 0], [1, 1], [2, 4], [3, 9], [4, 16], [4, 0]]} color="var(--mafs-fg-blue)" fillOpacity={0.18} />
  <Plot.OfX y={(x) => x*x} domain={[0, 4]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={1} color="var(--mafs-fg-orange)" />
  <Point x={2} y={4} color="var(--mafs-fg-orange)" />
  <Point x={3} y={9} color="var(--mafs-fg-orange)" />
  <Point x={4} y={16} color="var(--mafs-fg-orange)" />
  <Text x={1.4} y={10} attach="w" color="var(--mafs-fg-blue)">estimate 22</Text>
  <Text x={2.6} y={4} attach="se" color="var(--mafs-fg-accent)">exact 21.3</Text>
</Mafs>`,
        },
        {
          stepNumber: 4,
          description: "Compute the exact area as a decimal.",
          workingLatex: "\\frac{64}{3} = 21.333\\ldots",
          explanation:
            "Dividing 64 by 3 gives 21.333..., the exact area under the curve.",
        },
        {
          stepNumber: 5,
          description: "Find the error.",
          workingLatex: "\\text{error} = 22 - \\frac{64}{3} = 22 - 21.333\\ldots = 0.666\\ldots \\approx 0.7",
          explanation:
            "Error = estimate − exact = 22 − 21.333... = 0.666..., which is 0.7 (to 1 d.p.).",
        },
        {
          stepNumber: 6,
          description: "Explain why the estimate is too big.",
          workingLatex: "y = x^2 \\text{ convex} \\Rightarrow \\text{chords above curve} \\Rightarrow \\text{over-estimate}",
          explanation:
            "y = x² bends upward (convex), so each trapezium chord lies above the curve and includes extra area. That is why the estimate (22) exceeds the true area, by about 0.7.",
        },
      ],
      finalAnswer: "\\(22,\\;\\; \\text{error} \\approx 0.7\\)",
      canonicalAnswer: "22",
    },
  },
];
