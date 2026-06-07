import { Question } from "@/lib/types";

/**
 * Year 2 — Differentiation § 9.4 The Product Rule
 * Ref: y2df4
 * 71 questions. Apply (uv)' = u'v + uv' to polynomial × ln, polynomial × e^x,
 * polynomial × trig, e^x × trig, ln × trig and polynomial × polynomial.
 */
export const questions: Question[] = [
  {
    id: "y2df4-001",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 01",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 \\ln x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = \\ln x",
          explanation: "Split \\(y\\) into a polynomial part and a transcendental part. The product rule is the natural tool whenever \\(y\\) is a product of two different kinds of functions like this."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Standard power rule: \\(\\tfrac{d}{dx}(x^2) = 2x\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "The derivative of \\(\\ln x\\) is \\(1/x\\) (for \\(x>0\\))."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Write the formula in symbols before substituting. The most common slip is to write \\(u' v'\\) — the product rule does NOT differentiate factor-by-factor."
        },
        {
          stepNumber: 5,
          description: "Substitute \\(u, v, u', v'\\).",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\cdot \\ln x + x^2 \\cdot \\tfrac{1}{x}",
          explanation: "Plug each piece into its slot. Keep the two terms separate until simplification."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\ln x + x = x(1 + 2\\ln x)",
          explanation: "Cancel \\(x^2 \\cdot 1/x = x\\), then pull out the common factor \\(x\\). Factored form is the canonical final answer."
        }
      ],
      finalAnswer: "\\( x(1 + 2\\ln x) \\)"
    }
  },
  // ── polynomial × ln x ────
  {
    id: "y2df4-002",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = x \\ln x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = \\ln x",
          explanation: "Take the polynomial \\(x\\) as \\(u\\) and the logarithm \\(\\ln x\\) as \\(v\\). Splitting a polynomial-times-log this way is standard."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "The derivative of \\(x\\) is just \\(1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Standard result: \\(\\tfrac{d}{dx}(\\ln x) = 1/x\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Write the formula symbolically first. Remember \\((uv)' = u'v + uv'\\), not \\(u'v'\\)."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot \\ln x + x \\cdot \\tfrac{1}{x}",
          explanation: "Replace each symbol with its expression."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = \\ln x + 1",
          explanation: "The second term simplifies via \\(x \\cdot 1/x = 1\\). The answer is left in unfactored form because there is no common factor to extract."
        }
      ],
      finalAnswer: "\\( \\ln x + 1 \\)"
    }
  },
  {
    id: "y2df4-003",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 03",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^3 \\ln x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^3,\\quad v = \\ln x",
          explanation: "Take the polynomial as \\(u\\) and the logarithm as \\(v\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 3x^2",
          explanation: "Power rule on \\(x^3\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Derivative of \\(\\ln x\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Don't write \\(u'v'\\) — that's the most common product-rule slip."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2 \\ln x + x^3 \\cdot \\tfrac{1}{x}",
          explanation: "Plug everything in."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2 \\ln x + x^2 = x^2(3\\ln x + 1)",
          explanation: "\\(x^3 \\cdot 1/x = x^2\\), and \\(x^2\\) is the common factor of both terms."
        }
      ],
      finalAnswer: "\\( x^2(3\\ln x + 1) \\)"
    }
  },
  {
    id: "y2df4-004",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 04",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^4 \\ln x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^4,\\quad v = \\ln x",
          explanation: "Polynomial as \\(u\\), logarithm as \\(v\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 4x^3",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Derivative of \\(\\ln x\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic formula before substituting."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 4x^3 \\ln x + x^4 \\cdot \\tfrac{1}{x}",
          explanation: "Each factor lands in its slot."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = 4x^3 \\ln x + x^3 = x^3(4\\ln x + 1)",
          explanation: "Cancel one \\(x\\) from \\(x^4 \\cdot 1/x\\), then pull out \\(x^3\\) as the common factor."
        }
      ],
      finalAnswer: "\\( x^3(4\\ln x + 1) \\)"
    }
  },
  {
    id: "y2df4-005",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 05",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x \\ln(2x) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = \\ln(2x)",
          explanation: "Polynomial as \\(u\\) and the log as \\(v\\). The argument of the log is \\(2x\\), not \\(x\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Standard."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Chain rule on \\(\\ln(2x)\\): outer derivative \\(1/(2x)\\) times inner derivative \\(2\\), giving \\(2/(2x) = 1/x\\). The constant \\(2\\) cancels — a consequence of \\(\\ln(2x) = \\ln 2 + \\ln x\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic formula."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot \\ln(2x) + x \\cdot \\tfrac{1}{x}",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = \\ln(2x) + 1",
          explanation: "\\(x \\cdot 1/x = 1\\)."
        }
      ],
      finalAnswer: "\\( \\ln(2x) + 1 \\)"
    }
  },
  {
    id: "y2df4-006",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 06",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x+1)\\ln x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x+1,\\quad v = \\ln x",
          explanation: "Linear polynomial as \\(u\\); logarithm as \\(v\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Derivative of \\(x+1\\) is \\(1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot \\ln x + (x+1) \\cdot \\tfrac{1}{x}",
          explanation: "Plug everything in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = \\ln x + \\tfrac{x+1}{x} = \\ln x + 1 + \\tfrac{1}{x}",
          explanation: "Split the fraction: \\((x+1)/x = 1 + 1/x\\). There is no common factor across all three terms, so this is the final form."
        }
      ],
      finalAnswer: "\\( \\ln x + 1 + \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df4-007",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (2x-1)\\ln x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = 2x-1,\\quad v = \\ln x",
          explanation: "Linear polynomial and the logarithm."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2",
          explanation: "Derivative of \\(2x-1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Standard log derivative."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Write it symbolically first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\ln x + (2x-1) \\cdot \\tfrac{1}{x}",
          explanation: "Plug pieces into their slots."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\ln x + \\tfrac{2x-1}{x} = 2\\ln x + 2 - \\tfrac{1}{x}",
          explanation: "Split \\((2x-1)/x = 2 - 1/x\\). Watch the sign on the \\(-1/x\\) — easy to flip by mistake."
        }
      ],
      finalAnswer: "\\( 2\\ln x + 2 - \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df4-008",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^2+1)\\ln x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2+1,\\quad v = \\ln x",
          explanation: "Quadratic and logarithm."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule on each term; constant \\(1\\) drops."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic formula."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\ln x + (x^2+1)\\cdot \\tfrac{1}{x}",
          explanation: "Plug everything in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\ln x + \\tfrac{x^2+1}{x} = 2x\\ln x + x + \\tfrac{1}{x}",
          explanation: "Split \\((x^2+1)/x = x + 1/x\\). No common factor across all three pieces, so leave in this form."
        }
      ],
      finalAnswer: "\\( 2x\\ln x + x + \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df4-009",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 \\ln(3x) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = \\ln(3x)",
          explanation: "Polynomial and log; note the inner constant \\(3\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Chain rule: \\(\\tfrac{d}{dx}\\ln(3x) = \\tfrac{1}{3x} \\cdot 3 = \\tfrac{1}{x}\\). The inner constant cancels — equivalently, \\(\\ln(3x) = \\ln 3 + \\ln x\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\ln(3x) + x^2 \\cdot \\tfrac{1}{x}",
          explanation: "Plug in each piece."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\ln(3x) + x = x(2\\ln(3x) + 1)",
          explanation: "Cancel \\(x^2/x = x\\) and pull out the common factor \\(x\\)."
        }
      ],
      finalAnswer: "\\( x(2\\ln(3x) + 1) \\)"
    }
  },
  // ── polynomial × e^(kx) ────
  {
    id: "y2df4-010",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 10",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = x e^x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = e^x",
          explanation: "Polynomial as \\(u\\), exponential as \\(v\\). This is the canonical product-rule starter."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Trivial: \\(\\tfrac{d}{dx}(x) = 1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = e^x",
          explanation: "The exponential function is its own derivative."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Write the formula symbolically. \\((uv)' = u'v + uv'\\), not \\(u' v'\\)."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot e^x + x \\cdot e^x",
          explanation: "Plug each piece into its slot."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = e^x + xe^x = e^x(1 + x)",
          explanation: "Pull out the common factor \\(e^x\\)."
        }
      ],
      finalAnswer: "\\( e^x(1 + x) \\)"
    }
  },
  {
    id: "y2df4-011",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 e^x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = e^x",
          explanation: "Polynomial \\(u\\), exponential \\(v\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule on \\(x^2\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = e^x",
          explanation: "\\(e^x\\) is its own derivative."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\cdot e^x + x^2 \\cdot e^x",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = 2xe^x + x^2 e^x = xe^x(2 + x)",
          explanation: "Common factor is \\(xe^x\\) — the smallest power of \\(x\\) is \\(x^1\\), and both terms carry \\(e^x\\)."
        }
      ],
      finalAnswer: "\\( x e^x(2 + x) \\)"
    }
  },
  {
    id: "y2df4-012",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^3 e^x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^3,\\quad v = e^x",
          explanation: "Polynomial and exponential."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 3x^2",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = e^x",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2 e^x + x^3 e^x",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = x^2 e^x(3 + x)",
          explanation: "Pull out \\(x^2 e^x\\) — the smallest power of \\(x\\) common to both terms, multiplied by the shared \\(e^x\\)."
        }
      ],
      finalAnswer: "\\( x^2 e^x(3 + x) \\)"
    }
  },
  {
    id: "y2df4-013",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x e^{2x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = e^{2x}",
          explanation: "Polynomial and exponential — the exponent is \\(2x\\), not \\(x\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Trivial."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 2e^{2x}",
          explanation: "Chain rule on \\(e^{2x}\\): outer derivative \\(e^{2x}\\) times inner derivative \\(2\\). Forgetting the \\(2\\) is the standard slip here."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot e^{2x} + x \\cdot 2e^{2x}",
          explanation: "Plug in each piece."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = e^{2x} + 2xe^{2x} = e^{2x}(1 + 2x)",
          explanation: "Factor out the shared \\(e^{2x}\\)."
        }
      ],
      finalAnswer: "\\( e^{2x}(1 + 2x) \\)"
    }
  },
  {
    id: "y2df4-014",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x e^{-x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = e^{-x}",
          explanation: "Polynomial and decaying exponential."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Standard."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -e^{-x}",
          explanation: "Chain rule: \\(e^{-x}\\) times the inner derivative \\(-1\\). The sign is the easy-to-miss part."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic formula."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot e^{-x} + x \\cdot (-e^{-x})",
          explanation: "Plug in, keeping the negative sign explicit."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = e^{-x} - xe^{-x} = e^{-x}(1 - x)",
          explanation: "Factor out \\(e^{-x}\\)."
        }
      ],
      finalAnswer: "\\( e^{-x}(1 - x) \\)"
    }
  },
  {
    id: "y2df4-015",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 15",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 e^{2x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = e^{2x}",
          explanation: "Polynomial \\(u\\), exponential \\(v\\). The exponent has a \\(2\\) that will need the chain rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\) (chain rule).",
          workingLatex: "v' = 2e^{2x}",
          explanation: "\\(\\tfrac{d}{dx}(e^{2x}) = e^{2x} \\cdot \\tfrac{d}{dx}(2x) = 2e^{2x}\\). Don't drop the \\(2\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first; never \\(u'v'\\)."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\cdot e^{2x} + x^2 \\cdot 2e^{2x}",
          explanation: "Plug each piece into its slot."
        },
        {
          stepNumber: 6,
          description: "Tidy the second term.",
          workingLatex: "\\tfrac{dy}{dx} = 2xe^{2x} + 2x^2 e^{2x}",
          explanation: "Move the constant \\(2\\) to the front of the second term."
        },
        {
          stepNumber: 7,
          description: "Identify the common factor.",
          workingLatex: "\\text{Both terms contain } 2xe^{2x}",
          explanation: "Lowest power of \\(x\\) is \\(x^1\\); both terms share a \\(2\\) and an \\(e^{2x}\\)."
        },
        {
          stepNumber: 8,
          description: "Factor.",
          workingLatex: "\\tfrac{dy}{dx} = 2xe^{2x}(1 + x)",
          explanation: "Pull out the common factor \\(2xe^{2x}\\) to give the canonical factored form."
        }
      ],
      finalAnswer: "\\( 2x e^{2x}(1 + x) \\)"
    }
  },
  {
    id: "y2df4-016",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x+1)e^x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x+1,\\quad v = e^x",
          explanation: "Linear polynomial and exponential."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Derivative of \\(x+1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = e^x",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot e^x + (x+1) \\cdot e^x",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify and factor.",
          workingLatex: "\\tfrac{dy}{dx} = e^x + (x+1)e^x = e^x(x + 2)",
          explanation: "Pull out \\(e^x\\): \\(1 + (x+1) = x+2\\)."
        }
      ],
      finalAnswer: "\\( e^x(x + 2) \\)"
    }
  },
  {
    id: "y2df4-017",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 17",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x-1)e^{-x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x-1,\\quad v = e^{-x}",
          explanation: "Linear polynomial and decaying exponential."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Derivative of \\(x-1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -e^{-x}",
          explanation: "Chain rule: inner derivative is \\(-1\\), so \\(\\tfrac{d}{dx}(e^{-x}) = -e^{-x}\\). Don't lose the minus sign."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot e^{-x} + (x-1)(-e^{-x})",
          explanation: "Plug each piece in, keeping the sign on \\(v'\\) explicit."
        },
        {
          stepNumber: 6,
          description: "Combine the two terms.",
          workingLatex: "\\tfrac{dy}{dx} = e^{-x} - (x-1)e^{-x}",
          explanation: "Distributing the minus over \\((x-1)\\)."
        },
        {
          stepNumber: 7,
          description: "Factor out \\(e^{-x}\\).",
          workingLatex: "\\tfrac{dy}{dx} = e^{-x}\\bigl[1 - (x-1)\\bigr]",
          explanation: "Pull out the common factor."
        },
        {
          stepNumber: 8,
          description: "Simplify inside the bracket.",
          workingLatex: "1 - (x-1) = 1 - x + 1 = 2 - x \\Rightarrow \\tfrac{dy}{dx} = e^{-x}(2 - x)",
          explanation: "Mind the sign flip on the \\(-(-1)\\) — a common slip turns \\(1 - (x-1)\\) into \\(x\\) instead of \\(2-x\\)."
        }
      ],
      finalAnswer: "\\( e^{-x}(2 - x) \\)"
    }
  },
  {
    id: "y2df4-018",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 18",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^2+1)e^x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2+1,\\quad v = e^x",
          explanation: "Quadratic polynomial and exponential."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule; constant drops."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = e^x",
          explanation: "Self-derivative."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2xe^x + (x^2+1)e^x",
          explanation: "Plug in each piece."
        },
        {
          stepNumber: 6,
          description: "Factor out \\(e^x\\).",
          workingLatex: "\\tfrac{dy}{dx} = e^x\\bigl[2x + (x^2 + 1)\\bigr]",
          explanation: "Both terms share the factor \\(e^x\\)."
        },
        {
          stepNumber: 7,
          description: "Collect inside the bracket.",
          workingLatex: "\\tfrac{dy}{dx} = e^x(x^2 + 2x + 1)",
          explanation: "Reorder in descending powers of \\(x\\)."
        },
        {
          stepNumber: 8,
          description: "Recognise the perfect square.",
          workingLatex: "\\tfrac{dy}{dx} = e^x(x+1)^2",
          explanation: "\\(x^2 + 2x + 1 = (x+1)^2\\). Spotting this gives a cleaner final form."
        }
      ],
      finalAnswer: "\\( e^x(x+1)^2 \\)"
    }
  },
  {
    id: "y2df4-019",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (2x+3)e^{3x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = 2x+3,\\quad v = e^{3x}",
          explanation: "Linear polynomial and exponential with inner factor \\(3\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2",
          explanation: "Derivative of \\(2x+3\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 3e^{3x}",
          explanation: "Chain rule: \\(\\tfrac{d}{dx}(e^{3x}) = 3e^{3x}\\). Don't drop the \\(3\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2 \\cdot e^{3x} + (2x+3) \\cdot 3e^{3x}",
          explanation: "Plug everything in, leaving the \\(3\\) explicit."
        },
        {
          stepNumber: 6,
          description: "Factor out \\(e^{3x}\\).",
          workingLatex: "\\tfrac{dy}{dx} = e^{3x}\\bigl[2 + 3(2x+3)\\bigr]",
          explanation: "Both terms carry \\(e^{3x}\\)."
        },
        {
          stepNumber: 7,
          description: "Expand inside the bracket.",
          workingLatex: "2 + 3(2x+3) = 2 + 6x + 9",
          explanation: "Distribute the \\(3\\); \\(3 \\times 3 = 9\\)."
        },
        {
          stepNumber: 8,
          description: "Collect constants and finalise.",
          workingLatex: "\\tfrac{dy}{dx} = e^{3x}(6x + 11)",
          explanation: "\\(2 + 9 = 11\\). Final factored form."
        }
      ],
      finalAnswer: "\\( e^{3x}(6x + 11) \\)"
    }
  },
  // ── polynomial × trig ────
  {
    id: "y2df4-020",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 20",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = x \\sin x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = \\sin x",
          explanation: "Polynomial \\(u\\), trig function \\(v\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Trivial."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\cos x",
          explanation: "Standard trig derivative: \\(\\tfrac{d}{dx}(\\sin x) = \\cos x\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first. Not \\(u'v'\\)."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot \\sin x + x \\cdot \\cos x",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = \\sin x + x\\cos x",
          explanation: "No common factor to extract — this is the final form."
        }
      ],
      finalAnswer: "\\( \\sin x + x\\cos x \\)"
    }
  },
  {
    id: "y2df4-021",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 21",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = x \\cos x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = \\cos x",
          explanation: "Polynomial and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Trivial."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin x",
          explanation: "Standard: \\(\\tfrac{d}{dx}(\\cos x) = -\\sin x\\). The minus sign is where most slips happen."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot \\cos x + x \\cdot (-\\sin x)",
          explanation: "Plug in, keeping the minus on \\(v'\\) visible."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos x - x\\sin x",
          explanation: "Final form. No common factor to pull out."
        }
      ],
      finalAnswer: "\\( \\cos x - x\\sin x \\)"
    }
  },
  {
    id: "y2df4-022",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 22",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 \\sin x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = \\sin x",
          explanation: "Polynomial and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\cdot \\sin x + x^2 \\cdot \\cos x",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\sin x + x^2\\cos x",
          explanation: "Could factor an \\(x\\) but the standard form leaves both trig functions visible."
        }
      ],
      finalAnswer: "\\( 2x\\sin x + x^2\\cos x \\)"
    }
  },
  {
    id: "y2df4-023",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 23",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 \\cos x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = \\cos x",
          explanation: "Polynomial and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin x",
          explanation: "Standard. The minus sign is the easy-to-forget bit."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\cdot \\cos x + x^2 \\cdot (-\\sin x)",
          explanation: "Plug in, keeping the minus explicit."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\cos x - x^2\\sin x",
          explanation: "Standard final form."
        }
      ],
      finalAnswer: "\\( 2x\\cos x - x^2\\sin x \\)"
    }
  },
  {
    id: "y2df4-024",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 24",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^3 \\sin x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^3,\\quad v = \\sin x",
          explanation: "Polynomial and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 3x^2",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2 \\cdot \\sin x + x^3 \\cdot \\cos x",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2\\sin x + x^3\\cos x",
          explanation: "Final form."
        }
      ],
      finalAnswer: "\\( 3x^2\\sin x + x^3\\cos x \\)"
    }
  },
  {
    id: "y2df4-025",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 25",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^3 \\cos x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^3,\\quad v = \\cos x",
          explanation: "Polynomial and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 3x^2",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin x",
          explanation: "Standard derivative of cosine; mind the minus sign."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2 \\cdot \\cos x + x^3 \\cdot (-\\sin x)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2\\cos x - x^3\\sin x",
          explanation: "Final form."
        }
      ],
      finalAnswer: "\\( 3x^2\\cos x - x^3\\sin x \\)"
    }
  },
  {
    id: "y2df4-026",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 26",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x+1)\\sin x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x+1,\\quad v = \\sin x",
          explanation: "Linear polynomial and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Derivative of \\(x+1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot \\sin x + (x+1) \\cdot \\cos x",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = \\sin x + (x+1)\\cos x",
          explanation: "Final form. Leaving \\((x+1)\\) bracketed keeps the structure visible."
        }
      ],
      finalAnswer: "\\( \\sin x + (x+1)\\cos x \\)"
    }
  },
  {
    id: "y2df4-027",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 27",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (2x-1)\\cos x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = 2x-1,\\quad v = \\cos x",
          explanation: "Linear polynomial and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2",
          explanation: "Derivative of \\(2x-1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin x",
          explanation: "Derivative of cosine."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\cos x + (2x-1)(-\\sin x)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\cos x - (2x-1)\\sin x",
          explanation: "Final form."
        }
      ],
      finalAnswer: "\\( 2\\cos x - (2x-1)\\sin x \\)"
    }
  },
  {
    id: "y2df4-028",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 28",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x \\sin(2x) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = \\sin(2x)",
          explanation: "Polynomial and trig — the argument is \\(2x\\), so \\(v\\) needs the chain rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Trivial."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 2\\cos(2x)",
          explanation: "Chain rule: outer derivative \\(\\cos(2x)\\) times inner derivative \\(2\\). Don't drop the \\(2\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot \\sin(2x) + x \\cdot 2\\cos(2x)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = \\sin(2x) + 2x\\cos(2x)",
          explanation: "Final form."
        }
      ],
      finalAnswer: "\\( \\sin(2x) + 2x\\cos(2x) \\)"
    }
  },
  {
    id: "y2df4-029",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 29",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = x \\cos(3x) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = \\cos(3x)",
          explanation: "Polynomial and trig; the \\(3x\\) inside needs the chain rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Trivial."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -3\\sin(3x)",
          explanation: "Chain rule: \\(-\\sin(3x)\\) times inner derivative \\(3\\). Both the sign and the \\(3\\) matter."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot \\cos(3x) + x \\cdot (-3\\sin(3x))",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos(3x) - 3x\\sin(3x)",
          explanation: "Final form."
        }
      ],
      finalAnswer: "\\( \\cos(3x) - 3x\\sin(3x) \\)"
    }
  },
  {
    id: "y2df4-030",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 \\sin(2x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = \\sin(2x)",
          explanation: "Polynomial and trig with inner factor \\(2\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\) (chain rule).",
          workingLatex: "v' = 2\\cos(2x)",
          explanation: "\\(\\tfrac{d}{dx}\\sin(2x) = \\cos(2x) \\cdot 2\\). The inner derivative \\(2\\) is the chain factor."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\cdot \\sin(2x) + x^2 \\cdot 2\\cos(2x)",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 6,
          description: "Tidy the second term.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\sin(2x) + 2x^2\\cos(2x)",
          explanation: "Multiply the \\(2\\) into the second term."
        },
        {
          stepNumber: 7,
          description: "Identify the common factor.",
          workingLatex: "\\text{Common factor: } 2x",
          explanation: "Both terms contain a \\(2\\) and at least one \\(x\\)."
        },
        {
          stepNumber: 8,
          description: "Optionally factor.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\bigl(\\sin(2x) + x\\cos(2x)\\bigr)",
          explanation: "Either factored or expanded form is acceptable as a final answer; expanded form is what we'll record."
        }
      ],
      finalAnswer: "\\( 2x\\sin(2x) + 2x^2\\cos(2x) \\)"
    }
  },
  // ── e^x × trig ────
  {
    id: "y2df4-031",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 31",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^x \\sin x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "exp"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = e^x,\\quad v = \\sin x",
          explanation: "Exponential and trig. Either split would work — pick \\(e^x\\) as \\(u\\) by convention."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = e^x",
          explanation: "Exponential is self-derivative."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = e^x \\sin x + e^x \\cos x",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Factor.",
          workingLatex: "\\tfrac{dy}{dx} = e^x(\\sin x + \\cos x)",
          explanation: "Pull out the common factor \\(e^x\\)."
        }
      ],
      finalAnswer: "\\( e^x(\\sin x + \\cos x) \\)"
    }
  },
  {
    id: "y2df4-032",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 32",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^x \\cos x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "exp"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = e^x,\\quad v = \\cos x",
          explanation: "Exponential and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = e^x",
          explanation: "Self-derivative."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin x",
          explanation: "Derivative of cosine carries the minus sign."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = e^x \\cos x + e^x(-\\sin x)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Factor.",
          workingLatex: "\\tfrac{dy}{dx} = e^x(\\cos x - \\sin x)",
          explanation: "Pull out the common factor \\(e^x\\)."
        }
      ],
      finalAnswer: "\\( e^x(\\cos x - \\sin x) \\)"
    }
  },
  {
    id: "y2df4-033",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 33",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{2x}\\sin x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "exp"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = e^{2x},\\quad v = \\sin x",
          explanation: "Exponential with inner factor \\(2\\), and trig."
        },
        {
          stepNumber: 2,
          description: "Set up the chain rule for \\(u\\).",
          workingLatex: "u = e^{w}\\text{ with }w = 2x,\\quad \\tfrac{dw}{dx} = 2",
          explanation: "Name the inner function \\(w = 2x\\); its derivative is \\(2\\). This is the chain factor we mustn't drop."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = e^{w}\\cdot \\tfrac{dw}{dx} = 2e^{2x}",
          explanation: "Outer derivative \\(e^{w}\\) times inner derivative \\(2\\) gives \\(2e^{2x}\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first. Not \\(u'v'\\)."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2e^{2x}\\cdot \\sin x + e^{2x}\\cdot \\cos x",
          explanation: "Plug in."
        },
        {
          stepNumber: 7,
          description: "Tidy.",
          workingLatex: "\\tfrac{dy}{dx} = 2e^{2x}\\sin x + e^{2x}\\cos x",
          explanation: "Write the two terms cleanly."
        },
        {
          stepNumber: 8,
          description: "Factor.",
          workingLatex: "\\tfrac{dy}{dx} = e^{2x}(2\\sin x + \\cos x)",
          explanation: "Pull out the common factor \\(e^{2x}\\)."
        }
      ],
      finalAnswer: "\\( e^{2x}(2\\sin x + \\cos x) \\)"
    }
  },
  {
    id: "y2df4-034",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 34",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{-x}\\cos x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "exp"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = e^{-x},\\quad v = \\cos x",
          explanation: "Decaying exponential and cosine."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\) (chain rule).",
          workingLatex: "u' = -e^{-x}",
          explanation: "\\(\\tfrac{d}{dx}(e^{-x}) = -e^{-x}\\). The inner derivative is \\(-1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin x",
          explanation: "Standard cosine derivative."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = (-e^{-x})\\cos x + e^{-x}(-\\sin x)",
          explanation: "Plug in; both terms pick up a minus sign."
        },
        {
          stepNumber: 6,
          description: "Combine.",
          workingLatex: "\\tfrac{dy}{dx} = -e^{-x}\\cos x - e^{-x}\\sin x",
          explanation: "Distribute the minus."
        },
        {
          stepNumber: 7,
          description: "Identify the common factor.",
          workingLatex: "\\text{Common factor: } -e^{-x}",
          explanation: "Both terms are negative and share \\(e^{-x}\\). Pull the negative out as well — it keeps the bracket clean."
        },
        {
          stepNumber: 8,
          description: "Factor.",
          workingLatex: "\\tfrac{dy}{dx} = -e^{-x}(\\cos x + \\sin x)",
          explanation: "Pull out the common factor \\(-e^{-x}\\). Final factored form."
        }
      ],
      finalAnswer: "\\( -e^{-x}(\\cos x + \\sin x) \\)"
    }
  },
  {
    id: "y2df4-035",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 35",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{3x}\\sin(2x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = e^{3x},\\quad v = \\sin(2x)",
          explanation: "Exponential and trig — both have inner constants, so both derivatives need the chain rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\) (chain rule).",
          workingLatex: "u' = 3e^{3x}",
          explanation: "Inner derivative of \\(3x\\) is \\(3\\), so \\(\\tfrac{d}{dx}(e^{3x}) = 3e^{3x}\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\) (chain rule).",
          workingLatex: "v' = 2\\cos(2x)",
          explanation: "Inner derivative of \\(2x\\) is \\(2\\), so \\(\\tfrac{d}{dx}\\sin(2x) = 2\\cos(2x)\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 3e^{3x}\\cdot \\sin(2x) + e^{3x}\\cdot 2\\cos(2x)",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 6,
          description: "Tidy the second term.",
          workingLatex: "\\tfrac{dy}{dx} = 3e^{3x}\\sin(2x) + 2e^{3x}\\cos(2x)",
          explanation: "Move the constant \\(2\\) to the front."
        },
        {
          stepNumber: 7,
          description: "Identify the common factor.",
          workingLatex: "\\text{Both terms share } e^{3x}",
          explanation: "Neither trig piece can be combined with the other, so the exponential is all we can pull out."
        },
        {
          stepNumber: 8,
          description: "Factor out \\(e^{3x}\\).",
          workingLatex: "\\tfrac{dy}{dx} = e^{3x}(3\\sin 2x + 2\\cos 2x)",
          explanation: "Pull out the common exponential. Final factored form."
        }
      ],
      finalAnswer: "\\( e^{3x}(3\\sin 2x + 2\\cos 2x) \\)"
    }
  },
  // ── ln × trig ────
  {
    id: "y2df4-036",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 36",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin x \\ln x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the domain.",
          workingLatex: "x > 0",
          explanation: "\\(\\ln x\\) is only defined for positive \\(x\\). The derivative will share this domain."
        },
        {
          stepNumber: 2,
          description: "Identify the two factors.",
          workingLatex: "u = \\sin x,\\quad v = \\ln x",
          explanation: "Trig and logarithm — neither is the polynomial part, but the split is still natural."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Standard derivative of \\(\\ln x\\)."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first. Never \\(u'v'\\)."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos x \\cdot \\ln x + \\sin x \\cdot \\tfrac{1}{x}",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 7,
          description: "Tidy the second term.",
          workingLatex: "\\sin x \\cdot \\tfrac{1}{x} = \\tfrac{\\sin x}{x}",
          explanation: "Write the second product as a single fraction."
        },
        {
          stepNumber: 8,
          description: "Final form.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos x\\ln x + \\tfrac{\\sin x}{x}",
          explanation: "No common factor across both terms — leave as a sum."
        }
      ],
      finalAnswer: "\\( \\cos x\\ln x + \\tfrac{\\sin x}{x} \\)"
    }
  },
  {
    id: "y2df4-037",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 37",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\cos x \\ln x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the domain.",
          workingLatex: "x > 0",
          explanation: "\\(\\ln x\\) requires positive \\(x\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the two factors.",
          workingLatex: "u = \\cos x,\\quad v = \\ln x",
          explanation: "Trig and logarithm."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = -\\sin x",
          explanation: "Derivative of cosine carries the minus sign — the easy slip."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Standard."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = (-\\sin x)\\cdot \\ln x + \\cos x \\cdot \\tfrac{1}{x}",
          explanation: "Plug in, keeping the minus on \\(u'\\) explicit."
        },
        {
          stepNumber: 7,
          description: "Tidy the second term.",
          workingLatex: "\\cos x \\cdot \\tfrac{1}{x} = \\tfrac{\\cos x}{x}",
          explanation: "Combine into a single fraction."
        },
        {
          stepNumber: 8,
          description: "Final form.",
          workingLatex: "\\tfrac{dy}{dx} = -\\sin x\\ln x + \\tfrac{\\cos x}{x}",
          explanation: "No common factor; leave as a sum."
        }
      ],
      finalAnswer: "\\( -\\sin x\\ln x + \\tfrac{\\cos x}{x} \\)"
    }
  },
  // ── polynomial × polynomial ────
  {
    id: "y2df4-038",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 38",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x+1)(2x-3) \\) using the product rule.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x+1,\\quad v = 2x-3",
          explanation: "Two linear factors. We could expand and differentiate term-by-term, but the question asks for the product rule explicitly."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Derivative of \\(x+1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 2",
          explanation: "Derivative of \\(2x-3\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1(2x-3) + (x+1)(2)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Expand and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = (2x-3) + (2x+2) = 4x - 1",
          explanation: "Combine like terms. Check: expanding first gives \\(y = 2x^2 - x - 3\\), and \\(y' = 4x - 1\\). Matches."
        }
      ],
      finalAnswer: "\\( 4x - 1 \\)"
    }
  },
  {
    id: "y2df4-039",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 39",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (2x-1)(x^2+1) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = 2x-1,\\quad v = x^2+1",
          explanation: "Linear and quadratic factors."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2",
          explanation: "Derivative of \\(2x-1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 2x",
          explanation: "Power rule on each term."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2(x^2+1) + (2x-1)(2x)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Expand and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2x^2 + 2 + 4x^2 - 2x = 6x^2 - 2x + 2",
          explanation: "Collect like terms."
        }
      ],
      finalAnswer: "\\( 6x^2 - 2x + 2 \\)"
    }
  },
  {
    id: "y2df4-040",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 40",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^2+1)(x^3-x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2+1,\\quad v = x^3-x",
          explanation: "Two polynomial factors."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 3x^2 - 1",
          explanation: "Power rule on each term."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x(x^3-x) + (x^2+1)(3x^2-1)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Expand the first product.",
          workingLatex: "2x(x^3 - x) = 2x^4 - 2x^2",
          explanation: "Distribute \\(2x\\) into the bracket."
        },
        {
          stepNumber: 7,
          description: "Expand the second product.",
          workingLatex: "(x^2+1)(3x^2-1) = 3x^4 - x^2 + 3x^2 - 1 = 3x^4 + 2x^2 - 1",
          explanation: "FOIL the two brackets and collect."
        },
        {
          stepNumber: 8,
          description: "Add and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = (2x^4 - 2x^2) + (3x^4 + 2x^2 - 1) = 5x^4 - 1",
          explanation: "The \\(\\pm 2x^2\\) terms cancel exactly, leaving a clean quartic minus one. Cross-check by expanding \\(y\\): \\(y = x^5 - x^3 + x^3 - x = x^5 - x\\), so \\(y' = 5x^4 - 1\\). Matches."
        }
      ],
      finalAnswer: "\\( 5x^4 - 1 \\)"
    }
  },
  {
    id: "y2df4-041",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 41",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (3x-2)(x^2-5) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = 3x-2,\\quad v = x^2-5",
          explanation: "Linear and quadratic."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 3",
          explanation: "Derivative of \\(3x-2\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 2x",
          explanation: "Power rule; the \\(-5\\) constant vanishes."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 3(x^2-5) + (3x-2)(2x)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Expand and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2 - 15 + 6x^2 - 4x = 9x^2 - 4x - 15",
          explanation: "Collect like terms."
        }
      ],
      finalAnswer: "\\( 9x^2 - 4x - 15 \\)"
    }
  },
  {
    id: "y2df4-042",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 42",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x+2)^2(x-1) \\). (Use product rule + chain rule.)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "chain"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = (x+2)^2,\\quad v = x-1",
          explanation: "Grouping \\((x+2)^2\\) together as \\(u\\) is cleanest — it stays as one chunk through the algebra."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\) (chain rule).",
          workingLatex: "u' = 2(x+2)",
          explanation: "Chain rule on \\((x+2)^2\\): outer derivative \\(2(x+2)\\) times inner derivative \\(1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 1",
          explanation: "Derivative of \\(x-1\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2(x+2)(x-1) + (x+2)^2 \\cdot 1",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Factor out \\((x+2)\\).",
          workingLatex: "\\tfrac{dy}{dx} = (x+2)\\bigl[2(x-1) + (x+2)\\bigr]",
          explanation: "Both terms share a factor of \\((x+2)\\) — pull it out before expanding."
        },
        {
          stepNumber: 7,
          description: "Simplify inside the bracket.",
          workingLatex: "2(x-1) + (x+2) = 2x - 2 + x + 2 = 3x",
          explanation: "The \\(-2\\) and \\(+2\\) cancel."
        },
        {
          stepNumber: 8,
          description: "Combine.",
          workingLatex: "\\tfrac{dy}{dx} = 3x(x+2)",
          explanation: "Final factored form."
        }
      ],
      finalAnswer: "\\( 3x(x+2) \\)"
    }
  },
  // ── trig × trig ────
  {
    id: "y2df4-043",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 43",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin x \\cos x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = \\sin x,\\quad v = \\cos x",
          explanation: "Two trig factors."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin x",
          explanation: "Derivative of cosine carries the minus."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos^2 x - \\sin^2 x",
          explanation: "Combine the squared trig terms."
        },
        {
          stepNumber: 7,
          description: "Apply the double-angle identity.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos 2x",
          explanation: "Recognise \\(\\cos^2 x - \\sin^2 x = \\cos 2x\\). This matches differentiating the simpler form \\(y = \\tfrac{1}{2}\\sin 2x\\)."
        }
      ],
      finalAnswer: "\\( \\cos 2x \\)"
    }
  },
  {
    id: "y2df4-044",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 44",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Using \\( \\sin^2 x = \\sin x \\cdot \\sin x \\), differentiate with the product rule.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = \\sin x,\\quad v = \\sin x",
          explanation: "Both factors are the same."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\cos x",
          explanation: "Same as \\(u'\\) since \\(v = u\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos x \\sin x + \\sin x \\cos x",
          explanation: "Plug in. The two terms are equal."
        },
        {
          stepNumber: 6,
          description: "Combine.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\sin x \\cos x",
          explanation: "Add the identical terms."
        },
        {
          stepNumber: 7,
          description: "Apply the double-angle identity.",
          workingLatex: "\\tfrac{dy}{dx} = \\sin 2x",
          explanation: "\\(2\\sin x\\cos x = \\sin 2x\\). Either form is acceptable."
        }
      ],
      finalAnswer: "\\( \\sin 2x \\)"
    }
  },
  {
    id: "y2df4-045",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 45",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\cos^2 x \\) using the product rule.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = \\cos x,\\quad v = \\cos x",
          explanation: "Write \\(\\cos^2 x = \\cos x \\cdot \\cos x\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = -\\sin x",
          explanation: "Derivative of cosine."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin x",
          explanation: "Same as \\(u'\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = (-\\sin x)\\cos x + \\cos x(-\\sin x)",
          explanation: "Plug in; both terms negative."
        },
        {
          stepNumber: 6,
          description: "Combine.",
          workingLatex: "\\tfrac{dy}{dx} = -2\\sin x\\cos x",
          explanation: "Add the two equal terms."
        },
        {
          stepNumber: 7,
          description: "Apply the double-angle identity.",
          workingLatex: "\\tfrac{dy}{dx} = -\\sin 2x",
          explanation: "\\(2\\sin x\\cos x = \\sin 2x\\), so the result is \\(-\\sin 2x\\)."
        }
      ],
      finalAnswer: "\\( -\\sin 2x \\)"
    }
  },
  {
    id: "y2df4-046",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 46",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin(2x)\\cos(3x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = \\sin(2x),\\quad v = \\cos(3x)",
          explanation: "Two trig factors, both with inner constants — both will need the chain rule."
        },
        {
          stepNumber: 2,
          description: "Set up the chain rule for \\(u\\).",
          workingLatex: "u = \\sin(2x),\\quad \\text{inner }w=2x,\\; \\tfrac{dw}{dx} = 2",
          explanation: "The inner derivative for \\(u\\) is \\(2\\); this is the chain factor that often gets forgotten."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2\\cos(2x)",
          explanation: "\\(\\cos(2x)\\) times the inner derivative \\(2\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\) (chain rule).",
          workingLatex: "v' = -3\\sin(3x)",
          explanation: "\\(\\tfrac{d}{dx}\\cos(3x) = -\\sin(3x) \\cdot 3 = -3\\sin(3x)\\). Both the minus (from cosine) and the \\(3\\) (chain factor) matter."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\cos(2x)\\cdot \\cos(3x) + \\sin(2x)\\cdot (-3\\sin(3x))",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 7,
          description: "Distribute the minus.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\cos(2x)\\cos(3x) - 3\\sin(2x)\\sin(3x)",
          explanation: "Move the minus to the front of the second term."
        },
        {
          stepNumber: 8,
          description: "Final form.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\cos 2x\\cos 3x - 3\\sin 2x\\sin 3x",
          explanation: "No common factor — this is the canonical answer. Cannot be simplified further with elementary identities."
        }
      ],
      finalAnswer: "\\( 2\\cos 2x\\cos 3x - 3\\sin 2x\\sin 3x \\)"
    }
  },
  {
    id: "y2df4-047",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 47",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin x \\tan x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = \\sin x,\\quad v = \\tan x",
          explanation: "Sine and tangent."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\sec^2 x",
          explanation: "Standard derivative: \\(\\tfrac{d}{dx}(\\tan x) = \\sec^2 x\\)."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos x \\cdot \\tan x + \\sin x \\cdot \\sec^2 x",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Simplify the first term.",
          workingLatex: "\\cos x \\tan x = \\cos x \\cdot \\tfrac{\\sin x}{\\cos x} = \\sin x",
          explanation: "Use \\(\\tan x = \\sin x / \\cos x\\) and cancel the \\(\\cos x\\) top-and-bottom."
        },
        {
          stepNumber: 7,
          description: "Combine.",
          workingLatex: "\\tfrac{dy}{dx} = \\sin x + \\sin x \\sec^2 x",
          explanation: "Both terms have a factor of \\(\\sin x\\)."
        },
        {
          stepNumber: 8,
          description: "Factor.",
          workingLatex: "\\tfrac{dy}{dx} = \\sin x(1 + \\sec^2 x)",
          explanation: "Pull out the common factor \\(\\sin x\\)."
        }
      ],
      finalAnswer: "\\( \\sin x(1 + \\sec^2 x) \\)"
    }
  },
  // ── With √(x) or 1/x ────
  {
    id: "y2df4-048",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 48",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{x}\\,\\ln x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite \\(\\sqrt{x}\\) as a power.",
          workingLatex: "y = x^{1/2}\\ln x",
          explanation: "Converting to \\(x^{1/2}\\) makes the power rule mechanical."
        },
        {
          stepNumber: 2,
          description: "Identify the two factors.",
          workingLatex: "u = x^{1/2},\\quad v = \\ln x",
          explanation: "Power function and logarithm."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = \\tfrac{1}{2}x^{-1/2} = \\tfrac{1}{2\\sqrt{x}}",
          explanation: "Power rule: bring the \\(1/2\\) down, reduce the exponent."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Standard."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{\\ln x}{2\\sqrt{x}} + \\sqrt{x}\\cdot \\tfrac{1}{x}",
          explanation: "Plug in."
        },
        {
          stepNumber: 7,
          description: "Simplify the second term.",
          workingLatex: "\\sqrt{x}\\cdot \\tfrac{1}{x} = \\tfrac{1}{\\sqrt{x}} = \\tfrac{2}{2\\sqrt{x}}",
          explanation: "Use \\(\\sqrt{x}/x = 1/\\sqrt{x}\\), then put over the common denominator \\(2\\sqrt{x}\\)."
        },
        {
          stepNumber: 8,
          description: "Combine over a single denominator.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{\\ln x + 2}{2\\sqrt{x}}",
          explanation: "Add the two fractions now that they share the denominator \\(2\\sqrt{x}\\)."
        }
      ],
      finalAnswer: "\\( \\tfrac{\\ln x + 2}{2\\sqrt{x}} \\)"
    }
  },
  {
    id: "y2df4-049",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 49",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{x}\\,e^x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite \\(\\sqrt{x}\\) as a power.",
          workingLatex: "y = x^{1/2} e^x",
          explanation: "Power form makes differentiation cleaner."
        },
        {
          stepNumber: 2,
          description: "Identify the two factors.",
          workingLatex: "u = x^{1/2},\\quad v = e^x",
          explanation: "Power function and exponential."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = \\tfrac{1}{2}x^{-1/2} = \\tfrac{1}{2\\sqrt{x}}",
          explanation: "Power rule."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = e^x",
          explanation: "Self-derivative."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{e^x}{2\\sqrt{x}} + \\sqrt{x}\\,e^x",
          explanation: "Plug in."
        },
        {
          stepNumber: 7,
          description: "Common denominator \\(2\\sqrt{x}\\).",
          workingLatex: "\\sqrt{x}\\,e^x = \\tfrac{2x e^x}{2\\sqrt{x}}",
          explanation: "Multiply the second term by \\(2\\sqrt{x}/(2\\sqrt{x})\\); note \\(\\sqrt{x}\\cdot 2\\sqrt{x} = 2x\\)."
        },
        {
          stepNumber: 8,
          description: "Combine and factor.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{e^x + 2xe^x}{2\\sqrt{x}} = \\tfrac{e^x(1 + 2x)}{2\\sqrt{x}}",
          explanation: "Add the fractions, then pull out the common factor \\(e^x\\)."
        }
      ],
      finalAnswer: "\\( \\tfrac{e^x(1+2x)}{2\\sqrt{x}} \\)"
    }
  },
  // ── Applications: gradients, tangents, stationary points ────
  {
    id: "y2df4-050",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 50",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = x e^x \\) at \\( x = 0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = e^x",
          explanation: "Polynomial and exponential."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Trivial."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = e^x",
          explanation: "Exponential is self-derivative."
        },
        {
          stepNumber: 4,
          description: "Apply the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv' = e^x + xe^x = e^x(1 + x)",
          explanation: "Combine and factor out the shared \\(e^x\\)."
        },
        {
          stepNumber: 5,
          description: "Substitute \\(x = 0\\).",
          workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=0} = e^0(1 + 0)",
          explanation: "Plug the given value into the derivative."
        },
        {
          stepNumber: 6,
          description: "Evaluate.",
          workingLatex: "= 1 \\cdot 1 = 1",
          explanation: "\\(e^0 = 1\\). Gradient at the origin is \\(1\\)."
        }
      ],
      finalAnswer: "\\( 1 \\)"
    }
  },
  {
    id: "y2df4-051",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 51",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = x^2 e^x \\) at \\( x = 1 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = e^x",
          explanation: "Polynomial and exponential."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = e^x",
          explanation: "Self-derivative."
        },
        {
          stepNumber: 4,
          description: "Apply the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv' = 2xe^x + x^2 e^x = e^x(2x + x^2)",
          explanation: "Combine and pull out the shared \\(e^x\\)."
        },
        {
          stepNumber: 5,
          description: "Substitute \\(x = 1\\).",
          workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=1} = e^1(2(1) + 1^2)",
          explanation: "Plug the given value into the derivative."
        },
        {
          stepNumber: 6,
          description: "Evaluate.",
          workingLatex: "= e(2 + 1) = 3e",
          explanation: "Leave in exact form involving \\(e\\)."
        }
      ],
      finalAnswer: "\\( 3e \\)"
    }
  },
  {
    id: "y2df4-052",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 52",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary point of \\( y = x e^{-x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = e^{-x}",
          explanation: "Polynomial and decaying exponential."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\) and \\(v\\).",
          workingLatex: "u' = 1,\\quad v' = -e^{-x}",
          explanation: "Chain rule on \\(v\\): inner derivative \\(-1\\)."
        },
        {
          stepNumber: 3,
          description: "Apply the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = e^{-x} - xe^{-x} = e^{-x}(1 - x)",
          explanation: "Pull out the common factor \\(e^{-x}\\)."
        },
        {
          stepNumber: 4,
          description: "Set the derivative to zero.",
          workingLatex: "e^{-x}(1 - x) = 0",
          explanation: "Stationary points occur where the derivative vanishes."
        },
        {
          stepNumber: 5,
          description: "Solve for \\(x\\).",
          workingLatex: "1 - x = 0 \\Rightarrow x = 1",
          explanation: "\\(e^{-x}\\) is never zero, so only the bracket can vanish."
        },
        {
          stepNumber: 6,
          description: "Find the \\(y\\)-coordinate.",
          workingLatex: "y(1) = 1 \\cdot e^{-1} = \\tfrac{1}{e}",
          explanation: "Substitute back into the original function."
        },
        {
          stepNumber: 7,
          description: "Compute the second derivative.",
          workingLatex: "y'' = \\tfrac{d}{dx}\\bigl[e^{-x}(1-x)\\bigr] = -e^{-x}(1-x) + e^{-x}(-1) = e^{-x}(x-2)",
          explanation: "Apply the product rule again to \\(y' = e^{-x}(1-x)\\). Be careful: collecting gives \\(-e^{-x}+xe^{-x}-e^{-x} = e^{-x}(x-2)\\)."
        },
        {
          stepNumber: 8,
          description: "Classify with the second-derivative test.",
          workingLatex: "y''(1) = e^{-1}(1 - 2) = -\\tfrac{1}{e} < 0",
          explanation: "Since \\(y'' < 0\\) at the stationary point, it is a local maximum."
        },
        {
          stepNumber: 9,
          description: "State the conclusion.",
          workingLatex: "\\text{Maximum at } (1,\\, 1/e)",
          explanation: "Combine the coordinates and the classification."
        }
      ],
      finalAnswer: "Maximum at \\( (1, 1/e) \\)."
    }
  },
  {
    id: "y2df4-053",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 53",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the equation of the tangent to \\( y = x \\sin x \\) at \\( x = \\tfrac{\\pi}{2} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "tangent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = \\sin x",
          explanation: "Polynomial and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\) and \\(v\\).",
          workingLatex: "u' = 1,\\quad v' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 3,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic formula first."
        },
        {
          stepNumber: 4,
          description: "Apply.",
          workingLatex: "\\tfrac{dy}{dx} = \\sin x + x\\cos x",
          explanation: "Substitute \\(u, v, u', v'\\)."
        },
        {
          stepNumber: 5,
          description: "Evaluate the gradient at \\(x = \\pi/2\\).",
          workingLatex: "m = \\sin(\\pi/2) + (\\pi/2)\\cos(\\pi/2) = 1 + (\\pi/2)(0) = 1",
          explanation: "\\(\\sin(\\pi/2) = 1\\), \\(\\cos(\\pi/2) = 0\\). The gradient is exactly \\(1\\)."
        },
        {
          stepNumber: 6,
          description: "Find the \\(y\\)-coordinate at \\(x = \\pi/2\\).",
          workingLatex: "y(\\pi/2) = (\\pi/2)\\sin(\\pi/2) = \\pi/2",
          explanation: "Substitute into the original function."
        },
        {
          stepNumber: 7,
          description: "Use the point-slope form of a line.",
          workingLatex: "y - \\tfrac{\\pi}{2} = 1 \\cdot \\bigl(x - \\tfrac{\\pi}{2}\\bigr)",
          explanation: "Tangent passes through \\((\\pi/2,\\pi/2)\\) with gradient \\(1\\)."
        },
        {
          stepNumber: 8,
          description: "Simplify.",
          workingLatex: "y = x",
          explanation: "The \\(-\\pi/2\\) and \\(+\\pi/2\\) cancel — surprisingly clean."
        }
      ],
      finalAnswer: "\\( y = x \\)"
    }
  },
  {
    id: "y2df4-054",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 54",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary point of \\( y = x \\ln x \\) for \\( x > 0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x,\\quad v = \\ln x",
          explanation: "Polynomial and logarithm; domain restricted to \\(x>0\\) for \\(\\ln x\\) to be defined."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\) and \\(v\\).",
          workingLatex: "u' = 1,\\quad v' = \\tfrac{1}{x}",
          explanation: "Standard."
        },
        {
          stepNumber: 3,
          description: "Apply the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\ln x + x \\cdot \\tfrac{1}{x} = \\ln x + 1",
          explanation: "\\(x\\cdot 1/x = 1\\)."
        },
        {
          stepNumber: 4,
          description: "Set the derivative to zero.",
          workingLatex: "\\ln x + 1 = 0",
          explanation: "Stationary points need \\(dy/dx = 0\\)."
        },
        {
          stepNumber: 5,
          description: "Solve for \\(x\\).",
          workingLatex: "\\ln x = -1 \\Rightarrow x = e^{-1} = \\tfrac{1}{e}",
          explanation: "Exponentiate both sides."
        },
        {
          stepNumber: 6,
          description: "Find the \\(y\\)-coordinate.",
          workingLatex: "y(1/e) = \\tfrac{1}{e}\\ln(1/e) = \\tfrac{1}{e}\\cdot(-1) = -\\tfrac{1}{e}",
          explanation: "Use \\(\\ln(1/e) = -1\\)."
        },
        {
          stepNumber: 7,
          description: "Compute the second derivative.",
          workingLatex: "y'' = \\tfrac{d}{dx}(\\ln x + 1) = \\tfrac{1}{x}",
          explanation: "Differentiate \\(y'\\) once more."
        },
        {
          stepNumber: 8,
          description: "Classify with the second-derivative test.",
          workingLatex: "y''(1/e) = e > 0",
          explanation: "Since \\(y'' > 0\\), the stationary point is a local minimum."
        },
        {
          stepNumber: 9,
          description: "State the conclusion.",
          workingLatex: "\\text{Minimum at } (1/e,\\, -1/e)",
          explanation: "Combine coordinates and classification."
        }
      ],
      finalAnswer: "Minimum at \\( (1/e, -1/e) \\)."
    }
  },
  // ── More product examples ────
  {
    id: "y2df4-055",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 55",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^4 e^{-2x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^4,\\quad v = e^{-2x}",
          explanation: "Polynomial and decaying exponential with inner factor \\(-2\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 4x^3",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\) (chain rule).",
          workingLatex: "v' = -2e^{-2x}",
          explanation: "Inner derivative of \\(-2x\\) is \\(-2\\), so \\(\\tfrac{d}{dx}(e^{-2x}) = -2e^{-2x}\\). Don't lose either the \\(2\\) or the minus sign."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 4x^3 \\cdot e^{-2x} + x^4 \\cdot (-2e^{-2x})",
          explanation: "Plug in, keeping the minus sign on \\(v'\\) visible."
        },
        {
          stepNumber: 6,
          description: "Tidy the second term.",
          workingLatex: "\\tfrac{dy}{dx} = 4x^3 e^{-2x} - 2x^4 e^{-2x}",
          explanation: "Move the \\(-2\\) to the front."
        },
        {
          stepNumber: 7,
          description: "Identify the common factor.",
          workingLatex: "\\text{Common factor: } 2x^3 e^{-2x}",
          explanation: "Smallest power of \\(x\\) is \\(x^3\\); both terms share a factor of \\(2\\) and \\(e^{-2x}\\)."
        },
        {
          stepNumber: 8,
          description: "Factor.",
          workingLatex: "\\tfrac{dy}{dx} = 2x^3 e^{-2x}(2 - x)",
          explanation: "Inside the bracket: \\(4/2 = 2\\) and \\(-2x^4/(2x^3) = -x\\). Final factored form."
        }
      ],
      finalAnswer: "\\( 2x^3 e^{-2x}(2 - x) \\)"
    }
  },
  {
    id: "y2df4-056",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 56",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^2+1)\\sin x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2+1,\\quad v = \\sin x",
          explanation: "Quadratic and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule; constant drops."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\cos x",
          explanation: "Standard."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\sin x + (x^2+1)\\cos x",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Final form.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\sin x + (x^2+1)\\cos x",
          explanation: "No useful common factor — leave as a sum."
        }
      ],
      finalAnswer: "\\( 2x\\sin x + (x^2+1)\\cos x \\)"
    }
  },
  {
    id: "y2df4-057",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 57",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^3-1)\\cos x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^3-1,\\quad v = \\cos x",
          explanation: "Polynomial and trig."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 3x^2",
          explanation: "Power rule on \\(x^3\\); constant drops."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin x",
          explanation: "Derivative of cosine carries a minus."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2\\cos x + (x^3-1)(-\\sin x)",
          explanation: "Plug in, sign on \\(v'\\) explicit."
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2\\cos x - (x^3-1)\\sin x",
          explanation: "Final form."
        }
      ],
      finalAnswer: "\\( 3x^2\\cos x - (x^3-1)\\sin x \\)"
    }
  },
  {
    id: "y2df4-058",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 58",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (2x+1)e^{x^2} \\). (Combine product and chain rule.)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "chain"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = 2x+1,\\quad v = e^{x^2}",
          explanation: "Linear polynomial and exponential with quadratic exponent — \\(v\\) will need the chain rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2",
          explanation: "Derivative of \\(2x+1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\) (chain rule).",
          workingLatex: "v' = 2xe^{x^2}",
          explanation: "\\(\\tfrac{d}{dx}(e^{x^2}) = e^{x^2} \\cdot \\tfrac{d}{dx}(x^2) = e^{x^2}\\cdot 2x\\). The \\(2x\\) is the chain factor."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2e^{x^2} + (2x+1)\\cdot 2xe^{x^2}",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Factor out \\(e^{x^2}\\).",
          workingLatex: "\\tfrac{dy}{dx} = e^{x^2}\\bigl[2 + 2x(2x+1)\\bigr]",
          explanation: "Pull out the common exponential factor."
        },
        {
          stepNumber: 7,
          description: "Expand inside the bracket.",
          workingLatex: "2 + 2x(2x+1) = 2 + 4x^2 + 2x = 4x^2 + 2x + 2",
          explanation: "Distribute \\(2x\\), then collect like terms in descending powers."
        },
        {
          stepNumber: 8,
          description: "Factor the \\(2\\).",
          workingLatex: "\\tfrac{dy}{dx} = e^{x^2}(4x^2 + 2x + 2) = 2e^{x^2}(2x^2 + x + 1)",
          explanation: "Pull out the common factor \\(2\\) from inside the bracket for cleaner form."
        }
      ],
      finalAnswer: "\\( 2e^{x^2}(2x^2 + x + 1) \\)"
    }
  },
  {
    id: "y2df4-059",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 59",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 \\cos(x^2) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule", "chain"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = \\cos(x^2)",
          explanation: "Polynomial and trig — the trig argument is also \\(x^2\\), so \\(v\\) needs the chain rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 3,
          description: "Set up the chain rule for \\(v\\).",
          workingLatex: "v = \\cos(w)\\text{ with }w = x^2,\\; \\tfrac{dw}{dx} = 2x",
          explanation: "Name the inner function \\(w = x^2\\); its derivative is \\(2x\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin(w) \\cdot \\tfrac{dw}{dx} = -2x\\sin(x^2)",
          explanation: "Cosine flips the sign, and we multiply by the inner derivative \\(2x\\). Both pieces matter."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\cdot \\cos(x^2) + x^2 \\cdot (-2x\\sin(x^2))",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 7,
          description: "Tidy the second term.",
          workingLatex: "x^2 \\cdot (-2x\\sin(x^2)) = -2x^3 \\sin(x^2)",
          explanation: "\\(x^2 \\cdot 2x = 2x^3\\); carry the minus sign through."
        },
        {
          stepNumber: 8,
          description: "Final form.",
          workingLatex: "\\tfrac{dy}{dx} = 2x\\cos(x^2) - 2x^3\\sin(x^2)",
          explanation: "Optionally factor \\(2x\\): \\(2x[\\cos(x^2) - x^2\\sin(x^2)]\\). Expanded form is what we'll record."
        }
      ],
      finalAnswer: "\\( 2x\\cos(x^2) - 2x^3\\sin(x^2) \\)"
    }
  },
  {
    id: "y2df4-060",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 60",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x-1)(x-2)(x-3) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group two factors and identify a binary split.",
          workingLatex: "u = (x-1)(x-2),\\quad v = x-3",
          explanation: "The product rule is for two factors. Group the first two together so we have a clear \\(u\\) and \\(v\\)."
        },
        {
          stepNumber: 2,
          description: "Expand \\(u\\) for ease of differentiation.",
          workingLatex: "u = x^2 - 3x + 2",
          explanation: "FOIL the bracketed pair."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x - 3",
          explanation: "Power rule on each term."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 1",
          explanation: "Derivative of \\(x-3\\)."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = (2x-3)(x-3) + (x^2 - 3x + 2)(1)",
          explanation: "Plug in."
        },
        {
          stepNumber: 7,
          description: "Expand the first product.",
          workingLatex: "(2x-3)(x-3) = 2x^2 - 6x - 3x + 9 = 2x^2 - 9x + 9",
          explanation: "FOIL and collect."
        },
        {
          stepNumber: 8,
          description: "Add and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = (2x^2 - 9x + 9) + (x^2 - 3x + 2) = 3x^2 - 12x + 11",
          explanation: "Collect like terms. Cross-check via full expansion: \\(y = x^3 - 6x^2 + 11x - 6\\), so \\(y' = 3x^2 - 12x + 11\\). Matches."
        }
      ],
      finalAnswer: "\\( 3x^2 - 12x + 11 \\)"
    }
  },
  {
    id: "y2df4-061",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 61",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 \\sin x \\cos x \\). (Hint: \\( \\sin x \\cos x = \\tfrac{1}{2}\\sin 2x \\).)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the double-angle identity to simplify \\(y\\).",
          workingLatex: "y = x^2 \\cdot \\tfrac{1}{2}\\sin 2x = \\tfrac{1}{2} x^2 \\sin 2x",
          explanation: "Replacing \\(\\sin x\\cos x\\) by \\(\\tfrac{1}{2}\\sin 2x\\) reduces a triple product to a two-factor product. The hint exists to save you from a more painful three-way calculation."
        },
        {
          stepNumber: 2,
          description: "Identify the two factors.",
          workingLatex: "u = x^2,\\quad v = \\sin 2x",
          explanation: "Treat the \\(\\tfrac{1}{2}\\) as a constant multiplier that comes through at the end."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2x",
          explanation: "Power rule."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\) (chain rule).",
          workingLatex: "v' = 2\\cos 2x",
          explanation: "Inner derivative of \\(2x\\) is \\(2\\)."
        },
        {
          stepNumber: 5,
          description: "State the product rule (carrying the \\(\\tfrac{1}{2}\\)).",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{2}\\bigl[u'v + uv'\\bigr]",
          explanation: "Symbolic formula first; the constant \\(\\tfrac{1}{2}\\) factors out."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{2}\\bigl[2x\\cdot \\sin 2x + x^2 \\cdot 2\\cos 2x\\bigr]",
          explanation: "Plug in \\(u, u', v, v'\\)."
        },
        {
          stepNumber: 7,
          description: "Tidy inside the bracket.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{2}\\bigl[2x\\sin 2x + 2x^2\\cos 2x\\bigr]",
          explanation: "Both terms inside carry a factor of \\(2\\)."
        },
        {
          stepNumber: 8,
          description: "Distribute the \\(\\tfrac{1}{2}\\).",
          workingLatex: "\\tfrac{dy}{dx} = x\\sin 2x + x^2\\cos 2x",
          explanation: "The \\(\\tfrac{1}{2}\\) cancels each factor of \\(2\\). Final form."
        }
      ],
      finalAnswer: "\\( x\\sin 2x + x^2\\cos 2x \\)"
    }
  },
  {
    id: "y2df4-062",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 62",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (e^x + 1)(e^x - 1) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors (product rule route).",
          workingLatex: "u = e^x + 1,\\quad v = e^x - 1",
          explanation: "Both factors look similar; we can grind through the product rule, or shortcut via difference of squares. Show both for completeness."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\) and \\(v\\).",
          workingLatex: "u' = e^x,\\quad v' = e^x",
          explanation: "Derivative of \\(e^x \\pm \\text{const}\\) is \\(e^x\\); the constant drops."
        },
        {
          stepNumber: 3,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 4,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = e^x(e^x - 1) + (e^x + 1)e^x",
          explanation: "Plug in."
        },
        {
          stepNumber: 5,
          description: "Expand both terms.",
          workingLatex: "= (e^{2x} - e^x) + (e^{2x} + e^x)",
          explanation: "Distribute \\(e^x\\) into each bracket; use \\(e^x \\cdot e^x = e^{2x}\\)."
        },
        {
          stepNumber: 6,
          description: "Collect.",
          workingLatex: "\\tfrac{dy}{dx} = 2e^{2x}",
          explanation: "The \\(\\pm e^x\\) terms cancel, leaving \\(2e^{2x}\\)."
        },
        {
          stepNumber: 7,
          description: "Cross-check via difference of squares.",
          workingLatex: "y = (e^x)^2 - 1 = e^{2x} - 1",
          explanation: "\\((A+B)(A-B) = A^2 - B^2\\) with \\(A = e^x\\). A simpler view of the same function."
        },
        {
          stepNumber: 8,
          description: "Differentiate the simplified form.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{d}{dx}(e^{2x}) - \\tfrac{d}{dx}(1) = 2e^{2x}",
          explanation: "Chain rule on \\(e^{2x}\\) gives \\(2e^{2x}\\); the constant \\(-1\\) drops. Matches the product-rule answer."
        }
      ],
      finalAnswer: "\\( 2e^{2x} \\)"
    }
  },
  {
    id: "y2df4-063",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 63",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (\\ln x + 1)(\\ln x - 1) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors (product rule route).",
          workingLatex: "u = \\ln x + 1,\\quad v = \\ln x - 1",
          explanation: "We'll use the product rule, then verify via difference of squares."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\) and \\(v\\).",
          workingLatex: "u' = \\tfrac{1}{x},\\quad v' = \\tfrac{1}{x}",
          explanation: "Derivative of \\(\\ln x\\) is \\(1/x\\); the constants drop."
        },
        {
          stepNumber: 3,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 4,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x}(\\ln x - 1) + (\\ln x + 1)\\tfrac{1}{x}",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 5,
          description: "Combine over a common denominator.",
          workingLatex: "= \\tfrac{(\\ln x - 1) + (\\ln x + 1)}{x}",
          explanation: "Both terms share denominator \\(x\\); add the numerators."
        },
        {
          stepNumber: 6,
          description: "Simplify the numerator.",
          workingLatex: "(\\ln x - 1) + (\\ln x + 1) = 2\\ln x",
          explanation: "The \\(\\pm 1\\) cancels."
        },
        {
          stepNumber: 7,
          description: "Write the result.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{2\\ln x}{x}",
          explanation: "Cleaner via difference of squares — see next step."
        },
        {
          stepNumber: 8,
          description: "Verification: difference of squares.",
          workingLatex: "y = (\\ln x)^2 - 1 \\Rightarrow \\tfrac{dy}{dx} = 2\\ln x \\cdot \\tfrac{1}{x} = \\tfrac{2\\ln x}{x}",
          explanation: "Chain rule on \\((\\ln x)^2\\) confirms the answer."
        }
      ],
      finalAnswer: "\\( \\tfrac{2\\ln x}{x} \\)"
    }
  },
  {
    id: "y2df4-064",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 64",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = x^2 \\sin x + x\\cos x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate term-by-term using linearity.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{d}{dx}(x^2 \\sin x) + \\tfrac{d}{dx}(x\\cos x)",
          explanation: "Linearity of differentiation lets us treat each product independently."
        },
        {
          stepNumber: 2,
          description: "Set up product rule for \\(x^2 \\sin x\\).",
          workingLatex: "u_1 = x^2,\\; v_1 = \\sin x,\\; u_1' = 2x,\\; v_1' = \\cos x",
          explanation: "Standard split for the first product."
        },
        {
          stepNumber: 3,
          description: "Apply.",
          workingLatex: "\\tfrac{d}{dx}(x^2 \\sin x) = 2x\\sin x + x^2 \\cos x",
          explanation: "\\(u_1' v_1 + u_1 v_1'\\)."
        },
        {
          stepNumber: 4,
          description: "Set up product rule for \\(x\\cos x\\).",
          workingLatex: "u_2 = x,\\; v_2 = \\cos x,\\; u_2' = 1,\\; v_2' = -\\sin x",
          explanation: "Note the minus sign on \\(v_2'\\)."
        },
        {
          stepNumber: 5,
          description: "Apply.",
          workingLatex: "\\tfrac{d}{dx}(x\\cos x) = \\cos x - x\\sin x",
          explanation: "\\(u_2' v_2 + u_2 v_2'\\)."
        },
        {
          stepNumber: 6,
          description: "Add the two results.",
          workingLatex: "\\tfrac{dy}{dx} = (2x\\sin x + x^2 \\cos x) + (\\cos x - x\\sin x)",
          explanation: "Combine the two product-rule outputs."
        },
        {
          stepNumber: 7,
          description: "Collect like terms.",
          workingLatex: "\\sin x\\text{ terms: }2x\\sin x - x\\sin x = x\\sin x;\\quad \\cos x\\text{ terms: }x^2\\cos x + \\cos x = (x^2+1)\\cos x",
          explanation: "Group the trig functions and factor."
        },
        {
          stepNumber: 8,
          description: "Final form.",
          workingLatex: "\\tfrac{dy}{dx} = (x^2+1)\\cos x + x\\sin x",
          explanation: "Write the simplified result."
        }
      ],
      finalAnswer: "\\( (x^2+1)\\cos x + x\\sin x \\)"
    }
  },
  {
    id: "y2df4-065",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 65",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^x \\ln x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the domain.",
          workingLatex: "x > 0",
          explanation: "\\(\\ln x\\) is defined only for positive \\(x\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the two factors.",
          workingLatex: "u = e^x,\\quad v = \\ln x",
          explanation: "Exponential and logarithm — the two big transcendentals."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = e^x",
          explanation: "Self-derivative."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Standard."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first. Never \\(u'v'\\)."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = e^x \\cdot \\ln x + e^x \\cdot \\tfrac{1}{x}",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 7,
          description: "Tidy.",
          workingLatex: "\\tfrac{dy}{dx} = e^x \\ln x + \\tfrac{e^x}{x}",
          explanation: "Both terms carry an \\(e^x\\)."
        },
        {
          stepNumber: 8,
          description: "Factor out \\(e^x\\).",
          workingLatex: "\\tfrac{dy}{dx} = e^x\\left(\\ln x + \\tfrac{1}{x}\\right)",
          explanation: "Pull out the common factor."
        }
      ],
      finalAnswer: "\\( e^x\\left(\\ln x + \\tfrac{1}{x}\\right) \\)"
    }
  },
  {
    id: "y2df4-066",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 66",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{2x}\\ln x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the domain.",
          workingLatex: "x > 0",
          explanation: "Required for \\(\\ln x\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the two factors.",
          workingLatex: "u = e^{2x},\\quad v = \\ln x",
          explanation: "Exponential with inner factor \\(2\\), and logarithm."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(u\\) (chain rule).",
          workingLatex: "u' = 2e^{2x}",
          explanation: "Inner derivative of \\(2x\\) is \\(2\\), so \\(\\tfrac{d}{dx}(e^{2x}) = 2e^{2x}\\). Don't drop the \\(2\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\tfrac{1}{x}",
          explanation: "Standard."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2e^{2x}\\cdot \\ln x + e^{2x}\\cdot \\tfrac{1}{x}",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 7,
          description: "Tidy.",
          workingLatex: "\\tfrac{dy}{dx} = 2e^{2x}\\ln x + \\tfrac{e^{2x}}{x}",
          explanation: "Combine the second product into a fraction."
        },
        {
          stepNumber: 8,
          description: "Factor out \\(e^{2x}\\).",
          workingLatex: "\\tfrac{dy}{dx} = e^{2x}\\left(2\\ln x + \\tfrac{1}{x}\\right)",
          explanation: "Pull out the common factor."
        }
      ],
      finalAnswer: "\\( e^{2x}\\left(2\\ln x + \\tfrac{1}{x}\\right) \\)"
    }
  },
  {
    id: "y2df4-067",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 67",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x+1)\\cos(2x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x+1,\\quad v = \\cos(2x)",
          explanation: "Linear polynomial and trig — \\(v\\) needs the chain rule for the \\(2x\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Derivative of \\(x+1\\)."
        },
        {
          stepNumber: 3,
          description: "Set up the chain rule for \\(v\\).",
          workingLatex: "v = \\cos(w)\\text{ with }w = 2x,\\; \\tfrac{dw}{dx} = 2",
          explanation: "Name the inner function \\(w = 2x\\); inner derivative is \\(2\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = -\\sin(w)\\cdot \\tfrac{dw}{dx} = -2\\sin(2x)",
          explanation: "Cosine flips the sign, then multiply by the inner derivative \\(2\\). Both pieces matter."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1 \\cdot \\cos(2x) + (x+1)(-2\\sin(2x))",
          explanation: "Plug in."
        },
        {
          stepNumber: 7,
          description: "Distribute the minus.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos(2x) - 2(x+1)\\sin(2x)",
          explanation: "Move the minus to the front of the second term."
        },
        {
          stepNumber: 8,
          description: "Final form.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos 2x - 2(x+1)\\sin 2x",
          explanation: "Leave \\((x+1)\\) bracketed — no useful further simplification."
        }
      ],
      finalAnswer: "\\( \\cos 2x - 2(x+1)\\sin 2x \\)"
    }
  },
  {
    id: "y2df4-068",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 68",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (2x-3)\\sin(4x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = 2x-3,\\quad v = \\sin(4x)",
          explanation: "Linear polynomial and trig with inner factor \\(4\\)."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 2",
          explanation: "Derivative of \\(2x-3\\)."
        },
        {
          stepNumber: 3,
          description: "Set up the chain rule for \\(v\\).",
          workingLatex: "v = \\sin(w)\\text{ with }w = 4x,\\; \\tfrac{dw}{dx} = 4",
          explanation: "Inner derivative is \\(4\\) — the easy-to-forget chain factor."
        },
        {
          stepNumber: 4,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = \\cos(w)\\cdot \\tfrac{dw}{dx} = 4\\cos(4x)",
          explanation: "\\(\\cos(4x) \\cdot 4\\)."
        },
        {
          stepNumber: 5,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 6,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 2 \\cdot \\sin(4x) + (2x-3)\\cdot 4\\cos(4x)",
          explanation: "Plug each piece in."
        },
        {
          stepNumber: 7,
          description: "Tidy.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\sin(4x) + 4(2x-3)\\cos(4x)",
          explanation: "Move the \\(4\\) to the front of the second term."
        },
        {
          stepNumber: 8,
          description: "Final form.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\sin 4x + 4(2x-3)\\cos 4x",
          explanation: "Leave \\((2x-3)\\) bracketed — no useful further simplification."
        }
      ],
      finalAnswer: "\\( 2\\sin 4x + 4(2x-3)\\cos 4x \\)"
    }
  },
  {
    id: "y2df4-069",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 69",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = e^x \\sin(2x) \\) at \\( x = 0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = e^x,\\quad v = \\sin(2x)",
          explanation: "Exponential and trig — \\(v\\) needs the chain rule."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = e^x",
          explanation: "Self-derivative."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\) (chain rule).",
          workingLatex: "v' = 2\\cos(2x)",
          explanation: "Inner derivative of \\(2x\\) is \\(2\\), so \\(\\tfrac{d}{dx}\\sin(2x) = 2\\cos(2x)\\)."
        },
        {
          stepNumber: 4,
          description: "Apply the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv' = e^x\\sin(2x) + 2e^x\\cos(2x)",
          explanation: "Combine \\(u'v + uv'\\)."
        },
        {
          stepNumber: 5,
          description: "Substitute \\(x = 0\\).",
          workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=0} = e^0\\sin 0 + 2e^0\\cos 0",
          explanation: "Plug the given value into the derivative."
        },
        {
          stepNumber: 6,
          description: "Evaluate.",
          workingLatex: "= 1\\cdot 0 + 2\\cdot 1\\cdot 1 = 2",
          explanation: "\\(\\sin 0 = 0\\), \\(\\cos 0 = 1\\), \\(e^0 = 1\\). The first term vanishes."
        }
      ],
      finalAnswer: "\\( 2 \\)"
    }
  },
  {
    id: "y2df4-070",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 70",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x+1)(x^2+2) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two factors.",
          workingLatex: "u = x+1,\\quad v = x^2+2",
          explanation: "Linear and quadratic."
        },
        {
          stepNumber: 2,
          description: "Differentiate \\(u\\).",
          workingLatex: "u' = 1",
          explanation: "Derivative of \\(x+1\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate \\(v\\).",
          workingLatex: "v' = 2x",
          explanation: "Power rule; constant drops."
        },
        {
          stepNumber: 4,
          description: "State the product rule.",
          workingLatex: "\\tfrac{dy}{dx} = u'v + uv'",
          explanation: "Symbolic first."
        },
        {
          stepNumber: 5,
          description: "Substitute.",
          workingLatex: "\\tfrac{dy}{dx} = 1(x^2+2) + (x+1)(2x)",
          explanation: "Plug in."
        },
        {
          stepNumber: 6,
          description: "Expand and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = x^2 + 2 + 2x^2 + 2x = 3x^2 + 2x + 2",
          explanation: "Collect like terms."
        }
      ],
      finalAnswer: "\\( 3x^2 + 2x + 2 \\)"
    }
  },
  {
    id: "y2df4-071",
    topicRef: "y2df4",
    topicTitle: "The Product Rule 71",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write down the product rule for differentiating \\( y = f(x)\\,g(x) \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product rule", "theory"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Name the two factors.",
          workingLatex: "u = f(x),\\quad v = g(x)",
          explanation: "Use \\(u\\) and \\(v\\) as standard placeholders for the two factors being multiplied."
        },
        {
          stepNumber: 2,
          description: "Write the derivatives.",
          workingLatex: "u' = f'(x),\\quad v' = g'(x)",
          explanation: "These are the derivatives we will combine via the rule."
        },
        {
          stepNumber: 3,
          description: "Quote the product rule.",
          workingLatex: "(uv)' = u'v + uv'",
          explanation: "Differentiate the first factor times the second, plus the first factor times the derivative of the second. NOT \\(u'v'\\) — that's the canonical slip."
        },
        {
          stepNumber: 4,
          description: "Re-express in \\(f, g\\) notation.",
          workingLatex: "\\tfrac{dy}{dx} = f'(x)\\,g(x) + f(x)\\,g'(x)",
          explanation: "Substituting back gives the standard textbook form. Either notation is acceptable in an exam, but this matches the question's variables."
        },
        {
          stepNumber: 5,
          description: "Sanity check on a trivial example.",
          workingLatex: "f(x) = g(x) = x \\Rightarrow (x \\cdot x)' = 1\\cdot x + x \\cdot 1 = 2x",
          explanation: "Matches the known result \\(\\tfrac{d}{dx}(x^2) = 2x\\). Confirms the formula structure."
        },
        {
          stepNumber: 6,
          description: "State the final formula.",
          workingLatex: "\\tfrac{dy}{dx} = f'(x)g(x) + f(x)g'(x)",
          explanation: "This is the standard product rule, ready to apply to any pair of factors."
        }
      ],
      finalAnswer: "\\( \\tfrac{dy}{dx} = f'(x)g(x) + f(x)g'(x) \\)"
    }
  },
];
