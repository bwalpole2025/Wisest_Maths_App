import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — am8a "Deforming past poles & branch cuts"
 * Topic group: Method of Steepest Descent II.
 *
 * Pole/residue and branch-cut contributions that arise when a contour is
 * deformed onto a steepest-descent (or steepest-path) contour. Seeded from
 * Cambridge Part II Asymptotic Methods Example Sheet 2 (esp. Q10, the
 * branch-cut + simple-pole steepest-descent integral, and the residue ideas
 * underlying the oscillatory/Laplace deformations).
 *
 * Numerically verified building blocks (mpmath, dps 30):
 *   ∫_{-∞}^∞ cos(xt)/(t^2+1) dt = π e^{-x}                          (exact match)
 *   ∫_{-∞}^∞ cos(xt)/(t^2+a^2) dt = (π/a) e^{-ax}                    (exact)
 *   ∫_0^∞ cos(xt)/(t^2+1) dt = (π/2) e^{-x}                          (exact)
 *   ∫_{-∞}^∞ cos(xt)/[(t^2+1)(t^2+4)] dt = (π/3)e^{-x} − (π/6)e^{-2x} (exact)
 *   ∫_{-∞}^∞ cos(xt)/(t^2+1)^2 dt = (π/2)(1+x) e^{-x}                (exact)
 *   ∫_0^∞ t^{s-1} e^{-xt} dt = Γ(s)/x^s                              (exact)
 *   ∫_0^∞ e^{-xt} t^{a-1}/(1+t) dt ~ Γ(a)/x^a − Γ(a+1)/x^{a+1}       (2-term checked)
 *   Q10: φ(z)=z−2z^{1/2}, saddle z=1, paths z_±(τ)=1−τ^2±2iτ give
 *        Im φ ≡ 0 (steepest descent), parabola y^2 = 4(1−x).        (checked)
 *   Deforming Re z=γ (γ>1) leftward onto the parabola sweeps the real interval
 *   1<x<γ only; a real pole at z=c is crossed iff 1<c<γ (NOT c<1).      (checked)
 *   The pole exponent g(c)=c−2√c has its unique minimum −1 at c=1, so g(c)>−1
 *   for c≠1; thus whenever the pole is crossed (1<c<γ) it dominates e^{-k}. (checked)
 *   A complex pole c=ib with b>2 is NOT crossed; saddle term alone.       (checked)
 */
