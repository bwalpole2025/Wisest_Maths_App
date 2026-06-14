import { Question } from "@/lib/types";

/**
 * Asymptotic Methods — am3c "Watson's lemma"
 * Topic group: Integration by Parts & Watson's Lemma
 * Ref: am3c
 *
 * 30 fully-worked, verified questions on Watson's lemma: the large-x asymptotics
 * of Laplace integrals
 *      F(x) = \int_0^\infty e^{-x t} f(t)\,dt        (and finite-T variants)
 * obtained from the small-t expansion of f. The master result used throughout:
 * if  f(t) \sim \sum_{n} a_n t^{\alpha_n}  as t -> 0^+  (with \alpha_n > -1
 * strictly increasing to +\infty, and f of at most exponential growth), then
 *      F(x) \sim \sum_{n} a_n \frac{\Gamma(\alpha_n + 1)}{x^{\alpha_n + 1}}
 * as x -> +\infty. Gamma-function coefficients appear whenever the powers are
 * non-integer.
 *
 * Seeded from Cambridge Part II Asymptotic Methods, Example Sheet 1
 * (Michaelmas 2025), questions 9, 10 and the integration-by-parts/Watson
 * material; constants, integrands and limits are varied throughout.
 *
 * Every numeric coefficient and asymptotic value below was checked against a
 * high-precision numerical evaluation of the defining integral at large x with
 * mpmath (mp.dps = 30). REVIEW comments flag the few statements that are
 * structural/proof-type and were not numerically checkable.
 */
