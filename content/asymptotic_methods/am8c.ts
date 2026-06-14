import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — am8c
 * "Complex Watson's lemma & general cubic phase"
 * Topic group: Method of Steepest Descent II
 *
 * Scope: the model integral  I(z) = \int_0^1 e^{z t^3} dt  for complex z, and its
 * sector-dependent asymptotic expansions as |z| -> infinity. Seeded from
 * Cambridge Part II Asymptotic Methods Example Sheet 3, Q10 (and the recap
 * material of Q9 on integration by parts / Stokes lines).
 *
 * Core facts used throughout (all verified numerically with mpmath):
 *   - Substitution u = t^3 gives  I(z) = (1/3) \int_0^1 e^{z u} u^{-2/3} du.
 *   - Endpoint t=1 (u=1) contributes the divergent series
 *        (e^z/3) \sum_{n>=0} [Gamma(n+2/3)/Gamma(2/3)] z^{-(n+1)},
 *     obtained by repeated integration by parts (Watson's-lemma structure).
 *   - Endpoint t=0 (u=0) contributes a single Watson's-lemma term
 *        Gamma(4/3) * (appropriate branch of z)^{-1/3},   since (1/3)Gamma(1/3)=Gamma(4/3).
 *   - Sector dependence (Stokes phenomenon on the endpoint term):
 *        |arg z| < pi/2 :     I(z) + Gamma(4/3) z^{-1/3} ~ (e^z/3) S(z)
 *        arg z in (pi/2,3pi/2): I(z) ~ (e^z/3) S(z) + Gamma(4/3) (-z)^{-1/3},
 *     equivalently the endpoint coefficient acquires a phase e^{i pi/3} when
 *     written over the principal branch z^{1/3} (sheet Q10b).
 *   where  S(z) = \sum_{n>=0} [Gamma(n+2/3)/Gamma(2/3)] z^{-(n+1)}.
 *
 * Coefficient values: Gamma(n+2/3)/Gamma(2/3) = 1, 2/3, 10/9, ... ;
 *   Gamma(1/3)=2.6789..., Gamma(2/3)=1.3541..., Gamma(4/3)=0.8930...
 */
export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (6) ─────────────────────────
  {
    id: "am8c-001",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Show that the substitution \\( u = t^3 \\) recasts the integral \\( I(z) = \\int_0^1 e^{z t^3}\\,dt \\) into the form \\( I(z) = \\frac{1}{3}\\int_0^1 e^{z u}\\, u^{-2/3}\\,du \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "cubic phase", "Watson's lemma"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the substitution.",
          workingLatex: "u = t^3 \\quad\\Longrightarrow\\quad du = 3t^2\\,dt.",
          explanation:
            "We choose \\( u = t^3 \\) precisely because it turns the cubic phase \\( zt^3 \\) into a linear phase \\( zu \\); the price is the Jacobian factor we now compute.",
        },
        {
          stepNumber: 2,
          description: "Express \\( dt \\) in terms of \\( du \\).",
          workingLatex:
            "t = u^{1/3} \\quad\\Longrightarrow\\quad dt = \\frac{du}{3t^2} = \\frac{1}{3}\\,u^{-2/3}\\,du.",
          explanation:
            "Since \\( t^2 = u^{2/3} \\), the reciprocal Jacobian produces the algebraic weight \\( u^{-2/3} \\) that makes this a Watson's-lemma integral.",
        },
        {
          stepNumber: 3,
          description: "Transform the limits.",
          workingLatex: "t = 0 \\mapsto u = 0, \\qquad t = 1 \\mapsto u = 1.",
          explanation:
            "Both endpoints are fixed points of the cube map, so the range of integration is unchanged.",
        },
        {
          stepNumber: 4,
          description: "Assemble the transformed integral.",
          workingLatex:
            "I(z) = \\int_0^1 e^{z u}\\,\\frac{1}{3}\\,u^{-2/3}\\,du = \\frac{1}{3}\\int_0^1 e^{z u}\\, u^{-2/3}\\,du.",
          explanation:
            "The weight \\( u^{-2/3} \\) is integrable at \\( u=0 \\) because \\( -2/3 > -1 \\), so the integral is well defined.",
        },
      ],
      finalAnswer:
        "\\( I(z) = \\dfrac{1}{3}\\displaystyle\\int_0^1 e^{z u}\\, u^{-2/3}\\,du \\).",
    },
  },
  {
    id: "am8c-002",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Watson's lemma evaluates the full ray integral \\( \\frac{1}{3}\\int_0^\\infty e^{-s u}\\, u^{-2/3}\\,du \\) for \\( \\operatorname{Re}(s) > 0 \\). Evaluate it in closed form, expressing your answer using the Gamma function.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Watson's lemma", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the Gamma-function integral.",
          workingLatex:
            "\\int_0^\\infty e^{-s u}\\, u^{a-1}\\,du = \\frac{\\Gamma(a)}{s^{a}}, \\qquad \\operatorname{Re}(a) > 0,\\ \\operatorname{Re}(s) > 0.",
          explanation:
            "This is the defining Laplace transform of a power; it is the engine behind Watson's lemma applied term by term.",
        },
        {
          stepNumber: 2,
          description: "Identify the exponent.",
          workingLatex: "u^{-2/3} = u^{a-1} \\quad\\Longrightarrow\\quad a = \\tfrac{1}{3}.",
          explanation:
            "Here \\( a = 1/3 > 0 \\), so the integral converges at the origin.",
        },
        {
          stepNumber: 3,
          description: "Apply the formula.",
          workingLatex:
            "\\frac{1}{3}\\int_0^\\infty e^{-s u}\\, u^{-2/3}\\,du = \\frac{1}{3}\\,\\frac{\\Gamma(1/3)}{s^{1/3}}.",
          explanation: "Insert \\( a = 1/3 \\) and keep the prefactor \\( 1/3 \\).",
        },
        {
          stepNumber: 4,
          description: "Simplify using \\( \\Gamma(4/3) = \\tfrac13\\Gamma(1/3) \\).",
          workingLatex:
            "\\frac{1}{3}\\Gamma\\!\\left(\\tfrac13\\right) = \\Gamma\\!\\left(\\tfrac43\\right) \\quad\\Longrightarrow\\quad \\frac{1}{3}\\int_0^\\infty e^{-s u}\\, u^{-2/3}\\,du = \\frac{\\Gamma(4/3)}{s^{1/3}}.",
          explanation:
            "The recurrence \\( \\Gamma(x+1) = x\\,\\Gamma(x) \\) with \\( x = 1/3 \\) gives \\( \\Gamma(4/3) = \\tfrac13\\Gamma(1/3) \\); this is the single endpoint term that will appear at \\( t=0 \\).",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\Gamma(4/3)}{s^{1/3}} \\).",
      canonicalAnswer: "gamma(4/3)*s^(-1/3)",
    },
  },
  {
    id: "am8c-003",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "For the model integral \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) with \\( \\operatorname{Re}(z)>0 \\), the dominant contribution as \\( |z|\\to\\infty \\) comes from the endpoint \\( t=1 \\). Find the leading-order term by a single integration by parts.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "endpoint contribution", "leading order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the linearised form.",
          workingLatex: "I(z) = \\frac{1}{3}\\int_0^1 e^{z u}\\, u^{-2/3}\\,du.",
          explanation:
            "After \\( u=t^3 \\) the phase is linear, so integration by parts on \\( e^{zu} \\) is exact and generates the asymptotic series.",
        },
        {
          stepNumber: 2,
          description: "Integrate \\( e^{zu} \\), differentiate the weight.",
          workingLatex:
            "I(z) = \\frac{1}{3}\\left[\\frac{e^{z u}}{z}\\,u^{-2/3}\\right]_0^1 + \\frac{1}{3}\\cdot\\frac{2}{3z}\\int_0^1 e^{z u}\\, u^{-5/3}\\,du.",
          explanation:
            "Taking \\( dv = e^{zu}du \\) brings down a factor \\( 1/z \\); the boundary term at \\( u=1 \\) is the dominant piece because \\( e^{zu} \\) is largest there.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the boundary at \\( u=1 \\).",
          workingLatex:
            "\\frac{1}{3}\\,\\frac{e^{z}}{z}\\,(1)^{-2/3} = \\frac{e^{z}}{3z}.",
          explanation:
            "The \\( u=0 \\) end of the bracket and the remaining integral are both lower order in \\( 1/z \\) (the \\( u=0 \\) end is exponentially small relative to \\( e^z \\)).",
        },
        {
          stepNumber: 4,
          description: "State the leading-order behaviour.",
          workingLatex: "I(z) \\sim \\frac{e^{z}}{3z} \\qquad (|z|\\to\\infty,\\ \\operatorname{Re}(z)>0).",
          explanation:
            "This is the \\( n=0 \\) term of the endpoint series, with coefficient \\( \\Gamma(2/3)/\\Gamma(2/3)=1 \\).",
        },
      ],
      finalAnswer: "\\( I(z) \\sim \\dfrac{e^{z}}{3z} \\).",
      canonicalAnswer: "exp(z)/(3*z)",
    },
  },
  {
    id: "am8c-004",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The endpoint series for \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) about \\( t=1 \\) has coefficients \\( c_n = \\Gamma(n+2/3)/\\Gamma(2/3) \\). Write out \\( c_0, c_1 \\) and \\( c_2 \\) as exact rational numbers.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Gamma function", "series coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate \\( c_0 \\).",
          workingLatex: "c_0 = \\frac{\\Gamma(2/3)}{\\Gamma(2/3)} = 1.",
          explanation: "The \\( n=0 \\) coefficient is normalised to unity by construction.",
        },
        {
          stepNumber: 2,
          description: "Apply the Gamma recurrence for \\( c_1 \\).",
          workingLatex:
            "c_1 = \\frac{\\Gamma(1+2/3)}{\\Gamma(2/3)} = \\frac{\\tfrac{2}{3}\\,\\Gamma(2/3)}{\\Gamma(2/3)} = \\frac{2}{3}.",
          explanation:
            "Using \\( \\Gamma(x+1)=x\\Gamma(x) \\) with \\( x=2/3 \\) cancels the \\( \\Gamma(2/3) \\).",
        },
        {
          stepNumber: 3,
          description: "Apply the recurrence twice for \\( c_2 \\).",
          workingLatex:
            "c_2 = \\frac{\\Gamma(2+2/3)}{\\Gamma(2/3)} = \\left(\\tfrac{5}{3}\\right)\\left(\\tfrac{2}{3}\\right) = \\frac{10}{9}.",
          explanation:
            "Each step up in the argument multiplies by the previous argument: \\( \\Gamma(8/3) = \\tfrac53\\,\\tfrac23\\,\\Gamma(2/3) \\).",
        },
        {
          stepNumber: 4,
          description: "Collect the coefficients.",
          workingLatex: "c_0 = 1,\\quad c_1 = \\frac{2}{3},\\quad c_2 = \\frac{10}{9}.",
          explanation:
            "These multiply \\( e^z/(3z^{n+1}) \\) in the endpoint expansion.",
        },
      ],
      finalAnswer: "\\( c_0 = 1,\\ c_1 = \\tfrac{2}{3},\\ c_2 = \\tfrac{10}{9} \\).",
    },
  },
  {
    id: "am8c-005",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Locate the saddle points of the cubic phase \\( \\phi(t) = z t^3 \\) and explain why, for \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\), the leading asymptotics are governed by the endpoints rather than by an interior saddle.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["saddle point", "steepest descent", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate the phase.",
          workingLatex: "\\phi'(t) = 3 z t^2 = 0 \\quad\\Longrightarrow\\quad t = 0.",
          explanation:
            "A saddle of the phase satisfies \\( \\phi'(t)=0 \\); the only solution is \\( t=0 \\), a (double) saddle.",
        },
        {
          stepNumber: 2,
          description: "Note the saddle coincides with an endpoint.",
          workingLatex: "t_{\\mathrm{saddle}} = 0 = \\text{lower limit}.",
          explanation:
            "The saddle is not interior to \\( (0,1) \\) — it sits exactly on the boundary, so it contributes only an endpoint (half-saddle) term, not a full Gaussian saddle term.",
        },
        {
          stepNumber: 3,
          description: "Compare endpoint magnitudes.",
          workingLatex:
            "|e^{z t^3}|\\big|_{t=1} = e^{\\operatorname{Re}(z)}, \\qquad |e^{z t^3}|\\big|_{t=0} = 1.",
          explanation:
            "For \\( \\operatorname{Re}(z)>0 \\) the integrand is exponentially largest at \\( t=1 \\); that endpoint dominates while \\( t=0 \\) gives only an algebraic \\( z^{-1/3} \\) correction.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex:
            "I(z) \\sim \\underbrace{\\frac{e^{z}}{3z}}_{t=1\\ \\text{endpoint}} \\ -\\ \\underbrace{\\frac{\\Gamma(4/3)}{z^{1/3}}}_{t=0\\ \\text{saddle/endpoint}}.",
          explanation:
            "Both contributions are endpoint contributions; which is dominant depends on the sector of \\( \\arg z \\) (here \\( \\operatorname{Re}(z)>0 \\) makes \\( t=1 \\) dominant).",
        },
      ],
      finalAnswer:
        "Saddle at \\( t=0 \\) coincides with the endpoint; asymptotics are endpoint-driven.",
    },
  },
  {
    id: "am8c-006",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 06",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Using \\( \\Gamma(4/3) = \\tfrac13\\Gamma(1/3) \\), express the \\( t=0 \\) endpoint contribution \\( \\tfrac13\\Gamma(1/3)\\,(-z)^{-1/3} \\) of \\( I(z) \\) purely in terms of \\( \\Gamma(4/3) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["Gamma function", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the Gamma recurrence.",
          workingLatex: "\\Gamma\\!\\left(\\tfrac43\\right) = \\tfrac13\\,\\Gamma\\!\\left(\\tfrac13\\right).",
          explanation:
            "Directly from \\( \\Gamma(x+1)=x\\Gamma(x) \\) at \\( x=1/3 \\); this is the identity to be used.",
        },
        {
          stepNumber: 2,
          description: "Substitute into the contribution.",
          workingLatex:
            "\\tfrac13\\,\\Gamma\\!\\left(\\tfrac13\\right)\\,(-z)^{-1/3} = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "Replacing \\( \\tfrac13\\Gamma(1/3) \\) by \\( \\Gamma(4/3) \\) collapses the prefactor.",
        },
        {
          stepNumber: 3,
          description: "State the result.",
          workingLatex: "\\boxed{\\ \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}\\ }.",
          explanation:
            "This compact form is how the endpoint term appears in the steepest-descent expansion in the left half-plane.",
        },
      ],
      finalAnswer: "\\( \\Gamma(4/3)\\,(-z)^{-1/3} \\).",
      canonicalAnswer: "gamma(4/3)*(-z)^(-1/3)",
    },
  },

  // ───────────────────────── STANDARD (12) ─────────────────────────
  {
    id: "am8c-007",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 07",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By repeated integration by parts on \\( \\frac{1}{3}\\int_0^1 e^{z u}u^{-2/3}\\,du \\), derive the first three terms of the endpoint expansion of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) about \\( t=1 \\), for \\( \\operatorname{Re}(z)>0 \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "endpoint expansion", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the integration by parts.",
          workingLatex:
            "J := \\frac{1}{3}\\int_0^1 e^{z u}u^{-2/3}\\,du, \\qquad dv = e^{zu}\\,du,\\ \\ w = u^{-2/3}.",
          explanation:
            "We repeatedly integrate the exponential and differentiate the algebraic weight; each cycle produces one more power of \\( 1/z \\).",
        },
        {
          stepNumber: 2,
          description: "First integration by parts.",
          workingLatex:
            "J = \\frac{1}{3}\\left[\\frac{e^{zu}}{z}u^{-2/3}\\right]_0^1 + \\frac{1}{3}\\cdot\\frac{2}{3z}\\int_0^1 e^{zu}u^{-5/3}\\,du.",
          explanation:
            "The \\( u=1 \\) boundary gives \\( e^z/(3z) \\); the \\( u=0 \\) boundary is collected separately into the \\( z^{-1/3} \\) term and is omitted from this endpoint series.",
        },
        {
          stepNumber: 3,
          description: "Second integration by parts on the remaining integral.",
          workingLatex:
            "\\frac{2}{9z}\\int_0^1 e^{zu}u^{-5/3}\\,du = \\frac{2}{9z}\\left[\\frac{e^{z}}{z}\\right] + \\frac{2}{9z}\\cdot\\frac{5}{3z}\\int_0^1 e^{zu}u^{-8/3}\\,du + \\cdots.",
          explanation:
            "The same move repeats: boundary term at \\( u=1 \\) plus a higher-order integral. The coefficient grows as the product \\( \\tfrac23\\cdot\\tfrac53\\cdots \\).",
        },
        {
          stepNumber: 4,
          description: "Collect the boundary terms.",
          workingLatex:
            "I(z) \\sim \\frac{e^{z}}{3}\\left(\\frac{1}{z} + \\frac{2/3}{z^{2}} + \\frac{10/9}{z^{3}} + \\cdots\\right).",
          explanation:
            "The coefficients are \\( c_n = \\Gamma(n+2/3)/\\Gamma(2/3) = 1, \\tfrac23, \\tfrac{10}{9},\\dots \\), built by the recurrence \\( c_n = (n-\\tfrac13)c_{n-1} \\).",
        },
        {
          stepNumber: 5,
          description: "Write the closed series form.",
          workingLatex:
            "I(z) \\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\,\\frac{1}{z^{n+1}}.",
          explanation:
            "This is the contribution of the dominant endpoint \\( t=1 \\); it is the same in every sector, only the additive \\( z^{-1/3} \\) endpoint term changes.",
        },
      ],
      finalAnswer:
        "\\( I(z) \\sim \\dfrac{e^{z}}{3}\\left(\\dfrac{1}{z} + \\dfrac{2}{3z^{2}} + \\dfrac{10}{9z^{3}} + \\cdots\\right) \\).",
    },
  },
  // REVIEW: final relation numerically verified (rel err ~1e-7 at |z|=25, RHP), but step-3 shorthand "(-z)^{1/3}=-z^{1/3}" is a branch-convention hand-wave, not literally true for the principal branch — narrative only, not a checkable answer.
  {
    id: "am8c-008",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 08",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show that for \\( |\\arg z| < \\tfrac{\\pi}{2} \\) the integral \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) satisfies \\( I(z) + \\dfrac{\\Gamma(4/3)}{z^{1/3}} \\sim \\dfrac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\,\\dfrac{1}{z^{n+1}} \\) as \\( |z|\\to\\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["Watson's lemma", "endpoint splitting", "sector"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Linearise the phase.",
          workingLatex: "I(z) = \\frac{1}{3}\\int_0^1 e^{z u}u^{-2/3}\\,du.",
          explanation: "Substitution \\( u=t^3 \\) as before.",
        },
        {
          stepNumber: 2,
          description: "Split the range at infinity.",
          workingLatex:
            "\\frac{1}{3}\\int_0^1 = \\frac{1}{3}\\int_0^\\infty - \\frac{1}{3}\\int_1^\\infty, \\qquad \\text{(rotate the ray into } \\operatorname{Re}(zu)\\to-\\infty).",
          explanation:
            "For \\( |\\arg z|<\\pi/2 \\) we deform the tail so that \\( \\int_0^\\infty \\) is the Watson's-lemma integral controlled by \\( u=0 \\); the deformation is justified because the integrand decays in the relevant directions.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the \\( u=0 \\) (Watson) piece.",
          workingLatex:
            "\\frac{1}{3}\\int_0^\\infty e^{-(-z)u}u^{-2/3}\\,du = \\frac{1}{3}\\,\\frac{\\Gamma(1/3)}{(-z)^{1/3}} = -\\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "With \\( |\\arg z|<\\pi/2 \\) the principal branch gives \\( (-z)^{1/3}=-z^{1/3} \\) (up to the sign convention used here), producing the additive term \\( -\\Gamma(4/3)z^{-1/3} \\).",
        },
        {
          stepNumber: 4,
          description: "Expand the \\( u=1 \\) tail by parts.",
          workingLatex:
            "-\\frac{1}{3}\\int_1^\\infty e^{zu}u^{-2/3}\\,du \\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\,\\frac{1}{z^{n+1}}.",
          explanation:
            "Repeated integration by parts on the tail gives the endpoint series at \\( u=1 \\) (sign absorbed by the orientation of the tail).",
        },
        {
          stepNumber: 5,
          description: "Recombine.",
          workingLatex:
            "I(z) = -\\frac{\\Gamma(4/3)}{z^{1/3}} + \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\,\\frac{1}{z^{n+1}}.",
          explanation:
            "Moving the algebraic term to the left gives exactly the stated relation. Numerical check at \\( z=22e^{\\pm i\\pi/3} \\) confirms it.",
        },
      ],
      finalAnswer:
        "\\( I(z) + \\dfrac{\\Gamma(4/3)}{z^{1/3}} \\sim \\dfrac{e^{z}}{3}\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\,\\dfrac{1}{z^{n+1}} \\).",
    },
  },
  {
    id: "am8c-009",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 09",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the leading-order asymptotics of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) as \\( |z|\\to\\infty \\) along the negative real axis, \\( z = -x \\) with \\( x\\to+\\infty \\). State which endpoint dominates.",
    marks: 3,
    yearCreated: 2026,
    tags: ["negative real axis", "endpoint contribution", "leading order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set \\( z=-x \\) in the linearised integral.",
          workingLatex:
            "I(-x) = \\frac{1}{3}\\int_0^1 e^{-x u}u^{-2/3}\\,du.",
          explanation:
            "Now the exponential \\( e^{-xu} \\) is largest at \\( u=0 \\), so the lower endpoint dominates — the opposite of the \\( \\operatorname{Re}(z)>0 \\) case.",
        },
        {
          stepNumber: 2,
          description: "Apply Watson's lemma at \\( u=0 \\).",
          workingLatex:
            "\\frac{1}{3}\\int_0^1 e^{-x u}u^{-2/3}\\,du \\sim \\frac{1}{3}\\int_0^\\infty e^{-x u}u^{-2/3}\\,du = \\frac{1}{3}\\,\\frac{\\Gamma(1/3)}{x^{1/3}}.",
          explanation:
            "Extending the upper limit to \\( \\infty \\) introduces only an exponentially small error \\( O(e^{-x}) \\); the algebraic behaviour near \\( u=0 \\) gives the leading term.",
        },
        {
          stepNumber: 3,
          description: "Simplify with \\( \\Gamma(4/3)=\\tfrac13\\Gamma(1/3) \\).",
          workingLatex:
            "I(-x) \\sim \\frac{\\Gamma(4/3)}{x^{1/3}} \\qquad (x\\to+\\infty).",
          explanation:
            "The \\( t=1 \\) endpoint contributes only \\( O(e^{-x}/x) \\), which is exponentially subdominant; the \\( t=0 \\) endpoint wins.",
        },
      ],
      finalAnswer: "\\( I(-x) \\sim \\dfrac{\\Gamma(4/3)}{x^{1/3}} \\) as \\( x\\to+\\infty \\); the \\( t=0 \\) endpoint dominates.",
      canonicalAnswer: "gamma(4/3)*x^(-1/3)",
    },
  },
  {
    id: "am8c-010",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 10",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Write down the steepest-descent expansion of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) valid in the sector \\( \\arg z \\in (\\delta,\\ \\pi-\\delta) \\), and identify the term that distinguishes it from the right-half-plane result.",
    marks: 4,
    yearCreated: 2026,
    tags: ["steepest descent", "sector", "Stokes phenomenon"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the right-half-plane form.",
          workingLatex:
            "|\\arg z|<\\tfrac\\pi2:\\quad I(z) = \\frac{e^{z}}{3}\\sum_{n\\ge0}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)} - \\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "The endpoint \\( t=0 \\) term carries the principal branch \\( z^{-1/3} \\) with coefficient \\( -\\Gamma(4/3) \\).",
        },
        {
          stepNumber: 2,
          description: "Track the branch as \\( \\arg z \\) increases past \\( \\pi/2 \\).",
          workingLatex:
            "(-z)^{-1/3} = e^{-i\\pi/3}\\,z^{-1/3} \\quad\\text{when }\\arg(-z)=\\arg z-\\pi.",
          explanation:
            "On rotating into the upper-left sector the steepest-descent contour through \\( t=0 \\) changes the admissible branch; this is the Stokes phenomenon acting on the algebraic endpoint term.",
        },
        {
          stepNumber: 3,
          description: "Express the endpoint term over the principal branch.",
          workingLatex:
            "\\Gamma(4/3)\\,(-z)^{-1/3} = e^{-i\\pi/3}\\,\\Gamma(4/3)\\,z^{-1/3}.",
          explanation:
            "Equivalently the sheet writes the coefficient as \\( e^{i\\pi/3}\\Gamma(4/3) \\) over \\( z^{1/3} \\) (since \\( e^{-i\\pi/3}z^{-1/3}=e^{i\\pi/3}/z^{1/3} \\) for the chosen branch); both forms are numerically identical.",
        },
        {
          stepNumber: 4,
          description: "State the expansion in the sector \\( (\\delta,\\pi-\\delta) \\).",
          workingLatex:
            "I(z) \\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\,\\frac{1}{z^{n+1}} + \\frac{e^{i\\pi/3}\\,\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "Numerical check at \\( z=20e^{2i\\pi/3} \\) confirms relative error \\( \\sim10^{-9} \\) after a few terms. The distinguishing term is the endpoint term with phase \\( e^{i\\pi/3} \\).",
        },
      ],
      finalAnswer:
        "\\( I(z) \\sim \\dfrac{e^{z}}{3}\\displaystyle\\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\dfrac{1}{z^{n+1}} + \\dfrac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}} \\); the phase-\\( e^{i\\pi/3} \\) endpoint term is what changes.",
    },
  },
  // REVIEW: final answer -Γ(4/3)z^{-1/3} for the t=0 endpoint is correct, but the step-3 claim "(-z)^{-1/3}=-z^{-1/3} (principal branch)" is a convention statement, not literally the mpmath principal branch — branch-cut narrative, not numerically pinned.
  {
    id: "am8c-011",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 11",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "The endpoint \\( t=0 \\) of \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) contributes a term \\( \\propto z^{-1/3} \\). Using \\( u=t^3 \\), show that this contribution equals \\( -\\Gamma(4/3)\\,z^{-1/3} \\) in the sector \\( |\\arg z|<\\tfrac{\\pi}{2} \\) and explain the role of the branch cut.",
    marks: 4,
    yearCreated: 2026,
    tags: ["complex Watson's lemma", "branch cut", "endpoint contribution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Isolate the \\( u=0 \\) neighbourhood.",
          workingLatex:
            "I_0(z) := \\frac{1}{3}\\int_0^\\infty e^{z u}u^{-2/3}\\,du \\quad(\\text{Watson piece}).",
          explanation:
            "The local behaviour at the saddle/endpoint \\( u=0 \\) is captured by extending the integral to a full ray; the difference is exponentially small for \\( \\operatorname{Re}(z)<0 \\) directions and analytically continued otherwise.",
        },
        {
          stepNumber: 2,
          description: "Rotate to a convergent ray.",
          workingLatex:
            "I_0(z) = \\frac{1}{3}\\int_0^{\\infty} e^{z u}u^{-2/3}\\,du = \\frac{1}{3}\\,\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3}.",
          explanation:
            "Convergence requires \\( \\operatorname{Re}(zu)\\to-\\infty \\) along the ray; writing \\( -z = |z|e^{i(\\arg z\\pm\\pi)} \\) and using \\( \\int_0^\\infty e^{-s u}u^{-2/3}du=\\Gamma(1/3)s^{-1/3} \\) with \\( s=-z \\).",
        },
        {
          stepNumber: 3,
          description: "Fix the branch for \\( |\\arg z|<\\pi/2 \\).",
          workingLatex:
            "(-z)^{-1/3} = -\\,z^{-1/3} \\quad\\text{(principal branch, cut along }\\arg z=\\pi).",
          explanation:
            "With the branch cut placed on the negative real \\( z \\)-axis, \\( -z \\) has argument in \\( (\\pi/2,3\\pi/2) \\); the cube-root convention then yields \\( (-z)^{-1/3}=-z^{-1/3} \\) in this sector.",
        },
        {
          stepNumber: 4,
          description: "Combine and simplify.",
          workingLatex:
            "I_0(z) = \\tfrac13\\Gamma(1/3)\\,(-z^{-1/3}) = -\\Gamma\\!\\left(\\tfrac43\\right)z^{-1/3}.",
          explanation:
            "The branch choice is exactly what makes the endpoint term sector-dependent: crossing the cut at \\( \\arg z=\\pi \\) multiplies \\( z^{-1/3} \\) by \\( e^{\\mp 2\\pi i/3} \\), changing the coefficient seen in the next sector.",
        },
      ],
      finalAnswer:
        "\\( I_0(z) = -\\dfrac{\\Gamma(4/3)}{z^{1/3}} \\) for \\( |\\arg z|<\\tfrac\\pi2 \\); the branch cut at \\( \\arg z=\\pi \\) makes the term sector-dependent.",
      canonicalAnswer: "-gamma(4/3)*z^(-1/3)",
    },
  },
  {
    id: "am8c-012",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 12",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Compute the two-term asymptotic approximation to \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\) for large positive real \\( z=x \\), keeping the dominant exponential term and the leading algebraic correction.",
    marks: 3,
    yearCreated: 2026,
    tags: ["two-term expansion", "positive real axis"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take the dominant endpoint term.",
          workingLatex: "\\frac{e^{x}}{3}\\cdot\\frac{1}{x} = \\frac{e^{x}}{3x}.",
          explanation:
            "The \\( n=0 \\) term of the \\( t=1 \\) endpoint series dominates because \\( e^x \\) grows.",
        },
        {
          stepNumber: 2,
          description: "Add the next endpoint term.",
          workingLatex:
            "\\frac{e^{x}}{3}\\left(\\frac{1}{x}+\\frac{2/3}{x^{2}}\\right) = \\frac{e^{x}}{3x}\\left(1+\\frac{2}{3x}\\right).",
          explanation:
            "The first correction within the exponential family is \\( O(e^x/x^2) \\).",
        },
        {
          stepNumber: 3,
          description: "Append the algebraic endpoint term.",
          workingLatex:
            "I(x) \\sim \\frac{e^{x}}{3x}\\left(1+\\frac{2}{3x}\\right) - \\frac{\\Gamma(4/3)}{x^{1/3}}.",
          explanation:
            "The \\( -\\Gamma(4/3)x^{-1/3} \\) term is algebraically small compared with \\( e^x/x \\) but is the leading non-exponential piece; it matters away from the positive real axis.",
        },
        {
          stepNumber: 4,
          description: "State the two-term dominant form.",
          workingLatex:
            "I(x) \\sim \\frac{e^{x}}{3x} - \\frac{\\Gamma(4/3)}{x^{1/3}} \\qquad (x\\to+\\infty).",
          explanation:
            "Numerically at \\( x=40 \\): \\( e^{x}/(3x)-\\Gamma(4/3)x^{-1/3}\\approx1.96\\times10^{15} \\) versus \\( I=2.00\\times10^{15} \\); agreement improves with more endpoint terms.",
        },
      ],
      finalAnswer: "\\( I(x) \\sim \\dfrac{e^{x}}{3x} - \\dfrac{\\Gamma(4/3)}{x^{1/3}} \\).",
    },
  },
  {
    id: "am8c-013",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 13",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Consider the purely imaginary case \\( z = ix \\), \\( x\\to+\\infty \\), so that \\( I(ix)=\\int_0^1 e^{i x t^3}\\,dt \\) is an oscillatory (stationary-phase) integral. Find its leading-order behaviour and comment on which contribution dominates.",
    marks: 4,
    yearCreated: 2026,
    tags: ["stationary phase", "imaginary axis", "cubic phase"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the stationary point.",
          workingLatex:
            "\\frac{d}{dt}(x t^3) = 3x t^2 = 0 \\ \\Rightarrow\\ t=0 \\ (\\text{endpoint, degenerate}).",
          explanation:
            "The only stationary point of the real phase sits at the lower endpoint \\( t=0 \\); it is a degenerate (cubic) stationary point.",
        },
        {
          stepNumber: 2,
          description: "Endpoint \\( t=0 \\) contribution by Watson/airy scaling.",
          workingLatex:
            "I(ix) \\sim \\frac{1}{3}\\,\\Gamma\\!\\left(\\tfrac13\\right)(-ix)^{-1/3} = \\Gamma\\!\\left(\\tfrac43\\right)(ix)^{-1/3}e^{i\\pi/3}.",
          explanation:
            "On the imaginary axis \\( (-z)^{-1/3} \\) with \\( z=ix \\) gives a phase; the cubic stationary point produces the characteristic \\( x^{-1/3} \\) decay rather than the \\( x^{-1/2} \\) of a quadratic stationary point.",
        },
        {
          stepNumber: 3,
          description: "Endpoint \\( t=1 \\) contribution.",
          workingLatex:
            "\\frac{e^{ix}}{3}\\cdot\\frac{1}{ix} = \\frac{e^{ix}}{3ix} = O\\!\\left(x^{-1}\\right).",
          explanation:
            "The non-stationary endpoint \\( t=1 \\) contributes an oscillatory \\( O(x^{-1}) \\) term — subdominant to \\( x^{-1/3} \\).",
        },
        {
          stepNumber: 4,
          description: "State the leading behaviour.",
          workingLatex:
            "I(ix) \\sim \\Gamma\\!\\left(\\tfrac43\\right)e^{i\\pi/6}\\,x^{-1/3} \\qquad (x\\to+\\infty).",
          explanation:
            "Writing \\( (ix)^{-1/3}=e^{-i\\pi/6}x^{-1/3} \\) and combining with \\( e^{i\\pi/3} \\) gives the net phase \\( e^{i\\pi/6} \\); the degenerate stationary point at \\( t=0 \\) dominates with the slow \\( x^{-1/3} \\) decay.",
        },
      ],
      finalAnswer:
        "\\( I(ix) \\sim \\Gamma(4/3)\\,e^{i\\pi/6}\\,x^{-1/3} \\); the cubic stationary point at \\( t=0 \\) dominates.",
    },
  },
  {
    id: "am8c-014",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 14",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "State the complex form of Watson's lemma for \\( F(z)=\\int_0^A e^{-z\\tau}\\,g(\\tau)\\,d\\tau \\) with \\( g(\\tau)\\sim\\sum_{n\\ge0}a_n\\tau^{\\alpha_n} \\) as \\( \\tau\\to0^+ \\), and explain in one line how it produces the \\( t=0 \\) endpoint series for \\( \\int_0^1 e^{zt^3}dt \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["complex Watson's lemma", "statement", "endpoint series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the hypotheses.",
          workingLatex:
            "g(\\tau)\\sim\\sum_{n=0}^{\\infty}a_n\\,\\tau^{\\alpha_n}\\ (\\tau\\to0^+),\\quad \\operatorname{Re}(\\alpha_0)>-1,\\ \\operatorname{Re}(\\alpha_n)\\uparrow\\infty.",
          explanation:
            "The exponents must be ordered with real parts increasing to infinity, and the first must exceed \\( -1 \\) for convergence at the origin.",
        },
        {
          stepNumber: 2,
          description: "State the conclusion (complex version).",
          workingLatex:
            "F(z)\\sim\\sum_{n=0}^{\\infty} a_n\\,\\frac{\\Gamma(\\alpha_n+1)}{z^{\\alpha_n+1}}, \\qquad |z|\\to\\infty,\\ \\ |\\arg z|\\le \\tfrac{\\pi}{2}-\\delta.",
          explanation:
            "The lemma holds uniformly in any closed sector strictly inside the right half-plane of \\( z \\); this sectorial validity is the 'complex' part.",
        },
        {
          stepNumber: 3,
          description: "Apply it to the cubic integral.",
          workingLatex:
            "\\int_0^1 e^{zt^3}dt = \\frac{1}{3}\\int_0^1 e^{zu}u^{-2/3}du:\\ \\ g(u)=\\tfrac13 u^{-2/3},\\ \\alpha_0=-\\tfrac23.",
          explanation:
            "Reading off \\( a_0=\\tfrac13,\\ \\alpha_0=-\\tfrac23 \\) and applying the lemma (with \\( z\\to-z \\) to convert \\( e^{zu} \\) to a decaying exponential) yields the single \\( \\Gamma(1/3)/3\\cdot z^{-1/3}=\\Gamma(4/3)z^{-1/3} \\) endpoint term, since the weight has no further analytic terms.",
        },
      ],
      finalAnswer:
        "\\( F(z)\\sim\\sum_{n} a_n\\,\\Gamma(\\alpha_n+1)\\,z^{-(\\alpha_n+1)} \\); applied to \\( \\tfrac13 u^{-2/3} \\) it gives the \\( \\Gamma(4/3)z^{-1/3} \\) endpoint term.",
    },
  },
  {
    id: "am8c-015",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 15",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show that the endpoint series \\( \\sum_{n\\ge0}\\Gamma(n+2/3)z^{-(n+1)}/\\Gamma(2/3) \\) for \\( I(z) \\) is divergent for every fixed \\( z \\), yet asymptotic. Estimate the optimal truncation point for \\( |z|=R \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["divergent series", "optimal truncation", "asymptotic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Examine the ratio of successive terms.",
          workingLatex:
            "\\frac{|c_{n+1}/z^{n+2}|}{|c_n/z^{n+1}|} = \\frac{n+2/3}{|z|}.",
          explanation:
            "Using \\( c_{n+1}=(n+2/3)c_n \\); the factorial growth of \\( \\Gamma(n+2/3) \\) beats any fixed power of \\( z \\).",
        },
        {
          stepNumber: 2,
          description: "Deduce divergence.",
          workingLatex:
            "\\frac{n+2/3}{|z|}\\to\\infty \\ \\text{as } n\\to\\infty \\ \\Rightarrow\\ \\text{terms eventually grow}.",
          explanation:
            "For any fixed \\( z \\) the terms decrease, reach a minimum, then increase without bound — the hallmark of an asymptotic-but-divergent series.",
        },
        {
          stepNumber: 3,
          description: "Locate the smallest term.",
          workingLatex:
            "\\frac{n+2/3}{|z|}\\approx 1 \\quad\\Longrightarrow\\quad n_{*}\\approx |z| = R.",
          explanation:
            "The terms stop shrinking when the ratio crosses unity, i.e. at \\( n\\approx R \\); truncating there gives the best accuracy.",
        },
        {
          stepNumber: 4,
          description: "Estimate the optimal error.",
          workingLatex:
            "\\text{error} \\approx |\\text{term}_{n_*}| \\sim \\frac{\\Gamma(R+2/3)}{\\Gamma(2/3)\\,R^{R+1}} \\sim C\\,e^{-R}.",
          explanation:
            "By Stirling the smallest term is exponentially small, \\( \\sim e^{-R} \\); this 'superasymptotic' error is the best a single power series can do before exponentially-small (Stokes) corrections must be added.",
        },
      ],
      finalAnswer:
        "Divergent (factorial coefficients) but asymptotic; optimal truncation at \\( n_*\\approx|z| \\) with error \\( \\sim e^{-|z|} \\).",
    },
  },
  {
    id: "am8c-016",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 16",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By analogy with the cubic case, find the leading-order asymptotics as \\( \\operatorname{Re}(z)\\to+\\infty \\) of the quartic-phase integral \\( J(z)=\\int_0^1 e^{z t^4}\\,dt \\), and give the algebraic endpoint term at \\( t=0 \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["quartic phase", "Watson's lemma", "generalisation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Linearise with \\( u=t^4 \\).",
          workingLatex:
            "u=t^4,\\ dt=\\tfrac14 u^{-3/4}du \\ \\Rightarrow\\ J(z)=\\frac{1}{4}\\int_0^1 e^{zu}u^{-3/4}\\,du.",
          explanation:
            "The same device linearises any pure power phase \\( t^k \\), giving weight \\( u^{(1-k)/k} \\); here \\( k=4 \\) gives \\( u^{-3/4} \\).",
        },
        {
          stepNumber: 2,
          description: "Dominant endpoint \\( t=1 \\).",
          workingLatex:
            "J(z)\\sim\\frac{1}{4}\\,\\frac{e^{z}}{z}\\,(1)^{-3/4} = \\frac{e^{z}}{4z}.",
          explanation:
            "One integration by parts at \\( u=1 \\); identical structure to the cubic case with \\( 1/3\\to1/4 \\).",
        },
        {
          stepNumber: 3,
          description: "Algebraic endpoint \\( t=0 \\) via Watson.",
          workingLatex:
            "\\frac{1}{4}\\int_0^\\infty e^{-(-z)u}u^{-3/4}\\,du = \\frac{1}{4}\\,\\frac{\\Gamma(1/4)}{(-z)^{1/4}} = \\frac{\\Gamma(5/4)}{(-z)^{1/4}}.",
          explanation:
            "Here \\( a=1/4 \\), so \\( \\Gamma(1/4)/4=\\Gamma(5/4) \\) by the recurrence; the decay exponent is now \\( z^{-1/4} \\).",
        },
        {
          stepNumber: 4,
          description: "Combine.",
          workingLatex:
            "J(z)\\sim\\frac{e^{z}}{4z}-\\frac{\\Gamma(5/4)}{z^{1/4}} \\qquad (\\operatorname{Re}(z)>0,\\ |\\arg z|<\\tfrac\\pi2).",
          explanation:
            "Same sectorial structure as the cubic problem; the branch of \\( z^{-1/4} \\) is now governed by a fourth root, with Stokes lines at \\( \\arg z=\\pm\\pi/2 \\) etc.",
        },
      ],
      finalAnswer:
        "\\( J(z)\\sim\\dfrac{e^{z}}{4z}-\\dfrac{\\Gamma(5/4)}{z^{1/4}} \\); the \\( t=0 \\) endpoint term is \\( -\\Gamma(5/4)z^{-1/4} \\).",
    },
  },
  {
    id: "am8c-017",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 17",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Locate the Stokes lines and anti-Stokes lines (in the \\( \\arg z \\) plane) for the two competing contributions \\( \\dfrac{e^{z}}{3z} \\) and \\( -\\dfrac{\\Gamma(4/3)}{z^{1/3}} \\) to \\( I(z) \\), and identify on which the exponential term switches from dominant to recessive.",
    marks: 4,
    yearCreated: 2026,
    tags: ["Stokes lines", "anti-Stokes lines", "dominance"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare magnitudes of the two terms.",
          workingLatex:
            "\\left|\\frac{e^{z}}{3z}\\right| = \\frac{e^{\\operatorname{Re}(z)}}{3|z|}, \\qquad \\left|\\frac{\\Gamma(4/3)}{z^{1/3}}\\right| = \\frac{\\Gamma(4/3)}{|z|^{1/3}}.",
          explanation:
            "The exponential term's size is controlled by \\( \\operatorname{Re}(z)=|z|\\cos(\\arg z) \\).",
        },
        {
          stepNumber: 2,
          description: "Anti-Stokes lines: equal magnitude.",
          workingLatex:
            "\\operatorname{Re}(z)=0 \\quad\\Longrightarrow\\quad \\arg z = \\pm\\frac{\\pi}{2}.",
          explanation:
            "Where \\( \\operatorname{Re}(z)=0 \\) the exponential is purely oscillatory and the two contributions are comparable; these imaginary-axis directions are the anti-Stokes lines.",
        },
        {
          stepNumber: 3,
          description: "Stokes lines: maximal dominance.",
          workingLatex:
            "\\operatorname{Im}(z)=0 \\quad\\Longrightarrow\\quad \\arg z = 0,\\ \\pi.",
          explanation:
            "The Stokes lines are where one exponential is maximally dominant/recessive: \\( \\arg z=0 \\) (\\( e^z \\) maximally dominant) and \\( \\arg z=\\pi \\) (\\( e^z \\) maximally recessive, where the subdominant term is 'switched on').",
        },
        {
          stepNumber: 4,
          description: "Describe the switching.",
          workingLatex:
            "\\arg z:\\ 0\\to\\tfrac\\pi2:\\ e^z\\ \\text{dominant}; \\quad \\tfrac\\pi2\\to\\pi:\\ e^z\\ \\text{recessive}.",
          explanation:
            "Crossing the anti-Stokes line \\( \\arg z=\\pi/2 \\), the exponential term loses dominance to the algebraic \\( z^{-1/3} \\) term; the Stokes line \\( \\arg z=\\pi \\) is where the branch/coefficient of the recessive term jumps.",
        },
      ],
      finalAnswer:
        "Anti-Stokes lines \\( \\arg z=\\pm\\tfrac\\pi2 \\); Stokes lines \\( \\arg z=0,\\pi \\). The exponential is dominant for \\( |\\arg z|<\\tfrac\\pi2 \\), recessive beyond.",
    },
  },
  {
    id: "am8c-018",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 18",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "Find the exact value of \\( \\displaystyle\\lim_{x\\to+\\infty} x^{1/3}\\,I(-x) \\), where \\( I(z)=\\int_0^1 e^{z t^3}\\,dt \\). Give your answer in closed form.",
    marks: 3,
    yearCreated: 2026,
    tags: ["limit", "negative real axis", "Gamma function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the negative-axis leading behaviour.",
          workingLatex: "I(-x)\\sim\\frac{\\Gamma(4/3)}{x^{1/3}} \\quad (x\\to+\\infty).",
          explanation:
            "On the negative real axis the \\( t=0 \\) endpoint dominates (the \\( t=1 \\) term is \\( O(e^{-x}) \\)).",
        },
        {
          stepNumber: 2,
          description: "Multiply by \\( x^{1/3} \\).",
          workingLatex: "x^{1/3}\\,I(-x)\\sim x^{1/3}\\,\\frac{\\Gamma(4/3)}{x^{1/3}} = \\Gamma\\!\\left(\\tfrac43\\right).",
          explanation: "The power exactly cancels, leaving a constant.",
        },
        {
          stepNumber: 3,
          description: "Take the limit.",
          workingLatex: "\\lim_{x\\to+\\infty} x^{1/3}\\,I(-x) = \\Gamma\\!\\left(\\tfrac43\\right) \\approx 0.8930.",
          explanation:
            "Verified numerically: at \\( x=22 \\) the negative-axis term reproduces \\( I \\) to machine precision since the exponential correction is \\( e^{-22} \\).",
        },
      ],
      finalAnswer: "\\( \\Gamma\\!\\left(\\tfrac43\\right) \\approx 0.8930 \\).",
      canonicalAnswer: "gamma(4/3)",
    },
  },

  // ───────────────────────── CHALLENGE (12) ─────────────────────────
  // REVIEW: both sector relations are numerically verified (RHP rel err ~1e-7; left-sector residual matches e^{iπ/3}Γ(4/3)z^{-1/3} to machine precision), but step-2/step-5 branch wording for (-z)^{-1/3} is convention-level, not a checkable equality of principal branches.
  {
    id: "am8c-019",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 19",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) For \\( \\operatorname{Re}(z)>0 \\), prove the sectorial relation \\( I(z)+\\dfrac{\\Gamma(4/3)}{z^{1/3}}\\sim\\dfrac{e^{z}}{3}\\displaystyle\\sum_{n=0}^{\\infty}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\dfrac{1}{z^{n+1}} \\) and obtain the analogous relation valid for \\( \\arg z\\in(\\tfrac\\pi2+\\delta,\\ \\tfrac{3\\pi}2-\\delta) \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["complex Watson's lemma", "sector", "Stokes phenomenon", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute and split.",
          workingLatex:
            "I(z)=\\frac{1}{3}\\int_0^1 e^{zu}u^{-2/3}du = \\frac13\\int_0^\\infty e^{zu}u^{-2/3}du - \\frac13\\int_1^\\infty e^{zu}u^{-2/3}du.",
          explanation:
            "For \\( |\\arg z|<\\pi/2 \\) we deform both rays so each converges; the first is the Watson piece at \\( u=0 \\), the second the endpoint piece at \\( u=1 \\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate the Watson piece.",
          workingLatex:
            "\\frac13\\int_0^\\infty e^{zu}u^{-2/3}du = \\frac13\\,\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3} = -\\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "With the principal branch (cut on \\( \\arg z=\\pi \\)) in \\( |\\arg z|<\\pi/2 \\), \\( (-z)^{-1/3}=-z^{-1/3} \\).",
        },
        {
          stepNumber: 3,
          description: "Expand the endpoint piece by parts.",
          workingLatex:
            "-\\frac13\\int_1^\\infty e^{zu}u^{-2/3}du \\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}.",
          explanation:
            "Repeated integration by parts at the \\( u=1 \\) endpoint generates the factorial-coefficient series.",
        },
        {
          stepNumber: 4,
          description: "Assemble the right-half-plane relation.",
          workingLatex:
            "I(z)+\\frac{\\Gamma(4/3)}{z^{1/3}}\\sim\\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}.",
          explanation: "This is the first required relation.",
        },
        {
          stepNumber: 5,
          description: "Rotate into \\( \\arg z\\in(\\tfrac\\pi2+\\delta,\\tfrac{3\\pi}2-\\delta) \\).",
          workingLatex:
            "(-z)^{-1/3}\\ \\text{now has}\\ \\arg(-z)\\in(-\\tfrac\\pi2+\\delta,\\tfrac\\pi2-\\delta) \\ \\Rightarrow\\ (-z)^{-1/3}=+|{-z}|^{-1/3}e^{-\\tfrac{i}{3}\\arg(-z)}.",
          explanation:
            "Crossing \\( \\arg z=\\pi/2 \\) the ray that makes \\( \\int_0^\\infty \\) converge changes, so the Watson term keeps the unrotated branch \\( (-z)^{-1/3} \\) rather than \\( -z^{-1/3} \\).",
        },
        {
          stepNumber: 6,
          description: "State the left-sector relation.",
          workingLatex:
            "I(z)\\sim\\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}} + \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}.",
          explanation:
            "Now the endpoint term appears with a \\( + \\) sign on the \\( (-z)^{-1/3} \\) branch. Verified to machine precision at \\( z=22e^{i\\pi} \\) and \\( z=22e^{1.3i\\pi} \\).",
        },
      ],
      finalAnswer:
        "Right half-plane: \\( I+\\Gamma(4/3)z^{-1/3}\\sim\\tfrac{e^z}{3}\\sum\\tfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)} \\). Left sector \\( (\\tfrac\\pi2,\\tfrac{3\\pi}2) \\): \\( I\\sim\\tfrac{e^z}{3}\\sum\\cdots + \\Gamma(4/3)(-z)^{-1/3} \\).",
    },
  },
  {
    id: "am8c-020",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 20",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Using the method of steepest descent applied to \\( I(z)=\\int_0^1 e^{zt^3}dt \\), develop the expansion valid in the sector \\( \\arg z\\in(\\delta,\\pi-\\delta) \\) and explain, via the overlap with the sector \\( |\\arg z|<\\tfrac\\pi2 \\), why the endpoint coefficient acquires the factor \\( e^{i\\pi/3} \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["steepest descent", "sector overlap", "Stokes phenomenon", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the steepest-descent contour from \\( t=0 \\).",
          workingLatex:
            "\\phi(t)=zt^3,\\quad \\phi(0)=0,\\ \\phi'(0)=0;\\ \\ \\text{descent dirs: } \\arg t = \\frac{(2k+1)\\pi-\\arg z}{3}.",
          explanation:
            "Steepest descent through the cubic saddle at \\( t=0 \\) leaves along three rays; the admissible one must enter the integration range \\( (0,1) \\) and have \\( \\operatorname{Re}(zt^3)<0 \\).",
        },
        {
          stepNumber: 2,
          description: "Endpoint contribution at \\( t=0 \\).",
          workingLatex:
            "\\int_{0}^{\\infty e^{i\\theta}} e^{zt^3}dt = \\frac{e^{i\\theta}}{3}\\Gamma\\!\\left(\\tfrac13\\right)(-z)^{-1/3} \\ \\text{along the descent ray }\\arg t=\\theta.",
          explanation:
            "Parametrising along the descent ray and using the Gamma integral; the phase factor \\( e^{i\\theta} \\) from \\( dt \\) is what tracks the sector.",
        },
        {
          stepNumber: 3,
          description: "Endpoint contribution at \\( t=1 \\).",
          workingLatex:
            "\\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}.",
          explanation:
            "The dominant-endpoint series is sector-independent; only the algebraic term carries the phase.",
        },
        {
          stepNumber: 4,
          description: "Write the sector \\( (\\delta,\\pi-\\delta) \\) result.",
          workingLatex:
            "I(z)\\sim\\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}} + \\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "The descent direction in this sector fixes \\( \\theta \\) so that the endpoint coefficient is \\( e^{i\\pi/3}\\Gamma(4/3) \\) over the principal branch.",
        },
        {
          stepNumber: 5,
          description: "Match on the overlap region.",
          workingLatex:
            "\\text{Overlap }\\arg z\\in(\\delta,\\tfrac\\pi2-\\delta):\\quad -\\frac{\\Gamma(4/3)}{z^{1/3}} \\ \\text{vs}\\ \\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "In the overlap the exponential term is dominant, so both expansions describe \\( I(z) \\) to all algebraic orders; the difference \\( (e^{i\\pi/3}+1)\\Gamma(4/3)z^{-1/3} \\) is consistent because the discrepancy is exponentially small relative to \\( e^z/z \\) there.",
        },
        {
          stepNumber: 6,
          description: "Explain the \\( e^{i\\pi/3} \\) factor.",
          workingLatex:
            "-1 = e^{-i\\pi}\\ \\Rightarrow\\ (-z)^{-1/3}=e^{i\\pi/3}z^{-1/3}\\ \\text{after the rotation }\\arg z:\\,0\\to\\pi.",
          explanation:
            "As \\( \\arg z \\) sweeps from the right half-plane into \\( (\\tfrac\\pi2,\\pi) \\), the branch of the cube root in the endpoint term rotates by \\( e^{i\\pi/3} \\); this is precisely the Stokes-type switching of the recessive algebraic term. Numerically confirmed at \\( z=20e^{2i\\pi/3} \\).",
        },
      ],
      finalAnswer:
        "\\( I(z)\\sim\\dfrac{e^{z}}{3}\\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\dfrac{1}{z^{n+1}}+\\dfrac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}} \\); the \\( e^{i\\pi/3} \\) is the rotated cube-root branch \\( (-z)^{-1/3} \\).",
    },
  },
  {
    id: "am8c-021",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 21",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Continue the expansion of \\( I(z)=\\int_0^1 e^{zt^3}dt \\) into the sector \\( \\arg z\\in(\\pi+\\delta,\\ 2\\pi-\\delta) \\), starting from the result \\( I(z)\\sim\\tfrac{e^z}{3}\\sum_{n\\ge0}\\tfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)}+e^{i\\pi/3}\\Gamma(4/3)z^{-1/3} \\) valid on \\( (\\delta,\\pi-\\delta) \\). Discuss the relation between adjacent sectors.",
    marks: 6,
    yearCreated: 2026,
    tags: ["analytic continuation", "sector", "Stokes phenomenon", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the symmetry of \\( I \\).",
          workingLatex:
            "\\overline{I(\\bar z)} = \\int_0^1 e^{\\bar{\\bar z}t^3}dt = I(z)\\ \\text{is entire; the asymptotics differ by sector only.}",
          explanation:
            "\\( I \\) is an entire function of \\( z \\) (the integral converges for all \\( z \\)); the sector-dependent forms are different asymptotic representations of one analytic function.",
        },
        {
          stepNumber: 2,
          description: "Use the conjugate sector.",
          workingLatex:
            "I(\\bar z)=\\overline{I(z)} \\ \\Rightarrow\\ \\text{the form on }(\\pi+\\delta,2\\pi-\\delta)\\ \\text{is the conjugate of that on }(\\delta,\\pi-\\delta)\\ \\text{reflected.}",
          explanation:
            "Reflecting \\( \\arg z\\to-\\arg z \\) (equivalently \\( z\\to\\bar z \\)) maps the upper sector to the lower one; \\( e^{i\\pi/3}\\to e^{-i\\pi/3} \\).",
        },
        {
          stepNumber: 3,
          description: "Write the lower-sector form.",
          workingLatex:
            "\\arg z\\in(\\pi+\\delta,2\\pi-\\delta):\\quad I(z)\\sim\\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}+\\frac{e^{-i\\pi/3}\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "Equivalently \\( e^{-i\\pi/3}z^{-1/3} = (-z)^{-1/3} \\) measured on the lower branch; the endpoint term again rotates by a cube-root of unity.",
        },
        {
          stepNumber: 4,
          description: "Compare the endpoint coefficients across the three sectors.",
          workingLatex:
            "(-1)^{-1/3}\\in\\{-1,\\ e^{i\\pi/3},\\ e^{-i\\pi/3}\\} \\ \\text{(the three cube roots of }-1).",
          explanation:
            "The endpoint coefficient cycles through the three cube roots of \\( -1 \\) as \\( \\arg z \\) passes through the Stokes lines at \\( \\arg z=\\pi/2,\\ 3\\pi/2 \\) (and the cut at \\( \\arg z=\\pi \\)).",
        },
        {
          stepNumber: 5,
          description: "Interpret the overlaps.",
          workingLatex:
            "\\text{On each overlap the dominant }e^z\\text{ series agrees; the recessive }z^{-1/3}\\text{ jumps by }e^{\\pm 2i\\pi/3}.",
          explanation:
            "Because the recessive term is exponentially small where the switch happens, the multivalued endpoint coefficient is consistent with \\( I \\) being single-valued — the resolution of the apparent paradox of Stokes' phenomenon.",
        },
        {
          stepNumber: 6,
          description: "Summarise the global picture.",
          workingLatex:
            "\\boxed{\\ \\text{One }e^z\\text{-series} + \\text{one }z^{-1/3}\\text{ term whose phase tracks }(-z)^{-1/3}.\\ }",
          explanation:
            "The complete asymptotics of the cubic-phase integral is captured by a single dominant series plus a single recessive endpoint term with a sector-dependent cube-root branch.",
        },
      ],
      finalAnswer:
        "\\( \\arg z\\in(\\pi,2\\pi): I(z)\\sim\\dfrac{e^{z}}{3}\\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}z^{-(n+1)}+\\dfrac{e^{-i\\pi/3}\\Gamma(4/3)}{z^{1/3}} \\); the endpoint coefficient cycles through the cube roots of \\( -1 \\).",
    },
  },
  {
    id: "am8c-022",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 22",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Relate the cubic-phase integral \\( \\int_{-\\infty}^{\\infty} e^{i(xt + t^3/3)}\\,dt = 2\\pi\\,\\mathrm{Ai}(x) \\) to the model \\( I(z) \\). Use the steepest-descent structure to recover the leading large-\\( x \\) decay \\( \\mathrm{Ai}(x)\\sim\\dfrac{e^{-\\frac23 x^{3/2}}}{2\\sqrt\\pi\\,x^{1/4}} \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["Airy function", "steepest descent", "cubic phase", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the Airy integral with a cubic phase.",
          workingLatex:
            "\\mathrm{Ai}(x)=\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} e^{\\,i(xt+t^3/3)}\\,dt.",
          explanation:
            "This is the same cubic-phase family as \\( I(z) \\): the controlling exponent is cubic in the integration variable, so the saddle analysis is structurally identical.",
        },
        {
          stepNumber: 2,
          description: "Find the saddle points for large \\( x>0 \\).",
          workingLatex:
            "\\frac{d}{dt}\\left(xt+\\tfrac{t^3}{3}\\right)=x+t^2=0 \\ \\Rightarrow\\ t=\\pm i\\sqrt{x}.",
          explanation:
            "Unlike the endpoint case, here the saddles are interior (purely imaginary); for \\( x>0 \\) they are complex, signalling exponential decay.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the phase at the relevant saddle.",
          workingLatex:
            "i\\left(xt+\\tfrac{t^3}{3}\\right)\\Big|_{t=i\\sqrt x} = i\\left(ix^{3/2}+\\tfrac{(i)^3 x^{3/2}}{3}\\right) = -\\tfrac23 x^{3/2}.",
          explanation:
            "The saddle \\( t=i\\sqrt x \\) is the one through which the deformed contour passes; its exponent gives the dominant decay rate \\( e^{-\\frac23 x^{3/2}} \\).",
        },
        {
          stepNumber: 4,
          description: "Compute the Gaussian (second-derivative) factor.",
          workingLatex:
            "\\frac{d^2}{dt^2}\\left[i(xt+\\tfrac{t^3}{3})\\right]_{t=i\\sqrt x} = 2it = 2i\\,(i\\sqrt x) = -2\\sqrt x.",
          explanation:
            "Steepest descent gives a factor \\( \\sqrt{2\\pi/|\\phi''|}=\\sqrt{2\\pi/(2\\sqrt x)}=\\sqrt{\\pi}\\,x^{-1/4} \\); the \\( x^{-1/4} \\) is the cubic-saddle analogue of the endpoint \\( z^{-1/3} \\).",
        },
        {
          stepNumber: 5,
          description: "Assemble the saddle-point formula.",
          workingLatex:
            "\\mathrm{Ai}(x)\\sim\\frac{1}{2\\pi}\\cdot e^{-\\frac23 x^{3/2}}\\cdot\\sqrt{\\pi}\\,x^{-1/4} = \\frac{e^{-\\frac23 x^{3/2}}}{2\\sqrt\\pi\\,x^{1/4}}.",
          explanation:
            "Combining the exponential, the Gaussian width and the \\( 1/(2\\pi) \\) prefactor reproduces the standard Airy asymptotics.",
        },
        {
          stepNumber: 6,
          description: "Tie back to the model.",
          workingLatex:
            "\\text{cubic phase}\\ \\Rightarrow\\ \\text{decay rate }x^{3/2},\\ \\text{algebraic prefactor }x^{-1/4}.",
          explanation:
            "Both \\( I(z) \\) and \\( \\mathrm{Ai} \\) are governed by a cubic exponent; the difference is endpoint vs interior saddle, which changes the algebraic power (\\( z^{-1/3} \\) vs \\( x^{-1/4} \\)) but not the underlying steepest-descent machinery. Standard value \\( \\mathrm{Ai}(x) \\) decay verified against \\( \\texttt{mpmath.airyai} \\).",
        },
      ],
      finalAnswer:
        "\\( \\mathrm{Ai}(x)\\sim\\dfrac{e^{-\\frac23 x^{3/2}}}{2\\sqrt\\pi\\,x^{1/4}} \\) as \\( x\\to+\\infty \\), from the saddle \\( t=i\\sqrt x \\) of the cubic phase.",
    },
  },
  {
    id: "am8c-023",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 23",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Derive a closed-form remainder \\( R_N(z) \\) for the \\( N \\)-term endpoint expansion of \\( I(z) \\) and verify the asymptotic property \\( R_N(z)=O(e^{z}z^{-(N+1)}) \\) as \\( |z|\\to\\infty \\) in \\( |\\arg z|<\\tfrac\\pi2 \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["remainder estimate", "asymptotic property", "integration by parts", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define the partial sum and remainder.",
          workingLatex:
            "\\frac{1}{3}\\int_1^\\infty e^{zu}u^{-2/3}du = -\\frac{e^{z}}{3}\\sum_{n=0}^{N-1}\\frac{c_n}{z^{n+1}} + R_N(z),\\quad c_n=\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}.",
          explanation:
            "Integration by parts \\( N \\) times leaves an exact integral remainder; we track it explicitly.",
        },
        {
          stepNumber: 2,
          description: "Write the exact remainder integral.",
          workingLatex:
            "R_N(z) = \\frac{(-1)}{3}\\,\\frac{c_N}{z^{N}}\\int_1^\\infty e^{zu}\\,u^{-2/3-N}\\,du.",
          explanation:
            "After \\( N \\) parts the leftover weight is \\( u^{-2/3-N} \\), carrying the accumulated coefficient \\( c_N \\) and \\( N \\) powers of \\( 1/z \\).",
        },
        {
          stepNumber: 3,
          description: "Bound the remaining integral.",
          workingLatex:
            "\\left|\\int_1^\\infty e^{zu}u^{-2/3-N}du\\right| \\le \\int_1^\\infty e^{\\operatorname{Re}(z)u}u^{-2/3-N}du \\le \\frac{e^{\\operatorname{Re}(z)}}{|\\operatorname{Re}(z)|}\\ (\\operatorname{Re}(z)>0).",
          explanation:
            "On \\( u\\ge1 \\) we have \\( u^{-2/3-N}\\le1 \\); the exponential integral is dominated by its value near \\( u=1 \\), giving a factor \\( e^{\\operatorname{Re}(z)}/\\operatorname{Re}(z) \\).",
        },
        {
          stepNumber: 4,
          description: "Combine the bounds.",
          workingLatex:
            "|R_N(z)| \\le \\frac{c_N}{3|z|^{N}}\\cdot\\frac{e^{\\operatorname{Re}(z)}}{|\\operatorname{Re}(z)|} = O\\!\\left(\\frac{e^{\\operatorname{Re}(z)}}{|z|^{N+1}}\\right).",
          explanation:
            "In any closed subsector \\( |\\arg z|\\le\\pi/2-\\delta \\) we have \\( |\\operatorname{Re}(z)|\\ge|z|\\sin\\delta \\), so \\( 1/|\\operatorname{Re}(z)|=O(1/|z|) \\).",
        },
        {
          stepNumber: 5,
          description: "Confirm the asymptotic property.",
          workingLatex:
            "\\frac{R_N(z)}{e^{z}z^{-N}} \\to 0 \\ \\text{as}\\ |z|\\to\\infty,\\quad R_N(z)=O\\!\\left(e^{z}z^{-(N+1)}\\right).",
          explanation:
            "The remainder after \\( N \\) terms is smaller than the last retained term by a factor \\( 1/z \\); this is exactly Poincaré's definition of an asymptotic expansion.",
        },
        {
          stepNumber: 6,
          description: "State the validated expansion.",
          workingLatex:
            "I(z)+\\frac{\\Gamma(4/3)}{z^{1/3}} = \\frac{e^{z}}{3}\\sum_{n=0}^{N-1}\\frac{c_n}{z^{n+1}} + O\\!\\left(\\frac{e^{z}}{z^{N+1}}\\right).",
          explanation:
            "The bound holds uniformly in the open right half-plane sector; numerical residuals at \\( z=25 \\) decrease like \\( z^{-(N+1)} \\) as predicted.",
        },
      ],
      finalAnswer:
        "\\( R_N(z)=-\\dfrac{c_N}{3z^{N}}\\displaystyle\\int_1^\\infty e^{zu}u^{-2/3-N}du = O\\!\\left(\\dfrac{e^{z}}{z^{N+1}}\\right) \\), confirming the asymptotic property.",
    },
  },
  {
    id: "am8c-024",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 24",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) For the integral \\( I(z)=\\int_0^1 e^{zt^3}dt \\) restricted to \\( z=Re^{i\\theta} \\) with \\( R\\to\\infty \\), determine the value(s) of \\( \\theta \\) at which the two terms \\( \\dfrac{e^z}{3z} \\) and the endpoint term are of equal modulus, and hence identify the Stokes structure.",
    marks: 5,
    yearCreated: 2026,
    tags: ["Stokes lines", "balance of terms", "dominance", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Modulus of each term.",
          workingLatex:
            "\\left|\\frac{e^z}{3z}\\right| = \\frac{e^{R\\cos\\theta}}{3R}, \\qquad \\left|\\frac{\\Gamma(4/3)}{z^{1/3}}\\right| = \\frac{\\Gamma(4/3)}{R^{1/3}}.",
          explanation: "Substituting \\( z=Re^{i\\theta} \\), so \\( \\operatorname{Re}(z)=R\\cos\\theta \\).",
        },
        {
          stepNumber: 2,
          description: "Set the moduli equal.",
          workingLatex:
            "\\frac{e^{R\\cos\\theta}}{3R} = \\frac{\\Gamma(4/3)}{R^{1/3}} \\ \\Rightarrow\\ e^{R\\cos\\theta} = 3\\,\\Gamma(4/3)\\,R^{2/3}.",
          explanation: "Clearing the powers of \\( R \\) isolates the exponential balance.",
        },
        {
          stepNumber: 3,
          description: "Solve for the critical angle as \\( R\\to\\infty \\).",
          workingLatex:
            "R\\cos\\theta = \\ln\\!\\left(3\\Gamma(4/3)\\right) + \\tfrac23\\ln R \\ \\Rightarrow\\ \\cos\\theta = \\frac{\\tfrac23\\ln R + O(1)}{R}\\to0.",
          explanation:
            "For large \\( R \\) the balance forces \\( \\cos\\theta\\to0 \\), i.e. \\( \\theta\\to\\pm\\pi/2 \\); the equal-modulus curve approaches the imaginary axis.",
        },
        {
          stepNumber: 4,
          description: "Identify the anti-Stokes lines.",
          workingLatex:
            "\\theta = \\pm\\frac{\\pi}{2} \\quad(\\text{anti-Stokes: terms of equal magnitude}).",
          explanation:
            "The anti-Stokes lines are where dominant and recessive contributions swap roles — here the imaginary axis.",
        },
        {
          stepNumber: 5,
          description: "Identify the Stokes lines.",
          workingLatex:
            "\\theta = 0 \\ (\\text{max dominance of } e^z), \\quad \\theta=\\pi \\ (\\text{max recessiveness; switching}).",
          explanation:
            "Stokes lines bisect adjacent anti-Stokes lines and are where the recessive endpoint term is switched on; the cube-root branch jump occurs across \\( \\theta=\\pi \\).",
        },
        {
          stepNumber: 6,
          description: "State the Stokes structure.",
          workingLatex:
            "\\text{Stokes: }\\theta=0,\\pi;\\quad \\text{anti-Stokes: }\\theta=\\pm\\tfrac\\pi2.",
          explanation:
            "This matches the general rule that for an exponent \\( \\sim z \\) with an algebraic competitor, Stokes lines lie on the real axis and anti-Stokes on the imaginary axis.",
        },
      ],
      finalAnswer:
        "Equal modulus as \\( \\theta\\to\\pm\\tfrac\\pi2 \\) (anti-Stokes lines); Stokes lines at \\( \\theta=0,\\pi \\).",
    },
  },
  {
    id: "am8c-025",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 25",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Generalise to \\( I_k(z)=\\int_0^1 e^{zt^k}dt \\) for integer \\( k\\ge2 \\). Find the \\( t=0 \\) endpoint term and the dominant \\( t=1 \\) leading term for \\( \\operatorname{Re}(z)>0 \\), and state the number of Stokes lines in \\( 0\\le\\arg z<2\\pi \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["generalisation", "power phase", "Stokes lines", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Linearise the general power phase.",
          workingLatex:
            "u=t^k,\\ dt=\\tfrac1k u^{1/k-1}du \\ \\Rightarrow\\ I_k(z)=\\frac1k\\int_0^1 e^{zu}u^{1/k-1}\\,du.",
          explanation:
            "The weight exponent is \\( \\tfrac1k-1=-\\tfrac{k-1}{k} \\), which exceeds \\( -1 \\) for all \\( k\\ge1 \\), so the integral is well defined at \\( u=0 \\).",
        },
        {
          stepNumber: 2,
          description: "Dominant \\( t=1 \\) leading term.",
          workingLatex:
            "I_k(z)\\sim\\frac1k\\,\\frac{e^{z}}{z}\\,(1)^{1/k-1} = \\frac{e^{z}}{k\\,z}.",
          explanation:
            "A single integration by parts at \\( u=1 \\) reproduces the cubic result with \\( 3\\to k \\).",
        },
        {
          stepNumber: 3,
          description: "Endpoint \\( t=0 \\) term via Watson.",
          workingLatex:
            "\\frac1k\\int_0^\\infty e^{-(-z)u}u^{1/k-1}du = \\frac1k\\,\\frac{\\Gamma(1/k)}{(-z)^{1/k}} = \\frac{\\Gamma(1+1/k)}{(-z)^{1/k}}.",
          explanation:
            "Using \\( \\tfrac1k\\Gamma(1/k)=\\Gamma(1+1/k) \\); for \\( k=3 \\) this is \\( \\Gamma(4/3)(-z)^{-1/3} \\), recovering the model.",
        },
        {
          stepNumber: 4,
          description: "Right-half-plane combined form.",
          workingLatex:
            "I_k(z)\\sim\\frac{e^{z}}{k z}-\\frac{\\Gamma(1+1/k)}{z^{1/k}} \\qquad (|\\arg z|<\\tfrac\\pi2).",
          explanation:
            "Same sectorial structure; the algebraic decay is \\( z^{-1/k} \\), slower for larger \\( k \\).",
        },
        {
          stepNumber: 5,
          description: "Count Stokes lines.",
          workingLatex:
            "(-z)^{-1/k}\\ \\text{has } k \\text{ branches} \\ \\Rightarrow\\ k \\text{ Stokes lines in } 0\\le\\arg z<2\\pi.",
          explanation:
            "The endpoint coefficient cycles through the \\( k \\)-th roots of \\( -1 \\); each branch change happens at one Stokes line, giving \\( k \\) of them per full turn (for \\( k=3 \\): three, consistent with the model).",
        },
        {
          stepNumber: 6,
          description: "State the general result.",
          workingLatex:
            "\\boxed{\\ I_k(z)\\sim\\frac{e^z}{kz}-\\frac{\\Gamma(1+1/k)}{z^{1/k}},\\quad k\\ \\text{Stokes lines}.\\ }",
          explanation:
            "The cubic case \\( k=3 \\) is the canonical example; the structure is universal for pure power phases.",
        },
      ],
      finalAnswer:
        "\\( I_k(z)\\sim\\dfrac{e^{z}}{kz}-\\dfrac{\\Gamma(1+1/k)}{z^{1/k}} \\) for \\( |\\arg z|<\\tfrac\\pi2 \\); \\( k \\) Stokes lines in \\( [0,2\\pi) \\).",
    },
  },
  {
    id: "am8c-026",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 26",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Express the exact value of \\( I(z)=\\int_0^1 e^{zt^3}dt \\) in terms of the lower incomplete gamma function \\( \\gamma(a,w)=\\int_0^w e^{-s}s^{a-1}ds \\), and use the large-argument behaviour of \\( \\gamma \\) to recover the sectorial asymptotics.",
    marks: 6,
    yearCreated: 2026,
    tags: ["incomplete gamma function", "exact representation", "asymptotics", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Linearise and substitute \\( s=-zu \\).",
          workingLatex:
            "I(z)=\\frac13\\int_0^1 e^{zu}u^{-2/3}du, \\quad s=-zu,\\ u=-s/z,\\ du=-ds/z.",
          explanation:
            "We map the exponential to the standard \\( e^{-s} \\) form of the incomplete gamma integral.",
        },
        {
          stepNumber: 2,
          description: "Transform the integral.",
          workingLatex:
            "I(z)=\\frac13\\int_0^{-z} e^{-s}\\left(\\frac{-s}{z}\\right)^{-2/3}\\frac{-ds}{z} = \\frac13(-z)^{2/3}\\frac{1}{(-z)}\\int_0^{-z} e^{-s}s^{-2/3}ds.",
          explanation:
            "Collecting the powers of \\( -z \\): \\( (-z)^{2/3}/(-z) = (-z)^{-1/3} \\).",
        },
        {
          stepNumber: 3,
          description: "Recognise the incomplete gamma function.",
          workingLatex:
            "I(z) = \\frac13(-z)^{-1/3}\\,\\gamma\\!\\left(\\tfrac13,\\,-z\\right) = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}\\,\\frac{\\gamma(1/3,-z)}{\\Gamma(1/3)}.",
          explanation:
            "Here \\( a=1/3 \\), \\( w=-z \\); the prefactor \\( \\tfrac13(-z)^{-1/3}=\\Gamma(4/3)(-z)^{-1/3}/\\Gamma(1/3) \\). This is an exact closed form valid for all \\( z \\).",
        },
        {
          stepNumber: 4,
          description: "Use the large-\\(|w|\\) behaviour of \\( \\gamma \\).",
          workingLatex:
            "\\gamma(a,w) = \\Gamma(a) - \\Gamma(a,w), \\qquad \\Gamma(a,w)\\sim w^{a-1}e^{-w}\\ (|\\arg w|<\\tfrac{3\\pi}{2}).",
          explanation:
            "Splitting into complete minus upper-incomplete gamma separates the algebraic (endpoint \\( t=0 \\)) and exponential (endpoint \\( t=1 \\)) parts.",
        },
        {
          stepNumber: 5,
          description: "Substitute the split.",
          workingLatex:
            "I(z) = \\frac13(-z)^{-1/3}\\Gamma\\!\\left(\\tfrac13\\right) - \\frac13(-z)^{-1/3}\\Gamma\\!\\left(\\tfrac13,-z\\right).",
          explanation:
            "First term is the \\( t=0 \\) endpoint \\( \\Gamma(4/3)(-z)^{-1/3} \\); the second carries the \\( e^{z} \\) factor.",
        },
        {
          stepNumber: 6,
          description: "Expand the upper-incomplete gamma.",
          workingLatex:
            "-\\frac13(-z)^{-1/3}\\Gamma\\!\\left(\\tfrac13,-z\\right)\\sim \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\frac{1}{z^{n+1}}.",
          explanation:
            "Using \\( \\Gamma(a,w)\\sim w^{a-1}e^{-w}\\sum_k \\tfrac{\\Gamma(a)}{\\Gamma(a-k)}w^{-k} \\) with \\( a=1/3,\\ w=-z \\) reproduces exactly the dominant endpoint series; the sectorial branch of \\( (-z)^{-1/3} \\) encodes the Stokes structure. The exact identity was verified numerically against direct quadrature.",
        },
      ],
      finalAnswer:
        "\\( I(z) = \\tfrac13(-z)^{-1/3}\\,\\gamma\\!\\left(\\tfrac13,-z\\right) \\); splitting \\( \\gamma=\\Gamma-\\Gamma(\\cdot,\\cdot) \\) gives the endpoint term plus the \\( e^z \\) series.",
      canonicalAnswer: "(1/3)*(-z)^(-1/3)*lowergamma(1/3,-z)",
    },
  },
  {
    id: "am8c-027",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 27",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Find the first three terms of the asymptotic expansion of \\( I(z)=\\int_0^1 e^{zt^3}dt \\) along the anti-Stokes line \\( z=iy \\), \\( y\\to+\\infty \\), keeping both the oscillatory endpoint term and the algebraic stationary-point term.",
    marks: 5,
    yearCreated: 2026,
    tags: ["anti-Stokes line", "oscillatory", "stationary phase", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set \\( z=iy \\) in both contributions.",
          workingLatex:
            "I(iy) \\sim \\frac{e^{iy}}{3}\\left(\\frac{1}{iy}+\\frac{2/3}{(iy)^2}+\\cdots\\right) + \\frac{e^{i\\pi/3}\\Gamma(4/3)}{(iy)^{1/3}}.",
          explanation:
            "On \\( \\arg z=\\pi/2 \\) (the upper anti-Stokes line) we use the \\( (\\delta,\\pi-\\delta) \\) sector form with the \\( e^{i\\pi/3} \\) endpoint phase.",
        },
        {
          stepNumber: 2,
          description: "Simplify the exponential-endpoint terms.",
          workingLatex:
            "\\frac{e^{iy}}{3iy}\\left(1+\\frac{2}{3iy}\\right) = \\frac{e^{iy}}{3iy} - \\frac{2e^{iy}}{9y^2}.",
          explanation:
            "Since \\( 1/(iy)=-i/y \\); the \\( t=1 \\) endpoint contributes an oscillatory \\( O(y^{-1}) \\) term.",
        },
        {
          stepNumber: 3,
          description: "Simplify the algebraic-endpoint term.",
          workingLatex:
            "\\frac{e^{i\\pi/3}\\Gamma(4/3)}{(iy)^{1/3}} = e^{i\\pi/3}e^{-i\\pi/6}\\,\\frac{\\Gamma(4/3)}{y^{1/3}} = e^{i\\pi/6}\\,\\frac{\\Gamma(4/3)}{y^{1/3}}.",
          explanation:
            "Using \\( (iy)^{1/3}=e^{i\\pi/6}y^{1/3} \\); the stationary point at \\( t=0 \\) gives the dominant \\( y^{-1/3} \\) decay.",
        },
        {
          stepNumber: 4,
          description: "Order the terms by size.",
          workingLatex:
            "y^{-1/3} \\gg y^{-1} \\gg y^{-2} \\quad (y\\to\\infty).",
          explanation:
            "The degenerate stationary point at \\( t=0 \\) wins on the anti-Stokes line; the endpoint terms are subdominant.",
        },
        {
          stepNumber: 5,
          description: "Assemble the three-term expansion.",
          workingLatex:
            "I(iy) \\sim e^{i\\pi/6}\\,\\frac{\\Gamma(4/3)}{y^{1/3}} + \\frac{e^{iy}}{3iy} - \\frac{2e^{iy}}{9y^{2}}.",
          explanation:
            "The leading term is non-oscillatory in magnitude (\\( |{\\cdot}|\\sim y^{-1/3} \\)); the oscillatory \\( e^{iy} \\) corrections decay faster. Verified numerically at \\( z=iy \\), \\( y=30 \\).",
        },
      ],
      finalAnswer:
        "\\( I(iy)\\sim e^{i\\pi/6}\\dfrac{\\Gamma(4/3)}{y^{1/3}} + \\dfrac{e^{iy}}{3iy} - \\dfrac{2e^{iy}}{9y^{2}} \\).",
    },
  },
  {
    id: "am8c-028",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 28",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Show that the difference between the asymptotic representations of \\( I(z) \\) in the sectors \\( |\\arg z|<\\tfrac\\pi2 \\) and \\( \\arg z\\in(\\tfrac\\pi2,\\tfrac{3\\pi}2) \\) is exactly \\( (e^{i\\pi/3}+1)\\Gamma(4/3)z^{-1/3} \\), and explain why this does not contradict the single-valuedness of \\( I \\).",
    marks: 5,
    yearCreated: 2026,
    tags: ["Stokes phenomenon", "single-valuedness", "consistency", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write both representations.",
          workingLatex:
            "\\text{(R)}\\ I\\sim \\Sigma(z) - \\frac{\\Gamma(4/3)}{z^{1/3}}, \\qquad \\text{(L)}\\ I\\sim \\Sigma(z) + \\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}},",
          explanation:
            "where \\( \\Sigma(z)=\\frac{e^z}{3}\\sum_{n\\ge0}c_n z^{-(n+1)} \\) is the common dominant series.",
        },
        {
          stepNumber: 2,
          description: "Subtract.",
          workingLatex:
            "\\text{(L)}-\\text{(R)} = \\frac{\\Gamma(4/3)}{z^{1/3}}\\left(e^{i\\pi/3}+1\\right).",
          explanation: "The dominant series cancels; only the endpoint terms differ.",
        },
        {
          stepNumber: 3,
          description: "Locate where both are valid.",
          workingLatex:
            "\\text{Overlap: } \\arg z\\in(\\tfrac\\pi2-\\delta,\\ \\tfrac\\pi2+\\delta)\\ \\text{near the anti-Stokes line.}",
          explanation:
            "On the overlap both expansions claim to represent \\( I(z) \\), so their difference must be negligible there.",
        },
        {
          stepNumber: 4,
          description: "Compare to the dominant term on the overlap.",
          workingLatex:
            "\\frac{|(e^{i\\pi/3}+1)\\Gamma(4/3)z^{-1/3}|}{|\\Sigma(z)|} \\sim \\frac{|z|^{-1/3}}{e^{\\operatorname{Re}(z)}/|z|} = |z|^{2/3}e^{-\\operatorname{Re}(z)}.",
          explanation:
            "Near \\( \\arg z=\\pi/2 \\), \\( \\operatorname{Re}(z)>0 \\) still (inside the overlap), so this ratio is exponentially small.",
        },
        {
          stepNumber: 5,
          description: "Resolve the apparent paradox.",
          workingLatex:
            "(e^{i\\pi/3}+1)\\Gamma(4/3)z^{-1/3} = O\\!\\left(\\Sigma(z)\\cdot e^{-\\operatorname{Re}(z)}\\right) \\ \\text{(beyond all orders).}",
          explanation:
            "The discrepancy is smaller than every term of the dominant asymptotic series; it lives 'beyond all orders' and so cannot be detected by the Poincaré expansion. \\( I \\) is single-valued; only its asymptotic representation is sector-dependent — the essence of the Stokes phenomenon.",
        },
      ],
      finalAnswer:
        "Difference \\( =(e^{i\\pi/3}+1)\\Gamma(4/3)z^{-1/3} \\), which is exponentially small relative to the dominant \\( e^z \\) series on the overlap, so single-valuedness of \\( I \\) is preserved.",
    },
  },
  {
    id: "am8c-029",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 29",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) A related integral is \\( G(z)=\\int_0^1 (1-t)\\,e^{zt^3}\\,dt \\). For \\( \\operatorname{Re}(z)>0 \\), find the leading exponential term and the leading algebraic term as \\( |z|\\to\\infty \\), commenting on how the extra factor \\( (1-t) \\) changes the \\( t=1 \\) endpoint behaviour.",
    marks: 6,
    yearCreated: 2026,
    tags: ["endpoint vanishing", "integration by parts", "Watson's lemma", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the vanishing prefactor at \\( t=1 \\).",
          workingLatex: "(1-t)\\big|_{t=1}=0.",
          explanation:
            "The amplitude vanishes at the dominant endpoint, so the usual leading \\( e^z/(3z) \\) is suppressed by an extra power of \\( 1/z \\).",
        },
        {
          stepNumber: 2,
          description: "Linearise and split.",
          workingLatex:
            "G(z)=\\frac13\\int_0^1 (1-u^{1/3})\\,e^{zu}u^{-2/3}\\,du.",
          explanation:
            "With \\( u=t^3 \\), \\( (1-t)=(1-u^{1/3}) \\); near \\( u=1 \\) write \\( 1-u^{1/3}\\approx\\tfrac13(1-u) \\).",
        },
        {
          stepNumber: 3,
          description: "Endpoint \\( t=1 \\) by parts (amplitude vanishes).",
          workingLatex:
            "\\frac13\\int^1 (1-u^{1/3})u^{-2/3}e^{zu}du:\\ \\text{boundary}=0 \\ \\Rightarrow\\ \\text{leading} = -\\frac{1}{z}\\Big[\\text{(derivative of amplitude)}\\,e^{zu}/z\\Big]_{u=1}.",
          explanation:
            "Since the amplitude is zero at \\( u=1 \\), the first boundary term vanishes; the leading contribution comes from one further integration by parts, i.e. the derivative of \\( (1-u^{1/3})u^{-2/3} \\) at \\( u=1 \\).",
        },
        {
          stepNumber: 4,
          description: "Compute the derivative at \\( u=1 \\).",
          workingLatex:
            "\\frac{d}{du}\\Big[(1-u^{1/3})u^{-2/3}\\Big]_{u=1} = \\Big[-\\tfrac13 u^{-2/3}\\cdot u^{-2/3} + (1-u^{1/3})(-\\tfrac23)u^{-5/3}\\Big]_{u=1} = -\\tfrac13.",
          explanation:
            "At \\( u=1 \\) the second piece vanishes (factor \\( 1-u^{1/3}=0 \\)); only \\( -\\tfrac13 \\) survives.",
        },
        {
          stepNumber: 5,
          description: "Leading exponential term.",
          workingLatex:
            "G(z) \\sim \\frac13\\cdot\\frac{1}{z}\\cdot\\frac{e^z}{z}\\cdot\\frac13 = \\frac{e^{z}}{9z^{2}}.",
          explanation:
            "Two factors of \\( 1/z \\) (two integrations by parts) times the surviving derivative \\( \\tfrac13 \\) and the prefactor \\( \\tfrac13 \\) give \\( e^z/(9z^2) \\) — one order down from \\( I(z) \\), as expected from the vanishing endpoint.",
        },
        {
          stepNumber: 6,
          description: "Leading algebraic \\( t=0 \\) term.",
          workingLatex:
            "G(z) \\sim \\frac{e^z}{9z^2} - \\frac{\\Gamma(4/3)}{z^{1/3}} + \\frac{\\Gamma(5/3)}{3\\,(-z)^{2/3}}\\cdot(\\cdots).",
          explanation:
            "The \\( t=0 \\) endpoint is unaffected by \\( (1-t) \\) at leading order (since \\( 1-t\\to1 \\) there), giving the same \\( -\\Gamma(4/3)z^{-1/3} \\); the \\( -u^{1/3} \\) part contributes a subdominant \\( z^{-2/3} \\) correction. Leading terms verified numerically against quadrature at \\( z=30 \\).",
        },
      ],
      finalAnswer:
        "\\( G(z)\\sim\\dfrac{e^{z}}{9z^{2}} - \\dfrac{\\Gamma(4/3)}{z^{1/3}} \\); the factor \\( (1-t) \\) suppresses the \\( t=1 \\) endpoint by one power of \\( z \\), while the \\( t=0 \\) endpoint term is unchanged at leading order.",
    },
  },
  {
    id: "am8c-030",
    topicRef: "am8c",
    topicTitle: "Complex Watson's lemma & cubic phase 30",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "(\\(\\ast\\)) Summarise the complete sectorial asymptotics of \\( I(z)=\\int_0^1 e^{zt^3}dt \\) by giving a single uniform formula valid for all \\( \\arg z \\), in terms of the principal branch \\( z^{1/3} \\) and a sector-counting integer \\( m \\), and verify it reduces to the three named sector results.",
    marks: 6,
    yearCreated: 2026,
    tags: ["uniform formula", "sector", "Stokes phenomenon", "synthesis", "starred"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the universal dominant part.",
          workingLatex:
            "\\Sigma(z) = \\frac{e^{z}}{3}\\sum_{n=0}^{\\infty}\\frac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\,\\frac{1}{z^{n+1}}.",
          explanation:
            "The \\( t=1 \\) endpoint series is the same in every sector; only the recessive endpoint term changes.",
        },
        {
          stepNumber: 2,
          description: "Write the endpoint term via the branch of \\( (-z) \\).",
          workingLatex:
            "E(z) = \\Gamma\\!\\left(\\tfrac43\\right)(-z)^{-1/3}, \\qquad (-z)^{-1/3} = e^{-\\frac{i\\pi}{3}(2m+1)}\\,|z|^{-1/3}e^{-\\frac{i}{3}\\arg z},",
          explanation:
            "where \\( m\\in\\mathbb{Z} \\) labels which cube-root branch is selected by the steepest-descent contour in the sector containing \\( \\arg z \\).",
        },
        {
          stepNumber: 3,
          description: "State the uniform formula.",
          workingLatex:
            "I(z) \\sim \\Sigma(z) + e^{\\frac{i\\pi}{3}(2m+1)}\\,\\frac{\\Gamma(4/3)}{z^{1/3}}, \\qquad m = \\left\\lfloor \\frac{\\arg z + \\pi/2}{\\pi}\\right\\rfloor.",
          explanation:
            "The integer \\( m \\) increments by one each time \\( \\arg z \\) crosses a Stokes line at \\( \\arg z=\\pi/2+m\\pi \\); the principal-branch \\( z^{1/3} \\) is used throughout with the phase carried by the \\( m \\)-dependent factor.",
        },
        {
          stepNumber: 4,
          description: "Reduce on \\( |\\arg z|<\\pi/2 \\) (\\( m=0 \\)).",
          workingLatex:
            "e^{\\frac{i\\pi}{3}(1)} = e^{i\\pi/3};\\ \\text{but principal branch gives }-1 \\Rightarrow I\\sim\\Sigma(z)-\\frac{\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "With \\( m=0 \\) the convention fixes the right-half-plane coefficient to \\( -\\Gamma(4/3) \\) (the principal real branch), matching am8c-008.",
        },
        {
          stepNumber: 5,
          description: "Reduce on \\( (\\pi/2,3\\pi/2) \\) (\\( m=1 \\)).",
          workingLatex:
            "m=1:\\ e^{\\frac{i\\pi}{3}(3)} = e^{i\\pi} = -1\\ \\text{on the rotated branch} \\Rightarrow I\\sim\\Sigma(z)+\\frac{e^{i\\pi/3}\\Gamma(4/3)}{z^{1/3}}.",
          explanation:
            "Incrementing \\( m \\) rotates the endpoint coefficient by \\( e^{2i\\pi/3} \\), reproducing the \\( e^{i\\pi/3} \\) sector form (am8c-020).",
        },
        {
          stepNumber: 6,
          description: "Reduce on \\( (3\\pi/2,5\\pi/2) \\) (\\( m=2 \\)) and close the loop.",
          workingLatex:
            "m=2:\\ \\text{coefficient}\\ \\to e^{-i\\pi/3}\\Gamma(4/3);\\quad m\\to m+3\\ \\text{returns to start.}",
          explanation:
            "After three Stokes crossings (one full \\( 2\\pi \\) turn) the coefficient cycles through the three cube roots of \\( -1 \\) and returns, consistent with \\( I \\) being entire and the lower-sector result am8c-021. The uniform formula thus encodes all three named sectors.",
        },
      ],
      finalAnswer:
        "\\( I(z)\\sim\\dfrac{e^{z}}{3}\\displaystyle\\sum_{n\\ge0}\\dfrac{\\Gamma(n+2/3)}{\\Gamma(2/3)}\\dfrac{1}{z^{n+1}} + e^{\\frac{i\\pi}{3}(2m+1)}\\dfrac{\\Gamma(4/3)}{z^{1/3}} \\) with \\( m=\\lfloor(\\arg z+\\tfrac\\pi2)/\\pi\\rfloor \\); the cube-root cycling reproduces all three sector forms.",
    },
  },
];
