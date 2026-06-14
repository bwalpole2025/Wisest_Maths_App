import { Question } from "@/lib/types";

/**
 * Asymptotic Methods — am2d "Divergent series & resummation"
 * Topic group: Divergent Series & Optimal Truncation
 * Scope: convergent vs asymptotic series; the Euler series
 *   F(x) = \int_0^\infty e^{-t}/(1+xt)\,dt \sim \sum (-1)^n n! x^n;
 *   optimal truncation; the Borel-sum viewpoint.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 1
 * (Q5, Q6, Q9, Q10) with constants/framing varied. This subtopic is only
 * lightly covered by the sheet, so most questions draw on standard course
 * material of this type.
 *
 * Numerical checks (mpmath, dps=40):
 *   - Euler integral F(x)=\int_0^\infty e^{-t}/(1+xt)dt: F(0.1)=0.91563..., F(0.2)=0.85211...
 *   - Optimal truncation of \sum(-1)^n n! x^n occurs near n=1/x; best error there.
 *   - Borel sum of \sum(-1)^n n! is e\,E_1(1)=0.5963473623...
 *   - Borel (PV) sum of \sum n! is e^{-1}\,\mathrm{Ei}(1)=0.6971748832...
 *   - E_1(5)=1.14830e-3; \Gamma(1/2)=\sqrt\pi; geometric continuation 1/(1-2)=-1.
 *   - 30 questions: 6 Foundation, 12 Standard, 12 Challenge.
 */
