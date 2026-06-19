import { Question } from "@/lib/types";

/**
 * Asymptotic Methods § am3b — The exponential integral E₁ (large- and small-x)
 * Topic group: Integration by Parts & Watson's Lemma
 * Ref: am3b
 *
 * 30 fully-worked questions seeded from Cambridge Part II Asymptotic Methods
 * Example Sheet 1 (esp. Q10), varied in constants/limits/framing.
 *
 * Scope:
 *   - Large-x expansion of E1(x) = ∫_x^∞ e^{-t}/t dt by repeated integration
 *     by parts:  E1(x) ~ e^{-x}( 1/x − 1/x² + 2/x³ − 6/x⁴ + … )
 *               = e^{-x} Σ_{n≥0} (−1)^n n! / x^{n+1},  remainder O(e^{-x} x^{-N-1}).
 *   - Small-x expansion via d/dx[E1(x)+ln x] = (1 − e^{-x})/x and the constant
 *     lim_{x→0}[E1(x)+ln x] = −γ (Euler's constant):
 *       E1(x) = −γ − ln x + x − x²/4 + x³/18 − …
 *             = −γ − ln x + Σ_{n≥1} (−1)^{n+1} x^n /(n·n!).
 *
 * Numerically verified with mpmath (mp.e1, mp.euler): large-x partial sums vs
 * exact at x=5,10,20; small-x series vs exact at x=0.1,0.3,0.5; γ≈0.5772156649;
 * E1+ln x → −γ as x→0; d/dx[E1+ln x]=(1−e^{-x})/x by central difference;
 * Watson-lemma form E1(x)=e^{-x}∫_0^∞ e^{-xs}/(1+s) ds.
 */
export const questions: Question[] = [
  // ── Foundation: core technique in isolation ─────────────────────────────
  {
    id: "am3b-001",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "The exponential integral is defined by \\( E_1(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{t}\\,dt \\). Perform one integration by parts (integrating \\( e^{-t} \\)) to extract the leading behaviour as \\( x \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exponential integral", "integration by parts", "large-x"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Choose parts.", workingLatex: "u = \\frac{1}{t}, \\qquad dv = e^{-t}\\,dt \\;\\Rightarrow\\; v = -e^{-t}.", explanation: "We integrate the rapidly-decaying factor \\( e^{-t} \\) and differentiate the slowly-varying \\( 1/t \\). This is the standard choice that pulls the dominant exponential factor out front." },
        { stepNumber: 2, description: "Apply the parts formula.", workingLatex: "E_1(x) = \\Big[ -\\frac{e^{-t}}{t} \\Big]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt.", explanation: "The boundary term uses \\( v\\,u \\); the remaining integral is \\( -\\int v\\,du \\) with \\( du = -t^{-2}\\,dt \\), which flips its sign to a subtraction." },
        { stepNumber: 3, description: "Evaluate the boundary term.", workingLatex: "\\Big[ -\\frac{e^{-t}}{t} \\Big]_x^{\\infty} = 0 - \\Big( -\\frac{e^{-x}}{x} \\Big) = \\frac{e^{-x}}{x}.", explanation: "At \\( t=\\infty \\) the exponential kills the term; at \\( t=x \\) we pick up \\( e^{-x}/x \\)." },
        { stepNumber: 4, description: "Identify the leading term.", workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - \\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt \\sim \\frac{e^{-x}}{x}.", explanation: "The remaining integral has an extra power of \\( t \\) in the denominator, so it is smaller by a factor \\( 1/x \\) — it is the start of the asymptotic series, not the leading order.", mafs: `<Mafs viewBox={{ x: [-0.8, 4.0], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.exp(1 - t) / t} domain={[1, 4]} color="var(--mafs-fg-accent)" weight={3} />
  <Line.Segment point1={[1, 0]} point2={[1, 1]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Point x={1} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.15, 1.12]} tex="t=x" color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.7, 0.5]} tex="\\dfrac{e^{-t}}{t}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.7, -0.2]} tex="t" />
