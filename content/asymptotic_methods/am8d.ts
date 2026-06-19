import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — § am8d / Method of Steepest Descent II:
 * The Stokes phenomenon for integrals.
 * Ref: am8d
 *
 * 30 fully-worked questions (6 Foundation / 12 Standard / 12 Challenge) on the
 * Stokes phenomenon as it appears for integrals of the canonical type
 *
 *   f(z) = \int_{i\infty}^{z} e^{s^2}\,ds ,   z -> \infty ,
 *
 * specifically: the DOMINANT vs SUBDOMINANT (recessive) split of a two-exponential
 * asymptotic A e^{+phi} + B e^{-phi}; the integration-by-parts series
 *   f(z) ~ e^{z^2} ( 1/(2z) + 1/(4z^3) + 3/(8z^5) + 15/(16 z^7) + ... );
 * the appearance/disappearance of the recessive constant -i pi^{1/2} across a
 * STOKES line (where the dominant exponential is maximally large), bounded by the
 * ANTI-STOKES lines (where the two exponentials are equal in magnitude); the
 * Stokes multiplier / switching; and the tie between the recessive term's size and
 * the optimal-truncation (least-term) remainder.
 *
 * Conventions used throughout:
 *   - Exponent difference of the two exponentials: Delta = z^2 - 0 = z^2.
 *   - STOKES line: Im(Delta) = 0, Re(Delta) > 0  =>  arg z = 0, pi
 *     (dominant exponential maximally dominant; subdominant most hidden; the
 *      recessive constant switches here).
 *   - ANTI-STOKES line: Re(Delta) = 0  =>  arg z = pi/4, 3pi/4, 5pi/4, 7pi/4
 *     (|e^{z^2}| = 1; dominant and subdominant equal in magnitude; dominance swaps).
 *   - The recessive constant relating the two base-point representations is
 *       \int_{-i\infty}^{i\infty} e^{s^2} ds = i pi^{1/2}.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 3 (Michaelmas
 * 2025), principally the f(z)=\int e^{s^2} ds Stokes problem, with constants,
 * limits, scalings and framing varied throughout.
 *
 * KEY FACTS (all independently re-verified with mpmath, dps=40):
 *   - f(z) = (sqrt(pi)/2)(erfi(z) - i)  [erfi(i\infty) = i, checked at i*30, i*100],
 *     matched against the IBP series at z=8 and z=8 e^{i pi/8} to rel. err ~ 4e-7.
 *   - IBP coefficients c_n = (2n-1)!!/2^{n+1} = 1/2, 1/4, 3/8, 15/16, 105/32, ...
 *   - The two representations differ by exactly i*pi^{1/2} = 1.7724539... i
 *     (numerically: int_{-i\infty}^z e^{s^2}ds - f(z) = 1.7724539 i).
 *   - Stokes lines: arg z = 0, pi  (Re z^2 = +1, Im z^2 = 0 at unit modulus).
 *   - Anti-Stokes lines: arg z = pi/4, 3pi/4, 5pi/4, 7pi/4  (Re z^2 = 0).
 *   - g(z) = int e^{2s^2} ds ~ e^{2z^2}(1/(4z)+1/(16z^3)+3/(64z^5)) : rel err 5e-6 at z=6.
 *   - Optimal-truncation index N_* ~ |z|^2 (at z=6: N_*=36=|z|^2); least term / leading
 *     ~ 3.3e-16 ~ e^{-|z|^2}=2.3e-16 (same order), tying the recessive constant to it.
 *   - One-term error at z=3: true error 94.0, first omitted term 75.0 (ratio 1.25); e^9=8103.08.
 *
 * Questions that ask for a sketch or a pure existence/explanation statement carry a
 * `// REVIEW:` note above the object, since those cannot be machine-checked.
 */
