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
          description: "Recall what the symbol \\( \\sim \\) means here.",
          workingLatex: "f(x) \\sim a_0 + a_1 x + a_2 x^2 + \\cdots \\iff f(x) - \\sum_{k=0}^{N} a_k x^{k} = o(x^{N}) \\ \\forall N.",
          explanation:
            "An asymptotic expansion is not a claim that the series converges; it is a family of remainder estimates. For each \\( N \\), the function minus the partial sum up to \\( x^N \\) must be smaller than the last kept gauge \\( x^N \\). We will only need the very first of these estimates to pin down \\( a_0 \\).",
        },
        {
          stepNumber: 2,
          description: "Write out the \\( N=0 \\) remainder estimate.",
          workingLatex: "f(x) - a_0 = o(1) \\quad (x \\to 0^{+}).",
          explanation:
            "Taking \\( N = 0 \\) in the definition, the partial sum is just \\( a_0 \\), and the gauge \\( x^0 = 1 \\). So the definition tells us directly that \\( f(x) - a_0 \\) is \\( o(1) \\), i.e. it tends to \\( 0 \\). We did not have to assume anything about the higher coefficients.",
        },
        {
          stepNumber: 3,
          description: "Subtract the constant to isolate the tail.",
          workingLatex: "f(x) - a_0 = a_1 x + a_2 x^2 + \\cdots.",
          explanation:
            "Concretely, removing the constant from both sides leaves only terms carrying a positive power of \\( x \\). This makes it visually clear why the remainder must vanish: every surviving term has a factor of \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "Bound the remainder by its leading order.",
          workingLatex: "f(x) - a_0 = O(x) \\quad (x \\to 0^{+}).",
          explanation:
            "The first surviving term \\( a_1 x \\) dominates the rest, so the whole remainder is of order \\( x \\). An \\( O(x) \\) quantity is in particular \\( o(1) \\), consistent with step 2: it necessarily tends to \\( 0 \\) as \\( x \\to 0^{+} \\).",
        },
        {
          stepNumber: 5,
          description: "Take the limit of both sides.",
          workingLatex: "\\lim_{x \\to 0^{+}} \\bigl( f(x) - a_0 \\bigr) = 0.",
          explanation:
            "Because the remainder is \\( o(1) \\), its limit is exactly zero. The constant \\( a_0 \\) does not depend on \\( x \\), so it passes through the limit unchanged.",
        },
        {
          stepNumber: 6,
          description: "Solve for \\( a_0 \\) and note uniqueness.",
          workingLatex: "a_0 = \\lim_{x \\to 0^{+}} f(x).",
          explanation:
            "Rearranging, the constant is forced to equal the limit of \\( f \\) itself. There is no freedom left: any expansion of this \\( f \\) in powers of \\( x \\) must start with this same \\( a_0 \\), so the leading coefficient is determined by \\( f \\) alone. This is the first rung of the uniqueness ladder.",
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
          description: "Write the ratio explicitly.",
          workingLatex: "\\frac{e(x)}{x^{3}} = \\frac{e^{-1/x}}{x^{3}}.",
          explanation:
            "We have a tiny exponential divided by a tiny power. As \\( x \\to 0^{+} \\), the numerator \\( e^{-1/x} \\to 0 \\) but the denominator \\( x^3 \\to 0 \\) too, so this is an indeterminate \\( 0/0 \\)-type race. It is not obvious which wins, so we change variable to make the competition transparent.",
        },
        {
          stepNumber: 2,
          description: "Substitute \\( u = 1/x \\) and track the new range.",
          workingLatex: "u = \\frac{1}{x}, \\qquad x \\to 0^{+} \\implies u \\to +\\infty.",
          explanation:
            "The natural move is to let the exponent become a single positive variable. As \\( x \\) decreases to \\( 0 \\) through positive values, \\( 1/x \\) increases without bound, so the small-\\( x \\) limit becomes a large-\\( u \\) limit. This is the standard substitution for every \\( e^{-1/x} \\) problem in this topic.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the ratio in terms of \\( u \\).",
          workingLatex: "\\frac{e^{-1/x}}{x^{3}} = e^{-u}\\cdot \\frac{1}{x^{3}} = e^{-u}\\cdot u^{3} = u^{3} e^{-u}.",
          explanation:
            "Since \\( x = 1/u \\), the negative power \\( x^{-3} = (1/u)^{-3} = u^{3} \\). The exponential carries the exponent \\( -1/x = -u \\) directly. The indeterminate ratio has become a clean product of a growing power and a decaying exponential.",
        },
        {
          stepNumber: 4,
          description: "Apply the exponential-beats-polynomial limit.",
          workingLatex: "\\lim_{u \\to \\infty} u^{3} e^{-u} = 0.",
          explanation:
            "The exponential \\( e^{-u} \\) decays faster than any fixed power \\( u^{3} \\) can grow, so the product tends to \\( 0 \\). One way to see it: \\( e^{u} = \\sum u^k/k! > u^4/4! \\), so \\( u^3 e^{-u} < 4!/u \\to 0 \\). This is the workhorse limit behind the whole \"beyond all orders\" story.",
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
          description: "Recall the definition of little-o.",
          workingLatex: "e(x) = o(x^{n}) \\iff \\lim_{x \\to 0^{+}} \\frac{e(x)}{x^{n}} = 0.",
          explanation:
            "The notation \\( e = o(x^n) \\) is, by definition, the statement that \\( e \\) is negligible compared with \\( x^n \\): the ratio \\( e/x^n \\) tends to \\( 0 \\). So the whole problem reduces to evaluating one limit, with \\( n \\) treated as an arbitrary but fixed constant.",
        },
        {
          stepNumber: 2,
          description: "Write out the ratio explicitly.",
          workingLatex: "\\frac{e(x)}{x^{n}} = \\frac{e^{-1/x}}{x^{n}}.",
          explanation:
            "We substitute the given \\( e(x) = e^{-1/x} \\). As before this is a contest between an exponentially small numerator and a power-law small denominator, and the substitution below will reveal the winner.",
        },
        {
          stepNumber: 3,
          description: "Substitute \\( u = 1/x \\to +\\infty \\).",
          workingLatex: "\\frac{e^{-1/x}}{x^{n}} = u^{n} e^{-u}, \\qquad u = \\frac{1}{x} \\to +\\infty.",
          explanation:
            "Setting \\( u = 1/x \\) converts the small-\\( x \\) limit into a large-\\( u \\) limit; the denominator \\( x^{-n} \\) becomes \\( u^{n} \\) and the exponent \\( -1/x \\) becomes \\( -u \\). The power and the exponential are now expressed in the same variable.",
        },
        {
          stepNumber: 4,
          description: "Apply the standard limit, holding \\( n \\) fixed.",
          workingLatex: "\\lim_{u \\to \\infty} u^{n} e^{-u} = 0 \\quad \\text{for every fixed } n \\ge 0.",
          explanation:
            "Exponential decay dominates any fixed power, so the ratio vanishes whatever \\( n \\) is chosen. The key word is \"fixed\": \\( n \\) is held constant while \\( u \\to \\infty \\). A common slip is to imagine \\( n \\) growing with \\( u \\) — the claim is not uniform in \\( n \\), but for each individual \\( n \\) the limit is genuinely zero.",
        },
        {
          stepNumber: 5,
          description: "Conclude for all \\( n \\).",
          workingLatex: "\\frac{e(x)}{x^{n}} \\to 0 \\ \\forall n \\implies e(x) = o(x^{n}) \\ \\forall n \\ge 0.",
          explanation:
            "Since the defining ratio vanishes for every non-negative integer \\( n \\), \\( e \\) is little-o of every power of \\( x \\). This is exactly the \"flat\" or \"beyond all orders\" property: \\( e^{-1/x} \\) is smaller than \\( x^n \\) no matter how large we take \\( n \\).",
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
          description: "Record the series of \\( f \\).",
          workingLatex: "f(x) \\sim 1 + 2x + 3x^{2} + \\cdots, \\qquad a_0 = 1,\\ a_1 = 2,\\ a_2 = 3.",
          explanation:
            "We start from the given expansion of \\( f \\). Its coefficients in the power gauge \\( \\{x^n\\} \\) are simply \\( 1, 2, 3, \\dots \\); these are what we will compare against \\( g \\).",
        },
        {
          stepNumber: 2,
          description: "Note the added term is beyond all orders.",
          workingLatex: "\\exp(-1/x) = o(x^{n}) \\quad \\text{for every } n \\ge 0.",
          explanation:
            "The exponentially small term decays faster than every power of \\( x \\) (this is the flatness result of the previous questions). Hence each of its asymptotic coefficients in the gauge \\( \\{x^n\\} \\) is zero — its series is identically \\( 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Find the coefficients of \\( g \\) by extraction.",
          workingLatex: "g(x) - 1 - 2x - 3x^2 = \\bigl(f - 1 - 2x - 3x^2\\bigr) + e^{-1/x} = o(x^{2}),",
          explanation:
            "The cleanest way to be sure is to test \\( g \\) directly against the candidate partial sum. The bracket is \\( o(x^2) \\) because \\( f \\) has that partial sum, and \\( e^{-1/x} \\) is \\( o(x^2) \\) too; the sum of two \\( o(x^2) \\) terms is \\( o(x^2) \\). So \\( g \\) really does have these coefficients, not merely \"by adding zeros\".",
        },
        {
          stepNumber: 4,
          description: "Add the two series coefficient by coefficient.",
          workingLatex: "g(x) \\sim (1 + 0) + (2 + 0)x + (3 + 0)x^{2} + \\cdots = 1 + 2x + 3x^{2} + \\cdots.",
          explanation:
            "Equivalently, asymptotic series add term by term in a fixed gauge, and the extra term supplies only zeros, so each of \\( f \\)'s coefficients is left untouched.",
        },
        {
          stepNumber: 5,
          description: "Read off the first three coefficients and interpret.",
          workingLatex: "(a_0, a_1, a_2) = (1, 2, 3), \\qquad \\text{yet } g(x) - f(x) = e^{-1/x} \\neq 0.",
          explanation:
            "The coefficients are \\( 1, 2, 3 \\) — identical to \\( f \\) — even though \\( g \\neq f \\) at every \\( x > 0 \\). This is the first concrete hint that an asymptotic power series cannot tell two such functions apart: the difference lives entirely below the reach of the series.",
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
          description: "Write \\( h \\) as a product ready for the product rule.",
          workingLatex: "h(x) = \\frac{e^{-1/x}}{x} = e^{-1/x}\\cdot x^{-1}.",
          explanation:
            "To locate a maximum we will differentiate and set the derivative to zero. Writing \\( h \\) as a product of two recognisable factors, \\( e^{-1/x} \\) and \\( x^{-1} \\), sets up a clean application of the product rule.",
        },
        {
          stepNumber: 2,
          description: "Differentiate \\( e^{-1/x} \\) by the chain rule.",
          workingLatex: "\\frac{d}{dx}e^{-1/x} = e^{-1/x}\\cdot \\frac{d}{dx}\\!\\left(-\\frac{1}{x}\\right) = e^{-1/x}\\cdot \\frac{1}{x^{2}}.",
          explanation:
            "The outer function is \\( e^{(\\cdot)} \\), the inner is \\( -1/x \\). The derivative of \\( -1/x = -x^{-1} \\) is \\( +x^{-2} = 1/x^2 \\). A common slip is to forget that the minus sign on \\( -1/x \\) turns into a plus after differentiating, which would flip the sign of the whole derivative.",
        },
        {
          stepNumber: 3,
          description: "Differentiate the power \\( x^{-1} \\).",
          workingLatex: "\\frac{d}{dx}x^{-1} = -x^{-2} = -\\frac{1}{x^{2}}.",
          explanation:
            "Straightforward power rule: bring down the exponent \\( -1 \\) and reduce it by one to get \\( -1\\cdot x^{-2} \\). We now have both pieces the product rule needs.",
        },
        {
          stepNumber: 4,
          description: "Assemble the derivative via the product rule.",
          workingLatex: "h'(x) = \\frac{e^{-1/x}}{x^{2}}\\cdot \\frac{1}{x} + e^{-1/x}\\cdot\\left(-\\frac{1}{x^{2}}\\right) = \\frac{e^{-1/x}}{x^{3}} - \\frac{e^{-1/x}}{x^{2}}.",
          explanation:
            "The product rule \\( (uv)' = u'v + uv' \\) combines the two contributions: the derivative of the exponential times \\( x^{-1} \\), plus the exponential times the derivative of \\( x^{-1} \\). Keeping the two fractions separate for a moment makes the next factoring step easy to check.",
        },
        {
          stepNumber: 5,
          description: "Factor out the common positive piece.",
          workingLatex: "h'(x) = \\frac{e^{-1/x}}{x^{2}}\\left( \\frac{1}{x} - 1 \\right).",
          explanation:
            "Both terms share \\( e^{-1/x}/x^2 \\); pulling it out leaves the simple bracket \\( 1/x - 1 \\). The point of factoring is that the messy exponential is now isolated as a strictly positive prefactor, so the sign of \\( h' \\) is decided entirely by the bracket.",
        },
        {
          stepNumber: 6,
          description: "Set the bracket to zero and solve.",
          workingLatex: "\\frac{1}{x} - 1 = 0 \\implies \\frac{1}{x} = 1 \\implies x_\\star = 1.",
          explanation:
            "The prefactor \\( e^{-1/x}/x^2 > 0 \\) can never vanish, so only the bracket can produce a stationary point. Solving \\( 1/x = 1 \\) gives the single critical point \\( x_\\star = 1 \\).",
        },
        {
          stepNumber: 7,
          description: "Confirm it is a maximum.",
          workingLatex: "x < 1: \\tfrac{1}{x} - 1 > 0 \\ (h' > 0); \\quad x > 1: \\tfrac{1}{x} - 1 < 0 \\ (h' < 0).",
          explanation:
            "The bracket is positive for \\( x < 1 \\) and negative for \\( x > 1 \\), so \\( h \\) rises then falls: \\( x_\\star = 1 \\) is indeed a maximum, where \\( h(1) = e^{-1} \\). This is the largest the exponentially small bump \\( e^{-1/x}/x \\) ever gets.",
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
          description: "Write the successive-limit extraction formula.",
          workingLatex: "a_n = \\lim_{x \\to 0^{+}} \\frac{f(x) - \\sum_{k<n} a_k x^k}{x^{n}}.",
          explanation:
            "The coefficients of any asymptotic power series are recovered one at a time by this limit, in which the already-known lower coefficients are subtracted off before dividing by the next gauge. We feed in our specific \\( f \\) and watch what each stage produces.",
        },
        {
          stepNumber: 2,
          description: "Extract the constant term \\( a_0 \\).",
          workingLatex: "a_0 = \\lim_{x \\to 0^{+}} f(x) = \\lim_{x \\to 0^{+}} e^{-1/x} = \\lim_{u \\to \\infty} e^{-u} = 0.",
          explanation:
            "At \\( n = 0 \\) the formula is just the limit of \\( f \\). Since \\( f(x) = e^{-1/x} \\) for \\( x > 0 \\) and this tends to \\( 0 \\) (put \\( u = 1/x \\)), the leading coefficient is \\( 0 \\). This starts the induction.",
        },
        {
          stepNumber: 3,
          description: "Assume the lower coefficients are zero.",
          workingLatex: "a_0 = a_1 = \\cdots = a_{n-1} = 0 \\implies a_n = \\lim_{x \\to 0^{+}} \\frac{e^{-1/x}}{x^{n}}.",
          explanation:
            "Suppose inductively that all earlier coefficients have come out zero. Then the subtracted partial sum \\( \\sum_{k<n} a_k x^k \\) is empty, and the extraction formula collapses to the bare ratio \\( e^{-1/x}/x^n \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the surviving limit by flatness.",
          workingLatex: "a_n = \\lim_{x \\to 0^{+}} \\frac{e^{-1/x}}{x^{n}} = \\lim_{u \\to \\infty} u^{n} e^{-u} = 0.",
          explanation:
            "With \\( u = 1/x \\) this is the standard polynomial-times-decaying-exponential limit, which is \\( 0 \\) for every fixed \\( n \\). So \\( a_n = 0 \\), and the induction closes: every coefficient vanishes.",
        },
        {
          stepNumber: 5,
          description: "State the series and draw the conclusion.",
          workingLatex: "f(x) \\sim 0 + 0\\cdot x + 0\\cdot x^{2} + \\cdots = 0.",
          explanation:
            "A non-zero smooth function (here \\( f \\) is strictly positive for \\( x > 0 \\)) has exactly the same zero asymptotic series as the constant function \\( 0 \\). The series cannot distinguish \\( f \\) from \\( 0 \\), so the asymptotic series does not determine the function — the central lesson of this whole topic.",
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
          description: "Recall the defining remainder estimates.",
          workingLatex: "f(x) - \\sum_{k=0}^{N} a_k x^k = o(x^{N}) \\quad \\text{for every } N \\ge 0.",
          explanation:
            "This is what \\( f \\sim \\sum a_n x^n \\) means: at each truncation order the error is smaller than the last retained gauge. Uniqueness will follow because these estimates let us solve for the coefficients one at a time, with no freedom left at any stage.",
        },
        {
          stepNumber: 2,
          description: "Extract \\( a_0 \\) as a limit (base case).",
          workingLatex: "f(x) - a_0 = o(1) \\implies a_0 = \\lim_{x \\to 0^{+}} f(x).",
          explanation:
            "The \\( N = 0 \\) estimate says \\( f - a_0 \\) tends to \\( 0 \\), so the constant term is forced to be the limit of \\( f \\). There is no choice: \\( a_0 \\) is pinned down by \\( f \\) alone. This is the base case of the induction.",
        },
        {
          stepNumber: 3,
          description: "Peel off the constant and divide by \\( x \\).",
          workingLatex: "\\frac{f(x) - a_0}{x} \\sim a_1 + a_2 x + a_3 x^2 + \\cdots.",
          explanation:
            "Subtracting the now-known \\( a_0 \\) and dividing by the gauge \\( x \\) shifts the whole expansion down one place. The coefficient \\( a_1 \\) is promoted to the new leading (constant) position, so the same argument as in step 2 will catch it.",
        },
        {
          stepNumber: 4,
          description: "Take the limit to get \\( a_1 \\).",
          workingLatex: "a_1 = \\lim_{x \\to 0^{+}} \\frac{f(x) - a_0}{x}.",
          explanation:
            "Applying the base-case reasoning to the shifted function picks out \\( a_1 \\) as a definite limit. Crucially it depends only on \\( f \\) and the already-determined \\( a_0 \\) — again no free parameter enters.",
        },
        {
          stepNumber: 5,
          description: "State the general recursive formula.",
          workingLatex: "a_n = \\lim_{x \\to 0^{+}} \\frac{ f(x) - \\sum_{k=0}^{n-1} a_k x^{k} }{ x^{n} }.",
          explanation:
            "Iterating the peel-and-divide step, the \\( n \\)-th coefficient is a limit involving \\( f \\) and the previously-found coefficients only. By induction every \\( a_n \\) is computed without any choice, purely from \\( f \\).",
        },
        {
          stepNumber: 6,
          description: "Conclude uniqueness.",
          workingLatex: "f \\sim \\sum a_n x^n \\ \\text{and}\\ f \\sim \\sum a_n' x^n \\implies a_n = a_n' \\ \\forall n.",
          explanation:
            "If two expansions of the same \\( f \\) in the same gauge existed, the extraction limits would force their coefficients to coincide term by term, since each limit has a single value. So the coefficient sequence is fixed by \\( f \\) alone: the map function \\( \\to \\) series is well-defined.",
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
          description: "Recall the coefficient-extraction formula.",
          workingLatex: "\\beta_n = \\lim_{x \\to 0^{+}} \\frac{ e^{-1/x} - \\sum_{k=0}^{n-1} \\beta_k x^{k} }{ x^{n} }.",
          explanation:
            "By the uniqueness result, the coefficients of any expansion of \\( e(x) \\) are given by these successive limits. Our task is to show every one of them comes out zero, which we do by induction on \\( n \\).",
        },
        {
          stepNumber: 2,
          description: "Compute the base case \\( \\beta_0 \\).",
          workingLatex: "\\beta_0 = \\lim_{x \\to 0^{+}} e^{-1/x} = \\lim_{u \\to \\infty} e^{-u} = 0.",
          explanation:
            "Take \\( n = 0 \\): the formula is just \\( \\lim e(x) \\). Substituting \\( u = 1/x \\to \\infty \\), the exponential vanishes, so the constant coefficient is zero. This anchors the induction.",
        },
        {
          stepNumber: 3,
          description: "Apply the induction hypothesis to the sum.",
          workingLatex: "\\beta_0 = \\cdots = \\beta_{n-1} = 0 \\implies \\sum_{k=0}^{n-1}\\beta_k x^k = 0.",
          explanation:
            "Assume every earlier coefficient is already known to be zero. Then the entire subtracted partial sum is identically zero, so it cannot contribute to the next extraction limit.",
        },
        {
          stepNumber: 4,
          description: "Collapse the extraction formula.",
          workingLatex: "\\beta_n = \\lim_{x \\to 0^{+}} \\frac{e^{-1/x} - 0}{x^{n}} = \\lim_{x \\to 0^{+}} \\frac{e^{-1/x}}{x^{n}}.",
          explanation:
            "With the subtracted sum gone, the numerator is just \\( e^{-1/x} \\). So the next coefficient is the bare ratio limit we have met before.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the surviving limit.",
          workingLatex: "\\beta_n = \\lim_{x \\to 0^{+}} \\frac{e^{-1/x}}{x^{n}} = \\lim_{u \\to \\infty} u^{n} e^{-u} = 0.",
          explanation:
            "With \\( u = 1/x \\) this is the standard polynomial-times-decaying-exponential limit, which is \\( 0 \\) for each fixed \\( n \\). So \\( \\beta_n = 0 \\), completing the induction step: if all earlier coefficients vanish, so does this one.",
        },
        {
          stepNumber: 6,
          description: "Conclude by induction.",
          workingLatex: "\\beta_n = 0 \\ \\forall n \\implies e(x) \\sim 0.",
          explanation:
            "By induction every coefficient vanishes: the asymptotic power series of \\( \\exp(-1/x) \\) is identically zero, despite the function being strictly positive for every \\( x > 0 \\). The series is genuinely blind to this function.",
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
          description: "Recall the result being applied.",
          workingLatex: "\\exp(-1/x) \\sim 0 \\quad (x \\to 0^{+}).",
          explanation:
            "The previous question established that \\( \\exp(-1/x) \\) has the identically-zero asymptotic power series. We now use this to manufacture two visibly different functions with the same series.",
        },
        {
          stepNumber: 2,
          description: "Write the series of \\( f \\).",
          workingLatex: "f(x) = \\frac{1}{1-x} \\sim \\sum_{n=0}^{\\infty} x^{n} = 1 + x + x^{2} + \\cdots \\quad (x \\to 0^{+}).",
          explanation:
            "The geometric series \\( \\sum x^n \\) converges to \\( 1/(1-x) \\) for \\( |x| < 1 \\); a convergent series is in particular an asymptotic one, so this is the expansion of \\( f \\) near \\( 0 \\). It serves as our reference series.",
        },
        {
          stepNumber: 3,
          description: "Form the series of \\( g \\).",
          workingLatex: "g(x) = \\frac{1}{1-x} + e^{-1/x} \\sim \\sum_{n=0}^{\\infty} x^{n} + \\underbrace{0}_{e^{-1/x}} = 1 + x + x^{2} + \\cdots.",
          explanation:
            "Adding a term with the zero series changes not a single coefficient: each coefficient of \\( g \\) equals the corresponding coefficient of \\( f \\) plus \\( 0 \\). So \\( g \\) inherits exactly \\( f \\)'s series.",
        },
        {
          stepNumber: 4,
          description: "Compare the functions themselves.",
          workingLatex: "g(x) - f(x) = \\exp(-1/x) > 0 \\quad \\text{for all } x > 0.",
          explanation:
            "Subtracting, the two reciprocals cancel and the difference is exactly \\( e^{-1/x} \\), which is strictly positive on \\( x > 0 \\). So the functions are genuinely different at every point, even though their series coincide to all orders.",
        },
        {
          stepNumber: 5,
          description: "State the conclusion.",
          workingLatex: "f \\neq g \\quad \\text{but} \\quad f \\sim g.",
          explanation:
            "A given asymptotic series is shared by infinitely many functions differing by terms beyond all orders, so the coefficients cannot pin down the function. In the language of maps, the assignment series \\( \\to \\) function is not injective: knowing the series does not recover \\( f \\).",
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
          description: "Differentiate once on \\( x > 0 \\).",
          workingLatex: "e'(x) = \\frac{d}{dx}e^{-1/x} = e^{-1/x}\\cdot \\frac{1}{x^{2}} = \\frac{1}{x^{2}}\\,e^{-1/x}.",
          explanation:
            "Away from the origin \\( e \\) is just \\( e^{-1/x} \\). The chain rule with inner function \\( -1/x \\) (derivative \\( +1/x^2 \\)) gives this. Notice the differentiation has pulled out an extra factor \\( 1/x^2 \\): each further derivative will produce more such negative powers.",
        },
        {
          stepNumber: 2,
          description: "Identify the general structure of the \\( k \\)-th derivative.",
          workingLatex: "e^{(k)}(x) = P_k\\!\\left(\\tfrac{1}{x}\\right) e^{-1/x} \\quad (x > 0), \\ P_k \\text{ a polynomial}.",
          explanation:
            "Differentiating \\( P_k(1/x)\\,e^{-1/x} \\) by the product rule hits both factors; \\( \\frac{d}{dx}P_k(1/x) = -\\frac{1}{x^2}P_k'(1/x) \\) and \\( \\frac{d}{dx}e^{-1/x} = \\frac{1}{x^2}e^{-1/x} \\), so the result is again (some new polynomial in \\( 1/x \\)) times \\( e^{-1/x} \\). By induction the shape is preserved for all \\( k \\) — this is the key observation that handles every derivative at once.",
        },
        {
          stepNumber: 3,
          description: "Set up \\( e'(0) \\) as a difference quotient.",
          workingLatex: "e'(0) = \\lim_{x \\to 0^{+}} \\frac{e(x) - e(0)}{x - 0} = \\lim_{x \\to 0^{+}} \\frac{e^{-1/x}}{x}.",
          explanation:
            "At the endpoint we must not blindly plug \\( x = 0 \\) into the formula \\( e^{-1/x}/x^2 \\) — that expression is not even defined there. The derivative at \\( 0 \\) is the limit of the difference quotient, using the extended value \\( e(0) = 0 \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate \\( e'(0) \\).",
          workingLatex: "e'(0) = \\lim_{u \\to \\infty} u\\, e^{-u} = 0, \\qquad u = \\frac{1}{x}.",
          explanation:
            "Substituting \\( u = 1/x \\) turns the quotient into \\( u\\,e^{-u} \\), the standard limit that tends to \\( 0 \\). So the first derivative exists at \\( 0 \\) and equals zero.",
        },
        {
          stepNumber: 5,
          description: "Set up the general derivative at \\( 0 \\).",
          workingLatex: "e^{(k)}(0) = \\lim_{x \\to 0^{+}} \\frac{e^{(k-1)}(x) - 0}{x} = \\lim_{x \\to 0^{+}} \\frac{ P_{k-1}(1/x)\\, e^{-1/x} }{x}.",
          explanation:
            "Inductively, given that \\( e^{(k-1)}(0) = 0 \\), the next derivative at the origin is again a difference quotient, with \\( e^{(k-1)}(x) = P_{k-1}(1/x)e^{-1/x} \\) from step 2 in the numerator.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the general limit.",
          workingLatex: "e^{(k)}(0) = \\lim_{u \\to \\infty} u\\, P_{k-1}(u)\\, e^{-u} = 0.",
          explanation:
            "With \\( u = 1/x \\) the quotient becomes \\( u\\,P_{k-1}(u)\\,e^{-u} \\), a polynomial in \\( u \\) times \\( e^{-u} \\). A polynomial of any degree cannot defeat the exponential, so the limit is \\( 0 \\), and the induction closes.",
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "e^{(k)}(0) = 0 \\quad \\forall k \\ge 0.",
          explanation:
            "Every derivative vanishes at the origin, so the Taylor series of \\( e \\) at \\( 0 \\) is identically zero. Yet \\( e \\) is positive for \\( x > 0 \\): it is the classic example of a function that is infinitely differentiable (smooth) but not analytic.",
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
          description: "Write \\( g_n \\) as a product and list the factor derivatives.",
          workingLatex: "g_n(x) = e^{-1/x}\\,x^{-n}, \\qquad \\frac{d}{dx}e^{-1/x} = \\frac{e^{-1/x}}{x^{2}}, \\quad \\frac{d}{dx}x^{-n} = -n\\,x^{-n-1}.",
          explanation:
            "Treat \\( g_n \\) as a product of \\( e^{-1/x} \\) and \\( x^{-n} \\). The exponential differentiates (chain rule, inner derivative \\( +1/x^2 \\)) to \\( e^{-1/x}/x^2 \\); the power differentiates to \\( -n x^{-n-1} \\). Listing these separately keeps the product rule tidy.",
        },
        {
          stepNumber: 2,
          description: "Apply the product rule.",
          workingLatex: "g_n'(x) = \\frac{e^{-1/x}}{x^{2}}\\cdot x^{-n} + e^{-1/x}\\cdot\\bigl(-n\\,x^{-n-1}\\bigr) = \\frac{e^{-1/x}}{x^{n+2}} - \\frac{n\\,e^{-1/x}}{x^{n+1}}.",
          explanation:
            "Using \\( (uv)' = u'v + uv' \\) and combining powers (\\( x^{-2}\\cdot x^{-n} = x^{-n-2} \\)), the derivative splits into two exponentially weighted terms with different powers of \\( x \\) in the denominator.",
        },
        {
          stepNumber: 3,
          description: "Factor out the common positive piece.",
          workingLatex: "g_n'(x) = \\frac{e^{-1/x}}{x^{n+2}}\\Bigl( 1 - n\\,x \\Bigr).",
          explanation:
            "Both terms share \\( e^{-1/x}/x^{n+2} \\); the second contributes \\( n x^{-n-1} = n x \\cdot x^{-n-2} \\), so pulling out the common factor leaves the bracket \\( 1 - nx \\). The whole sign behaviour of \\( g_n' \\) now lives in this linear bracket.",
        },
        {
          stepNumber: 4,
          description: "Locate the stationary point.",
          workingLatex: "1 - n x = 0 \\implies x_\\star = \\frac{1}{n}.",
          explanation:
            "The prefactor \\( e^{-1/x}/x^{n+2} \\) is strictly positive on \\( x > 0 \\), so it never makes \\( g_n' \\) vanish; only the bracket can. Solving \\( nx = 1 \\) gives the unique critical point \\( x_\\star = 1/n \\).",
        },
        {
          stepNumber: 5,
          description: "Confirm it is a maximum.",
          workingLatex: "x < \\tfrac{1}{n}: 1 - nx > 0 \\ (g_n' > 0); \\quad x > \\tfrac{1}{n}: 1 - nx < 0 \\ (g_n' < 0).",
          explanation:
            "The bracket is positive to the left of \\( 1/n \\) and negative to the right, so \\( g_n \\) increases then decreases: \\( x_\\star = 1/n \\) is a maximum (and the only one).",
        },
        {
          stepNumber: 6,
          description: "Evaluate the maximum value.",
          workingLatex: "g_n\\!\\left(\\frac{1}{n}\\right) = \\frac{e^{-1/(1/n)}}{(1/n)^{n}} = \\frac{e^{-n}}{n^{-n}} = n^{n} e^{-n}.",
          explanation:
            "Substitute \\( x_\\star = 1/n \\): the exponent \\( -1/x_\\star = -n \\) gives \\( e^{-n} \\), and \\( x_\\star^{-n} = (1/n)^{-n} = n^{n} \\). The peak height is \\( n^n e^{-n} \\). [Checked numerically: \\( n=2 \\) gives \\( 4e^{-2}=0.5413 \\), \\( n=3 \\) gives \\( 27e^{-3}=1.3443 \\); note it grows with \\( n \\), so larger-\\( n \\) bumps are taller but ever more concentrated near \\( 0 \\).]",
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
          description: "Recall what \\( o(\\cdot) \\) requires here.",
          workingLatex: "\\exp(-2/x) = o\\bigl(\\exp(-1/x)\\bigr) \\iff \\frac{\\exp(-2/x)}{\\exp(-1/x)} \\to 0 \\ (x \\to 0^+).",
          explanation:
            "Little-o is a statement about a ratio, even when the comparison gauge is itself a decaying exponential rather than a power of \\( x \\). So we must form the ratio and show it vanishes.",
        },
        {
          stepNumber: 2,
          description: "Combine the exponentials.",
          workingLatex: "\\frac{\\exp(-2/x)}{\\exp(-1/x)} = \\exp\\!\\left( -\\frac{2}{x} - \\left(-\\frac{1}{x}\\right) \\right) = \\exp\\!\\left( -\\frac{1}{x} \\right).",
          explanation:
            "Dividing exponentials subtracts their exponents: \\( -2/x - (-1/x) = -1/x \\). The two \\( 1/x \\) terms partially cancel, leaving a single exponentially small factor \\( e^{-1/x} \\).",
        },
        {
          stepNumber: 3,
          description: "Take the limit of the ratio.",
          workingLatex: "\\lim_{x \\to 0^{+}} \\exp\\!\\left( -\\frac{1}{x} \\right) = \\lim_{u \\to \\infty} e^{-u} = 0.",
          explanation:
            "The surviving \\( e^{-1/x} \\to 0 \\) (substitute \\( u = 1/x \\)). Since the ratio vanishes, \\( \\exp(-2/x) \\) is little-o of \\( \\exp(-1/x) \\): it is smaller still, by an exponential factor.",
        },
        {
          stepNumber: 4,
          description: "Place both in the small-term hierarchy.",
          workingLatex: "\\exp(-2/x) \\ll \\exp(-1/x) \\ll x^{n} \\quad \\forall n.",
          explanation:
            "Both exponentials are already \\( o(x^n) \\) for every \\( n \\) (beyond all orders), and now we see they are themselves ordered: \\( e^{-2/x} \\) sits below \\( e^{-1/x} \\). There is an infinite tower of exponentially small terms beneath the power series, every rung of which the ordinary power-series expansion reports as zero.",
        },
        {
          stepNumber: 5,
          description: "Interpret for distinguishing small terms.",
          workingLatex: "\\text{power series of } e^{-1/x} = \\text{power series of } e^{-2/x} = 0,",
          explanation:
            "Because an asymptotic power series only records the coefficients of \\( x^n \\), it cannot tell \\( e^{-1/x} \\) from \\( e^{-2/x} \\), or either from \\( 0 \\). To distinguish exponentially small terms one needs a finer (exponential) gauge — the power series alone is blind to all of them.",
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
          description: "Identify the gauge sequence.",
          workingLatex: "f(z) \\sim a_0 + \\frac{a_1}{z} + \\frac{a_2}{z^2} + \\cdots, \\qquad \\text{gauge } \\{ z^{-n} \\}_{n\\ge 0}.",
          explanation:
            "Expansions at infinity use the gauge \\( 1, 1/z, 1/z^2, \\dots \\), each term smaller than the last as \\( z \\to \\infty \\). The extraction strategy mirrors the small-\\( x \\) case but with \\( z \\to \\infty \\) playing the role of \\( x \\to 0^+ \\).",
        },
        {
          stepNumber: 2,
          description: "Fix \\( a_0 \\) as the limit at infinity.",
          workingLatex: "f(z) - a_0 = O\\!\\left(\\frac{1}{z}\\right) \\to 0 \\implies a_0 = \\lim_{z \\to \\infty} f(z).",
          explanation:
            "The leading remainder estimate says \\( f - a_0 \\) is of order \\( 1/z \\), hence tends to \\( 0 \\). So the constant term is forced to be the limit of \\( f \\) at infinity — no freedom, exactly as the constant term was forced at \\( x = 0 \\) earlier.",
        },
        {
          stepNumber: 3,
          description: "Peel off \\( a_0 \\) and multiply by \\( z \\).",
          workingLatex: "z\\bigl( f(z) - a_0 \\bigr) \\sim a_1 + \\frac{a_2}{z} + \\frac{a_3}{z^2} + \\cdots.",
          explanation:
            "Subtract the known \\( a_0 \\) and multiply by \\( z \\), the reciprocal of the next gauge \\( 1/z \\). This shifts the whole series up one place so that \\( a_1 \\) becomes the new leading constant term.",
        },
        {
          stepNumber: 4,
          description: "Take the limit to isolate \\( a_1 \\).",
          workingLatex: "a_1 = \\lim_{z \\to \\infty} z\\bigl( f(z) - a_0 \\bigr).",
          explanation:
            "As \\( z \\to \\infty \\) the trailing tail \\( a_2/z + a_3/z^2 + \\cdots \\) vanishes, leaving just \\( a_1 \\). Because this limit involves only \\( f \\) and the already-fixed \\( a_0 \\), the value of \\( a_1 \\) is uniquely determined; the same peel-and-multiply continues for every higher coefficient.",
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
            "Here \\( f \\) is the series with every coefficient equal to \\( 1 \\); it sums to \\( 1/(1 - 1/z) = z/(z-1) \\). The recurrence below needs these \\( a_k \\) values as input.",
        },
        {
          stepNumber: 2,
          description: "Understand where the recurrence comes from.",
          workingLatex: "f\\cdot\\frac{1}{f} = 1 \\implies \\sum_{k=0}^{n} d_{n-k}\\,a_k = \\begin{cases} 1 & n = 0 \\\\ 0 & n \\ge 1 \\end{cases}.",
          explanation:
            "Multiplying the series for \\( f \\) and \\( 1/f \\) must reproduce the constant \\( 1 \\). Matching the coefficient of \\( z^{-n} \\) on both sides is a Cauchy convolution: it equals \\( 1 \\) at \\( n=0 \\) and \\( 0 \\) for every \\( n \\ge 1 \\). That is exactly the stated recurrence.",
        },
        {
          stepNumber: 3,
          description: "Record the seed value.",
          workingLatex: "n = 0: \\quad d_0\\,a_0 = 1 \\implies d_0 = 1.",
          explanation:
            "The \\( n=0 \\) equation gives \\( d_0 a_0 = 1 \\), and with \\( a_0 = 1 \\) this yields \\( d_0 = 1 \\). Intuitively \\( 1/f \\to 1 \\) as \\( z \\to \\infty \\) because \\( f \\to 1 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the recurrence at \\( n = 1 \\).",
          workingLatex: "d_1 a_0 + d_0 a_1 = 0 \\implies d_1(1) + (1)(1) = 0 \\implies d_1 = -1.",
          explanation:
            "Write the \\( n = 1 \\) convolution \\( \\sum_{k=0}^{1} d_{1-k}a_k = d_1 a_0 + d_0 a_1 \\) and substitute \\( a_0 = a_1 = 1 \\), \\( d_0 = 1 \\). This forces \\( d_1 = -1 \\).",
        },
        {
          stepNumber: 5,
          description: "Apply the recurrence at \\( n = 2 \\).",
          workingLatex: "d_2 a_0 + d_1 a_1 + d_0 a_2 = 0 \\implies d_2(1) + (-1)(1) + (1)(1) = 0 \\implies d_2 = 0.",
          explanation:
            "The \\( n = 2 \\) convolution \\( d_2 a_0 + d_1 a_1 + d_0 a_2 \\) uses the just-found \\( d_1 = -1 \\). The two unit terms cancel, leaving \\( d_2 = 0 \\).",
        },
        {
          stepNumber: 6,
          description: "Cross-check against the exact reciprocal.",
          workingLatex: "\\frac{1}{f} = \\frac{z-1}{z} = 1 - \\frac{1}{z} \\implies d_0 = 1,\\ d_1 = -1,\\ d_2 = 0,\\ d_n = 0\\ (n\\ge 2).",
          explanation:
            "Since \\( f = z/(z-1) \\) exactly, its reciprocal is \\( (z-1)/z = 1 - 1/z \\), a terminating series. The coefficients read straight off and confirm the recurrence output, including \\( d_2 = 0 \\). A reassuring sanity check that the convolution was set up correctly.",
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
          description: "Decide the construction strategy.",
          workingLatex: "g = f + (\\text{something beyond all orders}).",
          explanation:
            "To get two functions with the same series, take any base \\( f \\) and add a term whose own asymptotic series is zero. The sum then has \\( f \\)'s series exactly, yet differs from \\( f \\) as a function. \\( \\exp(-1/x) \\) is the standard such term.",
        },
        {
          stepNumber: 2,
          description: "Pick a base function and its series.",
          workingLatex: "f(x) = \\cos x \\sim 1 - \\frac{x^{2}}{2} + \\frac{x^{4}}{24} - \\cdots \\quad (x \\to 0^{+}).",
          explanation:
            "Any smooth function with a known Maclaurin series works as the base; we use \\( \\cos x \\), whose convergent (hence asymptotic) expansion we already know. It is smooth on all of \\( (0, \\infty) \\).",
        },
        {
          stepNumber: 3,
          description: "Add a beyond-all-orders term.",
          workingLatex: "g(x) = \\cos x + \\exp(-1/x).",
          explanation:
            "The added term \\( \\exp(-1/x) \\) has the identically-zero asymptotic series, so adding it leaves every coefficient of \\( \\cos x \\) unchanged. And \\( e^{-1/x} \\) is smooth on \\( (0,\\infty) \\), so \\( g \\) is smooth there too.",
        },
        {
          stepNumber: 4,
          description: "Confirm equal series.",
          workingLatex: "g(x) \\sim 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\cdots \\sim f(x).",
          explanation:
            "Because the added term contributes only zeros, \\( g \\) and \\( f \\) have the same asymptotic series to all orders.",
        },
        {
          stepNumber: 5,
          description: "Confirm the functions are distinct.",
          workingLatex: "g(x) - f(x) = \\exp(-1/x) > 0 \\quad \\text{for all } x > 0.",
          explanation:
            "Their difference is strictly positive everywhere on \\( (0,\\infty) \\), so they are genuinely different functions despite sharing every coefficient — exactly the required example of non-uniqueness.",
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
          description: "Write the ratio and choose the substitution.",
          workingLatex: "\\frac{s(x)}{x^{4}} = \\frac{e^{-1/x^{2}}}{x^{4}}, \\qquad v = \\frac{1}{x^{2}}.",
          explanation:
            "The exponent is \\( -1/x^2 \\), so the natural variable is \\( v = 1/x^2 \\). Unlike the \\( e^{-1/x} \\) case, here the substitution depends on \\( x^2 \\), which is what makes the analysis two-sided.",
        },
        {
          stepNumber: 2,
          description: "Track the new range as \\( x \\to 0 \\).",
          workingLatex: "x \\to 0^{\\pm} \\implies x^{2} \\to 0^{+} \\implies v = \\frac{1}{x^{2}} \\to +\\infty.",
          explanation:
            "Because \\( x^2 > 0 \\) whether \\( x \\) is positive or negative, \\( v \\to +\\infty \\) from either side. So a single one-sided limit in \\( v \\) handles the genuinely two-sided limit in \\( x \\) — no separate left/right cases are needed.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the ratio in terms of \\( v \\).",
          workingLatex: "\\frac{e^{-1/x^{2}}}{x^{4}} = e^{-v}\\cdot \\frac{1}{(x^{2})^{2}} = e^{-v}\\,v^{2} = v^{2} e^{-v}.",
          explanation:
            "Since \\( x^4 = (x^2)^2 = v^{-2} \\), dividing by \\( x^4 \\) multiplies by \\( v^2 \\). The ratio is again a power of \\( v \\) times a decaying exponential.",
        },
        {
          stepNumber: 4,
          description: "Take the limit.",
          workingLatex: "\\lim_{v \\to \\infty} v^{2} e^{-v} = 0.",
          explanation:
            "Exponential decay dominates the power \\( v^2 \\), so the limit is \\( 0 \\). [Numerically \\( s(0.1)/0.1^4 \\approx 3.7\\times10^{-40} \\) — astonishingly tiny, illustrating how flat \\( s \\) is near the origin.]",
        },
        {
          stepNumber: 5,
          description: "State the Taylor series.",
          workingLatex: "s(x) \\sim 0 + 0\\cdot x + 0\\cdot x^{2} + \\cdots = 0.",
          explanation:
            "The same argument with \\( x^4 \\) replaced by any \\( x^n \\) gives \\( s/x^n \\to 0 \\), so every derivative vanishes at \\( 0 \\) and the Maclaurin series is identically zero. This \\( e^{-1/x^2} \\) is the standard example of a smooth, non-analytic function on the whole real line (used, e.g., to build smooth bump functions).",
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
          description: "Form the ratio of successive terms.",
          workingLatex: "\\left| \\frac{(-1)^{n+1}(n+1)!\\, x^{n+1}}{(-1)^{n}\\, n!\\, x^{n}} \\right| = \\frac{(n+1)!}{n!}\\,|x| = (n+1)|x|.",
          explanation:
            "The general term is \\( (-1)^n n!\\,x^n \\). Dividing magnitudes, the signs drop out, the factorials reduce to \\( n+1 \\), and one power of \\( x \\) survives. This ratio governs both convergence and, later, optimal truncation.",
        },
        {
          stepNumber: 2,
          description: "Let the ratio test run.",
          workingLatex: "\\lim_{n \\to \\infty} (n+1)|x| = \\infty \\quad \\text{for every fixed } x \\neq 0.",
          explanation:
            "For any non-zero \\( x \\), the factor \\( (n+1) \\) eventually swamps \\( |x| \\), so consecutive terms grow without bound. The ratio test therefore signals divergence.",
        },
        {
          stepNumber: 3,
          description: "Conclude zero radius of convergence.",
          workingLatex: "R = 0 \\quad (\\text{the series diverges for every } x \\neq 0).",
          explanation:
            "Because the term-ratio exceeds \\( 1 \\) eventually for every \\( x \\neq 0 \\), the series cannot be summed in the ordinary sense — it is a purely formal asymptotic series, useful only when truncated.",
        },
        {
          stepNumber: 4,
          description: "Locate the smallest term.",
          workingLatex: "(n+1)|x| < 1 \\iff n < \\frac{1}{|x|} - 1; \\quad \\text{terms shrink until } n \\approx \\frac{1}{|x|}.",
          explanation:
            "A divergent asymptotic series still gives its best accuracy if cut at its smallest term. The terms decrease while the ratio \\( (n+1)|x| \\) is below \\( 1 \\), i.e. up to roughly \\( n \\approx 1/|x| \\), and grow thereafter. So the optimal truncation index is near \\( 1/|x| \\).",
        },
        {
          stepNumber: 5,
          description: "Identify the irreducible error.",
          workingLatex: "\\text{error}_{\\min} \\approx |T_{n^\\star}| = O\\!\\bigl( e^{-1/|x|} \\bigr), \\qquad n^\\star \\approx \\frac{1}{|x|}.",
          explanation:
            "Truncating just before the smallest term leaves a residual of the size of that term. By Stirling, \\( n!\\,|x|^n \\) at \\( n \\approx 1/|x| \\) is exponentially small, of order \\( e^{-1/|x|} \\) — the hallmark scale of a beyond-all-orders contribution.",
        },
        {
          stepNumber: 6,
          description: "Conclude on non-uniqueness.",
          workingLatex: "\\text{series} \\not\\Rightarrow \\text{function}, \\quad \\text{gap} \\sim e^{-1/|x|}.",
          explanation:
            "The series can never do better than this exponentially small error, and that is exactly the level at which different functions sharing the series differ. So summing the series — however cleverly truncated — cannot single out the correct function: the irreducible error and the non-uniqueness ambiguity are the same size.",
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
          workingLatex: "\\{\\phi_n\\} \\text{ asymptotic} \\iff \\phi_{n+1}(x) = o\\bigl( \\phi_n(x) \\bigr) \\ \\text{as } x \\to 0^{+}.",
          explanation:
            "A sequence of gauge functions is called asymptotic precisely when each term is little-o of its predecessor, i.e. each is negligible compared with the one before. This is exactly the property we must verify for \\( \\phi_n(x) = e^{-n/x} \\).",
        },
        {
          stepNumber: 2,
          description: "Form the consecutive ratio.",
          workingLatex: "\\frac{\\phi_{n+1}(x)}{\\phi_n(x)} = \\frac{e^{-(n+1)/x}}{e^{-n/x}} = \\exp\\!\\left( -\\frac{n+1}{x} + \\frac{n}{x} \\right) = e^{-1/x}.",
          explanation:
            "Dividing exponentials subtracts exponents; the \\( n/x \\) terms cancel and leave \\( -1/x \\). Remarkably the ratio is the single factor \\( e^{-1/x} \\), independent of \\( n \\) — every consecutive pair has the same relative size.",
        },
        {
          stepNumber: 3,
          description: "Take the limit of the ratio.",
          workingLatex: "\\lim_{x \\to 0^{+}} e^{-1/x} = 0 \\implies \\phi_{n+1} = o(\\phi_n) \\ \\forall n.",
          explanation:
            "Since \\( e^{-1/x} \\to 0 \\) (put \\( u = 1/x \\)), the little-o condition holds for every \\( n \\). Therefore \\( \\{e^{-n/x}\\} \\) is indeed an asymptotic sequence as \\( x \\to 0^+ \\).",
        },
        {
          stepNumber: 4,
          description: "Relate to the hierarchy of small terms.",
          workingLatex: "\\cdots \\ll e^{-3/x} \\ll e^{-2/x} \\ll e^{-1/x} \\ll x^{m} \\quad \\forall m.",
          explanation:
            "Each \\( e^{-n/x} \\) is already \\( o(x^m) \\) for every \\( m \\) (beyond all orders), and the sequence orders them among themselves into a tower of ever-smaller subdominant exponentials. A power series sees none of this structure — to a power expansion every \\( \\phi_n \\) is just zero. This sequence is the natural gauge for resolving exponentially small effects.",
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
          description: "Write the series of \\( G \\).",
          workingLatex: "G(x) = \\frac{1}{1+x} \\sim \\sum_{n=0}^\\infty (-1)^n x^n = 1 - x + x^2 - \\cdots \\quad (x \\to 0^{+}).",
          explanation:
            "The geometric series with ratio \\( -x \\) sums to \\( 1/(1+x) \\) for \\( |x| < 1 \\); being convergent it is also the asymptotic expansion of \\( G \\) near \\( 0 \\). This is the reference series both functions will share.",
        },
        {
          stepNumber: 2,
          description: "Identify the difference of the two functions.",
          workingLatex: "F(x) - G(x) = \\left(\\frac{1}{1+x} + e^{-1/x}\\right) - \\frac{1}{1+x} = e^{-1/x}.",
          explanation:
            "Subtracting, the two reciprocals cancel exactly, leaving just the exponentially small bump \\( e^{-1/x} \\). Everything that distinguishes \\( F \\) from \\( G \\) is contained in this one term.",
        },
        {
          stepNumber: 3,
          description: "Show the difference is beyond all orders.",
          workingLatex: "e^{-1/x} = o(x^n) \\ \\forall n \\implies e^{-1/x} \\sim 0 \\implies F \\sim G.",
          explanation:
            "The difference has the identically-zero asymptotic series, so it changes no coefficient. Hence \\( F \\) and \\( G \\) share their power-series expansion to all orders, even though they are different functions.",
        },
        {
          stepNumber: 4,
          description: "Set up the threshold condition.",
          workingLatex: "|F(x) - G(x)| = e^{-1/x} = 10^{-3}.",
          explanation:
            "We want the smallest \\( x \\) at which the gap first reaches \\( 10^{-3} \\). Since \\( e^{-1/x} \\) is strictly increasing in \\( x > 0 \\) (as \\( x \\) grows, \\( -1/x \\) increases toward \\( 0 \\)), the gap first hits \\( 10^{-3} \\) exactly when equality holds; below that \\( x \\) the gap is smaller. So set the bump equal to the threshold.",
        },
        {
          stepNumber: 5,
          description: "Take logs and solve for \\( x \\).",
          workingLatex: "-\\frac{1}{x} = \\ln\\!\\bigl(10^{-3}\\bigr) = -3\\ln 10 \\implies \\frac{1}{x} = 3\\ln 10 \\implies x = \\frac{1}{3\\ln 10}.",
          explanation:
            "Take the natural log of both sides; \\( \\ln(10^{-3}) = -3\\ln 10 \\). Cancelling the minus signs and inverting gives the exact threshold \\( x = 1/(3\\ln 10) \\).",
        },
        {
          stepNumber: 6,
          description: "Evaluate numerically and interpret.",
          workingLatex: "x = \\frac{1}{3\\ln 10} \\approx \\frac{1}{6.9078} \\approx 0.1448.",
          explanation:
            "[Check: \\( \\exp(-1/0.1448) = \\exp(-6.908) = 1.00\\times10^{-3} \\).] So for all \\( x < 0.1448 \\) the two functions agree to better than \\( 10^{-3} \\), despite having identical asymptotic series. The series tells you nothing about where this discrepancy switches on; only the exponential term knows.",
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
          description: "Write both expansions with the same coefficients.",
          workingLatex: "f(x) \\sim \\sum_{n} a_n x^n, \\qquad g(x) \\sim \\sum_{n} a_n x^n \\quad (\\text{same } a_n).",
          explanation:
            "By hypothesis the two functions have identical coefficients in the power gauge; that is precisely what \"same asymptotic series\" means. The \\( a_n \\) are the same symbols in both lines — the only difference between \\( f \\) and \\( g \\) is in their tails.",
        },
        {
          stepNumber: 2,
          description: "Write the order-\\( n \\) remainder estimate for \\( f \\).",
          workingLatex: "f(x) - \\sum_{k=0}^{n} a_k x^k = o(x^n).",
          explanation:
            "This is the definition of the asymptotic expansion truncated at order \\( n \\): the function minus its degree-\\( n \\) partial sum is smaller than the last retained gauge \\( x^n \\).",
        },
        {
          stepNumber: 3,
          description: "Write the same estimate for \\( g \\).",
          workingLatex: "g(x) - \\sum_{k=0}^{n} a_k x^k = o(x^n).",
          explanation:
            "Because \\( g \\) has the same coefficients, its partial sum is identical to \\( f \\)'s, and the same remainder estimate holds. The two partial sums being equal is the crux of the next step.",
        },
        {
          stepNumber: 4,
          description: "Subtract the two estimates.",
          workingLatex: "f(x) - g(x) = \\Bigl(f - \\!\\sum_{k=0}^{n} a_k x^k\\Bigr) - \\Bigl(g - \\!\\sum_{k=0}^{n} a_k x^k\\Bigr) = o(x^n) - o(x^n).",
          explanation:
            "The shared partial sums cancel exactly, leaving the difference of the two remainders. We have inserted and subtracted the common partial sum to expose this cancellation.",
        },
        {
          stepNumber: 5,
          description: "Conclude the difference is beyond all orders.",
          workingLatex: "f(x) - g(x) = o(x^n) \\quad \\forall n \\ge 0.",
          explanation:
            "The difference of two \\( o(x^n) \\) quantities is again \\( o(x^n) \\). Since \\( n \\) was an arbitrary order, this holds for every \\( n \\): \\( f - g \\) is smaller than every power of \\( x \\), i.e. beyond all orders.",
        },
        {
          stepNumber: 6,
          description: "Characterise the equivalence classes.",
          workingLatex: "f \\sim g \\iff f - g \\in \\mathcal{E}, \\quad \\mathcal{E} = \\{ h : h = o(x^n)\\ \\forall n \\}.",
          explanation:
            "Two functions share a series exactly when their difference lies in the set \\( \\mathcal{E} \\) of beyond-all-orders (exponentially small) functions, e.g. multiples of \\( e^{-1/x} \\). So each equivalence class is a coset \\( f + \\mathcal{E} \\): infinitely many functions, all with the one series, differing only by exponentially small terms.",
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
          workingLatex: "\\forall \\{a_n\\}_{n\\ge 0} \\ \\exists\\, f \\in C^{\\infty} : \\ f(x) \\sim \\sum_{n=0}^{\\infty} a_n x^{n} \\ (x \\to 0^{+}).",
          explanation:
            "Borel's theorem (Ritt's in the sectorial version) places no growth restriction on \\( \\{a_n\\} \\): every formal power series, however fast its coefficients grow, is realised as the asymptotic series of some smooth function. The construction smoothly cuts off each monomial \\( a_n x^n \\) on a shrinking interval so the sum converges to a \\( C^\\infty \\) function with the prescribed expansion.",
        },
        {
          stepNumber: 2,
          description: "Recall uniqueness of coefficients.",
          workingLatex: "f \\sim \\sum a_n x^n \\implies a_n = \\lim_{x\\to 0^+}\\frac{f - \\sum_{k<n}a_k x^k}{x^n} \\ \\text{(unique)}.",
          explanation:
            "From the earlier uniqueness result, the extraction limits determine \\( \\{a_n\\} \\) from \\( f \\) with no ambiguity. This is what makes \"the asymptotic series of \\( f \\)\" a well-defined, single-valued object.",
        },
        {
          stepNumber: 3,
          description: "Package the assignment as a map.",
          workingLatex: "T : C^{\\infty}_{0^+} \\to \\mathbb{R}^{\\mathbb{N}}, \\qquad T(f) = (a_0, a_1, a_2, \\dots).",
          explanation:
            "Define \\( T \\) to send each smooth function (admitting an expansion at \\( 0^+ \\)) to its coefficient sequence. Uniqueness from step 2 guarantees \\( T \\) is genuinely a function — each \\( f \\) has exactly one image.",
        },
        {
          stepNumber: 4,
          description: "Read off surjectivity from Borel.",
          workingLatex: "T \\text{ is onto: every } \\{a_n\\} \\in \\mathbb{R}^{\\mathbb{N}} \\text{ is } T(f) \\text{ for some } f.",
          explanation:
            "Borel's theorem says every target sequence is hit, so \\( T \\) is surjective onto the full space of coefficient sequences. There is no formal series that fails to be some function's expansion.",
        },
        {
          stepNumber: 5,
          description: "Describe the kernel.",
          workingLatex: "\\ker T = \\{ h \\in C^{\\infty}_{0^+} : h = o(x^n)\\ \\forall n \\} \\ni \\exp(-1/x).",
          explanation:
            "The functions mapping to the zero sequence are exactly the beyond-all-orders ones, and \\( e^{-1/x} \\) is a concrete non-zero member. So the kernel is non-trivial: it contains more than just the zero function.",
        },
        {
          stepNumber: 6,
          description: "Conclude non-injectivity.",
          workingLatex: "T(f) = T(g) \\iff f - g \\in \\ker T \\neq \\{0\\} \\implies T \\text{ not injective.}",
          explanation:
            "Two functions share a series iff they differ by a kernel element. Since the kernel is non-trivial, distinct functions can map to the same series, so \\( T \\) is not injective. This is the precise statement of non-uniqueness: \\( T \\) is surjective (every series occurs) but many-to-one (the series does not recover the function).",
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
          description: "Attempt to extract the constant coefficient.",
          workingLatex: "\\beta_0 = \\lim_{x \\to 0^{+}} \\sin\\!\\bigl( e^{1/x} \\bigr).",
          explanation:
            "Every asymptotic power series begins with \\( \\beta_0 = \\lim_{x\\to 0^+} f \\). So before claiming the series is \\( 0 \\), we must check this very first limit even exists. As \\( x \\to 0^{+} \\), the exponent \\( 1/x \\to +\\infty \\), so \\( e^{1/x} \\to \\infty \\) and the argument of the sine runs off to infinity.",
        },
        {
          stepNumber: 2,
          description: "Pick a sequence on which the sine is \\( 0 \\).",
          workingLatex: "e^{1/x_k} = k\\pi \\implies x_k = \\frac{1}{\\ln(k\\pi)} \\to 0^{+}, \\qquad \\sin\\!\\bigl(e^{1/x_k}\\bigr) = \\sin(k\\pi) = 0.",
          explanation:
            "Solving \\( e^{1/x_k} = k\\pi \\) gives \\( x_k = 1/\\ln(k\\pi) \\), which decreases to \\( 0 \\) as \\( k \\to \\infty \\). Along this sequence the sine argument is an integer multiple of \\( \\pi \\), so the sine is exactly \\( 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Pick another sequence on which the sine is \\( 1 \\).",
          workingLatex: "e^{1/x_k'} = \\bigl(2k+\\tfrac12\\bigr)\\pi \\implies x_k' \\to 0^{+}, \\qquad \\sin\\!\\bigl(e^{1/x_k'}\\bigr) = 1.",
          explanation:
            "Because \\( e^{1/x} \\) is continuous and sweeps through every large value, we can equally solve for \\( x_k' \\to 0^+ \\) landing the argument at \\( (2k+\\tfrac12)\\pi \\), where the sine equals \\( 1 \\). We now have two sequences both tending to \\( 0 \\) but giving different sine values.",
        },
        {
          stepNumber: 4,
          description: "Conclude the limit does not exist.",
          workingLatex: "0 = \\lim_k \\sin(e^{1/x_k}) \\neq \\lim_k \\sin(e^{1/x_k'}) = 1 \\implies \\lim_{x\\to 0^+} \\text{ does not exist.}",
          explanation:
            "Two subsequences with different limits means \\( \\sin(e^{1/x}) \\) has no single limiting value; it oscillates densely in \\( [-1,1] \\). So \\( \\beta_0 \\) cannot even be defined — the would-be first coefficient fails to exist.",
        },
        {
          stepNumber: 5,
          description: "Contrast with the genuinely flat case.",
          workingLatex: "\\exp(-1/x) \\sim 0 \\ \\text{(series exists, equals } 0), \\quad \\sin(e^{1/x}) : \\text{no series at all.}",
          explanation:
            "Crucially, having no asymptotic series is different from having the zero series. \\( e^{-1/x} \\) decays monotonically to a definite limit, so its coefficients all exist and happen to be zero. Here the bounded but never-settling oscillation destroys the very first limit, so no asymptotic power series exists. The question's suggestion that the series is \\( 0 \\) is a trap.",
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
          description: "Identify the magnitude of the \\( n \\)-th term.",
          workingLatex: "|T_n| = e^{-x}\\, \\frac{n!}{x^{n+1}} \\quad (n = 0, 1, 2, \\dots).",
          explanation:
            "Reading off the bracket, its \\( n \\)-th entry is \\( (-1)^n n!\\,x^{-(n+1)} \\); multiplying by the common prefactor \\( e^{-x} \\) and discarding the alternating sign gives the magnitude of each term. We study these magnitudes to find which is smallest.",
        },
        {
          stepNumber: 2,
          description: "Form the ratio of successive magnitudes.",
          workingLatex: "\\frac{|T_{n+1}|}{|T_n|} = \\frac{(n+1)!\\,/\\,x^{n+2}}{n!\\,/\\,x^{n+1}} = \\frac{(n+1)!}{n!}\\cdot\\frac{x^{n+1}}{x^{n+2}} = \\frac{n+1}{x}.",
          explanation:
            "Dividing consecutive magnitudes, the \\( e^{-x} \\) cancels, the factorial ratio is \\( n+1 \\), and the power ratio is \\( 1/x \\). The result \\( (n+1)/x \\) tells us whether the terms are still shrinking.",
        },
        {
          stepNumber: 3,
          description: "Find where terms stop shrinking.",
          workingLatex: "\\frac{n+1}{x} < 1 \\iff n + 1 < x; \\qquad \\frac{n+1}{x} > 1 \\iff n+1 > x.",
          explanation:
            "Terms decrease while the ratio is below \\( 1 \\), i.e. while \\( n + 1 < x \\), and increase once \\( n+1 > x \\). So the magnitudes fall, reach a minimum, and then diverge — the signature of an asymptotic-but-divergent series. The smallest term sits near \\( n \\approx x \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the optimal index at \\( x = 5 \\).",
          workingLatex: "x = 5: \\ \\frac{n+1}{5} = 1 \\iff n+1 = 5 \\iff n = 4, \\quad |T_4| = |T_5|.",
          explanation:
            "At \\( x = 5 \\) the ratio equals exactly \\( 1 \\) when \\( n+1 = 5 \\), so \\( |T_4| \\) and \\( |T_5| \\) are equal and are the two smallest terms. Optimal truncation keeps the series up to about \\( n \\approx 5 \\).",
        },
        {
          stepNumber: 5,
          description: "Estimate the smallest term by Stirling.",
          workingLatex: "\\frac{n!}{x^{n+1}}\\Big|_{n\\approx x} \\approx \\frac{\\sqrt{2\\pi x}\\,x^{x}e^{-x}}{x^{x+1}} = \\sqrt{\\frac{2\\pi}{x}}\\;e^{-x}.",
          explanation:
            "Stirling's formula \\( n! \\approx \\sqrt{2\\pi n}\\,n^n e^{-n} \\) at \\( n \\approx x \\) gives \\( n! \\approx \\sqrt{2\\pi x}\\,x^x e^{-x} \\). Dividing by \\( x^{n+1} = x^{x+1} \\) cancels the \\( x^x \\) and leaves \\( \\sqrt{2\\pi/x}\\,e^{-x} \\).",
        },
        {
          stepNumber: 6,
          description: "State the optimal-truncation error.",
          workingLatex: "|T_n|_{\\min} \\approx e^{-x}\\cdot \\sqrt{\\frac{2\\pi}{x}}\\,e^{-x} = \\sqrt{\\frac{2\\pi}{x}}\\;e^{-2x} = O\\!\\bigl( e^{-2x} \\bigr).",
          explanation:
            "Multiplying the bracket's smallest term by the prefactor \\( e^{-x} \\) gives a second exponential factor, so the smallest term — and hence the irreducible optimal-truncation error — is \\( O(e^{-2x}) \\). At \\( x = 5 \\) this is \\( O(e^{-10}) \\approx 4.5\\times 10^{-5} \\): the exponentially small ambiguity beyond which the divergent series cannot resolve the function.",
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
          description: "Truncate both expansions to order \\( N \\).",
          workingLatex: "f = \\sum_{k=0}^{N} \\frac{a_k}{z^k} + o(z^{-N}), \\qquad g = \\sum_{k=0}^{N} \\frac{b_k}{z^k} + o(z^{-N}).",
          explanation:
            "Each function equals its partial sum plus a remainder smaller than the last retained gauge \\( z^{-N} \\). Fixing a finite order \\( N \\) lets us multiply honestly and control every leftover piece — the right way to handle products of (possibly divergent) asymptotic series.",
        },
        {
          stepNumber: 2,
          description: "Multiply the two partial sums.",
          workingLatex: "\\left(\\sum_{i=0}^{N}\\frac{a_i}{z^i}\\right)\\!\\left(\\sum_{j=0}^{N}\\frac{b_j}{z^j}\\right) = \\sum_{i,j} \\frac{a_i b_j}{z^{\\,i+j}}.",
          explanation:
            "Expanding the product gives a double sum over all pairs \\( (i,j) \\). Each contributes a term of order \\( z^{-(i+j)} \\); we will group these by their total degree.",
        },
        {
          stepNumber: 3,
          description: "Collect terms of equal degree.",
          workingLatex: "\\sum_{i,j} \\frac{a_i b_j}{z^{\\,i+j}} = \\sum_{n=0}^{N} \\frac{1}{z^{n}} \\underbrace{\\sum_{k=0}^{n} a_{n-k}\\, b_k}_{=\\,c_n} + (\\text{terms with } i+j > N).",
          explanation:
            "Setting \\( n = i+j \\) and \\( k = j \\), the pairs summing to degree \\( n \\) give the Cauchy-product coefficient \\( c_n = \\sum_{k=0}^n a_{n-k} b_k \\). The pairs with \\( i+j > N \\) are higher order and get absorbed into the remainder below.",
        },
        {
          stepNumber: 4,
          description: "Bound the remainder \\( R_N \\).",
          workingLatex: "R_N = \\underbrace{O(z^{-N-1})}_{i+j>N} + \\underbrace{(\\text{bounded})\\cdot o(z^{-N})}_{\\text{cross terms}} = o(z^{-N}).",
          explanation:
            "Two kinds of leftovers arise: products of retained terms with total degree exceeding \\( N \\), which are \\( O(z^{-N-1}) \\); and cross terms pairing a bounded factor (each partial sum is bounded near \\( \\infty \\)) with one of the \\( o(z^{-N}) \\) remainders. Both are \\( o(z^{-N}) \\), so \\( fg \\) really does equal \\( \\sum_{n\\le N} c_n z^{-n} + o(z^{-N}) \\) — the definition of having that expansion.",
        },
        {
          stepNumber: 5,
          description: "Invoke uniqueness of coefficients.",
          workingLatex: "fg \\sim \\sum_{n} c_n z^{-n}, \\qquad c_n = \\sum_{k=0}^n a_{n-k} b_k \\ \\text{fixed by } fg.",
          explanation:
            "Because \\( fg \\) genuinely has an asymptotic expansion, the uniqueness theorem says its coefficients are pinned down by \\( fg \\) through the extraction limits. Our construction identifies those coefficients as the Cauchy convolution of \\( \\{a_n\\} \\) and \\( \\{b_n\\} \\); uniqueness guarantees no other answer is possible.",
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
          description: "Note the oscillation and the need for a bound.",
          workingLatex: "h(x) = e^{-1/x}\\sin(1/x), \\qquad \\sin(1/x) \\text{ oscillates as } x \\to 0^{+}.",
          explanation:
            "We cannot just substitute and take a limit, because \\( \\sin(1/x) \\) oscillates ever faster as \\( x \\to 0^+ \\) and has no limit. The way around this is to bound \\( |h| \\) above by something with no oscillation, then squeeze.",
        },
        {
          stepNumber: 2,
          description: "Bound \\( h \\) by an exponentially small envelope.",
          workingLatex: "|h(x)| = e^{-1/x}\\,|\\sin(1/x)| \\le e^{-1/x},",
          explanation:
            "Since \\( |\\sin(\\cdot)| \\le 1 \\), the oscillating factor can only ever shrink the magnitude. So \\( |h| \\) is dominated by the smooth, monotone envelope \\( e^{-1/x} \\), which we already understand.",
        },
        {
          stepNumber: 3,
          description: "Divide by \\( x^n \\) and substitute \\( u = 1/x \\).",
          workingLatex: "0 \\le \\frac{|h(x)|}{x^{n}} \\le \\frac{e^{-1/x}}{x^{n}} = u^{n} e^{-u}, \\qquad u = \\frac{1}{x} \\to +\\infty.",
          explanation:
            "Dividing the envelope bound by the positive quantity \\( x^n \\) preserves the inequality, and \\( u = 1/x \\) turns the right side into the familiar \\( u^n e^{-u} \\). The left side is non-negative, framing the squeeze.",
        },
        {
          stepNumber: 4,
          description: "Squeeze to get \\( h = o(x^n) \\).",
          workingLatex: "u^{n} e^{-u} \\to 0 \\implies \\frac{|h(x)|}{x^{n}} \\to 0 \\implies \\frac{h(x)}{x^{n}} \\to 0 \\quad \\forall n.",
          explanation:
            "The upper bound vanishes for every fixed \\( n \\), and the lower bound is \\( 0 \\), so the squeeze theorem forces the ratio to \\( 0 \\). The oscillation is irrelevant because it was bounded away inside an envelope that decays. Hence \\( h = o(x^n) \\) for all \\( n \\).",
        },
        {
          stepNumber: 5,
          description: "Read off the series and the requested limit.",
          workingLatex: "h(x) \\sim 0, \\qquad \\lim_{x \\to 0^{+}} \\frac{h(x)}{x^{10}} = 0 \\ (\\text{case } n = 10).",
          explanation:
            "Every coefficient vanishes, so the asymptotic power series of \\( h \\) is identically zero; setting \\( n = 10 \\) in the squeeze gives the specific limit asked for. So \\( h \\) is a genuinely oscillating function that is nonetheless beyond all orders, with the zero series — oscillation alone does not stop a function being flat.",
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
          description: "Split \\( \\cosh z \\) into its two exponentials.",
          workingLatex: "\\cosh z = \\frac{e^{z} + e^{-z}}{2} = \\tfrac{1}{2} e^{z} + \\tfrac{1}{2} e^{-z}.",
          explanation:
            "Start from the exact definition: \\( \\cosh \\) is the sum of two exponentials with opposite-sign exponents. One will dominate and one will be recessive in the given sector; the whole question is about the size of the recessive piece.",
        },
        {
          stepNumber: 2,
          description: "Form the ratio of recessive to dominant.",
          workingLatex: "\\frac{ \\tfrac12 e^{-z} }{ \\tfrac12 e^{z} } = e^{-z - z} = e^{-2z}.",
          explanation:
            "To compare the two terms we take their ratio; the factors of \\( \\tfrac12 \\) cancel and the exponents subtract to \\( -2z \\). This single quantity \\( e^{-2z} \\) carries all the information about their relative magnitude.",
        },
        {
          stepNumber: 3,
          description: "Translate the sector condition into \\( \\operatorname{Re} z \\).",
          workingLatex: "|\\arg z| < \\frac{\\pi}{2} \\implies \\operatorname{Re} z > 0.",
          explanation:
            "Writing \\( z = |z|e^{i\\arg z} \\), the condition \\( |\\arg z| < \\pi/2 \\) is exactly the right half-plane, where the real part of \\( z \\) is positive. This is what makes \\( e^z \\) the dominant exponential there.",
        },
        {
          stepNumber: 4,
          description: "Show the ratio vanishes in the sector.",
          workingLatex: "|e^{-2z}| = e^{-2\\operatorname{Re} z} \\to 0 \\quad \\text{as } |z| \\to \\infty \\ (\\operatorname{Re} z > 0).",
          explanation:
            "The modulus of \\( e^{-2z} \\) depends only on the real part of the exponent. Since \\( \\operatorname{Re} z > 0 \\) and grows with \\( |z| \\), \\( e^{-2\\operatorname{Re} z} \\to 0 \\): the recessive term \\( \\tfrac12 e^{-z} \\) is exponentially small compared with the dominant \\( \\tfrac12 e^{z} \\).",
        },
        {
          stepNumber: 5,
          description: "State the dominant behaviour.",
          workingLatex: "\\cosh z \\sim \\tfrac{1}{2} e^{z} \\quad ( |\\arg z| < \\pi/2 ).",
          explanation:
            "Relative to the dominant scale \\( e^z \\), the recessive term contributes nothing at any algebraic order \\( z^{-N} \\) — it is beyond all orders of the \\( e^z \\) expansion. So a large-\\( z \\) expansion in that sector reports only \\( \\tfrac12 e^z \\) (times its own power-series corrections, here none).",
        },
        {
          stepNumber: 6,
          description: "Connect to non-uniqueness and Stokes lines.",
          workingLatex: "\\tfrac12 e^{-z} = o\\bigl( z^{-N} e^{z} \\bigr) \\ \\forall N \\ \\text{in the sector},",
          explanation:
            "Exactly as \\( e^{-1/x} \\) is invisible to a power series at \\( x = 0 \\), here \\( \\tfrac12 e^{-z} \\) is invisible to the dominant \\( e^z \\) expansion. It is not gone, though: across a Stokes line (here \\( \\arg z = \\pm\\pi/2 \\)) the two exponentials swap roles and the once-recessive term becomes dominant. This is the geometric face of the same beyond-all-orders ambiguity.",
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
          workingLatex: "e^{-1/x} \\sim 0, \\qquad e^{-2/x} \\sim 0 \\quad (x \\to 0^{+}).",
          explanation:
            "Both \\( e^{-1/x} \\) and \\( e^{-2/x} = e^{-2/x} \\) decay faster than every power of \\( x \\) (the second even faster than the first, as a previous question showed). So each one contributes zero to every coefficient in the power gauge.",
        },
        {
          stepNumber: 2,
          description: "Add to the base term by term.",
          workingLatex: "B \\sim \\sum a_n x^n \\implies B,\\ B+e^{-1/x},\\ B+e^{-1/x}+e^{-2/x} \\sim \\sum a_n x^n.",
          explanation:
            "Adding zero-series terms cannot change any coefficient, so all three functions inherit \\( B \\)'s series exactly. Yet they are pairwise distinct for \\( x > 0 \\), since the added bumps are strictly positive. Three different functions, one series.",
        },
        {
          stepNumber: 3,
          description: "Split the requested ratio.",
          workingLatex: "\\frac{e^{-1/x} + e^{-2/x}}{x^{N}} = \\frac{e^{-1/x}}{x^{N}} + \\frac{e^{-2/x}}{x^{N}}.",
          explanation:
            "Linearity of the limit lets us treat the two bumps separately. Each is a beyond-all-orders term divided by a power, the kind of ratio we have evaluated repeatedly.",
        },
        {
          stepNumber: 4,
          description: "Substitute \\( u = 1/x \\) in each piece.",
          workingLatex: "\\frac{e^{-1/x}}{x^{N}} + \\frac{e^{-2/x}}{x^{N}} = u^{N} e^{-u} + u^{N} e^{-2u}, \\qquad u = \\frac{1}{x} \\to +\\infty.",
          explanation:
            "With \\( u = 1/x \\), each \\( x^{-N} \\) becomes \\( u^N \\) and the exponents become \\( -u \\) and \\( -2u \\). Both pieces are now a power of \\( u \\) times a decaying exponential.",
        },
        {
          stepNumber: 5,
          description: "Take the limit of each piece.",
          workingLatex: "\\lim_{u \\to \\infty} u^{N} e^{-u} = 0, \\quad \\lim_{u \\to \\infty} u^{N} e^{-2u} = 0 \\implies \\text{sum} \\to 0.",
          explanation:
            "Both vanish for every fixed \\( N \\) (the \\( e^{-2u} \\) piece even faster), so their sum tends to \\( 0 \\). The three functions form a tower of beyond-all-orders differences, all sharing one and the same power series — non-uniqueness with an explicit hierarchy of subdominant scales.",
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
          workingLatex: "h(x) \\sim 0 \\implies \\frac{d}{dx}\\bigl( 0 + 0\\cdot x + 0\\cdot x^2 + \\cdots \\bigr) = 0.",
          explanation:
            "Term-by-term differentiation acts on each coefficient; differentiating every (zero) term gives zero. So the formal term-by-term derivative of \\( h \\)'s series is again the zero series. This is the candidate answer — but a formal manipulation is only valid if it matches the true derivative, which we now compute.",
        },
        {
          stepNumber: 2,
          description: "Differentiate \\( h \\) genuinely on \\( x>0 \\).",
          workingLatex: "h'(x) = \\frac{d}{dx}e^{-1/x} = e^{-1/x}\\cdot\\frac{1}{x^{2}} = \\frac{e^{-1/x}}{x^{2}}.",
          explanation:
            "By the chain rule (inner derivative of \\( -1/x \\) is \\( +1/x^2 \\)), the genuine derivative on \\( x > 0 \\) is \\( e^{-1/x}/x^2 \\). We must find this function's own asymptotic series and compare it with the formal zero series from step 1.",
        },
        {
          stepNumber: 3,
          description: "Form the coefficient-extraction ratio for \\( h' \\).",
          workingLatex: "\\frac{h'(x)}{x^{n}} = \\frac{e^{-1/x}}{x^{n+2}} = u^{n+2} e^{-u}, \\qquad u = \\frac{1}{x}.",
          explanation:
            "Dividing \\( h' \\) by \\( x^n \\) gives \\( e^{-1/x}/x^{n+2} \\); with \\( u = 1/x \\) this is \\( u^{n+2}e^{-u} \\). The extra two powers of \\( u \\) come from the \\( 1/x^2 \\) the differentiation produced.",
        },
        {
          stepNumber: 4,
          description: "Show the true series of \\( h' \\) is also zero.",
          workingLatex: "\\lim_{u\\to\\infty} u^{n+2} e^{-u} = 0 \\ \\forall n \\implies h'(x) \\sim 0.",
          explanation:
            "A power of \\( u \\) cannot beat \\( e^{-u} \\), so every extraction limit is zero and \\( h' \\) is itself beyond all orders, with series \\( 0 \\). This matches the formal term-by-term result of step 1 exactly, so differentiation of the series is valid here.",
        },
        {
          stepNumber: 5,
          description: "Explain why the general case can fail.",
          workingLatex: "H \\sim \\sum \\alpha_n x^n \\ \\not\\Rightarrow\\ H' \\sim \\sum n\\alpha_n x^{n-1} \\quad \\text{(in general).}",
          explanation:
            "The agreement here is special because both \\( h \\) and \\( h' \\) happen to be beyond all orders. In general the implication can fail: if \\( H' \\) oscillates wildly (e.g. add a wrinkle like \\( x^2\\sin(e^{1/x}) \\), whose derivative does not settle), then \\( H' \\) need not possess an asymptotic series at all. Term-by-term differentiation is only guaranteed when one knows in advance that \\( H' \\) is continuous and itself admits an expansion — differentiation is a stronger operation than the series alone can license.",
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
          description: "Identify the constant term.",
          workingLatex: "\\Gamma\\!\\left( \\tfrac12 \\right) = \\sqrt{\\pi} \\approx 1.7724539.",
          explanation:
            "The given value of the Gamma function at \\( 1/2 \\). It is a fixed number, independent of \\( x \\), so its own asymptotic series is just itself: \\( \\sqrt{\\pi} + 0\\cdot x + \\cdots \\). [Verified numerically: \\( \\Gamma(1/2) = \\sqrt{\\pi} = 1.77245385\\dots \\).]",
        },
        {
          stepNumber: 2,
          description: "Note the exponential term has the zero series.",
          workingLatex: "\\exp(-1/x) = o(x^n)\\ \\forall n \\implies \\exp(-1/x) \\sim 0 \\quad (x \\to 0^{+}).",
          explanation:
            "Being beyond all orders, \\( \\exp(-1/x) \\) contributes zero to every coefficient, so it cannot alter the constant series of step 1. This is the now-familiar flatness property.",
        },
        {
          stepNumber: 3,
          description: "Combine to state the series of \\( f \\).",
          workingLatex: "f(x) = \\sqrt{\\pi} + e^{-1/x} \\sim \\sqrt{\\pi} + 0\\cdot x + 0\\cdot x^{2} + \\cdots = \\sqrt{\\pi}.",
          explanation:
            "Adding the zero series to the constant leaves \\( \\sqrt{\\pi} \\); the entire asymptotic series of \\( f \\) is the single constant term \\( \\sqrt{\\pi} \\), with all higher coefficients zero.",
        },
        {
          stepNumber: 4,
          description: "Take the limit.",
          workingLatex: "\\lim_{x \\to 0^{+}} f(x) = \\sqrt{\\pi} + \\lim_{x\\to 0^+} e^{-1/x} = \\sqrt{\\pi} + 0 = \\sqrt{\\pi}.",
          explanation:
            "The exponentially small term vanishes in the limit, so \\( f \\to \\sqrt{\\pi} \\) — consistent with the leading coefficient being \\( \\sqrt{\\pi} \\). Yet \\( f(x) > \\sqrt{\\pi} \\) for every \\( x > 0 \\): \\( f \\) and the constant function \\( \\sqrt{\\pi} \\) are distinct but share the same series, one more instance of non-uniqueness.",
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
          description: "Write the magnitude of the \\( n \\)-th term.",
          workingLatex: "|T_n| = (n+1)!\\,|x|^{n} \\quad (n = 0, 1, 2, \\dots).",
          explanation:
            "Reading off \\( T_n = (-1)^n(n+1)!\\,x^n \\) and dropping the sign gives the magnitude. The growing factorial \\( (n+1)! \\) against the shrinking power \\( |x|^n \\) is what produces a smallest term and then divergence.",
        },
        {
          stepNumber: 2,
          description: "Form the ratio of successive magnitudes.",
          workingLatex: "\\frac{|T_{n+1}|}{|T_n|} = \\frac{(n+2)!\\,|x|^{n+1}}{(n+1)!\\,|x|^{n}} = (n+2)\\,|x|.",
          explanation:
            "Dividing consecutive magnitudes, the factorial ratio is \\( (n+2)!/(n+1)! = n+2 \\) and the power ratio leaves one factor of \\( |x| \\). The product \\( (n+2)|x| \\) tells us whether terms are still shrinking.",
        },
        {
          stepNumber: 3,
          description: "Locate the smallest term.",
          workingLatex: "(n+2)x \\le 1 \\iff n \\le \\frac{1}{x} - 2; \\quad x = 0.1 \\implies n \\lesssim 8,\\ \\text{min near } n \\approx 1/x = 10.",
          explanation:
            "Terms decrease while \\( (n+2)x < 1 \\), i.e. up to \\( n \\approx 1/x - 2 = 8 \\), then grow. The minimal term sits near \\( n \\approx 1/x = 10 \\); the standard optimal-truncation rule for such factorial series cuts at index \\( N+1 \\approx 1/x \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the optimal-truncation rule at \\( x = 0.1 \\).",
          workingLatex: "N + 1 = \\left[ x^{-1} \\right] = \\left[ \\frac{1}{0.1} \\right] = [10] = 10.",
          explanation:
            "The prescribed cut index is the integer part of \\( 1/x \\). With \\( x = 0.1 \\), \\( 1/x = 10 \\) exactly, so we keep terms up to \\( N+1 = 10 \\), just before the smallest. Truncating here gives the best the divergent series can do.",
        },
        {
          stepNumber: 5,
          description: "State the optimal error order.",
          workingLatex: "\\text{error} = O\\!\\bigl( \\exp(-1/x) \\bigr) = O\\!\\bigl( e^{-10} \\bigr) \\approx 4.5 \\times 10^{-5}.",
          explanation:
            "The least achievable error equals the size of the smallest term, which is exponentially small \\( O(e^{-1/x}) \\) — exactly the magnitude of the beyond-all-orders ambiguity that no resummation of this series can remove. [Check: \\( e^{-10} = 4.54\\times10^{-5} \\).]",
        },
      ],
      finalAnswer: "Truncate at \\( N+1 = 10 \\); optimal error \\( O(e^{-1/x}) = O(e^{-10}) \\approx 4.5\\times10^{-5} \\).",
      canonicalAnswer: "10",
    },
  },
];