</Mafs>` },
      ],
      finalAnswer: "\\( E_1(x) \\sim \\dfrac{e^{-x}}{x} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x)/x",
    },
  },
  {
    id: "am3b-002",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Starting from \\( E_1(x) = \\dfrac{e^{-x}}{x} - \\displaystyle\\int_x^{\\infty} \\dfrac{e^{-t}}{t^2}\\,dt \\), integrate by parts once more to obtain the first two terms of the large-\\( x \\) expansion.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exponential integral", "integration by parts", "large-x"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Choose parts on the remaining integral.", workingLatex: "u = \\frac{1}{t^2}, \\qquad dv = e^{-t}\\,dt \\;\\Rightarrow\\; v = -e^{-t}.", explanation: "Same pattern as before: integrate the exponential, differentiate the negative power of \\( t \\)." },
        { stepNumber: 2, description: "Apply the parts formula.", workingLatex: "\\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt = \\Big[ -\\frac{e^{-t}}{t^2} \\Big]_x^{\\infty} - \\int_x^{\\infty} \\frac{2e^{-t}}{t^3}\\,dt.", explanation: "Here \\( du = -2t^{-3}\\,dt \\), so \\( -\\int v\\,du = -\\int (-e^{-t})(-2t^{-3})\\,dt = -\\int 2e^{-t}t^{-3}\\,dt \\)." },
        { stepNumber: 3, description: "Evaluate the new boundary term.", workingLatex: "\\Big[ -\\frac{e^{-t}}{t^2} \\Big]_x^{\\infty} = \\frac{e^{-x}}{x^2}.", explanation: "Again only the lower limit survives." },
        { stepNumber: 4, description: "Substitute back.", workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^2} + 2\\int_x^{\\infty} \\frac{e^{-t}}{t^3}\\,dt.", explanation: "The leftover integral is \\( O(e^{-x}x^{-3}) \\), so to two terms \\( E_1(x) \\sim e^{-x}(x^{-1} - x^{-2}) \\)." },
      ],
      finalAnswer: "\\( E_1(x) \\sim e^{-x}\\left(\\dfrac{1}{x} - \\dfrac{1}{x^2}\\right) \\).",
      canonicalAnswer: "exp(-x)*(1/x - 1/x^2)",
    },
  },
  {
    id: "am3b-003",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate the function \\( g(x) = E_1(x) + \\ln x \\), where \\( E_1(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{t}\\,dt \\). Give \\( g'(x) \\) in a form that is finite as \\( x \\to 0^{+} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "differentiation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate E₁ by the fundamental theorem.", workingLatex: "\\frac{d}{dx}\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt = -\\frac{e^{-x}}{x}.", explanation: "Differentiating with respect to the lower limit introduces a minus sign and replaces \\( t \\) by \\( x \\) in the integrand." },
        { stepNumber: 2, description: "Differentiate the logarithm.", workingLatex: "\\frac{d}{dx}\\ln x = \\frac{1}{x}.", explanation: "Standard derivative." },
        { stepNumber: 3, description: "Combine.", workingLatex: "g'(x) = -\\frac{e^{-x}}{x} + \\frac{1}{x} = \\frac{1 - e^{-x}}{x}.", explanation: "The two \\( 1/x \\) singularities have been combined; the numerator now vanishes at \\( x=0 \\)." },
        { stepNumber: 4, description: "Confirm regularity at the origin.", workingLatex: "\\frac{1 - e^{-x}}{x} \\to 1 \\quad (x \\to 0^{+}).", explanation: "Since \\( 1-e^{-x} = x - x^2/2 + \\cdots \\), the quotient is analytic at \\( 0 \\) — exactly why combining with \\( \\ln x \\) tames the singularity of \\( E_1 \\)." },
      ],
      finalAnswer: "\\( g'(x) = \\dfrac{1 - e^{-x}}{x} \\).",
      canonicalAnswer: "(1 - exp(-x))/x",
    },
  },
  {
    id: "am3b-004",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand \\( \\dfrac{1 - e^{-x}}{x} \\) as a power series in \\( x \\) about \\( x = 0 \\), giving terms up to \\( x^2 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "Taylor series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Expand the exponential.", workingLatex: "e^{-x} = 1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + \\frac{x^4}{24} - \\cdots .", explanation: "Maclaurin series for \\( e^{-x} \\)." },
        { stepNumber: 2, description: "Form the numerator.", workingLatex: "1 - e^{-x} = x - \\frac{x^2}{2} + \\frac{x^3}{6} - \\frac{x^4}{24} + \\cdots .", explanation: "Subtract from 1; the constant terms cancel, leaving a factor of \\( x \\) up front." },
        { stepNumber: 3, description: "Divide by x.", workingLatex: "\\frac{1 - e^{-x}}{x} = 1 - \\frac{x}{2} + \\frac{x^2}{6} - \\frac{x^3}{24} + \\cdots .", explanation: "Term-by-term division lowers each power by one. The general coefficient of \\( x^{n-1} \\) is \\( (-1)^{n+1}/n! \\)." },
      ],
      finalAnswer: "\\( \\dfrac{1 - e^{-x}}{x} = 1 - \\dfrac{x}{2} + \\dfrac{x^2}{6} - \\cdots \\).",
      canonicalAnswer: "1 - x/2 + x^2/6",
    },
  },
  {
    id: "am3b-005",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write down the general term and the remainder estimate for the large-\\( x \\) asymptotic expansion \\( E_1(x) \\sim e^{-x}\\big(b_1 x^{-1} + b_2 x^{-2} + b_3 x^{-3} + \\cdots\\big) \\). State \\( b_1, b_2, b_3, b_4 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "remainder"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the pattern from repeated parts.", workingLatex: "E_1(x) = e^{-x}\\sum_{n=0}^{N-1} \\frac{(-1)^n\\, n!}{x^{n+1}} + R_N(x).", explanation: "Each integration by parts introduces a factor \\( -n \\) (from differentiating \\( t^{-n} \\)) and an extra power of \\( 1/t \\); iterating gives the factorial numerators with alternating signs." },
        { stepNumber: 2, description: "Read off the first coefficients.", workingLatex: "b_1 = 0! = 1,\\quad b_2 = -1! = -1,\\quad b_3 = 2! = 2,\\quad b_4 = -3! = -6.", explanation: "With \\( b_{n+1} = (-1)^n n! \\): \\( b_1=1, b_2=-1, b_3=2, b_4=-6 \\)." },
        { stepNumber: 3, description: "State the remainder order.", workingLatex: "R_N(x) = (-1)^{N} N!\\int_x^{\\infty}\\frac{e^{-t}}{t^{N+1}}\\,dt = O\\!\\big(e^{-x} x^{-N-1}\\big).", explanation: "The remainder is the size of the first omitted term, the hallmark of an optimally-truncated asymptotic series." },
      ],
      finalAnswer: "\\( b_1=1,\\ b_2=-1,\\ b_3=2,\\ b_4=-6 \\); remainder \\( O(e^{-x}x^{-N-1}) \\).",
    },
  },
  {
    id: "am3b-006",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Given that \\( \\lim_{x\\to 0}[E_1(x)+\\ln x] = -\\gamma \\) (Euler's constant), and that \\( \\dfrac{d}{dx}[E_1(x)+\\ln x] = \\dfrac{1-e^{-x}}{x} \\), find the small-\\( x \\) expansion of \\( E_1(x) \\) up to the term in \\( x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "Euler gamma"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Integrate the derivative's series.", workingLatex: "\\frac{1-e^{-x}}{x} = 1 - \\frac{x}{2} + \\cdots \\;\\Rightarrow\\; \\int_0^x = x - \\frac{x^2}{4} + \\cdots .", explanation: "Integrate the power series found earlier term-by-term from \\( 0 \\) to \\( x \\); the constant of integration is fixed by the limit below." },
        { stepNumber: 2, description: "Apply the boundary constant.", workingLatex: "E_1(x) + \\ln x = -\\gamma + x - \\frac{x^2}{4} + \\cdots .", explanation: "The value at \\( x\\to 0 \\) is \\( -\\gamma \\), which becomes the additive constant of the antiderivative." },
        { stepNumber: 3, description: "Solve for E₁.", workingLatex: "E_1(x) = -\\gamma - \\ln x + x - \\frac{x^2}{4} + \\cdots .", explanation: "Subtract \\( \\ln x \\). To the requested order: \\( E_1(x) = -\\gamma - \\ln x + x + O(x^2) \\)." },
      ],
      finalAnswer: "\\( E_1(x) = -\\gamma - \\ln x + x + O(x^2) \\).",
      canonicalAnswer: "-gamma - log(x) + x",
    },
  },

  // ── Standard: typical sheet-level ───────────────────────────────────────
  {
    id: "am3b-007",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Use repeated integration by parts to find the large-\\( x \\) asymptotic expansion of \\( E_1(x) = \\displaystyle\\int_x^{\\infty} \\dfrac{e^{-t}}{t}\\,dt \\) up to and including the term in \\( x^{-4} \\), and state the order of the remainder.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "integration by parts", "large-x"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "First integration by parts.", workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - \\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt.", explanation: "Integrate \\( e^{-t} \\), differentiate \\( 1/t \\). The boundary term gives the leading order." },
        { stepNumber: 2, description: "Second integration by parts.", workingLatex: "= \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^2} + 2\\int_x^{\\infty} \\frac{e^{-t}}{t^3}\\,dt.", explanation: "Differentiating \\( t^{-2} \\) brings down a factor \\( -2 \\); the double negative leaves \\( +2\\int e^{-t}t^{-3} \\)." },
        { stepNumber: 3, description: "Third integration by parts.", workingLatex: "= \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^2} + \\frac{2e^{-x}}{x^3} - 6\\int_x^{\\infty} \\frac{e^{-t}}{t^4}\\,dt.", explanation: "Differentiating \\( t^{-3} \\) brings down \\( -3 \\), multiplying the running factor \\( 2 \\) to give \\( -6 \\); the boundary term contributes \\( +2e^{-x}/x^3 \\)." },
        { stepNumber: 4, description: "Fourth integration by parts.", workingLatex: "= e^{-x}\\!\\left(\\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\frac{6}{x^4}\\right) + 24\\int_x^{\\infty} \\frac{e^{-t}}{t^5}\\,dt.", explanation: "The numerators are the factorials \\( 0!,1!,2!,3! \\) with alternating signs; the running constant is now \\( 24 = 4! \\)." },
        { stepNumber: 5, description: "Bound the remainder.", workingLatex: "\\left| 24\\int_x^{\\infty} \\frac{e^{-t}}{t^5}\\,dt \\right| \\le \\frac{24}{x^5}\\int_x^{\\infty} e^{-t}\\,dt = \\frac{24\\,e^{-x}}{x^5}.", explanation: "Bounding \\( t^{-5} \\le x^{-5} \\) on \\( [x,\\infty) \\) shows the remainder is the size of the next term, \\( O(e^{-x}x^{-5}) \\)." },
        { stepNumber: 6, description: "State the result.", workingLatex: "E_1(x) \\sim e^{-x}\\!\\left(\\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\frac{6}{x^4}\\right), \\quad R = O\\!\\big(e^{-x}x^{-5}\\big).", explanation: "This is the expansion to four terms with its remainder estimate." },
      ],
      finalAnswer: "\\( E_1(x) \\sim e^{-x}\\left(\\dfrac{1}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3} - \\dfrac{6}{x^4}\\right) \\), remainder \\( O(e^{-x}x^{-5}) \\).",
      canonicalAnswer: "exp(-x)*(1/x - 1/x^2 + 2/x^3 - 6/x^4)",
    },
  },
  {
    id: "am3b-008",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "By making the substitution \\( t = x(1+s) \\) in \\( E_1(x) = \\displaystyle\\int_x^{\\infty} \\dfrac{e^{-t}}{t}\\,dt \\) and applying Watson's lemma, recover the large-\\( x \\) expansion to three terms.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "Watson's lemma", "large-x"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute t = x(1+s).", workingLatex: "t = x(1+s),\\quad dt = x\\,ds,\\quad t:x\\to\\infty \\Rightarrow s:0\\to\\infty.", explanation: "The lower limit \\( t=x \\) maps to \\( s=0 \\), putting the integral in Laplace form ready for Watson's lemma." },
        { stepNumber: 2, description: "Rewrite the integral.", workingLatex: "E_1(x) = \\int_0^{\\infty} \\frac{e^{-x(1+s)}}{x(1+s)}\\,x\\,ds = e^{-x}\\int_0^{\\infty} \\frac{e^{-xs}}{1+s}\\,ds.", explanation: "The \\( x \\) from \\( dt \\) cancels the \\( x \\) in the denominator; the constant factor \\( e^{-x} \\) comes out front." },
        { stepNumber: 3, description: "Expand the amplitude near s = 0.", workingLatex: "\\frac{1}{1+s} = 1 - s + s^2 - s^3 + \\cdots .", explanation: "Watson's lemma only needs the behaviour of the slowly-varying amplitude at the endpoint \\( s=0 \\), where the exponential \\( e^{-xs} \\) concentrates.", mafs: `<Mafs viewBox={{ x: [-0.8, 4.0], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(s) => Math.exp(-2.6 * s)} domain={[0, 4]} color="var(--mafs-fg-accent)" weight={3} />
  <Plot.OfX y={(s) => 1 / (1 + s)} domain={[0, 4]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.45, 1.1]} tex="s=0" color="var(--mafs-fg-accent)" />
  <LaTeX at={[1.4, 0.7]} tex="e^{-xs}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.0, 0.2]} tex="\\dfrac{1}{1+s}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.7, -0.2]} tex="s" />
