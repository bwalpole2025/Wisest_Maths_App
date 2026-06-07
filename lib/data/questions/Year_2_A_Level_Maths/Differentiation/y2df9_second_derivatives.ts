import { Question } from "@/lib/types";

/**
 * Year 2 — Differentiation § 9.9 Using Second Derivatives
 * Ref: y2df9
 * 71 questions. Compute \( f'' \), classify stationary points (max/min/inflection),
 * and analyse concavity.
 */
export const questions: Question[] = [
  {
    id: "y2df9-001",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 01",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = x^3 - 3x \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary", "second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate to find the gradient function.",
          workingLatex: "y' = 3x^2 - 3",
          explanation: "Power rule term-by-term: \\(\\tfrac{d}{dx}(x^3) = 3x^2\\) and \\(\\tfrac{d}{dx}(-3x) = -3\\). Stationary points occur where \\(y' = 0\\)."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\) to locate the stationary \\(x\\)-values.",
          workingLatex: "3x^2 - 3 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1",
          explanation: "Factor out 3 and solve the quadratic. There are two stationary points, at \\(x = 1\\) and \\(x = -1\\)."
        },
        {
          stepNumber: 3,
          description: "Compute the \\(y\\)-coordinates by substituting back into \\(y = x^3 - 3x\\).",
          workingLatex: "y(1) = 1 - 3 = -2,\\quad y(-1) = -1 + 3 = 2",
          explanation: "The stationary points are \\((1, -2)\\) and \\((-1, 2)\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate again to obtain the second derivative.",
          workingLatex: "y'' = 6x",
          explanation: "The second derivative measures concavity; its sign at a stationary point determines whether the point is a maximum or a minimum."
        },
        {
          stepNumber: 5,
          description: "Apply the second-derivative test at each stationary point.",
          workingLatex: "y''(1) = 6 > 0 \\Rightarrow \\text{minimum};\\quad y''(-1) = -6 < 0 \\Rightarrow \\text{maximum}",
          explanation: "Positive \\(y''\\) means the curve is concave up (a local minimum); negative \\(y''\\) means concave down (a local maximum)."
        },
        {
          stepNumber: 6,
          description: "State the classification.",
          workingLatex: "\\text{Min at }(1, -2);\\quad \\text{Max at }(-1, 2)",
          explanation: "These are the two turning points of the cubic, with the maximum to the left of the minimum as expected for a positive-leading cubic."
        },
        {
          stepNumber: 7,
          description: "Cross-check with the first-derivative sign test.",
          workingLatex: "y'(-2) = 9>0;\\; y'(0) = -3<0;\\; y'(2) = 9>0",
          explanation: "Gradient changes from positive to negative at \\(x = -1\\) (confirming the maximum) and from negative to positive at \\(x = 1\\) (confirming the minimum)."
        }
      ],
      finalAnswer: "Minimum at \\((1, -2)\\); maximum at \\((-1, 2)\\)."
    }
  },
  // ── Basic second derivatives ────
  {
    id: "y2df9-002",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) when \\( y = x^4 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the power rule: \\(\\tfrac{d}{dx}(x^n) = nx^{n-1}\\).",
          workingLatex: "y = x^4",
          explanation: "We will apply the power rule twice in succession to find the second derivative \\(y''\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate once to obtain \\(y'\\).",
          workingLatex: "y' = 4x^3",
          explanation: "Multiply by the exponent (4) and reduce the exponent by 1."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(y'\\) using the power rule again.",
          workingLatex: "y'' = \\tfrac{d}{dx}(4x^3) = 12x^2",
          explanation: "The coefficient 4 multiplies the new exponent 3, giving 12; the exponent drops to 2."
        },
        {
          stepNumber: 4,
          description: "Sanity check: \\(y''\\) is non-negative for all \\(x\\).",
          workingLatex: "12x^2 \\ge 0",
          explanation: "The curve \\(y = x^4\\) is concave up everywhere, which agrees with \\(y'' \\ge 0\\). Note that \\(y''(0) = 0\\) yet \\(x = 0\\) is a minimum (not an inflection) — a useful caution."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 12x^2",
          explanation: "This is the second derivative."
        }
      ],
      finalAnswer: "\\( 12x^2 \\)"
    }
  },
  {
    id: "y2df9-003",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) when \\( y = x^5 - 2x^3 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the polynomial.",
          workingLatex: "y = x^5 - 2x^3",
          explanation: "We differentiate term-by-term using the power rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = 5x^4 - 6x^2",
          explanation: "\\(\\tfrac{d}{dx}(x^5) = 5x^4\\) and \\(\\tfrac{d}{dx}(-2x^3) = -6x^2\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 20x^3 - 12x",
          explanation: "\\(\\tfrac{d}{dx}(5x^4) = 20x^3\\) and \\(\\tfrac{d}{dx}(-6x^2) = -12x\\)."
        },
        {
          stepNumber: 4,
          description: "Factor for a cleaner form (optional).",
          workingLatex: "y'' = 4x(5x^2 - 3)",
          explanation: "Factoring is helpful if we later want to find where \\(y'' = 0\\) (candidates for inflection points)."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 20x^3 - 12x",
          explanation: "Either form is acceptable."
        }
      ],
      finalAnswer: "\\( 20x^3 - 12x \\)"
    }
  },
  {
    id: "y2df9-004",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) when \\( y = 3x^2 + 5x - 1 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down the quadratic.",
          workingLatex: "y = 3x^2 + 5x - 1",
          explanation: "Differentiate term-by-term; constants vanish."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = 6x + 5",
          explanation: "Power rule gives \\(\\tfrac{d}{dx}(3x^2) = 6x\\); the linear term differentiates to 5; the constant \\(-1\\) vanishes."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 6",
          explanation: "The derivative of \\(6x\\) is 6; the constant 5 vanishes."
        },
        {
          stepNumber: 4,
          description: "Interpret the result.",
          workingLatex: "y'' = 6 > 0",
          explanation: "Because \\(y''\\) is a positive constant, the parabola is concave up everywhere — the expected shape for a positive-leading quadratic."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 6",
          explanation: "A constant second derivative is typical for quadratics."
        }
      ],
      finalAnswer: "\\( 6 \\)"
    }
  },
  {
    id: "y2df9-005",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 05",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) when \\( y = \\tfrac{1}{x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite using a negative exponent.",
          workingLatex: "y = x^{-1}",
          explanation: "Expressing as a power makes the power rule directly applicable."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = -x^{-2}",
          explanation: "Multiply by the exponent \\(-1\\); reduce the exponent by 1 to get \\(-2\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = (-1)(-2)x^{-3} = 2x^{-3}",
          explanation: "Multiply by the exponent \\(-2\\); reduce the exponent by 1 to get \\(-3\\)."
        },
        {
          stepNumber: 4,
          description: "Rewrite as a fraction.",
          workingLatex: "y'' = \\dfrac{2}{x^3}",
          explanation: "Negative exponents convert back to denominators for a tidier presentation."
        },
        {
          stepNumber: 5,
          description: "Interpret.",
          workingLatex: "y'' > 0 \\text{ for } x>0;\\; y'' < 0 \\text{ for } x<0",
          explanation: "So \\(y = 1/x\\) is concave up on \\((0,\\infty)\\) and concave down on \\((-\\infty, 0)\\)."
        },
        {
          stepNumber: 6,
          description: "Pattern note.",
          workingLatex: "\\tfrac{d^n}{dx^n}\\!\\left(\\tfrac{1}{x}\\right) = \\dfrac{(-1)^n n!}{x^{n+1}}",
          explanation: "For \\(n = 2\\) this gives \\(2/x^3\\), matching our result."
        },
        {
          stepNumber: 7,
          description: "State the final answer.",
          workingLatex: "y'' = \\dfrac{2}{x^3}",
          explanation: "Note that \\(y''\\) is undefined at \\(x = 0\\), in line with the domain of \\(y\\)."
        }
      ],
      finalAnswer: "\\( \\tfrac{2}{x^3} \\)"
    }
  },
  {
    id: "y2df9-006",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 06",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) when \\( y = \\sqrt{x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite the surd as a power.",
          workingLatex: "y = x^{1/2}",
          explanation: "This allows direct application of the power rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = \\tfrac{1}{2}x^{-1/2}",
          explanation: "Multiply by the exponent \\(1/2\\); reduce the exponent by 1 to \\(-1/2\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = \\tfrac{1}{2} \\cdot \\left(-\\tfrac{1}{2}\\right) x^{-3/2} = -\\tfrac{1}{4}x^{-3/2}",
          explanation: "Apply the power rule once more."
        },
        {
          stepNumber: 4,
          description: "Rewrite using surd notation.",
          workingLatex: "y'' = -\\dfrac{1}{4x\\sqrt{x}}",
          explanation: "Since \\(x^{3/2} = x\\sqrt{x}\\)."
        },
        {
          stepNumber: 5,
          description: "Interpret.",
          workingLatex: "y'' < 0 \\text{ for all } x>0",
          explanation: "So \\(y = \\sqrt{x}\\) is concave down on its domain \\((0,\\infty)\\) — its slope is decreasing."
        },
        {
          stepNumber: 6,
          description: "Sanity-check at a specific value.",
          workingLatex: "\\text{At } x=4:\\; y'' = -\\dfrac{1}{4 \\cdot 4 \\cdot 2} = -\\dfrac{1}{32}",
          explanation: "Negative as expected; small in magnitude because the curve is gentle there."
        },
        {
          stepNumber: 7,
          description: "State the final answer.",
          workingLatex: "y'' = -\\dfrac{1}{4x\\sqrt x}",
          explanation: "Equivalent to \\(-\\tfrac{1}{4}x^{-3/2}\\)."
        }
      ],
      finalAnswer: "\\( -\\tfrac{1}{4x\\sqrt{x}} \\)"
    }
  },
  {
    id: "y2df9-007",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 07",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) when \\( y = e^{2x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall \\(\\tfrac{d}{dx}(e^{kx}) = k e^{kx}\\).",
          workingLatex: "y = e^{2x}",
          explanation: "Here \\(k = 2\\). The chain rule gives a factor of 2 each time we differentiate."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = 2e^{2x}",
          explanation: "Bring down a factor of 2 from the chain rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 2 \\cdot 2 e^{2x} = 4e^{2x}",
          explanation: "Another factor of 2 from the chain rule, giving \\(2^2 = 4\\)."
        },
        {
          stepNumber: 4,
          description: "Note that \\(y'' > 0\\) everywhere.",
          workingLatex: "4e^{2x} > 0",
          explanation: "Exponentials are always positive, so \\(y = e^{2x}\\) is concave up on all of \\(\\mathbb{R}\\)."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 4e^{2x}",
          explanation: "Each differentiation of \\(e^{kx}\\) multiplies by \\(k\\)."
        }
      ],
      finalAnswer: "\\( 4e^{2x} \\)"
    }
  },
  {
    id: "y2df9-008",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) when \\( y = \\sin(3x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall \\(\\tfrac{d}{dx}\\sin(kx) = k\\cos(kx)\\).",
          workingLatex: "y = \\sin(3x)",
          explanation: "The chain rule produces a factor of \\(k\\) when differentiating \\(\\sin(kx)\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = 3\\cos(3x)",
          explanation: "Bring down the factor 3 and replace \\(\\sin\\) with \\(\\cos\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 3 \\cdot (-3\\sin(3x)) = -9\\sin(3x)",
          explanation: "\\(\\tfrac{d}{dx}\\cos(3x) = -3\\sin(3x)\\); multiplying by the existing 3 gives \\(-9\\sin(3x)\\)."
        },
        {
          stepNumber: 4,
          description: "Note the differential equation form.",
          workingLatex: "y'' = -9 y",
          explanation: "\\(y = \\sin(3x)\\) satisfies \\(y'' + 9y = 0\\) — the harmonic oscillator equation with angular frequency 3."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = -9\\sin(3x)",
          explanation: "Two differentiations of \\(\\sin(kx)\\) bring down a factor \\(-k^2\\)."
        },
        {
          stepNumber: 6,
          description: "Relation to original.",
          workingLatex: "y'' = -9y",
          explanation: "So \\(y'' + 9y = 0\\); the curve oscillates with angular frequency 3."
        },
        {
          stepNumber: 7,
          description: "Spot-check at \\(x = 0\\).",
          workingLatex: "y''(0) = 0",
          explanation: "Since \\(\\sin 0 = 0\\); this matches \\(-9 \\cdot \\sin 0 = 0\\)."
        }
      ],
      finalAnswer: "\\( -9\\sin(3x) \\)"
    }
  },
  {
    id: "y2df9-009",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) when \\( y = \\ln x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall \\(\\tfrac{d}{dx}\\ln x = 1/x\\).",
          workingLatex: "y = \\ln x,\\quad x>0",
          explanation: "The domain of \\(\\ln x\\) is \\((0, \\infty)\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = \\dfrac{1}{x} = x^{-1}",
          explanation: "Rewrite as a power to make the next differentiation easier."
        },
        {
          stepNumber: 3,
          description: "Differentiate again using the power rule.",
          workingLatex: "y'' = -x^{-2} = -\\dfrac{1}{x^2}",
          explanation: "Multiply by the exponent \\(-1\\); reduce by 1 to \\(-2\\)."
        },
        {
          stepNumber: 4,
          description: "Interpret.",
          workingLatex: "y'' = -\\dfrac{1}{x^2} < 0 \\text{ for all } x>0",
          explanation: "So \\(\\ln x\\) is concave down throughout its domain."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = -\\dfrac{1}{x^2}",
          explanation: "Standard result worth memorising."
        },
        {
          stepNumber: 6,
          description: "Pattern note for higher derivatives.",
          workingLatex: "\\tfrac{d^n}{dx^n}\\ln x = \\dfrac{(-1)^{n-1}(n-1)!}{x^n}",
          explanation: "For \\(n = 2\\): \\(-1!/x^2 = -1/x^2\\) — consistent."
        },
        {
          stepNumber: 7,
          description: "Verify at \\(x = 1\\).",
          workingLatex: "y''(1) = -1",
          explanation: "Indicates concave-down curvature at \\(x = 1\\)."
        }
      ],
      finalAnswer: "\\( -\\tfrac{1}{x^2} \\)"
    }
  },
  {
    id: "y2df9-010",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) when \\( y = \\tan x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall \\(\\tfrac{d}{dx}\\tan x = \\sec^2 x\\).",
          workingLatex: "y = \\tan x",
          explanation: "The derivative of \\(\\tan\\) is a standard result we will need again here."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = \\sec^2 x",
          explanation: "Equivalently \\(y' = 1/\\cos^2 x\\); we now differentiate \\(\\sec^2 x\\)."
        },
        {
          stepNumber: 3,
          description: "Apply the chain rule to \\(\\sec^2 x = (\\sec x)^2\\).",
          workingLatex: "y'' = 2\\sec x \\cdot \\tfrac{d}{dx}(\\sec x) = 2\\sec x \\cdot \\sec x\\tan x",
          explanation: "Use \\(\\tfrac{d}{dx}\\sec x = \\sec x\\tan x\\) and chain rule on the square."
        },
        {
          stepNumber: 4,
          description: "Simplify the product.",
          workingLatex: "y'' = 2\\sec^2 x\\tan x",
          explanation: "Combine the two \\(\\sec x\\) factors into \\(\\sec^2 x\\)."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 2\\sec^2 x\\tan x",
          explanation: "Valid wherever \\(\\cos x \\ne 0\\)."
        },
        {
          stepNumber: 6,
          description: "Note sign behaviour.",
          workingLatex: "y'' \\text{ has the same sign as }\\tan x",
          explanation: "Since \\(\\sec^2 x > 0\\). On \\((0, \\pi/2)\\) the curve is concave up; on \\((-\\pi/2, 0)\\) concave down."
        },
        {
          stepNumber: 7,
          description: "Check at \\(x = \\pi/4\\).",
          workingLatex: "y''(\\pi/4) = 2 \\cdot 2 \\cdot 1 = 4",
          explanation: "\\(\\sec^2(\\pi/4) = 2\\) and \\(\\tan(\\pi/4) = 1\\); positive, agreeing with concave-up behaviour there."
        }
      ],
      finalAnswer: "\\( 2\\sec^2 x\\tan x \\)"
    }
  },
  // ── Classify stationary points ────
  {
    id: "y2df9-011",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 11",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the stationary point of \\( y = x^2 - 4x + 3 \\) and classify it.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 2x - 4",
          explanation: "Power rule on each term."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "2x - 4 = 0 \\Rightarrow x = 2",
          explanation: "There is a single stationary point at \\(x = 2\\)."
        },
        {
          stepNumber: 3,
          description: "Compute the \\(y\\)-coordinate.",
          workingLatex: "y(2) = 4 - 8 + 3 = -1",
          explanation: "Substitute \\(x = 2\\) into the original equation."
        },
        {
          stepNumber: 4,
          description: "Compute the second derivative.",
          workingLatex: "y'' = 2",
          explanation: "Differentiating \\(2x - 4\\) gives 2."
        },
        {
          stepNumber: 5,
          description: "Apply the second-derivative test.",
          workingLatex: "y''(2) = 2 > 0 \\Rightarrow \\text{minimum}",
          explanation: "Positive \\(y''\\) means the parabola is concave up at the stationary point, so it is a local minimum."
        },
        {
          stepNumber: 6,
          description: "State the conclusion.",
          workingLatex: "(2, -1) \\text{ is a minimum}",
          explanation: "This matches the vertex form \\(y = (x-2)^2 - 1\\)."
        }
      ],
      finalAnswer: "Minimum at \\((2, -1)\\)."
    }
  },
  {
    id: "y2df9-012",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = x^3 - 3x^2 + 2 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 3x^2 - 6x",
          explanation: "Term-by-term application of the power rule."
        },
        {
          stepNumber: 2,
          description: "Factor and solve \\(y' = 0\\).",
          workingLatex: "3x(x - 2) = 0 \\Rightarrow x = 0,\\; x = 2",
          explanation: "Two stationary \\(x\\)-values: 0 and 2."
        },
        {
          stepNumber: 3,
          description: "Find the \\(y\\)-coordinates.",
          workingLatex: "y(0) = 2,\\quad y(2) = 8 - 12 + 2 = -2",
          explanation: "Substitute each \\(x\\) into the original equation."
        },
        {
          stepNumber: 4,
          description: "Compute the second derivative.",
          workingLatex: "y'' = 6x - 6",
          explanation: "Differentiate \\(y' = 3x^2 - 6x\\) term-by-term."
        },
        {
          stepNumber: 5,
          description: "Evaluate \\(y''\\) at each stationary point.",
          workingLatex: "y''(0) = -6 < 0;\\quad y''(2) = 6 > 0",
          explanation: "Negative \\(y''\\) signals a maximum; positive \\(y''\\) signals a minimum."
        },
        {
          stepNumber: 6,
          description: "Classify and conclude.",
          workingLatex: "\\text{Max at }(0, 2);\\quad \\text{Min at }(2, -2)",
          explanation: "A positive-leading cubic with two turning points has the max on the left and the min on the right, as found."
        },
        {
          stepNumber: 7,
          description: "Locate the inflection.",
          workingLatex: "y'' = 0 \\Rightarrow x = 1;\\; y(1) = 0",
          explanation: "The point of inflection \\((1, 0)\\) lies midway between the two turning points — typical of a cubic."
        }
      ],
      finalAnswer: "Maximum at \\((0, 2)\\); minimum at \\((2, -2)\\)."
    }
  },
  {
    id: "y2df9-013",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = 2x^3 - 3x^2 - 12x \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 6x^2 - 6x - 12",
          explanation: "Apply the power rule term by term."
        },
        {
          stepNumber: 2,
          description: "Factor and solve \\(y' = 0\\).",
          workingLatex: "6(x^2 - x - 2) = 6(x - 2)(x + 1) = 0 \\Rightarrow x = 2,\\; x = -1",
          explanation: "The quadratic factors over \\(\\mathbb{Z}\\)."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(2) = 16 - 12 - 24 = -20,\\quad y(-1) = -2 - 3 + 12 = 7",
          explanation: "Substitute back into \\(y = 2x^3 - 3x^2 - 12x\\)."
        },
        {
          stepNumber: 4,
          description: "Compute the second derivative.",
          workingLatex: "y'' = 12x - 6",
          explanation: "Differentiating \\(y'\\) term-by-term."
        },
        {
          stepNumber: 5,
          description: "Apply the second-derivative test.",
          workingLatex: "y''(2) = 18 > 0;\\quad y''(-1) = -18 < 0",
          explanation: "So \\(x = 2\\) is a minimum and \\(x = -1\\) is a maximum."
        },
        {
          stepNumber: 6,
          description: "State the classification.",
          workingLatex: "\\text{Max at }(-1, 7);\\quad \\text{Min at }(2, -20)",
          explanation: "Two turning points of the cubic, consistent with the positive leading coefficient."
        },
        {
          stepNumber: 7,
          description: "Locate the inflection.",
          workingLatex: "y'' = 0 \\Rightarrow x = 1/2",
          explanation: "The point of inflection at \\(x = 1/2\\) lies between the two turning points — concavity flips from down to up there."
        }
      ],
      finalAnswer: "Maximum at \\((-1, 7)\\); minimum at \\((2, -20)\\)."
    }
  },
  {
    id: "y2df9-014",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = x^3 - 12x + 1 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 3x^2 - 12",
          explanation: "Power rule on each term; the constant 1 vanishes."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "3x^2 = 12 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2",
          explanation: "Two stationary \\(x\\)-values."
        },
        {
          stepNumber: 3,
          description: "Find the \\(y\\)-coordinates.",
          workingLatex: "y(2) = 8 - 24 + 1 = -15,\\quad y(-2) = -8 + 24 + 1 = 17",
          explanation: "Substitute each back into the original."
        },
        {
          stepNumber: 4,
          description: "Compute the second derivative.",
          workingLatex: "y'' = 6x",
          explanation: "Differentiate \\(y' = 3x^2 - 12\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the second-derivative test.",
          workingLatex: "y''(2) = 12 > 0;\\quad y''(-2) = -12 < 0",
          explanation: "So \\(x = 2\\) is a minimum and \\(x = -2\\) is a maximum."
        },
        {
          stepNumber: 6,
          description: "State the conclusion.",
          workingLatex: "\\text{Max }(-2, 17);\\quad \\text{Min }(2, -15)",
          explanation: "Both critical points classified."
        },
        {
          stepNumber: 7,
          description: "Inflection point.",
          workingLatex: "y'' = 6x = 0 \\Rightarrow x = 0,\\; y(0) = 1",
          explanation: "The inflection at \\((0, 1)\\) is the midpoint between the two turning points — characteristic of a cubic."
        }
      ],
      finalAnswer: "Max \\((-2, 17)\\); min \\((2, -15)\\)."
    }
  },
  {
    id: "y2df9-015",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 15",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = x^4 - 4x^3 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 4x^3 - 12x^2",
          explanation: "Power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Factor and solve \\(y' = 0\\).",
          workingLatex: "4x^2(x - 3) = 0 \\Rightarrow x = 0 \\text{ (double)},\\; x = 3",
          explanation: "Two distinct stationary \\(x\\)-values, but \\(x = 0\\) is a repeated root of \\(y'\\) — already a hint that the second-derivative test may fail there."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(0) = 0,\\quad y(3) = 81 - 108 = -27",
          explanation: "Substitute back into the original."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = 12x^2 - 24x",
          explanation: "Differentiate \\(y'\\) term-by-term."
        },
        {
          stepNumber: 5,
          description: "Evaluate \\(y''\\) at \\(x = 3\\).",
          workingLatex: "y''(3) = 108 - 72 = 36 > 0 \\Rightarrow \\text{minimum}",
          explanation: "Positive \\(y''\\) gives a local minimum at \\((3, -27)\\)."
        },
        {
          stepNumber: 6,
          description: "At \\(x = 0\\), \\(y''(0) = 0\\): the test is inconclusive.",
          workingLatex: "y''(0) = 0",
          explanation: "We must fall back to checking the sign of \\(y'\\) around \\(x = 0\\)."
        },
        {
          stepNumber: 7,
          description: "Sign of \\(y'\\) near 0.",
          workingLatex: "y' = 4x^2(x - 3) \\le 0 \\text{ for } -\\varepsilon < x < \\varepsilon",
          explanation: "Both sides of 0 give \\(y' < 0\\) (since \\(x^2 > 0\\) and \\(x - 3 < 0\\)), so the gradient does not change sign — this is a horizontal point of inflection, not a turning point."
        },
        {
          stepNumber: 8,
          description: "Conclude.",
          workingLatex: "\\text{Min }(3, -27);\\; \\text{horizontal inflection }(0, 0)",
          explanation: "Cautionary example: \\(y''(0) = 0\\) does not guarantee an inflection in general, but the first-derivative sign test confirms it here."
        },
        {
          stepNumber: 9,
          description: "Locate the non-horizontal inflection too.",
          workingLatex: "y'' = 12x^2 - 24x = 12x(x - 2) = 0 \\Rightarrow x = 0,\\; 2",
          explanation: "There is a second inflection at \\(x = 2\\), where \\(y(2) = -16\\); concavity changes there too."
        }
      ],
      finalAnswer: "Minimum at \\((3, -27)\\); point of inflection at \\((0, 0)\\)."
    }
  },
  {
    id: "y2df9-016",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 16",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = x^4 - 2x^2 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 4x^3 - 4x",
          explanation: "Power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Factor and solve \\(y' = 0\\).",
          workingLatex: "4x(x - 1)(x + 1) = 0 \\Rightarrow x = 0,\\; \\pm 1",
          explanation: "Three stationary \\(x\\)-values."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(0) = 0,\\quad y(\\pm 1) = 1 - 2 = -1",
          explanation: "Symmetry of the quartic gives equal \\(y\\)-values at \\(x = \\pm 1\\)."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = 12x^2 - 4",
          explanation: "Differentiate \\(y'\\) term-by-term."
        },
        {
          stepNumber: 5,
          description: "Evaluate \\(y''\\) at each stationary point.",
          workingLatex: "y''(0) = -4 < 0;\\quad y''(\\pm 1) = 12 - 4 = 8 > 0",
          explanation: "Negative at 0, positive at \\(\\pm 1\\)."
        },
        {
          stepNumber: 6,
          description: "Classify.",
          workingLatex: "(0, 0)\\text{ max};\\quad (\\pm 1, -1)\\text{ both min}",
          explanation: "A 'W'-shaped quartic: two equal minima with a local maximum between them."
        },
        {
          stepNumber: 7,
          description: "State.",
          workingLatex: "\\text{Max }(0,0);\\; \\text{Mins }(\\pm 1, -1)",
          explanation: "Classified by the second-derivative test."
        },
        {
          stepNumber: 8,
          description: "Locate the inflection points.",
          workingLatex: "y'' = 12x^2 - 4 = 0 \\Rightarrow x = \\pm 1/\\sqrt 3",
          explanation: "The second derivative vanishes at \\(x = \\pm 1/\\sqrt 3\\), and \\(y''\\) changes sign there — so these are genuine inflections."
        },
        {
          stepNumber: 9,
          description: "Compute \\(y\\)-values at the inflections.",
          workingLatex: "y(\\pm 1/\\sqrt 3) = \\tfrac{1}{9} - \\tfrac{2}{3} = -\\tfrac{5}{9}",
          explanation: "Two inflection points at \\((\\pm 1/\\sqrt 3, -5/9)\\)."
        }
      ],
      finalAnswer: "Max \\((0, 0)\\); mins \\((\\pm 1, -1)\\)."
    }
  },
  {
    id: "y2df9-017",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 17",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = x + \\tfrac{4}{x} \\) for \\(x \\ne 0\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using power rule on \\(4x^{-1}\\).",
          workingLatex: "y' = 1 - \\dfrac{4}{x^2}",
          explanation: "\\(\\tfrac{d}{dx}(4x^{-1}) = -4x^{-2} = -4/x^2\\)."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "1 = \\dfrac{4}{x^2} \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2",
          explanation: "Two stationary \\(x\\)-values."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(2) = 2 + 2 = 4,\\quad y(-2) = -2 - 2 = -4",
          explanation: "Substitute back into the original."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = \\dfrac{8}{x^3}",
          explanation: "Differentiate \\(-4x^{-2}\\) to get \\(8x^{-3}\\)."
        },
        {
          stepNumber: 5,
          description: "Evaluate.",
          workingLatex: "y''(2) = 1 > 0;\\quad y''(-2) = -1 < 0",
          explanation: "The sign of \\(y''\\) matches the sign of \\(x\\) (since 8 is positive)."
        },
        {
          stepNumber: 6,
          description: "Classify.",
          workingLatex: "(2, 4) \\text{ min};\\quad (-2, -4) \\text{ max}",
          explanation: "A common AM–GM style example: the two stationary values are extremes on each branch of \\(y = x + 4/x\\)."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "\\text{Min }(2, 4);\\; \\text{Max }(-2, -4)",
          explanation: "Note that the local maximum value \\(-4\\) is less than the local minimum value \\(4\\) — this is because the two extrema lie on disconnected branches."
        },
        {
          stepNumber: 8,
          description: "AM–GM interpretation.",
          workingLatex: "x + \\dfrac{4}{x} \\ge 2\\sqrt{x \\cdot 4/x} = 4 \\text{ for } x > 0",
          explanation: "AM–GM gives the same minimum 4 directly; equality when \\(x = 4/x\\), i.e. \\(x = 2\\)."
        },
        {
          stepNumber: 9,
          description: "Asymptotic behaviour.",
          workingLatex: "y \\to \\pm\\infty \\text{ as } x \\to 0^{\\pm};\\;\\; y \\sim x \\text{ as } x \\to \\pm\\infty",
          explanation: "The line \\(y = x\\) is an oblique asymptote; the curve has no global extrema, only the local ones we found."
        }
      ],
      finalAnswer: "Min \\((2, 4)\\); max \\((-2, -4)\\)."
    }
  },
  {
    id: "y2df9-018",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 18",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary point of \\( y = x\\ln x \\) for \\(x > 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the product rule.",
          workingLatex: "y' = \\ln x + x \\cdot \\dfrac{1}{x} = \\ln x + 1",
          explanation: "Product rule with \\(u = x\\) (\\(u' = 1\\)) and \\(v = \\ln x\\) (\\(v' = 1/x\\))."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "\\ln x = -1 \\Rightarrow x = e^{-1} = \\dfrac{1}{e}",
          explanation: "Exponentiating both sides."
        },
        {
          stepNumber: 3,
          description: "Compute the \\(y\\)-coordinate.",
          workingLatex: "y\\!\\left(\\tfrac{1}{e}\\right) = \\tfrac{1}{e}\\ln\\!\\left(\\tfrac{1}{e}\\right) = -\\dfrac{1}{e}",
          explanation: "Use \\(\\ln(1/e) = -1\\)."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = \\dfrac{1}{x}",
          explanation: "Differentiate \\(\\ln x + 1\\) to get \\(1/x\\); the constant 1 vanishes."
        },
        {
          stepNumber: 5,
          description: "Evaluate \\(y''\\) at the stationary point.",
          workingLatex: "y''\\!\\left(\\tfrac{1}{e}\\right) = e > 0",
          explanation: "Positive, so the stationary point is a local minimum."
        },
        {
          stepNumber: 6,
          description: "Note: \\(y'' > 0\\) for all \\(x > 0\\), so this is the global minimum on the domain.",
          workingLatex: "y'' = 1/x > 0\\;\\forall x>0",
          explanation: "The function is strictly convex on \\((0, \\infty)\\), so the stationary point is the unique global minimum."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "\\text{Min at }\\left(\\tfrac{1}{e}, -\\tfrac{1}{e}\\right)",
          explanation: "Classic optimisation result."
        },
        {
          stepNumber: 8,
          description: "Numerical sanity check.",
          workingLatex: "\\tfrac{1}{e} \\approx 0.368;\\;\\; -\\tfrac{1}{e} \\approx -0.368",
          explanation: "Both coordinates are around \\(\\pm 0.37\\); consistent with the shape of \\(x\\ln x\\) near the origin."
        },
        {
          stepNumber: 9,
          description: "Asymptotic note.",
          workingLatex: "\\lim_{x \\to 0^+} x\\ln x = 0",
          explanation: "Although \\(\\ln x \\to -\\infty\\) at the origin, the \\(x\\) factor wins and \\(y \\to 0\\); the minimum \\(-1/e\\) really is the smallest value attained on \\((0, \\infty)\\)."
        }
      ],
      finalAnswer: "Minimum at \\((1/e, -1/e)\\)."
    }
  },
  {
    id: "y2df9-019",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary point of \\( y = x e^{-x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the product rule.",
          workingLatex: "y' = e^{-x} + x \\cdot (-e^{-x}) = e^{-x}(1 - x)",
          explanation: "Product rule with \\(u = x\\) and \\(v = e^{-x}\\) (so \\(v' = -e^{-x}\\))."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "e^{-x}(1 - x) = 0 \\Rightarrow x = 1",
          explanation: "Since \\(e^{-x} > 0\\) for all \\(x\\), the only root comes from \\(1 - x = 0\\)."
        },
        {
          stepNumber: 3,
          description: "Compute the \\(y\\)-coordinate.",
          workingLatex: "y(1) = 1 \\cdot e^{-1} = \\dfrac{1}{e}",
          explanation: "Substitute \\(x = 1\\) into the original."
        },
        {
          stepNumber: 4,
          description: "Compute the second derivative using the product rule on \\(y' = e^{-x}(1 - x)\\).",
          workingLatex: "y'' = -e^{-x}(1 - x) + e^{-x}(-1) = e^{-x}(x - 2)",
          explanation: "Differentiate the product; combine terms."
        },
        {
          stepNumber: 5,
          description: "Evaluate \\(y''\\) at the stationary point.",
          workingLatex: "y''(1) = e^{-1}(1 - 2) = -\\dfrac{1}{e} < 0",
          explanation: "Negative, so this is a local maximum."
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "\\text{Max at }(1,\\; 1/e)",
          explanation: "Local maximum of \\(xe^{-x}\\)."
        },
        {
          stepNumber: 7,
          description: "Inflection point from \\(y'' = 0\\).",
          workingLatex: "y'' = 0 \\Rightarrow x = 2;\\; y(2) = 2e^{-2}",
          explanation: "Sign of \\(y''\\) changes at \\(x = 2\\), so the curve has an inflection at \\((2, 2/e^2)\\)."
        },
        {
          stepNumber: 8,
          description: "Asymptotic behaviour.",
          workingLatex: "y \\to 0 \\text{ as } x \\to \\infty;\\;\\; y \\to -\\infty \\text{ as } x \\to -\\infty",
          explanation: "The maximum we found is in fact the global maximum on \\(\\mathbb{R}\\)."
        },
        {
          stepNumber: 9,
          description: "Numerical check.",
          workingLatex: "1/e \\approx 0.368",
          explanation: "Maximum value approximately 0.37; consistent with the curve shape."
        }
      ],
      finalAnswer: "Maximum at \\((1, 1/e)\\)."
    }
  },
  {
    id: "y2df9-020",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = \\sin x + \\cos x \\) for \\( 0 \\le x < 2\\pi \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = \\cos x - \\sin x",
          explanation: "Standard trig derivatives."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "\\cos x = \\sin x \\Rightarrow \\tan x = 1 \\Rightarrow x = \\tfrac{\\pi}{4},\\; \\tfrac{5\\pi}{4}",
          explanation: "Divide by \\(\\cos x\\) (valid since \\(\\cos x = 0\\) does not satisfy the equation). Two solutions in \\([0, 2\\pi)\\)."
        },
        {
          stepNumber: 3,
          description: "Compute the \\(y\\)-coordinates.",
          workingLatex: "y\\!\\left(\\tfrac{\\pi}{4}\\right) = \\tfrac{\\sqrt 2}{2} + \\tfrac{\\sqrt 2}{2} = \\sqrt{2};\\quad y\\!\\left(\\tfrac{5\\pi}{4}\\right) = -\\sqrt{2}",
          explanation: "Use exact values of \\(\\sin\\) and \\(\\cos\\) at these angles."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = -\\sin x - \\cos x",
          explanation: "Note \\(y'' = -y\\), confirming \\(y'' + y = 0\\)."
        },
        {
          stepNumber: 5,
          description: "Evaluate \\(y''\\) at each stationary point.",
          workingLatex: "y''\\!\\left(\\tfrac{\\pi}{4}\\right) = -\\sqrt 2 < 0;\\quad y''\\!\\left(\\tfrac{5\\pi}{4}\\right) = \\sqrt 2 > 0",
          explanation: "Negative gives a maximum; positive gives a minimum."
        },
        {
          stepNumber: 6,
          description: "Classify.",
          workingLatex: "\\left(\\tfrac{\\pi}{4}, \\sqrt 2\\right)\\text{ max};\\;\\left(\\tfrac{5\\pi}{4}, -\\sqrt 2\\right)\\text{ min}",
          explanation: "Equivalent to \\(y = \\sqrt 2\\sin(x + \\pi/4)\\), with extrema \\(\\pm\\sqrt 2\\)."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "\\text{Max }(\\pi/4, \\sqrt 2);\\; \\text{Min }(5\\pi/4, -\\sqrt 2)",
          explanation: "Both classified."
        },
        {
          stepNumber: 8,
          description: "Locate inflections on the interval.",
          workingLatex: "y'' = 0 \\Rightarrow \\tan x = -1 \\Rightarrow x = \\tfrac{3\\pi}{4},\\; \\tfrac{7\\pi}{4}",
          explanation: "Concavity changes at these two points, giving inflections between the extrema."
        },
        {
          stepNumber: 9,
          description: "Amplitude form.",
          workingLatex: "y = \\sqrt 2 \\sin\\!\\left(x + \\tfrac{\\pi}{4}\\right)",
          explanation: "Rewriting confirms maximum value \\(\\sqrt 2\\) and minimum \\(-\\sqrt 2\\), reached at the expected \\(x\\)-values."
        }
      ],
      finalAnswer: "Max \\((\\pi/4, \\sqrt 2)\\); min \\((5\\pi/4, -\\sqrt 2)\\)."
    }
  },
  {
    id: "y2df9-021",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the stationary points of \\( y = 2\\sin x + \\cos 2x \\) for \\( 0 \\le x < 2\\pi \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 2\\cos x - 2\\sin 2x",
          explanation: "Chain rule on \\(\\cos 2x\\) gives \\(-2\\sin 2x\\)."
        },
        {
          stepNumber: 2,
          description: "Use the double-angle identity \\(\\sin 2x = 2\\sin x\\cos x\\).",
          workingLatex: "y' = 2\\cos x - 4\\sin x\\cos x = 2\\cos x(1 - 2\\sin x)",
          explanation: "Factoring out \\(2\\cos x\\) splits the equation into two simple factors."
        },
        {
          stepNumber: 3,
          description: "Set each factor to zero.",
          workingLatex: "\\cos x = 0 \\;\\text{or}\\; \\sin x = \\tfrac{1}{2}",
          explanation: "Two separate trig equations to solve."
        },
        {
          stepNumber: 4,
          description: "Solve \\(\\cos x = 0\\) on \\([0, 2\\pi)\\).",
          workingLatex: "x = \\tfrac{\\pi}{2},\\; \\tfrac{3\\pi}{2}",
          explanation: "Standard zeros of cosine in the interval."
        },
        {
          stepNumber: 5,
          description: "Solve \\(\\sin x = \\tfrac{1}{2}\\) on \\([0, 2\\pi)\\).",
          workingLatex: "x = \\tfrac{\\pi}{6},\\; \\tfrac{5\\pi}{6}",
          explanation: "Two solutions, symmetric about \\(\\pi/2\\)."
        },
        {
          stepNumber: 6,
          description: "Collect all stationary \\(x\\)-values.",
          workingLatex: "x \\in \\left\\{\\tfrac{\\pi}{6},\\; \\tfrac{\\pi}{2},\\; \\tfrac{5\\pi}{6},\\; \\tfrac{3\\pi}{2}\\right\\}",
          explanation: "Four stationary points in total."
        },
        {
          stepNumber: 7,
          description: "(Optional) classification using \\(y'' = -2\\sin x - 4\\cos 2x\\).",
          workingLatex: "y''(\\pi/6) = -1 - 2 = -3 < 0\\;(\\text{max});\\; y''(\\pi/2) = -2 + 4 = 2 > 0\\;(\\text{min})",
          explanation: "Similarly \\(y''(5\\pi/6) < 0\\) (max) and \\(y''(3\\pi/2) > 0\\) (min)."
        },
        {
          stepNumber: 8,
          description: "Compute the four \\(y\\)-coordinates.",
          workingLatex: "y(\\pi/6) = \\tfrac{3}{2};\\; y(\\pi/2) = 1;\\; y(5\\pi/6) = \\tfrac{3}{2};\\; y(3\\pi/2) = -3",
          explanation: "Use exact values; for example at \\(\\pi/6\\), \\(2\\sin(\\pi/6) = 1\\) and \\(\\cos(\\pi/3) = 1/2\\), summing to \\(3/2\\)."
        },
        {
          stepNumber: 9,
          description: "Summarise.",
          workingLatex: "\\text{Two maxima at }\\left(\\tfrac{\\pi}{6}, \\tfrac{3}{2}\\right),\\left(\\tfrac{5\\pi}{6}, \\tfrac{3}{2}\\right);\\; \\text{minima at }\\left(\\tfrac{\\pi}{2}, 1\\right),\\left(\\tfrac{3\\pi}{2}, -3\\right)",
          explanation: "The global minimum is at \\(x = 3\\pi/2\\) with value \\(-3\\); the two maxima share the value \\(3/2\\)."
        }
      ],
      finalAnswer: "Stationary at \\( x = \\pi/6,\\; \\pi/2,\\; 5\\pi/6,\\; 3\\pi/2 \\)."
    }
  },
  // ── Points of inflection ────
  {
    id: "y2df9-022",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 22",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Show that \\( y = x^3 \\) has a point of inflection at \\( x = 0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inflection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate to find \\(y'\\).",
          workingLatex: "y' = 3x^2",
          explanation: "Power rule. Note \\(y'(0) = 0\\), so the origin is also a stationary point."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "y'' = 6x",
          explanation: "Power rule applied to \\(3x^2\\)."
        },
        {
          stepNumber: 3,
          description: "Check that \\(y'' = 0\\) at \\(x = 0\\).",
          workingLatex: "y''(0) = 0",
          explanation: "Vanishing of \\(y''\\) is a *necessary* but not sufficient condition for an inflection — we still need to check that the sign of \\(y''\\) actually changes."
        },
        {
          stepNumber: 4,
          description: "Examine the sign of \\(y''\\) either side of 0.",
          workingLatex: "y''(-1) = -6 < 0;\\quad y''(1) = 6 > 0",
          explanation: "The second derivative changes from negative to positive across \\(x = 0\\), so the concavity changes from down to up."
        },
        {
          stepNumber: 5,
          description: "Conclude.",
          workingLatex: "(0, 0)\\text{ is a point of inflection}",
          explanation: "Because the concavity changes sign at \\(x = 0\\). It is in fact a horizontal inflection (since \\(y'(0) = 0\\) too)."
        },
        {
          stepNumber: 6,
          description: "Note the warning.",
          workingLatex: "y''(0) = 0 \\text{ alone is not sufficient}",
          explanation: "Compare with \\(y = x^4\\) where \\(y''(0) = 0\\) too but the point is a minimum, not an inflection — the sign-change check matters."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "(0, 0) \\text{ horizontal inflection of } y = x^3",
          explanation: "Stationary (since \\(y'(0) = 0\\)) with concavity change, hence a horizontal inflection."
        }
      ],
      finalAnswer: "Point of inflection at \\((0, 0)\\)."
    }
  },
  {
    id: "y2df9-023",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 23",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the point of inflection of \\( y = x^3 - 6x^2 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inflection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate once.",
          workingLatex: "y' = 3x^2 - 12x",
          explanation: "Power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "y'' = 6x - 12",
          explanation: "Power rule applied to \\(y'\\)."
        },
        {
          stepNumber: 3,
          description: "Solve \\(y'' = 0\\) for inflection candidates.",
          workingLatex: "6x - 12 = 0 \\Rightarrow x = 2",
          explanation: "A single candidate \\(x\\)-value."
        },
        {
          stepNumber: 4,
          description: "Check the sign change of \\(y''\\).",
          workingLatex: "y''(1) = -6 < 0;\\quad y''(3) = 6 > 0",
          explanation: "Since \\(y''\\) changes sign across \\(x = 2\\), the concavity changes from down to up — confirming an inflection."
        },
        {
          stepNumber: 5,
          description: "Find the \\(y\\)-coordinate.",
          workingLatex: "y(2) = 8 - 24 = -16",
          explanation: "Substitute into the original \\(y = x^3 - 6x^2\\)."
        },
        {
          stepNumber: 6,
          description: "State the inflection point.",
          workingLatex: "(2, -16)",
          explanation: "Note that \\(y'(2) = -12 \\ne 0\\), so this is a *non-horizontal* inflection."
        },
        {
          stepNumber: 7,
          description: "Locate the turning points for context.",
          workingLatex: "y' = 3x^2 - 12x = 3x(x - 4) = 0 \\Rightarrow x = 0,\\; 4",
          explanation: "Max at \\((0, 0)\\); min at \\((4, -32)\\). The inflection lies midway between them at \\(x = 2\\)."
        }
      ],
      finalAnswer: "Inflection at \\((2, -16)\\)."
    }
  },
  {
    id: "y2df9-024",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the points of inflection of \\( y = x^4 - 6x^2 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inflection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate once.",
          workingLatex: "y' = 4x^3 - 12x",
          explanation: "Power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "y'' = 12x^2 - 12",
          explanation: "Power rule applied to \\(y'\\)."
        },
        {
          stepNumber: 3,
          description: "Solve \\(y'' = 0\\).",
          workingLatex: "12(x^2 - 1) = 0 \\Rightarrow x = \\pm 1",
          explanation: "Two candidate inflection \\(x\\)-values."
        },
        {
          stepNumber: 4,
          description: "Check the sign change of \\(y''\\) across each candidate.",
          workingLatex: "y''(0) = -12;\\; y''(\\pm 2) = 36",
          explanation: "Across \\(x = -1\\), \\(y''\\) goes from positive (at \\(-2\\)) to negative (at 0); across \\(x = 1\\), from negative to positive. Both sign changes are genuine inflections."
        },
        {
          stepNumber: 5,
          description: "Compute the \\(y\\)-coordinates.",
          workingLatex: "y(\\pm 1) = 1 - 6 = -5",
          explanation: "Both points have the same \\(y\\)-value by the even symmetry of the quartic."
        },
        {
          stepNumber: 6,
          description: "State the inflection points.",
          workingLatex: "(\\pm 1, -5)",
          explanation: "Two non-horizontal inflections; \\(y'(\\pm 1) = \\mp 8 \\ne 0\\)."
        },
        {
          stepNumber: 7,
          description: "Locate stationary points for context.",
          workingLatex: "y' = 4x^3 - 12x = 4x(x^2 - 3) = 0 \\Rightarrow x = 0,\\; \\pm\\sqrt 3",
          explanation: "A local max at \\((0, 0)\\) and two minima at \\((\\pm\\sqrt 3, -9)\\)."
        },
        {
          stepNumber: 8,
          description: "Concavity intervals.",
          workingLatex: "y'' > 0 \\text{ for } |x|>1;\\; y'' < 0 \\text{ for } |x|<1",
          explanation: "Concave up outside the inflections, concave down between them — the typical 'W'-shape."
        },
        {
          stepNumber: 9,
          description: "State result.",
          workingLatex: "(\\pm 1, -5)",
          explanation: "Both genuine inflections, as verified."
        }
      ],
      finalAnswer: "Points of inflection at \\((\\pm 1, -5)\\)."
    }
  },
  {
    id: "y2df9-025",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the points of inflection of \\( y = e^{-x^2} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inflection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the chain rule.",
          workingLatex: "y' = -2x\\, e^{-x^2}",
          explanation: "Chain rule with inner function \\(u = -x^2\\), so \\(u' = -2x\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate again using the product rule.",
          workingLatex: "y'' = -2 e^{-x^2} + (-2x)(-2x)e^{-x^2} = -2e^{-x^2} + 4x^2 e^{-x^2}",
          explanation: "Product rule on \\(y' = (-2x) \\cdot e^{-x^2}\\); the second factor's derivative comes from the chain rule again."
        },
        {
          stepNumber: 3,
          description: "Factor.",
          workingLatex: "y'' = 2e^{-x^2}(2x^2 - 1)",
          explanation: "Pull out the common factor \\(2e^{-x^2}\\)."
        },
        {
          stepNumber: 4,
          description: "Solve \\(y'' = 0\\).",
          workingLatex: "2x^2 - 1 = 0 \\Rightarrow x = \\pm \\dfrac{1}{\\sqrt 2}",
          explanation: "Since \\(e^{-x^2} > 0\\) for all \\(x\\), only the quadratic factor can vanish."
        },
        {
          stepNumber: 5,
          description: "Check sign change.",
          workingLatex: "y'' < 0 \\text{ for } |x|<1/\\sqrt 2;\\; y''>0 \\text{ for }|x|>1/\\sqrt 2",
          explanation: "So \\(y''\\) changes sign at both \\(x = \\pm 1/\\sqrt 2\\) — genuine inflections."
        },
        {
          stepNumber: 6,
          description: "Find the \\(y\\)-coordinates.",
          workingLatex: "y\\!\\left(\\pm \\tfrac{1}{\\sqrt 2}\\right) = e^{-1/2}",
          explanation: "Both inflection points share the same \\(y\\)-value by the even symmetry of \\(e^{-x^2}\\)."
        },
        {
          stepNumber: 7,
          description: "State the result.",
          workingLatex: "\\left(\\pm \\tfrac{1}{\\sqrt 2},\\; e^{-1/2}\\right)",
          explanation: "These are the famous inflection points of the Gaussian curve, located one standard deviation either side of the mean."
        },
        {
          stepNumber: 8,
          description: "Numerical check.",
          workingLatex: "e^{-1/2} \\approx 0.607",
          explanation: "Each inflection has \\(y\\)-value about 0.61 — about 61% of the peak height \\(y(0) = 1\\)."
        },
        {
          stepNumber: 9,
          description: "Connection to statistics.",
          workingLatex: "\\text{Standard deviation: }\\sigma = 1/\\sqrt 2",
          explanation: "Equivalently \\(e^{-x^2}\\) is proportional to the Gaussian \\(\\exp(-x^2/(2\\sigma^2))\\) with \\(\\sigma = 1/\\sqrt 2\\); the inflections sit at \\(\\pm\\sigma\\)."
        }
      ],
      finalAnswer: "Inflections at \\((\\pm 1/\\sqrt{2}, e^{-1/2})\\)."
    }
  },
  // ── Concavity analysis ────
  {
    id: "y2df9-026",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 26",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Determine the concavity of \\( y = x^2 \\) on \\( \\mathbb{R} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["concavity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "y'' = 2",
          explanation: "The second derivative is a constant."
        },
        {
          stepNumber: 3,
          description: "Check the sign of \\(y''\\).",
          workingLatex: "y'' = 2 > 0 \\text{ for all } x",
          explanation: "Positive second derivative means concave up (slope is increasing)."
        },
        {
          stepNumber: 4,
          description: "There are no inflection points since \\(y''\\) never equals zero.",
          workingLatex: "y'' \\ne 0 \\text{ anywhere}",
          explanation: "Concavity does not change."
        },
        {
          stepNumber: 5,
          description: "Conclude.",
          workingLatex: "\\text{Concave up on } \\mathbb{R}",
          explanation: "The classic 'U-shape' of an upward parabola."
        }
      ],
      finalAnswer: "Concave up everywhere."
    }
  },
  {
    id: "y2df9-027",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 27",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Determine the concavity of \\( y = -x^2 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["concavity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = -2x",
          explanation: "Power rule with the negative coefficient."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "y'' = -2",
          explanation: "Constant second derivative."
        },
        {
          stepNumber: 3,
          description: "Check sign.",
          workingLatex: "y'' = -2 < 0",
          explanation: "Negative second derivative means concave down (slope is decreasing)."
        },
        {
          stepNumber: 4,
          description: "No inflection.",
          workingLatex: "y'' \\ne 0",
          explanation: "Since \\(y''\\) is a non-zero constant, the concavity never changes."
        },
        {
          stepNumber: 5,
          description: "Conclude.",
          workingLatex: "\\text{Concave down on } \\mathbb{R}",
          explanation: "Inverted parabola shape."
        }
      ],
      finalAnswer: "Concave down everywhere."
    }
  },
  {
    id: "y2df9-028",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 28",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Determine where \\( y = x^3 \\) is concave up and concave down.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["concavity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate once.",
          workingLatex: "y' = 3x^2",
          explanation: "Power rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "y'' = 6x",
          explanation: "Differentiate \\(y'\\)."
        },
        {
          stepNumber: 3,
          description: "Find where \\(y'' = 0\\).",
          workingLatex: "6x = 0 \\Rightarrow x = 0",
          explanation: "Candidate inflection point at \\(x = 0\\)."
        },
        {
          stepNumber: 4,
          description: "Determine sign of \\(y''\\) on each side.",
          workingLatex: "y'' > 0 \\text{ for } x > 0;\\quad y'' < 0 \\text{ for } x < 0",
          explanation: "\\(y'' = 6x\\) has the same sign as \\(x\\)."
        },
        {
          stepNumber: 5,
          description: "State concavity intervals.",
          workingLatex: "\\text{Concave up on }(0, \\infty);\\;\\text{concave down on }(-\\infty, 0)",
          explanation: "The sign change confirms an inflection at \\((0, 0)\\)."
        },
        {
          stepNumber: 6,
          description: "Locate the inflection.",
          workingLatex: "y(0) = 0",
          explanation: "The point of inflection is \\((0, 0)\\) — also a stationary point since \\(y'(0) = 0\\), giving a horizontal inflection."
        },
        {
          stepNumber: 7,
          description: "Summary.",
          workingLatex: "\\text{Up on }(0, \\infty);\\;\\text{Down on }(-\\infty, 0)",
          explanation: "Concavity intervals identified by the sign of \\(y''\\)."
        }
      ],
      finalAnswer: "Concave up for \\(x>0\\); concave down for \\(x<0\\)."
    }
  },
  {
    id: "y2df9-029",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 29",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Determine the concavity of \\( y = \\ln x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["concavity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the domain.",
          workingLatex: "x > 0",
          explanation: "Logarithm is defined only for positive \\(x\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate.",
          workingLatex: "y' = \\dfrac{1}{x}",
          explanation: "Standard derivative of \\(\\ln x\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = -\\dfrac{1}{x^2}",
          explanation: "Apply power rule to \\(x^{-1}\\)."
        },
        {
          stepNumber: 4,
          description: "Check sign throughout the domain.",
          workingLatex: "y'' = -\\dfrac{1}{x^2} < 0 \\text{ for all } x > 0",
          explanation: "The denominator \\(x^2\\) is positive, so \\(y''\\) is negative throughout."
        },
        {
          stepNumber: 5,
          description: "Conclude.",
          workingLatex: "\\text{Concave down on }(0, \\infty)",
          explanation: "The logarithm grows but at a decreasing rate."
        },
        {
          stepNumber: 6,
          description: "No inflection points.",
          workingLatex: "y'' \\ne 0 \\text{ anywhere on the domain}",
          explanation: "Since \\(y'' = -1/x^2\\) is never zero on \\((0, \\infty)\\), the concavity does not change — no inflections."
        },
        {
          stepNumber: 7,
          description: "Compare with the inverse \\(e^x\\).",
          workingLatex: "e^x \\text{ is concave up};\\;\\ln x \\text{ is concave down}",
          explanation: "Reflecting the graph in \\(y = x\\) flips concavity — a quick sanity check via the inverse function relationship."
        }
      ],
      finalAnswer: "Concave down on \\((0, \\infty)\\)."
    }
  },
  {
    id: "y2df9-030",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 30",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Determine the concavity of \\( y = e^x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["concavity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = e^x",
          explanation: "The exponential is its own derivative."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "y'' = e^x",
          explanation: "Same form."
        },
        {
          stepNumber: 3,
          description: "Check sign.",
          workingLatex: "y'' = e^x > 0 \\text{ for all } x",
          explanation: "Exponentials are always positive."
        },
        {
          stepNumber: 4,
          description: "No inflection.",
          workingLatex: "y'' > 0",
          explanation: "Concavity is positive throughout, with no sign change."
        },
        {
          stepNumber: 5,
          description: "Conclude.",
          workingLatex: "\\text{Concave up on } \\mathbb{R}",
          explanation: "The graph is everywhere concave up — the slope grows ever steeper."
        }
      ],
      finalAnswer: "Concave up everywhere."
    }
  },
  // ── Straightforward y'' computations ────
  {
    id: "y2df9-031",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 31",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = x^3 + 2x^2 - 5x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the polynomial.",
          workingLatex: "y = x^3 + 2x^2 - 5x",
          explanation: "We apply the power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = 3x^2 + 4x - 5",
          explanation: "\\(\\tfrac{d}{dx}(x^3) = 3x^2\\), \\(\\tfrac{d}{dx}(2x^2) = 4x\\), \\(\\tfrac{d}{dx}(-5x) = -5\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 6x + 4",
          explanation: "\\(\\tfrac{d}{dx}(3x^2) = 6x\\), \\(\\tfrac{d}{dx}(4x) = 4\\), constant vanishes."
        },
        {
          stepNumber: 4,
          description: "Note structure.",
          workingLatex: "y'' = 6x + 4",
          explanation: "Linear in \\(x\\), as expected from twice differentiating a cubic."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 6x + 4",
          explanation: "Also useful for finding an inflection: \\(y'' = 0\\) at \\(x = -2/3\\)."
        }
      ],
      finalAnswer: "\\( 6x + 4 \\)"
    }
  },
  {
    id: "y2df9-032",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 32",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = 2x^4 - 3x^3 + 5 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the polynomial.",
          workingLatex: "y = 2x^4 - 3x^3 + 5",
          explanation: "Apply the power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = 8x^3 - 9x^2",
          explanation: "Constant 5 vanishes."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 24x^2 - 18x",
          explanation: "Power rule once more."
        },
        {
          stepNumber: 4,
          description: "Factor (optional).",
          workingLatex: "y'' = 6x(4x - 3)",
          explanation: "Useful if locating where \\(y'' = 0\\) (candidates for inflection): \\(x = 0\\) and \\(x = 3/4\\)."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 24x^2 - 18x",
          explanation: "Either factored or expanded form is acceptable."
        }
      ],
      finalAnswer: "\\( 24x^2 - 18x \\)"
    }
  },
  {
    id: "y2df9-033",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 33",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = (x+1)^5 \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative", "chain"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the composite structure.",
          workingLatex: "y = u^5 \\text{ with } u = x + 1",
          explanation: "We use the chain rule, but since \\(du/dx = 1\\), each application simply reduces the exponent."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = 5(x+1)^4 \\cdot 1 = 5(x+1)^4",
          explanation: "Chain rule: multiply by the derivative of the inner function (which is 1)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 20(x+1)^3",
          explanation: "Chain rule again on \\(5(x+1)^4\\)."
        },
        {
          stepNumber: 4,
          description: "Check the pattern.",
          workingLatex: "y'' = 5 \\cdot 4 \\cdot (x+1)^3",
          explanation: "Confirms the descending factorial pattern characteristic of repeatedly differentiating a single power."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 20(x+1)^3",
          explanation: "A neat factored form."
        },
        {
          stepNumber: 6,
          description: "Check zero of \\(y''\\).",
          workingLatex: "y'' = 0 \\Rightarrow x = -1",
          explanation: "At \\(x = -1\\), \\(y'' = 0\\); concavity changes there — giving an inflection."
        },
        {
          stepNumber: 7,
          description: "Verify by expansion (optional).",
          workingLatex: "y = (x+1)^5 \\Rightarrow y'' = 20x^3 + 60x^2 + 60x + 20 = 20(x+1)^3",
          explanation: "Direct expansion gives the same result, confirming the chain-rule approach."
        }
      ],
      finalAnswer: "\\( 20(x+1)^3 \\)"
    }
  },
  {
    id: "y2df9-034",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 34",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = (2x-1)^4 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the composite structure.",
          workingLatex: "y = u^4 \\text{ with } u = 2x - 1,\\; u' = 2",
          explanation: "Each chain-rule application brings down a factor of 2 from the inner derivative."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = 4(2x-1)^3 \\cdot 2 = 8(2x-1)^3",
          explanation: "Chain rule with inner derivative 2."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 8 \\cdot 3 (2x-1)^2 \\cdot 2 = 48(2x-1)^2",
          explanation: "Apply chain rule once more on \\(8(2x-1)^3\\)."
        },
        {
          stepNumber: 4,
          description: "Sanity check.",
          workingLatex: "4 \\cdot 3 \\cdot 2^2 = 48",
          explanation: "The factorial-style coefficient \\(\\tfrac{4!}{2!} = 12\\) times \\(2^2 = 4\\) gives 48 — agrees."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 48(2x-1)^2",
          explanation: "Note \\(y'' \\ge 0\\) for all \\(x\\), so the curve is concave up everywhere."
        },
        {
          stepNumber: 6,
          description: "Check zero of \\(y''\\).",
          workingLatex: "y'' = 0 \\Rightarrow x = \\tfrac{1}{2}",
          explanation: "At \\(x = 1/2\\) we have \\(y'' = 0\\), but the sign of \\(y''\\) does not change (it is a perfect square) — so this is NOT a point of inflection."
        },
        {
          stepNumber: 7,
          description: "Confirm.",
          workingLatex: "y''(0) = 48,\\; y''(1) = 48",
          explanation: "Both positive: concave up on both sides of \\(1/2\\). Stationary point of \\(y\\) at \\(x = 1/2\\) is actually a minimum (since \\(y' = 8(2x-1)^3\\) changes sign there)."
        }
      ],
      finalAnswer: "\\( 48(2x-1)^2 \\)"
    }
  },
  {
    id: "y2df9-035",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 35",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = \\cos(2x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall \\(\\tfrac{d}{dx}\\cos(kx) = -k\\sin(kx)\\).",
          workingLatex: "y = \\cos(2x)",
          explanation: "Chain rule contributes the factor \\(k\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = -2\\sin(2x)",
          explanation: "Bring down the factor 2 and switch \\(\\cos \\to -\\sin\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = -2 \\cdot 2\\cos(2x) = -4\\cos(2x)",
          explanation: "Chain rule on \\(\\sin(2x)\\) brings down another factor of 2 and switches \\(\\sin \\to \\cos\\)."
        },
        {
          stepNumber: 4,
          description: "Note relation to original.",
          workingLatex: "y'' = -4y",
          explanation: "\\(y = \\cos(2x)\\) satisfies \\(y'' + 4y = 0\\)."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = -4\\cos(2x)",
          explanation: "Two differentiations of \\(\\cos(kx)\\) bring down \\(-k^2\\)."
        },
        {
          stepNumber: 6,
          description: "Inflection candidates.",
          workingLatex: "y'' = 0 \\Rightarrow 2x = \\tfrac{\\pi}{2} + n\\pi \\Rightarrow x = \\tfrac{\\pi}{4} + \\tfrac{n\\pi}{2}",
          explanation: "Concavity flips at these \\(x\\)-values."
        },
        {
          stepNumber: 7,
          description: "Numerical check at \\(x = 0\\).",
          workingLatex: "y''(0) = -4",
          explanation: "Negative — \\(\\cos(2x)\\) is concave down near 0, as expected (cosine has a max at 0)."
        }
      ],
      finalAnswer: "\\( -4\\cos(2x) \\)"
    }
  },
  {
    id: "y2df9-036",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 36",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = e^{-3x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall \\(\\tfrac{d}{dx}e^{kx} = k e^{kx}\\).",
          workingLatex: "y = e^{-3x}",
          explanation: "Here \\(k = -3\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = -3 e^{-3x}",
          explanation: "Bring down the factor \\(-3\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = -3 \\cdot (-3) e^{-3x} = 9 e^{-3x}",
          explanation: "Another factor of \\(-3\\), giving \\((-3)^2 = 9\\)."
        },
        {
          stepNumber: 4,
          description: "Check sign.",
          workingLatex: "y'' = 9e^{-3x} > 0 \\text{ for all } x",
          explanation: "Concave up everywhere — as for any positive exponential."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 9e^{-3x}",
          explanation: "Differentiating \\(e^{kx}\\) twice multiplies by \\(k^2\\)."
        }
      ],
      finalAnswer: "\\( 9e^{-3x} \\)"
    }
  },
  {
    id: "y2df9-037",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 37",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = x^2 \\ln x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second derivative", "product"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the product rule with \\(u = x^2,\\; v = \\ln x\\).",
          workingLatex: "y' = 2x\\ln x + x^2 \\cdot \\dfrac{1}{x} = 2x\\ln x + x",
          explanation: "\\(u' = 2x\\); \\(v' = 1/x\\); product rule gives \\(u'v + uv'\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(y' = 2x\\ln x + x\\) term by term.",
          workingLatex: "\\tfrac{d}{dx}(2x\\ln x) = 2\\ln x + 2x \\cdot \\tfrac{1}{x} = 2\\ln x + 2",
          explanation: "Product rule again on the \\(2x\\ln x\\) piece."
        },
        {
          stepNumber: 3,
          description: "Differentiate the second piece \\(x\\).",
          workingLatex: "\\tfrac{d}{dx}(x) = 1",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "Combine.",
          workingLatex: "y'' = 2\\ln x + 2 + 1 = 2\\ln x + 3",
          explanation: "Sum of the pieces."
        },
        {
          stepNumber: 5,
          description: "Note.",
          workingLatex: "y'' = 0 \\text{ when } \\ln x = -3/2,\\; x = e^{-3/2}",
          explanation: "Useful if a follow-up requires the inflection point."
        },
        {
          stepNumber: 6,
          description: "Domain.",
          workingLatex: "x > 0",
          explanation: "We need \\(x > 0\\) for \\(\\ln x\\) to be defined."
        },
        {
          stepNumber: 7,
          description: "State the final answer.",
          workingLatex: "y'' = 2\\ln x + 3",
          explanation: "Reasonably compact."
        },
        {
          stepNumber: 8,
          description: "Sanity check at \\(x = 1\\).",
          workingLatex: "y(1) = 0;\\; y'(1) = 1;\\; y''(1) = 3",
          explanation: "Direct substitution; at \\(x = 1\\), \\(\\ln x = 0\\) so \\(y'' = 3\\) — positive, indicating concave up there."
        },
        {
          stepNumber: 9,
          description: "Inflection location.",
          workingLatex: "y'' = 0 \\Rightarrow \\ln x = -3/2 \\Rightarrow x = e^{-3/2} \\approx 0.223",
          explanation: "Concavity changes here; the curve is concave down on \\((0, e^{-3/2})\\) and concave up on \\((e^{-3/2}, \\infty)\\)."
        }
      ],
      finalAnswer: "\\( 2\\ln x + 3 \\)"
    }
  },
  {
    id: "y2df9-038",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 38",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = xe^x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second derivative", "product"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the product rule.",
          workingLatex: "y' = 1 \\cdot e^x + x \\cdot e^x = e^x(1 + x)",
          explanation: "Product rule with \\(u = x\\) (\\(u' = 1\\)) and \\(v = e^x\\) (\\(v' = e^x\\))."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(y'\\) using the product rule again.",
          workingLatex: "y'' = e^x(1 + x) + e^x \\cdot 1",
          explanation: "Apply product rule to \\(e^x \\cdot (1 + x)\\)."
        },
        {
          stepNumber: 3,
          description: "Simplify by factoring.",
          workingLatex: "y'' = e^x(1 + x + 1) = e^x(x + 2)",
          explanation: "Combine like terms."
        },
        {
          stepNumber: 4,
          description: "Inflection candidate.",
          workingLatex: "y'' = 0 \\text{ when } x = -2",
          explanation: "At \\(x = -2\\), \\(y'' = 0\\); changing sign gives an inflection point."
        },
        {
          stepNumber: 5,
          description: "Pattern note.",
          workingLatex: "\\tfrac{d^n}{dx^n}(xe^x) = e^x(x + n)",
          explanation: "Each differentiation increments the constant; a tidy pattern worth remembering."
        },
        {
          stepNumber: 6,
          description: "State the final answer.",
          workingLatex: "y'' = e^x(x + 2)",
          explanation: "Compact form."
        },
        {
          stepNumber: 7,
          description: "Stationary point of \\(y = xe^x\\).",
          workingLatex: "y' = e^x(1 + x) = 0 \\Rightarrow x = -1;\\; y(-1) = -1/e",
          explanation: "\\(y''(-1) = e^{-1}(1) = 1/e > 0\\) — local minimum at \\((-1, -1/e)\\). A neat application of the second-derivative test."
        }
      ],
      finalAnswer: "\\( e^x(x+2) \\)"
    }
  },
  {
    id: "y2df9-039",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 39",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = x\\sin x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the product rule.",
          workingLatex: "y' = \\sin x + x\\cos x",
          explanation: "Product rule with \\(u = x\\) and \\(v = \\sin x\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(\\sin x\\) (first term of \\(y'\\)).",
          workingLatex: "\\tfrac{d}{dx}\\sin x = \\cos x",
          explanation: "Standard derivative."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(x\\cos x\\) (second term of \\(y'\\)) using the product rule.",
          workingLatex: "\\tfrac{d}{dx}(x\\cos x) = \\cos x - x\\sin x",
          explanation: "Product rule with \\(u = x\\) and \\(v = \\cos x\\); \\(v' = -\\sin x\\)."
        },
        {
          stepNumber: 4,
          description: "Combine the two pieces.",
          workingLatex: "y'' = \\cos x + \\cos x - x\\sin x = 2\\cos x - x\\sin x",
          explanation: "Add the contributions."
        },
        {
          stepNumber: 5,
          description: "Sanity check at \\(x = 0\\).",
          workingLatex: "y''(0) = 2",
          explanation: "Near 0, \\(x\\sin x \\approx x^2\\), whose second derivative is 2 — consistent."
        },
        {
          stepNumber: 6,
          description: "State the final answer.",
          workingLatex: "y'' = 2\\cos x - x\\sin x",
          explanation: "Final compact form."
        },
        {
          stepNumber: 7,
          description: "Relation back to the original.",
          workingLatex: "y'' + y = 2\\cos x - x\\sin x + x\\sin x = 2\\cos x",
          explanation: "So \\(y = x\\sin x\\) satisfies \\(y'' + y = 2\\cos x\\) — a useful identity (Bessel-like)."
        }
      ],
      finalAnswer: "\\( 2\\cos x - x\\sin x \\)"
    }
  },
  {
    id: "y2df9-040",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 40",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = \\sin^2 x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the chain rule.",
          workingLatex: "y' = 2\\sin x\\cos x",
          explanation: "Chain rule: \\(\\tfrac{d}{dx}(\\sin x)^2 = 2\\sin x \\cdot \\cos x\\)."
        },
        {
          stepNumber: 2,
          description: "Use the double-angle identity.",
          workingLatex: "y' = \\sin(2x)",
          explanation: "\\(2\\sin x\\cos x = \\sin(2x)\\) makes the next step easier."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 2\\cos(2x)",
          explanation: "Chain rule on \\(\\sin(2x)\\) gives \\(2\\cos(2x)\\)."
        },
        {
          stepNumber: 4,
          description: "Verify via the half-angle identity.",
          workingLatex: "y = \\sin^2 x = \\tfrac{1 - \\cos(2x)}{2}",
          explanation: "Differentiating twice gives \\(y' = \\sin(2x)\\) and \\(y'' = 2\\cos(2x)\\) — agrees."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 2\\cos(2x)",
          explanation: "Clean closed form."
        },
        {
          stepNumber: 6,
          description: "Inflection candidates.",
          workingLatex: "y'' = 0 \\Rightarrow 2x = \\tfrac{\\pi}{2} + n\\pi \\Rightarrow x = \\tfrac{\\pi}{4} + \\tfrac{n\\pi}{2}",
          explanation: "Concavity changes at these \\(x\\)-values."
        },
        {
          stepNumber: 7,
          description: "Check at \\(x = 0\\).",
          workingLatex: "y(0) = 0;\\; y'(0) = 0;\\; y''(0) = 2",
          explanation: "Stationary at \\(x = 0\\) with \\(y''(0) = 2 > 0\\): a local minimum, matching the shape of \\(\\sin^2 x\\)."
        }
      ],
      finalAnswer: "\\( 2\\cos 2x \\)"
    }
  },
  // ── Classify with 2nd deriv test ────
  {
    id: "y2df9-041",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 41",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = x^3 - 6x^2 + 9x \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 3x^2 - 12x + 9",
          explanation: "Power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Factor and solve \\(y' = 0\\).",
          workingLatex: "3(x^2 - 4x + 3) = 3(x - 1)(x - 3) = 0 \\Rightarrow x = 1,\\; 3",
          explanation: "The quadratic factors."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(1) = 1 - 6 + 9 = 4;\\quad y(3) = 27 - 54 + 27 = 0",
          explanation: "Substitute back."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = 6x - 12",
          explanation: "Differentiate \\(y'\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the second-derivative test.",
          workingLatex: "y''(1) = -6 < 0\\;(\\text{max});\\;\\; y''(3) = 6 > 0\\;(\\text{min})",
          explanation: "Use signs of \\(y''\\) to classify."
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "\\text{Max }(1, 4);\\; \\text{Min }(3, 0)",
          explanation: "Both turning points classified."
        },
        {
          stepNumber: 7,
          description: "Locate the inflection.",
          workingLatex: "y'' = 0 \\Rightarrow x = 2;\\; y(2) = 8 - 24 + 18 = 2",
          explanation: "Inflection at \\((2, 2)\\), midway between the turning points — characteristic of a cubic."
        }
      ],
      finalAnswer: "Max \\((1, 4)\\); min \\((3, 0)\\)."
    }
  },
  {
    id: "y2df9-042",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 42",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary point of \\( y = x^2 + \\tfrac{1}{x} \\) for \\(x>0\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using power rule on \\(x^{-1}\\).",
          workingLatex: "y' = 2x - \\dfrac{1}{x^2}",
          explanation: "\\(\\tfrac{d}{dx}(x^{-1}) = -x^{-2}\\)."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "2x = \\dfrac{1}{x^2} \\Rightarrow 2x^3 = 1 \\Rightarrow x^3 = \\tfrac{1}{2}",
          explanation: "Multiply through by \\(x^2 > 0\\)."
        },
        {
          stepNumber: 3,
          description: "Take the cube root.",
          workingLatex: "x = \\left(\\tfrac{1}{2}\\right)^{1/3} = 2^{-1/3}",
          explanation: "This is the unique stationary point on the domain \\(x > 0\\)."
        },
        {
          stepNumber: 4,
          description: "Compute the \\(y\\)-value.",
          workingLatex: "y(2^{-1/3}) = 2^{-2/3} + 2^{1/3} = 3 \\cdot 2^{-2/3}",
          explanation: "Combining the two terms over the common factor \\(2^{-2/3}\\): \\(2^{-2/3} + 2^{1/3} = 2^{-2/3}(1 + 2) = 3 \\cdot 2^{-2/3}\\). Numerically \\(\\approx 1.89\\)."
        },
        {
          stepNumber: 5,
          description: "Second derivative.",
          workingLatex: "y'' = 2 + \\dfrac{2}{x^3}",
          explanation: "Differentiate \\(-x^{-2}\\) to get \\(2x^{-3}\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the second-derivative test.",
          workingLatex: "y''(2^{-1/3}) = 2 + 2 \\cdot 2 = 6 > 0",
          explanation: "Using \\(x^3 = 1/2\\), \\(2/x^3 = 4\\). Positive, so the stationary point is a minimum."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "\\text{Minimum at } x = 2^{-1/3}",
          explanation: "Note that \\(y'' > 0\\) for all \\(x > 0\\), so this is the global minimum on \\((0, \\infty)\\)."
        },
        {
          stepNumber: 8,
          description: "Compute the exact minimum value.",
          workingLatex: "y_{\\min} = 2^{-2/3} + 2^{1/3} = \\tfrac{1}{2^{2/3}} + 2^{1/3} = 3 \\cdot 2^{-2/3}",
          explanation: "Common denominator: \\(2^{-2/3} + 2^{1/3} = 2^{-2/3}(1 + 2) = 3 \\cdot 2^{-2/3}\\)."
        },
        {
          stepNumber: 9,
          description: "Numerical estimate.",
          workingLatex: "3 \\cdot 2^{-2/3} \\approx 3 / 1.587 \\approx 1.890",
          explanation: "Minimum value approximately 1.89; sanity-check by computing \\(y\\) at \\(x = 0.794\\)."
        }
      ],
      finalAnswer: "Minimum at \\( x = 2^{-1/3} \\)."
    }
  },
  {
    id: "y2df9-043",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 43",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Classify the stationary point of \\( y = e^x - x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = e^x - 1",
          explanation: "Derivative of \\(e^x\\) is \\(e^x\\); derivative of \\(-x\\) is \\(-1\\)."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "e^x = 1 \\Rightarrow x = 0",
          explanation: "The unique stationary point."
        },
        {
          stepNumber: 3,
          description: "Compute the \\(y\\)-coordinate.",
          workingLatex: "y(0) = e^0 - 0 = 1",
          explanation: "Stationary point at \\((0, 1)\\)."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = e^x",
          explanation: "Differentiate \\(y' = e^x - 1\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the second-derivative test.",
          workingLatex: "y''(0) = 1 > 0 \\Rightarrow \\text{minimum}",
          explanation: "Positive \\(y''\\) gives a local minimum."
        },
        {
          stepNumber: 6,
          description: "Note global minimum.",
          workingLatex: "y'' = e^x > 0 \\text{ everywhere}",
          explanation: "The function is convex on all of \\(\\mathbb{R}\\), so the stationary point is the global minimum."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "\\text{Min at }(0, 1)",
          explanation: "This is the well-known inequality \\(e^x \\ge x + 1\\) with equality at \\(x = 0\\)."
        },
        {
          stepNumber: 7,
          description: "Tangent-line interpretation.",
          workingLatex: "y = x + 1 \\text{ is the tangent to } y = e^x \\text{ at } x = 0",
          explanation: "Equivalently, the function \\(e^x - x\\) measures how far \\(e^x\\) lies above its tangent at the origin."
        }
      ],
      finalAnswer: "Minimum at \\((0, 1)\\)."
    }
  },
  {
    id: "y2df9-044",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 44",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find and classify stationary points of \\( y = x^3 + 3x^2 - 9x + 5 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 3x^2 + 6x - 9",
          explanation: "Power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Factor and solve \\(y' = 0\\).",
          workingLatex: "3(x^2 + 2x - 3) = 3(x - 1)(x + 3) = 0 \\Rightarrow x = 1,\\; -3",
          explanation: "Quadratic factors over the integers."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(1) = 1 + 3 - 9 + 5 = 0;\\quad y(-3) = -27 + 27 + 27 + 5 = 32",
          explanation: "Substitute back."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = 6x + 6",
          explanation: "Differentiate \\(y'\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the second-derivative test.",
          workingLatex: "y''(1) = 12 > 0\\;(\\text{min});\\quad y''(-3) = -12 < 0\\;(\\text{max})",
          explanation: "Signs of \\(y''\\) classify each turning point."
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "\\text{Max }(-3, 32);\\; \\text{Min }(1, 0)",
          explanation: "Both classified."
        },
        {
          stepNumber: 7,
          description: "Locate the inflection.",
          workingLatex: "y'' = 0 \\Rightarrow x = -1;\\; y(-1) = -1 + 3 + 9 + 5 = 16",
          explanation: "Inflection at \\((-1, 16)\\), midway between the turning points as expected for a cubic."
        }
      ],
      finalAnswer: "Max \\((-3, 32)\\); min \\((1, 0)\\)."
    }
  },
  {
    id: "y2df9-045",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 45",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Classify the stationary points of \\( y = x^2 e^{-x} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the product rule.",
          workingLatex: "y' = 2x e^{-x} + x^2 \\cdot (-e^{-x}) = e^{-x}(2x - x^2)",
          explanation: "\\(u = x^2,\\; v = e^{-x};\\; v' = -e^{-x}\\)."
        },
        {
          stepNumber: 2,
          description: "Factor.",
          workingLatex: "y' = x e^{-x}(2 - x)",
          explanation: "Pull out the common \\(x\\)."
        },
        {
          stepNumber: 3,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "x = 0 \\text{ or } x = 2",
          explanation: "\\(e^{-x} > 0\\) cannot vanish; the other factors give the two stationary \\(x\\)-values."
        },
        {
          stepNumber: 4,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(0) = 0;\\quad y(2) = 4 e^{-2}",
          explanation: "Substitute each back."
        },
        {
          stepNumber: 5,
          description: "Second derivative.",
          workingLatex: "y'' = e^{-x}(x^2 - 4x + 2)",
          explanation: "Differentiate \\(y' = e^{-x}(2x - x^2)\\) using product rule and simplify."
        },
        {
          stepNumber: 6,
          description: "Evaluate.",
          workingLatex: "y''(0) = 2 > 0\\;(\\text{min});\\quad y''(2) = e^{-2}(4 - 8 + 2) = -2 e^{-2} < 0\\;(\\text{max})",
          explanation: "Apply the second-derivative test."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "\\text{Min }(0, 0);\\; \\text{Max }(2,\\; 4/e^2)",
          explanation: "Note the local max is also the global max on \\(\\mathbb{R}_{\\ge 0}\\), since \\(y \\to 0\\) as \\(x \\to \\infty\\)."
        },
        {
          stepNumber: 8,
          description: "Inflection points.",
          workingLatex: "y'' = 0 \\Rightarrow x^2 - 4x + 2 = 0 \\Rightarrow x = 2 \\pm \\sqrt 2",
          explanation: "Two inflections, one between the turning points (\\(x = 2 - \\sqrt 2 \\approx 0.59\\)) and one beyond the maximum (\\(x = 2 + \\sqrt 2 \\approx 3.41\\))."
        },
        {
          stepNumber: 9,
          description: "Numerical max value.",
          workingLatex: "4/e^2 \\approx 0.541",
          explanation: "The global maximum height is about 0.54 — consistent with the curve shape."
        }
      ],
      finalAnswer: "Min \\((0, 0)\\); max \\((2, 4/e^2)\\)."
    }
  },
  {
    id: "y2df9-046",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 46",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Classify the stationary point of \\( y = \\tfrac{\\ln x}{x} \\) for \\(x>0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the quotient rule.",
          workingLatex: "y' = \\dfrac{(1/x)\\cdot x - \\ln x \\cdot 1}{x^2} = \\dfrac{1 - \\ln x}{x^2}",
          explanation: "Quotient rule \\((u/v)' = (u'v - uv')/v^2\\) with \\(u = \\ln x,\\; v = x\\)."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "1 - \\ln x = 0 \\Rightarrow \\ln x = 1 \\Rightarrow x = e",
          explanation: "The denominator \\(x^2 > 0\\), so only the numerator can vanish."
        },
        {
          stepNumber: 3,
          description: "Compute the \\(y\\)-coordinate.",
          workingLatex: "y(e) = \\dfrac{\\ln e}{e} = \\dfrac{1}{e}",
          explanation: "Substitute \\(x = e\\)."
        },
        {
          stepNumber: 4,
          description: "Second derivative (quotient rule on \\(y' = (1 - \\ln x)/x^2\\)).",
          workingLatex: "y'' = \\dfrac{(-1/x) x^2 - (1 - \\ln x)\\cdot 2x}{x^4} = \\dfrac{-1 - 2(1 - \\ln x)}{x^3} = \\dfrac{2\\ln x - 3}{x^3}",
          explanation: "Quotient rule, then simplify."
        },
        {
          stepNumber: 5,
          description: "Evaluate at the stationary point.",
          workingLatex: "y''(e) = \\dfrac{2 - 3}{e^3} = -\\dfrac{1}{e^3} < 0",
          explanation: "Negative, so this is a local maximum."
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "\\text{Max at }(e,\\; 1/e)",
          explanation: "Global maximum of \\(\\ln x/x\\) on \\((0, \\infty)\\)."
        },
        {
          stepNumber: 7,
          description: "Application: comparing \\(e^\\pi\\) and \\(\\pi^e\\).",
          workingLatex: "\\dfrac{\\ln e}{e} > \\dfrac{\\ln \\pi}{\\pi} \\Rightarrow e \\ln \\pi < \\pi \\Rightarrow \\pi^e < e^\\pi",
          explanation: "The maximum being at \\(x = e\\) means \\(\\ln x / x\\) is smaller at all other \\(x\\), in particular at \\(x = \\pi\\) — proving \\(e^\\pi > \\pi^e\\)."
        },
        {
          stepNumber: 8,
          description: "Asymptotic behaviour.",
          workingLatex: "\\lim_{x \\to \\infty}\\dfrac{\\ln x}{x} = 0;\\; \\lim_{x \\to 0^+}\\dfrac{\\ln x}{x} = -\\infty",
          explanation: "Confirms the maximum we found is global on \\((0, \\infty)\\)."
        },
        {
          stepNumber: 9,
          description: "Numerical check.",
          workingLatex: "1/e \\approx 0.368",
          explanation: "Maximum value approximately 0.37, attained near \\(x \\approx 2.72\\)."
        }
      ],
      finalAnswer: "Maximum at \\((e, 1/e)\\)."
    }
  },
  // ── Using y'' for rate interpretation ────
  {
    id: "y2df9-047",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 47",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A particle's displacement is \\( s = t^3 - 6t^2 \\). Find its acceleration at \\(t = 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["mechanics", "second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall: velocity is the first derivative, acceleration the second.",
          workingLatex: "v = s',\\quad a = s''",
          explanation: "Mechanics interpretation of derivatives with respect to time."
        },
        {
          stepNumber: 2,
          description: "Differentiate once to get velocity.",
          workingLatex: "s' = 3t^2 - 12t",
          explanation: "Power rule on each term."
        },
        {
          stepNumber: 3,
          description: "Differentiate again to get acceleration.",
          workingLatex: "s'' = 6t - 12",
          explanation: "Differentiate \\(s'\\)."
        },
        {
          stepNumber: 4,
          description: "Substitute \\(t = 3\\).",
          workingLatex: "s''(3) = 18 - 12 = 6",
          explanation: "Direct evaluation."
        },
        {
          stepNumber: 5,
          description: "State the answer with units (assumed SI).",
          workingLatex: "a = 6 \\text{ m s}^{-2}",
          explanation: "Acceleration is positive, so the particle is speeding up in the positive direction at \\(t = 3\\) (or slowing down if travelling in the negative direction)."
        },
        {
          stepNumber: 6,
          description: "Velocity at \\(t = 3\\) for context.",
          workingLatex: "v(3) = 3 \\cdot 9 - 36 = -9",
          explanation: "Velocity is negative; combined with positive acceleration, the particle is slowing down (decelerating in absolute terms)."
        },
        {
          stepNumber: 7,
          description: "Find when the particle is instantaneously at rest.",
          workingLatex: "v = 3t(t - 4) = 0 \\Rightarrow t = 0,\\; 4",
          explanation: "The particle is stationary at \\(t = 0\\) and \\(t = 4\\); between these it moves in the negative direction."
        }
      ],
      finalAnswer: "\\( 6 \\)."
    }
  },
  {
    id: "y2df9-048",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 48",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "A particle moves so that \\( s = 4\\sin 2t \\). Find its acceleration at \\( t = 0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["mechanics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the chain rule.",
          workingLatex: "s' = 4 \\cdot 2\\cos 2t = 8\\cos 2t",
          explanation: "Chain rule on \\(\\sin(2t)\\): bring down the factor 2."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "s'' = -16\\sin 2t",
          explanation: "Chain rule on \\(\\cos(2t)\\) gives \\(-2\\sin(2t)\\), then multiply by 8."
        },
        {
          stepNumber: 3,
          description: "Note the SHM relationship.",
          workingLatex: "s'' = -4 s",
          explanation: "The acceleration is proportional to the negative of the displacement — simple harmonic motion with \\(\\omega = 2\\)."
        },
        {
          stepNumber: 4,
          description: "Evaluate at \\(t = 0\\).",
          workingLatex: "s''(0) = -16\\sin 0 = 0",
          explanation: "Since \\(\\sin 0 = 0\\)."
        },
        {
          stepNumber: 5,
          description: "Interpret.",
          workingLatex: "a(0) = 0",
          explanation: "At \\(t = 0\\) the particle is passing through the equilibrium position with maximum speed and zero acceleration."
        },
        {
          stepNumber: 6,
          description: "Initial velocity for context.",
          workingLatex: "s'(0) = 8\\cos 0 = 8",
          explanation: "Maximum speed of 8 units per unit time at \\(t = 0\\) — characteristic of SHM."
        },
        {
          stepNumber: 7,
          description: "Period of motion.",
          workingLatex: "T = \\dfrac{2\\pi}{2} = \\pi",
          explanation: "Angular frequency \\(\\omega = 2\\); period \\(T = \\pi\\)."
        }
      ],
      finalAnswer: "\\( 0 \\)."
    }
  },
  {
    id: "y2df9-049",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 49",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Show that \\( s = A\\cos(\\omega t) \\) satisfies \\( s'' + \\omega^2 s = 0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["SHM", "proof"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the chain rule.",
          workingLatex: "s' = -A\\omega\\sin(\\omega t)",
          explanation: "Inner derivative \\(\\omega\\); outer derivative of \\(\\cos\\) is \\(-\\sin\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "s'' = -A\\omega \\cdot \\omega\\cos(\\omega t) = -A\\omega^2\\cos(\\omega t)",
          explanation: "Chain rule on \\(\\sin(\\omega t)\\) gives another factor of \\(\\omega\\) and turns \\(\\sin\\) into \\(\\cos\\)."
        },
        {
          stepNumber: 3,
          description: "Recognise the result as \\(-\\omega^2\\) times the original.",
          workingLatex: "s'' = -\\omega^2 \\cdot A\\cos(\\omega t) = -\\omega^2 s",
          explanation: "The exact factor \\(-\\omega^2\\) appears as a multiplier."
        },
        {
          stepNumber: 4,
          description: "Rearrange.",
          workingLatex: "s'' + \\omega^2 s = 0",
          explanation: "Adding \\(\\omega^2 s\\) to both sides gives the SHM differential equation."
        },
        {
          stepNumber: 5,
          description: "Interpret.",
          workingLatex: "\\text{SHM with angular frequency } \\omega",
          explanation: "This is the canonical equation of simple harmonic motion; period \\(T = 2\\pi/\\omega\\)."
        },
        {
          stepNumber: 6,
          description: "Conclude the proof.",
          workingLatex: "\\therefore s = A\\cos(\\omega t) \\text{ satisfies } s'' + \\omega^2 s = 0",
          explanation: "Verified directly by computation."
        },
        {
          stepNumber: 7,
          description: "Period and amplitude.",
          workingLatex: "T = \\dfrac{2\\pi}{\\omega};\\;\\; |s|_{\\max} = A",
          explanation: "Standard SHM facts: the period depends only on \\(\\omega\\), and the amplitude \\(A\\) is the maximum displacement from equilibrium."
        },
        {
          stepNumber: 8,
          description: "General solution to \\(s'' + \\omega^2 s = 0\\).",
          workingLatex: "s = A\\cos(\\omega t) + B\\sin(\\omega t)",
          explanation: "Any linear combination of \\(\\cos(\\omega t)\\) and \\(\\sin(\\omega t)\\) is a solution; phase-shifted by \\(\\arctan(B/A)\\) from a pure cosine."
        },
        {
          stepNumber: 9,
          description: "Energy interpretation.",
          workingLatex: "\\tfrac{d}{dt}\\!\\left[\\tfrac{1}{2}(s')^2 + \\tfrac{1}{2}\\omega^2 s^2\\right] = s' s'' + \\omega^2 s s' = s'(s'' + \\omega^2 s) = 0",
          explanation: "The quantity \\((s')^2 + \\omega^2 s^2\\) is conserved — this is the conservation of energy expression that follows from the SHM equation."
        }
      ],
      finalAnswer: "\\( s'' = -\\omega^2 s \\) \\(\\blacksquare\\)."
    }
  },
  // ── Extended practice ────
  {
    id: "y2df9-050",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 50",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Classify the stationary points of \\( y = -x^3 + 3x^2 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = -3x^2 + 6x",
          explanation: "Power rule term-by-term, with sign care."
        },
        {
          stepNumber: 2,
          description: "Factor and solve \\(y' = 0\\).",
          workingLatex: "-3x(x - 2) = 0 \\Rightarrow x = 0,\\; 2",
          explanation: "Two stationary \\(x\\)-values."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(0) = 0;\\quad y(2) = -8 + 12 = 4",
          explanation: "Substitute back."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = -6x + 6",
          explanation: "Differentiate \\(y'\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the second-derivative test.",
          workingLatex: "y''(0) = 6 > 0\\;(\\text{min});\\quad y''(2) = -6 < 0\\;(\\text{max})",
          explanation: "Standard classification."
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "\\text{Min }(0, 0);\\; \\text{Max }(2, 4)",
          explanation: "Note the order is reversed compared with a positive-leading cubic — the negative leading coefficient flips the shape."
        },
        {
          stepNumber: 7,
          description: "Locate the inflection.",
          workingLatex: "y'' = 0 \\Rightarrow x = 1;\\; y(1) = -1 + 3 = 2",
          explanation: "Inflection at \\((1, 2)\\), midway between the turning points."
        }
      ],
      finalAnswer: "Min \\((0,0)\\); max \\((2, 4)\\)."
    }
  },
  {
    id: "y2df9-051",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 51",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Analyse the concavity and find inflection points of \\( y = x + \\sin x \\) on \\([0, 2\\pi]\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["concavity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 1 + \\cos x",
          explanation: "Sum rule on \\(x\\) and \\(\\sin x\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "y'' = -\\sin x",
          explanation: "Derivative of \\(\\cos x\\) is \\(-\\sin x\\)."
        },
        {
          stepNumber: 3,
          description: "Solve \\(y'' = 0\\) on \\([0, 2\\pi]\\).",
          workingLatex: "\\sin x = 0 \\Rightarrow x = 0,\\; \\pi,\\; 2\\pi",
          explanation: "Interior candidate (where sign change is possible): \\(x = \\pi\\)."
        },
        {
          stepNumber: 4,
          description: "Determine sign of \\(y''\\) on each subinterval.",
          workingLatex: "y'' < 0 \\text{ on }(0, \\pi);\\quad y'' > 0 \\text{ on }(\\pi, 2\\pi)",
          explanation: "On \\((0, \\pi)\\), \\(\\sin x > 0\\) so \\(y'' < 0\\); on \\((\\pi, 2\\pi)\\), \\(\\sin x < 0\\) so \\(y'' > 0\\)."
        },
        {
          stepNumber: 5,
          description: "Confirm sign change at \\(x = \\pi\\) → inflection.",
          workingLatex: "y \\text{ goes from concave down to concave up at } x = \\pi",
          explanation: "Genuine inflection."
        },
        {
          stepNumber: 6,
          description: "Compute the \\(y\\)-coordinate.",
          workingLatex: "y(\\pi) = \\pi + \\sin\\pi = \\pi",
          explanation: "Substitute \\(x = \\pi\\)."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "\\text{Inflection }(\\pi, \\pi)",
          explanation: "Concave down on \\((0, \\pi)\\), concave up on \\((\\pi, 2\\pi)\\)."
        },
        {
          stepNumber: 8,
          description: "Check there are no turning points.",
          workingLatex: "y' = 1 + \\cos x \\ge 0",
          explanation: "Equality only at \\(x = \\pi\\), where \\(y' = 0\\) but \\(y'\\) does not change sign — a horizontal point of inflection."
        },
        {
          stepNumber: 9,
          description: "Combine the two findings.",
          workingLatex: "(\\pi, \\pi) \\text{ is both a stationary point and an inflection}",
          explanation: "A horizontal inflection where the curve is momentarily flat but does not turn. The function \\(y = x + \\sin x\\) is monotonically increasing on the interval."
        }
      ],
      finalAnswer: "Inflection at \\((\\pi, \\pi)\\). Concave down on \\((0, \\pi)\\), concave up on \\((\\pi, 2\\pi)\\)."
    }
  },
  {
    id: "y2df9-052",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 52",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the point of inflection of \\( y = x^3 - 3x^2 + 2 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inflection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate once.",
          workingLatex: "y' = 3x^2 - 6x",
          explanation: "Power rule on the cubic."
        },
        {
          stepNumber: 2,
          description: "Differentiate again.",
          workingLatex: "y'' = 6x - 6",
          explanation: "Linear second derivative."
        },
        {
          stepNumber: 3,
          description: "Solve \\(y'' = 0\\).",
          workingLatex: "6x - 6 = 0 \\Rightarrow x = 1",
          explanation: "Candidate inflection \\(x\\)-value."
        },
        {
          stepNumber: 4,
          description: "Check sign change.",
          workingLatex: "y''(0) = -6 < 0;\\quad y''(2) = 6 > 0",
          explanation: "Sign of \\(y''\\) changes through \\(x = 1\\), so this is a genuine point of inflection."
        },
        {
          stepNumber: 5,
          description: "Compute the \\(y\\)-coordinate.",
          workingLatex: "y(1) = 1 - 3 + 2 = 0",
          explanation: "Substitute \\(x = 1\\) into the original."
        },
        {
          stepNumber: 6,
          description: "State.",
          workingLatex: "(1, 0)",
          explanation: "The point of inflection. Note \\(y'(1) = -3 \\ne 0\\) — non-horizontal inflection."
        },
        {
          stepNumber: 7,
          description: "Locate stationary points for context.",
          workingLatex: "y' = 3x^2 - 6x = 3x(x - 2) = 0 \\Rightarrow x = 0,\\; 2",
          explanation: "Max at \\((0, 2)\\); min at \\((2, -2)\\). The inflection lies midway between them — characteristic of a cubic."
        }
      ],
      finalAnswer: "Inflection at \\((1, 0)\\)."
    }
  },
  {
    id: "y2df9-053",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 53",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "State the difference between a stationary point and a point of inflection.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["theory"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Define a stationary point.",
          workingLatex: "y'(a) = 0",
          explanation: "A point on the curve where the gradient is zero — the tangent is horizontal."
        },
        {
          stepNumber: 2,
          description: "Define a point of inflection.",
          workingLatex: "y'' \\text{ changes sign at } a",
          explanation: "A point where the concavity changes — necessary condition \\(y''(a) = 0\\), but \\(y''(a) = 0\\) alone is not sufficient (e.g. \\(y = x^4\\) at 0)."
        },
        {
          stepNumber: 3,
          description: "Compare the two concepts.",
          workingLatex: "\\text{Stationary} \\not\\Leftrightarrow \\text{Inflection}",
          explanation: "Neither implies the other in general. A stationary point may be a max, min, or horizontal inflection. An inflection may be at a stationary point (horizontal inflection) or not (non-horizontal inflection)."
        },
        {
          stepNumber: 4,
          description: "Examples.",
          workingLatex: "\\text{Stationary, not inflection: }y=x^2 \\text{ at }0;\\quad \\text{Inflection, not stationary: }y=x^3-3x^2 \\text{ at }x=1",
          explanation: "The first is a minimum (no concavity change); the second has \\(y''\\) changing sign without \\(y' = 0\\)."
        },
        {
          stepNumber: 5,
          description: "Summary.",
          workingLatex: "\\text{Stationary: } y'=0;\\;\\text{Inflection: } y'' \\text{ changes sign}",
          explanation: "Both are *features* of curves, but defined by different derivative conditions."
        }
      ],
      finalAnswer: "Stationary: \\(y' = 0\\). Inflection: \\(y''\\) changes sign. Neither implies the other."
    }
  },
  {
    id: "y2df9-054",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 54",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify stationary points of \\( y = 3x^4 - 4x^3 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 12x^3 - 12x^2",
          explanation: "Power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Factor and solve \\(y' = 0\\).",
          workingLatex: "12x^2(x - 1) = 0 \\Rightarrow x = 0 \\text{ (double)},\\; x = 1",
          explanation: "\\(x = 0\\) is a repeated root of \\(y'\\) — flagging that the test may be inconclusive there."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(0) = 0;\\quad y(1) = 3 - 4 = -1",
          explanation: "Substitute back."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = 36x^2 - 24x",
          explanation: "Differentiate \\(y'\\)."
        },
        {
          stepNumber: 5,
          description: "Evaluate.",
          workingLatex: "y''(1) = 12 > 0\\;(\\text{min});\\quad y''(0) = 0 \\;(\\text{inconclusive})",
          explanation: "Standard at \\(x = 1\\); inconclusive at \\(x = 0\\)."
        },
        {
          stepNumber: 6,
          description: "Sign test for \\(y'\\) near 0.",
          workingLatex: "y' = 12x^2(x - 1) < 0 \\text{ for } -\\varepsilon < x < \\varepsilon",
          explanation: "On both sides of 0, \\(x^2 > 0\\) and \\(x - 1 < 0\\), so \\(y' < 0\\). The gradient does not change sign."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "\\text{Min }(1, -1);\\; \\text{Horizontal inflection }(0, 0)",
          explanation: "Standard cautionary example where the second-derivative test fails but the sign test resolves it."
        },
        {
          stepNumber: 8,
          description: "Locate the second inflection (non-stationary).",
          workingLatex: "y'' = 12x(3x - 2) = 0 \\Rightarrow x = 0,\\; 2/3",
          explanation: "There is also an inflection at \\(x = 2/3\\) where \\(y'\\) is nonzero — the concavity changes from positive to negative there."
        },
        {
          stepNumber: 9,
          description: "Compute \\(y(2/3)\\).",
          workingLatex: "y(2/3) = 3 \\cdot \\tfrac{16}{81} - 4 \\cdot \\tfrac{8}{27} = \\tfrac{48 - 96}{81} = -\\tfrac{48}{81} = -\\tfrac{16}{27}",
          explanation: "Non-horizontal inflection at \\((2/3, -16/27)\\); a useful piece of additional information."
        }
      ],
      finalAnswer: "Min \\((1, -1)\\); horizontal inflection at \\((0, 0)\\)."
    }
  },
  {
    id: "y2df9-055",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 55",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Classify the stationary point of \\( y = (x-2)^3 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the chain rule.",
          workingLatex: "y' = 3(x - 2)^2",
          explanation: "Chain rule (inner derivative is 1)."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "3(x - 2)^2 = 0 \\Rightarrow x = 2",
          explanation: "Single stationary \\(x\\)-value (double root)."
        },
        {
          stepNumber: 3,
          description: "Compute the \\(y\\)-coordinate.",
          workingLatex: "y(2) = 0",
          explanation: "Substitute back."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = 6(x - 2)",
          explanation: "Differentiate \\(y'\\)."
        },
        {
          stepNumber: 5,
          description: "Evaluate.",
          workingLatex: "y''(2) = 0",
          explanation: "The second-derivative test fails."
        },
        {
          stepNumber: 6,
          description: "Sign test on \\(y'\\) near \\(x = 2\\).",
          workingLatex: "y' = 3(x - 2)^2 \\ge 0",
          explanation: "Non-negative everywhere with equality only at \\(x = 2\\) — no sign change of \\(y'\\)."
        },
        {
          stepNumber: 7,
          description: "Conclude.",
          workingLatex: "(2, 0) \\text{ is a horizontal point of inflection}",
          explanation: "Stationary but no turning behaviour; \\(y''\\) does change sign at 2 (negative for \\(x < 2\\), positive for \\(x > 2\\)), confirming inflection."
        }
      ],
      finalAnswer: "Horizontal inflection at \\((2, 0)\\)."
    }
  },
  {
    id: "y2df9-056",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 56",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A sheet of card \\(12\\times 12\\) has squares of side \\(x\\) removed from each corner, then folded into a box. Find the value of \\(x\\) that maximises volume.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimisation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the volume.",
          workingLatex: "V = x(12 - 2x)^2",
          explanation: "Height \\(x\\); base side after folding \\(12 - 2x\\). Valid for \\(0 < x < 6\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate using product and chain rules.",
          workingLatex: "V' = (12 - 2x)^2 + x \\cdot 2(12 - 2x)(-2)",
          explanation: "Product rule with \\(u = x,\\; v = (12 - 2x)^2\\); chain rule on \\(v\\)."
        },
        {
          stepNumber: 3,
          description: "Factor.",
          workingLatex: "V' = (12 - 2x)[(12 - 2x) - 4x] = (12 - 2x)(12 - 6x)",
          explanation: "Common factor \\((12 - 2x)\\)."
        },
        {
          stepNumber: 4,
          description: "Solve \\(V' = 0\\).",
          workingLatex: "12 - 2x = 0 \\Rightarrow x = 6;\\quad 12 - 6x = 0 \\Rightarrow x = 2",
          explanation: "\\(x = 6\\) gives a degenerate box (base side 0); the physical maximum is at \\(x = 2\\)."
        },
        {
          stepNumber: 5,
          description: "Second derivative.",
          workingLatex: "V' = (12 - 2x)(12 - 6x) = 144 - 96x + 12x^2 \\Rightarrow V'' = 24x - 96",
          explanation: "Expand \\(V'\\) then differentiate."
        },
        {
          stepNumber: 6,
          description: "Test at \\(x = 2\\).",
          workingLatex: "V''(2) = 48 - 96 = -48 < 0 \\Rightarrow \\text{maximum}",
          explanation: "Negative \\(V''\\) confirms a local max — the desired optimum."
        },
        {
          stepNumber: 7,
          description: "Compute the maximum volume.",
          workingLatex: "V(2) = 2 \\cdot 8^2 = 128",
          explanation: "Maximum volume is 128 cm³."
        },
        {
          stepNumber: 8,
          description: "State.",
          workingLatex: "x = 2 \\text{ cm}",
          explanation: "Cut squares of side 2 cm."
        },
        {
          stepNumber: 9,
          description: "Check endpoints of the domain.",
          workingLatex: "V(0) = 0;\\;\\; V(6) = 0",
          explanation: "Both endpoints give zero volume, confirming that the interior critical point \\(x = 2\\) is the global maximum on \\((0, 6)\\)."
        }
      ],
      finalAnswer: "\\( x = 2 \\) cm."
    }
  },
  {
    id: "y2df9-057",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 57",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A closed cylinder has volume \\( 1000 \\) cm³. Find the radius that minimises its surface area.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimisation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the volume constraint.",
          workingLatex: "V = \\pi r^2 h = 1000 \\Rightarrow h = \\dfrac{1000}{\\pi r^2}",
          explanation: "Eliminate \\(h\\) so the surface area is a function of \\(r\\) alone."
        },
        {
          stepNumber: 2,
          description: "Write the surface area.",
          workingLatex: "S = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\dfrac{2000}{r}",
          explanation: "Two circular ends plus the lateral surface; substitute the expression for \\(h\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate.",
          workingLatex: "S' = 4\\pi r - \\dfrac{2000}{r^2}",
          explanation: "Power rule on \\(2\\pi r^2\\) and on \\(2000 r^{-1}\\)."
        },
        {
          stepNumber: 4,
          description: "Solve \\(S' = 0\\).",
          workingLatex: "4\\pi r = \\dfrac{2000}{r^2} \\Rightarrow r^3 = \\dfrac{2000}{4\\pi} = \\dfrac{500}{\\pi}",
          explanation: "Multiply through by \\(r^2\\)."
        },
        {
          stepNumber: 5,
          description: "Take the cube root.",
          workingLatex: "r = \\sqrt[3]{\\dfrac{500}{\\pi}}",
          explanation: "This is the unique positive stationary point."
        },
        {
          stepNumber: 6,
          description: "Second derivative.",
          workingLatex: "S'' = 4\\pi + \\dfrac{4000}{r^3} > 0 \\text{ for all } r > 0",
          explanation: "Differentiate \\(-2000 r^{-2}\\) to get \\(4000 r^{-3}\\)."
        },
        {
          stepNumber: 7,
          description: "Conclude this is a minimum.",
          workingLatex: "S'' > 0 \\Rightarrow \\text{minimum}",
          explanation: "Positive \\(S''\\) on the whole domain confirms a global minimum."
        },
        {
          stepNumber: 8,
          description: "Numerical answer.",
          workingLatex: "r = \\sqrt[3]{500/\\pi} \\approx 5.42 \\text{ cm}",
          explanation: "Optimal radius. (At this point, \\(h = 2r\\) — a classic result: surface area is minimised when height equals diameter.)"
        },
        {
          stepNumber: 9,
          description: "Verify \\(h = 2r\\) at the optimum.",
          workingLatex: "h = \\dfrac{1000}{\\pi r^2} = \\dfrac{2 \\cdot (500/\\pi)}{r^2} = \\dfrac{2 r^3}{r^2} = 2r",
          explanation: "Using the stationary-point relation \\(r^3 = 500/\\pi\\): substitute \\(1000/\\pi = 2 r^3\\) in the numerator, then cancel \\(r^2\\). The optimal closed cylinder has its height equal to its diameter."
        }
      ],
      finalAnswer: "\\( r = \\sqrt[3]{500/\\pi} \\approx 5.42 \\) cm."
    }
  },
  {
    id: "y2df9-058",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 58",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Classify stationary points of \\( y = x^3 - 6x \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 3x^2 - 6",
          explanation: "Power rule."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "3x^2 = 6 \\Rightarrow x^2 = 2 \\Rightarrow x = \\pm\\sqrt 2",
          explanation: "Two stationary \\(x\\)-values, irrational."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(\\sqrt 2) = 2\\sqrt 2 - 6\\sqrt 2 = -4\\sqrt 2;\\quad y(-\\sqrt 2) = 4\\sqrt 2",
          explanation: "Use \\((\\sqrt 2)^3 = 2\\sqrt 2\\); odd symmetry of the cubic gives the negation for the other root."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = 6x",
          explanation: "Differentiate \\(y'\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the test.",
          workingLatex: "y''(\\sqrt 2) = 6\\sqrt 2 > 0\\;(\\text{min});\\;\\; y''(-\\sqrt 2) = -6\\sqrt 2 < 0\\;(\\text{max})",
          explanation: "Standard classification."
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "\\text{Max }(-\\sqrt 2,\\; 4\\sqrt 2);\\; \\text{Min }(\\sqrt 2,\\; -4\\sqrt 2)",
          explanation: "Both classified."
        },
        {
          stepNumber: 7,
          description: "Locate the inflection.",
          workingLatex: "y'' = 0 \\Rightarrow x = 0;\\; y(0) = 0",
          explanation: "Inflection at the origin, midway between the turning points — characteristic of a cubic. The graph has odd symmetry about \\((0, 0)\\)."
        }
      ],
      finalAnswer: "Max \\((-\\sqrt 2, 4\\sqrt 2)\\); min \\((\\sqrt 2, -4\\sqrt 2)\\)."
    }
  },
  {
    id: "y2df9-059",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 59",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = \\cos^2 x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the chain rule.",
          workingLatex: "y' = 2\\cos x \\cdot (-\\sin x) = -2\\sin x\\cos x",
          explanation: "Chain rule on \\((\\cos x)^2\\)."
        },
        {
          stepNumber: 2,
          description: "Simplify with a double-angle identity.",
          workingLatex: "y' = -\\sin(2x)",
          explanation: "Since \\(2\\sin x\\cos x = \\sin 2x\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again using the chain rule.",
          workingLatex: "y'' = -2\\cos(2x)",
          explanation: "Bring down the factor 2; switch \\(\\sin \\to \\cos\\) (with a sign that cancels the existing minus)."
        },
        {
          stepNumber: 4,
          description: "Cross-check via the half-angle identity.",
          workingLatex: "y = \\cos^2 x = \\tfrac{1 + \\cos 2x}{2}",
          explanation: "Differentiating twice: \\(y' = -\\sin 2x\\), \\(y'' = -2\\cos 2x\\) — matches."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = -2\\cos(2x)",
          explanation: "Compact form."
        },
        {
          stepNumber: 6,
          description: "Inflection candidates.",
          workingLatex: "y'' = 0 \\Rightarrow \\cos(2x) = 0 \\Rightarrow x = \\tfrac{\\pi}{4} + \\tfrac{n\\pi}{2}",
          explanation: "Concavity changes at these points."
        },
        {
          stepNumber: 7,
          description: "Spot-check at \\(x = 0\\).",
          workingLatex: "y(0) = 1;\\; y'(0) = 0;\\; y''(0) = -2",
          explanation: "Stationary at \\(x = 0\\) with \\(y''(0) < 0\\): local maximum — matching the shape of \\(\\cos^2 x\\)."
        }
      ],
      finalAnswer: "\\( -2\\cos 2x \\)"
    }
  },
  {
    id: "y2df9-060",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 60",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify stationary points of \\( y = x^4 + 4x^3 - 2 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 4x^3 + 12x^2",
          explanation: "Power rule term-by-term; constant vanishes."
        },
        {
          stepNumber: 2,
          description: "Factor and solve \\(y' = 0\\).",
          workingLatex: "4x^2(x + 3) = 0 \\Rightarrow x = 0 \\text{ (double)},\\; x = -3",
          explanation: "Repeated root at 0 — second-derivative test will likely fail there."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(0) = -2;\\quad y(-3) = 81 - 108 - 2 = -29",
          explanation: "Substitute back."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = 12x^2 + 24x = 12x(x + 2)",
          explanation: "Differentiate \\(y'\\), then factor."
        },
        {
          stepNumber: 5,
          description: "Evaluate.",
          workingLatex: "y''(-3) = 12(-3)(-1) = 36 > 0\\;(\\text{min});\\quad y''(0) = 0\\;(\\text{inconclusive})",
          explanation: "Definite at \\(x = -3\\); inconclusive at \\(x = 0\\)."
        },
        {
          stepNumber: 6,
          description: "Sign test on \\(y'\\) near 0.",
          workingLatex: "y' = 4x^2(x + 3) > 0 \\text{ for } -3 < x < 0 \\text{ (excluding 0)} \\text{ and } x > 0",
          explanation: "Both sides of 0 (within the relevant range) give \\(y' > 0\\); no sign change."
        },
        {
          stepNumber: 7,
          description: "Classify \\(x = 0\\) as horizontal inflection.",
          workingLatex: "(0, -2) \\text{ horizontal inflection}",
          explanation: "Gradient does not change sign at \\(x = 0\\)."
        },
        {
          stepNumber: 8,
          description: "Conclude.",
          workingLatex: "\\text{Min }(-3, -29);\\; \\text{Horizontal inflection }(0, -2)",
          explanation: "Both critical points fully analysed."
        },
        {
          stepNumber: 9,
          description: "Locate the other (non-stationary) inflection.",
          workingLatex: "y'' = 12x(x + 2) = 0 \\Rightarrow x = 0,\\; -2;\\; y(-2) = 16 - 32 - 2 = -18",
          explanation: "There is also an inflection at \\((-2, -18)\\) where \\(y'\\) is nonzero — \\(y''\\) changes sign there too."
        }
      ],
      finalAnswer: "Min \\((-3, -29)\\); horizontal inflection \\((0, -2)\\)."
    }
  },
  {
    id: "y2df9-061",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 61",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the minimum value of \\( y = x^2 + \\tfrac{16}{x} \\) for \\(x>0\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["optimisation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using power rule on \\(16x^{-1}\\).",
          workingLatex: "y' = 2x - \\dfrac{16}{x^2}",
          explanation: "\\(\\tfrac{d}{dx}(16x^{-1}) = -16 x^{-2}\\)."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "2x = \\dfrac{16}{x^2} \\Rightarrow 2x^3 = 16 \\Rightarrow x^3 = 8",
          explanation: "Multiply through by \\(x^2 > 0\\)."
        },
        {
          stepNumber: 3,
          description: "Solve for \\(x\\).",
          workingLatex: "x = 2",
          explanation: "Unique positive solution."
        },
        {
          stepNumber: 4,
          description: "Compute the \\(y\\)-value.",
          workingLatex: "y(2) = 4 + \\dfrac{16}{2} = 4 + 8 = 12",
          explanation: "Substitute \\(x = 2\\) into the original."
        },
        {
          stepNumber: 5,
          description: "Second derivative.",
          workingLatex: "y'' = 2 + \\dfrac{32}{x^3}",
          explanation: "Differentiate \\(-16 x^{-2}\\) to get \\(32 x^{-3}\\)."
        },
        {
          stepNumber: 6,
          description: "Test for minimum.",
          workingLatex: "y''(2) = 2 + 4 = 6 > 0",
          explanation: "Positive \\(y''\\) confirms a minimum. Indeed \\(y'' > 0\\) for all \\(x > 0\\), so this is the global minimum."
        },
        {
          stepNumber: 7,
          description: "State the minimum value.",
          workingLatex: "y_{\\min} = 12 \\text{ at } x = 2",
          explanation: "Classic AM–GM type result."
        },
        {
          stepNumber: 8,
          description: "AM–GM verification.",
          workingLatex: "x^2 + \\dfrac{16}{x} = x^2 + \\dfrac{8}{x} + \\dfrac{8}{x} \\ge 3\\sqrt[3]{x^2 \\cdot \\tfrac{8}{x}\\cdot \\tfrac{8}{x}} = 3\\sqrt[3]{64} = 12",
          explanation: "Splitting \\(16/x\\) into two equal pieces and applying AM–GM to three terms gives the same bound 12, with equality when \\(x^2 = 8/x\\), i.e. \\(x = 2\\)."
        },
        {
          stepNumber: 9,
          description: "Boundary behaviour.",
          workingLatex: "y \\to \\infty \\text{ as } x \\to 0^+ \\text{ or } x \\to \\infty",
          explanation: "Confirms 12 is the global minimum value on \\((0, \\infty)\\)."
        }
      ],
      finalAnswer: "Min value \\( 12 \\) at \\(x = 2\\)."
    }
  },
  {
    id: "y2df9-062",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 62",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary points of \\( y = x^5 - 5x \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 5x^4 - 5",
          explanation: "Power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Solve \\(y' = 0\\).",
          workingLatex: "5(x^4 - 1) = 5(x^2 - 1)(x^2 + 1) = 0 \\Rightarrow x = \\pm 1",
          explanation: "Real solutions only from \\(x^2 = 1\\)."
        },
        {
          stepNumber: 3,
          description: "Compute \\(y\\)-coordinates.",
          workingLatex: "y(1) = 1 - 5 = -4;\\quad y(-1) = -1 + 5 = 4",
          explanation: "Use odd symmetry of \\(x^5 - 5x\\)."
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "y'' = 20x^3",
          explanation: "Differentiate \\(5x^4\\) to get \\(20x^3\\); the constant vanishes."
        },
        {
          stepNumber: 5,
          description: "Apply the test.",
          workingLatex: "y''(1) = 20 > 0\\;(\\text{min});\\quad y''(-1) = -20 < 0\\;(\\text{max})",
          explanation: "Signs match the signs of \\(x\\)."
        },
        {
          stepNumber: 6,
          description: "Conclude.",
          workingLatex: "\\text{Max }(-1, 4);\\; \\text{Min }(1, -4)",
          explanation: "Two turning points classified."
        },
        {
          stepNumber: 6,
          description: "Locate the inflection.",
          workingLatex: "y'' = 20x^3 = 0 \\Rightarrow x = 0;\\; y(0) = 0",
          explanation: "Inflection at the origin. The function has odd symmetry: \\(y(-x) = -y(x)\\)."
        },
        {
          stepNumber: 7,
          description: "Check sign change of \\(y''\\) at 0.",
          workingLatex: "y'' < 0 \\text{ for } x<0;\\; y'' > 0 \\text{ for } x>0",
          explanation: "Genuine inflection — concavity flips from down to up at the origin."
        },
        {
          stepNumber: 8,
          description: "Behaviour at infinity.",
          workingLatex: "y \\to \\pm\\infty \\text{ as } x \\to \\pm\\infty",
          explanation: "A degree-5 polynomial dominates at infinity; no global extrema."
        },
        {
          stepNumber: 9,
          description: "Conclude.",
          workingLatex: "\\text{Max }(-1, 4);\\; \\text{Min }(1, -4);\\; \\text{Inflection }(0, 0)",
          explanation: "Complete classification of critical features."
        }
      ],
      finalAnswer: "Max \\((-1, 4)\\); min \\((1, -4)\\)."
    }
  },
  {
    id: "y2df9-063",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 63",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = e^x\\sin x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the product rule.",
          workingLatex: "y' = e^x\\sin x + e^x\\cos x = e^x(\\sin x + \\cos x)",
          explanation: "Product rule with \\(u = e^x,\\; v = \\sin x\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate again using the product rule.",
          workingLatex: "y'' = e^x(\\sin x + \\cos x) + e^x(\\cos x - \\sin x)",
          explanation: "Differentiate the product \\(e^x \\cdot (\\sin x + \\cos x)\\)."
        },
        {
          stepNumber: 3,
          description: "Simplify.",
          workingLatex: "y'' = e^x[(\\sin x + \\cos x) + (\\cos x - \\sin x)] = 2e^x\\cos x",
          explanation: "The \\(\\sin x\\) terms cancel; the \\(\\cos x\\) terms double."
        },
        {
          stepNumber: 4,
          description: "Pattern note.",
          workingLatex: "y' = \\sqrt{2}\\, e^x \\sin(x + \\pi/4);\\; y'' = 2 e^x \\sin(x + \\pi/2) = 2 e^x \\cos x",
          explanation: "Each differentiation rotates the trig argument by \\(\\pi/4\\) and scales by \\(\\sqrt 2\\) — useful interpretation."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 2e^x\\cos x",
          explanation: "Compact closed form."
        },
        {
          stepNumber: 6,
          description: "Inflection candidates.",
          workingLatex: "y'' = 0 \\Rightarrow \\cos x = 0 \\Rightarrow x = \\tfrac{\\pi}{2} + n\\pi",
          explanation: "Since \\(e^x > 0\\) cannot vanish, only the cosine factor can."
        },
        {
          stepNumber: 7,
          description: "Higher-derivative pattern.",
          workingLatex: "y^{(n)} = (\\sqrt 2)^n e^x \\sin(x + n\\pi/4)",
          explanation: "Each differentiation scales by \\(\\sqrt 2\\) and shifts the phase by \\(\\pi/4\\); for \\(n = 2\\) this gives \\(2 e^x \\sin(x + \\pi/2) = 2 e^x \\cos x\\) — matches."
        },
        {
          stepNumber: 8,
          description: "Spot-check at \\(x = 0\\).",
          workingLatex: "y''(0) = 2e^0\\cos 0 = 2",
          explanation: "Positive — the curve is concave up near the origin, consistent with \\(y(x) = e^x\\sin x \\approx x + x^2\\) near 0."
        },
        {
          stepNumber: 9,
          description: "Differential equation.",
          workingLatex: "y'' - 2y' + 2y = 0",
          explanation: "\\(y = e^x \\sin x\\) satisfies this second-order linear ODE — useful for SHM with damping or for complex roots."
        }
      ],
      finalAnswer: "\\( 2e^x\\cos x \\)"
    }
  },
  {
    id: "y2df9-064",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 64",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = (2x+1)^5 \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify composite structure.",
          workingLatex: "y = u^5,\\; u = 2x + 1,\\; u' = 2",
          explanation: "Each chain-rule application brings down a factor of 2."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = 5(2x + 1)^4 \\cdot 2 = 10(2x + 1)^4",
          explanation: "Chain rule with inner derivative 2."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = 10 \\cdot 4(2x + 1)^3 \\cdot 2 = 80(2x + 1)^3",
          explanation: "Apply chain rule once more on \\(10(2x+1)^4\\)."
        },
        {
          stepNumber: 4,
          description: "Verify the coefficient.",
          workingLatex: "5 \\cdot 4 \\cdot 2^2 = 80",
          explanation: "Two power-rule steps multiply by \\(5 \\cdot 4 = 20\\); two chain-rule steps multiply by \\(2^2 = 4\\); total 80."
        },
        {
          stepNumber: 5,
          description: "State the final answer.",
          workingLatex: "y'' = 80(2x + 1)^3",
          explanation: "Compact factored form."
        },
        {
          stepNumber: 6,
          description: "Inflection candidate.",
          workingLatex: "y'' = 0 \\Rightarrow x = -\\tfrac{1}{2}",
          explanation: "At \\(x = -1/2\\), \\(y'' = 0\\); since \\((2x+1)^3\\) is an odd cube, \\(y''\\) changes sign — genuine inflection."
        },
        {
          stepNumber: 7,
          description: "Inflection coordinate.",
          workingLatex: "y(-1/2) = 0",
          explanation: "Inflection at \\((-1/2, 0)\\). This is also a horizontal point (since \\(y'(-1/2) = 0\\) too)."
        }
      ],
      finalAnswer: "\\( 80(2x+1)^3 \\)"
    }
  },
  {
    id: "y2df9-065",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 65",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the second derivative of \\( y = \\sin x + \\sin 2x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate once.",
          workingLatex: "y' = \\cos x + 2\\cos 2x",
          explanation: "Chain rule on \\(\\sin 2x\\) brings down factor 2."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(\\cos x\\).",
          workingLatex: "\\tfrac{d}{dx}\\cos x = -\\sin x",
          explanation: "Standard."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(2\\cos 2x\\) using the chain rule.",
          workingLatex: "\\tfrac{d}{dx}(2\\cos 2x) = 2 \\cdot (-2\\sin 2x) = -4\\sin 2x",
          explanation: "Bring down factor 2 from the chain rule, then multiply by the existing 2."
        },
        {
          stepNumber: 4,
          description: "Combine.",
          workingLatex: "y'' = -\\sin x - 4\\sin 2x",
          explanation: "Sum of the two pieces."
        },
        {
          stepNumber: 5,
          description: "Pattern note.",
          workingLatex: "y'' = -\\sin x - 4\\sin 2x",
          explanation: "Each \\(\\sin(kx)\\) becomes \\(-k^2 \\sin(kx)\\) after two differentiations."
        },
        {
          stepNumber: 6,
          description: "Spot-check at \\(x = 0\\).",
          workingLatex: "y''(0) = 0",
          explanation: "Both sine terms vanish at 0; consistent with \\(y(x) \\approx 3x + O(x^3)\\) near the origin, whose second derivative vanishes at 0."
        },
        {
          stepNumber: 7,
          description: "Inflection structure.",
          workingLatex: "y'' = -\\sin x(1 + 8\\cos x)",
          explanation: "Factor using \\(\\sin 2x = 2\\sin x\\cos x\\). Zeros occur at \\(\\sin x = 0\\) or \\(\\cos x = -1/8\\), giving multiple inflections per period."
        },
        {
          stepNumber: 8,
          description: "Pattern note.",
          workingLatex: "y'' = -\\sin x - 4\\sin 2x",
          explanation: "Higher harmonics get amplified: the second-derivative coefficient of \\(\\sin(kx)\\) scales as \\(k^2\\)."
        },
        {
          stepNumber: 9,
          description: "Periodicity.",
          workingLatex: "y''(x + 2\\pi) = y''(x)",
          explanation: "The second derivative is periodic with period \\(2\\pi\\), inheriting the periodicity of \\(\\sin x\\) (the \\(\\sin 2x\\) term has shorter period \\(\\pi\\), but \\(2\\pi\\) is a common period)."
        }
      ],
      finalAnswer: "\\( -\\sin x - 4\\sin 2x \\)"
    }
  },
  {
    id: "y2df9-066",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 66",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = \\tfrac{1}{\\sqrt{x}} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a power.",
          workingLatex: "y = x^{-1/2}",
          explanation: "This makes the power rule directly applicable."
        },
        {
          stepNumber: 2,
          description: "Differentiate once.",
          workingLatex: "y' = -\\tfrac{1}{2}x^{-3/2}",
          explanation: "Multiply by the exponent \\(-1/2\\); reduce by 1 to \\(-3/2\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate again.",
          workingLatex: "y'' = -\\tfrac{1}{2} \\cdot \\left(-\\tfrac{3}{2}\\right) x^{-5/2} = \\tfrac{3}{4} x^{-5/2}",
          explanation: "Multiply by \\(-3/2\\); reduce by 1 to \\(-5/2\\)."
        },
        {
          stepNumber: 4,
          description: "Rewrite using a fraction.",
          workingLatex: "y'' = \\dfrac{3}{4 x^{5/2}}",
          explanation: "Negative exponent moves to the denominator."
        },
        {
          stepNumber: 5,
          description: "Note the sign.",
          workingLatex: "y'' > 0 \\text{ for all } x > 0",
          explanation: "So \\(1/\\sqrt x\\) is concave up on its domain."
        },
        {
          stepNumber: 6,
          description: "Spot-check at \\(x = 1\\).",
          workingLatex: "y''(1) = \\tfrac{3}{4}",
          explanation: "Positive, as expected."
        },
        {
          stepNumber: 7,
          description: "State the final answer.",
          workingLatex: "y'' = \\dfrac{3}{4 x^{5/2}}",
          explanation: "Equivalently \\(\\tfrac{3}{4 x^2\\sqrt x}\\); both forms are acceptable."
        }
      ],
      finalAnswer: "\\( \\tfrac{3}{4x^{5/2}} \\)"
    }
  },
  {
    id: "y2df9-067",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 67",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find \\( \\tfrac{d^2y}{dx^2} \\) for \\( y = \\ln(x^2+1) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["second derivative"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate using the chain rule.",
          workingLatex: "y' = \\dfrac{2x}{x^2 + 1}",
          explanation: "Outer derivative \\(1/u\\); inner derivative \\(2x\\)."
        },
        {
          stepNumber: 2,
          description: "Apply the quotient rule with \\(u = 2x,\\; v = x^2 + 1\\).",
          workingLatex: "y'' = \\dfrac{2(x^2 + 1) - 2x \\cdot 2x}{(x^2 + 1)^2}",
          explanation: "\\(u' = 2,\\; v' = 2x\\); quotient rule \\((u/v)' = (u'v - uv')/v^2\\)."
        },
        {
          stepNumber: 3,
          description: "Expand the numerator.",
          workingLatex: "y'' = \\dfrac{2x^2 + 2 - 4x^2}{(x^2 + 1)^2} = \\dfrac{2 - 2x^2}{(x^2 + 1)^2}",
          explanation: "Combine like terms in the numerator."
        },
        {
          stepNumber: 4,
          description: "Factor.",
          workingLatex: "y'' = \\dfrac{2(1 - x^2)}{(x^2 + 1)^2}",
          explanation: "Pull out the common factor 2."
        },
        {
          stepNumber: 5,
          description: "Identify inflection candidates.",
          workingLatex: "y'' = 0 \\Rightarrow x = \\pm 1",
          explanation: "\\(y''\\) changes sign at both \\(\\pm 1\\), so the curve has inflection points there."
        },
        {
          stepNumber: 6,
          description: "Sign analysis.",
          workingLatex: "y'' > 0 \\text{ for } |x| < 1;\\; y'' < 0 \\text{ for } |x| > 1",
          explanation: "Concave up between the inflections, concave down outside."
        },
        {
          stepNumber: 7,
          description: "Inflection \\(y\\)-coordinates.",
          workingLatex: "y(\\pm 1) = \\ln 2",
          explanation: "Substitute into \\(\\ln(x^2 + 1)\\); both inflections at height \\(\\ln 2 \\approx 0.693\\)."
        },
        {
          stepNumber: 8,
          description: "Spot-check at \\(x = 0\\).",
          workingLatex: "y(0) = 0;\\; y''(0) = 2",
          explanation: "Concave up at the origin; this is a minimum since \\(y'(0) = 0\\). Confirms our second-derivative sign analysis."
        },
        {
          stepNumber: 9,
          description: "Asymptotic note.",
          workingLatex: "y'' \\to 0 \\text{ as } x \\to \\pm\\infty",
          explanation: "The curve becomes nearly linear at infinity (gradient \\(\\to 0\\)), so concavity flattens out."
        }
      ],
      finalAnswer: "\\( \\tfrac{2(1 - x^2)}{(x^2+1)^2} \\)"
    }
  },
  {
    id: "y2df9-068",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 68",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify stationary points of \\( y = x^3 - 2x^2 - x + 2 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "y' = 3x^2 - 4x - 1",
          explanation: "Power rule term-by-term."
        },
        {
          stepNumber: 2,
          description: "Solve the quadratic \\(y' = 0\\) using the formula.",
          workingLatex: "x = \\dfrac{4 \\pm \\sqrt{16 + 12}}{6} = \\dfrac{4 \\pm \\sqrt{28}}{6}",
          explanation: "Discriminant \\(b^2 - 4ac = 16 + 12 = 28\\) is positive, so two real stationary points."
        },
        {
          stepNumber: 3,
          description: "Simplify the surd.",
          workingLatex: "x = \\dfrac{4 \\pm 2\\sqrt 7}{6} = \\dfrac{2 \\pm \\sqrt 7}{3}",
          explanation: "\\(\\sqrt{28} = 2\\sqrt 7\\); divide top and bottom by 2."
        },
        {
          stepNumber: 4,
          description: "Label the roots.",
          workingLatex: "\\alpha = \\dfrac{2 - \\sqrt 7}{3} \\approx -0.215;\\quad \\beta = \\dfrac{2 + \\sqrt 7}{3} \\approx 1.549",
          explanation: "Numerical estimates help with classification intuition."
        },
        {
          stepNumber: 5,
          description: "Second derivative.",
          workingLatex: "y'' = 6x - 4",
          explanation: "Differentiate \\(y'\\)."
        },
        {
          stepNumber: 6,
          description: "Evaluate signs.",
          workingLatex: "y''(\\alpha) = 6\\alpha - 4 < 0;\\quad y''(\\beta) = 6\\beta - 4 > 0",
          explanation: "Numerically: \\(y''(\\alpha) \\approx -5.3 < 0\\) (max); \\(y''(\\beta) \\approx 5.3 > 0\\) (min)."
        },
        {
          stepNumber: 7,
          description: "Note the sign change of \\(y''\\) at \\(x = 2/3\\).",
          workingLatex: "y'' = 0 \\Rightarrow x = 2/3",
          explanation: "The point \\(x = 2/3\\) lies between \\(\\alpha\\) and \\(\\beta\\), confirming the second-derivative-test signs."
        },
        {
          stepNumber: 8,
          description: "State the classification.",
          workingLatex: "\\text{Max at } x = \\tfrac{2 - \\sqrt 7}{3};\\;\\; \\text{Min at } x = \\tfrac{2 + \\sqrt 7}{3}",
          explanation: "Both classified; \\(y\\)-coordinates can be obtained by direct substitution if required."
        },
        {
          stepNumber: 9,
          description: "Inflection point.",
          workingLatex: "y'' = 6x - 4 = 0 \\Rightarrow x = \\tfrac{2}{3}",
          explanation: "Inflection at \\(x = 2/3\\), exactly midway between the turning points (by Vieta: sum of roots of \\(y'\\) is \\(4/3\\), so midpoint is \\(2/3\\)). Confirms the second-derivative test signs."
        }
      ],
      finalAnswer: "Max at \\(x = \\tfrac{2-\\sqrt 7}{3}\\); min at \\(x = \\tfrac{2+\\sqrt 7}{3}\\)."
    }
  },
  {
    id: "y2df9-069",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 69",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "For \\(y = x^3 + x\\), determine the intervals on which the function is increasing.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["increasing"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate to find the gradient function.",
          workingLatex: "y' = 3x^2 + 1",
          explanation: "Recall: a function is increasing wherever \\(y' > 0\\)."
        },
        {
          stepNumber: 2,
          description: "Determine the sign of \\(y'\\).",
          workingLatex: "3x^2 \\ge 0 \\Rightarrow 3x^2 + 1 \\ge 1 > 0",
          explanation: "The minimum value of \\(y'\\) is 1 (attained at \\(x = 0\\)); \\(y'\\) is strictly positive everywhere."
        },
        {
          stepNumber: 3,
          description: "Conclude the function is strictly increasing.",
          workingLatex: "y' > 0 \\text{ for all } x \\in \\mathbb{R}",
          explanation: "No stationary points; \\(y\\) is strictly monotonically increasing."
        },
        {
          stepNumber: 4,
          description: "State the answer.",
          workingLatex: "y \\text{ is increasing on } \\mathbb{R}",
          explanation: "The entire real line."
        },
        {
          stepNumber: 5,
          description: "Sanity check via the second derivative.",
          workingLatex: "y'' = 6x",
          explanation: "Concavity changes at \\(x = 0\\) (inflection), but \\(y'\\) remains positive throughout — concavity change does not stop the function increasing."
        },
        {
          stepNumber: 6,
          description: "Concavity intervals.",
          workingLatex: "y'' > 0 \\text{ for } x > 0;\\; y'' < 0 \\text{ for } x < 0",
          explanation: "Concave up on \\((0, \\infty)\\), concave down on \\((-\\infty, 0)\\) — with the origin as the (non-stationary) inflection."
        },
        {
          stepNumber: 7,
          description: "Sanity check at \\(x = 0\\).",
          workingLatex: "y'(0) = 1 > 0",
          explanation: "Even at \\(x = 0\\) where \\(y'' = 0\\), the function is still increasing — \\(y'(0) = 1\\). Increasing throughout."
        }
      ],
      finalAnswer: "Increasing on \\(\\mathbb{R}\\)."
    }
  },
  {
    id: "y2df9-070",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 70",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "On what intervals within \\([0, 2\\pi)\\) is \\( y = \\sin x \\) concave up?",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["concavity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate twice.",
          workingLatex: "y' = \\cos x;\\quad y'' = -\\sin x",
          explanation: "Standard trig derivatives."
        },
        {
          stepNumber: 2,
          description: "Set up the concave-up condition.",
          workingLatex: "y'' > 0 \\Leftrightarrow -\\sin x > 0 \\Leftrightarrow \\sin x < 0",
          explanation: "Concave up means \\(y'' > 0\\); negate to bring \\(\\sin x\\) onto a familiar inequality."
        },
        {
          stepNumber: 3,
          description: "Solve \\(\\sin x < 0\\) on \\([0, 2\\pi)\\).",
          workingLatex: "x \\in (\\pi, 2\\pi)",
          explanation: "Sine is negative on the third and fourth quadrants."
        },
        {
          stepNumber: 4,
          description: "Confirm by checking endpoints.",
          workingLatex: "y''(\\pi) = 0;\\quad y''(3\\pi/2) = 1 > 0",
          explanation: "Endpoints of the interval have \\(y'' = 0\\) (the inflections), while the interior is strictly concave up."
        },
        {
          stepNumber: 5,
          description: "State the answer.",
          workingLatex: "(\\pi, 2\\pi)",
          explanation: "On this open interval \\(y = \\sin x\\) is concave up; on \\((0, \\pi)\\) it is concave down."
        },
        {
          stepNumber: 6,
          description: "Locate inflection.",
          workingLatex: "y''(\\pi) = 0 \\text{ with sign change}",
          explanation: "Inflection at \\((\\pi, 0)\\); concavity flips from down to up there."
        },
        {
          stepNumber: 7,
          description: "Note: this is a generic result.",
          workingLatex: "\\sin x \\text{ alternates concavity each half-period}",
          explanation: "Pattern: concave down where \\(\\sin x > 0\\), concave up where \\(\\sin x < 0\\). The inflections happen exactly at the zeros of \\(\\sin x\\)."
        }
      ],
      finalAnswer: "\\( (\\pi, 2\\pi) \\)."
    }
  },
  {
    id: "y2df9-071",
    topicRef: "y2df9",
    topicTitle: "Using Second Derivatives 71",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "State the second-derivative test for classifying stationary points.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["theory"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the context: a stationary point at \\(x = x_0\\).",
          workingLatex: "y'(x_0) = 0",
          explanation: "The test only applies at points where the first derivative vanishes."
        },
        {
          stepNumber: 2,
          description: "State the two definitive cases.",
          workingLatex: "y''(x_0) > 0 \\Rightarrow \\text{local minimum};\\quad y''(x_0) < 0 \\Rightarrow \\text{local maximum}",
          explanation: "Positive second derivative indicates concave-up curvature (a 'valley'); negative indicates concave-down (a 'peak')."
        },
        {
          stepNumber: 3,
          description: "State the inconclusive case.",
          workingLatex: "y''(x_0) = 0 \\Rightarrow \\text{test inconclusive}",
          explanation: "Examples: \\(y = x^4\\) (min at 0), \\(y = -x^4\\) (max at 0), \\(y = x^3\\) (horizontal inflection at 0). All have \\(y''(0) = 0\\) — fall back to the first-derivative sign test or higher derivatives."
        },
        {
          stepNumber: 4,
          description: "Summary.",
          workingLatex: "\\begin{aligned} y''(x_0) &> 0 \\Rightarrow \\text{minimum} \\\\ y''(x_0) &< 0 \\Rightarrow \\text{maximum} \\\\ y''(x_0) &= 0 \\Rightarrow \\text{inconclusive} \\end{aligned}",
          explanation: "These three cases cover the application of the second-derivative test."
        },
        {
          stepNumber: 5,
          description: "Practical advice.",
          workingLatex: "\\text{If } y''=0 \\text{, examine the sign of } y' \\text{ either side of } x_0",
          explanation: "First-derivative sign test: + then − is a max; − then + is a min; no change is a horizontal inflection."
        }
      ],
      finalAnswer: "\\(y''(x_0) > 0\\) min; \\(< 0\\) max; \\(= 0\\) inconclusive."
    }
  },
];