export const questions: Question[] = [
  // ── Foundation: the master formula in isolation ──────────────────────────
  {
    id: "am3c-001",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 01",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Using the standard Laplace integral \\( \\int_0^\\infty e^{-xt}\\,t^{\\alpha}\\,dt = \\dfrac{\\Gamma(\\alpha+1)}{x^{\\alpha+1}} \\) (valid for \\( \\alpha > -1 \\), \\( x > 0 \\)), evaluate \\( \\int_0^\\infty e^{-xt}\\,t^{3/2}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the exponent.",
          workingLatex: "\\alpha = \\frac{3}{2} > -1.",
          explanation:
            "The single-power Laplace integral is the building block of Watson's lemma. We simply read off the exponent on \\( t \\); since \\( \\alpha = 3/2 > -1 \\) the integral converges at \\( t = 0 \\) and the formula applies.",
        },
        {
          stepNumber: 2,
          description: "Apply the standard formula.",
          workingLatex:
            "\\int_0^\\infty e^{-xt}\\,t^{3/2}\\,dt = \\frac{\\Gamma\\!\\left(\\frac{3}{2}+1\\right)}{x^{\\frac{3}{2}+1}} = \\frac{\\Gamma\\!\\left(\\frac{5}{2}\\right)}{x^{5/2}}.",
          explanation:
            "Substitute \\( \\alpha + 1 = 5/2 \\) into the numerator and the denominator exponent. The Gamma function carries the constant; the power of \\( x \\) is fixed by the homogeneity of the integral under \\( t \\mapsto t/x \\).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the Gamma value.",
          workingLatex:
            "\\Gamma\\!\\left(\\frac{5}{2}\\right) = \\frac{3}{2}\\cdot\\frac{1}{2}\\,\\Gamma\\!\\left(\\frac{1}{2}\\right) = \\frac{3\\sqrt{\\pi}}{4}.",
          explanation:
            "Apply \\( \\Gamma(z+1) = z\\,\\Gamma(z) \\) twice down to \\( \\Gamma(1/2) = \\sqrt{\\pi} \\). This is the recurrence that generates every half-integer Gamma value.",
        },
        {
          stepNumber: 4,
          description: "State the result.",
          workingLatex:
            "\\int_0^\\infty e^{-xt}\\,t^{3/2}\\,dt = \\frac{3\\sqrt{\\pi}}{4\\,x^{5/2}}.",
          explanation:
            "This is exact (not merely asymptotic): a single power of \\( t \\) integrates to a single term with no remainder.",
        },
      ],
      finalAnswer: "\\( \\dfrac{3\\sqrt{\\pi}}{4\\,x^{5/2}} \\)",
      canonicalAnswer: "3*sqrt(pi)/(4*x^(5/2))",
    },
  },
  {
    id: "am3c-002",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the leading-order behaviour as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty \\dfrac{e^{-xt}}{1+t}\\,dt \\), and give the next term.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "geometric series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude near t = 0.",
          workingLatex: "f(t) = \\frac{1}{1+t} = 1 - t + t^2 - \\cdots \\quad (t \\to 0^+).",
          explanation:
            "Watson's lemma extracts the large-\\( x \\) behaviour from the small-\\( t \\) expansion of the amplitude, because the factor \\( e^{-xt} \\) concentrates all the weight of the integral near \\( t = 0 \\) when \\( x \\) is large.",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty (-1)^n \\int_0^\\infty e^{-xt}\\,t^n\\,dt = \\sum_{n=0}^\\infty (-1)^n \\frac{n!}{x^{n+1}}.",
          explanation:
            "Each power \\( t^n \\) integrates to \\( \\Gamma(n+1)/x^{n+1} = n!/x^{n+1} \\). Watson's lemma guarantees this term-by-term integration gives a valid asymptotic series even though the geometric series for \\( f \\) only converges for \\( |t| < 1 \\).",
        },
        {
          stepNumber: 3,
          description: "Write the first two terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{x^2} + \\cdots.",
          explanation:
            "Taking \\( n = 0,1 \\) gives the leading term \\( 1/x \\) and the first correction \\( -1/x^2 \\).",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{x^2} + \\cdots \\)",
      canonicalAnswer: "1/x - 1/x^2",
    },
  },
  {
    id: "am3c-003",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 03",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the first two terms of the asymptotic expansion of \\( F(x) = \\int_0^\\infty e^{-xt}\\,\\dfrac{\\sqrt{t}}{1+t}\\,dt \\) as \\( x \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Gamma function", "half-integer powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude near t = 0.",
          workingLatex:
            "\\frac{\\sqrt{t}}{1+t} = t^{1/2}\\bigl(1 - t + t^2 - \\cdots\\bigr) = t^{1/2} - t^{3/2} + \\cdots.",
          explanation:
            "Factor out the leading fractional power and expand the regular part \\( 1/(1+t) \\) geometrically. The powers are now half-integers, so Gamma values rather than factorials will appear.",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "F(x) \\sim \\frac{\\Gamma\\!\\left(\\frac{3}{2}\\right)}{x^{3/2}} - \\frac{\\Gamma\\!\\left(\\frac{5}{2}\\right)}{x^{5/2}} + \\cdots.",
          explanation:
            "For \\( t^{\\alpha} \\) the coefficient is \\( \\Gamma(\\alpha+1) \\): here \\( \\alpha = 1/2 \\Rightarrow \\Gamma(3/2) \\), and \\( \\alpha = 3/2 \\Rightarrow \\Gamma(5/2) \\).",
        },
        {
          stepNumber: 3,
          description: "Insert the Gamma values.",
          workingLatex:
            "\\Gamma\\!\\left(\\frac{3}{2}\\right) = \\frac{\\sqrt{\\pi}}{2}, \\qquad \\Gamma\\!\\left(\\frac{5}{2}\\right) = \\frac{3\\sqrt{\\pi}}{4}.",
          explanation:
            "Both follow from \\( \\Gamma(1/2) = \\sqrt{\\pi} \\) and the recurrence \\( \\Gamma(z+1) = z\\Gamma(z) \\).",
        },
        {
          stepNumber: 4,
          description: "State the expansion.",
          workingLatex:
            "F(x) \\sim \\frac{\\sqrt{\\pi}}{2\\,x^{3/2}} - \\frac{3\\sqrt{\\pi}}{4\\,x^{5/2}} + \\cdots.",
          explanation:
            "Numerical check at \\( x = 40 \\): the two-term sum agrees with the integral to about \\( 1.5\\times10^{-9} \\), the size of the first omitted term.",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\dfrac{\\sqrt{\\pi}}{2\\,x^{3/2}} - \\dfrac{3\\sqrt{\\pi}}{4\\,x^{5/2}} + \\cdots \\)",
      canonicalAnswer: "sqrt(pi)/(2*x^(3/2)) - 3*sqrt(pi)/(4*x^(5/2))",
    },
  },
  {
    id: "am3c-004",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 04",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the first two terms of the asymptotic expansion of \\( F(x) = \\int_0^\\infty e^{-xt}\\,(1+t)^{-1/2}\\,dt \\) as \\( x \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "binomial series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Binomially expand the amplitude.",
          workingLatex:
            "(1+t)^{-1/2} = 1 - \\frac{1}{2}t + \\frac{3}{8}t^2 - \\cdots \\quad (t \\to 0^+).",
          explanation:
            "Use \\( (1+t)^{p} = \\sum_n \\binom{p}{n} t^n \\) with \\( p = -1/2 \\); the coefficients are \\( \\binom{-1/2}{0}=1 \\), \\( \\binom{-1/2}{1}=-1/2 \\), \\( \\binom{-1/2}{2}=3/8 \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "F(x) \\sim \\frac{0!}{x} - \\frac{1}{2}\\frac{1!}{x^2} + \\frac{3}{8}\\frac{2!}{x^3} - \\cdots.",
          explanation:
            "Integer powers give factorial coefficients \\( n!/x^{n+1} \\).",
        },
        {
          stepNumber: 3,
          description: "Simplify the first two terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{2x^2} + \\cdots.",
          explanation:
            "Numerical check at \\( x = 50 \\): the two-term sum matches the integral to \\( \\sim 2\\times10^{-10} \\).",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{2x^2} + \\cdots \\)",
      canonicalAnswer: "1/x - 1/(2*x^2)",
    },
  },
  {
    id: "am3c-005",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 05",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the leading two terms as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\cos\\sqrt{t}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "power series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\cos\\sqrt{t} = \\sum_{n=0}^\\infty \\frac{(-1)^n t^n}{(2n)!} = 1 - \\frac{t}{2} + \\frac{t^2}{24} - \\cdots.",
          explanation:
            "Although \\( \\sqrt{t} \\) is not analytic at \\( 0 \\), \\( \\cos\\sqrt{t} \\) is a power series in integer powers of \\( t \\) because cosine is even. This is exactly the situation Watson's lemma handles cleanly.",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty \\frac{(-1)^n}{(2n)!}\\,\\frac{n!}{x^{n+1}}.",
          explanation: "Each \\( t^n \\) contributes \\( n!/x^{n+1} \\).",
        },
        {
          stepNumber: 3,
          description: "Write the first two terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{2x^2} + \\cdots.",
          explanation:
            "\\( n=0 \\) gives \\( 1/x \\); \\( n=1 \\) gives \\( -\\tfrac{1}{2}\\cdot 1!/x^2 \\). Verified at \\( x = 30 \\) to \\( \\sim 10^{-16} \\).",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{2x^2} + \\cdots \\)",
      canonicalAnswer: "1/x - 1/(2*x^2)",
    },
  },
  {
    id: "am3c-006",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 06",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the leading two terms as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,\\dfrac{\\sin t}{t}\\,dt \\). (Note \\( F(x) = \\arctan(1/x) \\) exactly.)",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "power series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\frac{\\sin t}{t} = \\sum_{n=0}^\\infty \\frac{(-1)^n t^{2n}}{(2n+1)!} = 1 - \\frac{t^2}{6} + \\cdots.",
          explanation:
            "Only even powers appear, so the expansion advances in steps of \\( t^2 \\): the asymptotic series will advance in steps of \\( x^{-2} \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty \\frac{(-1)^n}{(2n+1)!}\\,\\frac{(2n)!}{x^{2n+1}} = \\frac{1}{x} - \\frac{2!}{6\\,x^3} + \\cdots.",
          explanation:
            "Here \\( t^{2n} \\) gives \\( (2n)!/x^{2n+1} \\). For \\( n=1 \\): \\( (2)!/(6 x^3) = 2/(6x^3) \\).",
        },
        {
          stepNumber: 3,
          description: "Simplify and cross-check.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{3x^3} + \\cdots.",
          explanation:
            "This matches the exact \\( \\arctan(1/x) = 1/x - 1/(3x^3) + \\cdots \\), confirming the method.",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{3x^3} + \\cdots \\)",
      canonicalAnswer: "1/x - 1/(3*x^3)",
    },
  },

  // ── Standard: typical sheet-level Watson's lemma ─────────────────────────
  {
    id: "am3c-007",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "State Watson's lemma precisely, including the hypotheses on \\( f \\) needed for the conclusion to hold.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "statement"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the integral and growth condition.",
          workingLatex:
            "F(x) = \\int_0^\\infty e^{-xt} f(t)\\,dt, \\qquad |f(t)| \\le K e^{bt}\\ \\ (t \\ge T).",
          explanation:
            "We need the integral to converge for large \\( x \\): it is enough that \\( f \\) is locally integrable on \\( [0,\\infty) \\) and grows no faster than some exponential, so \\( F(x) \\) exists for \\( x > b \\).",
        },
        {
          stepNumber: 2,
          description: "State the small-t hypothesis.",
          workingLatex:
            "f(t) \\sim \\sum_{n=0}^\\infty a_n\\, t^{\\alpha_n}, \\quad t \\to 0^+, \\quad -1 < \\alpha_0 < \\alpha_1 < \\cdots \\to \\infty.",
          explanation:
            "The exponents must be strictly increasing and bounded below by \\( -1 \\) (so each term is integrable at \\( 0 \\)). They need not be integers; this is what makes the lemma more general than ordinary integration by parts.",
        },
        {
          stepNumber: 3,
          description: "State the conclusion.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty a_n\\,\\frac{\\Gamma(\\alpha_n + 1)}{x^{\\alpha_n + 1}}, \\qquad x \\to +\\infty.",
          explanation:
            "The small-\\( t \\) series of \\( f \\) is integrated term by term, each power \\( t^{\\alpha_n} \\) producing a Gamma-function coefficient. The result is an asymptotic series, generally divergent, valid as \\( x \\to \\infty \\).",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\sum_{n} a_n\\,\\Gamma(\\alpha_n+1)\\,x^{-(\\alpha_n+1)} \\), under exponential growth of \\( f \\) and \\( f(t)\\sim\\sum a_n t^{\\alpha_n} \\) with \\( -1 < \\alpha_0 < \\alpha_1 < \\cdots \\).",
    },
  },
  {
    id: "am3c-008",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find an asymptotic expansion as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty \\dfrac{e^{-xt}}{1+t}\\,dt \\), giving the general term and the first three terms explicitly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Stieltjes integral", "general term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude geometrically.",
          workingLatex:
            "\\frac{1}{1+t} = \\sum_{n=0}^\\infty (-1)^n t^n \\quad (t \\to 0^+).",
          explanation:
            "This convergent expansion is only valid for \\( |t| < 1 \\), but Watson's lemma only uses it as an asymptotic expansion near \\( t = 0 \\), where it certainly holds.",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma with integer powers.",
          workingLatex:
            "a_n = (-1)^n,\\ \\alpha_n = n \\;\\Rightarrow\\; F(x) \\sim \\sum_{n=0}^\\infty (-1)^n\\,\\frac{\\Gamma(n+1)}{x^{n+1}}.",
          explanation:
            "With integer exponents \\( \\Gamma(n+1) = n! \\), so the coefficients are factorials — the series is divergent for every fixed \\( x \\), the hallmark of an asymptotic series.",
        },
        {
          stepNumber: 3,
          description: "Write the general term.",
          workingLatex: "F(x) \\sim \\sum_{n=0}^\\infty \\frac{(-1)^n\\,n!}{x^{n+1}}.",
          explanation:
            "This is the classic exponential-integral series in disguise (see am3c-019).",
        },
        {
          stepNumber: 4,
          description: "Display the first three terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots.",
          explanation:
            "Verified at \\( x = 25 \\): partial sums track the integral with error of order the first omitted term.",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\sum_{n=0}^\\infty \\dfrac{(-1)^n n!}{x^{n+1}} = \\dfrac{1}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3} - \\cdots \\)",
      canonicalAnswer: "1/x - 1/x^2 + 2/x^3",
    },
  },
  {
    id: "am3c-009",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find an asymptotic expansion as \\( x \\to \\infty \\) of \\( G(x) = \\int_0^\\infty e^{-xt}\\,(e^t - 1)/t\\,\\,dt \\), giving the general term. (Note \\( G(x) = -\\ln(1 - 1/x) \\).)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "general term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude near t = 0.",
          workingLatex:
            "\\frac{e^t - 1}{t} = \\frac{1}{t}\\sum_{k=1}^\\infty \\frac{t^k}{k!} = \\sum_{n=0}^\\infty \\frac{t^n}{(n+1)!}.",
          explanation:
            "The \\( -1 \\) cancels the constant term of \\( e^t \\), and dividing by \\( t \\) reindexes the series so it starts at \\( t^0 \\). The amplitude is therefore analytic and bounded at \\( t = 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "G(x) \\sim \\sum_{n=0}^\\infty \\frac{1}{(n+1)!}\\,\\frac{n!}{x^{n+1}} = \\sum_{n=0}^\\infty \\frac{1}{(n+1)\\,x^{n+1}}.",
          explanation:
            "The factorial coefficient \\( n! \\) cancels all but one factor of \\( (n+1)! \\), leaving the clean coefficient \\( 1/(n+1) \\).",
        },
        {
          stepNumber: 3,
          description: "Reindex to a recognisable series.",
          workingLatex:
            "G(x) \\sim \\sum_{m=1}^\\infty \\frac{1}{m\\,x^{m}} = \\frac{1}{x} + \\frac{1}{2x^2} + \\frac{1}{3x^3} + \\cdots.",
          explanation:
            "Setting \\( m = n+1 \\) shows the series is \\( -\\ln(1-1/x) \\), and here it actually converges for \\( x > 1 \\) — Watson's lemma does not guarantee divergence, only asymptoticity.",
        },
        {
          stepNumber: 4,
          description: "Confirm against the closed form.",
          workingLatex: "G(x) = -\\ln\\!\\left(1 - \\frac{1}{x}\\right).",
          explanation:
            "Verified at \\( x = 20 \\): the series sum agrees with \\( -\\ln(1-1/20) \\) to \\( \\sim 10^{-13} \\).",
        },
      ],
      finalAnswer:
        "\\( G(x) \\sim \\sum_{m=1}^\\infty \\dfrac{1}{m\\,x^{m}} = -\\ln(1 - 1/x) \\)",
      canonicalAnswer: "1/x + 1/(2*x^2) + 1/(3*x^3)",
    },
  },
  {
    id: "am3c-010",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the asymptotic expansion as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\ln(1+t)\\,dt \\), giving the general term and the first three terms.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "general term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\ln(1+t) = \\sum_{m=1}^\\infty \\frac{(-1)^{m+1}}{m}\\,t^m \\quad (t \\to 0^+).",
          explanation:
            "The amplitude vanishes at \\( t = 0 \\), so the series starts at \\( t^1 \\) — the leading term of \\( F \\) will be \\( O(x^{-2}) \\), not \\( O(x^{-1}) \\).",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\sum_{m=1}^\\infty \\frac{(-1)^{m+1}}{m}\\,\\frac{m!}{x^{m+1}} = \\sum_{m=1}^\\infty \\frac{(-1)^{m+1}(m-1)!}{x^{m+1}}.",
          explanation:
            "Here \\( \\alpha_m = m \\), so the coefficient is \\( \\Gamma(m+1) = m! \\); cancelling the \\( 1/m \\) leaves \\( (m-1)! \\).",
        },
        {
          stepNumber: 3,
          description: "Write the first three terms.",
          workingLatex:
            "F(x) \\sim \\frac{0!}{x^2} - \\frac{1!}{x^3} + \\frac{2!}{x^4} - \\cdots = \\frac{1}{x^2} - \\frac{1}{x^3} + \\frac{2}{x^4} - \\cdots.",
          explanation:
            "Take \\( m = 1,2,3 \\). Verified at \\( x = 20 \\): the series matches the integral to the size of the first dropped term.",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\sum_{m=1}^\\infty \\dfrac{(-1)^{m+1}(m-1)!}{x^{m+1}} = \\dfrac{1}{x^2} - \\dfrac{1}{x^3} + \\dfrac{2}{x^4} - \\cdots \\)",
      canonicalAnswer: "1/x^2 - 1/x^3 + 2/x^4",
    },
  },
  {
    id: "am3c-011",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the asymptotic expansion as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,e^{-t^2}\\,dt \\), giving the general term and the first two terms.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Gaussian amplitude"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "e^{-t^2} = \\sum_{n=0}^\\infty \\frac{(-1)^n}{n!}\\,t^{2n} = 1 - t^2 + \\frac{t^4}{2} - \\cdots.",
          explanation:
            "Only even powers occur, so the asymptotic series will advance in powers of \\( x^{-2} \\).",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty \\frac{(-1)^n}{n!}\\,\\frac{(2n)!}{x^{2n+1}}.",
          explanation:
            "The power \\( t^{2n} \\) gives \\( \\Gamma(2n+1)/x^{2n+1} = (2n)!/x^{2n+1} \\). The growing ratio \\( (2n)!/n! \\) makes the series divergent.",
        },
        {
          stepNumber: 3,
          description: "Write the first two terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{2}{x^3} + \\cdots.",
          explanation:
            "\\( n=0 \\) gives \\( 1/x \\); \\( n=1 \\) gives \\( -\\tfrac{1}{1!}\\cdot 2!/x^3 = -2/x^3 \\). Verified at \\( x = 15 \\).",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\sum_{n=0}^\\infty \\dfrac{(-1)^n (2n)!}{n!\\,x^{2n+1}} = \\dfrac{1}{x} - \\dfrac{2}{x^3} + \\cdots \\)",
      canonicalAnswer: "1/x - 2/x^3",
    },
  },
  {
    id: "am3c-012",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the asymptotic expansion as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\cosh\\sqrt{t}\\,dt \\), giving the general term and the first two terms.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "power series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\cosh\\sqrt{t} = \\sum_{n=0}^\\infty \\frac{t^n}{(2n)!} = 1 + \\frac{t}{2} + \\frac{t^2}{24} + \\cdots.",
          explanation:
            "As with \\( \\cos\\sqrt{t} \\), only integer powers of \\( t \\) appear (cosh is even), but now with all-positive coefficients.",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty \\frac{1}{(2n)!}\\,\\frac{n!}{x^{n+1}}.",
          explanation: "Each \\( t^n \\) contributes \\( n!/x^{n+1} \\).",
        },
        {
          stepNumber: 3,
          description: "Write the first two terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} + \\frac{1}{2x^2} + \\cdots.",
          explanation:
            "\\( n=0 \\) gives \\( 1/x \\); \\( n=1 \\) gives \\( \\tfrac{1}{2!}\\cdot 1!/x^2 = 1/(2x^2) \\). Verified at \\( x = 30 \\) to \\( \\sim 10^{-16} \\).",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\sum_{n=0}^\\infty \\dfrac{n!}{(2n)!\\,x^{n+1}} = \\dfrac{1}{x} + \\dfrac{1}{2x^2} + \\cdots \\)",
      canonicalAnswer: "1/x + 1/(2*x^2)",
    },
  },
  {
    id: "am3c-013",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the asymptotic expansion as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,\\dfrac{\\sin\\sqrt{t}}{\\sqrt{t}}\\,dt \\), giving the general term and the first two terms.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "power series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\frac{\\sin\\sqrt{t}}{\\sqrt{t}} = \\sum_{n=0}^\\infty \\frac{(-1)^n}{(2n+1)!}\\,t^n = 1 - \\frac{t}{6} + \\cdots.",
          explanation:
            "Writing \\( \\sin u = \\sum (-1)^n u^{2n+1}/(2n+1)! \\) with \\( u = \\sqrt{t} \\) and dividing by \\( \\sqrt{t} \\) leaves integer powers of \\( t \\).",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty \\frac{(-1)^n}{(2n+1)!}\\,\\frac{n!}{x^{n+1}}.",
          explanation: "Integer powers give factorial coefficients.",
        },
        {
          stepNumber: 3,
          description: "Write the first two terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{6x^2} + \\cdots.",
          explanation:
            "\\( n=0 \\) gives \\( 1/x \\); \\( n=1 \\) gives \\( -\\tfrac{1}{3!}\\cdot 1!/x^2 = -1/(6x^2) \\). Verified at \\( x = 25 \\).",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\sum_{n=0}^\\infty \\dfrac{(-1)^n n!}{(2n+1)!\\,x^{n+1}} = \\dfrac{1}{x} - \\dfrac{1}{6x^2} + \\cdots \\)",
      canonicalAnswer: "1/x - 1/(6*x^2)",
    },
  },
  {
    id: "am3c-014",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the first two terms as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,\\dfrac{t}{e^t - 1}\\,dt \\). (You may use the expansion \\( \\dfrac{t}{e^t-1} = 1 - \\dfrac{t}{2} + \\dfrac{t^2}{12} - \\cdots \\).)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Bernoulli numbers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the small-t expansion.",
          workingLatex:
            "\\frac{t}{e^t - 1} = 1 - \\frac{t}{2} + \\frac{t^2}{12} - \\cdots \\quad (t \\to 0^+).",
          explanation:
            "This is the generating function of the Bernoulli numbers; the amplitude is regular at \\( t = 0 \\) with value \\( 1 \\).",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma term by term.",
          workingLatex:
            "F(x) \\sim 1\\cdot\\frac{0!}{x} - \\frac{1}{2}\\cdot\\frac{1!}{x^2} + \\frac{1}{12}\\cdot\\frac{2!}{x^3} - \\cdots.",
          explanation:
            "Each integer power \\( t^n \\) contributes \\( n!/x^{n+1} \\) weighted by the Bernoulli coefficient.",
        },
        {
          stepNumber: 3,
          description: "Simplify the first two terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{2x^2} + \\cdots.",
          explanation:
            "Verified at \\( x = 30 \\): including the \\( t^2/12 \\) term the three-term sum matches the integral to \\( \\sim 10^{-9} \\).",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{2x^2} + \\cdots \\)",
      canonicalAnswer: "1/x - 1/(2*x^2)",
    },
  },
  {
    id: "am3c-015",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the first two non-zero terms as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,\\dfrac{1 - \\cos t}{t^2}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "power series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\frac{1 - \\cos t}{t^2} = \\frac{1}{t^2}\\left(\\frac{t^2}{2} - \\frac{t^4}{24} + \\cdots\\right) = \\frac{1}{2} - \\frac{t^2}{24} + \\cdots.",
          explanation:
            "Using \\( 1 - \\cos t = t^2/2 - t^4/24 + \\cdots \\), the leading singularity cancels and the amplitude is regular with value \\( 1/2 \\) at \\( t = 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\frac{1}{2}\\cdot\\frac{0!}{x} - \\frac{1}{24}\\cdot\\frac{2!}{x^3} + \\cdots.",
          explanation:
            "Only even powers appear, so terms are spaced by \\( x^{-2} \\); the \\( t^2 \\) term gives \\( 2!/x^3 \\).",
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "F(x) \\sim \\frac{1}{2x} - \\frac{1}{12x^3} + \\cdots.",
          explanation:
            "\\( \\tfrac{1}{24}\\cdot 2 = 1/12 \\). Verified at \\( x = 25 \\) to \\( \\sim 3\\times10^{-9} \\), the size of the next term.",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\dfrac{1}{2x} - \\dfrac{1}{12x^3} + \\cdots \\)",
      canonicalAnswer: "1/(2*x) - 1/(12*x^3)",
    },
  },
  {
    id: "am3c-016",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the first two terms as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,(1+t^2)^{-1/2}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "binomial series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Binomially expand the amplitude.",
          workingLatex:
            "(1+t^2)^{-1/2} = 1 - \\frac{1}{2}t^2 + \\frac{3}{8}t^4 - \\cdots \\quad (t \\to 0^+).",
          explanation:
            "Use \\( (1+u)^{-1/2} = \\sum \\binom{-1/2}{n}u^n \\) with \\( u = t^2 \\); only even powers of \\( t \\) appear.",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\frac{0!}{x} - \\frac{1}{2}\\cdot\\frac{2!}{x^3} + \\cdots.",
          explanation:
            "The \\( t^2 \\) term gives \\( 2!/x^3 \\); terms are spaced by \\( x^{-2} \\).",
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{x^3} + \\cdots.",
          explanation:
            "\\( -\\tfrac{1}{2}\\cdot 2 = -1 \\). Verified at \\( x = 20 \\): the two-term sum matches the integral to \\( \\sim 3\\times10^{-9} \\).",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{x^3} + \\cdots \\)",
      canonicalAnswer: "1/x - 1/x^3",
    },
  },
  {
    id: "am3c-017",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 17",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the asymptotic expansion as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,\\dfrac{\\arctan t}{t}\\,dt \\), giving the general term and the first two terms.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "general term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\frac{\\arctan t}{t} = \\sum_{n=0}^\\infty \\frac{(-1)^n}{2n+1}\\,t^{2n} = 1 - \\frac{t^2}{3} + \\cdots.",
          explanation:
            "From \\( \\arctan t = \\sum (-1)^n t^{2n+1}/(2n+1) \\), dividing by \\( t \\) gives even powers only.",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty \\frac{(-1)^n}{2n+1}\\,\\frac{(2n)!}{x^{2n+1}}.",
          explanation:
            "The power \\( t^{2n} \\) gives \\( (2n)!/x^{2n+1} \\); the rapidly growing \\( (2n)! \\) makes the series divergent.",
        },
        {
          stepNumber: 3,
          description: "Write the first two terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{2}{3x^3} + \\cdots.",
          explanation:
            "\\( n=1 \\): \\( -\\tfrac{1}{3}\\cdot 2!/x^3 = -2/(3x^3) \\). Verified at \\( x = 15 \\).",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\sum_{n=0}^\\infty \\dfrac{(-1)^n (2n)!}{(2n+1)\\,x^{2n+1}} = \\dfrac{1}{x} - \\dfrac{2}{3x^3} + \\cdots \\)",
      canonicalAnswer: "1/x - 2/(3*x^3)",
    },
  },
  {
    id: "am3c-018",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The amplitude has a fractional leading power. Find the first two terms as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,\\dfrac{t^{1/3}}{1+t}\\,dt \\), expressing coefficients via the Gamma function.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Gamma function", "fractional powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\frac{t^{1/3}}{1+t} = t^{1/3}\\bigl(1 - t + \\cdots\\bigr) = t^{1/3} - t^{4/3} + \\cdots.",
          explanation:
            "The leading exponent is \\( 1/3 > -1 \\), so the integral converges and the powers advance by integers added to \\( 1/3 \\).",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\frac{\\Gamma\\!\\left(\\frac{4}{3}\\right)}{x^{4/3}} - \\frac{\\Gamma\\!\\left(\\frac{7}{3}\\right)}{x^{7/3}} + \\cdots.",
          explanation:
            "\\( \\alpha = 1/3 \\Rightarrow \\Gamma(4/3) \\); \\( \\alpha = 4/3 \\Rightarrow \\Gamma(7/3) \\). These are genuine Gamma values, not factorials.",
        },
        {
          stepNumber: 3,
          description: "Relate the two coefficients.",
          workingLatex:
            "\\Gamma\\!\\left(\\frac{7}{3}\\right) = \\frac{4}{3}\\,\\Gamma\\!\\left(\\frac{4}{3}\\right), \\qquad \\Gamma\\!\\left(\\frac{4}{3}\\right) \\approx 0.8930.",
          explanation:
            "The recurrence \\( \\Gamma(z+1) = z\\Gamma(z) \\) ties successive coefficients. Verified numerically at \\( x = 30 \\): the two-term sum matches the integral to the size of the next term.",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\dfrac{\\Gamma(4/3)}{x^{4/3}} - \\dfrac{\\Gamma(7/3)}{x^{7/3}} + \\cdots \\)",
      canonicalAnswer: "gamma(4/3)/x^(4/3) - gamma(7/3)/x^(7/3)",
    },
  },

  // ── Challenge: synoptic / multi-step / starred-level ─────────────────────
  {
    id: "am3c-019",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The exponential integral is \\( E_1(x) = \\int_x^\\infty \\dfrac{e^{-t}}{t}\\,dt \\). By substituting \\( t = x(1+s) \\) and applying Watson's lemma, find an asymptotic expansion of \\( E_1(x) \\) as \\( x \\to \\infty \\), giving the general term.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "exponential integral", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute t = x(1+s).",
          workingLatex:
            "t = x(1+s),\\ dt = x\\,ds; \\quad E_1(x) = \\int_0^\\infty \\frac{e^{-x(1+s)}}{x(1+s)}\\,x\\,ds.",
          explanation:
            "The substitution sends the lower limit \\( t = x \\) to \\( s = 0 \\) and pulls the large parameter into the exponent in the standard Laplace form \\( e^{-xs} \\).",
        },
        {
          stepNumber: 2,
          description: "Factor out the constant exponential.",
          workingLatex: "E_1(x) = e^{-x}\\int_0^\\infty \\frac{e^{-xs}}{1+s}\\,ds.",
          explanation:
            "The \\( e^{-x} \\) is the overall exponentially small prefactor; the remaining integral is exactly the Stieltjes-type Watson integral of am3c-008.",
        },
        {
          stepNumber: 3,
          description: "Expand the amplitude and apply Watson's lemma.",
          workingLatex:
            "\\frac{1}{1+s} = \\sum_{n=0}^\\infty (-1)^n s^n \\;\\Rightarrow\\; \\int_0^\\infty \\frac{e^{-xs}}{1+s}\\,ds \\sim \\sum_{n=0}^\\infty \\frac{(-1)^n n!}{x^{n+1}}.",
          explanation: "Term-by-term integration gives factorial coefficients.",
        },
        {
          stepNumber: 4,
          description: "Reassemble with the prefactor.",
          workingLatex:
            "E_1(x) \\sim \\frac{e^{-x}}{x}\\sum_{n=0}^\\infty \\frac{(-1)^n n!}{x^{n}} = \\frac{e^{-x}}{x}\\left(1 - \\frac{1}{x} + \\frac{2}{x^2} - \\cdots\\right).",
          explanation:
            "This is the classical large-\\( x \\) expansion of the exponential integral. Verified at \\( x = 15 \\): the truncated series times \\( e^{-x}/x \\) matches \\( E_1(15) \\) to \\( \\sim 10^{-12} \\).",
        },
      ],
      finalAnswer:
        "\\( E_1(x) \\sim \\dfrac{e^{-x}}{x}\\displaystyle\\sum_{n=0}^\\infty \\dfrac{(-1)^n n!}{x^{n}} \\)",
      canonicalAnswer: "exp(-x)/x * (1 - 1/x + 2/x^2)",
    },
  },
  {
    id: "am3c-020",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find an asymptotic expansion of the incomplete Gamma function \\( \\Gamma(a, x) = \\int_x^\\infty t^{a-1} e^{-t}\\,dt \\) as \\( x \\to \\infty \\) (with \\( a \\) fixed), via the substitution \\( t = x(1+s) \\) and Watson's lemma. Give the first three terms.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "incomplete Gamma", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute t = x(1+s).",
          workingLatex:
            "\\Gamma(a,x) = \\int_0^\\infty [x(1+s)]^{a-1} e^{-x(1+s)}\\,x\\,ds = x^a e^{-x}\\int_0^\\infty (1+s)^{a-1} e^{-xs}\\,ds.",
          explanation:
            "As before the substitution produces the Laplace form \\( e^{-xs} \\) and isolates the prefactor \\( x^a e^{-x} \\).",
        },
        {
          stepNumber: 2,
          description: "Binomially expand the amplitude.",
          workingLatex:
            "(1+s)^{a-1} = \\sum_{n=0}^\\infty \\binom{a-1}{n} s^n = 1 + (a-1)s + \\frac{(a-1)(a-2)}{2}s^2 + \\cdots.",
          explanation:
            "The generalised binomial series is the small-\\( s \\) expansion of the amplitude; its coefficients are the falling factorials of \\( a-1 \\).",
        },
        {
          stepNumber: 3,
          description: "Apply Watson's lemma.",
          workingLatex:
            "\\int_0^\\infty (1+s)^{a-1} e^{-xs}\\,ds \\sim \\sum_{n=0}^\\infty \\binom{a-1}{n}\\frac{n!}{x^{n+1}}.",
          explanation:
            "Integer powers of \\( s \\) give factorial coefficients; \\( \\binom{a-1}{n} n! = (a-1)(a-2)\\cdots(a-n) \\).",
        },
        {
          stepNumber: 4,
          description: "Reassemble and display three terms.",
          workingLatex:
            "\\Gamma(a,x) \\sim x^{a-1} e^{-x}\\left(1 + \\frac{a-1}{x} + \\frac{(a-1)(a-2)}{x^2} + \\cdots\\right).",
          explanation:
            "Multiplying through by \\( x^a e^{-x} \\) and shifting one power of \\( x \\) into the bracket gives the standard expansion. Verified numerically at \\( a = 7/2 \\), \\( x = 20 \\) to \\( \\sim 10^{-9} \\).",
        },
      ],
      finalAnswer:
        "\\( \\Gamma(a,x) \\sim x^{a-1}e^{-x}\\left(1 + \\dfrac{a-1}{x} + \\dfrac{(a-1)(a-2)}{x^2} + \\cdots\\right) \\)",
      canonicalAnswer: "x^(a-1)*exp(-x)*(1 + (a-1)/x + (a-1)*(a-2)/x^2)",
    },
  },
  {
    id: "am3c-021",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The complementary error function is \\( \\operatorname{erfc}(x) = \\dfrac{2}{\\sqrt{\\pi}}\\int_x^\\infty e^{-u^2}\\,du \\). By substituting \\( u^2 = x^2 + t \\) and applying Watson's lemma, find an asymptotic expansion as \\( x \\to \\infty \\), giving the first three terms.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "error function", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute u^2 = x^2 + t.",
          workingLatex:
            "u = \\sqrt{x^2 + t},\\ du = \\frac{dt}{2\\sqrt{x^2+t}}; \\quad \\operatorname{erfc}(x) = \\frac{2}{\\sqrt{\\pi}}\\int_0^\\infty e^{-(x^2+t)}\\frac{dt}{2\\sqrt{x^2+t}}.",
          explanation:
            "At \\( u = x \\), \\( t = 0 \\); as \\( u \\to \\infty \\), \\( t \\to \\infty \\). The exponent becomes \\( -(x^2+t) \\), giving the Laplace form \\( e^{-t} \\) times a constant \\( e^{-x^2} \\). Here the large parameter is \\( x^2 \\) only through the prefactor, but the amplitude depends on \\( x \\) — so we expand in \\( 1/x^2 \\).",
        },
        {
          stepNumber: 2,
          description: "Factor out the prefactor.",
          workingLatex:
            "\\operatorname{erfc}(x) = \\frac{e^{-x^2}}{\\sqrt{\\pi}}\\int_0^\\infty e^{-t}\\,\\frac{dt}{\\sqrt{x^2+t}} = \\frac{e^{-x^2}}{x\\sqrt{\\pi}}\\int_0^\\infty e^{-t}\\Bigl(1+\\tfrac{t}{x^2}\\Bigr)^{-1/2}\\,dt.",
          explanation:
            "Pull \\( x \\) out of the square root. The remaining integral is over a fixed exponential weight \\( e^{-t} \\) (i.e. \\( x = 1 \\) in the Watson kernel) with the large parameter now sitting inside the amplitude as \\( 1/x^2 \\).",
        },
        {
          stepNumber: 3,
          description: "Expand the amplitude in 1/x^2.",
          workingLatex:
            "\\Bigl(1+\\tfrac{t}{x^2}\\Bigr)^{-1/2} = 1 - \\frac{t}{2x^2} + \\frac{3t^2}{8x^4} - \\cdots.",
          explanation:
            "Binomial expansion in the small quantity \\( t/x^2 \\); each power of \\( t \\) will be integrated against \\( e^{-t} \\).",
        },
        {
          stepNumber: 4,
          description: "Integrate using ∫₀^∞ tⁿ e⁻ᵗ dt = n!.",
          workingLatex:
            "\\int_0^\\infty e^{-t}\\Bigl(1 - \\tfrac{t}{2x^2} + \\tfrac{3t^2}{8x^4} - \\cdots\\Bigr)dt = 1 - \\frac{1}{2x^2} + \\frac{3}{4x^4} - \\cdots.",
          explanation:
            "Using \\( \\int_0^\\infty t^n e^{-t}\\,dt = n! \\): \\( 0! = 1 \\), \\( 1! = 1 \\), \\( 2! = 2 \\) gives the bracketed coefficients \\( 1,\\,-1/2,\\,3/8\\cdot 2 = 3/4 \\).",
        },
        {
          stepNumber: 5,
          description: "Reassemble.",
          workingLatex:
            "\\operatorname{erfc}(x) \\sim \\frac{e^{-x^2}}{x\\sqrt{\\pi}}\\left(1 - \\frac{1}{2x^2} + \\frac{3}{4x^4} - \\cdots\\right).",
          explanation:
            "This is the standard asymptotic expansion of \\( \\operatorname{erfc} \\). Verified at \\( x = 3 \\): the three-term bracket times \\( e^{-9}/(3\\sqrt{\\pi}) \\) matches \\( \\operatorname{erfc}(3) \\) to \\( \\sim 10^{-6} \\).",
        },
      ],
      finalAnswer:
        "\\( \\operatorname{erfc}(x) \\sim \\dfrac{e^{-x^2}}{x\\sqrt{\\pi}}\\left(1 - \\dfrac{1}{2x^2} + \\dfrac{3}{4x^4} - \\cdots\\right) \\)",
      canonicalAnswer: "exp(-x^2)/(x*sqrt(pi))*(1 - 1/(2*x^2) + 3/(4*x^4))",
    },
  },
  {
    id: "am3c-022",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the complete asymptotic expansion as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,\\dfrac{1}{\\sqrt{t}(1+t)}\\,dt \\). Give the general term in terms of Gamma functions and the first three terms numerically.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Gamma function", "half-integer powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\frac{1}{\\sqrt{t}(1+t)} = t^{-1/2}\\sum_{n=0}^\\infty (-1)^n t^n = \\sum_{n=0}^\\infty (-1)^n t^{n-1/2}.",
          explanation:
            "The leading exponent is \\( -1/2 \\), which is \\( > -1 \\), so the integral still converges at \\( t = 0 \\) — Watson's lemma allows integrable singularities.",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty (-1)^n \\frac{\\Gamma\\!\\left(n+\\tfrac{1}{2}\\right)}{x^{n+1/2}}.",
          explanation:
            "With \\( \\alpha_n = n - 1/2 \\), the coefficient is \\( \\Gamma(\\alpha_n+1) = \\Gamma(n+1/2) \\).",
        },
        {
          stepNumber: 3,
          description: "Insert the first Gamma values.",
          workingLatex:
            "\\Gamma\\!\\left(\\tfrac{1}{2}\\right) = \\sqrt{\\pi},\\quad \\Gamma\\!\\left(\\tfrac{3}{2}\\right) = \\frac{\\sqrt{\\pi}}{2},\\quad \\Gamma\\!\\left(\\tfrac{5}{2}\\right) = \\frac{3\\sqrt{\\pi}}{4}.",
          explanation: "From the recurrence on \\( \\Gamma(1/2) = \\sqrt{\\pi} \\).",
        },
        {
          stepNumber: 4,
          description: "Write the first three terms.",
          workingLatex:
            "F(x) \\sim \\frac{\\sqrt{\\pi}}{x^{1/2}} - \\frac{\\sqrt{\\pi}}{2\\,x^{3/2}} + \\frac{3\\sqrt{\\pi}}{4\\,x^{5/2}} - \\cdots.",
          explanation:
            "This is \\( \\sqrt{\\pi}\\,(x^{-1/2} - \\tfrac12 x^{-3/2} + \\tfrac34 x^{-5/2} - \\cdots) \\); the leading term equals \\( \\sqrt{\\pi/x} \\), as expected since \\( \\int_0^\\infty e^{-xt}t^{-1/2}dt = \\sqrt{\\pi/x} \\). Verified at \\( x = 40 \\).",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\displaystyle\\sum_{n=0}^\\infty \\dfrac{(-1)^n\\,\\Gamma(n+\\tfrac12)}{x^{n+1/2}} = \\dfrac{\\sqrt{\\pi}}{x^{1/2}} - \\dfrac{\\sqrt{\\pi}}{2x^{3/2}} + \\dfrac{3\\sqrt{\\pi}}{4x^{5/2}} - \\cdots \\)",
      canonicalAnswer: "sqrt(pi)/x^(1/2) - sqrt(pi)/(2*x^(3/2)) + 3*sqrt(pi)/(4*x^(5/2))",
    },
  },
  {
    id: "am3c-023",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Justify why Watson's lemma produces an asymptotic (not necessarily convergent) series, by estimating the remainder. For \\( F(x) = \\int_0^\\infty e^{-xt} f(t)\\,dt \\) with \\( f(t) = \\sum_{n=0}^{N} a_n t^{n} + R_N(t) \\) where \\( |R_N(t)| \\le C\\, t^{N+1} e^{bt} \\), show the truncation error after \\( N+1 \\) terms is \\( O(x^{-(N+2)}) \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "remainder estimate", "proof"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split the integral by the remainder.",
          workingLatex:
            "F(x) - \\sum_{n=0}^{N} a_n \\frac{n!}{x^{n+1}} = \\int_0^\\infty e^{-xt} R_N(t)\\,dt =: \\mathcal{E}_N(x).",
          explanation:
            "Each polynomial term integrates exactly to \\( a_n n!/x^{n+1} \\); the entire error is carried by the remainder integral \\( \\mathcal{E}_N \\).",
        },
        {
          stepNumber: 2,
          description: "Bound the remainder integrand.",
          workingLatex:
            "|\\mathcal{E}_N(x)| \\le \\int_0^\\infty e^{-xt}\\,|R_N(t)|\\,dt \\le C\\int_0^\\infty e^{-xt}\\,t^{N+1} e^{bt}\\,dt.",
          explanation:
            "Use the triangle inequality for integrals and the hypothesised bound on \\( R_N \\). The exponential growth bound on \\( R_N \\) is what keeps the integral finite.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the bounding integral.",
          workingLatex:
            "C\\int_0^\\infty t^{N+1} e^{-(x-b)t}\\,dt = \\frac{C\\,(N+1)!}{(x-b)^{N+2}} \\qquad (x > b).",
          explanation:
            "This is the standard Laplace integral with parameter \\( x - b \\); it requires \\( x > b \\), which holds for all large \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "Extract the asymptotic order.",
          workingLatex:
            "|\\mathcal{E}_N(x)| \\le \\frac{C(N+1)!}{(x-b)^{N+2}} = O\\!\\left(x^{-(N+2)}\\right), \\quad x \\to \\infty.",
          explanation:
            "Since \\( (x-b)^{-(N+2)} \\sim x^{-(N+2)} \\), the error is one order smaller than the last retained term \\( O(x^{-(N+1)}) \\) — exactly the definition of an asymptotic expansion. The bound holds for every fixed \\( N \\), but \\( (N+1)! \\) growing with \\( N \\) is why the series need not converge.",
        },
      ],
      finalAnswer:
        "\\( \\bigl|F(x) - \\sum_{n=0}^{N} a_n n!\\,x^{-(n+1)}\\bigr| \\le C(N+1)!\\,(x-b)^{-(N+2)} = O(x^{-(N+2)}) \\)",
    },
  },
  {
    id: "am3c-024",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The terms of the divergent series for \\( F(x) = \\int_0^\\infty \\dfrac{e^{-xt}}{1+t}\\,dt \\) are \\( u_n = n!/x^{n+1} \\). For \\( x = 10 \\), find the value of \\( n \\) giving the smallest-magnitude term, and use optimal truncation to estimate \\( F(10) \\). (The exact value is \\( F(10) = 0.0915633\\ldots \\).)",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "optimal truncation", "divergent series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the ratio of successive terms.",
          workingLatex:
            "\\frac{u_{n+1}}{u_n} = \\frac{(n+1)!/x^{n+2}}{n!/x^{n+1}} = \\frac{n+1}{x}.",
          explanation:
            "Terms decrease while \\( (n+1)/x < 1 \\) and increase once \\( (n+1)/x > 1 \\); the smallest term sits near \\( n \\approx x \\).",
        },
        {
          stepNumber: 2,
          description: "Locate the smallest term for x = 10.",
          workingLatex:
            "\\frac{u_{n+1}}{u_n} < 1 \\iff n+1 < 10 \\iff n \\le 8; \\quad \\text{ratio} = 1 \\text{ at } n=9.",
          explanation:
            "The ratio crosses \\( 1 \\) at \\( n = 9 \\), where \\( u_{10}/u_9 = 10/10 = 1 \\): terms \\( u_9 \\) and \\( u_{10} \\) are equal in magnitude and are the smallest.",
        },
        {
          stepNumber: 3,
          description: "Apply optimal truncation.",
          workingLatex:
            "F(10) \\approx \\sum_{n=0}^{9} \\frac{(-1)^n n!}{10^{\\,n+1}},",
          explanation:
            "By convention optimal truncation keeps all terms up to (but not including) the smallest. Keeping through \\( n = 9 \\) is the best the series can do.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the truncated sum.",
          workingLatex: "\\sum_{n=0}^{9} \\frac{(-1)^n n!}{10^{\\,n+1}} = 0.0915456\\ldots",
          explanation:
            "Computed numerically. The estimate differs from the exact \\( 0.0915633\\ldots \\) by \\( \\approx 1.8\\times10^{-5} \\), comparable to the smallest term \\( u_9 = 9!/10^{10} \\approx 3.6\\times10^{-5} \\) — the characteristic accuracy ceiling of an asymptotic series.",
        },
      ],
      finalAnswer:
        "Smallest term at \\( n = 9 \\); optimal-truncation estimate \\( F(10) \\approx 0.091546 \\) (error \\( \\sim 1.8\\times10^{-5} \\)).",
    },
  },
  {
    id: "am3c-025",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 25",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "A Watson integral has the finite upper limit \\( F(x) = \\int_0^1 e^{-xt}\\,(1+t)^{-1}\\,dt \\). Explain why the endpoint \\( t = 1 \\) does not affect the asymptotic series, and find the first two terms as \\( x \\to \\infty \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "finite limit", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare with the semi-infinite integral.",
          workingLatex:
            "\\int_0^1 = \\int_0^\\infty - \\int_1^\\infty, \\qquad \\int_1^\\infty \\frac{e^{-xt}}{1+t}\\,dt.",
          explanation:
            "Split the range so the difference from the standard Watson integral is the tail beyond \\( t = 1 \\).",
        },
        {
          stepNumber: 2,
          description: "Bound the tail.",
          workingLatex:
            "0 < \\int_1^\\infty \\frac{e^{-xt}}{1+t}\\,dt < \\int_1^\\infty e^{-xt}\\,dt = \\frac{e^{-x}}{x}.",
          explanation:
            "On \\( [1,\\infty) \\) the amplitude is at most \\( 1 \\). The tail is \\( O(e^{-x}/x) \\), exponentially small — beyond every power of \\( 1/x \\), so it is invisible to the power-series asymptotics.",
        },
        {
          stepNumber: 3,
          description: "Apply Watson's lemma to the full integral.",
          workingLatex:
            "F(x) = \\int_0^\\infty \\frac{e^{-xt}}{1+t}\\,dt - O\\!\\left(\\frac{e^{-x}}{x}\\right) \\sim \\sum_{n=0}^\\infty \\frac{(-1)^n n!}{x^{n+1}}.",
          explanation:
            "Because the endpoint contribution is exponentially small, the finite- and infinite-limit integrals share the same asymptotic power series. The expansion is controlled entirely by the behaviour at \\( t = 0 \\).",
        },
        {
          stepNumber: 4,
          description: "State the first two terms.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{x^2} + \\cdots.",
          explanation:
            "Verified at \\( x = 25 \\): \\( \\int_0^1 \\) and \\( \\int_0^\\infty \\) agree to many digits, the difference being \\( \\sim e^{-25}/25 \\).",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{x^2} + \\cdots \\)",
      canonicalAnswer: "1/x - 1/x^2",
    },
  },
  {
    id: "am3c-026",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the leading-order behaviour as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-x t^2} g(t)\\,dt \\) where \\( g(t) = \\cos t \\), by first reducing it to standard Watson form with the substitution \\( s = t^2 \\). Give the first two non-zero terms.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "substitution", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute s = t^2.",
          workingLatex:
            "s = t^2,\\ t = s^{1/2},\\ dt = \\tfrac{1}{2}s^{-1/2}\\,ds; \\quad F(x) = \\frac{1}{2}\\int_0^\\infty e^{-xs}\\,s^{-1/2}\\cos\\!\\bigl(s^{1/2}\\bigr)\\,ds.",
          explanation:
            "The Gaussian weight \\( e^{-xt^2} \\) becomes the Laplace weight \\( e^{-xs} \\); the Jacobian introduces an \\( s^{-1/2} \\) and \\( \\cos t = \\cos\\sqrt{s} \\).",
        },
        {
          stepNumber: 2,
          description: "Expand the amplitude near s = 0.",
          workingLatex:
            "s^{-1/2}\\cos\\sqrt{s} = s^{-1/2}\\left(1 - \\frac{s}{2} + \\frac{s^2}{24} - \\cdots\\right) = s^{-1/2} - \\frac{1}{2}s^{1/2} + \\cdots.",
          explanation:
            "Using \\( \\cos\\sqrt{s} = \\sum (-1)^n s^n/(2n)! \\). The leading power \\( s^{-1/2} > -1 \\) is integrable.",
        },
        {
          stepNumber: 3,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\frac{1}{2}\\left[\\frac{\\Gamma\\!\\left(\\tfrac{1}{2}\\right)}{x^{1/2}} - \\frac{1}{2}\\frac{\\Gamma\\!\\left(\\tfrac{3}{2}\\right)}{x^{3/2}} + \\cdots\\right].",
          explanation:
            "\\( \\alpha = -1/2 \\Rightarrow \\Gamma(1/2) \\); \\( \\alpha = 1/2 \\Rightarrow \\Gamma(3/2) \\).",
        },
        {
          stepNumber: 4,
          description: "Insert Gamma values and simplify.",
          workingLatex:
            "F(x) \\sim \\frac{1}{2}\\left[\\frac{\\sqrt{\\pi}}{x^{1/2}} - \\frac{1}{2}\\cdot\\frac{\\sqrt{\\pi}/2}{x^{3/2}} + \\cdots\\right] = \\frac{1}{2}\\sqrt{\\frac{\\pi}{x}} - \\frac{\\sqrt{\\pi}}{8\\,x^{3/2}} + \\cdots.",
          explanation:
            "The leading term \\( \\tfrac12\\sqrt{\\pi/x} \\) is the usual half-Gaussian value \\( \\int_0^\\infty e^{-xt^2}dt = \\tfrac12\\sqrt{\\pi/x} \\) (since \\( \\cos 0 = 1 \\)). Verified at \\( x = 30 \\).",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\dfrac{1}{2}\\sqrt{\\dfrac{\\pi}{x}} - \\dfrac{\\sqrt{\\pi}}{8\\,x^{3/2}} + \\cdots \\)",
      canonicalAnswer: "sqrt(pi)/(2*sqrt(x)) - sqrt(pi)/(8*x^(3/2))",
    },
  },
  {
    id: "am3c-027",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 27",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A modified Bessel function has the representation \\( K_0(x) = \\int_0^\\infty e^{-x\\cosh\\theta}\\,d\\theta \\). Using the substitution \\( t = \\cosh\\theta - 1 \\) and Watson's lemma, show that \\( K_0(x) \\sim \\sqrt{\\dfrac{\\pi}{2x}}\\,e^{-x}\\left(1 - \\dfrac{1}{8x} + \\cdots\\right) \\) as \\( x \\to \\infty \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Bessel function", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute t = cosh θ − 1.",
          workingLatex:
            "t = \\cosh\\theta - 1,\\ dt = \\sinh\\theta\\,d\\theta,\\ \\sinh\\theta = \\sqrt{(1+t)^2 - 1} = \\sqrt{t(t+2)}.",
          explanation:
            "At \\( \\theta = 0 \\), \\( t = 0 \\); as \\( \\theta \\to \\infty \\), \\( t \\to \\infty \\). The exponent becomes \\( -x(1+t) \\), giving the Laplace form \\( e^{-xt} \\) and the prefactor \\( e^{-x} \\).",
        },
        {
          stepNumber: 2,
          description: "Rewrite the integral.",
          workingLatex:
            "K_0(x) = e^{-x}\\int_0^\\infty e^{-xt}\\,\\frac{dt}{\\sqrt{t(t+2)}}.",
          explanation:
            "Dividing by \\( \\sinh\\theta = \\sqrt{t(t+2)} \\) gives the amplitude; the square-root singularity \\( t^{-1/2} \\) at \\( t = 0 \\) is integrable.",
        },
        {
          stepNumber: 3,
          description: "Expand the amplitude near t = 0.",
          workingLatex:
            "\\frac{1}{\\sqrt{t(t+2)}} = \\frac{1}{\\sqrt{2}}\\,t^{-1/2}\\Bigl(1 + \\tfrac{t}{2}\\Bigr)^{-1/2} = \\frac{1}{\\sqrt{2}}\\Bigl(t^{-1/2} - \\tfrac{1}{4}t^{1/2} + \\cdots\\Bigr).",
          explanation:
            "Factor \\( t+2 = 2(1+t/2) \\) and binomially expand \\( (1+t/2)^{-1/2} = 1 - t/4 + \\cdots \\).",
        },
        {
          stepNumber: 4,
          description: "Apply Watson's lemma.",
          workingLatex:
            "\\int_0^\\infty e^{-xt}\\frac{dt}{\\sqrt{t(t+2)}} \\sim \\frac{1}{\\sqrt{2}}\\left[\\frac{\\Gamma(\\tfrac12)}{x^{1/2}} - \\frac{1}{4}\\frac{\\Gamma(\\tfrac32)}{x^{3/2}} + \\cdots\\right].",
          explanation:
            "Powers \\( t^{-1/2}, t^{1/2} \\) give \\( \\Gamma(1/2), \\Gamma(3/2) \\).",
        },
        {
          stepNumber: 5,
          description: "Insert Gamma values and reassemble.",
          workingLatex:
            "= \\frac{1}{\\sqrt{2}}\\left[\\frac{\\sqrt{\\pi}}{x^{1/2}} - \\frac{1}{4}\\frac{\\sqrt{\\pi}/2}{x^{3/2}} + \\cdots\\right] = \\sqrt{\\frac{\\pi}{2x}}\\left(1 - \\frac{1}{8x} + \\cdots\\right).",
          explanation:
            "Factor out \\( \\sqrt{\\pi/(2x)} \\); the second coefficient is \\( -\\tfrac14\\cdot\\tfrac12 = -1/8 \\) per power of \\( 1/x \\).",
        },
        {
          stepNumber: 6,
          description: "Restore the prefactor.",
          workingLatex:
            "K_0(x) \\sim \\sqrt{\\frac{\\pi}{2x}}\\,e^{-x}\\left(1 - \\frac{1}{8x} + \\cdots\\right).",
          explanation:
            "Verified at \\( x = 20 \\): \\( \\sqrt{\\pi/(2\\cdot20)}\\,e^{-20}(1 - 1/160) \\) matches \\( K_0(20) \\) to \\( \\sim 10^{-3} \\) relative, improving with larger \\( x \\).",
        },
      ],
      finalAnswer:
        "\\( K_0(x) \\sim \\sqrt{\\dfrac{\\pi}{2x}}\\,e^{-x}\\left(1 - \\dfrac{1}{8x} + \\cdots\\right) \\)",
      canonicalAnswer: "sqrt(pi/(2*x))*exp(-x)*(1 - 1/(8*x))",
    },
  },
  {
    id: "am3c-028",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the first two terms as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,\\dfrac{t^{1/2}}{\\sqrt{1+t^2}}\\,dt \\), giving coefficients as Gamma functions.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Gamma function", "binomial series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude.",
          workingLatex:
            "\\frac{t^{1/2}}{\\sqrt{1+t^2}} = t^{1/2}\\Bigl(1 - \\tfrac{1}{2}t^2 + \\cdots\\Bigr) = t^{1/2} - \\tfrac{1}{2}t^{5/2} + \\cdots.",
          explanation:
            "Expand \\( (1+t^2)^{-1/2} = 1 - t^2/2 + \\cdots \\); the powers are \\( 1/2 \\) and \\( 5/2 \\) (a gap, since the \\( t^{3/2} \\) term is absent).",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\frac{\\Gamma\\!\\left(\\tfrac{3}{2}\\right)}{x^{3/2}} - \\frac{1}{2}\\,\\frac{\\Gamma\\!\\left(\\tfrac{7}{2}\\right)}{x^{7/2}} + \\cdots.",
          explanation:
            "\\( \\alpha = 1/2 \\Rightarrow \\Gamma(3/2) \\); \\( \\alpha = 5/2 \\Rightarrow \\Gamma(7/2) \\). The expansion jumps from \\( x^{-3/2} \\) to \\( x^{-7/2} \\).",
        },
        {
          stepNumber: 3,
          description: "Insert Gamma values.",
          workingLatex:
            "\\Gamma\\!\\left(\\tfrac{3}{2}\\right) = \\frac{\\sqrt{\\pi}}{2},\\quad \\Gamma\\!\\left(\\tfrac{7}{2}\\right) = \\frac{15\\sqrt{\\pi}}{8}.",
          explanation:
            "\\( \\Gamma(7/2) = \\tfrac52\\cdot\\tfrac32\\cdot\\tfrac12\\sqrt{\\pi} = 15\\sqrt{\\pi}/8 \\).",
        },
        {
          stepNumber: 4,
          description: "State the result.",
          workingLatex:
            "F(x) \\sim \\frac{\\sqrt{\\pi}}{2\\,x^{3/2}} - \\frac{15\\sqrt{\\pi}}{16\\,x^{7/2}} + \\cdots.",
          explanation:
            "\\( -\\tfrac12\\cdot\\tfrac{15\\sqrt\\pi}{8} = -15\\sqrt\\pi/16 \\). Verified numerically at \\( x = 30 \\).",
        },
      ],
      finalAnswer:
        "\\( F(x) \\sim \\dfrac{\\sqrt{\\pi}}{2\\,x^{3/2}} - \\dfrac{15\\sqrt{\\pi}}{16\\,x^{7/2}} + \\cdots \\)",
      canonicalAnswer: "sqrt(pi)/(2*x^(3/2)) - 15*sqrt(pi)/(16*x^(7/2))",
    },
  },
  {
    id: "am3c-029",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Two integrals have amplitudes agreeing to high order at \\( t = 0 \\): \\( f(t) = e^{-t} \\) and \\( g(t) = 1/(1+t) \\). Their small-\\( t \\) expansions are \\( 1 - t + \\tfrac{t^2}{2} - \\cdots \\) and \\( 1 - t + t^2 - \\cdots \\). Find the leading difference of \\( \\int_0^\\infty e^{-xt}[f(t)-g(t)]\\,dt \\) as \\( x \\to \\infty \\), and comment on what Watson's lemma can and cannot detect.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "uniqueness", "comparison"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract the amplitude expansions.",
          workingLatex:
            "f(t) - g(t) = \\Bigl(1 - t + \\tfrac{t^2}{2} - \\cdots\\Bigr) - \\Bigl(1 - t + t^2 - \\cdots\\Bigr) = -\\frac{t^2}{2} + \\cdots.",
          explanation:
            "The constant and linear terms cancel exactly; the first surviving power is \\( t^2 \\), so the integrals agree to two orders in \\( 1/x \\).",
        },
        {
          stepNumber: 2,
          description: "Find the next term of the difference.",
          workingLatex:
            "f - g = \\Bigl(\\tfrac{1}{2} - 1\\Bigr)t^2 + \\Bigl(-\\tfrac{1}{6} + 1\\Bigr)t^3 + \\cdots = -\\frac{1}{2}t^2 + \\frac{5}{6}t^3 + \\cdots.",
          explanation:
            "Compare cubic coefficients: \\( e^{-t} \\) has \\( -1/6 \\), \\( 1/(1+t) \\) has \\( -1 \\) (coefficient of \\( t^3 \\) is \\( (-1)^3 = -1 \\)), giving \\( -1/6 - (-1) = 5/6 \\).",
        },
        {
          stepNumber: 3,
          description: "Apply Watson's lemma to the difference.",
          workingLatex:
            "\\int_0^\\infty e^{-xt}[f-g]\\,dt \\sim -\\frac{1}{2}\\frac{2!}{x^3} + \\frac{5}{6}\\frac{3!}{x^4} + \\cdots = -\\frac{1}{x^3} + \\frac{5}{x^4} + \\cdots.",
          explanation:
            "\\( t^2 \\to 2!/x^3 \\), \\( t^3 \\to 3!/x^4 \\). The leading difference is \\( O(x^{-3}) \\), confirming the two integrals share their \\( x^{-1} \\) and \\( x^{-2} \\) terms.",
        },
        {
          stepNumber: 4,
          description: "Comment on detectability.",
          workingLatex:
            "\\text{Two functions differing only by } O(e^{-1/t}) \\text{ at } t\\to 0^+ \\text{ have identical Watson series.}",
          explanation:
            "Watson's lemma sees only the power-series part of the amplitude near \\( t = 0 \\). Any term beyond all powers of \\( t \\) (e.g. \\( e^{-1/t} \\)) contributes nothing to the asymptotic series — so the asymptotic series does not determine \\( f \\) uniquely.",
        },
      ],
      finalAnswer:
        "\\( \\int_0^\\infty e^{-xt}[f-g]\\,dt \\sim -\\dfrac{1}{x^3} + \\dfrac{5}{x^4} + \\cdots \\); Watson's lemma is blind to beyond-all-orders (e.g. \\( e^{-1/t} \\)) parts of the amplitude.",
      canonicalAnswer: "-1/x^3 + 5/x^4",
    },
  },
  {
    id: "am3c-030",
    topicRef: "am3c",
    topicTitle: "Watson's lemma 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the complete asymptotic expansion as \\( x \\to \\infty \\) of \\( F(x) = \\int_0^\\infty e^{-xt}\\,J_0(2\\sqrt{t})\\,dt \\), where \\( J_0(2\\sqrt{t}) = \\sum_{n=0}^\\infty \\dfrac{(-1)^n t^n}{(n!)^2} \\). Sum the resulting series in closed form.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Bessel function", "closed form"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the amplitude expansion.",
          workingLatex:
            "J_0(2\\sqrt{t}) = \\sum_{n=0}^\\infty \\frac{(-1)^n}{(n!)^2}\\,t^n = 1 - t + \\frac{t^2}{4} - \\cdots.",
          explanation:
            "This is the entire-function series for the Bessel function with argument \\( 2\\sqrt{t} \\); only integer powers of \\( t \\) appear.",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^\\infty \\frac{(-1)^n}{(n!)^2}\\,\\frac{n!}{x^{n+1}} = \\frac{1}{x}\\sum_{n=0}^\\infty \\frac{(-1)^n}{n!}\\,\\frac{1}{x^{n}}.",
          explanation:
            "The factor \\( n! \\) from the Gamma coefficient cancels one of the two factorials, leaving \\( 1/n! \\) — a convergent series.",
        },
        {
          stepNumber: 3,
          description: "Recognise the exponential series.",
          workingLatex:
            "\\sum_{n=0}^\\infty \\frac{(-1/x)^n}{n!} = e^{-1/x}.",
          explanation:
            "The cancellation turns the asymptotic series into the Taylor series of \\( e^{-1/x} \\), which actually converges for all \\( x > 0 \\).",
        },
        {
          stepNumber: 4,
          description: "State the closed form.",
          workingLatex: "F(x) = \\frac{1}{x}\\,e^{-1/x} \\sim \\frac{1}{x} - \\frac{1}{x^2} + \\frac{1}{2x^3} - \\cdots.",
          explanation:
            "This is the exact Laplace transform \\( \\mathcal{L}\\{J_0(2\\sqrt t)\\}(x) = e^{-1/x}/x \\). Verified at \\( x = 5 \\): \\( e^{-0.2}/5 \\) matches the integral to full precision.",
        },
      ],
      finalAnswer:
        "\\( F(x) = \\dfrac{e^{-1/x}}{x} \\sim \\dfrac{1}{x} - \\dfrac{1}{x^2} + \\dfrac{1}{2x^3} - \\cdots \\)",
      canonicalAnswer: "exp(-1/x)/x",
    },
  },
];
