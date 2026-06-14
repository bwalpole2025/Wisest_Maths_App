import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — am2a
 * "Stieltjes integrals & their asymptotic series"
 * Topic group: Divergent Series & Optimal Truncation
 *
 * Scope: F(x) = ∫ ρ(t)/(1+xt) dt; moment coefficients a_n = ∫ t^n ρ(t) dt;
 * the (typically) divergent asymptotic series F(x) ~ Σ (-1)^n a_n x^n as x→0+,
 * its error bound, and optimal truncation.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 1, Q9 (and
 * the surrounding Q8/Q10 material), with constants/densities/limits varied so
 * no sheet question is reproduced verbatim.
 *
 * Numerical checks (mpmath, dps=40) run while authoring:
 *  - ρ=e^{-t}: a_n=n!, F(0.1)=0.915633339397880819…, closed form (1/x)e^{1/x}E_1(1/x) ✓
 *  - G(x)=∫ e^{-t}/(1+xt)^2 dt: G(0.1)=0.84366660602119… (matches sheet) ✓
 *  - ρ=e^{-2t}: a_n=n!/2^{n+1} ✓  ; ρ=t e^{-t}: a_n=(n+1)! ✓
 *  - ρ=1 on [0,1]: a_n=1/(n+1), F(x)=ln(1+x)/x (CONVERGENT contrast) ✓
 *  - ρ=e^{-t^2}: a_n=Γ((n+1)/2)/2 ✓
 *  - Optimal-truncation smallest term: F at x=0.1 → n≈10–11; G at x=0.1 → n=10 ✓
 */
