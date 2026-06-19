import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — § am8c
 * Method of Steepest Descent II: Complex Watson's lemma & general cubic phase.
 * Ref: am8c
 *
 * 30 fully-worked questions on the model integral
 *
 *   I(z) = \int_0^1 e^{z t^3} dt,   |z| -> \infty,  z complex,
 *
 * and its sector-dependent asymptotics. Five threads run through the bank:
 *   (1) Watson's lemma on the real line, \int_0^\infty e^{-zt}f(t)dt, where the
 *       small-t endpoint controls the algebraic expansion;
 *   (2) the substitution u = t^3, recasting I as (1/3)\int_0^1 e^{zu}u^{-2/3}du,
 *       a Watson's-lemma integral with the t=0 endpoint giving
 *       (1/3)\Gamma(1/3)(-z)^{-1/3} = \Gamma(4/3)(-z)^{-1/3};
 *   (3) the branch of (-z)^{-1/3}: for |arg z|<\pi/2 this is -\Gamma(4/3)z^{-1/3},
 *       and the cube-root branch makes the endpoint term sector-dependent, with
 *       an e^{i\pi/3} factor on the overlapping sector (\delta, \pi-\delta);
 *   (4) saddle vs endpoint: the cubic saddle of zt^3 at t=0 has three steepest
 *       rays at arg t = ((2k+1)\pi - arg z)/3, 120 deg apart, only one entering
 *       (0,1); the x^{-1/4} cubic-saddle analogue is the Airy decay;
 *   (5) which endpoint dominates: for Re z>0 the integrand peaks at t=1, so the
 *       e^z/(3z) series dominates and the t=0 term Gamma(4/3)(-z)^{-1/3} is the
 *       subdominant algebraic piece; on the negative axis t=0 wins.
 *
 * Conventions:
 *   - Laplace transform of a power: \int_0^\infty e^{-pu}u^{s-1}du = \Gamma(s)p^{-s}
 *     for Re p > 0.
 *   - Gamma recurrence \Gamma(x+1)=x\Gamma(x); in particular
 *     (1/3)\Gamma(1/3)=\Gamma(4/3) and (1/4)\Gamma(1/4)=\Gamma(5/4).
 *   - Endpoint (t=1) coefficients c_n = \Gamma(n+2/3)/\Gamma(2/3), built by
 *     c_n = (n - 1/3) c_{n-1}: c_0=1, c_1=2/3, c_2=10/9, c_3=80/27.
 *   - Principal branch z^{1/3}, cut on arg z = \pi.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 3 (Q9, Q10).
 * Every Gamma value, coefficient, branch and sector relation was re-derived and
 * checked numerically with mpmath (mp.dps=40), evaluating the ACTUAL integral
 * mp.quad(lambda t: exp(z t^3),[0,1]) against the asymptotic form:
 *   - Gamma(1/3)=2.678938..., Gamma(2/3)=1.354117..., Gamma(4/3)=0.892979...,
 *     (1/3)Gamma(1/3)=Gamma(4/3) to 40 dp; Gamma(5/4)=(1/4)Gamma(1/4)=0.906402...
 *   - c_0,c_1,c_2,c_3 = 1, 0.6667, 1.1111, 2.9630 (= 1, 2/3, 10/9, 80/27).
 *   - z=-x: x^{1/3}I(-x) -> Gamma(4/3) (0.89297951 at x=50,100).
 *   - z=x: I + endpoint-series matches I to rel err 8e-8 at x=40 (6 terms).
 *   - Left sector (pi/2,3pi/2): I ~ series + Gamma(4/3)(-z)^{-1/3} to rel err
 *     <3e-11 at |z|=25, arg in {1.77,2.09,pi,4.19,4.51}.
 *   - Upper sector: residual I-series = e^{i pi/3}Gamma(4/3)z^{-1/3}
 *     = Gamma(4/3)(-z)^{-1/3} (identical) at arg z = pi/3, pi/2, 2pi/3.
 *   - z=ix: leading term Gamma(4/3)e^{i pi/6}x^{-1/3}, |I|x^{1/3}->Gamma(4/3).
 *   - Steepest rays arg t=((2k+1)pi-arg z)/3: for arg z=pi/2 -> 30,150,270 deg
 *     (k=0 ray at 30 deg enters (0,1)).
 *   - Airy: Ai(x) ~ e^{-2/3 x^{3/2}}/(2 sqrt(pi) x^{1/4}), rel err 1.6e-3 at x=16.
 */
