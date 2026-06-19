import { Question } from "@/lib/types";

/**
 * Asymptotic Methods — am5c Fourier integrals with smooth amplitude
 * Topic group: Oscillatory Integrals
 *
 * Scope: the large-frequency asymptotics of
 *    I(omega) = \int_a^b f(t) e^{i omega t} dt,
 * for f smooth (possibly with a finite jump at an interior point), obtained by
 * repeated integration by parts. Endpoint contributions, the full inverse-power
 * series, interior-discontinuity contributions, and comparison with the exact
 * I(omega) for piecewise-exponential f.
 *
 * Seeded from DAMTP Asymptotic Methods Example Sheet 2, Q3 (smooth/piecewise
 * amplitude, linear phase) with constants, limits and amplitudes varied.
 *
 * Core results used throughout (all numerically verified with mpmath):
 *   Leading:  I ~ (1/(i omega)) [ f(b) e^{i omega b} - f(a) e^{i omega a} ].
 *   Series:   I ~ - sum_{n>=0} (1/(-i omega)^{n+1})
 *                  [ f^{(n)}(b) e^{i omega b} - f^{(n)}(a) e^{i omega a} ].
 *   Interior jump at c adds  -(1/(i omega))[f(c^+) - f(c^-)] e^{i omega c}.
 *   Piecewise example f = -e^t (t<0), e^{-t} (t>=0):
 *       exact I = 2 i omega / (1 + omega^2) ~ 2i/omega - 2i/omega^3 + ...
 */
