import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — § am8a
 * Method of Steepest Descent II: Deforming past poles & branch cuts.
 * Ref: am8a
 *
 * 30 fully-worked questions (6 Foundation / 12 Standard / 12 Challenge) on the
 * extra contributions a contour acquires when it is deformed onto a steepest-
 * descent or Bromwich path and is dragged across an isolated singularity:
 *   - the residue at a simple pole crossed during the deformation
 *     (2 pi i times the residue, with the orientation/sign that the crossing
 *     dictates), and
 *   - the algebraic "wrap" contribution a contour collects around a branch cut
 *     (the local model int_0^inf t^{s-1} e^{-xt} dt = Gamma(s)/x^s and the
 *     discontinuity 2i Im across a square-root cut).
 *
 * The running steepest-descent example is phi(z) = z - 2 z^{1/2} (principal
 * branch, cut on (-inf, 0]): saddle z0 = 1, phi(1) = -1, phi''(1) = 1/2, descent
 * parabola y^2 = 4(1 - x). Pushing a Bromwich line Re z = gamma (gamma > 1) left
 * onto that parabola sweeps the real interval 1 < x < gamma, so a real pole z = c
 * is crossed iff 1 < c < gamma; its residue exponent psi(c) = c - 2 sqrt(c) has
 * minimum -1 at c = 1, hence whenever the pole is crossed it beats the saddle's
 * e^{-k}. Seeded from Cambridge Part II Asymptotic Methods Example Sheet 2 (Q10:
 * branch-cut + simple-pole steepest-descent integral) with framings varied.
 *
 * Maths checked symbolically (sympy) and numerically (mpmath dps 30 /
 * scipy.special). Verified building blocks:
 *   int_{-inf}^inf e^{ixt}/(t^2+1) dt = pi e^{-x}                       (exact)
 *   int_{-inf}^inf e^{ixt}/(t^2+a^2) dt = (pi/a) e^{-ax}                (exact)
 *   int_0^inf cos(xt)/(t^2+1) dt = (pi/2) e^{-x}                        (exact)
 *   int_{-inf}^inf e^{ixt}/[(t^2+1)(t^2+4)] dt = (pi/3)e^{-x}-(pi/6)e^{-2x} (exact)
 *   int_{-inf}^inf e^{ixt}/(t^2+1)^2 dt = (pi/2)(1+x) e^{-x}            (exact)
 *   int_{-inf}^inf e^{ixt}/(t-i a) dt = 2 pi i e^{-a x}                 (exact)
 *   int_0^inf t^{s-1} e^{-xt} dt = Gamma(s)/x^s; Gamma(3/2)=sqrt(pi)/2  (exact)
 *   z^{1/2} jump at z=-r is 2i sqrt(r); oint t^{1/2}e^{-x|t|} = -i sqrt(pi)/x^{3/2}
 *   int_0^inf t^{a-1}e^{-xt}/(1+t) dt ~ sum (-1)^n Gamma(a+n)/x^{a+n}   (2-term checked)
 *   phi=z-2z^{1/2}: saddle z=1, parabola z=(1+i tau)^2 gives phi=-(1+tau^2)
 *   Full Bromwich I(k) matched to pole+saddle at k=30..40: c=0.5 saddle-only,
 *   c=1.5,2 pole dominant, c=ib (b>2) and c>gamma not crossed (saddle-only).
 */