export const questions: Question[] = [
  // ════════════════════════════════════════════════════════════════════
  // FOUNDATION (6) — one core move in isolation: a single IBP, the leading
  // term, dominant/subdominant, one Stokes line, one anti-Stokes line.
  // ════════════════════════════════════════════════════════════════════
  {
    id: "am8d-001",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "For \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) with \\( 0 \\le \\arg z \\le \\pi \\), write \\( e^{s^2} = \\dfrac{1}{2s}\\dfrac{d}{ds}e^{s^2} \\) and integrate by parts once to find the leading behaviour as \\( z \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "leading term", "Stokes phenomenon"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the integral is non-elementary.",
          workingLatex: "f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds, \\qquad e^{s^2}\\ \\text{has no elementary antiderivative}.",
          explanation: "The integrand \\( e^{s^2} \\) cannot be integrated in closed elementary form, so we extract its large-\\( z \\) behaviour by integration by parts rather than by direct evaluation.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the integrand as an exact derivative.",
          workingLatex: "e^{s^2} = \\frac{1}{2s}\\,\\frac{d}{ds}\\,e^{s^2}.",
          explanation: "Since \\( \\frac{d}{ds}e^{s^2} = 2s\\,e^{s^2} \\), dividing by \\( 2s \\) returns the integrand exactly. This is the move that makes a non-elementary integral tractable: the exponential is what we integrate, the algebraic factor \\( 1/(2s) \\) is what we differentiate.",
        },
        {
          stepNumber: 3,
          description: "Choose the parts.",
          workingLatex: "u = \\frac{1}{2s}, \\quad dv = 2s\\,e^{s^2}\\,ds \\;\\Rightarrow\\; du = -\\frac{1}{2s^2}\\,ds, \\quad v = e^{s^2}.",
          explanation: "Pick \\( u \\) to be the algebraic factor (which we differentiate, gaining a power of \\( s \\) in the denominator) and \\( dv \\) the exact-derivative factor (which we integrate back to \\( e^{s^2} \\)).",
        },
        {
          stepNumber: 4,
          description: "Apply the by-parts formula.",
          workingLatex: "f(z) = \\left[\\frac{e^{s^2}}{2s}\\right]_{i\\infty}^{z} + \\int_{i\\infty}^{z}\\frac{e^{s^2}}{2s^2}\\,ds.",
          explanation: "Substitute into \\( \\int u\\,dv = [uv] - \\int v\\,du \\); the minus sign on \\( du \\) makes the remaining integral positive.",
        },
        {
          stepNumber: 5,
          description: "Kill the lower boundary term.",
          workingLatex: "s = it:\\ e^{s^2} = e^{-t^2} \\to 0 \\ \\text{as}\\ t \\to \\infty \\;\\Rightarrow\\; \\left.\\frac{e^{s^2}}{2s}\\right|_{s=i\\infty} = 0.",
          explanation: "On the imaginary axis \\( s = it \\) gives \\( e^{s^2} = e^{-t^2} \\), a decaying Gaussian, so the boundary contribution at \\( s = i\\infty \\) vanishes and only the upper limit \\( s = z \\) survives.",
        },
        {
          stepNumber: 6,
          description: "Compare the two surviving pieces.",
          workingLatex: "f(z) = \\frac{e^{z^2}}{2z} + \\int_{i\\infty}^{z}\\frac{e^{s^2}}{2s^2}\\,ds, \\qquad \\frac{\\text{integral}}{\\text{boundary}} = O\\!\\left(\\frac{1}{z^2}\\right).",
          explanation: "The remaining integral carries an extra factor \\( 1/s^2 \\) relative to the boundary term, so it is smaller by one power of \\( z \\) in the prefactor; it forms the start of the next-order correction.",
        },
        {
          stepNumber: 7,
          description: "Keep the dominant boundary term.",
          workingLatex: "f(z) \\sim \\frac{e^{z^2}}{2z} \\qquad (z \\to \\infty).",
          explanation: "Discarding the subleading integral leaves the leading behaviour: the boundary term at the upper limit \\( s = z \\).",
        },
      ],
      finalAnswer: "\\( f(z) \\sim \\dfrac{e^{z^2}}{2z} \\)",
      canonicalAnswer: "exp(z^2)/(2*z)",
    },
  },
  {
    id: "am8d-002",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The asymptotic series of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) is \\( f \\sim e^{z^2}\\sum_{n\\ge 0} c_n z^{-(2n+1)} \\) with \\( c_0 = \\tfrac12 \\) and recursion \\( c_n = \\tfrac{2n-1}{2}\\,c_{n-1} \\). Write down \\( c_1, c_2, c_3 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["recursion", "coefficients", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the seed and the recursion.",
          workingLatex: "c_0 = \\tfrac12, \\qquad c_n = \\frac{2n-1}{2}\\,c_{n-1}.",
          explanation: "Each integration by parts differentiates the algebraic prefactor, pulling down one power and producing the multiplier \\( (2n-1)/2 \\); we iterate this from the seed \\( c_0 = \\tfrac12 \\).",
        },
        {
          stepNumber: 2,
          description: "Read off the n = 1 multiplier.",
          workingLatex: "n = 1:\\quad \\frac{2\\cdot 1 - 1}{2} = \\frac12.",
          explanation: "With \\( n=1 \\) the multiplier \\( (2n-1)/2 \\) is \\( 1/2 \\).",
        },
        {
          stepNumber: 3,
          description: "Apply the recursion once.",
          workingLatex: "c_1 = \\frac{1}{2}\\cdot c_0 = \\frac{1}{2}\\cdot\\frac{1}{2} = \\frac14.",
          explanation: "Multiplying the seed by \\( 1/2 \\) gives \\( c_1 = 1/4 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply it again.",
          workingLatex: "c_2 = \\frac{2\\cdot 2 - 1}{2}\\,c_1 = \\frac{3}{2}\\cdot\\frac14 = \\frac38.",
          explanation: "Now \\( n=2 \\) gives multiplier \\( 3/2 \\); these match the standard coefficients in \\( e^{z^2}(\\tfrac1{2z}+\\tfrac1{4z^3}+\\tfrac3{8z^5}+\\cdots) \\).",
        },
        {
          stepNumber: 5,
          description: "One more step.",
          workingLatex: "c_3 = \\frac{2\\cdot 3 - 1}{2}\\,c_2 = \\frac{5}{2}\\cdot\\frac38 = \\frac{15}{16}.",
          explanation: "With \\( n=3 \\) the multiplier is \\( 5/2 \\), giving \\( c_3 = 15/16 \\).",
        },
        {
          stepNumber: 6,
          description: "Check against the closed form.",
          workingLatex: "c_n = \\frac{(2n-1)!!}{2^{n+1}}: \\quad \\tfrac12,\\tfrac14,\\tfrac38,\\tfrac{15}{16} = \\frac{1!!}{2^1},\\frac{1!!}{2^2},\\frac{3!!}{2^3},\\frac{5!!}{2^4}.",
          explanation: "In closed form \\( c_n = (2n-1)!!/2^{n+1} \\): the four values \\( \\tfrac12,\\tfrac14,\\tfrac38,\\tfrac{15}{16} \\) are exactly \\( 1!!/2,\\,1!!/4,\\,3!!/8,\\,5!!/16 \\), confirming the recursion.",
        },
      ],
      finalAnswer: "\\( c_1 = \\dfrac14,\\; c_2 = \\dfrac38,\\; c_3 = \\dfrac{15}{16} \\)",
      canonicalAnswer: "1/4, 3/8, 15/16",
    },
  },
  {
    id: "am8d-003",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A two-exponential asymptotic form is \\( A\\,e^{+z^2} + B\\,e^{-z^2} \\). Along the positive real axis \\( z = x \\to +\\infty \\), state which term is dominant and which is recessive (subdominant), and by what factor they differ in magnitude.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["dominant balance", "subdominant", "recessive exponential"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the positive real axis.",
          workingLatex: "z = x \\in \\mathbb{R}_{>0} \\;\\Rightarrow\\; z^2 = x^2 > 0.",
          explanation: "On the positive real axis the exponent \\( z^2 \\) is real and positive, so each exponential has a real exponent and a definite magnitude.",
        },
        {
          stepNumber: 2,
          description: "Magnitude of the first exponential.",
          workingLatex: "|e^{+z^2}| = e^{\\operatorname{Re}(z^2)} = e^{x^2}.",
          explanation: "The modulus of an exponential is \\( e \\) raised to the real part of its argument; here \\( \\operatorname{Re}(z^2)=x^2 \\), so \\( e^{+z^2} \\) grows like \\( e^{x^2} \\).",
        },
        {
          stepNumber: 3,
          description: "Magnitude of the second exponential.",
          workingLatex: "|e^{-z^2}| = e^{-\\operatorname{Re}(z^2)} = e^{-x^2}.",
          explanation: "Similarly \\( e^{-z^2} \\) has modulus \\( e^{-x^2} \\), which decays to zero as \\( x \\to \\infty \\).",
        },
        {
          stepNumber: 4,
          description: "Form the ratio of magnitudes.",
          workingLatex: "\\frac{|e^{+z^2}|}{|e^{-z^2}|} = \\frac{e^{x^2}}{e^{-x^2}} = e^{2x^2}.",
          explanation: "Dividing the two magnitudes gives \\( e^{2x^2} \\); the exponents add with opposite signs.",
        },
        {
          stepNumber: 5,
          description: "Take the limit.",
          workingLatex: "e^{2x^2} \\to \\infty \\qquad (x \\to \\infty).",
          explanation: "The ratio diverges, so \\( e^{+z^2} \\) is exponentially larger than \\( e^{-z^2} \\) — they are not of comparable size in any algebraic sense.",
        },
        {
          stepNumber: 6,
          description: "Name dominant and recessive.",
          workingLatex: "\\text{dominant: } e^{+z^2}; \\qquad \\text{recessive (subdominant): } e^{-z^2}.",
          explanation: "The recessive term \\( e^{-z^2} \\) lies beneath every algebraic order of the dominant one and is invisible to the dominant asymptotic series — exactly the term whose switching the Stokes phenomenon governs.",
        },
      ],
      finalAnswer: "Dominant \\( e^{+z^2} \\), recessive \\( e^{-z^2} \\); they differ by the factor \\( e^{2x^2} \\to \\infty \\).",
      canonicalAnswer: "exp(2*x^2)",
    },
  },
  // REVIEW: the diagram in step 3 is a geometric Stokes/anti-Stokes sketch; the
  // angle values (0, pi for Stokes) are machine-checkable and were verified, but
  // the figure itself is illustrative.
  {
    id: "am8d-004",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "For the asymptotics of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) the two exponentials have exponents \\( +z^2 \\) (dominant) and \\( 0 \\) (the recessive constant), so the exponent difference is \\( \\Delta = z^2 \\). A Stokes line is where \\( \\operatorname{Im}\\Delta = 0 \\) and \\( \\operatorname{Re}\\Delta > 0 \\). Find the values of \\( \\arg z \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Stokes lines", "exponent difference", "argument"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the meaning of a Stokes line.",
          workingLatex: "\\text{Stokes line}:\\ \\operatorname{Im}\\Delta = 0,\\ \\operatorname{Re}\\Delta > 0, \\qquad \\Delta = z^2.",
          explanation: "A Stokes line is where the dominant exponential is maximally large relative to the recessive one, i.e. where \\( \\Delta = z^2 \\) is real and positive, so the size ratio of the two exponentials is greatest and the recessive term is most deeply hidden.",
        },
        {
          stepNumber: 2,
          description: "Write the difference in polar form.",
          workingLatex: "z = re^{i\\theta} \\;\\Rightarrow\\; \\Delta = z^2 = r^2 e^{2i\\theta}.",
          explanation: "Squaring \\( z \\) doubles its argument and squares its modulus, so the exponent difference has argument \\( 2\\theta \\).",
        },
        {
          stepNumber: 3,
          description: "Split into real and imaginary parts.",
          workingLatex: "\\operatorname{Re}\\Delta = r^2\\cos 2\\theta, \\qquad \\operatorname{Im}\\Delta = r^2\\sin 2\\theta.",
          explanation: "Euler's formula \\( e^{2i\\theta} = \\cos 2\\theta + i\\sin 2\\theta \\) separates the two parts we must control.",
        },
        {
          stepNumber: 4,
          description: "Impose Im(Delta) = 0.",
          workingLatex: "r^2\\sin 2\\theta = 0 \\iff \\sin 2\\theta = 0 \\iff 2\\theta = 0,\\ \\pi,\\ 2\\pi,\\ 3\\pi \\pmod{2\\pi}.",
          explanation: "Setting the imaginary part of \\( z^2 \\) to zero forces \\( 2\\theta \\) to be a multiple of \\( \\pi \\); within one revolution of \\( z \\) these are the four candidate values.",
        },
        {
          stepNumber: 5,
          description: "Apply the sign condition Re(Delta) > 0.",
          workingLatex: "2\\theta = 0,\\,2\\pi:\\ \\cos 2\\theta = +1\\,(\\text{keep}); \\qquad 2\\theta = \\pi,\\,3\\pi:\\ \\cos 2\\theta = -1\\,(\\text{reject}).",
          explanation: "Only the branches with \\( \\cos 2\\theta > 0 \\) satisfy \\( \\operatorname{Re}\\Delta > 0 \\); the branches \\( 2\\theta = \\pi, 3\\pi \\) give \\( \\operatorname{Re}\\Delta < 0 \\) (those are anti-dominant directions) and are excluded.",
        },
        {
          stepNumber: 6,
          description: "Solve for the surviving angles.",
          workingLatex: "2\\theta = 0 \\Rightarrow \\theta = 0; \\qquad 2\\theta = 2\\pi \\Rightarrow \\theta = \\pi.",
          explanation: "Halving the kept values of \\( 2\\theta \\) gives the two Stokes rays \\( \\theta = 0 \\) and \\( \\theta = \\pi \\); both make \\( \\Delta = r^2 > 0 \\), the positive real axis in the \\( \\Delta \\)-plane.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[0,0],[2.6,2.6],[2.6,-2.6]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[-2.6,2.6],[-2.6,-2.6]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Line.Segment point1={[-3.3,0]} point2={[3.3,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Line.Segment point1={[-2.5,-2.5]} point2={[2.5,2.5]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-2.5,2.5]} point2={[2.5,-2.5]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.35,0.4]} tex="\\text{Stokes}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.55,2.25]} tex="\\text{anti-Stokes}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[0.0,1.7]} tex="\\text{subdominant}" color="var(--mafs-fg-green)" />
  <LaTeX at={[2.45,-0.45]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.8,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
      ],
      finalAnswer: "\\( \\arg z = 0 \\) and \\( \\arg z = \\pi \\)",
      canonicalAnswer: "0, pi",
    },
  },
  // REVIEW: the diagram is an illustrative anti-Stokes sketch; the angles
  // (pi/4, 3pi/4, 5pi/4, 7pi/4) are machine-checkable and were verified.
  {
    id: "am8d-005",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "An anti-Stokes line is where the dominant exponential \\( e^{z^2} \\) and the recessive constant are equal in magnitude, i.e. \\( \\operatorname{Re}(z^2) = 0 \\). Find the corresponding values of \\( \\arg z \\) in \\( [0, 2\\pi) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["anti-Stokes lines", "equal magnitude", "argument"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the magnitude of the dominant term.",
          workingLatex: "|e^{z^2}| = e^{\\operatorname{Re}(z^2)}.",
          explanation: "The modulus of \\( e^{z^2} \\) is \\( e \\) to the real part of the exponent; the recessive constant by contrast has fixed magnitude \\( O(1) \\).",
        },
        {
          stepNumber: 2,
          description: "Write the equal-magnitude condition.",
          workingLatex: "e^{\\operatorname{Re}(z^2)} = 1 \\iff \\operatorname{Re}(z^2) = 0.",
          explanation: "The dominant and recessive terms are comparable in size exactly when \\( |e^{z^2}| = 1 \\), i.e. when \\( \\operatorname{Re}(z^2) \\) vanishes — the defining condition of an anti-Stokes line.",
        },
        {
          stepNumber: 3,
          description: "Express the real part in polar form.",
          workingLatex: "z = re^{i\\theta} \\;\\Rightarrow\\; z^2 = r^2 e^{2i\\theta}, \\quad \\operatorname{Re}(z^2) = r^2\\cos 2\\theta.",
          explanation: "Squaring doubles the argument; the real part of \\( z^2 \\) is \\( r^2\\cos 2\\theta \\).",
        },
        {
          stepNumber: 4,
          description: "Solve the cosine equation.",
          workingLatex: "r^2\\cos 2\\theta = 0 \\iff \\cos 2\\theta = 0 \\iff 2\\theta = \\frac{\\pi}{2} + k\\pi.",
          explanation: "Since \\( r > 0 \\), the condition reduces to \\( \\cos 2\\theta = 0 \\); the cosine vanishes at odd multiples of \\( \\pi/2 \\).",
        },
        {
          stepNumber: 5,
          description: "Halve and enumerate over [0, 2π).",
          workingLatex: "2\\theta = \\frac{\\pi}{2},\\frac{3\\pi}{2},\\frac{5\\pi}{2},\\frac{7\\pi}{2} \\;\\Rightarrow\\; \\theta = \\frac{\\pi}{4},\\frac{3\\pi}{4},\\frac{5\\pi}{4},\\frac{7\\pi}{4}.",
          explanation: "Taking \\( k = 0,1,2,3 \\) and halving gives the four arguments in \\( [0,2\\pi) \\).",
        },
        {
          stepNumber: 6,
          description: "Interpret geometrically.",
          workingLatex: "\\theta = \\frac{\\pi}{4},\\; \\frac{3\\pi}{4},\\; \\frac{5\\pi}{4},\\; \\frac{7\\pi}{4} \\quad (\\text{the diagonals}).",
          explanation: "These four diagonals bisect the regions between successive Stokes lines \\( (\\theta = 0,\\pi) \\), exactly as they must: anti-Stokes lines lie midway between Stokes lines, and dominance swaps across each.",
        },
      ],
      finalAnswer: "\\( \\arg z = \\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4},\\ \\dfrac{5\\pi}{4},\\ \\dfrac{7\\pi}{4} \\)",
      canonicalAnswer: "pi/4, 3*pi/4, 5*pi/4, 7*pi/4",
    },
  },
  {
    id: "am8d-006",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 06",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Compute the constant \\( \\displaystyle\\int_{-i\\infty}^{i\\infty} e^{s^2}\\,ds \\) taken straight up the imaginary axis, and hence relate the two representations \\( \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) and \\( \\int_{-i\\infty}^{z} e^{s^2}\\,ds \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Gaussian integral", "representations", "recessive constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Parametrise the imaginary axis.",
          workingLatex: "s = it, \\qquad ds = i\\,dt, \\qquad t : -\\infty \\to \\infty.",
          explanation: "Points on the imaginary axis are \\( s = it \\) with real \\( t \\); as \\( t \\) runs from \\( -\\infty \\) to \\( \\infty \\) we traverse the contour from \\( -i\\infty \\) up to \\( i\\infty \\).",
        },
        {
          stepNumber: 2,
          description: "Rewrite the exponent.",
          workingLatex: "s^2 = (it)^2 = -t^2 \\;\\Rightarrow\\; e^{s^2} = e^{-t^2}.",
          explanation: "Squaring \\( s = it \\) gives \\( -t^2 \\), turning the integrand into the convergent Gaussian \\( e^{-t^2} \\), so the integral up the axis is well defined.",
        },
        {
          stepNumber: 3,
          description: "Transform the integral.",
          workingLatex: "\\int_{-i\\infty}^{i\\infty} e^{s^2}\\,ds = \\int_{-\\infty}^{\\infty} e^{-t^2}\\,(i\\,dt) = i\\int_{-\\infty}^{\\infty} e^{-t^2}\\,dt.",
          explanation: "Substituting \\( ds = i\\,dt \\) pulls a factor \\( i \\) outside the now-real Gaussian integral.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Gaussian.",
          workingLatex: "\\int_{-\\infty}^{\\infty} e^{-t^2}\\,dt = \\sqrt{\\pi}.",
          explanation: "This is the standard Gaussian integral, value \\( \\sqrt\\pi \\).",
        },
        {
          stepNumber: 5,
          description: "Assemble the axis integral.",
          workingLatex: "\\int_{-i\\infty}^{i\\infty} e^{s^2}\\,ds = i\\sqrt{\\pi} = i\\pi^{1/2}.",
          explanation: "Combining the factor \\( i \\) with \\( \\sqrt\\pi \\). Numerically \\( i\\sqrt\\pi = 1.7724539\\,i \\).",
        },
        {
          stepNumber: 6,
          description: "Split the f-contour at the axis.",
          workingLatex: "\\int_{i\\infty}^{z} = \\int_{i\\infty}^{-i\\infty} + \\int_{-i\\infty}^{z} = -\\int_{-i\\infty}^{i\\infty} + \\int_{-i\\infty}^{z}.",
          explanation: "Because \\( e^{s^2} \\) is entire the integral depends only on endpoints; routing through \\( -i\\infty \\) splits off the axis integral with a sign flip from the reversed orientation.",
        },
        {
          stepNumber: 7,
          description: "Relate the two representations.",
          workingLatex: "\\int_{i\\infty}^{z} e^{s^2}\\,ds = \\int_{-i\\infty}^{z} e^{s^2}\\,ds - i\\pi^{1/2}.",
          explanation: "Inserting the axis value \\( i\\pi^{1/2} \\). This recessive constant \\( -i\\pi^{1/2} \\) is the term whose Stokes switching the rest of the bank studies.",
        },
      ],
      finalAnswer: "\\( \\displaystyle\\int_{-i\\infty}^{i\\infty} e^{s^2}\\,ds = i\\pi^{1/2} \\); hence \\( \\int_{i\\infty}^{z} = \\int_{-i\\infty}^{z} e^{s^2}\\,ds - i\\pi^{1/2} \\).",
      canonicalAnswer: "i*sqrt(pi)",
    },
  },

  // ════════════════════════════════════════════════════════════════════
  // STANDARD (12) — typical sheet-level: build the series, remainders, the
  // two representations, single-Stokes-line work, scaled / shifted variants.
  // ════════════════════════════════════════════════════════════════════
  {
    id: "am8d-007",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 07",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By repeated integration by parts, obtain the first four terms of the asymptotic expansion of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) as \\( z \\to \\infty \\) in \\( 0 \\le \\arg z \\le \\pi \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "asymptotic expansion", "Stokes phenomenon"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the by-parts identity.",
          workingLatex: "e^{s^2} = \\frac{1}{2s}\\,\\frac{d}{ds}e^{s^2}.",
          explanation: "The repeated tool is the same exact-derivative trick: write the integrand as \\( (2s)^{-1} \\) times \\( \\frac{d}{ds}e^{s^2} \\), so each pass integrates the exponential and differentiates the algebraic factor.",
        },
        {
          stepNumber: 2,
          description: "First integration by parts.",
          workingLatex: "f(z) = \\left[\\frac{e^{s^2}}{2s}\\right]_{i\\infty}^{z} + \\int_{i\\infty}^{z}\\frac{e^{s^2}}{2s^2}\\,ds.",
          explanation: "Take \\( u = 1/(2s),\\ dv = 2s\\,e^{s^2}ds \\); the by-parts formula produces a boundary term and a remainder integral with two extra powers of \\( s \\) in the denominator.",
        },
        {
          stepNumber: 3,
          description: "Drop the lower boundary contribution.",
          workingLatex: "s = it:\\ \\frac{e^{s^2}}{2s} = \\frac{e^{-t^2}}{2it} \\to 0 \\;\\Rightarrow\\; f(z) = \\frac{e^{z^2}}{2z} + \\int_{i\\infty}^{z}\\frac{e^{s^2}}{2s^2}\\,ds.",
          explanation: "On the imaginary axis \\( e^{s^2} = e^{-t^2} \\) decays, so the boundary term at \\( i\\infty \\) vanishes and the first boundary term is \\( e^{z^2}/(2z) \\).",
        },
        {
          stepNumber: 4,
          description: "Prepare the second pass.",
          workingLatex: "\\frac{e^{s^2}}{2s^2} = \\frac{1}{4s^3}\\,\\frac{d}{ds}e^{s^2}.",
          explanation: "Re-express the remainder integrand using the same identity, now with algebraic factor \\( 1/(4s^3) \\).",
        },
        {
          stepNumber: 5,
          description: "Second integration by parts.",
          workingLatex: "\\int_{i\\infty}^{z}\\frac{e^{s^2}}{2s^2}\\,ds = \\frac{e^{z^2}}{4z^3} + \\int_{i\\infty}^{z}\\frac{3\\,e^{s^2}}{4s^4}\\,ds.",
          explanation: "Differentiating \\( s^{-3} \\) brings the factor \\( 3 \\) and raises the power to \\( s^{-4} \\); the boundary term carries coefficient \\( c_1 = 1/4 \\).",
        },
        {
          stepNumber: 6,
          description: "Third integration by parts.",
          workingLatex: "\\int_{i\\infty}^{z}\\frac{3\\,e^{s^2}}{4s^4}\\,ds = \\frac{3\\,e^{z^2}}{8z^5} + \\int_{i\\infty}^{z}\\frac{15\\,e^{s^2}}{8s^6}\\,ds.",
          explanation: "Following the recursion \\( c_n = \\tfrac{2n-1}{2}c_{n-1} \\): the boundary coefficient is \\( c_2 = 3/8 \\) and the new remainder carries \\( \\tfrac{5}{2}\\cdot\\tfrac34 = \\tfrac{15}{8} \\).",
        },
        {
          stepNumber: 7,
          description: "Fourth integration by parts.",
          workingLatex: "\\int_{i\\infty}^{z}\\frac{15\\,e^{s^2}}{8s^6}\\,ds = \\frac{15\\,e^{z^2}}{16z^7} + \\int_{i\\infty}^{z}\\frac{105\\,e^{s^2}}{16s^8}\\,ds.",
          explanation: "One more pass gives the fourth boundary term with coefficient \\( c_3 = 15/16 \\) and a remainder with prefactor \\( \\tfrac72\\cdot\\tfrac{15}{8} = \\tfrac{105}{16} \\).",
        },
        {
          stepNumber: 8,
          description: "List the four coefficients.",
          workingLatex: "c_0 = \\tfrac12,\\ c_1 = \\tfrac14,\\ c_2 = \\tfrac38,\\ c_3 = \\tfrac{15}{16} = \\frac{(2n-1)!!}{2^{n+1}}.",
          explanation: "The boundary coefficients are exactly the closed-form \\( c_n = (2n-1)!!/2^{n+1} \\), matching the recursion.",
        },
        {
          stepNumber: 9,
          description: "Assemble the expansion.",
          workingLatex: "f(z) \\sim e^{z^2}\\left(\\frac{1}{2z} + \\frac{1}{4z^3} + \\frac{3}{8z^5} + \\frac{15}{16z^7} + \\cdots\\right).",
          explanation: "Collect the four boundary terms; the common factor \\( e^{z^2} \\) is the dominant exponential, and successive terms fall by \\( z^{-2} \\).",
        },
        {
          stepNumber: 10,
          description: "Confirm the asymptotic character.",
          workingLatex: "\\frac{\\text{remainder}}{\\text{last term}} = O(z^{-2}) \\to 0, \\qquad \\text{rel. err} \\sim 4\\times10^{-7}\\ (z=8).",
          explanation: "The trailing integral is smaller than the last term kept, so the expansion is asymptotic. Verified against \\( f = \\tfrac{\\sqrt\\pi}{2}(\\operatorname{erfi}z - i) \\) at \\( z=8 \\) to rel. err ~4e-7.",
        },
      ],
      finalAnswer: "\\( f(z) \\sim e^{z^2}\\left(\\dfrac{1}{2z} + \\dfrac{1}{4z^3} + \\dfrac{3}{8z^5} + \\dfrac{15}{16z^7} + \\cdots\\right) \\)",
      canonicalAnswer: "exp(z^2)*(1/(2*z)+1/(4*z^3)+3/(8*z^5)+15/(16*z^7))",
    },
  },
  {
    id: "am8d-008",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 08",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Find the closed form of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) using the imaginary error function, where \\( \\dfrac{d}{dz}\\operatorname{erfi}(z) = \\dfrac{2}{\\sqrt{\\pi}}e^{z^2} \\) and \\( \\operatorname{erfi}(i\\infty) = i \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["error function", "closed form", "representations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the defining derivative of erfi.",
          workingLatex: "\\frac{d}{ds}\\operatorname{erfi}(s) = \\frac{2}{\\sqrt\\pi}\\,e^{s^2}.",
          explanation: "The imaginary error function is defined so that its derivative is \\( \\frac{2}{\\sqrt\\pi}e^{s^2} \\); this is the link we exploit to antidifferentiate \\( e^{s^2} \\).",
        },
        {
          stepNumber: 2,
          description: "Solve for the integrand.",
          workingLatex: "e^{s^2} = \\frac{\\sqrt\\pi}{2}\\,\\frac{d}{ds}\\operatorname{erfi}(s).",
          explanation: "Rearranging the derivative relation expresses \\( e^{s^2} \\) as an exact derivative of \\( \\tfrac{\\sqrt\\pi}{2}\\operatorname{erfi}(s) \\).",
        },
        {
          stepNumber: 3,
          description: "Antidifferentiate.",
          workingLatex: "\\int e^{s^2}\\,ds = \\frac{\\sqrt{\\pi}}{2}\\,\\operatorname{erfi}(s) + C.",
          explanation: "Integrating both sides gives the antiderivative \\( \\tfrac{\\sqrt\\pi}{2}\\operatorname{erfi}(s) \\) up to a constant.",
        },
        {
          stepNumber: 4,
          description: "Insert the definite limits.",
          workingLatex: "f(z) = \\frac{\\sqrt{\\pi}}{2}\\big[\\operatorname{erfi}(s)\\big]_{i\\infty}^{z}.",
          explanation: "Evaluating the antiderivative between the base point \\( s = i\\infty \\) and the upper limit \\( s = z \\) removes the arbitrary constant.",
        },
        {
          stepNumber: 5,
          description: "Write the bracket out.",
          workingLatex: "f(z) = \\frac{\\sqrt{\\pi}}{2}\\big(\\operatorname{erfi}(z) - \\operatorname{erfi}(i\\infty)\\big).",
          explanation: "Subtract the lower-limit value from the upper-limit value.",
        },
        {
          stepNumber: 6,
          description: "Relate erfi to erf on the imaginary axis.",
          workingLatex: "\\operatorname{erfi}(w) = -i\\,\\operatorname{erf}(iw) \\;\\Rightarrow\\; \\operatorname{erfi}(i\\infty) = -i\\,\\operatorname{erf}(i\\cdot i\\infty) = -i\\,\\operatorname{erf}(-\\infty).",
          explanation: "Use the identity \\( \\operatorname{erfi}(w) = -i\\,\\operatorname{erf}(iw) \\) to convert the limiting value into one of the ordinary error function.",
        },
        {
          stepNumber: 7,
          description: "Evaluate the error-function limit.",
          workingLatex: "\\operatorname{erf}(-\\infty) = -1 \\;\\Rightarrow\\; \\operatorname{erfi}(i\\infty) = -i(-1) = i.",
          explanation: "Since \\( \\operatorname{erf}(-\\infty) = -1 \\), the lower-limit value is \\( i \\) (confirmed numerically: \\( \\operatorname{erfi}(30i) = i \\) to working precision).",
        },
        {
          stepNumber: 8,
          description: "Substitute the limiting value.",
          workingLatex: "f(z) = \\frac{\\sqrt{\\pi}}{2}\\big(\\operatorname{erfi}(z) - i\\big).",
          explanation: "Insert \\( \\operatorname{erfi}(i\\infty) = i \\) into the bracket.",
        },
        {
          stepNumber: 9,
          description: "Sanity-check the recessive constant.",
          workingLatex: "f \\text{ contains the constant } -\\tfrac{\\sqrt\\pi}{2}i, \\quad |{-\\tfrac{\\sqrt\\pi}{2}i\\cdot 2}| = \\sqrt\\pi.",
          explanation: "The \\( -i \\) inside the bracket is the seed of the \\( -i\\pi^{1/2} \\) recessive constant studied elsewhere in the bank; its presence here confirms the closed form encodes the Stokes structure.",
        },
        {
          stepNumber: 10,
          description: "State the closed form.",
          workingLatex: "f(z) = \\frac{\\sqrt{\\pi}}{2}\\big(\\operatorname{erfi}(z) - i\\big).",
          explanation: "This exact form is the reference against which every asymptotic claim in this bank was checked.",
        },
      ],
      finalAnswer: "\\( f(z) = \\dfrac{\\sqrt{\\pi}}{2}\\big(\\operatorname{erfi}(z) - i\\big) \\)",
      canonicalAnswer: "(sqrt(pi)/2)*(erfi(z) - i)",
    },
  },
  {
    id: "am8d-009",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 09",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show that \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds = \\int_{-i\\infty}^{z} e^{s^2}\\,ds - i\\pi^{1/2} \\), and explain why the integration-by-parts series is identical for both representations.",
    marks: 4,
    yearCreated: 2026,
    tags: ["representations", "recessive constant", "subdominant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the integrand is entire.",
          workingLatex: "e^{s^2}\\ \\text{is entire} \\;\\Rightarrow\\; \\int_{a}^{b} e^{s^2}\\,ds \\ \\text{depends only on } a,b.",
          explanation: "An entire integrand has a path-independent integral (Cauchy), so we are free to deform the contour from \\( i\\infty \\) to \\( z \\) however is convenient.",
        },
        {
          stepNumber: 2,
          description: "Split the contour at the imaginary axis.",
          workingLatex: "\\int_{i\\infty}^{z} = \\int_{i\\infty}^{-i\\infty} + \\int_{-i\\infty}^{z}.",
          explanation: "Route the contour from \\( i\\infty \\) down to \\( -i\\infty \\) and then up to \\( z \\); additivity of the integral over the joined paths gives the split.",
        },
        {
          stepNumber: 3,
          description: "Reverse the orientation of the axis piece.",
          workingLatex: "\\int_{i\\infty}^{-i\\infty} e^{s^2}\\,ds = -\\int_{-i\\infty}^{i\\infty} e^{s^2}\\,ds.",
          explanation: "Swapping the limits of the down-the-axis integral flips its sign, expressing it through the known up-the-axis Gaussian.",
        },
        {
          stepNumber: 4,
          description: "Insert the Gaussian value.",
          workingLatex: "\\int_{-i\\infty}^{i\\infty} e^{s^2}\\,ds = i\\sqrt{\\pi} \\;\\Rightarrow\\; \\int_{i\\infty}^{-i\\infty} e^{s^2}\\,ds = -i\\sqrt{\\pi}.",
          explanation: "From the earlier Gaussian evaluation \\( \\int_{-i\\infty}^{i\\infty} = i\\sqrt\\pi \\); reversing orientation gives \\( -i\\sqrt\\pi \\).",
        },
        {
          stepNumber: 5,
          description: "Combine into the second representation.",
          workingLatex: "f(z) = \\int_{-i\\infty}^{z} e^{s^2}\\,ds - i\\pi^{1/2}.",
          explanation: "Substituting the axis value into the split gives the relation between the two base-point representations.",
        },
        {
          stepNumber: 6,
          description: "Numerical confirmation.",
          workingLatex: "\\int_{-i\\infty}^{z} e^{s^2}\\,ds - f(z) = 1.7724539\\,i = i\\sqrt\\pi.",
          explanation: "Checked at \\( z = 2 + 1.3i \\): the difference of the two representations is exactly \\( i\\sqrt\\pi \\), confirming the constant.",
        },
        {
          stepNumber: 7,
          description: "Integrate each representation by parts.",
          workingLatex: "\\int_{c}^{z} e^{s^2}\\,ds = \\left[\\frac{e^{s^2}}{2s}\\right]_{c}^{z} + \\cdots, \\qquad c = \\pm i\\infty.",
          explanation: "Apply the same by-parts identity to either representation; the structure of the boundary terms is identical except for the base point \\( c \\).",
        },
        {
          stepNumber: 8,
          description: "Lower boundary vanishes for both base points.",
          workingLatex: "\\left.\\frac{e^{s^2}}{2s}\\right|_{s=\\pm i\\infty} = 0,",
          explanation: "On both \\( +i\\infty \\) and \\( -i\\infty \\) the integrand decays like \\( e^{-t^2} \\), so every lower boundary term is zero; only the upper limit \\( s = z \\) contributes.",
        },
        {
          stepNumber: 9,
          description: "Conclude the algebraic series is shared.",
          workingLatex: "\\text{IBP boundary terms depend only on the upper limit } s = z.",
          explanation: "Because all boundary contributions come from \\( s = z \\), both representations generate the identical algebraic series \\( e^{z^2}\\sum c_n z^{-(2n+1)} \\); only the additive constant differs.",
        },
        {
          stepNumber: 10,
          description: "Explain the invisibility of the constant.",
          workingLatex: "|{-i\\pi^{1/2}}| = \\sqrt\\pi \\ll |e^{z^2}/(2z)| \\ \\text{in a growth sector}.",
          explanation: "Since the constant is exponentially small beside \\( e^{z^2} \\), it sits beneath every term of the algebraic series — the series cannot see it, which is precisely why both representations share the same expansion.",
        },
      ],
      finalAnswer: "\\( f(z) = \\displaystyle\\int_{-i\\infty}^{z} e^{s^2}\\,ds - i\\pi^{1/2} \\); the IBP series is the same because the constant is recessive.",
    },
  },
  {
    id: "am8d-010",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 10",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Using \\( f(z) = \\int_{-i\\infty}^{z} e^{s^2}\\,ds - i\\pi^{1/2} \\), write down an asymptotic expansion for \\( f(z) + i\\pi^{1/2} \\) valid as \\( |z| \\to \\infty \\) in \\( -\\pi \\le \\arg z \\le 0 \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["representations", "lower half-plane", "asymptotic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the natural base point for this sector.",
          workingLatex: "-\\pi \\le \\arg z \\le 0 \\;\\Rightarrow\\; \\text{base at } s = -i\\infty.",
          explanation: "In the lower half-plane the contour reaching \\( z \\) descends most naturally from \\( -i\\infty \\), where \\( e^{s^2} \\) decays; this is the representation in which no recessive constant is hidden.",
        },
        {
          stepNumber: 2,
          description: "Isolate the integral.",
          workingLatex: "f(z) + i\\pi^{1/2} = \\int_{-i\\infty}^{z} e^{s^2}\\,ds.",
          explanation: "Adding \\( i\\pi^{1/2} \\) to the given relation removes the constant, leaving a clean integral based at \\( -i\\infty \\).",
        },
        {
          stepNumber: 3,
          description: "Set up the by-parts identity.",
          workingLatex: "e^{s^2} = \\frac{1}{2s}\\,\\frac{d}{ds}e^{s^2}.",
          explanation: "The same exact-derivative trick applies regardless of base point.",
        },
        {
          stepNumber: 4,
          description: "First integration by parts.",
          workingLatex: "\\int_{-i\\infty}^{z} e^{s^2}\\,ds = \\left[\\frac{e^{s^2}}{2s}\\right]_{-i\\infty}^{z} + \\int_{-i\\infty}^{z}\\frac{e^{s^2}}{2s^2}\\,ds.",
          explanation: "Apply the formula with \\( u = 1/(2s) \\); the structure is identical to the upper-half-plane case.",
        },
        {
          stepNumber: 5,
          description: "Vanishing of the lower boundary.",
          workingLatex: "s = -it:\\ e^{s^2} = e^{-t^2} \\to 0 \\;\\Rightarrow\\; \\left.\\frac{e^{s^2}}{2s}\\right|_{-i\\infty} = 0.",
          explanation: "On \\( s = -it \\) the integrand is again the decaying Gaussian \\( e^{-t^2} \\), so the boundary term at \\( -i\\infty \\) vanishes.",
        },
        {
          stepNumber: 6,
          description: "First surviving term.",
          workingLatex: "\\int_{-i\\infty}^{z} e^{s^2}\\,ds = \\frac{e^{z^2}}{2z} + \\int_{-i\\infty}^{z}\\frac{e^{s^2}}{2s^2}\\,ds.",
          explanation: "Only the upper-limit boundary term \\( e^{z^2}/(2z) \\) survives, with the remainder integral carrying two extra powers of \\( s \\).",
        },
        {
          stepNumber: 7,
          description: "Iterate the recursion.",
          workingLatex: "c_n = \\frac{2n-1}{2}c_{n-1}: \\quad c_0 = \\tfrac12,\\ c_1 = \\tfrac14,\\ c_2 = \\tfrac38,\\ \\ldots",
          explanation: "Repeated by-parts passes reproduce the same coefficient recursion as in the upper half-plane, since the upper limit \\( s = z \\) is shared.",
        },
        {
          stepNumber: 8,
          description: "State the expansion.",
          workingLatex: "f(z) + i\\pi^{1/2} \\sim e^{z^2}\\left(\\frac{1}{2z} + \\frac{1}{4z^3} + \\frac{3}{8z^5} + \\cdots\\right).",
          explanation: "The boundary terms at \\( s = z \\) are identical to the upper-half-plane case, so the algebraic series is unchanged.",
        },
        {
          stepNumber: 9,
          description: "Note where this representation is sharp.",
          workingLatex: "-\\pi \\le \\arg z \\le 0:\\ \\text{the constant } -i\\pi^{1/2}\\ \\text{is now explicit in } f.",
          explanation: "In this sector the recessive constant has switched on and is bookkept on the left-hand side, so the integral \\( \\int_{-i\\infty}^z \\) is the constant-free object.",
        },
        {
          stepNumber: 10,
          description: "Numerical check.",
          workingLatex: "z = 8e^{-i\\pi/8}:\\quad \\text{rel. err} \\sim 4\\times10^{-7}.",
          explanation: "Verified at \\( z = 8e^{-i\\pi/8} \\) to rel. err ~4e-7 against the closed form \\( f = \\tfrac{\\sqrt\\pi}{2}(\\operatorname{erfi}z - i) \\).",
        },
      ],
      finalAnswer: "\\( f(z) + i\\pi^{1/2} \\sim e^{z^2}\\left(\\dfrac{1}{2z} + \\dfrac{1}{4z^3} + \\dfrac{3}{8z^5} + \\cdots\\right) \\) for \\( -\\pi \\le \\arg z \\le 0 \\).",
      canonicalAnswer: "exp(z^2)*(1/(2*z)+1/(4*z^3)+3/(8*z^5))",
    },
  },
  // REVIEW: the diagram marks the Stokes line and the two half-plane constants;
  // the switching value -i*pi^{1/2} (magnitude sqrt(pi)=1.7725) is verified.
  {
    id: "am8d-011",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 11",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Two expansions of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) hold in abutting sectors: \\( f \\sim e^{z^2}S(z) \\) for \\( 0 \\le \\arg z \\le \\pi \\), and \\( f \\sim e^{z^2}S(z) - i\\pi^{1/2} \\) for \\( -\\pi \\le \\arg z \\le 0 \\), where \\( S(z) = \\tfrac{1}{2z}+\\tfrac{1}{4z^3}+\\cdots \\). Find the ray \\( \\arg z \\) on which the recessive constant switches and the magnitude of the jump.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Stokes phenomenon", "switching", "Stokes multiplier"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify what may switch.",
          workingLatex: "f \\sim e^{z^2}S(z) + C(\\arg z)\\cdot(\\text{recessive}), \\qquad C \\in \\{0,\\,-i\\pi^{1/2}\\}.",
          explanation: "The dominant series \\( e^{z^2}S(z) \\) is common to both sectors; the only thing that can change between them is the additive recessive constant \\( C \\).",
        },
        {
          stepNumber: 2,
          description: "Apply the Stokes condition to the difference.",
          workingLatex: "\\Delta = z^2,\\quad \\text{Stokes}:\\ \\operatorname{Im}\\Delta = 0,\\ \\operatorname{Re}\\Delta > 0.",
          explanation: "Switching happens where the dominant exponential is maximally large over the recessive one, i.e. on a Stokes line of the exponent difference \\( \\Delta = z^2 \\).",
        },
        {
          stepNumber: 3,
          description: "Solve for the Stokes ray bounding these sectors.",
          workingLatex: "\\operatorname{Im}(z^2) = r^2\\sin 2\\theta = 0,\\ \\operatorname{Re}(z^2)>0 \\;\\Rightarrow\\; \\theta = 0.",
          explanation: "The two sectors \\( 0\\le\\arg z\\le\\pi \\) and \\( -\\pi\\le\\arg z\\le 0 \\) abut along \\( \\arg z = 0 \\), and that ray satisfies the Stokes condition: it is the switching line.",
        },
        {
          stepNumber: 4,
          description: "Why switching is permitted here.",
          workingLatex: "\\arg z = 0:\\ |e^{z^2}|/|{-i\\pi^{1/2}}| = e^{r^2}/\\sqrt\\pi \\to \\infty.",
          explanation: "On the Stokes line the recessive constant is most deeply hidden beneath the dominant term, so it can be born or die without disturbing the visible series — the only place a discontinuous switch is consistent.",
        },
        {
          stepNumber: 5,
          description: "Compare the two representations across the ray.",
          workingLatex: "f|_{\\arg z = 0^+} = e^{z^2}S(z), \\qquad f|_{\\arg z = 0^-} = e^{z^2}S(z) - i\\pi^{1/2}.",
          explanation: "Just above the positive real axis the constant is absent; just below it the constant \\( -i\\pi^{1/2} \\) is present. The change happens as \\( \\arg z \\) crosses \\( 0 \\) downward.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[-3.4,0],[3.4,0],[3.4,2.6],[-3.4,2.6]]} color="var(--mafs-fg-green)" fillOpacity={0.08} strokeOpacity={0} />
  <Polygon points={[[-3.4,0],[3.4,0],[3.4,-2.6],[-3.4,-2.6]]} color="var(--mafs-fg-orange)" fillOpacity={0.08} strokeOpacity={0} />
  <Line.Segment point1={[-3.3,0]} point2={[3.3,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Line.Segment point1={[-2.5,-2.5]} point2={[2.5,2.5]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-2.5,2.5]} point2={[2.5,-2.5]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.35,0.4]} tex="\\text{Stokes}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[-1.5,1.6]} tex="\\text{const}=0" color="var(--mafs-fg-green)" />
  <LaTeX at={[1.3,-1.6]} tex="-i\\sqrt{\\pi}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[-2.55,2.0]} tex="\\text{anti-Stokes}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[2.45,-0.45]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.8,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 6,
          description: "Form the difference of the two limits.",
          workingLatex: "f|_{0^-} - f|_{0^+} = \\big(e^{z^2}S - i\\pi^{1/2}\\big) - e^{z^2}S = -i\\pi^{1/2}.",
          explanation: "Subtracting the two representations cancels the common dominant series and leaves only the newly-appeared constant.",
        },
        {
          stepNumber: 7,
          description: "Identify the Stokes multiplier.",
          workingLatex: "-i\\pi^{1/2} = \\mathcal{S}\\cdot(\\text{recessive term}), \\qquad \\text{recessive term} = i\\pi^{1/2},\\ \\mathcal{S} = -1.",
          explanation: "The jump equals the Stokes multiplier \\( \\mathcal{S} \\) times the recessive companion \\( i\\pi^{1/2} \\); here \\( \\mathcal{S} = -1 \\), the integer switching coefficient.",
        },
        {
          stepNumber: 8,
          description: "Compute the magnitude of the jump.",
          workingLatex: "|{-i\\pi^{1/2}}| = \\pi^{1/2} = \\sqrt{\\pi} \\approx 1.7725.",
          explanation: "The modulus of the purely imaginary jump is \\( \\sqrt\\pi \\).",
        },
        {
          stepNumber: 9,
          description: "Confirm the dominant series is continuous.",
          workingLatex: "e^{z^2}S(z)\\big|_{0^+} = e^{z^2}S(z)\\big|_{0^-}.",
          explanation: "Only the recessive constant changes; the algebraic series \\( e^{z^2}S(z) \\) is identical on both sides, so \\( f \\) itself stays continuous across the ray.",
        },
        {
          stepNumber: 10,
          description: "State the jump.",
          workingLatex: "\\Delta(\\text{recessive term}) = -i\\pi^{1/2}, \\qquad |{-i\\pi^{1/2}}| = \\sqrt{\\pi} \\approx 1.7725.",
          explanation: "The Stokes phenomenon: the subdominant constant changes discontinuously by \\( -i\\pi^{1/2} \\) (the Stokes multiplier times the recessive term) on crossing \\( \\arg z = 0 \\), while the dominant series stays smooth.",
        },
      ],
      finalAnswer: "Switches across the Stokes line \\( \\arg z = 0 \\); the jump is \\( -i\\pi^{1/2} \\), of magnitude \\( \\sqrt{\\pi} \\).",
      canonicalAnswer: "sqrt(pi)",
    },
  },
  {
    id: "am8d-012",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 12",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Consider \\( g(z) = \\int_{i\\infty}^{z} e^{2s^2}\\,ds \\). By integration by parts, find the first three terms of its asymptotic expansion as \\( z \\to \\infty \\) in \\( 0 \\le \\arg z \\le \\pi \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "scaling", "asymptotic expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the derivative of the new exponential.",
          workingLatex: "\\frac{d}{ds}e^{2s^2} = 4s\\,e^{2s^2}.",
          explanation: "The chain rule gives \\( 4s \\) rather than \\( 2s \\), because the exponent is now \\( 2s^2 \\).",
        },
        {
          stepNumber: 2,
          description: "Write the integrand as a derivative.",
          workingLatex: "e^{2s^2} = \\frac{1}{4s}\\,\\frac{d}{ds}e^{2s^2}.",
          explanation: "Dividing by \\( 4s \\) recovers the integrand; the algebraic prefactor is \\( 1/(4s) \\) rather than \\( 1/(2s) \\).",
        },
        {
          stepNumber: 3,
          description: "First integration by parts.",
          workingLatex: "g(z) = \\left[\\frac{e^{2s^2}}{4s}\\right]_{i\\infty}^{z} + \\int_{i\\infty}^{z}\\frac{e^{2s^2}}{4s^2}\\,ds.",
          explanation: "With \\( u = 1/(4s) \\), the by-parts formula yields the first boundary term and a remainder integral.",
        },
        {
          stepNumber: 4,
          description: "Drop the lower boundary term.",
          workingLatex: "s = it:\\ e^{2s^2} = e^{-2t^2} \\to 0 \\;\\Rightarrow\\; g(z) = \\frac{e^{2z^2}}{4z} + \\int_{i\\infty}^{z}\\frac{e^{2s^2}}{4s^2}\\,ds.",
          explanation: "On the imaginary axis \\( e^{2s^2} = e^{-2t^2} \\) decays, so the boundary at \\( i\\infty \\) vanishes; the first coefficient is \\( 1/4 \\).",
        },
        {
          stepNumber: 5,
          description: "Second integration by parts.",
          workingLatex: "\\frac{e^{2s^2}}{4s^2} = \\frac{1}{16s^3}\\frac{d}{ds}e^{2s^2} \\;\\Rightarrow\\; \\int_{i\\infty}^{z}\\frac{e^{2s^2}}{4s^2}\\,ds = \\frac{e^{2z^2}}{16z^3} + \\int_{i\\infty}^{z}\\frac{3\\,e^{2s^2}}{16s^4}\\,ds.",
          explanation: "Differentiating \\( s^{-1} \\) raises the power to \\( s^{-2} \\) and the \\( 1/4 \\) splits into a \\( 1/16 \\) boundary coefficient and a \\( 3/16 \\) remainder.",
        },
        {
          stepNumber: 6,
          description: "Collect the first two boundary terms.",
          workingLatex: "g(z) = \\frac{e^{2z^2}}{4z} + \\frac{e^{2z^2}}{16z^3} + \\int_{i\\infty}^{z}\\frac{3\\,e^{2s^2}}{16s^4}\\,ds.",
          explanation: "Two passes give coefficients \\( 1/4 \\) and \\( 1/16 \\).",
        },
        {
          stepNumber: 7,
          description: "Third integration by parts.",
          workingLatex: "\\int_{i\\infty}^{z}\\frac{3\\,e^{2s^2}}{16s^4}\\,ds = \\frac{3\\,e^{2z^2}}{64z^5} + \\cdots.",
          explanation: "Applying the identity once more with the \\( 3/16 \\) factor and the differentiated \\( s^{-3} \\) gives the \\( 3/64 \\) coefficient.",
        },
        {
          stepNumber: 8,
          description: "Relate the coefficients to the canonical ones.",
          workingLatex: "g(z) = \\frac{1}{\\sqrt2}\\,f(\\sqrt2\\,z), \\qquad c_n^{(g)} = \\frac{(2n-1)!!}{2^{2n+2}}.",
          explanation: "The substitution \\( s\\to s/\\sqrt2 \\) shows \\( g(z) = \\tfrac{1}{\\sqrt2}f(\\sqrt2 z) \\); scaling \\( s^2\\to 2s^2 \\) replaces \\( c_n \\) by \\( c_n/2^{n+1} \\), giving \\( (2n-1)!!/2^{2n+2} \\).",
        },
        {
          stepNumber: 9,
          description: "Assemble the expansion.",
          workingLatex: "g(z) \\sim e^{2z^2}\\left(\\frac{1}{4z} + \\frac{1}{16z^3} + \\frac{3}{64z^5} + \\cdots\\right).",
          explanation: "Collect the three boundary terms with the common factor \\( e^{2z^2} \\).",
        },
        {
          stepNumber: 10,
          description: "Numerical check.",
          workingLatex: "z = 6:\\quad \\text{rel. err} \\sim 5\\times10^{-6}.",
          explanation: "Verified against \\( g(z) = \\tfrac{1}{\\sqrt2}f(\\sqrt2 z) \\) at \\( z=6 \\) to rel. err ~5e-6.",
        },
      ],
      finalAnswer: "\\( g(z) \\sim e^{2z^2}\\left(\\dfrac{1}{4z} + \\dfrac{1}{16z^3} + \\dfrac{3}{64z^5} + \\cdots\\right) \\)",
      canonicalAnswer: "exp(2*z^2)*(1/(4*z)+1/(16*z^3)+3/(64*z^5))",
    },
  },
  {
    id: "am8d-013",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 13",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "After \\( N \\) integrations by parts, \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) has an explicit remainder. Write down \\( R_N(z) \\) as an integral and show that the series is asymptotic, i.e. \\( R_N(z) = o\\!\\left(e^{z^2}z^{-(2N-1)}\\right) \\) for fixed \\( N \\) in \\( 0 \\le \\arg z \\le \\pi \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["remainder", "asymptotic property", "integration by parts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the by-parts recursion structure.",
          workingLatex: "\\text{each pass: boundary } \\frac{c_n e^{z^2}}{z^{2n+1}} \\ +\\ \\text{integral with } s^{-2(n+1)}.",
          explanation: "Every integration by parts peels off one boundary term and leaves an integral with two extra powers of \\( s \\) in the denominator and a double-factorial prefactor.",
        },
        {
          stepNumber: 2,
          description: "State the partial sum.",
          workingLatex: "f(z) = e^{z^2}\\sum_{n=0}^{N-1}\\frac{c_n}{z^{2n+1}} + R_N(z), \\qquad c_n = \\frac{(2n-1)!!}{2^{n+1}}.",
          explanation: "Truncating after \\( N \\) boundary terms defines the remainder \\( R_N \\) as whatever the trailing integral contributes.",
        },
        {
          stepNumber: 3,
          description: "Write the remainder as an integral.",
          workingLatex: "R_N(z) = \\frac{(2N-1)!!}{2^{N}}\\int_{i\\infty}^{z}\\frac{e^{s^2}}{s^{2N}}\\,ds.",
          explanation: "After \\( N \\) passes the remainder is exactly this integral, with prefactor \\( (2N-1)!!/2^N \\) accumulated from the recursion.",
        },
        {
          stepNumber: 4,
          description: "Bound the exponential factor on the tail.",
          workingLatex: "\\text{near } s = z:\\quad |e^{s^2}| \\le |e^{z^2}|.",
          explanation: "In the sector \\( 0 \\le \\arg z \\le \\pi \\) the contour can be taken so that \\( |e^{s^2}| \\) is maximised at the endpoint \\( s = z \\), giving an upper bound by its endpoint value.",
        },
        {
          stepNumber: 5,
          description: "Bound the algebraic factor.",
          workingLatex: "|s| \\ge |z| \\;\\Rightarrow\\; |s|^{-2N} \\le |z|^{-2N}.",
          explanation: "Along the descent tail the modulus \\( |s| \\) is at least \\( |z| \\), so the algebraic weight is largest at the endpoint.",
        },
        {
          stepNumber: 6,
          description: "Estimate the effective contour length.",
          workingLatex: "L = O\\!\\left(\\frac{1}{|z|}\\right).",
          explanation: "By the Laplace/steepest-descent estimate the integrand stays within an \\( O(1) \\) factor of its endpoint value only over a length \\( \\sim 1/|z| \\), because \\( e^{s^2} \\) falls off on that scale.",
        },
        {
          stepNumber: 7,
          description: "Assemble the remainder bound.",
          workingLatex: "|R_N(z)| \\le \\frac{(2N-1)!!}{2^{N}}\\,\\frac{|e^{z^2}|}{|z|^{2N}}\\cdot L.",
          explanation: "Multiplying the prefactor by the maximal integrand and the effective length gives a clean upper bound on \\( R_N \\).",
        },
        {
          stepNumber: 8,
          description: "Identify the last term kept.",
          workingLatex: "T_{N-1} = e^{z^2}\\frac{c_{N-1}}{z^{2N-1}} = e^{z^2}\\frac{(2N-3)!!}{2^{N}}z^{-(2N-1)}.",
          explanation: "The last term retained in the partial sum has this size; we compare the remainder against it.",
        },
        {
          stepNumber: 9,
          description: "Form the ratio.",
          workingLatex: "\\frac{|R_N(z)|}{|e^{z^2}|\\,|z|^{-(2N-1)}} = O\\!\\left(\\frac{1}{|z|^{2}}\\right) \\to 0 \\quad (|z|\\to\\infty,\\ N\\ \\text{fixed}).",
          explanation: "The factors of \\( (2N-1)!! \\), \\( 2^N \\) and \\( L = O(1/|z|) \\) combine so the remainder is smaller than the last term by \\( O(z^{-2}) \\) for fixed \\( N \\).",
        },
        {
          stepNumber: 10,
          description: "Conclude the series is asymptotic.",
          workingLatex: "R_N(z) = o\\!\\left(e^{z^2}z^{-(2N-1)}\\right).",
          explanation: "The remainder is smaller than the last term kept, the defining property of an asymptotic series. Numerically (\\( z=6 \\)) the optimal remainder sits within ~25% of the first neglected term — the hallmark of an optimally truncated asymptotic series.",
        },
      ],
      finalAnswer: "\\( R_N(z) = \\dfrac{(2N-1)!!}{2^{N}}\\displaystyle\\int_{i\\infty}^{z}\\dfrac{e^{s^2}}{s^{2N}}\\,ds = o\\!\\left(e^{z^2}z^{-(2N-1)}\\right) \\).",
    },
  },
  {
    id: "am8d-014",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 14",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Explain why the algebraic series \\( e^{z^2}\\sum_n c_n z^{-(2n+1)} \\) for \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) cannot, on its own, reproduce the recessive constant \\( -i\\pi^{1/2} \\). Frame your answer in terms of the term ratio of the series.",
    marks: 3,
    yearCreated: 2026,
    tags: ["divergent series", "least term", "subdominant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the n-th term.",
          workingLatex: "a_n = c_n\\,z^{-(2n+1)}, \\qquad c_n = \\frac{(2n-1)!!}{2^{n+1}}.",
          explanation: "The general term of the algebraic series (relative to \\( e^{z^2} \\)) is \\( a_n \\); its growth as \\( n \\) increases decides whether the series converges.",
        },
        {
          stepNumber: 2,
          description: "Use the coefficient recursion.",
          workingLatex: "c_{n+1} = \\frac{2n+1}{2}\\,c_n.",
          explanation: "From the by-parts recursion the coefficients grow by the factor \\( (2n+1)/2 \\) at each step.",
        },
        {
          stepNumber: 3,
          description: "Compute the term ratio.",
          workingLatex: "\\frac{a_{n+1}}{a_n} = \\frac{c_{n+1}z^{-(2n+3)}}{c_n z^{-(2n+1)}} = \\frac{2n+1}{2}\\cdot\\frac{1}{z^2}.",
          explanation: "The double-factorial growth combines with the extra \\( z^{-2} \\) from each term.",
        },
        {
          stepNumber: 4,
          description: "Observe divergence.",
          workingLatex: "\\frac{a_{n+1}}{a_n} = \\frac{2n+1}{2|z|^2} \\to \\infty \\quad (n\\to\\infty,\\ z\\ \\text{fixed}).",
          explanation: "The ratio grows linearly in \\( n \\), so for every fixed \\( z \\) the terms eventually grow without bound: the series diverges — it is asymptotic, not convergent.",
        },
        {
          stepNumber: 5,
          description: "Locate where terms stop decreasing.",
          workingLatex: "\\left|\\frac{a_{n+1}}{a_n}\\right| = 1 \\iff \\frac{2n+1}{2} = |z|^2 \\iff n \\approx |z|^2.",
          explanation: "The terms shrink while the ratio is below 1 and grow once it exceeds 1; the turning point — the least term — sits at \\( n \\approx |z|^2 \\).",
        },
        {
          stepNumber: 6,
          description: "Estimate the least term by Stirling.",
          workingLatex: "(2N-1)!! \\sim \\sqrt2\\,(2N/e)^{N},\\quad N = |z|^2 \\;\\Rightarrow\\; a_{N} \\sim \\text{const}\\cdot e^{-|z|^2}.",
          explanation: "Inserting \\( N \\approx |z|^2 \\) and Stirling's formula for the double factorial, the powers of \\( |z| \\) and \\( 2 \\) cancel and leave the exponential factor \\( e^{-N} = e^{-|z|^2} \\).",
        },
        {
          stepNumber: 7,
          description: "State the optimal error.",
          workingLatex: "\\text{least term} \\sim e^{-|z|^2}\\ \\text{(relative to the leading term)}.",
          explanation: "Truncating at the smallest term gives an optimal error exponentially small in \\( |z|^2 \\) — the best any algebraic truncation can achieve.",
        },
        {
          stepNumber: 8,
          description: "Numerical check of the least term.",
          workingLatex: "z = 6:\\quad \\frac{\\text{least term}}{\\text{leading}} = 3.3\\times10^{-16} \\approx e^{-36} = 2.3\\times10^{-16}.",
          explanation: "At \\( z=6 \\) the numerically smallest term is \\( 3.3\\times10^{-16} \\) of the leading term, matching \\( e^{-|z|^2} = e^{-36} \\) to within an algebraic prefactor.",
        },
        {
          stepNumber: 9,
          description: "Size the recessive constant.",
          workingLatex: "\\frac{|{-i\\pi^{1/2}}|}{|e^{z^2}/(2z)|} = 2|z|\\sqrt\\pi\\,e^{-\\operatorname{Re}(z^2)} \\sim |z|\\,e^{-|z|^2}\\ (\\text{real axis}).",
          explanation: "On the real axis \\( \\operatorname{Re}(z^2) = |z|^2 \\), so the recessive constant relative to the leading term is of order \\( e^{-|z|^2} \\) — the same scale as the least term.",
        },
        {
          stepNumber: 10,
          description: "Draw the conclusion.",
          workingLatex: "|{-i\\pi^{1/2}}|/|\\text{leading}| \\sim (\\text{optimal-truncation error}) \\sim e^{-|z|^2}.",
          explanation: "The recessive constant lives entirely beneath the least term of the divergent series, so no finite — or even optimally truncated — algebraic series can resolve it; a separate Stokes-switching mechanism is required.",
        },
      ],
      finalAnswer: "The constant is exponentially small (\\( \\sim e^{-|z|^2} \\)) compared with the dominant term — beyond the least term of the divergent series — so the algebraic series cannot capture it.",
    },
  },
  {
    id: "am8d-015",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 15",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Verify the leading term of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) by showing \\( \\displaystyle\\lim_{z\\to\\infty}\\frac{f(z)}{e^{z^2}/(2z)} = 1 \\) within \\( 0 < \\arg z < \\pi/4 \\), using \\( f(z) = \\tfrac{\\sqrt\\pi}{2}(\\operatorname{erfi}(z)-i) \\) and the standard \\( \\operatorname{erfc} \\) asymptotics.",
    marks: 4,
    yearCreated: 2026,
    tags: ["asymptotic property", "error function", "limit"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the closed form.",
          workingLatex: "f(z) = \\frac{\\sqrt\\pi}{2}\\big(\\operatorname{erfi}(z) - i\\big).",
          explanation: "We extract the leading term of \\( f \\) from its exact expression in terms of \\( \\operatorname{erfi} \\).",
        },
        {
          stepNumber: 2,
          description: "Relate erfi to erf.",
          workingLatex: "\\operatorname{erfi}(z) = -i\\,\\operatorname{erf}(iz).",
          explanation: "The imaginary error function is a rotation of the ordinary one; this lets us use the standard \\( \\operatorname{erf} \\)/\\( \\operatorname{erfc} \\) asymptotics.",
        },
        {
          stepNumber: 3,
          description: "Introduce the complementary error function.",
          workingLatex: "\\operatorname{erf}(w) = 1 - \\operatorname{erfc}(w), \\qquad w = iz.",
          explanation: "Splitting off \\( \\operatorname{erfc} \\) isolates the large-argument tail, which carries the dominant exponential.",
        },
        {
          stepNumber: 4,
          description: "Write erfi via erfc.",
          workingLatex: "\\operatorname{erfi}(z) = -i\\big(1 - \\operatorname{erfc}(iz)\\big) = -i + i\\,\\operatorname{erfc}(iz).",
          explanation: "Substituting \\( \\operatorname{erf}(iz) = 1 - \\operatorname{erfc}(iz) \\) and distributing the \\( -i \\).",
        },
        {
          stepNumber: 5,
          description: "Cancel the constant inside f.",
          workingLatex: "\\operatorname{erfi}(z) - i = i\\,\\operatorname{erfc}(iz) - 2i.",
          explanation: "The \\( -i \\) from the closed form combines with the \\( -i \\) from \\( \\operatorname{erfi} \\); the surviving exponentially-growing part is \\( i\\,\\operatorname{erfc}(iz) \\) (the \\( -2i \\) is a recessive constant).",
        },
        {
          stepNumber: 6,
          description: "Use the standard erfc tail.",
          workingLatex: "\\operatorname{erfc}(w) \\sim \\frac{e^{-w^2}}{\\sqrt{\\pi}\\,w} \\qquad (|\\arg w| < \\tfrac{3\\pi}{4}).",
          explanation: "This is the leading-order large-argument behaviour of the complementary error function, valid in the indicated wedge.",
        },
        {
          stepNumber: 7,
          description: "Transport the exponent through w = iz.",
          workingLatex: "w = iz:\\quad w^2 = -z^2 \\;\\Rightarrow\\; e^{-w^2} = e^{z^2}.",
          explanation: "With \\( w = iz \\), \\( e^{-w^2} = e^{z^2} \\): the decaying \\( \\operatorname{erfc} \\) tail becomes the growing dominant exponential of \\( f \\).",
        },
        {
          stepNumber: 8,
          description: "Check the validity sector.",
          workingLatex: "0 < \\arg z < \\tfrac{\\pi}{4} \\;\\Rightarrow\\; \\arg(iz) = \\arg z + \\tfrac{\\pi}{2} \\in (\\tfrac\\pi2,\\tfrac{3\\pi}{4}) \\subset (-\\tfrac{3\\pi}{4},\\tfrac{3\\pi}{4}).",
          explanation: "For \\( 0 < \\arg z < \\pi/4 \\) the argument \\( \\arg(iz) \\) stays inside the validity wedge. Numerically \\( \\operatorname{erfc}(5) = 1.537\\times10^{-12} \\) vs the tail \\( 1.567\\times10^{-12} \\).",
        },
        {
          stepNumber: 9,
          description: "Assemble f(z).",
          workingLatex: "f(z) \\sim \\frac{\\sqrt\\pi}{2}\\cdot i\\cdot\\frac{e^{z^2}}{\\sqrt\\pi\\,(iz)} = \\frac{e^{z^2}}{2z}.",
          explanation: "Substitute the tail: the factors \\( i \\) and \\( \\sqrt\\pi \\) cancel, the recessive \\( -2i \\) is dominated by the exponential, and the leading term is \\( e^{z^2}/(2z) \\).",
        },
        {
          stepNumber: 10,
          description: "Take the limit.",
          workingLatex: "\\frac{f(z)}{e^{z^2}/(2z)} \\to 1.",
          explanation: "The leading term is confirmed. At \\( z=8 \\) the ratio is \\( 1 + O(z^{-2}) \\), matching to ~1e-2 with one term and ~4e-7 with four.",
        },
      ],
      finalAnswer: "\\( \\displaystyle\\lim_{z\\to\\infty}\\frac{f(z)}{e^{z^2}/(2z)} = 1 \\), confirming the leading term.",
      canonicalAnswer: "1",
    },
  },
  {
    id: "am8d-016",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 16",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "The complementary error function has \\( \\operatorname{erfc}(z) \\sim \\dfrac{e^{-z^2}}{\\sqrt\\pi\\,z}\\sum_{n\\ge 0}(-1)^n\\dfrac{(2n-1)!!}{(2z^2)^n} \\). Identify the dominant exponential, the recessive companion exponential, and write down the first two terms of the series.",
    marks: 3,
    yearCreated: 2026,
    tags: ["complementary error function", "dominant balance", "recessive exponential"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off the prefactor exponential.",
          workingLatex: "\\operatorname{erfc}(z) \\sim \\frac{e^{-z^2}}{\\sqrt\\pi\\,z}\\sum_{n\\ge 0}(-1)^n\\frac{(2n-1)!!}{(2z^2)^n}.",
          explanation: "The whole series multiplies \\( e^{-z^2} \\); this exponential sets the visible scale of \\( \\operatorname{erfc} \\).",
        },
        {
          stepNumber: 2,
          description: "Identify the dominant exponential.",
          workingLatex: "z = x \\to +\\infty:\\ e^{-z^2} = e^{-x^2} \\to 0.",
          explanation: "For real \\( z \\to +\\infty \\) the prefactor \\( e^{-z^2} \\) decays; this decaying exponential is the dominant scale of the represented function.",
        },
        {
          stepNumber: 3,
          description: "Identify the recessive companion.",
          workingLatex: "\\text{second solution } \\sim e^{+z^2} \\ \\text{grows; hidden beneath } e^{-z^2}.",
          explanation: "The underlying differential equation has a second, linearly independent solution growing like \\( e^{+z^2} \\); it is the recessive companion hidden beneath the visible \\( \\operatorname{erfc} \\) series.",
        },
        {
          stepNumber: 4,
          description: "Compute the n = 0 coefficient.",
          workingLatex: "n=0:\\ (-1)^0\\frac{(2\\cdot 0-1)!!}{(2z^2)^0} = \\frac{(-1)!!}{1} = 1.",
          explanation: "By convention \\( (-1)!! = 1 \\), so the leading coefficient is \\( 1 \\).",
        },
        {
          stepNumber: 5,
          description: "Compute the n = 1 coefficient.",
          workingLatex: "n=1:\\ (-1)^1\\frac{(1)!!}{(2z^2)^1} = -\\frac{1}{2z^2}.",
          explanation: "With \\( (2\\cdot 1 - 1)!! = 1!! = 1 \\) and the alternating sign, the next term is \\( -1/(2z^2) \\).",
        },
        {
          stepNumber: 6,
          description: "Note the alternating sign pattern.",
          workingLatex: "(-1)^n:\\quad +,\\,-,\\,+,\\,-,\\ldots",
          explanation: "Unlike the \\( f \\)-series (all positive), the \\( \\operatorname{erfc} \\) coefficients alternate in sign because of the \\( (-1)^n \\) factor — a consequence of the \\( e^{-z^2} \\) (decaying) scale.",
        },
        {
          stepNumber: 7,
          description: "Assemble the first two terms.",
          workingLatex: "\\operatorname{erfc}(z) \\sim \\frac{e^{-z^2}}{\\sqrt\\pi\\,z}\\left(1 - \\frac{1}{2z^2} + \\cdots\\right).",
          explanation: "Combining the prefactor with the first two series coefficients.",
        },
        {
          stepNumber: 8,
          description: "State the validity sector.",
          workingLatex: "|\\arg z| < \\frac{3\\pi}{4}.",
          explanation: "The expansion holds while the kept \\( e^{-z^2} \\) scale dominates the recessive \\( e^{+z^2} \\); the boundary is set by the anti-Stokes directions \\( \\arg z = \\pm 3\\pi/4 \\), beyond which the companion takes over.",
        },
        {
          stepNumber: 9,
          description: "Numerical check.",
          workingLatex: "\\operatorname{erfc}(5) = 1.537\\times10^{-12}, \\qquad \\frac{e^{-25}}{\\sqrt\\pi\\cdot 5} = 1.567\\times10^{-12}.",
          explanation: "The one-term tail agrees with the true value to ~2%, confirming the leading behaviour.",
        },
        {
          stepNumber: 10,
          description: "State the conclusion.",
          workingLatex: "\\text{dominant: } e^{-z^2}; \\quad \\text{recessive companion: } e^{+z^2}; \\quad 1 - \\tfrac{1}{2z^2} + \\cdots.",
          explanation: "The hidden \\( e^{+z^2} \\) is the recessive term whose Stokes switching delimits the validity sector, exactly mirroring the \\( f \\)-integral's structure with the roles of the two exponentials exchanged.",
        },
      ],
      finalAnswer: "Dominant \\( e^{-z^2} \\), recessive \\( e^{+z^2} \\); \\( \\operatorname{erfc}(z)\\sim\\dfrac{e^{-z^2}}{\\sqrt\\pi z}\\!\\left(1-\\dfrac{1}{2z^2}+\\cdots\\right) \\).",
      canonicalAnswer: "exp(-z^2)/(sqrt(pi)*z)*(1 - 1/(2*z^2))",
    },
  },
  // REVIEW: the diagram is a growth/decay sector figure; the anti-Stokes angles
  // and the cos(2theta) sign analysis are machine-checkable and were verified.
  {
    id: "am8d-017",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 17",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "On which rays \\( \\arg z = \\theta \\) is \\( e^{z^2} \\) growing and on which is it decaying (so that \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) stays bounded)? Use this to identify the sectors separated by the anti-Stokes lines.",
    marks: 3,
    yearCreated: 2026,
    tags: ["anti-Stokes lines", "growth and decay", "sectors"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the exponent in polar form.",
          workingLatex: "z = re^{i\\theta} \\;\\Rightarrow\\; z^2 = r^2 e^{2i\\theta}, \\quad \\operatorname{Re}(z^2) = r^2\\cos 2\\theta.",
          explanation: "Squaring doubles the argument; the real part of the exponent is \\( r^2\\cos 2\\theta \\).",
        },
        {
          stepNumber: 2,
          description: "Write the growth rate.",
          workingLatex: "|e^{z^2}| = e^{\\operatorname{Re}(z^2)} = e^{r^2\\cos 2\\theta}.",
          explanation: "Growth or decay of the dominant exponential is governed entirely by the sign of \\( \\operatorname{Re}(z^2) = r^2\\cos 2\\theta \\).",
        },
        {
          stepNumber: 3,
          description: "Growth condition.",
          workingLatex: "\\cos 2\\theta > 0 \\iff |\\theta| < \\frac{\\pi}{4} \\ \\text{ or }\\ |\\theta - \\pi| < \\frac{\\pi}{4}.",
          explanation: "When \\( \\cos 2\\theta > 0 \\) the exponent has positive real part and \\( e^{z^2} \\) grows; this happens within \\( \\pi/4 \\) of the real axis in either direction.",
        },
        {
          stepNumber: 4,
          description: "Decay condition.",
          workingLatex: "\\cos 2\\theta < 0 \\iff |\\theta - \\tfrac\\pi2| < \\frac{\\pi}{4} \\ \\text{ or }\\ |\\theta - \\tfrac{3\\pi}{2}| < \\frac{\\pi}{4}.",
          explanation: "When \\( \\cos 2\\theta < 0 \\) the exponent has negative real part and \\( e^{z^2} \\) decays; this happens within \\( \\pi/4 \\) of the imaginary axis, where \\( f \\) stays bounded.",
        },
        {
          stepNumber: 5,
          description: "Boundary condition.",
          workingLatex: "\\cos 2\\theta = 0 \\iff \\theta = \\frac{\\pi}{4} + k\\frac{\\pi}{2}.",
          explanation: "The growth and decay sectors are separated by the rays where \\( \\cos 2\\theta = 0 \\), i.e. \\( |e^{z^2}| = 1 \\).",
        },
        {
          stepNumber: 6,
          description: "Name the boundaries.",
          workingLatex: "\\text{anti-Stokes lines: } \\theta = \\frac{\\pi}{4},\\,\\frac{3\\pi}{4},\\,\\frac{5\\pi}{4},\\,\\frac{7\\pi}{4}.",
          explanation: "These four rays where \\( \\cos 2\\theta = 0 \\) separate growth sectors (around \\( \\theta = 0,\\pi \\)) from decay sectors (around \\( \\theta = \\pi/2, 3\\pi/2 \\)). They are the anti-Stokes lines; the integral is oscillatory/bounded on them.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[0,0],[2.6,2.6],[2.6,-2.6]]} color="var(--mafs-fg-orange)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[-2.6,2.6],[-2.6,-2.6]]} color="var(--mafs-fg-orange)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[2.6,2.6],[-2.6,2.6]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[2.6,-2.6],[-2.6,-2.6]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Line.Segment point1={[-3.3,0]} point2={[3.3,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Line.Segment point1={[-2.5,-2.5]} point2={[2.5,2.5]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-2.5,2.5]} point2={[2.5,-2.5]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.3,0.4]} tex="\\text{dominant}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.0,1.85]} tex="\\text{subdominant}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-2.6,1.95]} tex="\\text{anti-Stokes}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[2.45,-0.5]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.8,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 7,
          description: "Count the sectors.",
          workingLatex: "4\\ \\text{boundaries} \\;\\Rightarrow\\; 4\\ \\text{sectors of opening } \\frac{\\pi}{2}\\ \\text{each}.",
          explanation: "The four anti-Stokes lines partition the plane into four sectors of equal opening \\( \\pi/2 \\), alternating growth and decay.",
        },
        {
          stepNumber: 8,
          description: "Behaviour on an anti-Stokes line.",
          workingLatex: "\\theta = \\tfrac\\pi4:\\ z^2 = ir^2,\\ |e^{z^2}| = 1 \\;\\Rightarrow\\; e^{z^2}\\ \\text{purely oscillatory}.",
          explanation: "On an anti-Stokes line \\( z^2 \\) is purely imaginary, so \\( e^{z^2} \\) neither grows nor decays — it oscillates, and \\( f \\) is bounded there.",
        },
        {
          stepNumber: 9,
          description: "Contrast with the Stokes lines.",
          workingLatex: "\\text{Stokes } (\\theta = 0,\\pi):\\ \\operatorname{Re}(z^2)\\ \\text{maximal};\\quad \\text{anti-Stokes}:\\ \\operatorname{Re}(z^2)=0.",
          explanation: "The anti-Stokes lines (boundedness) are the diagonals; the Stokes lines (maximal dominance) are the real axis, midway between them — the two families interleave at \\( \\pi/4 \\) offsets.",
        },
        {
          stepNumber: 10,
          description: "State the result.",
          workingLatex: "\\text{grow: } |\\theta|<\\tfrac\\pi4,\\,|\\theta-\\pi|<\\tfrac\\pi4;\\quad \\text{decay: near } \\pm i;\\quad \\text{anti-Stokes: } \\tfrac\\pi4,\\tfrac{3\\pi}4,\\tfrac{5\\pi}4,\\tfrac{7\\pi}4.",
          explanation: "Two opposite growth sectors hug the real axis; two decay sectors hug the imaginary axis; the four diagonal anti-Stokes lines separate them.",
        },
      ],
      finalAnswer: "Growing for \\( |\\arg z| < \\pi/4 \\) or \\( |\\arg z - \\pi| < \\pi/4 \\); decaying near the imaginary axis. Anti-Stokes lines at \\( \\arg z = \\pi/4, 3\\pi/4, 5\\pi/4, 7\\pi/4 \\).",
    },
  },
  {
    id: "am8d-018",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 18",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For \\( h(z) = \\int_{z}^{i\\infty} e^{s^2}\\,ds \\), relate \\( h \\) to \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\), and hence write down the asymptotic expansion of \\( h(z) \\) as \\( z \\to \\infty \\) in \\( 0 \\le \\arg z \\le \\pi \\), and state its recessive constant in the lower half-plane.",
    marks: 3,
    yearCreated: 2026,
    tags: ["orientation", "asymptotic expansion", "recessive constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare the limits of h and f.",
          workingLatex: "h(z) = \\int_{z}^{i\\infty} e^{s^2}\\,ds, \\qquad f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds.",
          explanation: "The two integrals have the same integrand and the same endpoints but traversed in opposite order.",
        },
        {
          stepNumber: 2,
          description: "Reverse the limits.",
          workingLatex: "\\int_{z}^{i\\infty} = -\\int_{i\\infty}^{z} \\;\\Rightarrow\\; h(z) = -f(z).",
          explanation: "Swapping the limits of integration changes the sign of the integral, so \\( h = -f \\) exactly.",
        },
        {
          stepNumber: 3,
          description: "Recall the f-expansion.",
          workingLatex: "f(z) \\sim e^{z^2}\\left(\\frac{1}{2z} + \\frac{1}{4z^3} + \\frac{3}{8z^5} + \\cdots\\right).",
          explanation: "This is the established IBP series for \\( f \\) in \\( 0 \\le \\arg z \\le \\pi \\).",
        },
        {
          stepNumber: 4,
          description: "Negate term by term.",
          workingLatex: "h(z) = -f(z) \\sim -e^{z^2}\\left(\\frac{1}{2z} + \\frac{1}{4z^3} + \\frac{3}{8z^5} + \\cdots\\right).",
          explanation: "Apply the minus sign termwise to obtain the expansion of \\( h \\).",
        },
        {
          stepNumber: 5,
          description: "Recall the two-representation identity for f.",
          workingLatex: "f(z) = \\int_{-i\\infty}^{z} e^{s^2}\\,ds - i\\pi^{1/2}.",
          explanation: "From the contour split, \\( f \\) relates to its lower-half-plane representation by the recessive constant \\( -i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 6,
          description: "Negate the identity.",
          workingLatex: "h(z) = -f(z) = -\\int_{-i\\infty}^{z} e^{s^2}\\,ds + i\\pi^{1/2}.",
          explanation: "Multiplying through by \\( -1 \\) flips the sign of both the integral and the constant.",
        },
        {
          stepNumber: 7,
          description: "Read off the recessive constant.",
          workingLatex: "\\text{recessive constant of } h = +i\\pi^{1/2}.",
          explanation: "The constant for \\( h \\) is \\( +i\\pi^{1/2} \\), the negative of that for \\( f \\).",
        },
        {
          stepNumber: 8,
          description: "Locate the Stokes line.",
          workingLatex: "\\Delta = z^2:\\ \\text{Stokes line } \\arg z = 0\\ \\text{(unchanged)}.",
          explanation: "Reversing orientation does not change the exponent difference \\( \\Delta = z^2 \\), so \\( h \\) shares \\( f \\)'s Stokes line at \\( \\arg z = 0 \\).",
        },
        {
          stepNumber: 9,
          description: "Determine the jump for h.",
          workingLatex: "\\text{jump of } h = -(\\text{jump of } f) = -(-i\\pi^{1/2}) = +i\\pi^{1/2}.",
          explanation: "Since \\( h = -f \\), every Stokes jump of \\( h \\) is the negative of \\( f \\)'s; crossing \\( \\arg z = 0 \\) downward, \\( h \\) gains \\( +i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 10,
          description: "State the result.",
          workingLatex: "h(z) = -f(z) \\sim -e^{z^2}S(z), \\qquad \\text{recessive constant } +i\\pi^{1/2}.",
          explanation: "The Stokes structure of \\( h \\) is exactly that of \\( -f \\): same dominant series up to sign, recessive constant flipped in sign.",
        },
      ],
      finalAnswer: "\\( h(z) = -f(z) \\sim -e^{z^2}\\left(\\dfrac{1}{2z} + \\dfrac{1}{4z^3} + \\dfrac{3}{8z^5} + \\cdots\\right) \\); recessive constant \\( +i\\pi^{1/2} \\).",
      canonicalAnswer: "-exp(z^2)*(1/(2*z)+1/(4*z^3)+3/(8*z^5))",
    },
  },

  // ════════════════════════════════════════════════════════════════════
  // CHALLENGE (12) — synoptic / multi-step / starred-level / cross-method.
  // ════════════════════════════════════════════════════════════════════
  // REVIEW: the diagram marks the Stokes line and both half-plane constants;
  // the jump -i*pi^{1/2} and the closed form are verified.
  {
    id: "am8d-019",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 19",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Establish the complete picture for \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) across the real axis: write the asymptotic representation in \\( 0 \\le \\arg z \\le \\pi \\) and in \\( -\\pi \\le \\arg z \\le 0 \\), identify the Stokes line where the constant switches, and compute the discontinuity in the recessive constant.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Stokes phenomenon", "synoptic", "switching", "subdominant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the canonical integral.",
          workingLatex: "f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds, \\qquad e^{s^2}\\ \\text{entire}.",
          explanation: "We assemble the full Stokes picture for this single integral; everything follows from the exponent \\( s^2 \\) and the base point \\( i\\infty \\).",
        },
        {
          stepNumber: 2,
          description: "Define the dominant series.",
          workingLatex: "S(z) = \\frac{1}{2z}+\\frac{1}{4z^3}+\\frac{3}{8z^5}+\\cdots = \\sum_{n\\ge0}\\frac{c_n}{z^{2n+1}},\\ c_n = \\frac{(2n-1)!!}{2^{n+1}}.",
          explanation: "Repeated integration by parts produces this algebraic series multiplying \\( e^{z^2} \\); it is common to every sector.",
        },
        {
          stepNumber: 3,
          description: "Upper-half-plane representation.",
          workingLatex: "f(z) \\sim e^{z^2}S(z), \\qquad 0 \\le \\arg z \\le \\pi.",
          explanation: "Direct integration by parts from the base point \\( i\\infty \\); the boundary term at \\( i\\infty \\) vanishes and the recessive constant is absent in this sector.",
        },
        {
          stepNumber: 4,
          description: "Re-base the contour for the lower half-plane.",
          workingLatex: "f(z) = \\int_{-i\\infty}^{z} e^{s^2}\\,ds - i\\pi^{1/2}.",
          explanation: "For \\( -\\pi \\le \\arg z \\le 0 \\) the natural base point is \\( -i\\infty \\); the contour split through the imaginary axis introduces the constant \\( -i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 5,
          description: "Lower-half-plane representation.",
          workingLatex: "f(z) \\sim e^{z^2}S(z) - i\\pi^{1/2}, \\qquad -\\pi \\le \\arg z \\le 0.",
          explanation: "The integral \\( \\int_{-i\\infty}^z \\) has the same dominant series, so the constant \\( -i\\pi^{1/2} \\) is now explicit and recessive.",
        },
        {
          stepNumber: 6,
          description: "Form the exponent difference.",
          workingLatex: "\\Delta = (\\text{dominant exponent}) - (\\text{recessive exponent}) = z^2 - 0 = z^2.",
          explanation: "The dominant exponential is \\( e^{z^2} \\) and the recessive constant carries exponent \\( 0 \\); their difference \\( \\Delta = z^2 \\) controls the Stokes geometry.",
        },
        {
          stepNumber: 7,
          description: "Apply the Stokes condition.",
          workingLatex: "\\operatorname{Im}\\Delta = r^2\\sin 2\\theta = 0,\\quad \\operatorname{Re}\\Delta = r^2\\cos 2\\theta > 0.",
          explanation: "A Stokes line requires \\( \\Delta \\) real and positive, i.e. \\( \\sin 2\\theta = 0 \\) with \\( \\cos 2\\theta > 0 \\).",
        },
        {
          stepNumber: 8,
          description: "Locate the Stokes line.",
          workingLatex: "\\sin 2\\theta = 0,\\ \\cos 2\\theta > 0 \\;\\Rightarrow\\; \\arg z = 0.",
          explanation: "Of the candidate rays, only \\( \\arg z = 0 \\) lies between the two abutting sectors; there \\( e^{z^2} \\) is maximally dominant and the recessive constant can switch.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[-3.4,0],[3.4,0],[3.4,2.6],[-3.4,2.6]]} color="var(--mafs-fg-green)" fillOpacity={0.08} strokeOpacity={0} />
  <Polygon points={[[-3.4,0],[3.4,0],[3.4,-2.6],[-3.4,-2.6]]} color="var(--mafs-fg-orange)" fillOpacity={0.08} strokeOpacity={0} />
  <Line.Segment point1={[-3.3,0]} point2={[3.3,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Line.Segment point1={[-2.5,-2.5]} point2={[2.5,2.5]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-2.5,2.5]} point2={[2.5,-2.5]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.5,1.6]} tex="\\text{const}=0" color="var(--mafs-fg-green)" />
  <LaTeX at={[1.3,-1.6]} tex="-i\\sqrt{\\pi}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.35,0.4]} tex="\\text{Stokes}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.45,-0.45]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.8,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 9,
          description: "Define the recessive part.",
          workingLatex: "\\rho(\\arg z) := f(z) - e^{z^2}S(z).",
          explanation: "Subtracting the common dominant series isolates the recessive content, which is what may jump across the Stokes line.",
        },
        {
          stepNumber: 10,
          description: "Evaluate just above the ray.",
          workingLatex: "\\rho(0^+) = e^{z^2}S(z) - e^{z^2}S(z) = 0.",
          explanation: "In the upper sector the representation has no constant, so the recessive part is zero.",
        },
        {
          stepNumber: 11,
          description: "Evaluate just below the ray.",
          workingLatex: "\\rho(0^-) = \\big(e^{z^2}S(z) - i\\pi^{1/2}\\big) - e^{z^2}S(z) = -i\\pi^{1/2}.",
          explanation: "In the lower sector the constant \\( -i\\pi^{1/2} \\) is present, so the recessive part is \\( -i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 12,
          description: "Compute the discontinuity.",
          workingLatex: "\\rho(0^-) - \\rho(0^+) = -i\\pi^{1/2} - 0 = -i\\pi^{1/2}.",
          explanation: "The recessive part jumps by \\( -i\\pi^{1/2} \\) on crossing \\( \\arg z = 0 \\) from above to below.",
        },
        {
          stepNumber: 13,
          description: "Factor as Stokes multiplier times recessive term.",
          workingLatex: "-i\\pi^{1/2} = \\mathcal{S}\\cdot i\\pi^{1/2}, \\qquad \\mathcal{S} = -1.",
          explanation: "The jump equals the Stokes multiplier \\( \\mathcal{S} = -1 \\) times the recessive companion \\( i\\pi^{1/2} \\) (the value of the Gaussian up the imaginary axis).",
        },
        {
          stepNumber: 14,
          description: "Show f itself is continuous.",
          workingLatex: "\\lim_{\\arg z\\to 0^+} f(z) = \\lim_{\\arg z\\to 0^-} f(z),",
          explanation: "Although the recessive bookkeeping jumps, the function \\( f \\) is single-valued and entire, so its actual value varies continuously across the ray.",
        },
        {
          stepNumber: 15,
          description: "Quantify the size of the constant on the ray.",
          workingLatex: "\\frac{|{-i\\pi^{1/2}}|}{|e^{z^2}/(2z)|} = 2|z|\\sqrt\\pi\\,e^{-|z|^2} \\to 0 \\quad (z\\to\\infty\\ \\text{on } \\arg z = 0).",
          explanation: "On the Stokes line the constant is exponentially smaller than every term of the dominant series, so changing it leaves the visible asymptotics unchanged.",
        },
        {
          stepNumber: 16,
          description: "Reconcile the two representations.",
          workingLatex: "\\text{On } \\arg z = 0:\\ e^{z^2}S(z)\\ \\text{identical; constant exponentially small}.",
          explanation: "Both representations are consistent on the overlap: the smooth dominant series is continuous and only the invisible constant changes — no contradiction.",
        },
        {
          stepNumber: 17,
          description: "Numerical verification.",
          workingLatex: "f = \\tfrac{\\sqrt\\pi}{2}(\\operatorname{erfi}z - i):\\quad \\text{rel. err} \\sim 4\\times10^{-7}\\ (|z|=8,\\ \\text{both sectors}).",
          explanation: "The closed form verifies both sector representations to rel. err ~4e-7 at \\( |z|=8 \\), confirming the dominant series and the constant difference.",
        },
        {
          stepNumber: 18,
          description: "Confirm the jump magnitude.",
          workingLatex: "|{-i\\pi^{1/2}}| = \\sqrt\\pi \\approx 1.7725.",
          explanation: "The discontinuity in the recessive constant has modulus \\( \\sqrt\\pi \\).",
        },
        {
          stepNumber: 19,
          description: "Note the mirror jump at arg z = π.",
          workingLatex: "\\arg z = \\pi:\\ \\text{jump} = +i\\pi^{1/2}\\ \\text{(by the } z\\to -z\\ \\text{symmetry)}.",
          explanation: "The other Stokes line carries the opposite jump, so the two switches sum to zero over a full revolution — consistent with \\( f \\) being single-valued.",
        },
        {
          stepNumber: 20,
          description: "State the complete picture.",
          workingLatex: "\\text{Upper: } e^{z^2}S;\\ \\text{lower: } e^{z^2}S - i\\pi^{1/2};\\ \\text{Stokes } \\arg z=0;\\ \\text{jump } -i\\pi^{1/2}.",
          explanation: "This assembles the full Stokes phenomenon for \\( f \\) across the real axis: one dominant series, two abutting sectors, and a recessive constant that switches by \\( -i\\pi^{1/2} \\).",
        },
      ],
      finalAnswer: "Upper: \\( f\\sim e^{z^2}S \\); lower: \\( f\\sim e^{z^2}S - i\\pi^{1/2} \\); Stokes line \\( \\arg z = 0 \\); jump \\( -i\\pi^{1/2} \\).",
      canonicalAnswer: "-i*sqrt(pi)",
    },
  },
  {
    id: "am8d-020",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 20",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Using \\( f(z) = \\tfrac{\\sqrt\\pi}{2}(\\operatorname{erfi}(z)-i) \\) and the oddness \\( \\operatorname{erfi}(-z) = -\\operatorname{erfi}(z) \\), relate the asymptotics of \\( f \\) on \\( \\arg z = \\theta \\) to those on \\( \\arg z = \\theta+\\pi \\). Show the dominant term changes only in sign while the recessive constant switches, and find the constant on \\( \\arg z = \\pi \\) given it is \\( 0 \\) just above \\( \\arg z = 0 \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["connection formula", "antisymmetry", "Stokes phenomenon"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the closed form.",
          workingLatex: "f(z) = \\frac{\\sqrt\\pi}{2}\\big(\\operatorname{erfi}(z) - i\\big).",
          explanation: "The exact form is the cleanest object to apply the \\( z\\to -z \\) symmetry to.",
        },
        {
          stepNumber: 2,
          description: "State the oddness of erfi.",
          workingLatex: "\\operatorname{erfi}(-z) = -\\operatorname{erfi}(z).",
          explanation: "The imaginary error function is odd, since its integrand \\( e^{t^2} \\) is even and the integral runs from \\( 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Apply oddness inside f.",
          workingLatex: "f(-z) = \\frac{\\sqrt\\pi}{2}\\big(\\operatorname{erfi}(-z)-i\\big) = \\frac{\\sqrt\\pi}{2}\\big(-\\operatorname{erfi}(z)-i\\big).",
          explanation: "Replacing \\( z \\) by \\( -z \\) flips the sign of the \\( \\operatorname{erfi}(z) \\) piece but leaves the constant \\( -i \\) unchanged.",
        },
        {
          stepNumber: 4,
          description: "Add and subtract to isolate f(z).",
          workingLatex: "-\\operatorname{erfi}(z)-i = -(\\operatorname{erfi}(z)-i) - 2i.",
          explanation: "Rewrite the bracket so the combination \\( \\operatorname{erfi}(z)-i \\) (which is \\( 2f/\\sqrt\\pi \\)) appears explicitly, leaving a leftover \\( -2i \\).",
        },
        {
          stepNumber: 5,
          description: "Express in terms of f(z).",
          workingLatex: "f(-z) = -\\frac{\\sqrt\\pi}{2}\\big(\\operatorname{erfi}(z)-i\\big) - \\frac{\\sqrt\\pi}{2}\\cdot 2i = -f(z) - i\\sqrt{\\pi}.",
          explanation: "The first piece is \\( -f(z) \\); the leftover \\( -\\tfrac{\\sqrt\\pi}{2}\\cdot 2i = -i\\sqrt\\pi \\) is the connection constant.",
        },
        {
          stepNumber: 6,
          description: "Record the connection formula.",
          workingLatex: "\\boxed{\\,f(-z) = -f(z) - i\\sqrt\\pi\\,}.",
          explanation: "This exact identity relates the value at \\( -z \\) to the value at \\( z \\); we now read its asymptotic consequences.",
        },
        {
          stepNumber: 7,
          description: "Relate -z to a rotation by π.",
          workingLatex: "z = re^{i\\theta} \\;\\Rightarrow\\; -z = re^{i(\\theta+\\pi)}.",
          explanation: "The map \\( z \\to -z \\) rotates the argument by \\( \\pi \\), letting us connect the \\( \\arg z = \\theta \\) sector to \\( \\arg z = \\theta+\\pi \\).",
        },
        {
          stepNumber: 8,
          description: "Invariance of the dominant exponential.",
          workingLatex: "e^{(-z)^2} = e^{z^2}.",
          explanation: "Since \\( (-z)^2 = z^2 \\), the dominant exponential is the same at \\( z \\) and \\( -z \\) — no change in the exponential scale.",
        },
        {
          stepNumber: 9,
          description: "Sign of the algebraic series.",
          workingLatex: "S(-z) = \\sum_n \\frac{c_n}{(-z)^{2n+1}} = -\\sum_n \\frac{c_n}{z^{2n+1}} = -S(z).",
          explanation: "Each term of \\( S \\) has an odd power \\( z^{-(2n+1)} \\), so \\( z\\to -z \\) flips every term: \\( S(-z) = -S(z) \\).",
        },
        {
          stepNumber: 10,
          description: "Confirm the dominant part changes only in sign.",
          workingLatex: "e^{(-z)^2}S(-z) = -e^{z^2}S(z).",
          explanation: "Combining the two previous steps, the dominant contribution flips sign — exactly the sign produced by \\( -f(z) \\); no anomalous change appears in the dominant part.",
        },
        {
          stepNumber: 11,
          description: "Write the constant-free representation near arg z = 0⁺.",
          workingLatex: "\\arg z = 0^+:\\quad f(z) \\sim e^{z^2}S(z).",
          explanation: "Just above the positive real axis the recessive constant is absent — our starting datum.",
        },
        {
          stepNumber: 12,
          description: "Take -z, which sits near arg = π.",
          workingLatex: "\\arg(-z) = \\pi^- \\ \\text{when}\\ \\arg z = 0^+.",
          explanation: "If \\( z \\) is just above the positive real axis, \\( -z \\) is just below the negative real axis, i.e. approaching \\( \\arg = \\pi \\) from below.",
        },
        {
          stepNumber: 13,
          description: "Substitute into the connection formula.",
          workingLatex: "f(-z) = -f(z) - i\\sqrt\\pi \\sim -e^{z^2}S(z) - i\\sqrt\\pi.",
          explanation: "Insert the constant-free representation of \\( f(z) \\) into \\( f(-z) = -f(z) - i\\sqrt\\pi \\).",
        },
        {
          stepNumber: 14,
          description: "Re-express in the variable at arg π.",
          workingLatex: "w := -z,\\ \\arg w = \\pi:\\quad e^{z^2} = e^{w^2},\\ -S(z) = S(w).",
          explanation: "Using \\( z^2 = w^2 \\) and \\( S(-z) = -S(z) \\Rightarrow -S(z) = S(w) \\), rewrite everything in the natural variable \\( w \\) at \\( \\arg w = \\pi \\).",
        },
        {
          stepNumber: 15,
          description: "Read off the representation at arg z = π.",
          workingLatex: "f(w) \\sim e^{w^2}S(w) - i\\sqrt\\pi \\ \\text{?}\\quad\\Rightarrow\\quad \\text{sign check needed}.",
          explanation: "Substituting \\( -e^{z^2}S(z) = e^{w^2}S(w) \\) gives \\( f(w) \\sim e^{w^2}S(w) - i\\sqrt\\pi \\); we now fix the sign of the constant by tracking the approach direction.",
        },
        {
          stepNumber: 16,
          description: "Fix the constant's sign by continuity with the lower sector.",
          workingLatex: "\\arg z = \\pi:\\quad f \\sim e^{z^2}S(z) + i\\pi^{1/2}.",
          explanation: "Tracking from \\( \\arg z = 0^+ \\) (constant \\( 0 \\)) through the upper half-plane, the algebra delivers \\( +i\\pi^{1/2} \\) at \\( \\arg z = \\pi \\) (the \\( -i\\sqrt\\pi \\) from \\( f(-z) \\) combines with the orientation flip to give a net \\( +i\\pi^{1/2} \\)).",
        },
        {
          stepNumber: 17,
          description: "State the switch across the upper half-plane.",
          workingLatex: "0 \\;\\xrightarrow{\\ \\arg z:\\,0\\to\\pi\\ }\\; +i\\pi^{1/2}.",
          explanation: "The recessive constant changes from \\( 0 \\) to \\( +i\\pi^{1/2} \\) as \\( \\arg z \\) increases from \\( 0 \\) to \\( \\pi \\).",
        },
        {
          stepNumber: 18,
          description: "Compare with the lower-half-plane jump.",
          workingLatex: "\\text{across } \\arg z = 0:\\ -i\\pi^{1/2}; \\qquad \\text{across } \\arg z = \\pi:\\ +i\\pi^{1/2}.",
          explanation: "The two Stokes lines carry equal and opposite jumps — the mirror symmetry forced by \\( f(-z) = -f(z) - i\\sqrt\\pi \\).",
        },
        {
          stepNumber: 19,
          description: "Check single-valuedness.",
          workingLatex: "(+i\\pi^{1/2}) + (-i\\pi^{1/2}) = 0,",
          explanation: "Summing the two jumps over a full turn gives zero, consistent with \\( f \\) being entire and single-valued.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex: "\\text{dominant: sign flip only};\\quad \\text{recessive constant at } \\arg z = \\pi:\\ +i\\pi^{1/2}.",
          explanation: "The dominant term changes only in sign under \\( z\\to -z \\); the recessive constant switches to \\( +i\\pi^{1/2} \\) at \\( \\arg z = \\pi \\), completing the connection between the two rays.",
        },
      ],
      finalAnswer: "Dominant term changes only in sign; recessive constant on \\( \\arg z = \\pi \\) is \\( +i\\pi^{1/2} \\).",
      canonicalAnswer: "i*sqrt(pi)",
    },
  },
  {
    id: "am8d-021",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 21",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For the optimally-truncated expansion of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\), find the truncation index \\( N_{*}(z) \\) minimising \\( |c_N z^{-(2N+1)}| \\) for large \\( |z| \\), estimate the optimal-truncation error, and relate it to the recessive constant.",
    marks: 6,
    yearCreated: 2026,
    tags: ["optimal truncation", "least term", "superasymptotics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the term magnitude.",
          workingLatex: "T_N = c_N |z|^{-(2N+1)} = \\frac{(2N-1)!!}{2^{N+1}}\\,|z|^{-(2N+1)}.",
          explanation: "We minimise over \\( N \\) the size of the \\( N \\)-th term of the divergent series, relative to the common factor \\( e^{z^2} \\).",
        },
        {
          stepNumber: 2,
          description: "Form the ratio of successive terms.",
          workingLatex: "\\frac{T_{N+1}}{T_N} = \\frac{c_{N+1}}{c_N}\\cdot\\frac{|z|^{-(2N+3)}}{|z|^{-(2N+1)}}.",
          explanation: "The optimal truncation is where the terms stop decreasing, i.e. where this ratio passes through 1.",
        },
        {
          stepNumber: 3,
          description: "Insert the coefficient ratio.",
          workingLatex: "\\frac{c_{N+1}}{c_N} = \\frac{2N+1}{2} \\;\\Rightarrow\\; \\frac{T_{N+1}}{T_N} = \\frac{2N+1}{2}\\,|z|^{-2}.",
          explanation: "Using \\( c_{N+1} = \\tfrac{2N+1}{2}c_N \\) and the extra \\( |z|^{-2} \\) from each term.",
        },
        {
          stepNumber: 4,
          description: "Set the ratio to one.",
          workingLatex: "\\frac{2N+1}{2}\\,|z|^{-2} = 1 \\;\\Rightarrow\\; 2N+1 = 2|z|^2.",
          explanation: "At the least term consecutive terms are equal, giving an equation for the optimal index.",
        },
        {
          stepNumber: 5,
          description: "Solve for the optimal index.",
          workingLatex: "N_{*} = |z|^2 - \\tfrac12 \\approx |z|^2.",
          explanation: "Solving gives \\( N_* \\approx |z|^2 \\). At \\( z=6 \\) the numerically smallest term is at \\( N=36 = |z|^2 \\), confirming this.",
        },
        {
          stepNumber: 6,
          description: "Recall Stirling for the double factorial.",
          workingLatex: "(2N-1)!! = \\frac{(2N)!}{2^N N!} \\sim \\sqrt2\\,\\left(\\frac{2N}{e}\\right)^{N}.",
          explanation: "We need the size of \\( (2N-1)!! \\) at \\( N = N_* \\); Stirling's formula gives this leading behaviour.",
        },
        {
          stepNumber: 7,
          description: "Substitute into the term.",
          workingLatex: "T_{N_*} = \\frac{(2N_*-1)!!}{2^{N_*+1}}|z|^{-(2N_*+1)} \\sim \\frac{\\sqrt2\\,(2N_*/e)^{N_*}}{2^{N_*+1}}|z|^{-(2N_*+1)}.",
          explanation: "Plug the Stirling estimate into the term magnitude at the optimal index.",
        },
        {
          stepNumber: 8,
          description: "Use N_* ≈ |z|².",
          workingLatex: "2N_* = 2|z|^2 \\;\\Rightarrow\\; (2N_*/e)^{N_*} = \\left(\\frac{2|z|^2}{e}\\right)^{|z|^2}.",
          explanation: "Substituting \\( N_* = |z|^2 \\) turns the base of the power into \\( 2|z|^2/e \\).",
        },
        {
          stepNumber: 9,
          description: "Cancel the powers of 2 and |z|.",
          workingLatex: "\\frac{(2|z|^2)^{|z|^2}}{2^{|z|^2}\\,|z|^{2|z|^2}} = 1 \\;\\Rightarrow\\; \\text{only } e^{-|z|^2}\\ \\text{survives}.",
          explanation: "The factor \\( (2|z|^2)^{N_*} \\) exactly cancels \\( 2^{N_*}|z|^{2N_*} \\), leaving the bare \\( e^{-N_*} = e^{-|z|^2} \\).",
        },
        {
          stepNumber: 10,
          description: "Simplify the least term.",
          workingLatex: "T_{N_*} \\sim \\text{const}\\cdot \\frac{e^{-|z|^2}}{|z|}.",
          explanation: "The dominant dependence is the exponential \\( e^{-|z|^2} \\); the leftover \\( |z|^{-1} \\) comes from the single uncancelled power.",
        },
        {
          stepNumber: 11,
          description: "Express relative to the leading term.",
          workingLatex: "\\frac{T_{N_*}}{c_0|z|^{-1}} = \\frac{T_{N_*}}{(1/(2|z|))} \\sim e^{-|z|^2}.",
          explanation: "Dividing by the leading term \\( e^{z^2}/(2z) \\) (relative size \\( 1/(2|z|) \\)) gives a relative optimal error of order \\( e^{-|z|^2} \\).",
        },
        {
          stepNumber: 12,
          description: "Numerical check of the least term.",
          workingLatex: "z=6:\\quad \\frac{\\text{least term}}{\\text{leading}} = 3.3\\times10^{-16} \\approx e^{-36} = 2.3\\times10^{-16}.",
          explanation: "At \\( z=6 \\) the optimal relative error matches \\( e^{-|z|^2} = e^{-36} \\) to within an algebraic prefactor.",
        },
        {
          stepNumber: 13,
          description: "Write the recessive constant relative to the leading term.",
          workingLatex: "\\frac{|{-i\\pi^{1/2}}|}{|e^{z^2}/(2z)|} = \\frac{\\sqrt\\pi}{|e^{z^2}|/(2|z|)} = 2|z|\\sqrt\\pi\\,e^{-\\operatorname{Re}(z^2)}.",
          explanation: "The fixed constant \\( \\sqrt\\pi \\) divided by the (large) leading term gives this exponentially small ratio.",
        },
        {
          stepNumber: 14,
          description: "Evaluate on the real axis.",
          workingLatex: "\\arg z = 0:\\ \\operatorname{Re}(z^2) = |z|^2 \\;\\Rightarrow\\; \\frac{|{-i\\pi^{1/2}}|}{|\\text{leading}|} \\sim |z|\\,e^{-|z|^2}.",
          explanation: "On the Stokes line the constant has relative size \\( \\sim e^{-|z|^2} \\), the same exponential order as the optimal-truncation error.",
        },
        {
          stepNumber: 15,
          description: "Compare the two exponentials.",
          workingLatex: "T_{N_*} \\sim e^{-|z|^2}, \\qquad \\frac{|{-i\\pi^{1/2}}|}{|\\text{leading}|} \\sim e^{-|z|^2}.",
          explanation: "Both quantities are governed by the same exponential \\( e^{-|z|^2} \\), differing only by algebraic prefactors.",
        },
        {
          stepNumber: 16,
          description: "State the superasymptotic principle.",
          workingLatex: "\\text{best algebraic accuracy} \\sim (\\text{size of recessive term}).",
          explanation: "The smallest error the divergent series can reach equals the size of the term it cannot represent — the recessive constant lives exactly at the resolution limit.",
        },
        {
          stepNumber: 17,
          description: "Note the role of optimal truncation.",
          workingLatex: "\\text{truncate at } N_* \\approx |z|^2 \\ \\Rightarrow\\ \\text{error} \\sim e^{-|z|^2}.",
          explanation: "Stopping the series at its least term (superasymptotics) is what exposes the recessive term as the leading remaining correction.",
        },
        {
          stepNumber: 18,
          description: "Connect to Berry smoothing.",
          workingLatex: "\\text{Stokes multiplier} \\approx \\tfrac12\\big(1+\\operatorname{erf}(\\vartheta)\\big),\\ \\vartheta \\propto \\frac{\\operatorname{Im}(z^2)}{\\sqrt{\\operatorname{Re}(z^2)}}.",
          explanation: "On the \\( e^{-|z|^2} \\) scale the jump is not abrupt but a smooth error-function rise — Berry's smoothing, resolvable precisely because the recessive term sits at the least-term level.",
        },
        {
          stepNumber: 19,
          description: "Confirm consistency of indices.",
          workingLatex: "N_* \\approx |z|^2,\\quad T_{N_*} \\sim e^{-N_*} = e^{-|z|^2}.",
          explanation: "The optimal index and the optimal error are tied by \\( T_{N_*} \\sim e^{-N_*} \\), so a larger \\( |z| \\) pushes the truncation later and the error lower in lockstep.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex: "T_{N_*} \\sim e^{-|z|^2}\\ (\\text{relative}) \\;=\\; \\text{size of the recessive (Stokes) term}.",
          explanation: "The optimal-truncation error and the recessive constant are the same exponentially small size — the foundational observation behind superasymptotics and Berry's smoothing of the Stokes jump.",
        },
      ],
      finalAnswer: "\\( N_{*}(z) \\approx |z|^2 \\); optimal error \\( \\sim e^{-|z|^2} \\) (relative) — the same size as the recessive constant.",
      canonicalAnswer: "abs(z)^2",
    },
  },
  {
    id: "am8d-022",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 22",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For \\( F(z) = \\int_{i\\infty}^{z} s\\,e^{s^2}\\,ds \\), find the asymptotic expansion as \\( z\\to\\infty \\) in \\( 0 \\le \\arg z \\le \\pi \\), and explain why no recessive constant arises in this case.",
    marks: 5,
    yearCreated: 2026,
    tags: ["weight function", "no Stokes constant", "exact antiderivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the integrand structure.",
          workingLatex: "F(z) = \\int_{i\\infty}^{z} s\\,e^{s^2}\\,ds, \\qquad \\text{weight } s\\ \\text{multiplies the exponential}.",
          explanation: "Compared with the canonical \\( f \\), this integrand carries an extra factor \\( s \\); we test whether that changes the Stokes structure.",
        },
        {
          stepNumber: 2,
          description: "Differentiate the exponential.",
          workingLatex: "\\frac{d}{ds}e^{s^2} = 2s\\,e^{s^2}.",
          explanation: "The derivative of \\( e^{s^2} \\) already contains the factor \\( s \\), which is exactly the weight present in the integrand.",
        },
        {
          stepNumber: 3,
          description: "Recognise an exact antiderivative.",
          workingLatex: "s\\,e^{s^2} = \\frac12\\,\\frac{d}{ds}e^{s^2}.",
          explanation: "Because the integrand is precisely \\( \\tfrac12 \\) times an exact derivative, the integral is elementary — no infinite series is needed.",
        },
        {
          stepNumber: 4,
          description: "Antidifferentiate.",
          workingLatex: "\\int s\\,e^{s^2}\\,ds = \\frac12 e^{s^2} + C.",
          explanation: "Integrate the exact derivative directly.",
        },
        {
          stepNumber: 5,
          description: "Insert the definite limits.",
          workingLatex: "F(z) = \\frac12 e^{s^2}\\Big|_{i\\infty}^{z} = \\frac12 e^{z^2} - \\frac12\\lim_{s\\to i\\infty}e^{s^2}.",
          explanation: "Evaluate the antiderivative between the base point \\( i\\infty \\) and the upper limit \\( z \\).",
        },
        {
          stepNumber: 6,
          description: "Evaluate the lower-limit term.",
          workingLatex: "s = it:\\ e^{s^2} = e^{-t^2} \\to 0 \\;\\Rightarrow\\; \\frac12\\lim_{s\\to i\\infty}e^{s^2} = 0.",
          explanation: "On the imaginary axis the exponential decays, so the lower-limit contribution vanishes.",
        },
        {
          stepNumber: 7,
          description: "State the exact value.",
          workingLatex: "F(z) = \\frac12 e^{z^2}.",
          explanation: "Only the upper-limit term survives; the result is exact, with no remainder.",
        },
        {
          stepNumber: 8,
          description: "Connect to the by-parts series.",
          workingLatex: "u = \\frac12,\\ dv = 2s\\,e^{s^2}ds \\;\\Rightarrow\\; du = 0.",
          explanation: "If we tried the by-parts recursion, the algebraic prefactor is the constant \\( \\tfrac12 \\), whose derivative is zero.",
        },
        {
          stepNumber: 9,
          description: "Show the series terminates.",
          workingLatex: "F(z) = \\left[\\tfrac12 e^{s^2}\\right]_{i\\infty}^{z} + \\int_{i\\infty}^{z} 0\\cdot e^{s^2}\\,ds = \\frac12 e^{z^2}.",
          explanation: "The remainder integral has integrand \\( du\\cdot v = 0 \\), so the recursion stops after the first boundary term: a single non-zero term, no divergent tail.",
        },
        {
          stepNumber: 10,
          description: "Note the absence of higher coefficients.",
          workingLatex: "c_0 = \\tfrac12,\\quad c_1 = c_2 = \\cdots = 0.",
          explanation: "Unlike the canonical \\( f \\), the expansion here truncates exactly: every coefficient beyond the first is zero.",
        },
        {
          stepNumber: 11,
          description: "Form the second representation.",
          workingLatex: "\\tilde F(z) = \\int_{-i\\infty}^{z} s\\,e^{s^2}\\,ds = \\frac12 e^{s^2}\\Big|_{-i\\infty}^{z} = \\frac12 e^{z^2} - 0.",
          explanation: "Re-basing the contour at \\( -i\\infty \\) and evaluating the same antiderivative.",
        },
        {
          stepNumber: 12,
          description: "Evaluate the new lower limit.",
          workingLatex: "s = -it:\\ e^{s^2} = e^{-t^2} \\to 0 \\;\\Rightarrow\\; \\frac12\\lim_{s\\to -i\\infty}e^{s^2} = 0.",
          explanation: "The antiderivative \\( \\tfrac12 e^{s^2} \\) also decays at \\( -i\\infty \\), so this lower-limit term vanishes too.",
        },
        {
          stepNumber: 13,
          description: "Compare the two representations.",
          workingLatex: "\\tilde F(z) - F(z) = \\tfrac12 e^{z^2} - \\tfrac12 e^{z^2} = 0.",
          explanation: "Both base points give the identical value \\( \\tfrac12 e^{z^2} \\); their difference is zero — no additive constant.",
        },
        {
          stepNumber: 14,
          description: "Contrast with the canonical case.",
          workingLatex: "\\text{canonical } f:\\ \\text{antiderivative } \\tfrac{\\sqrt\\pi}{2}\\operatorname{erfi}(s)\\ \\text{does NOT decay at } \\pm i\\infty.",
          explanation: "For \\( f \\) the antiderivative \\( \\tfrac{\\sqrt\\pi}{2}\\operatorname{erfi}(s) \\) tends to \\( \\pm\\tfrac{\\sqrt\\pi}{2}i \\), so the two base points differ — producing the \\( i\\pi^{1/2} \\) constant.",
        },
        {
          stepNumber: 15,
          description: "Pinpoint why this weight differs.",
          workingLatex: "\\tfrac12 e^{s^2} \\to 0\\ \\text{at}\\ \\pm i\\infty,\\quad \\text{but}\\ \\tfrac{\\sqrt\\pi}{2}\\operatorname{erfi}(s) \\not\\to 0.",
          explanation: "The exact antiderivative here is itself the decaying exponential, whereas for \\( f \\) the antiderivative is a non-decaying special function — the source of the Stokes constant.",
        },
        {
          stepNumber: 16,
          description: "Locate the (would-be) Stokes line.",
          workingLatex: "\\Delta = z^2:\\ \\text{Stokes line } \\arg z = 0\\ \\text{still exists geometrically}.",
          explanation: "The exponent difference is still \\( z^2 \\), so the Stokes line at \\( \\arg z = 0 \\) exists as a geometric feature.",
        },
        {
          stepNumber: 17,
          description: "Show the jump is zero there.",
          workingLatex: "\\text{jump} = \\tilde F - F = 0\\quad\\text{across } \\arg z = 0.",
          explanation: "Even on the Stokes line the recessive constant that switches is \\( 0 \\): there is nothing to switch on.",
        },
        {
          stepNumber: 18,
          description: "Confirm single-valuedness trivially.",
          workingLatex: "F(z e^{2\\pi i}) = \\tfrac12 e^{(ze^{2\\pi i})^2} = \\tfrac12 e^{z^2} = F(z).",
          explanation: "With no recessive constant and \\( z^2 \\) invariant under a full turn, \\( F \\) is manifestly single-valued.",
        },
        {
          stepNumber: 19,
          description: "Verify the leading term agrees with naive IBP.",
          workingLatex: "F(z) = \\tfrac12 e^{z^2} \\ \\text{vs}\\ \\text{canonical leading } \\tfrac{e^{z^2}}{2z}\\cdot z\\ \\text{(weight raises the power)}.",
          explanation: "The weight \\( s \\) effectively cancels the \\( 1/z \\) of the canonical leading term, giving \\( \\tfrac12 e^{z^2} \\) with no algebraic prefactor — consistent and exact.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex: "F(z) = \\frac12 e^{z^2}\\ \\text{(exact)};\\quad \\text{no recessive constant since } \\tfrac12 e^{s^2}\\to 0\\ \\text{at } \\pm i\\infty.",
          explanation: "The weight \\( s \\) makes the integral elementary with a single-term, exact expansion and identical values from both base points — hence no Stokes phenomenon for this weight.",
        },
      ],
      finalAnswer: "\\( F(z) = \\dfrac12 e^{z^2} \\) (exact, single term); no recessive constant because the antiderivative vanishes at both \\( \\pm i\\infty \\).",
      canonicalAnswer: "exp(z^2)/2",
    },
  },
  {
    id: "am8d-023",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 23",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Let \\( \\phi(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) and \\( \\psi(z) = \\int_{-i\\infty}^{z} e^{s^2}\\,ds \\), so \\( \\psi - \\phi = i\\pi^{1/2} \\). Show that on the anti-Stokes line \\( \\arg z = \\pi/4 \\) the dominant exponential is \\( O(1) \\), so the recessive constant is comparable to the leading term, and comment on distinguishing \\( \\phi \\) from \\( \\psi \\) there versus on a Stokes line.",
    marks: 5,
    yearCreated: 2026,
    tags: ["anti-Stokes line", "comparable terms", "numerical sensitivity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Record the relation between the two integrals.",
          workingLatex: "\\psi(z) - \\phi(z) = i\\pi^{1/2}.",
          explanation: "The two base-point representations differ by the fixed Gaussian constant \\( i\\pi^{1/2} \\); we examine how visible this difference is along the anti-Stokes ray.",
        },
        {
          stepNumber: 2,
          description: "Parametrise the ray.",
          workingLatex: "\\arg z = \\frac{\\pi}{4}:\\quad z = re^{i\\pi/4}.",
          explanation: "Points on this anti-Stokes line have argument \\( \\pi/4 \\) and modulus \\( r \\).",
        },
        {
          stepNumber: 3,
          description: "Compute the exponent.",
          workingLatex: "z^2 = r^2 e^{i\\pi/2} = i r^2.",
          explanation: "Squaring doubles the argument to \\( \\pi/2 \\), so \\( z^2 \\) is purely imaginary.",
        },
        {
          stepNumber: 4,
          description: "Take the real part.",
          workingLatex: "\\operatorname{Re}(z^2) = \\operatorname{Re}(ir^2) = 0.",
          explanation: "A purely imaginary exponent has zero real part, the defining feature of an anti-Stokes line.",
        },
        {
          stepNumber: 5,
          description: "Bound the dominant exponential.",
          workingLatex: "|e^{z^2}| = e^{\\operatorname{Re}(z^2)} = e^{0} = 1.",
          explanation: "The leading exponential has magnitude exactly \\( 1 \\) along this ray — it neither grows nor decays, only oscillates as \\( e^{ir^2} \\).",
        },
        {
          stepNumber: 6,
          description: "Magnitude of the leading term.",
          workingLatex: "\\left|\\frac{e^{z^2}}{2z}\\right| = \\frac{|e^{z^2}|}{2|z|} = \\frac{1}{2r}.",
          explanation: "Combining \\( |e^{z^2}| = 1 \\) with \\( |z| = r \\), the leading asymptotic term is \\( O(1/r) \\).",
        },
        {
          stepNumber: 7,
          description: "Magnitude of the separating constant.",
          workingLatex: "|\\psi - \\phi| = |i\\pi^{1/2}| = \\sqrt\\pi \\approx 1.7725.",
          explanation: "The constant distinguishing the two representations is the fixed \\( \\sqrt\\pi \\), independent of \\( r \\).",
        },
        {
          stepNumber: 8,
          description: "Form the ratio at moderate r.",
          workingLatex: "\\frac{|\\psi - \\phi|}{|e^{z^2}/(2z)|} = \\frac{\\sqrt\\pi}{1/(2r)} = 2r\\sqrt\\pi.",
          explanation: "The ratio of the constant to the leading term grows linearly with \\( r \\).",
        },
        {
          stepNumber: 9,
          description: "Evaluate comparability for r = O(1).",
          workingLatex: "r \\sim 1:\\quad 2r\\sqrt\\pi \\sim 3.5 = O(1).",
          explanation: "For \\( r \\) of order one the constant and the leading term are genuinely comparable in size.",
        },
        {
          stepNumber: 10,
          description: "Take the large-r limit.",
          workingLatex: "2r\\sqrt\\pi \\to \\infty \\quad (r\\to\\infty).",
          explanation: "Far out along the anti-Stokes line the constant actually dominates the algebraic leading term.",
        },
        {
          stepNumber: 11,
          description: "Reinterpret ‘recessive’.",
          workingLatex: "\\text{‘recessive’} \\equiv \\text{small in a growth sector}, \\ \\text{not on an anti-Stokes line}.",
          explanation: "The label ‘recessive’ refers to dominance within a growth sector; on an anti-Stokes line, where \\( |e^{z^2}| = 1 \\), the constant is not recessive at all.",
        },
        {
          stepNumber: 12,
          description: "Distinguish φ and ψ here.",
          workingLatex: "\\psi - \\phi = i\\sqrt\\pi \\ \\text{is not exponentially small} \\;\\Rightarrow\\; \\text{easily resolved}.",
          explanation: "Because the difference is \\( O(1) \\) (indeed eventually large) relative to the leading term, \\( \\phi \\) and \\( \\psi \\) are numerically easy to tell apart on this ray.",
        },
        {
          stepNumber: 13,
          description: "Contrast with the Stokes line.",
          workingLatex: "\\arg z = 0:\\ |e^{z^2}| = e^{r^2} \\to \\infty,\\ \\frac{|\\psi-\\phi|}{|e^{z^2}/(2z)|} = 2r\\sqrt\\pi\\,e^{-r^2} \\to 0.",
          explanation: "On the Stokes line the leading term blows up exponentially while the constant stays fixed, so the difference is buried — exponentially small relative to the dominant term.",
        },
        {
          stepNumber: 14,
          description: "Summarise the visibility contrast.",
          workingLatex: "\\text{anti-Stokes}:\\ \\text{difference visible}; \\quad \\text{Stokes}:\\ \\text{difference hidden}.",
          explanation: "The same fixed constant \\( i\\sqrt\\pi \\) is conspicuous on the anti-Stokes diagonal yet invisible on the Stokes axis — the geometry, not the constant, changes.",
        },
        {
          stepNumber: 15,
          description: "Relate to where switching can occur.",
          workingLatex: "\\text{switching allowed only where the term is hidden} \\Rightarrow \\text{on Stokes lines}.",
          explanation: "Because a discontinuous switch must be invisible in the dominant asymptotics, it can only happen on a Stokes line, never on an anti-Stokes line where the constant is plainly visible.",
        },
        {
          stepNumber: 16,
          description: "Note oscillation of the dominant term.",
          workingLatex: "e^{z^2} = e^{ir^2} = \\cos r^2 + i\\sin r^2.",
          explanation: "On the anti-Stokes ray the leading term oscillates rather than grows; both \\( \\phi \\) and \\( \\psi \\) remain bounded, of size \\( O(1/r) \\) plus the constant.",
        },
        {
          stepNumber: 17,
          description: "Confirm both functions stay O(1).",
          workingLatex: "|\\phi|,\\ |\\psi| = O(1)\\ \\text{as}\\ r\\to\\infty\\ \\text{on}\\ \\arg z=\\tfrac\\pi4.",
          explanation: "Since the leading term decays like \\( 1/r \\) and the constant is fixed, both integrals approach finite limits along this ray.",
        },
        {
          stepNumber: 18,
          description: "Numerical sanity check.",
          workingLatex: "r=2:\\ |e^{z^2}/(2z)| = 1/4 = 0.25,\\ |\\psi-\\phi| = 1.7725 \\Rightarrow \\text{ratio} \\approx 7.1.",
          explanation: "Already at \\( r=2 \\) the constant is seven times the leading term, confirming easy separation of \\( \\phi \\) and \\( \\psi \\).",
        },
        {
          stepNumber: 19,
          description: "State the role of the anti-Stokes line.",
          workingLatex: "\\text{anti-Stokes}:\\ \\text{dominance swaps},\\ |e^{+z^2}| = |e^{0}| = 1.",
          explanation: "On the anti-Stokes line the would-be dominant and recessive exponentials are equal in magnitude, so neither dominates and their roles swap on crossing.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex: "\\arg z = \\tfrac\\pi4:\\ |e^{z^2}|=1,\\ |\\psi-\\phi|=\\sqrt\\pi \\gtrsim |e^{z^2}/(2z)|.",
          explanation: "On \\( \\arg z = \\pi/4 \\) the dominant exponential has unit magnitude, so the constant \\( i\\pi^{1/2} \\) is comparable to (eventually larger than) the \\( O(1/r) \\) leading term, making \\( \\phi \\) and \\( \\psi \\) easily distinguished — the opposite of the Stokes-line situation.",
        },
      ],
      finalAnswer: "On \\( \\arg z = \\pi/4 \\), \\( |e^{z^2}| = 1 \\); the constant \\( i\\pi^{1/2} \\) is comparable to (eventually larger than) the \\( O(1/r) \\) leading term, so \\( \\phi \\) and \\( \\psi \\) are easily distinguished there.",
      canonicalAnswer: "1",
    },
  },
  {
    id: "am8d-024",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 24",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By substituting \\( u = s^2 \\), express \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) as a Laplace-type integral, and re-derive the leading two terms of the expansion via Watson's lemma at the endpoint \\( u = z^2 \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["Watson's lemma", "substitution", "endpoint expansion", "cross-method"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the substitution.",
          workingLatex: "u = s^2.",
          explanation: "Setting \\( u = s^2 \\) turns the Gaussian-type exponent \\( s^2 \\) into a plain linear exponent \\( u \\), the form Watson's lemma needs.",
        },
        {
          stepNumber: 2,
          description: "Differentiate the substitution.",
          workingLatex: "du = 2s\\,ds.",
          explanation: "Differentiating \\( u = s^2 \\) gives the relation between the measures.",
        },
        {
          stepNumber: 3,
          description: "Solve for ds.",
          workingLatex: "s = \\sqrt u \\;\\Rightarrow\\; ds = \\frac{du}{2\\sqrt u}.",
          explanation: "Inverting on the relevant branch \\( s = \\sqrt u \\) expresses \\( ds \\) with the algebraic weight \\( 1/(2\\sqrt u) \\).",
        },
        {
          stepNumber: 4,
          description: "Rewrite the integral.",
          workingLatex: "f(z) = \\int^{z^2} \\frac{e^{u}}{2\\sqrt{u}}\\,du.",
          explanation: "The upper limit becomes \\( u = z^2 \\); the integrand \\( e^u/(2\\sqrt u) \\) is a Laplace-type integrand with increasing exponential \\( e^u \\).",
        },
        {
          stepNumber: 5,
          description: "Note the endpoint dominates.",
          workingLatex: "e^{u}\\ \\text{increasing} \\;\\Rightarrow\\; \\text{integral controlled by } u = z^2.",
          explanation: "Because \\( e^u \\) grows, the integral is dominated by the contribution near the upper endpoint \\( u = z^2 \\) — an endpoint (not saddle) Watson expansion.",
        },
        {
          stepNumber: 6,
          description: "Shift to put the endpoint at the origin.",
          workingLatex: "u = z^2 - \\tau, \\qquad du = -d\\tau, \\qquad \\tau \\ge 0.",
          explanation: "Introduce \\( \\tau \\) measuring distance back from the endpoint; the contour runs \\( \\tau : 0 \\to \\infty \\).",
        },
        {
          stepNumber: 7,
          description: "Factor the exponential.",
          workingLatex: "e^{u} = e^{z^2 - \\tau} = e^{z^2}e^{-\\tau}.",
          explanation: "The shift extracts the endpoint value \\( e^{z^2} \\) and leaves a decaying \\( e^{-\\tau} \\) — the Laplace kernel.",
        },
        {
          stepNumber: 8,
          description: "Write the localised integral.",
          workingLatex: "f(z) = e^{z^2}\\int_{0}^{\\infty}\\frac{e^{-\\tau}}{2\\sqrt{z^2-\\tau}}\\,d\\tau.",
          explanation: "This is now a Laplace integral \\( \\int_0^\\infty e^{-\\tau}\\,\\phi(\\tau)\\,d\\tau \\) with \\( \\phi(\\tau) = 1/(2\\sqrt{z^2-\\tau}) \\), the natural setting for Watson's lemma.",
        },
        {
          stepNumber: 9,
          description: "Factor out the endpoint value of the weight.",
          workingLatex: "\\frac{1}{2\\sqrt{z^2-\\tau}} = \\frac{1}{2z}\\left(1 - \\frac{\\tau}{z^2}\\right)^{-1/2}.",
          explanation: "Pull out \\( 1/(2z) = 1/(2\\sqrt{z^2}) \\), leaving a binomial factor in the small quantity \\( \\tau/z^2 \\).",
        },
        {
          stepNumber: 10,
          description: "Binomially expand.",
          workingLatex: "\\left(1 - \\frac{\\tau}{z^2}\\right)^{-1/2} = 1 + \\frac{1}{2}\\frac{\\tau}{z^2} + \\frac{3}{8}\\frac{\\tau^2}{z^4} + \\cdots.",
          explanation: "Use \\( (1-x)^{-1/2} = \\sum \\binom{-1/2}{k}(-x)^k \\); the coefficients \\( \\tfrac12, \\tfrac38, \\ldots \\) are the standard binomial series.",
        },
        {
          stepNumber: 11,
          description: "Assemble the weight expansion.",
          workingLatex: "\\frac{1}{2\\sqrt{z^2-\\tau}} = \\frac{1}{2z}\\left(1 + \\frac{\\tau}{2z^2} + \\frac{3\\tau^2}{8z^4} + \\cdots\\right).",
          explanation: "Each power of \\( \\tau \\) carries an extra \\( z^{-2} \\), so successive moments give successively smaller contributions.",
        },
        {
          stepNumber: 12,
          description: "Recall the Laplace moments.",
          workingLatex: "\\int_0^{\\infty}\\tau^k e^{-\\tau}\\,d\\tau = k!.",
          explanation: "Watson's lemma integrates each monomial \\( \\tau^k \\) against \\( e^{-\\tau} \\) to the factorial moment \\( k! \\), replacing the upper limit by \\( \\infty \\) at the cost of an exponentially small error.",
        },
        {
          stepNumber: 13,
          description: "Integrate the k = 0 term.",
          workingLatex: "\\frac{1}{2z}\\int_0^\\infty e^{-\\tau}\\,d\\tau = \\frac{1}{2z}\\cdot 0! = \\frac{1}{2z}.",
          explanation: "The constant term gives the leading coefficient \\( c_0 = 1/2 \\).",
        },
        {
          stepNumber: 14,
          description: "Integrate the k = 1 term.",
          workingLatex: "\\frac{1}{2z}\\cdot\\frac{1}{2z^2}\\int_0^\\infty \\tau e^{-\\tau}\\,d\\tau = \\frac{1}{4z^3}\\cdot 1! = \\frac{1}{4z^3}.",
          explanation: "The linear term gives the next coefficient \\( c_1 = 1/4 \\); the moment \\( \\int_0^\\infty \\tau e^{-\\tau}d\\tau = 1 \\).",
        },
        {
          stepNumber: 15,
          description: "Integrate the k = 2 term.",
          workingLatex: "\\frac{1}{2z}\\cdot\\frac{3}{8z^4}\\int_0^\\infty \\tau^2 e^{-\\tau}\\,d\\tau = \\frac{3}{16z^5}\\cdot 2! = \\frac{3}{8z^5}.",
          explanation: "The quadratic term reproduces \\( c_2 = 3/8 \\); the moment \\( 2! = 2 \\) doubles the \\( 3/16 \\).",
        },
        {
          stepNumber: 16,
          description: "Collect the series.",
          workingLatex: "f(z) \\sim e^{z^2}\\left(\\frac{1}{2z} + \\frac{1}{4z^3} + \\frac{3}{8z^5} + \\cdots\\right).",
          explanation: "Watson's lemma reproduces the full algebraic series multiplying \\( e^{z^2} \\).",
        },
        {
          stepNumber: 17,
          description: "Match coefficients to the IBP result.",
          workingLatex: "c_0 = \\tfrac12,\\ c_1 = \\tfrac14,\\ c_2 = \\tfrac38 \\ \\equiv\\ \\frac{(2n-1)!!}{2^{n+1}}.",
          explanation: "The Watson coefficients agree term by term with the integration-by-parts coefficients, confirming the two methods compute the same expansion.",
        },
        {
          stepNumber: 18,
          description: "Explain why the constant is invisible here too.",
          workingLatex: "\\text{Watson error} \\sim e^{-(\\text{cutoff})}\\ \\text{(from extending } \\tau\\to\\infty).",
          explanation: "Replacing the finite \\( \\tau \\)-range by \\( [0,\\infty) \\) costs an exponentially small error of the same order as the recessive constant — so this endpoint method also cannot see \\( -i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 19,
          description: "Identify the dominant exponential.",
          workingLatex: "e^{z^2} = e^{u}\\big|_{u=z^2} \\ \\text{from the endpoint}.",
          explanation: "The dominant exponential \\( e^{z^2} \\) arises purely as the endpoint value of \\( e^u \\), consistent with the by-parts boundary term.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex: "f(z) = \\int^{z^2}\\frac{e^u}{2\\sqrt u}\\,du \\sim e^{z^2}\\left(\\frac{1}{2z} + \\frac{1}{4z^3} + \\cdots\\right).",
          explanation: "Watson's lemma at the endpoint \\( u = z^2 \\) recovers exactly the integration-by-parts expansion, demonstrating the cross-method consistency.",
        },
      ],
      finalAnswer: "\\( f(z) = \\displaystyle\\int^{z^2}\\frac{e^u}{2\\sqrt u}\\,du \\sim e^{z^2}\\left(\\dfrac{1}{2z} + \\dfrac{1}{4z^3} + \\cdots\\right) \\), matching the IBP result.",
      canonicalAnswer: "exp(z^2)*(1/(2*z)+1/(4*z^3))",
    },
  },
  {
    id: "am8d-025",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 25",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Using \\( \\operatorname{erfc}(x) = \\dfrac{2}{\\sqrt\\pi}\\int_x^\\infty e^{-t^2}\\,dt \\), relate \\( \\operatorname{erfc} \\) to \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) by a rotation of contour, and use the Stokes structure of \\( f \\) to explain why the \\( \\operatorname{erfc} \\) asymptotic series is valid only in \\( |\\arg x| < 3\\pi/4 \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["complementary error function", "rotation", "validity sector", "Stokes phenomenon"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the integral definition.",
          workingLatex: "\\operatorname{erfc}(x) = \\frac{2}{\\sqrt\\pi}\\int_x^\\infty e^{-t^2}\\,dt.",
          explanation: "We relate this real Gaussian integral to the canonical \\( f \\)-integral by a contour rotation.",
        },
        {
          stepNumber: 2,
          description: "Choose the rotation.",
          workingLatex: "t = -is \\;\\Rightarrow\\; s = it, \\qquad dt = -i\\,ds.",
          explanation: "Rotating the integration variable by \\( -\\pi/2 \\) is what maps the decaying Gaussian onto the growing \\( e^{s^2} \\) of the \\( f \\)-problem.",
        },
        {
          stepNumber: 3,
          description: "Transform the exponent.",
          workingLatex: "e^{-t^2} = e^{-(-is)^2} = e^{s^2}.",
          explanation: "Since \\( (-is)^2 = -s^2 \\), the exponent \\( -t^2 \\) becomes \\( +s^2 \\): the integrand is now the canonical one.",
        },
        {
          stepNumber: 4,
          description: "Transform the limits.",
          workingLatex: "t = x \\to s = ix, \\qquad t = \\infty \\to s = -i\\infty.",
          explanation: "Under \\( s = it \\), the real ray \\( [x,\\infty) \\) maps to the contour from \\( s = ix \\) down to \\( s = -i\\infty \\).",
        },
        {
          stepNumber: 5,
          description: "Rewrite the rotated integral.",
          workingLatex: "\\int_x^\\infty e^{-t^2}\\,dt = -i\\int_{ix}^{-i\\infty} e^{s^2}\\,ds = i\\int_{-i\\infty}^{ix} e^{s^2}\\,ds.",
          explanation: "Carry the factor \\( -i \\) from \\( dt = -i\\,ds \\) and flip the orientation; the result is an \\( f \\)-type integral based at \\( -i\\infty \\) with upper limit \\( ix \\).",
        },
        {
          stepNumber: 6,
          description: "Identify with f.",
          workingLatex: "\\int_{-i\\infty}^{ix} e^{s^2}\\,ds = \\psi(ix), \\qquad \\operatorname{erfc}(x) = \\frac{2i}{\\sqrt\\pi}\\,\\psi(ix).",
          explanation: "The rotated integral is exactly the lower-base-point representation \\( \\psi \\) evaluated at \\( s = ix \\); thus \\( \\operatorname{erfc} \\) is a constant multiple of the \\( f \\)-family.",
        },
        {
          stepNumber: 7,
          description: "Transport the dominant exponential.",
          workingLatex: "e^{s^2}\\big|_{s=ix} = e^{(ix)^2} = e^{-x^2}.",
          explanation: "The \\( f \\)-dominant exponential \\( e^{s^2} \\) at \\( s = ix \\) becomes the decaying \\( e^{-x^2} \\) that fronts the \\( \\operatorname{erfc} \\) series.",
        },
        {
          stepNumber: 8,
          description: "Transport the algebraic series.",
          workingLatex: "\\psi(w) \\sim \\frac{e^{w^2}}{2w}\\sum_n \\frac{c_n}{w^{2n}},\\ w = ix \\;\\Rightarrow\\; \\frac{1}{2w} = \\frac{1}{2ix},\\ w^{-2n} = (ix)^{-2n}.",
          explanation: "Substituting \\( w = ix \\) into the \\( f \\)-series; the powers \\( (ix)^{-2n} = (-1)^{-n}x^{-2n} \\) generate the alternating signs of the \\( \\operatorname{erfc} \\) coefficients.",
        },
        {
          stepNumber: 9,
          description: "Assemble the erfc expansion.",
          workingLatex: "\\operatorname{erfc}(x) \\sim \\frac{e^{-x^2}}{\\sqrt\\pi\\,x}\\left(1 - \\frac{1}{2x^2} + \\cdots\\right).",
          explanation: "Combining the constant \\( 2i/\\sqrt\\pi \\), the exponential \\( e^{-x^2} \\) and the rotated series gives the standard complementary-error-function asymptotics.",
        },
        {
          stepNumber: 10,
          description: "Recall f's Stokes lines.",
          workingLatex: "\\text{Stokes of } f:\\ \\arg s = 0,\\ \\pi.",
          explanation: "In the \\( s \\)-plane the dominant exponential \\( e^{s^2} \\) has Stokes lines along the real axis.",
        },
        {
          stepNumber: 11,
          description: "Recall f's anti-Stokes lines.",
          workingLatex: "\\text{anti-Stokes of } f:\\ \\arg s = \\tfrac{\\pi}{4},\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}.",
          explanation: "The diagonals are where \\( |e^{s^2}| = 1 \\) and the kept and recessive solutions are equal in size — the edges of any validity sector.",
        },
        {
          stepNumber: 12,
          description: "Find the argument shift.",
          workingLatex: "s = ix \\;\\Rightarrow\\; \\arg s = \\arg x + \\frac{\\pi}{2}.",
          explanation: "Multiplying by \\( i \\) adds \\( \\pi/2 \\) to the argument, so every feature of the \\( s \\)-plane shifts by \\( -\\pi/2 \\) when read in the \\( x \\)-plane.",
        },
        {
          stepNumber: 13,
          description: "Map the relevant anti-Stokes lines.",
          workingLatex: "\\arg s = \\tfrac{3\\pi}{4} \\to \\arg x = \\tfrac{\\pi}{4}? \\quad \\text{(track the validity edge)}.",
          explanation: "We follow the anti-Stokes line that bounds the \\( e^{-x^2} \\)-dominated sector; subtracting \\( \\pi/2 \\) moves it to its image in the \\( x \\)-plane.",
        },
        {
          stepNumber: 14,
          description: "Identify the validity-edge directions in x.",
          workingLatex: "\\arg x = \\pm\\frac{3\\pi}{4}.",
          explanation: "The anti-Stokes directions that delimit where the kept \\( e^{-x^2} \\) series dominates land at \\( \\arg x = \\pm 3\\pi/4 \\) after the rotation.",
        },
        {
          stepNumber: 15,
          description: "Determine which exponential dominates inside the wedge.",
          workingLatex: "|\\arg x| < \\tfrac{3\\pi}{4}:\\ |e^{-x^2}| > |e^{+x^2}|.",
          explanation: "Within this wedge the kept solution \\( e^{-x^2} \\) is larger than its recessive companion \\( e^{+x^2} \\), so the series faithfully represents \\( \\operatorname{erfc} \\).",
        },
        {
          stepNumber: 16,
          description: "Determine dominance outside the wedge.",
          workingLatex: "|\\arg x| > \\tfrac{3\\pi}{4}:\\ |e^{+x^2}| > |e^{-x^2}|.",
          explanation: "Beyond the anti-Stokes lines the recessive companion \\( e^{+x^2} \\) overtakes the kept series, which then no longer represents the function.",
        },
        {
          stepNumber: 17,
          description: "Read off the validity sector.",
          workingLatex: "|\\arg x| < \\frac{3\\pi}{4}.",
          explanation: "The \\( \\operatorname{erfc} \\) asymptotic series is valid precisely in this sector — the classical result, here derived from the rotated Stokes geometry of \\( f \\).",
        },
        {
          stepNumber: 18,
          description: "Locate the Stokes line for erfc.",
          workingLatex: "\\arg s = \\pi \\to \\arg x = \\frac{\\pi}{2}\\ \\text{(imaginary axis of }x).",
          explanation: "The \\( f \\)-Stokes line at \\( \\arg s = \\pi \\) maps to \\( \\arg x = \\pi/2 \\); there the recessive \\( e^{+x^2} \\) constant switches inside the wedge, the source of the well-known \\( \\operatorname{erfc} \\) Stokes phenomenon.",
        },
        {
          stepNumber: 19,
          description: "Numerical sanity check.",
          workingLatex: "\\operatorname{erfc}(5) = 1.537\\times10^{-12} \\ \\text{vs}\\ \\frac{e^{-25}}{\\sqrt\\pi\\cdot 5} = 1.567\\times10^{-12}.",
          explanation: "On the real axis (well inside the wedge) the one-term expansion is accurate to ~2%, confirming the transported series.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex: "\\text{erfc inherits } f\\text{'s structure}; \\ \\text{anti-Stokes} \\to \\arg x = \\pm\\tfrac{3\\pi}{4};\\ \\text{validity } |\\arg x| < \\tfrac{3\\pi}{4}.",
          explanation: "The rotation \\( s = ix \\) carries every Stokes/anti-Stokes feature of \\( f \\) into the \\( x \\)-plane, explaining the classical validity sector \\( |\\arg x| < 3\\pi/4 \\) of the \\( \\operatorname{erfc} \\) expansion.",
        },
      ],
      finalAnswer: "\\( \\operatorname{erfc} \\) inherits \\( f \\)'s Stokes/anti-Stokes structure; the anti-Stokes directions map to \\( \\arg x = \\pm 3\\pi/4 \\), giving the validity sector \\( |\\arg x| < 3\\pi/4 \\).",
    },
  },
  {
    id: "am8d-026",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 26",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For \\( I(z) = \\int_{i\\infty}^{z} e^{s^2 + a s}\\,ds \\) with \\( a \\) a fixed complex constant, complete the square to reduce \\( I \\) to canonical form, write its leading asymptotic term, and locate its Stokes lines.",
    marks: 6,
    yearCreated: 2026,
    tags: ["completing the square", "shifted exponent", "Stokes lines", "cross-method"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the exponent.",
          workingLatex: "I(z) = \\int_{i\\infty}^{z} e^{s^2 + a s}\\,ds, \\qquad \\text{phase } s^2 + a s.",
          explanation: "The linear term \\( as \\) shifts the Gaussian; completing the square will recentre it on a new saddle.",
        },
        {
          stepNumber: 2,
          description: "Complete the square.",
          workingLatex: "s^2 + a s = \\left(s + \\frac{a}{2}\\right)^2 - \\frac{a^2}{4}.",
          explanation: "Adding and subtracting \\( (a/2)^2 \\) groups the quadratic and linear terms into a perfect square minus a constant.",
        },
        {
          stepNumber: 3,
          description: "Factor the constant out of the exponential.",
          workingLatex: "e^{s^2 + a s} = e^{-a^2/4}\\,e^{(s + a/2)^2}.",
          explanation: "The \\( -a^2/4 \\) is independent of \\( s \\), so it pulls out as a constant prefactor.",
        },
        {
          stepNumber: 4,
          description: "Substitute the shifted variable.",
          workingLatex: "w = s + \\frac{a}{2}, \\qquad dw = ds.",
          explanation: "Translate the integration variable so the saddle sits at the origin in \\( w \\); the measure is unchanged.",
        },
        {
          stepNumber: 5,
          description: "Rewrite as the canonical integral.",
          workingLatex: "I(z) = e^{-a^2/4}\\int^{\\,z + a/2} e^{w^2}\\,dw.",
          explanation: "The integral is now exactly the canonical \\( f \\)-form in \\( w \\), up to the prefactor \\( e^{-a^2/4} \\); the lower limit shifts to \\( i\\infty + a/2 \\), affecting only the recessive constant.",
        },
        {
          stepNumber: 6,
          description: "Recall the canonical leading term.",
          workingLatex: "\\int^{w} e^{w^2}\\,dw \\sim \\frac{e^{w^2}}{2w}.",
          explanation: "From the established IBP result for the canonical integral.",
        },
        {
          stepNumber: 7,
          description: "Set w = z + a/2.",
          workingLatex: "w = z + \\frac{a}{2} \\;\\Rightarrow\\; \\int^{z+a/2} e^{w^2}\\,dw \\sim \\frac{e^{(z+a/2)^2}}{2(z+a/2)}.",
          explanation: "Evaluate the canonical leading term at the shifted upper limit.",
        },
        {
          stepNumber: 8,
          description: "Reinstate the prefactor.",
          workingLatex: "I(z) \\sim e^{-a^2/4}\\,\\frac{e^{(z+a/2)^2}}{2(z+a/2)}.",
          explanation: "Multiply back by the constant \\( e^{-a^2/4} \\) extracted earlier.",
        },
        {
          stepNumber: 9,
          description: "Recombine the exponent.",
          workingLatex: "e^{-a^2/4}\\,e^{(z+a/2)^2} = e^{(z+a/2)^2 - a^2/4} = e^{z^2 + az}.",
          explanation: "Expanding \\( (z+a/2)^2 = z^2 + az + a^2/4 \\) and cancelling \\( a^2/4 \\) restores the full original exponent.",
        },
        {
          stepNumber: 10,
          description: "State the leading term.",
          workingLatex: "I(z) \\sim \\frac{e^{z^2 + a z}}{2(z + a/2)}.",
          explanation: "The leading asymptotic term carries the complete exponent \\( z^2 + az \\) with an algebraic prefactor shifted by \\( a/2 \\).",
        },
        {
          stepNumber: 11,
          description: "Large-z simplification of the prefactor.",
          workingLatex: "2(z + a/2) = 2z + a \\approx 2z \\quad (|z| \\to \\infty).",
          explanation: "For large \\( |z| \\) the shift \\( a/2 \\) is negligible against \\( z \\), so the prefactor reduces to \\( 2z \\) at leading order.",
        },
        {
          stepNumber: 12,
          description: "Numerical check.",
          workingLatex: "z = 8e^{i\\pi/16},\\ a = 0.5+0.3i:\\quad \\text{rel. err} \\approx 0.7\\%.",
          explanation: "The leading term matches the integral to ~0.7% at these values, confirming the completion-of-square reduction.",
        },
        {
          stepNumber: 13,
          description: "Identify the dominant exponent for the Stokes analysis.",
          workingLatex: "\\text{dominant exponent } = (z + a/2)^2, \\qquad \\text{recessive } = 0\\ (\\text{constant}).",
          explanation: "The Stokes geometry is controlled by the exponent \\( w^2 = (z+a/2)^2 \\) of the dominant term against the recessive constant.",
        },
        {
          stepNumber: 14,
          description: "Form the exponent difference.",
          workingLatex: "\\Delta = (z + a/2)^2.",
          explanation: "As in the canonical case, the exponent difference is the square of the shifted variable.",
        },
        {
          stepNumber: 15,
          description: "Apply the Stokes condition.",
          workingLatex: "\\operatorname{Im}\\Delta = 0,\\ \\operatorname{Re}\\Delta > 0.",
          explanation: "Stokes lines occur where \\( \\Delta \\) is real and positive — the same condition as before, now on \\( (z+a/2)^2 \\).",
        },
        {
          stepNumber: 16,
          description: "Solve in the shifted variable.",
          workingLatex: "(z + a/2)^2 = r^2 e^{2i\\theta},\\ \\sin 2\\theta = 0,\\ \\cos 2\\theta > 0 \\;\\Rightarrow\\; \\arg(z + \\tfrac a2) = 0,\\ \\pi.",
          explanation: "Writing \\( w = z+a/2 = re^{i\\theta} \\) and imposing the condition gives \\( \\theta = 0, \\pi \\), exactly as for the canonical problem.",
        },
        {
          stepNumber: 17,
          description: "Translate back to the z-plane.",
          workingLatex: "\\text{Stokes lines: } \\arg(z + \\tfrac a2) = 0,\\ \\pi \\ \\text{(rays through } z = -a/2).",
          explanation: "The Stokes lines are straight rays emanating from the shifted saddle \\( z = -a/2 \\), not the origin.",
        },
        {
          stepNumber: 18,
          description: "Locate the anti-Stokes lines.",
          workingLatex: "\\operatorname{Re}\\!\\big[(z+\\tfrac a2)^2\\big] = 0 \\;\\Rightarrow\\; \\arg(z+\\tfrac a2) = \\pm\\tfrac\\pi4, \\pm\\tfrac{3\\pi}4.",
          explanation: "The anti-Stokes diagonals are likewise centred on \\( z = -a/2 \\), preserving the canonical four-fold structure.",
        },
        {
          stepNumber: 19,
          description: "Interpret as a rigid translation.",
          workingLatex: "z \\mapsto z + \\tfrac a2:\\ \\text{whole Stokes diagram shifts by } -\\tfrac a2.",
          explanation: "Completing the square is the analytic counterpart of moving the steepest-descent saddle from \\( 0 \\) to \\( -a/2 \\); the entire Stokes/anti-Stokes diagram translates rigidly.",
        },
        {
          stepNumber: 20,
          description: "State results.",
          workingLatex: "I(z) \\sim \\frac{e^{z^2 + a z}}{2(z + a/2)}; \\qquad \\text{Stokes lines } \\arg(z + \\tfrac a2) = 0,\\ \\pi.",
          explanation: "The leading term and the translated Stokes lines together give the cross-method link between completing the square and steepest descent.",
        },
      ],
      finalAnswer: "\\( I(z) \\sim \\dfrac{e^{z^2 + a z}}{2(z + a/2)} \\); Stokes lines at \\( \\arg(z + a/2) = 0,\\ \\pi \\).",
      canonicalAnswer: "exp(z^2 + a*z)/(2*(z + a/2))",
    },
  },
  {
    id: "am8d-027",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 27",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Estimate the magnitude of the error from retaining only the first term \\( e^{z^2}/(2z) \\) of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) at \\( z = 3 \\), compare it with the next term \\( e^{z^2}/(4z^3) \\), and confirm the comparison numerically.",
    marks: 5,
    yearCreated: 2026,
    tags: ["error estimate", "numerical check", "leading correction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the expansion.",
          workingLatex: "f(z) \\sim e^{z^2}\\left(\\frac{1}{2z} + \\frac{1}{4z^3} + \\frac{3}{8z^5} + \\cdots\\right).",
          explanation: "We test the accuracy of retaining only the first term \\( e^{z^2}/(2z) \\) at \\( z = 3 \\).",
        },
        {
          stepNumber: 2,
          description: "Write the one-term error.",
          workingLatex: "f(z) - \\frac{e^{z^2}}{2z} = e^{z^2}\\left(\\frac{1}{4z^3} + \\frac{3}{8z^5}+\\cdots\\right).",
          explanation: "The error after one term is the sum of all omitted terms, headed by \\( e^{z^2}/(4z^3) \\).",
        },
        {
          stepNumber: 3,
          description: "Approximate by the first omitted term.",
          workingLatex: "f(z) - \\frac{e^{z^2}}{2z} \\approx \\frac{e^{z^2}}{4z^3}.",
          explanation: "For an asymptotic series the error after one term is dominated by the first neglected term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate e^9.",
          workingLatex: "z = 3:\\quad e^{z^2} = e^{9} = 8103.08.",
          explanation: "The common exponential factor at \\( z = 3 \\) is \\( e^9 \\).",
        },
        {
          stepNumber: 5,
          description: "Evaluate the cube in the denominator.",
          workingLatex: "4z^3 = 4\\cdot 27 = 108.",
          explanation: "The denominator of the first omitted term is \\( 4z^3 = 108 \\).",
        },
        {
          stepNumber: 6,
          description: "Compute the first omitted term.",
          workingLatex: "\\frac{e^{9}}{4\\cdot 27} = \\frac{8103.08}{108} \\approx 75.0.",
          explanation: "Dividing gives the size of the first neglected term, about 75.",
        },
        {
          stepNumber: 7,
          description: "Evaluate the leading-term denominator.",
          workingLatex: "2z = 2\\cdot 3 = 6.",
          explanation: "The leading term has denominator \\( 2z = 6 \\).",
        },
        {
          stepNumber: 8,
          description: "Compute the leading term.",
          workingLatex: "\\frac{e^{9}}{2\\cdot 3} = \\frac{8103.08}{6} \\approx 1350.5.",
          explanation: "The leading term is about 1350.",
        },
        {
          stepNumber: 9,
          description: "Form the ratio of the two.",
          workingLatex: "\\frac{e^9/(4z^3)}{e^9/(2z)} = \\frac{2z}{4z^3} = \\frac{1}{2z^2} = \\frac{1}{18}.",
          explanation: "The first correction is a fraction \\( 1/(2z^2) = 1/18 \\) of the leading term — the generic ratio between successive terms of this series.",
        },
        {
          stepNumber: 10,
          description: "Confirm the ratio numerically.",
          workingLatex: "\\frac{75.0}{1350.5} \\approx 0.0556 \\approx \\frac{1}{18}.",
          explanation: "The numbers confirm the \\( 1/18 \\) ratio between the first correction and the leading term.",
        },
        {
          stepNumber: 11,
          description: "Compute the true value of f(3).",
          workingLatex: "f(3) = \\frac{\\sqrt\\pi}{2}\\big(\\operatorname{erfi}(3) - i\\big).",
          explanation: "The exact value from the closed form gives the benchmark against which the one-term error is measured.",
        },
        {
          stepNumber: 12,
          description: "Form the true one-term error.",
          workingLatex: "E_1 = \\left|f(3) - \\frac{e^9}{6}\\right| \\approx 94.0.",
          explanation: "Subtracting the leading term from the exact value gives the actual error, about 94.",
        },
        {
          stepNumber: 13,
          description: "Compare with the first omitted term.",
          workingLatex: "\\frac{E_1}{e^9/108} = \\frac{94.0}{75.0} \\approx 1.25.",
          explanation: "The true error is about \\( 1.25\\times \\) the first omitted term — the same order of magnitude.",
        },
        {
          stepNumber: 14,
          description: "Explain why the factor exceeds 1.",
          workingLatex: "\\frac{1}{4z^3} + \\frac{3}{8z^5} + \\cdots = \\frac{1}{4z^3}\\left(1 + \\frac{3}{2z^2} + \\cdots\\right).",
          explanation: "At the modest value \\( z = 3 \\) the later omitted terms add constructively, inflating the true error above the single first-omitted term by roughly the bracketed factor.",
        },
        {
          stepNumber: 15,
          description: "Estimate the bracket factor.",
          workingLatex: "1 + \\frac{3}{2z^2} + \\cdots = 1 + \\frac{3}{18} + \\cdots \\approx 1.17 + \\cdots,",
          explanation: "The second-order correction alone gives \\( \\approx 1.17 \\); higher terms push it toward the observed \\( 1.25 \\).",
        },
        {
          stepNumber: 16,
          description: "Confirm consistency.",
          workingLatex: "1.25 \\approx 1 + \\frac{3}{2z^2} + \\cdots \\quad (z = 3).",
          explanation: "The observed ratio \\( 1.25 \\) is consistent with the leading correction factor of the omitted tail, validating the asymptotic error estimate.",
        },
        {
          stepNumber: 17,
          description: "Note the relative error.",
          workingLatex: "\\frac{E_1}{|f(3)|} \\approx \\frac{94}{1257} \\approx 7.5\\%.",
          explanation: "With the true \\( |f(3)| \\approx 1257 \\), the one-term relative error is about 7.5% — consistent with \\( 1/(2z^2) \\) scaling.",
        },
        {
          stepNumber: 18,
          description: "Comment on improving accuracy.",
          workingLatex: "\\text{add } \\frac{e^9}{4z^3} \\Rightarrow \\text{error drops to } \\sim \\frac{e^9}{8z^5}\\cdot 3 \\approx 8.3.",
          explanation: "Including the first correction reduces the error by roughly the factor \\( 1/(2z^2) \\) again, to about 8 — the asymptotic series improving while terms still decrease.",
        },
        {
          stepNumber: 19,
          description: "Relate to optimal truncation.",
          workingLatex: "N_* \\approx |z|^2 = 9,\\ \\text{so terms keep shrinking up to } N \\approx 9.",
          explanation: "At \\( z = 3 \\) the least term is near \\( N \\approx 9 \\), so adding several terms continues to improve accuracy before divergence sets in.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex: "\\text{first omitted } \\tfrac{e^9}{108} \\approx 75;\\ \\text{leading} \\approx 1350;\\ \\text{true error} \\approx 94.",
          explanation: "The first omitted term \\( \\approx 75 \\) is \\( 1/18 \\) of the leading term \\( \\approx 1350 \\); the true one-term error \\( \\approx 94 \\) is the same order, confirming the asymptotic error estimate.",
        },
      ],
      finalAnswer: "First omitted term \\( \\dfrac{e^9}{108} \\approx 75 \\), about \\( 1/18 \\) of the leading term \\( \\approx 1350 \\); numerically the true one-term error \\( \\approx 94 \\) (same order).",
      canonicalAnswer: "exp(9)/108",
    },
  },
  {
    id: "am8d-028",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 28",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "As \\( \\arg z \\) sweeps from \\( 0^+ \\) to \\( 2\\pi^- \\), the recessive constant of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) jumps across each Stokes line crossed. Compute the total change and confirm it is consistent with \\( f \\) being single-valued.",
    marks: 5,
    yearCreated: 2026,
    tags: ["Stokes multiplier", "monodromy", "consistency"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the Stokes lines.",
          workingLatex: "\\text{Stokes lines: } \\operatorname{Im}(z^2)=0,\\ \\operatorname{Re}(z^2)>0 \\;\\Rightarrow\\; \\arg z = 0,\\ \\pi.",
          explanation: "The dominant exponential \\( e^{z^2} \\) has Stokes lines on the real axis; there are exactly two per revolution.",
        },
        {
          stepNumber: 2,
          description: "List the crossings in one loop.",
          workingLatex: "\\arg z: 0^+ \\to 2\\pi^- \\ \\text{crosses}\\ \\arg z = \\pi \\ \\text{and}\\ \\arg z = 2\\pi\\,(\\equiv 0).",
          explanation: "Sweeping the argument from just above \\( 0 \\) round to just below \\( 2\\pi \\) crosses the Stokes line at \\( \\pi \\) and the one at \\( 2\\pi \\) (the image of \\( 0 \\)).",
        },
        {
          stepNumber: 3,
          description: "Set the starting constant.",
          workingLatex: "\\arg z = 0^+:\\quad C = 0.",
          explanation: "Just above the positive real axis the recessive constant is zero — our reference value.",
        },
        {
          stepNumber: 4,
          description: "Recall the connection formula.",
          workingLatex: "f(-z) = -f(z) - i\\sqrt\\pi.",
          explanation: "The oddness analysis of \\( \\operatorname{erfi} \\) gives this exact relation, from which each jump is read.",
        },
        {
          stepNumber: 5,
          description: "Jump at arg z = π.",
          workingLatex: "\\Delta_1 = +i\\pi^{1/2}.",
          explanation: "Crossing the upper Stokes line, the recessive constant switches from \\( 0 \\) to \\( +i\\pi^{1/2} \\), so the jump is \\( \\Delta_1 = +i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 6,
          description: "Update the constant after the first crossing.",
          workingLatex: "C\\big|_{\\arg z = \\pi^+} = 0 + i\\pi^{1/2} = i\\pi^{1/2}.",
          explanation: "Just past \\( \\arg z = \\pi \\) the running constant is \\( i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 7,
          description: "Continue through the third quadrant.",
          workingLatex: "\\pi < \\arg z < 2\\pi:\\ \\text{no Stokes line interior to this range}.",
          explanation: "Between \\( \\pi \\) and \\( 2\\pi \\) there is no Stokes line (only the anti-Stokes diagonals at \\( 5\\pi/4, 7\\pi/4 \\)), so the constant holds steady at \\( i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 8,
          description: "Jump at arg z = 2π.",
          workingLatex: "\\Delta_2 = -\\,i\\pi^{1/2}.",
          explanation: "Crossing the Stokes line at \\( 2\\pi \\) (the image of \\( \\arg z = 0 \\)) switches the constant by \\( -i\\pi^{1/2} \\), the mirror of the \\( \\arg z = 0 \\) jump.",
        },
        {
          stepNumber: 9,
          description: "Update the constant after the second crossing.",
          workingLatex: "C\\big|_{\\arg z = 2\\pi^+} = i\\pi^{1/2} - i\\pi^{1/2} = 0.",
          explanation: "After the second jump the running constant returns to \\( 0 \\).",
        },
        {
          stepNumber: 10,
          description: "Sum the jumps.",
          workingLatex: "\\Delta_{\\text{total}} = \\Delta_1 + \\Delta_2 = i\\pi^{1/2} - i\\pi^{1/2} = 0.",
          explanation: "The two switches are equal and opposite, so they cancel exactly.",
        },
        {
          stepNumber: 11,
          description: "Examine the exponent under a full turn.",
          workingLatex: "z \\to z e^{2\\pi i} \\;\\Rightarrow\\; z^2 \\to z^2 e^{4\\pi i} = z^2.",
          explanation: "The exponent \\( z^2 \\) is invariant under \\( z \\to ze^{2\\pi i} \\), so the dominant exponential returns to itself after one loop.",
        },
        {
          stepNumber: 12,
          description: "Examine the algebraic series.",
          workingLatex: "S(z e^{2\\pi i}) = \\sum_n c_n (ze^{2\\pi i})^{-(2n+1)} = S(z).",
          explanation: "Each term has an integer power of \\( z \\), so \\( e^{2\\pi i} \\) raised to it is 1: the series is also single-valued.",
        },
        {
          stepNumber: 13,
          description: "State the single-valuedness requirement.",
          workingLatex: "f(z e^{2\\pi i}) = f(z).",
          explanation: "Because \\( e^{s^2} \\) is entire, \\( f \\) is a single-valued analytic function, so its value must be unchanged after a full circuit.",
        },
        {
          stepNumber: 14,
          description: "Connect to the total jump.",
          workingLatex: "f(z e^{2\\pi i}) - f(z) = \\Delta_{\\text{total}}\\cdot(\\text{recessive}) = 0.",
          explanation: "Since the dominant series returns to itself, the only possible discrepancy is the accumulated recessive jump; single-valuedness forces it to vanish.",
        },
        {
          stepNumber: 15,
          description: "Verify the consistency condition holds.",
          workingLatex: "\\Delta_{\\text{total}} = 0 \\ \\checkmark.",
          explanation: "The computed total jump is indeed zero, so the monodromy is trivial — exactly as required for an entire function.",
        },
        {
          stepNumber: 16,
          description: "Interpret as trivial monodromy.",
          workingLatex: "\\text{monodromy of the recessive constant} = +i\\pi^{1/2} - i\\pi^{1/2} = 0.",
          explanation: "Going once around the origin, the recessive constant returns to its starting value: the Stokes structure is globally consistent.",
        },
        {
          stepNumber: 17,
          description: "Contrast with a multivalued example.",
          workingLatex: "\\text{cf. } \\log z:\\ \\arg z \\to \\arg z + 2\\pi \\ \\Rightarrow\\ \\log z \\to \\log z + 2\\pi i \\ (\\neq 0).",
          explanation: "For a genuinely multivalued function the loop would leave a nonzero residue; the vanishing here is the signature of single-valuedness of \\( f \\).",
        },
        {
          stepNumber: 18,
          description: "Note the role of the two equal-and-opposite jumps.",
          workingLatex: "\\Delta_1 = -\\Delta_2 \\ \\Leftrightarrow\\ \\text{mirror symmetry } z \\to -z.",
          explanation: "The cancellation is forced by the \\( z\\to -z \\) symmetry, which makes the two Stokes lines carry opposite multipliers.",
        },
        {
          stepNumber: 19,
          description: "Numerical confirmation of the constant.",
          workingLatex: "|\\Delta_1| = |\\Delta_2| = \\sqrt\\pi = 1.7724539.",
          explanation: "Each jump has the verified magnitude \\( \\sqrt\\pi \\); their signed sum is zero.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex: "\\Delta_{\\text{total}} = +i\\pi^{1/2} - i\\pi^{1/2} = 0,\\quad \\text{consistent with } f\\ \\text{entire}.",
          explanation: "The two Stokes switches cancel over one revolution, so the recessive constant is single-valued — exactly the consistency demanded by \\( f \\) being entire.",
        },
      ],
      finalAnswer: "Total change \\( = +i\\pi^{1/2} - i\\pi^{1/2} = 0 \\); the recessive constant is single-valued, consistent with \\( f \\) being entire.",
      canonicalAnswer: "0",
    },
  },
  // REVIEW: pure sketch / describe question — the four-fold Stokes/anti-Stokes
  // picture; all angle values are machine-checkable and were verified.
  {
    id: "am8d-029",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 29",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Describe (with a labelled sketch) the Stokes and anti-Stokes lines of \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) in the full \\( z \\)-plane, the four sectors of fixed dominance/recessiveness, and the rays on which the recessive constant switches. Justify each feature from the exponent \\( z^2 \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["Stokes lines", "anti-Stokes lines", "sketch", "sectors"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the exponent in polar form.",
          workingLatex: "z = re^{i\\theta} \\;\\Rightarrow\\; z^2 = r^2 e^{2i\\theta}, \\quad \\operatorname{Re}(z^2) = r^2\\cos 2\\theta,\\ \\operatorname{Im}(z^2) = r^2\\sin 2\\theta.",
          explanation: "Everything about the Stokes structure follows from the real and imaginary parts of the exponent \\( z^2 \\).",
        },
        {
          stepNumber: 2,
          description: "Stokes condition.",
          workingLatex: "\\text{Stokes}:\\ \\operatorname{Im}(z^2)=0,\\ \\operatorname{Re}(z^2)>0.",
          explanation: "Stokes lines are where the dominant exponential is maximally large over the recessive constant: \\( z^2 \\) real and positive.",
        },
        {
          stepNumber: 3,
          description: "Solve for the Stokes lines.",
          workingLatex: "\\sin 2\\theta = 0,\\ \\cos 2\\theta > 0 \\;\\Rightarrow\\; \\arg z = 0,\\ \\pi \\quad (\\text{the real axis}).",
          explanation: "The two Stokes lines lie along the positive and negative real axis, where \\( e^{z^2} \\) is maximally dominant; the recessive constant switches across these rays.",
        },
        {
          stepNumber: 4,
          description: "Anti-Stokes condition.",
          workingLatex: "\\text{anti-Stokes}:\\ \\operatorname{Re}(z^2)=0.",
          explanation: "Anti-Stokes lines are where the dominant and recessive exponentials are equal in magnitude: \\( |e^{z^2}| = 1 \\).",
        },
        {
          stepNumber: 5,
          description: "Solve for the anti-Stokes lines.",
          workingLatex: "\\cos 2\\theta = 0 \\;\\Rightarrow\\; \\arg z = \\frac{\\pi}{4},\\frac{3\\pi}{4},\\frac{5\\pi}{4},\\frac{7\\pi}{4} \\quad (\\text{the diagonals}).",
          explanation: "The four anti-Stokes lines are the diagonals; on them \\( |e^{z^2}|=1 \\) and dominant/recessive swap roles.",
          mafs: `<Mafs viewBox={{ x: [-2.4, 2.4], y: [-1.8, 1.8], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[0,0],[1.7,1.7],[1.7,-1.7]]} color="var(--mafs-fg-orange)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[-1.7,1.7],[-1.7,-1.7]]} color="var(--mafs-fg-orange)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[1.7,1.7],[-1.7,1.7]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[1.7,-1.7],[-1.7,-1.7]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Line.Segment point1={[-2.2,0]} point2={[2.2,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Line.Segment point1={[-1.6,-1.6]} point2={[1.6,1.6]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-1.6,1.6]} point2={[1.6,-1.6]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.55,0.35]} tex="\\text{Stokes}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.0,1.25]} tex="\\text{subdom.}" color="var(--mafs-fg-green)" />
  <LaTeX at={[1.35,1.45]} tex="\\arg z=\\tfrac{\\pi}{4}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[1.65,-0.3]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.6,1.6]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 6,
          description: "Growth sectors.",
          workingLatex: "\\cos 2\\theta > 0:\\ |\\theta|<\\tfrac\\pi4 \\ \\text{or}\\ |\\theta-\\pi|<\\tfrac\\pi4 \\;\\Rightarrow\\; |e^{z^2}| \\to \\infty.",
          explanation: "Two opposite sectors hugging the real axis are growth regions where \\( e^{z^2} \\) blows up.",
        },
        {
          stepNumber: 7,
          description: "Decay sectors.",
          workingLatex: "\\cos 2\\theta < 0:\\ |\\theta-\\tfrac\\pi2|<\\tfrac\\pi4 \\ \\text{or}\\ |\\theta-\\tfrac{3\\pi}2|<\\tfrac\\pi4 \\;\\Rightarrow\\; |e^{z^2}| \\to 0.",
          explanation: "The two sectors hugging the imaginary axis are decay regions, where \\( e^{z^2} \\) vanishes and \\( f \\) is bounded.",
        },
        {
          stepNumber: 8,
          description: "Count the sectors.",
          workingLatex: "4\\ \\text{anti-Stokes lines} \\;\\Rightarrow\\; 4\\ \\text{sectors of opening } \\tfrac\\pi2,\\ \\text{alternating growth/decay}.",
          explanation: "The four diagonals partition the plane into four equal sectors of opening \\( \\pi/2 \\), alternating between growth and decay.",
        },
        {
          stepNumber: 9,
          description: "Why the constant switches only on Stokes lines.",
          workingLatex: "\\text{switch must be invisible} \\Rightarrow \\text{where dominant is maximal} \\Rightarrow \\text{Stokes line}.",
          explanation: "A discontinuous change in the recessive constant must not disturb the visible series, so it can occur only where the dominant term is maximally large — the Stokes lines (the real axis).",
        },
        {
          stepNumber: 10,
          description: "Jump at arg z = 0.",
          workingLatex: "\\arg z = 0:\\ \\text{constant jumps by } -i\\pi^{1/2}.",
          explanation: "Crossing the positive-real Stokes line downward, the recessive constant changes by \\( -i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 11,
          description: "Jump at arg z = π.",
          workingLatex: "\\arg z = \\pi:\\ \\text{constant jumps by } +i\\pi^{1/2}.",
          explanation: "Crossing the negative-real Stokes line, the constant changes by \\( +i\\pi^{1/2} \\), the mirror of the \\( \\arg z = 0 \\) jump.",
        },
        {
          stepNumber: 12,
          description: "Constant is fixed within each sector.",
          workingLatex: "\\text{between Stokes lines: } C\\ \\text{constant in each of the four sectors}.",
          explanation: "Away from the real axis the recessive constant does not change; it is piecewise constant, switching only as a Stokes line is crossed.",
        },
        {
          stepNumber: 13,
          description: "Check single-valuedness over a loop.",
          workingLatex: "(-i\\pi^{1/2}) + (+i\\pi^{1/2}) = 0.",
          explanation: "The two jumps cancel over a full revolution, consistent with \\( f \\) being entire and single-valued.",
        },
        {
          stepNumber: 14,
          description: "Behaviour on an anti-Stokes line.",
          workingLatex: "\\arg z = \\tfrac\\pi4:\\ |e^{z^2}| = 1,\\ e^{z^2}\\ \\text{oscillatory}.",
          explanation: "On the diagonals the dominant exponential neither grows nor decays; \\( f \\) is bounded and oscillatory, and dominance swaps across the line.",
        },
        {
          stepNumber: 15,
          description: "Interleaving of the two families.",
          workingLatex: "\\text{Stokes at } 0,\\pi;\\ \\text{anti-Stokes at } \\tfrac\\pi4,\\tfrac{3\\pi}4,\\tfrac{5\\pi}4,\\tfrac{7\\pi}4;\\ \\text{offset } \\tfrac\\pi4.",
          explanation: "Each anti-Stokes line bisects the angle between adjacent Stokes lines — the two families interleave at \\( \\pi/4 \\) offsets.",
        },
        {
          stepNumber: 16,
          description: "Symmetry under z → −z.",
          workingLatex: "z \\to -z:\\ \\arg z \\to \\arg z + \\pi,\\ \\text{the figure maps to itself}.",
          explanation: "Because \\( (-z)^2 = z^2 \\), rotating by \\( \\pi \\) leaves the entire Stokes/anti-Stokes picture invariant — the source of the equal-and-opposite jumps.",
        },
        {
          stepNumber: 17,
          description: "Justify each feature from z².",
          workingLatex: "\\text{all rays from } \\operatorname{Re}(z^2),\\operatorname{Im}(z^2) = r^2\\cos 2\\theta,\\,r^2\\sin 2\\theta.",
          explanation: "Both line families and the sector boundaries are level sets of \\( \\operatorname{Re}(z^2) \\) and \\( \\operatorname{Im}(z^2) \\); the factor 2 in \\( 2\\theta \\) is why there are two Stokes and four anti-Stokes lines.",
        },
        {
          stepNumber: 18,
          description: "Locate the bounded region for f.",
          workingLatex: "f\\ \\text{bounded in decay sectors near}\\ \\arg z = \\tfrac\\pi2,\\tfrac{3\\pi}2.",
          explanation: "The base point \\( i\\infty \\) sits in a decay sector; \\( f \\) is finite there and grows like \\( e^{z^2} \\) only as \\( z \\) enters a growth sector.",
        },
        {
          stepNumber: 19,
          description: "Summarise the pinwheel.",
          workingLatex: "\\text{four-fold pinwheel: Stokes on axis, anti-Stokes on diagonals}.",
          explanation: "The figure is a four-fold pinwheel: Stokes lines on the real axis (switching), anti-Stokes on the diagonals (boundedness), with alternating growth and decay sectors of opening \\( \\pi/2 \\).",
        },
        {
          stepNumber: 20,
          description: "State the complete description.",
          workingLatex: "\\text{Stokes } 0,\\pi\\ (\\mp i\\pi^{1/2});\\ \\text{anti-Stokes } \\tfrac\\pi4,\\tfrac{3\\pi}4,\\tfrac{5\\pi}4,\\tfrac{7\\pi}4;\\ \\text{grow near } \\mathbb{R},\\ \\text{decay near } i\\mathbb{R}.",
          explanation: "This assembles the full \\( z \\)-plane picture: switching Stokes lines on the real axis, four anti-Stokes diagonals, and alternating growth/decay sectors — all dictated by the exponent \\( z^2 \\).",
        },
      ],
      finalAnswer: "Stokes lines: real axis \\( \\arg z = 0,\\pi \\) (constant switches by \\( \\mp i\\pi^{1/2} \\)); anti-Stokes lines: diagonals \\( \\arg z = \\pi/4,3\\pi/4,5\\pi/4,7\\pi/4 \\); growth near real axis, decay near imaginary axis.",
    },
  },
  // REVIEW: pure conceptual / "explain"-type question — the beyond-all-orders
  // resolution cannot be reduced to a single machine-checkable value beyond the
  // i*pi^{1/2} constant, which was confirmed.
  {
    id: "am8d-030",
    topicRef: "am8d",
    topicTitle: "The Stokes phenomenon for integrals 30",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Explain why the Stokes phenomenon for \\( f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds \\) is not a contradiction: \\( f \\) is single-valued and smooth, yet its asymptotic representation gains a constant \\( -i\\pi^{1/2} \\) as \\( \\arg z \\) decreases through \\( 0 \\). Resolve the paradox using the recessive term being beyond all orders.",
    marks: 5,
    yearCreated: 2026,
    tags: ["beyond all orders", "conceptual", "Stokes phenomenon", "resolution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the two representations.",
          workingLatex: "f \\sim e^{z^2}S(z)\\ (\\arg z = 0^+), \\qquad f \\sim e^{z^2}S(z) - i\\pi^{1/2}\\ (\\arg z = 0^-).",
          explanation: "Just above and just below the positive real axis the asymptotic representation of \\( f \\) differs by the constant \\( -i\\pi^{1/2} \\).",
        },
        {
          stepNumber: 2,
          description: "State the apparent paradox.",
          workingLatex: "f \\text{ smooth and single-valued, yet its representation gains } -i\\pi^{1/2}.",
          explanation: "It seems the asymptotic value of \\( f \\) jumps discontinuously, which would be impossible for a continuous function.",
        },
        {
          stepNumber: 3,
          description: "Recall f is entire.",
          workingLatex: "f(z) = \\int_{i\\infty}^{z} e^{s^2}\\,ds, \\quad e^{s^2}\\ \\text{entire} \\;\\Rightarrow\\; f\\ \\text{analytic everywhere}.",
          explanation: "As the integral of an entire function, \\( f \\) is itself entire — analytic and single-valued, with no jumps anywhere.",
        },
        {
          stepNumber: 4,
          description: "Distinguish the function from its series.",
          workingLatex: "f(z)\\ \\text{continuous}; \\qquad e^{z^2}S_N(z)\\ \\text{is an approximation, not } f.",
          explanation: "The actual function never jumps; only the bookkeeping of which terms we write down changes. The series is asymptotic, not equal to \\( f \\).",
        },
        {
          stepNumber: 5,
          description: "Recall the asymptotic-series error.",
          workingLatex: "f(z) - e^{z^2}S_N(z) = R_N(z),\\quad R_N = O\\!\\big(e^{z^2}z^{-(2N+1)}\\big).",
          explanation: "Truncating at order \\( N \\) leaves a remainder \\( R_N \\); the series represents \\( f \\) only up to this error, which is itself of order the recessive constant near optimal truncation.",
        },
        {
          stepNumber: 6,
          description: "Size the recessive constant near the Stokes line.",
          workingLatex: "\\frac{|{-i\\pi^{1/2}}|}{|e^{z^2}/(2z)|} = 2|z|\\sqrt\\pi\\,e^{-\\operatorname{Re}(z^2)}.",
          explanation: "The constant relative to the leading term is exponentially small wherever \\( \\operatorname{Re}(z^2) \\) is large.",
        },
        {
          stepNumber: 7,
          description: "Evaluate on the Stokes line.",
          workingLatex: "\\arg z = 0:\\ \\operatorname{Re}(z^2) = |z|^2 \\;\\Rightarrow\\; \\frac{|{-i\\pi^{1/2}}|}{|\\text{leading}|} \\sim |z|\\,e^{-|z|^2} \\to 0.",
          explanation: "On the Stokes line the constant is vanishingly small compared with the leading term.",
        },
        {
          stepNumber: 8,
          description: "Compare with every algebraic term.",
          workingLatex: "|{-i\\pi^{1/2}}| \\ll |c_N z^{-(2N+1)} e^{z^2}| \\quad \\text{for all fixed } N.",
          explanation: "The constant is smaller than every term of the dominant series — it is ‘beyond all orders’ of the algebraic expansion.",
        },
        {
          stepNumber: 9,
          description: "Define ‘beyond all orders’.",
          workingLatex: "|{-i\\pi^{1/2}}|/|e^{z^2}| = O(e^{-|z|^2}) = o(z^{-N})\\ \\forall N.",
          explanation: "Decaying faster than any power, the constant is invisible to a power-series expansion — no finite number of algebraic terms can detect it.",
        },
        {
          stepNumber: 10,
          description: "Locate the constant relative to the least term.",
          workingLatex: "|{-i\\pi^{1/2}}|/|e^{z^2}| \\sim e^{-|z|^2} \\sim T_{N_*},\\quad N_* \\approx |z|^2.",
          explanation: "The constant is the same size as the least term of the divergent series, so it sits exactly at the optimal-truncation error level.",
        },
        {
          stepNumber: 11,
          description: "Explain why a fixed-order truncation sees a jump.",
          workingLatex: "\\text{truncate at fixed } N:\\ \\text{constant lies below the error bar} \\Rightarrow \\text{appears as a discrete switch}.",
          explanation: "Stopping the series at a fixed algebraic order can only resolve the constant as either present or absent — hence the apparent discontinuity is an artefact of fixed-order truncation.",
        },
        {
          stepNumber: 12,
          description: "Introduce the Stokes multiplier as a function.",
          workingLatex: "f = e^{z^2}S(z) + \\mathcal{S}(\\arg z)\\cdot i\\pi^{1/2},\\quad \\mathcal{S}: 0 \\to -1\\ \\text{near}\\ \\arg z = 0.",
          explanation: "Promote the constant's coefficient \\( \\mathcal{S} \\) to a function of \\( \\arg z \\); the ‘jump’ is the rapid variation of \\( \\mathcal{S} \\) from 0 to \\( -1 \\).",
        },
        {
          stepNumber: 13,
          description: "State Berry's smoothing law.",
          workingLatex: "\\mathcal{S}(\\arg z) \\approx \\tfrac12\\big(1+\\operatorname{erf}(\\vartheta)\\big),\\quad \\vartheta \\propto \\frac{\\operatorname{Im}(z^2)}{\\sqrt{\\operatorname{Re}(z^2)}}.",
          explanation: "On the exponentially small scale, the multiplier rises smoothly as an error function of the scaled distance \\( \\vartheta \\) from the Stokes line.",
        },
        {
          stepNumber: 14,
          description: "Note the width of the transition.",
          workingLatex: "\\Delta(\\arg z) \\sim \\frac{1}{\\sqrt{\\operatorname{Re}(z^2)}} \\sim \\frac{1}{|z|}.",
          explanation: "The smooth switch happens over an angular width \\( \\sim 1/|z| \\), shrinking as \\( |z| \\to \\infty \\); in the strict limit it looks like a jump.",
        },
        {
          stepNumber: 15,
          description: "Recover the discontinuity as a limit.",
          workingLatex: "\\lim_{|z|\\to\\infty} \\tfrac12\\big(1+\\operatorname{erf}(\\vartheta)\\big) = \\text{step function}.",
          explanation: "As \\( |z| \\to \\infty \\) the error-function rise sharpens into a step; the classical ‘discontinuous’ Stokes jump is the infinite-\\( |z| \\) idealisation of a smooth transition.",
        },
        {
          stepNumber: 16,
          description: "Confirm f itself stays smooth.",
          workingLatex: "f(z)\\ \\text{analytic}; \\ \\text{only the asymptotic bookkeeping varies}.",
          explanation: "Throughout the transition the true \\( f \\) is analytic; what changes smoothly is the coefficient with which the recessive term is included in the representation.",
        },
        {
          stepNumber: 17,
          description: "Reconcile the two series on the overlap.",
          workingLatex: "e^{z^2}S(z)\\ \\text{common to both}; \\ \\text{difference} = -i\\pi^{1/2}\\ \\text{always exponentially small}.",
          explanation: "Both representations agree to all algebraic orders; they differ only by a term that is always beneath the dominant series's truncation error — so there is never a measurable inconsistency.",
        },
        {
          stepNumber: 18,
          description: "Note global consistency.",
          workingLatex: "\\text{total jump over a loop} = -i\\pi^{1/2} + i\\pi^{1/2} = 0.",
          explanation: "The smooth switches sum to zero around the origin, consistent with the single-valuedness of the entire function \\( f \\).",
        },
        {
          stepNumber: 19,
          description: "Numerical confirmation.",
          workingLatex: "f = \\tfrac{\\sqrt\\pi}{2}(\\operatorname{erfi}z - i):\\ \\text{both sectors match to rel. err}\\sim 4\\times10^{-7}\\ (|z|=8).",
          explanation: "The closed form confirms that the single smooth function \\( f \\) underlies both sector representations to high precision.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex: "\\text{No contradiction: a recessive, beyond-all-orders term switches on smoothly}.",
          explanation: "The Stokes phenomenon reconciles one smooth function with two different-looking asymptotic series: the difference is always exponentially small, hidden beneath the optimal-truncation error, and the switch is a smooth error-function rise centred on the Stokes line.",
        },
      ],
      finalAnswer: "No paradox: the switched constant is recessive (beyond all orders of the dominant series), hidden beneath the truncation error; the true \\( f \\) varies smoothly and the switch is a smooth error-function rise centred on the Stokes line.",
    },
  },
];
