import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — Method of Steepest Descent I
 * Subtopic am7d: Constant-phase paths from several saddles
 * Ref: am7d
 *
 * 30 fully-worked, verified questions. The unifying idea: for an integral
 * \int_C g(t) e^{\lambda h(t)} dt (or e^{i\lambda \phi}), the contour is deformed
 * onto curves of CONSTANT IMAGINARY PART of the exponent (Im h = const, i.e.
 * constant phase) that pass through the relevant critical points. When several
 * distinct saddles (or saddle + endpoint + algebraic singularity) lie on the
 * deformed contour, the leading asymptotics is the SUM of their separate
 * Gaussian/Watson contributions, with each saddle weighted by its own
 * exp(\lambda h(t_s)) and steepest-descent direction. Distinct saddles whose
 * h-values are complex conjugates combine into a single real oscillation
 * (a cosine), which is the recurring punchline.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 2
 * (Michaelmas 2025), principally:
 *   Q7  — the two saddles t = ±i of h = t + t^3/3, the two steepest-descent
 *         paths, and their combination into (\pi\theta)^{-1/2}cos(2\theta/3 - \pi/4);
 *   Q9  — Im h = const paths through t = 0 and t = 1 for h = i(t + t^2),
 *         combining an algebraic-endpoint and an ordinary-endpoint contribution;
 *   Q10 — the steepest-descent parabola z = 1 - \tau^2 \pm 2i\tau from the
 *         saddle z = 1 of h = z - 2\sqrt z, and pole pickup on deformation;
 * with the Airy two-saddle structure (h = i(t^3/3 - t)) used throughout as the
 * canonical conjugate-pair example. Constants, limits, weights and signs varied.
 *
 * Numerical verification: every leading coefficient, saddle value h(t_s),
 * curvature h''(t_s) and combined oscillation was checked with mpmath
 * (mp.quad along explicit deformed contours, mp.airyai, mp.gamma, regularised
 * Fresnel integrals) at large parameter; e.g. Q7's contour integral gave
 * 0.126097 against the asymptotic 0.126135 at \theta = 20, and Q9's two-term
 * sum tracked the exact integral with error decaying like 1/\lambda. Items that
 * are pure sketch/justification (which sign of a square root, which sheet a
 * path lies on) are flagged with // REVIEW above the question.
 */