export const questions: Question[] = [
  // ───── FOUNDATION (6) ─────
  {
    id: "am8a-001",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 01",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "To evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt \\) with \\( x>0 \\) by closing the contour, decide which half-plane the closing arc must lie in and name the single pole it then encloses.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["contour closing", "Jordan's lemma", "simple pole"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add a closing arc to the real line.",
          workingLatex: "\\int_{-\\infty}^{\\infty}=\\oint_{C}-\\int_{\\text{arc}},\\quad C=[-R,R]\\cup\\Gamma_R.",
          explanation:
            "To use the residue theorem the open line must be completed into a closed contour \\( C \\) by a large semicircular arc \\( \\Gamma_R \\) of radius \\( R\\to\\infty \\); the question is which half-plane the arc may lie in.",
        },
        {
          stepNumber: 2,
          description: "Split the exponential into oscillation and decay.",
          workingLatex: "e^{ixt}=e^{ix\\operatorname{Re}t}\\,e^{-x\\operatorname{Im}t}.",
          explanation:
            "Writing \\( t=\\operatorname{Re}t+i\\operatorname{Im}t \\), the modulus \\( |e^{ixt}|=e^{-x\\operatorname{Im}t} \\) separates the unit-modulus oscillation from the part that controls growth on the arc.",
        },
        {
          stepNumber: 3,
          description: "Pick the decaying half-plane.",
          workingLatex: "|e^{ixt}|=e^{-x\\operatorname{Im}t}\\to 0\\iff x\\operatorname{Im}t\\to+\\infty\\iff \\operatorname{Im}t>0.",
          explanation:
            "Since \\( x>0 \\), the integrand decays on the arc only where \\( \\operatorname{Im}t>0 \\), so the arc must be taken in the upper half-plane (UHP) for it to be negligible.",
        },
        {
          stepNumber: 4,
          description: "Invoke Jordan's lemma to kill the arc.",
          workingLatex: "\\Big|\\int_{\\Gamma_R}\\frac{e^{ixt}}{t^2+1}\\,dt\\Big|\\le\\frac{\\pi}{xR}\\to 0\\quad(R\\to\\infty).",
          explanation:
            "Jordan's lemma applies because the rational factor \\( 1/(t^2+1)=O(R^{-2}) \\) decays and \\( x>0 \\), so the upper arc contributes nothing and the line integral equals the closed-contour integral.",
        },
        {
          stepNumber: 5,
          description: "Locate the poles of the rational factor.",
          workingLatex: "t^2+1=(t-i)(t+i)\\;\\Longrightarrow\\;t=\\pm i.",
          explanation:
            "The integrand has simple poles at \\( t=i \\) and \\( t=-i \\); only the one lying inside the closing semicircle is enclosed.",
        },
        {
          stepNumber: 6,
          description: "Pick out the enclosed pole.",
          workingLatex: "\\text{Close in the UHP; enclosed pole } t=i.",
          explanation:
            "The pole \\( t=-i \\) sits in the lower half-plane and is missed, so deforming onto the closed contour collects only the residue at \\( t=i \\).",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Line.Segment point1={[-2.3,0]} point2={[2.3,0]} color="var(--mafs-fg-accent)" weight={3} />
  <Plot.Parametric xy={(t) => [2.3*Math.cos(t), 2.3*Math.sin(t)]} domain={[0, Math.PI]} color="var(--mafs-fg-accent)" weight={3} />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Point x={0} y={-1} color="var(--mafs-fg-orange)" />
  <LaTeX at={[0,1]} tex="\\times" color="var(--mafs-fg-blue)" />
  <LaTeX at={[0,-1]} tex="\\times" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.55,1.45]} tex="t=i" color="var(--mafs-fg-blue)" />
  <LaTeX at={[0.55,-1.45]} tex="t=-i" color="var(--mafs-fg-orange)" />
  <LaTeX at={[-1.45,2.05]} tex="\\text{close UHP}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.4,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
      ],
      finalAnswer: "Close in the upper half-plane; the enclosed pole is \\( t=i \\).",
    },
  },
  {
    id: "am8a-002",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Compute the residue of \\( \\dfrac{e^{ixt}}{t^2+1} \\) at the simple pole \\( t=i \\), where \\( x>0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["residue", "simple pole"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Confirm the pole is simple.",
          workingLatex: "t^2+1=0\\;\\Longrightarrow\\;t=\\pm i,\\ \\text{each a single root}.",
          explanation:
            "The denominator has distinct simple zeros at \\( t=\\pm i \\) and the numerator \\( e^{ixt} \\) is entire and nonzero there, so \\( t=i \\) is a simple pole and the simple-pole formula applies.",
        },
        {
          stepNumber: 2,
          description: "Factor the denominator.",
          workingLatex: "\\frac{e^{ixt}}{t^2+1}=\\frac{e^{ixt}}{(t-i)(t+i)}.",
          explanation:
            "Writing the denominator as a product exposes the simple factor \\( (t-i) \\) that the residue formula cancels and the cofactor \\( (t+i) \\) that survives the limit.",
        },
        {
          stepNumber: 3,
          description: "Write the simple-pole residue formula.",
          workingLatex:
            "\\operatorname*{Res}_{t=i}=\\lim_{t\\to i}(t-i)\\,\\frac{e^{ixt}}{(t-i)(t+i)}.",
          explanation:
            "For a simple pole the residue is \\( (t-i) \\) times the integrand evaluated in the limit; this isolates the coefficient of \\( (t-i)^{-1} \\) in the Laurent expansion.",
        },
        {
          stepNumber: 4,
          description: "Cancel the pole factor.",
          workingLatex:
            "=\\lim_{t\\to i}\\frac{e^{ixt}}{t+i}=\\frac{e^{ix\\cdot i}}{i+i}.",
          explanation:
            "The \\( (t-i) \\) cancels against the denominator's matching factor, leaving a function continuous at \\( t=i \\) that may be evaluated directly by substitution.",
        },
        {
          stepNumber: 5,
          description: "Simplify the exponent.",
          workingLatex: "ix\\cdot i=i^2 x=-x\\;\\Longrightarrow\\;e^{ix\\cdot i}=e^{-x}.",
          explanation:
            "Since \\( i\\cdot i=-1 \\) the exponent collapses to \\( -x \\); the real decay \\( e^{-x} \\) is exactly the exponentially small quantity the pole crossing produces.",
        },
        {
          stepNumber: 6,
          description: "Simplify the denominator and state the residue.",
          workingLatex: "i+i=2i\\;\\Longrightarrow\\;\\operatorname*{Res}_{t=i}=\\frac{e^{-x}}{2i}.",
          explanation:
            "Collecting numerator and denominator gives the residue \\( e^{-x}/(2i) \\), which is purely imaginary — the factor that, multiplied by \\( 2\\pi i \\), yields the real value \\( \\pi e^{-x} \\) for the integral.",
        },
      ],
      finalAnswer: "\\( \\dfrac{e^{-x}}{2i} \\).",
      canonicalAnswer: "exp(-x)/(2*i)",
    },
  },
  {
    id: "am8a-003",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 03",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "While deforming a contour, a simple pole of residue \\( R \\) is swept across so that it ends up encircled once anticlockwise. State the extra contribution this adds to the integral, and what changes if the encirclement is clockwise.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["residue theorem", "deformation", "orientation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the deformation as a difference of contours.",
          workingLatex: "\\Delta I=\\int_{C_{\\text{new}}}g\\,dz-\\int_{C_{\\text{old}}}g\\,dz.",
          explanation:
            "The extra contribution is the difference between the integral along the moved contour and the original one; away from the pole the integrand \\( g \\) is analytic, so only the swept singularity can make this nonzero.",
        },
        {
          stepNumber: 2,
          description: "Recognise the difference as a closed loop.",
          workingLatex: "C_{\\text{new}}-C_{\\text{old}}=\\partial D,\\quad D\\ni\\text{the crossed pole}.",
          explanation:
            "Running the new contour forward and the old one backward joins them into the boundary \\( \\partial D \\) of the thin region \\( D \\) the contour swept, which contains the pole.",
        },
        {
          stepNumber: 3,
          description: "Express the loop as a small circle.",
          workingLatex: "\\Delta I=\\oint_{\\text{loop}} g(z)\\,dz = 2\\pi i\\sum\\operatorname{Res}.",
          explanation:
            "Moving the contour from one side of a pole to the other is equivalent to inserting a tiny closed loop around the pole; by the residue theorem that loop integrates to \\( 2\\pi i \\) times the enclosed residue.",
        },
        {
          stepNumber: 4,
          description: "Collapse to the single crossed pole.",
          workingLatex: "\\Delta I = 2\\pi i\\,R.",
          explanation:
            "With exactly one simple pole of residue \\( R \\) enclosed anticlockwise, the sum reduces to one term.",
        },
        {
          stepNumber: 5,
          description: "Account for clockwise orientation.",
          workingLatex: "\\oint_{\\text{cw}}=-\\oint_{\\text{ccw}}\\;\\Longrightarrow\\;\\Delta I=-2\\pi i\\,R.",
          explanation:
            "Reversing the sense of encirclement reverses the line element \\( dz \\) throughout the loop, negating the integral; a clockwise crossing therefore picks up \\( -2\\pi i\\,R \\) instead.",
        },
        {
          stepNumber: 6,
          description: "Record the orientation rule.",
          workingLatex: "\\text{anticlockwise: } +2\\pi i\\,R,\\qquad \\text{clockwise: } -2\\pi i\\,R.",
          explanation:
            "Fixing this sign is the commonest slip when deforming a Bromwich or steepest-descent contour past a pole; the direction the contour is dragged dictates which sign applies.",
        },
      ],
      finalAnswer: "Adds \\( 2\\pi i\\,R \\) (anticlockwise); \\( -2\\pi i\\,R \\) if clockwise.",
      canonicalAnswer: "2*pi*i*R",
    },
  },
  {
    id: "am8a-004",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 04",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the steepest-descent phase \\( \\varphi(z)=z-2z^{1/2} \\) (principal branch, cut along \\( (-\\infty,0] \\)), locate the saddle point and evaluate \\( \\varphi \\) there.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle point", "branch cut", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the phase as a power of \\( z \\).",
          workingLatex: "\\varphi(z)=z-2z^{1/2}=z-2z^{1/2}.",
          explanation:
            "The two terms are \\( z=z^{1} \\) and \\( -2z^{1/2} \\); on the principal branch (cut on \\( (-\\infty,0] \\)) the half-power is single-valued, so \\( \\varphi \\) is differentiable off the cut.",
        },
        {
          stepNumber: 2,
          description: "Differentiate term by term.",
          workingLatex: "\\frac{d}{dz}\\,z=1,\\qquad \\frac{d}{dz}\\big(-2z^{1/2}\\big)=-2\\cdot\\tfrac12 z^{-1/2}=-z^{-1/2}.",
          explanation:
            "Applying the power rule to each term gives the derivative pieces; the factor of \\( \\tfrac12 \\) from \\( z^{1/2} \\) cancels the \\( 2 \\) in front.",
        },
        {
          stepNumber: 3,
          description: "Assemble the derivative.",
          workingLatex: "\\varphi'(z)=1-\\frac{1}{z^{1/2}}.",
          explanation:
            "The saddle is the stationary point \\( \\varphi'(z)=0 \\); on the principal branch \\( z^{1/2} \\) is single-valued off the cut, so the derivative is unambiguous.",
        },
        {
          stepNumber: 4,
          description: "Set the derivative to zero.",
          workingLatex: "1-\\frac{1}{z^{1/2}}=0\\;\\Longrightarrow\\;z^{1/2}=1.",
          explanation:
            "Solving for \\( z^{1/2} \\) first respects the branch; the equation \\( z^{1/2}=1 \\) keeps the unknown in the form the principal root controls.",
        },
        {
          stepNumber: 5,
          description: "Square to find the saddle.",
          workingLatex: "z^{1/2}=1\\;\\Longrightarrow\\;z=1^2=1\\quad(\\text{off the cut}).",
          explanation:
            "Squaring is valid here because \\( z^{1/2}=1 \\) has positive real part, the principal-branch requirement; the unique saddle \\( z=1 \\) sits to the right of the cut.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the phase at the saddle.",
          workingLatex: "\\varphi(1)=1-2\\sqrt{1}=1-2=-1.",
          explanation:
            "The saddle sets the exponential scale \\( e^{k\\varphi(1)}=e^{-k} \\); any pole the contour is deformed past must be compared against this rate.",
        },
      ],
      finalAnswer: "Saddle at \\( z=1 \\); \\( \\varphi(1)=-1 \\).",
      canonicalAnswer: "-1",
    },
  },
  {
    id: "am8a-005",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 05",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The steepest-descent paths through the saddle \\( z=1 \\) of \\( \\varphi(z)=z-2z^{1/2} \\) are \\( z_\\pm(\\tau)=1-\\tau^2\\pm 2i\\tau \\) for \\( \\tau\\ge 0 \\). Writing \\( z=x+iy \\), eliminate \\( \\tau \\) to find the parabola they trace.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["steepest descent path", "parabola", "branch cut"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off the real part.",
          workingLatex: "x=\\operatorname{Re}z_\\pm(\\tau)=1-\\tau^2.",
          explanation:
            "The real part of \\( z_\\pm(\\tau)=1-\\tau^2\\pm 2i\\tau \\) is the same for both signs, fixing the horizontal coordinate as a function of \\( \\tau \\).",
        },
        {
          stepNumber: 2,
          description: "Read off the imaginary part.",
          workingLatex: "y=\\operatorname{Im}z_\\pm(\\tau)=\\pm 2\\tau.",
          explanation:
            "The imaginary part carries the sign, so the two branches \\( z_+ \\) and \\( z_- \\) are the upper and lower halves of one curve traced by \\( \\tau\\ge 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Solve the imaginary part for \\( \\tau \\).",
          workingLatex: "y=\\pm 2\\tau\\;\\Longrightarrow\\;\\tau=\\frac{|y|}{2}.",
          explanation:
            "Inverting \\( y=\\pm 2\\tau \\) gives \\( \\tau=|y|/2 \\) covering both signs at once, ready to substitute into the expression for \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "Substitute to eliminate the parameter.",
          workingLatex: "x=1-\\tau^2=1-\\Big(\\frac{|y|}{2}\\Big)^2=1-\\frac{y^2}{4}.",
          explanation:
            "Replacing \\( \\tau \\) by \\( |y|/2 \\) removes the parameter and merges the two branches into a single relation between \\( x \\) and \\( y \\).",
        },
        {
          stepNumber: 5,
          description: "Rearrange to isolate \\( y^2 \\).",
          workingLatex: "x-1=-\\frac{y^2}{4}\\;\\Longrightarrow\\;y^2=-4(x-1).",
          explanation:
            "Moving the constant across and multiplying by \\( -4 \\) collects the curve into the conic form with \\( y^2 \\) alone on the left.",
        },
        {
          stepNumber: 6,
          description: "Write the parabola in standard form.",
          workingLatex: "y^2=4(1-x).",
          explanation:
            "A leftward-opening parabola with vertex at the saddle \\( (1,0) \\); numerically \\( \\operatorname{Im}\\varphi\\equiv 0 \\) along it, confirming it is the steepest-descent contour.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-2.6, 2.6]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[-3.3,0]} point2={[0,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.4,-0.5]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.65,2.3]} tex="\\text{steepest descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-1.9,-0.5]} tex="\\text{branch cut}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.5,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
      ],
      finalAnswer: "\\( y^2=4(1-x) \\).",
      canonicalAnswer: "y^2 = 4*(1-x)",
    },
  },
  {
    id: "am8a-006",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 06",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The contribution from wrapping a contour around a branch point has the local form \\( \\displaystyle\\int_0^{\\infty} t^{s-1}e^{-xt}\\,dt \\) with \\( s>0 \\) and \\( x>0 \\). Evaluate it in closed form.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["branch point", "Gamma function", "Watson's lemma"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the obstacle to direct evaluation.",
          workingLatex: "\\int_0^{\\infty}t^{s-1}e^{-xt}\\,dt,\\qquad s>0,\\ x>0.",
          explanation:
            "The non-integer power \\( t^{s-1} \\) is the branch-point behaviour at \\( t=0 \\); the parameter \\( x \\) in the exponent prevents reading off a standard Gamma integral until it is scaled out.",
        },
        {
          stepNumber: 2,
          description: "Choose the rescaling substitution.",
          workingLatex: "u=xt,\\qquad t=\\frac{u}{x}.",
          explanation:
            "Setting \\( u=xt \\) turns \\( e^{-xt} \\) into \\( e^{-u} \\); since \\( x>0 \\) the limits \\( t:0\\to\\infty \\) map to \\( u:0\\to\\infty \\) unchanged.",
        },
        {
          stepNumber: 3,
          description: "Transform the differential.",
          workingLatex: "dt=\\frac{du}{x}.",
          explanation:
            "Differentiating \\( t=u/x \\) (with \\( x \\) constant) gives the measure \\( dt=du/x \\), supplying one extra factor of \\( 1/x \\).",
        },
        {
          stepNumber: 4,
          description: "Substitute into the integral.",
          workingLatex:
            "\\int_0^{\\infty}\\Big(\\frac{u}{x}\\Big)^{s-1}e^{-u}\\,\\frac{du}{x}.",
          explanation:
            "Replacing \\( t^{s-1}=(u/x)^{s-1} \\), \\( e^{-xt}=e^{-u} \\) and \\( dt=du/x \\) recasts everything in the new variable.",
        },
        {
          stepNumber: 5,
          description: "Collect the powers of \\( x \\).",
          workingLatex:
            "=\\frac{1}{x^{s-1}}\\cdot\\frac{1}{x}\\int_0^{\\infty}u^{s-1}e^{-u}\\,du=\\frac{1}{x^{s}}\\int_0^{\\infty}u^{s-1}e^{-u}\\,du.",
          explanation:
            "The factors \\( x^{-(s-1)} \\) and \\( x^{-1} \\) combine to \\( x^{-s} \\), and the surviving integral is the standard Gamma integral, now free of \\( x \\).",
        },
        {
          stepNumber: 6,
          description: "Identify the Gamma function.",
          workingLatex:
            "\\int_0^{\\infty}u^{s-1}e^{-u}\\,du=\\Gamma(s)\\;\\Longrightarrow\\;\\frac{\\Gamma(s)}{x^{s}}.",
          explanation:
            "This \\( \\Gamma(s)/x^{s} \\) is the prototype branch-cut contribution: a fractional power at the branch point gives algebraic decay \\( x^{-s} \\) rather than the exponential decay a saddle produces.",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(s)}{x^{s}} \\).",
      canonicalAnswer: "gamma(s)/x^s",
    },
  },

  // ───── STANDARD (12) ─────
  {
    id: "am8a-007",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 07",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate \\( I(x)=\\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt \\) for \\( x>0 \\) by closing the contour and picking up the enclosed residue.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "Fourier integral", "contour deformation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Complete the line into a closed contour.",
          workingLatex: "I(x)=\\lim_{R\\to\\infty}\\Big(\\oint_{C_R}-\\int_{\\Gamma_R}\\Big)\\frac{e^{ixt}}{t^2+1}\\,dt,\\ C_R=[-R,R]\\cup\\Gamma_R.",
          explanation:
            "Adjoining a semicircular arc \\( \\Gamma_R \\) closes the real line into \\( C_R \\); the residue theorem can then be applied once we show the arc drops out.",
        },
        {
          stepNumber: 2,
          description: "Estimate the integrand on the arc.",
          workingLatex: "|e^{ixt}|=e^{-x\\operatorname{Im}t},\\qquad \\Big|\\frac{1}{t^2+1}\\Big|\\le\\frac{1}{R^2-1}.",
          explanation:
            "The exponential is bounded by \\( e^{-x\\operatorname{Im}t} \\) and the rational factor by \\( (R^2-1)^{-1} \\); both are needed for the Jordan estimate.",
        },
        {
          stepNumber: 3,
          description: "Choose the upper half-plane.",
          workingLatex: "x>0:\\ e^{-x\\operatorname{Im}t}\\le 1\\ \\text{for}\\ \\operatorname{Im}t\\ge 0.",
          explanation:
            "Because \\( x>0 \\) the exponential decays only where \\( \\operatorname{Im}t>0 \\), so the arc must be taken in the upper half-plane (UHP).",
        },
        {
          stepNumber: 4,
          description: "Kill the arc by Jordan's lemma.",
          workingLatex: "\\Big|\\int_{\\Gamma_R}\\Big|\\le\\frac{1}{R^2-1}\\cdot\\frac{\\pi}{x}\\to 0\\quad(R\\to\\infty).",
          explanation:
            "Jordan's lemma bounds the upper arc by \\( \\pi/(x) \\) times the rational decay, which vanishes, so \\( I(x)=\\oint_{C}\\) over the closed UHP contour.",
        },
        {
          stepNumber: 5,
          description: "Factor the denominator.",
          workingLatex: "t^2+1=(t-i)(t+i).",
          explanation:
            "Factoring exposes the two simple poles at \\( t=\\pm i \\) needed to apply the residue formula.",
        },
        {
          stepNumber: 6,
          description: "Identify the enclosed pole.",
          workingLatex: "\\text{Enclosed: } t=i;\\quad t=-i\\ \\text{excluded (LHP)}.",
          explanation:
            "Only \\( t=i \\) lies inside the upper semicircle; \\( t=-i \\) sits in the lower half-plane and is missed.",
        },
        {
          stepNumber: 7,
          description: "Apply the simple-pole residue formula.",
          workingLatex: "\\operatorname*{Res}_{t=i}=\\lim_{t\\to i}(t-i)\\frac{e^{ixt}}{(t-i)(t+i)}=\\frac{e^{ix\\cdot i}}{2i}.",
          explanation:
            "Cancelling \\( (t-i) \\) leaves the cofactor \\( e^{ixt}/(t+i) \\), evaluated at \\( t=i \\) where \\( t+i=2i \\).",
        },
        {
          stepNumber: 8,
          description: "Simplify the residue.",
          workingLatex: "e^{ix\\cdot i}=e^{-x}\\;\\Longrightarrow\\;\\operatorname*{Res}_{t=i}=\\frac{e^{-x}}{2i}.",
          explanation:
            "Using \\( i\\cdot i=-1 \\) the exponent becomes \\( -x \\), giving the purely imaginary residue \\( e^{-x}/(2i) \\).",
        },
        {
          stepNumber: 9,
          description: "Apply the residue theorem.",
          workingLatex: "I(x)=2\\pi i\\,\\operatorname*{Res}_{t=i}=2\\pi i\\cdot\\frac{e^{-x}}{2i}.",
          explanation:
            "The anticlockwise closed contour collects \\( 2\\pi i \\) times the single enclosed residue.",
        },
        {
          stepNumber: 10,
          description: "Cancel and state the value.",
          workingLatex: "I(x)=\\frac{2\\pi i}{2i}\\,e^{-x}=\\pi e^{-x}.",
          explanation:
            "The factors of \\( 2i \\) cancel to leave the real value \\( \\pi e^{-x} \\); checked numerically to full precision.",
        },
      ],
      finalAnswer: "\\( I(x)=\\pi e^{-x} \\).",
      canonicalAnswer: "pi*exp(-x)",
    },
  },
  {
    id: "am8a-008",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 08",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+a^2}\\,dt \\) for \\( x>0,\\ a>0 \\) by deforming onto the enclosed pole.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "Fourier integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the denominator.",
          workingLatex: "t^2+a^2=(t-ia)(t+ia).",
          explanation:
            "Writing \\( a^2-(-1)t^2 \\) as a difference of squares with \\( ia \\) exposes the two simple poles of the integrand.",
        },
        {
          stepNumber: 2,
          description: "Locate the poles.",
          workingLatex: "t=\\pm ia,\\qquad a>0.",
          explanation:
            "Simple poles sit at \\( t=\\pm ia \\); with \\( a>0 \\) the upper-half-plane one is \\( t=ia \\) and the lower one is \\( t=-ia \\).",
        },
        {
          stepNumber: 3,
          description: "Bound the integrand on a closing arc.",
          workingLatex: "|e^{ixt}|=e^{-x\\operatorname{Im}t},\\qquad \\Big|\\tfrac{1}{t^2+a^2}\\Big|=O(R^{-2}).",
          explanation:
            "On a semicircle of radius \\( R \\) the exponential modulus is \\( e^{-x\\operatorname{Im}t} \\) and the rational part decays quadratically, the ingredients for Jordan's lemma.",
        },
        {
          stepNumber: 4,
          description: "Select the upper half-plane.",
          workingLatex: "x>0:\\ e^{-x\\operatorname{Im}t}\\to 0\\iff \\operatorname{Im}t>0.",
          explanation:
            "Decay on the arc requires \\( \\operatorname{Im}t>0 \\) because \\( x>0 \\), so the contour is closed upward.",
        },
        {
          stepNumber: 5,
          description: "Discard the arc and name the enclosed pole.",
          workingLatex: "\\int_{\\Gamma_R}\\to 0\\;\\Longrightarrow\\;\\text{enclosed } t=ia.",
          explanation:
            "Jordan's lemma sends the upper arc to zero, so the integral equals \\( 2\\pi i \\) times the residue at the single enclosed pole \\( t=ia \\).",
        },
        {
          stepNumber: 6,
          description: "Write the residue limit.",
          workingLatex:
            "\\operatorname*{Res}_{t=ia}=\\lim_{t\\to ia}(t-ia)\\frac{e^{ixt}}{(t-ia)(t+ia)}.",
          explanation:
            "The simple-pole formula multiplies by \\( (t-ia) \\) to cancel the matching denominator factor before taking the limit.",
        },
        {
          stepNumber: 7,
          description: "Cancel and evaluate the cofactor.",
          workingLatex: "=\\frac{e^{ix\\cdot ia}}{ia+ia}=\\frac{e^{ix\\cdot ia}}{2ia}.",
          explanation:
            "After cancelling \\( (t-ia) \\) the cofactor \\( e^{ixt}/(t+ia) \\) is evaluated at \\( t=ia \\), where \\( t+ia=2ia \\).",
        },
        {
          stepNumber: 8,
          description: "Simplify the exponent.",
          workingLatex: "ix\\cdot ia=i^2 ax=-ax\\;\\Longrightarrow\\;\\operatorname*{Res}_{t=ia}=\\frac{e^{-ax}}{2ia}.",
          explanation:
            "The product \\( ix\\cdot ia=-ax \\) gives the decay rate \\( e^{-ax} \\) set by the pole's height \\( a \\).",
        },
        {
          stepNumber: 9,
          description: "Apply the residue theorem.",
          workingLatex: "\\int_{-\\infty}^{\\infty}=2\\pi i\\cdot\\frac{e^{-ax}}{2ia}.",
          explanation:
            "The anticlockwise closed contour multiplies the single residue by \\( 2\\pi i \\).",
        },
        {
          stepNumber: 10,
          description: "Cancel to the final value.",
          workingLatex: "\\frac{2\\pi i}{2ia}\\,e^{-ax}=\\frac{\\pi}{a}e^{-ax}.",
          explanation:
            "The \\( 2i \\) factors cancel, leaving \\( (\\pi/a)e^{-ax} \\); verified numerically for \\( (a,x)=(2,3),(3,2) \\) and reducing to \\( \\pi e^{-x} \\) at \\( a=1 \\).",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\pi}{a}\\,e^{-ax} \\).",
      canonicalAnswer: "(pi/a)*exp(-a*x)",
    },
  },
  {
    id: "am8a-009",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 09",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Using even symmetry and a contour deformation, evaluate \\( \\displaystyle\\int_{0}^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt \\) for \\( x>0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "even integrand", "Fourier cosine"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the integrand is even.",
          workingLatex: "f(-t)=\\frac{\\cos(-xt)}{t^2+1}=\\frac{\\cos xt}{t^2+1}=f(t).",
          explanation:
            "Both \\( \\cos xt \\) and \\( t^2+1 \\) are even in \\( t \\), so \\( f \\) is even — the property that lets us extend a half-line integral symmetrically.",
        },
        {
          stepNumber: 2,
          description: "Extend to the whole line.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt=\\frac12\\int_{-\\infty}^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt.",
          explanation:
            "For an even integrand the half-line integral is half the full-line one, letting us deploy the residue machinery on a symmetric contour.",
        },
        {
          stepNumber: 3,
          description: "Write cosine via Euler's formula.",
          workingLatex: "\\cos xt=\\tfrac12\\big(e^{ixt}+e^{-ixt}\\big)=\\operatorname{Re}\\,e^{ixt}.",
          explanation:
            "Since \\( t \\) is real on the line, \\( \\cos xt \\) is the real part of \\( e^{ixt} \\), converting the cosine to a complex exponential suited to contour closing.",
        },
        {
          stepNumber: 4,
          description: "Pass the real part through the integral.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt=\\operatorname{Re}\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt.",
          explanation:
            "Only \\( e^{ixt} \\) (not \\( e^{-ixt} \\)) decays in the upper half-plane for \\( x>0 \\); the integral is real, so taking \\( \\operatorname{Re} \\) outside is exact.",
        },
        {
          stepNumber: 5,
          description: "Close the exponential integral upward.",
          workingLatex: "x>0:\\ \\text{arc in UHP vanishes (Jordan)};\\ \\text{enclosed }t=i.",
          explanation:
            "With \\( x>0 \\) the upper arc is killed by Jordan's lemma and the only enclosed pole is \\( t=i \\).",
        },
        {
          stepNumber: 6,
          description: "Compute the residue at \\( t=i \\).",
          workingLatex: "\\operatorname*{Res}_{t=i}\\frac{e^{ixt}}{(t-i)(t+i)}=\\frac{e^{-x}}{2i}.",
          explanation:
            "Cancelling \\( (t-i) \\) and evaluating at \\( t=i \\) (where \\( t+i=2i \\), \\( e^{ix\\cdot i}=e^{-x} \\)) gives the residue.",
        },
        {
          stepNumber: 7,
          description: "Apply the residue theorem.",
          workingLatex: "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt=2\\pi i\\cdot\\frac{e^{-x}}{2i}=\\pi e^{-x}.",
          explanation:
            "Multiplying the residue by \\( 2\\pi i \\) and cancelling gives the standard result \\( \\pi e^{-x} \\).",
        },
        {
          stepNumber: 8,
          description: "Take the real part.",
          workingLatex: "\\operatorname{Re}\\,\\pi e^{-x}=\\pi e^{-x}.",
          explanation:
            "The value is already real, so its real part is unchanged and the full-line cosine integral equals \\( \\pi e^{-x} \\).",
        },
        {
          stepNumber: 9,
          description: "Halve for the half-line.",
          workingLatex: "\\int_0^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt=\\tfrac12\\,\\pi e^{-x}.",
          explanation:
            "Restoring the factor \\( \\tfrac12 \\) from the even-extension step gives the half-line value.",
        },
        {
          stepNumber: 10,
          description: "State the result.",
          workingLatex: "\\int_0^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt=\\frac{\\pi}{2}e^{-x}.",
          explanation:
            "Numerically confirmed: \\( x=2 \\) gives \\( 0.21258 \\), matching \\( (\\pi/2)e^{-2} \\).",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\pi}{2}\\,e^{-x} \\).",
      canonicalAnswer: "(pi/2)*exp(-x)",
    },
  },
  {
    id: "am8a-010",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 10",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For \\( I(k)=\\dfrac{1}{2\\pi i}\\displaystyle\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty}\\frac{e^{k(z-2z^{1/2})}}{z-c}\\,dz \\) with \\( \\gamma>1 \\), the Bromwich line is moved leftward onto the steepest-descent parabola through \\( z=1 \\). For a real pole with \\( 1<c<\\gamma \\), find the residue contribution and its exponential rate.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent", "pole crossing", "residue contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the deformed contour.",
          workingLatex: "\\operatorname{Re}z=\\gamma\\ \\longrightarrow\\ \\text{parabola } y^2=4(1-x),\\ \\text{vertex }(1,0).",
          explanation:
            "Pushing the Bromwich line \\( \\operatorname{Re}z=\\gamma \\) leftward onto the steepest-descent parabola through the saddle \\( z=1 \\) sweeps the region between the two curves.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-2.6, 2.6]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[2,-2.6]} point2={[2,2.6]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-3.3,0]} point2={[0,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Vector tail={[2,1.8]} tip={[0.7,1.8]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Point x={1.5} y={0} color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.5,0]} tex="\\times" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.55,-0.55]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.95,0.45]} tex="z=c" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.2,2.2]} tex="\\operatorname{Re}z=\\gamma" color="var(--mafs-fg-accent)" />
  <LaTeX at={[-1.65,2.3]} tex="\\text{steepest descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-1.9,-0.5]} tex="\\text{branch cut}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.4,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 2,
          description: "Find where the parabola meets the real axis.",
          workingLatex: "y=0\\ \\text{in}\\ y^2=4(1-x)\\;\\Longrightarrow\\;x=1.",
          explanation:
            "On the real axis the parabola sits at \\( x=1 \\) (its vertex), while the Bromwich line sits at \\( x=\\gamma \\), so the swept region meets the real axis in the interval \\( (1,\\gamma) \\).",
        },
        {
          stepNumber: 3,
          description: "Decide whether the pole is crossed.",
          workingLatex: "1<c<\\gamma\\;\\Longrightarrow\\;c\\in(1,\\gamma):\\ \\text{pole is swept}.",
          explanation:
            "A real pole at \\( 1<c<\\gamma \\) lies in the swept interval between the vertex and the line, so the deformation drags the contour across it and picks up its residue.",
        },
        {
          stepNumber: 4,
          description: "Confirm the pole is simple.",
          workingLatex: "\\frac{e^{k\\varphi(z)}}{z-c}:\\ (z-c)\\ \\text{a single zero},\\ e^{k\\varphi}\\ \\text{analytic at }c.",
          explanation:
            "The denominator vanishes simply at \\( z=c \\) and the numerator \\( e^{k\\varphi(z)} \\) is analytic and nonzero there (with \\( c>1>0 \\) off the cut), so \\( z=c \\) is a simple pole.",
        },
        {
          stepNumber: 5,
          description: "Apply the simple-pole residue formula.",
          workingLatex:
            "\\operatorname*{Res}_{z=c}\\frac{e^{k(z-2z^{1/2})}}{z-c}=\\lim_{z\\to c}(z-c)\\frac{e^{k(z-2z^{1/2})}}{z-c}.",
          explanation:
            "Multiplying by \\( (z-c) \\) cancels the pole factor, leaving the analytic numerator to be evaluated in the limit.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the residue.",
          workingLatex:
            "=e^{k(c-2\\sqrt{c})}.",
          explanation:
            "With the pole factor cancelled the residue is just the numerator at \\( z=c \\), using the principal root \\( c^{1/2}=\\sqrt c \\) for \\( c>0 \\).",
        },
        {
          stepNumber: 7,
          description: "Fix the orientation of the crossing.",
          workingLatex: "\\Delta=+2\\pi i\\,\\operatorname*{Res}_{z=c}=2\\pi i\\,e^{k(c-2\\sqrt{c})}.",
          explanation:
            "Moving the line leftward encircles the swept pole anticlockwise relative to the region between the curves, so the residue enters with the \\( +2\\pi i \\) sign.",
        },
        {
          stepNumber: 8,
          description: "Cancel against the prefactor.",
          workingLatex:
            "\\frac{1}{2\\pi i}\\cdot 2\\pi i\\,e^{k(c-2\\sqrt{c})}=e^{k(c-2\\sqrt{c})}.",
          explanation:
            "The Bromwich prefactor \\( 1/(2\\pi i) \\) cancels the \\( 2\\pi i \\) cleanly, so the residue contribution is exactly \\( e^{k(c-2\\sqrt c)} \\).",
        },
        {
          stepNumber: 9,
          description: "Locate the minimum of the rate.",
          workingLatex: "g(c)=c-2\\sqrt c,\\quad g'(c)=1-c^{-1/2}=0\\;\\Longrightarrow\\;c=1.",
          explanation:
            "Differentiating the exponential rate and setting \\( g'=0 \\) gives the stationary point \\( c=1 \\); \\( g''(c)=\\tfrac12 c^{-3/2}>0 \\) confirms it is the unique minimum.",
        },
        {
          stepNumber: 10,
          description: "Compare the rate to the saddle.",
          workingLatex: "g(1)=-1,\\quad 1<c<\\gamma\\;\\Longrightarrow\\;c-2\\sqrt c>-1.",
          explanation:
            "Since \\( -1 \\) is the minimum, for \\( 1<c<\\gamma \\) the rate exceeds \\( -1 \\), so the residue \\( e^{k(c-2\\sqrt c)} \\) decays more slowly than the saddle's \\( e^{-k} \\) and dominates as \\( k\\to+\\infty \\).",
        },
      ],
      finalAnswer:
        "Residue contribution \\( e^{k(c-2\\sqrt{c})} \\); exponential rate \\( c-2\\sqrt{c}\\ (>-1) \\).",
      canonicalAnswer: "exp(k*(c-2*sqrt(c)))",
    },
  },
  {
    id: "am8a-011",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 11",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the integral of am8a-010 with a real pole at \\( c<1 \\), state whether deforming \\( \\operatorname{Re}z=\\gamma \\) onto the steepest-descent parabola crosses the pole, and identify the dominant contribution as \\( k\\to+\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["pole vs saddle", "dominant balance", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the swept region on the real axis.",
          workingLatex: "y^2=4(1-x),\\ \\text{vertex }(1,0);\\ \\text{on }y=0\\text{ the parabola sits at }x=1.",
          explanation:
            "Deforming the line \\( \\operatorname{Re}z=\\gamma \\) leftward onto the parabola encloses the region between them; on the real axis the parabola is at \\( x=1 \\) and the line at \\( x=\\gamma \\), so the swept real interval is \\( 1<x<\\gamma \\) — a sliver to the RIGHT of the vertex.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-2.6, 2.6]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[2,-2.6]} point2={[2,2.6]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-3.3,0]} point2={[0,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Point x={0.4} y={0} color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.4,0]} tex="\\times" color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.35,0.5]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[0.05,-0.6]} tex="z=c" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.2,2.2]} tex="\\operatorname{Re}z=\\gamma" color="var(--mafs-fg-accent)" />
  <LaTeX at={[-2.0,1.6]} tex="\\text{not crossed}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[-1.9,-0.5]} tex="\\text{branch cut}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.4,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 2,
          description: "Place the pole relative to the interval.",
          workingLatex: "c<1\\;\\Longrightarrow\\;c\\ \\text{lies left of the vertex }x=1.",
          explanation:
            "A real pole at \\( c<1 \\) sits to the LEFT of the parabola's vertex, on the far side from the swept sliver \\( (1,\\gamma) \\).",
        },
        {
          stepNumber: 3,
          description: "Conclude the pole is NOT crossed.",
          workingLatex: "c<1<\\gamma\\;\\Longrightarrow\\;c\\notin(1,\\gamma)\\;\\Longrightarrow\\;\\Delta I_{\\text{pole}}=0.",
          explanation:
            "Since \\( c \\) is outside the swept interval the deformation never reaches it, so no residue is acquired. (Verified numerically: at \\( c=0.5 \\) the full integral matches the saddle term alone.)",
        },
        {
          stepNumber: 4,
          description: "Reduce to the parabola integral.",
          workingLatex:
            "I(k)=\\frac{1}{2\\pi i}\\int_{\\text{parabola}}\\frac{e^{k\\varphi}}{z-c}\\,dz\\quad(\\text{no residue}).",
          explanation:
            "With the pole untouched, \\( I(k) \\) reduces entirely to the steepest-descent integral along the parabola.",
        },
        {
          stepNumber: 5,
          description: "Check the smooth factor at the saddle.",
          workingLatex: "\\frac{1}{z-c}\\Big|_{z=1}=\\frac{1}{1-c},\\qquad 1-c>0.",
          explanation:
            "Because \\( c\\neq 1 \\) the factor \\( 1/(z-c) \\) is finite at the saddle \\( z=1 \\); with \\( c<1 \\) it is the positive value \\( 1/(1-c) \\).",
        },
        {
          stepNumber: 6,
          description: "Recall the saddle data.",
          workingLatex: "\\varphi(1)=-1,\\qquad \\varphi''(1)=\\tfrac12.",
          explanation:
            "The leading steepest-descent term uses the phase value \\( \\varphi(1)=-1 \\) and curvature \\( \\varphi''(1)=\\tfrac12 \\) computed earlier for this saddle.",
        },
        {
          stepNumber: 7,
          description: "Assemble the Laplace prefactor.",
          workingLatex:
            "I(k)\\sim\\frac{1}{2\\pi i}\\cdot\\frac{1}{1-c}\\,e^{-k}\\!\\int e^{-k\\tau^2}\\,d\\tau\\cdot 2i.",
          explanation:
            "Substituting \\( z=(1+i\\tau)^2 \\) gives \\( \\varphi=-(1+\\tau^2) \\), \\( dz=2i\\,d\\tau \\) at \\( \\tau=0 \\), and the smooth factor frozen at \\( 1/(1-c) \\).",
        },
        {
          stepNumber: 8,
          description: "Evaluate the Gaussian.",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{-k\\tau^2}\\,d\\tau=\\sqrt{\\frac{\\pi}{k}}.",
          explanation:
            "The standard Gaussian integral supplies the \\( k^{-1/2} \\) prefactor characteristic of a non-degenerate saddle.",
        },
        {
          stepNumber: 9,
          description: "Combine constants.",
          workingLatex: "\\frac{2i}{2\\pi i}\\sqrt{\\frac{\\pi}{k}}=\\frac{1}{\\pi}\\sqrt{\\frac{\\pi}{k}}=\\frac{1}{\\sqrt{\\pi k}}.",
          explanation:
            "The \\( 2i \\) from \\( dz \\) cancels against \\( 2\\pi i \\) to leave \\( 1/\\pi \\), which merges with \\( \\sqrt{\\pi/k} \\) into \\( 1/\\sqrt{\\pi k} \\).",
        },
        {
          stepNumber: 10,
          description: "State the dominant (saddle) term.",
          workingLatex: "I(k)\\sim\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}\\qquad(k\\to+\\infty).",
          explanation:
            "For \\( c<1 \\) the saddle term is the whole leading behaviour; only when \\( 1<c<\\gamma \\) is the pole crossed, contributing the slower-decaying \\( e^{k(c-2\\sqrt c)} \\) that then dominates.",
        },
      ],
      finalAnswer:
        "Not crossed for \\( c<1 \\); the saddle dominates, \\( I(k)\\sim\\dfrac{e^{-k}}{(1-c)\\sqrt{\\pi k}} \\).",
      canonicalAnswer: "exp(-k)/((1-c)*sqrt(pi*k))",
    },
  },
  {
    id: "am8a-012",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 12",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Find the leading large-\\( x \\) behaviour of \\( \\displaystyle\\int_0^{\\infty}\\frac{t^{a-1}e^{-xt}}{1+t}\\,dt \\) with \\( 0<a<1 \\), where \\( t^{a-1} \\) carries a branch point at \\( t=0 \\), and give the next correction.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "branch point", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify where the integral concentrates.",
          workingLatex: "e^{-xt}\\text{ maximal at }t=0\\;\\Longrightarrow\\;\\text{endpoint }t=0\\text{ dominates.}",
          explanation:
            "As \\( x\\to\\infty \\) the exponential crushes all but a shrinking neighbourhood of \\( t=0 \\), which is exactly the branch point of \\( t^{a-1} \\).",
        },
        {
          stepNumber: 2,
          description: "Separate the singular and smooth factors.",
          workingLatex: "\\frac{t^{a-1}}{1+t}=t^{a-1}\\cdot\\frac{1}{1+t}.",
          explanation:
            "The branch-point factor \\( t^{a-1} \\) is kept intact while the regular factor \\( 1/(1+t) \\) is the part to be expanded by Watson's lemma.",
        },
        {
          stepNumber: 3,
          description: "Expand the smooth factor near \\( t=0 \\).",
          workingLatex: "\\frac{1}{1+t}=1-t+t^2-\\cdots\\qquad(|t|<1).",
          explanation:
            "Watson's lemma substitutes the Taylor series of the smooth part; each power of \\( t \\) multiplies the branch-point factor, generating a descending series.",
        },
        {
          stepNumber: 4,
          description: "Multiply through by the singular factor.",
          workingLatex: "\\frac{t^{a-1}}{1+t}=t^{a-1}-t^{a}+t^{a+1}-\\cdots .",
          explanation:
            "Distributing \\( t^{a-1} \\) over the geometric series gives a sequence of pure power terms, each integrable against \\( e^{-xt} \\).",
        },
        {
          stepNumber: 5,
          description: "Recall the branch-point Laplace integral.",
          workingLatex: "\\int_0^{\\infty}t^{s-1}e^{-xt}\\,dt=\\frac{\\Gamma(s)}{x^{s}}.",
          explanation:
            "Each monomial integrates by the prototype Gamma formula, with \\( s \\) the power of \\( t \\) plus one.",
        },
        {
          stepNumber: 6,
          description: "Integrate the leading term.",
          workingLatex: "\\int_0^{\\infty}t^{a-1}e^{-xt}\\,dt=\\frac{\\Gamma(a)}{x^{a}}.",
          explanation:
            "Taking \\( s=a \\) gives the leading algebraic decay \\( x^{-a} \\) rather than an exponential — the branch-point signature.",
        },
        {
          stepNumber: 7,
          description: "Integrate the next term.",
          workingLatex: "-\\int_0^{\\infty}t^{a}e^{-xt}\\,dt=-\\frac{\\Gamma(a+1)}{x^{a+1}}.",
          explanation:
            "The \\( -t^a \\) term uses \\( s=a+1 \\), producing the first correction \\( -\\Gamma(a+1)/x^{a+1} \\), one power of \\( x \\) smaller.",
        },
        {
          stepNumber: 8,
          description: "Assemble the two-term expansion.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{t^{a-1}e^{-xt}}{1+t}\\,dt\\sim\\frac{\\Gamma(a)}{x^{a}}-\\frac{\\Gamma(a+1)}{x^{a+1}}+\\cdots .",
          explanation:
            "The alternating signs descend from the geometric series; the leading term sets the order and the next refines it.",
        },
        {
          stepNumber: 9,
          description: "Use the Gamma recurrence on the correction.",
          workingLatex: "\\Gamma(a+1)=a\\,\\Gamma(a)\\;\\Longrightarrow\\;-\\frac{a\\,\\Gamma(a)}{x^{a+1}}.",
          explanation:
            "Writing \\( \\Gamma(a+1)=a\\Gamma(a) \\) exhibits the relative size \\( a/x \\) of the correction against the leading term.",
        },
        {
          stepNumber: 10,
          description: "Verify numerically.",
          workingLatex:
            "a=\\tfrac12,\\ x=10:\\ \\frac{\\Gamma(1/2)}{\\sqrt{10}}-\\frac{\\Gamma(3/2)}{10^{3/2}}=0.53247.",
          explanation:
            "Two-term \\( 0.53247 \\) versus exact \\( 0.53589 \\) beats the one-term \\( 0.56050 \\), confirming the leading and first-correction terms.",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(a)}{x^{a}} \\) (leading), then \\( -\\dfrac{\\Gamma(a+1)}{x^{a+1}} \\).",
      canonicalAnswer: "gamma(a)/x^a",
    },
  },
  {
    id: "am8a-013",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 13",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{(t^2+1)(t^2+4)}\\,dt \\) for \\( x>0 \\) by deforming onto the two enclosed poles.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "multiple poles", "Fourier integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the denominator.",
          workingLatex: "(t^2+1)(t^2+4)=(t-i)(t+i)(t-2i)(t+2i).",
          explanation:
            "Both quadratics split over \\( \\mathbb{C} \\), giving four simple poles at \\( t=\\pm i,\\ \\pm 2i \\).",
        },
        {
          stepNumber: 2,
          description: "Close upward and select poles.",
          workingLatex: "x>0:\\ \\text{UHP arc}\\to 0\\;\\Longrightarrow\\;\\text{enclosed }t=i,\\ t=2i.",
          explanation:
            "Closing in the upper half-plane (valid since \\( x>0 \\) by Jordan's lemma) encloses both \\( t=i \\) and \\( t=2i \\); their residues add.",
        },
        {
          stepNumber: 3,
          description: "Set up the residue at \\( t=i \\).",
          workingLatex:
            "\\operatorname*{Res}_{t=i}=\\frac{e^{ix\\cdot i}}{(t+i)(t^2+4)}\\Big|_{t=i}.",
          explanation:
            "Cancelling \\( (t-i) \\) leaves the cofactor \\( e^{ixt}/[(t+i)(t^2+4)] \\) to evaluate at \\( t=i \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the \\( t=i \\) cofactor.",
          workingLatex: "(t+i)(t^2+4)\\big|_{t=i}=(2i)(i^2+4)=2i\\cdot 3=6i.",
          explanation:
            "At \\( t=i \\): \\( t+i=2i \\) and \\( t^2+4=-1+4=3 \\), so the cofactor denominator is \\( 6i \\).",
        },
        {
          stepNumber: 5,
          description: "State the residue at \\( t=i \\).",
          workingLatex: "\\operatorname*{Res}_{t=i}=\\frac{e^{-x}}{6i}.",
          explanation:
            "Using \\( e^{ix\\cdot i}=e^{-x} \\) gives the first residue, carrying the slower decay \\( e^{-x} \\).",
        },
        {
          stepNumber: 6,
          description: "Set up the residue at \\( t=2i \\).",
          workingLatex:
            "\\operatorname*{Res}_{t=2i}=\\frac{e^{ix\\cdot 2i}}{(t^2+1)(t+2i)}\\Big|_{t=2i}.",
          explanation:
            "Cancelling \\( (t-2i) \\) leaves the cofactor \\( e^{ixt}/[(t^2+1)(t+2i)] \\) to evaluate at \\( t=2i \\).",
        },
        {
          stepNumber: 7,
          description: "Evaluate the \\( t=2i \\) cofactor.",
          workingLatex: "(t^2+1)(t+2i)\\big|_{t=2i}=((2i)^2+1)(4i)=(-3)(4i)=-12i.",
          explanation:
            "At \\( t=2i \\): \\( t^2+1=-4+1=-3 \\) and \\( t+2i=4i \\), so the cofactor denominator is \\( -12i \\).",
        },
        {
          stepNumber: 8,
          description: "State the residue at \\( t=2i \\).",
          workingLatex: "\\operatorname*{Res}_{t=2i}=\\frac{e^{-2x}}{-12i}.",
          explanation:
            "Using \\( e^{ix\\cdot 2i}=e^{-2x} \\) gives the second residue, with the faster decay \\( e^{-2x} \\).",
        },
        {
          stepNumber: 9,
          description: "Sum the residues over \\( 2\\pi i \\).",
          workingLatex:
            "2\\pi i\\Big(\\frac{e^{-x}}{6i}-\\frac{e^{-2x}}{12i}\\Big)=\\frac{2\\pi i}{6i}e^{-x}-\\frac{2\\pi i}{12i}e^{-2x}.",
          explanation:
            "Both residues are collected by the single upward deformation; the \\( i \\) factors cancel term by term.",
        },
        {
          stepNumber: 10,
          description: "Simplify the coefficients.",
          workingLatex:
            "=\\frac{\\pi}{3}e^{-x}-\\frac{\\pi}{6}e^{-2x}.",
          explanation:
            "Reducing \\( 2\\pi/6=\\pi/3 \\) and \\( 2\\pi/12=\\pi/6 \\) gives the value; verified numerically (e.g. \\( x=2\\to0.132133 \\)).",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\pi}{3}e^{-x}-\\dfrac{\\pi}{6}e^{-2x} \\).",
      canonicalAnswer: "(pi/3)*exp(-x) - (pi/6)*exp(-2*x)",
    },
  },
  {
    id: "am8a-014",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 14",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{(t^2+1)^2}\\,dt \\) for \\( x>0 \\), noting the contour is deformed onto a double pole.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "double pole", "Fourier integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor into squared factors.",
          workingLatex: "(t^2+1)^2=(t-i)^2(t+i)^2.",
          explanation:
            "Squaring the factorisation \\( t^2+1=(t-i)(t+i) \\) shows each of \\( t=\\pm i \\) is now a pole of order two.",
        },
        {
          stepNumber: 2,
          description: "Identify the enclosed double pole.",
          workingLatex: "x>0:\\ \\text{UHP arc}\\to 0\\;\\Longrightarrow\\;\\text{enclosed double pole }t=i.",
          explanation:
            "Closing in the upper half-plane (\\( x>0 \\)), the enclosed singularity \\( t=i \\) is a pole of order two, so we need the derivative residue formula.",
        },
        {
          stepNumber: 3,
          description: "Write the order-two residue formula.",
          workingLatex:
            "\\operatorname*{Res}_{t=i}=\\frac{d}{dt}\\!\\left[(t-i)^2\\frac{e^{ixt}}{(t-i)^2(t+i)^2}\\right]_{t=i}=\\frac{d}{dt}\\!\\left[\\frac{e^{ixt}}{(t+i)^2}\\right]_{t=i}.",
          explanation:
            "For a double pole the residue is the first derivative of \\( (t-i)^2 \\) times the integrand, evaluated at the pole; the \\( (t-i)^2 \\) cancels first.",
        },
        {
          stepNumber: 4,
          description: "Differentiate by the quotient rule.",
          workingLatex:
            "\\frac{d}{dt}\\frac{e^{ixt}}{(t+i)^2}=\\frac{ix\\,e^{ixt}(t+i)^2-2(t+i)e^{ixt}}{(t+i)^4}.",
          explanation:
            "Differentiating numerator \\( e^{ixt} \\) (giving \\( ix\\,e^{ixt} \\)) and denominator \\( (t+i)^2 \\) (giving \\( 2(t+i) \\)) via the quotient rule produces this expression.",
        },
        {
          stepNumber: 5,
          description: "Cancel one power of \\( (t+i) \\).",
          workingLatex:
            "=\\frac{e^{ixt}\\big[ix(t+i)-2\\big]}{(t+i)^3}.",
          explanation:
            "Factoring \\( (t+i)e^{ixt} \\) out of the numerator and cancelling against \\( (t+i)^4 \\) leaves a single cubic denominator.",
        },
        {
          stepNumber: 6,
          description: "Substitute the value at the pole.",
          workingLatex: "t=i:\\ t+i=2i,\\ (t+i)^3=(2i)^3=-8i,\\ e^{ix\\cdot i}=e^{-x}.",
          explanation:
            "Evaluating the building blocks at \\( t=i \\) prepares the numerator and denominator for substitution.",
        },
        {
          stepNumber: 7,
          description: "Evaluate the bracket.",
          workingLatex: "ix(t+i)-2\\big|_{t=i}=ix(2i)-2=-2x-2=-2(x+1).",
          explanation:
            "With \\( t+i=2i \\) the bracket becomes \\( 2i^2x-2=-2x-2 \\), factoring to \\( -2(x+1) \\).",
        },
        {
          stepNumber: 8,
          description: "Combine into the residue.",
          workingLatex:
            "\\operatorname*{Res}_{t=i}=\\frac{e^{-x}\\cdot(-2)(x+1)}{-8i}=\\frac{e^{-x}(1+x)}{4i}.",
          explanation:
            "The factors \\( -2 \\) over \\( -8i \\) reduce to \\( 1/(4i) \\), giving the residue \\( e^{-x}(1+x)/(4i) \\).",
        },
        {
          stepNumber: 9,
          description: "Apply the residue theorem.",
          workingLatex: "\\int_{-\\infty}^{\\infty}=2\\pi i\\cdot\\frac{e^{-x}(1+x)}{4i}.",
          explanation:
            "The deformation onto the enclosed double pole gives \\( 2\\pi i \\) times this single residue.",
        },
        {
          stepNumber: 10,
          description: "Cancel to the final value.",
          workingLatex: "\\frac{2\\pi i}{4i}(1+x)e^{-x}=\\frac{\\pi}{2}(1+x)e^{-x}.",
          explanation:
            "The \\( 2i \\) cancels to leave \\( \\pi/2 \\); checked numerically, e.g. \\( x=2\\to0.637752 \\).",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\pi}{2}(1+x)\\,e^{-x} \\).",
      canonicalAnswer: "(pi/2)*(1+x)*exp(-x)",
    },
  },
  {
    id: "am8a-015",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 15",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "When the simple pole \\( z=c \\) for \\( I(k) \\) of am8a-010 lies on the deformed contour itself, the integral is taken as a principal value with a small semicircular indentation. State the contribution the indentation arc makes.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["principal value", "pole on contour", "half residue"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the pole sits on the path.",
          workingLatex: "z=c\\in\\text{contour}\\;\\Longrightarrow\\;\\text{integrand singular on }C.",
          explanation:
            "When the simple pole \\( z=c \\) lies on the integration contour the integral is improper, so it must be regularised before any value can be assigned.",
        },
        {
          stepNumber: 2,
          description: "Indent the contour around the pole.",
          workingLatex: "C=C_\\epsilon\\cup\\gamma_\\epsilon,\\quad \\gamma_\\epsilon=\\{c+\\epsilon e^{i\\theta}\\}.",
          explanation:
            "A pole on the path is handled by deleting a length \\( 2\\epsilon \\) and bridging it with a small semicircular detour \\( \\gamma_\\epsilon \\) of radius \\( \\epsilon \\).",
        },
        {
          stepNumber: 3,
          description: "Split into principal value and arc.",
          workingLatex: "\\int_C=\\underbrace{\\lim_{\\epsilon\\to0}\\int_{C_\\epsilon}}_{\\text{PV}}+\\int_{\\gamma_\\epsilon}.",
          explanation:
            "The straight part with the gap gives the Cauchy principal value as \\( \\epsilon\\to 0 \\); the arc carries the singular contribution.",
        },
        {
          stepNumber: 4,
          description: "Expand the integrand near the pole.",
          workingLatex: "\\frac{e^{k\\varphi(z)}}{z-c}=\\frac{\\operatorname*{Res}_{z=c}}{z-c}+\\text{(analytic)},\\quad \\operatorname*{Res}_{z=c}=e^{k(c-2\\sqrt{c})}.",
          explanation:
            "Near \\( z=c \\) the integrand is its residue over \\( (z-c) \\) plus a bounded analytic part that integrates to zero over the shrinking arc.",
        },
        {
          stepNumber: 5,
          description: "Parametrise the semicircle.",
          workingLatex: "z=c+\\epsilon e^{i\\theta},\\qquad dz=i\\epsilon e^{i\\theta}\\,d\\theta.",
          explanation:
            "On the arc \\( z-c=\\epsilon e^{i\\theta} \\) and the differential \\( dz=i\\epsilon e^{i\\theta}\\,d\\theta \\) follows by differentiation.",
        },
        {
          stepNumber: 6,
          description: "Integrate the singular part over the arc.",
          workingLatex:
            "\\int_{\\gamma_\\epsilon}\\frac{\\operatorname*{Res}}{z-c}\\,dz=\\operatorname*{Res}\\int_{\\theta_1}^{\\theta_2}\\frac{i\\epsilon e^{i\\theta}}{\\epsilon e^{i\\theta}}\\,d\\theta=i\\,\\Delta\\theta\\,\\operatorname*{Res}.",
          explanation:
            "The \\( \\epsilon e^{i\\theta} \\) cancels, leaving \\( i \\) times the subtended angle times the residue, independent of \\( \\epsilon \\).",
        },
        {
          stepNumber: 7,
          description: "Insert the semicircle angle.",
          workingLatex: "\\Delta\\theta=\\pm\\pi\\;\\Longrightarrow\\;\\int_{\\gamma_\\epsilon}\\to\\pm i\\pi\\,\\operatorname*{Res}_{z=c}.",
          explanation:
            "A semicircle subtends \\( \\pi \\), giving \\( \\pm i\\pi \\) times the residue — exactly half the full \\( 2\\pi i \\) of an encircling loop; the sign depends on whether the detour passes above (\\(-\\)) or below (\\(+\\)) the pole.",
        },
        {
          stepNumber: 8,
          description: "Substitute the residue.",
          workingLatex: "\\pm i\\pi\\,\\operatorname*{Res}_{z=c}=\\pm i\\pi\\,e^{k(c-2\\sqrt{c})}.",
          explanation:
            "Using the residue \\( e^{k(c-2\\sqrt c)} \\) computed earlier gives the arc's explicit value.",
        },
        {
          stepNumber: 9,
          description: "Apply the Bromwich prefactor.",
          workingLatex: "\\frac{1}{2\\pi i}\\cdot(\\pm i\\pi)\\,e^{k(c-2\\sqrt{c})}=\\pm\\tfrac12\\,e^{k(c-2\\sqrt{c})}.",
          explanation:
            "Dividing by \\( 2\\pi i \\) reduces \\( \\pm i\\pi \\) to \\( \\pm\\tfrac12 \\), so the on-contour pole contributes half of the full crossing's \\( e^{k(c-2\\sqrt c)} \\).",
        },
        {
          stepNumber: 10,
          description: "State the rule.",
          workingLatex: "\\text{on-contour pole: }\\ \\pm i\\pi\\,\\operatorname*{Res}=\\tfrac12\\big(2\\pi i\\,\\operatorname*{Res}\\big).",
          explanation:
            "The indentation arc gives exactly half the residue contribution a full crossing would, with the sign fixed by the side of the detour — the symmetric average of crossing and not crossing.",
        },
      ],
      finalAnswer:
        "The arc gives \\( \\pm i\\pi\\,\\operatorname{Res} \\) — half of \\( 2\\pi i\\,\\operatorname{Res} \\), sign set by the indentation side.",
      canonicalAnswer: "i*pi*exp(k*(c-2*sqrt(c)))",
    },
  },
  {
    id: "am8a-016",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 16",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Across the branch cut of \\( z^{1/2} \\) (principal branch, cut on \\( (-\\infty,0] \\)), evaluate the discontinuity \\( z^{1/2}\\big|_{\\text{above}}-z^{1/2}\\big|_{\\text{below}} \\) at \\( z=-r \\) with \\( r>0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["branch cut", "discontinuity", "square root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the principal branch in polar form.",
          workingLatex: "z=\\rho e^{i\\theta},\\ \\theta\\in(-\\pi,\\pi]:\\ z^{1/2}=\\sqrt{\\rho}\\,e^{i\\theta/2}.",
          explanation:
            "The principal square root halves the argument; with the cut on \\( (-\\infty,0] \\) the angle \\( \\theta \\) is restricted to \\( (-\\pi,\\pi] \\), so \\( z^{1/2} \\) is single-valued off the cut.",
        },
        {
          stepNumber: 2,
          description: "Set the modulus at the cut point.",
          workingLatex: "z=-r,\\ r>0\\;\\Longrightarrow\\;\\rho=|z|=r,\\ \\sqrt{\\rho}=\\sqrt r.",
          explanation:
            "At the cut point \\( z=-r \\) the modulus is \\( r \\); only the argument distinguishes the two sides of the cut.",
        },
        {
          stepNumber: 3,
          description: "Take the argument just above the cut.",
          workingLatex: "\\text{above}:\\ \\arg z\\to\\pi^-,\\quad z=re^{i\\pi}.",
          explanation:
            "Approaching \\( -r \\) from the upper side, the argument tends to \\( \\pi \\) from below, the top edge of the principal range.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the root above.",
          workingLatex: "z^{1/2}\\big|_{\\text{above}}=r^{1/2}e^{i\\pi/2}=i\\sqrt{r}.",
          explanation:
            "Halving \\( \\pi \\) gives argument \\( \\pi/2 \\), so \\( e^{i\\pi/2}=i \\) and the root above the cut is \\( i\\sqrt r \\).",
        },
        {
          stepNumber: 5,
          description: "Take the argument just below the cut.",
          workingLatex: "\\text{below}:\\ \\arg z\\to-\\pi^+,\\quad z=re^{-i\\pi}.",
          explanation:
            "From the lower side the argument tends to \\( -\\pi \\) from above, the bottom edge of the principal range — a different representative of the same point.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the root below.",
          workingLatex: "z^{1/2}\\big|_{\\text{below}}=r^{1/2}e^{-i\\pi/2}=-i\\sqrt{r}.",
          explanation:
            "Halving \\( -\\pi \\) gives argument \\( -\\pi/2 \\), so \\( e^{-i\\pi/2}=-i \\) and the root below is \\( -i\\sqrt r \\) — the two limits differ, the hallmark of a branch cut.",
        },
        {
          stepNumber: 7,
          description: "Form the discontinuity.",
          workingLatex: "z^{1/2}\\big|_{\\text{above}}-z^{1/2}\\big|_{\\text{below}}=i\\sqrt r-(-i\\sqrt r).",
          explanation:
            "Subtracting the two boundary values gives the jump across the cut at \\( z=-r \\).",
        },
        {
          stepNumber: 8,
          description: "Simplify the jump.",
          workingLatex: "=i\\sqrt r+i\\sqrt r=2i\\sqrt{r}.",
          explanation:
            "The two imaginary parts add to \\( 2i\\sqrt r \\); the real parts both vanish, so the discontinuity is purely imaginary.",
        },
        {
          stepNumber: 9,
          description: "Cross-check via the second sheet.",
          workingLatex: "e^{i\\cdot 2\\pi}\\!:\\ z^{1/2}\\mapsto e^{i\\pi}z^{1/2}=-z^{1/2},\\ \\text{jump}=2z^{1/2}|_{\\text{above}}.",
          explanation:
            "A full loop multiplies \\( z^{1/2} \\) by \\( -1 \\), so the jump equals twice the upper value \\( 2\\cdot i\\sqrt r=2i\\sqrt r \\), confirming the result independently.",
        },
        {
          stepNumber: 10,
          description: "State the discontinuity.",
          workingLatex: "\\Delta z^{1/2}=2i\\sqrt{r}.",
          explanation:
            "This nonzero jump \\( 2i\\sqrt r \\) is what a contour wrapping the cut integrates against — the branch-cut analogue of a residue.",
        },
      ],
      finalAnswer: "\\( 2i\\sqrt{r} \\).",
      canonicalAnswer: "2*i*sqrt(r)",
    },
  },
  {
    id: "am8a-017",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 17",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "A Hankel-type loop is wrapped tightly around the branch cut of \\( t^{1/2} \\) on \\( (-\\infty,0] \\) for \\( \\displaystyle\\oint t^{1/2}e^{-x|t|}\\,dt \\). Using the discontinuity, reduce the loop to a single integral over \\( r=|t|\\in(0,\\infty) \\) and evaluate it for \\( x>0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["branch cut", "Hankel contour", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the parametrisation on the cut.",
          workingLatex: "t=re^{\\pm i\\pi}=-r,\\ r=|t|\\in(0,\\infty),\\quad |t|=r.",
          explanation:
            "On the cut \\( (-\\infty,0] \\) the variable is \\( t=-r \\) with \\( r=|t|>0 \\), and the two sides correspond to the arguments \\( \\pm\\pi \\).",
        },
        {
          stepNumber: 2,
          description: "Identify the two values across the cut.",
          workingLatex: "t^{1/2}\\big|_{\\text{above}}=i\\sqrt r,\\qquad t^{1/2}\\big|_{\\text{below}}=-i\\sqrt r.",
          explanation:
            "The principal square root takes the values \\( \\pm i\\sqrt r \\) just above and below the cut — these are what the loop sees on its two passes.",
        },
        {
          stepNumber: 3,
          description: "Write the exponential on the cut.",
          workingLatex: "e^{-x|t|}=e^{-xr},\\qquad r>0.",
          explanation:
            "Since \\( |t|=r \\) on the cut the weight is \\( e^{-xr} \\), the same on both sides, so only the square-root values differ between the two passes.",
        },
        {
          stepNumber: 4,
          description: "Orient the two sides of the loop.",
          workingLatex:
            "\\text{below: }r:\\infty\\to0,\\ dt=-dr;\\quad \\text{above: }r:0\\to\\infty,\\ dt=-dr.",
          explanation:
            "A Hankel loop runs in toward the branch point on one side and out on the other, so the two passes traverse \\( r \\) in opposite senses with \\( dt=-dr \\) (since \\( t=-r \\)).",
        },
        {
          stepNumber: 5,
          description: "Add the two passes.",
          workingLatex:
            "\\oint=\\int_{\\text{above}}+\\int_{\\text{below}}=-\\!\\int_0^{\\infty}\\!\\!\\big(t^{1/2}_{\\text{above}}-t^{1/2}_{\\text{below}}\\big)e^{-xr}\\,dr.",
          explanation:
            "Combining the oppositely-oriented passes leaves the integral of the jump \\( t^{1/2}_{\\text{above}}-t^{1/2}_{\\text{below}} \\) once over \\( (0,\\infty) \\), with a sign from \\( dt=-dr \\).",
        },
        {
          stepNumber: 6,
          description: "Insert the jump.",
          workingLatex:
            "t^{1/2}_{\\text{above}}-t^{1/2}_{\\text{below}}=i\\sqrt r-(-i\\sqrt r)=2i\\sqrt r.",
          explanation:
            "The discontinuity of \\( t^{1/2} \\) across the cut is \\( 2i\\sqrt r \\), computed in am8a-016.",
        },
        {
          stepNumber: 7,
          description: "Reduce to a single real integral.",
          workingLatex: "\\oint=-2i\\int_0^{\\infty}\\sqrt{r}\\,e^{-xr}\\,dr.",
          explanation:
            "The loop collapses to \\( -2i \\) times the elementary integral of \\( \\sqrt r\\,e^{-xr} \\) over the positive axis.",
        },
        {
          stepNumber: 8,
          description: "Recognise the branch-point Gamma integral.",
          workingLatex:
            "\\int_0^{\\infty}r^{1/2}e^{-xr}\\,dr=\\frac{\\Gamma(3/2)}{x^{3/2}}.",
          explanation:
            "This is the prototype integral \\( \\int_0^\\infty r^{s-1}e^{-xr}dr=\\Gamma(s)/x^s \\) with \\( s=3/2 \\).",
        },
        {
          stepNumber: 9,
          description: "Evaluate the Gamma value.",
          workingLatex:
            "\\Gamma(3/2)=\\tfrac12\\sqrt\\pi\\;\\Longrightarrow\\;\\int_0^{\\infty}r^{1/2}e^{-xr}\\,dr=\\frac{\\sqrt{\\pi}}{2x^{3/2}}.",
          explanation:
            "Using \\( \\Gamma(3/2)=\\tfrac12\\Gamma(1/2)=\\tfrac12\\sqrt\\pi \\); matches direct quadrature numerically.",
        },
        {
          stepNumber: 10,
          description: "Assemble the loop value.",
          workingLatex: "\\oint=-2i\\cdot\\frac{\\sqrt{\\pi}}{2x^{3/2}}=-\\frac{i\\sqrt{\\pi}}{x^{3/2}}.",
          explanation:
            "The branch-cut contribution is purely imaginary and decays algebraically as \\( x^{-3/2} \\) — characteristically slower than the exponential saddle terms it accompanies.",
        },
      ],
      finalAnswer: "\\( -\\dfrac{i\\sqrt{\\pi}}{x^{3/2}} \\).",
      canonicalAnswer: "-i*sqrt(pi)/x^(3/2)",
    },
  },
  {
    id: "am8a-018",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 18",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the oscillatory phase \\( h(t)=i(t+t^2) \\), find the saddle point and the local steepest-descent direction, as needed to deform a contour onto the constant-\\( \\operatorname{Im}h \\) path through it.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point", "steepest descent direction", "phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the phase.",
          workingLatex: "h(t)=i(t+t^2)\\;\\Longrightarrow\\;h'(t)=i(1+2t).",
          explanation:
            "Saddle points solve \\( h'(t)=0 \\); deforming onto the constant-\\( \\operatorname{Im}h \\) path through the saddle is the standard move for this oscillatory integral.",
        },
        {
          stepNumber: 2,
          description: "Solve for the saddle.",
          workingLatex: "i(1+2t)=0\\;\\Longrightarrow\\;1+2t=0\\;\\Longrightarrow\\;t=-\\tfrac12.",
          explanation:
            "Since \\( i\\neq 0 \\) the bracket must vanish, placing the unique saddle at \\( t=-1/2 \\) on the real axis.",
        },
        {
          stepNumber: 3,
          description: "Compute the second derivative.",
          workingLatex: "h''(t)=\\frac{d}{dt}\\,i(1+2t)=2i.",
          explanation:
            "Differentiating again gives the constant curvature \\( h''=2i \\), needed to fix the orientation of the steepest path.",
        },
        {
          stepNumber: 4,
          description: "Write the curvature in polar form.",
          workingLatex: "h''=2i=2e^{i\\pi/2},\\qquad \\arg h''=\\tfrac{\\pi}{2}.",
          explanation:
            "Expressing \\( h'' \\) as modulus times phase isolates \\( \\arg h''=\\pi/2 \\), the input to the steepest-descent angle condition.",
        },
        {
          stepNumber: 5,
          description: "Expand the phase about the saddle.",
          workingLatex: "h(t)\\approx h(-\\tfrac12)+\\tfrac12 h''\\,\\delta^2,\\quad \\delta=t+\\tfrac12.",
          explanation:
            "Near the saddle the phase is its value plus the quadratic term \\( \\tfrac12 h''\\delta^2 \\); the local direction \\( \\delta \\) is what we solve for.",
        },
        {
          stepNumber: 6,
          description: "State the steepest-descent condition.",
          workingLatex: "\\tfrac12 h''\\delta^2<0\\ (\\text{real})\\;\\Longrightarrow\\;\\arg(h''\\delta^2)=\\pi.",
          explanation:
            "Descent requires the quadratic term to be real and negative so that \\( e^{\\lambda h} \\) decays; equivalently its argument must equal \\( \\pi \\).",
        },
        {
          stepNumber: 7,
          description: "Turn the condition into an equation for \\( \\arg\\delta \\).",
          workingLatex: "\\arg h''+2\\arg\\delta=\\pi\\;\\Longrightarrow\\;\\tfrac{\\pi}{2}+2\\arg\\delta=\\pi.",
          explanation:
            "Since \\( \\arg(h''\\delta^2)=\\arg h''+2\\arg\\delta \\), substituting \\( \\arg h''=\\pi/2 \\) gives a linear equation for \\( \\arg\\delta \\).",
        },
        {
          stepNumber: 8,
          description: "Solve for the descent angle.",
          workingLatex: "2\\arg\\delta=\\tfrac{\\pi}{2}\\;\\Longrightarrow\\;\\arg\\delta=\\tfrac{\\pi}{4}.",
          explanation:
            "Solving gives \\( \\arg\\delta=\\pi/4 \\): the steepest path leaves the saddle at \\( 45^\\circ \\) to the real axis.",
        },
        {
          stepNumber: 9,
          description: "Record the second branch.",
          workingLatex: "\\arg\\delta=\\tfrac{\\pi}{4}\\ \\text{or}\\ \\tfrac{\\pi}{4}+\\pi=\\tfrac{5\\pi}{4}.",
          explanation:
            "Because \\( \\delta^2 \\) is unchanged by \\( \\delta\\to-\\delta \\), the path is a full line through the saddle with directions \\( \\pi/4 \\) and \\( 5\\pi/4 \\).",
        },
        {
          stepNumber: 10,
          description: "State the result.",
          workingLatex: "\\text{saddle }t=-\\tfrac12,\\quad \\arg\\big(t+\\tfrac12\\big)=\\tfrac{\\pi}{4}.",
          explanation:
            "The contour is deformed onto the constant-\\( \\operatorname{Im}h \\) line through \\( t=-1/2 \\) inclined at \\( \\pi/4 \\), where the integrand decays fastest.",
        },
      ],
      finalAnswer: "Saddle at \\( t=-\\tfrac12 \\); steepest-descent direction \\( \\arg(t+\\tfrac12)=\\tfrac{\\pi}{4} \\).",
      canonicalAnswer: "-1/2",
    },
  },

  // ───── CHALLENGE (12) ─────
  {
    id: "am8a-019",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( \\varphi(z)=z-2z^{1/2} \\) (principal branch), show that the curves \\( z_\\pm(\\tau)=1-\\tau^2\\pm 2i\\tau \\) are the steepest-descent paths through the saddle \\( z=1 \\) by proving \\( \\operatorname{Im}\\varphi\\equiv 0 \\) and \\( \\operatorname{Re}\\varphi \\) strictly decreasing along them.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent path", "saddle point", "branch cut", "constant phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the phase.",
          workingLatex: "\\varphi(z)=z-2z^{1/2}\\;\\Longrightarrow\\;\\varphi'(z)=1-z^{-1/2}.",
          explanation:
            "Steepest-descent paths emanate from a saddle where \\( \\varphi'=0 \\); on the principal branch \\( z^{1/2} \\) is single-valued off the cut, so the derivative is well defined.",
        },
        {
          stepNumber: 2,
          description: "Solve for the saddle.",
          workingLatex: "1-z^{-1/2}=0\\;\\Longrightarrow\\;z^{1/2}=1\\;\\Longrightarrow\\;z=1.",
          explanation:
            "On the principal branch (cut on \\( (-\\infty,0] \\)) the only saddle is \\( z=1 \\), lying off the cut.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the phase at the saddle.",
          workingLatex: "\\varphi(1)=1-2\\sqrt1=-1.",
          explanation:
            "The saddle value \\( \\varphi(1)=-1 \\) is the fixed level that the constant-phase steepest path must keep.",
        },
        {
          stepNumber: 4,
          description: "State the constant-phase condition.",
          workingLatex: "\\operatorname{Im}\\varphi(z)=\\operatorname{Im}\\varphi(1)=\\operatorname{Im}(-1)=0.",
          explanation:
            "Along a steepest path \\( \\operatorname{Im}\\varphi \\) is fixed at its saddle value; here that value is \\( 0 \\), so we must verify \\( \\operatorname{Im}\\varphi\\equiv 0 \\) on the proposed curves.",
        },
        {
          stepNumber: 5,
          description: "Write the proposed parametrisation.",
          workingLatex: "z_\\pm(\\tau)=1-\\tau^2\\pm 2i\\tau,\\qquad \\tau\\ge 0.",
          explanation:
            "These are the candidate curves; the goal is to evaluate \\( \\varphi \\) along them and check the two steepest-descent conditions.",
        },
        {
          stepNumber: 6,
          description: "Recognise the perfect square.",
          workingLatex: "1-\\tau^2\\pm 2i\\tau=(1\\pm i\\tau)^2.",
          explanation:
            "Expanding \\( (1\\pm i\\tau)^2=1\\pm 2i\\tau+i^2\\tau^2=1-\\tau^2\\pm 2i\\tau \\) confirms the parametrisation is a perfect square — the key simplifying observation.",
        },
        {
          stepNumber: 7,
          description: "Take the principal square root.",
          workingLatex: "z^{1/2}=(\\,(1\\pm i\\tau)^2)^{1/2}=1\\pm i\\tau,\\qquad \\operatorname{Re}(1\\pm i\\tau)=1>0.",
          explanation:
            "Because \\( 1\\pm i\\tau \\) has positive real part for every \\( \\tau \\), it is the principal root, justifying the sign choice and keeping the curve off the cut.",
        },
        {
          stepNumber: 8,
          description: "Substitute into the phase.",
          workingLatex:
            "\\varphi=z-2z^{1/2}=(1\\pm i\\tau)^2-2(1\\pm i\\tau).",
          explanation:
            "Replacing both \\( z \\) and \\( z^{1/2} \\) by their values on the curve expresses \\( \\varphi \\) purely in terms of \\( 1\\pm i\\tau \\).",
        },
        {
          stepNumber: 9,
          description: "Factor out the common factor.",
          workingLatex:
            "\\varphi=(1\\pm i\\tau)\\big[(1\\pm i\\tau)-2\\big]=(1\\pm i\\tau)(-1\\pm i\\tau).",
          explanation:
            "Factoring \\( (1\\pm i\\tau) \\) exposes the structure cleanly; the bracket simplifies to \\( -1\\pm i\\tau \\).",
        },
        {
          stepNumber: 10,
          description: "Pull out a sign.",
          workingLatex:
            "(1\\pm i\\tau)(-1\\pm i\\tau)=-(1\\pm i\\tau)(1\\mp i\\tau).",
          explanation:
            "Writing \\( -1\\pm i\\tau=-(1\\mp i\\tau) \\) turns the product into a conjugate pair times \\( -1 \\), ready to collapse.",
        },
        {
          stepNumber: 11,
          description: "Multiply the conjugate pair.",
          workingLatex: "(1\\pm i\\tau)(1\\mp i\\tau)=1-(\\pm i\\tau)(\\mp i\\tau)=1-(-i^2\\tau^2)=1+\\tau^2.",
          explanation:
            "The product of complex conjugates \\( (1+i\\tau)(1-i\\tau)=1+\\tau^2 \\) is real and positive — independent of the \\( \\pm \\) sign.",
        },
        {
          stepNumber: 12,
          description: "Write the phase on the path.",
          workingLatex: "\\varphi(z_\\pm(\\tau))=-(1+\\tau^2).",
          explanation:
            "Both branches give the same real expression \\( -(1+\\tau^2) \\), the central result for everything that follows.",
        },
        {
          stepNumber: 13,
          description: "Check the imaginary part vanishes.",
          workingLatex: "\\operatorname{Im}\\varphi=\\operatorname{Im}\\big(-(1+\\tau^2)\\big)=0\\quad\\forall\\,\\tau.",
          explanation:
            "Since \\( -(1+\\tau^2) \\) is real for all \\( \\tau \\), the constant-phase condition \\( \\operatorname{Im}\\varphi\\equiv 0 \\) holds identically — the first half of the proof.",
        },
        {
          stepNumber: 14,
          description: "Verify the value at the saddle.",
          workingLatex: "\\tau=0:\\ \\varphi=-(1+0)=-1=\\varphi(1).",
          explanation:
            "At \\( \\tau=0 \\) the curve passes through \\( z=1 \\) and the phase equals the saddle value \\( -1 \\), so the curves indeed emanate from the saddle on the correct level set.",
        },
        {
          stepNumber: 15,
          description: "Differentiate the real part.",
          workingLatex: "\\operatorname{Re}\\varphi=-(1+\\tau^2),\\qquad \\frac{d}{d\\tau}\\operatorname{Re}\\varphi=-2\\tau.",
          explanation:
            "To test descent we differentiate the real part with respect to the path parameter \\( \\tau \\).",
        },
        {
          stepNumber: 16,
          description: "Determine the sign of the slope.",
          workingLatex: "-2\\tau<0\\ \\text{for}\\ \\tau>0,\\qquad =0\\ \\text{only at}\\ \\tau=0.",
          explanation:
            "The derivative is negative for all \\( \\tau>0 \\), so \\( \\operatorname{Re}\\varphi \\) strictly decreases as we move away from the saddle along either branch.",
        },
        {
          stepNumber: 17,
          description: "Confirm a maximum at the saddle.",
          workingLatex: "\\frac{d^2}{d\\tau^2}\\operatorname{Re}\\varphi=-2<0.",
          explanation:
            "The second derivative is negative, so \\( \\tau=0 \\) is a strict maximum of \\( \\operatorname{Re}\\varphi \\) along the curve — descent in both directions.",
        },
        {
          stepNumber: 18,
          description: "Interpret as descent of the integrand.",
          workingLatex: "|e^{k\\varphi}|=e^{k\\operatorname{Re}\\varphi}=e^{-k(1+\\tau^2)}\\ \\text{decreasing}.",
          explanation:
            "The modulus of \\( e^{k\\varphi} \\) falls off like a Gaussian \\( e^{-k\\tau^2} \\) away from the saddle, the defining feature of a steepest-descent path.",
        },
        {
          stepNumber: 19,
          description: "Rule out the steepest-ascent path.",
          workingLatex: "\\text{ascent would give }\\operatorname{Re}\\varphi\\ \\text{increasing};\\ \\text{here it decreases}.",
          explanation:
            "A constant-phase curve through a saddle splits into descent and ascent branches; the decreasing real part identifies \\( z_\\pm \\) as the descent (not ascent) pair.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex:
            "\\operatorname{Im}\\varphi\\equiv 0\\ \\text{and}\\ \\operatorname{Re}\\varphi=-(1+\\tau^2)\\downarrow\\;\\Longrightarrow\\;z_\\pm\\ \\text{are descent paths}.",
          explanation:
            "Constant imaginary part with strictly decreasing real part is exactly the steepest-descent condition, so both \\( z_\\pm \\) are descent paths through \\( z=1 \\). Numerically \\( \\operatorname{Im}\\varphi \\) is \\( 0 \\) to machine precision along the curve.",
        },
      ],
      finalAnswer:
        "\\( \\varphi(z_\\pm(\\tau))=-(1+\\tau^2) \\): real and decreasing, so \\( z_\\pm \\) are steepest-descent paths with \\( \\operatorname{Im}\\varphi\\equiv 0 \\).",
    },
  },
  {
    id: "am8a-020",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 20",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Using \\( \\varphi(z_\\pm(\\tau))=-(1+\\tau^2) \\), evaluate the leading saddle-point contribution to \\( I(k)=\\dfrac{1}{2\\pi i}\\displaystyle\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty}\\frac{e^{k\\varphi(z)}}{z-c}\\,dz \\) as \\( k\\to+\\infty \\) when no pole is crossed (\\( c>\\gamma \\)).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent", "Gaussian integral", "saddle contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Reduce to the parabola integral.",
          workingLatex:
            "I(k)=\\frac{1}{2\\pi i}\\int_{\\text{parabola}}\\frac{e^{k\\varphi(z)}}{z-c}\\,dz\\qquad(c>\\gamma:\\text{ no pole swept}).",
          explanation:
            "With \\( c>\\gamma \\) the deformation onto the descent parabola never reaches the pole, so \\( I(k) \\) equals the steepest-descent integral alone.",
          mafs: `<Mafs viewBox={{ x: [-2.4, 2.4], y: [-1.8, 1.8], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-1.7, 1.7]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[-2.2,0]} point2={[0,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Point x={2} y={0} color="var(--mafs-fg-orange)" />
  <LaTeX at={[2,0]} tex="\\times" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.6,-0.4]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.95,0.4]} tex="z=c" color="var(--mafs-fg-orange)" />
  <LaTeX at={[-1.5,1.5]} tex="\\text{descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-1.35,-0.4]} tex="\\text{branch cut}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.1,-0.25]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.3,1.6]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 2,
          description: "Confirm the pole is not swept.",
          workingLatex: "c>\\gamma>1\\;\\Longrightarrow\\;c\\notin(1,\\gamma):\\ \\Delta I_{\\text{pole}}=0.",
          explanation:
            "Since the swept real interval is \\( (1,\\gamma) \\) and \\( c>\\gamma \\) lies beyond it, the deformation collects no residue, leaving the bare descent integral.",
        },
        {
          stepNumber: 3,
          description: "Choose the path parametrisation.",
          workingLatex: "z=(1+i\\tau)^2,\\qquad \\tau\\in(-\\infty,\\infty).",
          explanation:
            "From am8a-019 the descent parabola is \\( z=(1+i\\tau)^2 \\); a single signed parameter \\( \\tau \\) covers both halves of the curve.",
        },
        {
          stepNumber: 4,
          description: "Compute the differential.",
          workingLatex: "dz=2(1+i\\tau)\\cdot i\\,d\\tau=2i(1+i\\tau)\\,d\\tau.",
          explanation:
            "Differentiating \\( z=(1+i\\tau)^2 \\) by the chain rule gives \\( dz \\) in terms of \\( d\\tau \\), needed to change variables in the integral.",
        },
        {
          stepNumber: 5,
          description: "Substitute the phase on the path.",
          workingLatex: "\\varphi(z)=-(1+\\tau^2)\\;\\Longrightarrow\\;e^{k\\varphi}=e^{-k(1+\\tau^2)}.",
          explanation:
            "Using \\( \\varphi(z_\\pm(\\tau))=-(1+\\tau^2) \\) the exponential factor becomes a Gaussian \\( e^{-k\\tau^2} \\) times the saddle weight \\( e^{-k} \\).",
        },
        {
          stepNumber: 6,
          description: "Rewrite the denominator in \\( \\tau \\).",
          workingLatex: "z-c=(1+i\\tau)^2-c.",
          explanation:
            "The smooth pole factor \\( 1/(z-c) \\) becomes \\( 1/[(1+i\\tau)^2-c] \\) under the substitution.",
        },
        {
          stepNumber: 7,
          description: "Assemble the full \\( \\tau \\)-integral.",
          workingLatex:
            "I(k)=\\frac{1}{2\\pi i}\\int_{-\\infty}^{\\infty}\\frac{e^{-k(1+\\tau^2)}}{(1+i\\tau)^2-c}\\,2i(1+i\\tau)\\,d\\tau.",
          explanation:
            "Collecting the phase, denominator and \\( dz \\) gives a Gaussian-weighted real integral concentrated near \\( \\tau=0 \\) for large \\( k \\).",
        },
        {
          stepNumber: 8,
          description: "Localise to the saddle.",
          workingLatex: "e^{-k\\tau^2}\\ \\text{negligible for}\\ |\\tau|\\gtrsim k^{-1/2}.",
          explanation:
            "The Gaussian weight confines the integral to a shrinking window of width \\( O(k^{-1/2}) \\) about \\( \\tau=0 \\), justifying expanding the smooth factor there.",
        },
        {
          stepNumber: 9,
          description: "Freeze the smooth numerator factor.",
          workingLatex: "1+i\\tau\\big|_{\\tau=0}=1.",
          explanation:
            "To leading order the slowly varying factor \\( 1+i\\tau \\) from \\( dz \\) is replaced by its value \\( 1 \\) at the saddle.",
        },
        {
          stepNumber: 10,
          description: "Freeze the denominator.",
          workingLatex: "(1+i\\tau)^2-c\\big|_{\\tau=0}=1-c.",
          explanation:
            "Likewise the denominator is evaluated at the saddle \\( z=1 \\), giving the constant \\( 1-c \\), finite because \\( c\\neq 1 \\).",
        },
        {
          stepNumber: 11,
          description: "Reduce to a Gaussian integral.",
          workingLatex:
            "I(k)\\approx\\frac{e^{-k}}{2\\pi i}\\cdot\\frac{2i}{1-c}\\int_{-\\infty}^{\\infty}e^{-k\\tau^2}\\,d\\tau.",
          explanation:
            "With the smooth factors frozen, only the Gaussian carries the \\( k \\)-dependence, factoring cleanly out of the constants.",
        },
        {
          stepNumber: 12,
          description: "Evaluate the Gaussian.",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{-k\\tau^2}\\,d\\tau=\\sqrt{\\frac{\\pi}{k}}.",
          explanation:
            "The standard Gaussian supplies the characteristic \\( k^{-1/2} \\) prefactor of a non-degenerate saddle.",
        },
        {
          stepNumber: 13,
          description: "Collect the constant prefactors.",
          workingLatex: "\\frac{2i}{2\\pi i}=\\frac{1}{\\pi}.",
          explanation:
            "The \\( 2i \\) from \\( dz \\) cancels against the \\( 2\\pi i \\) of the Bromwich prefactor, leaving \\( 1/\\pi \\).",
        },
        {
          stepNumber: 14,
          description: "Multiply the surviving factors.",
          workingLatex: "\\frac{1}{\\pi}\\cdot\\frac{1}{1-c}\\cdot\\sqrt{\\frac{\\pi}{k}}=\\frac{1}{(1-c)\\sqrt{\\pi k}}.",
          explanation:
            "Combining \\( 1/\\pi \\) with \\( \\sqrt{\\pi/k} \\) gives \\( 1/\\sqrt{\\pi k} \\), divided by \\( (1-c) \\) from the denominator.",
        },
        {
          stepNumber: 15,
          description: "Restore the exponential weight.",
          workingLatex: "I(k)\\sim\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}.",
          explanation:
            "Attaching the saddle weight \\( e^{-k} \\) yields the leading saddle contribution.",
        },
        {
          stepNumber: 16,
          description: "Cross-check via the curvature formula.",
          workingLatex:
            "I_{\\text{sad}}\\sim\\frac{1}{2\\pi i}\\,\\frac{e^{k\\varphi(1)}}{1-c}\\sqrt{\\frac{2\\pi}{k\\,|\\varphi''(1)|}}\\cdot(\\text{dir.}),\\ \\varphi''(1)=\\tfrac12.",
          explanation:
            "The standard saddle formula with \\( \\varphi''(1)=\\tfrac12 \\) gives \\( \\sqrt{2\\pi/(k\\cdot\\tfrac12)}=\\sqrt{4\\pi/k} \\), reproducing the same \\( k^{-1/2} \\) order as an independent check.",
        },
        {
          stepNumber: 17,
          description: "Note the sign of the prefactor.",
          workingLatex: "c>\\gamma>1\\;\\Longrightarrow\\;1-c<0.",
          explanation:
            "For \\( c>1 \\) the constant \\( 1-c \\) is negative, so the saddle term carries a definite sign — relevant when it is compared with other contributions.",
        },
        {
          stepNumber: 18,
          description: "Identify the decay rate.",
          workingLatex: "I(k)=O\\!\\big(e^{-k}k^{-1/2}\\big).",
          explanation:
            "The exponential rate \\( e^{-k} \\) is set by \\( \\varphi(1)=-1 \\); since no pole is crossed this is the full leading behaviour.",
        },
        {
          stepNumber: 19,
          description: "Confirm convergence of the approximation.",
          workingLatex: "\\text{relative error }=O(k^{-1})\\to 0.",
          explanation:
            "The neglected quadratic corrections to the smooth factor contribute at relative order \\( 1/k \\), so the leading term is asymptotically exact as \\( k\\to\\infty \\).",
        },
        {
          stepNumber: 20,
          description: "State the leading asymptotics.",
          workingLatex: "I(k)\\sim\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}\\qquad(k\\to+\\infty).",
          explanation:
            "This is the saddle-only result; matched numerically against the full Bromwich integral at \\( k=40,\\ c=4 \\).",
        },
      ],
      finalAnswer: "\\( I(k)\\sim\\dfrac{e^{-k}}{(1-c)\\sqrt{\\pi k}} \\) as \\( k\\to+\\infty \\).",
      canonicalAnswer: "exp(-k)/((1-c)*sqrt(pi*k))",
    },
  },
  {
    id: "am8a-021",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( I(k) \\) of am8a-020 with a real pole at \\( 1<c<\\gamma \\), combine the residue picked up on deformation with the saddle term to write the full two-term asymptotics as \\( k\\to+\\infty \\), and identify the dominant term.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["pole plus saddle", "dominant balance", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the deformation.",
          workingLatex: "I(k)=\\frac{1}{2\\pi i}\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty}\\frac{e^{k\\varphi(z)}}{z-c}\\,dz,\\ \\varphi=z-2z^{1/2}.",
          explanation:
            "The Bromwich line is pushed left onto the descent parabola; the value is the residue swept plus the parabola integral, computed separately.",
        },
        {
          stepNumber: 2,
          description: "Locate the swept interval.",
          workingLatex: "\\text{parabola at }x=1,\\ \\text{line at }x=\\gamma\\;\\Longrightarrow\\;\\text{swept }(1,\\gamma).",
          explanation:
            "Dragging \\( \\operatorname{Re}z=\\gamma \\) onto the vertex \\( x=1 \\) sweeps the real interval \\( (1,\\gamma) \\); a pole there is crossed.",
        },
        {
          stepNumber: 3,
          description: "Confirm the pole is crossed.",
          workingLatex: "1<c<\\gamma\\;\\Longrightarrow\\;c\\in(1,\\gamma):\\ \\text{crossed}.",
          explanation:
            "The real pole at \\( 1<c<\\gamma \\) lies in the swept sliver, so the deformation acquires its residue with the anticlockwise sign.",
        },
        {
          stepNumber: 4,
          description: "Compute the residue.",
          workingLatex: "\\operatorname*{Res}_{z=c}\\frac{e^{k\\varphi(z)}}{z-c}=e^{k(c-2\\sqrt c)}.",
          explanation:
            "The simple pole's residue is the analytic numerator at \\( z=c \\), giving the exponential \\( e^{k(c-2\\sqrt c)} \\).",
        },
        {
          stepNumber: 5,
          description: "Apply prefactor and orientation.",
          workingLatex: "\\Delta I_{\\text{pole}}=\\frac{1}{2\\pi i}\\cdot 2\\pi i\\,e^{k(c-2\\sqrt c)}=e^{k(c-2\\sqrt{c})}.",
          explanation:
            "The \\( 1/(2\\pi i) \\) prefactor cancels the \\( 2\\pi i \\) from the anticlockwise crossing, leaving the clean residue contribution.",
        },
        {
          stepNumber: 6,
          description: "Recall the saddle contribution.",
          workingLatex: "I_{\\text{saddle}}\\sim\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}.",
          explanation:
            "From am8a-020; the smooth factor \\( 1/(z-c) \\) is evaluated at the saddle \\( z=1 \\), giving \\( 1/(1-c) \\), finite because \\( c\\neq 1 \\).",
        },
        {
          stepNumber: 7,
          description: "Add the two contributions.",
          workingLatex:
            "I(k)\\sim e^{k(c-2\\sqrt{c})}+\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}.",
          explanation:
            "After deformation \\( I(k) \\) equals the residue plus the parabola integral, so both terms appear additively.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-2.6, 2.6]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[2,-2.6]} point2={[2,2.6]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Plot.Parametric xy={(t) => [1.5 + 0.35*Math.cos(t), 0.35*Math.sin(t)]} domain={[0, 6.2832]} color="var(--mafs-fg-orange)" weight={2} />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Point x={1.5} y={0} color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.5,0]} tex="\\times" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.5,-0.55]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.45,0.6]} tex="z=c" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.0,-0.95]} tex="+2\\pi iR" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.2,2.2]} tex="\\operatorname{Re}z=\\gamma" color="var(--mafs-fg-accent)" />
  <LaTeX at={[-1.9,2.3]} tex="\\text{descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.4,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 8,
          description: "Name the two exponential rates.",
          workingLatex: "g_{\\text{pole}}=c-2\\sqrt c,\\qquad g_{\\text{sad}}=-1.",
          explanation:
            "The competition is between the pole's rate \\( c-2\\sqrt c \\) and the saddle's rate \\( -1 \\); the larger (less negative) one wins.",
        },
        {
          stepNumber: 9,
          description: "Form the rate equation.",
          workingLatex: "c-2\\sqrt c=-1\\;\\Longrightarrow\\;c-2\\sqrt c+1=0.",
          explanation:
            "Setting the two rates equal isolates the critical \\( c \\) at which neither term dominates.",
        },
        {
          stepNumber: 10,
          description: "Recognise a perfect square.",
          workingLatex: "c-2\\sqrt c+1=(\\sqrt c)^2-2\\sqrt c+1=(\\sqrt c-1)^2.",
          explanation:
            "Treating \\( \\sqrt c \\) as the variable, the left side is the perfect square \\( (\\sqrt c-1)^2 \\).",
        },
        {
          stepNumber: 11,
          description: "Solve the rate equation.",
          workingLatex: "(\\sqrt c-1)^2=0\\;\\Longleftrightarrow\\;\\sqrt c=1\\;\\Longleftrightarrow\\;c=1.",
          explanation:
            "Equality holds only at \\( c=1 \\), where the pole coincides with the saddle.",
        },
        {
          stepNumber: 12,
          description: "Confirm \\( c=1 \\) is the minimum of the rate.",
          workingLatex: "g'(c)=1-c^{-1/2}=0\\Rightarrow c=1,\\ g''(c)=\\tfrac12 c^{-3/2}>0.",
          explanation:
            "The stationary point of \\( g_{\\text{pole}} \\) is \\( c=1 \\) and the positive second derivative makes it the unique minimum, value \\( -1 \\).",
        },
        {
          stepNumber: 13,
          description: "Deduce the inequality off the minimum.",
          workingLatex: "c\\neq 1\\;\\Longrightarrow\\;c-2\\sqrt c>-1.",
          explanation:
            "Since \\( -1 \\) is the strict minimum, any \\( c\\neq 1 \\) gives a strictly larger rate — in particular every \\( c \\) in \\( (1,\\gamma) \\).",
        },
        {
          stepNumber: 14,
          description: "Specialise to the swept interval.",
          workingLatex: "1<c<\\gamma\\;\\Longrightarrow\\;-1<c-2\\sqrt c<\\gamma-2\\sqrt\\gamma.",
          explanation:
            "Throughout the crossing interval the pole's rate strictly exceeds the saddle's \\( -1 \\).",
        },
        {
          stepNumber: 15,
          description: "Spot-check numerically.",
          workingLatex: "c=1.5:\\ 1.5-2\\sqrt{1.5}=-0.949>-1.",
          explanation:
            "A representative value confirms the rate sits just above \\( -1 \\), so the pole term decays only slightly more slowly than the saddle.",
        },
        {
          stepNumber: 16,
          description: "Compare the exponentials.",
          workingLatex: "\\frac{e^{k(c-2\\sqrt c)}}{e^{-k}}=e^{k(c-2\\sqrt c+1)}\\to\\infty\\quad(k\\to\\infty).",
          explanation:
            "Their ratio grows without bound because the exponent \\( c-2\\sqrt c+1=(\\sqrt c-1)^2>0 \\) is positive, so the pole term overwhelms the saddle term.",
        },
        {
          stepNumber: 17,
          description: "Note the algebraic factor is harmless.",
          workingLatex: "e^{k(c-2\\sqrt c)}\\ \\text{vs}\\ \\frac{e^{-k}}{\\sqrt{\\pi k}}:\\ \\text{exponential beats }k^{-1/2}.",
          explanation:
            "The saddle's extra \\( k^{-1/2} \\) cannot reverse an exponential gap, so the dominance is decided purely by the exponential rates.",
        },
        {
          stepNumber: 18,
          description: "Identify the dominant term.",
          workingLatex: "e^{k(c-2\\sqrt{c})}\\gg \\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}\\qquad(k\\to+\\infty).",
          explanation:
            "The pole contribution leads; the saddle term is exponentially subdominant for every \\( c \\) in the crossing interval.",
        },
        {
          stepNumber: 19,
          description: "State the leading behaviour.",
          workingLatex: "I(k)\\sim e^{k(c-2\\sqrt{c})}.",
          explanation:
            "To leading exponential order only the residue survives — the practical payoff of tracking which singularities a deformation crosses.",
        },
        {
          stepNumber: 20,
          description: "Record the full two-term form.",
          workingLatex:
            "I(k)\\sim e^{k(c-2\\sqrt{c})}+\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}},\\ \\text{pole dominant}.",
          explanation:
            "Keeping both terms gives the complete two-term asymptotics with the pole leading and the saddle as the exponentially small correction.",
        },
      ],
      finalAnswer:
        "\\( I(k)\\sim e^{k(c-2\\sqrt{c})}+\\dfrac{e^{-k}}{(1-c)\\sqrt{\\pi k}} \\); the pole term dominates for \\( 1<c<\\gamma \\).",
    },
  },
  {
    id: "am8a-022",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( I(k) \\) of am8a-020 with a complex pole \\( c=ib \\), \\( b \\) real and \\( b>2 \\), determine whether deforming onto the steepest-descent parabola crosses the pole, and hence give the leading asymptotics as \\( k\\to+\\infty \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["complex pole", "pole crossing", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Place the pole.",
          workingLatex: "c=ib:\\ \\operatorname{Re}c=0,\\ \\operatorname{Im}c=b>2.",
          explanation:
            "The pole sits on the positive imaginary axis; we test it against the deformed contour, the parabola \\( y^2=4(1-x) \\).",
        },
        {
          stepNumber: 2,
          description: "Recall the deformed contour and swept region.",
          workingLatex: "\\text{between }\\operatorname{Re}z=\\gamma\\ \\text{and}\\ y^2=4(1-x).",
          explanation:
            "The residue is acquired only if the pole lies in the region the contour passes through as the line is dragged onto the parabola.",
        },
        {
          stepNumber: 3,
          description: "Write the parabola in Cartesian form.",
          workingLatex: "z=x+iy,\\qquad y^2=4(1-x)\\;\\Longrightarrow\\;x=1-\\frac{y^2}{4}.",
          explanation:
            "Expressing \\( x \\) in terms of \\( y \\) lets us locate the parabola at any height, in particular on the imaginary axis where the pole lives.",
        },
        {
          stepNumber: 4,
          description: "Find where the parabola meets the imaginary axis.",
          workingLatex: "x=0\\;\\Longrightarrow\\;\\frac{y^2}{4}=1\\;\\Longrightarrow\\;y^2=4.",
          explanation:
            "Setting \\( x=0 \\) (the imaginary axis, where \\( \\operatorname{Re}c=0 \\)) gives the heights at which the parabola crosses it.",
        },
        {
          stepNumber: 5,
          description: "Solve for the crossing heights.",
          workingLatex: "y=\\pm 2\\;\\Longrightarrow\\;z=\\pm 2i.",
          explanation:
            "The parabola meets the imaginary axis at \\( z=\\pm 2i \\); these mark the extent of the swept region along that axis.",
        },
        {
          stepNumber: 6,
          description: "Determine which side the swept region occupies.",
          workingLatex: "\\text{on }\\operatorname{Im}\\ \\text{axis, swept }=\\{iy:\\ |y|\\le 2\\}.",
          explanation:
            "Between the Bromwich line (far right) and the parabola, the portion lying on the imaginary axis is the segment \\( |y|\\le 2 \\); beyond \\( |y|=2 \\) the parabola has already bent into \\( x<0 \\), past the cut.",
        },
        {
          stepNumber: 7,
          description: "Compare the pole height.",
          workingLatex: "b>2\\;\\Longrightarrow\\;(0,b)\\ \\text{has}\\ |y|=b>2.",
          explanation:
            "The pole at \\( ib \\) has height \\( b>2 \\), placing it strictly above the topmost crossing \\( 2i \\).",
        },
        {
          stepNumber: 8,
          description: "Decide on crossing.",
          workingLatex: "(0,b)\\notin\\{|y|\\le 2\\}\\;\\Longrightarrow\\;\\text{not swept}.",
          explanation:
            "The pole lies beyond \\( z=2i \\), outside the swept region, so the deformation never drags the contour across it. (Verified numerically: at \\( b=3,2.5 \\) the full integral matches the saddle term alone.)",
        },
        {
          stepNumber: 9,
          description: "Conclude no residue.",
          workingLatex: "\\Delta I_{\\text{pole}}=0.",
          explanation:
            "No pole is swept, so the deformation is clean and \\( I(k) \\) reduces entirely to the steepest-descent integral along the parabola.",
        },
        {
          stepNumber: 10,
          description: "Reduce to the descent integral.",
          workingLatex: "I(k)=\\frac{1}{2\\pi i}\\int_{\\text{parabola}}\\frac{e^{k\\varphi(z)}}{z-c}\\,dz.",
          explanation:
            "With the residue absent, the whole value is the saddle integral, evaluated exactly as in am8a-020 but with \\( c=ib \\).",
        },
        {
          stepNumber: 11,
          description: "Parametrise the path.",
          workingLatex: "z=(1+i\\tau)^2,\\qquad dz=2i(1+i\\tau)\\,d\\tau.",
          explanation:
            "The same descent parametrisation applies, with \\( \\varphi=-(1+\\tau^2) \\) along it.",
        },
        {
          stepNumber: 12,
          description: "Substitute the phase.",
          workingLatex: "e^{k\\varphi}=e^{-k(1+\\tau^2)}=e^{-k}e^{-k\\tau^2}.",
          explanation:
            "The Gaussian \\( e^{-k\\tau^2} \\) concentrates the integral near \\( \\tau=0 \\), the saddle.",
        },
        {
          stepNumber: 13,
          description: "Check the denominator stays finite.",
          workingLatex: "z-c=(1+i\\tau)^2-ib\\neq 0\\ \\text{on the path}.",
          explanation:
            "Because the pole is off the contour the denominator never vanishes along the parabola, so the Laplace expansion is valid with no indentation needed.",
        },
        {
          stepNumber: 14,
          description: "Freeze the smooth factors at the saddle.",
          workingLatex: "1+i\\tau\\to 1,\\qquad (1+i\\tau)^2-ib\\to 1-ib.",
          explanation:
            "At \\( \\tau=0 \\) (\\( z=1 \\)) the numerator factor is \\( 1 \\) and the denominator is the complex constant \\( 1-ib \\).",
        },
        {
          stepNumber: 15,
          description: "Reduce to a Gaussian.",
          workingLatex:
            "I(k)\\approx\\frac{e^{-k}}{2\\pi i}\\cdot\\frac{2i}{1-ib}\\int_{-\\infty}^{\\infty}e^{-k\\tau^2}\\,d\\tau.",
          explanation:
            "The frozen factors come out, leaving the Gaussian to carry the \\( k \\)-dependence.",
        },
        {
          stepNumber: 16,
          description: "Evaluate the Gaussian.",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{-k\\tau^2}\\,d\\tau=\\sqrt{\\frac{\\pi}{k}}.",
          explanation:
            "The standard Gaussian gives the \\( k^{-1/2} \\) prefactor of a non-degenerate saddle.",
        },
        {
          stepNumber: 17,
          description: "Cancel the prefactor constants.",
          workingLatex: "\\frac{2i}{2\\pi i}=\\frac{1}{\\pi}.",
          explanation:
            "The \\( 2i \\) from \\( dz \\) cancels against \\( 2\\pi i \\), exactly as in the real-pole case.",
        },
        {
          stepNumber: 18,
          description: "Assemble the prefactor.",
          workingLatex: "\\frac{1}{\\pi}\\cdot\\frac{1}{1-ib}\\sqrt{\\frac{\\pi}{k}}=\\frac{1}{(1-ib)\\sqrt{\\pi k}}.",
          explanation:
            "Combining constants yields \\( 1/[(1-ib)\\sqrt{\\pi k}] \\), a complex prefactor reflecting the pole's off-axis position.",
        },
        {
          stepNumber: 19,
          description: "Note the rate is unchanged.",
          workingLatex: "\\text{rate}=\\varphi(1)=-1\\;\\Longrightarrow\\;e^{-k}.",
          explanation:
            "With no faster pole term, the decay rate is the saddle's \\( e^{-k} \\); only the prefactor differs from the real-pole case.",
        },
        {
          stepNumber: 20,
          description: "State the leading asymptotics.",
          workingLatex: "I(k)\\sim\\frac{e^{-k}}{(1-ib)\\sqrt{\\pi k}}\\qquad(k\\to+\\infty).",
          explanation:
            "The answer is complex (the pole's position tilts the prefactor) but decays at the saddle rate \\( e^{-k} \\) since the pole at \\( ib,\\ b>2 \\) is not crossed.",
        },
      ],
      finalAnswer:
        "No pole crossed; \\( I(k)\\sim\\dfrac{e^{-k}}{(1-ib)\\sqrt{\\pi k}} \\).",
    },
  },
  {
    id: "am8a-023",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( I(k) \\) of am8a-020 with real \\( c \\), explain how the leading asymptotics changes discontinuously as \\( c \\) passes through \\( c=1 \\), and relate this to the Stokes phenomenon.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stokes phenomenon", "pole crossing", "subdominant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Catalogue the two contributions.",
          workingLatex:
            "I(k)\\sim\\underbrace{e^{k(c-2\\sqrt{c})}}_{\\text{pole, if crossed}}+\\underbrace{\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}}_{\\text{saddle}}.",
          explanation:
            "A pole term (present only when the deformation sweeps \\( z=c \\)) and a saddle term are both available; which leads depends on \\( c \\).",
        },
        {
          stepNumber: 2,
          description: "Recall the crossing criterion.",
          workingLatex: "\\text{pole present}\\iff c\\in(1,\\gamma)\\ \\text{(swept interval)}.",
          explanation:
            "Dragging \\( \\operatorname{Re}z=\\gamma \\) onto the parabola sweeps \\( (1,\\gamma) \\); the residue term is switched on exactly when \\( c \\) lies in that interval.",
        },
        {
          stepNumber: 3,
          description: "Region \\( c<1 \\): pole not swept.",
          workingLatex: "c<1\\;\\Longrightarrow\\;c\\notin(1,\\gamma)\\;\\Longrightarrow\\;\\Delta I_{\\text{pole}}=0.",
          explanation:
            "A pole at \\( c<1 \\) lies left of the vertex, outside the swept sliver, so no residue is acquired.",
        },
        {
          stepNumber: 4,
          description: "Saddle dominates for \\( c<1 \\).",
          workingLatex: "I(k)\\sim\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}\\qquad(c<1).",
          explanation:
            "With no pole term, the saddle contribution is the whole leading behaviour, decaying at rate \\( e^{-k} \\).",
        },
        {
          stepNumber: 5,
          description: "Region \\( 1<c<\\gamma \\): pole swept.",
          workingLatex: "1<c<\\gamma\\;\\Longrightarrow\\;\\Delta I_{\\text{pole}}=e^{k(c-2\\sqrt c)}.",
          explanation:
            "Now the pole lies in the swept interval, so the deformation acquires its residue \\( e^{k(c-2\\sqrt c)} \\).",
        },
        {
          stepNumber: 6,
          description: "Establish the rate inequality.",
          workingLatex: "g(c)=c-2\\sqrt c,\\ g'(c)=1-c^{-1/2}=0\\Rightarrow c=1,\\ g(1)=-1.",
          explanation:
            "The rate \\( g(c) \\) has its unique minimum \\( -1 \\) at \\( c=1 \\) (since \\( g''>0 \\)), so for \\( c>1 \\) it strictly exceeds \\( -1 \\).",
        },
        {
          stepNumber: 7,
          description: "Pole dominates for \\( 1<c<\\gamma \\).",
          workingLatex: "c-2\\sqrt c>-1\\;\\Longrightarrow\\;e^{k(c-2\\sqrt c)}\\gg e^{-k}.",
          explanation:
            "The residue decays more slowly than the saddle's \\( e^{-k} \\), so \\( I(k)\\sim e^{k(c-2\\sqrt c)} \\) here — the dominant balance has switched.",
        },
        {
          stepNumber: 8,
          description: "Quantify the discontinuity in the leading term.",
          workingLatex:
            "c\\to1^-:\\ \\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}};\\quad c\\to1^+:\\ e^{k(c-2\\sqrt c)}.",
          explanation:
            "Approaching \\( c=1 \\) from below and above gives different functional forms for the leading asymptotics — the term that leads changes abruptly.",
        },
        {
          stepNumber: 9,
          description: "Match the rates at the boundary.",
          workingLatex: "c\\to1:\\ c-2\\sqrt c\\to-1=\\varphi(1).",
          explanation:
            "As \\( c\\to 1 \\) the pole's rate approaches the saddle's, so the two exponentials become comparable and the simple comparison fails.",
        },
        {
          stepNumber: 10,
          description: "Locate the coalescence.",
          workingLatex: "c=1=z_0\\;\\Longrightarrow\\;\\text{pole sits on the saddle}.",
          explanation:
            "At \\( c=1 \\) the pole coincides with the saddle point, the geometric origin of the breakdown.",
        },
        {
          stepNumber: 11,
          description: "See the prefactor blow up.",
          workingLatex: "\\frac{1}{1-c}\\xrightarrow{c\\to1}\\infty.",
          explanation:
            "The saddle prefactor \\( 1/(1-c) \\) diverges as \\( c\\to1 \\), signalling that the Laplace expansion which froze the factor at the saddle is no longer valid.",
        },
        {
          stepNumber: 12,
          description: "Diagnose the cause.",
          workingLatex: "\\text{smooth factor }\\frac{1}{z-c}\\ \\text{not slowly varying near }z=1.",
          explanation:
            "When the pole nears the saddle, \\( 1/(z-c) \\) varies rapidly across the width \\( O(k^{-1/2}) \\) of the Gaussian, violating the assumption behind the naive split.",
        },
        {
          stepNumber: 13,
          description: "Name the phenomenon.",
          workingLatex: "\\text{recessive }\\to\\text{ dominant at }c=1:\\ \\textbf{Stokes phenomenon}.",
          explanation:
            "The discontinuous switch in which exponential leads, as a parameter crosses a critical value, is precisely the Stokes phenomenon.",
        },
        {
          stepNumber: 14,
          description: "Interpret the switch-on.",
          workingLatex: "\\text{across }c=1:\\ \\text{pole term turns on relative to saddle}.",
          explanation:
            "On one side the pole contribution is absent or subdominant; on the other it is present and dominant — it has been switched on across the Stokes value.",
        },
        {
          stepNumber: 15,
          description: "Set up the uniform variable.",
          workingLatex: "\\text{distance }\\ \\sqrt k\\,(c-1)=O(1)\\ \\text{is the transition scale}.",
          explanation:
            "The crossover happens in a window where \\( \\sqrt k(c-1) \\) is order one; an approximation uniform in this combined variable is needed.",
        },
        {
          stepNumber: 16,
          description: "Introduce the error-function form.",
          workingLatex:
            "I(k)\\approx \\tfrac12\\,\\operatorname{erfc}\\!\\big(-\\sqrt k\\,(c-1)\\big)\\,e^{k(c-2\\sqrt c)}+\\text{(saddle)}.",
          explanation:
            "Van der Waerden's uniform method replaces the abrupt switch by a complementary error function that interpolates smoothly between the two regimes.",
        },
        {
          stepNumber: 17,
          description: "Recover the far limits.",
          workingLatex: "\\operatorname{erfc}(+\\infty)=0,\\qquad \\operatorname{erfc}(-\\infty)=2.",
          explanation:
            "For \\( c<1 \\) the erfc argument \\( \\to+\\infty \\) and the pole term vanishes; for \\( c>1 \\) it \\( \\to-\\infty \\) and the full \\( e^{k(c-2\\sqrt c)} \\) is recovered — matching both one-sided results.",
        },
        {
          stepNumber: 18,
          description: "See the half-residue at the centre.",
          workingLatex: "c=1:\\ \\operatorname{erfc}(0)=1\\;\\Longrightarrow\\;\\tfrac12\\,e^{k(c-2\\sqrt c)}.",
          explanation:
            "Exactly on the Stokes value the pole contributes half its full weight — the smooth analogue of the indentation half-residue of am8a-015.",
        },
        {
          stepNumber: 19,
          description: "Confirm the divergence is removed.",
          workingLatex: "\\text{erfc transition finite at }c=1:\\ \\text{no }1/(1-c)\\ \\text{blow-up}.",
          explanation:
            "The uniform expression stays finite through \\( c=1 \\), curing the spurious singularity of the naive saddle prefactor.",
        },
        {
          stepNumber: 20,
          description: "Summarise the crossing.",
          workingLatex: "c:\\ <1\\ \\text{saddle}\\ \\to\\ c=1\\ \\text{coalesce}\\ \\to\\ >1\\ \\text{pole}.",
          explanation:
            "As \\( c \\) passes \\( 1 \\) the dominant exponential switches from saddle to pole — a Stokes phenomenon — with the apparent discontinuity smoothed by the uniform error-function transition.",
        },
      ],
      finalAnswer:
        "At \\( c=1 \\) the pole coalesces with the saddle, their rates coincide (\\( c-2\\sqrt c=-1 \\)), and the dominant exponential switches — a Stokes phenomenon, resolved by a uniform error-function approximation.",
    },
  },
  {
    id: "am8a-024",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 24",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "By deforming onto the branch cut, find the full asymptotic series as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty}\\frac{t^{a-1}e^{-xt}}{1+t}\\,dt \\) with \\( 0<a<1 \\), giving the general term.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "branch point", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the dominant region.",
          workingLatex: "e^{-xt}\\ \\text{maximal at}\\ t=0,\\quad x\\to\\infty.",
          explanation:
            "As \\( x\\to\\infty \\) the exponential decay crushes all but a shrinking neighbourhood of the lower endpoint \\( t=0 \\).",
        },
        {
          stepNumber: 2,
          description: "Localise to the branch point.",
          workingLatex: "\\text{width }t=O(1/x);\\ t=0\\ \\text{is the branch point of }t^{a-1}.",
          explanation:
            "The effective integration window is \\( t=O(1/x) \\), centred on the branch point \\( t=0 \\), so the singular factor \\( t^{a-1} \\) sets the leading algebraic order.",
        },
        {
          stepNumber: 3,
          description: "Separate singular and regular factors.",
          workingLatex: "\\frac{t^{a-1}}{1+t}=t^{a-1}\\cdot\\frac{1}{1+t}.",
          explanation:
            "Watson's lemma keeps the branch-point factor exact and expands only the regular factor \\( 1/(1+t) \\).",
        },
        {
          stepNumber: 4,
          description: "Expand the regular factor.",
          workingLatex: "\\frac{1}{1+t}=\\sum_{n=0}^{\\infty}(-1)^n t^{n}\\qquad(|t|<1).",
          explanation:
            "The geometric series of \\( 1/(1+t) \\) converges near \\( t=0 \\); term-by-term integration yields an asymptotic (not convergent) series despite the finite radius.",
        },
        {
          stepNumber: 5,
          description: "Multiply through by the singular factor.",
          workingLatex: "\\frac{t^{a-1}}{1+t}=\\sum_{n=0}^{\\infty}(-1)^n t^{a-1+n}.",
          explanation:
            "Distributing \\( t^{a-1} \\) over the series gives a sum of pure powers \\( t^{a-1+n} \\), each integrable against \\( e^{-xt} \\).",
        },
        {
          stepNumber: 6,
          description: "Interchange sum and integral.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{t^{a-1}e^{-xt}}{1+t}\\,dt\\sim\\sum_{n=0}^{\\infty}(-1)^n\\int_0^{\\infty}t^{a-1+n}e^{-xt}\\,dt.",
          explanation:
            "Watson's lemma legitimises integrating term by term in the asymptotic sense, since each term's contribution comes from the \\( t=0 \\) endpoint.",
        },
        {
          stepNumber: 7,
          description: "Recall the branch-point integral.",
          workingLatex: "\\int_0^{\\infty}t^{s-1}e^{-xt}\\,dt=\\frac{\\Gamma(s)}{x^{s}}.",
          explanation:
            "The prototype Gamma integral evaluates each monomial; here the exponent is \\( s=a+n \\).",
        },
        {
          stepNumber: 8,
          description: "Integrate the general term.",
          workingLatex:
            "\\int_0^{\\infty}t^{a-1+n}e^{-xt}\\,dt=\\frac{\\Gamma(a+n)}{x^{a+n}}.",
          explanation:
            "Each power integrates to a Gamma over a power of \\( x \\) — the same branch-point integral, shifted by \\( n \\).",
        },
        {
          stepNumber: 9,
          description: "Assemble the series.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{t^{a-1}e^{-xt}}{1+t}\\,dt\\sim\\sum_{n=0}^{\\infty}\\frac{(-1)^n\\,\\Gamma(a+n)}{x^{a+n}}.",
          explanation:
            "Re-inserting the \\( (-1)^n \\) signs from the geometric expansion gives the full descending series.",
        },
        {
          stepNumber: 10,
          description: "Write the general term.",
          workingLatex: "u_n=\\frac{(-1)^n\\,\\Gamma(a+n)}{x^{a+n}}.",
          explanation:
            "The \\( n \\)-th term carries \\( \\Gamma(a+n) \\) over \\( x^{a+n} \\), the closed form requested.",
        },
        {
          stepNumber: 11,
          description: "Exhibit the leading term.",
          workingLatex: "u_0=\\frac{\\Gamma(a)}{x^{a}}.",
          explanation:
            "The \\( n=0 \\) term gives the leading algebraic decay \\( x^{-a} \\), characteristic of the branch point.",
        },
        {
          stepNumber: 12,
          description: "Exhibit the first correction.",
          workingLatex: "u_1=-\\frac{\\Gamma(a+1)}{x^{a+1}}.",
          explanation:
            "The \\( n=1 \\) term is one power of \\( x \\) smaller and carries the opposite sign.",
        },
        {
          stepNumber: 13,
          description: "Form the term ratio.",
          workingLatex: "\\frac{u_{n+1}}{u_n}=-\\frac{\\Gamma(a+n+1)}{\\Gamma(a+n)}\\cdot\\frac{1}{x}=-\\frac{a+n}{x}.",
          explanation:
            "Using \\( \\Gamma(a+n+1)=(a+n)\\Gamma(a+n) \\), successive terms shrink by \\( (a+n)/x \\) — but only while \\( a+n<x \\).",
        },
        {
          stepNumber: 14,
          description: "Locate the smallest term.",
          workingLatex: "|u_{n+1}|<|u_n|\\iff a+n<x\\;\\Longrightarrow\\;n^*\\approx x-a.",
          explanation:
            "Terms decrease until \\( n\\approx x-a \\), after which \\( \\Gamma(a+n) \\) grows faster than \\( x^{n} \\); the series is asymptotic and optimally truncated near \\( n^* \\).",
        },
        {
          stepNumber: 15,
          description: "Confirm divergence of the full series.",
          workingLatex: "\\Gamma(a+n)\\sim n!\\,n^{a-1}\\to\\infty\\ \\text{faster than }x^{n}.",
          explanation:
            "The factorial growth of \\( \\Gamma(a+n) \\) makes the series diverge for every fixed \\( x \\), the hallmark of an asymptotic expansion.",
        },
        {
          stepNumber: 16,
          description: "State the error bound.",
          workingLatex: "\\Big|\\,\\text{remainder after }N\\,\\Big|\\le |u_{N}|\\ \\text{(alternating)}.",
          explanation:
            "For an alternating series with decreasing terms the truncation error is bounded by the first omitted term, the practical accuracy rule.",
        },
        {
          stepNumber: 17,
          description: "Set up a numerical check.",
          workingLatex: "a=\\tfrac12,\\ x=10:\\ \\Gamma(\\tfrac12)=\\sqrt\\pi,\\ \\Gamma(\\tfrac32)=\\tfrac{\\sqrt\\pi}{2}.",
          explanation:
            "Choosing concrete values lets us compare the truncated series with the exact integral.",
        },
        {
          stepNumber: 18,
          description: "Evaluate one term.",
          workingLatex: "u_0=\\frac{\\sqrt\\pi}{\\sqrt{10}}=0.56050.",
          explanation:
            "The leading term alone gives \\( 0.56050 \\), the crude one-term estimate.",
        },
        {
          stepNumber: 19,
          description: "Evaluate two terms.",
          workingLatex: "u_0+u_1=0.56050-\\frac{\\sqrt\\pi/2}{10^{3/2}}=0.53247.",
          explanation:
            "Adding the correction gives \\( 0.53247 \\), much closer to the exact \\( 0.53589 \\) than the one-term value.",
        },
        {
          stepNumber: 20,
          description: "State the result.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{t^{a-1}e^{-xt}}{1+t}\\,dt\\sim\\sum_{n=0}^{\\infty}\\frac{(-1)^n\\,\\Gamma(a+n)}{x^{a+n}}.",
          explanation:
            "The branch-cut deformation yields this full asymptotic series with general term \\( (-1)^n\\Gamma(a+n)/x^{a+n} \\), confirmed numerically.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^n\\,\\Gamma(a+n)}{x^{a+n}} \\).",
      canonicalAnswer: "sum_{n>=0} (-1)^n*gamma(a+n)/x^(a+n)",
    },
  },
  {
    id: "am8a-025",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 25",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Compare two singularities at the same height. Evaluate the pole case \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt \\) for \\( x>0 \\), and give the leading large-\\( x \\) form that a square-root branch point at \\( t=i \\) (i.e. \\( (t^2+1)^{-1/2} \\)) would instead produce; compare the decay rates.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["pole vs branch point", "decay rate", "Fourier integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Pole case: close upward.",
          workingLatex: "x>0:\\ \\text{UHP arc}\\to 0,\\ \\text{enclosed pole }t=i.",
          explanation:
            "For \\( x>0 \\) Jordan's lemma kills the upper arc, leaving the single enclosed pole \\( t=i \\).",
        },
        {
          stepNumber: 2,
          description: "Pole residue.",
          workingLatex: "\\operatorname*{Res}_{t=i}\\frac{e^{ixt}}{(t-i)(t+i)}=\\frac{e^{-x}}{2i}.",
          explanation:
            "Cancelling \\( (t-i) \\) and evaluating at \\( t=i \\) gives the residue \\( e^{-x}/(2i) \\).",
        },
        {
          stepNumber: 3,
          description: "Pole value.",
          workingLatex: "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt=2\\pi i\\cdot\\frac{e^{-x}}{2i}=\\pi e^{-x}.",
          explanation:
            "The simple pole gives a clean exponential decay set by the pole's height \\( \\operatorname{Im}t=1 \\).",
        },
        {
          stepNumber: 4,
          description: "Note the pole decay has no algebraic factor.",
          workingLatex: "\\pi e^{-x}=O(e^{-x}),\\ \\text{no power of }x.",
          explanation:
            "A simple pole produces a pure exponential with a constant prefactor — the baseline against which the branch point is compared.",
        },
        {
          stepNumber: 5,
          description: "Branch-point case: replace the pole.",
          workingLatex: "\\frac{1}{(t^2+1)^{1/2}}:\\ \\text{branch point at }t=i.",
          explanation:
            "Swapping \\( (t^2+1)^{-1} \\) for \\( (t^2+1)^{-1/2} \\) turns the pole at \\( t=i \\) into a square-root branch point.",
        },
        {
          stepNumber: 6,
          description: "Place the branch cut.",
          workingLatex: "\\text{cut from }t=i\\ \\text{upward to }i\\infty.",
          explanation:
            "The natural cut runs vertically upward from \\( t=i \\), so closing in the UHP wraps the contour around it.",
        },
        {
          stepNumber: 7,
          description: "Reduce to the cut integral.",
          workingLatex: "\\int_{-\\infty}^{\\infty}\\to\\int_{\\text{cut}}\\ \\text{(arc and line off the cut vanish)}.",
          explanation:
            "With no pole, the deformed contour collapses onto the two sides of the branch cut; the contribution comes from \\( t \\) just above \\( i \\).",
        },
        {
          stepNumber: 8,
          description: "Substitute near the branch point.",
          workingLatex: "t=i+is,\\quad s>0,\\qquad \\operatorname{Im}t=1+s.",
          explanation:
            "Parametrising upward from \\( i \\) by \\( s \\) measures distance along the cut; the height \\( \\operatorname{Im}t=1+s \\) controls the exponential.",
        },
        {
          stepNumber: 9,
          description: "Expand the radicand.",
          workingLatex: "t^2+1=(t-i)(t+i)\\approx(is)(2i)=-2s.",
          explanation:
            "Near \\( t=i \\): \\( t-i=is \\) and \\( t+i\\approx 2i \\), so \\( t^2+1\\approx-2s \\) is real and small.",
        },
        {
          stepNumber: 10,
          description: "Model the square root.",
          workingLatex: "(t^2+1)^{1/2}\\sim\\sqrt{2s}\\,e^{i\\theta},",
          explanation:
            "The local behaviour is \\( s^{1/2} \\); the discontinuity of \\( (t^2+1)^{1/2} \\) across the cut is the part that survives the wrap, giving an \\( s^{-1/2} \\) integrand.",
        },
        {
          stepNumber: 11,
          description: "Write the exponential factor.",
          workingLatex: "e^{ixt}=e^{ix(i+is)}=e^{-x}e^{-xs}.",
          explanation:
            "Substituting \\( t=i+is \\) factors the exponential into the saddle-height weight \\( e^{-x} \\) times the decaying \\( e^{-xs} \\).",
        },
        {
          stepNumber: 12,
          description: "Assemble the local integral.",
          workingLatex:
            "\\sim C'\\,e^{-x}\\int_0^{\\infty}\\frac{e^{-xs}}{\\sqrt{2s}}\\,ds.",
          explanation:
            "Collecting the jump factor \\( C' \\), the height weight \\( e^{-x} \\) and the \\( s^{-1/2} \\) singularity leaves an elementary integral in \\( s \\).",
        },
        {
          stepNumber: 13,
          description: "Recognise the Gamma integral.",
          workingLatex: "\\int_0^{\\infty}s^{-1/2}e^{-xs}\\,ds=\\frac{\\Gamma(1/2)}{x^{1/2}}=\\sqrt{\\frac{\\pi}{x}}.",
          explanation:
            "This is the branch-point Gamma integral with \\( s\\)-exponent \\( -\\tfrac12 \\), so \\( \\Gamma(1/2)=\\sqrt\\pi \\) over \\( x^{1/2} \\).",
        },
        {
          stepNumber: 14,
          description: "Insert the \\( \\sqrt 2 \\) factor.",
          workingLatex: "\\int_0^{\\infty}\\frac{e^{-xs}}{\\sqrt{2s}}\\,ds=\\frac{1}{\\sqrt2}\\sqrt{\\frac{\\pi}{x}}=\\sqrt{\\frac{\\pi}{2x}}.",
          explanation:
            "Dividing by \\( \\sqrt2 \\) from \\( \\sqrt{2s} \\) gives \\( \\sqrt{\\pi/(2x)} \\), confirmed by direct evaluation.",
        },
        {
          stepNumber: 15,
          description: "State the branch-point contribution.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{(t^2+1)^{1/2}}\\,dt\\sim C\\,e^{-x}\\sqrt{\\frac{\\pi}{2x}}.",
          explanation:
            "The height weight \\( e^{-x} \\) multiplies the algebraic \\( x^{-1/2} \\) from the square-root singularity, with \\( C \\) an order-one constant from the jump.",
        },
        {
          stepNumber: 16,
          description: "Compare the exponential rates.",
          workingLatex: "\\text{both}\\ \\propto e^{-x},\\ \\text{rate}=\\operatorname{Im}(\\text{singularity})=1.",
          explanation:
            "Both contributions decay at the same exponential rate \\( e^{-x} \\), fixed by the common height \\( 1 \\) of the singularity above the real axis.",
        },
        {
          stepNumber: 17,
          description: "Compare the algebraic prefactors.",
          workingLatex: "\\text{pole: }x^{0};\\qquad \\text{branch point: }x^{-1/2}.",
          explanation:
            "The pole carries no power of \\( x \\); the order-\\( 1/2 \\) branch point attaches an extra \\( x^{-1/2} \\).",
        },
        {
          stepNumber: 18,
          description: "Form the ratio.",
          workingLatex: "\\frac{\\text{branch}}{\\text{pole}}\\sim\\frac{C}{\\pi}\\,\\frac{1}{\\sqrt{x}}\\to 0.",
          explanation:
            "The branch-point contribution is smaller than the pole's by a factor \\( x^{-1/2} \\), vanishing relative to it as \\( x\\to\\infty \\).",
        },
        {
          stepNumber: 19,
          description: "Note the diagnostic.",
          workingLatex: "\\text{rate alone}\\ \\not\\Rightarrow\\ \\text{singularity type}.",
          explanation:
            "Since both share \\( e^{-x} \\), the exponential rate cannot distinguish a pole from a branch point; only the algebraic prefactor does.",
        },
        {
          stepNumber: 20,
          description: "State the conclusion.",
          workingLatex: "\\text{pole: }\\pi e^{-x};\\quad \\text{branch point: }\\sim C\\,e^{-x}x^{-1/2}.",
          explanation:
            "A pole gives a clean exponential; an order-\\( 1/2 \\) branch point multiplies it by \\( x^{-1/2} \\) — same rate, extra algebraic factor.",
        },
      ],
      finalAnswer:
        "Pole: \\( \\pi e^{-x} \\); branch point: \\( \\sim C\\,e^{-x}x^{-1/2} \\) — same exponential rate, extra \\( x^{-1/2} \\) factor.",
      canonicalAnswer: "pi*exp(-x)",
    },
  },
  {
    id: "am8a-026",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 26",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{(t^2+1)(t^2+4)}\\,dt \\) for \\( x>0 \\), and from the result identify which pole sets the leading large-\\( x \\) decay after the deformation.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "dominant pole", "leading order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the denominator.",
          workingLatex: "(t^2+1)(t^2+4)=(t-i)(t+i)(t-2i)(t+2i).",
          explanation:
            "Both quadratics split, exposing four simple poles at \\( t=\\pm i,\\ \\pm 2i \\).",
        },
        {
          stepNumber: 2,
          description: "Close in the upper half-plane.",
          workingLatex: "x>0:\\ \\text{UHP arc}\\to 0\\;\\Longrightarrow\\;\\text{enclosed }t=i,\\ 2i.",
          explanation:
            "Jordan's lemma kills the upper arc (\\( x>0 \\)), enclosing the two poles \\( t=i \\) and \\( t=2i \\).",
        },
        {
          stepNumber: 3,
          description: "Residue setup at \\( t=i \\).",
          workingLatex: "\\operatorname*{Res}_{t=i}=\\frac{e^{ix\\cdot i}}{(t+i)(t^2+4)}\\Big|_{t=i}.",
          explanation:
            "Cancelling \\( (t-i) \\) leaves the cofactor to evaluate at \\( t=i \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the \\( t=i \\) cofactor.",
          workingLatex: "(t+i)(t^2+4)\\big|_{t=i}=(2i)(3)=6i.",
          explanation:
            "At \\( t=i \\): \\( t+i=2i \\) and \\( t^2+4=3 \\), giving \\( 6i \\).",
        },
        {
          stepNumber: 5,
          description: "Residue at \\( t=i \\).",
          workingLatex: "\\operatorname*{Res}_{t=i}=\\frac{e^{-x}}{6i}.",
          explanation:
            "Using \\( e^{ix\\cdot i}=e^{-x} \\); this term carries the slow decay \\( e^{-x} \\).",
        },
        {
          stepNumber: 6,
          description: "Residue setup at \\( t=2i \\).",
          workingLatex: "\\operatorname*{Res}_{t=2i}=\\frac{e^{ix\\cdot 2i}}{(t^2+1)(t+2i)}\\Big|_{t=2i}.",
          explanation:
            "Cancelling \\( (t-2i) \\) leaves its cofactor to evaluate at \\( t=2i \\).",
        },
        {
          stepNumber: 7,
          description: "Evaluate the \\( t=2i \\) cofactor.",
          workingLatex: "(t^2+1)(t+2i)\\big|_{t=2i}=(-3)(4i)=-12i.",
          explanation:
            "At \\( t=2i \\): \\( t^2+1=-3 \\) and \\( t+2i=4i \\), giving \\( -12i \\).",
        },
        {
          stepNumber: 8,
          description: "Residue at \\( t=2i \\).",
          workingLatex: "\\operatorname*{Res}_{t=2i}=\\frac{e^{-2x}}{-12i}.",
          explanation:
            "Using \\( e^{ix\\cdot 2i}=e^{-2x} \\); this term carries the fast decay \\( e^{-2x} \\).",
        },
        {
          stepNumber: 9,
          description: "Apply the residue theorem.",
          workingLatex: "\\int=2\\pi i\\Big(\\frac{e^{-x}}{6i}-\\frac{e^{-2x}}{12i}\\Big).",
          explanation:
            "The upward deformation collects \\( 2\\pi i \\) times the sum of the two enclosed residues.",
        },
        {
          stepNumber: 10,
          description: "Simplify the coefficients.",
          workingLatex: "=\\frac{2\\pi}{6}e^{-x}-\\frac{2\\pi}{12}e^{-2x}=\\frac{\\pi}{3}e^{-x}-\\frac{\\pi}{6}e^{-2x}.",
          explanation:
            "The \\( i \\) factors cancel and \\( 2\\pi/6=\\pi/3 \\), \\( 2\\pi/12=\\pi/6 \\); numerically \\( x=3\\to0.050839 \\), matching.",
        },
        {
          stepNumber: 11,
          description: "Identify the two heights.",
          workingLatex: "\\operatorname{Im}(i)=1,\\qquad \\operatorname{Im}(2i)=2.",
          explanation:
            "The decay rate of each term equals the height of its pole above the real axis: \\( 1 \\) and \\( 2 \\) respectively.",
        },
        {
          stepNumber: 12,
          description: "Match heights to rates.",
          workingLatex: "t=i\\to e^{-x},\\qquad t=2i\\to e^{-2x}.",
          explanation:
            "The nearer pole \\( t=i \\) gives the slower exponential \\( e^{-x} \\); the farther pole \\( t=2i \\) gives the faster \\( e^{-2x} \\).",
        },
        {
          stepNumber: 13,
          description: "Form the ratio of the two terms.",
          workingLatex: "\\frac{(\\pi/6)e^{-2x}}{(\\pi/3)e^{-x}}=\\tfrac12 e^{-x}.",
          explanation:
            "The second term is smaller than the first by a factor \\( \\tfrac12 e^{-x} \\), which tends to zero.",
        },
        {
          stepNumber: 14,
          description: "Take the large-\\( x \\) limit of the ratio.",
          workingLatex: "\\tfrac12 e^{-x}\\to 0\\qquad(x\\to+\\infty).",
          explanation:
            "The \\( t=2i \\) term is exponentially subdominant, so it drops out of the leading asymptotics.",
        },
        {
          stepNumber: 15,
          description: "Identify the dominant pole.",
          workingLatex: "t=i\\ (\\text{nearest the axis})\\ \\text{dominates}.",
          explanation:
            "The pole closest to the real axis controls the slowest decay, hence the leading large-\\( x \\) behaviour.",
        },
        {
          stepNumber: 16,
          description: "State the leading behaviour.",
          workingLatex: "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{(t^2+1)(t^2+4)}\\,dt\\sim\\frac{\\pi}{3}e^{-x}.",
          explanation:
            "Only the \\( t=i \\) term survives to leading order.",
        },
        {
          stepNumber: 17,
          description: "Quantify the relative error.",
          workingLatex: "\\text{rel. error}=\\tfrac12 e^{-x}=O(e^{-x}).",
          explanation:
            "The neglected term is exponentially small relative to the leading one, so the one-term approximation is very accurate for large \\( x \\).",
        },
        {
          stepNumber: 18,
          description: "Numerical spot-check.",
          workingLatex: "x=3:\\ \\tfrac{\\pi}{3}e^{-3}=0.05213\\ \\text{vs exact }0.050839.",
          explanation:
            "The leading term already sits within a couple of percent of the exact value at \\( x=3 \\), improving as \\( x \\) grows.",
        },
        {
          stepNumber: 19,
          description: "State the structural principle.",
          workingLatex: "\\text{nearest singularity}\\Rightarrow\\text{slowest decay}\\Rightarrow\\text{leading term}.",
          explanation:
            "When deforming past several singularities the one nearest the real axis sets the leading decay — the analytic-singularity analogue of nearest-saddle dominance.",
        },
        {
          stepNumber: 20,
          description: "Record the full result.",
          workingLatex: "\\frac{\\pi}{3}e^{-x}-\\frac{\\pi}{6}e^{-2x}\\sim\\frac{\\pi}{3}e^{-x}.",
          explanation:
            "The exact value is the two-term expression, with leading term \\( (\\pi/3)e^{-x} \\) from the dominant pole \\( t=i \\).",
        },
      ],
      finalAnswer:
        "Exact \\( \\dfrac{\\pi}{3}e^{-x}-\\dfrac{\\pi}{6}e^{-2x} \\); leading term \\( \\dfrac{\\pi}{3}e^{-x} \\) (from \\( t=i \\)).",
      canonicalAnswer: "(pi/3)*exp(-x) - (pi/6)*exp(-2*x)",
    },
  },
  {
    id: "am8a-027",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 27",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Deform onto the branch cut of \\( t^{1/2} \\) along \\( (-\\infty,0] \\) to evaluate \\( \\displaystyle\\int_0^{\\infty}t^{1/2}e^{-xt}\\,dt \\) for \\( x>0 \\), and state the algebraic decay order of this branch-point contribution.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["branch point", "Gamma function", "algebraic decay"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the branch point.",
          workingLatex: "t^{1/2}:\\ \\text{branch point at }t=0,\\ \\text{cut on }(-\\infty,0].",
          explanation:
            "The half-integer power \\( t^{1/2} \\) is multivalued, with a branch point at \\( t=0 \\); the integrand's algebraic decay comes from this point.",
        },
        {
          stepNumber: 2,
          description: "Cast as a standard Laplace integral.",
          workingLatex: "\\int_0^{\\infty}t^{1/2}e^{-xt}\\,dt=\\int_0^{\\infty}t^{(3/2)-1}e^{-xt}\\,dt.",
          explanation:
            "Writing the power as \\( s-1 \\) with \\( s=3/2 \\) matches the prototype branch-point Laplace integral \\( \\int_0^\\infty t^{s-1}e^{-xt}dt \\).",
        },
        {
          stepNumber: 3,
          description: "Choose the rescaling.",
          workingLatex: "u=xt,\\qquad t=\\frac{u}{x}.",
          explanation:
            "Substituting \\( u=xt \\) standardises the exponential to \\( e^{-u} \\); with \\( x>0 \\) the limits are unchanged.",
        },
        {
          stepNumber: 4,
          description: "Transform the differential.",
          workingLatex: "dt=\\frac{du}{x}.",
          explanation:
            "Differentiating \\( t=u/x \\) gives the measure \\( dt=du/x \\).",
        },
        {
          stepNumber: 5,
          description: "Substitute into the integral.",
          workingLatex:
            "\\int_0^{\\infty}\\Big(\\frac{u}{x}\\Big)^{1/2}e^{-u}\\,\\frac{du}{x}.",
          explanation:
            "Replacing \\( t^{1/2}=(u/x)^{1/2} \\) and \\( dt=du/x \\) recasts the integral in \\( u \\).",
        },
        {
          stepNumber: 6,
          description: "Collect the powers of \\( x \\).",
          workingLatex:
            "=\\frac{1}{x^{1/2}}\\cdot\\frac{1}{x}\\int_0^{\\infty}u^{1/2}e^{-u}\\,du=\\frac{1}{x^{3/2}}\\int_0^{\\infty}u^{1/2}e^{-u}\\,du.",
          explanation:
            "The factors \\( x^{-1/2} \\) and \\( x^{-1} \\) combine to \\( x^{-3/2} \\), leaving a pure number.",
        },
        {
          stepNumber: 7,
          description: "Identify the Gamma integral.",
          workingLatex: "\\int_0^{\\infty}u^{1/2}e^{-u}\\,du=\\Gamma\\!\\Big(\\tfrac32\\Big).",
          explanation:
            "The surviving integral is the Gamma function at \\( s=3/2 \\).",
        },
        {
          stepNumber: 8,
          description: "Apply the Gamma recurrence.",
          workingLatex: "\\Gamma\\!\\Big(\\tfrac32\\Big)=\\tfrac12\\,\\Gamma\\!\\Big(\\tfrac12\\Big).",
          explanation:
            "The recurrence \\( \\Gamma(s+1)=s\\Gamma(s) \\) with \\( s=\\tfrac12 \\) reduces \\( \\Gamma(3/2) \\) to \\( \\tfrac12\\Gamma(1/2) \\).",
        },
        {
          stepNumber: 9,
          description: "Insert the half-integer value.",
          workingLatex: "\\Gamma\\!\\Big(\\tfrac12\\Big)=\\sqrt\\pi\\;\\Longrightarrow\\;\\Gamma\\!\\Big(\\tfrac32\\Big)=\\frac{\\sqrt{\\pi}}{2}.",
          explanation:
            "Using the classic value \\( \\Gamma(1/2)=\\sqrt\\pi \\) gives \\( \\Gamma(3/2)=\\tfrac12\\sqrt\\pi \\).",
        },
        {
          stepNumber: 10,
          description: "Assemble the integral.",
          workingLatex: "\\int_0^{\\infty}t^{1/2}e^{-xt}\\,dt=\\frac{1}{x^{3/2}}\\cdot\\frac{\\sqrt\\pi}{2}=\\frac{\\sqrt{\\pi}}{2\\,x^{3/2}}.",
          explanation:
            "Combining the \\( x^{-3/2} \\) with \\( \\Gamma(3/2) \\) gives the closed form.",
        },
        {
          stepNumber: 11,
          description: "Read off the algebraic order.",
          workingLatex: "\\frac{\\sqrt\\pi}{2}\\,x^{-3/2}=O(x^{-3/2}).",
          explanation:
            "The branch-point contribution decays algebraically as \\( x^{-3/2} \\) — no exponential, unlike a saddle.",
        },
        {
          stepNumber: 12,
          description: "Relate the order to the power.",
          workingLatex: "t^{s-1},\\ s=\\tfrac32\\;\\Longrightarrow\\;\\text{decay }x^{-s}=x^{-3/2}.",
          explanation:
            "The exponent of the algebraic decay equals \\( s=\\tfrac32 \\), the shifted power of the branch-point factor.",
        },
        {
          stepNumber: 13,
          description: "Connect to the Hankel-loop view.",
          workingLatex: "\\text{wrap cut: jump }2i\\sqrt r\\ \\Rightarrow\\ \\oint=-\\tfrac{i\\sqrt\\pi}{x^{3/2}}.",
          explanation:
            "Deforming a loop around the cut (am8a-017) gives \\( -i\\sqrt\\pi/x^{3/2} \\), the same \\( x^{-3/2} \\) order — consistency between the direct and loop pictures.",
        },
        {
          stepNumber: 14,
          description: "Extract the real-integral factor.",
          workingLatex: "\\oint=-2i\\int_0^{\\infty}\\sqrt r\\,e^{-xr}\\,dr=-2i\\cdot\\frac{\\sqrt\\pi}{2x^{3/2}}.",
          explanation:
            "The loop value is exactly \\( -2i \\) times the present integral, confirming the integral's value \\( \\sqrt\\pi/(2x^{3/2}) \\).",
        },
        {
          stepNumber: 15,
          description: "Set up a numerical check.",
          workingLatex: "x=4:\\ \\frac{\\sqrt\\pi}{2\\cdot 4^{3/2}}=\\frac{\\sqrt\\pi}{16}.",
          explanation:
            "A concrete \\( x \\) lets us compare the closed form against direct quadrature.",
        },
        {
          stepNumber: 16,
          description: "Evaluate the check.",
          workingLatex: "\\frac{\\sqrt\\pi}{16}=0.11078.",
          explanation:
            "The predicted value \\( 0.11078 \\) matches numerical integration of \\( \\int_0^\\infty t^{1/2}e^{-4t}dt \\).",
        },
        {
          stepNumber: 17,
          description: "Contrast with a pole.",
          workingLatex: "\\text{pole: }e^{-x};\\quad \\text{branch point: }x^{-3/2}.",
          explanation:
            "A pole would give exponential decay; this branch point gives purely algebraic decay, a qualitatively different falloff.",
        },
        {
          stepNumber: 18,
          description: "Note the sign and reality.",
          workingLatex: "\\frac{\\sqrt\\pi}{2x^{3/2}}>0\\ \\text{(real)}.",
          explanation:
            "The integral of a positive integrand is real and positive, as the closed form confirms.",
        },
        {
          stepNumber: 19,
          description: "State the decay order.",
          workingLatex: "\\text{order }=x^{-3/2}.",
          explanation:
            "The branch-point contribution decays as \\( x^{-3/2} \\), the requested algebraic order.",
        },
        {
          stepNumber: 20,
          description: "State the result.",
          workingLatex: "\\int_0^{\\infty}t^{1/2}e^{-xt}\\,dt=\\frac{\\sqrt{\\pi}}{2\\,x^{3/2}}.",
          explanation:
            "The closed form with algebraic decay \\( x^{-3/2} \\); confirmed numerically against direct quadrature.",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\sqrt{\\pi}}{2\\,x^{3/2}} \\); algebraic decay of order \\( x^{-3/2} \\).",
      canonicalAnswer: "sqrt(pi)/(2*x^(3/2))",
    },
  },
  {
    id: "am8a-028",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 28",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t-i\\alpha}\\,dt \\) with \\( \\alpha>0,\\ x>0 \\) by deformation, then describe what happens as \\( \\alpha\\to 0^+ \\) (the pole approaching the real contour).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simple pole", "pole approaching contour", "delta function limit"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the pole.",
          workingLatex: "t-i\\alpha=0\\;\\Longrightarrow\\;t=i\\alpha,\\quad \\operatorname{Im}t=\\alpha>0.",
          explanation:
            "The single simple pole sits at \\( t=i\\alpha \\), a height \\( \\alpha \\) above the real axis.",
        },
        {
          stepNumber: 2,
          description: "Bound the integrand on an arc.",
          workingLatex: "|e^{ixt}|=e^{-x\\operatorname{Im}t},\\qquad \\Big|\\tfrac{1}{t-i\\alpha}\\Big|=O(R^{-1}).",
          explanation:
            "On a semicircle of radius \\( R \\) the exponential modulus is \\( e^{-x\\operatorname{Im}t} \\) and the rational factor decays like \\( 1/R \\), enough for Jordan's lemma.",
        },
        {
          stepNumber: 3,
          description: "Choose the upper half-plane.",
          workingLatex: "x>0:\\ e^{-x\\operatorname{Im}t}\\to 0\\iff \\operatorname{Im}t>0.",
          explanation:
            "Decay on the arc requires \\( \\operatorname{Im}t>0 \\) because \\( x>0 \\), so the contour closes upward.",
        },
        {
          stepNumber: 4,
          description: "Discard the arc.",
          workingLatex: "\\int_{\\Gamma_R}\\to 0\\;\\Longrightarrow\\;\\int_{-\\infty}^{\\infty}=2\\pi i\\,\\operatorname*{Res}_{t=i\\alpha}.",
          explanation:
            "Jordan's lemma sends the arc to zero, so the integral equals \\( 2\\pi i \\) times the residue at the enclosed pole.",
        },
        {
          stepNumber: 5,
          description: "Apply the simple-pole formula.",
          workingLatex: "\\operatorname*{Res}_{t=i\\alpha}=\\lim_{t\\to i\\alpha}(t-i\\alpha)\\frac{e^{ixt}}{t-i\\alpha}=e^{ixt}\\big|_{t=i\\alpha}.",
          explanation:
            "With unit-coefficient denominator the \\( (t-i\\alpha) \\) cancels exactly, leaving \\( e^{ixt} \\) at the pole.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the exponent.",
          workingLatex: "ix\\cdot i\\alpha=i^2 x\\alpha=-\\alpha x.",
          explanation:
            "The product \\( ix\\cdot i\\alpha \\) collapses to \\( -\\alpha x \\) via \\( i^2=-1 \\).",
        },
        {
          stepNumber: 7,
          description: "State the residue.",
          workingLatex: "\\operatorname*{Res}_{t=i\\alpha}=e^{-\\alpha x}.",
          explanation:
            "The residue is the real decaying factor \\( e^{-\\alpha x} \\), set by the pole's height \\( \\alpha \\).",
        },
        {
          stepNumber: 8,
          description: "Apply the residue theorem.",
          workingLatex: "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t-i\\alpha}\\,dt=2\\pi i\\,e^{-\\alpha x}.",
          explanation:
            "Deformation onto the enclosed pole gives \\( 2\\pi i \\) times the residue; the result decays at rate \\( \\alpha \\).",
        },
        {
          stepNumber: 9,
          description: "Interpret the decay rate.",
          workingLatex: "\\text{rate}=\\alpha=\\operatorname{Im}(\\text{pole}).",
          explanation:
            "The nearer the pole to the real axis, the slower the decay; \\( \\alpha \\) measures that distance.",
        },
        {
          stepNumber: 10,
          description: "Set up the limit.",
          workingLatex: "\\alpha\\to 0^+:\\ \\text{pole descends to the contour}.",
          explanation:
            "Letting \\( \\alpha\\to 0^+ \\) drives the pole down onto the real integration path, the singular limit of interest.",
        },
        {
          stepNumber: 11,
          description: "Take the limit of the exponential.",
          workingLatex: "\\lim_{\\alpha\\to 0^+}e^{-\\alpha x}=1\\qquad(x\\ \\text{fixed}).",
          explanation:
            "For fixed \\( x \\) the decay factor tends to \\( 1 \\), so the prefactor \\( 2\\pi i \\) survives.",
        },
        {
          stepNumber: 12,
          description: "State the limiting value.",
          workingLatex: "\\lim_{\\alpha\\to 0^+}2\\pi i\\,e^{-\\alpha x}=2\\pi i.",
          explanation:
            "The contribution tends to \\( 2\\pi i \\) for every \\( x>0 \\) — the full residue weight is retained as the pole reaches the axis.",
        },
        {
          stepNumber: 13,
          description: "Connect to the half-residue rule.",
          workingLatex: "\\text{pole above: }2\\pi i;\\quad \\text{pole on contour: }i\\pi.",
          explanation:
            "A pole strictly above gives \\( 2\\pi i\\,\\mathrm{Res} \\); a pole exactly on the contour (principal value) gives only the half-residue \\( i\\pi\\,\\mathrm{Res} \\) (am8a-015), so the limit depends on how the axis is approached.",
        },
        {
          stepNumber: 14,
          description: "Note the directional subtlety.",
          workingLatex: "\\alpha\\to 0^+\\ (\\text{from above}):\\ \\text{full }2\\pi i.",
          explanation:
            "Because the pole stays in the UHP throughout the limit, the contour never crosses it, so the full \\( 2\\pi i \\) is kept rather than a half.",
        },
        {
          stepNumber: 15,
          description: "Relate to the Fourier transform of \\( 1/(t-i\\alpha) \\).",
          workingLatex: "\\frac{1}{t-i\\alpha}\\ \\xrightarrow{\\mathcal F}\\ 2\\pi i\\,H(x)e^{-\\alpha x},",
          explanation:
            "The result is the Fourier transform of \\( 1/(t-i\\alpha) \\), giving the causal exponential \\( 2\\pi i\\,H(x)e^{-\\alpha x} \\) with Heaviside step \\( H \\).",
        },
        {
          stepNumber: 16,
          description: "Identify the Heaviside limit.",
          workingLatex: "\\alpha\\to 0^+:\\ 2\\pi i\\,H(x)e^{-\\alpha x}\\to 2\\pi i\\,H(x).",
          explanation:
            "As \\( \\alpha\\to 0^+ \\) the transform becomes \\( 2\\pi i\\,H(x) \\), the Sokhotski–Plemelj signature of a pole on the path.",
        },
        {
          stepNumber: 17,
          description: "State the distributional reading.",
          workingLatex: "\\frac{1}{t-i0^+}=\\mathrm{PV}\\frac{1}{t}+i\\pi\\delta(t).",
          explanation:
            "The Sokhotski–Plemelj formula splits the boundary value into a principal value plus a delta, the distributional content of the limit.",
        },
        {
          stepNumber: 18,
          description: "Reconcile the two views.",
          workingLatex: "\\text{closing UHP keeps the pole inside}\\Rightarrow 2\\pi i,\\ \\text{not }i\\pi.",
          explanation:
            "Approaching from \\( \\alpha>0 \\) the pole is enclosed for all \\( \\alpha \\), so the full residue is retained — consistent with the causal (one-sided) transform.",
        },
        {
          stepNumber: 19,
          description: "Numerical sanity check.",
          workingLatex: "\\alpha=0.01,\\ x=1:\\ 2\\pi e^{-0.01}\\approx 6.22\\ (\\text{modulus}).",
          explanation:
            "For small \\( \\alpha \\) the modulus \\( 2\\pi e^{-\\alpha x} \\) is already within \\( 1\\% \\) of \\( 2\\pi \\), confirming the limit.",
        },
        {
          stepNumber: 20,
          description: "State the result.",
          workingLatex: "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t-i\\alpha}\\,dt=2\\pi i\\,e^{-\\alpha x}\\ \\xrightarrow{\\alpha\\to0^+}\\ 2\\pi i.",
          explanation:
            "The integral is \\( 2\\pi i\\,e^{-\\alpha x} \\), tending to \\( 2\\pi i \\) for every \\( x>0 \\) as the pole reaches the axis.",
        },
      ],
      finalAnswer: "\\( 2\\pi i\\,e^{-\\alpha x} \\); as \\( \\alpha\\to 0^+ \\) it tends to \\( 2\\pi i \\) (for \\( x>0 \\)).",
      canonicalAnswer: "2*pi*i*exp(-alpha*x)",
    },
  },
  {
    id: "am8a-029",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 29",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( \\displaystyle\\int_0^1 t^{-1/2}e^{i\\lambda(t+t^2)}\\,dt \\) with \\( h(t)=i(t+t^2) \\), describe the constant-\\( \\operatorname{Im}h \\) paths through the endpoints \\( t=0 \\) and \\( t=1 \\), and explain how deforming onto them yields a branch-point contribution at \\( t=0 \\) together with an ordinary endpoint term at \\( t=1 \\) as \\( \\lambda\\to\\infty \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["constant phase path", "branch point", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the phase in real and imaginary parts.",
          workingLatex: "t=u+iv:\\ t+t^2=(u+u^2-v^2)+i\\,v(1+2u).",
          explanation:
            "Splitting \\( t \\) into \\( u+iv \\) separates \\( t+t^2 \\) into its real and imaginary parts, the building blocks of the phase \\( h=i(t+t^2) \\).",
        },
        {
          stepNumber: 2,
          description: "Identify the constant-phase function.",
          workingLatex:
            "\\operatorname{Im}\\,i(t+t^2)=\\operatorname{Re}(t+t^2)=u+u^2-v^2.",
          explanation:
            "Multiplying by \\( i \\) swaps real and imaginary parts, so \\( \\operatorname{Im}h=\\operatorname{Re}(t+t^2) \\); its level curves are the steepest (constant-phase) paths along which the integrand decays.",
        },
        {
          stepNumber: 3,
          description: "Locate the stationary point.",
          workingLatex: "h'(t)=i(1+2t)=0\\;\\Longrightarrow\\;t=-\\tfrac12.",
          explanation:
            "Setting \\( h'=0 \\) gives the only saddle at \\( t=-1/2 \\), needed to check whether any interior stationary phase competes with the endpoints.",
        },
        {
          stepNumber: 4,
          description: "Confirm no interior saddle.",
          workingLatex: "-\\tfrac12\\notin(0,1).",
          explanation:
            "The saddle lies outside the integration range, so the large-\\( \\lambda \\) behaviour is governed entirely by the two endpoints, deformed onto their steepest paths.",
        },
        {
          stepNumber: 5,
          description: "Constant-phase level at \\( t=0 \\).",
          workingLatex: "\\operatorname{Re}(t+t^2)\\big|_{t=0}=0.",
          explanation:
            "The path leaving \\( t=0 \\) keeps \\( \\operatorname{Re}(t+t^2) \\) at its endpoint value \\( 0 \\).",
        },
        {
          stepNumber: 6,
          description: "Equation of the path through \\( t=0 \\).",
          workingLatex: "u+u^2-v^2=0\\;\\Longrightarrow\\;v^2=u+u^2.",
          explanation:
            "Setting the level function to \\( 0 \\) gives the curve through the origin in the \\( (u,v) \\) plane.",
        },
        {
          stepNumber: 7,
          description: "Linearise near the origin.",
          workingLatex: "v^2=u+u^2\\approx u\\quad(u\\to 0).",
          explanation:
            "Dropping the higher-order \\( u^2 \\), the path is the sideways parabola \\( v^2\\approx u \\), leaving \\( t=0 \\) into the first quadrant at \\( 45^\\circ \\); the branch point of \\( t^{-1/2} \\) sits at this endpoint.",
        },
        {
          stepNumber: 8,
          description: "Constant-phase level at \\( t=1 \\).",
          workingLatex: "\\operatorname{Re}(t+t^2)\\big|_{t=1}=1+1=2.",
          explanation:
            "The path through the other endpoint keeps the level function at its value \\( 2 \\) there.",
        },
        {
          stepNumber: 9,
          description: "Equation of the path through \\( t=1 \\).",
          workingLatex: "u+u^2-v^2=2.",
          explanation:
            "This level curve carries the steepest descent away from \\( t=1 \\); both endpoint paths are needed since there is no interior saddle.",
        },
        {
          stepNumber: 10,
          description: "Local phase at \\( t=0 \\).",
          workingLatex: "h(t)=i(t+t^2)\\approx it\\quad(t\\to 0).",
          explanation:
            "Near the lower endpoint the quadratic term is negligible, so the phase is approximately linear, \\( h\\approx it \\).",
        },
        {
          stepNumber: 11,
          description: "Model integral at the branch point.",
          workingLatex: "\\int_0^{\\infty}t^{-1/2}e^{i\\lambda t}\\,dt.",
          explanation:
            "Replacing the phase by its local form and extending the upper limit (the rest is exponentially subdominant) gives the standard branch-point oscillatory integral.",
        },
        {
          stepNumber: 12,
          description: "Evaluate by the Gamma formula.",
          workingLatex: "\\int_0^{\\infty}t^{-1/2}e^{i\\lambda t}\\,dt=\\Gamma\\!\\Big(\\tfrac12\\Big)(-i\\lambda)^{-1/2}.",
          explanation:
            "Rotating the contour to the imaginary axis turns this into a Gamma integral with \\( s=\\tfrac12 \\); the factor \\( (-i\\lambda)^{-1/2} \\) carries the oscillation's phase.",
        },
        {
          stepNumber: 13,
          description: "Extract the phase of the prefactor.",
          workingLatex: "(i\\lambda)^{-1/2}=\\lambda^{-1/2}e^{-i\\pi/4},\\qquad \\Gamma\\!\\Big(\\tfrac12\\Big)=\\sqrt\\pi.",
          explanation:
            "Writing \\( i=e^{i\\pi/2} \\) gives the constant phase \\( e^{-i\\pi/4} \\); the branch point contributes an algebraic \\( \\lambda^{-1/2} \\).",
        },
        {
          stepNumber: 14,
          description: "Assemble the branch-point term.",
          workingLatex: "\\frac{c_1}{\\lambda^{1/2}},\\qquad c_1=\\sqrt{\\pi}\\,e^{-i\\pi/4}.",
          explanation:
            "Combining the Gamma value and the phase gives the leading \\( t=0 \\) contribution of order \\( \\lambda^{-1/2} \\).",
        },
        {
          stepNumber: 15,
          description: "Set up the endpoint term at \\( t=1 \\).",
          workingLatex: "\\int^1 g(t)e^{i\\lambda h(t)}\\,dt,\\quad g=t^{-1/2}\\ \\text{smooth at }t=1.",
          explanation:
            "At the upper endpoint the integrand is smooth (no singularity), so the standard non-stationary-phase endpoint analysis applies.",
        },
        {
          stepNumber: 16,
          description: "Integrate by parts.",
          workingLatex:
            "\\int^1 g\\,e^{i\\lambda h}\\,dt=\\Big[\\frac{g\\,e^{i\\lambda h}}{i\\lambda h'}\\Big]^1+O(\\lambda^{-2}).",
          explanation:
            "One integration by parts pulls out the boundary term; \\( h'(1)=3i\\neq 0 \\) keeps the denominator finite, giving an \\( O(\\lambda^{-1}) \\) endpoint contribution.",
        },
        {
          stepNumber: 17,
          description: "Evaluate the endpoint boundary term.",
          workingLatex: "h(1)=2i\\;\\Longrightarrow\\;e^{i\\lambda h(1)}=e^{i\\lambda\\cdot 2i\\cdot(-i)}=e^{2i\\lambda}.",
          explanation:
            "With \\( h(1)=i(1+1)=2i \\), the oscillatory factor at the endpoint is \\( e^{i\\lambda(t+t^2)}|_{t=1}=e^{2i\\lambda} \\).",
        },
        {
          stepNumber: 18,
          description: "Write the endpoint term.",
          workingLatex: "\\sim c_2\\frac{e^{2i\\lambda}}{\\lambda}.",
          explanation:
            "The boundary term gives the usual oscillatory endpoint contribution of order \\( \\lambda^{-1} \\), with constant \\( c_2 \\) from \\( g(1)/(ih'(1)) \\).",
        },
        {
          stepNumber: 19,
          description: "Compare the two orders.",
          workingLatex: "\\lambda^{-1/2}\\gg\\lambda^{-1}\\qquad(\\lambda\\to\\infty).",
          explanation:
            "The branch-point endpoint decays only like \\( \\lambda^{-1/2} \\), more slowly than the ordinary endpoint's \\( \\lambda^{-1} \\), so it dominates.",
        },
        {
          stepNumber: 20,
          description: "Assemble the full asymptotics.",
          workingLatex:
            "\\int_0^1 t^{-1/2}e^{i\\lambda(t+t^2)}\\,dt\\sim\\frac{c_1}{\\lambda^{1/2}}+c_2\\frac{e^{2i\\lambda}}{\\lambda}.",
          explanation:
            "The leading \\( \\lambda^{-1/2} \\) branch-point term from \\( t=0 \\) plus the \\( \\lambda^{-1} \\) endpoint term from \\( t=1 \\) give the two-term expansion, with the branch point dominant.",
        },
      ],
      finalAnswer:
        "\\( \\sim\\dfrac{c_1}{\\lambda^{1/2}}+c_2\\dfrac{e^{2i\\lambda}}{\\lambda}+\\cdots \\): a \\( \\lambda^{-1/2} \\) branch-point term from \\( t=0 \\) (dominant) plus a \\( \\lambda^{-1} \\) endpoint term from \\( t=1 \\).",
    },
  },
  {
    id: "am8a-030",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A Fourier integral \\( I(\\omega)=\\displaystyle\\int_{-\\infty}^{\\infty}f(t)e^{i\\omega t}\\,dt \\) has \\( f \\) with a simple pole at \\( t_0=\\sigma+i\\beta \\) (\\( \\beta>0 \\)) and residue \\( R \\). For \\( \\omega\\to+\\infty \\), give the leading contribution from deforming into the upper half-plane, and describe how it changes as the pole crosses the real axis (\\( \\beta \\) passing through \\( 0 \\)).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["complex pole", "Fourier transform", "Stokes crossing"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split the exponential into oscillation and decay.",
          workingLatex: "|e^{i\\omega t}|=e^{-\\omega\\operatorname{Im}t}.",
          explanation:
            "On a closing arc the integrand's size is governed by \\( e^{-\\omega\\operatorname{Im}t} \\); this decides which half-plane the deformation may use.",
        },
        {
          stepNumber: 2,
          description: "Choose the closing half-plane.",
          workingLatex: "\\omega>0:\\ e^{-\\omega\\operatorname{Im}t}\\to 0\\iff \\operatorname{Im}t>0.",
          explanation:
            "For \\( \\omega\\to+\\infty \\) the exponential decays in the upper half-plane, so we deform upward.",
        },
        {
          stepNumber: 3,
          description: "Check the pole is enclosed.",
          workingLatex: "t_0=\\sigma+i\\beta,\\ \\beta>0\\;\\Longrightarrow\\;\\operatorname{Im}t_0>0:\\ \\text{enclosed}.",
          explanation:
            "With \\( \\beta>0 \\) the simple pole sits in the upper half-plane and is captured by the upward deformation.",
        },
        {
          stepNumber: 4,
          description: "Apply the residue theorem.",
          workingLatex: "I(\\omega)\\sim 2\\pi i\\,\\operatorname*{Res}_{t=t_0}\\big[f(t)e^{i\\omega t}\\big].",
          explanation:
            "The leading large-\\( \\omega \\) contribution is \\( 2\\pi i \\) times the residue at the enclosed pole; far-away poles give faster-decaying terms.",
        },
        {
          stepNumber: 5,
          description: "Compute the residue.",
          workingLatex: "\\operatorname*{Res}_{t=t_0}\\big[f(t)e^{i\\omega t}\\big]=R\\,e^{i\\omega t_0}.",
          explanation:
            "Since \\( f \\) has residue \\( R \\) at \\( t_0 \\) and \\( e^{i\\omega t} \\) is analytic there, the residue of the product is \\( R\\,e^{i\\omega t_0} \\).",
        },
        {
          stepNumber: 6,
          description: "Write the leading term.",
          workingLatex: "I(\\omega)\\sim 2\\pi i\\,R\\,e^{i\\omega t_0}.",
          explanation:
            "Combining the prefactor and residue gives the leading contribution of the pole.",
        },
        {
          stepNumber: 7,
          description: "Separate oscillation and decay.",
          workingLatex: "e^{i\\omega t_0}=e^{i\\omega(\\sigma+i\\beta)}=e^{i\\omega\\sigma}e^{-\\omega\\beta}.",
          explanation:
            "The real part \\( \\sigma \\) produces the oscillation \\( e^{i\\omega\\sigma} \\); the imaginary part \\( \\beta \\) produces the decay \\( e^{-\\omega\\beta} \\).",
        },
        {
          stepNumber: 8,
          description: "State the explicit leading term.",
          workingLatex: "I(\\omega)\\sim 2\\pi i\\,R\\,e^{i\\omega\\sigma}e^{-\\omega\\beta}.",
          explanation:
            "The full leading behaviour is an oscillating, exponentially decaying term set by the pole's position.",
        },
        {
          stepNumber: 9,
          description: "Read off the decay rate.",
          workingLatex: "\\text{rate}=\\beta=\\operatorname{Im}t_0>0.",
          explanation:
            "The closer the pole to the real axis (smaller \\( \\beta \\)), the slower the decay — the nearest singularity dominates large-\\( \\omega \\) asymptotics.",
        },
        {
          stepNumber: 10,
          description: "Set up the crossing scenario.",
          workingLatex: "\\beta:\\ +\\ \\to\\ 0\\ \\to\\ -\\quad(\\text{pole descends through the axis}).",
          explanation:
            "Now let the pole migrate downward so that \\( \\beta \\) decreases through \\( 0 \\); we track how the contribution changes.",
        },
        {
          stepNumber: 11,
          description: "Behaviour as \\( \\beta\\to 0^+ \\).",
          workingLatex: "e^{-\\omega\\beta}\\to 1\\;\\Longrightarrow\\;I(\\omega)\\to 2\\pi i\\,R\\,e^{i\\omega\\sigma}.",
          explanation:
            "Approaching the axis from above, the decay factor tends to \\( 1 \\) and the full residue weight \\( 2\\pi i\\,R \\) is retained.",
        },
        {
          stepNumber: 12,
          description: "Pole exactly on the axis.",
          workingLatex: "\\beta=0:\\ \\text{pole on contour, take principal value}.",
          explanation:
            "When \\( \\beta=0 \\) the pole lies on the integration path, so the integral must be regularised by indenting around it.",
        },
        {
          stepNumber: 13,
          description: "Indent the contour.",
          workingLatex: "C=\\mathrm{PV}+\\gamma_\\epsilon,\\quad \\gamma_\\epsilon:\\ \\text{small semicircle}.",
          explanation:
            "A semicircular detour of radius \\( \\epsilon \\) splits the integral into a principal value plus an arc contribution.",
        },
        {
          stepNumber: 14,
          description: "Evaluate the half-residue.",
          workingLatex: "\\int_{\\gamma_\\epsilon}\\to i\\pi\\,\\operatorname*{Res}=i\\pi R\\,e^{i\\omega\\sigma}.",
          explanation:
            "A semicircle subtends \\( \\pi \\), giving half the full residue: \\( i\\pi R\\,e^{i\\omega\\sigma} \\) — the \\( \\alpha\\to 0 \\) limit of am8a-028.",
        },
        {
          stepNumber: 15,
          description: "Note the sign ambiguity.",
          workingLatex: "\\pm i\\pi R\\,e^{i\\omega\\sigma}\\ (\\text{sign per indentation side}).",
          explanation:
            "Whether the detour passes above or below the pole fixes the sign of the half-residue, reflecting the principal-value prescription.",
        },
        {
          stepNumber: 16,
          description: "Behaviour for \\( \\beta<0 \\).",
          workingLatex: "\\beta<0:\\ \\operatorname{Im}t_0<0\\;\\Longrightarrow\\;\\text{pole in LHP}.",
          explanation:
            "Once the pole drops below the axis it lies in the lower half-plane, away from the upward deformation.",
        },
        {
          stepNumber: 17,
          description: "Pole no longer enclosed.",
          workingLatex: "\\text{not enclosed}\\;\\Longrightarrow\\;\\Delta I_{\\text{pole}}=0.",
          explanation:
            "The upward contour never encircles a lower-half-plane pole, so its \\( 2\\pi i R \\) term switches off entirely.",
        },
        {
          stepNumber: 18,
          description: "Tabulate the three regimes.",
          workingLatex: "\\beta>0:\\ 2\\pi iR;\\quad \\beta=0:\\ i\\pi R;\\quad \\beta<0:\\ 0.",
          explanation:
            "The pole's contribution steps through three values as it descends through the axis: full, half, then nothing.",
        },
        {
          stepNumber: 19,
          description: "Describe the discontinuity.",
          workingLatex:
            "2\\pi iR\\,e^{i\\omega t_0}\\ \\xrightarrow{\\beta\\to 0^+}\\ i\\pi R\\,e^{i\\omega\\sigma}\\ \\xrightarrow{\\beta<0}\\ 0.",
          explanation:
            "As the pole crosses the real axis the exponential contribution is switched off discontinuously through its half-value at the boundary.",
        },
        {
          stepNumber: 20,
          description: "Identify the analogy.",
          workingLatex: "\\text{pole crossing}\\ \\sim\\ \\text{Stokes phenomenon (steepest descent)}.",
          explanation:
            "This discontinuous switch-on/off of an exponential is the pole-crossing analogue of the Stokes phenomenon for steepest-descent integrals, smoothed in a full uniform treatment.",
        },
      ],
      finalAnswer:
        "Leading term \\( 2\\pi i\\,R\\,e^{i\\omega t_0} \\) (rate \\( \\beta \\)); on crossing it steps \\( 2\\pi iR\\to i\\pi R\\to 0 \\) as \\( \\beta:+\\to 0\\to- \\).",
    },
  },
];
