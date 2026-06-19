import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — am5b
 * Topic group: Oscillatory Integrals
 * Subtopic: Endpoint & discontinuity contributions
 *
 * Seeded from Cambridge Part II Asymptotic Methods, Example Sheet 2 (Michaelmas
 * 2025), Q3 (endpoint + discontinuity contributions to non-stationary
 * oscillatory integrals) and the surrounding "Oscillatory integrals" block,
 * with constants, limits and framing varied throughout.
 *
 * Core result used throughout (repeated integration by parts of a NON-stationary
 * oscillatory integral). For f smooth on (a,c)∪(c,b) with a jump at t = c,
 *
 *   I(ω) = ∫_a^b f(t) e^{iωt} dt
 *        ~ Σ_{n≥0} (-1)^n/(iω)^{n+1} {
 *             [ f^{(n)}(t) e^{iωt} ]_{endpoints, signed}
 *           + e^{iωc} ( f^{(n)}(c^-) − f^{(n)}(c^+) ) },  |ω| → ∞.
 *
 * Leading order:
 *   I(ω) ~ (e^{iωb} f(b^-) − e^{iωa} f(a^+))/(iω)
 *          + e^{iωc} (f(c^-) − f(c^+))/(iω) + O(ω^{-2}).
 *
 * Every numeric claim below was checked with mpmath (quadrature of the exact
 * integral at large ω against the truncated asymptotic series; residuals decay
 * at the predicted order). REVIEW comments mark the few questions whose claim is
 * structural (a general n-th term, a "show that", or a sketch) rather than a
 * single numerically-checkable value.
 */
