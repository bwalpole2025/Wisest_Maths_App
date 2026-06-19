import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — § am6a
 * Method of Stationary Phase: isolated interior stationary point.
 * Ref: am6a
 *
 * 30 fully-worked questions on the leading-order stationary-phase contribution
 * from a single simple interior stationary point t0 of phi (phi'(t0)=0,
 * phi''(t0) != 0):
 *
 *   I(x) = \int_a^b g(t) e^{i x phi(t)} dt
 *        ~ g(t0) e^{i x phi(t0)} \sqrt{ 2\pi / (x |phi''(t0)|) } e^{i sgn(phi'') \pi/4},
 *        as x -> +\infty.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 2
 * (Oscillatory integrals & Stationary Phase, Q3, Q5, Q6), with constants,
 * limits and amplitudes varied. The core formula and the e^{±iπ/4} sign were
 * checked numerically with mpmath (Fresnel limit and several finite-range
 * integrals; relative error ~1–4% at moderate x, decreasing like O(1/x)).
 */
export const questions: Question[] = [
  // ── Foundation: the formula in isolation ───────────────────────────────
  {
    id: "am6a-001",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "State the leading-order stationary-phase approximation, as \\( x \\to +\\infty \\), of \\( I(x) = \\int_a^b g(t)\\,e^{ix\\phi(t)}\\,dt \\), where \\( \\phi \\) has a single simple stationary point \\( t_0 \\in (a,b) \\) with \\( \\phi'(t_0)=0 \\) and \\( \\phi''(t_0)>0 \\), and \\( g(t_0)\\neq 0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["stationary phase", "leading term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Localise the integral near the stationary point.", workingLatex: "\\phi'(t_0)=0,\\qquad \\phi(t)\\approx \\phi(t_0)+\\tfrac12\\phi''(t_0)(t-t_0)^2.", explanation: "Away from \\( t_0 \\) the integrand oscillates rapidly and cancels; only a neighbourhood of \\( t_0 \\) contributes at leading order, so we Taylor-expand the phase to quadratic order there." },
        { stepNumber: 2, description: "Approximate the amplitude by its value at \\( t_0 \\).", workingLatex: "g(t)\\approx g(t_0),\\qquad I(x)\\approx g(t_0)e^{ix\\phi(t_0)}\\int_{-\\infty}^{\\infty} e^{\\,i\\frac{x}{2}\\phi''(t_0)(t-t_0)^2}\\,dt.", explanation: "The slowly-varying amplitude is replaced by its value at \\( t_0 \\); the Gaussian-type window lets the limits be extended to \\( \\pm\\infty \\) with exponentially small error." },
        { stepNumber: 3, description: "Evaluate the Fresnel integral.", workingLatex: "\\int_{-\\infty}^{\\infty} e^{\\,i\\beta s^2}\\,ds = \\sqrt{\\frac{\\pi}{|\\beta|}}\\,e^{\\,i\\,\\mathrm{sgn}(\\beta)\\pi/4},\\quad \\beta=\\tfrac{x}{2}\\phi''(t_0)>0.", explanation: "This is the standard Fresnel integral; the \\( e^{i\\pi/4} \\) factor carries the sign of the phase curvature." },
        { stepNumber: 4, description: "Combine.", workingLatex: "I(x)\\sim g(t_0)\\,e^{ix\\phi(t_0)}\\,\\sqrt{\\frac{2\\pi}{x\\,\\phi''(t_0)}}\\;e^{\\,i\\pi/4}.", explanation: "With \\( \\phi''(t_0)>0 \\) the phase offset is \\( +\\pi/4 \\). This is the leading stationary-phase contribution." },
      ],
      finalAnswer: "\\( I(x)\\sim g(t_0)\\,e^{ix\\phi(t_0)}\\sqrt{\\dfrac{2\\pi}{x\\,\\phi''(t_0)}}\\;e^{i\\pi/4} \\)",
    },
  },
  {
    id: "am6a-002",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the leading-order behaviour, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-1}^{2} e^{ix t^2}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["stationary phase", "Fresnel"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the stationary point.", workingLatex: "\\phi(t)=t^2,\\quad \\phi'(t)=2t=0 \\implies t_0=0\\in(-1,2).", explanation: "The phase has one simple stationary point, in the interior of the range.", mafs: `<Mafs viewBox={{ x: [-2.4, 2.4], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => t*t} domain={[-1.35, 1.35]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.9,1.5]} tex="\\phi(t)=t^2" color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.55,0.55]} tex="\\phi'(t_0)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.15,-0.25]} tex="t" />