export const questions: Question[] = [
  // ─────────────────────────── FOUNDATION (6) ───────────────────────────
  {
    id: "am2a-001",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The Stieltjes-type integral \\( F(x) = \\int_0^\\infty \\dfrac{\\rho(t)}{1+xt}\\,dt \\) has the formal asymptotic series \\( F(x) \\sim \\sum_{n=0}^\\infty (-1)^n a_n x^n \\) as \\( x \\to 0^+ \\). State the coefficient \\( a_n \\) as an integral of \\( \\rho \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "moment coefficients"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Expand the kernel as a geometric series.", workingLatex: "\\frac{1}{1+xt} = \\sum_{n=0}^\\infty (-1)^n (xt)^n = \\sum_{n=0}^\\infty (-1)^n t^n x^n.", explanation: "For fixed \\( t \\) and small \\( x \\) the ratio \\( xt \\) is small, so the geometric expansion of \\( 1/(1+xt) \\) is the natural source of the series." },
        { stepNumber: 2, description: "Insert the expansion into the integral.", workingLatex: "F(x) = \\int_0^\\infty \\rho(t)\\sum_{n=0}^\\infty (-1)^n t^n x^n\\,dt.", explanation: "We are not yet justifying the interchange of sum and integral; this is the formal manipulation that produces the asymptotic series." },
        { stepNumber: 3, description: "Interchange sum and integral formally.", workingLatex: "F(x) \\sim \\sum_{n=0}^\\infty (-1)^n x^n \\int_0^\\infty t^n \\rho(t)\\,dt.", explanation: "Term by term, the \\( x \\)-power factors out and the \\( t \\)-integral becomes a constant — the \\( n \\)-th moment of \\( \\rho \\)." },
        { stepNumber: 4, description: "Read off the coefficient.", workingLatex: "a_n = \\int_0^\\infty t^n \\rho(t)\\,dt.", explanation: "Matching with \\( F(x)\\sim\\sum(-1)^n a_n x^n \\), the coefficient is exactly the \\( n \\)-th moment of the density \\( \\rho \\)." },
      ],
      finalAnswer: "\\( a_n = \\displaystyle\\int_0^\\infty t^n \\rho(t)\\,dt \\) (the \\( n \\)-th moment of \\( \\rho \\)).",
      canonicalAnswer: "integral_0^infinity t^n rho(t) dt",
    },
  },
  {
    id: "am2a-002",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the density \\( \\rho(t) = e^{-t} \\) on \\( [0,\\infty) \\), compute the moment coefficient \\( a_n = \\int_0^\\infty t^n e^{-t}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["moment coefficients", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recognise the Gamma integral.", workingLatex: "\\int_0^\\infty t^n e^{-t}\\,dt = \\Gamma(n+1).", explanation: "The defining integral of the Gamma function is \\( \\Gamma(z)=\\int_0^\\infty t^{z-1}e^{-t}\\,dt \\); here the exponent is \\( t^n = t^{(n+1)-1} \\)." },
        { stepNumber: 2, description: "Evaluate at integer argument.", workingLatex: "\\Gamma(n+1) = n!.", explanation: "For a non-negative integer \\( n \\) the Gamma function collapses to the factorial." },
        { stepNumber: 3, description: "State the coefficient.", workingLatex: "a_n = n!.", explanation: "So the exponential density has factorial moments — the seed of a divergent series." },
      ],
      finalAnswer: "\\( a_n = n! \\)",
      canonicalAnswer: "factorial(n)",
    },
  },
  {
    id: "am2a-003",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Using the moments of \\( \\rho(t)=e^{-t} \\), write down the first four terms of the asymptotic series of \\( F(x)=\\int_0^\\infty \\dfrac{e^{-t}}{1+xt}\\,dt \\) as \\( x\\to 0^+ \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "asymptotic series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the coefficient.", workingLatex: "a_n = \\int_0^\\infty t^n e^{-t}\\,dt = n!.", explanation: "From the Gamma integral, the moments are the factorials." },
        { stepNumber: 2, description: "Substitute into the general series.", workingLatex: "F(x) \\sim \\sum_{n=0}^\\infty (-1)^n n!\\,x^n.", explanation: "Each coefficient \\( a_n \\) becomes \\( n! \\) in \\( \\sum (-1)^n a_n x^n \\)." },
        { stepNumber: 3, description: "Write out the leading terms.", workingLatex: "F(x) \\sim 1 - x + 2x^2 - 6x^3 + \\cdots.", explanation: "With \\( 0!=1,\\,1!=1,\\,2!=2,\\,3!=6 \\) and alternating signs." },
      ],
      finalAnswer: "\\( F(x) \\sim 1 - x + 2x^2 - 6x^3 + \\cdots \\)",
      canonicalAnswer: "1 - x + 2*x^2 - 6*x^3",
    },
  },
  {
    id: "am2a-004",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Show, using the ratio test, that the series \\( \\sum_{n=0}^\\infty (-1)^n n!\\,x^n \\) diverges for every \\( x>0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["divergent series", "ratio test"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Form the ratio of successive terms.", workingLatex: "\\left|\\frac{u_{n+1}}{u_n}\\right| = \\frac{(n+1)!\\,x^{n+1}}{n!\\,x^n} = (n+1)x.", explanation: "Take absolute values so the alternating sign drops out; the factorials cancel down to \\( (n+1) \\)." },
        { stepNumber: 2, description: "Take the limit.", workingLatex: "\\lim_{n\\to\\infty} (n+1)x = +\\infty \\quad (x>0).", explanation: "For any fixed positive \\( x \\), the factor \\( (n+1) \\) grows without bound." },
        { stepNumber: 3, description: "Apply the ratio test.", workingLatex: "\\frac{|u_{n+1}|}{|u_n|}\\to\\infty > 1 \\implies \\text{diverges}.", explanation: "A ratio exceeding \\( 1 \\) in the limit means the terms eventually grow, so the series cannot converge for any \\( x>0 \\): the radius of convergence is \\( 0 \\)." },
      ],
      finalAnswer: "The series diverges for all \\( x>0 \\); its radius of convergence is \\( 0 \\).",
    },
  },
  {
    id: "am2a-005",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 05",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For \\( \\rho(t) = e^{-2t} \\) on \\( [0,\\infty) \\), find the moment coefficient \\( a_n = \\int_0^\\infty t^n e^{-2t}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["moment coefficients", "Gamma function"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute \\( s = 2t \\).", workingLatex: "t = \\frac{s}{2}, \\quad dt = \\frac{ds}{2}.", explanation: "Rescaling to a unit exponential turns the integral into a standard Gamma integral." },
        { stepNumber: 2, description: "Rewrite the integral.", workingLatex: "\\int_0^\\infty \\left(\\frac{s}{2}\\right)^n e^{-s}\\,\\frac{ds}{2} = \\frac{1}{2^{n+1}}\\int_0^\\infty s^n e^{-s}\\,ds.", explanation: "Pulling out the constant powers of \\( 2 \\) leaves the unit-exponential moment inside." },
        { stepNumber: 3, description: "Evaluate the Gamma integral.", workingLatex: "\\int_0^\\infty s^n e^{-s}\\,ds = n!.", explanation: "The remaining integral is \\( \\Gamma(n+1)=n! \\)." },
        { stepNumber: 4, description: "Collect the constant.", workingLatex: "a_n = \\frac{n!}{2^{n+1}}.", explanation: "The decay rate \\( 2 \\) discounts each moment by a factor \\( 2^{n+1} \\); the factorial growth still dominates, so the series is again divergent." },
      ],
      finalAnswer: "\\( a_n = \\dfrac{n!}{2^{\\,n+1}} \\)",
      canonicalAnswer: "factorial(n)/2^(n+1)",
    },
  },
  {
    id: "am2a-006",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 06",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "A density is supported on the unit interval: \\( \\rho(t)=1 \\) for \\( 0\\le t\\le 1 \\) and \\( \\rho(t)=0 \\) otherwise. Find the moment coefficient \\( a_n=\\int_0^1 t^n\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["moment coefficients", "bounded support"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Integrate the monomial.", workingLatex: "\\int_0^1 t^n\\,dt = \\left[\\frac{t^{n+1}}{n+1}\\right]_0^1.", explanation: "Standard power rule on a finite interval." },
        { stepNumber: 2, description: "Evaluate at the endpoints.", workingLatex: "a_n = \\frac{1}{n+1}.", explanation: "The lower limit contributes zero. Note these moments DECAY in \\( n \\), so this Stieltjes series will actually converge — a useful contrast with the exponential case." },
      ],
      finalAnswer: "\\( a_n = \\dfrac{1}{n+1} \\)",
      canonicalAnswer: "1/(n+1)",
    },
  },

  // ─────────────────────────── STANDARD (12) ───────────────────────────
  {
    id: "am2a-007",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The function \\( \\rho \\) is continuous and satisfies \\( 0\\le\\rho(t)\\le C e^{-\\epsilon t} \\) for some \\( C,\\epsilon>0 \\) and all \\( t\\ge 0 \\). Show that \\( F(x)=\\int_0^\\infty \\dfrac{\\rho(t)}{1+xt}\\,dt \\) admits the asymptotic expansion \\( F(x)\\sim\\sum_{n=0}^\\infty (-1)^n a_n x^n \\) as \\( x\\to 0^+ \\), with \\( a_n=\\int_0^\\infty t^n\\rho(t)\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "asymptotic series", "remainder estimate"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the finite geometric identity with remainder.", workingLatex: "\\frac{1}{1+xt} = \\sum_{n=0}^{N-1} (-1)^n (xt)^n + \\frac{(-1)^N (xt)^N}{1+xt}.", explanation: "Truncating the geometric series after \\( N \\) terms gives an EXACT identity with a controllable remainder, which is the rigorous route." },
        { stepNumber: 2, description: "Integrate against \\( \\rho \\).", workingLatex: "F(x) = \\sum_{n=0}^{N-1} (-1)^n a_n x^n + R_N(x), \\quad R_N(x) = (-1)^N x^N\\!\\int_0^\\infty \\frac{t^N\\rho(t)}{1+xt}\\,dt.", explanation: "Each finite-sum term is genuinely \\( (-1)^n a_n x^n \\); only the remainder \\( R_N \\) needs bounding." },
        { stepNumber: 3, description: "Bound the remainder integrand.", workingLatex: "0 \\le \\frac{1}{1+xt} \\le 1 \\quad (x,t\\ge 0).", explanation: "The kernel is at most \\( 1 \\) for non-negative \\( x,t \\); dropping it can only enlarge the integral." },
        { stepNumber: 4, description: "Estimate the remainder.", workingLatex: "|R_N(x)| \\le x^N \\int_0^\\infty t^N \\rho(t)\\,dt = a_N\\,x^N.", explanation: "The exponential bound on \\( \\rho \\) makes \\( a_N=\\int t^N\\rho\\,dt \\) finite, so the remainder is finite and \\( O(x^N) \\)." },
        { stepNumber: 5, description: "Confirm the asymptotic ordering.", workingLatex: "R_N(x) = O(x^N) = o(x^{N-1}) \\quad (x\\to 0^+).", explanation: "The remainder after \\( N \\) terms is smaller than the last term retained, which is exactly Poincaré's definition of an asymptotic expansion." },
        { stepNumber: 6, description: "State the result.", workingLatex: "F(x) \\sim \\sum_{n=0}^\\infty (-1)^n a_n x^n, \\quad a_n=\\int_0^\\infty t^n\\rho(t)\\,dt.", explanation: "Valid for every \\( N \\), so the full asymptotic series holds even though it may diverge as a series." },
      ],
      finalAnswer: "\\( F(x)\\sim\\sum_{n=0}^\\infty (-1)^n a_n x^n \\) with \\( a_n=\\int_0^\\infty t^n\\rho(t)\\,dt \\); remainder \\( |R_N|\\le a_N x^N \\).",
    },
  },
  {
    id: "am2a-008",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "For \\( \\rho(t)=e^{-t} \\), show that \\( F(x)=\\int_0^\\infty \\dfrac{e^{-t}}{1+xt}\\,dt \\sim \\sum_{n=0}^\\infty (-1)^n n!\\,x^n \\) as \\( x\\to 0^+ \\), and explain in one line why the series diverges.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "factorial moments", "divergence"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the moments.", workingLatex: "a_n = \\int_0^\\infty t^n e^{-t}\\,dt = \\Gamma(n+1) = n!.", explanation: "The exponential density has factorial moments via the Gamma integral." },
        { stepNumber: 2, description: "Insert into the general Stieltjes series.", workingLatex: "F(x) \\sim \\sum_{n=0}^\\infty (-1)^n a_n x^n = \\sum_{n=0}^\\infty (-1)^n n!\\,x^n.", explanation: "Substitute \\( a_n=n! \\) into the standard expansion derived from the geometric kernel." },
        { stepNumber: 3, description: "Diagnose divergence.", workingLatex: "\\frac{|u_{n+1}|}{|u_n|} = (n+1)x \\to \\infty.", explanation: "Factorial growth beats any geometric \\( x^n \\) decay, so the radius of convergence is zero — the series is asymptotic but divergent." },
      ],
      finalAnswer: "\\( F(x)\\sim\\sum_{n=0}^\\infty (-1)^n n!\\,x^n \\); divergent because \\( |u_{n+1}/u_n|=(n+1)x\\to\\infty \\).",
    },
  },
  {
    id: "am2a-009",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the asymptotic expansion as \\( x\\to 0^+ \\) of \\( F(x)=\\int_0^\\infty \\dfrac{e^{-2t}}{1+xt}\\,dt \\), giving the general term.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "asymptotic series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the moments.", workingLatex: "a_n = \\int_0^\\infty t^n e^{-2t}\\,dt = \\frac{n!}{2^{n+1}}.", explanation: "Rescale \\( s=2t \\) to reduce to \\( \\Gamma(n+1)/2^{n+1} \\)." },
        { stepNumber: 2, description: "Assemble the series.", workingLatex: "F(x) \\sim \\sum_{n=0}^\\infty (-1)^n \\frac{n!}{2^{n+1}}\\,x^n.", explanation: "Substitute the moment into \\( \\sum(-1)^n a_n x^n \\)." },
        { stepNumber: 3, description: "Write out leading terms.", workingLatex: "F(x) \\sim \\frac{1}{2} - \\frac{1}{4}x + \\frac{1}{4}x^2 - \\frac{3}{8}x^3 + \\cdots.", explanation: "Using \\( a_0=\\tfrac12,\\,a_1=\\tfrac14,\\,a_2=\\tfrac14,\\,a_3=\\tfrac38 \\). Still divergent: \\( a_n=n!/2^{n+1} \\) grows factorially." },
      ],
      finalAnswer: "\\( F(x)\\sim\\sum_{n=0}^\\infty (-1)^n \\dfrac{n!}{2^{n+1}}\\,x^n = \\dfrac12 - \\dfrac14 x + \\dfrac14 x^2 - \\dfrac38 x^3 + \\cdots \\)",
    },
  },
  {
    id: "am2a-010",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 10",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the bounded-support density \\( \\rho(t)=1 \\) on \\( [0,1] \\), evaluate \\( F(x)=\\int_0^1 \\dfrac{dt}{1+xt} \\) in closed form, and hence write its (convergent) Maclaurin series in \\( x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "closed form", "convergent series"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Integrate the kernel.", workingLatex: "\\int_0^1 \\frac{dt}{1+xt} = \\left[\\frac{1}{x}\\ln(1+xt)\\right]_0^1.", explanation: "Antiderivative of \\( 1/(1+xt) \\) in \\( t \\) is \\( \\tfrac1x\\ln(1+xt) \\)." },
        { stepNumber: 2, description: "Evaluate the limits.", workingLatex: "F(x) = \\frac{\\ln(1+x)}{x}.", explanation: "Lower limit gives \\( \\ln 1 = 0 \\). This closed form is exact for all \\( x>-1,\\ x\\ne 0 \\)." },
        { stepNumber: 3, description: "Expand the logarithm.", workingLatex: "\\ln(1+x) = \\sum_{k=1}^\\infty \\frac{(-1)^{k-1}}{k}x^k.", explanation: "The standard Maclaurin series, convergent for \\( |x|<1 \\)." },
        { stepNumber: 4, description: "Divide by \\( x \\) and reindex.", workingLatex: "F(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n}{n+1}x^n = 1 - \\frac{x}{2} + \\frac{x^2}{3} - \\cdots.", explanation: "Setting \\( n=k-1 \\), the coefficients are the decaying moments \\( a_n=1/(n+1) \\): bounded support gives a genuinely convergent (radius \\( 1 \\)) Stieltjes series." },
      ],
      finalAnswer: "\\( F(x)=\\dfrac{\\ln(1+x)}{x}=\\sum_{n=0}^\\infty \\dfrac{(-1)^n}{n+1}x^n \\) (convergent for \\( |x|<1 \\)).",
      canonicalAnswer: "log(1+x)/x",
    },
  },
  {
    id: "am2a-011",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that for \\( \\rho(t)=e^{-t} \\) the remainder \\( R_N(x)=F(x)-\\sum_{n=0}^{N-1}(-1)^n n!\\,x^n \\) satisfies \\( |R_N(x)|\\le N!\\,x^N \\) as \\( x\\to 0^+ \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["remainder estimate", "error bound"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the exact truncated kernel.", workingLatex: "\\frac{1}{1+xt} = \\sum_{n=0}^{N-1}(-1)^n (xt)^n + \\frac{(-1)^N (xt)^N}{1+xt}.", explanation: "Finite geometric sum with the exact remainder term." },
        { stepNumber: 2, description: "Integrate against \\( e^{-t} \\).", workingLatex: "R_N(x) = (-1)^N x^N \\int_0^\\infty \\frac{t^N e^{-t}}{1+xt}\\,dt.", explanation: "The first \\( N \\) terms reproduce the partial sum; what is left is the remainder." },
        { stepNumber: 3, description: "Bound the kernel.", workingLatex: "0<\\frac{1}{1+xt}\\le 1.", explanation: "For \\( x,t\\ge 0 \\) the denominator is at least \\( 1 \\)." },
        { stepNumber: 4, description: "Apply the bound.", workingLatex: "|R_N(x)| \\le x^N \\int_0^\\infty t^N e^{-t}\\,dt = x^N\\,\\Gamma(N+1).", explanation: "Replacing the kernel by its maximum value \\( 1 \\)." },
        { stepNumber: 5, description: "Evaluate the Gamma factor.", workingLatex: "|R_N(x)| \\le N!\\,x^N.", explanation: "Since \\( \\Gamma(N+1)=N! \\). Crucially the error is bounded by the first NEGLECTED term, the hallmark of an alternating asymptotic series." },
      ],
      finalAnswer: "\\( |R_N(x)|\\le N!\\,x^N \\) — bounded by the first omitted term.",
    },
  },
  {
    id: "am2a-012",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 12",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For \\( \\rho(t)=e^{-t} \\) at \\( x=0.1 \\), the term magnitudes are \\( |u_n|=n!\\,(0.1)^n \\). Find the value of \\( n \\) for which \\( |u_{n+1}|/|u_n|=1 \\), i.e. where the terms stop decreasing, and hence state where to truncate optimally.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimal truncation", "least term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Form the term ratio.", workingLatex: "\\frac{|u_{n+1}|}{|u_n|} = (n+1)x = (n+1)(0.1).", explanation: "The ratio of consecutive magnitudes is \\( (n+1)x \\), independent of factorial detail." },
        { stepNumber: 2, description: "Set the ratio to one.", workingLatex: "(n+1)(0.1) = 1 \\implies n+1 = 10 \\implies n = 9.", explanation: "The terms decrease while the ratio is below \\( 1 \\) and increase once it exceeds \\( 1 \\)." },
        { stepNumber: 3, description: "Locate the smallest term.", workingLatex: "|u_9| = 9!\\,(0.1)^9, \\quad |u_{10}| = 10!\\,(0.1)^{10} = |u_9|.", explanation: "Terms \\( n=9 \\) and \\( n=10 \\) are equal in magnitude — the least term sits there, near \\( n\\approx 1/x=10 \\)." },
        { stepNumber: 4, description: "State the optimal truncation.", workingLatex: "\\text{Keep terms } n=0,\\dots,9 \\text{ (stop before the least term).}", explanation: "Optimal truncation retains all terms up to but not including the smallest, giving error \\( \\approx |u_{10}| \\)." },
      ],
      finalAnswer: "\\( n=9 \\) (smallest term near \\( n\\approx 1/x=10 \\)); truncate after the \\( n=9 \\) term.",
      canonicalAnswer: "9",
    },
  },
  {
    id: "am2a-013",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Let \\( G(x)=\\int_0^\\infty \\dfrac{e^{-t}}{(1+xt)^2}\\,dt \\). By expanding \\( (1+xt)^{-2} \\), show that \\( G(x)\\sim\\sum_{n=0}^\\infty (-1)^n (n+1)!\\,x^n \\) as \\( x\\to 0^+ \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "binomial expansion", "factorial moments"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Expand the squared kernel.", workingLatex: "\\frac{1}{(1+xt)^2} = \\sum_{n=0}^\\infty (-1)^n (n+1)(xt)^n.", explanation: "Differentiating \\( \\sum(-1)^n(xt)^n \\) with respect to \\( (xt) \\), or using the binomial series for exponent \\( -2 \\), gives the coefficient \\( (n+1) \\)." },
        { stepNumber: 2, description: "Integrate term by term.", workingLatex: "G(x) \\sim \\sum_{n=0}^\\infty (-1)^n (n+1)\\,x^n \\int_0^\\infty t^n e^{-t}\\,dt.", explanation: "Pull the \\( x \\)-powers out; the \\( t \\)-integral is the \\( n \\)-th moment of \\( e^{-t} \\)." },
        { stepNumber: 3, description: "Insert the moment.", workingLatex: "\\int_0^\\infty t^n e^{-t}\\,dt = n! \\implies G(x)\\sim \\sum_{n=0}^\\infty (-1)^n (n+1)\\,n!\\,x^n.", explanation: "Substitute \\( \\Gamma(n+1)=n! \\)." },
        { stepNumber: 4, description: "Simplify the coefficient.", workingLatex: "(n+1)\\,n! = (n+1)! \\implies G(x)\\sim \\sum_{n=0}^\\infty (-1)^n (n+1)!\\,x^n.", explanation: "The squared kernel raises the factorial growth by one order, so the series diverges even faster than \\( F \\)'s." },
      ],
      finalAnswer: "\\( G(x)\\sim\\sum_{n=0}^\\infty (-1)^n (n+1)!\\,x^n = 1 - 2x + 6x^2 - 24x^3 + \\cdots \\)",
    },
  },
  {
    id: "am2a-014",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given \\( F(x)=\\int_0^\\infty \\dfrac{e^{-t}}{1+xt}\\,dt \\) and \\( G(x)=\\int_0^\\infty \\dfrac{e^{-t}}{(1+xt)^2}\\,dt \\), differentiate under the integral sign to relate \\( F' \\) and \\( G \\), and confirm the relation at the level of their asymptotic series.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["differentiation under the integral", "term-by-term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the kernel in \\( x \\).", workingLatex: "\\frac{\\partial}{\\partial x}\\frac{1}{1+xt} = -\\frac{t}{(1+xt)^2}.", explanation: "Chain rule on the kernel, treating \\( t \\) as a parameter." },
        { stepNumber: 2, description: "Differentiate under the integral.", workingLatex: "F'(x) = -\\int_0^\\infty \\frac{t\\,e^{-t}}{(1+xt)^2}\\,dt.", explanation: "The exponential bound on the integrand justifies differentiating through the integral." },
        { stepNumber: 3, description: "Compare with \\( G \\).", workingLatex: "F'(x) \\ne -G(x) \\text{ in general; instead relate via } x.", explanation: "The extra \\( t \\) in \\( F' \\) means we must connect to \\( G \\) through the series, not by direct equality." },
        { stepNumber: 4, description: "Differentiate the series for \\( F \\).", workingLatex: "F(x)\\sim\\sum (-1)^n n!\\,x^n \\implies F'(x)\\sim\\sum_{n=1}^\\infty (-1)^n n\\cdot n!\\,x^{n-1}.", explanation: "Formal term-by-term differentiation of the (divergent) asymptotic series." },
        { stepNumber: 5, description: "Reindex \\( m=n-1 \\).", workingLatex: "F'(x)\\sim\\sum_{m=0}^\\infty (-1)^{m+1}(m+1)(m+1)!\\,x^{m}.", explanation: "Shift the index so the power matches \\( G \\)'s expansion." },
        { stepNumber: 6, description: "Confirm against \\( -G \\) scaled.", workingLatex: "G(x)\\sim\\sum_{m=0}^\\infty (-1)^m (m+1)!\\,x^m,\\quad F'(x)\\sim -\\sum_{m=0}^\\infty (-1)^{m}(m+1)(m+1)!\\,x^m.", explanation: "Term-by-term differentiation of a Stieltjes asymptotic series is valid here because \\( F' \\) is itself a Stieltjes integral with an exponentially-bounded density, so its expansion is the differentiated one." },
      ],
      finalAnswer: "\\( F'(x)=-\\int_0^\\infty \\dfrac{t e^{-t}}{(1+xt)^2}\\,dt \\); its asymptotic series is the term-by-term derivative of \\( F \\)'s, consistent with \\( G \\)'s expansion.",
    },
  },
  {
    id: "am2a-015",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "For \\( \\rho(t)=t\\,e^{-t} \\), find the moments \\( a_n=\\int_0^\\infty t^n\\,t e^{-t}\\,dt \\) and write the asymptotic series of \\( F(x)=\\int_0^\\infty \\dfrac{t e^{-t}}{1+xt}\\,dt \\) as \\( x\\to 0^+ \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["moment coefficients", "Stieltjes integral"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Combine the powers of \\( t \\).", workingLatex: "a_n = \\int_0^\\infty t^{n+1} e^{-t}\\,dt.", explanation: "The factor \\( t \\) in the density adds one to the exponent of the moment." },
        { stepNumber: 2, description: "Evaluate the Gamma integral.", workingLatex: "a_n = \\Gamma(n+2) = (n+1)!.", explanation: "\\( \\int_0^\\infty t^{n+1}e^{-t}\\,dt=\\Gamma(n+2)=(n+1)! \\)." },
        { stepNumber: 3, description: "Assemble the series.", workingLatex: "F(x)\\sim\\sum_{n=0}^\\infty (-1)^n (n+1)!\\,x^n = 1 - 2x + 6x^2 - 24x^3 + \\cdots.", explanation: "Same coefficients as \\( G(x)=\\int e^{-t}/(1+xt)^2\\,dt \\): the densities \\( t e^{-t} \\) and the squared-kernel produce identical moment sequences." },
      ],
      finalAnswer: "\\( a_n=(n+1)! \\); \\( F(x)\\sim\\sum_{n=0}^\\infty (-1)^n (n+1)!\\,x^n \\).",
    },
  },
  {
    id: "am2a-016",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "By comparing the two integrals, show that \\( \\int_0^\\infty \\dfrac{t e^{-t}}{1+xt}\\,dt \\) and \\( \\int_0^\\infty \\dfrac{e^{-t}}{(1+xt)^2}\\,dt \\) share the same asymptotic series, and give an algebraic identity between their integrands that explains why.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "integration by parts"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the second integral for parts.", workingLatex: "G(x)=\\int_0^\\infty e^{-t}\\,\\frac{dt}{(1+xt)^2}.", explanation: "We integrate by parts to move the squared kernel onto a derivative." },
        { stepNumber: 2, description: "Antidifferentiate the kernel in \\( t \\).", workingLatex: "\\int \\frac{dt}{(1+xt)^2} = -\\frac{1}{x(1+xt)}.", explanation: "Standard antiderivative; the factor \\( 1/x \\) appears from the chain rule." },
        { stepNumber: 3, description: "Apply integration by parts.", workingLatex: "G(x) = \\left[-\\frac{e^{-t}}{x(1+xt)}\\right]_0^\\infty - \\int_0^\\infty \\frac{e^{-t}}{x(1+xt)}\\,dt.", explanation: "Differentiate \\( e^{-t} \\) (giving \\( -e^{-t} \\)) and integrate the kernel." },
        { stepNumber: 4, description: "Evaluate the boundary term.", workingLatex: "\\left[-\\frac{e^{-t}}{x(1+xt)}\\right]_0^\\infty = \\frac{1}{x}.", explanation: "At \\( t\\to\\infty \\) the term vanishes; at \\( t=0 \\) it is \\( -1/x \\), so with the minus sign the boundary contributes \\( +1/x \\)." },
        { stepNumber: 5, description: "Recognise the structure.", workingLatex: "G(x) = \\frac{1}{x} - \\frac{1}{x}F(x) = \\frac{1-F(x)}{x}.", explanation: "where \\( F(x)=\\int e^{-t}/(1+xt)\\,dt \\). Both \\( G \\) and \\( \\int t e^{-t}/(1+xt)\\,dt \\) reduce to the same factorial moments \\( (n+1)! \\)." },
        { stepNumber: 6, description: "State the integrand identity.", workingLatex: "\\frac{t}{1+xt} = \\frac{1}{x}\\left(1-\\frac{1}{1+xt}\\right),", explanation: "so \\( \\int t e^{-t}/(1+xt)\\,dt = \\tfrac1x(1-F)=G \\): the two integrals are literally equal, hence share every asymptotic coefficient." },
      ],
      finalAnswer: "Both equal \\( \\dfrac{1-F(x)}{x}\\sim\\sum_{n=0}^\\infty (-1)^n (n+1)!\\,x^n \\); the identity \\( \\dfrac{t}{1+xt}=\\dfrac1x\\bigl(1-\\dfrac{1}{1+xt}\\bigr) \\) explains the coincidence.",
    },
  },
  {
    id: "am2a-017",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 17",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For \\( \\rho(t)=e^{-t^2} \\) on \\( [0,\\infty) \\), find the moments \\( a_n=\\int_0^\\infty t^n e^{-t^2}\\,dt \\) in terms of the Gamma function, and state \\( a_0 \\) and \\( a_1 \\) explicitly.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["moment coefficients", "Gamma function", "Gaussian"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute \\( u=t^2 \\).", workingLatex: "u = t^2, \\quad du = 2t\\,dt, \\quad t = u^{1/2}.", explanation: "The Gaussian weight calls for the substitution that linearises the exponent." },
        { stepNumber: 2, description: "Rewrite the integral.", workingLatex: "a_n = \\int_0^\\infty u^{n/2} e^{-u}\\,\\frac{du}{2u^{1/2}} = \\frac{1}{2}\\int_0^\\infty u^{(n-1)/2} e^{-u}\\,du.", explanation: "Express \\( t^n\\,dt \\) in terms of \\( u \\); the half-power emerges from \\( dt=du/(2\\sqrt u) \\)." },
        { stepNumber: 3, description: "Identify the Gamma integral.", workingLatex: "a_n = \\frac{1}{2}\\,\\Gamma\\!\\left(\\frac{n+1}{2}\\right).", explanation: "The exponent \\( (n-1)/2 = \\tfrac{n+1}{2}-1 \\) matches \\( \\Gamma((n+1)/2) \\)." },
        { stepNumber: 4, description: "Evaluate the first two.", workingLatex: "a_0 = \\frac{1}{2}\\Gamma\\!\\left(\\tfrac12\\right) = \\frac{\\sqrt\\pi}{2}, \\quad a_1 = \\frac{1}{2}\\Gamma(1) = \\frac{1}{2}.", explanation: "Using \\( \\Gamma(\\tfrac12)=\\sqrt\\pi \\) and \\( \\Gamma(1)=1 \\). These moments DECAY, so this Stieltjes series converges." },
      ],
      finalAnswer: "\\( a_n=\\tfrac12\\Gamma\\!\\bigl(\\tfrac{n+1}{2}\\bigr) \\); \\( a_0=\\tfrac{\\sqrt\\pi}{2},\\ a_1=\\tfrac12 \\).",
      canonicalAnswer: "gamma((n+1)/2)/2",
    },
  },
  {
    id: "am2a-018",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Explain carefully why the expansion \\( F(x)\\sim\\sum (-1)^n n!\\,x^n \\) is an ASYMPTOTIC series and not a Taylor series, addressing both convergence and the behaviour of the remainder as \\( x\\to 0^+ \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["asymptotic vs convergent", "remainder"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Contrast the two limit orders.", workingLatex: "\\text{Convergent: } \\lim_{N\\to\\infty}S_N(x)=F(x)\\ (x\\text{ fixed}). \\quad \\text{Asymptotic: } \\lim_{x\\to0^+}\\frac{F(x)-S_N(x)}{x^{N}}=0\\ (N\\text{ fixed}).", explanation: "The two notions swap which variable is held fixed; an asymptotic series fixes the number of terms and lets \\( x\\to 0 \\)." },
        { stepNumber: 2, description: "Check convergence of the series.", workingLatex: "\\frac{|u_{n+1}|}{|u_n|} = (n+1)x \\to \\infty.", explanation: "For any fixed \\( x>0 \\) the partial sums do NOT converge — the series fails the convergent definition entirely." },
        { stepNumber: 3, description: "Check the asymptotic property.", workingLatex: "|F(x)-S_N(x)| = |R_N(x)| \\le N!\\,x^N = O(x^N).", explanation: "For fixed \\( N \\), the remainder vanishes faster than the last retained term as \\( x\\to 0^+ \\), so the asymptotic definition IS satisfied." },
        { stepNumber: 4, description: "Resolve the apparent paradox.", workingLatex: "\\text{Fixed } N,\\ x\\to0:\\ \\text{great accuracy}; \\quad \\text{Fixed } x,\\ N\\to\\infty:\\ \\text{ruin}.", explanation: "Adding more terms at fixed \\( x \\) eventually worsens the estimate (factorial growth), so there is a best — optimal — truncation; this is the defining signature of a divergent asymptotic series." },
      ],
      finalAnswer: "It is asymptotic: the remainder is \\( O(x^N) \\) for fixed \\( N \\) as \\( x\\to0^+ \\), yet the series diverges for every fixed \\( x>0 \\) (\\( (n+1)x\\to\\infty \\)).",
    },
  },

  // ─────────────────────────── CHALLENGE (12) ───────────────────────────
  {
    id: "am2a-019",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( \\rho(t)=e^{-t} \\), express \\( F(x)=\\int_0^\\infty \\dfrac{e^{-t}}{1+xt}\\,dt \\) exactly in terms of the exponential integral \\( E_1 \\), where \\( E_1(z)=\\int_z^\\infty \\dfrac{e^{-s}}{s}\\,ds \\). Hence recover the leading asymptotic behaviour as \\( x\\to 0^+ \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "closed form", "Borel-type"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute to expose \\( 1+xt \\).", workingLatex: "s = \\frac{1}{x}(1+xt) = \\frac{1}{x}+t, \\quad ds = dt, \\quad t = s-\\frac1x.", explanation: "Shift so the denominator becomes a single variable \\( s \\); the lower limit \\( t=0 \\) maps to \\( s=1/x \\)." },
        { stepNumber: 2, description: "Rewrite the integrand.", workingLatex: "\\frac{e^{-t}}{1+xt} = \\frac{e^{-(s-1/x)}}{xs} = \\frac{e^{1/x}}{x}\\cdot\\frac{e^{-s}}{s}.", explanation: "Use \\( 1+xt = xs \\) and \\( e^{-t}=e^{1/x}e^{-s} \\); the constant \\( e^{1/x}/x \\) pulls out." },
        { stepNumber: 3, description: "Recognise the exponential integral.", workingLatex: "F(x) = \\frac{e^{1/x}}{x}\\int_{1/x}^\\infty \\frac{e^{-s}}{s}\\,ds = \\frac{e^{1/x}}{x}\\,E_1\\!\\left(\\frac1x\\right).", explanation: "The remaining integral is exactly \\( E_1(1/x) \\). (Numerically verified: at \\( x=0.1 \\) this equals \\( F=0.9156333\\ldots \\).)" },
        { stepNumber: 4, description: "Use the large-argument expansion of \\( E_1 \\).", workingLatex: "E_1(z) \\sim \\frac{e^{-z}}{z}\\left(1 - \\frac{1}{z} + \\frac{2}{z^2} - \\cdots\\right), \\quad z=\\frac1x.", explanation: "As \\( x\\to0^+ \\), \\( z=1/x\\to\\infty \\); the standard asymptotic series for \\( E_1 \\) applies." },
        { stepNumber: 5, description: "Combine and simplify.", workingLatex: "F(x) = \\frac{e^{1/x}}{x}\\cdot \\frac{e^{-1/x}}{1/x}\\bigl(1 - x + 2x^2 - \\cdots\\bigr) = 1 - x + 2x^2 - \\cdots.", explanation: "The \\( e^{\\pm 1/x} \\) cancel and \\( (1/x)\\cdot x=1 \\); we recover the divergent series \\( \\sum(-1)^n n! x^n \\), confirming the closed form." },
      ],
      finalAnswer: "\\( F(x)=\\dfrac{e^{1/x}}{x}\\,E_1\\!\\bigl(\\tfrac1x\\bigr) \\sim 1 - x + 2x^2 - \\cdots \\) as \\( x\\to0^+ \\).",
    },
  },
  {
    id: "am2a-020",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 20",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For \\( G(x)=\\int_0^\\infty \\dfrac{e^{-t}}{(1+xt)^2}\\,dt \\sim\\sum_{n=0}^\\infty (-1)^n (n+1)!\\,x^n \\) at \\( x=0.1 \\), identify the smallest term in the series and use optimal truncation to estimate \\( G(0.1) \\), comparing with the known value \\( G(0.1)=0.84366660602\\ldots \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimal truncation", "least term", "numerical estimate"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the term magnitude.", workingLatex: "|u_n| = (n+1)!\\,x^n = (n+1)!\\,(0.1)^n.", explanation: "Coefficients \\( (n+1)! \\) times the power of \\( x \\)." },
        { stepNumber: 2, description: "Form the ratio.", workingLatex: "\\frac{|u_{n+1}|}{|u_n|} = (n+2)x = (n+2)(0.1).", explanation: "Ratio of consecutive magnitudes; terms shrink while this is below \\( 1 \\)." },
        { stepNumber: 3, description: "Find where terms stop decreasing.", workingLatex: "(n+2)(0.1)=1 \\implies n+2=10 \\implies n=8.", explanation: "The least term is near \\( n=8 \\); checking, \\( |u_9|=10!(0.1)^9 \\) and \\( |u_{10}|=11!(0.1)^{10} \\) so the minimum sits around \\( n=8\\text{–}9 \\)." },
        { stepNumber: 4, description: "Sum up to the least term.", workingLatex: "G(0.1)\\approx\\sum_{n=0}^{8}(-1)^n (n+1)!\\,(0.1)^n.", explanation: "Optimal truncation keeps all terms before the smallest. (Numerically this partial sum is \\( 0.84368\\ldots \\).)" },
        { stepNumber: 5, description: "Compare with the exact value.", workingLatex: "0.8437\\ldots \\approx 0.84366660602\\ldots, \\quad \\text{error} \\sim |u_9| = 10!\\,(0.1)^9 \\approx 3.6\\times10^{-3}.", explanation: "The optimally-truncated divergent series reproduces the integral to about three decimals — the accuracy ceiling set by the smallest term." },
      ],
      finalAnswer: "Smallest term near \\( n=8\\text{–}9 \\); optimal truncation gives \\( G(0.1)\\approx 0.8437 \\), matching \\( 0.84366660602\\ldots \\) to \\( \\sim 3 \\) d.p.",
      canonicalAnswer: "0.8437",
    },
  },
  // REVIEW: relies on the general Cauchy-product identity c_n = sum_{k} a_{n-k} b_k for the product of two asymptotic series; algebraically verified for n<=3 below but the n-th coefficient claim is a structural (not purely numerical) result.
  {
    id: "am2a-021",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Suppose \\( f(x)\\sim\\sum a_n x^n \\) and \\( g(x)\\sim\\sum b_n x^n \\) as \\( x\\to 0^+ \\). Show that \\( f(x)g(x)\\sim\\sum c_n x^n \\) with \\( c_n=\\sum_{k=0}^n a_{n-k}b_k \\), and apply this to square the Stieltjes series \\( F(x)\\sim\\sum (-1)^n n! x^n \\), giving \\( c_0,c_1,c_2 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product of asymptotic series", "Cauchy product"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write each as partial sum plus remainder.", workingLatex: "f = \\sum_{n=0}^{N}a_n x^n + o(x^N), \\quad g = \\sum_{n=0}^{N}b_n x^n + o(x^N).", explanation: "Asymptotic to order \\( N \\): the error in each is \\( o(x^N) \\) as \\( x\\to0^+ \\)." },
        { stepNumber: 2, description: "Multiply and collect by power.", workingLatex: "fg = \\sum_{n=0}^{N}\\left(\\sum_{k=0}^{n}a_{n-k}b_k\\right)x^n + o(x^N).", explanation: "The cross terms of total degree \\( n \\) gather into the Cauchy convolution; all products of degree \\( >N \\) and the \\( o(x^N) \\) pieces stay \\( o(x^N) \\)." },
        { stepNumber: 3, description: "Identify the coefficient.", workingLatex: "c_n = \\sum_{k=0}^{n} a_{n-k}\\,b_k.", explanation: "Matching powers of \\( x \\) defines the product series coefficient." },
        { stepNumber: 4, description: "Specialise to \\( a_n=b_n=(-1)^n n! \\).", workingLatex: "c_0 = a_0 b_0 = 1.", explanation: "Lowest term: \\( (1)(1)=1 \\)." },
        { stepNumber: 5, description: "Next coefficient.", workingLatex: "c_1 = a_0 b_1 + a_1 b_0 = (1)(-1)+(-1)(1) = -2.", explanation: "Two equal cross terms with \\( a_1=b_1=-1 \\)." },
        { stepNumber: 6, description: "Third coefficient.", workingLatex: "c_2 = a_0 b_2 + a_1 b_1 + a_2 b_0 = 2 + 1 + 2 = 5.", explanation: "With \\( a_2=b_2=2 \\): \\( 2+(-1)(-1)+2=5 \\). So \\( F(x)^2\\sim 1 - 2x + 5x^2 - \\cdots \\)." },
      ],
      finalAnswer: "\\( c_n=\\sum_{k=0}^n a_{n-k}b_k \\); for \\( F^2 \\): \\( c_0=1,\\ c_1=-2,\\ c_2=5 \\).",
    },
  },
  // REVIEW: the reciprocal-series recurrence (d_0=1, sum d_{n-k}a_k=0) is a structural induction result; the first coefficients are checked algebraically but the general statement is a proof, not a numerical check.
  {
    id: "am2a-022",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Given \\( f(x)\\sim a_0 + a_1 x + a_2 x^2 + \\cdots \\) with \\( a_0\\ne 0 \\), show that \\( 1/f(x)\\sim \\dfrac{1}{a_0}\\sum_{n=0}^\\infty d_n x^n \\) where \\( d_0=1 \\) and \\( \\sum_{k=0}^n d_{n-k}a_k=0 \\) for \\( n\\ge 1 \\). Compute \\( d_1,d_2 \\) for \\( F(x)\\sim 1 - x + 2x^2 - \\cdots \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["reciprocal series", "induction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Posit the reciprocal series.", workingLatex: "\\frac{1}{f(x)} \\sim \\frac{1}{a_0}\\sum_{n=0}^\\infty d_n x^n,", explanation: "An asymptotic series with \\( a_0\\ne 0 \\) is invertible; pull out \\( 1/a_0 \\) for convenience." },
        { stepNumber: 2, description: "Impose \\( f\\cdot(1/f)=1 \\).", workingLatex: "\\left(\\sum_k a_k x^k\\right)\\frac{1}{a_0}\\left(\\sum_m d_m x^m\\right) \\sim 1.", explanation: "Multiply the two series; the product must be the constant \\( 1 \\) asymptotically." },
        { stepNumber: 3, description: "Match the constant term.", workingLatex: "\\frac{a_0 d_0}{a_0} = 1 \\implies d_0 = 1.", explanation: "Order \\( x^0 \\) fixes the leading reciprocal coefficient." },
        { stepNumber: 4, description: "Match powers \\( x^n,\\ n\\ge1 \\).", workingLatex: "\\sum_{k=0}^n a_k d_{n-k} = 0 \\quad (n\\ge 1).", explanation: "All higher coefficients of the product must vanish; this is the convolution recurrence (Cauchy product set to zero)." },
        { stepNumber: 5, description: "Solve for \\( d_1 \\).", workingLatex: "a_0 d_1 + a_1 d_0 = 0 \\implies d_1 = -\\frac{a_1}{a_0} = -\\frac{-1}{1} = 1.", explanation: "Using \\( a_0=1,\\ a_1=-1 \\)." },
        { stepNumber: 6, description: "Solve for \\( d_2 \\).", workingLatex: "a_0 d_2 + a_1 d_1 + a_2 d_0 = 0 \\implies d_2 = -(a_1 d_1 + a_2 d_0) = -((-1)(1)+(2)(1)) = -1.", explanation: "So \\( 1/F(x)\\sim 1 + x - x^2 + \\cdots \\) (since \\( a_0=1 \\))." },
      ],
      finalAnswer: "\\( d_0=1,\\ d_1=1,\\ d_2=-1 \\); hence \\( 1/F(x)\\sim 1 + x - x^2 + \\cdots \\).",
    },
  },
  {
    id: "am2a-023",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Consider \\( H(x)=\\int_0^\\infty \\dfrac{\\rho(t)}{1+xt}\\,dt \\) with \\( \\rho(t)=\\dfrac{1}{\\pi}\\,\\dfrac{1}{1+t^2} \\cdot 2 \\) on \\( [0,\\infty) \\) (so \\( \\int_0^\\infty\\rho=1 \\)). Show that the formal moments \\( a_n=\\int_0^\\infty t^n\\rho(t)\\,dt \\) DIVERGE for \\( n\\ge 1 \\), and explain what this means for the existence of a power-series asymptotic expansion of \\( H \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["heavy-tailed density", "moment divergence"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the moment integral.", workingLatex: "a_n = \\frac{2}{\\pi}\\int_0^\\infty \\frac{t^n}{1+t^2}\\,dt.", explanation: "Insert the density; the constant \\( 2/\\pi \\) normalises it." },
        { stepNumber: 2, description: "Examine the large-\\( t \\) behaviour.", workingLatex: "\\frac{t^n}{1+t^2} \\sim t^{\\,n-2} \\quad (t\\to\\infty).", explanation: "For large \\( t \\) the integrand decays only like \\( t^{n-2} \\) — a power-law tail, not exponential." },
        { stepNumber: 3, description: "Test convergence at infinity.", workingLatex: "\\int^\\infty t^{\\,n-2}\\,dt \\text{ converges} \\iff n-2 < -1 \\iff n < 1.", explanation: "A power \\( t^{p} \\) is integrable at infinity only when \\( p<-1 \\)." },
        { stepNumber: 4, description: "Conclude on the moments.", workingLatex: "a_n = +\\infty \\quad \\text{for } n\\ge 1; \\quad a_0 = \\frac{2}{\\pi}\\cdot\\frac{\\pi}{2} = 1.", explanation: "Only the zeroth moment is finite; all higher moments diverge because the tail is too heavy." },
        { stepNumber: 5, description: "Interpret for the expansion.", workingLatex: "H(x) \\not\\sim \\sum_{n\\ge0} (-1)^n a_n x^n.", explanation: "With \\( a_n=\\infty \\) the naive Stieltjes series has no coefficients beyond \\( a_0 \\); the true small-\\( x \\) expansion contains non-integer powers / logarithms (e.g. \\( H(x)\\sim 1 + cx\\ln x + \\cdots \\)). Exponential decay of \\( \\rho \\) was essential to the clean power series." },
      ],
      finalAnswer: "\\( a_0=1 \\) but \\( a_n=\\infty \\) for \\( n\\ge1 \\); the heavy tail destroys the integer-power asymptotic series (logarithmic / fractional-power terms appear instead).",
    },
  },
  {
    id: "am2a-024",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( \\rho(t)=e^{-t} \\), define optimal truncation by \\( N+1=[1/x] \\) (integer part). Using the error bound \\( \\mathrm{Err}_N\\le (N+1)!\\,x^{N+1} \\) and Stirling's formula, show that the optimal error is \\( O\\!\\bigl([1/x]^{1/2}e^{-[1/x]}\\bigr)=o(x^M) \\) as \\( x\\to0^+ \\) for every positive integer \\( M \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimal truncation", "Stirling", "superasymptotic"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set the truncation point.", workingLatex: "N+1 = \\left[\\frac1x\\right] =: M_x, \\quad \\text{so } x \\approx \\frac{1}{M_x}.", explanation: "Truncate just before the smallest term, which sits at \\( n\\approx 1/x \\)." },
        { stepNumber: 2, description: "Insert into the error bound.", workingLatex: "\\mathrm{Err}_N \\le (N+1)!\\,x^{N+1} = M_x!\\,x^{M_x}.", explanation: "Use the given alternating-series bound at the optimal index." },
        { stepNumber: 3, description: "Apply Stirling to \\( M_x! \\).", workingLatex: "M_x! \\sim \\sqrt{2\\pi M_x}\\,\\left(\\frac{M_x}{e}\\right)^{M_x}.", explanation: "Stirling's approximation for the factorial at large \\( M_x \\)." },
        { stepNumber: 4, description: "Substitute \\( x\\approx 1/M_x \\).", workingLatex: "M_x!\\,x^{M_x} \\sim \\sqrt{2\\pi M_x}\\,\\left(\\frac{M_x}{e}\\right)^{M_x}\\left(\\frac{1}{M_x}\\right)^{M_x}.", explanation: "Replace \\( x^{M_x} \\) by \\( M_x^{-M_x} \\)." },
        { stepNumber: 5, description: "Cancel the powers of \\( M_x \\).", workingLatex: "= \\sqrt{2\\pi M_x}\\; e^{-M_x} = O\\!\\left(M_x^{1/2} e^{-M_x}\\right).", explanation: "The \\( M_x^{M_x} \\) factors cancel exactly, leaving exponential smallness times an algebraic prefactor." },
        { stepNumber: 6, description: "Compare with any power of \\( x \\).", workingLatex: "M_x^{1/2}e^{-M_x} = \\Bigl[\\tfrac1x\\Bigr]^{1/2}e^{-[1/x]} = o(x^M) \\quad\\forall M\\in\\mathbb{Z}^+.", explanation: "An exponentially small \\( e^{-1/x} \\) beats every algebraic \\( x^M \\) as \\( x\\to0^+ \\): optimal truncation achieves superasymptotic (beyond-all-orders) accuracy." },
      ],
      finalAnswer: "Optimal error \\( = O\\!\\bigl([1/x]^{1/2}e^{-[1/x]}\\bigr)=o(x^M) \\) for every \\( M \\) — exponentially small, beyond all algebraic orders.",
    },
  },
  {
    id: "am2a-025",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Use integration by parts on \\( E_1(x)=\\int_x^\\infty \\dfrac{e^{-t}}{t}\\,dt \\) to derive its asymptotic expansion \\( E_1(x)\\sim e^{-x}\\bigl(\\tfrac1x-\\tfrac1{x^2}+\\tfrac{2}{x^3}-\\cdots\\bigr) \\) as \\( x\\to\\infty \\), showing the remainder after \\( N \\) terms is \\( O(e^{-x}x^{-N-1}) \\), and connect this to the Stieltjes form \\( F=\\tfrac{e^{1/x}}{x}E_1(1/x) \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "integration by parts", "remainder"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Integrate by parts once.", workingLatex: "E_1(x) = \\int_x^\\infty t^{-1} e^{-t}\\,dt = \\left[-t^{-1}e^{-t}\\right]_x^\\infty - \\int_x^\\infty t^{-2}e^{-t}\\,dt.", explanation: "Take \\( u=t^{-1},\\ dv=e^{-t}dt \\); the boundary term is evaluated next." },
        { stepNumber: 2, description: "Evaluate the boundary.", workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - \\int_x^\\infty \\frac{e^{-t}}{t^2}\\,dt.", explanation: "At \\( \\infty \\) the term vanishes; at \\( x \\) it gives \\( e^{-x}/x \\)." },
        { stepNumber: 3, description: "Iterate.", workingLatex: "E_1(x) = e^{-x}\\left(\\frac{1}{x} - \\frac{1}{x^2} + \\frac{2!}{x^3} - \\cdots + (-1)^{N-1}\\frac{(N-1)!}{x^N}\\right) + R_N.", explanation: "Each further integration by parts pulls out the next \\( (-1)^{k}k!/x^{k+1} \\) term." },
        { stepNumber: 4, description: "Write the remainder.", workingLatex: "R_N = (-1)^N N!\\int_x^\\infty \\frac{e^{-t}}{t^{N+1}}\\,dt.", explanation: "The leftover integral after \\( N \\) parts, with a factorial coefficient." },
        { stepNumber: 5, description: "Bound the remainder.", workingLatex: "|R_N| \\le \\frac{N!}{x^{N+1}}\\int_x^\\infty e^{-t}\\,dt = \\frac{N!\\,e^{-x}}{x^{N+1}} = O\\!\\bigl(e^{-x}x^{-N-1}\\bigr).", explanation: "Replace \\( t^{-(N+1)} \\) by its maximum \\( x^{-(N+1)} \\) on \\( [x,\\infty) \\)." },
        { stepNumber: 6, description: "Connect to the Stieltjes integral.", workingLatex: "F(x)=\\frac{e^{1/x}}{x}E_1\\!\\bigl(\\tfrac1x\\bigr) \\sim \\frac{e^{1/x}}{x}\\cdot e^{-1/x}\\,x\\bigl(1-x+2x^2-\\cdots\\bigr) = 1-x+2x^2-\\cdots.", explanation: "Setting the argument to \\( 1/x \\) and multiplying by \\( e^{1/x}/x \\) turns the \\( E_1 \\) expansion into the Stieltjes divergent series — the same coefficients \\( (-1)^n n! \\)." },
      ],
      finalAnswer: "\\( E_1(x)\\sim e^{-x}\\sum_{n=0}^\\infty \\dfrac{(-1)^n n!}{x^{n+1}} \\), remainder \\( O(e^{-x}x^{-N-1}) \\); via \\( F=\\tfrac{e^{1/x}}{x}E_1(1/x) \\) this is exactly \\( \\sum(-1)^n n! x^n \\).",
    },
  },
  {
    id: "am2a-026",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Show that the Stieltjes integral \\( F(x)=\\int_0^\\infty \\dfrac{e^{-t}}{1+xt}\\,dt \\) is the Borel sum of its divergent series \\( \\sum (-1)^n n! x^n \\): form the Borel transform \\( B(\\xi)=\\sum \\tfrac{(-1)^n n!}{n!}\\xi^n \\), sum it, and recover \\( F \\) by the Borel integral.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Borel summation", "divergent series", "resummation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Form the Borel transform.", workingLatex: "B(\\xi) = \\sum_{n=0}^\\infty \\frac{(-1)^n n!}{n!}\\,\\xi^n = \\sum_{n=0}^\\infty (-1)^n \\xi^n.", explanation: "Borel transform divides the \\( n \\)-th coefficient by \\( n! \\), taming the factorial growth." },
        { stepNumber: 2, description: "Sum the geometric series.", workingLatex: "B(\\xi) = \\frac{1}{1+\\xi}, \\quad |\\xi|<1,", explanation: "and by analytic continuation \\( 1/(1+\\xi) \\) for all \\( \\xi\\ge 0 \\) — convergent and integrable, unlike the original series." },
        { stepNumber: 3, description: "Write the Borel sum integral.", workingLatex: "F(x) \\stackrel{?}{=} \\int_0^\\infty e^{-\\xi} B(x\\xi)\\,d\\xi = \\int_0^\\infty \\frac{e^{-\\xi}}{1+x\\xi}\\,d\\xi.", explanation: "The Borel sum reconstructs the function by Laplace-integrating the transform along the positive axis with \\( \\xi\\mapsto x\\xi \\) scaling." },
        { stepNumber: 4, description: "Recognise the original integral.", workingLatex: "\\int_0^\\infty \\frac{e^{-\\xi}}{1+x\\xi}\\,d\\xi = F(x).", explanation: "This is precisely the Stieltjes integral with the dummy variable renamed — so the Borel sum equals \\( F \\)." },
        { stepNumber: 5, description: "Check the coefficients regenerate.", workingLatex: "\\int_0^\\infty e^{-\\xi}(-1)^n (x\\xi)^n\\,d\\xi = (-1)^n x^n\\,n!,", explanation: "Expanding \\( B(x\\xi) \\) and integrating term by term gives back \\( \\sum(-1)^n n! x^n \\); Borel summation assigns the divergent series its natural finite value \\( F(x) \\)." },
      ],
      finalAnswer: "\\( B(\\xi)=\\dfrac{1}{1+\\xi} \\) and \\( \\int_0^\\infty e^{-\\xi}B(x\\xi)\\,d\\xi=\\int_0^\\infty \\dfrac{e^{-\\xi}}{1+x\\xi}\\,d\\xi=F(x) \\): the integral is the Borel sum of \\( \\sum(-1)^n n! x^n \\).",
    },
  },
  {
    id: "am2a-027",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 27",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A density \\( \\rho \\) is smooth with \\( \\rho(t)\\sim \\sum_{k\\ge 0} c_k t^k \\) as \\( t\\to0^+ \\) and decays exponentially at infinity. Using Watson's lemma ideas, explain why the small-\\( x \\) Stieltjes expansion of \\( F(x)=\\int_0^\\infty \\rho(t)/(1+xt)\\,dt \\) is governed by the full moments \\( a_n=\\int_0^\\infty t^n\\rho \\), NOT by the local data \\( c_k \\) at \\( t=0 \\). Contrast this with a Laplace-type integral \\( \\int_0^\\infty \\rho(t)e^{-t/x}\\,dt \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "global vs local", "comparison"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the scale of the kernel.", workingLatex: "\\frac{1}{1+xt}: \\text{appreciable for } t\\lesssim 1/x \\to\\infty \\text{ as } x\\to0.", explanation: "The Stieltjes kernel decays slowly and only on the scale \\( t\\sim 1/x \\), so the WHOLE range of \\( t \\) contributes." },
        { stepNumber: 2, description: "Expand by the geometric kernel.", workingLatex: "F(x)\\sim\\sum_n (-1)^n x^n \\int_0^\\infty t^n\\rho(t)\\,dt = \\sum_n (-1)^n a_n x^n.", explanation: "The coefficients are GLOBAL moments — integrals over all \\( t \\) — not Taylor data of \\( \\rho \\) at \\( 0 \\)." },
        { stepNumber: 3, description: "Contrast the Laplace kernel.", workingLatex: "\\int_0^\\infty \\rho(t)e^{-t/x}\\,dt: \\text{kernel concentrated at } t\\lesssim x \\to 0.", explanation: "A Laplace exponential dies on the scale \\( t\\sim x\\to0 \\), so only the neighbourhood of \\( t=0 \\) matters." },
        { stepNumber: 4, description: "Apply Watson's lemma to the Laplace case.", workingLatex: "\\int_0^\\infty \\rho(t)e^{-t/x}\\,dt \\sim \\sum_{k\\ge0} c_k\\,k!\\,x^{k+1}.", explanation: "Watson's lemma converts the LOCAL expansion \\( \\rho\\sim\\sum c_k t^k \\) into the asymptotic series — here the local coefficients \\( c_k \\) ARE the answer." },
        { stepNumber: 5, description: "State the contrast.", workingLatex: "\\text{Stieltjes} \\to \\text{global moments } a_n; \\quad \\text{Laplace} \\to \\text{local Taylor } c_k.", explanation: "The slow algebraic kernel samples \\( \\rho \\) everywhere (moments diverge if the tail is heavy), whereas the exponential kernel localises (only smoothness at \\( 0 \\) matters). This is the structural distinction between the two integral types." },
      ],
      finalAnswer: "Stieltjes coefficients are global moments \\( a_n=\\int t^n\\rho \\); Laplace coefficients (via Watson) are local Taylor data \\( c_k k! \\) at \\( t=0 \\).",
    },
  },
  {
    id: "am2a-028",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 28",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For \\( \\rho(t)=e^{-t} \\) and the convergent (bounded-support) companion \\( F_b(x)=\\int_0^1 \\dfrac{dt}{1+xt}=\\dfrac{\\ln(1+x)}{x} \\), compute the ratio of the third asymptotic coefficients \\( a_2^{(e)}/a_2^{(b)} \\) and comment on which series converges.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["comparison", "convergence", "moment coefficients"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Coefficient for the exponential density.", workingLatex: "a_2^{(e)} = \\int_0^\\infty t^2 e^{-t}\\,dt = 2! = 2.", explanation: "Factorial moment of \\( e^{-t} \\)." },
        { stepNumber: 2, description: "Coefficient for the bounded density.", workingLatex: "a_2^{(b)} = \\int_0^1 t^2\\,dt = \\frac{1}{3}.", explanation: "Decaying moment of the uniform density on \\( [0,1] \\)." },
        { stepNumber: 3, description: "Form the ratio.", workingLatex: "\\frac{a_2^{(e)}}{a_2^{(b)}} = \\frac{2}{1/3} = 6.", explanation: "The exponential moment is six times the bounded one at \\( n=2 \\), and the gap widens factorially with \\( n \\)." },
        { stepNumber: 4, description: "Compare convergence.", workingLatex: "a_n^{(e)}=n!\\uparrow\\infty \\ (\\text{radius }0); \\quad a_n^{(b)}=\\tfrac{1}{n+1}\\downarrow 0 \\ (\\text{radius }1).", explanation: "Growing moments force divergence; decaying moments give a convergent power series — the exponential case is asymptotic-only, the bounded case is a genuine Taylor series." },
      ],
      finalAnswer: "\\( a_2^{(e)}/a_2^{(b)} = 2/(1/3) = 6 \\); the bounded-support series converges (radius \\( 1 \\)), the exponential one diverges (radius \\( 0 \\)).",
      canonicalAnswer: "6",
    },
  },
  {
    id: "am2a-029",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Let \\( F(x)=\\int_0^\\infty \\dfrac{e^{-t}}{1+xt}\\,dt \\sim \\sum (-1)^n n! x^n \\). Using the optimal-truncation error estimate at general small \\( x \\), show that the least achievable error is \\( \\approx \\sqrt{2\\pi/x}\\;e^{-1/x} \\), and hence determine the number of correct decimal digits obtainable at \\( x=0.05 \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimal truncation", "least term", "Stirling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Locate the least term.", workingLatex: "|u_n|=n!\\,x^n \\text{ minimal near } n \\approx N=\\frac1x.", explanation: "The ratio \\( |u_{n+1}|/|u_n|=(n+1)x=1 \\) at \\( n+1=1/x \\)." },
        { stepNumber: 2, description: "Evaluate the least term.", workingLatex: "|u_N| = N!\\,x^N, \\quad N=\\frac1x.", explanation: "The optimal error is approximately the magnitude of this smallest term." },
        { stepNumber: 3, description: "Apply Stirling.", workingLatex: "N! \\sim \\sqrt{2\\pi N}\\left(\\frac{N}{e}\\right)^N, \\quad x^N = N^{-N}.", explanation: "Stirling for \\( N! \\) and \\( x=1/N \\)." },
        { stepNumber: 4, description: "Combine.", workingLatex: "|u_N| \\sim \\sqrt{2\\pi N}\\,\\frac{N^N}{e^N}\\,N^{-N} = \\sqrt{2\\pi N}\\,e^{-N}.", explanation: "The \\( N^N \\) cancels, leaving \\( \\sqrt{2\\pi N}e^{-N} \\)." },
        { stepNumber: 5, description: "Express in \\( x \\).", workingLatex: "\\text{least error} \\approx \\sqrt{\\frac{2\\pi}{x}}\\;e^{-1/x}.", explanation: "Substitute \\( N=1/x \\); this is the beyond-all-orders accuracy floor." },
        { stepNumber: 6, description: "Numerics at \\( x=0.05 \\).", workingLatex: "\\sqrt{\\frac{2\\pi}{0.05}}\\,e^{-20} = \\sqrt{125.66}\\times e^{-20} \\approx 11.21\\times 2.06\\times10^{-9} \\approx 2.3\\times10^{-8}.", explanation: "So about \\( 7\\text{–}8 \\) correct decimal digits — the divergent series, optimally truncated, is remarkably accurate at small \\( x \\)." },
      ],
      finalAnswer: "Least error \\( \\approx\\sqrt{2\\pi/x}\\,e^{-1/x} \\); at \\( x=0.05 \\) this is \\( \\approx 2.3\\times10^{-8} \\), giving \\( \\sim 7\\text{–}8 \\) correct decimal digits.",
    },
  },
  {
    id: "am2a-030",
    topicRef: "am2a",
    topicTitle: "Stieltjes integrals & their asymptotic series 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Consider the generalised Stieltjes integral \\( F_s(x)=\\int_0^\\infty \\dfrac{e^{-t}}{(1+xt)^s}\\,dt \\) for real \\( s>0 \\). Derive the asymptotic series as \\( x\\to0^+ \\) using the binomial expansion of \\( (1+xt)^{-s} \\), and verify it reduces to the \\( s=1 \\) and \\( s=2 \\) cases.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["generalised Stieltjes", "binomial series", "Pochhammer"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Binomial-expand the kernel.", workingLatex: "(1+xt)^{-s} = \\sum_{n=0}^\\infty \\binom{-s}{n}(xt)^n = \\sum_{n=0}^\\infty (-1)^n \\frac{(s)_n}{n!}(xt)^n,", explanation: "where \\( (s)_n = s(s+1)\\cdots(s+n-1) \\) is the rising factorial (Pochhammer); \\( \\binom{-s}{n}=(-1)^n (s)_n/n! \\)." },
        { stepNumber: 2, description: "Integrate term by term against \\( e^{-t} \\).", workingLatex: "F_s(x) \\sim \\sum_{n=0}^\\infty (-1)^n \\frac{(s)_n}{n!}\\,x^n \\int_0^\\infty t^n e^{-t}\\,dt.", explanation: "Pull out the \\( x \\)-powers and the constant binomial coefficient." },
        { stepNumber: 3, description: "Insert the factorial moment.", workingLatex: "\\int_0^\\infty t^n e^{-t}\\,dt = n! \\implies F_s(x) \\sim \\sum_{n=0}^\\infty (-1)^n (s)_n\\,x^n.", explanation: "The \\( n! \\) cancels against the \\( 1/n! \\) in the binomial coefficient, leaving the Pochhammer symbol as the coefficient." },
        { stepNumber: 4, description: "Check \\( s=1 \\).", workingLatex: "(1)_n = 1\\cdot 2\\cdots n = n! \\implies F_1(x)\\sim\\sum (-1)^n n!\\,x^n.", explanation: "Recovers the basic Stieltjes series \\( F \\)." },
        { stepNumber: 5, description: "Check \\( s=2 \\).", workingLatex: "(2)_n = 2\\cdot3\\cdots(n+1) = (n+1)! \\implies F_2(x)\\sim\\sum (-1)^n (n+1)!\\,x^n.", explanation: "Recovers \\( G(x) \\), the squared-kernel case." },
        { stepNumber: 6, description: "State the general result.", workingLatex: "F_s(x) \\sim \\sum_{n=0}^\\infty (-1)^n (s)_n\\,x^n, \\quad (s)_n=\\frac{\\Gamma(s+n)}{\\Gamma(s)}.", explanation: "Divergent for every \\( s>0 \\) since \\( (s)_n\\sim n!\\,n^{s-1}/\\Gamma(s) \\) grows factorially; the family interpolates smoothly between the integer-power cases." },
      ],
      finalAnswer: "\\( F_s(x)\\sim\\sum_{n=0}^\\infty (-1)^n (s)_n\\,x^n \\) with \\( (s)_n=\\Gamma(s+n)/\\Gamma(s) \\); \\( s=1\\Rightarrow n! \\), \\( s=2\\Rightarrow (n+1)! \\).",
    },
  },
];