export const questions: Question[] = [
  // ─────────────────────────── FOUNDATION (6) ───────────────────────────
  {
    id: "am5c-001",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Consider the Fourier integral \\( I(\\omega) = \\int_a^b f(t)\\,e^{i\\omega t}\\,dt \\) with \\( f \\) smooth on \\( [a,b] \\). Perform one integration by parts and hence state the leading-order behaviour as \\( \\omega \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fourier integral", "integration by parts", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Integrate by parts, differentiating the amplitude.",
          workingLatex:
            "I(\\omega) = \\int_a^b f(t)\\,e^{i\\omega t}\\,dt = \\left[ f(t)\\,\\frac{e^{i\\omega t}}{i\\omega} \\right]_a^b - \\frac{1}{i\\omega}\\int_a^b f'(t)\\,e^{i\\omega t}\\,dt.",
          explanation:
            "The oscillatory factor \\( e^{i\\omega t} \\) is the easy thing to integrate: \\( \\int e^{i\\omega t}\\,dt = e^{i\\omega t}/(i\\omega) \\). Each integration by parts pulls out one power of \\( 1/(i\\omega) \\), which is what generates the asymptotic series.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the boundary term.",
          workingLatex:
            "I(\\omega) = \\frac{1}{i\\omega}\\Big[ f(b)\\,e^{i\\omega b} - f(a)\\,e^{i\\omega a} \\Big] - \\frac{1}{i\\omega}\\int_a^b f'(t)\\,e^{i\\omega t}\\,dt.",
          explanation:
            "The remaining integral has the same form as the original but with \\( f \\) replaced by \\( f' \\); by the Riemann\\(-\\)Lebesgue lemma it tends to \\( 0 \\) as \\( \\omega \\to \\infty \\), so it is one order smaller than the boundary term.",
        },
        {
          stepNumber: 3,
          description: "Read off the leading term.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\Big[ f(b)\\,e^{i\\omega b} - f(a)\\,e^{i\\omega a} \\Big], \\qquad \\omega \\to \\infty.",
          explanation:
            "With no stationary point of the phase and no interior discontinuity, the whole contribution comes from the two endpoints, each decaying like \\( 1/\\omega \\).",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{1}{i\\omega}\\left[ f(b)\\,e^{i\\omega b} - f(a)\\,e^{i\\omega a} \\right] \\).",
    },
  },
  {
    id: "am5c-002",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find the leading-order asymptotic behaviour, as \\( \\omega \\to \\infty \\), of \\( I(\\omega) = \\int_0^1 e^{i\\omega t}\\,dt \\), and confirm it against the exact value.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fourier integral", "exact comparison", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate the integral exactly.",
          workingLatex:
            "I(\\omega) = \\int_0^1 e^{i\\omega t}\\,dt = \\left[\\frac{e^{i\\omega t}}{i\\omega}\\right]_0^1 = \\frac{e^{i\\omega} - 1}{i\\omega}.",
          explanation:
            "Here \\( f \\equiv 1 \\), so the integral is elementary and the asymptotic relation is in fact exact \\(-\\) a useful check on the general endpoint formula.",
        },
        {
          stepNumber: 2,
          description: "Compare with the endpoint formula.",
          workingLatex:
            "\\frac{1}{i\\omega}\\big[ f(1)e^{i\\omega} - f(0)e^{0} \\big] = \\frac{e^{i\\omega} - 1}{i\\omega}.",
          explanation:
            "Substituting \\( f \\equiv 1 \\), \\( a = 0 \\), \\( b = 1 \\) into \\( \\frac{1}{i\\omega}[f(b)e^{i\\omega b}-f(a)e^{i\\omega a}] \\) reproduces the exact answer exactly: all higher corrections vanish because \\( f' \\equiv 0 \\).",
        },
        {
          stepNumber: 3,
          description: "State the leading behaviour.",
          workingLatex:
            "I(\\omega) = \\frac{e^{i\\omega} - 1}{i\\omega} = O\\!\\left(\\frac{1}{\\omega}\\right), \\qquad \\omega \\to \\infty.",
          explanation:
            "The magnitude decays like \\( 1/\\omega \\), the hallmark of an endpoint contribution with smooth, non-vanishing amplitude.",
          mafs: `<Mafs viewBox={{ x: [0, 6.4], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.cos(9*t)} domain={[0, 6.4]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => 1} domain={[0, 6.4]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => -1} domain={[0, 6.4]} color="var(--mafs-fg-orange)" style="dashed" />
  <LaTeX at={[3.0,1.3]} tex="\\pm f(t)=\\pm 1" color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.4,-0.55]} tex="\\cos\\omega t" color="var(--mafs-fg-accent)" />
  <LaTeX at={[6.1,-0.2]} tex="t" />
</Mafs>`,
        },
      ],
      finalAnswer:
        "\\( I(\\omega) = \\dfrac{e^{i\\omega} - 1}{i\\omega} \\sim \\dfrac{1}{i\\omega}\\left(e^{i\\omega} - 1\\right) \\) (exact).",
    },
  },
  {
    id: "am5c-003",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Use the endpoint formula to write down the leading-order behaviour of \\( I(\\omega) = \\int_0^1 (t^2 + 1)\\,e^{i\\omega t}\\,dt \\) as \\( \\omega \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fourier integral", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the amplitude at the endpoints.",
          workingLatex: "f(t) = t^2 + 1, \\qquad f(0) = 1, \\qquad f(1) = 2.",
          explanation:
            "The leading endpoint contribution needs only the values of \\( f \\) at the two limits.",
        },
        {
          stepNumber: 2,
          description: "Apply the endpoint formula.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\Big[ f(1)e^{i\\omega} - f(0)e^{0} \\Big] = \\frac{2e^{i\\omega} - 1}{i\\omega}.",
          explanation:
            "Substitute \\( f(1)=2 \\), \\( f(0)=1 \\) into \\( \\frac{1}{i\\omega}[f(b)e^{i\\omega b}-f(a)e^{i\\omega a}] \\). The numerical check gives an error of order \\( 1/\\omega^2 \\), confirming this is the correct leading term.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{2e^{i\\omega} - 1}{i\\omega} \\).",
    },
  },
  {
    id: "am5c-004",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find the leading-order behaviour of the oscillatory integral \\( I(\\omega) = \\int_0^{\\pi} t\\,e^{i\\omega t}\\,dt \\) as \\( \\omega \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fourier integral", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Endpoint values.",
          workingLatex: "f(t)=t, \\qquad f(0)=0, \\qquad f(\\pi)=\\pi.",
          explanation:
            "Because \\( f(0)=0 \\), the lower endpoint contributes nothing at leading order \\(-\\) only the upper limit survives.",
        },
        {
          stepNumber: 2,
          description: "Apply the endpoint formula.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\Big[ \\pi\\,e^{i\\omega\\pi} - 0 \\Big] = \\frac{\\pi\\,e^{i\\pi\\omega}}{i\\omega}.",
          explanation:
            "The vanishing of \\( f \\) at the lower limit does not change the order: the dominant balance is still \\( 1/\\omega \\), set by the upper endpoint.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{\\pi\\,e^{i\\pi\\omega}}{i\\omega} \\).",
    },
  },
  {
    id: "am5c-005",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Given the asymptotic series \\( I(\\omega) \\sim -\\sum_{n=0}^{\\infty} \\frac{1}{(-i\\omega)^{n+1}}\\big[f^{(n)}(b)e^{i\\omega b} - f^{(n)}(a)e^{i\\omega a}\\big] \\) for \\( \\int_a^b f e^{i\\omega t}dt \\), write down the first two terms for \\( f(t)=e^{t} \\) on \\( [0,1] \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fourier integral", "asymptotic series", "integration by parts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note that the amplitude is its own derivative.",
          workingLatex: "f(t) = e^{t} \\implies f^{(n)}(t) = e^{t} \\ \\text{for all } n.",
          explanation:
            "Every derivative of \\( e^t \\) equals \\( e^t \\), so each term in the series uses the same endpoint values \\( f^{(n)}(0)=1 \\), \\( f^{(n)}(1)=e \\).",
        },
        {
          stepNumber: 2,
          description: "Write the n = 0 term.",
          workingLatex:
            "-\\frac{1}{(-i\\omega)}\\big[e\\,e^{i\\omega} - 1\\big] = \\frac{1}{i\\omega}\\big[e^{1+i\\omega} - 1\\big].",
          explanation:
            "Using \\( -1/(-i\\omega) = 1/(i\\omega) \\). This is the leading endpoint term.",
        },
        {
          stepNumber: 3,
          description: "Write the n = 1 term.",
          workingLatex:
            "-\\frac{1}{(-i\\omega)^2}\\big[e\\,e^{i\\omega} - 1\\big] = \\frac{e^{1+i\\omega} - 1}{\\omega^2}.",
          explanation:
            "Since \\( (-i\\omega)^2 = -\\omega^2 \\), the factor \\( -1/(-i\\omega)^2 = 1/\\omega^2 \\). The two-term sum has a verified error of order \\( 1/\\omega^3 \\).",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{e^{1+i\\omega} - 1}{i\\omega} + \\dfrac{e^{1+i\\omega} - 1}{\\omega^2} \\).",
    },
  },
  {
    id: "am5c-006",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A function \\( f \\) is smooth on \\( (a,c) \\cup (c,b) \\) but has a finite jump at the interior point \\( c \\). State the leading-order contribution this jump makes to \\( I(\\omega) = \\int_a^b f(t)e^{i\\omega t}\\,dt \\) as \\( \\omega \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Fourier integral", "discontinuity", "interior contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split at the discontinuity and integrate each piece by parts.",
          workingLatex:
            "I(\\omega) = \\int_a^{c} f e^{i\\omega t}\\,dt + \\int_{c}^{b} f e^{i\\omega t}\\,dt.",
          explanation:
            "The point \\( c \\) is now an endpoint of two separate smooth integrals, so the endpoint formula applies to each \\(-\\) and \\( c \\) is reached from the left in the first and from the right in the second.",
        },
        {
          stepNumber: 2,
          description: "Collect the two contributions at c.",
          workingLatex:
            "\\frac{1}{i\\omega}f(c^-)e^{i\\omega c} \\;-\\; \\frac{1}{i\\omega}f(c^+)e^{i\\omega c} = -\\frac{1}{i\\omega}\\big[f(c^+) - f(c^-)\\big]e^{i\\omega c}.",
          explanation:
            "From the first integral \\( c \\) is an upper limit (sign \\( + \\)); from the second it is a lower limit (sign \\( - \\)). The two combine into the jump \\( [f] = f(c^+)-f(c^-) \\).",
        },
        {
          stepNumber: 3,
          description: "State the jump contribution.",
          workingLatex:
            "I_{\\text{jump}}(\\omega) \\sim -\\frac{e^{i\\omega c}}{i\\omega}\\big[f(c^+) - f(c^-)\\big].",
          explanation:
            "A jump contributes at the same order \\( 1/\\omega \\) as a genuine endpoint; only if \\( f \\) is continuous (and so the jump vanishes) does the interior point drop out.",
        },
      ],
      finalAnswer:
        "\\( I_{\\text{jump}}(\\omega) \\sim -\\dfrac{e^{i\\omega c}}{i\\omega}\\big[f(c^+) - f(c^-)\\big] \\).",
    },
  },

  // ─────────────────────────── STANDARD (12) ───────────────────────────
  {
    id: "am5c-007",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 07",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By integrating by parts twice, find the two-term asymptotic expansion, as \\( \\omega \\to \\infty \\), of \\( I(\\omega) = \\int_0^1 (t^2+1)\\,e^{i\\omega t}\\,dt \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Fourier integral", "asymptotic series", "integration by parts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Record the amplitude and its derivative at the endpoints.",
          workingLatex:
            "f(t)=t^2+1,\\quad f'(t)=2t; \\qquad f(0)=1,\\ f(1)=2,\\ f'(0)=0,\\ f'(1)=2.",
          explanation:
            "The two-term expansion needs \\( f \\) and \\( f' \\) at both limits.",
        },
        {
          stepNumber: 2,
          description: "Write the leading endpoint term.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[f(1)e^{i\\omega} - f(0)\\big] = \\frac{2e^{i\\omega} - 1}{i\\omega}.",
          explanation:
            "This is the \\( n=0 \\) term of the series \\( -\\sum (-i\\omega)^{-(n+1)}[f^{(n)}(b)e^{i\\omega b}-f^{(n)}(a)e^{i\\omega a}] \\).",
        },
        {
          stepNumber: 3,
          description: "Add the first correction.",
          workingLatex:
            "-\\frac{1}{(-i\\omega)^2}\\big[f'(1)e^{i\\omega} - f'(0)\\big] = \\frac{2e^{i\\omega}}{\\omega^2}.",
          explanation:
            "With \\( (-i\\omega)^2=-\\omega^2 \\) the prefactor is \\( +1/\\omega^2 \\); only the upper limit contributes since \\( f'(0)=0 \\).",
        },
        {
          stepNumber: 4,
          description: "Combine the two terms.",
          workingLatex:
            "I(\\omega) \\sim \\frac{2e^{i\\omega} - 1}{i\\omega} + \\frac{2e^{i\\omega}}{\\omega^2}, \\qquad \\omega \\to \\infty.",
          explanation:
            "A numerical comparison against the exact integral confirms a residual of order \\( 1/\\omega^3 \\), as expected for a two-term expansion.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{2e^{i\\omega} - 1}{i\\omega} + \\dfrac{2e^{i\\omega}}{\\omega^2} \\).",
    },
  },
  {
    id: "am5c-008",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 08",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the two-term asymptotic expansion, as \\( \\omega \\to \\infty \\), of \\( I(\\omega) = \\int_0^2 e^{-t}\\,e^{i\\omega t}\\,dt \\), and identify the exact closed form of \\( I(\\omega) \\) to confirm the leading term.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Fourier integral", "exact comparison", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate the integral exactly.",
          workingLatex:
            "I(\\omega) = \\int_0^2 e^{(i\\omega - 1)t}\\,dt = \\frac{e^{2(i\\omega-1)} - 1}{i\\omega - 1}.",
          explanation:
            "The exponential amplitude makes the integral elementary; the closed form lets us test every asymptotic term.",
          mafs: `<Mafs viewBox={{ x: [0, 6.4], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.cos(11*t)*Math.exp(-t)} domain={[0, 2]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => Math.exp(-t)} domain={[0, 2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => -Math.exp(-t)} domain={[0, 2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.2,1.25]} tex="t=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[3.6,0.65]} tex="\\pm e^{-t}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[6.1,-0.2]} tex="t" />
</Mafs>`,
        },
        {
          stepNumber: 2,
          description: "Endpoint data for the series.",
          workingLatex:
            "f(t)=e^{-t},\\ f'(t)=-e^{-t}; \\quad f(0)=1,\\ f(2)=e^{-2},\\ f'(0)=-1,\\ f'(2)=-e^{-2}.",
          explanation:
            "Each derivative of \\( e^{-t} \\) just flips sign, so the endpoint values are easy to list.",
        },
        {
          stepNumber: 3,
          description: "Leading endpoint term.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[e^{-2}e^{2i\\omega} - 1\\big].",
          explanation:
            "Expanding \\( 1/(i\\omega-1) = (1/i\\omega)(1 + 1/(i\\omega) + \\cdots) \\) in the exact form reproduces exactly this leading term.",
        },
        {
          stepNumber: 4,
          description: "First correction.",
          workingLatex:
            "-\\frac{1}{(-i\\omega)^2}\\big[f'(2)e^{2i\\omega} - f'(0)\\big] = \\frac{1}{\\omega^2}\\big[-e^{-2}e^{2i\\omega} + 1\\big].",
          explanation:
            "With \\( (-i\\omega)^2 = -\\omega^2 \\) the prefactor is \\( +1/\\omega^2 \\); the residual is verified to be \\( O(1/\\omega^3) \\).",
        },
        {
          stepNumber: 5,
          description: "Assemble the expansion.",
          workingLatex:
            "I(\\omega) \\sim \\frac{e^{-2}e^{2i\\omega} - 1}{i\\omega} + \\frac{1 - e^{-2}e^{2i\\omega}}{\\omega^2}.",
          explanation:
            "Both terms agree with the large-\\(\\omega\\) expansion of the exact closed form \\( (e^{2(i\\omega-1)}-1)/(i\\omega-1) \\).",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) = \\dfrac{e^{2(i\\omega-1)}-1}{i\\omega-1} \\sim \\dfrac{e^{-2}e^{2i\\omega} - 1}{i\\omega} + \\dfrac{1 - e^{-2}e^{2i\\omega}}{\\omega^2} \\).",
    },
  },
  {
    id: "am5c-009",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 09",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Taking the real part of \\( \\int_0^1 t\\,e^{i\\omega t}\\,dt \\), find the leading-order behaviour of \\( J(\\omega) = \\int_0^1 t\\cos(\\omega t)\\,dt \\) as \\( \\omega \\to \\infty \\), and verify it against the exact value.",
    marks: 3,
    yearCreated: 2026,
    tags: ["Fourier integral", "cosine transform", "exact comparison"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Relate the cosine integral to a complex Fourier integral.",
          workingLatex:
            "J(\\omega) = \\operatorname{Re}\\int_0^1 t\\,e^{i\\omega t}\\,dt.",
          explanation:
            "Since \\( \\cos(\\omega t) = \\operatorname{Re}\\,e^{i\\omega t} \\) and \\( t \\) is real, the cosine integral is the real part of the complex one.",
        },
        {
          stepNumber: 2,
          description: "Apply the leading endpoint formula.",
          workingLatex:
            "\\int_0^1 t\\,e^{i\\omega t}\\,dt \\sim \\frac{1}{i\\omega}\\big[1\\cdot e^{i\\omega} - 0\\big] = \\frac{e^{i\\omega}}{i\\omega}.",
          explanation:
            "With \\( f(t)=t \\) the lower endpoint gives nothing; the upper endpoint gives \\( e^{i\\omega}/(i\\omega) \\).",
        },
        {
          stepNumber: 3,
          description: "Take the real part.",
          workingLatex:
            "\\frac{e^{i\\omega}}{i\\omega} = \\frac{-i\\,e^{i\\omega}}{\\omega} = \\frac{\\sin\\omega - i\\cos\\omega}{\\omega} \\implies J(\\omega) \\sim \\frac{\\sin\\omega}{\\omega}.",
          explanation:
            "Multiplying top and bottom by \\( -i \\) and using \\( e^{i\\omega}=\\cos\\omega + i\\sin\\omega \\). The exact value is \\( \\sin\\omega/\\omega + (\\cos\\omega - 1)/\\omega^2 \\), whose leading term matches.",
        },
      ],
      finalAnswer: "\\( J(\\omega) \\sim \\dfrac{\\sin\\omega}{\\omega} \\).",
    },
  },
  {
    id: "am5c-010",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 10",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading-order asymptotic behaviour, as \\( \\omega \\to \\infty \\), of \\( I(\\omega) = \\int_0^2 \\frac{1}{1+t}\\,e^{i\\omega t}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Fourier integral", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Amplitude values at the limits.",
          workingLatex:
            "f(t)=\\frac{1}{1+t}; \\qquad f(0)=1, \\qquad f(2)=\\frac{1}{3}.",
          explanation:
            "The amplitude is smooth and non-vanishing on \\( [0,2] \\), so leading order is set purely by the endpoint values.",
        },
        {
          stepNumber: 2,
          description: "Apply the endpoint formula.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[f(2)e^{2i\\omega} - f(0)\\big] = \\frac{1}{i\\omega}\\left(\\frac{1}{3}e^{2i\\omega} - 1\\right).",
          explanation:
            "Substitute the endpoint values into \\( \\frac{1}{i\\omega}[f(b)e^{i\\omega b}-f(a)e^{i\\omega a}] \\). A numerical check confirms an \\( O(1/\\omega^2) \\) error.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{1}{i\\omega}\\left(\\dfrac{1}{3}e^{2i\\omega} - 1\\right) \\).",
    },
  },
  {
    id: "am5c-011",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 11",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Let \\( f(t) = 1 \\) for \\( 0 \\le t < 1 \\) and \\( f(t) = 3 \\) for \\( 1 \\le t \\le 2 \\). Find the leading-order behaviour of \\( I(\\omega) = \\int_0^2 f(t)e^{i\\omega t}\\,dt \\) as \\( \\omega \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Fourier integral", "discontinuity", "interior contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the endpoints and the interior jump.",
          workingLatex:
            "a=0,\\ b=2,\\ c=1; \\qquad f(0)=1,\\ f(2)=3,\\ f(1^-)=1,\\ f(1^+)=3.",
          explanation:
            "There is a jump at \\( t=1 \\); within each piece \\( f \\) is constant, hence smooth, so the only contributions are the two endpoints and the jump.",
          mafs: `<Mafs viewBox={{ x: [0, 6.4], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.cos(13*t)*(t < 1 ? 0.4 : 1.2)} domain={[0, 2]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => (t < 1 ? 0.4 : 1.2)} domain={[0, 2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => -(t < 1 ? 0.4 : 1.2)} domain={[0, 2]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={1} y={1.2} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.5,1.05]} tex="\\text{jump }1\\to 3" color="var(--mafs-fg-blue)" />
  <LaTeX at={[0.5,0.65]} tex="\\pm f" color="var(--mafs-fg-orange)" />
  <LaTeX at={[6.1,-0.2]} tex="t" />
</Mafs>`,
        },
        {
          stepNumber: 2,
          description: "Endpoint contributions.",
          workingLatex:
            "I_{\\text{ends}} \\sim \\frac{1}{i\\omega}\\big[f(2)e^{2i\\omega} - f(0)\\big] = \\frac{1}{i\\omega}\\big[3e^{2i\\omega} - 1\\big].",
          explanation:
            "Using \\( a=0 \\), \\( b=2 \\) with the outer endpoint values of \\( f \\).",
        },
        {
          stepNumber: 3,
          description: "Interior jump contribution.",
          workingLatex:
            "I_{\\text{jump}} \\sim -\\frac{e^{i\\omega}}{i\\omega}\\big[f(1^+) - f(1^-)\\big] = -\\frac{2e^{i\\omega}}{i\\omega}.",
          explanation:
            "The jump is \\( 3-1=2 \\) at \\( c=1 \\); a discontinuity contributes at the same order \\( 1/\\omega \\) as an endpoint.",
        },
        {
          stepNumber: 4,
          description: "Add the three contributions.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[3e^{2i\\omega} - 2e^{i\\omega} - 1\\big].",
          explanation:
            "All three sources decay like \\( 1/\\omega \\); collecting them gives the leading asymptotic form.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{1}{i\\omega}\\big[3e^{2i\\omega} - 2e^{i\\omega} - 1\\big] \\).",
    },
  },
  {
    id: "am5c-012",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 12",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Consider \\( f(t) = -e^{t} \\) for \\( t<0 \\) and \\( f(t)=e^{-t} \\) for \\( t\\ge 0 \\). Compute the exact value of \\( I(\\omega) = \\int_{-\\infty}^{\\infty} f(t)e^{i\\omega t}\\,dt \\) in closed form.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Fourier integral", "exact comparison", "piecewise exponential"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split at the discontinuity.",
          workingLatex:
            "I(\\omega) = \\int_{-\\infty}^{0} (-e^{t})e^{i\\omega t}\\,dt + \\int_{0}^{\\infty} e^{-t}e^{i\\omega t}\\,dt.",
          explanation:
            "Both half-line integrals converge because the amplitude decays as \\( |t|\\to\\infty \\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate the left integral.",
          workingLatex:
            "\\int_{-\\infty}^{0} -e^{(1+i\\omega)t}\\,dt = -\\left[\\frac{e^{(1+i\\omega)t}}{1+i\\omega}\\right]_{-\\infty}^{0} = -\\frac{1}{1+i\\omega}.",
          explanation:
            "The exponent \\( (1+i\\omega)t \\to -\\infty \\) as \\( t\\to-\\infty \\) (real part \\( t<0 \\)), so the lower limit vanishes.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the right integral.",
          workingLatex:
            "\\int_{0}^{\\infty} e^{(i\\omega-1)t}\\,dt = \\left[\\frac{e^{(i\\omega-1)t}}{i\\omega-1}\\right]_{0}^{\\infty} = \\frac{1}{1-i\\omega}.",
          explanation:
            "Here \\( \\operatorname{Re}(i\\omega-1) = -1 < 0 \\), so the upper limit vanishes, leaving \\( -1/(i\\omega-1)=1/(1-i\\omega) \\).",
        },
        {
          stepNumber: 4,
          description: "Combine over a common denominator.",
          workingLatex:
            "I(\\omega) = -\\frac{1}{1+i\\omega} + \\frac{1}{1-i\\omega} = \\frac{-(1-i\\omega) + (1+i\\omega)}{(1+i\\omega)(1-i\\omega)} = \\frac{2i\\omega}{1+\\omega^2}.",
          explanation:
            "The denominators multiply to \\( 1+\\omega^2 \\); the numerators combine to \\( 2i\\omega \\). This exact value is the benchmark for the asymptotic analysis of this canonical example.",
        },
      ],
      finalAnswer: "\\( I(\\omega) = \\dfrac{2i\\omega}{1+\\omega^2} \\).",
      canonicalAnswer: "2*i*w/(1+w^2)",
    },
  },
  {
    id: "am5c-013",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 13",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For the piecewise-exponential function with exact transform \\( I(\\omega) = \\dfrac{2i\\omega}{1+\\omega^2} \\), find the asymptotic expansion of \\( I(\\omega) \\) to two terms as \\( \\omega \\to \\infty \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Fourier integral", "asymptotic series", "exact comparison"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factor out the leading power of omega.",
          workingLatex:
            "I(\\omega) = \\frac{2i\\omega}{1+\\omega^2} = \\frac{2i}{\\omega}\\cdot\\frac{1}{1+\\omega^{-2}}.",
          explanation:
            "Dividing top and bottom by \\( \\omega^2 \\) isolates the large-\\(\\omega\\) behaviour and exposes a geometric factor.",
        },
        {
          stepNumber: 2,
          description: "Expand the geometric factor.",
          workingLatex:
            "\\frac{1}{1+\\omega^{-2}} = 1 - \\frac{1}{\\omega^2} + \\frac{1}{\\omega^4} - \\cdots, \\qquad \\omega \\to \\infty.",
          explanation:
            "Valid since \\( \\omega^{-2}<1 \\) for large \\( \\omega \\). This is the binomial / geometric series \\( (1+x)^{-1} \\).",
        },
        {
          stepNumber: 3,
          description: "Multiply through.",
          workingLatex:
            "I(\\omega) \\sim \\frac{2i}{\\omega}\\left(1 - \\frac{1}{\\omega^2}\\right) = \\frac{2i}{\\omega} - \\frac{2i}{\\omega^3}.",
          explanation:
            "Only odd inverse powers of \\( \\omega \\) appear \\(-\\) the signature of a pure jump (at \\( t=0 \\)) with an odd amplitude. The numerically verified residual is \\( O(1/\\omega^5) \\).",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{2i}{\\omega} - \\dfrac{2i}{\\omega^3} \\).",
    },
  },
  {
    id: "am5c-014",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 14",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading-order behaviour of \\( I(\\omega) = \\int_{1}^{3} \\ln t\\, e^{i\\omega t}\\,dt \\) as \\( \\omega \\to \\infty \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["Fourier integral", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Amplitude values at the limits.",
          workingLatex:
            "f(t)=\\ln t; \\qquad f(1)=0, \\qquad f(3)=\\ln 3.",
          explanation:
            "\\( \\ln t \\) is smooth on \\( [1,3] \\), and it vanishes at the lower limit, so only the upper endpoint contributes at leading order.",
        },
        {
          stepNumber: 2,
          description: "Apply the endpoint formula.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[\\ln 3\\,e^{3i\\omega} - 0\\big] = \\frac{\\ln 3\\,e^{3i\\omega}}{i\\omega}.",
          explanation:
            "The first correction comes from \\( f'(t)=1/t \\) and is one power of \\( \\omega \\) smaller; here we keep only the leading \\( 1/\\omega \\) term.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{\\ln 3\\,e^{3i\\omega}}{i\\omega} \\).",
    },
  },
  {
    id: "am5c-015",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 15",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Taking the imaginary part of \\( \\int_0^{\\pi/2} e^{i\\omega t}\\,dt \\), deduce the leading behaviour of \\( S(\\omega) = \\int_0^{\\pi/2} \\sin(\\omega t)\\,dt \\) as \\( \\omega \\to \\infty \\), and check against the exact value.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Fourier integral", "sine transform", "exact comparison"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write S as an imaginary part.",
          workingLatex:
            "S(\\omega) = \\operatorname{Im}\\int_0^{\\pi/2} e^{i\\omega t}\\,dt.",
          explanation:
            "Since \\( \\sin(\\omega t)=\\operatorname{Im}\\,e^{i\\omega t} \\), the sine integral is the imaginary part of the elementary complex integral.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the complex integral exactly.",
          workingLatex:
            "\\int_0^{\\pi/2} e^{i\\omega t}\\,dt = \\frac{e^{i\\omega\\pi/2} - 1}{i\\omega}.",
          explanation:
            "With \\( f\\equiv 1 \\) the endpoint formula is exact; no higher corrections exist.",
        },
        {
          stepNumber: 3,
          description: "Take the imaginary part.",
          workingLatex:
            "\\frac{e^{i\\omega\\pi/2}-1}{i\\omega} = \\frac{-i(e^{i\\omega\\pi/2}-1)}{\\omega} \\implies S(\\omega) = \\frac{1 - \\cos(\\omega\\pi/2)}{\\omega}.",
          explanation:
            "Multiply by \\( -i/(-i)=1 \\); the imaginary part of \\( -i(\\cos\\theta + i\\sin\\theta - 1) \\) with \\( \\theta=\\omega\\pi/2 \\) is \\( 1-\\cos\\theta \\). This is exact, and clearly \\( O(1/\\omega) \\).",
        },
      ],
      finalAnswer:
        "\\( S(\\omega) = \\dfrac{1 - \\cos(\\omega\\pi/2)}{\\omega} \\sim O\\!\\left(\\dfrac{1}{\\omega}\\right) \\).",
    },
  },
  {
    id: "am5c-016",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 16",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the two-term asymptotic expansion, as \\( \\omega \\to \\infty \\), of \\( I(\\omega) = \\int_0^1 \\cos(\\pi t)\\,e^{i\\omega t}\\,dt \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Fourier integral", "asymptotic series", "integration by parts"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Endpoint data.",
          workingLatex:
            "f(t)=\\cos(\\pi t),\\ f'(t)=-\\pi\\sin(\\pi t); \\quad f(0)=1,\\ f(1)=-1,\\ f'(0)=0,\\ f'(1)=0.",
          explanation:
            "Both first derivatives vanish at the endpoints because \\( \\sin(\\pi\\cdot 0)=\\sin(\\pi)=0 \\), so the \\( 1/\\omega^2 \\) term is absent.",
          mafs: `<Mafs viewBox={{ x: [0, 6.4], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => Math.cos(15*t)*Math.cos(Math.PI*t)} domain={[0, 1]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => Math.cos(Math.PI*t)} domain={[0, 1]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => -Math.cos(Math.PI*t)} domain={[0, 1]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <Point x={1} y={-1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.2,1.0]} tex="\\pm\\cos\\pi t" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.0,-0.55]} tex="f'(0)=f'(1)=0" color="var(--mafs-fg-blue)" />
  <LaTeX at={[6.1,-0.2]} tex="t" />
</Mafs>`,
        },
        {
          stepNumber: 2,
          description: "Leading term.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[f(1)e^{i\\omega} - f(0)\\big] = \\frac{-e^{i\\omega} - 1}{i\\omega}.",
          explanation:
            "Using \\( f(1)=-1 \\), \\( f(0)=1 \\).",
        },
        {
          stepNumber: 3,
          description: "First non-zero correction.",
          workingLatex:
            "f''(t) = -\\pi^2\\cos(\\pi t); \\quad f''(0)=-\\pi^2,\\ f''(1)=\\pi^2.",
          explanation:
            "Because the \\( f' \\) term vanished, the next correction comes from \\( f'' \\) at order \\( 1/\\omega^3 \\).",
        },
        {
          stepNumber: 4,
          description: "Add the n = 2 term.",
          workingLatex:
            "-\\frac{1}{(-i\\omega)^3}\\big[f''(1)e^{i\\omega} - f''(0)\\big] = -\\frac{1}{i\\omega^3}\\big[\\pi^2 e^{i\\omega} + \\pi^2\\big].",
          explanation:
            "With \\( (-i\\omega)^3 = i\\omega^3 \\), the prefactor is \\( -1/(i\\omega^3) \\). The two surviving terms give the expansion below.",
        },
        {
          stepNumber: 5,
          description: "Assemble.",
          workingLatex:
            "I(\\omega) \\sim \\frac{-e^{i\\omega} - 1}{i\\omega} - \\frac{\\pi^2\\big(e^{i\\omega} + 1\\big)}{i\\omega^3}.",
          explanation:
            "The structure \\( \\sim 1/\\omega \\) then \\( 1/\\omega^3 \\) reflects the vanishing of the slope at both endpoints.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{-e^{i\\omega} - 1}{i\\omega} - \\dfrac{\\pi^2\\big(e^{i\\omega} + 1\\big)}{i\\omega^3} \\).",
    },
  },
  {
    id: "am5c-017",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 17",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "A signal has amplitude \\( f(t)=2 \\) for \\( -1 \\le t < 0 \\) and \\( f(t) = 2-t \\) for \\( 0 \\le t \\le 1 \\), and is zero outside \\( [-1,1] \\). Find the leading-order behaviour of \\( I(\\omega) = \\int_{-1}^{1} f(t)e^{i\\omega t}\\,dt \\) as \\( \\omega \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Fourier integral", "discontinuity", "interior contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check continuity at the join.",
          workingLatex:
            "f(0^-)=2, \\qquad f(0^+)=2-0=2 \\implies \\text{no jump at } t=0.",
          explanation:
            "The amplitude is continuous at \\( t=0 \\) (both pieces give \\( 2 \\)), so the interior point makes no leading-order contribution; only the two outer endpoints matter.",
        },
        {
          stepNumber: 2,
          description: "Endpoint values.",
          workingLatex:
            "f(-1)=2, \\qquad f(1)=2-1=1.",
          explanation:
            "These are the values used in the endpoint formula at \\( a=-1 \\), \\( b=1 \\).",
        },
        {
          stepNumber: 3,
          description: "Apply the endpoint formula.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[f(1)e^{i\\omega} - f(-1)e^{-i\\omega}\\big] = \\frac{1}{i\\omega}\\big[e^{i\\omega} - 2e^{-i\\omega}\\big].",
          explanation:
            "Because the join is continuous, the result looks like a smooth-amplitude integral over \\( [-1,1] \\): leading order \\( 1/\\omega \\) from the two ends only.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{1}{i\\omega}\\big[e^{i\\omega} - 2e^{-i\\omega}\\big] \\).",
    },
  },
  {
    id: "am5c-018",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 18",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading-order behaviour of \\( I(\\omega) = \\int_a^b f(t)e^{i\\omega t}\\,dt \\) when \\( f \\) is smooth and periodic with \\( f(a)=f(b) \\) and \\( e^{i\\omega a}=e^{i\\omega b} \\). Explain why the decay is faster than \\( 1/\\omega \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Fourier integral", "endpoint cancellation", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the leading endpoint term.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[f(b)e^{i\\omega b} - f(a)e^{i\\omega a}\\big].",
          explanation:
            "The usual leading endpoint contribution.",
        },
        {
          stepNumber: 2,
          description: "Impose the matching conditions.",
          workingLatex:
            "f(a)=f(b),\\quad e^{i\\omega a}=e^{i\\omega b} \\implies f(b)e^{i\\omega b} - f(a)e^{i\\omega a} = 0.",
          explanation:
            "The two endpoint terms cancel identically: the boundary contribution at order \\( 1/\\omega \\) is zero.",
        },
        {
          stepNumber: 3,
          description: "Examine the next term.",
          workingLatex:
            "I(\\omega) \\sim -\\frac{1}{(-i\\omega)^2}\\big[f'(b)e^{i\\omega b} - f'(a)e^{i\\omega a}\\big] = \\frac{1}{\\omega^2}\\big[f'(b) - f'(a)\\big]e^{i\\omega b}.",
          explanation:
            "With \\( e^{i\\omega a}=e^{i\\omega b} \\) the bracket is \\( [f'(b)-f'(a)]e^{i\\omega b} \\). The integral now decays like \\( 1/\\omega^2 \\) (and faster still if all derivatives match, as for a genuinely periodic \\( f \\)).",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{1}{\\omega^2}\\big[f'(b) - f'(a)\\big]e^{i\\omega b} \\) \\(-\\) the \\( 1/\\omega \\) term cancels.",
    },
  },

  // ─────────────────────────── CHALLENGE (12) ───────────────────────────
  // REVIEW: derivation of the general endpoint series (proof / index manipulation);
  // the leading and second terms were checked numerically (err scaling 1/w^2, 1/w^3),
  // but the all-orders closed form is an inductive statement not separately re-derived.
  {
    id: "am5c-019",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 19",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By repeated integration by parts, show that for \\( f \\) smooth on \\( [a,b] \\), \\( \\int_a^b f(t)e^{i\\omega t}\\,dt \\sim -\\sum_{n=0}^{\\infty} \\frac{1}{(-i\\omega)^{n+1}}\\big[f^{(n)}(b)e^{i\\omega b} - f^{(n)}(a)e^{i\\omega a}\\big] \\) as \\( \\omega \\to \\infty \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["Fourier integral", "asymptotic series", "integration by parts", "show that"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Integrate by parts once.",
          workingLatex:
            "I_0 := \\int_a^b f\\,e^{i\\omega t}\\,dt = \\frac{1}{i\\omega}\\Big[f e^{i\\omega t}\\Big]_a^b - \\frac{1}{i\\omega}\\int_a^b f' e^{i\\omega t}\\,dt.",
          explanation:
            "Integrate the oscillatory factor and differentiate \\( f \\). Define \\( I_k = \\int_a^b f^{(k)} e^{i\\omega t}\\,dt \\); then \\( I_0 \\) is expressed via a boundary term and \\( I_1 \\).",
        },
        {
          stepNumber: 2,
          description: "Set up the recursion.",
          workingLatex:
            "I_k = \\frac{1}{i\\omega}\\Big[f^{(k)} e^{i\\omega t}\\Big]_a^b - \\frac{1}{i\\omega} I_{k+1}.",
          explanation:
            "The same step applied to \\( I_k \\) relates it to the boundary term of \\( f^{(k)} \\) and the next integral \\( I_{k+1} \\). This recursion is the engine of the expansion.",
        },
        {
          stepNumber: 3,
          description: "Iterate the recursion.",
          workingLatex:
            "I_0 = \\sum_{n=0}^{N} \\left(\\frac{-1}{i\\omega}\\right)^{n}\\frac{1}{i\\omega}\\Big[f^{(n)} e^{i\\omega t}\\Big]_a^b + \\left(\\frac{-1}{i\\omega}\\right)^{N+1} I_{N+1}.",
          explanation:
            "Substituting the recursion into itself \\( N \\) times accumulates one boundary term per level, each carrying an extra factor \\( -1/(i\\omega) \\), plus a remainder integral.",
        },
        {
          stepNumber: 4,
          description: "Simplify the prefactor.",
          workingLatex:
            "\\left(\\frac{-1}{i\\omega}\\right)^{n}\\frac{1}{i\\omega} = \\frac{(-1)^n}{(i\\omega)^{n+1}} = -\\frac{1}{(-i\\omega)^{n+1}}.",
          explanation:
            "Since \\( (-1)^n/(i\\omega)^{n+1} = -(-1)^{n+1}/(i\\omega)^{n+1} = -1/(-i\\omega)^{n+1} \\). This puts the series into the stated form.",
        },
        {
          stepNumber: 5,
          description: "Bound the remainder.",
          workingLatex:
            "\\left|\\left(\\frac{-1}{i\\omega}\\right)^{N+1} I_{N+1}\\right| \\le \\frac{1}{\\omega^{N+1}}\\int_a^b |f^{(N+1)}|\\,dt = O\\!\\left(\\omega^{-(N+1)}\\right).",
          explanation:
            "The remainder is smaller than every retained term, so the series is asymptotic (it need not converge). This justifies the \\( \\sim \\) sign.",
        },
        {
          stepNumber: 6,
          description: "State the result.",
          workingLatex:
            "\\int_a^b f e^{i\\omega t}\\,dt \\sim -\\sum_{n=0}^{\\infty} \\frac{1}{(-i\\omega)^{n+1}}\\big[f^{(n)}(b)e^{i\\omega b} - f^{(n)}(a)e^{i\\omega a}\\big].",
          explanation:
            "Each term is a pure endpoint contribution; the whole asymptotic expansion is determined by the behaviour of \\( f \\) at the two limits.",
        },
      ],
      finalAnswer:
        "\\( \\displaystyle\\int_a^b f e^{i\\omega t}\\,dt \\sim -\\sum_{n=0}^{\\infty} \\frac{1}{(-i\\omega)^{n+1}}\\big[f^{(n)}(b)e^{i\\omega b} - f^{(n)}(a)e^{i\\omega a}\\big] \\).",
    },
  },
  {
    id: "am5c-020",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 20",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For the piecewise-exponential amplitude \\( f(t)=-e^{t} \\) (\\(t<0\\)), \\( e^{-t} \\) (\\(t\\ge 0\\)), use the interior-jump formula to obtain the leading asymptotics of \\( I(\\omega)=\\int_{-\\infty}^{\\infty} f e^{i\\omega t}\\,dt \\), and reconcile it with the exact result \\( 2i\\omega/(1+\\omega^2) \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["Fourier integral", "discontinuity", "exact comparison", "piecewise exponential"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the discontinuity.",
          workingLatex:
            "f(0^-) = -e^{0} = -1, \\qquad f(0^+) = e^{0} = 1, \\qquad [f] = f(0^+)-f(0^-) = 2.",
          explanation:
            "The only singular feature on the real line is a jump of size \\( 2 \\) at \\( t=0 \\); the amplitude decays at \\( \\pm\\infty \\), so the half-line endpoints contribute nothing.",
        },
        {
          stepNumber: 2,
          description: "Apply the jump formula.",
          workingLatex:
            "I(\\omega) \\sim -\\frac{e^{i\\omega\\cdot 0}}{i\\omega}\\,[f] = -\\frac{2}{i\\omega} = \\frac{2i}{\\omega}.",
          explanation:
            "Using \\( -1/i = i \\). The leading large-\\(\\omega\\) behaviour is \\( 2i/\\omega \\), an interior-jump contribution at order \\( 1/\\omega \\).",
        },
        {
          stepNumber: 3,
          description: "Expand the exact result.",
          workingLatex:
            "\\frac{2i\\omega}{1+\\omega^2} = \\frac{2i}{\\omega}\\left(1 - \\frac{1}{\\omega^2} + \\cdots\\right) = \\frac{2i}{\\omega} - \\frac{2i}{\\omega^3} + \\cdots.",
          explanation:
            "Dividing through by \\( \\omega^2 \\) and expanding geometrically.",
        },
        {
          stepNumber: 4,
          description: "Reconcile.",
          workingLatex:
            "I(\\omega) \\sim \\frac{2i}{\\omega} \\quad \\checkmark \\text{ matches the leading term of } \\frac{2i\\omega}{1+\\omega^2}.",
          explanation:
            "The jump-formula leading term agrees exactly with the leading term of the exact transform, confirming the interior-discontinuity rule.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{2i}{\\omega} \\), matching \\( \\dfrac{2i\\omega}{1+\\omega^2} \\sim \\dfrac{2i}{\\omega} \\).",
    },
  },
  {
    id: "am5c-021",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 21",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "A pulse has amplitude \\( f(t)=e^{t} \\) for \\( -1 \\le t < 0 \\) and \\( f(t)=e^{-2t} \\) for \\( 0 \\le t \\le 1 \\), and is zero outside \\( [-1,1] \\). Find the leading-order behaviour of \\( I(\\omega) = \\int_{-1}^{1} f(t)e^{i\\omega t}\\,dt \\) as \\( \\omega \\to \\infty \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["Fourier integral", "discontinuity", "interior contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test continuity at the interior join.",
          workingLatex:
            "f(0^-) = e^{0} = 1, \\qquad f(0^+) = e^{0} = 1 \\implies \\text{continuous at } t=0.",
          explanation:
            "Both pieces give \\( 1 \\) at \\( t=0 \\), so there is NO jump in \\( f \\) itself; the interior point contributes nothing at order \\( 1/\\omega \\). (The slope does jump, affecting only \\( 1/\\omega^2 \\).)",
          mafs: `<Mafs viewBox={{ x: [-3.2, 3.2], y: [-1.45, 1.45], padding: 0 }} height={218}>
  <Coordinates.Cartesian xAxis={{ lines: false, labels: false }} yAxis={{ lines: false, labels: false }} />
  <Plot.OfX y={(t) => (Math.abs(t) <= 1 ? Math.cos(13*t)*(t < 0 ? Math.exp(t) : Math.exp(-2*t)) : 0)} domain={[-1, 1]} color="var(--mafs-fg-accent)" />
  <Plot.OfX y={(t) => (Math.abs(t) <= 1 ? (t < 0 ? Math.exp(t) : Math.exp(-2*t)) : 0)} domain={[-1, 1]} color="var(--mafs-fg-orange)" style="dashed" />
  <Plot.OfX y={(t) => (Math.abs(t) <= 1 ? -(t < 0 ? Math.exp(t) : Math.exp(-2*t)) : 0)} domain={[-1, 1]} color="var(--mafs-fg-orange)" style="dashed" />
  <Point x={0} y={1} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.3,1.25]} tex="\\text{kink, no jump}" color="var(--mafs-fg-blue)" />
  <LaTeX at={[-2.3,0.7]} tex="\\pm f(t)" color="var(--mafs-fg-orange)" />
  <LaTeX at={[2.95,-0.2]} tex="t" />
</Mafs>`,
        },
        {
          stepNumber: 2,
          description: "Endpoint values of the amplitude.",
          workingLatex:
            "f(-1) = e^{-1}, \\qquad f(1) = e^{-2}.",
          explanation:
            "Only the genuine outer endpoints \\( a=-1 \\), \\( b=1 \\) drive leading order.",
        },
        {
          stepNumber: 3,
          description: "Apply the endpoint formula.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[f(1)e^{i\\omega} - f(-1)e^{-i\\omega}\\big] = \\frac{1}{i\\omega}\\big[e^{-2}e^{i\\omega} - e^{-1}e^{-i\\omega}\\big].",
          explanation:
            "Because the join is continuous, this is exactly the smooth-amplitude leading behaviour over \\( [-1,1] \\); the kink at the origin is invisible at this order.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{1}{i\\omega}\\big[e^{-2}e^{i\\omega} - e^{-1}e^{-i\\omega}\\big] \\).",
    },
  },
  {
    id: "am5c-022",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 22",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Compare the smooth and discontinuous cases: find the leading behaviour of (i) \\( \\int_0^1 t\\, e^{i\\omega t}\\,dt \\), and (ii) \\( \\int_0^2 g(t)e^{i\\omega t}\\,dt \\) where \\( g(t)=t \\) on \\( [0,1) \\) and \\( g(t)=t-1 \\) on \\( [1,2] \\). Explain the difference in their decay.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Fourier integral", "discontinuity", "interior contribution", "endpoint cancellation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Case (i): smooth amplitude.",
          workingLatex:
            "\\int_0^1 t e^{i\\omega t}\\,dt \\sim \\frac{1}{i\\omega}\\big[1\\cdot e^{i\\omega} - 0\\big] = \\frac{e^{i\\omega}}{i\\omega}.",
          explanation:
            "\\( f(t)=t \\) vanishes at the lower limit, so the upper endpoint alone gives the \\( 1/\\omega \\) leading term.",
        },
        {
          stepNumber: 2,
          description: "Case (ii): locate the jump.",
          workingLatex:
            "g(1^-) = 1, \\qquad g(1^+) = 1-1 = 0, \\qquad [g] = g(1^+)-g(1^-) = -1.",
          explanation:
            "The sawtooth \\( g \\) drops by \\( 1 \\) at \\( t=1 \\); it also vanishes at \\( t=0 \\) and equals \\( 1 \\) at \\( t=2 \\).",
        },
        {
          stepNumber: 3,
          description: "Case (ii): endpoint contributions.",
          workingLatex:
            "I_{\\text{ends}} \\sim \\frac{1}{i\\omega}\\big[g(2)e^{2i\\omega} - g(0)\\big] = \\frac{e^{2i\\omega}}{i\\omega}.",
          explanation:
            "Outer endpoints: \\( g(2)=1 \\), \\( g(0)=0 \\).",
        },
        {
          stepNumber: 4,
          description: "Case (ii): jump contribution.",
          workingLatex:
            "I_{\\text{jump}} \\sim -\\frac{e^{i\\omega}}{i\\omega}\\,[g] = -\\frac{e^{i\\omega}}{i\\omega}(-1) = \\frac{e^{i\\omega}}{i\\omega}.",
          explanation:
            "The jump \\( -1 \\) at \\( c=1 \\) contributes at the same \\( 1/\\omega \\) order as a true endpoint.",
        },
        {
          stepNumber: 5,
          description: "Case (ii): combine.",
          workingLatex:
            "\\int_0^2 g e^{i\\omega t}\\,dt \\sim \\frac{1}{i\\omega}\\big[e^{2i\\omega} + e^{i\\omega}\\big].",
          explanation:
            "Both pieces decay like \\( 1/\\omega \\): the jump matters just as much as the boundary.",
        },
        {
          stepNumber: 6,
          description: "Interpret the difference.",
          workingLatex:
            "\\text{(i): } O(1/\\omega) \\text{ from one endpoint}; \\quad \\text{(ii): } O(1/\\omega) \\text{ from endpoint + jump}.",
          explanation:
            "Both decay at the same rate \\( 1/\\omega \\); the discontinuity does not slow the decay but adds an extra oscillatory term \\( e^{i\\omega}/(i\\omega) \\). Discontinuities are as important as endpoints in setting the leading amplitude.",
        },
      ],
      finalAnswer:
        "\\( \\text{(i) } \\dfrac{e^{i\\omega}}{i\\omega}; \\quad \\text{(ii) } \\dfrac{1}{i\\omega}\\big(e^{2i\\omega} + e^{i\\omega}\\big) \\) \\(-\\) both \\( O(1/\\omega) \\).",
    },
  },
  {
    id: "am5c-023",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 23",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading-order behaviour of \\( I(\\omega) = \\int_0^1 (1-t)^2\\,e^{i\\omega t}\\,dt \\) as \\( \\omega \\to \\infty \\), being careful about which endpoint dominates. Determine the leading power of \\( 1/\\omega \\) and its coefficient.",
    marks: 5,
    yearCreated: 2026,
    tags: ["Fourier integral", "endpoint contribution", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Endpoint data for the amplitude.",
          workingLatex:
            "f(t)=(1-t)^2,\\ f'(t)=-2(1-t),\\ f''(t)=2; \\quad f(0)=1,\\ f(1)=0,\\ f'(1)=0,\\ f''(1)=2.",
          explanation:
            "At the upper limit both \\( f(1)=0 \\) and \\( f'(1)=0 \\): the amplitude has a double zero there, so the \\( t=1 \\) endpoint is heavily suppressed.",
        },
        {
          stepNumber: 2,
          description: "Leading term from the lower endpoint.",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\big[f(1)e^{i\\omega} - f(0)\\big] = \\frac{1}{i\\omega}\\big[0 - 1\\big] = -\\frac{1}{i\\omega} = \\frac{i}{\\omega}.",
          explanation:
            "Only the lower endpoint \\( t=0 \\) survives at order \\( 1/\\omega \\), because \\( f(1)=0 \\). The upper endpoint enters only at order \\( 1/\\omega^3 \\) (since \\( f' \\) also vanishes there).",
        },
        {
          stepNumber: 3,
          description: "State leading power and coefficient.",
          workingLatex:
            "I(\\omega) \\sim \\frac{i}{\\omega}, \\qquad \\text{leading power } \\omega^{-1}, \\ \\text{coefficient } i.",
          explanation:
            "The double zero at \\( t=1 \\) removes its \\( 1/\\omega \\) and \\( 1/\\omega^2 \\) contributions; the constant value \\( f(0)=1 \\) at the lower limit dominates.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{i}{\\omega} \\) (leading power \\( \\omega^{-1} \\), coefficient \\( i \\)).",
    },
  },
  {
    id: "am5c-024",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 24",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "For \\( \\omega \\neq 1 \\), evaluate \\( I(\\omega) = \\int_0^{\\pi} \\sin t\\,e^{i\\omega t}\\,dt \\) in closed form, then deduce its leading-order behaviour as \\( \\omega \\to \\infty \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["Fourier integral", "exact comparison", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the sine in exponential form.",
          workingLatex:
            "\\sin t = \\frac{e^{it} - e^{-it}}{2i} \\implies I(\\omega) = \\frac{1}{2i}\\int_0^{\\pi}\\big(e^{i(\\omega+1)t} - e^{i(\\omega-1)t}\\big)\\,dt.",
          explanation:
            "Converting to exponentials turns the product into two elementary oscillatory integrals.",
        },
        {
          stepNumber: 2,
          description: "Integrate each exponential.",
          workingLatex:
            "I(\\omega) = \\frac{1}{2i}\\left[\\frac{e^{i(\\omega+1)\\pi} - 1}{i(\\omega+1)} - \\frac{e^{i(\\omega-1)\\pi} - 1}{i(\\omega-1)}\\right].",
          explanation:
            "Standard antiderivatives \\( \\int_0^\\pi e^{i\\alpha t}\\,dt = (e^{i\\alpha\\pi}-1)/(i\\alpha) \\) for \\( \\alpha=\\omega\\pm1 \\).",
        },
        {
          stepNumber: 3,
          description: "Use the phase identity at t = pi.",
          workingLatex:
            "e^{i(\\omega\\pm1)\\pi} = e^{i\\omega\\pi}e^{\\pm i\\pi} = -e^{i\\omega\\pi}.",
          explanation:
            "Since \\( e^{\\pm i\\pi}=-1 \\), both numerators share the factor \\( -e^{i\\omega\\pi}-1 \\).",
        },
        {
          stepNumber: 4,
          description: "Factor and combine.",
          workingLatex:
            "I(\\omega) = \\frac{-(e^{i\\omega\\pi}+1)}{2i^2}\\left[\\frac{1}{\\omega+1} - \\frac{1}{\\omega-1}\\right] = \\frac{e^{i\\omega\\pi}+1}{2}\\cdot\\frac{-2}{\\omega^2-1}.",
          explanation:
            "Using \\( i^2=-1 \\) and \\( \\frac{1}{\\omega+1}-\\frac{1}{\\omega-1} = \\frac{-2}{\\omega^2-1} \\).",
        },
        {
          stepNumber: 5,
          description: "Closed form.",
          workingLatex:
            "I(\\omega) = \\frac{1 + e^{i\\pi\\omega}}{1 - \\omega^2}.",
          explanation:
            "Tidying signs gives the compact exact result, valid for \\( \\omega\\neq\\pm1 \\).",
        },
        {
          stepNumber: 6,
          description: "Leading large-omega behaviour.",
          workingLatex:
            "I(\\omega) = \\frac{1 + e^{i\\pi\\omega}}{1-\\omega^2} \\sim -\\frac{1 + e^{i\\pi\\omega}}{\\omega^2}, \\qquad \\omega \\to \\infty.",
          explanation:
            "The \\( 1/\\omega \\) endpoint terms cancel because \\( \\sin 0 = \\sin\\pi = 0 \\) (the amplitude vanishes at BOTH limits), leaving decay at order \\( 1/\\omega^2 \\), governed by \\( f'(0)=1 \\), \\( f'(\\pi)=-1 \\).",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) = \\dfrac{1 + e^{i\\pi\\omega}}{1 - \\omega^2} \\sim -\\dfrac{1 + e^{i\\pi\\omega}}{\\omega^2} \\).",
      canonicalAnswer: "(1 + exp(i*pi*w))/(1 - w^2)",
    },
  },
  {
    id: "am5c-025",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 25",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the asymptotic expansion to two terms, as \\( \\omega \\to \\infty \\), of \\( I(\\omega) = \\int_0^1 e^{t}\\,e^{i\\omega t}\\,dt \\), and confirm both terms by expanding the exact closed form \\( (e^{1+i\\omega}-1)/(1+i\\omega) \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["Fourier integral", "asymptotic series", "exact comparison"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Closed form.",
          workingLatex:
            "I(\\omega) = \\int_0^1 e^{(1+i\\omega)t}\\,dt = \\frac{e^{1+i\\omega} - 1}{1+i\\omega}.",
          explanation:
            "Elementary, since the integrand is a single exponential.",
        },
        {
          stepNumber: 2,
          description: "Expand the denominator for large omega.",
          workingLatex:
            "\\frac{1}{1+i\\omega} = \\frac{1}{i\\omega}\\cdot\\frac{1}{1 + \\frac{1}{i\\omega}} = \\frac{1}{i\\omega}\\left(1 - \\frac{1}{i\\omega} + \\cdots\\right).",
          explanation:
            "Factor out \\( i\\omega \\) and use the geometric series in \\( 1/(i\\omega) \\).",
        },
        {
          stepNumber: 3,
          description: "Multiply by the numerator.",
          workingLatex:
            "I(\\omega) \\sim \\frac{e^{1+i\\omega} - 1}{i\\omega} - \\frac{e^{1+i\\omega} - 1}{(i\\omega)^2} = \\frac{e^{1+i\\omega} - 1}{i\\omega} + \\frac{e^{1+i\\omega} - 1}{\\omega^2}.",
          explanation:
            "Using \\( (i\\omega)^2 = -\\omega^2 \\), the second term becomes \\( +(e^{1+i\\omega}-1)/\\omega^2 \\).",
        },
        {
          stepNumber: 4,
          description: "Cross-check with integration by parts.",
          workingLatex:
            "f^{(n)}(t)=e^{t}: \\quad -\\frac{1}{-i\\omega}[e\\,e^{i\\omega}-1] - \\frac{1}{(-i\\omega)^2}[e\\,e^{i\\omega}-1].",
          explanation:
            "The IBP series with \\( f=e^t \\) gives \\( \\frac{e^{1+i\\omega}-1}{i\\omega} + \\frac{e^{1+i\\omega}-1}{\\omega^2} \\), identical to the closed-form expansion. Both terms agree.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{e^{1+i\\omega} - 1}{i\\omega} + \\dfrac{e^{1+i\\omega} - 1}{\\omega^2} \\).",
    },
  },
  {
    id: "am5c-026",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 26",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "A signal is \\( f(t)=\\cos t \\) on \\( [0,\\pi/2) \\) and \\( f(t)=0 \\) on \\( [\\pi/2,\\pi] \\). Find the leading-order behaviour of \\( I(\\omega) = \\int_0^{\\pi} f(t)e^{i\\omega t}\\,dt \\) as \\( \\omega \\to \\infty \\), accounting for every contributing feature.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Fourier integral", "discontinuity", "interior contribution", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Reduce to a single smooth piece.",
          workingLatex:
            "I(\\omega) = \\int_0^{\\pi/2} \\cos t\\,e^{i\\omega t}\\,dt,",
          explanation:
            "The second piece is identically zero, so the integral runs only over \\( [0,\\pi/2] \\), where \\( \\cos t \\) is smooth.",
        },
        {
          stepNumber: 2,
          description: "Identify the features at the two ends.",
          workingLatex:
            "f(0)=\\cos 0 = 1, \\qquad f\\!\\left(\\tfrac{\\pi}{2}^-\\right)=\\cos\\tfrac{\\pi}{2} = 0.",
          explanation:
            "At the upper limit the amplitude reaches \\( 0 \\), so there is no jump there (the function and the zero piece match). Only the lower endpoint carries a non-zero value.",
        },
        {
          stepNumber: 3,
          description: "Apply the endpoint formula over [0, pi/2].",
          workingLatex:
            "I(\\omega) \\sim \\frac{1}{i\\omega}\\Big[ f\\!\\left(\\tfrac{\\pi}{2}\\right)e^{i\\omega\\pi/2} - f(0) \\Big] = \\frac{1}{i\\omega}\\big[0 - 1\\big] = -\\frac{1}{i\\omega}.",
          explanation:
            "With \\( f(\\pi/2)=0 \\) the upper limit drops out; the lower endpoint value \\( 1 \\) dominates.",
        },
        {
          stepNumber: 4,
          description: "Simplify.",
          workingLatex:
            "I(\\omega) \\sim -\\frac{1}{i\\omega} = \\frac{i}{\\omega}, \\qquad \\omega \\to \\infty.",
          explanation:
            "Because the amplitude is continuous (value and zero piece both \\( 0 \\)) at \\( \\pi/2 \\), there is no extra jump term; the leading behaviour is just the lower-endpoint contribution \\( i/\\omega \\).",
        },
      ],
      finalAnswer: "\\( I(\\omega) \\sim \\dfrac{i}{\\omega} \\).",
    },
  },
  {
    id: "am5c-027",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 27",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show that for \\( f \\) smooth on \\( [a,b] \\) with \\( f(a)=f(b)=0 \\) and \\( f'(a)=f'(b)=0 \\), the Fourier integral \\( \\int_a^b f e^{i\\omega t}\\,dt \\) decays faster than any inverse power if \\( f \\) is in fact \\( C^\\infty \\) with all derivatives vanishing at both ends. State the decay when only the first two derivatives vanish.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Fourier integral", "endpoint cancellation", "asymptotic series", "show that"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the endpoint series.",
          workingLatex:
            "\\int_a^b f e^{i\\omega t}\\,dt \\sim -\\sum_{n=0}^{\\infty}\\frac{1}{(-i\\omega)^{n+1}}\\big[f^{(n)}(b)e^{i\\omega b} - f^{(n)}(a)e^{i\\omega a}\\big].",
          explanation:
            "Every term in the asymptotic series is built only from boundary values of derivatives of \\( f \\).",
        },
        {
          stepNumber: 2,
          description: "Kill the first terms.",
          workingLatex:
            "f(a)=f(b)=0 \\implies n=0 \\text{ term } = 0; \\quad f'(a)=f'(b)=0 \\implies n=1 \\text{ term } = 0.",
          explanation:
            "Each vanishing boundary derivative removes one term from the series.",
        },
        {
          stepNumber: 3,
          description: "Two derivatives vanish: leading term is n = 2.",
          workingLatex:
            "\\int_a^b f e^{i\\omega t}\\,dt \\sim -\\frac{1}{(-i\\omega)^3}\\big[f''(b)e^{i\\omega b} - f''(a)e^{i\\omega a}\\big] = O\\!\\left(\\frac{1}{\\omega^3}\\right).",
          explanation:
            "With \\( f \\) and \\( f' \\) vanishing at both ends, the first surviving term is the \\( n=2 \\) one, giving decay \\( 1/\\omega^3 \\).",
        },
        {
          stepNumber: 4,
          description: "All derivatives vanish: super-algebraic decay.",
          workingLatex:
            "f^{(n)}(a)=f^{(n)}(b)=0 \\ \\forall n \\implies \\text{every term } = 0 \\implies I(\\omega) = o(\\omega^{-N}) \\ \\forall N.",
          explanation:
            "If all boundary derivatives vanish (e.g. a bump function), the asymptotic series is identically zero: the integral decays faster than any inverse power. The decay is then exponential, set by the analytic structure of \\( f \\), not by the endpoints.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) = O(\\omega^{-3}) \\) when \\( f,f' \\) vanish at both ends; faster than any power (super-algebraic) when all derivatives vanish.",
    },
  },
  {
    id: "am5c-028",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 28",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading large-\\(\\omega\\) behaviour of \\( I(\\omega) = \\int_{-\\infty}^{\\infty} \\frac{1}{1+t^2}\\,e^{i\\omega t}\\,dt \\) and contrast it with the algebraic decay seen for amplitudes with jumps or endpoints.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Fourier integral", "exact comparison", "exponential decay"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise a standard transform.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} \\frac{e^{i\\omega t}}{1+t^2}\\,dt = \\pi e^{-|\\omega|}.",
          explanation:
            "By closing the contour in the upper half-plane (for \\( \\omega>0 \\)) and using the residue at \\( t=i \\): \\( 2\\pi i\\cdot\\frac{e^{i\\omega(i)}}{2i} = \\pi e^{-\\omega} \\).",
        },
        {
          stepNumber: 2,
          description: "Read off the decay.",
          workingLatex:
            "I(\\omega) = \\pi e^{-\\omega}, \\qquad \\omega \\to +\\infty.",
          explanation:
            "The transform decays EXPONENTIALLY, not algebraically.",
        },
        {
          stepNumber: 3,
          description: "Contrast with endpoint/jump cases.",
          workingLatex:
            "\\text{No real endpoints, } f\\in C^{\\infty}(\\mathbb{R}), \\text{ no jumps} \\implies \\text{no } 1/\\omega^k \\text{ terms}.",
          explanation:
            "There are no real-line endpoints and \\( f \\) is infinitely smooth, so the entire inverse-power asymptotic series vanishes. The decay is controlled instead by the nearest singularity of \\( f \\) in the complex \\( t \\)-plane, at \\( t=\\pm i \\), giving the exponential rate \\( e^{-|\\omega|} \\).",
        },
        {
          stepNumber: 4,
          description: "State the conclusion.",
          workingLatex:
            "I(\\omega) \\sim \\pi e^{-\\omega} \\quad (\\text{exponential}) \\ \\neq\\ O(\\omega^{-1}) \\ (\\text{endpoint/jump}).",
          explanation:
            "Smoothness over the whole real line with no boundary turns algebraic endpoint decay into exponential decay \\(-\\) the qualitative dividing line for Fourier integrals with smooth amplitude.",
        },
      ],
      finalAnswer: "\\( I(\\omega) = \\pi e^{-\\omega} \\) (exponentially small, not algebraic).",
    },
  },
  {
    id: "am5c-029",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 29",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "A waveform is \\( f(t)=t \\) on \\( [0,1) \\), with a jump to \\( f(t)=t-2 \\) on \\( [1,2] \\). Find the asymptotic expansion to two terms, as \\( \\omega \\to \\infty \\), of \\( I(\\omega)=\\int_0^2 f(t)e^{i\\omega t}\\,dt \\), including both endpoint and jump contributions at each order.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Fourier integral", "discontinuity", "asymptotic series", "interior contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Catalogue endpoint and jump data.",
          workingLatex:
            "f(0)=0,\\ f(2)=0;\\quad f(1^-)=1,\\ f(1^+)=-1,\\ [f]=-2;\\quad f'(t)=1 \\text{ on both pieces}.",
          explanation:
            "The amplitude vanishes at both outer ends; the slope is \\( 1 \\) everywhere; there is a jump \\( [f]=f(1^+)-f(1^-)=-2 \\) at \\( c=1 \\). The slope is continuous across the jump (\\( f'(1^-)=f'(1^+)=1 \\)).",
        },
        {
          stepNumber: 2,
          description: "Leading order: endpoints.",
          workingLatex:
            "I_{\\text{ends}}^{(1)} \\sim \\frac{1}{i\\omega}\\big[f(2)e^{2i\\omega} - f(0)\\big] = 0.",
          explanation:
            "Both \\( f(0) \\) and \\( f(2) \\) vanish, so the outer endpoints give nothing at order \\( 1/\\omega \\).",
        },
        {
          stepNumber: 3,
          description: "Leading order: jump.",
          workingLatex:
            "I_{\\text{jump}}^{(1)} \\sim -\\frac{e^{i\\omega}}{i\\omega}\\,[f] = -\\frac{e^{i\\omega}}{i\\omega}(-2) = \\frac{2e^{i\\omega}}{i\\omega}.",
          explanation:
            "The entire \\( 1/\\omega \\) leading term comes from the interior jump.",
        },
        {
          stepNumber: 4,
          description: "Next order: endpoint derivative term.",
          workingLatex:
            "I_{\\text{ends}}^{(2)} \\sim \\frac{1}{\\omega^2}\\big[f'(2)e^{2i\\omega} - f'(0)\\big] = \\frac{1}{\\omega^2}\\big[e^{2i\\omega} - 1\\big].",
          explanation:
            "From the \\( n=1 \\) term \\( -\\frac{1}{(-i\\omega)^2}[f'(b)e^{i\\omega b}-f'(a)e^{i\\omega a}] = \\frac{1}{\\omega^2}[f'(b)e^{i\\omega b}-f'(a)e^{i\\omega a}] \\), with \\( f'=1 \\) at both ends.",
        },
        {
          stepNumber: 5,
          description: "Next order: jump derivative term.",
          workingLatex:
            "[f'] = f'(1^+)-f'(1^-) = 1 - 1 = 0 \\implies \\text{no } 1/\\omega^2 \\text{ jump contribution}.",
          explanation:
            "The slope is continuous at \\( c=1 \\), so the jump adds nothing at the second order.",
        },
        {
          stepNumber: 6,
          description: "Assemble.",
          workingLatex:
            "I(\\omega) \\sim \\frac{2e^{i\\omega}}{i\\omega} + \\frac{e^{2i\\omega} - 1}{\\omega^2}, \\qquad \\omega \\to \\infty.",
          explanation:
            "Leading \\( 1/\\omega \\) is purely the jump; the \\( 1/\\omega^2 \\) correction is purely the endpoints. The two singular features feed different orders here.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) \\sim \\dfrac{2e^{i\\omega}}{i\\omega} + \\dfrac{e^{2i\\omega} - 1}{\\omega^2} \\).",
    },
  },
  {
    id: "am5c-030",
    topicRef: "am5c",
    topicTitle: "Fourier integrals with smooth amplitude 30",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Generalise the piecewise-exponential example: for \\( f(t)=-e^{\\alpha t} \\) (\\(t<0\\)) and \\( f(t)=e^{-\\beta t} \\) (\\(t\\ge 0\\)) with \\( \\alpha,\\beta>0 \\), compute the exact transform \\( I(\\omega)=\\int_{-\\infty}^{\\infty} f e^{i\\omega t}\\,dt \\) and find its leading asymptotics, checking consistency with the jump rule.",
    marks: 6,
    yearCreated: 2026,
    tags: ["Fourier integral", "exact comparison", "discontinuity", "piecewise exponential"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate the two half-line integrals.",
          workingLatex:
            "\\int_{-\\infty}^{0}\\!\\!-e^{(\\alpha+i\\omega)t}\\,dt = -\\frac{1}{\\alpha+i\\omega}, \\qquad \\int_{0}^{\\infty}\\!\\! e^{(i\\omega-\\beta)t}\\,dt = \\frac{1}{\\beta - i\\omega}.",
          explanation:
            "Each converges because \\( \\alpha,\\beta>0 \\) make the integrand decay at the relevant infinity.",
        },
        {
          stepNumber: 2,
          description: "Combine.",
          workingLatex:
            "I(\\omega) = -\\frac{1}{\\alpha+i\\omega} + \\frac{1}{\\beta-i\\omega} = \\frac{-(\\beta - i\\omega) + (\\alpha + i\\omega)}{(\\alpha+i\\omega)(\\beta-i\\omega)}.",
          explanation:
            "Common denominator \\( (\\alpha+i\\omega)(\\beta-i\\omega) \\).",
        },
        {
          stepNumber: 3,
          description: "Simplify the numerator.",
          workingLatex:
            "I(\\omega) = \\frac{(\\alpha - \\beta) + 2i\\omega}{(\\alpha+i\\omega)(\\beta-i\\omega)} = \\frac{(\\alpha-\\beta) + 2i\\omega}{\\alpha\\beta + \\omega^2 + i\\omega(\\beta-\\alpha)}.",
          explanation:
            "Expanding the denominator: \\( (\\alpha+i\\omega)(\\beta-i\\omega) = \\alpha\\beta + i\\omega(\\beta-\\alpha) + \\omega^2 \\).",
        },
        {
          stepNumber: 4,
          description: "Leading asymptotics from the exact form.",
          workingLatex:
            "I(\\omega) = \\frac{2i\\omega + (\\alpha-\\beta)}{\\omega^2 + i\\omega(\\beta-\\alpha) + \\alpha\\beta} \\sim \\frac{2i\\omega}{\\omega^2} = \\frac{2i}{\\omega}.",
          explanation:
            "Keeping only the highest powers of \\( \\omega \\) in numerator (\\( 2i\\omega \\)) and denominator (\\( \\omega^2 \\)).",
        },
        {
          stepNumber: 5,
          description: "Compute the jump and apply the rule.",
          workingLatex:
            "f(0^-) = -1,\\ f(0^+) = 1 \\implies [f]=2; \\quad I_{\\text{jump}} \\sim -\\frac{[f]}{i\\omega} = \\frac{2i}{\\omega}.",
          explanation:
            "Independently of \\( \\alpha,\\beta \\), the jump at \\( t=0 \\) is always \\( 2 \\) (the amplitudes are normalised to \\( \\mp 1 \\) there), so the leading term is universal.",
        },
        {
          stepNumber: 6,
          description: "Consistency check.",
          workingLatex:
            "\\frac{2i}{\\omega} \\ (\\text{exact}) = \\frac{2i}{\\omega} \\ (\\text{jump rule}) \\quad \\checkmark",
          explanation:
            "The leading \\( 1/\\omega \\) behaviour is fixed entirely by the size of the jump and is independent of the decay rates \\( \\alpha,\\beta \\), which influence only the higher-order corrections.",
        },
      ],
      finalAnswer:
        "\\( I(\\omega) = \\dfrac{2i\\omega + (\\alpha-\\beta)}{(\\alpha+i\\omega)(\\beta-i\\omega)} \\sim \\dfrac{2i}{\\omega} \\), consistent with the jump rule.",
    },
  },
];
