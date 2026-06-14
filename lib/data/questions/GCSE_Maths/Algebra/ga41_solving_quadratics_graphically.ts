/**
 * Topic: Solving quadratics graphically
 * Ref: ga41  (DfE A18)
 * Strand: Algebra — GCSE Maths (Foundation and Higher tier)
 *
 * Coverage: reading the solutions of a quadratic from its graph rather than
 *   solving algebraically. Key facts used throughout:
 *   - The ROOTS of a quadratic are the x-coordinates of the points where the
 *     curve crosses the x-axis (where y = 0). Solving f(x) = 0 means reading the
 *     x-intercepts.
 *   - To solve f(x) = k, draw the horizontal line y = k and read the
 *     x-coordinates where the curve meets that line.
 *   - To solve f(x) = g(x) (quadratic = linear), read the x-coordinates of the
 *     points where the curve and the straight line intersect.
 *   - The NUMBER of solutions equals the number of intersection points (a line
 *     can miss the curve = 0 solutions, touch it = 1, or cross it = 2).
 *   - To solve a NEW equation using a graph you already have, rearrange the new
 *     equation so that one side is exactly the plotted curve f(x); the other side
 *     is then the line to draw.
 *   Clusters:
 *   (1) roots as x-intercepts of a described curve;
 *   (2) solve f(x) = 0 from given intercepts;
 *   (3) solve f(x) = k via the horizontal line y = k;
 *   (4) solve f(x) = g(x) via intersection with a straight line;
 *   (5) number of solutions from how a curve meets a line;
 *   (6) "which line to draw" to solve a new equation using a given graph
 *       (rearrange so one side equals the plotted curve);
 *   (7) estimate roots to 1 d.p. from a table of values (change of sign).
 *   Every stem is SELF-CONTAINED: the curve is described by its equation plus
 *   key points (roots, y-intercept, turning point) or a table of values, so the
 *   reading can be reproduced without an external figure.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga41-001 .. ga41-004  (4)
 *   - Standard:   ga41-005 .. ga41-018  (14)
 *   - Challenge:  ga41-019 .. ga41-030  (12)
 * Id range: ga41-001 .. ga41-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, with braced exponents like x^{2}, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga41-001",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "The graph of \\(y = x^{2} - 4\\) is a U-shaped curve that crosses the \\(x\\)-axis at \\((-2,\\,0)\\) and \\((2,\\,0)\\). Use the graph to write down the solutions of \\(x^{2} - 4 = 0\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "roots as x-intercepts", "reading a graph"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what 'solving f(x) = 0' means on a graph.",
          workingLatex: "y = x^{2} - 4",
          explanation:
            "The expression on the left of the equation, x^2 - 4, is exactly the height y of the curve. So asking 'when is x^2 - 4 = 0?' is the same as asking 'when is the height of the curve zero?'.",
        },
        {
          stepNumber: 2,
          description: "Translate 'y = 0' into a feature of the graph.",
          workingLatex: "x^{2} - 4 = 0 \\;\\Leftrightarrow\\; y = 0",
          explanation:
            "On any graph the line y = 0 is the x-axis itself. So the solutions are the x-coordinates of the points where the curve sits on the x-axis, i.e. where it crosses it.",
        },
        {
          stepNumber: 3,
          description: "Read the two x-intercepts from the description.",
          workingLatex: "(-2,\\,0) \\text{ and } (2,\\,0)",
          explanation:
            "The stem tells us the curve crosses the x-axis at (-2, 0) and (2, 0). These are the only two points where y = 0, so their x-coordinates are the roots we want.",
        },
        {
          stepNumber: 4,
          description: "Write down the x-coordinates as the solutions.",
          workingLatex: "x = -2 \\quad \\text{or} \\quad x = 2",
          explanation:
            "Take just the x-coordinate of each crossing point: -2 and 2. A common slip is to write the whole coordinate pair as the answer — only the x-value solves the equation.",
        },
      ],
      finalAnswer: "\\(x = -2 \\text{ or } x = 2\\)",
      canonicalAnswer: "{-2, 2}",
    },
  },
  {
    id: "ga41-002",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "The graph of \\(y = (x - 1)(x - 5)\\) is a U-shaped curve. It crosses the \\(x\\)-axis at \\((1,\\,0)\\) and \\((5,\\,0)\\). Use the graph to write down the solutions of \\((x - 1)(x - 5) = 0\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "roots as x-intercepts", "reading a graph"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify what the equation asks for.",
          workingLatex: "y = (x-1)(x-5)",
          explanation:
            "The left-hand side of the equation is the height y of the plotted curve. Setting it equal to 0 asks for the x-values that make the curve's height zero.",
        },
        {
          stepNumber: 2,
          description: "Translate 'y = 0' into where the curve meets the axis.",
          workingLatex: "(x-1)(x-5) = 0 \\;\\Leftrightarrow\\; y = 0",
          explanation:
            "Height zero means the point lies on the x-axis. So the solutions are exactly the x-coordinates where the curve meets the x-axis.",
        },
        {
          stepNumber: 3,
          description: "Read the x-coordinates of the two crossing points.",
          workingLatex: "(1,\\,0) \\text{ and } (5,\\,0) \\Rightarrow x = 1 \\text{ or } x = 5",
          explanation:
            "The curve crosses the x-axis at x = 1 and x = 5, so these are the solutions. This matches what you would get by setting each bracket to zero (x - 1 = 0 or x - 5 = 0) — the graph just lets you read it off directly.",
        },
      ],
      finalAnswer: "\\(x = 1 \\text{ or } x = 5\\)",
      canonicalAnswer: "{1, 5}",
    },
  },
  {
    id: "ga41-003",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The graph of \\(y = x^{2} - 6x + 9\\) is a U-shaped curve that just touches the \\(x\\)-axis at the single point \\((3,\\,0)\\). Use the graph to write down the solution of \\(x^{2} - 6x + 9 = 0\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "repeated root", "roots as x-intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the solutions on the graph.",
          workingLatex: "x^{2} - 6x + 9 = 0 \\;\\Leftrightarrow\\; y = 0",
          explanation:
            "As always, solving f(x) = 0 means finding the x-values where the curve has height zero, i.e. where it meets the x-axis.",
        },
        {
          stepNumber: 2,
          description: "Note that the curve only touches the axis.",
          workingLatex: "\\text{curve touches the } x\\text{-axis at } (3,\\,0)",
          explanation:
            "Here the curve does not pass through the axis; it comes down, touches at a single point (3, 0), and goes back up. A touching point gives a single repeated root rather than two separate ones.",
        },
        {
          stepNumber: 3,
          description: "Read the single x-coordinate.",
          workingLatex: "x = 3",
          explanation:
            "Because there is only one point of contact, there is only one solution, x = 3. A common slip is to expect two answers from a quadratic — but a curve that merely touches the axis has just one (repeated) root.",
        },
      ],
      finalAnswer: "\\(x = 3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga41-004",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "The graph of \\(y = x^{2} - x - 6\\) is drawn. It crosses the \\(x\\)-axis at \\((-2,\\,0)\\) and \\((3,\\,0)\\) and the \\(y\\)-axis at \\((0,\\,-6)\\). Use the graph to write down the solutions of \\(x^{2} - x - 6 = 0\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "roots as x-intercepts", "reading a graph"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide which feature of the graph gives the solutions.",
          workingLatex: "x^{2} - x - 6 = 0 \\;\\Leftrightarrow\\; y = 0",
          explanation:
            "The solutions are where the curve's height is zero, which is where it crosses the x-axis. This is not the same as the y-axis crossing.",
        },
        {
          stepNumber: 2,
          description: "Set aside the y-intercept as a distractor.",
          workingLatex: "(0,\\,-6) \\to \\text{this is where } x = 0",
          explanation:
            "The y-intercept (0, -6) is the point where x = 0, not where y = 0, so it is not a solution. It describes the shape of the curve but plays no part in solving the equation.",
        },
        {
          stepNumber: 3,
          description: "Read the two x-axis crossings.",
          workingLatex: "(-2,\\,0),\\;(3,\\,0) \\Rightarrow x = -2 \\text{ or } x = 3",
          explanation:
            "The curve crosses the x-axis at x = -2 and x = 3, so these are the solutions. (Check by factorising: x^2 - x - 6 = (x + 2)(x - 3), giving the same roots.)",
        },
      ],
      finalAnswer: "\\(x = -2 \\text{ or } x = 3\\)",
      canonicalAnswer: "{-2, 3}",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga41-005",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The graph of \\(y = x^{2} - 2x - 3\\) has a minimum at \\((1,\\,-4)\\), crosses the \\(y\\)-axis at \\((0,\\,-3)\\) and crosses the \\(x\\)-axis at \\((-1,\\,0)\\) and \\((3,\\,0)\\). Use the graph to solve \\(x^{2} - 2x - 3 = 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "roots as x-intercepts", "reading a graph"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State what the equation represents on the curve.",
          workingLatex: "x^{2} - 2x - 3 = 0 \\;\\Leftrightarrow\\; y = 0",
          explanation:
            "The left-hand side of the equation is the y-value of the curve. Setting it to 0 asks where the curve has zero height, which is where it crosses the x-axis.",
        },
        {
          stepNumber: 2,
          description: "Set aside the y-intercept, which is not a root.",
          workingLatex: "(0,\\,-3) \\to y\\text{-axis crossing (where } x = 0\\text{)}",
          explanation:
            "The point (0, -3) has y = -3, not y = 0, so it is not a solution. It only tells us where the curve cuts the y-axis. Ignore it when solving f(x) = 0.",
        },
        {
          stepNumber: 3,
          description: "Set aside the turning point too.",
          workingLatex: "(1,\\,-4) \\to \\text{minimum (turning point)}",
          explanation:
            "The minimum (1, -4) describes the lowest point of the curve but has y = -4, again not zero, so it is not a root either. Only points with y = 0 count.",
        },
        {
          stepNumber: 4,
          description: "Read the two x-axis crossings as the roots.",
          workingLatex: "(-1,\\,0),\\;(3,\\,0) \\Rightarrow x = -1 \\text{ or } x = 3",
          explanation:
            "The only two listed points with y = 0 are (-1, 0) and (3, 0), so the solutions are x = -1 and x = 3. Check: (-1)^2 - 2(-1) - 3 = 1 + 2 - 3 = 0, and 3^2 - 2(3) - 3 = 9 - 6 - 3 = 0.",
        },
      ],
      finalAnswer: "\\(x = -1 \\text{ or } x = 3\\)",
      canonicalAnswer: "{-1, 3}",
    },
  },
  {
    id: "ga41-006",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The graph of \\(y = x^{2} - 4x + 1\\) is drawn for \\(0 \\le x \\le 4\\). It has a minimum at \\((2,\\,-3)\\) and crosses the \\(x\\)-axis at approximately \\((0.3,\\,0)\\) and \\((3.7,\\,0)\\). Use the graph to write down the solutions of \\(x^{2} - 4x + 1 = 0\\), giving each to 1 decimal place.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "estimate roots", "roots as x-intercepts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify what to read off.",
          workingLatex: "x^{2} - 4x + 1 = 0 \\;\\Leftrightarrow\\; y = 0",
          explanation:
            "The solutions are the x-values where the curve meets the x-axis. This quadratic does not factorise into nice integer brackets, so the graph is used to read approximate (decimal) roots rather than exact ones.",
        },
        {
          stepNumber: 2,
          description: "Read the x-coordinates of the two crossings.",
          workingLatex: "x \\approx 0.3 \\quad \\text{and} \\quad x \\approx 3.7",
          explanation:
            "The curve crosses the x-axis near x = 0.3 and x = 3.7. Reading from a graph only gives estimates, so we state them to 1 decimal place as the question asks.",
        },
        {
          stepNumber: 3,
          description: "Complete the square to find the exact roots.",
          workingLatex: "x^{2} - 4x + 1 = 0 \\Rightarrow (x - 2)^{2} - 4 + 1 = 0 \\Rightarrow (x - 2)^{2} = 3",
          explanation:
            "To check the readings, complete the square: half of -4 is -2, so x^2 - 4x = (x - 2)^2 - 4. The equation becomes (x - 2)^2 = 3.",
        },
        {
          stepNumber: 4,
          description: "Solve and compare with the graph readings.",
          workingLatex: "x = 2 \\pm \\sqrt{3} = 2 \\pm 1.732\\ldots \\approx 0.27,\\; 3.73",
          explanation:
            "Taking square roots gives x = 2 ± √3 ≈ 0.27 and 3.73, which round to 0.3 and 3.7. This confirms the graphical readings are sound.",
        },
      ],
      finalAnswer: "\\(x \\approx 0.3 \\text{ or } x \\approx 3.7\\)",
      canonicalAnswer: "{0.3, 3.7}",
    },
  },
  {
    id: "ga41-007",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The graph of \\(y = x^{2} - 2x - 3\\) (minimum \\((1,\\,-4)\\), roots at \\(x=-1\\) and \\(x=3\\)) is drawn. By drawing a suitable horizontal line, use the graph to solve \\(x^{2} - 2x - 3 = 5\\). The curve passes through \\((-2,\\,5)\\) and \\((4,\\,5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "solve f(x)=k", "horizontal line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the equation as a curve-meets-line problem.",
          workingLatex: "x^{2} - 2x - 3 = 5",
          explanation:
            "The left-hand side is the y-value of the curve, so the equation asks: for which x does the curve have height 5? This is a different question from finding the roots (where the height is 0).",
        },
        {
          stepNumber: 2,
          description: "Decide which line to draw.",
          workingLatex: "y = 5",
          explanation:
            "Height 5 occurs along the horizontal line y = 5. So we draw that line and look for where it meets the curve; the x-coordinates of those meeting points are the solutions.",
        },
        {
          stepNumber: 3,
          description: "Find the intersections of the line with the curve.",
          workingLatex: "y = 5 \\text{ meets the curve at } (-2,\\,5) \\text{ and } (4,\\,5)",
          explanation:
            "A horizontal line cuts a U-shaped curve in two places. The stem tells us these are at (-2, 5) and (4, 5).",
        },
        {
          stepNumber: 4,
          description: "Read off the x-coordinates and check.",
          workingLatex: "x = -2 \\text{ or } x = 4; \\quad (-2)^{2} - 2(-2) - 3 = 4 + 4 - 3 = 5 \\checkmark",
          explanation:
            "The solutions are x = -2 and x = 4. Checking x = -2 gives 4 + 4 - 3 = 5, and x = 4 gives 16 - 8 - 3 = 5, so both are correct.",
        },
      ],
      finalAnswer: "\\(x = -2 \\text{ or } x = 4\\)",
      canonicalAnswer: "{-2, 4}",
    },
  },
  {
    id: "ga41-008",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The graph of \\(y = x^{2}\\) passes through \\((-3,\\,9)\\), \\((-2,\\,4)\\), \\((0,\\,0)\\), \\((2,\\,4)\\) and \\((3,\\,9)\\). By drawing a horizontal line, use the graph to solve \\(x^{2} = 4\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "solve f(x)=k", "horizontal line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite the equation as a height to look for.",
          workingLatex: "x^{2} = 4",
          explanation:
            "The left-hand side x^2 is the height of the curve y = x^2. The equation asks for which x this height equals 4.",
        },
        {
          stepNumber: 2,
          description: "Identify the line to draw.",
          workingLatex: "y = 4",
          explanation:
            "Height 4 occurs along the horizontal line y = 4. Drawing it and finding where it crosses the parabola gives the solutions.",
        },
        {
          stepNumber: 3,
          description: "Pick out the listed points with y = 4.",
          workingLatex: "(-2,\\,4) \\text{ and } (2,\\,4)",
          explanation:
            "Among the listed points, the ones with y = 4 are (-2, 4) and (2, 4). These are exactly where the line y = 4 meets the curve.",
        },
        {
          stepNumber: 4,
          description: "Read off the solutions.",
          workingLatex: "x = -2 \\text{ or } x = 2",
          explanation:
            "The x-coordinates of the intersections are -2 and 2, so the solutions are x = ±2. Note that a quadratic equal to a positive number gives two solutions, one on each branch of the U-shape — don't stop at just x = 2.",
        },
      ],
      finalAnswer: "\\(x = -2 \\text{ or } x = 2\\)",
      canonicalAnswer: "{-2, 2}",
    },
  },
  {
    id: "ga41-009",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The curve \\(y = x^{2} - 3\\) and the straight line \\(y = 2x\\) are drawn on the same axes. They intersect at \\((-1,\\,-2)\\) and \\((3,\\,6)\\). Use the graph to solve the equation \\(x^{2} - 3 = 2x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "intersection with line", "solve f(x)=g(x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the equation as an intersection.",
          workingLatex: "x^{2} - 3 = 2x",
          explanation:
            "The left-hand side is the y-value of the curve and the right-hand side is the y-value of the line. The equation holds where the curve and line have the same height.",
        },
        {
          stepNumber: 2,
          description: "Translate 'same height' into a graph feature.",
          workingLatex: "\\text{curve } = \\text{line} \\;\\Leftrightarrow\\; \\text{they intersect}",
          explanation:
            "Two graphs share the same height exactly where they cross. So the solutions are the x-coordinates of the intersection points.",
        },
        {
          stepNumber: 3,
          description: "Read the intersection points.",
          workingLatex: "(-1,\\,-2) \\text{ and } (3,\\,6) \\Rightarrow x = -1 \\text{ or } x = 3",
          explanation:
            "The stem gives the crossings as (-1, -2) and (3, 6), so the solutions are x = -1 and x = 3.",
        },
        {
          stepNumber: 4,
          description: "Check one solution in both expressions.",
          workingLatex: "x = -1: \\quad (-1)^{2} - 3 = -2, \\quad 2(-1) = -2 \\checkmark",
          explanation:
            "At x = -1 the curve gives 1 - 3 = -2 and the line gives 2(-1) = -2; the heights match, so the reading is correct.",
        },
      ],
      finalAnswer: "\\(x = -1 \\text{ or } x = 3\\)",
      canonicalAnswer: "{-1, 3}",
    },
  },
  {
    id: "ga41-010",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The curve \\(y = x^{2} + x - 4\\) and the line \\(y = x + 2\\) are drawn on the same axes and cross at \\((-\\sqrt{6},\\,2-\\sqrt{6})\\) and \\((\\sqrt{6},\\,2+\\sqrt{6})\\), i.e. at approximately \\((-2.4,\\,-0.4)\\) and \\((2.4,\\,4.4)\\). Use the graph to solve \\(x^{2} + x - 4 = x + 2\\), giving solutions to 1 decimal place.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "intersection with line", "estimate roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the equation as an intersection.",
          workingLatex: "x^{2} + x - 4 = x + 2 \\;\\Leftrightarrow\\; \\text{curve } = \\text{line}",
          explanation:
            "The equation asks where the curve y = x^2 + x - 4 and the line y = x + 2 have equal height, which happens at their intersection points. The x-coordinates there are the solutions.",
        },
        {
          stepNumber: 2,
          description: "Read the x-coordinates of the intersections.",
          workingLatex: "x \\approx -2.4 \\quad \\text{and} \\quad x \\approx 2.4",
          explanation:
            "The crossings are at approximately (-2.4, -0.4) and (2.4, 4.4), so the x-values read from the graph are about -2.4 and 2.4.",
        },
        {
          stepNumber: 3,
          description: "Rearrange algebraically to confirm.",
          workingLatex: "x^{2} + x - 4 = x + 2 \\Rightarrow x^{2} - 4 = 2 \\Rightarrow x^{2} = 6",
          explanation:
            "Subtracting x from both sides cancels the x terms, then adding 4 gives x^2 = 6. This is why the exact crossings involve √6.",
        },
        {
          stepNumber: 4,
          description: "Solve and round to 1 d.p.",
          workingLatex: "x = \\pm\\sqrt{6} \\approx \\pm 2.449 \\approx \\pm 2.4",
          explanation:
            "Taking square roots gives x = ±√6 ≈ ±2.449, which round to ±2.4. The graphical readings agree exactly.",
        },
      ],
      finalAnswer: "\\(x \\approx -2.4 \\text{ or } x \\approx 2.4\\)",
      canonicalAnswer: "{-2.4, 2.4}",
    },
  },
  {
    id: "ga41-011",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The graph of \\(y = x^{2} - 4x + 5\\) is a U-shaped curve with a minimum at \\((2,\\,1)\\); its lowest point is above the \\(x\\)-axis. State how many real solutions the equation \\(x^{2} - 4x + 5 = 0\\) has, and explain how the graph shows this.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "number of solutions", "no real roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate the equation into a graph condition.",
          workingLatex: "x^{2} - 4x + 5 = 0 \\;\\Leftrightarrow\\; \\text{curve meets the } x\\text{-axis } (y = 0)",
          explanation:
            "The number of real solutions of f(x) = 0 equals the number of points where the curve crosses or touches the x-axis.",
        },
        {
          stepNumber: 2,
          description: "Use the height of the minimum.",
          workingLatex: "\\text{minimum at } (2,\\,1), \\quad y_{\\min} = 1 > 0",
          explanation:
            "The lowest point of the curve has y = 1, which is above the x-axis. Since the U-shape only rises from its minimum, the whole curve stays at height 1 or more — always above y = 0.",
        },
        {
          stepNumber: 3,
          description: "Conclude the number of solutions.",
          workingLatex: "\\text{curve never reaches } y = 0 \\Rightarrow 0 \\text{ real solutions}",
          explanation:
            "Because the curve never crosses or touches the x-axis, the equation has no real solutions.",
        },
        {
          stepNumber: 4,
          description: "Confirm with the discriminant.",
          workingLatex: "\\Delta = (-4)^{2} - 4(1)(5) = 16 - 20 = -4 < 0",
          explanation:
            "The discriminant b^2 - 4ac = -4 is negative, which independently confirms there are no real roots — agreeing with the graph.",
        },
      ],
      finalAnswer: "\\(0 \\text{ real solutions}\\)",
      canonicalAnswer: "0",
    },
  },
  {
    id: "ga41-012",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The curve \\(y = x^{2} - 4x + 5\\) has a minimum at \\((2,\\,1)\\). The horizontal line \\(y = 1\\) is also drawn. State how many solutions the equation \\(x^{2} - 4x + 5 = 1\\) has, and explain why.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "number of solutions", "tangent line", "solve f(x)=k"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the equation as curve meets line.",
          workingLatex: "x^{2} - 4x + 5 = 1 \\;\\Leftrightarrow\\; \\text{curve meets } y = 1",
          explanation:
            "The number of solutions equals the number of points where the curve meets the horizontal line y = 1.",
        },
        {
          stepNumber: 2,
          description: "Compare the line with the turning point.",
          workingLatex: "\\text{minimum } (2,\\,1) \\text{ lies on } y = 1",
          explanation:
            "The line y = 1 passes exactly through the minimum point (2, 1). The lowest point of the curve sits right on the line.",
        },
        {
          stepNumber: 3,
          description: "Reason about touch versus cross.",
          workingLatex: "\\text{line touches the curve at one point}",
          explanation:
            "Because the curve only comes down as far as y = 1 and then rises again, the line y = 1 meets it at just that single lowest point — it touches rather than crosses, so there is one solution.",
        },
        {
          stepNumber: 4,
          description: "Confirm algebraically.",
          workingLatex: "x^{2} - 4x + 5 = 1 \\Rightarrow x^{2} - 4x + 4 = 0 \\Rightarrow (x-2)^{2} = 0 \\Rightarrow x = 2",
          explanation:
            "Subtracting 1 gives (x - 2)^2 = 0, a repeated root x = 2 — exactly one solution, matching the graph.",
        },
      ],
      finalAnswer: "\\(1 \\text{ solution } (x = 2)\\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "ga41-013",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The table gives values of \\(y = x^{2} - 5\\):\n\n| \\(x\\) | -3 | -2 | -1 | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|---|---|---|\n| \\(y\\) | 4 | -1 | -4 | -5 | -4 | -1 | 4 |\n\nThe curve crosses the \\(x\\)-axis between \\(x=-3\\) and \\(x=-2\\), and between \\(x=2\\) and \\(x=3\\). Estimate the solutions of \\(x^{2} - 5 = 0\\) to 1 decimal place.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "estimate roots", "table of values", "change of sign"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find where y changes sign in the table.",
          workingLatex: "x=-3: y=4 \\;(+), \\quad x=-2: y=-1 \\;(-)",
          explanation:
            "A root of f(x) = 0 lies where the curve crosses the x-axis, i.e. where y changes from positive to negative. Between x = -3 (y = 4) and x = -2 (y = -1) the sign flips, so a root lies in that interval.",
        },
        {
          stepNumber: 2,
          description: "Judge where in the interval the crossing sits.",
          workingLatex: "|y(-2)| = 1 \\;<\\; |y(-3)| = 4",
          explanation:
            "The crossing is closer to x = -2 because y = -1 there is much nearer to 0 than y = 4 at x = -3. So the root is just below -2, around -2.2.",
        },
        {
          stepNumber: 3,
          description: "Test a value to pin down the negative root.",
          workingLatex: "y(-2.2) = (-2.2)^{2} - 5 = 4.84 - 5 = -0.16 \\approx 0",
          explanation:
            "Testing x = -2.2 gives y ≈ -0.16, very close to zero, so the negative root is about x = -2.2.",
        },
        {
          stepNumber: 4,
          description: "Use symmetry for the positive root.",
          workingLatex: "x=2: y=-1, \\quad x=3: y=4 \\Rightarrow \\text{root} \\approx 2.2",
          explanation:
            "Between x = 2 and x = 3 the sign changes from - to +, giving the other root. Since y = x^2 - 5 is symmetric about the y-axis, this root is the mirror image at x ≈ 2.2.",
        },
        {
          stepNumber: 5,
          description: "Check against the exact value.",
          workingLatex: "x^{2} = 5 \\Rightarrow x = \\pm\\sqrt{5} \\approx \\pm 2.236",
          explanation:
            "Exactly, x = ±√5 ≈ ±2.236, which round to ±2.2, confirming the estimates read from the table.",
        },
      ],
      finalAnswer: "\\(x \\approx -2.2 \\text{ or } x \\approx 2.2\\)",
      canonicalAnswer: "{-2.2, 2.2}",
    },
  },
  {
    id: "ga41-014",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = x^{2} - 2x - 3\\) has already been drawn. Theo wants to use it to solve \\(x^{2} - 2x - 5 = 0\\). State the equation of the straight line he should draw on the same axes.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "which line to draw", "rearranging"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the method: one side must be the plotted curve.",
          workingLatex: "\\text{plotted curve: } y = x^{2} - 2x - 3",
          explanation:
            "To reuse an existing graph, we must rearrange the new equation so that one side is exactly the expression that was plotted, x^2 - 2x - 3. Whatever is left on the other side is the line to draw.",
        },
        {
          stepNumber: 2,
          description: "Compare the target with the plotted expression.",
          workingLatex: "(x^{2} - 2x - 5) - (x^{2} - 2x - 3) = -2",
          explanation:
            "The target expression x^2 - 2x - 5 is the same as the plotted one but 2 smaller (the constant is -5 instead of -3). So to bring out x^2 - 2x - 3 we must add 2.",
        },
        {
          stepNumber: 3,
          description: "Add 2 to both sides of the target equation.",
          workingLatex: "x^{2} - 2x - 5 = 0 \\Rightarrow x^{2} - 2x - 5 + 2 = 0 + 2 \\Rightarrow x^{2} - 2x - 3 = 2",
          explanation:
            "Adding 2 to both sides turns the left side into x^2 - 2x - 3 (the plotted curve) and the right side into 2.",
        },
        {
          stepNumber: 4,
          description: "Read off the line and verify it reproduces the target.",
          workingLatex: "y = 2; \\quad x^{2} - 2x - 3 = 2 \\Rightarrow x^{2} - 2x - 5 = 0 \\checkmark",
          explanation:
            "The left side is the plotted curve and the right side is the line y = 2, so the curve's intersections with y = 2 solve the original equation. Subtracting 2 back reproduces x^2 - 2x - 5 = 0, confirming the line.",
        },
      ],
      finalAnswer: "\\(y = 2\\)",
      canonicalAnswer: "y=2",
    },
  },
  {
    id: "ga41-015",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The graph of \\(y = x^{2} + 3x - 1\\) is drawn. Mara wants to use it to solve \\(x^{2} + 3x - 1 = 4\\). State the equation of the line she should draw, and explain in one line how she then reads off the solutions.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "which line to draw", "solve f(x)=k"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check whether the curve is already isolated.",
          workingLatex: "x^{2} + 3x - 1 = 4",
          explanation:
            "Look at the left-hand side: it is already exactly the plotted curve x^2 + 3x - 1, with nothing extra added or subtracted. So no rearranging is needed at all.",
        },
        {
          stepNumber: 2,
          description: "Identify the line to draw.",
          workingLatex: "y = 4",
          explanation:
            "Because the plotted curve already stands alone on the left, the right-hand side is the line directly: y = 4.",
        },
        {
          stepNumber: 3,
          description: "Describe how to read the solutions.",
          workingLatex: "\\text{solutions} = x\\text{-coords where curve meets } y = 4",
          explanation:
            "Draw the horizontal line y = 4; the x-coordinates of the two points where it crosses the curve are the solutions of the equation.",
        },
      ],
      finalAnswer: "\\(y = 4\\)",
      canonicalAnswer: "y=4",
    },
  },
  {
    id: "ga41-016",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The curve \\(y = x^{2} - 2x\\) (minimum \\((1,\\,-1)\\), roots at \\(x=0\\) and \\(x=2\\)) and the line \\(y = x\\) are drawn together. They cross at \\((0,\\,0)\\) and \\((3,\\,3)\\). Use the graph to solve \\(x^{2} - 2x = x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "intersection with line", "solve f(x)=g(x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the equation as curve meets line.",
          workingLatex: "x^{2} - 2x = x \\;\\Leftrightarrow\\; \\text{curve } = \\text{line } y = x",
          explanation:
            "The left side is the curve's height and the right side is the line's height. The equation holds where they are equal, i.e. at the intersection points.",
        },
        {
          stepNumber: 2,
          description: "Read the intersection x-values.",
          workingLatex: "(0,\\,0) \\text{ and } (3,\\,3) \\Rightarrow x = 0 \\text{ or } x = 3",
          explanation:
            "The stem gives the crossings as (0, 0) and (3, 3), so the solutions are the x-coordinates x = 0 and x = 3. Don't confuse these with the curve's own roots (0 and 2) — those solve a different equation, x^2 - 2x = 0.",
        },
        {
          stepNumber: 3,
          description: "Check the non-trivial solution.",
          workingLatex: "x=3: \\; 3^{2} - 2(3) = 9 - 6 = 3, \\quad y = x = 3 \\checkmark",
          explanation:
            "At x = 3 the curve gives 9 - 6 = 3 and the line gives 3; the heights match. (At x = 0 both sides are clearly 0.)",
        },
      ],
      finalAnswer: "\\(x = 0 \\text{ or } x = 3\\)",
      canonicalAnswer: "{0, 3}",
    },
  },
  {
    id: "ga41-017",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The curve \\(y = x^{2} + 1\\) (minimum \\((0,\\,1)\\)) and the line \\(y = x\\) are drawn on the same axes. State how many solutions the equation \\(x^{2} + 1 = x\\) has, and explain how the graph shows this.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "number of solutions", "intersection with line", "no real roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret as an intersection count.",
          workingLatex: "x^{2} + 1 = x \\;\\Leftrightarrow\\; \\text{number of curve–line intersections}",
          explanation:
            "The number of solutions equals the number of points where the curve y = x^2 + 1 meets the line y = x.",
        },
        {
          stepNumber: 2,
          description: "Form the gap between curve and line.",
          workingLatex: "x^{2} + 1 - x",
          explanation:
            "To see whether they ever meet, look at the vertical gap (curve height minus line height). If this is always positive, the curve stays above the line and they never touch.",
        },
        {
          stepNumber: 3,
          description: "Complete the square on the gap.",
          workingLatex: "x^{2} - x + 1 = \\left(x - \\frac{1}{2}\\right)^{2} - \\frac{1}{4} + 1 = \\left(x - \\frac{1}{2}\\right)^{2} + \\frac{3}{4}",
          explanation:
            "Half of -1 is -1/2, so x^2 - x = (x - 1/2)^2 - 1/4. Adding the +1 gives (x - 1/2)^2 + 3/4. A square is never negative, so this is at least 3/4, hence always positive.",
        },
        {
          stepNumber: 4,
          description: "Conclude the number of solutions.",
          workingLatex: "\\text{gap} > 0 \\text{ always} \\Rightarrow \\text{no intersection} \\Rightarrow 0 \\text{ solutions}",
          explanation:
            "Because the gap is strictly positive everywhere, the curve stays above the line and they never meet, so the equation has no real solutions. On the graph the line passes entirely below the curve.",
        },
      ],
      finalAnswer: "\\(0 \\text{ solutions}\\)",
      canonicalAnswer: "0",
    },
  },
  {
    id: "ga41-018",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The table gives values of \\(y = x^{2} + x - 3\\):\n\n| \\(x\\) | -3 | -2 | -1 | 0 | 1 | 2 |\n|---|---|---|---|---|---|---|\n| \\(y\\) | 3 | -1 | -3 | -3 | -1 | 3 |\n\nUse the table to identify the two intervals in which the roots of \\(x^{2} + x - 3 = 0\\) lie, and estimate each root to 1 decimal place.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "estimate roots", "table of values", "change of sign"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Look for sign changes in the y-row.",
          workingLatex: "x=-3:\\,3\\,(+),\\; x=-2:\\,-1\\,(-) \\quad\\text{and}\\quad x=1:\\,-1\\,(-),\\; x=2:\\,3\\,(+)",
          explanation:
            "A root lies in any interval where y changes sign. The sign flips between x = -3 and x = -2, and again between x = 1 and x = 2, so there is one root in each of these intervals.",
        },
        {
          stepNumber: 2,
          description: "Estimate the left-hand root.",
          workingLatex: "y(-2.3) = (-2.3)^{2} + (-2.3) - 3 = 5.29 - 2.3 - 3 = -0.01 \\approx 0",
          explanation:
            "Between -3 (y = 3) and -2 (y = -1) the crossing is nearer -2, since |−1| < |3|. Testing x = -2.3 gives y ≈ -0.01, essentially zero, so the root is about x = -2.3.",
        },
        {
          stepNumber: 3,
          description: "Estimate the right-hand root.",
          workingLatex: "y(1.3) = (1.3)^{2} + 1.3 - 3 = 1.69 + 1.3 - 3 = -0.01 \\approx 0",
          explanation:
            "Between 1 (y = -1) and 2 (y = 3) the crossing is nearer 1. Testing x = 1.3 gives y ≈ -0.01, so the root is about x = 1.3.",
        },
        {
          stepNumber: 4,
          description: "Cross-check with the quadratic formula.",
          workingLatex: "x = \\frac{-1 \\pm \\sqrt{1^{2} - 4(1)(-3)}}{2} = \\frac{-1 \\pm \\sqrt{13}}{2} \\approx 1.30,\\; -2.30",
          explanation:
            "Using a = 1, b = 1, c = -3 the formula gives x = (-1 ± √13)/2 ≈ 1.30 and -2.30, matching the table estimates to 1 d.p.",
        },
      ],
      finalAnswer: "\\(x \\approx -2.3 \\text{ or } x \\approx 1.3\\)",
      canonicalAnswer: "{-2.3, 1.3}",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga41-019",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = x^{2} + 2x - 4\\) has been drawn. Show how to use it to solve \\(x^{2} + 3x - 2 = 0\\) by stating the equation of the straight line to draw, and explain why that line is correct.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "which line to draw", "rearranging"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the requirement.",
          workingLatex: "\\text{plotted: } y = x^{2} + 2x - 4",
          explanation:
            "We must rearrange x^2 + 3x - 2 = 0 so that the plotted expression x^2 + 2x - 4 sits alone on one side; whatever is left on the other side becomes the line to draw.",
        },
        {
          stepNumber: 2,
          description: "Find the difference between target and plotted expression.",
          workingLatex: "(x^{2} + 3x - 2) - (x^{2} + 2x - 4) = (3x - 2x) + (-2 + 4) = x + 2",
          explanation:
            "The target differs from the plotted curve by x + 2 (it has one more x and is 2 larger). This difference must be moved to the other side when we isolate the plotted expression.",
        },
        {
          stepNumber: 3,
          description: "Rearrange to isolate the plotted expression.",
          workingLatex: "x^{2} + 3x - 2 = 0 \\Rightarrow x^{2} + 2x - 4 = -(x + 2) = -x - 2",
          explanation:
            "Subtract (x + 2) from both sides. The left becomes the plotted curve x^2 + 2x - 4, and the right becomes 0 - (x + 2) = -x - 2.",
        },
        {
          stepNumber: 4,
          description: "Read off the line and verify.",
          workingLatex: "y = -x - 2; \\quad x^{2}+2x-4 = -x-2 \\Rightarrow x^{2}+3x-2 = 0 \\checkmark",
          explanation:
            "The line is y = -x - 2. Setting curve = line and collecting all terms on the left gives x^2 + 2x - 4 + x + 2 = x^2 + 3x - 2 = 0, exactly the target, so the line is correct. Its intersection x-values are the solutions.",
        },
      ],
      finalAnswer: "\\(y = -x - 2\\)",
      canonicalAnswer: "y=-x-2",
    },
  },
  {
    id: "ga41-020",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = x^{2} - 3x + 1\\) is drawn. Find the equation of the straight line that should be drawn on the same axes to solve \\(2x^{2} - 5x - 1 = 0\\). Give the line in the form \\(y = mx + c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "which line to draw", "rearranging", "scaling"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the leading coefficients differ.",
          workingLatex: "\\text{plotted has } x^{2}; \\quad \\text{target has } 2x^{2}",
          explanation:
            "The plotted curve has coefficient 1 on x^2, but the target has 2x^2. We cannot make the plotted expression appear until the x^2 coefficients match, so first we must scale the target.",
        },
        {
          stepNumber: 2,
          description: "Divide the target equation by 2.",
          workingLatex: "2x^{2} - 5x - 1 = 0 \\Rightarrow x^{2} - \\frac{5}{2}x - \\frac{1}{2} = 0",
          explanation:
            "Dividing every term by 2 keeps the same solutions (a zero stays a zero) and gives a unit x^2 coefficient, now matching the plotted curve.",
        },
        {
          stepNumber: 3,
          description: "Compute line = (plotted expression) − (scaled target expression).",
          workingLatex: "L = \\left(x^{2} - 3x + 1\\right) - \\left(x^{2} - \\frac{5}{2}x - \\frac{1}{2}\\right)",
          explanation:
            "The line to draw is the plotted expression minus the rearranged target's left-hand expression; the x^2 terms cancel, leaving a linear expression in x.",
        },
        {
          stepNumber: 4,
          description: "Simplify the line term by term.",
          workingLatex: "L = \\left(-3x + \\frac{5}{2}x\\right) + \\left(1 + \\frac{1}{2}\\right) = -\\frac{1}{2}x + \\frac{3}{2}",
          explanation:
            "For the x terms: -3x - (-5/2 x) = -3x + 5/2 x = -1/2 x. For the constants: 1 - (-1/2) = 1 + 1/2 = 3/2. So the line is y = -1/2 x + 3/2.",
        },
        {
          stepNumber: 5,
          description: "Verify it reproduces the target.",
          workingLatex: "x^{2} - 3x + 1 = -\\frac{1}{2}x + \\frac{3}{2} \\Rightarrow x^{2} - \\frac{5}{2}x - \\frac{1}{2} = 0 \\Rightarrow 2x^{2} - 5x - 1 = 0 \\checkmark",
          explanation:
            "Setting curve = line and collecting terms gives x^2 - 5/2 x - 1/2 = 0; multiplying through by 2 returns 2x^2 - 5x - 1 = 0, exactly the target. So the line to draw is y = -1/2 x + 3/2.",
        },
      ],
      finalAnswer: "\\(y = -\\dfrac{1}{2}x + \\dfrac{3}{2}\\)",
      canonicalAnswer: "y=-1/2x+3/2",
    },
  },
  {
    id: "ga41-021",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The curve \\(y = x^{2} - 4x + 2\\) has a minimum at \\((2,\\,-2)\\), crosses the \\(y\\)-axis at \\((0,\\,2)\\) and crosses the \\(x\\)-axis at approximately \\((0.6,\\,0)\\) and \\((3.4,\\,0)\\). The line \\(y = x - 2\\) is drawn on the same axes; it meets the curve at \\((1,\\,-1)\\) and \\((4,\\,2)\\). Use the graph to solve (a) \\(x^{2} - 4x + 2 = 0\\) and (b) \\(x^{2} - 4x + 2 = x - 2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "roots as x-intercepts", "intersection with line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Part (a): identify the relevant feature.",
          workingLatex: "x^{2} - 4x + 2 = 0 \\;\\Leftrightarrow\\; y = 0 \\text{ (x-axis)}",
          explanation:
            "Solving = 0 means reading where the curve crosses the x-axis. The stem gives these crossings as approximately (0.6, 0) and (3.4, 0).",
        },
        {
          stepNumber: 2,
          description: "Part (a): read the roots.",
          workingLatex: "x \\approx 0.6 \\text{ or } x \\approx 3.4",
          explanation:
            "The x-axis crossings give the roots x ≈ 0.6 and x ≈ 3.4. (Exactly, completing the square gives x = 2 ± √2 ≈ 0.59 and 3.41.)",
        },
        {
          stepNumber: 3,
          description: "Part (b): interpret as curve meets line.",
          workingLatex: "x^{2} - 4x + 2 = x - 2 \\;\\Leftrightarrow\\; \\text{curve } = \\text{line}",
          explanation:
            "Now the right side is the line y = x - 2, so the equation is solved where the curve and that line intersect — given as (1, -1) and (4, 2).",
        },
        {
          stepNumber: 4,
          description: "Part (b): read the solutions and check.",
          workingLatex: "x = 1 \\text{ or } x = 4; \\quad 4^{2} - 4(4) + 2 = 2, \\quad 4 - 2 = 2 \\checkmark",
          explanation:
            "The intersection x-coordinates are 1 and 4. Check x = 4: curve gives 16 - 16 + 2 = 2 and line gives 4 - 2 = 2, equal — so part (b) solutions are x = 1 and x = 4.",
        },
      ],
      finalAnswer: "\\((a)\\; x \\approx 0.6,\\,3.4; \\quad (b)\\; x = 1,\\,4\\)",
      canonicalAnswer: "{1, 4}",
    },
  },
  {
    id: "ga41-022",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = x^{2} - x - 4\\) is drawn. Determine the equation of the straight line that should be drawn to solve \\(x^{2} - 2x - 1 = 0\\) using this graph, and verify your line algebraically. Give the line in the form \\(y = mx + c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "which line to draw", "rearranging"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up: isolate the plotted expression.",
          workingLatex: "\\text{plotted: } x^{2} - x - 4; \\quad \\text{target: } x^{2} - 2x - 1 = 0",
          explanation:
            "Both quadratics have x^2 with coefficient 1, so no scaling is needed. We just rearrange the target so x^2 - x - 4 stands alone on the left.",
        },
        {
          stepNumber: 2,
          description: "Compute line = (plotted) − (target expression).",
          workingLatex: "L = (x^{2} - x - 4) - (x^{2} - 2x - 1)",
          explanation:
            "The line equals the plotted expression minus the target's left-hand expression. The x^2 terms cancel, leaving a linear expression.",
        },
        {
          stepNumber: 3,
          description: "Simplify the line.",
          workingLatex: "L = (-x + 2x) + (-4 + 1) = x - 3",
          explanation:
            "For the x terms: -x - (-2x) = -x + 2x = x. For the constants: -4 - (-1) = -4 + 1 = -3. So the line to draw is y = x - 3.",
        },
        {
          stepNumber: 4,
          description: "Verify.",
          workingLatex: "x^{2} - x - 4 = x - 3 \\Rightarrow x^{2} - x - 4 - x + 3 = x^{2} - 2x - 1 = 0 \\checkmark",
          explanation:
            "Setting curve = line and bringing everything to one side gives x^2 - 2x - 1 = 0, exactly the target. So the line to draw is y = x - 3, and its intersections with the curve give the solutions.",
        },
      ],
      finalAnswer: "\\(y = x - 3\\)",
      canonicalAnswer: "y=x-3",
    },
  },
  {
    id: "ga41-023",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The curve \\(y = x^{2} - 6x + 8\\) has a minimum at \\((3,\\,-1)\\). For the horizontal line \\(y = k\\), state the value(s) of \\(k\\) for which the equation \\(x^{2} - 6x + 8 = k\\) has exactly one solution, and explain using the graph.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "number of solutions", "tangent line", "turning point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret 'one solution' graphically.",
          workingLatex: "x^{2} - 6x + 8 = k \\;\\Leftrightarrow\\; \\text{line } y = k \\text{ meets curve}",
          explanation:
            "The number of solutions is the number of points where the horizontal line y = k meets the curve. We want exactly one such point.",
        },
        {
          stepNumber: 2,
          description: "Relate intersection count to the turning point.",
          workingLatex: "\\text{U-shaped curve, minimum at } (3,\\,-1)",
          explanation:
            "A horizontal line cuts a U-shaped parabola twice if it sits above the minimum, never if it sits below, and exactly once if it passes through the minimum (touching the lowest point).",
        },
        {
          stepNumber: 3,
          description: "Read the critical height.",
          workingLatex: "k = y_{\\min} = -1",
          explanation:
            "The single-intersection case happens only when the line is level with the lowest point of the curve, so k must equal the minimum y-value, -1.",
        },
        {
          stepNumber: 4,
          description: "Confirm algebraically.",
          workingLatex: "x^{2} - 6x + 8 = -1 \\Rightarrow x^{2} - 6x + 9 = 0 \\Rightarrow (x-3)^{2} = 0 \\Rightarrow x = 3",
          explanation:
            "With k = -1 the equation becomes (x - 3)^2 = 0, a repeated root x = 3 — exactly one solution, confirming k = -1.",
        },
      ],
      finalAnswer: "\\(k = -1\\)",
      canonicalAnswer: "-1",
    },
  },
  {
    id: "ga41-024",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The table gives values of \\(y = x^{2} - 2x - 2\\):\n\n| \\(x\\) | -2 | -1 | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|---|---|\n| \\(y\\) | 6 | 1 | -2 | -3 | -2 | 1 | 6 |\n\n(a) Between which consecutive x-values does each root of \\(x^{2} - 2x - 2 = 0\\) lie? (b) Estimate each root to 1 decimal place.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "estimate roots", "table of values", "change of sign"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Part (a): scan for sign changes.",
          workingLatex: "x=-1:\\,1\\,(+),\\; x=0:\\,-2\\,(-) \\quad\\text{and}\\quad x=2:\\,-2\\,(-),\\; x=3:\\,1\\,(+)",
          explanation:
            "y changes sign between x = -1 and x = 0, and between x = 2 and x = 3. Each sign change brackets one root, so the roots lie in the intervals (-1, 0) and (2, 3).",
        },
        {
          stepNumber: 2,
          description: "Part (b): test values to locate the negative root.",
          workingLatex: "y(-0.8) = 0.64 + 1.6 - 2 = 0.24, \\quad y(-0.7) = 0.49 + 1.4 - 2 = -0.11",
          explanation:
            "Inside (-1, 0): at x = -0.8, y ≈ 0.24 (+); at x = -0.7, y ≈ -0.11 (-). The sign change is between -0.8 and -0.7.",
        },
        {
          stepNumber: 3,
          description: "Part (b): choose the closer endpoint.",
          workingLatex: "|y(-0.7)| = 0.11 < |y(-0.8)| = 0.24 \\Rightarrow x \\approx -0.7",
          explanation:
            "The crossing is nearer -0.7 because y is closer to zero there, so the negative root rounds to x ≈ -0.7.",
        },
        {
          stepNumber: 4,
          description: "Part (b): locate the positive root.",
          workingLatex: "y(2.7) = 7.29 - 5.4 - 2 = -0.11, \\quad y(2.8) = 7.84 - 5.6 - 2 = 0.24",
          explanation:
            "Inside (2, 3): at x = 2.7, y ≈ -0.11; at x = 2.8, y ≈ 0.24. The root lies between, nearer 2.7, so x ≈ 2.7.",
        },
        {
          stepNumber: 5,
          description: "Cross-check with the quadratic formula.",
          workingLatex: "x = \\frac{2 \\pm \\sqrt{(-2)^{2} - 4(1)(-2)}}{2} = \\frac{2 \\pm \\sqrt{12}}{2} = 1 \\pm \\sqrt{3} \\approx 2.73,\\; -0.73",
          explanation:
            "Exactly x = 1 ± √3 ≈ 2.73 and -0.73, which round to 2.7 and -0.7, confirming the estimates.",
        },
      ],
      finalAnswer: "\\(x \\approx -0.7 \\text{ or } x \\approx 2.7\\)",
      canonicalAnswer: "{-0.7, 2.7}",
    },
  },
  {
    id: "ga41-025",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = x^{2} + 4x + 1\\) is drawn. Find the equation of the straight line to draw to solve \\(x^{2} + 6x + 4 = 0\\), and state how many solutions the original graph shows this equation has, given the line meets the curve twice. Give the line in the form \\(y = mx + c\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "which line to draw", "rearranging", "number of solutions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the plotted expression.",
          workingLatex: "\\text{plotted: } x^{2} + 4x + 1; \\quad \\text{target: } x^{2} + 6x + 4 = 0",
          explanation:
            "Same x^2 coefficient, so no scaling — just rearrange. The line will be (plotted expression) minus (target expression).",
        },
        {
          stepNumber: 2,
          description: "Compute the line.",
          workingLatex: "L = (x^{2} + 4x + 1) - (x^{2} + 6x + 4) = (4x - 6x) + (1 - 4) = -2x - 3",
          explanation:
            "The x^2 terms cancel. For the x terms: 4x - 6x = -2x. For the constants: 1 - 4 = -3. So the line to draw is y = -2x - 3.",
        },
        {
          stepNumber: 3,
          description: "Verify the rearrangement.",
          workingLatex: "x^{2} + 4x + 1 = -2x - 3 \\Rightarrow x^{2} + 6x + 4 = 0 \\checkmark",
          explanation:
            "Setting curve = line and collecting: x^2 + 4x + 1 + 2x + 3 = x^2 + 6x + 4 = 0, the target, so the line is correct.",
        },
        {
          stepNumber: 4,
          description: "Count the solutions from the intersections.",
          workingLatex: "\\text{line meets curve twice} \\Rightarrow 2 \\text{ solutions}",
          explanation:
            "Each intersection of the line with the curve is one solution. The line meets the curve twice, so the equation has 2 solutions. (Check: discriminant 6^2 - 4(1)(4) = 36 - 16 = 20 > 0.)",
        },
      ],
      finalAnswer: "\\(y = -2x - 3 \\;\\; (2 \\text{ solutions})\\)",
      canonicalAnswer: "y=-2x-3",
    },
  },
  {
    id: "ga41-026",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The curve \\(y = x^{2} - 3x - 1\\) has a minimum at \\((1.5,\\,-3.25)\\), crosses the \\(y\\)-axis at \\((0,\\,-1)\\) and the \\(x\\)-axis near \\((-0.3,\\,0)\\) and \\((3.3,\\,0)\\). The line \\(y = -x + 1\\) crosses the curve at \\((-0.7,\\,1.7)\\) and \\((2.7,\\,-1.7)\\) (1 d.p.). Use the graph to solve (a) \\(x^{2} - 3x - 1 = 0\\) and (b) \\(x^{2} - 2x - 2 = 0\\), each to 1 d.p.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "which line to draw", "intersection with line", "estimate roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Part (a): read where the curve meets the x-axis.",
          workingLatex: "x^{2} - 3x - 1 = 0 \\;\\Leftrightarrow\\; y = 0 \\Rightarrow x \\approx -0.3,\\; 3.3",
          explanation:
            "Solving = 0 means reading the x-intercepts, given as approximately -0.3 and 3.3. (Exactly x = (3 ± √13)/2 ≈ -0.30 and 3.30.)",
        },
        {
          stepNumber: 2,
          description: "Part (b): find which line solves the new equation.",
          workingLatex: "L = (x^{2} - 3x - 1) - (x^{2} - 2x - 2) = (-3x + 2x) + (-1 + 2) = -x + 1",
          explanation:
            "To solve x^2 - 2x - 2 = 0 with this curve, the line is (plotted) − (target): the x^2 terms cancel, leaving -x + 1. Conveniently this is the line already drawn.",
        },
        {
          stepNumber: 3,
          description: "Part (b): verify the line.",
          workingLatex: "x^{2} - 3x - 1 = -x + 1 \\Rightarrow x^{2} - 2x - 2 = 0 \\checkmark",
          explanation:
            "Setting curve = line and collecting: x^2 - 3x - 1 + x - 1 = x^2 - 2x - 2 = 0, the target, so the line y = -x + 1 is exactly the one to use.",
        },
        {
          stepNumber: 4,
          description: "Part (b): read the intersection x-values.",
          workingLatex: "(-0.7,\\,1.7),\\;(2.7,\\,-1.7) \\Rightarrow x \\approx -0.7,\\; 2.7",
          explanation:
            "The curve and line cross at x ≈ -0.7 and 2.7, so these are the solutions of x^2 - 2x - 2 = 0. (Exactly x = 1 ± √3 ≈ -0.73 and 2.73.)",
        },
        {
          stepNumber: 5,
          description: "Collect the answers.",
          workingLatex: "(a)\\; x \\approx -0.3,\\,3.3; \\quad (b)\\; x \\approx -0.7,\\,2.7",
          explanation:
            "Part (a) uses the x-axis crossings; part (b) uses the intersection with the line y = -x + 1. Both are read to 1 decimal place.",
        },
      ],
      finalAnswer: "\\((a)\\; x \\approx -0.3,\\,3.3; \\quad (b)\\; x \\approx -0.7,\\,2.7\\)",
      canonicalAnswer: "{-0.7, 2.7}",
    },
  },
  {
    id: "ga41-027",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "The curve \\(y = x^{2} - 4x + 3\\) has a minimum at \\((2,\\,-1)\\). The horizontal line \\(y = k\\) is drawn. State the range of values of \\(k\\) for which the equation \\(x^{2} - 4x + 3 = k\\) has two distinct solutions, explaining using the graph.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "number of solutions", "turning point", "inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret 'two distinct solutions'.",
          workingLatex: "x^{2} - 4x + 3 = k \\;\\Leftrightarrow\\; \\text{line } y = k \\text{ meets curve twice}",
          explanation:
            "Two distinct solutions means the horizontal line y = k must cut the curve at two separate points.",
        },
        {
          stepNumber: 2,
          description: "Use the minimum to set the threshold.",
          workingLatex: "y_{\\min} = -1 \\text{ at } x = 2",
          explanation:
            "The U-shaped curve has its lowest point at y = -1. A horizontal line above this level cuts the curve twice, a line at exactly y = -1 only touches it once, and a line below never meets it.",
        },
        {
          stepNumber: 3,
          description: "State the range.",
          workingLatex: "k > -1",
          explanation:
            "For two distinct intersection points the line must be strictly above the minimum, so k > -1. (At k = -1 there is exactly one solution; for k < -1 there are none.)",
        },
        {
          stepNumber: 4,
          description: "Confirm with the discriminant.",
          workingLatex: "x^{2} - 4x + (3 - k) = 0, \\quad \\Delta = (-4)^{2} - 4(1)(3 - k) = 4 + 4k",
          explanation:
            "Rearrange to x^2 - 4x + (3 - k) = 0. Two distinct roots require Δ > 0, i.e. 16 - 12 + 4k = 4 + 4k > 0, giving k > -1 — matching the graph.",
        },
      ],
      finalAnswer: "\\(k > -1\\)",
      canonicalAnswer: "k>-1",
    },
  },
  {
    id: "ga41-028",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = x^{2} - 5\\) is drawn. By choosing a suitable straight line to draw on the same axes, explain how the graph can be used to find an estimate for \\(\\sqrt{7}\\), and state the equation of that line.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "which line to draw", "surd estimate", "horizontal line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Express √7 as a root of an equation.",
          workingLatex: "x = \\sqrt{7} \\;\\Rightarrow\\; x^{2} = 7",
          explanation:
            "√7 is the positive solution of x^2 = 7. To read it from the y = x^2 - 5 graph, we rearrange x^2 = 7 so that the plotted expression appears.",
        },
        {
          stepNumber: 2,
          description: "Rearrange so the plotted expression is on the left.",
          workingLatex: "x^{2} = 7 \\;\\Rightarrow\\; x^{2} - 5 = 7 - 5 = 2",
          explanation:
            "Subtract 5 from both sides: the left becomes x^2 - 5, exactly the plotted curve, and the right becomes 2. So the line to draw is y = 2.",
        },
        {
          stepNumber: 3,
          description: "State how the reading gives √7.",
          workingLatex: "\\text{line } y = 2 \\text{ meets curve where } x^{2} = 7 \\Rightarrow x = \\pm\\sqrt{7}",
          explanation:
            "The horizontal line y = 2 crosses the curve where x^2 - 5 = 2, i.e. x^2 = 7. The positive crossing gives x = √7; read its x-coordinate from the graph.",
        },
        {
          stepNumber: 4,
          description: "Check the estimate.",
          workingLatex: "\\sqrt{7} \\approx 2.6 \\quad (2.646\\ldots)",
          explanation:
            "The positive intersection is near x ≈ 2.6, and indeed √7 = 2.6457..., so the line y = 2 gives a good estimate.",
        },
      ],
      finalAnswer: "\\(y = 2\\)",
      canonicalAnswer: "y=2",
    },
  },
  {
    id: "ga41-029",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The curve \\(y = -x^{2} + 4x - 1\\) is an inverted (\\(\\cap\\)-shaped) parabola with a maximum at \\((2,\\,3)\\); it crosses the \\(x\\)-axis near \\((0.3,\\,0)\\) and \\((3.7,\\,0)\\). The line \\(y = 2x - 4\\) meets the curve at \\((-1,\\,-6)\\) and \\((3,\\,2)\\). Use the graph to solve (a) \\(-x^{2} + 4x - 1 = 0\\) (to 1 d.p.) and (b) \\(-x^{2} + 4x - 1 = 2x - 4\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "negative quadratic", "roots as x-intercepts", "intersection with line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Part (a): read where the curve meets the x-axis.",
          workingLatex: "-x^{2} + 4x - 1 = 0 \\;\\Leftrightarrow\\; y = 0 \\Rightarrow x \\approx 0.3,\\; 3.7",
          explanation:
            "Even for a ∩-shaped curve, solving = 0 still means reading the x-intercepts: approximately 0.3 and 3.7. (Exactly x = 2 ± √3 ≈ 0.27 and 3.73.)",
        },
        {
          stepNumber: 2,
          description: "Part (b): interpret as an intersection.",
          workingLatex: "-x^{2} + 4x - 1 = 2x - 4 \\;\\Leftrightarrow\\; \\text{curve } = \\text{line}",
          explanation:
            "The equation is solved where the curve meets the line y = 2x - 4, given as (-1, -6) and (3, 2).",
        },
        {
          stepNumber: 3,
          description: "Part (b): read off the solutions.",
          workingLatex: "(-1,\\,-6),\\;(3,\\,2) \\Rightarrow x = -1 \\text{ or } x = 3",
          explanation:
            "The intersection x-coordinates are -1 and 3, so these are the solutions of part (b).",
        },
        {
          stepNumber: 4,
          description: "Check part (b).",
          workingLatex: "x = 3: \\; -(3)^{2} + 4(3) - 1 = -9 + 12 - 1 = 2, \\quad 2(3) - 4 = 2 \\checkmark",
          explanation:
            "At x = 3 the curve gives -9 + 12 - 1 = 2 and the line gives 2(3) - 4 = 2; equal, confirming x = 3 (and similarly x = -1 gives -6 on both sides).",
        },
      ],
      finalAnswer: "\\((a)\\; x \\approx 0.3,\\,3.7; \\quad (b)\\; x = -1,\\,3\\)",
      canonicalAnswer: "{-1, 3}",
    },
  },
  {
    id: "ga41-030",
    topicRef: "ga41",
    topicTitle: "Solving quadratics graphically",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The graph of \\(y = x^{2} + 2x - 5\\) is drawn. (a) Find the equation of the straight line that should be drawn to solve \\(x^{2} + 5x - 2 = 0\\) using this graph. (b) Hence describe what the x-coordinates of the intersection points of the curve and that line represent. Give the line in the form \\(y = mx + c\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["solving quadratics graphically", "which line to draw", "rearranging", "intersection with line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Part (a): set up the rearrangement.",
          workingLatex: "\\text{plotted: } x^{2} + 2x - 5; \\quad \\text{target: } x^{2} + 5x - 2 = 0",
          explanation:
            "Both quadratics have the same x^2 coefficient, so we rearrange the target so the plotted expression is isolated; the remainder is the line.",
        },
        {
          stepNumber: 2,
          description: "Compute line = (plotted) − (target expression).",
          workingLatex: "L = (x^{2} + 2x - 5) - (x^{2} + 5x - 2) = (2x - 5x) + (-5 + 2) = -3x - 3",
          explanation:
            "The x^2 terms cancel. For the x terms: 2x - 5x = -3x. For the constants: -5 - (-2) = -5 + 2 = -3. So the line to draw is y = -3x - 3.",
        },
        {
          stepNumber: 3,
          description: "Part (a): verify.",
          workingLatex: "x^{2} + 2x - 5 = -3x - 3 \\Rightarrow x^{2} + 5x - 2 = 0 \\checkmark",
          explanation:
            "Setting curve = line and collecting: x^2 + 2x - 5 + 3x + 3 = x^2 + 5x - 2 = 0, exactly the target, so the line y = -3x - 3 is correct.",
        },
        {
          stepNumber: 4,
          description: "Part (b): interpret the intersection x-coordinates.",
          workingLatex: "x\\text{-coords of intersections} = \\text{solutions of } x^{2} + 5x - 2 = 0",
          explanation:
            "Where the curve and the line y = -3x - 3 cross, the two graphs have equal y, which is precisely the condition x^2 + 2x - 5 = -3x - 3, i.e. x^2 + 5x - 2 = 0. So the x-coordinates of the intersection points are exactly the solutions (roots) of x^2 + 5x - 2 = 0.",
        },
      ],
      finalAnswer: "\\(y = -3x - 3\\)",
      canonicalAnswer: "y=-3x-3",
    },
  },
];
