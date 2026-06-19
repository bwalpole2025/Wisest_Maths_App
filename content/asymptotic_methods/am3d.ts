import { Question } from "@/lib/types";

/**
 * Asymptotic Methods — am3d
 * "Substitutions reducing integrals to Watson form"
 * (topic group: Integration by Parts & Watson's Lemma)
 *
 * Scope: change of variables (t = x(1+s), shifts, u = √t, scaling) used to
 * pull an integral into the canonical Watson form
 *   I(x) = ∫₀^∞ e^{-xs} f(s) ds ,   f(s) ~ Σ aₙ s^{n+λ-1},
 * so that Watson's Lemma gives  I(x) ~ Σ aₙ Γ(n+λ)/x^{n+λ}.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 1
 * (Q2, Q9, Q10b, Q11, Q13), constants/limits/framing varied throughout.
 *
 * Verification: every closed-form coefficient and asymptotic result below was
 * checked numerically with mpmath (incomplete Gamma, E1, erfc-tail, Stieltjes
 * G(x), (1+t)^{-1/2} and (1+t)^{-2} kernels, the ∫ e^{-t}ln t expansion, and the
 * Q13 √t-substitution leading terms). // REVIEW comments flag the few steps that
 * are existence/structure statements not reducible to a single numeric check.
 *
 * Watson's Lemma (stated once, used throughout):
 *   if f(s) ~ Σ_{n} a_n s^{n+λ-1} as s→0⁺ (λ>0) and the integral converges,
 *   then ∫₀^∞ e^{-xs} f(s) ds ~ Σ_n a_n Γ(n+λ) / x^{n+λ}  as x→+∞.
 */
export const questions: Question[] = [
  // ── Foundation: the bare substitution + a single Watson term ────
  {
    id: "am3d-001",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Apply the substitution \\( t = x(1+s) \\) to the integral \\( \\displaystyle \\int_{x}^{\\infty} \\frac{e^{-t}}{t}\\,dt \\) and write the result in the form \\( e^{-x}\\int_{0}^{\\infty} e^{-xs} f(s)\\,ds \\), identifying \\( f(s) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson form", "substitution", "exponential integral"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the substitution.", workingLatex: "t = x(1+s) \\quad\\Longrightarrow\\quad dt = x\\,ds.", explanation: "The lower limit \\( t=x \\) maps to \\( s=0 \\) and \\( t\\to\\infty \\) maps to \\( s\\to\\infty \\), so the new range is \\( [0,\\infty) \\)." },
        { stepNumber: 2, description: "Substitute into the integrand.", workingLatex: "\\frac{e^{-t}}{t}\\,dt = \\frac{e^{-x(1+s)}}{x(1+s)}\\,x\\,ds = e^{-x}\\,\\frac{e^{-xs}}{1+s}\\,ds.", explanation: "The factor \\( x \\) from \\( dt \\) cancels the \\( x \\) in the denominator, and \\( e^{-t}=e^{-x}e^{-xs} \\) pulls the constant \\( e^{-x} \\) outside." },
        { stepNumber: 3, description: "Read off Watson form.", workingLatex: "\\int_{x}^{\\infty}\\frac{e^{-t}}{t}\\,dt = e^{-x}\\int_{0}^{\\infty} e^{-xs}\\,\\frac{1}{1+s}\\,ds.", explanation: "The exponential kernel \\( e^{-xs} \\) is now exposed, with \\( f(s)=1/(1+s) \\) smooth at \\( s=0 \\)." },
      ],
      finalAnswer: "\\( e^{-x}\\displaystyle\\int_{0}^{\\infty} e^{-xs}\\,\\frac{ds}{1+s} \\), so \\( f(s)=\\dfrac{1}{1+s} \\).",
    },
  },
  {
    id: "am3d-002",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Use Watson's Lemma to evaluate the leading asymptotic term of \\( \\displaystyle \\int_{0}^{\\infty} e^{-xs}\\,\\sqrt{s}\\,ds \\) as \\( x\\to\\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the local exponent.", workingLatex: "f(s) = s^{1/2} = s^{\\,n+\\lambda-1}\\big|_{n=0},\\quad \\lambda = \\tfrac{3}{2}.", explanation: "Watson's Lemma reads off the power of \\( s \\) near \\( s=0 \\); here the whole integrand is the single monomial \\( s^{1/2} \\)." },
        { stepNumber: 2, description: "Apply Watson's Lemma.", workingLatex: "\\int_{0}^{\\infty} e^{-xs} s^{\\lambda-1}\\,ds = \\frac{\\Gamma(\\lambda)}{x^{\\lambda}}.", explanation: "This is the exact value of the Laplace transform of a power, which is the building block of the Lemma." },
        { stepNumber: 3, description: "Substitute \\( \\lambda=3/2 \\).", workingLatex: "\\int_{0}^{\\infty} e^{-xs}\\sqrt{s}\\,ds = \\frac{\\Gamma(3/2)}{x^{3/2}} = \\frac{\\sqrt{\\pi}}{2\\,x^{3/2}}.", explanation: "Using \\( \\Gamma(3/2)=\\tfrac12\\Gamma(1/2)=\\tfrac12\\sqrt{\\pi} \\)." },
      ],
      finalAnswer: "\\( \\dfrac{\\sqrt{\\pi}}{2\\,x^{3/2}} \\)",
      canonicalAnswer: "sqrt(pi)/(2*x^(3/2))",
    },
  },
  {
    id: "am3d-003",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "By substituting \\( t = 1+s \\), express \\( \\displaystyle \\int_{1}^{\\infty} e^{-xt}\\,dt \\) in Watson form and hence find its exact value.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson form", "shift substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Shift the variable.", workingLatex: "t = 1+s,\\quad dt = ds,\\quad t=1\\mapsto s=0.", explanation: "A pure shift moves the lower limit to the origin, the natural base point for Watson's Lemma." },
        { stepNumber: 2, description: "Factor the constant exponential.", workingLatex: "\\int_{1}^{\\infty} e^{-xt}\\,dt = \\int_{0}^{\\infty} e^{-x(1+s)}\\,ds = e^{-x}\\int_{0}^{\\infty} e^{-xs}\\,ds.", explanation: "Here \\( f(s)=1 \\), the simplest possible Watson amplitude." },
        { stepNumber: 3, description: "Evaluate the standard integral.", workingLatex: "e^{-x}\\int_{0}^{\\infty} e^{-xs}\\,ds = e^{-x}\\cdot\\frac{1}{x} = \\frac{e^{-x}}{x}.", explanation: "With \\( \\lambda=1 \\), \\( \\Gamma(1)=1 \\); this case is exact, not merely asymptotic." },
      ],
      finalAnswer: "\\( e^{-x}\\displaystyle\\int_{0}^{\\infty} e^{-xs}\\,ds = \\dfrac{e^{-x}}{x} \\)",
      canonicalAnswer: "exp(-x)/x",
    },
  },
  {
    id: "am3d-004",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Apply the substitution \\( t = x(1+s) \\) to \\( \\displaystyle \\int_{x}^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt \\), reducing it to a multiple of a Watson-form integral.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson form", "substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the substitution.", workingLatex: "t = x(1+s),\\quad dt = x\\,ds,\\quad t^{2}=x^{2}(1+s)^{2}.", explanation: "Track the power of \\( x \\) carefully because the denominator is now squared." },
        { stepNumber: 2, description: "Substitute.", workingLatex: "\\frac{e^{-t}}{t^{2}}\\,dt = \\frac{e^{-x(1+s)}}{x^{2}(1+s)^{2}}\\,x\\,ds = \\frac{e^{-x}}{x}\\,\\frac{e^{-xs}}{(1+s)^{2}}\\,ds.", explanation: "One power of \\( x \\) cancels from \\( dt \\), leaving an overall prefactor \\( e^{-x}/x \\)." },
        { stepNumber: 3, description: "State the Watson form.", workingLatex: "\\int_{x}^{\\infty}\\frac{e^{-t}}{t^{2}}\\,dt = \\frac{e^{-x}}{x}\\int_{0}^{\\infty} e^{-xs}\\,\\frac{ds}{(1+s)^{2}}.", explanation: "The amplitude \\( f(s)=(1+s)^{-2} \\) is smooth at \\( s=0 \\), ready for Watson's Lemma." },
      ],
      finalAnswer: "\\( \\dfrac{e^{-x}}{x}\\displaystyle\\int_{0}^{\\infty} e^{-xs}\\,\\dfrac{ds}{(1+s)^{2}} \\)",
    },
  },
  {
    id: "am3d-005",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Given the Watson-form integral \\( \\displaystyle e^{-x}\\int_{0}^{\\infty} e^{-xs}\\,\\frac{ds}{1+s} \\), use the geometric expansion of \\( 1/(1+s) \\) and Watson's Lemma to find the first two terms of its asymptotic expansion as \\( x\\to\\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "geometric series", "exponential integral"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Expand the amplitude at \\( s=0 \\).", workingLatex: "\\frac{1}{1+s} = 1 - s + s^{2} - \\cdots = \\sum_{n=0}^{\\infty}(-1)^{n}s^{n}.", explanation: "Watson's Lemma only uses the behaviour near \\( s=0 \\), so the geometric series is exactly what is needed.", mafs: `<Mafs viewBox={{ x: [-0.8, 4.0], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(s) => Math.exp(-2.6 * s)} domain={[0, 4]} color="var(--mafs-fg-accent)" weight={3} />
  <Plot.OfX y={(s) => 1 / (1 + s)} domain={[0, 4]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.45, 1.1]} tex="s=0" color="var(--mafs-fg-accent)" />
  <LaTeX at={[1.4, 0.7]} tex="e^{-xs}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.0, 0.2]} tex="\\dfrac{1}{1+s}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.7, -0.2]} tex="s" />