</Mafs>` },
        { stepNumber: 4, description: "Apply Watson's lemma term-by-term.", workingLatex: "\\int_0^{\\infty} s^n e^{-xs}\\,ds = \\frac{n!}{x^{n+1}}.", explanation: "Each monomial \\( s^n \\) integrates to \\( n!/x^{n+1} \\); Watson's lemma guarantees the resulting series is asymptotic as \\( x\\to\\infty \\)." },
        { stepNumber: 5, description: "Assemble the expansion.", workingLatex: "E_1(x) \\sim e^{-x}\\!\\left(\\frac{0!}{x} - \\frac{1!}{x^2} + \\frac{2!}{x^3} - \\cdots\\right) = e^{-x}\\!\\left(\\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots\\right).", explanation: "This matches the integration-by-parts result, confirming both methods. The general term is \\( (-1)^n n!/x^{n+1} \\)." },
      ],
      finalAnswer: "\\( E_1(x) \\sim e^{-x}\\left(\\dfrac{1}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3} - \\cdots\\right) \\).",
      canonicalAnswer: "exp(-x)*(1/x - 1/x^2 + 2/x^3)",
    },
  },
  {
    id: "am3b-009",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Obtain the small-\\( x \\) asymptotic expansion of \\( E_1(x) \\) up to and including the term in \\( x^2 \\), by considering \\( \\dfrac{d}{dx}[E_1(x)+\\ln x] \\) and integrating. You may assume \\( \\lim_{x\\to 0}[E_1(x)+\\ln x] = -\\gamma \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "Euler gamma"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the combination.", workingLatex: "\\frac{d}{dx}[E_1(x)+\\ln x] = -\\frac{e^{-x}}{x} + \\frac{1}{x} = \\frac{1-e^{-x}}{x}.", explanation: "The two simple poles at \\( x=0 \\) cancel, leaving a function analytic at the origin." },
        { stepNumber: 2, description: "Expand the derivative.", workingLatex: "\\frac{1-e^{-x}}{x} = 1 - \\frac{x}{2} + \\frac{x^2}{6} - \\cdots .", explanation: "Using \\( 1-e^{-x}=x-\\tfrac{x^2}{2}+\\tfrac{x^3}{6}-\\cdots \\) and dividing by \\( x \\)." },
        { stepNumber: 3, description: "Integrate term-by-term.", workingLatex: "\\int_0^x \\frac{1-e^{-u}}{u}\\,du = x - \\frac{x^2}{4} + \\frac{x^3}{18} - \\cdots .", explanation: "Each power \\( u^{k} \\) integrates to \\( x^{k+1}/(k+1) \\); this is the antiderivative vanishing at \\( x=0 \\)." },
        { stepNumber: 4, description: "Fix the constant.", workingLatex: "E_1(x) + \\ln x = -\\gamma + x - \\frac{x^2}{4} + \\cdots .", explanation: "Adding the constant \\( -\\gamma \\) fixed by the stated limit." },
        { stepNumber: 5, description: "Isolate E₁.", workingLatex: "E_1(x) = -\\gamma - \\ln x + x - \\frac{x^2}{4} + \\cdots .", explanation: "Subtracting \\( \\ln x \\) gives the small-\\( x \\) expansion to \\( O(x^2) \\)." },
      ],
      finalAnswer: "\\( E_1(x) = -\\gamma - \\ln x + x - \\dfrac{x^2}{4} + \\cdots \\).",
      canonicalAnswer: "-gamma - log(x) + x - x^2/4",
    },
  },
  {
    id: "am3b-010",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Show that the general term of the small-\\( x \\) series for \\( E_1(x) \\) is \\( \\dfrac{(-1)^{n+1}x^n}{n\\,n!} \\), so that \\( E_1(x) = -\\gamma - \\ln x + \\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n+1}x^n}{n\\,n!} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "general term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "General term of the derivative.", workingLatex: "\\frac{1-e^{-x}}{x} = \\sum_{m=1}^{\\infty} \\frac{(-1)^{m+1}x^{m-1}}{m!}.", explanation: "From \\( 1-e^{-x}=\\sum_{m\\ge1}(-1)^{m+1}x^m/m! \\); dividing by \\( x \\) shifts the power to \\( m-1 \\)." },
        { stepNumber: 2, description: "Integrate the general term.", workingLatex: "\\int_0^x \\frac{(-1)^{m+1}u^{m-1}}{m!}\\,du = \\frac{(-1)^{m+1}x^{m}}{m\\cdot m!}.", explanation: "Integrating \\( u^{m-1} \\) gives \\( x^m/m \\); the extra \\( m \\) in the denominator is what makes the small-\\( x \\) series differ from the exponential's own series." },
        { stepNumber: 3, description: "Add the constant and relabel.", workingLatex: "E_1(x) = -\\gamma - \\ln x + \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}x^{n}}{n\\cdot n!}.", explanation: "Renaming \\( m\\to n \\). The first few terms are \\( x - x^2/4 + x^3/18 - \\cdots \\), confirming the pattern." },
      ],
      finalAnswer: "\\( E_1(x) = -\\gamma - \\ln x + \\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n+1}x^{n}}{n\\,n!} \\).",
    },
  },
  {
    id: "am3b-011",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 11",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Use the small-\\( x \\) expansion \\( E_1(x) = -\\gamma - \\ln x + x - \\dfrac{x^2}{4} + \\cdots \\) to give a two-term estimate of \\( E_1\\!\\left(\\tfrac12\\right) \\) (keeping the \\( -\\gamma - \\ln x \\) part exact). Express your estimate in closed form.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "numerical estimate"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write down the truncated series.", workingLatex: "E_1\\!\\left(\\tfrac12\\right) \\approx -\\gamma - \\ln\\tfrac12 + \\tfrac12.", explanation: "Keeping the leading log/constant pair plus the linear term (the \\( x^2 \\) term \\( -1/16 \\) is dropped here)." },
        { stepNumber: 2, description: "Simplify the logarithm.", workingLatex: "-\\ln\\tfrac12 = \\ln 2.", explanation: "\\( \\ln(1/2) = -\\ln 2 \\)." },
        { stepNumber: 3, description: "Combine into closed form.", workingLatex: "E_1\\!\\left(\\tfrac12\\right) \\approx \\ln 2 - \\gamma + \\tfrac12.", explanation: "This is the requested closed form." },
        { stepNumber: 4, description: "Sanity check numerically.", workingLatex: "\\ln 2 - \\gamma + \\tfrac12 \\approx 0.616, \\qquad E_1(0.5) = 0.5598\\ldots", explanation: "The two-term estimate \\( 0.616 \\) overshoots the true value \\( 0.5598 \\) by the dropped \\( -x^2/4 = -1/16 \\approx -0.0625 \\): \\( 0.616-0.0625\\approx0.553 \\), close to exact, confirming the series." },
      ],
      finalAnswer: "\\( E_1\\!\\left(\\tfrac12\\right) \\approx \\ln 2 - \\gamma + \\tfrac12 \\).",
      canonicalAnswer: "log(2) - gamma + 1/2",
    },
  },
  {
    id: "am3b-012",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the large-\\( x \\) asymptotic expansion (to three terms) of \\( I(x) = \\displaystyle\\int_x^{\\infty} \\dfrac{e^{-t}}{t^2}\\,dt \\) by integration by parts.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "integration by parts", "large-x", "variant"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "First parts.", workingLatex: "I(x) = \\Big[-\\frac{e^{-t}}{t^2}\\Big]_x^{\\infty} - \\int_x^{\\infty}\\frac{2e^{-t}}{t^3}\\,dt = \\frac{e^{-x}}{x^2} - 2\\int_x^{\\infty}\\frac{e^{-t}}{t^3}\\,dt.", explanation: "Integrate \\( e^{-t} \\), differentiate \\( t^{-2} \\) (giving \\( -2t^{-3} \\))." },
        { stepNumber: 2, description: "Second parts.", workingLatex: "= \\frac{e^{-x}}{x^2} - \\frac{2e^{-x}}{x^3} + 6\\int_x^{\\infty}\\frac{e^{-t}}{t^4}\\,dt.", explanation: "Differentiating \\( t^{-3} \\) gives \\( -3t^{-4} \\); the running constant becomes \\( 2\\cdot3=6 \\)." },
        { stepNumber: 3, description: "Third parts.", workingLatex: "= \\frac{e^{-x}}{x^2} - \\frac{2e^{-x}}{x^3} + \\frac{6e^{-x}}{x^4} - 24\\int_x^{\\infty}\\frac{e^{-t}}{t^5}\\,dt.", explanation: "Pattern: numerators \\( 1, 2, 6 = 1!, 2!, 3! \\) shifted, signs alternating." },
        { stepNumber: 4, description: "State the expansion.", workingLatex: "I(x) \\sim e^{-x}\\!\\left(\\frac{1}{x^2} - \\frac{2}{x^3} + \\frac{6}{x^4}\\right), \\quad R=O(e^{-x}x^{-5}).", explanation: "Note \\( I(x) = -E_1'\\)-type structure: indeed \\( I(x)=\\tfrac{e^{-x}}{x}-E_1(x) \\), consistent with the one-parts identity from earlier." },
      ],
      finalAnswer: "\\( I(x) \\sim e^{-x}\\left(\\dfrac{1}{x^2} - \\dfrac{2}{x^3} + \\dfrac{6}{x^4}\\right) \\).",
      canonicalAnswer: "exp(-x)*(1/x^2 - 2/x^3 + 6/x^4)",
    },
  },
  {
    id: "am3b-013",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Verify the integral representation \\( E_1(x) = \\displaystyle\\int_1^{\\infty} \\dfrac{e^{-xu}}{u}\\,du \\) and use it to obtain the leading large-\\( x \\) behaviour by Watson's lemma at the endpoint \\( u=1 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "Watson's lemma", "integral representation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute t = xu in the definition.", workingLatex: "E_1(x) = \\int_x^{\\infty}\\frac{e^{-t}}{t}\\,dt, \\quad t=xu \\Rightarrow E_1(x)=\\int_1^{\\infty}\\frac{e^{-xu}}{u}\\,du.", explanation: "With \\( dt=x\\,du \\) the factor \\( x \\) cancels against \\( t=xu \\) in the denominator; the lower limit \\( t=x \\) becomes \\( u=1 \\)." },
        { stepNumber: 2, description: "Shift the endpoint to the origin.", workingLatex: "u = 1+s: \\quad E_1(x) = e^{-x}\\int_0^{\\infty}\\frac{e^{-xs}}{1+s}\\,ds.", explanation: "Watson's lemma needs the active endpoint at \\( s=0 \\). The factor \\( e^{-x} \\) from \\( e^{-x(1+s)} \\) comes out." },
        { stepNumber: 3, description: "Leading-order amplitude.", workingLatex: "\\frac{1}{1+s}\\Big|_{s=0} = 1 \\;\\Rightarrow\\; \\int_0^{\\infty} e^{-xs}\\,ds = \\frac{1}{x}.", explanation: "The amplitude at the endpoint is \\( 1 \\); the leading Laplace integral is \\( 1/x \\)." },
        { stepNumber: 4, description: "State the leading behaviour.", workingLatex: "E_1(x) \\sim \\frac{e^{-x}}{x} \\quad (x\\to\\infty).", explanation: "Higher orders come from the Taylor coefficients of \\( 1/(1+s) \\), reproducing the full series." },
      ],
      finalAnswer: "\\( E_1(x) = \\displaystyle\\int_1^{\\infty}\\dfrac{e^{-xu}}{u}\\,du \\sim \\dfrac{e^{-x}}{x} \\).",
      canonicalAnswer: "exp(-x)/x",
    },
  },
  {
    id: "am3b-014",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the large-\\( x \\) expansion to two terms of \\( E_1(2x) = \\displaystyle\\int_{2x}^{\\infty}\\dfrac{e^{-t}}{t}\\,dt \\), expressing the result in powers of \\( 1/x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "rescaling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the known expansion with argument 2x.", workingLatex: "E_1(y) \\sim e^{-y}\\!\\left(\\frac{1}{y} - \\frac{1}{y^2} + \\cdots\\right), \\quad y = 2x.", explanation: "The expansion holds for any large argument; substitute \\( y=2x \\)." },
        { stepNumber: 2, description: "Substitute y = 2x.", workingLatex: "E_1(2x) \\sim e^{-2x}\\!\\left(\\frac{1}{2x} - \\frac{1}{4x^2} + \\cdots\\right).", explanation: "\\( 1/y = 1/(2x) \\) and \\( 1/y^2 = 1/(4x^2) \\)." },
        { stepNumber: 3, description: "State result.", workingLatex: "E_1(2x) \\sim \\frac{e^{-2x}}{2x}\\!\\left(1 - \\frac{1}{2x} + \\cdots\\right).", explanation: "Factoring the leading term shows the relative correction is \\( -1/(2x) \\)." },
      ],
      finalAnswer: "\\( E_1(2x) \\sim \\dfrac{e^{-2x}}{2x}\\left(1 - \\dfrac{1}{2x}\\right) \\).",
      canonicalAnswer: "exp(-2*x)*(1/(2*x) - 1/(4*x^2))",
    },
  },
  {
    id: "am3b-015",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Show that \\( \\dfrac{d}{dx}E_1(x) = -\\dfrac{e^{-x}}{x} \\), and hence verify the large-\\( x \\) expansion of \\( E_1 \\) is consistent with differentiating term-by-term the series \\( e^{-x}(x^{-1}-x^{-2}+2x^{-3}-\\cdots) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "differentiation", "consistency"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the definition.", workingLatex: "E_1'(x) = \\frac{d}{dx}\\int_x^{\\infty}\\frac{e^{-t}}{t}\\,dt = -\\frac{e^{-x}}{x}.", explanation: "Lower-limit differentiation gives a minus sign and substitutes \\( t=x \\)." },
        { stepNumber: 2, description: "Differentiate the series.", workingLatex: "\\frac{d}{dx}\\Big[e^{-x}\\Big(\\frac{1}{x}-\\frac{1}{x^2}+\\frac{2}{x^3}-\\cdots\\Big)\\Big].", explanation: "Apply the product rule to each term, treating \\( e^{-x} \\) and the powers separately." },
        { stepNumber: 3, description: "Differentiate the first two terms.", workingLatex: "= -e^{-x}\\Big(\\frac{1}{x}-\\frac{1}{x^2}+\\cdots\\Big) + e^{-x}\\Big(-\\frac{1}{x^2}+\\frac{2}{x^3}-\\cdots\\Big).", explanation: "First bracket: \\( -e^{-x} \\) times the series; second bracket: \\( e^{-x} \\) times the derivative of the powers." },
        { stepNumber: 4, description: "Collect by powers.", workingLatex: "= e^{-x}\\Big(-\\frac{1}{x} + \\frac{1}{x^2} - \\frac{1}{x^2} + \\cdots\\Big) = -\\frac{e^{-x}}{x} + O(e^{-x}x^{-3}).", explanation: "The \\( 1/x^2 \\) terms cancel: \\( +1/x^2 \\) from the first bracket and \\( -1/x^2 \\) from the second. The surviving leading term is \\( -e^{-x}/x \\), matching \\( E_1'(x) \\)." },
        { stepNumber: 5, description: "Conclude consistency.", workingLatex: "\\frac{d}{dx}\\Big[\\text{series}\\Big] \\sim -\\frac{e^{-x}}{x} = E_1'(x).", explanation: "Term-by-term differentiation reproduces the derivative — the asymptotic series for \\( E_1 \\) may be differentiated, as expected here." },
      ],
      finalAnswer: "\\( E_1'(x) = -\\dfrac{e^{-x}}{x} \\), consistent with term-by-term differentiation.",
    },
  },
  {
    id: "am3b-016",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "By writing \\( \\displaystyle\\int_x^{\\infty}\\dfrac{e^{-t}}{t}\\,dt \\) and bounding the remainder after \\( N \\) terms, show that the remainder of the large-\\( x \\) series satisfies \\( |R_N(x)| \\le \\dfrac{N!\\,e^{-x}}{x^{N+1}} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "remainder bound"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the exact remainder.", workingLatex: "E_1(x) = e^{-x}\\sum_{n=0}^{N-1}\\frac{(-1)^n n!}{x^{n+1}} + R_N(x), \\quad R_N(x) = (-1)^N N!\\int_x^{\\infty}\\frac{e^{-t}}{t^{N+1}}\\,dt.", explanation: "After \\( N \\) integrations by parts, the leftover integral carries the running factorial \\( N! \\) and sign \\( (-1)^N \\)." },
        { stepNumber: 2, description: "Take absolute values.", workingLatex: "|R_N(x)| = N!\\int_x^{\\infty}\\frac{e^{-t}}{t^{N+1}}\\,dt.", explanation: "The sign drops out under the modulus; the integrand is positive." },
        { stepNumber: 3, description: "Bound the algebraic factor.", workingLatex: "\\frac{1}{t^{N+1}} \\le \\frac{1}{x^{N+1}} \\quad \\text{for } t \\ge x.", explanation: "On the integration range \\( t\\ge x \\), the smallest denominator is at \\( t=x \\), giving the largest value." },
        { stepNumber: 4, description: "Pull the bound out and integrate.", workingLatex: "|R_N(x)| \\le \\frac{N!}{x^{N+1}}\\int_x^{\\infty}e^{-t}\\,dt = \\frac{N!\\,e^{-x}}{x^{N+1}}.", explanation: "The remaining \\( \\int_x^\\infty e^{-t}\\,dt = e^{-x} \\). The bound equals the magnitude of the first omitted term — the defining feature of an optimally truncated asymptotic series." },
      ],
      finalAnswer: "\\( |R_N(x)| \\le \\dfrac{N!\\,e^{-x}}{x^{N+1}} \\).",
    },
  },
  {
    id: "am3b-017",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 17",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the small-\\( x \\) expansion (to the term in \\( x^3 \\)) of \\( F(x) = E_1(x) + \\ln x + \\gamma \\), and identify the leading non-zero behaviour as \\( x \\to 0^{+} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "Euler gamma"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the known small-x series.", workingLatex: "E_1(x) = -\\gamma - \\ln x + x - \\frac{x^2}{4} + \\frac{x^3}{18} - \\cdots .", explanation: "From integrating \\( (1-e^{-x})/x \\) with the constant \\( -\\gamma \\)." },
        { stepNumber: 2, description: "Add ln x + γ.", workingLatex: "F(x) = \\big(E_1(x)+\\ln x + \\gamma\\big) = x - \\frac{x^2}{4} + \\frac{x^3}{18} - \\cdots .", explanation: "The \\( -\\gamma \\) and \\( -\\ln x \\) are exactly cancelled by the added terms." },
        { stepNumber: 3, description: "Identify leading behaviour.", workingLatex: "F(x) \\sim x \\quad (x\\to 0^{+}).", explanation: "The combination removes the logarithmic singularity and the constant, leaving a function that vanishes linearly at the origin." },
      ],
      finalAnswer: "\\( F(x) = x - \\dfrac{x^2}{4} + \\dfrac{x^3}{18} - \\cdots \\sim x \\).",
      canonicalAnswer: "x - x^2/4 + x^3/18",
    },
  },
  {
    id: "am3b-018",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Using the large-\\( x \\) series for \\( E_1 \\), find the asymptotic expansion (to two terms) of \\( e^{x} E_1(x) \\) as \\( x \\to \\infty \\). Comment on why this product is a natural object to expand.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "scaled function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Multiply the series by eˣ.", workingLatex: "e^{x}E_1(x) \\sim e^{x}\\cdot e^{-x}\\!\\left(\\frac{1}{x} - \\frac{1}{x^2} + \\cdots\\right).", explanation: "The dominant exponential decay of \\( E_1 \\) is exactly \\( e^{-x} \\); multiplying by \\( e^{x} \\) strips it off." },
        { stepNumber: 2, description: "Cancel the exponentials.", workingLatex: "e^{x}E_1(x) \\sim \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots .", explanation: "The result is a pure inverse-power (Poincaré) series — the natural \"scaled\" exponential integral." },
        { stepNumber: 3, description: "Comment.", workingLatex: "e^{x}E_1(x) \\sim \\frac{1}{x} - \\frac{1}{x^2}.", explanation: "Removing the controlling exponential factor leaves an algebraic asymptotic series whose coefficients \\( (-1)^n n! \\) are read off directly; this is why software tabulates \\( e^x E_1(x) \\) rather than \\( E_1 \\) itself for large \\( x \\)." },
      ],
      finalAnswer: "\\( e^{x}E_1(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{x^2} + \\cdots \\).",
      canonicalAnswer: "1/x - 1/x^2",
    },
  },

  // ── Challenge: synoptic / multi-step / starred-level / cross-method ──────
  {
    id: "am3b-019",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Determine the value of \\( N \\) for which the large-\\( x \\) series \\( E_1(x) \\sim e^{-x}\\sum (-1)^n n!\\,x^{-(n+1)} \\) is optimally truncated, and the size of the resulting optimal error, both at \\( x = 10 \\). (Optimal truncation keeps all terms up to the one before the smallest.)",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "optimal truncation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the magnitude of term n.", workingLatex: "|a_n| = \\frac{n!}{x^{n+1}} \\quad (\\text{the } e^{-x} \\text{ factor is common}).", explanation: "Compare successive term magnitudes to locate the smallest." },
        { stepNumber: 2, description: "Form the ratio of consecutive terms.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{(n+1)!/x^{n+2}}{n!/x^{n+1}} = \\frac{n+1}{x}.", explanation: "Terms decrease while \\( n+1 < x \\) and increase once \\( n+1 > x \\); the smallest term is near \\( n \\approx x \\)." },
        { stepNumber: 3, description: "Locate the smallest term at x = 10.", workingLatex: "\\frac{n+1}{x} = 1 \\Rightarrow n \\approx x - 1 = 9.", explanation: "At \\( x=10 \\) the term magnitudes turn around near \\( n=9 \\); that is the smallest term." },
        { stepNumber: 4, description: "Optimal truncation keeps terms up to n = 8.", workingLatex: "N_{\\text{opt}} = \\lfloor x \\rfloor - 1 = 9 \\text{ terms } (n=0,\\ldots,8).", explanation: "Keep everything before the smallest term \\( n=9 \\); equivalently include indices \\( n=0 \\) to \\( 8 \\)." },
        { stepNumber: 5, description: "Estimate the optimal error.", workingLatex: "|\\text{err}| \\approx e^{-x}\\frac{n!}{x^{n+1}}\\Big|_{n=9} = e^{-10}\\frac{9!}{10^{10}}.", explanation: "The optimal error is the size of the smallest (first omitted) term." },
        { stepNumber: 6, description: "Use Stirling to size it.", workingLatex: "e^{-x}\\frac{x!}{x^{x+1}} \\sim e^{-x}\\frac{\\sqrt{2\\pi x}\\,x^x e^{-x}}{x^{x+1}} = \\sqrt{\\frac{2\\pi}{x}}\\,e^{-2x}.", explanation: "Stirling \\( n!\\sim\\sqrt{2\\pi n}(n/e)^n \\) at \\( n\\approx x \\) gives the celebrated \\( e^{-2x} \\) optimal-error scaling. At \\( x=10 \\) this is \\( \\sqrt{\\pi/5}\\,e^{-20}\\approx 1.6\\times10^{-9} \\)." },
      ],
      finalAnswer: "\\( N_{\\text{opt}} \\approx \\lfloor x\\rfloor = 10 \\) terms; optimal error \\( \\sim \\sqrt{2\\pi/x}\\,e^{-2x} \\approx 1.6\\times10^{-9} \\) at \\( x=10 \\).",
    },
  },
  {
    id: "am3b-020",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Show that \\( \\gamma + \\ln x + E_1(x) = \\displaystyle\\int_0^{x}\\dfrac{1-e^{-t}}{t}\\,dt \\). Hence give an alternative derivation of the small-\\( x \\) series for \\( E_1(x) \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "identity", "Euler gamma"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Define the right-hand side and differentiate.", workingLatex: "\\Phi(x) = \\int_0^{x}\\frac{1-e^{-t}}{t}\\,dt \\;\\Rightarrow\\; \\Phi'(x) = \\frac{1-e^{-x}}{x}.", explanation: "Fundamental theorem of calculus; the integrand is regular at \\( t=0 \\) (value 1), so \\( \\Phi \\) is well-defined." },
        { stepNumber: 2, description: "Differentiate the left-hand side.", workingLatex: "\\frac{d}{dx}\\big[\\gamma + \\ln x + E_1(x)\\big] = \\frac{1}{x} - \\frac{e^{-x}}{x} = \\frac{1-e^{-x}}{x}.", explanation: "\\( \\gamma \\) is constant; \\( E_1'(x)=-e^{-x}/x \\). The two derivatives agree." },
        { stepNumber: 3, description: "Match the constants at x → 0.", workingLatex: "\\lim_{x\\to0^+}\\big[\\gamma+\\ln x+E_1(x)\\big] = \\gamma + (-\\gamma) = 0 = \\Phi(0).", explanation: "Using \\( \\lim[E_1+\\ln x]=-\\gamma \\); and \\( \\Phi(0)=0 \\) by definition. Equal derivatives plus equal values give equal functions." },
        { stepNumber: 4, description: "Conclude the identity.", workingLatex: "\\gamma + \\ln x + E_1(x) = \\int_0^x \\frac{1-e^{-t}}{t}\\,dt.", explanation: "Established for all \\( x>0 \\)." },
        { stepNumber: 5, description: "Expand the integrand and integrate.", workingLatex: "\\frac{1-e^{-t}}{t} = \\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}t^{n-1}}{n!} \\Rightarrow \\Phi(x) = \\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}x^{n}}{n\\cdot n!}.", explanation: "Term-by-term integration reproduces the small-\\( x \\) series directly, giving \\( E_1(x) = -\\gamma - \\ln x + \\sum_{n\\ge1}(-1)^{n+1}x^n/(n\\,n!) \\)." },
      ],
      finalAnswer: "\\( \\gamma+\\ln x+E_1(x) = \\displaystyle\\int_0^x\\dfrac{1-e^{-t}}{t}\\,dt = \\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}x^n}{n\\,n!} \\).",
    },
  },
  {
    id: "am3b-021",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the large-\\( x \\) asymptotic expansion (to three terms) of the generalised exponential integral \\( E_2(x) = \\displaystyle\\int_x^{\\infty}\\dfrac{e^{-t}}{t^2}\\,dt \\cdot x \\) — that is, of \\( \\widehat{E}(x) = x\\displaystyle\\int_x^{\\infty}\\dfrac{e^{-t}}{t^2}\\,dt \\) — and relate it to \\( e^{x}E_1(x) \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "generalised", "synoptic"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Expand the inner integral by parts.", workingLatex: "\\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt \\sim e^{-x}\\!\\left(\\frac{1}{x^2} - \\frac{2}{x^3} + \\frac{6}{x^4} - \\cdots\\right).", explanation: "From the earlier IBP variant (am3b-012): numerators \\( 1!,2!,3! \\) shifted, signs alternating." },
        { stepNumber: 2, description: "Multiply by x.", workingLatex: "\\widehat{E}(x) = x\\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt \\sim e^{-x}\\!\\left(\\frac{1}{x} - \\frac{2}{x^2} + \\frac{6}{x^3} - \\cdots\\right).", explanation: "Each power of \\( 1/x \\) is reduced by one." },
        { stepNumber: 3, description: "Recall the one-parts identity.", workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - \\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt.", explanation: "From a single integration by parts of \\( E_1 \\)." },
        { stepNumber: 4, description: "Express the inner integral.", workingLatex: "\\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt = \\frac{e^{-x}}{x} - E_1(x).", explanation: "Rearranging the identity." },
        { stepNumber: 5, description: "Form the relation.", workingLatex: "\\widehat{E}(x) = x\\Big(\\frac{e^{-x}}{x} - E_1(x)\\Big) = e^{-x} - x\\,E_1(x).", explanation: "Multiplying through by \\( x \\)." },
        { stepNumber: 6, description: "Connect to eˣE₁.", workingLatex: "e^{x}\\widehat{E}(x) = 1 - x\\,e^{x}E_1(x).", explanation: "Multiplying by \\( e^x \\): since \\( e^x E_1(x)\\sim x^{-1}-x^{-2}+2x^{-3} \\), we get \\( e^x\\widehat E(x)\\sim 1-(1-x^{-1}+2x^{-2})=x^{-1}-2x^{-2}+\\cdots \\), consistent with step 2." },
      ],
      finalAnswer: "\\( \\widehat{E}(x) = e^{-x} - x E_1(x) \\sim e^{-x}\\left(\\dfrac{1}{x} - \\dfrac{2}{x^2} + \\dfrac{6}{x^3}\\right) \\).",
      canonicalAnswer: "exp(-x)*(1/x - 2/x^2 + 6/x^3)",
    },
  },
  {
    id: "am3b-022",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Using the small-\\( x \\) series and the large-\\( x \\) series, estimate \\( E_1(1) \\) from both ends (small-\\( x \\) keeping terms to \\( x^3 \\); large-\\( x \\) keeping the optimally-truncated set). Which is more accurate at \\( x=1 \\), and why? (Take \\( \\gamma = 0.5772 \\); true value \\( E_1(1)=0.21938 \\).)",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "large-x", "comparison"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Small-x estimate.", workingLatex: "E_1(1) \\approx -\\gamma - \\ln 1 + 1 - \\frac{1}{4} + \\frac{1}{18} = -0.5772 + 0 + 1 - 0.25 + 0.0556.", explanation: "Substitute \\( x=1 \\) into \\( -\\gamma-\\ln x + x - x^2/4 + x^3/18 \\); \\( \\ln 1=0 \\)." },
        { stepNumber: 2, description: "Evaluate the small-x sum.", workingLatex: "E_1(1) \\approx 0.2284.", explanation: "Summing: \\( -0.5772+1-0.25+0.0556 = 0.2284 \\). Error \\( \\approx +0.009 \\) against \\( 0.21938 \\)." },
        { stepNumber: 3, description: "Large-x optimal truncation at x = 1.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{n+1}{x} = n+1 \\ge 1 \\text{ for all } n\\ge0.", explanation: "At \\( x=1 \\) the term ratio is \\( \\ge1 \\) from the very first step: the smallest term is the \\( n=0 \\) term." },
        { stepNumber: 4, description: "Keep only the leading large-x term.", workingLatex: "E_1(1) \\approx e^{-1}\\cdot\\frac{1}{1} = 0.3679.", explanation: "Optimal truncation keeps just \\( n=0 \\); adding the next term makes it worse since terms do not decrease." },
        { stepNumber: 5, description: "Compare accuracies.", workingLatex: "|0.2284 - 0.21938| = 0.009 \\;\\ll\\; |0.3679 - 0.21938| = 0.149.", explanation: "The small-\\( x \\) (convergent) series is far better at \\( x=1 \\)." },
        { stepNumber: 6, description: "Explain why.", workingLatex: "\\text{small-}x \\text{ series converges; large-}x \\text{ series only useful for } x \\gg 1.", explanation: "The small-\\( x \\) series is a genuinely convergent power series, so more terms always help. The large-\\( x \\) asymptotic series is divergent and at \\( x=1 \\) its smallest term is already \\( O(e^{-1}) \\), capping its accuracy near the leading order." },
      ],
      finalAnswer: "Small-\\( x \\): \\( E_1(1)\\approx 0.2284 \\) (error \\( \\sim0.009 \\)); large-\\( x \\): \\( \\approx 0.368 \\) (error \\( \\sim0.15 \\)). Small-\\( x \\) wins because it converges.",
    },
  },
  {
    id: "am3b-023",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the leading large-\\( x \\) behaviour of \\( J(x) = \\displaystyle\\int_x^{\\infty}\\dfrac{e^{-t}}{t}\\,\\ln t\\,dt \\) by integration by parts. Give the first two terms.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "integration by parts", "log weight"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Choose parts.", workingLatex: "u = \\frac{\\ln t}{t}, \\qquad dv = e^{-t}\\,dt \\Rightarrow v=-e^{-t}.", explanation: "Integrate the exponential; differentiate the algebraic-logarithmic amplitude \\( (\\ln t)/t \\)." },
        { stepNumber: 2, description: "Differentiate the amplitude.", workingLatex: "u' = \\frac{d}{dt}\\frac{\\ln t}{t} = \\frac{1 - \\ln t}{t^2}.", explanation: "Quotient rule: \\( (t\\cdot\\frac1t - \\ln t)/t^2 = (1-\\ln t)/t^2 \\)." },
        { stepNumber: 3, description: "Apply the parts formula.", workingLatex: "J(x) = \\Big[-\\frac{e^{-t}\\ln t}{t}\\Big]_x^{\\infty} + \\int_x^{\\infty} e^{-t}\\frac{1-\\ln t}{t^2}\\,dt.", explanation: "Boundary plus \\( -\\int v\\,du = +\\int e^{-t}(1-\\ln t)/t^2 \\)." },
        { stepNumber: 4, description: "Evaluate the boundary term.", workingLatex: "\\Big[-\\frac{e^{-t}\\ln t}{t}\\Big]_x^{\\infty} = \\frac{e^{-x}\\ln x}{x}.", explanation: "Vanishes at infinity; lower limit gives \\( +e^{-x}\\ln x / x \\)." },
        { stepNumber: 5, description: "Size the remaining integral.", workingLatex: "\\int_x^{\\infty}\\frac{e^{-t}(1-\\ln t)}{t^2}\\,dt \\sim -\\frac{e^{-x}\\ln x}{x^2} + \\frac{e^{-x}}{x^2} + \\cdots .", explanation: "The dominant part of the amplitude near \\( t=x \\) is \\( (1-\\ln x)/x^2 \\); the leading Laplace-type contribution is \\( e^{-x}(1-\\ln x)/x^2 \\)." },
        { stepNumber: 6, description: "Assemble two terms.", workingLatex: "J(x) \\sim \\frac{e^{-x}\\ln x}{x} + \\frac{e^{-x}(1-\\ln x)}{x^2} + \\cdots .", explanation: "Leading order \\( e^{-x}\\ln x/x \\); the first correction carries both a \\( \\ln x \\) and a constant piece, reflecting the log weight." },
      ],
      finalAnswer: "\\( J(x) \\sim \\dfrac{e^{-x}\\ln x}{x} + \\dfrac{e^{-x}(1-\\ln x)}{x^2} + \\cdots \\).",
    },
  },
  {
    id: "am3b-024",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The integral \\( K(x) = \\displaystyle\\int_x^{\\infty}\\dfrac{e^{-t}}{t}\\,dt + \\displaystyle\\int_x^{\\infty}\\dfrac{e^{-t}}{t^2}\\,dt \\) arises in a radiative-transfer model. Find its large-\\( x \\) expansion to three terms and simplify.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "application", "combination"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Expand the first integral.", workingLatex: "\\int_x^{\\infty}\\frac{e^{-t}}{t}\\,dt \\sim e^{-x}\\!\\left(\\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots\\right).", explanation: "Standard \\( E_1 \\) series." },
        { stepNumber: 2, description: "Expand the second integral.", workingLatex: "\\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt \\sim e^{-x}\\!\\left(\\frac{1}{x^2} - \\frac{2}{x^3} + \\frac{6}{x^4} - \\cdots\\right).", explanation: "From the IBP variant." },
        { stepNumber: 3, description: "Add the two series.", workingLatex: "K(x) \\sim e^{-x}\\!\\left(\\frac{1}{x} + \\Big(-\\frac{1}{x^2}+\\frac{1}{x^2}\\Big) + \\Big(\\frac{2}{x^3}-\\frac{2}{x^3}\\Big) + \\cdots\\right).", explanation: "Collect like powers of \\( 1/x \\)." },
        { stepNumber: 4, description: "Cancel.", workingLatex: "K(x) \\sim e^{-x}\\!\\left(\\frac{1}{x} + 0 + 0 + \\frac{6-6}{x^4}\\cdots\\right) = \\frac{e^{-x}}{x}\\big(1 + O(x^{-3})\\big).", explanation: "The \\( x^{-2} \\) and \\( x^{-3} \\) corrections cancel exactly. Indeed the next surviving term is \\( O(e^{-x}x^{-4}) \\)." },
        { stepNumber: 5, description: "State the result.", workingLatex: "K(x) \\sim \\frac{e^{-x}}{x}\\quad\\text{with corrections only at } O(e^{-x}x^{-4}).", explanation: "The combination is much closer to its leading term than either integral alone — the cancellation is the point of the construction." },
      ],
      finalAnswer: "\\( K(x) \\sim \\dfrac{e^{-x}}{x} \\), corrections \\( O(e^{-x}x^{-4}) \\).",
      canonicalAnswer: "exp(-x)/x",
    },
  },
  {
    id: "am3b-025",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "By relating \\( E_1 \\) to the incomplete gamma function \\( \\Gamma(0,x) = \\displaystyle\\int_x^{\\infty} t^{-1}e^{-t}\\,dt \\), and noting \\( \\Gamma(a,x) = x^{a-1}e^{-x}\\sum_{k\\ge0}\\frac{(a-1)(a-2)\\cdots(a-k)}{x^{k}} \\), derive the large-\\( x \\) series for \\( E_1(x) \\) and confirm the coefficients.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "incomplete gamma", "cross-method"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify E₁ with Γ(0,x).", workingLatex: "E_1(x) = \\int_x^{\\infty}\\frac{e^{-t}}{t}\\,dt = \\Gamma(0,x).", explanation: "The upper incomplete gamma at \\( a=0 \\) is exactly \\( E_1 \\)." },
        { stepNumber: 2, description: "Apply the asymptotic formula with a = 0.", workingLatex: "\\Gamma(0,x) \\sim x^{-1}e^{-x}\\sum_{k=0}^{\\infty}\\frac{(-1)(-2)\\cdots(-k)}{x^{k}}.", explanation: "Substitute \\( a=0 \\) so \\( a-1=-1, a-2=-2,\\ldots,a-k=-k \\)." },
        { stepNumber: 3, description: "Simplify the product.", workingLatex: "(-1)(-2)\\cdots(-k) = (-1)^k k!.", explanation: "The product of the first \\( k \\) negative integers is \\( (-1)^k k! \\)." },
        { stepNumber: 4, description: "Insert and combine powers.", workingLatex: "E_1(x) \\sim \\frac{e^{-x}}{x}\\sum_{k=0}^{\\infty}\\frac{(-1)^k k!}{x^{k}} = e^{-x}\\sum_{k=0}^{\\infty}\\frac{(-1)^k k!}{x^{k+1}}.", explanation: "Absorbing the \\( x^{-1} \\) prefactor shifts the power to \\( k+1 \\)." },
        { stepNumber: 5, description: "Confirm coefficients.", workingLatex: "E_1(x) \\sim e^{-x}\\!\\left(\\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\frac{6}{x^4} + \\cdots\\right).", explanation: "Coefficients \\( 0!,1!,2!,3! \\) with alternating signs — identical to the integration-by-parts and Watson's-lemma derivations." },
      ],
      finalAnswer: "\\( E_1(x) = \\Gamma(0,x) \\sim e^{-x}\\displaystyle\\sum_{k=0}^{\\infty}\\dfrac{(-1)^k k!}{x^{k+1}} \\).",
      canonicalAnswer: "exp(-x)*(1/x - 1/x^2 + 2/x^3 - 6/x^4)",
    },
  },
  {
    id: "am3b-026",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the small-\\( x \\) behaviour of \\( P(x) = \\displaystyle\\int_x^{2x}\\dfrac{e^{-t}}{t}\\,dt \\) as \\( x\\to0^{+} \\), giving the first two terms (a constant and a linear correction).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "finite interval"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write as a difference of E₁'s.", workingLatex: "P(x) = \\int_x^{\\infty} - \\int_{2x}^{\\infty} = E_1(x) - E_1(2x).", explanation: "Splitting the tail integral; the integrals over \\( [2x,\\infty) \\) cancel." },
        { stepNumber: 2, description: "Insert the small-x series for each.", workingLatex: "E_1(x) = -\\gamma - \\ln x + x - \\cdots, \\quad E_1(2x) = -\\gamma - \\ln(2x) + 2x - \\cdots.", explanation: "Apply the small-\\( x \\) expansion at arguments \\( x \\) and \\( 2x \\)." },
        { stepNumber: 3, description: "Subtract the constants and logs.", workingLatex: "P(x) = \\big(-\\ln x + \\ln(2x)\\big) + (x - 2x) + \\cdots.", explanation: "The \\( -\\gamma \\) terms cancel; subtract the logs and the linear terms." },
        { stepNumber: 4, description: "Simplify the logarithm.", workingLatex: "-\\ln x + \\ln(2x) = \\ln\\frac{2x}{x} = \\ln 2.", explanation: "The log singularities cancel, leaving the finite constant \\( \\ln 2 \\)." },
        { stepNumber: 5, description: "Collect.", workingLatex: "P(x) = \\ln 2 - x + \\cdots.", explanation: "The linear correction is \\( x-2x=-x \\). Higher-order terms come from the \\( -x^2/4 \\) pieces: \\( -x^2/4+(2x)^2/4 = +3x^2/4 \\)." },
        { stepNumber: 6, description: "State result.", workingLatex: "P(x) \\to \\ln 2 \\;(x\\to0^+), \\quad P(x) = \\ln 2 - x + O(x^2).", explanation: "Consistent with \\( P(x)=\\int_x^{2x}t^{-1}\\,dt(1+O(t)) = \\ln2 + \\cdots \\) since \\( e^{-t}\\approx1 \\) for small \\( t \\)." },
      ],
      finalAnswer: "\\( P(x) = E_1(x)-E_1(2x) = \\ln 2 - x + O(x^2) \\).",
      canonicalAnswer: "log(2) - x",
    },
  },
  {
    id: "am3b-027",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 27",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the large-\\( x \\) expansion (two terms) of \\( Q(x) = \\displaystyle\\int_x^{\\infty}\\dfrac{e^{-t}}{t}\\,dt - \\dfrac{e^{-x}}{x} \\), and identify the leading order. Comment on what this reveals about the error of the one-term approximation \\( E_1(x)\\approx e^{-x}/x \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "error analysis"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute the series for E₁.", workingLatex: "Q(x) = E_1(x) - \\frac{e^{-x}}{x} \\sim e^{-x}\\!\\left(\\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots\\right) - \\frac{e^{-x}}{x}.", explanation: "Subtract the leading term of the series." },
        { stepNumber: 2, description: "Cancel the leading term.", workingLatex: "Q(x) \\sim e^{-x}\\!\\left(-\\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots\\right).", explanation: "The \\( 1/x \\) terms cancel exactly." },
        { stepNumber: 3, description: "Identify the leading order.", workingLatex: "Q(x) \\sim -\\frac{e^{-x}}{x^2} \\quad (x\\to\\infty).", explanation: "The leading surviving term is \\( -e^{-x}/x^2 \\), negative — the one-term approximation overestimates \\( E_1 \\)." },
        { stepNumber: 4, description: "Interpret.", workingLatex: "E_1(x) - \\frac{e^{-x}}{x} = O\\!\\big(e^{-x}x^{-2}\\big) < 0.", explanation: "The error of \\( E_1\\approx e^{-x}/x \\) is \\( -e^{-x}/x^2 \\): one order smaller and of definite sign, so \\( e^{-x}/x \\) always slightly overshoots \\( E_1(x) \\) for large \\( x \\)." },
      ],
      finalAnswer: "\\( Q(x) \\sim -\\dfrac{e^{-x}}{x^2} \\); the one-term approximation overestimates \\( E_1 \\) by \\( O(e^{-x}x^{-2}) \\).",
      canonicalAnswer: "-exp(-x)/x^2",
    },
  },
  {
    id: "am3b-028",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Show by Watson's lemma that all coefficients in the large-\\( x \\) series \\( e^{x}E_1(x) \\sim \\sum_{n\\ge0} c_n x^{-(n+1)} \\) are \\( c_n = (-1)^n n! \\), and explain why the series diverges for every fixed \\( x \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "Watson's lemma", "divergence"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Put E₁ in Laplace form.", workingLatex: "e^{x}E_1(x) = \\int_0^{\\infty}\\frac{e^{-xs}}{1+s}\\,ds.", explanation: "From \\( t=x(1+s) \\); the \\( e^{-x} \\) is cancelled by the prefactor \\( e^x \\)." },
        { stepNumber: 2, description: "Expand the amplitude.", workingLatex: "\\frac{1}{1+s} = \\sum_{n=0}^{\\infty}(-1)^n s^n \\quad (|s|<1).", explanation: "Geometric series; Watson's lemma uses this expansion at the endpoint \\( s=0 \\) even though it converges only on \\( |s|<1 \\).", mafs: `<Mafs viewBox={{ x: [-0.8, 4.0], y: [-0.35, 1.25], padding: 0 }} height={160}>
  <Coordinates.Cartesian xAxis={{ lines: 1, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(s) => Math.exp(-1.1 * s)} domain={[0, 4]} color="var(--mafs-fg-blue)" style="dashed" />
  <Plot.OfX y={(s) => Math.exp(-3.5 * s)} domain={[0, 4]} color="var(--mafs-fg-accent)" weight={3} />
  <Plot.OfX y={(s) => 1 / (1 + s)} domain={[0, 4]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.45, 1.1]} tex="s=0" color="var(--mafs-fg-accent)" />
  <LaTeX at={[1.55, 0.75]} tex="\\text{larger } x" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.0, 0.2]} tex="\\dfrac{1}{1+s}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.7, -0.2]} tex="s" />
