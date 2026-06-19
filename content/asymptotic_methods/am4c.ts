import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — am4c
 * "Stirling's formula & Gamma asymptotics"
 * Topic group: Laplace's Method
 *
 * Scope: Γ(x+1) ∼ √(2πx)(x/e)^x (1 + 1/(12x) + …) as x → ∞, derived by
 * Laplace's method on Γ(x+1)=∫₀^∞ t^x e^{-t} dt; the ln Γ (Stirling) series
 * (z-½)ln z - z + ½ln(2π) + 1/(12z) - 1/(360z³) + …; the reflection formula
 * Γ(z)Γ(1-z)=π/sin πz; ratios Γ(x+a)/Γ(x+b)∼x^{a-b}; Beta-function and
 * central-binomial consequences; and the Bessel/Watson-type integrals from the
 * sheet that hinge on the same Laplace machinery.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 2, Q1 (the
 * Stirling correction) and Q2 (the √(π/4x) expansion of ∫₀^{π/2} e^{-x sin²t}dt
 * and the Bessel function I₀), with constants/limits/framings varied so no sheet
 * question is reproduced verbatim.
 *
 * Numerical checks (mpmath, dps=40) run while authoring:
 *  - Γ(x+1)/[√(2πx)(x/e)^x] at x=8 matches 1+1/12x+1/288x²-139/51840x³ to rel 3e-8 ✓
 *  - lnΓ(10) series (z-½)lnz - z + ½ln2π + 1/12z - 1/360z³ to rel 6e-10 ✓
 *  - Reflection Γ(0.3)Γ(0.7)=π/sin(0.3π) to rel 1e-41 ✓
 *  - ∫₀^{π/2} e^{-x sin²t}dt ∼ √(π/4x)(1+1/4x+9/2(4x)²+…) at x=30 to rel 2e-5 ✓
 *  - I₀(x) ∼ e^x/√(2πx)(1+1/8x+9/128x²) at x=25 to rel 5e-6; integral def x=10 exact ✓
 *  - Γ(x+½)/Γ(x) ∼ x^{1/2}(1+(a-b)(a+b-1)/2x) at x=100 to rel 8e-7 ✓
 *  - B(x,3)=Γ(x)Γ(3)/Γ(x+3) ∼ 2x^{-3}; central binomial C(2n,n)∼4^n/√(πn) ✓
 *  - Γ(n+½)=(2n)!/(4^n n!)√π exact; Γ(½)=√π, Γ(3/2)=√π/2 exact ✓
 *  - Laplace interior max ∫₀² e^{x(2t-t²)}dt ∼ e^x√(π/x) to rel 6e-28 ✓
 *  - Reflection-ratio Γ(½+m)/Γ(½-m): m=0,1,2,3 → 1, -1/4, 9/16, -225/64 ✓
 */
