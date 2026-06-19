import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — § am7a
 * Method of Steepest Descent I: Saddle points & paths of steepest descent.
 * Ref: am7a
 *
 * 30 fully-worked questions on the geometry that underlies the saddle-point
 * method for integrals of the form
 *
 *   I(lambda) = \int_C g(z) e^{lambda h(z)} dz,   lambda -> +\infty,
 *
 * specifically: LOCATING saddle points (h'(z0)=0); the level lines of the
 * harmonic functions Re h and Im h through a saddle; distinguishing the
 * STEEPEST-DESCENT path (Im h = const, Re h decreasing away from z0) from the
 * steepest-ASCENT path (Im h = const, Re h increasing); the local descent
 * directions phi = (pi - arg h''(z0))/2 (and + pi); and the careful CHOICE OF
 * ROOT SIGN when parametrising the descent path / taking the square root of a
 * curvature.
 *
 * Conventions used throughout:
 *   - At a simple saddle, h(z) ~ h(z0) + (1/2) h''(z0) (z - z0)^2.
 *   - Write h''(z0) = |h''(z0)| e^{i alpha}. On a steepest path the increment
 *     (z - z0) = r e^{i phi} makes (1/2) h''(z0)(z-z0)^2 REAL:
 *       descent: 2 phi + alpha = pi  (so the quadratic is negative real),
 *       ascent : 2 phi + alpha = 0   (so the quadratic is positive real).
 *   - The leading saddle-point contribution along a descent path is
 *       I ~ g(z0) e^{lambda h(z0)} sqrt( 2 pi / (lambda |h''(z0)|) ) e^{i phi},
 *     with phi the descent direction the contour actually follows.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 2
 * (Method of Steepest Descent, Q7, Q8, Q9, Q10), with phases, saddles and
 * limits varied. The saddle locations, level-line identities (Im h = const),
 * the descent/ascent angle convention and the leading-term formula were all
 * checked symbolically with sympy and numerically with mpmath:
 *   - Q7 seed:  Im(t + t^3/3) = 2/3 verified exactly on x = sqrt((2+y)/3y)(y-1).
 *   - Q10 seed: h = z - 2 z^{1/2} on z_+ = (1 + i tau)^2 gives h = -1 - tau^2
 *               (Im constant, Re strictly decreasing -> genuine descent);
 *               parabola y^2 = 4(1 - x).
 *   - Leading formula validated on real Gaussian int e^{-x t^2/2} dt = sqrt(2pi/x).
 *   - Descent/ascent angles cross-checked for h'' in {2, 2i, -2, 1+i, -3i, 6, -2}.
 */
export const questions: Question[] = [
  // ── Foundation: the core technique in isolation ─────────────────────────
  {
    id: "am7a-001",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 01",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find the saddle point of \\( h(z) = z^2 - z \\), i.e. the point where \\( h'(z) = 0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle point", "stationary point of phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State what a saddle point is.", workingLatex: "\\text{Saddle: } h'(z) = 0.", explanation: "A saddle point of the integrand \\( e^{\\lambda h(z)} \\) is a point where the exponent is locally stationary, so the whole method begins by finding where \\( h'(z) = 0 \\). It is the analytic-continuation analogue of a turning point." },
        { stepNumber: 2, description: "Differentiate the quadratic term.", workingLatex: "\\tfrac{d}{dz}z^2 = 2z.", explanation: "Differentiate the phase term by term. The power rule sends \\( z^2 \\) to \\( 2z \\)." },
        { stepNumber: 3, description: "Differentiate the linear term.", workingLatex: "\\tfrac{d}{dz}(-z) = -1.", explanation: "The linear term \\( -z \\) differentiates to the constant \\( -1 \\). Combining the two pieces gives \\( h' \\)." },
        { stepNumber: 4, description: "Assemble the derivative.", workingLatex: "h'(z) = 2z - 1.", explanation: "Adding the two contributions gives \\( h'(z) = 2z - 1 \\). Because \\( h' \\) is linear, there will be at most one root — a single saddle." },
        { stepNumber: 5, description: "Set the derivative to zero.", workingLatex: "2z - 1 = 0.", explanation: "Imposing the stationarity condition gives one linear equation for the saddle location." },
        { stepNumber: 6, description: "Solve for the saddle.", workingLatex: "z_0 = \\tfrac{1}{2}.", explanation: "Rearranging \\( 2z = 1 \\) gives \\( z_0 = \\tfrac12 \\). 'Simple' means \\( h''(z_0) \\neq 0 \\), which we confirm next." },
        { stepNumber: 7, description: "Confirm it is a simple saddle.", workingLatex: "h''(z) = 2, \\qquad h''(z_0) = 2 \\neq 0.", explanation: "Since \\( h'' \\) is a non-zero constant, the point is a non-degenerate (order-one) saddle: locally \\( h(z) \\approx h(z_0) + (z - z_0)^2 \\). A saddle with \\( h''(z_0)=0 \\) would need the more delicate higher-order analysis.", mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[0.5,0],[4.5,4],[-3.5,4]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0.5,0],[4.5,-4],[-3.5,-4]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0.5,0],[4.5,4],[4.5,-4]]} color="var(--mafs-fg-orange)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0.5,0],[-3.5,4],[-3.5,-4]]} color="var(--mafs-fg-orange)" fillOpacity={0.10} strokeOpacity={0} />
  <Line.Segment point1={[0.5,-2.4]} point2={[0.5,2.4]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[-2.6,0]} point2={[3.3,0]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Vector tail={[0.5,0]} tip={[0.5,1.5]} color="var(--mafs-fg-green)" />
  <Point x={0.5} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[0.95,-0.5]} tex="z_0=\\tfrac12" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.3,2.3]} tex="\\text{descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[2.6,0.35]} tex="\\text{ascent}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.75,2.45]} tex="\\operatorname{Im}z" />
</Mafs>` },
      ],
      finalAnswer: "\\( z_0 = \\tfrac{1}{2} \\)",
      canonicalAnswer: "1/2",
    },
  },
  {
    id: "am7a-002",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find all saddle points of \\( h(z) = z^3 - 3z \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle point", "cubic phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the saddle condition.", workingLatex: "\\text{Saddles solve } h'(z) = 0.", explanation: "Saddle points are the zeros of \\( h' \\). A cubic phase has a quadratic derivative, so we expect up to two saddles." },
        { stepNumber: 2, description: "Differentiate the cubic term.", workingLatex: "\\tfrac{d}{dz}z^3 = 3z^2.", explanation: "Apply the power rule to the leading term." },
        { stepNumber: 3, description: "Differentiate the linear term.", workingLatex: "\\tfrac{d}{dz}(-3z) = -3.", explanation: "The linear term contributes the constant \\( -3 \\)." },
        { stepNumber: 4, description: "Assemble the derivative.", workingLatex: "h'(z) = 3z^2 - 3.", explanation: "Combine the two pieces. This quadratic is what we now set to zero." },
        { stepNumber: 5, description: "Set the derivative to zero and isolate \\( z^2 \\).", workingLatex: "3z^2 - 3 = 0 \\;\\implies\\; z^2 = 1.", explanation: "Divide through by \\( 3 \\) to isolate \\( z^2 \\). The remaining equation \\( z^2 = 1 \\) is the quadratic we solve next." },
        { stepNumber: 6, description: "Solve for the saddles.", workingLatex: "z_0 = +1 \\quad\\text{or}\\quad z_0 = -1.", explanation: "Taking both square roots of \\( z^2 = 1 \\). Both roots are real here, but in general saddles may be complex; the algebra is identical." },
        { stepNumber: 7, description: "Differentiate again for the curvature.", workingLatex: "h''(z) = 6z.", explanation: "We need \\( h'' \\) to check each saddle is non-degenerate and to fix the descent geometry later." },
        { stepNumber: 8, description: "Check non-degeneracy at each saddle.", workingLatex: "h''(1) = 6, \\quad h''(-1) = -6.", explanation: "Both values are non-zero, so each is a simple saddle. The opposite signs of \\( h'' \\) will give the two saddles steepest-descent paths in different directions — something to keep an eye on.", mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Line.Segment point1={[1,-2.2]} point2={[1,2.2]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[0.2,0]} point2={[1.8,0]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Line.Segment point1={[-1.8,0]} point2={[-0.2,0]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[-1,-2.2]} point2={[-1,2.2]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Point x={-1} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.35,-0.5]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.35,-0.5]} tex="z_0=-1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.5,2.3]} tex="\\text{descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-1.5,0.4]} tex="\\text{descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.55,2.45]} tex="\\operatorname{Im}z" />
</Mafs>` },
      ],
      finalAnswer: "\\( z_0 = \\pm 1 \\)",
      canonicalAnswer: "1, -1",
    },
  },
  {
    id: "am7a-003",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 03",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "The phase \\( h(z) = iz^2 \\) has a saddle at \\( z_0 = 0 \\). Find the two directions (as angles \\( \\phi \\) measured from \\( z_0 \\)) along which the steepest-descent path leaves the saddle.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["steepest descent direction", "argument of curvature"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate twice to get the curvature.", workingLatex: "h'(z) = 2iz, \\qquad h''(z) = 2i.", explanation: "Differentiate \\( iz^2 \\) once to \\( 2iz \\) and again to the constant \\( 2i \\). Near the saddle \\( h(z) \\approx h(z_0) + \\tfrac12 h''(z_0)(z-z_0)^2 \\), so the curvature controls the local geometry." },
        { stepNumber: 2, description: "Write the curvature in polar form.", workingLatex: "h''(0) = 2i = 2\\,e^{i\\pi/2}, \\qquad \\alpha := \\arg h''(0) = \\tfrac{\\pi}{2}.", explanation: "The argument \\( \\alpha \\) of \\( h''(z_0) \\) fixes the orientation of the descent and ascent lines; only \\( \\alpha \\) (not the modulus) enters the angle conditions." },
        { stepNumber: 3, description: "Parametrise the increment from the saddle.", workingLatex: "z - z_0 = re^{i\\phi}, \\qquad \\tfrac12 h''(z_0)(z-z_0)^2 = i\\,r^2 e^{i2\\phi}.", explanation: "Write the displacement from the saddle as \\( re^{i\\phi} \\). Squaring doubles the angle, and the factor \\( \\tfrac12 h''(z_0) = i \\) adds its own argument \\( \\pi/2 \\)." },
        { stepNumber: 4, description: "Impose the descent condition.", workingLatex: "\\arg\\!\\big(\\tfrac12 h''(z_0)(z-z_0)^2\\big) = 2\\phi + \\tfrac{\\pi}{2} = \\pi.", explanation: "On a steepest-descent path \\( \\operatorname{Im} h \\) is constant and \\( \\operatorname{Re} h \\) decreases, so the quadratic term must be real and negative — its argument must equal \\( \\pi \\)." },
        { stepNumber: 5, description: "Solve the angle equation.", workingLatex: "2\\phi = \\pi - \\tfrac{\\pi}{2} = \\tfrac{\\pi}{2} \\;\\implies\\; \\phi = \\tfrac{\\pi}{4}.", explanation: "Subtract \\( \\alpha = \\pi/2 \\) and halve. One descent direction is \\( \\phi = \\pi/4 \\)." },
        { stepNumber: 6, description: "Add the opposite ray.", workingLatex: "\\phi = \\tfrac{\\pi}{4} \\quad\\text{or}\\quad \\phi = \\tfrac{\\pi}{4} + \\pi = \\tfrac{5\\pi}{4}.", explanation: "There are two opposite descent directions because adding \\( \\pi \\) to \\( \\phi \\) leaves \\( e^{i2\\phi} \\) unchanged — they are the two ends of one straight descent line. (The ascent lines, by contrast, are at \\( \\phi = -\\pi/4, 3\\pi/4 \\).)", mafs: `<Mafs viewBox={{ x: [-2.4, 2.4], y: [-1.8, 1.8], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Line.Segment point1={[-1.4,-1.4]} point2={[1.4,1.4]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[-1.4,1.4]} point2={[1.4,-1.4]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Vector tail={[0,0]} tip={[1,1]} color="var(--mafs-fg-green)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.55,0.95]} tex="\\phi=\\tfrac{\\pi}{4}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-1.6,-0.7]} tex="\\text{descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[1.15,-1.0]} tex="\\text{ascent}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.15,-0.3]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.55,1.6]} tex="\\operatorname{Im}z" />
</Mafs>` },
      ],
      finalAnswer: "\\( \\phi = \\tfrac{\\pi}{4} \\) and \\( \\phi = \\tfrac{5\\pi}{4} \\)",
      canonicalAnswer: "pi/4, 5*pi/4",
    },
  },
  {
    id: "am7a-004",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 04",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "The phase \\( h(z) = z^2 \\) has a saddle at \\( z_0 = 0 \\). State the steepest-descent directions and the steepest-ascent directions there.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["steepest descent", "steepest ascent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the curvature at the saddle.", workingLatex: "h''(z) = 2, \\qquad h''(0) = 2.", explanation: "Differentiate \\( z^2 \\) twice to the constant \\( 2 \\). This is real and positive." },
        { stepNumber: 2, description: "Write the curvature argument.", workingLatex: "h''(0) = 2 = 2\\,e^{i\\cdot 0}, \\qquad \\alpha := \\arg h''(0) = 0.", explanation: "A real positive curvature has argument zero. This \\( \\alpha \\) is the single number that orients all four steepest lines." },
        { stepNumber: 3, description: "Form the local quadratic model.", workingLatex: "z = re^{i\\phi}: \\quad \\tfrac12 h''(0)\\,z^2 = r^2 e^{i2\\phi}.", explanation: "With \\( z = re^{i\\phi} \\) the quadratic term is \\( r^2 e^{i2\\phi} \\); its sign relative to the real axis decides descent versus ascent." },
        { stepNumber: 4, description: "Descent: quadratic real and negative.", workingLatex: "2\\phi + \\alpha = \\pi \\;\\implies\\; 2\\phi = \\pi \\;\\implies\\; \\phi = \\tfrac{\\pi}{2}, \\ \\tfrac{3\\pi}{2}.", explanation: "Along these vertical directions \\( z^2 = -r^2 < 0 \\), so \\( \\operatorname{Re} h \\) decreases — the integrand decays. These are the descent (valley) lines." },
        { stepNumber: 5, description: "Ascent: quadratic real and positive.", workingLatex: "2\\phi + \\alpha = 0 \\;\\implies\\; 2\\phi = 0 \\;\\implies\\; \\phi = 0, \\ \\pi.", explanation: "Along the real axis \\( z^2 = r^2 > 0 \\), so \\( \\operatorname{Re} h \\) increases — the integrand grows. These are the ascent (ridge) lines, which the steepest-descent contour must avoid." },
        { stepNumber: 6, description: "Note the right-angle relationship.", workingLatex: "\\phi_{\\text{descent}} - \\phi_{\\text{ascent}} = \\tfrac{\\pi}{2} - 0 = \\tfrac{\\pi}{2}.", explanation: "Descent and ascent sit at right angles, a hallmark of analytic phases (it is the Cauchy–Riemann statement that level lines of \\( \\operatorname{Re} h \\) and \\( \\operatorname{Im} h \\) cross orthogonally). This is a quick sanity check on the arithmetic.", mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[0,0],[4,4],[-4,4]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[4,-4],[-4,-4]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[4,4],[4,-4]]} color="var(--mafs-fg-orange)" fillOpacity={0.10} strokeOpacity={0} />
  <Polygon points={[[0,0],[-4,4],[-4,-4]]} color="var(--mafs-fg-orange)" fillOpacity={0.10} strokeOpacity={0} />
  <Line.Segment point1={[0,-2.4]} point2={[0,2.4]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[-3.3,0]} point2={[3.3,0]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Vector tail={[0,0]} tip={[0,1.5]} color="var(--mafs-fg-green)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[0.45,-0.45]} tex="z_0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.0,2.3]} tex="\\text{descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[2.7,0.35]} tex="\\text{ascent}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.9,1.5]} tex="\\text{valley}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-1.9,1.5]} tex="\\text{ridge}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.8,2.45]} tex="\\operatorname{Im}z" />
