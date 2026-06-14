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
          description: "Identify the coefficients.",
          workingLatex:
            "a_n = (-1)^n\\,n!.",
          explanation:
            "The radius of convergence of a power series \\( \\sum a_n x^n \\) is fixed entirely by how fast the coefficients \\( a_n \\) grow, via \\( 1/R=\\lim|a_{n+1}/a_n| \\) (or the root form). So the first move is simply to read off \\( a_n \\) from the series: the coefficient of \\( x^n \\) is \\( (-1)^n n! \\). The alternating sign cannot affect convergence because the ratio test sees only magnitudes, but the factorial certainly will. Keep the sign attached for now so the cancellation in step 4 is honest rather than smuggled away.",
        },
        {
          stepNumber: 2,
          description: "Write the next coefficient \\( a_{n+1} \\).",
          workingLatex:
            "a_{n+1} = (-1)^{n+1}(n+1)!.",
          explanation:
            "The ratio test needs two consecutive coefficients, so substitute \\( n\\mapsto n+1 \\) everywhere in \\( a_n \\). The sign advances \\( (-1)^n\\to(-1)^{n+1} \\) and the factorial advances \\( n!\\to(n+1)! \\). The single most common slip here is to bump the factorial but leave the sign as \\( (-1)^n \\); doing both keeps the ratio's sign correct, even though it will wash out under the modulus shortly.",
        },
        {
          stepNumber: 3,
          description: "Form the coefficient ratio.",
          workingLatex:
            "\\frac{a_{n+1}}{a_n} = \\frac{(-1)^{n+1}(n+1)!}{(-1)^n\\,n!}.",
          explanation:
            "Dividing successive coefficients assembles the exact object the ratio test inspects. Writing it as one fraction first, before any cancelling, separates the two independent simplifications — the sign part and the factorial part — so neither gets lost. The sign part \\( (-1)^{n+1}/(-1)^n \\) will collapse to \\( -1 \\), and the factorial part is about to nearly telescope.",
        },
        {
          stepNumber: 4,
          description: "Cancel the signs.",
          workingLatex:
            "\\frac{(-1)^{n+1}}{(-1)^n} = (-1)^{(n+1)-n} = -1.",
          explanation:
            "Subtracting exponents on the common base \\( -1 \\) gives \\( (-1)^1=-1 \\), independent of \\( n \\). Isolating this on its own line makes clear that the alternation contributes only a fixed factor of \\( -1 \\) to the ratio and nothing that grows; all the growth must therefore live in the factorial part, handled next.",
        },
        {
          stepNumber: 5,
          description: "Cancel the factorials.",
          workingLatex:
            "\\frac{(n+1)!}{n!} = \\frac{(n+1)\\,n!}{n!} = n+1, \\qquad \\frac{a_{n+1}}{a_n} = -(n+1).",
          explanation:
            "The defining recursion \\( (n+1)! = (n+1)\\cdot n! \\) lets the \\( n! \\) cancel, leaving \\( n+1 \\). Combining with the \\( -1 \\) from step 4 gives the coefficient ratio \\( -(n+1) \\). The magnitudes of successive coefficients thus grow linearly in \\( n \\) — it is precisely this unbounded ratio (rather than a bounded one as in a geometric series) that forces \\( R=0 \\).",
        },
        {
          stepNumber: 6,
          description: "Apply the ratio test to the full term.",
          workingLatex:
            "\\left| \\frac{a_{n+1} x^{n+1}}{a_n x^n} \\right| = |-(n+1)|\\,|x| = (n+1)\\,|x|.",
          explanation:
            "The ratio test acts on consecutive terms of the series \\( a_n x^n \\), not the coefficients alone, so reinstate the factor \\( x^{n+1}/x^n=x \\) and take the modulus. The sign \\( -(n+1) \\) becomes \\( (n+1) \\) under \\( |\\cdot| \\), and \\( |x| \\) factors out cleanly. This is the quantity whose limit decides convergence.",
        },
        {
          stepNumber: 7,
          description: "Take the limit as \\( n\\to\\infty \\).",
          workingLatex:
            "L = \\lim_{n\\to\\infty} (n+1)\\,|x| = \\infty \\quad \\text{for every } x \\neq 0.",
          explanation:
            "For any fixed non-zero \\( x \\) the factor \\( |x| \\) is a positive constant while \\( n+1\\to\\infty \\), so the product diverges. The ratio test says the series converges when \\( L<1 \\) and diverges when \\( L>1 \\); here \\( L=\\infty>1 \\), so the terms eventually grow in size and the series cannot converge. Sanity check at the one excluded point: at \\( x=0 \\) the limit is \\( 0<1 \\), consistent with the series trivially converging there (only the \\( n=0 \\) term survives).",
        },
        {
          stepNumber: 8,
          description: "State the radius and classify the series.",
          workingLatex:
            "R = 0, \\qquad \\text{series diverges for all } x \\neq 0.",
          explanation:
            "Divergence for every \\( x\\neq 0 \\) is exactly the statement \\( R=0 \\): the disc of convergence has shrunk to the single point \\( x=0 \\). Yet this is not a useless object — the very same series is an extremely accurate asymptotic expansion of the Euler integral \\( F(x)=\\int_0^\\infty e^{-t}/(1+xt)\\,dt \\) as \\( x\\to0^{+} \\). Divergence as a power series and usefulness as an asymptotic series are not in tension; reconciling them is the whole theme of this subtopic.",
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
          description: "Write the terms as powers.",
          workingLatex: "1 + 2 + 4 + 8 + \\cdots = 2^0 + 2^1 + 2^2 + 2^3 + \\cdots.",
          explanation:
            "Each term is double its predecessor, so the series is a list of successive powers of \\( 2 \\). Rewriting \\( 1,2,4,8 \\) as \\( 2^0,2^1,2^2,2^3 \\) exposes the geometric structure and lets us match it to the template \\( \\sum z^n \\). The point of analytic continuation is that a single closed form will represent the series everywhere it converges and supply a value where it does not — but we cannot invoke that form until the series is in standard shape.",
        },
        {
          stepNumber: 2,
          description: "Identify the common ratio.",
          workingLatex: "1 + 2 + 4 + 8 + \\cdots = \\sum_{n=0}^{\\infty} 2^{\\,n}, \\qquad z = 2.",
          explanation:
            "Comparing \\( \\sum 2^n \\) term by term with the geometric template \\( \\sum z^n \\) reads off the common ratio \\( z=2 \\). Pinning down \\( z \\) is the step that unlocks the closed form \\( 1/(1-z) \\), because that formula is stated precisely in terms of this ratio. Note \\( z \\) is genuinely a number we may later substitute into a function, not just a formal symbol.",
        },
        {
          stepNumber: 3,
          description: "Note ordinary divergence.",
          workingLatex: "|z| = 2 > 1 \\;\\Rightarrow\\; \\text{partial sums } s_N = 2^{N+1}-1: \\ 1,3,7,15,\\dots \\to +\\infty.",
          explanation:
            "The identity \\( \\sum_{n=0}^{N} 2^n = 2^{N+1}-1 \\) gives partial sums \\( 1,3,7,15,\\dots \\) that march off to \\( +\\infty \\), so the series diverges in the ordinary sense. The closed form \\( 1/(1-z) \\) literally equals the sum only inside the disc \\( |z|<1 \\), where the partial sums actually settle; here \\( |z|=2>1 \\) sits outside it. Any finite value we attach must therefore come from continuation, never from ordinary summation — that distinction is the whole content of the question.",
        },
        {
          stepNumber: 4,
          description: "Substitute \\( z=2 \\) into the closed form.",
          workingLatex: "\\frac{1}{1-z}\\Bigg|_{z=2} = \\frac{1}{1-2}.",
          explanation:
            "The rational function \\( 1/(1-z) \\) is the unique analytic continuation of \\( \\sum z^n \\): it agrees with the series throughout \\( |z|<1 \\) and is holomorphic everywhere except its single pole at \\( z=1 \\). Since \\( z=2 \\) avoids that pole, evaluating there is legitimate and unambiguous. Substituting gives the denominator \\( 1-2 \\), which we evaluate next.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the fraction.",
          workingLatex: "\\frac{1}{1-2} = \\frac{1}{-1} = -1.",
          explanation:
            "Here is the one place arithmetic can go wrong: \\( 1-2=-1 \\), not \\( +1 \\), so the value is \\( -1 \\). It is worth a sanity check that the pole at \\( z=1 \\) is what makes the series diverge exactly on the boundary \\( |z|=1 \\), and that for \\( z>1 \\) the continued value is negative — consistent with \\( 1/(1-z)<0 \\) whenever \\( z>1 \\).",
        },
        {
          stepNumber: 6,
          description: "State the assigned value.",
          workingLatex: "1 + 2 + 4 + 8 + \\cdots \\;\\xrightarrow{\\text{continuation}}\\; -1.",
          explanation:
            "This is a resummation, not an ordinary sum: the partial sums head to \\( +\\infty \\), yet \\( -1 \\) is the value forced by the unique analytic continuation. The apparent paradox dissolves once one accepts that \"sum\" here means \"value of the function the series represents\". This is the very mechanism behind Abel and Borel summation, which likewise assign finite values through closed forms agreeing with the series wherever it converges.",
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
          description: "Write the general Borel coefficient.",
          workingLatex: "\\frac{a_n}{n!} = \\frac{(-1)^n\\,n!}{n!}.",
          explanation:
            "The Borel transform of \\( \\sum a_n x^n \\) is \\( B(t)=\\sum (a_n/n!)\\,t^n \\); its design is to divide out exactly the factorial that makes the original series diverge. Substituting \\( a_n=(-1)^n n! \\) sets up the fraction \\( (-1)^n n!/n! \\) before any cancellation. Leaving it unsimplified for one line makes the cancellation in the next step unmistakable and avoids the slip of accidentally cancelling the sign too.",
        },
        {
          stepNumber: 2,
          description: "Cancel the factorial.",
          workingLatex: "\\frac{a_n}{n!} = (-1)^n.",
          explanation:
            "The \\( n! \\) in the numerator cancels the \\( n! \\) in the denominator exactly, leaving the bounded coefficients \\( (-1)^n \\). This is the entire service the Borel transform provides: it converts coefficients that grow like \\( n! \\) into ones of constant unit size. The lethal factorial growth of the original series has been completely neutralised, so the transformed series will have a positive radius of convergence.",
        },
        {
          stepNumber: 3,
          description: "Substitute the coefficients into \\( B(t) \\).",
          workingLatex:
            "B(t) = \\sum_{n=0}^{\\infty} \\frac{a_n}{n!}\\,t^n = \\sum_{n=0}^{\\infty} (-1)^n\\,t^n.",
          explanation:
            "Insert the simplified coefficients \\( (-1)^n \\) into the definition of the transform. Note we are now building a brand-new series in the auxiliary variable \\( t \\), distinct from the original series in \\( x \\); the variable name change signals that \\( B \\) lives on the Borel plane, where we will later integrate along \\( [0,\\infty) \\).",
        },
        {
          stepNumber: 4,
          description: "Fold the sign into the variable.",
          workingLatex:
            "\\sum_{n=0}^{\\infty} (-1)^n\\,t^n = \\sum_{n=0}^{\\infty} (-t)^n.",
          explanation:
            "Absorbing the alternating sign by writing \\( (-1)^n t^n=(-t)^n \\) recasts the sum as a plain geometric series with ratio \\( r=-t \\). This is purely cosmetic but it is what lets us apply the standard formula \\( \\sum r^n=1/(1-r) \\) in the next step without separately tracking the sign.",
        },
        {
          stepNumber: 5,
          description: "Sum the geometric series.",
          workingLatex:
            "\\sum_{n=0}^{\\infty} (-t)^n = \\frac{1}{1-(-t)} = \\frac{1}{1+t}, \\qquad |t|<1.",
          explanation:
            "Apply \\( \\sum r^n = 1/(1-r) \\) with \\( r=-t \\); mind the double negative, \\( 1-(-t)=1+t \\), not \\( 1-t \\). Crucially this transformed series converges on the disc \\( |t|<1 \\), of positive radius, in stark contrast to the original Euler series whose radius was zero. The transform has manufactured a genuine analytic function out of a purely formal object.",
        },
        {
          stepNumber: 6,
          description: "State the Borel transform.",
          workingLatex: "B(t) = \\frac{1}{1+t}.",
          explanation:
            "The closed form \\( 1/(1+t) \\) analytically continues the convergent series to the whole ray \\( t\\ge 0 \\), its only singularity being the pole at \\( t=-1 \\), safely off the positive real axis. This is exactly the object the Borel sum will integrate against the kernel \\( e^{-t/x} \\): because there is no obstruction anywhere on \\( [0,\\infty) \\), the Laplace integral converges and the series is Borel summable. The factorial divergence has become a well-behaved function on the integration contour.",
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
          description: "Write the consecutive term magnitudes.",
          workingLatex: "u_n = n!\\,x^n, \\qquad u_{n+1} = (n+1)!\\,x^{n+1}.",
          explanation:
            "The smallest term of an asymptotic series is found by comparing each term with its neighbour, so we need both \\( u_n \\) and \\( u_{n+1} \\). Advancing the index replaces \\( n! \\) by \\( (n+1)! \\) and \\( x^n \\) by \\( x^{n+1} \\). Two forces now compete: the factorial pushes the term up while the extra power of small \\( x \\) pulls it down, and the location where they balance is the turning point we are after.",
        },
        {
          stepNumber: 2,
          description: "Form the ratio of consecutive terms.",
          workingLatex: "\\frac{u_{n+1}}{u_n} = \\frac{(n+1)!\\,x^{n+1}}{n!\\,x^{n}}.",
          explanation:
            "Dividing \\( u_{n+1} \\) by \\( u_n \\) isolates the competition between factorial growth and the shrinking power of \\( x \\) in a single expression. Forming the ratio before simplifying keeps the two pieces — the factorial ratio and the power ratio — visibly separate, which is tidier than cancelling everything at once.",
        },
        {
          stepNumber: 3,
          description: "Simplify the ratio.",
          workingLatex: "\\frac{u_{n+1}}{u_n} = \\frac{(n+1)!}{n!}\\cdot\\frac{x^{n+1}}{x^{n}} = (n+1)\\,x.",
          explanation:
            "The factorial ratio collapses via \\( (n+1)!/n!=n+1 \\) and the power ratio via \\( x^{n+1}/x^n=x \\), leaving the clean product \\( (n+1)x \\). This ratio is the diagnostic for an asymptotic series: its terms first decrease and then increase, so whether the ratio is below or above \\( 1 \\) tells us which regime we are in.",
        },
        {
          stepNumber: 4,
          description: "Interpret the ratio against one.",
          workingLatex: "(n+1)x < 1 \\Rightarrow u_{n+1}<u_n; \\qquad (n+1)x > 1 \\Rightarrow u_{n+1}>u_n.",
          explanation:
            "A ratio below \\( 1 \\) means the next term is smaller, so the terms are still shrinking; above \\( 1 \\) they have started to grow. The least term therefore sits exactly where the ratio passes through \\( 1 \\), at the boundary between the two regimes. This is the same minimisation one would get by setting the derivative of \\( \\ln u_n \\) to zero, but the discrete ratio test is cleaner for integer \\( n \\).",
        },
        {
          stepNumber: 5,
          description: "Solve for the crossover index.",
          workingLatex: "(n+1)\\,x = 1 \\;\\Longrightarrow\\; n+1 = \\frac{1}{x} \\;\\Longrightarrow\\; n = \\frac{1}{x} - 1.",
          explanation:
            "Setting the ratio equal to \\( 1 \\) and solving pins down the boundary index \\( n=1/x-1 \\). Because \\( n \\) must be a whole number this locates the least term only approximately, but for small \\( x \\) (large \\( 1/x \\)) the spacing between integers is negligible next to \\( 1/x \\), so it is sharp.",
        },
        {
          stepNumber: 6,
          description: "State the optimal index to leading order.",
          workingLatex: "n_{\\min} \\approx \\frac{1}{x}.",
          explanation:
            "When \\( x \\) is small, \\( 1/x \\) is large and the \\( -1 \\) is a negligible correction, so the least term sits at \\( n\\approx 1/x \\). As a concrete check, at \\( x=0.1 \\) this predicts \\( n\\approx 10 \\), and indeed \\( u_9 \\) and \\( u_{10} \\) are jointly smallest there (the ratio equals exactly \\( 1 \\) at \\( n=9 \\)). Truncating the series just before this term — \"optimal truncation\" — yields the most accurate estimate a divergent series can give, the central practical fact of this topic.",
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
          description: "Write the denominator in geometric form.",
          workingLatex: "\\frac{1}{1+xt} = \\frac{1}{1-(-xt)}.",
          explanation:
            "To expand \\( 1/(1+xt) \\) we match it to the geometric template \\( 1/(1-r) \\), which forces the ratio to be \\( r=-xt \\). Writing \\( 1+xt=1-(-xt) \\) on its own line makes the sign of \\( r \\) explicit; the single commonest error in the whole derivation is to take \\( r=+xt \\) and lose the alternating sign in the final series.",
        },
        {
          stepNumber: 2,
          description: "Expand as a geometric series.",
          workingLatex: "\\frac{1}{1-(-xt)} = \\sum_{n=0}^{\\infty} (-xt)^n = \\sum_{n=0}^{\\infty} (-1)^n (xt)^n.",
          explanation:
            "Applying \\( 1/(1-r)=\\sum r^n \\) with \\( r=-xt \\) and separating the sign gives \\( \\sum (-1)^n (xt)^n \\). This step is purely formal: for fixed \\( x>0 \\) the quantity \\( xt \\) is not small near the upper limit \\( t\\to\\infty \\), so the geometric series does not converge over the whole integration range. That mismatch between \"small near \\( t=0 \\)\" and \"large near \\( t=\\infty \\)\" is precisely the seed of the eventual divergence.",
        },
        {
          stepNumber: 3,
          description: "Insert the expansion into the integral.",
          workingLatex:
            "F(x) = \\int_0^\\infty e^{-t}\\sum_{n=0}^{\\infty}(-1)^n (xt)^n\\,dt.",
          explanation:
            "Substituting the series for \\( 1/(1+xt) \\) places it under the integral sign next to the weight \\( e^{-t} \\). At this point the equality is still exact — nothing illegitimate has happened, because we have merely rewritten the integrand. The hazard is entirely in the next step, where the order of an infinite sum and the integral is swapped.",
        },
        {
          stepNumber: 4,
          description: "Interchange sum and integral formally.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n x^n \\int_0^\\infty e^{-t}\\, t^n\\,dt.",
          explanation:
            "Pulling out the constants \\( (-1)^n x^n \\) and exchanging summation with integration is the decisive — and strictly illegal — move, because the geometric series does not converge uniformly on \\( [0,\\infty) \\). Termwise integration of a non-uniformly convergent series need not return the integral of the sum, and here it does not. This single interchange is what manufactures a divergent series from a perfectly finite integral, so we honestly downgrade \\( = \\) to \\( \\sim \\).",
        },
        {
          stepNumber: 5,
          description: "Evaluate each Gamma integral.",
          workingLatex:
            "\\int_0^{\\infty} e^{-t}\\,t^n\\,dt = \\Gamma(n+1) = n!.",
          explanation:
            "Each monomial \\( t^n \\) integrated against \\( e^{-t} \\) is the standard Gamma integral \\( \\Gamma(n+1)=n! \\). These factorials are the coefficients that will eventually blow up: the integral itself is entirely harmless, but evaluating term by term has injected factorial growth that the original convergent integral never contained.",
        },
        {
          stepNumber: 6,
          description: "Assemble the Euler series.",
          workingLatex: "F(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n\\,n!\\,x^n.",
          explanation:
            "Substituting \\( n! \\) for each integral gives Euler's series. The integral \\( F(x) \\) is finite and infinitely differentiable for every \\( x>0 \\) (the kernel \\( e^{-t} \\) dominates \\( 1/(1+xt)\\le1 \\)), yet this expansion has zero radius of convergence by the ratio test \\( (n+1)|x|\\to\\infty \\). It is the canonical example of a series that is asymptotic but divergent, the touchstone for the whole subtopic — and the very series whose Borel sum reconstructs \\( F \\) exactly.",
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
          workingLatex: "S(x) = \\frac{1}{x}\\int_0^{\\infty} e^{-t/x}\\,\\frac{1}{1+t}\\,dt = \\frac{1}{x}\\int_0^{\\infty} \\frac{e^{-t/x}}{1+t}\\,dt.",
          explanation:
            "Substitute the given transform \\( B(t)=1/(1+t) \\) straight into the defining Borel formula \\( S(x)=\\frac1x\\int_0^\\infty e^{-t/x}B(t)\\,dt \\). The result is a single convergent integral that Laplace-transforms the well-behaved transform against the decaying kernel \\( e^{-t/x} \\). For small \\( x>0 \\) the kernel concentrates sharply near \\( t=0 \\), so only the Taylor data of \\( B \\) at the origin matters — which is exactly how the original asymptotic series is reproduced.",
        },
        {
          stepNumber: 2,
          description: "Set \\( x=1 \\).",
          workingLatex: "S(1) = \\frac{1}{1}\\int_0^{\\infty} \\frac{e^{-t/1}}{1+t}\\,dt = \\int_0^{\\infty} \\frac{e^{-t}}{1+t}\\,dt.",
          explanation:
            "At \\( x=1 \\) the prefactor \\( 1/x \\) becomes \\( 1 \\) and the kernel \\( e^{-t/x} \\) becomes \\( e^{-t} \\). Note \\( x=1 \\) is well outside the (zero-radius) domain of the original series, so the only way to make sense of \"the sum at \\( x=1 \\)\" is through this integral. What remains is an exponential-integral-type integral, which we reduce to a named function.",
        },
        {
          stepNumber: 3,
          description: "Substitute \\( u=1+t \\): variable, limits, differential.",
          workingLatex:
            "u = 1+t \\;\\Rightarrow\\; t = u-1, \\quad du = dt; \\qquad t:0\\to\\infty \\;\\Rightarrow\\; u:1\\to\\infty.",
          explanation:
            "The shift \\( u=1+t \\) is chosen to move the singularity of the denominator from \\( t=-1 \\) to \\( u=0 \\), which then lies outside the new range \\( [1,\\infty) \\) so the integral stays manifestly finite. Recording the new variable, the limits \\( t:0\\to\\infty\\Rightarrow u:1\\to\\infty \\), and the differential \\( du=dt \\) all separately prevents the usual bookkeeping errors with the lower limit.",
        },
        {
          stepNumber: 4,
          description: "Rewrite the exponential weight in \\( u \\).",
          workingLatex:
            "e^{-t} = e^{-(u-1)} = e^{1}\\,e^{-u} = e\\,e^{-u}.",
          explanation:
            "Substituting \\( t=u-1 \\) into \\( e^{-t} \\) splits off a constant: \\( e^{-(u-1)}=e^{1-u}=e\\cdot e^{-u} \\). Putting this on its own line guards against the single most common slip in this problem — dropping the constant factor \\( e \\) — which would change the answer from \\( e\\,E_1(1) \\) to just \\( E_1(1) \\) and spoil the numerics.",
        },
        {
          stepNumber: 5,
          description: "Assemble the shifted integral.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{e^{-t}}{1+t}\\,dt = \\int_1^{\\infty}\\frac{e\\,e^{-u}}{u}\\,du = e\\int_1^{\\infty}\\frac{e^{-u}}{u}\\,du.",
          explanation:
            "Collecting the substituted pieces, the denominator \\( 1+t \\) becomes \\( u \\), the differential and limits come from step 3, and the weight comes from step 4. The constant \\( e \\) is independent of \\( u \\) so it factors out of the integral, leaving the standard exponential-integral shape \\( \\int_1^\\infty e^{-u}/u\\,du \\), ready to be named.",
        },
        {
          stepNumber: 6,
          description: "Recognise the exponential integral and evaluate.",
          workingLatex:
            "E_1(1)=\\int_1^\\infty \\frac{e^{-u}}{u}\\,du \\;\\Rightarrow\\; S(1) = e\\,E_1(1) = 0.5963473623\\ldots.",
          explanation:
            "The remaining integral is precisely \\( E_1(1) \\) by the definition \\( E_1(z)=\\int_z^\\infty e^{-u}/u\\,du \\), so \\( S(1)=e\\,E_1(1) \\). A direct numerical evaluation of the original integral \\( \\int_0^\\infty e^{-t}/(1+t)\\,dt \\) gives \\( 0.5963473623\\ldots \\), matching \\( e\\,E_1(1) \\) and confirming the algebra. This finite number is the value Borel summation assigns to the wildly divergent series \\( \\sum(-1)^n n!=1-1+2-6+\\cdots \\) at \\( x=1 \\).",
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
          description: "Recall the finite geometric identity.",
          workingLatex:
            "\\sum_{n=0}^{N-1} r^n = \\frac{1-r^N}{1-r} \\;\\Longrightarrow\\; \\frac{1}{1-r} = \\sum_{n=0}^{N-1} r^n + \\frac{r^N}{1-r}.",
          explanation:
            "The entire trick of getting a rigorous remainder is to use the exact finite geometric sum rather than the infinite series — the infinite expansion is exactly where the illegal termwise integration crept in for the formal Euler series. The finite identity carries a precise tail \\( r^N/(1-r) \\) with no approximation, so every later manipulation stays an equality. Rearranging it isolates the closed form as a finite sum plus that exact tail.",
        },
        {
          stepNumber: 2,
          description: "Apply the identity with \\( r=-xt \\).",
          workingLatex:
            "\\frac{1}{1+xt} = \\sum_{n=0}^{N-1} (-1)^n (xt)^n + \\frac{(-1)^N (xt)^N}{1+xt}.",
          explanation:
            "Setting \\( r=-xt \\) turns \\( 1/(1-r) \\) into the integrand's denominator \\( 1/(1+xt) \\). The tail \\( r^N/(1-r) \\) becomes \\( (-xt)^N/(1+xt) \\), and since \\( (-xt)^N=(-1)^N(xt)^N \\) the sign rides along with the \\( N \\)-th power. Forgetting that \\( r^N \\) carries the factor \\( (-1)^N \\) is a frequent slip; it matters because the remainder's sign is exactly what makes the series alternate.",
        },
        {
          stepNumber: 3,
          description: "Integrate the polynomial part term by term.",
          workingLatex:
            "\\int_0^{\\infty} e^{-t}\\sum_{n=0}^{N-1}(-1)^n(xt)^n\\,dt = \\sum_{n=0}^{N-1}(-1)^n x^n\\int_0^\\infty e^{-t}t^n\\,dt.",
          explanation:
            "A finite sum may always be moved through an integral legitimately — linearity of integration has no convergence subtlety when there are only \\( N \\) terms. This is the crucial contrast with the formal derivation: there the interchange of an infinite sum and the integral was the source of the divergence, whereas here it is exact. The constants \\( (-1)^n x^n \\) pull out, leaving a Gamma integral in each summand.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Gamma integrals.",
          workingLatex:
            "\\int_0^\\infty e^{-t}t^n\\,dt = n! \\;\\Rightarrow\\; \\int_0^{\\infty} e^{-t}\\sum_{n=0}^{N-1}(-1)^n(xt)^n\\,dt = \\sum_{n=0}^{N-1}(-1)^n x^n\\,n!.",
          explanation:
            "Each surviving integral is the standard \\( \\Gamma(n+1)=n! \\). The polynomial part therefore reproduces exactly the first \\( N \\) terms of Euler's series — the same coefficients as the formal expansion, but now arrived at without any illegitimate step, because they came from finitely many honest Gamma integrals.",
        },
        {
          stepNumber: 5,
          description: "Identify the remainder integral.",
          workingLatex:
            "R_N(x) = \\int_0^\\infty e^{-t}\\,\\frac{(-1)^N (xt)^N}{1+xt}\\,dt = (-1)^N x^N \\int_0^{\\infty} \\frac{e^{-t}\\,t^N}{1+xt}\\,dt.",
          explanation:
            "Integrating the leftover fractional term collects everything the polynomial part missed into \\( R_N \\); pulling the constant \\( (-1)^N x^N \\) out front tidies it. Because the split in step 2 was an exact identity, \\( F(x) \\) equals the partial sum plus this honest remainder — crucially, no approximation has yet been made, which is why the bound that follows is rigorous rather than heuristic.",
        },
        {
          stepNumber: 6,
          description: "Bound the denominator below.",
          workingLatex:
            "x,t>0 \\;\\Rightarrow\\; 1+xt \\ge 1 \\;\\Rightarrow\\; \\frac{t^N}{1+xt} \\le t^N.",
          explanation:
            "For positive \\( x \\) and \\( t \\) the denominator \\( 1+xt \\) is at least \\( 1 \\), so dividing by it can only shrink the integrand — equivalently, dropping it can only enlarge it. Replacing the awkward \\( 1/(1+xt) \\) by \\( 1 \\) is what turns the remainder integral into a clean Gamma integral. The bound is crude (it ignores the genuine decay from the denominator) but it suffices and is the standard route.",
        },
        {
          stepNumber: 7,
          description: "Bound the remainder.",
          workingLatex:
            "|R_N(x)| = x^N \\int_0^{\\infty} \\frac{e^{-t}\\,t^N}{1+xt}\\,dt \\le x^N \\int_0^{\\infty} e^{-t}\\,t^N\\,dt = N!\\,x^N.",
          explanation:
            "Taking the modulus removes the sign \\( (-1)^N \\) (since \\( |x^N|=x^N \\) for \\( x>0 \\)), then the inequality of step 6 inside the integral leaves \\( x^N\\int_0^\\infty e^{-t}t^N\\,dt=N!\\,x^N \\). The error is bounded by the size of the first omitted term \\( u_N=N!\\,x^N \\) — the defining hallmark of an asymptotic series, and exactly the quantity minimised by optimal truncation at \\( N\\approx 1/x \\).",
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
          description: "Write the term magnitude and its successor.",
          workingLatex: "u_n = n!\\,(0.1)^n, \\qquad u_{n+1} = (n+1)!\\,(0.1)^{n+1}.",
          explanation:
            "The magnitude of the \\( n \\)-th term of the series at \\( x=0.1 \\) is \\( u_n=n!(0.1)^n \\). As in any asymptotic series the terms shrink for a while and then grow, so to find the turning point we need each term alongside its neighbour. The factorial drives growth, the power of \\( 0.1 \\) drives decay, and their balance fixes the least term.",
        },
        {
          stepNumber: 2,
          description: "Form and simplify the term-ratio.",
          workingLatex: "\\frac{u_{n+1}}{u_n}=\\frac{(n+1)!\\,(0.1)^{n+1}}{n!\\,(0.1)^n}=(n+1)(0.1).",
          explanation:
            "Dividing successive terms lets the factorial ratio \\( (n+1)!/n!=n+1 \\) and the power ratio \\( (0.1)^{n+1}/(0.1)^n=0.1 \\) simplify cleanly to \\( (n+1)(0.1) \\). This ratio is the diagnostic for the turning point: while it is below \\( 1 \\) the terms still shrink, and once above \\( 1 \\) they grow.",
        },
        {
          stepNumber: 3,
          description: "Locate the least term.",
          workingLatex: "(n+1)(0.1)=1 \\;\\Rightarrow\\; n+1 = 10 \\;\\Rightarrow\\; n=9.",
          explanation:
            "Setting the ratio to \\( 1 \\) gives \\( n=9 \\), consistent with the general rule \\( n\\approx 1/x=10 \\). Because the ratio equals exactly \\( 1 \\) at \\( n=9 \\), the terms \\( u_9 \\) and \\( u_{10} \\) are jointly the smallest (both equal \\( 9!(0.1)^9 \\)). Optimal truncation keeps all terms up to but not including the least term.",
        },
        {
          stepNumber: 4,
          description: "Keep terms up to \\( n=9 \\).",
          workingLatex:
            "F(0.1) \\approx \\sum_{n=0}^{9} (-1)^n n!\\,(0.1)^n.",
          explanation:
            "Summing up to one term before the smallest gives the best balance the divergent series allows. Including \\( n=10 \\) and beyond would inject the growing tail and degrade the estimate; stopping earlier would throw away accuracy that is still on offer. This is the whole content of \"optimal truncation\".",
        },
        {
          stepNumber: 5,
          description: "Evaluate the partial sum.",
          workingLatex:
            "\\sum_{n=0}^{9} (-1)^n n!\\,(0.1)^n = 1 - 0.1 + 0.02 - 0.006 + \\cdots = 0.9154563\\ldots.",
          explanation:
            "Adding the alternating, briefly-shrinking terms produces a partial sum close to the true integral. The arithmetic is dominated by the first few terms \\( 1-0.1+0.02-\\cdots \\); the last few barely move the total because by then \\( n!(0.1)^n \\) has fallen to \\( \\sim 10^{-4} \\). A direct sum confirms \\( 0.9154563 \\).",
        },
        {
          stepNumber: 6,
          description: "Compare with the exact value.",
          workingLatex:
            "|0.9154563 - 0.9156333| \\approx 1.8\\times 10^{-4} \\approx \\tfrac12 u_9, \\quad u_9=9!\\,(0.1)^9\\approx3.6\\times10^{-4}.",
          explanation:
            "The optimally truncated estimate agrees with \\( F(0.1)=0.915633\\ldots \\) to about four significant figures. The residual error is of the order of the smallest term \\( u_9\\approx 3.6\\times10^{-4} \\); here it comes out at about half of it, the typical behaviour of an alternating series whose error is bracketed by consecutive partial sums. This \\( \\sim10^{-4} \\) accuracy is the best a divergent series can deliver at \\( x=0.1 \\) — and it matches the exponentially-small optimal-error scale \\( x^{-1/2}e^{-1/x} \\) derived elsewhere in this bank.",
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
          description: "Choose the parts \\( u \\) and \\( dv \\).",
          workingLatex:
            "u = \\frac{1}{t}, \\qquad dv = e^{-t}\\,dt.",
          explanation:
            "Integration by parts is the natural tool here because differentiating the algebraic factor \\( 1/t \\) makes it smaller (each pass adds a power of \\( t \\) to the denominator), while \\( e^{-t} \\) integrates back to itself up to sign. We therefore assign \\( u=1/t \\), the factor we want to grind down, and \\( dv=e^{-t}dt \\), the factor we are happy to integrate. The opposite choice would make the integral worse, not better.",
        },
        {
          stepNumber: 2,
          description: "Compute \\( du \\) and \\( v \\).",
          workingLatex:
            "du = -\\frac{1}{t^2}\\,dt, \\qquad v = -e^{-t}.",
          explanation:
            "Differentiate \\( u=1/t \\) to get \\( du=-t^{-2}dt \\), and integrate \\( dv=e^{-t}dt \\) to get \\( v=-e^{-t} \\). Recording these on their own line keeps the two minus signs — one in \\( du \\), one in \\( v \\) — visible, which is where sign errors usually enter the boundary and remainder terms.",
        },
        {
          stepNumber: 3,
          description: "Apply the parts formula.",
          workingLatex:
            "E_1(x) = \\int_x^\\infty u\\,dv = \\Big[ uv \\Big]_x^{\\infty} - \\int_x^{\\infty} v\\,du = \\Big[ -\\frac{e^{-t}}{t} \\Big]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt.",
          explanation:
            "Substituting into \\( \\int u\\,dv=[uv]-\\int v\\,du \\) gives the boundary bracket \\( [-e^{-t}/t] \\) and a new integral. The new integral is \\( -\\int(-e^{-t})(-t^{-2})\\,dt=-\\int e^{-t}/t^2\\,dt \\): the two minus signs from \\( v \\) and \\( du \\) multiply to \\( + \\), and the leading \\( -\\int v\\,du \\) supplies the overall minus. The fresh integrand carries an extra \\( 1/t \\), so it is genuinely smaller for large \\( t \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the boundary term.",
          workingLatex:
            "\\Big[ -\\frac{e^{-t}}{t} \\Big]_x^{\\infty} = 0 - \\left(-\\frac{e^{-x}}{x}\\right) = \\frac{e^{-x}}{x} \\;\\Rightarrow\\; E_1(x) = \\frac{e^{-x}}{x} - \\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt.",
          explanation:
            "At \\( t\\to\\infty \\) the term \\( e^{-t}/t\\to0 \\) because the exponential beats the algebraic factor; at the lower limit \\( t=x \\) it contributes \\( -e^{-x}/x \\), which the bracket's leading minus turns positive. This delivers the leading asymptotic term \\( e^{-x}/x \\), the dominant behaviour of \\( E_1 \\) as \\( x\\to\\infty \\).",
        },
        {
          stepNumber: 5,
          description: "Integrate by parts a second time.",
          workingLatex:
            "u=\\frac{1}{t^2},\\ dv=e^{-t}dt \\;\\Rightarrow\\; \\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt = \\Big[-\\frac{e^{-t}}{t^2}\\Big]_x^\\infty - 2\\int_x^{\\infty}\\frac{e^{-t}}{t^3}\\,dt = \\frac{e^{-x}}{x^2} - 2\\int_x^{\\infty}\\frac{e^{-t}}{t^3}\\,dt.",
          explanation:
            "Repeat the same scheme on the remaining integral with \\( u=1/t^2 \\), so \\( du=-2t^{-3}dt \\) and again \\( v=-e^{-t} \\). The boundary term evaluates exactly as before to \\( e^{-x}/x^2 \\), and the factor \\( 2 \\) from differentiating \\( t^{-2} \\) is pulled out in front of the next, even-smaller integral. Each pass thus drops one more power of \\( x \\) and multiplies the numerator by the next integer.",
        },
        {
          stepNumber: 6,
          description: "Substitute back to get two terms.",
          workingLatex:
            "E_1(x) = \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^2} + 2\\int_x^{\\infty}\\frac{e^{-t}}{t^3}\\,dt.",
          explanation:
            "Insert the result of step 5 into the expression from step 4. The minus sign in front of the integral flips the \\( +e^{-x}/x^2 \\) boundary term to \\( -e^{-x}/x^2 \\), giving the second asymptotic term, and leaves a smaller integral with a coefficient \\( +2 \\). One more pass will produce the third term.",
        },
        {
          stepNumber: 7,
          description: "One more pass and factor out \\( e^{-x} \\).",
          workingLatex:
            "2\\int_x^\\infty\\frac{e^{-t}}{t^3}\\,dt = \\frac{2e^{-x}}{x^3} - 6\\int_x^\\infty\\frac{e^{-t}}{t^4}\\,dt \\;\\Rightarrow\\; E_1(x) = e^{-x}\\left( \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots \\right).",
          explanation:
            "A third integration by parts (with \\( u=1/t^3 \\), giving the factor \\( 3 \\), so \\( 2\\cdot3=6 \\)) produces the boundary term \\( 2e^{-x}/x^3 \\). Factoring \\( e^{-x} \\) out of the three terms, the numerators are \\( 1,1,2 \\), i.e. \\( 0!,1!,2! \\), with strictly alternating signs — exactly the pattern the IBP recursion generates.",
        },
        {
          stepNumber: 8,
          description: "State the general term.",
          workingLatex:
            "E_1(x) \\sim e^{-x}\\sum_{n=0}^{\\infty} \\frac{(-1)^n\\,n!}{x^{n+1}}.",
          explanation:
            "The pattern \\( (-1)^n n! \\) over \\( x^{n+1} \\) is the standard asymptotic series for \\( E_1 \\); it is the same divergent factorial series met throughout this topic, here generated by integration by parts. It diverges for every fixed \\( x \\) (the ratio of terms is \\( (n+1)/x\\to\\infty \\)) yet is optimally accurate when truncated near \\( n\\approx x \\). Sanity check at \\( x=5 \\): the four-term sum (through \\( n=3 \\)) gives \\( 1.121\\times10^{-3} \\) against the exact \\( E_1(5)=1.148\\times10^{-3} \\), a per-mille agreement consistent with truncating just before the least term.",
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
          description: "Extract coefficients by the Poincaré limit.",
          workingLatex:
            "\\beta_k = \\lim_{x\\to 0^{+}} \\frac{e(x) - \\sum_{j=0}^{k-1}\\beta_j x^j}{x^k}.",
          explanation:
            "For an asymptotic power series the coefficients are determined one at a time by this limit, which is Poincaré's very definition of \\( e(x)\\sim\\sum\\beta_k x^k \\): subtract the terms already known, divide by \\( x^k \\), and let \\( x\\to0^{+} \\). The formula presupposes the lower coefficients are in hand, so it is naturally read as an induction. We will show each limit is zero in turn, starting from \\( k=0 \\).",
        },
        {
          stepNumber: 2,
          description: "Compute the leading limit \\( \\beta_0 \\).",
          workingLatex: "\\beta_0 = \\lim_{x\\to 0^{+}} e^{-1/x} = 0.",
          explanation:
            "As \\( x\\to 0^{+} \\) the exponent \\( -1/x\\to-\\infty \\), so \\( e^{-1/x}\\to 0 \\) and the constant term vanishes. This base case does more than fix \\( \\beta_0 \\): because it is zero, the subtracted partial sum in every later limit reduces to nothing, leaving just \\( e^{-1/x} \\) in the numerator. That is what makes the induction clean rather than accumulating messy lower-order terms.",
        },
        {
          stepNumber: 3,
          description: "Reduce the general limit under the inductive hypothesis.",
          workingLatex:
            "\\beta_0=\\cdots=\\beta_{k-1}=0 \\;\\Rightarrow\\; \\beta_k = \\lim_{x\\to 0^{+}} \\frac{e^{-1/x} - 0}{x^k} = \\lim_{x\\to 0^{+}} \\frac{e^{-1/x}}{x^k}.",
          explanation:
            "Assume inductively that every earlier coefficient is zero. Then the subtracted sum vanishes identically and the defining limit collapses to \\( \\beta_k=\\lim e^{-1/x}/x^k \\). As \\( x\\to0^{+} \\) the numerator \\( \\to0 \\) and the denominator \\( \\to0 \\), an indeterminate \\( 0/0 \\) form, so we cannot read off the value directly and must recast it first.",
        },
        {
          stepNumber: 4,
          description: "Substitute \\( s=1/x \\): variable and limit direction.",
          workingLatex:
            "s = \\frac{1}{x} \\;\\Rightarrow\\; \\frac{1}{x^k} = s^{k}, \\quad e^{-1/x}=e^{-s}; \\qquad x\\to0^{+}\\;\\Longleftrightarrow\\; s\\to+\\infty.",
          explanation:
            "Setting \\( s=1/x \\) converts the awkward small-\\( x \\) indeterminate form into a clean large-\\( s \\) limit. The reciprocal power \\( 1/x^k \\) becomes \\( s^k \\), the exponential \\( e^{-1/x} \\) becomes \\( e^{-s} \\), and crucially the limit direction flips: \\( x\\to0^{+} \\) corresponds to \\( s\\to+\\infty \\). Tracking that flip is the one place the substitution can go wrong.",
        },
        {
          stepNumber: 5,
          description: "Assemble and evaluate the limit.",
          workingLatex:
            "\\beta_k = \\lim_{s\\to\\infty} s^k e^{-s} = 0 \\quad \\text{for every fixed } k.",
          explanation:
            "The recast limit is \\( s^k e^{-s} \\), where exponential decay beats any fixed power: \\( e^{-s} \\) drives the product to zero faster than \\( s^k \\) can lift it (apply L'Hôpital \\( k \\) times, or note \\( s^k e^{-s}\\le k!\\,e^{-s/2} \\) for large \\( s \\)). Hence \\( \\beta_k=0 \\), completing the induction: every coefficient vanishes.",
        },
        {
          stepNumber: 6,
          description: "State the coefficient and the moral.",
          workingLatex: "\\beta_2 = 0; \\qquad e(x) \\sim 0 + 0\\cdot x + 0\\cdot x^2 + \\cdots.",
          explanation:
            "In particular \\( \\beta_2=0 \\); indeed the nonzero, strictly positive function \\( e^{-1/x} \\) has the identically-zero asymptotic series. So a function is emphatically not recoverable from its asymptotic coefficients — any \\( e^{-1/x} \\) (\"exponentially small\", \"beyond all orders\") term is completely invisible to the power-series expansion. This is exactly the non-uniqueness that Borel summation is designed to repair, by reconstructing the function rather than just its coefficients.",
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
            "Demanding that \\( f(z)\\cdot\\frac{1}{f(z)} \\) expand as the pure constant \\( 1 \\) forces the coefficient of every \\( z^{-n} \\) with \\( n\\ge1 \\) to vanish, and the coefficient of \\( z^{0} \\) to equal \\( 1 \\). Matching powers in the Cauchy product \\( (\\sum a_j z^{-j})(\\frac{1}{a_0}\\sum d_n z^{-n}) \\) yields exactly this recurrence, with \\( d_0=1 \\) fixing the constant term. Because the relation at order \\( n \\) involves \\( d_n \\) only linearly, it can be solved one coefficient at a time.",
        },
        {
          stepNumber: 2,
          description: "Write out the \\( n=1 \\) equation.",
          workingLatex: "\\sum_{k=0}^{1} d_{1-k}\\,a_k = d_1 a_0 + d_0 a_1 = 0.",
          explanation:
            "Taking \\( n=1 \\) in the convolution leaves just two terms, \\( k=0 \\) giving \\( d_1 a_0 \\) and \\( k=1 \\) giving \\( d_0 a_1 \\). With \\( d_0=1 \\) already fixed by step 1, this is a single linear equation in the lone unknown \\( d_1 \\), which we can solve immediately.",
        },
        {
          stepNumber: 3,
          description: "Solve for \\( d_1 \\).",
          workingLatex: "d_1 a_0 = -d_0 a_1 = -a_1 \\;\\Rightarrow\\; d_1 = -\\frac{a_1}{a_0}.",
          explanation:
            "Rearrange and divide by \\( a_0 \\); this division is legitimate precisely because the hypothesis \\( a_0\\neq0 \\) guarantees \\( f \\) does not vanish at infinity, so \\( 1/f \\) has a genuine expansion. The result \\( d_1=-a_1/a_0 \\) says the first correction of the reciprocal exactly undoes the first correction of \\( f \\), as one would expect on dimensional grounds.",
        },
        {
          stepNumber: 4,
          description: "Write out the \\( n=2 \\) equation.",
          workingLatex:
            "\\sum_{k=0}^{2} d_{2-k}\\,a_k = d_2 a_0 + d_1 a_1 + d_0 a_2 = 0.",
          explanation:
            "Now take \\( n=2 \\), giving three terms from \\( k=0,1,2 \\). The only new unknown is \\( d_2 \\), because \\( d_0 \\) and \\( d_1 \\) are already determined. This is the triangular (lower-triangular) structure of the recurrence: each coefficient depends solely on coefficients with smaller index, so the system never needs to be solved simultaneously.",
        },
        {
          stepNumber: 5,
          description: "Solve for \\( d_2 \\).",
          workingLatex:
            "d_2 a_0 = -d_1 a_1 - d_0 a_2 = -\\!\\left(-\\frac{a_1}{a_0}\\right)\\!a_1 - a_2 = \\frac{a_1^2}{a_0} - a_2 \\;\\Rightarrow\\; d_2 = \\frac{a_1^2}{a_0^2} - \\frac{a_2}{a_0}.",
          explanation:
            "Substitute the known \\( d_1=-a_1/a_0 \\) and \\( d_0=1 \\). The product \\( -d_1 a_1 \\) becomes \\( +a_1^2/a_0 \\) — mind the sign, it is positive because \\( d_1 \\) is itself negative, a place double minus signs trip people up. Dividing through by \\( a_0 \\) isolates \\( d_2 \\).",
        },
        {
          stepNumber: 6,
          description: "State the three coefficients.",
          workingLatex:
            "d_0 = 1, \\qquad d_1 = -\\frac{a_1}{a_0}, \\qquad d_2 = \\frac{a_1^2 - a_0 a_2}{a_0^2}.",
          explanation:
            "Combining \\( d_2 \\) over a common denominator gives the tidy \\( (a_1^2-a_0a_2)/a_0^2 \\). Together these reproduce \\( 1/f = \\frac{1}{a_0}\\big(1 - \\frac{a_1}{a_0 z} + \\frac{a_1^2-a_0a_2}{a_0^2 z^2}+\\cdots\\big) \\). The construction is purely formal and never used convergence anywhere, so it remains valid as an asymptotic series even when \\( f \\)'s own series diverges — reciprocation, like addition and multiplication, is a legitimate operation on asymptotic series.",
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
            "There are two clean routes to this expansion. Differentiating the geometric series \\( \\sum(-xt)^n=1/(1+xt) \\) with respect to \\( w=xt \\) and using \\( -\\tfrac{d}{dw}\\frac{1}{1+w}=\\frac{1}{(1+w)^2} \\) brings down the factor \\( (n+1) \\); equivalently, the binomial series \\( (1+w)^{-2}=\\sum\\binom{-2}{n}w^n \\) gives \\( \\binom{-2}{n}=(-1)^n(n+1) \\). Either way the coefficient of \\( (xt)^n \\) is \\( (-1)^n(n+1) \\). As before this is a formal expansion, valid only near \\( t=0 \\).",
        },
        {
          stepNumber: 2,
          description: "Insert the expansion and interchange.",
          workingLatex:
            "G(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n (n+1)\\,x^n \\int_0^\\infty e^{-t} t^n\\,dt.",
          explanation:
            "Substitute the series into \\( G(x)=\\int_0^\\infty e^{-t}/(1+xt)^2\\,dt \\), pull the constants \\( (-1)^n(n+1)x^n \\) out, and swap the sum with the integral. This interchange is the same strictly non-uniform (and hence merely formal) step that produces the Euler series, so the result is asymptotic, not exact, and each surviving term is a Gamma integral in \\( t \\).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the Gamma integral.",
          workingLatex:
            "\\int_0^\\infty e^{-t} t^n\\,dt = \\Gamma(n+1) = n!.",
          explanation:
            "Each integral is the standard \\( \\Gamma(n+1)=n! \\). Substituting it injects factorial growth into the coefficients, exactly as in the plain Euler integral; the squared denominator has merely supplied the extra weight \\( (n+1) \\) on top.",
        },
        {
          stepNumber: 4,
          description: "Simplify the coefficients.",
          workingLatex:
            "(n+1)\\cdot n! = (n+1)! \\;\\Rightarrow\\; G(x)\\sim\\sum_{n=0}^{\\infty}(-1)^n (n+1)!\\,x^n.",
          explanation:
            "The product \\( (n+1)\\cdot n!=(n+1)! \\) absorbs the extra factor cleanly into a single shifted factorial. The coefficients now grow like \\( (n+1)! \\), faster even than Euler's \\( n! \\), so by the ratio test the series diverges for every \\( x\\neq0 \\) — a more violently divergent cousin of the Euler series.",
        },
        {
          stepNumber: 5,
          description: "Relate \\( G \\) to a derivative of \\( F \\).",
          workingLatex:
            "\\frac{d}{dx}\\!\\left[\\frac{x}{1+xt}\\right] = \\frac{(1+xt)\\cdot 1-x\\cdot t}{(1+xt)^2} = \\frac{1}{(1+xt)^2}.",
          explanation:
            "Differentiating \\( x/(1+xt) \\) with respect to \\( x \\) by the quotient rule, the numerator \\( (1+xt)-xt=1 \\) collapses to a constant, giving exactly the integrand of \\( G \\). This is an honest algebraic identity between the integrands — not a formal series statement — so it links \\( G \\) and \\( F \\) at the level of the genuine functions, which is what makes the next step rigorous.",
        },
        {
          stepNumber: 6,
          description: "State the series and the connection.",
          workingLatex:
            "G(x) = \\frac{d}{dx}\\big[x\\,F(x)\\big], \\qquad G(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n (n+1)!\\,x^n = \\frac{d}{dx}\\Big[\\sum_{n\\ge0}(-1)^n n!\\,x^{n+1}\\Big].",
          explanation:
            "Integrating the integrand identity of step 5 over \\( t\\in[0,\\infty) \\) gives \\( G(x)=\\frac{d}{dx}[xF(x)] \\). Comparing coefficients with \\( F\\sim\\sum(-1)^n n!x^n \\), differentiating \\( xF\\sim\\sum(-1)^n n! x^{n+1} \\) term by term lands the coefficient \\( (-1)^n(n+1)! \\) on \\( x^n \\), matching \\( G \\) exactly. So \\( G \\) is the termwise derivative of the Euler series for \\( xF \\) — a concrete instance of the fact that asymptotic power series may be differentiated term by term when the differentiated function itself has an asymptotic expansion.",
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
            "Watson's lemma says the large-\\( x \\) behaviour of \\( \\int_0^\\infty e^{-xt} g(t)\\,dt \\) is controlled entirely by the Taylor data of the amplitude \\( g \\) at the endpoint \\( t=0 \\), because the kernel \\( e^{-xt} \\) decays so fast that only a shrinking neighbourhood of the origin contributes. Here \\( g(t)=1/(1+t) \\) expands geometrically with ratio \\( -t \\). We only need its coefficients at \\( t=0 \\), so the restriction \\( |t|<1 \\) is no obstacle.",
        },
        {
          stepNumber: 2,
          description: "Substitute \\( s=xt \\) in the moment integral.",
          workingLatex:
            "\\int_0^{\\infty} e^{-xt}\\,t^n\\,dt \\;\\stackrel{s=xt}{=}\\; \\int_0^\\infty e^{-s}\\Big(\\frac{s}{x}\\Big)^n\\frac{ds}{x} = \\frac{1}{x^{n+1}}\\int_0^\\infty e^{-s}s^n\\,ds.",
          explanation:
            "To evaluate the moment \\( \\int_0^\\infty e^{-xt}t^n\\,dt \\) put \\( s=xt \\), so \\( t=s/x \\) and \\( dt=ds/x \\); the limits stay \\( 0 \\) and \\( \\infty \\) since \\( x>0 \\). Each \\( t \\) contributes a factor \\( 1/x \\) — there are \\( n \\) of them from \\( t^n \\) and one more from \\( dt \\), giving the overall \\( x^{-(n+1)} \\). This rescaling is exactly what turns the \\( x \\)-dependence into inverse powers.",
        },
        {
          stepNumber: 3,
          description: "Recognise the Gamma function.",
          workingLatex:
            "\\int_0^\\infty e^{-s}s^n\\,ds = \\Gamma(n+1)=n! \\;\\Rightarrow\\; \\int_0^{\\infty} e^{-xt}\\,t^n\\,dt = \\frac{n!}{x^{n+1}}.",
          explanation:
            "The rescaled integral is the standard \\( \\Gamma(n+1)=n! \\), so the moment is \\( n!/x^{n+1} \\). This is the engine of Watson's lemma: it converts each Taylor monomial of \\( g \\) into one term of an inverse-power series in \\( x \\). The result is asymptotic even though \\( g \\)'s geometric expansion only converges for \\( |t|<1 \\), because the lemma reads off only the local behaviour at \\( t=0 \\).",
        },
        {
          stepNumber: 4,
          description: "Combine sign and moment for each term.",
          workingLatex:
            "(-1)^n\\cdot\\frac{n!}{x^{n+1}}: \\quad n=0\\to\\frac{1}{x}, \\quad n=1\\to -\\frac{1}{x^2}, \\quad n=2\\to \\frac{2}{x^3}.",
          explanation:
            "Multiply the Taylor coefficient \\( (-1)^n \\) by the moment \\( n!/x^{n+1} \\) term by term. The \\( n=0 \\) term is \\( 0!/x=1/x \\), the \\( n=1 \\) term is \\( -1!/x^2=-1/x^2 \\), and the \\( n=2 \\) term is \\( +2!/x^3=2/x^3 \\). The two leading terms requested are therefore \\( 1/x-1/x^2 \\).",
        },
        {
          stepNumber: 5,
          description: "Read off the leading terms.",
          workingLatex:
            "I(x) \\sim \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots.",
          explanation:
            "Stringing the contributions together gives the start of the expansion. The factorial numerators \\( n! \\) grow without bound, so for any fixed \\( x \\) the terms eventually increase in size — a first warning that this series, like Euler's, is divergent rather than convergent.",
        },
        {
          stepNumber: 6,
          description: "State the full series.",
          workingLatex:
            "I(x) \\sim \\sum_{n=0}^{\\infty} \\frac{(-1)^n\\,n!}{x^{n+1}}.",
          explanation:
            "The general term is \\( (-1)^n n!/x^{n+1} \\). Note that the change of variable \\( s=xt \\) in the definition shows \\( I(x)=e^{x}E_1(x) \\) exactly, so this is the same exponential-integral / Euler series met via integration by parts in another question — here obtained instead through Watson's lemma. The two derivations agreeing is a satisfying internal consistency check on the method.",
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
            "By the definition of an asymptotic expansion, \\( f(x)-a_0=o(1) \\) as \\( x\\to0^{+} \\), so the difference vanishes and the constant term must equal the limiting value of \\( f \\). There is no freedom whatsoever in \\( a_0 \\): a single limit pins it down. This is the seed of the uniqueness argument — every later coefficient will be forced in the same way.",
        },
        {
          stepNumber: 2,
          description: "Peel off \\( a_0 \\) and rescale for \\( a_1 \\).",
          workingLatex:
            "a_1 = \\lim_{x\\to 0^{+}} \\frac{f(x)-a_0}{x}.",
          explanation:
            "Subtract the now-known \\( a_0 \\) and divide by \\( x \\). Writing \\( f(x)=a_0+a_1x+o(x) \\), the subtraction removes \\( a_0 \\) and the division by \\( x \\) leaves \\( a_1+o(1) \\). Sending \\( x\\to0^{+} \\) kills the \\( o(1) \\) remainder and returns exactly \\( a_1 \\), again with no freedom.",
        },
        {
          stepNumber: 3,
          description: "Generalise the extraction.",
          workingLatex:
            "a_n = \\lim_{x\\to 0^{+}} \\frac{f(x) - \\sum_{j=0}^{n-1} a_j x^j}{x^n}.",
          explanation:
            "Iterating the peel-off, each coefficient is a definite limit constructed from the ones already found. The procedure is recursive: \\( a_n \\) needs \\( a_0,\\dots,a_{n-1} \\), all of which are themselves pinned by earlier limits. So the whole sequence is generated deterministically with no choices made along the way.",
        },
        {
          stepNumber: 4,
          description: "Verify the remainder vanishes.",
          workingLatex:
            "f(x)-\\sum_{j=0}^{n-1}a_j x^j = a_n x^n + o(x^n) \\;\\Rightarrow\\; \\frac{f - \\sum_{j<n} a_j x^j}{x^n} = a_n + o(1)\\to a_n.",
          explanation:
            "This is the step that makes the extraction work: by the definition of the asymptotic expansion, after removing the first \\( n \\) terms the error is \\( o(x^n) \\), so dividing by \\( x^n \\) leaves \\( a_n \\) plus a quantity tending to zero. The limit therefore exists and equals \\( a_n \\). Because limits, when they exist, are unique, the entire sequence \\( \\{a_n\\} \\) is uniquely determined by \\( f \\) — and nothing here assumed the series converges.",
        },
        {
          stepNumber: 5,
          description: "Specialise to \\( a_2 \\) and draw the moral.",
          workingLatex:
            "a_2 = \\lim_{x\\to 0^{+}} \\frac{f(x) - a_0 - a_1 x}{x^2}.",
          explanation:
            "Setting \\( n=2 \\) gives \\( a_2 \\) explicitly as a single limit. The crucial caveat is that uniqueness of the coefficients does NOT mean \\( f \\) is determined by them: \\( f \\) and \\( f+e^{-1/x} \\) share every \\( a_n \\) because \\( e^{-1/x}=o(x^n) \\) for all \\( n \\). This asymmetry — coefficients unique, function not — is precisely the gap that Borel resummation is built to close.",
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
            "Write each factor as its partial sum to order \\( N \\) plus an asymptotically small remainder \\( o(z^{-N}) \\); this is exactly the content of \\( f\\sim\\sum a_n z^{-n} \\). Working with finite truncations and explicitly tracked tails is the rigorous way to manipulate series that may not converge — we never add up infinitely many terms, we only ever multiply two polynomials and bound the leftovers.",
        },
        {
          stepNumber: 2,
          description: "Discard the remainder cross-terms.",
          workingLatex:
            "\\big(\\text{partial sum}\\big)\\cdot o(z^{-N}) = o(z^{-N}), \\qquad o(z^{-N})\\cdot o(z^{-N}) = o(z^{-N}).",
          explanation:
            "Expanding the product gives four pieces; three of them involve at least one remainder. A partial sum is \\( O(1) \\) and \\( O(1)\\cdot o(z^{-N})=o(z^{-N}) \\), while \\( o(z^{-N})\\cdot o(z^{-N}) \\) is even smaller, so all three are \\( o(z^{-N}) \\). None of them can affect any coefficient of \\( z^{-n} \\) with \\( n\\le N \\), so only the product of the two polynomial parts survives at the orders we care about.",
        },
        {
          stepNumber: 3,
          description: "Multiply the monomials.",
          workingLatex:
            "\\frac{a_j}{z^j}\\cdot\\frac{b_k}{z^k} = \\frac{a_j b_k}{z^{j+k}}.",
          explanation:
            "Exponents of \\( 1/z \\) add under multiplication, so a term of index \\( j \\) from \\( f \\) times one of index \\( k \\) from \\( g \\) contributes at combined order \\( j+k \\). This single rule is all the bookkeeping needed to decide which products pile up at a given inverse power.",
        },
        {
          stepNumber: 4,
          description: "Group by total order \\( n=j+k \\).",
          workingLatex:
            "c_n = \\sum_{k=0}^{n} a_{n-k}\\,b_k.",
          explanation:
            "Collecting every product landing on \\( z^{-n} \\) means summing \\( a_j b_k \\) over all pairs with \\( j+k=n \\), i.e. \\( j=n-k \\) as \\( k \\) runs \\( 0,\\dots,n \\) — the discrete convolution of the two coefficient sequences. Because the discarded terms of step 2 are uniformly subdominant for every \\( N\\ge n \\), this is a rigorous asymptotic identity, not just a formal one.",
        },
        {
          stepNumber: 5,
          description: "Write \\( c_2 \\).",
          workingLatex:
            "c_2 = \\sum_{k=0}^{2} a_{2-k}b_k = a_2 b_0 + a_1 b_1 + a_0 b_2.",
          explanation:
            "Setting \\( n=2 \\) lists the three pairs \\( (j,k)=(2,0),(1,1),(0,2) \\), giving \\( a_2b_0+a_1b_1+a_0b_2 \\). The same convolution rule holds whether the underlying series converge or merely diverge asymptotically — like addition and reciprocation, multiplication of asymptotic series is always legitimate, since it only ever manipulates finite truncations.",
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
            "As \\( x\\to0 \\) the argument \\( u=x^n \\) is also small, so the Maclaurin series of \\( \\cosh \\) applies. Only even powers of \\( u \\) appear because \\( \\cosh \\) is an even function — a fact that controls which power of \\( x \\) ultimately survives. To classify the family \\( \\{\\phi_n\\} \\) we will need only the leading behaviour of each \\( \\phi_n \\), so the higher terms are kept just to confirm they are subdominant.",
        },
        {
          stepNumber: 2,
          description: "Substitute and subtract from 1.",
          workingLatex:
            "\\phi_n(x) = 1 - \\cosh(x^n) = 1 - \\left(1 + \\frac{x^{2n}}{2} + \\frac{x^{4n}}{24} + \\cdots\\right) = -\\frac{x^{2n}}{2} - \\frac{x^{4n}}{24} - \\cdots.",
          explanation:
            "Putting \\( u=x^n \\) into the series and subtracting from \\( 1 \\) cancels the constant exactly, leaving only the even-power tail with an overall minus sign. The lowest surviving power is \\( x^{2n} \\), since the first non-constant term of \\( \\cosh \\) is \\( u^2/2=x^{2n}/2 \\). The sign matters for interpreting \\( \\phi_n \\) but, as the next steps show, not for the asymptotic-sequence test, which sees only magnitudes.",
        },
        {
          stepNumber: 3,
          description: "Read off the leading order of \\( \\phi_n \\).",
          workingLatex:
            "\\phi_n(x) \\sim -\\frac{1}{2}\\,x^{2n} \\quad (x\\to0).",
          explanation:
            "Near the origin the lowest power dominates the tail (the next term \\( x^{4n} \\) is smaller by a factor \\( x^{2n}\\to0 \\)), so \\( \\phi_n \\) behaves like the fixed multiple \\( -\\tfrac12 x^{2n} \\). Each member of the family is therefore asymptotically a single power of \\( x \\), with the exponent \\( 2n \\) doubling the index — this is the gauge against which we compare consecutive members.",
        },
        {
          stepNumber: 4,
          description: "Form the ratio of consecutive members.",
          workingLatex:
            "\\frac{\\phi_{n+1}(x)}{\\phi_n(x)} \\sim \\frac{-\\tfrac12 x^{2(n+1)}}{-\\tfrac12 x^{2n}}.",
          explanation:
            "The test for an asymptotic sequence is whether each member is negligible against its predecessor, which is measured by their ratio. Substitute the leading orders from step 3 for both \\( \\phi_{n+1} \\) and \\( \\phi_n \\); the higher-order tails are subdominant and do not affect the limit, so using the leading terms is sufficient.",
        },
        {
          stepNumber: 5,
          description: "Simplify the ratio.",
          workingLatex:
            "\\frac{-\\tfrac12 x^{2(n+1)}}{-\\tfrac12 x^{2n}} = x^{\\,2(n+1)-2n} = x^{2} \\to 0 \\quad(x\\to0).",
          explanation:
            "The constants \\( -\\tfrac12 \\) cancel (in particular the signs cancel, so the ratio is positive) and the powers subtract to leave \\( x^{2(n+1)-2n}=x^2 \\), independent of \\( n \\). As \\( x\\to0 \\) this tends to \\( 0 \\), so each member is genuinely smaller than the one before it near the origin.",
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex:
            "\\phi_{n+1}(x) = o\\big(\\phi_n(x)\\big) \\text{ as } x\\to 0 \\;\\Rightarrow\\; \\{\\phi_n\\} \\text{ is an asymptotic sequence}.",
          explanation:
            "The defining condition \\( \\phi_{n+1}=o(\\phi_n) \\) is exactly that the ratio tends to \\( 0 \\), which holds for every \\( n \\) since the limit \\( x^2\\to0 \\) did not depend on \\( n \\). Hence the family is a valid asymptotic sequence, scale-equivalent to the standard gauge \\( \\{x^{2n}\\} \\) — so one could expand functions in \\( \\{\\phi_n\\} \\) just as well as in powers of \\( x^2 \\).",
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
            "\\sum_{n=0}^{\\infty}(-1)^n \\;\\rightsquigarrow\\; S(z) = \\sum_{n=0}^{\\infty} (-1)^n z^n, \\qquad |z|<1.",
          explanation:
            "Grandi's series \\( 1-1+1-1+\\cdots \\) is the boundary case \\( z=1 \\) of the family \\( \\sum(-1)^n z^n \\). Inserting the factor \\( z^n \\), with \\( |z|<1 \\), damps the terms enough to make the sum genuinely converge — this is the Abel regularisation. We will sum it in closed form and only afterwards send \\( z\\to1 \\).",
        },
        {
          stepNumber: 2,
          description: "Sum the regularised series.",
          workingLatex:
            "S(z) = \\sum_{n=0}^{\\infty}(-z)^n = \\frac{1}{1-(-z)} = \\frac{1}{1+z}, \\qquad |z|<1.",
          explanation:
            "Writing \\( (-1)^n z^n=(-z)^n \\) makes it geometric with ratio \\( r=-z \\), and \\( \\sum r^n=1/(1-r) \\) gives \\( 1/(1+z) \\); mind the double negative \\( 1-(-z)=1+z \\). This closed form is analytic everywhere except the pole at \\( z=-1 \\), so it provides a value at \\( z=1 \\) even though the series defining it only converges inside the disc.",
        },
        {
          stepNumber: 3,
          description: "Take the radial limit.",
          workingLatex:
            "\\lim_{z\\to 1^{-}} \\frac{1}{1+z} = \\frac{1}{1+1} = \\frac{1}{2}.",
          explanation:
            "Abel summation is defined as the limit \\( z\\to1^- \\) along the real axis of the convergent closed form. Since \\( 1/(1+z) \\) is continuous at \\( z=1 \\) (the pole is at \\( z=-1 \\)), the limit simply substitutes \\( z=1 \\), giving \\( 1/2 \\). Approaching from inside the disc matters because the closed form is only guaranteed to equal the series there; the limit then carries the value out to the boundary.",
        },
        {
          stepNumber: 4,
          description: "Contrast with the partial sums.",
          workingLatex:
            "s_0=1,\\ s_1=0,\\ s_2=1,\\ s_3=0,\\dots \\quad\\text{(no limit)};\\qquad 1-1+1-1+\\cdots\\;\\xrightarrow{\\text{Abel}}\\;\\frac12.",
          explanation:
            "The ordinary partial sums oscillate between \\( 1 \\) and \\( 0 \\) and never settle, so the series diverges in the usual sense. Abel summation is regular — it agrees with ordinary convergence whenever the latter exists — and here assigns the value \\( 1/2 \\), the mean of the two oscillating partial sums. Reassuringly, Cesàro averaging and Borel summation give the very same \\( 1/2 \\), as any two regular methods must when they both assign a value.",
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
            "The statement \\( f=o(\\phi) \\) means \\( f/\\phi\\to 0 \\) as \\( t\\to\\infty \\); unpacked with epsilons, for any chosen \\( \\varepsilon>0 \\) there is a threshold \\( X \\) beyond which \\( |f|<\\varepsilon\\phi \\). The whole proof is an \\( \\varepsilon \\)-\\( X \\) argument: fix an arbitrary \\( \\varepsilon \\) now, obtain its companion \\( X \\), and carry both through to the end, where the arbitrariness of \\( \\varepsilon \\) delivers the conclusion.",
        },
        {
          stepNumber: 2,
          description: "Split the integral at the threshold.",
          workingLatex:
            "\\left|\\int_a^{x} f\\,dt\\right| \\le \\underbrace{\\left|\\int_a^{X} f\\,dt\\right|}_{=:C} + \\int_X^{x} |f(t)|\\,dt.",
          explanation:
            "Break the range at \\( X \\) into a fixed window \\( [a,X] \\) and a growing tail \\( [X,x] \\), then apply the triangle inequality for integrals. The window integral is a constant \\( C \\) (its limits \\( a \\) and \\( X \\) are both fixed once \\( \\varepsilon \\) is chosen) and so cannot grow with \\( x \\); the smallness hypothesis only holds past \\( X \\), which is precisely why the split is at \\( X \\) and not at \\( a \\).",
        },
        {
          stepNumber: 3,
          description: "Bound the tail using step 1.",
          workingLatex:
            "\\int_X^{x} |f(t)|\\,dt \\le \\int_X^{x}\\varepsilon\\,\\phi(t)\\,dt = \\varepsilon\\int_X^{x}\\phi(t)\\,dt.",
          explanation:
            "On the tail every \\( t\\ge X \\), so the pointwise bound \\( |f(t)|<\\varepsilon\\phi(t) \\) from step 1 applies throughout. Integrating an inequality between integrable functions preserves it, and the constant \\( \\varepsilon \\) factors out, bounding the tail by \\( \\varepsilon\\int_X^x\\phi \\). This is where the hypothesis is actually spent.",
        },
        {
          stepNumber: 4,
          description: "Use monotonicity of \\( \\phi \\).",
          workingLatex:
            "\\int_X^{x}\\phi(t)\\,dt \\le (x-X)\\,\\phi(x) \\le x\\,\\phi(x).",
          explanation:
            "Because \\( \\phi \\) is non-decreasing, \\( \\phi(t)\\le\\phi(x) \\) for all \\( t \\) in \\( [X,x] \\), so the integral is at most the interval length \\( (x-X) \\) times the largest value \\( \\phi(x) \\). Then \\( x-X\\le x \\) gives the clean bound \\( x\\phi(x) \\) — exactly the scale named in the conclusion, which is why we coarsen \\( x-X \\) up to \\( x \\) rather than keep it sharp.",
        },
        {
          stepNumber: 5,
          description: "Divide through and take limits.",
          workingLatex:
            "\\frac{1}{x\\phi(x)}\\left|\\int_a^x f\\,dt\\right| \\le \\frac{C}{x\\phi(x)} + \\varepsilon \\;\\xrightarrow{x\\to\\infty}\\; \\varepsilon.",
          explanation:
            "Assemble steps 2–4 and divide by \\( x\\phi(x) \\). The constant term \\( C/(x\\phi(x))\\to0 \\) because \\( x\\phi(x)\\to\\infty \\) (with \\( \\phi>0 \\) bounded below by \\( \\phi(a)>0 \\) and \\( x\\to\\infty \\)), leaving \\( \\le\\varepsilon \\) in the limit. Since \\( \\varepsilon>0 \\) was arbitrary, the limsup of the non-negative ratio is \\( 0 \\), hence the ratio tends to \\( 0 \\) — which is exactly \\( \\int_a^x f = o(x\\phi(x)) \\). This is the integral analogue of the warning that asymptotic relations may be integrated (giving an extra factor of \\( x \\)) but not, in general, differentiated.",
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
          description: "Divide the coefficients by \\( n! \\).",
          workingLatex:
            "\\frac{a_n}{n!} = \\frac{(-1)^n n!}{n!} = (-1)^n.",
          explanation:
            "The Borel transform is \\( B(t)=\\sum (a_n/n!)t^n \\), so the first move is to divide \\( a_n=(-1)^n n! \\) by \\( n! \\). The factorial cancels exactly, leaving the bounded \\( (-1)^n \\). This is the transform's defining service: it removes the precise factorial growth that gave the original series radius zero, replacing it with coefficients of unit size.",
        },
        {
          stepNumber: 2,
          description: "Sum the Borel transform.",
          workingLatex:
            "B(t) = \\sum_{n=0}^{\\infty}(-1)^n t^n = \\sum_{n=0}^{\\infty}(-t)^n = \\frac{1}{1+t}.",
          explanation:
            "With coefficients \\( (-1)^n \\) the transform is geometric with ratio \\( -t \\), summing to \\( 1/(1+t) \\) for \\( |t|<1 \\) (note \\( 1-(-t)=1+t \\)). Unlike the divergent original, this series has positive radius of convergence, and its closed form continues analytically to all \\( t\\ge 0 \\), so \\( B \\) is a genuine function on the integration ray we are about to use.",
        },
        {
          stepNumber: 3,
          description: "Check Borel summability.",
          workingLatex:
            "B(t)=\\frac{1}{1+t} \\text{ analytic for } t\\ge 0, \\quad |B(t)|\\le 1, \\quad \\text{pole only at } t=-1.",
          explanation:
            "Borel summability has two requirements: \\( B \\) must be analytic in a neighbourhood of the positive real axis, and it must grow slowly enough that the Laplace integral converges. Here \\( B \\) is bounded by \\( 1 \\) and its only singularity is the pole at \\( t=-1 \\), which sits safely off the ray \\( [0,\\infty) \\). Both conditions hold, so the series is Borel summable — contrast the non-alternating case \\( \\sum n!x^n \\), whose transform \\( 1/(1-t) \\) has a pole exactly on the ray.",
        },
        {
          stepNumber: 4,
          description: "Form the Borel (Laplace) integral.",
          workingLatex:
            "S(x) = \\frac{1}{x}\\int_0^{\\infty} e^{-t/x}\\,B(t)\\,dt = \\frac{1}{x}\\int_0^{\\infty}\\frac{e^{-t/x}}{1+t}\\,dt.",
          explanation:
            "The Borel sum reconstitutes the function by Laplace-transforming \\( B \\) against the kernel \\( e^{-t/x} \\) with prefactor \\( 1/x \\). This operation is the exact inverse of step 1: since \\( \\frac{1}{x}\\int_0^\\infty e^{-t/x}t^n\\,dt=n!\\,x^n \\), feeding the term \\( (-1)^n t^n \\) of \\( B \\) back through the integral returns the original term \\( (-1)^n n!\\,x^n \\). The transform divided by \\( n! \\); the Laplace integral multiplies it back.",
        },
        {
          stepNumber: 5,
          description: "Substitute \\( u=t/x \\) to match \\( F \\).",
          workingLatex:
            "u = \\frac{t}{x} \\;\\Rightarrow\\; t=xu,\\ dt=x\\,du: \\quad S(x) = \\frac{1}{x}\\int_0^{\\infty}\\frac{e^{-u}}{1+xu}\\,x\\,du = \\int_0^{\\infty}\\frac{e^{-u}}{1+xu}\\,du = F(x).",
          explanation:
            "The change of variable \\( u=t/x \\) gives \\( dt=x\\,du \\), the factor \\( x \\) cancels the prefactor \\( 1/x \\), and the denominator \\( 1+t \\) becomes \\( 1+xu \\). The Borel integral has turned into the original Euler integral \\( F(x) \\) exactly. This is the punchline: the Borel sum of the divergent series \\( \\sum(-1)^n n!x^n \\) is precisely the finite, smooth function \\( F \\) that generated it.",
        },
        {
          stepNumber: 6,
          description: "Set \\( x=1 \\) and shift the variable.",
          workingLatex:
            "S(1) = \\int_0^{\\infty}\\frac{e^{-u}}{1+u}\\,du; \\qquad v=1+u \\Rightarrow e^{-u}=e^{-(v-1)}=e\\,e^{-v},\\ u:0\\to\\infty\\Rightarrow v:1\\to\\infty.",
          explanation:
            "At \\( x=1 \\) the Borel sum is \\( F(1) \\). To name it, shift \\( v=1+u \\), which moves the denominator's zero off the integration range and rewrites the weight as \\( e^{-u}=e\\,e^{-v} \\). Pulling the constant \\( e \\) out (not \\( e^{-1} \\) — the exponent is \\( 1-v \\)) is the step where prefactor errors usually creep in.",
        },
        {
          stepNumber: 7,
          description: "Identify \\( E_1 \\) and evaluate.",
          workingLatex:
            "S(1) = e\\int_1^{\\infty}\\frac{e^{-v}}{v}\\,dv = e\\,E_1(1) = 0.5963473623\\ldots.",
          explanation:
            "The shifted integral is \\( E_1(1)=\\int_1^\\infty e^{-v}/v\\,dv \\) by definition, so \\( S(1)=e\\,E_1(1) \\). A direct numerical evaluation of \\( F(1) \\) (mpmath, dps=40) gives \\( 0.5963473623231940\\ldots \\), confirming the closed form. The wildly divergent series \\( 1-1!+2!-3!+\\cdots \\) and the convergent integral land on exactly the same number — the central reassurance that Borel summation reconstructs the right function.",
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
            "For an alternating asymptotic series the truncation error is comparable in size to the first omitted term \\( u_N \\); this is the standard alternating-series estimate, and the rigorous bound \\( |R_N|\\le N!\\,x^N \\) was proved separately in this bank. Optimal truncation chooses \\( N \\) to minimise this term, which from the term-ratio analysis happens near \\( N\\approx 1/x \\). The whole problem reduces to estimating \\( u_N \\) at that index, which requires understanding the factorial.",
        },
        {
          stepNumber: 2,
          description: "Apply Stirling's formula.",
          workingLatex:
            "N! \\sim \\sqrt{2\\pi N}\\,\\left(\\frac{N}{e}\\right)^N.",
          explanation:
            "Since \\( N\\approx1/x \\) is large as \\( x\\to0^{+} \\), Stirling's asymptotic form for the factorial is accurate. The point of invoking it is that it exposes the two competing exponential-in-\\( N \\) factors hidden inside \\( N! \\): the explosive \\( N^N \\) and the decaying \\( e^{-N} \\). Their interplay with \\( x^N \\) is what will produce the exponential smallness, which a bare \\( N! \\) conceals.",
        },
        {
          stepNumber: 3,
          description: "Substitute into the least term.",
          workingLatex:
            "u_N = N!\\,x^N \\sim \\sqrt{2\\pi N}\\,\\left(\\frac{N}{e}\\right)^N x^N.",
          explanation:
            "Insert Stirling's expression for \\( N! \\) into \\( u_N=N!\\,x^N \\). Now the rapidly-growing \\( (N/e)^N \\) sits directly beside the rapidly-shrinking \\( x^N \\). Neither factor alone has a finite limit, so we cannot read off the size yet; the next step combines them into a single base to see how the growth and decay balance.",
        },
        {
          stepNumber: 4,
          description: "Combine the powers.",
          workingLatex:
            "\\left(\\frac{N}{e}\\right)^N x^N = \\left(\\frac{N x}{e}\\right)^N \\;\\Rightarrow\\; u_N \\sim \\sqrt{2\\pi N}\\,\\left(\\frac{N x}{e}\\right)^N.",
          explanation:
            "Gathering \\( N^N x^N=(Nx)^N \\) is the key simplification: the explosive \\( N^N \\) is tamed exactly by the tiny \\( x^N \\) through the single product \\( Nx \\). The entire behaviour now hinges on the value of \\( Nx \\) at the optimal index — and the reason \\( N\\approx1/x \\) was the optimal choice is precisely that it makes \\( Nx\\approx1 \\), poising the base \\( Nx/e \\) at \\( 1/e<1 \\).",
        },
        {
          stepNumber: 5,
          description: "Insert \\( N=1/x \\).",
          workingLatex:
            "Nx = 1 \\;\\Rightarrow\\; \\left(\\frac{Nx}{e}\\right)^N = \\left(\\frac{1}{e}\\right)^{1/x} = e^{-1/x}, \\qquad \\sqrt{2\\pi N} = \\sqrt{\\frac{2\\pi}{x}}.",
          explanation:
            "At the optimal index \\( Nx=1 \\), so the bracket collapses to \\( (1/e)^N=e^{-N}=e^{-1/x} \\), an exponentially small factor. The Stirling prefactor \\( \\sqrt{2\\pi N} \\) becomes the algebraic \\( \\sqrt{2\\pi/x} \\) since \\( N=1/x \\). Treating \\( N=1/x \\) as exact (rather than the nearest integer) is a harmless idealisation here, costing only an \\( O(1) \\) factor that does not affect the exponential order.",
        },
        {
          stepNumber: 6,
          description: "Assemble the optimal error.",
          workingLatex:
            "u_N \\sim \\sqrt{\\frac{2\\pi}{x}}\\;e^{-1/x} = O\\!\\left(x^{-1/2}\\,e^{-1/x}\\right).",
          explanation:
            "Multiplying the algebraic prefactor by the exponential gives the optimal error, dominated by \\( e^{-1/x} \\), which beats every power of \\( x \\) as \\( x\\to0^{+} \\). This is the \"beyond all orders\" accuracy of optimal truncation: the best a divergent series can do is exponentially good. Strikingly, this is exactly the size of the \\( e^{-1/x} \\) term that was invisible to the asymptotic series in the non-uniqueness question — the error of optimal truncation and the ambiguity of the asymptotic series are one and the same exponentially-small scale.",
        },
        {
          stepNumber: 7,
          description: "Numerical sanity check at \\( x=0.1 \\).",
          workingLatex:
            "u_{10} = 10!\\,(0.1)^{10} \\approx 3.6\\times10^{-4}, \\qquad \\text{observed optimal error} \\approx 1.8\\times10^{-4}.",
          explanation:
            "Concretely at \\( x=0.1 \\) the least term is \\( u_{10}=u_9\\approx 3.6\\times10^{-4} \\), and the actual best error from the optimally-truncated partial sum is \\( \\approx 1.8\\times10^{-4} \\), about half of it. The factor-of-two is the usual alternating-series behaviour, and the order of magnitude matches the predicted scale \\( \\sqrt{2\\pi/x}\\,e^{-1/x} \\) (which at \\( x=0.1 \\) is \\( \\sqrt{20\\pi}\\,e^{-10}\\approx3.6\\times10^{-4} \\)) — a clean confirmation of the Stirling estimate.",
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
            "Dividing \\( n! \\) by \\( n! \\) leaves coefficient \\( 1 \\), giving a plain geometric series summing to \\( 1/(1-t) \\) for \\( |t|<1 \\). The decisive contrast with the alternating Euler case is the sign: the transform now has a pole at \\( t=+1 \\), sitting squarely on the integration ray \\( [0,\\infty) \\). That on-axis singularity obstructs ordinary Borel summation and is the fingerprint of resurgence — the series is only Borel summable in a lateral or principal-value sense.",
        },
        {
          stepNumber: 2,
          description: "Write the Borel sum as a principal value.",
          workingLatex:
            "S(1) = \\mathrm{PV}\\int_0^{\\infty}\\frac{e^{-t}}{1-t}\\,dt = \\lim_{\\epsilon\\to0^{+}}\\left(\\int_0^{1-\\epsilon} + \\int_{1+\\epsilon}^{\\infty}\\right)\\frac{e^{-t}}{1-t}\\,dt.",
          explanation:
            "Because the integrand blows up like \\( 1/(1-t) \\) at \\( t=1 \\), the Laplace integral diverges in the ordinary sense. The symmetric principal value excises the symmetric interval \\( (1-\\epsilon,1+\\epsilon) \\) and lets \\( \\epsilon\\to0^{+} \\). Each side diverges logarithmically as \\( \\ln\\epsilon \\), but with opposite signs, so the symmetric excision makes them cancel — this is the natural real-valued definition forced on us by the on-axis pole.",
        },
        {
          stepNumber: 3,
          description: "Substitute \\( v=1-t \\): variable, limits, differential.",
          workingLatex:
            "v = 1-t \\;\\Rightarrow\\; dt=-dv, \\qquad t:0\\to\\infty \\;\\Leftrightarrow\\; v:1\\to-\\infty.",
          explanation:
            "Setting \\( v=1-t \\) moves the pole from \\( t=1 \\) to \\( v=0 \\), placing it at the origin where the exponential-integral function is defined. Record the differential \\( dt=-dv \\) and the reversed limits: as \\( t \\) runs \\( 0\\to\\infty \\), \\( v \\) runs \\( 1\\to-\\infty \\). The orientation reversal is what the minus sign in \\( dt=-dv \\) will later undo.",
        },
        {
          stepNumber: 4,
          description: "Rewrite the exponential weight in \\( v \\).",
          workingLatex:
            "e^{-t} = e^{-(1-v)} = e^{-1}\\,e^{v}.",
          explanation:
            "Substituting \\( t=1-v \\) gives \\( e^{-t}=e^{-(1-v)}=e^{v-1}=e^{-1}e^{v} \\). The constant pulled out is \\( e^{-1} \\), NOT \\( e \\) — this is the exact opposite of the alternating case in the companion question, and conflating the two is the single commonest error here. Isolating it on its own line makes the \\( e^{-1} \\) unmistakable.",
        },
        {
          stepNumber: 5,
          description: "Assemble the integral in \\( v \\).",
          workingLatex:
            "S(1) = \\int_{v=1}^{v=-\\infty}\\frac{e^{-1}e^{v}}{v}\\,(-dv) = e^{-1}\\,\\mathrm{PV}\\!\\int_{-\\infty}^{1}\\frac{e^{v}}{v}\\,dv.",
          explanation:
            "The denominator \\( 1-t \\) becomes \\( v \\); the factor \\( -dv \\) flips the limits back to the natural order \\( -\\infty\\to1 \\). The constant \\( e^{-1} \\) factors out, leaving the principal-value integral of \\( e^{v}/v \\) along the real axis through the origin — exactly the shape of a standard exponential integral, ready to be named.",
        },
        {
          stepNumber: 6,
          description: "Identify the exponential integral \\( \\mathrm{Ei} \\).",
          workingLatex:
            "\\mathrm{Ei}(1)=\\mathrm{PV}\\!\\int_{-\\infty}^{1}\\frac{e^{v}}{v}\\,dv \\;\\Rightarrow\\; S(1)= e^{-1}\\,\\mathrm{Ei}(1).",
          explanation:
            "The principal-value integral in \\( v \\) is precisely the definition of \\( \\mathrm{Ei}(1) \\), the exponential integral that is the principal-value sibling of \\( E_1 \\). Hence \\( S(1)=e^{-1}\\mathrm{Ei}(1) \\). It is \\( \\mathrm{Ei} \\) here, not \\( E_1 \\), exactly because the pole lay on the path of integration — \\( E_1 \\) would arise if the singularity were off the contour, as in the alternating case.",
        },
        {
          stepNumber: 7,
          description: "State the numerical value.",
          workingLatex:
            "S(1) = e^{-1}\\,\\mathrm{Ei}(1) = 0.6971748832\\ldots.",
          explanation:
            "A direct symmetric principal-value evaluation (mpmath, dps=50) gives \\( 0.69717488323506\\ldots \\), matching \\( e^{-1}\\mathrm{Ei}(1) \\) exactly. So even this non-alternating, more violently divergent series \\( 1+1!+2!+\\cdots \\) is assigned a finite real value by the principal-value prescription — though, as the next step shows, that value comes with a caveat the alternating case did not have.",
        },
        {
          stepNumber: 8,
          description: "Remark on the imaginary ambiguity.",
          workingLatex:
            "\\mathrm{Res}_{t=1}\\frac{e^{-t}}{1-t}=-e^{-1}; \\qquad \\int_0^\\infty \\frac{e^{-t}}{1-t}\\,dt \\Big|_{C_\\pm} = \\mathrm{PV} \\mp i\\pi\\,e^{-1}.",
          explanation:
            "Instead of the principal value one may deform the contour just above or below the pole. By the residue theorem each choice adds \\( \\mp i\\pi \\) times the residue \\( \\mathrm{Res}_{t=1}\\frac{e^{-t}}{1-t}=-e^{-1} \\), i.e. \\( \\pm i\\pi e^{-1} \\). The two lateral Borel sums therefore differ by \\( 2\\pi i\\,e^{-1} \\); this imaginary part is the non-perturbative ambiguity (of exponentially small size \\( \\sim e^{-1/x} \\)) characteristic of a non-Borel-summable series, and the principal value is precisely the real average \\( \\tfrac12(C_+ + C_-) \\) of the two.",
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
            "By the fundamental theorem of calculus, differentiating an integral with respect to its lower limit brings down minus the integrand at \\( t=x \\), giving \\( -e^{-x}/x \\). The strategy is to differentiate (which produces a manageable elementary function), expand that, and integrate back — turning an awkward special function into a power series. The derivative is singular at \\( x=0 \\), blowing up like \\( -1/x \\), so the direct series of \\( E_1 \\) cannot be a plain power series; the \\( \\ln x \\) added next absorbs that singularity.",
        },
        {
          stepNumber: 2,
          description: "Form the regularised derivative.",
          workingLatex:
            "\\frac{d}{dx}\\big[E_1(x)+\\ln x\\big] = -\\frac{e^{-x}}{x} + \\frac{1}{x} = \\frac{1-e^{-x}}{x}.",
          explanation:
            "Adding \\( \\ln x \\), whose derivative is \\( 1/x \\), cancels the leading \\( -1/x \\) singularity precisely, since \\( -e^{-x}/x+1/x=(1-e^{-x})/x \\). The combination tends to \\( 1 \\) as \\( x\\to0 \\) (because \\( 1-e^{-x}\\approx x \\)), so it is analytic at the origin and admits an ordinary convergent Taylor series. This regularisation — splitting off a known singular function — is the standard route to small-argument expansions of special functions.",
        },
        {
          stepNumber: 3,
          description: "Expand the regular integrand.",
          workingLatex:
            "\\frac{1-e^{-x}}{x} = \\frac{1}{x}\\left(x - \\frac{x^2}{2} + \\frac{x^3}{6} - \\cdots\\right) = 1 - \\frac{x}{2} + \\frac{x^2}{6} - \\cdots = \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}x^{n-1}}{n!}.",
          explanation:
            "Using \\( e^{-x}=\\sum_{k\\ge0}(-x)^k/k! \\), the numerator is \\( 1-e^{-x}=x-x^2/2+x^3/6-\\cdots \\) (the constant \\( 1 \\) cancels), and dividing by \\( x \\) shifts every power down by one. The series converges for all \\( x \\) (infinite radius), so — unlike the formal Euler manipulation — integrating it term by term in the next step is fully rigorous, not merely formal.",
        },
        {
          stepNumber: 4,
          description: "Integrate term by term.",
          workingLatex:
            "E_1(x) + \\ln x = C + x - \\frac{x^2}{4} + \\frac{x^3}{18} - \\cdots = C + \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}x^{n}}{n\\cdot n!}.",
          explanation:
            "Antidifferentiating each \\( x^{n-1} \\) gives \\( x^n/n \\), so every coefficient picks up an extra \\( 1/n \\), turning \\( (-1)^{n-1}/n! \\) into \\( (-1)^{n-1}/(n\\cdot n!) \\). For example the \\( x^2 \\) coefficient is \\( -\\tfrac12\\cdot\\tfrac1{2!}=-\\tfrac14 \\) and the \\( x^3 \\) coefficient is \\( \\tfrac13\\cdot\\tfrac1{3!}=\\tfrac1{18} \\). A single constant of integration \\( C \\) appears, fixed in the next step by the given boundary condition.",
        },
        {
          stepNumber: 5,
          description: "Fix the constant.",
          workingLatex:
            "\\lim_{x\\to0^{+}}\\big[E_1(x)+\\ln x\\big] = C = -\\gamma.",
          explanation:
            "As \\( x\\to 0^{+} \\) every polynomial term on the right vanishes, leaving just \\( C \\). The limit supplied in the question identifies this constant as \\( -\\gamma \\), the Euler–Mascheroni constant. This is the one piece of non-elementary input the derivation needs: differentiation discards constants, so the constant must be recovered from a boundary value rather than from the series itself.",
        },
        {
          stepNumber: 6,
          description: "State the expansion.",
          workingLatex:
            "E_1(x) = -\\gamma - \\ln x + x - \\frac{x^2}{4} + \\frac{x^3}{18} - \\cdots.",
          explanation:
            "Subtracting \\( \\ln x \\) from both sides isolates \\( E_1(x) \\), giving the small-\\( x \\) expansion with its characteristic logarithmic term. The striking contrast with this topic's recurring theme: this series converges (infinite radius), whereas the large-\\( x \\) expansion of the same \\( E_1 \\) is the divergent factorial series. One and the same function can carry a convergent expansion at one end of its domain and a divergent asymptotic series at the other.",
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
          description: "Expand the denominator geometrically.",
          workingLatex:
            "\\frac{1}{1+xt} = \\sum_{n=0}^{\\infty}(-1)^n (xt)^n = \\sum_{n=0}^{\\infty}(-1)^n x^n t^n.",
          explanation:
            "As in every Stieltjes-type problem, expand \\( 1/(1+xt) \\) as a geometric series with ratio \\( -xt \\). This is the formal step that will generate the divergent series; it is valid only for \\( xt<1 \\), failing near the upper limit where \\( t\\to\\infty \\). The weight \\( \\rho(t)=t e^{-t} \\) is carried along untouched for now — the structure of the argument is identical to the plain Euler case, only the weight differs.",
        },
        {
          stepNumber: 2,
          description: "Interchange sum and integral.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^{\\infty}(-1)^n x^n \\int_0^{\\infty} t^n\\,\\rho(t)\\,dt.",
          explanation:
            "Pull out \\( (-1)^n x^n \\) and swap the sum with the integral. As always this interchange is the illegitimate (non-uniform) move that converts the finite integral into a divergent series, so the result is recorded with \\( \\sim \\). What is left in each term is a definite integral of \\( t^n \\) against the weight \\( \\rho \\).",
        },
        {
          stepNumber: 3,
          description: "Identify the coefficients as moments.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^{\\infty}(-1)^n a_n x^n, \\qquad a_n = \\int_0^{\\infty} t^n\\,\\rho(t)\\,dt.",
          explanation:
            "The coefficient of \\( x^n \\) is exactly the \\( n \\)-th moment \\( a_n=\\int_0^\\infty t^n\\rho(t)\\,dt \\) of the weight. This is the defining structure of a Stieltjes series: its coefficients are the moments of \\( \\rho \\), and the integral \\( F \\) is the Stieltjes transform of \\( \\rho \\). All that remains is to compute these moments for the given weight.",
        },
        {
          stepNumber: 4,
          description: "Set up the moment integral.",
          workingLatex:
            "a_n = \\int_0^{\\infty} t^n\\cdot t\\,e^{-t}\\,dt = \\int_0^{\\infty} t^{n+1}e^{-t}\\,dt.",
          explanation:
            "Substitute the given weight \\( \\rho(t)=t e^{-t} \\). The weight's extra factor of \\( t \\) merges with \\( t^n \\) to give \\( t^{n+1} \\), so the moment is a Gamma integral with exponent \\( n+1 \\) rather than the \\( n \\) of the plain Euler integral. That single extra power is the entire reason the factorial will come out shifted.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Gamma integral.",
          workingLatex:
            "a_n = \\int_0^{\\infty} t^{n+1}e^{-t}\\,dt = \\Gamma(n+2) = (n+1)!.",
          explanation:
            "The integral is \\( \\Gamma(n+2)=(n+1)! \\). Compared with the plain Euler series — weight \\( e^{-t} \\), moments \\( n! \\) — the extra factor of \\( t \\) in \\( \\rho \\) has bumped the factorial up by one, to \\( (n+1)! \\). So a heavier weight at large \\( t \\) produces faster-growing coefficients and a more strongly divergent series.",
        },
        {
          stepNumber: 6,
          description: "Assemble the series and state leading terms.",
          workingLatex:
            "F(x) \\sim \\sum_{n=0}^{\\infty}(-1)^n (n+1)!\\,x^n = 1 - 2!\\,x + 3!\\,x^2 - \\cdots = 1 - 2x + 6x^2 - \\cdots.",
          explanation:
            "Substituting \\( a_n=(n+1)! \\) gives the series; \\( n=0,1,2 \\) yield \\( a_0=1!=1,\\ a_1=2!=2,\\ a_2=3!=6 \\), so the leading terms are \\( 1-2x+6x^2 \\). The coefficients grow like \\( (n+1)! \\), even faster than Euler's \\( n! \\), so the series is asymptotic-but-divergent. Reassuringly its Borel transform \\( \\sum(n+1)(-t)^n=1/(1+t)^2 \\) is still analytic on \\( [0,\\infty) \\) (its only pole is at \\( t=-1 \\)), so the series remains Borel summable back to the convergent integral \\( F(x) \\).",
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
            "\\frac{1}{1+t^2} = \\frac{1}{1-(-t^2)} = \\sum_{k=0}^{\\infty} (-1)^k t^{2k}, \\qquad |t|<1.",
          explanation:
            "Watson's lemma is driven by the Taylor expansion of the amplitude \\( g(t)=1/(1+t^2) \\) at the endpoint \\( t=0 \\); write \\( 1+t^2=1-(-t^2) \\) and treat \\( -t^2 \\) as the geometric ratio. Because the ratio carries \\( t^2 \\), only even powers of \\( t \\) appear — and since each \\( t^{2k} \\) will produce \\( x^{-(2k+1)} \\), the final series will contain only odd inverse powers of \\( x \\).",
        },
        {
          stepNumber: 2,
          description: "Substitute \\( s=xt \\) in the moment.",
          workingLatex:
            "\\int_0^{\\infty} e^{-xt}\\,t^{2k}\\,dt \\;\\stackrel{s=xt}{=}\\; \\frac{1}{x^{2k+1}}\\int_0^\\infty e^{-s}s^{2k}\\,ds.",
          explanation:
            "To evaluate the Laplace moment of \\( t^{2k} \\), substitute \\( s=xt \\), so \\( t=s/x \\) and \\( dt=ds/x \\); the limits are unchanged since \\( x>0 \\). The \\( 2k \\) factors of \\( t \\) and the one from \\( dt \\) each contribute \\( 1/x \\), giving the overall \\( x^{-(2k+1)} \\). This rescaling is what converts the \\( x \\)-dependence into a clean inverse power.",
        },
        {
          stepNumber: 3,
          description: "Recognise the Gamma function.",
          workingLatex:
            "\\int_0^\\infty e^{-s}s^{2k}\\,ds=\\Gamma(2k+1)=(2k)! \\;\\Rightarrow\\; \\int_0^{\\infty} e^{-xt}\\,t^{2k}\\,dt = \\frac{(2k)!}{x^{2k+1}}.",
          explanation:
            "The rescaled integral is the standard \\( \\Gamma(2k+1)=(2k)! \\), so the moment is \\( (2k)!/x^{2k+1} \\). The validity of Watson's lemma rests on the kernel \\( e^{-xt} \\) concentrating near \\( t=0 \\), not on convergence of the amplitude's Taylor series (which holds only for \\( |t|<1 \\)) — the lemma extracts a genuine asymptotic series from purely local data.",
        },
        {
          stepNumber: 4,
          description: "Combine sign and moment per term.",
          workingLatex:
            "(-1)^k\\frac{(2k)!}{x^{2k+1}}: \\quad k=0\\to\\frac{0!}{x}=\\frac{1}{x}, \\quad k=1\\to -\\frac{2!}{x^3}=-\\frac{2}{x^3}.",
          explanation:
            "Multiply the Taylor coefficient \\( (-1)^k \\) by the moment term by term. The first non-zero contribution is \\( 0!/x=1/x \\) at \\( k=0 \\) and the second is \\( -2!/x^3=-2/x^3 \\) at \\( k=1 \\) — these are the two leading terms requested. There are no even inverse powers, consistent with the even-only Taylor expansion noted in step 1.",
        },
        {
          stepNumber: 5,
          description: "Form the series.",
          workingLatex:
            "J(x) \\sim \\sum_{k=0}^{\\infty} \\frac{(-1)^k (2k)!}{x^{2k+1}} = \\frac{1}{x} - \\frac{2}{x^3} + \\frac{24}{x^5} - \\cdots.",
          explanation:
            "Stringing the terms together (with \\( 4!=24 \\) at \\( k=2 \\)) gives the full expansion in odd powers of \\( 1/x \\). A numerical check at \\( x=10 \\) gives the exact \\( J(10)\\approx0.09819 \\) against the three-term sum \\( 1/x-2/x^3+24/x^5\\approx0.09824 \\), agreeing to three significant figures — the hallmark of an accurate asymptotic series truncated near its least term.",
        },
        {
          stepNumber: 6,
          description: "Assess convergence.",
          workingLatex:
            "\\frac{(2k+2)!/x^{2k+3}}{(2k)!/x^{2k+1}} = \\frac{(2k+1)(2k+2)}{x^2} \\to \\infty \\ (k\\to\\infty).",
          explanation:
            "The ratio of consecutive terms is \\( (2k+1)(2k+2)/x^2 \\), which grows without bound for any fixed \\( x \\), so the series diverges by the ratio test. This is the generic outcome of Watson's lemma when the amplitude is singular off the contour — here \\( 1/(1+t^2) \\) has poles at \\( t=\\pm i \\), whose distance \\( 1 \\) from the origin sets the radius of the amplitude's Taylor series and, through the factorial moments, forces the \\( x \\)-series to diverge.",
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
            "The design principle is to bolt onto a constant a term that is exponentially small (so it leaves the asymptotic series untouched) but whose derivative is not small (so differentiation exposes it). The \\( \\sin(e^{1/x}) \\) factor oscillates ever faster as \\( x\\to0^{+} \\), and differentiating it will drag down a large factor \\( e^{1/x} \\). The constant \\( 2 \\) merely keeps \\( H>0 \\) as required. This is the standard counterexample to term-by-term differentiation of asymptotic series.",
        },
        {
          stepNumber: 2,
          description: "Bound the oscillating term.",
          workingLatex:
            "|H(x) - 2| = e^{-1/x}\\,\\big|\\sin(e^{1/x})\\big| \\le e^{-1/x} = o(x^n) \\quad \\forall n.",
          explanation:
            "Since \\( |\\sin|\\le1 \\), the added term is bounded in magnitude by \\( e^{-1/x} \\), which decays faster than every power of \\( x \\) as \\( x\\to0^{+} \\) (set \\( s=1/x \\): \\( s^n e^{-s}\\to0 \\)). So however wildly the \\( \\sin \\) oscillates, the whole term is invisible to any power-series comparison — its amplitude is beyond all orders.",
        },
        {
          stepNumber: 3,
          description: "Read off the asymptotic series of \\( H \\).",
          workingLatex:
            "H(x) \\sim 2 + 0\\cdot x + 0\\cdot x^2 + \\cdots, \\qquad \\alpha_0=2,\\ \\alpha_n=0\\ (n\\ge1).",
          explanation:
            "By the Poincaré extraction, \\( \\alpha_0=\\lim H=2 \\), and every later \\( \\alpha_n=\\lim [H-2]/x^n=\\lim o(x^n)/x^n=0 \\) using the bound from step 2. So the asymptotic series of \\( H \\) is just the constant \\( 2 \\) — exactly the same series \\( 2 \\) would have on its own, the oscillation contributing nothing.",
        },
        {
          stepNumber: 4,
          description: "Differentiate the two factors.",
          workingLatex:
            "\\frac{d}{dx}e^{-1/x} = \\frac{1}{x^2}e^{-1/x}, \\qquad \\frac{d}{dx}\\sin\\!\\big(e^{1/x}\\big) = \\cos\\!\\big(e^{1/x}\\big)\\cdot e^{1/x}\\cdot\\!\\left(-\\frac{1}{x^2}\\right).",
          explanation:
            "Both factors depend on \\( x \\) only through \\( \\pm1/x \\), whose derivative is \\( \\mp1/x^2 \\); so \\( \\frac{d}{dx}e^{-1/x}=e^{-1/x}\\cdot(+1/x^2) \\). The chain rule on \\( \\sin(e^{1/x}) \\) produces three nested factors — the outer \\( \\cos \\), the middle \\( e^{1/x} \\) from differentiating the exponential, and the inner \\( -1/x^2 \\). That middle \\( e^{1/x} \\) is exponentially LARGE and is the seed of everything that follows.",
        },
        {
          stepNumber: 5,
          description: "Assemble \\( H'(x) \\) by the product rule.",
          workingLatex:
            "H'(x) = \\frac{1}{x^2}e^{-1/x}\\sin\\!\\big(e^{1/x}\\big) + e^{-1/x}\\cdot\\cos\\!\\big(e^{1/x}\\big)e^{1/x}\\!\\left(-\\frac{1}{x^2}\\right) = \\frac{1}{x^2}e^{-1/x}\\sin\\!\\big(e^{1/x}\\big) - \\frac{1}{x^2}\\cos\\!\\big(e^{1/x}\\big).",
          explanation:
            "Apply the product rule \\( (uv)'=u'v+uv' \\) to \\( u=e^{-1/x},\\,v=\\sin(e^{1/x}) \\). In the second term the large \\( e^{1/x} \\) from the chain rule meets the small \\( e^{-1/x} \\), and they cancel exactly: \\( e^{-1/x}\\cdot e^{1/x}=1 \\). That leaves a bare \\( -x^{-2}\\cos(e^{1/x}) \\) with no exponential damping at all. Mind the sign — the inner chain factor \\( -1/x^2 \\) makes this term negative.",
        },
        {
          stepNumber: 6,
          description: "Show differentiation of the series fails.",
          workingLatex:
            "x^2 H'(x) = e^{-1/x}\\sin\\!\\big(e^{1/x}\\big) - \\cos\\!\\big(e^{1/x}\\big) = -\\cos\\!\\big(e^{1/x}\\big) + o(1) \\not\\to \\text{any limit}.",
          explanation:
            "Term-by-term differentiation of \\( H\\sim 2+0\\cdot x+\\cdots \\) would predict \\( H'\\sim0 \\), and in particular \\( x^2H'\\to0 \\). But the actual \\( x^2H'(x) \\) equals \\( -\\cos(e^{1/x}) \\) plus an exponentially small remainder, and \\( \\cos(e^{1/x}) \\) oscillates between \\( \\pm1 \\) without settling as \\( x\\to0^{+} \\). So \\( x^2H' \\) has no limit, \\( H' \\) possesses no asymptotic power series at all, and the predicted \\( H'\\sim0 \\) is false — differentiating an asymptotic series is, in general, illegitimate, which is precisely the asymmetry with integration established in question 18.",
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
          description: "Pull the constant outside the integral.",
          workingLatex:
            "\\Phi(x) = \\int_x^{\\infty} e^{x^2-t^2}\\,dt = e^{x^2}\\int_x^{\\infty} e^{-t^2}\\,dt.",
          explanation:
            "Split the exponent \\( x^2-t^2 \\) and note \\( e^{x^2} \\) is constant in the integration variable \\( t \\), so it factors straight out. What remains, \\( \\int_x^\\infty e^{-t^2}\\,dt=\\tfrac{\\sqrt\\pi}{2}\\,\\mathrm{erfc}(x) \\), is the Gaussian tail; the prefactor \\( e^{x^2} \\) is exactly what is needed to cancel the tail's leading exponential at the end and leave a purely algebraic series.",
        },
        {
          stepNumber: 2,
          description: "Engineer an exact derivative inside.",
          workingLatex:
            "\\frac{d}{dt}e^{-t^2} = -2t\\,e^{-t^2} \\;\\Rightarrow\\; e^{-t^2} = \\frac{1}{2t}\\,\\big(2t\\,e^{-t^2}\\big) = -\\frac{1}{2t}\\,\\frac{d}{dt}e^{-t^2}.",
          explanation:
            "There is no elementary antiderivative of \\( e^{-t^2} \\), so we manufacture one piece that is an exact differential. Writing \\( e^{-t^2}=\\frac{1}{2t}\\cdot 2t e^{-t^2} \\) isolates the factor \\( 2t e^{-t^2}=-\\frac{d}{dt}e^{-t^2} \\), which integrates exactly. The slowly-varying \\( 1/(2t) \\) is then the natural choice for the part we differentiate in integration by parts — this is the engine of the whole expansion.",
        },
        {
          stepNumber: 3,
          description: "Choose the parts for IBP.",
          workingLatex:
            "u = \\frac{1}{2t}, \\quad dv = -d\\big(e^{-t^2}\\big) \\;\\Longrightarrow\\; du = -\\frac{1}{2t^2}\\,dt, \\quad v = -e^{-t^2}.",
          explanation:
            "Set \\( u=1/(2t) \\), the slowly-decaying factor we want to grind down, and \\( dv=-d(e^{-t^2}) \\), the exact differential from step 2. Then \\( du=-\\tfrac{1}{2t^2}dt \\) and \\( v=-e^{-t^2} \\). Each pass will turn \\( u=t^{-1}/2 \\) into something one power smaller, generating successively smaller integrals.",
        },
        {
          stepNumber: 4,
          description: "Apply the parts formula once.",
          workingLatex:
            "\\int_x^{\\infty}e^{-t^2}\\,dt = \\left[\\frac{-e^{-t^2}}{2t}\\right]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t^2}}{2t^2}\\,dt = \\frac{e^{-x^2}}{2x} - \\int_x^{\\infty}\\frac{e^{-t^2}}{2t^2}\\,dt.",
          explanation:
            "Substitute into \\( \\int u\\,dv=[uv]-\\int v\\,du \\). The boundary bracket \\( [-e^{-t^2}/(2t)] \\) vanishes at \\( t\\to\\infty \\) (the Gaussian kills it) and contributes \\( +e^{-x^2}/(2x) \\) at \\( t=x \\), giving the leading term. The new integral has an extra \\( 1/t^2 \\), hence is smaller for large \\( t \\); the two minus signs from \\( v \\) and \\( du \\) combine to make it \\( -\\int e^{-t^2}/(2t^2)\\,dt \\).",
        },
        {
          stepNumber: 5,
          description: "Iterate the integration by parts.",
          workingLatex:
            "\\int_x^{\\infty}\\frac{e^{-t^2}}{2t^2}\\,dt = \\frac{e^{-x^2}}{(2x)(2x^2)} - 3\\int_x^\\infty \\frac{e^{-t^2}}{(2t^2)(2t^2)}\\,dt + \\cdots.",
          explanation:
            "Repeat the identical scheme on the leftover integral, now with \\( u=1/(2t^2)\\cdot\\tfrac1{2t} \\)-type factors: each pass divides by a further \\( 2t^2 \\) at the boundary and multiplies the next coefficient by the succeeding odd number (here \\( 3 \\)). Iterating, the boundary numerators run \\( 1,1,3,15,\\dots \\), i.e. the double factorials \\( (2n-1)!! \\), each new integral being smaller than the last.",
        },
        {
          stepNumber: 6,
          description: "Collect the bracketed series.",
          workingLatex:
            "\\int_x^{\\infty} e^{-t^2}\\,dt = \\frac{e^{-x^2}}{2x}\\left(1 - \\frac{1}{2x^2} + \\frac{3}{(2x^2)^2} - \\cdots\\right).",
          explanation:
            "Substituting each iterated boundary term back, every contribution shares the common prefactor \\( e^{-x^2}/(2x) \\), leaving an alternating series in the single small parameter \\( 1/(2x^2) \\) with coefficients \\( (2n-1)!! \\). The strict alternation comes from the minus sign that each integration by parts contributes; the factor \\( 1/(2x^2) \\) per term comes from the extra \\( 1/(2t^2) \\) introduced at each pass.",
        },
        {
          stepNumber: 7,
          description: "Multiply back by \\( e^{x^2} \\) and state the series.",
          workingLatex:
            "\\Phi(x) = e^{x^2}\\cdot\\frac{e^{-x^2}}{2x}\\left(1 - \\frac{1}{2x^2} + \\frac{3}{4x^4} - \\cdots\\right) = \\frac{1}{2x}\\sum_{n=0}^{\\infty}\\frac{(-1)^n (2n-1)!!}{(2x^2)^n}.",
          explanation:
            "Restoring \\( e^{x^2} \\) cancels \\( e^{-x^2} \\) exactly, leaving a purely algebraic series — the whole point of carrying the prefactor since step 1. The first two terms are \\( 1/(2x) \\) and \\( -1/(4x^3) \\) (since \\( 3/(2x^2)^2=3/(4x^4) \\) and the \\( 1/(2x) \\) prefactor halves it to \\( 1/(4x^3) \\)); with the convention \\( (-1)!!:=1 \\) the general term is \\( (-1)^n(2n-1)!!/(2x^2)^n \\). The ratio of consecutive terms is \\( (2n+1)/(2x^2)\\to\\infty \\), so it diverges — the standard asymptotic series for the complementary error function, best truncated near \\( n\\approx x^2 \\).",
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
          description: "Compute the first forward difference.",
          workingLatex:
            "a_n = 1 \\;\\Rightarrow\\; \\Delta a_0 = a_1 - a_0 = 1 - 1 = 0.",
          explanation:
            "The Euler transform re-expresses the alternating sum in terms of the iterated forward differences \\( \\Delta^k a_0 \\) of the coefficient sequence, where \\( \\Delta a_n=a_{n+1}-a_n \\). For the constant sequence \\( a_n=1 \\) the very first difference \\( a_1-a_0=0 \\): a constant sequence has no first-order variation. This near-trivial input is what makes the transform collapse so dramatically.",
        },
        {
          stepNumber: 2,
          description: "Deduce all higher differences vanish.",
          workingLatex:
            "\\Delta^k a_0 = 0 \\ (k\\ge1), \\qquad \\Delta^0 a_0 = a_0 = 1.",
          explanation:
            "Higher differences are differences of the difference sequence; since \\( \\Delta a_n\\equiv0 \\) for all \\( n \\), differencing zeros gives zeros, so \\( \\Delta^k a_0=0 \\) for every \\( k\\ge1 \\). Only the zeroth difference \\( \\Delta^0 a_0=a_0=1 \\) survives. The infinite-data problem has collapsed to a single nonzero number.",
        },
        {
          stepNumber: 3,
          description: "Insert into the Euler-transform sum.",
          workingLatex:
            "\\sum_{n\\ge0}(-1)^n a_n \\;\\xrightarrow{\\text{Euler}}\\; \\sum_{k=0}^{\\infty}\\frac{\\Delta^k a_0}{2^{k+1}} = \\frac{\\Delta^0 a_0}{2^{1}} = \\frac{1}{2}.",
          explanation:
            "Substituting the differences, only the \\( k=0 \\) term is nonzero, so the transformed sum is the single term \\( a_0/2^1=1/2 \\). The Euler transform has turned a divergent, non-summable oscillation into one finite term — its purpose as a series accelerator is exactly to concentrate the value into the first few transformed terms, and here all of it lands in the very first.",
        },
        {
          stepNumber: 4,
          description: "Cross-check against Abel summation.",
          workingLatex:
            "\\sum_{n\\ge0}(-1)^n z^n = \\frac{1}{1+z}\\ \\xrightarrow{z\\to1^{-}}\\ \\frac{1}{2}.",
          explanation:
            "Any value the Euler transform assigns ought to agree with the Abel sum, and it does: the Abel sum of Grandi's series is \\( \\lim_{z\\to1^-}1/(1+z)=1/2 \\). The agreement is not a coincidence but a theorem — both are regular linear summation methods, and two regular methods that each assign a value to the same series must give the same value. This consistency is the real lesson of the exercise.",
        },
        {
          stepNumber: 5,
          description: "State the resummed value.",
          workingLatex:
            "\\sum_{n\\ge0}(-1)^n \\;=\\; \\frac{1}{2} \\quad(\\text{Euler/Abel}).",
          explanation:
            "For the constant sequence the Euler transform delivers the canonical value \\( 1/2 \\) in a single step — the cheapest possible illustration of consistent resummation of a divergent series. The same \\( 1/2 \\) emerges from Abel, Cesàro and Borel summation, reinforcing the theme that a well-chosen summation method assigns one robust value where naive summation gives none.",
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
          description: "Write the term magnitude and form the ratio.",
          workingLatex:
            "u_n = n!\\,(0.2)^n, \\qquad \\frac{u_{n+1}}{u_n} = \\frac{(n+1)!\\,(0.2)^{n+1}}{n!\\,(0.2)^n}=(n+1)(0.2).",
          explanation:
            "The magnitude of the \\( n \\)-th term at \\( x=0.2 \\) is \\( u_n=n!(0.2)^n \\). Dividing successive terms, the factorial ratio \\( (n+1)!/n!=n+1 \\) and the power ratio \\( (0.2)^{n+1}/(0.2)^n=0.2 \\) simplify to \\( (n+1)(0.2) \\). The least term — where the series stops improving and begins to diverge — sits where this ratio passes through \\( 1 \\).",
        },
        {
          stepNumber: 2,
          description: "Locate the least term.",
          workingLatex:
            "(n+1)(0.2) = 1 \\;\\Rightarrow\\; n+1 = 5 \\;\\Rightarrow\\; n = 4.",
          explanation:
            "Solving \\( (n+1)(0.2)=1 \\) gives \\( n=4 \\), matching the general rule \\( n\\approx1/x=5 \\). Because the ratio equals exactly \\( 1 \\) at \\( n=4 \\), the terms \\( u_4 \\) and \\( u_5 \\) are jointly smallest: \\( u_4=u_5=4!\\,(0.2)^4=0.0384 \\). This pins the optimal truncation index at \\( n=4 \\).",
        },
        {
          stepNumber: 3,
          description: "Truncate before the least term.",
          workingLatex:
            "F(0.2) \\approx \\sum_{n=0}^{4} (-1)^n n!\\,(0.2)^n.",
          explanation:
            "Optimal truncation keeps terms up to \\( n=4 \\), the last index before the growth resumes. Including \\( n=5 \\) and beyond would inject the divergent tail and degrade the estimate; stopping earlier would forfeit accuracy still on offer. Keeping through \\( n=4 \\) is the best the divergent series can do at this \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "List the terms.",
          workingLatex:
            "1,\\ -0.2,\\ 0.08,\\ -0.048,\\ 0.0384 \\quad (n=0,1,2,3,4).",
          explanation:
            "Each term is \\( (-1)^n n!\\,(0.2)^n \\): \\( 0!=1 \\); then \\( -1!\\cdot0.2=-0.2 \\); \\( 2!\\cdot0.04=0.08 \\); \\( -3!\\cdot0.008=-0.048 \\); \\( 4!\\cdot0.0016=0.0384 \\). Listing them makes the alternating, briefly-shrinking pattern explicit and the arithmetic independently checkable — note the magnitudes fall to a minimum and \\( u_4=0.0384 \\) is indeed the smallest.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the partial sum.",
          workingLatex:
            "\\sum_{n=0}^{4} (-1)^n n!\\,(0.2)^n = 1 - 0.2 + 0.08 - 0.048 + 0.0384 = 0.8704.",
          explanation:
            "Adding the five terms in order gives \\( 0.8704 \\). The total is dominated by the first two terms \\( 1-0.2 \\); the later ones supply only small corrections, which is precisely why the series is useful for the first handful of terms before its divergence takes over.",
        },
        {
          stepNumber: 6,
          description: "Bound and compare the error.",
          workingLatex:
            "|R_5| \\le u_5 = 5!\\,(0.2)^5 = 0.0384, \\qquad |0.8704 - 0.852111| = 0.0183 < 0.0384.",
          explanation:
            "For an alternating series whose terms have passed their minimum, the truncation error is bounded by the first omitted term \\( u_5=0.0384 \\). The actual error \\( 0.0183 \\) comes out at about half of that bound — the characteristic alternating-series behaviour, the true value lying between consecutive partial sums. This \\( \\sim2\\% \\) accuracy at \\( x=0.2 \\) is the ceiling the divergent series imposes; only Borel summation could squeeze out more.",
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
            "By Watson's lemma the large-\\( x \\) expansion of \\( I \\) inherits its coefficients from the Taylor data of \\( 1/(1+t) \\) at \\( t=0 \\), which are \\( (-1)^n \\); the Laplace moments then attach \\( n!/x^{n+1} \\). The relation is written with \\( \\sim \\) because it represents \\( I \\) only asymptotically. Whether it also converges is a separate question, settled next by the ratio test.",
        },
        {
          stepNumber: 2,
          description: "Apply the ratio test.",
          workingLatex:
            "\\frac{|a_{n+1}|}{|a_n|} = \\frac{(n+1)!/x^{n+2}}{n!/x^{n+1}} = \\frac{n+1}{x} \\to \\infty \\ (n\\to\\infty).",
          explanation:
            "The ratio of consecutive term magnitudes is \\( (n+1)/x \\), which grows without bound for any fixed \\( x \\). The ratio test declares divergence whenever this limit exceeds \\( 1 \\); here it is \\( \\infty \\), so the terms eventually grow without limit and the series cannot converge at any \\( x \\). Convergence and asymptoticity are genuinely independent properties.",
        },
        {
          stepNumber: 3,
          description: "Conclude divergence despite finiteness of \\( I \\).",
          workingLatex:
            "\\sum_{n}\\frac{(-1)^n n!}{x^{n+1}} \\text{ diverges}, \\quad\\text{yet}\\quad I(x)=e^x E_1(x) \\text{ is finite and smooth}.",
          explanation:
            "So the series diverges for every \\( x \\), even though the integral it represents, \\( I(x)=e^xE_1(x) \\), is a perfectly finite and infinitely differentiable function. This is the asymptotic-but-divergent phenomenon at the heart of the topic: the function is entirely well-behaved, and only its formal series misbehaves — the series still encodes \\( I \\) faithfully through optimal truncation and Borel summation.",
        },
        {
          stepNumber: 4,
          description: "Introduce the convergent companion.",
          workingLatex:
            "\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots.",
          explanation:
            "For contrast, take the alternating harmonic series. Its terms \\( 1/n \\) decrease monotonically to zero, so the alternating-series (Leibniz) test guarantees convergence — the ratio of magnitudes is \\( n/(n+1)\\to1 \\) from below, never exceeding \\( 1 \\). The opposition to the factorial series is total: there the terms ultimately grow, here they steadily shrink.",
        },
        {
          stepNumber: 5,
          description: "Identify its sum.",
          workingLatex:
            "\\ln(1+z) = \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}z^n}{n} \\;\\xrightarrow{z=1}\\; \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n} = \\ln 2 = 0.693147\\ldots.",
          explanation:
            "Setting \\( z=1 \\) in the Maclaurin series for \\( \\ln(1+z) \\) — valid at the endpoint \\( z=1 \\) by Abel's theorem, since the series converges there — gives \\( \\ln 2 \\). The crucial methodological contrast: this convergent series is summed by the ordinary limit of its partial sums, whereas the divergent factorial series can be assigned a value only by a resummation method such as Borel. The two examples together package the convergent-versus-asymptotic dichotomy in one comparison.",
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
          description: "Expand the denominator geometrically.",
          workingLatex:
            "\\frac{1}{1+x^2 t^2} = \\frac{1}{1-(-x^2t^2)} = \\sum_{n=0}^{\\infty}(-1)^n x^{2n} t^{2n}.",
          explanation:
            "Match \\( 1/(1+x^2t^2) \\) to the geometric template with ratio \\( -x^2t^2 \\). Because the ratio carries \\( t^2 \\), only even powers of \\( t \\) survive, so the asymptotic series of \\( K \\) will be a series in \\( x^2 \\) alone. As usual the expansion is valid only for \\( x^2t^2<1 \\) and fails near \\( t\\to\\infty \\) — the formal step that breeds divergence.",
        },
        {
          stepNumber: 2,
          description: "Interchange sum and integral.",
          workingLatex:
            "K(x) \\sim \\sum_{n=0}^{\\infty}(-1)^n x^{2n}\\int_0^\\infty e^{-t}t^{2n}\\,dt.",
          explanation:
            "Pull out the constants \\( (-1)^n x^{2n} \\) and swap the sum with the integral. This interchange is non-uniform and hence merely formal, so we record \\( \\sim \\) rather than \\( = \\); it is exactly this step that converts the finite integral into a divergent series. Each surviving term is an even Gamma moment in \\( t \\).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the even moments.",
          workingLatex:
            "\\int_0^\\infty e^{-t}t^{2n}\\,dt = \\Gamma(2n+1) = (2n)!, \\qquad K(x) \\sim \\sum_{n=0}^{\\infty}(-1)^n (2n)!\\,x^{2n}.",
          explanation:
            "The moment is \\( \\Gamma(2n+1)=(2n)! \\), which grows far faster than the \\( n! \\) of the plain Euler series — the even index doubles the factorial's argument. Writing \\( y=x^2 \\), the series is \\( \\sum(-1)^n(2n)!\\,y^n \\), so strongly divergent that its coefficients outpace any geometric growth. This severity is what will obstruct ordinary Borel summation.",
        },
        {
          stepNumber: 4,
          description: "Form the Borel transform in \\( y=x^2 \\).",
          workingLatex:
            "a_n = (-1)^n (2n)!, \\quad B(s) = \\sum_{n=0}^{\\infty}\\frac{a_n}{n!}\\,s^n = \\sum_{n=0}^{\\infty}\\frac{(-1)^n (2n)!}{n!}\\,s^n.",
          explanation:
            "Treat the series as one in \\( y=x^2 \\) with coefficients \\( a_n=(-1)^n(2n)! \\), and divide by \\( n! \\) to form the (level-1) Borel transform \\( B(s) \\). The transformed coefficients are \\( (-1)^n(2n)!/n! \\). Whether \\( B \\) is a genuine function depends on whether this division was enough to tame the growth — checked next.",
        },
        {
          stepNumber: 5,
          description: "Note the transform has radius zero.",
          workingLatex:
            "\\left|\\frac{c_{n+1}}{c_n}\\right| = \\frac{(2n+2)!/(n+1)!}{(2n)!/n!} = \\frac{(2n+1)(2n+2)}{n+1} = 2(2n+1) \\to \\infty \\;\\Rightarrow\\; R_B=0.",
          explanation:
            "The ratio of successive transformed coefficients is \\( (2n+1)(2n+2)/(n+1)=2(2n+1) \\), which diverges, so by the ratio test \\( B(s) \\) itself has radius of convergence \\( 0 \\). The heavier \\( (2n)! \\) growth is NOT defeated by a single division by \\( n! \\): one would need a second Borel transform — level-2 (Gevrey-2) summability — to resum it this way. An ordinary level-1 Borel transform fails here.",
        },
        {
          stepNumber: 6,
          description: "Identify the resummation directly from the integral.",
          workingLatex:
            "K(x) = \\int_0^{\\infty}\\frac{e^{-t}}{1+x^2 t^2}\\,dt \\text{ is the Borel/Stieltjes sum of its divergent series.}",
          explanation:
            "Rather than push the obstructed \\( s \\)-integral, observe that the original integral is itself the resummation. It is finite for every \\( x \\) and, by the moment construction of steps 1–3, reproduces exactly the coefficients \\( (-1)^n(2n)! \\). As the Stieltjes transform of the weight \\( e^{-t} \\) against \\( 1/(1+x^2t^2) \\), the convergent integral is precisely the value the divergent series points to — the resummed function, obtained without needing the level-2 machinery.",
        },
        {
          stepNumber: 7,
          description: "Evaluate at \\( x=1 \\) in closed form.",
          workingLatex:
            "K(1) = \\int_0^{\\infty}\\frac{e^{-t}}{1+t^2}\\,dt = \\mathrm{Ci}(1)\\sin 1 + \\Big(\\tfrac{\\pi}{2}-\\mathrm{Si}(1)\\Big)\\cos 1 = 0.6214496242\\ldots.",
          explanation:
            "At \\( x=1 \\) the integral \\( \\int_0^\\infty e^{-t}/(1+t^2)\\,dt \\) is the classical auxiliary integral of the sine and cosine integrals (the functions \\( f(1),g(1) \\) of Abramowitz & Stegun), giving the closed form in \\( \\mathrm{Si}(1) \\) and \\( \\mathrm{Ci}(1) \\). Direct numerical integration confirms \\( 0.6214496242\\ldots \\), matching the closed form to all shown digits. This finite number is the Borel/Stieltjes sum that the violently divergent series \\( 1-2!+4!-\\cdots \\) encodes at \\( x=1 \\).",
        },
      ],
      finalAnswer: "\\( K(x)\\sim\\sum_{n\\ge0}(-1)^n(2n)!\\,x^{2n} \\); Borel sum \\( K(1)=\\int_0^\\infty\\frac{e^{-t}}{1+t^2}dt=0.6214496242\\ldots \\).",
      canonicalAnswer: "0.6214496242",
    },
  },
];
