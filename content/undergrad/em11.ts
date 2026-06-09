import { Question } from "@/lib/types";

/**
 * Topic: Fourier Series
 * Ref:   em11  (Undergraduate Engineering Mathematics)  prereq: em05, em07
 *
 * 20 questions — 6 Foundation, 9 Standard, 5 Challenge.
 * Even/odd symmetry, the coefficient formulas, computing a0/an/bn for x, x²,
 * |x|, square and sawtooth waves, half-range sine/cosine series, the full
 * series, and the Basel-sum application. Authored analytically (no diagrams).
 *
 * Convention: f(x)=\tfrac{a_0}{2}+\sum_{n\ge1}(a_n\cos nx+b_n\sin nx) on (-π,π),
 * with a_n=\tfrac1π∫_{-π}^{π} f\cos nx\,dx, b_n=\tfrac1π∫_{-π}^{π} f\sin nx\,dx.
 */
export const questions: Question[] = [
  // ───────────────────────── Foundation (6) ─────────────────────────
  {
    id: "em11-001",
    topicRef: "em11",
    topicTitle: "Fourier Series 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "State the value of the coefficients \\( b_{n} \\) in the Fourier series of an even function.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "An even function has no sine terms.",
          workingLatex: "b_{n}=0\\ \\text{for all }n",
          explanation: "\\( f(x)\\sin nx \\) is odd, so it integrates to zero over \\( (-\\pi,\\pi) \\).",
        },
      ],
      finalAnswer: "\\( b_{n}=0 \\)",
      canonicalAnswer: "0",
    },
  },
  {
    id: "em11-002",
    topicRef: "em11",
    topicTitle: "Fourier Series 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "State which Fourier coefficients vanish for an odd function.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "An odd function has no constant or cosine terms.",
          workingLatex: "a_{0}=0\\ \\text{and}\\ a_{n}=0",
          explanation: "Only sine terms survive.",
        },
      ],
      finalAnswer: "\\( a_{0}=0 \\) and \\( a_{n}=0 \\)",
      canonicalAnswer: "a_0=0, a_n=0",
    },
  },
  {
    id: "em11-003",
    topicRef: "em11",
    topicTitle: "Fourier Series 03",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Find \\( a_{0} \\) for \\( f(x)=x \\) on \\( (-\\pi,\\pi) \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "\\( a_{0}=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} x\\,dx \\); the integrand is odd.",
          workingLatex: "a_{0}=\\frac{1}{\\pi}\\cdot 0=0",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 0 \\)",
      canonicalAnswer: "0",
    },
  },
  {
    id: "em11-004",
    topicRef: "em11",
    topicTitle: "Fourier Series 04",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find \\( a_{0} \\) for \\( f(x)=x^{2} \\) on \\( (-\\pi,\\pi) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the even symmetry to halve the range.",
          workingLatex: "a_{0}=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} x^{2}\\,dx=\\frac{2}{\\pi}\\int_{0}^{\\pi} x^{2}\\,dx",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Integrate.",
          workingLatex: "\\frac{2}{\\pi}\\cdot\\frac{\\pi^{3}}{3}=\\frac{2\\pi^{2}}{3}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{2\\pi^{2}}{3} \\)",
      canonicalAnswer: "2*pi^2/3",
    },
  },
  {
    id: "em11-005",
    topicRef: "em11",
    topicTitle: "Fourier Series 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "State whether \\( f(x)=x^{3} \\) is even or odd.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check \\( f(-x) \\).",
          workingLatex: "(-x)^{3}=-x^{3}=-f(x)",
          explanation: "",
        },
      ],
      finalAnswer: "Odd",
      canonicalAnswer: "odd",
    },
  },
  {
    id: "em11-006",
    topicRef: "em11",
    topicTitle: "Fourier Series 06",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "State the fundamental period of \\( f(x)=\\sin 2x \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "period"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Period of \\( \\sin kx \\) is \\( \\frac{2\\pi}{k} \\).",
          workingLatex: "T=\\frac{2\\pi}{2}=\\pi",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\pi \\)",
      canonicalAnswer: "pi",
    },
  },

  // ───────────────────────── Standard (9) ─────────────────────────
  {
    id: "em11-007",
    topicRef: "em11",
    topicTitle: "Fourier Series 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( b_{n} \\) for \\( f(x)=x \\) on \\( (-\\pi,\\pi) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "coefficient", "odd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the integral; the integrand is even.",
          workingLatex: "b_{n}=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} x\\sin nx\\,dx=\\frac{2}{\\pi}\\int_{0}^{\\pi} x\\sin nx\\,dx",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts.",
          workingLatex: "\\frac{2}{\\pi}\\left[-\\frac{x\\cos nx}{n}+\\frac{\\sin nx}{n^{2}}\\right]_{0}^{\\pi}=\\frac{2}{\\pi}\\left(-\\frac{\\pi(-1)^{n}}{n}\\right)",
          explanation: "\\( \\sin n\\pi=0 \\), \\( \\cos n\\pi=(-1)^{n} \\).",
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "b_{n}=\\frac{2(-1)^{n+1}}{n}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( b_{n}=\\dfrac{2(-1)^{n+1}}{n} \\)",
      canonicalAnswer: "2*(-1)^(n+1)/n",
    },
  },
  {
    id: "em11-008",
    topicRef: "em11",
    topicTitle: "Fourier Series 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( a_{n} \\) for \\( f(x)=x^{2} \\) on \\( (-\\pi,\\pi) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "coefficient", "even"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Even integrand.",
          workingLatex: "a_{n}=\\frac{2}{\\pi}\\int_{0}^{\\pi} x^{2}\\cos nx\\,dx",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Integrate by parts twice.",
          workingLatex: "\\frac{2}{\\pi}\\left[\\frac{x^{2}\\sin nx}{n}+\\frac{2x\\cos nx}{n^{2}}-\\frac{2\\sin nx}{n^{3}}\\right]_{0}^{\\pi}=\\frac{2}{\\pi}\\cdot\\frac{2\\pi(-1)^{n}}{n^{2}}",
          explanation: "Only the \\( \\frac{2x\\cos nx}{n^{2}} \\) term survives at the limits.",
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "a_{n}=\\frac{4(-1)^{n}}{n^{2}}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( a_{n}=\\dfrac{4(-1)^{n}}{n^{2}} \\)",
      canonicalAnswer: "4*(-1)^n/n^2",
    },
  },
  {
    id: "em11-009",
    topicRef: "em11",
    topicTitle: "Fourier Series 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write the full Fourier series of \\( f(x)=x^{2} \\) on \\( (-\\pi,\\pi) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use \\( a_{0}=\\frac{2\\pi^{2}}{3} \\) and \\( a_{n}=\\frac{4(-1)^{n}}{n^{2}} \\), \\( b_{n}=0 \\).",
          workingLatex: "f(x)=\\frac{a_{0}}{2}+\\sum_{n\\ge1} a_{n}\\cos nx",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Substitute.",
          workingLatex: "x^{2}=\\frac{\\pi^{2}}{3}+\\sum_{n=1}^{\\infty}\\frac{4(-1)^{n}}{n^{2}}\\cos nx",
          explanation: "",
        },
      ],
      finalAnswer: "\\( x^{2}=\\dfrac{\\pi^{2}}{3}+\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{4(-1)^{n}}{n^{2}}\\cos nx \\)",
      canonicalAnswer: "pi^2/3 + sum 4*(-1)^n/n^2 * cos(n*x)",
    },
  },
  {
    id: "em11-010",
    topicRef: "em11",
    topicTitle: "Fourier Series 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A square wave has \\( f(x)=-1 \\) on \\( (-\\pi,0) \\) and \\( f(x)=1 \\) on \\( (0,\\pi) \\). Find \\( b_{n} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "square wave", "odd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The function is odd, so use \\( b_{n}=\\frac{2}{\\pi}\\int_{0}^{\\pi}\\sin nx\\,dx \\).",
          workingLatex: "b_{n}=\\frac{2}{\\pi}\\left[-\\frac{\\cos nx}{n}\\right]_{0}^{\\pi}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate.",
          workingLatex: "\\frac{2}{\\pi}\\cdot\\frac{1-(-1)^{n}}{n}=\\frac{2(1-(-1)^{n})}{n\\pi}",
          explanation: "Zero for even \\( n \\); \\( \\frac{4}{n\\pi} \\) for odd \\( n \\).",
        },
      ],
      finalAnswer: "\\( b_{n}=\\dfrac{2\\left(1-(-1)^{n}\\right)}{n\\pi} \\)",
      canonicalAnswer: "2*(1-(-1)^n)/(n*pi)",
    },
  },
  {
    id: "em11-011",
    topicRef: "em11",
    topicTitle: "Fourier Series 11",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find \\( a_{0} \\) for \\( f(x)=x \\) on \\( (0,2\\pi) \\) with period \\( 2\\pi \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "coefficient", "sawtooth"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "\\( a_{0}=\\frac{1}{\\pi}\\int_{0}^{2\\pi} x\\,dx \\).",
          workingLatex: "\\frac{1}{\\pi}\\left[\\frac{x^{2}}{2}\\right]_{0}^{2\\pi}=\\frac{1}{\\pi}\\cdot 2\\pi^{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "a_{0}=2\\pi",
          explanation: "",
        },
      ],
      finalAnswer: "\\( 2\\pi \\)",
      canonicalAnswer: "2*pi",
    },
  },
  {
    id: "em11-012",
    topicRef: "em11",
    topicTitle: "Fourier Series 12",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText: "Find \\( a_{0} \\) for \\( f(x)=|x| \\) on \\( (-\\pi,\\pi) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "coefficient", "even"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Even function.",
          workingLatex: "a_{0}=\\frac{2}{\\pi}\\int_{0}^{\\pi} x\\,dx=\\frac{2}{\\pi}\\cdot\\frac{\\pi^{2}}{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Simplify.",
          workingLatex: "a_{0}=\\pi",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\pi \\)",
      canonicalAnswer: "pi",
    },
  },
  {
    id: "em11-013",
    topicRef: "em11",
    topicTitle: "Fourier Series 13",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Using \\( a_{n}=\\dfrac{4(-1)^{n}}{n^{2}} \\) for \\( f(x)=x^{2} \\), find \\( a_{1} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute \\( n=1 \\).",
          workingLatex: "a_{1}=\\frac{4(-1)^{1}}{1^{2}}=-4",
          explanation: "",
        },
      ],
      finalAnswer: "\\( -4 \\)",
      canonicalAnswer: "-4",
    },
  },
  {
    id: "em11-014",
    topicRef: "em11",
    topicTitle: "Fourier Series 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "For a function of period \\( 2L \\), state the formula for \\( b_{n} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["fourier", "general period"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Replace \\( x \\) by \\( \\frac{\\pi x}{L} \\) in the period-\\( 2\\pi \\) formula.",
          workingLatex: "b_{n}=\\frac{1}{L}\\int_{-L}^{L} f(x)\\sin\\!\\frac{n\\pi x}{L}\\,dx",
          explanation: "",
        },
      ],
      finalAnswer: "\\( b_{n}=\\dfrac{1}{L}\\displaystyle\\int_{-L}^{L} f(x)\\sin\\!\\dfrac{n\\pi x}{L}\\,dx \\)",
      canonicalAnswer: "(1/L)*integral f(x)*sin(n*pi*x/L) dx",
    },
  },
  {
    id: "em11-015",
    topicRef: "em11",
    topicTitle: "Fourier Series 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the half-range cosine coefficients \\( a_{n} \\) (\\( n\\ge1 \\)) for \\( f(x)=x \\) on \\( (0,\\pi) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "half range", "cosine"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Half-range cosine: \\( a_{n}=\\frac{2}{\\pi}\\int_{0}^{\\pi} x\\cos nx\\,dx \\).",
          workingLatex: "\\frac{2}{\\pi}\\left[\\frac{x\\sin nx}{n}+\\frac{\\cos nx}{n^{2}}\\right]_{0}^{\\pi}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Evaluate at the limits.",
          workingLatex: "\\frac{2}{\\pi}\\cdot\\frac{(-1)^{n}-1}{n^{2}}",
          explanation: "Zero for even \\( n \\); \\( -\\frac{4}{\\pi n^{2}} \\) for odd \\( n \\).",
        },
      ],
      finalAnswer: "\\( a_{n}=\\dfrac{2\\left((-1)^{n}-1\\right)}{\\pi n^{2}} \\)",
      canonicalAnswer: "2*((-1)^n-1)/(pi*n^2)",
    },
  },

  // ───────────────────────── Challenge (5) ─────────────────────────
  {
    id: "em11-016",
    topicRef: "em11",
    topicTitle: "Fourier Series 16",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Write the full Fourier series of the square wave \\( f(x)=-1 \\) on \\( (-\\pi,0) \\), \\( f(x)=1 \\) on \\( (0,\\pi) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "square wave", "series"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Odd function: only sine terms, with \\( b_{n}=\\frac{4}{n\\pi} \\) for odd \\( n \\).",
          workingLatex: "f(x)=\\sum_{n\\ \\text{odd}}\\frac{4}{n\\pi}\\sin nx",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Write out the first terms.",
          workingLatex: "\\frac{4}{\\pi}\\left(\\sin x+\\frac{\\sin 3x}{3}+\\frac{\\sin 5x}{5}+\\cdots\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{4}{\\pi}\\displaystyle\\sum_{k=0}^{\\infty}\\dfrac{\\sin((2k+1)x)}{2k+1} \\)",
      canonicalAnswer: "(4/pi)*sum sin((2k+1)x)/(2k+1)",
    },
  },
  {
    id: "em11-017",
    topicRef: "em11",
    topicTitle: "Fourier Series 17",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "By evaluating the Fourier series of \\( f(x)=x^{2} \\) at \\( x=\\pi \\), find \\( \\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "basel", "series sum"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Put \\( x=\\pi \\) into the series, where \\( \\cos n\\pi=(-1)^{n} \\).",
          workingLatex: "\\pi^{2}=\\frac{\\pi^{2}}{3}+\\sum_{n=1}^{\\infty}\\frac{4(-1)^{n}}{n^{2}}(-1)^{n}=\\frac{\\pi^{2}}{3}+\\sum_{n=1}^{\\infty}\\frac{4}{n^{2}}",
          explanation: "\\( (-1)^{n}(-1)^{n}=1 \\).",
        },
        {
          stepNumber: 2,
          description: "Rearrange.",
          workingLatex: "\\sum_{n=1}^{\\infty}\\frac{4}{n^{2}}=\\pi^{2}-\\frac{\\pi^{2}}{3}=\\frac{2\\pi^{2}}{3}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "Divide by 4.",
          workingLatex: "\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}=\\frac{\\pi^{2}}{6}",
          explanation: "",
        },
      ],
      finalAnswer: "\\( \\dfrac{\\pi^{2}}{6} \\)",
      canonicalAnswer: "pi^2/6",
    },
  },
  {
    id: "em11-018",
    topicRef: "em11",
    topicTitle: "Fourier Series 18",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Write the full Fourier series of \\( f(x)=x \\) on \\( (-\\pi,\\pi) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "series", "odd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Odd function: only sine terms with \\( b_{n}=\\frac{2(-1)^{n+1}}{n} \\).",
          workingLatex: "f(x)=\\sum_{n=1}^{\\infty}\\frac{2(-1)^{n+1}}{n}\\sin nx",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Write out the first terms.",
          workingLatex: "2\\left(\\sin x-\\frac{\\sin 2x}{2}+\\frac{\\sin 3x}{3}-\\cdots\\right)",
          explanation: "",
        },
      ],
      finalAnswer: "\\( x=\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{2(-1)^{n+1}}{n}\\sin nx \\)",
      canonicalAnswer: "sum 2*(-1)^(n+1)/n * sin(n*x)",
    },
  },
  {
    id: "em11-019",
    topicRef: "em11",
    topicTitle: "Fourier Series 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the half-range sine series coefficients \\( b_{n} \\) for \\( f(x)=1 \\) on \\( (0,\\pi) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "half range", "sine"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Half-range sine: \\( b_{n}=\\frac{2}{\\pi}\\int_{0}^{\\pi}\\sin nx\\,dx \\).",
          workingLatex: "\\frac{2}{\\pi}\\left[-\\frac{\\cos nx}{n}\\right]_{0}^{\\pi}=\\frac{2(1-(-1)^{n})}{n\\pi}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "Interpret.",
          workingLatex: "b_{n}=\\frac{4}{n\\pi}\\ (n\\ \\text{odd}),\\qquad b_{n}=0\\ (n\\ \\text{even})",
          explanation: "",
        },
      ],
      finalAnswer: "\\( b_{n}=\\dfrac{2(1-(-1)^{n})}{n\\pi} \\)",
      canonicalAnswer: "2*(1-(-1)^n)/(n*pi)",
    },
  },
  {
    id: "em11-020",
    topicRef: "em11",
    topicTitle: "Fourier Series 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( f(x)=0 \\) on \\( (-\\pi,0) \\) and \\( f(x)=x \\) on \\( (0,\\pi) \\), find \\( a_{0} \\), \\( a_{1} \\) and \\( b_{1} \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["fourier", "coefficient", "piecewise"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Only \\( (0,\\pi) \\) contributes. \\( a_{0}=\\frac{1}{\\pi}\\int_{0}^{\\pi} x\\,dx \\).",
          workingLatex: "a_{0}=\\frac{1}{\\pi}\\cdot\\frac{\\pi^{2}}{2}=\\frac{\\pi}{2}",
          explanation: "",
        },
        {
          stepNumber: 2,
          description: "\\( a_{1}=\\frac{1}{\\pi}\\int_{0}^{\\pi} x\\cos x\\,dx=\\frac{1}{\\pi}\\left[x\\sin x+\\cos x\\right]_{0}^{\\pi} \\).",
          workingLatex: "\\frac{1}{\\pi}\\left[(0-1)-(0+1)\\right]=-\\frac{2}{\\pi}",
          explanation: "",
        },
        {
          stepNumber: 3,
          description: "\\( b_{1}=\\frac{1}{\\pi}\\int_{0}^{\\pi} x\\sin x\\,dx=\\frac{1}{\\pi}\\left[-x\\cos x+\\sin x\\right]_{0}^{\\pi} \\).",
          workingLatex: "\\frac{1}{\\pi}\\left[\\pi-0\\right]=1",
          explanation: "",
        },
      ],
      finalAnswer: "\\( a_{0}=\\dfrac{\\pi}{2},\\ a_{1}=-\\dfrac{2}{\\pi},\\ b_{1}=1 \\)",
      canonicalAnswer: "a_0=pi/2, a_1=-2/pi, b_1=1",
    },
  },
];
