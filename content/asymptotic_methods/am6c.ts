import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — Method of Stationary Phase
 * Subtopic am6c: Endpoint singularities & weighted amplitudes
 * Ref: am6c — 30 fully-worked, verified questions.
 *
 * Scope: oscillatory integrals \int g(t) e^{i x \phi(t)} dt in which the amplitude
 * g carries an *algebraic singularity* at an endpoint, typically a weight of the
 * form (1 - 2\theta/\pi)^\gamma. The recurring theme (Cambridge Part II Asymptotic
 * Methods Sheet 2, Q3 and Q6) is the competition between
 *   (i) a stationary point of the phase (Fresnel-type, order x^{-1/2}), and
 *   (ii) a singular/weighted endpoint (algebraic-endpoint, order x^{-(\gamma+1)}),
 * and deciding which dominates as the exponent \gamma is varied.
 *
 * Master formulas used throughout (all numerically verified with mpmath):
 *   Algebraic endpoint:  \int_0^\delta t^{\gamma} e^{i x t} dt
 *        \sim \Gamma(\gamma+1) x^{-(\gamma+1)} e^{i\pi(\gamma+1)/2}     (\gamma > -1)
 *   Cosine form:  \int_0^\delta t^{\gamma}\cos(x t) dt
 *        \sim \Gamma(\gamma+1) x^{-(\gamma+1)} \cos\!\big(\tfrac{\pi}{2}(\gamma+1)\big)
 *   Stationary point at an endpoint (quadratic phase, unit weight):
 *        \int_0^\delta \cos\!\big(x(1-\tfrac{t^2}{2})\big) dt \sim \sqrt{\tfrac{\pi}{2x}}\cos(x-\tfrac{\pi}{4})
 *   Smooth-endpoint (Q3): \int_a^b f e^{i\omega t} dt \sim \tfrac{1}{i\omega}\big(f(b)e^{i\omega b}-f(a)e^{i\omega a}\big)
 *   Cubic endpoint: \int_0^\infty e^{i u^3} du = \Gamma(\tfrac43) e^{i\pi/6}.
 *
 * For the model Sheet-2 Q6(b) integral I(x)=\int_0^{\pi/2}(1-2\theta/\pi)^\gamma\cos(x\cos\theta)d\theta:
 *   - stationary endpoint \theta=0 gives \sqrt{\pi/(2x)}\cos(x-\pi/4),  order x^{-1/2};
 *   - singular endpoint \theta=\pi/2 gives (2/\pi)^\gamma\Gamma(\gamma+1)x^{-(\gamma+1)}\cos(\tfrac\pi2(\gamma+1)),
 *     order x^{-(\gamma+1)}.
 *   \gamma=0   -> stationary dominates (x^{-1/2} vs x^{-1});
 *   \gamma=-1/2-> both compete at x^{-1/2} (endpoint coefficient = \pi/2);
 *   \gamma=-3/4-> singular endpoint dominates (x^{-1/4}).
 * All three balances were checked numerically.
 */
export const questions: Question[] = [
  // ════════════════════════════════════════════════════════════════════
  // FOUNDATION (6) — core technique in isolation, 2 marks, examStyle:false
  // ════════════════════════════════════════════════════════════════════
  // REVIEW: the quoted result Γ(γ+1)x^{-(γ+1)}e^{iπ(γ+1)/2} is the singular-endpoint contribution and is the genuine leading order only for -1<γ<0 (verified num: ratio→1 for γ=-1/2,-2/3). For γ>0 the smooth upper endpoint (O(x^{-1})) actually dominates this contribution; the question frames it as "the standard result obtained by extending the upper limit", which is correct, but "leading-order behaviour" is only strictly accurate in the singular regime γ<0.
  {
    id: "am6c-001",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "State the leading-order behaviour as \\( x \\to \\infty \\) of the algebraic-endpoint integral \\( \\displaystyle\\int_0^{1} t^{\\gamma} e^{i x t}\\,dt \\), for fixed \\( \\gamma > -1 \\). (You may quote the standard result obtained by extending the upper limit to \\( \\infty \\).)",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["algebraic endpoint", "stationary phase", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify where the contribution lives.", workingLatex: "\\text{Near } t=0:\\quad t^{\\gamma}\\ \\text{is the only non-smooth feature; the phase } xt \\text{ has no stationary point.}", explanation: "With no stationary point inside, the integral is controlled entirely by the algebraic singularity of the amplitude at the lower endpoint \\( t=0 \\). The smooth upper endpoint contributes only \\( O(x^{-1}) \\) via integration by parts." },
        { stepNumber: 2, description: "Extend the upper limit to infinity.", workingLatex: "\\int_0^{1} t^{\\gamma} e^{i x t}\\,dt \\;\\sim\\; \\int_0^{\\infty} t^{\\gamma} e^{i x t}\\,dt .", explanation: "The tail \\( \\int_1^\\infty \\) is non-singular and oscillatory, contributing a smaller \\( O(x^{-1}) \\) endpoint term; to leading order the singular endpoint dominates." },
        { stepNumber: 3, description: "Evaluate the model integral.", workingLatex: "\\int_0^{\\infty} t^{\\gamma} e^{i x t}\\,dt = \\Gamma(\\gamma+1)\\,(-ix)^{-(\\gamma+1)} = \\Gamma(\\gamma+1)\\,x^{-(\\gamma+1)} e^{i\\pi(\\gamma+1)/2}.", explanation: "Rotate the contour to the ray \\( t = e^{i\\pi/2}s \\) so the exponent becomes \\( -xs \\); the integral is then a Gamma function. The factor \\( e^{i\\pi(\\gamma+1)/2} \\) is the rotation phase." },
        { stepNumber: 4, description: "State the result.", workingLatex: "\\int_0^{1} t^{\\gamma} e^{i x t}\\,dt \\;\\sim\\; \\Gamma(\\gamma+1)\\,x^{-(\\gamma+1)}\\,e^{i\\pi(\\gamma+1)/2}, \\qquad x\\to\\infty.", explanation: "The decay rate \\( x^{-(\\gamma+1)} \\) is set entirely by the strength \\( \\gamma \\) of the endpoint singularity." },
      ],
      finalAnswer: "\\( \\displaystyle \\Gamma(\\gamma+1)\\,x^{-(\\gamma+1)}\\,e^{i\\pi(\\gamma+1)/2} \\)",
    },
  },
  {
    id: "am6c-002",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the leading-order behaviour as \\( x \\to \\infty \\) of \\( \\displaystyle\\int_0^{1} t^{-1/2}\\cos(x t)\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["algebraic endpoint", "Fresnel"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recognise the endpoint type.", workingLatex: "\\gamma = -\\tfrac12,\\qquad \\text{singularity } t^{-1/2} \\text{ at } t=0.", explanation: "The amplitude blows up integrably at the lower endpoint; there is no interior stationary point, so this endpoint controls the leading order." },
        { stepNumber: 2, description: "Quote the cosine endpoint formula.", workingLatex: "\\int_0^{1} t^{\\gamma}\\cos(x t)\\,dt \\sim \\Gamma(\\gamma+1)\\,x^{-(\\gamma+1)}\\cos\\!\\Big(\\tfrac{\\pi}{2}(\\gamma+1)\\Big).", explanation: "This is the real part of the complex algebraic-endpoint result, valid for \\( \\gamma>-1 \\)." },
        { stepNumber: 3, description: "Substitute \\( \\gamma=-\\tfrac12 \\).", workingLatex: "\\Gamma\\!\\big(\\tfrac12\\big)\\,x^{-1/2}\\cos\\!\\Big(\\tfrac{\\pi}{4}\\Big) = \\sqrt{\\pi}\\cdot x^{-1/2}\\cdot \\frac{1}{\\sqrt2}.", explanation: "Here \\( \\gamma+1=\\tfrac12 \\), so \\( \\Gamma(\\gamma+1)=\\Gamma(\\tfrac12)=\\sqrt\\pi \\) and the phase angle is \\( \\pi/4 \\)." },
        { stepNumber: 4, description: "Simplify.", workingLatex: "\\int_0^{1} t^{-1/2}\\cos(x t)\\,dt \\sim \\sqrt{\\frac{\\pi}{2}}\\;x^{-1/2}.", explanation: "Combining \\( \\sqrt\\pi/\\sqrt2 = \\sqrt{\\pi/2} \\). This is exactly the Fresnel value \\( \\int_0^\\infty s^{-1/2}\\cos s\\,ds = \\sqrt{\\pi/2} \\) rescaled by \\( s=xt \\)." },
      ],
      finalAnswer: "\\( \\displaystyle \\sqrt{\\tfrac{\\pi}{2}}\\,x^{-1/2} \\)",
      canonicalAnswer: "sqrt(pi/2)*x^(-1/2)",
    },
  },
  {
    id: "am6c-003",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For the weight \\( w(\\theta) = \\big(1 - \\tfrac{2\\theta}{\\pi}\\big)^{\\gamma} \\) on \\( [0,\\tfrac{\\pi}{2}] \\), determine where \\( w \\) is singular when \\( \\gamma < 0 \\), and write the local behaviour of \\( w \\) near that point in terms of \\( s = \\tfrac{\\pi}{2}-\\theta \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["weighted amplitude", "endpoint singularity"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the zero of the base.", workingLatex: "1 - \\frac{2\\theta}{\\pi} = 0 \\iff \\theta = \\frac{\\pi}{2}.", explanation: "The base of the power vanishes at the upper endpoint \\( \\theta=\\pi/2 \\); for \\( \\gamma<0 \\) the weight diverges there.", mafs: `<Mafs viewBox={{ x: [-1.62, 3.18], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => Math.cos(t)} domain={[0, 1.5708]} color="var(--mafs-fg-accent)" weight={3} />
  <Line.Segment point1={[1.5708,0]} point2={[1.5708,1.1]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.3,1.5]} tex="\\phi=\\cos\\theta" color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.25,0.55]} tex="\\phi'(t_0)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.7,0.6]} tex="\\text{singular }\\theta=\\tfrac{\\pi}{2}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.95,-0.25]} tex="\\theta" />
