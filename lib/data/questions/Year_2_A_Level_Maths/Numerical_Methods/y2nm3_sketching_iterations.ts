import { Question, CurveDiagramConfig } from "@/lib/types";

/**
 * Year 2 — Numerical Methods § 10.3 Sketching Iterations
 * Ref: y2nm3
 * 70 questions on sketching staircase/cobweb diagrams for the fixed-point
 * iteration x_{n+1} = g(x_n): drawing y = g(x) with y = x, tracking the
 * iterate path, and using the slope of g at the fixed point to classify
 * convergence (staircase vs cobweb) or divergence.
 */

// Build a cobweb/staircase diagram for the iteration x_{n+1} = g(x_n).
// Produces the curve y = g(x), the line y = x, and the iterate path.
function cobwebDiagram(
  g: (x: number) => number,
  xRange: [number, number],
  yRange: [number, number],
  x0: number,
  steps: number,
  opts: { curveLabel?: string } = {},
): CurveDiagramConfig {
  const N = 60;
  const curve: Array<[number, number]> = [];
  const [xMin, xMax] = xRange;
  for (let i = 0; i <= N; i++) {
    const x = xMin + ((xMax - xMin) * i) / N;
    curve.push([x, g(x)]);
  }
  const pathPoints: Array<[number, number]> = [];
  let x = x0;
  pathPoints.push([x, 0]);
  pathPoints.push([x, g(x)]);
  for (let i = 0; i < steps; i++) {
    const yNext = g(x);
    pathPoints.push([yNext, yNext]);
    pathPoints.push([yNext, g(yNext)]);
    x = yNext;
  }
  const lines = [] as NonNullable<CurveDiagramConfig["lines"]>;
  lines.push({ from: [xMin, xMin], to: [xMax, xMax], color: "#64748b", dashed: true });
  for (let i = 0; i < pathPoints.length - 1; i++) {
    lines.push({ from: pathPoints[i]!, to: pathPoints[i + 1]!, color: "#dc2626" });
  }
  return {
    xMin, xMax, yMin: yRange[0], yMax: yRange[1], hideAxes: false,
    curves: [{
      points: curve, color: "#1d4ed8", width: 2,
      label: opts.curveLabel ?? "y = g(x)",
      labelAt: [xMax - (xMax - xMin) * 0.25, g(xMax - (xMax - xMin) * 0.25)],
    }],
    lines,
  };
}

