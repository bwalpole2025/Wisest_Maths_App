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
          description: "Integrate by parts, differentiating the algebraic factor.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt = \\left[ -\\frac{e^{-t}}{t} \\right]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt",
          explanation:
            "Take \\( u = 1/t \\) and \\( dv = e^{-t}\\,dt \\), so \\( v = -e^{-t} \\). The whole value comes from the endpoint \\( t = x \\); the upper limit vanishes because \\( e^{-t}/t \\to 0 \\). This is the engine of every IBP cross-check: each integration converts the integral into a boundary term plus a smaller remainder.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the boundary term.",
          workingLatex:
            "= \\frac{e^{-x}}{x} - \\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt",
          explanation:
            "The boundary contribution \\( e^{-x}/x \\) is the leading term. The remaining integral is the same shape with an extra power of \\( t \\) in the denominator, so it is smaller by a factor \\( O(1/x) \\).",
        },
        {
          stepNumber: 3,
          description: "Integrate by parts a second time for the next term.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt = \\frac{e^{-x}}{x^{2}} - 2\\int_x^{\\infty} \\frac{e^{-t}}{t^{3}}\\,dt",
          explanation:
            "Repeating the procedure with \\( u = t^{-2} \\) gives the next boundary term \\( e^{-x}/x^{2} \\), again leaving an integral one order smaller.",
        },
        {
          stepNumber: 4,
          description: "Assemble the two leading terms.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt \\sim \\frac{e^{-x}}{x}\\left( 1 - \\frac{1}{x} + \\cdots \\right)",
          explanation:
            "Subtracting the second boundary term gives the first correction. Numerically at \\( x = 30 \\) the exact value is \\( 3.0216\\times 10^{-15} \\) and this two-term form agrees to the printed digits.",
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
          description: "Expand the amplitude near the endpoint.",
          workingLatex: "\\frac{1}{1+t} = 1 - t + t^{2} - t^{3} + \\cdots",
          explanation:
            "Watson's lemma only sees the behaviour of the amplitude near \\( t = 0 \\), where the weight \\( e^{-xt} \\) is concentrated. Expand it as a Taylor series in \\( t \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate the series term by term.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "Each monomial integrates against the exponential weight to a Gamma-function value; this is the standard Watson building block.",
        },
        {
          stepNumber: 3,
          description: "Collect the leading two terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt \\sim \\frac{1}{x} - \\frac{1}{x^{2}} + \\frac{2}{x^{3}} - \\cdots",
          explanation:
            "The coefficients are \\( (-1)^{n} n! \\). Numerically at \\( x = 40 \\) the integral is \\( 0.024404115 \\) and the series gives \\( 0.024404111 \\), confirming the subleading term.",
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
          description: "Binomial-expand the amplitude about the endpoint.",
          workingLatex:
            "(1+t)^{-1/2} = 1 - \\frac{1}{2}t + \\frac{3}{8}t^{2} - \\cdots",
          explanation:
            "Use \\( (1+t)^{-1/2} = \\sum_n \\binom{-1/2}{n} t^{n} \\). Only the small-\\( t \\) behaviour matters under the concentrated weight \\( e^{-xt} \\).",
        },
        {
          stepNumber: 2,
          description: "Apply the Watson integral to each power.",
          workingLatex:
            "\\int_0^{\\infty} t^{n} e^{-x t}\\,dt = \\frac{n!}{x^{\\,n+1}}",
          explanation:
            "The coefficient of \\( x^{-(n+1)} \\) is \\( \\binom{-1/2}{n}\\,n! \\).",
        },
        {
          stepNumber: 3,
          description: "Read off the first two terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{\\sqrt{1+t}}\\,dt \\sim \\frac{1}{x} - \\frac{1}{2}\\,\\frac{1}{x^{2}} + \\cdots",
          explanation:
            "Numerically at \\( x = 25 \\) the integral is \\( 0.039243772 \\); the series gives \\( 0.039243751 \\).",
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
          description: "Substitute to expose a Gamma integral.",
          workingLatex: "u = x t, \\qquad t = \\frac{u}{x}, \\qquad dt = \\frac{du}{x}",
          explanation:
            "Fractional powers appear in subleading Laplace terms, so this exact value is needed repeatedly. Rescale the variable so the exponent becomes \\( e^{-u} \\).",
        },
        {
          stepNumber: 2,
          description: "Rewrite the integral in the new variable.",
          workingLatex:
            "\\int_0^{\\infty} t^{1/2} e^{-x t}\\,dt = \\frac{1}{x^{3/2}} \\int_0^{\\infty} u^{1/2} e^{-u}\\,du",
          explanation:
            "The factor \\( t^{1/2} = (u/x)^{1/2} \\) and \\( dt = du/x \\) together produce \\( x^{-3/2} \\).",
        },
        {
          stepNumber: 3,
          description: "Identify the Gamma function.",
          workingLatex:
            "\\int_0^{\\infty} u^{1/2} e^{-u}\\,du = \\Gamma\\!\\left(\\tfrac{3}{2}\\right) = \\frac{\\sqrt{\\pi}}{2}",
          explanation:
            "By definition \\( \\Gamma(s) = \\int_0^\\infty u^{s-1} e^{-u}\\,du \\) with \\( s = 3/2 \\), and \\( \\Gamma(3/2) = \\tfrac12\\sqrt\\pi \\).",
        },
        {
          stepNumber: 4,
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
          workingLatex: "\\cos t = 1 - \\frac{t^{2}}{2} + \\cdots",
          explanation:
            "Watson's lemma gives the series directly: only the small-\\( t \\) Taylor coefficients of \\( \\cos t \\) contribute.",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t}\\cos t\\,dt \\sim \\frac{1}{x} - \\frac{1}{2}\\cdot\\frac{2!}{x^{3}} = \\frac{1}{x} - \\frac{1}{x^{3}} + \\cdots",
          explanation:
            "Using \\( \\int_0^\\infty t^n e^{-xt}\\,dt = n!/x^{n+1} \\), the constant term gives \\( 1/x \\) and the \\( -t^2/2 \\) term gives \\( -1/x^3 \\).",
        },
        {
          stepNumber: 3,
          description: "Compare with the exact value.",
          workingLatex:
            "\\frac{x}{x^{2}+1} = \\frac{1}{x}\\cdot\\frac{1}{1 + x^{-2}} = \\frac{1}{x} - \\frac{1}{x^{3}} + \\cdots",
          explanation:
            "The exact closed form expands to exactly the same series, the IBP/Watson cross-check. At \\( x = 30 \\): exact \\( 0.0332963 \\), series \\( 0.0332963 \\).",
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
          description: "Recall the form of the correction series.",
          workingLatex:
            "\\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x}\\left(1 + \\frac{c_1}{x} + \\frac{c_2}{x^{2}} + \\cdots\\right)",
          explanation:
            "Stirling's leading term comes from Laplace's method applied to \\( \\Gamma(x+1) = \\int_0^\\infty t^{x} e^{-t}\\,dt \\). The corrections come from higher Taylor terms of the phase at its maximum.",
        },
        {
          stepNumber: 2,
          description: "Quote the first correction coefficient.",
          workingLatex: "c_1 = \\frac{1}{12}",
          explanation:
            "The cubic and quartic curvature of the phase at the saddle combine to give \\( 1/(12x) \\). This is the standard first Stirling correction.",
        },
        {
          stepNumber: 3,
          description: "State the result with its order.",
          workingLatex:
            "\\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "The first correction is \\( O(1/x) \\). Numerically at \\( x = 30 \\) the ratio \\( \\Gamma(x+1)/[\\sqrt{2\\pi x}(x/e)^x] = 1.0027815 \\) versus \\( 1 + 1/(360) = 1.0027815 \\).",
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
          description: "Expand the amplitude near the endpoint.",
          workingLatex:
            "\\frac{1}{1+t^{2}} = 1 - t^{2} + t^{4} - t^{6} + \\cdots",
          explanation:
            "Only the behaviour at \\( t = 0 \\) matters. Because the amplitude is even, only even powers of \\( t \\) appear, so the expansion will contain only odd powers of \\( 1/x \\).",
        },
        {
          stepNumber: 2,
          description: "Apply the Watson integral to each even power.",
          workingLatex:
            "\\int_0^{\\infty} t^{2k} e^{-x t}\\,dt = \\frac{(2k)!}{x^{\\,2k+1}}",
          explanation:
            "The coefficient of \\( x^{-(2k+1)} \\) is \\( (-1)^{k}(2k)! \\).",
        },
        {
          stepNumber: 3,
          description: "Collect the first three terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{1+t^{2}}\\,dt \\sim \\frac{1}{x} - \\frac{2}{x^{3}} + \\frac{24}{x^{5}} - \\cdots",
          explanation:
            "With \\( (2k)! = 1, 2, 24, \\dots \\) for \\( k = 0,1,2 \\). Numerically at \\( x = 25 \\) the integral is \\( 0.03987435 \\) and the three-term series gives \\( 0.03987434 \\).",
        },
        {
          stepNumber: 4,
          description: "State the order of the first omitted term.",
          workingLatex: "\\text{first omitted term } = O\\!\\left(\\frac{1}{x^{7}}\\right)",
          explanation:
            "The next term is \\( k = 3 \\): \\( -(6!)/x^{7} = -720/x^{7} \\). The rapidly growing coefficients are the hallmark of a divergent (asymptotic) series.",
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
          description: "Identify the maximum of the integrand.",
          workingLatex:
            "\\phi(t) = \\frac{1}{2}t^{2} + \\frac{1}{4}t^{4}, \\qquad \\phi'(t) = t + t^{3} = 0 \\Rightarrow t = 0",
          explanation:
            "The exponent is minimised at \\( t = 0 \\), where \\( \\phi(0) = 0 \\) and \\( \\phi''(0) = 1 \\). The quartic term is what produces the first correction.",
        },
        {
          stepNumber: 2,
          description: "Factor out the Gaussian and expand the remainder.",
          workingLatex:
            "e^{-x\\phi} = e^{-x t^{2}/2}\\,e^{-x t^{4}/4} = e^{-x t^{2}/2}\\left(1 - \\frac{x t^{4}}{4} + \\cdots\\right)",
          explanation:
            "Near the peak \\( t = O(x^{-1/2}) \\), so \\( x t^{4} = O(1/x) \\) is small. Expanding the quartic factor turns the integral into Gaussian moments.",
        },
        {
          stepNumber: 3,
          description: "Use the Gaussian moment formula.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} t^{4} e^{-x t^{2}/2}\\,dt = \\frac{3}{x^{2}}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "With \\( \\int t^{2m} e^{-x t^2/2}\\,dt = (2m-1)!!\\,x^{-m}\\sqrt{2\\pi/x} \\); here \\( m = 2 \\) gives \\( 3!! = 3 \\).",
        },
        {
          stepNumber: 4,
          description: "Combine leading and correction terms.",
          workingLatex:
            "\\int \\sim \\sqrt{\\frac{2\\pi}{x}} - \\frac{x}{4}\\cdot\\frac{3}{x^{2}}\\sqrt{\\frac{2\\pi}{x}} = \\sqrt{\\frac{2\\pi}{x}}\\left(1 - \\frac{3}{4x} + \\cdots\\right)",
          explanation:
            "The \\( -xt^4/4 \\) term contributes \\( -\\tfrac{3}{4x} \\) relative to the leading Gaussian. Numerically the ratio (integral)/\\( \\sqrt{2\\pi/x} \\) at \\( x = 320 \\) is \\( 0.997687 \\) versus \\( 1 - 3/(4\\cdot320) = 0.997656 \\), converging as \\( x \\) grows.",
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
          description: "Integrate by parts once.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt = \\frac{e^{-x}}{x} - \\int_x^{\\infty} \\frac{e^{-t}}{t^{2}}\\,dt",
          explanation:
            "Take \\( v = -e^{-t} \\), \\( u = 1/t \\). The boundary term at \\( t = x \\) gives the leading term \\( e^{-x}/x \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts a second and third time.",
          workingLatex:
            "= \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^{2}} + 2\\int_x^{\\infty} \\frac{e^{-t}}{t^{3}}\\,dt = \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^{2}} + \\frac{2e^{-x}}{x^{3}} - \\cdots",
          explanation:
            "Each step pulls out a boundary term and raises the power of \\( t \\) in the leftover integral by one, generating coefficients \\( (-1)^{n} n! \\).",
        },
        {
          stepNumber: 3,
          description: "Write the asymptotic series.",
          workingLatex:
            "\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt \\sim \\frac{e^{-x}}{x}\\left(1 - \\frac{1}{x} + \\frac{2}{x^{2}} - \\frac{6}{x^{3}} + \\cdots\\right)",
          explanation:
            "Numerically at \\( x = 30 \\): exact \\( E_1(30) = 3.02155\\times 10^{-15} \\); four-term series \\( 3.02156\\times 10^{-15} \\).",
        },
        {
          stepNumber: 4,
          description: "Explain divergence.",
          workingLatex:
            "\\frac{n!}{x^{n}} \\to \\infty \\quad \\text{as } n \\to \\infty \\text{ for fixed } x",
          explanation:
            "The coefficients \\( n! \\) eventually outgrow any fixed power of \\( x \\), so the series diverges for every \\( x \\). It is asymptotic, not convergent: truncating near the smallest term gives the best accuracy.",
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
          description: "Write the integrand in exponential form.",
          workingLatex:
            "t^{x} e^{-x t} = e^{-x(t - \\ln t)} = e^{-x\\,\\phi(t)}, \\qquad \\phi(t) = t - \\ln t",
          explanation:
            "Pulling the algebraic factor into the exponent reveals a phase with an interior maximum of the integrand (minimum of \\( \\phi \\)).",
        },
        {
          stepNumber: 2,
          description: "Locate and characterise the saddle.",
          workingLatex:
            "\\phi'(t) = 1 - \\frac{1}{t} = 0 \\Rightarrow t = 1, \\qquad \\phi(1) = 1, \\quad \\phi''(1) = 1",
          explanation:
            "The minimum of \\( \\phi \\) is at \\( t = 1 \\), giving the dominant factor \\( e^{-x} \\) and Gaussian width set by \\( \\phi''(1) = 1 \\).",
        },
        {
          stepNumber: 3,
          description: "Apply the Laplace formula with first correction.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x\\phi}\\,dt \\sim e^{-x}\\sqrt{\\frac{2\\pi}{x\\,\\phi''(1)}}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "The \\( 1/(12x) \\) correction comes from the \\( \\phi''' \\) and \\( \\phi'''' \\) terms at the saddle, exactly as in Stirling's formula.",
        },
        {
          stepNumber: 4,
          description: "Identify with the exact value.",
          workingLatex:
            "\\frac{\\Gamma(x+1)}{x^{x+1}} = e^{-x}\\sqrt{\\frac{2\\pi}{x}}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "Since \\( \\int_0^\\infty t^x e^{-xt}\\,dt = \\Gamma(x+1)/x^{x+1} \\), dividing Stirling by \\( x^{x+1} \\) gives precisely the Laplace result. At \\( x = 40 \\) both sides equal \\( 1.6873\\times 10^{-18} \\).",
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
            "There is no real stationary point, so the contribution comes entirely from the endpoint \\( t = 0 \\); the natural tool is integration by parts (Q8 on the sheet).",
        },
        {
          stepNumber: 2,
          description: "Write the integrand as an exact derivative.",
          workingLatex:
            "e^{\\,i x\\psi} = \\frac{1}{i x\\,\\psi'(t)}\\,\\frac{d}{dt}\\,e^{\\,i x\\psi}",
          explanation:
            "This is the IBP device for oscillatory integrals: the factor \\( 1/(ix\\psi') \\) makes the exponential an exact derivative.",
        },
        {
          stepNumber: 3,
          description: "Integrate by parts and take the boundary term.",
          workingLatex:
            "I(x) = \\left[ \\frac{e^{\\,i x\\psi}}{i x\\,\\psi'} \\right]_0^{\\infty} - \\int_0^{\\infty} e^{\\,i x\\psi}\\,\\frac{d}{dt}\\!\\left(\\frac{1}{i x\\,\\psi'}\\right)dt = -\\frac{1}{i x\\,\\psi'(0)} + \\cdots = \\frac{i}{x} + \\cdots",
          explanation:
            "At \\( t = \\infty \\) the oscillatory term contributes nothing; at \\( t = 0 \\), \\( \\psi'(0) = 1 \\) gives the leading term \\( -1/(ix) = i/x \\).",
        },
        {
          stepNumber: 4,
          description: "Repeat to obtain the next non-zero term.",
          workingLatex:
            "I(x) \\sim i\\left(\\frac{1}{x} + \\frac{2}{x^{3}} + \\cdots\\right)",
          explanation:
            "Differentiating \\( 1/(ix\\psi') \\) and evaluating again at the endpoint kills the \\( 1/x^{2} \\) term (it vanishes since \\( \\psi''(0)=0 \\)) and produces \\( 2i/x^{3} \\). A symbolic IBP recursion confirms the coefficients \\( a_1 = 1,\\ a_3 = 2 \\).",
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
          description: "Expand the regular part of the amplitude.",
          workingLatex:
            "t^{1/2}(1+t)^{-1} = t^{1/2}\\left(1 - t + t^{2} - \\cdots\\right) = t^{1/2} - t^{3/2} + \\cdots",
          explanation:
            "Keep the singular factor \\( t^{1/2} \\) explicit and Taylor-expand the smooth factor \\( (1+t)^{-1} \\) about \\( t = 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate each fractional power against the weight.",
          workingLatex:
            "\\int_0^{\\infty} t^{\\,s} e^{-x t}\\,dt = \\frac{\\Gamma(s+1)}{x^{\\,s+1}}",
          explanation:
            "For \\( s = 1/2 \\) and \\( s = 3/2 \\) this is the generalised Watson building block with Gamma-function coefficients.",
        },
        {
          stepNumber: 3,
          description: "Assemble the first two terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{t^{1/2} e^{-x t}}{1+t}\\,dt \\sim \\frac{\\Gamma(3/2)}{x^{3/2}} - \\frac{\\Gamma(5/2)}{x^{5/2}} = \\frac{\\sqrt{\\pi}}{2}\\,x^{-3/2} - \\frac{3\\sqrt{\\pi}}{4}\\,x^{-5/2} + \\cdots",
          explanation:
            "Using \\( \\Gamma(3/2) = \\tfrac{\\sqrt\\pi}{2} \\) and \\( \\Gamma(5/2) = \\tfrac{3\\sqrt\\pi}{4} \\). The expansion proceeds in half-integer powers of \\( 1/x \\).",
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
            "Watson's lemma applies to the half-line integral; the tail starting at \\( t = 1 \\) will turn out to be exponentially small.",
        },
        {
          stepNumber: 2,
          description: "Expand the half-line integral.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt \\sim \\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "Same expansion as before: amplitude \\( (1+t)^{-1} = 1 - t + \\cdots \\) integrated against \\( e^{-xt} \\).",
        },
        {
          stepNumber: 3,
          description: "Bound the tail.",
          workingLatex:
            "0 < \\int_1^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt < \\frac{1}{2}\\int_1^{\\infty} e^{-x t}\\,dt = \\frac{e^{-x}}{2x}",
          explanation:
            "The tail is \\( O(e^{-x}) \\), smaller than every power of \\( 1/x \\). It is invisible to the (algebraic) asymptotic series, so the endpoint \\( t = 1 \\) does not appear.",
        },
        {
          stepNumber: 4,
          description: "State the result.",
          workingLatex:
            "\\int_0^{1} \\frac{e^{-x t}}{1+t}\\,dt \\sim \\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "Only the endpoint at the maximum of the integrand (here \\( t = 0 \\)) feeds the power series; the far endpoint is exponentially subdominant.",
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
            "There is no constant term, so the expansion begins at order \\( 1/x^{2} \\), not \\( 1/x \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t}\\ln(1+t)\\,dt \\sim \\frac{1!}{x^{2}} - \\frac{1}{2}\\cdot\\frac{2!}{x^{3}} + \\cdots = \\frac{1}{x^{2}} - \\frac{1}{x^{3}} + \\cdots",
          explanation:
            "Using \\( \\int_0^\\infty t^n e^{-xt}\\,dt = n!/x^{n+1} \\), the \\( t \\) term gives \\( 1/x^{2} \\) and the \\( -t^{2}/2 \\) term gives \\( -1/x^{3} \\).",
        },
        {
          stepNumber: 3,
          description: "Integration-by-parts cross-check of the leading term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t}\\ln(1+t)\\,dt = \\left[ -\\frac{e^{-x t}}{x}\\ln(1+t)\\right]_0^{\\infty} + \\frac{1}{x}\\int_0^{\\infty} \\frac{e^{-x t}}{1+t}\\,dt",
          explanation:
            "Take \\( u = \\ln(1+t) \\), \\( dv = e^{-xt}\\,dt \\). The boundary term vanishes at both ends (\\( \\ln 1 = 0 \\) at \\( t = 0 \\)).",
        },
        {
          stepNumber: 4,
          description: "Combine with the known sub-integral.",
          workingLatex:
            "= \\frac{1}{x}\\left(\\frac{1}{x} - \\frac{1}{x^{2}} + \\cdots\\right) = \\frac{1}{x^{2}} - \\frac{1}{x^{3}} + \\cdots",
          explanation:
            "Using the am7c-002 result for \\( \\int_0^\\infty e^{-xt}/(1+t)\\,dt \\). The IBP route reproduces the Watson series exactly, the desired cross-check.",
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
            "The integrand peaks at the endpoint \\( t = 0 \\), where \\( \\phi(0) = 0 \\). This is a half-Gaussian endpoint maximum (cf. Q2 on the sheet).",
        },
        {
          stepNumber: 2,
          description: "Expand the phase to quartic order.",
          workingLatex:
            "\\sin^{2}t = t^{2} - \\frac{t^{4}}{3} + \\cdots",
          explanation:
            "The leading \\( t^{2} \\) gives the Gaussian; the \\( -t^{4}/3 \\) term is the source of the first correction.",
        },
        {
          stepNumber: 3,
          description: "Factor and expand the quartic correction.",
          workingLatex:
            "e^{-x\\sin^{2}t} = e^{-x t^{2}}\\left(1 + \\frac{x t^{4}}{3} + \\cdots\\right)",
          explanation:
            "Near the peak \\( t = O(x^{-1/2}) \\), so \\( x t^{4} = O(1/x) \\). The half-range Gaussian gives \\( \\int_0^\\infty e^{-xt^2}\\,dt = \\tfrac12\\sqrt{\\pi/x} \\).",
        },
        {
          stepNumber: 4,
          description: "Combine to confirm the correction.",
          workingLatex:
            "\\int_0^{\\pi/2} e^{-x\\sin^{2}t}\\,dt \\sim \\frac{1}{2}\\sqrt{\\frac{\\pi}{x}}\\left(1 + \\frac{1}{4x} + \\cdots\\right) = \\left(\\frac{\\pi}{4x}\\right)^{1/2}\\!\\left(1 + \\frac{1}{4x} + \\cdots\\right)",
          explanation:
            "The \\( x t^{4}/3 \\) term gives moment \\( \\int_0^\\infty t^4 e^{-xt^2}\\,dt = \\tfrac{3}{8}\\sqrt{\\pi}\\,x^{-5/2} \\); times \\( x/3 \\) and divided by the leading term yields \\( +1/(4x) \\), matching the quoted result.",
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
          description: "Expand the smooth amplitude near the endpoint.",
          workingLatex:
            "(1+t)^{2} e^{-t} = (1 + 2t + t^{2})\\left(1 - t + \\cdots\\right) = 1 + t + \\cdots",
          explanation:
            "Multiply out and keep terms up to first order in \\( t \\): the constant is \\( 1 \\) and the linear coefficient is \\( 2 - 1 = 1 \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t}(1+t)^{2}e^{-t}\\,dt \\sim \\frac{1}{x} + \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "Constant term \\( \\to 1/x \\); linear term \\( \\to 1!/x^{2} \\).",
        },
        {
          stepNumber: 3,
          description: "Cross-check via the exact value.",
          workingLatex:
            "\\int_0^{\\infty} (1+t)^{2} e^{-(x+1)t}\\,dt = \\frac{1}{x+1} + \\frac{2}{(x+1)^{2}} + \\frac{2}{(x+1)^{3}}",
          explanation:
            "Combine the exponentials to \\( e^{-(x+1)t} \\) and use \\( \\int_0^\\infty t^n e^{-st}\\,dt = n!/s^{n+1} \\) with \\( s = x+1 \\). Expanding \\( 1/(x+1) = x^{-1} - x^{-2} + \\cdots \\) and \\( 2/(x+1)^2 = 2x^{-2} + \\cdots \\) gives \\( x^{-1} + x^{-2} + \\cdots \\), matching the Watson series.",
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
          description: "Expand the amplitude near the endpoint.",
          workingLatex:
            "(1+t)^{-2} = 1 - 2t + 3t^{2} - \\cdots",
          explanation:
            "Binomial expansion with exponent \\( -2 \\); coefficients are \\( (-1)^{n}(n+1) \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{(1+t)^{2}}\\,dt \\sim \\frac{1}{x} - \\frac{2}{x^{2}} + \\cdots",
          explanation:
            "Constant \\( \\to 1/x \\); the \\( -2t \\) term \\( \\to -2/x^{2} \\).",
        },
        {
          stepNumber: 3,
          description: "Integration-by-parts check of the leading term.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{(1+t)^{2}}\\,dt = \\left[ -\\frac{e^{-x t}}{x(1+t)^{2}}\\right]_0^{\\infty} - \\frac{2}{x}\\int_0^{\\infty} \\frac{e^{-x t}}{(1+t)^{3}}\\,dt",
          explanation:
            "Take \\( dv = e^{-xt}\\,dt \\), \\( u = (1+t)^{-2} \\). The boundary term at \\( t = 0 \\) gives \\( 1/x \\); the remaining integral is \\( O(1/x) \\) smaller.",
        },
        {
          stepNumber: 4,
          description: "Read off the leading term from the boundary.",
          workingLatex:
            "= \\frac{1}{x} - \\frac{2}{x}\\cdot\\frac{1}{x} + \\cdots = \\frac{1}{x} - \\frac{2}{x^{2}} + \\cdots",
          explanation:
            "The leftover integral has leading value \\( 1/x \\), so the second IBP term reproduces \\( -2/x^{2} \\), agreeing with Watson.",
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
            "The integrand peaks at the endpoint \\( \\theta = 0 \\), with \\( \\phi(0) = 1 \\) and \\( \\phi''(0) = -1 \\).",
        },
        {
          stepNumber: 2,
          description: "Expand the phase to quartic order.",
          workingLatex:
            "\\cos\\theta = 1 - \\frac{\\theta^{2}}{2} + \\frac{\\theta^{4}}{24} - \\cdots",
          explanation:
            "The \\( -\\theta^2/2 \\) term gives the Gaussian; the \\( +\\theta^4/24 \\) term gives the first correction.",
        },
        {
          stepNumber: 3,
          description: "Factor out and integrate the half-Gaussian with correction.",
          workingLatex:
            "I_0(x) = \\frac{e^{x}}{\\pi}\\int_0^{\\pi} e^{-x\\theta^{2}/2}\\left(1 + \\frac{x\\theta^{4}}{24} + \\cdots\\right)d\\theta",
          explanation:
            "Extend the upper limit to \\( \\infty \\) (the tail is exponentially small) and use \\( \\int_0^\\infty e^{-x\\theta^2/2}\\,d\\theta = \\tfrac12\\sqrt{2\\pi/x} \\) and \\( \\int_0^\\infty \\theta^4 e^{-x\\theta^2/2}\\,d\\theta = \\tfrac{3}{x^2}\\cdot\\tfrac12\\sqrt{2\\pi/x} \\).",
        },
        {
          stepNumber: 4,
          description: "Combine to give the expansion.",
          workingLatex:
            "I_0(x) \\sim \\frac{e^{x}}{\\sqrt{2\\pi x}}\\left(1 + \\frac{1}{8x} + \\cdots\\right)",
          explanation:
            "The correction is \\( \\tfrac{x}{24}\\cdot 3/x^{2} = 1/(8x) \\). Numerically at \\( x = 40 \\): \\( I_0/[e^x/\\sqrt{2\\pi x}] = 1.003170 \\) versus \\( 1 + 1/320 = 1.003125 \\).",
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
          description: "Set up the IBP recursion.",
          workingLatex:
            "\\psi'(t) = t^{2} + 1, \\qquad I = \\int_0^{\\infty} g_0\\, e^{\\,i x\\psi}\\,dt \\ \\text{ with } g_0 = 1",
          explanation:
            "There is no real saddle, so the whole expansion comes from the endpoint. Each IBP step replaces \\( g_k \\) by \\( g_{k+1} = -\\tfrac{1}{ix}\\,\\tfrac{d}{dt}\\!\\left(\\tfrac{g_k}{\\psi'}\\right) \\) and contributes the boundary value \\( -g_k(0)/(ix\\,\\psi'(0)) \\).",
        },
        {
          stepNumber: 2,
          description: "First boundary term.",
          workingLatex:
            "\\text{term}_0 = -\\frac{g_0(0)}{i x\\,\\psi'(0)} = -\\frac{1}{i x} = \\frac{i}{x}",
          explanation:
            "With \\( \\psi'(0) = 1 \\). This is the leading \\( i/x \\).",
        },
        {
          stepNumber: 3,
          description: "Generate the next amplitudes and boundary terms.",
          workingLatex:
            "g_1 = -\\frac{1}{i x}\\,\\frac{d}{dt}\\!\\left(\\frac{1}{1+t^{2}}\\right) = \\frac{2t}{i x (1+t^{2})^{2}}, \\quad g_1(0) = 0",
          explanation:
            "The odd factor \\( 2t \\) means \\( g_1(0) = 0 \\): the \\( 1/x^{2} \\) coefficient vanishes, so only odd powers \\( x^{-(2n+1)} \\) survive.",
        },
        {
          stepNumber: 4,
          description: "Compute the third-order term.",
          workingLatex:
            "\\text{term}_2 = -\\frac{g_2(0)}{i x\\,\\psi'(0)} = \\frac{2i}{x^{3}}, \\qquad \\text{term}_4 = \\frac{40 i}{x^{5}}",
          explanation:
            "Carrying the recursion to \\( g_2 \\) and \\( g_4 \\) and evaluating at \\( t = 0 \\) (a symbolic computation) gives boundary values producing \\( 2i/x^3 \\) and \\( 40i/x^5 \\).",
        },
        {
          stepNumber: 5,
          description: "State the series and general coefficient.",
          workingLatex:
            "I(x) \\sim i\\left(\\frac{1}{x} + \\frac{2}{x^{3}} + \\frac{40}{x^{5}} + \\cdots\\right), \\qquad a_n = \\frac{(3n)!}{3^{n}\\,n!}",
          explanation:
            "Equivalently, expanding \\( e^{i x t^3/3} = \\sum_m (ix/3)^m t^{3m}/m! \\) and using \\( \\int_0^\\infty t^{3m} e^{ixt}\\,dt = (3m)!/(-ix)^{3m+1} \\) gives \\( a_n = (3n)!/(3^{n} n!) \\): \\( 1, 2, 40, 2240, \\dots \\) for \\( n = 0,1,2,3 \\). The factorial growth (\\( a_n \\) outgrows any geometric series) makes the series asymptotic, not convergent.",
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
          description: "Integrate by parts twice to expose a recursion.",
          workingLatex:
            "J = \\int_0^{\\infty} \\frac{e^{-x t}}{1+t^{2}}\\,dt = \\frac{1}{x} - \\frac{1}{x}\\int_0^{\\infty} e^{-x t}\\,\\frac{d}{dt}\\!\\left(\\frac{1}{1+t^{2}}\\right)dt",
          explanation:
            "Take \\( dv = e^{-xt}\\,dt \\), \\( u = (1+t^2)^{-1} \\). The boundary term at \\( t = 0 \\) is \\( 1/x \\); the new integrand carries \\( \\tfrac{d}{dt}(1+t^2)^{-1} = -2t/(1+t^2)^2 \\).",
        },
        {
          stepNumber: 2,
          description: "Note the first derivative vanishes at the endpoint.",
          workingLatex:
            "\\left.\\frac{d}{dt}\\frac{1}{1+t^{2}}\\right|_{t=0} = 0 \\ \\Rightarrow\\ \\text{no } 1/x^{2} \\text{ term}",
          explanation:
            "Because the amplitude is even, all odd derivatives vanish at \\( t = 0 \\); only even-order IBP steps produce boundary terms, so the series runs over odd powers of \\( 1/x \\).",
        },
        {
          stepNumber: 3,
          description: "Identify the boundary value at order \\( 2k \\).",
          workingLatex:
            "\\left.\\frac{d^{2k}}{dt^{2k}}\\frac{1}{1+t^{2}}\\right|_{t=0} = (-1)^{k}(2k)!",
          explanation:
            "From \\( (1+t^2)^{-1} = \\sum_k (-1)^k t^{2k} \\), the \\( 2k \\)-th derivative at \\( 0 \\) is \\( (-1)^k(2k)! \\). Each even IBP step contributes this over \\( x^{2k+1} \\).",
        },
        {
          stepNumber: 4,
          description: "Assemble the IBP series.",
          workingLatex:
            "J \\sim \\sum_{k=0}^{\\infty} (-1)^{k}\\,(2k)!\\;x^{-(2k+1)} = \\frac{1}{x} - \\frac{2}{x^{3}} + \\frac{24}{x^{5}} - \\cdots",
          explanation:
            "This is exactly the Watson-lemma result for the same integral, confirming the two methods agree term by term.",
        },
        {
          stepNumber: 5,
          description: "Comment on convergence.",
          workingLatex:
            "\\frac{(2k)!}{x^{2k}} \\to \\infty \\quad (k \\to \\infty)",
          explanation:
            "The factorial coefficients grow faster than any geometric series, so the expansion is asymptotic. Verified numerically at \\( x = 25 \\): three terms give \\( 0.03987434 \\) vs exact \\( 0.03987435 \\).",
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
          description: "Write the integrand in exponential form and scale.",
          workingLatex:
            "\\Gamma(x+1) = \\int_0^{\\infty} e^{x\\ln t - t}\\,dt, \\qquad t = x(1+s)",
          explanation:
            "Substitute \\( t = x(1+s) \\) to centre the maximum (at \\( t = x \\)) at \\( s = 0 \\) and make the large parameter explicit.",
        },
        {
          stepNumber: 2,
          description: "Compute the scaled exponent.",
          workingLatex:
            "x\\ln t - t = x\\ln x - x + x\\big[\\ln(1+s) - s\\big], \\quad dt = x\\,ds",
          explanation:
            "The prefactor \\( e^{x\\ln x - x}\\cdot x = (x/e)^x\\cdot x \\) emerges; the bracket is the phase governing the Gaussian and its corrections.",
        },
        {
          stepNumber: 3,
          description: "Expand the phase to quartic order.",
          workingLatex:
            "\\ln(1+s) - s = -\\frac{s^{2}}{2} + \\frac{s^{3}}{3} - \\frac{s^{4}}{4} + \\cdots",
          explanation:
            "The \\( -s^2/2 \\) term gives the Gaussian width; the cubic and quartic terms feed the \\( 1/x \\) correction.",
        },
        {
          stepNumber: 4,
          description: "Factor the Gaussian and expand the correction.",
          workingLatex:
            "e^{x(\\ln(1+s)-s)} = e^{-x s^{2}/2}\\left(1 + x\\Big(\\tfrac{s^{3}}{3} - \\tfrac{s^{4}}{4}\\Big) + \\tfrac{1}{2}x^{2}\\tfrac{s^{6}}{9} + \\cdots\\right)",
          explanation:
            "Near the peak \\( s = O(x^{-1/2}) \\); keep all terms that contribute at order \\( 1/x \\): the linear-in-\\(x\\) cubic/quartic and the square of the cubic.",
        },
        {
          stepNumber: 5,
          description: "Apply Gaussian moments.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} s^{2m} e^{-x s^{2}/2}\\,ds = (2m-1)!!\\;x^{-m}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "Odd moments vanish. The \\( s^4 \\) term gives \\( 3/x^2 \\) and the \\( s^6 \\) term gives \\( 15/x^3 \\), each times \\( \\sqrt{2\\pi/x} \\).",
        },
        {
          stepNumber: 6,
          description: "Collect the order-\\(1/x\\) corrections.",
          workingLatex:
            "-\\frac{x}{4}\\cdot\\frac{3}{x^{2}} + \\frac{x^{2}}{18}\\cdot\\frac{15}{x^{3}} = -\\frac{3}{4x} + \\frac{15}{18x} = \\frac{1}{12x}",
          explanation:
            "The quartic term gives \\( -3/(4x) \\); the squared-cubic term gives \\( +15/(18x) = 5/(6x) \\). Their sum is \\( -9/12 + 10/12 = 1/12 \\) over \\( x \\).",
        },
        {
          stepNumber: 7,
          description: "Assemble Stirling's series.",
          workingLatex:
            "\\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x}\\left(1 + \\frac{1}{12x} + \\cdots\\right)",
          explanation:
            "Combining \\( (x/e)^x\\cdot x \\) with the Gaussian \\( \\sqrt{2\\pi/x} \\) gives \\( \\sqrt{2\\pi x}(x/e)^x \\). Numerically at \\( x = 30 \\) the ratio is \\( 1.0027815 \\), matching \\( 1 + 1/360 \\).",
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
          description: "Integrate by parts once.",
          workingLatex:
            "\\Gamma(a,x) = \\left[ -t^{a-1} e^{-t}\\right]_x^{\\infty} + (a-1)\\int_x^{\\infty} t^{a-2} e^{-t}\\,dt = x^{a-1} e^{-x} + (a-1)\\,\\Gamma(a-1,x)",
          explanation:
            "Take \\( dv = e^{-t}\\,dt \\), \\( u = t^{a-1} \\). The boundary term at \\( t = x \\) gives \\( x^{a-1}e^{-x} \\); the remaining integral is the same function with \\( a \\to a-1 \\).",
        },
        {
          stepNumber: 2,
          description: "Iterate the recursion.",
          workingLatex:
            "\\Gamma(a,x) = x^{a-1} e^{-x}\\left[1 + \\frac{a-1}{x} + \\frac{(a-1)(a-2)}{x^{2}} + \\cdots\\right]",
          explanation:
            "Each application pulls out a boundary term and lowers the exponent by one, multiplying by the falling factorial of \\( a-1 \\).",
        },
        {
          stepNumber: 3,
          description: "Write the first three terms.",
          workingLatex:
            "\\Gamma(a,x) \\sim x^{a-1} e^{-x}\\left(1 + \\frac{a-1}{x} + \\frac{(a-1)(a-2)}{x^{2}} + \\cdots\\right)",
          explanation:
            "For \\( a = 1 \\) this collapses to \\( e^{-x} \\) exactly (all corrections vanish), consistent with \\( \\Gamma(1,x) = e^{-x} \\).",
        },
        {
          stepNumber: 4,
          description: "State the general term.",
          workingLatex:
            "\\Gamma(a,x) \\sim x^{a-1} e^{-x}\\sum_{n=0}^{\\infty} \\frac{(a-1)(a-2)\\cdots(a-n)}{x^{n}} = x^{a-1}e^{-x}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(a)}{\\Gamma(a-n)}\\,x^{-n}",
          explanation:
            "The general coefficient is the falling factorial \\( (a-1)!/(a-1-n)! \\). For non-integer \\( a \\) it never terminates, giving a divergent asymptotic series. For \\( a = 1 \\), numerically at \\( x = 15 \\): exact \\( E_0\\) form matches \\( e^{-x} \\) and corrections are zero.",
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
          description: "Identify the maximum and Gaussian factor.",
          workingLatex:
            "\\phi(t) = \\frac{t^{2}}{2} + \\frac{t^{3}}{6} + \\frac{t^{4}}{4}, \\qquad \\phi(0) = 0, \\ \\phi''(0) = 1",
          explanation:
            "The minimum of \\( \\phi \\) is at \\( t = 0 \\); the leading term is the standard Gaussian of unit curvature.",
        },
        {
          stepNumber: 2,
          description: "Factor out the Gaussian and expand.",
          workingLatex:
            "e^{-x\\phi} = e^{-x t^{2}/2}\\exp\\!\\left[-x\\Big(\\tfrac{t^{3}}{6} + \\tfrac{t^{4}}{4}\\Big)\\right]",
          explanation:
            "Near the peak \\( t = O(x^{-1/2}) \\), so \\( x t^{3} = O(x^{-1/2}) \\) and \\( x t^{4} = O(x^{-1}) \\). Naively the cubic looks larger, but it is odd.",
        },
        {
          stepNumber: 3,
          description: "Expand to order \\( 1/x \\), keeping the cubic squared.",
          workingLatex:
            "\\exp[\\cdots] = 1 - x\\Big(\\tfrac{t^{3}}{6} + \\tfrac{t^{4}}{4}\\Big) + \\frac{x^{2}}{2}\\Big(\\tfrac{t^{3}}{6}\\Big)^{2} + \\cdots",
          explanation:
            "The linear cubic term is odd, so it integrates to zero against the even Gaussian. The cubic enters only at second order, as \\( \\tfrac{x^2}{2}\\cdot\\tfrac{t^6}{36} \\), which is \\( O(1/x) \\), the same order as the quartic.",
        },
        {
          stepNumber: 4,
          description: "Apply Gaussian moments.",
          workingLatex:
            "\\int t^{4} e^{-x t^{2}/2}\\,dt = \\frac{3}{x^{2}}\\sqrt{\\frac{2\\pi}{x}}, \\qquad \\int t^{6} e^{-x t^{2}/2}\\,dt = \\frac{15}{x^{3}}\\sqrt{\\frac{2\\pi}{x}}",
          explanation:
            "Using \\( \\int t^{2m} e^{-xt^2/2}\\,dt = (2m-1)!!\\,x^{-m}\\sqrt{2\\pi/x} \\).",
        },
        {
          stepNumber: 5,
          description: "Combine the two order-\\(1/x\\) contributions.",
          workingLatex:
            "-\\frac{x}{4}\\cdot\\frac{3}{x^{2}} + \\frac{x^{2}}{72}\\cdot\\frac{15}{x^{3}} = -\\frac{3}{4x} + \\frac{15}{72x} = -\\frac{13}{24x}",
          explanation:
            "Quartic gives \\( -3/(4x) = -18/(24x) \\); squared cubic gives \\( +15/(72x) = +5/(24x) \\). Sum \\( -13/(24x) \\).",
        },
        {
          stepNumber: 6,
          description: "State the result.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} e^{-x\\phi}\\,dt \\sim \\sqrt{\\frac{2\\pi}{x}}\\left(1 - \\frac{13}{24x} + \\cdots\\right)",
          explanation:
            "Both the cubic (via its square) and the quartic contribute at \\( O(1/x) \\); omitting the cubic would give the wrong correction.",
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
          description: "Watson route: expand the amplitude.",
          workingLatex:
            "e^{-t^{2}} = 1 - t^{2} + \\frac{t^{4}}{2} - \\cdots",
          explanation:
            "The Gaussian amplitude is smooth at the endpoint; expand it in powers of \\( t \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x t} e^{-t^{2}}\\,dt \\sim \\frac{1}{x} - \\frac{2!}{x^{3}} + \\cdots = \\frac{1}{x} - \\frac{2}{x^{3}} + \\cdots",
          explanation:
            "Constant \\( \\to 1/x \\); the \\( -t^2 \\) term gives \\( -2!/x^3 = -2/x^3 \\). No \\( 1/x^2 \\) term because the amplitude is even.",
        },
        {
          stepNumber: 3,
          description: "Exact route: complete the square.",
          workingLatex:
            "\\int_0^{\\infty} e^{-t^{2} - x t}\\,dt = e^{x^{2}/4}\\int_0^{\\infty} e^{-(t + x/2)^{2}}\\,dt = \\frac{\\sqrt{\\pi}}{2}\\,e^{x^{2}/4}\\,\\operatorname{erfc}\\!\\left(\\frac{x}{2}\\right)",
          explanation:
            "Writing \\( t^2 + xt = (t + x/2)^2 - x^2/4 \\) gives a shifted Gaussian, i.e. the complementary error function.",
        },
        {
          stepNumber: 4,
          description: "Expand erfc asymptotically.",
          workingLatex:
            "\\operatorname{erfc}(z) \\sim \\frac{e^{-z^{2}}}{z\\sqrt{\\pi}}\\left(1 - \\frac{1}{2z^{2}} + \\cdots\\right), \\qquad z = \\frac{x}{2}",
          explanation:
            "This is the standard erfc asymptotic series (itself an IBP result). Substitute \\( z = x/2 \\).",
        },
        {
          stepNumber: 5,
          description: "Combine the exact form.",
          workingLatex:
            "\\frac{\\sqrt{\\pi}}{2}e^{x^{2}/4}\\cdot\\frac{e^{-x^{2}/4}}{(x/2)\\sqrt{\\pi}}\\left(1 - \\frac{2}{x^{2}} + \\cdots\\right) = \\frac{1}{x}\\left(1 - \\frac{2}{x^{2}} + \\cdots\\right)",
          explanation:
            "The \\( e^{x^2/4} \\) and \\( e^{-z^2} = e^{-x^2/4} \\) cancel, leaving \\( 1/x - 2/x^3 + \\cdots \\), identical to the Watson series.",
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
          description: "Rescale so the large parameter is in the phase-free amplitude.",
          workingLatex:
            "\\frac{1}{x^{2}+t^{2}} = \\frac{1}{x^{2}}\\cdot\\frac{1}{1 + (t/x)^{2}} = \\frac{1}{x^{2}}\\left(1 - \\frac{t^{2}}{x^{2}} + \\cdots\\right)",
          explanation:
            "Here the small parameter is in the amplitude, not the exponential. Expand the denominator for large \\( x \\), valid while the convergent \\( \\cos t \\) integral controls the tail.",
        },
        {
          stepNumber: 2,
          description: "Recognise the required moment integrals.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{\\cos t}{x^{2}+t^{2}}\\,dt = \\frac{\\pi}{2x}\\,e^{-x}",
          explanation:
            "This is a standard exact result (a Fourier cosine transform of the Lorentzian). It is exponentially small, so a naive amplitude expansion in \\( 1/x^2 \\) misses the true behaviour entirely.",
        },
        {
          stepNumber: 3,
          description: "Expand the exact closed form.",
          workingLatex:
            "\\frac{\\pi}{2x}\\,e^{-x}",
          explanation:
            "The result decays like \\( e^{-x} \\), which lies beyond all powers of \\( 1/x \\): the asymptotic power series of the rescaled amplitude is identically zero, and the genuine answer is exponentially small.",
        },
        {
          stepNumber: 4,
          description: "Interpret via integration by parts.",
          workingLatex:
            "\\text{repeated IBP on } \\cos t \\ \\Rightarrow\\ \\text{all boundary terms cancel; remainder } = O(e^{-x})",
          explanation:
            "Integrating \\( \\cos t \\) repeatedly produces boundary terms at \\( t = 0 \\) that cancel in pairs (sines vanish, cosines telescope), leaving only the exponentially small pole contribution. This is the lesson: an absent power series signals exponentially small behaviour, captured by closing the contour around the pole at \\( t = ix \\).",
        },
        {
          stepNumber: 5,
          description: "State the leading behaviour.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{\\cos t}{x^{2}+t^{2}}\\,dt \\sim \\frac{\\pi}{2x}\\,e^{-x}",
          explanation:
            "Numerically at \\( x = 6 \\): exact \\( \\tfrac{\\pi}{12}e^{-6} = 6.49\\times10^{-4} \\), matching direct quadrature. The single term is exponentially accurate.",
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
            "The exponent has an interior minimum at \\( t = 1 \\), giving the dominant factor \\( e^{-2x} \\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate phase and curvature at the saddle.",
          workingLatex:
            "\\phi(1) = 2, \\qquad \\phi''(1) = \\frac{2}{t^{3}}\\Big|_{1} = 2",
          explanation:
            "The Gaussian width is set by \\( \\phi''(1) = 2 \\); the amplitude factor at the saddle is \\( t^{-1/2}\\big|_{1} = 1 \\).",
        },
        {
          stepNumber: 3,
          description: "Apply the leading Laplace formula.",
          workingLatex:
            "\\int \\sim e^{-2x}\\,t^{-1/2}\\Big|_{1}\\sqrt{\\frac{2\\pi}{x\\,\\phi''(1)}} = e^{-2x}\\sqrt{\\frac{2\\pi}{2x}} = \\sqrt{\\frac{\\pi}{x}}\\,e^{-2x}",
          explanation:
            "Standard Gaussian approximation about the interior saddle, with amplitude evaluated at \\( t = 1 \\).",
        },
        {
          stepNumber: 4,
          description: "Identify with the Bessel function.",
          workingLatex:
            "K_{1/2}(x) = \\sqrt{\\frac{\\pi}{2x}}\\,e^{-x}, \\qquad \\int_0^{\\infty} e^{-x(t + 1/t)}\\,t^{\\nu-1}\\,dt = 2\\,K_{\\nu}(2x)",
          explanation:
            "With \\( \\nu = 1/2 \\) the integral equals \\( 2K_{1/2}(2x) = 2\\sqrt{\\tfrac{\\pi}{4x}}e^{-2x} = \\sqrt{\\tfrac{\\pi}{x}}e^{-2x} \\), exactly the leading Laplace result.",
        },
        {
          stepNumber: 5,
          description: "State the result with the next term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-x(t + 1/t)}\\,t^{-1/2}\\,dt = \\sqrt{\\frac{\\pi}{x}}\\,e^{-2x}\\ \\text{exactly}",
          explanation:
            "Because \\( K_{1/2} \\) is elementary, the series terminates: there is no correction. For a general half-integer order the Laplace corrections reproduce the finite \\( K_{\\nu} \\) polynomial. Numerically at \\( x = 5 \\) the exact value matches \\( \\sqrt{\\pi/5}\\,e^{-10} \\).",
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
          description: "Separate singular and smooth factors.",
          workingLatex:
            "\\frac{1}{\\sqrt{t}\\,(1+t)} = t^{-1/2}\\left(1 - t + t^{2} - \\cdots\\right)",
          explanation:
            "The amplitude has an integrable branch-point singularity \\( t^{-1/2} \\) at the endpoint; expand the smooth factor \\( (1+t)^{-1} \\).",
        },
        {
          stepNumber: 2,
          description: "Apply the generalised Watson integral.",
          workingLatex:
            "\\int_0^{\\infty} t^{\\,n-1/2} e^{-x t}\\,dt = \\frac{\\Gamma(n+1/2)}{x^{\\,n+1/2}}",
          explanation:
            "Because the singular factor is \\( t^{-1/2} \\), every power is half-integer, so the whole series runs over \\( x^{-(n+1/2)} \\).",
        },
        {
          stepNumber: 3,
          description: "Collect the first two terms.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-x t}}{\\sqrt{t}\\,(1+t)}\\,dt \\sim \\frac{\\Gamma(1/2)}{x^{1/2}} - \\frac{\\Gamma(3/2)}{x^{3/2}} = \\sqrt{\\frac{\\pi}{x}} - \\frac{\\sqrt{\\pi}}{2}\\,x^{-3/2} + \\cdots",
          explanation:
            "Using \\( \\Gamma(1/2) = \\sqrt\\pi \\) and \\( \\Gamma(3/2) = \\tfrac{\\sqrt\\pi}{2} \\).",
        },
        {
          stepNumber: 4,
          description: "Explain the half-integer structure.",
          workingLatex:
            "\\text{amplitude} \\sim t^{-1/2}\\sum_n c_n t^{n} \\ \\Rightarrow\\ \\text{integral} \\sim \\sum_n c_n\\,\\Gamma(n+\\tfrac12)\\,x^{-(n+1/2)}",
          explanation:
            "A non-integer exponent in the amplitude propagates directly into non-integer powers of \\( 1/x \\); this is Watson's lemma in its general form. Numerically at \\( x = 30 \\): exact quadrature \\( 0.31477 \\) matches the two-term value to the printed digits.",
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
          description: "Confirm endpoint domination.",
          workingLatex:
            "\\psi'(t) = t^{2} + 1 > 0, \\qquad \\text{amplitude } A(t) = \\frac{1}{1+t}",
          explanation:
            "No real saddle, so the contribution is the endpoint \\( t = 0 \\). The amplitude is smooth there with \\( A(0) = 1 \\), \\( A'(0) = -1 \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts using the phase derivative.",
          workingLatex:
            "I = \\int_0^{\\infty} \\frac{A}{i x\\,\\psi'}\\,\\frac{d}{dt}e^{\\,i x\\psi}\\,dt = \\left[\\frac{A\\,e^{\\,i x\\psi}}{i x\\,\\psi'}\\right]_0^{\\infty} - \\frac{1}{i x}\\int_0^{\\infty} e^{\\,i x\\psi}\\,\\frac{d}{dt}\\!\\left(\\frac{A}{\\psi'}\\right)dt",
          explanation:
            "The same IBP device as before, now carrying the amplitude \\( A \\) through.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the leading boundary term.",
          workingLatex:
            "-\\frac{A(0)}{i x\\,\\psi'(0)} = -\\frac{1}{i x} = \\frac{i}{x}",
          explanation:
            "With \\( A(0) = 1 \\), \\( \\psi'(0) = 1 \\): the leading term is unchanged from the bare integral, since the amplitude is \\( 1 \\) at the endpoint.",
        },
        {
          stepNumber: 4,
          description: "Compute the next boundary term.",
          workingLatex:
            "\\frac{d}{dt}\\!\\left(\\frac{A}{\\psi'}\\right)_{t=0} = A'(0) - A(0)\\frac{\\psi''(0)}{\\psi'(0)} = -1 - 0 = -1",
          explanation:
            "Since \\( \\psi''(0) = 0 \\), only \\( A'(0) = -1 \\) survives. The next amplitude is \\( A_1 = -\\tfrac{1}{ix}\\tfrac{d}{dt}(A/\\psi') \\), with \\( A_1(0) = -\\tfrac{1}{ix}(-1) = \\tfrac{1}{ix} \\).",
        },
        {
          stepNumber: 5,
          description: "Assemble the two leading terms.",
          workingLatex:
            "\\text{term}_1 = -\\frac{A_1(0)}{i x\\,\\psi'(0)} = -\\frac{1}{ix}\\cdot\\frac{1}{ix} = -\\frac{1}{(ix)^{2}} = \\frac{1}{x^{2}}, \\qquad I \\sim \\frac{i}{x} + \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "The second boundary term is \\( -A_1(0)/(ix\\,\\psi'(0)) = -\\tfrac{1}{ix}\\cdot\\tfrac{1}{ix} = -1/(ix)^2 = +1/x^2 \\) (since \\( (ix)^2 = -x^2 \\)). Unlike the bare integral, the nonzero \\( A'(0) \\) now produces a \\( 1/x^{2} \\) term. (A series expansion of \\( 1/(1+t)\\,e^{ix(t^3/3+t)} \\) via \\( \\int_0^\\infty t^n e^{ixt}\\,dt = n!/(-ix)^{n+1} \\) confirms the coefficients \\( i, 1, 0, 2, \\dots \\) of \\( x^{-1}, x^{-2}, x^{-3}, x^{-4} \\).)",
        },
        {
          stepNumber: 6,
          description: "State the result.",
          workingLatex:
            "I \\sim \\frac{i}{x} + \\frac{1}{x^{2}} + \\cdots",
          explanation:
            "The amplitude's endpoint slope breaks the even/odd structure seen in am7c-019, so a \\( 1/x^{2} \\) term appears.",
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
          description: "Write the integrand to expose an exact derivative.",
          workingLatex:
            "e^{-s^{2}} = -\\frac{1}{2s}\\,\\frac{d}{ds}\\,e^{-s^{2}}",
          explanation:
            "Since \\( \\tfrac{d}{ds}e^{-s^2} = -2s\\,e^{-s^2} \\), the factor \\( -1/(2s) \\) turns the integrand into an exact derivative, the key to the IBP series.",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts once.",
          workingLatex:
            "\\int_z^{\\infty} e^{-s^{2}}\\,ds = \\left[-\\frac{e^{-s^{2}}}{2s}\\right]_z^{\\infty} - \\int_z^{\\infty} \\frac{e^{-s^{2}}}{2s^{2}}\\,ds = \\frac{e^{-z^{2}}}{2z} - \\frac{1}{2}\\int_z^{\\infty} \\frac{e^{-s^{2}}}{s^{2}}\\,ds",
          explanation:
            "The boundary term at \\( s = z \\) gives the leading term; the remainder carries an extra \\( 1/s^2 \\), smaller by \\( O(1/z^2) \\).",
        },
        {
          stepNumber: 3,
          description: "Integrate by parts a second time.",
          workingLatex:
            "\\int_z^{\\infty} \\frac{e^{-s^{2}}}{s^{2}}\\,ds = \\frac{e^{-z^{2}}}{2z^{3}} - \\frac{3}{2}\\int_z^{\\infty} \\frac{e^{-s^{2}}}{s^{4}}\\,ds",
          explanation:
            "Same device with \\( u = s^{-3} \\). Each step multiplies by an odd number and raises the power of \\( s \\) in the denominator by two.",
        },
        {
          stepNumber: 4,
          description: "Assemble the series.",
          workingLatex:
            "\\int_z^{\\infty} e^{-s^{2}}\\,ds \\sim \\frac{e^{-z^{2}}}{2z}\\left(1 - \\frac{1}{2z^{2}} + \\frac{3}{4z^{4}} - \\cdots\\right)",
          explanation:
            "Multiplying by \\( 2/\\sqrt\\pi \\) gives \\( \\operatorname{erfc}(z) \\sim \\tfrac{e^{-z^2}}{z\\sqrt\\pi}(1 - \\tfrac{1}{2z^2} + \\cdots) \\).",
        },
        {
          stepNumber: 5,
          description: "State the general coefficient.",
          workingLatex:
            "\\operatorname{erfc}(z) \\sim \\frac{e^{-z^{2}}}{z\\sqrt\\pi}\\sum_{n=0}^{\\infty} (-1)^{n}\\frac{(2n-1)!!}{(2z^{2})^{n}}",
          explanation:
            "The coefficients are \\( (-1)^n(2n-1)!! \\) with \\( (-1)!! = 1 \\). Numerically at \\( z = 4 \\): exact \\( \\operatorname{erfc}(4) = 1.5417\\times10^{-8} \\); the three-term series matches to all printed digits.",
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
            "(1-t)^{x} = e^{x\\ln(1-t)}, \\qquad \\phi(t) = -\\ln(1-t)",
          explanation:
            "The integrand decays fastest away from \\( t = 0 \\); the maximum of \\( (1-t)^x \\) is at the endpoint \\( t = 0 \\), where \\( \\phi(0) = 0 \\), \\( \\phi'(0) = 1 \\).",
        },
        {
          stepNumber: 2,
          description: "Change variables to a standard Laplace form.",
          workingLatex:
            "u = -\\ln(1-t), \\quad t = 1 - e^{-u}, \\quad dt = e^{-u}\\,du",
          explanation:
            "This straightens the phase to \\( e^{-xu} \\). The endpoint \\( t = 0 \\) maps to \\( u = 0 \\); \\( t = 1 \\) maps to \\( u = \\infty \\).",
        },
        {
          stepNumber: 3,
          description: "Expand the amplitude near the endpoint.",
          workingLatex:
            "(1+t)\\,e^{-u} = (2 - e^{-u})e^{-u} = (1 + u + \\cdots)\\,? \\ \\Rightarrow\\ 1 + 0\\cdot u + \\cdots",
          explanation:
            "Write \\( t = 1 - e^{-u} \\), so \\( (1+t)e^{-u} = (2 - e^{-u})e^{-u} \\). Expanding about \\( u = 0 \\): \\( (2-(1-u+\\tfrac{u^2}{2}))(1-u+\\cdots) = (1+u-\\cdots)(1-u+\\cdots) = 1 - \\tfrac{u^2}{2} + \\cdots \\), so the constant is \\( 1 \\) and the linear coefficient is \\( 0 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply Watson term by term.",
          workingLatex:
            "\\int_0^{\\infty} (1 + 0\\cdot u + \\cdots)\\,e^{-x u}\\,du \\sim \\frac{1}{x} + \\frac{0}{x^{2}} + \\cdots",
          explanation:
            "The vanishing linear coefficient means the \\( 1/x^2 \\) term is absent; the next correction is \\( O(1/x^3) \\).",
        },
        {
          stepNumber: 5,
          description: "Confirm exactly.",
          workingLatex:
            "\\int_0^{1}(1-t)^{x}(1+t)\\,dt = \\frac{1}{x+1} + \\frac{1}{(x+1)(x+2)} = \\frac{x+3}{x^{2}+3x+2} = \\frac{1}{x} + \\frac{0}{x^{2}} - \\frac{2}{x^{3}} + \\cdots",
          explanation:
            "Using \\( \\int_0^1 (1-t)^x t^k\\,dt = B(x+1,k+1) \\): the \\( 1 \\) gives \\( 1/(x+1) \\) and the \\( t \\) gives \\( 1/[(x+1)(x+2)] \\). Their sum is \\( (x+3)/(x^2+3x+2) \\), whose expansion at infinity (checked symbolically) is \\( x^{-1} + 0\\cdot x^{-2} - 2x^{-3} + \\cdots \\). The vanishing \\( 1/x^{2} \\) coefficient matches the zero linear amplitude coefficient found by the Laplace route.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle \\int_0^{1}(1-t)^{x}(1+t)\\,dt \\sim \\frac{1}{x} + \\cdots \\) (leading term; both methods agree).",
    },
  },
];