</Mafs>` },
        { stepNumber: 3, description: "Integrate each monomial.", workingLatex: "\\int_0^{\\infty} s^n e^{-xs}\\,ds = \\frac{n!}{x^{n+1}}.", explanation: "Standard Laplace/Gamma integral." },
        { stepNumber: 4, description: "Read off the coefficients.", workingLatex: "e^{x}E_1(x) \\sim \\sum_{n=0}^{\\infty}\\frac{(-1)^n n!}{x^{n+1}} \\Rightarrow c_n = (-1)^n n!.", explanation: "Matching with \\( \\sum c_n x^{-(n+1)} \\) gives \\( c_n=(-1)^n n! \\)." },
        { stepNumber: 5, description: "Apply the ratio test.", workingLatex: "\\left|\\frac{c_{n+1}x^{-(n+2)}}{c_n x^{-(n+1)}}\\right| = \\frac{(n+1)!}{n!}\\cdot\\frac{1}{x} = \\frac{n+1}{x} \\to \\infty.", explanation: "For any fixed \\( x \\), the ratio grows without bound as \\( n\\to\\infty \\)." },
        { stepNumber: 6, description: "Conclude divergence.", workingLatex: "\\frac{n+1}{x}\\to\\infty \\Rightarrow \\text{series diverges for all } x.", explanation: "The factorial growth of the coefficients beats any fixed power of \\( x \\); the series is asymptotic (useful when truncated) but nowhere convergent. The amplitude \\( 1/(1+s) \\) has a singularity at \\( s=-1 \\), and it is this finite radius of convergence that forces the divergence." },
      ],
      finalAnswer: "\\( c_n = (-1)^n n! \\); the series diverges for all \\( x \\) since \\( |c_{n+1}/c_n|/x = (n+1)/x \\to \\infty \\).",
    },
  },
  // REVIEW: leading-order Laplace-endpoint reasoning for a moving lower limit; the t^{-1} prefactor and γ-constant pieces are argued analytically (consistent with am3b-020/026) rather than re-verified numerically end-to-end.
  {
    id: "am3b-029",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A diffusion problem requires \\( R(x) = \\displaystyle\\int_x^{\\infty}\\dfrac{e^{-t}}{t}\\,dt - \\displaystyle\\int_{x^2}^{\\infty}\\dfrac{e^{-t}}{t}\\,dt \\) for small \\( x \\). Using \\( R(x) = E_1(x) - E_1(x^2) \\), find the leading small-\\( x \\) behaviour, being careful with the logarithms.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "small-x", "logarithms", "composite argument"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write R as a difference.", workingLatex: "R(x) = E_1(x) - E_1(x^2).", explanation: "Direct from the definition: the \\( [x^2,\\infty) \\) tails do not overlap simply, so keep both \\( E_1 \\) terms." },
        { stepNumber: 2, description: "Expand E₁(x) for small x.", workingLatex: "E_1(x) = -\\gamma - \\ln x + x - \\cdots.", explanation: "Small-\\( x \\) series at argument \\( x \\)." },
        { stepNumber: 3, description: "Expand E₁(x²) for small x.", workingLatex: "E_1(x^2) = -\\gamma - \\ln(x^2) + x^2 - \\cdots = -\\gamma - 2\\ln x + x^2 - \\cdots.", explanation: "Argument \\( x^2 \\) is also small as \\( x\\to0 \\); note \\( \\ln(x^2)=2\\ln x \\)." },
        { stepNumber: 4, description: "Subtract.", workingLatex: "R(x) = \\big(-\\ln x + 2\\ln x\\big) + \\big(x - x^2\\big) + \\cdots.", explanation: "The \\( -\\gamma \\) constants cancel; combine the logarithms and the polynomial parts." },
        { stepNumber: 5, description: "Simplify the logarithms.", workingLatex: "-\\ln x + 2\\ln x = \\ln x.", explanation: "The leading behaviour is a single \\( \\ln x \\) — note it does NOT cancel here (unlike the \\( E_1(x)-E_1(2x) \\) case), because the arguments differ by a power, not a constant factor." },
        { stepNumber: 6, description: "State leading behaviour.", workingLatex: "R(x) = \\ln x + x + O(x^2) \\;\\to\\; -\\infty \\;(x\\to0^+).", explanation: "Leading term \\( \\ln x\\to-\\infty \\); the linear correction is \\( +x \\) (the \\( -x^2 \\) is higher order)." },
      ],
      finalAnswer: "\\( R(x) = E_1(x)-E_1(x^2) = \\ln x + x + O(x^2) \\).",
      canonicalAnswer: "log(x) + x",
    },
  },
  {
    id: "am3b-030",
    topicRef: "am3b",
    topicTitle: "The exponential integral E₁ (large- and small-x) 30",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Use optimal truncation of the large-\\( x \\) series to estimate \\( E_1(5) \\), and compare with the true value \\( E_1(5) = 0.00114830\\ldots \\). State which term you stop at and give your estimate.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "large-x", "optimal truncation", "numerical"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Term magnitudes at x = 5.", workingLatex: "|a_n| = \\frac{n!}{5^{n+1}}: \\; a_0=\\tfrac{1}{5}, a_1=\\tfrac{1}{25}, a_2=\\tfrac{2}{125}, a_3=\\tfrac{6}{625}, a_4=\\tfrac{24}{3125}, a_5=\\tfrac{120}{15625}.", explanation: "Compute the unsigned coefficients divided by powers of 5 (the \\( e^{-5} \\) factor is common)." },
        { stepNumber: 2, description: "Find where terms stop shrinking.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{n+1}{5} < 1 \\iff n < 4.", explanation: "Terms decrease up to \\( n=4 \\) and the \\( n=5 \\) term equals the \\( n=4 \\) term (ratio \\( =1 \\)); the smallest term is around \\( n=4,5 \\)." },
        { stepNumber: 3, description: "Optimal truncation: keep through n = 4.", workingLatex: "S = \\frac{1}{5} - \\frac{1}{25} + \\frac{2}{125} - \\frac{6}{625} + \\frac{24}{3125}.", explanation: "Stop before the smallest term; including \\( n=0,\\ldots,4 \\)." },
        { stepNumber: 4, description: "Sum the bracket.", workingLatex: "S = 0.2 - 0.04 + 0.016 - 0.0096 + 0.00768 = 0.17408.", explanation: "Adding the five terms: \\( 0.2-0.04=0.16,\\ +0.016=0.176,\\ -0.0096=0.1664,\\ +0.00768=0.17408 \\)." },
        { stepNumber: 5, description: "Multiply by e^{-5}.", workingLatex: "E_1(5) \\approx e^{-5}\\cdot 0.17408 = 0.0067379 \\times 0.17408.", explanation: "\\( e^{-5}=0.0067379 \\)." },
        { stepNumber: 6, description: "Final estimate and comparison.", workingLatex: "E_1(5) \\approx 0.0011729 \\quad\\text{vs}\\quad 0.0011483.", explanation: "The optimally-truncated estimate \\( 0.001173 \\) matches the true value to about \\( 2\\% \\); the error \\( \\approx2\\times10^{-5} \\) is the size of the smallest term \\( e^{-5}\\cdot24/3125\\approx5\\times10^{-5} \\), as expected." },
      ],
      finalAnswer: "Stop at \\( n=4 \\): \\( E_1(5) \\approx e^{-5}(0.2-0.04+0.016-0.0096+0.00768) \\approx 0.001173 \\) (true \\( 0.0011483 \\)).",
      canonicalAnswer: "exp(-5)*(1/5 - 1/25 + 2/125 - 6/625 + 24/3125)",
    },
  },
];