</Mafs>` },
        { stepNumber: 2, description: "Apply Watson term by term.", workingLatex: "\\int_{0}^{\\infty} e^{-xs} s^{n}\\,ds = \\frac{n!}{x^{n+1}}.", explanation: "Each monomial \\( s^{n} \\) contributes \\( \\Gamma(n+1)/x^{n+1}=n!/x^{n+1} \\)." },
        { stepNumber: 3, description: "Assemble the series.", workingLatex: "e^{-x}\\int_{0}^{\\infty} e^{-xs}\\,\\frac{ds}{1+s} \\sim e^{-x}\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}n!}{x^{n+1}}.", explanation: "Multiply each Watson term by \\( (-1)^{n} \\) from the expansion and keep the \\( e^{-x} \\) prefactor." },
        { stepNumber: 4, description: "Write the first two terms.", workingLatex: "\\sim e^{-x}\\left(\\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots\\right).", explanation: "This is the classical exponential-integral series \\( E_1(x) \\)." },
      ],
      finalAnswer: "\\( e^{-x}\\left(\\dfrac{1}{x} - \\dfrac{1}{x^{2}} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-006",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "By substituting \\( u = \\sqrt{t} \\), rewrite \\( \\displaystyle \\int_{0}^{T} g\\!\\left(\\sqrt{t}\\right)\\,dt \\) as an integral in \\( u \\), and state the resulting integrand.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "square-root variable"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the substitution.", workingLatex: "u = \\sqrt{t}\\;\\Longrightarrow\\; t = u^{2},\\quad dt = 2u\\,du.", explanation: "A \\( \\sqrt{t} \\) inside the integrand signals the substitution \\( u=\\sqrt t \\), which removes the root and produces the Jacobian factor \\( 2u \\)." },
        { stepNumber: 2, description: "Change the limits.", workingLatex: "t=0\\mapsto u=0,\\qquad t=T\\mapsto u=\\sqrt{T}.", explanation: "Both limits are non-negative so the map is one-to-one on the range." },
        { stepNumber: 3, description: "Rewrite the integral.", workingLatex: "\\int_{0}^{T} g\\!\\left(\\sqrt{t}\\right)\\,dt = \\int_{0}^{\\sqrt{T}} g(u)\\,2u\\,du.", explanation: "The new integrand \\( 2u\\,g(u) \\) is the standard preparatory step before applying Laplace's method / Watson form to \\( \\int e^{x\\cos u}\\,2u\\,du \\)-type integrals." },
      ],
      finalAnswer: "\\( \\displaystyle\\int_{0}^{\\sqrt{T}} 2u\\,g(u)\\,du \\)",
    },
  },

  // ── Standard: full substitution + Watson series, sheet-level ────
  {
    id: "am3d-007",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that the exponential integral \\( \\displaystyle E_1(x) = \\int_{x}^{\\infty}\\frac{e^{-t}}{t}\\,dt \\) has the asymptotic expansion \\( E_1(x) \\sim e^{-x}\\sum_{n=0}^{\\infty} \\frac{(-1)^{n}n!}{x^{n+1}} \\) as \\( x\\to\\infty \\), by reducing it to Watson form.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "exponential integral", "substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute \\( t = x(1+s) \\).", workingLatex: "t = x(1+s),\\quad dt = x\\,ds,\\quad t:x\\to\\infty \\;\\Rightarrow\\; s:0\\to\\infty.", explanation: "This is the canonical substitution that moves the lower limit to the origin and exposes an \\( e^{-xs} \\) kernel." },
        { stepNumber: 2, description: "Reduce to Watson form.", workingLatex: "E_1(x) = \\int_{0}^{\\infty}\\frac{e^{-x(1+s)}}{x(1+s)}\\,x\\,ds = e^{-x}\\int_{0}^{\\infty} e^{-xs}\\,\\frac{ds}{1+s}.", explanation: "The \\( x \\) from the Jacobian cancels the \\( x \\) in the denominator; the constant \\( e^{-x} \\) factors out." },
        { stepNumber: 3, description: "Expand the amplitude at \\( s=0 \\).", workingLatex: "\\frac{1}{1+s} = \\sum_{n=0}^{\\infty}(-1)^{n}s^{n}, \\quad |s|<1.", explanation: "Watson's Lemma needs only the small-\\( s \\) behaviour; the radius of convergence does not affect the asymptotic result." },
        { stepNumber: 4, description: "Apply Watson's Lemma.", workingLatex: "\\int_{0}^{\\infty} e^{-xs} s^{n}\\,ds = \\frac{n!}{x^{n+1}}.", explanation: "Term-by-term Laplace transform of each power; legitimate because the tail of \\( 1/(1+s) \\) is bounded." },
        { stepNumber: 5, description: "Assemble the expansion.", workingLatex: "E_1(x) \\sim e^{-x}\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}n!}{x^{n+1}}.", explanation: "The series diverges for every fixed \\( x \\) but is a valid asymptotic expansion as \\( x\\to\\infty \\)." },
      ],
      finalAnswer: "\\( E_1(x) \\sim e^{-x}\\left(\\dfrac{1}{x} - \\dfrac{1}{x^{2}} + \\dfrac{2}{x^{3}} - \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-008",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the first three terms of the asymptotic expansion of \\( \\displaystyle \\int_{x}^{\\infty}\\frac{e^{-t}}{t^{2}}\\,dt \\) as \\( x\\to\\infty \\), using the substitution \\( t=x(1+s) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "substitution", "binomial series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Reduce to Watson form.", workingLatex: "\\int_{x}^{\\infty}\\frac{e^{-t}}{t^{2}}\\,dt = \\frac{e^{-x}}{x}\\int_{0}^{\\infty} e^{-xs}\\,\\frac{ds}{(1+s)^{2}}.", explanation: "With \\( t=x(1+s),\\,dt=x\\,ds \\), the \\( t^{2}=x^{2}(1+s)^{2} \\) leaves prefactor \\( e^{-x}/x \\)." },
        { stepNumber: 2, description: "Expand the amplitude.", workingLatex: "\\frac{1}{(1+s)^{2}} = \\sum_{n=0}^{\\infty}(-1)^{n}(n+1)s^{n} = 1 - 2s + 3s^{2} - \\cdots.", explanation: "Differentiating \\( 1/(1+s)=\\sum(-1)^n s^n \\) (or binomial with exponent \\( -2 \\)) gives the coefficients \\( (-1)^{n}(n+1) \\)." },
        { stepNumber: 3, description: "Apply Watson's Lemma.", workingLatex: "\\int_{0}^{\\infty} e^{-xs} s^{n}\\,ds = \\frac{n!}{x^{n+1}} \\;\\Rightarrow\\; \\int_{0}^{\\infty} e^{-xs}\\frac{ds}{(1+s)^{2}} \\sim \\sum_{n=0}^{\\infty}\\frac{(-1)^{n}(n+1)!}{x^{n+1}}.", explanation: "Here \\( (n+1)\\cdot n! = (n+1)! \\)." },
        { stepNumber: 4, description: "Multiply by the prefactor.", workingLatex: "\\int_{x}^{\\infty}\\frac{e^{-t}}{t^{2}}\\,dt \\sim e^{-x}\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}(n+1)!}{x^{n+2}}.", explanation: "The extra \\( 1/x \\) raises every power by one." },
        { stepNumber: 5, description: "Write the first three terms.", workingLatex: "\\sim e^{-x}\\left(\\frac{1}{x^{2}} - \\frac{2}{x^{3}} + \\frac{6}{x^{4}} - \\cdots\\right).", explanation: "Numerically confirmed against the exact value at \\( x=10,15 \\)." },
      ],
      finalAnswer: "\\( e^{-x}\\left(\\dfrac{1}{x^{2}} - \\dfrac{2}{x^{3}} + \\dfrac{6}{x^{4}} - \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-009",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Using the substitution \\( t = x(1+s) \\), find the leading two terms of the asymptotic expansion of the incomplete Gamma function \\( \\displaystyle \\Gamma(3,x) = \\int_{x}^{\\infty} t^{2}e^{-t}\\,dt \\) as \\( x\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["incomplete Gamma", "Watson's Lemma", "substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute and factor.", workingLatex: "\\Gamma(3,x) = \\int_{0}^{\\infty} x^{2}(1+s)^{2}\\,e^{-x(1+s)}\\,x\\,ds = x^{3}e^{-x}\\int_{0}^{\\infty} e^{-xs}(1+s)^{2}\\,ds.", explanation: "With \\( t^{2}=x^{2}(1+s)^{2} \\) and \\( dt=x\\,ds \\), the prefactor is \\( x^{3}e^{-x} \\)." },
        { stepNumber: 2, description: "Expand the (finite) amplitude.", workingLatex: "(1+s)^{2} = 1 + 2s + s^{2}.", explanation: "Here the amplitude is a polynomial, so Watson's Lemma terminates and is in fact exact." },
        { stepNumber: 3, description: "Apply Watson's Lemma.", workingLatex: "\\int_{0}^{\\infty} e^{-xs}(1+2s+s^{2})\\,ds = \\frac{1}{x} + \\frac{2}{x^{2}} + \\frac{2}{x^{3}}.", explanation: "Using \\( \\int_0^\\infty e^{-xs}s^{n}\\,ds = n!/x^{n+1} \\) with \\( n=0,1,2 \\)." },
        { stepNumber: 4, description: "Multiply through.", workingLatex: "\\Gamma(3,x) = x^{3}e^{-x}\\left(\\frac{1}{x} + \\frac{2}{x^{2}} + \\frac{2}{x^{3}}\\right) = e^{-x}\\left(x^{2} + 2x + 2\\right).", explanation: "This exact result confirms the method; the leading two terms are \\( e^{-x}(x^{2}+2x) \\)." },
      ],
      finalAnswer: "\\( \\Gamma(3,x) = e^{-x}\\left(x^{2} + 2x + 2\\right) \\), leading terms \\( e^{-x}(x^{2}+2x+\\cdots) \\)",
      canonicalAnswer: "exp(-x)*(x^2+2*x+2)",
    },
  },
  {
    id: "am3d-010",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Reduce \\( \\displaystyle \\int_{x}^{\\infty} t^{-1/2}\\,e^{-t}\\,dt \\) to Watson form with \\( t=x(1+s) \\) and obtain the first two terms of its expansion as \\( x\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["incomplete Gamma", "Watson's Lemma", "binomial series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute.", workingLatex: "\\int_{x}^{\\infty} t^{-1/2}e^{-t}\\,dt = \\int_{0}^{\\infty} x^{-1/2}(1+s)^{-1/2}e^{-x(1+s)}\\,x\\,ds.", explanation: "\\( t^{-1/2}=x^{-1/2}(1+s)^{-1/2} \\) and \\( dt=x\\,ds \\)." },
        { stepNumber: 2, description: "Collect the prefactor.", workingLatex: "= x^{1/2}e^{-x}\\int_{0}^{\\infty} e^{-xs}(1+s)^{-1/2}\\,ds.", explanation: "Combining \\( x^{-1/2}\\cdot x = x^{1/2} \\)." },
        { stepNumber: 3, description: "Binomial-expand the amplitude.", workingLatex: "(1+s)^{-1/2} = 1 - \\tfrac{1}{2}s + \\tfrac{3}{8}s^{2} - \\cdots.", explanation: "Using \\( \\binom{-1/2}{n} \\): coefficients \\( 1,\\,-\\tfrac12,\\,\\tfrac38,\\dots \\)" },
        { stepNumber: 4, description: "Apply Watson's Lemma.", workingLatex: "\\int_{0}^{\\infty} e^{-xs}(1+s)^{-1/2}\\,ds \\sim \\frac{1}{x} - \\frac{1}{2}\\frac{1}{x^{2}} + \\cdots.", explanation: "Each \\( s^{n} \\) gives \\( n!/x^{n+1} \\); the \\( n=1 \\) term is \\( -\\tfrac12\\cdot 1!/x^{2} \\)." },
        { stepNumber: 5, description: "Multiply by the prefactor.", workingLatex: "\\int_{x}^{\\infty} t^{-1/2}e^{-t}\\,dt \\sim x^{1/2}e^{-x}\\left(\\frac{1}{x} - \\frac{1}{2x^{2}} + \\cdots\\right) = e^{-x}\\left(x^{-1/2} - \\tfrac12 x^{-3/2} + \\cdots\\right).", explanation: "Numerically confirmed against \\( \\Gamma(1/2,x) \\) at \\( x=10,15 \\)." },
      ],
      finalAnswer: "\\( e^{-x}\\left(x^{-1/2} - \\tfrac12 x^{-3/2} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-011",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the first three terms of the asymptotic expansion of the Stieltjes-type integral \\( \\displaystyle G(x) = \\int_{0}^{\\infty} \\frac{e^{-t}}{(1+t/x)^{2}}\\,dt \\) as \\( x\\to\\infty \\), by substituting \\( t = xs \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "Watson's Lemma", "scaling substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale the variable.", workingLatex: "t = xs,\\quad dt = x\\,ds \\;\\Rightarrow\\; G(x) = x\\int_{0}^{\\infty}\\frac{e^{-xs}}{(1+s)^{2}}\\,ds.", explanation: "Scaling \\( t=xs \\) turns the slowly-decaying \\( e^{-t} \\) into the large-parameter kernel \\( e^{-xs} \\).", mafs: `<Mafs viewBox={{ x: [-0.8, 4.0], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(s) => Math.exp(-1.1 * s)} domain={[0, 4]} color="var(--mafs-fg-blue)" style="dashed" />
  <Plot.OfX y={(s) => Math.exp(-3.5 * s)} domain={[0, 4]} color="var(--mafs-fg-accent)" weight={3} />
  <Plot.OfX y={(s) => 1 / ((1 + s) * (1 + s))} domain={[0, 4]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.45, 1.1]} tex="s=0" color="var(--mafs-fg-accent)" />
  <LaTeX at={[1.6, 0.75]} tex="\\text{larger } x" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.05, 0.2]} tex="(1+s)^{-2}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.7, -0.2]} tex="s" />