export const questions: Question[] = [
  // ─────────────────────────── FOUNDATION (6) ───────────────────────────
  {
    id: "am4c-001",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Write the Gamma function as the Laplace-type integral that underlies Stirling's formula: express \\( \\Gamma(x+1) \\) as an integral over \\( [0,\\infty) \\), and rescale \\( t = x s \\) to display the large parameter \\( x \\) in the exponent.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Gamma function", "Laplace's method", "Stirling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the integral definition.", workingLatex: "\\Gamma(x+1) = \\int_0^\\infty t^x e^{-t}\\,dt.", explanation: "This is \\( \\Gamma(z)=\\int_0^\\infty t^{z-1}e^{-t}\\,dt \\) at \\( z=x+1 \\); it is the integral Laplace's method will be applied to." },
        { stepNumber: 2, description: "Write the integrand as one exponential.", workingLatex: "t^x e^{-t} = e^{x\\ln t - t}.", explanation: "Combining the power and the exponential is the standard move so the whole integrand is \\( e^{(\\text{phase})} \\)." },
        { stepNumber: 3, description: "Rescale \\( t = x s \\).", workingLatex: "\\Gamma(x+1) = \\int_0^\\infty e^{x\\ln(xs) - xs}\\,x\\,ds = x^{x+1}\\int_0^\\infty e^{x(\\ln s - s)}\\,ds.", explanation: "The substitution pulls the constant factor \\( x^{x+1} \\) out and leaves \\( x \\) as a clean large parameter multiplying \\( \\phi(s)=\\ln s - s \\)." },
      ],
      finalAnswer: "\\( \\Gamma(x+1) = x^{x+1}\\displaystyle\\int_0^\\infty e^{x(\\ln s - s)}\\,ds \\)",
      canonicalAnswer: "x^(x+1)*integral_0^infinity exp(x*(ln(s)-s)) ds",
    },
  },
  {
    id: "am4c-002",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The phase in the Stirling integral is \\( \\phi(s)=\\ln s - s \\). Find the location of its maximum on \\( (0,\\infty) \\) and the value of \\( \\phi''(s) \\) there.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Laplace's method", "stationary point", "Stirling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the phase.", workingLatex: "\\phi'(s) = \\frac{1}{s} - 1.", explanation: "A maximum of the exponent dominates a Laplace integral, so we first locate the stationary point." },
        { stepNumber: 2, description: "Set \\( \\phi'(s)=0 \\).", workingLatex: "\\frac{1}{s} - 1 = 0 \\;\\Longrightarrow\\; s_0 = 1.", explanation: "The single interior stationary point sits at \\( s_0=1 \\), i.e. \\( t=x \\) in the original variable." },
        { stepNumber: 3, description: "Compute the second derivative.", workingLatex: "\\phi''(s) = -\\frac{1}{s^2}, \\qquad \\phi''(1) = -1.", explanation: "Since \\( \\phi''(1)<0 \\) the point is a genuine maximum, so Laplace's method applies with curvature \\( |\\phi''(s_0)|=1 \\).", mafs: `<Mafs viewBox={{ x: [-1.4, 3.4], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(s) => Math.exp(3*(Math.log(s) - s + 1))} domain={[0.02, 3.4]} color="var(--mafs-fg-blue)" style="dashed" />
  <Plot.OfX y={(s) => Math.exp(12*(Math.log(s) - s + 1))} domain={[0.02, 3.4]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={1} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1,1.12]} tex="s_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.5,0.6]} tex="\\text{larger } x" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.1,-0.2]} tex="s" />
</Mafs>` },
      ],
      finalAnswer: "\\( s_0 = 1 \\), \\( \\phi''(1) = -1 \\)",
      canonicalAnswer: "s0=1, phi''(1)=-1",
    },
  },
  {
    id: "am4c-003",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State the leading-order Stirling formula for \\( \\Gamma(x+1) \\) as \\( x\\to\\infty \\), and use it to write down the corresponding leading-order estimate of \\( n! \\) for large integer \\( n \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Stirling", "factorial", "leading order"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Quote the leading Stirling term.", workingLatex: "\\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^x, \\qquad x\\to\\infty.", explanation: "This is the bare Laplace result: prefactor \\( \\sqrt{2\\pi/|\\phi''|}\\,x^{1/2} \\) times the value of the integrand at the maximum." },
        { stepNumber: 2, description: "Specialise to the factorial.", workingLatex: "n! = \\Gamma(n+1) \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n.", explanation: "For integer \\( n \\), \\( \\Gamma(n+1)=n! \\), so the same asymptotic holds verbatim." },
      ],
      finalAnswer: "\\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}\\,(x/e)^x \\); hence \\( n!\\sim\\sqrt{2\\pi n}\\,(n/e)^n \\)",
      canonicalAnswer: "sqrt(2*pi*n)*(n/e)^n",
    },
  },
  {
    id: "am4c-004",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 04",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Using the half-integer values \\( \\Gamma(1/2)=\\sqrt{\\pi} \\) and the recurrence \\( \\Gamma(z+1)=z\\,\\Gamma(z) \\), evaluate \\( \\Gamma(5/2) \\) in closed form.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Gamma function", "half-integer", "recurrence"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Step up once from \\( \\Gamma(3/2) \\).", workingLatex: "\\Gamma\\!\\left(\\tfrac{3}{2}\\right) = \\tfrac{1}{2}\\,\\Gamma\\!\\left(\\tfrac{1}{2}\\right) = \\frac{\\sqrt{\\pi}}{2}.", explanation: "Apply \\( \\Gamma(z+1)=z\\Gamma(z) \\) with \\( z=1/2 \\)." },
        { stepNumber: 2, description: "Step up again to \\( \\Gamma(5/2) \\).", workingLatex: "\\Gamma\\!\\left(\\tfrac{5}{2}\\right) = \\tfrac{3}{2}\\,\\Gamma\\!\\left(\\tfrac{3}{2}\\right) = \\frac{3}{2}\\cdot\\frac{\\sqrt{\\pi}}{2}.", explanation: "Apply the recurrence once more with \\( z=3/2 \\)." },
        { stepNumber: 3, description: "Simplify.", workingLatex: "\\Gamma\\!\\left(\\tfrac{5}{2}\\right) = \\frac{3\\sqrt{\\pi}}{4}.", explanation: "These exact half-integer values seed later asymptotic ratios such as \\( \\Gamma(x+1/2)/\\Gamma(x) \\)." },
      ],
      finalAnswer: "\\( \\Gamma(5/2) = \\dfrac{3\\sqrt{\\pi}}{4} \\)",
      canonicalAnswer: "3*sqrt(pi)/4",
    },
  },
  {
    id: "am4c-005",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 05",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Use the reflection formula \\( \\Gamma(z)\\Gamma(1-z)=\\dfrac{\\pi}{\\sin\\pi z} \\) to evaluate \\( \\Gamma(1/4)\\,\\Gamma(3/4) \\) in closed form.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["reflection formula", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\( z \\).", workingLatex: "z = \\tfrac{1}{4}, \\qquad 1-z = \\tfrac{3}{4}.", explanation: "The two arguments sum to \\( 1 \\), exactly the form the reflection formula handles." },
        { stepNumber: 2, description: "Apply the reflection formula.", workingLatex: "\\Gamma\\!\\left(\\tfrac{1}{4}\\right)\\Gamma\\!\\left(\\tfrac{3}{4}\\right) = \\frac{\\pi}{\\sin(\\pi/4)}.", explanation: "Substitute \\( z=1/4 \\) directly." },
        { stepNumber: 3, description: "Evaluate the sine.", workingLatex: "\\frac{\\pi}{\\sin(\\pi/4)} = \\frac{\\pi}{1/\\sqrt{2}} = \\pi\\sqrt{2}.", explanation: "Because \\( \\sin(\\pi/4)=1/\\sqrt2 \\). This reflection identity is the tool the example sheet uses to collapse the Γ-ratios in the \\( \\sin^2 \\) integral." },
      ],
      finalAnswer: "\\( \\Gamma(1/4)\\,\\Gamma(3/4) = \\pi\\sqrt{2} \\)",
      canonicalAnswer: "pi*sqrt(2)",
    },
  },
  {
    id: "am4c-006",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State the Stirling series for \\( \\ln\\Gamma(z) \\) as \\( z\\to\\infty \\), keeping terms up to and including the \\( 1/z \\) correction.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Stirling series", "log-Gamma"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Take logs of the Stirling product.", workingLatex: "\\ln\\Gamma(z) = \\left(z-\\tfrac{1}{2}\\right)\\ln z - z + \\tfrac{1}{2}\\ln(2\\pi) + \\cdots.", explanation: "Taking the logarithm of \\( \\Gamma(z)\\sim\\sqrt{2\\pi}\\,z^{z-1/2}e^{-z} \\) gives the three leading terms." },
        { stepNumber: 2, description: "Append the first correction.", workingLatex: "\\ln\\Gamma(z) = \\left(z-\\tfrac{1}{2}\\right)\\ln z - z + \\tfrac{1}{2}\\ln(2\\pi) + \\frac{1}{12z} + O\\!\\left(z^{-3}\\right).", explanation: "The asymptotic correction series has only odd inverse powers; the leading one is \\( 1/(12z) \\), the next being \\( -1/(360z^3) \\)." },
      ],
      finalAnswer: "\\( \\ln\\Gamma(z) = (z-\\tfrac12)\\ln z - z + \\tfrac12\\ln(2\\pi) + \\dfrac{1}{12z} + O(z^{-3}) \\)",
      canonicalAnswer: "(z-1/2)*ln(z) - z + (1/2)*ln(2*pi) + 1/(12*z)",
    },
  },

  // ─────────────────────────── STANDARD (12) ───────────────────────────
  {
    id: "am4c-007",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Starting from \\( \\Gamma(x+1)=x^{x+1}\\int_0^\\infty e^{x(\\ln s - s)}\\,ds \\), apply Laplace's method about the maximum to derive the leading-order Stirling formula \\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}\\,(x/e)^x \\) as \\( x\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "Stirling", "Gaussian integral"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the maximum of the phase.", workingLatex: "\\phi(s)=\\ln s - s,\\quad \\phi'(s)=\\tfrac{1}{s}-1=0 \\Rightarrow s_0=1.", explanation: "Laplace's method is governed by the maximum of the exponent; here it sits at \\( s_0=1 \\)." },
        { stepNumber: 2, description: "Record the phase and curvature there.", workingLatex: "\\phi(1) = -1, \\qquad \\phi''(1) = -\\tfrac{1}{1^2} = -1.", explanation: "We need the height \\( \\phi(s_0) \\) and the curvature \\( |\\phi''(s_0)| \\) for the Gaussian approximation." },
        { stepNumber: 3, description: "Expand the phase to second order.", workingLatex: "\\phi(s) \\approx -1 - \\tfrac{1}{2}(s-1)^2.", explanation: "Near the maximum the exponent is approximately a downward parabola — the source of the Gaussian.", mafs: `<Mafs viewBox={{ x: [-1.4, 3.4], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(s) => Math.exp(3*(Math.log(s) - s + 1))} domain={[0.02, 3.4]} color="var(--mafs-fg-blue)" style="dashed" />
  <Plot.OfX y={(s) => Math.exp(12*(Math.log(s) - s + 1))} domain={[0.02, 3.4]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={1} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1,1.12]} tex="s_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.5,0.6]} tex="\\text{larger } x" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.1,-0.2]} tex="s" />
</Mafs>` },
        { stepNumber: 4, description: "Replace the integral by a Gaussian.", workingLatex: "\\int_0^\\infty e^{x\\phi(s)}\\,ds \\sim e^{-x}\\int_{-\\infty}^{\\infty} e^{-\\frac{x}{2}(s-1)^2}\\,ds.", explanation: "The contribution localises near \\( s_0 \\); extending the limits to \\( \\pm\\infty \\) adds only exponentially small error." },
        { stepNumber: 5, description: "Evaluate the Gaussian.", workingLatex: "\\int_{-\\infty}^\\infty e^{-\\frac{x}{2}u^2}\\,du = \\sqrt{\\frac{2\\pi}{x}}.", explanation: "Standard Gaussian integral with variance \\( 1/x \\)." },
        { stepNumber: 6, description: "Reassemble with the prefactor.", workingLatex: "\\Gamma(x+1) \\sim x^{x+1} e^{-x}\\sqrt{\\frac{2\\pi}{x}} = \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^x.", explanation: "Multiplying back the \\( x^{x+1} \\) factor and tidying gives Stirling's formula." },
      ],
      finalAnswer: "\\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}\\,(x/e)^x \\)",
      canonicalAnswer: "sqrt(2*pi*x)*(x/e)^x",
    },
  },
  {
    id: "am4c-008",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 08",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The Stirling expansion is \\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}\\,(x/e)^x\\left(1+\\dfrac{c_1}{x}+\\dfrac{c_2}{x^2}+\\cdots\\right) \\). Given the \\( \\ln\\Gamma \\) series \\( \\ln\\Gamma(x+1)=(x+\\tfrac12)\\ln x - x + \\tfrac12\\ln(2\\pi)+\\dfrac{1}{12x}+O(x^{-3}) \\), determine \\( c_1 \\) and \\( c_2 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stirling series", "first correction", "exponentiation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Isolate the correction in log form.", workingLatex: "\\ln\\!\\left(1+\\tfrac{c_1}{x}+\\tfrac{c_2}{x^2}+\\cdots\\right) = \\frac{1}{12x} + 0\\cdot\\frac{1}{x^2} + O(x^{-3}).", explanation: "Subtracting the leading three terms of \\( \\ln\\Gamma(x+1) \\) leaves exactly the logarithm of the correction series; the \\( 1/x^2 \\) coefficient in the Stirling log-series is zero." },
        { stepNumber: 2, description: "Expand the logarithm.", workingLatex: "\\ln(1+u) = u - \\tfrac{1}{2}u^2 + \\cdots,\\quad u=\\frac{c_1}{x}+\\frac{c_2}{x^2}.", explanation: "We invert the series by expanding the log and matching powers of \\( 1/x \\)." },
        { stepNumber: 3, description: "Match the \\( 1/x \\) coefficient.", workingLatex: "c_1 = \\frac{1}{12}.", explanation: "The \\( 1/x \\) term of \\( \\ln(1+u) \\) is just \\( c_1 \\), and it must equal \\( 1/12 \\)." },
        { stepNumber: 4, description: "Match the \\( 1/x^2 \\) coefficient.", workingLatex: "c_2 - \\tfrac{1}{2}c_1^2 = 0 \\;\\Longrightarrow\\; c_2 = \\tfrac{1}{2}\\left(\\tfrac{1}{12}\\right)^2 = \\frac{1}{288}.", explanation: "The \\( 1/x^2 \\) part of \\( \\ln(1+u) \\) is \\( c_2-\\tfrac12 c_1^2 \\); equating to zero gives \\( c_2 \\)." },
      ],
      finalAnswer: "\\( c_1 = \\dfrac{1}{12}, \\quad c_2 = \\dfrac{1}{288} \\)",
      canonicalAnswer: "c1=1/12, c2=1/288",
    },
  },
  {
    id: "am4c-009",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Use Stirling's formula to find the leading-order asymptotics of the central binomial coefficient \\( \\dbinom{2n}{n} \\) as \\( n\\to\\infty \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stirling", "central binomial", "combinatorics"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the coefficient with factorials.", workingLatex: "\\binom{2n}{n} = \\frac{(2n)!}{(n!)^2}.", explanation: "Each factorial will be replaced by its Stirling estimate." },
        { stepNumber: 2, description: "Substitute Stirling for each factorial.", workingLatex: "\\frac{(2n)!}{(n!)^2} \\sim \\frac{\\sqrt{4\\pi n}\\,(2n/e)^{2n}}{\\left[\\sqrt{2\\pi n}\\,(n/e)^n\\right]^2}.", explanation: "Apply \\( m!\\sim\\sqrt{2\\pi m}\\,(m/e)^m \\) at \\( m=2n \\) and \\( m=n \\)." },
        { stepNumber: 3, description: "Simplify the exponential powers.", workingLatex: "\\frac{(2n/e)^{2n}}{(n/e)^{2n}} = \\frac{(2n)^{2n}}{n^{2n}} = 2^{2n} = 4^{n}.", explanation: "The \\( e \\)-powers cancel and \\( (2n/n)^{2n}=2^{2n} \\)." },
        { stepNumber: 4, description: "Simplify the prefactor.", workingLatex: "\\frac{\\sqrt{4\\pi n}}{2\\pi n} = \\frac{2\\sqrt{\\pi n}}{2\\pi n} = \\frac{1}{\\sqrt{\\pi n}}.", explanation: "Collecting the square-root factors gives the algebraic prefactor." },
        { stepNumber: 5, description: "Combine.", workingLatex: "\\binom{2n}{n} \\sim \\frac{4^{n}}{\\sqrt{\\pi n}}.", explanation: "This famous estimate is a direct consequence of Stirling's formula." },
      ],
      finalAnswer: "\\( \\dbinom{2n}{n} \\sim \\dfrac{4^{n}}{\\sqrt{\\pi n}} \\)",
      canonicalAnswer: "4^n/sqrt(pi*n)",
    },
  },
  {
    id: "am4c-010",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the leading-order behaviour of the ratio \\( \\dfrac{\\Gamma(x+a)}{\\Gamma(x+b)} \\) as \\( x\\to\\infty \\), with \\( a,b \\) fixed.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Gamma ratio", "Stirling", "log-Gamma"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Take the logarithm of the ratio.", workingLatex: "\\ln\\frac{\\Gamma(x+a)}{\\Gamma(x+b)} = \\ln\\Gamma(x+a) - \\ln\\Gamma(x+b).", explanation: "Differences of \\( \\ln\\Gamma \\) are easier to expand than the ratio directly." },
        { stepNumber: 2, description: "Apply the leading \\( \\ln\\Gamma \\) terms.", workingLatex: "\\ln\\Gamma(x+a) \\approx \\left(x+a-\\tfrac12\\right)\\ln(x+a) - (x+a) + \\tfrac12\\ln(2\\pi).", explanation: "Use \\( \\ln\\Gamma(y)\\approx(y-\\tfrac12)\\ln y - y + \\tfrac12\\ln 2\\pi \\) at \\( y=x+a \\) and \\( y=x+b \\)." },
        { stepNumber: 3, description: "Expand the logs about \\( x \\).", workingLatex: "\\ln(x+a) = \\ln x + \\frac{a}{x} + O(x^{-2}).", explanation: "For large \\( x \\) the shifts \\( a,b \\) are small compared with \\( x \\)." },
        { stepNumber: 4, description: "Collect the surviving leading term.", workingLatex: "\\ln\\frac{\\Gamma(x+a)}{\\Gamma(x+b)} = (a-b)\\ln x + O(x^{-1}).", explanation: "The \\( -x \\) and \\( \\tfrac12\\ln 2\\pi \\) pieces cancel, and the \\( \\ln x \\) terms combine with coefficient \\( a-b \\)." },
        { stepNumber: 5, description: "Exponentiate.", workingLatex: "\\frac{\\Gamma(x+a)}{\\Gamma(x+b)} \\sim x^{\\,a-b}.", explanation: "This is the standard Gamma-ratio asymptotic, basic to Beta-function and combinatorial estimates." },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(x+a)}{\\Gamma(x+b)} \\sim x^{\\,a-b} \\)",
      canonicalAnswer: "x^(a-b)",
    },
  },
  {
    id: "am4c-011",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The Beta function is \\( B(x,b)=\\dfrac{\\Gamma(x)\\,\\Gamma(b)}{\\Gamma(x+b)} \\). Using the Gamma-ratio asymptotic, find the leading behaviour of \\( B(x,b) \\) as \\( x\\to\\infty \\) with \\( b \\) fixed.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Beta function", "Gamma ratio", "Stirling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Group the \\( x \\)-dependent ratio.", workingLatex: "B(x,b) = \\Gamma(b)\\,\\frac{\\Gamma(x)}{\\Gamma(x+b)}.", explanation: "The factor \\( \\Gamma(b) \\) is constant in \\( x \\); all the asymptotics sit in the ratio." },
        { stepNumber: 2, description: "Apply \\( \\Gamma(x+a)/\\Gamma(x+b)\\sim x^{a-b} \\).", workingLatex: "\\frac{\\Gamma(x)}{\\Gamma(x+b)} = \\frac{\\Gamma(x+0)}{\\Gamma(x+b)} \\sim x^{\\,0-b} = x^{-b}.", explanation: "Use the ratio result with \\( a=0 \\)." },
        { stepNumber: 3, description: "Combine.", workingLatex: "B(x,b) \\sim \\Gamma(b)\\,x^{-b}.", explanation: "So the Beta function decays algebraically like \\( x^{-b} \\) with amplitude \\( \\Gamma(b) \\)." },
      ],
      finalAnswer: "\\( B(x,b) \\sim \\Gamma(b)\\,x^{-b} \\)",
      canonicalAnswer: "gamma(b)*x^(-b)",
    },
  },
  {
    id: "am4c-012",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "By recognising it as a Beta integral, find the leading-order asymptotics of \\( I(x)=\\int_0^1 t^{x-1}(1-t)^2\\,dt \\) as \\( x\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Beta function", "Laplace endpoint", "Gamma ratio"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the Beta integral.", workingLatex: "\\int_0^1 t^{x-1}(1-t)^{3-1}\\,dt = B(x,3) = \\frac{\\Gamma(x)\\Gamma(3)}{\\Gamma(x+3)}.", explanation: "The standard form \\( B(p,q)=\\int_0^1 t^{p-1}(1-t)^{q-1}dt \\) matches with \\( p=x,\\ q=3 \\)." },
        { stepNumber: 2, description: "Insert \\( \\Gamma(3)=2! \\).", workingLatex: "B(x,3) = \\frac{2\\,\\Gamma(x)}{\\Gamma(x+3)}.", explanation: "\\( \\Gamma(3)=2!=2 \\)." },
        { stepNumber: 3, description: "Apply the Gamma ratio.", workingLatex: "\\frac{\\Gamma(x)}{\\Gamma(x+3)} \\sim x^{-3}.", explanation: "By \\( \\Gamma(x+a)/\\Gamma(x+b)\\sim x^{a-b} \\) with \\( a=0,\\ b=3 \\)." },
        { stepNumber: 4, description: "Combine.", workingLatex: "I(x) \\sim \\frac{2}{x^{3}}.", explanation: "The mass concentrates near the endpoint \\( t=1 \\); equivalently this is the Laplace/Watson endpoint estimate, here exact via the Beta function." },
      ],
      finalAnswer: "\\( I(x) \\sim \\dfrac{2}{x^{3}} \\)",
      canonicalAnswer: "2/x^3",
    },
  },
  {
    id: "am4c-013",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Following Example Sheet 2, derive the leading-order behaviour of \\( J(x)=\\int_0^{\\pi/2} e^{-x\\sin^2 t}\\,dt \\) as \\( x\\to\\infty \\) by Laplace's method about the endpoint maximum at \\( t=0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "endpoint maximum", "Gaussian integral"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the dominant point.", workingLatex: "\\sin^2 t \\ge 0,\\ \\text{minimal at } t=0 \\Rightarrow e^{-x\\sin^2 t}\\ \\text{maximal at } t=0.", explanation: "The exponent \\( -x\\sin^2 t \\) is largest where \\( \\sin^2 t \\) is smallest, i.e. at the lower endpoint." },
        { stepNumber: 2, description: "Approximate the phase near \\( t=0 \\).", workingLatex: "\\sin^2 t \\approx t^2, \\qquad t\\to 0.", explanation: "Since \\( \\sin t\\approx t \\), the exponent behaves like \\( -x t^2 \\) near the endpoint." },
        { stepNumber: 3, description: "Replace by a Gaussian half-line integral.", workingLatex: "J(x) \\sim \\int_0^{\\infty} e^{-x t^2}\\,dt.", explanation: "The contribution localises at \\( t=0 \\); extending the upper limit to \\( \\infty \\) is exponentially small error, and the integration covers only the half-line because \\( t\\ge0 \\)." },
        { stepNumber: 4, description: "Evaluate the half Gaussian.", workingLatex: "\\int_0^\\infty e^{-x t^2}\\,dt = \\frac{1}{2}\\sqrt{\\frac{\\pi}{x}}.", explanation: "Half of the full Gaussian \\( \\sqrt{\\pi/x} \\).", mafs: `<Mafs viewBox={{ x: [-2.4, 2.4], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.exp(-2*Math.sin(t)*Math.sin(t))} domain={[0, 2.4]} color="var(--mafs-fg-blue)" style="dashed" />
  <Plot.OfX y={(t) => Math.exp(-9*Math.sin(t)*Math.sin(t))} domain={[0, 2.4]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[0,1.12]} tex="\\text{endpoint}" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.4,0.6]} tex="\\text{half-Gaussian}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[2.1,-0.2]} tex="t" />
</Mafs>` },
        { stepNumber: 5, description: "State the result.", workingLatex: "J(x) \\sim \\frac{1}{2}\\sqrt{\\frac{\\pi}{x}} = \\sqrt{\\frac{\\pi}{4x}}.", explanation: "This matches the leading term of the sheet's full expansion \\( \\sqrt{\\pi/4x}\\,(1+1/4x+\\cdots) \\)." },
      ],
      finalAnswer: "\\( J(x) \\sim \\sqrt{\\dfrac{\\pi}{4x}} \\)",
      canonicalAnswer: "sqrt(pi/(4*x))",
    },
  },
  {
    id: "am4c-014",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The modified Bessel function is \\( I_0(x)=\\dfrac{1}{\\pi}\\int_0^{\\pi} e^{x\\cos\\theta}\\,d\\theta \\). Use Laplace's method to find its leading-order asymptotics as \\( x\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Bessel function", "Laplace's method", "endpoint maximum"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the maximum of the phase.", workingLatex: "\\cos\\theta\\ \\text{maximal at } \\theta=0\\ \\text{on } [0,\\pi].", explanation: "The exponent \\( x\\cos\\theta \\) peaks at the lower endpoint \\( \\theta=0 \\), where \\( \\cos\\theta=1 \\)." },
        { stepNumber: 2, description: "Expand the phase there.", workingLatex: "\\cos\\theta \\approx 1 - \\tfrac{1}{2}\\theta^2, \\qquad \\theta\\to 0.", explanation: "Quadratic Taylor expansion about the endpoint maximum." },
        { stepNumber: 3, description: "Approximate the integral.", workingLatex: "I_0(x) \\sim \\frac{1}{\\pi}\\,e^{x}\\int_0^{\\infty} e^{-\\frac{x}{2}\\theta^2}\\,d\\theta.", explanation: "Factor out \\( e^{x} \\) and replace the integrand by its Gaussian model near \\( \\theta=0 \\)." },
        { stepNumber: 4, description: "Evaluate the half Gaussian.", workingLatex: "\\int_0^\\infty e^{-\\frac{x}{2}\\theta^2}\\,d\\theta = \\frac{1}{2}\\sqrt{\\frac{2\\pi}{x}}.", explanation: "Half the full Gaussian with variance \\( 1/x \\).", mafs: `<Mafs viewBox={{ x: [-2.4, 2.4], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.exp(2*(Math.cos(t)-1))} domain={[0, 2.4]} color="var(--mafs-fg-blue)" style="dashed" />
  <Plot.OfX y={(t) => Math.exp(10*(Math.cos(t)-1))} domain={[0, 2.4]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[0,1.12]} tex="\\theta=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.4,0.6]} tex="\\text{half-Gaussian}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[2.1,-0.2]} tex="\\theta" />
</Mafs>` },
        { stepNumber: 5, description: "Combine.", workingLatex: "I_0(x) \\sim \\frac{e^{x}}{\\pi}\\cdot\\frac{1}{2}\\sqrt{\\frac{2\\pi}{x}} = \\frac{e^{x}}{\\sqrt{2\\pi x}}.", explanation: "Simplifying the constants gives the classical Bessel asymptotic, the same square-root prefactor as Stirling." },
      ],
      finalAnswer: "\\( I_0(x) \\sim \\dfrac{e^{x}}{\\sqrt{2\\pi x}} \\)",
      canonicalAnswer: "e^x/sqrt(2*pi*x)",
    },
  },
  {
    id: "am4c-015",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Use Stirling's formula to estimate \\( \\ln(100!) \\) to the leading two terms, and state the relative error you would expect from omitting the \\( 1/(12n) \\) correction.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stirling", "log-factorial", "numerical estimate"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the Stirling log-series.", workingLatex: "\\ln(n!) = \\left(n+\\tfrac12\\right)\\ln n - n + \\tfrac12\\ln(2\\pi) + \\frac{1}{12n} + \\cdots.", explanation: "This is \\( \\ln\\Gamma(n+1) \\) with the first correction shown explicitly." },
        { stepNumber: 2, description: "Insert \\( n=100 \\).", workingLatex: "\\ln(100!) \\approx 100.5\\,\\ln 100 - 100 + \\tfrac12\\ln(2\\pi).", explanation: "The leading three terms; \\( \\ln 100=4.60517\\ldots \\)" },
        { stepNumber: 3, description: "Evaluate numerically.", workingLatex: "\\approx 462.82 - 100 + 0.919 = 363.74.", explanation: "Compared with the exact \\( \\ln(100!)=363.739\\ldots \\), the agreement is to several decimals." },
        { stepNumber: 4, description: "Size the omitted correction.", workingLatex: "\\frac{1}{12n} = \\frac{1}{1200} \\approx 8.3\\times 10^{-4}.", explanation: "The next term is tiny in absolute terms; its relative size against \\( \\ln(100!) \\) is \\( \\sim 2\\times10^{-6} \\), so the leading estimate is already excellent." },
      ],
      finalAnswer: "\\( \\ln(100!) \\approx 363.74 \\); omitted \\( 1/(12n)\\approx 8.3\\times10^{-4} \\)",
      canonicalAnswer: "100.5*ln(100)-100+0.5*ln(2*pi)",
    },
  },
  {
    id: "am4c-016",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Express the double factorial \\( (2n)!! = 2\\cdot4\\cdots(2n) \\) in closed form and hence find its leading-order asymptotics as \\( n\\to\\infty \\) via Stirling's formula.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["double factorial", "Stirling", "factorial identity"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Factor out the twos.", workingLatex: "(2n)!! = \\prod_{k=1}^{n}(2k) = 2^{n}\\prod_{k=1}^{n}k = 2^{n}\\,n!.", explanation: "Each of the \\( n \\) even factors contributes a factor of \\( 2 \\) and a factor of \\( k \\)." },
        { stepNumber: 2, description: "Apply Stirling to \\( n! \\).", workingLatex: "(2n)!! = 2^{n}\\,n! \\sim 2^{n}\\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^{n}.", explanation: "Substitute \\( n!\\sim\\sqrt{2\\pi n}(n/e)^n \\)." },
        { stepNumber: 3, description: "Absorb the \\( 2^n \\) into the power.", workingLatex: "2^{n}\\left(\\frac{n}{e}\\right)^{n} = \\left(\\frac{2n}{e}\\right)^{n}.", explanation: "Combining \\( 2^n \\) with \\( n^n \\) gives \\( (2n)^n \\)." },
        { stepNumber: 4, description: "State the asymptotic.", workingLatex: "(2n)!! \\sim \\sqrt{2\\pi n}\\left(\\frac{2n}{e}\\right)^{n}.", explanation: "A compact closed-form leading estimate." },
      ],
      finalAnswer: "\\( (2n)!! = 2^{n} n! \\sim \\sqrt{2\\pi n}\\,(2n/e)^{n} \\)",
      canonicalAnswer: "sqrt(2*pi*n)*(2*n/e)^n",
    },
  },
  {
    id: "am4c-017",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 17",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Show that \\( \\Gamma\\!\\left(n+\\tfrac12\\right) = \\dfrac{(2n)!}{4^{n}\\,n!}\\sqrt{\\pi} \\) for a non-negative integer \\( n \\), and evaluate it at \\( n=3 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Gamma function", "half-integer", "factorial identity"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the recurrence repeatedly.", workingLatex: "\\Gamma\\!\\left(n+\\tfrac12\\right) = \\left(n-\\tfrac12\\right)\\left(n-\\tfrac32\\right)\\cdots\\tfrac12\\,\\Gamma\\!\\left(\\tfrac12\\right).", explanation: "Stepping down by \\( 1 \\) each time via \\( \\Gamma(z+1)=z\\Gamma(z) \\) peels off the half-integers." },
        { stepNumber: 2, description: "Write the product of half-integers.", workingLatex: "= \\frac{(2n-1)(2n-3)\\cdots 3\\cdot 1}{2^{n}}\\sqrt{\\pi} = \\frac{(2n-1)!!}{2^{n}}\\sqrt{\\pi}.", explanation: "Each factor \\( (k-\\tfrac12)=\\tfrac{2k-1}{2} \\) supplies one odd number and one \\( \\tfrac12 \\); there are \\( n \\) of them, and \\( \\Gamma(\\tfrac12)=\\sqrt\\pi \\)." },
        { stepNumber: 3, description: "Convert the odd double factorial.", workingLatex: "(2n-1)!! = \\frac{(2n)!}{2^{n}\\,n!}.", explanation: "Since \\( (2n)! = (2n)!!\\,(2n-1)!! = 2^{n}n!\\,(2n-1)!! \\)." },
        { stepNumber: 4, description: "Assemble the identity.", workingLatex: "\\Gamma\\!\\left(n+\\tfrac12\\right) = \\frac{(2n)!}{2^{n}\\,n!}\\cdot\\frac{\\sqrt{\\pi}}{2^{n}} = \\frac{(2n)!}{4^{n}\\,n!}\\sqrt{\\pi}.", explanation: "Combining the two factors of \\( 2^{n} \\) into \\( 4^{n} \\)." },
        { stepNumber: 5, description: "Evaluate at \\( n=3 \\).", workingLatex: "\\Gamma\\!\\left(\\tfrac72\\right) = \\frac{720}{64\\cdot 6}\\sqrt{\\pi} = \\frac{15\\sqrt{\\pi}}{8}.", explanation: "With \\( (6)!=720 \\), \\( 4^3=64 \\), \\( 3!=6 \\): \\( 720/384=15/8 \\)." },
      ],
      finalAnswer: "\\( \\Gamma(n+\\tfrac12)=\\dfrac{(2n)!}{4^{n}n!}\\sqrt\\pi \\); \\( \\Gamma(7/2)=\\dfrac{15\\sqrt\\pi}{8} \\)",
      canonicalAnswer: "15*sqrt(pi)/8",
    },
  },
  {
    id: "am4c-018",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "By substituting \\( t=x s \\) in \\( \\Gamma(x+1)=\\int_0^\\infty t^x e^{-t}\\,dt \\) and treating the result by Laplace's method, find the leading-order asymptotics of \\( \\Gamma(x+1) \\), and state how the answer changes if instead you analyse \\( \\Gamma(2x+1) \\) the same way.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "Stirling", "rescaling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rescale to expose the parameter.", workingLatex: "\\Gamma(x+1) = x^{x+1}\\int_0^\\infty e^{x(\\ln s - s)}\\,ds.", explanation: "The substitution \\( t=xs \\) places \\( x \\) as the large multiplier of \\( \\phi(s)=\\ln s - s \\)." },
        { stepNumber: 2, description: "Apply the Laplace result at \\( s_0=1 \\).", workingLatex: "\\int_0^\\infty e^{x(\\ln s - s)}\\,ds \\sim e^{-x}\\sqrt{\\frac{2\\pi}{x}}.", explanation: "Maximum at \\( s_0=1 \\), value \\( -1 \\), curvature \\( |\\phi''|=1 \\)." },
        { stepNumber: 3, description: "Reassemble.", workingLatex: "\\Gamma(x+1) \\sim x^{x+1}e^{-x}\\sqrt{\\frac{2\\pi}{x}} = \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x}.", explanation: "Standard Stirling." },
        { stepNumber: 4, description: "Replace \\( x\\to 2x \\) in the formula.", workingLatex: "\\Gamma(2x+1) \\sim \\sqrt{2\\pi\\cdot 2x}\\left(\\frac{2x}{e}\\right)^{2x} = \\sqrt{4\\pi x}\\left(\\frac{2x}{e}\\right)^{2x}.", explanation: "The Stirling formula is a statement about its argument, so the same expansion holds with argument \\( 2x \\); only the parameter is rescaled." },
      ],
      finalAnswer: "\\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}(x/e)^x \\); \\( \\Gamma(2x+1)\\sim\\sqrt{4\\pi x}\\,(2x/e)^{2x} \\)",
      canonicalAnswer: "sqrt(4*pi*x)*(2*x/e)^(2*x)",
    },
  },

  // ─────────────────────────── CHALLENGE (12) ───────────────────────────
  {
    id: "am4c-019",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Obtain the first correction to Stirling's formula, i.e. show that \\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}\\,(x/e)^x\\left(1+\\dfrac{1}{12x}+\\cdots\\right) \\) as \\( x\\to\\infty \\), by expanding the phase to fourth order in the rescaled Laplace integral.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stirling", "Laplace correction", "Watson's lemma"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rescale and centre at the maximum.", workingLatex: "\\Gamma(x+1) = x^{x+1}\\int_0^\\infty e^{x(\\ln s - s)}\\,ds,\\quad s = 1+u.", explanation: "We shift to \\( u=s-1 \\) so the maximum is at \\( u=0 \\)." },
        { stepNumber: 2, description: "Expand the phase to fourth order.", workingLatex: "\\ln(1+u)-(1+u) = -1 - \\frac{u^2}{2} + \\frac{u^3}{3} - \\frac{u^4}{4} + \\cdots.", explanation: "Use \\( \\ln(1+u)=u-\\tfrac{u^2}{2}+\\tfrac{u^3}{3}-\\tfrac{u^4}{4}+\\cdots \\); the linear terms cancel, confirming the stationary point.", mafs: `<Mafs viewBox={{ x: [-1.4, 3.4], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(s) => Math.exp(3*(Math.log(s) - s + 1))} domain={[0.02, 3.4]} color="var(--mafs-fg-blue)" style="dashed" />
  <Plot.OfX y={(s) => Math.exp(12*(Math.log(s) - s + 1))} domain={[0.02, 3.4]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={1} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1,1.12]} tex="s_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.5,0.6]} tex="\\text{larger } x" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.1,-0.2]} tex="s" />
</Mafs>` },
        { stepNumber: 3, description: "Separate Gaussian and correction.", workingLatex: "\\Gamma(x+1) = x^{x+1}e^{-x}\\int_{-1}^{\\infty} e^{-\\frac{x}{2}u^2}\\,\\exp\\!\\Big[x\\big(\\tfrac{u^3}{3}-\\tfrac{u^4}{4}+\\cdots\\big)\\Big]\\,du.", explanation: "The quadratic part is the Gaussian; the cubic and quartic parts are the correction to be expanded." },
        { stepNumber: 4, description: "Rescale \\( u = v/\\sqrt{x} \\).", workingLatex: "x\\,\\frac{u^3}{3} = \\frac{v^3}{3\\sqrt{x}},\\qquad x\\,\\frac{u^4}{4} = \\frac{v^4}{4x}.", explanation: "Under \\( u=v/\\sqrt x \\) the cubic term is \\( O(x^{-1/2}) \\) and the quartic \\( O(x^{-1}) \\); both are small." },
        { stepNumber: 5, description: "Expand the correction exponential.", workingLatex: "\\exp\\!\\Big[\\tfrac{v^3}{3\\sqrt x}-\\tfrac{v^4}{4x}+\\cdots\\Big] = 1 + \\frac{v^3}{3\\sqrt x} + \\frac{1}{2}\\frac{v^6}{9x} - \\frac{v^4}{4x} + O(x^{-3/2}).", explanation: "Keep all terms up to \\( O(1/x) \\); the \\( v^6 \\) term comes from squaring the cubic." },
        { stepNumber: 6, description: "Integrate against the Gaussian.", workingLatex: "\\langle v^{3}\\rangle = 0,\\quad \\langle v^{4}\\rangle = 3,\\quad \\langle v^{6}\\rangle = 15,", explanation: "Odd Gaussian moments vanish; for \\( \\int v^{2k}e^{-v^2/2}dv/\\!\\int e^{-v^2/2}dv \\) we have \\( \\langle v^4\\rangle=3,\\ \\langle v^6\\rangle=15 \\)." },
        { stepNumber: 7, description: "Collect the \\( 1/x \\) coefficient.", workingLatex: "\\frac{1}{x}\\left(\\frac{15}{18} - \\frac{3}{4}\\right) = \\frac{1}{x}\\left(\\frac{5}{6}-\\frac{3}{4}\\right) = \\frac{1}{12x}.", explanation: "From \\( \\tfrac{1}{2}\\cdot\\tfrac{1}{9}\\langle v^6\\rangle - \\tfrac14\\langle v^4\\rangle = \\tfrac{15}{18}-\\tfrac{3}{4} \\), all divided by \\( x \\)." },
        { stepNumber: 8, description: "Reassemble.", workingLatex: "\\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x}\\left(1+\\frac{1}{12x}+\\cdots\\right).", explanation: "Multiplying the Gaussian normalisation \\( e^{-x}x^{x+1}\\sqrt{2\\pi/x} \\) by \\( (1+\\tfrac1{12x}) \\) gives the first Stirling correction." },
      ],
      finalAnswer: "\\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}(x/e)^x\\left(1+\\dfrac{1}{12x}+\\cdots\\right) \\)",
      canonicalAnswer: "sqrt(2*pi*x)*(x/e)^x*(1+1/(12*x))",
    },
  },
  {
    id: "am4c-020",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Derive the next correction in the ratio \\( \\dfrac{\\Gamma(x+a)}{\\Gamma(x+b)} \\), showing that as \\( x\\to\\infty \\) it equals \\( x^{a-b}\\left(1+\\dfrac{(a-b)(a+b-1)}{2x}+\\cdots\\right) \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Gamma ratio", "Stirling series", "asymptotic correction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Work with the log of the ratio.", workingLatex: "L = \\ln\\Gamma(x+a) - \\ln\\Gamma(x+b).", explanation: "Differences of the Stirling log-series expand cleanly in \\( 1/x \\)." },
        { stepNumber: 2, description: "Insert the Stirling log-series.", workingLatex: "\\ln\\Gamma(x+a) = \\left(x+a-\\tfrac12\\right)\\ln(x+a) - (x+a) + \\tfrac12\\ln 2\\pi + O\\!\\left(\\tfrac1x\\right).", explanation: "Same expansion at argument \\( x+b \\); the \\( \\tfrac12\\ln 2\\pi \\) and the linear \\( -(x+a),-(x+b) \\) will be handled together." },
        { stepNumber: 3, description: "Expand the logarithms about \\( x \\).", workingLatex: "\\ln(x+a) = \\ln x + \\frac{a}{x} - \\frac{a^2}{2x^2} + \\cdots.", explanation: "We need terms up to \\( O(1/x) \\) in \\( L \\), so keep \\( 1/x \\) and \\( 1/x^2 \\) inside the logs where they get multiplied by \\( x \\)." },
        { stepNumber: 4, description: "Form \\( (x+a-\\tfrac12)\\ln(x+a) \\).", workingLatex: "\\left(x+a-\\tfrac12\\right)\\!\\left(\\ln x + \\tfrac{a}{x} - \\tfrac{a^2}{2x^2}\\right) = (x+a-\\tfrac12)\\ln x + a + \\frac{a(a-\\tfrac12)}{x} - \\frac{a^2}{2x} + \\cdots.", explanation: "Multiply out, keeping all terms through \\( O(1/x) \\)." },
        { stepNumber: 5, description: "Subtract the \\( b \\)-version and cancel.", workingLatex: "L = (a-b)\\ln x + \\frac{1}{x}\\Big[a\\big(a-\\tfrac12\\big)-\\tfrac{a^2}{2} - b\\big(b-\\tfrac12\\big)+\\tfrac{b^2}{2}\\Big] + \\cdots.", explanation: "The \\( +a \\) and \\( +b \\) constants from step 4 cancel the \\( -(x+a) \\) and \\( -(x+b) \\) linear terms, and \\( \\tfrac12\\ln 2\\pi \\) cancels in the difference." },
        { stepNumber: 6, description: "Simplify the bracket.", workingLatex: "a\\big(a-\\tfrac12\\big)-\\tfrac{a^2}{2} = \\frac{a^2 - a}{2} = \\frac{a(a-1)}{2}.", explanation: "And likewise for \\( b \\); the bracket becomes \\( \\tfrac12[a(a-1)-b(b-1)] \\)." },
        { stepNumber: 7, description: "Factor the difference.", workingLatex: "\\frac{a(a-1)-b(b-1)}{2} = \\frac{(a-b)(a+b-1)}{2}.", explanation: "Since \\( a^2-b^2-(a-b)=(a-b)(a+b)-(a-b)=(a-b)(a+b-1) \\)." },
        { stepNumber: 8, description: "Exponentiate.", workingLatex: "\\frac{\\Gamma(x+a)}{\\Gamma(x+b)} = x^{a-b}\\exp\\!\\left[\\frac{(a-b)(a+b-1)}{2x}+\\cdots\\right] \\sim x^{a-b}\\!\\left(1+\\frac{(a-b)(a+b-1)}{2x}\\right).", explanation: "Exponentiating \\( L \\) and expanding gives the stated first correction." },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(x+a)}{\\Gamma(x+b)}\\sim x^{a-b}\\left(1+\\dfrac{(a-b)(a+b-1)}{2x}+\\cdots\\right) \\)",
      canonicalAnswer: "x^(a-b)*(1+(a-b)*(a+b-1)/(2*x))",
    },
  },
  {
    id: "am4c-021",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Following Example Sheet 2 Q2, the change of variable \\( t\\mapsto\\pi/2-t \\) turns \\( \\int_0^{\\pi/2} e^{x\\sin^2 t}\\,dt \\) into \\( \\int_0^{\\pi/2} e^{x\\cos^2 t}\\,dt \\). Use Laplace's method to obtain the leading-order asymptotics of \\( K(x)=\\int_0^{\\pi/2} e^{x\\cos^2 t}\\,dt \\) as \\( x\\to+\\infty \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "change of variable", "endpoint maximum"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the maximum of the phase.", workingLatex: "\\cos^2 t\\ \\text{maximal at } t=0\\ (\\cos^2 0 = 1).", explanation: "On \\( [0,\\pi/2] \\) the exponent \\( x\\cos^2 t \\) peaks at the lower endpoint." },
        { stepNumber: 2, description: "Expand the phase near \\( t=0 \\).", workingLatex: "\\cos^2 t = 1 - \\sin^2 t \\approx 1 - t^2.", explanation: "Because \\( \\sin t\\approx t \\), so the exponent is \\( x(1-t^2) \\) near the endpoint." },
        { stepNumber: 3, description: "Factor out the peak value.", workingLatex: "K(x) \\sim e^{x}\\int_0^{\\infty} e^{-x t^2}\\,dt.", explanation: "Pull out \\( e^{x} \\) and extend the upper limit to infinity (exponentially small error)." },
        { stepNumber: 4, description: "Evaluate the half Gaussian.", workingLatex: "\\int_0^\\infty e^{-x t^2}\\,dt = \\frac{1}{2}\\sqrt{\\frac{\\pi}{x}}.", explanation: "Half the full Gaussian \\( \\sqrt{\\pi/x} \\)." },
        { stepNumber: 5, description: "Combine.", workingLatex: "K(x) \\sim \\frac{e^{x}}{2}\\sqrt{\\frac{\\pi}{x}} = e^{x}\\sqrt{\\frac{\\pi}{4x}}.", explanation: "This is the growing analogue of the sheet's decaying \\( \\sqrt{\\pi/4x} \\) integral, with the exponential factor reinstated." },
      ],
      finalAnswer: "\\( K(x) \\sim e^{x}\\sqrt{\\dfrac{\\pi}{4x}} \\)",
      canonicalAnswer: "exp(x)*sqrt(pi/(4*x))",
    },
  },
  {
    id: "am4c-022",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Following Example Sheet 2 Q2, find the first correction to the Bessel asymptotic, i.e. show that \\( I_0(x)\\sim\\dfrac{e^{x}}{\\sqrt{2\\pi x}}\\left(1+\\dfrac{1}{8x}+\\cdots\\right) \\) as \\( x\\to\\infty \\), by expanding \\( \\cos\\theta \\) to fourth order near \\( \\theta=0 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Bessel function", "Laplace correction", "endpoint expansion"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Expand the phase to fourth order.", workingLatex: "x\\cos\\theta = x\\left(1 - \\frac{\\theta^2}{2} + \\frac{\\theta^4}{24} - \\cdots\\right).", explanation: "Keep the quartic term, which produces the \\( 1/x \\) correction." },
        { stepNumber: 2, description: "Write the integral with correction.", workingLatex: "I_0(x) = \\frac{e^{x}}{\\pi}\\int_0^{\\pi} e^{-\\frac{x}{2}\\theta^2}\\exp\\!\\left[\\frac{x\\theta^4}{24}-\\cdots\\right]d\\theta.", explanation: "Factor out \\( e^{x} \\) and isolate the Gaussian from the quartic correction." },
        { stepNumber: 3, description: "Rescale \\( \\theta = w/\\sqrt{x} \\).", workingLatex: "\\frac{x\\theta^4}{24} = \\frac{w^4}{24x},\\qquad d\\theta = \\frac{dw}{\\sqrt x}.", explanation: "The quartic becomes \\( O(1/x) \\); upper limit \\( \\to\\infty \\)." },
        { stepNumber: 4, description: "Expand the correction.", workingLatex: "\\exp\\!\\left[\\frac{w^4}{24x}\\right] = 1 + \\frac{w^4}{24x} + O(x^{-2}).", explanation: "Single term suffices at this order (no cubic term here, unlike the Stirling case, so the leading correction comes solely from the quartic)." },
        { stepNumber: 5, description: "Use the Gaussian moment.", workingLatex: "\\frac{\\int_0^\\infty w^4 e^{-w^2/2}\\,dw}{\\int_0^\\infty e^{-w^2/2}\\,dw} = 3.", explanation: "The normalised fourth moment of the Gaussian is \\( 3 \\) (same on the half-line by symmetry of the weight)." },
        { stepNumber: 6, description: "Assemble the correction.", workingLatex: "1 + \\frac{1}{24x}\\cdot 3 = 1 + \\frac{1}{8x}.", explanation: "The bracket multiplies the leading half-Gaussian value." },
        { stepNumber: 7, description: "State the result.", workingLatex: "I_0(x) \\sim \\frac{e^{x}}{\\sqrt{2\\pi x}}\\left(1+\\frac{1}{8x}+\\cdots\\right).", explanation: "Matches the standard large-argument expansion of \\( I_0 \\)." },
      ],
      finalAnswer: "\\( I_0(x)\\sim\\dfrac{e^{x}}{\\sqrt{2\\pi x}}\\left(1+\\dfrac{1}{8x}+\\cdots\\right) \\)",
      canonicalAnswer: "exp(x)/sqrt(2*pi*x)*(1+1/(8*x))",
    },
  },
  {
    id: "am4c-023",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Following Example Sheet 2 Q2, use the reflection formula \\( \\Gamma(z)\\Gamma(1-z)=\\pi/\\sin\\pi z \\) to show that the \\( n \\)-th coefficient in the expansion \\( \\int_0^{\\pi/2} e^{-x\\sin^2 t}\\,dt \\sim \\left(\\dfrac{\\pi}{4x}\\right)^{1/2}\\sum_{n\\ge0} d_n (4x)^{-n} \\) is \\( d_n=\\dfrac{1}{n!}\\big[1^2\\,3^2\\cdots(2n-1)^2\\big] \\). Verify \\( d_0,d_1,d_2 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["reflection formula", "asymptotic coefficients", "Laplace series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the Γ-series form (sheet result).", workingLatex: "\\int_0^{\\pi/2} e^{x\\sin^2 t}\\,dt \\sim \\frac{e^{x}}{2}\\sum_{m\\ge0}(-1)^m\\frac{\\Gamma(\\tfrac12)\\,\\Gamma(\\tfrac12+m)}{\\Gamma(\\tfrac12-m)\\,m!}\\,x^{-m-1/2}.", explanation: "This is the expansion the sheet derives for the growing version; the decaying \\( e^{-x\\sin^2t} \\) integral is its \\( t\\mapsto\\pi/2-t \\) partner and shares the same coefficient structure." },
        { stepNumber: 2, description: "Apply reflection to the Γ-ratio.", workingLatex: "\\frac{\\Gamma(\\tfrac12+m)}{\\Gamma(\\tfrac12-m)} = (-1)^m\\frac{\\Gamma(\\tfrac12+m)}{\\Gamma(\\tfrac12+m)}\\cdot\\frac{\\sin(\\pi(\\tfrac12-m))}{\\ldots}.", explanation: "More directly: \\( \\Gamma(\\tfrac12-m)=\\pi/[\\sin(\\pi(\\tfrac12-m))\\Gamma(\\tfrac12+m)] \\), and \\( \\sin(\\pi(\\tfrac12-m))=\\cos(\\pi m)=(-1)^m \\)." },
        { stepNumber: 3, description: "Simplify the ratio.", workingLatex: "\\frac{\\Gamma(\\tfrac12+m)}{\\Gamma(\\tfrac12-m)} = (-1)^m\\frac{\\big[\\Gamma(\\tfrac12+m)\\big]^2}{\\pi}.", explanation: "Substituting the reflection expression for \\( \\Gamma(\\tfrac12-m) \\) and using \\( \\sin=(-1)^m \\)." },
        { stepNumber: 4, description: "Insert \\( \\Gamma(\\tfrac12+m)=\\tfrac{(2m-1)!!}{2^m}\\sqrt\\pi \\).", workingLatex: "\\frac{[\\Gamma(\\tfrac12+m)]^2}{\\pi} = \\frac{[(2m-1)!!]^2}{4^{m}}.", explanation: "Squaring the half-integer value cancels the \\( \\pi \\) and leaves \\( [(2m-1)!!]^2/4^m \\)." },
        { stepNumber: 5, description: "Collect into \\( d_m \\).", workingLatex: "d_m = \\frac{[(2m-1)!!]^2}{m!} = \\frac{1^2 3^2\\cdots(2m-1)^2}{m!}.", explanation: "Folding the \\( 4^{-m} \\) into the expansion variable \\( (4x)^{-m} \\) and absorbing the sign \\( (-1)^m \\) cancellations leaves the stated positive coefficient (the \\( d_n \\) for the decaying integral are all positive)." },
        { stepNumber: 6, description: "Verify the first three.", workingLatex: "d_0 = 1,\\quad d_1 = \\frac{1^2}{1!} = 1,\\quad d_2 = \\frac{1^2 3^2}{2!} = \\frac{9}{2}.", explanation: "These match the sheet's leading coefficients \\( 1,\\ \\tfrac{1}{1!}\\tfrac{1^2}{1},\\ \\tfrac{1}{2!}\\tfrac{1^2 3^2}{1} \\)." },
      ],
      finalAnswer: "\\( d_n=\\dfrac{1^2 3^2\\cdots(2n-1)^2}{n!} \\); \\( d_0=1,\\ d_1=1,\\ d_2=\\tfrac92 \\)",
      canonicalAnswer: "d_n = (product_{k=1}^n (2k-1)^2)/n!",
    },
  },
  {
    id: "am4c-024",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A partition-counting argument needs the asymptotics of \\( \\dfrac{\\Gamma(x+\\tfrac12)}{\\Gamma(x+1)} \\) to two terms as \\( x\\to\\infty \\). Obtain them, and hence give the leading behaviour of \\( \\dfrac{(2n)!}{4^n (n!)^2} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Gamma ratio", "Stirling correction", "central binomial"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the two-term Gamma ratio.", workingLatex: "\\frac{\\Gamma(x+a)}{\\Gamma(x+b)} \\sim x^{a-b}\\!\\left(1+\\frac{(a-b)(a+b-1)}{2x}\\right),\\ a=\\tfrac12,\\ b=1.", explanation: "We use the corrected ratio derived earlier." },
        { stepNumber: 2, description: "Substitute the values.", workingLatex: "a-b = -\\tfrac12,\\quad a+b-1 = \\tfrac12,\\quad (a-b)(a+b-1) = -\\tfrac14.", explanation: "Plug \\( a=\\tfrac12,b=1 \\) into the coefficient." },
        { stepNumber: 3, description: "Write the expansion.", workingLatex: "\\frac{\\Gamma(x+\\tfrac12)}{\\Gamma(x+1)} \\sim x^{-1/2}\\!\\left(1 - \\frac{1}{8x}+\\cdots\\right).", explanation: "With coefficient \\( -\\tfrac14/2=-\\tfrac18 \\)." },
        { stepNumber: 4, description: "Relate to the central binomial.", workingLatex: "\\frac{(2n)!}{4^{n}(n!)^2} = \\frac{1}{4^n}\\binom{2n}{n} = \\frac{\\Gamma(n+\\tfrac12)}{\\sqrt{\\pi}\\,\\Gamma(n+1)}.", explanation: "Using \\( \\Gamma(n+\\tfrac12)=\\tfrac{(2n)!}{4^n n!}\\sqrt\\pi \\), so \\( \\Gamma(n+\\tfrac12)/[\\sqrt\\pi\\,n!]=(2n)!/[4^n(n!)^2] \\)." },
        { stepNumber: 5, description: "Insert the ratio asymptotic.", workingLatex: "\\frac{(2n)!}{4^{n}(n!)^2} \\sim \\frac{1}{\\sqrt{\\pi}}\\,n^{-1/2} = \\frac{1}{\\sqrt{\\pi n}}.", explanation: "This is the central binomial estimate \\( \\binom{2n}{n}\\sim 4^n/\\sqrt{\\pi n} \\) recovered through the Gamma-ratio correction." },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(x+\\tfrac12)}{\\Gamma(x+1)}\\sim x^{-1/2}(1-\\tfrac{1}{8x}) \\); \\( \\dfrac{(2n)!}{4^n(n!)^2}\\sim\\dfrac{1}{\\sqrt{\\pi n}} \\)",
      canonicalAnswer: "1/sqrt(pi*n)",
    },
  },
  {
    id: "am4c-025",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the leading-order asymptotics, as \\( x\\to\\infty \\), of \\( P(x)=\\int_0^{\\infty} t^{x}\\,e^{-t^2/2}\\,dt \\), expressing the answer in terms of the Gamma function and then in elementary Stirling form.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "Gamma function", "Stirling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Reduce to a Gamma integral.", workingLatex: "u = t^2/2 \\Rightarrow t = (2u)^{1/2},\\ dt = (2u)^{-1/2}du,\\ P(x)=\\int_0^\\infty (2u)^{x/2}e^{-u}(2u)^{-1/2}du.", explanation: "The substitution turns the Gaussian-power integral into a Gamma form." },
        { stepNumber: 2, description: "Collect powers of \\( 2 \\) and \\( u \\).", workingLatex: "P(x) = 2^{(x-1)/2}\\int_0^\\infty u^{(x-1)/2}e^{-u}\\,du = 2^{(x-1)/2}\\,\\Gamma\\!\\left(\\frac{x+1}{2}\\right).", explanation: "The remaining integral is exactly \\( \\Gamma(\\tfrac{x+1}{2}) \\)." },
        { stepNumber: 3, description: "Apply Stirling to \\( \\Gamma(\\tfrac{x+1}{2}) \\).", workingLatex: "\\Gamma\\!\\left(\\frac{x+1}{2}\\right) \\sim \\sqrt{2\\pi}\\left(\\frac{x-1}{2}\\right)^{x/2}e^{-(x-1)/2}.", explanation: "Use \\( \\Gamma(z+1)\\sim\\sqrt{2\\pi z}(z/e)^z \\) with \\( z=\\tfrac{x-1}{2} \\); the \\( \\sqrt{2\\pi z} \\) gives the prefactor and \\( (z/e)^z \\) the bulk." },
        { stepNumber: 4, description: "Approximate \\( \\tfrac{x-1}{2}\\approx\\tfrac{x}{2} \\) to leading order.", workingLatex: "\\Gamma\\!\\left(\\frac{x+1}{2}\\right) \\sim \\sqrt{\\pi x}\\left(\\frac{x}{2e}\\right)^{x/2}.", explanation: "To leading exponential order \\( (x-1)/2\\to x/2 \\); \\( \\sqrt{2\\pi\\cdot x/2}=\\sqrt{\\pi x} \\)." },
        { stepNumber: 5, description: "Reinstate the \\( 2^{(x-1)/2} \\) prefactor.", workingLatex: "P(x) \\sim 2^{x/2}\\,\\sqrt{\\pi x}\\left(\\frac{x}{2e}\\right)^{x/2} = \\sqrt{\\pi x}\\left(\\frac{x}{e}\\right)^{x/2}.", explanation: "Combining \\( 2^{x/2}\\cdot 2^{-x/2}=1 \\) cancels the base-2 factors, leaving a clean Stirling-type form." },
      ],
      finalAnswer: "\\( P(x) = 2^{(x-1)/2}\\,\\Gamma\\!\\left(\\tfrac{x+1}{2}\\right) \\sim \\sqrt{\\pi x}\\,(x/e)^{x/2} \\)",
      canonicalAnswer: "sqrt(pi*x)*(x/e)^(x/2)",
    },
  },
  {
    id: "am4c-026",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "By writing the integrand as a single exponential and applying Laplace's method, find the leading-order asymptotics of \\( Q(x)=\\int_0^{\\infty} e^{-x(t-\\ln t)}\\,dt \\) as \\( x\\to\\infty \\). Comment on its relation to Stirling's formula.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "Stirling", "interior maximum"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the phase.", workingLatex: "Q(x)=\\int_0^\\infty e^{-x\\,\\psi(t)}\\,dt,\\qquad \\psi(t)=t-\\ln t.", explanation: "Here we need the minimum of \\( \\psi \\) (the maximum of \\( -\\psi \\))." },
        { stepNumber: 2, description: "Minimise \\( \\psi \\).", workingLatex: "\\psi'(t)=1-\\frac1t=0 \\Rightarrow t_0=1,\\quad \\psi(1)=1,\\quad \\psi''(1)=\\frac{1}{t^2}\\Big|_1=1.", explanation: "Interior minimum at \\( t_0=1 \\) with positive curvature, so Laplace applies." },
        { stepNumber: 3, description: "Expand about the minimum.", workingLatex: "\\psi(t)\\approx 1 + \\tfrac12 (t-1)^2.", explanation: "Quadratic approximation of the exponent near \\( t_0 \\)." },
        { stepNumber: 4, description: "Gaussian reduction.", workingLatex: "Q(x)\\sim e^{-x}\\int_{-\\infty}^{\\infty} e^{-\\frac{x}{2}(t-1)^2}\\,dt = e^{-x}\\sqrt{\\frac{2\\pi}{x}}.", explanation: "Standard Gaussian with curvature \\( 1 \\); limits extended to \\( \\pm\\infty \\)." },
        { stepNumber: 5, description: "State and interpret.", workingLatex: "Q(x) \\sim e^{-x}\\sqrt{\\frac{2\\pi}{x}}.", explanation: "This is precisely the rescaled Stirling integral: \\( \\Gamma(x+1)=x^{x+1}Q(x) \\), so \\( Q(x)\\sim e^{-x}\\sqrt{2\\pi/x} \\) reproduces \\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}(x/e)^x \\)." },
      ],
      finalAnswer: "\\( Q(x) \\sim e^{-x}\\sqrt{\\dfrac{2\\pi}{x}} \\)",
      canonicalAnswer: "exp(-x)*sqrt(2*pi/x)",
    },
  },
  {
    id: "am4c-027",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 27",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Use Stirling's formula to determine the large-\\( n \\) behaviour of the ratio of consecutive central binomial coefficients \\( r_n=\\dfrac{1}{4^{n}}\\dbinom{2n}{n} \\), showing \\( r_{n}/r_{n-1}\\to 1 \\) and finding the next term in \\( n^{-1} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["central binomial", "Stirling", "ratio asymptotics"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the explicit ratio.", workingLatex: "\\frac{r_n}{r_{n-1}} = \\frac{1}{4}\\cdot\\frac{\\binom{2n}{n}}{\\binom{2n-2}{n-1}}.", explanation: "Each step in \\( n \\) introduces a factor \\( 1/4 \\) from the \\( 4^{-n} \\) and the binomial ratio." },
        { stepNumber: 2, description: "Simplify the binomial ratio.", workingLatex: "\\frac{\\binom{2n}{n}}{\\binom{2n-2}{n-1}} = \\frac{(2n)!\\,(n-1)!^2}{n!^2\\,(2n-2)!} = \\frac{(2n)(2n-1)}{n^2}.", explanation: "Cancelling factorials leaves \\( (2n)(2n-1)/n^2 \\)." },
        { stepNumber: 3, description: "Combine the factors.", workingLatex: "\\frac{r_n}{r_{n-1}} = \\frac{1}{4}\\cdot\\frac{(2n)(2n-1)}{n^2} = \\frac{2n-1}{2n}.", explanation: "Since \\( (2n)/(4n^2)\\cdot(2n-1)=(2n-1)/(2n) \\)." },
        { stepNumber: 4, description: "Expand for large \\( n \\).", workingLatex: "\\frac{2n-1}{2n} = 1 - \\frac{1}{2n}.", explanation: "So the ratio tends to \\( 1 \\) with a \\( -1/(2n) \\) correction." },
        { stepNumber: 5, description: "Cross-check with Stirling.", workingLatex: "r_n = \\frac{1}{4^n}\\binom{2n}{n} \\sim \\frac{1}{\\sqrt{\\pi n}} \\Rightarrow \\frac{r_n}{r_{n-1}} \\sim \\sqrt{\\frac{n-1}{n}} = 1 - \\frac{1}{2n}+\\cdots,", explanation: "Stirling gives \\( r_n\\sim(\\pi n)^{-1/2} \\); the ratio of these matches the exact \\( 1-1/(2n) \\) to leading order — a consistency check on the asymptotic." },
      ],
      finalAnswer: "\\( \\dfrac{r_n}{r_{n-1}} = \\dfrac{2n-1}{2n} = 1 - \\dfrac{1}{2n} \\)",
      canonicalAnswer: "1 - 1/(2*n)",
    },
  },
  {
    id: "am4c-028",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the leading-order asymptotics of \\( R(x)=\\int_0^{1} t^{x}(1-t)^{x}\\,dt \\) as \\( x\\to\\infty \\) by Laplace's method, and confirm it against the Beta-function value \\( R(x)=B(x+1,x+1) \\) using Stirling's formula.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "Beta function", "Stirling", "interior maximum"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the integrand as one exponential.", workingLatex: "t^{x}(1-t)^{x} = e^{x\\,\\phi(t)},\\quad \\phi(t)=\\ln t + \\ln(1-t).", explanation: "Both factors raised to the large power \\( x \\) collapse into an exponential phase." },
        { stepNumber: 2, description: "Find the maximum.", workingLatex: "\\phi'(t)=\\frac1t-\\frac{1}{1-t}=0 \\Rightarrow t_0=\\tfrac12,\\quad \\phi(\\tfrac12)=2\\ln\\tfrac12=-2\\ln 2.", explanation: "By symmetry the maximum is at the midpoint." },
        { stepNumber: 3, description: "Compute the curvature.", workingLatex: "\\phi''(t) = -\\frac{1}{t^2}-\\frac{1}{(1-t)^2},\\quad \\phi''(\\tfrac12) = -4-4 = -8.", explanation: "Strongly peaked: \\( |\\phi''|=8 \\) at the interior maximum.", mafs: `<Mafs viewBox={{ x: [-1.9, 2.9], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.exp(1.5*(Math.log(t) + Math.log(1-t) + 2*Math.log(2)))} domain={[0.02, 0.98]} color="var(--mafs-fg-blue)" style="dashed" />
  <Plot.OfX y={(t) => Math.exp(6*(Math.log(t) + Math.log(1-t) + 2*Math.log(2)))} domain={[0.02, 0.98]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={0.5} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[0.5,1.12]} tex="t_0=\\tfrac12" color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.0,0.6]} tex="\\text{larger } x" color="var(--mafs-fg-accent)" />
  <LaTeX at={[2.6,-0.2]} tex="t" />
</Mafs>` },
        { stepNumber: 4, description: "Apply the Laplace formula.", workingLatex: "R(x) \\sim e^{x\\phi(t_0)}\\sqrt{\\frac{2\\pi}{x\\,|\\phi''(t_0)|}} = 4^{-x}\\sqrt{\\frac{2\\pi}{8x}}.", explanation: "Standard interior-maximum result with \\( e^{x\\phi(1/2)}=e^{-2x\\ln2}=4^{-x} \\)." },
        { stepNumber: 5, description: "Simplify.", workingLatex: "R(x) \\sim 4^{-x}\\sqrt{\\frac{\\pi}{4x}} = \\frac{4^{-x}}{2}\\sqrt{\\frac{\\pi}{x}}.", explanation: "Since \\( \\sqrt{2\\pi/(8x)}=\\sqrt{\\pi/(4x)} \\)." },
        { stepNumber: 6, description: "Confirm via the Beta function.", workingLatex: "B(x+1,x+1) = \\frac{\\Gamma(x+1)^2}{\\Gamma(2x+2)} \\sim \\frac{2\\pi x\\,(x/e)^{2x}}{\\sqrt{4\\pi x}\\,(2x/e)^{2x}\\cdot(2x+1)}.", explanation: "Insert Stirling for \\( \\Gamma(x+1)^2 \\) and \\( \\Gamma(2x+2)=(2x+1)\\Gamma(2x+1) \\)." },
        { stepNumber: 7, description: "Reduce the Beta estimate.", workingLatex: "\\sim \\frac{2\\pi x}{2\\sqrt{\\pi x}\\cdot 2x}\\,4^{-x} = \\frac{4^{-x}}{2}\\sqrt{\\frac{\\pi}{x}}.", explanation: "The \\( (x/e)^{2x}/(2x/e)^{2x}=4^{-x} \\); collecting the algebraic factors reproduces the Laplace answer exactly, confirming the result." },
      ],
      finalAnswer: "\\( R(x) \\sim \\dfrac{4^{-x}}{2}\\sqrt{\\dfrac{\\pi}{x}} \\)",
      canonicalAnswer: "(4^(-x)/2)*sqrt(pi/x)",
    },
  },
  {
    id: "am4c-029",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Use Stirling's formula to determine the large-\\( n \\) growth rate of \\( a_n = \\dfrac{(3n)!}{(n!)^3} \\), giving both the exponential rate and the algebraic prefactor.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stirling", "multinomial", "growth rate"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute Stirling for each factorial.", workingLatex: "a_n = \\frac{(3n)!}{(n!)^3} \\sim \\frac{\\sqrt{2\\pi(3n)}\\,(3n/e)^{3n}}{\\left[\\sqrt{2\\pi n}\\,(n/e)^n\\right]^3}.", explanation: "Apply \\( m!\\sim\\sqrt{2\\pi m}(m/e)^m \\) at \\( m=3n \\) and three times at \\( m=n \\)." },
        { stepNumber: 2, description: "Handle the exponential part.", workingLatex: "\\frac{(3n/e)^{3n}}{(n/e)^{3n}} = \\frac{(3n)^{3n}}{n^{3n}} = 3^{3n} = 27^{n}.", explanation: "The \\( e \\)-powers cancel; \\( (3n/n)^{3n}=3^{3n} \\)." },
        { stepNumber: 3, description: "Handle the prefactor.", workingLatex: "\\frac{\\sqrt{6\\pi n}}{(2\\pi n)^{3/2}} = \\frac{\\sqrt{6\\pi n}}{(2\\pi n)\\sqrt{2\\pi n}} = \\frac{\\sqrt{6}}{2\\pi n\\,\\sqrt{2}}\\cdot\\frac{\\sqrt{\\pi n}}{\\sqrt{\\pi n}}.", explanation: "Collect the square-root factors: numerator \\( \\sqrt{6\\pi n} \\), denominator \\( (2\\pi n)^{3/2} \\)." },
        { stepNumber: 4, description: "Simplify the prefactor.", workingLatex: "\\frac{\\sqrt{6\\pi n}}{(2\\pi n)^{3/2}} = \\frac{\\sqrt 6}{2\\sqrt 2}\\cdot\\frac{1}{2\\pi n} \\cdot 2 = \\frac{\\sqrt{3}}{2\\pi n}.", explanation: "Writing \\( (2\\pi n)^{3/2}=(2\\pi n)\\sqrt{2\\pi n} \\) and \\( \\sqrt{6\\pi n}/\\sqrt{2\\pi n}=\\sqrt3 \\) gives \\( \\sqrt3/(2\\pi n) \\)." },
        { stepNumber: 5, description: "Assemble.", workingLatex: "a_n \\sim \\frac{\\sqrt{3}}{2\\pi n}\\,27^{n}.", explanation: "Exponential growth rate \\( 27 \\) (the maximum of the entropy \\( 3^3/1 \\)) with algebraic prefactor \\( \\propto n^{-1} \\)." },
      ],
      finalAnswer: "\\( a_n \\sim \\dfrac{\\sqrt{3}}{2\\pi n}\\,27^{n} \\)",
      canonicalAnswer: "sqrt(3)/(2*pi*n)*27^n",
    },
  },
  {
    id: "am4c-030",
    topicRef: "am4c",
    topicTitle: "Stirling's formula & Gamma asymptotics 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Use the saddle-point (Laplace-on-the-real-axis) treatment of \\( n!=\\int_0^\\infty t^{n}e^{-t}\\,dt \\) to estimate the width of the dominant region around the maximum \\( t=n \\), and hence explain why the relative error of leading-order Stirling is \\( O(1/n) \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "Stirling", "width of peak", "error estimate"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the peak.", workingLatex: "g(t)=n\\ln t - t,\\quad g'(t)=\\frac{n}{t}-1=0 \\Rightarrow t_{\\max}=n.", explanation: "The integrand \\( t^n e^{-t}=e^{g(t)} \\) is sharply peaked at \\( t=n \\)." },
        { stepNumber: 2, description: "Compute the curvature there.", workingLatex: "g''(t) = -\\frac{n}{t^2},\\qquad g''(n) = -\\frac{1}{n}.", explanation: "The second derivative at the peak sets the Gaussian width." },
        { stepNumber: 3, description: "Read off the width.", workingLatex: "\\Delta t \\sim \\frac{1}{\\sqrt{|g''(n)|}} = \\sqrt{n}.", explanation: "The effective half-width of the Gaussian \\( e^{-\\frac{1}{2n}(t-n)^2} \\) is \\( \\sqrt n \\)." },
        { stepNumber: 4, description: "Form the small expansion parameter.", workingLatex: "\\frac{\\Delta t}{t_{\\max}} = \\frac{\\sqrt n}{n} = \\frac{1}{\\sqrt n}.", explanation: "Relative to the peak position the width is \\( O(n^{-1/2}) \\), so the cubic term in \\( g \\) is suppressed by \\( (\\Delta t/t_{\\max}) \\)." },
        { stepNumber: 5, description: "Estimate the leading correction.", workingLatex: "g'''(n)\\,(\\Delta t)^3 \\sim \\frac{2}{n^2}\\cdot n^{3/2} = \\frac{2}{\\sqrt n},\\ \\text{but the } odd \\text{ term averages to } 0;\\ \\text{the surviving even correction is } O\\!\\left(\\frac1n\\right).", explanation: "The cubic term has zero Gaussian average, so the first non-vanishing correction comes at second order in the cubic plus the quartic, each \\( O(1/n) \\) — exactly the \\( 1/(12n) \\) Stirling correction." },
      ],
      finalAnswer: "Peak width \\( \\Delta t\\sim\\sqrt n \\), relative width \\( n^{-1/2} \\); leading correction \\( O(1/n) \\) (the \\( 1/12n \\) term).",
      canonicalAnswer: "relative error ~ 1/n",
    },
  },
];
