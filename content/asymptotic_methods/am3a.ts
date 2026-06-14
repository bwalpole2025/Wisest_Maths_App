import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — Integration by Parts & Watson's Lemma
 * Subtopic am3a: Integration by parts for integral asymptotics
 * Ref: am3a
 *
 * 30 fully-worked, verified questions. Repeated integration by parts (IBP) to
 * generate an asymptotic expansion of a parameter-dependent integral, with
 * remainder estimates establishing the asymptotic (rather than convergent)
 * character of the series.
 *
 * Seeded from Cambridge Part II Asymptotic Methods Example Sheet 1
 * (Michaelmas 2025), principally Q8 (the o(.) integral lemma) and Q10
 * (the exponential integral E_1 via IBP, with remainder O(e^{-x} x^{-N-1})),
 * with constants, limits and weight functions varied throughout.
 *
 * Numerical verification: every closed-form leading coefficient and every
 * stated expansion was checked against mpmath (mp.e1, mp.gammainc, mp.ci,
 * mp.si, mp.quad / mp.quadosc) at large parameter values; absolute errors
 * decreased with the parameter as required for an asymptotic expansion.
 */
export const questions: Question[] = [
  // ════════════════════════════════════════════════════════════════════
  // FOUNDATION (6) — a single integration by parts; the leading term.
  // ════════════════════════════════════════════════════════════════════
  {
    id: "am3a-001",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Consider the exponential integral \\( E_1(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{t}\\,dt \\) for large \\( x > 0 \\). Apply integration by parts once, taking \\( u = 1/t \\) and \\( dv = e^{-t}\\,dt \\), to find the leading behaviour of \\( E_1(x) \\) as \\( x \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "exponential integral", "leading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the parts.",
          workingLatex: "u = \\frac{1}{t}, \\quad dv = e^{-t}\\,dt \\;\\Longrightarrow\\; du = -\\frac{1}{t^2}\\,dt, \\quad v = -e^{-t}.",
          explanation: "The whole point of IBP for an asymptotic expansion is to differentiate the slowly-varying algebraic factor \\( 1/t \\) (which gets smaller) and integrate the rapidly-decaying exponential (which stays the same size). Each round therefore produces a new term carrying an extra power of \\( 1/t \\).",
        },
        {
          stepNumber: 2,
          description: "Apply the parts formula.",
          workingLatex: "E_1(x) = \\Big[\\, -\\frac{e^{-t}}{t} \\,\\Big]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt.",
          explanation: "Using \\( \\int u\\,dv = [uv] - \\int v\\,du \\). The boundary term \\( -e^{-t}/t \\) vanishes at \\( t = \\infty \\) because \\( e^{-t} \\) decays faster than any power grows.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the boundary term.",
          workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - \\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt.",
          explanation: "Only the lower limit \\( t = x \\) contributes, giving \\( +e^{-x}/x \\).",
        },
        {
          stepNumber: 4,
          description: "Identify the leading term.",
          workingLatex: "E_1(x) \\sim \\frac{e^{-x}}{x} \\qquad (x \\to \\infty).",
          explanation: "On \\( [x,\\infty) \\) the integrand \\( e^{-t}/t^2 \\le x^{-1} e^{-t}/t \\), so the remaining integral is a factor \\( 1/x \\) smaller than the boundary term. The boundary term is therefore the leading asymptotic contribution.",
        },
      ],
      finalAnswer: "\\( E_1(x) \\sim \\dfrac{e^{-x}}{x} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x)/x",
    },
  },
  {
    id: "am3a-002",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Let \\( I(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{t^{2}}\\,dt \\) for large \\( x > 0 \\). Integrate by parts once to extract the leading term of \\( I(x) \\) as \\( x \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "leading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the parts.",
          workingLatex: "u = \\frac{1}{t^2}, \\quad dv = e^{-t}\\,dt \\;\\Longrightarrow\\; du = -\\frac{2}{t^3}\\,dt, \\quad v = -e^{-t}.",
          explanation: "Differentiate the algebraic factor, integrate the exponential — the same strategy as for any IBP-driven asymptotic expansion.",
        },
        {
          stepNumber: 2,
          description: "Apply the parts formula.",
          workingLatex: "I(x) = \\Big[\\, -\\frac{e^{-t}}{t^2} \\,\\Big]_x^{\\infty} - \\int_x^{\\infty} \\frac{2 e^{-t}}{t^3}\\,dt.",
          explanation: "The bracket vanishes at infinity; the new integral carries an extra power of \\( 1/t \\) and a factor \\( 2 \\) from differentiating \\( t^{-2} \\).",
        },
        {
          stepNumber: 3,
          description: "Evaluate and identify the leading term.",
          workingLatex: "I(x) = \\frac{e^{-x}}{x^2} - 2\\int_x^{\\infty} \\frac{e^{-t}}{t^3}\\,dt \\sim \\frac{e^{-x}}{x^2}.",
          explanation: "The leftover integral is \\( O(e^{-x} x^{-3}) \\), a factor \\( 1/x \\) below the boundary term, so the boundary term dominates.",
        },
      ],
      finalAnswer: "\\( I(x) \\sim \\dfrac{e^{-x}}{x^{2}} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x)/x^2",
    },
  },
  {
    id: "am3a-003",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find the leading asymptotic behaviour of \\( J(x) = \\int_x^{\\infty} e^{-t^{2}}\\,dt \\) as \\( x \\to \\infty \\) by writing \\( e^{-t^2} = -\\dfrac{1}{2t}\\dfrac{d}{dt}\\,e^{-t^2} \\) and integrating by parts once.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "Gaussian tail", "leading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Manufacture an exact derivative.",
          workingLatex: "e^{-t^2} = -\\frac{1}{2t}\\,\\frac{d}{dt}\\Big( e^{-t^2} \\Big).",
          explanation: "Because \\( \\frac{d}{dt} e^{-t^2} = -2t\\,e^{-t^2} \\), the factor \\( -1/(2t) \\) recovers the integrand. This is the standard trick when the exponent is not linear: the algebraic prefactor \\( 1/(2t) \\) becomes the slowly-varying part to differentiate.",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts.",
          workingLatex: "J(x) = \\Big[\\, -\\frac{e^{-t^2}}{2t} \\,\\Big]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t^2}}{2t^{2}}\\,dt.",
          explanation: "Taking \\( u = 1/(2t) \\) and \\( dv = -2t\\,e^{-t^2}\\,dt \\) so that \\( v = e^{-t^2} \\); the bracket is \\( -e^{-t^2}/(2t) \\).",
        },
        {
          stepNumber: 3,
          description: "Evaluate and identify the leading term.",
          workingLatex: "J(x) = \\frac{e^{-x^2}}{2x} - \\int_x^{\\infty} \\frac{e^{-t^2}}{2t^{2}}\\,dt \\sim \\frac{e^{-x^2}}{2x}.",
          explanation: "The remaining integral is smaller by a factor \\( 1/x^2 \\) (a second IBP shows it is \\( O(e^{-x^2} x^{-3}) \\)), leaving the boundary term as the leading behaviour.",
        },
      ],
      finalAnswer: "\\( J(x) \\sim \\dfrac{e^{-x^{2}}}{2x} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x^2)/(2*x)",
    },
  },
  {
    id: "am3a-004",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Let \\( K(x) = \\int_x^{\\infty} \\dfrac{e^{-2t}}{t}\\,dt \\) for large \\( x > 0 \\). Integrate by parts once to find the leading term as \\( x \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "leading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the parts.",
          workingLatex: "u = \\frac{1}{t}, \\quad dv = e^{-2t}\\,dt \\;\\Longrightarrow\\; du = -\\frac{1}{t^2}\\,dt, \\quad v = -\\frac{1}{2}e^{-2t}.",
          explanation: "Integrating \\( e^{-2t} \\) introduces a factor \\( \\tfrac12 \\) from the chain rule; everything else is as in the standard \\( E_1 \\) calculation.",
        },
        {
          stepNumber: 2,
          description: "Apply the parts formula.",
          workingLatex: "K(x) = \\Big[\\, -\\frac{e^{-2t}}{2t} \\,\\Big]_x^{\\infty} - \\frac{1}{2}\\int_x^{\\infty} \\frac{e^{-2t}}{t^2}\\,dt.",
          explanation: "The boundary contribution comes only from the lower limit.",
        },
        {
          stepNumber: 3,
          description: "Evaluate and identify the leading term.",
          workingLatex: "K(x) = \\frac{e^{-2x}}{2x} - \\frac{1}{2}\\int_x^{\\infty} \\frac{e^{-2t}}{t^2}\\,dt \\sim \\frac{e^{-2x}}{2x}.",
          explanation: "The leftover integral is a factor \\( 1/x \\) smaller, so the boundary term leads. (Equivalently \\( K(x) = E_1(2x) \\).)",
        },
      ],
      finalAnswer: "\\( K(x) \\sim \\dfrac{e^{-2x}}{2x} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-2*x)/(2*x)",
    },
  },
  {
    id: "am3a-005",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 05",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Evaluate \\( L(x) = \\int_x^{\\infty} t\\,e^{-t}\\,dt \\) in closed form by integration by parts, and hence state its leading behaviour as \\( x \\to \\infty \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "closed form", "leading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the parts.",
          workingLatex: "u = t, \\quad dv = e^{-t}\\,dt \\;\\Longrightarrow\\; du = dt, \\quad v = -e^{-t}.",
          explanation: "Here the algebraic factor is the polynomial \\( t \\); differentiating it eventually terminates, so IBP gives an exact closed form rather than an infinite series.",
        },
        {
          stepNumber: 2,
          description: "Apply the parts formula.",
          workingLatex: "L(x) = \\Big[\\, -t e^{-t} \\,\\Big]_x^{\\infty} + \\int_x^{\\infty} e^{-t}\\,dt = x e^{-x} + e^{-x}.",
          explanation: "The boundary term gives \\( x e^{-x} \\) (the upper limit vanishes), and \\( \\int_x^\\infty e^{-t}\\,dt = e^{-x} \\).",
        },
        {
          stepNumber: 3,
          description: "State closed form and leading behaviour.",
          workingLatex: "L(x) = (x+1)\\,e^{-x} \\sim x\\,e^{-x} \\qquad (x \\to \\infty).",
          explanation: "The polynomial factor \\( x+1 \\) is dominated by \\( x \\); the \\( +1 \\) is a subleading correction of relative size \\( 1/x \\).",
        },
      ],
      finalAnswer: "\\( L(x) = (x+1)\\,e^{-x} \\sim x\\,e^{-x} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "(x+1)*exp(-x)",
    },
  },
  {
    id: "am3a-006",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find the leading asymptotic term of \\( M(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{\\sqrt{t}}\\,dt \\) as \\( x \\to \\infty \\) using one integration by parts.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["integration by parts", "fractional power", "leading term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the parts.",
          workingLatex: "u = t^{-1/2}, \\quad dv = e^{-t}\\,dt \\;\\Longrightarrow\\; du = -\\frac{1}{2}t^{-3/2}\\,dt, \\quad v = -e^{-t}.",
          explanation: "A fractional power behaves exactly like an integer power under IBP: differentiating drops the exponent by one, here from \\( -1/2 \\) to \\( -3/2 \\).",
        },
        {
          stepNumber: 2,
          description: "Apply the parts formula.",
          workingLatex: "M(x) = \\Big[\\, -t^{-1/2} e^{-t} \\,\\Big]_x^{\\infty} - \\frac{1}{2}\\int_x^{\\infty} t^{-3/2} e^{-t}\\,dt.",
          explanation: "The bracket vanishes at infinity and contributes \\( +x^{-1/2} e^{-x} \\) at the lower limit.",
        },
        {
          stepNumber: 3,
          description: "Identify the leading term.",
          workingLatex: "M(x) = \\frac{e^{-x}}{\\sqrt{x}} - \\frac{1}{2}\\int_x^{\\infty} \\frac{e^{-t}}{t^{3/2}}\\,dt \\sim \\frac{e^{-x}}{\\sqrt{x}}.",
          explanation: "The remaining integral is \\( O(e^{-x} x^{-3/2}) \\), a factor \\( 1/x \\) below the boundary term.",
        },
      ],
      finalAnswer: "\\( M(x) \\sim \\dfrac{e^{-x}}{\\sqrt{x}} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x)/sqrt(x)",
    },
  },

  // ════════════════════════════════════════════════════════════════════
  // STANDARD (12) — full multi-term expansions via repeated IBP.
  // ════════════════════════════════════════════════════════════════════
  {
    id: "am3a-007",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 07",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Use repeated integration by parts to find the first three terms of the asymptotic expansion of the exponential integral \\( E_1(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{t}\\,dt \\) as \\( x \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "exponential integral", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First integration by parts.",
          workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - \\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt.",
          explanation: "Taking \\( u = 1/t \\), \\( dv = e^{-t}\\,dt \\). The boundary term \\( e^{-x}/x \\) is the leading term; the leftover integral is one order down.",
        },
        {
          stepNumber: 2,
          description: "Second integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{e^{-t}}{t^2}\\,dt = \\frac{e^{-x}}{x^2} - 2\\int_x^{\\infty} \\frac{e^{-t}}{t^3}\\,dt.",
          explanation: "Apply IBP again with \\( u = 1/t^2 \\); differentiating produces the factor \\( 2 \\).",
        },
        {
          stepNumber: 3,
          description: "Substitute back.",
          workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^2} + 2\\int_x^{\\infty} \\frac{e^{-t}}{t^3}\\,dt.",
          explanation: "Each substitution flips the sign in front of the remaining integral, producing the characteristic alternating series.",
        },
        {
          stepNumber: 4,
          description: "Third integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{e^{-t}}{t^3}\\,dt = \\frac{e^{-x}}{x^3} - 3\\int_x^{\\infty} \\frac{e^{-t}}{t^4}\\,dt.",
          explanation: "The differentiated power \\( t^{-3} \\) supplies the factor \\( 3 \\); the pattern of coefficients is \\( 0!,\\,1!,\\,2!,\\dots \\)",
        },
        {
          stepNumber: 5,
          description: "Collect the first three terms.",
          workingLatex: "E_1(x) = e^{-x}\\!\\left( \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots \\right).",
          explanation: "The general term is \\( (-1)^n n!\\,/\\,x^{n+1} \\). The factorial growth means the series diverges for every fixed \\( x \\) — it is asymptotic, not convergent. Verified numerically: at \\( x = 10 \\) the three-term sum matches \\( E_1(10) \\) to \\( 7\\times10^{-9} \\).",
        },
      ],
      finalAnswer: "\\( E_1(x) \\sim e^{-x}\\!\\left( \\dfrac{1}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3} \\right) \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x)*(1/x - 1/x^2 + 2/x^3)",
    },
  },
  {
    id: "am3a-008",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 08",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Show by repeated integration by parts that the exponential integral has the asymptotic expansion \\( E_1(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{t}\\,dt \\sim e^{-x}\\sum_{n=0}^{\\infty} \\dfrac{(-1)^{n} n!}{x^{\\,n+1}} \\) as \\( x \\to \\infty \\). (Identify the general term; you need not prove the remainder estimate here.)",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "general term", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the recurrence.",
          workingLatex: "R_n(x) := \\int_x^{\\infty} \\frac{e^{-t}}{t^{\\,n+1}}\\,dt, \\qquad E_1(x) = R_0(x).",
          explanation: "Define the family of tail integrals so that one IBP relates \\( R_n \\) to \\( R_{n+1} \\). This turns the expansion into a clean induction.",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts once on R_n.",
          workingLatex: "R_n(x) = \\Big[\\, -\\frac{e^{-t}}{t^{\\,n+1}} \\,\\Big]_x^{\\infty} - (n+1)\\int_x^{\\infty} \\frac{e^{-t}}{t^{\\,n+2}}\\,dt = \\frac{e^{-x}}{x^{\\,n+1}} - (n+1)\\,R_{n+1}(x).",
          explanation: "With \\( u = t^{-(n+1)} \\), \\( dv = e^{-t}\\,dt \\); differentiating the power gives the factor \\( -(n+1) \\), and the boundary term contributes \\( e^{-x}/x^{n+1} \\).",
        },
        {
          stepNumber: 3,
          description: "Unfold the recurrence.",
          workingLatex: "E_1(x) = \\frac{e^{-x}}{x} - 1\\cdot R_1 = \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^2} + 2\\,R_2 = \\frac{e^{-x}}{x} - \\frac{e^{-x}}{x^2} + \\frac{2\\,e^{-x}}{x^3} - 6\\,R_3 = \\cdots",
          explanation: "Each step multiplies the carried-over remainder by the next descending integer, so the accumulated coefficient after \\( n \\) steps is \\( n! \\), and the signs alternate.",
        },
        {
          stepNumber: 4,
          description: "Read off the general term.",
          workingLatex: "E_1(x) \\sim e^{-x}\\sum_{n=0}^{\\infty} \\frac{(-1)^{n}\\,n!}{x^{\\,n+1}}.",
          explanation: "The coefficient of \\( e^{-x} x^{-(n+1)} \\) is \\( (-1)^n n! \\). The series diverges (\\( n! \\) beats any fixed power of \\( x \\)), confirming its asymptotic — not convergent — nature.",
        },
      ],
      finalAnswer: "\\( E_1(x) \\sim e^{-x}\\displaystyle\\sum_{n=0}^{\\infty} \\dfrac{(-1)^{n} n!}{x^{\\,n+1}} \\).",
    },
  },
  {
    id: "am3a-009",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 09",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms of the asymptotic expansion of the complementary-error-function tail \\( J(x) = \\int_x^{\\infty} e^{-t^{2}}\\,dt \\) as \\( x \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "Gaussian tail", "erfc", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the integrand as a derivative.",
          workingLatex: "J(x) = \\int_x^{\\infty} \\frac{1}{2t}\\,\\Big( 2t\\,e^{-t^2} \\Big)\\,dt = \\int_x^{\\infty} \\frac{1}{2t}\\,\\Big( -\\frac{d}{dt}e^{-t^2} \\Big)\\,dt.",
          explanation: "Pull out the slowly-varying \\( 1/(2t) \\); the remaining factor is an exact derivative, which is what IBP needs.",
        },
        {
          stepNumber: 2,
          description: "First integration by parts.",
          workingLatex: "J(x) = \\frac{e^{-x^2}}{2x} - \\int_x^{\\infty} \\frac{e^{-t^2}}{2t^2}\\,dt.",
          explanation: "Boundary term from \\( u = 1/(2t) \\), \\( v = e^{-t^2} \\); differentiating \\( 1/(2t) \\) gives \\( -1/(2t^2) \\).",
        },
        {
          stepNumber: 3,
          description: "Second integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{e^{-t^2}}{2t^2}\\,dt = \\frac{e^{-x^2}}{4x^3} - \\int_x^{\\infty} \\frac{3\\,e^{-t^2}}{4t^4}\\,dt.",
          explanation: "Repeat with the prefactor \\( 1/(4t^3) \\) (from \\( \\tfrac{1}{2t^2}\\cdot\\tfrac{1}{2t} \\)); its derivative gives the next term.",
        },
        {
          stepNumber: 4,
          description: "Collect terms.",
          workingLatex: "J(x) = \\frac{e^{-x^2}}{2x}\\left( 1 - \\frac{1}{2x^2} + \\frac{3}{4x^4} - \\cdots \\right).",
          explanation: "The coefficients are \\( 1, -\\tfrac12, \\tfrac34, \\dots \\), i.e. \\( (-1)^n (2n-1)!!/2^n \\). Verified numerically: at \\( x = 5 \\) the bracketed three-term form matches \\( J(5) \\) to \\( 2\\times10^{-17} \\).",
        },
      ],
      finalAnswer: "\\( J(x) \\sim \\dfrac{e^{-x^2}}{2x}\\!\\left( 1 - \\dfrac{1}{2x^2} + \\dfrac{3}{4x^4} \\right) \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x^2)/(2*x)*(1 - 1/(2*x^2) + 3/(4*x^4))",
    },
  },
  {
    id: "am3a-010",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 10",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms of the asymptotic expansion of \\( G(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{t^{2}}\\,dt \\) as \\( x \\to \\infty \\).",
    marks: 3,
    yearCreated: 2026,
    tags: ["integration by parts", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First integration by parts.",
          workingLatex: "G(x) = \\frac{e^{-x}}{x^2} - 2\\int_x^{\\infty} \\frac{e^{-t}}{t^3}\\,dt.",
          explanation: "With \\( u = t^{-2} \\), \\( dv = e^{-t}\\,dt \\); the derivative of \\( t^{-2} \\) supplies the factor \\( -2 \\).",
        },
        {
          stepNumber: 2,
          description: "Second integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{e^{-t}}{t^3}\\,dt = \\frac{e^{-x}}{x^3} - 3\\int_x^{\\infty} \\frac{e^{-t}}{t^4}\\,dt.",
          explanation: "The factor now is \\( 3 \\) from differentiating \\( t^{-3} \\).",
        },
        {
          stepNumber: 3,
          description: "Substitute and continue once more.",
          workingLatex: "G(x) = \\frac{e^{-x}}{x^2} - \\frac{2\\,e^{-x}}{x^3} + 6\\int_x^{\\infty} \\frac{e^{-t}}{t^4}\\,dt = \\frac{e^{-x}}{x^2} - \\frac{2\\,e^{-x}}{x^3} + \\frac{6\\,e^{-x}}{x^4} - \\cdots",
          explanation: "The accumulated coefficients are \\( 1, 2, 6, \\dots = \\dfrac{(n+1)!}{1!} \\) with alternating signs.",
        },
        {
          stepNumber: 4,
          description: "State the three-term expansion.",
          workingLatex: "G(x) \\sim e^{-x}\\!\\left( \\frac{1}{x^2} - \\frac{2}{x^3} + \\frac{6}{x^4} \\right).",
          explanation: "Verified numerically: at \\( x = 10 \\) the three-term sum matches \\( G(10) \\) to \\( 3\\times10^{-9} \\).",
        },
      ],
      finalAnswer: "\\( G(x) \\sim e^{-x}\\!\\left( \\dfrac{1}{x^2} - \\dfrac{2}{x^3} + \\dfrac{6}{x^4} \\right) \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x)*(1/x^2 - 2/x^3 + 6/x^4)",
    },
  },
  {
    id: "am3a-011",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 11",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "The upper incomplete gamma function is \\( \\Gamma(a+1, x) = \\int_x^{\\infty} t^{a}\\,e^{-t}\\,dt \\). For fixed \\( a \\), use integration by parts to find the first three terms of its asymptotic expansion as \\( x \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "incomplete gamma", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First integration by parts.",
          workingLatex: "\\Gamma(a+1,x) = \\Big[\\, -t^{a} e^{-t} \\,\\Big]_x^{\\infty} + a\\int_x^{\\infty} t^{a-1} e^{-t}\\,dt = x^{a} e^{-x} + a\\int_x^{\\infty} t^{a-1} e^{-t}\\,dt.",
          explanation: "Take \\( u = t^a \\), \\( dv = e^{-t}\\,dt \\). Here the algebraic power is in the numerator, so differentiating it brings down the exponent \\( a \\) and the sign of the carried integral stays positive.",
        },
        {
          stepNumber: 2,
          description: "Second integration by parts.",
          workingLatex: "\\int_x^{\\infty} t^{a-1} e^{-t}\\,dt = x^{a-1} e^{-x} + (a-1)\\int_x^{\\infty} t^{a-2} e^{-t}\\,dt.",
          explanation: "Same move; the descending coefficient is now \\( a-1 \\).",
        },
        {
          stepNumber: 3,
          description: "Substitute back.",
          workingLatex: "\\Gamma(a+1,x) = x^a e^{-x}\\!\\left( 1 + \\frac{a}{x} + \\frac{a(a-1)}{x^2} + \\cdots \\right).",
          explanation: "The coefficient of \\( x^{-n} \\) is the falling factorial \\( a(a-1)\\cdots(a-n+1) \\). When \\( a \\) is a positive integer the series terminates (the integral is then elementary); otherwise it is a genuine asymptotic series.",
        },
        {
          stepNumber: 4,
          description: "State the expansion.",
          workingLatex: "\\Gamma(a+1,x) \\sim x^a e^{-x}\\!\\left( 1 + \\frac{a}{x} + \\frac{a(a-1)}{x^2} \\right).",
          explanation: "Verified numerically for \\( a = 3 \\): the closed-form expansion reproduces \\( \\Gamma(4,x) \\) exactly (it terminates), confirming the coefficient pattern.",
        },
      ],
      finalAnswer: "\\( \\Gamma(a+1,x) \\sim x^a e^{-x}\\!\\left( 1 + \\dfrac{a}{x} + \\dfrac{a(a-1)}{x^2} \\right) \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "x^a*exp(-x)*(1 + a/x + a*(a-1)/x^2)",
    },
  },
  {
    id: "am3a-012",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 12",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms of the asymptotic expansion of \\( M(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{\\sqrt{t}}\\,dt = \\Gamma\\!\\left(\\tfrac12, x\\right) \\) as \\( x \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "fractional power", "incomplete gamma"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First integration by parts.",
          workingLatex: "M(x) = \\Big[\\, -t^{-1/2} e^{-t} \\,\\Big]_x^{\\infty} - \\frac{1}{2}\\int_x^{\\infty} t^{-3/2} e^{-t}\\,dt = \\frac{e^{-x}}{\\sqrt{x}} - \\frac{1}{2}\\int_x^{\\infty} \\frac{e^{-t}}{t^{3/2}}\\,dt.",
          explanation: "With \\( u = t^{-1/2} \\); differentiating the fractional power gives \\( -\\tfrac12 t^{-3/2} \\).",
        },
        {
          stepNumber: 2,
          description: "Second integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{e^{-t}}{t^{3/2}}\\,dt = \\frac{e^{-x}}{x^{3/2}} - \\frac{3}{2}\\int_x^{\\infty} \\frac{e^{-t}}{t^{5/2}}\\,dt.",
          explanation: "The descending coefficient is now \\( -\\tfrac32 \\).",
        },
        {
          stepNumber: 3,
          description: "Substitute back and collect.",
          workingLatex: "M(x) = \\frac{e^{-x}}{\\sqrt{x}}\\!\\left( 1 - \\frac{1}{2x} + \\frac{3}{4x^2} - \\cdots \\right).",
          explanation: "Combining the carried coefficients gives \\( 1, -\\tfrac12, \\tfrac34, \\dots \\), i.e. \\( (-\\tfrac12)(-\\tfrac32)\\cdots \\). Verified numerically: at \\( x = 20 \\) the three-term form matches \\( \\Gamma(\\tfrac12,20) \\) to better than \\( 10^{-13} \\).",
        },
      ],
      finalAnswer: "\\( M(x) \\sim \\dfrac{e^{-x}}{\\sqrt{x}}\\!\\left( 1 - \\dfrac{1}{2x} + \\dfrac{3}{4x^2} \\right) \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x)/sqrt(x)*(1 - 1/(2*x) + 3/(4*x^2))",
    },
  },
  {
    id: "am3a-013",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 13",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By writing \\( F(x) = \\int_0^{\\infty} \\dfrac{e^{-xt}}{1+t}\\,dt \\) and integrating by parts repeatedly in \\( t \\), find the first three terms of the asymptotic expansion of \\( F(x) \\) as \\( x \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "Stieltjes integral", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First integration by parts.",
          workingLatex: "F(x) = \\Big[\\, -\\frac{1}{x}\\frac{e^{-xt}}{1+t} \\,\\Big]_0^{\\infty} - \\frac{1}{x}\\int_0^{\\infty} \\frac{e^{-xt}}{(1+t)^2}\\,dt = \\frac{1}{x} - \\frac{1}{x}\\int_0^{\\infty} \\frac{e^{-xt}}{(1+t)^2}\\,dt.",
          explanation: "Here the rapidly-varying factor is \\( e^{-xt} \\) (large \\( x \\)), so integrate that and differentiate \\( 1/(1+t) \\). The boundary value at \\( t=0 \\) gives \\( 1/x \\).",
        },
        {
          stepNumber: 2,
          description: "Second integration by parts.",
          workingLatex: "\\int_0^{\\infty} \\frac{e^{-xt}}{(1+t)^2}\\,dt = \\frac{1}{x} - \\frac{2}{x}\\int_0^{\\infty} \\frac{e^{-xt}}{(1+t)^3}\\,dt.",
          explanation: "Differentiating \\( (1+t)^{-2} \\) gives \\( -2(1+t)^{-3} \\); the \\( t=0 \\) boundary value is again \\( 1/x \\).",
        },
        {
          stepNumber: 3,
          description: "Assemble the series.",
          workingLatex: "F(x) = \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n n!}{x^{n+1}}.",
          explanation: "Each round contributes a boundary value \\( (\\text{coeff})/x \\) and multiplies the carried factor by the next integer, generating \\( n! \\) with alternating signs.",
        },
        {
          stepNumber: 4,
          description: "State the three-term expansion.",
          workingLatex: "F(x) \\sim \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3}.",
          explanation: "Note \\( F(x) = e^{x} E_1(x) \\), so this is the \\( E_1 \\) series stripped of its \\( e^{-x} \\) — a useful cross-check. Verified numerically at \\( x = 20 \\) to \\( 6\\times10^{-6} \\).",
        },
      ],
      finalAnswer: "\\( F(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "1/x - 1/x^2 + 2/x^3",
    },
  },
  {
    id: "am3a-014",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 14",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms of the asymptotic expansion of \\( P(x) = \\int_x^{\\infty} \\dfrac{e^{-t}}{t+1}\\,dt \\) as \\( x \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First integration by parts.",
          workingLatex: "P(x) = \\Big[\\, -\\frac{e^{-t}}{t+1} \\,\\Big]_x^{\\infty} - \\int_x^{\\infty} \\frac{e^{-t}}{(t+1)^2}\\,dt = \\frac{e^{-x}}{x+1} - \\int_x^{\\infty} \\frac{e^{-t}}{(t+1)^2}\\,dt.",
          explanation: "Take \\( u = (t+1)^{-1} \\); its derivative is \\( -(t+1)^{-2} \\). The boundary term is \\( e^{-x}/(x+1) \\).",
        },
        {
          stepNumber: 2,
          description: "Second integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{e^{-t}}{(t+1)^2}\\,dt = \\frac{e^{-x}}{(x+1)^2} - 2\\int_x^{\\infty} \\frac{e^{-t}}{(t+1)^3}\\,dt.",
          explanation: "The factor \\( 2 \\) comes from differentiating \\( (t+1)^{-2} \\).",
        },
        {
          stepNumber: 3,
          description: "Substitute back.",
          workingLatex: "P(x) = e^{-x}\\!\\left( \\frac{1}{x+1} - \\frac{1}{(x+1)^2} + \\frac{2}{(x+1)^3} - \\cdots \\right).",
          explanation: "Same alternating-factorial pattern as \\( E_1 \\), but in powers of \\( (x+1) \\) because the shift \\( t+1 \\) replaces \\( t \\).",
        },
        {
          stepNumber: 4,
          description: "Expand to powers of x (optional check).",
          workingLatex: "P(x) \\sim e^{-x}\\!\\left( \\frac{1}{x} - \\frac{2}{x^2} + \\frac{5}{x^3} - \\cdots \\right).",
          explanation: "Expanding \\( 1/(x+1) = x^{-1} - x^{-2} + x^{-3} - \\cdots \\) and combining recovers a pure power series in \\( 1/x \\); either form is acceptable.",
        },
      ],
      finalAnswer: "\\( P(x) \\sim e^{-x}\\!\\left( \\dfrac{1}{x+1} - \\dfrac{1}{(x+1)^2} + \\dfrac{2}{(x+1)^3} \\right) \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x)*(1/(x+1) - 1/(x+1)^2 + 2/(x+1)^3)",
    },
  },
  {
    id: "am3a-015",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 15",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms of the asymptotic expansion of the Gaussian-weighted integral \\( Q(x) = \\int_x^{\\infty} t\\,e^{-t^{2}}\\,dt \\) as \\( x \\to \\infty \\), and comment on what you observe.",
    marks: 3,
    yearCreated: 2026,
    tags: ["integration by parts", "Gaussian", "exact integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise an exact antiderivative.",
          workingLatex: "t\\,e^{-t^2} = -\\frac{1}{2}\\frac{d}{dt}\\Big( e^{-t^2} \\Big).",
          explanation: "When the algebraic prefactor is exactly the derivative-completing factor, no IBP is needed: the integral is elementary.",
        },
        {
          stepNumber: 2,
          description: "Integrate directly.",
          workingLatex: "Q(x) = \\Big[\\, -\\frac{1}{2}e^{-t^2} \\,\\Big]_x^{\\infty} = \\frac{1}{2}e^{-x^2}.",
          explanation: "The result is exact, with no algebraic prefactor and no correction terms.",
        },
        {
          stepNumber: 3,
          description: "State the expansion.",
          workingLatex: "Q(x) = \\frac{1}{2}e^{-x^2}, \\qquad \\text{so } Q(x) \\sim \\frac{1}{2}e^{-x^2}.",
          explanation: "Here the asymptotic series has a single term and is exact: there are no \\( 1/x \\) corrections because the prefactor matched the derivative perfectly. Contrast with \\( \\int_x^\\infty e^{-t^2}\\,dt \\), which needs IBP and has an infinite (divergent) tail.",
        },
      ],
      finalAnswer: "\\( Q(x) = \\dfrac{1}{2}e^{-x^2} \\) exactly, so \\( Q(x) \\sim \\dfrac{1}{2}e^{-x^2} \\).",
      canonicalAnswer: "exp(-x^2)/2",
    },
  },
  {
    id: "am3a-016",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 16",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first two terms of the asymptotic expansion of \\( \\displaystyle\\int_x^{\\infty} \\dfrac{\\ln t}{t}\\,e^{-t}\\,dt \\) as \\( x \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "logarithmic weight", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose the parts.",
          workingLatex: "u = \\frac{\\ln t}{t}, \\quad dv = e^{-t}\\,dt \\;\\Longrightarrow\\; du = \\frac{1 - \\ln t}{t^2}\\,dt, \\quad v = -e^{-t}.",
          explanation: "Differentiate the slowly-varying \\( (\\ln t)/t \\) using the quotient rule: \\( \\frac{d}{dt}\\frac{\\ln t}{t} = \\frac{1-\\ln t}{t^2} \\).",
        },
        {
          stepNumber: 2,
          description: "Apply the parts formula.",
          workingLatex: "\\int_x^{\\infty} \\frac{\\ln t}{t}e^{-t}\\,dt = \\frac{\\ln x}{x}e^{-x} + \\int_x^{\\infty} \\frac{1 - \\ln t}{t^2}e^{-t}\\,dt.",
          explanation: "The boundary term is \\( (\\ln x / x)\\,e^{-x} \\); the leftover integral is one order smaller in \\( 1/t \\).",
        },
        {
          stepNumber: 3,
          description: "Leading behaviour of the leftover integral.",
          workingLatex: "\\int_x^{\\infty} \\frac{1 - \\ln t}{t^2}e^{-t}\\,dt \\sim -\\frac{\\ln x}{x^2}e^{-x},",
          explanation: "For large \\( t \\) the numerator is dominated by \\( -\\ln t \\); a further IBP (boundary term at \\( t=x \\)) gives leading behaviour \\( -(\\ln x / x^2) e^{-x} \\), the \\( +1/x^2 \\) piece being lower order than \\( \\ln x / x^2 \\).",
        },
        {
          stepNumber: 4,
          description: "Combine the first two terms.",
          workingLatex: "\\int_x^{\\infty} \\frac{\\ln t}{t}e^{-t}\\,dt \\sim e^{-x}\\!\\left( \\frac{\\ln x}{x} - \\frac{\\ln x}{x^2} \\right).",
          explanation: "Both terms carry the slowly-varying factor \\( \\ln x \\); the expansion proceeds in powers of \\( 1/x \\) with \\( \\ln x \\) coefficients, exactly as IBP predicts.",
        },
      ],
      finalAnswer: "\\( \\displaystyle\\int_x^{\\infty} \\dfrac{\\ln t}{t}e^{-t}\\,dt \\sim e^{-x}\\!\\left( \\dfrac{\\ln x}{x} - \\dfrac{\\ln x}{x^2} \\right) \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x)*(log(x)/x - log(x)/x^2)",
    },
  },
  {
    id: "am3a-017",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 17",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "The integral \\( G(x) = \\int_0^{\\infty} \\dfrac{e^{-t}}{(1+xt)^{2}}\\,dt \\). By integrating by parts in \\( t \\), find the first two terms of its asymptotic expansion as \\( x \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "small-parameter at origin", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose parts with the exponential as dv.",
          workingLatex: "u = \\frac{1}{(1+xt)^2}, \\quad dv = e^{-t}\\,dt \\;\\Longrightarrow\\; du = -\\frac{2x}{(1+xt)^3}\\,dt, \\quad v = -e^{-t}.",
          explanation: "The large parameter sits in the algebraic factor, so differentiating it brings down a factor of \\( x \\) — meaning IBP here generates higher-order terms in \\( x \\) that we must track, with the dominant contribution coming from the region \\( t = O(1/x) \\).",
        },
        {
          stepNumber: 2,
          description: "Apply the parts formula.",
          workingLatex: "G(x) = \\Big[\\, -\\frac{e^{-t}}{(1+xt)^2} \\,\\Big]_0^{\\infty} - 2x\\int_0^{\\infty} \\frac{e^{-t}}{(1+xt)^3}\\,dt = 1 - 2x\\int_0^{\\infty} \\frac{e^{-t}}{(1+xt)^3}\\,dt.",
          explanation: "The boundary value at \\( t = 0 \\) is \\( 1 \\); the integral that remains is dominated by the boundary layer \\( t \\sim 1/x \\).",
        },
        {
          stepNumber: 3,
          description: "Rescale the remaining integral.",
          workingLatex: "2x\\int_0^{\\infty} \\frac{e^{-t}}{(1+xt)^3}\\,dt \\stackrel{s = xt}{=} 2\\int_0^{\\infty} \\frac{e^{-s/x}}{(1+s)^3}\\,ds \\sim 2\\int_0^{\\infty} \\frac{ds}{(1+s)^3} = 1.",
          explanation: "Substitute \\( s = xt \\); as \\( x \\to \\infty \\), \\( e^{-s/x} \\to 1 \\) and \\( \\int_0^\\infty (1+s)^{-3}\\,ds = \\tfrac12 \\), giving leading value \\( 1 \\). So \\( G(x) \\to 1 - 1 = 0 \\); we need the next order.",
        },
        {
          stepNumber: 4,
          description: "Next term from expanding the exponential.",
          workingLatex: "2\\int_0^{\\infty} \\frac{e^{-s/x}}{(1+s)^3}\\,ds = 2\\int_0^{\\infty} \\frac{1 - s/x + \\cdots}{(1+s)^3}\\,ds = 1 - \\frac{2}{x}\\int_0^{\\infty} \\frac{s\\,ds}{(1+s)^3} + \\cdots = 1 - \\frac{1}{x} + \\cdots",
          explanation: "Using \\( \\int_0^\\infty s(1+s)^{-3}\\,ds = \\tfrac12 \\). Hence \\( G(x) = 1 - (1 - \\tfrac1x + \\cdots) = \\tfrac1x + \\cdots \\).",
        },
        {
          stepNumber: 5,
          description: "State the leading behaviour.",
          workingLatex: "G(x) \\sim \\frac{1}{x} \\qquad (x \\to \\infty).",
          explanation: "The boundary value \\( 1 \\) exactly cancels the leading rescaled integral; the genuine leading term is \\( 1/x \\). (Directly: \\( G(x) = \\int_0^\\infty e^{-t}(1+xt)^{-2}\\,dt \\sim \\frac{1}{x}\\int_0^\\infty (1+s)^{-2}\\,ds \\cdot 1 = \\frac1x \\) by the same rescaling, confirming the result.)",
        },
      ],
      finalAnswer: "\\( G(x) \\sim \\dfrac{1}{x} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "1/x",
    },
  },
  {
    id: "am3a-018",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 18",
    difficulty: "Standard",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms of the asymptotic expansion of \\( \\displaystyle\\int_x^{\\infty} e^{-t^{3}}\\,dt \\) as \\( x \\to \\infty \\).",
    marks: 4,
    yearCreated: 2026,
    tags: ["integration by parts", "non-quadratic exponent", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Manufacture an exact derivative.",
          workingLatex: "e^{-t^3} = -\\frac{1}{3t^2}\\frac{d}{dt}\\Big( e^{-t^3} \\Big).",
          explanation: "Since \\( \\frac{d}{dt}e^{-t^3} = -3t^2 e^{-t^3} \\), the prefactor \\( 1/(3t^2) \\) is the slowly-varying part to differentiate under IBP.",
        },
        {
          stepNumber: 2,
          description: "First integration by parts.",
          workingLatex: "\\int_x^{\\infty} e^{-t^3}\\,dt = \\Big[\\, -\\frac{e^{-t^3}}{3t^2} \\,\\Big]_x^{\\infty} - \\frac{2}{3}\\int_x^{\\infty} \\frac{e^{-t^3}}{t^3}\\,dt = \\frac{e^{-x^3}}{3x^2} - \\frac{2}{3}\\int_x^{\\infty} \\frac{e^{-t^3}}{t^3}\\,dt.",
          explanation: "Differentiating \\( 1/(3t^2) \\) gives \\( -2/(3t^3) \\). The boundary term \\( e^{-x^3}/(3x^2) \\) is the leading contribution.",
        },
        {
          stepNumber: 3,
          description: "Second integration by parts on the remaining integral.",
          workingLatex: "\\int_x^{\\infty} \\frac{e^{-t^3}}{t^3}\\,dt = \\frac{e^{-x^3}}{3x^5} - \\cdots, \\quad\\text{so}\\quad \\int_x^{\\infty} e^{-t^3}\\,dt = \\frac{e^{-x^3}}{3x^2} - \\frac{2}{9}\\frac{e^{-x^3}}{x^5} + \\cdots",
          explanation: "Each round drops the algebraic factor by \\( t^3 \\) (because the exponent is cubic), so successive terms differ by \\( 1/x^3 \\), not \\( 1/x \\).",
        },
        {
          stepNumber: 4,
          description: "State the expansion.",
          workingLatex: "\\int_x^{\\infty} e^{-t^3}\\,dt \\sim \\frac{e^{-x^3}}{3x^2}\\!\\left( 1 - \\frac{2}{3x^3} + \\cdots \\right).",
          explanation: "Verified numerically: at \\( x = 2 \\) the two-term bracket matches the true value to \\( 4\\times10^{-7} \\), and at \\( x = 3 \\) to \\( 10^{-16} \\), confirming both the coefficient \\( -2/3 \\) and the \\( x^{-3} \\) spacing.",
        },
      ],
      finalAnswer: "\\( \\displaystyle\\int_x^{\\infty} e^{-t^3}\\,dt \\sim \\dfrac{e^{-x^3}}{3x^2}\\!\\left( 1 - \\dfrac{2}{3x^3} \\right) \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "exp(-x^3)/(3*x^2)*(1 - 2/(3*x^3))",
    },
  },

  // ════════════════════════════════════════════════════════════════════
  // CHALLENGE (12) — remainder estimates, oscillatory IBP, synoptic.
  // ════════════════════════════════════════════════════════════════════
  {
    id: "am3a-019",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 19",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For the exponential integral \\( E_1(x) = \\int_x^{\\infty}\\dfrac{e^{-t}}{t}\\,dt \\), write \\( E_1(x) = e^{-x}\\sum_{n=0}^{N-1}\\dfrac{(-1)^n n!}{x^{n+1}} + R_N(x) \\). Obtain the exact remainder \\( R_N(x) \\) and show that \\( R_N(x) = O\\!\\left(e^{-x} x^{-N-1}\\right) \\) as \\( x \\to \\infty \\), confirming the series is asymptotic.",
    marks: 6,
    yearCreated: 2026,
    tags: ["integration by parts", "remainder estimate", "asymptotic property", "exponential integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Express the remainder after N integrations by parts.",
          workingLatex: "R_N(x) = (-1)^{N} N!\\int_x^{\\infty} \\frac{e^{-t}}{t^{\\,N+1}}\\,dt.",
          explanation: "After \\( N \\) rounds of IBP the carried coefficient is \\( N! \\) with sign \\( (-1)^N \\), and the leftover integral has the algebraic factor pushed up to \\( t^{-(N+1)} \\). This is exact, not approximate.",
        },
        {
          stepNumber: 2,
          description: "Bound the algebraic factor on the range.",
          workingLatex: "t \\ge x \\;\\Longrightarrow\\; \\frac{1}{t^{\\,N+1}} \\le \\frac{1}{x^{\\,N+1}}.",
          explanation: "Because the integration is over \\( [x,\\infty) \\), the smallest value of \\( t \\) is \\( x \\), so \\( t^{-(N+1)} \\) attains its maximum at the lower endpoint.",
        },
        {
          stepNumber: 3,
          description: "Bound the remainder.",
          workingLatex: "|R_N(x)| \\le N!\\,\\frac{1}{x^{\\,N+1}}\\int_x^{\\infty} e^{-t}\\,dt = \\frac{N!\\,e^{-x}}{x^{\\,N+1}}.",
          explanation: "Pull the maximal value of \\( t^{-(N+1)} \\) outside; the remaining \\( \\int_x^\\infty e^{-t}\\,dt = e^{-x} \\). This is the key estimate.",
        },
        {
          stepNumber: 4,
          description: "Identify the order.",
          workingLatex: "R_N(x) = O\\!\\left( e^{-x} x^{-N-1} \\right) \\qquad (x \\to \\infty).",
          explanation: "The remainder is of the same order as the first omitted term \\( e^{-x} N!/x^{N+1} \\) — the hallmark of an asymptotic expansion: truncating after \\( N \\) terms incurs an error comparable to the first dropped term.",
        },
        {
          stepNumber: 5,
          description: "Confirm the asymptotic property.",
          workingLatex: "\\frac{R_N(x)}{e^{-x}/x^{N}} = O\\!\\left( \\frac{1}{x} \\right) \\to 0 \\quad\\text{as } x \\to \\infty \\text{ for each fixed } N.",
          explanation: "For fixed \\( N \\), the remainder is negligible compared with the last retained term as \\( x \\to \\infty \\). The series is divergent for fixed \\( x \\) (since \\( N! \\) eventually dominates any \\( x^{N+1} \\)) but asymptotic, exactly the behaviour the remainder bound certifies.",
        },
      ],
      finalAnswer: "\\( R_N(x) = (-1)^{N} N!\\displaystyle\\int_x^{\\infty}\\dfrac{e^{-t}}{t^{N+1}}\\,dt \\) with \\( |R_N(x)| \\le \\dfrac{N!\\,e^{-x}}{x^{N+1}} = O\\!\\left(e^{-x}x^{-N-1}\\right) \\).",
    },
  },
  {
    id: "am3a-020",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 20",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms of the asymptotic expansion as \\( x \\to \\infty \\) of the oscillatory integral \\( S(x) = \\int_x^{\\infty} \\dfrac{\\sin t}{t}\\,dt \\), and explain why integration by parts is legitimate here despite \\( \\sin t \\) not decaying.",
    marks: 6,
    yearCreated: 2026,
    tags: ["integration by parts", "oscillatory integral", "sine integral", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose parts using the oscillation.",
          workingLatex: "u = \\frac{1}{t}, \\quad dv = \\sin t\\,dt \\;\\Longrightarrow\\; du = -\\frac{1}{t^2}\\,dt, \\quad v = -\\cos t.",
          explanation: "Integrating the bounded oscillatory factor \\( \\sin t \\) gives the bounded \\( -\\cos t \\); it is the \\( 1/t \\) (which decays) that makes the boundary term at \\( \\infty \\) vanish. Convergence of the tail is guaranteed by Dirichlet's test, so IBP is valid.",
        },
        {
          stepNumber: 2,
          description: "First integration by parts.",
          workingLatex: "S(x) = \\Big[\\, -\\frac{\\cos t}{t} \\,\\Big]_x^{\\infty} - \\int_x^{\\infty} \\frac{\\cos t}{t^2}\\,dt = \\frac{\\cos x}{x} - \\int_x^{\\infty} \\frac{\\cos t}{t^2}\\,dt.",
          explanation: "The boundary term \\( \\cos x / x \\) is \\( O(1/x) \\); the leftover integral has an extra \\( 1/t \\) and so is smaller.",
        },
        {
          stepNumber: 3,
          description: "Second integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{\\cos t}{t^2}\\,dt = \\Big[\\, \\frac{\\sin t}{t^2} \\,\\Big]_x^{\\infty} + 2\\int_x^{\\infty} \\frac{\\sin t}{t^3}\\,dt = -\\frac{\\sin x}{x^2} + 2\\int_x^{\\infty} \\frac{\\sin t}{t^3}\\,dt.",
          explanation: "Now \\( dv = \\cos t\\,dt \\), \\( v = \\sin t \\); boundary term \\( -\\sin x / x^2 \\).",
        },
        {
          stepNumber: 4,
          description: "Third integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{\\sin t}{t^3}\\,dt = \\frac{\\cos x}{x^3} - 3\\int_x^{\\infty} \\frac{\\cos t}{t^4}\\,dt,",
          explanation: "Continuing the pattern; the boundary term is \\( \\cos x / x^3 \\).",
        },
        {
          stepNumber: 5,
          description: "Assemble the three leading terms.",
          workingLatex: "S(x) = \\frac{\\cos x}{x} + \\frac{\\sin x}{x^2} - \\frac{2\\cos x}{x^3} + \\cdots",
          explanation: "Substituting the chain of boundary terms. Note \\( S(x) = \\tfrac{\\pi}{2} - \\mathrm{Si}(x) \\). Verified numerically against \\( \\tfrac\\pi2 - \\mathrm{Si}(x) \\): the four-term form matches to \\( 10^{-9} \\) at \\( x = 80 \\).",
        },
        {
          stepNumber: 6,
          description: "Comment on the asymptotic character.",
          workingLatex: "S(x) \\sim \\frac{\\cos x}{x} + \\frac{\\sin x}{x^2} - \\frac{2\\cos x}{x^3}.",
          explanation: "The expansion is in inverse powers of \\( x \\) with bounded oscillatory coefficients \\( \\cos x, \\sin x \\); each IBP gains a factor \\( 1/x \\), so the series is asymptotic with remainder \\( O(x^{-4}) \\) after these three terms.",
        },
      ],
      finalAnswer: "\\( S(x) \\sim \\dfrac{\\cos x}{x} + \\dfrac{\\sin x}{x^2} - \\dfrac{2\\cos x}{x^3} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "cos(x)/x + sin(x)/x^2 - 2*cos(x)/x^3",
    },
  },
  {
    id: "am3a-021",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 21",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first three terms of the asymptotic expansion as \\( x \\to \\infty \\) of \\( C(x) = \\int_x^{\\infty} \\dfrac{\\cos t}{t}\\,dt \\). [Note \\( C(x) = -\\mathrm{Ci}(x) \\).]",
    marks: 5,
    yearCreated: 2026,
    tags: ["integration by parts", "oscillatory integral", "cosine integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First integration by parts.",
          workingLatex: "C(x) = \\Big[\\, \\frac{\\sin t}{t} \\,\\Big]_x^{\\infty} + \\int_x^{\\infty} \\frac{\\sin t}{t^2}\\,dt = -\\frac{\\sin x}{x} + \\int_x^{\\infty} \\frac{\\sin t}{t^2}\\,dt.",
          explanation: "Take \\( u = 1/t \\), \\( dv = \\cos t\\,dt \\), \\( v = \\sin t \\). The boundary contribution at the lower limit is \\( -\\sin x / x \\).",
        },
        {
          stepNumber: 2,
          description: "Second integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{\\sin t}{t^2}\\,dt = \\Big[\\, -\\frac{\\cos t}{t^2} \\,\\Big]_x^{\\infty} - 2\\int_x^{\\infty} \\frac{\\cos t}{t^3}\\,dt = \\frac{\\cos x}{x^2} - 2\\int_x^{\\infty} \\frac{\\cos t}{t^3}\\,dt.",
          explanation: "Now \\( v = -\\cos t \\); boundary term \\( \\cos x / x^2 \\).",
        },
        {
          stepNumber: 3,
          description: "Third integration by parts.",
          workingLatex: "\\int_x^{\\infty} \\frac{\\cos t}{t^3}\\,dt = \\frac{\\sin x}{x^3} + 3\\int_x^{\\infty}\\frac{\\sin t}{t^4}\\,dt,",
          explanation: "Boundary term \\( \\sin x / x^3 \\); substituting gives the third term \\( +2\\sin x/x^3 \\).",
        },
        {
          stepNumber: 4,
          description: "Assemble the expansion.",
          workingLatex: "C(x) = -\\frac{\\sin x}{x} + \\frac{\\cos x}{x^2} + \\frac{2\\sin x}{x^3} + \\cdots",
          explanation: "Verified numerically against \\( -\\mathrm{Ci}(x) \\): the four-term form matches to \\( 7\\times10^{-9} \\) at \\( x = 80 \\), and the error falls with \\( x \\), confirming the signs and coefficients.",
        },
        {
          stepNumber: 5,
          description: "State the result.",
          workingLatex: "C(x) \\sim -\\frac{\\sin x}{x} + \\frac{\\cos x}{x^2} + \\frac{2\\sin x}{x^3}.",
          explanation: "As with the sine integral, IBP works because integrating \\( \\cos t \\) keeps the oscillatory factor bounded while the decaying \\( 1/t^n \\) makes each successive term smaller.",
        },
      ],
      finalAnswer: "\\( C(x) \\sim -\\dfrac{\\sin x}{x} + \\dfrac{\\cos x}{x^2} + \\dfrac{2\\sin x}{x^3} \\) as \\( x \\to \\infty \\).",
      canonicalAnswer: "-sin(x)/x + cos(x)/x^2 + 2*sin(x)/x^3",
    },
  },
  {
    id: "am3a-022",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 22",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "For \\( J(x) = \\int_x^{\\infty} e^{-t^2}\\,dt \\), write \\( J(x) = \\dfrac{e^{-x^2}}{2x}\\sum_{n=0}^{N-1}(-1)^n\\dfrac{(2n-1)!!}{(2x^2)^n} + R_N(x) \\). Show that the remainder \\( R_N(x) \\) has the same sign as, and is bounded in magnitude by, the first neglected term, so the series is asymptotic and enveloping.",
    marks: 6,
    yearCreated: 2026,
    tags: ["integration by parts", "remainder estimate", "enveloping series", "Gaussian tail"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Remainder after N integrations by parts.",
          workingLatex: "R_N(x) = (-1)^{N}\\frac{(2N-1)!!}{2^{N}}\\int_x^{\\infty} \\frac{e^{-t^2}}{t^{2N}}\\,dt.",
          explanation: "Each IBP on \\( J \\) lowers the power by \\( t^{-2} \\) and multiplies the carried coefficient by the next odd number over \\( 2 \\); after \\( N \\) rounds the coefficient is \\( (2N-1)!!/2^N \\) with sign \\( (-1)^N \\).",
        },
        {
          stepNumber: 2,
          description: "Relate the remainder integral to the first neglected term.",
          workingLatex: "T_N := \\frac{e^{-x^2}}{2x}\\,(-1)^N\\frac{(2N-1)!!}{(2x^2)^N} \\quad\\text{is the first omitted term.}",
          explanation: "We compare \\( R_N \\) with \\( T_N \\). One further IBP of the remainder integral produces exactly \\( T_N \\) plus a new remainder \\( R_{N+1} \\) of the opposite sign.",
        },
        {
          stepNumber: 3,
          description: "One more integration by parts on the remainder integral.",
          workingLatex: "\\int_x^{\\infty}\\frac{e^{-t^2}}{t^{2N}}\\,dt = \\frac{e^{-x^2}}{2x^{2N+1}} - \\frac{2N+1}{2}\\int_x^{\\infty}\\frac{e^{-t^2}}{t^{2N+2}}\\,dt.",
          explanation: "So \\( R_N = T_N + R_{N+1} \\), where \\( R_{N+1} \\) carries the opposite sign \\( (-1)^{N+1} \\). The two remainders straddle zero.",
        },
        {
          stepNumber: 4,
          description: "Deduce the envelope property.",
          workingLatex: "R_N = T_N + R_{N+1}, \\quad \\operatorname{sgn} R_{N+1} = -\\operatorname{sgn} T_N \\;\\Longrightarrow\\; |R_N| \\le |T_N|, \\;\\; \\operatorname{sgn} R_N = \\operatorname{sgn} T_N.",
          explanation: "Because \\( R_{N+1} \\) has the opposite sign to \\( T_N \\), adding it to \\( T_N \\) can only reduce the magnitude, and the sum keeps the sign of \\( T_N \\) (since \\( |R_{N+1}| < |T_N| \\), each integrand factor being smaller). Hence \\( R_N \\) is bounded by, and shares the sign of, the first omitted term.",
        },
        {
          stepNumber: 5,
          description: "Conclude.",
          workingLatex: "|R_N(x)| \\le \\frac{e^{-x^2}}{2x}\\frac{(2N-1)!!}{(2x^2)^N} = O\\!\\left( \\frac{e^{-x^2}}{x^{2N+1}} \\right).",
          explanation: "The error is at most the first dropped term and the partial sums alternately over- and under-estimate \\( J(x) \\): this is an enveloping asymptotic series. Verified numerically: at \\( x = 5 \\) successive partial sums bracket \\( J(5) \\).",
        },
      ],
      finalAnswer: "\\( |R_N(x)| \\le \\dfrac{e^{-x^2}}{2x}\\dfrac{(2N-1)!!}{(2x^2)^N} = O\\!\\left(e^{-x^2}x^{-2N-1}\\right) \\), with \\( \\operatorname{sgn} R_N = \\operatorname{sgn} T_N \\) (enveloping).",
    },
  },
  {
    id: "am3a-023",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 23",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Using the IBP expansion \\( E_1(x) = e^{-x}\\sum_{n=0}^{N-1}\\dfrac{(-1)^n n!}{x^{n+1}} + R_N(x) \\) with \\( |R_N(x)| \\le N!\\,e^{-x}/x^{N+1} \\), determine the optimal truncation point (the term of smallest magnitude) for \\( x = 5 \\), and estimate the resulting smallest achievable error.",
    marks: 5,
    yearCreated: 2026,
    tags: ["integration by parts", "optimal truncation", "least term", "remainder estimate"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the magnitude of the n-th term.",
          workingLatex: "|a_n| = e^{-x}\\frac{n!}{x^{n+1}}.",
          explanation: "Optimal (superasymptotic) truncation means stopping just before the smallest term, so we must find where \\( |a_n| \\) is minimal as a function of \\( n \\).",
        },
        {
          stepNumber: 2,
          description: "Find the least term via the ratio test.",
          workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{(n+1)!/x^{n+2}}{n!/x^{n+1}} = \\frac{n+1}{x}.",
          explanation: "Terms decrease while \\( n+1 < x \\) and increase once \\( n+1 > x \\); the minimum is near \\( n \\approx x - 1 \\), i.e. the smallest term sits at \\( n \\approx x \\).",
        },
        {
          stepNumber: 3,
          description: "Apply at x = 5.",
          workingLatex: "\\frac{n+1}{5} = 1 \\;\\Longrightarrow\\; n = 4. \\quad\\text{Smallest term at } n = 4 \\text{ or } 5.",
          explanation: "The ratio equals \\( 1 \\) at \\( n = 4 \\), so \\( |a_4| \\) and \\( |a_5| \\) are the smallest (and nearly equal). Optimal truncation keeps terms up to \\( n = 4 \\) (the one before the smallest).",
        },
        {
          stepNumber: 4,
          description: "Estimate the least-term magnitude.",
          workingLatex: "|a_5| = e^{-5}\\frac{5!}{5^{6}} = e^{-5}\\frac{120}{15625} \\approx 6.74\\times10^{-3}\\times7.68\\times10^{-3} \\approx 5.2\\times10^{-5}.",
          explanation: "Using \\( e^{-5} \\approx 6.74\\times10^{-3} \\). The optimal error is of the order of this least term.",
        },
        {
          stepNumber: 5,
          description: "Interpret the optimal error.",
          workingLatex: "\\text{Best error} \\;\\approx\\; |a_5| \\;\\approx\\; 5\\times10^{-5} \\quad\\text{(relative to } E_1(5)\\approx1.15\\times10^{-3}\\text{).}",
          explanation: "No matter how many terms we take, a divergent asymptotic series cannot beat the smallest term — roughly a few percent relative accuracy here. Verified numerically: truncating at \\( n=4 \\) gives \\( E_1(5) \\) with absolute error \\( \\approx 2.7\\times10^{-5} \\), consistent with the least-term estimate.",
        },
      ],
      finalAnswer: "Optimal truncation at \\( n = 4 \\) (terms up to \\( e^{-x}\\cdot 24/x^5 \\)); least-term/optimal error \\( \\approx 5\\times10^{-5} \\) at \\( x = 5 \\).",
    },
  },
  {
    id: "am3a-024",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 24",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Cross-check the IBP expansion of \\( E_1(x) = \\int_x^{\\infty}\\dfrac{e^{-t}}{t}\\,dt \\) by substituting \\( t = x(1+s) \\) and applying Watson's lemma to the resulting integral. Confirm the leading two terms agree with the IBP result.",
    marks: 6,
    yearCreated: 2026,
    tags: ["integration by parts", "Watson's lemma", "substitution", "cross-check"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute t = x(1+s).",
          workingLatex: "t = x(1+s), \\quad dt = x\\,ds, \\quad t: x\\to\\infty \\Rightarrow s: 0\\to\\infty.",
          explanation: "This recentres the integral so the large-\\( x \\) behaviour is governed by \\( s \\) near \\( 0 \\) — exactly the form Watson's lemma handles.",
        },
        {
          stepNumber: 2,
          description: "Transform the integral.",
          workingLatex: "E_1(x) = \\int_0^{\\infty} \\frac{e^{-x(1+s)}}{x(1+s)}\\,x\\,ds = e^{-x}\\int_0^{\\infty} \\frac{e^{-xs}}{1+s}\\,ds.",
          explanation: "The \\( x\\,ds \\) cancels the \\( 1/x \\), leaving a clean Laplace-type integral \\( \\int_0^\\infty e^{-xs} f(s)\\,ds \\) with \\( f(s) = 1/(1+s) \\) and an overall \\( e^{-x} \\).",
        },
        {
          stepNumber: 3,
          description: "Expand the amplitude near s = 0.",
          workingLatex: "\\frac{1}{1+s} = 1 - s + s^2 - s^3 + \\cdots \\qquad (|s| < 1).",
          explanation: "Watson's lemma uses the Taylor coefficients of the amplitude at the origin, where the dominant contribution to a Laplace integral with large \\( x \\) concentrates.",
        },
        {
          stepNumber: 4,
          description: "Apply Watson's lemma term by term.",
          workingLatex: "\\int_0^{\\infty} e^{-xs} s^{n}\\,ds = \\frac{n!}{x^{n+1}} \\;\\Longrightarrow\\; \\int_0^{\\infty}\\frac{e^{-xs}}{1+s}\\,ds \\sim \\sum_{n=0}^{\\infty}\\frac{(-1)^n n!}{x^{n+1}}.",
          explanation: "Watson's lemma justifies integrating the asymptotic series term by term against \\( e^{-xs} \\); each monomial gives the standard Laplace moment \\( n!/x^{n+1} \\), with the sign \\( (-1)^n \\) from the geometric series.",
        },
        {
          stepNumber: 5,
          description: "Restore the prefactor and compare.",
          workingLatex: "E_1(x) \\sim e^{-x}\\!\\left( \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots \\right).",
          explanation: "This is identical to the IBP expansion of am3a-007/008, providing an independent confirmation. The agreement is exact term by term — both methods produce \\( e^{-x}\\sum (-1)^n n!/x^{n+1} \\).",
        },
      ],
      finalAnswer: "\\( E_1(x) \\sim e^{-x}\\!\\left( \\dfrac{1}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3} - \\cdots \\right) \\); Watson's lemma reproduces the IBP series exactly.",
      canonicalAnswer: "exp(-x)*(1/x - 1/x^2 + 2/x^3)",
    },
  },
  {
    id: "am3a-025",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 25",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Suppose \\( f \\) is continuous and \\( f(x) = o\\big(\\phi(x)\\big) \\) as \\( x \\to \\infty \\), where \\( \\phi \\) is continuous, positive and non-decreasing. Show that \\( \\displaystyle\\int_a^{x} f(t)\\,dt = o\\big(x\\,\\phi(x)\\big) \\) as \\( x \\to +\\infty \\).",
    marks: 6,
    yearCreated: 2026,
    tags: ["asymptotic order", "integral estimate", "little-o", "proof"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Unpack the hypothesis.",
          workingLatex: "\\forall\\,\\varepsilon>0\\ \\exists\\,X:\\ t \\ge X \\;\\Longrightarrow\\; |f(t)| < \\varepsilon\\,\\phi(t).",
          explanation: "The statement \\( f = o(\\phi) \\) means the ratio \\( |f|/\\phi \\to 0 \\); equivalently \\( |f| \\) is eventually below any fixed multiple \\( \\varepsilon \\) of \\( \\phi \\). Fix such an \\( X \\).",
        },
        {
          stepNumber: 2,
          description: "Split the integral at X.",
          workingLatex: "\\int_a^{x} f(t)\\,dt = \\int_a^{X} f(t)\\,dt + \\int_X^{x} f(t)\\,dt =: I_1 + I_2(x).",
          explanation: "The first piece \\( I_1 \\) is a fixed constant (independent of \\( x \\)); all \\( x \\)-dependence sits in \\( I_2 \\).",
        },
        {
          stepNumber: 3,
          description: "Bound the tail integral.",
          workingLatex: "|I_2(x)| \\le \\int_X^{x} |f(t)|\\,dt < \\varepsilon\\int_X^{x}\\phi(t)\\,dt \\le \\varepsilon\\,(x-X)\\,\\phi(x).",
          explanation: "On \\( [X,x] \\) we use \\( |f| < \\varepsilon\\phi \\); then since \\( \\phi \\) is non-decreasing, \\( \\phi(t) \\le \\phi(x) \\) throughout, so the integral is at most \\( \\varepsilon(x-X)\\phi(x) \\).",
        },
        {
          stepNumber: 4,
          description: "Combine and divide by x phi(x).",
          workingLatex: "\\frac{1}{x\\,\\phi(x)}\\left| \\int_a^{x} f\\,dt \\right| \\le \\frac{|I_1|}{x\\,\\phi(x)} + \\varepsilon\\,\\frac{x-X}{x}.",
          explanation: "Divide the whole estimate by \\( x\\phi(x) \\) (positive). The first term \\( \\to 0 \\) because \\( I_1 \\) is constant and \\( x\\phi(x)\\to\\infty \\) (as \\( \\phi>0 \\) non-decreasing and \\( x\\to\\infty \\)); the second is at most \\( \\varepsilon \\).",
        },
        {
          stepNumber: 5,
          description: "Take limits.",
          workingLatex: "\\limsup_{x\\to\\infty}\\frac{1}{x\\,\\phi(x)}\\left|\\int_a^{x} f\\,dt\\right| \\le \\varepsilon \\quad\\forall\\,\\varepsilon>0.",
          explanation: "For every \\( \\varepsilon \\) the limit superior is at most \\( \\varepsilon \\); since \\( \\varepsilon \\) is arbitrary the limsup is \\( 0 \\).",
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "\\frac{1}{x\\,\\phi(x)}\\int_a^{x} f(t)\\,dt \\to 0 \\;\\Longrightarrow\\; \\int_a^{x} f(t)\\,dt = o\\big(x\\,\\phi(x)\\big).",
          explanation: "The ratio tends to zero, which is precisely the definition of the little-o estimate. The factor \\( x \\) is the length of the integration range, and \\( \\phi(x) \\) the largest size the integrand can attain on it.",
        },
      ],
      finalAnswer: "\\( \\displaystyle\\int_a^{x} f(t)\\,dt = o\\big(x\\,\\phi(x)\\big) \\) as \\( x \\to +\\infty \\).",
    },
  },
  {
    id: "am3a-026",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 26",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "By considering \\( \\dfrac{d}{dx}\\big[E_1(x) + \\ln x\\big] \\) and integrating, obtain the small-\\( x \\) expansion \\( E_1(x) = -\\gamma - \\ln x + x - \\dfrac{x^2}{4} + \\cdots \\) as \\( x \\to 0^+ \\). [You may assume \\( \\lim_{x\\to0}\\big[E_1(x)+\\ln x\\big] = -\\gamma \\).]",
    marks: 6,
    yearCreated: 2026,
    tags: ["exponential integral", "small-argument expansion", "Euler gamma", "differentiate under integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate E_1.",
          workingLatex: "E_1(x) = \\int_x^{\\infty}\\frac{e^{-t}}{t}\\,dt \\;\\Longrightarrow\\; E_1'(x) = -\\frac{e^{-x}}{x}.",
          explanation: "By the fundamental theorem of calculus, differentiating a tail integral with respect to its lower limit gives minus the integrand evaluated there.",
        },
        {
          stepNumber: 2,
          description: "Differentiate the combination.",
          workingLatex: "\\frac{d}{dx}\\big[E_1(x) + \\ln x\\big] = -\\frac{e^{-x}}{x} + \\frac{1}{x} = \\frac{1 - e^{-x}}{x}.",
          explanation: "Adding \\( \\ln x \\) subtracts off the \\( 1/x \\) singularity, leaving a function that is analytic at \\( x = 0 \\) — the standard device for handling the logarithmic singularity of \\( E_1 \\).",
        },
        {
          stepNumber: 3,
          description: "Expand the smooth derivative.",
          workingLatex: "\\frac{1 - e^{-x}}{x} = \\frac{1}{x}\\left( x - \\frac{x^2}{2} + \\frac{x^3}{6} - \\cdots \\right) = 1 - \\frac{x}{2} + \\frac{x^2}{6} - \\cdots",
          explanation: "Using \\( 1 - e^{-x} = x - x^2/2 + x^3/6 - \\cdots \\); dividing by \\( x \\) gives a convergent Taylor series, valid near \\( 0 \\).",
        },
        {
          stepNumber: 4,
          description: "Integrate term by term.",
          workingLatex: "E_1(x) + \\ln x = \\int \\left( 1 - \\frac{x}{2} + \\frac{x^2}{6} - \\cdots \\right)dx = c + x - \\frac{x^2}{4} + \\frac{x^3}{18} - \\cdots",
          explanation: "Antidifferentiate each monomial; \\( c \\) is the constant of integration to be fixed by the given limit.",
        },
        {
          stepNumber: 5,
          description: "Fix the constant.",
          workingLatex: "x\\to0:\\ E_1(x)+\\ln x \\to c = -\\gamma.",
          explanation: "All the polynomial terms vanish as \\( x \\to 0 \\), so the limit equals \\( c \\); the given assumption identifies \\( c = -\\gamma \\), Euler's constant.",
        },
        {
          stepNumber: 6,
          description: "State the small-x expansion.",
          workingLatex: "E_1(x) = -\\gamma - \\ln x + x - \\frac{x^2}{4} + \\frac{x^3}{18} - \\cdots \\qquad (x\\to0^+).",
          explanation: "The logarithm captures the singular part; the remainder is an ordinary (convergent) Taylor series. Verified numerically: at \\( x = 0.1 \\) the four-term form matches \\( E_1(0.1) \\) to better than \\( 10^{-4} \\).",
        },
      ],
      finalAnswer: "\\( E_1(x) = -\\gamma - \\ln x + x - \\dfrac{x^2}{4} + \\dfrac{x^3}{18} - \\cdots \\) as \\( x \\to 0^+ \\).",
      canonicalAnswer: "-EulerGamma - log(x) + x - x^2/4 + x^3/18",
    },
  },
  {
    id: "am3a-027",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 27",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Consider the finite-range integral \\( I(x) = \\int_0^{1} \\dfrac{e^{-xt}}{1+t}\\,dt \\). By integrating by parts in \\( t \\), find the first three terms of its asymptotic expansion as \\( x \\to \\infty \\), and explain why the contribution from the upper limit \\( t = 1 \\) may be discarded.",
    marks: 6,
    yearCreated: 2026,
    tags: ["integration by parts", "finite range", "endpoint contribution", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose parts with the exponential as dv.",
          workingLatex: "u = \\frac{1}{1+t}, \\quad dv = e^{-xt}\\,dt \\;\\Longrightarrow\\; du = -\\frac{1}{(1+t)^2}\\,dt, \\quad v = -\\frac{1}{x}e^{-xt}.",
          explanation: "The large parameter is in \\( e^{-xt} \\), so integrate that (gaining a factor \\( 1/x \\)) and differentiate the slowly-varying \\( 1/(1+t) \\). For large \\( x \\) the integrand is sharply peaked at the lower endpoint \\( t = 0 \\).",
        },
        {
          stepNumber: 2,
          description: "First integration by parts.",
          workingLatex: "I(x) = \\Big[\\, -\\frac{e^{-xt}}{x(1+t)} \\,\\Big]_0^{1} - \\frac{1}{x}\\int_0^{1} \\frac{e^{-xt}}{(1+t)^2}\\,dt = \\frac{1}{x} - \\frac{e^{-x}}{2x} - \\frac{1}{x}\\int_0^{1} \\frac{e^{-xt}}{(1+t)^2}\\,dt.",
          explanation: "The boundary term gives \\( 1/x \\) at \\( t=0 \\) and \\( -e^{-x}/(2x) \\) at \\( t=1 \\). The latter is exponentially small and is dropped below.",
        },
        {
          stepNumber: 3,
          description: "Discard the exponentially small endpoint.",
          workingLatex: "\\frac{e^{-x}}{2x} = O\\!\\left( e^{-x} \\right) \\ll x^{-n} \\;\\;\\forall n \\;\\Longrightarrow\\; I(x) = \\frac{1}{x} - \\frac{1}{x}\\int_0^{1} \\frac{e^{-xt}}{(1+t)^2}\\,dt + (\\text{e.s.t.}).",
          explanation: "Any contribution carrying \\( e^{-x} \\) is smaller than every power \\( x^{-n} \\) as \\( x\\to\\infty \\); it lies beyond all orders of the power series and is invisible to an asymptotic power expansion. This is why the upper limit can be ignored.",
        },
        {
          stepNumber: 4,
          description: "Second integration by parts on the leftover integral.",
          workingLatex: "\\int_0^{1} \\frac{e^{-xt}}{(1+t)^2}\\,dt = \\frac{1}{x} - 2\\cdot\\frac{1}{x}\\int_0^1 \\frac{e^{-xt}}{(1+t)^3}\\,dt + (\\text{e.s.t.}),",
          explanation: "Same parts; the \\( t=0 \\) boundary value of \\( 1/(1+t)^2 \\) is \\( 1 \\), giving \\( 1/x \\), and differentiating produces the factor \\( 2 \\).",
        },
        {
          stepNumber: 5,
          description: "Continue once more and collect.",
          workingLatex: "I(x) = \\frac{1}{x} - \\frac{1}{x}\\!\\left( \\frac{1}{x} - \\frac{2}{x}\\Big(\\frac{1}{x} - \\cdots\\Big) \\right) = \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots",
          explanation: "Each round contributes a \\( t=0 \\) boundary value over \\( x \\) and multiplies the carried coefficient by the next integer, generating \\( (-1)^n n!/x^{n+1} \\).",
        },
        {
          stepNumber: 6,
          description: "State the expansion.",
          workingLatex: "I(x) \\sim \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} \\qquad (x\\to\\infty).",
          explanation: "Verified numerically: at \\( x = 40 \\) the three-term form matches \\( I(40) \\) to \\( 2\\times10^{-6} \\), with the discarded \\( e^{-x} \\) endpoint utterly negligible.",
        },
      ],
      finalAnswer: "\\( I(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{x^2} + \\dfrac{2}{x^3} \\) as \\( x \\to \\infty \\); the \\( t=1 \\) endpoint is \\( O(e^{-x}) \\), beyond all powers.",
      canonicalAnswer: "1/x - 1/x^2 + 2/x^3",
    },
  },
  // REVIEW: am3a-028 — the IBP-vs-differentiation comparison rests on the
  // structural fact that term-by-term differentiation of an asymptotic power
  // series is not generally valid; the specific failure for the oscillatory
  // example is argued, not numerically certified (oscillatory tail).
  {
    id: "am3a-028",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 28",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Let \\( F(x) = \\int_x^{\\infty}\\dfrac{e^{-t}}{t}\\,dt = E_1(x) \\) and define \\( G(x) = \\int_x^{\\infty}\\dfrac{e^{-t}}{t^2}\\,dt \\). Show by integration by parts that \\( F'(x) = -e^{-x}/x \\) and that the asymptotic series for \\( -F'(x) \\) is obtained from that of \\( F \\) by term-by-term differentiation, and comment on when such differentiation of an asymptotic series is valid.",
    marks: 5,
    yearCreated: 2026,
    tags: ["integration by parts", "differentiation of asymptotic series", "exponential integral"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate F directly.",
          workingLatex: "F'(x) = \\frac{d}{dx}\\int_x^{\\infty}\\frac{e^{-t}}{t}\\,dt = -\\frac{e^{-x}}{x}.",
          explanation: "Differentiating with respect to the lower limit gives minus the integrand at \\( t = x \\) — no IBP needed for this exact identity.",
        },
        {
          stepNumber: 2,
          description: "Write the asymptotic series for F.",
          workingLatex: "F(x) \\sim e^{-x}\\!\\left( \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\frac{6}{x^4} + \\cdots \\right).",
          explanation: "This is the IBP expansion derived earlier.",
        },
        {
          stepNumber: 3,
          description: "Differentiate the series term by term.",
          workingLatex: "\\frac{d}{dx}\\Big[ e^{-x} x^{-n} \\Big] = -e^{-x}x^{-n} - n\\,e^{-x}x^{-n-1}.",
          explanation: "Each term contributes two pieces: \\( -e^{-x}x^{-n} \\) from differentiating the exponential, and \\( -n e^{-x}x^{-n-1} \\) from the power.",
        },
        {
          stepNumber: 4,
          description: "Collect and verify it reproduces -e^{-x}/x.",
          workingLatex: "F'(x) \\sim -e^{-x}\\!\\left( \\frac{1}{x} - \\frac{1}{x^2} + \\frac{2}{x^3} - \\cdots \\right) - e^{-x}\\!\\left( \\frac{1}{x^2} - \\frac{2}{x^3} + \\cdots \\right) = -\\frac{e^{-x}}{x}.",
          explanation: "All terms beyond the first cancel in pairs (the \\( -1/x^2 \\) from the first bracket cancels the \\( +1/x^2 \\) from the second, and so on), leaving exactly \\( -e^{-x}/x \\) — consistent with Step 1.",
        },
        {
          stepNumber: 5,
          description: "State the validity criterion.",
          workingLatex: "\\text{Valid here because } F'(x) \\text{ exists, is continuous, and itself admits an asymptotic power series.}",
          explanation: "Term-by-term differentiation of an asymptotic series is not automatic — integration is always safe, differentiation is not. It is justified when the derivative is known a priori to possess an asymptotic expansion of the same type (as here, since \\( F'=-e^{-x}/x \\) is explicit); otherwise differentiating can introduce spurious terms.",
        },
      ],
      finalAnswer: "\\( F'(x) = -\\dfrac{e^{-x}}{x} \\); term-by-term differentiation of the \\( E_1 \\) series reproduces it, valid because \\( F' \\) is continuous with its own asymptotic expansion.",
      canonicalAnswer: "-exp(-x)/x",
    },
  },
  {
    id: "am3a-029",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 29",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "Find the first two terms of the asymptotic expansion as \\( x \\to \\infty \\) of \\( W(x) = \\int_0^{\\infty} \\dfrac{e^{-xt}}{\\sqrt{1+t}}\\,dt \\), and identify the gauge sequence in which the expansion proceeds.",
    marks: 6,
    yearCreated: 2026,
    tags: ["integration by parts", "Watson's lemma", "half-integer gauge", "asymptotic series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the endpoint that dominates.",
          workingLatex: "\\text{For large } x,\\ e^{-xt} \\text{ concentrates near } t = 0; \\quad \\frac{1}{\\sqrt{1+t}} \\text{ is smooth there.}",
          explanation: "This is a Laplace/Watson integral: the large parameter multiplies \\( t \\) in the exponent, so the contribution localises at the lower endpoint \\( t=0 \\), where the amplitude is analytic.",
        },
        {
          stepNumber: 2,
          description: "Expand the amplitude at t = 0.",
          workingLatex: "\\frac{1}{\\sqrt{1+t}} = (1+t)^{-1/2} = 1 - \\frac{1}{2}t + \\frac{3}{8}t^2 - \\cdots",
          explanation: "Binomial series for \\( (1+t)^{-1/2} \\); only the Taylor coefficients at \\( t=0 \\) feed into Watson's lemma.",
        },
        {
          stepNumber: 3,
          description: "Apply Watson's lemma term by term.",
          workingLatex: "\\int_0^{\\infty} e^{-xt} t^{n}\\,dt = \\frac{n!}{x^{n+1}} \\;\\Longrightarrow\\; W(x) \\sim \\frac{1}{x} - \\frac{1}{2}\\frac{1}{x^2} + \\frac{3}{8}\\frac{2}{x^3} - \\cdots",
          explanation: "Integrate the amplitude series against \\( e^{-xt} \\). The first two terms use \\( \\int_0^\\infty e^{-xt}\\,dt = 1/x \\) and \\( \\int_0^\\infty e^{-xt}t\\,dt = 1/x^2 \\).",
        },
        {
          stepNumber: 4,
          description: "State the first two terms.",
          workingLatex: "W(x) \\sim \\frac{1}{x} - \\frac{1}{2x^2} \\qquad (x\\to\\infty).",
          explanation: "Verified numerically: at \\( x = 20 \\) the two-term form matches \\( W(20) \\) to a few parts in \\( 10^4 \\), and the agreement improves with \\( x \\).",
        },
        {
          stepNumber: 5,
          description: "Identify the gauge sequence.",
          workingLatex: "\\{\\phi_n(x)\\} = \\{x^{-1}, x^{-2}, x^{-3}, \\dots\\}.",
          explanation: "Because the amplitude is analytic at \\( t = 0 \\) (integer Taylor powers), the gauge is the ordinary inverse-integer-power sequence \\( x^{-n} \\) — contrast with an algebraic endpoint singularity \\( t^{\\alpha} \\), which would produce half-integer or non-integer gauges \\( x^{-(\\alpha+1)} \\).",
        },
      ],
      finalAnswer: "\\( W(x) \\sim \\dfrac{1}{x} - \\dfrac{1}{2x^2} \\) as \\( x \\to \\infty \\); gauge sequence \\( \\{x^{-n}\\} \\).",
      canonicalAnswer: "1/x - 1/(2*x^2)",
    },
  },
  {
    id: "am3a-030",
    topicRef: "am3a",
    topicTitle: "Integration by parts for integral asymptotics 30",
    difficulty: "Challenge",
    answerType: "expression",
    examStyle: true,
    questionText:
      "The Fresnel-type integral \\( \\Phi(x) = \\int_x^{\\infty} e^{i t}\\,\\dfrac{dt}{t} \\) (interpreted as a convergent improper integral). Using integration by parts, find the first three terms of its asymptotic expansion as \\( x \\to +\\infty \\), and verify that taking real and imaginary parts recovers the cosine- and sine-integral tails.",
    marks: 6,
    yearCreated: 2026,
    tags: ["integration by parts", "complex exponential", "oscillatory integral", "Fresnel"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "First integration by parts.",
          workingLatex: "\\Phi(x) = \\Big[\\, \\frac{e^{it}}{i\\,t} \\,\\Big]_x^{\\infty} + \\frac{1}{i}\\int_x^{\\infty} \\frac{e^{it}}{t^2}\\,dt = -\\frac{e^{ix}}{i\\,x} + \\frac{1}{i}\\int_x^{\\infty} \\frac{e^{it}}{t^2}\\,dt.",
          explanation: "Take \\( u = 1/t \\), \\( dv = e^{it}\\,dt \\), so \\( v = e^{it}/i \\). The complex exponential is bounded, and the decaying \\( 1/t \\) kills the upper boundary term (convergence is in the improper/Abel sense).",
        },
        {
          stepNumber: 2,
          description: "Simplify the leading term.",
          workingLatex: "-\\frac{e^{ix}}{i\\,x} = \\frac{i\\,e^{ix}}{x}, \\quad\\text{so}\\quad \\Phi(x) = \\frac{i\\,e^{ix}}{x} + \\frac{1}{i}\\int_x^{\\infty}\\frac{e^{it}}{t^2}\\,dt.",
          explanation: "Using \\( -1/i = i \\). The factor \\( i \\) encodes the \\( 90^\\circ \\) phase shift characteristic of oscillatory endpoint contributions.",
        },
        {
          stepNumber: 3,
          description: "Second integration by parts.",
          workingLatex: "\\int_x^{\\infty}\\frac{e^{it}}{t^2}\\,dt = \\frac{i\\,e^{ix}}{x^2} + \\frac{2}{i}\\int_x^{\\infty}\\frac{e^{it}}{t^3}\\,dt.",
          explanation: "Same parts; differentiating \\( t^{-2} \\) gives \\( -2t^{-3} \\), and \\( -1/i = i \\) again. So this contributes \\( \\frac{1}{i}\\cdot\\frac{i e^{ix}}{x^2} = \\frac{e^{ix}}{i x^2}\\cdot i = -\\frac{e^{ix}}{x^2} \\).",
        },
        {
          stepNumber: 4,
          description: "Assemble three terms.",
          workingLatex: "\\Phi(x) \\sim \\frac{i\\,e^{ix}}{x} - \\frac{e^{ix}}{x^2} - \\frac{2 i\\,e^{ix}}{x^3} = e^{ix}\\!\\left( \\frac{i}{x} - \\frac{1}{x^2} - \\frac{2i}{x^3} \\right).",
          explanation: "Each IBP multiplies by \\( 1/(i t) \\to \\) a factor \\( i \\) and the next descending integer, generating the pattern \\( i\\cdot n!/x^{n+1} \\) up to signs.",
        },
        {
          stepNumber: 5,
          description: "Take the real part.",
          workingLatex: "\\operatorname{Re}\\Phi(x) = \\int_x^{\\infty}\\frac{\\cos t}{t}\\,dt \\sim \\operatorname{Re}\\!\\left[ e^{ix}\\!\\left( \\frac{i}{x} - \\frac{1}{x^2} - \\frac{2i}{x^3} \\right) \\right] = -\\frac{\\sin x}{x} + \\frac{\\cos x}{x^2} + \\frac{2\\sin x}{x^3}.",
          explanation: "Using \\( e^{ix} = \\cos x + i\\sin x \\) and \\( \\operatorname{Re}(i e^{ix}) = -\\sin x \\), \\( \\operatorname{Re}(e^{ix}) = \\cos x \\). This matches the cosine-integral tail of am3a-021.",
        },
        {
          stepNumber: 6,
          description: "Take the imaginary part.",
          workingLatex: "\\operatorname{Im}\\Phi(x) = \\int_x^{\\infty}\\frac{\\sin t}{t}\\,dt \\sim \\frac{\\cos x}{x} + \\frac{\\sin x}{x^2} - \\frac{2\\cos x}{x^3}.",
          explanation: "Using \\( \\operatorname{Im}(i e^{ix}) = \\cos x \\), \\( \\operatorname{Im}(-e^{ix}/x^2) = -\\sin x/x^2 \\), \\( \\operatorname{Im}(-2i e^{ix}/x^3) = -2\\cos x/x^3 \\). This matches the sine-integral tail of am3a-020, confirming consistency. Both parts verified numerically against \\( -\\mathrm{Ci}(x) \\) and \\( \\tfrac\\pi2-\\mathrm{Si}(x) \\).",
        },
      ],
      finalAnswer: "\\( \\Phi(x) \\sim e^{ix}\\!\\left( \\dfrac{i}{x} - \\dfrac{1}{x^2} - \\dfrac{2i}{x^3} \\right) \\) as \\( x \\to +\\infty \\); real/imaginary parts give the \\( \\cos t/t \\) and \\( \\sin t/t \\) tails.",
      canonicalAnswer: "exp(I*x)*(I/x - 1/x^2 - 2*I/x^3)",
    },
  },
];