export const questions: Question[] = [
  // ── Foundation: core technique in isolation ───────────────────────────────
  {
    id: "am2d-001",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Determine the radius of convergence of the power series \\( \\sum_{n=0}^{\\infty} (-1)^n\\,n!\\,x^n \\), and hence classify it as a convergent or a (formally) divergent series for \\( x \\neq 0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["divergent series", "radius of convergence", "ratio test"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the ratio test to the coefficients.",
          workingLatex:
            "\\left| \\frac{a_{n+1} x^{n+1}}{a_n x^n} \\right| = \\frac{(n+1)!}{n!}\\,|x| = (n+1)\\,|x|.",
          explanation:
            "The radius of convergence is governed by the limit of the ratio of successive terms. With \\( a_n = (-1)^n n! \\) the factorials telescope, leaving the single factor \\( (n+1) \\) multiplying \\( |x| \\).",
        },
        {
          stepNumber: 2,
          description: "Take the limit as \\( n\\to\\infty \\).",
          workingLatex:
            "\\lim_{n\\to\\infty} (n+1)\\,|x| = \\infty \\quad \\text{for every } x \\neq 0.",
          explanation:
            "Because \\( n+1 \\) grows without bound, the ratio exceeds \\( 1 \\) for all sufficiently large \\( n \\) no matter how small the fixed \\( |x| \\) is. The series therefore fails the ratio test for every non-zero \\( x \\).",
        },
        {
          stepNumber: 3,
          description: "State the radius and classify the series.",
          workingLatex:
            "R = 0, \\qquad \\text{series diverges for all } x \\neq 0.",
          explanation:
            "A zero radius of convergence means the only point of convergence is \\( x=0 \\). Such a series can still be a useful asymptotic series as \\( x\\to 0 \\) — divergence as a power series and usefulness as an asymptotic expansion are not in conflict.",
        },
      ],
      finalAnswer: "\\( R = 0 \\): the series diverges for every \\( x \\neq 0 \\).",
      canonicalAnswer: "0",
    },
  },
  {
    id: "am2d-002",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The geometric series \\( \\sum_{n=0}^{\\infty} z^n \\) has sum \\( \\dfrac{1}{1-z} \\) for \\( |z|<1 \\). Using the analytic continuation of this closed form, assign a finite value to the divergent series \\( 1 + 2 + 4 + 8 + \\cdots \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["divergent series", "geometric series", "analytic continuation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the ratio.",
          workingLatex: "1 + 2 + 4 + 8 + \\cdots = \\sum_{n=0}^{\\infty} 2^{\\,n}, \\qquad z = 2.",
          explanation:
            "The terms are powers of \\( 2 \\), so the series is the geometric series with common ratio \\( z=2 \\). Since \\( |z|=2>1 \\) the series diverges in the ordinary sense.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the closed form.",
          workingLatex: "\\frac{1}{1-z}\\Bigg|_{z=2} = \\frac{1}{1-2} = \\frac{1}{-1} = -1.",
          explanation:
            "The rational function \\( 1/(1-z) \\) is the unique analytic continuation of the geometric series off its disc of convergence. Evaluating it at \\( z=2 \\) is the standard way to attach a finite value to the divergent sum.",
        },
        {
          stepNumber: 3,
          description: "State the assigned value.",
          workingLatex: "1 + 2 + 4 + 8 + \\cdots \\;\\xrightarrow{\\text{continuation}}\\; -1.",
          explanation:
            "This is a resummation, not an ordinary sum: the partial sums \\( 1,3,7,15,\\dots \\) march to \\( +\\infty \\). The value \\( -1 \\) is the consistent value forced by analytic continuation — the same idea that underlies Borel and Abel summation.",
        },
      ],
      finalAnswer: "\\( -1 \\)",
      canonicalAnswer: "-1",
    },
  },
  {
    id: "am2d-003",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Form the Borel transform \\( B(t) = \\sum_{n=0}^{\\infty} \\dfrac{a_n}{n!}\\,t^n \\) of the formal series \\( \\sum_{n=0}^{\\infty} a_n x^n \\) with \\( a_n = (-1)^n\\,n! \\), and write \\( B(t) \\) in closed form.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Borel summation", "Borel transform", "geometric series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Divide each coefficient by \\( n! \\).",
          workingLatex: "\\frac{a_n}{n!} = \\frac{(-1)^n\\,n!}{n!} = (-1)^n.",
          explanation:
            "The Borel transform tames factorial growth by dividing the \\( n \\)-th coefficient by \\( n! \\). Here the factorial is exactly cancelled, leaving the bounded coefficients \\( (-1)^n \\).",
        },
        {
          stepNumber: 2,
          description: "Sum the resulting geometric series.",
          workingLatex:
            "B(t) = \\sum_{n=0}^{\\infty} (-1)^n\\,t^n = \\sum_{n=0}^{\\infty} (-t)^n = \\frac{1}{1+t}, \\qquad |t|<1.",
          explanation:
            "The transformed series is geometric with ratio \\( -t \\). Crucially it now has a positive radius of convergence (\\( |t|<1 \\)), so \\( B(t) \\) defines a genuine analytic function that continues to all \\( t\\ge 0 \\).",
        },
        {
          stepNumber: 3,
          description: "State the Borel transform.",
          workingLatex: "B(t) = \\frac{1}{1+t}.",
          explanation:
            "This convergent, explicitly summable transform is the object the Borel sum will integrate against \\( e^{-t/x} \\). The factorial divergence of the original series has been converted into a well-behaved function.",
        },
      ],
      finalAnswer: "\\( B(t) = \\dfrac{1}{1+t} \\)",
      canonicalAnswer: "1/(1+t)",
    },
  },
  {
    id: "am2d-004",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "For the alternating factorial series \\( \\sum_{n=0}^{\\infty} (-1)^n\\,n!\\,x^n \\) with small \\( x>0 \\), the magnitude of the \\( n \\)-th term is \\( u_n = n!\\,x^n \\). Find the integer \\( n \\) at which \\( u_n \\) is smallest, in terms of \\( x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["optimal truncation", "least term", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the ratio of consecutive terms.",
          workingLatex: "\\frac{u_{n+1}}{u_n} = \\frac{(n+1)!\\,x^{n+1}}{n!\\,x^{n}} = (n+1)\\,x.",
          explanation:
            "The terms of an asymptotic series first decrease and then increase. The turning point is located by asking when the term-to-term ratio passes through \\( 1 \\).",
        },
        {
          stepNumber: 2,
          description: "Find where the ratio crosses one.",
          workingLatex: "(n+1)\\,x = 1 \\;\\Longrightarrow\\; n = \\frac{1}{x} - 1.",
          explanation:
            "While \\( (n+1)x<1 \\) the terms still shrink; once \\( (n+1)x>1 \\) they grow. The smallest term therefore sits where the ratio is nearest to one, i.e. at \\( n \\approx 1/x \\).",
        },
        {
          stepNumber: 3,
          description: "State the optimal index.",
          workingLatex: "n_{\\min} \\approx \\frac{1}{x}.",
          explanation:
            "To leading order in small \\( x \\) the least term is at \\( n \\approx 1/x \\). Truncating the series just before this term (optimal truncation) gives the most accurate estimate the divergent series can deliver.",
        },
      ],
      finalAnswer: "\\( n_{\\min} \\approx \\dfrac{1}{x} \\)",
      canonicalAnswer: "1/x",
    },
  },
  {
    id: "am2d-005",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "By expanding the integrand as a geometric series and integrating term by term, find the formal (asymptotic) series of \\( F(x) = \\displaystyle\\int_0^{\\infty} \\frac{e^{-t}}{1+xt}\\,dt \\) as \\( x \\to 0^{+} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Euler series", "asymptotic series", "Watson-type integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the denominator geometrically.",
          workingLatex: "\\frac{1}{1+xt} = \\sum_{n=0}^{\\infty} (-1)^n (xt)^n.",
          explanation:
            "Treating \\( xt \\) as small, the integrand is expanded as a geometric series. This is formal because near the upper limit \\( t\\to\\infty \\) the quantity \\( xt \\) is not small — it is the source of the eventual divergence.",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term using the Gamma integral.",
          workingLatex:
            "\\int_0^{\\infty} e^{-t}\\,t^n\\,dt = n!, \\qquad F(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n x^n \\int_0^\\infty e^{-t} t^n\\,dt.",
          explanation:
            "Each monomial \\( t^n \\) is integrated against \\( e^{-t} \\), giving \\( \\Gamma(n+1)=n! \\). Interchanging the sum and integral is exactly the (illegal) step that produces a divergent series from a perfectly finite integral.",
        },
        {
          stepNumber: 3,
          description: "Assemble the Euler series.",
          workingLatex: "F(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n\\,n!\\,x^n.",
          explanation:
            "This is Euler's series. The integral \\( F(x) \\) is finite and smooth, yet its asymptotic expansion has zero radius of convergence — the canonical example of an asymptotic-but-divergent series.",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n\\,n!\\,x^n \\)",
      canonicalAnswer: "sum_{n>=0} (-1)^n n! x^n",
    },
  },
  {
    id: "am2d-006",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 06",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Define the Borel sum of a formal series \\( \\sum a_n x^n \\) (with Borel transform \\( B(t) \\)) as \\( S(x) = \\dfrac{1}{x}\\displaystyle\\int_0^{\\infty} e^{-t/x}\\,B(t)\\,dt \\). Given that the Borel transform of \\( \\sum (-1)^n n! x^n \\) is \\( B(t)=1/(1+t) \\), write \\( S(x) \\) as a single integral and evaluate \\( S(1) \\) in closed form.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Borel summation", "exponential integral", "Euler series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Insert the transform into the Borel integral.",
          workingLatex: "S(x) = \\frac{1}{x}\\int_0^{\\infty} \\frac{e^{-t/x}}{1+t}\\,dt.",
          explanation:
            "The Borel sum convolves the convergent transform \\( B(t)=1/(1+t) \\) with the decaying kernel \\( e^{-t/x} \\). For small \\( x>0 \\) the kernel concentrates near \\( t=0 \\), reproducing the asymptotic series.",
        },
        {
          stepNumber: 2,
          description: "Set \\( x=1 \\).",
          workingLatex: "S(1) = \\int_0^{\\infty} \\frac{e^{-t}}{1+t}\\,dt.",
          explanation:
            "At \\( x=1 \\) the prefactor and kernel simplify, leaving a standard exponential-integral integral.",
        },
        {
          stepNumber: 3,
          description: "Recognise the exponential integral.",
          workingLatex:
            "\\int_0^{\\infty} \\frac{e^{-t}}{1+t}\\,dt = e\\,E_1(1), \\qquad E_1(1)=\\int_1^\\infty \\frac{e^{-u}}{u}\\,du.",
          explanation:
            "Substituting \\( u=1+t \\) turns the integral into \\( e\\int_1^\\infty e^{-u}/u\\,du = e\\,E_1(1) \\). Numerically \\( S(1)=0.5963473623\\ldots \\), a finite value assigned to the divergent series \\( \\sum (-1)^n n! \\).",
        },
      ],
      finalAnswer: "\\( S(1) = e\\,E_1(1) = 0.5963473623\\ldots \\)",
      canonicalAnswer: "e*E_1(1)",
    },
  },

  // ── Standard: typical sheet-level ────────────────────────────────────────
  {
    id: "am2d-007",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that the Stieltjes-type integral \\( F(x) = \\displaystyle\\int_0^{\\infty} \\frac{e^{-t}}{1+xt}\\,dt \\) satisfies \\( F(x) = \\sum_{n=0}^{N-1} (-1)^n n!\\,x^n + R_N(x) \\) with a remainder \\( R_N(x) \\) you should write as an integral, and deduce that \\( |R_N(x)| \\le N!\\,x^N \\) for \\( x>0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Euler series", "remainder estimate", "error bound", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split the geometric sum exactly.",
          workingLatex:
            "\\frac{1}{1+xt} = \\sum_{n=0}^{N-1} (-1)^n (xt)^n + \\frac{(-1)^N (xt)^N}{1+xt}.",
          explanation:
            "Rather than expand to infinity, use the finite geometric identity with an exact remainder term. This keeps every manipulation rigorous — there is no illegal interchange of an infinite sum and an integral.",
        },
        {
          stepNumber: 2,
          description: "Integrate the polynomial part.",
          workingLatex:
            "\\int_0^{\\infty} e^{-t}\\sum_{n=0}^{N-1}(-1)^n(xt)^n\\,dt = \\sum_{n=0}^{N-1}(-1)^n x^n\\,n!.",
          explanation:
            "The finite sum may be integrated term by term legitimately, and each \\( \\int_0^\\infty e^{-t}t^n\\,dt=n! \\). This recovers the first \\( N \\) terms of Euler's series.",
        },
        {
          stepNumber: 3,
          description: "Identify the remainder integral.",
          workingLatex:
            "R_N(x) = (-1)^N x^N \\int_0^{\\infty} \\frac{e^{-t}\\,t^N}{1+xt}\\,dt.",
          explanation:
            "Everything not captured by the polynomial part is collected into \\( R_N \\). Because the split was exact, \\( F(x) \\) equals the partial sum plus this honest remainder.",
        },
        {
          stepNumber: 4,
          description: "Bound the remainder.",
          workingLatex:
            "|R_N(x)| = x^N \\int_0^{\\infty} \\frac{e^{-t}\\,t^N}{1+xt}\\,dt \\le x^N \\int_0^{\\infty} e^{-t}\\,t^N\\,dt = N!\\,x^N.",
          explanation:
            "For \\( x,t>0 \\) the denominator satisfies \\( 1+xt\\ge 1 \\), so dropping it only enlarges the integrand. The bound \\( |R_N|\\le N!\\,x^N \\) is exactly the size of the first omitted term — the hallmark of an asymptotic series.",
        },
      ],
      finalAnswer: "\\( R_N(x)=(-1)^N x^N\\!\\int_0^{\\infty}\\frac{e^{-t}t^N}{1+xt}\\,dt,\\quad |R_N(x)|\\le N!\\,x^N \\).",
    },
  },
  {
    id: "am2d-008",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Using optimal truncation of the Euler series \\( F(x)\\sim\\sum (-1)^n n! x^n \\) at \\( x=0.1 \\) (keep all terms up to the one before the smallest), estimate \\( F(0.1) \\) and compare with the exact value \\( F(0.1)=0.915633\\ldots \\). State the optimal truncation index.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimal truncation", "Euler series", "numerical estimate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the least term.",
          workingLatex: "u_n = n!\\,(0.1)^n, \\qquad \\frac{u_{n+1}}{u_n}=(n+1)(0.1)=1 \\;\\Rightarrow\\; n=9.",
          explanation:
            "The term-ratio equals one at \\( n=9 \\), so the terms \\( u_9 \\) and \\( u_{10} \\) are essentially the smallest. Optimal truncation keeps all terms up to (but not including) this least term.",
        },
        {
          stepNumber: 2,
          description: "Keep terms up to \\( n=9 \\).",
          workingLatex:
            "F(0.1) \\approx \\sum_{n=0}^{9} (-1)^n n!\\,(0.1)^n.",
          explanation:
            "Summing one term before the smallest gives the best balance: including more would inject the growing tail, including fewer wastes available accuracy.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial sum.",
          workingLatex:
            "\\sum_{n=0}^{9} (-1)^n n!\\,(0.1)^n = 0.9154563\\ldots.",
          explanation:
            "Adding the alternating, briefly-shrinking terms produces a partial sum close to the true integral. The arithmetic is dominated by the early terms; the last few barely move the total.",
        },
        {
          stepNumber: 4,
          description: "Compare with the exact value.",
          workingLatex:
            "|0.9154563 - 0.9156333| \\approx 1.8\\times 10^{-4}.",
          explanation:
            "The optimally truncated estimate agrees with \\( F(0.1)=0.915633\\ldots \\) to about four significant figures. The residual error is of order the smallest term, \\( \\sim 9!\\,(0.1)^{9}\\approx 3.6\\times10^{-4} \\) — the best a divergent series can do.",
        },
      ],
      finalAnswer: "\\( F(0.1)\\approx 0.91546 \\) (truncate at \\( n=9 \\)); error \\( \\approx 1.8\\times10^{-4} \\).",
      canonicalAnswer: "0.91546",
    },
  },
  {
    id: "am2d-009",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the first three terms of the asymptotic expansion of the exponential integral \\( E_1(x) = \\displaystyle\\int_x^{\\infty} \\frac{e^{-t}}{t}\\,dt \\) as \\( x\\to\\infty \\), using repeated integration by parts, and state the general term.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "integration by parts", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Integrate by parts once.",
          workingLatex:
            "E_1(x) = \\left[ -\\frac{e^{-t}}{t} \\right]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt = \\frac{e^{-x}}{x} - \\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt.",
          explanation:
            "Take \\( u=1/t,\\ dv=e^{-t}dt \\). The boundary term at infinity vanishes and at \\( t=x \\) it produces the leading \\( e^{-x}/x \\). The leftover integral is smaller by one power of \\( t \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts again.",
          workingLatex:
            "\\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt = \\frac{e^{-x}}{x^2} - 2\\int_x^{\\infty}\\frac{e^{-t}}{t^3}\\,dt.",
          explanation:
            "Repeating with \\( u=1/t^2 \\) generates the next term \\( e^{-x}/x^2 \\) and a further-reduced integral. Each pass lowers the power of \\( t \\) by one and pulls out a factorial-type coefficient.",
        },
        {
          stepNumber: 3,
          description: "Assemble three terms.",
          workingLatex:
            "E_1(x) = e^{-x}\\left( \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots \\right).",
          explanation:
            "Substituting the second result into the first and continuing gives an alternating series with growing factorial numerators \\( 0!,1!,2!,\\dots \\) — again divergent for every fixed \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "State the general term.",
          workingLatex:
            "E_1(x) \\sim e^{-x}\\sum_{n=0}^{\\infty} \\frac{(-1)^n\\,n!}{x^{n+1}}.",
          explanation:
            "The pattern of \\( (-1)^n n! \\) over \\( x^{n+1} \\) is the standard asymptotic series for \\( E_1 \\). It is divergent but optimally accurate when truncated near \\( n\\approx x \\). A check at \\( x=5 \\): the four-term sum gives \\( 1.121\\times10^{-3} \\) against \\( E_1(5)=1.148\\times10^{-3} \\).",
        },
      ],
      finalAnswer: "\\( E_1(x)\\sim e^{-x}\\left(\\dfrac{1}{x}-\\dfrac{1}{x^2}+\\dfrac{2}{x^3}-\\cdots\\right)=e^{-x}\\sum_{n\\ge0}\\dfrac{(-1)^n n!}{x^{n+1}} \\).",
    },
  },
  {
    id: "am2d-010",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 10",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The function \\( e(x)=\\exp(-1/x) \\) for \\( x>0 \\) is to be expanded in an asymptotic power series \\( e(x)\\sim \\beta_0 + \\beta_1 x + \\beta_2 x^2 + \\cdots \\) as \\( x\\to 0^{+} \\). Show that every coefficient \\( \\beta_k \\) is zero, and state \\( \\beta_2 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["asymptotic series", "non-uniqueness", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Extract coefficients by the standard limit.",
          workingLatex:
            "\\beta_k = \\lim_{x\\to 0^{+}} \\frac{e(x) - \\sum_{j=0}^{k-1}\\beta_j x^j}{x^k}.",
          explanation:
            "For an asymptotic power series the coefficients are determined one at a time by this limit (Poincaré's definition). We show each limit is zero in turn.",
        },
        {
          stepNumber: 2,
          description: "Compute the leading limit.",
          workingLatex: "\\beta_0 = \\lim_{x\\to 0^{+}} e^{-1/x} = 0.",
          explanation:
            "As \\( x\\to 0^{+} \\), \\( 1/x\\to+\\infty \\), so \\( e^{-1/x}\\to 0 \\) faster than any power. This kills the constant term.",
        },
        {
          stepNumber: 3,
          description: "Show all higher coefficients vanish.",
          workingLatex:
            "\\beta_k = \\lim_{x\\to 0^{+}} \\frac{e^{-1/x}}{x^k} = \\lim_{s\\to\\infty} s^k e^{-s} = 0 \\quad (s=1/x).",
          explanation:
            "Substituting \\( s=1/x \\) turns each limit into \\( s^k e^{-s} \\), which tends to zero for every fixed \\( k \\) because exponential decay beats any polynomial. Hence \\( \\beta_k=0 \\) for all \\( k \\).",
        },
        {
          stepNumber: 4,
          description: "State the coefficient and the moral.",
          workingLatex: "\\beta_2 = 0; \\qquad e(x) \\sim 0 + 0\\cdot x + 0\\cdot x^2 + \\cdots.",
          explanation:
            "The nonzero function \\( e^{-1/x} \\) has the identically-zero asymptotic series. So a function is not determined by its asymptotic coefficients — any \\( e^{-1/x} \\) term is invisible, which is precisely the ambiguity Borel summation resolves.",
        },
      ],
      finalAnswer: "\\( \\beta_2 = 0 \\) (indeed all \\( \\beta_k=0 \\)).",
      canonicalAnswer: "0",
    },
  },
  {
    id: "am2d-011",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Given the formal asymptotic series \\( f(z) \\sim a_0 + \\dfrac{a_1}{z} + \\dfrac{a_2}{z^2} + \\cdots \\) as \\( z\\to\\infty \\) with \\( a_0\\neq 0 \\), find the first three coefficients \\( d_0,d_1,d_2 \\) of the reciprocal expansion \\( \\dfrac{1}{f(z)} \\sim \\dfrac{1}{a_0}\\sum_{n\\ge 0}\\dfrac{d_n}{z^n} \\), where \\( d_0=1 \\) and \\( \\sum_{k=0}^{n} d_{n-k}\\,a_k = 0 \\) for \\( n\\ge 1 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["asymptotic series", "reciprocal series", "recurrence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the defining convolution.",
          workingLatex:
            "\\sum_{k=0}^{n} d_{n-k}\\,a_k = 0 \\quad (n\\ge 1), \\qquad d_0 = 1.",
          explanation:
            "Requiring \\( f(z)\\cdot\\frac{1}{f(z)} \\) to expand as \\( 1 \\) forces the coefficient of each \\( z^{-n} \\) to vanish, which is exactly this Cauchy-product recurrence. We unwind it for \\( n=1,2 \\).",
        },
        {
          stepNumber: 2,
          description: "Solve the \\( n=1 \\) equation.",
          workingLatex: "d_1 a_0 + d_0 a_1 = 0 \\;\\Rightarrow\\; d_1 = -\\frac{a_1}{a_0}.",
          explanation:
            "With \\( d_0=1 \\) known, the \\( n=1 \\) relation is linear in \\( d_1 \\). It says the first correction to the reciprocal cancels the first correction of \\( f \\).",
        },
        {
          stepNumber: 3,
          description: "Solve the \\( n=2 \\) equation.",
          workingLatex:
            "d_2 a_0 + d_1 a_1 + d_0 a_2 = 0 \\;\\Rightarrow\\; d_2 = \\frac{a_1^2}{a_0^2} - \\frac{a_2}{a_0}.",
          explanation:
            "Substituting \\( d_1=-a_1/a_0 \\) and \\( d_0=1 \\) and solving for \\( d_2 \\) gives the second coefficient. The recurrence is triangular, so each \\( d_n \\) is obtained from earlier ones.",
        },
        {
          stepNumber: 4,
          description: "State the three coefficients.",
          workingLatex:
            "d_0 = 1, \\qquad d_1 = -\\frac{a_1}{a_0}, \\qquad d_2 = \\frac{a_1^2 - a_0 a_2}{a_0^2}.",
          explanation:
            "These reproduce the familiar expansion \\( 1/f = \\frac{1}{a_0}\\big(1 - \\frac{a_1}{a_0 z} + \\frac{a_1^2-a_0a_2}{a_0^2 z^2}+\\cdots\\big) \\), valid as an asymptotic series even when \\( f \\)'s series diverges.",
        },
      ],
      finalAnswer:
        "\\( d_0=1,\\ d_1=-\\dfrac{a_1}{a_0},\\ d_2=\\dfrac{a_1^2-a_0 a_2}{a_0^2} \\).",
    },
  },
  {
    id: "am2d-012",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the asymptotic series of \\( G(x) = \\displaystyle\\int_0^{\\infty} \\frac{e^{-t}}{(1+xt)^2}\\,dt \\) as \\( x\\to 0^{+} \\), and explain its relation to the Euler series for \\( F(x)=\\int_0^\\infty e^{-t}/(1+xt)\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Euler series", "differentiation of asymptotic series", "Stieltjes integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the squared denominator.",
          workingLatex:
            "\\frac{1}{(1+xt)^2} = \\sum_{n=0}^{\\infty} (-1)^n (n+1)\\,(xt)^n.",
          explanation:
            "Differentiating the geometric series, or using the binomial series for exponent \\( -2 \\), gives the coefficient \\( (n+1) \\) on \\( (xt)^n \\). This is the formal expansion of the integrand.",
        },
        {
          stepNumber: 2,
          description: "Integrate term by term.",
          workingLatex:
            "G(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n (n+1)\\,x^n \\int_0^\\infty e^{-t} t^n\\,dt = \\sum_{n=0}^{\\infty} (-1)^n (n+1)!\\,x^n.",
          explanation:
            "Each \\( \\int_0^\\infty e^{-t}t^n\\,dt=n! \\), and \\( (n+1)\\cdot n! = (n+1)! \\). The series grows even faster than Euler's, so it is again divergent for all \\( x\\neq 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Relate \\( G \\) to a derivative of \\( F \\).",
          workingLatex:
            "G(x) = -\\frac{d}{dx}\\!\\left[ \\frac{1}{x}\\big(1-F(x)\\big)\\right]? \\quad\\text{instead note}\\quad \\frac{\\partial}{\\partial x}\\frac{1}{1+xt} = \\frac{-t}{(1+xt)^2}.",
          explanation:
            "Differentiating \\( F \\) under the integral sign brings down \\( -t/(1+xt)^2 \\); \\( G \\) is the closely-related integral without that extra \\( t \\). Term by term, \\( G \\)'s coefficients \\( (n+1)! \\) are exactly the derivative-shifted Euler coefficients.",
        },
        {
          stepNumber: 4,
          description: "State the series and the connection.",
          workingLatex:
            "G(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n (n+1)!\\,x^n.",
          explanation:
            "Comparing with \\( F\\sim\\sum(-1)^n n! x^n \\), the coefficient of \\( x^n \\) in \\( G \\) is \\( (n+1)\\times \\) that of \\( F \\): \\( G \\) is the term-by-term derivative \\( \\frac{d}{dx}[xF(x)] \\) of the Euler series, illustrating that asymptotic series may be differentiated term by term here.",
        },
      ],
      finalAnswer: "\\( G(x)\\sim\\sum_{n\\ge0}(-1)^n (n+1)!\\,x^n \\).",
      canonicalAnswer: "sum_{n>=0} (-1)^n (n+1)! x^n",
    },
  },
  {
    id: "am2d-013",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Using Watson's lemma, find the leading two terms of the asymptotic expansion as \\( x\\to\\infty \\) of \\( I(x) = \\displaystyle\\int_0^{\\infty} \\frac{e^{-xt}}{1+t}\\,dt \\), and state the full series.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Laplace integral", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude near \\( t=0 \\).",
          workingLatex: "\\frac{1}{1+t} = \\sum_{n=0}^{\\infty} (-1)^n t^n, \\qquad |t|<1.",
          explanation:
            "Watson's lemma says the large-\\( x \\) behaviour of \\( \\int_0^\\infty e^{-xt} g(t)\\,dt \\) is controlled by the Taylor data of \\( g \\) at \\( t=0 \\). Here \\( g(t)=1/(1+t) \\) expands geometrically.",
        },
        {
          stepNumber: 2,
          description: "Apply the lemma term by term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-xt}\\,t^n\\,dt = \\frac{n!}{x^{n+1}}.",
          explanation:
            "Watson's lemma integrates each Taylor monomial against the Laplace kernel, giving \\( \\Gamma(n+1)/x^{n+1} \\). The result is asymptotic even though the geometric expansion of \\( g \\) is only valid for \\( |t|<1 \\).",
        },
        {
          stepNumber: 3,
          description: "Read off the leading terms.",
          workingLatex:
            "I(x) \\sim \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots.",
          explanation:
            "The first two terms are \\( 1/x \\) (from \\( n=0 \\)) and \\( -1/x^2 \\) (from \\( n=1 \\)). The factorial coefficients again produce a divergent series.",
        },
        {
          stepNumber: 4,
          description: "State the full series.",
          workingLatex:
            "I(x) \\sim \\sum_{n=0}^{\\infty} \\frac{(-1)^n\\,n!}{x^{n+1}}.",
          explanation:
            "Note \\( I(x)=e^{x}E_1(x) \\), so this is the Euler/exponential-integral series once more — the divergent series of the resummation lectures, here arrived at via Watson's lemma.",
        },
      ],
      finalAnswer: "\\( I(x)\\sim \\dfrac{1}{x}-\\dfrac{1}{x^2}+\\dfrac{2}{x^3}-\\cdots=\\sum_{n\\ge0}\\dfrac{(-1)^n n!}{x^{n+1}} \\).",
    },
  },
  {
    id: "am2d-014",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that if \\( f \\) admits an asymptotic power series \\( f(x)\\sim\\sum_{n\\ge0} a_n x^n \\) as \\( x\\to 0^{+} \\) then the coefficients \\( a_n \\) are uniquely determined by \\( f \\). Give the formula for \\( a_2 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["asymptotic series", "uniqueness of coefficients", "Poincare"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take the limit for the constant term.",
          workingLatex: "a_0 = \\lim_{x\\to 0^{+}} f(x).",
          explanation:
            "By definition of an asymptotic expansion, \\( f(x)-a_0=O(x)\\to 0 \\), so the constant term is fixed as the limiting value. There is no freedom in \\( a_0 \\).",
        },
        {
          stepNumber: 2,
          description: "Peel off and rescale for \\( a_1 \\).",
          workingLatex:
            "a_1 = \\lim_{x\\to 0^{+}} \\frac{f(x)-a_0}{x}.",
          explanation:
            "Subtracting the known \\( a_0 \\) and dividing by \\( x \\) isolates the next coefficient, because the remainder after the \\( a_1 x \\) term is \\( O(x^2) \\) and vanishes under the limit.",
        },
        {
          stepNumber: 3,
          description: "Generalise the extraction.",
          workingLatex:
            "a_n = \\lim_{x\\to 0^{+}} \\frac{f(x) - \\sum_{j=0}^{n-1} a_j x^j}{x^n}.",
          explanation:
            "Each coefficient is a definite limit built from the previous ones. Since limits are unique, the entire sequence \\( \\{a_n\\} \\) is uniquely determined by \\( f \\) — independent of any divergence of the series.",
        },
        {
          stepNumber: 4,
          description: "Specialise to \\( a_2 \\).",
          workingLatex:
            "a_2 = \\lim_{x\\to 0^{+}} \\frac{f(x) - a_0 - a_1 x}{x^2}.",
          explanation:
            "Uniqueness does not mean \\( f \\) is determined by the \\( a_n \\): two functions differing by \\( e^{-1/x} \\) share every coefficient. That asymmetry is what motivates Borel resummation.",
        },
      ],
      finalAnswer: "\\( a_2=\\displaystyle\\lim_{x\\to0^{+}}\\frac{f(x)-a_0-a_1 x}{x^2} \\); coefficients are unique.",
    },
  },
  {
    id: "am2d-015",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "If \\( f(z)\\sim\\sum_{n\\ge0} a_n z^{-n} \\) and \\( g(z)\\sim\\sum_{n\\ge0} b_n z^{-n} \\) as \\( z\\to\\infty \\), show that the product \\( f(z)g(z) \\) has asymptotic series \\( \\sum_{n\\ge0} c_n z^{-n} \\), and give \\( c_n \\) and \\( c_2 \\) explicitly.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["asymptotic series", "Cauchy product", "multiplication"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply finite truncations.",
          workingLatex:
            "f(z)g(z) = \\left(\\sum_{j=0}^{N} \\frac{a_j}{z^j} + o(z^{-N})\\right)\\left(\\sum_{k=0}^{N} \\frac{b_k}{z^k} + o(z^{-N})\\right).",
          explanation:
            "Write each factor as a partial sum plus an asymptotically small remainder. The products of remainders and partial sums are themselves \\( o(z^{-N}) \\), so they do not affect coefficients up to order \\( N \\).",
        },
        {
          stepNumber: 2,
          description: "Collect like powers (Cauchy product).",
          workingLatex:
            "\\frac{a_j}{z^j}\\cdot\\frac{b_k}{z^k} = \\frac{a_j b_k}{z^{j+k}}, \\qquad \\text{group by } n=j+k.",
          explanation:
            "Powers of \\( 1/z \\) add when multiplied, so the coefficient of \\( z^{-n} \\) is the sum of \\( a_j b_k \\) over all \\( j+k=n \\). This is the discrete convolution of the two coefficient sequences.",
        },
        {
          stepNumber: 3,
          description: "State the general coefficient.",
          workingLatex:
            "c_n = \\sum_{k=0}^{n} a_{n-k}\\,b_k.",
          explanation:
            "Because the error terms are uniformly subdominant, this Cauchy-product formula is rigorous as an asymptotic statement — the product series is again an asymptotic expansion of \\( fg \\).",
        },
        {
          stepNumber: 4,
          description: "Write \\( c_2 \\).",
          workingLatex:
            "c_2 = a_0 b_2 + a_1 b_1 + a_2 b_0.",
          explanation:
            "Setting \\( n=2 \\) in the convolution gives the three cross terms. The same multiplication rule holds whether the underlying series converge or merely diverge asymptotically.",
        },
      ],
      finalAnswer: "\\( c_n=\\sum_{k=0}^{n}a_{n-k}b_k \\); in particular \\( c_2=a_0 b_2+a_1 b_1+a_2 b_0 \\).",
    },
  },
  {
    id: "am2d-016",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Determine whether \\( \\phi_n(x) = 1 - \\cosh(x^n) \\), for \\( n\\in\\{1,2,3,\\dots\\} \\), forms an asymptotic sequence as \\( x\\to 0 \\); i.e. check whether \\( \\phi_{n+1}(x) = o(\\phi_n(x)) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["asymptotic sequence", "order symbols", "Taylor expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand \\( \\cosh \\) near zero.",
          workingLatex:
            "\\cosh(u) = 1 + \\frac{u^2}{2} + \\frac{u^4}{24} + \\cdots, \\qquad u=x^n.",
          explanation:
            "For small \\( x \\), \\( u=x^n \\) is small, so the Taylor series of \\( \\cosh \\) applies. We need the leading behaviour of \\( \\phi_n \\) to compare consecutive members.",
        },
        {
          stepNumber: 2,
          description: "Find the leading order of \\( \\phi_n \\).",
          workingLatex:
            "\\phi_n(x) = 1 - \\cosh(x^n) = -\\frac{x^{2n}}{2} - \\frac{x^{4n}}{24} - \\cdots \\sim -\\frac{1}{2}\\,x^{2n}.",
          explanation:
            "The constant cancels and the leading term is \\( -\\tfrac12 x^{2n} \\). So \\( \\phi_n \\) is asymptotically a constant multiple of \\( x^{2n} \\) as \\( x\\to 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Form the ratio of consecutive members.",
          workingLatex:
            "\\frac{\\phi_{n+1}(x)}{\\phi_n(x)} \\sim \\frac{-\\tfrac12 x^{2n+2}}{-\\tfrac12 x^{2n}} = x^{2} \\to 0.",
          explanation:
            "The leading constants cancel and the surviving power is \\( x^{2}\\to 0 \\). Each member is genuinely smaller than the previous one near the origin.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex:
            "\\phi_{n+1}(x) = o\\big(\\phi_n(x)\\big) \\text{ as } x\\to 0 \\;\\Rightarrow\\; \\{\\phi_n\\} \\text{ is an asymptotic sequence}.",
          explanation:
            "Since the defining condition \\( \\phi_{n+1}=o(\\phi_n) \\) holds for every \\( n \\), the family is a valid asymptotic sequence (equivalent in scale to \\( \\{x^{2n}\\} \\)).",
        },
      ],
      finalAnswer: "Yes: \\( \\phi_n\\sim-\\tfrac12 x^{2n} \\), so \\( \\phi_{n+1}/\\phi_n\\sim x^2\\to0 \\) — it is an asymptotic sequence.",
    },
  },
  {
    id: "am2d-017",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 17",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Use Abel summation (the radial limit of the analytically-continued power series) to assign a value to Grandi's series \\( 1 - 1 + 1 - 1 + \\cdots \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Abel summation", "Grandi series", "divergent series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Introduce a convergence factor.",
          workingLatex:
            "S(z) = \\sum_{n=0}^{\\infty} (-1)^n z^n = \\frac{1}{1+z}, \\qquad |z|<1.",
          explanation:
            "Grandi's series is the boundary case \\( z=1 \\) of the geometric series with ratio \\( -z \\). For \\( |z|<1 \\) the series converges to \\( 1/(1+z) \\); Abel summation takes the limit \\( z\\to 1^{-} \\).",
        },
        {
          stepNumber: 2,
          description: "Take the radial limit.",
          workingLatex:
            "\\lim_{z\\to 1^{-}} \\frac{1}{1+z} = \\frac{1}{2}.",
          explanation:
            "The closed form \\( 1/(1+z) \\) is continuous at \\( z=1 \\), so the Abel limit exists and equals \\( 1/2 \\). The ordinary partial sums oscillate between \\( 1 \\) and \\( 0 \\) and have no limit.",
        },
        {
          stepNumber: 3,
          description: "State the Abel sum.",
          workingLatex:
            "1 - 1 + 1 - 1 + \\cdots \\;\\xrightarrow{\\text{Abel}}\\; \\frac{1}{2}.",
          explanation:
            "Abel summation is regular (it agrees with ordinary convergence when that holds) and assigns \\( 1/2 \\) — the average of the two oscillating partial-sum values, consistent with Cesàro and Borel summation.",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{2} \\)",
      canonicalAnswer: "1/2",
    },
  },
  {
    id: "am2d-018",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that if \\( f \\) is continuous and \\( f(x)=o(\\phi(x)) \\) as \\( x\\to\\infty \\), where \\( \\phi \\) is continuous, positive and non-decreasing, then \\( \\displaystyle\\int_a^{x} f(t)\\,dt = o\\big(x\\,\\phi(x)\\big) \\) as \\( x\\to+\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["order symbols", "integration of asymptotics", "little-o"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate the little-o hypothesis.",
          workingLatex:
            "\\forall\\,\\varepsilon>0\\ \\exists\\,X:\\ |f(t)| < \\varepsilon\\,\\phi(t) \\quad \\text{for } t\\ge X.",
          explanation:
            "The statement \\( f=o(\\phi) \\) means the ratio \\( f/\\phi\\to 0 \\); equivalently, beyond some threshold \\( X \\) the bound \\( |f|<\\varepsilon\\phi \\) holds for every chosen \\( \\varepsilon \\).",
        },
        {
          stepNumber: 2,
          description: "Split and bound the integral.",
          workingLatex:
            "\\left|\\int_a^{x} f\\,dt\\right| \\le \\underbrace{\\left|\\int_a^{X} f\\,dt\\right|}_{=:C} + \\int_X^{x} |f(t)|\\,dt \\le C + \\varepsilon\\int_X^{x}\\phi(t)\\,dt.",
          explanation:
            "The integral over the fixed window \\( [a,X] \\) is a constant \\( C \\). On the tail we apply the bound from step 1, replacing \\( |f| \\) by \\( \\varepsilon\\phi \\).",
        },
        {
          stepNumber: 3,
          description: "Use monotonicity of \\( \\phi \\).",
          workingLatex:
            "\\int_X^{x}\\phi(t)\\,dt \\le (x-X)\\,\\phi(x) \\le x\\,\\phi(x),",
          explanation:
            "Since \\( \\phi \\) is non-decreasing, \\( \\phi(t)\\le\\phi(x) \\) on \\( [X,x] \\), so the tail integral is at most the length times the largest value, which is bounded by \\( x\\phi(x) \\).",
        },
        {
          stepNumber: 4,
          description: "Divide through and take limits.",
          workingLatex:
            "\\frac{1}{x\\phi(x)}\\left|\\int_a^x f\\,dt\\right| \\le \\frac{C}{x\\phi(x)} + \\varepsilon \\;\\xrightarrow{x\\to\\infty}\\; \\varepsilon.",
          explanation:
            "The constant term vanishes because \\( x\\phi(x)\\to\\infty \\) (as \\( \\phi>0 \\) and \\( x\\to\\infty \\)). As \\( \\varepsilon \\) was arbitrary, the limsup of the ratio is \\( 0 \\), proving \\( \\int_a^x f = o(x\\phi(x)) \\).",
        },
      ],
      finalAnswer: "\\( \\displaystyle\\int_a^{x} f(t)\\,dt = o\\big(x\\,\\phi(x)\\big) \\) as \\( x\\to+\\infty \\).",
    },
  },

  // ── Challenge: synoptic / multi-step / starred-level ─────────────────────
  {
    id: "am2d-019",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 19",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Show that the Euler series \\( \\sum_{n\\ge0}(-1)^n n! x^n \\) is Borel summable for \\( x>0 \\) and that its Borel sum equals \\( \\displaystyle\\int_0^{\\infty}\\frac{e^{-t}}{1+xt}\\,dt \\). Hence give the Borel sum at \\( x=1 \\) in terms of the exponential integral, and its numerical value.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Borel summation", "Euler series", "exponential integral", "synoptic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the Borel transform.",
          workingLatex:
            "B(t) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n n!}{n!}\\,t^n = \\sum_{n=0}^{\\infty}(-t)^n = \\frac{1}{1+t}.",
          explanation:
            "Dividing the \\( n \\)-th coefficient \\( (-1)^n n! \\) by \\( n! \\) leaves \\( (-1)^n \\). The transform is a convergent geometric series with radius \\( 1 \\), continuing analytically to \\( 1/(1+t) \\) for all \\( t\\ge 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Check Borel summability.",
          workingLatex:
            "B(t)=\\frac{1}{1+t} \\text{ is analytic for } t\\ge 0 \\text{ and } |B(t)|\\le 1,",
          explanation:
            "Borel summability requires \\( B \\) to be analytic in a neighbourhood of the positive real axis and to grow slowly enough that the Laplace integral converges. Here \\( B \\) is bounded, with no singularity on \\( [0,\\infty) \\), so the conditions hold.",
        },
        {
          stepNumber: 3,
          description: "Form the Borel (Laplace) integral.",
          workingLatex:
            "S(x) = \\frac{1}{x}\\int_0^{\\infty} e^{-t/x}\\,B(t)\\,dt = \\frac{1}{x}\\int_0^{\\infty}\\frac{e^{-t/x}}{1+t}\\,dt.",
          explanation:
            "The Borel sum reconstitutes the function by Laplace-transforming the transform. The factor \\( 1/x \\) and kernel \\( e^{-t/x} \\) invert the division by \\( n! \\) performed in step 1.",
        },
        {
          stepNumber: 4,
          description: "Substitute to match \\( F \\).",
          workingLatex:
            "u = t/x: \\quad S(x) = \\int_0^{\\infty}\\frac{e^{-u}}{1+xu}\\,du = F(x).",
          explanation:
            "The change of variable \\( u=t/x \\) converts the Borel integral exactly into the original Euler integral \\( F(x) \\). So the Borel sum of the divergent series is the finite, smooth function it came from.",
        },
        {
          stepNumber: 5,
          description: "Evaluate at \\( x=1 \\).",
          workingLatex:
            "S(1) = \\int_0^{\\infty}\\frac{e^{-u}}{1+u}\\,du = e\\,E_1(1),",
          explanation:
            "At \\( x=1 \\), substituting \\( v=1+u \\) gives \\( e\\int_1^\\infty e^{-v}/v\\,dv = e\\,E_1(1) \\). This is the finite value Borel summation assigns to the wildly divergent series \\( 1-1!+2!-3!+\\cdots \\).",
        },
        {
          stepNumber: 6,
          description: "State the numerical value.",
          workingLatex:
            "S(1) = e\\,E_1(1) = 0.5963473623\\ldots.",
          explanation:
            "A direct numerical evaluation of the integral (mpmath, dps=40) gives \\( 0.5963473623231940\\ldots \\), confirming the closed form \\( e\\,E_1(1) \\).",
        },
      ],
      finalAnswer: "\\( S(1)=e\\,E_1(1)=0.5963473623\\ldots \\)",
      canonicalAnswer: "e*E_1(1)",
    },
  },
  // REVIEW: the optimal-error scaling O(x^{-1/2} e^{-1/x}) is argued via Stirling's
  // formula applied to the least term; the leading constant is checked numerically
  // (min term ~ 3.6e-4 at x=0.1) but the full sub-leading bound is asymptotic, not a
  // single verifiable number.
  {
    id: "am2d-020",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For the Euler series \\( F(x)\\sim\\sum(-1)^n n! x^n \\), optimal truncation keeps terms up to \\( N\\approx 1/x \\). Using Stirling's formula, show that the resulting optimal error is exponentially small, of order \\( O\\big(x^{-1/2}e^{-1/x}\\big) \\) as \\( x\\to 0^{+} \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimal truncation", "Stirling formula", "exponentially small error", "Euler series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Estimate the error by the least term.",
          workingLatex:
            "|R_N(x)| \\lesssim u_N = N!\\,x^N, \\qquad N \\approx \\frac{1}{x}.",
          explanation:
            "For an alternating asymptotic series the truncation error is comparable to the first omitted term, and optimal truncation chooses \\( N \\) to minimise that term, near \\( N\\approx 1/x \\).",
        },
        {
          stepNumber: 2,
          description: "Apply Stirling's formula.",
          workingLatex:
            "N! \\sim \\sqrt{2\\pi N}\\,\\left(\\frac{N}{e}\\right)^N.",
          explanation:
            "To track the size of \\( N!x^N \\) for large \\( N\\approx1/x \\) we replace the factorial by Stirling's asymptotic form, which exposes the competing exponential factors.",
        },
        {
          stepNumber: 3,
          description: "Substitute the least-term index.",
          workingLatex:
            "u_N \\sim \\sqrt{2\\pi N}\\,\\left(\\frac{N}{e}\\right)^N x^N = \\sqrt{2\\pi N}\\,\\left(\\frac{N x}{e}\\right)^N.",
          explanation:
            "Collecting the powers \\( N^N x^N = (Nx)^N \\) is the key simplification: the rapidly-growing \\( N^N \\) is tamed by the small \\( x^N \\).",
        },
        {
          stepNumber: 4,
          description: "Insert \\( N=1/x \\).",
          workingLatex:
            "Nx = 1 \\;\\Rightarrow\\; \\left(\\frac{Nx}{e}\\right)^N = e^{-N} = e^{-1/x}, \\qquad \\sqrt{2\\pi N} = \\sqrt{2\\pi/x}.",
          explanation:
            "At the optimal index \\( Nx=1 \\), so the bracket becomes \\( (1/e)^N=e^{-1/x} \\), an exponentially small factor. The Stirling prefactor contributes the algebraic \\( \\sqrt{2\\pi/x} \\).",
        },
        {
          stepNumber: 5,
          description: "Assemble the optimal error.",
          workingLatex:
            "u_N \\sim \\sqrt{\\frac{2\\pi}{x}}\\;e^{-1/x} = O\\!\\left(x^{-1/2}\\,e^{-1/x}\\right).",
          explanation:
            "The optimal error is dominated by \\( e^{-1/x} \\), beyond all powers of \\( x \\). This is the 'beyond all orders' accuracy of optimal truncation — and the size of the term invisible to the asymptotic series of \\( e^{-1/x} \\).",
        },
        {
          stepNumber: 6,
          description: "Numerical sanity check at \\( x=0.1 \\).",
          workingLatex:
            "u_{10} = 10!\\,(0.1)^{10} \\approx 3.6\\times10^{-4}, \\qquad \\text{observed optimal error} \\approx 1.8\\times10^{-4}.",
          explanation:
            "The least term at \\( x=0.1 \\) is \\( \\approx 3.6\\times10^{-4} \\); the actual best error \\( \\approx 1.8\\times10^{-4} \\) is about half of it, consistent with the alternating-series bound and the predicted exponentially-small scale.",
        },
      ],
      finalAnswer: "\\( |R_{\\mathrm{opt}}(x)| = O\\big(x^{-1/2}e^{-1/x}\\big) \\) as \\( x\\to0^{+} \\).",
    },
  },
  {
    id: "am2d-021",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 21",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The series \\( \\sum_{n\\ge0} n!\\,x^n \\) (no alternating sign) has Borel transform \\( B(t)=1/(1-t) \\), which is singular at \\( t=1 \\). Define its Borel sum at \\( x=1 \\) by the Cauchy principal value \\( \\mathrm{PV}\\!\\int_0^{\\infty}\\frac{e^{-t}}{1-t}\\,dt \\). Evaluate this in closed form and give its numerical value.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Borel summation", "principal value", "exponential integral", "resurgence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the Borel transform.",
          workingLatex:
            "B(t) = \\sum_{n=0}^{\\infty}\\frac{n!}{n!}\\,t^n = \\sum_{n=0}^{\\infty} t^n = \\frac{1}{1-t}.",
          explanation:
            "Dividing \\( n! \\) by \\( n! \\) leaves coefficient \\( 1 \\), giving a geometric series. Unlike the alternating case, the transform now has a pole on the positive axis at \\( t=1 \\) — a singularity that signals non-trivial resurgence.",
        },
        {
          stepNumber: 2,
          description: "Write the Borel sum as a principal value.",
          workingLatex:
            "S(1) = \\mathrm{PV}\\int_0^{\\infty}\\frac{e^{-t}}{1-t}\\,dt = \\lim_{\\epsilon\\to0^{+}}\\left(\\int_0^{1-\\epsilon} + \\int_{1+\\epsilon}^{\\infty}\\right)\\frac{e^{-t}}{1-t}\\,dt.",
          explanation:
            "Because the integrand blows up at \\( t=1 \\), the Laplace integral does not converge in the ordinary sense; the symmetric principal value excises a shrinking interval around the pole and is the natural lateral-Borel definition.",
        },
        {
          stepNumber: 3,
          description: "Substitute to expose the exponential integral.",
          workingLatex:
            "v = 1-t,\\ dt=-dv: \\quad S(1) = e\\,\\mathrm{PV}\\!\\int_{-\\infty}^{1}\\frac{e^{-v}}{v}\\,dv.",
          explanation:
            "Setting \\( v=1-t \\) gives \\( e^{-t}=e^{-1}e^{v} \\) — wait, more carefully \\( e^{-t}=e^{-(1-v)}=e^{-1}e^{v} \\); pulling out constants leaves a principal-value exponential-integral with the pole now at \\( v=0 \\).",
        },
        {
          stepNumber: 4,
          description: "Identify the exponential integral \\( \\mathrm{Ei} \\).",
          workingLatex:
            "\\mathrm{PV}\\int_0^{\\infty}\\frac{e^{-t}}{1-t}\\,dt = e^{-1}\\,\\mathrm{Ei}(1), \\qquad \\mathrm{Ei}(1)=\\mathrm{PV}\\!\\int_{-\\infty}^{1}\\frac{e^{u}}{u}\\,du.",
          explanation:
            "Carrying through the constants and orientation, the principal-value integral reduces to \\( e^{-1}\\mathrm{Ei}(1) \\), where \\( \\mathrm{Ei} \\) is the standard exponential integral (the principal-value sibling of \\( E_1 \\)).",
        },
        {
          stepNumber: 5,
          description: "State the numerical value.",
          workingLatex:
            "S(1) = e^{-1}\\,\\mathrm{Ei}(1) = 0.6971748832\\ldots.",
          explanation:
            "A direct symmetric principal-value evaluation (mpmath, dps=50) gives \\( 0.69717488323506606\\ldots \\), matching \\( e^{-1}\\mathrm{Ei}(1)=0.69717488323506606\\ldots \\) exactly.",
        },
        {
          stepNumber: 6,
          description: "Remark on the imaginary ambiguity.",
          workingLatex:
            "\\int_0^\\infty \\frac{e^{-t}}{1-t}\\,dt \\Big|_{C_\\pm} = \\mathrm{PV} \\mp i\\pi\\,e^{-1},",
          explanation:
            "Deforming the contour above or below the pole adds \\( \\mp i\\pi\\,\\mathrm{Res}_{t=1}e^{-t}=\\mp i\\pi e^{-1} \\). The imaginary part is the non-perturbative ambiguity \\( \\sim e^{-1/x} \\) of a non-Borel-summable series — the principal value takes the real average.",
        },
      ],
      finalAnswer: "\\( S(1)=e^{-1}\\,\\mathrm{Ei}(1)=0.6971748832\\ldots \\) (with \\( \\pm i\\pi e^{-1} \\) ambiguity).",
      canonicalAnswer: "Ei(1)/e",
    },
  },
  {
    id: "am2d-022",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Obtain the asymptotic expansion of \\( E_1(x) \\) as \\( x\\to 0^{+} \\) by considering \\( \\dfrac{d}{dx}\\big[E_1(x)+\\ln x\\big] \\) and integrating, given that \\( \\lim_{x\\to0^{+}}\\big[E_1(x)+\\ln x\\big]=-\\gamma \\), where \\( \\gamma \\) is Euler's constant. Give the first three terms.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "small-argument expansion", "Euler-Mascheroni"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate \\( E_1 \\).",
          workingLatex:
            "\\frac{d}{dx}E_1(x) = \\frac{d}{dx}\\int_x^{\\infty}\\frac{e^{-t}}{t}\\,dt = -\\frac{e^{-x}}{x}.",
          explanation:
            "By the fundamental theorem of calculus, differentiating with respect to the lower limit brings down minus the integrand at \\( t=x \\). This is the key derivative we manipulate.",
        },
        {
          stepNumber: 2,
          description: "Form the regularised derivative.",
          workingLatex:
            "\\frac{d}{dx}\\big[E_1(x)+\\ln x\\big] = -\\frac{e^{-x}}{x} + \\frac{1}{x} = \\frac{1-e^{-x}}{x}.",
          explanation:
            "Adding \\( \\ln x \\) cancels the \\( 1/x \\) singularity: \\( (1-e^{-x})/x \\) is analytic at \\( x=0 \\) with value \\( 1 \\), so it may be expanded in an ordinary Taylor series.",
        },
        {
          stepNumber: 3,
          description: "Expand the regular integrand.",
          workingLatex:
            "\\frac{1-e^{-x}}{x} = 1 - \\frac{x}{2} + \\frac{x^2}{6} - \\frac{x^3}{24} + \\cdots = \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}x^{n-1}}{n!}.",
          explanation:
            "Using \\( e^{-x}=\\sum(-x)^k/k! \\), the numerator is \\( x - x^2/2 + \\cdots \\); dividing by \\( x \\) shifts the series to a power series convergent for all \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "Integrate term by term.",
          workingLatex:
            "E_1(x) + \\ln x = C + x - \\frac{x^2}{4} + \\frac{x^3}{18} - \\cdots = C + \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}x^{n}}{n\\cdot n!}.",
          explanation:
            "Antidifferentiating each monomial introduces \\( 1/n \\), giving coefficients \\( (-1)^{n-1}/(n\\cdot n!) \\). The constant of integration \\( C \\) is fixed by the stated limit.",
        },
        {
          stepNumber: 5,
          description: "Fix the constant.",
          workingLatex:
            "\\lim_{x\\to0^{+}}\\big[E_1(x)+\\ln x\\big] = C = -\\gamma.",
          explanation:
            "As \\( x\\to 0 \\) all the polynomial terms vanish, leaving \\( C \\), which the given limit identifies as \\( -\\gamma \\).",
        },
        {
          stepNumber: 6,
          description: "State the expansion.",
          workingLatex:
            "E_1(x) = -\\gamma - \\ln x + x - \\frac{x^2}{4} + \\frac{x^3}{18} - \\cdots.",
          explanation:
            "Unlike the large-\\( x \\) case, this small-\\( x \\) series is convergent (radius \\( \\infty \\)). The contrast underlines that the same function can have a convergent expansion at one end and a divergent asymptotic series at the other.",
        },
      ],
      finalAnswer: "\\( E_1(x) = -\\gamma - \\ln x + x - \\dfrac{x^2}{4} + \\cdots \\) as \\( x\\to0^{+} \\).",
    },
  },
  {
    id: "am2d-023",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Consider the Stieltjes integral \\( F(x)=\\int_0^{\\infty}\\frac{\\rho(t)}{1+xt}\\,dt \\) with \\( \\rho(t)=t\\,e^{-t} \\). Show that \\( F(x)\\sim\\sum_{n\\ge0}(-1)^n (n+1)!\\,x^{n} \\) as \\( x\\to0^{+} \\), where the coefficients are the moments \\( a_n=\\int_0^\\infty t^n\\rho(t)\\,dt \\). Identify \\( a_n \\) and the first two terms.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "moments", "asymptotic series", "Euler series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand and integrate formally.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^{\\infty}(-1)^n x^n \\int_0^{\\infty} t^n\\,\\rho(t)\\,dt = \\sum_{n=0}^{\\infty}(-1)^n a_n x^n.",
          explanation:
            "Expanding \\( 1/(1+xt) \\) geometrically and integrating term by term shows the coefficients are precisely the moments \\( a_n \\) of the weight \\( \\rho \\). This is the general Stieltjes-series structure.",
        },
        {
          stepNumber: 2,
          description: "Compute the moments.",
          workingLatex:
            "a_n = \\int_0^{\\infty} t^n\\cdot t\\,e^{-t}\\,dt = \\int_0^{\\infty} t^{n+1}e^{-t}\\,dt = (n+1)!.",
          explanation:
            "With \\( \\rho(t)=t e^{-t} \\) the moment integral is \\( \\Gamma(n+2)=(n+1)! \\). The extra factor of \\( t \\) in the weight shifts the factorial up by one compared with the plain Euler series.",
        },
        {
          stepNumber: 3,
          description: "Assemble the series.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^{\\infty}(-1)^n (n+1)!\\,x^n.",
          explanation:
            "Substituting \\( a_n=(n+1)! \\) gives a divergent series with even faster factorial growth — its Borel transform is \\( \\sum(n+1)(-t)^n = 1/(1+t)^2 \\).",
        },
        {
          stepNumber: 4,
          description: "State the leading terms.",
          workingLatex:
            "F(x) = 1 - 2!\\,x + 3!\\,x^2 - \\cdots = 1 - 2x + 6x^2 - \\cdots.",
          explanation:
            "The first two terms are \\( 1 \\) and \\( -2x \\). Because the moments grow like \\( (n+1)! \\) the series is a valid asymptotic-but-divergent expansion, Borel summable to the convergent integral \\( F(x) \\).",
        },
      ],
      finalAnswer: "\\( a_n=(n+1)! \\); \\( F(x)\\sim 1 - 2x + 6x^2 - \\cdots = \\sum_{n\\ge0}(-1)^n(n+1)!\\,x^n \\).",
      canonicalAnswer: "sum_{n>=0} (-1)^n (n+1)! x^n",
    },
  },
  {
    id: "am2d-024",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Using Watson's lemma, find the full asymptotic expansion as \\( x\\to\\infty \\) of \\( J(x)=\\int_0^{\\infty}\\frac{e^{-xt}}{1+t^2}\\,dt \\), and give the first two non-zero terms. Comment on whether the series converges.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Laplace integral", "divergent series", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the amplitude at \\( t=0 \\).",
          workingLatex:
            "\\frac{1}{1+t^2} = \\sum_{k=0}^{\\infty} (-1)^k t^{2k}, \\qquad |t|<1.",
          explanation:
            "Watson's lemma is driven by the Taylor expansion of the amplitude at the endpoint \\( t=0 \\). Here only even powers appear, so the resulting series will have only odd inverse powers of \\( x \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate each monomial.",
          workingLatex:
            "\\int_0^{\\infty} e^{-xt}\\,t^{2k}\\,dt = \\frac{(2k)!}{x^{2k+1}}.",
          explanation:
            "Watson's lemma replaces each \\( t^{2k} \\) by \\( \\Gamma(2k+1)/x^{2k+1} = (2k)!/x^{2k+1} \\). The validity rests on the integrand decaying away from \\( t=0 \\), not on convergence of the amplitude's Taylor series.",
        },
        {
          stepNumber: 3,
          description: "Form the series.",
          workingLatex:
            "J(x) \\sim \\sum_{k=0}^{\\infty} \\frac{(-1)^k (2k)!}{x^{2k+1}} = \\frac{1}{x} - \\frac{2}{x^3} + \\frac{24}{x^5} - \\cdots.",
          explanation:
            "The first two non-zero terms are \\( 1/x \\) (\\( k=0 \\)) and \\( -2/x^3 \\) (\\( k=1 \\), since \\( 2!=2 \\)). A numerical check at \\( x=10 \\) gives \\( J=0.09819 \\) against \\( 1/x-2/x^3+24/x^5=0.09824 \\).",
        },
        {
          stepNumber: 4,
          description: "Assess convergence.",
          workingLatex:
            "\\frac{(2k+2)!/x^{2k+3}}{(2k)!/x^{2k+1}} = \\frac{(2k+1)(2k+2)}{x^2} \\to \\infty.",
          explanation:
            "The term-ratio grows without bound for any fixed \\( x \\), so the series diverges. As always for Watson's lemma with an amplitude singular off the contour, the expansion is asymptotic, not convergent.",
        },
      ],
      finalAnswer: "\\( J(x)\\sim \\dfrac{1}{x}-\\dfrac{2}{x^3}+\\dfrac{24}{x^5}-\\cdots=\\sum_{k\\ge0}\\dfrac{(-1)^k(2k)!}{x^{2k+1}} \\) (divergent).",
    },
  },
  {
    id: "am2d-025",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Give an example of a smooth function \\( H:(0,\\infty)\\to(0,\\infty) \\) that admits an asymptotic expansion \\( H(x)\\sim\\sum_{n\\ge0}\\alpha_n x^n \\) as \\( x\\to0^{+} \\) but for which term-by-term differentiation fails to give an asymptotic expansion of \\( H'(x) \\). Justify briefly.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["asymptotic series", "differentiation", "counterexample", "exponentially small"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Propose a function with a hidden oscillation.",
          workingLatex:
            "H(x) = 2 + e^{-1/x}\\sin\\!\\big(e^{1/x}\\big).",
          explanation:
            "We add to a constant a term that is exponentially small but whose derivative is not. The constant \\( 2 \\) keeps \\( H \\) positive for small \\( x \\). The construction mirrors the standard counterexample from the lectures.",
        },
        {
          stepNumber: 2,
          description: "Find the asymptotic series of \\( H \\).",
          workingLatex:
            "|H(x) - 2| \\le e^{-1/x} = o(x^n) \\ \\forall n \\;\\Rightarrow\\; H(x) \\sim 2 + 0\\cdot x + 0\\cdot x^2 + \\cdots.",
          explanation:
            "Since \\( e^{-1/x} \\) is smaller than every power of \\( x \\), the oscillating term is invisible to the asymptotic expansion: all coefficients beyond \\( \\alpha_0=2 \\) vanish.",
        },
        {
          stepNumber: 3,
          description: "Differentiate \\( H \\).",
          workingLatex:
            "H'(x) = \\frac{1}{x^2}e^{-1/x}\\sin\\!\\big(e^{1/x}\\big) + \\frac{1}{x^2}\\cos\\!\\big(e^{1/x}\\big).",
          explanation:
            "Differentiating the inner \\( e^{1/x} \\) produces a factor \\( -1/x^2\\cdot(-1)=1/x^2 \\); critically the \\( \\cos \\) term multiplies \\( e^{-1/x} \\) by \\( e^{1/x} \\), cancelling the exponential and leaving \\( x^{-2}\\cos(e^{1/x}) \\).",
        },
        {
          stepNumber: 4,
          description: "Show differentiation of the series fails.",
          workingLatex:
            "x^2 H'(x) = \\cos\\!\\big(e^{1/x}\\big) + o(1) \\not\\to \\text{any limit as } x\\to0^{+}.",
          explanation:
            "Term-by-term differentiation of \\( H\\sim 2+0+\\cdots \\) predicts \\( H'\\sim 0 \\). But \\( H'(x) \\) contains \\( x^{-2}\\cos(e^{1/x}) \\), which oscillates with unbounded amplitude — it has no asymptotic power series. So differentiation of the series is invalid here.",
        },
      ],
      finalAnswer:
        "\\( H(x)=2+e^{-1/x}\\sin(e^{1/x}) \\): \\( H\\sim2 \\) but \\( H'(x)\\) contains \\( x^{-2}\\cos(e^{1/x}) \\), so term-by-term differentiation fails.",
    },
  },
  {
    id: "am2d-026",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Show by repeated integration by parts, or otherwise, that \\( \\Phi(x)=\\int_x^{\\infty} e^{x^2-t^2}\\,dt \\) (related to the complementary error function) has the asymptotic expansion \\( \\Phi(x)\\sim\\frac{1}{2x}\\sum_{n\\ge0}(-1)^n\\frac{(2n-1)!!}{(2x^2)^n} \\) as \\( x\\to\\infty \\). Give the first two terms and the general term.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["error function", "integration by parts", "double factorial", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite to expose a Laplace structure.",
          workingLatex:
            "\\Phi(x) = e^{x^2}\\int_x^{\\infty} e^{-t^2}\\,dt = e^{x^2}\\int_x^{\\infty} \\frac{1}{2t}\\,\\big(2t\\,e^{-t^2}\\big)\\,dt.",
          explanation:
            "We isolate the exact derivative \\( 2t\\,e^{-t^2}=-\\frac{d}{dt}e^{-t^2} \\) so integration by parts can act on the slowly-varying factor \\( 1/(2t) \\).",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts once.",
          workingLatex:
            "\\int_x^{\\infty}\\frac{-1}{2t}\\,d\\big(e^{-t^2}\\big) = \\frac{e^{-x^2}}{2x} - \\int_x^{\\infty}\\frac{e^{-t^2}}{2t^2}\\,dt.",
          explanation:
            "The boundary term at infinity vanishes; at \\( t=x \\) it yields \\( e^{-x^2}/(2x) \\). The remaining integral is smaller by a factor \\( 1/t^2 \\), so the process generates a descending series.",
        },
        {
          stepNumber: 3,
          description: "Iterate the integration by parts.",
          workingLatex:
            "\\int_x^{\\infty}\\frac{e^{-t^2}}{2t^2}\\,dt = \\frac{e^{-x^2}}{(2x)\\,(2x^2)} + \\cdots,",
          explanation:
            "Each pass divides the integrand by another power of \\( 2t^2 \\) and multiplies the emerging coefficient by an odd number, generating the double-factorial pattern \\( 1,1,3,15,\\dots = (2n-1)!! \\).",
        },
        {
          stepNumber: 4,
          description: "Multiply back by \\( e^{x^2} \\).",
          workingLatex:
            "\\Phi(x) = e^{x^2}\\left[\\frac{e^{-x^2}}{2x}\\left(1 - \\frac{1}{2x^2} + \\frac{3}{(2x^2)^2} - \\cdots\\right)\\right].",
          explanation:
            "Restoring the prefactor \\( e^{x^2} \\) cancels \\( e^{-x^2} \\), leaving an algebraic series in \\( 1/x \\). The signs alternate and the coefficients are \\( (2n-1)!! \\).",
        },
        {
          stepNumber: 5,
          description: "State the series.",
          workingLatex:
            "\\Phi(x) \\sim \\frac{1}{2x}\\left(1 - \\frac{1}{2x^2} + \\frac{3}{4x^4} - \\cdots\\right) = \\frac{1}{2x}\\sum_{n=0}^{\\infty}\\frac{(-1)^n (2n-1)!!}{(2x^2)^n}.",
          explanation:
            "The first two terms are \\( 1/(2x) \\) and \\( -1/(4x^3) \\). With \\( (-1)!!:=1 \\), the general term is \\( (-1)^n(2n-1)!!/(2x^2)^n \\).",
        },
        {
          stepNumber: 6,
          description: "Note the divergence.",
          workingLatex:
            "\\frac{(2n+1)!!}{(2n-1)!!}\\cdot\\frac{1}{2x^2} = \\frac{2n+1}{2x^2} \\to \\infty,",
          explanation:
            "The term-ratio grows linearly in \\( n \\), so the series diverges for every fixed \\( x \\) — the standard asymptotic series for \\( \\mathrm{erfc} \\), optimally truncated near \\( n\\approx x^2 \\).",
        },
      ],
      finalAnswer:
        "\\( \\Phi(x)\\sim\\dfrac{1}{2x}-\\dfrac{1}{4x^3}+\\cdots=\\dfrac{1}{2x}\\sum_{n\\ge0}\\dfrac{(-1)^n(2n-1)!!}{(2x^2)^n} \\) (divergent).",
    },
  },
  {
    id: "am2d-027",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 27",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Apply the Euler transform \\( \\sum_{n\\ge0}(-1)^n a_n = \\sum_{k\\ge0}\\dfrac{(-1)^0\\,\\Delta^k a_0}{2^{k+1}} \\) (with forward differences \\( \\Delta^k a_0 \\)) to accelerate, and hence assign a value to, the divergent series \\( \\sum_{n\\ge0}(-1)^n \\) (i.e. \\( a_n=1 \\)). Evaluate the resummed value.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Euler transform", "series acceleration", "finite differences", "Abel summation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the forward differences.",
          workingLatex:
            "a_n = 1 \\;\\Rightarrow\\; \\Delta a_0 = a_1 - a_0 = 0, \\quad \\Delta^k a_0 = 0 \\ (k\\ge1).",
          explanation:
            "The Euler transform replaces the original coefficients by their iterated forward differences. For a constant sequence every difference beyond the zeroth vanishes, so only \\( k=0 \\) survives.",
        },
        {
          stepNumber: 2,
          description: "Insert into the Euler-transform sum.",
          workingLatex:
            "\\sum_{n\\ge0}(-1)^n a_n \\;\\xrightarrow{\\text{Euler}}\\; \\sum_{k=0}^{\\infty}\\frac{\\Delta^k a_0}{2^{k+1}} = \\frac{\\Delta^0 a_0}{2} = \\frac{1}{2}.",
          explanation:
            "Only the \\( k=0 \\) term contributes, namely \\( a_0/2^{1}=1/2 \\). The Euler transform has collapsed the divergent oscillating series to a single finite term.",
        },
        {
          stepNumber: 3,
          description: "Cross-check against Abel summation.",
          workingLatex:
            "\\sum_{n\\ge0}(-1)^n z^n = \\frac{1}{1+z}\\ \\xrightarrow{z\\to1^{-}}\\ \\frac{1}{2}.",
          explanation:
            "The Euler-transform value \\( 1/2 \\) agrees with the Abel sum of Grandi's series, as it must: both are regular linear summation methods consistent on this series.",
        },
        {
          stepNumber: 4,
          description: "State the resummed value.",
          workingLatex:
            "\\sum_{n\\ge0}(-1)^n \\;=\\; \\frac{1}{2} \\quad(\\text{Euler/Abel}).",
          explanation:
            "The Euler transform is a practical accelerator that, for a constant sequence, reproduces the canonical value \\( 1/2 \\) in one step — the cheapest possible illustration of consistent resummation.",
        },
      ],
      finalAnswer: "\\( \\dfrac{1}{2} \\)",
      canonicalAnswer: "1/2",
    },
  },
  {
    id: "am2d-028",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For the Euler integral \\( F(x)=\\int_0^\\infty e^{-t}/(1+xt)\\,dt \\) at \\( x=0.2 \\), the exact value is \\( F(0.2)=0.852111\\ldots \\). Determine the optimal truncation index of the series \\( \\sum(-1)^n n!(0.2)^n \\), evaluate the optimally truncated partial sum, and bound the error by the first omitted term.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimal truncation", "Euler series", "error bound", "numerical"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the least term.",
          workingLatex:
            "\\frac{u_{n+1}}{u_n} = (n+1)(0.2) = 1 \\;\\Rightarrow\\; n = 4.",
          explanation:
            "With \\( x=0.2 \\) the term-ratio equals one at \\( n=4 \\), so the terms \\( u_4 \\) and \\( u_5 \\) are jointly the smallest (\\( u_4=u_5=4!\\,(0.2)^4=0.0384 \\)).",
        },
        {
          stepNumber: 2,
          description: "Truncate before the least term.",
          workingLatex:
            "F(0.2) \\approx \\sum_{n=0}^{4} (-1)^n n!\\,(0.2)^n.",
          explanation:
            "Optimal truncation keeps terms up to \\( n=4 \\) (the last before the growth resumes). Including \\( n=5 \\) onward would only add the divergent tail.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the partial sum.",
          workingLatex:
            "\\sum_{n=0}^{4} (-1)^n n!\\,(0.2)^n = 1 - 0.2 + 0.08 - 0.048 + 0.0384 = 0.8704.",
          explanation:
            "Adding the alternating, briefly-shrinking terms gives \\( 0.8704 \\). The arithmetic is dominated by the first few terms.",
        },
        {
          stepNumber: 4,
          description: "Bound and compare the error.",
          workingLatex:
            "|R_5| \\le u_5 = 5!\\,(0.2)^5 = 0.0384, \\qquad |0.8704 - 0.852111| = 0.0183 < 0.0384.",
          explanation:
            "The first omitted term \\( u_5=0.0384 \\) bounds the truncation error, and indeed the actual error \\( 0.0183 \\) is about half of it — the alternating-series behaviour. This is the best accuracy the divergent series can give at \\( x=0.2 \\).",
        },
      ],
      finalAnswer: "\\( F(0.2)\\approx 0.8704 \\) (truncate at \\( n=4 \\)); error \\( 0.0183<u_5=0.0384 \\).",
      canonicalAnswer: "0.8704",
    },
  },
  {
    id: "am2d-029",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Establish the contrast between convergent and asymptotic behaviour for \\( I(x)=\\int_0^\\infty \\frac{e^{-xt}}{1+t}\\,dt \\): show its large-\\( x \\) expansion \\( \\sum (-1)^n n!/x^{n+1} \\) diverges, while the related sum \\( \\sum_{n\\ge1}(-1)^{n-1}/n \\) (the Mercator/Leibniz-type series) converges. Identify the convergent sum's value.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["convergent vs asymptotic", "Watson's lemma", "alternating series", "ln 2"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the divergent asymptotic series.",
          workingLatex:
            "I(x) = \\int_0^\\infty \\frac{e^{-xt}}{1+t}\\,dt \\sim \\sum_{n=0}^{\\infty}\\frac{(-1)^n n!}{x^{n+1}} \\quad (x\\to\\infty).",
          explanation:
            "By Watson's lemma the large-\\( x \\) expansion has factorial coefficients; the term-ratio \\( (n+1)/x\\to\\infty \\) makes it divergent — accurate only asymptotically.",
        },
        {
          stepNumber: 2,
          description: "Compute \\( I \\) exactly at a finite point.",
          workingLatex:
            "I(x) = e^{x}E_1(x), \\qquad \\text{e.g. } I(1)=e\\,E_1(1)=0.59634\\ldots.",
          explanation:
            "The integral has the closed form \\( e^x E_1(x) \\). It is a perfectly finite, smooth function for all \\( x>0 \\); only its large-\\( x \\) series misbehaves.",
        },
        {
          stepNumber: 3,
          description: "Introduce the convergent companion.",
          workingLatex:
            "\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots.",
          explanation:
            "This alternating harmonic series has terms decreasing to zero, so by the alternating-series test it converges — in sharp contrast to the factorial series, whose terms eventually grow.",
        },
        {
          stepNumber: 4,
          description: "Identify its sum.",
          workingLatex:
            "\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n} = \\ln 2 = 0.693147\\ldots.",
          explanation:
            "Setting \\( z=1 \\) in \\( \\ln(1+z)=\\sum(-1)^{n-1}z^n/n \\) gives the value \\( \\ln 2 \\). The convergent series can be summed by direct limit of partial sums; the divergent factorial series requires Borel resummation. This is the convergent-versus-asymptotic dichotomy in one example.",
        },
      ],
      finalAnswer: "Factorial series \\( \\sum(-1)^n n!/x^{n+1} \\) diverges; \\( \\sum(-1)^{n-1}/n=\\ln 2=0.6931\\ldots \\) converges.",
      canonicalAnswer: "ln(2)",
    },
  },
  {
    id: "am2d-030",
    topicRef: "am2d",
    topicTitle: "Divergent series & resummation 30",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Define \\( K(x)=\\int_0^{\\infty}\\frac{e^{-t}}{1+x^2 t^2}\\,dt \\). Find its asymptotic series as \\( x\\to0^{+} \\), determine the Borel transform of that series, and evaluate the Borel sum at \\( x=1 \\) in closed form.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Borel summation", "asymptotic series", "even moments", "synoptic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand and integrate term by term.",
          workingLatex:
            "\\frac{1}{1+x^2 t^2} = \\sum_{n=0}^{\\infty}(-1)^n x^{2n} t^{2n}, \\quad K(x) \\sim \\sum_{n=0}^{\\infty}(-1)^n x^{2n}\\!\\int_0^\\infty e^{-t}t^{2n}\\,dt.",
          explanation:
            "Only even powers of \\( t \\) appear, so the asymptotic series of \\( K \\) is in powers of \\( x^2 \\). Each integral is a Gamma moment.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the even moments.",
          workingLatex:
            "\\int_0^\\infty e^{-t}t^{2n}\\,dt = (2n)!, \\qquad K(x) \\sim \\sum_{n=0}^{\\infty}(-1)^n (2n)!\\,x^{2n}.",
          explanation:
            "The moment \\( \\Gamma(2n+1)=(2n)! \\) grows even faster than \\( n! \\). The series in \\( y=x^2 \\) is \\( \\sum(-1)^n(2n)!\\,y^n \\), strongly divergent.",
        },
        {
          stepNumber: 3,
          description: "Form the Borel transform in \\( y=x^2 \\).",
          workingLatex:
            "a_n = (-1)^n (2n)!, \\quad B(s) = \\sum_{n=0}^{\\infty}\\frac{(-1)^n (2n)!}{n!}\\,s^n.",
          explanation:
            "Dividing the coefficient by \\( n! \\) leaves \\( (-1)^n (2n)!/n! \\). This does not fully tame the growth (the series in \\( s \\) still has finite radius), reflecting the heavier \\( (2n)! \\) growth.",
        },
        {
          stepNumber: 4,
          description: "Identify the Borel sum directly from the integral.",
          workingLatex:
            "K(x) = \\int_0^{\\infty}\\frac{e^{-t}}{1+x^2 t^2}\\,dt \\text{ is the Borel/Stieltjes sum of its divergent series}.",
          explanation:
            "Rather than push the \\( s \\)-integral, note the original integral is itself the resummation: it is finite and reproduces every coefficient \\( (-1)^n(2n)! \\). The convergent integral is the sum the divergent series points to.",
        },
        {
          stepNumber: 5,
          description: "Evaluate at \\( x=1 \\) via partial fractions.",
          workingLatex:
            "K(1) = \\int_0^{\\infty}\\frac{e^{-t}}{1+t^2}\\,dt = \\mathrm{Ci}(1)\\sin 1 + \\Big(\\tfrac{\\pi}{2}-\\mathrm{Si}(1)\\Big)\\cos 1,",
          explanation:
            "Writing \\( 1/(1+t^2) \\) and integrating against \\( e^{-t} \\) yields the standard closed form in the sine and cosine integrals \\( \\mathrm{Si},\\mathrm{Ci} \\) (the auxiliary functions \\( f(1),g(1) \\)).",
        },
        {
          stepNumber: 6,
          description: "State the numerical value.",
          workingLatex:
            "K(1) = 0.6214496242\\ldots.",
          explanation:
            "Direct numerical integration (mpmath) of \\( \\int_0^\\infty e^{-t}/(1+t^2)\\,dt \\) gives \\( 0.6214496242\\ldots \\), the finite Borel/Stieltjes sum of the divergent series \\( 1 - 2!\\,+ 4!\\,- \\cdots \\) at \\( x=1 \\).",
        },
      ],
      finalAnswer: "\\( K(x)\\sim\\sum_{n\\ge0}(-1)^n(2n)!\\,x^{2n} \\); Borel sum \\( K(1)=\\int_0^\\infty\\frac{e^{-t}}{1+t^2}dt=0.6214496242\\ldots \\).",
      canonicalAnswer: "0.6214496242",
    },
  },
];