</Mafs>` },
        { stepNumber: 2, description: "Expand the amplitude.", workingLatex: "\\frac{1}{(1+s)^{2}} = \\sum_{n=0}^{\\infty}(-1)^{n}(n+1)s^{n}.", explanation: "Same binomial expansion as before (exponent \\( -2 \\))." },
        { stepNumber: 3, description: "Apply Watson's Lemma.", workingLatex: "x\\int_{0}^{\\infty} e^{-xs} s^{n}\\,ds = x\\cdot\\frac{n!}{x^{n+1}} = \\frac{n!}{x^{n}}.", explanation: "The leading factor \\( x \\) cancels one power, shifting the series to \\( x^{-n} \\)." },
        { stepNumber: 4, description: "Assemble.", workingLatex: "G(x) \\sim \\sum_{n=0}^{\\infty} (-1)^{n}(n+1)\\,n!\\,x^{-n} = \\sum_{n=0}^{\\infty}(-1)^{n}(n+1)!\\,x^{-n}.", explanation: "Matches Example Sheet 1 Q9: \\( G \\sim \\sum(-1)^n(n+1)!x^{-n} \\)." },
        { stepNumber: 5, description: "First three terms.", workingLatex: "G(x) \\sim 1 - \\frac{2}{x} + \\frac{6}{x^{2}} - \\cdots.", explanation: "Numerically confirmed: \\( G(0.1)\\approx 0.8437 \\) lies near the optimally-truncated partial sum." },
      ],
      finalAnswer: "\\( G(x) \\sim 1 - \\dfrac{2}{x} + \\dfrac{6}{x^{2}} - \\cdots \\)",
    },
  },
  {
    id: "am3d-012",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "By scaling \\( t = xs \\), find the full asymptotic expansion of \\( \\displaystyle F(x) = \\int_{0}^{\\infty} \\frac{e^{-t}}{1 + t/x}\\,dt \\) as \\( x\\to\\infty \\), giving the first three terms explicitly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "Watson's Lemma", "scaling substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Scale.", workingLatex: "t=xs:\\quad F(x) = x\\int_{0}^{\\infty}\\frac{e^{-xs}}{1+s}\\,ds.", explanation: "The same scaling as the previous problem; the amplitude is now \\( 1/(1+s) \\)." },
        { stepNumber: 2, description: "Expand and apply Watson.", workingLatex: "\\frac{1}{1+s}=\\sum_{n\\ge0}(-1)^{n}s^{n},\\quad x\\int_{0}^{\\infty} e^{-xs}s^{n}\\,ds = \\frac{n!}{x^{n}}.", explanation: "The prefactor \\( x \\) again lowers each power by one." },
        { stepNumber: 3, description: "Assemble.", workingLatex: "F(x) \\sim \\sum_{n=0}^{\\infty}\\frac{(-1)^{n}n!}{x^{n}} = 1 - \\frac{1}{x} + \\frac{2}{x^{2}} - \\cdots.", explanation: "Differentiating \\( F \\) recovers \\( G \\) of the previous question, consistent with Sheet 1 Q9(b)." },
      ],
      finalAnswer: "\\( F(x) \\sim 1 - \\dfrac{1}{x} + \\dfrac{2}{x^{2}} - \\cdots \\)",
    },
  },
  {
    id: "am3d-013",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Use the substitution \\( t = a(1+s) \\) to show that \\( \\displaystyle \\int_{a}^{\\infty} \\frac{e^{-t}}{t}\\,dt \\sim \\frac{e^{-a}}{a}\\left(1 - \\frac{1}{a} + \\frac{2}{a^{2}} - \\cdots\\right) \\) as \\( a\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "Watson's Lemma", "substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute.", workingLatex: "t=a(1+s),\\;dt=a\\,ds:\\quad \\int_{a}^{\\infty}\\frac{e^{-t}}{t}\\,dt = e^{-a}\\int_{0}^{\\infty}\\frac{e^{-as}}{1+s}\\,ds.", explanation: "The same reduction as for \\( E_1 \\); the role of the large parameter is played by \\( a \\)." },
        { stepNumber: 2, description: "Expand and apply Watson.", workingLatex: "\\int_{0}^{\\infty} e^{-as}\\frac{ds}{1+s} \\sim \\sum_{n=0}^{\\infty}\\frac{(-1)^{n}n!}{a^{n+1}}.", explanation: "Geometric expansion of \\( 1/(1+s) \\) followed by \\( \\int_0^\\infty e^{-as}s^n\\,ds=n!/a^{n+1} \\)." },
        { stepNumber: 3, description: "Factor out \\( 1/a \\).", workingLatex: "\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}n!}{a^{n+1}} = \\frac{1}{a}\\left(1 - \\frac{1}{a} + \\frac{2}{a^{2}} - \\cdots\\right).", explanation: "Pulling out \\( 1/a \\) puts the bracket in the requested form." },
        { stepNumber: 4, description: "Combine.", workingLatex: "\\int_{a}^{\\infty}\\frac{e^{-t}}{t}\\,dt \\sim \\frac{e^{-a}}{a}\\left(1 - \\frac{1}{a} + \\frac{2}{a^{2}} - \\cdots\\right).", explanation: "Which is the required result." },
      ],
      finalAnswer: "\\( \\dfrac{e^{-a}}{a}\\left(1 - \\dfrac{1}{a} + \\dfrac{2}{a^{2}} - \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-014",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Reduce \\( \\displaystyle \\int_{0}^{\\infty} e^{-x(1+s)^{2}}\\,ds \\) to Watson form by substituting \\( w = (1+s)^{2}-1 \\), and hence find its leading asymptotic term as \\( x\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Gaussian tail", "Watson's Lemma", "substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the new variable.", workingLatex: "w = (1+s)^{2}-1 = 2s + s^{2},\\quad s=0\\mapsto w=0,\\; s\\to\\infty\\mapsto w\\to\\infty.", explanation: "The exponent \\( (1+s)^2 = 1+w \\), so \\( w \\) is exactly the deviation that the kernel penalises." },
        { stepNumber: 2, description: "Compute the Jacobian.", workingLatex: "dw = (2+2s)\\,ds = 2(1+s)\\,ds = 2\\sqrt{1+w}\\,ds \\;\\Rightarrow\\; ds = \\frac{dw}{2\\sqrt{1+w}}.", explanation: "Invert \\( 1+s=\\sqrt{1+w} \\) to express \\( ds \\) in \\( w \\)." },
        { stepNumber: 3, description: "Rewrite the integral.", workingLatex: "\\int_{0}^{\\infty} e^{-x(1+s)^{2}}\\,ds = e^{-x}\\int_{0}^{\\infty} e^{-xw}\\,\\frac{dw}{2\\sqrt{1+w}}.", explanation: "Using \\( e^{-x(1+s)^2}=e^{-x(1+w)}=e^{-x}e^{-xw} \\); now in clean Watson form." },
        { stepNumber: 4, description: "Leading Watson term.", workingLatex: "\\frac{1}{2\\sqrt{1+w}} = \\tfrac12 - \\tfrac14 w + \\cdots \\;\\Rightarrow\\; e^{-x}\\int_{0}^{\\infty} e^{-xw}\\,\\frac{dw}{2\\sqrt{1+w}} \\sim \\frac{e^{-x}}{2x}.", explanation: "The amplitude at \\( w=0 \\) is \\( \\tfrac12 \\), so the leading term is \\( \\tfrac12\\cdot\\Gamma(1)/x \\)." },
        { stepNumber: 5, description: "State the result.", workingLatex: "\\int_{0}^{\\infty} e^{-x(1+s)^{2}}\\,ds \\sim \\frac{e^{-x}}{2x}\\left(1 - \\frac{1}{2x} + \\cdots\\right).", explanation: "Equivalent to the Gaussian-tail expansion, numerically confirmed via the \\( \\mathrm{erfc} \\) integral." },
      ],
      finalAnswer: "\\( \\dfrac{e^{-x}}{2x}\\left(1 - \\dfrac{1}{2x} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-015",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "By substituting \\( u = \\sqrt{t} \\) and then applying Laplace's method, find the leading asymptotic term of \\( \\displaystyle \\int_{0}^{\\pi^{2}/4} e^{x\\cos\\sqrt{t}}\\,dt \\) as \\( x\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "square-root substitution", "Watson form"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Remove the square root.", workingLatex: "u=\\sqrt{t},\\; t=u^{2},\\; dt=2u\\,du:\\quad \\int_{0}^{\\pi^{2}/4} e^{x\\cos\\sqrt{t}}\\,dt = \\int_{0}^{\\pi/2} e^{x\\cos u}\\,2u\\,du.", explanation: "The substitution turns \\( \\cos\\sqrt t \\) into the clean phase \\( \\cos u \\) at the cost of a factor \\( 2u \\)." },
        { stepNumber: 2, description: "Locate the maximum of the phase.", workingLatex: "\\cos u \\text{ is maximal at } u=0 \\text{ (endpoint)},\\quad \\cos u \\approx 1 - \\tfrac12 u^{2}.", explanation: "The exponent peaks at the lower endpoint, so this is an endpoint Laplace contribution." },
        { stepNumber: 3, description: "Local form near \\( u=0 \\).", workingLatex: "e^{x\\cos u}\\,2u \\approx e^{x}\\,e^{-xu^{2}/2}\\,2u.", explanation: "Factor \\( e^{x} \\) and keep the leading amplitude \\( 2u \\)." },
        { stepNumber: 4, description: "Integrate the local model.", workingLatex: "2e^{x}\\int_{0}^{\\infty} u\\,e^{-xu^{2}/2}\\,du = 2e^{x}\\cdot\\frac{1}{x} = \\frac{2e^{x}}{x}.", explanation: "The substitution \\( v=u^{2} \\) gives \\( \\int_0^\\infty u e^{-xu^2/2}du = 1/x \\)." },
        { stepNumber: 5, description: "State the leading term.", workingLatex: "\\int_{0}^{\\pi^{2}/4} e^{x\\cos\\sqrt{t}}\\,dt \\sim e^{x}\\left(\\frac{2}{x} + \\frac{2}{3x^{2}} + \\cdots\\right).", explanation: "Matches Sheet 1 Q13; leading term \\( 2e^{x}/x \\) confirmed numerically at \\( x=40,80 \\)." },
      ],
      finalAnswer: "\\( e^{x}\\left(\\dfrac{2}{x} + \\dfrac{2}{3x^{2}} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-016",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Reduce \\( \\displaystyle \\int_{x}^{\\infty} \\frac{e^{-t}}{t(t+1)}\\,dt \\) to Watson form using \\( t=x(1+s) \\), and find its leading asymptotic term as \\( x\\to\\infty \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "rational amplitude", "substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute.", workingLatex: "t=x(1+s):\\quad t(t+1) = x(1+s)\\,[x(1+s)+1].", explanation: "Track both factors of the denominator under the substitution." },
        { stepNumber: 2, description: "Write the integral.", workingLatex: "\\int_{x}^{\\infty}\\frac{e^{-t}}{t(t+1)}\\,dt = e^{-x}\\int_{0}^{\\infty}\\frac{e^{-xs}\\,ds}{(1+s)\\,[x(1+s)+1]}.", explanation: "After \\( dt=x\\,ds \\), one factor of \\( x \\) cancels, leaving the amplitude shown." },
        { stepNumber: 3, description: "Leading behaviour of the amplitude.", workingLatex: "\\frac{1}{(1+s)\\,[x(1+s)+1]} = \\frac{1}{x(1+s)^{2}}\\left(1 - \\frac{1}{x(1+s)} + \\cdots\\right).", explanation: "For large \\( x \\), \\( x(1+s)+1 = x(1+s)[1+1/(x(1+s))] \\); expand the second factor." },
        { stepNumber: 4, description: "Apply Watson to the leading piece.", workingLatex: "\\frac{e^{-x}}{x}\\int_{0}^{\\infty}\\frac{e^{-xs}}{(1+s)^{2}}\\,ds \\sim \\frac{e^{-x}}{x}\\cdot\\frac{1}{x} = \\frac{e^{-x}}{x^{2}}.", explanation: "The amplitude \\( (1+s)^{-2} \\) has value \\( 1 \\) at \\( s=0 \\), giving \\( \\Gamma(1)/x \\)." },
        { stepNumber: 5, description: "Leading term.", workingLatex: "\\int_{x}^{\\infty}\\frac{e^{-t}}{t(t+1)}\\,dt \\sim \\frac{e^{-x}}{x^{2}}.", explanation: "Consistent with \\( 1/[t(t+1)]\\approx 1/t^{2} \\) for large \\( t \\)." },
      ],
      finalAnswer: "\\( \\dfrac{e^{-x}}{x^{2}}\\left(1 + \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-017",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 17",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the first two terms of the asymptotic expansion of \\( \\displaystyle \\int_{0}^{\\infty} \\frac{e^{-xs}}{\\sqrt{1+s}}\\,ds \\) as \\( x\\to\\infty \\) using Watson's Lemma.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "binomial series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Binomial-expand the amplitude.", workingLatex: "(1+s)^{-1/2} = 1 - \\tfrac12 s + \\tfrac38 s^{2} - \\cdots.", explanation: "Coefficients are \\( \\binom{-1/2}{n} \\)." },
        { stepNumber: 2, description: "Apply Watson's Lemma.", workingLatex: "\\int_{0}^{\\infty} e^{-xs}s^{n}\\,ds = \\frac{n!}{x^{n+1}}.", explanation: "Term-by-term Laplace transform." },
        { stepNumber: 3, description: "Assemble.", workingLatex: "\\int_{0}^{\\infty}\\frac{e^{-xs}}{\\sqrt{1+s}}\\,ds \\sim \\frac{1}{x} - \\frac{1}{2}\\frac{1}{x^{2}} + \\cdots.", explanation: "The \\( n=1 \\) term is \\( -\\tfrac12\\cdot 1!/x^{2} \\); confirmed numerically at \\( x=10,20 \\)." },
      ],
      finalAnswer: "\\( \\dfrac{1}{x} - \\dfrac{1}{2x^{2}} + \\cdots \\)",
    },
  },
  {
    id: "am3d-018",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\( \\displaystyle I(x) = \\int_{2}^{\\infty} \\frac{e^{-xt}}{t}\\,dt \\), use \\( t = 2(1+s) \\) to reduce it to Watson form and find the leading two terms as \\( x\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "shift substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute.", workingLatex: "t = 2(1+s),\\; dt = 2\\,ds,\\; t=2\\mapsto s=0.", explanation: "Shift-and-scale so the lower limit becomes the origin." },
        { stepNumber: 2, description: "Rewrite the integrand.", workingLatex: "\\frac{e^{-xt}}{t}\\,dt = \\frac{e^{-2x(1+s)}}{2(1+s)}\\,2\\,ds = e^{-2x}\\,\\frac{e^{-2xs}}{1+s}\\,ds.", explanation: "The large parameter for the kernel is now \\( 2x \\)." },
        { stepNumber: 3, description: "Apply Watson with parameter \\( 2x \\).", workingLatex: "I(x) = e^{-2x}\\int_{0}^{\\infty} e^{-2xs}\\,\\frac{ds}{1+s} \\sim e^{-2x}\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}n!}{(2x)^{n+1}}.", explanation: "Identical structure to \\( E_1 \\) but with \\( x\\to 2x \\)." },
        { stepNumber: 4, description: "First two terms.", workingLatex: "I(x) \\sim e^{-2x}\\left(\\frac{1}{2x} - \\frac{1}{(2x)^{2}} + \\cdots\\right) = e^{-2x}\\left(\\frac{1}{2x} - \\frac{1}{4x^{2}} + \\cdots\\right).", explanation: "Indeed \\( I(x)=E_1(2x) \\), consistent with the substitution." },
      ],
      finalAnswer: "\\( e^{-2x}\\left(\\dfrac{1}{2x} - \\dfrac{1}{4x^{2}} + \\cdots\\right) \\)",
    },
  },

  // ── Challenge: synoptic / multi-step / starred ────
  {
    id: "am3d-019",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Show that \\( \\displaystyle \\int_{x}^{\\infty} e^{-t}\\ln t\\,dt \\sim e^{-x}\\!\\left(\\ln x + \\frac{1}{x} - \\frac{1}{x^{2}} + \\frac{2}{x^{3}} - \\cdots\\right) \\) as \\( x\\to\\infty \\), via the substitution \\( t = x(1+s) \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "logarithmic amplitude", "substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute.", workingLatex: "t=x(1+s),\\,dt=x\\,ds:\\quad \\int_{x}^{\\infty} e^{-t}\\ln t\\,dt = x e^{-x}\\int_{0}^{\\infty} e^{-xs}\\ln\\!\\big(x(1+s)\\big)\\,ds.", explanation: "Keep the constant \\( x e^{-x} \\) outside; the log splits next." },
        { stepNumber: 2, description: "Split the logarithm.", workingLatex: "\\ln\\!\\big(x(1+s)\\big) = \\ln x + \\ln(1+s).", explanation: "Separating the constant part \\( \\ln x \\) from the \\( s \\)-dependent part is the key move." },
        { stepNumber: 3, description: "Handle the \\( \\ln x \\) term.", workingLatex: "x e^{-x}\\ln x\\int_{0}^{\\infty} e^{-xs}\\,ds = x e^{-x}\\ln x\\cdot\\frac{1}{x} = e^{-x}\\ln x.", explanation: "This is the dominant term; the surviving \\( \\ln x \\) makes the expansion non-standard." },
        { stepNumber: 4, description: "Expand \\( \\ln(1+s) \\).", workingLatex: "\\ln(1+s) = \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n}s^{n}.", explanation: "Maclaurin series of the logarithm, valid near \\( s=0 \\).", mafs: `<Mafs viewBox={{ x: [-0.8, 4.0], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(s) => Math.exp(-2.6 * s)} domain={[0, 4]} color="var(--mafs-fg-accent)" weight={3} />
  <Plot.OfX y={(s) => Math.log(1 + s)} domain={[0, 2.4]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.45, 1.1]} tex="s=0" color="var(--mafs-fg-accent)" />
  <LaTeX at={[1.3, 0.7]} tex="e^{-xs}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[2.6, 0.95]} tex="\\ln(1+s)" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.7, -0.2]} tex="s" />