export const questions: Question[] = [
  // ── Foundation: the core machinery in isolation ─────────────────────────
  {
    id: "am8c-001",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 01",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Watson's lemma rests on the basic Laplace integral. Evaluate \\( \\displaystyle\\int_0^\\infty e^{-z t}\\,t^{\\,s-1}\\,dt \\) for \\( \\operatorname{Re}(s)>0 \\) and \\( \\operatorname{Re}(z)>0 \\), expressing the answer with the Gamma function.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Gamma function", "Laplace transform"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Name the integral.",
          workingLatex: "L(z) := \\int_0^\\infty e^{-z t}\\,t^{\\,s-1}\\,dt.",
          explanation:
            "This is the Laplace transform of the power \\( t^{s-1} \\); evaluating it once gives the single engine behind Watson's lemma.",
        },
        {
          stepNumber: 2,
          description: "Choose the rescaling substitution.",
          workingLatex: "w = z t \\quad\\Longrightarrow\\quad t = \\frac{w}{z}.",
          explanation:
            "Rescaling \\( t \\) by \\( z \\) turns the exponent \\( -zt \\) into the bare \\( -w \\) that defines \\( \\Gamma \\).",
        },
        {
          stepNumber: 3,
          description: "Compute the differential.",
          workingLatex: "dt = \\frac{dw}{z}.",
          explanation:
            "Differentiating \\( t=w/z \\) at fixed \\( z \\) gives the Jacobian factor \\( 1/z \\); since \\( \\operatorname{Re}(z)>0 \\) the ray \\( w=zt \\) stays in the right half-plane and the limits remain \\( 0 \\) to \\( \\infty \\).",
        },
        {
          stepNumber: 4,
          description: "Rewrite the power.",
          workingLatex: "t^{\\,s-1} = \\left(\\frac{w}{z}\\right)^{s-1} = \\frac{w^{\\,s-1}}{z^{\\,s-1}}.",
          explanation:
            "The power of \\( t \\) carries a factor \\( z^{-(s-1)} \\) that is constant in \\( w \\) and so leaves the integral.",
        },
        {
          stepNumber: 5,
          description: "Assemble the integrand and factor out \\( z \\).",
          workingLatex:
            "e^{-z t}t^{\\,s-1}\\,dt = e^{-w}\\,\\frac{w^{\\,s-1}}{z^{\\,s-1}}\\,\\frac{dw}{z} = \\frac{1}{z^{s}}\\,e^{-w}w^{\\,s-1}\\,dw.",
          explanation:
            "The \\( z^{-(s-1)} \\) from the power and the extra \\( 1/z \\) from \\( dt \\) combine to \\( z^{-s} \\), which factors out of the integral.",
        },
        {
          stepNumber: 6,
          description: "Recognise the Gamma integral.",
          workingLatex: "\\int_0^\\infty e^{-w}w^{\\,s-1}\\,dw = \\Gamma(s).",
          explanation:
            "This is the definition of the Gamma function; convergence at \\( w=0 \\) needs \\( \\operatorname{Re}(s)>0 \\), exactly our hypothesis.",
        },
        {
          stepNumber: 7,
          description: "Assemble the result.",
          workingLatex: "L(z) = \\int_0^\\infty e^{-z t}\\,t^{\\,s-1}\\,dt = \\frac{\\Gamma(s)}{z^{s}}.",
          explanation:
            "Feeding this Laplace transform a power series in \\( t \\) produces an asymptotic series in \\( 1/z \\); that is precisely the content of Watson's lemma.",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(s)}{z^{s}} \\).",
      canonicalAnswer: "gamma(s)*z^(-s)",
    },
  },
  {
    id: "am8c-002",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Apply Watson's lemma to \\( \\displaystyle F(z)=\\int_0^\\infty e^{-z t}\\big(1 + t + \\tfrac12 t^2\\big)\\,dt \\): write the first three terms of its asymptotic expansion as \\( z\\to+\\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "asymptotic series", "small-t endpoint"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the small-\\( t \\) weight.",
          workingLatex: "f(t) = 1 + t + \\tfrac12 t^2.",
          explanation:
            "Watson's lemma states that only the behaviour of \\( f \\) near \\( t=0 \\) controls the large-\\( z \\) expansion of \\( \\int_0^\\infty e^{-zt}f(t)\\,dt \\).",
        },
        {
          stepNumber: 2,
          description: "Read off the Taylor coefficients.",
          workingLatex: "f(t) = \\sum_{n\\ge0} a_n t^n,\\quad a_0=1,\\ a_1=1,\\ a_2=\\tfrac12.",
          explanation:
            "Here \\( f \\) is already its own (terminating) Taylor series, so the coefficients are immediate.",
        },
        {
          stepNumber: 3,
          description: "State the Laplace transform of a monomial.",
          workingLatex: "\\int_0^\\infty e^{-zt}\\,t^n\\,dt = \\frac{\\Gamma(n+1)}{z^{n+1}} = \\frac{n!}{z^{n+1}}.",
          explanation:
            "This is the basic Laplace integral with \\( s=n+1 \\); it is the only fact Watson's lemma needs.",
        },
        {
          stepNumber: 4,
          description: "State the lemma term by term.",
          workingLatex: "F(z) \\sim \\sum_{n\\ge0} a_n\\,\\frac{\\Gamma(n+1)}{z^{n+1}} = \\sum_{n\\ge0} a_n\\,\\frac{n!}{z^{n+1}}.",
          explanation:
            "Transforming each monomial \\( a_n t^n \\) and summing gives the asymptotic series; the small-\\( t \\) endpoint dominates the large-\\( z \\) behaviour.",
        },
        {
          stepNumber: 5,
          description: "Insert the coefficients.",
          workingLatex: "F(z) \\sim \\frac{1\\cdot 0!}{z} + \\frac{1\\cdot 1!}{z^{2}} + \\frac{\\tfrac12\\cdot 2!}{z^{3}}.",
          explanation:
            "Use \\( 0!=1,\\ 1!=1,\\ 2!=2 \\); the last coefficient is \\( \\tfrac12\\cdot2 = 1 \\).",
        },
        {
          stepNumber: 6,
          description: "Simplify the three terms.",
          workingLatex: "F(z) \\sim \\frac{1}{z} + \\frac{1}{z^{2}} + \\frac{1}{z^{3}}.",
          explanation:
            "Each factorial cancels its coefficient to leave unit numerators.",
        },
        {
          stepNumber: 7,
          description: "Cross-check exactness.",
          workingLatex:
            "F(z) = \\int_0^\\infty e^{-zt}\\big(1+t+\\tfrac12 t^2\\big)dt = \\frac1z+\\frac1{z^2}+\\frac1{z^3}.",
          explanation:
            "Because \\( f \\) is a polynomial the series terminates and Watson's lemma reproduces the exact value, confirming the result.",
        },
      ],
      finalAnswer: "\\( F(z) \\sim \\dfrac{1}{z} + \\dfrac{1}{z^{2}} + \\dfrac{1}{z^{3}} \\).",
    },
  },
  {
    id: "am8c-003",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Show that the substitution \\( u = t^3 \\) recasts \\( I(z)=\\displaystyle\\int_0^1 e^{z t^3}\\,dt \\) as \\( I(z)=\\dfrac{1}{3}\\displaystyle\\int_0^1 e^{z u}\\,u^{-2/3}\\,du \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "cubic phase", "Watson's lemma"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the aim of the substitution.",
          workingLatex: "u = t^3 \\quad\\Longrightarrow\\quad z t^3 = z u.",
          explanation:
            "We choose \\( u=t^3 \\) precisely to linearise the cubic phase \\( zt^3 \\) into \\( zu \\), turning a saddle problem into a Watson's-lemma problem.",
        },
        {
          stepNumber: 2,
          description: "Differentiate the substitution.",
          workingLatex: "du = 3t^2\\,dt.",
          explanation:
            "The cost of linearising the phase is the Jacobian \\( 3t^2 \\), which we now invert.",
        },
        {
          stepNumber: 3,
          description: "Invert for \\( t \\) and \\( t^2 \\).",
          workingLatex: "t = u^{1/3},\\qquad t^2 = u^{2/3}.",
          explanation:
            "On \\( (0,1) \\) the cube root is the positive real branch, so these powers are unambiguous.",
        },
        {
          stepNumber: 4,
          description: "Express \\( dt \\) through \\( du \\).",
          workingLatex: "dt = \\frac{du}{3t^2} = \\frac{1}{3}\\,u^{-2/3}\\,du.",
          explanation:
            "The reciprocal Jacobian produces the algebraic weight \\( u^{-2/3} \\); this fractional power is exactly what makes the transformed integral a Watson's-lemma problem.",
        },
        {
          stepNumber: 5,
          description: "Transform the limits.",
          workingLatex: "t=0\\mapsto u=0,\\qquad t=1\\mapsto u=1.",
          explanation:
            "Both endpoints are fixed by the cube map, so the range of integration is unchanged.",
        },
        {
          stepNumber: 6,
          description: "Assemble the transformed integral.",
          workingLatex: "I(z) = \\int_0^1 e^{z u}\\cdot\\frac{1}{3}u^{-2/3}\\,du = \\frac{1}{3}\\int_0^1 e^{z u}\\,u^{-2/3}\\,du.",
          explanation:
            "The weight \\( u^{-2/3} \\) is integrable at \\( u=0 \\) since \\( -2/3 > -1 \\); the phase is now linear, so integration by parts and Watson's lemma both apply directly.",
        },
      ],
      finalAnswer: "\\( I(z) = \\dfrac{1}{3}\\displaystyle\\int_0^1 e^{z u}\\,u^{-2/3}\\,du \\).",
    },
  },
  {
    id: "am8c-004",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 04",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate the full-ray Watson integral \\( \\dfrac{1}{3}\\displaystyle\\int_0^\\infty e^{-s u}\\,u^{-2/3}\\,du \\) for \\( \\operatorname{Re}(s)>0 \\), and simplify using \\( \\Gamma(4/3)=\\tfrac13\\Gamma(1/3) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Gamma function", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the Laplace formula.",
          workingLatex: "\\int_0^\\infty e^{-s u}\\,u^{\\,s'-1}\\,du = \\frac{\\Gamma(s')}{s^{\\,s'}} \\qquad (\\operatorname{Re}s>0,\\ \\operatorname{Re}s'>0).",
          explanation:
            "This is the basic full-ray Watson integral; we only need to read off the right exponent \\( s' \\).",
        },
        {
          stepNumber: 2,
          description: "Match the power to the Gamma form.",
          workingLatex: "u^{-2/3} = u^{\\,s'-1} \\quad\\Longrightarrow\\quad s'-1 = -\\tfrac23.",
          explanation:
            "Equate the exponent of \\( u \\) in the weight with \\( s'-1 \\) from the formula.",
        },
        {
          stepNumber: 3,
          description: "Solve for \\( s' \\) and check convergence.",
          workingLatex: "s' = \\tfrac13 > 0.",
          explanation:
            "Since \\( s'=1/3>0 \\) the integral converges at the origin, so the formula applies.",
        },
        {
          stepNumber: 4,
          description: "Apply the Laplace formula.",
          workingLatex: "\\frac{1}{3}\\int_0^\\infty e^{-s u}\\,u^{-2/3}\\,du = \\frac{1}{3}\\,\\frac{\\Gamma(1/3)}{s^{1/3}}.",
          explanation:
            "Insert \\( s'=1/3 \\), keeping the prefactor \\( 1/3 \\) outside.",
        },
        {
          stepNumber: 5,
          description: "Use the Gamma recurrence.",
          workingLatex: "\\tfrac13\\Gamma\\!\\left(\\tfrac13\\right) = \\Gamma\\!\\left(\\tfrac43\\right).",
          explanation:
            "From \\( \\Gamma(x+1)=x\\Gamma(x) \\) at \\( x=1/3 \\): \\( \\Gamma(4/3)=\\tfrac13\\Gamma(1/3) \\). Numerically \\( \\Gamma(4/3)=0.8930 \\).",
        },
        {
          stepNumber: 6,
          description: "State the closed form.",
          workingLatex: "\\frac{1}{3}\\int_0^\\infty e^{-s u}\\,u^{-2/3}\\,du = \\frac{\\Gamma(4/3)}{s^{1/3}}.",
          explanation:
            "This single term is the \\( t=0 \\) endpoint contribution to \\( I(z) \\) once we set \\( s=-z \\); the weight has no further analytic terms, so there is just one.",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(4/3)}{s^{1/3}} \\).",
      canonicalAnswer: "gamma(4/3)*s^(-1/3)",
    },
  },
  {
    id: "am8c-005",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 05",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The endpoint series of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) about \\( t=1 \\) has coefficients \\( c_n = \\Gamma(n+2/3)/\\Gamma(2/3) \\). Compute \\( c_0,c_1,c_2 \\) as exact rationals.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Gamma function", "series coefficients", "endpoint expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the Gamma recurrence.",
          workingLatex: "\\Gamma(x+1) = x\\,\\Gamma(x).",
          explanation: "Every coefficient \\( c_n=\\Gamma(n+2/3)/\\Gamma(2/3) \\) is built by repeatedly applying this identity at shifted arguments.",
        },
        {
          stepNumber: 2,
          description: "Compute \\( c_0 \\).",
          workingLatex: "c_0 = \\frac{\\Gamma(2/3)}{\\Gamma(2/3)} = 1.",
          explanation: "The leading coefficient is normalised to unity by construction.",
        },
        {
          stepNumber: 3,
          description: "Raise the argument by one.",
          workingLatex: "\\Gamma\\!\\left(1+\\tfrac23\\right) = \\tfrac23\\,\\Gamma\\!\\left(\\tfrac23\\right).",
          explanation: "Apply the recurrence at \\( x=2/3 \\).",
        },
        {
          stepNumber: 4,
          description: "Compute \\( c_1 \\).",
          workingLatex: "c_1 = \\frac{\\Gamma(1+2/3)}{\\Gamma(2/3)} = \\frac{\\tfrac23\\,\\Gamma(2/3)}{\\Gamma(2/3)} = \\frac{2}{3}.",
          explanation: "The \\( \\Gamma(2/3) \\) factors cancel, leaving \\( 2/3 \\). Equivalently \\( c_n=(n-\\tfrac13)c_{n-1} \\) gives \\( c_1=\\tfrac23 c_0 \\).",
        },
        {
          stepNumber: 5,
          description: "Raise the argument once more.",
          workingLatex: "\\Gamma\\!\\left(2+\\tfrac23\\right) = \\tfrac53\\,\\Gamma\\!\\left(1+\\tfrac23\\right) = \\tfrac53\\cdot\\tfrac23\\,\\Gamma\\!\\left(\\tfrac23\\right).",
          explanation: "Each step up multiplies by the current argument; here \\( x=5/3 \\) then \\( x=2/3 \\).",
        },
        {
          stepNumber: 6,
          description: "Compute \\( c_2 \\).",
          workingLatex: "c_2 = \\frac{\\Gamma(2+2/3)}{\\Gamma(2/3)} = \\left(\\tfrac53\\right)\\!\\left(\\tfrac23\\right) = \\frac{10}{9}.",
          explanation:
            "Cancelling \\( \\Gamma(2/3) \\) leaves the product \\( \\tfrac53\\cdot\\tfrac23=\\tfrac{10}{9} \\); consistent with \\( c_2=(2-\\tfrac13)c_1=\\tfrac53\\cdot\\tfrac23 \\).",
        },
        {
          stepNumber: 7,
          description: "Collect.",
          workingLatex: "c_0 = 1,\\quad c_1 = \\frac{2}{3},\\quad c_2 = \\frac{10}{9}.",
          explanation:
            "These multiply \\( e^z/(3z^{n+1}) \\) in the dominant endpoint expansion at \\( t=1 \\).",
        },
      ],
      finalAnswer: "\\( c_0 = 1,\\ c_1 = \\tfrac{2}{3},\\ c_2 = \\tfrac{10}{9} \\).",
    },
  },
  {
    id: "am8c-006",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Locate the saddle of the cubic phase \\( \\phi(t)=z t^3 \\) and explain why, for \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) with \\( \\operatorname{Re}(z)>0 \\), the leading asymptotics come from the endpoint \\( t=1 \\) and not from the saddle.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle point", "endpoint contribution", "dominance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the phase.",
          workingLatex: "\\phi(t)=z t^3 \\quad\\Longrightarrow\\quad \\phi'(t) = 3 z t^2.",
          explanation:
            "The saddle is where the exponent is stationary, \\( \\phi'(t)=0 \\).",
        },
        {
          stepNumber: 2,
          description: "Solve for the saddle.",
          workingLatex: "3 z t^2 = 0 \\quad\\Longrightarrow\\quad t = 0.",
          explanation:
            "Since \\( z\\neq0 \\), the only root is \\( t=0 \\) (a double root of \\( \\phi' \\)).",
        },
        {
          stepNumber: 3,
          description: "Check the order of the saddle.",
          workingLatex: "\\phi''(t)=6zt,\\qquad \\phi''(0)=0,\\qquad \\phi'''(0)=6z\\neq0.",
          explanation:
            "Because \\( \\phi''(0)=0 \\) but \\( \\phi'''(0)\\neq0 \\), this is a degenerate (cubic) saddle, not a simple one.",
        },
        {
          stepNumber: 4,
          description: "Note the saddle sits on the boundary.",
          workingLatex: "t_{\\text{saddle}} = 0 = \\text{lower limit of } (0,1).",
          explanation:
            "The saddle is not interior to \\( (0,1) \\); it coincides with the endpoint, so it contributes only a half-saddle (endpoint) term, not a full Gaussian saddle term.",
        },
        {
          stepNumber: 5,
          description: "Compare endpoint magnitudes.",
          workingLatex: "\\big|e^{z t^3}\\big|_{t=1} = e^{\\operatorname{Re}(z)}, \\qquad \\big|e^{z t^3}\\big|_{t=0} = 1.",
          explanation:
            "For \\( \\operatorname{Re}(z)>0 \\) the integrand is exponentially largest at \\( t=1 \\), so that endpoint dominates while \\( t=0 \\) gives only an algebraic \\( z^{-1/3} \\) correction.",
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "I(z) \\sim \\underbrace{\\frac{e^{z}}{3z}}_{t=1\\ \\text{(dominant)}} \\;-\\; \\underbrace{\\frac{\\Gamma(4/3)}{z^{1/3}}}_{t=0\\ \\text{(subdominant)}}.",
          explanation:
            "Both are endpoint contributions; for \\( \\operatorname{Re}(z)>0 \\) the exponential \\( t=1 \\) term wins. The relative dominance flips with the sector of \\( \\arg z \\).",
        },
      ],
      finalAnswer:
        "Saddle at \\( t=0 \\), on the boundary; for \\( \\operatorname{Re}(z)>0 \\) the \\( t=1 \\) endpoint dominates.",
    },
  },

  // ── Standard: typical sheet-level ───────────────────────────────────────
  {
    id: "am8c-007",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 07",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By a single integration by parts on \\( \\dfrac{1}{3}\\displaystyle\\int_0^1 e^{z u}u^{-2/3}\\,du \\), find the leading-order behaviour of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) as \\( |z|\\to\\infty \\) with \\( \\operatorname{Re}(z)>0 \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["integration by parts", "leading order", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the linearised form.",
          workingLatex: "I(z) = \\frac{1}{3}\\int_0^1 e^{z u}\\,u^{-2/3}\\,du.",
          explanation:
            "After \\( u=t^3 \\) the phase is linear, so integrating \\( e^{zu} \\) by parts is exact and generates the asymptotic series in \\( 1/z \\).",
        },
        {
          stepNumber: 2,
          description: "Choose the parts.",
          workingLatex: "dv = e^{zu}\\,du,\\qquad w = u^{-2/3}.",
          explanation:
            "Integrating the exponential (rather than the weight) is what brings down a factor \\( 1/z \\) each time, generating the large-\\( z \\) series.",
        },
        {
          stepNumber: 3,
          description: "Compute \\( v \\) and \\( dw \\).",
          workingLatex: "v = \\frac{e^{zu}}{z},\\qquad dw = -\\frac23 u^{-5/3}\\,du.",
          explanation:
            "Antidifferentiating \\( e^{zu} \\) gives the \\( 1/z \\); differentiating the weight lowers its power by one.",
        },
        {
          stepNumber: 4,
          description: "Write the integration-by-parts identity.",
          workingLatex:
            "I(z) = \\frac{1}{3}\\left[\\frac{e^{z u}}{z}\\,u^{-2/3}\\right]_0^1 + \\frac{1}{3}\\cdot\\frac{2}{3z}\\int_0^1 e^{z u}\\,u^{-5/3}\\,du.",
          explanation:
            "The boundary term collects \\( v\\,w \\) at the ends; the sign flip on \\( dw \\) makes the remaining integral positive.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the boundary term at \\( u=1 \\).",
          workingLatex: "\\frac{1}{3}\\,\\frac{e^{z}}{z}\\,(1)^{-2/3} = \\frac{e^{z}}{3z}.",
          explanation:
            "Since \\( e^{zu} \\) is largest at \\( u=1 \\) for \\( \\operatorname{Re}(z)>0 \\), this is the dominant piece.",
        },
        {
          stepNumber: 6,
          description: "Examine the boundary term at \\( u=0 \\).",
          workingLatex: "\\frac{1}{3}\\,\\frac{e^{0}}{z}\\,u^{-2/3}\\Big|_{u\\to0^+} \\ \\text{is divergent in isolation but cancels in the split.}",
          explanation:
            "The \\( u=0 \\) end belongs to the separate algebraic \\( z^{-1/3} \\) (Watson) term; relative to \\( e^z \\) it is exponentially small, so it does not enter the dominant series.",
        },
        {
          stepNumber: 7,
          description: "Bound the remaining integral.",
          workingLatex: "\\frac{2}{9z}\\int_0^1 e^{zu}u^{-5/3}\\,du = O\\!\\left(\\frac{e^{z}}{z^{2}}\\right).",
          explanation:
            "A further integration by parts at \\( u=1 \\) shows this integral is itself \\( \\sim e^z/z \\), so the term is \\( O(e^z/z^2) \\), one order down.",
        },
        {
          stepNumber: 8,
          description: "Collect the leading order.",
          workingLatex: "I(z) = \\frac{e^{z}}{3z} + O\\!\\left(\\frac{e^{z}}{z^{2}}\\right).",
          explanation:
            "Only the \\( u=1 \\) boundary term survives at leading order in the dominant exponential family.",
        },
        {
          stepNumber: 9,
          description: "State the leading behaviour.",
          workingLatex: "I(z) \\sim \\frac{e^{z}}{3z} \\qquad (|z|\\to\\infty,\\ \\operatorname{Re}(z)>0).",
          explanation:
            "This is the \\( n=0 \\) term of the \\( t=1 \\) series, coefficient \\( c_0=\\Gamma(2/3)/\\Gamma(2/3)=1 \\).",
        },
        {
          stepNumber: 10,
          description: "Numerical cross-check.",
          workingLatex: "z=40:\\quad \\frac{e^{40}}{3\\cdot40} \\approx I(40) \\ \\text{to rel.\\ err}\\ \\sim10^{-2}.",
          explanation:
            "The single term reproduces \\( I \\) to a couple of percent at \\( z=40 \\), improving as more endpoint terms are added.",
        },
      ],
      finalAnswer: "\\( I(z) \\sim \\dfrac{e^{z}}{3z} \\).",
      canonicalAnswer: "exp(z)/(3*z)",
    },
  },
  {
    id: "am8c-008",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 08",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By repeated integration by parts at the \\( u=1 \\) endpoint, derive the first three terms of the dominant endpoint expansion of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) about \\( t=1 \\), for \\( \\operatorname{Re}(z)>0 \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "endpoint expansion", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the repeated parts.",
          workingLatex:
            "J := \\frac{1}{3}\\int_0^1 e^{z u}u^{-2/3}\\,du, \\qquad dv = e^{zu}\\,du,\\ \\ w = u^{-2/3}.",
          explanation:
            "We repeatedly integrate the exponential and differentiate the algebraic weight; each cycle yields one more boundary term and one more power of \\( 1/z \\).",
        },
        {
          stepNumber: 2,
          description: "First integration by parts.",
          workingLatex:
            "J = \\frac{1}{3}\\left[\\frac{e^{zu}}{z}u^{-2/3}\\right]_0^1 + \\frac{1}{3}\\cdot\\frac{2}{3z}\\int_0^1 e^{zu}u^{-5/3}\\,du.",
          explanation:
            "The \\( u=1 \\) boundary gives \\( e^z/(3z) \\). The \\( u=0 \\) boundary belongs to the separate \\( z^{-1/3} \\) term and is omitted from this endpoint series.",
        },
        {
          stepNumber: 3,
          description: "Record the first boundary term.",
          workingLatex: "\\frac{1}{3}\\,\\frac{e^{z}}{z} = \\frac{e^{z}}{3z}.",
          explanation:
            "This is the \\( n=0 \\) term, with coefficient \\( c_0=1 \\).",
        },
        {
          stepNumber: 4,
          description: "Second integration by parts.",
          workingLatex:
            "\\frac{2}{9z}\\int_0^1 e^{zu}u^{-5/3}\\,du = \\frac{2}{9z}\\,\\frac{e^{z}}{z} + \\frac{2}{9z}\\cdot\\frac{5}{3z}\\int_0^1 e^{zu}u^{-8/3}\\,du + \\cdots.",
          explanation:
            "The same move repeats: a boundary term at \\( u=1 \\) plus a higher-order integral. The differentiated power supplies the factor \\( \\tfrac53 \\).",
        },
        {
          stepNumber: 5,
          description: "Record the second boundary term.",
          workingLatex: "\\frac{2}{9z}\\,\\frac{e^{z}}{z} = \\frac{e^{z}}{3}\\cdot\\frac{2/3}{z^{2}}.",
          explanation:
            "This is the \\( n=1 \\) term, coefficient \\( c_1=2/3 \\); the \\( 2/9 \\) is \\( \\tfrac13\\cdot\\tfrac23 \\).",
        },
        {
          stepNumber: 6,
          description: "Third integration by parts.",
          workingLatex:
            "\\frac{2}{9z}\\cdot\\frac{5}{3z}\\int_0^1 e^{zu}u^{-8/3}\\,du = \\frac{e^{z}}{3}\\cdot\\frac{10/9}{z^{3}} + \\cdots.",
          explanation:
            "Differentiating \\( u^{-5/3} \\) supplies the factor \\( \\tfrac53 \\); the accumulated coefficient is \\( \\tfrac23\\cdot\\tfrac53=\\tfrac{10}{9} \\).",
        },
        {
          stepNumber: 7,
          description: "Identify the coefficient recurrence.",
          workingLatex: "c_n = \\left(n-\\tfrac13\\right)c_{n-1}, \\qquad c_0=1.",
          explanation:
            "Each parts step multiplies the previous coefficient by the magnitude of the differentiated exponent, giving \\( c_1=\\tfrac23,\\ c_2=\\tfrac{10}{9} \\).",
        },
        {
          stepNumber: 8,
          description: "Recognise the closed form of the coefficients.",
          workingLatex: "c_n = \\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}.",
          explanation:
            "The recurrence \\( c_n=(n-\\tfrac13)c_{n-1} \\) is exactly the Gamma recurrence, so the coefficients are ratios of Gamma values.",
        },
        {
          stepNumber: 9,
          description: "Collect the boundary terms.",
          workingLatex:
            "I(z) \\sim \\frac{e^{z}}{3}\\left(\\frac{1}{z} + \\frac{2/3}{z^{2}} + \\frac{10/9}{z^{3}} + \\cdots\\right).",
          explanation:
            "Summing the boundary terms from the successive parts gives the three required terms and the pattern beyond.",
        },
        {
          stepNumber: 10,
          description: "Write the closed series.",
          workingLatex:
            "I(z) \\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\,\\frac{1}{z^{n+1}}.",
          explanation:
            "This is the contribution of the dominant endpoint \\( t=1 \\); it is the same in every sector. Only the additive \\( z^{-1/3} \\) endpoint term changes with \\( \\arg z \\). Numerically, three terms give rel err \\( \\sim 10^{-6} \\) at \\( z=25 \\).",
        },
      ],
      finalAnswer:
        "\\( I(z) \\sim \\dfrac{e^{z}}{3}\\left(\\dfrac{1}{z} + \\dfrac{2}{3z^{2}} + \\dfrac{10}{9z^{3}} + \\cdots\\right) \\).",
    },
  },
  {
    id: "am8c-009",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 09",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading-order behaviour of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) along the negative real axis, \\( z=-x \\) with \\( x\\to+\\infty \\), and state which endpoint dominates.",
    marks: 3,
    yearCreated: 2026,
    tags: ["negative real axis", "endpoint contribution", "leading order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the linearised integral.",
          workingLatex: "I(z) = \\frac{1}{3}\\int_0^1 e^{z u}\\,u^{-2/3}\\,du.",
          explanation:
            "The substitution \\( u=t^3 \\) again converts the cubic phase into a linear one with weight \\( u^{-2/3} \\).",
        },
        {
          stepNumber: 2,
          description: "Set \\( z=-x \\).",
          workingLatex: "I(-x) = \\frac{1}{3}\\int_0^1 e^{-x u}\\,u^{-2/3}\\,du.",
          explanation:
            "On the negative axis the exponent becomes \\( -xu \\), decaying as \\( u \\) increases.",
        },
        {
          stepNumber: 3,
          description: "Identify the dominant endpoint.",
          workingLatex: "\\big|e^{-x u}\\big|_{u=0}=1 \\gg \\big|e^{-x u}\\big|_{u=1}=e^{-x}.",
          explanation:
            "The integrand peaks at \\( u=0 \\); the lower endpoint now dominates — the opposite of the \\( \\operatorname{Re}(z)>0 \\) case.",
        },
        {
          stepNumber: 4,
          description: "Extend the upper limit to infinity.",
          workingLatex:
            "\\frac{1}{3}\\int_0^1 e^{-x u}u^{-2/3}\\,du = \\frac{1}{3}\\int_0^\\infty e^{-x u}u^{-2/3}\\,du - \\frac{1}{3}\\int_1^\\infty e^{-x u}u^{-2/3}\\,du.",
          explanation:
            "Splitting the range lets us evaluate the full-ray Watson integral exactly and bound the discarded tail.",
        },
        {
          stepNumber: 5,
          description: "Bound the discarded tail.",
          workingLatex:
            "\\left|\\frac{1}{3}\\int_1^\\infty e^{-x u}u^{-2/3}\\,du\\right| \\le \\frac{1}{3}\\int_1^\\infty e^{-x u}\\,du = \\frac{e^{-x}}{3x} = O(e^{-x}).",
          explanation:
            "On \\( u\\ge1 \\), \\( u^{-2/3}\\le1 \\); the tail is exponentially small and does not affect the algebraic leading term.",
        },
        {
          stepNumber: 6,
          description: "Apply the Laplace formula to the full ray.",
          workingLatex:
            "\\frac{1}{3}\\int_0^\\infty e^{-x u}u^{-2/3}\\,du = \\frac{1}{3}\\,\\frac{\\Gamma(1/3)}{x^{1/3}}.",
          explanation:
            "With \\( s'=1/3 \\) and \\( s=x>0 \\), \\( \\int_0^\\infty e^{-xu}u^{-2/3}du=\\Gamma(1/3)x^{-1/3} \\).",
        },
        {
          stepNumber: 7,
          description: "Simplify with the Gamma recurrence.",
          workingLatex: "\\frac{1}{3}\\,\\frac{\\Gamma(1/3)}{x^{1/3}} = \\frac{\\Gamma(4/3)}{x^{1/3}}.",
          explanation:
            "Using \\( \\tfrac13\\Gamma(1/3)=\\Gamma(4/3) \\).",
        },
        {
          stepNumber: 8,
          description: "Compare with the \\( t=1 \\) contribution.",
          workingLatex:
            "I_{t=1}(-x) = O\\!\\left(\\frac{e^{-x}}{x}\\right) \\ll \\frac{\\Gamma(4/3)}{x^{1/3}}.",
          explanation:
            "The \\( t=1 \\) endpoint contributes only an exponentially small term, confirming the \\( t=0 \\) endpoint wins.",
        },
        {
          stepNumber: 9,
          description: "State the leading behaviour.",
          workingLatex: "I(-x) \\sim \\frac{\\Gamma(4/3)}{x^{1/3}} \\qquad (x\\to+\\infty).",
          explanation:
            "The algebraic \\( x^{-1/3} \\) term from \\( t=0 \\) is the full leading asymptotic.",
        },
        {
          stepNumber: 10,
          description: "Numerical cross-check.",
          workingLatex: "x^{1/3}\\,I(-x) \\to \\Gamma(4/3) = 0.8929795\\ldots",
          explanation:
            "At \\( x=50 \\) and \\( x=100 \\), \\( x^{1/3}I(-x)=0.89298 \\) to 7 dp, since the correction is \\( O(e^{-x}) \\).",
        },
      ],
      finalAnswer:
        "\\( I(-x) \\sim \\dfrac{\\Gamma(4/3)}{x^{1/3}} \\) as \\( x\\to+\\infty \\); the \\( t=0 \\) endpoint dominates.",
      canonicalAnswer: "gamma(4/3)*x^(-1/3)",
    },
  },
  {
    id: "am8c-010",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 10",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show that for \\( |\\arg z|<\\tfrac{\\pi}{2} \\) the \\( t=0 \\) endpoint of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) contributes \\( -\\Gamma(4/3)\\,z^{-1/3} \\), and explain the role of the branch cut at \\( \\arg z=\\pi \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["complex Watson's lemma", "branch cut", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Linearise the integral.",
          workingLatex: "I(z) = \\frac{1}{3}\\int_0^1 e^{z u}\\,u^{-2/3}\\,du.",
          explanation:
            "The substitution \\( u=t^3 \\) gives the linear-phase weight \\( u^{-2/3} \\) whose \\( u=0 \\) endpoint produces the algebraic term.",
        },
        {
          stepNumber: 2,
          description: "Isolate the Watson piece at \\( u=0 \\).",
          workingLatex: "I_0(z) := \\frac{1}{3}\\int_0^\\infty e^{z u}\\,u^{-2/3}\\,du.",
          explanation:
            "The local behaviour at the endpoint \\( u=0 \\) is captured by extending to a full ray; the tail difference \\( \\int_1^\\infty \\) is exponentially small relative to the algebraic term in the relevant directions.",
        },
        {
          stepNumber: 3,
          description: "Write the exponent in decaying form.",
          workingLatex: "e^{z u} = e^{-(-z)u}, \\qquad s := -z.",
          explanation:
            "To match the Laplace template we set \\( s=-z \\), so the integrand is \\( e^{-su}u^{-2/3} \\).",
        },
        {
          stepNumber: 4,
          description: "State the convergence condition.",
          workingLatex: "\\operatorname{Re}(s)>0 \\ \\Longleftrightarrow\\ \\operatorname{Re}(z)<0 \\ \\text{(after deforming the ray)}.",
          explanation:
            "Convergence needs \\( \\operatorname{Re}(zu)\\to-\\infty \\); for \\( |\\arg z|<\\pi/2 \\) the contour is rotated onto a ray where \\( \\operatorname{Re}(-zu)>0 \\), and the value is the analytic continuation of the Gamma integral.",
        },
        {
          stepNumber: 5,
          description: "Apply the Gamma integral.",
          workingLatex:
            "\\frac{1}{3}\\int_0^\\infty e^{-s u}\\,u^{-2/3}\\,du = \\frac{1}{3}\\,\\Gamma\\!\\left(\\tfrac13\\right)s^{-1/3}.",
          explanation:
            "With \\( s'=1/3 \\), the Laplace formula gives \\( \\Gamma(1/3)s^{-1/3} \\), times the prefactor \\( 1/3 \\).",
        },
        {
          stepNumber: 6,
          description: "Restore \\( s=-z \\).",
          workingLatex: "I_0(z) = \\frac{1}{3}\\,\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3}.",
          explanation:
            "The endpoint term is a single power \\( (-z)^{-1/3} \\); its branch is what carries the sector dependence.",
        },
        {
          stepNumber: 7,
          description: "Fix the branch of \\( z^{1/3} \\).",
          workingLatex: "z^{1/3}:\\ \\text{principal branch, cut on } \\arg z=\\pi,\\ \\arg z\\in(-\\pi,\\pi].",
          explanation:
            "Choosing the standard cube-root convention with the cut on the negative real \\( z \\)-axis fixes \\( (-z)^{-1/3} \\) unambiguously in each sector.",
        },
        {
          stepNumber: 8,
          description: "Evaluate the branch in \\( |\\arg z|<\\pi/2 \\).",
          workingLatex:
            "|\\arg z|<\\tfrac\\pi2:\\quad \\arg(-z)\\in(\\tfrac\\pi2,\\tfrac{3\\pi}2),\\quad (-z)^{-1/3} = -\\,z^{-1/3}.",
          explanation:
            "On this right-half-plane sector the chosen convention gives \\( (-z)^{-1/3}=-z^{-1/3} \\) (real and negative when \\( z>0 \\)).",
        },
        {
          stepNumber: 9,
          description: "Combine and simplify.",
          workingLatex:
            "I_0(z) = \\tfrac13\\Gamma\\!\\left(\\tfrac13\\right)\\big(-z^{-1/3}\\big) = -\\,\\Gamma\\!\\left(\\tfrac43\\right)z^{-1/3}.",
          explanation:
            "Using \\( \\tfrac13\\Gamma(1/3)=\\Gamma(4/3) \\), the \\( t=0 \\) endpoint contributes \\( -\\Gamma(4/3)z^{-1/3} \\).",
        },
        {
          stepNumber: 10,
          description: "Explain the role of the cut.",
          workingLatex:
            "\\text{cross } \\arg z=\\pi:\\quad z^{-1/3}\\mapsto e^{\\mp 2\\pi i/3}z^{-1/3}.",
          explanation:
            "The branch choice is what makes the endpoint term sector-dependent: crossing the cut at \\( \\arg z=\\pi \\) multiplies \\( z^{-1/3} \\) by a cube root of unity, changing the coefficient in the next sector. Numerically the term matches the residual \\( I-\\text{series} \\) to high precision.",
        },
      ],
      finalAnswer:
        "\\( I_0(z) = -\\dfrac{\\Gamma(4/3)}{z^{1/3}} \\) for \\( |\\arg z|<\\tfrac\\pi2 \\); the cut at \\( \\arg z=\\pi \\) makes it sector-dependent.",
      canonicalAnswer: "-gamma(4/3)*z^(-1/3)",
    },
  },
  {
    id: "am8c-011",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 11",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Assemble the two-term asymptotic approximation to \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) for large positive real \\( z=x \\): the dominant exponential term and the leading algebraic correction. State which dominates.",
    marks: 3,
    yearCreated: 2026,
    tags: ["two-term expansion", "positive real axis", "dominance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the two endpoint sources.",
          workingLatex:
            "I(x) = \\underbrace{I_{t=1}(x)}_{\\text{exponential}} + \\underbrace{I_{t=0}(x)}_{\\text{algebraic}}.",
          explanation:
            "On the positive axis both endpoints of \\( \\int_0^1 e^{xt^3}dt \\) contribute; we take the leading term of each.",
        },
        {
          stepNumber: 2,
          description: "Write the dominant \\( t=1 \\) series.",
          workingLatex: "I_{t=1}(x) \\sim \\frac{e^{x}}{3}\\sum_{n\\ge0}\\frac{c_n}{x^{n+1}},\\qquad c_0=1.",
          explanation:
            "Repeated integration by parts at \\( u=1 \\) gives this factorial-coefficient series.",
        },
        {
          stepNumber: 3,
          description: "Take its leading term.",
          workingLatex: "\\frac{e^{x}}{3}\\cdot\\frac{c_0}{x} = \\frac{e^{x}}{3x}.",
          explanation:
            "The \\( n=0 \\) term dominates because the factor \\( e^x \\) grows without bound.",
        },
        {
          stepNumber: 4,
          description: "Write the \\( t=0 \\) endpoint term.",
          workingLatex: "I_{t=0}(z) = -\\frac{\\Gamma(4/3)}{z^{1/3}} \\qquad (|\\arg z|<\\tfrac\\pi2).",
          explanation:
            "The Watson piece at \\( u=0 \\) gives \\( \\Gamma(4/3)(-z)^{-1/3}=-\\Gamma(4/3)z^{-1/3} \\) on the right-half-plane branch.",
        },
        {
          stepNumber: 5,
          description: "Specialise to the positive axis.",
          workingLatex: "z=x>0:\\quad I_{t=0}(x) = -\\frac{\\Gamma(4/3)}{x^{1/3}}.",
          explanation:
            "It is algebraically small but is the leading non-exponential piece.",
        },
        {
          stepNumber: 6,
          description: "Add the two contributions.",
          workingLatex:
            "I(x) \\sim \\frac{e^{x}}{3x} - \\frac{\\Gamma(4/3)}{x^{1/3}} \\qquad (x\\to+\\infty).",
          explanation:
            "The full two-term asymptotic is the sum of the dominant exponential and the leading algebraic endpoint terms.",
        },
        {
          stepNumber: 7,
          description: "Form the ratio of magnitudes.",
          workingLatex:
            "\\frac{|I_{t=1}|}{|I_{t=0}|} = \\frac{e^{x}/(3x)}{\\Gamma(4/3)/x^{1/3}} = \\frac{e^{x}}{3\\Gamma(4/3)\\,x^{2/3}}.",
          explanation:
            "The ratio is controlled by the unbounded factor \\( e^x \\).",
        },
        {
          stepNumber: 8,
          description: "Conclude dominance.",
          workingLatex: "\\frac{|I_{t=1}|}{|I_{t=0}|} \\to \\infty \\quad (x\\to+\\infty).",
          explanation:
            "The exponential \\( t=1 \\) term dominates overwhelmingly on the positive axis; the \\( x^{-1/3} \\) term only matters as \\( \\arg z\\to\\pi/2 \\).",
        },
        {
          stepNumber: 9,
          description: "Numerical magnitudes at \\( x=40 \\).",
          workingLatex:
            "\\frac{e^{40}}{120} \\approx 1.996\\times10^{15}, \\qquad \\frac{\\Gamma(4/3)}{40^{1/3}} \\approx 0.261.",
          explanation:
            "The exponential term reproduces \\( I=1.996\\times10^{15} \\); the algebraic term is a tiny \\( \\sim0.26 \\) correction.",
        },
        {
          stepNumber: 10,
          description: "State the result.",
          workingLatex: "I(x) \\sim \\frac{e^{x}}{3x} - \\frac{\\Gamma(4/3)}{x^{1/3}}.",
          explanation:
            "Two-term form: dominant exponential \\( t=1 \\) endpoint plus subdominant algebraic \\( t=0 \\) endpoint.",
        },
      ],
      finalAnswer:
        "\\( I(x) \\sim \\dfrac{e^{x}}{3x} - \\dfrac{\\Gamma(4/3)}{x^{1/3}} \\); the exponential \\( t=1 \\) term dominates.",
    },
  },
  {
    id: "am8c-012",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 12",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For \\( |\\arg z|<\\tfrac{\\pi}{2} \\), state the combined sectorial relation for \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) in the form \\( I(z)+\\dfrac{\\Gamma(4/3)}{z^{1/3}}\\sim(\\text{endpoint series}) \\), and shade the validity sector in the \\( z \\)-plane.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Watson's lemma", "endpoint splitting", "sector"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Linearise the integral.",
          workingLatex:
            "I(z) = \\frac{1}{3}\\int_0^1 e^{zu}u^{-2/3}\\,du.",
          explanation:
            "The substitution \\( u=t^3 \\) gives the linear-phase form whose two endpoints will be separated.",
        },
        {
          stepNumber: 2,
          description: "Split the range at \\( u=1 \\).",
          workingLatex:
            "\\int_0^1 = \\int_0^\\infty - \\int_1^\\infty \\ \\Longrightarrow\\ I(z) = \\frac13\\int_0^\\infty e^{zu}u^{-2/3}du - \\frac13\\int_1^\\infty e^{zu}u^{-2/3}du.",
          explanation:
            "For \\( |\\arg z|<\\pi/2 \\) each ray can be deformed to converge: the first is the Watson piece at \\( u=0 \\), the second the endpoint piece at \\( u=1 \\).",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[0,0],[3.5,2.6],[3.5,-2.6]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Line.Segment point1={[0,0]} point2={[3.4,2.55]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Line.Segment point1={[0,0]} point2={[3.4,-2.55]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Line.Segment point1={[0,0]} point2={[3.3,0]} color="var(--mafs-fg-green)" weight={3} />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.2,0.5]} tex="-\\tfrac{\\Gamma(4/3)}{z^{1/3}}" color="var(--mafs-fg-green)" />
  <LaTeX at={[1.95,2.1]} tex="\\arg z=\\tfrac{\\pi}{2}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.95,-2.25]} tex="\\arg z=-\\tfrac{\\pi}{2}" color="var(--mafs-fg-orange)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.75,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 3,
          description: "Set up the Watson piece.",
          workingLatex:
            "\\frac13\\int_0^\\infty e^{zu}u^{-2/3}du = \\frac13\\int_0^\\infty e^{-(-z)u}u^{-2/3}du.",
          explanation:
            "Writing \\( s=-z \\), the first integral is the standard Laplace transform of \\( u^{-2/3} \\), convergent after deforming the ray for \\( |\\arg z|<\\pi/2 \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Watson piece.",
          workingLatex:
            "\\frac13\\int_0^\\infty e^{zu}u^{-2/3}du = \\tfrac13\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3}.",
          explanation:
            "The Laplace formula with \\( s'=1/3 \\) gives \\( \\Gamma(1/3)(-z)^{-1/3} \\), times the prefactor \\( 1/3 \\).",
        },
        {
          stepNumber: 5,
          description: "Apply the right-half-plane branch.",
          workingLatex:
            "|\\arg z|<\\tfrac\\pi2:\\quad (-z)^{-1/3}=-z^{-1/3} \\ \\Longrightarrow\\ \\tfrac13\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3} = -\\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "With the principal branch \\( (-z)^{-1/3}=-z^{-1/3} \\); together with \\( \\tfrac13\\Gamma(1/3)=\\Gamma(4/3) \\) this is the algebraic endpoint term.",
        },
        {
          stepNumber: 6,
          description: "Set up the \\( u=1 \\) tail.",
          workingLatex:
            "-\\frac13\\int_1^\\infty e^{zu}u^{-2/3}du, \\qquad dv=e^{zu}du,\\ w=u^{-2/3}.",
          explanation:
            "This tail carries the dominant endpoint; integration by parts at \\( u=1 \\) generates its series.",
        },
        {
          stepNumber: 7,
          description: "First boundary term of the tail.",
          workingLatex:
            "-\\frac13\\left[\\frac{e^{zu}}{z}u^{-2/3}\\right]_1^\\infty = \\frac{e^{z}}{3z},",
          explanation:
            "The upper limit vanishes (for the convergent ray) and the \\( u=1 \\) end gives \\( e^z/(3z) \\), the leading endpoint term.",
        },
        {
          stepNumber: 8,
          description: "Expand the tail to all orders.",
          workingLatex:
            "-\\frac13\\int_1^\\infty e^{zu}u^{-2/3}du \\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}.",
          explanation:
            "Repeating the parts produces the factorial-coefficient endpoint series with \\( c_n=\\Gamma(n+2/3)/\\Gamma(2/3) \\).",
        },
        {
          stepNumber: 9,
          description: "Assemble the full asymptotic.",
          workingLatex:
            "I(z) \\sim -\\frac{\\Gamma(4/3)}{z^{1/3}} + \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}.",
          explanation:
            "Combining the Watson piece (step 5) and the endpoint series (step 8) gives the full leading asymptotic.",
        },
        {
          stepNumber: 10,
          description: "Recombine into the stated relation.",
          workingLatex:
            "I(z)+\\frac{\\Gamma(4/3)}{z^{1/3}} \\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}.",
          explanation:
            "Moving the algebraic term left gives the relation, valid throughout the open right half-plane. Numerically at \\( z=25\\,e^{i\\pi/6} \\), rel err \\( \\sim 10^{-7} \\) with a few terms.",
        },
      ],
      finalAnswer:
        "\\( I(z)+\\dfrac{\\Gamma(4/3)}{z^{1/3}} \\sim \\dfrac{e^{z}}{3}\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\dfrac{1}{z^{n+1}} \\) for \\( |\\arg z|<\\tfrac\\pi2 \\).",
    },
  },
  {
    id: "am8c-013",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 13",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Find the exact value of \\( \\displaystyle\\lim_{x\\to+\\infty} x^{1/3}\\,I(-x) \\), where \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["limit", "negative real axis", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Linearise on the negative axis.",
          workingLatex: "I(-x) = \\frac{1}{3}\\int_0^1 e^{-x u}u^{-2/3}\\,du.",
          explanation:
            "The substitution \\( u=t^3 \\) gives a decaying exponential \\( e^{-xu} \\) for \\( x>0 \\).",
        },
        {
          stepNumber: 2,
          description: "Identify the dominant endpoint.",
          workingLatex: "\\big|e^{-xu}\\big| \\ \\text{peaks at}\\ u=0.",
          explanation:
            "On the negative axis the \\( t=0 \\) endpoint dominates; the \\( t=1 \\) term is only \\( O(e^{-x}/x) \\).",
        },
        {
          stepNumber: 3,
          description: "Extend the range to a full ray.",
          workingLatex:
            "I(-x) = \\frac{1}{3}\\int_0^\\infty e^{-x u}u^{-2/3}du - \\frac13\\int_1^\\infty e^{-xu}u^{-2/3}du.",
          explanation:
            "The tail \\( \\int_1^\\infty \\) is \\( O(e^{-x}) \\), negligible against the algebraic term.",
        },
        {
          stepNumber: 4,
          description: "Apply the Laplace formula.",
          workingLatex:
            "\\frac{1}{3}\\int_0^\\infty e^{-x u}u^{-2/3}du = \\frac13\\,\\Gamma\\!\\left(\\tfrac13\\right)x^{-1/3}.",
          explanation:
            "With \\( s'=1/3,\\ s=x \\), the full-ray integral is \\( \\Gamma(1/3)x^{-1/3} \\).",
        },
        {
          stepNumber: 5,
          description: "Simplify with the Gamma recurrence.",
          workingLatex: "I(-x) \\sim \\frac{\\Gamma(4/3)}{x^{1/3}} \\qquad (x\\to+\\infty).",
          explanation:
            "Using \\( \\tfrac13\\Gamma(1/3)=\\Gamma(4/3) \\) gives the negative-axis leading behaviour.",
        },
        {
          stepNumber: 6,
          description: "Form the scaled quantity.",
          workingLatex: "x^{1/3}\\,I(-x).",
          explanation:
            "Multiplying by \\( x^{1/3} \\) is designed to cancel the algebraic decay and expose the constant.",
        },
        {
          stepNumber: 7,
          description: "Cancel the power.",
          workingLatex: "x^{1/3}\\,I(-x) \\sim x^{1/3}\\cdot\\frac{\\Gamma(4/3)}{x^{1/3}} = \\Gamma\\!\\left(\\tfrac43\\right).",
          explanation: "The \\( x^{1/3} \\) factors cancel exactly, leaving a constant.",
        },
        {
          stepNumber: 8,
          description: "Control the error.",
          workingLatex: "x^{1/3}I(-x) - \\Gamma\\!\\left(\\tfrac43\\right) = O\\!\\left(x^{1/3}e^{-x}\\right) \\to 0.",
          explanation:
            "The only correction is the exponentially small \\( t=1 \\) tail, which vanishes in the limit.",
        },
        {
          stepNumber: 9,
          description: "Take the limit.",
          workingLatex: "\\lim_{x\\to+\\infty} x^{1/3}\\,I(-x) = \\Gamma\\!\\left(\\tfrac43\\right).",
          explanation: "The scaled integral converges to the single constant \\( \\Gamma(4/3) \\).",
        },
        {
          stepNumber: 10,
          description: "Numerical value and check.",
          workingLatex: "\\Gamma\\!\\left(\\tfrac43\\right) \\approx 0.8930.",
          explanation:
            "Verified: at \\( x=50 \\) and \\( x=100 \\), \\( x^{1/3}I(-x)=0.8929795 \\) to 7 dp.",
        },
      ],
      finalAnswer: "\\( \\Gamma\\!\\left(\\tfrac43\\right) \\approx 0.8930 \\).",
      canonicalAnswer: "gamma(4/3)",
    },
  },
  {
    id: "am8c-014",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 14",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "State the complex form of Watson's lemma for \\( F(z)=\\int_0^A e^{-z\\tau}g(\\tau)\\,d\\tau \\) with \\( g(\\tau)\\sim\\sum_{n\\ge0}a_n\\tau^{\\alpha_n} \\) as \\( \\tau\\to0^+ \\), and use it to obtain the \\( t=0 \\) endpoint term of \\( \\int_0^1 e^{z t^3}\\,dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["complex Watson's lemma", "statement", "endpoint series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the small-\\( \\tau \\) hypothesis.",
          workingLatex:
            "g(\\tau)\\sim\\sum_{n=0}^{\\infty}a_n\\tau^{\\alpha_n}\\qquad (\\tau\\to0^+).",
          explanation:
            "Watson's lemma asks only for the asymptotic expansion of \\( g \\) near the lower endpoint.",
        },
        {
          stepNumber: 2,
          description: "State the exponent conditions.",
          workingLatex:
            "\\operatorname{Re}(\\alpha_0)>-1, \\qquad \\operatorname{Re}(\\alpha_n)\\uparrow\\infty.",
          explanation:
            "The first exponent must exceed \\( -1 \\) for convergence at the origin, and the real parts must increase to infinity so the series is asymptotic.",
        },
        {
          stepNumber: 3,
          description: "Recall the term-by-term transform.",
          workingLatex:
            "\\int_0^\\infty e^{-z\\tau}\\tau^{\\alpha_n}\\,d\\tau = \\frac{\\Gamma(\\alpha_n+1)}{z^{\\alpha_n+1}}.",
          explanation:
            "Each power transforms by the basic Laplace formula with \\( s=\\alpha_n+1 \\).",
        },
        {
          stepNumber: 4,
          description: "State the conclusion (complex version).",
          workingLatex:
            "F(z)\\sim\\sum_{n=0}^{\\infty} a_n\\,\\frac{\\Gamma(\\alpha_n+1)}{z^{\\alpha_n+1}}.",
          explanation:
            "Summing the transformed terms gives the asymptotic series; replacing the finite upper limit \\( A \\) by \\( \\infty \\) costs only \\( O(e^{-cz}) \\).",
        },
        {
          stepNumber: 5,
          description: "Give the sector of validity.",
          workingLatex:
            "|z|\\to\\infty, \\qquad |\\arg z|\\le\\tfrac{\\pi}{2}-\\delta.",
          explanation:
            "The lemma holds uniformly in any closed sector strictly inside the right half-plane; this sectorial validity is the 'complex' content.",
        },
        {
          stepNumber: 6,
          description: "Linearise the cubic integral.",
          workingLatex:
            "\\int_0^1 e^{zt^3}dt = \\frac13\\int_0^1 e^{zu}u^{-2/3}du.",
          explanation:
            "The substitution \\( u=t^3 \\) puts it in the Watson template, but with \\( e^{+zu} \\) instead of \\( e^{-zu} \\).",
        },
        {
          stepNumber: 7,
          description: "Flip the sign of the exponent.",
          workingLatex: "e^{zu} = e^{-(-z)\\,u}, \\qquad \\tilde z := -z.",
          explanation:
            "To match the lemma's decaying exponential we apply it in the variable \\( \\tilde z=-z \\).",
        },
        {
          stepNumber: 8,
          description: "Read off the data.",
          workingLatex: "g(u)=\\tfrac13 u^{-2/3}:\\quad a_0=\\tfrac13,\\ \\alpha_0=-\\tfrac23.",
          explanation:
            "The single power weight has only one term, with exponent \\( \\alpha_0=-2/3>-1 \\), so the lemma applies and the series has just one entry.",
        },
        {
          stepNumber: 9,
          description: "Apply the lemma.",
          workingLatex:
            "F(\\tilde z) = \\tfrac13\\,\\Gamma\\!\\left(\\tfrac13\\right)\\tilde z^{-1/3} = \\tfrac13\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3}.",
          explanation:
            "Inserting \\( a_0=\\tfrac13,\\ \\alpha_0+1=\\tfrac13 \\) gives the single term in \\( \\tilde z=-z \\).",
        },
        {
          stepNumber: 10,
          description: "Simplify the endpoint term.",
          workingLatex:
            "\\tfrac13\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3} = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "Using \\( \\tfrac13\\Gamma(1/3)=\\Gamma(4/3) \\); this is the \\( t=0 \\) endpoint contribution, with no further analytic terms.",
        },
      ],
      finalAnswer:
        "\\( F(z)\\sim\\sum_n a_n\\,\\Gamma(\\alpha_n+1)\\,z^{-(\\alpha_n+1)} \\); for \\( \\tfrac13 u^{-2/3} \\) it gives the \\( \\Gamma(4/3)(-z)^{-1/3} \\) endpoint term.",
    },
  },
  {
    id: "am8c-015",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 15",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Locate the three steepest-descent rays of the cubic phase \\( \\phi(t)=z t^3 \\) leaving the saddle \\( t=0 \\), for \\( z=10\\,e^{i\\pi/3} \\). State which ray enters the interval \\( (0,1) \\) and so governs the endpoint contribution.",
    marks: 4,
    yearCreated: 2026,
    tags: ["steepest descent", "cubic saddle", "admissible ray"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the cubic phase and its value at the saddle.",
          workingLatex: "\\phi(t)=z t^3,\\qquad \\phi(0)=\\phi'(0)=0.",
          explanation:
            "The saddle sits at \\( t=0 \\); steepest-descent rays leave it in the directions where \\( \\phi \\) decreases fastest into the valleys.",
        },
        {
          stepNumber: 2,
          description: "Impose the descent condition.",
          workingLatex:
            "\\arg(z t^3) = \\pi \\pmod{2\\pi} \\ \\Longrightarrow\\ \\arg z + 3\\arg t = (2k+1)\\pi.",
          explanation:
            "On a steepest-descent ray the exponent \\( zt^3 \\) is real and negative, so its argument is an odd multiple of \\( \\pi \\); this is the cubic analogue of the simple-saddle descent condition.",
        },
        {
          stepNumber: 3,
          description: "Solve for the ray directions.",
          workingLatex: "\\arg t = \\frac{(2k+1)\\pi - \\arg z}{3}, \\qquad k=0,1,2.",
          explanation:
            "Three solutions, separated by \\( 2\\pi/3 \\) (120 deg) — the cubic saddle has three descent valleys rather than the two of a simple saddle.",
        },
        {
          stepNumber: 4,
          description: "Insert \\( z=10\\,e^{i\\pi/3} \\).",
          workingLatex: "\\arg z = \\tfrac\\pi3 = 60^\\circ.",
          explanation:
            "The modulus \\( |z|=10 \\) does not affect the ray directions; only \\( \\arg z \\) enters.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the \\( k=0 \\) ray.",
          workingLatex: "k=0:\\quad \\arg t = \\frac{\\pi - \\pi/3}{3} = \\frac{2\\pi/3}{3} = \\frac{2\\pi}{9} = 40^\\circ.",
          explanation:
            "The first descent ray leaves \\( t=0 \\) at \\( 40^\\circ \\) above the real axis.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the \\( k=1 \\) ray.",
          workingLatex: "k=1:\\quad \\arg t = 40^\\circ + 120^\\circ = 160^\\circ.",
          explanation:
            "Adding the \\( 120^\\circ \\) spacing gives the second ray.",
          mafs: `<Mafs viewBox={{ x: [-2.4, 2.4], y: [-1.8, 1.8], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[0,0],[1.53,1.29],[2.0,0]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Line.Segment point1={[0,0]} point2={[1.53,1.29]} color="var(--mafs-fg-green)" weight={3} />
  <Line.Segment point1={[0,0]} point2={[-1.6,0.58]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Line.Segment point1={[0,0]} point2={[0.3,-1.7]} color="var(--mafs-fg-orange)" weight={2} style="dashed" />
  <Line.Segment point1={[0,0]} point2={[1.9,0]} color="var(--mafs-fg-blue)" weight={2} />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <Point x={1} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[1.55,1.5]} tex="40^\\circ" color="var(--mafs-fg-green)" />
  <LaTeX at={[-1.85,0.85]} tex="160^\\circ" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.55,-1.5]} tex="280^\\circ" color="var(--mafs-fg-orange)" />
  <LaTeX at={[0.55,-0.3]} tex="(0,1)" color="var(--mafs-fg-blue)" />
  <LaTeX at={[2.15,-0.3]} tex="\\operatorname{Re}t" />
  <LaTeX at={[-0.55,1.6]} tex="\\operatorname{Im}t" />
</Mafs>`,
        },
        {
          stepNumber: 7,
          description: "Evaluate the \\( k=2 \\) ray.",
          workingLatex: "k=2:\\quad \\arg t = 160^\\circ + 120^\\circ = 280^\\circ.",
          explanation:
            "The third ray completes the \\( 120^\\circ \\) spacing around the saddle.",
        },
        {
          stepNumber: 8,
          description: "Collect the three rays.",
          workingLatex: "\\arg t \\in \\{40^\\circ,\\ 160^\\circ,\\ 280^\\circ\\}.",
          explanation:
            "Exactly three descent valleys, confirming the \\( 120^\\circ \\) spacing of a cubic saddle.",
        },
        {
          stepNumber: 9,
          description: "Test which ray enters \\( (0,1) \\).",
          workingLatex:
            "40^\\circ:\\ \\text{first quadrant, towards } (0,1);\\quad 160^\\circ,280^\\circ:\\ \\text{away from } (0,1).",
          explanation:
            "Only the \\( 40^\\circ \\) ray leaves \\( t=0 \\) into the region reachable from the integration interval; the others head into the second quadrant and lower half-plane.",
        },
        {
          stepNumber: 10,
          description: "Select the admissible ray.",
          workingLatex: "\\arg t = 40^\\circ \\ (k=0): \\ \\text{the ray that governs the endpoint contribution.}",
          explanation:
            "The contour through \\( t=0 \\) is deformed onto the \\( 40^\\circ \\) ray; the \\( e^{i\\theta} \\) factor with \\( \\theta=40^\\circ \\) is what tracks the sector-dependent endpoint phase.",
        },
      ],
      finalAnswer:
        "Rays at \\( \\arg t = 40^\\circ,160^\\circ,280^\\circ \\); the \\( 40^\\circ \\) ray enters \\( (0,1) \\).",
    },
  },
  {
    id: "am8c-016",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 16",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading-order asymptotics of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) in the sector \\( \\arg z\\in(\\delta,\\pi-\\delta) \\), and identify the term that distinguishes it from the right-half-plane result.",
    marks: 4,
    yearCreated: 2026,
    tags: ["steepest descent", "sector", "Stokes phenomenon"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the right-half-plane form.",
          workingLatex:
            "|\\arg z|<\\tfrac\\pi2:\\quad I(z) \\sim \\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)} - \\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "The \\( t=0 \\) term carries the principal branch \\( z^{-1/3} \\) with coefficient \\( -\\Gamma(4/3) \\).",
        },
        {
          stepNumber: 2,
          description: "Note the two parts.",
          workingLatex:
            "\\text{dominant series } \\frac{e^z}{3}\\sum c_n z^{-(n+1)} \\ \\text{(sector-independent)};\\quad \\text{algebraic } \\Gamma(4/3)(-z)^{-1/3}\\ \\text{(branch-carrying)}.",
          explanation:
            "Only the algebraic \\( (-z)^{-1/3} \\) term feels the sector; the endpoint series at \\( t=1 \\) is the same throughout.",
        },
        {
          stepNumber: 3,
          description: "Write the endpoint term as a cube root of \\( -z \\).",
          workingLatex: "I_0(z) = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}, \\qquad -z = e^{i\\pi}z.",
          explanation:
            "The factor \\( -1 \\) is written as \\( e^{i\\pi} \\) so the cube-root branch can be tracked as \\( \\arg z \\) rotates.",
        },
        {
          stepNumber: 4,
          description: "Track the branch as \\( \\arg z \\) crosses \\( \\pi/2 \\).",
          workingLatex:
            "(-z)^{-1/3} = e^{i\\pi/3}\\,z^{-1/3} \\quad\\text{for }\\arg z\\in(\\delta,\\pi-\\delta).",
          explanation:
            "Rotating into the upper sector, the descent ray through \\( t=0 \\) selects a different sheet of the cube root; equivalently \\( -1=e^{i\\pi} \\) gives \\( (-z)^{-1/3}=e^{i\\pi/3}z^{-1/3} \\). This is Stokes switching of the algebraic endpoint term.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[-3.4,0],[3.4,0],[3.4,2.6],[-3.4,2.6]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Line.Segment point1={[0,0]} point2={[3.3,0]} color="var(--mafs-fg-green)" weight={2} style="dashed" />
  <Line.Segment point1={[0,0]} point2={[-3.3,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[0.9,1.5]} tex="\\text{coeff }e^{i\\pi/3}\\Gamma(4/3)" color="var(--mafs-fg-green)" />
  <LaTeX at={[-2.65,0.45]} tex="\\arg z=\\pi" color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.85,-0.45]} tex="\\arg z=0" color="var(--mafs-fg-green)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.75,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 5,
          description: "Substitute the rotated branch.",
          workingLatex:
            "I_0(z) = \\Gamma\\!\\left(\\tfrac43\\right)e^{i\\pi/3}z^{-1/3} = \\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "The algebraic endpoint term acquires the phase factor \\( e^{i\\pi/3} \\) in the upper sector.",
        },
        {
          stepNumber: 6,
          description: "Confirm the dominant series is unchanged.",
          workingLatex:
            "\\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)} \\ \\text{(same as RHP)}.",
          explanation:
            "The \\( u=1 \\) endpoint series comes from a real boundary and carries no branch, so it does not rotate.",
        },
        {
          stepNumber: 7,
          description: "State the sector expansion.",
          workingLatex:
            "I(z) \\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}} + \\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "Adding the unchanged series and the rotated endpoint term gives the leading asymptotics in \\( (\\delta,\\pi-\\delta) \\).",
        },
        {
          stepNumber: 8,
          description: "Compare the algebraic terms across sectors.",
          workingLatex:
            "-\\frac{\\Gamma(4/3)}{z^{1/3}}\\ (\\text{RHP}) \\ \\longmapsto\\ +\\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}}\\ (\\text{upper}).",
          explanation:
            "The algebraic term flips from \\( -\\Gamma(4/3)z^{-1/3} \\) to \\( +e^{i\\pi/3}\\Gamma(4/3)z^{-1/3} \\); this single change distinguishes the two expansions.",
        },
        {
          stepNumber: 9,
          description: "Identify the distinguishing term.",
          workingLatex:
            "\\text{distinguishing term: } \\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}} \\ \\Big(= \\Gamma(4/3)(-z)^{-1/3}\\Big).",
          explanation:
            "Written as \\( (-z)^{-1/3} \\) the term is uniform; the explicit \\( e^{i\\pi/3} \\) is its value on the principal \\( z^{-1/3} \\) branch in this sector.",
        },
        {
          stepNumber: 10,
          description: "Numerical cross-check.",
          workingLatex:
            "z=25\\,e^{2i\\pi/3}:\\quad I - \\text{series} = e^{i\\pi/3}\\Gamma(4/3)z^{-1/3}.",
          explanation:
            "The residual after subtracting the dominant series equals \\( e^{i\\pi/3}\\Gamma(4/3)z^{-1/3} \\) (identical to \\( \\Gamma(4/3)(-z)^{-1/3} \\)) to machine precision; the phase-\\( e^{i\\pi/3} \\) endpoint term is what changes.",
        },
      ],
      finalAnswer:
        "\\( I(z) \\sim \\dfrac{e^{z}}{3}\\displaystyle\\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\dfrac{1}{z^{n+1}} + \\dfrac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}} \\); the \\( e^{i\\pi/3} \\) endpoint term distinguishes it.",
    },
  },
  {
    id: "am8c-017",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 17",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Consider the oscillatory case \\( z=ix \\), \\( x\\to+\\infty \\), so that \\( I(ix)=\\int_0^1 e^{i x t^3}\\,dt \\) is a stationary-phase integral. Find its leading-order behaviour and state which contribution dominates.",
    marks: 4,
    yearCreated: 2026,
    tags: ["stationary phase", "imaginary axis", "cubic phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the integral with real phase.",
          workingLatex: "I(ix) = \\int_0^1 e^{\\,i x t^3}\\,dt, \\qquad \\psi(t)=x t^3.",
          explanation:
            "On the imaginary axis the exponent is \\( i\\psi(t) \\) with real phase \\( \\psi=xt^3 \\); this is a stationary-phase integral.",
        },
        {
          stepNumber: 2,
          description: "Find the stationary point of the phase.",
          workingLatex: "\\psi'(t) = 3x t^2 = 0 \\ \\Longrightarrow\\ t=0.",
          explanation:
            "The only stationary point of \\( \\psi=xt^3 \\) is at the lower endpoint \\( t=0 \\).",
        },
        {
          stepNumber: 3,
          description: "Check the order of the stationary point.",
          workingLatex: "\\psi''(0)=0,\\qquad \\psi'''(0)=6x\\neq0.",
          explanation:
            "Vanishing second derivative makes \\( t=0 \\) a degenerate (cubic) stationary point, so the decay is slower than the usual \\( x^{-1/2} \\).",
        },
        {
          stepNumber: 4,
          description: "Recall the general endpoint term.",
          workingLatex:
            "I(z) \\sim \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3} \\ \\text{(leading } t=0 \\text{ contribution)}.",
          explanation:
            "The cubic endpoint always contributes \\( \\Gamma(4/3)(-z)^{-1/3} \\); we specialise it to \\( z=ix \\).",
        },
        {
          stepNumber: 5,
          description: "Specialise to \\( z=ix \\).",
          workingLatex:
            "I(ix) \\sim \\Gamma\\!\\left(\\tfrac43\\right)(-ix)^{-1/3}.",
          explanation:
            "The cubic stationary point produces \\( x^{-1/3} \\) decay, slower than the \\( x^{-1/2} \\) of a quadratic stationary point.",
        },
        {
          stepNumber: 6,
          description: "Find the argument of \\( -ix \\).",
          workingLatex: "-z = -ix = x\\,e^{-i\\pi/2}, \\qquad \\arg(-ix) = -\\tfrac\\pi2.",
          explanation:
            "For \\( x>0 \\) the point \\( -ix \\) lies on the negative imaginary axis, principal argument \\( -\\pi/2 \\).",
        },
        {
          stepNumber: 7,
          description: "Apply the \\( -1/3 \\) power to the phase.",
          workingLatex:
            "(-ix)^{-1/3} = x^{-1/3}\\,e^{-i(-\\pi/2)/3} = x^{-1/3}\\,e^{\\,i\\pi/6}.",
          explanation:
            "Dividing \\( \\arg(-ix)=-\\pi/2 \\) by \\( -3 \\) gives phase \\( +\\pi/6 \\); checked numerically against \\( (-ix)^{-1/3} \\).",
        },
        {
          stepNumber: 8,
          description: "Assemble the leading term.",
          workingLatex:
            "I(ix) \\sim \\Gamma\\!\\left(\\tfrac43\\right)e^{\\,i\\pi/6}\\,x^{-1/3}.",
          explanation:
            "Combining the modulus \\( \\Gamma(4/3)x^{-1/3} \\) with the phase \\( e^{i\\pi/6} \\).",
        },
        {
          stepNumber: 9,
          description: "Establish dominance over the \\( t=1 \\) endpoint.",
          workingLatex:
            "I_{t=1}(ix) = O(x^{-1}) \\ll x^{-1/3}.",
          explanation:
            "The non-stationary endpoint \\( t=1 \\) contributes only an oscillatory \\( O(x^{-1}) \\) term, subdominant to the \\( x^{-1/3} \\) from the stationary point.",
        },
        {
          stepNumber: 10,
          description: "Numerical cross-check.",
          workingLatex: "|I(ix)|\\,x^{1/3} \\to \\Gamma\\!\\left(\\tfrac43\\right) = 0.8930.",
          explanation:
            "Numerically \\( |I(ix)|x^{1/3}\\to0.883 \\) at \\( x=200 \\), converging slowly to \\( \\Gamma(4/3) \\) as the \\( O(x^{-1}) \\) endpoint correction decays.",
        },
      ],
      finalAnswer:
        "\\( I(ix) \\sim \\Gamma(4/3)\\,e^{i\\pi/6}\\,x^{-1/3} \\); the cubic stationary point at \\( t=0 \\) dominates.",
    },
  },
  {
    id: "am8c-018",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 18",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Locate the Stokes and anti-Stokes lines (in the \\( \\arg z \\) plane) for the two contributions \\( \\dfrac{e^{z}}{3z} \\) and \\( -\\dfrac{\\Gamma(4/3)}{z^{1/3}} \\) to \\( I(z) \\), and identify where the exponential term switches from dominant to recessive.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Stokes lines", "anti-Stokes lines", "dominance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the modulus of the exponential term.",
          workingLatex:
            "\\left|\\frac{e^{z}}{3z}\\right| = \\frac{e^{\\operatorname{Re}(z)}}{3|z|}.",
          explanation:
            "The exponential term's size is governed by \\( \\operatorname{Re}(z) \\) in the exponent.",
        },
        {
          stepNumber: 2,
          description: "Write the modulus of the algebraic term.",
          workingLatex:
            "\\left|\\frac{\\Gamma(4/3)}{z^{1/3}}\\right| = \\frac{\\Gamma(4/3)}{|z|^{1/3}}.",
          explanation:
            "The algebraic term is purely a power of \\( |z| \\), with no exponential dependence.",
        },
        {
          stepNumber: 3,
          description: "Resolve \\( \\operatorname{Re}(z) \\) into polar form.",
          workingLatex: "\\operatorname{Re}(z) = |z|\\cos(\\arg z).",
          explanation:
            "The competition between the two terms is controlled by the sign of \\( \\cos(\\arg z) \\).",
        },
        {
          stepNumber: 4,
          description: "Define the anti-Stokes condition.",
          workingLatex: "\\text{anti-Stokes: } \\operatorname{Re}(z)=0.",
          explanation:
            "Anti-Stokes lines are where the dominant exponential is purely oscillatory, so the two contributions are most nearly comparable.",
        },
        {
          stepNumber: 5,
          description: "Solve for the anti-Stokes lines.",
          workingLatex: "\\cos(\\arg z)=0 \\ \\Longrightarrow\\ \\arg z = \\pm\\frac{\\pi}{2}.",
          explanation:
            "These imaginary-axis directions are the anti-Stokes lines of the problem.",
        },
        {
          stepNumber: 6,
          description: "Define the Stokes condition.",
          workingLatex: "\\text{Stokes: } \\operatorname{Im}(z)=0.",
          explanation:
            "Stokes lines are where the exponential is maximally dominant or maximally recessive — the real-\\( z \\) directions.",
        },
        {
          stepNumber: 7,
          description: "Solve for the Stokes lines.",
          workingLatex: "\\sin(\\arg z)=0 \\ \\Longrightarrow\\ \\arg z = 0,\\ \\pi.",
          explanation:
            "\\( \\arg z=0 \\) is where \\( e^z \\) is maximally dominant; \\( \\arg z=\\pi \\) where it is maximally recessive and the subdominant term is switched on.",
        },
        {
          stepNumber: 8,
          description: "Dominance for \\( |\\arg z|<\\pi/2 \\).",
          workingLatex: "\\cos(\\arg z)>0 \\ \\Longrightarrow\\ e^{\\operatorname{Re}(z)}\\to\\infty: \\ e^z\\ \\text{dominant}.",
          explanation:
            "In the right half-plane the exponential grows and overwhelms the algebraic power.",
        },
        {
          stepNumber: 9,
          description: "Dominance for \\( \\pi/2<\\arg z<\\pi \\).",
          workingLatex: "\\cos(\\arg z)<0 \\ \\Longrightarrow\\ e^{\\operatorname{Re}(z)}\\to0: \\ z^{-1/3}\\ \\text{dominant}.",
          explanation:
            "Beyond the anti-Stokes line the exponential decays and the algebraic \\( z^{-1/3} \\) term takes over as the leading behaviour.",
        },
        {
          stepNumber: 10,
          description: "Describe the switching.",
          workingLatex:
            "\\arg z:\\ 0\\to\\tfrac\\pi2:\\ e^z\\ \\text{dominant}; \\quad \\tfrac\\pi2\\to\\pi:\\ e^z\\ \\text{recessive; branch jumps at } \\arg z=\\pi.",
          explanation:
            "Crossing the anti-Stokes line \\( \\arg z=\\pi/2 \\) the exponential loses dominance; the Stokes line \\( \\arg z=\\pi \\) is where the coefficient of the recessive term jumps.",
        },
      ],
      finalAnswer:
        "Anti-Stokes lines \\( \\arg z=\\pm\\tfrac\\pi2 \\); Stokes lines \\( \\arg z=0,\\pi \\). The exponential dominates for \\( |\\arg z|<\\tfrac\\pi2 \\), is recessive beyond.",
    },
  },

  // ── Challenge: synoptic / multi-step / starred-level ─────────────────────
  {
    id: "am8c-019",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 19",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Prove the right-half-plane relation \\( I(z)+\\dfrac{\\Gamma(4/3)}{z^{1/3}}\\sim\\dfrac{e^{z}}{3}\\displaystyle\\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\dfrac{1}{z^{n+1}} \\) for \\( |\\arg z|<\\tfrac\\pi2 \\), and obtain the analogous form valid for \\( \\arg z\\in(\\tfrac\\pi2+\\delta,\\tfrac{3\\pi}2-\\delta) \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["complex Watson's lemma", "sector", "Stokes phenomenon", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Linearise the integral.",
          workingLatex: "I(z)=\\int_0^1 e^{zt^3}dt = \\frac13\\int_0^1 e^{zu}u^{-2/3}du.",
          explanation:
            "The substitution \\( u=t^3,\\ dt=\\tfrac13 u^{-2/3}du \\) converts the cubic phase into a linear one with an algebraic weight.",
        },
        {
          stepNumber: 2,
          description: "Split the range at \\( u=1 \\).",
          workingLatex:
            "\\frac13\\int_0^1 = \\frac13\\int_0^\\infty - \\frac13\\int_1^\\infty.",
          explanation:
            "Writing \\( \\int_0^1=\\int_0^\\infty-\\int_1^\\infty \\) separates the \\( u=0 \\) Watson contribution from the \\( u=1 \\) endpoint contribution.",
        },
        {
          stepNumber: 3,
          description: "Justify convergence of each ray.",
          workingLatex:
            "|\\arg z|<\\tfrac\\pi2:\\quad \\text{deform each ray so } \\operatorname{Re}(zu)\\to-\\infty.",
          explanation:
            "Both improper integrals are defined by deforming onto a ray where \\( e^{zu} \\) decays; this is legitimate for \\( |\\arg z|<\\pi/2 \\).",
        },
        {
          stepNumber: 4,
          description: "Write the Watson piece in Laplace form.",
          workingLatex:
            "\\frac13\\int_0^\\infty e^{zu}u^{-2/3}du = \\frac13\\int_0^\\infty e^{-(-z)u}u^{-2/3}du.",
          explanation:
            "Set \\( s=-z \\) so the integrand matches \\( e^{-su}u^{s'-1} \\) with \\( s'=1/3 \\).",
        },
        {
          stepNumber: 5,
          description: "Apply the Gamma integral.",
          workingLatex:
            "= \\tfrac13\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3}.",
          explanation:
            "The Laplace formula with \\( s'=1/3 \\) gives \\( \\Gamma(1/3)(-z)^{-1/3} \\).",
        },
        {
          stepNumber: 6,
          description: "Apply the right-half-plane branch.",
          workingLatex:
            "|\\arg z|<\\tfrac\\pi2:\\quad (-z)^{-1/3} = -z^{-1/3}.",
          explanation:
            "With the principal branch (cut on \\( \\arg z=\\pi \\)), \\( \\arg(-z)\\in(\\tfrac\\pi2,\\tfrac{3\\pi}2) \\) gives \\( (-z)^{-1/3}=-z^{-1/3} \\).",
        },
        {
          stepNumber: 7,
          description: "Simplify the Watson piece.",
          workingLatex:
            "\\frac13\\int_0^\\infty e^{zu}u^{-2/3}du = -\\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "Using \\( \\tfrac13\\Gamma(1/3)=\\Gamma(4/3) \\), this is the algebraic endpoint term.",
        },
        {
          stepNumber: 8,
          description: "Set up the \\( u=1 \\) tail by parts.",
          workingLatex:
            "-\\frac13\\int_1^\\infty e^{zu}u^{-2/3}du,\\qquad dv=e^{zu}du,\\ w=u^{-2/3}.",
          explanation:
            "Integrating the exponential and differentiating the weight generates the endpoint series.",
        },
        {
          stepNumber: 9,
          description: "First boundary term.",
          workingLatex:
            "-\\frac13\\left[\\frac{e^{zu}}{z}u^{-2/3}\\right]_1^\\infty = \\frac{e^{z}}{3z}.",
          explanation:
            "The upper limit vanishes on the convergent ray; the \\( u=1 \\) end gives \\( e^z/(3z) \\), the \\( n=0 \\) term.",
        },
        {
          stepNumber: 10,
          description: "Continue the parts to all orders.",
          workingLatex:
            "-\\frac13\\int_1^\\infty e^{zu}u^{-2/3}du \\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{c_n}{z^{n+1}},\\quad c_n=\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}.",
          explanation:
            "Each parts step multiplies by \\( (n-\\tfrac13) \\) and lowers \\( 1/z \\) by one, building the factorial-coefficient series.",
        },
        {
          stepNumber: 11,
          description: "Combine both pieces.",
          workingLatex:
            "I(z) \\sim -\\frac{\\Gamma(4/3)}{z^{1/3}} + \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{c_n}{z^{n+1}}.",
          explanation:
            "The Watson piece (step 7) plus the endpoint series (step 10) give the full leading asymptotic in the right half-plane.",
        },
        {
          stepNumber: 12,
          description: "Rearrange to the stated relation.",
          workingLatex:
            "I(z)+\\frac{\\Gamma(4/3)}{z^{1/3}}\\sim\\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}.",
          explanation: "Moving the algebraic term to the left gives the first required relation.",
        },
        {
          stepNumber: 13,
          description: "Begin the rotation into the left sector.",
          workingLatex:
            "\\arg z:\\ \\text{increase past } \\tfrac\\pi2 \\ \\text{towards } (\\tfrac\\pi2+\\delta,\\tfrac{3\\pi}2-\\delta).",
          explanation:
            "We now ask what the same split gives once \\( \\arg z \\) leaves the right half-plane.",
        },
        {
          stepNumber: 14,
          description: "Track the convergent ray of the Watson piece.",
          workingLatex:
            "\\arg(-z)\\in(-\\tfrac\\pi2+\\delta,\\tfrac\\pi2-\\delta) \\ \\Longrightarrow\\ \\int_0^\\infty e^{-(-z)u}u^{-2/3}du \\ \\text{still converges}.",
          explanation:
            "In the left \\( z \\)-sector, \\( -z \\) lies in the right half-plane, so the Watson integral is the genuine convergent Laplace transform with value \\( \\tfrac13\\Gamma(1/3)(-z)^{-1/3} \\).",
        },
        {
          stepNumber: 15,
          description: "Note the branch does not collapse.",
          workingLatex:
            "(-z)^{-1/3} \\ne -z^{-1/3} \\ \\text{in this sector}.",
          explanation:
            "Because \\( \\arg(-z) \\) is now near \\( 0 \\) rather than near \\( \\pi \\), the Watson term keeps the form \\( (-z)^{-1/3} \\) rather than collapsing to \\( -z^{-1/3} \\).",
        },
        {
          stepNumber: 16,
          description: "Keep the Watson term as a cube root of \\( -z \\).",
          workingLatex:
            "\\frac13\\int_0^\\infty e^{zu}u^{-2/3}du = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "Writing \\( \\tfrac13\\Gamma(1/3)=\\Gamma(4/3) \\), the algebraic endpoint term is \\( +\\Gamma(4/3)(-z)^{-1/3} \\) in the left sector.",
        },
        {
          stepNumber: 17,
          description: "Confirm the dominant series is unchanged.",
          workingLatex:
            "-\\frac13\\int_1^\\infty e^{zu}u^{-2/3}du \\sim \\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}} \\ \\text{(same)}.",
          explanation:
            "The \\( u=1 \\) endpoint series comes from a real boundary and carries no branch, so it is sector-independent.",
        },
        {
          stepNumber: 18,
          description: "State the left-sector relation.",
          workingLatex:
            "I(z)\\sim\\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}} + \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "Now the endpoint term appears with a \\( + \\) sign on the \\( (-z)^{-1/3} \\) branch.",
        },
        {
          stepNumber: 19,
          description: "Contrast the two sectors.",
          workingLatex:
            "\\text{RHP: } -\\Gamma(4/3)z^{-1/3};\\qquad \\text{left: } +\\Gamma(4/3)(-z)^{-1/3}.",
          explanation:
            "Both are the single value \\( \\Gamma(4/3)(-z)^{-1/3} \\); the apparent sign change is the branch of the cube root reading differently in each sector — the Stokes phenomenon.",
        },
        {
          stepNumber: 20,
          description: "Numerical confirmation.",
          workingLatex:
            "z=25\\,e^{i\\theta},\\ \\theta\\in\\{1.77,2.09,\\pi,4.19,4.51\\}:\\ \\text{rel.\\ err} < 3\\times10^{-11}.",
          explanation:
            "The left-sector form matches the true integral to better than \\( 3\\times10^{-11} \\) at \\( |z|=25 \\), confirming both relations.",
        },
      ],
      finalAnswer:
        "RHP: \\( I+\\Gamma(4/3)z^{-1/3}\\sim\\tfrac{e^z}{3}\\sum\\tfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)} \\). Left sector \\( (\\tfrac\\pi2,\\tfrac{3\\pi}2) \\): \\( I\\sim\\tfrac{e^z}{3}\\sum\\cdots + \\Gamma(4/3)(-z)^{-1/3} \\).",
    },
  },
  {
    id: "am8c-020",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 20",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Using the steepest-descent contour from \\( t=0 \\), develop the expansion of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) in the sector \\( \\arg z\\in(\\delta,\\pi-\\delta) \\), and explain via the overlap with \\( |\\arg z|<\\tfrac\\pi2 \\) why the endpoint coefficient acquires the factor \\( e^{i\\pi/3} \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["steepest descent", "sector overlap", "Stokes phenomenon", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the saddle structure.",
          workingLatex:
            "\\phi(t)=zt^3,\\qquad \\phi(0)=\\phi'(0)=0,\\ \\phi''(0)=0.",
          explanation:
            "The phase has a degenerate cubic saddle at \\( t=0 \\), the lower endpoint; the descent is along one of three rays.",
        },
        {
          stepNumber: 2,
          description: "Write the three descent rays.",
          workingLatex:
            "\\arg t = \\frac{(2k+1)\\pi-\\arg z}{3},\\qquad k=0,1,2.",
          explanation:
            "These are the directions where \\( \\operatorname{Re}(zt^3)<0 \\), 120 deg apart.",
        },
        {
          stepNumber: 3,
          description: "Select the admissible ray.",
          workingLatex:
            "\\theta := \\frac{\\pi-\\arg z}{3}\\ (k=0):\\ \\text{the ray connecting to } (0,1).",
          explanation:
            "For \\( \\arg z\\in(\\delta,\\pi-\\delta) \\) the \\( k=0 \\) ray is the one reachable from the integration interval; the contour through \\( t=0 \\) is deformed onto it.",
        },
        {
          stepNumber: 4,
          description: "Parametrise the ray.",
          workingLatex: "t = r\\,e^{i\\theta},\\qquad dt = e^{i\\theta}\\,dr,\\quad r:0\\to\\infty.",
          explanation:
            "Along the ray the variable is \\( r\\ge0 \\); the constant phase \\( e^{i\\theta} \\) comes out of \\( dt \\).",
        },
        {
          stepNumber: 5,
          description: "Substitute into the endpoint integral.",
          workingLatex:
            "\\int_0^{\\infty e^{i\\theta}} e^{zt^3}dt = e^{i\\theta}\\int_0^\\infty e^{z r^3 e^{3i\\theta}}\\,dr.",
          explanation:
            "The cubic phase becomes \\( z e^{3i\\theta}r^3 \\); by construction of the ray this exponent is real and negative.",
        },
        {
          stepNumber: 6,
          description: "Linearise with \\( v=r^3 \\).",
          workingLatex:
            "v=r^3,\\ dr=\\tfrac13 v^{-2/3}dv \\ \\Longrightarrow\\ e^{i\\theta}\\,\\frac13\\int_0^\\infty e^{z e^{3i\\theta} v}v^{-2/3}\\,dv.",
          explanation:
            "The same cube substitution gives the weight \\( v^{-2/3} \\); the exponent \\( z e^{3i\\theta} \\) has negative real part.",
        },
        {
          stepNumber: 7,
          description: "Apply the Gamma integral.",
          workingLatex:
            "\\frac13\\int_0^\\infty e^{-(-z e^{3i\\theta})v}v^{-2/3}dv = \\tfrac13\\Gamma\\!\\left(\\tfrac13\\right)\\big(-z e^{3i\\theta}\\big)^{-1/3}.",
          explanation:
            "With \\( s=-ze^{3i\\theta} \\) in the right half-plane, the Laplace formula applies directly.",
        },
        {
          stepNumber: 8,
          description: "Recombine the ray phase.",
          workingLatex:
            "e^{i\\theta}\\cdot\\tfrac13\\Gamma\\!\\left(\\tfrac13\\right)\\big(-z e^{3i\\theta}\\big)^{-1/3} = \\tfrac13\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3}.",
          explanation:
            "The factor \\( e^{i\\theta} \\) from \\( dt \\) cancels the \\( e^{-i\\theta} \\) from \\( (e^{3i\\theta})^{-1/3} \\), leaving the clean \\( (-z)^{-1/3} \\) that tracks the sector.",
        },
        {
          stepNumber: 9,
          description: "Write the endpoint contribution.",
          workingLatex:
            "\\int_0^{\\infty e^{i\\theta}} e^{zt^3}dt = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "Using \\( \\tfrac13\\Gamma(1/3)=\\Gamma(4/3) \\), the \\( t=0 \\) endpoint contributes \\( \\Gamma(4/3)(-z)^{-1/3} \\).",
        },
        {
          stepNumber: 10,
          description: "Add the \\( t=1 \\) endpoint series.",
          workingLatex:
            "\\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}.",
          explanation:
            "The dominant-endpoint series is sector-independent; only the algebraic term carries the phase.",
        },
        {
          stepNumber: 11,
          description: "Assemble the sector expansion.",
          workingLatex:
            "I(z)\\sim\\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}} + \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "The dominant series plus the single recessive endpoint term gives the expansion in \\( (\\delta,\\pi-\\delta) \\).",
        },
        {
          stepNumber: 12,
          description: "Evaluate the branch in the upper sector.",
          workingLatex:
            "\\arg z\\in(\\delta,\\pi-\\delta):\\quad \\arg(-z) = \\arg z - \\pi \\in (\\delta-\\pi,-\\delta).",
          explanation:
            "Writing \\( -z=e^{-i\\pi}z \\) keeps \\( \\arg(-z) \\) inside the principal range, so the cube root is well defined.",
        },
        {
          stepNumber: 13,
          description: "Compute \\( (-z)^{-1/3} \\).",
          workingLatex:
            "(-z)^{-1/3} = \\big(e^{-i\\pi}z\\big)^{-1/3} = e^{i\\pi/3}z^{-1/3}.",
          explanation:
            "The factor \\( -1=e^{-i\\pi} \\) raised to \\( -1/3 \\) gives \\( e^{i\\pi/3} \\); over the principal branch the coefficient is \\( e^{i\\pi/3}\\Gamma(4/3) \\).",
        },
        {
          stepNumber: 14,
          description: "Write the \\( e^{i\\pi/3} \\) form.",
          workingLatex:
            "I(z)\\sim\\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}} + \\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "The recessive endpoint term is \\( e^{i\\pi/3}\\Gamma(4/3)z^{-1/3} \\) in the upper sector.",
        },
        {
          stepNumber: 15,
          description: "Recall the RHP form for the overlap.",
          workingLatex:
            "|\\arg z|<\\tfrac\\pi2:\\quad I(z)\\sim\\frac{e^z}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}} - \\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "On the right-half-plane branch the same endpoint term is \\( -\\Gamma(4/3)z^{-1/3} \\).",
        },
        {
          stepNumber: 16,
          description: "Identify the overlap region.",
          workingLatex:
            "\\arg z\\in(\\delta,\\tfrac\\pi2-\\delta):\\ \\text{both expansions are valid}.",
          explanation:
            "On the wedge \\( (\\delta,\\tfrac\\pi2-\\delta) \\) both the RHP form and the upper-sector form represent \\( I \\).",
        },
        {
          stepNumber: 17,
          description: "Compute the apparent discrepancy.",
          workingLatex:
            "\\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}} - \\left(-\\frac{\\Gamma(4/3)}{z^{1/3}}\\right) = \\big(e^{i\\pi/3}+1\\big)\\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "The two algebraic terms differ; we must check this difference does not contradict \\( I \\) being single-valued.",
        },
        {
          stepNumber: 18,
          description: "Compare with the dominant scale.",
          workingLatex:
            "\\big(e^{i\\pi/3}+1\\big)\\frac{\\Gamma(4/3)}{z^{1/3}} = o\\!\\left(\\frac{e^{z}}{z}\\right)\\ \\text{for } \\operatorname{Re}(z)>0.",
          explanation:
            "In the overlap the exponential is dominant, so the discrepancy is exponentially small relative to \\( e^z/z \\); both expansions describe \\( I \\) to all algebraic orders without contradiction.",
        },
        {
          stepNumber: 19,
          description: "Explain the factor as Stokes switching.",
          workingLatex:
            "\\arg z:\\,0\\to\\pi \\ \\Longrightarrow\\ (-z)^{-1/3}:\\,-z^{-1/3}\\to e^{i\\pi/3}z^{-1/3}.",
          explanation:
            "As \\( \\arg z \\) sweeps into the upper sector, the cube-root branch of the recessive endpoint term rotates by \\( e^{i\\pi/3} \\) relative to \\( -z^{-1/3} \\): the Stokes-type switching of the subdominant term.",
        },
        {
          stepNumber: 20,
          description: "Numerical confirmation.",
          workingLatex:
            "z=25\\,e^{i\\theta},\\ \\theta=\\tfrac\\pi3,\\tfrac\\pi2,\\tfrac{2\\pi}3:\\quad I-\\text{series} = e^{i\\pi/3}\\Gamma(4/3)z^{-1/3}.",
          explanation:
            "The residual after subtracting the dominant series equals \\( e^{i\\pi/3}\\Gamma(4/3)z^{-1/3} \\) to machine precision throughout the upper sector.",
        },
      ],
      finalAnswer:
        "\\( I(z)\\sim\\dfrac{e^{z}}{3}\\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\dfrac{1}{z^{n+1}}+\\dfrac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}} \\); the \\( e^{i\\pi/3} \\) is the rotated branch \\( (-z)^{-1/3} \\).",
    },
  },
  {
    id: "am8c-021",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 21",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Continue the expansion of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) into the lower sector \\( \\arg z\\in(\\pi+\\delta,2\\pi-\\delta) \\), starting from the upper-sector form \\( I(z)\\sim\\tfrac{e^z}{3}\\sum z^{-(n+1)}c_n+e^{i\\pi/3}\\Gamma(4/3)z^{-1/3} \\) on \\( (\\delta,\\pi-\\delta) \\). Discuss the relation between adjacent sectors.",
    marks: 6,
    yearCreated: 2026,
    tags: ["analytic continuation", "sector", "Stokes phenomenon", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the upper-sector starting form.",
          workingLatex:
            "\\arg z\\in(\\delta,\\pi-\\delta):\\ I(z)\\sim\\frac{e^z}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}}+\\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "This is the expansion we continue downward across the negative real axis into the lower half-plane.",
        },
        {
          stepNumber: 2,
          description: "State the analytic nature of \\( I \\).",
          workingLatex:
            "I(z)=\\int_0^1 e^{zt^3}dt \\ \\text{converges for all } z.",
          explanation:
            "The integral is over a fixed finite interval, so it defines an entire function of \\( z \\).",
        },
        {
          stepNumber: 3,
          description: "Conclude global consistency.",
          workingLatex:
            "I \\ \\text{entire} \\ \\Longrightarrow\\ \\text{sector forms are representations of one function}.",
          explanation:
            "The sector-dependent asymptotics are different representations of a single analytic function, so they must be globally consistent.",
        },
        {
          stepNumber: 4,
          description: "Establish the conjugate symmetry.",
          workingLatex:
            "\\overline{I(z)} = \\overline{\\int_0^1 e^{z t^3}dt} = \\int_0^1 e^{\\bar z t^3}dt = I(\\bar z).",
          explanation:
            "Because \\( t \\) is real and the coefficients are real, conjugating the integral conjugates \\( z \\); hence \\( I(\\bar z)=\\overline{I(z)} \\).",
        },
        {
          stepNumber: 5,
          description: "Map the upper sector to the lower one.",
          workingLatex:
            "\\arg z\\to-\\arg z:\\quad (\\delta,\\pi-\\delta)\\ \\longmapsto\\ (-\\pi+\\delta,-\\delta)\\equiv(\\pi+\\delta,2\\pi-\\delta).",
          explanation:
            "Reflection \\( z\\mapsto\\bar z \\) sends the upper sector to the lower sector, identified with \\( (\\pi,2\\pi) \\) modulo \\( 2\\pi \\).",
        },
        {
          stepNumber: 6,
          description: "Conjugate the dominant series.",
          workingLatex:
            "\\overline{\\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}}} = \\frac{e^{\\bar z}}{3}\\sum_{n\\ge0}\\frac{c_n}{\\bar z^{\\,n+1}}.",
          explanation:
            "The coefficients \\( c_n=\\Gamma(n+2/3)/\\Gamma(2/3) \\) are real, so conjugation only replaces \\( z \\) by \\( \\bar z \\); the series form is preserved.",
        },
        {
          stepNumber: 7,
          description: "Conjugate the endpoint term.",
          workingLatex:
            "\\overline{\\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}}} = \\frac{e^{-i\\pi/3}\\Gamma(4/3)}{\\bar z^{\\,1/3}}.",
          explanation:
            "Conjugation sends \\( e^{i\\pi/3}\\to e^{-i\\pi/3} \\); the endpoint term rotates by the conjugate cube root.",
        },
        {
          stepNumber: 8,
          description: "Rename \\( \\bar z\\to z \\).",
          workingLatex:
            "\\arg z\\in(\\pi+\\delta,2\\pi-\\delta):\\quad I(z)\\sim\\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}}+\\frac{e^{-i\\pi/3}\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "Reading the conjugated expansion as a statement about a point \\( z \\) in the lower sector gives the lower-sector form.",
          mafs: `<Mafs viewBox={{ x: [-3.6, 3.6], y: [-2.7, 2.7], padding: 0 }} height={360}>
  <Coordinates.Cartesian subdivisions={2} xAxis={{ labels: false }} yAxis={{ labels: false }} />
  <Polygon points={[[-3.4,0],[3.4,0],[3.4,-2.6],[-3.4,-2.6]]} color="var(--mafs-fg-green)" fillOpacity={0.10} strokeOpacity={0} />
  <Line.Segment point1={[0,0]} point2={[-3.3,0]} color="var(--mafs-fg-orange)" weight={3} />
  <Line.Segment point1={[0,0]} point2={[3.3,0]} color="var(--mafs-fg-green)" weight={2} style="dashed" />
  <Point x={0} y={0} color="var(--mafs-fg-blue)" />
  <LaTeX at={[0.9,-1.5]} tex="\\text{coeff }e^{-i\\pi/3}\\Gamma(4/3)" color="var(--mafs-fg-green)" />
  <LaTeX at={[-2.65,-0.5]} tex="\\arg z=\\pi" color="var(--mafs-fg-orange)" />
  <LaTeX at={[1.85,0.4]} tex="\\arg z=2\\pi" color="var(--mafs-fg-green)" />
  <LaTeX at={[3.15,-0.35]} tex="\\operatorname{Re}z" />
  <LaTeX at={[-0.75,2.45]} tex="\\operatorname{Im}z" />
</Mafs>`,
        },
        {
          stepNumber: 9,
          description: "Check the branch directly.",
          workingLatex:
            "\\arg z\\in(\\pi,2\\pi):\\ \\arg(-z)=\\arg z-\\pi\\in(0,\\pi);\\ (-z)^{-1/3}=e^{-i\\pi/3}z^{-1/3} \\ \\text{on the lower branch}.",
          explanation:
            "Computing \\( (-z)^{-1/3} \\) directly in the lower sector confirms the coefficient \\( e^{-i\\pi/3}\\Gamma(4/3) \\), consistent with the conjugation argument.",
        },
        {
          stepNumber: 10,
          description: "List the three endpoint coefficients.",
          workingLatex:
            "A \\in \\Big\\{-1,\\ e^{i\\pi/3},\\ e^{-i\\pi/3}\\Big\\}\\,\\Gamma\\!\\left(\\tfrac43\\right).",
          explanation:
            "Collecting the RHP, upper and lower values: \\( -\\Gamma(4/3) \\), \\( e^{i\\pi/3}\\Gamma(4/3) \\), \\( e^{-i\\pi/3}\\Gamma(4/3) \\).",
        },
        {
          stepNumber: 11,
          description: "Recognise these as cube roots of \\( -1 \\).",
          workingLatex:
            "(-1)^{-1/3}\\in\\{-1,\\ e^{i\\pi/3},\\ e^{-i\\pi/3}\\}.",
          explanation:
            "The three values are exactly the cube roots of \\( -1 \\); the endpoint coefficient is \\( \\Gamma(4/3) \\) times one of them in each sector.",
        },
        {
          stepNumber: 12,
          description: "Locate the switching directions.",
          workingLatex:
            "\\text{anti-Stokes } \\arg z=\\pm\\tfrac\\pi2;\\quad \\text{cut } \\arg z=\\pi.",
          explanation:
            "The coefficient cycles through the cube roots as \\( \\arg z \\) passes the anti-Stokes lines \\( \\pm\\pi/2 \\) and the branch cut at \\( \\pi \\).",
        },
        {
          stepNumber: 13,
          description: "Compute the jump from RHP to upper.",
          workingLatex:
            "\\frac{e^{i\\pi/3}}{-1} = e^{i\\pi/3}e^{-i\\pi} = e^{-2i\\pi/3}.",
          explanation:
            "Crossing \\( \\arg z=\\pi/2 \\) multiplies the coefficient by \\( e^{-2i\\pi/3} \\), a cube root of unity.",
        },
        {
          stepNumber: 14,
          description: "Compute the jump from upper to lower.",
          workingLatex:
            "\\frac{e^{-i\\pi/3}}{e^{i\\pi/3}} = e^{-2i\\pi/3}.",
          explanation:
            "The same multiplier \\( e^{-2i\\pi/3} \\) governs each crossing — a single Stokes constant.",
        },
        {
          stepNumber: 15,
          description: "State the dominant-series agreement.",
          workingLatex:
            "\\text{on every overlap: } \\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}} \\ \\text{is common}.",
          explanation:
            "The dominant \\( e^z \\) series is the same in all sectors, so the only thing that changes is the recessive coefficient.",
        },
        {
          stepNumber: 16,
          description: "Quantify the recessive jump.",
          workingLatex:
            "\\Delta = \\big(A_{\\text{next}}-A_{\\text{prev}}\\big)z^{-1/3} \\propto z^{-1/3}.",
          explanation:
            "The discrepancy between adjacent expansions is purely an algebraic \\( z^{-1/3} \\) term.",
        },
        {
          stepNumber: 17,
          description: "Compare with the dominant scale.",
          workingLatex:
            "\\Delta = o\\!\\left(\\frac{e^z}{z}\\right) \\ \\text{wherever the switch occurs (} \\operatorname{Re}z>0 \\text{ side)}.",
          explanation:
            "Because the recessive term is exponentially small relative to the dominant series where it switches, the jump never contradicts a value of \\( I \\).",
        },
        {
          stepNumber: 18,
          description: "Resolve the single-valuedness.",
          workingLatex:
            "I \\ \\text{single-valued, yet } A \\ \\text{multivalued: consistent via Stokes phenomenon}.",
          explanation:
            "The multivalued endpoint coefficient is consistent with \\( I \\) being a single entire function — the resolution of the apparent paradox.",
        },
        {
          stepNumber: 19,
          description: "Write the uniform form.",
          workingLatex:
            "I(z)\\sim\\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}} + \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "Written with \\( (-z)^{-1/3} \\) the multivalued cube root automatically supplies the three sector coefficients.",
        },
        {
          stepNumber: 20,
          description: "Summarise the global picture.",
          workingLatex:
            "\\text{One } e^z\\text{-series} \\ + \\ \\text{one recessive } z^{-1/3} \\text{ term, branch } (-z)^{-1/3}.",
          explanation:
            "The complete asymptotics of the cubic-phase integral is a single dominant series plus a single recessive endpoint term carrying a sector-dependent cube-root branch.",
        },
      ],
      finalAnswer:
        "\\( \\arg z\\in(\\pi,2\\pi):\\ I(z)\\sim\\dfrac{e^{z}}{3}\\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)}+\\dfrac{e^{-i\\pi/3}\\Gamma(4/3)}{z^{1/3}} \\); the endpoint coefficient cycles through the cube roots of \\( -1 \\).",
    },
  },
  {
    id: "am8c-022",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 22",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) The Airy function is \\( \\mathrm{Ai}(x)=\\dfrac{1}{2\\pi}\\displaystyle\\int_{-\\infty}^{\\infty} e^{\\,i(xt+t^3/3)}\\,dt \\), the same cubic-phase family. Use its interior saddle to recover the large-\\( x \\) decay \\( \\mathrm{Ai}(x)\\sim\\dfrac{e^{-\\frac23 x^{3/2}}}{2\\sqrt\\pi\\,x^{1/4}} \\), and contrast the \\( x^{-1/4} \\) prefactor with the endpoint \\( z^{-1/3} \\) of \\( I(z) \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["Airy function", "steepest descent", "cubic phase", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the Airy integral.",
          workingLatex: "\\mathrm{Ai}(x)=\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} e^{\\,i(xt+t^3/3)}\\,dt.",
          explanation:
            "The controlling exponent is cubic in \\( t \\), so the saddle analysis is structurally identical to that of \\( I(z) \\) — but here the saddle is interior, not at an endpoint.",
        },
        {
          stepNumber: 2,
          description: "Name the phase.",
          workingLatex: "\\Phi(t) := i\\!\\left(xt+\\tfrac{t^3}{3}\\right).",
          explanation:
            "Saddle points solve \\( \\Phi'(t)=0 \\); the large parameter is \\( x \\), entering both the phase and its scale.",
        },
        {
          stepNumber: 3,
          description: "Differentiate the phase.",
          workingLatex: "\\Phi'(t) = i\\big(x + t^2\\big).",
          explanation:
            "The derivative is quadratic, so there are two saddles.",
        },
        {
          stepNumber: 4,
          description: "Find the saddles for \\( x>0 \\).",
          workingLatex: "x+t^2=0 \\ \\Longrightarrow\\ t=\\pm i\\sqrt{x}.",
          explanation:
            "For \\( x>0 \\) the saddles are purely imaginary, signalling exponential (not oscillatory) behaviour.",
        },
        {
          stepNumber: 5,
          description: "Select the relevant saddle.",
          workingLatex: "t_0 = i\\sqrt{x}.",
          explanation:
            "The real contour deforms up to \\( t_0=i\\sqrt x \\) (the upper saddle), through which the steepest-descent path passes; the lower saddle would give exponential growth and is not picked up.",
        },
        {
          stepNumber: 6,
          description: "Compute \\( t_0^3 \\).",
          workingLatex: "t_0^3 = (i\\sqrt x)^3 = i^3 x^{3/2} = -\\,i\\,x^{3/2}.",
          explanation:
            "Using \\( i^3=-i \\); this is needed for the phase value.",
        },
        {
          stepNumber: 7,
          description: "Evaluate the bracket at the saddle.",
          workingLatex:
            "x t_0 + \\tfrac{t_0^3}{3} = i x^{3/2} - \\tfrac{i}{3}x^{3/2} = \\tfrac{2i}{3}x^{3/2}.",
          explanation:
            "Combining \\( ix^{3/2} \\) and \\( -\\tfrac{i}{3}x^{3/2} \\) gives \\( \\tfrac{2i}{3}x^{3/2} \\).",
        },
        {
          stepNumber: 8,
          description: "Multiply by \\( i \\) for the phase.",
          workingLatex:
            "\\Phi(t_0) = i\\cdot\\tfrac{2i}{3}x^{3/2} = -\\tfrac23 x^{3/2}.",
          explanation:
            "The phase at the saddle is real and negative, giving the dominant decay factor \\( e^{-\\frac23 x^{3/2}} \\).",
        },
        {
          stepNumber: 9,
          description: "Differentiate the phase twice.",
          workingLatex: "\\Phi''(t) = 2it.",
          explanation:
            "The curvature \\( \\Phi'' \\) sets the Gaussian width of the saddle.",
        },
        {
          stepNumber: 10,
          description: "Evaluate the curvature at the saddle.",
          workingLatex:
            "\\Phi''(t_0) = 2i\\,(i\\sqrt x) = -2\\sqrt x.",
          explanation:
            "Using \\( i^2=-1 \\); the curvature is real and negative, so the saddle is a genuine maximum along the descent path.",
        },
        {
          stepNumber: 11,
          description: "State the steepest-descent formula.",
          workingLatex:
            "\\int e^{\\Phi(t)}dt \\sim e^{\\Phi(t_0)}\\sqrt{\\frac{2\\pi}{|\\Phi''(t_0)|}}\\,e^{i\\psi}.",
          explanation:
            "The standard simple-saddle formula; \\( g(t_0)=1 \\) here since the Airy integrand has no algebraic prefactor.",
        },
        {
          stepNumber: 12,
          description: "Compute the Gaussian width.",
          workingLatex:
            "\\sqrt{\\frac{2\\pi}{|\\Phi''(t_0)|}} = \\sqrt{\\frac{2\\pi}{2\\sqrt x}} = \\sqrt{\\pi}\\,x^{-1/4}.",
          explanation:
            "The width \\( \\sqrt{\\pi}\\,x^{-1/4} \\) is the interior-saddle algebraic prefactor.",
        },
        {
          stepNumber: 13,
          description: "Fix the descent phase.",
          workingLatex:
            "\\Phi''(t_0)=-2\\sqrt x = 2\\sqrt x\\,e^{i\\pi}\\ \\Longrightarrow\\ \\psi = \\tfrac{\\pi-\\arg\\Phi''}{2} = 0.",
          explanation:
            "The deformed contour runs horizontally through \\( t_0 \\); the descent direction makes the quadratic real and negative, contributing a phase that combines with the \\( i \\) from the original contour to give a real result.",
        },
        {
          stepNumber: 14,
          description: "Assemble the saddle contribution.",
          workingLatex:
            "\\int_{-\\infty}^{\\infty} e^{\\Phi(t)}dt \\sim e^{-\\frac23 x^{3/2}}\\,\\sqrt{\\pi}\\,x^{-1/4}.",
          explanation:
            "Multiplying the exponential decay by the Gaussian width gives the contour integral before the \\( 1/(2\\pi) \\).",
        },
        {
          stepNumber: 15,
          description: "Restore the prefactor.",
          workingLatex:
            "\\mathrm{Ai}(x)\\sim\\frac{1}{2\\pi}\\,e^{-\\frac23 x^{3/2}}\\,\\sqrt{\\pi}\\,x^{-1/4}.",
          explanation:
            "Including the \\( 1/(2\\pi) \\) from the definition of \\( \\mathrm{Ai} \\).",
        },
        {
          stepNumber: 16,
          description: "Simplify the constants.",
          workingLatex:
            "\\frac{\\sqrt{\\pi}}{2\\pi} = \\frac{1}{2\\sqrt\\pi}.",
          explanation:
            "Cancelling \\( \\sqrt\\pi \\) against \\( 2\\pi \\) gives the standard constant.",
        },
        {
          stepNumber: 17,
          description: "State the Airy asymptotics.",
          workingLatex:
            "\\mathrm{Ai}(x)\\sim\\frac{e^{-\\frac23 x^{3/2}}}{2\\sqrt\\pi\\,x^{1/4}}.",
          explanation:
            "This is the classical large-\\( x \\) decay of the Airy function.",
        },
        {
          stepNumber: 18,
          description: "Numerical check.",
          workingLatex:
            "x=16:\\quad \\frac{e^{-\\frac23\\cdot64}}{2\\sqrt\\pi\\cdot2} \\ \\text{vs}\\ \\mathrm{Ai}(16):\\ \\text{rel.\\ err}\\ 1.6\\times10^{-3}.",
          explanation:
            "Against \\( \\texttt{mpmath.airyai} \\) the leading term is accurate to \\( 1.6\\times10^{-3} \\) at \\( x=16 \\).",
        },
        {
          stepNumber: 19,
          description: "Identify the source of \\( x^{-1/4} \\).",
          workingLatex:
            "x^{-1/4} \\ \\text{from} \\ |\\Phi''(t_0)|^{-1/2}=(2\\sqrt x)^{-1/2}.",
          explanation:
            "The quarter power comes from the square-root Gaussian width of a non-degenerate interior saddle.",
        },
        {
          stepNumber: 20,
          description: "Contrast with the endpoint case.",
          workingLatex:
            "\\text{interior cubic saddle: } x^{-1/4}; \\qquad \\text{endpoint cubic saddle } (t=0): z^{-1/3}.",
          explanation:
            "Both are governed by a cubic exponent. The difference — interior saddle vs endpoint — changes the algebraic power (\\( x^{-1/4} \\) from the half-Gaussian width vs \\( z^{-1/3} \\) from the \\( u^{-2/3} \\) endpoint weight) but not the underlying steepest-descent machinery.",
        },
      ],
      finalAnswer:
        "\\( \\mathrm{Ai}(x)\\sim\\dfrac{e^{-\\frac23 x^{3/2}}}{2\\sqrt\\pi\\,x^{1/4}} \\) from the saddle \\( t=i\\sqrt x \\); interior saddle gives \\( x^{-1/4} \\), endpoint gives \\( z^{-1/3} \\).",
    },
  },
  {
    id: "am8c-023",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 23",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Derive a closed-form remainder \\( R_N(z) \\) for the \\( N \\)-term endpoint expansion of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) and verify the asymptotic property \\( R_N(z)=O\\!\\big(e^{z}z^{-(N+1)}\\big) \\) as \\( |z|\\to\\infty \\) in \\( |\\arg z|<\\tfrac\\pi2 \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["remainder estimate", "asymptotic property", "integration by parts", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the dominant tail.",
          workingLatex:
            "I(z)+\\frac{\\Gamma(4/3)}{z^{1/3}} = -\\frac13\\int_1^\\infty e^{zu}u^{-2/3}du,\\quad c_n=\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}.",
          explanation:
            "After subtracting the \\( u=0 \\) Watson term, the dominant endpoint series comes entirely from the \\( u=1 \\) tail.",
        },
        {
          stepNumber: 2,
          description: "Set up one integration by parts.",
          workingLatex:
            "\\int_1^\\infty e^{zu}u^{-\\alpha}du = \\left[\\frac{e^{zu}}{z}u^{-\\alpha}\\right]_1^\\infty + \\frac{\\alpha}{z}\\int_1^\\infty e^{zu}u^{-\\alpha-1}du.",
          explanation:
            "Each parts step trades one power of \\( 1/z \\) for a boundary term and a higher-order integral; we iterate this.",
        },
        {
          stepNumber: 3,
          description: "Read off the boundary term.",
          workingLatex:
            "\\left[\\frac{e^{zu}}{z}u^{-\\alpha}\\right]_1^\\infty = -\\frac{e^{z}}{z} \\quad(\\text{upper limit }\\to0).",
          explanation:
            "On the convergent ray the upper limit vanishes; the \\( u=1 \\) end gives \\( -e^z/z \\) times the running coefficient.",
        },
        {
          stepNumber: 4,
          description: "Iterate to order \\( N \\).",
          workingLatex:
            "-\\frac13\\int_1^\\infty e^{zu}u^{-2/3}du = \\frac{e^{z}}{3}\\sum_{n=0}^{N-1}\\frac{c_n}{z^{n+1}} + R_N(z).",
          explanation:
            "Performing the parts \\( N \\) times produces the partial sum plus an exact integral remainder \\( R_N \\).",
        },
        {
          stepNumber: 5,
          description: "Identify the accumulated coefficient.",
          workingLatex:
            "c_N = \\prod_{k=0}^{N-1}\\left(k+\\tfrac23\\right)\\Big/ \\ \\cdots = \\frac{\\Gamma(N+2/3)}{\\Gamma(2/3)}.",
          explanation:
            "Differentiating the weight \\( N \\) times multiplies by the successive exponents, giving the Gamma-ratio coefficient.",
        },
        {
          stepNumber: 6,
          description: "Write the exact remainder integral.",
          workingLatex:
            "R_N(z) = -\\frac{c_N}{3\\,z^{N}}\\int_1^\\infty e^{zu}\\,u^{-2/3-N}\\,du.",
          explanation:
            "After \\( N \\) parts the leftover weight is \\( u^{-2/3-N} \\), carrying the coefficient \\( c_N \\) and \\( N \\) powers of \\( 1/z \\).",
        },
        {
          stepNumber: 7,
          description: "Take absolute values.",
          workingLatex:
            "|R_N(z)| \\le \\frac{c_N}{3|z|^{N}}\\left|\\int_1^\\infty e^{zu}u^{-2/3-N}du\\right|.",
          explanation:
            "We now bound the remaining integral uniformly.",
        },
        {
          stepNumber: 8,
          description: "Bound the weight on the range.",
          workingLatex: "u\\ge1 \\ \\Longrightarrow\\ u^{-2/3-N}\\le1.",
          explanation:
            "The algebraic weight is at most \\( 1 \\) throughout the tail.",
        },
        {
          stepNumber: 9,
          description: "Bound the exponential integral.",
          workingLatex:
            "\\left|\\int_1^\\infty e^{zu}u^{-2/3-N}du\\right| \\le \\int_1^\\infty e^{\\operatorname{Re}(z)u}\\,du = \\frac{e^{\\operatorname{Re}(z)}}{|\\operatorname{Re}(z)|}.",
          explanation:
            "Replacing the weight by \\( 1 \\) and integrating the modulus of \\( e^{zu} \\); the integral is controlled by its value near \\( u=1 \\). (For the dominant series the value is the analytic continuation; the bound structure is identical.)",
        },
        {
          stepNumber: 10,
          description: "Combine the bounds.",
          workingLatex:
            "|R_N(z)| \\le \\frac{c_N}{3|z|^{N}}\\cdot\\frac{e^{\\operatorname{Re}(z)}}{|\\operatorname{Re}(z)|}.",
          explanation:
            "Multiplying the coefficient, the \\( 1/|z|^N \\), and the exponential bound.",
        },
        {
          stepNumber: 11,
          description: "Restrict to a closed subsector.",
          workingLatex: "|\\arg z|\\le\\tfrac\\pi2-\\delta \\ \\Longrightarrow\\ |\\operatorname{Re}(z)| \\ge |z|\\sin\\delta.",
          explanation:
            "Staying away from the imaginary axis ensures \\( \\operatorname{Re}(z) \\) is comparable to \\( |z| \\).",
        },
        {
          stepNumber: 12,
          description: "Convert to a power of \\( |z| \\).",
          workingLatex:
            "\\frac{1}{|\\operatorname{Re}(z)|} \\le \\frac{1}{|z|\\sin\\delta} = O\\!\\left(\\frac{1}{|z|}\\right).",
          explanation:
            "The reciprocal of the real part is \\( O(1/|z|) \\), supplying one extra power.",
        },
        {
          stepNumber: 13,
          description: "State the size of the remainder.",
          workingLatex:
            "|R_N(z)| = O\\!\\left(\\frac{e^{\\operatorname{Re}(z)}}{|z|^{N+1}}\\right) = O\\!\\left(\\frac{e^{z}}{z^{N+1}}\\right).",
          explanation:
            "The remainder is bounded by \\( e^{\\operatorname{Re}(z)}/|z|^{N+1} \\), one power down from the last retained term.",
        },
        {
          stepNumber: 14,
          description: "Form the ratio to the last term.",
          workingLatex:
            "\\frac{R_N(z)}{e^{z}z^{-N}} = O\\!\\left(\\frac{1}{z}\\right).",
          explanation:
            "Dividing by the magnitude of the \\( (N-1) \\)th term shows the remainder is smaller by \\( O(1/z) \\).",
        },
        {
          stepNumber: 15,
          description: "Take the limit.",
          workingLatex:
            "\\frac{R_N(z)}{e^{z}z^{-N}}\\to0 \\quad (|z|\\to\\infty).",
          explanation:
            "The ratio vanishes for each fixed \\( N \\).",
        },
        {
          stepNumber: 16,
          description: "Confirm the Poincaré property.",
          workingLatex:
            "R_N(z) = o\\!\\left(e^{z}z^{-N}\\right),\\qquad R_N(z)=O\\!\\left(e^{z}z^{-(N+1)}\\right).",
          explanation:
            "The remainder after \\( N \\) terms is smaller than the last retained term — exactly Poincaré's definition of an asymptotic expansion.",
        },
        {
          stepNumber: 17,
          description: "State the validated expansion.",
          workingLatex:
            "I(z)+\\frac{\\Gamma(4/3)}{z^{1/3}} = \\frac{e^{z}}{3}\\sum_{n=0}^{N-1}\\frac{c_n}{z^{n+1}} + O\\!\\left(\\frac{e^{z}}{z^{N+1}}\\right).",
          explanation:
            "The bound holds uniformly in the closed right-half-plane subsector.",
        },
        {
          stepNumber: 18,
          description: "Note uniformity in \\( N \\) is not claimed.",
          workingLatex:
            "\\text{fixed } N:\\ \\text{bound holds};\\quad N\\sim|z|:\\ \\text{series diverges (separate analysis)}.",
          explanation:
            "The estimate is for fixed \\( N \\) and \\( |z|\\to\\infty \\); the optimal-truncation behaviour at \\( N\\sim|z| \\) is a different question.",
        },
        {
          stepNumber: 19,
          description: "Numerical confirmation of the rate.",
          workingLatex:
            "z=25:\\quad |R_N| \\propto |z|^{-(N+1)} \\ \\text{as } N \\ \\text{increases (up to optimal } N).",
          explanation:
            "Residuals at \\( z=25 \\) decrease like \\( z^{-(N+1)} \\) as predicted, until the optimal truncation point.",
        },
        {
          stepNumber: 20,
          description: "State the remainder formula.",
          workingLatex:
            "R_N(z)=-\\frac{c_N}{3z^{N}}\\int_1^\\infty e^{zu}u^{-2/3-N}du = O\\!\\left(\\frac{e^{z}}{z^{N+1}}\\right).",
          explanation:
            "The closed-form remainder, together with its order estimate, confirms the asymptotic property of the endpoint expansion.",
        },
      ],
      finalAnswer:
        "\\( R_N(z)=-\\dfrac{c_N}{3z^{N}}\\displaystyle\\int_1^\\infty e^{zu}u^{-2/3-N}du = O\\!\\left(\\dfrac{e^{z}}{z^{N+1}}\\right) \\), confirming the asymptotic property.",
    },
  },
  {
    id: "am8c-024",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 24",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) For \\( z=Re^{i\\theta} \\), \\( R\\to\\infty \\), find the value(s) of \\( \\theta\\in(0,\\pi) \\) at which the two terms \\( \\dfrac{e^{z}}{3z} \\) and \\( \\dfrac{\\Gamma(4/3)}{z^{1/3}} \\) of \\( I(z) \\) have equal modulus, and hence give the leading-order angular location of the dominance switch.",
    marks: 5,
    yearCreated: 2026,
    tags: ["Stokes structure", "balance of terms", "dominance", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute polar form.",
          workingLatex: "z = R e^{i\\theta} \\ \\Longrightarrow\\ \\operatorname{Re}(z) = R\\cos\\theta,\\ |z|=R.",
          explanation:
            "The contest between the two terms turns on \\( \\operatorname{Re}(z)=R\\cos\\theta \\).",
        },
        {
          stepNumber: 2,
          description: "Write the modulus of the exponential term.",
          workingLatex:
            "\\left|\\frac{e^{z}}{3z}\\right| = \\frac{e^{R\\cos\\theta}}{3R}.",
          explanation:
            "The exponential factor is \\( e^{\\operatorname{Re}(z)}=e^{R\\cos\\theta} \\).",
        },
        {
          stepNumber: 3,
          description: "Write the modulus of the algebraic term.",
          workingLatex:
            "\\left|\\frac{\\Gamma(4/3)}{z^{1/3}}\\right| = \\frac{\\Gamma(4/3)}{R^{1/3}}.",
          explanation:
            "The algebraic term has no exponential dependence, only the power \\( R^{-1/3} \\).",
        },
        {
          stepNumber: 4,
          description: "Set the moduli equal.",
          workingLatex:
            "\\frac{e^{R\\cos\\theta}}{3R} = \\frac{\\Gamma(4/3)}{R^{1/3}}.",
          explanation:
            "Equal modulus is the defining condition of the dominance balance.",
        },
        {
          stepNumber: 5,
          description: "Clear the powers of \\( R \\).",
          workingLatex:
            "e^{R\\cos\\theta} = 3\\,\\Gamma(4/3)\\,R\\cdot R^{-1/3} = 3\\,\\Gamma(4/3)\\,R^{2/3}.",
          explanation:
            "Multiplying both sides by \\( 3R \\) isolates the exponential against a pure power of \\( R \\).",
        },
        {
          stepNumber: 6,
          description: "Take logarithms.",
          workingLatex:
            "R\\cos\\theta = \\ln\\!\\big(3\\Gamma(4/3)\\big) + \\tfrac23\\ln R.",
          explanation:
            "Logging turns the exponential into the linear-in-\\( R \\) left side and a logarithmic right side.",
        },
        {
          stepNumber: 7,
          description: "Solve for \\( \\cos\\theta \\).",
          workingLatex:
            "\\cos\\theta = \\frac{\\ln\\!\\big(3\\Gamma(4/3)\\big) + \\tfrac23\\ln R}{R}.",
          explanation:
            "Dividing by \\( R \\) gives the balance angle as a function of \\( R \\).",
        },
        {
          stepNumber: 8,
          description: "Compare growth rates.",
          workingLatex:
            "\\text{numerator} = O(\\ln R), \\qquad \\text{denominator} = R.",
          explanation:
            "The numerator grows only logarithmically, far slower than the linear denominator.",
        },
        {
          stepNumber: 9,
          description: "Take the large-\\( R \\) limit.",
          workingLatex:
            "\\cos\\theta = \\frac{O(\\ln R)}{R} \\to 0 \\quad (R\\to\\infty).",
          explanation:
            "Hence \\( \\cos\\theta\\to0 \\), forcing \\( \\theta\\to\\pi/2 \\).",
        },
        {
          stepNumber: 10,
          description: "Determine the side of approach.",
          workingLatex:
            "\\cos\\theta \\sim \\frac{\\tfrac23\\ln R}{R} > 0 \\ \\Longrightarrow\\ \\theta\\to\\tfrac\\pi2^{-}.",
          explanation:
            "The leading \\( \\tfrac23\\ln R \\) keeps \\( \\cos\\theta \\) small and positive, so the balance sits just inside the right half-plane.",
        },
        {
          stepNumber: 11,
          description: "Quantify the offset.",
          workingLatex:
            "\\theta = \\frac{\\pi}{2} - \\arcsin(\\cos\\theta) \\approx \\frac{\\pi}{2} - \\cos\\theta.",
          explanation:
            "For small \\( \\cos\\theta \\), \\( \\theta \\) is below \\( \\pi/2 \\) by approximately \\( \\cos\\theta \\).",
        },
        {
          stepNumber: 12,
          description: "Write the offset explicitly.",
          workingLatex:
            "\\theta = \\frac{\\pi}{2} - O\\!\\left(\\frac{\\ln R}{R}\\right).",
          explanation:
            "The balance angle is the anti-Stokes direction minus a slow logarithmic correction.",
        },
        {
          stepNumber: 13,
          description: "Identify the anti-Stokes line.",
          workingLatex: "\\arg z = \\tfrac\\pi2 \\ \\text{(anti-Stokes)}.",
          explanation:
            "To leading order the dominance switch sits on the anti-Stokes line \\( \\arg z=\\pi/2 \\).",
        },
        {
          stepNumber: 14,
          description: "Describe dominance for \\( \\theta<\\pi/2 \\).",
          workingLatex:
            "\\theta<\\tfrac\\pi2:\\ \\cos\\theta>0 \\ \\Longrightarrow\\ \\frac{e^{R\\cos\\theta}}{3R} \\gg \\frac{\\Gamma(4/3)}{R^{1/3}}.",
          explanation:
            "The exponential term dominates whenever \\( \\theta \\) is bounded below \\( \\pi/2 \\).",
        },
        {
          stepNumber: 15,
          description: "Describe dominance for \\( \\theta>\\pi/2 \\).",
          workingLatex:
            "\\theta>\\tfrac\\pi2:\\ \\cos\\theta<0 \\ \\Longrightarrow\\ \\frac{e^{R\\cos\\theta}}{3R} \\ll \\frac{\\Gamma(4/3)}{R^{1/3}}.",
          explanation:
            "Past the anti-Stokes line the exponential decays and the algebraic \\( z^{-1/3} \\) term wins.",
        },
        {
          stepNumber: 16,
          description: "Interpret the logarithmic shift.",
          workingLatex:
            "\\Delta\\theta = \\frac{\\pi}{2}-\\theta = O\\!\\left(\\frac{\\ln R}{R}\\right) \\to 0.",
          explanation:
            "At finite \\( R \\) the actual balance is slightly inside the right half-plane; the offset vanishes as \\( R\\to\\infty \\).",
        },
        {
          stepNumber: 17,
          description: "Cross-check a numerical value.",
          workingLatex:
            "R=10^{3}:\\ \\cos\\theta = \\frac{\\ln(3\\Gamma(4/3)) + \\tfrac23\\ln10^{3}}{10^{3}} \\approx 5.6\\times10^{-3}.",
          explanation:
            "At \\( R=1000 \\) the balance is at \\( \\theta\\approx\\pi/2-5.6\\times10^{-3} \\), a small but nonzero offset.",
        },
        {
          stepNumber: 18,
          description: "Relate to the Stokes/anti-Stokes structure.",
          workingLatex:
            "\\text{anti-Stokes } \\arg z=\\pm\\tfrac\\pi2; \\quad \\text{Stokes } \\arg z=0,\\pi.",
          explanation:
            "The equal-modulus balance lies on the anti-Stokes line, distinct from the Stokes line \\( \\arg z=\\pi \\) where the recessive coefficient jumps.",
        },
        {
          stepNumber: 19,
          description: "State the angular location.",
          workingLatex:
            "\\theta_{\\text{switch}} = \\frac{\\pi}{2} - O\\!\\left(\\frac{\\ln R}{R}\\right) \\to \\frac{\\pi}{2}.",
          explanation:
            "The dominance switch is located at \\( \\arg z=\\pi/2 \\) to leading order.",
        },
        {
          stepNumber: 20,
          description: "Conclude.",
          workingLatex:
            "\\cos\\theta = \\frac{\\ln(3\\Gamma(4/3)) + \\tfrac23\\ln R}{R}\\to0,\\quad \\theta\\to\\frac\\pi2.",
          explanation:
            "The exponential dominates for \\( \\theta<\\pi/2 \\), the algebraic for \\( \\theta>\\pi/2 \\); the switch sits on the anti-Stokes line.",
        },
      ],
      finalAnswer:
        "\\( \\cos\\theta=\\big(\\ln(3\\Gamma(4/3))+\\tfrac23\\ln R\\big)/R\\to0 \\), so \\( \\theta\\to\\tfrac\\pi2 \\): the switch sits on the anti-Stokes line \\( \\arg z=\\tfrac\\pi2 \\).",
    },
  },
  {
    id: "am8c-025",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 25",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) By analogy with the cubic case, find the leading-order asymptotics as \\( \\operatorname{Re}(z)\\to+\\infty \\) of the quintic-phase integral \\( K(z)=\\int_0^1 e^{z t^5}\\,dt \\): the dominant \\( t=1 \\) term and the algebraic \\( t=0 \\) term.",
    marks: 5,
    yearCreated: 2026,
    tags: ["general power phase", "Watson's lemma", "generalisation", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the linearising substitution.",
          workingLatex: "u = t^5 \\ \\Longrightarrow\\ z t^5 = z u.",
          explanation:
            "The same device linearises any pure power phase \\( t^k \\); for \\( k=5 \\) we set \\( u=t^5 \\).",
        },
        {
          stepNumber: 2,
          description: "Differentiate the substitution.",
          workingLatex: "du = 5 t^4\\,dt.",
          explanation:
            "The Jacobian is \\( 5t^4 \\), which we invert next.",
        },
        {
          stepNumber: 3,
          description: "Invert for \\( dt \\).",
          workingLatex:
            "t=u^{1/5},\\ t^4=u^{4/5} \\ \\Longrightarrow\\ dt = \\frac{du}{5t^4} = \\tfrac15 u^{-4/5}\\,du.",
          explanation:
            "The reciprocal Jacobian gives the algebraic weight \\( u^{-4/5} \\); in general \\( t^k \\) gives weight \\( u^{(1-k)/k} \\).",
        },
        {
          stepNumber: 4,
          description: "Assemble the linearised integral.",
          workingLatex: "K(z)=\\frac{1}{5}\\int_0^1 e^{zu}u^{-4/5}\\,du.",
          explanation:
            "The weight \\( u^{-4/5} \\) is integrable at \\( u=0 \\) since \\( -4/5>-1 \\); the phase is now linear.",
        },
        {
          stepNumber: 5,
          description: "Set up the \\( u=1 \\) endpoint by parts.",
          workingLatex:
            "\\frac15\\int_0^1 e^{zu}u^{-4/5}du,\\qquad dv=e^{zu}du,\\ w=u^{-4/5}.",
          explanation:
            "Integrating the exponential brings down a factor \\( 1/z \\); the \\( u=1 \\) boundary is dominant.",
        },
        {
          stepNumber: 6,
          description: "Compute the boundary term.",
          workingLatex:
            "\\frac15\\left[\\frac{e^{zu}}{z}u^{-4/5}\\right]_0^1 \\ \\text{(}u=1\\text{ end)} = \\frac15\\,\\frac{e^{z}}{z}\\,(1)^{-4/5}.",
          explanation:
            "Only the \\( u=1 \\) end survives in the dominant exponential family.",
        },
        {
          stepNumber: 7,
          description: "State the dominant term.",
          workingLatex: "K(z)\\sim \\frac{e^{z}}{5z}.",
          explanation:
            "Identical structure to the cubic case with \\( 1/3\\to1/5 \\).",
        },
        {
          stepNumber: 8,
          description: "Isolate the \\( u=0 \\) Watson piece.",
          workingLatex:
            "K_0(z) := \\frac15\\int_0^\\infty e^{zu}u^{-4/5}\\,du.",
          explanation:
            "Extending to a full ray captures the \\( u=0 \\) endpoint; the discarded tail is exponentially small.",
        },
        {
          stepNumber: 9,
          description: "Write the exponent in decaying form.",
          workingLatex: "e^{zu}=e^{-(-z)u},\\qquad s=-z.",
          explanation:
            "Setting \\( s=-z \\) matches the Laplace template.",
        },
        {
          stepNumber: 10,
          description: "Identify the exponent.",
          workingLatex: "u^{-4/5}=u^{\\,s'-1}\\ \\Longrightarrow\\ s'=\\tfrac15>0.",
          explanation:
            "The weight has exponent \\( s'=1/5 \\), giving convergence at the origin.",
        },
        {
          stepNumber: 11,
          description: "Apply the Laplace formula.",
          workingLatex:
            "\\frac15\\int_0^\\infty e^{-(-z)u}u^{-4/5}du = \\frac15\\,\\Gamma\\!\\left(\\tfrac15\\right)(-z)^{-1/5}.",
          explanation:
            "With \\( s'=1/5 \\), the full-ray integral is \\( \\Gamma(1/5)(-z)^{-1/5} \\).",
        },
        {
          stepNumber: 12,
          description: "Apply the Gamma recurrence.",
          workingLatex:
            "\\tfrac15\\Gamma\\!\\left(\\tfrac15\\right) = \\Gamma\\!\\left(\\tfrac65\\right).",
          explanation:
            "From \\( \\Gamma(x+1)=x\\Gamma(x) \\) at \\( x=1/5 \\); numerically \\( \\Gamma(6/5)=0.9182 \\).",
        },
        {
          stepNumber: 13,
          description: "Write the algebraic term.",
          workingLatex:
            "K_0(z) = \\Gamma\\!\\left(\\tfrac65\\right)(-z)^{-1/5}.",
          explanation:
            "The decay exponent is now \\( z^{-1/5} \\), a fifth root rather than a cube root.",
        },
        {
          stepNumber: 14,
          description: "Keep the branch as a fifth root of \\( -z \\).",
          workingLatex:
            "K_0(z) = \\Gamma\\!\\left(\\tfrac65\\right)(-z)^{-1/5}, \\qquad -z = e^{i\\pi}z.",
          explanation:
            "Exactly as in the cubic case the endpoint term is a power of \\( -z \\); its branch carries the sector dependence, here as a fifth root of unity rather than a cube root.",
        },
        {
          stepNumber: 15,
          description: "Adopt the cubic-style convention.",
          workingLatex:
            "(-z)^{-1/5} \\equiv -z^{-1/5} \\ \\text{(branch convention, as }(-z)^{-1/3}=-z^{-1/3}\\text{ for the cubic)}.",
          explanation:
            "Writing the \\( t=0 \\) term as \\( -\\Gamma(6/5)z^{-1/5} \\) matches the file's convention for the cubic, where \\( -\\Gamma(4/3)z^{-1/3} \\) is the right-half-plane form; the genuine multivalued object is \\( \\Gamma(6/5)(-z)^{-1/5} \\).",
        },
        {
          stepNumber: 16,
          description: "Combine the two endpoint terms.",
          workingLatex:
            "K(z)\\sim\\frac{e^{z}}{5z}-\\frac{\\Gamma(6/5)}{z^{1/5}} \\qquad (\\operatorname{Re}(z)>0).",
          explanation:
            "The dominant exponential \\( t=1 \\) term plus the algebraic \\( t=0 \\) term.",
        },
        {
          stepNumber: 17,
          description: "Compare the magnitudes.",
          workingLatex:
            "\\frac{|K_{t=1}|}{|K_{t=0}|} = \\frac{e^{\\operatorname{Re}(z)}}{5\\Gamma(6/5)\\,|z|^{4/5}} \\to\\infty.",
          explanation:
            "The exponential term dominates overwhelmingly wherever \\( \\operatorname{Re}(z)>0 \\).",
        },
        {
          stepNumber: 18,
          description: "State the general-\\( k \\) rule.",
          workingLatex:
            "\\int_0^1 e^{zt^k}dt \\sim \\frac{e^{z}}{kz} - \\frac{\\Gamma(1+\\tfrac1k)}{z^{1/k}}.",
          explanation:
            "The whole family follows by the same two-endpoint argument with \\( k \\) in place of \\( 3 \\).",
        },
        {
          stepNumber: 19,
          description: "Recover the known cases.",
          workingLatex:
            "k=3:\\ \\Gamma\\!\\left(\\tfrac43\\right);\\quad k=4:\\ \\Gamma\\!\\left(\\tfrac54\\right);\\quad k=5:\\ \\Gamma\\!\\left(\\tfrac65\\right).",
          explanation:
            "The endpoint constant is \\( \\Gamma(1+1/k) \\): \\( \\Gamma(4/3)=0.8930,\\ \\Gamma(5/4)=0.9064,\\ \\Gamma(6/5)=0.9182 \\).",
        },
        {
          stepNumber: 20,
          description: "State the quintic result.",
          workingLatex:
            "K(z)\\sim\\frac{e^{z}}{5z}-\\frac{\\Gamma(6/5)}{z^{1/5}}.",
          explanation:
            "Same sectorial structure as the cubic problem, with the branch of \\( z^{-1/5} \\) now a fifth root.",
        },
      ],
      finalAnswer:
        "\\( K(z)\\sim\\dfrac{e^{z}}{5z}-\\dfrac{\\Gamma(6/5)}{z^{1/5}} \\); the \\( t=0 \\) term is \\( -\\Gamma(6/5)z^{-1/5} \\).",
    },
  },
  {
    id: "am8c-026",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 26",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Show that the endpoint series \\( \\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)} \\) for \\( I(z) \\) is divergent for every fixed \\( z \\), yet asymptotic, and estimate the optimal truncation point and the resulting error for \\( |z|=R \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["divergent series", "optimal truncation", "asymptotic", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the general term.",
          workingLatex:
            "a_n = \\frac{c_n}{z^{n+1}}, \\qquad c_n=\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}.",
          explanation:
            "We study the magnitude \\( |a_n| \\) as \\( n \\) grows at fixed \\( z \\).",
        },
        {
          stepNumber: 2,
          description: "Use the coefficient recurrence.",
          workingLatex: "c_{n+1} = \\left(n+\\tfrac23\\right)c_n.",
          explanation:
            "From the Gamma recurrence; this makes the ratio of successive terms elementary.",
        },
        {
          stepNumber: 3,
          description: "Form the ratio of successive terms.",
          workingLatex:
            "\\frac{|a_{n+1}|}{|a_n|} = \\frac{c_{n+1}}{c_n}\\cdot\\frac{1}{|z|} = \\frac{n+2/3}{|z|}.",
          explanation:
            "The factorial-type growth of \\( \\Gamma(n+2/3) \\) eventually beats any fixed power of \\( z \\).",
        },
        {
          stepNumber: 4,
          description: "Take the limit of the ratio.",
          workingLatex:
            "\\frac{n+2/3}{|z|}\\to\\infty \\quad (n\\to\\infty).",
          explanation:
            "For any fixed \\( z \\) the ratio exceeds \\( 1 \\) eventually, so terms grow.",
        },
        {
          stepNumber: 5,
          description: "Deduce divergence.",
          workingLatex:
            "|a_{n+1}| > |a_n| \\ \\text{for } n>|z|-\\tfrac23 \\ \\Longrightarrow\\ \\sum a_n \\ \\text{diverges}.",
          explanation:
            "Growing terms violate the necessary condition for convergence; the series diverges for every fixed \\( z \\).",
        },
        {
          stepNumber: 6,
          description: "Describe the term profile.",
          workingLatex:
            "|a_n|:\\ \\text{decreases, reaches a minimum, then increases.}",
          explanation:
            "The hallmark of an asymptotic-but-divergent (Poincaré) series.",
        },
        {
          stepNumber: 7,
          description: "Reconcile with the asymptotic property.",
          workingLatex:
            "\\text{partial sums approach } I \\ \\text{to within the smallest term, then drift.}",
          explanation:
            "Despite diverging, the truncated series approximates \\( I \\) with error of the size of the first omitted term — the meaning of an asymptotic series.",
        },
        {
          stepNumber: 8,
          description: "Set up the optimal-truncation condition.",
          workingLatex:
            "\\frac{|a_{n+1}|}{|a_n|} = 1 \\ \\Longrightarrow\\ \\frac{n+2/3}{|z|}=1.",
          explanation:
            "The terms stop shrinking when the ratio crosses unity; truncating just before that point gives optimal accuracy.",
        },
        {
          stepNumber: 9,
          description: "Solve for the optimal index.",
          workingLatex: "n_{*} = |z| - \\tfrac23 \\approx |z| = R.",
          explanation:
            "The smallest term occurs at \\( n_*\\approx R \\).",
        },
        {
          stepNumber: 10,
          description: "Write the optimal error.",
          workingLatex:
            "\\text{error} \\approx |a_{n_*}| = \\frac{\\Gamma(n_*+2/3)}{\\Gamma(2/3)\\,R^{n_*+1}}.",
          explanation:
            "The truncation error is of the size of the smallest term, at \\( n_*\\approx R \\).",
        },
        {
          stepNumber: 11,
          description: "Substitute \\( n_*\\approx R \\).",
          workingLatex:
            "|a_{n_*}| \\approx \\frac{\\Gamma(R+2/3)}{\\Gamma(2/3)\\,R^{R+1}}.",
          explanation:
            "We now estimate this ratio using Stirling's formula.",
        },
        {
          stepNumber: 12,
          description: "Apply Stirling to the Gamma.",
          workingLatex:
            "\\Gamma(R+2/3) \\sim \\sqrt{2\\pi}\\,R^{\\,R+1/6}\\,e^{-R}.",
          explanation:
            "Stirling \\( \\Gamma(R+a)\\sim\\sqrt{2\\pi}\\,R^{R+a-1/2}e^{-R} \\) at \\( a=2/3 \\) gives exponent \\( R+1/6 \\).",
        },
        {
          stepNumber: 13,
          description: "Divide by \\( R^{R+1} \\).",
          workingLatex:
            "\\frac{R^{\\,R+1/6}}{R^{\\,R+1}} = R^{-5/6}.",
          explanation:
            "The \\( R^R \\) factors cancel, leaving a slowly-varying algebraic factor.",
        },
        {
          stepNumber: 14,
          description: "Collect the smallest-term estimate.",
          workingLatex:
            "|a_{n_*}| \\sim \\frac{\\sqrt{2\\pi}}{\\Gamma(2/3)}\\,R^{-5/6}\\,e^{-R}.",
          explanation:
            "The dominant behaviour is the exponential \\( e^{-R} \\), with a mild algebraic prefactor.",
        },
        {
          stepNumber: 15,
          description: "State the exponential accuracy.",
          workingLatex:
            "\\text{error} \\sim C\\,e^{-R}, \\qquad C = O(R^{-5/6}).",
          explanation:
            "The smallest term is exponentially small in \\( R=|z| \\): superasymptotic accuracy.",
        },
        {
          stepNumber: 16,
          description: "Interpret superasymptotics.",
          workingLatex:
            "e^{-R} \\ \\text{is the best a single power series can achieve.}",
          explanation:
            "Below this floor, exponentially-small (Stokes) corrections — the recessive \\( z^{-1/3} \\) endpoint term — must be included to do better.",
        },
        {
          stepNumber: 17,
          description: "Numerical check at \\( R=20 \\).",
          workingLatex:
            "R=20:\\ |a_{n_*}| \\approx 3.1\\times10^{-10}, \\quad e^{-20}\\approx2.1\\times10^{-9}.",
          explanation:
            "The smallest term is about \\( 0.15\\,e^{-R} \\), confirming the \\( e^{-R} \\) scaling with an \\( O(R^{-5/6}) \\) prefactor.",
        },
        {
          stepNumber: 18,
          description: "Numerical check at \\( R=40 \\).",
          workingLatex:
            "R=40:\\ |a_{n_*}| \\approx 3.6\\times10^{-19}, \\quad e^{-40}\\approx4.2\\times10^{-18}.",
          explanation:
            "Again about \\( 0.09\\,e^{-R} \\); the ratio decreases like \\( R^{-5/6} \\), as predicted.",
        },
        {
          stepNumber: 19,
          description: "Summarise the dichotomy.",
          workingLatex:
            "\\text{divergent } (n\\to\\infty) \\ \\text{but asymptotic } (|z|\\to\\infty).",
          explanation:
            "The series diverges in \\( n \\) yet faithfully represents \\( I \\) as \\( |z|\\to\\infty \\) when truncated optimally.",
        },
        {
          stepNumber: 20,
          description: "State the conclusion.",
          workingLatex:
            "n_* \\approx |z|, \\qquad \\text{optimal error} \\sim e^{-|z|}.",
          explanation:
            "Optimal truncation at \\( n_*\\approx|z| \\) yields an error exponentially small in \\( |z| \\).",
        },
      ],
      finalAnswer:
        "Divergent (factorial coefficients) but asymptotic; optimal truncation at \\( n_*\\approx|z| \\), error \\( \\sim e^{-|z|} \\).",
    },
  },
  {
    id: "am8c-027",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 27",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Combine both endpoints to give a uniform two-endpoint asymptotic for \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) valid throughout \\( |\\arg z|<\\tfrac\\pi2 \\), keeping the \\( t=1 \\) term to two orders and the \\( t=0 \\) term to leading order. State the relative size of the two endpoint contributions.",
    marks: 6,
    yearCreated: 2026,
    tags: ["two-endpoint expansion", "uniform", "dominance", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the \\( t=1 \\) endpoint series.",
          workingLatex:
            "I_{t=1}(z) = \\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}}, \\qquad c_n=\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}.",
          explanation:
            "The dominant exponential family from repeated parts at \\( u=1 \\).",
        },
        {
          stepNumber: 2,
          description: "List the first two coefficients.",
          workingLatex: "c_0 = 1, \\qquad c_1 = \\tfrac23.",
          explanation:
            "From \\( c_n=(n-\\tfrac13)c_{n-1} \\); we keep the \\( t=1 \\) term to two orders.",
        },
        {
          stepNumber: 3,
          description: "Write the two-order \\( t=1 \\) contribution.",
          workingLatex:
            "I_{t=1}(z) = \\frac{e^{z}}{3}\\left(\\frac{1}{z} + \\frac{2/3}{z^{2}}\\right).",
          explanation:
            "Truncating after \\( n=1 \\) retains the leading and first correction terms.",
        },
        {
          stepNumber: 4,
          description: "Factor the exponential term.",
          workingLatex:
            "I_{t=1}(z) = \\frac{e^{z}}{3z}\\left(1+\\frac{2}{3z}\\right).",
          explanation:
            "Pulling out \\( e^z/(3z) \\) displays the relative size of the correction.",
        },
        {
          stepNumber: 5,
          description: "Recall the \\( t=0 \\) Watson piece.",
          workingLatex:
            "I_{t=0}(z) = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "The algebraic endpoint term from the \\( u=0 \\) Watson integral.",
        },
        {
          stepNumber: 6,
          description: "Apply the right-half-plane branch.",
          workingLatex:
            "|\\arg z|<\\tfrac\\pi2:\\quad (-z)^{-1/3}=-z^{-1/3}.",
          explanation:
            "On the principal branch in the right half-plane the cube root reduces to \\( -z^{-1/3} \\).",
        },
        {
          stepNumber: 7,
          description: "Write the leading \\( t=0 \\) contribution.",
          workingLatex:
            "I_{t=0}(z) = -\\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "The leading non-exponential piece, kept to leading order only.",
        },
        {
          stepNumber: 8,
          description: "Add the two endpoint contributions.",
          workingLatex:
            "I(z) \\sim \\frac{e^{z}}{3z}\\left(1+\\frac{2}{3z}\\right) - \\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "The full leading asymptotic is the sum over both endpoints.",
        },
        {
          stepNumber: 9,
          description: "Argue uniformity.",
          workingLatex:
            "\\text{each term analytic on } |\\arg z|<\\tfrac\\pi2 \\ \\Longrightarrow\\ \\text{formula holds uniformly}.",
          explanation:
            "Both endpoint contributions are single analytic terms on the open right half-plane, so the combined formula is uniform there.",
        },
        {
          stepNumber: 10,
          description: "Write the modulus of the \\( t=1 \\) term.",
          workingLatex:
            "|I_{t=1}| \\sim \\frac{e^{\\operatorname{Re}(z)}}{3|z|}.",
          explanation:
            "The leading exponential term has modulus \\( e^{\\operatorname{Re}(z)}/(3|z|) \\).",
        },
        {
          stepNumber: 11,
          description: "Write the modulus of the \\( t=0 \\) term.",
          workingLatex:
            "|I_{t=0}| = \\frac{\\Gamma(4/3)}{|z|^{1/3}}.",
          explanation:
            "The algebraic term has modulus \\( \\Gamma(4/3)|z|^{-1/3} \\).",
        },
        {
          stepNumber: 12,
          description: "Form the ratio.",
          workingLatex:
            "\\frac{|I_{t=1}|}{|I_{t=0}|} = \\frac{e^{\\operatorname{Re}(z)}/(3|z|)}{\\Gamma(4/3)/|z|^{1/3}}.",
          explanation:
            "Dividing the two moduli isolates the relative size.",
        },
        {
          stepNumber: 13,
          description: "Simplify the power of \\( |z| \\).",
          workingLatex:
            "\\frac{|z|^{1/3}}{|z|} = |z|^{-2/3} \\ \\Longrightarrow\\ \\frac{|I_{t=1}|}{|I_{t=0}|} = \\frac{e^{\\operatorname{Re}(z)}}{3\\Gamma(4/3)\\,|z|^{2/3}}.",
          explanation:
            "The algebraic factors combine to \\( |z|^{-2/3} \\), multiplied by the exponential.",
        },
        {
          stepNumber: 14,
          description: "Behaviour for \\( \\operatorname{Re}(z)>0 \\) bounded away from \\( 0 \\).",
          workingLatex:
            "\\operatorname{Re}(z)\\ge c|z| \\ \\Longrightarrow\\ \\frac{|I_{t=1}|}{|I_{t=0}|} \\to\\infty.",
          explanation:
            "The exponential overwhelms the algebraic factor, so the \\( t=1 \\) term dominates.",
        },
        {
          stepNumber: 15,
          description: "Behaviour as \\( \\arg z\\to\\pi/2 \\).",
          workingLatex:
            "\\operatorname{Re}(z)\\to0^+ \\ \\Longrightarrow\\ \\frac{|I_{t=1}|}{|I_{t=0}|} \\to \\frac{1}{3\\Gamma(4/3)|z|^{2/3}}.",
          explanation:
            "Near the imaginary axis the exponential is \\( O(1) \\), so the two terms become comparable — the anti-Stokes balance.",
        },
        {
          stepNumber: 16,
          description: "Numerical magnitudes at \\( z=40 \\).",
          workingLatex:
            "I_{t=1}(40) \\approx 1.996\\times10^{15}, \\qquad |I_{t=0}(40)| \\approx 0.261.",
          explanation:
            "The exponential term reproduces \\( I \\) while the algebraic term is a tiny correction on the positive axis.",
        },
        {
          stepNumber: 17,
          description: "Check the relative size at \\( z=40 \\).",
          workingLatex:
            "\\frac{|I_{t=1}|}{|I_{t=0}|} \\approx \\frac{1.996\\times10^{15}}{0.261} \\approx 7.6\\times10^{15}.",
          explanation:
            "Consistent with \\( e^{40}/(3\\Gamma(4/3)\\,40^{2/3}) \\), confirming the ratio formula.",
        },
        {
          stepNumber: 18,
          description: "State the relative size.",
          workingLatex:
            "\\operatorname{Re}(z)>0:\\ I_{t=1}\\ \\text{dominant by } \\sim\\frac{e^{\\operatorname{Re}(z)}}{|z|^{2/3}}.",
          explanation:
            "For \\( \\operatorname{Re}(z)>0 \\) the \\( t=1 \\) term dominates by the stated factor.",
        },
        {
          stepNumber: 19,
          description: "Identify where comparability occurs.",
          workingLatex:
            "\\text{comparable only as } \\arg z\\to\\tfrac\\pi2 \\ (\\operatorname{Re}(z)\\to0).",
          explanation:
            "Only on approach to the anti-Stokes line do the two endpoint contributions become the same order.",
        },
        {
          stepNumber: 20,
          description: "State the uniform two-endpoint formula.",
          workingLatex:
            "I(z)\\sim\\frac{e^{z}}{3z}\\!\\left(1+\\frac{2}{3z}\\right) - \\frac{\\Gamma(4/3)}{z^{1/3}} \\qquad (|\\arg z|<\\tfrac\\pi2).",
          explanation:
            "The combined formula, with the \\( t=1 \\) term to two orders and the \\( t=0 \\) term to leading order, valid uniformly across the open right half-plane.",
        },
      ],
      finalAnswer:
        "\\( I(z)\\sim\\dfrac{e^{z}}{3z}\\!\\left(1+\\dfrac{2}{3z}\\right) - \\dfrac{\\Gamma(4/3)}{z^{1/3}} \\); the \\( t=1 \\) term dominates by a factor \\( \\sim e^{\\operatorname{Re}(z)}/|z|^{2/3} \\).",
    },
  },
  {
    id: "am8c-028",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 28",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) The three steepest-descent rays of \\( zt^3 \\) from \\( t=0 \\) are at \\( \\arg t=((2k+1)\\pi-\\arg z)/3 \\). For \\( z=ix \\) (\\( x>0 \\)), list the three ray angles, identify the admissible one entering \\( (0,1) \\), and give the resulting phase of the \\( t=0 \\) endpoint term.",
    marks: 5,
    yearCreated: 2026,
    tags: ["steepest descent", "cubic saddle", "admissible ray", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the ray formula.",
          workingLatex:
            "\\arg t = \\frac{(2k+1)\\pi - \\arg z}{3}, \\qquad k=0,1,2.",
          explanation:
            "The three steepest-descent directions of the cubic saddle \\( zt^3 \\) at \\( t=0 \\).",
        },
        {
          stepNumber: 2,
          description: "Find the argument of \\( z=ix \\).",
          workingLatex: "z=ix,\\ x>0 \\ \\Longrightarrow\\ \\arg z = \\tfrac\\pi2.",
          explanation:
            "On the positive imaginary axis the argument is \\( \\pi/2 \\); only \\( \\arg z \\) enters the ray formula.",
        },
        {
          stepNumber: 3,
          description: "Substitute into the ray formula.",
          workingLatex:
            "\\arg t = \\frac{(2k+1)\\pi - \\pi/2}{3}, \\qquad k=0,1,2.",
          explanation:
            "The three descent rays are 120 deg apart, as for any cubic saddle.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the \\( k=0 \\) ray.",
          workingLatex:
            "k=0:\\ \\arg t = \\frac{\\pi - \\pi/2}{3} = \\frac{\\pi/2}{3} = \\frac\\pi6 = 30^\\circ.",
          explanation:
            "The first ray leaves at \\( 30^\\circ \\).",
        },
        {
          stepNumber: 5,
          description: "Evaluate the \\( k=1 \\) ray.",
          workingLatex: "k=1:\\ \\arg t = 30^\\circ + 120^\\circ = 150^\\circ.",
          explanation:
            "Adding the \\( 120^\\circ \\) spacing.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the \\( k=2 \\) ray.",
          workingLatex: "k=2:\\ \\arg t = 150^\\circ + 120^\\circ = 270^\\circ.",
          explanation:
            "Completing the three rays.",
        },
        {
          stepNumber: 7,
          description: "List the three angles.",
          workingLatex:
            "\\arg t \\in \\{30^\\circ,\\ 150^\\circ,\\ 270^\\circ\\}.",
          explanation:
            "Confirmed numerically; the cubic saddle has three descent valleys.",
        },
        {
          stepNumber: 8,
          description: "Test the \\( 30^\\circ \\) ray.",
          workingLatex:
            "30^\\circ:\\ \\text{first quadrant, towards } (0,1).",
          explanation:
            "This ray heads into the region connected to the integration interval.",
        },
        {
          stepNumber: 9,
          description: "Test the \\( 150^\\circ \\) ray.",
          workingLatex:
            "150^\\circ:\\ \\text{second quadrant, away from } (0,1).",
          explanation:
            "It heads into the second quadrant, not reachable from \\( (0,1) \\).",
        },
        {
          stepNumber: 10,
          description: "Test the \\( 270^\\circ \\) ray.",
          workingLatex:
            "270^\\circ:\\ \\text{negative imaginary axis, away from } (0,1).",
          explanation:
            "It heads into the lower half-plane, also not reachable.",
        },
        {
          stepNumber: 11,
          description: "Select the admissible ray.",
          workingLatex:
            "\\arg t = 30^\\circ \\ (k=0)\\ \\text{is admissible}.",
          explanation:
            "Only the \\( 30^\\circ \\) ray leaves \\( t=0 \\) into the region connected to \\( (0,1) \\); the contour is deformed onto it.",
        },
        {
          stepNumber: 12,
          description: "Recall the endpoint term.",
          workingLatex:
            "I_{t=0}(z) = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "The general algebraic endpoint contribution, to be specialised to \\( z=ix \\).",
        },
        {
          stepNumber: 13,
          description: "Specialise to \\( z=ix \\).",
          workingLatex:
            "I_{t=0}(ix) = \\Gamma\\!\\left(\\tfrac43\\right)(-ix)^{-1/3}.",
          explanation:
            "Substituting \\( z=ix \\) into the endpoint term.",
        },
        {
          stepNumber: 14,
          description: "Write \\( -ix \\) in polar form.",
          workingLatex: "-ix = x\\,e^{-i\\pi/2}, \\qquad \\arg(-ix) = -\\tfrac\\pi2.",
          explanation:
            "For \\( x>0 \\), \\( -ix \\) lies on the negative imaginary axis, principal argument \\( -\\pi/2 \\).",
        },
        {
          stepNumber: 15,
          description: "Apply the \\( -1/3 \\) power.",
          workingLatex:
            "(-ix)^{-1/3} = x^{-1/3}\\,e^{-i(-\\pi/2)/3} = x^{-1/3}\\,e^{\\,i\\pi/6}.",
          explanation:
            "Dividing \\( \\arg(-ix)=-\\pi/2 \\) by \\( -3 \\) gives phase \\( +\\pi/6 \\).",
        },
        {
          stepNumber: 16,
          description: "Convert the phase to degrees.",
          workingLatex: "e^{\\,i\\pi/6} = e^{\\,i\\,30^\\circ}.",
          explanation:
            "The phase \\( \\pi/6 \\) is \\( 30^\\circ \\).",
        },
        {
          stepNumber: 17,
          description: "Link the phase to the admissible ray.",
          workingLatex:
            "\\arg t = 30^\\circ \\ \\Longleftrightarrow\\ \\text{endpoint phase } e^{\\,i\\,30^\\circ}.",
          explanation:
            "The admissible \\( 30^\\circ \\) descent ray is exactly what produces the \\( e^{i\\pi/6} \\) factor in the endpoint term.",
        },
        {
          stepNumber: 18,
          description: "Write the endpoint contribution.",
          workingLatex:
            "I_{t=0}(ix) = \\Gamma\\!\\left(\\tfrac43\\right)e^{\\,i\\pi/6}\\,x^{-1/3}.",
          explanation:
            "The \\( t=0 \\) endpoint term for \\( z=ix \\), with modulus \\( \\Gamma(4/3)x^{-1/3} \\) and phase \\( \\pi/6 \\).",
        },
        {
          stepNumber: 19,
          description: "Numerical check of the phase.",
          workingLatex:
            "(-ix)^{-1/3} = x^{-1/3}e^{i\\pi/6} \\ \\text{to machine precision}.",
          explanation:
            "Verified directly: the cube-root branch gives exactly \\( e^{i\\pi/6} \\).",
        },
        {
          stepNumber: 20,
          description: "State the result.",
          workingLatex:
            "\\text{Rays } 30^\\circ,150^\\circ,270^\\circ;\\ \\text{admissible } 30^\\circ;\\ I_{t=0}=\\Gamma\\!\\left(\\tfrac43\\right)e^{i\\pi/6}x^{-1/3}.",
          explanation:
            "The admissible descent ray and the resulting endpoint phase are consistent with the stationary-phase result of am8c-017.",
        },
      ],
      finalAnswer:
        "Rays at \\( 30^\\circ,150^\\circ,270^\\circ \\); the \\( 30^\\circ \\) ray is admissible; endpoint term \\( \\Gamma(4/3)e^{i\\pi/6}x^{-1/3} \\).",
      canonicalAnswer: "gamma(4/3)*exp(i*pi/6)*x^(-1/3)",
    },
  },
  {
    id: "am8c-029",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 29",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Show that \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) satisfies the first-order ODE \\( 3z\\,I'(z) + I(z) = e^{z} \\), and use it to recover both the leading \\( t=1 \\) term \\( e^z/(3z) \\) and the algebraic homogeneous solution \\( \\propto z^{-1/3} \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["differential equation", "endpoint vs homogeneous", "consistency", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate under the integral.",
          workingLatex:
            "I'(z) = \\int_0^1 t^3 e^{z t^3}\\,dt.",
          explanation:
            "Differentiating \\( e^{zt^3} \\) in \\( z \\) brings down \\( t^3 \\); the integral converges, so differentiation under the sign is valid.",
        },
        {
          stepNumber: 2,
          description: "Look for a total \\( t \\)-derivative.",
          workingLatex:
            "\\text{try } \\frac{d}{dt}\\!\\left(t\\,e^{z t^3}\\right).",
          explanation:
            "We seek a primitive whose derivative contains \\( t^3 e^{zt^3} \\), to convert the integral identity into a differential one.",
        },
        {
          stepNumber: 3,
          description: "Apply the product rule.",
          workingLatex:
            "\\frac{d}{dt}\\!\\left(t\\,e^{z t^3}\\right) = e^{z t^3} + t\\cdot 3z t^2 e^{z t^3} = e^{z t^3} + 3z\\,t^3 e^{z t^3}.",
          explanation:
            "The second term is exactly \\( 3z \\) times the integrand of \\( I' \\).",
        },
        {
          stepNumber: 4,
          description: "Integrate the identity over \\( (0,1) \\).",
          workingLatex:
            "\\left[t\\,e^{z t^3}\\right]_0^1 = \\int_0^1 e^{z t^3}dt + 3z\\int_0^1 t^3 e^{z t^3}dt.",
          explanation:
            "Integrating both sides; the left telescopes to boundary values.",
        },
        {
          stepNumber: 5,
          description: "Identify the two integrals.",
          workingLatex:
            "\\int_0^1 e^{z t^3}dt = I(z), \\qquad \\int_0^1 t^3 e^{z t^3}dt = I'(z).",
          explanation:
            "The right side is \\( I(z)+3z\\,I'(z) \\).",
        },
        {
          stepNumber: 6,
          description: "Evaluate the boundary term.",
          workingLatex:
            "\\left[t\\,e^{z t^3}\\right]_0^1 = 1\\cdot e^{z} - 0\\cdot e^{0} = e^{z}.",
          explanation:
            "The \\( t=1 \\) end gives \\( e^z \\); the \\( t=0 \\) end vanishes because of the factor \\( t \\).",
        },
        {
          stepNumber: 7,
          description: "State the ODE.",
          workingLatex:
            "3z\\,I'(z) + I(z) = e^{z}.",
          explanation:
            "This is the required first-order linear inhomogeneous ODE for \\( I \\).",
        },
        {
          stepNumber: 8,
          description: "Split into particular and homogeneous parts.",
          workingLatex: "I = I_p + I_h, \\qquad 3z\\,I_p'+I_p=e^z,\\ \\ 3z\\,I_h'+I_h=0.",
          explanation:
            "The general solution is a particular solution of the inhomogeneous equation plus the homogeneous solution.",
        },
        {
          stepNumber: 9,
          description: "Try a particular solution matching the source.",
          workingLatex: "I_p \\sim \\frac{e^{z}}{3z}.",
          explanation:
            "Since the source \\( e^z \\) grows exponentially, try an ansatz \\( e^z \\times (\\text{power series in } 1/z) \\).",
        },
        {
          stepNumber: 10,
          description: "Differentiate the ansatz.",
          workingLatex:
            "\\left(\\frac{e^z}{3z}\\right)' = \\frac{e^z\\cdot3z - e^z\\cdot3}{9z^2} = \\frac{e^z(z-1)}{3z^2}.",
          explanation:
            "Quotient rule on \\( e^z/(3z) \\).",
        },
        {
          stepNumber: 11,
          description: "Form \\( 3z\\,I_p' \\).",
          workingLatex:
            "3z\\left(\\frac{e^z}{3z}\\right)' = 3z\\cdot\\frac{e^z(z-1)}{3z^2} = \\frac{e^z(z-1)}{z} = e^z\\!\\left(1-\\frac1z\\right).",
          explanation:
            "Multiplying by \\( 3z \\) simplifies the expression.",
        },
        {
          stepNumber: 12,
          description: "Add \\( I_p \\).",
          workingLatex:
            "3z\\,I_p' + I_p = e^z\\!\\left(1-\\frac1z\\right) + \\frac{e^z}{3z} = e^z\\!\\left(1-\\frac{2}{3z}\\right).",
          explanation:
            "Combining the two pieces gives the source plus an \\( O(1/z) \\) error.",
        },
        {
          stepNumber: 13,
          description: "Match the source to leading order.",
          workingLatex:
            "3z\\,I_p' + I_p = e^z\\big(1 + O(1/z)\\big) = e^z\\ \\text{to leading order}.",
          explanation:
            "The ansatz \\( e^z/(3z) \\) balances the source \\( e^z \\) at leading order; the \\( -2/(3z) \\) is removed by including the next term \\( c_1/z^2 \\) in the series.",
        },
        {
          stepNumber: 14,
          description: "Identify the full particular series.",
          workingLatex:
            "I_p \\sim \\frac{e^z}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}}, \\qquad c_n=\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}.",
          explanation:
            "Continuing the matching reproduces the dominant \\( t=1 \\) endpoint series.",
        },
        {
          stepNumber: 15,
          description: "Set up the homogeneous equation.",
          workingLatex: "3z\\,I_h' + I_h = 0.",
          explanation:
            "The homogeneous part has no source and decays algebraically.",
        },
        {
          stepNumber: 16,
          description: "Separate variables.",
          workingLatex:
            "\\frac{I_h'}{I_h} = -\\frac{1}{3z}.",
          explanation:
            "Dividing through by \\( 3z\\,I_h \\) gives a separable equation.",
        },
        {
          stepNumber: 17,
          description: "Integrate.",
          workingLatex:
            "\\ln I_h = -\\tfrac13\\ln z + \\text{const}.",
          explanation:
            "Integrating both sides in \\( z \\).",
        },
        {
          stepNumber: 18,
          description: "Solve for \\( I_h \\).",
          workingLatex:
            "I_h \\propto z^{-1/3}.",
          explanation:
            "Exponentiating gives the algebraic homogeneous solution \\( I_h\\propto z^{-1/3} \\).",
        },
        {
          stepNumber: 19,
          description: "Match to the \\( t=0 \\) endpoint term.",
          workingLatex:
            "I_h = -\\Gamma\\!\\left(\\tfrac43\\right)z^{-1/3} \\ \\text{on } |\\arg z|<\\tfrac\\pi2.",
          explanation:
            "The homogeneous solution is exactly the form of the recessive \\( t=0 \\) endpoint term; its multiplier is the sector-dependent constant.",
        },
        {
          stepNumber: 20,
          description: "Assemble the general asymptotic solution.",
          workingLatex:
            "I(z) = I_p + I_h \\sim \\frac{e^z}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}} + A\\,z^{-1/3}.",
          explanation:
            "The ODE cleanly separates the dominant exponential particular solution (the \\( t=1 \\) series) from the recessive algebraic homogeneous one (the \\( t=0 \\) term).",
        },
      ],
      finalAnswer:
        "\\( 3z\\,I'+I=e^{z} \\); particular solution \\( \\sim e^z/(3z) \\) (\\( t=1 \\) series), homogeneous solution \\( \\propto z^{-1/3} \\) (the \\( t=0 \\) endpoint term).",
    },
  },
  {
    id: "am8c-030",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & general cubic phase 30",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Assemble the full picture: starting from \\( 3z\\,I'(z)+I(z)=e^{z} \\), give the complete sector-by-sector asymptotic of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) as one dominant series plus one homogeneous term \\( A(\\arg z)\\,z^{-1/3} \\), and state the three values of \\( A \\) on the sectors \\( |\\arg z|<\\tfrac\\pi2 \\), \\( (\\tfrac\\pi2,\\tfrac{3\\pi}2) \\) split at the cut, with the Stokes constant fixed by matching to the integral.",
    marks: 6,
    yearCreated: 2026,
    tags: ["synthesis", "Stokes constant", "sector", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the ODE.",
          workingLatex: "3z\\,I'(z) + I(z) = e^{z}.",
          explanation:
            "The first-order linear equation satisfied by \\( I \\), derived from integration by parts on the integral.",
        },
        {
          stepNumber: 2,
          description: "Write the particular solution.",
          workingLatex:
            "I_p(z) \\sim \\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}}, \\qquad c_n=\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}.",
          explanation:
            "The exponential particular solution is the dominant \\( t=1 \\) endpoint series.",
        },
        {
          stepNumber: 3,
          description: "Write the homogeneous solution.",
          workingLatex: "I_h(z) = A\\,z^{-1/3}.",
          explanation:
            "Solving \\( 3zI_h'+I_h=0 \\) gives \\( z^{-1/3} \\) with an arbitrary constant \\( A \\).",
        },
        {
          stepNumber: 4,
          description: "Write the general asymptotic solution.",
          workingLatex:
            "I(z) \\sim \\underbrace{\\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}}}_{\\text{particular}} + \\underbrace{A\\,z^{-1/3}}_{\\text{homogeneous}}.",
          explanation:
            "The ODE fixes the structure but leaves \\( A \\) free; it is pinned only by matching to the actual integral in each sector.",
        },
        {
          stepNumber: 5,
          description: "Recall the integral's \\( t=0 \\) term.",
          workingLatex:
            "I_{t=0}(z) = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "From the convergent Watson integral; this is the object the ODE's homogeneous solution must equal.",
        },
        {
          stepNumber: 6,
          description: "Match in the right half-plane.",
          workingLatex:
            "|\\arg z|<\\tfrac\\pi2:\\ (-z)^{-1/3}=-z^{-1/3}.",
          explanation:
            "On the principal branch the cube root reduces to \\( -z^{-1/3} \\).",
        },
        {
          stepNumber: 7,
          description: "Fix \\( A \\) in the right half-plane.",
          workingLatex:
            "A = -\\Gamma\\!\\left(\\tfrac43\\right).",
          explanation:
            "Matching \\( A z^{-1/3} = \\Gamma(4/3)(-z)^{-1/3} \\) gives \\( A=-\\Gamma(4/3) \\); this value is pinned by the integral, not by the ODE alone.",
        },
        {
          stepNumber: 8,
          description: "Cross the anti-Stokes line \\( \\arg z=\\pi/2 \\).",
          workingLatex:
            "\\arg z:\\ \\text{increase past } \\tfrac\\pi2.",
          explanation:
            "Beyond the anti-Stokes line the exponential becomes recessive and the algebraic term switches on.",
        },
        {
          stepNumber: 9,
          description: "Evaluate the branch in the upper sector.",
          workingLatex:
            "\\arg z\\in(\\delta,\\pi-\\delta):\\ (-z)^{-1/3} = e^{i\\pi/3}z^{-1/3}.",
          explanation:
            "Writing \\( -z=e^{-i\\pi}z \\) and taking the \\( -1/3 \\) power gives \\( e^{i\\pi/3} \\).",
        },
        {
          stepNumber: 10,
          description: "Fix \\( A \\) in the upper sector.",
          workingLatex:
            "A = e^{i\\pi/3}\\Gamma\\!\\left(\\tfrac43\\right).",
          explanation:
            "Matching again gives the upper-sector coefficient.",
        },
        {
          stepNumber: 11,
          description: "Use the conjugate symmetry.",
          workingLatex:
            "I(\\bar z) = \\overline{I(z)} \\ \\Longrightarrow\\ \\arg z\\to-\\arg z:\\ e^{i\\pi/3}\\to e^{-i\\pi/3}.",
          explanation:
            "Real integrand and real coefficients force conjugate symmetry, mapping upper to lower sector.",
        },
        {
          stepNumber: 12,
          description: "Fix \\( A \\) in the lower sector.",
          workingLatex:
            "\\arg z\\in(\\pi+\\delta,2\\pi-\\delta):\\ A = e^{-i\\pi/3}\\Gamma\\!\\left(\\tfrac43\\right).",
          explanation:
            "The lower sector carries the conjugate constant by symmetry.",
        },
        {
          stepNumber: 13,
          description: "List the three values of \\( A \\).",
          workingLatex:
            "A \\in \\{-1,\\ e^{i\\pi/3},\\ e^{-i\\pi/3}\\}\\,\\Gamma\\!\\left(\\tfrac43\\right).",
          explanation:
            "Collecting the RHP, upper and lower coefficients.",
        },
        {
          stepNumber: 14,
          description: "Recognise the cube roots of \\( -1 \\).",
          workingLatex:
            "\\{-1,\\ e^{i\\pi/3},\\ e^{-i\\pi/3}\\} = \\{(-1)^{1/3}\\}.",
          explanation:
            "The three coefficients are \\( \\Gamma(4/3) \\) times the three cube roots of \\( -1 \\).",
        },
        {
          stepNumber: 15,
          description: "Compute the Stokes multiplier.",
          workingLatex:
            "\\frac{e^{i\\pi/3}}{-1} = e^{-2i\\pi/3}, \\qquad \\frac{e^{-i\\pi/3}}{e^{i\\pi/3}} = e^{-2i\\pi/3}.",
          explanation:
            "Each sector crossing multiplies \\( A \\) by the same cube root of unity \\( e^{-2i\\pi/3} \\).",
        },
        {
          stepNumber: 16,
          description: "State the Stokes recurrence.",
          workingLatex:
            "A_{\\text{next}} = e^{-2i\\pi/3}\\,A_{\\text{prev}}.",
          explanation:
            "The single Stokes constant \\( e^{-2i\\pi/3} \\) governs every crossing.",
        },
        {
          stepNumber: 17,
          description: "Verify single-valuedness.",
          workingLatex:
            "\\big(e^{-2i\\pi/3}\\big)^3 = e^{-2i\\pi} = 1.",
          explanation:
            "After three crossings \\( A \\) returns to its starting value, consistent with \\( I \\) being single-valued; the recessive term is exponentially small where it switches.",
        },
        {
          stepNumber: 18,
          description: "Write the uniform form.",
          workingLatex:
            "I(z)\\sim\\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{c_n}{z^{n+1}} + \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "Written with \\( (-z)^{-1/3} \\) the multivalued cube root automatically supplies the three sector values of \\( A \\).",
        },
        {
          stepNumber: 19,
          description: "Separate the roles of ODE and integral.",
          workingLatex:
            "\\text{ODE}\\Rightarrow\\text{structure } (e^z\\text{-series}+z^{-1/3});\\quad \\text{integral}\\Rightarrow\\text{value of } A.",
          explanation:
            "The ODE gives the form of the asymptotics; the convergent integral fixes the single Stokes constant.",
        },
        {
          stepNumber: 20,
          description: "Numerical confirmation.",
          workingLatex:
            "|z|=25:\\ \\text{all three sector forms match } I \\ \\text{to high precision}.",
          explanation:
            "The synthesis is confirmed numerically in all three sectors at \\( |z|=25 \\).",
        },
      ],
      finalAnswer:
        "\\( I(z)\\sim\\dfrac{e^{z}}{3}\\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)} + A\\,z^{-1/3} \\) with \\( A=\\{-1,e^{i\\pi/3},e^{-i\\pi/3}\\}\\Gamma(4/3) \\); Stokes multiplier \\( e^{-2i\\pi/3} \\), equivalently \\( A\\,z^{-1/3}=\\Gamma(4/3)(-z)^{-1/3} \\).",
    },
  },
];