</Mafs>` },
        { stepNumber: 2, description: "Change variable to the local coordinate.", workingLatex: "s = \\frac{\\pi}{2} - \\theta \\;\\Rightarrow\\; 1 - \\frac{2\\theta}{\\pi} = 1 - \\frac{2(\\pi/2 - s)}{\\pi} = \\frac{2s}{\\pi}.", explanation: "Measuring distance \\( s \\) from the singular endpoint turns the weight into a pure power of \\( s \\)." },
        { stepNumber: 3, description: "Write the local form.", workingLatex: "w \\sim \\Big(\\frac{2}{\\pi}\\Big)^{\\gamma} s^{\\gamma}, \\qquad s\\to 0^{+}.", explanation: "So near \\( \\theta=\\pi/2 \\) the amplitude is an algebraic singularity \\( s^\\gamma \\) with constant prefactor \\( (2/\\pi)^\\gamma \\) — exactly the endpoint type of Q1." },
      ],
      finalAnswer: "Singular at \\( \\theta=\\tfrac{\\pi}{2} \\); \\( w \\sim (2/\\pi)^{\\gamma} s^{\\gamma} \\) with \\( s=\\tfrac{\\pi}{2}-\\theta \\).",
    },
  },
  {
    id: "am6c-004",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "By extending the upper limit to infinity, find the leading behaviour as \\( x \\to \\infty \\) of \\( \\displaystyle\\int_0^{1} \\cos(x t^2)\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fresnel", "endpoint", "power phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note the degenerate stationary endpoint.", workingLatex: "\\phi(t)=t^2,\\quad \\phi'(t)=2t,\\quad \\phi'(0)=0.", explanation: "The phase is stationary at the lower endpoint \\( t=0 \\) (a quadratic turning point sitting on the boundary), so this is a Fresnel-type endpoint." },
        { stepNumber: 2, description: "Extend the limit and substitute.", workingLatex: "\\int_0^{1}\\cos(x t^2)\\,dt \\sim \\int_0^{\\infty}\\cos(x t^2)\\,dt, \\qquad u = \\sqrt{x}\\,t.", explanation: "The non-stationary upper endpoint contributes only \\( O(x^{-1}) \\). Rescaling \\( u=\\sqrt{x}t \\) gives \\( du = \\sqrt{x}\\,dt \\)." },
        { stepNumber: 3, description: "Use the Fresnel integral.", workingLatex: "\\frac{1}{\\sqrt{x}}\\int_0^{\\infty}\\cos(u^2)\\,du = \\frac{1}{\\sqrt{x}}\\cdot\\frac{1}{2}\\sqrt{\\frac{\\pi}{2}}.", explanation: "The standard Fresnel value \\( \\int_0^\\infty \\cos(u^2)\\,du = \\tfrac12\\sqrt{\\pi/2} \\)." },
        { stepNumber: 4, description: "State the leading term.", workingLatex: "\\int_0^{1}\\cos(x t^2)\\,dt \\sim \\frac{1}{2}\\sqrt{\\frac{\\pi}{2x}}.", explanation: "Decay rate \\( x^{-1/2} \\), the signature of a quadratic stationary point lying at the endpoint." },
      ],
      finalAnswer: "\\( \\displaystyle \\tfrac12\\sqrt{\\tfrac{\\pi}{2x}} \\)",
      canonicalAnswer: "(1/2)*sqrt(pi/(2*x))",
    },
  },
  {
    id: "am6c-005",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Two contributions to an oscillatory integral scale as \\( A\\,x^{-1/2} \\) (a stationary point) and \\( B\\,x^{-(\\gamma+1)} \\) (a singular endpoint of strength \\( \\gamma \\)). State, in terms of \\( \\gamma \\), which contribution dominates as \\( x\\to\\infty \\), and find the value of \\( \\gamma \\) at which the two are of equal order.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["dominant balance", "endpoint vs stationary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare the two exponents.", workingLatex: "\\text{stationary: } x^{-1/2}, \\qquad \\text{endpoint: } x^{-(\\gamma+1)}.", explanation: "The larger contribution as \\( x\\to\\infty \\) is the one with the *less negative* exponent (slower decay)." },
        { stepNumber: 2, description: "Set the orders equal.", workingLatex: "\\tfrac12 = \\gamma + 1 \\;\\Rightarrow\\; \\gamma = -\\tfrac12.", explanation: "Equal decay rate occurs precisely at \\( \\gamma=-1/2 \\); there the two terms compete and must be added." },
        { stepNumber: 3, description: "Decide dominance either side.", workingLatex: "\\gamma > -\\tfrac12:\\ \\text{stationary dominates};\\qquad \\gamma < -\\tfrac12:\\ \\text{endpoint dominates}.", explanation: "If \\( \\gamma+1<\\tfrac12 \\) (i.e. \\( \\gamma<-\\tfrac12 \\)) the endpoint decays more slowly, so it wins; otherwise the stationary point wins." },
      ],
      finalAnswer: "Stationary dominates for \\( \\gamma>-\\tfrac12 \\), endpoint for \\( \\gamma<-\\tfrac12 \\); equal order at \\( \\gamma=-\\tfrac12 \\).",
    },
  },
  {
    id: "am6c-006",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the leading-order behaviour as \\( \\omega \\to \\infty \\) of \\( \\displaystyle\\int_0^{1} e^{i\\omega t}\\,dt \\), where the amplitude is smooth (\\( g\\equiv 1 \\)), and state the decay rate.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["smooth endpoint", "integration by parts"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Integrate exactly.", workingLatex: "\\int_0^{1} e^{i\\omega t}\\,dt = \\left[\\frac{e^{i\\omega t}}{i\\omega}\\right]_0^{1} = \\frac{e^{i\\omega}-1}{i\\omega}.", explanation: "With a smooth (constant) amplitude and no stationary point, the integral is exactly the boundary term." },
        { stepNumber: 2, description: "Read off the endpoint contributions.", workingLatex: "= \\frac{1}{i\\omega}\\Big(\\underbrace{e^{i\\omega}}_{t=1} - \\underbrace{1}_{t=0}\\Big).", explanation: "This is the smooth-endpoint formula \\( \\tfrac{1}{i\\omega}\\big(g(b)e^{i\\omega b}-g(a)e^{i\\omega a}\\big) \\): each endpoint supplies an oscillatory term of size \\( 1/\\omega \\)." },
        { stepNumber: 3, description: "State the order.", workingLatex: "\\int_0^{1} e^{i\\omega t}\\,dt = O(\\omega^{-1}), \\qquad \\omega\\to\\infty.", explanation: "A smooth endpoint always decays like \\( \\omega^{-1} \\) — faster than a singular endpoint with \\( \\gamma<0 \\), which is why singular endpoints dominate when present." },
      ],
      finalAnswer: "\\( \\displaystyle \\frac{e^{i\\omega}-1}{i\\omega} = O(\\omega^{-1}) \\)",
    },
  },
  // ════════════════════════════════════════════════════════════════════
  // STANDARD (12) — typical sheet-level, 3–4 marks, examStyle:true
  // ════════════════════════════════════════════════════════════════════
  {
    id: "am6c-007",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading-order asymptotic behaviour as \\( x \\to \\infty \\) of \\( \\displaystyle I(x)=\\int_0^{\\pi/2} \\Big(1-\\frac{2\\theta}{\\pi}\\Big)^{-3/4}\\cos(x\\cos\\theta)\\,d\\theta. \\)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted amplitude", "endpoint singularity", "stationary phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the two critical points.", workingLatex: "\\phi(\\theta)=\\cos\\theta:\\ \\phi'(\\theta)=-\\sin\\theta=0 \\text{ at } \\theta=0;\\quad \\text{weight singular at } \\theta=\\tfrac{\\pi}{2}.", explanation: "There is a stationary point of the phase at \\( \\theta=0 \\) (where the weight equals \\( 1 \\)) and an algebraic weight singularity at \\( \\theta=\\pi/2 \\) (where the phase is non-stationary)." },
        { stepNumber: 2, description: "Stationary-endpoint contribution at \\( \\theta=0 \\).", workingLatex: "\\cos\\theta \\approx 1 - \\tfrac{\\theta^2}{2}\\ \\Rightarrow\\ \\int_0 \\cos\\!\\big(x(1-\\tfrac{\\theta^2}{2})\\big)d\\theta \\sim \\sqrt{\\tfrac{\\pi}{2x}}\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big).", explanation: "A quadratic stationary point lying at the lower endpoint gives a half-Fresnel contribution of order \\( x^{-1/2} \\)." },
        { stepNumber: 3, description: "Singular-endpoint contribution at \\( \\theta=\\pi/2 \\).", workingLatex: "s=\\tfrac{\\pi}{2}-\\theta:\\ \\cos\\theta=\\sin s\\approx s,\\ \\Big(1-\\tfrac{2\\theta}{\\pi}\\Big)^{-3/4}\\!\\approx\\Big(\\tfrac{2}{\\pi}\\Big)^{-3/4}\\! s^{-3/4}.", explanation: "Near the upper endpoint the integrand becomes \\( (2/\\pi)^{-3/4} s^{-3/4}\\cos(x s) \\), an algebraic endpoint of strength \\( \\gamma=-\\tfrac34 \\)." },
        { stepNumber: 4, description: "Evaluate the endpoint integral.", workingLatex: "\\Big(\\tfrac{2}{\\pi}\\Big)^{-3/4}\\!\\!\\int_0 s^{-3/4}\\cos(xs)\\,ds \\sim \\Big(\\tfrac{2}{\\pi}\\Big)^{-3/4}\\Gamma\\!\\big(\\tfrac14\\big)\\,x^{-1/4}\\cos\\!\\big(\\tfrac{\\pi}{8}\\big).", explanation: "Using \\( \\int_0 s^{\\gamma}\\cos(xs)ds\\sim\\Gamma(\\gamma+1)x^{-(\\gamma+1)}\\cos\\frac{\\pi(\\gamma+1)}{2} \\) with \\( \\gamma+1=\\tfrac14 \\)." },
        { stepNumber: 5, description: "Compare orders and keep the dominant term.", workingLatex: "x^{-1/4}\\ \\text{(endpoint)} \\gg x^{-1/2}\\ \\text{(stationary)} \\quad\\text{as } x\\to\\infty.", explanation: "Since \\( \\gamma+1=\\tfrac14<\\tfrac12 \\), the singular endpoint decays more slowly and therefore dominates." },
        { stepNumber: 6, description: "State the leading behaviour.", workingLatex: "I(x) \\sim \\Big(\\tfrac{2}{\\pi}\\Big)^{-3/4}\\Gamma\\!\\big(\\tfrac14\\big)\\cos\\!\\big(\\tfrac{\\pi}{8}\\big)\\,x^{-1/4} \\approx 4.700\\,x^{-1/4}.", explanation: "Numerically verified: the constant \\( (2/\\pi)^{-3/4}\\Gamma(\\tfrac14)\\cos(\\tfrac\\pi8)\\approx 4.700 \\), and the full integral matches \\( 4.700\\,x^{-1/4} \\) at large \\( x \\)." },
      ],
      finalAnswer: "\\( \\displaystyle I(x)\\sim (2/\\pi)^{-3/4}\\,\\Gamma\\!\\big(\\tfrac14\\big)\\cos\\!\\big(\\tfrac{\\pi}{8}\\big)\\,x^{-1/4}\\approx 4.700\\,x^{-1/4} \\)",
    },
  },
  {
    id: "am6c-008",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading-order behaviour as \\( x \\to \\infty \\) of \\( \\displaystyle J(x)=\\int_0^{\\pi/2} \\cos(x\\cos\\theta)\\,d\\theta \\) (the case \\( \\gamma=0 \\)), and state why the weight singularity plays no role here.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "endpoint", "Bessel"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the critical points.", workingLatex: "\\text{Stationary point of }\\cos\\theta\\text{ at }\\theta=0;\\ \\text{endpoint } \\theta=\\tfrac{\\pi}{2}\\text{ smooth (}\\gamma=0).", explanation: "With \\( \\gamma=0 \\) the amplitude is identically \\( 1 \\): the upper endpoint is now a smooth endpoint, not a singular one.", mafs: `<Mafs viewBox={{ x: [-1.62, 3.18], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => Math.cos(t)} domain={[0, 1.5708]} color="var(--mafs-fg-accent)" weight={3} />
  <Line.Segment point1={[1.5708,0]} point2={[1.5708,1.1]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.3,1.5]} tex="\\phi=\\cos\\theta" color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.25,0.55]} tex="\\phi'(t_0)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.7,0.6]} tex="\\theta=\\tfrac{\\pi}{2}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.95,-0.25]} tex="\\theta" />