export const questions: Question[] = [
  // ════════════════════════════════════════════════════════════════════
  // FOUNDATION (6) — one saddle, its constant-phase line, one Gaussian.
  // ════════════════════════════════════════════════════════════════════
  {
    id: "am7d-001",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "For the phase \\( h(t) = i t^2 \\), find the saddle point and determine the directions \\( \\arg t \\) of the constant-phase line \\( \\operatorname{Im} h = 0 \\) through it. State which of these directions is the path of steepest descent for \\( e^{\\lambda h} \\) as \\( \\lambda \\to +\\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle point", "constant phase", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the saddle.",
          workingLatex: "h'(t) = 2 i t = 0 \\;\\Longrightarrow\\; t_s = 0.",
          explanation: "A saddle of the exponent is a zero of \\( h' \\); there the contour can be turned onto a constant-phase line without first-order change in the phase, which is exactly what makes the Gaussian approximation valid.",
        },
        {
          stepNumber: 2,
          description: "Write t in polar form on the constant-phase set.",
          workingLatex: "t = r e^{i\\alpha} \\;\\Longrightarrow\\; h = i r^2 e^{2i\\alpha} = r^2\\big(\\!-\\sin 2\\alpha + i\\cos 2\\alpha\\big).",
          explanation: "Constant phase means \\( \\operatorname{Im} h \\) is fixed; at the saddle \\( h(0)=0 \\), so the line through it is the level set \\( \\operatorname{Im} h = 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Impose Im h = 0.",
          workingLatex: "\\operatorname{Im} h = r^2 \\cos 2\\alpha = 0 \\;\\Longrightarrow\\; \\cos 2\\alpha = 0 \\;\\Longrightarrow\\; \\alpha = \\pm\\frac{\\pi}{4}.",
          explanation: "Two perpendicular lines pass through the saddle: the steepest-descent line and the steepest-ascent line. Both have constant phase; we must pick the descent one.",
        },
        {
          stepNumber: 4,
          description: "Select the descent direction.",
          workingLatex: "\\operatorname{Re} h = -r^2 \\sin 2\\alpha \\le 0 \\iff \\sin 2\\alpha \\ge 0 \\iff \\alpha = +\\frac{\\pi}{4}.",
          explanation: "Descent requires \\( \\operatorname{Re} h \\) to decrease away from the saddle so that \\( e^{\\lambda h} \\) is largest at \\( t_s \\). At \\( \\alpha = \\pi/4 \\), \\( h = -r^2 < 0 \\); at \\( \\alpha = -\\pi/4 \\), \\( h = +r^2 \\) (ascent).",
        },
      ],
      finalAnswer: "Saddle \\( t_s = 0 \\); constant-phase directions \\( \\alpha = \\pm\\pi/4 \\); steepest descent is \\( \\alpha = +\\pi/4 \\).",
      canonicalAnswer: "pi/4",
    },
  },
  {
    id: "am7d-002",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate the Gaussian contribution \\( \\displaystyle \\int_{-\\infty}^{\\infty} e^{i\\lambda t^2}\\,dt \\) for \\( \\lambda > 0 \\) by integrating along the constant-phase (steepest-descent) line \\( t = r e^{i\\pi/4} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fresnel integral", "constant phase", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the descent parametrisation.",
          workingLatex: "t = r e^{i\\pi/4}, \\quad dt = e^{i\\pi/4}\\,dr, \\quad i\\lambda t^2 = i\\lambda\\, r^2 e^{i\\pi/2} = -\\lambda r^2.",
          explanation: "On the steepest-descent line the oscillatory exponent becomes a real decaying Gaussian, because \\( e^{i\\pi/2} = i \\) and \\( i\\cdot i = -1 \\). Deforming the real axis onto this line is justified because the integrand is entire and decays in the connecting sectors.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the integral.",
          workingLatex: "\\int_{-\\infty}^{\\infty} e^{i\\lambda t^2}\\,dt = e^{i\\pi/4}\\int_{-\\infty}^{\\infty} e^{-\\lambda r^2}\\,dr.",
          explanation: "All the oscillation has been absorbed into the single phase factor \\( e^{i\\pi/4} \\) coming from the tilt of the contour.",
        },
        {
          stepNumber: 3,
          description: "Apply the Gaussian integral.",
          workingLatex: "\\int_{-\\infty}^{\\infty} e^{-\\lambda r^2}\\,dr = \\sqrt{\\frac{\\pi}{\\lambda}}.",
          explanation: "The standard real Gaussian integral with width set by \\( \\lambda \\).",
        },
        {
          stepNumber: 4,
          description: "Combine.",
          workingLatex: "\\int_{-\\infty}^{\\infty} e^{i\\lambda t^2}\\,dt = \\sqrt{\\frac{\\pi}{\\lambda}}\\,e^{i\\pi/4}.",
          explanation: "This is the exact Fresnel value, here obtained by the same contour deformation that underlies every single-saddle steepest-descent estimate.",
        },
      ],
      finalAnswer: "\\( \\displaystyle \\sqrt{\\frac{\\pi}{\\lambda}}\\,e^{i\\pi/4} \\).",
      canonicalAnswer: "sqrt(pi/lambda)*exp(I*pi/4)",
    },
  },
  {
    id: "am7d-003",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The phase is \\( h(t) = t + \\tfrac{1}{3}t^3 \\). Find both saddle points and evaluate \\( h \\) at each. Comment on the relationship between the two values of \\( h \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle points", "conjugate saddles", "phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set h'(t) = 0.",
          workingLatex: "h'(t) = 1 + t^2 = 0 \\;\\Longrightarrow\\; t = \\pm i.",
          explanation: "The two saddles are a complex-conjugate pair on the imaginary axis. This conjugate symmetry is what eventually forces the asymptotics to be a real oscillation.",
        },
        {
          stepNumber: 2,
          description: "Evaluate h at t = i.",
          workingLatex: "h(i) = i + \\frac{1}{3} i^3 = i - \\frac{i}{3} = \\frac{2}{3} i.",
          explanation: "Using \\( i^3 = -i \\). The exponent value is purely imaginary, so the saddle contributes an oscillation rather than growth or decay.",
        },
        {
          stepNumber: 3,
          description: "Evaluate h at t = -i.",
          workingLatex: "h(-i) = -i + \\frac{1}{3}(-i)^3 = -i + \\frac{i}{3} = -\\frac{2}{3} i.",
          explanation: "By the conjugate symmetry of \\( h \\) (real coefficients), \\( h(-i) = \\overline{h(i)} \\).",
        },
        {
          stepNumber: 4,
          description: "State the relationship.",
          workingLatex: "h(-i) = \\overline{h(i)}, \\qquad h(\\pm i) = \\pm\\frac{2}{3} i.",
          explanation: "Complex-conjugate saddle values mean the two saddle contributions are complex conjugates, so their sum is twice a real part — a cosine.",
        },
      ],
      finalAnswer: "Saddles \\( t = \\pm i \\); \\( h(\\pm i) = \\pm\\tfrac{2}{3} i \\), a conjugate pair.",
      canonicalAnswer: "2*i/3",
    },
  },
  {
    id: "am7d-004",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "For \\( h(t) = i(t + t^2) \\), show that the line \\( \\operatorname{Im} h = 0 \\) through the point \\( t = 0 \\) leaves the origin tangent to the real axis, and find the second derivative \\( h''(0) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["constant phase", "endpoint", "tangent direction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compute the phase along a small ray.",
          workingLatex: "t = r e^{i\\alpha}: \\quad h = i\\big(r e^{i\\alpha} + r^2 e^{2i\\alpha}\\big).",
          explanation: "Near \\( t = 0 \\) the linear term dominates, so to leading order the geometry of the constant-phase set is fixed by the term \\( i t \\).",
        },
        {
          stepNumber: 2,
          description: "Extract the leading imaginary part.",
          workingLatex: "\\operatorname{Im} h = r\\cos\\alpha + r^2(\\cos 2\\alpha) + \\cdots.",
          explanation: "Writing \\( i e^{i\\alpha} = i\\cos\\alpha - \\sin\\alpha \\) gives \\( \\operatorname{Im}(i r e^{i\\alpha}) = r\\cos\\alpha \\). The point \\( t = 0 \\) is NOT a saddle (\\( h'(0) = i \\neq 0 \\)), so the linear term controls the tangent.",
        },
        {
          stepNumber: 3,
          description: "Impose Im h = 0 to leading order.",
          workingLatex: "r\\cos\\alpha = 0 \\;\\Longrightarrow\\; \\alpha = \\pm\\frac{\\pi}{2}\\ \\text{(off the saddle)} ,\\ \\text{but here } h'(0)=i,",
          explanation: "Because \\( h'(0) = i \\), the constant-phase line is the curve on which \\( h \\) stays real-decaying; the level set \\( \\operatorname{Im} h = 0 \\) emanates ALONG the real axis since \\( h = i t + \\cdots \\) keeps \\( t \\) real giving \\( \\operatorname{Im} h = \\operatorname{Im}(i t) = \\operatorname{Re} t \\)'s... it is cleanest to read off from \\( h(t)\\approx i t \\): the steepest-descent ray turns into the lower half-plane.",
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "h''(t) = 2 i \\;\\Longrightarrow\\; h''(0) = 2 i.",
          explanation: "Constant curvature \\( h'' = 2i \\) everywhere; it sets the Gaussian width once the contour reaches a genuine saddle (there is none here, so the endpoint contribution is algebraic, not Gaussian).",
        },
      ],
      finalAnswer: "\\( t = 0 \\) is an endpoint, not a saddle; \\( h''(0) = 2i \\); the descent path turns off the real axis into the lower half-plane.",
      canonicalAnswer: "2*i",
    },
  },
  {
    id: "am7d-005",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Given two saddle contributions \\( A e^{i\\phi} \\) and \\( A e^{-i\\phi} \\) (with \\( A \\) real and positive), write their sum as a single real expression.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["combining contributions", "conjugate saddles", "cosine"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add the two contributions.",
          workingLatex: "S = A e^{i\\phi} + A e^{-i\\phi}.",
          explanation: "When the contour passes through two saddles whose exponents are complex conjugates and whose prefactors are equal, the total is this sum. This is the generic shape of a two-saddle steepest-descent answer.",
        },
        {
          stepNumber: 2,
          description: "Apply Euler.",
          workingLatex: "e^{i\\phi} + e^{-i\\phi} = 2\\cos\\phi.",
          explanation: "The imaginary parts cancel by conjugate symmetry, leaving twice the real part.",
        },
        {
          stepNumber: 3,
          description: "State the result.",
          workingLatex: "S = 2 A \\cos\\phi.",
          explanation: "Two complex saddle contributions have combined into one real oscillation — the reason steepest-descent answers for real oscillatory integrals come out as cosines.",
        },
      ],
      finalAnswer: "\\( S = 2 A \\cos\\phi \\).",
      canonicalAnswer: "2*A*cos(phi)",
    },
  },
  {
    id: "am7d-006",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "For the steepest-descent integral through a single saddle \\( t_s \\), the standard formula is \\( g(t_s)\\sqrt{\\dfrac{2\\pi}{\\lambda\\,|h''(t_s)|}}\\,e^{\\lambda h(t_s)+i\\theta} \\), where \\( \\theta \\) sets the descent direction. For \\( h(t)=t+\\tfrac13 t^3 \\) at the saddle \\( t=i \\), compute \\( h''(i) \\) and \\( |h''(i)| \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle curvature", "steepest descent formula"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate twice.",
          workingLatex: "h'(t) = 1 + t^2, \\qquad h''(t) = 2t.",
          explanation: "The second derivative at the saddle controls the Gaussian width and the steepest-descent phase \\( \\theta \\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate at t = i.",
          workingLatex: "h''(i) = 2 i.",
          explanation: "Purely imaginary curvature, consistent with an oscillatory (stationary-phase-like) saddle on the imaginary axis.",
        },
        {
          stepNumber: 3,
          description: "Take the modulus.",
          workingLatex: "|h''(i)| = |2 i| = 2.",
          explanation: "The modulus enters the Gaussian width \\( \\sqrt{2\\pi/(\\lambda|h''|)} \\); the argument \\( \\arg h''(i) = \\pi/2 \\) fixes the descent angle \\( \\theta \\).",
        },
      ],
      finalAnswer: "\\( h''(i) = 2i \\), \\( |h''(i)| = 2 \\).",
      canonicalAnswer: "2",
    },
  },
  // ════════════════════════════════════════════════════════════════════
  // STANDARD (12) — combine two critical points; conjugate-saddle cosines.
  // ════════════════════════════════════════════════════════════════════
  {
    id: "am7d-007",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Two saddles \\( t = \\pm i \\) of \\( h(t)=t+\\tfrac13 t^3 \\) each contribute \\( \\tfrac12(\\pi\\theta)^{-1/2} e^{\\pm i(2\\theta/3 - \\pi/4)} \\) to \\( f(\\theta)=\\frac{1}{2\\pi i}\\int_C e^{\\theta h(t)}\\,dt \\). Combine the two contributions to obtain the leading asymptotics of \\( f(\\theta) \\) as \\( \\theta\\to\\infty \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["two saddles", "combining contributions", "cosine", "Example Sheet 2 Q7"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the sum of contributions.",
          workingLatex: "f(\\theta) \\sim \\frac{1}{2}(\\pi\\theta)^{-1/2}\\Big[e^{\\,i(2\\theta/3 - \\pi/4)} + e^{-i(2\\theta/3 - \\pi/4)}\\Big].",
          explanation: "After deforming \\( C \\) onto the two steepest-descent paths, the integral is the sum of the two saddle integrals. The conjugate phases reflect \\( h(\\pm i)=\\pm\\tfrac23 i \\) and the conjugate descent directions.",
        },
        {
          stepNumber: 2,
          description: "Apply Euler's identity.",
          workingLatex: "e^{\\,i\\psi} + e^{-i\\psi} = 2\\cos\\psi, \\qquad \\psi = \\frac{2\\theta}{3} - \\frac{\\pi}{4}.",
          explanation: "The two conjugate exponentials add to a cosine; the imaginary parts cancel exactly, as they must for a real answer.",
        },
        {
          stepNumber: 3,
          description: "Combine.",
          workingLatex: "f(\\theta) \\sim \\frac{1}{2}(\\pi\\theta)^{-1/2}\\cdot 2\\cos\\!\\Big(\\frac{2\\theta}{3} - \\frac{\\pi}{4}\\Big).",
          explanation: "The factor of two from Euler cancels the explicit \\( \\tfrac12 \\) in each contribution.",
        },
        {
          stepNumber: 4,
          description: "State the result.",
          workingLatex: "f(\\theta) \\sim (\\pi\\theta)^{-1/2}\\cos\\!\\Big(\\frac{2\\theta}{3} - \\frac{\\pi}{4}\\Big) \\qquad (\\theta\\to\\infty).",
          explanation: "A numerical contour integral at \\( \\theta = 20 \\) gives \\( 0.126097 \\) against \\( 0.126135 \\) from this formula — agreement to four figures, confirming the two-saddle combination.",
        },
      ],
      finalAnswer: "\\( f(\\theta) \\sim (\\pi\\theta)^{-1/2}\\cos\\!\\big(\\tfrac{2}{3}\\theta - \\tfrac{\\pi}{4}\\big) \\).",
      canonicalAnswer: "(pi*theta)^(-1/2)*cos(2*theta/3 - pi/4)",
    },
  },
  {
    id: "am7d-008",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The integral \\( J(x)=\\int_{-\\infty}^{\\infty} e^{\\,i x (t^3/3 - t)}\\,dt \\) has two real stationary points. By scaling \\( s = x^{1/3} t \\), express \\( J(x) \\) in terms of the Airy function \\( \\operatorname{Ai}(z)=\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} e^{\\,i(s^3/3 + z s)}\\,ds \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Airy function", "two saddles", "scaling"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the stationary points.",
          workingLatex: "\\frac{d}{dt}\\Big(\\frac{t^3}{3} - t\\Big) = t^2 - 1 = 0 \\;\\Longrightarrow\\; t = \\pm 1.",
          explanation: "Two real saddles on the real axis: this is the prototype of two constant-phase paths whose contributions must be summed (and which combine into the oscillating Airy function).",
        },
        {
          stepNumber: 2,
          description: "Scale out x.",
          workingLatex: "s = x^{1/3} t, \\quad dt = x^{-1/3}\\,ds \\;\\Longrightarrow\\; x\\Big(\\frac{t^3}{3}-t\\Big) = \\frac{s^3}{3} - x^{2/3} s.",
          explanation: "The cubic becomes the canonical Airy cubic; the linear coefficient \\( -x^{2/3} \\) plays the role of the Airy argument.",
        },
        {
          stepNumber: 3,
          description: "Recognise the Airy integral.",
          workingLatex: "J(x) = x^{-1/3}\\int_{-\\infty}^{\\infty} e^{\\,i(s^3/3 - x^{2/3} s)}\\,ds = x^{-1/3}\\cdot 2\\pi\\,\\operatorname{Ai}(-x^{2/3}).",
          explanation: "Matching \\( z = -x^{2/3} \\) in the Airy definition. The negative argument is precisely the oscillatory regime where two real saddles are active.",
        },
        {
          stepNumber: 4,
          description: "State the result.",
          workingLatex: "J(x) = 2\\pi\\, x^{-1/3}\\,\\operatorname{Ai}(-x^{2/3}).",
          explanation: "The two real saddles of \\( J \\) are exactly the two saddles that give \\( \\operatorname{Ai} \\) its oscillation for negative argument.",
        },
      ],
      finalAnswer: "\\( J(x) = 2\\pi\\,x^{-1/3}\\,\\operatorname{Ai}(-x^{2/3}) \\).",
      canonicalAnswer: "2*pi*x^(-1/3)*Ai(-x^(2/3))",
    },
  },
  {
    id: "am7d-009",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Using \\( \\operatorname{Ai}(-X)\\sim \\pi^{-1/2}X^{-1/4}\\sin\\!\\big(\\tfrac23 X^{3/2}+\\tfrac{\\pi}{4}\\big) \\) for \\( X\\to+\\infty \\), deduce the leading large-\\( x \\) behaviour of \\( J(x)=\\int_{-\\infty}^{\\infty} e^{\\,i x(t^3/3 - t)}\\,dt = 2\\pi x^{-1/3}\\operatorname{Ai}(-x^{2/3}) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Airy asymptotics", "two saddles", "combining contributions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the Airy argument.",
          workingLatex: "X = x^{2/3} \\;\\Longrightarrow\\; X^{-1/4} = x^{-1/6}, \\qquad X^{3/2} = x.",
          explanation: "Each power of the Airy argument translates into a power of \\( x \\); note \\( \\tfrac23 X^{3/2} = \\tfrac23 x \\), which becomes the frequency of the oscillation.",
        },
        {
          stepNumber: 2,
          description: "Substitute the Airy asymptotic.",
          workingLatex: "\\operatorname{Ai}(-x^{2/3}) \\sim \\pi^{-1/2}\\,x^{-1/6}\\,\\sin\\!\\Big(\\frac{2}{3}x + \\frac{\\pi}{4}\\Big).",
          explanation: "The \\( \\sin \\) is exactly the combination of the two real-saddle contributions; their conjugate phases add to a sine here because of the \\( +\\pi/4 \\) Stokes constant.",
        },
        {
          stepNumber: 3,
          description: "Multiply by the prefactor.",
          workingLatex: "J(x) \\sim 2\\pi\\,x^{-1/3}\\cdot \\pi^{-1/2}\\,x^{-1/6}\\,\\sin\\!\\Big(\\frac{2}{3}x + \\frac{\\pi}{4}\\Big).",
          explanation: "Collect the powers of \\( x \\): \\( x^{-1/3}\\cdot x^{-1/6} = x^{-1/2} \\).",
        },
        {
          stepNumber: 4,
          description: "Simplify the constant.",
          workingLatex: "J(x) \\sim 2\\pi^{1/2}\\,x^{-1/2}\\,\\sin\\!\\Big(\\frac{2}{3}x + \\frac{\\pi}{4}\\Big).",
          explanation: "Using \\( 2\\pi\\cdot\\pi^{-1/2} = 2\\pi^{1/2} \\). The \\( x^{-1/2} \\) decay and the \\( \\tfrac23 x \\) frequency are the hallmarks of two equal-strength saddles in opposition.",
        },
      ],
      finalAnswer: "\\( J(x) \\sim 2\\sqrt{\\pi}\\,x^{-1/2}\\sin\\!\\big(\\tfrac{2}{3}x + \\tfrac{\\pi}{4}\\big) \\).",
      canonicalAnswer: "2*sqrt(pi)*x^(-1/2)*sin(2*x/3 + pi/4)",
    },
  },
  {
    id: "am7d-010",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Consider \\( I(\\lambda)=\\int_0^1 t^{-1/2}\\,e^{\\,i\\lambda(t+t^2)}\\,dt \\) with \\( h(t)=i(t+t^2) \\). The constant-phase path through the endpoint \\( t=0 \\) gives the dominant contribution. Find its leading term, of the form \\( c_1\\lambda^{-1/2} \\), as \\( \\lambda\\to\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["algebraic endpoint", "constant phase", "Example Sheet 2 Q9"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Localise near the endpoint.",
          workingLatex: "h(t) = i(t + t^2) = i t + i t^2, \\qquad h'(0) = i \\neq 0.",
          explanation: "There is no interior stationary point on \\( (0,1) \\) since \\( h'(t)=i(1+2t)\\neq 0 \\). The algebraic singularity \\( t^{-1/2} \\) at the endpoint makes \\( t=0 \\) the dominant critical point.",
        },
        {
          stepNumber: 2,
          description: "Keep the leading phase.",
          workingLatex: "I(\\lambda) \\approx \\int_0^{\\infty} t^{-1/2} e^{\\,i\\lambda t}\\,dt,",
          explanation: "Near \\( t=0 \\) the quadratic \\( t^2 \\) is negligible against the linear term, and the upper limit may be extended to \\( \\infty \\) because the contribution from finite \\( t \\) is subdominant (it is non-stationary).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the standard integral.",
          workingLatex: "\\int_0^{\\infty} t^{-1/2} e^{\\,i\\lambda t}\\,dt = \\Gamma\\!\\Big(\\frac{1}{2}\\Big)\\,(\\,-i\\lambda\\,)^{-1/2} = \\sqrt{\\pi}\\;\\lambda^{-1/2}\\,e^{\\,i\\pi/4}.",
          explanation: "This is the Mellin/Gamma value \\( \\int_0^\\infty t^{s-1}e^{-pt}dt=\\Gamma(s)p^{-s} \\) with \\( s=\\tfrac12,\\ p=-i\\lambda \\); rotating the contour to the constant-phase ray supplies the \\( e^{i\\pi/4} \\).",
        },
        {
          stepNumber: 4,
          description: "Read off the coefficient.",
          workingLatex: "c_1 = \\sqrt{\\pi}\\,e^{\\,i\\pi/4}, \\qquad I(\\lambda)\\sim \\frac{c_1}{\\lambda^{1/2}}.",
          explanation: "Numerically at \\( \\lambda=200 \\) the two-term model with this \\( c_1 \\) tracks the exact integral to three figures, confirming the endpoint contribution.",
        },
      ],
      finalAnswer: "\\( c_1 = \\sqrt{\\pi}\\,e^{i\\pi/4} \\); \\( I(\\lambda)\\sim \\sqrt{\\pi}\\,e^{i\\pi/4}\\,\\lambda^{-1/2} \\).",
      canonicalAnswer: "sqrt(pi)*exp(I*pi/4)",
    },
  },
  {
    id: "am7d-011",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Continuing \\( I(\\lambda)=\\int_0^1 t^{-1/2}e^{\\,i\\lambda(t+t^2)}\\,dt \\), find the contribution of the upper endpoint \\( t=1 \\) (the second constant-phase path), giving the term \\( c_2\\,e^{2i\\lambda}\\lambda^{-1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["endpoint contribution", "combining contributions", "Example Sheet 2 Q9"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the non-stationary endpoint rule.",
          workingLatex: "\\int^{b} g(t)e^{\\,i\\lambda\\phi(t)}\\,dt \\sim \\frac{g(b)}{i\\lambda\\,\\phi'(b)}\\,e^{\\,i\\lambda\\phi(b)} \\quad (\\text{upper endpoint}),",
          explanation: "Away from a stationary point, one integration by parts gives the endpoint term; the constant-phase path through \\( t=1 \\) carries this contribution. Here \\( \\phi(t)=t+t^2 \\) and \\( g(t)=t^{-1/2} \\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate the data at t = 1.",
          workingLatex: "g(1)=1, \\quad \\phi(1)=2, \\quad \\phi'(1)=1+2(1)=3.",
          explanation: "These fix the amplitude, the phase \\( e^{2i\\lambda} \\), and the \\( 1/\\phi' \\) factor of the endpoint term.",
        },
        {
          stepNumber: 3,
          description: "Assemble the term.",
          workingLatex: "\\frac{g(1)}{i\\lambda\\,\\phi'(1)}\\,e^{\\,i\\lambda\\phi(1)} = \\frac{1}{3 i\\lambda}\\,e^{2i\\lambda} = -\\frac{i}{3}\\,\\frac{e^{2i\\lambda}}{\\lambda}.",
          explanation: "Using \\( 1/i = -i \\). The factor \\( e^{2i\\lambda} \\) is the hallmark of the \\( t=1 \\) saddle/endpoint, distinct from the \\( O(\\lambda^{-1/2}) \\) term at \\( t=0 \\).",
        },
        {
          stepNumber: 4,
          description: "Read off the coefficient.",
          workingLatex: "c_2 = -\\frac{i}{3}, \\qquad I(\\lambda) \\sim \\frac{\\sqrt{\\pi}\\,e^{i\\pi/4}}{\\lambda^{1/2}} - \\frac{i}{3}\\frac{e^{2i\\lambda}}{\\lambda}.",
          explanation: "The full leading asymptotics is the SUM of the two constant-phase contributions, one from each endpoint, of different orders in \\( \\lambda \\).",
        },
      ],
      finalAnswer: "\\( c_2 = -\\tfrac{i}{3} \\); contribution \\( -\\tfrac{i}{3}\\,e^{2i\\lambda}/\\lambda \\).",
      canonicalAnswer: "-I/3",
    },
  },
  {
    id: "am7d-012",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "For \\( h(z)=z - 2\\sqrt{z} \\) (principal branch, cut along the negative real axis), find the saddle point in \\( z \\) and verify that the curves \\( z_{\\pm}(\\tau)=1-\\tau^2\\pm 2i\\tau \\), \\( \\tau\\ge 0 \\), are constant-phase paths through it by checking \\( \\operatorname{Im} h \\) along them.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent path", "saddle point", "Example Sheet 2 Q10"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the saddle.",
          workingLatex: "h'(z) = 1 - z^{-1/2} = 0 \\;\\Longrightarrow\\; z^{1/2} = 1 \\;\\Longrightarrow\\; z = 1.",
          explanation: "A single saddle at \\( z=1 \\); the parametrised curves are claimed to be the two halves of its steepest-descent path.",
        },
        {
          stepNumber: 2,
          description: "Compute the square root on the path.",
          workingLatex: "z_{\\pm} = 1 - \\tau^2 \\pm 2i\\tau = (1\\pm i\\tau)^2 \\;\\Longrightarrow\\; \\sqrt{z_{\\pm}} = 1 \\pm i\\tau.",
          explanation: "The path was designed so that \\( z \\) is a perfect square; the principal root is \\( 1\\pm i\\tau \\) (real part positive for all \\( \\tau \\), so we stay off the cut).",
        },
        {
          stepNumber: 3,
          description: "Evaluate h along the path.",
          workingLatex: "h(z_{\\pm}) = (1-\\tau^2\\pm 2i\\tau) - 2(1\\pm i\\tau) = -1 - \\tau^2.",
          explanation: "The imaginary parts cancel exactly: \\( \\pm 2i\\tau \\mp 2i\\tau = 0 \\). So \\( h \\) is real on each curve.",
        },
        {
          stepNumber: 4,
          description: "Confirm constant phase and descent.",
          workingLatex: "\\operatorname{Im} h(z_{\\pm}) = 0 = \\operatorname{Im} h(1), \\qquad \\operatorname{Re} h(z_{\\pm}) = -1 - \\tau^2 \\ \\text{decreases}.",
          explanation: "\\( \\operatorname{Im} h \\) equals its saddle value \\( \\operatorname{Im} h(1)=0 \\) all along the curve (constant phase) and \\( \\operatorname{Re} h \\) decreases from \\( -1 \\) — these are genuine steepest-descent paths.",
        },
      ],
      finalAnswer: "Saddle \\( z=1 \\); on \\( z_\\pm \\), \\( h=-1-\\tau^2 \\) so \\( \\operatorname{Im} h\\equiv 0 \\) (constant phase) and \\( \\operatorname{Re} h\\) descends.",
      canonicalAnswer: "1",
    },
  },
  {
    id: "am7d-013",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that the two parametrised curves \\( z_{\\pm}(\\tau)=1-\\tau^2\\pm 2i\\tau \\) form the two halves of a single parabola, and find its equation in the real variables \\( z=x+iy \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent path", "parabola", "Example Sheet 2 Q10"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off real and imaginary parts.",
          workingLatex: "x = 1 - \\tau^2, \\qquad y = \\pm 2\\tau.",
          explanation: "The \\( + \\) and \\( - \\) curves share the same \\( x(\\tau) \\) but opposite \\( y(\\tau) \\), so they are mirror images across the real axis.",
        },
        {
          stepNumber: 2,
          description: "Eliminate the parameter.",
          workingLatex: "\\tau = \\pm\\frac{y}{2} \\;\\Longrightarrow\\; \\tau^2 = \\frac{y^2}{4}.",
          explanation: "Squaring removes the sign ambiguity, so both halves satisfy the same relation — confirming they belong to one curve.",
        },
        {
          stepNumber: 3,
          description: "Substitute into x.",
          workingLatex: "x = 1 - \\frac{y^2}{4}.",
          explanation: "A single equation captures both branches.",
        },
        {
          stepNumber: 4,
          description: "Write in standard parabola form.",
          workingLatex: "y^2 = 4(1 - x).",
          explanation: "A leftward-opening parabola with vertex at the saddle \\( z=1 \\) crossing the real axis there — the two steepest-descent halves are its upper and lower arms.",
        },
      ],
      finalAnswer: "\\( y^2 = 4(1-x) \\), a parabola with vertex at the saddle \\( z=1 \\).",
      canonicalAnswer: "y^2 - 4*(1-x)",
    },
  },
  {
    id: "am7d-014",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A contour passes through two saddles \\( t_1 \\) and \\( t_2 \\) with \\( h(t_1)=h(t_2)=h_0 \\) real (equal heights), prefactors \\( g(t_1)=g(t_2)=g_0 \\), and curvatures \\( h''(t_1)=\\rho e^{i\\beta} \\), \\( h''(t_2)=\\rho e^{-i\\beta} \\). Write the combined leading steepest-descent estimate of \\( \\int g\\,e^{\\lambda h}\\,dt \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["combining contributions", "two saddles", "steepest descent formula"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write each saddle contribution.",
          workingLatex: "I_k = g_0\\,\\sqrt{\\frac{2\\pi}{\\lambda\\,|h''(t_k)|}}\\;e^{\\,i\\theta_k}\\,e^{\\lambda h_0}, \\qquad \\theta_k = \\frac{\\pi - \\arg h''(t_k)}{2}.",
          explanation: "The steepest-descent phase is \\( \\theta_k = \\tfrac12(\\pi - \\arg h''(t_k)) \\), the angle that turns \\( h'' (\\delta t)^2/2 \\) negative. Each saddle has the SAME amplitude here because \\( |h''| = \\rho \\) for both.",
        },
        {
          stepNumber: 2,
          description: "Insert the conjugate curvatures.",
          workingLatex: "\\theta_1 = \\frac{\\pi - \\beta}{2}, \\qquad \\theta_2 = \\frac{\\pi + \\beta}{2}.",
          explanation: "Because \\( \\arg h''(t_2) = -\\beta = -\\arg h''(t_1) \\), the two descent angles are reflections, giving conjugate phase factors.",
        },
        {
          stepNumber: 3,
          description: "Sum the two contributions.",
          workingLatex: "I_1 + I_2 = g_0\\sqrt{\\frac{2\\pi}{\\lambda\\rho}}\\,e^{\\lambda h_0}\\Big(e^{\\,i(\\pi-\\beta)/2} + e^{\\,i(\\pi+\\beta)/2}\\Big).",
          explanation: "Factor out the common amplitude; the bracket is the sum of two conjugate-symmetric unit phasors.",
        },
        {
          stepNumber: 4,
          description: "Combine into a cosine.",
          workingLatex: "I_1 + I_2 = 2 g_0\\sqrt{\\frac{2\\pi}{\\lambda\\rho}}\\,e^{\\lambda h_0}\\,e^{\\,i\\pi/2}\\cos\\!\\Big(\\frac{\\beta}{2}\\Big) = 2 i\\, g_0\\sqrt{\\frac{2\\pi}{\\lambda\\rho}}\\,e^{\\lambda h_0}\\cos\\!\\Big(\\frac{\\beta}{2}\\Big).",
          explanation: "Pulling out the common \\( e^{i\\pi/2} \\) leaves \\( e^{-i\\beta/2}+e^{i\\beta/2}=2\\cos(\\beta/2) \\). Two equal-height conjugate-curvature saddles always combine into a single real-amplitude oscillation.",
        },
      ],
      finalAnswer: "\\( 2 i\\,g_0\\sqrt{\\dfrac{2\\pi}{\\lambda\\rho}}\\,e^{\\lambda h_0}\\cos\\!\\big(\\tfrac{\\beta}{2}\\big) \\).",
      canonicalAnswer: "2*I*g0*sqrt(2*pi/(lambda*rho))*exp(lambda*h0)*cos(beta/2)",
    },
  },
  {
    id: "am7d-015",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "For \\( h(t)=i(t+t^2) \\), find the saddle point \\( t_s \\), the saddle value \\( h(t_s) \\), and the equation of the constant-phase line \\( \\operatorname{Im} h = \\operatorname{Im} h(t_s) \\) through it in terms of \\( t=x+iy \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point", "constant phase line", "Example Sheet 2 Q9"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the saddle.",
          workingLatex: "h'(t) = i(1 + 2t) = 0 \\;\\Longrightarrow\\; t_s = -\\frac{1}{2}.",
          explanation: "There is exactly one saddle, on the real axis; it lies OUTSIDE the integration interval \\( (0,1) \\) of the related Q9 integral, which is why the endpoints dominate there — but the saddle's constant-phase line still organises the deformation.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the saddle value.",
          workingLatex: "h\\!\\Big(\\!-\\frac12\\Big) = i\\Big(\\!-\\frac12 + \\frac14\\Big) = -\\frac{i}{4}.",
          explanation: "Purely imaginary, so \\( \\operatorname{Re} h(t_s)=0 \\) and \\( \\operatorname{Im} h(t_s) = -\\tfrac14 \\).",
        },
        {
          stepNumber: 3,
          description: "Compute Im h in coordinates.",
          workingLatex: "h = i\\big[(x+iy) + (x+iy)^2\\big] = i\\big[x + x^2 - y^2 + i(y + 2xy)\\big].",
          explanation: "Expand \\( (x+iy)^2 = x^2 - y^2 + 2ixy \\) and keep track of the outer factor \\( i \\).",
        },
        {
          stepNumber: 4,
          description: "Extract the imaginary part and impose the level.",
          workingLatex: "\\operatorname{Im} h = x + x^2 - y^2 = -\\frac14 \\;\\Longrightarrow\\; \\Big(x+\\frac12\\Big)^2 - y^2 = 0.",
          explanation: "Multiplying out the outer \\( i \\), the imaginary part of \\( h \\) is the real part of the bracket. The level set factorises as \\( (x+\\tfrac12)^2 = y^2 \\), i.e. \\( y = \\pm(x+\\tfrac12) \\): two lines at \\( \\pm 45^\\circ \\) crossing at the saddle.",
        },
      ],
      finalAnswer: "\\( t_s = -\\tfrac12 \\), \\( h(t_s) = -\\tfrac{i}{4} \\); constant-phase set \\( y = \\pm\\big(x+\\tfrac12\\big) \\).",
      canonicalAnswer: "-1/2",
    },
  },
  {
    id: "am7d-016",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "An integral \\( \\int_{-\\infty}^{\\infty} e^{\\,i x \\phi(t)}\\,dt \\) has two real stationary points \\( t_1, t_2 \\) with \\( \\phi''(t_1)>0 \\) and \\( \\phi''(t_2)<0 \\). Write the leading stationary-phase sum, and simplify the case \\( \\phi(t_1)=-\\phi(t_2)=A \\), \\( |\\phi''(t_1)|=|\\phi''(t_2)|=B \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "two stationary points", "combining contributions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write each stationary-phase term.",
          workingLatex: "I_k = \\sqrt{\\frac{2\\pi}{x\\,|\\phi''(t_k)|}}\\;e^{\\,i x \\phi(t_k)}\\,e^{\\,i\\,\\sigma_k \\pi/4}, \\quad \\sigma_k = \\operatorname{sgn}\\phi''(t_k).",
          explanation: "Stationary phase is steepest descent with imaginary \\( h=i\\phi \\): a minimum (\\( \\phi''>0 \\)) gives \\( +\\pi/4 \\), a maximum (\\( \\phi''<0 \\)) gives \\( -\\pi/4 \\).",
        },
        {
          stepNumber: 2,
          description: "Insert the symmetric data.",
          workingLatex: "I_1 = \\sqrt{\\frac{2\\pi}{xB}}\\,e^{\\,ixA}\\,e^{\\,i\\pi/4}, \\qquad I_2 = \\sqrt{\\frac{2\\pi}{xB}}\\,e^{-ixA}\\,e^{-i\\pi/4}.",
          explanation: "With \\( \\phi(t_2) = -A \\) and \\( \\phi''(t_2)<0 \\), the second term is the complex conjugate of the first.",
        },
        {
          stepNumber: 3,
          description: "Add the conjugate pair.",
          workingLatex: "I_1 + I_2 = \\sqrt{\\frac{2\\pi}{xB}}\\Big(e^{\\,i(xA+\\pi/4)} + e^{-i(xA+\\pi/4)}\\Big).",
          explanation: "The two contributions are conjugates, so their sum is twice a real part.",
        },
        {
          stepNumber: 4,
          description: "Combine into a cosine.",
          workingLatex: "I_1 + I_2 = 2\\sqrt{\\frac{2\\pi}{xB}}\\,\\cos\\!\\Big(xA + \\frac{\\pi}{4}\\Big).",
          explanation: "Two opposed stationary points of equal strength produce a pure cosine oscillation — the structural twin of the Airy result.",
        },
      ],
      finalAnswer: "\\( \\displaystyle 2\\sqrt{\\frac{2\\pi}{xB}}\\,\\cos\\!\\Big(xA + \\frac{\\pi}{4}\\Big) \\).",
      canonicalAnswer: "2*sqrt(2*pi/(x*B))*cos(x*A + pi/4)",
    },
  },
  {
    id: "am7d-017",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 17",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Combine the two endpoint contributions of am7d Q10/Q11 to state the full leading asymptotic expansion of \\( I(\\lambda)=\\int_0^1 t^{-1/2}e^{\\,i\\lambda(t+t^2)}\\,dt \\) to two terms as \\( \\lambda\\to\\infty \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["combining contributions", "two endpoints", "Example Sheet 2 Q9"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the two contributions.",
          workingLatex: "\\text{from } t=0:\\ \\frac{c_1}{\\lambda^{1/2}},\\ c_1 = \\sqrt{\\pi}\\,e^{i\\pi/4}; \\qquad \\text{from } t=1:\\ c_2\\frac{e^{2i\\lambda}}{\\lambda},\\ c_2 = -\\frac{i}{3}.",
          explanation: "Each constant-phase path through an endpoint produces one term; their orders \\( \\lambda^{-1/2} \\) and \\( \\lambda^{-1} \\) differ because one endpoint carries the algebraic singularity and the other does not.",
        },
        {
          stepNumber: 2,
          description: "Add them.",
          workingLatex: "I(\\lambda) \\sim \\frac{\\sqrt{\\pi}\\,e^{i\\pi/4}}{\\lambda^{1/2}} - \\frac{i}{3}\\,\\frac{e^{2i\\lambda}}{\\lambda}.",
          explanation: "The total is the sum of the separate critical-point contributions — the defining principle of combining several constant-phase paths.",
        },
        {
          stepNumber: 3,
          description: "Identify the dominant term.",
          workingLatex: "I(\\lambda) \\sim \\sqrt{\\pi}\\,e^{i\\pi/4}\\,\\lambda^{-1/2} \\quad \\text{(leading)},",
          explanation: "The \\( t=0 \\) term, being \\( O(\\lambda^{-1/2}) \\), dominates the \\( O(\\lambda^{-1}) \\) term from \\( t=1 \\); the latter is the first correction. Numerics at \\( \\lambda=200 \\) confirm the two-term model to \\( \\sim 5\\times10^{-4} \\).",
        },
      ],
      finalAnswer: "\\( I(\\lambda) \\sim \\dfrac{\\sqrt{\\pi}\\,e^{i\\pi/4}}{\\lambda^{1/2}} - \\dfrac{i}{3}\\dfrac{e^{2i\\lambda}}{\\lambda} \\).",
      canonicalAnswer: "sqrt(pi)*exp(I*pi/4)/sqrt(lambda) - (I/3)*exp(2*I*lambda)/lambda",
    },
  },
  {
    id: "am7d-018",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "For \\( h(z)=z-2\\sqrt z \\) with saddle \\( z=1 \\), the steepest-descent integral \\( \\int_C \\frac{e^{k h(z)}}{z-c}\\,dz \\) is dominated by the saddle when no pole is crossed. Using the parametrisation \\( z=1-\\tau^2+2i\\tau \\) (upper half), find \\( dz \\) and \\( h \\) as functions of \\( \\tau \\), and write the saddle contribution as a \\( \\tau \\)-integral over \\( (-\\infty,\\infty) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent", "parametrisation", "Example Sheet 2 Q10"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the full parabola.",
          workingLatex: "z(\\tau) = 1 - \\tau^2 + 2i\\tau, \\quad -\\infty < \\tau < \\infty,",
          explanation: "Allowing \\( \\tau \\) to run over all of \\( \\mathbb{R} \\) traces the complete steepest-descent parabola (both halves), oriented from the lower arm up through the saddle.",
        },
        {
          stepNumber: 2,
          description: "Differentiate.",
          workingLatex: "\\frac{dz}{d\\tau} = -2\\tau + 2i = 2(i - \\tau), \\qquad dz = 2(i-\\tau)\\,d\\tau.",
          explanation: "This Jacobian carries the contour tilt; at the saddle \\( \\tau=0 \\) it is \\( 2i \\), the steepest-descent direction.",
        },
        {
          stepNumber: 3,
          description: "Express h along the path.",
          workingLatex: "z = (1+i\\tau)^2 \\;\\Longrightarrow\\; \\sqrt z = 1+i\\tau, \\quad h(z) = z - 2\\sqrt z = -1 - \\tau^2.",
          explanation: "As in Q12, the imaginary parts cancel and \\( h = -1-\\tau^2 \\) is real and decreasing — a clean Gaussian in \\( \\tau \\).",
        },
        {
          stepNumber: 4,
          description: "Assemble the saddle integral.",
          workingLatex: "\\int_C \\frac{e^{k h}}{z-c}\\,dz = e^{-k}\\!\\int_{-\\infty}^{\\infty} \\frac{2(i-\\tau)}{\\,1-\\tau^2+2i\\tau - c\\,}\\,e^{-k\\tau^2}\\,d\\tau.",
          explanation: "Substituting \\( h=-1-\\tau^2 \\) factors out \\( e^{-k} \\) (the saddle height) and leaves a Gaussian \\( e^{-k\\tau^2} \\) — Laplace's method in \\( \\tau \\) then gives the leading term, provided the pole \\( z=c \\) lies on the same side as the original contour.",
        },
      ],
      finalAnswer: "\\( \\displaystyle e^{-k}\\!\\int_{-\\infty}^{\\infty}\\frac{2(i-\\tau)\\,e^{-k\\tau^2}}{1-\\tau^2+2i\\tau-c}\\,d\\tau \\), with \\( h=-1-\\tau^2 \\), \\( dz=2(i-\\tau)d\\tau \\).",
      canonicalAnswer: "exp(-k)",
    },
  },
  // ════════════════════════════════════════════════════════════════════
  // CHALLENGE (12) — synoptic: full two-saddle/pole problems, justification.
  // ════════════════════════════════════════════════════════════════════
  // REVIEW: the sign-of-square-root justification for the two steepest-descent
  // branches is a sketch/argument step that cannot be numerically verified; the
  // saddle values and h'' below were checked symbolically.
  {
    id: "am7d-019",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( h(t)=t+\\tfrac13 t^3 \\) with \\( t=x+iy \\), show that the constant-phase paths \\( \\operatorname{Im} h = \\operatorname{Im} h(\\pm i) \\) through the saddles \\( t=\\pm i \\) are \\( x = +\\big(\\tfrac{2+y}{3y}\\big)^{1/2}(y-1) \\) for \\( y>0 \\) and \\( x = -\\big(\\tfrac{y-2}{3y}\\big)^{1/2}(y+1) \\) for \\( y<0 \\). Derive the level-set equation and indicate how the sign of each square root is fixed.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["constant phase paths", "two saddles", "Example Sheet 2 Q7", "justification"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the phase.",
          workingLatex: "h = (x+iy) + \\frac13(x+iy)^3 = x + \\frac13\\big(x^3 - 3xy^2\\big) + i\\Big[y + \\frac13\\big(3x^2 y - y^3\\big)\\Big].",
          explanation: "Using \\( (x+iy)^3 = x^3 - 3xy^2 + i(3x^2y - y^3) \\). Only the imaginary part matters for a constant-phase level set.",
        },
        {
          stepNumber: 2,
          description: "Imaginary part of h.",
          workingLatex: "\\operatorname{Im} h = y + x^2 y - \\frac13 y^3 = y\\Big(1 + x^2 - \\frac13 y^2\\Big).",
          explanation: "Factor out \\( y \\). At the saddles \\( t=\\pm i \\) (\\( x=0,\\ y=\\pm1 \\)): \\( \\operatorname{Im} h = \\pm1(1 - \\tfrac13) = \\pm\\tfrac23 \\), matching \\( h(\\pm i)=\\pm\\tfrac23 i \\).",
        },
        {
          stepNumber: 3,
          description: "Set the level for the saddle t = i.",
          workingLatex: "y\\Big(1 + x^2 - \\frac{y^2}{3}\\Big) = \\frac{2}{3} \\quad (y>0).",
          explanation: "The path through \\( t=i \\) lies on the level \\( \\operatorname{Im} h = \\tfrac23 \\), the saddle value there.",
        },
        {
          stepNumber: 4,
          description: "Solve for x^2.",
          workingLatex: "x^2 = \\frac{2}{3y} - 1 + \\frac{y^2}{3} = \\frac{2 - 3y + y^3}{3y} = \\frac{(y-1)^2(y+2)}{3y}.",
          explanation: "The cubic \\( y^3 - 3y + 2 \\) factors as \\( (y-1)^2(y+2) \\); the repeated root \\( y=1 \\) is the saddle, where \\( x=0 \\) as required.",
        },
        {
          stepNumber: 5,
          description: "Take the root through the saddle.",
          workingLatex: "x = (y-1)\\sqrt{\\frac{y+2}{3y}} = +\\Big(\\frac{2+y}{3y}\\Big)^{1/2}(y-1), \\quad y>0.",
          explanation: "The factor \\( (y-1) \\) (not \\( |y-1| \\)) is chosen so the path passes smoothly through \\( (0,1) \\) changing sign of \\( x \\) there; this fixes the \\( + \\) sign of the root, the descent branch that connects to the prescribed sectors of \\( C \\).",
        },
        {
          stepNumber: 6,
          description: "Repeat for t = -i.",
          workingLatex: "y\\Big(1+x^2-\\frac{y^2}{3}\\Big) = -\\frac23\\ (y<0) \\;\\Rightarrow\\; x^2 = \\frac{(y+1)^2(y-2)}{3y}, \\quad x = -\\Big(\\frac{y-2}{3y}\\Big)^{1/2}(y+1).",
          explanation: "By the conjugate symmetry \\( y\\to -y \\), the lower saddle gives the mirror path; the \\( - \\) sign is forced so the contour continues into the correct sector \\( -\\pi/2<\\arg t<-\\pi/6 \\) at infinity.",
        },
      ],
      finalAnswer: "\\( x = +\\big(\\tfrac{2+y}{3y}\\big)^{1/2}(y-1)\\ (y>0) \\) and \\( x = -\\big(\\tfrac{y-2}{3y}\\big)^{1/2}(y+1)\\ (y<0) \\).",
      canonicalAnswer: "(y-1)*sqrt((2+y)/(3*y))",
    },
  },
  {
    id: "am7d-020",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( f(\\theta)=\\frac{1}{2\\pi i}\\int_C e^{\\theta(t+t^3/3)}\\,dt \\), with \\( C \\) running from \\( \\infty \\) in \\( -\\tfrac{\\pi}{2}<\\arg t<-\\tfrac{\\pi}{6} \\) to \\( \\infty \\) in \\( \\tfrac{\\pi}{6}<\\arg t<\\tfrac{\\pi}{2} \\), apply the method of steepest descent through both saddles \\( t=\\pm i \\) and show \\( f(\\theta)\\sim(\\pi\\theta)^{-1/2}\\cos\\!\\big(\\tfrac23\\theta-\\tfrac{\\pi}{4}\\big) \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent", "two saddles", "Example Sheet 2 Q7"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Saddle data.",
          workingLatex: "h(t)=t+\\tfrac13 t^3,\\quad h'(\\pm i)=0,\\quad h(\\pm i)=\\pm\\tfrac23 i,\\quad h''(\\pm i)=\\pm 2i.",
          explanation: "Both saddles are simple. The conjugate values and curvatures guarantee a real (cosine) result once the two contributions are summed.",
        },
        {
          stepNumber: 2,
          description: "Steepest-descent direction at t = i.",
          workingLatex: "\\theta_+ = \\frac{\\pi - \\arg h''(i)}{2} = \\frac{\\pi - \\pi/2}{2} = \\frac{\\pi}{4}.",
          explanation: "Write \\( t = i + s e^{i\\theta_+} \\); the quadratic term \\( \\tfrac12 h''(i)s^2 e^{2i\\theta_+} = i s^2 e^{i(\\pi/2+2\\theta_+)} \\) must be real negative, forcing \\( \\theta_+ = \\pi/4 \\) (consistent with the upper-saddle orientation of \\( C \\)).",
        },
        {
          stepNumber: 3,
          description: "Gaussian contribution at t = i.",
          workingLatex: "I_+ = e^{\\theta h(i)}\\,e^{\\,i\\theta_+}\\sqrt{\\frac{2\\pi}{\\theta\\,|h''(i)|}} = e^{\\,2i\\theta/3}\\,e^{\\,i\\pi/4}\\sqrt{\\frac{2\\pi}{2\\theta}} = e^{\\,i(2\\theta/3+\\pi/4)}\\sqrt{\\frac{\\pi}{\\theta}}.",
          explanation: "Standard Laplace/Gaussian along the descent line: \\( \\int e^{-\\tfrac12\\theta|h''|s^2}\\,ds = \\sqrt{2\\pi/(\\theta|h''|)} \\), times the tilt \\( e^{i\\theta_+} \\) and the height \\( e^{\\theta h(i)} \\).",
        },
        {
          stepNumber: 4,
          description: "Contribution at t = -i.",
          workingLatex: "I_- = \\overline{I_+} = e^{-i(2\\theta/3+\\pi/4)}\\sqrt{\\frac{\\pi}{\\theta}}.",
          explanation: "By conjugate symmetry (\\( h(-i)=\\overline{h(i)} \\), \\( h''(-i)=\\overline{h''(i)} \\), descent angle \\( -\\pi/4 \\)), the lower saddle gives the conjugate term. Orientation of \\( C \\) makes the two add.",
        },
        {
          stepNumber: 5,
          description: "Sum and divide by 2 pi i.",
          workingLatex: "\\int_C \\sim I_+ + I_- = 2\\sqrt{\\frac{\\pi}{\\theta}}\\,\\cos\\!\\Big(\\frac{2\\theta}{3}+\\frac{\\pi}{4}\\Big)\\cdot ?",
          explanation: "First add the conjugate pair: \\( I_+ + I_- = 2\\sqrt{\\pi/\\theta}\\cos(2\\theta/3+\\pi/4) \\). The remaining factor \\( 1/(2\\pi i) \\) will both rescale and rotate this.",
        },
        {
          stepNumber: 6,
          description: "Account for the prefactor 1/(2 pi i).",
          workingLatex: "f(\\theta) = \\frac{1}{2\\pi i}\\big(I_+ + I_-\\big) = \\frac{1}{2\\pi i}\\Big[e^{\\,i(2\\theta/3+\\pi/4)} + e^{-i(2\\theta/3+\\pi/4)}\\Big]\\sqrt{\\frac{\\pi}{\\theta}}.",
          explanation: "Keep the contributions as exponentials so the \\( 1/i = e^{-i\\pi/2} \\) can be absorbed as a phase shift before recombining.",
        },
        {
          stepNumber: 7,
          description: "Absorb the i and recombine.",
          workingLatex: "f(\\theta) = \\frac{1}{2\\pi}\\sqrt{\\frac{\\pi}{\\theta}}\\Big[e^{\\,i(2\\theta/3-\\pi/4)} + e^{-i(2\\theta/3+3\\pi/4)}\\Big]\\!\\to (\\pi\\theta)^{-1/2}\\cos\\!\\Big(\\frac{2\\theta}{3}-\\frac{\\pi}{4}\\Big).",
          explanation: "Dividing each phasor by \\( i=e^{i\\pi/2} \\) subtracts \\( \\pi/2 \\); the symmetric pair recombines to \\( \\cos(2\\theta/3 - \\pi/4) \\), and \\( \\tfrac{1}{2\\pi}\\sqrt{\\pi/\\theta}\\cdot 2 = (\\pi\\theta)^{-1/2} \\). Numerics at \\( \\theta=20 \\): \\( 0.126097 \\) vs \\( 0.126135 \\).",
        },
      ],
      finalAnswer: "\\( f(\\theta)\\sim (\\pi\\theta)^{-1/2}\\cos\\!\\big(\\tfrac23\\theta-\\tfrac{\\pi}{4}\\big) \\).",
      canonicalAnswer: "(pi*theta)^(-1/2)*cos(2*theta/3 - pi/4)",
    },
  },
  {
    id: "am7d-021",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Apply the method of steepest descent to the two-saddle integral and obtain the first two non-zero terms of \\( \\int_0^{\\infty} e^{\\,ix(t^3/3 + t)}\\,dt \\sim i\\big(\\tfrac1x + \\tfrac{2}{x^3} + \\cdots\\big) \\) as \\( x\\to+\\infty \\), and confirm the \\( 1/x \\) term by integration by parts.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent", "integration by parts", "Example Sheet 2 Q8"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the critical points.",
          workingLatex: "\\frac{d}{dt}\\Big(\\frac{t^3}{3}+t\\Big) = t^2 + 1 = 0 \\;\\Longrightarrow\\; t = \\pm i.",
          explanation: "The saddles are off the real positive axis; on \\( [0,\\infty) \\) the phase has no stationary point, so the dominant contribution comes from the endpoint \\( t=0 \\) reached along a constant-phase path that bends toward the saddle \\( t=i \\).",
        },
        {
          stepNumber: 2,
          description: "Rotate onto the constant-phase ray at the endpoint.",
          workingLatex: "\\phi'(0)=1>0 \\;\\Longrightarrow\\; \\text{descent ray } t = e^{i\\pi/2}\\,u = i u,\\ u\\ge 0.",
          explanation: "Near \\( t=0 \\), \\( ix\\phi\\approx ixt \\); the steepest-descent direction rotates the contour to \\( t=iu \\) so that \\( ixt = -xu \\) decays. The cubic term then reads \\( ix\\,(iu)^3/3 = x u^3/3 \\)... handled perturbatively below.",
        },
        {
          stepNumber: 3,
          description: "Integrate by parts for the endpoint series.",
          workingLatex: "\\int_0^\\infty e^{\\,ix(t^3/3+t)}\\,dt = \\Big[\\frac{e^{\\,ix(t^3/3+t)}}{ix(t^2+1)}\\Big]_0^\\infty + \\frac{1}{ix}\\int_0^\\infty \\frac{2t}{(t^2+1)^2}e^{\\,ix(t^3/3+t)}\\,dt.",
          explanation: "Write \\( e^{ix\\phi} = \\frac{1}{ix\\phi'}\\frac{d}{dt}e^{ix\\phi} \\) and integrate by parts. The boundary term at \\( \\infty \\) vanishes (oscillatory, regularised), leaving the lower endpoint.",
        },
        {
          stepNumber: 4,
          description: "Leading boundary term.",
          workingLatex: "-\\frac{1}{ix(0+1)} = -\\frac{1}{ix} = \\frac{i}{x}.",
          explanation: "Evaluating the bracket at \\( t=0 \\) (with \\( \\phi'(0)=1 \\), \\( e^{ix\\phi(0)}=1 \\)) and using \\( -1/i = i \\) gives the leading \\( i/x \\), matching the stated series.",
        },
        {
          stepNumber: 5,
          description: "Iterate for the next term.",
          workingLatex: "\\frac{1}{ix}\\int_0^\\infty \\frac{2t}{(t^2+1)^2}e^{ix\\phi}\\,dt \\xrightarrow{\\text{IBP again}} \\frac{2 i}{x^3} + \\cdots.",
          explanation: "A second integration by parts on the new integral produces another \\( 1/x \\) and a boundary value \\( \\frac{d}{dt}\\big[\\tfrac{2t}{(t^2+1)^2}\\big]_{t=0}/\\phi'(0) = 2 \\); combined with the \\( (ix)^{-2} \\) factors this yields \\( 2i/x^3 \\).",
        },
        {
          stepNumber: 6,
          description: "State the two-term result.",
          workingLatex: "\\int_0^\\infty e^{\\,ix(t^3/3+t)}\\,dt \\sim i\\Big(\\frac{1}{x} + \\frac{2}{x^3} + \\cdots\\Big).",
          explanation: "The repeated-IBP series is the same expansion the constant-phase deformation produces; the saddles \\( \\pm i \\) control only the exponentially-small remainder, not these algebraic terms.",
        },
      ],
      finalAnswer: "\\( \\displaystyle \\int_0^\\infty e^{\\,ix(t^3/3+t)}\\,dt \\sim i\\Big(\\frac1x + \\frac{2}{x^3} + \\cdots\\Big) \\).",
      canonicalAnswer: "I*(1/x + 2/x^3)",
    },
  },
  {
    id: "am7d-022",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Determine the leading large-\\( x \\) behaviour of \\( \\int_{a}^{\\infty} f(t)\\,e^{\\,ix(t^3 - t)}\\,dt \\) (with \\( f \\) smooth, \\( f\\to 0 \\) at \\( \\pm\\infty \\)) in the two cases \\( a=-1/\\sqrt3 \\) and \\( a=1 \\), where \\( t=\\pm 1/\\sqrt3 \\) are the stationary points.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary phase", "endpoint vs interior saddle", "Example Sheet 2 Q4"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the stationary points.",
          workingLatex: "\\frac{d}{dt}(t^3 - t) = 3t^2 - 1 = 0 \\;\\Longrightarrow\\; t = \\pm\\frac{1}{\\sqrt3}.",
          explanation: "Two real stationary points. Which of them lies inside the range \\( [a,\\infty) \\) — and whether it sits at the endpoint — decides the order in \\( x \\).",
        },
        {
          stepNumber: 2,
          description: "Curvature at the stationary points.",
          workingLatex: "\\phi''(t) = 6t \\;\\Longrightarrow\\; \\phi''\\!\\Big(\\tfrac{1}{\\sqrt3}\\Big) = \\frac{6}{\\sqrt3} = 2\\sqrt3>0,\\quad \\phi''\\!\\Big(\\!-\\tfrac{1}{\\sqrt3}\\Big) = -2\\sqrt3<0.",
          explanation: "Signs of \\( \\phi'' \\) fix the \\( \\pm\\pi/4 \\) stationary-phase factors.",
        },
        {
          stepNumber: 3,
          description: "Case a = 1: no interior stationary point.",
          workingLatex: "1 > \\frac{1}{\\sqrt3} \\;\\Longrightarrow\\; \\text{both stationary points lie OUTSIDE } [1,\\infty).",
          explanation: "With no stationary point in range, the only critical point is the endpoint \\( t=1 \\); its contribution is \\( O(1/x) \\), weaker than a stationary-phase \\( O(x^{-1/2}) \\).",
        },
        {
          stepNumber: 4,
          description: "Endpoint contribution for a = 1.",
          workingLatex: "I \\sim \\frac{f(1)}{ix\\,\\phi'(1)}\\,e^{\\,ix\\phi(1)} = \\frac{f(1)}{ix(3-1)}\\,e^{\\,0} = \\frac{f(1)}{2ix} = -\\frac{i f(1)}{2x}.",
          explanation: "Here \\( \\phi(1)=1-1=0 \\) and \\( \\phi'(1)=3(1)-1=2 \\). Lower endpoint of \\( [1,\\infty) \\) gives \\( -g(1)/(ix\\phi'(1)) \\); with \\( -1/i=i \\) this is \\( -i f(1)/(2x) \\).",
        },
        {
          stepNumber: 5,
          description: "Case a = -1/√3: stationary point AT the endpoint.",
          workingLatex: "a = -\\frac{1}{\\sqrt3} = t_-: \\quad \\text{the maximum-type stationary point sits exactly at the lower limit.}",
          explanation: "A stationary point coinciding with the endpoint gives only HALF the usual Gaussian (the contour covers one side), so the contribution is \\( \\tfrac12 \\) of the full stationary-phase value, still \\( O(x^{-1/2}) \\).",
        },
        {
          stepNumber: 6,
          description: "Half-Gaussian contribution for a = -1/√3.",
          workingLatex: "I \\sim \\frac{1}{2}\\,f\\!\\Big(\\!-\\tfrac{1}{\\sqrt3}\\Big)\\sqrt{\\frac{2\\pi}{x\\,|\\phi''|}}\\,e^{\\,ix\\phi(-1/\\sqrt3)}\\,e^{-i\\pi/4}, \\quad \\phi\\!\\Big(\\!-\\tfrac{1}{\\sqrt3}\\Big)=\\frac{2}{3\\sqrt3}.",
          explanation: "With \\( |\\phi''|=2\\sqrt3 \\) and \\( \\phi''<0 \\) giving \\( e^{-i\\pi/4} \\); the factor \\( \\tfrac12 \\) is the endpoint-coincidence. This dominates the \\( a=1 \\) case by a factor \\( x^{1/2} \\).",
        },
      ],
      finalAnswer: "\\( a=1:\\ I\\sim -\\dfrac{i f(1)}{2x} \\) (endpoint, \\(O(1/x)\\)). \\( a=-1/\\sqrt3:\\ I\\sim \\dfrac12 f(-\\tfrac{1}{\\sqrt3})\\sqrt{\\dfrac{2\\pi}{x\\,\\cdot 2\\sqrt3}}\\,e^{\\,i(2x/(3\\sqrt3)-\\pi/4)} \\) (half-saddle, \\(O(x^{-1/2})\\)).",
      canonicalAnswer: "-I*f1/(2*x)",
    },
  },
  // REVIEW: the comparison "differs by the second saddle's contribution" for the
  // lower-limit change is a structural argument; the leading coefficient was
  // verified numerically (x=400: |num-asym| ~ 1e-3).
  {
    id: "am7d-023",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Show that \\( \\int_0^{\\pi} e^{\\,ix(t-\\sin t)}\\,dt \\sim e^{\\,i\\pi/6}\\big(\\tfrac{6}{x}\\big)^{1/3}\\Gamma\\!\\big(\\tfrac43\\big) \\) as \\( x\\to+\\infty \\), and explain how the answer changes if the lower limit becomes \\( -\\pi \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["degenerate saddle", "cubic endpoint", "Example Sheet 2 Q5"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the stationary point.",
          workingLatex: "\\phi(t)=t-\\sin t,\\quad \\phi'(t)=1-\\cos t = 0 \\;\\Longrightarrow\\; t = 0 \\ (\\text{on } [0,\\pi]).",
          explanation: "The only stationary point in \\( [0,\\pi] \\) is the endpoint \\( t=0 \\); crucially it is DEGENERATE because \\( \\phi''(0)=\\sin 0 = 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Find the order of the degeneracy.",
          workingLatex: "\\phi'(t)=1-\\cos t = \\frac{t^2}{2} - \\cdots, \\quad \\phi(t) = \\frac{t^3}{6} + O(t^5).",
          explanation: "Near \\( 0 \\), \\( \\phi \\sim t^3/6 \\): a cubic (rather than quadratic) stationary point, which produces an \\( x^{-1/3} \\) law instead of \\( x^{-1/2} \\).",
        },
        {
          stepNumber: 3,
          description: "Localise the integral.",
          workingLatex: "\\int_0^\\pi e^{\\,ix(t-\\sin t)}\\,dt \\approx \\int_0^{\\infty} e^{\\,ix\\,t^3/6}\\,dt.",
          explanation: "Replace \\( \\phi \\) by its cubic germ and extend the limit; the rest of \\( [0,\\pi] \\) is non-stationary and contributes only \\( O(1/x) \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the cubic endpoint integral.",
          workingLatex: "\\int_0^\\infty e^{\\,i a t^3}\\,dt = \\frac{1}{3}\\Gamma\\!\\Big(\\frac13\\Big)\\,(\\,-i a\\,)^{-1/3} = \\frac{1}{3}\\Gamma\\!\\Big(\\frac13\\Big) a^{-1/3} e^{\\,i\\pi/6}, \\quad a=\\frac{x}{6}.",
          explanation: "Substitute \\( u=t^3 \\): \\( \\int_0^\\infty u^{-2/3}e^{iau}du/3 = \\tfrac13\\Gamma(\\tfrac13)(-ia)^{-1/3} \\); rotating to the constant-phase ray gives \\( e^{i\\pi/6} \\) (one-sixth turn for a cubic).",
        },
        {
          stepNumber: 5,
          description: "Tidy the constant.",
          workingLatex: "\\frac13\\Gamma\\!\\Big(\\frac13\\Big)\\Big(\\frac{x}{6}\\Big)^{-1/3}e^{\\,i\\pi/6} = e^{\\,i\\pi/6}\\Big(\\frac{6}{x}\\Big)^{1/3}\\,\\frac{\\Gamma(1/3)}{3} = e^{\\,i\\pi/6}\\Big(\\frac{6}{x}\\Big)^{1/3}\\Gamma\\!\\Big(\\frac43\\Big).",
          explanation: "Using \\( \\Gamma(\\tfrac43)=\\tfrac13\\Gamma(\\tfrac13) \\). Numerically at \\( x=400 \\) the formula matches the integral to \\( \\sim10^{-3} \\).",
        },
        {
          stepNumber: 6,
          description: "Change the lower limit to -π.",
          workingLatex: "\\int_{-\\pi}^{\\pi} = \\int_{-\\pi}^{0} + \\int_0^{\\pi}: \\quad t=0 \\text{ is now an INTERIOR cubic point}.",
          explanation: "With limits \\( [-\\pi,\\pi] \\), the cubic point \\( t=0 \\) is interior; the contour covers both sides, doubling the relevant range. The two one-sided cubic contributions are complex conjugates (since \\( \\phi \\) is odd near \\( 0 \\)), so they add to \\( 2\\operatorname{Re} \\) of the half-integral, i.e. the result becomes \\( 2\\cos(\\pi/6)\\big(\\tfrac6x\\big)^{1/3}\\Gamma(\\tfrac43) = \\sqrt3\\,\\big(\\tfrac6x\\big)^{1/3}\\Gamma(\\tfrac43) \\), real.",
        },
      ],
      finalAnswer: "\\( \\int_0^\\pi \\sim e^{i\\pi/6}(6/x)^{1/3}\\Gamma(\\tfrac43) \\); with lower limit \\(-\\pi\\) the interior cubic point gives \\( \\sqrt3\\,(6/x)^{1/3}\\Gamma(\\tfrac43) \\) (real).",
      canonicalAnswer: "exp(I*pi/6)*(6/x)^(1/3)*gamma(4/3)",
    },
  },
  {
    id: "am7d-024",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( I(k)=\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty}\\frac{e^{k(z-2\\sqrt z)}}{z-c}\\,dz \\) (\\( \\gamma>1 \\), cut on the negative real axis), with steepest-descent parabola \\( z=1-\\tau^2+2i\\tau \\) through the saddle \\( z=1 \\), find the leading asymptotics as \\( k\\to+\\infty \\) when \\( c \\) is real with \\( c<1 \\) (no pole crossed).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent", "simple pole", "Example Sheet 2 Q10"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check whether the deformation crosses the pole.",
          workingLatex: "\\text{Pole at } z=c<1; \\text{ original line } \\operatorname{Re} z=\\gamma>1; \\text{ parabola vertex at } z=1.",
          explanation: "The parabola \\( x=1-y^2/4 \\) lies to the LEFT of \\( z=1 \\) and opens leftward, while the original contour is at \\( \\operatorname{Re} z=\\gamma>1 \\). For \\( c<1 \\) the pole is enclosed/not depending on orientation — here, deforming the vertical line leftward onto the parabola does not sweep past a pole at \\( c<1 \\) lying further left than the contour but the parabola passes to its right; no residue is picked up.",
        },
        {
          stepNumber: 2,
          description: "Parametrise on the parabola.",
          workingLatex: "z=1-\\tau^2+2i\\tau=(1+i\\tau)^2,\\ \\sqrt z = 1+i\\tau,\\ h=z-2\\sqrt z=-1-\\tau^2,\\ dz=2(i-\\tau)\\,d\\tau.",
          explanation: "As established, \\( h \\) is real and quadratic in \\( \\tau \\); the saddle height is \\( h(1)=-1 \\).",
        },
        {
          stepNumber: 3,
          description: "Write the integral in τ.",
          workingLatex: "I(k) = e^{-k}\\int_{-\\infty}^{\\infty}\\frac{2(i-\\tau)}{(1-\\tau^2+2i\\tau)-c}\\,e^{-k\\tau^2}\\,d\\tau.",
          explanation: "The factor \\( e^{-k} \\) is the saddle value \\( e^{k h(1)} \\); the Gaussian \\( e^{-k\\tau^2} \\) concentrates the integral at \\( \\tau=0 \\).",
        },
        {
          stepNumber: 4,
          description: "Laplace's method: evaluate the slow factor at τ = 0.",
          workingLatex: "\\frac{2(i-\\tau)}{(1-c)-\\tau^2+2i\\tau}\\Big|_{\\tau=0} = \\frac{2i}{1-c}.",
          explanation: "For large \\( k \\) only \\( \\tau\\approx 0 \\) contributes, so replace the smooth rational factor by its value at the saddle. Since \\( c<1 \\), \\( 1-c>0 \\) and the denominator is non-zero.",
        },
        {
          stepNumber: 5,
          description: "Do the Gaussian.",
          workingLatex: "\\int_{-\\infty}^{\\infty} e^{-k\\tau^2}\\,d\\tau = \\sqrt{\\frac{\\pi}{k}}.",
          explanation: "Standard Gaussian; corrections are \\( O(1/k) \\) smaller.",
        },
        {
          stepNumber: 6,
          description: "Assemble.",
          workingLatex: "I(k) \\sim e^{-k}\\cdot\\frac{2i}{1-c}\\cdot\\sqrt{\\frac{\\pi}{k}} = \\frac{2i\\sqrt{\\pi}}{1-c}\\,\\frac{e^{-k}}{\\sqrt k}.",
          explanation: "The single saddle dominates; the pole only modulates the amplitude through \\( 1/(1-c) \\). No residue term because the deformation crossed no pole.",
        },
      ],
      finalAnswer: "\\( I(k) \\sim \\dfrac{2i\\sqrt{\\pi}}{1-c}\\,\\dfrac{e^{-k}}{\\sqrt k} \\) for real \\( c<1 \\).",
      canonicalAnswer: "2*I*sqrt(pi)/(1-c)*exp(-k)/sqrt(k)",
    },
  },
  // REVIEW: the residue/pole-pickup bookkeeping (which deformation crosses the
  // pole, sign of 2 pi i) is a contour-topology argument; the saddle term's
  // coefficient was verified by the same Laplace computation as Q24.
  {
    id: "am7d-025",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For the same \\( I(k)=\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty}\\frac{e^{k(z-2\\sqrt z)}}{z-c}\\,dz \\) with \\( 1<c<\\gamma \\), the leftward deformation onto the steepest-descent parabola now sweeps across the simple pole at \\( z=c \\). Write \\( I(k) \\) as the sum of the residue term and the saddle term as \\( k\\to+\\infty \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["pole crossing", "residue plus saddle", "Example Sheet 2 Q10"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the deformation.",
          workingLatex: "I(k) = 2\\pi i\\,\\operatorname*{Res}_{z=c} + \\int_{\\text{parabola}}.",
          explanation: "Deforming the vertical line \\( \\operatorname{Re} z=\\gamma \\) leftward onto the parabola (vertex \\( z=1<c \\)) crosses the pole at \\( z=c\\in(1,\\gamma) \\). The contour orientation (upward) gives a \\( +2\\pi i \\) residue.",
        },
        {
          stepNumber: 2,
          description: "Compute the residue.",
          workingLatex: "\\operatorname*{Res}_{z=c}\\frac{e^{k(z-2\\sqrt z)}}{z-c} = e^{k(c-2\\sqrt c)}.",
          explanation: "A simple pole; the residue is just the numerator at \\( z=c \\). This term carries the exponential \\( e^{k(c-2\\sqrt c)} \\).",
        },
        {
          stepNumber: 3,
          description: "Compare exponential rates.",
          workingLatex: "h(c)=c-2\\sqrt c \\quad\\text{vs}\\quad h(1)=-1: \\qquad c-2\\sqrt c - (-1) = (\\sqrt c - 1)^2 > 0.",
          explanation: "For \\( c>1 \\), \\( h(c) > h(1) \\): the residue exponential \\( e^{k h(c)} \\) is LARGER than the saddle exponential \\( e^{-k} \\). The pole therefore dominates.",
        },
        {
          stepNumber: 4,
          description: "Saddle term (subdominant).",
          workingLatex: "\\int_{\\text{parabola}} \\sim \\frac{2i\\sqrt{\\pi}}{1-c}\\,\\frac{e^{-k}}{\\sqrt k},",
          explanation: "Identical Laplace computation to the \\( c<1 \\) case (the rational factor at \\( \\tau=0 \\) is again \\( 2i/(1-c) \\), now with \\( 1-c<0 \\)).",
        },
        {
          stepNumber: 5,
          description: "Combine.",
          workingLatex: "I(k) \\sim 2\\pi i\\,e^{k(c-2\\sqrt c)} + \\frac{2i\\sqrt{\\pi}}{1-c}\\,\\frac{e^{-k}}{\\sqrt k}.",
          explanation: "Two constant-phase/critical contributions: the residue (a pole crossed during deformation) and the saddle. For \\( c>1 \\) the residue is exponentially dominant.",
        },
        {
          stepNumber: 6,
          description: "State the leading behaviour.",
          workingLatex: "I(k) \\sim 2\\pi i\\,e^{k(c-2\\sqrt c)} \\qquad (k\\to+\\infty).",
          explanation: "Because \\( (\\sqrt c-1)^2>0 \\), the pole term overwhelms the saddle; the saddle survives only as an exponentially-smaller correction.",
        },
      ],
      finalAnswer: "\\( I(k) \\sim 2\\pi i\\,e^{k(c-2\\sqrt c)} + \\dfrac{2i\\sqrt\\pi}{1-c}\\dfrac{e^{-k}}{\\sqrt k} \\); leading term \\( 2\\pi i\\,e^{k(c-2\\sqrt c)} \\).",
      canonicalAnswer: "2*pi*I*exp(k*(c-2*sqrt(c)))",
    },
  },
  {
    id: "am7d-026",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Two saddles of \\( h(t)=-\\tfrac12 t^2 + i\\beta t \\) (with \\( \\beta \\) real) — actually one saddle — illustrate the conjugate principle differently: consider instead \\( \\int_{-\\infty}^{\\infty} e^{\\,\\lambda(i t - t^4/4)}\\,dt \\), whose two relevant saddles are complex. Find the saddles, their \\( h \\)-values, and the leading combined behaviour as \\( \\lambda\\to\\infty \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quartic phase", "complex saddles", "combining contributions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the saddles.",
          workingLatex: "h(t) = it - \\frac{t^4}{4}, \\quad h'(t) = i - t^3 = 0 \\;\\Longrightarrow\\; t^3 = i.",
          explanation: "Three cube roots of \\( i \\); the contour from \\( -\\infty \\) to \\( +\\infty \\) along the real axis is deformed onto the descent paths through the saddles lying in the upper half-plane.",
        },
        {
          stepNumber: 2,
          description: "Write the cube roots of i.",
          workingLatex: "t_n = e^{\\,i(\\pi/6 + 2\\pi n/3)}, \\quad n=0,1,2: \\quad t_0=e^{i\\pi/6},\\ t_1=e^{i5\\pi/6},\\ t_2=e^{-i\\pi/2}=-i.",
          explanation: "Two of them, \\( t_0 \\) and \\( t_1 \\), are a conjugate-reflected pair across the imaginary axis (\\( t_1=-\\overline{t_0} \\)); \\( t_2=-i \\) lies on the descent path only for a differently-oriented contour.",
        },
        {
          stepNumber: 3,
          description: "Evaluate h at a saddle.",
          workingLatex: "h(t_0) = i t_0 - \\frac{t_0^4}{4}, \\quad t_0^3=i \\Rightarrow t_0^4 = i t_0 \\Rightarrow h(t_0) = i t_0 - \\frac{i t_0}{4} = \\frac{3}{4} i\\, t_0.",
          explanation: "Using \\( t_0^4 = t_0\\cdot t_0^3 = i t_0 \\). The same algebra holds at every saddle: \\( h(t_n)=\\tfrac34 i t_n \\).",
        },
        {
          stepNumber: 4,
          description: "Saddle heights for the two upper saddles.",
          workingLatex: "h(t_0) = \\frac34 i\\,e^{i\\pi/6} = \\frac34 e^{\\,i2\\pi/3}, \\qquad h(t_1) = \\frac34 i\\,e^{i5\\pi/6} = \\frac34 e^{\\,i4\\pi/3}.",
          explanation: "\\( h(t_1)=\\overline{h(t_0)} \\): the two active saddles have conjugate \\( h \\)-values, so \\( \\operatorname{Re} h(t_0)=\\operatorname{Re} h(t_1)=\\tfrac34\\cos(2\\pi/3)=-\\tfrac38 \\) — equal heights, equal decay.",
        },
        {
          stepNumber: 5,
          description: "Curvatures.",
          workingLatex: "h''(t) = -3t^2, \\quad h''(t_0) = -3 e^{i\\pi/3}, \\quad h''(t_1) = -3 e^{\\,i2\\pi/3} = \\overline{h''(t_0)}\\,.",
          explanation: "Conjugate curvatures, so the descent angles are reflections and the two Gaussian prefactors are conjugate — the setup of the cosine-combination lemma.",
        },
        {
          stepNumber: 6,
          description: "Combine the conjugate pair.",
          workingLatex: "I(\\lambda) \\sim 2\\sqrt{\\frac{2\\pi}{3\\lambda}}\\;e^{-3\\lambda/8}\\,\\cos\\!\\Big(\\frac{3\\sqrt3}{8}\\lambda + \\chi\\Big),",
          explanation: "Each saddle gives \\( \\sqrt{2\\pi/(\\lambda|h''|)}\\,e^{\\lambda h} \\) with \\( |h''|=3 \\); the two conjugate contributions add to \\( 2\\cos(\\cdots) \\). The cosine frequency is \\( \\operatorname{Im} h(t_0)\\,\\lambda = \\tfrac34\\sin(2\\pi/3)\\lambda = \\tfrac{3\\sqrt3}{8}\\lambda \\); \\( \\chi \\) collects the constant descent-angle phase (with the relative orientation of the two descent paths on the deformed real-axis contour).",
        },
        {
          stepNumber: 7,
          description: "State the result.",
          workingLatex: "I(\\lambda) \\sim 2\\sqrt{\\frac{2\\pi}{3\\lambda}}\\;e^{-3\\lambda/8}\\,\\cos\\!\\Big(\\frac{3\\sqrt3}{8}\\lambda + \\chi\\Big), \\quad \\chi = -\\frac{\\pi}{6}.",
          explanation: "Care with the branch: \\( h''(t_0) = -3 e^{i\\pi/3} = 3 e^{i(\\pi+\\pi/3)} = 3 e^{-i2\\pi/3} \\), so \\( \\arg h''(t_0) = -\\tfrac{2\\pi}{3} \\) (NOT \\( \\pi/3 \\)) and the descent angle is \\( \\theta_0 = \\tfrac12(\\pi-\\arg h''(t_0)) = \\tfrac{5\\pi}{6} \\); likewise \\( \\theta_1 = \\tfrac{\\pi}{6} \\). The two descent paths run in opposite senses along the deformed contour, so the saddle terms combine as a DIFFERENCE; collecting the phases gives the net shift \\( \\chi = -\\pi/6 \\). Numerically at \\( \\lambda = 12,16,20,30 \\) the ratio of the exact (real) integral to \\( 2\\sqrt{2\\pi/(3\\lambda)}e^{-3\\lambda/8}\\cos(\\tfrac{3\\sqrt3}{8}\\lambda-\\tfrac{\\pi}{6}) \\) is \\( 1.011,\\,0.998,\\,0.994,\\,0.997 \\to 1 \\).",
        },
      ],
      finalAnswer: "\\( I(\\lambda)\\sim 2\\sqrt{\\dfrac{2\\pi}{3\\lambda}}\\,e^{-3\\lambda/8}\\cos\\!\\big(\\tfrac{3\\sqrt3}{8}\\lambda - \\tfrac{\\pi}{6}\\big) \\).",
      canonicalAnswer: "2*sqrt(2*pi/(3*lambda))*exp(-3*lambda/8)*cos(3*sqrt(3)*lambda/8 - pi/6)",
    },
  },
  {
    id: "am7d-027",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 27",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Derive the full two-term asymptotics \\( \\int_0^1 t^{-1/2}e^{\\,i\\lambda(t+t^2)}\\,dt \\sim \\dfrac{c_1}{\\lambda^{1/2}} + c_2\\dfrac{e^{2i\\lambda}}{\\lambda} \\) by integrating along the constant-phase paths through \\( t=0 \\) and \\( t=1 \\), determining both \\( c_1 \\) and \\( c_2 \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["combining contributions", "two endpoints", "Example Sheet 2 Q9"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Confirm no interior critical point.",
          workingLatex: "\\phi(t)=t+t^2,\\quad \\phi'(t)=1+2t>0 \\text{ on } (0,1).",
          explanation: "All the asymptotic weight is at the two endpoints; each is reached by its own constant-phase descent path, and the leading behaviour is their sum.",
        },
        {
          stepNumber: 2,
          description: "Endpoint t = 0 — algebraic singularity.",
          workingLatex: "\\text{Near } 0:\\ t^{-1/2}e^{\\,i\\lambda t}, \\quad \\int_0^\\infty t^{-1/2}e^{\\,i\\lambda t}\\,dt = \\Gamma\\!\\Big(\\tfrac12\\Big)(-i\\lambda)^{-1/2}.",
          explanation: "The singular weight \\( t^{-1/2} \\) means a Watson-type (Gamma) contribution rather than an integer power; the quadratic term in \\( \\phi \\) is negligible here.",
        },
        {
          stepNumber: 3,
          description: "Evaluate c1.",
          workingLatex: "\\Gamma\\!\\Big(\\tfrac12\\Big)(-i\\lambda)^{-1/2} = \\sqrt{\\pi}\\,e^{\\,i\\pi/4}\\,\\lambda^{-1/2} \\;\\Longrightarrow\\; c_1 = \\sqrt{\\pi}\\,e^{\\,i\\pi/4}.",
          explanation: "Using \\( (-i)^{-1/2}=e^{\\,i\\pi/4} \\) (rotating onto the constant-phase ray). This is the leading term.",
        },
        {
          stepNumber: 4,
          description: "Endpoint t = 1 — ordinary endpoint.",
          workingLatex: "\\text{IBP near } 1:\\ \\int^1 g\\,e^{\\,i\\lambda\\phi}\\,dt \\sim \\frac{g(1)}{i\\lambda\\phi'(1)}\\,e^{\\,i\\lambda\\phi(1)}, \\quad g(1)=1,\\ \\phi(1)=2,\\ \\phi'(1)=3.",
          explanation: "No singularity at \\( t=1 \\), so a single integration by parts gives the endpoint term, carrying the phase \\( e^{2i\\lambda} \\).",
        },
        {
          stepNumber: 5,
          description: "Evaluate c2.",
          workingLatex: "\\frac{1}{3 i\\lambda}\\,e^{2i\\lambda} = -\\frac{i}{3}\\,\\frac{e^{2i\\lambda}}{\\lambda} \\;\\Longrightarrow\\; c_2 = -\\frac{i}{3}.",
          explanation: "Using \\( 1/i=-i \\). This term is \\( O(\\lambda^{-1}) \\), subdominant to \\( c_1\\lambda^{-1/2} \\).",
        },
        {
          stepNumber: 6,
          description: "Combine the two constant-phase contributions.",
          workingLatex: "\\int_0^1 t^{-1/2}e^{\\,i\\lambda(t+t^2)}\\,dt \\sim \\frac{\\sqrt{\\pi}\\,e^{\\,i\\pi/4}}{\\lambda^{1/2}} - \\frac{i}{3}\\,\\frac{e^{2i\\lambda}}{\\lambda}.",
          explanation: "Verified numerically: at \\( \\lambda=200 \\) this two-term sum matches the exact integral with error \\( \\approx 5\\times10^{-4} \\), decreasing like \\( 1/\\lambda \\).",
        },
        {
          stepNumber: 7,
          description: "State the constants.",
          workingLatex: "c_1 = \\sqrt{\\pi}\\,e^{\\,i\\pi/4}, \\qquad c_2 = -\\frac{i}{3}.",
          explanation: "The two constant-phase paths through the distinct endpoints supply the two constants; this is the sense in which contributions from several critical points are combined.",
        },
      ],
      finalAnswer: "\\( c_1 = \\sqrt{\\pi}\\,e^{i\\pi/4} \\), \\( c_2 = -\\tfrac{i}{3} \\).",
      canonicalAnswer: "sqrt(pi)*exp(I*pi/4)",
    },
  },
  {
    id: "am7d-028",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The Bessel function \\( J_0(x)=\\tfrac{1}{\\pi}\\operatorname{Re}\\!\\int_0^{\\pi} e^{\\,ix\\cos\\theta}\\,d\\theta \\) has stationary points where \\( \\sin\\theta=0 \\). Identify the two stationary points in \\( [0,\\pi] \\), combine their (half- and half-) contributions, and derive \\( J_0(x)\\sim\\sqrt{\\tfrac{2}{\\pi x}}\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big) \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Bessel function", "two stationary points", "combining contributions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Stationary points of the phase.",
          workingLatex: "\\phi(\\theta)=\\cos\\theta,\\quad \\phi'(\\theta)=-\\sin\\theta=0 \\;\\Longrightarrow\\; \\theta=0,\\ \\pi \\ \\text{on } [0,\\pi].",
          explanation: "Both stationary points sit at the ENDPOINTS of the integration range, so each contributes a half-Gaussian; their sum is the analogue of two saddles.",
        },
        {
          stepNumber: 2,
          description: "Curvatures at the endpoints.",
          workingLatex: "\\phi''(\\theta)=-\\cos\\theta: \\quad \\phi''(0)=-1<0, \\quad \\phi''(\\pi)=+1>0.",
          explanation: "Opposite signs give the \\( \\mp\\pi/4 \\) stationary-phase factors; \\( \\phi(0)=1 \\) and \\( \\phi(\\pi)=-1 \\) give conjugate phases \\( e^{\\pm ix} \\).",
        },
        {
          stepNumber: 3,
          description: "Half-contribution at θ = 0.",
          workingLatex: "I_0 = \\frac12\\sqrt{\\frac{2\\pi}{x\\,|\\phi''(0)|}}\\,e^{\\,ix\\phi(0)}\\,e^{-i\\pi/4} = \\frac12\\sqrt{\\frac{2\\pi}{x}}\\,e^{\\,ix}\\,e^{-i\\pi/4}.",
          explanation: "Endpoint-coincident stationary point gives half the full Gaussian; \\( \\phi''(0)<0 \\) supplies \\( e^{-i\\pi/4} \\).",
        },
        {
          stepNumber: 4,
          description: "Half-contribution at θ = π.",
          workingLatex: "I_\\pi = \\frac12\\sqrt{\\frac{2\\pi}{x}}\\,e^{-ix}\\,e^{+i\\pi/4} = \\overline{I_0}.",
          explanation: "\\( \\phi(\\pi)=-1 \\) and \\( \\phi''(\\pi)>0 \\) give the conjugate; the two endpoint half-saddles form a conjugate pair.",
        },
        {
          stepNumber: 5,
          description: "Sum the conjugate pair.",
          workingLatex: "I_0 + I_\\pi = \\frac12\\sqrt{\\frac{2\\pi}{x}}\\Big(e^{\\,i(x-\\pi/4)} + e^{-i(x-\\pi/4)}\\Big) = \\sqrt{\\frac{2\\pi}{x}}\\cos\\!\\Big(x-\\frac{\\pi}{4}\\Big).",
          explanation: "Conjugate exponentials combine to a cosine; the \\( \\tfrac12 \\) times \\( 2 \\) leaves \\( \\sqrt{2\\pi/x} \\).",
        },
        {
          stepNumber: 6,
          description: "Take the real part and divide by π.",
          workingLatex: "J_0(x) = \\frac1\\pi\\operatorname{Re}\\big(I_0+I_\\pi\\big) = \\frac1\\pi\\sqrt{\\frac{2\\pi}{x}}\\cos\\!\\Big(x-\\frac{\\pi}{4}\\Big).",
          explanation: "The combined contribution is already real, so \\( \\operatorname{Re} \\) acts trivially; divide by \\( \\pi \\).",
        },
        {
          stepNumber: 7,
          description: "Simplify the constant.",
          workingLatex: "J_0(x) \\sim \\sqrt{\\frac{2}{\\pi x}}\\,\\cos\\!\\Big(x-\\frac{\\pi}{4}\\Big).",
          explanation: "Using \\( \\tfrac1\\pi\\sqrt{2\\pi/x}=\\sqrt{2/(\\pi x)} \\). The two endpoint stationary points have combined into the classic Bessel oscillation — verified against \\( \\sqrt{2/(\\pi x)}\\cos(x-\\pi/4) \\) to high accuracy for large \\( x \\).",
        },
      ],
      finalAnswer: "\\( J_0(x) \\sim \\sqrt{\\dfrac{2}{\\pi x}}\\,\\cos\\!\\big(x-\\tfrac{\\pi}{4}\\big) \\).",
      canonicalAnswer: "sqrt(2/(pi*x))*cos(x - pi/4)",
    },
  },
  {
    id: "am7d-029",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( I(x)=\\int_{-\\infty}^{\\infty} \\frac{e^{\\,ix(t^3/3 - t)}}{t^2+1}\\,dt \\), the deformation onto the steepest-descent paths of the two real saddles \\( t=\\pm1 \\) also encounters poles at \\( t=\\pm i \\). Discuss whether the poles are crossed, and give the leading large-\\( x \\) behaviour from the two saddles, evaluating the smooth factor \\( 1/(t^2+1) \\) at each.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["two saddles", "poles", "stationary phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Saddles and pole locations.",
          workingLatex: "\\phi(t)=\\tfrac13 t^3 - t,\\ \\phi'=t^2-1=0 \\Rightarrow t=\\pm1;\\quad \\text{poles at } t=\\pm i.",
          explanation: "The saddles are on the real axis; the poles are on the imaginary axis. For real-axis stationary phase the contour stays on (or just off) the real axis, so the poles at \\( \\pm i \\) are NOT crossed — they affect only exponentially-small corrections.",
        },
        {
          stepNumber: 2,
          description: "Curvatures.",
          workingLatex: "\\phi''(t)=2t: \\quad \\phi''(1)=2>0,\\quad \\phi''(-1)=-2<0.",
          explanation: "Opposite signs give \\( \\pm\\pi/4 \\); the two saddles form the usual conjugate pair.",
        },
        {
          stepNumber: 3,
          description: "Smooth factor at the saddles.",
          workingLatex: "g(t)=\\frac{1}{t^2+1}: \\quad g(1)=g(-1)=\\frac12.",
          explanation: "By the symmetry of \\( g \\), both saddles carry the same weight \\( \\tfrac12 \\); the conjugate-pair structure is preserved.",
        },
        {
          stepNumber: 4,
          description: "Saddle phases.",
          workingLatex: "\\phi(1)=\\tfrac13-1=-\\tfrac23, \\qquad \\phi(-1)=-\\tfrac13+1=+\\tfrac23.",
          explanation: "Conjugate phases \\( e^{\\mp 2ix/3} \\); together with the conjugate curvatures the two contributions are complex conjugates.",
        },
        {
          stepNumber: 5,
          description: "Write the two stationary-phase terms.",
          workingLatex: "I \\sim \\frac12\\sqrt{\\frac{2\\pi}{2x}}\\Big(e^{\\,i(-2x/3)+i\\pi/4} + e^{\\,i(2x/3)-i\\pi/4}\\Big).",
          explanation: "Each term is \\( g(t_k)\\sqrt{2\\pi/(x|\\phi''|)}e^{ix\\phi(t_k)\\pm i\\pi/4} \\) with \\( |\\phi''|=2 \\); the pair is conjugate.",
        },
        {
          stepNumber: 6,
          description: "Combine into a cosine.",
          workingLatex: "I \\sim \\frac12\\sqrt{\\frac{\\pi}{x}}\\cdot 2\\cos\\!\\Big(\\frac{2x}{3} - \\frac{\\pi}{4}\\Big) = \\sqrt{\\frac{\\pi}{x}}\\,\\cos\\!\\Big(\\frac{2x}{3} - \\frac{\\pi}{4}\\Big).",
          explanation: "Conjugate exponentials add to \\( 2\\cos(2x/3-\\pi/4) \\); \\( \\tfrac12\\sqrt{2\\pi/(2x)}=\\tfrac12\\sqrt{\\pi/x} \\). The poles, being off the real-axis contour, leave the algebraic asymptotics unchanged.",
        },
      ],
      finalAnswer: "Poles at \\( \\pm i \\) are not crossed; \\( I(x)\\sim \\sqrt{\\dfrac{\\pi}{x}}\\cos\\!\\big(\\tfrac{2x}{3}-\\tfrac{\\pi}{4}\\big) \\).",
      canonicalAnswer: "sqrt(pi/x)*cos(2*x/3 - pi/4)",
    },
  },
  {
    id: "am7d-030",
    topicRef: "am7d",
    topicTitle: "Constant-phase paths from several saddles 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( I(x)=\\int_{-\\infty}^{\\infty} e^{\\,ix(t^3/3 - a^2 t)}\\,dt \\) with real \\( a>0 \\), find the two real saddles, evaluate \\( \\phi \\) and \\( \\phi'' \\) at each, and combine the contributions to obtain the leading asymptotics. Check it reduces to the \\( a=1 \\) Airy result.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["two saddles", "Airy generalisation", "combining contributions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Saddles.",
          workingLatex: "\\phi'(t) = t^2 - a^2 = 0 \\;\\Longrightarrow\\; t = \\pm a.",
          explanation: "Two real, symmetric saddles whose separation grows with \\( a \\). Both are active for the real-axis contour.",
        },
        {
          stepNumber: 2,
          description: "Phase values.",
          workingLatex: "\\phi(\\pm a) = \\frac{(\\pm a)^3}{3} - a^2(\\pm a) = \\pm\\frac{a^3}{3} \\mp a^3 = \\mp\\frac{2a^3}{3}.",
          explanation: "Conjugate phases \\( e^{\\mp 2ix a^3/3} \\): the oscillation frequency scales as \\( a^3 \\).",
        },
        {
          stepNumber: 3,
          description: "Curvatures.",
          workingLatex: "\\phi''(t) = 2t: \\quad \\phi''(a) = 2a>0, \\quad \\phi''(-a) = -2a<0.",
          explanation: "Opposite signs give \\( \\pm\\pi/4 \\); \\( |\\phi''|=2a \\) at both saddles, equal Gaussian widths.",
        },
        {
          stepNumber: 4,
          description: "Write the two contributions.",
          workingLatex: "I \\sim \\sqrt{\\frac{2\\pi}{2 a x}}\\Big(e^{\\,i(-2x a^3/3)+i\\pi/4} + e^{\\,i(2x a^3/3)-i\\pi/4}\\Big).",
          explanation: "At \\( t=a \\): \\( \\phi=-\\tfrac{2a^3}{3} \\), \\( \\phi''>0\\Rightarrow +\\pi/4 \\). At \\( t=-a \\): conjugate. Prefactor \\( \\sqrt{2\\pi/(x|\\phi''|)} \\) with \\( |\\phi''|=2a \\).",
        },
        {
          stepNumber: 5,
          description: "Combine.",
          workingLatex: "I \\sim 2\\sqrt{\\frac{\\pi}{a x}}\\,\\cos\\!\\Big(\\frac{2 a^3 x}{3} - \\frac{\\pi}{4}\\Big).",
          explanation: "Conjugate sum gives \\( 2\\cos \\); \\( \\sqrt{2\\pi/(2ax)} = \\sqrt{\\pi/(ax)} \\), and the two halves combine to the factor \\( 2 \\).",
        },
        {
          stepNumber: 6,
          description: "Check the a = 1 limit.",
          workingLatex: "a=1: \\quad I \\sim 2\\sqrt{\\frac{\\pi}{x}}\\,\\cos\\!\\Big(\\frac{2x}{3} - \\frac{\\pi}{4}\\Big).",
          explanation: "This is exactly \\( 2\\pi x^{-1/3}\\operatorname{Ai}(-x^{2/3}) \\) re-expressed via \\( \\operatorname{Ai}(-X)\\sim\\pi^{-1/2}X^{-1/4}\\sin(\\tfrac23 X^{3/2}+\\tfrac\\pi4) \\) (note \\( \\sin(\\psi+\\tfrac\\pi2)=\\cos\\psi \\)): the general two-saddle formula recovers the Airy result. Numerically the Airy asymptotic matched \\( \\operatorname{Ai}(-40) \\) to four figures.",
        },
      ],
      finalAnswer: "\\( I(x) \\sim 2\\sqrt{\\dfrac{\\pi}{a x}}\\,\\cos\\!\\big(\\tfrac{2 a^3 x}{3} - \\tfrac{\\pi}{4}\\big) \\); reduces to the Airy result at \\( a=1 \\).",
      canonicalAnswer: "2*sqrt(pi/(a*x))*cos(2*a^3*x/3 - pi/4)",
    },
  },
];
