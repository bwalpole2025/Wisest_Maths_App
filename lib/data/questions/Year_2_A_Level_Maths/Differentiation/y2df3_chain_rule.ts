import { Question } from "@/lib/types";

/**
 * Year 2 — Differentiation § 9.3 The Chain Rule
 * Ref: y2df3
 * 71 questions. Chain rule d/dx f(g(x)) = f'(g(x)) · g'(x) applied to
 *   • (polynomial)^n
 *   • e^(f(x))
 *   • ln(f(x))
 *   • sin(f(x)), cos(f(x))
 *   • √(f(x))
 *   • (trig)^n
 * plus gradient and tangent applications.
 */
export const questions: Question[] = [
  {
    id: "y2df3-001",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 01",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Use the chain rule to differentiate \\( y = (3x^2 + 1)^4 \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 3x^2 + 1",
          explanation: "The inner function is whatever sits inside the brackets being raised to the power. Here \\(3x^2+1\\) is enclosed, and the \\((\\cdot)^4\\) acts on it."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^4",
          explanation: "With \\(u\\) chosen, the outer function is a simple fourth power. Rewriting \\(y\\) in terms of \\(u\\) makes the chain rule mechanical."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 6x",
          explanation: "Differentiate term by term: \\(3x^2 \\to 6x\\) and the constant \\(1\\) vanishes. This factor of \\(6x\\) is the inner derivative students often forget to multiply in."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 4u^3",
          explanation: "Use the power rule on \\(u^4\\): multiply by the exponent and reduce it by one. Be careful — it is \\(4u^3\\), not \\(4u^4\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 4u^3 \\cdot 6x",
          explanation: "Write the product before substituting back, so it is clear which factor came from where."
        },
        {
          stepNumber: 6,
          description: "Substitute and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 4(3x^2+1)^3 \\cdot 6x = 24x(3x^2+1)^3",
          explanation: "Put \\(u = 3x^2+1\\) back in and combine the constants \\(4 \\cdot 6 = 24\\). Convention puts the polynomial factor at the front."
        }
      ],
      finalAnswer: "\\( 24x(3x^2+1)^3 \\)"
    }
  },
  // ── (polynomial)^n ────
  {
    id: "y2df3-002",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x+1)^5 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x+1",
          explanation: "The inner function is whatever sits inside the bracket being raised to a power. Here \\(x+1\\) is enclosed, and the \\((\\cdot)^5\\) acts on it."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^5",
          explanation: "With \\(u\\) chosen, the outer function is a clean fifth power. Rewriting \\(y\\) in terms of \\(u\\) makes the chain rule mechanical."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 1",
          explanation: "Differentiate term by term: \\(x \\to 1\\) and the constant \\(1\\) vanishes. Trivial here, but writing it explicitly keeps every chain-rule factor visible."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 5u^4",
          explanation: "Use the power rule on \\(u^5\\): multiply by the exponent and reduce it by one. It is \\(5u^4\\), not \\(5u^5\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 5u^4 \\cdot 1",
          explanation: "Write the product before substituting back, so it is clear which factor came from where. The inner derivative \\(1\\) leaves the outer derivative unchanged."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 5(x+1)^4",
          explanation: "Put \\(u = x+1\\) back in. Because the inner derivative is \\(1\\), no leading constant appears in front."
        }
      ],
      finalAnswer: "\\( 5(x+1)^4 \\)"
    }
  },
  {
    id: "y2df3-003",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x-2)^4 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x-2",
          explanation: "Inside the bracket sits \\(x-2\\), and the fourth power acts on it. That bracket is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^4",
          explanation: "With \\(u\\) named, rewriting \\(y\\) in terms of \\(u\\) makes the chain rule mechanical."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 1",
          explanation: "The constant \\(-2\\) vanishes and \\(x\\) differentiates to \\(1\\). Trivial, but writing it out preserves the chain-rule structure."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 4u^3",
          explanation: "Power rule on \\(u^4\\): multiply by the exponent and drop it by one."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 4u^3 \\cdot 1",
          explanation: "Write the product before substituting back. The inner derivative \\(1\\) leaves the outer derivative unchanged."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 4(x-2)^3",
          explanation: "Put \\(u = x-2\\) back in. No leading constant appears because the inner derivative is \\(1\\)."
        }
      ],
      finalAnswer: "\\( 4(x-2)^3 \\)"
    }
  },
  {
    id: "y2df3-004",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = (2x+1)^3 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 2x+1",
          explanation: "Pick \\(u = 2x+1\\) because it sits inside the cube. Naming it explicitly keeps the chain rule clear."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^3",
          explanation: "With \\(u\\) chosen, the outer is a clean cube. Rewriting \\(y\\) in terms of \\(u\\) makes the chain rule mechanical."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2",
          explanation: "Coefficient of \\(x\\) is \\(2\\); constant \\(+1\\) vanishes. This factor of \\(2\\) is what produces the leading constant in the answer — the most common slip is to drop it."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 3u^2",
          explanation: "Power rule on \\(u^3\\): multiply by the exponent and drop it by one."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 3u^2 \\cdot 2",
          explanation: "Write the product before substituting back, so it is clear which factor came from where."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 3u^2 \\cdot 2 = 6(2x+1)^2",
          explanation: "Combine \\(3 \\cdot 2 = 6\\) and put \\(u = 2x+1\\) back in."
        }
      ],
      finalAnswer: "\\( 6(2x+1)^2 \\)"
    }
  },
  {
    id: "y2df3-005",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = (3x-2)^5 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 3x-2",
          explanation: "The bracket \\(3x-2\\) sits inside the fifth power, so it is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^5",
          explanation: "With \\(u\\) named, the outer is a clean fifth power."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3",
          explanation: "Coefficient of \\(x\\) is \\(3\\); the constant \\(-2\\) vanishes. This factor produces the leading constant in the final answer."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 5u^4",
          explanation: "Power rule on \\(u^5\\): multiply by \\(5\\) and reduce the exponent by one."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 5u^4 \\cdot 3",
          explanation: "Write the product before substituting back, so both factors are visible."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 15(3x-2)^4",
          explanation: "Combine \\(5 \\cdot 3 = 15\\) and put \\(u = 3x-2\\) back in."
        }
      ],
      finalAnswer: "\\( 15(3x-2)^4 \\)"
    }
  },
  {
    id: "y2df3-006",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = (4x+5)^6 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 4x+5",
          explanation: "The linear bracket inside the sixth power is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^6",
          explanation: "With \\(u\\) named, the outer function is the sixth power."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 4",
          explanation: "Coefficient of \\(x\\) is \\(4\\); the constant \\(+5\\) vanishes on differentiation."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 6u^5",
          explanation: "Power rule on \\(u^6\\): multiply by \\(6\\) and drop the exponent by one."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 6u^5 \\cdot 4",
          explanation: "Write the product before substituting back."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 24(4x+5)^5",
          explanation: "Combine constants \\(6 \\cdot 4 = 24\\) and substitute \\(u = 4x+5\\)."
        }
      ],
      finalAnswer: "\\( 24(4x+5)^5 \\)"
    }
  },
  {
    id: "y2df3-007",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 07",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = (5-2x)^4 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 5-2x",
          explanation: "The bracket \\(5-2x\\) is the inner function. The sign of the \\(x\\)-coefficient will carry through to the answer."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^4",
          explanation: "With \\(u\\) named, the outer is the fourth power."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -2",
          explanation: "Watch the sign: \\(\\tfrac{d}{dx}(5-2x) = -2\\). The constant \\(5\\) vanishes. Forgetting the minus is the most common slip here."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 4u^3",
          explanation: "Power rule on \\(u^4\\): multiply by the exponent and reduce it by one."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 4u^3 \\cdot (-2)",
          explanation: "Write the product before substituting. Keep the bracket around \\(-2\\) so the sign is unambiguous."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = -8(5-2x)^3",
          explanation: "Multiply \\(4 \\cdot (-2) = -8\\) and substitute \\(u = 5-2x\\)."
        }
      ],
      finalAnswer: "\\( -8(5-2x)^3 \\)"
    }
  },
  {
    id: "y2df3-008",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^2+1)^3 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2+1",
          explanation: "Inside the bracket sits \\(x^2+1\\), which is being cubed."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^3",
          explanation: "With \\(u\\) named, the outer is a clean cube."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Use the power rule on \\(x^2\\); the constant \\(1\\) drops out."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 3u^2",
          explanation: "Apply the power rule to \\(u^3\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = 3u^2 \\cdot 2x",
          explanation: "Multiply outer derivative by inner derivative. Writing the product before substituting keeps the structure visible."
        },
        {
          stepNumber: 6,
          description: "Substitute and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 6x(x^2+1)^2",
          explanation: "Combine \\(3 \\cdot 2 = 6\\), put \\(u\\) back, and arrange with the polynomial factor at the front."
        }
      ],
      finalAnswer: "\\( 6x(x^2+1)^2 \\)"
    }
  },
  {
    id: "y2df3-009",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^2-1)^4 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2-1",
          explanation: "Whatever is inside the bracket being powered is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^4",
          explanation: "The outer is the fourth power applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\); constant disappears."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 4u^3",
          explanation: "Power rule on \\(u^4\\) gives \\(4u^3\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = 4u^3 \\cdot 2x",
          explanation: "Multiply outer and inner derivatives."
        },
        {
          stepNumber: 6,
          description: "Substitute and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 8x(x^2-1)^3",
          explanation: "Combine \\(4 \\cdot 2 = 8\\) and put \\(u = x^2-1\\) back in."
        }
      ],
      finalAnswer: "\\( 8x(x^2-1)^3 \\)"
    }
  },
  {
    id: "y2df3-010",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 10",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^3-2x)^5 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = (x^3-2x)^5",
          explanation: "The function is a fifth power of a cubic — a clear composition. The chain rule is the standard tool here."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = x^3 - 2x",
          explanation: "The cubic bracket is the inner function. It is being raised to the fifth power."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^5",
          explanation: "With \\(u\\) named, the outer function is the fifth power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3x^2 - 2",
          explanation: "Differentiate term by term: \\(x^3 \\to 3x^2\\) and \\(-2x \\to -2\\). The inner derivative is a polynomial this time, not a constant."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 5u^4",
          explanation: "Power rule on \\(u^5\\): multiply by \\(5\\) and drop the exponent by one."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 5u^4 \\cdot (3x^2 - 2)",
          explanation: "Multiply outer by inner derivative. Keep the bracket around \\(3x^2-2\\) so the multiplication is unambiguous."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 5(x^3-2x)^4(3x^2 - 2)",
          explanation: "Put \\(u = x^3-2x\\) back inside the fourth power."
        },
        {
          stepNumber: 8,
          description: "Tidy the order of factors.",
          workingLatex: "\\tfrac{dy}{dx} = 5(3x^2-2)(x^3-2x)^4",
          explanation: "Convention puts the polynomial factor either before or after the powered bracket; both are equivalent."
        }
      ],
      finalAnswer: "\\( 5(3x^2-2)(x^3-2x)^4 \\)"
    }
  },
  {
    id: "y2df3-011",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 11",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (4-x^2)^6 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = (4-x^2)^6",
          explanation: "The function is a sixth power of a quadratic — a clear composition, so the chain rule applies."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = 4 - x^2",
          explanation: "The bracket being raised to the sixth power is the inner function. The constant \\(4\\) will vanish on differentiation."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^6",
          explanation: "With \\(u\\) named, the outer is the sixth power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -2x",
          explanation: "Watch the sign: \\(-x^2\\) differentiates to \\(-2x\\). This minus carries through to the final answer."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 6u^5",
          explanation: "Power rule on \\(u^6\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 6u^5 \\cdot (-2x)",
          explanation: "Write the product first, keeping the bracket around \\(-2x\\)."
        },
        {
          stepNumber: 7,
          description: "Combine the constant factors.",
          workingLatex: "\\tfrac{dy}{dx} = -12x \\cdot u^5",
          explanation: "Multiply \\(6 \\cdot (-2) = -12\\); pull the \\(x\\) along with the constants."
        },
        {
          stepNumber: 8,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = -12x(4-x^2)^5",
          explanation: "Replace \\(u\\) with \\(4-x^2\\) in the fifth power."
        }
      ],
      finalAnswer: "\\( -12x(4-x^2)^5 \\)"
    }
  },
  {
    id: "y2df3-012",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 12",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (2x^2+3x)^4 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = (2x^2+3x)^4",
          explanation: "The function is a fourth power of a quadratic — a composition, so the chain rule applies."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = 2x^2 + 3x",
          explanation: "Inside the bracket sits a quadratic; that is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^4",
          explanation: "With \\(u\\) named, the outer is the fourth power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 4x + 3",
          explanation: "Differentiate term by term: \\(2x^2 \\to 4x\\) and \\(3x \\to 3\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 4u^3",
          explanation: "Power rule on \\(u^4\\): multiply by \\(4\\) and drop the exponent by one."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 4u^3 \\cdot (4x+3)",
          explanation: "Multiply outer by inner derivative. Keep the bracket around \\(4x+3\\) so the multiplication is unambiguous."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 4(2x^2+3x)^3(4x+3)",
          explanation: "Replace \\(u\\) with \\(2x^2+3x\\). The factor \\(4x+3\\) stays as the inner-derivative factor."
        },
        {
          stepNumber: 8,
          description: "Tidy the order of factors.",
          workingLatex: "\\tfrac{dy}{dx} = 4(4x+3)(2x^2+3x)^3",
          explanation: "Convention often puts the polynomial inner-derivative factor in front of the powered bracket; both orderings are equivalent."
        }
      ],
      finalAnswer: "\\( 4(4x+3)(2x^2+3x)^3 \\)"
    }
  },
  {
    id: "y2df3-013",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 13",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^3+x)^2 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^3 + x",
          explanation: "The cubic bracket sitting inside the square is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^2",
          explanation: "With \\(u\\) named, the outer function is a clean square."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3x^2 + 1",
          explanation: "Term by term: \\(x^3 \\to 3x^2\\) and \\(x \\to 1\\). The inner derivative is a polynomial this time, not a constant."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 2u",
          explanation: "Power rule on \\(u^2\\): multiply by \\(2\\) and drop the exponent to \\(1\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 2u \\cdot (3x^2+1)",
          explanation: "Multiply outer by inner derivative. Keep the bracket around \\(3x^2+1\\) so the multiplication is unambiguous."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2(x^3+x)(3x^2+1)",
          explanation: "Replace \\(u = x^3+x\\). Convention puts the polynomial factor either before or after the powered bracket; both are fine."
        }
      ],
      finalAnswer: "\\( 2(3x^2+1)(x^3+x) \\)"
    }
  },
  {
    id: "y2df3-014",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 14",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (x^2+3x+1)^5 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = (x^2+3x+1)^5",
          explanation: "The function is a fifth power of a quadratic — a composition. Expanding the bracket would be brutal; chain rule is the right tool."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = x^2 + 3x + 1",
          explanation: "The quadratic inside the bracket is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^5",
          explanation: "With \\(u\\) named, the outer is the fifth power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x + 3",
          explanation: "Differentiate term by term: \\(x^2 \\to 2x\\), \\(3x \\to 3\\), constant \\(1\\) vanishes."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 5u^4",
          explanation: "Power rule on \\(u^5\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 5u^4 \\cdot (2x+3)",
          explanation: "Multiply outer by inner derivative, keeping the bracket around \\(2x+3\\)."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 5(x^2+3x+1)^4(2x+3)",
          explanation: "Replace \\(u\\) with \\(x^2+3x+1\\) in the fourth power."
        },
        {
          stepNumber: 8,
          description: "Tidy the order of factors.",
          workingLatex: "\\tfrac{dy}{dx} = 5(2x+3)(x^2+3x+1)^4",
          explanation: "Convention puts the inner-derivative factor in front of the powered bracket; both orderings are equivalent."
        }
      ],
      finalAnswer: "\\( 5(2x+3)(x^2+3x+1)^4 \\)"
    }
  },
  // ── Reciprocals (negative exponents) ────
  {
    id: "y2df3-015",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1}{x^2+1} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "reciprocal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a negative power.",
          workingLatex: "y = (x^2+1)^{-1}",
          explanation: "Rewriting the reciprocal as a power of \\(-1\\) lets us apply the chain rule with the power rule."
        },
        {
          stepNumber: 2,
          description: "Identify inner and outer functions.",
          workingLatex: "u = x^2+1,\\quad y = u^{-1}",
          explanation: "The denominator is the inner function; the outer is \\(u^{-1}\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Standard power rule on \\(x^2\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = -u^{-2}",
          explanation: "Power rule: \\(u^{-1} \\to -1 \\cdot u^{-2}\\). The minus sign comes from the exponent dropping by one."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = -u^{-2} \\cdot 2x = -\\tfrac{2x}{u^2}",
          explanation: "Multiply derivatives. The negative exponent moves the bracket to the denominator."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = -\\tfrac{2x}{(x^2+1)^2}",
          explanation: "Replace \\(u\\) with \\(x^2+1\\)."
        }
      ],
      finalAnswer: "\\( -\\tfrac{2x}{(x^2+1)^2} \\)"
    }
  },
  {
    id: "y2df3-016",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1}{(2x-1)^2} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "reciprocal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a negative power.",
          workingLatex: "y = (2x-1)^{-2}",
          explanation: "Pulling the bracket up with a negative exponent makes the chain rule routine — the power rule then applies directly."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = 2x-1",
          explanation: "The linear bracket is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{-2}",
          explanation: "With \\(u\\) named, the outer function is \\(u\\) to the negative second power."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2",
          explanation: "Coefficient of \\(x\\) is \\(2\\); the constant \\(-1\\) vanishes."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = -2u^{-3}",
          explanation: "Power rule: drop the exponent by one to get \\(-3\\), and the original \\(-2\\) is the leading coefficient."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = -2u^{-3} \\cdot 2 = -4u^{-3}",
          explanation: "Combine the constants \\(-2 \\cdot 2 = -4\\)."
        },
        {
          stepNumber: 7,
          description: "Substitute back and write as a fraction.",
          workingLatex: "\\tfrac{dy}{dx} = -\\tfrac{4}{(2x-1)^3}",
          explanation: "Replace \\(u\\) with \\(2x-1\\); the negative-power bracket moves down to the denominator."
        }
      ],
      finalAnswer: "\\( -\\tfrac{4}{(2x-1)^3} \\)"
    }
  },
  {
    id: "y2df3-017",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 17",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1}{(3x+1)^3} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "reciprocal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a negative power.",
          workingLatex: "y = (3x+1)^{-3}",
          explanation: "Reciprocal becomes a negative-exponent power; the power rule then applies directly."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = 3x+1",
          explanation: "The linear bracket is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{-3}",
          explanation: "With \\(u\\) named, the outer is \\(u\\) to the power \\(-3\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3",
          explanation: "Coefficient of \\(x\\) is \\(3\\); the constant \\(+1\\) vanishes."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = -3u^{-4}",
          explanation: "Power rule: exponent drops from \\(-3\\) to \\(-4\\), and the original \\(-3\\) sits in front."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = -3u^{-4} \\cdot 3 = -9u^{-4}",
          explanation: "Multiply constants \\(-3 \\cdot 3 = -9\\)."
        },
        {
          stepNumber: 7,
          description: "Substitute back and write as a fraction.",
          workingLatex: "\\tfrac{dy}{dx} = -\\tfrac{9}{(3x+1)^4}",
          explanation: "Move the negative-power bracket down to the denominator and replace \\(u\\)."
        }
      ],
      finalAnswer: "\\( -\\tfrac{9}{(3x+1)^4} \\)"
    }
  },
  // ── √ (half powers) ────
  {
    id: "y2df3-018",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{x+1} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule", "root"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite the root as a half power.",
          workingLatex: "y = (x+1)^{1/2}",
          explanation: "A square root is a power of one-half, which lets us use the power rule directly."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = x+1",
          explanation: "The expression under the root is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer function is the half power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 1",
          explanation: "Coefficient of \\(x\\) is \\(1\\); the constant \\(+1\\) vanishes."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Power rule on \\(u^{1/2}\\): multiply by \\(\\tfrac{1}{2}\\) and drop the exponent by one to give \\(u^{-1/2}\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot 1 = \\tfrac{1}{2u^{1/2}}",
          explanation: "Multiply derivatives. The negative half-power moves \\(u^{1/2}\\) to the denominator."
        },
        {
          stepNumber: 7,
          description: "Substitute back as a root.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{2\\sqrt{x+1}}",
          explanation: "Replace \\(u^{1/2}\\) with \\(\\sqrt{x+1}\\). The full inner expression sits under the root — not just \\(x\\)."
        }
      ],
      finalAnswer: "\\( \\tfrac{1}{2\\sqrt{x+1}} \\)"
    }
  },
  {
    id: "y2df3-019",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 19",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{2x+3} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a half power.",
          workingLatex: "y = (2x+3)^{1/2}",
          explanation: "Convert the root so the power rule applies directly."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = 2x+3",
          explanation: "The expression under the root is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer is the half power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2",
          explanation: "Coefficient of \\(x\\) is \\(2\\); the constant \\(+3\\) vanishes."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Power rule on \\(u^{1/2}\\): multiply by \\(\\tfrac{1}{2}\\) and drop the exponent by one."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot 2 = u^{-1/2}",
          explanation: "The \\(\\tfrac{1}{2}\\) and \\(2\\) cancel exactly, leaving \\(u^{-1/2}\\)."
        },
        {
          stepNumber: 7,
          description: "Substitute back as a root.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{\\sqrt{2x+3}}",
          explanation: "Move the negative-half-power expression to the denominator and write it as a root, with the full inner expression underneath."
        }
      ],
      finalAnswer: "\\( \\tfrac{1}{\\sqrt{2x+3}} \\)"
    }
  },
  {
    id: "y2df3-020",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 20",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{x^2+1} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a half power.",
          workingLatex: "y = (x^2+1)^{1/2}",
          explanation: "Square root becomes a power of one-half so the power rule applies directly."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = x^2+1",
          explanation: "The quadratic expression under the root is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer is the half-power."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\); the constant \\(1\\) drops out."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Power rule on \\(u^{1/2}\\): multiply by \\(\\tfrac{1}{2}\\) and drop the exponent by one."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot 2x = \\tfrac{2x}{2u^{1/2}}",
          explanation: "Multiply derivatives. Keep both factors visible so the cancellation is clear."
        },
        {
          stepNumber: 7,
          description: "Simplify and substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{x}{\\sqrt{x^2+1}}",
          explanation: "Cancel the \\(2\\) and put \\(u = x^2+1\\) under the root. The under-root expression is the original inner — not just \\(x\\)."
        }
      ],
      finalAnswer: "\\( \\tfrac{x}{\\sqrt{x^2+1}} \\)"
    }
  },
  {
    id: "y2df3-021",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 21",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{4-x^2} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a half power.",
          workingLatex: "y = (4-x^2)^{1/2}",
          explanation: "Convert the root so the power rule applies directly."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = 4 - x^2",
          explanation: "The expression under the root is the inner function. The leading constant \\(4\\) will vanish on differentiation."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer is the half-power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -2x",
          explanation: "Watch the sign: \\(-x^2 \\to -2x\\). This negative carries through to the final answer."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Power rule on \\(u^{1/2}\\): multiply by \\(\\tfrac{1}{2}\\) and drop the exponent by one."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot (-2x) = \\tfrac{-2x}{2u^{1/2}}",
          explanation: "Multiply derivatives, keeping the bracket around \\(-2x\\) so the sign stays clear."
        },
        {
          stepNumber: 7,
          description: "Simplify and substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = -\\tfrac{x}{\\sqrt{4-x^2}}",
          explanation: "Cancel the \\(2\\) and put \\(u = 4-x^2\\) under the root."
        }
      ],
      finalAnswer: "\\( -\\tfrac{x}{\\sqrt{4-x^2}} \\)"
    }
  },
  {
    id: "y2df3-022",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 22",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{9-x^2} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a half power.",
          workingLatex: "y = (9-x^2)^{1/2}",
          explanation: "Convert the root so the power rule applies directly."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = 9 - x^2",
          explanation: "The bracket under the root is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer is the half-power."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -2x",
          explanation: "The \\(9\\) is a constant and drops out; \\(-x^2\\) differentiates to \\(-2x\\). Keep that minus sign."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Power rule on the half-power."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot (-2x) = \\tfrac{-2x}{2u^{1/2}}",
          explanation: "Multiply derivatives, keeping both factors visible so the cancellation is clear."
        },
        {
          stepNumber: 7,
          description: "Simplify and substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = -\\tfrac{x}{\\sqrt{9-x^2}}",
          explanation: "Cancel the \\(2\\) and put \\(u = 9-x^2\\) under the root."
        }
      ],
      finalAnswer: "\\( -\\tfrac{x}{\\sqrt{9-x^2}} \\)"
    }
  },
  {
    id: "y2df3-023",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{x^3-1} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = \\sqrt{x^3-1}",
          explanation: "A square root of a cubic is a composition: \\(\\sqrt{\\cdot}\\) wrapped around \\(x^3-1\\). Chain rule is the tool."
        },
        {
          stepNumber: 2,
          description: "Rewrite as a half power.",
          workingLatex: "y = (x^3-1)^{1/2}",
          explanation: "Convert the root so the power rule applies directly."
        },
        {
          stepNumber: 3,
          description: "Identify the inner function.",
          workingLatex: "u = x^3 - 1",
          explanation: "The under-root expression is the inner function."
        },
        {
          stepNumber: 4,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer is the half-power applied to \\(u\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3x^2",
          explanation: "Power rule on \\(x^3\\) gives \\(3x^2\\); the constant \\(-1\\) vanishes."
        },
        {
          stepNumber: 6,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Power rule on the half power."
        },
        {
          stepNumber: 7,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot 3x^2 = \\tfrac{3x^2}{2u^{1/2}}",
          explanation: "Multiply derivatives. No cancellation this time because the inner derivative does not contain the factor \\(2\\)."
        },
        {
          stepNumber: 8,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{3x^2}{2\\sqrt{x^3-1}}",
          explanation: "Replace \\(u^{1/2}\\) with \\(\\sqrt{x^3-1}\\); the full inner expression sits under the root."
        }
      ],
      finalAnswer: "\\( \\tfrac{3x^2}{2\\sqrt{x^3-1}} \\)"
    }
  },
  // ── e^(f(x)) ────
  {
    id: "y2df3-024",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 24",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{x^2} \\).",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "exp"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2",
          explanation: "Whatever sits in the exponent of \\(e\\) is the inner function. Here it is \\(x^2\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer function is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\) gives \\(2x\\). This is the leading factor in the final answer."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "Recall \\(\\tfrac{d}{du}e^u = e^u\\) — the exponential is its own derivative."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot 2x",
          explanation: "Write the product before substituting back, so both factors are visible."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2x e^{x^2}",
          explanation: "Put \\(u = x^2\\) back inside the exponent; the \\(2x\\) sits at the front."
        }
      ],
      finalAnswer: "\\( 2x e^{x^2} \\)"
    }
  },
  {
    id: "y2df3-025",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 25",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{3x+1} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule", "exp"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 3x+1",
          explanation: "Whatever sits in the exponent of \\(e\\) is the inner function. Here it is the linear expression \\(3x+1\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer function is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3",
          explanation: "Coefficient of \\(x\\) is \\(3\\); the constant \\(+1\\) vanishes. This factor of \\(3\\) is the leading constant in the answer — most common slip is to drop it."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "Recall \\(\\tfrac{d}{du}e^u = e^u\\): the exponential is its own derivative."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot 3",
          explanation: "Write the product before substituting back, so both factors are visible."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 3e^{3x+1}",
          explanation: "Replace \\(u\\) with \\(3x+1\\) inside the exponent; the leading \\(3\\) sits in front."
        }
      ],
      finalAnswer: "\\( 3e^{3x+1} \\)"
    }
  },
  {
    id: "y2df3-026",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 26",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{-x^2} \\).",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = -x^2",
          explanation: "The exponent — including its minus sign — is the inner function. Keep the sign attached to \\(u\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer function is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -2x",
          explanation: "Watch the sign: \\(-x^2\\) differentiates to \\(-2x\\). The minus is carried into the final answer."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "Exponential is its own derivative."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot (-2x)",
          explanation: "Write the product before substituting back, keeping the bracket around \\(-2x\\)."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = -2x e^{-x^2}",
          explanation: "Replace \\(u\\) with \\(-x^2\\) inside the exponent."
        }
      ],
      finalAnswer: "\\( -2x e^{-x^2} \\)"
    }
  },
  {
    id: "y2df3-027",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 27",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{x^2+2x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2 + 2x",
          explanation: "The quadratic in the exponent is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer function is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x + 2",
          explanation: "Differentiate term by term: \\(x^2 \\to 2x\\) and \\(2x \\to 2\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "Exponential is its own derivative."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot (2x+2) = (2x+2)e^u",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 6,
          description: "Substitute back and factor.",
          workingLatex: "\\tfrac{dy}{dx} = 2(x+1)e^{x^2+2x}",
          explanation: "Replace \\(u\\) with \\(x^2+2x\\); pull out the common factor of \\(2\\) from \\(2x+2\\) for a tidier form."
        }
      ],
      finalAnswer: "\\( 2(x+1)e^{x^2+2x} \\)"
    }
  },
  {
    id: "y2df3-028",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 28",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{x^3} \\).",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^3",
          explanation: "Whatever sits in the exponent of \\(e\\) is the inner function. Here it is the cube \\(x^3\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer function is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3x^2",
          explanation: "Power rule on \\(x^3\\) gives \\(3x^2\\). This is the leading factor in the final answer."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "Exponential is its own derivative."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot 3x^2",
          explanation: "Write the product before substituting back."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2 e^{x^3}",
          explanation: "Replace \\(u\\) with \\(x^3\\) inside the exponent; the \\(3x^2\\) factor sits in front."
        }
      ],
      finalAnswer: "\\( 3x^2 e^{x^3} \\)"
    }
  },
  {
    id: "y2df3-029",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 29",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{2x-5} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 2x-5",
          explanation: "The linear expression sitting in the exponent is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer function is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2",
          explanation: "Coefficient of \\(x\\) is \\(2\\); the constant \\(-5\\) vanishes. This factor of \\(2\\) becomes the leading constant in the answer."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "The exponential is its own derivative."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot 2",
          explanation: "Write the product before substituting back."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2e^{2x-5}",
          explanation: "Replace \\(u\\) with \\(2x-5\\); the \\(2\\) stays at the front."
        }
      ],
      finalAnswer: "\\( 2e^{2x-5} \\)"
    }
  },
  {
    id: "y2df3-030",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{\\sqrt{x}} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = e^{\\sqrt{x}}",
          explanation: "The exponent of \\(e\\) is itself a non-trivial function of \\(x\\), namely \\(\\sqrt{x}\\). The chain rule is needed."
        },
        {
          stepNumber: 2,
          description: "Rewrite the inner expression.",
          workingLatex: "\\sqrt{x} = x^{1/2}",
          explanation: "Converting the root to a half-power makes the inner derivative cleaner to compute."
        },
        {
          stepNumber: 3,
          description: "Identify the inner function.",
          workingLatex: "u = x^{1/2}",
          explanation: "The exponent is the inner function."
        },
        {
          stepNumber: 4,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = \\tfrac{1}{2}x^{-1/2} = \\tfrac{1}{2\\sqrt{x}}",
          explanation: "Power rule on \\(x^{1/2}\\): multiply by \\(\\tfrac{1}{2}\\) and drop the exponent by one to give \\(-1/2\\)."
        },
        {
          stepNumber: 6,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "Exponential is its own derivative."
        },
        {
          stepNumber: 7,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot \\tfrac{1}{2\\sqrt{x}}",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 8,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}",
          explanation: "Replace \\(u\\) with \\(\\sqrt{x}\\) in the exponent; the \\(2\\sqrt{x}\\) sits in the denominator."
        }
      ],
      finalAnswer: "\\( \\tfrac{e^{\\sqrt{x}}}{2\\sqrt{x}} \\)"
    }
  },
  {
    id: "y2df3-031",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 31",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{\\sin x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = e^{\\sin x}",
          explanation: "The exponent of \\(e\\) is itself a function of \\(x\\), namely \\(\\sin x\\). Chain rule is required."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = \\sin x",
          explanation: "The exponent \\(\\sin x\\) is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = \\cos x",
          explanation: "Standard derivative: \\(\\sin x \\to \\cos x\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "Exponential is its own derivative."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot \\cos x",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\cos x \\cdot e^{\\sin x}",
          explanation: "Replace \\(u\\) with \\(\\sin x\\) in the exponent. The trig factor conventionally sits in front."
        },
        {
          stepNumber: 8,
          description: "Sanity check.",
          workingLatex: "\\text{at } x = 0: \\; \\tfrac{dy}{dx} = 1 \\cdot e^0 = 1",
          explanation: "Spot-checking at \\(x = 0\\): \\(\\cos 0 = 1\\) and \\(e^{\\sin 0} = e^0 = 1\\), so the gradient is \\(1\\) — consistent with the original \\(y = e^{\\sin x}\\) crossing through the slope of \\(\\sin x\\) near zero."
        }
      ],
      finalAnswer: "\\( \\cos x \\cdot e^{\\sin x} \\)"
    }
  },
  {
    id: "y2df3-032",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 32",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{\\cos x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = e^{\\cos x}",
          explanation: "The exponent of \\(e\\) is itself a function of \\(x\\), namely \\(\\cos x\\). Chain rule is required."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = \\cos x",
          explanation: "The exponent \\(\\cos x\\) is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -\\sin x",
          explanation: "Mind the sign: \\(\\cos x\\) differentiates to \\(-\\sin x\\). This minus carries into the answer."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "Exponential is its own derivative."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot (-\\sin x)",
          explanation: "Multiply outer by inner derivative, keeping the bracket around \\(-\\sin x\\)."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = -\\sin x \\cdot e^{\\cos x}",
          explanation: "Replace \\(u\\) with \\(\\cos x\\); the trig factor conventionally sits in front."
        },
        {
          stepNumber: 8,
          description: "Sanity check.",
          workingLatex: "\\text{at } x = 0: \\; \\tfrac{dy}{dx} = -0 \\cdot e^1 = 0",
          explanation: "Spot-checking at \\(x = 0\\): \\(\\sin 0 = 0\\) so the gradient there is zero — consistent with \\(\\cos x\\) having a maximum at \\(x = 0\\), making \\(e^{\\cos x}\\) stationary too."
        }
      ],
      finalAnswer: "\\( -\\sin x \\cdot e^{\\cos x} \\)"
    }
  },
  // ── ln(f(x)) ────
  {
    id: "y2df3-033",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 33",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(x^2+1) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "log"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2+1",
          explanation: "Whatever sits inside the \\(\\ln(\\cdot)\\) is the inner function. Here it is the quadratic \\(x^2+1\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer function is the natural log of \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\); the constant \\(+1\\) vanishes."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Recall \\(\\tfrac{d}{du}\\ln u = \\tfrac{1}{u}\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot 2x = \\tfrac{2x}{u}",
          explanation: "Multiply outer by inner derivative. This is the familiar \\(f'(x)/f(x)\\) shape."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{2x}{x^2+1}",
          explanation: "Replace \\(u\\) with \\(x^2+1\\) in the denominator."
        }
      ],
      finalAnswer: "\\( \\tfrac{2x}{x^2+1} \\)"
    }
  },
  {
    id: "y2df3-034",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 34",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(2x+3) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule", "log"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 2x+3",
          explanation: "Whatever sits inside the \\(\\ln\\) is the inner function. Here it is the linear bracket \\(2x+3\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer function is the natural logarithm applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2",
          explanation: "Coefficient of \\(x\\) is \\(2\\); the constant \\(+3\\) vanishes. This factor of \\(2\\) is the numerator of the final fraction."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Recall \\(\\tfrac{d}{du}\\ln u = \\tfrac{1}{u}\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot 2 = \\tfrac{2}{u}",
          explanation: "Multiply outer by inner derivative. This produces the familiar \\(f'(x)/f(x)\\) shape."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{2}{2x+3}",
          explanation: "Replace \\(u\\) with \\(2x+3\\) in the denominator."
        }
      ],
      finalAnswer: "\\( \\tfrac{2}{2x+3} \\)"
    }
  },
  {
    id: "y2df3-035",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 35",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(3x^2-1) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "log"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 3x^2-1",
          explanation: "The quadratic bracket inside \\(\\ln(\\cdot)\\) is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer is the natural log of \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 6x",
          explanation: "Power rule on \\(3x^2\\) gives \\(6x\\); the constant \\(-1\\) vanishes."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Standard derivative of \\(\\ln u\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot 6x = \\tfrac{6x}{u}",
          explanation: "Multiply outer by inner derivative. The result has the \\(f'(x)/f(x)\\) shape."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{6x}{3x^2-1}",
          explanation: "Replace \\(u\\) with \\(3x^2-1\\) in the denominator."
        }
      ],
      finalAnswer: "\\( \\tfrac{6x}{3x^2-1} \\)"
    }
  },
  {
    id: "y2df3-036",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 36",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(\\sin x) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "log"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = \\ln(\\sin x)",
          explanation: "The argument of \\(\\ln\\) is itself a function of \\(x\\), namely \\(\\sin x\\). Chain rule is required."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = \\sin x",
          explanation: "Inside the \\(\\ln(\\cdot)\\) sits the trig function \\(\\sin x\\); that is the inner."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer is the natural log of \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = \\cos x",
          explanation: "Standard derivative: \\(\\sin x \\to \\cos x\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Standard derivative of \\(\\ln u\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot \\cos x = \\tfrac{\\cos x}{u}",
          explanation: "Multiply outer by inner derivative; the result has the \\(f'/f\\) shape."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{\\cos x}{\\sin x}",
          explanation: "Replace \\(u\\) with \\(\\sin x\\)."
        },
        {
          stepNumber: 8,
          description: "Recognise as a standard identity.",
          workingLatex: "\\tfrac{dy}{dx} = \\cot x",
          explanation: "The quotient \\(\\cos x / \\sin x\\) is the definition of \\(\\cot x\\)."
        }
      ],
      finalAnswer: "\\( \\cot x \\)"
    }
  },
  {
    id: "y2df3-037",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 37",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(\\cos x) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = \\ln(\\cos x)",
          explanation: "The argument of \\(\\ln\\) is a function of \\(x\\), namely \\(\\cos x\\). Chain rule is required."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = \\cos x",
          explanation: "Inside the \\(\\ln(\\cdot)\\) sits \\(\\cos x\\); that is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer is the natural log of \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -\\sin x",
          explanation: "Mind the sign: \\(\\cos x \\to -\\sin x\\). This carries through to the final answer."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Standard derivative of \\(\\ln u\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot (-\\sin x) = \\tfrac{-\\sin x}{u}",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{-\\sin x}{\\cos x}",
          explanation: "Replace \\(u\\) with \\(\\cos x\\)."
        },
        {
          stepNumber: 8,
          description: "Recognise as a standard identity.",
          workingLatex: "\\tfrac{dy}{dx} = -\\tan x",
          explanation: "The quotient \\(\\sin x / \\cos x\\) is \\(\\tan x\\); the leading minus stays. (This is also a standard antiderivative result running in reverse.)"
        }
      ],
      finalAnswer: "\\( -\\tan x \\)"
    }
  },
  {
    id: "y2df3-038",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 38",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(x^3+1) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^3+1",
          explanation: "The cubic bracket inside \\(\\ln(\\cdot)\\) is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer function is the natural log of \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3x^2",
          explanation: "Power rule on \\(x^3\\) gives \\(3x^2\\); the constant \\(+1\\) vanishes."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Standard derivative of \\(\\ln u\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot 3x^2 = \\tfrac{3x^2}{u}",
          explanation: "Multiply outer by inner derivative. The result has the \\(f'(x)/f(x)\\) shape."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{3x^2}{x^3+1}",
          explanation: "Replace \\(u\\) with \\(x^3+1\\)."
        }
      ],
      finalAnswer: "\\( \\tfrac{3x^2}{x^3+1} \\)"
    }
  },
  {
    id: "y2df3-039",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 39",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(5x^2+2) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 5x^2+2",
          explanation: "The quadratic inside \\(\\ln(\\cdot)\\) is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer is the natural log of \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 10x",
          explanation: "Power rule on \\(5x^2\\) gives \\(10x\\); the constant \\(+2\\) vanishes."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Standard derivative of \\(\\ln u\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot 10x = \\tfrac{10x}{u}",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{10x}{5x^2+2}",
          explanation: "Replace \\(u\\) with \\(5x^2+2\\)."
        }
      ],
      finalAnswer: "\\( \\tfrac{10x}{5x^2+2} \\)"
    }
  },
  {
    id: "y2df3-040",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 40",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(4-x^2) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 4-x^2",
          explanation: "The expression inside \\(\\ln(\\cdot)\\) is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer function is the natural log of \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -2x",
          explanation: "Watch the sign: \\(-x^2 \\to -2x\\). The constant \\(4\\) drops out."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Standard derivative of \\(\\ln u\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot (-2x) = \\tfrac{-2x}{u}",
          explanation: "Multiply outer by inner derivative; the negative carries through."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{-2x}{4-x^2}",
          explanation: "Replace \\(u\\) with \\(4-x^2\\). The sign of the numerator follows from the inner derivative."
        }
      ],
      finalAnswer: "\\( \\tfrac{-2x}{4-x^2} \\)"
    }
  },
  // ── sin(f) / cos(f) ────
  {
    id: "y2df3-041",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 41",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin(x^2) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2",
          explanation: "What sits inside \\(\\sin(\\cdot)\\) is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\sin u",
          explanation: "With \\(u\\) named, the outer function is the sine applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\). This factor becomes the leading coefficient in the answer."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\cos u",
          explanation: "Recall \\(\\tfrac{d}{du}\\sin u = \\cos u\\). Note the outer derivative is \\(\\cos u\\), not \\(\\cos\\) of the inner derivative."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\cos u \\cdot 2x",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\cos(x^2)",
          explanation: "Replace \\(u\\) with \\(x^2\\) inside the cosine; the \\(2x\\) sits at the front."
        }
      ],
      finalAnswer: "\\( 2x\\cos(x^2) \\)"
    }
  },
  {
    id: "y2df3-042",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 42",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\cos(x^2) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2",
          explanation: "Inside the \\(\\cos(\\cdot)\\) sits \\(x^2\\); that is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\cos u",
          explanation: "With \\(u\\) named, the outer function is the cosine applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = -\\sin u",
          explanation: "Mind the sign: \\(\\cos u\\) differentiates to \\(-\\sin u\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = -\\sin u \\cdot 2x",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = -2x\\sin(x^2)",
          explanation: "Replace \\(u\\) with \\(x^2\\) inside the sine; the leading sign and \\(2x\\) sit at the front."
        }
      ],
      finalAnswer: "\\( -2x\\sin(x^2) \\)"
    }
  },
  {
    id: "y2df3-043",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 43",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin(2x+1) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 2x+1",
          explanation: "Whatever sits inside the \\(\\sin(\\cdot)\\) is the inner function. Here it is the linear bracket \\(2x+1\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\sin u",
          explanation: "With \\(u\\) named, the outer function is the sine applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2",
          explanation: "Coefficient of \\(x\\) is \\(2\\); the constant \\(+1\\) vanishes. This factor of \\(2\\) is what students most often drop."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\cos u",
          explanation: "Recall \\(\\tfrac{d}{du}\\sin u = \\cos u\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\cos u \\cdot 2",
          explanation: "Write the product before substituting back, so both factors are visible."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\cos(2x+1)",
          explanation: "Replace \\(u\\) with \\(2x+1\\) inside the cosine; the leading \\(2\\) sits in front."
        }
      ],
      finalAnswer: "\\( 2\\cos(2x+1) \\)"
    }
  },
  {
    id: "y2df3-044",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 44",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\cos(3x-2) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 3x-2",
          explanation: "Whatever sits inside the \\(\\cos(\\cdot)\\) is the inner function. Here it is the linear bracket \\(3x-2\\)."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\cos u",
          explanation: "With \\(u\\) named, the outer function is the cosine applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3",
          explanation: "Coefficient of \\(x\\) is \\(3\\); the constant \\(-2\\) vanishes."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = -\\sin u",
          explanation: "Mind the sign: \\(\\cos\\) differentiates to \\(-\\sin\\). Forgetting that minus is the most common slip."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = -\\sin u \\cdot 3",
          explanation: "Write the product before substituting back."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = -3\\sin(3x-2)",
          explanation: "Combine \\(-1 \\cdot 3 = -3\\) and replace \\(u\\) with \\(3x-2\\) inside the sine."
        }
      ],
      finalAnswer: "\\( -3\\sin(3x-2) \\)"
    }
  },
  {
    id: "y2df3-045",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 45",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin(x^3) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^3",
          explanation: "Inside the \\(\\sin(\\cdot)\\) sits the cube \\(x^3\\); that is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\sin u",
          explanation: "With \\(u\\) named, the outer is the sine applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3x^2",
          explanation: "Power rule on \\(x^3\\) gives \\(3x^2\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\cos u",
          explanation: "Standard derivative \\(\\sin u \\to \\cos u\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\cos u \\cdot 3x^2",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 3x^2 \\cos(x^3)",
          explanation: "Replace \\(u\\) with \\(x^3\\) inside the cosine; the \\(3x^2\\) sits at the front."
        }
      ],
      finalAnswer: "\\( 3x^2\\cos(x^3) \\)"
    }
  },
  {
    id: "y2df3-046",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 46",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\cos(\\pi x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = \\pi x",
          explanation: "Inside the \\(\\cos(\\cdot)\\) sits \\(\\pi x\\); \\(\\pi\\) is just a constant coefficient, treat it like any other number."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\cos u",
          explanation: "With \\(u\\) named, the outer function is the cosine applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = \\pi",
          explanation: "Coefficient of \\(x\\) is \\(\\pi\\). The whole inner derivative is the constant \\(\\pi\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = -\\sin u",
          explanation: "Mind the sign: \\(\\cos\\) differentiates to \\(-\\sin\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = -\\sin u \\cdot \\pi",
          explanation: "Write the product before substituting back."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = -\\pi\\sin(\\pi x)",
          explanation: "Combine \\(-1 \\cdot \\pi = -\\pi\\) and replace \\(u\\) with \\(\\pi x\\)."
        }
      ],
      finalAnswer: "\\( -\\pi\\sin(\\pi x) \\)"
    }
  },
  // ── (trig)^n ────
  {
    id: "y2df3-047",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 47",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin^2 x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a power.",
          workingLatex: "y = (\\sin x)^2",
          explanation: "The notation \\(\\sin^2 x\\) means \\((\\sin x)^2\\). Rewriting it this way makes the chain rule structure visible."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = \\sin x",
          explanation: "Inside the square sits \\(\\sin x\\); that is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^2",
          explanation: "With \\(u\\) named, the outer function is the square applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = \\cos x",
          explanation: "Standard derivative \\(\\sin \\to \\cos\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 2u",
          explanation: "Power rule on \\(u^2\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 2u \\cdot \\cos x = 2\\sin x \\cos x",
          explanation: "Multiply outer by inner derivative and substitute \\(u = \\sin x\\)."
        },
        {
          stepNumber: 7,
          description: "Use the double-angle identity.",
          workingLatex: "\\tfrac{dy}{dx} = \\sin 2x",
          explanation: "Apply \\(2\\sin x \\cos x = \\sin 2x\\) for a tidier form."
        }
      ],
      finalAnswer: "\\( \\sin 2x \\)"
    }
  },
  {
    id: "y2df3-048",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 48",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\cos^2 x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "trig"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a power.",
          workingLatex: "y = (\\cos x)^2",
          explanation: "Notation \\(\\cos^2 x\\) means \\((\\cos x)^2\\). Rewriting this way makes the chain rule structure visible."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = \\cos x",
          explanation: "Inside the square sits \\(\\cos x\\); that is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^2",
          explanation: "With \\(u\\) named, the outer is the square applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -\\sin x",
          explanation: "Mind the sign: \\(\\cos x\\) differentiates to \\(-\\sin x\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 2u",
          explanation: "Power rule on \\(u^2\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 2u \\cdot (-\\sin x) = -2\\cos x \\sin x",
          explanation: "Multiply outer by inner derivative and substitute \\(u = \\cos x\\)."
        },
        {
          stepNumber: 7,
          description: "Use the double-angle identity.",
          workingLatex: "\\tfrac{dy}{dx} = -\\sin 2x",
          explanation: "Apply \\(2\\sin x \\cos x = \\sin 2x\\); the leading minus remains."
        }
      ],
      finalAnswer: "\\( -\\sin 2x \\)"
    }
  },
  {
    id: "y2df3-049",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 49",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin^3 x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the notation.",
          workingLatex: "\\sin^3 x = (\\sin x)^3",
          explanation: "The notation \\(\\sin^3 x\\) means \\((\\sin x)^3\\), not \\(\\sin(x^3)\\). Be clear on this before differentiating."
        },
        {
          stepNumber: 2,
          description: "Rewrite as a power.",
          workingLatex: "y = (\\sin x)^3",
          explanation: "Rewriting in bracket form makes the chain rule structure visible."
        },
        {
          stepNumber: 3,
          description: "Identify the inner function.",
          workingLatex: "u = \\sin x",
          explanation: "Inside the cube sits \\(\\sin x\\); that is the inner function."
        },
        {
          stepNumber: 4,
          description: "Identify the outer function.",
          workingLatex: "y = u^3",
          explanation: "With \\(u\\) named, the outer is the cube applied to \\(u\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = \\cos x",
          explanation: "Standard derivative \\(\\sin x \\to \\cos x\\)."
        },
        {
          stepNumber: 6,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 3u^2",
          explanation: "Power rule on \\(u^3\\)."
        },
        {
          stepNumber: 7,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 3u^2 \\cdot \\cos x",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 8,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 3\\sin^2 x \\cos x",
          explanation: "Replace \\(u\\) with \\(\\sin x\\) inside the square."
        }
      ],
      finalAnswer: "\\( 3\\sin^2 x \\cos x \\)"
    }
  },
  {
    id: "y2df3-050",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 50",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\cos^3 x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the notation.",
          workingLatex: "\\cos^3 x = (\\cos x)^3",
          explanation: "The notation \\(\\cos^3 x\\) means \\((\\cos x)^3\\), not \\(\\cos(x^3)\\)."
        },
        {
          stepNumber: 2,
          description: "Rewrite as a power.",
          workingLatex: "y = (\\cos x)^3",
          explanation: "Rewriting in bracket form makes the chain rule structure visible."
        },
        {
          stepNumber: 3,
          description: "Identify the inner function.",
          workingLatex: "u = \\cos x",
          explanation: "Inside the cube sits \\(\\cos x\\); that is the inner function."
        },
        {
          stepNumber: 4,
          description: "Identify the outer function.",
          workingLatex: "y = u^3",
          explanation: "With \\(u\\) named, the outer is the cube applied to \\(u\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -\\sin x",
          explanation: "Mind the sign: \\(\\cos x \\to -\\sin x\\). The minus carries through."
        },
        {
          stepNumber: 6,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 3u^2",
          explanation: "Power rule on \\(u^3\\)."
        },
        {
          stepNumber: 7,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 3u^2 \\cdot (-\\sin x)",
          explanation: "Multiply outer by inner derivative, keeping the bracket around \\(-\\sin x\\)."
        },
        {
          stepNumber: 8,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = -3\\cos^2 x \\sin x",
          explanation: "Replace \\(u\\) with \\(\\cos x\\); the minus sign comes from differentiating \\(\\cos\\)."
        }
      ],
      finalAnswer: "\\( -3\\cos^2 x \\sin x \\)"
    }
  },
  {
    id: "y2df3-051",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 51",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin^4 x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the notation.",
          workingLatex: "\\sin^4 x = (\\sin x)^4",
          explanation: "\\(\\sin^4 x\\) means \\((\\sin x)^4\\), not \\(\\sin(x^4)\\)."
        },
        {
          stepNumber: 2,
          description: "Rewrite as a power.",
          workingLatex: "y = (\\sin x)^4",
          explanation: "Rewriting in bracket form makes the chain rule structure visible."
        },
        {
          stepNumber: 3,
          description: "Identify the inner function.",
          workingLatex: "u = \\sin x",
          explanation: "Inside the fourth power sits \\(\\sin x\\)."
        },
        {
          stepNumber: 4,
          description: "Identify the outer function.",
          workingLatex: "y = u^4",
          explanation: "With \\(u\\) named, the outer is the fourth power applied to \\(u\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = \\cos x",
          explanation: "Standard derivative \\(\\sin x \\to \\cos x\\)."
        },
        {
          stepNumber: 6,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 4u^3",
          explanation: "Power rule on \\(u^4\\)."
        },
        {
          stepNumber: 7,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 4u^3 \\cdot \\cos x",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 8,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 4\\sin^3 x \\cos x",
          explanation: "Replace \\(u\\) with \\(\\sin x\\) inside the cube."
        }
      ],
      finalAnswer: "\\( 4\\sin^3 x \\cos x \\)"
    }
  },
  {
    id: "y2df3-052",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 52",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin^2(2x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the notation.",
          workingLatex: "\\sin^2(2x) = (\\sin(2x))^2",
          explanation: "\\(\\sin^2(2x)\\) is shorthand for \\((\\sin(2x))^2\\). This is a stacked chain — two layers below the outermost square."
        },
        {
          stepNumber: 2,
          description: "Rewrite as a power.",
          workingLatex: "y = (\\sin(2x))^2",
          explanation: "Rewriting makes the outer square explicit so the chain rule can be applied cleanly."
        },
        {
          stepNumber: 3,
          description: "Identify the outer-most inner and outer.",
          workingLatex: "u = \\sin(2x),\\quad y = u^2",
          explanation: "Treat \\(\\sin(2x)\\) as the inner function (a sub-composition) and the square as the outer."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer.",
          workingLatex: "\\tfrac{dy}{du} = 2u",
          explanation: "Power rule on \\(u^2\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the inner (itself a chain).",
          workingLatex: "\\tfrac{du}{dx} = 2\\cos(2x)",
          explanation: "Use the chain rule on \\(\\sin(2x)\\): derivative of \\(\\sin\\) is \\(\\cos\\), and the inner-inner derivative is \\(2\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 2u \\cdot 2\\cos(2x)",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 7,
          description: "Substitute back and combine constants.",
          workingLatex: "\\tfrac{dy}{dx} = 4\\sin(2x)\\cos(2x)",
          explanation: "Replace \\(u\\) with \\(\\sin(2x)\\); multiply \\(2 \\cdot 2 = 4\\)."
        },
        {
          stepNumber: 8,
          description: "Factor for the double-angle identity.",
          workingLatex: "4\\sin(2x)\\cos(2x) = 2 \\cdot 2\\sin(2x)\\cos(2x)",
          explanation: "Pull out a \\(2\\) so the identity \\(2\\sin\\theta\\cos\\theta = \\sin 2\\theta\\) is exactly in view."
        },
        {
          stepNumber: 9,
          description: "Apply the double-angle identity.",
          workingLatex: "\\tfrac{dy}{dx} = 2\\sin(4x)",
          explanation: "With \\(\\theta = 2x\\), the identity gives \\(2\\sin(2x)\\cos(2x) = \\sin(4x)\\); the leading \\(2\\) stays in front."
        }
      ],
      finalAnswer: "\\( 2\\sin(4x) \\)"
    }
  },
  {
    id: "y2df3-053",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 53",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\cos^2(3x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the notation.",
          workingLatex: "\\cos^2(3x) = (\\cos(3x))^2",
          explanation: "\\(\\cos^2(3x)\\) is shorthand for \\((\\cos(3x))^2\\). This is a stacked chain — two layers below the outermost square."
        },
        {
          stepNumber: 2,
          description: "Rewrite as a power.",
          workingLatex: "y = (\\cos(3x))^2",
          explanation: "Rewriting makes the outer square explicit."
        },
        {
          stepNumber: 3,
          description: "Identify the outer-most inner and outer.",
          workingLatex: "u = \\cos(3x),\\quad y = u^2",
          explanation: "Treat \\(\\cos(3x)\\) as the inner (itself a sub-composition) and the square as the outer."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer.",
          workingLatex: "\\tfrac{dy}{du} = 2u",
          explanation: "Power rule on \\(u^2\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the inner (itself a chain).",
          workingLatex: "\\tfrac{du}{dx} = -3\\sin(3x)",
          explanation: "Chain rule on \\(\\cos(3x)\\): derivative of \\(\\cos\\) is \\(-\\sin\\), inner-inner derivative \\(3\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 2u \\cdot (-3\\sin(3x))",
          explanation: "Multiply outer by inner derivative, keeping the bracket around \\(-3\\sin(3x)\\)."
        },
        {
          stepNumber: 7,
          description: "Substitute back and combine constants.",
          workingLatex: "\\tfrac{dy}{dx} = -6\\cos(3x)\\sin(3x)",
          explanation: "Replace \\(u\\) with \\(\\cos(3x)\\); multiply \\(2 \\cdot (-3) = -6\\)."
        },
        {
          stepNumber: 8,
          description: "Factor for the double-angle identity.",
          workingLatex: "-6\\cos(3x)\\sin(3x) = -3 \\cdot 2\\sin(3x)\\cos(3x)",
          explanation: "Pull out a factor of \\(2\\) so the identity \\(2\\sin\\theta\\cos\\theta = \\sin 2\\theta\\) is exactly in view."
        },
        {
          stepNumber: 9,
          description: "Apply the double-angle identity.",
          workingLatex: "\\tfrac{dy}{dx} = -3\\sin(6x)",
          explanation: "With \\(\\theta = 3x\\), \\(2\\sin(3x)\\cos(3x) = \\sin(6x)\\); the leading factor stays at \\(-3\\)."
        }
      ],
      finalAnswer: "\\( -3\\sin(6x) \\)"
    }
  },
  // ── Gradients at specific x ────
  {
    id: "y2df3-054",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 54",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = (2x-1)^5 \\) at \\( x = 1 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 2x-1",
          explanation: "The linear bracket inside the fifth power is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^5",
          explanation: "With \\(u\\) named, the outer is the fifth power."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2",
          explanation: "Coefficient of \\(x\\) is \\(2\\); the constant \\(-1\\) vanishes."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 5u^4",
          explanation: "Power rule on \\(u^5\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 5u^4 \\cdot 2 = 10u^4",
          explanation: "Multiply the constants \\(5 \\cdot 2 = 10\\)."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 10(2x-1)^4",
          explanation: "Replace \\(u\\) with \\(2x-1\\). Now we have the gradient function in \\(x\\)."
        },
        {
          stepNumber: 7,
          description: "Evaluate at \\(x = 1\\).",
          workingLatex: "\\tfrac{dy}{dx}\\Big|_{x=1} = 10(2 \\cdot 1 - 1)^4 = 10 \\cdot 1^4 = 10",
          explanation: "Evaluate the bracket first: \\(2-1 = 1\\). Then \\(1^4 = 1\\), so the gradient is \\(10\\)."
        }
      ],
      finalAnswer: "\\( 10 \\)"
    }
  },
  {
    id: "y2df3-055",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 55",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = e^{x^2} \\) at \\( x = 1 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2",
          explanation: "The exponent of \\(e\\) is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "The exponential is its own derivative."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot 2x = 2x e^u",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 2x e^{x^2}",
          explanation: "Replace \\(u\\) with \\(x^2\\) inside the exponent."
        },
        {
          stepNumber: 7,
          description: "Evaluate at \\(x = 1\\).",
          workingLatex: "\\tfrac{dy}{dx}\\Big|_{x=1} = 2 \\cdot 1 \\cdot e^{1^2} = 2e",
          explanation: "Compute the exponent first: \\(1^2 = 1\\), so the exponential becomes \\(e^1 = e\\). Final value is \\(2e \\approx 5.44\\)."
        }
      ],
      finalAnswer: "\\( 2e \\approx 5.44 \\)"
    }
  },
  {
    id: "y2df3-056",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 56",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = \\ln(x^2+1) \\) at \\( x = 1 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2+1",
          explanation: "The quadratic inside \\(\\ln(\\cdot)\\) is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer is the natural log of \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\); constant drops."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Standard derivative of \\(\\ln u\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot 2x = \\tfrac{2x}{u}",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{2x}{x^2+1}",
          explanation: "Replace \\(u\\) with \\(x^2+1\\). Now we have the gradient function in \\(x\\)."
        },
        {
          stepNumber: 7,
          description: "Evaluate at \\(x = 1\\).",
          workingLatex: "\\tfrac{dy}{dx}\\Big|_{x=1} = \\tfrac{2 \\cdot 1}{1^2 + 1} = \\tfrac{2}{2} = 1",
          explanation: "Evaluate numerator and denominator separately, then divide."
        }
      ],
      finalAnswer: "\\( 1 \\)"
    }
  },
  {
    id: "y2df3-057",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 57",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = \\sqrt{x^2+1} \\) at \\( x = 0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a half power.",
          workingLatex: "y = (x^2+1)^{1/2}",
          explanation: "Square root becomes a power of one-half so the power rule applies directly."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = x^2+1",
          explanation: "The expression under the root is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer is the half power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\); constant drops."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Power rule on the half-power."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot 2x = \\tfrac{x}{u^{1/2}}",
          explanation: "Multiply derivatives; the \\(2\\) cancels with the \\(\\tfrac{1}{2}\\)."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{x}{\\sqrt{x^2+1}}",
          explanation: "Put \\(u = x^2+1\\) back under the root."
        }
        ,
        {
          stepNumber: 8,
          description: "Evaluate at \\(x = 0\\).",
          workingLatex: "\\tfrac{dy}{dx}\\Big|_{x=0} = \\tfrac{0}{\\sqrt{0+1}} = 0",
          explanation: "Numerator is \\(0\\), so the gradient is \\(0\\) regardless of the denominator (which is \\(\\sqrt{1} = 1\\), so non-zero)."
        }
      ],
      finalAnswer: "\\( 0 \\)"
    }
  },
  {
    id: "y2df3-058",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 58",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = \\sin(x^2) \\) at \\( x = \\sqrt{\\pi/2} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2",
          explanation: "Inside the \\(\\sin(\\cdot)\\) sits \\(x^2\\); that is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\sin u",
          explanation: "With \\(u\\) named, the outer is the sine applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\cos u",
          explanation: "Standard derivative \\(\\sin u \\to \\cos u\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\cos u \\cdot 2x",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 2x \\cos(x^2)",
          explanation: "Replace \\(u\\) with \\(x^2\\) inside the cosine. Now we have the gradient function in \\(x\\)."
        },
        {
          stepNumber: 7,
          description: "Compute \\(x^2\\) at the given point.",
          workingLatex: "x = \\sqrt{\\pi/2} \\;\\Rightarrow\\; x^2 = \\pi/2",
          explanation: "Squaring the root simplifies the exponent before substitution."
        },
        {
          stepNumber: 8,
          description: "Substitute and evaluate.",
          workingLatex: "\\tfrac{dy}{dx}\\Big|_{x=\\sqrt{\\pi/2}} = 2\\sqrt{\\pi/2}\\cos(\\pi/2) = 2\\sqrt{\\pi/2} \\cdot 0 = 0",
          explanation: "Since \\(\\cos(\\pi/2) = 0\\), the whole product is \\(0\\) regardless of the leading \\(2\\sqrt{\\pi/2}\\) factor."
        }
      ],
      finalAnswer: "\\( 0 \\)"
    }
  },
  // ── Tangents / applications ────
  {
    id: "y2df3-059",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 59",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the equation of the tangent to \\( y = \\sqrt{x+1} \\) at \\( x = 3 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "tangent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite the root as a half power.",
          workingLatex: "y = (x+1)^{1/2}",
          explanation: "Converting to a half-power makes the power rule apply directly to the outer function."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = x+1",
          explanation: "The expression under the root is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer is the half power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate inner and outer.",
          workingLatex: "\\tfrac{du}{dx} = 1,\\quad \\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Inner derivative is \\(1\\); outer uses the power rule on \\(u^{1/2}\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot 1 = \\tfrac{1}{2u^{1/2}}",
          explanation: "Multiply derivatives. The inner derivative is \\(1\\), so the \\(\\tfrac{1}{2}\\) remains."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{2\\sqrt{x+1}}",
          explanation: "Replace \\(u\\) with \\(x+1\\) under the root; now we have the gradient function."
        },
        {
          stepNumber: 7,
          description: "Compute the gradient at \\(x = 3\\).",
          workingLatex: "m = \\tfrac{1}{2\\sqrt{3+1}} = \\tfrac{1}{2 \\cdot 2} = \\tfrac{1}{4}",
          explanation: "Plug \\(x = 3\\) into \\(dy/dx\\): \\(\\sqrt{4} = 2\\), so the gradient is \\(1/4\\)."
        },
        {
          stepNumber: 8,
          description: "Find the point on the curve.",
          workingLatex: "y(3) = \\sqrt{3+1} = 2",
          explanation: "Need the \\(y\\)-value at \\(x = 3\\) for the tangent's point of contact."
        },
        {
          stepNumber: 9,
          description: "Write the tangent using point-slope.",
          workingLatex: "y - 2 = \\tfrac{1}{4}(x - 3)",
          explanation: "Use \\(y - y_1 = m(x - x_1)\\) with point \\((3, 2)\\) and gradient \\(1/4\\)."
        },
        {
          stepNumber: 10,
          description: "Rearrange into \\(y = \\)-form.",
          workingLatex: "y = \\tfrac{1}{4}x - \\tfrac{3}{4} + 2 = \\tfrac{x}{4} + \\tfrac{5}{4}",
          explanation: "Expand and combine the constants: \\(-3/4 + 2 = 5/4\\)."
        }
      ],
      finalAnswer: "\\( y = \\tfrac{x}{4} + \\tfrac{5}{4} \\)"
    }
  },
  {
    id: "y2df3-060",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 60",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the equation of the tangent to \\( y = e^{x^2} \\) at \\( x = 0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "tangent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2",
          explanation: "The exponent of \\(e\\) is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate inner and outer.",
          workingLatex: "\\tfrac{du}{dx} = 2x,\\quad \\tfrac{dy}{du} = e^u",
          explanation: "Power rule on \\(x^2\\); the exponential is its own derivative."
        },
        {
          stepNumber: 4,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = e^u \\cdot 2x = 2x e^{x^2}",
          explanation: "Multiply outer by inner derivative and substitute \\(u = x^2\\)."
        },
        {
          stepNumber: 5,
          description: "Compute the gradient at \\(x = 0\\).",
          workingLatex: "m = 2 \\cdot 0 \\cdot e^{0} = 0",
          explanation: "The factor of \\(2x\\) vanishes at \\(x = 0\\), so the tangent is horizontal."
        },
        {
          stepNumber: 6,
          description: "Find the point on the curve.",
          workingLatex: "y(0) = e^{0} = 1",
          explanation: "Need the \\(y\\)-value at \\(x = 0\\) for the tangent's point of contact."
        },
        {
          stepNumber: 7,
          description: "Write the tangent.",
          workingLatex: "y - 1 = 0 \\cdot (x - 0) \\;\\Rightarrow\\; y = 1",
          explanation: "A horizontal tangent through \\((0, 1)\\) is just \\(y = 1\\)."
        }
      ],
      finalAnswer: "\\( y = 1 \\)"
    }
  },
  {
    id: "y2df3-061",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 61",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the stationary points of \\( y = (x^2-1)^3 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = x^2-1",
          explanation: "The quadratic inside the cube is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^3",
          explanation: "With \\(u\\) named, the outer is the cube applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate inner and outer.",
          workingLatex: "\\tfrac{du}{dx} = 2x,\\quad \\tfrac{dy}{du} = 3u^2",
          explanation: "Power rule on \\(x^2\\) for the inner; power rule on \\(u^3\\) for the outer."
        },
        {
          stepNumber: 4,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 3u^2 \\cdot 2x = 6x u^2",
          explanation: "Multiply outer by inner derivative; combine the constants \\(3 \\cdot 2 = 6\\)."
        },
        {
          stepNumber: 5,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 6x(x^2-1)^2",
          explanation: "Replace \\(u\\) with \\(x^2-1\\)."
        },
        {
          stepNumber: 6,
          description: "Set the derivative to zero.",
          workingLatex: "6x(x^2-1)^2 = 0",
          explanation: "Stationary points occur where \\(dy/dx = 0\\)."
        },
        {
          stepNumber: 7,
          description: "Solve the factored equation.",
          workingLatex: "x = 0 \\quad \\text{or} \\quad x^2 - 1 = 0 \\;\\Rightarrow\\; x = \\pm 1",
          explanation: "A product is zero when either factor is zero. The squared bracket gives a repeated root pair at \\(x = \\pm 1\\)."
        },
        {
          stepNumber: 8,
          description: "Compute the \\(y\\)-values.",
          workingLatex: "y(0) = (0-1)^3 = -1,\\quad y(\\pm 1) = 0^3 = 0",
          explanation: "Substitute each stationary \\(x\\) back into the original function to get the corresponding \\(y\\)-coordinate."
        },
        {
          stepNumber: 9,
          description: "State the stationary points.",
          workingLatex: "(0, -1),\\;(1, 0),\\;(-1, 0)",
          explanation: "Collect the three coordinate pairs. The points at \\((\\pm 1, 0)\\) come from repeated factors and tend to be points of inflection rather than turning points."
        }
      ],
      finalAnswer: "Stationary points at \\((0, -1)\\), \\((1, 0)\\), \\((-1, 0)\\)."
    }
  },
  {
    id: "y2df3-062",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 62",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the stationary point of \\( y = e^{-x^2} \\) and classify it.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "stationary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = -x^2",
          explanation: "The exponent (with its sign) of \\(e\\) is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate inner and outer.",
          workingLatex: "\\tfrac{du}{dx} = -2x,\\quad \\tfrac{dy}{du} = e^u",
          explanation: "Watch the sign on the inner: \\(-x^2 \\to -2x\\). The exponential is its own derivative."
        },
        {
          stepNumber: 4,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = e^u \\cdot (-2x) = -2x e^{-x^2}",
          explanation: "Multiply outer by inner derivative and substitute \\(u = -x^2\\)."
        },
        {
          stepNumber: 5,
          description: "Set the derivative to zero.",
          workingLatex: "-2x e^{-x^2} = 0",
          explanation: "Stationary points occur where \\(dy/dx = 0\\)."
        },
        {
          stepNumber: 6,
          description: "Solve for \\(x\\).",
          workingLatex: "x = 0 \\quad (\\text{since } e^{-x^2} > 0 \\text{ always})",
          explanation: "The exponential factor is always positive, so it cannot be zero. Only the \\(-2x\\) factor can vanish."
        },
        {
          stepNumber: 7,
          description: "Compute the \\(y\\)-value.",
          workingLatex: "y(0) = e^{0} = 1",
          explanation: "Substitute \\(x = 0\\) into the original function."
        },
        {
          stepNumber: 8,
          description: "Classify the stationary point.",
          workingLatex: "e^{-x^2} \\le 1 \\text{ for all } x, \\text{ with equality at } x = 0",
          explanation: "The exponent \\(-x^2\\) is \\(\\le 0\\), so the exponential is \\(\\le e^0 = 1\\). The point \\((0,1)\\) is therefore a maximum."
        }
      ],
      finalAnswer: "Maximum at \\((0, 1)\\)."
    }
  },
  // ── Additional extensions ────
  {
    id: "y2df3-063",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 63",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(3x+1) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 3x+1",
          explanation: "Inside the \\(\\ln\\) sits the linear bracket \\(3x+1\\); that is the inner function."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer function is the natural logarithm of \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 3",
          explanation: "Coefficient of \\(x\\) is \\(3\\); the constant \\(+1\\) vanishes."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Recall \\(\\tfrac{d}{du}\\ln u = \\tfrac{1}{u}\\)."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot 3 = \\tfrac{3}{u}",
          explanation: "Multiply outer by inner derivative. This produces the \\(f'(x)/f(x)\\) shape characteristic of \\(\\ln\\) derivatives."
        },
        {
          stepNumber: 6,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{3}{3x+1}",
          explanation: "Replace \\(u\\) with \\(3x+1\\) in the denominator."
        }
      ],
      finalAnswer: "\\( \\tfrac{3}{3x+1} \\)"
    }
  },
  {
    id: "y2df3-064",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 64",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = (1-3x)^4 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the inner function.",
          workingLatex: "u = 1-3x",
          explanation: "The linear bracket sitting inside the fourth power is the inner function. The sign of the \\(x\\)-coefficient will carry through to the answer."
        },
        {
          stepNumber: 2,
          description: "Identify the outer function.",
          workingLatex: "y = u^4",
          explanation: "With \\(u\\) named, the outer function is the fourth power applied to \\(u\\)."
        },
        {
          stepNumber: 3,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -3",
          explanation: "Coefficient of \\(x\\) is \\(-3\\); the constant \\(1\\) vanishes. Forgetting that minus sign is the standard slip."
        },
        {
          stepNumber: 4,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 4u^3",
          explanation: "Power rule on \\(u^4\\): multiply by the exponent and drop it by one."
        },
        {
          stepNumber: 5,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 4u^3 \\cdot (-3)",
          explanation: "Write the product before substituting back. Keep the bracket around \\(-3\\) so the sign is unambiguous."
        },
        {
          stepNumber: 6,
          description: "Substitute back and simplify.",
          workingLatex: "\\tfrac{dy}{dx} = -12(1-3x)^3",
          explanation: "Combine constants \\(4 \\cdot (-3) = -12\\) and replace \\(u\\) with \\(1-3x\\)."
        }
      ],
      finalAnswer: "\\( -12(1-3x)^3 \\)"
    }
  },
  {
    id: "y2df3-065",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 65",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{x^2+5} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite as a half power.",
          workingLatex: "y = (x^2+5)^{1/2}",
          explanation: "Convert the root so the power rule applies directly."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = x^2+5",
          explanation: "The expression under the root is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer is the half power applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\); the constant \\(5\\) drops out."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Power rule on \\(u^{1/2}\\): multiply by \\(\\tfrac{1}{2}\\) and drop the exponent by one."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot 2x = \\tfrac{2x}{2u^{1/2}}",
          explanation: "Multiply derivatives, keeping both factors visible so the cancellation is clear."
        },
        {
          stepNumber: 7,
          description: "Simplify and substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{x}{\\sqrt{x^2+5}}",
          explanation: "Cancel the \\(2\\) and put \\(u = x^2+5\\) back under the root."
        }
      ],
      finalAnswer: "\\( \\tfrac{x}{\\sqrt{x^2+5}} \\)"
    }
  },
  {
    id: "y2df3-066",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 66",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{\\tan x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = e^{\\tan x}",
          explanation: "The exponent of \\(e\\) is a function of \\(x\\), namely \\(\\tan x\\). Chain rule is required."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = \\tan x",
          explanation: "The exponent \\(\\tan x\\) is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = e^u",
          explanation: "With \\(u\\) named, the outer is the exponential applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = \\sec^2 x",
          explanation: "Recall the standard derivative \\(\\tfrac{d}{dx}\\tan x = \\sec^2 x\\). This is worth memorising as a base fact."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = e^u",
          explanation: "Exponential is its own derivative."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = e^u \\cdot \\sec^2 x",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\sec^2 x \\cdot e^{\\tan x}",
          explanation: "Replace \\(u\\) with \\(\\tan x\\); convention puts the trig factor in front."
        },
        {
          stepNumber: 8,
          description: "Note the domain restriction.",
          workingLatex: "x \\ne \\tfrac{\\pi}{2} + k\\pi",
          explanation: "Both the function \\(\\tan x\\) and the derivative \\(\\sec^2 x\\) blow up at \\(x = \\tfrac{\\pi}{2} + k\\pi\\), so the derivative is only valid where \\(\\tan x\\) is defined."
        }
      ],
      finalAnswer: "\\( \\sec^2 x \\cdot e^{\\tan x} \\)"
    }
  },
  {
    id: "y2df3-067",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 67",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(\\ln x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = \\ln(\\ln x)",
          explanation: "This is a nested \\(\\ln\\): the argument of the outer log is itself a log. Chain rule is required."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = \\ln x",
          explanation: "Inside the outer \\(\\ln(\\cdot)\\) sits \\(\\ln x\\); that is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = \\ln u",
          explanation: "With \\(u\\) named, the outer is the natural log of \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = \\tfrac{1}{x}",
          explanation: "Standard derivative \\(\\tfrac{d}{dx}\\ln x = \\tfrac{1}{x}\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{u}",
          explanation: "Standard derivative of \\(\\ln u\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{u} \\cdot \\tfrac{1}{x} = \\tfrac{1}{x u}",
          explanation: "Multiply the two reciprocals."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x \\ln x}",
          explanation: "Replace \\(u\\) with \\(\\ln x\\) in the denominator."
        },
        {
          stepNumber: 8,
          description: "Note the domain restriction.",
          workingLatex: "x > 1",
          explanation: "We need \\(\\ln x > 0\\) for the outer \\(\\ln(\\ln x)\\) to be defined, which gives \\(x > 1\\). For \\(0 < x < 1\\), \\(\\ln x < 0\\) and \\(\\ln(\\ln x)\\) is undefined."
        }
      ],
      finalAnswer: "\\( \\tfrac{1}{x\\ln x} \\)"
    }
  },
  {
    id: "y2df3-068",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 68",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sqrt{1+\\cos x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = \\sqrt{1+\\cos x}",
          explanation: "A square root around a trig expression: composition, so the chain rule applies."
        },
        {
          stepNumber: 2,
          description: "Rewrite as a half power.",
          workingLatex: "y = (1+\\cos x)^{1/2}",
          explanation: "Convert the root so the power rule applies directly."
        },
        {
          stepNumber: 3,
          description: "Identify the inner function.",
          workingLatex: "u = 1+\\cos x",
          explanation: "The expression under the root is the inner function."
        },
        {
          stepNumber: 4,
          description: "Identify the outer function.",
          workingLatex: "y = u^{1/2}",
          explanation: "With \\(u\\) named, the outer is the half power applied to \\(u\\)."
        },
        {
          stepNumber: 5,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = -\\sin x",
          explanation: "Mind the sign: \\(\\cos x\\) differentiates to \\(-\\sin x\\). The constant \\(1\\) drops out."
        },
        {
          stepNumber: 6,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2}u^{-1/2}",
          explanation: "Power rule on the half power."
        },
        {
          stepNumber: 7,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2}u^{-1/2} \\cdot (-\\sin x) = \\tfrac{-\\sin x}{2u^{1/2}}",
          explanation: "Multiply derivatives. Keep the bracket around \\(-\\sin x\\)."
        },
        {
          stepNumber: 8,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = -\\tfrac{\\sin x}{2\\sqrt{1+\\cos x}}",
          explanation: "Replace \\(u\\) with \\(1+\\cos x\\) under the root. The full inner expression sits underneath — not just \\(\\cos x\\)."
        }
      ],
      finalAnswer: "\\( -\\tfrac{\\sin x}{2\\sqrt{1+\\cos x}} \\)"
    }
  },
  {
    id: "y2df3-069",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 69",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = (e^x + 1)^3 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = (e^x+1)^3",
          explanation: "The function is a cube of an exponential expression — a composition. Chain rule applies."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = e^x + 1",
          explanation: "The bracket being cubed is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = u^3",
          explanation: "With \\(u\\) named, the outer is the cube applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = e^x",
          explanation: "\\(e^x\\) is its own derivative; the constant \\(+1\\) vanishes."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = 3u^2",
          explanation: "Power rule on \\(u^3\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = 3u^2 \\cdot e^x",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = 3 e^x (e^x+1)^2",
          explanation: "Replace \\(u\\) with \\(e^x+1\\); the factor \\(e^x\\) conventionally sits in front of the squared bracket."
        },
        {
          stepNumber: 8,
          description: "Sanity check by partial expansion.",
          workingLatex: "(e^x+1)^3 = e^{3x}+3e^{2x}+3e^x+1",
          explanation: "Differentiating term by term gives \\(3e^{3x}+6e^{2x}+3e^x\\), which factors back to \\(3e^x(e^{2x}+2e^x+1) = 3e^x(e^x+1)^2\\) — agreeing with our chain-rule result."
        }
      ],
      finalAnswer: "\\( 3e^x (e^x+1)^2 \\)"
    }
  },
  {
    id: "y2df3-070",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 70",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\sin(e^x) \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the composition.",
          workingLatex: "y = \\sin(e^x)",
          explanation: "The argument of \\(\\sin\\) is itself a function of \\(x\\), namely \\(e^x\\). Chain rule is required."
        },
        {
          stepNumber: 2,
          description: "Identify the inner function.",
          workingLatex: "u = e^x",
          explanation: "Inside the \\(\\sin(\\cdot)\\) sits \\(e^x\\); that is the inner function."
        },
        {
          stepNumber: 3,
          description: "Identify the outer function.",
          workingLatex: "y = \\sin u",
          explanation: "With \\(u\\) named, the outer is the sine applied to \\(u\\)."
        },
        {
          stepNumber: 4,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = e^x",
          explanation: "\\(e^x\\) is its own derivative."
        },
        {
          stepNumber: 5,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\cos u",
          explanation: "Standard derivative \\(\\sin u \\to \\cos u\\)."
        },
        {
          stepNumber: 6,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\cos u \\cdot e^x",
          explanation: "Multiply outer by inner derivative."
        },
        {
          stepNumber: 7,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = e^x \\cos(e^x)",
          explanation: "Replace \\(u\\) with \\(e^x\\) inside the cosine; the \\(e^x\\) factor sits in front."
        },
        {
          stepNumber: 8,
          description: "Sanity check.",
          workingLatex: "\\text{at } x = 0:\\; \\tfrac{dy}{dx} = 1 \\cdot \\cos 1 \\approx 0.540",
          explanation: "At \\(x = 0\\), \\(e^0 = 1\\); the gradient is \\(\\cos 1 \\approx 0.540\\), a finite non-zero value — consistent with the curve \\(\\sin(e^x)\\) being non-stationary there."
        }
      ],
      finalAnswer: "\\( e^x \\cos(e^x) \\)"
    }
  },
  {
    id: "y2df3-071",
    topicRef: "y2df3",
    topicTitle: "The Chain Rule 71",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(\\sqrt{x^2+1}) \\) by first simplifying.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["chain rule", "log laws"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the nested composition.",
          workingLatex: "y = \\ln(\\sqrt{x^2+1})",
          explanation: "Without simplifying, this is a three-level chain (log of root of quadratic). Simplifying first will shorten the work."
        },
        {
          stepNumber: 2,
          description: "Rewrite the root as a power.",
          workingLatex: "y = \\ln\\left((x^2+1)^{1/2}\\right)",
          explanation: "Square root becomes a half power, so the next log law applies cleanly."
        },
        {
          stepNumber: 3,
          description: "Apply a log law to bring the power down.",
          workingLatex: "y = \\tfrac{1}{2}\\ln(x^2+1)",
          explanation: "Use \\(\\ln(a^n) = n\\ln a\\). This turns a three-layer chain into a two-layer one — much cleaner to differentiate."
        },
        {
          stepNumber: 4,
          description: "Identify the inner function.",
          workingLatex: "u = x^2+1",
          explanation: "The quadratic inside \\(\\ln\\) is the inner function."
        },
        {
          stepNumber: 5,
          description: "Identify the outer function.",
          workingLatex: "y = \\tfrac{1}{2}\\ln u",
          explanation: "With \\(u\\) named, the outer is half-of-\\(\\ln u\\). The constant \\(\\tfrac{1}{2}\\) just rides along."
        },
        {
          stepNumber: 6,
          description: "Differentiate the inner function.",
          workingLatex: "\\tfrac{du}{dx} = 2x",
          explanation: "Power rule on \\(x^2\\); the constant \\(+1\\) vanishes."
        },
        {
          stepNumber: 7,
          description: "Differentiate the outer function.",
          workingLatex: "\\tfrac{dy}{du} = \\tfrac{1}{2} \\cdot \\tfrac{1}{u} = \\tfrac{1}{2u}",
          explanation: "Constant multiple rule: the \\(\\tfrac{1}{2}\\) sits in front; \\(\\ln u\\) gives \\(1/u\\)."
        },
        {
          stepNumber: 8,
          description: "Apply the chain rule.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{dy}{du} \\cdot \\tfrac{du}{dx} = \\tfrac{1}{2u} \\cdot 2x = \\tfrac{x}{u}",
          explanation: "The \\(2x\\) cancels with the \\(\\tfrac{1}{2}\\) to leave \\(x/u\\)."
        },
        {
          stepNumber: 9,
          description: "Substitute back.",
          workingLatex: "\\tfrac{dy}{dx} = \\tfrac{x}{x^2+1}",
          explanation: "Replace \\(u\\) with \\(x^2+1\\). Simplifying with the log law first made the algebra much shorter than differentiating the root directly."
        }
      ],
      finalAnswer: "\\( \\tfrac{x}{x^2+1} \\)"
    }
  },
];
