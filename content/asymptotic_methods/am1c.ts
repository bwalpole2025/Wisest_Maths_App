import { Question } from "@/lib/types";

/**
 * Asymptotic Methods — am1c: Uniqueness & exponentially small terms
 * Topic group: Asymptotic Sequences & Series
 *
 * Scope: the asymptotic coefficients a_n of an expansion in a fixed gauge
 * sequence are determined uniquely by the function (extracted by successive
 * limits); but the converse fails — a function such as e(x)=exp(-1/x) is
 * "beyond all orders" (e(x)=o(x^n) for every n), so its asymptotic power
 * series as x->0+ is identically zero. Hence f and f+e share a series:
 * the series does NOT determine the function. Includes flatness of all
 * derivatives at 0, comparison of subdominant exponentials, and the role of
 * such terms in non-uniqueness across a sector.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 1, Q6
 * (and the uniqueness machinery underlying Q4, Q5). Constants/gauges varied.
 *
 * Numerical sanity checks (mpmath, x->0+):
 *   exp(-1/x)/x^n -> 0 for every n (verified n=1..5).
 *   max_{x>0} exp(-1/x)/x^n at x=1/n, value exp(-n) n^n (verified n=1..4).
 *   reciprocal-series recurrence d_n=(-1)^n for f=1+1/z (verified).
 *   Gamma(1/2)=sqrt(pi) (verified, used in a cross-method item).
 */

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (6) ─────────────────────────
  // REVIEW: uniqueness-of-leading-coefficient by limit — definitional, not numerically checkable.
  {
    id: "am1c-001",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Suppose \\( f(x) \\sim a_0 + a_1 x + a_2 x^2 + \\cdots \\) as \\( x \\to 0^{+} \\). By taking a limit, write down a formula for the leading coefficient \\( a_0 \\) in terms of \\( f \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["uniqueness", "asymptotic coefficients", "limits"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State what the leading-order relation means.",
          workingLatex: "f(x) - a_0 = a_1 x + a_2 x^2 + \\cdots = O(x) \\quad (x \\to 0^{+}).",
          explanation:
            "By definition of the asymptotic expansion, subtracting the constant term leaves a remainder that is at most of order \\( x \\), hence tends to \\( 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Take the limit.",
          workingLatex: "\\lim_{x \\to 0^{+}} \\bigl( f(x) - a_0 \\bigr) = 0 \\implies a_0 = \\lim_{x \\to 0^{+}} f(x).",
          explanation:
            "The remainder vanishes in the limit, so the constant term is forced to equal the limit of \\( f \\). This already pins \\( a_0 \\) uniquely.",
        },
      ],
      finalAnswer: "\\( a_0 = \\lim_{x \\to 0^{+}} f(x) \\)",
    },
  },
  {
    id: "am1c-002",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Let \\( e(x) = \\exp(-1/x) \\) for \\( x > 0 \\). Evaluate \\( \\displaystyle \\lim_{x \\to 0^{+}} \\frac{e(x)}{x^{3}} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["beyond all orders", "exponentially small", "limits"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute \\( u = 1/x \\).",
          workingLatex: "\\frac{e(x)}{x^{3}} = \\frac{e^{-1/x}}{x^{3}} = u^{3} e^{-u}, \\qquad u = \\frac{1}{x} \\to +\\infty.",
          explanation:
            "As \\( x \\to 0^{+} \\) the new variable \\( u \\to +\\infty \\); the power of \\( x \\) becomes a positive power of \\( u \\).",
        },
        {
          stepNumber: 2,
          description: "Use exponential beats polynomial.",
          workingLatex: "\\lim_{u \\to \\infty} u^{3} e^{-u} = 0.",
          explanation:
            "The exponential \\( e^{-u} \\) decays faster than any power \\( u^{3} \\) grows, so the product tends to \\( 0 \\).",
        },
      ],
      finalAnswer: "\\( 0 \\)",
      canonicalAnswer: "0",
    },
  },
  {
    id: "am1c-003",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Show that \\( e(x) = \\exp(-1/x) = o(x^{n}) \\) as \\( x \\to 0^{+} \\) for every fixed non-negative integer \\( n \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["beyond all orders", "little-o", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the ratio that must vanish.",
          workingLatex: "\\frac{e(x)}{x^{n}} = \\frac{e^{-1/x}}{x^{n}} = u^{n} e^{-u}, \\qquad u = \\frac{1}{x} \\to +\\infty.",
          explanation:
            "\\( f = o(x^n) \\) means \\( f/x^n \\to 0 \\). Set \\( u = 1/x \\) so the limit becomes one at large \\( u \\).",
        },
        {
          stepNumber: 2,
          description: "Apply the standard limit for each \\( n \\).",
          workingLatex: "\\lim_{u \\to \\infty} u^{n} e^{-u} = 0 \\quad \\text{for every } n \\ge 0.",
          explanation:
            "Exponential decay dominates any fixed power, so the ratio vanishes whatever \\( n \\) is chosen. Hence \\( e(x) = o(x^n) \\) for all \\( n \\).",
        },
      ],
      finalAnswer: "\\( e(x) = o(x^{n}) \\) for every \\( n \\ge 0 \\).",
    },
  },
  {
    id: "am1c-004",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 04",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Two functions satisfy \\( f(x) \\sim 1 + 2x + 3x^2 + \\cdots \\) and \\( g(x) = f(x) + \\exp(-1/x) \\) as \\( x \\to 0^{+} \\). State the first three coefficients of the asymptotic power series of \\( g \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["non-uniqueness", "exponentially small", "asymptotic coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the added term is beyond all orders.",
          workingLatex: "\\exp(-1/x) = o(x^{n}) \\quad \\text{for every } n,",
          explanation:
            "The exponentially small term contributes nothing to any coefficient of the power-series gauge \\( \\{x^n\\} \\): each of its asymptotic coefficients is zero.",
        },
        {
          stepNumber: 2,
          description: "Add term by term.",
          workingLatex: "g(x) \\sim (1 + 0) + (2 + 0)x + (3 + 0)x^{2} + \\cdots = 1 + 2x + 3x^{2} + \\cdots.",
          explanation:
            "Adding a series of all-zero coefficients leaves \\( f \\)'s coefficients unchanged. So \\( g \\) has the identical asymptotic series even though \\( g \\neq f \\).",
        },
      ],
      finalAnswer: "\\( 1,\\ 2,\\ 3 \\) (identical to \\( f \\)).",
      canonicalAnswer: "1, 2, 3",
    },
  },
  {
    id: "am1c-005",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 05",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For \\( e(x) = \\exp(-1/x) \\) with \\( x > 0 \\), find the location \\( x_\\star \\) of the maximum of \\( e(x)/x \\) on \\( x > 0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exponentially small", "stationary point", "exp(-1/x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate \\( h(x) = e^{-1/x}/x \\).",
          workingLatex: "h'(x) = e^{-1/x}\\left( \\frac{1}{x^{2}} \\cdot \\frac{1}{x} - \\frac{1}{x^{2}} \\right) = \\frac{e^{-1/x}}{x^{2}}\\left( \\frac{1}{x} - 1 \\right).",
          explanation:
            "Product/quotient rule: \\( \\frac{d}{dx} e^{-1/x} = e^{-1/x}/x^2 \\), and \\( \\frac{d}{dx} x^{-1} = -x^{-2} \\).",
        },
        {
          stepNumber: 2,
          description: "Set the derivative to zero.",
          workingLatex: "\\frac{1}{x} - 1 = 0 \\implies x_\\star = 1.",
          explanation:
            "The exponential prefactor never vanishes, so the only stationary point comes from the bracket. At \\( x_\\star = 1 \\) the function attains its maximum value \\( e^{-1} \\).",
        },
      ],
      finalAnswer: "\\( x_\\star = 1 \\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "am1c-006",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Define \\( f(x) = 0 \\) for \\( x \\le 0 \\) and \\( f(x) = \\exp(-1/x) \\) for \\( x > 0 \\). Write down the asymptotic power series of \\( f \\) about \\( x = 0^{+} \\), and state in one sentence what this shows.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["non-uniqueness", "smooth non-analytic", "beyond all orders"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Each coefficient is extracted by a limit.",
          workingLatex: "a_n = \\lim_{x \\to 0^{+}} \\frac{f(x) - \\sum_{k<n} a_k x^k}{x^{n}}, \\qquad a_0 = \\lim_{x\\to 0^+} f(x) = 0.",
          explanation:
            "Since \\( f(x) = o(x^n) \\) for every \\( n \\), the successive-limit extraction yields zero at every stage.",
        },
        {
          stepNumber: 2,
          description: "Conclude the series is identically zero.",
          workingLatex: "f(x) \\sim 0 + 0\\cdot x + 0\\cdot x^{2} + \\cdots = 0.",
          explanation:
            "A non-zero smooth function has the same (zero) asymptotic series as the zero function: the series cannot distinguish \\( f \\) from \\( 0 \\), so the series does not determine the function.",
        },
      ],
      finalAnswer: "\\( f(x) \\sim 0 \\); a non-zero function with the zero series — the series fails to determine \\( f \\).",
    },
  },

  // ───────────────────────── STANDARD (12) ─────────────────────────
  // REVIEW: uniqueness via successive limits — definitional proof, not numerically checkable.
  {
    id: "am1c-007",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 07",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show that if \\( f(x) \\sim \\sum_{n=0}^{\\infty} a_n x^n \\) as \\( x \\to 0^{+} \\), then the coefficients \\( a_n \\) are determined uniquely by \\( f \\). [Give the recursive limit formula.]",
    marks: 4,
    yearCreated: 2026,
    tags: ["uniqueness", "successive limits", "asymptotic coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Extract \\( a_0 \\).",
          workingLatex: "a_0 = \\lim_{x \\to 0^{+}} f(x),",
          explanation:
            "The definition gives \\( f(x) - a_0 = O(x) \\to 0 \\), so the constant term is forced to be the limit of \\( f \\).",
        },
        {
          stepNumber: 2,
          description: "Peel off the constant and divide by \\( x \\).",
          workingLatex: "\\frac{f(x) - a_0}{x} \\sim a_1 + a_2 x + \\cdots \\implies a_1 = \\lim_{x \\to 0^{+}} \\frac{f(x) - a_0}{x}.",
          explanation:
            "Subtracting the known term and dividing by the gauge \\( x \\) shifts the next coefficient into leading position; its limit gives \\( a_1 \\).",
        },
        {
          stepNumber: 3,
          description: "State the general recursive formula.",
          workingLatex: "a_n = \\lim_{x \\to 0^{+}} \\frac{ f(x) - \\sum_{k=0}^{n-1} a_k x^{k} }{ x^{n} }.",
          explanation:
            "Each coefficient is a limit of \\( f \\) and the previously-found coefficients only — no freedom remains at any stage.",
        },
        {
          stepNumber: 4,
          description: "Conclude uniqueness.",
          workingLatex: "\\{a_n\\} \\text{ is fixed by } f \\text{ alone.}",
          explanation:
            "Since every \\( a_n \\) is a determinate limit, two expansions of the same \\( f \\) in the same gauge must have identical coefficients.",
        },
      ],
      finalAnswer: "\\( a_n = \\lim_{x \\to 0^{+}} \\bigl( f(x) - \\sum_{k=0}^{n-1} a_k x^{k} \\bigr)/x^{n} \\), uniquely determined.",
    },
  },
  {
    id: "am1c-008",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 08",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Let \\( e(x) = \\exp(-1/x) \\) for \\( x > 0 \\). Show that in any expansion \\( e(x) \\sim \\beta_0 + \\beta_1 x + \\beta_2 x^2 + \\cdots \\) valid as \\( x \\to 0^{+} \\), every \\( \\beta_n = 0 \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["beyond all orders", "exp(-1/x)", "zero series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute \\( \\beta_0 \\).",
          workingLatex: "\\beta_0 = \\lim_{x \\to 0^{+}} e^{-1/x} = \\lim_{u \\to \\infty} e^{-u} = 0.",
          explanation:
            "With \\( u = 1/x \\to \\infty \\), the exponential vanishes; the constant coefficient is zero.",
        },
        {
          stepNumber: 2,
          description: "Set up the recursion for \\( \\beta_n \\).",
          workingLatex: "\\beta_n = \\lim_{x \\to 0^{+}} \\frac{ e^{-1/x} - \\sum_{k=0}^{n-1} \\beta_k x^{k} }{ x^{n} }.",
          explanation:
            "Use the uniqueness extraction formula; we show inductively that the subtracted sum is empty (all earlier \\( \\beta_k = 0 \\)).",
        },
        {
          stepNumber: 3,
          description: "Induction step: assume \\( \\beta_0=\\cdots=\\beta_{n-1}=0 \\).",
          workingLatex: "\\beta_n = \\lim_{x \\to 0^{+}} \\frac{e^{-1/x}}{x^{n}} = \\lim_{u \\to \\infty} u^{n} e^{-u} = 0.",
          explanation:
            "The numerator reduces to \\( e^{-1/x} \\); the limit is the standard polynomial-times-decaying-exponential limit, which is \\( 0 \\).",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "\\beta_n = 0 \\ \\forall n \\implies e(x) \\sim 0.",
          explanation:
            "By induction every coefficient vanishes: the asymptotic power series of \\( \\exp(-1/x) \\) is identically zero.",
        },
      ],
      finalAnswer: "\\( \\beta_n = 0 \\) for all \\( n \\); the series is identically zero.",
    },
  },
  {
    id: "am1c-009",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 09",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Deduce from the result of the previous question that the coefficients of an asymptotic power series do not determine the function. Illustrate with \\( f(x) = \\dfrac{1}{1-x} \\) and \\( g(x) = \\dfrac{1}{1-x} + \\exp(-1/x) \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["non-uniqueness", "geometric series", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Series of \\( f \\).",
          workingLatex: "\\frac{1}{1-x} \\sim \\sum_{n=0}^{\\infty} x^{n} = 1 + x + x^{2} + \\cdots \\quad (x \\to 0^{+}).",
          explanation:
            "The geometric series is the (convergent, hence asymptotic) expansion of \\( f \\) near \\( 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Series of \\( g \\).",
          workingLatex: "g(x) \\sim \\sum_{n=0}^{\\infty} x^{n} + \\underbrace{0}_{\\exp(-1/x)} = 1 + x + x^{2} + \\cdots.",
          explanation:
            "The added \\( \\exp(-1/x) \\) has the zero series, so it does not change a single coefficient.",
        },
        {
          stepNumber: 3,
          description: "Compare the functions.",
          workingLatex: "g(x) - f(x) = \\exp(-1/x) > 0 \\quad \\text{for } x > 0.",
          explanation:
            "The two functions are genuinely different everywhere on \\( x > 0 \\), yet share an identical asymptotic series.",
        },
        {
          stepNumber: 4,
          description: "State the conclusion.",
          workingLatex: "f \\neq g \\quad \\text{but} \\quad f \\sim g.",
          explanation:
            "A given series is shared by infinitely many functions differing by terms beyond all orders, so the coefficients cannot pin down the function.",
        },
      ],
      finalAnswer: "\\( f \\) and \\( g \\) differ by \\( \\exp(-1/x) \\) yet have the same series; the map series \\(\\to\\) function is not injective.",
    },
  },
  {
    id: "am1c-010",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 10",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Show that every derivative of \\( e(x) = \\exp(-1/x) \\) (extended by \\( e(0)=0 \\)) vanishes at \\( x = 0 \\). In particular, compute \\( e'(0) \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["smooth non-analytic", "derivatives at zero", "exp(-1/x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Show the derivative has the form (polynomial in \\(1/x\\)) times \\( e^{-1/x} \\).",
          workingLatex: "e'(x) = \\frac{1}{x^{2}} e^{-1/x}, \\qquad e^{(k)}(x) = P_k\\!\\left(\\tfrac{1}{x}\\right) e^{-1/x},",
          explanation:
            "Differentiating \\( e^{-1/x} \\) brings down factors of \\( 1/x^2 \\); by induction the \\( k \\)-th derivative is some polynomial \\( P_k(1/x) \\) times \\( e^{-1/x} \\).",
        },
        {
          stepNumber: 2,
          description: "Compute \\( e'(0) \\) from the difference quotient.",
          workingLatex: "e'(0) = \\lim_{x \\to 0^{+}} \\frac{e^{-1/x} - 0}{x} = \\lim_{u \\to \\infty} u\\, e^{-u} = 0.",
          explanation:
            "At the endpoint the derivative must be taken as a limit of the difference quotient; it gives \\( 0 \\).",
        },
        {
          stepNumber: 3,
          description: "General derivative at \\( 0 \\).",
          workingLatex: "e^{(k)}(0) = \\lim_{x \\to 0^{+}} \\frac{ P_{k-1}(1/x) e^{-1/x} }{x} = \\lim_{u \\to \\infty} u\\, P_{k-1}(u)\\, e^{-u} = 0.",
          explanation:
            "Each derivative at \\( 0 \\) is again a polynomial in \\( u \\) times \\( e^{-u} \\), whose limit at \\( u \\to \\infty \\) is \\( 0 \\).",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "e^{(k)}(0) = 0 \\quad \\forall k \\ge 0.",
          explanation:
            "All derivatives vanish, so the Taylor series at \\( 0 \\) is identically zero — the function is smooth but non-analytic there.",
        },
      ],
      finalAnswer: "\\( e^{(k)}(0) = 0 \\) for all \\( k \\); in particular \\( e'(0) = 0 \\).",
      canonicalAnswer: "0",
    },
  },
  {
    id: "am1c-011",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 11",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "For fixed integer \\( n \\ge 1 \\), find the maximum value of \\( g_n(x) = \\dfrac{\\exp(-1/x)}{x^{n}} \\) on \\( x > 0 \\), and the point at which it occurs.",
    marks: 4,
    yearCreated: 2026,
    tags: ["exponentially small", "optimisation", "exp(-1/x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate \\( g_n \\).",
          workingLatex: "g_n'(x) = e^{-1/x} \\left( \\frac{1}{x^{2}} \\cdot \\frac{1}{x^{n}} - \\frac{n}{x^{n+1}} \\right) = \\frac{e^{-1/x}}{x^{n+2}}\\bigl( 1 - n x \\bigr).",
          explanation:
            "Product rule on \\( e^{-1/x} \\) (derivative \\( e^{-1/x}/x^2 \\)) and \\( x^{-n} \\) (derivative \\( -n x^{-n-1} \\)); factor out the common positive piece.",
        },
        {
          stepNumber: 2,
          description: "Locate the stationary point.",
          workingLatex: "1 - n x = 0 \\implies x_\\star = \\frac{1}{n}.",
          explanation:
            "The prefactor is positive, so the sign of \\( g_n' \\) follows \\( 1 - nx \\): positive then negative, giving a maximum at \\( x_\\star = 1/n \\).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the maximum.",
          workingLatex: "g_n\\!\\left(\\frac{1}{n}\\right) = \\frac{e^{-n}}{(1/n)^{n}} = n^{n} e^{-n}.",
          explanation:
            "Substitute \\( x_\\star = 1/n \\): \\( e^{-1/x_\\star} = e^{-n} \\) and \\( x_\\star^{-n} = n^n \\). [Checked numerically: n=2 gives 0.5413, n=3 gives 1.3443.]",
        },
      ],
      finalAnswer: "Maximum \\( n^{n} e^{-n} \\) at \\( x_\\star = 1/n \\).",
      canonicalAnswer: "n^n*exp(-n)",
    },
  },
  {
    id: "am1c-012",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 12",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show that \\( \\exp(-2/x) = o\\bigl( \\exp(-1/x) \\bigr) \\) as \\( x \\to 0^{+} \\). What does this say about distinguishing exponentially small terms?",
    marks: 3,
    yearCreated: 2026,
    tags: ["exponentially small", "subdominant", "ordering"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the ratio.",
          workingLatex: "\\frac{\\exp(-2/x)}{\\exp(-1/x)} = \\exp\\!\\left( -\\frac{2}{x} + \\frac{1}{x} \\right) = \\exp\\!\\left( -\\frac{1}{x} \\right).",
          explanation:
            "Combine the exponentials; the leading \\( 1/x \\) terms partially cancel, leaving another exponentially small factor.",
        },
        {
          stepNumber: 2,
          description: "Take the limit.",
          workingLatex: "\\lim_{x \\to 0^{+}} \\exp\\!\\left( -\\frac{1}{x} \\right) = 0.",
          explanation:
            "The ratio tends to zero, so \\( \\exp(-2/x) \\) is little-o of \\( \\exp(-1/x) \\): it is even smaller.",
        },
        {
          stepNumber: 3,
          description: "Interpret.",
          workingLatex: "\\exp(-2/x) \\ll \\exp(-1/x) \\ll x^{n} \\ \\forall n.",
          explanation:
            "There is an infinite hierarchy of exponentially small terms below the power series; an ordinary power-series expansion sees none of them, so it cannot resolve such structure.",
        },
      ],
      finalAnswer: "\\( \\exp(-2/x) = o(\\exp(-1/x)) \\); exponentially small terms form a hierarchy invisible to the power series.",
    },
  },
  {
    id: "am1c-013",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 13",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Suppose \\( f(z) \\sim a_0 + \\dfrac{a_1}{z} + \\dfrac{a_2}{z^{2}} + \\cdots \\) as \\( z \\to \\infty \\). Show that the coefficient \\( a_1 \\) is determined uniquely by \\( f \\), giving an explicit limit for it.",
    marks: 3,
    yearCreated: 2026,
    tags: ["uniqueness", "expansion at infinity", "asymptotic coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Fix \\( a_0 \\).",
          workingLatex: "a_0 = \\lim_{z \\to \\infty} f(z).",
          explanation:
            "The remainder \\( f(z) - a_0 = O(1/z) \\to 0 \\), so the constant term is the limit at infinity.",
        },
        {
          stepNumber: 2,
          description: "Peel off \\( a_0 \\) and multiply by \\( z \\).",
          workingLatex: "z\\bigl( f(z) - a_0 \\bigr) \\sim a_1 + \\frac{a_2}{z} + \\cdots.",
          explanation:
            "Multiplying by the inverse gauge \\( z \\) promotes \\( a_1 \\) to leading order.",
        },
        {
          stepNumber: 3,
          description: "Take the limit.",
          workingLatex: "a_1 = \\lim_{z \\to \\infty} z\\bigl( f(z) - a_0 \\bigr).",
          explanation:
            "The limit picks out \\( a_1 \\) uniquely; the same peeling continues for all higher coefficients.",
        },
      ],
      finalAnswer: "\\( a_1 = \\lim_{z \\to \\infty} z\\,( f(z) - a_0 ) \\), with \\( a_0 = \\lim_{z\\to\\infty} f(z) \\).",
    },
  },
  {
    id: "am1c-014",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 14",
    difficulty: "Standard",
    answerType: "set",
    examStyle: true,
    questionText:
      "Let \\( f(z) \\sim 1 + \\dfrac{1}{z} + \\dfrac{1}{z^{2}} + \\cdots \\) as \\( z \\to \\infty \\). Using the reciprocal recurrence \\( \\sum_{k=0}^{n} d_{n-k} a_k = 0 \\ (n \\ge 1),\\ d_0 = 1 \\), find \\( d_0, d_1, d_2 \\) so that \\( 1/f(z) \\sim \\sum d_n z^{-n} \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["reciprocal series", "recurrence", "uniqueness"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off the coefficients of \\( f \\).",
          workingLatex: "a_0 = a_1 = a_2 = \\cdots = 1.",
          explanation:
            "Here \\( f \\) is the series with every coefficient \\( 1 \\) (the expansion of \\( z/(z-1) \\)).",
        },
        {
          stepNumber: 2,
          description: "Apply the recurrence at \\( n = 1 \\).",
          workingLatex: "d_1 a_0 + d_0 a_1 = 0 \\implies d_1 (1) + (1)(1) = 0 \\implies d_1 = -1.",
          explanation:
            "The recurrence with \\( a_0 = a_1 = 1 \\) forces \\( d_1 = -1 \\). The leading reciprocal coefficient \\( d_0 = 1 \\) is given.",
        },
        {
          stepNumber: 3,
          description: "Apply the recurrence at \\( n = 2 \\).",
          workingLatex: "d_2 a_0 + d_1 a_1 + d_0 a_2 = 0 \\implies d_2 (1) + (-1)(1) + (1)(1) = 0 \\implies d_2 = 0.",
          explanation:
            "Substituting the known values gives \\( d_2 = 0 \\). [Cross-check: \\( 1/f = (z-1)/z = 1 - 1/z \\), so indeed \\( d_0=1, d_1=-1, d_2=0 \\).]",
        },
      ],
      finalAnswer: "\\( d_0 = 1,\\ d_1 = -1,\\ d_2 = 0 \\).",
      canonicalAnswer: "{1, -1, 0}",
    },
  },
  {
    id: "am1c-015",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 15",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Give an explicit example, with brief justification, of two distinct smooth functions on \\( (0,\\infty) \\) having the same asymptotic power series as \\( x \\to 0^{+} \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["non-uniqueness", "examples", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Pick a base function and its series.",
          workingLatex: "f(x) = \\cos x \\sim 1 - \\frac{x^{2}}{2} + \\frac{x^{4}}{24} - \\cdots.",
          explanation:
            "Any smooth function with a known Maclaurin series works as the base; here \\( \\cos x \\).",
        },
        {
          stepNumber: 2,
          description: "Add a beyond-all-orders term.",
          workingLatex: "g(x) = \\cos x + \\exp(-1/x).",
          explanation:
            "The added term has the zero series, so \\( g \\) and \\( f \\) share every coefficient.",
        },
        {
          stepNumber: 3,
          description: "Confirm distinctness and equal series.",
          workingLatex: "g(x) - f(x) = \\exp(-1/x) \\neq 0, \\qquad f \\sim g.",
          explanation:
            "They differ for all \\( x > 0 \\) but have identical asymptotic series — the required example.",
        },
      ],
      finalAnswer: "\\( f = \\cos x \\) and \\( g = \\cos x + \\exp(-1/x) \\): distinct, same series.",
    },
  },
  {
    id: "am1c-016",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 16",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Let \\( s(x) = \\exp(-1/x^{2}) \\) (extended by \\( s(0)=0 \\)), a function of a real variable \\( x \\). Evaluate \\( \\displaystyle \\lim_{x \\to 0} \\frac{s(x)}{x^{4}} \\) and state its Taylor series at \\( 0 \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["smooth non-analytic", "two-sided", "beyond all orders"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute \\( v = 1/x^{2} \\).",
          workingLatex: "\\frac{s(x)}{x^{4}} = \\frac{e^{-1/x^{2}}}{x^{4}} = v^{2} e^{-v}, \\qquad v = \\frac{1}{x^{2}} \\to +\\infty.",
          explanation:
            "As \\( x \\to 0 \\) from either side \\( v \\to +\\infty \\); the even power makes the limit two-sided.",
        },
        {
          stepNumber: 2,
          description: "Take the limit.",
          workingLatex: "\\lim_{v \\to \\infty} v^{2} e^{-v} = 0.",
          explanation:
            "Exponential decay dominates the power, so the limit is \\( 0 \\). [Numerically \\( s(0.1)/0.1^4 \\approx 3.7\\times10^{-40} \\).]",
        },
        {
          stepNumber: 3,
          description: "State the Taylor series.",
          workingLatex: "s(x) \\sim 0 + 0\\cdot x + 0\\cdot x^{2} + \\cdots = 0.",
          explanation:
            "Every derivative vanishes at \\( 0 \\), so the Maclaurin series is identically zero — the standard example of a smooth, non-analytic function on all of \\( \\mathbb{R} \\).",
        },
      ],
      finalAnswer: "Limit \\( 0 \\); Taylor series identically \\( 0 \\).",
      canonicalAnswer: "0",
    },
  },
  {
    id: "am1c-017",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 17",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Explain why an asymptotic series, even when its coefficients are uniquely determined, generally cannot be summed to recover the function. Use the divergent series \\( \\sum (-1)^n n!\\, x^{n} \\) of the Stieltjes-type integral as the illustration.",
    marks: 4,
    yearCreated: 2026,
    tags: ["divergence", "non-uniqueness", "optimal truncation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the series diverges.",
          workingLatex: "\\left| \\frac{(-1)^{n+1}(n+1)! x^{n+1}}{(-1)^{n} n! x^{n}} \\right| = (n+1)|x| \\to \\infty.",
          explanation:
            "The ratio test shows the series diverges for every \\( x \\neq 0 \\); it has zero radius of convergence.",
        },
        {
          stepNumber: 2,
          description: "Best accuracy via optimal truncation.",
          workingLatex: "\\text{terms shrink until } n \\approx 1/x, \\text{ then grow.}",
          explanation:
            "Truncating just before the smallest term gives the best the series can do; the residual error is exponentially small, of order \\( e^{-1/x} \\).",
        },
        {
          stepNumber: 3,
          description: "Identify the irreducible error.",
          workingLatex: "\\text{error} = O\\!\\bigl( e^{-1/x} \\bigr).",
          explanation:
            "This least error is exactly the size of a beyond-all-orders term, the same object that makes the function non-unique.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "\\text{series} \\not\\Rightarrow \\text{function (gap } \\sim e^{-1/x}).",
          explanation:
            "Different functions sharing the series differ precisely at the exponentially small level the series can never reach, so summation cannot single out the right function.",
        },
      ],
      finalAnswer: "Optimal truncation leaves an \\( O(e^{-1/x}) \\) error — the same scale as the non-uniqueness ambiguity.",
    },
  },
  {
    id: "am1c-018",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 18",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Determine whether \\( \\phi_n(x) = \\exp(-n/x) \\), \\( n = 1, 2, 3, \\dots \\), is an asymptotic sequence as \\( x \\to 0^{+} \\), and relate this to the hierarchy of exponentially small terms.",
    marks: 4,
    yearCreated: 2026,
    tags: ["asymptotic sequence", "exponentially small", "ordering"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the asymptotic-sequence condition.",
          workingLatex: "\\phi_{n+1}(x) = o\\bigl( \\phi_n(x) \\bigr) \\quad \\text{as } x \\to 0^{+}.",
          explanation:
            "A sequence of gauges is asymptotic if each term is little-o of its predecessor in the limit.",
        },
        {
          stepNumber: 2,
          description: "Form the consecutive ratio.",
          workingLatex: "\\frac{\\phi_{n+1}(x)}{\\phi_n(x)} = \\frac{e^{-(n+1)/x}}{e^{-n/x}} = e^{-1/x}.",
          explanation:
            "The ratio simplifies to one fixed exponentially small factor, independent of \\( n \\).",
        },
        {
          stepNumber: 3,
          description: "Take the limit.",
          workingLatex: "\\lim_{x \\to 0^{+}} e^{-1/x} = 0 \\implies \\phi_{n+1} = o(\\phi_n).",
          explanation:
            "Each ratio vanishes, so the condition holds for every \\( n \\): \\( \\{ \\phi_n \\} \\) is an asymptotic sequence.",
        },
        {
          stepNumber: 4,
          description: "Relate to the hierarchy.",
          workingLatex: "e^{-n/x} \\ll \\cdots \\ll e^{-1/x} \\ll x^{m} \\ \\forall m.",
          explanation:
            "The whole sequence lies below every power of \\( x \\): a tower of subdominant exponentials no power series can detect.",
        },
      ],
      finalAnswer: "Yes — \\( \\phi_{n+1}/\\phi_n = e^{-1/x} \\to 0 \\); an asymptotic sequence beyond all powers.",
    },
  },

  // ───────────────────────── CHALLENGE (12) ─────────────────────────
  {
    id: "am1c-019",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 19",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Consider \\( F(x) = \\dfrac{1}{1+x} + \\exp(-1/x) \\) and \\( G(x) = \\dfrac{1}{1+x} \\) on \\( x > 0 \\). Show they have the same asymptotic series to all orders as \\( x \\to 0^{+} \\), and find the smallest \\( x \\) at which they differ by more than \\( 10^{-3} \\). (Solve the resulting transcendental condition.)",
    marks: 5,
    yearCreated: 2026,
    tags: ["non-uniqueness", "exponentially small", "transcendental"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Equal series.",
          workingLatex: "F(x) - G(x) = \\exp(-1/x) \\sim 0, \\quad G(x) \\sim \\sum_{n=0}^\\infty (-1)^n x^n.",
          explanation:
            "Their difference is beyond all orders, so the coefficient sequences are identical: \\( F \\sim G \\).",
        },
        {
          stepNumber: 2,
          description: "Set up the threshold condition.",
          workingLatex: "\\exp(-1/x) = 10^{-3}.",
          explanation:
            "We want the smallest \\( x \\) at which the (monotone increasing in \\( x \\)) gap reaches \\( 10^{-3} \\).",
        },
        {
          stepNumber: 3,
          description: "Solve for \\( x \\).",
          workingLatex: "-\\frac{1}{x} = \\ln(10^{-3}) = -3\\ln 10 \\implies x = \\frac{1}{3 \\ln 10}.",
          explanation:
            "Take logs and invert. Because \\( \\exp(-1/x) \\) increases with \\( x \\), for \\( x \\) below this value the gap is under \\( 10^{-3} \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate numerically.",
          workingLatex: "x = \\frac{1}{3 \\ln 10} \\approx \\frac{1}{6.9078} \\approx 0.1448.",
          explanation:
            "[Check: \\( \\exp(-1/0.1448) = \\exp(-6.908) = 1.00\\times10^{-3} \\).] For \\( x < 0.1448 \\) the two functions agree to better than \\( 10^{-3} \\) despite having the same series everywhere.",
        },
      ],
      finalAnswer: "Same series to all orders; they differ by \\( 10^{-3} \\) first at \\( x = 1/(3\\ln 10) \\approx 0.145 \\).",
    },
  },
  {
    id: "am1c-020",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 20",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Prove that the difference of two functions sharing the same asymptotic power series as \\( x \\to 0^{+} \\) is \\( o(x^{n}) \\) for every \\( n \\). Hence characterise the equivalence classes of the relation 'has the same asymptotic series'.",
    marks: 5,
    yearCreated: 2026,
    tags: ["non-uniqueness", "equivalence classes", "beyond all orders"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write both expansions.",
          workingLatex: "f(x) \\sim \\sum a_n x^n, \\quad g(x) \\sim \\sum a_n x^n \\ (\\text{same } a_n).",
          explanation:
            "By hypothesis the two functions have identical coefficients in the power gauge.",
        },
        {
          stepNumber: 2,
          description: "Subtract the truncations.",
          workingLatex: "f(x) - \\sum_{k=0}^{n} a_k x^k = o(x^n), \\quad g(x) - \\sum_{k=0}^{n} a_k x^k = o(x^n).",
          explanation:
            "Each is the defining remainder estimate for an asymptotic expansion truncated at order \\( n \\).",
        },
        {
          stepNumber: 3,
          description: "Difference the two.",
          workingLatex: "f(x) - g(x) = o(x^n) - o(x^n) = o(x^n) \\quad \\forall n.",
          explanation:
            "The shared partial sums cancel, leaving a difference smaller than every power of \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "Characterise the classes.",
          workingLatex: "f \\sim g \\iff f - g = o(x^n)\\ \\forall n \\ (\\text{beyond all orders}).",
          explanation:
            "Two functions share a series exactly when they differ by a beyond-all-orders term (e.g. a multiple of \\( e^{-1/x} \\)). Each class is a coset \\( f + \\{ \\text{exponentially small} \\} \\).",
        },
      ],
      finalAnswer: "\\( f-g = o(x^n)\\ \\forall n \\); classes are cosets modulo beyond-all-orders functions.",
    },
  },
  // REVIEW: existence of an asymptotic series for an arbitrary coefficient sequence (Borel/Ritt) — existence proof, not numerically checkable here.
  {
    id: "am1c-021",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 21",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "State Borel's theorem (Ritt's theorem) that any sequence \\( \\{a_n\\} \\) is the asymptotic-coefficient sequence of some smooth function as \\( x \\to 0^{+} \\), and explain how, together with uniqueness of coefficients, it makes precise the failure of injectivity of the map (function) \\( \\mapsto \\) (series).",
    marks: 5,
    yearCreated: 2026,
    tags: ["Borel theorem", "non-uniqueness", "surjectivity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the existence theorem.",
          workingLatex: "\\forall \\{a_n\\} \\ \\exists\\, f \\in C^{\\infty} : \\ f(x) \\sim \\sum_{n=0}^{\\infty} a_n x^{n} \\ (x \\to 0^{+}).",
          explanation:
            "Borel/Ritt: there is no growth restriction on \\( \\{a_n\\} \\) — every formal power series is realised as the asymptotic series of some smooth function.",
        },
        {
          stepNumber: 2,
          description: "Recall uniqueness of coefficients.",
          workingLatex: "f \\sim \\sum a_n x^n \\implies a_n \\text{ uniquely determined by } f.",
          explanation:
            "The coefficient-extraction limits fix \\( \\{a_n\\} \\) from \\( f \\): the map function \\( \\to \\) series is well-defined.",
        },
        {
          stepNumber: 3,
          description: "Combine into a map statement.",
          workingLatex: "T : C^{\\infty}_{0^+} \\to \\mathbb{R}^{\\mathbb{N}}, \\quad T(f) = \\{a_n\\}, \\quad T \\text{ surjective, not injective.}",
          explanation:
            "Surjectivity is Borel's theorem; non-injectivity is the existence of beyond-all-orders functions (kernel of \\( T \\) is non-trivial).",
        },
        {
          stepNumber: 4,
          description: "Describe the kernel.",
          workingLatex: "\\ker T = \\{ h \\in C^{\\infty}_{0^+} : h = o(x^n)\\ \\forall n \\} \\ni \\exp(-1/x).",
          explanation:
            "Two functions map to the same series iff they differ by an element of this kernel — the precise statement of non-uniqueness.",
        },
      ],
      finalAnswer: "\\( T(f) = \\{a_n\\} \\) is surjective (Borel) but has kernel = beyond-all-orders functions, hence not injective.",
    },
  },
  {
    id: "am1c-022",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 22",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show that \\( \\sin\\!\\bigl( e^{1/x} \\bigr) \\) has the asymptotic power series \\( 0 \\) as \\( x \\to 0^{+} \\)? Investigate carefully, and decide whether it possesses an asymptotic power series at all.",
    marks: 5,
    yearCreated: 2026,
    tags: ["non-uniqueness", "oscillatory", "asymptotic existence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test the constant coefficient.",
          workingLatex: "\\beta_0 = \\lim_{x \\to 0^{+}} \\sin\\!\\bigl( e^{1/x} \\bigr).",
          explanation:
            "We attempt the standard extraction. As \\( x \\to 0^{+} \\), \\( e^{1/x} \\to \\infty \\), so the argument of the sine runs off to infinity.",
        },
        {
          stepNumber: 2,
          description: "Check the limit exists.",
          workingLatex: "\\sin\\!\\bigl( e^{1/x} \\bigr) \\text{ oscillates in } [-1,1]; \\ \\lim_{x\\to 0^+} \\text{ does not exist.}",
          explanation:
            "Along sequences with \\( e^{1/x_k} = k\\pi \\) the value is \\( 0 \\); along \\( e^{1/x_k} = (2k+\\tfrac12)\\pi \\) it is \\( 1 \\). No single limit.",
        },
        {
          stepNumber: 3,
          description: "Conclude on \\( \\beta_0 \\).",
          workingLatex: "\\beta_0 = \\lim_{x \\to 0^{+}} \\sin\\!\\bigl( e^{1/x} \\bigr) \\ \\text{undefined}.",
          explanation:
            "The very first coefficient cannot be extracted, so this function has no asymptotic power series — unlike \\( \\exp(-1/x) \\), whose series exists (and is \\( 0 \\)).",
        },
        {
          stepNumber: 4,
          description: "Contrast with the flat case.",
          workingLatex: "\\exp(-1/x) \\sim 0 \\ \\text{(exists)}, \\quad \\sin(e^{1/x}) : \\text{no series}.",
          explanation:
            "Having no asymptotic series is distinct from having the zero series. The bounded oscillation that does not settle is the obstruction here.",
        },
      ],
      finalAnswer: "It has no asymptotic power series: \\( \\sin(e^{1/x}) \\) oscillates and \\( \\lim_{x\\to 0^+} \\) fails to exist.",
    },
  },
  {
    id: "am1c-023",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 23",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "The exponential integral has the divergent expansion \\( E_1(x) = \\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt \\sim e^{-x}\\bigl( x^{-1} - x^{-2} + 2!\\,x^{-3} - \\cdots \\bigr) \\) as \\( x \\to \\infty \\). For \\( x = 5 \\), find the index \\( n \\) of the smallest term and hence state the order of the optimal-truncation error.",
    marks: 5,
    yearCreated: 2026,
    tags: ["optimal truncation", "divergent series", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the term magnitudes.",
          workingLatex: "|T_n| = e^{-x}\\, \\frac{n!}{x^{n+1}} \\quad (n = 0, 1, 2, \\dots).",
          explanation:
            "The \\( n \\)-th term of the bracket times \\( e^{-x} \\); we ignore the alternating sign for magnitude.",
        },
        {
          stepNumber: 2,
          description: "Find where terms stop shrinking.",
          workingLatex: "\\frac{|T_{n+1}|}{|T_n|} = \\frac{(n+1)}{x} \\le 1 \\iff n + 1 \\le x.",
          explanation:
            "Successive terms decrease while \\( n+1 < x \\) and grow afterwards; the smallest term sits near \\( n \\approx x \\).",
        },
        {
          stepNumber: 3,
          description: "Evaluate at \\( x = 5 \\).",
          workingLatex: "n \\approx x = 5 \\ (\\text{smallest term near } n = 4\\text{–}5).",
          explanation:
            "The minimal term occurs at \\( n \\approx 5 \\); optimal truncation keeps terms up to the one before it.",
        },
        {
          stepNumber: 4,
          description: "State the optimal error.",
          workingLatex: "|T_n|_{\\min} \\sim e^{-x} \\frac{x!}{x^{x+1}} \\sim e^{-x}\\sqrt{\\frac{2\\pi}{x}}\\,e^{-x} = O\\!\\bigl( e^{-2x} \\bigr).",
          explanation:
            "By Stirling \\( n!/x^{n+1} \\approx \\sqrt{2\\pi/x}\\,e^{-x} \\) at \\( n \\approx x \\); multiplied by the prefactor \\( e^{-x} \\) the optimal error is \\( O(e^{-2x}) \\) — exponentially small, the irreducible ambiguity.",
        },
      ],
      finalAnswer: "Smallest term at \\( n \\approx 5 \\); optimal-truncation error \\( O(e^{-2x}) = O(e^{-10}) \\).",
      canonicalAnswer: "5",
    },
  },
  {
    id: "am1c-024",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 24",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Suppose \\( f \\) and \\( g \\) both have asymptotic expansions \\( \\sum a_n z^{-n} \\) and \\( \\sum b_n z^{-n} \\) as \\( z \\to \\infty \\). Prove the product \\( fg \\) has the expansion \\( \\sum c_n z^{-n} \\) with \\( c_n = \\sum_{k=0}^{n} a_{n-k} b_k \\), and explain why the \\( c_n \\) are then uniquely determined.",
    marks: 5,
    yearCreated: 2026,
    tags: ["product of series", "Cauchy product", "uniqueness"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Truncate both expansions.",
          workingLatex: "f = \\sum_{k=0}^{N} \\frac{a_k}{z^k} + o(z^{-N}), \\quad g = \\sum_{k=0}^{N} \\frac{b_k}{z^k} + o(z^{-N}).",
          explanation:
            "Each function equals its partial sum plus a remainder smaller than the last retained gauge.",
        },
        {
          stepNumber: 2,
          description: "Multiply and collect powers.",
          workingLatex: "fg = \\sum_{n=0}^{N} \\frac{1}{z^{n}} \\sum_{k=0}^{n} a_{n-k} b_k + R_N.",
          explanation:
            "Collecting terms of equal degree gives the Cauchy product coefficient \\( c_n = \\sum_{k=0}^n a_{n-k} b_k \\) at order \\( z^{-n} \\).",
        },
        {
          stepNumber: 3,
          description: "Bound the remainder.",
          workingLatex: "R_N = O(z^{-N-1}) + (\\text{bounded}) \\cdot o(z^{-N}) = o(z^{-N}).",
          explanation:
            "Cross terms involving a remainder are bounded times \\( o(z^{-N}) \\); higher pure products are \\( O(z^{-N-1}) \\). All are \\( o(z^{-N}) \\).",
        },
        {
          stepNumber: 4,
          description: "Invoke uniqueness.",
          workingLatex: "fg \\sim \\sum_{n} c_n z^{-n}, \\quad c_n \\text{ fixed by } fg \\text{ via the extraction limits}.",
          explanation:
            "Since \\( fg \\) has a genuine asymptotic expansion, its coefficients are determined uniquely by \\( fg \\); the construction shows they equal the Cauchy convolution of \\( \\{a_n\\}, \\{b_n\\} \\).",
        },
      ],
      finalAnswer: "\\( c_n = \\sum_{k=0}^n a_{n-k} b_k \\); uniquely fixed by \\( fg \\) through the coefficient-extraction limits.",
    },
  },
  {
    id: "am1c-025",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 25",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Let \\( h(x) = \\exp(-1/x) \\sin(1/x) \\) for \\( x > 0 \\). Determine its asymptotic power series as \\( x \\to 0^{+} \\), and evaluate \\( \\displaystyle \\lim_{x \\to 0^{+}} h(x)/x^{10} \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["beyond all orders", "bounded oscillation", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Bound \\( h \\) by an exponentially small envelope.",
          workingLatex: "|h(x)| = e^{-1/x} |\\sin(1/x)| \\le e^{-1/x}.",
          explanation:
            "The sine is bounded by \\( 1 \\), so the oscillation cannot prevent decay: \\( |h| \\) is dominated by \\( e^{-1/x} \\).",
        },
        {
          stepNumber: 2,
          description: "Show \\( h = o(x^n) \\) for all \\( n \\).",
          workingLatex: "\\frac{|h(x)|}{x^{n}} \\le \\frac{e^{-1/x}}{x^{n}} = u^{n} e^{-u} \\to 0, \\quad u = 1/x.",
          explanation:
            "The envelope already vanishes faster than any power; squeezing forces \\( h/x^n \\to 0 \\) for every \\( n \\).",
        },
        {
          stepNumber: 3,
          description: "Read off the series.",
          workingLatex: "h(x) \\sim 0 + 0\\cdot x + 0 \\cdot x^2 + \\cdots = 0.",
          explanation:
            "Every coefficient vanishes despite the oscillation — because the exponential envelope controls everything.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the requested limit.",
          workingLatex: "\\lim_{x \\to 0^{+}} \\frac{h(x)}{x^{10}} = 0.",
          explanation:
            "With \\( n = 10 \\) the bound above gives \\( 0 \\): a non-zero, oscillating, beyond-all-orders function with the zero series.",
        },
      ],
      finalAnswer: "Series \\( \\equiv 0 \\); \\( \\lim_{x\\to 0^+} h(x)/x^{10} = 0 \\).",
      canonicalAnswer: "0",
    },
  },
  {
    id: "am1c-026",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 26",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Consider \\( \\cosh z \\) as \\( |z| \\to \\infty \\). In the sector \\( |\\arg z| < \\pi/2 \\) it behaves like \\( \\tfrac12 e^{z} \\). Explain how the subdominant term \\( \\tfrac12 e^{-z} \\) is exponentially small there, and why this hidden term is exactly the kind of contribution an asymptotic expansion in that sector omits.",
    marks: 5,
    yearCreated: 2026,
    tags: ["Stokes phenomenon", "subdominant", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split \\( \\cosh z \\).",
          workingLatex: "\\cosh z = \\tfrac{1}{2} e^{z} + \\tfrac{1}{2} e^{-z}.",
          explanation:
            "The exact identity contains two exponentials of opposite sign in the exponent.",
        },
        {
          stepNumber: 2,
          description: "Compare sizes in the right half-plane.",
          workingLatex: "\\frac{ \\tfrac12 e^{-z} }{ \\tfrac12 e^{z} } = e^{-2z}, \\quad \\operatorname{Re} z \\to +\\infty.",
          explanation:
            "For \\( \\arg z \\) inside \\( (-\\pi/2,\\pi/2) \\), \\( \\operatorname{Re} z > 0 \\), so the ratio \\( e^{-2z} \\to 0 \\): the second term is exponentially small relative to the first.",
        },
        {
          stepNumber: 3,
          description: "State the dominant behaviour.",
          workingLatex: "\\cosh z \\sim \\tfrac{1}{2} e^{z} \\quad ( |\\arg z| < \\pi/2 ).",
          explanation:
            "The recessive term contributes nothing to the asymptotic expansion relative to the dominant scale \\( e^z \\) — it is beyond all (algebraic) orders of \\( e^z \\).",
        },
        {
          stepNumber: 4,
          description: "Connect to non-uniqueness / Stokes lines.",
          workingLatex: "\\tfrac12 e^{-z} = o\\bigl( z^{-N} e^{z} \\bigr) \\ \\forall N \\ \\text{in the sector}.",
          explanation:
            "Just as \\( e^{-1/x} \\) is invisible to a power series, \\( \\tfrac12 e^{-z} \\) is invisible to the dominant expansion; it only becomes important across a Stokes line where the two exponentials swap dominance.",
        },
      ],
      finalAnswer: "\\( \\tfrac12 e^{-z}/\\tfrac12 e^{z} = e^{-2z} \\to 0 \\); the recessive term is beyond all orders of the dominant \\( e^z \\) expansion.",
    },
  },
  {
    id: "am1c-027",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 27",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Define \\( \\Phi(x) = \\exp(-a/x) \\) for constants \\( a > 0 \\). Two such bumps, with \\( a = 1 \\) and \\( a = 2 \\), are added to a common base \\( B(x) \\). Show all three of \\( B \\), \\( B + e^{-1/x} \\), \\( B + e^{-1/x} + e^{-2/x} \\) share the same power series, and find \\( \\lim_{x\\to 0^+} (e^{-1/x} + e^{-2/x})/x^N \\) for arbitrary fixed \\( N \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["non-uniqueness", "hierarchy", "beyond all orders"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Each bump has the zero series.",
          workingLatex: "e^{-1/x} \\sim 0, \\quad e^{-2/x} \\sim 0 \\quad (x \\to 0^{+}).",
          explanation:
            "Both decay faster than every power of \\( x \\); each contributes zero to all coefficients.",
        },
        {
          stepNumber: 2,
          description: "Add to the base.",
          workingLatex: "B \\sim \\sum a_n x^n \\implies B,\\ B+e^{-1/x},\\ B+e^{-1/x}+e^{-2/x} \\sim \\sum a_n x^n.",
          explanation:
            "Adding zero-series terms cannot change any coefficient, so all three functions share one and the same series.",
        },
        {
          stepNumber: 3,
          description: "Form the requested ratio.",
          workingLatex: "\\frac{e^{-1/x} + e^{-2/x}}{x^{N}} = u^{N} e^{-u} + u^{N} e^{-2u}, \\quad u = 1/x.",
          explanation:
            "Substitute \\( u = 1/x \\to \\infty \\); split the limit into two polynomial-times-exponential pieces.",
        },
        {
          stepNumber: 4,
          description: "Take the limit.",
          workingLatex: "\\lim_{u \\to \\infty} \\bigl( u^{N} e^{-u} + u^{N} e^{-2u} \\bigr) = 0 + 0 = 0.",
          explanation:
            "Both pieces vanish for every fixed \\( N \\). The functions form a tower of beyond-all-orders differences, all sharing one series.",
        },
      ],
      finalAnswer: "All three share \\( \\sum a_n x^n \\); the limit is \\( 0 \\) for every \\( N \\).",
      canonicalAnswer: "0",
    },
  },
  // REVIEW: term-by-term differentiation preserving the series (continuity hypothesis) — analysis proof, not numerically checkable.
  {
    id: "am1c-028",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 28",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Let \\( h(x) = e^{-1/x} \\) extended by \\( h(0) = 0 \\). Its series is \\( 0 \\). Show that term-by-term differentiation of this zero series gives the (correct) zero series for \\( h' \\) on \\( x > 0 \\), and discuss why differentiation can nevertheless fail for general asymptotic series.",
    marks: 5,
    yearCreated: 2026,
    tags: ["term-by-term differentiation", "beyond all orders", "exp(-1/x)"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the zero series formally.",
          workingLatex: "h(x) \\sim 0 \\implies \\frac{d}{dx}\\bigl( 0 + 0\\cdot x + \\cdots \\bigr) = 0.",
          explanation:
            "Differentiating each (zero) term gives zero; the formal derivative of the series is again the zero series.",
        },
        {
          stepNumber: 2,
          description: "Compute the genuine series of \\( h' \\).",
          workingLatex: "h'(x) = \\frac{e^{-1/x}}{x^{2}}, \\quad \\frac{h'(x)}{x^n} = u^{n+2} e^{-u} \\to 0 \\ \\forall n.",
          explanation:
            "With \\( u = 1/x \\) every coefficient of \\( h' \\) is a vanishing limit, so \\( h' \\sim 0 \\) too — matching the term-by-term result.",
        },
        {
          stepNumber: 3,
          description: "Note this is the lucky case.",
          workingLatex: "h \\sim 0 \\ \\Rightarrow\\ h' \\sim 0 \\ (\\text{agree}).",
          explanation:
            "Here differentiation is valid because both series are zero. The agreement is a consequence of \\( h \\) and \\( h' \\) both being beyond all orders.",
        },
        {
          stepNumber: 4,
          description: "Explain the general failure.",
          workingLatex: "H \\sim \\sum \\alpha_n x^n \\ \\not\\Rightarrow\\ H' \\sim \\sum n\\alpha_n x^{n-1} \\ \\text{(in general).}",
          explanation:
            "If \\( H' \\) oscillates wildly (e.g. \\( H \\) plus \\( x^{2}\\sin(e^{1/x}) \\)-type wrinkles) it need not even possess an asymptotic series; term-by-term differentiation is only guaranteed when \\( H' \\) is continuous and itself admits an expansion.",
        },
      ],
      finalAnswer: "Both \\( h \\) and \\( h' \\) have the zero series, so differentiation is valid here; in general it can fail when \\( H' \\) has no expansion.",
    },
  },
  {
    id: "am1c-029",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 29",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Using \\( \\Gamma(1/2) = \\sqrt{\\pi} \\), consider \\( f(x) = \\Gamma\\!\\left(\\tfrac12\\right) + \\exp(-1/x) \\) on \\( x > 0 \\). State the asymptotic series of \\( f \\) as \\( x \\to 0^{+} \\), and give \\( \\lim_{x\\to 0^+} f(x) \\) in exact form.",
    marks: 5,
    yearCreated: 2026,
    tags: ["non-uniqueness", "Gamma function", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the constant.",
          workingLatex: "\\Gamma\\!\\left( \\tfrac12 \\right) = \\sqrt{\\pi} \\approx 1.7724539.",
          explanation:
            "The standard value of the Gamma function at \\( 1/2 \\). [Verified numerically: \\( \\Gamma(1/2) = \\sqrt{\\pi} = 1.77245385\\dots \\).]",
        },
        {
          stepNumber: 2,
          description: "Series of the constant plus the flat term.",
          workingLatex: "f(x) \\sim \\sqrt{\\pi} + 0 \\cdot x + 0 \\cdot x^{2} + \\cdots = \\sqrt{\\pi}.",
          explanation:
            "The constant has the trivial series \\( \\sqrt{\\pi} \\); \\( \\exp(-1/x) \\) contributes zero. The whole series is just \\( \\sqrt{\\pi} \\).",
        },
        {
          stepNumber: 3,
          description: "Take the limit.",
          workingLatex: "\\lim_{x \\to 0^{+}} f(x) = \\sqrt{\\pi} + 0 = \\sqrt{\\pi}.",
          explanation:
            "The exponentially small term vanishes, so the limit equals the constant — yet \\( f(x) > \\sqrt{\\pi} \\) for all \\( x > 0 \\), another instance of the same series being shared by distinct functions.",
        },
      ],
      finalAnswer: "\\( f \\sim \\sqrt{\\pi} \\); \\( \\lim_{x\\to 0^+} f(x) = \\sqrt{\\pi} \\).",
      canonicalAnswer: "sqrt(pi)",
    },
  },
  {
    id: "am1c-030",
    topicRef: "am1c",
    topicTitle: "Uniqueness & exponentially small terms 30",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "An asymptotic series for a function \\( G \\) as \\( x \\to 0^{+} \\) has terms \\( T_n = (-1)^n (n+1)!\\, x^{n} \\). The optimal-truncation error is known to be of order \\( \\exp(-1/x) \\). For \\( x = 0.1 \\), find the index \\( N+1 = [x^{-1}] \\) used to truncate, and state the order of the resulting error.",
    marks: 5,
    yearCreated: 2026,
    tags: ["optimal truncation", "divergent series", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the optimal-truncation rule.",
          workingLatex: "N + 1 = \\left[ x^{-1} \\right] = \\left[ \\frac{1}{0.1} \\right] = [10] = 10.",
          explanation:
            "Optimal truncation keeps terms up to the one before the smallest; the cut index is the integer part of \\( 1/x \\). [\\( 1/0.1 = 10 \\) exactly.]",
        },
        {
          stepNumber: 2,
          description: "Smallest-term location.",
          workingLatex: "\\frac{|T_{n+1}|}{|T_n|} = (n+2)x \\le 1 \\iff n \\le \\tfrac{1}{x} - 2,",
          explanation:
            "Terms decrease while \\( (n+2)x < 1 \\), i.e. up to \\( n \\approx 1/x \\); the minimal term sits near \\( n \\approx 1/x = 10 \\).",
        },
        {
          stepNumber: 3,
          description: "State the optimal error order.",
          workingLatex: "\\text{error} = O\\!\\bigl( \\exp(-1/x) \\bigr) = O\\!\\bigl( e^{-10} \\bigr) \\approx 4.5 \\times 10^{-5}.",
          explanation:
            "The least achievable error is exponentially small — exactly the magnitude of the beyond-all-orders ambiguity. [Check: \\( e^{-10} = 4.54\\times10^{-5} \\).]",
        },
      ],
      finalAnswer: "Truncate at \\( N+1 = 10 \\); optimal error \\( O(e^{-1/x}) = O(e^{-10}) \\approx 4.5\\times10^{-5} \\).",
      canonicalAnswer: "10",
    },
  },
];