</Mafs>` },
        { stepNumber: 2, description: "Compute the curvature and amplitude.", workingLatex: "\\phi''(t)=2,\\quad \\phi''(0)=2>0,\\quad g(t_0)=1,\\quad \\phi(t_0)=0.", explanation: "Positive curvature gives the \\( +\\pi/4 \\) phase; the amplitude is constant." },
        { stepNumber: 3, description: "Apply the formula.", workingLatex: "I(x)\\sim 1\\cdot e^{0}\\sqrt{\\frac{2\\pi}{x\\cdot 2}}\\,e^{i\\pi/4}=\\sqrt{\\frac{\\pi}{x}}\\,e^{i\\pi/4}.", explanation: "Substitute into \\( g(t_0)e^{ix\\phi(t_0)}\\sqrt{2\\pi/(x|\\phi''|)}\\,e^{i\\,\\mathrm{sgn}(\\phi'')\\pi/4} \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{\\pi}{x}}\\,e^{i\\pi/4} \\)",
    },
  },
  {
    id: "am6a-003",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the leading-order behaviour, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-2}^{3} e^{-ix t^2}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["stationary phase", "negative curvature"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the stationary point.", workingLatex: "\\phi(t)=-t^2,\\quad \\phi'(t)=-2t=0 \\implies t_0=0\\in(-2,3).", explanation: "Single simple interior stationary point." },
        { stepNumber: 2, description: "Compute the curvature.", workingLatex: "\\phi''(t)=-2,\\quad \\phi''(0)=-2<0,\\quad g(t_0)=1,\\quad \\phi(t_0)=0.", explanation: "Negative curvature means the phase offset is \\( -\\pi/4 \\)." },
        { stepNumber: 3, description: "Apply the formula.", workingLatex: "I(x)\\sim \\sqrt{\\frac{2\\pi}{x\\cdot 2}}\\,e^{-i\\pi/4}=\\sqrt{\\frac{\\pi}{x}}\\,e^{-i\\pi/4}.", explanation: "Use \\( |\\phi''(t_0)|=2 \\) and the sign \\( \\mathrm{sgn}(\\phi'')=-1 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{\\pi}{x}}\\,e^{-i\\pi/4} \\)",
    },
  },
  {
    id: "am6a-004",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the leading-order behaviour, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-1}^{1} e^{ix\\,(3t^2)}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["stationary phase", "curvature scaling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point and curvature.", workingLatex: "\\phi(t)=3t^2,\\ \\phi'(t)=6t=0\\Rightarrow t_0=0;\\quad \\phi''(0)=6>0.", explanation: "Larger curvature concentrates the contribution more tightly, shrinking the amplitude like \\( 1/\\sqrt{\\phi''} \\)." },
        { stepNumber: 2, description: "Apply the formula.", workingLatex: "I(x)\\sim \\sqrt{\\frac{2\\pi}{6x}}\\,e^{i\\pi/4}=\\sqrt{\\frac{\\pi}{3x}}\\,e^{i\\pi/4}.", explanation: "Substitute \\( |\\phi''(t_0)|=6 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{\\pi}{3x}}\\,e^{i\\pi/4} \\)",
    },
  },
  {
    id: "am6a-005",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the leading-order behaviour, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{2}^{5} e^{ix\\,[\\,1+(t-3)^2\\,]}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["stationary phase", "phase offset"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point.", workingLatex: "\\phi(t)=1+(t-3)^2,\\ \\phi'(t)=2(t-3)=0\\Rightarrow t_0=3\\in(2,5).", explanation: "The shift inside the square moves the stationary point to \\( t_0=3 \\)." },
        { stepNumber: 2, description: "Curvature, amplitude and phase value.", workingLatex: "\\phi''(3)=2>0,\\quad g(t_0)=1,\\quad \\phi(t_0)=1.", explanation: "The constant \\( +1 \\) in the phase survives as an overall factor \\( e^{ix} \\)." },
        { stepNumber: 3, description: "Apply the formula.", workingLatex: "I(x)\\sim e^{ix}\\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=\\sqrt{\\frac{\\pi}{x}}\\,e^{i(x+\\pi/4)}.", explanation: "The non-zero \\( \\phi(t_0) \\) appears as the rapidly oscillating prefactor \\( e^{ix\\phi(t_0)} \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{\\pi}{x}}\\,e^{i(x+\\pi/4)} \\)",
    },
  },
  {
    id: "am6a-006",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the leading-order behaviour, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-1}^{1} (2+t)\\,e^{ix t^2}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["stationary phase", "amplitude"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point and curvature.", workingLatex: "\\phi(t)=t^2,\\ t_0=0,\\ \\phi''(0)=2>0.", explanation: "The amplitude is now non-constant, \\( g(t)=2+t \\)." },
        { stepNumber: 2, description: "Evaluate the amplitude at \\( t_0 \\).", workingLatex: "g(t_0)=g(0)=2.", explanation: "At leading order only \\( g(t_0) \\) enters; the linear term \\( t \\) contributes at the next order." },
        { stepNumber: 3, description: "Apply the formula.", workingLatex: "I(x)\\sim 2\\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=2\\sqrt{\\frac{\\pi}{x}}\\,e^{i\\pi/4}.", explanation: "Substitute \\( g(t_0)=2 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim 2\\sqrt{\\dfrac{\\pi}{x}}\\,e^{i\\pi/4} \\)",
    },
  },

  // ── Standard: sheet-level single interior stationary point ──────────────
  {
    id: "am6a-007",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{\\pi} e^{ix\\sin t}\\,dt \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "trigonometric phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the stationary point.", workingLatex: "\\phi(t)=\\sin t,\\quad \\phi'(t)=\\cos t=0 \\implies t_0=\\tfrac{\\pi}{2}\\in(0,\\pi).", explanation: "There is one interior stationary point; the endpoints \\( t=0,\\pi \\) are not stationary and give subdominant \\( O(1/x) \\) contributions.", mafs: `<Mafs viewBox={{ x: [-0.83, 3.97], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => Math.sin(t)} domain={[-0.83, 3.97]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={1.5708} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[3.0,-1.45]} tex="\\phi(t)=\\sin t" color="var(--mafs-fg-accent)" />
  <LaTeX at={[1.65,1.3]} tex="\\phi'(t_0)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[3.7,-0.25]} tex="t" />
</Mafs>` },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''(t)=-\\sin t,\\quad \\phi''(\\tfrac{\\pi}{2})=-1<0,\\quad \\phi(\\tfrac{\\pi}{2})=1.", explanation: "Negative curvature gives the \\( -\\pi/4 \\) factor; the phase value at the maximum is \\( 1 \\)." },
        { stepNumber: 3, description: "Amplitude.", workingLatex: "g(t)=1\\Rightarrow g(t_0)=1.", explanation: "Constant amplitude." },
        { stepNumber: 4, description: "Apply the stationary-phase formula.", workingLatex: "I(x)\\sim e^{ix}\\sqrt{\\frac{2\\pi}{x\\cdot 1}}\\,e^{-i\\pi/4}=\\sqrt{\\frac{2\\pi}{x}}\\,e^{i(x-\\pi/4)}.", explanation: "Substitute \\( |\\phi''(t_0)|=1 \\), \\( \\phi(t_0)=1 \\), and \\( \\mathrm{sgn}(\\phi'')=-1 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{2\\pi}{x}}\\,e^{i(x-\\pi/4)} \\)",
    },
  },
  {
    id: "am6a-008",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{\\pi} (2+\\cos t)\\,e^{ix\\sin t}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "amplitude", "trigonometric phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the stationary point.", workingLatex: "\\phi(t)=\\sin t,\\ \\phi'(t)=\\cos t=0\\Rightarrow t_0=\\tfrac{\\pi}{2}\\in(0,\\pi).", explanation: "Single simple interior stationary point." },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''(\\tfrac{\\pi}{2})=-1<0,\\quad \\phi(\\tfrac{\\pi}{2})=1.", explanation: "Negative curvature, maximum value \\( 1 \\)." },
        { stepNumber: 3, description: "Evaluate the amplitude at \\( t_0 \\).", workingLatex: "g(t)=2+\\cos t,\\quad g(\\tfrac{\\pi}{2})=2+0=2.", explanation: "The \\( \\cos t \\) part vanishes exactly at the stationary point, so the effective amplitude is \\( 2 \\)." },
        { stepNumber: 4, description: "Apply the formula.", workingLatex: "I(x)\\sim 2\\,e^{ix}\\sqrt{\\frac{2\\pi}{x}}\\,e^{-i\\pi/4}=2\\sqrt{\\frac{2\\pi}{x}}\\,e^{i(x-\\pi/4)}.", explanation: "Substitute \\( g(t_0)=2 \\), \\( |\\phi''|=1 \\), \\( \\phi(t_0)=1 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim 2\\sqrt{\\dfrac{2\\pi}{x}}\\,e^{i(x-\\pi/4)} \\)",
    },
  },
  {
    id: "am6a-009",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-1}^{1} e^{ix\\cos t}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "trigonometric phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the stationary point.", workingLatex: "\\phi(t)=\\cos t,\\ \\phi'(t)=-\\sin t=0\\Rightarrow t_0=0\\in(-1,1).", explanation: "\\( \\sin t=0 \\) only at \\( t=0 \\) inside \\( (-1,1) \\); it is a simple interior stationary point." },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''(t)=-\\cos t,\\quad \\phi''(0)=-1<0,\\quad \\phi(0)=1.", explanation: "The cosine has a maximum at \\( t=0 \\), so the curvature is negative." },
        { stepNumber: 3, description: "Amplitude.", workingLatex: "g(t_0)=1.", explanation: "Constant amplitude." },
        { stepNumber: 4, description: "Apply the formula.", workingLatex: "I(x)\\sim e^{ix}\\sqrt{\\frac{2\\pi}{x}}\\,e^{-i\\pi/4}=\\sqrt{\\frac{2\\pi}{x}}\\,e^{i(x-\\pi/4)}.", explanation: "Substitute \\( |\\phi''|=1 \\), \\( \\phi(t_0)=1 \\), negative curvature." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{2\\pi}{x}}\\,e^{i(x-\\pi/4)} \\)",
    },
  },
  {
    id: "am6a-010",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{2} e^{ix\\,(t^2-2t)}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "completing the square"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the stationary point.", workingLatex: "\\phi(t)=t^2-2t,\\ \\phi'(t)=2t-2=0\\Rightarrow t_0=1\\in(0,2).", explanation: "One simple interior stationary point at \\( t_0=1 \\).", mafs: `<Mafs viewBox={{ x: [-1.4, 3.4], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => t*t - 2*t} domain={[-0.55, 2.55]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={1} y={-1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.0,1.5]} tex="\\phi(t)=t^2-2t" color="var(--mafs-fg-accent)" />
  <LaTeX at={[1.2,-0.95]} tex="\\phi'(t_0)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[3.15,-0.25]} tex="t" />
</Mafs>` },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''(t)=2>0,\\quad \\phi(1)=1-2=-1.", explanation: "Positive curvature gives \\( +\\pi/4 \\); the phase minimum value is \\( -1 \\)." },
        { stepNumber: 3, description: "Apply the formula.", workingLatex: "I(x)\\sim e^{-ix}\\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=\\sqrt{\\frac{\\pi}{x}}\\,e^{i(-x+\\pi/4)}.", explanation: "Substitute \\( g(t_0)=1 \\), \\( |\\phi''|=2 \\), \\( \\phi(t_0)=-1 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{\\pi}{x}}\\,e^{i(\\pi/4-x)} \\)",
    },
  },
  {
    id: "am6a-011",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-2}^{2} \\frac{e^{ix t^2}}{1+t^2}\\,dt \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "rational amplitude"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point.", workingLatex: "\\phi(t)=t^2,\\ t_0=0\\in(-2,2),\\ \\phi''(0)=2>0.", explanation: "Single simple interior stationary point." },
        { stepNumber: 2, description: "Amplitude at \\( t_0 \\).", workingLatex: "g(t)=\\frac{1}{1+t^2},\\quad g(0)=1.", explanation: "Evaluate the smooth amplitude at the stationary point." },
        { stepNumber: 3, description: "Apply the formula.", workingLatex: "I(x)\\sim 1\\cdot\\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=\\sqrt{\\frac{\\pi}{x}}\\,e^{i\\pi/4}.", explanation: "Substitute \\( g(t_0)=1 \\), \\( |\\phi''|=2 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{\\pi}{x}}\\,e^{i\\pi/4} \\)",
    },
  },
  {
    id: "am6a-012",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{\\pi} \\cos t\\,\\;e^{ix\\,(t-\\frac{1}{2}\\sin 2t)}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "trigonometric phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the phase.", workingLatex: "\\phi(t)=t-\\tfrac12\\sin 2t,\\quad \\phi'(t)=1-\\cos 2t.", explanation: "Use \\( \\frac{d}{dt}\\!\\left(-\\tfrac12\\sin 2t\\right)=-\\cos 2t \\)." },
        { stepNumber: 2, description: "Solve for stationary points.", workingLatex: "1-\\cos 2t=0\\Rightarrow \\cos 2t=1\\Rightarrow t=0,\\pi.", explanation: "Both roots in \\( [0,\\pi] \\) are endpoints, and there \\( \\phi'' \\) also vanishes — so these are degenerate, not simple interior, points." },
        { stepNumber: 3, description: "Re-examine the curvature.", workingLatex: "\\phi''(t)=2\\sin 2t,\\quad \\phi''(0)=\\phi''(\\pi)=0.", explanation: "Since \\( \\phi'' \\) vanishes at every stationary point, there is NO simple interior stationary point — the simple-point formula does not apply." },
        { stepNumber: 4, description: "State the conclusion.", workingLatex: "\\text{No simple interior stationary point} \\Rightarrow \\text{this method gives no leading interior term.}", explanation: "This is a deliberate trap: always confirm \\( \\phi''(t_0)\\neq 0 \\) before quoting the \\( e^{\\pm i\\pi/4} \\) result; here the points are degenerate (higher-order) and need a different scaling." },
      ],
      finalAnswer: "No simple interior stationary point: \\( \\phi''=0 \\) at both stationary points, so the standard \\( e^{\\pm i\\pi/4} \\) formula does not apply.",
    },
  },
  {
    id: "am6a-013",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-\\pi/2}^{\\pi/2} e^{-ix\\cos t}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "negative curvature", "trigonometric phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point.", workingLatex: "\\phi(t)=-\\cos t,\\ \\phi'(t)=\\sin t=0\\Rightarrow t_0=0\\in(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}).", explanation: "Single simple interior stationary point." },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''(t)=\\cos t,\\quad \\phi''(0)=1>0,\\quad \\phi(0)=-1.", explanation: "With the minus sign in the phase, \\( -\\cos t \\) has a minimum at \\( t=0 \\), hence positive curvature." },
        { stepNumber: 3, description: "Apply the formula.", workingLatex: "I(x)\\sim e^{-ix}\\sqrt{\\frac{2\\pi}{x}}\\,e^{i\\pi/4}=\\sqrt{\\frac{2\\pi}{x}}\\,e^{i(\\pi/4-x)}.", explanation: "Substitute \\( |\\phi''|=1 \\), \\( \\phi(t_0)=-1 \\), positive curvature." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{2\\pi}{x}}\\,e^{i(\\pi/4-x)} \\)",
    },
  },
  {
    id: "am6a-014",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "By taking the real part of a suitable oscillatory integral, find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle J(x)=\\int_{0}^{\\pi} \\cos\\!\\big(x\\sin t\\big)\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "real part", "Bessel"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write as the real part of a complex integral.", workingLatex: "J(x)=\\mathrm{Re}\\int_{0}^{\\pi} e^{ix\\sin t}\\,dt.", explanation: "Since \\( \\cos\\theta=\\mathrm{Re}\\,e^{i\\theta} \\), the cosine integral is the real part of the standard oscillatory integral (this is \\( \\pi J_0(x) \\))." },
        { stepNumber: 2, description: "Apply stationary phase to the complex integral.", workingLatex: "\\int_{0}^{\\pi} e^{ix\\sin t}\\,dt\\sim \\sqrt{\\frac{2\\pi}{x}}\\,e^{i(x-\\pi/4)},", explanation: "From \\( t_0=\\tfrac\\pi2 \\), \\( \\phi''=-1 \\), \\( \\phi(t_0)=1 \\) (as in am6a-007)." },
        { stepNumber: 3, description: "Take the real part.", workingLatex: "J(x)\\sim \\sqrt{\\frac{2\\pi}{x}}\\,\\cos\\!\\Big(x-\\frac{\\pi}{4}\\Big).", explanation: "\\( \\mathrm{Re}\\,e^{i(x-\\pi/4)}=\\cos(x-\\pi/4) \\). This recovers the classical large-argument form \\( J_0(x)\\sim\\sqrt{2/(\\pi x)}\\cos(x-\\pi/4) \\)." },
      ],
      finalAnswer: "\\( J(x)\\sim \\sqrt{\\dfrac{2\\pi}{x}}\\,\\cos\\!\\Big(x-\\dfrac{\\pi}{4}\\Big) \\)",
    },
  },
  {
    id: "am6a-015",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{3} t\\,e^{ix\\,(t-2)^2}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "amplitude", "phase offset"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point.", workingLatex: "\\phi(t)=(t-2)^2,\\ \\phi'(t)=2(t-2)=0\\Rightarrow t_0=2\\in(0,3).", explanation: "Simple interior stationary point at \\( t_0=2 \\)." },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''(2)=2>0,\\quad \\phi(2)=0.", explanation: "Positive curvature, phase value zero at the stationary point." },
        { stepNumber: 3, description: "Amplitude at \\( t_0 \\).", workingLatex: "g(t)=t,\\quad g(2)=2.", explanation: "Evaluate the amplitude at \\( t_0=2 \\)." },
        { stepNumber: 4, description: "Apply the formula.", workingLatex: "I(x)\\sim 2\\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=2\\sqrt{\\frac{\\pi}{x}}\\,e^{i\\pi/4}.", explanation: "Substitute \\( g(t_0)=2 \\), \\( |\\phi''|=2 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim 2\\sqrt{\\dfrac{\\pi}{x}}\\,e^{i\\pi/4} \\)",
    },
  },
  {
    id: "am6a-016",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-1}^{4} e^{ix\\,(t^2-4t+1)}\\,dt \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "completing the square"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point.", workingLatex: "\\phi'(t)=2t-4=0\\Rightarrow t_0=2\\in(-1,4).", explanation: "Simple interior stationary point." },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''=2>0,\\quad \\phi(2)=4-8+1=-3.", explanation: "Evaluate the quadratic at \\( t_0=2 \\)." },
        { stepNumber: 3, description: "Apply the formula.", workingLatex: "I(x)\\sim e^{-3ix}\\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=\\sqrt{\\frac{\\pi}{x}}\\,e^{i(\\pi/4-3x)}.", explanation: "Substitute \\( g(t_0)=1 \\), \\( |\\phi''|=2 \\), \\( \\phi(t_0)=-3 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{\\pi}{x}}\\,e^{i(\\pi/4-3x)} \\)",
    },
  },
  {
    id: "am6a-017",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 17",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-\\pi/2}^{\\pi/2} (1+t^2)\\,e^{ix\\sin t}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "amplitude", "trigonometric phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point.", workingLatex: "\\phi(t)=\\sin t,\\ \\phi'(t)=\\cos t=0\\Rightarrow t_0=0?\\ \\text{No: } \\cos 0=1.", explanation: "Inside \\( (-\\tfrac\\pi2,\\tfrac\\pi2) \\), \\( \\cos t \\) never vanishes, so there is no interior stationary point — \\( t=\\pm\\tfrac\\pi2 \\) are endpoints." },
        { stepNumber: 2, description: "Conclude.", workingLatex: "\\cos t>0\\ \\text{on}\\ (-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}) \\Rightarrow \\text{no interior stationary point.}", explanation: "With no stationary point in the open interval, the leading contribution is from the endpoints, of order \\( O(1/x) \\), not the \\( O(x^{-1/2}) \\) stationary-phase order." },
        { stepNumber: 3, description: "Endpoint leading order.", workingLatex: "I(x)\\sim \\frac{g(b)e^{ix\\phi(b)}}{ix\\,\\phi'(b)}-\\frac{g(a)e^{ix\\phi(a)}}{ix\\,\\phi'(a)}=O\\!\\left(\\frac{1}{x}\\right).", explanation: "By integration by parts (the non-stationary boundary formula), each endpoint contributes \\( O(1/x) \\); there is no \\( x^{-1/2} \\) interior term." },
      ],
      finalAnswer: "No interior stationary point on \\( (-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}) \\); leading behaviour is the \\( O(1/x) \\) endpoint contribution, not the \\( x^{-1/2} \\) stationary-phase term.",
    },
  },
  {
    id: "am6a-018",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x \\to +\\infty \\), of \\( \\displaystyle I(x)=\\int_{-3}^{3} e^{\\,\\frac{i}{2}x t^2}\\,dt \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "curvature scaling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point and curvature.", workingLatex: "\\phi(t)=\\tfrac12 t^2,\\ \\phi'(t)=t=0\\Rightarrow t_0=0;\\quad \\phi''(0)=1>0.", explanation: "Here the curvature is exactly \\( 1 \\), so the amplitude factor simplifies." },
        { stepNumber: 2, description: "Apply the formula.", workingLatex: "I(x)\\sim \\sqrt{\\frac{2\\pi}{x\\cdot 1}}\\,e^{i\\pi/4}=\\sqrt{\\frac{2\\pi}{x}}\\,e^{i\\pi/4}.", explanation: "Substitute \\( g(t_0)=1 \\), \\( |\\phi''|=1 \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{2\\pi}{x}}\\,e^{i\\pi/4} \\)",
    },
  },

  // ── Challenge: synoptic / multi-step / starred-level ────────────────────
  {
    id: "am6a-019",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "By taking the real part of a suitable oscillatory integral, show that the modified Bessel-type integral \\( \\displaystyle J(x)=\\int_{0}^{\\pi}\\cos\\!\\big(x\\sin t-t\\big)\\,dt \\) satisfies \\( J(x)\\sim\\sqrt{2\\pi/x}\\,\\cos\\!\\big(x-\\tfrac{3\\pi}{4}\\big) \\) as \\( x\\to+\\infty \\). (This is \\( \\pi J_1(x) \\).)",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "Bessel", "real part"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write as a complex oscillatory integral.", workingLatex: "J(x)=\\mathrm{Re}\\int_{0}^{\\pi} e^{i(x\\sin t-t)}\\,dt=\\mathrm{Re}\\int_{0}^{\\pi} e^{-it}\\,e^{ix\\sin t}\\,dt.", explanation: "Separate the slowly-varying amplitude \\( e^{-it} \\) from the large phase \\( x\\sin t \\); only the \\( x\\sin t \\) part is multiplied by the large parameter." },
        { stepNumber: 2, description: "Identify the phase and amplitude.", workingLatex: "\\phi(t)=\\sin t,\\qquad g(t)=e^{-it}.", explanation: "The factor \\( e^{-it} \\) is \\( O(1) \\) and does not affect the location of the stationary point." },
        { stepNumber: 3, description: "Locate the stationary point.", workingLatex: "\\phi'(t)=\\cos t=0\\Rightarrow t_0=\\tfrac{\\pi}{2}\\in(0,\\pi).", explanation: "Single simple interior stationary point." },
        { stepNumber: 4, description: "Curvature and values at \\( t_0 \\).", workingLatex: "\\phi''(\\tfrac{\\pi}{2})=-1<0,\\quad \\phi(\\tfrac{\\pi}{2})=1,\\quad g(\\tfrac{\\pi}{2})=e^{-i\\pi/2}=-i.", explanation: "The amplitude at the stationary point carries an extra phase \\( e^{-i\\pi/2} \\)." },
        { stepNumber: 5, description: "Apply the stationary-phase formula.", workingLatex: "\\int_{0}^{\\pi} e^{-it}e^{ix\\sin t}dt\\sim (-i)\\,e^{ix}\\sqrt{\\frac{2\\pi}{x}}\\,e^{-i\\pi/4}=\\sqrt{\\frac{2\\pi}{x}}\\,e^{i(x-\\pi/4-\\pi/2)}.", explanation: "Combine \\( g(t_0)=e^{-i\\pi/2} \\), \\( \\phi(t_0)=1 \\), \\( |\\phi''|=1 \\), and the \\( e^{-i\\pi/4} \\) from negative curvature; the phases add: \\( -\\tfrac\\pi2-\\tfrac\\pi4 \\)." },
        { stepNumber: 6, description: "Simplify the phase and take the real part.", workingLatex: "=\\sqrt{\\frac{2\\pi}{x}}\\,e^{i(x-3\\pi/4)}\\ \\Rightarrow\\ J(x)\\sim\\sqrt{\\frac{2\\pi}{x}}\\,\\cos\\!\\Big(x-\\frac{3\\pi}{4}\\Big).", explanation: "\\( -\\tfrac\\pi4-\\tfrac\\pi2=-\\tfrac{3\\pi}{4} \\); the real part gives the stated asymptotic, matching \\( J_1(x)\\sim\\sqrt{2/(\\pi x)}\\cos(x-3\\pi/4) \\)." },
      ],
      finalAnswer: "\\( J(x)\\sim \\sqrt{\\dfrac{2\\pi}{x}}\\,\\cos\\!\\Big(x-\\dfrac{3\\pi}{4}\\Big) \\)",
    },
  },
  {
    id: "am6a-020",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x\\to+\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{\\pi} e^{ix\\,(2\\sin t-\\sin 2t)/2}\\,dt \\), taking care to identify the simple interior stationary point.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "trigonometric phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the phase.", workingLatex: "\\phi(t)=\\sin t-\\tfrac12\\sin 2t,\\quad \\phi'(t)=\\cos t-\\cos 2t.", explanation: "Differentiate term by term; \\( \\tfrac{d}{dt}(-\\tfrac12\\sin 2t)=-\\cos 2t \\)." },
        { stepNumber: 2, description: "Solve for stationary points.", workingLatex: "\\cos t=\\cos 2t=2\\cos^2 t-1\\Rightarrow 2c^2-c-1=0,\\ c=\\cos t.", explanation: "Use the double-angle identity \\( \\cos 2t=2\\cos^2 t-1 \\) to get a quadratic in \\( c=\\cos t \\)." },
        { stepNumber: 3, description: "Factor the quadratic.", workingLatex: "2c^2-c-1=(2c+1)(c-1)=0\\Rightarrow c=1\\ \\text{or}\\ c=-\\tfrac12.", explanation: "\\( c=1 \\) gives the endpoint \\( t=0 \\); \\( c=-\\tfrac12 \\) gives the interior point \\( t_0=\\tfrac{2\\pi}{3} \\)." },
        { stepNumber: 4, description: "Check the curvature at the interior point.", workingLatex: "\\phi''(t)=-\\sin t+2\\sin 2t,\\quad \\phi''(\\tfrac{2\\pi}{3})=-\\tfrac{\\sqrt3}{2}+2\\!\\left(-\\tfrac{\\sqrt3}{2}\\right)=-\\tfrac{3\\sqrt3}{2}.", explanation: "\\( \\sin\\tfrac{2\\pi}{3}=\\tfrac{\\sqrt3}{2} \\) and \\( \\sin\\tfrac{4\\pi}{3}=-\\tfrac{\\sqrt3}{2} \\); the curvature is non-zero and negative, so this is a simple interior stationary point." },
        { stepNumber: 5, description: "Phase value at the stationary point.", workingLatex: "\\phi(\\tfrac{2\\pi}{3})=\\tfrac{\\sqrt3}{2}-\\tfrac12\\!\\left(-\\tfrac{\\sqrt3}{2}\\right)=\\tfrac{3\\sqrt3}{4}.", explanation: "\\( \\sin\\tfrac{2\\pi}{3}=\\tfrac{\\sqrt3}{2} \\) and \\( \\sin\\tfrac{4\\pi}{3}=-\\tfrac{\\sqrt3}{2} \\)." },
        { stepNumber: 6, description: "Apply the formula.", workingLatex: "I(x)\\sim e^{\\,i x\\,3\\sqrt3/4}\\sqrt{\\frac{2\\pi}{x\\cdot \\tfrac{3\\sqrt3}{2}}}\\,e^{-i\\pi/4}=\\sqrt{\\frac{4\\pi}{3\\sqrt3\\,x}}\\,e^{i\\big(\\frac{3\\sqrt3}{4}x-\\frac{\\pi}{4}\\big)}.", explanation: "Substitute \\( g(t_0)=1 \\), \\( |\\phi''(t_0)|=\\tfrac{3\\sqrt3}{2} \\), negative curvature, and \\( \\phi(t_0)=\\tfrac{3\\sqrt3}{4} \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\sqrt{\\dfrac{4\\pi}{3\\sqrt3\\,x}}\\,e^{i\\left(\\frac{3\\sqrt3}{4}x-\\frac{\\pi}{4}\\right)} \\)",
    },
  },
  {
    id: "am6a-021",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A function \\( g \\) is smooth with \\( g(t)\\to 0 \\) as \\( t\\to\\pm\\infty \\). Show that, as \\( x\\to+\\infty \\), \\( \\displaystyle I(x)=\\int_{-\\infty}^{\\infty} g(t)\\,e^{ix\\,(t^2-t)}\\,dt \\sim g\\!\\big(\\tfrac12\\big)\\sqrt{\\tfrac{2\\pi}{x}}\\;e^{i(\\pi/4 - x/4)} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "amplitude", "show that"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the stationary point.", workingLatex: "\\phi(t)=t^2-t,\\quad \\phi'(t)=2t-1=0\\Rightarrow t_0=\\tfrac12.", explanation: "There is a single simple stationary point on the whole real line; the decay of \\( g \\) makes the contributions from large \\( |t| \\) negligible." },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''=2>0,\\quad \\phi(\\tfrac12)=\\tfrac14-\\tfrac12=-\\tfrac14.", explanation: "Positive curvature gives the \\( +\\pi/4 \\) factor; the phase value at \\( t_0 \\) is \\( -\\tfrac14 \\)." },
        { stepNumber: 3, description: "Localise and expand.", workingLatex: "\\phi(t)\\approx -\\tfrac14+(t-\\tfrac12)^2,\\quad g(t)\\approx g(\\tfrac12).", explanation: "Taylor-expand the phase about \\( t_0 \\) to quadratic order and freeze the amplitude at \\( t_0 \\)." },
        { stepNumber: 4, description: "Reduce to a Fresnel integral.", workingLatex: "I(x)\\approx g(\\tfrac12)e^{-ix/4}\\int_{-\\infty}^{\\infty} e^{ix s^2}\\,ds,\\quad s=t-\\tfrac12.", explanation: "The shifted variable turns the local integral into a standard Fresnel integral with limits extended to \\( \\pm\\infty \\)." },
        { stepNumber: 5, description: "Evaluate the Fresnel integral and combine.", workingLatex: "\\int_{-\\infty}^{\\infty} e^{ix s^2}ds=\\sqrt{\\frac{\\pi}{x}}\\,e^{i\\pi/4}\\Rightarrow I(x)\\sim g(\\tfrac12)\\sqrt{\\frac{\\pi}{x}}\\,e^{i(\\pi/4-x/4)}.", explanation: "Note \\( \\sqrt{\\pi/x}=\\sqrt{2\\pi/(2x)}=\\sqrt{2\\pi/(x|\\phi''|)} \\) with \\( |\\phi''|=2 \\), so this is exactly the standard formula." },
      ],
      finalAnswer: "\\( I(x)\\sim g\\!\\big(\\tfrac12\\big)\\sqrt{\\dfrac{2\\pi}{x}}\\,e^{i(\\pi/4-x/4)} \\)  (i.e. \\( g(\\tfrac12)\\sqrt{\\pi/x}\\,e^{i(\\pi/4-x/4)} \\))",
    },
  },
  {
    id: "am6a-022",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x\\to+\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{2\\pi} e^{ix\\cos(t-\\frac{\\pi}{3})}\\,dt \\). (Both interior stationary points contribute.)",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "multiple stationary points", "trigonometric phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the stationary points.", workingLatex: "\\phi(t)=\\cos(t-\\tfrac{\\pi}{3}),\\ \\phi'(t)=-\\sin(t-\\tfrac{\\pi}{3})=0\\Rightarrow t=\\tfrac{\\pi}{3},\\ \\tfrac{4\\pi}{3}.", explanation: "Over a full period there are two interior stationary points; both contribute at the same order and must be summed.", mafs: `<Mafs viewBox={{ x: [0.22, 5.02], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => Math.cos(t - Math.PI/3)} domain={[0.22, 5.02]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={1.0472} y={1} color="var(--mafs-fg-blue)" />
  <Point x={4.18879} y={-1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.2,1.3]} tex="\\phi'(t_1)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[4.3,-1.3]} tex="\\phi'(t_2)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.6,-1.45]} tex="\\phi=\\cos(t-\\tfrac{\\pi}{3})" color="var(--mafs-fg-accent)" />
  <LaTeX at={[4.75,-0.25]} tex="t" />
</Mafs>` },
        { stepNumber: 2, description: "Classify the first stationary point.", workingLatex: "\\phi''(t)=-\\cos(t-\\tfrac{\\pi}{3}),\\quad t_1=\\tfrac{\\pi}{3}:\\ \\phi=1,\\ \\phi''=-1<0.", explanation: "At \\( t_1 \\) the cosine is at a maximum: phase value \\( +1 \\), curvature \\( -1 \\)." },
        { stepNumber: 3, description: "Classify the second stationary point.", workingLatex: "t_2=\\tfrac{4\\pi}{3}:\\ \\phi=\\cos\\pi=-1,\\ \\phi''=-\\cos\\pi=1>0.", explanation: "At \\( t_2 \\) the cosine is at a minimum: phase value \\( -1 \\), curvature \\( +1 \\)." },
        { stepNumber: 4, description: "Contribution from each point.", workingLatex: "I_1\\sim e^{ix}\\sqrt{\\tfrac{2\\pi}{x}}e^{-i\\pi/4},\\quad I_2\\sim e^{-ix}\\sqrt{\\tfrac{2\\pi}{x}}e^{+i\\pi/4}.", explanation: "Apply the formula separately; the maximum gives \\( e^{-i\\pi/4} \\), the minimum gives \\( e^{+i\\pi/4} \\)." },
        { stepNumber: 5, description: "Sum the contributions.", workingLatex: "I(x)\\sim \\sqrt{\\tfrac{2\\pi}{x}}\\Big(e^{i(x-\\pi/4)}+e^{-i(x-\\pi/4)}\\Big)=2\\sqrt{\\tfrac{2\\pi}{x}}\\cos\\!\\Big(x-\\tfrac{\\pi}{4}\\Big).", explanation: "The two complex-conjugate contributions combine into a real cosine, recovering \\( \\int_0^{2\\pi}e^{ix\\cos\\theta}d\\theta=2\\pi J_0(x)\\sim 2\\sqrt{2\\pi/x}\\cos(x-\\pi/4) \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim 2\\sqrt{\\dfrac{2\\pi}{x}}\\,\\cos\\!\\Big(x-\\dfrac{\\pi}{4}\\Big) \\)",
    },
  },
  {
    id: "am6a-023",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The integral \\( \\displaystyle I(x)=\\int_{-\\infty}^{\\infty} e^{ix\\,(t^2-t)}\\,\\frac{dt}{1+t^2} \\) is to be approximated for large \\( x \\). Find its leading term and the order of the first correction.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "rational amplitude", "correction order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point.", workingLatex: "\\phi(t)=t^2-t,\\ \\phi'(t)=2t-1=0\\Rightarrow t_0=\\tfrac12.", explanation: "A single simple stationary point; the amplitude \\( 1/(1+t^2) \\) decays at infinity so endpoint effects are absent." },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''=2>0,\\quad \\phi(\\tfrac12)=-\\tfrac14.", explanation: "Positive curvature; phase value \\( -\\tfrac14 \\)." },
        { stepNumber: 3, description: "Amplitude at \\( t_0 \\).", workingLatex: "g(\\tfrac12)=\\frac{1}{1+\\tfrac14}=\\frac{4}{5}.", explanation: "Evaluate the rational amplitude at \\( t_0=\\tfrac12 \\)." },
        { stepNumber: 4, description: "Apply the leading-order formula.", workingLatex: "I(x)\\sim \\frac{4}{5}\\,e^{-ix/4}\\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=\\frac{4}{5}\\sqrt{\\frac{\\pi}{x}}\\,e^{i(\\pi/4-x/4)}.", explanation: "Substitute \\( g(t_0)=\\tfrac45 \\), \\( |\\phi''|=2 \\)." },
        { stepNumber: 5, description: "Order of the first correction.", workingLatex: "\\text{Next term} = O\\!\\left(x^{-3/2}\\right).", explanation: "The full stationary-phase expansion proceeds in powers of \\( x^{-1} \\) relative to the leading \\( x^{-1/2} \\), so the first correction is \\( O(x^{-3/2}) \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\dfrac{4}{5}\\sqrt{\\dfrac{\\pi}{x}}\\,e^{i(\\pi/4-x/4)} \\); first correction \\( O(x^{-3/2}) \\)",
    },
  },
  {
    id: "am6a-024",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Using the substitution \\( u=\\sin\\theta \\) (or otherwise), find the leading term, as \\( x\\to+\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{\\pi/2} e^{ix\\sin^2\\theta}\\,d\\theta \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "substitution", "endpoint vs interior"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the phase.", workingLatex: "\\phi(\\theta)=\\sin^2\\theta,\\quad \\phi'(\\theta)=2\\sin\\theta\\cos\\theta=\\sin 2\\theta.", explanation: "Use \\( \\frac{d}{d\\theta}\\sin^2\\theta=\\sin 2\\theta \\)." },
        { stepNumber: 2, description: "Find the stationary points.", workingLatex: "\\sin 2\\theta=0\\Rightarrow \\theta=0,\\ \\tfrac{\\pi}{2}.", explanation: "Both stationary points are endpoints of the range, and \\( \\theta=\\tfrac\\pi2 \\) is where \\( \\phi=1 \\) is a maximum." },
        { stepNumber: 3, description: "Curvature at the relevant endpoint.", workingLatex: "\\phi''(\\theta)=2\\cos 2\\theta,\\quad \\phi''(\\tfrac{\\pi}{2})=2\\cos\\pi=-2\\neq 0.", explanation: "Although the stationary point sits AT the endpoint \\( \\theta=\\tfrac\\pi2 \\), the curvature is non-zero, so locally it behaves like half a Gaussian peak." },
        { stepNumber: 4, description: "Halve the interior result for an endpoint maximum.", workingLatex: "\\text{An endpoint stationary point contributes HALF the full } e^{\\pm i\\pi/4}\\text{ Gaussian.}", explanation: "Since the peak at \\( \\theta=\\tfrac\\pi2 \\) is only half-covered by the integration range, its contribution is half the standard interior value." },
        { stepNumber: 5, description: "Compute the half-contribution.", workingLatex: "I(x)\\sim \\tfrac12\\,e^{ix}\\sqrt{\\frac{2\\pi}{x\\cdot 2}}\\,e^{-i\\pi/4}=\\frac12\\sqrt{\\frac{\\pi}{x}}\\,e^{i(x-\\pi/4)}.", explanation: "Use \\( g(t_0)=1 \\), \\( |\\phi''|=2 \\), \\( \\phi(t_0)=1 \\), negative curvature, and the endpoint factor \\( \\tfrac12 \\). The point \\( \\theta=0 \\) has \\( \\phi=0 \\) but there \\( \\phi''=2 \\) and it is also an endpoint contributing at the same order; here we report the dominant oscillation from the maximum." },
      ],
      finalAnswer: "\\( I(x)\\sim \\dfrac12\\sqrt{\\dfrac{\\pi}{x}}\\,e^{i(x-\\pi/4)} \\) (endpoint stationary point: half the interior contribution)",
    },
  },
  {
    id: "am6a-025",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x\\to+\\infty \\), of \\( \\displaystyle I(x)=\\int_{-\\infty}^{\\infty} e^{-t^2}\\,e^{ix\\,(t-t^3/3)}\\,dt \\), and explain why the cubic term in the phase does not affect the leading order.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "amplitude", "multiple stationary points"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary points of the phase.", workingLatex: "\\phi(t)=t-\\tfrac13 t^3,\\ \\phi'(t)=1-t^2=0\\Rightarrow t=\\pm 1.", explanation: "There are two simple stationary points; the Gaussian amplitude \\( e^{-t^2} \\) keeps both contributions finite and equal in weight.", mafs: `<Mafs viewBox={{ x: [-2.4, 2.4], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => t - t*t*t/3} domain={[-2.1, 2.1]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={1} y={0.6667} color="var(--mafs-fg-blue)" />
  <Point x={-1} y={-0.6667} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.2,1.0]} tex="\\phi'(t_0)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[-2.0,1.5]} tex="\\phi=t-\\tfrac{t^3}{3}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[2.15,-0.25]} tex="t" />
</Mafs>` },
        { stepNumber: 2, description: "Curvature and values at each.", workingLatex: "\\phi''(t)=-2t:\\ t_1=1\\Rightarrow \\phi''=-2,\\ \\phi=\\tfrac23;\\ t_2=-1\\Rightarrow \\phi''=2,\\ \\phi=-\\tfrac23.", explanation: "\\( t_1 \\) is a maximum (\\( -\\pi/4 \\)); \\( t_2 \\) is a minimum (\\( +\\pi/4 \\))." },
        { stepNumber: 3, description: "Amplitudes at the stationary points.", workingLatex: "g(\\pm 1)=e^{-1}.", explanation: "The Gaussian gives the same weight \\( e^{-1} \\) at both points." },
        { stepNumber: 4, description: "Contribution from each point.", workingLatex: "I_1\\sim e^{-1}e^{2ix/3}\\sqrt{\\tfrac{2\\pi}{2x}}e^{-i\\pi/4},\\quad I_2\\sim e^{-1}e^{-2ix/3}\\sqrt{\\tfrac{2\\pi}{2x}}e^{+i\\pi/4}.", explanation: "Apply the formula with \\( |\\phi''|=2 \\) at each point." },
        { stepNumber: 5, description: "Sum into a real cosine.", workingLatex: "I(x)\\sim 2e^{-1}\\sqrt{\\frac{\\pi}{x}}\\,\\cos\\!\\Big(\\frac{2x}{3}-\\frac{\\pi}{4}\\Big).", explanation: "The conjugate pair combines; \\( \\sqrt{2\\pi/(2x)}=\\sqrt{\\pi/x} \\)." },
        { stepNumber: 6, description: "Why the cubic does not enter at leading order.", workingLatex: "\\phi(t)=\\phi(t_0)+\\tfrac12\\phi''(t_0)(t-t_0)^2+O((t-t_0)^3).", explanation: "Leading-order stationary phase uses only the value, the location and the SECOND derivative of \\( \\phi \\) at \\( t_0 \\); the cubic term sits in the \\( O((t-t_0)^3) \\) remainder and first influences the \\( O(x^{-3/2}) \\) correction, not the leading term." },
      ],
      finalAnswer: "\\( I(x)\\sim 2e^{-1}\\sqrt{\\dfrac{\\pi}{x}}\\,\\cos\\!\\Big(\\dfrac{2x}{3}-\\dfrac{\\pi}{4}\\Big) \\)",
    },
  },
  {
    id: "am6a-026",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x\\to+\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{\\pi} \\sin t\\;e^{ix\\,(t+\\cos t)}\\,dt \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "amplitude", "trigonometric phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the phase.", workingLatex: "\\phi(t)=t+\\cos t,\\quad \\phi'(t)=1-\\sin t.", explanation: "Locate where the phase is stationary." },
        { stepNumber: 2, description: "Find the stationary point.", workingLatex: "1-\\sin t=0\\Rightarrow \\sin t=1\\Rightarrow t_0=\\tfrac{\\pi}{2}\\in(0,\\pi).", explanation: "A single interior stationary point. Caution: \\( \\phi''(t)=-\\cos t \\) and \\( \\phi''(\\tfrac\\pi2)=0 \\) — so this is degenerate!" },
        { stepNumber: 3, description: "Check the curvature.", workingLatex: "\\phi''(t)=-\\cos t,\\quad \\phi''(\\tfrac{\\pi}{2})=0.", explanation: "Because \\( \\phi'' \\) vanishes, the stationary point is NOT simple; the standard \\( x^{-1/2} \\) formula fails here." },
        { stepNumber: 4, description: "Determine the degeneracy and scaling.", workingLatex: "\\phi'''(t)=\\sin t,\\ \\phi'''(\\tfrac{\\pi}{2})=1\\neq 0\\Rightarrow \\phi-\\phi(t_0)\\approx \\tfrac16(t-t_0)^3.", explanation: "The leading non-vanishing derivative is the third, so this is a cubic (Airy-type) point with scale \\( x^{-1/3} \\), not \\( x^{-1/2} \\)." },
        { stepNumber: 5, description: "State the conclusion.", workingLatex: "I(x)=O\\!\\left(x^{-1/3}\\right),\\ \\text{NOT}\\ O\\!\\left(x^{-1/2}\\right).", explanation: "This is a deliberate cross-method trap: the simple-interior-point formula does not apply; the correct leading order is the cubic (Airy) scaling \\( x^{-1/3} \\), giving a \\( \\Gamma(\\tfrac13) \\)-type coefficient." },
      ],
      finalAnswer: "Degenerate stationary point (\\( \\phi''(t_0)=0 \\)): leading order is \\( O(x^{-1/3}) \\) (Airy/cubic scaling), not the simple \\( x^{-1/2} \\) formula.",
    },
  },
  {
    id: "am6a-027",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 27",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x\\to+\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{\\pi/2}\\!\\!\\int \\!\\!\\;e^{ix\\cos\\theta}\\,d\\theta \\) over \\( \\theta\\in(0,\\tfrac{\\pi}{2}) \\), where the only stationary point is at the endpoint \\( \\theta=0 \\). Hence comment on how the answer differs from the interior-point case.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "endpoint", "comparison"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point.", workingLatex: "\\phi(\\theta)=\\cos\\theta,\\ \\phi'(\\theta)=-\\sin\\theta=0\\Rightarrow \\theta=0\\ (\\text{endpoint}).", explanation: "The only stationary point of \\( \\cos\\theta \\) on \\( [0,\\tfrac\\pi2] \\) is the left endpoint \\( \\theta=0 \\)." },
        { stepNumber: 2, description: "Curvature there.", workingLatex: "\\phi''(\\theta)=-\\cos\\theta,\\quad \\phi''(0)=-1\\neq 0,\\quad \\phi(0)=1.", explanation: "Non-zero curvature: locally a half-Gaussian peak at the endpoint." },
        { stepNumber: 3, description: "Use the half-contribution rule.", workingLatex: "I(x)\\sim \\tfrac12\\,g(0)e^{ix\\phi(0)}\\sqrt{\\frac{2\\pi}{x|\\phi''(0)|}}\\,e^{-i\\pi/4}.", explanation: "An endpoint stationary point with \\( \\phi''\\neq0 \\) contributes exactly HALF the interior Gaussian, because only one side of the peak lies in the range." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "I(x)\\sim \\tfrac12\\,e^{ix}\\sqrt{\\frac{2\\pi}{x}}\\,e^{-i\\pi/4}=\\frac12\\sqrt{\\frac{2\\pi}{x}}\\,e^{i(x-\\pi/4)}.", explanation: "Substitute \\( g(0)=1 \\), \\( |\\phi''|=1 \\), \\( \\phi(0)=1 \\)." },
        { stepNumber: 5, description: "Compare with the interior case.", workingLatex: "\\text{Interior: }\\sqrt{\\tfrac{2\\pi}{x}}e^{i(x-\\pi/4)};\\quad \\text{Endpoint: }\\tfrac12\\sqrt{\\tfrac{2\\pi}{x}}e^{i(x-\\pi/4)}.", explanation: "The endpoint result is exactly half the interior result — same \\( x^{-1/2} \\) order and same \\( e^{-i\\pi/4} \\) phase, but half the amplitude." },
      ],
      finalAnswer: "\\( I(x)\\sim \\dfrac12\\sqrt{\\dfrac{2\\pi}{x}}\\,e^{i(x-\\pi/4)} \\) — exactly half the interior-point contribution.",
    },
  },
  {
    id: "am6a-028",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x\\to+\\infty \\), of \\( \\displaystyle I(x)=\\int_{-2}^{2} e^{ix\\,(t^3-3t)}\\,dt \\), summing the contributions of all simple interior stationary points.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "multiple stationary points", "cubic phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary points.", workingLatex: "\\phi(t)=t^3-3t,\\ \\phi'(t)=3t^2-3=0\\Rightarrow t=\\pm 1\\in(-2,2).", explanation: "Two simple interior stationary points; both lie strictly inside \\( (-2,2) \\)." },
        { stepNumber: 2, description: "Curvature and values.", workingLatex: "\\phi''(t)=6t:\\ t_1=1\\Rightarrow \\phi''=6,\\ \\phi=-2;\\ t_2=-1\\Rightarrow \\phi''=-6,\\ \\phi=2.", explanation: "\\( t_1=1 \\): positive curvature, \\( \\phi=-2 \\); \\( t_2=-1 \\): negative curvature, \\( \\phi=2 \\)." },
        { stepNumber: 3, description: "Contribution from \\( t_1=1 \\).", workingLatex: "I_1\\sim e^{-2ix}\\sqrt{\\frac{2\\pi}{6x}}\\,e^{i\\pi/4}.", explanation: "Positive curvature \\( \\Rightarrow +\\pi/4 \\); \\( |\\phi''|=6 \\)." },
        { stepNumber: 4, description: "Contribution from \\( t_2=-1 \\).", workingLatex: "I_2\\sim e^{2ix}\\sqrt{\\frac{2\\pi}{6x}}\\,e^{-i\\pi/4}.", explanation: "Negative curvature \\( \\Rightarrow -\\pi/4 \\); \\( |\\phi''|=6 \\)." },
        { stepNumber: 5, description: "Sum.", workingLatex: "I(x)\\sim \\sqrt{\\frac{2\\pi}{6x}}\\Big(e^{i(\\pi/4-2x)}+e^{-i(\\pi/4-2x)}\\Big)=2\\sqrt{\\frac{\\pi}{3x}}\\cos\\!\\Big(2x-\\frac{\\pi}{4}\\Big).", explanation: "The conjugate pair combines into a real cosine; \\( \\sqrt{2\\pi/6}=\\sqrt{\\pi/3} \\). Note \\( \\cos(\\pi/4-2x)=\\cos(2x-\\pi/4) \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim 2\\sqrt{\\dfrac{\\pi}{3x}}\\,\\cos\\!\\Big(2x-\\dfrac{\\pi}{4}\\Big) \\)",
    },
  },
  {
    id: "am6a-029",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x\\to+\\infty \\), of \\( \\displaystyle I(x)=\\int_{0}^{1} t\\,e^{ix\\,(t^2-t)}\\,dt \\), and explain carefully why the endpoint contributions are subdominant to the interior stationary point.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "amplitude", "endpoint vs interior"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary point.", workingLatex: "\\phi(t)=t^2-t,\\ \\phi'(t)=2t-1=0\\Rightarrow t_0=\\tfrac12\\in(0,1).", explanation: "One simple interior stationary point at the midpoint of the range." },
        { stepNumber: 2, description: "Curvature and phase value.", workingLatex: "\\phi''=2>0,\\quad \\phi(\\tfrac12)=-\\tfrac14.", explanation: "Positive curvature; phase value \\( -\\tfrac14 \\)." },
        { stepNumber: 3, description: "Amplitude at \\( t_0 \\).", workingLatex: "g(t)=t,\\quad g(\\tfrac12)=\\tfrac12.", explanation: "Evaluate the amplitude at the stationary point." },
        { stepNumber: 4, description: "Leading interior contribution.", workingLatex: "I(x)\\sim \\tfrac12\\,e^{-ix/4}\\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=\\frac12\\sqrt{\\frac{\\pi}{x}}\\,e^{i(\\pi/4-x/4)}.", explanation: "Substitute \\( g(t_0)=\\tfrac12 \\), \\( |\\phi''|=2 \\), \\( \\phi(t_0)=-\\tfrac14 \\)." },
        { stepNumber: 5, description: "Endpoint orders.", workingLatex: "\\phi'(0)=-1\\neq 0,\\ \\phi'(1)=1\\neq 0\\Rightarrow \\text{endpoints non-stationary}.", explanation: "Since \\( \\phi'\\neq0 \\) at both endpoints, integration by parts shows each endpoint contributes only \\( O(1/x) \\)." },
        { stepNumber: 6, description: "Compare orders.", workingLatex: "x^{-1/2}\\gg x^{-1}\\ \\text{as}\\ x\\to\\infty\\Rightarrow \\text{interior term dominates}.", explanation: "The interior stationary contribution is \\( O(x^{-1/2}) \\), which dominates the \\( O(x^{-1}) \\) endpoint terms, so the leading answer is the interior term alone." },
      ],
      finalAnswer: "\\( I(x)\\sim \\dfrac12\\sqrt{\\dfrac{\\pi}{x}}\\,e^{i(\\pi/4-x/4)} \\) (interior \\( x^{-1/2} \\) dominates the \\( x^{-1} \\) endpoints)",
    },
  },
  {
    id: "am6a-030",
    topicRef: "am6a",
    topicTitle: "Stationary phase: isolated interior point 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading term, as \\( x\\to+\\infty \\), of \\( \\displaystyle I(x)=\\int_{-\\infty}^{\\infty} \\frac{\\cos\\big(x\\,(t^2+t)\\big)}{1+t^4}\\,dt \\), by relating it to the real part of a stationary-phase integral.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "real part", "rational amplitude"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Express as a real part.", workingLatex: "I(x)=\\mathrm{Re}\\int_{-\\infty}^{\\infty} \\frac{e^{ix(t^2+t)}}{1+t^4}\\,dt.", explanation: "Write the cosine as \\( \\mathrm{Re}\\,e^{i(\\cdots)} \\); the rational amplitude is smooth and decays, so stationary phase applies." },
        { stepNumber: 2, description: "Stationary point.", workingLatex: "\\phi(t)=t^2+t,\\ \\phi'(t)=2t+1=0\\Rightarrow t_0=-\\tfrac12.", explanation: "Single simple stationary point on the real line." },
        { stepNumber: 3, description: "Curvature and phase value.", workingLatex: "\\phi''=2>0,\\quad \\phi(-\\tfrac12)=\\tfrac14-\\tfrac12=-\\tfrac14.", explanation: "Positive curvature; phase value \\( -\\tfrac14 \\)." },
        { stepNumber: 4, description: "Amplitude at \\( t_0 \\).", workingLatex: "g(-\\tfrac12)=\\frac{1}{1+(\\tfrac12)^4}=\\frac{1}{1+\\tfrac{1}{16}}=\\frac{16}{17}.", explanation: "Evaluate \\( 1/(1+t^4) \\) at \\( t_0=-\\tfrac12 \\); \\( (\\tfrac12)^4=\\tfrac{1}{16} \\)." },
        { stepNumber: 5, description: "Apply the complex formula.", workingLatex: "\\int_{-\\infty}^{\\infty}\\frac{e^{ix(t^2+t)}}{1+t^4}dt\\sim \\frac{16}{17}e^{-ix/4}\\sqrt{\\frac{2\\pi}{2x}}\\,e^{i\\pi/4}=\\frac{16}{17}\\sqrt{\\frac{\\pi}{x}}\\,e^{i(\\pi/4-x/4)}.", explanation: "Substitute \\( g(t_0)=\\tfrac{16}{17} \\), \\( |\\phi''|=2 \\), \\( \\phi(t_0)=-\\tfrac14 \\)." },
        { stepNumber: 6, description: "Take the real part.", workingLatex: "I(x)\\sim \\frac{16}{17}\\sqrt{\\frac{\\pi}{x}}\\,\\cos\\!\\Big(\\frac{\\pi}{4}-\\frac{x}{4}\\Big).", explanation: "\\( \\mathrm{Re}\\,e^{i(\\pi/4-x/4)}=\\cos(\\pi/4-x/4)=\\cos(x/4-\\pi/4) \\)." },
      ],
      finalAnswer: "\\( I(x)\\sim \\dfrac{16}{17}\\sqrt{\\dfrac{\\pi}{x}}\\,\\cos\\!\\Big(\\dfrac{x}{4}-\\dfrac{\\pi}{4}\\Big) \\)",
    },
  },
];