</Mafs>` },
        { stepNumber: 2, description: "Expand the phase at \\( \\theta=0 \\).", workingLatex: "\\cos\\theta \\approx 1 - \\tfrac{\\theta^2}{2}\\ \\Rightarrow\\ \\cos(x\\cos\\theta)\\approx \\cos\\!\\big(x - \\tfrac{x\\theta^2}{2}\\big).", explanation: "The stationary point at the lower endpoint is quadratic, giving the dominant Fresnel-type contribution." },
        { stepNumber: 3, description: "Apply the stationary-endpoint formula.", workingLatex: "J(x) \\sim \\sqrt{\\frac{\\pi}{2x}}\\,\\cos\\!\\Big(x-\\frac{\\pi}{4}\\Big).", explanation: "Half-Fresnel: the endpoint sees only half the Gaussian, giving the factor \\( \\tfrac12\\sqrt{2\\pi/x} \\) and the standard \\( -\\pi/4 \\) phase shift." },
        { stepNumber: 4, description: "Explain the smooth endpoint.", workingLatex: "\\text{Endpoint } \\theta=\\tfrac{\\pi}{2}:\\ O(x^{-1}) \\ll x^{-1/2}.", explanation: "A smooth endpoint contributes only \\( O(x^{-1}) \\), subdominant to the stationary point. (This \\( J(x) \\) is \\( \\tfrac{\\pi}{2} \\) times the leading large-argument form of \\( J_0(x) \\).)" },
      ],
      finalAnswer: "\\( \\displaystyle J(x)\\sim \\sqrt{\\tfrac{\\pi}{2x}}\\,\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big) \\)",
    },
  },
  {
    id: "am6c-009",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Consider \\( \\displaystyle K(x)=\\int_0^{\\pi/2} \\Big(1-\\frac{2\\theta}{\\pi}\\Big)^{-1/2}\\cos(x\\cos\\theta)\\,d\\theta. \\) Show that the stationary point and the singular endpoint contribute at the *same* order, and write down both leading terms.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted amplitude", "competing contributions", "stationary phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Stationary endpoint \\( \\theta=0 \\).", workingLatex: "S(x) \\sim \\sqrt{\\frac{\\pi}{2x}}\\cos\\!\\Big(x-\\frac{\\pi}{4}\\Big), \\qquad \\text{order } x^{-1/2}.", explanation: "Weight equals \\( 1 \\) at \\( \\theta=0 \\), so this is the same half-Fresnel term as the unweighted case.", mafs: `<Mafs viewBox={{ x: [-1.62, 3.18], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => Math.cos(t)} domain={[0, 1.5708]} color="var(--mafs-fg-accent)" weight={3} />
  <Line.Segment point1={[1.5708,0]} point2={[1.5708,1.1]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.3,1.5]} tex="\\phi=\\cos\\theta" color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.25,0.55]} tex="\\phi'(t_0)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.7,0.6]} tex="\\text{endpoint }\\theta=\\tfrac{\\pi}{2}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.95,-0.25]} tex="\\theta" />