</Mafs>` },
        { stepNumber: 5, description: "Apply Watson to the log term.", workingLatex: "x e^{-x}\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n}\\frac{n!}{x^{n+1}} = e^{-x}\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}(n-1)!}{x^{n}}.", explanation: "Using \\( \\int_0^\\infty e^{-xs}s^n\\,ds=n!/x^{n+1} \\) and \\( n!/n=(n-1)! \\)." },
        { stepNumber: 6, description: "Combine.", workingLatex: "\\int_{x}^{\\infty} e^{-t}\\ln t\\,dt \\sim e^{-x}\\!\\left(\\ln x + \\frac{1}{x} - \\frac{1}{x^{2}} + \\frac{2}{x^{3}} - \\cdots\\right).", explanation: "The bracket's first term is \\( (n=1) \\) giving \\( 0!/x=1/x \\); confirmed numerically at \\( x=10,15 \\)." },
      ],
      finalAnswer: "\\( e^{-x}\\!\\left(\\ln x + \\dfrac{1}{x} - \\dfrac{1}{x^{2}} + \\dfrac{2}{x^{3}} - \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-020",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "By making the substitution \\( t = x(1+s) \\), show that the complementary-error-type integral \\( \\displaystyle \\int_{x}^{\\infty} e^{-t^{2}}\\,dt \\) has the expansion \\( \\frac{e^{-x^{2}}}{2x}\\left(1 - \\frac{1}{2x^{2}} + \\frac{3}{4x^{4}} - \\cdots\\right) \\) as \\( x\\to\\infty \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Gaussian tail", "Watson's Lemma", "substitution", "erfc"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute.", workingLatex: "t = x(1+s),\\; dt = x\\,ds,\\; t^{2} = x^{2}(1+s)^{2} = x^{2}(1 + 2s + s^{2}).", explanation: "Centre the integral at the lower endpoint, where the integrand is largest." },
        { stepNumber: 2, description: "Factor the dominant exponential.", workingLatex: "\\int_{x}^{\\infty} e^{-t^{2}}\\,dt = x e^{-x^{2}}\\int_{0}^{\\infty} e^{-x^{2}(2s+s^{2})}\\,ds.", explanation: "The kernel is \\( e^{-x^{2}\\cdot 2s} \\) to leading order — the large parameter is \\( X = 2x^{2} \\)." },
        { stepNumber: 3, description: "Change to the natural Watson variable.", workingLatex: "w = 2s + s^{2},\\; dw = (2+2s)\\,ds,\\; ds = \\frac{dw}{2\\sqrt{1+w}},\\quad (1+s)=\\sqrt{1+w}.", explanation: "Then the exponent is exactly \\( -x^{2}w \\), pure Watson form." },
        { stepNumber: 4, description: "Rewrite.", workingLatex: "\\int_{x}^{\\infty} e^{-t^{2}}\\,dt = x e^{-x^{2}}\\int_{0}^{\\infty} e^{-x^{2}w}\\,\\frac{dw}{2\\sqrt{1+w}}.", explanation: "Amplitude \\( \\tfrac12(1+w)^{-1/2} \\), parameter \\( x^{2} \\)." },
        { stepNumber: 5, description: "Binomial-expand and apply Watson.", workingLatex: "\\frac{1}{2\\sqrt{1+w}} = \\tfrac12\\sum_{n\\ge0}\\binom{-1/2}{n}w^{n},\\quad \\int_{0}^{\\infty} e^{-x^{2}w}w^{n}\\,dw = \\frac{n!}{x^{2(n+1)}}.", explanation: "Each term scales as \\( x^{-2(n+1)} \\), matching half-integer powers when multiplied by the prefactor." },
        { stepNumber: 6, description: "Assemble.", workingLatex: "x e^{-x^{2}}\\cdot\\tfrac12\\left(\\frac{1}{x^{2}} - \\tfrac12\\frac{1}{x^{4}} + \\tfrac38\\frac{2}{x^{6}} - \\cdots\\right) = \\frac{e^{-x^{2}}}{2x}\\left(1 - \\frac{1}{2x^{2}} + \\frac{3}{4x^{4}} - \\cdots\\right).", explanation: "The \\( n=2 \\) coefficient is \\( \\tfrac38\\cdot 2! = \\tfrac34 \\); confirmed numerically at \\( x=3,4,5 \\)." },
      ],
      finalAnswer: "\\( \\dfrac{e^{-x^{2}}}{2x}\\left(1 - \\dfrac{1}{2x^{2}} + \\dfrac{3}{4x^{4}} - \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-021",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 21",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the leading asymptotic term of \\( \\displaystyle I(x) = \\int_{0}^{\\infty} e^{-x(s + \\frac{1}{2}s^{2})}\\,ds \\) as \\( x\\to\\infty \\) by reducing it to Watson form via \\( w = s + \\tfrac12 s^{2} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "nonlinear substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the Watson variable.", workingLatex: "w = s + \\tfrac12 s^{2},\\quad \\frac{dw}{ds} = 1 + s,\\quad s=0\\mapsto w=0.", explanation: "Choosing \\( w \\) equal to the whole exponent (over \\( x \\)) makes the kernel exactly \\( e^{-xw} \\)." },
        { stepNumber: 2, description: "Invert near the origin.", workingLatex: "s = -1 + \\sqrt{1+2w} = w - \\tfrac12 w^{2} + \\tfrac12 w^{3} - \\cdots.", explanation: "Solve the quadratic \\( \\tfrac12 s^2 + s - w=0 \\) taking the root \\( s\\to0 \\) as \\( w\\to0 \\)." },
        { stepNumber: 3, description: "Express the Jacobian in \\( w \\).", workingLatex: "1+s = \\sqrt{1+2w} \\;\\Rightarrow\\; ds = \\frac{dw}{\\sqrt{1+2w}}.", explanation: "From \\( dw=(1+s)\\,ds \\) and \\( 1+s=\\sqrt{1+2w} \\)." },
        { stepNumber: 4, description: "Watson form.", workingLatex: "I(x) = \\int_{0}^{\\infty} e^{-xw}\\,\\frac{dw}{\\sqrt{1+2w}}.", explanation: "Amplitude \\( (1+2w)^{-1/2} \\), smooth and equal to \\( 1 \\) at \\( w=0 \\)." },
        { stepNumber: 5, description: "Leading term.", workingLatex: "(1+2w)^{-1/2} = 1 - w + \\cdots \\;\\Rightarrow\\; I(x) \\sim \\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots.", explanation: "Leading amplitude \\( 1 \\) gives \\( \\Gamma(1)/x = 1/x \\)." },
      ],
      finalAnswer: "\\( I(x) \\sim \\dfrac{1}{x} \\) (next term \\( -\\dfrac{1}{x^{2}} \\))",
      canonicalAnswer: "1/x",
    },
  },
  {
    id: "am3d-022",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "By substituting \\( t = x(1+s) \\) and applying Watson's Lemma, show that the error term in truncating \\( E_1(x) = e^{-x}\\sum_{n=0}^{N-1}\\frac{(-1)^{n}n!}{x^{n+1}} \\) is bounded by \\( O\\!\\left(e^{-x}x^{-N-1}N!\\right) \\). Identify the optimal truncation point.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "optimal truncation", "error bound", "exponential integral"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Reduce to Watson form.", workingLatex: "E_1(x) = e^{-x}\\int_{0}^{\\infty} e^{-xs}\\,\\frac{ds}{1+s}.", explanation: "Standard substitution \\( t=x(1+s) \\)." },
        { stepNumber: 2, description: "Write the exact remainder.", workingLatex: "\\frac{1}{1+s} = \\sum_{n=0}^{N-1}(-1)^{n}s^{n} + \\frac{(-1)^{N}s^{N}}{1+s}.", explanation: "Finite geometric sum with exact remainder term — no approximation yet." },
        { stepNumber: 3, description: "Integrate term by term.", workingLatex: "E_1(x) = e^{-x}\\sum_{n=0}^{N-1}\\frac{(-1)^{n}n!}{x^{n+1}} + R_N,\\quad R_N = (-1)^{N}e^{-x}\\int_{0}^{\\infty}\\frac{e^{-xs}s^{N}}{1+s}\\,ds.", explanation: "The first sum is the truncated series; \\( R_N \\) is the exact error." },
        { stepNumber: 4, description: "Bound the remainder.", workingLatex: "|R_N| \\le e^{-x}\\int_{0}^{\\infty} e^{-xs}s^{N}\\,ds = e^{-x}\\,\\frac{N!}{x^{N+1}}.", explanation: "Use \\( 0 < 1/(1+s) \\le 1 \\) on \\( s\\ge0 \\)." },
        { stepNumber: 5, description: "Minimise the bound over \\( N \\).", workingLatex: "\\frac{|R_{N+1}|}{|R_N|} \\approx \\frac{(N+1)}{x} < 1 \\iff N < x - 1.", explanation: "Terms shrink while \\( N<x \\) and grow afterwards: the bound is smallest near \\( N\\approx x \\)." },
        { stepNumber: 6, description: "Optimal truncation.", workingLatex: "N_{\\text{opt}} \\approx \\lfloor x\\rfloor,\\qquad |R_{N_{\\text{opt}}}| = O\\!\\left(e^{-x}\\frac{x!}{x^{x+1}}\\right) = O\\!\\left(\\sqrt{x}\\,e^{-2x}\\right),", explanation: "By Stirling \\( x!/x^{x+1}\\sim\\sqrt{2\\pi/x}\\,e^{-x} \\); the optimal absolute error is exponentially small beyond \\( e^{-x} \\)." },
      ],
      finalAnswer: "\\( |R_N| \\le e^{-x}N!\\,x^{-N-1} \\), minimised at \\( N\\approx\\lfloor x\\rfloor \\) giving error \\( O(\\sqrt{x}\\,e^{-2x}) \\)",
    },
  },
  {
    id: "am3d-023",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Reduce \\( \\displaystyle \\int_{x}^{\\infty} \\frac{e^{-t}}{t}\\,dt \\) to Watson form, and using \\( \\frac{1}{1+s} = \\frac{1}{1+s} \\) directly, derive the integral representation of the remainder after one term and show it is \\( -e^{-x}\\int_0^\\infty \\frac{s\\,e^{-xs}}{1+s}\\,ds \\). Hence confirm the second term is \\( -e^{-x}/x^{2} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "remainder", "exponential integral"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Watson form.", workingLatex: "E_1(x) = e^{-x}\\int_{0}^{\\infty}\\frac{e^{-xs}}{1+s}\\,ds.", explanation: "Substitution \\( t=x(1+s) \\) as before." },
        { stepNumber: 2, description: "Peel off the leading term.", workingLatex: "\\frac{1}{1+s} = 1 - \\frac{s}{1+s}.", explanation: "An exact algebraic identity, not a truncation: \\( 1 - s/(1+s) = 1/(1+s) \\)." },
        { stepNumber: 3, description: "Split the integral.", workingLatex: "E_1(x) = e^{-x}\\int_{0}^{\\infty} e^{-xs}\\,ds - e^{-x}\\int_{0}^{\\infty}\\frac{s\\,e^{-xs}}{1+s}\\,ds.", explanation: "First integral is exactly \\( 1/x \\); second is the exact remainder \\( R_1 \\)." },
        { stepNumber: 4, description: "Identify the leading term.", workingLatex: "e^{-x}\\int_{0}^{\\infty} e^{-xs}\\,ds = \\frac{e^{-x}}{x}.", explanation: "The first term of the asymptotic series." },
        { stepNumber: 5, description: "Estimate the remainder.", workingLatex: "R_1 = -e^{-x}\\int_{0}^{\\infty}\\frac{s\\,e^{-xs}}{1+s}\\,ds \\sim -e^{-x}\\int_{0}^{\\infty} s\\,e^{-xs}\\,ds = -\\frac{e^{-x}}{x^{2}}.", explanation: "Near \\( s=0 \\), \\( s/(1+s)\\approx s \\); Watson gives \\( \\Gamma(2)/x^{2}=1/x^{2} \\)." },
        { stepNumber: 6, description: "Conclude.", workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^{2}} + \\cdots.", explanation: "Confirms the second term, matching the full series \\( e^{-x}\\sum(-1)^n n!/x^{n+1} \\)." },
      ],
      finalAnswer: "Remainder \\( R_1 = -e^{-x}\\displaystyle\\int_{0}^{\\infty}\\frac{s\\,e^{-xs}}{1+s}\\,ds \\sim -\\dfrac{e^{-x}}{x^{2}} \\)",
    },
  },
  {
    id: "am3d-024",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Consider \\( \\displaystyle K(x) = \\int_{1}^{\\infty} \\frac{e^{-x t}}{t^{3}}\\,dt \\). Using \\( t = 1+s \\), reduce \\( K \\) to Watson form and find the first three terms of its expansion as \\( x\\to\\infty \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "shift substitution", "binomial series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Shift.", workingLatex: "t = 1+s,\\; dt = ds:\\quad K(x) = e^{-x}\\int_{0}^{\\infty}\\frac{e^{-xs}}{(1+s)^{3}}\\,ds.", explanation: "\\( e^{-xt}=e^{-x}e^{-xs} \\); amplitude \\( (1+s)^{-3} \\)." },
        { stepNumber: 2, description: "Binomial-expand.", workingLatex: "(1+s)^{-3} = \\sum_{n=0}^{\\infty}\\binom{-3}{n}s^{n} = 1 - 3s + 6s^{2} - \\cdots.", explanation: "Coefficients \\( \\binom{-3}{n} = (-1)^{n}\\binom{n+2}{2} \\): \\( 1,-3,6,-10,\\dots \\)" },
        { stepNumber: 3, description: "Apply Watson's Lemma.", workingLatex: "\\int_{0}^{\\infty} e^{-xs}s^{n}\\,ds = \\frac{n!}{x^{n+1}}.", explanation: "Standard Watson term." },
        { stepNumber: 4, description: "Assemble first three terms.", workingLatex: "K(x) \\sim e^{-x}\\left(\\frac{1}{x} - \\frac{3\\cdot 1!}{x^{2}} + \\frac{6\\cdot 2!}{x^{3}} - \\cdots\\right) = e^{-x}\\left(\\frac{1}{x} - \\frac{3}{x^{2}} + \\frac{12}{x^{3}} - \\cdots\\right).", explanation: "\\( 6\\cdot 2!=12 \\). Numerically confirmed against the exact integral at \\( x=10,15 \\)." },
      ],
      finalAnswer: "\\( e^{-x}\\left(\\dfrac{1}{x} - \\dfrac{3}{x^{2}} + \\dfrac{12}{x^{3}} - \\cdots\\right) \\)",
    },
  },
  {
    id: "am3d-025",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "By making a substitution that exposes an exponential kernel, find the leading asymptotic term of \\( \\displaystyle \\int_{0}^{1} t^{x}\\,e^{-t}\\,dt \\) as \\( x\\to\\infty \\). (Hint: write \\( t^{x} = e^{x\\ln t} \\) and substitute \\( t = e^{-u/x} \\).)",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "Watson form", "logarithmic substitution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Exponentiate the power.", workingLatex: "t^{x}e^{-t} = e^{x\\ln t}\\,e^{-t}.", explanation: "The factor \\( t^{x} \\) is the large-parameter part; \\( \\ln t<0 \\) on \\( (0,1) \\), maximal at the endpoint \\( t=1 \\)." },
        { stepNumber: 2, description: "Substitute about the maximum.", workingLatex: "t = e^{-u/x},\\quad \\ln t = -\\frac{u}{x},\\quad dt = -\\frac{1}{x}e^{-u/x}\\,du,\\quad t=1\\mapsto u=0,\\; t\\to0\\mapsto u\\to\\infty.", explanation: "This sends the dominant endpoint \\( t=1 \\) to \\( u=0 \\) and linearises \\( x\\ln t = -u \\)." },
        { stepNumber: 3, description: "Rewrite.", workingLatex: "\\int_{0}^{1} t^{x}e^{-t}\\,dt = \\frac{1}{x}\\int_{0}^{\\infty} e^{-u}\\,e^{-u/x}\\,e^{-e^{-u/x}}\\,du.", explanation: "\\( e^{x\\ln t}=e^{-u} \\) is the Watson kernel (parameter \\( 1 \\) in \\( u \\)); the rest is the amplitude depending on \\( 1/x \\)." },
        { stepNumber: 4, description: "Expand the amplitude in \\( 1/x \\).", workingLatex: "e^{-u/x}\\,e^{-e^{-u/x}} = e^{-1}\\left(1 + O\\!\\left(\\tfrac{1}{x}\\right)\\right) \\text{ near } u=0,\\; \\text{and } e^{-e^{-u/x}}\\to e^{-1}.", explanation: "As \\( x\\to\\infty \\), \\( e^{-u/x}\\to1 \\) and \\( e^{-e^{-u/x}}\\to e^{-1} \\) for fixed \\( u \\)." },
        { stepNumber: 5, description: "Leading integral.", workingLatex: "\\int_{0}^{1} t^{x}e^{-t}\\,dt \\sim \\frac{e^{-1}}{x}\\int_{0}^{\\infty} e^{-u}\\,du = \\frac{e^{-1}}{x}.", explanation: "Dominated convergence gives the leading \\( e^{-1}/x \\)." },
        { stepNumber: 6, description: "Consistency check.", workingLatex: "\\int_{0}^{1} t^{x}e^{-t}\\,dt \\approx e^{-1}\\int_{0}^{1} t^{x}\\,dt = \\frac{e^{-1}}{x+1} \\sim \\frac{e^{-1}}{x}.", explanation: "Replacing \\( e^{-t}\\approx e^{-1} \\) near \\( t=1 \\) reproduces the leading term, confirming the result." },
      ],
      finalAnswer: "\\( \\dfrac{e^{-1}}{x} \\)",
      canonicalAnswer: "exp(-1)/x",
    },
  },
  {
    id: "am3d-026",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the first two terms of the asymptotic expansion of \\( \\displaystyle \\int_{0}^{\\infty} \\frac{e^{-xs}}{(1+s)(2+s)}\\,ds \\) as \\( x\\to\\infty \\) using partial fractions and Watson's Lemma.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "partial fractions"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Partial fractions.", workingLatex: "\\frac{1}{(1+s)(2+s)} = \\frac{1}{1+s} - \\frac{1}{2+s}.", explanation: "Splitting the amplitude lets us expand each factor about \\( s=0 \\) cleanly." },
        { stepNumber: 2, description: "Expand each factor.", workingLatex: "\\frac{1}{1+s} = 1 - s + \\cdots,\\qquad \\frac{1}{2+s} = \\frac12 - \\frac{s}{4} + \\cdots.", explanation: "Geometric expansions: \\( 1/(2+s)=\\tfrac12(1+s/2)^{-1} \\)." },
        { stepNumber: 3, description: "Combine the amplitudes.", workingLatex: "\\frac{1}{(1+s)(2+s)} = \\left(1-\\tfrac12\\right) + \\left(-1+\\tfrac14\\right)s + \\cdots = \\frac12 - \\frac34 s + \\cdots.", explanation: "Subtract term by term." },
        { stepNumber: 4, description: "Apply Watson's Lemma.", workingLatex: "\\int_{0}^{\\infty} e^{-xs}\\left(\\tfrac12 - \\tfrac34 s + \\cdots\\right)ds = \\frac12\\cdot\\frac{1}{x} - \\frac34\\cdot\\frac{1}{x^{2}} + \\cdots.", explanation: "Using \\( \\Gamma(1)/x \\) and \\( \\Gamma(2)/x^{2} \\)." },
        { stepNumber: 5, description: "State the result.", workingLatex: "\\int_{0}^{\\infty}\\frac{e^{-xs}}{(1+s)(2+s)}\\,ds \\sim \\frac{1}{2x} - \\frac{3}{4x^{2}} + \\cdots.", explanation: "Numerically confirmed at \\( x=10,20 \\)." },
      ],
      finalAnswer: "\\( \\dfrac{1}{2x} - \\dfrac{3}{4x^{2}} + \\cdots \\)",
    },
  },
  {
    id: "am3d-027",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 27",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "By substituting \\( t = u^{2} \\) and reducing to Watson form, evaluate \\( \\displaystyle \\lim_{x\\to\\infty} x^{1/2}\\int_{0}^{\\infty} e^{-x t}\\,t^{-1/2}\\,e^{-t}\\,dt \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "Gamma function", "limit"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the dominant kernel.", workingLatex: "e^{-xt}\\,t^{-1/2}\\,e^{-t}: \\text{ as } x\\to\\infty \\text{ the } e^{-xt} \\text{ kernel localises near } t=0.", explanation: "Near \\( t=0 \\) the amplitude is \\( t^{-1/2}e^{-t}\\approx t^{-1/2} \\)." },
        { stepNumber: 2, description: "Leading Watson term.", workingLatex: "\\int_{0}^{\\infty} e^{-xt}\\,t^{-1/2}\\,e^{-t}\\,dt \\sim \\int_{0}^{\\infty} e^{-xt}\\,t^{-1/2}\\,dt = \\frac{\\Gamma(1/2)}{x^{1/2}}.", explanation: "Watson with \\( \\lambda=\\tfrac12 \\): amplitude \\( t^{\\lambda-1}=t^{-1/2} \\), value \\( \\Gamma(1/2)/x^{1/2} \\)." },
        { stepNumber: 3, description: "Insert the Gamma value.", workingLatex: "\\Gamma(1/2) = \\sqrt{\\pi}.", explanation: "Standard special value, established from the Gaussian integral." },
        { stepNumber: 4, description: "Take the limit.", workingLatex: "x^{1/2}\\int_{0}^{\\infty} e^{-xt}\\,t^{-1/2}\\,e^{-t}\\,dt \\to \\sqrt{\\pi}.", explanation: "Multiplying by \\( x^{1/2} \\) cancels the decay; the \\( e^{-t} \\) factor contributes only at higher order." },
      ],
      finalAnswer: "\\( \\sqrt{\\pi} \\)",
      canonicalAnswer: "sqrt(pi)",
    },
  },
  {
    id: "am3d-028",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The integral \\( \\displaystyle I(x) = \\int_{0}^{\\pi^{2}} e^{x\\cos\\sqrt{t}}\\,dt \\) has its dominant contribution from \\( t \\) near \\( 0 \\). By substituting \\( u=\\sqrt t \\), obtain the first two terms of \\( I(x) \\) as \\( x\\to\\infty \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Laplace's method", "square-root substitution", "endpoint contribution"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Remove the root.", workingLatex: "u=\\sqrt t,\\; t=u^{2},\\; dt=2u\\,du:\\quad I(x) = \\int_{0}^{\\pi} e^{x\\cos u}\\,2u\\,du.", explanation: "Upper limit \\( t=\\pi^{2}\\mapsto u=\\pi \\)." },
        { stepNumber: 2, description: "Locate the maximum.", workingLatex: "\\cos u \\le 1, \\text{ maximal at } u=0;\\quad \\cos u = 1 - \\tfrac12 u^{2} + \\tfrac{1}{24}u^{4} - \\cdots.", explanation: "Endpoint maximum at \\( u=0 \\); the contribution from \\( u=\\pi \\) (where \\( \\cos=-1 \\)) is exponentially smaller." },
        { stepNumber: 3, description: "Local model.", workingLatex: "I(x) \\sim e^{x}\\int_{0}^{\\infty} 2u\\,e^{-xu^{2}/2}\\,e^{x(\\frac{1}{24}u^{4}-\\cdots)}\\,du.", explanation: "Factor \\( e^{x} \\); the quartic correction produces the second term." },
        { stepNumber: 4, description: "Leading term.", workingLatex: "e^{x}\\int_{0}^{\\infty} 2u\\,e^{-xu^{2}/2}\\,du = e^{x}\\cdot\\frac{2}{x} = \\frac{2e^{x}}{x}.", explanation: "With \\( v=u^{2} \\), \\( \\int_0^\\infty 2u\\,e^{-xu^2/2}\\,du = 2/x \\)." },
        { stepNumber: 5, description: "Second term from the quartic.", workingLatex: "2e^{x}\\int_{0}^{\\infty} u\\,e^{-xu^{2}/2}\\,\\frac{x}{24}u^{4}\\,du = \\frac{x}{12}e^{x}\\int_{0}^{\\infty} u^{5}e^{-xu^{2}/2}\\,du = \\frac{x}{12}e^{x}\\cdot\\frac{8}{x^{3}} = \\frac{2e^{x}}{3x^{2}}.", explanation: "Using \\( \\int_0^\\infty u^{5}e^{-xu^2/2}\\,du = 8/x^{3} \\)." },
        { stepNumber: 6, description: "Combine.", workingLatex: "I(x) \\sim e^{x}\\left(\\frac{2}{x} + \\frac{2}{3x^{2}} + \\cdots\\right).", explanation: "Matches Sheet 1 Q13; leading terms confirmed numerically at \\( x=40,80 \\)." },
      ],
      finalAnswer: "\\( e^{x}\\left(\\dfrac{2}{x} + \\dfrac{2}{3x^{2}} + \\cdots\\right) \\)",
    },
  },
  // REVIEW: this question's claim is a structural/uniqueness statement about which substitution yields Watson form, not a single numeric value; the leading-term value IS numerically checked but the "no simpler substitution" assertion is qualitative.
  {
    id: "am3d-029",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Explain why a linear substitution \\( t = x(1+s) \\) reduces \\( \\int_{x}^{\\infty} g(t)e^{-t}\\,dt \\) to Watson form, but a quadratic phase such as \\( \\int_{x}^{\\infty} g(t)e^{-t^{2}}\\,dt \\) requires the nonlinear substitution \\( w=t^{2}-x^{2} \\). Illustrate by finding the leading term of \\( \\int_{x}^{\\infty} t\\,e^{-t^{2}}\\,dt \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "substitution choice", "Gaussian"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Linear-phase case.", workingLatex: "t=x(1+s)\\;\\Rightarrow\\; e^{-t}=e^{-x}e^{-xs}, \\text{ exactly the kernel } e^{-xs}.", explanation: "Because the phase \\( -t \\) is linear in \\( t \\), a linear shift produces a pure exponential kernel — no further change needed." },
        { stepNumber: 2, description: "Quadratic-phase obstruction.", workingLatex: "t=x(1+s)\\;\\Rightarrow\\; e^{-t^{2}} = e^{-x^{2}(1+s)^{2}} = e^{-x^{2}}e^{-x^{2}(2s+s^{2})},", explanation: "The exponent is not linear in \\( s \\); the kernel \\( e^{-x^{2}(2s+s^{2})} \\) is not yet of Watson type." },
        { stepNumber: 3, description: "Right nonlinear variable.", workingLatex: "w = t^{2}-x^{2}\\;\\Rightarrow\\; e^{-t^{2}} = e^{-x^{2}}e^{-w},\\quad dw = 2t\\,dt.", explanation: "Choosing \\( w \\) equal to the phase deviation makes the kernel exactly \\( e^{-w} \\) (parameter absorbed)." },
        { stepNumber: 4, description: "Apply to the illustrative integral.", workingLatex: "\\int_{x}^{\\infty} t\\,e^{-t^{2}}\\,dt = e^{-x^{2}}\\int_{0}^{\\infty} \\frac{1}{2}\\,e^{-w}\\,dw, \\quad (t\\,dt = \\tfrac12\\,dw).", explanation: "The amplitude \\( t \\) is exactly cancelled by the Jacobian \\( dw=2t\\,dt \\) — a particularly clean case." },
        { stepNumber: 5, description: "Evaluate.", workingLatex: "= \\frac{e^{-x^{2}}}{2}\\int_{0}^{\\infty} e^{-w}\\,dw = \\frac{e^{-x^{2}}}{2}.", explanation: "This is exact: \\( \\int_x^\\infty t e^{-t^2}dt = \\tfrac12 e^{-x^2} \\)." },
      ],
      finalAnswer: "\\( \\displaystyle\\int_{x}^{\\infty} t\\,e^{-t^{2}}\\,dt = \\frac{e^{-x^{2}}}{2} \\) (exact)",
      canonicalAnswer: "exp(-x^2)/2",
    },
  },
  {
    id: "am3d-030",
    topicRef: "am3d",
    topicTitle: "Substitutions reducing integrals to Watson form 30",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "By an appropriate shift to Watson form, show that \\( \\displaystyle \\int_{x}^{\\infty} \\frac{e^{-t}}{\\sqrt{t-x+1}}\\,dt = C\\,e^{-x} \\) exactly, and identify the constant \\( C \\) in closed form. Comment on why there is no \\( 1/x \\) series.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's Lemma", "shift substitution", "half-integer power", "erfc"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Shift to the lower limit.", workingLatex: "t = x + s,\\quad dt = ds,\\quad t=x\\mapsto s=0,\\quad t-x+1 = 1+s.", explanation: "A pure shift by \\( x \\) sends the lower limit to the origin and turns the awkward \\( \\sqrt{t-x+1} \\) into \\( \\sqrt{1+s} \\)." },
        { stepNumber: 2, description: "Factor the exponential.", workingLatex: "\\int_{x}^{\\infty}\\frac{e^{-t}}{\\sqrt{t-x+1}}\\,dt = e^{-x}\\int_{0}^{\\infty}\\frac{e^{-s}}{\\sqrt{1+s}}\\,ds.", explanation: "Crucially the shift does NOT introduce the large parameter into the kernel — it stays \\( e^{-s} \\) with parameter \\( 1 \\). So the remaining integral is a pure constant." },
        { stepNumber: 3, description: "Name the constant.", workingLatex: "C = \\int_{0}^{\\infty}\\frac{e^{-s}}{\\sqrt{1+s}}\\,ds.", explanation: "This is a fixed number independent of \\( x \\); the entire \\( x \\)-dependence sits in the prefactor \\( e^{-x} \\)." },
        { stepNumber: 4, description: "Evaluate \\( C \\) by a second substitution.", workingLatex: "u = \\sqrt{1+s},\\; s = u^{2}-1,\\; ds = 2u\\,du:\\quad C = 2e\\int_{1}^{\\infty} e^{-u^{2}}\\,du.", explanation: "With \\( e^{-s}=e\\,e^{-u^{2}} \\) and \\( 1/\\sqrt{1+s}\\cdot 2u\\,du = 2\\,du \\), the integrand becomes a Gaussian tail." },
        { stepNumber: 5, description: "Express via the error function.", workingLatex: "\\int_{1}^{\\infty} e^{-u^{2}}\\,du = \\frac{\\sqrt{\\pi}}{2}\\operatorname{erfc}(1) \\;\\Rightarrow\\; C = \\sqrt{\\pi}\\,e\\,\\operatorname{erfc}(1).", explanation: "Numerically \\( C \\approx 0.7579 \\); verified directly against the original integral at \\( x=10,20 \\)." },
        { stepNumber: 6, description: "Why no \\( 1/x \\) series.", workingLatex: "\\int_{x}^{\\infty}\\frac{e^{-t}}{\\sqrt{t-x+1}}\\,dt = \\sqrt{\\pi}\\,e\\,\\operatorname{erfc}(1)\\,e^{-x}.", explanation: "Because the shift left a parameter-free Watson integral, the result is purely exponential — a single closed term, with no algebraic \\( 1/x \\) corrections at all." },
      ],
      finalAnswer: "\\( C\\,e^{-x} \\) with \\( C = \\sqrt{\\pi}\\,e\\,\\operatorname{erfc}(1) \\approx 0.7579 \\)",
      canonicalAnswer: "sqrt(pi)*exp(1)*erfc(1)*exp(-x)",
    },
  },
];
