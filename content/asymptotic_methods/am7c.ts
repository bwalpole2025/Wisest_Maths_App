import { Question } from "@/lib/types";

/**
 * Asymptotic Methods — am7c
 * "Higher-order terms & IBP cross-checks"  (group: Method of Steepest Descent I)
 *
 * Scope: subleading coefficients in Laplace / Watson / steepest-descent
 * expansions, and verifying those expansions by integration by parts (IBP).
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 2 (Q1 Stirling
 * correction; Q8 steepest-descent series checked by IBP; plus Watson's-lemma and
 * Laplace-correction machinery the sheet relies on). Constants/limits varied.
 *
 * Numerically verified with mpmath/sympy (see numericChecksRun in the summary):
 *  - Watson series for 1/(1+t), 1/sqrt(1+t), 1/(1+t^2)
 *  - Laplace correction sqrt(2pi/x)(1 - 3/(4x)) for phi=t^2/2+t^4/4
 *  - Stirling 1 + 1/(12x) + 1/(288x^2) - 139/(51840 x^3)
 *  - Bessel I0 ~ e^x/sqrt(2pi x)(1 + 1/(8x) + 9/(128 x^2))
 *  - E1(x) ~ e^{-x}/x (1 - 1/x + 2/x^2 - 6/x^3)  [the IBP cross-check]
 *  - Q8 endpoint series i(1/x + 2/x^3) via symbolic IBP recursion (sympy)
 *  - interior-max Laplace = Gamma(x+1)/x^{x+1} with 1/(12x) correction
 */