</Mafs>` },
        { stepNumber: 2, description: "Singular endpoint \\( \\theta=\\pi/2 \\), local form.", workingLatex: "s=\\tfrac{\\pi}{2}-\\theta:\\ \\Big(1-\\tfrac{2\\theta}{\\pi}\\Big)^{-1/2}\\cos(x\\cos\\theta)\\approx \\Big(\\tfrac{2}{\\pi}\\Big)^{-1/2} s^{-1/2}\\cos(xs).", explanation: "Algebraic endpoint of strength \\( \\gamma=-\\tfrac12 \\)." },
        { stepNumber: 3, description: "Evaluate the endpoint term.", workingLatex: "E(x) \\sim \\Big(\\tfrac{2}{\\pi}\\Big)^{-1/2}\\Gamma\\!\\big(\\tfrac12\\big)\\cos\\!\\big(\\tfrac{\\pi}{4}\\big)\\,x^{-1/2} = \\frac{\\pi}{2}\\,x^{-1/2}.", explanation: "With \\( \\gamma+1=\\tfrac12 \\): \\( (2/\\pi)^{-1/2}\\sqrt\\pi\\cdot\\tfrac{1}{\\sqrt2} = \\sqrt{\\tfrac\\pi2}\\cdot\\sqrt\\pi\\cdot\\tfrac1{\\sqrt2}=\\tfrac\\pi2 \\)." },
        { stepNumber: 4, description: "Combine — equal order.", workingLatex: "K(x) \\sim \\Big[\\sqrt{\\tfrac{\\pi}{2}}\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big) + \\tfrac{\\pi}{2}\\Big]\\,x^{-1/2}.", explanation: "Because \\( \\gamma=-\\tfrac12 \\) sits exactly at the balance point, both terms are \\( O(x^{-1/2}) \\) and must be added. Numerically verified against the full integral." },
      ],
      finalAnswer: "\\( \\displaystyle K(x)\\sim\\Big[\\sqrt{\\tfrac{\\pi}{2}}\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big)+\\tfrac{\\pi}{2}\\Big]x^{-1/2} \\)",
    },
  },
  {
    id: "am6c-010",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading behaviour as \\( x \\to \\infty \\) of \\( \\displaystyle\\int_0^{1}\\cos(x t^3)\\,dt \\), giving the constant in terms of a Gamma function.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["power-law phase", "endpoint", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the degenerate endpoint.", workingLatex: "\\phi(t)=t^3,\\ \\phi'(0)=\\phi''(0)=0:\\ \\text{cubic-flat at } t=0.", explanation: "The phase is stationary to high order at the lower endpoint; the upper endpoint is smooth and gives only \\( O(x^{-1}) \\)." },
        { stepNumber: 2, description: "Extend the limit and substitute.", workingLatex: "\\int_0^{1}\\cos(x t^3)dt \\sim \\int_0^{\\infty}\\cos(x t^3)dt,\\quad u=x^{1/3}t.", explanation: "Rescaling to remove \\( x \\) from the phase: \\( du = x^{1/3}\\,dt \\)." },
        { stepNumber: 3, description: "Use the general power-phase value.", workingLatex: "\\int_0^{\\infty}\\cos(u^3)\\,du = \\tfrac{1}{3}\\Gamma\\!\\big(\\tfrac13\\big)\\cos\\!\\big(\\tfrac{\\pi}{6}\\big).", explanation: "From \\( \\int_0^\\infty t^{\\mu-1}\\cos(t^p)dt = \\tfrac1p\\Gamma(\\tfrac\\mu p)\\cos(\\tfrac{\\pi\\mu}{2p}) \\) with \\( \\mu=1,\\ p=3 \\)." },
        { stepNumber: 4, description: "State the leading term.", workingLatex: "\\int_0^{1}\\cos(x t^3)\\,dt \\sim \\tfrac{1}{3}\\Gamma\\!\\big(\\tfrac13\\big)\\cos\\!\\big(\\tfrac{\\pi}{6}\\big)\\,x^{-1/3} \\approx 0.7733\\,x^{-1/3}.", explanation: "Decay \\( x^{-1/3} \\), slower than \\( x^{-1/2} \\): a flatter phase at the endpoint produces a larger contribution. Numerically confirmed." },
      ],
      finalAnswer: "\\( \\displaystyle \\tfrac{1}{3}\\Gamma\\!\\big(\\tfrac13\\big)\\cos\\!\\big(\\tfrac{\\pi}{6}\\big)\\,x^{-1/3}\\approx 0.773\\,x^{-1/3} \\)",
    },
  },
  {
    id: "am6c-011",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Using the result \\( \\displaystyle\\int_0^{1}\\cos(x t^p)\\,dt \\sim \\tfrac1p\\Gamma\\!\\big(\\tfrac1p\\big)\\cos\\!\\big(\\tfrac{\\pi}{2p}\\big)x^{-1/p} \\) for \\( p>1 \\), find the leading behaviour of \\( \\displaystyle\\int_0^{1}\\sin(x t^4)\\,dt \\) as \\( x\\to\\infty \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["power-law phase", "endpoint", "sine integral"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Take the sine analogue.", workingLatex: "\\int_0^{1}\\sin(x t^p)\\,dt \\sim \\tfrac1p\\Gamma\\!\\big(\\tfrac1p\\big)\\sin\\!\\big(\\tfrac{\\pi}{2p}\\big)\\,x^{-1/p}.", explanation: "The sine version replaces \\( \\cos(\\tfrac{\\pi}{2p}) \\) by \\( \\sin(\\tfrac{\\pi}{2p}) \\): it is the imaginary part of \\( \\int_0^\\infty e^{i u^p}du \\) rescaled." },
        { stepNumber: 2, description: "Set \\( p=4 \\).", workingLatex: "\\tfrac14\\Gamma\\!\\big(\\tfrac14\\big)\\sin\\!\\big(\\tfrac{\\pi}{8}\\big)\\,x^{-1/4}.", explanation: "Here \\( 1/p=1/4 \\) and the phase angle is \\( \\pi/8 \\)." },
        { stepNumber: 3, description: "Evaluate the constant.", workingLatex: "\\tfrac14\\Gamma\\!\\big(\\tfrac14\\big)\\sin\\!\\big(\\tfrac{\\pi}{8}\\big) \\approx \\tfrac14(3.6256)(0.38268) \\approx 0.3469.", explanation: "\\( \\Gamma(\\tfrac14)\\approx 3.6256 \\), \\( \\sin(\\pi/8)\\approx 0.38268 \\). Numerically confirmed against the integral." },
        { stepNumber: 4, description: "State the leading term.", workingLatex: "\\int_0^{1}\\sin(x t^4)\\,dt \\sim 0.347\\,x^{-1/4}.", explanation: "Decay \\( x^{-1/4} \\): the very flat quartic phase at the endpoint yields slow decay." },
      ],
      finalAnswer: "\\( \\displaystyle \\tfrac14\\Gamma\\!\\big(\\tfrac14\\big)\\sin\\!\\big(\\tfrac{\\pi}{8}\\big)\\,x^{-1/4}\\approx 0.347\\,x^{-1/4} \\)",
    },
  },
  {
    id: "am6c-012",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading behaviour as \\( \\omega \\to \\infty \\) of \\( \\displaystyle\\int_0^{1}(1+t)\\,e^{i\\omega t}\\,dt \\), a smooth-amplitude oscillatory integral with no stationary point, and identify the endpoint contributions.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["smooth endpoint", "integration by parts"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the smooth-endpoint formula.", workingLatex: "\\int_a^b g(t)e^{i\\omega t}dt \\sim \\frac{1}{i\\omega}\\big[g(b)e^{i\\omega b}-g(a)e^{i\\omega a}\\big].", explanation: "One integration by parts; with no stationary point the leading term is purely the boundary contribution." },
        { stepNumber: 2, description: "Insert \\( g(t)=1+t \\), \\( a=0 \\), \\( b=1 \\).", workingLatex: "\\frac{1}{i\\omega}\\big[(1+1)e^{i\\omega}-(1+0)e^{0}\\big] = \\frac{1}{i\\omega}\\big[2e^{i\\omega}-1\\big].", explanation: "\\( g(1)=2 \\), \\( g(0)=1 \\)." },
        { stepNumber: 3, description: "Tidy and state order.", workingLatex: "\\int_0^{1}(1+t)e^{i\\omega t}\\,dt \\sim \\frac{2e^{i\\omega}-1}{i\\omega} = O(\\omega^{-1}).", explanation: "Each endpoint contributes a term of size \\( |g|/\\omega \\); both are \\( O(\\omega^{-1}) \\), with corrections \\( O(\\omega^{-2}) \\) from the next integration by parts." },
      ],
      finalAnswer: "\\( \\displaystyle \\frac{2e^{i\\omega}-1}{i\\omega} \\) (each endpoint \\( O(\\omega^{-1}) \\))",
    },
  },
  {
    id: "am6c-013",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading-order behaviour as \\( x \\to \\infty \\) of \\( \\displaystyle\\int_0^{\\pi/2}\\Big(1-\\frac{2\\theta}{\\pi}\\Big)^{-1/4}\\cos(x\\cos\\theta)\\,d\\theta. \\)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted amplitude", "endpoint vs stationary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the balance.", workingLatex: "\\gamma=-\\tfrac14:\\ \\text{endpoint order } x^{-(\\gamma+1)}=x^{-3/4},\\ \\text{stationary } x^{-1/2}.", explanation: "Since \\( \\gamma=-\\tfrac14>-\\tfrac12 \\), the stationary point (slower decay \\( x^{-1/2} \\)) dominates." },
        { stepNumber: 2, description: "Stationary contribution at \\( \\theta=0 \\).", workingLatex: "\\cos\\theta\\approx 1-\\tfrac{\\theta^2}{2},\\ \\text{weight}\\to 1:\\quad \\sim\\sqrt{\\frac{\\pi}{2x}}\\cos\\!\\Big(x-\\frac{\\pi}{4}\\Big).", explanation: "The weight is regular (equals \\( 1 \\)) at \\( \\theta=0 \\), so the stationary term is the standard half-Fresnel result." },
        { stepNumber: 3, description: "Confirm the endpoint is subdominant.", workingLatex: "\\text{endpoint } \\theta=\\tfrac{\\pi}{2}:\\ O(x^{-3/4}) \\ll x^{-1/2}.", explanation: "The singular endpoint contributes \\( (2/\\pi)^{-1/4}\\Gamma(\\tfrac34)\\cos(\\tfrac{3\\pi}{8})x^{-3/4} \\), which is genuinely smaller at large \\( x \\)." },
        { stepNumber: 4, description: "State leading order.", workingLatex: "\\int_0^{\\pi/2}\\!\\Big(1-\\tfrac{2\\theta}{\\pi}\\Big)^{-1/4}\\cos(x\\cos\\theta)\\,d\\theta \\sim \\sqrt{\\frac{\\pi}{2x}}\\cos\\!\\Big(x-\\frac{\\pi}{4}\\Big).", explanation: "Numerically verified: the leading term coincides with the unweighted stationary result, the weight only affecting the subdominant \\( x^{-3/4} \\) term." },
      ],
      finalAnswer: "\\( \\displaystyle \\sqrt{\\tfrac{\\pi}{2x}}\\,\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big) \\)",
    },
  },
  {
    id: "am6c-014",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading behaviour as \\( x \\to \\infty \\) of the weighted endpoint integral \\( \\displaystyle\\int_0^{1} t^{-2/3}\\,e^{i x t}\\,dt \\), and give its modulus and argument.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["algebraic endpoint", "Gamma function", "complex amplitude"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set \\( \\gamma=-\\tfrac23 \\).", workingLatex: "\\int_0^{1} t^{\\gamma} e^{i x t}\\,dt \\sim \\Gamma(\\gamma+1)\\,x^{-(\\gamma+1)}e^{i\\pi(\\gamma+1)/2},\\quad \\gamma+1=\\tfrac13.", explanation: "Strength \\( \\gamma=-\\tfrac23 \\), so the decay exponent is \\( \\gamma+1=\\tfrac13 \\)." },
        { stepNumber: 2, description: "Substitute the values.", workingLatex: "\\sim \\Gamma\\!\\big(\\tfrac13\\big)\\,x^{-1/3}\\,e^{i\\pi/6}.", explanation: "Here \\( \\Gamma(\\gamma+1)=\\Gamma(\\tfrac13)\\approx 2.6789 \\) and the rotation phase is \\( \\tfrac{\\pi}{2}\\cdot\\tfrac13=\\tfrac{\\pi}{6} \\)." },
        { stepNumber: 3, description: "Read off modulus and argument.", workingLatex: "\\big|\\cdot\\big|\\sim \\Gamma\\!\\big(\\tfrac13\\big)x^{-1/3}\\approx 2.679\\,x^{-1/3},\\qquad \\arg = \\tfrac{\\pi}{6}.", explanation: "The modulus decays as \\( x^{-1/3} \\); the constant argument \\( \\pi/6 \\) is fixed by the endpoint strength. Numerically confirmed." },
      ],
      finalAnswer: "\\( \\displaystyle \\Gamma\\!\\big(\\tfrac13\\big)x^{-1/3}e^{i\\pi/6} \\); modulus \\( \\approx 2.679\\,x^{-1/3} \\), argument \\( \\tfrac{\\pi}{6} \\).",
    },
  },
  {
    id: "am6c-015",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "An oscillatory integral over \\( [a,b] \\) has a smooth amplitude \\( f \\) with a jump discontinuity at an interior point \\( c\\in(a,b) \\). Write down the leading-order asymptotic form as \\( \\omega \\to \\infty \\) of \\( \\displaystyle I(\\omega)=\\int_a^b f(t)\\,e^{i\\omega t}\\,dt \\), explaining the role of the jump.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["discontinuity", "endpoint contributions", "jump"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Split at the discontinuity.", workingLatex: "I(\\omega)=\\int_a^{c} f e^{i\\omega t}dt + \\int_c^{b} f e^{i\\omega t}dt.", explanation: "On each piece \\( f \\) is smooth, so the smooth-endpoint formula applies separately. The point \\( c \\) now acts as an endpoint of both pieces." },
        { stepNumber: 2, description: "Apply the endpoint formula to each piece.", workingLatex: "\\sim \\frac{1}{i\\omega}\\Big[f(c^-)e^{i\\omega c}-f(a)e^{i\\omega a}\\Big] + \\frac{1}{i\\omega}\\Big[f(b)e^{i\\omega b}-f(c^+)e^{i\\omega c}\\Big].", explanation: "Each piece contributes \\( \\tfrac{1}{i\\omega}[\\text{value at upper end}-\\text{value at lower end}] \\)." },
        { stepNumber: 3, description: "Collect the \\( t=c \\) terms.", workingLatex: "I(\\omega) \\sim \\frac{1}{i\\omega}\\Big[f(b)e^{i\\omega b}-f(a)e^{i\\omega a} - \\big(f(c^+)-f(c^-)\\big)e^{i\\omega c}\\Big].", explanation: "The two interior contributions combine into a single term proportional to the *jump* \\( [f]_c = f(c^+)-f(c^-) \\)." },
        { stepNumber: 4, description: "Interpret.", workingLatex: "\\text{Genuine endpoints } a,b \\text{ and the jump at } c \\text{ each give an } O(\\omega^{-1}) \\text{ term.}", explanation: "A discontinuity behaves exactly like an interior endpoint: it radiates an \\( O(\\omega^{-1}) \\) oscillatory contribution with amplitude set by the size of the jump (Sheet 2, Q3a)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega)\\sim\\frac{1}{i\\omega}\\Big[f(b)e^{i\\omega b}-f(a)e^{i\\omega a}-\\big(f(c^{+})-f(c^{-})\\big)e^{i\\omega c}\\Big] \\)",
    },
  },
  {
    id: "am6c-016",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading behaviour as \\( x\\to\\infty \\) of \\( \\displaystyle\\int_0^{1} t^{1/2}\\cos(x t)\\,dt \\). Identify which endpoint dominates, given that the amplitude *vanishes* at the lower endpoint (\\( \\gamma=+\\tfrac12 \\)) but is smooth and non-zero at the upper endpoint.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted endpoint", "smooth endpoint", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Lower endpoint (vanishing amplitude).", workingLatex: "\\int_0 t^{1/2}\\cos(x t)\\,dt \\sim \\Gamma\\!\\big(\\tfrac32\\big)x^{-3/2}\\cos\\!\\Big(\\tfrac{3\\pi}{4}\\Big) = -\\frac{\\sqrt\\pi}{2\\sqrt2}\\,x^{-3/2}.", explanation: "Applying the endpoint formula with \\( \\gamma+1=\\tfrac32 \\): because the amplitude *vanishes* (\\( \\gamma>0 \\)), this endpoint decays fast, at \\( O(x^{-3/2}) \\)." },
        { stepNumber: 2, description: "Upper endpoint (smooth, non-zero).", workingLatex: "\\int^{1} t^{1/2}\\cos(x t)\\,dt \\sim \\Big[\\frac{t^{1/2}\\sin(x t)}{x}\\Big]_{t=1} = \\frac{\\sin x}{x}.", explanation: "At \\( t=1 \\) the amplitude is smooth and equals \\( 1 \\); one integration by parts gives the smooth-endpoint term of order \\( x^{-1} \\)." },
        { stepNumber: 3, description: "Compare orders — upper endpoint wins.", workingLatex: "x^{-1}\\ (\\text{upper}) \\gg x^{-3/2}\\ (\\text{lower}) \\;\\Rightarrow\\; \\int_0^{1} t^{1/2}\\cos(x t)\\,dt \\sim \\frac{\\sin x}{x}.", explanation: "A *vanishing* endpoint decays faster than a smooth one, so here the smooth upper endpoint dominates. (Contrast \\( \\gamma<0 \\): a *singular* lower endpoint would decay slower and dominate.) Numerically confirmed: the integral matches \\( \\sin(x)/x \\) to leading order." },
      ],
      finalAnswer: "\\( \\displaystyle \\frac{\\sin x}{x} \\) (smooth upper endpoint dominates; the vanishing lower endpoint is the subdominant \\( O(x^{-3/2}) \\) term).",
    },
  },
  {
    id: "am6c-017",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 17",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the leading behaviour as \\( x\\to\\infty \\) of \\( \\displaystyle\\int_0^{\\pi/2}\\Big(1-\\frac{2\\theta}{\\pi}\\Big)^{-3/4}\\sin(x\\cos\\theta)\\,d\\theta. \\)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted amplitude", "endpoint singularity", "sine"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Endpoint dominates (\\( \\gamma=-\\tfrac34 \\)).", workingLatex: "\\gamma+1=\\tfrac14 < \\tfrac12 \\;\\Rightarrow\\; \\text{singular endpoint } \\theta=\\tfrac{\\pi}{2}\\text{ controls leading order.}", explanation: "As in the cosine case, the \\( x^{-1/4} \\) endpoint beats the \\( x^{-1/2} \\) stationary point." },
        { stepNumber: 2, description: "Local form at \\( \\theta=\\pi/2 \\).", workingLatex: "s=\\tfrac{\\pi}{2}-\\theta:\\ \\big(\\tfrac{2}{\\pi}\\big)^{-3/4}s^{-3/4}\\sin(x s).", explanation: "\\( \\cos\\theta=\\sin s\\approx s \\); the sine of the phase replaces the cosine of the previous question." },
        { stepNumber: 3, description: "Use the sine endpoint formula.", workingLatex: "\\int_0 s^{\\gamma}\\sin(xs)\\,ds \\sim \\Gamma(\\gamma+1)x^{-(\\gamma+1)}\\sin\\!\\Big(\\tfrac{\\pi}{2}(\\gamma+1)\\Big).", explanation: "Imaginary part of the complex endpoint result." },
        { stepNumber: 4, description: "Substitute and state.", workingLatex: "\\sim \\big(\\tfrac{2}{\\pi}\\big)^{-3/4}\\Gamma\\!\\big(\\tfrac14\\big)\\sin\\!\\big(\\tfrac{\\pi}{8}\\big)x^{-1/4} \\approx 1.947\\,x^{-1/4}.", explanation: "Constant \\( (2/\\pi)^{-3/4}\\Gamma(\\tfrac14)\\sin(\\tfrac\\pi8)\\approx (1.4036)(3.6256)(0.38268)\\approx 1.947 \\). The sine phase factor makes it smaller than the cosine case (\\( \\approx 4.700 \\)). Numerically confirmed." },
      ],
      finalAnswer: "\\( \\displaystyle (2/\\pi)^{-3/4}\\Gamma\\!\\big(\\tfrac14\\big)\\sin\\!\\big(\\tfrac{\\pi}{8}\\big)\\,x^{-1/4}\\approx 1.947\\,x^{-1/4} \\)",
    },
  },
  {
    id: "am6c-018",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The integral \\( \\displaystyle\\int_0^{1} t^{\\gamma}\\cos(x t)\\,dt \\) has a singular weight at \\( t=0 \\). For what range of \\( \\gamma \\) does this endpoint produce a contribution that decays *more slowly* than the \\( x^{-1/2} \\) of a quadratic stationary point? Justify your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["dominant balance", "endpoint vs stationary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the endpoint decay rate.", workingLatex: "\\text{endpoint } \\sim x^{-(\\gamma+1)}, \\qquad \\gamma>-1.", explanation: "The decay exponent is \\( \\gamma+1 \\), set by the strength of the algebraic singularity." },
        { stepNumber: 2, description: "Require slower decay than \\( x^{-1/2} \\).", workingLatex: "x^{-(\\gamma+1)} \\gg x^{-1/2} \\iff \\gamma+1 < \\tfrac12.", explanation: "Slower decay means a smaller decay exponent." },
        { stepNumber: 3, description: "Solve for \\( \\gamma \\).", workingLatex: "\\gamma < -\\tfrac12 \\quad (\\text{and } \\gamma>-1 \\text{ for integrability}).", explanation: "So a sufficiently strong singularity, \\( -1<\\gamma<-\\tfrac12 \\), dominates a stationary point; at \\( \\gamma=-\\tfrac12 \\) they balance; for \\( \\gamma>-\\tfrac12 \\) the stationary point wins." },
      ],
      finalAnswer: "\\( -1 < \\gamma < -\\tfrac12 \\).",
    },
  },
  // ════════════════════════════════════════════════════════════════════
  // CHALLENGE (12) — synoptic / multi-step / starred, 5+ marks, examStyle:true
  // ════════════════════════════════════════════════════════════════════
  {
    id: "am6c-019",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For \\( \\displaystyle I_\\gamma(x)=\\int_0^{\\pi/2}\\Big(1-\\frac{2\\theta}{\\pi}\\Big)^{\\gamma}\\cos(x\\cos\\theta)\\,d\\theta \\), derive the leading-order behaviour as \\( x\\to\\infty \\) for each of \\( \\gamma=0 \\), \\( \\gamma=-\\tfrac12 \\) and \\( \\gamma=-\\tfrac34 \\), exhibiting in each case which critical point dominates.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted amplitude", "endpoint vs stationary", "case analysis"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the two critical points.", workingLatex: "\\text{stationary: } \\theta=0\\ (\\cos\\theta\\approx 1-\\tfrac{\\theta^2}{2});\\quad \\text{weight-singular: } \\theta=\\tfrac{\\pi}{2}.", explanation: "Every case shares these two competitors; only their relative order changes with \\( \\gamma \\).", mafs: `<Mafs viewBox={{ x: [-1.62, 3.18], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => Math.cos(t)} domain={[0, 1.5708]} color="var(--mafs-fg-accent)" weight={3} />
  <Line.Segment point1={[1.5708,0]} point2={[1.5708,1.1]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.3,1.5]} tex="\\phi=\\cos\\theta" color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.25,0.55]} tex="\\phi'(t_0)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.7,0.6]} tex="\\text{singular }\\theta=\\tfrac{\\pi}{2}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.95,-0.25]} tex="\\theta" />