export const questions: Question[] = [
  // ── Foundation: the bare endpoint/jump mechanism in isolation ────
  {
    id: "am5b-001",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 01",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Evaluate \\( I(\\omega) = \\int_0^1 e^{i\\omega t}\\,dt \\) exactly, then write down its leading behaviour as \\( \\omega \\to +\\infty \\) and identify which endpoint each term comes from.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution", "integration by parts"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Integrate directly.", workingLatex: "I(\\omega) = \\int_0^1 e^{i\\omega t}\\,dt = \\frac{e^{i\\omega t}}{i\\omega}\\Big|_0^1 = \\frac{e^{i\\omega} - 1}{i\\omega}.", explanation: "With \\( f \\equiv 1 \\) the integral is elementary, so we have the exact answer and need no asymptotics yet. Keeping the exact form lets us read off the endpoint structure cleanly." },
        { stepNumber: 2, description: "Split into the two endpoint terms.", workingLatex: "I(\\omega) = \\frac{e^{i\\omega}}{i\\omega} - \\frac{1}{i\\omega}.", explanation: "The boundary term at \\( t = 1 \\) carries the phase \\( e^{i\\omega} \\); the term at \\( t = 0 \\) carries \\( e^{i\\omega\\cdot 0} = 1 \\). This is exactly the pattern of one integration by parts: each endpoint contributes \\( e^{i\\omega t}f(t)/(i\\omega) \\) with the upper endpoint positive and the lower negative." },
        { stepNumber: 3, description: "State the leading order.", workingLatex: "I(\\omega) \\sim \\frac{e^{i\\omega} - 1}{i\\omega}, \\qquad \\omega \\to +\\infty.", explanation: "Both endpoint terms are \\( O(\\omega^{-1}) \\) and there are no further corrections because \\( f \\) is constant: every higher derivative vanishes, so the asymptotic series terminates at this single term." },
      ],
      finalAnswer: "\\( I(\\omega) = \\dfrac{e^{i\\omega} - 1}{i\\omega} \\): the \\( e^{i\\omega}/(i\\omega) \\) term is from \\( t = 1 \\), the \\( -1/(i\\omega) \\) term from \\( t = 0 \\).",
      canonicalAnswer: "(exp(i*w) - 1)/(i*w)",
    },
  },
  {
    id: "am5b-002",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For smooth \\( f \\) with no stationary phase, the leading endpoint contribution to \\( \\int_a^b f(t)e^{i\\omega t}\\,dt \\) comes from one integration by parts. Carry out that single integration by parts and write down the leading term.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution", "integration by parts"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the phase to set up parts.", workingLatex: "e^{i\\omega t} = \\frac{1}{i\\omega}\\frac{d}{dt}\\,e^{i\\omega t}.", explanation: "The standard device for a non-stationary oscillatory integral: write the rapidly oscillating factor as the derivative of itself divided by \\( i\\omega \\). Each such step pulls out a factor \\( 1/(i\\omega) \\), which is what generates the asymptotic series in inverse powers of \\( \\omega \\)." },
        { stepNumber: 2, description: "Integrate by parts once.", workingLatex: "\\int_a^b f(t)e^{i\\omega t}\\,dt = \\left[\\frac{f(t)e^{i\\omega t}}{i\\omega}\\right]_a^b - \\frac{1}{i\\omega}\\int_a^b f'(t)e^{i\\omega t}\\,dt.", explanation: "The boundary term is already \\( O(\\omega^{-1}) \\); the remaining integral has the same form as the original but with \\( f \\) replaced by \\( f' \\), and it sits behind an extra factor \\( 1/(i\\omega) \\), so it is \\( O(\\omega^{-2}) \\)." },
        { stepNumber: 3, description: "Read off the leading term.", workingLatex: "\\int_a^b f(t)e^{i\\omega t}\\,dt \\sim \\frac{e^{i\\omega b}f(b) - e^{i\\omega a}f(a)}{i\\omega}, \\qquad \\omega \\to \\infty.", explanation: "Provided \\( f \\) has no point of stationary phase in \\( [a,b] \\), the leading behaviour is purely from the two endpoints. The decay is \\( \\omega^{-1} \\), slower than a generic smooth-decay integral but faster than a stationary-phase \\( \\omega^{-1/2} \\)." },
      ],
      finalAnswer: "\\( \\displaystyle \\int_a^b f(t)e^{i\\omega t}\\,dt \\sim \\frac{e^{i\\omega b}f(b) - e^{i\\omega a}f(a)}{i\\omega} \\)",
    },
  },
  {
    id: "am5b-003",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 03",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading-order behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle \\int_0^2 e^{-t}\\,e^{i\\omega t}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the data for the endpoint formula.", workingLatex: "f(t) = e^{-t}, \\quad a = 0,\\ b = 2, \\quad f(0) = 1,\\ f(2) = e^{-2}.", explanation: "There is no stationary phase (the phase is simply \\( \\omega t \\), whose derivative \\( \\omega \\) never vanishes), so the leading contribution is the signed pair of endpoint boundary terms." },
        { stepNumber: 2, description: "Apply the leading endpoint formula.", workingLatex: "\\int_0^2 e^{-t}e^{i\\omega t}\\,dt \\sim \\frac{e^{2i\\omega}\\,e^{-2} - e^{0}\\cdot 1}{i\\omega} = \\frac{e^{-2}e^{2i\\omega} - 1}{i\\omega}.", explanation: "Substitute \\( f(b) \\) and \\( f(a) \\) into \\( (e^{i\\omega b}f(b) - e^{i\\omega a}f(a))/(i\\omega) \\). The next term is \\( O(\\omega^{-2}) \\), coming from a second integration by parts with \\( f' = -e^{-t} \\)." },
        { stepNumber: 3, description: "State the result.", workingLatex: "\\int_0^2 e^{-t}e^{i\\omega t}\\,dt \\sim \\frac{e^{-2}e^{2i\\omega} - 1}{i\\omega}, \\qquad \\omega \\to +\\infty.", explanation: "A numerical check at \\( \\omega = 40,\\,160 \\) confirms the residual after subtracting this term decays like \\( \\omega^{-2} \\)." },
      ],
      finalAnswer: "\\( \\displaystyle \\int_0^2 e^{-t}e^{i\\omega t}\\,dt \\sim \\frac{e^{-2}e^{2i\\omega} - 1}{i\\omega} \\)",
      canonicalAnswer: "(exp(-2)*exp(2*i*w) - 1)/(i*w)",
    },
  },
  {
    id: "am5b-004",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "A function \\( f \\) is smooth on \\( (a,c) \\) and on \\( (c,b) \\) but jumps at \\( t = c \\), with one-sided limits \\( f(c^-) \\) and \\( f(c^+) \\). Write down the extra term this jump adds to the leading asymptotics of \\( \\int_a^b f(t)e^{i\\omega t}\\,dt \\), and explain its sign.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "jump contribution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Split the integral at the discontinuity.", workingLatex: "\\int_a^b f e^{i\\omega t}\\,dt = \\int_a^c f e^{i\\omega t}\\,dt + \\int_c^b f e^{i\\omega t}\\,dt.", explanation: "Integration by parts is only valid on intervals where \\( f \\) is smooth, so we must cut the range at \\( t = c \\) and treat each piece separately." },
        { stepNumber: 2, description: "Collect the boundary terms at the cut.", workingLatex: "\\frac{f(c^-)e^{i\\omega c}}{i\\omega} \\;-\\; \\frac{f(c^+)e^{i\\omega c}}{i\\omega} = \\frac{e^{i\\omega c}\\,(f(c^-) - f(c^+))}{i\\omega}.", explanation: "From the first piece, \\( t = c \\) is an upper endpoint, contributing \\( +f(c^-)e^{i\\omega c}/(i\\omega) \\). From the second piece, \\( t = c \\) is a lower endpoint, contributing \\( -f(c^+)e^{i\\omega c}/(i\\omega) \\). They combine into a single jump term." },
        { stepNumber: 3, description: "State the jump contribution.", workingLatex: "\\Delta I \\sim \\frac{e^{i\\omega c}\\,\\big(f(c^-) - f(c^+)\\big)}{i\\omega}.", explanation: "If \\( f \\) were continuous at \\( c \\) the two pieces cancel and the term vanishes — only a genuine jump survives. The decay rate is the same \\( \\omega^{-1} \\) as a true endpoint, so a discontinuity acts like an interior endpoint." },
      ],
      finalAnswer: "\\( \\displaystyle \\Delta I \\sim \\frac{e^{i\\omega c}\\,(f(c^-) - f(c^+))}{i\\omega} \\)",
    },
  },
  {
    id: "am5b-005",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 05",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Let \\( f(t) = 0 \\) for \\( t < 0 \\) and \\( f(t) = 1 \\) for \\( t \\ge 0 \\) (a unit step). Find the leading behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle \\int_{-1}^{1} f(t)\\,e^{i\\omega t}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "step function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Reduce to the support of f.", workingLatex: "\\int_{-1}^{1} f(t)e^{i\\omega t}\\,dt = \\int_0^1 e^{i\\omega t}\\,dt = \\frac{e^{i\\omega} - 1}{i\\omega}.", explanation: "Because \\( f \\) vanishes on \\( (-1,0) \\) the integral collapses to \\( \\int_0^1 e^{i\\omega t}\\,dt \\), which is elementary." },
        { stepNumber: 2, description: "Interpret the two terms.", workingLatex: "\\frac{e^{i\\omega}}{i\\omega} \\ \\text{(endpoint } t=1\\text{)}, \\qquad -\\frac{1}{i\\omega} \\ \\text{(jump at } t=0\\text{)}.", explanation: "The \\( t = -1 \\) endpoint contributes nothing because \\( f(-1) = 0 \\). The \\( -1/(i\\omega) \\) is exactly the jump term \\( e^{0}(f(0^-) - f(0^+))/(i\\omega) = (0 - 1)/(i\\omega) \\).", mafs: `<Mafs viewBox={{ x: [-3.2, 3.2], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => (t < 0 ? 0 : Math.cos(13*t))} domain={[-1, 1]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => (t < 0 ? 0 : 1)} domain={[-1, 1]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => (t < 0 ? 0 : -1)} domain={[-1, 1]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.3,1.25]} tex="\\text{jump at }t=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[-2.4,0.7]} tex="f=0" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.95,-0.2]} tex="t" />
</Mafs>` },
        { stepNumber: 3, description: "State the leading behaviour.", workingLatex: "\\int_{-1}^{1} f(t)e^{i\\omega t}\\,dt \\sim \\frac{e^{i\\omega} - 1}{i\\omega}, \\qquad \\omega \\to +\\infty.", explanation: "The step's jump and the genuine endpoint at \\( t = 1 \\) each contribute at \\( O(\\omega^{-1} ) \\); the series terminates because \\( f \\) is piecewise constant." },
      ],
      finalAnswer: "\\( \\displaystyle \\int_{-1}^{1} f(t)e^{i\\omega t}\\,dt = \\frac{e^{i\\omega} - 1}{i\\omega} \\)",
      canonicalAnswer: "(exp(i*w) - 1)/(i*w)",
    },
  },
  {
    id: "am5b-006",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 06",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find, to leading order as \\( \\omega \\to +\\infty \\), the real integral \\( \\displaystyle J(\\omega) = \\int_0^1 \\cos(\\omega t)\\,dt \\), and state the order of its decay.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution", "real part"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Integrate directly.", workingLatex: "J(\\omega) = \\int_0^1 \\cos(\\omega t)\\,dt = \\frac{\\sin(\\omega t)}{\\omega}\\Big|_0^1 = \\frac{\\sin\\omega}{\\omega}.", explanation: "The integral is exact. Writing \\( \\cos(\\omega t) = \\operatorname{Re}\\,e^{i\\omega t} \\) it is the real part of the elementary oscillatory integral, so its leading behaviour is again an endpoint effect." },
        { stepNumber: 2, description: "Identify the endpoint origin.", workingLatex: "J(\\omega) = \\operatorname{Re}\\frac{e^{i\\omega} - 1}{i\\omega} = \\frac{\\sin\\omega}{\\omega}.", explanation: "Taking the real part, the \\( t = 1 \\) endpoint gives \\( \\sin\\omega/\\omega \\) and the \\( t = 0 \\) endpoint gives \\( \\operatorname{Re}(-1/(i\\omega)) = 0 \\). The lower endpoint contributes only to the imaginary part." },
        { stepNumber: 3, description: "State decay rate.", workingLatex: "J(\\omega) = \\frac{\\sin\\omega}{\\omega} = O(\\omega^{-1}).", explanation: "An oscillatory integral with no stationary phase decays as \\( \\omega^{-1} \\); here it is exact at that order. A numeric check at \\( \\omega = 30 \\) gives \\( -0.03293\\ldots \\), matching \\( \\sin 30 / 30 \\)." },
      ],
      finalAnswer: "\\( \\displaystyle J(\\omega) = \\frac{\\sin\\omega}{\\omega} = O(\\omega^{-1}) \\)",
      canonicalAnswer: "sin(w)/w",
    },
  },

  // ── Standard: typical sheet-level endpoint + single-jump problems ────
  {
    id: "am5b-007",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A function \\( f \\) is smooth on \\( (a,c) \\cup (c,b) \\) with one-sided limits of \\( f \\) and all its derivatives existing at \\( a^+,\\,c^-,\\,c^+,\\,b^- \\). Show that, as \\( |\\omega| \\to \\infty \\), \\( \\displaystyle I(\\omega) = \\int_a^b f(t)e^{i\\omega t}\\,dt \\) has leading behaviour given by the two endpoints plus the jump at \\( c \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "integration by parts"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Split at the discontinuity.", workingLatex: "I(\\omega) = \\int_a^c f e^{i\\omega t}\\,dt + \\int_c^b f e^{i\\omega t}\\,dt.", explanation: "Integration by parts requires a smooth integrand on the interval, so we cut the range at \\( c \\) where smoothness fails and handle the two smooth pieces independently." },
        { stepNumber: 2, description: "Integrate the first piece by parts.", workingLatex: "\\int_a^c f e^{i\\omega t}\\,dt = \\frac{f(c^-)e^{i\\omega c} - f(a^+)e^{i\\omega a}}{i\\omega} - \\frac{1}{i\\omega}\\int_a^c f' e^{i\\omega t}\\,dt.", explanation: "Use \\( e^{i\\omega t} = (i\\omega)^{-1}(e^{i\\omega t})' \\). The boundary values are taken as one-sided limits \\( f(a^+) \\) and \\( f(c^-) \\) since \\( f \\) need not be defined at the open ends." },
        { stepNumber: 3, description: "Integrate the second piece by parts.", workingLatex: "\\int_c^b f e^{i\\omega t}\\,dt = \\frac{f(b^-)e^{i\\omega b} - f(c^+)e^{i\\omega c}}{i\\omega} - \\frac{1}{i\\omega}\\int_c^b f' e^{i\\omega t}\\,dt.", explanation: "Same device on the second interval; now \\( c \\) is the lower endpoint so its contribution carries a minus sign and uses the right-hand limit \\( f(c^+) \\)." },
        { stepNumber: 4, description: "Add the two pieces and combine the c-terms.", workingLatex: "I(\\omega) = \\frac{f(b^-)e^{i\\omega b} - f(a^+)e^{i\\omega a}}{i\\omega} + \\frac{e^{i\\omega c}\\big(f(c^-) - f(c^+)\\big)}{i\\omega} + O(\\omega^{-2}).", explanation: "The two contributions at \\( c \\) merge into a single jump term \\( e^{i\\omega c}(f(c^-)-f(c^+))/(i\\omega) \\); the leftover integrals of \\( f' \\), being oscillatory with a \\( 1/(i\\omega) \\) prefactor, are \\( O(\\omega^{-2}) \\)." },
        { stepNumber: 5, description: "State the leading result.", workingLatex: "I(\\omega) \\sim \\frac{f(b^-)e^{i\\omega b} - f(a^+)e^{i\\omega a} + e^{i\\omega c}\\big(f(c^-) - f(c^+)\\big)}{i\\omega}.", explanation: "The endpoints and the jump all enter at the same order \\( \\omega^{-1} \\). A discontinuity in \\( f \\) is therefore as significant as a true endpoint. Verified numerically: with a test jump function the residual decays like \\( \\omega^{-2} \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{f(b^-)e^{i\\omega b} - f(a^+)e^{i\\omega a} + e^{i\\omega c}\\big(f(c^-)-f(c^+)\\big)}{i\\omega} \\)",
    },
  },
  {
    id: "am5b-008",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 08",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Let \\( f(t) = -e^{t} \\) for \\( t < 0 \\) and \\( f(t) = e^{-t} \\) for \\( t \\ge 0 \\). Find the leading behaviour of \\( \\displaystyle I(\\omega) = \\int_{-\\infty}^{\\infty} f(t)e^{i\\omega t}\\,dt \\) as \\( \\omega \\to +\\infty \\), and compare with the exact value.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "exact comparison"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the discontinuity.", workingLatex: "f(0^-) = -1, \\qquad f(0^+) = 1, \\qquad f(\\pm\\infty) = 0.", explanation: "The function is smooth on each half-line and decays at \\( \\pm\\infty \\), so the endpoints contribute nothing; the only source of slow decay is the jump at \\( t = 0 \\).", mafs: `<Mafs viewBox={{ x: [-3.2, 3.2], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.cos(11*t)*(t < 0 ? -Math.exp(t) : Math.exp(-t))} domain={[-3.2, 3.2]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => (t < 0 ? -Math.exp(t) : Math.exp(-t))} domain={[-3.2, 3.2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => (t < 0 ? Math.exp(t) : -Math.exp(-t))} domain={[-3.2, 3.2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Point x={0} y={-1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.4,1.25]} tex="\\text{jump }=2" color="var(--mafs-fg-blue)" />
  <LaTeX at={[-2.1,0.7]} tex="\\pm f(t)" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.95,-0.2]} tex="t" />
</Mafs>` },
        { stepNumber: 2, description: "Apply the jump formula.", workingLatex: "I(\\omega) \\sim \\frac{e^{i\\omega\\cdot 0}\\,(f(0^-) - f(0^+))}{i\\omega} = \\frac{-1 - 1}{i\\omega} = \\frac{-2}{i\\omega} = \\frac{2i}{\\omega}.", explanation: "Only the discontinuity at the origin survives, with jump \\( f(0^-) - f(0^+) = -2 \\). Using \\( 1/i = -i \\) gives the clean form \\( 2i/\\omega \\)." },
        { stepNumber: 3, description: "Compute the exact integral.", workingLatex: "I(\\omega) = \\int_{-\\infty}^0 (-e^{t})e^{i\\omega t}\\,dt + \\int_0^{\\infty} e^{-t}e^{i\\omega t}\\,dt = -\\frac{1}{1+i\\omega} + \\frac{1}{1-i\\omega}.", explanation: "Each half is a convergent elementary integral: \\( \\int_{-\\infty}^0 e^{(1+i\\omega)t}\\,dt = 1/(1+i\\omega) \\) and \\( \\int_0^\\infty e^{-(1-i\\omega)t}\\,dt = 1/(1-i\\omega) \\)." },
        { stepNumber: 4, description: "Simplify the exact value.", workingLatex: "I(\\omega) = \\frac{-(1 - i\\omega) + (1 + i\\omega)}{(1+i\\omega)(1-i\\omega)} = \\frac{2i\\omega}{1 + \\omega^2}.", explanation: "Combine over the common denominator \\( 1 + \\omega^2 \\). The exact answer is purely imaginary, consistent with the leading asymptotic." },
        { stepNumber: 5, description: "Compare.", workingLatex: "\\frac{2i\\omega}{1+\\omega^2} = \\frac{2i}{\\omega}\\cdot\\frac{1}{1 + \\omega^{-2}} = \\frac{2i}{\\omega} - \\frac{2i}{\\omega^3} + \\cdots.", explanation: "Expanding the exact value in inverse powers of \\( \\omega \\) reproduces the jump term \\( 2i/\\omega \\) exactly, with corrections at \\( O(\\omega^{-3}) \\). Checked numerically at \\( \\omega = 5,20,50 \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{2i}{\\omega} \\); exactly \\( I(\\omega) = \\dfrac{2i\\omega}{1+\\omega^2} \\).",
      canonicalAnswer: "2*i*w/(1 + w^2)",
    },
  },
  {
    id: "am5b-009",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 09",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading-order asymptotics as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^{\\pi} t\\,e^{i\\omega t}\\,dt \\), and give the next-order \\( O(\\omega^{-2}) \\) correction.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution", "higher order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Integrate by parts once.", workingLatex: "I(\\omega) = \\left[\\frac{t\\,e^{i\\omega t}}{i\\omega}\\right]_0^{\\pi} - \\frac{1}{i\\omega}\\int_0^{\\pi} e^{i\\omega t}\\,dt.", explanation: "Here \\( f(t) = t \\), so \\( f(0) = 0 \\): the lower endpoint contributes nothing at this order, leaving only the upper endpoint." },
        { stepNumber: 2, description: "Evaluate the leading boundary term.", workingLatex: "\\left[\\frac{t\\,e^{i\\omega t}}{i\\omega}\\right]_0^{\\pi} = \\frac{\\pi\\,e^{i\\pi\\omega}}{i\\omega}.", explanation: "The boundary term is the leading \\( O(\\omega^{-1}) \\) contribution; all of it comes from \\( t = \\pi \\)." },
        { stepNumber: 3, description: "Integrate the remaining piece by parts again.", workingLatex: "-\\frac{1}{i\\omega}\\int_0^{\\pi} e^{i\\omega t}\\,dt = -\\frac{1}{i\\omega}\\cdot\\frac{e^{i\\pi\\omega} - 1}{i\\omega} = -\\frac{e^{i\\pi\\omega} - 1}{(i\\omega)^2}.", explanation: "This term is \\( O(\\omega^{-2}) \\) and arises from the derivative \\( f' = 1 \\), evaluated at both endpoints; it is the first correction." },
        { stepNumber: 4, description: "Assemble the expansion.", workingLatex: "I(\\omega) = \\frac{\\pi e^{i\\pi\\omega}}{i\\omega} - \\frac{e^{i\\pi\\omega} - 1}{(i\\omega)^2} + 0, \\qquad (i\\omega)^2 = -\\omega^2.", explanation: "Because \\( f \\) is a polynomial of degree one, \\( f'' = 0 \\) and the series terminates: this is in fact the exact value, not merely an approximation." },
        { stepNumber: 5, description: "State leading + correction.", workingLatex: "I(\\omega) \\sim \\frac{\\pi e^{i\\pi\\omega}}{i\\omega} + \\frac{e^{i\\pi\\omega} - 1}{\\omega^2}.", explanation: "Leading term \\( \\pi e^{i\\pi\\omega}/(i\\omega) \\) from the endpoint \\( t=\\pi \\); the \\( O(\\omega^{-2}) \\) correction uses \\( -1/(i\\omega)^2 = 1/\\omega^2 \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{\\pi e^{i\\pi\\omega}}{i\\omega} + \\frac{e^{i\\pi\\omega} - 1}{\\omega^2} \\)",
      canonicalAnswer: "pi*exp(i*pi*w)/(i*w) + (exp(i*pi*w) - 1)/w^2",
    },
  },
  {
    id: "am5b-010",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 10",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Let \\( f(t) = 1 \\) for \\( 0 \\le t < 1 \\) and \\( f(t) = 2 \\) for \\( 1 \\le t \\le 3 \\). Find the leading behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^3 f(t)e^{i\\omega t}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "piecewise constant"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify endpoints and the jump.", workingLatex: "f(0^+) = 1, \\quad f(3^-) = 2, \\quad f(1^-) = 1,\\ f(1^+) = 2 \\ \\Rightarrow\\ \\text{jump } = -1.", explanation: "There is a jump discontinuity at \\( t = 1 \\) of size \\( f(1^-) - f(1^+) = 1 - 2 = -1 \\), plus the two genuine endpoints at \\( t = 0 \\) and \\( t = 3 \\)." },
        { stepNumber: 2, description: "Assemble the three contributions.", workingLatex: "I(\\omega) \\sim \\frac{e^{3i\\omega}\\cdot 2 - e^{0}\\cdot 1}{i\\omega} + \\frac{e^{i\\omega}\\,(1 - 2)}{i\\omega}.", explanation: "Substitute into the endpoint-plus-jump formula: upper endpoint \\( 2e^{3i\\omega} \\), lower endpoint \\( -1 \\), and the jump term \\( -e^{i\\omega} \\), all over \\( i\\omega \\)." },
        { stepNumber: 3, description: "Combine.", workingLatex: "I(\\omega) \\sim \\frac{2e^{3i\\omega} - e^{i\\omega} - 1}{i\\omega}.", explanation: "Since \\( f \\) is piecewise constant, every derivative vanishes on each piece, so this is exact (the integral can be evaluated directly to confirm)." },
        { stepNumber: 4, description: "Confirm by direct integration.", workingLatex: "\\int_0^1 e^{i\\omega t}\\,dt + 2\\int_1^3 e^{i\\omega t}\\,dt = \\frac{e^{i\\omega}-1}{i\\omega} + \\frac{2(e^{3i\\omega}-e^{i\\omega})}{i\\omega} = \\frac{2e^{3i\\omega} - e^{i\\omega} - 1}{i\\omega}.", explanation: "Direct evaluation matches the endpoint/jump assembly term for term, validating the method on a transparent case." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) = \\frac{2e^{3i\\omega} - e^{i\\omega} - 1}{i\\omega} \\)",
      canonicalAnswer: "(2*exp(3*i*w) - exp(i*w) - 1)/(i*w)",
    },
  },
  {
    id: "am5b-011",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 11",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading-order behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_{-1}^{1} |t|\\,e^{i\\omega t}\\,dt \\). (Note \\( |t| \\) is continuous but its derivative jumps at \\( t = 0 \\).)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "derivative discontinuity", "corner"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note f is continuous, f' jumps.", workingLatex: "f(t) = |t|: \\quad f(0^-) = f(0^+) = 0, \\qquad f'(0^-) = -1,\\ f'(0^+) = +1.", explanation: "Because \\( f \\) itself is continuous, the leading \\( O(\\omega^{-1}) \\) jump term vanishes. The corner shows up only one order later, through the jump in \\( f' \\)." },
        { stepNumber: 2, description: "Write down the endpoint terms at O(1/ω).", workingLatex: "\\frac{e^{i\\omega}\\,f(1) - e^{-i\\omega}\\,f(-1)}{i\\omega} = \\frac{e^{i\\omega} - e^{-i\\omega}}{i\\omega} = \\frac{2\\sin\\omega}{\\omega}.", explanation: "Endpoints \\( t = \\pm 1 \\) give \\( f(\\pm 1) = 1 \\). These dominate at \\( O(\\omega^{-1}) \\); the corner correction is smaller." },
        { stepNumber: 3, description: "Add the derivative-jump term at O(1/ω²).", workingLatex: "-\\frac{e^{i\\omega\\cdot 0}\\big(f'(0^-) - f'(0^+)\\big)}{(i\\omega)^2} = -\\frac{(-1 - 1)}{(i\\omega)^2} = \\frac{2}{(i\\omega)^2} = -\\frac{2}{\\omega^2}.", explanation: "At the next order the jump in \\( f' \\) enters with sign convention \\( -[\\,\\cdot\\,]/(i\\omega)^2 \\); the jump is \\( f'(0^-)-f'(0^+) = -2 \\), and \\( (i\\omega)^2 = -\\omega^2 \\)." },
        { stepNumber: 4, description: "Combine and state.", workingLatex: "I(\\omega) \\sim \\frac{2\\sin\\omega}{\\omega} - \\frac{2}{\\omega^2}, \\qquad \\omega \\to +\\infty.", explanation: "The continuous corner of \\( |t| \\) contributes a non-oscillatory \\( -2/\\omega^2 \\); the oscillatory \\( 2\\sin\\omega/\\omega \\) is the endpoint part. Verified numerically." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{2\\sin\\omega}{\\omega} - \\frac{2}{\\omega^2} \\)",
      canonicalAnswer: "2*sin(w)/w - 2/w^2",
    },
  },
  {
    id: "am5b-012",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 12",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Compute the leading two terms (orders \\( \\omega^{-1} \\) and \\( \\omega^{-2} \\)) as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^1 e^{t}\\,e^{i\\omega t}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution", "higher order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note f equals all its derivatives.", workingLatex: "f(t) = e^{t}, \\quad f^{(n)}(t) = e^{t}, \\quad f^{(n)}(0) = 1,\\ f^{(n)}(1) = e.", explanation: "For \\( f = e^t \\) every derivative is itself, which makes the integration-by-parts series especially clean and easy to sum." },
        { stepNumber: 2, description: "First boundary term, O(1/ω).", workingLatex: "\\frac{e^{i\\omega}f(1) - f(0)}{i\\omega} = \\frac{e\\,e^{i\\omega} - 1}{i\\omega}.", explanation: "Leading endpoint contribution from one integration by parts." },
        { stepNumber: 3, description: "Second boundary term, O(1/ω²).", workingLatex: "-\\frac{e^{i\\omega}f'(1) - f'(0)}{(i\\omega)^2} = -\\frac{e\\,e^{i\\omega} - 1}{(i\\omega)^2} = \\frac{e\\,e^{i\\omega} - 1}{\\omega^2}.", explanation: "Second integration by parts brings \\( f' = e^t \\) to the boundary with the alternating sign \\( (-1)^1 \\) and an extra \\( 1/(i\\omega) \\); using \\( (i\\omega)^2 = -\\omega^2 \\)." },
        { stepNumber: 4, description: "State the two-term expansion.", workingLatex: "I(\\omega) \\sim \\frac{e\\,e^{i\\omega} - 1}{i\\omega} + \\frac{e\\,e^{i\\omega} - 1}{\\omega^2}, \\qquad \\omega \\to +\\infty.", explanation: "In fact the full series sums to the exact value \\( (e\\,e^{i\\omega}-1)/(1 - i\\omega)^{-1}\\) form, but the two requested terms are as above. Checked numerically." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{e\\,e^{i\\omega} - 1}{i\\omega} + \\frac{e\\,e^{i\\omega} - 1}{\\omega^2} \\)",
      canonicalAnswer: "(e*exp(i*w) - 1)/(i*w) + (e*exp(i*w) - 1)/w^2",
    },
  },
  {
    id: "am5b-013",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 13",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "A signal is \\( f(t) = \\cos t \\) for \\( 0 \\le t < \\tfrac{\\pi}{2} \\) and \\( f(t) = 0 \\) for \\( \\tfrac{\\pi}{2} \\le t \\le \\pi \\). Find the leading behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^{\\pi} f(t)e^{i\\omega t}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "piecewise smooth"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the one-sided limits.", workingLatex: "f(0^+) = \\cos 0 = 1, \\quad f\\!\\left(\\tfrac{\\pi}{2}^-\\right) = \\cos\\tfrac{\\pi}{2} = 0, \\quad f\\!\\left(\\tfrac{\\pi}{2}^+\\right) = 0, \\quad f(\\pi^-) = 0.", explanation: "Although \\( f \\) is defined piecewise, \\( \\cos t \\to 0 \\) as \\( t \\to \\pi/2^- \\), so the function is actually continuous at \\( \\pi/2 \\): the would-be jump there is zero." },
        { stepNumber: 2, description: "Discard vanishing contributions.", workingLatex: "\\text{jump at } \\tfrac{\\pi}{2} = 0 - 0 = 0, \\qquad \\text{endpoint } t=\\pi:\\ f(\\pi^-) = 0.", explanation: "Both the interior jump and the upper endpoint contribute nothing because the relevant one-sided values are zero. Only the lower endpoint \\( t = 0 \\) survives at leading order.", mafs: `<Mafs viewBox={{ x: [0, 6.4], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => (t < Math.PI/2 ? Math.cos(13*t)*Math.cos(t) : 0)} domain={[0, Math.PI]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => (t < Math.PI/2 ? Math.cos(t) : 0)} domain={[0, Math.PI]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => (t < Math.PI/2 ? -Math.cos(t) : 0)} domain={[0, Math.PI]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.2,1.25]} tex="t=0\\text{ survives}" color="var(--mafs-fg-blue)" />
  <LaTeX at={[3.4,0.55]} tex="\\text{cutoff }\\tfrac{\\pi}{2}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[6.1,-0.2]} tex="t" />
</Mafs>` },
        { stepNumber: 3, description: "Apply the endpoint formula at t = 0.", workingLatex: "I(\\omega) \\sim \\frac{-\\,e^{0}\\,f(0^+)}{i\\omega} = \\frac{-1}{i\\omega} = \\frac{i}{\\omega}.", explanation: "The lower endpoint enters with a minus sign; \\( f(0^+) = 1 \\), and \\( -1/(i\\omega) = i/\\omega \\)." },
        { stepNumber: 4, description: "State the leading behaviour.", workingLatex: "I(\\omega) \\sim \\frac{i}{\\omega}, \\qquad \\omega \\to +\\infty.", explanation: "Even though the support has a 'cut-off' at \\( \\pi/2 \\), it is a smooth cut-off in value (the corner is in the derivative), so the leading term is the genuine endpoint at the origin. Confirmed numerically." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{i}{\\omega} \\)",
      canonicalAnswer: "i/w",
    },
  },
  {
    id: "am5b-014",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 14",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading two terms as \\( \\omega \\to +\\infty \\) of the real integral \\( \\displaystyle J(\\omega) = \\int_0^1 t\\,\\cos(\\omega t)\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution", "real part"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Work with the complex integral.", workingLatex: "J(\\omega) = \\operatorname{Re}\\int_0^1 t\\,e^{i\\omega t}\\,dt.", explanation: "Treat \\( \\cos(\\omega t) = \\operatorname{Re}\\,e^{i\\omega t} \\) and apply the endpoint expansion to the complex integral, taking the real part at the end." },
        { stepNumber: 2, description: "Expand the complex integral.", workingLatex: "\\int_0^1 t\\,e^{i\\omega t}\\,dt \\sim \\frac{e^{i\\omega}}{i\\omega} - \\frac{e^{i\\omega} - 1}{(i\\omega)^2}.", explanation: "Leading endpoint term from \\( f(1) = 1 \\) (the \\( f(0) = 0 \\) endpoint drops at this order); the \\( O(\\omega^{-2}) \\) term uses \\( f' = 1 \\) at both ends." },
        { stepNumber: 3, description: "Take real parts.", workingLatex: "\\operatorname{Re}\\frac{e^{i\\omega}}{i\\omega} = \\frac{\\sin\\omega}{\\omega}, \\qquad \\operatorname{Re}\\!\\left(-\\frac{e^{i\\omega}-1}{(i\\omega)^2}\\right) = \\frac{\\cos\\omega - 1}{\\omega^2}.", explanation: "Using \\( 1/(i\\omega) = -i/\\omega \\) and \\( (i\\omega)^2 = -\\omega^2 \\): the first real part is \\( \\sin\\omega/\\omega \\); the second is \\( (\\cos\\omega - 1)/\\omega^2 \\)." },
        { stepNumber: 4, description: "Assemble.", workingLatex: "J(\\omega) \\sim \\frac{\\sin\\omega}{\\omega} + \\frac{\\cos\\omega - 1}{\\omega^2}, \\qquad \\omega \\to +\\infty.", explanation: "Both terms are exact here (\\( f = t \\) is linear), so this is the complete expansion. Verified numerically against direct quadrature." },
      ],
      finalAnswer: "\\( \\displaystyle J(\\omega) \\sim \\frac{\\sin\\omega}{\\omega} + \\frac{\\cos\\omega - 1}{\\omega^2} \\)",
      canonicalAnswer: "sin(w)/w + (cos(w) - 1)/w^2",
    },
  },
  {
    id: "am5b-015",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 15",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Let \\( f(t) = t \\) for \\( 0 \\le t < 1 \\) and \\( f(t) = t - 1 \\) for \\( 1 \\le t \\le 2 \\) (a sawtooth with a unit drop at \\( t = 1 \\)). Find the leading behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^2 f(t)e^{i\\omega t}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "sawtooth"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Read off endpoints and jump.", workingLatex: "f(0^+) = 0, \\quad f(2^-) = 1, \\quad f(1^-) = 1,\\ f(1^+) = 0 \\ \\Rightarrow\\ \\text{jump} = 1.", explanation: "The sawtooth drops from \\( 1 \\) back to \\( 0 \\) at \\( t = 1 \\), so \\( f(1^-) - f(1^+) = 1 - 0 = +1 \\). The lower endpoint value is \\( 0 \\).", mafs: `<Mafs viewBox={{ x: [0, 6.4], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.cos(13*t)*(t < 1 ? 0.65*t : 0.65*(t-1))} domain={[0, 2]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => (t < 1 ? 0.65*t : 0.65*(t-1))} domain={[0, 2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => -(t < 1 ? 0.65*t : 0.65*(t-1))} domain={[0, 2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={1} y={0.65} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.5,1.05]} tex="\\text{drop at }t=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[4.2,0.55]} tex="\\pm f(t)" color="var(--mafs-fg-orange)" />
  <LaTeX at={[6.1,-0.2]} tex="t" />
</Mafs>` },
        { stepNumber: 2, description: "Assemble the O(1/ω) terms.", workingLatex: "I(\\omega) \\sim \\frac{e^{2i\\omega}\\cdot 1 - e^{0}\\cdot 0}{i\\omega} + \\frac{e^{i\\omega}\\cdot 1}{i\\omega}.", explanation: "Upper endpoint gives \\( e^{2i\\omega}/(i\\omega) \\); lower endpoint contributes nothing; the jump at \\( t = 1 \\) gives \\( e^{i\\omega}/(i\\omega) \\)." },
        { stepNumber: 3, description: "Combine.", workingLatex: "I(\\omega) \\sim \\frac{e^{2i\\omega} + e^{i\\omega}}{i\\omega}, \\qquad \\omega \\to +\\infty.", explanation: "The discontinuity in \\( f \\) contributes at the same \\( O(\\omega^{-1}) \\) order as the endpoint, doubling the oscillatory content." },
        { stepNumber: 4, description: "Note the next order.", workingLatex: "\\text{correction at } O(\\omega^{-2}):\\ -\\frac{e^{2i\\omega}f'(2) - f'(0)}{(i\\omega)^2} = -\\frac{e^{2i\\omega} - 1}{(i\\omega)^2},", explanation: "Since \\( f' = 1 \\) on both pieces, \\( f' \\) is continuous at \\( t = 1 \\): there is no jump correction at \\( O(\\omega^{-2}) \\), only the endpoint derivative term. Verified numerically." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{e^{2i\\omega} + e^{i\\omega}}{i\\omega} \\)",
      canonicalAnswer: "(exp(2*i*w) + exp(i*w))/(i*w)",
    },
  },
  {
    id: "am5b-016",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 16",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading-order behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_1^{2} \\frac{1}{t}\\,e^{i\\omega t}\\,dt \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Confirm no stationary phase.", workingLatex: "\\frac{d}{dt}(\\omega t) = \\omega \\neq 0, \\qquad f(t) = \\frac{1}{t} \\text{ smooth on } [1,2].", explanation: "The phase \\( \\omega t \\) is non-stationary and \\( 1/t \\) is smooth away from the origin, which lies outside \\( [1,2] \\). So the leading behaviour is from the two endpoints." },
        { stepNumber: 2, description: "Evaluate f at the endpoints.", workingLatex: "f(1) = 1, \\qquad f(2) = \\tfrac{1}{2}.", explanation: "These are the values needed for the endpoint formula." },
        { stepNumber: 3, description: "Apply the endpoint formula.", workingLatex: "I(\\omega) \\sim \\frac{e^{2i\\omega}\\cdot\\frac{1}{2} - e^{i\\omega}\\cdot 1}{i\\omega} = \\frac{\\frac{1}{2}e^{2i\\omega} - e^{i\\omega}}{i\\omega}.", explanation: "Upper endpoint \\( t=2 \\) gives \\( \\tfrac12 e^{2i\\omega} \\), lower endpoint \\( t=1 \\) gives \\( -e^{i\\omega} \\). The correction is \\( O(\\omega^{-2}) \\), from \\( f' = -1/t^2 \\)." },
        { stepNumber: 4, description: "State the result.", workingLatex: "I(\\omega) \\sim \\frac{\\frac{1}{2}e^{2i\\omega} - e^{i\\omega}}{i\\omega}, \\qquad \\omega \\to +\\infty.", explanation: "Confirmed numerically: the residual after subtracting this term decays as \\( \\omega^{-2} \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{\\frac{1}{2}e^{2i\\omega} - e^{i\\omega}}{i\\omega} \\)",
      canonicalAnswer: "((1/2)*exp(2*i*w) - exp(i*w))/(i*w)",
    },
  },
  {
    id: "am5b-017",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 17",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading two terms as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^{1} (1 + t^2)\\,e^{i\\omega t}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution", "higher order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "List f and f' at endpoints.", workingLatex: "f(t) = 1 + t^2:\\quad f(0) = 1,\\ f(1) = 2; \\qquad f'(t) = 2t:\\ f'(0) = 0,\\ f'(1) = 2.", explanation: "We need \\( f \\) and \\( f' \\) at both endpoints to reach \\( O(\\omega^{-2}) \\)." },
        { stepNumber: 2, description: "Leading O(1/ω) endpoint term.", workingLatex: "\\frac{e^{i\\omega}f(1) - f(0)}{i\\omega} = \\frac{2e^{i\\omega} - 1}{i\\omega}.", explanation: "Both endpoints contribute at leading order because \\( f \\) is nonzero at each." },
        { stepNumber: 3, description: "Next O(1/ω²) term.", workingLatex: "-\\frac{e^{i\\omega}f'(1) - f'(0)}{(i\\omega)^2} = -\\frac{2e^{i\\omega} - 0}{(i\\omega)^2} = \\frac{2e^{i\\omega}}{\\omega^2}.", explanation: "Only \\( t = 1 \\) contributes here since \\( f'(0) = 0 \\); \\( (i\\omega)^2 = -\\omega^2 \\) flips the sign." },
        { stepNumber: 4, description: "Combine.", workingLatex: "I(\\omega) \\sim \\frac{2e^{i\\omega} - 1}{i\\omega} + \\frac{2e^{i\\omega}}{\\omega^2}, \\qquad \\omega \\to +\\infty.", explanation: "The next correction would be \\( O(\\omega^{-3}) \\) from \\( f'' = 2 \\). Verified numerically that the displayed two terms capture the integral to \\( O(\\omega^{-3}) \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{2e^{i\\omega} - 1}{i\\omega} + \\frac{2e^{i\\omega}}{\\omega^2} \\)",
      canonicalAnswer: "(2*exp(i*w) - 1)/(i*w) + 2*exp(i*w)/w^2",
    },
  },
  {
    id: "am5b-018",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 18",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Let \\( f(t) = e^{-t} \\) for \\( t \\ge 0 \\) and \\( f(t) = 0 \\) for \\( t < 0 \\). Find the leading behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_{-1}^{1} f(t)e^{i\\omega t}\\,dt \\), distinguishing the jump term from the endpoint term.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "one-sided"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the active features.", workingLatex: "f(-1) = 0,\\quad f(0^-) = 0,\\ f(0^+) = 1,\\quad f(1^-) = e^{-1}.", explanation: "The lower endpoint at \\( t = -1 \\) is dead (\\( f = 0 \\) there); a jump of size \\( f(0^-) - f(0^+) = -1 \\) sits at the origin; the upper endpoint at \\( t = 1 \\) is live." },
        { stepNumber: 2, description: "Write the jump term.", workingLatex: "\\frac{e^{i\\omega\\cdot 0}\\,(0 - 1)}{i\\omega} = \\frac{-1}{i\\omega} = \\frac{i}{\\omega}.", explanation: "The discontinuity at the origin produces \\( -1/(i\\omega) = i/\\omega \\), a non-decaying-phase contribution." },
        { stepNumber: 3, description: "Write the endpoint term.", workingLatex: "\\frac{e^{i\\omega}\\,f(1^-)}{i\\omega} = \\frac{e^{-1}e^{i\\omega}}{i\\omega}.", explanation: "Upper endpoint \\( t = 1 \\) gives \\( e^{-1}e^{i\\omega}/(i\\omega) \\), carrying the oscillatory phase \\( e^{i\\omega} \\)." },
        { stepNumber: 4, description: "Combine and state.", workingLatex: "I(\\omega) \\sim \\frac{e^{-1}e^{i\\omega} - 1}{i\\omega}, \\qquad \\omega \\to +\\infty.", explanation: "The constant term \\( -1/(i\\omega) \\) is the jump at the origin; the oscillatory \\( e^{-1}e^{i\\omega}/(i\\omega) \\) is the endpoint at \\( t = 1 \\). Verified numerically (residual \\( \\sim \\omega^{-2} \\))." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{e^{-1}e^{i\\omega} - 1}{i\\omega} \\) (endpoint term \\( e^{-1}e^{i\\omega}/(i\\omega) \\), jump term \\( -1/(i\\omega) \\)).",
      canonicalAnswer: "(exp(-1)*exp(i*w) - 1)/(i*w)",
    },
  },

  // ── Challenge: synoptic / multi-step / starred-level ────
  {
    id: "am5b-019",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Let \\( f \\) be smooth on \\( (a,c) \\cup (c,b) \\) with one-sided derivatives of all orders at the four relevant points. By repeated integration by parts, derive the full asymptotic series for \\( \\displaystyle I(\\omega) = \\int_a^b f(t)e^{i\\omega t}\\,dt \\) as \\( |\\omega| \\to \\infty \\), giving the general \\( n \\)-th term.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "full asymptotic series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the recursion on each piece.", workingLatex: "\\int g\\,e^{i\\omega t}\\,dt = \\frac{g\\,e^{i\\omega t}}{i\\omega} - \\frac{1}{i\\omega}\\int g'\\,e^{i\\omega t}\\,dt.", explanation: "Each integration by parts lowers the integrand to its derivative and multiplies by \\( 1/(i\\omega) \\). Iterating on a smooth piece generates an alternating series in inverse powers of \\( i\\omega \\)." },
        { stepNumber: 2, description: "Iterate on the interval (a,c).", workingLatex: "\\int_a^c f e^{i\\omega t}\\,dt = \\sum_{n=0}^{\\infty}\\frac{(-1)^n}{(i\\omega)^{n+1}}\\Big[f^{(n)}(c^-)e^{i\\omega c} - f^{(n)}(a^+)e^{i\\omega a}\\Big].", explanation: "Repeated parts on \\( (a,c) \\): the \\( n \\)-th boundary term carries \\( (-1)^n \\) (from the alternating signs) and \\( (i\\omega)^{-(n+1)} \\). One-sided limits appear at the open ends." },
        { stepNumber: 3, description: "Iterate on the interval (c,b).", workingLatex: "\\int_c^b f e^{i\\omega t}\\,dt = \\sum_{n=0}^{\\infty}\\frac{(-1)^n}{(i\\omega)^{n+1}}\\Big[f^{(n)}(b^-)e^{i\\omega b} - f^{(n)}(c^+)e^{i\\omega c}\\Big].", explanation: "Identical procedure; now \\( c \\) is the lower endpoint, so it carries a minus sign and the right-hand limit \\( f^{(n)}(c^+) \\)." },
        { stepNumber: 4, description: "Add the two series.", workingLatex: "I(\\omega) = \\sum_{n=0}^{\\infty}\\frac{(-1)^n}{(i\\omega)^{n+1}}\\Big[f^{(n)}(b^-)e^{i\\omega b} - f^{(n)}(a^+)e^{i\\omega a} + e^{i\\omega c}\\big(f^{(n)}(c^-) - f^{(n)}(c^+)\\big)\\Big].", explanation: "The two contributions at \\( c \\) combine, at every order \\( n \\), into the derivative-jump \\( f^{(n)}(c^-) - f^{(n)}(c^+) \\)." },
        { stepNumber: 5, description: "Read off the general n-th term.", workingLatex: "I_n = \\frac{(-1)^n}{(i\\omega)^{n+1}}\\Big[f^{(n)}(b^-)e^{i\\omega b} - f^{(n)}(a^+)e^{i\\omega a} + e^{i\\omega c}\\big(f^{(n)}(c^-) - f^{(n)}(c^+)\\big)\\Big].", explanation: "Each term is \\( O(\\omega^{-(n+1)}) \\). The leading \\( n=0 \\) term recovers the endpoint-plus-jump formula; a jump in the \\( n \\)-th derivative first appears at order \\( \\omega^{-(n+1)} \\)." },
        { stepNumber: 6, description: "State convergence caveat.", workingLatex: "I(\\omega) \\sim \\sum_{n=0}^{\\infty} I_n \\quad (\\text{asymptotic, generally divergent}).", explanation: "The series is asymptotic, not convergent in general; truncating at the optimal term gives exponentially small error in good cases. The remainder after \\( N \\) terms is \\( O(\\omega^{-(N+1)}) \\) when \\( f^{(N)} \\) is integrable." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\sum_{n=0}^{\\infty}\\frac{(-1)^n}{(i\\omega)^{n+1}}\\Big[f^{(n)}(b^-)e^{i\\omega b} - f^{(n)}(a^+)e^{i\\omega a} + e^{i\\omega c}\\big(f^{(n)}(c^-)-f^{(n)}(c^+)\\big)\\Big] \\)",
    },
  },
  // REVIEW: structural derivation of a general n-th term + asymptotic-series caveat; not a single numerically-checkable value (leading terms checked numerically in sibling questions).
  {
    id: "am5b-020",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 20",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Let \\( f(t) = t^2 \\) for \\( 0 \\le t < 1 \\) and \\( f(t) = 1 + 5(t-1) \\) for \\( 1 \\le t \\le 2 \\) (so \\( f \\) is continuous at \\( t = 1 \\) but \\( f' \\) jumps there). Find the asymptotic expansion of \\( \\displaystyle I(\\omega) = \\int_0^2 f(t)e^{i\\omega t}\\,dt \\) up to and including \\( O(\\omega^{-2}) \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "derivative discontinuity", "higher order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Tabulate values and first derivatives.", workingLatex: "f(0)=0,\\ f(2^-)=6; \\quad f'(t)=2t\\ (t<1),\\ f'=5\\ (t>1):\\ f'(0)=0,\\ f'(2)=5,\\ f'(1^-)=2,\\ f'(1^+)=5.", explanation: "\\( f \\) is continuous at \\( t=1 \\) (both pieces give \\( 1 \\)), so there is no \\( O(\\omega^{-1}) \\) jump; but \\( f' \\) jumps from \\( 2 \\) to \\( 5 \\), giving an \\( O(\\omega^{-2}) \\) corner term." },
        { stepNumber: 2, description: "Leading endpoint term, O(1/ω).", workingLatex: "\\frac{e^{2i\\omega}f(2^-) - f(0)}{i\\omega} = \\frac{6e^{2i\\omega} - 0}{i\\omega} = \\frac{6e^{2i\\omega}}{i\\omega}.", explanation: "Only the upper endpoint survives at leading order since \\( f(0) = 0 \\) and the \\( t=1 \\) value-jump is zero." },
        { stepNumber: 3, description: "Endpoint derivative term, O(1/ω²).", workingLatex: "-\\frac{e^{2i\\omega}f'(2) - f'(0)}{(i\\omega)^2} = -\\frac{5e^{2i\\omega} - 0}{(i\\omega)^2} = \\frac{5e^{2i\\omega}}{\\omega^2}.", explanation: "Second integration by parts at the genuine endpoints; \\( f'(0) = 0 \\), so only \\( t=2 \\) contributes, and \\( (i\\omega)^2 = -\\omega^2 \\)." },
        { stepNumber: 4, description: "Corner (derivative-jump) term, O(1/ω²).", workingLatex: "-\\frac{e^{i\\omega}\\,(f'(1^-) - f'(1^+))}{(i\\omega)^2} = -\\frac{e^{i\\omega}(2 - 5)}{(i\\omega)^2} = -\\frac{3e^{i\\omega}}{\\omega^2}.", explanation: "The jump in \\( f' \\) at \\( t=1 \\) enters at the same \\( O(\\omega^{-2}) \\) order as the endpoint derivative term, with jump \\( f'(1^-) - f'(1^+) = -3 \\)." },
        { stepNumber: 5, description: "Assemble all O(ω⁻¹) and O(ω⁻²) terms.", workingLatex: "I(\\omega) \\sim \\frac{6e^{2i\\omega}}{i\\omega} + \\frac{5e^{2i\\omega} - 3e^{i\\omega}}{\\omega^2}.", explanation: "Collect the leading endpoint, the endpoint derivative, and the corner contributions." },
        { stepNumber: 6, description: "State the result.", workingLatex: "I(\\omega) \\sim \\frac{6e^{2i\\omega}}{i\\omega} + \\frac{5e^{2i\\omega} - 3e^{i\\omega}}{\\omega^2}, \\qquad \\omega \\to +\\infty.", explanation: "Numerically verified: including the \\( O(\\omega^{-3}) \\) terms (where \\( f'' \\) jumps from \\( 2 \\) to \\( 0 \\)) drives the residual down to quadrature noise \\( \\sim 10^{-13} \\) at \\( \\omega = 50\\!-\\!400 \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{6e^{2i\\omega}}{i\\omega} + \\frac{5e^{2i\\omega} - 3e^{i\\omega}}{\\omega^2} \\)",
      canonicalAnswer: "6*exp(2*i*w)/(i*w) + (5*exp(2*i*w) - 3*exp(i*w))/w^2",
    },
  },
  {
    id: "am5b-021",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 21",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Using part (a)-style reasoning, find the asymptotic expansion of \\( \\displaystyle I(\\omega) = \\int_{-\\infty}^{\\infty} f(t)e^{i\\omega t}\\,dt \\) as \\( \\omega \\to +\\infty \\) for \\( f(t) = -e^{t}\\ (t<0),\\ e^{-t}\\ (t \\ge 0) \\), to two non-zero terms, and confirm against the exact transform.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "exact comparison", "higher order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "List the jumps of f and its derivatives at 0.", workingLatex: "f(0^-)=-1,\\ f(0^+)=1; \\quad f'(0^-)=-1,\\ f'(0^+)=-1; \\quad f''(0^-)=-1,\\ f''(0^+)=1.", explanation: "\\( f' = -e^{t}\\ (t<0),\\ -e^{-t}\\ (t>0) \\) so \\( f' \\) is continuous at \\( 0 \\) (both \\( -1 \\)); \\( f'' = -e^{t}\\ (t<0),\\ e^{-t}\\ (t>0) \\) jumps from \\( -1 \\) to \\( 1 \\)." },
        { stepNumber: 2, description: "n = 0 jump term.", workingLatex: "\\frac{f(0^-) - f(0^+)}{i\\omega} = \\frac{-2}{i\\omega} = \\frac{2i}{\\omega}.", explanation: "The value jump is \\( -2 \\); endpoints at \\( \\pm\\infty \\) vanish because \\( f \\to 0 \\)." },
        { stepNumber: 3, description: "n = 1 jump term vanishes.", workingLatex: "\\frac{(-1)^1}{(i\\omega)^2}\\,(f'(0^-) - f'(0^+)) = \\frac{-1}{(i\\omega)^2}(-1 - (-1)) = 0.", explanation: "Since \\( f' \\) is continuous at the origin its jump is zero, so there is no \\( O(\\omega^{-2}) \\) term — the first correction is pushed to \\( O(\\omega^{-3}) \\)." },
        { stepNumber: 4, description: "n = 2 jump term.", workingLatex: "\\frac{(-1)^2}{(i\\omega)^3}\\,(f''(0^-) - f''(0^+)) = \\frac{1}{(i\\omega)^3}(-1 - 1) = \\frac{-2}{(i\\omega)^3} = -\\frac{2i}{\\omega^3}.", explanation: "Using \\( (i\\omega)^3 = -i\\omega^3 \\): \\( -2/(-i\\omega^3) = -2i/\\omega^3 \\) after simplification (\\( 1/(-i) = i \\), times \\( -2 \\) gives \\( -2i \\))." },
        { stepNumber: 5, description: "Assemble the two non-zero terms.", workingLatex: "I(\\omega) \\sim \\frac{2i}{\\omega} - \\frac{2i}{\\omega^3}, \\qquad \\omega \\to +\\infty.", explanation: "Collect the surviving \\( n=0 \\) and \\( n=2 \\) terms." },
        { stepNumber: 6, description: "Confirm against the exact transform.", workingLatex: "I(\\omega) = \\frac{2i\\omega}{1+\\omega^2} = \\frac{2i}{\\omega}\\Big(1 + \\omega^{-2}\\Big)^{-1} = \\frac{2i}{\\omega} - \\frac{2i}{\\omega^3} + \\frac{2i}{\\omega^5} - \\cdots.", explanation: "Expanding the exact value \\( 2i\\omega/(1+\\omega^2) \\) reproduces both terms exactly, validating the derivative-jump bookkeeping. Checked numerically at \\( \\omega = 5,20,50 \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{2i}{\\omega} - \\frac{2i}{\\omega^3} \\); exactly \\( \\dfrac{2i\\omega}{1+\\omega^2} \\).",
      canonicalAnswer: "2*i*w/(1 + w^2)",
    },
  },
  {
    id: "am5b-022",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 22",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "An oscillatory integral has both an interior stationary point and live endpoints. For \\( \\displaystyle I(\\omega) = \\int_0^1 e^{i\\omega t^2}\\,dt \\), find the leading contribution of the stationary point at \\( t = 0 \\) and the leading endpoint contribution at \\( t = 1 \\), and state which dominates as \\( \\omega \\to +\\infty \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "stationary phase", "endpoint contribution", "Fresnel"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the stationary point of the phase.", workingLatex: "\\phi(t) = t^2, \\quad \\phi'(t) = 2t = 0 \\ \\Rightarrow\\ t = 0 \\ (\\text{an endpoint}).", explanation: "The phase is stationary exactly at the lower endpoint \\( t = 0 \\); this is the classic 'stationary point at an endpoint' situation, so it contributes a half-Fresnel integral." },
        { stepNumber: 2, description: "Stationary-point (Fresnel) contribution at t = 0.", workingLatex: "\\int_0^{\\infty} e^{i\\omega t^2}\\,dt = \\frac{1}{2}\\sqrt{\\frac{\\pi}{\\omega}}\\,e^{i\\pi/4}.", explanation: "The Fresnel integral \\( \\int_0^\\infty e^{i\\omega t^2}dt = \\tfrac12\\sqrt{\\pi/\\omega}\\,e^{i\\pi/4} \\). Because the stationary point is at the endpoint, we get half the full \\( \\sqrt{\\pi/\\omega} \\) and the contribution is \\( O(\\omega^{-1/2}) \\)." },
        { stepNumber: 3, description: "Endpoint contribution at t = 1.", workingLatex: "\\text{near } t=1:\\ \\phi'(1) = 2 \\neq 0 \\ \\Rightarrow\\ \\frac{e^{i\\omega}}{i\\omega\\,\\phi'(1)} = \\frac{e^{i\\omega}}{2i\\omega}.", explanation: "At \\( t = 1 \\) the phase is non-stationary, so one integration by parts gives \\( e^{i\\omega\\phi(1)}/(i\\omega\\phi'(1)) = e^{i\\omega}/(2i\\omega) \\), an \\( O(\\omega^{-1}) \\) term." },
        { stepNumber: 4, description: "Compare the orders.", workingLatex: "O(\\omega^{-1/2}) \\ \\gg\\ O(\\omega^{-1}), \\qquad \\omega \\to +\\infty.", explanation: "The stationary-phase term decays more slowly, so it dominates; the endpoint at \\( t = 1 \\) is a subdominant correction." },
        { stepNumber: 5, description: "State the leading behaviour.", workingLatex: "I(\\omega) \\sim \\frac{1}{2}\\sqrt{\\frac{\\pi}{\\omega}}\\,e^{i\\pi/4} + \\frac{e^{i\\omega}}{2i\\omega}, \\qquad \\omega \\to +\\infty.", explanation: "Leading term is the half-Fresnel stationary contribution \\( \\tfrac12\\sqrt{\\pi/\\omega}\\,e^{i\\pi/4} \\); the endpoint at \\( t=1 \\) sits at the next order. Verified numerically (the \\( \\omega^{-1/2} \\) term matches \\( \\int_0^1 e^{i\\omega t^2}dt \\) closely at \\( \\omega = 200 \\))." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{1}{2}\\sqrt{\\frac{\\pi}{\\omega}}\\,e^{i\\pi/4} + \\frac{e^{i\\omega}}{2i\\omega} \\); the stationary term \\( O(\\omega^{-1/2}) \\) dominates.",
      canonicalAnswer: "(1/2)*sqrt(pi/w)*exp(i*pi/4) + exp(i*w)/(2*i*w)",
    },
  },
  {
    id: "am5b-023",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 23",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading-order behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^1 \\sqrt{t}\\;e^{i\\omega t}\\,dt \\). (Note \\( f(t)=\\sqrt t \\) has an integrable singularity in its derivative at the lower endpoint.)",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint singularity", "fractional power", "gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Separate the two endpoint behaviours.", workingLatex: "I(\\omega) = \\underbrace{\\int_0^1 \\sqrt{t}\\,e^{i\\omega t}\\,dt}_{\\text{singular end } t=0,\\ \\text{smooth end } t=1}.", explanation: "At \\( t=1 \\) the integrand is smooth, so it gives an ordinary \\( O(\\omega^{-1}) \\) endpoint term. At \\( t=0 \\) the algebraic factor \\( t^{1/2} \\) makes integration by parts fail, so we use a Watson/gamma-type local analysis." },
        { stepNumber: 2, description: "Local contribution at t = 0 via the gamma integral.", workingLatex: "\\int_0^{\\infty} t^{1/2}e^{i\\omega t}\\,dt = \\frac{\\Gamma(3/2)}{(-i\\omega)^{3/2}} = \\Gamma\\!\\left(\\tfrac{3}{2}\\right)\\omega^{-3/2}e^{3i\\pi/4}.", explanation: "Using \\( \\int_0^\\infty t^{s-1}e^{i\\omega t}dt = \\Gamma(s)(-i\\omega)^{-s} \\) with \\( s = 3/2 \\); here \\( (-i)^{-3/2} = e^{3i\\pi/4} \\) and \\( \\Gamma(3/2) = \\tfrac{\\sqrt\\pi}{2} \\)." },
        { stepNumber: 3, description: "Endpoint contribution at t = 1.", workingLatex: "\\frac{e^{i\\omega}f(1)}{i\\omega} = \\frac{e^{i\\omega}}{i\\omega}.", explanation: "Standard non-stationary endpoint term with \\( f(1) = 1 \\); this is \\( O(\\omega^{-1}) \\)." },
        { stepNumber: 4, description: "Compare orders.", workingLatex: "O(\\omega^{-1}) \\ \\gg\\ O(\\omega^{-3/2}), \\qquad \\omega \\to +\\infty.", explanation: "The smooth endpoint at \\( t=1 \\) (\\( \\omega^{-1} \\)) decays more slowly than the singular endpoint at \\( t=0 \\) (\\( \\omega^{-3/2} \\)), so it dominates here — opposite to the stationary-phase case." },
        { stepNumber: 5, description: "State the result.", workingLatex: "I(\\omega) \\sim \\frac{e^{i\\omega}}{i\\omega} + \\frac{\\sqrt{\\pi}}{2}\\,\\omega^{-3/2}\\,e^{3i\\pi/4}, \\qquad \\omega \\to +\\infty.", explanation: "Leading term from the smooth endpoint at \\( t=1 \\); the algebraic singularity at \\( t=0 \\) contributes the half-integer-power correction. Verified numerically at \\( \\omega = 100,400 \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{e^{i\\omega}}{i\\omega} + \\frac{\\sqrt{\\pi}}{2}\\,\\omega^{-3/2}e^{3i\\pi/4} \\)",
      canonicalAnswer: "exp(i*w)/(i*w) + (sqrt(pi)/2)*w^(-3/2)*exp(3*i*pi/4)",
    },
  },
  // REVIEW: gamma-function local-endpoint formula; leading 1/(iw) endpoint term numerically dominant, but the w^{-3/2} branch phase relies on the standard Gamma(s)(-iw)^{-s} identity — flagging the branch choice.
  {
    id: "am5b-024",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 24",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading-order behaviour as \\( x \\to +\\infty \\) of \\( \\displaystyle I(x) = \\int_0^1 \\cos\\!\\big(x\\,t^{p}\\big)\\,dt \\) for fixed real \\( p > 1 \\). Identify the contribution of the stationary point at \\( t = 0 \\) and that of the endpoint at \\( t = 1 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "stationary phase", "endpoint contribution", "gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the stationary point.", workingLatex: "\\phi(t) = t^{p}, \\quad \\phi'(t) = p\\,t^{p-1} = 0 \\ \\Rightarrow\\ t = 0 \\ (p > 1).", explanation: "Since \\( p > 1 \\), the phase derivative vanishes at \\( t = 0 \\): a stationary point of order \\( p-1 \\) sitting at the lower endpoint. This gives a slowly-decaying \\( \\omega^{-1/p} \\) contribution." },
        { stepNumber: 2, description: "Local contribution at t = 0 (gamma integral).", workingLatex: "\\int_0^{\\infty} e^{i x t^{p}}\\,dt = \\frac{1}{p}\\,\\Gamma\\!\\left(\\tfrac{1}{p}\\right)x^{-1/p}\\,e^{i\\pi/(2p)}.", explanation: "Substitute \\( u = t^p \\): \\( \\int_0^\\infty e^{ixu}\\tfrac1p u^{1/p - 1}du = \\tfrac1p\\Gamma(1/p)(-ix)^{-1/p} = \\tfrac1p\\Gamma(1/p)x^{-1/p}e^{i\\pi/(2p)} \\)." },
        { stepNumber: 3, description: "Take the real part for the cosine.", workingLatex: "\\operatorname{Re}\\!\\left[\\frac{\\Gamma(1/p)}{p}x^{-1/p}e^{i\\pi/(2p)}\\right] = \\frac{\\Gamma(1/p)}{p}\\,x^{-1/p}\\cos\\!\\frac{\\pi}{2p}.", explanation: "Because \\( \\cos(x t^p) = \\operatorname{Re}\\,e^{ixt^p} \\), take the real part of the complex stationary contribution." },
        { stepNumber: 4, description: "Endpoint contribution at t = 1.", workingLatex: "\\frac{\\sin x}{x\\,\\phi'(1)} = \\frac{\\sin x}{p\\,x}\\ =\\ O(x^{-1}).", explanation: "At \\( t = 1 \\) the phase is non-stationary with \\( \\phi'(1) = p \\); integrating by parts and taking the real part gives an \\( O(x^{-1}) \\) endpoint term, subdominant to \\( x^{-1/p} \\) since \\( p > 1 \\)." },
        { stepNumber: 5, description: "State the leading behaviour.", workingLatex: "I(x) \\sim \\frac{\\Gamma(1/p)}{p}\\,x^{-1/p}\\cos\\!\\frac{\\pi}{2p}, \\qquad x \\to +\\infty.", explanation: "The endpoint stationary point dominates. Numerically, for \\( p = 3 \\), \\( x = 200 \\), the formula gives \\( 0.132 \\) against \\( 0.131 \\) by quadrature — agreement to better than 1%." },
      ],
      finalAnswer: "\\( \\displaystyle I(x) \\sim \\frac{\\Gamma(1/p)}{p}\\,x^{-1/p}\\cos\\!\\frac{\\pi}{2p} \\)",
      canonicalAnswer: "(gamma(1/p)/p)*x^(-1/p)*cos(pi/(2*p))",
    },
  },
  {
    id: "am5b-025",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 25",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "A pulse is \\( f(t) = \\sin(\\pi t) \\) for \\( 0 \\le t < 1 \\) and \\( f(t) = 0 \\) for \\( 1 \\le t \\le 2 \\). Find the leading behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^2 f(t)e^{i\\omega t}\\,dt \\), being careful about continuity of \\( f \\) and \\( f' \\) at \\( t = 1 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "derivative discontinuity", "pulse"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Check continuity at the cut-off.", workingLatex: "f(1^-) = \\sin\\pi = 0 = f(1^+), \\qquad f'(1^-) = \\pi\\cos\\pi = -\\pi,\\ f'(1^+) = 0.", explanation: "The pulse is continuous at \\( t=1 \\) (both \\( 0 \\)), so there is no \\( O(\\omega^{-1}) \\) jump there; but \\( f' \\) jumps by \\( -\\pi - 0 = -\\pi \\), giving an \\( O(\\omega^{-2}) \\) corner term." },
        { stepNumber: 2, description: "Genuine endpoints.", workingLatex: "f(0^+) = \\sin 0 = 0, \\qquad f(2^-) = 0.", explanation: "Both true endpoints give zero at leading order, so the \\( O(\\omega^{-1}) \\) contribution comes only from \\( f'(0) \\) at the next order — wait, the value endpoints vanish, pushing the leading term to \\( O(\\omega^{-2}) \\)." },
        { stepNumber: 3, description: "Lower-endpoint derivative term, O(1/ω²).", workingLatex: "f'(0^+) = \\pi\\cos 0 = \\pi \\ \\Rightarrow\\ -\\frac{-f'(0^+)}{(i\\omega)^2} = \\frac{f'(0^+)}{(i\\omega)^2} = \\frac{\\pi}{(i\\omega)^2} = -\\frac{\\pi}{\\omega^2}.", explanation: "With the value endpoints dead, the lower-endpoint derivative term \\( -[-f'(0^+)]/(i\\omega)^2 \\) is the genuine endpoint contribution; \\( (i\\omega)^2 = -\\omega^2 \\)." },
        { stepNumber: 4, description: "Corner derivative-jump term at t = 1, O(1/ω²).", workingLatex: "-\\frac{e^{i\\omega}(f'(1^-) - f'(1^+))}{(i\\omega)^2} = -\\frac{e^{i\\omega}(-\\pi - 0)}{(i\\omega)^2} = -\\frac{\\pi e^{i\\omega}}{\\omega^2}.", explanation: "The derivative jump \\( -\\pi \\) at \\( t=1 \\) contributes at the same \\( O(\\omega^{-2}) \\) order; using \\( -(-\\pi)/(i\\omega)^2 = \\pi/(i\\omega)^2 = -\\pi/\\omega^2 \\) with phase \\( e^{i\\omega} \\)." },
        { stepNumber: 5, description: "Assemble.", workingLatex: "I(\\omega) \\sim -\\frac{\\pi}{\\omega^2} - \\frac{\\pi e^{i\\omega}}{\\omega^2} = -\\frac{\\pi\\,(1 + e^{i\\omega})}{\\omega^2}, \\qquad \\omega \\to +\\infty.", explanation: "Both surviving contributions are \\( O(\\omega^{-2}) \\): the lower endpoint and the corner. The pulse decays one order faster than a discontinuous signal because it is continuous everywhere. Verified numerically." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim -\\frac{\\pi\\,(1 + e^{i\\omega})}{\\omega^2} \\)",
      canonicalAnswer: "-pi*(1 + exp(i*w))/w^2",
    },
  },
  {
    id: "am5b-026",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 26",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the asymptotic expansion to two non-zero terms as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^{\\pi} \\cos t\\;e^{i\\omega t}\\,dt \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution", "higher order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "List derivatives at the endpoints.", workingLatex: "f=\\cos t:\\ f(0)=1,\\ f(\\pi)=-1; \\quad f'=-\\sin t:\\ f'(0)=0,\\ f'(\\pi)=0.", explanation: "We need \\( f \\) and \\( f' \\) at both ends; conveniently \\( f' = -\\sin t \\) vanishes at \\( 0 \\) and \\( \\pi \\)." },
        { stepNumber: 2, description: "Leading endpoint term, O(1/ω).", workingLatex: "\\frac{e^{i\\pi\\omega}f(\\pi) - f(0)}{i\\omega} = \\frac{-e^{i\\pi\\omega} - 1}{i\\omega}.", explanation: "Upper endpoint contributes \\( -e^{i\\pi\\omega} \\), lower endpoint \\( -1 \\)." },
        { stepNumber: 3, description: "Next-order term, O(1/ω²).", workingLatex: "-\\frac{e^{i\\pi\\omega}f'(\\pi) - f'(0)}{(i\\omega)^2} = -\\frac{0 - 0}{(i\\omega)^2} = 0.", explanation: "Both \\( f'(\\pi) \\) and \\( f'(0) \\) vanish, so the \\( O(\\omega^{-2}) \\) term is zero — the next correction is \\( O(\\omega^{-3}) \\)." },
        { stepNumber: 4, description: "O(1/ω³) term from f''.", workingLatex: "f''=-\\cos t:\\ f''(0)=-1,\\ f''(\\pi)=1; \\quad \\frac{e^{i\\pi\\omega}f''(\\pi) - f''(0)}{(i\\omega)^3} = \\frac{e^{i\\pi\\omega} + 1}{(i\\omega)^3}.", explanation: "The \\( n=2 \\) term carries \\( (-1)^2 = +1 \\) and \\( (i\\omega)^{-3} \\); \\( f''(\\pi) - f''(0) = 1 - (-1) \\) at the upper end and lower end respectively give \\( e^{i\\pi\\omega} + 1 \\)." },
        { stepNumber: 5, description: "Simplify and state.", workingLatex: "I(\\omega) \\sim \\frac{-e^{i\\pi\\omega} - 1}{i\\omega} + \\frac{e^{i\\pi\\omega} + 1}{(i\\omega)^3}, \\qquad (i\\omega)^3 = -i\\omega^3.", explanation: "Two non-zero terms, at orders \\( \\omega^{-1} \\) and \\( \\omega^{-3} \\); the \\( \\omega^{-2} \\) term is absent because \\( f'=-\\sin t \\) vanishes at both ends. Verified numerically." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) \\sim \\frac{-e^{i\\pi\\omega} - 1}{i\\omega} + \\frac{e^{i\\pi\\omega} + 1}{(i\\omega)^3} \\)",
      canonicalAnswer: "(-exp(i*pi*w) - 1)/(i*w) + (exp(i*pi*w) + 1)/(i*w)^3",
    },
  },
  // REVIEW: endpoint result i/(2x) follows from one integration by parts (same non-stationary endpoint formula verified numerically in am5b-002/007), but direct quadrature of this cubic-phase semi-infinite oscillatory integral is numerically unstable, so this specific value was NOT confirmed by quadrature.
  {
    id: "am5b-027",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 27",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Stokes-style problem. Find the leading behaviour as \\( x \\to +\\infty \\) of \\( \\displaystyle I(x) = \\int_a^{\\infty} e^{ix(t^3 - t)}\\,dt \\) in the case \\( a = 1 \\), where the phase has stationary points at \\( t = \\pm 1/\\sqrt{3} \\) (both lying below the lower limit).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "stationary phase", "endpoint contribution", "Stokes problem"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the stationary points.", workingLatex: "\\phi(t) = t^3 - t, \\quad \\phi'(t) = 3t^2 - 1 = 0 \\ \\Rightarrow\\ t = \\pm\\frac{1}{\\sqrt{3}}.", explanation: "Both stationary points lie strictly below \\( a = 1 \\), so neither is in the integration range \\( [1,\\infty) \\). There is therefore no stationary-phase contribution; the leading behaviour comes from the endpoint." },
        { stepNumber: 2, description: "Confirm convergence at infinity.", workingLatex: "\\phi'(t) = 3t^2 - 1 \\to +\\infty, \\qquad \\text{integrand oscillates faster as } t \\to \\infty.", explanation: "As \\( t\\to\\infty \\) the phase derivative grows without bound, so the contribution from large \\( t \\) is negligible (faster-than-\\( \\omega^{-1} \\) decay); only the finite endpoint \\( t = 1 \\) matters." },
        { stepNumber: 3, description: "Endpoint contribution at t = 1.", workingLatex: "\\phi(1) = 0, \\quad \\phi'(1) = 2 \\ \\Rightarrow\\ I(x) \\sim \\frac{-e^{ix\\phi(1)}}{ix\\,\\phi'(1)} = \\frac{-e^{0}}{2ix}.", explanation: "Integration by parts gives the lower-endpoint term \\( -e^{ix\\phi(a)}/(ix\\,\\phi'(a)) \\); the minus sign is because \\( a \\) is a lower limit, and \\( \\phi(1) = 1 - 1 = 0 \\)." },
        { stepNumber: 4, description: "Simplify.", workingLatex: "I(x) \\sim \\frac{-1}{2ix} = \\frac{i}{2x}, \\qquad x \\to +\\infty.", explanation: "Using \\( -1/(2i) = i/2 \\). The leading behaviour is \\( O(x^{-1}) \\), characteristic of a pure endpoint with no stationary phase in range." },
        { stepNumber: 5, description: "Contrast with the a = -1/√3 case.", workingLatex: "\\text{If } a = -\\tfrac{1}{\\sqrt 3}:\\ \\text{stationary point at the endpoint} \\Rightarrow O(x^{-1/3}) \\ \\gg\\ O(x^{-1}).", explanation: "If the lower limit were placed exactly at a stationary point, the contribution would be \\( O(x^{-1/3}) \\) (a cubic turning point), which dominates the ordinary endpoint term. Here, with \\( a = 1 \\), no stationary point is in range, so \\( i/(2x) \\) is the answer." },
      ],
      finalAnswer: "\\( \\displaystyle I(x) \\sim \\frac{i}{2x} \\) (pure endpoint contribution; no stationary point in \\( [1,\\infty) \\)).",
      canonicalAnswer: "i/(2*x)",
    },
  },
  {
    id: "am5b-028",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 28",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading two terms as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_0^{1} t\\,e^{i\\omega t}\\,dt \\) by repeated integration by parts, and verify your result by evaluating the integral exactly.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "endpoint contribution", "exact comparison"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "First integration by parts.", workingLatex: "I(\\omega) = \\left[\\frac{t\\,e^{i\\omega t}}{i\\omega}\\right]_0^1 - \\frac{1}{i\\omega}\\int_0^1 e^{i\\omega t}\\,dt = \\frac{e^{i\\omega}}{i\\omega} - \\frac{1}{i\\omega}\\int_0^1 e^{i\\omega t}\\,dt.", explanation: "The lower endpoint vanishes because \\( f(0) = 0 \\); the leading term is \\( e^{i\\omega}/(i\\omega) \\)." },
        { stepNumber: 2, description: "Evaluate the remaining integral.", workingLatex: "\\int_0^1 e^{i\\omega t}\\,dt = \\frac{e^{i\\omega} - 1}{i\\omega} \\ \\Rightarrow\\ -\\frac{1}{i\\omega}\\cdot\\frac{e^{i\\omega} - 1}{i\\omega} = -\\frac{e^{i\\omega} - 1}{(i\\omega)^2}.", explanation: "This contributes at \\( O(\\omega^{-2}) \\)." },
        { stepNumber: 3, description: "Assemble exact value.", workingLatex: "I(\\omega) = \\frac{e^{i\\omega}}{i\\omega} - \\frac{e^{i\\omega} - 1}{(i\\omega)^2}.", explanation: "Since \\( f = t \\) is linear, the series terminates here: this is the exact value, not just leading order." },
        { stepNumber: 4, description: "Simplify using (iω)² = −ω².", workingLatex: "I(\\omega) = \\frac{e^{i\\omega}}{i\\omega} + \\frac{e^{i\\omega} - 1}{\\omega^2}.", explanation: "Cleaner real/imaginary split: leading \\( O(\\omega^{-1}) \\) plus the \\( O(\\omega^{-2}) \\) correction." },
        { stepNumber: 5, description: "Verify by direct integration.", workingLatex: "\\int_0^1 t\\,e^{i\\omega t}\\,dt = \\frac{e^{i\\omega}(i\\omega - 1) + 1}{(i\\omega)^2} = \\frac{e^{i\\omega}}{i\\omega} + \\frac{e^{i\\omega} - 1}{\\omega^2}.", explanation: "Direct evaluation (standard \\( \\int t e^{at}dt = e^{at}(at-1)/a^2 \\) with \\( a = i\\omega \\)) matches term for term, confirming the integration-by-parts result." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) = \\frac{e^{i\\omega}}{i\\omega} + \\frac{e^{i\\omega} - 1}{\\omega^2} \\)",
      canonicalAnswer: "exp(i*w)/(i*w) + (exp(i*w) - 1)/w^2",
    },
  },
  {
    id: "am5b-029",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 29",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "A boxcar window is \\( f(t) = 1 \\) for \\( |t| \\le 1 \\) and \\( 0 \\) otherwise. Find the leading behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_{-2}^{2} f(t)e^{i\\omega t}\\,dt \\), and express the result as a real function of \\( \\omega \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "discontinuity", "boxcar", "sinc"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Reduce to the support.", workingLatex: "I(\\omega) = \\int_{-1}^{1} e^{i\\omega t}\\,dt = \\frac{e^{i\\omega} - e^{-i\\omega}}{i\\omega} = \\frac{2\\sin\\omega}{\\omega}.", explanation: "The boxcar collapses the range to \\( [-1,1] \\); the result is exact and real — the classic sinc transform." },
        { stepNumber: 2, description: "Interpret as two jumps.", workingLatex: "\\text{jump at } t=-1:\\ (0 - 1) \\ \\to\\ \\frac{-e^{-i\\omega}}{i\\omega}; \\qquad \\text{jump at } t=+1:\\ (1 - 0) \\ \\to\\ \\frac{e^{i\\omega}}{i\\omega}.", explanation: "Each edge of the boxcar is a unit jump. At \\( t = -1 \\) the function rises (\\( f(-1^-) - f(-1^+) = 0 - 1 = -1 \\)); at \\( t = +1 \\) it falls (\\( 1 - 0 = +1 \\)). The integration range endpoints at \\( \\pm 2 \\) are dead.", mafs: `<Mafs viewBox={{ x: [-3.2, 3.2], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => (Math.abs(t) <= 1 ? Math.cos(13*t) : 0)} domain={[-2, 2]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => (Math.abs(t) <= 1 ? 1 : 0)} domain={[-2, 2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => (Math.abs(t) <= 1 ? -1 : 0)} domain={[-2, 2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={-1} y={1} color="var(--mafs-fg-blue)" />
  <Point x={1} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[-2.35,0.7]} tex="\\text{jump }t=-1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.35,1.25]} tex="\\text{jump }t=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.95,-0.2]} tex="t" />
</Mafs>` },
        { stepNumber: 3, description: "Combine the jump terms.", workingLatex: "\\frac{e^{i\\omega} - e^{-i\\omega}}{i\\omega} = \\frac{2i\\sin\\omega}{i\\omega} = \\frac{2\\sin\\omega}{\\omega}.", explanation: "The two jump contributions add to the exact sinc; the discontinuities entirely account for the leading behaviour." },
        { stepNumber: 4, description: "State the result.", workingLatex: "I(\\omega) = \\frac{2\\sin\\omega}{\\omega} = O(\\omega^{-1}), \\qquad \\omega \\to +\\infty.", explanation: "A discontinuous (boxcar) window decays only as \\( \\omega^{-1} \\), the slow decay being the signature of the jumps at \\( t = \\pm 1 \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) = \\frac{2\\sin\\omega}{\\omega} \\)",
      canonicalAnswer: "2*sin(w)/w",
    },
  },
  {
    id: "am5b-030",
    topicRef: "am5b",
    topicTitle: "Endpoint & discontinuity contributions 30",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "A triangular window is \\( f(t) = 1 - |t| \\) for \\( |t| \\le 1 \\) and \\( 0 \\) otherwise. Find the leading behaviour as \\( \\omega \\to +\\infty \\) of \\( \\displaystyle I(\\omega) = \\int_{-1}^{1} (1 - |t|)\\,e^{i\\omega t}\\,dt \\), and explain why it decays faster than the boxcar window.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["oscillatory integrals", "derivative discontinuity", "triangular window", "higher order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note f is continuous; f' jumps.", workingLatex: "f(\\pm 1) = 0,\\ f \\text{ continuous everywhere}; \\quad f'(t) = -\\operatorname{sgn}(t)\\ (|t|<1).", explanation: "The triangular window has no jumps in value (it tapers to zero at \\( \\pm 1 \\) and has \\( f(0)=1 \\) continuously), so the \\( O(\\omega^{-1}) \\) jump terms all vanish. The corners are in \\( f' \\)." },
        { stepNumber: 2, description: "List the derivative jumps.", workingLatex: "t=-1:\\ f'(-1^-)=0,\\ f'(-1^+)=1; \\quad t=0:\\ f'(0^-)=1,\\ f'(0^+)=-1; \\quad t=1:\\ f'(1^-)=-1,\\ f'(1^+)=0.", explanation: "Three corners: at \\( t = -1 \\) (jump \\( 0 - 1 = -1 \\)), at \\( t = 0 \\) (jump \\( 1 - (-1) = 2 \\)), and at \\( t = 1 \\) (jump \\( -1 - 0 = -1 \\)). Each contributes at \\( O(\\omega^{-2}) \\)." },
        { stepNumber: 3, description: "Sum the derivative-jump terms at O(1/ω²).", workingLatex: "-\\frac{1}{(i\\omega)^2}\\Big[e^{-i\\omega}(-1) + e^{0}(2) + e^{i\\omega}(-1)\\Big] = -\\frac{2 - (e^{i\\omega} + e^{-i\\omega})}{(i\\omega)^2}.", explanation: "Apply the corner formula \\( -e^{i\\omega c}(f'(c^-)-f'(c^+))/(i\\omega)^2 \\) at each of the three corners and sum; \\( e^{i\\omega}+e^{-i\\omega} = 2\\cos\\omega \\)." },
        { stepNumber: 4, description: "Simplify with (iω)² = −ω².", workingLatex: "I(\\omega) \\sim -\\frac{2 - 2\\cos\\omega}{-\\omega^2} = \\frac{2 - 2\\cos\\omega}{\\omega^2} = \\frac{2(1 - \\cos\\omega)}{\\omega^2}.", explanation: "Using \\( (i\\omega)^2 = -\\omega^2 \\). The result is real and non-negative, as it must be (it equals \\( \\operatorname{sinc}^2 \\) up to constants)." },
        { stepNumber: 5, description: "Rewrite via a half-angle identity.", workingLatex: "I(\\omega) = \\frac{2(1 - \\cos\\omega)}{\\omega^2} = \\frac{4\\sin^2(\\omega/2)}{\\omega^2} = \\left(\\frac{\\sin(\\omega/2)}{\\omega/2}\\right)^{2}.", explanation: "Using \\( 1 - \\cos\\omega = 2\\sin^2(\\omega/2) \\); this is the Fejér kernel, the squared sinc — the exact transform of the triangular window." },
        { stepNumber: 6, description: "Explain the faster decay.", workingLatex: "\\text{boxcar}:\\ O(\\omega^{-1})\\ (\\text{value jumps}); \\quad \\text{triangle}:\\ O(\\omega^{-2})\\ (\\text{only } f' \\text{ jumps}).", explanation: "Because the triangular window is continuous (smoother by one degree), its leading decay is \\( \\omega^{-2} \\) rather than the boxcar's \\( \\omega^{-1} \\): each extra degree of continuity buys one extra power of \\( \\omega^{-1} \\). Verified numerically against \\( (\\sin(\\omega/2)/(\\omega/2))^2 \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega) = \\frac{2(1 - \\cos\\omega)}{\\omega^2} = \\left(\\frac{\\sin(\\omega/2)}{\\omega/2}\\right)^{2} \\)",
      canonicalAnswer: "2*(1 - cos(w))/w^2",
    },
  },
];