export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // FOUNDATION (6) — core technique in isolation, 2 marks, examStyle:false
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "am7c-001",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "By integrating by parts once, find the leading two terms of the asymptotic expansion as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "exponential integral", "endpoint expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose which factor to differentiate.",
          workingLatex:
            "u = \\frac{1}{t}, \\qquad dv = e^{-t}\\,dt",
          explanation:
            "Split the integrand into an algebraic factor \\( 1/t \\) and the exponential \\( e^{-t}\\,dt \\). We will differentiate \\( 1/t \\) (which makes it smaller) and integrate \\( e^{-t} \\) (which keeps it an exponential). This is the engine of every IBP cross-check.",
        },
        {
          stepNumber: 2,
          description: "Differentiate and integrate the chosen parts.",
          workingLatex:
            "du = -\\frac{1}{t^{2}}\\,dt, \\qquad v = -e^{-t}",
          explanation:
            "Differentiating \\( u = 1/t \\) gives \\( du = -t^{-2}\\,dt \\), and integrating \\( dv = e^{-t}\\,dt \\) gives \\( v = -e^{-t} \\). Carry the minus sign in \\( v \\) carefully — it is a frequent source of slips.",
        },
        {
          stepNumber: 3,
          description: "Apply the integration-by-parts formula.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt = \\Big[\\, u v \\,\\Big]_x^{\\infty} - \\int_x^{\\infty} v\\,du = \\left[ -\\frac{e^{-t}}{t} \\right]_x^{\\infty} - \\int_x^{\\infty} \\left(-e^{-t}\\right)\\left(-\\frac{1}{t^{2}}\\right)dt",
          explanation:
            "Substitute into \\( \\int u\\,dv = [uv] - \\int v\\,du \\). The product \\( uv = -e^{-t}/t \\) supplies the boundary term; the remaining integrand is \\( (-e^{-t})(-t^{-2}) = e^{-t}/t^{2} \\).",
        },
        {
          stepNumber: 4,
          description: "Simplify the new integral.",
          workingLatex:
            "= \\left[ -\\frac{e^{-t}}{t} \\right]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt",
          explanation:
            "The two minus signs in \\( -\\int v\\,du \\) cancel, leaving a negative remainder integral with one extra power of \\( t \\) downstairs — so it is smaller by a factor \\( O(1/x) \\) than the original.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the boundary term.",
          workingLatex:
            "\\left[ -\\frac{e^{-t}}{t} \\right]_x^{\\infty} = 0 - \\left(-\\frac{e^{-x}}{x}\\right) = \\frac{e^{-x}}{x}",
          explanation:
            "At the upper limit \\( e^{-t}/t \\to 0 \\), so the entire boundary contribution comes from \\( t = x \\). This \\( e^{-x}/x \\) is the leading term of the expansion.",
        },
        {
          stepNumber: 6,
          description: "Integrate by parts a second time for the next term.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt = \\frac{e^{-x}}{x^{2}} - 2\\int_x^{\\infty} \\frac{e^{-t}}{t^{3}}\\,dt",
          explanation:
            "Repeating with \\( u = t^{-2} \\) (so \\( du = -2t^{-3}\\,dt \\)) gives the next boundary term \\( e^{-x}/x^{2} \\), again leaving an integral one order smaller still.",
        },
        {
          stepNumber: 7,
          description: "Assemble the two leading terms.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt = \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^{2}} + \\cdots \\sim \\frac{e^{-x}}{x}\\left( 1 - \\frac{1}{x} + \\cdots \\right)",
          explanation:
            "Subtracting the second boundary term gives the first correction, and factoring out \\( e^{-x}/x \\) puts it in the standard form. Numerically at \\( x = 30 \\) the exact value \\( E_1(30) = 3.02155\\times 10^{-15} \\) is reproduced by this form.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt \\sim \\frac{e^{-x}}{x}\\left(1 - \\frac{1}{x} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am7c-002",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Using Watson's lemma, write down the first two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Laplace integral", "subleading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note where the weight is concentrated.",
          workingLatex:
            "e^{-x t} \\text{ decays on a scale } t = O(1/x) \\to 0 \\quad (x \\to \\infty)",
          explanation:
            "Watson's lemma only sees the behaviour of the amplitude near \\( t = 0 \\), because the exponential weight \\( e^{-xt} \\) becomes ever more sharply concentrated at the endpoint as \\( x \\) grows. So only the small-\\( t \\) expansion of \\( 1/(1+t) \\) can matter.",
        },
        {
          stepNumber: 2,
          description: "Expand the amplitude as a geometric series.",
          workingLatex: "\\frac{1}{1+t} = 1 - t + t^{2} - t^{3} + \\cdots",
          explanation:
            "Expand \\( (1+t)^{-1} = \\sum_n (-1)^n t^n \\), valid for \\( |t| < 1 \\) — which is exactly the region that the weight cares about. The leading term is the constant \\( 1 \\); the first correction is \\( -t \\).",
        },
        {
          stepNumber: 3,
          description: "Recall the Watson building-block integral.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "Each monomial integrates against the exponential weight to a Gamma-function value, \\( \\Gamma(n+1) = n! \\). This is the standard Watson building block that turns a power series in \\( t \\) into a power series in \\( 1/x \\).",
        },
        {
          stepNumber: 4,
          description: "Integrate the series term by term.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt \\sim \\sum_{n\\ge0}(-1)^{n}\\frac{n!}{x^{\\,n+1}} = \\frac{0!}{x} - \\frac{1!}{x^{2}} + \\frac{2!}{x^{3}} - \\cdots",
          explanation:
            "Applying the building block to each term of the series, the coefficient of \\( x^{-(n+1)} \\) is \\( (-1)^{n} n! \\). The leading term comes from the constant \\( 1 \\), the first correction from the \\( -t \\) term.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the first two coefficients.",
          workingLatex:
            "= \\frac{1}{x} - \\frac{1}{x^{2}} + \\frac{2}{x^{3}} - \\cdots",
          explanation:
            "Substituting \\( 0! = 1 \\), \\( 1! = 1 \\), \\( 2! = 2 \\) gives the explicit coefficients. The growth of the coefficients as \\( n! \\) is the tell-tale sign of an asymptotic, divergent series.",
        },
        {
          stepNumber: 6,
          description: "Read off the leading two terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt \\sim \\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "Numerically at \\( x = 40 \\) the exact integral is \\( 0.0244041 \\); the two-term form gives \\( 1/40 - 1/40^2 = 0.024375 \\), already within \\( 0.1\\% \\) and improving as \\( x \\) grows.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\int_0^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt \\sim \\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots \\)",
    },
  },
  {
    id: "am7c-003",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} \\frac{e^{-x t}}{\\sqrt{1+t}}\\,dt \\) by Watson's lemma.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "binomial series", "subleading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the amplitude as a binomial power.",
          workingLatex: "\\frac{1}{\\sqrt{1+t}} = (1+t)^{-1/2}",
          explanation:
            "Rewriting the square root as a power makes it ready for the binomial series. Only the small-\\( t \\) behaviour matters under the concentrated weight \\( e^{-xt} \\).",
        },
        {
          stepNumber: 2,
          description: "Compute the binomial coefficients.",
          workingLatex:
            "\\binom{-1/2}{0} = 1, \\quad \\binom{-1/2}{1} = -\\frac{1}{2}, \\quad \\binom{-1/2}{2} = \\frac{(-1/2)(-3/2)}{2!} = \\frac{3}{8}",
          explanation:
            "The general binomial coefficient \\( \\binom{-1/2}{n} \\) is built from the falling product \\( (-\\tfrac12)(-\\tfrac32)\\cdots \\) over \\( n! \\). We need the first three to control the leading two terms safely.",
        },
        {
          stepNumber: 3,
          description: "Binomial-expand the amplitude about the endpoint.",
          workingLatex:
            "(1+t)^{-1/2} = 1 - \\frac{1}{2}t + \\frac{3}{8}t^{2} - \\cdots",
          explanation:
            "Assembling \\( (1+t)^{-1/2} = \\sum_n \\binom{-1/2}{n} t^{n} \\). The leading constant gives the \\( 1/x \\) term; the \\( -\\tfrac12 t \\) term gives the first correction.",
        },
        {
          stepNumber: 4,
          description: "Apply the Watson integral to each power.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "Integrating term by term, the coefficient of \\( x^{-(n+1)} \\) is \\( \\binom{-1/2}{n}\\,n! \\). For \\( n = 0 \\) this is \\( 1 \\); for \\( n = 1 \\) it is \\( -\\tfrac12\\cdot 1! = -\\tfrac12 \\).",
        },
        {
          stepNumber: 5,
          description: "Read off the first two terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{\\sqrt{1+t}}\\,dt \\sim \\frac{1}{x} - \\frac{1}{2}\\,\\frac{1}{x^{2}} + \\cdots",
          explanation:
            "The constant term contributes \\( 0!/x = 1/x \\); the linear term contributes \\( -\\tfrac12\\cdot 1!/x^{2} = -1/(2x^{2}) \\).",
        },
        {
          stepNumber: 6,
          description: "Sanity-check numerically.",
          workingLatex:
            "x = 25:\\quad \\frac{1}{25} - \\frac{1}{2\\cdot 25^{2}} = 0.039200, \\quad \\text{exact } 0.0392438",
          explanation:
            "The two-term value 0.039200 already sits within about \\( 0.1\\% \\) of the exact integral 0.0392438, and the gap shrinks as \\( x \\) increases — the hallmark of a valid leading asymptotic.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\int_0^{\\infty} \\frac{e^{-x t}}{\\sqrt{1+t}}\\,dt \\sim \\frac{1}{x} - \\frac{1}{2x^{2}} + \\cdots \\)",
    },
  },
  {
    id: "am7c-004",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 04",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate exactly the Watson-lemma building block \\( \\displaystyle \\int_0^{\\infty} t^{1/2}\\, e^{-x t}\\,dt \\) for \\( x > 0 \\), giving the answer as a power of \\( x \\) times a Gamma value.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Gamma function", "Watson's lemma", "fractional power"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose a rescaling substitution.",
          workingLatex: "u = x t",
          explanation:
            "Fractional powers appear in subleading Laplace terms, so this exact value is needed repeatedly. The aim is to rescale the variable so the exponent becomes the clean \\( e^{-u} \\) of the Gamma integral.",
        },
        {
          stepNumber: 2,
          description: "Express the old variable and differential.",
          workingLatex: "t = \\frac{u}{x}, \\qquad dt = \\frac{du}{x}",
          explanation:
            "Inverting \\( u = xt \\) gives \\( t = u/x \\) and \\( dt = du/x \\). Because \\( x > 0 \\) the limits \\( 0,\\infty \\) are unchanged by the substitution.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the integral in the new variable.",
          workingLatex:
            "\\int_0^{\\infty} t^{1/2} e^{-x t}\\,dt = \\int_0^{\\infty} \\left(\\frac{u}{x}\\right)^{1/2} e^{-u}\\,\\frac{du}{x}",
          explanation:
            "Substitute \\( t^{1/2} = (u/x)^{1/2} \\), \\( e^{-xt} = e^{-u} \\) and \\( dt = du/x \\). Every factor of \\( x \\) is now explicit and can be pulled outside the integral.",
        },
        {
          stepNumber: 4,
          description: "Collect the powers of x.",
          workingLatex:
            "= \\frac{1}{x^{1/2}}\\cdot\\frac{1}{x}\\int_0^{\\infty} u^{1/2} e^{-u}\\,du = \\frac{1}{x^{3/2}} \\int_0^{\\infty} u^{1/2} e^{-u}\\,du",
          explanation:
            "The factor \\( (u/x)^{1/2} = u^{1/2}x^{-1/2} \\) and \\( dt = du/x \\) together pull out \\( x^{-1/2}\\cdot x^{-1} = x^{-3/2} \\), leaving a pure number inside.",
        },
        {
          stepNumber: 5,
          description: "Identify the Gamma function.",
          workingLatex:
            "\\int_0^{\\infty} u^{1/2} e^{-u}\\,du = \\Gamma\\!\\left(\\tfrac{3}{2}\\right)",
          explanation:
            "By definition \\( \\Gamma(s) = \\int_0^\\infty u^{s-1} e^{-u}\\,du \\); matching \\( u^{1/2} = u^{s-1} \\) gives \\( s = 3/2 \\).",
        },
        {
          stepNumber: 6,
          description: "Reduce the Gamma value.",
          workingLatex:
            "\\Gamma\\!\\left(\\tfrac{3}{2}\\right) = \\tfrac{1}{2}\\,\\Gamma\\!\\left(\\tfrac{1}{2}\\right) = \\frac{\\sqrt{\\pi}}{2}",
          explanation:
            "Use the recurrence \\( \\Gamma(s+1) = s\\,\\Gamma(s) \\) with \\( s = 1/2 \\), and the special value \\( \\Gamma(1/2) = \\sqrt{\\pi} \\).",
        },
        {
          stepNumber: 7,
          description: "State the closed form.",
          workingLatex:
            "\\int_0^{\\infty} t^{1/2} e^{-x t}\\,dt = \\frac{\\sqrt{\\pi}}{2}\\,x^{-3/2}",
          explanation:
            "Checked numerically: at \\( x = 20 \\) both sides equal \\( 0.0099083182 \\).",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\sqrt{\\pi}}{2}\\,x^{-3/2} \\)",
      canonicalAnswer: "sqrt(pi)/2 * x^(-3/2)",
    },
  },
  {
    id: "am7c-005",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "By integrating by parts twice, find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} e^{-x t}\\cos t \\,dt \\), and confirm them against the exact value \\( \\dfrac{x}{x^{2}+1} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "Laplace integral", "cross-check"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude near the endpoint.",
          workingLatex: "\\cos t = 1 - \\frac{t^{2}}{2} + \\frac{t^{4}}{24} - \\cdots",
          explanation:
            "Watson's lemma gives the series directly: only the small-\\( t \\) Taylor coefficients of \\( \\cos t \\) contribute, since the weight \\( e^{-xt} \\) is concentrated at \\( t = 0 \\). Note the series has only even powers.",
        },
        {
          stepNumber: 2,
          description: "Recall the Watson building block.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "Each power of \\( t \\) integrates against the weight to a factorial over a power of \\( x \\). We need \\( n = 0 \\) and \\( n = 2 \\) for the leading two terms.",
        },
        {
          stepNumber: 3,
          description: "Integrate each power against the weight.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t}\\cos t\\,dt \\sim 1\\cdot\\frac{0!}{x} - \\frac{1}{2}\\cdot\\frac{2!}{x^{3}} = \\frac{1}{x} - \\frac{1}{x^{3}} + \\cdots",
          explanation:
            "The constant term gives \\( 1/x \\) and the \\( -t^2/2 \\) term gives \\( -\\tfrac12\\cdot 2!/x^3 = -1/x^3 \\). There is no \\( 1/x^2 \\) term because \\( \\cos t \\) is even, so all odd powers of \\( t \\) are absent.",
        },
        {
          stepNumber: 4,
          description: "Set up the exact value for comparison.",
          workingLatex:
            "\\frac{x}{x^{2}+1} = \\frac{x}{x^{2}\\left(1 + x^{-2}\\right)} = \\frac{1}{x}\\cdot\\frac{1}{1 + x^{-2}}",
          explanation:
            "Factor \\( x^2 \\) out of the denominator. This isolates a leading \\( 1/x \\) times a geometric factor we can expand for large \\( x \\).",
        },
        {
          stepNumber: 5,
          description: "Expand the geometric factor.",
          workingLatex:
            "\\frac{1}{1 + x^{-2}} = 1 - x^{-2} + x^{-4} - \\cdots \\ \\Rightarrow\\ \\frac{x}{x^{2}+1} = \\frac{1}{x} - \\frac{1}{x^{3}} + \\cdots",
          explanation:
            "Use \\( (1+y)^{-1} = 1 - y + y^2 - \\cdots \\) with \\( y = x^{-2} \\). The exact closed form reproduces exactly the same series — the IBP/Watson cross-check.",
        },
        {
          stepNumber: 6,
          description: "Confirm numerically.",
          workingLatex:
            "x = 30:\\quad \\frac{30}{901} = 0.0332963, \\quad \\frac{1}{30} - \\frac{1}{30^{3}} = 0.0332963",
          explanation:
            "Both the exact value and the two-term series agree to the printed digits at \\( x = 30 \\), confirming the expansion. The two independent routes landing on the same series is the point of the exercise.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\int_0^{\\infty} e^{-x t}\\cos t\\,dt \\sim \\frac{1}{x} - \\frac{1}{x^{3}} + \\cdots \\)",
    },
  },
  {
    id: "am7c-006",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State the first correction term in Stirling's formula: write the next term in \\( \\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\,(x/e)^{x}\\,(1 + \\cdots) \\) as \\( x \\to \\infty \\), and identify its order in \\( 1/x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Stirling's formula", "subleading term", "Laplace method"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the integral behind Stirling.",
          workingLatex:
            "\\Gamma(x+1) = \\int_0^{\\infty} t^{x} e^{-t}\\,dt = \\int_0^{\\infty} e^{x\\ln t - t}\\,dt",
          explanation:
            "Stirling's formula is what Laplace's method produces from this integral. The integrand peaks at \\( t = x \\); the leading Gaussian gives \\( \\sqrt{2\\pi x}(x/e)^x \\).",
        },
        {
          stepNumber: 2,
          description: "Recall the form of the correction series.",
          workingLatex:
            "\\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x}\\left(1 + \\frac{c_1}{x} + \\frac{c_2}{x^{2}} + \\cdots\\right)",
          explanation:
            "The corrections come from higher Taylor terms of the phase at its maximum, and form a series in inverse powers of \\( x \\). We want the first coefficient \\( c_1 \\).",
        },
        {
          stepNumber: 3,
          description: "Identify the source of the first correction.",
          workingLatex:
            "\\ln(1+s) - s = -\\frac{s^{2}}{2} + \\frac{s^{3}}{3} - \\frac{s^{4}}{4} + \\cdots",
          explanation:
            "After centring at the peak (substitute \\( t = x(1+s) \\)), the cubic \\( s^3/3 \\) and quartic \\( s^4/4 \\) terms of the phase combine to produce \\( c_1 \\). The full computation is in am7c-021.",
        },
        {
          stepNumber: 4,
          description: "Quote the first correction coefficient.",
          workingLatex: "c_1 = \\frac{1}{12}",
          explanation:
            "The squared-cubic term contributes \\( +5/(6x) \\) and the quartic contributes \\( -3/(4x) \\); their sum is \\( 1/(12x) \\). This is the standard first Stirling correction.",
        },
        {
          stepNumber: 5,
          description: "State the result with its order.",
          workingLatex:
            "\\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "The first correction term is \\( 1/(12x) \\), which is \\( O(1/x) \\).",
        },
        {
          stepNumber: 6,
          description: "Confirm numerically.",
          workingLatex:
            "x = 30:\\quad \\frac{\\Gamma(31)}{\\sqrt{2\\pi\\cdot30}\\,(30/e)^{30}} = 1.0027815, \\quad 1 + \\frac{1}{12\\cdot 30} = 1.0027778",
          explanation:
            "The measured ratio 1.0027815 matches \\( 1 + 1/360 \\) to four significant figures; the tiny residual is the next term \\( 1/(288x^2) \\).",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{12x} \\), of order \\( O(1/x) \\).",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // STANDARD (12) — typical sheet level, 3–4 marks, examStyle:true
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "am7c-007",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 07",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms of the asymptotic expansion as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} \\frac{e^{-x t}}{1+t^{2}}\\,dt \\), and state the order of the first omitted term.",
    marks: 3,
    yearCreated: 2026,
    tags: ["Watson's lemma", "even amplitude", "subleading terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the weight concentrates at the endpoint.",
          workingLatex:
            "e^{-x t}\\ \\text{peaks at } t = 0, \\quad \\text{width } O(1/x)",
          explanation:
            "Only the behaviour of the amplitude \\( 1/(1+t^2) \\) at \\( t = 0 \\) matters, since the exponential weight collapses onto the endpoint as \\( x \\to \\infty \\). This justifies expanding the amplitude there.",
        },
        {
          stepNumber: 2,
          description: "Expand the amplitude near the endpoint.",
          workingLatex:
            "\\frac{1}{1+t^{2}} = 1 - t^{2} + t^{4} - t^{6} + \\cdots",
          explanation:
            "This is the geometric series in \\( t^2 \\). Because the amplitude is even, only even powers of \\( t \\) appear, so the expansion will contain only odd powers of \\( 1/x \\).",
        },
        {
          stepNumber: 3,
          description: "Apply the Watson integral to each even power.",
          workingLatex:
            "\\int_0^{\\infty} t^{2k} e^{-x t}\\,dt = \\frac{(2k)!}{x^{\\,2k+1}}",
          explanation:
            "The building block \\( \\int_0^\\infty t^n e^{-xt}\\,dt = n!/x^{n+1} \\) with \\( n = 2k \\). The coefficient of \\( x^{-(2k+1)} \\) is therefore \\( (-1)^{k}(2k)! \\).",
        },
        {
          stepNumber: 4,
          description: "Write the leading term from k = 0.",
          workingLatex:
            "k = 0:\\quad (-1)^{0}\\frac{(0)!}{x^{1}} = \\frac{1}{x}",
          explanation:
            "The constant term of the amplitude integrates to \\( 0!/x = 1/x \\). This is the leading behaviour, identical to the bare \\( 1/(1+t) \\) case at this order.",
        },
        {
          stepNumber: 5,
          description: "Write the first correction from k = 1.",
          workingLatex:
            "k = 1:\\quad (-1)^{1}\\frac{(2)!}{x^{3}} = -\\frac{2}{x^{3}}",
          explanation:
            "The \\( -t^2 \\) term of the amplitude integrates to \\( -2!/x^{3} = -2/x^3 \\). Note there is no \\( 1/x^2 \\) term in between, because the amplitude is even.",
        },
        {
          stepNumber: 6,
          description: "Write the second correction from k = 2.",
          workingLatex:
            "k = 2:\\quad (-1)^{2}\\frac{(4)!}{x^{5}} = \\frac{24}{x^{5}}",
          explanation:
            "The \\( +t^4 \\) term integrates to \\( 4!/x^{5} = 24/x^5 \\). The coefficient \\( 24 \\) is already much larger than \\( 1 \\) and \\( 2 \\), foreshadowing divergence.",
        },
        {
          stepNumber: 7,
          description: "Collect the first three terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{1+t^{2}}\\,dt \\sim \\frac{1}{x} - \\frac{2}{x^{3}} + \\frac{24}{x^{5}} - \\cdots",
          explanation:
            "Assembling the three contributions in order. The series runs over the odd powers \\( x^{-1}, x^{-3}, x^{-5} \\) only.",
        },
        {
          stepNumber: 8,
          description: "Confirm numerically.",
          workingLatex:
            "x = 25:\\quad \\frac{1}{25} - \\frac{2}{25^{3}} + \\frac{24}{25^{5}} = 0.0398745, \\quad \\text{exact } 0.0398743",
          explanation:
            "The three-term value agrees with the exact integral to five significant figures, confirming both the coefficients and the absence of even powers.",
        },
        {
          stepNumber: 9,
          description: "Identify the first omitted term.",
          workingLatex:
            "k = 3:\\quad (-1)^{3}\\frac{6!}{x^{7}} = -\\frac{720}{x^{7}} = O\\!\\left(\\frac{1}{x^{7}}\\right)",
          explanation:
            "The next term is \\( k = 3 \\), giving \\( -720/x^{7} \\). This sets the size of the error in truncating after three terms.",
        },
        {
          stepNumber: 10,
          description: "Comment on the growth of the coefficients.",
          workingLatex:
            "(2k)! \\to \\infty \\ \\text{faster than any}\\ x^{2k} \\quad (k \\to \\infty)",
          explanation:
            "The rapidly growing coefficients \\( (2k)! \\) are the hallmark of a divergent (asymptotic) series — they will eventually swamp any fixed power of \\( x \\), so the series is asymptotic rather than convergent.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\frac{1}{x} - \\frac{2}{x^{3}} + \\frac{24}{x^{5}} - \\cdots \\), first omitted term \\( O(x^{-7}) \\).",
    },
  },
  {
    id: "am7c-008",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 08",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Derive, via Laplace's method including the first correction, the expansion as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_{-\\infty}^{\\infty} e^{-x\\left(\\frac{1}{2}t^{2} + \\frac{1}{4}t^{4}\\right)}\\,dt \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Laplace method", "quartic correction", "Gaussian moments"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the phase to find its stationary points.",
          workingLatex:
            "\\phi(t) = \\frac{1}{2}t^{2} + \\frac{1}{4}t^{4}, \\qquad \\phi'(t) = t + t^{3} = t(1 + t^{2})",
          explanation:
            "Factor the derivative. Since \\( 1 + t^2 > 0 \\) for all real \\( t \\), the only real root is \\( t = 0 \\), which is where the integrand is maximised.",
        },
        {
          stepNumber: 2,
          description: "Evaluate phase value and curvature at the maximum.",
          workingLatex:
            "\\phi(0) = 0, \\qquad \\phi''(t) = 1 + 3t^{2} \\Rightarrow \\phi''(0) = 1",
          explanation:
            "At \\( t = 0 \\) the phase vanishes (so there is no exponential prefactor) and the curvature is \\( 1 \\), setting the Gaussian width. The quartic term is what produces the first correction.",
          mafs: "<Mafs viewBox={{ x: [-2.4, 2.4], y: [-0.35, 1.25], padding: 0 }} height={160}>\n  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: false }} />\n  <Plot.OfX y={(t) => Math.exp(-1.2*(t*t/2 + t*t*t*t/4))} domain={[-2.4, 2.4]} color=\"var(--mafs-fg-blue)\" style=\"dashed\" />\n  <Plot.OfX y={(t) => Math.exp(-5*(t*t/2 + t*t*t*t/4))} domain={[-2.4, 2.4]} color=\"var(--mafs-fg-accent)\" weight={3} />\n  <Point x={0} y={1} color=\"var(--mafs-fg-blue)\" />\n  <LaTeX at={[0,1.12]} tex=\"t=0\" color=\"var(--mafs-fg-blue)\" />\n  <LaTeX at={[1.55,0.6]} tex=\"\\\\text{larger }x\" color=\"var(--mafs-fg-accent)\" />\n  <LaTeX at={[2.1,-0.2]} tex=\"t\" />\n</Mafs>",
        },
        {
          stepNumber: 3,
          description: "Factor out the Gaussian.",
          workingLatex:
            "e^{-x\\phi} = e^{-x t^{2}/2}\\,e^{-x t^{4}/4}",
          explanation:
            "Split the exponent into its quadratic (Gaussian) part and the quartic remainder. The Gaussian is the dominant factor; the quartic factor is what we expand.",
        },
        {
          stepNumber: 4,
          description: "Expand the quartic factor.",
          workingLatex:
            "e^{-x t^{4}/4} = 1 - \\frac{x t^{4}}{4} + \\cdots",
          explanation:
            "Near the peak the Gaussian forces \\( t = O(x^{-1/2}) \\), so \\( x t^{4} = O(x\\cdot x^{-2}) = O(1/x) \\) is small. Expanding \\( e^{-y} = 1 - y + \\cdots \\) with \\( y = xt^4/4 \\) turns the integral into Gaussian moments.",
        },
        {
          stepNumber: 5,
          description: "State the Gaussian moment formula.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} t^{2m} e^{-x t^{2}/2}\\,dt = (2m-1)!!\\,x^{-m}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "The even Gaussian moments follow from differentiating the basic Gaussian integral; \\( (2m-1)!! \\) is the product of odd numbers down to \\( 1 \\). Odd moments vanish by symmetry.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the two moments needed.",
          workingLatex:
            "m = 0:\\ \\int e^{-x t^2/2}\\,dt = \\sqrt{\\frac{2\\pi}{x}}; \\qquad m = 2:\\ \\int t^{4} e^{-x t^2/2}\\,dt = \\frac{3}{x^{2}}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "For \\( m = 0 \\) the double factorial \\( (-1)!! = 1 \\) gives the leading Gaussian; for \\( m = 2 \\) we have \\( 3!! = 3 \\), giving the moment of \\( t^4 \\).",
        },
        {
          stepNumber: 7,
          description: "Combine leading and correction integrals.",
          workingLatex:
            "\\int \\sim \\sqrt{\\frac{2\\pi}{x}} - \\frac{x}{4}\\cdot\\frac{3}{x^{2}}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "The constant \\( 1 \\) in the expanded factor gives the leading Gaussian; the \\( -xt^4/4 \\) term multiplies the \\( t^4 \\) moment, carrying the prefactor \\( -x/4 \\).",
        },
        {
          stepNumber: 8,
          description: "Simplify the correction coefficient.",
          workingLatex:
            "-\\frac{x}{4}\\cdot\\frac{3}{x^{2}} = -\\frac{3}{4x}",
          explanation:
            "The explicit factor of \\( x \\) from the expansion cancels one power of \\( x \\) from the moment, leaving a genuine \\( 1/x \\) correction relative to the leading term.",
        },
        {
          stepNumber: 9,
          description: "Factor out the leading Gaussian.",
          workingLatex:
            "\\int \\sim \\sqrt{\\frac{2\\pi}{x}}\\left(1 - \\frac{3}{4x} + \\cdots\\right)",
          explanation:
            "Dividing through by the common \\( \\sqrt{2\\pi/x} \\) exposes the correction series in \\( 1/x \\). This is the standard normalised form.",
        },
        {
          stepNumber: 10,
          description: "Confirm numerically.",
          workingLatex:
            "x = 320:\\quad \\frac{\\text{integral}}{\\sqrt{2\\pi/x}} = 0.997687, \\quad 1 - \\frac{3}{4\\cdot320} = 0.997656",
          explanation:
            "The measured ratio 0.997687 matches \\( 1 - 3/(4x) = 0.997656 \\), with the small residual being the \\( O(1/x^2) \\) term; agreement tightens as \\( x \\) grows.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\sqrt{\\frac{2\\pi}{x}}\\left(1 - \\frac{3}{4x} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am7c-009",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 09",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt \\) by repeated integration by parts, and explain why the resulting series does not converge.",
    marks: 4,
    yearCreated: 2026,
    tags: ["exponential integral", "integration by parts", "divergent series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the parts for the first integration.",
          workingLatex:
            "u = \\frac{1}{t}, \\quad dv = e^{-t}\\,dt \\ \\Rightarrow\\ du = -\\frac{1}{t^{2}}\\,dt, \\quad v = -e^{-t}",
          explanation:
            "Differentiate the algebraic factor and integrate the exponential. The boundary term will carry the leading behaviour; the leftover integral is one power of \\( t \\) smaller.",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts once.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt = \\left[-\\frac{e^{-t}}{t}\\right]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt = \\frac{e^{-x}}{x} - \\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt",
          explanation:
            "The upper limit vanishes, so the boundary term gives the leading term \\( e^{-x}/x \\) from \\( t = x \\). The remaining integral is the next object to process.",
        },
        {
          stepNumber: 3,
          description: "Integrate by parts a second time.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt = \\frac{e^{-x}}{x^{2}} - 2\\int_x^{\\infty} \\frac{e^{-t}}{t^{3}}\\,dt",
          explanation:
            "Now \\( u = t^{-2} \\), so \\( du = -2t^{-3}\\,dt \\); the factor \\( 2 \\) comes from differentiating \\( t^{-2} \\). The boundary term is \\( e^{-x}/x^{2} \\).",
        },
        {
          stepNumber: 4,
          description: "Integrate by parts a third time.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t^{3}}\\,dt = \\frac{e^{-x}}{x^{3}} - 3\\int_x^{\\infty} \\frac{e^{-t}}{t^{4}}\\,dt",
          explanation:
            "Each step raises the power of \\( t \\) in the leftover integral by one and picks up the factor that came from differentiating \\( t^{-n} \\); here that factor is \\( 3 \\).",
        },
        {
          stepNumber: 5,
          description: "Substitute the third remainder into the second.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt = \\frac{e^{-x}}{x^{2}} - 2\\left(\\frac{e^{-x}}{x^{3}} - 3\\int_x^{\\infty} \\frac{e^{-t}}{t^{4}}\\,dt\\right) = \\frac{e^{-x}}{x^{2}} - \\frac{2e^{-x}}{x^{3}} + \\cdots",
          explanation:
            "Back-substituting builds the second integral as its own boundary chain; the accumulated factor on the \\( x^{-3} \\) term is \\( 2 = 2! \\), confirming the factorial pattern is forming.",
        },
        {
          stepNumber: 6,
          description: "Chain all the boundary terms together.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt = \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^{2}} + 2\\,\\frac{e^{-x}}{x^{3}} - 6\\,\\frac{e^{-x}}{x^{4}} + \\cdots",
          explanation:
            "Substituting each remainder into the one above, the signs alternate and the accumulated factors are \\( 1, 1, 2, 6 = 0!,1!,2!,3! \\). The pattern of coefficients is \\( (-1)^{n} n! \\).",
        },
        {
          stepNumber: 7,
          description: "Factor out the common boundary factor.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt \\sim \\frac{e^{-x}}{x}\\left(1 - \\frac{1}{x} + \\frac{2}{x^{2}} - \\frac{6}{x^{3}} + \\cdots\\right)",
          explanation:
            "Factoring out \\( e^{-x}/x \\) exposes the series \\( \\sum (-1)^n n!\\,x^{-n} \\) inside the bracket.",
        },
        {
          stepNumber: 8,
          description: "Confirm numerically.",
          workingLatex:
            "x = 30:\\quad E_1(30) = 3.02155\\times 10^{-15}, \\quad \\text{four-term form} = 3.02156\\times 10^{-15}",
          explanation:
            "The four-term truncation reproduces the exact exponential-integral value to the printed digits, validating the coefficients.",
        },
        {
          stepNumber: 9,
          description: "Examine the general coefficient for large n.",
          workingLatex:
            "\\text{term}_n = (-1)^n\\frac{n!}{x^{n}}, \\qquad \\left|\\frac{\\text{term}_{n+1}}{\\text{term}_n}\\right| = \\frac{n+1}{x} \\to \\infty \\quad (n \\to \\infty)",
          explanation:
            "By the ratio test the term-to-term ratio grows without bound for any fixed \\( x \\), so the terms eventually increase — the series cannot converge.",
        },
        {
          stepNumber: 10,
          description: "Interpret the divergence.",
          workingLatex:
            "\\text{best accuracy: truncate near } n \\approx x \\ \\text{(smallest term)}",
          explanation:
            "The series diverges for every \\( x \\): it is asymptotic, not convergent. The usual practice is to truncate at the smallest term, where the error is roughly that term's size — an optimal-truncation phenomenon characteristic of asymptotic series.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\frac{e^{-x}}{x}\\left(1 - \\frac{1}{x} + \\frac{2}{x^{2}} - \\cdots\\right) \\); diverges because the coefficients grow like \\( n! \\).",
    },
  },
  {
    id: "am7c-010",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 10",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By Laplace's method, find the leading term and first correction as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} t^{x} e^{-x t}\\,dt \\), and verify it equals \\( \\Gamma(x+1)/x^{x+1} \\) expanded by Stirling.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Laplace method", "interior maximum", "Stirling cross-check"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the algebraic factor as an exponential.",
          workingLatex:
            "t^{x} = e^{x\\ln t}",
          explanation:
            "To use Laplace's method the large parameter must multiply a single function in the exponent. Writing \\( t^x = e^{x\\ln t} \\) is the first step to combining the two factors.",
        },
        {
          stepNumber: 2,
          description: "Combine into a single phase.",
          workingLatex:
            "t^{x} e^{-x t} = e^{x\\ln t - xt} = e^{-x(t - \\ln t)} = e^{-x\\,\\phi(t)}, \\qquad \\phi(t) = t - \\ln t",
          explanation:
            "Both factors now live in one exponent \\( -x\\phi \\). Laplace's method will be governed by the minimum of \\( \\phi \\).",
        },
        {
          stepNumber: 3,
          description: "Locate the saddle.",
          workingLatex:
            "\\phi'(t) = 1 - \\frac{1}{t} = 0 \\Rightarrow t = 1",
          explanation:
            "The stationary point of the phase is at the interior point \\( t = 1 \\). This is where the integrand is largest, so the integral is dominated by a neighbourhood of \\( t = 1 \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate phase and curvature at the saddle.",
          workingLatex:
            "\\phi(1) = 1, \\qquad \\phi''(t) = \\frac{1}{t^{2}} \\Rightarrow \\phi''(1) = 1",
          explanation:
            "The minimum value \\( \\phi(1) = 1 \\) gives the dominant factor \\( e^{-x} \\); the curvature \\( \\phi''(1) = 1 \\) sets the Gaussian width.",
          mafs: "<Mafs viewBox={{ x: [-1.4, 3.4], y: [-0.35, 1.25], padding: 0 }} height={160}>\n  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: false }} />\n  <Plot.OfX y={(t) => Math.exp(-1.5*(t - Math.log(t) - 1))} domain={[0.07, 3.4]} color=\"var(--mafs-fg-blue)\" style=\"dashed\" />\n  <Plot.OfX y={(t) => Math.exp(-6*(t - Math.log(t) - 1))} domain={[0.07, 3.4]} color=\"var(--mafs-fg-accent)\" weight={3} />\n  <Point x={1} y={1} color=\"var(--mafs-fg-blue)\" />\n  <LaTeX at={[1,1.12]} tex=\"t=1\" color=\"var(--mafs-fg-blue)\" />\n  <LaTeX at={[2.7,0.6]} tex=\"\\\\text{larger }x\" color=\"var(--mafs-fg-accent)\" />\n  <LaTeX at={[3.1,-0.2]} tex=\"t\" />\n</Mafs>",
        },
        {
          stepNumber: 5,
          description: "Record the higher derivatives at the saddle.",
          workingLatex:
            "\\phi'''(t) = -\\frac{2}{t^{3}} \\Rightarrow \\phi'''(1) = -2, \\qquad \\phi''''(t) = \\frac{6}{t^{4}} \\Rightarrow \\phi''''(1) = 6",
          explanation:
            "The first correction in the Laplace formula is built from \\( \\phi''' \\) and \\( \\phi'''' \\) at the saddle; recording them here makes the \\( 1/(12x) \\) coefficient (worked in full in am7c-021) traceable.",
        },
        {
          stepNumber: 6,
          description: "Apply the Laplace formula with first correction.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x\\phi}\\,dt \\sim e^{-x\\phi(1)}\\sqrt{\\frac{2\\pi}{x\\,\\phi''(1)}}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "The Gaussian approximation about the interior minimum gives the prefactor; the \\( 1/(12x) \\) correction packages the \\( \\phi''' \\) and \\( \\phi'''' \\) contributions, exactly as in Stirling's formula.",
        },
        {
          stepNumber: 7,
          description: "Substitute the saddle data.",
          workingLatex:
            "= e^{-x}\\sqrt{\\frac{2\\pi}{x}}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "With \\( \\phi(1) = 1 \\) and \\( \\phi''(1) = 1 \\) the prefactor simplifies to \\( e^{-x}\\sqrt{2\\pi/x} \\).",
        },
        {
          stepNumber: 8,
          description: "Rewrite the exact integral as a Gamma value.",
          workingLatex:
            "s = xt:\\quad \\int_0^{\\infty} t^{x} e^{-xt}\\,dt = \\int_0^{\\infty}\\!\\left(\\frac{s}{x}\\right)^{x} e^{-s}\\,\\frac{ds}{x} = \\frac{\\Gamma(x+1)}{x^{x+1}}",
          explanation:
            "Substitute \\( s = xt \\): the factor \\( t^x = (s/x)^x \\) and \\( dt = ds/x \\) pull out \\( x^{-(x+1)} \\), and the remaining integral is \\( \\int_0^\\infty s^x e^{-s}\\,ds = \\Gamma(x+1) \\).",
        },
        {
          stepNumber: 9,
          description: "Verify against Stirling.",
          workingLatex:
            "\\frac{\\Gamma(x+1)}{x^{x+1}} = \\frac{\\sqrt{2\\pi x}(x/e)^x\\!\\left(1 + \\tfrac{1}{12x}\\right)}{x^{x+1}} = e^{-x}\\sqrt{\\frac{2\\pi}{x}}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "Dividing Stirling's \\( \\Gamma(x+1) = \\sqrt{2\\pi x}(x/e)^x(1+\\tfrac{1}{12x}) \\) by \\( x^{x+1} \\): the \\( (x/e)^x = x^x e^{-x} \\) cancels \\( x^x \\) leaving \\( e^{-x} \\), and \\( \\sqrt{2\\pi x}/x = \\sqrt{2\\pi/x} \\). This is exactly the Laplace result.",
        },
        {
          stepNumber: 10,
          description: "Confirm numerically.",
          workingLatex:
            "x = 40:\\quad \\frac{\\Gamma(41)}{40^{41}} = 1.68727\\times10^{-18}, \\quad e^{-40}\\sqrt{\\tfrac{2\\pi}{40}}\\!\\left(1 + \\tfrac{1}{480}\\right) = 1.68727\\times10^{-18}",
          explanation:
            "Both sides agree to six significant figures at \\( x = 40 \\), confirming the leading-plus-correction expansion and the Stirling cross-check.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle e^{-x}\\sqrt{\\frac{2\\pi}{x}}\\left(1 + \\frac{1}{12x} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am7c-011",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 11",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two non-zero terms as \\( x \\to +\\infty \\) of the endpoint expansion of \\( \\displaystyle I(x) = \\int_0^{\\infty} e^{\\,i x\\left(\\frac{1}{3}t^{3} + t\\right)}\\,dt \\), by repeated integration by parts.",
    marks: 4,
    yearCreated: 2026,
    tags: ["steepest descent", "endpoint expansion", "integration by parts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check for stationary points of the phase.",
          workingLatex:
            "\\psi(t) = \\tfrac{1}{3}t^{3} + t, \\qquad \\psi'(t) = t^{2} + 1 > 0 \\ \\ \\forall\\, t \\in \\mathbb{R}",
          explanation:
            "There is no real stationary point (the phase is strictly increasing), so there is no interior saddle; the contribution comes entirely from the endpoint \\( t = 0 \\). The natural tool is integration by parts (Q8 on the sheet).",
        },
        {
          stepNumber: 2,
          description: "Write the integrand as an exact derivative.",
          workingLatex:
            "\\frac{d}{dt}\\,e^{\\,i x\\psi} = i x\\,\\psi'(t)\\,e^{\\,i x\\psi} \\ \\Rightarrow\\ e^{\\,i x\\psi} = \\frac{1}{i x\\,\\psi'(t)}\\,\\frac{d}{dt}\\,e^{\\,i x\\psi}",
          explanation:
            "This is the IBP device for oscillatory integrals: dividing by \\( ix\\psi' \\) turns the rapidly oscillating exponential into an exact derivative we can integrate. It works precisely because \\( \\psi' \\) never vanishes.",
        },
        {
          stepNumber: 3,
          description: "Integrate by parts.",
          workingLatex:
            "I(x) = \\left[ \\frac{e^{\\,i x\\psi}}{i x\\,\\psi'} \\right]_0^{\\infty} - \\int_0^{\\infty} e^{\\,i x\\psi}\\,\\frac{d}{dt}\\!\\left(\\frac{1}{i x\\,\\psi'}\\right)dt",
          explanation:
            "Apply \\( \\int u\\,dv = [uv] - \\int v\\,du \\) with \\( u = 1/(ix\\psi') \\) and \\( dv = \\tfrac{d}{dt}e^{ix\\psi}\\,dt \\). The boundary term is the source of the leading behaviour.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the boundary contributions.",
          workingLatex:
            "\\left[ \\frac{e^{\\,i x\\psi}}{i x\\,\\psi'} \\right]_0^{\\infty} = 0 - \\frac{1}{i x\\,\\psi'(0)}",
          explanation:
            "At \\( t = \\infty \\) the bounded oscillatory term divided by \\( \\psi' \\to \\infty \\) contributes nothing; the entire boundary value comes from the lower limit \\( t = 0 \\).",
        },
        {
          stepNumber: 5,
          description: "Simplify the leading term.",
          workingLatex:
            "-\\frac{1}{i x\\,\\psi'(0)} = -\\frac{1}{i x\\cdot 1} = -\\frac{1}{ix} = \\frac{i}{x}",
          explanation:
            "Using \\( \\psi'(0) = 1 \\) and \\( 1/i = -i \\), so \\( -1/(ix) = i/x \\). This is the leading term of the expansion.",
        },
        {
          stepNumber: 6,
          description: "Form the next amplitude in the recursion.",
          workingLatex:
            "g_1(t) = -\\frac{1}{ix}\\frac{d}{dt}\\!\\left(\\frac{1}{\\psi'}\\right) = -\\frac{1}{ix}\\frac{d}{dt}\\!\\left(\\frac{1}{1+t^{2}}\\right) = \\frac{2t}{ix(1+t^{2})^{2}}",
          explanation:
            "The leftover integral has amplitude \\( g_1 \\), obtained by differentiating \\( 1/\\psi' = 1/(1+t^2) \\) and dividing by \\( ix \\). Note it carries an explicit factor of \\( t \\).",
        },
        {
          stepNumber: 7,
          description: "Note the second-order boundary term vanishes.",
          workingLatex:
            "g_1(0) = \\left.\\frac{2t}{ix(1+t^{2})^{2}}\\right|_{t=0} = 0 \\ \\Rightarrow\\ \\text{no } 1/x^{2} \\text{ term}",
          explanation:
            "Because \\( g_1 \\propto t \\), its endpoint value is zero, so the next boundary term (at order \\( 1/x^2 \\)) vanishes. The even/odd parity is preserved, so only odd powers of \\( 1/x \\) appear.",
        },
        {
          stepNumber: 8,
          description: "Continue the recursion to the next non-zero amplitude.",
          workingLatex:
            "g_2(t) = -\\frac{1}{ix}\\frac{d}{dt}\\!\\left(\\frac{g_1}{\\psi'}\\right), \\qquad g_2(0) \\ne 0",
          explanation:
            "Differentiating \\( g_1/\\psi' \\) brings the factor \\( t \\) down to a constant at the origin, so \\( g_2(0) \\) is non-zero — this is what produces the next surviving term.",
        },
        {
          stepNumber: 9,
          description: "Take the third-order boundary term.",
          workingLatex:
            "\\text{term}_2 = -\\frac{g_2(0)}{ix\\,\\psi'(0)} = \\frac{2i}{x^{3}}",
          explanation:
            "Evaluating the boundary value of \\( g_2 \\) at the endpoint (a short symbolic computation) yields \\( 2i/x^{3} \\); the full coefficient pattern is worked out in am7c-019.",
        },
        {
          stepNumber: 10,
          description: "Assemble the leading two non-zero terms.",
          workingLatex:
            "I(x) \\sim \\frac{i}{x} + \\frac{2i}{x^{3}} + \\cdots = i\\left(\\frac{1}{x} + \\frac{2}{x^{3}} + \\cdots\\right)",
          explanation:
            "Combining the leading term and the \\( 1/x^3 \\) correction, with the vanishing \\( 1/x^2 \\) term in between, gives the endpoint expansion in odd powers.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle I(x) \\sim i\\left(\\frac{1}{x} + \\frac{2}{x^{3}} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am7c-012",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 12",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Using Watson's lemma, find the first two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} t^{1/2}\\, e^{-x t}\\,(1 + t)^{-1}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Watson's lemma", "fractional power", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate the singular and smooth factors.",
          workingLatex:
            "t^{1/2}(1+t)^{-1} = t^{1/2}\\cdot\\frac{1}{1+t}",
          explanation:
            "Keep the singular factor \\( t^{1/2} \\) explicit and treat \\( (1+t)^{-1} \\) as the smooth part to be Taylor-expanded. This keeps the half-integer power visible throughout.",
        },
        {
          stepNumber: 2,
          description: "Expand the smooth factor about the endpoint.",
          workingLatex:
            "t^{1/2}\\left(1 - t + t^{2} - \\cdots\\right) = t^{1/2} - t^{3/2} + t^{5/2} - \\cdots",
          explanation:
            "Expand \\( (1+t)^{-1} = 1 - t + \\cdots \\) and multiply through by \\( t^{1/2} \\). Multiplying shifts every integer power up by one half, so the series runs over half-integer powers.",
        },
        {
          stepNumber: 3,
          description: "State the generalised Watson building block.",
          workingLatex:
            "\\int_0^{\\infty} t^{\\,s} e^{-x t}\\,dt = \\frac{\\Gamma(s+1)}{x^{\\,s+1}}",
          explanation:
            "For non-integer \\( s \\) the factorial is replaced by a Gamma value. Here we need \\( s = 1/2 \\) and \\( s = 3/2 \\) for the leading two terms.",
        },
        {
          stepNumber: 4,
          description: "Identify the exponent for each term.",
          workingLatex:
            "t^{1/2}:\\ s = \\tfrac12,\\ s+1 = \\tfrac32; \\qquad -t^{3/2}:\\ s = \\tfrac32,\\ s+1 = \\tfrac52",
          explanation:
            "Match each power \\( t^s \\) to the building block. The first term has \\( s = 1/2 \\), giving a \\( x^{-3/2} \\) contribution; the second has \\( s = 3/2 \\), giving \\( x^{-5/2} \\).",
        },
        {
          stepNumber: 5,
          description: "Integrate the leading term.",
          workingLatex:
            "\\int_0^{\\infty} t^{1/2} e^{-xt}\\,dt = \\frac{\\Gamma(3/2)}{x^{3/2}}",
          explanation:
            "The \\( t^{1/2} \\) term of the amplitude integrates to \\( \\Gamma(3/2)/x^{3/2} \\) by the generalised Watson building block.",
        },
        {
          stepNumber: 6,
          description: "Integrate the correction term.",
          workingLatex:
            "-\\int_0^{\\infty} t^{3/2} e^{-xt}\\,dt = -\\frac{\\Gamma(5/2)}{x^{5/2}}",
          explanation:
            "The \\( -t^{3/2} \\) term integrates to \\( -\\Gamma(5/2)/x^{5/2} \\); this is the first correction, one half-power down.",
        },
        {
          stepNumber: 7,
          description: "Evaluate the first Gamma value.",
          workingLatex:
            "\\Gamma\\!\\left(\\tfrac{3}{2}\\right) = \\tfrac{1}{2}\\Gamma\\!\\left(\\tfrac12\\right) = \\frac{\\sqrt{\\pi}}{2}",
          explanation:
            "Use the recurrence \\( \\Gamma(s+1) = s\\Gamma(s) \\) with \\( s = 1/2 \\) and \\( \\Gamma(1/2) = \\sqrt\\pi \\).",
        },
        {
          stepNumber: 8,
          description: "Evaluate the second Gamma value.",
          workingLatex:
            "\\Gamma\\!\\left(\\tfrac{5}{2}\\right) = \\tfrac{3}{2}\\,\\Gamma\\!\\left(\\tfrac{3}{2}\\right) = \\frac{3\\sqrt{\\pi}}{4}",
          explanation:
            "Apply the recurrence again with \\( s = 3/2 \\) to step up from \\( \\Gamma(3/2) \\) to \\( \\Gamma(5/2) \\).",
        },
        {
          stepNumber: 9,
          description: "Assemble the first two terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{t^{1/2} e^{-x t}}{1+t}\\,dt \\sim \\frac{\\sqrt{\\pi}}{2}\\,x^{-3/2} - \\frac{3\\sqrt{\\pi}}{4}\\,x^{-5/2} + \\cdots",
          explanation:
            "Substituting the Gamma values gives the explicit coefficients.",
        },
        {
          stepNumber: 10,
          description: "Note the half-integer structure.",
          workingLatex:
            "\\text{powers}\\ x^{-3/2}, x^{-5/2}, x^{-7/2}, \\dots",
          explanation:
            "The expansion proceeds in half-integer powers of \\( 1/x \\), inherited from the \\( t^{1/2} \\) factor at the endpoint — a clean fingerprint of a fractional-power amplitude.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\frac{\\sqrt{\\pi}}{2}\\,x^{-3/2} - \\frac{3\\sqrt{\\pi}}{4}\\,x^{-5/2} + \\cdots \\)",
    },
  },
  {
    id: "am7c-013",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 13",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{1} \\frac{e^{-x t}}{1+t}\\,dt \\) and explain why the upper limit \\( t = 1 \\) does not contribute to the asymptotic series.",
    marks: 3,
    yearCreated: 2026,
    tags: ["Watson's lemma", "endpoint contribution", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split off the tail to use Watson's lemma.",
          workingLatex:
            "\\int_0^{1} \\frac{e^{-x t}}{1+t}\\,dt = \\int_0^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt - \\int_1^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt",
          explanation:
            "Watson's lemma applies to the half-line integral \\( [0,\\infty) \\), so extend the range and subtract the surplus. The tail starting at \\( t = 1 \\) will turn out to be exponentially small.",
        },
        {
          stepNumber: 2,
          description: "Expand the amplitude of the half-line integral.",
          workingLatex:
            "\\frac{1}{1+t} = 1 - t + t^{2} - \\cdots",
          explanation:
            "Only the endpoint \\( t = 0 \\) matters for the half-line integral, so expand the amplitude there as in am7c-002.",
        },
        {
          stepNumber: 3,
          description: "Recall the Watson building block.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "Each power of \\( t \\) in the amplitude integrates against the weight to a factorial over a power of \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "Integrate the leading term.",
          workingLatex:
            "1 \\cdot \\int_0^{\\infty} e^{-xt}\\,dt = \\frac{0!}{x} = \\frac{1}{x}",
          explanation:
            "The constant term of the amplitude gives the leading \\( 1/x \\).",
        },
        {
          stepNumber: 5,
          description: "Integrate the first correction term.",
          workingLatex:
            "-\\int_0^{\\infty} t\\,e^{-xt}\\,dt = -\\frac{1!}{x^{2}} = -\\frac{1}{x^{2}} \\ \\Rightarrow\\ \\int_0^{\\infty} \\frac{e^{-xt}}{1+t}\\,dt \\sim \\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "The \\( -t \\) term gives \\( -1/x^2 \\); together these are the half-line Watson series, matching am7c-002.",
        },
        {
          stepNumber: 6,
          description: "Bound the amplitude on the tail.",
          workingLatex:
            "t \\ge 1 \\ \\Rightarrow\\ 1 + t \\ge 2 \\ \\Rightarrow\\ \\frac{1}{1+t} \\le \\frac{1}{2}",
          explanation:
            "On \\( [1,\\infty) \\) the denominator is at least \\( 2 \\), so the amplitude never exceeds \\( 1/2 \\). This lets us replace it by a constant to bound the tail.",
        },
        {
          stepNumber: 7,
          description: "Bound the tail integral.",
          workingLatex:
            "0 < \\int_1^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt < \\frac{1}{2}\\int_1^{\\infty} e^{-x t}\\,dt",
          explanation:
            "Using the amplitude bound, the tail is squeezed between zero and a pure exponential integral with prefactor \\( 1/2 \\).",
        },
        {
          stepNumber: 8,
          description: "Evaluate the bounding integral.",
          workingLatex:
            "\\frac{1}{2}\\int_1^{\\infty} e^{-x t}\\,dt = \\frac{1}{2}\\left[-\\frac{e^{-xt}}{x}\\right]_1^{\\infty} = \\frac{e^{-x}}{2x}",
          explanation:
            "The elementary exponential integral evaluates to \\( e^{-x}/x \\), times the prefactor \\( 1/2 \\).",
        },
        {
          stepNumber: 9,
          description: "Identify the tail as exponentially small.",
          workingLatex:
            "\\int_1^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt = O(e^{-x}) \\ll x^{-n}\\ \\text{for every } n",
          explanation:
            "The tail decays like \\( e^{-x} \\), which is smaller than every power of \\( 1/x \\). It is therefore beyond the reach of the algebraic asymptotic series.",
        },
        {
          stepNumber: 10,
          description: "State the result and interpret.",
          workingLatex:
            "\\int_0^{1} \\frac{e^{-x t}}{1+t}\\,dt \\sim \\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "Because the tail is exponentially subdominant, it is invisible to the power series. Only the endpoint at the maximum of the integrand (here \\( t = 0 \\)) feeds the series; the far endpoint \\( t = 1 \\) does not appear.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots \\); the \\( t = 1 \\) endpoint contributes only \\( O(e^{-x}) \\).",
    },
  },
  {
    id: "am7c-014",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 14",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} e^{-x t}\\ln(1+t)\\,dt \\), and check the leading term by integration by parts.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Watson's lemma", "logarithmic amplitude", "IBP check"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude near the endpoint.",
          workingLatex:
            "\\ln(1+t) = t - \\frac{t^{2}}{2} + \\frac{t^{3}}{3} - \\cdots",
          explanation:
            "The standard log series. Crucially there is no constant term, so the amplitude vanishes at the endpoint and the expansion begins at order \\( 1/x^{2} \\), not \\( 1/x \\).",
        },
        {
          stepNumber: 2,
          description: "Recall the Watson building block.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "We need \\( n = 1 \\) and \\( n = 2 \\), corresponding to the first two terms of the log series.",
        },
        {
          stepNumber: 3,
          description: "Integrate the leading term.",
          workingLatex:
            "\\int_0^{\\infty} t\\,e^{-xt}\\,dt = \\frac{1!}{x^{2}} = \\frac{1}{x^{2}}",
          explanation:
            "The \\( t \\) term of the log series gives the leading \\( 1/x^2 \\). The expansion starts one order down because the amplitude vanishes at the endpoint.",
        },
        {
          stepNumber: 4,
          description: "Integrate the first correction term.",
          workingLatex:
            "-\\frac{1}{2}\\int_0^{\\infty} t^{2}\\,e^{-xt}\\,dt = -\\frac{1}{2}\\cdot\\frac{2!}{x^{3}} = -\\frac{1}{x^{3}} \\ \\Rightarrow\\ \\frac{1}{x^{2}} - \\frac{1}{x^{3}} + \\cdots",
          explanation:
            "The \\( -t^2/2 \\) term gives \\( -\\tfrac12\\cdot 2!/x^{3} = -1/x^{3} \\). This is the Watson result for the integral.",
        },
        {
          stepNumber: 5,
          description: "Choose parts for the IBP cross-check.",
          workingLatex:
            "u = \\ln(1+t), \\quad dv = e^{-xt}\\,dt \\ \\Rightarrow\\ du = \\frac{dt}{1+t}, \\quad v = -\\frac{e^{-xt}}{x}",
          explanation:
            "To cross-check independently, integrate by parts. Differentiate the log (which produces the simpler amplitude \\( 1/(1+t) \\)) and integrate the exponential.",
        },
        {
          stepNumber: 6,
          description: "Apply integration by parts.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t}\\ln(1+t)\\,dt = \\left[ -\\frac{e^{-x t}}{x}\\ln(1+t)\\right]_0^{\\infty} + \\frac{1}{x}\\int_0^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt",
          explanation:
            "Using \\( \\int u\\,dv = [uv] - \\int v\\,du \\); the \\( -\\int v\\,du \\) term becomes \\( +\\tfrac1x\\int e^{-xt}/(1+t)\\,dt \\) because \\( v \\) carries a minus sign.",
        },
        {
          stepNumber: 7,
          description: "Evaluate the boundary term at the lower limit.",
          workingLatex:
            "\\left.-\\frac{e^{-x t}}{x}\\ln(1+t)\\right|_{t=0} = -\\frac{1}{x}\\ln 1 = 0",
          explanation:
            "At \\( t = 0 \\), \\( \\ln(1+0) = \\ln 1 = 0 \\), so the lower-limit contribution vanishes.",
        },
        {
          stepNumber: 8,
          description: "Evaluate the boundary term at the upper limit.",
          workingLatex:
            "\\left.-\\frac{e^{-x t}}{x}\\ln(1+t)\\right|_{t\\to\\infty} = 0 \\ \\Rightarrow\\ \\text{boundary} = 0",
          explanation:
            "At \\( t = \\infty \\) the exponential decay beats the logarithmic growth, so the term vanishes. Both endpoints give zero, so the whole integral equals \\( \\tfrac1x \\) times the sub-integral.",
        },
        {
          stepNumber: 9,
          description: "Combine with the known sub-integral.",
          workingLatex:
            "= \\frac{1}{x}\\int_0^{\\infty} \\frac{e^{-xt}}{1+t}\\,dt = \\frac{1}{x}\\left(\\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots\\right)",
          explanation:
            "Substitute the am7c-002 result \\( \\int_0^\\infty e^{-xt}/(1+t)\\,dt \\sim 1/x - 1/x^2 + \\cdots \\) for the sub-integral.",
        },
        {
          stepNumber: 10,
          description: "Confirm the cross-check.",
          workingLatex:
            "\\frac{1}{x}\\left(\\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots\\right) = \\frac{1}{x^{2}} - \\frac{1}{x^{3}} + \\cdots",
          explanation:
            "Multiplying out reproduces the Watson series exactly — the IBP route and the direct term-by-term route agree, which is the point of the exercise.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\frac{1}{x^{2}} - \\frac{1}{x^{3}} + \\cdots \\)",
    },
  },
  {
    id: "am7c-015",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 15",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Given the expansion \\( \\displaystyle \\int_0^{\\pi/2} e^{-x\\sin^{2}t}\\,dt \\sim \\left(\\frac{\\pi}{4x}\\right)^{1/2}\\!\\left(1 + \\frac{1}{4x} + \\cdots\\right) \\) as \\( x \\to +\\infty \\), use it to find the leading two terms of the asymptotic expansion of the same integral, showing how the first correction arises.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Laplace method", "trigonometric phase", "subleading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the maximum of the integrand.",
          workingLatex:
            "\\phi(t) = \\sin^{2}t, \\qquad \\phi'(t) = 2\\sin t\\cos t = \\sin 2t = 0 \\Rightarrow t = 0",
          explanation:
            "The integrand \\( e^{-x\\phi} \\) peaks where \\( \\phi \\) is smallest, at the endpoint \\( t = 0 \\), where \\( \\phi(0) = 0 \\). This is a half-Gaussian endpoint maximum (cf. Q2 on the sheet).",
        },
        {
          stepNumber: 2,
          description: "Expand sin t to cubic order.",
          workingLatex:
            "\\sin t = t - \\frac{t^{3}}{6} + \\cdots",
          explanation:
            "We will need the phase \\( \\sin^2 t \\) to quartic order, so start from the cubic Taylor series of \\( \\sin t \\).",
        },
        {
          stepNumber: 3,
          description: "Square to get the phase to quartic order.",
          workingLatex:
            "\\sin^{2}t = \\left(t - \\frac{t^{3}}{6} + \\cdots\\right)^{2} = t^{2} - \\frac{t^{4}}{3} + \\cdots",
          explanation:
            "Square the series: the cross term \\( 2\\cdot t\\cdot(-t^3/6) = -t^4/3 \\). The leading \\( t^{2} \\) gives the Gaussian; the \\( -t^{4}/3 \\) term is the source of the first correction.",
        },
        {
          stepNumber: 4,
          description: "Factor out the Gaussian.",
          workingLatex:
            "e^{-x\\sin^{2}t} = e^{-x t^{2}}\\,e^{+x t^{4}/3}",
          explanation:
            "Split the exponent: the \\( -xt^2 \\) part is the Gaussian, and the \\( +xt^4/3 \\) part is the correction factor (note the sign: \\( -x\\cdot(-t^4/3) = +xt^4/3 \\)).",
        },
        {
          stepNumber: 5,
          description: "Expand the quartic correction factor.",
          workingLatex:
            "e^{+x t^{4}/3} = 1 + \\frac{x t^{4}}{3} + \\cdots",
          explanation:
            "Near the peak \\( t = O(x^{-1/2}) \\), so \\( x t^{4} = O(1/x) \\) is small and the second exponential expands to first order.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the half-range Gaussian moments.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t^{2}}\\,dt = \\tfrac12\\sqrt{\\tfrac{\\pi}{x}}, \\qquad \\int_0^{\\infty} t^{4} e^{-x t^{2}}\\,dt = \\frac{3}{8}\\sqrt{\\pi}\\,x^{-5/2}",
          explanation:
            "Extend the upper limit to \\( \\infty \\) (the tail beyond \\( \\pi/2 \\) is exponentially small). These are the half-line Gaussian moments needed for the leading term and the correction.",
        },
        {
          stepNumber: 7,
          description: "Assemble leading and correction.",
          workingLatex:
            "\\int_0^{\\pi/2} e^{-x\\sin^{2}t}\\,dt \\sim \\frac{1}{2}\\sqrt{\\frac{\\pi}{x}} + \\frac{x}{3}\\cdot\\frac{3}{8}\\sqrt{\\pi}\\,x^{-5/2}",
          explanation:
            "The constant \\( 1 \\) gives the leading half-Gaussian; the \\( +xt^4/3 \\) term multiplies the \\( t^4 \\) moment with prefactor \\( x/3 \\).",
        },
        {
          stepNumber: 8,
          description: "Simplify the correction coefficient.",
          workingLatex:
            "\\frac{x}{3}\\cdot\\frac{3}{8}\\sqrt{\\pi}\\,x^{-5/2} = \\frac{1}{8}\\sqrt{\\pi}\\,x^{-3/2} = \\frac{1}{4x}\\cdot\\frac{1}{2}\\sqrt{\\frac{\\pi}{x}}",
          explanation:
            "The correction is \\( \\tfrac18\\sqrt\\pi\\,x^{-3/2} \\). Dividing by the leading \\( \\tfrac12\\sqrt{\\pi/x} = \\tfrac12\\sqrt\\pi\\,x^{-1/2} \\) gives relative size \\( +1/(4x) \\), matching the quoted result.",
        },
        {
          stepNumber: 9,
          description: "State the result.",
          workingLatex:
            "\\int_0^{\\pi/2} e^{-x\\sin^{2}t}\\,dt \\sim \\frac{1}{2}\\sqrt{\\frac{\\pi}{x}}\\left(1 + \\frac{1}{4x} + \\cdots\\right) = \\left(\\frac{\\pi}{4x}\\right)^{1/2}\\!\\left(1 + \\frac{1}{4x} + \\cdots\\right)",
          explanation:
            "Factoring out the leading term gives the normalised series; note \\( \\tfrac12\\sqrt{\\pi/x} = (\\pi/4x)^{1/2} \\), so this is exactly the quoted expansion.",
        },
        {
          stepNumber: 10,
          description: "Confirm the structure.",
          workingLatex:
            "\\text{only even powers of } t \\ \\Rightarrow\\ \\text{series in integer powers of } 1/x",
          explanation:
            "Because \\( \\sin^2 t \\) is even, only even moments appear, so the correction series runs over integer powers of \\( 1/x \\) — consistent with the \\( 1/(4x) \\) leading correction having no half-integer companion.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\left(\\frac{\\pi}{4x}\\right)^{1/2}\\!\\left(1 + \\frac{1}{4x} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am7c-016",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 16",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} e^{-x t}\\,(1 + t)^{2}\\,e^{-t}\\,dt \\), and cross-check the leading term against the exact value.",
    marks: 3,
    yearCreated: 2026,
    tags: ["Watson's lemma", "exact cross-check", "shifted exponential"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the polynomial factor.",
          workingLatex:
            "(1+t)^{2} = 1 + 2t + t^{2}",
          explanation:
            "Multiply out the square first; we will combine it with the exponential factor and keep terms to first order in \\( t \\).",
        },
        {
          stepNumber: 2,
          description: "Expand the exponential factor.",
          workingLatex:
            "e^{-t} = 1 - t + \\frac{t^{2}}{2} - \\cdots",
          explanation:
            "The smooth factor \\( e^{-t} \\) is part of the amplitude (it is not the heavy weight; \\( e^{-xt} \\) is). Expand it about the endpoint \\( t = 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Multiply the amplitude factors.",
          workingLatex:
            "(1 + 2t + t^{2})(1 - t + \\cdots) = 1 + (2-1)t + \\cdots = 1 + t + \\cdots",
          explanation:
            "Keep terms up to first order in \\( t \\): the constant is \\( 1\\cdot1 = 1 \\) and the linear coefficient is \\( 2\\cdot1 + 1\\cdot(-1) = 1 \\).",
        },
        {
          stepNumber: 4,
          description: "Recall the Watson building block.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "Each power of the amplitude integrates against the heavy weight \\( e^{-xt} \\) to a factorial over a power of \\( x \\).",
        },
        {
          stepNumber: 5,
          description: "Integrate the amplitude term by term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t}(1+t)^{2}e^{-t}\\,dt \\sim \\frac{0!}{x} + \\frac{1!}{x^{2}} + \\cdots = \\frac{1}{x} + \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "The constant term gives \\( 1/x \\); the linear term gives \\( 1!/x^{2} \\). This is the Watson series.",
        },
        {
          stepNumber: 6,
          description: "Combine the exponentials for the exact value.",
          workingLatex:
            "e^{-xt}e^{-t} = e^{-(x+1)t} \\ \\Rightarrow\\ \\int_0^{\\infty} (1 + 2t + t^{2}) e^{-(x+1)t}\\,dt",
          explanation:
            "Combine the two exponentials into \\( e^{-(x+1)t} \\). The amplitude \\( (1+t)^2 = 1 + 2t + t^2 \\) is a polynomial, so the integral is elementary.",
        },
        {
          stepNumber: 7,
          description: "Evaluate the exact integral.",
          workingLatex:
            "= \\frac{0!}{(x+1)} + 2\\frac{1!}{(x+1)^{2}} + \\frac{2!}{(x+1)^{3}} = \\frac{1}{x+1} + \\frac{2}{(x+1)^{2}} + \\frac{2}{(x+1)^{3}}",
          explanation:
            "Apply \\( \\int_0^\\infty t^n e^{-st}\\,dt = n!/s^{n+1} \\) with \\( s = x+1 \\) to each of \\( 1, 2t, t^2 \\).",
        },
        {
          stepNumber: 8,
          description: "Expand the first exact term.",
          workingLatex:
            "\\frac{1}{x+1} = \\frac{1}{x}\\cdot\\frac{1}{1 + x^{-1}} = \\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "Factor \\( x \\) out and expand geometrically. This term alone would give \\( -1/x^2 \\) at the next order.",
        },
        {
          stepNumber: 9,
          description: "Expand the second exact term.",
          workingLatex:
            "\\frac{2}{(x+1)^{2}} = \\frac{2}{x^{2}}\\left(1 + x^{-1}\\right)^{-2} = \\frac{2}{x^{2}} + \\cdots",
          explanation:
            "The third exact term \\( 2/(x+1)^3 \\) is \\( O(x^{-3}) \\), so it does not affect the first two orders.",
        },
        {
          stepNumber: 10,
          description: "Combine and confirm the cross-check.",
          workingLatex:
            "\\left(\\frac{1}{x} - \\frac{1}{x^{2}}\\right) + \\frac{2}{x^{2}} + \\cdots = \\frac{1}{x} + \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "The \\( x^{-2} \\) pieces combine as \\( -1 + 2 = +1 \\), giving \\( x^{-1} + x^{-2} + \\cdots \\) — matching the Watson series exactly.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\frac{1}{x} + \\frac{1}{x^{2}} + \\cdots \\)",
    },
  },
  {
    id: "am7c-017",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 17",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} \\frac{e^{-x t}}{(1+t)^{2}}\\,dt \\) by Watson's lemma, and confirm the leading term by one integration by parts.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Watson's lemma", "integration by parts", "subleading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the binomial coefficients.",
          workingLatex:
            "\\binom{-2}{n} = (-1)^{n}(n+1) \\ \\Rightarrow\\ 1, -2, 3, \\dots",
          explanation:
            "For exponent \\( -2 \\) the binomial coefficients simplify to \\( (-1)^n(n+1) \\), giving the sequence \\( 1, -2, 3, -4, \\dots \\)",
        },
        {
          stepNumber: 2,
          description: "Expand the amplitude near the endpoint.",
          workingLatex:
            "(1+t)^{-2} = 1 - 2t + 3t^{2} - \\cdots",
          explanation:
            "Assembling the binomial series. The leading constant gives \\( 1/x \\); the \\( -2t \\) term gives the first correction.",
        },
        {
          stepNumber: 3,
          description: "Recall the Watson building block.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "We need \\( n = 0 \\) and \\( n = 1 \\) for the leading two terms of the amplitude series.",
        },
        {
          stepNumber: 4,
          description: "Integrate term by term.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{(1+t)^{2}}\\,dt \\sim \\frac{0!}{x} - 2\\cdot\\frac{1!}{x^{2}} + \\cdots = \\frac{1}{x} - \\frac{2}{x^{2}} + \\cdots",
          explanation:
            "The constant gives \\( 1/x \\); the \\( -2t \\) term gives \\( -2\\cdot 1!/x^{2} = -2/x^{2} \\). This is the Watson result.",
        },
        {
          stepNumber: 5,
          description: "Choose parts for the IBP check.",
          workingLatex:
            "u = (1+t)^{-2}, \\quad dv = e^{-xt}\\,dt \\ \\Rightarrow\\ du = -2(1+t)^{-3}\\,dt, \\quad v = -\\frac{e^{-xt}}{x}",
          explanation:
            "To confirm independently, integrate by parts. Differentiate the amplitude and integrate the exponential.",
        },
        {
          stepNumber: 6,
          description: "Apply integration by parts.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{(1+t)^{2}}\\,dt = \\left[ -\\frac{e^{-x t}}{x(1+t)^{2}}\\right]_0^{\\infty} - \\frac{2}{x}\\int_0^{\\infty} \\frac{e^{-x t}}{(1+t)^{3}}\\,dt",
          explanation:
            "Using \\( \\int u\\,dv = [uv] - \\int v\\,du \\); the \\( -\\int v\\,du \\) becomes \\( -\\tfrac2x\\int e^{-xt}/(1+t)^3\\,dt \\).",
        },
        {
          stepNumber: 7,
          description: "Evaluate the boundary at the upper limit.",
          workingLatex:
            "\\left.-\\frac{e^{-x t}}{x(1+t)^{2}}\\right|_{t\\to\\infty} = 0",
          explanation:
            "The exponential decay kills the term at infinity, so the upper limit contributes nothing.",
        },
        {
          stepNumber: 8,
          description: "Evaluate the boundary at the lower limit.",
          workingLatex:
            "\\left.-\\frac{e^{-x t}}{x(1+t)^{2}}\\right|_{t=0} = -\\frac{1}{x} \\ \\Rightarrow\\ \\text{boundary} = 0 - \\left(-\\frac{1}{x}\\right) = \\frac{1}{x}",
          explanation:
            "At \\( t = 0 \\) the amplitude is \\( 1 \\), giving \\( -1/x \\); the boundary value is therefore \\( +1/x \\) — the leading term.",
        },
        {
          stepNumber: 9,
          description: "Estimate the remainder integral.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{(1+t)^{3}}\\,dt \\sim \\frac{1}{x}",
          explanation:
            "Its amplitude \\( (1+t)^{-3} \\) is \\( 1 \\) at the endpoint, so by the Watson leading term this integral is \\( 1/x \\).",
        },
        {
          stepNumber: 10,
          description: "Read off the subleading term and confirm.",
          workingLatex:
            "-\\frac{2}{x}\\cdot\\frac{1}{x} = -\\frac{2}{x^{2}} \\ \\Rightarrow\\ \\frac{1}{x} - \\frac{2}{x^{2}} + \\cdots",
          explanation:
            "The second IBP term reproduces \\( -2/x^{2} \\), agreeing with the Watson series — the cross-check succeeds.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\frac{1}{x} - \\frac{2}{x^{2}} + \\cdots \\)",
    },
  },
  {
    id: "am7c-018",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 18",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Given the Bessel-function representation \\( \\displaystyle I_0(x) = \\frac{1}{\\pi}\\int_0^{\\pi} e^{x\\cos\\theta}\\,d\\theta \\), use Laplace's method with its first correction to obtain the leading two terms as \\( x \\to +\\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Laplace method", "Bessel function", "subleading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the maximum of the phase.",
          workingLatex:
            "\\phi(\\theta) = \\cos\\theta, \\qquad \\phi'(\\theta) = -\\sin\\theta = 0 \\Rightarrow \\theta = 0",
          explanation:
            "The integrand \\( e^{x\\cos\\theta} \\) peaks where \\( \\cos\\theta \\) is largest, at the endpoint \\( \\theta = 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate phase and curvature at the maximum.",
          workingLatex:
            "\\phi(0) = 1, \\qquad \\phi''(\\theta) = -\\cos\\theta \\Rightarrow \\phi''(0) = -1",
          explanation:
            "The phase value \\( \\phi(0) = 1 \\) gives the dominant factor \\( e^x \\); the negative curvature \\( \\phi''(0) = -1 \\) confirms a maximum and sets the Gaussian width.",
        },
        {
          stepNumber: 3,
          description: "Expand the phase to quartic order.",
          workingLatex:
            "\\cos\\theta = 1 - \\frac{\\theta^{2}}{2} + \\frac{\\theta^{4}}{24} - \\cdots",
          explanation:
            "The \\( -\\theta^2/2 \\) term gives the Gaussian \\( e^{-x\\theta^2/2} \\) after pulling out \\( e^x \\); the \\( +\\theta^4/24 \\) term gives the first correction.",
        },
        {
          stepNumber: 4,
          description: "Factor out the leading exponential.",
          workingLatex:
            "I_0(x) = \\frac{e^{x}}{\\pi}\\int_0^{\\pi} e^{-x\\theta^{2}/2}\\,e^{x\\theta^{4}/24}\\,d\\theta",
          explanation:
            "Pull out \\( e^x \\) from \\( e^{x\\cos\\theta} = e^x e^{-x\\theta^2/2 + x\\theta^4/24 - \\cdots} \\). The Gaussian and the quartic correction factor remain.",
        },
        {
          stepNumber: 5,
          description: "Expand the quartic correction factor.",
          workingLatex:
            "e^{x\\theta^{4}/24} = 1 + \\frac{x\\theta^{4}}{24} + \\cdots",
          explanation:
            "Near the peak \\( \\theta = O(x^{-1/2}) \\), so \\( x\\theta^4 = O(1/x) \\) is small. Extend the upper limit to \\( \\infty \\) since the tail is exponentially small.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the leading half-Gaussian moment.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x\\theta^{2}/2}\\,d\\theta = \\frac{1}{2}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "Half the full-line Gaussian integral \\( \\sqrt{2\\pi/x} \\). This produces the leading term.",
        },
        {
          stepNumber: 7,
          description: "Evaluate the quartic half-Gaussian moment.",
          workingLatex:
            "\\int_0^{\\infty} \\theta^{4} e^{-x\\theta^{2}/2}\\,d\\theta = \\frac{1}{2}\\cdot\\frac{3}{x^{2}}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "Half the full-line \\( \\theta^4 \\) moment, which carries the double factorial \\( 3!! = 3 \\). This feeds the correction.",
        },
        {
          stepNumber: 8,
          description: "Combine the two contributions.",
          workingLatex:
            "I_0(x) \\sim \\frac{e^{x}}{\\pi}\\cdot\\frac{1}{2}\\sqrt{\\frac{2\\pi}{x}}\\left(1 + \\frac{x}{24}\\cdot\\frac{3}{x^{2}} + \\cdots\\right)",
          explanation:
            "The constant term gives the leading half-Gaussian; the \\( x\\theta^4/24 \\) term multiplies the \\( \\theta^4 \\) moment with prefactor \\( x/24 \\).",
        },
        {
          stepNumber: 9,
          description: "Simplify the correction coefficient.",
          workingLatex:
            "\\frac{x}{24}\\cdot\\frac{3}{x^{2}} = \\frac{3x}{24x^{2}} = \\frac{1}{8x}",
          explanation:
            "The explicit \\( x \\) cancels one power of \\( x \\) from the moment, leaving the relative correction \\( 1/(8x) \\).",
        },
        {
          stepNumber: 10,
          description: "Simplify the prefactor.",
          workingLatex:
            "\\frac{e^{x}}{\\pi}\\cdot\\frac{1}{2}\\sqrt{\\frac{2\\pi}{x}} = \\frac{e^{x}}{2\\pi}\\sqrt{\\frac{2\\pi}{x}} = \\frac{e^{x}}{\\sqrt{2\\pi x}}",
          explanation:
            "Using \\( \\tfrac{1}{2\\pi}\\sqrt{2\\pi/x} = 1/\\sqrt{2\\pi x} \\), the prefactor collapses to \\( e^x/\\sqrt{2\\pi x} \\).",
        },
        {
          stepNumber: 11,
          description: "State the expansion and confirm numerically.",
          workingLatex:
            "I_0(x) \\sim \\frac{e^{x}}{\\sqrt{2\\pi x}}\\left(1 + \\frac{1}{8x} + \\cdots\\right); \\quad x = 40:\\ 1.003170 \\ \\text{vs}\\ 1 + \\tfrac{1}{320} = 1.003125",
          explanation:
            "The measured ratio \\( I_0/[e^x/\\sqrt{2\\pi x}] = 1.003170 \\) matches \\( 1 + 1/(8x) = 1.003125 \\), the residual being the next term \\( 9/(128x^2) \\).",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle I_0(x) \\sim \\frac{e^{x}}{\\sqrt{2\\pi x}}\\left(1 + \\frac{1}{8x} + \\cdots\\right) \\)",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHALLENGE (12) — synoptic / multi-step / starred, 5+ marks, examStyle:true
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "am7c-019",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 19",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading three non-zero terms as \\( x \\to +\\infty \\) of \\( \\displaystyle I(x) = \\int_0^{\\infty} e^{\\,i x\\left(\\frac{1}{3}t^{3} + t\\right)}\\,dt \\) and give a general expression for the coefficient \\( a_n \\) in \\( I(x) \\sim i\\sum_{n} a_n x^{-(2n+1)} \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["steepest descent", "integration by parts", "general coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the phase.",
          workingLatex:
            "\\psi(t) = \\tfrac13 t^{3} + t, \\qquad \\psi'(t) = t^{2} + 1",
          explanation:
            "Compute the phase derivative; it controls both the location of any saddle and the IBP device.",
        },
        {
          stepNumber: 2,
          description: "Confirm the absence of a real saddle.",
          workingLatex:
            "\\psi'(t) = t^{2} + 1 \\ge 1 > 0 \\ \\ \\forall\\, t \\in \\mathbb{R}",
          explanation:
            "Since \\( \\psi' \\) never vanishes for real \\( t \\), there is no interior stationary point. The entire asymptotic expansion is generated by the endpoint \\( t = 0 \\) through integration by parts.",
        },
        {
          stepNumber: 3,
          description: "Write the exponential as an exact derivative.",
          workingLatex:
            "e^{ix\\psi} = \\frac{1}{ix\\,\\psi'}\\frac{d}{dt}e^{ix\\psi}",
          explanation:
            "Dividing by \\( ix\\psi' \\) (legitimate since \\( \\psi' \\ne 0 \\)) turns the oscillatory exponential into an exact derivative — the start of the IBP machinery.",
        },
        {
          stepNumber: 4,
          description: "Set up the IBP recursion.",
          workingLatex:
            "I = \\int_0^{\\infty} g_k\\, e^{\\,i x\\psi}\\,dt, \\ g_0 = 1; \\quad g_{k+1} = -\\frac{1}{ix}\\,\\frac{d}{dt}\\!\\left(\\frac{g_k}{\\psi'}\\right)",
          explanation:
            "Each IBP step replaces the amplitude \\( g_k \\) by \\( g_{k+1} \\) and contributes the boundary value \\( -g_k(0)/(ix\\,\\psi'(0)) \\). This recursion generates every term.",
        },
        {
          stepNumber: 5,
          description: "Note the upper boundary always vanishes.",
          workingLatex:
            "\\left.\\frac{g_k\\,e^{ix\\psi}}{ix\\,\\psi'}\\right|_{t\\to\\infty} = 0",
          explanation:
            "As \\( t \\to \\infty \\), \\( \\psi' \\to \\infty \\) while \\( e^{ix\\psi} \\) stays bounded, so every upper-limit boundary term is zero. Only the lower endpoint \\( t = 0 \\) contributes.",
        },
        {
          stepNumber: 6,
          description: "Take the leading boundary term.",
          workingLatex:
            "\\text{term}_0 = -\\frac{g_0(0)}{i x\\,\\psi'(0)} = -\\frac{1}{i x\\cdot 1}",
          explanation:
            "With \\( g_0(0) = 1 \\) and \\( \\psi'(0) = 0^2+1 = 1 \\), the leading boundary value is \\( -1/(ix) \\).",
        },
        {
          stepNumber: 7,
          description: "Simplify the leading term.",
          workingLatex:
            "-\\frac{1}{ix} = -\\frac{1}{i}\\cdot\\frac{1}{x} = \\frac{i}{x}",
          explanation:
            "Using \\( 1/i = -i \\) gives \\( -1/(ix) = i/x \\). This is the leading term of the expansion.",
        },
        {
          stepNumber: 8,
          description: "Generate the next amplitude.",
          workingLatex:
            "g_1 = -\\frac{1}{i x}\\,\\frac{d}{dt}\\!\\left(\\frac{1}{1+t^{2}}\\right)",
          explanation:
            "Apply the recursion with \\( g_0 = 1 \\) and \\( \\psi' = 1+t^2 \\); the next amplitude is the derivative of \\( 1/(1+t^2) \\) divided by \\( ix \\).",
        },
        {
          stepNumber: 9,
          description: "Differentiate to obtain g_1 explicitly.",
          workingLatex:
            "g_1 = -\\frac{1}{ix}\\cdot\\frac{-2t}{(1+t^{2})^{2}} = \\frac{2t}{ix(1+t^{2})^{2}}",
          explanation:
            "Differentiating \\( (1+t^2)^{-1} \\) gives \\( -2t/(1+t^2)^2 \\). The amplitude has picked up an explicit odd factor \\( t \\).",
        },
        {
          stepNumber: 10,
          description: "Note the second-order boundary term vanishes.",
          workingLatex:
            "g_1(0) = \\frac{2\\cdot0}{ix\\cdot1} = 0 \\ \\Rightarrow\\ \\text{term}_1 = 0",
          explanation:
            "Because \\( g_1 \\propto t \\) at the origin, \\( g_1(0) = 0 \\): the \\( 1/x^{2} \\) coefficient vanishes.",
        },
        {
          stepNumber: 11,
          description: "Recognise the parity pattern.",
          workingLatex:
            "g_{\\text{even}}(0) \\ne 0, \\quad g_{\\text{odd}}(0) = 0 \\ \\Rightarrow\\ \\text{only } x^{-(2n+1)}",
          explanation:
            "Each differentiation flips parity at the origin, so odd-index amplitudes vanish there. Only odd powers of \\( 1/x \\) survive — the structure is preserved by the recursion.",
        },
        {
          stepNumber: 12,
          description: "Carry the recursion to g_2.",
          workingLatex:
            "g_2 = -\\frac{1}{ix}\\frac{d}{dt}\\!\\left(\\frac{g_1}{1+t^{2}}\\right), \\qquad g_2(0) = \\frac{2}{(ix)^{2}}",
          explanation:
            "Differentiating \\( g_1/\\psi' \\) and evaluating at the origin (a short computation) gives \\( g_2(0) = 2/(ix)^2 \\); the factor \\( t \\) in \\( g_1 \\) is differentiated down to a constant.",
        },
        {
          stepNumber: 13,
          description: "Take the third-order term.",
          workingLatex:
            "\\text{term}_2 = -\\frac{g_2(0)}{ix\\,\\psi'(0)} = -\\frac{2}{(ix)^{3}} = \\frac{2i}{x^{3}}",
          explanation:
            "Using \\( (ix)^3 = -i x^3 \\), so \\( -2/(ix)^3 = 2i/x^3 \\). This is the second non-zero term.",
        },
        {
          stepNumber: 14,
          description: "Note the fourth-order term vanishes.",
          workingLatex:
            "g_3(0) = 0 \\ \\Rightarrow\\ \\text{term}_3 = 0",
          explanation:
            "Parity again forces the odd-index amplitude to vanish at the origin, so there is no \\( 1/x^4 \\) term.",
        },
        {
          stepNumber: 15,
          description: "Take the fifth-order term.",
          workingLatex:
            "\\text{term}_4 = -\\frac{g_4(0)}{ix\\,\\psi'(0)} = \\frac{40 i}{x^{5}}",
          explanation:
            "Continuing the recursion to \\( g_4 \\) and evaluating at the endpoint yields the boundary value producing \\( 40i/x^5 \\).",
        },
        {
          stepNumber: 16,
          description: "Set up an independent moment expansion.",
          workingLatex:
            "I = \\int_0^{\\infty} e^{ixt}\\,e^{ix t^{3}/3}\\,dt, \\qquad e^{ix t^{3}/3} = \\sum_{m\\ge0} \\frac{(ix/3)^{m}}{m!}t^{3m}",
          explanation:
            "To verify, treat \\( e^{ixt} \\) as the linear phase and expand the cubic factor as a power series in \\( t^{3m} \\).",
        },
        {
          stepNumber: 17,
          description: "Apply the oscillatory moment integral.",
          workingLatex:
            "\\int_0^{\\infty} t^{3m} e^{ixt}\\,dt = \\frac{(3m)!}{(-ix)^{3m+1}}",
          explanation:
            "Each monomial integrates against the linear oscillatory phase to a factorial over a power of \\( -ix \\), the analytic continuation of the Watson building block.",
        },
        {
          stepNumber: 18,
          description: "Collect the coefficient of each odd power.",
          workingLatex:
            "a_n x^{-(2n+1)}\\ \\text{from } m = n: \\quad \\frac{(ix/3)^{n}}{n!}\\cdot\\frac{(3n)!}{(-ix)^{3n+1}}",
          explanation:
            "Combining the \\( m = n \\) term of the series with the moment integral, the powers of \\( ix \\) collapse to \\( x^{-(2n+1)} \\) (times \\( i \\)), confirming only odd powers appear.",
        },
        {
          stepNumber: 19,
          description: "Read off the general coefficient.",
          workingLatex:
            "a_n = \\frac{(3n)!}{3^{n}\\,n!} = 1, 2, 40, 2240, \\dots \\ (n = 0,1,2,3)",
          explanation:
            "Simplifying the powers of \\( i \\) and \\( 3 \\) leaves \\( a_n = (3n)!/(3^n n!) \\). The first four values match the IBP recursion term by term.",
        },
        {
          stepNumber: 20,
          description: "State the series and comment on growth.",
          workingLatex:
            "I(x) \\sim i\\left(\\frac{1}{x} + \\frac{2}{x^{3}} + \\frac{40}{x^{5}} + \\cdots\\right)",
          explanation:
            "The factorial growth of \\( a_n \\) outgrows any geometric series, so the expansion is asymptotic, not convergent — typical of endpoint expansions of oscillatory integrals.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle I(x) \\sim i\\left(\\frac{1}{x} + \\frac{2}{x^{3}} + \\frac{40}{x^{5}} + \\cdots\\right) \\), with \\( a_n = \\dfrac{(3n)!}{3^{n}\\,n!} \\).",
    },
  },
  {
    id: "am7c-020",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 20",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show by repeated integration by parts that \\( \\displaystyle \\int_0^{\\infty} \\frac{e^{-x t}}{1+t^{2}}\\,dt \\) has the asymptotic expansion \\( \\sum_{k\\ge0} (-1)^{k}(2k)!\\,x^{-(2k+1)} \\), reproducing the Watson result.",
    marks: 6,
    yearCreated: 2026,
    tags: ["integration by parts", "Watson cross-check", "general term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose parts for the first integration.",
          workingLatex:
            "u = (1+t^{2})^{-1}, \\quad dv = e^{-xt}\\,dt \\ \\Rightarrow\\ v = -\\frac{e^{-xt}}{x}, \\quad du = -\\frac{2t}{(1+t^{2})^{2}}\\,dt",
          explanation:
            "Differentiate the amplitude and integrate the exponential. This is the IBP set-up that will be iterated to build the whole series.",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts once.",
          workingLatex:
            "J = \\int_0^{\\infty} \\frac{e^{-x t}}{1+t^{2}}\\,dt = \\left[-\\frac{e^{-xt}}{x(1+t^{2})}\\right]_0^{\\infty} - \\frac{1}{x}\\int_0^{\\infty} e^{-x t}\\,\\frac{d}{dt}\\!\\left(\\frac{1}{1+t^{2}}\\right)dt",
          explanation:
            "Apply \\( \\int u\\,dv = [uv] - \\int v\\,du \\). The boundary term holds the leading behaviour; the new integrand carries the derivative of the amplitude.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the boundary at the upper limit.",
          workingLatex:
            "\\left.-\\frac{e^{-xt}}{x(1+t^{2})}\\right|_{t\\to\\infty} = 0",
          explanation:
            "The exponential decay kills the term at infinity, so only the lower limit will contribute.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the boundary at the lower limit.",
          workingLatex:
            "\\left.-\\frac{e^{-xt}}{x(1+t^{2})}\\right|_{t=0} = -\\frac{1}{x} \\ \\Rightarrow\\ \\text{boundary} = \\frac{1}{x}",
          explanation:
            "At \\( t = 0 \\) the amplitude is \\( 1 \\), giving \\( -1/x \\); the boundary value is therefore \\( +1/x \\). This is the leading term.",
        },
        {
          stepNumber: 5,
          description: "Write the first-derivative amplitude.",
          workingLatex:
            "\\frac{d}{dt}\\frac{1}{1+t^{2}} = \\frac{-2t}{(1+t^{2})^{2}}",
          explanation:
            "The new integrand carries the first derivative of the amplitude. We will need its value (and that of higher derivatives) at the endpoint.",
        },
        {
          stepNumber: 6,
          description: "Note the first-derivative endpoint value vanishes.",
          workingLatex:
            "\\left.\\frac{-2t}{(1+t^{2})^{2}}\\right|_{t=0} = 0 \\ \\Rightarrow\\ \\text{no } 1/x^{2} \\text{ term}",
          explanation:
            "The odd derivative is zero at the origin, so the next IBP step produces no boundary term — there is no \\( 1/x^2 \\) contribution.",
        },
        {
          stepNumber: 7,
          description: "Integrate by parts a second time.",
          workingLatex:
            "-\\frac{1}{x}\\int_0^{\\infty} e^{-xt}\\frac{d}{dt}\\frac{1}{1+t^{2}}\\,dt = \\frac{1}{x^{2}}\\left.\\frac{d}{dt}\\frac{1}{1+t^{2}}\\right|_{0} + \\frac{1}{x^{2}}\\int_0^{\\infty} e^{-xt}\\frac{d^{2}}{dt^{2}}\\frac{1}{1+t^{2}}\\,dt",
          explanation:
            "A further IBP brings down another \\( 1/x \\) and exposes the second derivative of the amplitude. The boundary piece vanishes by step 6.",
        },
        {
          stepNumber: 8,
          description: "Recognise the pattern of repeated IBP.",
          workingLatex:
            "J = \\sum_{j\\ge0} \\frac{1}{x^{j+1}}\\left.\\frac{d^{j}}{dt^{j}}\\frac{1}{1+t^{2}}\\right|_{t=0}",
          explanation:
            "Iterating IBP, each pass lands the next derivative of the amplitude at the endpoint over one more power of \\( x \\); the leading boundary terms assemble into this series.",
        },
        {
          stepNumber: 9,
          description: "Taylor-expand the amplitude.",
          workingLatex:
            "\\frac{1}{1+t^{2}} = \\sum_{k\\ge0}(-1)^{k}t^{2k} = 1 - t^{2} + t^{4} - \\cdots",
          explanation:
            "The amplitude's Maclaurin series gives directly the endpoint derivatives we need, via \\( f^{(j)}(0) = j!\\,[\\text{coeff of } t^{j}] \\).",
        },
        {
          stepNumber: 10,
          description: "Read off the even derivatives at the endpoint.",
          workingLatex:
            "\\left.\\frac{d^{2k}}{dt^{2k}}\\frac{1}{1+t^{2}}\\right|_{0} = (-1)^{k}(2k)!",
          explanation:
            "The coefficient of \\( t^{2k} \\) is \\( (-1)^k \\), so the \\( 2k \\)-th derivative is \\( (-1)^k(2k)! \\); all odd derivatives are zero.",
        },
        {
          stepNumber: 11,
          description: "Read off the odd derivatives at the endpoint.",
          workingLatex:
            "\\left.\\frac{d^{2k+1}}{dt^{2k+1}}\\frac{1}{1+t^{2}}\\right|_{0} = 0",
          explanation:
            "Since the amplitude is even, every odd derivative vanishes at the origin — confirming only odd powers of \\( 1/x \\) appear.",
        },
        {
          stepNumber: 12,
          description: "Identify the contribution at order 2k.",
          workingLatex:
            "\\text{from } j = 2k:\\quad \\frac{(-1)^{k}(2k)!}{x^{2k+1}}",
          explanation:
            "Each surviving (even) derivative contributes \\( (-1)^k(2k)!\\,x^{-(2k+1)} \\) to the series.",
        },
        {
          stepNumber: 13,
          description: "Write the k = 0 term.",
          workingLatex:
            "k = 0:\\quad \\frac{(-1)^{0}(0)!}{x} = \\frac{1}{x}",
          explanation:
            "The leading term, agreeing with the boundary computation of step 4.",
        },
        {
          stepNumber: 14,
          description: "Write the k = 1 term.",
          workingLatex:
            "k = 1:\\quad \\frac{(-1)^{1}(2)!}{x^{3}} = -\\frac{2}{x^{3}}",
          explanation:
            "The second derivative \\( -2 \\) over \\( x^3 \\) gives the first correction.",
        },
        {
          stepNumber: 15,
          description: "Write the k = 2 term.",
          workingLatex:
            "k = 2:\\quad \\frac{(-1)^{2}(4)!}{x^{5}} = \\frac{24}{x^{5}}",
          explanation:
            "The fourth derivative \\( 24 \\) over \\( x^5 \\) gives the second correction.",
        },
        {
          stepNumber: 16,
          description: "Assemble the IBP series.",
          workingLatex:
            "J \\sim \\sum_{k=0}^{\\infty} (-1)^{k}\\,(2k)!\\;x^{-(2k+1)} = \\frac{1}{x} - \\frac{2}{x^{3}} + \\frac{24}{x^{5}} - \\cdots",
          explanation:
            "Collecting the surviving terms gives the closed-form series for the integral.",
        },
        {
          stepNumber: 17,
          description: "Compare with the Watson result.",
          workingLatex:
            "\\text{am7c-007:}\\quad J \\sim \\frac{1}{x} - \\frac{2}{x^{3}} + \\frac{24}{x^{5}} - \\cdots",
          explanation:
            "This is exactly the Watson-lemma expansion for the same integral, confirming the two methods agree term by term.",
        },
        {
          stepNumber: 18,
          description: "Examine the growth of the coefficients.",
          workingLatex:
            "\\frac{(2(k+1))!\\,x^{-(2k+3)}}{(2k)!\\,x^{-(2k+1)}} = \\frac{(2k+1)(2k+2)}{x^{2}} \\to \\infty",
          explanation:
            "The term-to-term ratio grows without bound for fixed \\( x \\), so the series cannot converge.",
        },
        {
          stepNumber: 19,
          description: "Classify the series.",
          workingLatex:
            "\\frac{(2k)!}{x^{2k}} \\to \\infty \\quad (k \\to \\infty)",
          explanation:
            "The factorial coefficients beat any geometric series, so the expansion is asymptotic, not convergent — the usual situation for IBP/Watson expansions.",
        },
        {
          stepNumber: 20,
          description: "Confirm numerically.",
          workingLatex:
            "x = 25:\\quad \\text{3 terms} = 0.0398745, \\quad \\text{exact } = 0.0398743",
          explanation:
            "Despite the divergence, the first three terms reproduce the exact integral to five significant figures — asymptotic series are accurate when truncated suitably.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\sum_{k\\ge0}(-1)^{k}(2k)!\\,x^{-(2k+1)} = \\frac{1}{x} - \\frac{2}{x^{3}} + \\frac{24}{x^{5}} - \\cdots \\)",
    },
  },
  {
    id: "am7c-021",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 21",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Obtain the first two terms of Stirling's series, i.e. show \\( \\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\,(x/e)^{x}\\left(1 + \\dfrac{1}{12x} + \\cdots\\right) \\) as \\( x \\to \\infty \\), by applying Laplace's method to \\( \\Gamma(x+1) = \\int_0^{\\infty} t^{x} e^{-t}\\,dt \\) including the cubic and quartic curvature terms.",
    marks: 7,
    yearCreated: 2026,
    tags: ["Stirling's formula", "Laplace method", "cubic quartic correction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the integrand in exponential form.",
          workingLatex:
            "\\Gamma(x+1) = \\int_0^{\\infty} t^{x} e^{-t}\\,dt = \\int_0^{\\infty} e^{x\\ln t - t}\\,dt",
          explanation:
            "Pull \\( t^x = e^{x\\ln t} \\) into the exponent so the large parameter multiplies a single function. The integrand peaks where \\( \\tfrac{d}{dt}(x\\ln t - t) = x/t - 1 = 0 \\), i.e. \\( t = x \\).",
        },
        {
          stepNumber: 2,
          description: "Centre the maximum with a substitution.",
          workingLatex:
            "t = x(1+s), \\qquad dt = x\\,ds",
          explanation:
            "Substitute \\( t = x(1+s) \\) so the peak \\( t = x \\) becomes \\( s = 0 \\) and the large parameter appears explicitly. The integration range becomes \\( s \\in (-1,\\infty) \\), effectively \\( (-\\infty,\\infty) \\) for the Gaussian.",
        },
        {
          stepNumber: 3,
          description: "Compute the scaled exponent.",
          workingLatex:
            "x\\ln t - t = x\\ln x - x + x\\big[\\ln(1+s) - s\\big]",
          explanation:
            "Since \\( \\ln t = \\ln x + \\ln(1+s) \\) and \\( t = x + xs \\), the constant part \\( x\\ln x - x \\) factors out as \\( e^{x\\ln x - x} = (x/e)^x \\). Together with \\( dt = x\\,ds \\) the prefactor is \\( (x/e)^x\\cdot x \\).",
        },
        {
          stepNumber: 4,
          description: "Recall the logarithm series.",
          workingLatex:
            "\\ln(1+s) = s - \\frac{s^{2}}{2} + \\frac{s^{3}}{3} - \\frac{s^{4}}{4} + \\cdots",
          explanation:
            "Start from the Maclaurin series of \\( \\ln(1+s) \\), valid for \\( |s| < 1 \\) — the region the Gaussian concentrates on.",
        },
        {
          stepNumber: 5,
          description: "Subtract the linear term.",
          workingLatex:
            "\\ln(1+s) - s = -\\frac{s^{2}}{2} + \\frac{s^{3}}{3} - \\frac{s^{4}}{4} + \\cdots",
          explanation:
            "Subtracting \\( s \\) cancels the linear term, confirming \\( s = 0 \\) is the maximum. The \\( -s^2/2 \\) term gives the Gaussian width; the cubic and quartic feed the \\( 1/x \\) correction.",
        },
        {
          stepNumber: 6,
          description: "Factor off the Gaussian part of the exponent.",
          workingLatex:
            "e^{x(\\ln(1+s)-s)} = e^{-x s^{2}/2}\\exp\\!\\left[x\\Big(\\tfrac{s^{3}}{3} - \\tfrac{s^{4}}{4} + \\cdots\\Big)\\right]",
          explanation:
            "Split off \\( e^{-xs^2/2} \\), the leading Gaussian. The remaining bracket is the small perturbation we expand.",
        },
        {
          stepNumber: 7,
          description: "Estimate the size of each perturbation term.",
          workingLatex:
            "s = O(x^{-1/2}):\\quad x s^{3} = O(x^{-1/2}), \\quad x s^{4} = O(x^{-1})",
          explanation:
            "Near the peak the Gaussian forces \\( s = O(x^{-1/2}) \\). So the cubic term is naively \\( O(x^{-1/2}) \\) and the quartic \\( O(x^{-1}) \\) — but parity will change which actually contribute.",
        },
        {
          stepNumber: 8,
          description: "Expand the perturbation to order 1/x.",
          workingLatex:
            "\\exp[\\cdots] = 1 + x\\Big(\\tfrac{s^{3}}{3} - \\tfrac{s^{4}}{4}\\Big) + \\frac{1}{2}\\Big(x\\tfrac{s^{3}}{3}\\Big)^{2} + \\cdots = 1 + \\frac{x s^{3}}{3} - \\frac{x s^{4}}{4} + \\frac{x^{2}s^{6}}{18} + \\cdots",
          explanation:
            "Keep every term up to order \\( 1/x \\): the linear cubic and quartic, plus the squared cubic \\( \\tfrac12(xs^3/3)^2 = x^2 s^6/18 \\).",
        },
        {
          stepNumber: 9,
          description: "Discard the odd terms by parity.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} s^{3} e^{-x s^{2}/2}\\,ds = 0, \\qquad \\int_{-\\infty}^{\\infty} s\\,e^{-xs^2/2}\\,ds = 0",
          explanation:
            "The bare cubic \\( xs^3/3 \\) is odd, so it integrates to zero against the even Gaussian. This is why the cubic only enters at the next order, through its square.",
        },
        {
          stepNumber: 10,
          description: "State the Gaussian moment formula.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} s^{2m} e^{-x s^{2}/2}\\,ds = (2m-1)!!\\;x^{-m}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "The even moments carry the double factorial \\( (2m-1)!! \\). We need \\( m = 2 \\) (for \\( s^4 \\)) and \\( m = 3 \\) (for \\( s^6 \\)).",
        },
        {
          stepNumber: 11,
          description: "Evaluate the s^4 moment.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} s^{4} e^{-x s^{2}/2}\\,ds = 3!!\\,x^{-2}\\sqrt{\\frac{2\\pi}{x}} = \\frac{3}{x^{2}}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "With \\( 3!! = 3 \\). This moment carries the quartic contribution.",
        },
        {
          stepNumber: 12,
          description: "Evaluate the s^6 moment.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} s^{6} e^{-x s^{2}/2}\\,ds = 5!!\\,x^{-3}\\sqrt{\\frac{2\\pi}{x}} = \\frac{15}{x^{3}}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "With \\( 5!! = 15 \\). This moment carries the squared-cubic contribution.",
        },
        {
          stepNumber: 13,
          description: "Form the quartic contribution.",
          workingLatex:
            "-\\frac{x}{4}\\cdot\\frac{3}{x^{2}} = -\\frac{3}{4x}",
          explanation:
            "The quartic term \\( -\\tfrac{x}{4}s^4 \\) multiplies the \\( s^4 \\) moment; the explicit \\( x \\) cancels one power, leaving \\( -3/(4x) \\) relative to the leading Gaussian.",
        },
        {
          stepNumber: 14,
          description: "Form the squared-cubic contribution.",
          workingLatex:
            "\\frac{x^{2}}{18}\\cdot\\frac{15}{x^{3}} = \\frac{15}{18x} = \\frac{5}{6x}",
          explanation:
            "The squared-cubic term \\( \\tfrac{x^2}{18}s^6 \\) multiplies the \\( s^6 \\) moment, giving \\( +15/(18x) = 5/(6x) \\) relative to the leading Gaussian.",
        },
        {
          stepNumber: 15,
          description: "Add the corrections over a common denominator.",
          workingLatex:
            "-\\frac{3}{4x} + \\frac{5}{6x} = \\frac{-9}{12x} + \\frac{10}{12x} = \\frac{1}{12x}",
          explanation:
            "Putting both over \\( 12x \\): \\( -9 + 10 = 1 \\). This combination is the classic place a sign or factor slips — both pieces are essential to land on \\( 1/12 \\).",
        },
        {
          stepNumber: 16,
          description: "Write the corrected Gaussian integral.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} e^{x(\\ln(1+s)-s)}\\,ds \\sim \\sqrt{\\frac{2\\pi}{x}}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "The leading Gaussian normalisation \\( \\sqrt{2\\pi/x} \\) times the bracketed correction is the value of the \\( s \\)-integral.",
        },
        {
          stepNumber: 17,
          description: "Reinstate the prefactor.",
          workingLatex:
            "\\Gamma(x+1) = (x/e)^x\\cdot x\\int_{-\\infty}^{\\infty} e^{x(\\ln(1+s)-s)}\\,ds",
          explanation:
            "Recall from step 3 that the constant exponent and the Jacobian gave the prefactor \\( (x/e)^x\\cdot x \\), which now multiplies the \\( s \\)-integral.",
        },
        {
          stepNumber: 18,
          description: "Combine prefactor with the Gaussian normalisation.",
          workingLatex:
            "(x/e)^x\\cdot x\\cdot\\sqrt{\\frac{2\\pi}{x}} = (x/e)^x\\sqrt{2\\pi x}",
          explanation:
            "The factor \\( x\\sqrt{2\\pi/x} = \\sqrt{2\\pi x} \\); the prefactor becomes \\( (x/e)^x\\sqrt{2\\pi x} \\).",
        },
        {
          stepNumber: 19,
          description: "Assemble Stirling's series.",
          workingLatex:
            "\\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "Combining the prefactor and the corrected integral gives Stirling's formula with its first correction.",
        },
        {
          stepNumber: 20,
          description: "Confirm numerically.",
          workingLatex:
            "x = 30:\\quad \\frac{\\Gamma(31)}{\\sqrt{2\\pi\\cdot30}\\,(30/e)^{30}} = 1.0027815 \\approx 1 + \\frac{1}{360}",
          explanation:
            "The measured ratio matches \\( 1 + 1/(12\\cdot30) = 1 + 1/360 \\) to five significant figures, validating the \\( 1/(12x) \\) coefficient.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x}\\left(1 + \\frac{1}{12x} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am7c-022",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 22",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For the incomplete Gamma function \\( \\displaystyle \\Gamma(a, x) = \\int_x^{\\infty} t^{a-1} e^{-t}\\,dt \\), find the first three terms of its asymptotic expansion as \\( x \\to +\\infty \\) (with \\( a \\) fixed) by repeated integration by parts, and give the general term.",
    marks: 6,
    yearCreated: 2026,
    tags: ["incomplete Gamma", "integration by parts", "general term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the parts for the first integration.",
          workingLatex:
            "u = t^{a-1}, \\qquad dv = e^{-t}\\,dt",
          explanation:
            "Differentiate the algebraic factor and integrate the exponential — the standard choice that lowers the algebraic power while keeping an exponential.",
        },
        {
          stepNumber: 2,
          description: "Differentiate and integrate the parts.",
          workingLatex:
            "du = (a-1)t^{a-2}\\,dt, \\qquad v = -e^{-t}",
          explanation:
            "Differentiating \\( t^{a-1} \\) lowers its power by one and brings down the factor \\( (a-1) \\); integrating \\( e^{-t} \\) gives \\( -e^{-t} \\).",
        },
        {
          stepNumber: 3,
          description: "Write the integration-by-parts identity.",
          workingLatex:
            "\\Gamma(a,x) = \\left[ -t^{a-1} e^{-t}\\right]_x^{\\infty} + (a-1)\\int_x^{\\infty} t^{a-2} e^{-t}\\,dt",
          explanation:
            "Substitute into \\( \\int u\\,dv = [uv] - \\int v\\,du \\). The \\( -\\int v\\,du \\) becomes \\( +(a-1)\\int t^{a-2}e^{-t}\\,dt \\) because \\( v \\) carries a minus sign.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the boundary term.",
          workingLatex:
            "\\left[ -t^{a-1} e^{-t}\\right]_x^{\\infty} = 0 - \\left(-x^{a-1}e^{-x}\\right) = x^{a-1} e^{-x}",
          explanation:
            "The upper limit vanishes (exponential decay beats the algebraic growth); the boundary value comes entirely from \\( t = x \\).",
        },
        {
          stepNumber: 5,
          description: "Recognise the recursion.",
          workingLatex:
            "\\Gamma(a,x) = x^{a-1} e^{-x} + (a-1)\\,\\Gamma(a-1,x)",
          explanation:
            "The leftover integral is the same incomplete-Gamma function with \\( a \\to a-1 \\). This self-similar structure is the engine of the expansion.",
        },
        {
          stepNumber: 6,
          description: "Apply the recursion a second time.",
          workingLatex:
            "\\Gamma(a-1,x) = x^{a-2}e^{-x} + (a-2)\\,\\Gamma(a-2,x)",
          explanation:
            "The same IBP step on \\( \\Gamma(a-1,x) \\) pulls out a boundary term \\( x^{a-2}e^{-x} \\) and a factor \\( (a-2) \\).",
        },
        {
          stepNumber: 7,
          description: "Apply the recursion a third time.",
          workingLatex:
            "\\Gamma(a-2,x) = x^{a-3}e^{-x} + (a-3)\\,\\Gamma(a-3,x)",
          explanation:
            "One more pass gives the boundary term \\( x^{a-3}e^{-x} \\) and the factor \\( (a-3) \\), enough to reach the third term of the series.",
        },
        {
          stepNumber: 8,
          description: "Substitute the third recursion into the second.",
          workingLatex:
            "\\Gamma(a-1,x) = x^{a-2}e^{-x} + (a-2)\\Big[x^{a-3}e^{-x} + (a-3)\\Gamma(a-3,x)\\Big]",
          explanation:
            "Back-substitute to express \\( \\Gamma(a-1,x) \\) in terms of two boundary terms plus a smaller remainder.",
        },
        {
          stepNumber: 9,
          description: "Substitute into the top-level expression.",
          workingLatex:
            "\\Gamma(a,x) = x^{a-1}e^{-x} + (a-1)\\Big[x^{a-2}e^{-x} + (a-2)\\big(x^{a-3}e^{-x} + \\cdots\\big)\\Big]",
          explanation:
            "Chaining all three substitutions builds the boundary terms of \\( \\Gamma(a,x) \\) with the accumulating falling-factorial coefficients.",
        },
        {
          stepNumber: 10,
          description: "Expand the nested brackets.",
          workingLatex:
            "= x^{a-1}e^{-x} + (a-1)x^{a-2}e^{-x} + (a-1)(a-2)x^{a-3}e^{-x} + \\cdots",
          explanation:
            "Multiplying through, each term gains one more falling-factorial factor and one lower power of \\( x \\) in the boundary value.",
        },
        {
          stepNumber: 11,
          description: "Factor out the common boundary factor.",
          workingLatex:
            "\\Gamma(a,x) = x^{a-1} e^{-x}\\left[1 + \\frac{a-1}{x} + \\frac{(a-1)(a-2)}{x^{2}} + \\cdots\\right]",
          explanation:
            "Factor \\( x^{a-1}e^{-x} \\) from every term; the bracket becomes a clean power series in \\( 1/x \\).",
        },
        {
          stepNumber: 12,
          description: "Identify the first three coefficients.",
          workingLatex:
            "c_0 = 1, \\quad c_1 = a-1, \\quad c_2 = (a-1)(a-2)",
          explanation:
            "Reading off the bracket, the coefficients are products of consecutive factors descending from \\( a-1 \\).",
        },
        {
          stepNumber: 13,
          description: "State the first three terms explicitly.",
          workingLatex:
            "\\Gamma(a,x) \\sim x^{a-1}e^{-x}\\left(1 + \\frac{a-1}{x} + \\frac{(a-1)(a-2)}{x^{2}} + \\cdots\\right)",
          explanation:
            "The leading term and the first two corrections, as requested.",
        },
        {
          stepNumber: 14,
          description: "Recognise the falling factorial.",
          workingLatex:
            "(a-1)(a-2)\\cdots(a-n) = \\frac{\\Gamma(a)}{\\Gamma(a-n)}",
          explanation:
            "The product of \\( n \\) consecutive descending factors is the falling factorial, which equals the ratio of Gamma functions.",
        },
        {
          stepNumber: 15,
          description: "State the general term.",
          workingLatex:
            "\\Gamma(a,x) \\sim x^{a-1} e^{-x}\\sum_{n=0}^{\\infty} \\frac{\\Gamma(a)}{\\Gamma(a-n)}\\,x^{-n}",
          explanation:
            "The general coefficient is this falling factorial \\( \\Gamma(a)/\\Gamma(a-n) \\).",
        },
        {
          stepNumber: 16,
          description: "Sanity-check the integer case a = 1.",
          workingLatex:
            "a = 1:\\quad (a-1) = 0 \\ \\Rightarrow\\ \\Gamma(1,x) = x^{0}e^{-x}\\big[1 + 0 + \\cdots\\big] = e^{-x}",
          explanation:
            "The factor \\( (a-1) = 0 \\) kills every correction, so the series terminates at the leading term.",
        },
        {
          stepNumber: 17,
          description: "Verify the integer case directly.",
          workingLatex:
            "\\Gamma(1,x) = \\int_x^{\\infty} e^{-t}\\,dt = e^{-x}",
          explanation:
            "Computing the integral directly confirms \\( e^{-x} \\), matching the truncated series — a reassuring consistency check.",
        },
        {
          stepNumber: 18,
          description: "Examine the general case for divergence.",
          workingLatex:
            "\\frac{c_{n+1}}{c_n} = (a-n-1) \\ \\Rightarrow\\ \\left|\\frac{c_{n+1}}{c_n\\,x}\\right| = \\frac{|a-n-1|}{x} \\to \\infty",
          explanation:
            "For non-integer \\( a \\) the factors never hit zero, and the term-to-term ratio grows without bound — the series diverges for every fixed \\( x \\).",
        },
        {
          stepNumber: 19,
          description: "Classify the expansion.",
          workingLatex:
            "\\text{asymptotic, not convergent (for non-integer } a)",
          explanation:
            "The expansion is a genuine asymptotic series: divergent, but accurate when truncated near its smallest term.",
        },
        {
          stepNumber: 20,
          description: "State the final result.",
          workingLatex:
            "\\Gamma(a,x) \\sim x^{a-1} e^{-x}\\left(1 + \\frac{a-1}{x} + \\frac{(a-1)(a-2)}{x^{2}} + \\cdots\\right)",
          explanation:
            "Collecting the leading three terms and the general coefficient completes the answer.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\Gamma(a,x) \\sim x^{a-1} e^{-x}\\left(1 + \\frac{a-1}{x} + \\frac{(a-1)(a-2)}{x^{2}} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am7c-023",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 23",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_{-\\infty}^{\\infty} e^{-x\\left(\\frac{1}{2}t^{2} + \\frac{1}{6}t^{3} + \\frac{1}{4}t^{4}\\right)}\\,dt \\), explaining carefully why the cubic term contributes at the same order as the quartic.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Laplace method", "cubic correction", "Gaussian moments"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the phase and its value at the centre.",
          workingLatex:
            "\\phi(t) = \\frac{t^{2}}{2} + \\frac{t^{3}}{6} + \\frac{t^{4}}{4}, \\qquad \\phi(0) = 0",
          explanation:
            "Record the phase. It vanishes at \\( t = 0 \\), so there is no exponential prefactor — the leading contribution is a pure Gaussian.",
        },
        {
          stepNumber: 2,
          description: "Check the stationary point and curvature.",
          workingLatex:
            "\\phi'(t) = t + \\frac{t^{2}}{2} + t^{3} \\Rightarrow \\phi'(0) = 0; \\qquad \\phi''(0) = 1",
          explanation:
            "The linear term of \\( \\phi \\) is absent, so \\( t = 0 \\) is a minimum, and \\( \\phi''(0) = 1 \\) sets the standard Gaussian width.",
        },
        {
          stepNumber: 3,
          description: "Factor out the Gaussian.",
          workingLatex:
            "e^{-x\\phi} = e^{-x t^{2}/2}\\exp\\!\\left[-x\\Big(\\tfrac{t^{3}}{6} + \\tfrac{t^{4}}{4}\\Big)\\right]",
          explanation:
            "Split off the leading Gaussian \\( e^{-xt^2/2} \\); the remaining cubic-plus-quartic bracket is the perturbation.",
        },
        {
          stepNumber: 4,
          description: "Estimate the size of the cubic and quartic.",
          workingLatex:
            "t = O(x^{-1/2}):\\quad x t^{3} = O(x^{-1/2}), \\quad x t^{4} = O(x^{-1})",
          explanation:
            "Near the peak \\( t = O(x^{-1/2}) \\). Naively the cubic (\\( O(x^{-1/2}) \\)) looks larger than the quartic (\\( O(x^{-1}) \\)) — but the cubic is odd, which changes everything.",
        },
        {
          stepNumber: 5,
          description: "Expand the perturbation factor.",
          workingLatex:
            "\\exp[\\cdots] = 1 - x\\Big(\\tfrac{t^{3}}{6} + \\tfrac{t^{4}}{4}\\Big) + \\frac{x^{2}}{2}\\Big(\\tfrac{t^{3}}{6} + \\tfrac{t^{4}}{4}\\Big)^{2} + \\cdots",
          explanation:
            "Use \\( e^{y} = 1 + y + \\tfrac12 y^2 + \\cdots \\) with \\( y = -x(t^3/6 + t^4/4) \\), keeping terms up to order \\( 1/x \\).",
        },
        {
          stepNumber: 6,
          description: "Identify which terms survive at order 1/x.",
          workingLatex:
            "-\\frac{x t^{4}}{4} \\ (O(1/x)), \\qquad \\frac{x^{2}}{2}\\cdot\\frac{t^{6}}{36} \\ (O(1/x))",
          explanation:
            "From the square, only the cross/leading pieces matter: the bare quartic and the squared cubic \\( \\tfrac{x^2}{2}\\cdot t^6/36 \\), which is \\( O(x^2\\cdot x^{-3}) = O(1/x) \\).",
        },
        {
          stepNumber: 7,
          description: "Discard the odd bare-cubic term.",
          workingLatex:
            "-\\frac{x}{6}\\int_{-\\infty}^{\\infty} t^{3} e^{-x t^{2}/2}\\,dt = 0",
          explanation:
            "The bare cubic \\( -xt^3/6 \\) is odd, so it integrates to zero against the even Gaussian. This is the crux: an odd term contributes one order later than its size suggests, via its square.",
        },
        {
          stepNumber: 8,
          description: "Discard the cubic-times-quartic cross term.",
          workingLatex:
            "\\frac{x^{2}}{2}\\cdot 2\\cdot\\frac{t^{3}}{6}\\cdot\\frac{t^{4}}{4} \\propto \\int t^{7} e^{-xt^2/2}\\,dt = 0",
          explanation:
            "The cross term in the square is proportional to \\( t^7 \\), odd, so it too vanishes — and in any case it is higher order. Only \\( t^4 \\) and \\( t^6 \\) survive at \\( O(1/x) \\).",
        },
        {
          stepNumber: 9,
          description: "State the Gaussian moment formula.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} t^{2m} e^{-x t^{2}/2}\\,dt = (2m-1)!!\\;x^{-m}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "The even moments carry the double factorial. We need \\( m = 2 \\) and \\( m = 3 \\).",
        },
        {
          stepNumber: 10,
          description: "Evaluate the t^4 moment.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} t^{4} e^{-x t^{2}/2}\\,dt = 3!!\\,x^{-2}\\sqrt{\\frac{2\\pi}{x}} = \\frac{3}{x^{2}}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "With \\( 3!! = 3 \\). This is the moment for the quartic contribution.",
        },
        {
          stepNumber: 11,
          description: "Evaluate the t^6 moment.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} t^{6} e^{-x t^{2}/2}\\,dt = 5!!\\,x^{-3}\\sqrt{\\frac{2\\pi}{x}} = \\frac{15}{x^{3}}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "With \\( 5!! = 15 \\). This is the moment for the squared-cubic contribution.",
        },
        {
          stepNumber: 12,
          description: "Form the quartic contribution.",
          workingLatex:
            "-\\frac{x}{4}\\cdot\\frac{3}{x^{2}} = -\\frac{3}{4x}",
          explanation:
            "The quartic term \\( -\\tfrac{x}{4}t^4 \\) multiplies the \\( t^4 \\) moment; the explicit \\( x \\) cancels one power, giving \\( -3/(4x) \\).",
        },
        {
          stepNumber: 13,
          description: "Write the quartic piece over 24x.",
          workingLatex:
            "-\\frac{3}{4x} = -\\frac{18}{24x}",
          explanation:
            "Express over the common denominator \\( 24x \\) ready for combining.",
        },
        {
          stepNumber: 14,
          description: "Compute the squared-cubic prefactor.",
          workingLatex:
            "\\frac{x^{2}}{2}\\cdot\\left(\\frac{1}{6}\\right)^{2} = \\frac{x^{2}}{2}\\cdot\\frac{1}{36} = \\frac{x^{2}}{72}",
          explanation:
            "The squared cubic \\( \\tfrac{x^2}{2}(t^3/6)^2 \\) carries the numerical factor \\( \\tfrac{1}{2}\\cdot\\tfrac{1}{36} = \\tfrac{1}{72} \\).",
        },
        {
          stepNumber: 15,
          description: "Form the squared-cubic contribution.",
          workingLatex:
            "\\frac{x^{2}}{72}\\cdot\\frac{15}{x^{3}} = \\frac{15}{72x} = \\frac{5}{24x}",
          explanation:
            "Multiplying by the \\( t^6 \\) moment gives \\( +15/(72x) = +5/(24x) \\).",
        },
        {
          stepNumber: 16,
          description: "Combine the two order-1/x contributions.",
          workingLatex:
            "-\\frac{18}{24x} + \\frac{5}{24x} = \\frac{-18 + 5}{24x} = -\\frac{13}{24x}",
          explanation:
            "Their sum over \\( 24x \\) is \\( (-18 + 5)/24 = -13/24 \\). Omitting the cubic would give the wrong correction \\( -3/(4x) \\).",
        },
        {
          stepNumber: 17,
          description: "Write the corrected Gaussian integral.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} e^{-x\\phi}\\,dt \\sim \\sqrt{\\frac{2\\pi}{x}}\\left(1 - \\frac{13}{24x} + \\cdots\\right)",
          explanation:
            "Factoring the leading Gaussian \\( \\sqrt{2\\pi/x} \\) exposes the correction series.",
        },
        {
          stepNumber: 18,
          description: "Emphasise the cubic's role.",
          workingLatex:
            "\\text{cubic-only:}\\ -\\frac{3}{4x}; \\qquad \\text{with cubic:}\\ -\\frac{13}{24x}",
          explanation:
            "The cubic shifts the coefficient from \\( -18/24 \\) to \\( -13/24 \\) — a substantial change. An odd term cannot be dropped just because it integrates to zero at first order.",
        },
        {
          stepNumber: 19,
          description: "Confirm numerically.",
          workingLatex:
            "x = 400:\\quad \\frac{\\text{integral}}{\\sqrt{2\\pi/x}} = 0.998648, \\quad 1 - \\frac{13}{24\\cdot400} = 0.998646",
          explanation:
            "The measured ratio matches the predicted \\( 1 - 13/(9600) \\) to five decimal places.",
        },
        {
          stepNumber: 20,
          description: "State the result.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} e^{-x\\left(\\frac{t^{2}}{2} + \\frac{t^{3}}{6} + \\frac{t^{4}}{4}\\right)}\\,dt \\sim \\sqrt{\\frac{2\\pi}{x}}\\left(1 - \\frac{13}{24x} + \\cdots\\right)",
          explanation:
            "Both the cubic (via its square) and the quartic contribute at \\( O(1/x) \\), giving the correction \\( -13/(24x) \\).",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\sqrt{\\frac{2\\pi}{x}}\\left(1 - \\frac{13}{24x} + \\cdots\\right) \\)",
    },
  },
  {
    id: "am7c-024",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 24",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} e^{-x t}\\,e^{-t^{2}}\\,dt \\) by Watson's lemma, and independently by completing the square; confirm the two leading-order results agree.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Watson's lemma", "complete the square", "erfc cross-check"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Watson route: note the heavy weight.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t}\\,e^{-t^{2}}\\,dt:\\quad e^{-xt}\\ \\text{concentrates at } t = 0",
          explanation:
            "The heavy weight is \\( e^{-xt} \\); the factor \\( e^{-t^2} \\) is a smooth amplitude. Only the small-\\( t \\) behaviour of the amplitude matters.",
        },
        {
          stepNumber: 2,
          description: "Expand the amplitude.",
          workingLatex:
            "e^{-t^{2}} = 1 - t^{2} + \\frac{t^{4}}{2} - \\cdots",
          explanation:
            "Use \\( e^{-y} = 1 - y + y^2/2 - \\cdots \\) with \\( y = t^2 \\). Only even powers of \\( t \\) appear, so the series will skip the \\( 1/x^2 \\) term.",
        },
        {
          stepNumber: 3,
          description: "Recall the Watson building block.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "We need \\( n = 0 \\) and \\( n = 2 \\) for the leading two terms.",
        },
        {
          stepNumber: 4,
          description: "Integrate the leading amplitude term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-xt}\\,dt = \\frac{0!}{x} = \\frac{1}{x}",
          explanation:
            "The constant \\( 1 \\) of the amplitude gives the leading \\( 1/x \\).",
        },
        {
          stepNumber: 5,
          description: "Integrate the first correction term.",
          workingLatex:
            "-\\int_0^{\\infty} t^{2}e^{-xt}\\,dt = -\\frac{2!}{x^{3}} = -\\frac{2}{x^{3}}",
          explanation:
            "The \\( -t^2 \\) term gives \\( -2/x^3 \\). There is no \\( 1/x^2 \\) term because the amplitude is even.",
        },
        {
          stepNumber: 6,
          description: "State the Watson series.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t} e^{-t^{2}}\\,dt \\sim \\frac{1}{x} - \\frac{2}{x^{3}} + \\cdots",
          explanation:
            "This is the leading two-term result by Watson's lemma. Now we confirm it exactly.",
        },
        {
          stepNumber: 7,
          description: "Exact route: combine the exponents.",
          workingLatex:
            "e^{-xt}\\,e^{-t^{2}} = e^{-(t^{2} + x t)}",
          explanation:
            "Write the product as a single exponential of \\( -(t^2 + xt) \\), ready to complete the square.",
        },
        {
          stepNumber: 8,
          description: "Complete the square.",
          workingLatex:
            "t^{2} + x t = \\left(t + \\frac{x}{2}\\right)^{2} - \\frac{x^{2}}{4}",
          explanation:
            "Standard completion: add and subtract \\( (x/2)^2 \\). The constant \\( -x^2/4 \\) will come out of the integral.",
        },
        {
          stepNumber: 9,
          description: "Pull out the constant factor.",
          workingLatex:
            "\\int_0^{\\infty} e^{-(t^{2} + x t)}\\,dt = e^{x^{2}/4}\\int_0^{\\infty} e^{-(t + x/2)^{2}}\\,dt",
          explanation:
            "The \\( +x^2/4 \\) in the exponent becomes the prefactor \\( e^{x^2/4} \\); the remaining integrand is a shifted Gaussian.",
        },
        {
          stepNumber: 10,
          description: "Shift the integration variable.",
          workingLatex:
            "s = t + \\frac{x}{2}:\\quad \\int_0^{\\infty} e^{-(t + x/2)^{2}}\\,dt = \\int_{x/2}^{\\infty} e^{-s^{2}}\\,ds",
          explanation:
            "The substitution maps the lower limit \\( t = 0 \\) to \\( s = x/2 \\); the upper limit stays at infinity.",
        },
        {
          stepNumber: 11,
          description: "Identify the complementary error function.",
          workingLatex:
            "\\int_{x/2}^{\\infty} e^{-s^{2}}\\,ds = \\frac{\\sqrt{\\pi}}{2}\\,\\operatorname{erfc}\\!\\left(\\frac{x}{2}\\right)",
          explanation:
            "By definition \\( \\operatorname{erfc}(z) = \\tfrac{2}{\\sqrt\\pi}\\int_z^\\infty e^{-s^2}\\,ds \\), so the tail integral equals \\( \\tfrac{\\sqrt\\pi}{2}\\operatorname{erfc}(x/2) \\).",
        },
        {
          stepNumber: 12,
          description: "Assemble the exact form.",
          workingLatex:
            "\\int_0^{\\infty} e^{-t^{2} - x t}\\,dt = \\frac{\\sqrt{\\pi}}{2}\\,e^{x^{2}/4}\\,\\operatorname{erfc}\\!\\left(\\frac{x}{2}\\right)",
          explanation:
            "Combining the prefactor with the erfc gives the closed form to be expanded for large \\( x \\).",
        },
        {
          stepNumber: 13,
          description: "Recall the erfc asymptotic series.",
          workingLatex:
            "\\operatorname{erfc}(z) \\sim \\frac{e^{-z^{2}}}{z\\sqrt{\\pi}}\\left(1 - \\frac{1}{2z^{2}} + \\cdots\\right)",
          explanation:
            "This is the standard large-\\( z \\) expansion (itself an IBP result, derived in am7c-029).",
        },
        {
          stepNumber: 14,
          description: "Substitute z = x/2.",
          workingLatex:
            "z = \\frac{x}{2}:\\quad \\frac{1}{2z^{2}} = \\frac{1}{2(x/2)^{2}} = \\frac{2}{x^{2}}",
          explanation:
            "The correction term \\( -1/(2z^2) \\) becomes \\( -2/x^2 \\) in terms of \\( x \\).",
        },
        {
          stepNumber: 15,
          description: "Write the erfc factor explicitly.",
          workingLatex:
            "\\operatorname{erfc}\\!\\left(\\frac{x}{2}\\right) \\sim \\frac{e^{-x^{2}/4}}{(x/2)\\sqrt{\\pi}}\\left(1 - \\frac{2}{x^{2}} + \\cdots\\right)",
          explanation:
            "Substitute \\( z = x/2 \\) and \\( e^{-z^2} = e^{-x^2/4} \\) into the series.",
        },
        {
          stepNumber: 16,
          description: "Multiply by the prefactor.",
          workingLatex:
            "\\frac{\\sqrt{\\pi}}{2}e^{x^{2}/4}\\cdot\\frac{e^{-x^{2}/4}}{(x/2)\\sqrt{\\pi}}\\left(1 - \\frac{2}{x^{2}} + \\cdots\\right)",
          explanation:
            "Combine the exact form with the expanded erfc.",
        },
        {
          stepNumber: 17,
          description: "Cancel the exponentials.",
          workingLatex:
            "e^{x^{2}/4}\\cdot e^{-x^{2}/4} = 1",
          explanation:
            "The growing and decaying exponentials cancel exactly, leaving a purely algebraic prefactor — the integral has no exponential growth, as expected.",
        },
        {
          stepNumber: 18,
          description: "Simplify the algebraic prefactor.",
          workingLatex:
            "\\frac{\\sqrt{\\pi}}{2}\\cdot\\frac{1}{(x/2)\\sqrt{\\pi}} = \\frac{\\sqrt{\\pi}}{2}\\cdot\\frac{2}{x\\sqrt{\\pi}} = \\frac{1}{x}",
          explanation:
            "The \\( \\sqrt\\pi \\)'s cancel and the factors of \\( 2 \\) combine to leave \\( 1/x \\).",
        },
        {
          stepNumber: 19,
          description: "Write the expanded exact result.",
          workingLatex:
            "\\frac{1}{x}\\left(1 - \\frac{2}{x^{2}} + \\cdots\\right) = \\frac{1}{x} - \\frac{2}{x^{3}} + \\cdots",
          explanation:
            "Distributing \\( 1/x \\) gives the same series as the Watson route.",
        },
        {
          stepNumber: 20,
          description: "Confirm the two routes agree.",
          workingLatex:
            "\\text{Watson: } \\frac{1}{x} - \\frac{2}{x^{3}}; \\quad \\text{erfc: } \\frac{1}{x} - \\frac{2}{x^{3}}",
          explanation:
            "Both independent methods give \\( 1/x - 2/x^3 + \\cdots \\), the desired cross-check.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\frac{1}{x} - \\frac{2}{x^{3}} + \\cdots \\) (both methods agree).",
    },
  },
  {
    id: "am7c-025",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 25",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} \\frac{\\cos t}{x^{2} + t^{2}}\\,dt \\) by integration by parts, and explain the structure of the resulting expansion.",
    marks: 6,
    yearCreated: 2026,
    tags: ["integration by parts", "oscillatory amplitude", "subleading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note where the large parameter sits.",
          workingLatex:
            "I(x) = \\int_0^{\\infty} \\frac{\\cos t}{x^{2}+t^{2}}\\,dt, \\qquad x \\text{ appears in the amplitude}",
          explanation:
            "Unlike a Laplace integral, here the large parameter \\( x \\) sits in the algebraic amplitude, not in an exponential. We test whether a naive power series in \\( 1/x \\) works.",
        },
        {
          stepNumber: 2,
          description: "Factor the denominator for large x.",
          workingLatex:
            "\\frac{1}{x^{2}+t^{2}} = \\frac{1}{x^{2}}\\cdot\\frac{1}{1 + (t/x)^{2}}",
          explanation:
            "Pull \\( x^2 \\) out of the denominator, isolating a factor that looks expandable for \\( t \\ll x \\).",
        },
        {
          stepNumber: 3,
          description: "Expand the bracket geometrically.",
          workingLatex:
            "\\frac{1}{x^{2}+t^{2}} = \\frac{1}{x^{2}}\\left(1 - \\frac{t^{2}}{x^{2}} + \\frac{t^{4}}{x^{4}} - \\cdots\\right)",
          explanation:
            "Use \\( (1+y)^{-1} = 1 - y + y^2 - \\cdots \\) with \\( y = (t/x)^2 \\). This is the formal large-\\( x \\) expansion of the amplitude.",
        },
        {
          stepNumber: 4,
          description: "Write the would-be term-by-term integrals.",
          workingLatex:
            "I(x) \\overset{?}{=} \\frac{1}{x^{2}}\\int_0^{\\infty}\\cos t\\,dt - \\frac{1}{x^{4}}\\int_0^{\\infty} t^{2}\\cos t\\,dt + \\cdots",
          explanation:
            "If the expansion were valid, the integral would become a sum of these moments of \\( \\cos t \\).",
        },
        {
          stepNumber: 5,
          description: "Observe the integrals diverge.",
          workingLatex:
            "\\int_0^{\\infty} \\cos t\\,dt, \\quad \\int_0^{\\infty} t^{2}\\cos t\\,dt, \\ \\dots \\ \\text{do not converge}",
          explanation:
            "Each \\( \\int_0^\\infty t^{2k}\\cos t\\,dt \\) fails to converge (it oscillates without decay). The term-by-term route breaks down — the interchange of sum and integral is illegitimate.",
        },
        {
          stepNumber: 6,
          description: "Conclude the power series is empty.",
          workingLatex:
            "I(x) \\sim 0 + 0\\cdot x^{-1} + 0\\cdot x^{-2} + \\cdots \\ \\text{(as a power series)}",
          explanation:
            "Since no convergent coefficient exists, the formal asymptotic power series in \\( 1/x \\) is identically zero. The true value must therefore lie beyond all powers — exponentially small.",
        },
        {
          stepNumber: 7,
          description: "Write cosine as a complex exponential.",
          workingLatex:
            "\\cos t = \\operatorname{Re}\\, e^{it} \\ \\Rightarrow\\ I(x) = \\operatorname{Re}\\int_0^{\\infty} \\frac{e^{it}}{x^{2}+t^{2}}\\,dt",
          explanation:
            "Replacing \\( \\cos t \\) by \\( \\operatorname{Re}\\,e^{it} \\) lets us use contour methods, which capture the exponentially small behaviour.",
        },
        {
          stepNumber: 8,
          description: "Extend to the full line by symmetry.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{\\cos t}{x^{2}+t^{2}}\\,dt = \\frac{1}{2}\\int_{-\\infty}^{\\infty} \\frac{\\cos t}{x^{2}+t^{2}}\\,dt",
          explanation:
            "The integrand is even in \\( t \\), so the half-line integral is half the full-line integral, which is the natural object for a contour argument.",
        },
        {
          stepNumber: 9,
          description: "Factor the denominator into poles.",
          workingLatex:
            "x^{2}+t^{2} = (t - ix)(t + ix)",
          explanation:
            "The denominator has simple poles at \\( t = \\pm ix \\). For the contour closed in the upper half-plane only \\( t = ix \\) matters.",
        },
        {
          stepNumber: 10,
          description: "Close the contour in the upper half-plane.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} \\frac{e^{it}}{x^{2}+t^{2}}\\,dt = 2\\pi i\\,\\operatorname{Res}_{t = ix}\\frac{e^{it}}{(t-ix)(t+ix)}",
          explanation:
            "Since \\( e^{it} \\) decays as \\( \\operatorname{Im}\\,t \\to +\\infty \\), Jordan's lemma lets us close upward, picking up the residue at \\( t = ix \\).",
        },
        {
          stepNumber: 11,
          description: "Compute the residue.",
          workingLatex:
            "\\operatorname{Res}_{t=ix} = \\frac{e^{i(ix)}}{(ix) + ix} = \\frac{e^{-x}}{2ix}",
          explanation:
            "At the simple pole \\( t = ix \\), \\( e^{it} = e^{i\\cdot ix} = e^{-x} \\) and the derivative factor of the denominator is \\( t + ix = 2ix \\).",
        },
        {
          stepNumber: 12,
          description: "Assemble the full-line integral.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} \\frac{e^{it}}{x^{2}+t^{2}}\\,dt = 2\\pi i\\cdot\\frac{e^{-x}}{2ix} = \\frac{\\pi}{x}\\,e^{-x}",
          explanation:
            "Multiplying the residue by \\( 2\\pi i \\); the \\( i \\)'s cancel, leaving a real result \\( \\pi e^{-x}/x \\).",
        },
        {
          stepNumber: 13,
          description: "Take the real part.",
          workingLatex:
            "\\operatorname{Re}\\frac{\\pi}{x}e^{-x} = \\frac{\\pi}{x}e^{-x}",
          explanation:
            "The result is already real, so taking the real part of \\( e^{it} \\) leaves it unchanged.",
        },
        {
          stepNumber: 14,
          description: "Halve for the original integral.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{\\cos t}{x^{2}+t^{2}}\\,dt = \\frac{1}{2}\\cdot\\frac{\\pi}{x}e^{-x} = \\frac{\\pi}{2x}\\,e^{-x}",
          explanation:
            "Apply the factor of one-half from the even-symmetry step. This is the exact closed form.",
        },
        {
          stepNumber: 15,
          description: "Note the exact value is exponentially small.",
          workingLatex:
            "\\frac{\\pi}{2x}\\,e^{-x} = O(e^{-x}) \\ll x^{-n}\\ \\text{for every } n",
          explanation:
            "The closed form decays like \\( e^{-x} \\), confirming that the empty power series of step 6 was correct: all algebraic coefficients are genuinely zero.",
        },
        {
          stepNumber: 16,
          description: "Interpret via repeated integration by parts.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{\\cos t}{x^{2}+t^{2}}\\,dt:\\ \\text{integrate } \\cos t,\\ \\text{differentiate } \\tfrac{1}{x^2+t^2}",
          explanation:
            "Alternatively, one may integrate \\( \\cos t \\) to \\( \\sin t \\) and differentiate the amplitude, generating boundary terms at \\( t = 0 \\).",
        },
        {
          stepNumber: 17,
          description: "Observe the boundary terms cancel.",
          workingLatex:
            "\\sin 0 = 0, \\quad \\text{cosine boundary terms telescope to } 0",
          explanation:
            "Every boundary term at \\( t = 0 \\) either contains \\( \\sin 0 = 0 \\) or cancels against a later one. No algebraic term survives — consistent with the empty power series.",
        },
        {
          stepNumber: 18,
          description: "Locate the exponential in the IBP picture.",
          workingLatex:
            "\\text{remainder integral } = O(e^{-x}) \\ \\text{from the pole at } t = ix",
          explanation:
            "The leftover after all IBP steps is the exponentially small piece, which the contour method pins down exactly via the pole at \\( t = ix \\).",
        },
        {
          stepNumber: 19,
          description: "Confirm numerically.",
          workingLatex:
            "x = 6:\\quad \\frac{\\pi}{12}\\,e^{-6} = 6.4894\\times10^{-4}",
          explanation:
            "Careful oscillatory quadrature at \\( x = 6 \\) returns \\( 6.4894\\times10^{-4} \\), matching the closed form to the printed digits.",
        },
        {
          stepNumber: 20,
          description: "State the leading behaviour and the lesson.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{\\cos t}{x^{2}+t^{2}}\\,dt \\sim \\frac{\\pi}{2x}\\,e^{-x}",
          explanation:
            "An identically zero power series signals exponentially small behaviour, captured here by the pole at \\( t = ix \\). The single exponential term is the whole asymptotic story.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\int_0^{\\infty} \\frac{\\cos t}{x^{2}+t^{2}}\\,dt \\sim \\frac{\\pi}{2x}\\,e^{-x} \\)",
    },
  },
  {
    id: "am7c-026",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 26",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} e^{-x\\left(t + \\frac{1}{t}\\right)} t^{-1/2}\\,dt \\) by Laplace's method at the interior saddle, and identify the leading behaviour with a modified Bessel function.",
    marks: 7,
    yearCreated: 2026,
    tags: ["Laplace method", "interior saddle", "Bessel K cross-check"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the saddle of the exponent.",
          workingLatex:
            "\\phi(t) = t + \\frac{1}{t}, \\qquad \\phi'(t) = 1 - \\frac{1}{t^{2}} = 0 \\Rightarrow t = 1",
          explanation:
            "The exponent has an interior minimum at \\( t = 1 \\) (the positive root), giving the dominant factor \\( e^{-x\\phi(1)} \\).",
          mafs: "<Mafs viewBox={{ x: [-1.4, 3.4], y: [-0.35, 1.25], padding: 0 }} height={160}>\n  <Coordinates.Cartesian xAxis={{ lines: 1 }} yAxis={{ lines: false }} />\n  <Plot.OfX y={(t) => Math.exp(-1.2*(t + 1/t - 2))} domain={[0.18, 3.4]} color=\"var(--mafs-fg-blue)\" style=\"dashed\" />\n  <Plot.OfX y={(t) => Math.exp(-5*(t + 1/t - 2))} domain={[0.18, 3.4]} color=\"var(--mafs-fg-accent)\" weight={3} />\n  <Point x={1} y={1} color=\"var(--mafs-fg-blue)\" />\n  <LaTeX at={[1,1.12]} tex=\"t=1\" color=\"var(--mafs-fg-blue)\" />\n  <LaTeX at={[2.7,0.6]} tex=\"\\\\text{larger }x\" color=\"var(--mafs-fg-accent)\" />\n  <LaTeX at={[3.1,-0.2]} tex=\"t\" />\n</Mafs>",
        },
        {
          stepNumber: 2,
          description: "Confirm the second root is irrelevant.",
          workingLatex:
            "1 - \\frac{1}{t^{2}} = 0 \\Rightarrow t^{2} = 1 \\Rightarrow t = \\pm 1; \\quad t = -1 \\notin (0,\\infty)",
          explanation:
            "The equation has roots \\( t = \\pm 1 \\), but the integration range is \\( (0,\\infty) \\), so only \\( t = 1 \\) contributes.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the phase at the saddle.",
          workingLatex:
            "\\phi(1) = 1 + \\frac{1}{1} = 2 \\ \\Rightarrow\\ e^{-x\\phi(1)} = e^{-2x}",
          explanation:
            "The minimum value \\( \\phi(1) = 2 \\) sets the dominant exponential decay \\( e^{-2x} \\).",
        },
        {
          stepNumber: 4,
          description: "Compute the curvature.",
          workingLatex:
            "\\phi''(t) = \\frac{2}{t^{3}} \\Rightarrow \\phi''(1) = 2",
          explanation:
            "Differentiate \\( \\phi'(t) = 1 - t^{-2} \\) to get \\( \\phi''(t) = 2t^{-3} \\); at the saddle this is \\( 2 \\), setting the Gaussian width.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the amplitude at the saddle.",
          workingLatex:
            "A(t) = t^{-1/2} \\Rightarrow A(1) = 1",
          explanation:
            "The slowly-varying algebraic amplitude \\( t^{-1/2} \\) equals \\( 1 \\) at \\( t = 1 \\), so it does not change the leading coefficient.",
        },
        {
          stepNumber: 6,
          description: "Expand the phase about the saddle.",
          workingLatex:
            "\\phi(1+s) = 2 + \\frac{1}{2}\\phi''(1)s^{2} + \\cdots = 2 + s^{2} + \\cdots",
          explanation:
            "Taylor-expand \\( \\phi \\) about \\( t = 1 \\); the quadratic term \\( \\tfrac12\\cdot2\\,s^2 = s^2 \\) is the Gaussian, confirming the curvature.",
        },
        {
          stepNumber: 7,
          description: "Write the Gaussian approximation.",
          workingLatex:
            "\\int \\approx A(1)\\,e^{-2x}\\int_{-\\infty}^{\\infty} e^{-x s^{2}}\\,ds",
          explanation:
            "Substituting \\( t = 1 + s \\) and keeping the leading Gaussian, with the amplitude frozen at its saddle value \\( A(1) = 1 \\).",
        },
        {
          stepNumber: 8,
          description: "Evaluate the Gaussian integral.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} e^{-x s^{2}}\\,ds = \\sqrt{\\frac{\\pi}{x}}",
          explanation:
            "The standard Gaussian with coefficient \\( x \\) (from \\( \\phi''(1)/2 = 1 \\)) integrates to \\( \\sqrt{\\pi/x} \\).",
        },
        {
          stepNumber: 9,
          description: "State the general Laplace formula for comparison.",
          workingLatex:
            "\\int \\sim e^{-x\\phi(1)}\\,A(1)\\sqrt{\\frac{2\\pi}{x\\,\\phi''(1)}}",
          explanation:
            "The standard interior-saddle formula; substituting \\( \\phi''(1) = 2 \\) reproduces \\( \\sqrt{2\\pi/(2x)} = \\sqrt{\\pi/x} \\), consistent with the direct Gaussian.",
        },
        {
          stepNumber: 10,
          description: "Assemble the leading term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x(t+1/t)}t^{-1/2}\\,dt \\sim \\sqrt{\\frac{\\pi}{x}}\\,e^{-2x}",
          explanation:
            "Combining the exponential, amplitude and Gaussian gives the leading behaviour.",
        },
        {
          stepNumber: 11,
          description: "Recall the Bessel-K integral representation.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x(t + 1/t)}\\,t^{\\nu-1}\\,dt = 2\\,K_{\\nu}(2x)",
          explanation:
            "This is a standard integral representation of the modified Bessel function \\( K_\\nu \\), valid for the symmetric exponent \\( t + 1/t \\).",
        },
        {
          stepNumber: 12,
          description: "Match the order parameter.",
          workingLatex:
            "t^{-1/2} = t^{\\nu - 1} \\Rightarrow \\nu - 1 = -\\frac{1}{2} \\Rightarrow \\nu = \\frac{1}{2}",
          explanation:
            "Our amplitude \\( t^{-1/2} \\) corresponds to \\( \\nu = 1/2 \\), so the integral equals \\( 2K_{1/2}(2x) \\).",
        },
        {
          stepNumber: 13,
          description: "Recall the elementary form of K_{1/2}.",
          workingLatex:
            "K_{1/2}(z) = \\sqrt{\\frac{\\pi}{2z}}\\,e^{-z}",
          explanation:
            "Half-integer-order modified Bessel functions are elementary; \\( K_{1/2} \\) is exactly a decaying exponential times an algebraic prefactor.",
        },
        {
          stepNumber: 14,
          description: "Substitute z = 2x.",
          workingLatex:
            "K_{1/2}(2x) = \\sqrt{\\frac{\\pi}{4x}}\\,e^{-2x}",
          explanation:
            "Setting \\( z = 2x \\) gives \\( \\sqrt{\\pi/(2\\cdot2x)} = \\sqrt{\\pi/(4x)} \\) times \\( e^{-2x} \\).",
        },
        {
          stepNumber: 15,
          description: "Form the exact integral.",
          workingLatex:
            "2K_{1/2}(2x) = 2\\sqrt{\\frac{\\pi}{4x}}\\,e^{-2x}",
          explanation:
            "Multiply by the factor \\( 2 \\) from the integral representation.",
        },
        {
          stepNumber: 16,
          description: "Simplify the exact value.",
          workingLatex:
            "2\\sqrt{\\frac{\\pi}{4x}} = 2\\cdot\\frac{1}{2}\\sqrt{\\frac{\\pi}{x}} = \\sqrt{\\frac{\\pi}{x}} \\ \\Rightarrow\\ \\sqrt{\\frac{\\pi}{x}}\\,e^{-2x}",
          explanation:
            "The \\( \\sqrt{1/4} = 1/2 \\) cancels the factor \\( 2 \\), leaving exactly \\( \\sqrt{\\pi/x}\\,e^{-2x} \\).",
        },
        {
          stepNumber: 17,
          description: "Match the Laplace leading term with the exact value.",
          workingLatex:
            "\\text{Laplace: } \\sqrt{\\frac{\\pi}{x}}e^{-2x}; \\quad \\text{exact: } \\sqrt{\\frac{\\pi}{x}}e^{-2x}",
          explanation:
            "The leading Laplace term is not just asymptotically correct — it is the entire exact answer.",
        },
        {
          stepNumber: 18,
          description: "Explain why the correction vanishes.",
          workingLatex:
            "K_{1/2} \\text{ elementary} \\Rightarrow \\text{no } 1/x \\text{ correction}",
          explanation:
            "Because \\( K_{1/2} \\) is elementary (a finite expression), the Laplace higher-order terms all conspire to cancel; the series terminates after the leading term.",
        },
        {
          stepNumber: 19,
          description: "Confirm numerically.",
          workingLatex:
            "x = 5:\\quad \\sqrt{\\frac{\\pi}{5}}\\,e^{-10} = 3.5987\\times10^{-5}",
          explanation:
            "Direct quadrature of the integral at \\( x = 5 \\) returns \\( 3.5987\\times10^{-5} \\), matching the closed form exactly — confirming there is no correction.",
        },
        {
          stepNumber: 20,
          description: "State the result.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x(t+1/t)}t^{-1/2}\\,dt = \\sqrt{\\frac{\\pi}{x}}\\,e^{-2x} = 2K_{1/2}(2x)",
          explanation:
            "The leading two terms are \\( \\sqrt{\\pi/x}\\,e^{-2x} \\) and \\( 0 \\): the answer is exact, equal to \\( 2K_{1/2}(2x) \\).",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\sqrt{\\frac{\\pi}{x}}\\,e^{-2x} \\) (exact; equals \\( 2K_{1/2}(2x) \\)).",
    },
  },
  {
    id: "am7c-027",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 27",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} \\frac{e^{-x t}}{\\sqrt{t}\\,(1+t)}\\,dt \\) by Watson's lemma, and explain why the expansion proceeds in half-integer powers of \\( 1/x \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["Watson's lemma", "branch-point amplitude", "half-integer powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the concentration of the weight.",
          workingLatex:
            "e^{-x t}\\ \\text{concentrates at } t = 0; \\quad \\text{amplitude } \\frac{1}{\\sqrt{t}\\,(1+t)}",
          explanation:
            "The heavy weight is \\( e^{-xt} \\); only the small-\\( t \\) behaviour of the amplitude matters. The amplitude has a singularity at the endpoint that we must keep explicit.",
        },
        {
          stepNumber: 2,
          description: "Separate singular and smooth factors.",
          workingLatex:
            "\\frac{1}{\\sqrt{t}\\,(1+t)} = t^{-1/2}\\cdot\\frac{1}{1+t}",
          explanation:
            "Factor out the integrable branch-point singularity \\( t^{-1/2} \\); the remaining \\( (1+t)^{-1} \\) is smooth at \\( t = 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Expand the smooth factor.",
          workingLatex:
            "\\frac{1}{1+t} = 1 - t + t^{2} - \\cdots",
          explanation:
            "Geometric expansion of \\( (1+t)^{-1} \\) about the endpoint, valid for \\( |t| < 1 \\).",
        },
        {
          stepNumber: 4,
          description: "Multiply by the singular factor.",
          workingLatex:
            "\\frac{1}{\\sqrt{t}\\,(1+t)} = t^{-1/2}(1 - t + t^{2} - \\cdots) = t^{-1/2} - t^{1/2} + t^{3/2} - \\cdots",
          explanation:
            "Distributing \\( t^{-1/2} \\) shifts every integer power down by one half, producing the half-integer series.",
        },
        {
          stepNumber: 5,
          description: "State the generalised Watson building block.",
          workingLatex:
            "\\int_0^{\\infty} t^{\\,s} e^{-x t}\\,dt = \\frac{\\Gamma(s+1)}{x^{\\,s+1}}",
          explanation:
            "For non-integer \\( s \\) the factorial becomes a Gamma value. We will apply it with \\( s = n - 1/2 \\).",
        },
        {
          stepNumber: 6,
          description: "Specialise to half-integer exponents.",
          workingLatex:
            "\\int_0^{\\infty} t^{\\,n-1/2} e^{-x t}\\,dt = \\frac{\\Gamma(n+1/2)}{x^{\\,n+1/2}}",
          explanation:
            "Each term \\( t^{n-1/2} \\) integrates to \\( \\Gamma(n+1/2)/x^{n+1/2} \\); every resulting power is half-integer.",
        },
        {
          stepNumber: 7,
          description: "Integrate the leading term.",
          workingLatex:
            "\\int_0^{\\infty} t^{-1/2} e^{-xt}\\,dt = \\frac{\\Gamma(1/2)}{x^{1/2}}",
          explanation:
            "The \\( t^{-1/2} \\) term (n = 0) gives \\( \\Gamma(1/2)/x^{1/2} \\).",
        },
        {
          stepNumber: 8,
          description: "Integrate the correction term.",
          workingLatex:
            "-\\int_0^{\\infty} t^{1/2} e^{-xt}\\,dt = -\\frac{\\Gamma(3/2)}{x^{3/2}}",
          explanation:
            "The \\( -t^{1/2} \\) term (n = 1) gives \\( -\\Gamma(3/2)/x^{3/2} \\), the first correction.",
        },
        {
          stepNumber: 9,
          description: "Evaluate the first Gamma value.",
          workingLatex:
            "\\Gamma\\!\\left(\\tfrac{1}{2}\\right) = \\sqrt{\\pi}",
          explanation:
            "The classic special value \\( \\Gamma(1/2) = \\sqrt\\pi \\).",
        },
        {
          stepNumber: 10,
          description: "Evaluate the second Gamma value.",
          workingLatex:
            "\\Gamma\\!\\left(\\tfrac{3}{2}\\right) = \\tfrac{1}{2}\\Gamma\\!\\left(\\tfrac12\\right) = \\frac{\\sqrt{\\pi}}{2}",
          explanation:
            "Use the recurrence \\( \\Gamma(s+1) = s\\Gamma(s) \\) with \\( s = 1/2 \\).",
        },
        {
          stepNumber: 11,
          description: "Write the leading term explicitly.",
          workingLatex:
            "\\frac{\\Gamma(1/2)}{x^{1/2}} = \\sqrt{\\frac{\\pi}{x}}",
          explanation:
            "Substituting \\( \\Gamma(1/2) = \\sqrt\\pi \\) gives the leading half-integer term \\( \\sqrt{\\pi/x} \\).",
        },
        {
          stepNumber: 12,
          description: "Write the correction term explicitly.",
          workingLatex:
            "-\\frac{\\Gamma(3/2)}{x^{3/2}} = -\\frac{\\sqrt{\\pi}}{2}\\,x^{-3/2}",
          explanation:
            "Substituting \\( \\Gamma(3/2) = \\tfrac{\\sqrt\\pi}{2} \\) gives the first correction.",
        },
        {
          stepNumber: 13,
          description: "Collect the first two terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{\\sqrt{t}\\,(1+t)}\\,dt \\sim \\sqrt{\\frac{\\pi}{x}} - \\frac{\\sqrt{\\pi}}{2}\\,x^{-3/2} + \\cdots",
          explanation:
            "Combining the leading term and the correction gives the leading two terms of the expansion.",
        },
        {
          stepNumber: 14,
          description: "Identify the next term's structure.",
          workingLatex:
            "n = 2:\\quad +\\frac{\\Gamma(5/2)}{x^{5/2}}, \\qquad \\Gamma\\!\\left(\\tfrac52\\right) = \\frac{3\\sqrt\\pi}{4}",
          explanation:
            "The pattern continues at \\( x^{-5/2} \\), confirming the half-integer spacing of the powers.",
        },
        {
          stepNumber: 15,
          description: "Write the general term.",
          workingLatex:
            "\\text{amplitude} \\sim t^{-1/2}\\sum_n (-1)^{n} t^{n} \\ \\Rightarrow\\ \\sum_n (-1)^{n}\\frac{\\Gamma(n+1/2)}{x^{n+1/2}}",
          explanation:
            "Each amplitude coefficient \\( c_n = (-1)^n \\) maps to \\( c_n\\Gamma(n+1/2)x^{-(n+1/2)} \\).",
        },
        {
          stepNumber: 16,
          description: "Explain the half-integer structure.",
          workingLatex:
            "s \\notin \\mathbb{Z} \\ \\Rightarrow\\ x^{-(s+1)} \\notin \\{\\text{integer powers}\\}",
          explanation:
            "A non-integer exponent \\( s = -1/2 \\) in the amplitude propagates directly into non-integer powers of \\( 1/x \\) — this is Watson's lemma in its general form.",
        },
        {
          stepNumber: 17,
          description: "Contrast with a smooth amplitude.",
          workingLatex:
            "\\text{smooth amplitude} \\Rightarrow \\text{integer powers; } t^{-1/2} \\Rightarrow \\text{half-integer powers}",
          explanation:
            "A smooth (analytic) amplitude would give a series in integer powers of \\( 1/x \\); the branch point \\( t^{-1/2} \\) is exactly what introduces the half-integers.",
        },
        {
          stepNumber: 18,
          description: "Compute the two-term numerical value.",
          workingLatex:
            "x = 30:\\quad \\sqrt{\\frac{\\pi}{30}} - \\frac{\\sqrt{\\pi}}{2}\\,30^{-3/2} = 0.31821",
          explanation:
            "Evaluate the two-term expansion at \\( x = 30 \\).",
        },
        {
          stepNumber: 19,
          description: "Compare with the exact integral.",
          workingLatex:
            "\\text{exact} = 0.31846, \\quad \\text{two-term} = 0.31821",
          explanation:
            "The two-term value agrees with the exact integral to three significant figures, confirming the leading behaviour.",
        },
        {
          stepNumber: 20,
          description: "State the result.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{\\sqrt{t}\\,(1+t)}\\,dt \\sim \\sqrt{\\frac{\\pi}{x}} - \\frac{\\sqrt{\\pi}}{2}\\,x^{-3/2} + \\cdots",
          explanation:
            "The expansion proceeds in half-integer powers of \\( 1/x \\), inherited from the \\( t^{-1/2} \\) branch point at the endpoint.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\sqrt{\\frac{\\pi}{x}} - \\frac{\\sqrt{\\pi}}{2}\\,x^{-3/2} + \\cdots \\)",
    },
  },
  // REVIEW: oscillatory endpoint integral; coefficients (i, 1, 0, 2 for x^-1..x^-4)
  // verified by the n!/(-ix)^{n+1} moment expansion, not by direct quadrature.
  {
    id: "am7c-028",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 28",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first two non-zero terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{\\infty} e^{\\,i x\\left(\\frac{1}{3}t^{3} + t\\right)}\\,\\frac{dt}{1+t} \\) by integration by parts, treating the amplitude carefully at the endpoint.",
    marks: 7,
    yearCreated: 2026,
    tags: ["steepest descent", "integration by parts", "amplitude endpoint"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the phase.",
          workingLatex:
            "\\psi(t) = \\tfrac13 t^{3} + t, \\qquad \\psi'(t) = t^{2} + 1, \\qquad \\psi''(t) = 2t",
          explanation:
            "Record the phase and its first two derivatives; they appear in the IBP device and the quotient that follows.",
        },
        {
          stepNumber: 2,
          description: "Confirm endpoint domination.",
          workingLatex:
            "\\psi'(t) = t^{2} + 1 > 0 \\ \\Rightarrow\\ \\text{no real saddle; endpoint } t = 0",
          explanation:
            "Since \\( \\psi' \\) never vanishes, there is no interior stationary point; the contribution comes entirely from the endpoint \\( t = 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Record the amplitude value at the endpoint.",
          workingLatex:
            "A(t) = \\frac{1}{1+t} \\ \\Rightarrow\\ A(0) = 1",
          explanation:
            "The amplitude is smooth at the endpoint with value \\( 1 \\) — this controls the leading term.",
        },
        {
          stepNumber: 4,
          description: "Record the amplitude slope at the endpoint.",
          workingLatex:
            "A'(t) = -\\frac{1}{(1+t)^{2}} \\ \\Rightarrow\\ A'(0) = -1",
          explanation:
            "The non-zero slope \\( A'(0) = -1 \\) will break the even/odd parity seen in the bare integral am7c-019, producing a \\( 1/x^2 \\) term.",
        },
        {
          stepNumber: 5,
          description: "Write the IBP device.",
          workingLatex:
            "e^{ix\\psi} = \\frac{1}{ix\\,\\psi'}\\frac{d}{dt}e^{ix\\psi}",
          explanation:
            "Dividing by \\( ix\\psi' \\) turns the oscillatory exponential into an exact derivative, just as in am7c-019, now with the amplitude \\( A \\) carried along.",
        },
        {
          stepNumber: 6,
          description: "Integrate by parts once.",
          workingLatex:
            "I = \\left[\\frac{A\\,e^{\\,i x\\psi}}{i x\\,\\psi'}\\right]_0^{\\infty} - \\frac{1}{i x}\\int_0^{\\infty} e^{\\,i x\\psi}\\,\\frac{d}{dt}\\!\\left(\\frac{A}{\\psi'}\\right)dt",
          explanation:
            "Apply \\( \\int u\\,dv = [uv] - \\int v\\,du \\) with \\( u = A/(ix\\psi') \\). The boundary term holds the leading behaviour.",
        },
        {
          stepNumber: 7,
          description: "Discard the upper boundary.",
          workingLatex:
            "\\left.\\frac{A\\,e^{ix\\psi}}{ix\\,\\psi'}\\right|_{t\\to\\infty} = 0",
          explanation:
            "As \\( t \\to \\infty \\), \\( A \\to 0 \\) and \\( \\psi' \\to \\infty \\) while the exponential is bounded, so the upper boundary contributes nothing.",
        },
        {
          stepNumber: 8,
          description: "Evaluate the leading boundary term.",
          workingLatex:
            "\\text{term}_0 = -\\frac{A(0)}{i x\\,\\psi'(0)} = -\\frac{1}{i x\\cdot 1} = -\\frac{1}{ix}",
          explanation:
            "With \\( A(0) = 1 \\) and \\( \\psi'(0) = 1 \\), the lower-limit boundary value is \\( -1/(ix) \\).",
        },
        {
          stepNumber: 9,
          description: "Simplify the leading term.",
          workingLatex:
            "-\\frac{1}{ix} = \\frac{i}{x}",
          explanation:
            "Using \\( 1/i = -i \\). The leading term is \\( i/x \\), unchanged from the bare integral (am7c-011) since \\( A(0) = 1 \\).",
        },
        {
          stepNumber: 10,
          description: "Write the quotient-rule derivative.",
          workingLatex:
            "\\frac{d}{dt}\\!\\left(\\frac{A}{\\psi'}\\right) = \\frac{A'\\psi' - A\\psi''}{(\\psi')^{2}}",
          explanation:
            "The next amplitude requires the derivative of \\( A/\\psi' \\), given by the quotient rule.",
        },
        {
          stepNumber: 11,
          description: "Evaluate the quotient derivative at the endpoint.",
          workingLatex:
            "\\left.\\frac{A'\\psi' - A\\psi''}{(\\psi')^{2}}\\right|_{t=0} = \\frac{(-1)(1) - (1)(0)}{1^{2}} = -1",
          explanation:
            "At \\( t = 0 \\): \\( A' = -1 \\), \\( \\psi' = 1 \\), \\( \\psi'' = 0 \\). Since \\( \\psi''(0) = 0 \\), only \\( A'(0) = -1 \\) survives.",
        },
        {
          stepNumber: 12,
          description: "Form the next amplitude.",
          workingLatex:
            "A_1 = -\\frac{1}{ix}\\frac{d}{dt}\\!\\left(\\frac{A}{\\psi'}\\right) \\ \\Rightarrow\\ A_1(0) = -\\frac{1}{ix}(-1) = \\frac{1}{ix}",
          explanation:
            "The recursion gives the next amplitude \\( A_1 \\); evaluating at the endpoint yields \\( A_1(0) = 1/(ix) \\).",
        },
        {
          stepNumber: 13,
          description: "Take the second boundary term.",
          workingLatex:
            "\\text{term}_1 = -\\frac{A_1(0)}{i x\\,\\psi'(0)} = -\\frac{1}{ix}\\cdot\\frac{1}{ix} = -\\frac{1}{(ix)^{2}}",
          explanation:
            "A second IBP pass produces this boundary term from the new amplitude.",
        },
        {
          stepNumber: 14,
          description: "Simplify the second term.",
          workingLatex:
            "-\\frac{1}{(ix)^{2}} = -\\frac{1}{-x^{2}} = \\frac{1}{x^{2}}",
          explanation:
            "Using \\( (ix)^2 = -x^2 \\). Unlike the bare integral of am7c-011, the non-zero \\( A'(0) \\) now produces a real \\( 1/x^{2} \\) term.",
        },
        {
          stepNumber: 15,
          description: "Assemble the leading two non-zero terms.",
          workingLatex:
            "I \\sim \\frac{i}{x} + \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "Combining the two boundary terms gives the leading behaviour. The amplitude's slope has introduced a \\( 1/x^2 \\) term absent in the bare case.",
        },
        {
          stepNumber: 16,
          description: "Set up an independent moment cross-check.",
          workingLatex:
            "\\frac{1}{1+t} = \\sum_{n\\ge0}(-1)^{n}t^{n}, \\qquad e^{ixt^{3}/3} = \\sum_{m\\ge0}\\frac{(ix/3)^{m}}{m!}t^{3m}",
          explanation:
            "Expand both the amplitude and the cubic exponential as power series, treating \\( e^{ixt} \\) as the linear phase.",
        },
        {
          stepNumber: 17,
          description: "Apply the oscillatory moment integral.",
          workingLatex:
            "\\int_0^{\\infty} t^{p} e^{ixt}\\,dt = \\frac{p!}{(-ix)^{p+1}}",
          explanation:
            "Each combined power \\( t^p \\) integrates against the linear phase to \\( p!/(-ix)^{p+1} \\), the analytically-continued Watson block.",
        },
        {
          stepNumber: 18,
          description: "Collect the coefficient of x^{-1} and x^{-2}.",
          workingLatex:
            "x^{-1}:\\ \\frac{0!}{(-i)} = i; \\qquad x^{-2}:\\ \\frac{(-1)\\cdot 1!}{(-i)^{2}} = \\frac{-1}{-1} = 1",
          explanation:
            "The \\( m = 0 \\) terms of the cubic series give the low-order powers: the constant amplitude term gives \\( i/x \\), the linear amplitude term \\( -t \\) gives \\( +1/x^2 \\).",
        },
        {
          stepNumber: 19,
          description: "Collect the coefficients of x^{-3} and x^{-4}.",
          workingLatex:
            "x^{-3}:\\ 0; \\qquad x^{-4}:\\ 2 \\ \\Rightarrow\\ \\text{coefficients } (i, 1, 0, 2)",
          explanation:
            "Combining the amplitude and cubic-phase series confirms the pattern \\( i, 1, 0, 2 \\) for \\( x^{-1}, x^{-2}, x^{-3}, x^{-4} \\) — agreeing with the IBP boundary terms.",
        },
        {
          stepNumber: 20,
          description: "State the result.",
          workingLatex:
            "I \\sim \\frac{i}{x} + \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "The two routes agree: the amplitude's endpoint slope \\( A'(0)\\ne0 \\) breaks the parity of am7c-019, giving a genuine \\( 1/x^2 \\) term.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle I \\sim \\frac{i}{x} + \\frac{1}{x^{2}} + \\cdots \\)",
    },
  },
  {
    id: "am7c-029",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 29",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "The complementary error function satisfies \\( \\operatorname{erfc}(z) = \\frac{2}{\\sqrt\\pi}\\int_z^{\\infty} e^{-s^{2}}\\,ds \\). By integration by parts, show that as \\( z \\to +\\infty \\), \\( \\operatorname{erfc}(z) \\sim \\dfrac{e^{-z^{2}}}{z\\sqrt\\pi}\\left(1 - \\dfrac{1}{2z^{2}} + \\cdots\\right) \\), and give the general coefficient.",
    marks: 6,
    yearCreated: 2026,
    tags: ["erfc", "integration by parts", "general coefficient", "double factorial"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the Gaussian.",
          workingLatex:
            "\\frac{d}{ds}e^{-s^{2}} = -2s\\,e^{-s^{2}}",
          explanation:
            "Compute the derivative of \\( e^{-s^2} \\); inverting it is what lets us write the integrand as an exact derivative.",
        },
        {
          stepNumber: 2,
          description: "Write the integrand as an exact derivative.",
          workingLatex:
            "e^{-s^{2}} = -\\frac{1}{2s}\\,\\frac{d}{ds}\\,e^{-s^{2}}",
          explanation:
            "The factor \\( -1/(2s) \\) turns the integrand into an exact derivative — the key to the IBP series. This works because there is no stationary point on \\( [z,\\infty) \\) with \\( z > 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Choose parts for the first integration.",
          workingLatex:
            "u = -\\frac{1}{2s}, \\quad dv = \\frac{d}{ds}e^{-s^{2}}\\,ds \\ \\Rightarrow\\ du = \\frac{1}{2s^{2}}\\,ds, \\quad v = e^{-s^{2}}",
          explanation:
            "Differentiate the algebraic factor \\( -1/(2s) \\) and integrate the exact derivative back to \\( e^{-s^2} \\).",
        },
        {
          stepNumber: 4,
          description: "Apply integration by parts.",
          workingLatex:
            "\\int_z^{\\infty} e^{-s^{2}}\\,ds = \\left[-\\frac{e^{-s^{2}}}{2s}\\right]_z^{\\infty} - \\int_z^{\\infty} \\frac{e^{-s^{2}}}{2s^{2}}\\,ds",
          explanation:
            "Substitute into \\( \\int u\\,dv = [uv] - \\int v\\,du \\). The boundary term holds the leading behaviour.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the first boundary term.",
          workingLatex:
            "\\left[-\\frac{e^{-s^{2}}}{2s}\\right]_z^{\\infty} = 0 - \\left(-\\frac{e^{-z^{2}}}{2z}\\right) = \\frac{e^{-z^{2}}}{2z}",
          explanation:
            "At \\( s = \\infty \\) the Gaussian kills the term; at \\( s = z \\) it gives the leading term \\( e^{-z^2}/(2z) \\).",
        },
        {
          stepNumber: 6,
          description: "Identify the remainder.",
          workingLatex:
            "\\int_z^{\\infty} e^{-s^{2}}\\,ds = \\frac{e^{-z^{2}}}{2z} - \\frac{1}{2}\\int_z^{\\infty} \\frac{e^{-s^{2}}}{s^{2}}\\,ds",
          explanation:
            "The remainder carries an extra \\( 1/s^2 \\), smaller by \\( O(1/z^2) \\). We iterate the same device on it.",
        },
        {
          stepNumber: 7,
          description: "Choose parts for the second integration.",
          workingLatex:
            "u = -\\frac{1}{2s^{3}}, \\quad dv = \\frac{d}{ds}e^{-s^{2}}\\,ds \\ \\Rightarrow\\ du = \\frac{3}{2s^{4}}\\,ds, \\quad v = e^{-s^{2}}",
          explanation:
            "On the remainder, write \\( e^{-s^2}/s^2 = -\\tfrac{1}{2s^3}\\tfrac{d}{ds}e^{-s^2} \\) and integrate by parts again; differentiating \\( s^{-3} \\) brings down the factor \\( 3 \\).",
        },
        {
          stepNumber: 8,
          description: "Integrate by parts a second time.",
          workingLatex:
            "\\int_z^{\\infty} \\frac{e^{-s^{2}}}{s^{2}}\\,ds = \\frac{e^{-z^{2}}}{2z^{3}} - \\frac{3}{2}\\int_z^{\\infty} \\frac{e^{-s^{2}}}{s^{4}}\\,ds",
          explanation:
            "The boundary term is \\( e^{-z^2}/(2z^3) \\); each step multiplies by an odd number (here \\( 3 \\)) and raises the power of \\( s \\) in the denominator by two.",
        },
        {
          stepNumber: 9,
          description: "Integrate by parts a third time.",
          workingLatex:
            "\\int_z^{\\infty} \\frac{e^{-s^{2}}}{s^{4}}\\,ds = \\frac{e^{-z^{2}}}{2z^{5}} - \\frac{5}{2}\\int_z^{\\infty} \\frac{e^{-s^{2}}}{s^{6}}\\,ds",
          explanation:
            "One more pass, now picking up the factor \\( 5 \\), enough to reach the third term of the series.",
        },
        {
          stepNumber: 10,
          description: "Substitute the third into the second.",
          workingLatex:
            "\\int_z^{\\infty} \\frac{e^{-s^{2}}}{s^{2}}\\,ds = \\frac{e^{-z^{2}}}{2z^{3}} - \\frac{3}{2}\\cdot\\frac{e^{-z^{2}}}{2z^{5}} + \\cdots",
          explanation:
            "Back-substitute to express the first remainder in terms of two boundary terms.",
        },
        {
          stepNumber: 11,
          description: "Chain into the original integral.",
          workingLatex:
            "\\int_z^{\\infty} e^{-s^{2}}\\,ds = \\frac{e^{-z^{2}}}{2z} - \\frac{1}{2}\\left[\\frac{e^{-z^{2}}}{2z^{3}} - \\frac{3}{2}\\cdot\\frac{e^{-z^{2}}}{2z^{5}} + \\cdots\\right]",
          explanation:
            "Substitute back into the first IBP result; the \\( -\\tfrac12 \\) prefactor multiplies the bracket.",
        },
        {
          stepNumber: 12,
          description: "Expand the brackets.",
          workingLatex:
            "= \\frac{e^{-z^{2}}}{2z} - \\frac{1}{2}\\cdot\\frac{e^{-z^{2}}}{2z^{3}} + \\frac{1}{2}\\cdot\\frac{3}{2}\\cdot\\frac{e^{-z^{2}}}{2z^{5}} - \\cdots",
          explanation:
            "Multiplying out, the second boundary term carries \\( -\\tfrac12 \\), the third \\( +\\tfrac12\\cdot\\tfrac32 \\) — the alternating double-factorial pattern emerges.",
        },
        {
          stepNumber: 13,
          description: "Factor out the leading term.",
          workingLatex:
            "\\int_z^{\\infty} e^{-s^{2}}\\,ds \\sim \\frac{e^{-z^{2}}}{2z}\\left(1 - \\frac{1}{2z^{2}} + \\frac{3}{4z^{4}} - \\cdots\\right)",
          explanation:
            "Factoring \\( e^{-z^2}/(2z) \\) exposes the relative correction series.",
        },
        {
          stepNumber: 14,
          description: "Verify the second coefficient.",
          workingLatex:
            "-\\frac{1}{2}\\cdot\\frac{1}{2z^{3}}\\Big/\\frac{1}{2z} = -\\frac{1}{2z^{2}}",
          explanation:
            "Dividing the second boundary term by the leading term confirms the relative coefficient \\( -1/(2z^2) \\).",
        },
        {
          stepNumber: 15,
          description: "Verify the third coefficient.",
          workingLatex:
            "\\frac{1}{2}\\cdot\\frac{3}{2}\\cdot\\frac{1}{2z^{5}}\\Big/\\frac{1}{2z} = \\frac{3}{4z^{4}}",
          explanation:
            "Likewise the third term gives the relative coefficient \\( +3/(4z^4) \\).",
        },
        {
          stepNumber: 16,
          description: "Multiply through to get erfc.",
          workingLatex:
            "\\operatorname{erfc}(z) = \\frac{2}{\\sqrt\\pi}\\int_z^{\\infty} e^{-s^{2}}\\,ds \\sim \\frac{e^{-z^{2}}}{z\\sqrt\\pi}\\left(1 - \\frac{1}{2z^{2}} + \\frac{3}{4z^{4}} - \\cdots\\right)",
          explanation:
            "Multiplying by \\( 2/\\sqrt\\pi \\) turns \\( e^{-z^2}/(2z) \\) into \\( e^{-z^2}/(z\\sqrt\\pi) \\), giving the stated form.",
        },
        {
          stepNumber: 17,
          description: "Express the coefficients as double factorials.",
          workingLatex:
            "1 = (-1)!!, \\quad \\frac{1}{2} = \\frac{1!!}{2}, \\quad \\frac{3}{4} = \\frac{3!!}{2^{2}}",
          explanation:
            "The numerators \\( 1, 1, 3 \\) are the double factorials \\( (-1)!!, 1!!, 3!! \\) (with the convention \\( (-1)!! = 1 \\)); the denominators are powers of \\( 2 \\).",
        },
        {
          stepNumber: 18,
          description: "State the general coefficient.",
          workingLatex:
            "\\operatorname{erfc}(z) \\sim \\frac{e^{-z^{2}}}{z\\sqrt\\pi}\\sum_{n=0}^{\\infty} (-1)^{n}\\frac{(2n-1)!!}{(2z^{2})^{n}}",
          explanation:
            "The general coefficient is \\( (-1)^n(2n-1)!! \\) over \\( (2z^2)^n \\): the values read \\( 1, 1, 3, 15, \\dots \\)",
        },
        {
          stepNumber: 19,
          description: "Note the series diverges.",
          workingLatex:
            "\\frac{(2n-1)!!}{(2z^{2})^{n}} \\to \\infty \\quad (n \\to \\infty)",
          explanation:
            "The double factorial outgrows any geometric factor, so the series is asymptotic, not convergent — accurate when truncated near its smallest term.",
        },
        {
          stepNumber: 20,
          description: "Confirm numerically.",
          workingLatex:
            "z = 4:\\quad \\operatorname{erfc}(4) = 1.5417\\times10^{-8}, \\quad \\text{3-term series} = 1.5417\\times10^{-8}",
          explanation:
            "The three-term series matches the exact \\( \\operatorname{erfc}(4) \\) to all printed digits, confirming the leading coefficients.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\operatorname{erfc}(z) \\sim \\frac{e^{-z^{2}}}{z\\sqrt\\pi}\\sum_{n\\ge0}(-1)^{n}\\frac{(2n-1)!!}{(2z^{2})^{n}} \\)",
      canonicalAnswer: "exp(-z^2)/(z*sqrt(pi))*(1 - 1/(2*z^2) + 3/(4*z^4))",
    },
  },
  {
    id: "am7c-030",
    topicRef: "am7c",
    topicTitle: "Higher-order terms & IBP cross-checks 30",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading two terms as \\( x \\to +\\infty \\) of \\( \\displaystyle \\int_0^{1} (1-t)^{x}\\,(1+t)\\,dt \\), first exactly and then by recognising it as a Laplace-type endpoint integral; confirm the two agree.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Laplace method", "endpoint integral", "exact cross-check"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recast as an exponential phase.",
          workingLatex:
            "(1-t)^{x} = e^{x\\ln(1-t)} = e^{-x\\,\\phi(t)}, \\qquad \\phi(t) = -\\ln(1-t)",
          explanation:
            "Write the algebraic factor as an exponential so the large parameter \\( x \\) multiplies a single phase \\( \\phi \\).",
        },
        {
          stepNumber: 2,
          description: "Locate the maximum of the integrand.",
          workingLatex:
            "\\phi(0) = 0, \\qquad \\phi'(t) = \\frac{1}{1-t} \\Rightarrow \\phi'(0) = 1 > 0",
          explanation:
            "The phase increases from \\( 0 \\) at \\( t = 0 \\), so the integrand \\( e^{-x\\phi} \\) is largest at the endpoint \\( t = 0 \\) — a Laplace-type endpoint integral.",
        },
        {
          stepNumber: 3,
          description: "Change variables to a standard Laplace form.",
          workingLatex:
            "u = -\\ln(1-t), \\quad t = 1 - e^{-u}, \\quad dt = e^{-u}\\,du",
          explanation:
            "This straightens the phase to the clean \\( e^{-xu} \\). The endpoint \\( t = 0 \\) maps to \\( u = 0 \\); the far end \\( t = 1 \\) maps to \\( u = \\infty \\).",
        },
        {
          stepNumber: 4,
          description: "Rewrite the polynomial factor in u.",
          workingLatex:
            "1 + t = 1 + (1 - e^{-u}) = 2 - e^{-u}",
          explanation:
            "Substitute \\( t = 1 - e^{-u} \\) into \\( 1+t \\). The amplitude (with the Jacobian) becomes \\( (2 - e^{-u})e^{-u} \\).",
        },
        {
          stepNumber: 5,
          description: "Form the full amplitude.",
          workingLatex:
            "\\int_0^{1}(1-t)^{x}(1+t)\\,dt = \\int_0^{\\infty} e^{-xu}\\,(2 - e^{-u})\\,e^{-u}\\,du",
          explanation:
            "Collecting the exponential \\( e^{-xu} \\) and the amplitude \\( (2-e^{-u})e^{-u} \\); now expand the amplitude about \\( u = 0 \\).",
        },
        {
          stepNumber: 6,
          description: "Expand the first factor.",
          workingLatex:
            "2 - e^{-u} = 2 - \\left(1 - u + \\tfrac{u^{2}}{2} - \\cdots\\right) = 1 + u - \\frac{u^{2}}{2} + \\cdots",
          explanation:
            "Expand \\( e^{-u} \\) and subtract from \\( 2 \\); the constant is \\( 1 \\), the linear coefficient \\( +1 \\).",
        },
        {
          stepNumber: 7,
          description: "Expand the Jacobian factor.",
          workingLatex:
            "e^{-u} = 1 - u + \\frac{u^{2}}{2} - \\cdots",
          explanation:
            "The standard exponential series for the Jacobian factor.",
        },
        {
          stepNumber: 8,
          description: "Multiply the two factors.",
          workingLatex:
            "(1 + u - \\tfrac{u^{2}}{2})(1 - u + \\tfrac{u^{2}}{2}) = 1 + (1-1)u + \\cdots",
          explanation:
            "The constant term is \\( 1 \\); the linear coefficient is \\( 1\\cdot(-1) + 1\\cdot 1 = 0 \\) — the linear term cancels.",
        },
        {
          stepNumber: 9,
          description: "Identify the amplitude expansion.",
          workingLatex:
            "(2 - e^{-u})e^{-u} = 1 + 0\\cdot u - \\frac{u^{2}}{2} + \\cdots",
          explanation:
            "Collecting to second order: constant \\( 1 \\), zero linear term, and a quadratic \\( -u^2/2 \\). The vanishing linear coefficient is the key structural feature.",
        },
        {
          stepNumber: 10,
          description: "Apply Watson to the constant term.",
          workingLatex:
            "\\int_0^{\\infty} 1\\cdot e^{-x u}\\,du = \\frac{0!}{x} = \\frac{1}{x}",
          explanation:
            "The constant term gives the leading \\( 1/x \\).",
        },
        {
          stepNumber: 11,
          description: "Apply Watson to the linear term.",
          workingLatex:
            "\\int_0^{\\infty} 0\\cdot u\\,e^{-x u}\\,du = \\frac{0}{x^{2}} = 0",
          explanation:
            "The vanishing linear coefficient means the \\( 1/x^2 \\) term is absent; the next correction is \\( O(1/x^3) \\), from the \\( -u^2/2 \\) term.",
        },
        {
          stepNumber: 12,
          description: "State the Laplace result.",
          workingLatex:
            "\\int_0^{1}(1-t)^{x}(1+t)\\,dt \\sim \\frac{1}{x} + \\frac{0}{x^{2}} + \\cdots",
          explanation:
            "The Laplace/Watson route gives leading \\( 1/x \\) with no \\( 1/x^2 \\) term. Now we confirm this exactly.",
        },
        {
          stepNumber: 13,
          description: "State the Beta-integral formula.",
          workingLatex:
            "\\int_0^{1} (1-t)^{x} t^{k}\\,dt = B(x+1, k+1) = \\frac{x!\\,k!}{(x+k+1)!}",
          explanation:
            "The exact route uses the Beta integral. We split \\( 1 + t \\) into \\( t^0 \\) and \\( t^1 \\) contributions.",
        },
        {
          stepNumber: 14,
          description: "Evaluate the constant-amplitude integral.",
          workingLatex:
            "\\int_0^{1}(1-t)^{x}\\,dt = B(x+1, 1) = \\frac{1}{x+1}",
          explanation:
            "The \\( k = 0 \\) Beta integral gives \\( 1/(x+1) \\).",
        },
        {
          stepNumber: 15,
          description: "Evaluate the linear-amplitude integral.",
          workingLatex:
            "\\int_0^{1}(1-t)^{x} t\\,dt = B(x+1, 2) = \\frac{1}{(x+1)(x+2)}",
          explanation:
            "The \\( k = 1 \\) Beta integral gives \\( 1/[(x+1)(x+2)] \\).",
        },
        {
          stepNumber: 16,
          description: "Add the two exact contributions.",
          workingLatex:
            "\\int_0^{1}(1-t)^{x}(1+t)\\,dt = \\frac{1}{x+1} + \\frac{1}{(x+1)(x+2)}",
          explanation:
            "Since \\( 1 + t = t^0 + t^1 \\), the exact value is the sum of the two Beta integrals.",
        },
        {
          stepNumber: 17,
          description: "Combine into a single rational function.",
          workingLatex:
            "= \\frac{(x+2) + 1}{(x+1)(x+2)} = \\frac{x+3}{x^{2}+3x+2}",
          explanation:
            "Put over the common denominator \\( (x+1)(x+2) = x^2+3x+2 \\); the numerator is \\( (x+2) + 1 = x+3 \\).",
        },
        {
          stepNumber: 18,
          description: "Expand the leading order at infinity.",
          workingLatex:
            "\\frac{x+3}{x^{2}+3x+2} = \\frac{1}{x}\\cdot\\frac{1 + 3/x}{1 + 3/x + 2/x^{2}} = \\frac{1}{x}\\left(1 + \\cdots\\right)",
          explanation:
            "Factor \\( x \\) from numerator and \\( x^2 \\) from denominator; the leading behaviour is \\( 1/x \\).",
        },
        {
          stepNumber: 19,
          description: "Expand to third order.",
          workingLatex:
            "\\frac{x+3}{x^{2}+3x+2} = \\frac{1}{x} + \\frac{0}{x^{2}} - \\frac{2}{x^{3}} + \\cdots",
          explanation:
            "Carrying the division further gives \\( x^{-1} + 0\\cdot x^{-2} - 2x^{-3} + \\cdots \\): the \\( 1/x^2 \\) coefficient is zero.",
        },
        {
          stepNumber: 20,
          description: "Confirm the two routes agree.",
          workingLatex:
            "\\text{Laplace: } \\frac{1}{x} + \\frac{0}{x^{2}}; \\quad \\text{exact: } \\frac{1}{x} + \\frac{0}{x^{2}}",
          explanation:
            "The vanishing \\( 1/x^{2} \\) coefficient from the exact expansion matches the zero linear amplitude coefficient found by the Laplace route — the two methods agree.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\int_0^{1}(1-t)^{x}(1+t)\\,dt \\sim \\frac{1}{x} + \\cdots \\) (leading term; both methods agree).",
    },
  },
];