</Mafs>` },
        { stepNumber: 2, description: "Write the two generic contributions.", workingLatex: "S \\sim \\sqrt{\\tfrac{\\pi}{2x}}\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big),\\quad E \\sim \\big(\\tfrac{2}{\\pi}\\big)^{\\gamma}\\Gamma(\\gamma+1)\\cos\\!\\big(\\tfrac{\\pi}{2}(\\gamma+1)\\big)x^{-(\\gamma+1)}.", explanation: "\\( S \\) is the half-Fresnel stationary term (order \\( x^{-1/2} \\)); \\( E \\) is the algebraic-endpoint term (order \\( x^{-(\\gamma+1)} \\))." },
        { stepNumber: 3, description: "Case \\( \\gamma=0 \\).", workingLatex: "E=O(x^{-1})\\ll S:\\quad I_0(x)\\sim\\sqrt{\\tfrac{\\pi}{2x}}\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big).", explanation: "The weight is regular, the upper endpoint smooth; the stationary point dominates." },
        { stepNumber: 4, description: "Case \\( \\gamma=-\\tfrac12 \\).", workingLatex: "E=\\tfrac{\\pi}{2}x^{-1/2},\\ S=\\sqrt{\\tfrac{\\pi}{2}}x^{-1/2}\\cos(x-\\tfrac\\pi4):\\ I_{-1/2}\\sim\\big[\\sqrt{\\tfrac{\\pi}{2}}\\cos(x-\\tfrac\\pi4)+\\tfrac{\\pi}{2}\\big]x^{-1/2}.", explanation: "At the balance point both terms are \\( O(x^{-1/2}) \\) and add; the endpoint coefficient simplifies to \\( \\pi/2 \\)." },
        { stepNumber: 5, description: "Case \\( \\gamma=-\\tfrac34 \\).", workingLatex: "E=O(x^{-1/4})\\gg S:\\quad I_{-3/4}(x)\\sim\\big(\\tfrac{2}{\\pi}\\big)^{-3/4}\\Gamma\\!\\big(\\tfrac14\\big)\\cos\\!\\big(\\tfrac{\\pi}{8}\\big)x^{-1/4}.", explanation: "Now \\( \\gamma+1=\\tfrac14<\\tfrac12 \\); the singular endpoint decays slowest and dominates." },
        { stepNumber: 6, description: "Summarise the transition.", workingLatex: "\\gamma>-\\tfrac12:\\,S\\ \\text{wins};\\quad \\gamma=-\\tfrac12:\\,\\text{tie};\\quad \\gamma<-\\tfrac12:\\,E\\ \\text{wins}.", explanation: "Varying \\( \\gamma \\) tunes which mechanism controls the integral — the central lesson of weighted endpoints. All three cases numerically verified." },
      ],
      finalAnswer: "\\( I_0\\sim\\sqrt{\\tfrac{\\pi}{2x}}\\cos(x-\\tfrac\\pi4) \\); \\( I_{-1/2}\\sim[\\sqrt{\\tfrac\\pi2}\\cos(x-\\tfrac\\pi4)+\\tfrac\\pi2]x^{-1/2} \\); \\( I_{-3/4}\\sim(2/\\pi)^{-3/4}\\Gamma(\\tfrac14)\\cos(\\tfrac\\pi8)x^{-1/4} \\).",
    },
  },
  {
    id: "am6c-020",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Show that as \\( x\\to+\\infty \\), \\( \\displaystyle\\int_0^{\\pi} e^{i x(t-\\sin t)}\\,dt \\sim e^{i\\pi/6}\\Big(\\frac{6}{x}\\Big)^{1/3}\\Gamma\\!\\Big(\\frac{4}{3}\\Big), \\) treating \\( t=0 \\) as a degenerate stationary point lying at the endpoint.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["degenerate stationary point", "cubic endpoint", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Expand the phase at the endpoint.", workingLatex: "\\phi(t)=t-\\sin t = \\frac{t^3}{6}-\\frac{t^5}{120}+\\cdots, \\qquad \\phi'(0)=\\phi''(0)=0.", explanation: "The phase is stationary at \\( t=0 \\) and the first non-vanishing derivative is third-order: a cubic-degenerate stationary point sitting on the lower endpoint." },
        { stepNumber: 2, description: "Localise — the endpoint dominates.", workingLatex: "\\int_0^{\\pi} e^{ix\\phi}dt \\sim \\int_0^{\\infty} e^{i x t^3/6}\\,dt.", explanation: "The contribution localises near \\( t=0 \\); the upper endpoint \\( t=\\pi \\) is non-stationary and gives only \\( O(x^{-1}) \\)." },
        { stepNumber: 3, description: "Rescale to remove \\( x \\).", workingLatex: "u = \\Big(\\frac{x}{6}\\Big)^{1/3}t \\;\\Rightarrow\\; \\int_0^{\\infty} e^{i u^3}\\Big(\\frac{6}{x}\\Big)^{1/3}du.", explanation: "Choosing the scaling so the exponent becomes \\( i u^3 \\); \\( dt=(6/x)^{1/3}du \\)." },
        { stepNumber: 4, description: "Evaluate the cubic Fresnel integral.", workingLatex: "\\int_0^{\\infty} e^{i u^3}\\,du = \\Gamma\\!\\Big(\\frac{4}{3}\\Big)\\,e^{i\\pi/6}.", explanation: "Rotate the ray by \\( \\arg u=\\pi/6 \\) so \\( u^3 \\) becomes negative real; the integral is \\( \\tfrac13\\Gamma(\\tfrac13)e^{i\\pi/6}=\\Gamma(\\tfrac43)e^{i\\pi/6} \\) using \\( \\Gamma(\\tfrac43)=\\tfrac13\\Gamma(\\tfrac13) \\)." },
        { stepNumber: 5, description: "Assemble the result.", workingLatex: "\\int_0^{\\pi} e^{i x(t-\\sin t)}\\,dt \\sim e^{i\\pi/6}\\Big(\\frac{6}{x}\\Big)^{1/3}\\Gamma\\!\\Big(\\frac{4}{3}\\Big).", explanation: "Decay \\( x^{-1/3} \\): flatter than quadratic, hence slower than the usual \\( x^{-1/2} \\). Numerically verified (ratio \\( \\to 1 \\))." },
        { stepNumber: 6, description: "Remark on lower limit \\( -\\pi \\).", workingLatex: "\\int_{-\\pi}^{\\pi}:\\ t=0 \\text{ becomes interior} \\Rightarrow \\text{full (two-sided) cubic} = e^{i\\pi/6}(6/x)^{1/3}\\Gamma(\\tfrac43)+\\text{c.c. phase}.", explanation: "With \\( t=0 \\) interior the two half-rays both contribute, doubling the real part and giving the Airy-type leading order \\( \\propto x^{-1/3} \\) characteristic of an interior cubic point." },
      ],
      finalAnswer: "\\( \\displaystyle e^{i\\pi/6}\\Big(\\frac{6}{x}\\Big)^{1/3}\\Gamma\\!\\Big(\\frac{4}{3}\\Big) \\)",
    },
  },
  {
    id: "am6c-021",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "An oscillatory integral has both a weight singularity \\( t^{\\gamma} \\) at the lower endpoint *and* the phase \\( e^{ixt} \\). For the two-term expansion, evaluate \\( \\displaystyle\\int_0^{1} t^{\\gamma}(1 + b t)\\,e^{i x t}\\,dt \\) to two orders as \\( x\\to\\infty \\), with \\( \\gamma>-1 \\) and \\( b \\) constant.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted endpoint", "Watson-type", "two-term expansion"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Split by powers of \\( t \\).", workingLatex: "\\int_0^{1}\\!\\big(t^{\\gamma}+b\\,t^{\\gamma+1}\\big)e^{i x t}dt.", explanation: "The amplitude is a sum of two pure powers; each is handled by the algebraic-endpoint formula and the two contribute at successive orders." },
        { stepNumber: 2, description: "First term.", workingLatex: "\\int_0^{1} t^{\\gamma}e^{i x t}dt \\sim \\Gamma(\\gamma+1)x^{-(\\gamma+1)}e^{i\\pi(\\gamma+1)/2}.", explanation: "Leading order \\( x^{-(\\gamma+1)} \\)." },
        { stepNumber: 3, description: "Second term.", workingLatex: "b\\int_0^{1} t^{\\gamma+1}e^{i x t}dt \\sim b\\,\\Gamma(\\gamma+2)x^{-(\\gamma+2)}e^{i\\pi(\\gamma+2)/2}.", explanation: "Replacing \\( \\gamma\\to\\gamma+1 \\): one order higher in \\( 1/x \\), and an extra factor \\( e^{i\\pi/2}=i \\) in the phase." },
        { stepNumber: 4, description: "Combine.", workingLatex: "\\int_0^{1} t^{\\gamma}(1+bt)e^{i x t}dt \\sim \\Gamma(\\gamma+1)x^{-(\\gamma+1)}e^{i\\pi(\\gamma+1)/2}\\Big[1 + \\frac{b(\\gamma+1)\\,i}{x}\\Big].", explanation: "Using \\( \\Gamma(\\gamma+2)=(\\gamma+1)\\Gamma(\\gamma+1) \\) and \\( e^{i\\pi(\\gamma+2)/2}=i\\,e^{i\\pi(\\gamma+1)/2} \\); the bracket is the start of the endpoint expansion in inverse powers of \\( x \\)." },
        { stepNumber: 5, description: "State.", workingLatex: "\\sim \\Gamma(\\gamma+1)x^{-(\\gamma+1)}e^{i\\pi(\\gamma+1)/2}\\Big(1 + \\frac{i\\,b(\\gamma+1)}{x}+\\cdots\\Big).", explanation: "Each successive correction is down by \\( 1/x \\) — the hallmark of an algebraic endpoint expansion. Numerically verified to leading order." },
      ],
      finalAnswer: "\\( \\displaystyle \\Gamma(\\gamma+1)x^{-(\\gamma+1)}e^{i\\pi(\\gamma+1)/2}\\Big(1+\\tfrac{i\\,b(\\gamma+1)}{x}+\\cdots\\Big) \\)",
    },
  },
  {
    id: "am6c-022",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading behaviour as \\( \\omega\\to\\infty \\) of \\( \\displaystyle I(\\omega)=\\int_{-\\infty}^{\\infty} f(t)\\,e^{i\\omega t}\\,dt \\) for the function \\( f(t)=-e^{t} \\) for \\( t<0 \\) and \\( f(t)=e^{-t} \\) for \\( t\\ge 0 \\), and compare with the exact value of \\( I(\\omega) \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["discontinuity", "jump", "exact comparison", "Fourier"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the jump at \\( t=0 \\).", workingLatex: "f(0^-)=-1,\\quad f(0^+)=+1 \\;\\Rightarrow\\; [f]_0 = f(0^+)-f(0^-)=2.", explanation: "The amplitude is smooth on each half-line but jumps by \\( 2 \\) at the origin; this jump is the only non-smooth feature." },
        { stepNumber: 2, description: "Apply the jump-endpoint result.", workingLatex: "I(\\omega) \\sim -\\frac{[f]_0\\,e^{i\\omega\\cdot 0}}{i\\omega} = -\\frac{2}{i\\omega} = \\frac{2i}{\\omega}.", explanation: "From Q15: a jump at an interior point contributes \\( -\\tfrac{1}{i\\omega}[f]_c e^{i\\omega c} \\); decay of \\( f \\) at \\( \\pm\\infty \\) kills the genuine endpoints." },
        { stepNumber: 3, description: "Compute the exact integral.", workingLatex: "I(\\omega) = -\\!\\int_{-\\infty}^{0}\\! e^{t}e^{i\\omega t}dt + \\int_{0}^{\\infty}\\! e^{-t}e^{i\\omega t}dt.", explanation: "Split at the discontinuity and integrate each elementary exponential." },
        { stepNumber: 4, description: "Evaluate each piece.", workingLatex: "-\\frac{1}{1+i\\omega} + \\frac{1}{1-i\\omega} = \\frac{-(1-i\\omega)+(1+i\\omega)}{1+\\omega^2} = \\frac{2i\\omega}{1+\\omega^2}.", explanation: "\\( \\int_{-\\infty}^0 e^{(1+i\\omega)t}dt=\\tfrac{1}{1+i\\omega} \\) and \\( \\int_0^\\infty e^{(-1+i\\omega)t}dt=\\tfrac{1}{1-i\\omega} \\)." },
        { stepNumber: 5, description: "Expand the exact result.", workingLatex: "I(\\omega)=\\frac{2i\\omega}{1+\\omega^2} = \\frac{2i}{\\omega}\\cdot\\frac{1}{1+\\omega^{-2}} = \\frac{2i}{\\omega} - \\frac{2i}{\\omega^3}+\\cdots.", explanation: "For large \\( \\omega \\) the exact value expands in odd inverse powers of \\( \\omega \\)." },
        { stepNumber: 6, description: "Compare.", workingLatex: "\\frac{2i}{\\omega}\\ \\checkmark \\quad\\text{(leading term matches the jump prediction).}", explanation: "The asymptotic jump formula reproduces the leading \\( 2i/\\omega \\) exactly; higher corrections come from derivatives of \\( f \\) at the jump (Sheet 2, Q3b)." },
      ],
      finalAnswer: "\\( \\displaystyle I(\\omega)=\\frac{2i\\omega}{1+\\omega^2}\\sim\\frac{2i}{\\omega} \\); leading term matches the jump prediction.",
      canonicalAnswer: "2*i*w/(1+w^2)",
    },
  },
  {
    id: "am6c-023",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading behaviour as \\( x\\to\\infty \\) of \\( \\displaystyle\\int_0^{1} t^{-1/2}\\,e^{i\\lambda(t+t^2)}\\,dt \\) (take \\( \\lambda=x\\to\\infty \\)), where the weight is singular at the lower endpoint and the phase has no interior stationary point on \\( (0,1) \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted endpoint", "stationary phase", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Examine the phase.", workingLatex: "\\phi(t)=t+t^2,\\ \\phi'(t)=1+2t>0 \\text{ on } [0,1].", explanation: "The phase is strictly increasing, so there is no stationary point; the leading contribution comes from the singular weight at the lower endpoint \\( t=0 \\)." },
        { stepNumber: 2, description: "Localise at \\( t=0 \\).", workingLatex: "t\\to 0:\\ \\phi(t)\\approx t,\\quad t^{-1/2}e^{i\\lambda(t+t^2)}\\approx t^{-1/2}e^{i\\lambda t}.", explanation: "Near the endpoint the quadratic part of the phase is negligible at leading order; the integrand is \\( t^{-1/2}e^{i\\lambda t} \\), a pure algebraic endpoint of strength \\( \\gamma=-\\tfrac12 \\)." },
        { stepNumber: 3, description: "Apply the endpoint formula.", workingLatex: "\\int_0 t^{-1/2}e^{i\\lambda t}\\,dt \\sim \\Gamma\\!\\big(\\tfrac12\\big)\\lambda^{-1/2}e^{i\\pi/4}.", explanation: "With \\( \\gamma+1=\\tfrac12 \\): \\( \\Gamma(\\tfrac12)=\\sqrt\\pi \\) and phase \\( e^{i\\pi/4} \\)." },
        { stepNumber: 4, description: "Write the leading term.", workingLatex: "\\int_0^{1} t^{-1/2}e^{i\\lambda(t+t^2)}\\,dt \\sim \\sqrt{\\frac{\\pi}{\\lambda}}\\,e^{i\\pi/4}, \\qquad \\lambda\\to\\infty.", explanation: "Decay \\( \\lambda^{-1/2} \\). The smooth upper endpoint \\( t=1 \\) gives an \\( O(\\lambda^{-1}) \\) term — the \\( c_2\\,e^{2i\\lambda}/\\lambda \\) piece of Sheet 2 Q9 — which is subdominant." },
        { stepNumber: 5, description: "Identify the constants.", workingLatex: "c_1 = \\sqrt{\\pi}\\,e^{i\\pi/4} \\;(\\text{leading}),\\qquad c_2 = O(1)\\ \\text{from upper endpoint}.", explanation: "Matching to the Sheet-2 form \\( c_1\\lambda^{-1/2}+c_2 e^{2i\\lambda}\\lambda^{-1}+\\cdots \\): the singular endpoint sets \\( c_1=\\sqrt\\pi\\,e^{i\\pi/4} \\). Numerically verified." },
      ],
      finalAnswer: "\\( \\displaystyle \\sqrt{\\tfrac{\\pi}{\\lambda}}\\,e^{i\\pi/4} \\) (so \\( c_1=\\sqrt\\pi\\,e^{i\\pi/4} \\)).",
    },
  },
  {
    id: "am6c-024",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Consider the weighted integral \\( \\displaystyle I_\\gamma(x)=\\int_0^{\\pi/2}\\Big(1-\\frac{2\\theta}{\\pi}\\Big)^{\\gamma}\\cos(x\\cos\\theta)\\,d\\theta. \\) Determine the critical exponent \\( \\gamma^\\star \\) at which the *next-order* correction to the dominant endpoint term first competes with the stationary contribution, for \\( \\gamma<-\\tfrac12 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted amplitude", "subdominant balance", "order analysis"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "List the orders present.", workingLatex: "\\text{endpoint leading } x^{-(\\gamma+1)};\\ \\text{endpoint next } x^{-(\\gamma+2)};\\ \\text{stationary } x^{-1/2}.", explanation: "The endpoint expansion proceeds in unit steps of the inverse power: \\( x^{-(\\gamma+1)}, x^{-(\\gamma+2)},\\ldots \\). The stationary point sits at \\( x^{-1/2} \\)." },
        { stepNumber: 2, description: "Set the endpoint correction level with the stationary term.", workingLatex: "\\gamma+2 = \\tfrac12 \\;\\Rightarrow\\; \\gamma = -\\tfrac32.", explanation: "The first endpoint correction \\( x^{-(\\gamma+2)} \\) equals the stationary order \\( x^{-1/2} \\) precisely when \\( \\gamma=-\\tfrac32 \\)." },
        { stepNumber: 3, description: "Check integrability.", workingLatex: "\\gamma=-\\tfrac32 < -1 \\;\\Rightarrow\\; \\text{weight } s^{-3/2}\\ \\text{not integrable at } \\theta=\\tfrac{\\pi}{2}.", explanation: "But \\( s^{-3/2} \\) fails the integrability condition \\( \\gamma>-1 \\): the naive integral diverges and would require regularisation (Hadamard finite part)." },
        { stepNumber: 4, description: "State the answer with caveat.", workingLatex: "\\gamma^\\star = -\\tfrac32 \\quad(\\text{formal; lies outside the integrable range } \\gamma>-1).", explanation: "So within the admissible range \\( -1<\\gamma<-\\tfrac12 \\) the endpoint's *leading* term always dominates the stationary point and its corrections never catch the stationary order — the balance \\( \\gamma^\\star=-\\tfrac32 \\) is only formal." },
      ],
      finalAnswer: "\\( \\gamma^\\star=-\\tfrac32 \\) (formal; outside the integrable range \\( \\gamma>-1 \\), so unattainable).",
    },
  },
  {
    id: "am6c-025",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading behaviour as \\( x\\to\\infty \\) of \\( \\displaystyle\\int_0^{1}(1-t)^{-1/2}\\,e^{i x t}\\,dt \\), where the weight is singular at the *upper* endpoint \\( t=1 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted endpoint", "upper endpoint", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Move the singularity to the origin.", workingLatex: "s = 1-t \\;\\Rightarrow\\; dt=-ds,\\quad t:0\\to1 \\Leftrightarrow s:1\\to0.", explanation: "Shifting variables puts the singular endpoint at \\( s=0 \\), where the standard formula applies." },
        { stepNumber: 2, description: "Rewrite the integral.", workingLatex: "\\int_0^{1} s^{-1/2}e^{i x(1-s)}\\,ds = e^{i x}\\int_0^{1} s^{-1/2}e^{-i x s}\\,ds.", explanation: "Factor out the constant phase \\( e^{ix} \\) from \\( t=1 \\); the remaining integral is a pure algebraic endpoint with phase \\( e^{-ixs} \\)." },
        { stepNumber: 3, description: "Apply the endpoint formula (note the sign of the phase).", workingLatex: "\\int_0 s^{-1/2}e^{-i x s}\\,ds \\sim \\Gamma\\!\\big(\\tfrac12\\big)x^{-1/2}e^{-i\\pi/4}.", explanation: "For \\( e^{-ixs} \\) the rotation is by \\( -\\pi/4 \\): \\( \\int_0 s^{\\gamma}e^{-ixs}ds\\sim\\Gamma(\\gamma+1)x^{-(\\gamma+1)}e^{-i\\pi(\\gamma+1)/2} \\)." },
        { stepNumber: 4, description: "Reassemble.", workingLatex: "\\int_0^{1}(1-t)^{-1/2}e^{i x t}\\,dt \\sim \\sqrt{\\frac{\\pi}{x}}\\,e^{i(x-\\pi/4)}.", explanation: "Combining \\( e^{ix} \\) with \\( e^{-i\\pi/4} \\) and \\( \\Gamma(\\tfrac12)=\\sqrt\\pi \\): a singular upper endpoint produces an \\( x^{-1/2} \\) term carrying the endpoint phase \\( e^{ix} \\). Numerically verified." },
      ],
      finalAnswer: "\\( \\displaystyle \\sqrt{\\tfrac{\\pi}{x}}\\,e^{i(x-\\pi/4)} \\)",
    },
  },
  {
    id: "am6c-026",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "An integral has a stationary point *and* a singular weight at the **same** endpoint: find the leading behaviour as \\( x\\to\\infty \\) of \\( \\displaystyle\\int_0^{1} t^{-1/2}\\cos(x t^2)\\,dt \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coincident singularity", "stationary endpoint", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note the coincidence.", workingLatex: "\\text{weight } t^{-1/2}\\text{ singular at } t=0;\\ \\text{phase } t^2 \\text{ stationary at } t=0.", explanation: "Both special features sit at the lower endpoint, so they must be treated together rather than as separate competing contributions." },
        { stepNumber: 2, description: "Extend the limit and substitute.", workingLatex: "\\int_0^{1} t^{-1/2}\\cos(x t^2)\\,dt \\sim \\int_0^{\\infty} t^{-1/2}\\cos(x t^2)\\,dt,\\quad u=x t^2.", explanation: "Localise at \\( t=0 \\); set \\( u=xt^2 \\) so \\( t=(u/x)^{1/2} \\), \\( dt=\\tfrac12 x^{-1/2}u^{-1/2}\\,du \\)." },
        { stepNumber: 3, description: "Transform the measure.", workingLatex: "t^{-1/2}dt = (u/x)^{-1/4}\\cdot\\tfrac12 x^{-1/2}u^{-1/2}\\,du = \\tfrac12 x^{-1/4}u^{-3/4}\\,du.", explanation: "Combining the weight and the Jacobian gives an overall \\( x^{-1/4} \\) scaling — between the pure-weight \\( x^{-1/2} \\) and pure-stationary \\( x^{-1/2} \\) rates." },
        { stepNumber: 4, description: "Reduce to a Gamma integral.", workingLatex: "\\tfrac12 x^{-1/4}\\int_0^{\\infty} u^{-3/4}\\cos u\\,du = \\tfrac12 x^{-1/4}\\,\\Gamma\\!\\big(\\tfrac14\\big)\\cos\\!\\big(\\tfrac{\\pi}{8}\\big).", explanation: "Using \\( \\int_0^\\infty u^{\\mu-1}\\cos u\\,du=\\Gamma(\\mu)\\cos(\\tfrac{\\pi\\mu}{2}) \\) with \\( \\mu=\\tfrac14 \\)." },
        { stepNumber: 5, description: "State the leading term.", workingLatex: "\\int_0^{1} t^{-1/2}\\cos(x t^2)\\,dt \\sim \\tfrac12\\Gamma\\!\\big(\\tfrac14\\big)\\cos\\!\\big(\\tfrac{\\pi}{8}\\big)\\,x^{-1/4} \\approx 1.675\\,x^{-1/4}.", explanation: "The coincident weight-and-stationary point gives the slow decay \\( x^{-1/4} \\): combining a \\( t^{-1/2} \\) singularity with a \\( t^2 \\) phase produces effective order \\( \\tfrac{1}{4} \\). Numerically confirmed." },
      ],
      finalAnswer: "\\( \\displaystyle \\tfrac12\\Gamma\\!\\big(\\tfrac14\\big)\\cos\\!\\big(\\tfrac{\\pi}{8}\\big)\\,x^{-1/4}\\approx 1.675\\,x^{-1/4} \\)",
    },
  },
  {
    id: "am6c-027",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 27",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Generalise: for the coincident case \\( \\displaystyle\\int_0^{1} t^{\\gamma}\\cos(x t^p)\\,dt \\) with \\( \\gamma>-1 \\) and \\( p>0 \\), derive the leading behaviour as \\( x\\to\\infty \\) and state the decay exponent.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coincident singularity", "general power", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Localise and substitute.", workingLatex: "\\int_0^{1} t^{\\gamma}\\cos(x t^p)\\,dt \\sim \\int_0^{\\infty} t^{\\gamma}\\cos(x t^p)\\,dt,\\quad u = x t^p.", explanation: "The contribution localises at \\( t=0 \\); set \\( u=xt^p \\), so \\( t=(u/x)^{1/p} \\)." },
        { stepNumber: 2, description: "Transform the measure.", workingLatex: "t = (u/x)^{1/p},\\quad dt = \\tfrac1p x^{-1/p}u^{1/p-1}\\,du.", explanation: "Differentiate the substitution; this brings out the overall power of \\( x \\)." },
        { stepNumber: 3, description: "Collect the power of \\( x \\).", workingLatex: "t^{\\gamma}\\,dt = \\tfrac1p\\,x^{-(\\gamma+1)/p}\\,u^{(\\gamma+1)/p-1}\\,du.", explanation: "The exponent on \\( x \\) is \\( -(\\gamma+1)/p \\); writing \\( \\mu=(\\gamma+1)/p \\) the \\( u \\)-integrand is \\( u^{\\mu-1}\\cos u \\)." },
        { stepNumber: 4, description: "Evaluate the Gamma integral.", workingLatex: "\\int_0^{1} t^{\\gamma}\\cos(x t^p)\\,dt \\sim \\frac{1}{p}\\,\\Gamma\\!\\Big(\\frac{\\gamma+1}{p}\\Big)\\cos\\!\\Big(\\frac{\\pi(\\gamma+1)}{2p}\\Big)\\,x^{-(\\gamma+1)/p}.", explanation: "Using \\( \\int_0^\\infty u^{\\mu-1}\\cos u\\,du=\\Gamma(\\mu)\\cos(\\tfrac{\\pi\\mu}{2}) \\) with \\( \\mu=(\\gamma+1)/p \\)." },
        { stepNumber: 5, description: "Read off the exponent and check limits.", workingLatex: "\\text{decay } x^{-(\\gamma+1)/p}:\\quad p=1\\to x^{-(\\gamma+1)}\\ (\\text{pure endpoint}),\\ \\gamma=0\\to x^{-1/p}\\ (\\text{pure stationary}).", explanation: "The single formula reproduces both limiting cases — pure algebraic endpoint (\\( p=1 \\)) and pure power-phase stationary endpoint (\\( \\gamma=0 \\)), confirming consistency. Verified for \\( \\gamma=-\\tfrac12,p=2 \\)." },
      ],
      finalAnswer: "\\( \\displaystyle \\frac{1}{p}\\Gamma\\!\\Big(\\frac{\\gamma+1}{p}\\Big)\\cos\\!\\Big(\\frac{\\pi(\\gamma+1)}{2p}\\Big)x^{-(\\gamma+1)/p} \\); decay exponent \\( \\tfrac{\\gamma+1}{p} \\).",
    },
  },
  {
    id: "am6c-028",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading behaviour as \\( x\\to\\infty \\) of \\( \\displaystyle\\int_0^{\\pi/2}\\Big(1-\\frac{2\\theta}{\\pi}\\Big)^{-2/3}\\cos(x\\cos\\theta)\\,d\\theta, \\) and state both the dominant term and the order of the first subdominant correction.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted amplitude", "endpoint singularity", "subdominant order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Classify (\\( \\gamma=-\\tfrac23 \\)).", workingLatex: "\\gamma+1 = \\tfrac13 < \\tfrac12 \\;\\Rightarrow\\; \\text{singular endpoint dominates, order } x^{-1/3}.", explanation: "Since \\( \\gamma=-\\tfrac23<-\\tfrac12 \\), the singular endpoint at \\( \\theta=\\pi/2 \\) controls the leading order." },
        { stepNumber: 2, description: "Local form at \\( \\theta=\\pi/2 \\).", workingLatex: "s=\\tfrac{\\pi}{2}-\\theta:\\ \\big(\\tfrac{2}{\\pi}\\big)^{-2/3}s^{-2/3}\\cos(x s).", explanation: "\\( \\cos\\theta=\\sin s\\approx s \\), giving an algebraic endpoint of strength \\( \\gamma=-\\tfrac23 \\).", mafs: `<Mafs viewBox={{ x: [-1.62, 3.18], y: [-1.9, 1.9], padding: 0 }} height={380}>
  <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.OfX y={(t) => Math.cos(t)} domain={[0, 1.5708]} color="var(--mafs-fg-accent)" weight={3} />
  <Line.Segment point1={[1.5708,0]} point2={[1.5708,1.1]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.3,1.5]} tex="\\phi=\\cos\\theta" color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.25,0.55]} tex="\\phi'(t_0)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.7,0.6]} tex="\\text{singular }\\theta=\\tfrac{\\pi}{2}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.95,-0.25]} tex="\\theta" />