</Mafs>` },
      ],
      finalAnswer: "Descent: \\( \\phi = \\tfrac{\\pi}{2}, \\tfrac{3\\pi}{2} \\); ascent: \\( \\phi = 0, \\pi \\).",
      canonicalAnswer: "descent pi/2,3pi/2; ascent 0,pi",
    },
  },
  {
    id: "am7a-005",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For the phase \\( h(z) = z - 2z^{1/2} \\) (principal branch, cut along the negative real axis), show that \\( z_0 = 1 \\) is a saddle point and evaluate \\( h(z_0) \\) and \\( h''(z_0) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle point", "branch cut"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the derivative of the square root.", workingLatex: "\\tfrac{d}{dz} z^{1/2} = \\tfrac12 z^{-1/2}.", explanation: "Stating the power rule for the half-power separately, because the branch cut keeps \\( z^{1/2} \\) single-valued away from the negative real axis and we want the derivative to be unambiguous." },
        { stepNumber: 2, description: "Differentiate the phase.", workingLatex: "h'(z) = 1 - 2\\cdot\\tfrac12 z^{-1/2} = 1 - z^{-1/2}.", explanation: "Differentiate \\( -2z^{1/2} \\) using the rule above: \\( -2\\cdot\\tfrac12 z^{-1/2} = -z^{-1/2} \\), and the leading \\( z \\) gives \\( 1 \\)." },
        { stepNumber: 3, description: "Set the derivative to zero.", workingLatex: "1 - z^{-1/2} = 0 \\;\\implies\\; z^{-1/2} = 1 \\;\\implies\\; z^{1/2} = 1.", explanation: "Rearranging the saddle condition. We solve for \\( z^{1/2} \\) first to respect the branch." },
        { stepNumber: 4, description: "Locate the saddle.", workingLatex: "z^{1/2} = 1 \\;\\implies\\; z_0 = 1.", explanation: "On the principal branch \\( z^{1/2} = 1 \\) gives \\( z_0 = 1 \\), which lies off the cut, so it is a legitimate saddle of the analytic phase. (The would-be root \\( z^{1/2}=-1 \\) is not attained on the principal branch.)" },
        { stepNumber: 5, description: "Evaluate the phase there.", workingLatex: "h(1) = 1 - 2\\sqrt{1} = 1 - 2 = -1.", explanation: "The value \\( h(z_0) = -1 \\) sets the exponential scale \\( e^{-\\lambda} \\) of the saddle contribution — it tells us how big the saddle's term is." },
        { stepNumber: 6, description: "Differentiate again.", workingLatex: "h''(z) = \\tfrac{d}{dz}\\big(-z^{-1/2}\\big) = \\tfrac12 z^{-3/2}.", explanation: "Differentiate \\( h'(z) = 1 - z^{-1/2} \\) once more: \\( \\tfrac{d}{dz}(-z^{-1/2}) = -(-\\tfrac12)z^{-3/2} = \\tfrac12 z^{-3/2} \\)." },
        { stepNumber: 7, description: "Evaluate the curvature there.", workingLatex: "h''(1) = \\tfrac12\\cdot 1^{-3/2} = \\tfrac12.", explanation: "Here \\( h''(1) = \\tfrac12 > 0 \\) is real and positive, so the point is a simple saddle and the descent geometry is vertical (a vertical descent line)." },
      ],
      finalAnswer: "\\( z_0 = 1,\\ h(z_0) = -1,\\ h''(z_0) = \\tfrac{1}{2} \\)",
    },
  },
  {
    id: "am7a-006",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "For the phase \\( h(t) = it - \\tfrac{1}{2}t^2 \\), find the saddle point \\( t_0 \\) and the steepest-descent direction there.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle point", "steepest descent direction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the phase.", workingLatex: "h'(t) = i - t.", explanation: "Differentiate \\( it - \\tfrac12 t^2 \\) term by term: \\( \\tfrac{d}{dt}(it) = i \\) and \\( \\tfrac{d}{dt}(-\\tfrac12 t^2) = -t \\). The phase is quadratic, so there is exactly one saddle." },
        { stepNumber: 2, description: "Set the derivative to zero.", workingLatex: "i - t = 0.", explanation: "Impose stationarity. This is a single linear equation in \\( t \\)." },
        { stepNumber: 3, description: "Solve for the saddle.", workingLatex: "t_0 = i.", explanation: "The saddle lies off the real axis, at \\( t_0 = i \\); the original integration contour will have to be deformed up to pass through it." },
        { stepNumber: 4, description: "Compute the curvature.", workingLatex: "h''(t) = -1, \\qquad h''(t_0) = -1.", explanation: "Differentiate \\( h'(t) = i - t \\) once more to the constant \\( -1 \\); it is the same at every point, in particular at the saddle." },
        { stepNumber: 5, description: "Write the curvature in polar form.", workingLatex: "h''(t_0) = -1 = e^{i\\pi}, \\qquad \\alpha := \\arg h''(t_0) = \\pi.", explanation: "The curvature is a constant negative real number, so its argument is \\( \\alpha = \\pi \\); this enters the descent-direction condition." },
        { stepNumber: 6, description: "Apply the descent condition.", workingLatex: "2\\phi + \\alpha = \\pi \\;\\implies\\; 2\\phi = 0 \\;\\implies\\; \\phi = 0 \\ \\text{or}\\ \\pi.", explanation: "On a descent path the quadratic must be real and negative, argument \\( \\pi \\); subtracting \\( \\alpha = \\pi \\) leaves \\( 2\\phi = 0 \\)." },
        { stepNumber: 7, description: "Confirm it is descent.", workingLatex: "\\tfrac12 h''(t_0)(t-t_0)^2 = -\\tfrac12 r^2 < 0.", explanation: "With \\( h''(t_0) < 0 \\) the descent path runs horizontally through \\( t_0 = i \\); along it the quadratic is real and negative, so \\( \\operatorname{Re} h \\) decreases as required for descent." },
      ],
      finalAnswer: "\\( t_0 = i \\); steepest-descent directions \\( \\phi = 0, \\pi \\) (horizontal).",
    },
  },

  // ── Standard: typical sheet-level ───────────────────────────────────────
  {
    id: "am7a-007",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 07",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "The integral \\( f(\\theta) = \\dfrac{1}{2\\pi i}\\displaystyle\\int_{C} \\exp\\!\\big(\\theta(t + \\tfrac13 t^3)\\big)\\,dt \\) has phase \\( h(t) = t + \\tfrac13 t^3 \\). Find both saddle points and the value of \\( h \\) at each.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point", "complex saddle"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the saddle condition.", workingLatex: "\\text{Saddles solve } h'(t) = 0.", explanation: "The exponent of \\( e^{\\theta h(t)} \\) is stationary at the saddles; these dominate the integral as \\( \\theta\\to\\infty \\)." },
        { stepNumber: 2, description: "Differentiate the constant term.", workingLatex: "\\tfrac{d}{dt}(t) = 1.", explanation: "Differentiate the phase term by term; the linear term gives the constant \\( 1 \\)." },
        { stepNumber: 3, description: "Differentiate the cubic term.", workingLatex: "\\tfrac{d}{dt}\\big(\\tfrac13 t^3\\big) = t^2.", explanation: "The cubic term \\( \\tfrac13 t^3 \\) differentiates to \\( \\tfrac13\\cdot 3t^2 = t^2 \\)." },
        { stepNumber: 4, description: "Assemble the derivative.", workingLatex: "h'(t) = 1 + t^2.", explanation: "Adding the two pieces gives \\( 1 + t^2 \\). This has no real roots, so the saddles are a complex-conjugate pair." },
        { stepNumber: 5, description: "Set the derivative to zero.", workingLatex: "1 + t^2 = 0 \\;\\implies\\; t^2 = -1.", explanation: "Isolating \\( t^2 \\). The negative value signals purely imaginary saddles." },
        { stepNumber: 6, description: "Solve for the saddles.", workingLatex: "t = \\pm i.", explanation: "The two saddles sit symmetrically on the imaginary axis; the path \\( C \\) (from the lower-right sector to the upper-right sector) will be deformed to descend through them." },
        { stepNumber: 7, description: "Use the cube of \\( i \\).", workingLatex: "i^3 = i^2\\cdot i = -i.", explanation: "Stating this power separately so the evaluation of \\( h(i) \\) is transparent — a common slip is to write \\( i^3 = i \\)." },
        { stepNumber: 8, description: "Form the cubic contribution at \\( t=i \\).", workingLatex: "\\tfrac13 i^3 = \\tfrac13(-i) = -\\tfrac13 i.", explanation: "Multiply the cube by \\( \\tfrac13 \\); this is the second term of \\( h(i) \\)." },
        { stepNumber: 9, description: "Evaluate the phase at \\( t = i \\).", workingLatex: "h(i) = i + \\big(-\\tfrac13 i\\big) = \\tfrac{2i}{3}.", explanation: "Add the linear term \\( i \\) and the cubic contribution \\( -\\tfrac13 i \\). The value is purely imaginary, so \\( |e^{\\theta h(i)}| = 1 \\): this saddle gives an oscillatory, not exponentially small, contribution." },
        { stepNumber: 10, description: "Use the cube of \\( -i \\).", workingLatex: "(-i)^3 = -(i^3) = -(-i) = i.", explanation: "Track the sign carefully: cubing \\( -i \\) gives \\( +i \\)." },
        { stepNumber: 11, description: "Form the cubic contribution at \\( t=-i \\).", workingLatex: "\\tfrac13(-i)^3 = \\tfrac13 i.", explanation: "Multiply by \\( \\tfrac13 \\); the second term of \\( h(-i) \\)." },
        { stepNumber: 12, description: "Evaluate the phase at \\( t = -i \\).", workingLatex: "h(-i) = -i + \\tfrac13 i = -\\tfrac{2i}{3}.", explanation: "By conjugate symmetry \\( h(-i) = \\overline{h(i)} \\). The two saddles contribute complex-conjugate terms whose sum is real, consistent with \\( f(\\theta) \\) being real." },
      ],
      finalAnswer: "\\( t = \\pm i \\), with \\( h(i) = \\tfrac{2i}{3} \\) and \\( h(-i) = -\\tfrac{2i}{3} \\).",
      canonicalAnswer: "t=i: 2i/3; t=-i: -2i/3",
    },
  },
  {
    id: "am7a-008",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For the phase \\( h(t) = t + \\tfrac13 t^3 \\), determine the curvature \\( h''(t) \\) at the saddle \\( t_0 = i \\) and hence the two steepest-descent directions there.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent direction", "complex saddle"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the first derivative.", workingLatex: "h'(t) = 1 + t^2.", explanation: "We start from \\( h' \\) computed in the previous problem, since \\( h'' \\) is its derivative." },
        { stepNumber: 2, description: "Differentiate again.", workingLatex: "h''(t) = 2t.", explanation: "We need \\( h'' \\) at the saddle to expand \\( h(t) \\approx h(t_0) + \\tfrac12 h''(t_0)(t-t_0)^2 \\) and read off the local geometry." },
        { stepNumber: 3, description: "Evaluate at the saddle.", workingLatex: "h''(i) = 2i.", explanation: "Substitute \\( t = i \\) into \\( 2t \\). This complex curvature sets both the width and the orientation of the saddle." },
        { stepNumber: 4, description: "Find the modulus of the curvature.", workingLatex: "|h''(i)| = |2i| = 2.", explanation: "The modulus controls the width of the Gaussian peak at the saddle (and appears in the leading-term denominator)." },
        { stepNumber: 5, description: "Find the argument of the curvature.", workingLatex: "2i = 2\\,e^{i\\pi/2}, \\qquad \\alpha := \\arg h''(i) = \\tfrac{\\pi}{2}.", explanation: "Since \\( 2i \\) lies on the positive imaginary axis, its argument is \\( \\pi/2 \\); this \\( \\alpha \\) orients the descent and ascent lines." },
        { stepNumber: 6, description: "Parametrise the displacement from the saddle.", workingLatex: "t - t_0 = re^{i\\phi}.", explanation: "Write the increment from \\( t_0=i \\) in polar form; we will square it to feed the quadratic model." },
        { stepNumber: 7, description: "Form the local quadratic.", workingLatex: "\\tfrac12 h''(i)(t-t_0)^2 = i\\,r^2 e^{i2\\phi}, \\qquad \\arg = 2\\phi + \\tfrac{\\pi}{2}.", explanation: "Squaring doubles the angle to \\( 2\\phi \\); the factor \\( \\tfrac12 h''(i) = i \\) adds its argument \\( \\pi/2 \\)." },
        { stepNumber: 8, description: "Apply the descent condition.", workingLatex: "2\\phi + \\alpha = \\pi \\;\\implies\\; 2\\phi + \\tfrac{\\pi}{2} = \\pi.", explanation: "On a descent path the quadratic \\( \\tfrac12 h''(t_0)(t-t_0)^2 \\) is real and negative, so its argument must equal \\( \\pi \\)." },
        { stepNumber: 9, description: "Solve for the first direction.", workingLatex: "2\\phi = \\tfrac{\\pi}{2} \\;\\implies\\; \\phi = \\tfrac{\\pi}{4}.", explanation: "Subtract \\( \\alpha=\\pi/2 \\) and halve. The descent path leaves \\( t_0 = i \\) at \\( 45^\\circ \\)." },
        { stepNumber: 10, description: "Add the opposite ray.", workingLatex: "\\phi = \\tfrac{\\pi}{4} \\quad\\text{or}\\quad \\phi = \\tfrac{\\pi}{4} + \\pi = \\tfrac{5\\pi}{4}.", explanation: "The descent line is one straight line through the saddle; its other end is at \\( 225^\\circ \\)." },
        { stepNumber: 11, description: "Interpret for the contour.", workingLatex: "\\text{descent line: } \\arg(t-i) \\in \\{\\tfrac\\pi4, \\tfrac{5\\pi}4\\}.", explanation: "To run from the lower-right to the upper-right sector the contour traverses these directions in the appropriate order, entering along \\( 5\\pi/4 \\) and leaving along \\( \\pi/4 \\)." },
      ],
      finalAnswer: "\\( h''(i) = 2i \\); steepest-descent directions \\( \\phi = \\tfrac{\\pi}{4},\\ \\tfrac{5\\pi}{4} \\).",
    },
  },
  {
    id: "am7a-009",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Let \\( h(t) = t + \\tfrac13 t^3 \\) with \\( t = x + iy \\). Show that the level line \\( \\operatorname{Im} h = \\tfrac23 \\) passes through the saddle \\( t_0 = i \\), and write \\( \\operatorname{Im} h \\) explicitly in terms of \\( x \\) and \\( y \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["level line", "steepest descent path", "Im h constant"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall why level lines matter.", workingLatex: "\\text{Steepest paths: } \\operatorname{Im} h = \\text{const}.", explanation: "Steepest-descent and steepest-ascent paths are level lines of \\( \\operatorname{Im} h \\) (equivalently, lines of steepest change in \\( \\operatorname{Re} h \\)), so we must separate \\( h \\) into real and imaginary parts." },
        { stepNumber: 2, description: "Expand the cube by the binomial theorem.", workingLatex: "(x+iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3.", explanation: "Write out all four binomial terms before simplifying the powers of \\( i \\)." },
        { stepNumber: 3, description: "Simplify each power of \\( i \\).", workingLatex: "3x(iy)^2 = -3xy^2, \\qquad (iy)^3 = -iy^3.", explanation: "Use \\( i^2 = -1 \\) so the third term becomes \\( -3xy^2 \\), and \\( i^3 = -i \\) so the fourth becomes \\( -iy^3 \\)." },
        { stepNumber: 4, description: "Collect the cube into real and imaginary parts.", workingLatex: "t^3 = (x^3 - 3xy^2) + i(3x^2 y - y^3).", explanation: "Group the purely real terms and the terms carrying \\( i \\). We only need the imaginary part for the level line." },
        { stepNumber: 5, description: "Take the imaginary part of the cube.", workingLatex: "\\operatorname{Im}(t^3) = 3x^2 y - y^3.", explanation: "Read off the imaginary part. The real part \\( x^3 - 3xy^2 \\) is not needed for the level-line equation." },
        { stepNumber: 6, description: "Take the imaginary part of the linear term.", workingLatex: "\\operatorname{Im}(t) = y.", explanation: "The first term of the phase, \\( t = x+iy \\), contributes its imaginary part \\( y \\)." },
        { stepNumber: 7, description: "Form the imaginary part of the phase.", workingLatex: "\\operatorname{Im} h = y + \\tfrac13(3x^2 y - y^3).", explanation: "Add \\( \\operatorname{Im} t = y \\) to \\( \\tfrac13 \\) of the cube's imaginary part." },
        { stepNumber: 8, description: "Simplify.", workingLatex: "\\operatorname{Im} h = y + x^2 y - \\tfrac13 y^3.", explanation: "Multiply out the \\( \\tfrac13 \\): \\( \\tfrac13\\cdot 3x^2 y = x^2 y \\) and \\( \\tfrac13\\cdot(-y^3) = -\\tfrac13 y^3 \\)." },
        { stepNumber: 9, description: "Factor out \\( y \\).", workingLatex: "\\operatorname{Im} h = y\\big(x^2 - \\tfrac13 y^2 + 1\\big).", explanation: "Pulling the common factor \\( y \\) out displays the level lines cleanly — note one branch is \\( y=0 \\) (the real axis) and the rest come from the bracket." },
        { stepNumber: 10, description: "Substitute the saddle coordinates.", workingLatex: "t_0 = i \\;\\Rightarrow\\; x=0,\\ y=1.", explanation: "The saddle \\( t_0=i \\) corresponds to \\( x=0, y=1 \\); substitute these to test the level value." },
        { stepNumber: 11, description: "Check the saddle value.", workingLatex: "\\operatorname{Im} h(i) = 1\\cdot(0 - \\tfrac13 + 1) = \\tfrac23.", explanation: "This gives \\( \\tfrac23 \\), which matches \\( \\operatorname{Im}\\tfrac{2i}{3} \\). The steepest-descent and steepest-ascent lines through \\( t_0 \\) are the two branches of \\( y(x^2 - \\tfrac13 y^2 + 1) = \\tfrac23 \\)." },
      ],
      finalAnswer: "\\( \\operatorname{Im} h = y\\big(x^2 - \\tfrac13 y^2 + 1\\big) \\), equal to \\( \\tfrac23 \\) at \\( t_0=i \\).",
    },
  },
  {
    id: "am7a-010",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Let \\( h(z) = z - 2z^{1/2} \\) (principal branch) with saddle \\( z_0 = 1 \\). Verify that the parametrised curve \\( z_+(\\tau) = (1 + i\\tau)^2,\\ \\tau \\ge 0 \\), is a steepest-descent path by showing \\( h\\big(z_+(\\tau)\\big) = -1 - \\tau^2 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent path", "branch cut", "parametrisation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Take the square root on the curve.", workingLatex: "z_+(\\tau) = (1 + i\\tau)^2 \\;\\implies\\; z_+^{1/2} = 1 + i\\tau.", explanation: "Choosing the principal root: for \\( \\tau \\ge 0 \\) the point \\( 1 + i\\tau \\) lies in the right half-plane \\( (\\operatorname{Re} > 0) \\), so it is the principal value of \\( z_+^{1/2} \\). This is the key sign choice — taking \\( -(1+i\\tau) \\) would land on the wrong branch." },
        { stepNumber: 2, description: "Square out the curve term by term.", workingLatex: "z_+(\\tau) = 1 + 2(1)(i\\tau) + (i\\tau)^2.", explanation: "Apply \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a=1, b=i\\tau \\), before simplifying \\( (i\\tau)^2 \\)." },
        { stepNumber: 3, description: "Simplify the squared term.", workingLatex: "z_+(\\tau) = 1 + 2i\\tau - \\tau^2 = (1 - \\tau^2) + 2i\\tau.", explanation: "Use \\( (i\\tau)^2 = i^2\\tau^2 = -\\tau^2 \\). Group into real and imaginary parts; we will substitute this together with the root into \\( h \\)." },
        { stepNumber: 4, description: "Write down the two pieces of the phase.", workingLatex: "z_+ = (1 - \\tau^2) + 2i\\tau, \\qquad 2z_+^{1/2} = 2(1 + i\\tau) = 2 + 2i\\tau.", explanation: "Assemble the two ingredients of \\( h = z - 2z^{1/2} \\) separately so the subtraction is clear." },
        { stepNumber: 5, description: "Substitute into the phase.", workingLatex: "h(z_+) = z_+ - 2z_+^{1/2} = (1 - \\tau^2 + 2i\\tau) - (2 + 2i\\tau).", explanation: "Insert the curve and its principal root into \\( h(z) = z - 2z^{1/2} \\), ready to collect terms." },
        { stepNumber: 6, description: "Group the real terms.", workingLatex: "\\operatorname{Re}: \\quad (1 - \\tau^2) - 2 = -1 - \\tau^2.", explanation: "Collect the real contributions: the curve gives \\( 1-\\tau^2 \\) and the root subtracts \\( 2 \\)." },
        { stepNumber: 7, description: "Group the imaginary terms.", workingLatex: "\\operatorname{Im}: \\quad 2\\tau - 2\\tau = 0.", explanation: "The imaginary parts \\( +2i\\tau \\) (from the curve) and \\( -2i\\tau \\) (from the root) cancel exactly." },
        { stepNumber: 8, description: "State the value of the phase.", workingLatex: "h(z_+) = -1 - \\tau^2.", explanation: "Combining: \\( h \\) is purely real along the curve, equal to \\( -1-\\tau^2 \\). The exact cancellation of imaginary parts is the whole point." },
        { stepNumber: 9, description: "Confirm \\( \\operatorname{Im} h \\) is constant.", workingLatex: "\\operatorname{Im} h(z_+) = 0 = \\operatorname{Im} h(z_0).", explanation: "\\( \\operatorname{Im} h \\) is identically \\( 0 \\) along the curve, matching its value at the saddle \\( z_0=1 \\) (where \\( h(1)=-1 \\) is real): so the curve is a level line of \\( \\operatorname{Im} h \\), a necessary condition for a steepest path." },
        { stepNumber: 10, description: "Check \\( \\operatorname{Re} h \\) decreases.", workingLatex: "\\frac{d}{d\\tau}\\operatorname{Re} h = \\frac{d}{d\\tau}(-1-\\tau^2) = -2\\tau < 0 \\quad(\\tau>0).", explanation: "\\( \\operatorname{Re} h \\) strictly decreases as \\( \\tau \\) grows away from the saddle." },
        { stepNumber: 11, description: "Conclude it is descent.", workingLatex: "|e^{kh}| = e^{k\\operatorname{Re} h} = e^{-k(1+\\tau^2)} \\downarrow 0.", explanation: "The integrand modulus decays away from the saddle, so this is a genuine steepest-DESCENT path, not the ascent path (along which \\( \\operatorname{Re} h \\) would increase)." },
      ],
      finalAnswer: "\\( h(z_+(\\tau)) = -1 - \\tau^2 \\): \\( \\operatorname{Im} h \\) constant, \\( \\operatorname{Re} h \\) decreasing, so steepest descent.",
    },
  },
  {
    id: "am7a-011",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For \\( h(z) = z - 2z^{1/2} \\) with saddle \\( z_0 = 1 \\), the two steepest-descent paths are \\( z_\\pm(\\tau) = 1 - \\tau^2 \\pm 2i\\tau,\\ \\tau \\ge 0 \\). Show they form the two halves of a single parabola and find its equation in real form.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent path", "parabola", "real form"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the branches in components.", workingLatex: "z_\\pm(\\tau) = (1 - \\tau^2) \\pm 2i\\tau, \\qquad z = x+iy.", explanation: "Separate each branch into its real and imaginary parts so we can extract \\( x(\\tau) \\) and \\( y(\\tau) \\)." },
        { stepNumber: 2, description: "Read off the real coordinate.", workingLatex: "x = 1 - \\tau^2.", explanation: "Both branches have the same \\( x(\\tau) = 1 - \\tau^2 \\); this is the part shared by the two halves." },
        { stepNumber: 3, description: "Read off the imaginary coordinate.", workingLatex: "y = \\pm 2\\tau.", explanation: "The two branches differ only by the sign of \\( y \\), so together they are symmetric about the real axis." },
        { stepNumber: 4, description: "Solve the \\( y \\)-relation for \\( \\tau \\).", workingLatex: "y = \\pm 2\\tau \\;\\implies\\; \\tau = \\frac{|y|}{2}.", explanation: "Invert \\( y = \\pm 2\\tau \\); using \\( |y| \\) covers both sign choices at once." },
        { stepNumber: 5, description: "Square to eliminate the sign.", workingLatex: "\\tau^2 = \\frac{|y|^2}{4} = \\frac{y^2}{4}.", explanation: "Squaring removes the \\( \\pm \\) sign entirely; both halves then satisfy the same equation, confirming they are one curve." },
        { stepNumber: 6, description: "Substitute into the \\( x \\)-relation.", workingLatex: "x = 1 - \\frac{y^2}{4}.", explanation: "Replace \\( \\tau^2 \\) in \\( x = 1 - \\tau^2 \\) by \\( y^2/4 \\)." },
        { stepNumber: 7, description: "Rearrange to isolate \\( y^2 \\).", workingLatex: "\\frac{y^2}{4} = 1 - x \\;\\implies\\; y^2 = 4(1 - x).", explanation: "Multiply up and isolate \\( y^2 \\). This is the standard form of a parabola." },
        { stepNumber: 8, description: "Identify the vertex.", workingLatex: "y = 0 \\;\\Rightarrow\\; x = 1: \\quad \\text{vertex } (1,0) = z_0.", explanation: "Setting \\( y=0 \\) gives \\( x=1 \\): the vertex sits exactly at the saddle \\( z_0=1 \\), as a steepest-descent path through a saddle must." },
        { stepNumber: 9, description: "Identify the opening direction.", workingLatex: "x = 1 - \\tfrac{y^2}{4} \\le 1, \\qquad x\\to-\\infty \\text{ as } |y|\\to\\infty.", explanation: "Since \\( x\\le 1 \\) always and decreases as \\( |y| \\) grows, the parabola opens leftward (toward decreasing \\( \\operatorname{Re} z \\))." },
        { stepNumber: 10, description: "State the curve and its geometry.", workingLatex: "y^2 = 4(1 - x) \\quad (\\text{leftward parabola, vertex at } z_0=1).", explanation: "The two descent half-branches \\( z_\\pm \\) join smoothly into a single leftward-opening parabola through the saddle — the full steepest-descent contour.", mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-2.6, 2.6]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[-3.3,0]} point2={[1,0]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.4,-0.5]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.7,2.3]} tex="\\text{steepest descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-2.2,0.35]} tex="\\text{ascent}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.5,2.45]} tex="\\operatorname{Im}z" />
</Mafs>` },
      ],
      finalAnswer: "\\( y^2 = 4(1 - x) \\) (vertex at the saddle \\( z_0 = 1 \\)).",
    },
  },
  {
    id: "am7a-012",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The phase \\( h(t) = i(t + t^2) \\) arises in \\( \\int_0^1 t^{-1/2} e^{i\\lambda(t+t^2)}\\,dt \\). Find the saddle point of \\( h \\) and explain why it does not lie on the integration range \\( (0,1) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point", "endpoint contributions"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note the analytic continuation.", workingLatex: "h(t) = i(t + t^2), \\quad t \\in \\mathbb{C}.", explanation: "Even though the integral is over a real interval, the saddle method works with the analytic continuation of \\( h \\) into the complex \\( t \\)-plane, where the saddles live." },
        { stepNumber: 2, description: "Differentiate the bracket.", workingLatex: "\\tfrac{d}{dt}(t + t^2) = 1 + 2t.", explanation: "Differentiate the inner quadratic term by term: \\( t\\to1 \\) and \\( t^2\\to 2t \\)." },
        { stepNumber: 3, description: "Reinstate the constant factor.", workingLatex: "h'(t) = i(1 + 2t).", explanation: "The constant \\( i \\) rides along the differentiation, multiplying the bracket." },
        { stepNumber: 4, description: "Set the derivative to zero.", workingLatex: "i(1 + 2t) = 0.", explanation: "Impose the stationarity condition that defines the saddle." },
        { stepNumber: 5, description: "Divide out the non-zero factor.", workingLatex: "i \\neq 0 \\;\\implies\\; 1 + 2t = 0.", explanation: "Since \\( i \\neq 0 \\), the bracket must vanish; this is the linear equation for the saddle." },
        { stepNumber: 6, description: "Locate the saddle.", workingLatex: "t_0 = -\\tfrac12.", explanation: "Solving \\( 1 + 2t = 0 \\). The single saddle sits at \\( t_0 = -\\tfrac12 \\), on the negative real axis." },
        { stepNumber: 7, description: "Compare with the range.", workingLatex: "t_0 = -\\tfrac12 \\notin (0,1).", explanation: "Because the saddle lies outside \\( (0,1) \\), it gives no interior contribution. The asymptotics are instead governed by the endpoints \\( t=0 \\) and \\( t=1 \\), reached by steepest-descent paths emanating from each endpoint." },
        { stepNumber: 8, description: "Evaluate the phase at the lower endpoint.", workingLatex: "h(0) = i(0 + 0) = 0.", explanation: "At \\( t=0 \\) the phase vanishes." },
        { stepNumber: 9, description: "Evaluate the phase at the upper endpoint.", workingLatex: "h(1) = i(1+1) = 2i.", explanation: "At \\( t=1 \\) the phase is \\( 2i \\). Both endpoint values are purely imaginary, so neither endpoint is exponentially dominant; their relative size is set by oscillation, not by decay." },
        { stepNumber: 10, description: "Record the curvature.", workingLatex: "h''(t) = \\tfrac{d}{dt}\\big[i(1+2t)\\big] = 2i.", explanation: "The constant curvature \\( h'' = 2i \\) sets the descent direction at each endpoint; the endpoint with the more singular amplitude (\\( t^{-1/2} \\) at \\( t=0 \\)) needs its own contour treatment, done in a later problem." },
      ],
      finalAnswer: "Saddle at \\( t_0 = -\\tfrac12 \\), outside \\( (0,1) \\); endpoints dominate.",
    },
  },
  {
    id: "am7a-013",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For \\( h(t) = i(t + t^2) \\), \\( t = x+iy \\), find the steepest-descent path through the endpoint \\( t = 0 \\) (the level line \\( \\operatorname{Im} h = 0 \\) on which \\( \\operatorname{Re} h \\) decreases), and give its direction at \\( t = 0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent path", "endpoint", "level line"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Square the complex variable.", workingLatex: "t^2 = (x+iy)^2 = x^2 + 2ixy + (iy)^2.", explanation: "Expand \\( (x+iy)^2 \\) by the binomial rule, before simplifying the last term." },
        { stepNumber: 2, description: "Simplify the squared term.", workingLatex: "t^2 = x^2 - y^2 + 2ixy.", explanation: "Use \\( (iy)^2 = -y^2 \\). Separating real and imaginary parts is the first step to splitting \\( h \\)." },
        { stepNumber: 3, description: "Add the linear term.", workingLatex: "t + t^2 = (x + x^2 - y^2) + i(y + 2xy).", explanation: "Add \\( t = x + iy \\) to \\( t^2 \\) and group real and imaginary parts, before multiplying through by the leading \\( i \\)." },
        { stepNumber: 4, description: "Multiply out the leading \\( i \\).", workingLatex: "h = i(x + x^2 - y^2) + i^2(y + 2xy).", explanation: "Distribute the \\( i \\) over the bracket; the second term picks up \\( i\\cdot i = i^2 \\)." },
        { stepNumber: 5, description: "Use \\( i^2 = -1 \\).", workingLatex: "h = -(y + 2xy) + i(x + x^2 - y^2).", explanation: "Multiplying by \\( i \\) swaps real and imaginary parts, with a sign change on what was the imaginary part." },
        { stepNumber: 6, description: "Read off the real part.", workingLatex: "\\operatorname{Re} h = -(y + 2xy).", explanation: "The real part of \\( h \\); once \\( \\lambda \\) is absorbed it controls the modulus \\( |e^{\\lambda h}| = e^{\\lambda\\operatorname{Re} h} \\), i.e. the growth or decay of the integrand." },
        { stepNumber: 7, description: "Read off the imaginary part.", workingLatex: "\\operatorname{Im} h = x + x^2 - y^2.", explanation: "The imaginary part of \\( h \\); steepest paths are its level lines." },
        { stepNumber: 8, description: "Impose the level-line condition through the origin.", workingLatex: "\\operatorname{Im} h = x + x^2 - y^2 = 0 \\quad (\\text{since } \\operatorname{Im} h(0)=0).", explanation: "Steepest paths keep \\( \\operatorname{Im} h \\) fixed at its endpoint value, here \\( 0 \\). This conic passes through the origin, as it must." },
        { stepNumber: 9, description: "Linearise near the origin.", workingLatex: "x^2 \\ll x \\ \\text{near } 0 \\;\\Rightarrow\\; x \\approx y^2.", explanation: "Near \\( t=0 \\) the quadratic term \\( x^2 \\) is negligible against the linear \\( x \\), leaving \\( x \\approx y^2 \\)." },
        { stepNumber: 10, description: "Read off the exit direction.", workingLatex: "x \\approx y^2 \\to 0 \\ \\text{faster than } y \\;\\Rightarrow\\; \\text{leaves along } x=0\\ (\\phi=\\tfrac\\pi2).", explanation: "Since \\( x \\sim y^2 \\to 0 \\) faster than \\( y \\), the descent path leaves the origin vertically, tangent to the imaginary axis." },
        { stepNumber: 11, description: "Check it is descent, not ascent.", workingLatex: "\\operatorname{Re} h = -y(1 + 2x) \\approx -y < 0 \\quad (y > 0).", explanation: "Along the vertical exit \\( \\operatorname{Re} h \\approx -y \\) decreases as \\( y \\) grows, so the integrand decays — confirming descent into the upper half-plane rather than ascent." },
      ],
      finalAnswer: "Path \\( x + x^2 - y^2 = 0 \\); leaves \\( t=0 \\) vertically (\\( \\phi = \\tfrac{\\pi}{2} \\)).",
    },
  },
  {
    id: "am7a-014",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "The phase \\( h(z) = k(z - 2z^{1/2}) \\) appears with \\( k\\to+\\infty \\). At the saddle \\( z_0 = 1 \\), compute the leading steepest-descent contribution to \\( \\displaystyle\\int_C \\frac{e^{h(z)}}{z - c}\\,dz \\) (amplitude \\( g(z) = 1/(z-c) \\), \\( c \\) real, \\( c<1 \\)).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point method", "leading term", "amplitude"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rescale the phase to expose \\( k \\).", workingLatex: "h = k\\,\\tilde h, \\qquad \\tilde h = z - 2z^{1/2}.", explanation: "Writing \\( h = k\\tilde h \\) puts the integral in the standard form \\( \\int g\\,e^{k\\tilde h}\\,dz \\), so the simple-saddle formula with large parameter \\( k \\) applies directly." },
        { stepNumber: 2, description: "Record the phase value at the saddle.", workingLatex: "\\tilde h(1) = 1 - 2 = -1.", explanation: "From earlier work the saddle value is \\( \\tilde h(1) = -1 \\); it gives the exponential scale \\( e^{-k} \\)." },
        { stepNumber: 3, description: "Record the curvature at the saddle.", workingLatex: "\\tilde h''(1) = \\tfrac12.", explanation: "Also from earlier work; this real positive curvature sets both the width and the descent direction." },
        { stepNumber: 4, description: "Evaluate the amplitude at the saddle.", workingLatex: "g(1) = \\frac{1}{1 - c}.", explanation: "Since \\( c<1 \\), the amplitude \\( g(1) = 1/(1-c) \\) is finite — the saddle is not on the pole, so the simple-saddle formula applies without modification." },
        { stepNumber: 5, description: "Find the descent direction.", workingLatex: "\\alpha = \\arg \\tilde h''(1) = 0 \\;\\implies\\; \\phi = \\frac{\\pi - \\alpha}{2} = \\frac{\\pi}{2}.", explanation: "Since \\( \\tilde h''(1)>0 \\), the descent path crosses the saddle vertically (\\( \\phi = \\pi/2 \\)), matching the parabola \\( y^2 = 4(1-x) \\) at its vertex." },
        { stepNumber: 6, description: "Write the saddle-point formula.", workingLatex: "I(k) \\sim g(z_0)\\,e^{k\\tilde h(z_0)}\\sqrt{\\frac{2\\pi}{k\\,|\\tilde h''(z_0)|}}\\;e^{i\\phi}.", explanation: "The standard simple-saddle result; \\( e^{i\\phi} \\) is the tangent direction of the descent contour and supplies the correct phase. A common slip is to drop this \\( e^{i\\phi} \\) factor." },
        { stepNumber: 7, description: "Evaluate the exponential factor.", workingLatex: "e^{k\\tilde h(z_0)} = e^{-k}.", explanation: "Substituting \\( \\tilde h(1) = -1 \\). This is the dominant scale of the answer." },
        { stepNumber: 8, description: "Evaluate the width factor.", workingLatex: "\\sqrt{\\frac{2\\pi}{k\\cdot\\tfrac12}} = \\sqrt{\\frac{4\\pi}{k}} = \\frac{2\\sqrt{\\pi}}{\\sqrt{k}}.", explanation: "With \\( |\\tilde h''| = \\tfrac12 \\), the \\( \\tfrac12 \\) in the denominator turns \\( 2\\pi \\) into \\( 4\\pi \\), and \\( \\sqrt{4\\pi} = 2\\sqrt\\pi \\)." },
        { stepNumber: 9, description: "Evaluate the phase factor.", workingLatex: "e^{i\\phi} = e^{i\\pi/2} = i.", explanation: "The descent phase \\( e^{i\\pi/2} \\) is just \\( i \\); this is the tangent to the parabola at its vertex, pointing up the imaginary axis." },
        { stepNumber: 10, description: "Substitute everything.", workingLatex: "I(k) \\sim \\frac{1}{1-c}\\cdot e^{-k}\\cdot\\frac{2\\sqrt{\\pi}}{\\sqrt{k}}\\cdot i = \\frac{2i\\sqrt{\\pi}}{(1-c)\\sqrt{k}}\\,e^{-k}.", explanation: "Assemble \\( g(1) \\), \\( e^{-k} \\), the width factor and the phase \\( i \\). The pole at \\( c<1 \\) is not crossed when deforming, so only the saddle contributes." },
      ],
      finalAnswer: "\\( I(k) \\sim \\dfrac{2i\\sqrt{\\pi}}{(1-c)\\sqrt{k}}\\,e^{-k} \\)",
      canonicalAnswer: "2*i*sqrt(pi)/((1-c)*sqrt(k))*exp(-k)",
    },
  },
  {
    id: "am7a-015",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For \\( h(t) = -t^4/4 + t^2/2 \\), find all saddle points and classify the steepest-descent direction at each (the central saddle versus the two outer saddles).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point", "multiple saddles", "descent direction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the quartic term.", workingLatex: "\\tfrac{d}{dt}\\big(-\\tfrac14 t^4\\big) = -t^3.", explanation: "Apply the power rule: \\( -\\tfrac14\\cdot 4 t^3 = -t^3 \\)." },
        { stepNumber: 2, description: "Differentiate the quadratic term.", workingLatex: "\\tfrac{d}{dt}\\big(\\tfrac12 t^2\\big) = t.", explanation: "\\( \\tfrac12\\cdot 2t = t \\). Assembling, \\( h'(t) = -t^3 + t \\). A quartic phase gives a cubic derivative with three roots, hence three saddles." },
        { stepNumber: 3, description: "Factor the derivative.", workingLatex: "h'(t) = -t^3 + t = -t(t^2 - 1).", explanation: "Pull out \\( -t \\). The factored form exposes the roots without solving a cubic blindly." },
        { stepNumber: 4, description: "Solve for the saddles.", workingLatex: "-t(t^2 - 1) = 0 \\;\\implies\\; t_0 = 0,\\ \\pm 1.", explanation: "The factored form gives the roots immediately: \\( t=0 \\) from the leading factor and \\( t=\\pm1 \\) from \\( t^2 - 1 = 0 \\)." },
        { stepNumber: 5, description: "Differentiate again for the curvature.", workingLatex: "h''(t) = -3t^2 + 1.", explanation: "Differentiate \\( h'(t) = -t^3 + t \\). We evaluate this at each saddle to get the descent directions." },
        { stepNumber: 6, description: "Curvature at the central saddle.", workingLatex: "h''(0) = 1 = e^{i\\cdot 0}, \\qquad \\alpha = 0.", explanation: "At \\( t_0 = 0 \\), \\( h'' = 1 > 0 \\), so its argument is \\( \\alpha = 0 \\)." },
        { stepNumber: 7, description: "Descent direction at the centre.", workingLatex: "\\phi = \\frac{\\pi - 0}{2} = \\frac{\\pi}{2}.", explanation: "From \\( 2\\phi + \\alpha = \\pi \\) with \\( \\alpha = 0 \\): the descent direction is vertical (along the imaginary axis), so on the real axis \\( t=0 \\) is a local maximum of \\( \\operatorname{Re} h \\) (an ascent crossing)." },
        { stepNumber: 8, description: "Curvature at the outer saddles.", workingLatex: "h''(\\pm 1) = -3(1) + 1 = -2 = 2e^{i\\pi}, \\qquad \\alpha = \\pi.", explanation: "At \\( t_0 = \\pm 1 \\), \\( h'' = -2 < 0 \\), so the argument is \\( \\alpha = \\pi \\)." },
        { stepNumber: 9, description: "Descent direction at the outer saddles.", workingLatex: "\\phi = \\frac{\\pi - \\pi}{2} = 0.", explanation: "The descent direction is horizontal (along the real axis): the outer saddles are minima of \\( \\operatorname{Re} h \\) on the real line, genuine descent crossings." },
        { stepNumber: 10, description: "Summarise.", workingLatex: "\\begin{aligned} t_0 = 0:&\\ \\text{descent vertical }(\\phi=\\tfrac\\pi2),\\\\ t_0 = \\pm1:&\\ \\text{descent horizontal }(\\phi=0).\\end{aligned}", explanation: "The central saddle is a 'valley running up-down', the outer saddles 'valleys running left-right'; on the real axis the central point is a local maximum of \\( \\operatorname{Re} h \\) (ascent) while the outer points are minima (descent)." },
      ],
      finalAnswer: "\\( t_0 = 0 \\) (descent \\( \\phi=\\tfrac\\pi2 \\)); \\( t_0 = \\pm1 \\) (descent \\( \\phi=0 \\)).",
    },
  },
  {
    id: "am7a-016",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "At a simple saddle \\( z_0 \\) the curvature is \\( h''(z_0) = 1 + i \\). Find the steepest-descent directions and the steepest-ascent directions, expressing each angle in radians.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["descent direction", "ascent direction", "argument"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Find the modulus of the curvature.", workingLatex: "|h''(z_0)| = \\sqrt{1^2 + 1^2} = \\sqrt{2}.", explanation: "Compute the modulus of \\( 1+i \\). It sets the width of the saddle but not the orientation." },
        { stepNumber: 2, description: "Find the argument of the curvature.", workingLatex: "\\arg(1+i) = \\arctan\\tfrac{1}{1} = \\tfrac{\\pi}{4}.", explanation: "Since \\( 1+i \\) lies in the first quadrant with equal real and imaginary parts, its argument is \\( \\pi/4 \\)." },
        { stepNumber: 3, description: "Write the curvature in polar form.", workingLatex: "h''(z_0) = \\sqrt2\\,e^{i\\pi/4}, \\qquad \\alpha = \\tfrac{\\pi}{4}.", explanation: "Combine modulus and argument. Only \\( \\alpha \\) is needed to orient the descent/ascent lines." },
        { stepNumber: 4, description: "Write the descent condition.", workingLatex: "2\\phi + \\alpha = \\pi.", explanation: "Descent requires the quadratic \\( \\tfrac12 h''(z_0)(z-z_0)^2 \\) to be real and negative, so its argument is \\( \\pi \\)." },
        { stepNumber: 5, description: "Solve for the first descent direction.", workingLatex: "\\phi = \\frac{\\pi - \\pi/4}{2} = \\frac{3\\pi}{8}.", explanation: "Subtract \\( \\alpha = \\pi/4 \\) from \\( \\pi \\), leaving \\( 3\\pi/4 \\), then halve." },
        { stepNumber: 6, description: "Add the opposite descent ray.", workingLatex: "\\frac{3\\pi}{8} + \\pi = \\frac{11\\pi}{8}.", explanation: "The second descent direction is the opposite ray, \\( \\pi \\) further round on the same straight line." },
        { stepNumber: 7, description: "Write the ascent condition.", workingLatex: "2\\phi + \\alpha = 0.", explanation: "Ascent requires the quadratic to be real and positive, argument \\( 0 \\)." },
        { stepNumber: 8, description: "Solve for the first ascent direction.", workingLatex: "\\phi = \\frac{0 - \\pi/4}{2} = -\\frac{\\pi}{8}.", explanation: "Subtract \\( \\alpha = \\pi/4 \\) and halve; a negative angle is fine, measured clockwise from the real axis." },
        { stepNumber: 9, description: "Add the opposite ascent ray.", workingLatex: "-\\frac{\\pi}{8} + \\pi = \\frac{7\\pi}{8}.", explanation: "The opposite end of the ascent line." },
        { stepNumber: 10, description: "Sanity-check the orthogonality.", workingLatex: "\\tfrac{3\\pi}{8} - \\big(-\\tfrac{\\pi}{8}\\big) = \\tfrac{\\pi}{2}.", explanation: "The ascent lines bisect the descent lines, sitting at \\( 90^\\circ \\) to them — a quick sanity check on the arithmetic.", mafs: `<Mafs viewBox={{ x: [-2.4, 2.4], y: [-1.8, 1.8], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Line.Segment point1={[-0.65,-1.57]} point2={[0.65,1.57]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[-1.57,0.65]} point2={[1.57,-0.65]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Vector tail={[0,0]} tip={[0.46,1.11]} color="var(--mafs-fg-green)" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.25,1.45]} tex="\\phi=\\tfrac{3\\pi}{8}" color="var(--mafs-fg-green)" />
  <LaTeX at={[1.5,-1.0]} tex="\\text{ascent}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.15,-0.3]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.55,1.6]} tex="\\operatorname{Im}z" />
</Mafs>` },
      ],
      finalAnswer: "Descent: \\( \\tfrac{3\\pi}{8}, \\tfrac{11\\pi}{8} \\); ascent: \\( -\\tfrac{\\pi}{8}, \\tfrac{7\\pi}{8} \\).",
    },
  },
  {
    id: "am7a-017",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 17",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Consider \\( \\int_0^\\infty \\exp\\!\\big(ix(\\tfrac13 t^3 + t)\\big)\\,dt \\) with \\( x\\to+\\infty \\). Show the phase has no saddle on the path of integration, identify where the saddles are, and state which feature of the integral then governs the leading asymptotics.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point", "endpoint dominance"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Factor the large parameter out of the exponent.", workingLatex: "ix\\big(\\tfrac13 t^3 + t\\big) = x\\,h(t).", explanation: "Write the exponent as \\( x \\) times a fixed phase so the saddle-point method applies with large parameter \\( x \\)." },
        { stepNumber: 2, description: "Identify the phase.", workingLatex: "h(t) = i\\big(\\tfrac13 t^3 + t\\big).", explanation: "The phase \\( h \\) carries the factor \\( i \\); its stationary points are the saddles of the method." },
        { stepNumber: 3, description: "Differentiate the bracket.", workingLatex: "\\tfrac{d}{dt}\\big(\\tfrac13 t^3 + t\\big) = t^2 + 1.", explanation: "Differentiate term by term: \\( \\tfrac13 t^3\\to t^2 \\) and \\( t\\to 1 \\)." },
        { stepNumber: 4, description: "Reinstate the constant factor.", workingLatex: "h'(t) = i(t^2 + 1).", explanation: "The constant \\( i \\) multiplies the differentiated bracket." },
        { stepNumber: 5, description: "Set the derivative to zero.", workingLatex: "i(t^2 + 1) = 0 \\;\\implies\\; t^2 + 1 = 0 \\;\\implies\\; t^2 = -1.", explanation: "Since \\( i \\neq 0 \\), the bracket must vanish, giving \\( t^2 = -1 \\)." },
        { stepNumber: 6, description: "Locate the saddles.", workingLatex: "t = \\pm i.", explanation: "The saddles are at \\( \\pm i \\), off the real axis — neither lies on the contour \\( [0,\\infty) \\)." },
        { stepNumber: 7, description: "Check the contour.", workingLatex: "\\pm i \\notin [0,\\infty).", explanation: "With no interior saddle, the rapid oscillation along the ray makes the integrand self-cancel except near the boundary; only the endpoint \\( t=0 \\) fails to cancel." },
        { stepNumber: 8, description: "Note the lower endpoint phase.", workingLatex: "h(0) = 0.", explanation: "At the lower endpoint the phase vanishes — there is no oscillation to cancel the contribution there." },
        { stepNumber: 9, description: "Note the upper endpoint behaviour.", workingLatex: "t\\to+\\infty: \\ e^{ix(\\frac13 t^3 + t)} \\ \\text{oscillates ever faster}.", explanation: "On a contour rotated into the upper half-plane the upper limit contributes nothing because of decay; the increasingly rapid oscillation kills it." },
        { stepNumber: 10, description: "Conclude.", workingLatex: "I(x) \\sim \\text{endpoint contribution at } t=0 = O\\!\\left(\\tfrac1x\\right).", explanation: "Integration by parts (or a steepest-descent contour rotated off \\( t=0 \\)) gives a leading term \\( i/x \\): the asymptotics are endpoint-governed, not saddle-governed, because the saddles are not reachable without leaving the valley structure of the contour." },
      ],
      finalAnswer: "Saddles at \\( t = \\pm i \\) (off-contour); leading behaviour is the endpoint contribution \\( \\sim i/x \\).",
    },
  },
  {
    id: "am7a-018",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "At a saddle \\( z_0 \\) the two candidate descent tangents are \\( e^{i\\pi/4} \\) and \\( e^{i5\\pi/4} \\). If the contour must run from a point below-right of \\( z_0 \\) to a point above-left of \\( z_0 \\), state the orientation (the order in which the directions are traversed) and explain the sign choice.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["orientation", "choice of root sign", "descent path"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the descent line is a single straight line.", workingLatex: "\\text{descent set} = \\{z_0 + re^{i\\pi/4} : r\\in\\mathbb{R}\\}.", explanation: "Both candidate angles satisfy the same descent condition \\( 2\\phi+\\alpha=\\pi \\) modulo \\( \\pi \\), so they are the two ends of one straight line through the saddle, not two different lines." },
        { stepNumber: 2, description: "Identify the first tangent ray.", workingLatex: "\\hat{e}_1 = e^{i\\pi/4} \\ (\\text{up-right, into the first quadrant}).", explanation: "\\( e^{i\\pi/4} \\) has equal positive real and imaginary parts, so it points up and to the right, into the first quadrant." },
        { stepNumber: 3, description: "Identify the second tangent ray.", workingLatex: "\\hat{e}_2 = e^{i5\\pi/4} = -e^{i\\pi/4} \\ (\\text{down-left}).", explanation: "The opposite end is the negative of the first, pointing into the third quadrant. Only the sense (orientation) along the line is still undetermined." },
        { stepNumber: 4, description: "Place the start endpoint.", workingLatex: "\\text{start: below-right of } z_0 \\ \\Rightarrow\\ \\text{in the } -\\hat{e}_1 \\text{ direction (third-quadrant side)}.", explanation: "A point below-right of the saddle, on this line, lies on the \\( \\hat e_2 = -\\hat e_1 \\) side; this is where the contour begins." },
        { stepNumber: 5, description: "Place the end endpoint.", workingLatex: "\\text{end: above-left of } z_0 \\ \\Rightarrow\\ \\text{in the } +\\hat{e}_1 \\text{ direction (first-quadrant side)}.", explanation: "A point above-left lies on the \\( \\hat e_1 \\) side; this is where the contour finishes." },
        { stepNumber: 6, description: "Determine the direction of travel through the saddle.", workingLatex: "\\text{from } -\\hat e_1\\text{-side} \\to +\\hat e_1\\text{-side} \\;\\Rightarrow\\; \\text{travel in the } +\\hat e_1 = e^{i\\pi/4} \\text{ sense}.", explanation: "Moving from the start side to the end side means crossing the saddle while heading up-right; so the whole contour is traversed in the \\( e^{i\\pi/4} \\) sense." },
        { stepNumber: 7, description: "Introduce a real parameter.", workingLatex: "(z - z_0) = \\tau\\,e^{i\\pi/4}.", explanation: "Parametrise the displacement along the descent line by a real \\( \\tau \\); the fixed phase \\( e^{i\\pi/4} \\) is the tangent direction." },
        { stepNumber: 8, description: "Fix the parameter's range.", workingLatex: "\\tau:\\ -\\infty \\to +\\infty.", explanation: "Let \\( \\tau \\) increase from negative to positive, so the contour sweeps from the below-right valley (\\( \\tau<0 \\)) through the saddle (\\( \\tau=0 \\)) to the above-left valley (\\( \\tau>0 \\))." },
        { stepNumber: 9, description: "Identify the implied root sign.", workingLatex: "(z-z_0) = \\tau e^{i\\pi/4} \\;\\Leftrightarrow\\; \\text{taking the } +\\sqrt{} \\text{ of the curvature direction}.", explanation: "Writing the displacement with a positive multiple of \\( e^{i\\pi/4} \\) for \\( \\tau>0 \\) corresponds to choosing the \\( + \\) square root when one solves \\( e^{i2\\phi} = e^{i(\\pi-\\alpha)} \\)." },
        { stepNumber: 10, description: "State the orientation and sign.", workingLatex: "\\text{take } +\\sqrt{}: \\quad (z-z_0) = \\tau e^{i\\pi/4}, \\ \\tau \\text{ increasing}.", explanation: "This choice makes the contour run from the below-right valley to the above-left valley, fixing the overall sign of the saddle contribution. Picking \\( -\\sqrt{} \\) would reverse the orientation and flip the sign." },
      ],
      finalAnswer: "Traverse in the \\( e^{i\\pi/4} \\) sense (\\( \\tau: -\\infty\\to+\\infty \\)); take the \\( + \\) root.",
    },
  },

  // ── Challenge: synoptic / multi-step / starred-level ─────────────────────
  {
    id: "am7a-019",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For \\( f(\\theta) = \\dfrac{1}{2\\pi i}\\displaystyle\\int_C \\exp\\!\\big(\\theta(t+\\tfrac13 t^3)\\big)\\,dt \\) with the path running from the sector \\( -\\tfrac{\\pi}{2}<\\arg t<-\\tfrac{\\pi}{6} \\) to \\( \\tfrac{\\pi}{6}<\\arg t<\\tfrac{\\pi}{2} \\), show that the steepest-descent path through the saddle \\( t=i \\) is \\( x = +\\big(\\tfrac{2+y}{3y}\\big)^{1/2}(y-1) \\) for \\( y>0 \\), justifying the choice of square-root sign.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent path", "choice of root sign", "level line"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the level-line principle.", workingLatex: "\\text{steepest paths through } t=i:\\ \\operatorname{Im} h = \\operatorname{Im} h(i).", explanation: "Both the descent and ascent paths through a saddle keep \\( \\operatorname{Im} h \\) constant at its saddle value; we will pick out the descent branch afterwards." },
        { stepNumber: 2, description: "Expand the cube.", workingLatex: "(x+iy)^3 = x^3 + 3ix^2y - 3xy^2 - iy^3.", explanation: "Binomial expansion using \\( i^2=-1,\\ i^3=-i \\); needed to find \\( \\operatorname{Im} h \\)." },
        { stepNumber: 3, description: "Take the imaginary part of the phase.", workingLatex: "\\operatorname{Im} h = y + \\tfrac13(3x^2 y - y^3) = y\\big(x^2 - \\tfrac13 y^2 + 1\\big).", explanation: "Add \\( \\operatorname{Im} t = y \\) to \\( \\tfrac13 \\) of the cube's imaginary part and factor out \\( y \\), as in am7a-009. Steepest paths are its level lines." },
        { stepNumber: 4, description: "Substitute the saddle coordinates.", workingLatex: "t=i:\\ x=0,\\ y=1.", explanation: "The saddle \\( t=i \\) has \\( x=0, y=1 \\); evaluate the level there." },
        { stepNumber: 5, description: "Evaluate the level at the saddle.", workingLatex: "\\operatorname{Im} h(i) = 1\\cdot(0 - \\tfrac13 + 1) = \\tfrac23.", explanation: "The steepest paths through this saddle are the curve \\( \\operatorname{Im} h = \\tfrac23 \\)." },
        { stepNumber: 6, description: "Write the level-line equation.", workingLatex: "y\\big(x^2 - \\tfrac13 y^2 + 1\\big) = \\tfrac23.", explanation: "Set \\( \\operatorname{Im} h \\) equal to its saddle value. We now solve this for \\( x \\) as a function of \\( y \\)." },
        { stepNumber: 7, description: "Divide by \\( y \\).", workingLatex: "x^2 - \\tfrac13 y^2 + 1 = \\frac{2}{3y}.", explanation: "Legitimate since \\( y>0 \\) on this branch (the path runs into the upper half-plane)." },
        { stepNumber: 8, description: "Isolate \\( x^2 \\).", workingLatex: "x^2 = \\frac{2}{3y} + \\frac{y^2}{3} - 1.", explanation: "Move the other two terms to the right-hand side." },
        { stepNumber: 9, description: "Put over a common denominator.", workingLatex: "x^2 = \\frac{2}{3y} + \\frac{y^3}{3y} - \\frac{3y}{3y}.", explanation: "Rewrite each term with denominator \\( 3y \\): \\( \\tfrac{y^2}{3} = \\tfrac{y^3}{3y} \\) and \\( 1 = \\tfrac{3y}{3y} \\)." },
        { stepNumber: 10, description: "Combine the numerator.", workingLatex: "x^2 = \\frac{2 + y^3 - 3y}{3y}.", explanation: "Add the numerators over the common denominator. We must factor this cubic numerator to extract the branch through the saddle." },
        { stepNumber: 11, description: "Test \\( y=1 \\) as a root.", workingLatex: "y=1:\\ 1^3 - 3(1) + 2 = 0.", explanation: "The numerator vanishes at \\( y=1 \\) — consistent with \\( x=0 \\) at the saddle, where \\( y=1 \\)." },
        { stepNumber: 12, description: "Check it is a double root.", workingLatex: "\\tfrac{d}{dy}(y^3-3y+2)\\big|_{1} = (3y^2-3)\\big|_{1} = 0.", explanation: "The derivative also vanishes at \\( y=1 \\), so \\( y=1 \\) is a double root: \\( (y-1)^2 \\) divides the cubic. This double root reflects the saddle's quadratic tangency." },
        { stepNumber: 13, description: "Divide out the double root.", workingLatex: "y^3 - 3y + 2 = (y-1)^2(y+2).", explanation: "Polynomial division by \\( (y-1)^2 = y^2 - 2y + 1 \\) leaves the linear factor \\( (y+2) \\); check the constant term \\( 1\\cdot 2 = 2 \\)." },
        { stepNumber: 14, description: "Rewrite \\( x^2 \\) factored.", workingLatex: "x^2 = \\frac{(y-1)^2(y+2)}{3y}.", explanation: "The factor \\( (y-1)^2 \\) makes \\( x\\to0 \\) as \\( y\\to1 \\), as it must on the path through the saddle." },
        { stepNumber: 15, description: "Check the radicand is non-negative.", workingLatex: "(y-1)^2 \\ge 0, \\quad \\frac{y+2}{3y} > 0 \\ (y>0).", explanation: "For \\( y>0 \\) both \\( y+2>0 \\) and \\( 3y>0 \\), so the quotient is positive and the square root is real along the whole branch." },
        { stepNumber: 16, description: "Take the square root.", workingLatex: "x = \\pm\\,|y-1|\\sqrt{\\frac{y+2}{3y}}.", explanation: "The \\( \\pm \\) and the absolute value \\( |y-1| \\) must now be fixed by the geometry of the contour." },
        { stepNumber: 17, description: "Use the prescribed end-sector.", workingLatex: "\\text{contour ends in } \\tfrac{\\pi}{6}<\\arg t<\\tfrac{\\pi}{2} \\;\\Rightarrow\\; x>0 \\text{ there}.", explanation: "The path terminates in the upper-right sector, where \\( \\operatorname{Re} t = x>0 \\); this selects the branch on which \\( x>0 \\) for large \\( y \\)." },
        { stepNumber: 18, description: "Check the small-\\( y \\) asymptote.", workingLatex: "y\\to 0^+:\\ x \\sim +\\sqrt{\\tfrac{2}{3y}}\\to +\\infty \\ (\\arg t\\to 0^+).", explanation: "As \\( y\\to0^+ \\) the path runs off to \\( x\\to+\\infty \\), i.e. \\( \\arg t\\to 0 \\) — the lower extreme of the end-sector, confirming the \\( + \\) sign." },
        { stepNumber: 19, description: "Resolve the absolute value.", workingLatex: "x>0 \\Rightarrow |y-1| \\to (y-1)\\ (y>1),\\ -(y-1)\\ (0<y<1) \\text{ to keep } x \\text{ smooth}.", explanation: "Choosing the \\( + \\) root and writing \\( |y-1|=(y-1) \\) where \\( y>1 \\) (with the consistent signed form for \\( 0<y<1 \\)) gives one smooth curve through the saddle." },
        { stepNumber: 20, description: "State the descent branch.", workingLatex: "x = +\\Big(\\frac{2+y}{3y}\\Big)^{1/2}(y-1), \\qquad y>0.", explanation: "This is the steepest path through \\( t=i \\) with the forced sign; the bracket \\( \\tfrac{2+y}{3y} \\) equals \\( \\tfrac{y+2}{3y} \\) above." },
        { stepNumber: 21, description: "Confirm it is descent, not ascent.", workingLatex: "\\operatorname{Re} h \\text{ decreases away from } t=i \\text{ along this branch.}", explanation: "One checks \\( \\operatorname{Re} h \\) decreases away from \\( t=i \\) along it, so it is the steepest-DESCENT path; the mirror sign would give the steepest-ascent path, which the contour must not follow." },
      ],
      finalAnswer: "\\( x = +\\big(\\tfrac{2+y}{3y}\\big)^{1/2}(y-1),\\ y>0 \\) (the \\( + \\) root is forced by the prescribed end-sectors).",
    },
  },
  {
    id: "am7a-020",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Continuing the previous problem, show that the steepest-descent path through the second saddle \\( t=-i \\) is \\( x = -\\big(\\tfrac{y-2}{3y}\\big)^{1/2}(y+1) \\) for \\( y<0 \\), again justifying the root sign.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent path", "second saddle", "choice of root sign"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the conjugate-symmetry principle.", workingLatex: "h(t) = t + \\tfrac13 t^3 \\text{ has real coefficients} \\;\\Rightarrow\\; h(\\bar t) = \\overline{h(t)}.", explanation: "When a function has real Taylor coefficients, conjugating the input conjugates the output; this links the lower saddle to the upper one we already solved." },
        { stepNumber: 2, description: "Use it for the phase value.", workingLatex: "h(-i) = \\overline{h(i)} = \\overline{\\tfrac{2i}{3}} = -\\tfrac{2i}{3}.", explanation: "The lower saddle's phase value is the conjugate of the upper one's." },
        { stepNumber: 3, description: "Take the imaginary part.", workingLatex: "\\operatorname{Im} h(-i) = -\\tfrac23.", explanation: "So the level line through the lower saddle is \\( \\operatorname{Im} h = -\\tfrac23 \\)." },
        { stepNumber: 4, description: "Recall the expression for \\( \\operatorname{Im} h \\).", workingLatex: "\\operatorname{Im} h = y\\big(x^2 - \\tfrac13 y^2 + 1\\big).", explanation: "Same expression as before (am7a-009); only the constant on the right changes." },
        { stepNumber: 5, description: "Write the level-line equation.", workingLatex: "y(x^2 - \\tfrac13 y^2 + 1) = -\\tfrac23.", explanation: "Set \\( \\operatorname{Im} h \\) equal to its value at the lower saddle." },
        { stepNumber: 6, description: "Divide by \\( y \\).", workingLatex: "x^2 - \\tfrac13 y^2 + 1 = \\frac{-2}{3y}.", explanation: "Divide through by \\( y \\); keep \\( y<0 \\) in mind, since the lower saddle sits at \\( y=-1 \\)." },
        { stepNumber: 7, description: "Isolate \\( x^2 \\).", workingLatex: "x^2 = \\frac{-2}{3y} + \\frac{y^2}{3} - 1.", explanation: "Move the remaining terms to the right-hand side." },
        { stepNumber: 8, description: "Put over a common denominator.", workingLatex: "x^2 = \\frac{-2}{3y} + \\frac{y^3}{3y} - \\frac{3y}{3y}.", explanation: "Express each term over \\( 3y \\), exactly as in the upper-saddle calculation." },
        { stepNumber: 9, description: "Combine the numerator.", workingLatex: "x^2 = \\frac{-2 + y^3 - 3y}{3y} = \\frac{y^3 - 3y - 2}{3y}.", explanation: "Add the numerators. Note the constant is now \\( -2 \\), not \\( +2 \\)." },
        { stepNumber: 10, description: "Test \\( y=-1 \\) as a root.", workingLatex: "y=-1:\\ (-1)^3 - 3(-1) - 2 = -1 + 3 - 2 = 0.", explanation: "The numerator vanishes at \\( y=-1 \\), the imaginary coordinate of the lower saddle \\( t=-i \\)." },
        { stepNumber: 11, description: "Check it is a double root.", workingLatex: "\\tfrac{d}{dy}(y^3 - 3y - 2)\\big|_{-1} = (3y^2 - 3)\\big|_{-1} = 0.", explanation: "The derivative also vanishes at \\( y=-1 \\), so \\( (y+1)^2 \\) divides the numerator — the saddle tangency again." },
        { stepNumber: 12, description: "Factor the numerator.", workingLatex: "y^3 - 3y - 2 = (y+1)^2(y-2).", explanation: "Dividing by \\( (y+1)^2 = y^2+2y+1 \\) leaves the linear factor \\( (y-2) \\); check the constant \\( 1\\cdot(-2) = -2 \\)." },
        { stepNumber: 13, description: "Rewrite \\( x^2 \\) factored.", workingLatex: "x^2 = \\frac{(y+1)^2(y-2)}{3y}.", explanation: "The double root at \\( y=-1 \\) marks the saddle \\( t=-i \\) (\\( x=0,y=-1 \\))." },
        { stepNumber: 14, description: "Check the radicand sign for \\( y<0 \\).", workingLatex: "y<0:\\ (y-2)<0,\\ 3y<0 \\;\\Rightarrow\\; \\frac{y-2}{3y} > 0.", explanation: "Two negatives divide to a positive, so the quotient is positive and the square root is real for \\( y<0 \\)." },
        { stepNumber: 15, description: "Take the square root.", workingLatex: "x = \\pm\\,|y+1|\\sqrt{\\frac{y-2}{3y}}.", explanation: "Both factors under the root are handled; the \\( \\pm \\) and \\( |y+1| \\) remain to be fixed." },
        { stepNumber: 16, description: "Rewrite the radicand with \\( |y| \\).", workingLatex: "\\sqrt{\\frac{y-2}{3y}} = \\sqrt{\\frac{2-y}{3|y|}} \\quad (y<0).", explanation: "Using \\( |y| = -y \\) makes the positivity explicit: both \\( 2-y>0 \\) and \\( 3|y|>0 \\)." },
        { stepNumber: 17, description: "Read off the contour's start-sector.", workingLatex: "\\text{contour starts in } -\\tfrac{\\pi}{2}<\\arg t<-\\tfrac{\\pi}{6} \\;\\Rightarrow\\; x>0,\\ y<0.", explanation: "The path begins in the lower-right sector, where \\( x>0 \\) and \\( y<0 \\); we track the connected branch from there through \\( t=-i \\)." },
        { stepNumber: 18, description: "Examine the asymptote near \\( y\\to0^- \\).", workingLatex: "y\\to 0^-:\\ x \\sim \\pm\\sqrt{\\tfrac{-2}{3y}} \\ \\text{large};\\ \\arg t \\to \\pi^- \\text{ or } 0^-.", explanation: "Near \\( y=0^- \\) the path runs off to large \\( |x| \\); matching the start sector (\\( x>0 \\)) selects the sign that keeps the connected branch in the lower-right." },
        { stepNumber: 19, description: "Fix the sign.", workingLatex: "\\text{branch through } t=-i \\text{ with } x>0 \\text{ start} \\;\\Rightarrow\\; \\text{take } -\\text{ root, } |y+1|\\to(y+1).", explanation: "Tracking the connected branch from the start sector through \\( t=-i \\) selects the \\( - \\) sign, with \\( |y+1| \\) handled consistently so the curve is smooth." },
        { stepNumber: 20, description: "State the descent branch.", workingLatex: "x = -\\Big(\\frac{y-2}{3y}\\Big)^{1/2}(y+1), \\qquad y<0.", explanation: "Here \\( \\tfrac{y-2}{3y}>0 \\) for \\( y<0 \\), so the radicand is positive. This is the steepest-DESCENT path." },
        { stepNumber: 21, description: "Note the conjugate symmetry.", workingLatex: "z_-(\\text{path}) = \\overline{z_+(\\text{path})}.", explanation: "The lower branch is the mirror image (complex conjugate) of the \\( t=+i \\) branch from am7a-019; this guarantees the two saddle contributions are complex conjugates, so their sum is real." },
      ],
      finalAnswer: "\\( x = -\\big(\\tfrac{y-2}{3y}\\big)^{1/2}(y+1),\\ y<0 \\) (the \\( - \\) root is forced by the start sector).",
    },
  },
  {
    id: "am7a-021",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Using the two saddles \\( t=\\pm i \\) of \\( h(t) = t+\\tfrac13 t^3 \\) (with \\( h''(\\pm i) = \\pm 2i \\)), apply the saddle-point method to show that \\( f(\\theta) = \\dfrac{1}{2\\pi i}\\displaystyle\\int_C e^{\\theta h(t)}\\,dt \\sim (\\pi\\theta)^{-1/2}\\cos\\!\\big(\\tfrac23\\theta - \\tfrac{\\pi}{4}\\big) \\) as \\( \\theta\\to\\infty \\).",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point method", "two saddles", "Airy-type"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the saddle-point formula per saddle.", workingLatex: "I_{t_0} \\sim g(t_0)\\,e^{\\theta h(t_0)}\\sqrt{\\frac{2\\pi}{\\theta|h''(t_0)|}}\\,e^{i\\phi}.", explanation: "Each simple saddle contributes this term; here \\( g\\equiv1 \\) and the overall integral has prefactor \\( \\tfrac{1}{2\\pi i} \\). We compute each saddle, then add." },
        { stepNumber: 2, description: "Phase value at \\( t=i \\).", workingLatex: "h(i) = \\tfrac{2i}{3}.", explanation: "From am7a-007; this purely imaginary value gives the oscillatory factor \\( e^{2i\\theta/3} \\)." },
        { stepNumber: 3, description: "Curvature at \\( t=i \\).", workingLatex: "h''(i) = 2i = 2e^{i\\pi/2}, \\qquad \\alpha_+ = \\tfrac{\\pi}{2}.", explanation: "From am7a-008; modulus \\( 2 \\), argument \\( \\pi/2 \\)." },
        { stepNumber: 4, description: "Descent angle at \\( t=i \\).", workingLatex: "\\phi_+ = \\frac{\\pi - \\alpha_+}{2} = \\frac{\\pi - \\pi/2}{2} = \\frac{\\pi}{4}.", explanation: "From \\( 2\\phi+\\alpha=\\pi \\); the descent contour crosses \\( t=i \\) at \\( \\pi/4 \\), matching the path from the lower-right to the upper-right sector." },
        { stepNumber: 5, description: "Width factor at \\( t=i \\).", workingLatex: "\\sqrt{\\frac{2\\pi}{\\theta|h''(i)|}} = \\sqrt{\\frac{2\\pi}{2\\theta}} = \\sqrt{\\frac{\\pi}{\\theta}}.", explanation: "With \\( |h''|=2 \\) the curvature halves the \\( 2\\pi \\) to \\( \\pi \\) under the root." },
        { stepNumber: 6, description: "Contribution of \\( t=i \\).", workingLatex: "\\frac{1}{2\\pi i}\\,e^{2i\\theta/3}\\sqrt{\\frac{\\pi}{\\theta}}\\,e^{i\\pi/4}.", explanation: "Insert into the formula; the prefactor \\( 1/(2\\pi i) \\) carries through, and \\( e^{i\\phi_+} = e^{i\\pi/4} \\) is the descent tangent phase." },
        { stepNumber: 7, description: "Phase value at \\( t=-i \\).", workingLatex: "h(-i) = -\\tfrac{2i}{3}.", explanation: "The conjugate value, giving the oscillatory factor \\( e^{-2i\\theta/3} \\)." },
        { stepNumber: 8, description: "Curvature at \\( t=-i \\).", workingLatex: "h''(-i) = -2i = 2e^{-i\\pi/2}, \\qquad \\alpha_- = -\\tfrac{\\pi}{2}.", explanation: "Modulus \\( 2 \\), argument \\( -\\pi/2 \\) — the conjugate of the upper saddle." },
        { stepNumber: 9, description: "Descent angle at \\( t=-i \\).", workingLatex: "\\phi_- = \\frac{\\pi - (-\\pi/2)}{2} = \\frac{3\\pi}{4}.", explanation: "With \\( \\alpha_- = -\\pi/2 \\) the descent condition gives \\( \\phi_- = 3\\pi/4 \\), so the contour proceeds upward-left, consistent with a single connected steepest-descent path." },
        { stepNumber: 10, description: "Width factor at \\( t=-i \\).", workingLatex: "\\sqrt{\\frac{2\\pi}{\\theta|h''(-i)|}} = \\sqrt{\\frac{\\pi}{\\theta}}.", explanation: "Same modulus \\( |h''|=2 \\) gives the same width factor as the upper saddle." },
        { stepNumber: 11, description: "Contribution of \\( t=-i \\).", workingLatex: "\\frac{1}{2\\pi i}\\,e^{-2i\\theta/3}\\sqrt{\\frac{\\pi}{\\theta}}\\,e^{i3\\pi/4}.", explanation: "The conjugate phase \\( e^{-2i\\theta/3} \\) and descent angle \\( e^{i3\\pi/4} \\) appear." },
        { stepNumber: 12, description: "Add the two contributions.", workingLatex: "f \\sim \\frac{1}{2\\pi i}\\sqrt{\\frac{\\pi}{\\theta}}\\Big[e^{i(2\\theta/3 + \\pi/4)} + e^{i(-2\\theta/3 + 3\\pi/4)}\\Big].", explanation: "Factor out the common \\( \\tfrac{1}{2\\pi i}\\sqrt{\\pi/\\theta} \\). We now combine the bracket into a cosine." },
        { stepNumber: 13, description: "Name the two phase arguments.", workingLatex: "a = \\tfrac23\\theta + \\tfrac\\pi4, \\qquad b = -\\tfrac23\\theta + \\tfrac{3\\pi}4.", explanation: "Label the two exponents to apply the sum-to-product identity \\( e^{ia}+e^{ib} = 2e^{i(a+b)/2}\\cos\\tfrac{a-b}{2} \\)." },
        { stepNumber: 14, description: "Compute the mean of the phases.", workingLatex: "\\frac{a+b}{2} = \\tfrac12\\Big[\\big(\\tfrac23\\theta + \\tfrac\\pi4\\big) + \\big(-\\tfrac23\\theta + \\tfrac{3\\pi}4\\big)\\Big] = \\tfrac{\\pi}{2}.", explanation: "The \\( \\theta \\)-terms cancel, leaving the constant mean \\( \\pi/2 \\)." },
        { stepNumber: 15, description: "Compute the half-difference.", workingLatex: "\\frac{a-b}{2} = \\tfrac12\\Big[\\big(\\tfrac23\\theta + \\tfrac\\pi4\\big) - \\big(-\\tfrac23\\theta + \\tfrac{3\\pi}4\\big)\\Big] = \\tfrac23\\theta - \\tfrac{\\pi}{4}.", explanation: "Here the \\( \\theta \\)-terms add and the constants subtract; this becomes the cosine's argument." },
        { stepNumber: 16, description: "Combine into a cosine.", workingLatex: "e^{ia} + e^{ib} = 2\\,e^{i\\pi/2}\\cos\\!\\Big(\\tfrac23\\theta - \\tfrac{\\pi}{4}\\Big).", explanation: "Assemble the sum-to-product result with mean \\( \\pi/2 \\) and half-difference \\( \\tfrac23\\theta - \\tfrac\\pi4 \\)." },
        { stepNumber: 17, description: "Substitute back.", workingLatex: "f \\sim \\frac{1}{2\\pi i}\\sqrt{\\frac{\\pi}{\\theta}}\\cdot 2 e^{i\\pi/2}\\cos\\!\\Big(\\tfrac23\\theta - \\tfrac{\\pi}{4}\\Big).", explanation: "Replace the bracket by its cosine form." },
        { stepNumber: 18, description: "Simplify the imaginary units.", workingLatex: "e^{i\\pi/2} = i, \\qquad \\frac{2\\,i}{2\\pi i} = \\frac{1}{\\pi}.", explanation: "The two factors of \\( i \\) cancel, leaving \\( 1/\\pi \\). This is the slip-prone step: forgetting \\( e^{i\\pi/2}=i \\) would leave a stray \\( i \\)." },
        { stepNumber: 19, description: "Simplify the \\( \\theta \\)-power.", workingLatex: "\\frac{1}{\\pi}\\sqrt{\\frac{\\pi}{\\theta}} = \\frac{\\pi^{1/2}}{\\pi\\,\\theta^{1/2}} = \\frac{1}{\\pi^{1/2}\\theta^{1/2}} = (\\pi\\theta)^{-1/2}.", explanation: "Collect the half-powers of \\( \\pi \\) and \\( \\theta \\)." },
        { stepNumber: 20, description: "State the leading behaviour.", workingLatex: "f(\\theta) \\sim (\\pi\\theta)^{-1/2}\\cos\\!\\Big(\\tfrac23\\theta - \\tfrac{\\pi}{4}\\Big).", explanation: "This is the required Airy-type result: two conjugate saddles combine to a single real, slowly-decaying oscillation." },
        { stepNumber: 21, description: "Sanity-check reality.", workingLatex: "f(\\theta) \\in \\mathbb{R}, \\quad \\text{consistent with } f = \\overline{f}.", explanation: "The answer is real, as it must be: the contour and integrand have a conjugate symmetry that forces \\( f \\) real, and the two complex-conjugate saddle terms duly summed to a cosine." },
      ],
      finalAnswer: "\\( f(\\theta) \\sim (\\pi\\theta)^{-1/2}\\cos\\!\\big(\\tfrac23\\theta - \\tfrac{\\pi}{4}\\big) \\)",
      canonicalAnswer: "(pi*theta)^(-1/2)*cos(2*theta/3 - pi/4)",
    },
  },
  {
    id: "am7a-022",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Let \\( h(z) = k(z - 2z^{1/2}) \\), \\( k\\to+\\infty \\), with saddle \\( z_0=1 \\) and steepest-descent parabola \\( z(\\tau) = 1 - \\tau^2 + 2i\\tau \\). For \\( I(k) = \\displaystyle\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty}\\frac{e^{k(z-2z^{1/2})}}{z - c}\\,dz \\) with \\( c \\) real and \\( c<1 \\), use the parametrisation to obtain the leading behaviour.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point method", "parametrised contour", "leading term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall the phase along the parabola.", workingLatex: "z - 2z^{1/2} = -1 - \\tau^2.", explanation: "Derived in am7a-010: along the descent path the phase reduces to the real, monotone-decreasing \\( -1 - \\tau^2 \\)." },
        { stepNumber: 2, description: "Split off the constant exponential.", workingLatex: "e^{k(z-2z^{1/2})} = e^{k(-1-\\tau^2)} = e^{-k}\\,e^{-k\\tau^2}.", explanation: "Factor \\( e^{-k} \\) out; the surviving \\( e^{-k\\tau^2} \\) is the Gaussian that localises the integral at the saddle \\( \\tau=0 \\)." },
        { stepNumber: 3, description: "Differentiate the parametrisation.", workingLatex: "\\frac{dz}{d\\tau} = \\tfrac{d}{d\\tau}(1-\\tau^2+2i\\tau).", explanation: "We need \\( dz/d\\tau \\) to change the differential in the contour integral." },
        { stepNumber: 4, description: "Evaluate the derivative.", workingLatex: "\\frac{dz}{d\\tau} = -2\\tau + 2i, \\qquad dz = (2i - 2\\tau)\\,d\\tau.", explanation: "Differentiate term by term: \\( -\\tau^2\\to-2\\tau \\), \\( 2i\\tau\\to 2i \\)." },
        { stepNumber: 5, description: "Set up the contour deformation.", workingLatex: "\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty} \\longrightarrow \\int_{\\tau=-\\infty}^{\\infty} \\text{ on the parabola}.", explanation: "Since \\( c<1 \\) the deformation from the vertical line onto the descent parabola crosses no singularity, so the two integrals are equal." },
        { stepNumber: 6, description: "Write the integral in \\( \\tau \\).", workingLatex: "I(k) = e^{-k}\\int_{-\\infty}^{\\infty}\\frac{e^{-k\\tau^2}}{z(\\tau) - c}\\,(2i - 2\\tau)\\,d\\tau.", explanation: "Substitute the factored exponential and \\( dz \\). The dominant factor is the Gaussian \\( e^{-k\\tau^2} \\)." },
        { stepNumber: 7, description: "Identify the smooth amplitude.", workingLatex: "A(\\tau) := \\frac{2i - 2\\tau}{z(\\tau) - c}.", explanation: "Everything except the Gaussian is the slowly-varying amplitude \\( A(\\tau) \\); Laplace's method replaces it by its value at the peak." },
        { stepNumber: 8, description: "Evaluate the curve at the saddle.", workingLatex: "z(0) = 1 - 0 + 0 = 1.", explanation: "At \\( \\tau=0 \\) the parabola passes through the saddle \\( z=1 \\)." },
        { stepNumber: 9, description: "Evaluate the numerator at the saddle.", workingLatex: "(2i - 2\\tau)\\big|_{\\tau=0} = 2i.", explanation: "The \\( -2\\tau \\) drops out at \\( \\tau=0 \\), leaving \\( 2i \\) — this is the tangent direction \\( dz/d\\tau \\) at the vertex (pointing up the imaginary axis)." },
        { stepNumber: 10, description: "Evaluate the denominator at the saddle.", workingLatex: "(z(\\tau) - c)\\big|_{\\tau=0} = 1 - c.", explanation: "Finite because \\( c<1 \\); the saddle does not sit on the pole." },
        { stepNumber: 11, description: "Form the amplitude at the saddle.", workingLatex: "A(0) = \\frac{2i}{1 - c}.", explanation: "Divide numerator by denominator at the peak." },
        { stepNumber: 12, description: "Laplace-localise.", workingLatex: "I(k) \\sim e^{-k}\\,A(0)\\int_{-\\infty}^{\\infty} e^{-k\\tau^2}\\,d\\tau.", explanation: "As \\( k\\to\\infty \\) the Gaussian concentrates at \\( \\tau=0 \\); replace \\( A(\\tau) \\) by \\( A(0) \\) and pull it out. The next-order correction is \\( O(k^{-1}) \\) smaller." },
        { stepNumber: 13, description: "Recall the Gaussian integral.", workingLatex: "\\int_{-\\infty}^{\\infty} e^{-a\\tau^2}\\,d\\tau = \\sqrt{\\frac{\\pi}{a}}.", explanation: "State the standard result before substituting \\( a=k \\)." },
        { stepNumber: 14, description: "Apply with \\( a=k \\).", workingLatex: "\\int_{-\\infty}^{\\infty} e^{-k\\tau^2}\\,d\\tau = \\sqrt{\\frac{\\pi}{k}}.", explanation: "This is the Gaussian width of the saddle in the \\( \\tau \\)-parametrisation." },
        { stepNumber: 15, description: "Substitute the amplitude and width.", workingLatex: "I(k) \\sim e^{-k}\\cdot\\frac{2i}{1-c}\\cdot\\sqrt{\\frac{\\pi}{k}}.", explanation: "Combine \\( A(0) \\) with the Gaussian width." },
        { stepNumber: 16, description: "Tidy the constants.", workingLatex: "I(k) \\sim \\frac{2i\\sqrt{\\pi}}{(1-c)\\sqrt{k}}\\,e^{-k}.", explanation: "Collect \\( \\sqrt{\\pi} \\) over \\( \\sqrt{k} \\)." },
        { stepNumber: 17, description: "Confirm no residue is needed.", workingLatex: "c < 1 = \\operatorname{Re} z_0 \\;\\Rightarrow\\; \\text{pole not crossed during deformation}.", explanation: "Because \\( c<1 \\) lies to the left of the vertical line and of the saddle, deforming onto the parabola does not sweep the pole, so there is no residue term." },
        { stepNumber: 18, description: "Cross-check the descent phase.", workingLatex: "\\frac{dz}{d\\tau}\\Big|_0 = 2i = 2e^{i\\pi/2} \\;\\Rightarrow\\; e^{i\\phi} = e^{i\\pi/2} = i.", explanation: "The tangent at the vertex is \\( 2i \\), i.e. the descent direction \\( \\phi=\\pi/2 \\); the factor \\( i \\) in the answer is exactly this descent phase." },
        { stepNumber: 19, description: "Match the direct formula.", workingLatex: "\\frac{2i}{1-c}\\sqrt{\\frac{\\pi}{k}} = \\frac{1}{1-c}\\sqrt{\\frac{2\\pi}{k\\cdot\\frac12}}\\,e^{i\\pi/2}.", explanation: "Rewriting confirms agreement with am7a-014: the parametric Gaussian and the abstract saddle formula give identical leading terms." },
        { stepNumber: 20, description: "State the leading behaviour.", workingLatex: "I(k) \\sim \\frac{2i\\sqrt{\\pi}}{(1-c)\\sqrt{k}}\\,e^{-k}, \\qquad k\\to+\\infty.", explanation: "The saddle alone governs the asymptotics; the result matches the direct application of the simple-saddle formula in am7a-014." },
      ],
      finalAnswer: "\\( I(k) \\sim \\dfrac{2i\\sqrt{\\pi}}{(1-c)\\sqrt{k}}\\,e^{-k} \\)",
      canonicalAnswer: "2*i*sqrt(pi)/((1-c)*sqrt(k))*exp(-k)",
    },
  },
  {
    id: "am7a-023",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 23",
    difficulty: "Challenge",
    answerType: "expression",
    // REVIEW: residue / pole-crossing argument is a topological deformation claim, not a single numeric value, so it is not directly verified numerically; saddle term itself matches am7a-022.
    questionText: "For \\( I(k) = \\displaystyle\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty}\\frac{e^{k(z-2z^{1/2})}}{z-c}\\,dz \\) (saddle \\( z_0=1 \\), \\( h(1)=-1 \\)) with \\( c \\) real and \\( 1<c<\\gamma \\), explain why a residue term now appears and give the leading asymptotic behaviour.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point method", "pole crossing", "residue"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall Cauchy's deformation principle.", workingLatex: "\\oint = 2\\pi i\\sum\\operatorname{Res} \\;\\Rightarrow\\; \\text{deforming across a pole picks up its residue}.", explanation: "If a contour is deformed past a simple pole, the integral changes by \\( 2\\pi i \\) times the residue; this is the source of the new term." },
        { stepNumber: 2, description: "Place the original contour.", workingLatex: "\\text{contour: } \\operatorname{Re} z = \\gamma.", explanation: "The original path is the vertical line \\( \\operatorname{Re} z = \\gamma \\), a Bromwich-type contour." },
        { stepNumber: 3, description: "Place the pole.", workingLatex: "\\text{pole at } z=c, \\quad 1 < c < \\gamma.", explanation: "The pole sits to the LEFT of the contour, between the saddle \\( z_0=1 \\) and the line \\( \\operatorname{Re} z = \\gamma \\)." },
        { stepNumber: 4, description: "Recall the descent path.", workingLatex: "y^2 = 4(1-x) \\ \\text{(vertex at } z_0=1).", explanation: "The steepest-descent parabola from am7a-011 has its vertex at the saddle \\( z_0=1 \\), to the LEFT of the pole." },
        { stepNumber: 5, description: "Compare the three Re-coordinates.", workingLatex: "\\operatorname{Re} z_0 = 1 \\ <\\ c \\ <\\ \\gamma.", explanation: "The saddle, the pole and the original line lie left-to-right in this order; deforming from the line to the parabola must therefore pass over the pole." },
        { stepNumber: 6, description: "Deform onto the steepest-descent parabola.", workingLatex: "\\operatorname{Re} z = \\gamma \\ \\longrightarrow\\ \\text{parabola through } z_0=1 \\ (\\text{sweeping over } z=c).", explanation: "To pick up the saddle we push the contour left onto the descent parabola through \\( z_0=1 \\); in doing so it sweeps across the pole at \\( z=c \\) (since \\( 1<c<\\gamma \\)).", mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-2.6, 2.6]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[2,-2.6]} point2={[2,2.6]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-3.3,0]} point2={[0,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Vector tail={[2,1.8]} tip={[0.7,1.8]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.5,0]} tex="\\times" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.6,-0.55]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.95,0.45]} tex="z=c" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.2,2.2]} tex="\\operatorname{Re}z=\\gamma" color="var(--mafs-fg-accent)" />
  <LaTeX at={[-1.7,2.3]} tex="\\text{steepest descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-1.9,-0.5]} tex="\\text{branch cut}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.4,2.45]} tex="\\operatorname{Im}z" />