export const questions: Question[] = [
  { id: "y2nm3-001", topicRef: "y2nm3", topicTitle: "Sketching Iteration 01", difficulty: "Foundation", questionText: "Describe, in your own words, what a staircase diagram represents for the iteration \\(x_{n+1} = g(x_{n})\\).", marks: 2, examStyle: false, yearCreated: 2026, tags: ["concept"], workedSolution: { steps: [ { stepNumber: 1, description: "Draw both graphs on one set of axes.", workingLatex: "y = g(x), \\quad y = x", explanation: "A staircase diagram always needs two graphs: the curve \\(y = g(x)\\) which does the iterating, and the line \\(y = x\\) which lets us feed each output back in as the next input. Forgetting the line \\(y = x\\) is the most common slip." }, { stepNumber: 2, description: "Read the alternating vertical/horizontal steps.", workingLatex: "x_{0} \\to x_{1} \\to x_{2} \\to \\cdots", explanation: "From \\(x_{n}\\) on the x-axis you go vertically up to the curve (that height is \\(x_{n+1} = g(x_{n})\\)), then horizontally across to \\(y = x\\) to drop that value back onto the x-axis as the new input. Each pair of moves is one iteration.",
      // REVIEW: clean monotone converging staircase up to the crossing of y=x at alpha=1
      diagram: cobwebDiagram((x) => 0.5 * x + 0.5, [0, 1.5], [0, 1.5], 0, 4) } ], finalAnswer: "A staircase diagram visualises each iteration as a vertical step to \\(y = g(x)\\) followed by a horizontal step to \\(y = x\\)." } },
  { id: "y2nm3-002", topicRef: "y2nm3", topicTitle: "Sketching Iteration 02", difficulty: "Foundation", questionText: "State the difference between a staircase diagram and a cobweb diagram.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["concept"], workedSolution: { steps: [ { stepNumber: 1, description: "Describe the staircase (positive slope).", workingLatex: "0 < g'(\\alpha) < 1", explanation: "When the curve has a positive gradient under 1 at the fixed point, every step lands on the same side of \\(\\alpha\\), so the path climbs (or descends) like a staircase and the iterates approach \\(\\alpha\\) monotonically.",
      // REVIEW: positive-slope staircase converging to alpha=1, no oscillation
      diagram: cobwebDiagram((x) => 0.5 * x + 0.5, [0, 1.5], [0, 1.5], 0, 4) }, { stepNumber: 2, description: "Describe the cobweb (negative slope).", workingLatex: "-1 < g'(\\alpha) < 0", explanation: "When the gradient at the fixed point is negative, each step crosses to the opposite side of \\(\\alpha\\), so the path spirals inward in a box-like cobweb and the iterates oscillate either side of \\(\\alpha\\) while still converging.",
      // REVIEW: negative-slope cobweb spiralling inward to the crossing point
      diagram: cobwebDiagram((x) => -0.5 * x + 1.5, [0, 2], [0, 2], 0.2, 5) } ], finalAnswer: "Staircase: monotone; cobweb: oscillating." } },
  { id: "y2nm3-003", topicRef: "y2nm3", topicTitle: "Sketching Iteration 03", difficulty: "Foundation", questionText: "State the condition on \\(g'(\\alpha)\\) for the iteration \\(x_{n+1} = g(x_{n})\\) to converge to the fixed point \\(\\alpha\\).", marks: 1, examStyle: false, yearCreated: 2026, tags: ["concept"], workedSolution: { steps: [ { stepNumber: 1, description: "State the modulus condition on the gradient.", workingLatex: "|g'(\\alpha)| < 1", explanation: "Convergence depends on the steepness of \\(g\\) at the fixed point, not its sign. Use the modulus: as long as the gradient lies strictly between \\(-1\\) and \\(1\\) the iteration is attracted to \\(\\alpha\\). If \\(|g'(\\alpha)| > 1\\) it diverges, and \\(|g'(\\alpha)| = 1\\) is a borderline case." } ], finalAnswer: "\\(|g'(\\alpha)| < 1\\)." } },
  { id: "y2nm3-004", topicRef: "y2nm3", topicTitle: "Sketching Iteration 04", difficulty: "Foundation", questionText: "Where on a sketch does the fixed point \\(\\alpha\\) of \\(x_{n+1} = g(x_{n})\\) appear?", marks: 1, examStyle: false, yearCreated: 2026, tags: ["concept"], workedSolution: { steps: [ { stepNumber: 1, description: "Use the defining property of a fixed point.", workingLatex: "g(\\alpha) = \\alpha", explanation: "A fixed point is a value that maps to itself, so at \\(x = \\alpha\\) the curve height \\(g(\\alpha)\\) equals the line height \\(\\alpha\\). Geometrically that is exactly where \\(y = g(x)\\) meets \\(y = x\\); it is not simply where the curve crosses an axis.",
      // REVIEW: curve y=g(x) crosses the dashed y=x line at alpha=1
      diagram: cobwebDiagram((x) => 0.5 * x + 0.5, [0, 1.5], [0, 1.5], 0, 4) } ], finalAnswer: "Where the curve \\(y = g(x)\\) intersects the line \\(y = x\\)." } },
  { id: "y2nm3-005", topicRef: "y2nm3", topicTitle: "Sketching Iteration 05", difficulty: "Foundation", questionText: "Sketch the staircase diagram for \\(x_{n+1} = \\tfrac{x_{n} + 3}{4}\\) starting from \\(x_{0} = 0\\), and state the fixed point.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase", "linear"], workedSolution: { steps: [ { stepNumber: 1, description: "Set \\(g(\\alpha) = \\alpha\\) to find the fixed point.", workingLatex: "\\alpha = \\tfrac{\\alpha + 3}{4} \\Rightarrow 4\\alpha = \\alpha + 3 \\Rightarrow \\alpha = 1", explanation: "Replace \\(x_{n+1}\\) and \\(x_{n}\\) both by \\(\\alpha\\), then clear the fraction by multiplying through by 4 before solving. The fixed point is \\(\\alpha = 1\\)." }, { stepNumber: 2, description: "Check the gradient to predict the shape.", workingLatex: "g'(x) = \\tfrac{1}{4}, \\quad 0 < \\tfrac14 < 1", explanation: "The gradient is a constant \\(\\tfrac14\\), which is positive and less than 1, so the diagram is a monotone staircase converging to \\(\\alpha = 1\\)." }, { stepNumber: 3, description: "Plot both graphs and step from \\(x_{0}=0\\).", workingLatex: "y = \\tfrac{x + 3}{4}, \\quad y = x", explanation: "Draw the gentle line \\(y = \\tfrac{x+3}{4}\\) and the line \\(y = x\\). Starting at \\(x_{0} = 0\\), step up to the curve then across to \\(y = x\\); the steps shrink as they climb up to \\(\\alpha = 1\\).", diagram: cobwebDiagram((x) => (x + 3) / 4, [-0.5, 2], [-0.5, 2], 0, 4) } ], finalAnswer: "Monotone staircase converging to \\(\\alpha = 1\\)." } },
  { id: "y2nm3-006", topicRef: "y2nm3", topicTitle: "Sketching Iteration 06", difficulty: "Foundation", questionText: "Sketch the staircase diagram for \\(x_{n+1} = 0.6 x_{n} + 1\\) starting from \\(x_{0} = 0\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase", "linear"], workedSolution: { steps: [ { stepNumber: 1, description: "Solve \\(g(\\alpha) = \\alpha\\) for the fixed point.", workingLatex: "\\alpha = 0.6\\alpha + 1 \\Rightarrow 0.4\\alpha = 1 \\Rightarrow \\alpha = 2.5", explanation: "Set \\(\\alpha = 0.6\\alpha + 1\\), collect the \\(\\alpha\\) terms to get \\(0.4\\alpha = 1\\), then divide. Don't divide by \\(0.6\\) by mistake; subtract first." }, { stepNumber: 2, description: "Read the gradient to classify.", workingLatex: "g'(x) = 0.6, \\quad 0 < 0.6 < 1", explanation: "The slope \\(0.6\\) is positive and below 1, so the iterates climb monotonically to \\(\\alpha = 2.5\\) in a staircase." }, { stepNumber: 3, description: "Plot and step up from \\(x_{0}=0\\).", workingLatex: "y = 0.6x + 1, \\quad y = x", explanation: "From \\(x_{0} = 0\\) the vertical-then-horizontal steps form a staircase whose steps narrow as they approach the crossing of the two lines at \\(\\alpha = 2.5\\).", diagram: cobwebDiagram((x) => 0.6 * x + 1, [0, 3], [0, 3], 0, 5) } ], finalAnswer: "Staircase converging to \\(\\alpha = 2.5\\)." } },
  { id: "y2nm3-007", topicRef: "y2nm3", topicTitle: "Sketching Iteration 07", difficulty: "Foundation", questionText: "Sketch the staircase diagram for \\(x_{n+1} = 0.8 x_{n} + 1\\) starting from \\(x_{0} = 0\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase", "linear"], workedSolution: { steps: [ { stepNumber: 1, description: "Solve \\(g(\\alpha) = \\alpha\\) for the fixed point.", workingLatex: "\\alpha = 0.8\\alpha + 1 \\Rightarrow 0.2\\alpha = 1 \\Rightarrow \\alpha = 5", explanation: "Subtract \\(0.8\\alpha\\) from both sides to get \\(0.2\\alpha = 1\\), then divide. The fixed point is \\(\\alpha = 5\\)." }, { stepNumber: 2, description: "Note the slope is close to 1.", workingLatex: "g'(x) = 0.8, \\quad 0 < 0.8 < 1", explanation: "The slope \\(0.8\\) is still under 1 so it converges, but because it is so close to 1 the staircase steps shrink only slowly, giving slow convergence." }, { stepNumber: 3, description: "Plot and step from \\(x_{0}=0\\).", workingLatex: "y = 0.8x + 1, \\quad y = x", explanation: "Many small steps are needed to crawl up to \\(\\alpha = 5\\); the diagram is a long, gentle staircase rather than a few big steps.", diagram: cobwebDiagram((x) => 0.8 * x + 1, [0, 6], [0, 6], 0, 5) } ], finalAnswer: "Slow monotone staircase converging to \\(\\alpha = 5\\)." } },
  { id: "y2nm3-008", topicRef: "y2nm3", topicTitle: "Sketching Iteration 08", difficulty: "Foundation", questionText: "Sketch the cobweb diagram for \\(x_{n+1} = -\\tfrac{1}{2} x_{n} + 1\\) starting from \\(x_{0} = 0\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb", "linear"], workedSolution: { steps: [ { stepNumber: 1, description: "Solve \\(g(\\alpha) = \\alpha\\) for the fixed point.", workingLatex: "\\alpha = -\\tfrac{1}{2}\\alpha + 1 \\Rightarrow \\tfrac{3}{2}\\alpha = 1 \\Rightarrow \\alpha = \\tfrac{2}{3}", explanation: "Adding \\(\\tfrac12\\alpha\\) to both sides gives \\(\\tfrac32\\alpha = 1\\), so \\(\\alpha = \\tfrac23\\). Watch the sign: the slope is negative, so the \\(\\alpha\\) terms add rather than subtract." }, { stepNumber: 2, description: "Use the negative slope to predict a cobweb.", workingLatex: "g'(x) = -\\tfrac12, \\quad -1 < -\\tfrac12 < 0", explanation: "A negative gradient with modulus under 1 means a cobweb: each step lands on the opposite side of \\(\\alpha\\), so the path boxes inward instead of climbing." }, { stepNumber: 3, description: "Plot and spiral in from \\(x_{0}=0\\).", workingLatex: "y = -\\tfrac12 x + 1, \\quad y = x", explanation: "From \\(x_{0} = 0\\) the path overshoots then undershoots \\(\\alpha = \\tfrac23\\), tracing a shrinking rectangular cobweb that converges to the crossing point.", diagram: cobwebDiagram((x) => -0.5 * x + 1, [0, 1.5], [0, 1.5], 0, 5) } ], finalAnswer: "Cobweb converging to \\(\\alpha = \\tfrac{2}{3}\\)." } },
  { id: "y2nm3-009", topicRef: "y2nm3", topicTitle: "Sketching Iteration 09", difficulty: "Foundation", questionText: "Sketch the cobweb diagram for \\(x_{n+1} = 2 - \\tfrac{1}{2} x_{n}\\) starting from \\(x_{0} = 0\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb", "linear"], workedSolution: { steps: [ { stepNumber: 1, description: "Solve \\(g(\\alpha) = \\alpha\\) for the fixed point.", workingLatex: "\\alpha = 2 - \\tfrac{\\alpha}{2} \\Rightarrow \\tfrac{3}{2}\\alpha = 2 \\Rightarrow \\alpha = \\tfrac{4}{3}", explanation: "Add \\(\\tfrac{\\alpha}{2}\\) to both sides to get \\(\\tfrac32\\alpha = 2\\), then multiply by \\(\\tfrac23\\). The fixed point is \\(\\alpha = \\tfrac43\\)." }, { stepNumber: 2, description: "Identify the negative slope.", workingLatex: "g'(x) = -\\tfrac12, \\quad |g'| = \\tfrac12 < 1", explanation: "The slope is \\(-\\tfrac12\\): negative so the iterates alternate sides (cobweb), and modulus under 1 so they still converge." }, { stepNumber: 3, description: "Plot and spiral in from \\(x_{0}=0\\).", workingLatex: "y = 2 - \\tfrac12 x, \\quad y = x", explanation: "Starting at \\(x_{0} = 0\\) the cobweb encloses \\(\\alpha = \\tfrac43\\), each box smaller than the last as it converges to the crossing point.", diagram: cobwebDiagram((x) => 2 - 0.5 * x, [0, 2.5], [0, 2.5], 0, 5) } ], finalAnswer: "Cobweb converging to \\(\\alpha = \\tfrac{4}{3}\\)." } },
  { id: "y2nm3-010", topicRef: "y2nm3", topicTitle: "Sketching Iteration 10", difficulty: "Foundation", questionText: "Describe the behaviour of the iteration \\(x_{n+1} = 1.5 x_{n} - 0.5\\) starting from \\(x_{0} = 1.1\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["staircase", "divergence"], workedSolution: { steps: [ { stepNumber: 1, description: "Solve \\(g(\\alpha) = \\alpha\\) for the fixed point.", workingLatex: "\\alpha = 1.5\\alpha - 0.5 \\Rightarrow 0.5\\alpha = 0.5 \\Rightarrow \\alpha = 1", explanation: "Subtract \\(\\alpha\\) from both sides to reach \\(0 = 0.5\\alpha - 0.5\\), giving \\(\\alpha = 1\\). The fixed point exists even though the iteration runs away from it." }, { stepNumber: 2, description: "Check the gradient against 1.", workingLatex: "g'(x) = 1.5, \\quad |1.5| > 1", explanation: "The slope is \\(1.5\\), which exceeds 1, so the fixed point is repelling. The sign is positive, so the runaway is a staircase rather than a cobweb." }, { stepNumber: 3, description: "Describe the diverging staircase from \\(x_{0}=1.1\\).", workingLatex: "x_{0} = 1.1 \\to 1.15 \\to 1.225 \\to \\cdots", explanation: "Because \\(x_{0} = 1.1\\) sits just above \\(\\alpha = 1\\), each step is bigger than the last and the staircase marches away from the fixed point, never returning.", diagram: cobwebDiagram((x) => 1.5 * x - 0.5, [0.6, 2.2], [0.6, 2.2], 1.1, 3) } ], finalAnswer: "Staircase diverging from \\(\\alpha = 1\\)." } },
  { id: "y2nm3-011", topicRef: "y2nm3", topicTitle: "Sketching Iteration 11", difficulty: "Foundation", questionText: "Describe the behaviour of the iteration \\(x_{n+1} = -2 x_{n} + 3\\) starting from \\(x_{0} = 1.1\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["cobweb", "divergence"], workedSolution: { steps: [
  { stepNumber: 1, description: "Find the fixed point", workingLatex: "\\alpha = -2\\alpha + 3 \\Rightarrow 3\\alpha = 3 \\Rightarrow \\alpha = 1", explanation: "The fixed point is where the iteration stops moving, so set \\(\\alpha = g(\\alpha)\\). Collect the \\(\\alpha\\) terms on one side rather than guessing." },
  { stepNumber: 2, description: "Read off the slope of \\(g\\)", workingLatex: "g'(x) = -2", explanation: "For the linear map \\(g(x) = -2x + 3\\) the gradient is just the coefficient of \\(x\\). Keep the minus sign — it controls whether you get a staircase or a cobweb." },
  { stepNumber: 3, description: "Classify using \\(|g'(\\alpha)|\\)", workingLatex: "|g'(\\alpha)| = 2 > 1", explanation: "Because the slope is negative the iterates jump from one side of \\(\\alpha\\) to the other (cobweb), and because \\(|g'|>1\\) each jump is larger, so the cobweb spirals outward and diverges. A common slip is to forget the sign and call it a staircase.",
    diagram: cobwebDiagram((x) => -2 * x + 3, [0.5, 1.8], [0.5, 1.8], 1.1, 2) }
], finalAnswer: "Cobweb spiralling outward from \\(\\alpha = 1\\); diverges." } },
  { id: "y2nm3-012", topicRef: "y2nm3", topicTitle: "Sketching Iteration 12", difficulty: "Foundation", questionText: "If \\(g'(\\alpha) = 0\\), describe the shape of the staircase diagram near the fixed point.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["concept"], workedSolution: { steps: [
  { stepNumber: 1, description: "Interpret a zero slope at \\(\\alpha\\)", workingLatex: "g'(\\alpha) = 0", explanation: "A zero gradient means the curve \\(y = g(x)\\) crosses \\(y = x\\) almost horizontally, so the vertical step to the curve lands extremely close to the \\(y = x\\) line." },
  { stepNumber: 2, description: "Describe the resulting steps", workingLatex: "", explanation: "The flat tangent makes each iterate slam almost exactly onto \\(\\alpha\\), so the staircase steps shrink incredibly fast — this is quadratic convergence, far quicker than an ordinary staircase. Do not call it 'no convergence'; it is the fastest kind.",
    diagram: cobwebDiagram((x) => 0.5 * (x + 2 / x), [0.6, 2.6], [0.6, 2.6], 2.5, 3) }
], finalAnswer: "Very rapid convergence; iterates jump almost exactly onto \\(\\alpha\\)." } },
  { id: "y2nm3-013", topicRef: "y2nm3", topicTitle: "Sketching Iteration 13", difficulty: "Foundation", questionText: "On a staircase diagram, from which element of the diagram do you read the value of \\(x_{1}\\)?", marks: 2, examStyle: false, yearCreated: 2026, tags: ["concept"], workedSolution: { steps: [
  { stepNumber: 1, description: "Recall what \\(x_{1}\\) is", workingLatex: "x_{1} = g(x_{0})", explanation: "The first iterate is the output of \\(g\\) applied to the start value \\(x_{0}\\). On the picture that output is a height on the curve." },
  { stepNumber: 2, description: "Locate that height on the sketch", workingLatex: "", explanation: "Go vertically up from \\(x_{0}\\) on the \\(x\\)-axis until you hit the curve \\(y = g(x)\\); the \\(y\\)-coordinate there is \\(x_{1}\\). Do not read it off the line \\(y = x\\) — that line is only used afterwards to carry \\(x_{1}\\) back onto the \\(x\\)-axis.",
    // REVIEW: converging staircase from x0=0 toward alpha=1; first vertical segment height should equal x1=0.5
    diagram: cobwebDiagram((x) => 0.5 * x + 0.5, [0, 1.5], [0, 1.5], 0, 3) }
], finalAnswer: "The height of \\(y = g(x)\\) directly above \\(x_{0}\\)." } },
  { id: "y2nm3-014", topicRef: "y2nm3", topicTitle: "Sketching Iteration 14", difficulty: "Foundation", questionText: "State the slope of the line \\(y = x\\) and explain why it always appears on a staircase diagram.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["concept"], workedSolution: { steps: [
  { stepNumber: 1, description: "State the slope of \\(y = x\\)", workingLatex: "\\text{slope of } y = x \\text{ is } 1", explanation: "The line \\(y = x\\) has gradient 1 and passes through the origin — it is the set of points where output equals input." },
  { stepNumber: 2, description: "Explain its role in the diagram", workingLatex: "x_{n+1} = g(x_{n})", explanation: "After stepping vertically to the curve you have the value \\(g(x_{n})\\) as a height; the horizontal step across to \\(y = x\\) turns that height back into an \\(x\\)-coordinate, ready to be the next input \\(x_{n+1}\\). Without the \\(y = x\\) line you cannot recycle the output, so the staircase cannot be built.",
    // REVIEW: dashed y=x line of slope 1 with a converging staircase climbing to alpha=1
    diagram: cobwebDiagram((x) => 0.5 * x + 0.5, [0, 1.5], [0, 1.5], 0, 3) }
], finalAnswer: "Slope 1; it lets us reflect \\(y\\)-values back as \\(x\\)-values." } },
  { id: "y2nm3-015", topicRef: "y2nm3", topicTitle: "Sketching Iteration 15", difficulty: "Foundation", questionText: "A diagram shows \\(y = g(x)\\) crossing \\(y = x\\) at \\(\\alpha\\) with slope approximately 0.2. Classify the iteration's behaviour.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["classification"], workedSolution: { steps: [
  { stepNumber: 1, description: "Check the size of the slope", workingLatex: "|g'(\\alpha)| = 0.2 < 1", explanation: "Since the magnitude of the gradient at the fixed point is below 1, the iteration converges to \\(\\alpha\\)." },
  { stepNumber: 2, description: "Use the sign to pick the pattern", workingLatex: "0 < g'(\\alpha) < 1", explanation: "A positive slope means iterates approach \\(\\alpha\\) from one side without crossing it, giving a monotone staircase rather than an oscillating cobweb.",
    diagram: cobwebDiagram((x) => 0.2 * x + 0.8, [0, 1.5], [0, 1.5], 0, 5) }
], finalAnswer: "Staircase converging to \\(\\alpha\\)." } },
  { id: "y2nm3-016", topicRef: "y2nm3", topicTitle: "Sketching Iteration 16", difficulty: "Foundation", questionText: "A diagram shows \\(y = g(x)\\) crossing \\(y = x\\) at \\(\\alpha\\) with slope approximately \\(-0.3\\). Classify the iteration's behaviour.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["classification"], workedSolution: { steps: [
  { stepNumber: 1, description: "Check the size of the slope", workingLatex: "|g'(\\alpha)| = 0.3 < 1", explanation: "The magnitude of the gradient is less than 1, so the iteration converges to \\(\\alpha\\)." },
  { stepNumber: 2, description: "Use the sign to pick the pattern", workingLatex: "-1 < g'(\\alpha) < 0", explanation: "A negative slope makes successive iterates land on alternate sides of \\(\\alpha\\), producing a converging cobweb. Do not mistake a small negative slope for a staircase — the sign, not the size, decides the shape.",
    diagram: cobwebDiagram((x) => -0.3 * x + 1.3, [0, 1.8], [0, 1.8], 0.2, 6) }
], finalAnswer: "Cobweb converging to \\(\\alpha\\)." } },
  { id: "y2nm3-017", topicRef: "y2nm3", topicTitle: "Sketching Iteration 17", difficulty: "Foundation", questionText: "A diagram shows \\(y = g(x)\\) crossing \\(y = x\\) at \\(\\alpha\\) with slope approximately 1.4. Classify the iteration's behaviour.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["classification", "divergence"], workedSolution: { steps: [
  { stepNumber: 1, description: "Compare the slope with 1", workingLatex: "g'(\\alpha) = 1.4 > 1", explanation: "The magnitude of the gradient exceeds 1, so the iteration cannot converge — it moves away from \\(\\alpha\\)." },
  { stepNumber: 2, description: "Use the positive sign to pick the pattern", workingLatex: "|g'(\\alpha)| > 1", explanation: "A positive slope keeps the iterates on one side of \\(\\alpha\\), so the steps form a staircase that grows outward rather than a cobweb. The key is \\(|g'|>1\\) meaning divergence.",
    diagram: cobwebDiagram((x) => 1.4 * x - 0.4, [0.5, 2], [0.5, 2], 1.1, 3) }
], finalAnswer: "Staircase diverging (away from \\(\\alpha\\))." } },
  { id: "y2nm3-018", topicRef: "y2nm3", topicTitle: "Sketching Iteration 18", difficulty: "Foundation", questionText: "A diagram shows \\(y = g(x)\\) crossing \\(y = x\\) at \\(\\alpha\\) with slope approximately \\(-1.5\\). Classify the iteration's behaviour.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["classification", "divergence"], workedSolution: { steps: [
  { stepNumber: 1, description: "Compare the slope with 1 in size", workingLatex: "|g'(\\alpha)| = 1.5 > 1", explanation: "Because the magnitude of the gradient is greater than 1, the iteration diverges away from \\(\\alpha\\)." },
  { stepNumber: 2, description: "Use the negative sign to pick the pattern", workingLatex: "g'(\\alpha) < -1", explanation: "The negative slope makes iterates alternate sides of \\(\\alpha\\), and because \\(|g'|>1\\) each swing is bigger, so the cobweb spirals outward and diverges.",
    diagram: cobwebDiagram((x) => -1.5 * x + 2.5, [0.3, 1.7], [0.3, 1.7], 1.1, 2) }
], finalAnswer: "Cobweb spiralling outward — diverges." } },
  { id: "y2nm3-019", topicRef: "y2nm3", topicTitle: "Sketching Iteration 19", difficulty: "Standard", questionText: "Sketch the staircase diagram for \\(x_{n+1} = \\sqrt{x_{n} + 2}\\) starting from \\(x_{0} = 0\\). State the fixed point.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [
  { stepNumber: 1, description: "Set up the fixed-point equation", workingLatex: "\\alpha = \\sqrt{\\alpha + 2}", explanation: "The fixed point satisfies \\(\\alpha = g(\\alpha)\\). Square both sides carefully to clear the root." },
  { stepNumber: 2, description: "Solve the quadratic", workingLatex: "\\alpha^{2} - \\alpha - 2 = 0 \\Rightarrow (\\alpha - 2)(\\alpha + 1) = 0", explanation: "Squaring gives \\(\\alpha^2 = \\alpha + 2\\). Reject \\(\\alpha = -1\\) because the square root is non-negative, leaving \\(\\alpha = 2\\)." },
  { stepNumber: 3, description: "Confirm the staircase pattern", workingLatex: "g'(x) = \\tfrac{1}{2\\sqrt{x+2}},\\ g'(2) = \\tfrac{1}{4}", explanation: "The slope at \\(\\alpha = 2\\) is positive and less than 1, so the iterates climb monotonically toward \\(\\alpha\\): a converging staircase, not a cobweb.",
    diagram: cobwebDiagram((x) => Math.sqrt(x + 2), [0, 2.5], [0, 2.5], 0, 5) }
], finalAnswer: "Staircase converging to \\(\\alpha = 2\\)." } },
  { id: "y2nm3-020", topicRef: "y2nm3", topicTitle: "Sketching Iteration 20", difficulty: "Standard", questionText: "Sketch the staircase diagram for \\(x_{n+1} = \\sqrt[3]{x_{n} + 1}\\) starting from \\(x_{0} = 1\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [
  { stepNumber: 1, description: "Set up the fixed-point equation", workingLatex: "\\alpha = \\sqrt[3]{\\alpha + 1} \\Rightarrow \\alpha^{3} = \\alpha + 1", explanation: "Set \\(\\alpha = g(\\alpha)\\) and cube both sides to remove the cube root." },
  { stepNumber: 2, description: "Identify the root numerically", workingLatex: "\\alpha^{3} - \\alpha - 1 = 0 \\Rightarrow \\alpha \\approx 1.3247", explanation: "This cubic has no nice exact root, so quote the real solution to a few decimal places — there is only one real root." },
  { stepNumber: 3, description: "Confirm the staircase pattern", workingLatex: "g'(x) = \\tfrac{1}{3}(x+1)^{-2/3},\\ g'(\\alpha) \\approx 0.19", explanation: "The slope at the fixed point is small and positive, so the iterates approach \\(\\alpha\\) monotonically from one side — a converging staircase.",
    diagram: cobwebDiagram((x) => Math.cbrt(x + 1), [0.5, 2], [0.5, 2], 1, 5) }
], finalAnswer: "Staircase converging to \\(\\alpha \\approx 1.32\\)." } },
  { id: "y2nm3-021", topicRef: "y2nm3", topicTitle: "Sketching Iteration 21", difficulty: "Standard", questionText: "Sketch the cobweb diagram for \\(x_{n+1} = \\cos x_{n}\\) (radians) starting from \\(x_{0} = 0\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb", "trigonometric"], workedSolution: { steps: [ { stepNumber: 1, description: "Set up the fixed-point equation", workingLatex: "\\alpha = \\cos \\alpha", explanation: "The fixed point is where \\(y = \\cos x\\) meets \\(y = x\\), so put \\(g(\\alpha) = \\alpha\\). This has no neat closed form, so solve numerically." }, { stepNumber: 2, description: "State the numerical fixed point", workingLatex: "\\alpha \\approx 0.7391", explanation: "This is the well-known Dottie number. Make sure your calculator is in RADIANS, not degrees — using degrees gives a completely different value." }, { stepNumber: 3, description: "Compute the slope at the fixed point", workingLatex: "g'(x) = -\\sin x,\\quad g'(\\alpha) \\approx -\\sin(0.7391) \\approx -0.674", explanation: "Differentiate \\(g(x) = \\cos x\\). The slope is negative, which tells us the iterates will alternate either side of \\(\\alpha\\) rather than creeping in from one side." }, { stepNumber: 4, description: "Classify and sketch the cobweb", workingLatex: "-1 < g'(\\alpha) < 0", explanation: "Since the slope is negative with \\(|g'(\\alpha)| < 1\\), the diagram is a converging cobweb that boxes inward onto \\(\\alpha\\). Draw \\(y = \\cos x\\), the line \\(y = x\\), then step vertically to the curve and horizontally to the line, spiralling toward the crossing.", diagram: cobwebDiagram((x) => Math.cos(x), [0, 1.3], [0, 1.3], 0, 6) } ], finalAnswer: "Cobweb converging to \\(\\alpha \\approx 0.7391\\)." } },
  { id: "y2nm3-022", topicRef: "y2nm3", topicTitle: "Sketching Iteration 22", difficulty: "Standard", questionText: "Sketch the cobweb diagram for \\(x_{n+1} = e^{-x_{n}}\\) starting from \\(x_{0} = 0\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb", "exponential"], workedSolution: { steps: [ { stepNumber: 1, description: "Set up the fixed-point equation", workingLatex: "\\alpha = e^{-\\alpha}", explanation: "The fixed point is where \\(y = e^{-x}\\) crosses \\(y = x\\). There is no algebraic solution, so find \\(\\alpha\\) numerically." }, { stepNumber: 2, description: "State the numerical fixed point", workingLatex: "\\alpha \\approx 0.5671", explanation: "This is the omega constant. A quick check: \\(e^{-0.5671} \\approx 0.567\\), so it is consistent." }, { stepNumber: 3, description: "Compute the slope at the fixed point", workingLatex: "g'(x) = -e^{-x},\\quad g'(\\alpha) = -e^{-\\alpha} = -\\alpha \\approx -0.567", explanation: "Because \\(e^{-\\alpha} = \\alpha\\) at the fixed point, the slope equals \\(-\\alpha\\). The negative sign means oscillation, not a one-sided staircase." }, { stepNumber: 4, description: "Classify and sketch the cobweb", workingLatex: "-1 < g'(\\alpha) < 0", explanation: "The slope is negative and \\(|g'(\\alpha)| < 1\\), so the iterates alternate either side of \\(\\alpha\\) while closing in: a converging cobweb. Sketch the falling curve \\(y = e^{-x}\\) with \\(y = x\\) and box inward onto the crossing.", diagram: cobwebDiagram((x) => Math.exp(-x), [0, 1.2], [0, 1.2], 0, 6) } ], finalAnswer: "Cobweb converging to \\(\\alpha \\approx 0.5671\\)." } },
  { id: "y2nm3-023", topicRef: "y2nm3", topicTitle: "Sketching Iteration 23", difficulty: "Standard", questionText: "Sketch the staircase diagram for \\(x_{n+1} = \\ln(x_{n} + 2)\\) starting from \\(x_{0} = 0\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase", "log"], workedSolution: { steps: [ { stepNumber: 1, description: "Set up the fixed-point equation", workingLatex: "\\alpha = \\ln(\\alpha + 2)", explanation: "The fixed point is where \\(y = \\ln(x + 2)\\) meets \\(y = x\\). This transcendental equation is solved numerically." }, { stepNumber: 2, description: "State the numerical fixed point", workingLatex: "\\alpha \\approx 1.146", explanation: "Check: \\(\\ln(1.146 + 2) = \\ln(3.146) \\approx 1.146\\), confirming the value." }, { stepNumber: 3, description: "Compute the slope at the fixed point", workingLatex: "g'(x) = \\tfrac{1}{x + 2},\\quad g'(\\alpha) = \\tfrac{1}{3.146} \\approx 0.318", explanation: "Differentiate \\(\\ln(x+2)\\). The slope is positive and less than 1, so iterates approach \\(\\alpha\\) from one side — a staircase, not a cobweb." }, { stepNumber: 4, description: "Classify and sketch the staircase", workingLatex: "0 < g'(\\alpha) < 1", explanation: "With a positive slope below 1 the diagram is a monotone staircase climbing toward \\(\\alpha\\). Draw \\(y = \\ln(x+2)\\) and \\(y = x\\), then step up to the curve and across to the line repeatedly.", diagram: cobwebDiagram((x) => Math.log(x + 2), [0, 2], [0, 2], 0, 5) } ], finalAnswer: "Staircase converging to \\(\\alpha \\approx 1.146\\)." } },
  { id: "y2nm3-024", topicRef: "y2nm3", topicTitle: "Sketching Iteration 24", difficulty: "Standard", questionText: "Sketch the cobweb diagram for \\(x_{n+1} = 1 + \\tfrac{1}{x_{n}}\\) starting from \\(x_{0} = 1\\). State the fixed point.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb"], workedSolution: { steps: [ { stepNumber: 1, description: "Set up and clear the fixed-point equation", workingLatex: "\\alpha = 1 + \\tfrac{1}{\\alpha} \\Rightarrow \\alpha^{2} - \\alpha - 1 = 0", explanation: "Put \\(g(\\alpha) = \\alpha\\) and multiply through by \\(\\alpha\\) to clear the fraction, giving a tidy quadratic." }, { stepNumber: 2, description: "Solve for the positive root", workingLatex: "\\alpha = \\tfrac{1 + \\sqrt{5}}{2} \\approx 1.618", explanation: "The quadratic formula gives \\(\\tfrac{1 \\pm \\sqrt{5}}{2}\\). Take the positive root — the golden ratio \\(\\phi\\) — since the iterates from \\(x_0 = 1\\) stay positive." }, { stepNumber: 3, description: "Compute the slope at the fixed point", workingLatex: "g'(x) = -\\tfrac{1}{x^{2}},\\quad g'(\\phi) = -\\tfrac{1}{\\phi^{2}} \\approx -0.382", explanation: "Differentiate \\(1 + 1/x\\). The slope is negative with \\(|g'| < 1\\), so we get a converging cobweb." }, { stepNumber: 4, description: "Classify and sketch the cobweb", workingLatex: "-1 < g'(\\phi) < 0", explanation: "The negative slope makes the iterates alternate above and below \\(\\phi\\) while closing in. Sketch \\(y = 1 + 1/x\\) with \\(y = x\\) and box inward onto the crossing at \\(\\phi\\).", diagram: cobwebDiagram((x) => 1 + 1 / x, [0.7, 2.2], [0.7, 2.2], 1, 6) } ], finalAnswer: "Cobweb converging to \\(\\phi = \\tfrac{1 + \\sqrt{5}}{2}\\)." } },
  { id: "y2nm3-025", topicRef: "y2nm3", topicTitle: "Sketching Iteration 25", difficulty: "Standard", questionText: "Sketch the staircase diagram for the Babylonian iteration \\(x_{n+1} = \\tfrac{1}{2}(x_{n} + \\tfrac{5}{x_{n}})\\) starting from \\(x_{0} = 1\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase", "babylonian"], workedSolution: { steps: [ { stepNumber: 1, description: "Find the fixed point", workingLatex: "\\alpha = \\tfrac{1}{2}\\left(\\alpha + \\tfrac{5}{\\alpha}\\right) \\Rightarrow \\alpha^{2} = 5 \\Rightarrow \\alpha = \\sqrt{5} \\approx 2.236", explanation: "Setting \\(g(\\alpha) = \\alpha\\) and simplifying gives \\(\\alpha^2 = 5\\). This is exactly why the Babylonian method computes square roots." }, { stepNumber: 2, description: "Compute the slope at the fixed point", workingLatex: "g'(x) = \\tfrac{1}{2}\\left(1 - \\tfrac{5}{x^{2}}\\right),\\quad g'(\\sqrt{5}) = \\tfrac{1}{2}(1 - 1) = 0", explanation: "At \\(x = \\sqrt{5}\\) the bracket vanishes, so the slope is exactly zero. A zero slope signals second-order (quadratic) convergence — the error roughly squares each step." }, { stepNumber: 3, description: "Classify and sketch the staircase", workingLatex: "g'(\\alpha) = 0", explanation: "With a flat tangent at \\(\\alpha\\), the curve is nearly horizontal there, so each iterate slams almost exactly onto \\(\\sqrt{5}\\). Draw the curve and \\(y = x\\); the staircase collapses onto the crossing in just two or three steps.", diagram: cobwebDiagram((x) => 0.5 * (x + 5 / x), [0.8, 3.2], [0.8, 3.2], 1, 3) } ], finalAnswer: "Staircase with very rapid convergence to \\(\\sqrt{5}\\)." } },
  { id: "y2nm3-026", topicRef: "y2nm3", topicTitle: "Sketching Iteration 26", difficulty: "Standard", questionText: "Sketch the cobweb diagram for \\(x_{n+1} = \\tfrac{1}{2}\\cos x_{n}\\) starting from \\(x_{0} = 0\\). Work in radians.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb", "trigonometric"], workedSolution: { steps: [ { stepNumber: 1, description: "Set up the fixed-point equation", workingLatex: "\\alpha = \\tfrac{1}{2}\\cos \\alpha", explanation: "The fixed point is where \\(y = \\tfrac{1}{2}\\cos x\\) meets \\(y = x\\). Keep your calculator in radians throughout." }, { stepNumber: 2, description: "State the numerical fixed point", workingLatex: "\\alpha \\approx 0.4502", explanation: "Check: \\(\\tfrac{1}{2}\\cos(0.4502) \\approx 0.5 \\times 0.900 = 0.450\\), confirming the value." }, { stepNumber: 3, description: "Compute the slope at the fixed point", workingLatex: "g'(x) = -\\tfrac{1}{2}\\sin x,\\quad g'(\\alpha) \\approx -\\tfrac{1}{2}\\sin(0.4502) \\approx -0.217", explanation: "Differentiate \\(\\tfrac{1}{2}\\cos x\\). The \\(\\tfrac{1}{2}\\) factor makes the slope small in magnitude, so convergence is quick." }, { stepNumber: 4, description: "Classify and sketch the cobweb", workingLatex: "-1 < g'(\\alpha) < 0", explanation: "Negative slope with \\(|g'(\\alpha)| < 1\\) gives a converging cobweb; the small magnitude means it boxes in tightly within a couple of steps. Draw \\(y = \\tfrac{1}{2}\\cos x\\) and \\(y = x\\) and spiral onto the crossing.", diagram: cobwebDiagram((x) => 0.5 * Math.cos(x), [0, 0.7], [0, 0.7], 0, 5) } ], finalAnswer: "Cobweb converging to \\(\\alpha \\approx 0.4502\\)." } },
  { id: "y2nm3-027", topicRef: "y2nm3", topicTitle: "Sketching Iteration 27", difficulty: "Standard", questionText: "Sketch the staircase diagram for \\(x_{n+1} = \\sqrt{3 x_{n} - 2}\\) starting from \\(x_{0} = 1.5\\) and show convergence to \\(\\alpha = 2\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [ { stepNumber: 1, description: "Find the fixed points", workingLatex: "\\alpha = \\sqrt{3\\alpha - 2} \\Rightarrow \\alpha^{2} = 3\\alpha - 2 \\Rightarrow \\alpha^{2} - 3\\alpha + 2 = 0", explanation: "Square both sides of \\(g(\\alpha) = \\alpha\\) to remove the root, then collect into a quadratic." }, { stepNumber: 2, description: "Solve the quadratic", workingLatex: "(\\alpha - 1)(\\alpha - 2) = 0 \\Rightarrow \\alpha = 1 \\text{ or } \\alpha = 2", explanation: "There are two candidate fixed points. We must test each one's stability rather than assume which the iteration reaches." }, { stepNumber: 3, description: "Test stability with the derivative", workingLatex: "g'(x) = \\tfrac{3}{2\\sqrt{3x - 2}};\\ g'(2) = \\tfrac{3}{4} = 0.75,\\ g'(1) = \\tfrac{3}{2} = 1.5", explanation: "At \\(\\alpha = 2\\) the slope is below 1 (attracting); at \\(\\alpha = 1\\) it exceeds 1 (repelling). So iterates starting near 1 are pushed toward 2." }, { stepNumber: 4, description: "Classify and sketch the staircase", workingLatex: "0 < g'(2) < 1", explanation: "From \\(x_0 = 1.5\\) the positive slope under 1 produces a monotone staircase climbing up to \\(\\alpha = 2\\). (Note \\(x_0 = 1\\) would be stuck, since \\(\\alpha = 1\\) is itself a repelling fixed point.) Draw \\(y = \\sqrt{3x - 2}\\) with \\(y = x\\); step up to the curve and across to the line toward the crossing at 2.", diagram: cobwebDiagram((x) => Math.sqrt(3 * x - 2), [0.8, 2.5], [0.8, 2.5], 1.5, 5) } ], finalAnswer: "Staircase converging to \\(\\alpha = 2\\)." } },
  { id: "y2nm3-028", topicRef: "y2nm3", topicTitle: "Sketching Iteration 28", difficulty: "Standard", questionText: "Sketch the staircase diagram for \\(x_{n+1} = 3 - \\tfrac{2}{x_{n}}\\) starting from \\(x_{0} = 2\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [ { stepNumber: 1, description: "Set up and clear the fixed-point equation", workingLatex: "\\alpha = 3 - \\tfrac{2}{\\alpha} \\Rightarrow \\alpha^{2} - 3\\alpha + 2 = 0", explanation: "Put \\(g(\\alpha) = \\alpha\\) and multiply by \\(\\alpha\\) to clear the fraction, giving a quadratic." }, { stepNumber: 2, description: "Solve for the fixed points", workingLatex: "(\\alpha - 1)(\\alpha - 2) = 0 \\Rightarrow \\alpha = 1 \\text{ or } \\alpha = 2", explanation: "Two fixed points exist. The starting value \\(x_0 = 2\\) sits exactly on one of them." }, { stepNumber: 3, description: "Check the slope at the fixed point", workingLatex: "g'(x) = \\tfrac{2}{x^{2}};\\ g'(2) = \\tfrac{2}{4} = 0.5,\\ g'(1) = 2", explanation: "At \\(\\alpha = 2\\) the slope is 0.5 (attracting); at \\(\\alpha = 1\\) it is 2 (repelling). Starting exactly at 2 means the iteration is already at the stable fixed point." }, { stepNumber: 4, description: "Sketch the behaviour", workingLatex: "x_{1} = 3 - \\tfrac{2}{2} = 2", explanation: "Since \\(g(2) = 2\\), every iterate stays at 2; the path is a single point on \\(y = x\\). A tiny nudge would still return because the slope there is under 1.", diagram: cobwebDiagram((x) => 3 - 2 / x, [1, 3], [1, 3], 2, 3) } ], finalAnswer: "\\(\\alpha = 2\\) is attractive (slope 0.5); the diagram stays at \\(\\alpha = 2\\)." } },
  { id: "y2nm3-029", topicRef: "y2nm3", topicTitle: "Sketching Iteration 29", difficulty: "Standard", questionText: "For the iteration in Q28, show that starting from \\(x_{0} = 1.2\\) iteration diverges away from \\(\\alpha = 1\\) and lands on the other fixed point.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase", "stability"], workedSolution: { steps: [ { stepNumber: 1, description: "Classify both fixed points", workingLatex: "g'(x) = \\tfrac{2}{x^{2}};\\ g'(1) = 2 \\ (>1),\\ g'(2) = 0.5 \\ (<1)", explanation: "\\(\\alpha = 1\\) is unstable because \\(|g'| > 1\\); \\(\\alpha = 2\\) is stable because \\(|g'| < 1\\). So iterates are repelled from 1 and attracted to 2." }, { stepNumber: 2, description: "Iterate a few terms from x0 = 1.2", workingLatex: "x_{1} = 3 - \\tfrac{2}{1.2} \\approx 1.333,\\ x_{2} \\approx 1.5,\\ x_{3} \\approx 1.667", explanation: "Each step moves further from 1 and closer to 2, confirming numerically that the unstable point is left behind." }, { stepNumber: 3, description: "Continue toward the stable point", workingLatex: "x_{4} \\approx 1.8,\\ x_{5} \\approx 1.889 \\to 2", explanation: "The terms keep climbing, slowing as they near 2 because the slope there is only 0.5. The sequence settles on the stable fixed point." }, { stepNumber: 4, description: "Sketch the monotone staircase", workingLatex: "0 < g'(2) < 1", explanation: "Draw \\(y = 3 - 2/x\\) with \\(y = x\\). Starting just right of 1, the staircase climbs monotonically away from 1 and converges onto 2 — exactly the picture of an unstable point repelling and a stable point attracting.", diagram: cobwebDiagram((x) => 3 - 2 / x, [0.8, 2.5], [0.8, 2.5], 1.2, 5) } ], finalAnswer: "Iterates move away from \\(\\alpha = 1\\) and settle at \\(\\alpha = 2\\)." } },
  { id: "y2nm3-030", topicRef: "y2nm3", topicTitle: "Sketching Iteration 30", difficulty: "Standard", questionText: "Sketch the staircase diagram for \\(x_{n+1} = \\sqrt[3]{2 x_{n} + 5}\\) starting from \\(x_{0} = 2\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [ { stepNumber: 1, description: "Set up and cube the fixed-point equation", workingLatex: "\\alpha = \\sqrt[3]{2\\alpha + 5} \\Rightarrow \\alpha^{3} = 2\\alpha + 5 \\Rightarrow \\alpha^{3} - 2\\alpha - 5 = 0", explanation: "Put \\(g(\\alpha) = \\alpha\\) and cube both sides to remove the root. The resulting cubic has no rational root, so solve numerically." }, { stepNumber: 2, description: "State the numerical fixed point", workingLatex: "\\alpha \\approx 2.095", explanation: "Check: \\(2.095^3 \\approx 9.19 \\approx 2(2.095) + 5\\), confirming the root of \\(x^3 - 2x - 5\\)." }, { stepNumber: 3, description: "Compute the slope at the fixed point", workingLatex: "g'(x) = \\tfrac{2}{3(2x + 5)^{2/3}} = \\tfrac{2}{3\\alpha^{2}} \\approx \\tfrac{2}{3(4.39)} \\approx 0.152", explanation: "Using \\(\\alpha^3 = 2\\alpha+5\\) lets us write the slope as \\(2/(3\\alpha^2)\\). It is positive and well below 1, so convergence is fast and one-sided." }, { stepNumber: 4, description: "Classify and sketch the staircase", workingLatex: "0 < g'(\\alpha) < 1", explanation: "Small positive slope gives a quick monotone staircase. Draw \\(y = \\sqrt[3]{2x+5}\\) with \\(y = x\\); from \\(x_0 = 2\\) the steps close onto \\(\\alpha \\approx 2.095\\) in just a few moves.", diagram: cobwebDiagram((x) => Math.cbrt(2 * x + 5), [1.5, 2.5], [1.5, 2.5], 2, 4) } ], finalAnswer: "Staircase converges rapidly to \\(\\alpha \\approx 2.095\\)." } },
  {
  id: "y2nm3-031",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 31",
  difficulty: "Standard",
  questionText: "Sketch the diagram for \\(x_{n+1} = -x_{n}^{3} + 3\\) starting from \\(x_{0} = 1.2\\). Does the iteration converge near the fixed point \\(\\alpha \\approx 1.2134\\)?",
  marks: 4,
  examStyle: true,
  yearCreated: 2026,
  tags: ["cobweb", "divergence"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Confirm the fixed point",
        workingLatex: "\\alpha = -\\alpha^{3} + 3 \\Rightarrow \\alpha \\approx 1.2134",
        explanation: "A fixed point satisfies \\(g(\\alpha) = \\alpha\\), i.e.\\ where the curve meets \\(y = x\\). Check: \\(1.2134^{3} \\approx 1.787\\) and \\(3 - 1.2134 \\approx 1.787\\), so the given value is correct."
      },
      {
        stepNumber: 2,
        description: "Differentiate to get the slope",
        workingLatex: "g'(x) = -3x^{2}",
        explanation: "The convergence test uses the gradient of \\(g\\) at the fixed point, so differentiate first. The cube becomes a square here \\(-\\) don't forget the factor of 3."
      },
      {
        stepNumber: 3,
        description: "Evaluate \\(g'\\) at the fixed point",
        workingLatex: "g'(1.2134) = -3(1.2134)^{2} \\approx -4.42",
        explanation: "Substitute \\(\\alpha\\) into \\(g'\\). Because \\(|g'(\\alpha)| \\approx 4.42 > 1\\), the fixed point is repelling \\(\\), so do not expect convergence."
      },
      {
        stepNumber: 4,
        description: "Sketch and read off the behaviour",
        workingLatex: "",
        explanation: "Since \\(g'(\\alpha) < -1\\), the iterate path is a cobweb (it alternates sides of \\(\\alpha\\)) that spirals outward. The steps grow, so the iteration diverges.",
        diagram: cobwebDiagram((x) => -x * x * x + 3, [0, 2.5], [0, 2.5], 1.2, 2)
      }
    ],
    finalAnswer: "No — cobweb diverges."
  }
},
  {
  id: "y2nm3-032",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 32",
  difficulty: "Standard",
  questionText: "Sketch the cobweb diagram for \\(x_{n+1} = \\tfrac{1}{\\sqrt{x_{n} + 1}}\\) starting from \\(x_{0} = 1\\).",
  marks: 4,
  examStyle: true,
  yearCreated: 2026,
  tags: ["cobweb"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Set up the fixed-point equation",
        workingLatex: "\\alpha = \\tfrac{1}{\\sqrt{\\alpha + 1}} \\Rightarrow \\alpha^{2}(\\alpha + 1) = 1",
        explanation: "Put \\(g(\\alpha) = \\alpha\\) and clear the surd by squaring both sides. This gives a cubic \\(\\alpha^{3} + \\alpha^{2} - 1 = 0\\)."
      },
      {
        stepNumber: 2,
        description: "Solve numerically for \\(\\alpha\\)",
        workingLatex: "\\alpha \\approx 0.7549",
        explanation: "The cubic has no nice closed form, so quote the root to 4 d.p. Check: \\(0.7549^{3} + 0.7549^{2} \\approx 1.000\\)."
      },
      {
        stepNumber: 3,
        description: "Differentiate and evaluate at \\(\\alpha\\)",
        workingLatex: "g'(x) = -\\tfrac{1}{2}(x+1)^{-3/2};\\ g'(0.7549) \\approx -0.215",
        explanation: "Write \\(g = (x+1)^{-1/2}\\) before differentiating to avoid quotient-rule slips. The slope is negative with \\(|g'| < 1\\), so we get a converging cobweb."
      },
      {
        stepNumber: 4,
        description: "Sketch the converging cobweb",
        workingLatex: "",
        explanation: "Because \\(-1 < g'(\\alpha) < 0\\), the iterates alternate either side of \\(\\alpha\\) while closing in, producing a box-like cobweb tightening onto \\(\\alpha\\).",
        diagram: cobwebDiagram((x) => 1 / Math.sqrt(x + 1), [0.3, 1.1], [0.3, 1.1], 1, 5)
      }
    ],
    finalAnswer: "Cobweb converging to \\(\\alpha \\approx 0.7549\\)."
  }
},
  {
  id: "y2nm3-033",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 33",
  difficulty: "Standard",
  questionText: "The iteration \\(x_{n+1} = 1 - x_{n}\\) starts from \\(x_{0} = 0.2\\). Sketch the diagram and describe the behaviour.",
  marks: 3,
  examStyle: true,
  yearCreated: 2026,
  tags: ["cobweb", "periodic"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Find the fixed point and its slope",
        workingLatex: "\\alpha = 1 - \\alpha \\Rightarrow \\alpha = 0.5;\\ g'(\\alpha) = -1",
        explanation: "The line \\(y = 1 - x\\) meets \\(y = x\\) at \\(0.5\\). The gradient is exactly \\(-1\\), the borderline case where the convergence test \\(|g'| < 1\\) just fails."
      },
      {
        stepNumber: 2,
        description: "List the iterates",
        workingLatex: "0.2,\\ 0.8,\\ 0.2,\\ 0.8, \\ldots",
        explanation: "Compute term by term: \\(1 - 0.2 = 0.8\\), then \\(1 - 0.8 = 0.2\\). The values repeat, so this is a period-2 cycle that never settles on \\(\\alpha\\)."
      },
      {
        stepNumber: 3,
        description: "Sketch the square cobweb",
        workingLatex: "",
        explanation: "With slope exactly \\(-1\\) the path traces a closed square box around \\(\\alpha\\) rather than spiralling in or out \\(\\) the hallmark of a period-2 oscillation.",
        diagram: cobwebDiagram((x) => 1 - x, [0, 1], [0, 1], 0.2, 4)
      }
    ],
    finalAnswer: "Square cobweb; sequence cycles between 0.2 and 0.8."
  }
},
  {
  id: "y2nm3-034",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 34",
  difficulty: "Standard",
  questionText: "Describe the behaviour of \\(x_{n+1} = x_{n}^{2}\\) from \\(x_{0} = 0.5\\). Include the fixed points.",
  marks: 3,
  examStyle: true,
  yearCreated: 2026,
  tags: ["staircase"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Find the fixed points",
        workingLatex: "\\alpha = \\alpha^{2} \\Rightarrow \\alpha(\\alpha - 1) = 0 \\Rightarrow \\alpha = 0,\\ 1",
        explanation: "Solve \\(g(\\alpha) = \\alpha\\) by factorising; don't just divide by \\(\\alpha\\) or you lose the root \\(\\alpha = 0\\)."
      },
      {
        stepNumber: 2,
        description: "Classify each fixed point",
        workingLatex: "g'(x) = 2x;\\ g'(0) = 0,\\ g'(1) = 2",
        explanation: "At \\(\\alpha = 0\\) the slope is \\(0\\) (\\(|g'| < 1\\), attracting); at \\(\\alpha = 1\\) the slope is \\(2\\) (\\(|g'| > 1\\), repelling)."
      },
      {
        stepNumber: 3,
        description: "Iterate and describe the staircase",
        workingLatex: "0.5,\\ 0.25,\\ 0.0625, \\ldots \\to 0",
        explanation: "Since \\(0.5\\) lies in \\((0,1)\\), squaring shrinks it each time, giving a monotone staircase down to the attracting point \\(\\alpha = 0\\).",
        diagram: cobwebDiagram((x) => x * x, [0, 1.1], [0, 1.1], 0.5, 5)
      }
    ],
    finalAnswer: "Staircase converging monotonically to \\(\\alpha = 0\\); \\(\\alpha = 1\\) is unstable."
  }
},
  {
  id: "y2nm3-035",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 35",
  difficulty: "Standard",
  questionText: "Describe the behaviour of \\(x_{n+1} = x_{n}^{2}\\) starting from \\(x_{0} = 1.1\\).",
  marks: 3,
  examStyle: true,
  yearCreated: 2026,
  tags: ["staircase", "divergence"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Note the relevant fixed point and slope",
        workingLatex: "\\alpha = 1;\\ g'(1) = 2",
        explanation: "The nearby fixed point is \\(\\alpha = 1\\). Its slope is \\(2\\), so \\(|g'(\\alpha)| > 1\\) and the point is repelling \\(\\) starting just above it will push the iterates away."
      },
      {
        stepNumber: 2,
        description: "Iterate from \\(x_{0} = 1.1\\)",
        workingLatex: "1.21,\\ 1.4641,\\ 2.1436, \\ldots",
        explanation: "Squaring a number greater than 1 makes it larger, so each term grows; the sequence increases without bound."
      },
      {
        stepNumber: 3,
        description: "Describe the diverging staircase",
        workingLatex: "",
        explanation: "Because the curve sits above \\(y = x\\) here with a steep positive slope, the path is a staircase climbing away from \\(\\alpha = 1\\) to infinity.",
        diagram: cobwebDiagram((x) => x * x, [0.9, 2.2], [0.9, 2.2], 1.1, 2)
      }
    ],
    finalAnswer: "Staircase diverging to infinity."
  }
},
  {
  id: "y2nm3-036",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 36",
  difficulty: "Standard",
  questionText: "Identify the two fixed points of \\(x_{n+1} = x_{n}^{2} - 0.5\\) and state which is attracting.",
  marks: 4,
  examStyle: true,
  yearCreated: 2026,
  tags: ["fixed point", "stability"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Form the fixed-point quadratic",
        workingLatex: "\\alpha = \\alpha^{2} - 0.5 \\Rightarrow \\alpha^{2} - \\alpha - 0.5 = 0",
        explanation: "Set \\(g(\\alpha) = \\alpha\\) and rearrange to a standard quadratic so the formula can be applied."
      },
      {
        stepNumber: 2,
        description: "Solve for the two fixed points",
        workingLatex: "\\alpha = \\tfrac{1 \\pm \\sqrt{3}}{2};\\ \\alpha_{1} \\approx 1.366,\\ \\alpha_{2} \\approx -0.366",
        explanation: "Using the quadratic formula with \\(a=1, b=-1, c=-0.5\\) gives discriminant \\(1 + 2 = 3\\). Keep both roots \\(\\) one will be stable, the other not."
      },
      {
        stepNumber: 3,
        description: "Differentiate \\(g\\)",
        workingLatex: "g'(x) = 2x",
        explanation: "The stability of each fixed point is decided by \\(|g'(\\alpha)|\\), so we need the derivative before testing."
      },
      {
        stepNumber: 4,
        description: "Apply the convergence test to each",
        workingLatex: "|g'(\\alpha_{2})| \\approx 0.732 < 1;\\ |g'(\\alpha_{1})| \\approx 2.732 > 1",
        explanation: "Only \\(\\alpha_{2}\\) satisfies \\(|g'| < 1\\), so it is the attracting (stable) point; \\(\\alpha_{1}\\) is repelling.",
        diagram: cobwebDiagram((x) => x * x - 0.5, [-1, 1.6], [-1, 1.6], 0, 4)
      }
    ],
    finalAnswer: "\\(\\alpha_{2} \\approx -0.366\\) is attracting; \\(\\alpha_{1}\\) is repelling."
  }
},
  {
  id: "y2nm3-037",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 37",
  difficulty: "Standard",
  questionText: "Sketch the diagram for the iteration in Q36 starting from \\(x_{0} = -0.2\\) and confirm convergence to the stable fixed point.",
  marks: 4,
  examStyle: true,
  yearCreated: 2026,
  tags: ["cobweb"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Recall the stable fixed point and slope",
        workingLatex: "\\alpha_{2} \\approx -0.366;\\ g'(\\alpha_{2}) = 2\\alpha_{2} \\approx -0.732",
        explanation: "From Q36 the attracting point is \\(\\alpha_{2}\\). Its slope is negative with \\(|g'| < 1\\), which tells us the path will be a converging cobweb rather than a staircase."
      },
      {
        stepNumber: 2,
        description: "Iterate from \\(x_{0} = -0.2\\)",
        workingLatex: "-0.46,\\ -0.289,\\ -0.417, \\ldots \\to -0.366",
        explanation: "Each term is \\(x^{2} - 0.5\\). The values jump either side of \\(\\alpha_{2}\\) but get steadily closer, confirming convergence."
      },
      {
        stepNumber: 3,
        description: "Sketch the converging cobweb",
        workingLatex: "",
        explanation: "Because \\(-1 < g'(\\alpha_{2}) < 0\\), draw a cobweb that spirals inward onto \\(\\alpha_{2} \\approx -0.366\\).",
        diagram: cobwebDiagram((x) => x * x - 0.5, [-1, 0.5], [-1, 0.5], -0.2, 5)
      }
    ],
    finalAnswer: "Cobweb converging to \\(\\alpha \\approx -0.366\\)."
  }
},
  {
  id: "y2nm3-038",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 38",
  difficulty: "Standard",
  questionText: "Describe the behaviour of \\(x_{n+1} = \\tfrac{5}{x_{n}}\\) starting from \\(x_{0} = 2\\).",
  marks: 3,
  examStyle: true,
  yearCreated: 2026,
  tags: ["periodic"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Iterate from \\(x_{0} = 2\\)",
        workingLatex: "x_{1} = \\tfrac{5}{2} = 2.5,\\ x_{2} = \\tfrac{5}{2.5} = 2,\\ x_{3} = 2.5, \\ldots",
        explanation: "Apply \\(g(x) = 5/x\\) repeatedly. The values immediately repeat, signalling a period-2 cycle."
      },
      {
        stepNumber: 2,
        description: "Check the fixed point and its slope",
        workingLatex: "\\alpha = \\sqrt{5};\\ g'(x) = -\\tfrac{5}{x^{2}},\\ g'(\\sqrt{5}) = -1",
        explanation: "The fixed point is \\(\\sqrt{5} \\approx 2.236\\), but the slope there is exactly \\(-1\\). This borderline case fails \\(|g'| < 1\\), so the iteration neither converges nor diverges."
      },
      {
        stepNumber: 3,
        description: "Describe the closed cobweb",
        workingLatex: "",
        explanation: "With slope \\(-1\\) the path forms a closed rectangle straddling \\(\\sqrt{5}\\), so the sequence oscillates forever between 2 and 2.5.",
        diagram: cobwebDiagram((x) => 5 / x, [1.5, 3], [1.5, 3], 2, 4)
      }
    ],
    finalAnswer: "Cycles between 2 and 2.5; does not converge."
  }
},
  {
  id: "y2nm3-039",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 39",
  difficulty: "Standard",
  questionText: "The diagram below shows \\(y = g(x)\\) and \\(y = x\\) with a fixed point at \\(\\alpha \\approx 1\\). The tangent to \\(g\\) at \\(\\alpha\\) has gradient roughly \\(0.7\\). Starting from \\(x_{0} = 0.3\\), describe the iteration's behaviour. Include a sketch.",
  marks: 4,
  examStyle: true,
  yearCreated: 2026,
  tags: ["staircase"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Classify using the given slope",
        workingLatex: "g'(\\alpha) \\approx 0.7 \\in (0, 1)",
        explanation: "A positive slope below 1 means the iteration converges via a staircase (not a cobweb, which needs a negative slope)."
      },
      {
        stepNumber: 2,
        description: "Decide the direction of approach",
        workingLatex: "x_{0} = 0.3 < \\alpha",
        explanation: "Starting below \\(\\alpha\\) with \\(0 < g'(\\alpha) < 1\\), the iterates rise step by step, so the staircase climbs towards \\(\\alpha\\) from below."
      },
      {
        stepNumber: 3,
        description: "Sketch the converging staircase",
        workingLatex: "",
        explanation: "Draw alternating vertical steps up to the curve and horizontal steps across to \\(y = x\\), tightening monotonically onto \\(\\alpha = 1\\).",
        diagram: cobwebDiagram((x) => 0.7 * x + 0.3, [0, 1.2], [0, 1.2], 0.3, 5)
      }
    ],
    finalAnswer: "Monotone staircase converging to \\(\\alpha = 1\\) from below."
  }
},
  {
  id: "y2nm3-040",
  topicRef: "y2nm3",
  topicTitle: "Sketching Iteration 40",
  difficulty: "Standard",
  questionText: "Sketch the staircase diagram for \\(x_{n+1} = \\tfrac{1}{3}(x_{n}^{2} + 1)\\) starting from \\(x_{0} = 0\\).",
  marks: 4,
  examStyle: true,
  yearCreated: 2026,
  tags: ["staircase"],
  workedSolution: {
    steps: [
      {
        stepNumber: 1,
        description: "Form the fixed-point quadratic",
        workingLatex: "\\alpha = \\tfrac{1}{3}(\\alpha^{2} + 1) \\Rightarrow \\alpha^{2} - 3\\alpha + 1 = 0",
        explanation: "Set \\(g(\\alpha) = \\alpha\\) and multiply through by 3 to clear the fraction before rearranging."
      },
      {
        stepNumber: 2,
        description: "Solve for both fixed points",
        workingLatex: "\\alpha = \\tfrac{3 \\pm \\sqrt{5}}{2};\\ \\alpha \\approx 0.382 \\text{ or } 2.618",
        explanation: "The quadratic formula gives two roots. The smaller one is the relevant attracting point for a start at \\(x_{0} = 0\\)."
      },
      {
        stepNumber: 3,
        description: "Confirm the small root is attracting",
        workingLatex: "g'(x) = \\tfrac{2x}{3};\\ g'(0.382) \\approx 0.255",
        explanation: "At \\(\\alpha \\approx 0.382\\) the slope is positive and \\(< 1\\), so the iteration converges by a staircase. (At \\(2.618\\) the slope exceeds 1, so that point repels.)"
      },
      {
        stepNumber: 4,
        description: "Sketch the converging staircase",
        workingLatex: "",
        explanation: "From \\(x_{0} = 0\\) the iterates step up to the curve and across to \\(y = x\\), climbing monotonically to \\(\\alpha \\approx 0.382\\).",
        diagram: cobwebDiagram((x) => (x * x + 1) / 3, [0, 1], [0, 1], 0, 5)
      }
    ],
    finalAnswer: "Staircase converging to \\(\\alpha \\approx 0.382\\)."
  }
},
  { id: "y2nm3-041", topicRef: "y2nm3", topicTitle: "Sketching Iteration 41", difficulty: "Standard", questionText: "For the iteration in Q40, explain what would happen if we started from \\(x_{0} = 3\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["divergence"], workedSolution: { steps: [
  { stepNumber: 1, description: "Recall both fixed points of Q40.", workingLatex: "\\alpha^{2} - 3\\alpha + 1 = 0 \\Rightarrow \\alpha = \\tfrac{3 \\pm \\sqrt{5}}{2}", explanation: "The iteration is \\(x_{n+1} = \\tfrac{1}{3}(x_{n}^{2}+1)\\). Setting \\(\\alpha = g(\\alpha)\\) gives a quadratic with two roots: \\(\\alpha_{1} \\approx 0.382\\) (the attracting one from Q40) and \\(\\alpha_{2} \\approx 2.618\\)." },
  { stepNumber: 2, description: "Test the slope at the upper fixed point.", workingLatex: "g'(x) = \\tfrac{2x}{3},\\quad g'(\\alpha_{2}) = \\tfrac{2(2.618)}{3} \\approx 1.745", explanation: "Differentiate \\(g\\) and evaluate at \\(\\alpha_{2}\\). Since \\(|g'(\\alpha_{2})| > 1\\), this fixed point is repelling — iterates near it are pushed away, not pulled in." },
  { stepNumber: 3, description: "Locate the start and read off the direction.", workingLatex: "x_{0} = 3 > \\alpha_{2} \\approx 2.618", explanation: "Starting at \\(x_{0}=3\\) places us above the repelling point, where the curve \\(y=g(x)\\) lies above \\(y=x\\). Each step makes \\(x\\) larger, so the staircase climbs away to \\(+\\infty\\). Slip to avoid: do not assume the attracting point at \\(0.382\\) can rescue a start this far out — the repelling point at \\(2.618\\) is a barrier.",
    diagram: cobwebDiagram((x) => (x * x + 1) / 3, [0, 5], [0, 5], 3, 3) }
 ], finalAnswer: "Staircase diverging to \\(+\\infty\\)." } },
  { id: "y2nm3-042", topicRef: "y2nm3", topicTitle: "Sketching Iteration 42", difficulty: "Standard", questionText: "Sketch the cobweb diagram for the logistic iteration \\(x_{n+1} = 2x_{n}(1 - x_{n})\\) starting from \\(x_{0} = 0.1\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb", "logistic"], workedSolution: { steps: [
  { stepNumber: 1, description: "Find the fixed points.", workingLatex: "x = 2x(1-x) \\Rightarrow x = 0 \\text{ or } x = \\tfrac{1}{2}", explanation: "Set \\(\\alpha = g(\\alpha)\\). Either \\(x=0\\), or dividing by \\(x\\) gives \\(1 = 2(1-x)\\Rightarrow x = \\tfrac{1}{2}\\). The relevant attracting point is \\(\\alpha = \\tfrac{1}{2}\\)." },
  { stepNumber: 2, description: "Compute the slope at \\(\\alpha = \\tfrac{1}{2}\\).", workingLatex: "g'(x) = 2 - 4x,\\quad g'(\\tfrac{1}{2}) = 0", explanation: "A zero gradient at the fixed point means convergence is quadratic — each step roughly squares the error, so the iterates lock onto \\(0.5\\) extremely fast." },
  { stepNumber: 3, description: "Track a couple of iterates.", workingLatex: "x_{1} = 0.18,\\ x_{2} = 0.2952,\\ x_{3} \\approx 0.416", explanation: "From \\(x_{0}=0.1\\) the values climb monotonically toward \\(0.5\\) from below, so the path is a staircase (not an oscillating cobweb) despite the curved \\(g\\)." },
  { stepNumber: 4, description: "Draw curve, line and iterate path.", workingLatex: "", explanation: "Plot the downward parabola \\(y=2x(1-x)\\), the line \\(y=x\\), and step vertically to the curve then horizontally to the line. Slip to avoid: keep the \\(y\\)-window tight (peak of \\(g\\) is \\(0.5\\)) so the staircase is readable.",
    diagram: cobwebDiagram((x) => 2 * x * (1 - x), [0, 1], [0, 0.6], 0.1, 5) }
 ], finalAnswer: "Staircase converging rapidly to \\(\\alpha = 0.5\\) (quadratic)." } },
  { id: "y2nm3-043", topicRef: "y2nm3", topicTitle: "Sketching Iteration 43", difficulty: "Standard", questionText: "Describe the behaviour of the iteration \\(x_{n+1} = 3.2 x_{n}(1 - x_{n})\\) starting from \\(x_{0} = 0.2\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb", "logistic"], workedSolution: { steps: [
  { stepNumber: 1, description: "Find the non-zero fixed point.", workingLatex: "\\alpha = 3.2\\,\\alpha(1-\\alpha) \\Rightarrow \\alpha = 1 - \\tfrac{1}{3.2} = 0.6875", explanation: "For \\(\\alpha \\neq 0\\), divide by \\(\\alpha\\): \\(1 = 3.2(1-\\alpha)\\). This is the only candidate for convergence (the point \\(0\\) is clearly repelling here)." },
  { stepNumber: 2, description: "Evaluate the slope there.", workingLatex: "g'(x) = 3.2(1 - 2x),\\quad g'(0.6875) = 3.2(1 - 1.375) = -1.2", explanation: "Differentiate the logistic map and substitute. The negative sign signals an oscillating (cobweb) tendency." },
  { stepNumber: 3, description: "Apply the convergence test.", workingLatex: "|g'(\\alpha)| = 1.2 > 1", explanation: "Because the magnitude exceeds \\(1\\), the fixed point is repelling: the iterates cannot settle on \\(0.6875\\). Slip to avoid: \\(|g'|>1\\) does not always mean escape to infinity — here the bounded logistic map traps the orbit in a cycle instead." },
  { stepNumber: 4, description: "Identify the long-run behaviour.", workingLatex: "", explanation: "The orbit is pushed off the fixed point and settles into a period-2 cycle, drawn as a rectangular cobweb that does not shrink onto the crossing point.",
    diagram: cobwebDiagram((x) => 3.2 * x * (1 - x), [0, 1], [0, 0.9], 0.2, 10) }
 ], finalAnswer: "Period-2 oscillation — cobweb does not converge." } },
  { id: "y2nm3-044", topicRef: "y2nm3", topicTitle: "Sketching Iteration 44", difficulty: "Standard", questionText: "Sketch the diagram for \\(x_{n+1} = \\tfrac{1}{2}\\!\\left(x_{n} + \\tfrac{3}{x_{n}}\\right)\\) starting from \\(x_{0} = 3\\). Explain why convergence is so rapid.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase", "babylonian"], workedSolution: { steps: [
  { stepNumber: 1, description: "Find the fixed point.", workingLatex: "\\alpha = \\tfrac{1}{2}\\!\\left(\\alpha + \\tfrac{3}{\\alpha}\\right) \\Rightarrow \\alpha^{2} = 3 \\Rightarrow \\alpha = \\sqrt{3}", explanation: "This is the Babylonian (Newton) iteration for \\(\\sqrt{3}\\). Solving \\(\\alpha = g(\\alpha)\\) gives \\(\\alpha = \\sqrt{3} \\approx 1.732\\) (take the positive root from \\(x_{0}=3\\))." },
  { stepNumber: 2, description: "Differentiate and evaluate at \\(\\sqrt{3}\\).", workingLatex: "g'(x) = \\tfrac{1}{2}\\!\\left(1 - \\tfrac{3}{x^{2}}\\right),\\quad g'(\\sqrt{3}) = \\tfrac{1}{2}(1 - 1) = 0", explanation: "At the fixed point the \\(\\tfrac{3}{x^{2}}\\) term equals \\(1\\), cancelling the bracket. A zero slope is the cause of the rapid behaviour." },
  { stepNumber: 3, description: "Explain the rapid convergence.", workingLatex: "x_{1} = 2,\\ x_{2} = 1.75,\\ x_{3} \\approx 1.7321", explanation: "Because \\(g'(\\alpha)=0\\), convergence is quadratic: the number of correct digits roughly doubles each step, so after only a few iterations \\(x_{n}\\) is essentially \\(\\sqrt{3}\\)." },
  { stepNumber: 4, description: "Sketch the flat-tangent staircase.", workingLatex: "", explanation: "Plot \\(y=g(x)\\) (nearly flat where it crosses \\(y=x\\)) with \\(y=x\\). The iterate path drops almost vertically onto \\(\\sqrt{3}\\) in one or two steps. Slip to avoid: do not draw a long gentle staircase — the flat tangent makes the steps collapse immediately.",
    diagram: cobwebDiagram((x) => 0.5 * (x + 3 / x), [1, 3.5], [1, 3.5], 3, 3) }
 ], finalAnswer: "Staircase jumps almost immediately to \\(\\sqrt{3} \\approx 1.732\\)." } },
  { id: "y2nm3-045", topicRef: "y2nm3", topicTitle: "Sketching Iteration 45", difficulty: "Standard", questionText: "For the iteration \\(x_{n+1} = 0.4 x_{n} + 3\\) starting from \\(x_{0} = 0\\), state the fixed point and sketch the staircase.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase", "linear"], workedSolution: { steps: [
  { stepNumber: 1, description: "Solve for the fixed point.", workingLatex: "\\alpha = 0.4\\alpha + 3 \\Rightarrow 0.6\\alpha = 3 \\Rightarrow \\alpha = 5", explanation: "Set \\(\\alpha = g(\\alpha)\\) and collect the \\(\\alpha\\) terms. For a linear map this is a one-line solve." },
  { stepNumber: 2, description: "Read off the slope and classify.", workingLatex: "g'(x) = 0.4,\\quad 0 < 0.4 < 1", explanation: "The gradient is constant for a straight line. Since it is positive and less than \\(1\\), the iteration converges as a monotone staircase (no oscillation)." },
  { stepNumber: 3, description: "Track the first iterates.", workingLatex: "x_{1} = 3,\\ x_{2} = 4.2,\\ x_{3} = 4.68", explanation: "From \\(x_{0}=0\\) the values rise steadily toward \\(5\\) from below, confirming an upward staircase." },
  { stepNumber: 4, description: "Draw line, curve and staircase.", workingLatex: "", explanation: "Plot \\(y = 0.4x + 3\\) and \\(y = x\\) crossing at \\((5,5)\\); step vertically to the line then horizontally to \\(y=x\\). Slip to avoid: the shallower gradient \\(0.4\\) gives faster convergence than a slope near \\(1\\).",
    diagram: cobwebDiagram((x) => 0.4 * x + 3, [0, 6], [0, 6], 0, 5) }
 ], finalAnswer: "Staircase converging to \\(\\alpha = 5\\)." } },
  { id: "y2nm3-046", topicRef: "y2nm3", topicTitle: "Sketching Iteration 46", difficulty: "Standard", questionText: "Sketch \\(y = \\sin x\\) and \\(y = x\\) together and explain why the only fixed point of \\(x_{n+1} = \\sin x_{n}\\) is \\(x = 0\\), and show that it is a borderline case.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["concept", "trigonometric"], workedSolution: { steps: [
  { stepNumber: 1, description: "Set up the fixed-point equation.", workingLatex: "\\sin x = x", explanation: "Fixed points are where the curve \\(y=\\sin x\\) meets the line \\(y=x\\). We must find every solution of \\(\\sin x = x\\)." },
  { stepNumber: 2, description: "Show \\(x = 0\\) is the only solution.", workingLatex: "\\sin x = x \\Rightarrow x = 0", explanation: "For \\(x > 0\\) we have \\(\\sin x < x\\), and for \\(x < 0\\) we have \\(\\sin x > x\\); the curve and line only touch at the origin. So \\(\\alpha = 0\\) is the sole fixed point." },
  { stepNumber: 3, description: "Differentiate and test the borderline.", workingLatex: "g'(x) = \\cos x,\\quad g'(0) = \\cos 0 = 1", explanation: "Here \\(|g'(\\alpha)| = 1\\), exactly the borderline of the convergence test. The line \\(y=x\\) is tangent to \\(y=\\sin x\\) at the origin, so iterates creep in extremely slowly. Slip to avoid: \\(|g'|=1\\) does not guarantee divergence — here it still converges, just painfully slowly.",
    diagram: cobwebDiagram((x) => Math.sin(x), [-1, 1], [-1, 1], 0.8, 5) }
 ], finalAnswer: "Only fixed point is \\(x = 0\\); \\(g'(0) = 1\\) so convergence is extremely slow." } },
  { id: "y2nm3-047", topicRef: "y2nm3", topicTitle: "Sketching Iteration 47", difficulty: "Standard", questionText: "Sketch the staircase diagram for \\(x_{n+1} = \\tfrac{1}{4}(x_{n}^{2} + 3)\\) starting from \\(x_{0} = 0.5\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [
  { stepNumber: 1, description: "Find the fixed points.", workingLatex: "4\\alpha = \\alpha^{2} + 3 \\Rightarrow \\alpha^{2} - 4\\alpha + 3 = 0 \\Rightarrow \\alpha = 1,\\ 3", explanation: "Set \\(\\alpha = g(\\alpha)\\), clear the fraction and factorise \\((\\alpha-1)(\\alpha-3)=0\\)." },
  { stepNumber: 2, description: "Classify each using the slope.", workingLatex: "g'(x) = \\tfrac{x}{2},\\quad g'(1) = 0.5,\\ g'(3) = 1.5", explanation: "\\(|g'(1)| < 1\\) so \\(\\alpha = 1\\) is attracting; \\(|g'(3)| > 1\\) so \\(\\alpha = 3\\) is repelling. From \\(x_{0}=0.5\\) (below \\(1\\)) we head to the attracting point." },
  { stepNumber: 3, description: "Track the iterates toward \\(1\\).", workingLatex: "x_{1} = 0.8125,\\ x_{2} \\approx 0.915,\\ x_{3} \\approx 0.959", explanation: "The values rise monotonically toward \\(1\\) from below, so the path is an upward staircase, not a cobweb." },
  { stepNumber: 4, description: "Draw the curve, line and staircase.", workingLatex: "", explanation: "Plot the parabola \\(y=\\tfrac14(x^2+3)\\) and \\(y=x\\) crossing at \\(1\\) and \\(3\\). Slip to avoid: keep the start below \\(3\\) — a start above the repelling point at \\(3\\) would diverge instead.",
    diagram: cobwebDiagram((x) => (x * x + 3) / 4, [0, 1.8], [0, 1.8], 0.5, 5) }
 ], finalAnswer: "Staircase converging to \\(\\alpha = 1\\)." } },
  { id: "y2nm3-048", topicRef: "y2nm3", topicTitle: "Sketching Iteration 48", difficulty: "Standard", questionText: "Use the sketched iteration in Q47 to estimate, to 1 decimal place, the value of \\(x_{3}\\) when \\(x_{0} = 0.5\\).", marks: 3, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [
  { stepNumber: 1, description: "Compute \\(x_{1}\\) from \\(x_{0}=0.5\\).", workingLatex: "x_{1} = \\tfrac{0.5^{2} + 3}{4} = \\tfrac{3.25}{4} \\approx 0.81", explanation: "Substitute \\(x_{0}=0.5\\) into \\(g(x)=\\tfrac14(x^2+3)\\). On the diagram this is the height of the curve directly above \\(0.5\\)." },
  { stepNumber: 2, description: "Iterate twice more.", workingLatex: "x_{2} = \\tfrac{0.81^{2}+3}{4} \\approx 0.91,\\quad x_{3} = \\tfrac{0.91^{2}+3}{4} \\approx 0.96", explanation: "Feed each output back in. Carry full accuracy through the intermediate steps and only round at the very end to avoid rounding error building up." },
  { stepNumber: 3, description: "Round to 1 decimal place.", workingLatex: "x_{3} \\approx 0.96 \\Rightarrow 1.0\\ (\\text{1 d.p.})", explanation: "To one decimal place \\(0.96\\) rounds to \\(1.0\\), consistent with the staircase closing in on the fixed point \\(\\alpha = 1\\).",
    diagram: cobwebDiagram((x) => (x * x + 3) / 4, [0, 1.8], [0, 1.8], 0.5, 3) }
 ], finalAnswer: "\\(x_{3} \\approx 1.0\\) (to 1 d.p.)." } },
  { id: "y2nm3-049", topicRef: "y2nm3", topicTitle: "Sketching Iteration 49", difficulty: "Standard", questionText: "Sketch and describe the behaviour of \\(x_{n+1} = 3\\sqrt{x_{n}} - 2\\) starting from \\(x_{0} = 2\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [
  { stepNumber: 1, description: "Find the fixed points.", workingLatex: "\\alpha = 3\\sqrt{\\alpha} - 2;\\ \\text{let } u = \\sqrt{\\alpha}: u^{2} - 3u + 2 = 0 \\Rightarrow u = 1, 2", explanation: "Substituting \\(u=\\sqrt{\\alpha}\\) turns the surd equation into a quadratic. Then \\(\\alpha = u^{2}\\) gives \\(\\alpha = 1\\) or \\(\\alpha = 4\\)." },
  { stepNumber: 2, description: "Differentiate and classify each.", workingLatex: "g'(x) = \\tfrac{3}{2\\sqrt{x}},\\quad g'(1) = 1.5,\\ g'(4) = 0.75", explanation: "\\(|g'(1)| > 1\\) so \\(\\alpha = 1\\) is repelling; \\(|g'(4)| < 1\\) so \\(\\alpha = 4\\) is attracting. From \\(x_{0}=2\\) (above the repelling point) the orbit heads toward \\(4\\)." },
  { stepNumber: 3, description: "Track a few iterates.", workingLatex: "x_{1} \\approx 2.24,\\ x_{2} \\approx 2.49,\\ x_{3} \\approx 2.74", explanation: "The values climb steadily toward \\(4\\) from below, giving a monotone upward staircase that slows as the slope \\(0.75 < 1\\) takes over near \\(\\alpha=4\\)." },
  { stepNumber: 4, description: "Draw curve, line and staircase.", workingLatex: "", explanation: "Plot \\(y = 3\\sqrt{x} - 2\\) with \\(y=x\\) crossing at \\(1\\) and \\(4\\). Slip to avoid: a start below \\(1\\) would be pushed away from the repelling point, so the choice \\(x_{0}=2\\) matters.",
    diagram: cobwebDiagram((x) => 3 * Math.sqrt(x) - 2, [0.5, 5], [0.5, 5], 2, 5) }
 ], finalAnswer: "Staircase converging to \\(\\alpha = 4\\)." } },
  { id: "y2nm3-050", topicRef: "y2nm3", topicTitle: "Sketching Iteration 50", difficulty: "Standard", questionText: "Give an example of an iteration \\(x_{n+1} = g(x_{n})\\) whose diagram is a diverging staircase. State the fixed point and the slope of \\(g\\) there.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["example", "divergence"], workedSolution: { steps: [
  { stepNumber: 1, description: "Pick a linear map with slope above 1.", workingLatex: "g(x) = 1.5x - 0.5", explanation: "For a staircase (not a cobweb) we need a positive slope, and for divergence we need that slope greater than \\(1\\). A straight line makes both easy to control." },
  { stepNumber: 2, description: "Solve for the fixed point.", workingLatex: "\\alpha = 1.5\\alpha - 0.5 \\Rightarrow 0.5\\alpha = 0.5 \\Rightarrow \\alpha = 1", explanation: "Set \\(\\alpha = g(\\alpha)\\) and solve. The single crossing of \\(y=g(x)\\) and \\(y=x\\) is at \\(\\alpha = 1\\)." },
  { stepNumber: 3, description: "State the slope and confirm divergence.", workingLatex: "g'(x) = 1.5 > 1", explanation: "Since \\(g'(\\alpha) = 1.5 > 1\\) and is positive, any start off \\(\\alpha\\) gives a monotone staircase that climbs away from the fixed point. Slip to avoid: a negative slope below \\(-1\\) would also diverge, but as a cobweb, not a staircase.",
    diagram: cobwebDiagram((x) => 1.5 * x - 0.5, [0.6, 2.2], [0.6, 2.2], 1.1, 3) }
 ], finalAnswer: "Example: \\(x_{n+1} = 1.5 x_{n} - 0.5\\); fixed point \\(\\alpha = 1\\), slope \\(1.5\\)." } },
  { id: "y2nm3-051", topicRef: "y2nm3", topicTitle: "Sketching Iteration 51", difficulty: "Standard", questionText: "Give an example of an iteration \\(x_{n+1} = g(x_{n})\\) whose diagram is a diverging cobweb.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["example", "divergence"], workedSolution: { steps: [ { stepNumber: 1, description: "Recall the diverging-cobweb condition.", workingLatex: "g'(\\alpha) < -1", explanation: "A cobweb (oscillating) pattern needs a negative slope, and divergence needs the magnitude of that slope to exceed 1. So you want \\(g'(\\alpha) < -1\\). Don't pick a slope between \\(-1\\) and \\(0\\) — that would converge." }, { stepNumber: 2, description: "Choose a linear g with steep negative slope.", workingLatex: "g(x) = -2x + 3", explanation: "A linear map has a constant slope equal to its gradient, so picking \\(-2\\) guarantees \\(g'(\\alpha) = -2 < -1\\) everywhere. Linear examples are safest because the slope can't change near the fixed point." }, { stepNumber: 3, description: "Find the fixed point and confirm the slope.", workingLatex: "\\alpha = -2\\alpha + 3 \\Rightarrow 3\\alpha = 3 \\Rightarrow \\alpha = 1,\\ g'(\\alpha) = -2", explanation: "Set \\(g(\\alpha)=\\alpha\\) to locate the crossing of \\(y=g(x)\\) with \\(y=x\\). Since \\(|g'(\\alpha)| = 2 > 1\\) with a negative sign, the iterates spiral outward in a cobweb.", diagram: cobwebDiagram((x) => -2 * x + 3, [0.5, 1.8], [0.5, 1.8], 1.1, 2) } ], finalAnswer: "Example: \\(x_{n+1} = -2 x_{n} + 3\\); fixed point \\(\\alpha = 1\\), slope \\(-2\\)." } },
  { id: "y2nm3-052", topicRef: "y2nm3", topicTitle: "Sketching Iteration 52", difficulty: "Standard", questionText: "Sketch the cobweb for \\(x_{n+1} = \\tfrac{1}{x_{n} + 1}\\) starting from \\(x_{0} = 0.5\\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb"], workedSolution: { steps: [ { stepNumber: 1, description: "Set up the fixed-point equation.", workingLatex: "\\alpha = \\tfrac{1}{\\alpha + 1} \\Rightarrow \\alpha(\\alpha + 1) = 1", explanation: "The fixed point is where the curve meets \\(y = x\\), so put \\(g(\\alpha)=\\alpha\\). Multiply up by \\((\\alpha+1)\\) to clear the fraction before solving." }, { stepNumber: 2, description: "Solve the quadratic for the positive root.", workingLatex: "\\alpha^{2} + \\alpha - 1 = 0 \\Rightarrow \\alpha = \\tfrac{-1 + \\sqrt{5}}{2} \\approx 0.618", explanation: "Use the quadratic formula. Reject the negative root \\(\\tfrac{-1-\\sqrt5}{2}\\) since the iterates from \\(x_0=0.5\\) stay positive." }, { stepNumber: 3, description: "Differentiate to predict the cobweb.", workingLatex: "g'(x) = -\\tfrac{1}{(x+1)^{2}},\\ g'(\\alpha) \\approx -0.382", explanation: "The slope at \\(\\alpha\\) is negative with magnitude below 1, so expect an oscillating cobweb that converges. The minus sign is what makes the path box in around \\(\\alpha\\) rather than step monotonically." }, { stepNumber: 4, description: "Plot the curve, line, and iterate path.", workingLatex: "", explanation: "Draw \\(y = 1/(x+1)\\) and \\(y = x\\), then box the iterates in from \\(x_0 = 0.5\\): up to the curve, across to the line, repeat. The spiral closes in on \\(\\alpha\\).", diagram: cobwebDiagram((x) => 1 / (x + 1), [0, 1.2], [0, 1.2], 0.5, 5) } ], finalAnswer: "Cobweb converging to \\(\\alpha \\approx 0.618\\)." } },
  { id: "y2nm3-053", topicRef: "y2nm3", topicTitle: "Sketching Iteration 53", difficulty: "Challenge", questionText: "On a single sketch, show \\(y = x^{3}\\) and \\(y = x\\). State the fixed points and use the slope of \\(g\\) at each to classify the behaviour of \\(x_{n+1} = x_{n}^{3}\\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["classification"], workedSolution: { steps: [ { stepNumber: 1, description: "Find all fixed points.", workingLatex: "x^{3} = x \\Rightarrow x(x^{2} - 1) = 0 \\Rightarrow x = 0,\\ \\pm 1", explanation: "Where \\(y=x^3\\) crosses \\(y=x\\). Factor out \\(x\\) first — a common slip is to divide by \\(x\\) and lose the \\(x=0\\) root." }, { stepNumber: 2, description: "Differentiate g.", workingLatex: "g'(x) = 3x^{2}", explanation: "We classify each fixed point by the magnitude of \\(g'\\) there: \\(<1\\) attracts, \\(>1\\) repels." }, { stepNumber: 3, description: "Evaluate the slope at x = 0.", workingLatex: "g'(0) = 0", explanation: "Slope 0 means \\(|g'|<1\\), so \\(x=0\\) is strongly (in fact quadratically) attracting — nearby iterates rush toward it." }, { stepNumber: 4, description: "Evaluate the slope at x = ±1.", workingLatex: "g'(\\pm 1) = 3", explanation: "Slope 3 has \\(|g'|>1\\), so \\(\\pm 1\\) are repelling: any start nudged off these points is driven away.", diagram: cobwebDiagram((x) => x * x * x, [-1.2, 1.2], [-1.2, 1.2], 0.8, 4) } ], finalAnswer: "\\(x = 0\\) stable; \\(x = \\pm 1\\) unstable." } },
  { id: "y2nm3-054", topicRef: "y2nm3", topicTitle: "Sketching Iteration 54", difficulty: "Challenge", questionText: "Sketch the diagram for \\(x_{n+1} = x_{n}^{3}\\) starting from \\(x_{0} = 0.9\\) and describe what happens.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [ { stepNumber: 1, description: "Locate the relevant fixed points.", workingLatex: "x^{3} = x \\Rightarrow x = 0,\\ \\pm 1", explanation: "The starting value \\(0.9\\) sits between the attracting point \\(0\\) and the repelling point \\(1\\), which decides where it goes." }, { stepNumber: 2, description: "Note that cubing shrinks values inside (-1,1).", workingLatex: "|x_{0}| < 1 \\Rightarrow |x_{n+1}| = |x_n|^3 < |x_n|", explanation: "For \\(0<x<1\\) we have \\(x^3<x\\), so each iterate is smaller than the last and the sequence decreases toward 0 — a positive staircase." }, { stepNumber: 3, description: "Compute a couple of iterates to confirm.", workingLatex: "x_{1} = 0.9^{3} = 0.729,\\ x_{2} = 0.729^{3} \\approx 0.387", explanation: "The rapid shrinking confirms convergence to the stable fixed point 0. Make sure you cube each whole value, not just multiply by 0.9." }, { stepNumber: 4, description: "Draw the staircase down to 0.", workingLatex: "", explanation: "Plot \\(y=x^3\\) (below \\(y=x\\) on \\((0,1)\\)) and step: up to the curve, across to the line. The steps march steadily down to the origin.", diagram: cobwebDiagram((x) => x * x * x, [-0.2, 1.05], [-0.2, 1.05], 0.9, 5) } ], finalAnswer: "Staircase converging to the stable fixed point \\(0\\)." } },
  { id: "y2nm3-055", topicRef: "y2nm3", topicTitle: "Sketching Iteration 55", difficulty: "Challenge", questionText: "Sketch the diagram for \\(x_{n+1} = x_{n}^{3}\\) starting from \\(x_{0} = 1.1\\). Describe the behaviour.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["divergence"], workedSolution: { steps: [ { stepNumber: 1, description: "Note the start lies just above the repelling point 1.", workingLatex: "g'(1) = 3 > 1", explanation: "Since \\(|g'(1)|>1\\), the fixed point at 1 repels, so a start at \\(1.1\\) is pushed away. For \\(x>1\\), cubing makes values grow." }, { stepNumber: 2, description: "Compute iterates to show growth.", workingLatex: "x_{1} = 1.1^{3} = 1.331,\\ x_{2} = 1.331^{3} \\approx 2.358", explanation: "Each iterate is larger than the last and accelerating, confirming the sequence grows without bound rather than settling." }, { stepNumber: 3, description: "Draw the diverging staircase.", workingLatex: "", explanation: "Plot \\(y=x^3\\) (above \\(y=x\\) for \\(x>1\\)) and step from \\(1.1\\): the steps climb steeper and steeper, marching off to \\(+\\infty\\).", diagram: cobwebDiagram((x) => x * x * x, [0.95, 2.5], [0.95, 2.5], 1.1, 2) } ], finalAnswer: "Staircase diverging to \\(+\\infty\\)." } },
  { id: "y2nm3-056", topicRef: "y2nm3", topicTitle: "Sketching Iteration 56", difficulty: "Challenge", questionText: "A diagram shows \\(y = g(x)\\) cutting \\(y = x\\) at two points \\(\\alpha_{1} < \\alpha_{2}\\). The slope of \\(g\\) at \\(\\alpha_{1}\\) is \\(0.5\\), and at \\(\\alpha_{2}\\) is \\(1.8\\). Describe the behaviour of the iteration starting from a point just below \\(\\alpha_{1}\\), between \\(\\alpha_{1}\\) and \\(\\alpha_{2}\\), and just above \\(\\alpha_{2}\\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["stability"], workedSolution: { steps: [ { stepNumber: 1, description: "Classify each fixed point by its slope.", workingLatex: "|g'(\\alpha_{1})| = 0.5 < 1,\\quad |g'(\\alpha_{2})| = 1.8 > 1", explanation: "\\(\\alpha_1\\) has \\(|g'|<1\\) so it attracts; \\(\\alpha_2\\) has \\(|g'|>1\\) so it repels. The slopes are positive, so motion near each is a monotone staircase." }, { stepNumber: 2, description: "Start just below the stable point.", workingLatex: "", explanation: "Just below \\(\\alpha_1\\): because \\(\\alpha_1\\) attracts, the iterates form a staircase climbing up toward \\(\\alpha_1\\)." }, { stepNumber: 3, description: "Start between the two points.", workingLatex: "", explanation: "Between \\(\\alpha_1\\) and \\(\\alpha_2\\): \\(\\alpha_1\\) still attracts while \\(\\alpha_2\\) pushes away, so a point in this interval is drawn back down toward the stable \\(\\alpha_1\\) (exact path depends on the curve, but the pull is toward \\(\\alpha_1\\))." }, { stepNumber: 4, description: "Start just above the unstable point.", workingLatex: "", explanation: "Just above \\(\\alpha_2\\): the repelling point sends iterates the other way, so the staircase diverges off to \\(+\\infty\\). \\(\\alpha_2\\) acts as a threshold.", diagram: cobwebDiagram((x) => (x * x + 3) / 4, [0, 3.5], [0, 3.5], 0.5, 5) } ], finalAnswer: "Stable \\(\\alpha_{1}\\) attracts nearby iterates; \\(\\alpha_{2}\\) is a threshold above which the iteration escapes." } },
  { id: "y2nm3-057", topicRef: "y2nm3", topicTitle: "Sketching Iteration 57", difficulty: "Challenge", questionText: "For the iteration \\(x_{n+1} = g(x_{n})\\) with \\(g(x) = 1 + \\tfrac{1}{x^{2}}\\), sketch the cobweb starting from \\(x_{0} = 1\\). State the equation satisfied by the fixed point.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["cobweb"], workedSolution: { steps: [ { stepNumber: 1, description: "Write down the fixed-point equation.", workingLatex: "\\alpha = 1 + \\tfrac{1}{\\alpha^{2}}", explanation: "Set \\(g(\\alpha)=\\alpha\\) at the crossing of curve and line. This is the equation asked for, but tidy it into polynomial form next." }, { stepNumber: 2, description: "Clear the fraction to a cubic.", workingLatex: "\\alpha^{3} = \\alpha^{2} + 1 \\Rightarrow \\alpha^{3} - \\alpha^{2} - 1 = 0", explanation: "Multiply through by \\(\\alpha^2\\). Solving numerically gives \\(\\alpha \\approx 1.4656\\). Don't try to factor — it has no nice rational root." }, { stepNumber: 3, description: "Differentiate and evaluate at α.", workingLatex: "g'(x) = -\\tfrac{2}{x^{3}},\\ g'(\\alpha) \\approx -0.636", explanation: "The slope is negative with magnitude below 1, so the iterates oscillate either side of \\(\\alpha\\) and converge — a cobweb." }, { stepNumber: 4, description: "Sketch the cobweb from x0 = 1.", workingLatex: "", explanation: "Plot \\(y = 1 + 1/x^2\\) and \\(y = x\\), then box in from \\(x_0=1\\): vertical to the curve, horizontal to the line. The spiral tightens onto \\(\\alpha \\approx 1.47\\).", diagram: cobwebDiagram((x) => 1 + 1 / (x * x), [0.8, 2.2], [0.8, 2.2], 1, 5) } ], finalAnswer: "Cobweb converging to \\(\\alpha \\approx 1.4656\\); \\(\\alpha^{3} - \\alpha^{2} - 1 = 0\\)." } },
  { id: "y2nm3-058", topicRef: "y2nm3", topicTitle: "Sketching Iteration 58", difficulty: "Challenge", questionText: "On axes, sketch both \\(y = g(x) = 1 - x^{2}\\) and \\(y = x\\). Identify the fixed points and classify each.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["classification"], workedSolution: { steps: [ { stepNumber: 1, description: "Set up and solve the fixed-point equation.", workingLatex: "1 - x^{2} = x \\Rightarrow x^{2} + x - 1 = 0 \\Rightarrow \\alpha = \\tfrac{-1 \\pm \\sqrt{5}}{2}", explanation: "Where the downward parabola meets \\(y=x\\). The quadratic formula gives \\(\\alpha \\approx 0.618\\) and \\(\\alpha \\approx -1.618\\)." }, { stepNumber: 2, description: "Differentiate g.", workingLatex: "g'(x) = -2x", explanation: "Each fixed point is classified by \\(|g'|\\): below 1 attracts, above 1 repels." }, { stepNumber: 3, description: "Evaluate the slope at each fixed point.", workingLatex: "g'(0.618) \\approx -1.236,\\quad g'(-1.618) \\approx 3.236", explanation: "Both magnitudes exceed 1, so neither point attracts. Watch the sign of \\(-2x\\): at the positive root the slope is negative." }, { stepNumber: 4, description: "Classify both as unstable.", workingLatex: "|g'(\\alpha)| > 1 \\text{ at both}", explanation: "Since \\(|g'|>1\\) at each crossing, any iteration started near either point is driven away — both are repelling.", diagram: cobwebDiagram((x) => 1 - x * x, [-2, 2], [-2, 2], 0.5, 4) } ], finalAnswer: "Both fixed points are unstable." } },
  { id: "y2nm3-059", topicRef: "y2nm3", topicTitle: "Sketching Iteration 59", difficulty: "Challenge", questionText: "Given the iteration \\(x_{n+1} = \\tfrac{x_{n}^{2} + a}{b x_{n}}\\) for positive constants \\(a,\\ b\\), find the fixed points and the condition on \\(g'(\\alpha)\\) for convergence.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["theory"], workedSolution: { steps: [ { stepNumber: 1, description: "Form the fixed-point equation.", workingLatex: "\\alpha = \\tfrac{\\alpha^{2} + a}{b \\alpha} \\Rightarrow b\\alpha^{2} = \\alpha^{2} + a \\Rightarrow (b - 1)\\alpha^{2} = a", explanation: "Set \\(g(\\alpha)=\\alpha\\) and multiply both sides by \\(b\\alpha\\) to clear the fraction before collecting the \\(\\alpha^2\\) terms." }, { stepNumber: 2, description: "Solve for α and note when it exists.", workingLatex: "\\alpha = \\sqrt{\\tfrac{a}{b - 1}},\\quad b > 1", explanation: "A real positive fixed point needs the bracket positive, so we require \\(b>1\\) (with \\(a>0\\) given). If \\(b\\le 1\\) there is no real fixed point." }, { stepNumber: 3, description: "Differentiate g and evaluate at α.", workingLatex: "g'(x) = \\tfrac{1}{b}\\!\\left(1 - \\tfrac{a}{x^{2}}\\right),\\ g'(\\alpha) = \\tfrac{1}{b}\\big(1 - (b - 1)\\big) = \\tfrac{2 - b}{b}", explanation: "Write \\(g(x)=\\tfrac{x}{b}+\\tfrac{a}{bx}\\) before differentiating. At \\(\\alpha\\) use \\(a/\\alpha^2 = b-1\\) from step 1 to simplify the slope." }, { stepNumber: 4, description: "Apply the convergence condition.", workingLatex: "\\left|\\tfrac{2 - b}{b}\\right| < 1 \\iff b > 1", explanation: "Solving the inequality: \\((2-b)/b<1\\) gives \\(b>1\\), and \\((2-b)/b>-1\\) gives \\(2>0\\) (always true). So convergence holds exactly when \\(b>1\\) — the same condition that makes the fixed point exist." } ], finalAnswer: "Fixed points exist when \\(b > 1\\); convergence guaranteed when \\(b > 1\\)." } },
  { id: "y2nm3-060", topicRef: "y2nm3", topicTitle: "Sketching Iteration 60", difficulty: "Challenge", questionText: "Sketch the staircase for \\(x_{n+1} = \\tfrac{1}{2}(x_{n} + \\tfrac{10}{x_{n}})\\) starting from \\(x_{0} = 1\\). Compute \\(x_{1},\\ x_{2}\\) to 4 decimal places.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["babylonian", "staircase"], workedSolution: { steps: [ { stepNumber: 1, description: "Identify the fixed point this targets.", workingLatex: "\\alpha = \\tfrac{1}{2}\\!\\left(\\alpha + \\tfrac{10}{\\alpha}\\right) \\Rightarrow \\alpha^{2} = 10 \\Rightarrow \\alpha = \\sqrt{10} \\approx 3.1623", explanation: "This is the Babylonian method for \\(\\sqrt{10}\\). Setting \\(g(\\alpha)=\\alpha\\) and simplifying gives \\(\\alpha^2=10\\), confirming the limit." }, { stepNumber: 2, description: "Compute the first iterate.", workingLatex: "x_{1} = \\tfrac{1}{2}\\!\\left(1 + \\tfrac{10}{1}\\right) = \\tfrac{1}{2}(11) = 5.5000", explanation: "Substitute \\(x_0=1\\). The first step overshoots above \\(\\sqrt{10}\\) because \\(x_0\\) was far below it." }, { stepNumber: 3, description: "Compute the second iterate.", workingLatex: "x_{2} = \\tfrac{1}{2}\\!\\left(5.5 + \\tfrac{10}{5.5}\\right) \\approx \\tfrac{1}{2}(7.3182) \\approx 3.6591", explanation: "Carry full precision in \\(10/5.5 = 1.8\\overline{18}\\) before halving, then round to 4 d.p. The iterate is already close to \\(\\sqrt{10}\\), showing the rapid convergence." }, { stepNumber: 4, description: "Sketch the staircase down to √10.", workingLatex: "", explanation: "Because \\(g'(\\sqrt{10}) = 0\\), convergence is quadratic: after the first overshoot the staircase slams in onto \\(\\sqrt{10}\\) within a couple of steps.", diagram: cobwebDiagram((x) => 0.5 * (x + 10 / x), [0.8, 6], [0.8, 6], 1, 3) } ], finalAnswer: "\\(x_{1} = 5.5000,\\ x_{2} \\approx 3.6591\\); staircase converging to \\(\\sqrt{10} \\approx 3.1623\\)." } },
  { id: "y2nm3-061", topicRef: "y2nm3", topicTitle: "Sketching Iteration 61", difficulty: "Challenge", questionText: "A diagram shows the iteration \\(x_{n+1} = g(x_{n})\\) being used to solve \\(f(x) = 0\\). Explain why the points \\((x_{n}, x_{n+1})\\) all lie on the curve \\(y = g(x)\\) but the horizontal transfer to \\(y = x\\) is what converts \\(x_{n+1}\\) into the next input.", marks: 3, examStyle: true, yearCreated: 2026, tags: ["concept"], workedSolution: { steps: [
      { stepNumber: 1, description: "Read the new value off the curve.", workingLatex: "x_{n+1} = g(x_{n})", explanation: "Standing at the current input \\(x_{n}\\) on the \\(x\\)-axis, move vertically to the curve; its height there is \\(g(x_{n})\\), which by definition equals \\(x_{n+1}\\). So the point \\((x_{n}, x_{n+1})\\) sits exactly on \\(y = g(x)\\)." },
      { stepNumber: 2, description: "Feed the output back as a new input.", workingLatex: "", explanation: "The value \\(x_{n+1}\\) is currently a height (a \\(y\\)-coordinate). To use it as the next input we need it on the \\(x\\)-axis. Moving horizontally to the line \\(y = x\\) reaches the point \\((x_{n+1}, x_{n+1})\\), whose \\(x\\)-coordinate is now \\(x_{n+1}\\) ready for the next vertical step.", diagram: cobwebDiagram((x) => 0.5 * x + 0.5, [0, 1.5], [0, 1.5], 0, 4) },
      { stepNumber: 3, description: "Explain why both lines are needed.", workingLatex: "", explanation: "A common slip is to think the staircase only needs the curve. The curve produces a value but leaves it as a height; without the line \\(y = x\\) to convert that height into a new horizontal position there is no way to iterate." }
    ], finalAnswer: "The curve produces the value; the line \\(y = x\\) feeds it back in as the next input." } },
  { id: "y2nm3-062", topicRef: "y2nm3", topicTitle: "Sketching Iteration 62", difficulty: "Challenge", questionText: "Sketch the diagram for \\(x_{n+1} = 4x_{n}(1 - x_{n})\\) starting from \\(x_{0} = 0.2\\). Comment on the behaviour.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["logistic", "chaotic"], workedSolution: { steps: [
      { stepNumber: 1, description: "Find the fixed points.", workingLatex: "x = 4x(1 - x) \\Rightarrow 4x^{2} - 3x = 0 \\Rightarrow x(4x - 3) = 0", explanation: "Set \\(g(x) = x\\) and solve. Factor out \\(x\\) rather than dividing by it, so you do not lose the root \\(x = 0\\). The fixed points are \\(x = 0\\) and \\(x = 0.75\\)." },
      { stepNumber: 2, description: "Test the slope at the interior fixed point.", workingLatex: "g'(x) = 4 - 8x;\\ g'(0.75) = 4 - 6 = -2", explanation: "Differentiate the quadratic and evaluate at \\(\\alpha = 0.75\\). Since \\(|g'(0.75)| = 2 > 1\\) the fixed point is repelling, so the iterates cannot settle there." },
      { stepNumber: 3, description: "Sketch the iterate path from \\(x_{0} = 0.2\\).", workingLatex: "", explanation: "Plot the downward parabola \\(y = 4x(1 - x)\\) and the line \\(y = x\\), then trace vertical-to-curve, horizontal-to-line steps. The path never converges; it wanders across the interval.", diagram: cobwebDiagram((x) => 4 * x * (1 - x), [0, 1], [0, 1], 0.2, 8) },
      { stepNumber: 4, description: "State the behaviour.", workingLatex: "", explanation: "Because both fixed points repel and the period-doubling cascade is complete at \\(r = 4\\), there is no stable cycle. Do not mistake the erratic path for an error in your sketch — the dynamics genuinely are chaotic." }
    ], finalAnswer: "Cobweb does not settle; behaviour is chaotic (period-doubling complete)." } },
  { id: "y2nm3-063", topicRef: "y2nm3", topicTitle: "Sketching Iteration 63", difficulty: "Challenge", questionText: "Sketch the staircase for \\(x_{n+1} = \\tfrac{1}{2}(x_{n} + 1)^{1/2}\\) starting from \\(x_{0} = 0.5\\). State the fixed-point equation.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["staircase"], workedSolution: { steps: [
      { stepNumber: 1, description: "Set up the fixed-point equation.", workingLatex: "\\alpha = \\tfrac{1}{2}\\sqrt{\\alpha + 1} \\Rightarrow 2\\alpha = \\sqrt{\\alpha + 1}", explanation: "Replace \\(x_{n+1}\\) and \\(x_{n}\\) by \\(\\alpha\\). Multiply by 2 to isolate the square root before squaring — squaring too early leaves a stray factor." },
      { stepNumber: 2, description: "Square and rearrange to a quadratic.", workingLatex: "4\\alpha^{2} = \\alpha + 1 \\Rightarrow 4\\alpha^{2} - \\alpha - 1 = 0", explanation: "Squaring both sides removes the root. Bring all terms to one side to read off the coefficients for the quadratic formula." },
      { stepNumber: 3, description: "Solve and pick the valid root.", workingLatex: "\\alpha = \\tfrac{1 + \\sqrt{17}}{8} \\approx 0.6404", explanation: "The quadratic formula gives \\(\\alpha = \\tfrac{1 \\pm \\sqrt{17}}{8}\\). Reject the negative root since \\(g(x) \\ge 0\\) and \\(x_{0} > 0\\); the relevant fixed point is positive." },
      { stepNumber: 4, description: "Confirm convergence via the slope.", workingLatex: "g'(x) = \\tfrac{1}{4\\sqrt{x + 1}};\\ g'(0.6404) \\approx 0.20", explanation: "With \\(0 < g'(\\alpha) < 1\\) the iterates approach \\(\\alpha\\) monotonically from one side, giving a staircase rather than a cobweb." },
      { stepNumber: 5, description: "Sketch the staircase from \\(x_{0} = 0.5\\).", workingLatex: "", explanation: "Plot the gently rising curve and the line \\(y = x\\), then step vertically up to the curve and horizontally across; the steps climb steadily toward \\(\\alpha\\).", diagram: cobwebDiagram((x) => 0.5 * Math.sqrt(x + 1), [0, 1], [0, 1], 0.5, 5) }
    ], finalAnswer: "Staircase converging to \\(\\alpha \\approx 0.6404\\)." } },
  { id: "y2nm3-064", topicRef: "y2nm3", topicTitle: "Sketching Iteration 64", difficulty: "Challenge", questionText: "Sketch the cobweb for \\(x_{n+1} = \\tfrac{3}{x_{n} + 2}\\) starting from \\(x_{0} = 0\\) and state the fixed-point equation.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["cobweb"], workedSolution: { steps: [
      { stepNumber: 1, description: "Form the fixed-point equation.", workingLatex: "\\alpha = \\tfrac{3}{\\alpha + 2} \\Rightarrow \\alpha(\\alpha + 2) = 3", explanation: "Set \\(g(\\alpha) = \\alpha\\) and clear the fraction by multiplying both sides by \\(\\alpha + 2\\)." },
      { stepNumber: 2, description: "Solve the quadratic.", workingLatex: "\\alpha^{2} + 2\\alpha - 3 = 0 \\Rightarrow (\\alpha + 3)(\\alpha - 1) = 0", explanation: "Factorise; the roots are \\(\\alpha = 1\\) and \\(\\alpha = -3\\). Take the positive root \\(\\alpha = 1\\), which is the one the iteration from \\(x_{0} = 0\\) approaches." },
      { stepNumber: 3, description: "Check the slope to confirm a cobweb.", workingLatex: "g'(x) = -\\tfrac{3}{(x + 2)^{2}};\\ g'(1) = -\\tfrac{1}{3}", explanation: "Since \\(-1 < g'(\\alpha) < 0\\) the iterates alternate either side of \\(\\alpha\\) while converging, which produces a cobweb (boxing-in) rather than a staircase." },
      { stepNumber: 4, description: "Sketch the cobweb from \\(x_{0} = 0\\).", workingLatex: "", explanation: "Plot the falling curve \\(y = 3/(x + 2)\\) and \\(y = x\\); the path spirals inward, boxing in the intersection at \\(\\alpha = 1\\).", diagram: cobwebDiagram((x) => 3 / (x + 2), [-0.2, 2], [-0.2, 2], 0, 5) }
    ], finalAnswer: "Cobweb converging to \\(\\alpha = 1\\)." } },
  { id: "y2nm3-065", topicRef: "y2nm3", topicTitle: "Sketching Iteration 65", difficulty: "Challenge", questionText: "Draw sketches showing each of: (a) a converging staircase, (b) a converging cobweb, (c) a diverging staircase, (d) a diverging cobweb. Label the slope of \\(g\\) at the fixed point in each case.", marks: 6, examStyle: true, yearCreated: 2026, tags: ["summary"], workedSolution: { steps: [
      { stepNumber: 1, description: "(a) Converging staircase.", workingLatex: "0 < g'(\\alpha) < 1", explanation: "A shallow positive slope means each iterate stays on the same side of \\(\\alpha\\) and creeps toward it, drawing a staircase that climbs (or descends) monotonically into the corner.", diagram: cobwebDiagram((x) => 0.5 * x + 0.5, [0, 1.5], [0, 1.5], 0, 4) },
      { stepNumber: 2, description: "(b) Converging cobweb.", workingLatex: "-1 < g'(\\alpha) < 0", explanation: "A shallow negative slope makes iterates flip to the opposite side of \\(\\alpha\\) each step while shrinking the error, so the path spirals inward as a cobweb.", diagram: cobwebDiagram((x) => -0.5 * x + 1.5, [0, 2], [0, 2], 0.2, 5) },
      { stepNumber: 3, description: "(c) Diverging staircase.", workingLatex: "g'(\\alpha) > 1", explanation: "A steep positive slope pushes iterates further from \\(\\alpha\\) on the same side each step, so the staircase marches away from the intersection.", diagram: cobwebDiagram((x) => 1.5 * x - 0.5, [0.6, 2.2], [0.6, 2.2], 1.1, 3) },
      { stepNumber: 4, description: "(d) Diverging cobweb.", workingLatex: "g'(\\alpha) < -1", explanation: "A steep negative slope flips sides each step but with growing error, so the cobweb spirals outward. The key idea throughout: the magnitude of \\(g'(\\alpha)\\) decides convergence, its sign decides staircase versus cobweb.", diagram: cobwebDiagram((x) => -1.5 * x + 2.5, [0.3, 1.7], [0.3, 1.7], 1.1, 2) }
    ], finalAnswer: "Four-quadrant summary — the slope determines the behaviour." } },
  { id: "y2nm3-066", topicRef: "y2nm3", topicTitle: "Sketching Iteration 66", difficulty: "Challenge", questionText: "A company models its monthly sales by \\(S_{n+1} = 0.7 S_{n} + 30\\) (thousand pounds). Sketch the staircase diagram from \\(S_{0} = 0\\) and state the long-run equilibrium.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["applied", "staircase"], workedSolution: { steps: [
      { stepNumber: 1, description: "Set output equal to input at equilibrium.", workingLatex: "\\alpha = 0.7\\alpha + 30", explanation: "The long-run equilibrium is the fixed point where sales stop changing, i.e. \\(S_{n+1} = S_{n} = \\alpha\\)." },
      { stepNumber: 2, description: "Solve for the equilibrium.", workingLatex: "0.3\\alpha = 30 \\Rightarrow \\alpha = 100", explanation: "Collect the \\(\\alpha\\) terms and divide. Keep the units in mind: \\(\\alpha = 100\\) means \\u00a3100k per month." },
      { stepNumber: 3, description: "Confirm convergence.", workingLatex: "g'(S) = 0.7,\\ 0 < 0.7 < 1", explanation: "The slope is a constant \\(0.7\\) (the model is linear), and \\(0 < 0.7 < 1\\) guarantees a monotone staircase climbing to the equilibrium." },
      { stepNumber: 4, description: "Sketch the staircase from \\(S_{0} = 0\\).", workingLatex: "", explanation: "Plot the line \\(y = 0.7x + 30\\) and \\(y = x\\); starting at \\(0\\) the steps rise and crowd together as they approach \\(100\\).", diagram: cobwebDiagram((x) => 0.7 * x + 30, [0, 120], [0, 120], 0, 5) }
    ], finalAnswer: "Staircase converging to \\u00a3100k per month." } },
  { id: "y2nm3-067", topicRef: "y2nm3", topicTitle: "Sketching Iteration 67", difficulty: "Challenge", questionText: "The iteration \\(x_{n+1} = \\tfrac{x_{n}}{2} + \\tfrac{1}{x_{n}}\\) has fixed point \\(\\alpha = \\sqrt{2}\\). Verify using the slope that convergence is fast, and sketch the staircase from \\(x_{0} = 1\\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["babylonian", "staircase"], workedSolution: { steps: [
      { stepNumber: 1, description: "Differentiate \\(g\\).", workingLatex: "g(x) = \\tfrac{x}{2} + \\tfrac{1}{x} \\Rightarrow g'(x) = \\tfrac{1}{2} - \\tfrac{1}{x^{2}}", explanation: "Differentiate term by term; remember \\(\\tfrac{1}{x} = x^{-1}\\) differentiates to \\(-x^{-2}\\), giving the \\(-\\tfrac{1}{x^{2}}\\) term." },
      { stepNumber: 2, description: "Evaluate the slope at the fixed point.", workingLatex: "g'(\\sqrt{2}) = \\tfrac{1}{2} - \\tfrac{1}{2} = 0", explanation: "Since \\((\\sqrt{2})^{2} = 2\\), the two halves cancel and the slope at \\(\\alpha\\) is exactly zero." },
      { stepNumber: 3, description: "Interpret the zero slope.", workingLatex: "|g'(\\alpha)| = 0 < 1", explanation: "A slope of zero means the error is roughly squared each step (quadratic convergence), so the iterates lock onto \\(\\sqrt{2}\\) extremely quickly — far faster than a typical linear staircase." },
      { stepNumber: 4, description: "Sketch the staircase from \\(x_{0} = 1\\).", workingLatex: "", explanation: "The curve is nearly flat where it meets \\(y = x\\); the first one or two steps already sit almost exactly on the intersection, visually confirming the rapid convergence.", diagram: cobwebDiagram((x) => x / 2 + 1 / x, [0.5, 2], [0.5, 2], 1, 3) }
    ], finalAnswer: "Staircase converging to \\(\\sqrt{2}\\) very rapidly." } },
  { id: "y2nm3-068", topicRef: "y2nm3", topicTitle: "Sketching Iteration 68", difficulty: "Challenge", questionText: "An iteration \\(x_{n+1} = g(x_{n})\\) has the sketch of \\(y = g(x)\\) shown as a curve steeper than \\(y = x\\) at the fixed point. If we change to the rearrangement \\(y = g^{-1}(x)\\), explain what happens to the slope and whether this new iteration might converge.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["theory"], workedSolution: { steps: [
      { stepNumber: 1, description: "Recall the inverse-slope relationship.", workingLatex: "(g^{-1})'(\\alpha) = \\tfrac{1}{g'(\\alpha)}", explanation: "The graph of \\(g^{-1}\\) is the reflection of \\(g\\) in the line \\(y = x\\), and reflection turns a slope into its reciprocal at the shared fixed point." },
      { stepNumber: 2, description: "Apply it to the steep original.", workingLatex: "g(x) = 2x - 1,\\ \\alpha = 1,\\ g'(\\alpha) = 2", explanation: "Take a concrete steep example: \\(g(x) = 2x - 1\\) has fixed point \\(\\alpha = 1\\) and slope \\(2 > 1\\), so its staircase diverges.", diagram: cobwebDiagram((x) => 2 * x - 1, [0.6, 2.2], [0.6, 2.2], 1.1, 2) },
      { stepNumber: 3, description: "Compute the inverse slope.", workingLatex: "g^{-1}(x) = \\tfrac{x + 1}{2},\\ (g^{-1})'(\\alpha) = \\tfrac{1}{2}", explanation: "Reciprocating \\(g'(\\alpha) = 2\\) gives \\(\\tfrac{1}{2}\\). Because a steep slope (\\(>1\\)) reciprocates to a shallow one (\\(<1\\)), the inverse iteration now satisfies the convergence condition.", diagram: cobwebDiagram((x) => (x + 1) / 2, [0, 2], [0, 2], 0, 4) },
      { stepNumber: 4, description: "State the conclusion.", workingLatex: "|(g^{-1})'(\\alpha)| = 0.5 < 1", explanation: "Since \\(|(g^{-1})'(\\alpha)| < 1\\), iterating with the inverse converges. This is the standard rescue: if a rearrangement diverges, try the rearrangement that makes \\(x\\) the subject the other way around." }
    ], finalAnswer: "The inverse has slope \\(< 1\\) in magnitude, so iteration with \\(g^{-1}\\) may now converge." } },
  { id: "y2nm3-069", topicRef: "y2nm3", topicTitle: "Sketching Iteration 69", difficulty: "Challenge", questionText: "Sketch the staircase diagram for the Newton–Raphson iteration applied to \\(f(x) = x^{2} - 5\\), starting from \\(x_{0} = 3\\). What is the slope of \\(g\\) at the fixed point?", marks: 5, examStyle: true, yearCreated: 2026, tags: ["staircase", "newton"], workedSolution: { steps: [
      { stepNumber: 1, description: "Write down the Newton–Raphson formula.", workingLatex: "g(x) = x - \\tfrac{f(x)}{f'(x)} = x - \\tfrac{x^{2} - 5}{2x}", explanation: "With \\(f(x) = x^{2} - 5\\) we have \\(f'(x) = 2x\\); substitute both into the Newton–Raphson iteration." },
      { stepNumber: 2, description: "Simplify to the Babylonian form.", workingLatex: "g(x) = \\tfrac{2x^{2} - (x^{2} - 5)}{2x} = \\tfrac{1}{2}\\left(x + \\tfrac{5}{x}\\right)", explanation: "Combine over a common denominator; the result is the classic square-root iteration, whose fixed point is \\(\\sqrt{5}\\)." },
      { stepNumber: 3, description: "Differentiate and evaluate at \\(\\sqrt{5}\\).", workingLatex: "g'(x) = \\tfrac{1}{2}\\left(1 - \\tfrac{5}{x^{2}}\\right);\\ g'(\\sqrt{5}) = 0", explanation: "At \\(x = \\sqrt{5}\\), \\(x^{2} = 5\\) so the bracket vanishes. A zero slope is the signature of Newton–Raphson's quadratic convergence." },
      { stepNumber: 4, description: "Sketch the staircase from \\(x_{0} = 3\\).", workingLatex: "", explanation: "The curve flattens to slope \\(0\\) where it crosses \\(y = x\\); the steps from \\(x_{0} = 3\\) collapse onto \\(\\sqrt{5} \\approx 2.236\\) in just two or three moves.", diagram: cobwebDiagram((x) => 0.5 * (x + 5 / x), [1, 3.5], [1, 3.5], 3, 3) }
    ], finalAnswer: "Staircase converges rapidly to \\(\\sqrt{5}\\); \\(g'(\\sqrt{5}) = 0\\)." } },
  { id: "y2nm3-070", topicRef: "y2nm3", topicTitle: "Sketching Iteration 70", difficulty: "Challenge", questionText: "Two iterations for solving \\(x^{3} - x - 1 = 0\\) are proposed: (i) \\(x_{n+1} = x_{n}^{3} - 1\\), (ii) \\(x_{n+1} = \\sqrt[3]{x_{n} + 1}\\). Sketch the diagram near the fixed point \\(\\alpha \\approx 1.325\\) for each and state which iteration converges.", marks: 6, examStyle: true, yearCreated: 2026, tags: ["comparison", "classification"], workedSolution: { steps: [
      { stepNumber: 1, description: "Differentiate rearrangement (i).", workingLatex: "g(x) = x^{3} - 1 \\Rightarrow g'(x) = 3x^{2}", explanation: "Both rearrangements share the fixed point \\(\\alpha \\approx 1.325\\); convergence is decided by the slope there, not by the equation itself." },
      { stepNumber: 2, description: "Test (i) at the fixed point.", workingLatex: "g'(\\alpha) = 3(1.325)^{2} \\approx 5.27", explanation: "Since \\(|g'(\\alpha)| \\approx 5.27 > 1\\), rearrangement (i) gives a diverging staircase — the steep curve throws iterates away from \\(\\alpha\\)." },
      { stepNumber: 3, description: "Differentiate rearrangement (ii).", workingLatex: "g(x) = (x + 1)^{1/3} \\Rightarrow g'(x) = \\tfrac{1}{3}(x + 1)^{-2/3}", explanation: "Use the chain rule on the cube root. The negative power means the slope shrinks as \\(x\\) grows." },
      { stepNumber: 4, description: "Test (ii) at the fixed point.", workingLatex: "g'(\\alpha) = \\tfrac{1}{3}(2.325)^{-2/3} \\approx 0.19", explanation: "Here \\(|g'(\\alpha)| \\approx 0.19 < 1\\), so rearrangement (ii) gives a convergent staircase." },
      { stepNumber: 5, description: "Sketch the convergent case (ii).", workingLatex: "", explanation: "Plot the shallow cube-root curve against \\(y = x\\) near \\(\\alpha\\); the steps from \\(x_{0} = 1\\) climb gently and converge, confirming (ii) is the usable rearrangement.", diagram: cobwebDiagram((x) => Math.cbrt(x + 1), [1, 1.5], [1, 1.5], 1, 4) }
    ], finalAnswer: "Only iteration (ii) converges; (i) diverges." } },
];