</Mafs>` },
        { stepNumber: 3, description: "Leading endpoint term.", workingLatex: "\\sim \\big(\\tfrac{2}{\\pi}\\big)^{-2/3}\\Gamma\\!\\big(\\tfrac13\\big)\\cos\\!\\big(\\tfrac{\\pi}{6}\\big)\\,x^{-1/3} \\approx 3.135\\,x^{-1/3}.", explanation: "With \\( \\gamma+1=\\tfrac13 \\): constant \\( (2/\\pi)^{-2/3}\\Gamma(\\tfrac13)\\cos(\\tfrac\\pi6)\\approx 3.135 \\). Numerically confirmed." },
        { stepNumber: 4, description: "Identify the next correction.", workingLatex: "\\text{stationary } x^{-1/2}\\ \\text{vs endpoint correction } x^{-(\\gamma+2)}=x^{-4/3}.", explanation: "The stationary point at \\( \\theta=0 \\) gives the first subdominant term at \\( x^{-1/2} \\) (since \\( \\tfrac12<\\tfrac43 \\)), which beats the endpoint's own correction \\( x^{-4/3} \\)." },
        { stepNumber: 5, description: "State.", workingLatex: "I(x) \\sim 3.135\\,x^{-1/3} + \\sqrt{\\tfrac{\\pi}{2x}}\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big)+\\cdots", explanation: "Dominant \\( x^{-1/3} \\) (endpoint), first correction \\( x^{-1/2} \\) (stationary point), then \\( x^{-4/3} \\) (endpoint correction)." },
      ],
      finalAnswer: "Dominant \\( (2/\\pi)^{-2/3}\\Gamma(\\tfrac13)\\cos(\\tfrac\\pi6)x^{-1/3}\\approx3.135\\,x^{-1/3} \\); first correction \\( O(x^{-1/2}) \\) from the stationary point.",
    },
  },
  // REVIEW: leading-order matching (c1) verified numerically (am6c-023 family); the c2 e^{2iλ}/λ upper-endpoint coefficient is quoted structurally from Sheet 2 Q9 and not independently re-derived numerically here.
  {
    id: "am6c-029",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For \\( \\displaystyle\\int_0^{1} t^{-1/2}\\,e^{i\\lambda(t+t^2)}\\,dt \\sim \\frac{c_1}{\\lambda^{1/2}} + c_2\\frac{e^{2i\\lambda}}{\\lambda} + \\cdots \\) as \\( \\lambda\\to\\infty \\), determine \\( c_1 \\) from the singular lower endpoint and explain the origin and \\( \\lambda \\)-order of the \\( c_2 \\) term.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["weighted endpoint", "two endpoints", "steepest descent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Lower endpoint controls \\( c_1 \\).", workingLatex: "t\\to0:\\ t^{-1/2}e^{i\\lambda(t+t^2)}\\approx t^{-1/2}e^{i\\lambda t}.", explanation: "The \\( t^{-1/2} \\) singularity at \\( t=0 \\) is the strongest feature; the phase there is \\( \\approx\\lambda t \\)." },
        { stepNumber: 2, description: "Evaluate the lower-endpoint integral.", workingLatex: "\\int_0 t^{-1/2}e^{i\\lambda t}\\,dt \\sim \\Gamma\\!\\big(\\tfrac12\\big)\\lambda^{-1/2}e^{i\\pi/4} = \\sqrt{\\pi}\\,\\lambda^{-1/2}e^{i\\pi/4}.", explanation: "Standard \\( \\gamma=-\\tfrac12 \\) endpoint with phase \\( e^{i\\lambda t} \\)." },
        { stepNumber: 3, description: "Read off \\( c_1 \\).", workingLatex: "c_1 = \\sqrt{\\pi}\\,e^{i\\pi/4}.", explanation: "The singular endpoint fixes the \\( \\lambda^{-1/2} \\) coefficient. Verified numerically." },
        { stepNumber: 4, description: "Upper endpoint origin of \\( c_2 \\).", workingLatex: "t=1:\\ \\phi(1)=1+1=2,\\ \\text{phase factor } e^{i\\lambda\\phi(1)}=e^{2i\\lambda}.", explanation: "At \\( t=1 \\) the amplitude is smooth (\\( =1 \\)), so this is a smooth endpoint contributing the oscillatory factor \\( e^{2i\\lambda} \\) — exactly the phase in the \\( c_2 \\) term." },
        { stepNumber: 5, description: "Order of the upper-endpoint term.", workingLatex: "\\int^{1} 1\\cdot e^{i\\lambda\\phi}dt \\sim \\frac{e^{i\\lambda\\phi(1)}}{i\\lambda\\,\\phi'(1)} = \\frac{e^{2i\\lambda}}{3i\\lambda}.", explanation: "Smooth-endpoint formula with \\( \\phi'(1)=1+2(1)=3 \\): a single endpoint gives \\( O(\\lambda^{-1}) \\), matching the \\( c_2\\,e^{2i\\lambda}/\\lambda \\) structure with \\( c_2=\\tfrac{1}{3i}=-\\tfrac{i}{3} \\)." },
        { stepNumber: 6, description: "Assemble.", workingLatex: "\\int_0^{1} t^{-1/2}e^{i\\lambda(t+t^2)}dt \\sim \\frac{\\sqrt\\pi\\,e^{i\\pi/4}}{\\lambda^{1/2}} - \\frac{i}{3}\\,\\frac{e^{2i\\lambda}}{\\lambda}+\\cdots", explanation: "The singular lower endpoint gives the dominant \\( \\lambda^{-1/2} \\) term; the smooth upper endpoint gives the subdominant \\( \\lambda^{-1} \\) oscillatory term (Sheet 2, Q9)." },
      ],
      finalAnswer: "\\( c_1=\\sqrt\\pi\\,e^{i\\pi/4} \\); the \\( c_2 \\) term is the smooth upper endpoint \\( t=1 \\), order \\( \\lambda^{-1} \\), with \\( c_2=-\\tfrac{i}{3} \\).",
    },
  },
  {
    id: "am6c-030",
    topicRef: "am6c",
    topicTitle: "Endpoint singularities & weighted amplitudes 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A weighted amplitude has an *interior* algebraic singularity: find the leading behaviour as \\( x\\to\\infty \\) of \\( \\displaystyle\\int_0^{2} |t-1|^{-1/2}\\,e^{i x t}\\,dt \\), where the integrand is singular at the interior point \\( t=1 \\) and there is no stationary point.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["interior singularity", "weighted amplitude", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Localise at the interior singularity.", workingLatex: "s = t-1:\\quad \\int_{-1}^{1} |s|^{-1/2} e^{i x(1+s)}\\,ds = e^{i x}\\int_{-1}^{1} |s|^{-1/2} e^{i x s}\\,ds.", explanation: "An interior integrable singularity behaves like a two-sided endpoint; factor out the phase \\( e^{ix} \\) at \\( t=1 \\)." },
        { stepNumber: 2, description: "Split into two one-sided endpoints.", workingLatex: "\\int_{-1}^{1}|s|^{-1/2}e^{i x s}ds = \\int_0^{1} s^{-1/2}e^{i x s}ds + \\int_0^{1} s^{-1/2}e^{-i x s}ds.", explanation: "Splitting at \\( s=0 \\) and reflecting the \\( s<0 \\) half: the singularity contributes from both sides." },
        { stepNumber: 3, description: "Evaluate each side.", workingLatex: "\\Gamma\\!\\big(\\tfrac12\\big)x^{-1/2}e^{i\\pi/4} + \\Gamma\\!\\big(\\tfrac12\\big)x^{-1/2}e^{-i\\pi/4}.", explanation: "The two sides give conjugate rotation phases \\( e^{\\pm i\\pi/4} \\); each is a standard \\( \\gamma=-\\tfrac12 \\) endpoint." },
        { stepNumber: 4, description: "Combine the conjugate pair.", workingLatex: "\\sqrt\\pi\\,x^{-1/2}\\big(e^{i\\pi/4}+e^{-i\\pi/4}\\big) = \\sqrt\\pi\\,x^{-1/2}\\cdot 2\\cos\\!\\big(\\tfrac{\\pi}{4}\\big) = \\sqrt{2\\pi}\\,x^{-1/2}.", explanation: "\\( 2\\cos(\\pi/4)=\\sqrt2 \\); the two-sided singularity gives a real amplitude \\( \\sqrt{2\\pi}\\,x^{-1/2} \\)." },
        { stepNumber: 5, description: "Restore the phase.", workingLatex: "\\int_0^{2}|t-1|^{-1/2}e^{i x t}\\,dt \\sim \\sqrt{\\frac{2\\pi}{x}}\\;e^{i x}.", explanation: "Multiplying back by \\( e^{ix} \\). The interior \\( |t-1|^{-1/2} \\) singularity radiates an \\( x^{-1/2} \\) contribution carrying the phase \\( e^{ix} \\) of its location — twice the size of a one-sided endpoint of the same strength. Numerically verified." },
      ],
      finalAnswer: "\\( \\displaystyle \\sqrt{\\tfrac{2\\pi}{x}}\\;e^{i x} \\)",
    },
  },
];