</Mafs>` },
        { stepNumber: 7, description: "Split the integral into residue and saddle parts.", workingLatex: "I(k) = 2\\pi i\\,\\operatorname{Res}_{z=c}\\frac{e^{k(z-2z^{1/2})}}{z-c} + I_{\\text{saddle}}(k).", explanation: "By the residue theorem, deforming across the simple pole adds \\( 2\\pi i \\) times the residue (sign set by the leftward, i.e. clockwise-relative, crossing); the leftover integral on the parabola is the saddle term." },
        { stepNumber: 8, description: "Recall the residue at a simple pole.", workingLatex: "\\operatorname{Res}_{z=c}\\frac{g(z)}{z-c} = g(c).", explanation: "For a numerator \\( g \\) analytic at \\( c \\), the residue of \\( g(z)/(z-c) \\) is simply \\( g(c) \\)." },
        { stepNumber: 9, description: "Evaluate the residue.", workingLatex: "g(c) = e^{k(c - 2c^{1/2})} = e^{-k(2\\sqrt{c} - c)}.", explanation: "Substitute \\( g(z) = e^{k(z-2z^{1/2})} \\) at \\( z=c \\). The exponent is \\( c - 2\\sqrt c \\)." },
        { stepNumber: 10, description: "Define the comparison function.", workingLatex: "\\psi(c) := c - 2\\sqrt c.", explanation: "Introduce \\( \\psi(c) \\) to compare the residue exponent against the saddle's \\( h(1) = -1 \\)." },
        { stepNumber: 11, description: "Evaluate \\( \\psi \\) at the saddle.", workingLatex: "\\psi(1) = 1 - 2 = -1 = h(1).", explanation: "At \\( c=1 \\) the residue exponent equals the saddle's phase value; for \\( c>1 \\) we must see which way it moves." },
        { stepNumber: 12, description: "Differentiate \\( \\psi \\).", workingLatex: "\\psi'(c) = 1 - \\frac{1}{\\sqrt c}.", explanation: "Differentiate \\( c - 2\\sqrt c = c - 2c^{1/2} \\): \\( \\tfrac{d}{dc}(-2c^{1/2}) = -c^{-1/2} \\)." },
        { stepNumber: 13, description: "Sign of the derivative for \\( c>1 \\).", workingLatex: "c > 1 \\;\\Rightarrow\\; \\sqrt c > 1 \\;\\Rightarrow\\; \\frac{1}{\\sqrt c} < 1 \\;\\Rightarrow\\; \\psi'(c) > 0.", explanation: "So \\( \\psi \\) increases on \\( c>1 \\); the residue exponent grows above its saddle value." },
        { stepNumber: 14, description: "Conclude the exponent inequality.", workingLatex: "\\psi(c) > \\psi(1) = -1 \\quad (c>1).", explanation: "Since \\( \\psi \\) is increasing past \\( c=1 \\), its value exceeds \\( -1 \\) for any \\( c>1 \\)." },
        { stepNumber: 15, description: "Compare the two terms' magnitudes.", workingLatex: "|2\\pi i\\,e^{k\\psi(c)}| = e^{k\\psi(c)}\\cdot 2\\pi, \\qquad |I_{\\text{saddle}}| \\sim \\frac{2\\sqrt\\pi}{|1-c|\\sqrt k}e^{-k}.", explanation: "Write down the magnitudes: the residue scales like \\( e^{k\\psi(c)} \\), the saddle term like \\( e^{-k}/\\sqrt k \\)." },
        { stepNumber: 16, description: "Take the ratio.", workingLatex: "\\frac{|2\\pi i\\,e^{k\\psi(c)}|}{|I_{\\text{saddle}}|} \\sim \\sqrt{k}\\,e^{k(\\psi(c)+1)} \\to \\infty.", explanation: "Because \\( \\psi(c)+1 > 0 \\), the exponential blows up: the residue is exponentially larger than the saddle term." },
        { stepNumber: 17, description: "Drop the subdominant saddle term.", workingLatex: "I(k) \\sim 2\\pi i\\,\\operatorname{Res}_{z=c} = 2\\pi i\\,e^{-k(2\\sqrt c - c)}.", explanation: "To leading order only the residue survives; the saddle term \\( \\tfrac{2i\\sqrt\\pi}{(1-c)\\sqrt k}e^{-k} \\) is exponentially negligible." },
        { stepNumber: 18, description: "Interpret the Stokes-type transition.", workingLatex: "c<1:\\ \\text{saddle dominates}; \\quad c>1:\\ \\text{residue dominates}.", explanation: "Crossing \\( c=1 \\) (the saddle's real part) switches which contribution leads — a pole-induced change of dominant balance, the prototype of a Stokes phenomenon." },
        { stepNumber: 19, description: "Note the sign convention.", workingLatex: "\\text{leftward (clockwise) crossing} \\Rightarrow +2\\pi i\\,\\operatorname{Res}.", explanation: "The \\( +2\\pi i \\) sign comes from the orientation of the deformation; reversing the crossing direction would flip the sign of the residue term." },
        { stepNumber: 20, description: "State the leading behaviour.", workingLatex: "I(k) \\sim 2\\pi i\\,e^{-k(2\\sqrt c - c)}, \\qquad k\\to+\\infty.", explanation: "When the pole lies between the saddle and the original contour the residue is the dominant contribution." },
      ],
      finalAnswer: "\\( I(k) \\sim 2\\pi i\\,e^{-k(2\\sqrt{c}-c)} \\) (residue dominates the saddle term).",
      canonicalAnswer: "2*pi*i*exp(-k*(2*sqrt(c)-c))",
    },
  },
  {
    id: "am7a-024",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Let \\( h(t) = i(t + t^2) \\) on the contour for \\( \\int_0^1 t^{-1/2} e^{i\\lambda(t+t^2)}\\,dt \\), \\( \\lambda\\to\\infty \\). The saddle \\( t=-\\tfrac12 \\) is off-range, so the integral is endpoint-dominated. Find the leading contribution from the endpoint \\( t=0 \\), including the effect of the \\( t^{-1/2} \\) singularity.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["endpoint contribution", "algebraic singularity", "steepest descent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the dominant endpoint.", workingLatex: "\\text{saddle } -\\tfrac12 \\notin (0,1) \\;\\Rightarrow\\; \\text{endpoints } t=0,\\,1 \\text{ govern}.", explanation: "With the saddle off-range, the leading asymptotics come from the endpoints; the singular amplitude \\( t^{-1/2} \\) makes \\( t=0 \\) the dominant one." },
        { stepNumber: 2, description: "Approximate the phase near \\( t=0 \\).", workingLatex: "t + t^2 \\approx t \\quad (t\\to0).", explanation: "The quadratic \\( t^2 \\) is higher order near the origin, so the local phase is just \\( t \\)." },
        { stepNumber: 3, description: "Write the localised integral.", workingLatex: "I_0(\\lambda) \\approx \\int_0^{\\delta} t^{-1/2} e^{i\\lambda t}\\,dt.", explanation: "Restrict to a small neighbourhood \\( [0,\\delta] \\); the rest of the range contributes at lower order." },
        { stepNumber: 4, description: "Recall the descent ray at \\( t=0 \\).", workingLatex: "\\arg t = \\tfrac{\\pi}{2} \\quad (\\text{from am7a-013}).", explanation: "The steepest-descent path from \\( t=0 \\) leaves vertically; rotating onto it turns oscillation into decay." },
        { stepNumber: 5, description: "Introduce the scaled variable.", workingLatex: "t = \\frac{s}{\\lambda}\\,e^{i\\pi/2} = \\frac{is}{\\lambda}, \\quad s\\ge 0.", explanation: "Scale by \\( 1/\\lambda \\) so the phase becomes \\( O(1) \\); the direction \\( e^{i\\pi/2} \\) is the descent ray." },
        { stepNumber: 6, description: "Turn the oscillation into decay.", workingLatex: "i\\lambda t = i\\lambda\\cdot\\frac{is}{\\lambda} = i^2 s = -s.", explanation: "The exponent becomes real and negative: \\( e^{i\\lambda t} = e^{-s} \\). This rotation is what makes the endpoint integral convergent." },
        { stepNumber: 7, description: "Begin transforming the amplitude.", workingLatex: "t^{-1/2} = \\Big(\\frac{is}{\\lambda}\\Big)^{-1/2}.", explanation: "Substitute the scaled variable into the singular amplitude." },
        { stepNumber: 8, description: "Pull out the \\( \\lambda \\)-power.", workingLatex: "\\Big(\\frac{is}{\\lambda}\\Big)^{-1/2} = \\lambda^{1/2}\\,s^{-1/2}\\,i^{-1/2}.", explanation: "Separate the \\( \\lambda \\), \\( s \\) and \\( i \\) factors; the \\( i^{-1/2} \\) carries the singularity's branch phase." },
        { stepNumber: 9, description: "Evaluate the branch phase.", workingLatex: "i^{-1/2} = (e^{i\\pi/2})^{-1/2} = e^{-i\\pi/4}.", explanation: "On the principal branch \\( i^{-1/2} = e^{-i\\pi/4} \\); keeping the right branch here is the subtle point of the problem." },
        { stepNumber: 10, description: "Write the transformed amplitude.", workingLatex: "t^{-1/2} = \\lambda^{1/2} s^{-1/2} e^{-i\\pi/4}.", explanation: "Combine the pieces." },
        { stepNumber: 11, description: "Transform the measure.", workingLatex: "dt = \\frac{i}{\\lambda}\\,ds.", explanation: "Differentiate \\( t = is/\\lambda \\) with respect to \\( s \\)." },
        { stepNumber: 12, description: "Track the \\( \\lambda \\)-powers.", workingLatex: "\\lambda^{1/2}\\cdot\\lambda^{-1} = \\lambda^{-1/2}.", explanation: "The amplitude carries \\( \\lambda^{1/2} \\) and the measure \\( \\lambda^{-1} \\); together they give the overall scale \\( \\lambda^{-1/2} \\)." },
        { stepNumber: 13, description: "Form the integrand in \\( s \\).", workingLatex: "t^{-1/2}\\,dt = e^{-i\\pi/4}\\lambda^{1/2}s^{-1/2}\\cdot\\frac{i}{\\lambda}\\,ds = i\\,e^{-i\\pi/4}\\lambda^{-1/2} s^{-1/2}\\,ds.", explanation: "Multiply amplitude and measure, gathering the constants." },
        { stepNumber: 14, description: "Assemble the integral.", workingLatex: "I_0 \\sim i\\,e^{-i\\pi/4}\\,\\lambda^{-1/2}\\int_0^{\\delta'} s^{-1/2} e^{-s}\\,ds.", explanation: "Insert \\( e^{-s} \\) from step 6; the upper limit \\( \\delta' = \\lambda\\delta \\) is large." },
        { stepNumber: 15, description: "Extend the upper limit.", workingLatex: "\\int_0^{\\lambda\\delta} \\to \\int_0^{\\infty} \\quad (\\text{error exponentially small}).", explanation: "Since \\( e^{-s} \\) decays fast, extending to \\( \\infty \\) costs only exponentially small error." },
        { stepNumber: 16, description: "Recognise the gamma integral.", workingLatex: "\\int_0^\\infty s^{-1/2}e^{-s}\\,ds = \\Gamma\\!\\big(\\tfrac12\\big).", explanation: "This matches \\( \\Gamma(z) = \\int_0^\\infty s^{z-1}e^{-s}\\,ds \\) with \\( z = \\tfrac12 \\)." },
        { stepNumber: 17, description: "Evaluate the gamma function.", workingLatex: "\\Gamma\\!\\big(\\tfrac12\\big) = \\sqrt{\\pi}.", explanation: "The standard value of \\( \\Gamma(\\tfrac12) \\)." },
        { stepNumber: 18, description: "Substitute it back.", workingLatex: "I_0 \\sim i\\,e^{-i\\pi/4}\\,\\lambda^{-1/2}\\,\\sqrt{\\pi}.", explanation: "Replace the integral by \\( \\sqrt\\pi \\)." },
        { stepNumber: 19, description: "Combine the phases.", workingLatex: "i\\,e^{-i\\pi/4} = e^{i\\pi/2}e^{-i\\pi/4} = e^{i\\pi/4}.", explanation: "The factor \\( i \\) from \\( dt \\) and \\( e^{-i\\pi/4} \\) from \\( t^{-1/2} \\) combine to \\( e^{i\\pi/4} \\). Keeping the two phases straight is the easy place to slip." },
        { stepNumber: 20, description: "State the endpoint contribution.", workingLatex: "I_0(\\lambda) \\sim \\sqrt{\\frac{\\pi}{\\lambda}}\\,e^{i\\pi/4}.", explanation: "This \\( \\lambda^{-1/2} \\) decay is slower than the \\( \\lambda^{-1} \\) one would get from a non-singular endpoint, because the \\( t^{-1/2} \\) singularity strengthens the lower-endpoint contribution." },
      ],
      finalAnswer: "\\( I_0(\\lambda) \\sim \\sqrt{\\dfrac{\\pi}{\\lambda}}\\,e^{i\\pi/4} \\)",
      canonicalAnswer: "sqrt(pi/lambda)*exp(i*pi/4)",
    },
  },
  {
    id: "am7a-025",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Consider \\( I(x) = \\displaystyle\\int_0^\\infty e^{ix(\\frac13 t^3 + t)}\\,dt \\), \\( x\\to+\\infty \\). The saddles are at \\( t=\\pm i \\), off the contour. By rotating the contour onto the steepest-descent ray from \\( t=0 \\), find the leading term, and confirm it via integration by parts.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["endpoint contribution", "steepest descent", "integration by parts"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the phase.", workingLatex: "h(t) = i\\big(\\tfrac13 t^3 + t\\big).", explanation: "Factor \\( x \\) out of the exponent; \\( h \\) is the fixed phase." },
        { stepNumber: 2, description: "Phase value and slope at the endpoint.", workingLatex: "h(0) = 0, \\qquad h'(0) = i(0+1) = i.", explanation: "At \\( t=0 \\) the phase vanishes and its derivative is \\( i \\); locally \\( h(t)\\approx it \\)." },
        { stepNumber: 3, description: "Identify the dominant endpoint.", workingLatex: "\\text{saddles } \\pm i \\text{ off-contour} \\;\\Rightarrow\\; t=0 \\text{ dominates}.", explanation: "With saddles unreachable, the leading contribution comes from the lower endpoint, where the phase behaves like \\( e^{ixt} \\)." },
        { stepNumber: 4, description: "Choose the descent ray.", workingLatex: "t = \\frac{is}{x}, \\quad s\\ge0.", explanation: "Near \\( t=0 \\) the descent ray is vertical (\\( \\arg t=\\pi/2 \\)); the scaling by \\( 1/x \\) keeps the leading phase \\( O(1) \\)." },
        { stepNumber: 5, description: "Substitute into the phase.", workingLatex: "ix\\big(\\tfrac13 t^3 + t\\big) = ix\\Big(\\frac13\\frac{(is)^3}{x^3} + \\frac{is}{x}\\Big).", explanation: "Insert \\( t = is/x \\); we expand each term to find the leading order in \\( 1/x \\)." },
        { stepNumber: 6, description: "Simplify the leading and subleading terms.", workingLatex: "= i^2 s + O\\!\\big(s^3/x^2\\big) = -s + O\\!\\big(s^3/x^2\\big).", explanation: "The linear term gives \\( ix\\cdot is/x = -s \\); the cubic term is down by \\( 1/x^2 \\)." },
        { stepNumber: 7, description: "Transform the measure.", workingLatex: "dt = \\frac{i}{x}\\,ds.", explanation: "Differentiate \\( t = is/x \\) with respect to \\( s \\)." },
        { stepNumber: 8, description: "Write the reduced integral.", workingLatex: "I(x) \\sim \\frac{i}{x}\\int_0^\\infty e^{-s}\\,ds.", explanation: "Amplitude \\( 1 \\), measure \\( i/x \\), exponent \\( -s \\); extending the upper limit to \\( \\infty \\) costs exponentially small error." },
        { stepNumber: 9, description: "Evaluate the integral.", workingLatex: "\\int_0^\\infty e^{-s}\\,ds = \\Gamma(1) = 1.", explanation: "The simplest gamma integral." },
        { stepNumber: 10, description: "State the steepest-descent leading term.", workingLatex: "I(x) \\sim \\frac{i}{x}.", explanation: "This is the endpoint contribution from the descent rotation; we now confirm it independently." },
        { stepNumber: 11, description: "Differentiate the exponential.", workingLatex: "\\frac{d}{dt}e^{ix(\\frac13 t^3+t)} = ix(t^2+1)\\,e^{ix(\\frac13 t^3+t)}.", explanation: "Chain rule: the inner derivative of \\( \\tfrac13 t^3 + t \\) is \\( t^2+1 \\)." },
        { stepNumber: 12, description: "Rewrite the integrand for IBP.", workingLatex: "e^{ix(\\frac13 t^3+t)} = \\frac{1}{ix(t^2+1)}\\,\\frac{d}{dt}e^{ix(\\frac13 t^3+t)}.", explanation: "Invert the previous relation: the integrand equals \\( \\tfrac{1}{ix(t^2+1)} \\) times the derivative of the exponential — the standard non-stationary-phase IBP trick." },
        { stepNumber: 13, description: "Set up integration by parts.", workingLatex: "I(x) = \\int_0^\\infty u\\,dv, \\quad u = \\frac{1}{ix(t^2+1)}, \\ dv = d\\big(e^{ix(\\frac13 t^3+t)}\\big).", explanation: "Choose \\( u \\) the slowly-varying prefactor and \\( dv \\) the exact differential of the exponential." },
        { stepNumber: 14, description: "Write the IBP formula.", workingLatex: "I(x) = \\Big[\\frac{e^{ix(\\frac13 t^3+t)}}{ix(t^2+1)}\\Big]_0^\\infty - \\int_0^\\infty e^{ix(\\frac13 t^3+t)}\\,\\frac{d}{dt}\\!\\Big(\\frac{1}{ix(t^2+1)}\\Big)dt.", explanation: "The boundary term plus the integral of \\( v\\,du \\)." },
        { stepNumber: 15, description: "Evaluate the boundary term at infinity.", workingLatex: "\\frac{e^{ix(\\frac13 t^3+t)}}{ix(t^2+1)}\\Big|_{t\\to\\infty} = 0.", explanation: "The prefactor \\( \\sim 1/t^2 \\to 0 \\) and the exponential is bounded (oscillatory), so the upper limit vanishes." },
        { stepNumber: 16, description: "Evaluate the boundary term at zero.", workingLatex: "\\frac{e^{0}}{ix(0+1)} = \\frac{1}{ix}.", explanation: "At \\( t=0 \\) the exponential is \\( 1 \\) and \\( t^2+1=1 \\)." },
        { stepNumber: 17, description: "Combine the boundary terms.", workingLatex: "\\Big[\\ \\cdot\\ \\Big]_0^\\infty = 0 - \\frac{1}{ix} = -\\frac{1}{ix}.", explanation: "Subtract the lower from the upper limit." },
        { stepNumber: 18, description: "Simplify \\( -1/(ix) \\).", workingLatex: "-\\frac{1}{ix} = -\\frac{1}{ix}\\cdot\\frac{-i}{-i} = \\frac{i}{x}.", explanation: "Multiply top and bottom by \\( i \\): \\( 1/i = -i \\), so \\( -1/(ix) = i/x \\)." },
        { stepNumber: 19, description: "Bound the remaining integral.", workingLatex: "\\int_0^\\infty e^{ix(\\frac13 t^3+t)}\\,\\frac{d}{dt}\\!\\Big(\\frac{1}{ix(t^2+1)}\\Big)dt = O(x^{-2}).", explanation: "The differentiated prefactor carries another \\( 1/x \\), so this term is one order smaller." },
        { stepNumber: 20, description: "Confirm the leading order.", workingLatex: "I(x) = \\frac{i}{x} + O(x^{-2}).", explanation: "The boundary term is the leading order, agreeing exactly with the steepest-descent rotation of step 10." },
      ],
      finalAnswer: "\\( I(x) \\sim \\dfrac{i}{x} \\) (confirmed by integration by parts).",
      canonicalAnswer: "i/x",
    },
  },
  {
    id: "am7a-026",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "For \\( h(t) = i\\big(t^3 - t\\big) \\) (so \\( \\int f(t)e^{ix(t^3-t)}\\,dt \\), as in Stokes' problem with \\( t^3-t \\) in place of \\( t^3 \\)... use \\( h(t)=i(t^3-t) \\)), find the saddle points, their curvatures, and the steepest-descent direction at each.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point", "Stokes problem", "descent direction"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the cubic term.", workingLatex: "\\tfrac{d}{dt}\\big(i\\,t^3\\big) = 3it^2.", explanation: "Differentiate the inner \\( t^3 \\) to \\( 3t^2 \\), keeping the factor \\( i \\)." },
        { stepNumber: 2, description: "Differentiate the linear term.", workingLatex: "\\tfrac{d}{dt}\\big(-i\\,t\\big) = -i.", explanation: "The \\( -it \\) gives the constant \\( -i \\)." },
        { stepNumber: 3, description: "Assemble the first derivative.", workingLatex: "h'(t) = i(3t^2 - 1).", explanation: "Combine the two pieces; the saddles are its zeros." },
        { stepNumber: 4, description: "Set the derivative to zero.", workingLatex: "i(3t^2 - 1) = 0 \\;\\implies\\; 3t^2 - 1 = 0.", explanation: "Since \\( i\\neq0 \\), the bracket must vanish." },
        { stepNumber: 5, description: "Solve for the saddles.", workingLatex: "3t^2 = 1 \\;\\implies\\; t = \\pm\\frac{1}{\\sqrt3}.", explanation: "Both saddles are real here (the phase \\( t^3 - t \\) has real stationary points), unlike the purely \\( t^3 \\) case; this is the structure behind Stokes' problem with two real stationary-phase points." },
        { stepNumber: 6, description: "Differentiate again.", workingLatex: "h''(t) = \\tfrac{d}{dt}\\big[i(3t^2-1)\\big] = 6it.", explanation: "The second derivative is linear in \\( t \\), so its sign and phase flip between the two saddles." },
        { stepNumber: 7, description: "Substitute the right saddle.", workingLatex: "h''\\!\\Big(\\tfrac{1}{\\sqrt3}\\Big) = 6i\\cdot\\frac{1}{\\sqrt3} = \\frac{6i}{\\sqrt3}.", explanation: "Plug \\( t = 1/\\sqrt3 \\) into \\( 6it \\)." },
        { stepNumber: 8, description: "Rationalise the right curvature.", workingLatex: "\\frac{6}{\\sqrt3} = \\frac{6\\sqrt3}{3} = 2\\sqrt3 \\;\\Rightarrow\\; h''\\!\\Big(\\tfrac{1}{\\sqrt3}\\Big) = 2\\sqrt3\\,i.", explanation: "Simplify \\( 6/\\sqrt3 = 2\\sqrt3 \\)." },
        { stepNumber: 9, description: "Polar form of the right curvature.", workingLatex: "2\\sqrt3\\,i = 2\\sqrt3\\,e^{i\\pi/2}, \\qquad \\alpha_+ = \\tfrac{\\pi}{2}.", explanation: "Positive-imaginary curvature has argument \\( \\pi/2 \\)." },
        { stepNumber: 10, description: "Descent condition at the right saddle.", workingLatex: "2\\phi_+ + \\alpha_+ = \\pi.", explanation: "On a descent path the quadratic is real negative, argument \\( \\pi \\)." },
        { stepNumber: 11, description: "Solve for the right descent angle.", workingLatex: "\\phi_+ = \\frac{\\pi - \\pi/2}{2} = \\frac{\\pi}{4}.", explanation: "Descent leaves this saddle at \\( 45^\\circ \\) (and \\( 225^\\circ \\)), tilting into the upper half-plane." },
        { stepNumber: 12, description: "Substitute the left saddle.", workingLatex: "h''\\!\\Big(-\\tfrac{1}{\\sqrt3}\\Big) = 6i\\cdot\\Big(-\\frac{1}{\\sqrt3}\\Big) = -\\frac{6i}{\\sqrt3}.", explanation: "Plug \\( t = -1/\\sqrt3 \\) into \\( 6it \\)." },
        { stepNumber: 13, description: "Simplify the left curvature.", workingLatex: "-\\frac{6i}{\\sqrt3} = -2\\sqrt3\\,i.", explanation: "Same rationalisation, opposite sign." },
        { stepNumber: 14, description: "Polar form of the left curvature.", workingLatex: "-2\\sqrt3\\,i = 2\\sqrt3\\,e^{-i\\pi/2}, \\qquad \\alpha_- = -\\tfrac{\\pi}{2}.", explanation: "Negative-imaginary curvature at the second (left) saddle — the conjugate of the first." },
        { stepNumber: 15, description: "Descent condition at the left saddle.", workingLatex: "2\\phi_- + \\alpha_- = \\pi.", explanation: "Same descent condition, with the new \\( \\alpha_- \\)." },
        { stepNumber: 16, description: "Solve for the left descent angle.", workingLatex: "\\phi_- = \\frac{\\pi - (-\\pi/2)}{2} = \\frac{3\\pi}{4}.", explanation: "Descent leaves this saddle at \\( 135^\\circ \\) (and \\( -45^\\circ \\))." },
        { stepNumber: 17, description: "Phase value at the right saddle.", workingLatex: "h\\!\\Big(\\tfrac{1}{\\sqrt3}\\Big) = i\\Big(\\tfrac{1}{3\\sqrt3} - \\tfrac{1}{\\sqrt3}\\Big) = -\\frac{2i}{3\\sqrt3}.", explanation: "Substitute into \\( i(t^3-t) \\): \\( t^3 = 1/(3\\sqrt3) \\), so the bracket is \\( \\tfrac{1}{3\\sqrt3} - \\tfrac{1}{\\sqrt3} = -\\tfrac{2}{3\\sqrt3} \\). Purely imaginary, so this saddle gives an oscillatory term." },
        { stepNumber: 18, description: "Phase value at the left saddle.", workingLatex: "h\\!\\Big(-\\tfrac{1}{\\sqrt3}\\Big) = +\\frac{2i}{3\\sqrt3} = \\overline{h\\!\\big(\\tfrac{1}{\\sqrt3}\\big)}.", explanation: "By the odd symmetry of \\( t^3-t \\), the left value is the negative — and conjugate — of the right." },
        { stepNumber: 19, description: "Note the conjugate structure.", workingLatex: "h''\\!\\big(-\\tfrac1{\\sqrt3}\\big) = \\overline{h''\\!\\big(\\tfrac1{\\sqrt3}\\big)}, \\quad h\\!\\big(-\\tfrac1{\\sqrt3}\\big) = \\overline{h\\!\\big(\\tfrac1{\\sqrt3}\\big)}.", explanation: "Both the curvatures and the phase values are complex conjugates across the two saddles." },
        { stepNumber: 20, description: "Interpret the leading behaviour.", workingLatex: "I \\sim \\big(\\text{term at } \\tfrac1{\\sqrt3}\\big) + \\overline{\\big(\\text{term at } \\tfrac1{\\sqrt3}\\big)} \\in \\mathbb{R}.", explanation: "The two real saddles with conjugate data contribute complex-conjugate stationary-phase terms whose sum is the leading real oscillatory behaviour — exactly the two-stationary-point structure of Stokes' problem." },
      ],
      finalAnswer: "Saddles \\( t=\\pm\\tfrac{1}{\\sqrt3} \\); \\( h''=\\pm2\\sqrt3\\,i \\); descent \\( \\phi_+=\\tfrac\\pi4,\\ \\phi_-=\\tfrac{3\\pi}{4} \\).",
    },
  },
  {
    id: "am7a-027",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 27",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "The Gamma function admits \\( \\Gamma(x+1) = \\displaystyle\\int_0^\\infty e^{x\\ln t - t}\\,dt \\). By the substitution \\( t = x s \\), identify the saddle of the resulting phase, its curvature, and the steepest-descent direction, en route to Stirling's formula.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point", "Stirling", "Laplace phase"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the substitution.", workingLatex: "t = xs, \\qquad dt = x\\,ds.", explanation: "Scaling \\( t \\) by the large parameter \\( x \\) is what exposes \\( x \\) as a multiplier of a fixed phase." },
        { stepNumber: 2, description: "Split the logarithm.", workingLatex: "\\ln t = \\ln(xs) = \\ln x + \\ln s.", explanation: "The log-rule \\( \\ln(ab)=\\ln a+\\ln b \\) separates a constant \\( \\ln x \\) from the \\( s \\)-dependent part — a common slip is to write \\( \\ln(xs)=\\ln x\\,\\ln s \\)." },
        { stepNumber: 3, description: "Substitute into the exponent.", workingLatex: "x\\ln t - t = x(\\ln x + \\ln s) - xs.", explanation: "Replace \\( \\ln t \\) and \\( t=xs \\) in the exponent." },
        { stepNumber: 4, description: "Group the exponent.", workingLatex: "x\\ln t - t = x\\ln x + x(\\ln s - s).", explanation: "The constant \\( x\\ln x \\) splits off; the rest is \\( x \\) times the fixed phase \\( \\ln s - s \\)." },
        { stepNumber: 5, description: "Rewrite the integral.", workingLatex: "\\Gamma(x+1) = \\int_0^\\infty e^{x\\ln x}\\,e^{x(\\ln s - s)}\\,x\\,ds.", explanation: "Substitute the grouped exponent and \\( dt = x\\,ds \\)." },
        { stepNumber: 6, description: "Pull out the prefactor.", workingLatex: "\\Gamma(x+1) = x^{x+1}\\int_0^\\infty e^{x(\\ln s - s)}\\,ds.", explanation: "Take out \\( e^{x\\ln x} = x^x \\) and the \\( x \\) from \\( dt \\), giving \\( x^{x+1} \\). The phase is now \\( h(s) = \\ln s - s \\)." },
        { stepNumber: 7, description: "Differentiate the phase.", workingLatex: "h(s) = \\ln s - s, \\qquad h'(s) = \\frac{1}{s} - 1.", explanation: "Differentiate \\( \\ln s \\) to \\( 1/s \\) and \\( -s \\) to \\( -1 \\)." },
        { stepNumber: 8, description: "Locate the saddle.", workingLatex: "\\frac{1}{s} - 1 = 0 \\;\\implies\\; s_0 = 1.", explanation: "The (real) saddle is at \\( s_0 = 1 \\), i.e. \\( t = x \\): the integrand peaks where \\( t \\) equals the large parameter." },
        { stepNumber: 9, description: "Phase value at the saddle.", workingLatex: "h(1) = \\ln 1 - 1 = -1.", explanation: "\\( h(1) = -1 \\) gives the exponential factor \\( e^{-x} \\) in Stirling's formula." },
        { stepNumber: 10, description: "Differentiate again.", workingLatex: "h''(s) = -\\frac{1}{s^2}.", explanation: "Differentiate \\( 1/s - 1 \\): \\( \\tfrac{d}{ds}s^{-1} = -s^{-2} \\)." },
        { stepNumber: 11, description: "Curvature at the saddle.", workingLatex: "h''(1) = -1.", explanation: "\\( h''(1) = -1 < 0 \\) confirms a maximum of the real phase, a genuine descent point for Laplace's method." },
        { stepNumber: 12, description: "Polar form of the curvature.", workingLatex: "h''(1) = -1 = e^{i\\pi}, \\qquad \\alpha = \\pi.", explanation: "A negative real number has argument \\( \\pi \\)." },
        { stepNumber: 13, description: "Descent direction.", workingLatex: "\\phi = \\frac{\\pi - \\alpha}{2} = \\frac{\\pi - \\pi}{2} = 0.", explanation: "The steepest-descent path is along the real axis (\\( \\phi=0 \\)), which is exactly the original contour — no deformation needed, this is ordinary Laplace's method." },
        { stepNumber: 14, description: "Write the Laplace formula.", workingLatex: "\\int_0^\\infty e^{x\\,h(s)}\\,ds \\sim e^{x h(s_0)}\\sqrt{\\frac{2\\pi}{x\\,|h''(s_0)|}}.", explanation: "Laplace's method at an interior maximum, with amplitude \\( g=1 \\)." },
        { stepNumber: 15, description: "Substitute the saddle data.", workingLatex: "\\sim e^{-x}\\sqrt{\\frac{2\\pi}{x\\cdot 1}} = e^{-x}\\sqrt{\\frac{2\\pi}{x}}.", explanation: "Insert \\( h(1)=-1 \\) and \\( |h''(1)|=1 \\)." },
        { stepNumber: 16, description: "Multiply by the prefactor.", workingLatex: "\\Gamma(x+1) \\sim x^{x+1}\\,e^{-x}\\sqrt{\\frac{2\\pi}{x}}.", explanation: "Reattach \\( x^{x+1} \\) from step 6." },
        { stepNumber: 17, description: "Split the \\( x \\)-power.", workingLatex: "x^{x+1} = x^x\\cdot x.", explanation: "Separate one factor of \\( x \\) to combine with the \\( \\sqrt{1/x} \\)." },
        { stepNumber: 18, description: "Combine \\( x \\) with the root.", workingLatex: "x\\cdot\\sqrt{\\frac{2\\pi}{x}} = \\sqrt{x^2\\cdot\\frac{2\\pi}{x}} = \\sqrt{2\\pi x}.", explanation: "Bring the \\( x \\) inside the square root: \\( x^2/x = x \\)." },
        { stepNumber: 19, description: "Assemble Stirling's formula.", workingLatex: "\\Gamma(x+1) \\sim \\sqrt{2\\pi x}\\;x^{x}e^{-x}.", explanation: "Collect the surviving factors. This is the leading Stirling approximation." },
        { stepNumber: 20, description: "Sanity-check the growth.", workingLatex: "\\ln\\Gamma(x+1) \\sim x\\ln x - x + \\tfrac12\\ln(2\\pi x).", explanation: "Taking logs recovers the familiar \\( x\\ln x - x \\) leading behaviour plus the \\( \\tfrac12\\ln x \\) correction — a quick confidence check on the result." },
      ],
      finalAnswer: "Saddle \\( s_0=1 \\), \\( h''(1)=-1 \\), descent along \\( \\phi=0 \\); \\( \\Gamma(x+1)\\sim\\sqrt{2\\pi x}\\,x^x e^{-x} \\).",
      canonicalAnswer: "sqrt(2*pi*x)*x^x*exp(-x)",
    },
  },
  {
    id: "am7a-028",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A phase \\( h(z) = e^{i\\beta} z^2 \\) (with \\( 0<\\beta<\\pi \\) a fixed constant) has a saddle at \\( z=0 \\). Find the steepest-descent direction \\( \\phi(\\beta) \\), and determine the value of \\( \\beta \\) for which the descent path coincides with the line \\( \\arg z = \\tfrac{\\pi}{6} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["descent direction", "parameter dependence", "choice of root sign"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate once.", workingLatex: "h'(z) = 2e^{i\\beta}z.", explanation: "Differentiate \\( e^{i\\beta}z^2 \\); the constant phase \\( e^{i\\beta} \\) rides along the power rule." },
        { stepNumber: 2, description: "Confirm the saddle.", workingLatex: "h'(0) = 0 \\;\\Rightarrow\\; z=0 \\text{ is a saddle}.", explanation: "The derivative vanishes at the origin, confirming the stated saddle." },
        { stepNumber: 3, description: "Differentiate again.", workingLatex: "h''(z) = 2e^{i\\beta}.", explanation: "The second derivative is the constant \\( 2e^{i\\beta} \\), so the curvature is the same everywhere." },
        { stepNumber: 4, description: "Find the modulus of the curvature.", workingLatex: "|h''(0)| = |2e^{i\\beta}| = 2.", explanation: "The modulus is \\( 2 \\), independent of \\( \\beta \\); it sets the saddle width but not the orientation." },
        { stepNumber: 5, description: "Read off the curvature argument.", workingLatex: "\\alpha = \\arg h''(0) = \\beta.", explanation: "The curvature argument is simply \\( \\beta \\); the descent geometry therefore rotates with \\( \\beta \\)." },
        { stepNumber: 6, description: "Parametrise the displacement.", workingLatex: "z = re^{i\\phi}, \\qquad \\tfrac12 h''(0)z^2 = e^{i\\beta} r^2 e^{i2\\phi}.", explanation: "Square \\( z \\) and multiply by \\( \\tfrac12 h''(0) = e^{i\\beta} \\); the argument is \\( 2\\phi + \\beta \\)." },
        { stepNumber: 7, description: "Apply the descent condition.", workingLatex: "2\\phi + \\beta = \\pi.", explanation: "On a descent path the quadratic is real and negative, argument \\( \\pi \\)." },
        { stepNumber: 8, description: "Solve for the descent direction.", workingLatex: "\\phi(\\beta) = \\frac{\\pi - \\beta}{2} \\quad(\\text{and } \\phi + \\pi).", explanation: "Subtract \\( \\beta \\) and halve. There are two opposite descent rays." },
        { stepNumber: 9, description: "Examine the limits in \\( \\beta \\).", workingLatex: "\\beta\\to0^+:\\ \\phi\\to\\tfrac\\pi2; \\qquad \\beta\\to\\pi^-:\\ \\phi\\to0.", explanation: "As \\( \\beta \\) sweeps from \\( 0 \\) to \\( \\pi \\), the descent line swings from vertical to horizontal — a useful picture before solving the specific case." },
        { stepNumber: 10, description: "Set the descent angle to the target.", workingLatex: "\\frac{\\pi - \\beta}{2} = \\frac{\\pi}{6}.", explanation: "We require the descent direction to coincide with \\( \\arg z = \\pi/6 \\), so set the formula equal to \\( \\pi/6 \\)." },
        { stepNumber: 11, description: "Clear the fraction.", workingLatex: "\\pi - \\beta = \\frac{\\pi}{3}.", explanation: "Multiply both sides by \\( 2 \\)." },
        { stepNumber: 12, description: "Solve for \\( \\beta \\).", workingLatex: "\\beta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}.", explanation: "Rearrange to isolate \\( \\beta \\)." },
        { stepNumber: 13, description: "Check admissibility.", workingLatex: "0 < \\tfrac{2\\pi}{3} < \\pi.\\ \\checkmark", explanation: "The value lies in the prescribed range \\( 0<\\beta<\\pi \\), so it is admissible." },
        { stepNumber: 14, description: "Set up the verification.", workingLatex: "\\beta = \\tfrac{2\\pi}{3}, \\quad z = re^{i\\pi/6}.", explanation: "To confirm \\( \\arg z=\\pi/6 \\) is descent (not ascent), substitute it into the quadratic term." },
        { stepNumber: 15, description: "Form the quadratic factor.", workingLatex: "\\tfrac12 h''(0)z^2 = e^{i2\\pi/3}\\cdot r^2 e^{i\\pi/3}.", explanation: "Here \\( \\tfrac12 h''(0) = e^{i2\\pi/3} \\) and \\( z^2 = r^2 e^{i\\pi/3} \\)." },
        { stepNumber: 16, description: "Add the arguments.", workingLatex: "\\arg = \\tfrac{2\\pi}{3} + \\tfrac{\\pi}{3} = \\pi.", explanation: "The total argument is \\( \\pi \\), the descent value." },
        { stepNumber: 17, description: "Evaluate the quadratic.", workingLatex: "\\tfrac12 h''(0)z^2 = r^2 e^{i\\pi} = -r^2 < 0.\\ \\checkmark", explanation: "Real and negative, so \\( \\operatorname{Re} h \\) decreases along \\( \\arg z=\\pi/6 \\): it is genuinely the descent direction." },
        { stepNumber: 18, description: "Contrast with ascent.", workingLatex: "\\text{ascent: } 2\\phi + \\beta = 0 \\;\\Rightarrow\\; \\phi = -\\tfrac{\\beta}{2} = -\\tfrac{\\pi}{3}.", explanation: "For comparison, the ascent direction at \\( \\beta=2\\pi/3 \\) is \\( -\\pi/3 \\), at \\( 90^\\circ \\) to the descent line." },
        { stepNumber: 19, description: "Confirm orthogonality.", workingLatex: "\\tfrac{\\pi}{6} - \\big(-\\tfrac{\\pi}{3}\\big) = \\tfrac{\\pi}{2}.", explanation: "Descent and ascent are orthogonal, as always at a simple saddle — a sanity check." },
        { stepNumber: 20, description: "State the answer.", workingLatex: "\\phi(\\beta) = \\frac{\\pi-\\beta}{2}, \\qquad \\beta = \\frac{2\\pi}{3}.", explanation: "The descent direction is \\( (\\pi-\\beta)/2 \\) in general, and equals \\( \\arg z=\\pi/6 \\) precisely when \\( \\beta = 2\\pi/3 \\)." },
      ],
      finalAnswer: "\\( \\phi(\\beta) = \\tfrac{\\pi-\\beta}{2} \\); the descent path is \\( \\arg z = \\tfrac{\\pi}{6} \\) when \\( \\beta = \\tfrac{2\\pi}{3} \\).",
      canonicalAnswer: "beta = 2*pi/3",
    },
  },
  {
    id: "am7a-029",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Show that for the phase \\( h(z) = z^2 \\) the steepest-descent and steepest-ascent lines through the saddle \\( z=0 \\) are orthogonal, and prove the general result that at any simple saddle the descent and ascent directions always make an angle of \\( \\tfrac{\\pi}{4} \\) with each other... (correct: they bisect at \\( \\tfrac{\\pi}{4} \\)) — establish the true angle between adjacent descent and ascent lines.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["descent vs ascent", "orthogonality", "general result"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the curvature for \\( h=z^2 \\).", workingLatex: "h''(z) = 2, \\qquad h''(0) = 2, \\qquad \\alpha = 0.", explanation: "Differentiate \\( z^2 \\) twice; the real positive curvature has argument \\( 0 \\)." },
        { stepNumber: 2, description: "Descent condition for \\( h=z^2 \\).", workingLatex: "2\\phi + \\alpha = \\pi \\;\\implies\\; 2\\phi = \\pi.", explanation: "Substitute \\( \\alpha=0 \\) into the descent condition." },
        { stepNumber: 3, description: "Solve the descent directions.", workingLatex: "\\phi = \\tfrac\\pi2,\\ \\tfrac{3\\pi}2.", explanation: "The descent lines are vertical." },
        { stepNumber: 4, description: "Ascent condition for \\( h=z^2 \\).", workingLatex: "2\\phi + \\alpha = 0 \\;\\implies\\; 2\\phi = 0.", explanation: "The ascent condition with \\( \\alpha=0 \\)." },
        { stepNumber: 5, description: "Solve the ascent directions.", workingLatex: "\\phi = 0,\\ \\pi.", explanation: "The ascent lines are horizontal." },
        { stepNumber: 6, description: "Angle between them in this case.", workingLatex: "\\tfrac\\pi2 - 0 = \\tfrac\\pi2.", explanation: "The descent and ascent lines are at \\( 90^\\circ \\) — orthogonal. We now show this holds at every simple saddle, not just for \\( z^2 \\)." },
        { stepNumber: 7, description: "Set up the general local model.", workingLatex: "h(z) \\approx h(z_0) + \\tfrac12 h''(z_0)(z-z_0)^2, \\quad h''(z_0) = |h''|e^{i\\alpha}.", explanation: "At any simple saddle the quadratic model has curvature argument \\( \\alpha \\); the steepest lines are fixed by \\( \\alpha \\) alone." },
        { stepNumber: 8, description: "Write the quadratic's argument.", workingLatex: "(z-z_0)=re^{i\\phi}: \\quad \\arg\\big(\\tfrac12 h''(z_0)(z-z_0)^2\\big) = 2\\phi + \\alpha.", explanation: "Squaring doubles \\( \\phi \\); the curvature adds \\( \\alpha \\)." },
        { stepNumber: 9, description: "General descent condition.", workingLatex: "\\text{descent: } 2\\phi_d + \\alpha = \\pi.", explanation: "Descent needs the quadratic real and negative (argument \\( \\pi \\))." },
        { stepNumber: 10, description: "General ascent condition.", workingLatex: "\\text{ascent: } 2\\phi_a + \\alpha = 0.", explanation: "Ascent needs the quadratic real and positive (argument \\( 0 \\)); the SAME \\( \\alpha \\) appears in both." },
        { stepNumber: 11, description: "Subtract the two conditions.", workingLatex: "(2\\phi_d + \\alpha) - (2\\phi_a + \\alpha) = \\pi - 0.", explanation: "Subtracting the ascent condition from the descent condition." },
        { stepNumber: 12, description: "Cancel the curvature argument.", workingLatex: "2\\phi_d - 2\\phi_a = \\pi.", explanation: "The \\( \\alpha \\)'s cancel entirely, so the result is independent of the curvature's orientation." },
        { stepNumber: 13, description: "Solve for the angle.", workingLatex: "\\phi_d - \\phi_a = \\frac{\\pi}{2}.", explanation: "Halving gives a separation of exactly \\( \\tfrac\\pi2 \\) for ANY \\( \\alpha \\): descent and ascent lines are always orthogonal." },
        { stepNumber: 14, description: "Relate to harmonic conjugates.", workingLatex: "h = \\operatorname{Re} h + i\\operatorname{Im} h, \\quad \\nabla\\operatorname{Re} h \\perp \\nabla\\operatorname{Im} h.", explanation: "For an analytic \\( h \\), the gradients of its real and imaginary parts are orthogonal (Cauchy–Riemann)." },
        { stepNumber: 15, description: "Identify the steepest lines.", workingLatex: "\\text{steepest of } \\operatorname{Re} h \\parallel \\nabla\\operatorname{Re} h, \\quad \\text{level of } \\operatorname{Im} h \\perp \\nabla\\operatorname{Im} h.", explanation: "The steepest-descent/ascent lines run along \\( \\nabla\\operatorname{Re} h \\); the level lines of \\( \\operatorname{Im} h \\) run perpendicular to \\( \\nabla\\operatorname{Im} h \\)." },
        { stepNumber: 16, description: "Combine via Cauchy–Riemann.", workingLatex: "\\nabla\\operatorname{Re} h \\perp \\nabla\\operatorname{Im} h \\;\\Rightarrow\\; \\text{steepest lines} = \\text{level lines of } \\operatorname{Im} h.", explanation: "Because the two gradients are orthogonal, the steepest line of \\( \\operatorname{Re} h \\) coincides with a level line of \\( \\operatorname{Im} h \\) — the very definition of a steepest path." },
        { stepNumber: 17, description: "Conclude the general orthogonality.", workingLatex: "\\boxed{\\ \\phi_d - \\phi_a = \\tfrac{\\pi}{2}\\ }.", explanation: "Descent and ascent lines cross at right angles at every simple saddle, the geometric face of Cauchy–Riemann." },
        { stepNumber: 18, description: "Re-examine the false premise.", workingLatex: "\\text{claim: angle} = \\tfrac{\\pi}{4}? \\quad\\text{No: angle} = \\tfrac{\\pi}{2}.", explanation: "The premise of a \\( \\pi/4 \\) angle between descent and ascent is FALSE; the correct separation is \\( \\pi/2 \\)." },
        { stepNumber: 19, description: "Explain where \\( \\pi/4 \\) really comes from.", workingLatex: "\\alpha = \\tfrac{\\pi}{2}: \\ \\phi_d = \\tfrac{\\pi}{4}, \\ \\phi_a = -\\tfrac{\\pi}{4}.", explanation: "The \\( \\pi/4 \\) figure is only the angle each line makes with the real axis in the special case \\( \\alpha=\\pi/2 \\) (e.g. \\( h''=2i \\)); it is not the angle between the two lines." },
        { stepNumber: 20, description: "State the corrected result.", workingLatex: "\\phi_d - \\phi_a = \\tfrac{\\pi}{2} \\text{ for all } \\alpha.", explanation: "At every simple saddle the steepest-descent and steepest-ascent lines are orthogonal, independent of \\( h''(z_0) \\)." },
      ],
      finalAnswer: "Descent and ascent lines are orthogonal: \\( \\phi_d - \\phi_a = \\tfrac{\\pi}{2} \\) at every simple saddle.",
      canonicalAnswer: "pi/2",
    },
  },
  {
    id: "am7a-030",
    topicRef: "am7a",
    topicTitle: "Saddle points & paths of steepest descent 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Consider \\( I(x) = \\displaystyle\\int_{-\\infty}^{\\infty} e^{x(z^2 - z^4/4)}\\,dz \\) ... (the integrand grows; instead take) \\( I(x) = \\displaystyle\\int_{-\\infty}^{\\infty} e^{-x(z^4/4 - z^2/2)}\\,dz \\), \\( x\\to+\\infty \\). Identify the relevant saddles on the real axis, decide which dominate, and give the leading two-saddle asymptotic.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["multiple saddles", "competing saddles", "leading term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the phase.", workingLatex: "h(z) = -\\big(\\tfrac14 z^4 - \\tfrac12 z^2\\big) = -\\tfrac14 z^4 + \\tfrac12 z^2.", explanation: "We want \\( \\int e^{x h} \\) with \\( h \\) bounded above so the integral converges." },
        { stepNumber: 2, description: "Confirm convergence.", workingLatex: "|z|\\to\\infty:\\ h(z) \\sim -\\tfrac14 z^4 \\to -\\infty.", explanation: "The quartic term dominates at large \\( |z| \\) and is negative, so \\( e^{xh} \\) decays — the integral converges." },
        { stepNumber: 3, description: "Differentiate the quartic term.", workingLatex: "\\tfrac{d}{dz}\\big(-\\tfrac14 z^4\\big) = -z^3.", explanation: "Power rule on the leading term." },
        { stepNumber: 4, description: "Differentiate the quadratic term.", workingLatex: "\\tfrac{d}{dz}\\big(\\tfrac12 z^2\\big) = z.", explanation: "Power rule on the second term; assembling, \\( h'(z) = -z^3 + z \\)." },
        { stepNumber: 5, description: "Factor the derivative.", workingLatex: "h'(z) = -z^3 + z = -z(z^2-1).", explanation: "Pull out \\( -z \\) to expose the roots." },
        { stepNumber: 6, description: "Find the saddles.", workingLatex: "-z(z^2 - 1) = 0 \\;\\implies\\; z = 0,\\ \\pm 1.", explanation: "Three real saddles. We compare \\( h \\) at each to see which control the leading asymptotics." },
        { stepNumber: 7, description: "Phase value at the centre.", workingLatex: "h(0) = -\\tfrac14(0) + \\tfrac12(0) = 0.", explanation: "The central saddle sits at height \\( 0 \\)." },
        { stepNumber: 8, description: "Phase value at the outer saddles.", workingLatex: "h(\\pm1) = -\\tfrac14 + \\tfrac12 = \\tfrac14.", explanation: "Using \\( z^4 = z^2 = 1 \\) at \\( z=\\pm1 \\); both give \\( +\\tfrac14 \\)." },
        { stepNumber: 9, description: "Compare the heights.", workingLatex: "h(\\pm1) = \\tfrac14 \\ >\\ 0 = h(0).", explanation: "The outer saddles have the LARGER \\( h \\); since the contribution scales as \\( e^{xh} \\), the two saddles \\( z=\\pm1 \\) dominate exponentially over \\( z=0 \\)." },
        { stepNumber: 10, description: "Differentiate again for curvature.", workingLatex: "h''(z) = -3z^2 + 1.", explanation: "Differentiate \\( h'(z) = -z^3 + z \\)." },
        { stepNumber: 11, description: "Curvature at the outer saddles.", workingLatex: "h''(\\pm1) = -3(1) + 1 = -2.", explanation: "Real negative curvature: each outer saddle is a maximum of \\( h \\) along the real axis." },
        { stepNumber: 12, description: "Curvature at the centre.", workingLatex: "h''(0) = 1 > 0.", explanation: "At \\( z=0 \\) the curvature is positive — a minimum of \\( h \\) along the real axis, so \\( z=0 \\) is not a dominant peak." },
        { stepNumber: 13, description: "Descent direction at the outer saddles.", workingLatex: "h''(\\pm1) = -2 = 2e^{i\\pi}, \\quad \\phi = \\frac{\\pi-\\pi}{2} = 0.", explanation: "Descent is along the real axis (\\( \\phi=0 \\)) — the contour need not leave the real line; this is ordinary Laplace's method at the maxima." },
        { stepNumber: 14, description: "Write the Laplace formula.", workingLatex: "I_{z_0} \\sim e^{x h(z_0)}\\sqrt{\\frac{2\\pi}{x\\,|h''(z_0)|}}.", explanation: "Laplace's contribution at an interior maximum, amplitude \\( g=1 \\)." },
        { stepNumber: 15, description: "Substitute the saddle data.", workingLatex: "I_{\\pm1} \\sim e^{x/4}\\sqrt{\\frac{2\\pi}{2x}}.", explanation: "Insert \\( h(\\pm1)=\\tfrac14 \\) and \\( |h''(\\pm1)|=2 \\)." },
        { stepNumber: 16, description: "Simplify the width.", workingLatex: "\\sqrt{\\frac{2\\pi}{2x}} = \\sqrt{\\frac{\\pi}{x}}, \\qquad I_{\\pm1} \\sim e^{x/4}\\sqrt{\\frac{\\pi}{x}}.", explanation: "The \\( 2 \\) in the denominator cancels the \\( 2 \\) in \\( 2\\pi \\)." },
        { stepNumber: 17, description: "Use the symmetry of the saddles.", workingLatex: "h(-z) = h(z) \\;\\Rightarrow\\; I_{+1} = I_{-1}.", explanation: "The phase is even, so the two outer saddles contribute equal amounts." },
        { stepNumber: 18, description: "Add the two equal contributions.", workingLatex: "I(x) \\sim I_{+1} + I_{-1} = 2\\,e^{x/4}\\sqrt{\\frac{\\pi}{x}}.", explanation: "Their sum is twice one of them." },
        { stepNumber: 19, description: "Discard the central saddle.", workingLatex: "I_0 \\sim O(1) \\ll e^{x/4}\\sqrt{\\tfrac\\pi x}.", explanation: "The central saddle \\( z=0 \\) (a minimum on the real axis, picked up on a rotated descent contour) adds only an \\( O(1) \\) term, exponentially negligible against \\( e^{x/4} \\)." },
        { stepNumber: 20, description: "State the leading asymptotic.", workingLatex: "I(x) \\sim 2\\sqrt{\\frac{\\pi}{x}}\\,e^{x/4}, \\qquad x\\to+\\infty.", explanation: "Two real maxima of equal height combine to give twice the single-saddle Laplace contribution — the canonical 'two competing dominant saddles' result." },
      ],
      finalAnswer: "\\( I(x) \\sim 2\\sqrt{\\dfrac{\\pi}{x}}\\,e^{x/4} \\) (the saddles \\( z=\\pm1 \\) dominate).",
      canonicalAnswer: "2*sqrt(pi/x)*exp(x/4)",
    },
  },
];