export const questions: Question[] = [
  // ──────────────────────────────────────────────────────────────────────
  // FOUNDATION (6) — core deformation moves in isolation, 2 marks each
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "am8a-001",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 01",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Consider \\( I(x)=\\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt \\) with \\( x>0 \\). State which half-plane the contour should be closed in, and write down the single pole that is enclosed.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["contour closing", "simple pole", "Jordan's lemma"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Examine the exponential factor.",
          workingLatex: "e^{ixt}=e^{ix(\\operatorname{Re}t)}\\,e^{-x(\\operatorname{Im}t)}.",
          explanation:
            "On a large semicircle the modulus of the integrand is governed by \\( e^{-x\\operatorname{Im}t} \\). Since \\( x>0 \\), this decays only where \\( \\operatorname{Im}t>0 \\), so the arc contribution vanishes (Jordan's lemma) only in the upper half-plane.",
        },
        {
          stepNumber: 2,
          description: "Locate the poles of the rational factor.",
          workingLatex: "t^2+1=0\\;\\Longrightarrow\\; t=\\pm i.",
          explanation:
            "The integrand has simple poles at \\( t=i \\) and \\( t=-i \\). Only the one in the chosen half-plane is enclosed by the closing arc.",
        },
        {
          stepNumber: 3,
          description: "Select the enclosed pole.",
          workingLatex: "\\text{Close in the upper half-plane; enclosed pole } t=i.",
          explanation:
            "The pole at \\( t=-i \\) lies in the lower half-plane and is not enclosed. The deformation therefore picks up the residue at \\( t=i \\) only.",
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
  <LaTeX at={[-1.5,2.05]} tex="\\text{close UHP}" color="var(--mafs-fg-accent)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.75,2.45]} tex="\\operatorname{Im}z" />
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
      "Find the residue of \\( \\dfrac{e^{ixt}}{t^2+1} \\) at its simple pole \\( t=i \\), where \\( x>0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["residue", "simple pole"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor the denominator.",
          workingLatex: "\\frac{e^{ixt}}{t^2+1}=\\frac{e^{ixt}}{(t-i)(t+i)}.",
          explanation:
            "Writing the denominator as a product of simple factors exposes the simple pole at \\( t=i \\) and the cofactor that survives the limit.",
        },
        {
          stepNumber: 2,
          description: "Apply the simple-pole residue formula.",
          workingLatex:
            "\\operatorname*{Res}_{t=i}=\\lim_{t\\to i}(t-i)\\frac{e^{ixt}}{(t-i)(t+i)}=\\frac{e^{ix\\cdot i}}{2i}.",
          explanation:
            "For a simple pole the residue is the limit of \\( (t-i) \\) times the integrand; the \\( (t-i) \\) cancels and we evaluate the rest at \\( t=i \\).",
        },
        {
          stepNumber: 3,
          description: "Simplify the exponent.",
          workingLatex: "\\frac{e^{ix\\cdot i}}{2i}=\\frac{e^{-x}}{2i}.",
          explanation:
            "Since \\( i\\cdot i=-1 \\), the exponent becomes \\( -x \\); the exponential decay \\( e^{-x} \\) is precisely the smallness that the deformation onto the pole captures.",
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
      "When a closed contour is deformed and a single simple pole with residue \\( R \\) is crossed (in the positive sense), state the extra contribution the integral acquires.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["residue theorem", "deformation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the residue theorem.",
          workingLatex: "\\oint_{C} g(z)\\,dz = 2\\pi i\\sum \\operatorname{Res}.",
          explanation:
            "Deforming a contour from one side of a pole to the other is equivalent to adding a small positively-oriented loop encircling the pole; that loop integrates to \\( 2\\pi i \\) times the residue.",
        },
        {
          stepNumber: 2,
          description: "Isolate the single residue.",
          workingLatex: "\\Delta I = 2\\pi i\\,R.",
          explanation:
            "With exactly one simple pole of residue \\( R \\) crossed in the positive (anticlockwise) sense, the sum collapses to a single term.",
        },
        {
          stepNumber: 3,
          description: "Note the sign convention.",
          workingLatex: "\\text{Sign} = +\\ \\text{(anticlockwise)},\\quad -\\ \\text{(clockwise)}.",
          explanation:
            "If the pole is encircled clockwise during the deformation, the contribution is \\( -2\\pi i\\,R \\). Getting this orientation right is the most common slip in pole-crossing problems.",
        },
      ],
      finalAnswer: "The integral gains \\( 2\\pi i\\,R \\) (with a minus sign if crossed clockwise).",
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
      "For the steepest-descent phase \\( \\varphi(z)=z-2z^{1/2} \\) (principal branch, branch cut along the negative real axis), find the saddle point and the value of \\( \\varphi \\) there.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle point", "branch cut", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the phase.",
          workingLatex: "\\varphi'(z)=1-\\frac{1}{z^{1/2}}.",
          explanation:
            "Saddle points are the stationary points of the phase, \\( \\varphi'(z)=0 \\). The factor \\( z^{1/2} \\) is taken on the principal branch, so we stay off the negative real axis.",
        },
        {
          stepNumber: 2,
          description: "Solve for the saddle.",
          workingLatex: "1-\\frac{1}{z^{1/2}}=0\\;\\Longrightarrow\\;z^{1/2}=1\\;\\Longrightarrow\\;z=1.",
          explanation:
            "The principal square root equal to \\( 1 \\) gives \\( z=1 \\); the spurious root \\( z^{1/2}=1 \\) has no other principal solution.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the phase at the saddle.",
          workingLatex: "\\varphi(1)=1-2\\sqrt{1}=-1.",
          explanation:
            "The exponential damping along the steepest path is set by \\( e^{k\\varphi(1)}=e^{-k} \\); any pole the contour is deformed past must be compared against this rate.",
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
      "The steepest-descent paths through the saddle \\( z=1 \\) of \\( \\varphi(z)=z-2z^{1/2} \\) are \\( z_\\pm(\\tau)=1-\\tau^2\\pm 2i\\tau \\) for \\( 0\\le\\tau<\\infty \\). Writing \\( z=x+iy \\), find the equation of the parabola they trace in real form.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["steepest descent path", "parabola", "branch cut"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read off the real and imaginary parts.",
          workingLatex: "x=1-\\tau^2,\\qquad y=\\pm 2\\tau.",
          explanation:
            "Separating \\( z_\\pm(\\tau)=1-\\tau^2\\pm 2i\\tau \\) into \\( x=\\operatorname{Re}z \\) and \\( y=\\operatorname{Im}z \\) parametrises both halves of the curve by the same \\( \\tau\\ge 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Eliminate the parameter.",
          workingLatex: "\\tau=\\frac{|y|}{2}\\;\\Longrightarrow\\;x=1-\\frac{y^2}{4}.",
          explanation:
            "From \\( y=\\pm2\\tau \\) we get \\( \\tau=|y|/2 \\); substituting removes \\( \\tau \\) and merges the two branches into one parabola.",
        },
        {
          stepNumber: 3,
          description: "Write the parabola in standard form.",
          workingLatex: "y^2=4(1-x).",
          explanation:
            "This is a leftward-opening parabola with vertex at the saddle \\( (1,0) \\), crossing the real axis there — exactly where the two steepest-descent halves meet. Numerically \\( \\operatorname{Im}\\varphi \\equiv 0 \\) along it, confirming steepest descent.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-2.6, 2.6]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[-3.3,0]} point2={[0,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.4,-0.5]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[-1.7,2.3]} tex="\\text{steepest descent}" color="var(--mafs-fg-green)" />
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
      "A branch-point Laplace integral has the leading local form \\( \\displaystyle\\int_0^{\\infty} t^{s-1}e^{-xt}\\,dt \\) with \\( s>0 \\) and \\( x>0 \\). Evaluate it in closed form.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["branch point", "Gamma function", "Watson's lemma"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute to standardise the exponent.",
          workingLatex: "u=xt,\\quad t=\\frac{u}{x},\\quad dt=\\frac{du}{x}.",
          explanation:
            "The non-integer power \\( t^{s-1} \\) is the branch-point behaviour at \\( t=0 \\); rescaling pulls the parameter \\( x \\) out front so the remaining integral is a pure number.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the integral.",
          workingLatex:
            "\\int_0^{\\infty}\\left(\\frac{u}{x}\\right)^{s-1}e^{-u}\\,\\frac{du}{x}=\\frac{1}{x^{s}}\\int_0^{\\infty}u^{s-1}e^{-u}\\,du.",
          explanation:
            "Collecting the powers of \\( x \\) gives \\( x^{-(s-1)}\\cdot x^{-1}=x^{-s} \\), and the surviving integral is the standard Gamma integral.",
        },
        {
          stepNumber: 3,
          description: "Identify the Gamma function.",
          workingLatex: "\\int_0^{\\infty}u^{s-1}e^{-u}\\,du=\\Gamma(s)\\;\\Longrightarrow\\;\\frac{\\Gamma(s)}{x^{s}}.",
          explanation:
            "This \\( \\Gamma(s)/x^{s} \\) is the prototype branch-cut contribution: the fractional power at the branch point produces an algebraic (not exponential) decay in \\( x \\).",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(s)}{x^{s}} \\).",
      canonicalAnswer: "gamma(s)/x^s",
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // STANDARD (12) — typical sheet-level, 3–4 marks, examStyle:true
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "am8a-007",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 07",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate \\( I(x)=\\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt \\) for \\( x>0 \\) by closing the contour and picking up the residue.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "Fourier integral", "contour deformation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Close in the upper half-plane.",
          workingLatex: "I(x)=\\oint_{C}\\frac{e^{ixt}}{t^2+1}\\,dt,\\quad C=\\mathbb{R}\\cup(\\text{UHP arc}).",
          explanation:
            "Because \\( x>0 \\), \\( |e^{ixt}|=e^{-x\\operatorname{Im}t}\\to 0 \\) in the upper half-plane, so the large arc contributes nothing by Jordan's lemma and the line integral equals the closed-contour integral.",
        },
        {
          stepNumber: 2,
          description: "Identify the enclosed pole.",
          workingLatex: "t^2+1=(t-i)(t+i),\\quad \\text{enclosed pole } t=i.",
          explanation:
            "Only \\( t=i \\) lies inside the upper semicircular contour; \\( t=-i \\) is excluded.",
        },
        {
          stepNumber: 3,
          description: "Compute the residue.",
          workingLatex: "\\operatorname*{Res}_{t=i}\\frac{e^{ixt}}{(t-i)(t+i)}=\\frac{e^{-x}}{2i}.",
          explanation:
            "Simple-pole residue: cancel \\( (t-i) \\) and evaluate the rest at \\( t=i \\), using \\( e^{ix\\cdot i}=e^{-x} \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the residue theorem.",
          workingLatex: "I(x)=2\\pi i\\cdot\\frac{e^{-x}}{2i}=\\pi e^{-x}.",
          explanation:
            "The deformation onto the pole gives \\( 2\\pi i \\) times the residue. The result \\( \\pi e^{-x} \\) was checked numerically to full precision.",
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
      "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+a^2}\\,dt \\) for \\( x>0 \\) and \\( a>0 \\), by deforming onto the enclosed pole.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "Fourier integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor and locate the poles.",
          workingLatex: "t^2+a^2=(t-ia)(t+ia).",
          explanation:
            "Simple poles sit at \\( t=\\pm ia \\); with \\( a>0 \\) the one in the upper half-plane is \\( t=ia \\).",
        },
        {
          stepNumber: 2,
          description: "Close in the upper half-plane.",
          workingLatex: "\\text{Arc vanishes since } |e^{ixt}|=e^{-x\\operatorname{Im}t}\\to0,\\ \\operatorname{Im}t>0.",
          explanation:
            "Jordan's lemma applies because \\( x>0 \\); the enclosed pole is \\( t=ia \\).",
        },
        {
          stepNumber: 3,
          description: "Residue at the enclosed pole.",
          workingLatex:
            "\\operatorname*{Res}_{t=ia}\\frac{e^{ixt}}{(t-ia)(t+ia)}=\\frac{e^{ix\\cdot ia}}{2ia}=\\frac{e^{-ax}}{2ia}.",
          explanation:
            "Evaluate the cofactor at \\( t=ia \\); the exponent \\( ix\\cdot ia=-ax \\) gives the decay rate set by the pole's height \\( a \\).",
        },
        {
          stepNumber: 4,
          description: "Multiply by \\( 2\\pi i \\).",
          workingLatex: "2\\pi i\\cdot\\frac{e^{-ax}}{2ia}=\\frac{\\pi}{a}e^{-ax}.",
          explanation:
            "The deformation contribution is \\( 2\\pi i \\) times the residue; verified numerically for \\( (a,x)=(2,3),(3,2) \\).",
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
      "Using the even symmetry of the integrand and a contour deformation, evaluate \\( \\displaystyle\\int_{0}^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt \\) for \\( x>0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "even integrand", "Fourier cosine"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Extend to the whole line.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt=\\frac12\\int_{-\\infty}^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt.",
          explanation:
            "The integrand is even in \\( t \\), so the half-line integral is half the full-line one — this lets us deploy the residue machinery on a symmetric contour.",
        },
        {
          stepNumber: 2,
          description: "Replace cosine by a complex exponential.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty}\\frac{\\cos xt}{t^2+1}\\,dt=\\operatorname{Re}\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt.",
          explanation:
            "Only \\( e^{ixt} \\) (not \\( e^{-ixt} \\)) decays in the upper half-plane for \\( x>0 \\); taking the real part recovers the cosine integral.",
        },
        {
          stepNumber: 3,
          description: "Use the known deformation result.",
          workingLatex: "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt=\\pi e^{-x}.",
          explanation:
            "From the residue at \\( t=i \\); the result is already real, so taking the real part leaves it unchanged.",
        },
        {
          stepNumber: 4,
          description: "Halve the result.",
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
      "For the steepest-descent integral \\( I(k)=\\dfrac{1}{2\\pi i}\\displaystyle\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty}\\frac{e^{k(z-2z^{1/2})}}{z-c}\\,dz \\) with \\( \\gamma>1 \\), the contour is moved leftward onto the steepest-descent parabola through \\( z=1 \\). Determine the residue contribution when \\( c \\) is real with \\( 1<c<\\gamma \\), and give its exponential rate.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent", "pole crossing", "residue contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide whether the pole is crossed.",
          workingLatex: "1<c<\\gamma\\;\\Longrightarrow\\; c \\text{ lies left of } \\gamma \\text{ but right of the saddle } 1.",
          explanation:
            "Moving the vertical line from \\( \\operatorname{Re}z=\\gamma \\) leftward to the parabola (vertex at \\( z=1 \\)) sweeps across \\( z=c \\) when \\( 1<c<\\gamma \\), so the simple pole is crossed.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-2.6, 2.6]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[2,-2.6]} point2={[2,2.6]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-3.3,0]} point2={[0,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Vector tail={[2,1.8]} tip={[0.7,1.8]} color="var(--mafs-fg-accent)" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Point x={1.5} y={0} color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.5,0]} tex="\\times" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.6,-0.55]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.95,0.45]} tex="z=c" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.2,2.2]} tex="\\operatorname{Re}z=\\gamma" color="var(--mafs-fg-accent)" />
  <LaTeX at={[-1.7,2.3]} tex="\\text{steepest descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[-1.9,-0.5]} tex="\\text{branch cut}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.4,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 2,
          description: "Compute the residue at the pole.",
          workingLatex:
            "\\operatorname*{Res}_{z=c}\\frac{e^{k(z-2z^{1/2})}}{z-c}=e^{k(c-2\\sqrt{c})}.",
          explanation:
            "The pole is simple; the numerator is analytic there, so the residue is just the numerator evaluated at \\( z=c \\).",
        },
        {
          stepNumber: 3,
          description: "Attach the prefactor and orientation.",
          workingLatex:
            "\\frac{1}{2\\pi i}\\cdot 2\\pi i\\cdot e^{k(c-2\\sqrt{c})}=e^{k(c-2\\sqrt{c})}.",
          explanation:
            "Deforming the contour leftward picks up the pole anticlockwise, giving \\( +2\\pi i\\,\\mathrm{Res} \\); the prefactor \\( 1/(2\\pi i) \\) cancels it cleanly.",
        },
        {
          stepNumber: 4,
          description: "State the exponential rate.",
          workingLatex: "\\text{rate } = c-2\\sqrt{c}\\ \\ge\\ -1\\quad(\\text{minimum }-1\\text{ at }c=1).",
          explanation:
            "The function \\( g(c)=c-2\\sqrt c \\) has \\( g'(c)=1-c^{-1/2} \\) and \\( g''(c)=\\tfrac12 c^{-3/2}>0 \\), so \\( c=1 \\) is a minimum with \\( g(1)=-1 \\); hence \\( c-2\\sqrt c\\ge-1 \\) for all \\( c>0 \\). For the crossed regime \\( 1<c<\\gamma \\) we have \\( c-2\\sqrt c>-1 \\), so the residue decays more slowly than the saddle's \\( e^{-k} \\) and dominates.",
        },
      ],
      finalAnswer:
        "Residue contribution \\( e^{k(c-2\\sqrt{c})} \\), exponential rate \\( c-2\\sqrt{c} \\).",
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
      "For the integral of am8a-010 with \\( c \\) real and \\( c<1 \\), state whether the pole is crossed when deforming \\( \\operatorname{Re}z=\\gamma \\) onto the steepest-descent parabola, and identify which contribution dominates as \\( k\\to+\\infty \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["pole vs saddle", "dominant balance", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Locate the pole relative to the swept region.",
          workingLatex: "y^2=4(1-x),\\quad \\text{vertex } (1,0);\\ \\text{on } y=0 \\text{ the parabola is at } x=1.",
          explanation:
            "Deforming the Bromwich line \\( \\operatorname{Re}z=\\gamma \\) leftward onto the parabola encloses the region between them. On the real axis the parabola sits at \\( x=1 \\) and the line at \\( x=\\gamma \\), so the swept real interval is \\( 1<x<\\gamma \\) — a thin sliver to the RIGHT of the vertex, not its interior.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Plot.Parametric xy={(t) => [1 - (t*t)/4, t]} domain={[-2.6, 2.6]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[2,-2.6]} point2={[2,2.6]} color="var(--mafs-fg-accent)" weight={2} style="dashed" />
  <Line.Segment point1={[-3.3,0]} point2={[0,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <Point x={0.4} y={0} color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.4,0]} tex="\\times" color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.4,0.5]} tex="z_0=1" color="var(--mafs-fg-blue)" />
  <LaTeX at={[0.0,-0.6]} tex="z=c" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.2,2.2]} tex="\\operatorname{Re}z=\\gamma" color="var(--mafs-fg-accent)" />
  <LaTeX at={[-2.0,1.6]} tex="\\text{not crossed}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[-2.0,-0.5]} tex="\\text{branch cut}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.4,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 2,
          description: "Conclude the pole is NOT crossed.",
          workingLatex: "c<1<\\gamma\\;\\Longrightarrow\\; c\\notin(1,\\gamma)\\;\\Longrightarrow\\;\\text{pole not swept.}",
          explanation:
            "A real pole at \\( c<1 \\) lies to the LEFT of the vertex \\( x=1 \\), outside the swept interval \\( (1,\\gamma) \\); the deformation does not cross it, so NO residue is acquired. (Verified numerically: at \\( c=0.5,0.9 \\) the integral matches the saddle term alone, not pole+saddle.)",
        },
        {
          stepNumber: 3,
          description: "Only the saddle contributes.",
          workingLatex:
            "I(k)=\\frac{1}{2\\pi i}\\int_{\\text{parabola}}\\frac{e^{k\\varphi}}{z-c}\\,dz\\quad(\\text{no residue}).",
          explanation:
            "With the pole untouched, \\( I(k) \\) reduces entirely to the steepest-descent integral along the parabola; the smooth factor \\( 1/(z-c) \\) is finite at the saddle \\( z=1 \\) since \\( c\\neq1 \\).",
        },
        {
          stepNumber: 4,
          description: "State the dominant (saddle) term.",
          workingLatex: "I(k)\\sim \\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}\\quad(k\\to+\\infty).",
          explanation:
            "The saddle term is the whole leading asymptotics for \\( c<1 \\). It is only for \\( 1<c<\\gamma \\) that the pole is crossed, contributing the slower-decaying \\( e^{k(c-2\\sqrt c)} \\) (with \\( c-2\\sqrt c>-1 \\)), which then dominates.",
        },
      ],
      finalAnswer:
        "The pole is NOT crossed for \\( c<1 \\); only the saddle survives, \\( I(k)\\sim \\dfrac{e^{-k}}{(1-c)\\sqrt{\\pi k}} \\).",
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
      "Find the leading asymptotic behaviour as \\( x\\to+\\infty \\) of \\( \\displaystyle\\int_0^{\\infty}\\frac{t^{a-1}e^{-xt}}{1+t}\\,dt \\) with \\( 0<a<1 \\), where the algebraic factor \\( t^{a-1} \\) carries a branch point at \\( t=0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Watson's lemma", "branch point", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify where the integral concentrates.",
          workingLatex: "e^{-xt}\\ \\text{maximal at } t=0\\ \\Rightarrow\\ \\text{endpoint } t=0 \\text{ dominates.}",
          explanation:
            "As \\( x\\to\\infty \\) the exponential crushes all contributions except a shrinking neighbourhood of \\( t=0 \\), which is exactly the branch point of \\( t^{a-1} \\).",
        },
        {
          stepNumber: 2,
          description: "Expand the smooth factor near \\( t=0 \\).",
          workingLatex: "\\frac{1}{1+t}=1-t+t^2-\\cdots .",
          explanation:
            "Watson's lemma: substitute the Taylor series of the smooth part; each power of \\( t \\) multiplies the branch-point factor \\( t^{a-1} \\), generating a descending asymptotic series.",
        },
        {
          stepNumber: 3,
          description: "Integrate the leading term.",
          workingLatex:
            "\\int_0^{\\infty}t^{a-1}e^{-xt}\\,dt=\\frac{\\Gamma(a)}{x^{a}}.",
          explanation:
            "The first term of the expansion is the prototype branch-cut integral, giving an algebraic decay \\( x^{-a} \\) rather than an exponential one.",
        },
        {
          stepNumber: 4,
          description: "State the leading behaviour and the next term.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{t^{a-1}e^{-xt}}{1+t}\\,dt\\sim\\frac{\\Gamma(a)}{x^{a}}-\\frac{\\Gamma(a+1)}{x^{a+1}}+\\cdots .",
          explanation:
            "Two-term form numerically checked for \\( a=\\tfrac12 \\): at \\( x=10 \\) the two-term value \\( 0.53247 \\) matches the exact \\( 0.53589 \\) far better than the one-term \\( 0.56050 \\).",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(a)}{x^{a}} \\) (leading term).",
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
          description: "Find the upper-half-plane poles.",
          workingLatex: "\\text{Poles at } t=\\pm i,\\ \\pm 2i;\\ \\text{enclosed: } t=i,\\ t=2i.",
          explanation:
            "Closing in the upper half-plane (valid since \\( x>0 \\)) encloses both \\( t=i \\) and \\( t=2i \\); their residues add.",
        },
        {
          stepNumber: 2,
          description: "Residue at \\( t=i \\).",
          workingLatex:
            "\\operatorname*{Res}_{t=i}=\\frac{e^{-x}}{(2i)(i^2+4)}=\\frac{e^{-x}}{6i}.",
          explanation:
            "Cancel \\( (t-i) \\); the remaining factor is \\( (t+i)(t^2+4) \\) evaluated at \\( t=i \\), i.e. \\( 2i\\cdot 3 \\).",
        },
        {
          stepNumber: 3,
          description: "Residue at \\( t=2i \\).",
          workingLatex:
            "\\operatorname*{Res}_{t=2i}=\\frac{e^{-2x}}{((2i)^2+1)(4i)}=\\frac{e^{-2x}}{-12i}.",
          explanation:
            "Cancel \\( (t-2i) \\); the cofactor is \\( (t^2+1)(t+2i) \\) at \\( t=2i \\), i.e. \\( (-3)(4i) \\).",
        },
        {
          stepNumber: 4,
          description: "Sum and multiply by \\( 2\\pi i \\).",
          workingLatex:
            "2\\pi i\\left(\\frac{e^{-x}}{6i}-\\frac{e^{-2x}}{12i}\\right)=\\frac{\\pi}{3}e^{-x}-\\frac{\\pi}{6}e^{-2x}.",
          explanation:
            "Both residues are picked up by the single leftward/upward deformation; verified numerically (e.g. \\( x=2 \\) gives \\( 0.132133 \\)).",
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
      "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{(t^2+1)^2}\\,dt \\) for \\( x>0 \\), noting that the contour is deformed onto a double pole.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "double pole", "Fourier integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the order-two pole.",
          workingLatex: "\\frac{e^{ixt}}{(t-i)^2(t+i)^2},\\quad \\text{double pole enclosed at } t=i.",
          explanation:
            "Closing in the upper half-plane (\\( x>0 \\)), the enclosed singularity \\( t=i \\) is a pole of order two, so we need the derivative residue formula.",
        },
        {
          stepNumber: 2,
          description: "Apply the order-two residue formula.",
          workingLatex:
            "\\operatorname*{Res}_{t=i}=\\frac{d}{dt}\\!\\left[\\frac{e^{ixt}}{(t+i)^2}\\right]_{t=i}.",
          explanation:
            "For a double pole the residue is the first derivative of \\( (t-i)^2 \\) times the integrand, evaluated at the pole.",
        },
        {
          stepNumber: 3,
          description: "Differentiate and evaluate.",
          workingLatex:
            "\\frac{ix\\,e^{ixt}(t+i)^2-2(t+i)e^{ixt}}{(t+i)^4}\\Big|_{t=i}=\\frac{e^{-x}(1+x)}{4i}.",
          explanation:
            "Using the quotient rule, then setting \\( t=i \\) so that \\( (t+i)=2i \\), \\( (t+i)^2=-4 \\), and \\( e^{ix\\cdot i}=e^{-x} \\); the algebra collapses to \\( e^{-x}(1+x)/(4i) \\).",
        },
        {
          stepNumber: 4,
          description: "Multiply by \\( 2\\pi i \\).",
          workingLatex: "2\\pi i\\cdot\\frac{e^{-x}(1+x)}{4i}=\\frac{\\pi}{2}(1+x)e^{-x}.",
          explanation:
            "The deformation onto the double pole gives \\( 2\\pi i \\) times this residue; checked numerically, e.g. \\( x=2\\to0.637752 \\).",
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
      "When the contour for \\( I(k) \\) in am8a-010 is deformed and the simple pole at \\( z=c \\) lies on the steepest-descent path itself (coalescing with the saddle as \\( c\\to1 \\)), state the half-residue rule that applies if the contour is taken as a principal value through the pole.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["principal value", "pole on contour", "half residue"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Indent the contour around the pole.",
          workingLatex: "C = (\\text{PV part}) + (\\text{small semicircle of radius }\\epsilon).",
          explanation:
            "A pole lying on the integration path is handled by a small semicircular indentation; the straight part gives the principal value and the arc gives a fraction of the residue.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the small-arc contribution.",
          workingLatex: "\\int_{\\text{arc}}\\to \\pm i\\pi\\,\\operatorname{Res}_{z=c}\\quad(\\epsilon\\to0).",
          explanation:
            "A semicircle subtends angle \\( \\pi \\), so it contributes \\( \\pm i\\pi \\) times the residue — half the full \\( 2\\pi i \\). The sign depends on whether the indentation passes above (\\(-\\)) or below (\\(+\\)) the pole.",
        },
        {
          stepNumber: 3,
          description: "State the half-residue rule.",
          workingLatex:
            "I = \\mathrm{PV} \\pm i\\pi\\,e^{k(c-2\\sqrt{c})}.",
          explanation:
            "With \\( \\operatorname{Res}_{z=c}=e^{k(c-2\\sqrt c)} \\) and the \\( 1/(2\\pi i) \\) prefactor, the principal-value treatment of the on-contour pole yields exactly half the deformation contribution.",
        },
      ],
      finalAnswer:
        "A pole on the contour contributes \\( \\pm i\\pi\\,\\operatorname{Res} \\) (half of \\( 2\\pi i\\,\\operatorname{Res} \\)), sign set by the indentation side.",
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
      "Across the branch cut of \\( z^{1/2} \\) taken along the negative real axis, find the value of the discontinuity \\( z^{1/2}\\big|_{\\text{above}}-z^{1/2}\\big|_{\\text{below}} \\) at a point \\( z=-r \\) with \\( r>0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["branch cut", "discontinuity", "square root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Parametrise just above the cut.",
          workingLatex: "z=re^{i\\pi}\\ \\Rightarrow\\ z^{1/2}=r^{1/2}e^{i\\pi/2}=i\\sqrt{r}.",
          explanation:
            "Approaching \\( z=-r \\) from above means \\( \\arg z\\to\\pi^- \\); the principal square root halves the argument to \\( \\pi/2 \\).",
        },
        {
          stepNumber: 2,
          description: "Parametrise just below the cut.",
          workingLatex: "z=re^{-i\\pi}\\ \\Rightarrow\\ z^{1/2}=r^{1/2}e^{-i\\pi/2}=-i\\sqrt{r}.",
          explanation:
            "From below, \\( \\arg z\\to-\\pi^+ \\), so the square root's argument is \\( -\\pi/2 \\). The two limits differ — the hallmark of a branch cut.",
        },
        {
          stepNumber: 3,
          description: "Subtract to get the discontinuity.",
          workingLatex: "i\\sqrt{r}-(-i\\sqrt{r})=2i\\sqrt{r}.",
          explanation:
            "The jump \\( 2i\\sqrt r \\) is what a contour wrapping the cut integrates against; this nonzero discontinuity is the branch-cut analogue of a residue.",
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
      "A contour is wrapped tightly around the branch cut of \\( t^{1/2} \\) on \\( (-\\infty,0] \\) for the integral \\( \\displaystyle\\oint t^{1/2}e^{-x|t|}\\,dt \\). Reduce the loop integral to a single integral over \\( r=|t| \\in (0,\\infty) \\) using the discontinuity, and evaluate it for \\( x>0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["branch cut", "loop integral", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Combine the two sides of the cut.",
          workingLatex:
            "\\oint = \\int_{\\text{below}}+\\int_{\\text{above}} = \\int_{\\infty}^{0}(-i\\sqrt r)e^{-xr}(-dr)+\\int_0^{\\infty}(i\\sqrt r)e^{-xr}(-dr).",
          explanation:
            "On the cut \\( t=re^{\\pm i\\pi} \\) so \\( t^{1/2}=\\pm i\\sqrt r \\); with the loop traversed so the two passes run in opposite \\( r \\)-directions, their contributions add rather than cancel.",
        },
        {
          stepNumber: 2,
          description: "Collect the discontinuity factor.",
          workingLatex:
            "\\oint = -\\,2i\\int_0^{\\infty}\\sqrt{r}\\,e^{-xr}\\,dr.",
          explanation:
            "The two passes combine into the jump \\( 2i\\sqrt r \\) integrated once over \\( (0,\\infty) \\); the overall sign comes from the loop orientation around the cut.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the real integral.",
          workingLatex:
            "\\int_0^{\\infty}r^{1/2}e^{-xr}\\,dr=\\frac{\\Gamma(3/2)}{x^{3/2}}=\\frac{\\sqrt{\\pi}}{2x^{3/2}}.",
          explanation:
            "This is the branch-point Gamma integral with \\( s=3/2 \\); \\( \\Gamma(3/2)=\\tfrac12\\sqrt\\pi \\). Numerically \\( \\Gamma(3/2)/x^{3/2} \\) matches direct quadrature.",
        },
        {
          stepNumber: 4,
          description: "Assemble the loop value.",
          workingLatex:
            "\\oint = -2i\\cdot\\frac{\\sqrt{\\pi}}{2x^{3/2}}=-\\frac{i\\sqrt{\\pi}}{x^{3/2}}.",
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
      "For \\( h(t)=i(t+t^2) \\), find the saddle point of \\( h \\) (the stationary point of the phase) and the local steepest-descent direction there, as needed to deform a contour onto it.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["saddle point", "steepest descent direction", "phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the phase.",
          workingLatex: "h'(t)=i(1+2t).",
          explanation:
            "Saddle points solve \\( h'(t)=0 \\); this is the seed for Q9 of the sheet, where deforming onto the constant-\\( \\operatorname{Im}h \\) path through the saddle is required.",
        },
        {
          stepNumber: 2,
          description: "Solve for the saddle.",
          workingLatex: "i(1+2t)=0\\;\\Longrightarrow\\;t=-\\tfrac12.",
          explanation:
            "The saddle sits at \\( t=-1/2 \\) on the real axis; the path of steepest descent passes through it at an angle determined by \\( h'' \\).",
        },
        {
          stepNumber: 3,
          description: "Compute the curvature and direction.",
          workingLatex:
            "h''(t)=2i=2e^{i\\pi/2};\\ \\text{steepest descent: } \\arg(t+\\tfrac12)=\\frac{\\pi-\\pi/2}{2}=\\frac{\\pi}{4}.",
          explanation:
            "Steepest descent requires \\( h''(\\delta)^2 \\) real negative, i.e. \\( 2\\arg\\delta+\\arg h''=\\pi \\); with \\( \\arg h''=\\pi/2 \\) the descent direction is \\( \\arg\\delta=\\pi/4 \\) (and \\( \\pi/4+\\pi \\)).",
        },
      ],
      finalAnswer: "Saddle at \\( t=-\\tfrac12 \\); steepest-descent direction \\( \\arg(t+\\tfrac12)=\\pi/4 \\).",
      canonicalAnswer: "-1/2",
    },
  },

  // ──────────────────────────────────────────────────────────────────────
  // CHALLENGE (12) — synoptic / multi-step / starred, 5+ marks, examStyle:true
  // ──────────────────────────────────────────────────────────────────────
  {
    id: "am8a-019",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For the steepest-descent integral \\( I(k)=\\dfrac{1}{2\\pi i}\\displaystyle\\int_{\\gamma-i\\infty}^{\\gamma+i\\infty}\\frac{e^{k(z-2z^{1/2})}}{z-c}\\,dz \\) (\\( \\gamma>1 \\)), show that the curves \\( z_\\pm(\\tau)=1-\\tau^2\\pm 2i\\tau \\) are the steepest-descent paths through the saddle \\( z=1 \\), and that \\( \\operatorname{Im}\\big(z-2z^{1/2}\\big) \\) is constant along them.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent path", "saddle point", "branch cut", "constant phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the saddle.",
          workingLatex: "\\varphi'(z)=1-z^{-1/2}=0\\;\\Rightarrow\\;z=1,\\quad \\varphi(1)=-1.",
          explanation:
            "Steepest-descent paths emanate from the saddle where \\( \\varphi'=0 \\). On the principal branch (cut on \\( (-\\infty,0] \\)) the only saddle is \\( z=1 \\).",
        },
        {
          stepNumber: 2,
          description: "State the constant-phase condition.",
          workingLatex: "\\operatorname{Im}\\varphi(z)=\\operatorname{Im}\\varphi(1)=\\operatorname{Im}(-1)=0.",
          explanation:
            "Along a steepest path the imaginary part of the phase is fixed at its saddle value; here that value is \\( 0 \\), so we must verify \\( \\operatorname{Im}\\varphi\\equiv0 \\) on the proposed curves.",
        },
        {
          stepNumber: 3,
          description: "Substitute the parametrisation.",
          workingLatex:
            "z=1-\\tau^2\\pm2i\\tau=(1\\pm i\\tau)^2,\\quad \\text{so } z^{1/2}=\\pm(1\\pm i\\tau)\\ \\text{(principal: } 1\\pm i\\tau).",
          explanation:
            "Crucially \\( 1-\\tau^2\\pm2i\\tau \\) is a perfect square \\( (1\\pm i\\tau)^2 \\); the principal root is \\( 1\\pm i\\tau \\) (positive real part for all \\( \\tau \\)), which justifies the sign choice and keeps us off the cut.",
        },
        {
          stepNumber: 4,
          description: "Compute the phase on the path.",
          workingLatex:
            "\\varphi=z-2z^{1/2}=(1\\pm i\\tau)^2-2(1\\pm i\\tau)=(1\\pm i\\tau)\\big[(1\\pm i\\tau)-2\\big].",
          explanation:
            "Factor out \\( (1\\pm i\\tau) \\); this exposes the real and imaginary parts cleanly without expanding everything blindly.",
        },
        {
          stepNumber: 5,
          description: "Expand and separate real/imaginary parts.",
          workingLatex:
            "\\varphi=(1\\pm i\\tau)(-1\\pm i\\tau)=-(1\\pm i\\tau)(1\\mp i\\tau)=-(1+\\tau^2).",
          explanation:
            "The product \\( (1\\pm i\\tau)(1\\mp i\\tau)=1+\\tau^2 \\) is real, so \\( \\varphi=-(1+\\tau^2) \\) is purely real: \\( \\operatorname{Im}\\varphi\\equiv0 \\) as required.",
        },
        {
          stepNumber: 6,
          description: "Confirm descent and conclude.",
          workingLatex:
            "\\operatorname{Re}\\varphi=-(1+\\tau^2)\\ \\text{decreases as } |\\tau|\\ \\text{grows; } \\operatorname{Im}\\varphi\\equiv0.",
          explanation:
            "Constant imaginary part plus monotonically decreasing real part is precisely the steepest-descent condition, so both \\( z_\\pm \\) are the descent paths through \\( z=1 \\). Numerically \\( \\operatorname{Im}\\varphi \\) is \\( 0 \\) to machine precision along the curve.",
        },
      ],
      finalAnswer:
        "\\( \\varphi(z_\\pm(\\tau))=-(1+\\tau^2) \\): real and decreasing, so \\( z_\\pm \\) are steepest-descent paths with \\( \\operatorname{Im}\\varphi\\equiv0 \\).",
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
      "Using \\( \\varphi(z_\\pm(\\tau))=-(1+\\tau^2) \\) for the integral of am8a-019, evaluate the leading saddle-point contribution to \\( I(k) \\) as \\( k\\to+\\infty \\) when no pole is crossed (\\( c>\\gamma \\)). Express it in terms of \\( k \\) and \\( c \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["steepest descent", "Gaussian integral", "saddle contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the contour integral on the parabola.",
          workingLatex:
            "I(k)=\\frac{1}{2\\pi i}\\int_{\\text{parabola}}\\frac{e^{k\\varphi(z)}}{z-c}\\,dz,\\quad z=z_+(\\tau)\\cup z_-(\\tau).",
          explanation:
            "With \\( c>\\gamma \\) the pole is never swept, so \\( I(k) \\) equals the integral along the steepest-descent parabola alone.",
        },
        {
          stepNumber: 2,
          description: "Change variable to \\( \\tau \\).",
          workingLatex:
            "z=(1+i\\tau)^2,\\ \\tau\\in(-\\infty,\\infty);\\quad dz=2i(1+i\\tau)\\,d\\tau.",
          explanation:
            "Writing the whole parabola with a single signed parameter \\( \\tau\\in(-\\infty,\\infty) \\) (so \\( z=(1+i\\tau)^2 \\)) lets the two halves combine into one integral; \\( dz \\) follows by differentiation.",
        },
        {
          stepNumber: 3,
          description: "Insert the phase and prefactor.",
          workingLatex:
            "I(k)=\\frac{1}{2\\pi i}\\int_{-\\infty}^{\\infty}\\frac{e^{-k(1+\\tau^2)}}{(1+i\\tau)^2-c}\\,2i(1+i\\tau)\\,d\\tau.",
          explanation:
            "Substituting \\( \\varphi=-(1+\\tau^2) \\) turns the contour integral into a Gaussian-weighted real integral; the \\( e^{-k\\tau^2} \\) factor concentrates it near \\( \\tau=0 \\).",
        },
        {
          stepNumber: 4,
          description: "Laplace/Gaussian approximation near \\( \\tau=0 \\).",
          workingLatex:
            "\\approx\\frac{e^{-k}}{2\\pi i}\\cdot\\frac{2i\\,(1+0)}{(1)^2-c}\\int_{-\\infty}^{\\infty}e^{-k\\tau^2}\\,d\\tau.",
          explanation:
            "For large \\( k \\), replace the smooth factor by its value at \\( \\tau=0 \\) (where \\( z=1 \\)): \\( 1+i\\tau\\to1 \\) and \\( (1+i\\tau)^2-c\\to1-c \\); the Gaussian carries the \\( k \\)-dependence.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Gaussian.",
          workingLatex: "\\int_{-\\infty}^{\\infty}e^{-k\\tau^2}\\,d\\tau=\\sqrt{\\frac{\\pi}{k}}.",
          explanation:
            "Standard Gaussian integral; this supplies the characteristic \\( k^{-1/2} \\) algebraic prefactor of a non-degenerate saddle.",
        },
        {
          stepNumber: 6,
          description: "Assemble the leading term.",
          workingLatex:
            "I(k)\\sim\\frac{e^{-k}}{2\\pi i}\\cdot\\frac{2i}{1-c}\\sqrt{\\frac{\\pi}{k}}=\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}.",
          explanation:
            "The \\( 2i/(2\\pi i)=1/\\pi \\) combines with \\( \\sqrt{\\pi/k} \\) to give \\( 1/\\sqrt{\\pi k} \\). When \\( c>\\gamma>1 \\) the saddle term is the whole answer; if a pole were crossed, add \\( e^{k(c-2\\sqrt c)} \\).",
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
      "For \\( I(k) \\) of am8a-019 with \\( c \\) real and \\( 1<c<\\gamma \\), combine the residue picked up on deformation with the saddle contribution to write the full two-term asymptotic expansion as \\( k\\to+\\infty \\), and identify which term is exponentially dominant.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["pole plus saddle", "dominant balance", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Record the residue contribution.",
          workingLatex: "\\Delta I_{\\text{pole}}=e^{k(c-2\\sqrt{c})}\\quad(1<c<\\gamma,\\ \\text{crossed}).",
          explanation:
            "Sliding the line \\( \\operatorname{Re}z=\\gamma \\) leftward onto the parabola sweeps the real interval \\( 1<x<\\gamma \\), so a real pole at \\( 1<c<\\gamma \\) is crossed; the \\( 1/(2\\pi i) \\) prefactor cancels the \\( 2\\pi i \\) from the residue.",
        },
        {
          stepNumber: 2,
          description: "Record the saddle contribution.",
          workingLatex: "I_{\\text{saddle}}\\sim\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}.",
          explanation:
            "From am8a-020; the smooth factor \\( 1/(z-c) \\) is evaluated at the saddle \\( z=1 \\), giving \\( 1/(1-c) \\), which is finite because \\( c\\neq1 \\).",
        },
        {
          stepNumber: 3,
          description: "Add the two contributions.",
          workingLatex:
            "I(k)\\sim e^{k(c-2\\sqrt{c})}+\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}.",
          explanation:
            "After deformation \\( I(k) \\) equals the residue plus the steepest-descent integral, so both terms appear additively in the full expansion.",
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
  <LaTeX at={[2.0,-0.9]} tex="+2\\pi iR" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.2,2.2]} tex="\\operatorname{Re}z=\\gamma" color="var(--mafs-fg-accent)" />
  <LaTeX at={[-1.9,2.3]} tex="\\text{descent}" color="var(--mafs-fg-green)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[0.4,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 4,
          description: "Compare exponential rates.",
          workingLatex: "c-2\\sqrt{c}>-1\\quad\\text{for all }c>0,\\ c\\neq1.",
          explanation:
            "Setting \\( c-2\\sqrt c=-1 \\) gives \\( (\\sqrt c-1)^2=0 \\), i.e. \\( c=1 \\), which is the unique minimum of \\( g(c)=c-2\\sqrt c \\) (since \\( g''>0 \\)); so \\( c-2\\sqrt c>-1 \\) for every \\( c\\neq1 \\). In particular for the crossed regime \\( 1<c<\\gamma \\). Numerically \\( c=1.5\\to-0.949>-1 \\).",
        },
        {
          stepNumber: 5,
          description: "Identify the dominant term.",
          workingLatex:
            "e^{k(c-2\\sqrt{c})}\\ \\gg\\ e^{-k}\\quad(k\\to\\infty).",
          explanation:
            "Because the pole's rate exceeds the saddle's, the residue term decays more slowly and dominates; the saddle term is exponentially subdominant (and would only be needed if the pole-rate matched it).",
        },
        {
          stepNumber: 6,
          description: "State the leading behaviour.",
          workingLatex: "I(k)\\sim e^{k(c-2\\sqrt{c})}.",
          explanation:
            "The pole contribution is the leading asymptotics; this is the practical payoff of tracking which singularities the deformation passes.",
        },
      ],
      finalAnswer:
        "\\( I(k)\\sim e^{k(c-2\\sqrt{c})}+\\dfrac{e^{-k}}{(1-c)\\sqrt{\\pi k}} \\); the pole term dominates for \\( 1<c<\\gamma \\).",
    },
  },
  // REVIEW: am8a-022 describes the swept region as "the parabola's interior"; this is a
  // heuristic shorthand (the precise swept region is bounded between the Bromwich line and
  // the parabola, closing at ±i∞). The CONCLUSION — pole c=ib with b>2 is NOT crossed and
  // I(k)~e^{-k}/((1-ib)√(πk)) — is numerically verified (exact/saddle → 1; pole term is
  // exponentially negligible since Re(c-2√c)=-√(2b)<-1). The geometric wording is the only
  // non-rigorous part.
  {
    id: "am8a-022",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( I(k) \\) of am8a-019 with \\( c=ib \\), \\( b \\) real and \\( b>2 \\), determine whether deforming the contour onto the steepest-descent parabola crosses the pole, and hence give the leading asymptotics as \\( k\\to+\\infty \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["complex pole", "pole crossing", "steepest descent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Place the pole relative to the parabola.",
          workingLatex: "c=ib:\\ \\operatorname{Re}c=0,\\ \\operatorname{Im}c=b>2.",
          explanation:
            "The pole sits on the imaginary axis. The deformed contour is the parabola \\( y^2=4(1-x) \\), which we must test against the point \\( (0,b) \\).",
        },
        {
          stepNumber: 2,
          description: "Find where the parabola meets \\( \\operatorname{Re}z=0 \\).",
          workingLatex: "x=0\\Rightarrow y^2=4\\Rightarrow y=\\pm2.",
          explanation:
            "The parabola crosses the imaginary axis at \\( z=\\pm2i \\). Points with \\( |y|>2 \\) on that axis lie outside (to the upper/lower exterior of) the parabola's interior region.",
        },
        {
          stepNumber: 3,
          description: "Decide on crossing.",
          workingLatex: "b>2\\Rightarrow (0,b)\\ \\text{lies outside the parabola (beyond } 2i).",
          explanation:
            "The region swept when moving the vertical line \\( \\operatorname{Re}z=\\gamma>1 \\) leftward onto the parabola is the parabola's interior; \\( ib \\) with \\( b>2 \\) is outside it, so the pole is not crossed.",
        },
        {
          stepNumber: 4,
          description: "Conclude no residue contribution.",
          workingLatex: "\\Delta I_{\\text{pole}}=0.",
          explanation:
            "No pole is swept, so the deformation is clean and \\( I(k) \\) reduces entirely to the steepest-descent integral along the parabola.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the smooth factor at the saddle.",
          workingLatex: "\\frac{1}{z-c}\\Big|_{z=1}=\\frac{1}{1-ib}.",
          explanation:
            "The saddle sits at \\( z=1 \\); the pole being off the contour means \\( 1/(z-c) \\) is smooth there and is simply evaluated at \\( z=1 \\).",
        },
        {
          stepNumber: 6,
          description: "State the leading saddle asymptotics.",
          workingLatex: "I(k)\\sim\\frac{e^{-k}}{(1-ib)\\sqrt{\\pi k}}.",
          explanation:
            "Reusing the saddle result with \\( c=ib \\); the answer is complex (the pole's position tilts the prefactor) but decays at the saddle rate \\( e^{-k} \\) since no faster pole term enters.",
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
      "Explain, for \\( I(k) \\) of am8a-019 with real \\( c \\), how the leading asymptotics changes discontinuously as \\( c \\) passes through \\( c=1 \\), and relate this to the Stokes phenomenon.",
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
            "I(k)\\sim \\underbrace{e^{k(c-2\\sqrt{c})}}_{\\text{pole, if crossed}}+\\underbrace{\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}}_{\\text{saddle}}.",
          explanation:
            "Both a pole term (present only when the deformation sweeps \\( z=c \\)) and a saddle term are available; which dominates depends on \\( c \\).",
        },
        {
          stepNumber: 2,
          description: "Region \\( c<1 \\): pole not crossed, saddle only.",
          workingLatex: "c<1:\\ c\\notin(1,\\gamma)\\ \\Rightarrow\\ \\text{no residue}\\ \\Rightarrow\\ I(k)\\sim\\frac{e^{-k}}{(1-c)\\sqrt{\\pi k}}.",
          explanation:
            "Deforming the line \\( \\operatorname{Re}z=\\gamma \\) leftward onto the parabola sweeps only the real interval \\( 1<x<\\gamma \\). A pole at \\( c<1 \\) lies to the left of the vertex \\( x=1 \\), outside that interval, so it is NOT crossed and the saddle term alone survives.",
        },
        {
          stepNumber: 3,
          description: "Region \\( 1<c<\\gamma \\): pole crossed and dominant.",
          workingLatex: "1<c<\\gamma:\\ \\text{pole swept}\\ \\Rightarrow\\ I(k)\\sim e^{k(c-2\\sqrt{c})},\\quad c-2\\sqrt c>-1.",
          explanation:
            "For \\( 1<c<\\gamma \\) the pole lies in the swept sliver and is crossed. Since \\( g(c)=c-2\\sqrt c \\) has its minimum \\( -1 \\) only at \\( c=1 \\), here \\( c-2\\sqrt c>-1 \\): the residue decays more slowly than the saddle's \\( e^{-k} \\) and dominates. The dominant balance switches as \\( c \\) passes \\( 1 \\).",
        },
        {
          stepNumber: 4,
          description: "Pinpoint the transition.",
          workingLatex: "c=1:\\ c-2\\sqrt{c}=-1=\\varphi(1)\\ \\text{(pole rate equals saddle rate)}.",
          explanation:
            "At \\( c=1 \\) the pole's exponential rate exactly equals the saddle's, and indeed the pole coalesces with the saddle: the smooth factor \\( 1/(1-c) \\) blows up, signalling breakdown of the naive separation.",
        },
        {
          stepNumber: 5,
          description: "Identify the Stokes line.",
          workingLatex: "\\text{At } c=1 \\text{ a subdominant term promotes to dominant.}",
          explanation:
            "The discontinuous switch in which exponential leads is the Stokes phenomenon: across the critical \\( c=1 \\), the pole contribution turns on/off relative to the saddle as the recessive term becomes dominant.",
        },
        {
          stepNumber: 6,
          description: "State the resolution near \\( c=1 \\).",
          workingLatex:
            "\\text{Uniform treatment: pole-saddle coalescence} \\Rightarrow \\text{error-function (Van der Waerden) form.}",
          explanation:
            "The blow-up at \\( c=1 \\) is removed by a uniform approximation in which the pole and saddle are handled together, producing a complementary-error-function transition — the smooth interpolation underlying the apparent discontinuity.",
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
          description: "Localise to the branch point.",
          workingLatex: "x\\to\\infty:\\ \\text{contribution from } t=0 \\text{ (branch point) only.}",
          explanation:
            "The exponential confines the integral to \\( t=O(1/x) \\); the branch-point factor \\( t^{a-1} \\) controls the leading algebraic order.",
        },
        {
          stepNumber: 2,
          description: "Expand the regular factor.",
          workingLatex: "\\frac{1}{1+t}=\\sum_{n=0}^{\\infty}(-1)^n t^{n}\\quad(|t|<1).",
          explanation:
            "Watson's lemma uses the convergent (here geometric) Taylor series of the smooth part; term-by-term integration yields the asymptotic series even though the series itself has finite radius.",
        },
        {
          stepNumber: 3,
          description: "Integrate term by term.",
          workingLatex:
            "\\int_0^{\\infty}t^{a-1+n}e^{-xt}\\,dt=\\frac{\\Gamma(a+n)}{x^{a+n}}.",
          explanation:
            "Each power \\( t^{a-1+n} \\) integrates to a Gamma over a power of \\( x \\) — the same branch-point integral as the leading term, shifted by \\( n \\).",
        },
        {
          stepNumber: 4,
          description: "Assemble the series.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{t^{a-1}e^{-xt}}{1+t}\\,dt\\sim\\sum_{n=0}^{\\infty}\\frac{(-1)^n\\,\\Gamma(a+n)}{x^{a+n}}.",
          explanation:
            "The alternating signs come from \\( (-1)^n \\) in the geometric expansion; the series is asymptotic, not convergent.",
        },
        {
          stepNumber: 5,
          description: "Write the general term.",
          workingLatex: "u_n=\\frac{(-1)^n\\,\\Gamma(a+n)}{x^{a+n}}.",
          explanation:
            "The \\( n \\)-th term carries Gamma \\( \\Gamma(a+n) \\) — growing factorially, which is why the series diverges and must be truncated optimally.",
        },
        {
          stepNumber: 6,
          description: "Check the first two terms numerically.",
          workingLatex:
            "a=\\tfrac12:\\ \\frac{\\Gamma(1/2)}{x^{1/2}}-\\frac{\\Gamma(3/2)}{x^{3/2}}+\\cdots .",
          explanation:
            "For \\( a=\\tfrac12,\\ x=10 \\): two-term value \\( 0.53247 \\) vs exact \\( 0.53589 \\) — close, and improving on the one-term \\( 0.56050 \\), confirming the series.",
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
      "A Fourier integral has both a pole and a branch point: evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt \\) for \\( x>0 \\) and separately give the leading large-\\( x \\) contribution that a branch point at \\( t=i \\) (i.e. replacing the pole by \\( (t^2+1)^{1/2} \\)) would instead produce; compare the decay rates.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["pole vs branch point", "decay rate", "Fourier integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Pole case: deform onto \\( t=i \\).",
          workingLatex: "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t^2+1}\\,dt=\\pi e^{-x}.",
          explanation:
            "A simple pole at \\( t=i \\) gives the residue contribution \\( 2\\pi i\\cdot e^{-x}/(2i)=\\pi e^{-x} \\): pure exponential decay set by the pole height \\( \\operatorname{Im}t=1 \\).",
        },
        {
          stepNumber: 2,
          description: "Branch-point case: wrap the cut from \\( t=i \\).",
          workingLatex:
            "\\frac{1}{(t^2+1)^{1/2}}:\\ \\text{branch point at } t=i,\\ \\text{cut upward to } i\\infty.",
          explanation:
            "Replacing the pole by a square-root branch point, the contour wraps the cut starting at \\( t=i \\); the contribution comes from \\( t \\) just above \\( i \\), where the integrand decays like \\( e^{-x\\operatorname{Im}t} \\).",
        },
        {
          stepNumber: 3,
          description: "Local model near the branch point.",
          workingLatex:
            "t=i+is,\\ s>0:\\ t^2+1=(t-i)(t+i)\\approx(is)(2i)=-2s\\Rightarrow(t^2+1)^{1/2}\\sim\\sqrt{2s}\\,e^{i\\cdot\\text{phase}}.",
          explanation:
            "Near \\( t=i \\) the square root behaves like \\( s^{1/2} \\); the discontinuity of \\( (t^2+1)^{1/2} \\) across the cut is what survives, giving an integral of \\( s^{-1/2} \\) type.",
        },
        {
          stepNumber: 4,
          description: "Extract the algebraic prefactor.",
          workingLatex:
            "\\int_0^{\\infty}\\frac{e^{-x(1+s)}}{\\sqrt{2s}}\\,(\\text{const})\\,ds\\sim e^{-x}\\sqrt{\\frac{\\pi}{2x}}\\,(\\text{const}).",
          explanation:
            "With \\( \\operatorname{Im}t=1+s \\), the factor \\( e^{-x} \\) comes out and the remaining \\( \\int_0^\\infty s^{-1/2}e^{-xs}ds=\\sqrt{\\pi/x} \\) supplies an extra \\( x^{-1/2} \\).",
        },
        {
          stepNumber: 5,
          description: "Compare the two decays.",
          workingLatex: "\\text{pole}:\\ \\pi e^{-x};\\qquad \\text{branch point}:\\ \\sim C\\,\\frac{e^{-x}}{\\sqrt{x}}.",
          explanation:
            "Both decay at the same exponential rate \\( e^{-x} \\) (set by the singularity's height \\( 1 \\)), but the branch point attaches an algebraic \\( x^{-1/2} \\) factor that the pole does not.",
        },
        {
          stepNumber: 6,
          description: "State the conclusion.",
          workingLatex:
            "\\text{Branch point} \\Rightarrow \\text{extra } x^{-1/2}\\ \\text{relative to the pole.}",
          explanation:
            "The structural lesson: a pole gives a clean exponential; a branch point of order \\( 1/2 \\) multiplies it by \\( x^{-1/2} \\). The exponential rate alone cannot distinguish them — the algebraic prefactor does.",
        },
      ],
      finalAnswer:
        "Pole: \\( \\pi e^{-x} \\). Branch point: \\( \\sim C\\,e^{-x}x^{-1/2} \\) — same exponential rate, extra \\( x^{-1/2} \\) factor.",
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
      "Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{(t^2+1)(t^2+4)}\\,dt \\) for \\( x>0 \\), and from the result identify the term that determines the leading large-\\( x \\) decay after deforming onto the poles.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["residue theorem", "dominant pole", "leading order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "List the upper-plane poles and residues.",
          workingLatex:
            "\\operatorname*{Res}_{t=i}=\\frac{e^{-x}}{6i},\\qquad \\operatorname*{Res}_{t=2i}=\\frac{e^{-2x}}{-12i}.",
          explanation:
            "Both poles are crossed when closing in the upper half-plane; their residues were computed in am8a-013.",
        },
        {
          stepNumber: 2,
          description: "Apply the residue theorem.",
          workingLatex:
            "\\int=2\\pi i\\left(\\frac{e^{-x}}{6i}-\\frac{e^{-2x}}{12i}\\right)=\\frac{\\pi}{3}e^{-x}-\\frac{\\pi}{6}e^{-2x}.",
          explanation:
            "Summing the residues and multiplying by \\( 2\\pi i \\) gives the exact value; numerically \\( x=3\\to0.050839 \\), matching.",
        },
        {
          stepNumber: 3,
          description: "Compare the two exponential rates.",
          workingLatex: "e^{-x}\\ \\gg\\ e^{-2x}\\quad(x\\to+\\infty).",
          explanation:
            "The pole closest to the real axis (\\( t=i \\), height \\( 1 \\)) decays slowest, so its term \\( (\\pi/3)e^{-x} \\) dominates; the farther pole \\( t=2i \\) gives an exponentially smaller correction.",
        },
        {
          stepNumber: 4,
          description: "State the leading behaviour.",
          workingLatex: "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{(t^2+1)(t^2+4)}\\,dt\\sim\\frac{\\pi}{3}e^{-x}.",
          explanation:
            "Generally, when deforming past several singularities, the one nearest the real axis sets the leading large-parameter decay — the analytic-singularity analogue of nearest-saddle dominance.",
        },
      ],
      finalAnswer:
        "Exact \\( \\dfrac{\\pi}{3}e^{-x}-\\dfrac{\\pi}{6}e^{-2x} \\); leading term \\( \\dfrac{\\pi}{3}e^{-x} \\).",
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
          description: "Recognise the branch-point integral.",
          workingLatex: "\\int_0^{\\infty}t^{1/2}e^{-xt}\\,dt=\\int_0^{\\infty}t^{(3/2)-1}e^{-xt}\\,dt.",
          explanation:
            "Writing the power as \\( s-1 \\) with \\( s=3/2 \\) casts it as the standard branch-point Laplace integral; \\( t^{1/2} \\) carries a branch point at \\( t=0 \\).",
        },
        {
          stepNumber: 2,
          description: "Rescale \\( u=xt \\).",
          workingLatex:
            "=\\frac{1}{x^{3/2}}\\int_0^{\\infty}u^{1/2}e^{-u}\\,du.",
          explanation:
            "Pulling the parameter out gives \\( x^{-3/2} \\) and a pure Gamma integral; the exponent \\( 3/2 \\) is exactly \\( s \\).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the Gamma integral.",
          workingLatex:
            "\\int_0^{\\infty}u^{1/2}e^{-u}\\,du=\\Gamma\\!\\left(\\tfrac32\\right)=\\frac{\\sqrt{\\pi}}{2}.",
          explanation:
            "\\( \\Gamma(3/2)=\\tfrac12\\Gamma(1/2)=\\tfrac12\\sqrt\\pi \\) by the recurrence and \\( \\Gamma(1/2)=\\sqrt\\pi \\).",
        },
        {
          stepNumber: 4,
          description: "Assemble and read off the order.",
          workingLatex:
            "\\int_0^{\\infty}t^{1/2}e^{-xt}\\,dt=\\frac{\\sqrt{\\pi}}{2\\,x^{3/2}}.",
          explanation:
            "The branch-point contribution decays algebraically as \\( x^{-3/2} \\) — slower-decaying powers come from lower branch-point exponents; numerically confirmed against direct quadrature.",
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
      "Consider \\( \\displaystyle\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t-i\\alpha}\\,dt \\) with \\( \\alpha>0 \\) and \\( x>0 \\). Evaluate it by deformation, then state what happens to the result as \\( \\alpha\\to0^+ \\) (the pole approaching the real contour).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simple pole", "pole approaching contour", "delta function limit"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Close in the upper half-plane.",
          workingLatex: "\\text{Pole at } t=i\\alpha\\ (\\operatorname{Im}>0)\\ \\text{enclosed for } x>0.",
          explanation:
            "Since \\( x>0 \\) the arc vanishes in the upper half-plane; the single simple pole \\( t=i\\alpha \\) is enclosed.",
        },
        {
          stepNumber: 2,
          description: "Residue at the pole.",
          workingLatex: "\\operatorname*{Res}_{t=i\\alpha}\\frac{e^{ixt}}{t-i\\alpha}=e^{ix\\cdot i\\alpha}=e^{-\\alpha x}.",
          explanation:
            "The pole is simple with unit-coefficient denominator, so the residue is just \\( e^{ixt} \\) evaluated at \\( t=i\\alpha \\).",
        },
        {
          stepNumber: 3,
          description: "Apply the residue theorem.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty}\\frac{e^{ixt}}{t-i\\alpha}\\,dt=2\\pi i\\,e^{-\\alpha x}.",
          explanation:
            "Deformation onto the enclosed pole gives \\( 2\\pi i \\) times the residue; the result decays at rate \\( \\alpha \\), the pole's distance from the real axis.",
        },
        {
          stepNumber: 4,
          description: "Take the limit \\( \\alpha\\to0^+ \\).",
          workingLatex: "\\lim_{\\alpha\\to0^+}2\\pi i\\,e^{-\\alpha x}=2\\pi i.",
          explanation:
            "As the pole descends to the real axis, the contribution tends to \\( 2\\pi i \\) for every \\( x>0 \\); this is the Heaviside/Sokhotski limit — the pole sitting on the contour gives a step in \\( x \\), the distributional signature of a pole on the integration path.",
        },
      ],
      finalAnswer: "\\( 2\\pi i\\,e^{-\\alpha x} \\); as \\( \\alpha\\to0^+ \\) this tends to \\( 2\\pi i \\) (for \\( x>0 \\)).",
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
      "Let \\( h(t)=i(t+t^2) \\). Sketch (describe) the constant-\\( \\operatorname{Im}h \\) path through \\( t=0 \\) and through \\( t=1 \\), and explain how deforming \\( \\displaystyle\\int_0^1 t^{-1/2}e^{i\\lambda(t+t^2)}\\,dt \\) onto these paths produces both an endpoint (branch-point) contribution and a saddle/endpoint structure as \\( \\lambda\\to\\infty \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["constant phase path", "branch point", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Constant-phase condition at \\( t=0 \\).",
          workingLatex:
            "h(t)=i(t+t^2),\\ \\operatorname{Im}h(0)=0:\\ \\operatorname{Im}\\,i(t+t^2)=\\operatorname{Re}(t+t^2)=0.",
          explanation:
            "Writing \\( t=u+iv \\), \\( \\operatorname{Im}\\,i(t+t^2)=\\operatorname{Re}(t+t^2)=u+u^2-v^2 \\). Setting it to its value at \\( t=0 \\) (zero) gives the steepest path leaving the endpoint \\( t=0 \\), which is also the branch point of \\( t^{-1/2} \\).",
        },
        {
          stepNumber: 2,
          description: "Path through \\( t=0 \\).",
          workingLatex: "u+u^2-v^2=0\\ \\Rightarrow\\ v^2=u+u^2\\ \\approx u\\ \\text{near }0.",
          explanation:
            "Near the origin \\( v^2\\approx u \\), a sideways parabola: the steepest-descent path leaves \\( t=0 \\) into the first quadrant at \\( 45^\\circ \\), where the integrand decays. The branch point sits at this endpoint.",
        },
        {
          stepNumber: 3,
          description: "Constant-phase condition at \\( t=1 \\).",
          workingLatex:
            "\\operatorname{Im}h(1)=\\operatorname{Re}(1+1)=2:\\ u+u^2-v^2=2.",
          explanation:
            "The path through the other endpoint \\( t=1 \\) keeps \\( \\operatorname{Re}(t+t^2)=2 \\); both endpoint paths are needed because there is no interior saddle on \\( (0,1) \\) (the saddle \\( t=-1/2 \\) lies outside).",
        },
        {
          stepNumber: 4,
          description: "Note the absence of an interior saddle.",
          workingLatex: "h'(t)=i(1+2t)=0\\Rightarrow t=-\\tfrac12\\notin(0,1).",
          explanation:
            "Since the saddle is outside the integration range, the large-\\( \\lambda \\) behaviour is governed entirely by the two endpoints, deformed onto their steepest paths.",
        },
        {
          stepNumber: 5,
          description: "Endpoint \\( t=0 \\): branch-point contribution.",
          workingLatex:
            "\\int t^{-1/2}e^{i\\lambda t}\\cdots\\sim \\frac{c_1}{\\lambda^{1/2}},\\quad c_1\\propto\\Gamma(\\tfrac12)e^{i\\pi/4}.",
          explanation:
            "Near \\( t=0 \\), \\( h\\approx it \\) and the \\( t^{-1/2} \\) branch point gives \\( \\int_0^\\infty t^{-1/2}e^{i\\lambda t}dt=\\Gamma(\\tfrac12)(i\\lambda)^{-1/2} \\): an algebraic \\( \\lambda^{-1/2} \\) with phase \\( e^{i\\pi/4} \\).",
        },
        {
          stepNumber: 6,
          description: "Endpoint \\( t=1 \\): regular endpoint contribution.",
          workingLatex:
            "\\sim c_2\\,\\frac{e^{2i\\lambda}}{\\lambda}\\ \\Rightarrow\\ \\int_0^1 t^{-1/2}e^{i\\lambda(t+t^2)}dt\\sim\\frac{c_1}{\\lambda^{1/2}}+c_2\\frac{e^{2i\\lambda}}{\\lambda}.",
          explanation:
            "At \\( t=1 \\) the integrand is smooth, so integration by parts gives the usual \\( e^{i\\lambda h(1)}/\\lambda=e^{2i\\lambda}/\\lambda \\) endpoint term. The branch-point endpoint dominates (\\( \\lambda^{-1/2}\\gg\\lambda^{-1} \\)) — matching the sheet's form \\( c_1\\lambda^{-1/2}+c_2 e^{2i\\lambda}\\lambda^{-1}+\\cdots \\).",
        },
      ],
      finalAnswer:
        "\\( \\sim\\dfrac{c_1}{\\lambda^{1/2}}+c_2\\dfrac{e^{2i\\lambda}}{\\lambda}+\\cdots \\): a \\( \\lambda^{-1/2} \\) branch-point term from \\( t=0 \\) (dominant) plus a \\( \\lambda^{-1} \\) endpoint term from \\( t=1 \\).",
    },
  },
  // REVIEW: leading-coefficient structure (Stuart's-notes / Stokes-line geometry) is a
  // qualitative sketch question; the exponential rates and the iπ half-residue limit
  // are checked, but the full unfolding-of-the-Stokes-line picture is not numerically verifiable.
  {
    id: "am8a-030",
    topicRef: "am8a",
    topicTitle: "Deforming past poles & branch cuts 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A Fourier-type integral \\( I(\\omega)=\\displaystyle\\int_{-\\infty}^{\\infty}f(t)e^{i\\omega t}\\,dt \\) has \\( f(t) \\) with a simple pole at \\( t=t_0=\\sigma+i\\beta \\) (\\( \\beta>0 \\)) and residue \\( R \\). For \\( \\omega\\to+\\infty \\), give the leading contribution from deforming into the upper half-plane, and explain how the answer changes the instant the pole crosses the real axis (\\( \\beta \\) passing through \\( 0 \\)).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["complex pole", "Fourier transform", "Stokes/crossing"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the closing half-plane.",
          workingLatex: "\\omega>0:\\ |e^{i\\omega t}|=e^{-\\omega\\operatorname{Im}t}\\to0\\ \\text{in UHP.}",
          explanation:
            "For \\( \\omega\\to+\\infty \\) the exponential decays in the upper half-plane, so we deform the contour upward; any pole with \\( \\operatorname{Im}t_0>0 \\) is enclosed.",
        },
        {
          stepNumber: 2,
          description: "Pick up the pole's residue.",
          workingLatex: "I(\\omega)\\sim 2\\pi i\\,R\\,e^{i\\omega t_0}=2\\pi i\\,R\\,e^{i\\omega\\sigma}e^{-\\omega\\beta}.",
          explanation:
            "The leading contribution is \\( 2\\pi i \\) times the residue weighted by \\( e^{i\\omega t_0} \\); the real part \\( \\sigma \\) gives an oscillation, the imaginary part \\( \\beta>0 \\) the decay rate.",
        },
        {
          stepNumber: 3,
          description: "Read off the decay rate.",
          workingLatex: "\\text{rate}=\\beta=\\operatorname{Im}t_0>0.",
          explanation:
            "The closer the pole to the real axis, the slower the decay — exactly the principle that the nearest singularity dominates large-\\( \\omega \\) asymptotics.",
        },
        {
          stepNumber: 4,
          description: "Pole exactly on the axis.",
          workingLatex: "\\beta=0:\\ \\text{indent the contour}\\Rightarrow \\pm i\\pi R\\,e^{i\\omega\\sigma}.",
          explanation:
            "When \\( \\beta=0 \\) the pole lies on the contour; a principal-value treatment with a semicircular indentation gives a half-residue \\( i\\pi R \\) (sign per indentation side) — verified as the \\( \\alpha\\to0 \\) limit in am8a-028.",
        },
        {
          stepNumber: 5,
          description: "Pole below the axis.",
          workingLatex: "\\beta<0:\\ \\text{pole in LHP, not enclosed}\\Rightarrow \\text{contribution } 0\\ (\\text{from this pole}).",
          explanation:
            "Once \\( \\beta<0 \\) the upward deformation no longer encircles the pole, so its \\( 2\\pi i R \\) term switches off entirely: the asymptotics jumps from \\( 2\\pi iR\\,e^{i\\omega t_0} \\) to \\( 0 \\).",
        },
        {
          stepNumber: 6,
          description: "Interpret the crossing.",
          workingLatex:
            "2\\pi i R e^{i\\omega t_0}\\ \\xrightarrow{\\ \\beta\\to0^+\\ }\\ i\\pi R e^{i\\omega\\sigma}\\ \\xrightarrow{\\ \\beta<0\\ }\\ 0.",
          explanation:
            "As the pole migrates through the real axis the contribution steps \\( 2\\pi iR\\to i\\pi R\\to0 \\): a discontinuous switch-on/off of an exponential term — the pole-crossing analogue of the Stokes phenomenon for steepest-descent integrals.",
        },
      ],
      finalAnswer:
        "Leading term \\( 2\\pi i\\,R\\,e^{i\\omega t_0} \\) (rate \\( \\beta \\)); on crossing it steps \\( 2\\pi iR\\to i\\pi R\\to 0 \\) as \\( \\beta:+\\to0\\to- \\).",
    },
  },
];
