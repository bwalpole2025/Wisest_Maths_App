import { Question } from "@/lib/types";

/**
 * Year 2 — Differentiation § 9.2 Differentiating Exponentials and Logarithms
 * Ref: y2df2
 * 71 questions. Core results:
 *   d/dx e^x = e^x,   d/dx e^(kx) = k·e^(kx),
 *   d/dx ln x = 1/x,   d/dx ln(kx) = 1/x,   d/dx ln(x^n) = n/x,
 *   d/dx a^x = a^x · ln a.
 */
export const questions: Question[] = [
  {
    id: "y2df2-001",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 01",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 5e^{2x} + \\ln(3x) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential term.", workingLatex: "\\tfrac{d}{dx}\\!\\left(5e^{2x}\\right) = 5 \\cdot 2 e^{2x} = 10 e^{2x}", explanation: "The rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\) drops the inner coefficient \\(k=2\\) down as a multiplier. The leading constant 5 just rides through (constant-multiple rule)." },
        { stepNumber: 2, description: "Differentiate the logarithm term.", workingLatex: "\\tfrac{d}{dx}\\!\\left(\\ln(3x)\\right) = \\tfrac{1}{x}", explanation: "Because \\(\\ln(3x) = \\ln 3 + \\ln x\\), the constant \\(\\ln 3\\) differentiates to zero and the \\(3\\) never reaches the answer. A common slip is to write \\(3/x\\) — but the constant inside the log always disappears." },
        { stepNumber: 3, description: "Add the two derivatives (sum rule).", workingLatex: "\\tfrac{dy}{dx} = 10 e^{2x} + \\tfrac{1}{x}", explanation: "Differentiation is linear, so the derivative of a sum is the sum of the derivatives. No further simplification is possible." }
      ],
      finalAnswer: "\\( 10e^{2x} + \\tfrac{1}{x} \\)"
    }
  },
  // ── Basic e^(kx) ────
  {
    id: "y2df2-002",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^x \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the standard result.", workingLatex: "\\tfrac{d}{dx}\\,e^x = e^x", explanation: "The natural exponential is the unique function (up to scalar multiples) that equals its own derivative. There is no chain-rule factor to introduce because the exponent is simply \\(x\\)." },
        { stepNumber: 2, description: "Write the answer.", workingLatex: "\\tfrac{dy}{dx} = e^x", explanation: "Nothing to simplify; the derivative of \\(y=e^x\\) is \\(e^x\\) itself." }
      ],
      finalAnswer: "\\( e^x \\)"
    }
  },
  {
    id: "y2df2-003",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 03",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{2x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "When the exponent is a linear function \\(kx\\), the derivative is the original function multiplied by \\(k\\). The \\(k\\) is essentially the chain-rule factor for the inner linear function." },
        { stepNumber: 2, description: "Identify \\(k = 2\\).", workingLatex: "k = 2", explanation: "Reading off the coefficient of \\(x\\) in the exponent \\(2x\\)." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = 2e^{2x}", explanation: "The \\(2\\) drops down as a multiplier in front of \\(e^{2x}\\). Students sometimes forget to bring the \\(2\\) down — the exponential alone is not enough." }
      ],
      finalAnswer: "\\( 2e^{2x} \\)"
    }
  },
  {
    id: "y2df2-004",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{3x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "Differentiating \\(e^{kx}\\) reproduces the exponential and brings down a factor of \\(k\\) from the linear exponent." },
        { stepNumber: 2, description: "Identify \\(k = 3\\).", workingLatex: "k = 3", explanation: "The coefficient of \\(x\\) in the exponent." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = 3e^{3x}", explanation: "Multiply \\(e^{3x}\\) by 3. A common slip is to copy the exponential unchanged and forget the \\(k\\) factor." }
      ],
      finalAnswer: "\\( 3e^{3x} \\)"
    }
  },
  {
    id: "y2df2-005",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 05",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{4x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "Linear exponent: pull the coefficient down and keep the exponential." },
        { stepNumber: 2, description: "Identify \\(k = 4\\).", workingLatex: "k = 4", explanation: "Reading the coefficient of \\(x\\) in \\(4x\\)." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = 4e^{4x}", explanation: "Multiply by the dropped-down 4." }
      ],
      finalAnswer: "\\( 4e^{4x} \\)"
    }
  },
  {
    id: "y2df2-006",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{5x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "The exponential reappears, multiplied by the linear coefficient." },
        { stepNumber: 2, description: "Identify \\(k = 5\\).", workingLatex: "k = 5", explanation: "Coefficient of \\(x\\) in the exponent." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = 5e^{5x}", explanation: "The 5 drops down in front." }
      ],
      finalAnswer: "\\( 5e^{5x} \\)"
    }
  },
  {
    id: "y2df2-007",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 07",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{-x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "Negative \\(k\\) values work exactly the same way — the sign comes down with the coefficient." },
        { stepNumber: 2, description: "Identify \\(k = -1\\).", workingLatex: "k = -1", explanation: "The exponent \\(-x\\) is the linear expression \\(-1 \\cdot x\\)." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = -e^{-x}", explanation: "Forgetting the minus sign on the dropped-down coefficient is the most common slip here." }
      ],
      finalAnswer: "\\( -e^{-x} \\)"
    }
  },
  {
    id: "y2df2-008",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 08",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{-2x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "Bring the coefficient down, keep the exponential. Sign is part of the coefficient." },
        { stepNumber: 2, description: "Identify \\(k = -2\\).", workingLatex: "k = -2", explanation: "The exponent is \\(-2x\\), so the coefficient of \\(x\\) is \\(-2\\)." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = -2e^{-2x}", explanation: "Both the sign and the magnitude come down — watch the sign." }
      ],
      finalAnswer: "\\( -2e^{-2x} \\)"
    }
  },
  {
    id: "y2df2-009",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 09",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{-3x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "Linear exponent rule again — the entire signed coefficient drops down." },
        { stepNumber: 2, description: "Identify \\(k = -3\\).", workingLatex: "k = -3", explanation: "From the exponent \\(-3x\\)." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = -3e^{-3x}", explanation: "Sign retained, exponential unchanged." }
      ],
      finalAnswer: "\\( -3e^{-3x} \\)"
    }
  },
  {
    id: "y2df2-010",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 10",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{x/2} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "The rule works for any constant \\(k\\), including fractions." },
        { stepNumber: 2, description: "Identify \\(k = \\tfrac{1}{2}\\).", workingLatex: "k = \\tfrac{1}{2}", explanation: "Writing \\(e^{x/2}\\) as \\(e^{(1/2)x}\\) makes the coefficient explicit." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{2}e^{x/2}", explanation: "The fractional \\(k\\) drops down just like an integer would. The exponent itself does not simplify away." }
      ],
      finalAnswer: "\\( \\tfrac{1}{2}e^{x/2} \\)"
    }
  },
  {
    id: "y2df2-011",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 11",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{x/3} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "Same linear-exponent rule; \\(k\\) here is fractional." },
        { stepNumber: 2, description: "Identify \\(k = \\tfrac{1}{3}\\).", workingLatex: "k = \\tfrac{1}{3}", explanation: "Rewrite \\(x/3\\) as \\(\\tfrac{1}{3} x\\) to see the coefficient." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{3}e^{x/3}", explanation: "Watch that \\(\\tfrac{1}{3}\\) becomes the multiplier — the exponent stays \\(x/3\\)." }
      ],
      finalAnswer: "\\( \\tfrac{1}{3}e^{x/3} \\)"
    }
  },
  // ── With constant coefficients ────
  {
    id: "y2df2-012",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 12",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 3e^x \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the constant-multiple rule.", workingLatex: "\\tfrac{d}{dx}\\,(cf(x)) = c\\,f'(x)", explanation: "Constants in front of a function ride through differentiation unchanged. Here \\(c=3\\) and \\(f(x) = e^x\\)." },
        { stepNumber: 2, description: "Use \\(\\tfrac{d}{dx}\\,e^x = e^x\\).", workingLatex: "\\tfrac{dy}{dx} = 3 \\cdot e^x = 3e^x", explanation: "The exponential is its own derivative, so the 3 simply stays where it is." }
      ],
      finalAnswer: "\\( 3e^x \\)"
    }
  },
  {
    id: "y2df2-013",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 13",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 5e^{2x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\) with \\(k = 2\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{2x} = 2e^{2x}", explanation: "Pull the 2 from the exponent down; this is the chain-rule factor for the linear inner function." },
        { stepNumber: 2, description: "Multiply by the constant 5.", workingLatex: "\\tfrac{dy}{dx} = 5 \\cdot 2e^{2x} = 10 e^{2x}", explanation: "Two factors are produced: the original 5 (constant multiple) and the new 2 (from the exponent). Multiply them to get 10. A common slip is to use only one of the two factors." }
      ],
      finalAnswer: "\\( 10e^{2x} \\)"
    }
  },
  {
    id: "y2df2-014",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 14",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = -2e^{3x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\) with \\(k = 3\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{3x} = 3e^{3x}", explanation: "Drop the 3 down from the exponent." },
        { stepNumber: 2, description: "Multiply by the constant \\(-2\\).", workingLatex: "\\tfrac{dy}{dx} = -2 \\cdot 3e^{3x} = -6e^{3x}", explanation: "Track signs carefully: \\((-2)(3) = -6\\)." }
      ],
      finalAnswer: "\\( -6e^{3x} \\)"
    }
  },
  {
    id: "y2df2-015",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 15",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 4e^{-x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\) with \\(k = -1\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{-x} = -e^{-x}", explanation: "The \\(-1\\) from the exponent comes down, flipping the sign." },
        { stepNumber: 2, description: "Multiply by the constant 4.", workingLatex: "\\tfrac{dy}{dx} = 4 \\cdot (-e^{-x}) = -4 e^{-x}", explanation: "The 4 and the \\(-1\\) combine to give a coefficient of \\(-4\\)." }
      ],
      finalAnswer: "\\( -4e^{-x} \\)"
    }
  },
  {
    id: "y2df2-016",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 16",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 7e^{4x} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply \\(\\tfrac{d}{dx} e^{kx} = k e^{kx}\\) with \\(k = 4\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{4x} = 4 e^{4x}", explanation: "Coefficient 4 drops down from the exponent." },
        { stepNumber: 2, description: "Multiply by the constant 7.", workingLatex: "\\tfrac{dy}{dx} = 7 \\cdot 4 e^{4x} = 28 e^{4x}", explanation: "Combine the two constants: \\(7 \\times 4 = 28\\)." }
      ],
      finalAnswer: "\\( 28e^{4x} \\)"
    }
  },
  // ── Sums of exponentials ────
  {
    id: "y2df2-017",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 17",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^x + e^{-x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate each term separately (sum rule).", workingLatex: "\\tfrac{d}{dx}\\,e^x = e^x,\\quad \\tfrac{d}{dx}\\,e^{-x} = -e^{-x}", explanation: "Differentiation is linear, so we can split. Note the sign flip on \\(e^{-x}\\) because the exponent has coefficient \\(-1\\)." },
        { stepNumber: 2, description: "Combine the two derivatives.", workingLatex: "\\tfrac{dy}{dx} = e^x + (-e^{-x}) = e^x - e^{-x}", explanation: "The expression \\(e^x - e^{-x}\\) is exactly \\(2\\sinh x\\) — that's why these even-and-odd combinations crop up in hyperbolic identities." }
      ],
      finalAnswer: "\\( e^x - e^{-x} \\)"
    }
  },
  {
    id: "y2df2-018",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 18",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^x - e^{-x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate each term separately (sum rule).", workingLatex: "\\tfrac{d}{dx}\\,e^x = e^x,\\quad \\tfrac{d}{dx}\\,e^{-x} = -e^{-x}", explanation: "Linearity again. The \\(-\\) sign in front of the second term stays; the \\(-1\\) from differentiating the exponent then combines with it." },
        { stepNumber: 2, description: "Combine, accounting for the subtraction.", workingLatex: "\\tfrac{dy}{dx} = e^x - (-e^{-x}) = e^x + e^{-x}", explanation: "The two minus signs (from the original subtraction and from differentiating \\(e^{-x}\\)) cancel. The result \\(e^x + e^{-x}\\) is \\(2\\cosh x\\)." }
      ],
      finalAnswer: "\\( e^x + e^{-x} \\)"
    }
  },
  {
    id: "y2df2-019",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 19",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 4e^x + 3e^{-x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the first term.", workingLatex: "\\tfrac{d}{dx}\\,4e^x = 4e^x", explanation: "Constant multiple of \\(e^x\\); the 4 stays put and \\(e^x\\) is its own derivative." },
        { stepNumber: 2, description: "Differentiate the second term.", workingLatex: "\\tfrac{d}{dx}\\,3e^{-x} = -3e^{-x}", explanation: "The \\(-1\\) in the exponent drops down and combines with the 3 to give \\(-3\\)." },
        { stepNumber: 3, description: "Add (sum rule).", workingLatex: "\\tfrac{dy}{dx} = 4e^x - 3e^{-x}", explanation: "Watch the sign on the second term — it flipped from positive to negative because of the negative exponent." }
      ],
      finalAnswer: "\\( 4e^x - 3e^{-x} \\)"
    }
  },
  {
    id: "y2df2-020",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 20",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 2e^{2x} + 5e^{3x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the first term.", workingLatex: "\\tfrac{d}{dx}\\,2e^{2x} = 2 \\cdot 2 e^{2x} = 4 e^{2x}", explanation: "Two factors of 2 multiply: one from the constant in front, one from the dropped-down exponent." },
        { stepNumber: 2, description: "Differentiate the second term.", workingLatex: "\\tfrac{d}{dx}\\,5e^{3x} = 5 \\cdot 3 e^{3x} = 15 e^{3x}", explanation: "Likewise: \\(5 \\times 3 = 15\\) is the new coefficient." },
        { stepNumber: 3, description: "Add (sum rule).", workingLatex: "\\tfrac{dy}{dx} = 4e^{2x} + 15 e^{3x}", explanation: "The exponentials \\(e^{2x}\\) and \\(e^{3x}\\) are different functions and cannot be combined." }
      ],
      finalAnswer: "\\( 4e^{2x} + 15e^{3x} \\)"
    }
  },
  {
    id: "y2df2-021",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 21",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 3e^{-2x} - 4e^{-3x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the first term.", workingLatex: "\\tfrac{d}{dx}\\,3e^{-2x} = 3 \\cdot (-2) e^{-2x} = -6 e^{-2x}", explanation: "Drop the \\(-2\\) and multiply by the constant 3, giving \\(-6\\)." },
        { stepNumber: 2, description: "Differentiate the second term.", workingLatex: "\\tfrac{d}{dx}\\,4e^{-3x} = 4 \\cdot (-3) e^{-3x} = -12 e^{-3x}", explanation: "Drop the \\(-3\\), multiply by 4: gives \\(-12\\)." },
        { stepNumber: 3, description: "Combine, respecting the subtraction in the original.", workingLatex: "\\tfrac{dy}{dx} = -6 e^{-2x} - (-12 e^{-3x}) = -6 e^{-2x} + 12 e^{-3x}", explanation: "The original \\(-\\) sign combines with the \\(-12\\) to give \\(+12\\). Sign-tracking is the chief slip here." }
      ],
      finalAnswer: "\\( -6e^{-2x} + 12e^{-3x} \\)"
    }
  },
  {
    id: "y2df2-022",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 22",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{3x} - e^{5x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate each term.", workingLatex: "\\tfrac{d}{dx}\\,e^{3x} = 3e^{3x},\\quad \\tfrac{d}{dx}\\,e^{5x} = 5e^{5x}", explanation: "Drop the exponent coefficient down in each case." },
        { stepNumber: 2, description: "Combine with the original subtraction.", workingLatex: "\\tfrac{dy}{dx} = 3e^{3x} - 5e^{5x}", explanation: "The minus sign from the question carries through directly to the answer." }
      ],
      finalAnswer: "\\( 3e^{3x} - 5e^{5x} \\)"
    }
  },
  // ── Basic logs ────
  {
    id: "y2df2-023",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 23",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln x \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the standard result.", workingLatex: "\\tfrac{d}{dx}\\,\\ln x = \\tfrac{1}{x}", explanation: "This is the defining derivative of the natural logarithm (for \\(x > 0\\)). It is the inverse-function counterpart of \\(\\tfrac{d}{dx} e^x = e^x\\)." },
        { stepNumber: 2, description: "Write the answer.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x}", explanation: "Nothing further to do." }
      ],
      finalAnswer: "\\( \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df2-024",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 24",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(2x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx}\\,\\ln(kx) = \\tfrac{1}{x}\\).", workingLatex: "\\tfrac{d}{dx}\\,\\ln(kx) = \\tfrac{1}{x}", explanation: "Because \\(\\ln(kx) = \\ln k + \\ln x\\), the constant \\(\\ln k\\) differentiates to zero. So the inner coefficient \\(k\\) plays no role in the answer — a very common point of confusion." },
        { stepNumber: 2, description: "Identify \\(k = 2\\).", workingLatex: "k = 2", explanation: "Read off the coefficient inside the log." },
        { stepNumber: 3, description: "Write the answer.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x}", explanation: "Note: the answer is \\(1/x\\), not \\(2/x\\) and not \\(1/(2x)\\). The \\(2\\) cancels: viewing it via the chain rule, \\(\\tfrac{d}{dx}\\ln(2x) = \\tfrac{1}{2x} \\cdot 2 = \\tfrac{1}{x}\\)." }
      ],
      finalAnswer: "\\( \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df2-025",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 25",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(3x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx}\\,\\ln(kx) = \\tfrac{1}{x}\\).", workingLatex: "\\tfrac{d}{dx}\\,\\ln(kx) = \\tfrac{1}{x}", explanation: "The constant inside the log adds a constant outside (via \\(\\ln(kx) = \\ln k + \\ln x\\)) which differentiates away. The result does not depend on \\(k\\)." },
        { stepNumber: 2, description: "Identify \\(k = 3\\).", workingLatex: "k = 3", explanation: "Coefficient inside the log." },
        { stepNumber: 3, description: "Write the answer.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x}", explanation: "Don't write \\(3/x\\) — the \\(3\\) really does disappear." }
      ],
      finalAnswer: "\\( \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df2-026",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 26",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(5x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx}\\,\\ln(kx) = \\tfrac{1}{x}\\).", workingLatex: "\\tfrac{d}{dx}\\,\\ln(kx) = \\tfrac{1}{x}", explanation: "Use \\(\\ln(kx) = \\ln k + \\ln x\\); the \\(\\ln k\\) is a constant and vanishes." },
        { stepNumber: 2, description: "Identify \\(k = 5\\).", workingLatex: "k = 5", explanation: "From inside the log." },
        { stepNumber: 3, description: "Write the answer.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x}", explanation: "Result is \\(1/x\\), independent of the constant 5." }
      ],
      finalAnswer: "\\( \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df2-027",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 27",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(x^2) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Use the log power law to simplify first.", workingLatex: "\\ln(x^2) = 2\\ln x", explanation: "Powers inside a log come out as multipliers: \\(\\ln(x^n) = n\\ln x\\). Simplifying before differentiating avoids needing the chain rule." },
        { stepNumber: 2, description: "Differentiate the simplified form.", workingLatex: "\\tfrac{d}{dx}\\,(2\\ln x) = 2 \\cdot \\tfrac{1}{x}", explanation: "Constant 2 stays out front; derivative of \\(\\ln x\\) is \\(1/x\\)." },
        { stepNumber: 3, description: "Write the answer.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{2}{x}", explanation: "Final answer is \\(2/x\\). Don't confuse with \\(1/x\\) — the power 2 genuinely shows up here, unlike a constant coefficient inside the log." }
      ],
      finalAnswer: "\\( \\tfrac{2}{x} \\)"
    }
  },
  {
    id: "y2df2-028",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 28",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(x^3) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the log power law.", workingLatex: "\\ln(x^3) = 3\\ln x", explanation: "Bring the exponent down as a multiplier." },
        { stepNumber: 2, description: "Differentiate.", workingLatex: "\\tfrac{d}{dx}\\,(3\\ln x) = 3 \\cdot \\tfrac{1}{x} = \\tfrac{3}{x}", explanation: "The 3 rides through differentiation; \\(\\ln x\\) becomes \\(1/x\\)." }
      ],
      finalAnswer: "\\( \\tfrac{3}{x} \\)"
    }
  },
  {
    id: "y2df2-029",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 29",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(x^5) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the log power law.", workingLatex: "\\ln(x^5) = 5\\ln x", explanation: "Exponent comes out the front." },
        { stepNumber: 2, description: "Differentiate.", workingLatex: "\\tfrac{d}{dx}\\,(5\\ln x) = \\tfrac{5}{x}", explanation: "Constant 5 × \\(1/x\\)." }
      ],
      finalAnswer: "\\( \\tfrac{5}{x} \\)"
    }
  },
  {
    id: "y2df2-030",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 30",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(\\sqrt{x}) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite the surd as a fractional power.", workingLatex: "\\sqrt{x} = x^{1/2}", explanation: "Surds inside logs are easier to handle as fractional exponents." },
        { stepNumber: 2, description: "Apply the log power law.", workingLatex: "\\ln(x^{1/2}) = \\tfrac{1}{2}\\ln x", explanation: "Bring the exponent \\(\\tfrac{1}{2}\\) down." },
        { stepNumber: 3, description: "Differentiate.", workingLatex: "\\tfrac{d}{dx}\\,\\left(\\tfrac{1}{2}\\ln x\\right) = \\tfrac{1}{2} \\cdot \\tfrac{1}{x} = \\tfrac{1}{2x}", explanation: "The \\(\\tfrac{1}{2}\\) multiplies \\(1/x\\) to give \\(1/(2x)\\)." }
      ],
      finalAnswer: "\\( \\tfrac{1}{2x} \\)"
    }
  },
  {
    id: "y2df2-031",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 31",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(1/x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite using log laws.", workingLatex: "\\ln(1/x) = \\ln(x^{-1}) = -\\ln x", explanation: "Writing \\(1/x\\) as \\(x^{-1}\\) lets the power law bring the \\(-1\\) out." },
        { stepNumber: 2, description: "Differentiate the simplified form.", workingLatex: "\\tfrac{d}{dx}\\,(-\\ln x) = -\\tfrac{1}{x}", explanation: "Constant multiple of \\(\\ln x\\); the minus sign rides through." }
      ],
      finalAnswer: "\\( -\\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df2-032",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 32",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 3\\ln x \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the constant-multiple rule.", workingLatex: "\\tfrac{d}{dx}\\,(3\\ln x) = 3 \\cdot \\tfrac{d}{dx}\\,\\ln x", explanation: "The 3 is a constant in front and stays put." },
        { stepNumber: 2, description: "Use \\(\\tfrac{d}{dx}\\,\\ln x = \\tfrac{1}{x}\\).", workingLatex: "\\tfrac{dy}{dx} = 3 \\cdot \\tfrac{1}{x} = \\tfrac{3}{x}", explanation: "Multiplying gives \\(3/x\\)." }
      ],
      finalAnswer: "\\( \\tfrac{3}{x} \\)"
    }
  },
  {
    id: "y2df2-033",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 33",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 7\\ln(2x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Recall \\(\\tfrac{d}{dx}\\,\\ln(kx) = \\tfrac{1}{x}\\).", workingLatex: "\\tfrac{d}{dx}\\,\\ln(2x) = \\tfrac{1}{x}", explanation: "The constant 2 inside the log makes no difference to the derivative; the answer is \\(1/x\\), not \\(2/(2x)\\) — those are equal, but the point is the 2 cancels." },
        { stepNumber: 2, description: "Apply the constant-multiple rule.", workingLatex: "\\tfrac{d}{dx}\\,(7\\ln(2x)) = 7 \\cdot \\tfrac{1}{x} = \\tfrac{7}{x}", explanation: "The outer 7 multiplies the derivative \\(1/x\\). The inner 2 plays no role." }
      ],
      finalAnswer: "\\( \\tfrac{7}{x} \\)"
    }
  },
  {
    id: "y2df2-034",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 34",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = -4\\ln x \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the constant-multiple rule.", workingLatex: "\\tfrac{d}{dx}\\,(-4\\ln x) = -4 \\cdot \\tfrac{d}{dx}\\,\\ln x", explanation: "Constant \\(-4\\) sits out the front. Sign is part of the constant." },
        { stepNumber: 2, description: "Use \\(\\tfrac{d}{dx}\\,\\ln x = \\tfrac{1}{x}\\).", workingLatex: "\\tfrac{dy}{dx} = -4 \\cdot \\tfrac{1}{x} = -\\tfrac{4}{x}", explanation: "Keep the negative sign." }
      ],
      finalAnswer: "\\( -\\tfrac{4}{x} \\)"
    }
  },
  {
    id: "y2df2-035",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 44",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(2x) + \\ln(3x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Note that each \\(\\ln(kx)\\) differentiates to \\(1/x\\).", workingLatex: "\\tfrac{d}{dx}\\,\\ln(2x) = \\tfrac{1}{x},\\quad \\tfrac{d}{dx}\\,\\ln(3x) = \\tfrac{1}{x}", explanation: "Because \\(\\ln(kx) = \\ln k + \\ln x\\), the constant inside the log always disappears on differentiation. Both terms have the same derivative." },
        { stepNumber: 2, description: "Add via the sum rule.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x} + \\tfrac{1}{x} = \\tfrac{2}{x}", explanation: "Two equal contributions of \\(1/x\\) give \\(2/x\\). Equivalently, \\(\\ln(2x) + \\ln(3x) = \\ln(6x^2) = \\ln 6 + 2\\ln x\\), whose derivative is \\(2/x\\)." }
      ],
      finalAnswer: "\\( \\tfrac{2}{x} \\)"
    }
  },
  {
    id: "y2df2-036",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 45",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln x - \\ln(x^2) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the log power law on the second term.", workingLatex: "\\ln(x^2) = 2\\ln x", explanation: "Bring the exponent out of the log." },
        { stepNumber: 2, description: "Combine the two log terms.", workingLatex: "y = \\ln x - 2\\ln x = -\\ln x", explanation: "Algebraic simplification before differentiating makes the next step trivial." },
        { stepNumber: 3, description: "Differentiate.", workingLatex: "\\tfrac{dy}{dx} = -\\tfrac{1}{x}", explanation: "Constant \\(-1\\) times the derivative of \\(\\ln x\\)." }
      ],
      finalAnswer: "\\( -\\tfrac{1}{x} \\)"
    }
  },
  // ── Mixed e + ln ────
  {
    id: "y2df2-037",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 35",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^x + \\ln x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate each term.", workingLatex: "\\tfrac{d}{dx}\\,e^x = e^x,\\quad \\tfrac{d}{dx}\\,\\ln x = \\tfrac{1}{x}", explanation: "Standard derivatives — each term uses one." },
        { stepNumber: 2, description: "Add via the sum rule.", workingLatex: "\\tfrac{dy}{dx} = e^x + \\tfrac{1}{x}", explanation: "No simplification possible; the two terms are of different types." }
      ],
      finalAnswer: "\\( e^x + \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df2-038",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 36",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = 2e^x + 3\\ln x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential term.", workingLatex: "\\tfrac{d}{dx}\\,(2e^x) = 2e^x", explanation: "Constant 2 stays in front; \\(e^x\\) is its own derivative." },
        { stepNumber: 2, description: "Differentiate the log term.", workingLatex: "\\tfrac{d}{dx}\\,(3\\ln x) = \\tfrac{3}{x}", explanation: "Constant 3 times \\(1/x\\)." },
        { stepNumber: 3, description: "Add via the sum rule.", workingLatex: "\\tfrac{dy}{dx} = 2e^x + \\tfrac{3}{x}", explanation: "Combine the two derivatives." }
      ],
      finalAnswer: "\\( 2e^x + \\tfrac{3}{x} \\)"
    }
  },
  {
    id: "y2df2-039",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 46",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = 4e^{2x} - 5\\ln x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential term.", workingLatex: "\\tfrac{d}{dx}\\,(4e^{2x}) = 4 \\cdot 2 e^{2x} = 8 e^{2x}", explanation: "Two factors of constants combine: the outer 4 and the dropped-down 2." },
        { stepNumber: 2, description: "Differentiate the log term.", workingLatex: "\\tfrac{d}{dx}\\,(5\\ln x) = \\tfrac{5}{x}", explanation: "Outer 5 times the standard derivative \\(1/x\\)." },
        { stepNumber: 3, description: "Combine, keeping the minus sign.", workingLatex: "\\tfrac{dy}{dx} = 8 e^{2x} - \\tfrac{5}{x}", explanation: "The subtraction in the original feeds through unchanged." }
      ],
      finalAnswer: "\\( 8e^{2x} - \\tfrac{5}{x} \\)"
    }
  },
  {
    id: "y2df2-040",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 47",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{3x} + \\ln(2x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential.", workingLatex: "\\tfrac{d}{dx}\\,e^{3x} = 3 e^{3x}", explanation: "Drop the 3 down." },
        { stepNumber: 2, description: "Differentiate the log.", workingLatex: "\\tfrac{d}{dx}\\,\\ln(2x) = \\tfrac{1}{x}", explanation: "The 2 inside the log vanishes (\\(\\ln(2x) = \\ln 2 + \\ln x\\))." },
        { stepNumber: 3, description: "Sum the two derivatives.", workingLatex: "\\tfrac{dy}{dx} = 3e^{3x} + \\tfrac{1}{x}", explanation: "Final form. The 2 from the original is gone for good." }
      ],
      finalAnswer: "\\( 3e^{3x} + \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df2-041",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 48",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^{-x} + \\ln(x^3) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential.", workingLatex: "\\tfrac{d}{dx}\\,e^{-x} = -e^{-x}", explanation: "Coefficient of \\(x\\) is \\(-1\\), so the \\(-1\\) comes down." },
        { stepNumber: 2, description: "Simplify the log first using the power law.", workingLatex: "\\ln(x^3) = 3\\ln x", explanation: "Bring out the exponent before differentiating." },
        { stepNumber: 3, description: "Differentiate the simplified log term.", workingLatex: "\\tfrac{d}{dx}\\,(3\\ln x) = \\tfrac{3}{x}", explanation: "Constant 3 times \\(1/x\\)." },
        { stepNumber: 4, description: "Sum the two derivatives.", workingLatex: "\\tfrac{dy}{dx} = -e^{-x} + \\tfrac{3}{x}", explanation: "Combine; here the power 3 inside the log does carry through (unlike a constant coefficient)." }
      ],
      finalAnswer: "\\( -e^{-x} + \\tfrac{3}{x} \\)"
    }
  },
  {
    id: "y2df2-042",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 49",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = 5e^{2x} - \\ln(4x) \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential.", workingLatex: "\\tfrac{d}{dx}\\,(5e^{2x}) = 5 \\cdot 2 e^{2x} = 10 e^{2x}", explanation: "Constants combine: outer 5, dropped 2." },
        { stepNumber: 2, description: "Differentiate the log.", workingLatex: "\\tfrac{d}{dx}\\,\\ln(4x) = \\tfrac{1}{x}", explanation: "Constant 4 inside the log disappears." },
        { stepNumber: 3, description: "Combine, respecting the subtraction.", workingLatex: "\\tfrac{dy}{dx} = 10 e^{2x} - \\tfrac{1}{x}", explanation: "Carry through the minus sign from the question." }
      ],
      finalAnswer: "\\( 10e^{2x} - \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df2-043",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 50",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^x + e^{-x} + \\ln x \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate each exponential.", workingLatex: "\\tfrac{d}{dx}\\,e^x = e^x,\\quad \\tfrac{d}{dx}\\,e^{-x} = -e^{-x}", explanation: "Sign flips on the second because the exponent has coefficient \\(-1\\)." },
        { stepNumber: 2, description: "Differentiate the log.", workingLatex: "\\tfrac{d}{dx}\\,\\ln x = \\tfrac{1}{x}", explanation: "Standard result." },
        { stepNumber: 3, description: "Sum the three derivatives.", workingLatex: "\\tfrac{dy}{dx} = e^x - e^{-x} + \\tfrac{1}{x}", explanation: "Linearity gives the direct sum. Watch the sign on \\(e^{-x}\\)." }
      ],
      finalAnswer: "\\( e^x - e^{-x} + \\tfrac{1}{x} \\)"
    }
  },
  {
    id: "y2df2-044",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 51",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = 3e^{-2x} + 4\\ln(x^2) \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential.", workingLatex: "\\tfrac{d}{dx}\\,3e^{-2x} = 3 \\cdot (-2) e^{-2x} = -6 e^{-2x}", explanation: "Drop the \\(-2\\) down, multiply by the outer 3." },
        { stepNumber: 2, description: "Simplify the log using the power law.", workingLatex: "4\\ln(x^2) = 4 \\cdot 2 \\ln x = 8\\ln x", explanation: "Bring the exponent 2 out, then combine with the outer 4." },
        { stepNumber: 3, description: "Differentiate the simplified log.", workingLatex: "\\tfrac{d}{dx}\\,8\\ln x = \\tfrac{8}{x}", explanation: "Constant 8 times \\(1/x\\)." },
        { stepNumber: 4, description: "Combine via the sum rule.", workingLatex: "\\tfrac{dy}{dx} = -6e^{-2x} + \\tfrac{8}{x}", explanation: "Two unrelated terms; nothing further simplifies." }
      ],
      finalAnswer: "\\( -6e^{-2x} + \\tfrac{8}{x} \\)"
    }
  },
  {
    id: "y2df2-045",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 52",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = 2\\ln(5x) + 3e^{4x} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the log term.", workingLatex: "\\tfrac{d}{dx}\\,2\\ln(5x) = 2 \\cdot \\tfrac{1}{x} = \\tfrac{2}{x}", explanation: "The 5 inside the log disappears; the outer 2 stays. Final factor of \\(1/x\\) becomes \\(2/x\\)." },
        { stepNumber: 2, description: "Differentiate the exponential term.", workingLatex: "\\tfrac{d}{dx}\\,3e^{4x} = 3 \\cdot 4 e^{4x} = 12 e^{4x}", explanation: "Outer 3 times dropped-down 4 gives coefficient 12." },
        { stepNumber: 3, description: "Sum via the sum rule.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{2}{x} + 12 e^{4x}", explanation: "Both terms feed straight into the answer." }
      ],
      finalAnswer: "\\( \\tfrac{2}{x} + 12e^{4x} \\)"
    }
  },
  // ── Gradient at specific x ────
  {
    id: "y2df2-046",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 37",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = e^x \\) at \\( x = 0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate.", workingLatex: "\\tfrac{dy}{dx} = e^x", explanation: "The natural exponential is its own derivative." },
        { stepNumber: 2, description: "Substitute \\(x = 0\\).", workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=0} = e^0 = 1", explanation: "Recall \\(e^0 = 1\\). This is why \\(y = e^x\\) crosses the y-axis at gradient 1 — a defining property of the function." }
      ],
      finalAnswer: "\\( 1 \\)"
    }
  },
  {
    id: "y2df2-047",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 38",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = \\ln x \\) at \\( x = 1 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x}", explanation: "Standard derivative of the natural log." },
        { stepNumber: 2, description: "Substitute \\(x = 1\\).", workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=1} = \\tfrac{1}{1} = 1", explanation: "At \\(x = 1\\) the curve \\(y = \\ln x\\) crosses the x-axis with gradient 1 — the natural counterpart to \\(y = e^x\\) at \\(x = 0\\)." }
      ],
      finalAnswer: "\\( 1 \\)"
    }
  },
  {
    id: "y2df2-048",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 39",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = e^{2x} \\) at \\( x = 0 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate.", workingLatex: "\\tfrac{dy}{dx} = 2 e^{2x}", explanation: "Apply \\(\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}\\) with \\(k = 2\\)." },
        { stepNumber: 2, description: "Substitute \\(x = 0\\).", workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=0} = 2 e^{0} = 2 \\cdot 1 = 2", explanation: "Again \\(e^0 = 1\\), so the gradient is just the leading coefficient 2." }
      ],
      finalAnswer: "\\( 2 \\)"
    }
  },
  {
    id: "y2df2-049",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 53",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = 2\\ln(3x) \\) at \\( x = 1 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate.", workingLatex: "\\tfrac{dy}{dx} = 2 \\cdot \\tfrac{1}{x} = \\tfrac{2}{x}", explanation: "The 3 inside the log vanishes; the outer 2 multiplies the standard \\(1/x\\)." },
        { stepNumber: 2, description: "Substitute \\(x = 1\\).", workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=1} = \\tfrac{2}{1} = 2", explanation: "Direct substitution." }
      ],
      finalAnswer: "\\( 2 \\)"
    }
  },
  {
    id: "y2df2-050",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 54",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = e^x + \\ln x \\) at \\( x = 1 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate term by term.", workingLatex: "\\tfrac{dy}{dx} = e^x + \\tfrac{1}{x}", explanation: "Linearity: each term keeps its standard derivative." },
        { stepNumber: 2, description: "Substitute \\(x = 1\\).", workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=1} = e^1 + \\tfrac{1}{1} = e + 1", explanation: "Leave \\(e\\) as a symbol rather than approximating — exact form is expected unless the question asks otherwise." }
      ],
      finalAnswer: "\\( e + 1 \\)"
    }
  },
  {
    id: "y2df2-051",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 55",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = 3e^{2x} - \\ln x \\) at \\( x = 1 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential term.", workingLatex: "\\tfrac{d}{dx}\\,3e^{2x} = 3 \\cdot 2 e^{2x} = 6 e^{2x}", explanation: "Drop the 2 down and combine with the outer 3 to give 6." },
        { stepNumber: 2, description: "Differentiate the log term.", workingLatex: "\\tfrac{d}{dx}\\,\\ln x = \\tfrac{1}{x}", explanation: "Standard derivative." },
        { stepNumber: 3, description: "Combine.", workingLatex: "\\tfrac{dy}{dx} = 6 e^{2x} - \\tfrac{1}{x}", explanation: "Keep the minus sign from the original." },
        { stepNumber: 4, description: "Substitute \\(x = 1\\).", workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=1} = 6 e^{2} - \\tfrac{1}{1} = 6 e^{2} - 1", explanation: "Exact form: \\(6e^2 - 1\\). Numerically \\(\\approx 43.33\\)." }
      ],
      finalAnswer: "\\( 6e^2 - 1 \\approx 43.33 \\)"
    }
  },
  // ── Second derivatives ────
  {
    id: "y2df2-052",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 40",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find \\( d^2y/dx^2 \\) when \\( y = e^x \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate once.", workingLatex: "\\tfrac{dy}{dx} = e^x", explanation: "The exponential is its own derivative." },
        { stepNumber: 2, description: "Differentiate again.", workingLatex: "\\tfrac{d^2y}{dx^2} = e^x", explanation: "Same rule applied twice. In fact every derivative of \\(e^x\\) is \\(e^x\\)." }
      ],
      finalAnswer: "\\( e^x \\)"
    }
  },
  {
    id: "y2df2-053",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 56",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( d^2y/dx^2 \\) when \\( y = \\ln x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate once.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x} = x^{-1}", explanation: "Standard derivative. Rewriting as \\(x^{-1}\\) makes the next differentiation easier via the power rule." },
        { stepNumber: 2, description: "Differentiate again using the power rule.", workingLatex: "\\tfrac{d^2y}{dx^2} = -1 \\cdot x^{-2} = -\\tfrac{1}{x^2}", explanation: "Power rule: bring the \\(-1\\) down and subtract 1 from the exponent. A common slip is to drop the minus sign." }
      ],
      finalAnswer: "\\( -\\tfrac{1}{x^2} \\)"
    }
  },
  {
    id: "y2df2-054",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 57",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( d^2y/dx^2 \\) when \\( y = e^{3x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate once.", workingLatex: "\\tfrac{dy}{dx} = 3 e^{3x}", explanation: "Apply \\(\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}\\) with \\(k = 3\\)." },
        { stepNumber: 2, description: "Differentiate again.", workingLatex: "\\tfrac{d^2y}{dx^2} = 3 \\cdot 3 e^{3x} = 9 e^{3x}", explanation: "The 3 already out front combines with another factor of 3 from the new differentiation." }
      ],
      finalAnswer: "\\( 9e^{3x} \\)"
    }
  },
  {
    id: "y2df2-055",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 58",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find \\( d^2y/dx^2 \\) when \\( y = e^{-2x} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate once.", workingLatex: "\\tfrac{dy}{dx} = -2 e^{-2x}", explanation: "Drop the \\(-2\\) down." },
        { stepNumber: 2, description: "Differentiate again.", workingLatex: "\\tfrac{d^2y}{dx^2} = (-2)(-2) e^{-2x} = 4 e^{-2x}", explanation: "The two negative signs cancel: \\((-2)(-2) = +4\\). A common slip is to keep the sign negative." }
      ],
      finalAnswer: "\\( 4e^{-2x} \\)"
    }
  },
  {
    id: "y2df2-056",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 59",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Show that \\( y = e^{kx} \\) satisfies \\( \\tfrac{d^2y}{dx^2} = k^2 y \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp", "proof"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate once.", workingLatex: "\\tfrac{dy}{dx} = k e^{kx}", explanation: "Apply \\(\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}\\); here \\(k\\) is a constant." },
        { stepNumber: 2, description: "Differentiate again.", workingLatex: "\\tfrac{d^2y}{dx^2} = k \\cdot k e^{kx} = k^2 e^{kx}", explanation: "A second factor of \\(k\\) drops down, giving \\(k^2\\)." },
        { stepNumber: 3, description: "Replace \\(e^{kx}\\) with \\(y\\) to identify the relation.", workingLatex: "\\tfrac{d^2y}{dx^2} = k^2 \\cdot e^{kx} = k^2 y \\quad\\blacksquare", explanation: "Since \\(y = e^{kx}\\), we substitute back to express the second derivative in terms of \\(y\\). This is why \\(e^{kx}\\) is the natural building block for second-order linear ODEs." }
      ],
      finalAnswer: "\\( y'' = k^2 y \\). \\(\\blacksquare\\)"
    }
  },
  // ── a^x ────
  {
    id: "y2df2-057",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 60",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = 2^x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp", "a^x"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite \\(2^x\\) as an exponential with base \\(e\\).", workingLatex: "2 = e^{\\ln 2} \\;\\Rightarrow\\; 2^x = e^{x\\ln 2}", explanation: "Any base \\(a > 0\\) can be written as \\(e^{\\ln a}\\). Raising both sides to the power \\(x\\) gives \\(a^x = e^{x \\ln a}\\). This trick reduces the problem to differentiating \\(e^{kx}\\)." },
        { stepNumber: 2, description: "Identify the linear-exponent coefficient.", workingLatex: "k = \\ln 2", explanation: "Here the exponent is \\((\\ln 2)\\,x\\), so the constant \\(k\\) we drop down is \\(\\ln 2\\)." },
        { stepNumber: 3, description: "Apply \\(\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{x\\ln 2} = (\\ln 2)\\,e^{x\\ln 2}", explanation: "Drop \\(\\ln 2\\) out front." },
        { stepNumber: 4, description: "Convert back to base 2.", workingLatex: "\\tfrac{dy}{dx} = 2^x \\ln 2", explanation: "Using \\(e^{x\\ln 2} = 2^x\\) again. This is the general rule \\(\\tfrac{d}{dx}\\,a^x = a^x \\ln a\\)." }
      ],
      finalAnswer: "\\( 2^x \\ln 2 \\)"
    }
  },
  {
    id: "y2df2-058",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 61",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = 3^x \\).",
    marks: 2,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx}\\,a^x = a^x \\ln a\\).", workingLatex: "\\tfrac{d}{dx}\\,a^x = a^x \\ln a", explanation: "Derived by writing \\(a^x = e^{x\\ln a}\\) and applying the chain rule. The \\(\\ln a\\) is the chain-rule factor for the linear exponent." },
        { stepNumber: 2, description: "Identify \\(a = 3\\).", workingLatex: "a = 3", explanation: "The base of the exponential is 3." },
        { stepNumber: 3, description: "Substitute into the rule.", workingLatex: "\\tfrac{dy}{dx} = 3^x \\ln 3", explanation: "Keep \\(\\ln 3\\) symbolic. A common slip is to forget the \\(\\ln a\\) factor — \\(\\tfrac{d}{dx}\\,3^x \\ne 3^x\\)." }
      ],
      finalAnswer: "\\( 3^x \\ln 3 \\)"
    }
  },
  {
    id: "y2df2-059",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 62",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = 5^x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx}\\,a^x = a^x \\ln a\\).", workingLatex: "\\tfrac{d}{dx}\\,a^x = a^x \\ln a", explanation: "Same general result for exponentials with arbitrary positive base." },
        { stepNumber: 2, description: "Identify \\(a = 5\\).", workingLatex: "a = 5", explanation: "Reading off the base." },
        { stepNumber: 3, description: "Substitute and write the answer.", workingLatex: "\\tfrac{dy}{dx} = 5^x \\ln 5", explanation: "Don't drop the \\(\\ln 5\\) factor — it's essential." }
      ],
      finalAnswer: "\\( 5^x \\ln 5 \\)"
    }
  },
  {
    id: "y2df2-060",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 63",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = 10^x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the rule \\(\\tfrac{d}{dx}\\,a^x = a^x \\ln a\\).", workingLatex: "\\tfrac{d}{dx}\\,a^x = a^x \\ln a", explanation: "The general result." },
        { stepNumber: 2, description: "Identify \\(a = 10\\).", workingLatex: "a = 10", explanation: "Base of the exponential." },
        { stepNumber: 3, description: "Write the answer.", workingLatex: "\\tfrac{dy}{dx} = 10^x \\ln 10", explanation: "Note that \\(\\ln 10\\) is the natural log of 10 (about \\(2.303\\)), not the common log; we always use \\(\\ln\\) (base \\(e\\)) in this rule." }
      ],
      finalAnswer: "\\( 10^x \\ln 10 \\)"
    }
  },
  // ── Tangents / stationary points ────
  {
    id: "y2df2-061",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 64",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the equation of the tangent to \\( y = e^x \\) at the point where \\( x = 0 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp", "tangent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate to get the gradient function.", workingLatex: "\\tfrac{dy}{dx} = e^x", explanation: "\\(y = e^x\\) is its own derivative." },
        { stepNumber: 2, description: "Compute the gradient at \\(x = 0\\).", workingLatex: "m = e^0 = 1", explanation: "Plug in \\(x=0\\): the gradient at the y-axis is 1." },
        { stepNumber: 3, description: "Find the point on the curve.", workingLatex: "y(0) = e^0 = 1,\\;\\; \\text{point } (0, 1)", explanation: "Substitute back into the original curve to get the y-coordinate." },
        { stepNumber: 4, description: "Use the point-gradient form of a line.", workingLatex: "y - 1 = 1 \\cdot (x - 0)", explanation: "\\(y - y_0 = m(x - x_0)\\) with \\(m=1\\), \\((x_0, y_0) = (0, 1)\\)." },
        { stepNumber: 5, description: "Simplify.", workingLatex: "y = x + 1", explanation: "Expand and tidy. This tangent is the line through \\((0,1)\\) with gradient 1." }
      ],
      finalAnswer: "\\( y = x + 1 \\)."
    }
  },
  {
    id: "y2df2-062",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 65",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the equation of the tangent to \\( y = \\ln x \\) at \\( x = e \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["log", "tangent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate to get the gradient function.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x}", explanation: "Standard derivative of \\(\\ln x\\)." },
        { stepNumber: 2, description: "Compute the gradient at \\(x = e\\).", workingLatex: "m = \\tfrac{1}{e}", explanation: "Substitute \\(x = e\\)." },
        { stepNumber: 3, description: "Find the point on the curve.", workingLatex: "y(e) = \\ln e = 1,\\;\\; \\text{point } (e, 1)", explanation: "Because \\(\\ln e = 1\\) by definition." },
        { stepNumber: 4, description: "Apply the point-gradient form.", workingLatex: "y - 1 = \\tfrac{1}{e}(x - e)", explanation: "Use \\(y - y_0 = m(x - x_0)\\)." },
        { stepNumber: 5, description: "Simplify.", workingLatex: "y = \\tfrac{x}{e} - 1 + 1 = \\tfrac{x}{e}", explanation: "The constant terms cancel: \\(-\\tfrac{1}{e} \\cdot e = -1\\), then \\(+1\\) restores it. So the tangent passes through the origin." }
      ],
      finalAnswer: "\\( y = \\tfrac{x}{e} \\)."
    }
  },
  {
    id: "y2df2-063",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 66",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the stationary point of \\( y = e^x - x \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp", "stationary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate.", workingLatex: "\\tfrac{dy}{dx} = e^x - 1", explanation: "Linearity: \\(\\tfrac{d}{dx}\\,e^x = e^x\\) and \\(\\tfrac{d}{dx}\\,x = 1\\)." },
        { stepNumber: 2, description: "Set the derivative to zero.", workingLatex: "e^x - 1 = 0 \\;\\Rightarrow\\; e^x = 1", explanation: "Stationary points occur where the gradient vanishes." },
        { stepNumber: 3, description: "Solve for \\(x\\).", workingLatex: "x = 0", explanation: "Take the natural log of both sides: \\(\\ln(e^x) = \\ln 1\\) gives \\(x = 0\\)." },
        { stepNumber: 4, description: "Find the y-coordinate.", workingLatex: "y(0) = e^0 - 0 = 1", explanation: "Substitute back into the curve. Stationary point at \\((0, 1)\\)." },
        { stepNumber: 5, description: "Classify using the second derivative.", workingLatex: "\\tfrac{d^2y}{dx^2} = e^x \\Rightarrow \\left.\\tfrac{d^2y}{dx^2}\\right|_{x=0} = 1 > 0", explanation: "Positive second derivative means this is a minimum." }
      ],
      finalAnswer: "Stationary point at \\( (0, 1) \\) (minimum)."
    }
  },
  {
    id: "y2df2-064",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 71",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the stationary point of \\( y = \\ln x - x \\), and classify it.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["log", "stationary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x} - 1", explanation: "Linearity: \\(\\tfrac{d}{dx}\\,\\ln x = 1/x\\) and \\(\\tfrac{d}{dx}\\,x = 1\\)." },
        { stepNumber: 2, description: "Set the derivative to zero.", workingLatex: "\\tfrac{1}{x} - 1 = 0 \\;\\Rightarrow\\; \\tfrac{1}{x} = 1", explanation: "Solve the stationary-point equation." },
        { stepNumber: 3, description: "Solve for \\(x\\).", workingLatex: "x = 1", explanation: "Reciprocate (or multiply both sides by \\(x\\))." },
        { stepNumber: 4, description: "Find the y-coordinate.", workingLatex: "y(1) = \\ln 1 - 1 = 0 - 1 = -1", explanation: "Recall \\(\\ln 1 = 0\\)." },
        { stepNumber: 5, description: "Compute the second derivative.", workingLatex: "\\tfrac{d^2y}{dx^2} = -\\tfrac{1}{x^2}", explanation: "Differentiate \\(\\tfrac{1}{x} - 1 = x^{-1} - 1\\) using the power rule: \\(-1 \\cdot x^{-2} = -1/x^2\\)." },
        { stepNumber: 6, description: "Evaluate the second derivative at \\(x = 1\\).", workingLatex: "\\left.\\tfrac{d^2y}{dx^2}\\right|_{x=1} = -\\tfrac{1}{1^2} = -1 < 0", explanation: "Negative second derivative means the stationary point is a maximum." },
        { stepNumber: 7, description: "State the conclusion.", workingLatex: "\\text{Maximum at } (1, -1)", explanation: "Combine: stationary point is at \\((1, -1)\\) and is a local (in fact global) maximum, since \\(\\ln x - x \\to -\\infty\\) at both ends of the domain \\(x > 0\\)." }
      ],
      finalAnswer: "Maximum at \\( (1, -1) \\)."
    }
  },
  // ── General / combined ────
  {
    id: "y2df2-065",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 41",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Given \\( y = Ae^{kx} \\), find \\( \\tfrac{dy}{dx} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply \\(\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}\\).", workingLatex: "\\tfrac{d}{dx}\\,e^{kx} = k e^{kx}", explanation: "Drop the coefficient \\(k\\) down from the exponent." },
        { stepNumber: 2, description: "Multiply by the constant \\(A\\).", workingLatex: "\\tfrac{d}{dx}\\,(Ae^{kx}) = A \\cdot k e^{kx} = Ak e^{kx}", explanation: "Constant multiple rule. Both \\(A\\) and \\(k\\) are constants and combine into the leading coefficient. This is the template for any exponential of the form \\(A e^{kx}\\)." }
      ],
      finalAnswer: "\\( Ak e^{kx} \\)."
    }
  },
  {
    id: "y2df2-066",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 42",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln x + x^2 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the log term.", workingLatex: "\\tfrac{d}{dx}\\,\\ln x = \\tfrac{1}{x}", explanation: "Standard derivative." },
        { stepNumber: 2, description: "Differentiate the power term.", workingLatex: "\\tfrac{d}{dx}\\,x^2 = 2x", explanation: "Power rule." },
        { stepNumber: 3, description: "Sum the derivatives.", workingLatex: "\\tfrac{dy}{dx} = \\tfrac{1}{x} + 2x", explanation: "Sum rule." }
      ],
      finalAnswer: "\\( \\tfrac{1}{x} + 2x \\)"
    }
  },
  {
    id: "y2df2-067",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 43",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = e^x + x^3 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential.", workingLatex: "\\tfrac{d}{dx}\\,e^x = e^x", explanation: "Standard result." },
        { stepNumber: 2, description: "Differentiate the cubic.", workingLatex: "\\tfrac{d}{dx}\\,x^3 = 3x^2", explanation: "Power rule." },
        { stepNumber: 3, description: "Sum the derivatives.", workingLatex: "\\tfrac{dy}{dx} = e^x + 3x^2", explanation: "Sum rule." }
      ],
      finalAnswer: "\\( e^x + 3x^2 \\)"
    }
  },
  {
    id: "y2df2-068",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 67",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = e^x - \\ln x \\) at \\( x = 1 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate term by term.", workingLatex: "\\tfrac{dy}{dx} = e^x - \\tfrac{1}{x}", explanation: "Linearity, with the subtraction carried through." },
        { stepNumber: 2, description: "Substitute \\(x = 1\\).", workingLatex: "\\left.\\tfrac{dy}{dx}\\right|_{x=1} = e^1 - \\tfrac{1}{1} = e - 1", explanation: "Leave \\(e\\) symbolic for an exact answer." }
      ],
      finalAnswer: "\\( e - 1 \\)"
    }
  },
  {
    id: "y2df2-069",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 68",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(x^2 \\cdot e^x) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the log of a product: \\(\\ln(AB) = \\ln A + \\ln B\\).", workingLatex: "\\ln(x^2 \\cdot e^x) = \\ln(x^2) + \\ln(e^x)", explanation: "Splitting the log of a product before differentiating sidesteps having to use the chain rule on a complicated argument." },
        { stepNumber: 2, description: "Simplify each piece using log laws.", workingLatex: "\\ln(x^2) = 2\\ln x, \\quad \\ln(e^x) = x", explanation: "Power law on the first, inverse-function on the second: \\(\\ln\\) and \\(e^{(\\cdot)}\\) are inverses, so \\(\\ln(e^x) = x\\)." },
        { stepNumber: 3, description: "Rewrite \\(y\\) in simplified form.", workingLatex: "y = 2\\ln x + x", explanation: "Now an easy combination of \\(\\ln x\\) and a polynomial." },
        { stepNumber: 4, description: "Differentiate term by term.", workingLatex: "\\tfrac{dy}{dx} = 2 \\cdot \\tfrac{1}{x} + 1 = \\tfrac{2}{x} + 1", explanation: "Constant 2 times \\(1/x\\), plus the derivative of \\(x\\) which is 1." }
      ],
      finalAnswer: "\\( \\tfrac{2}{x} + 1 \\)"
    }
  },
  {
    id: "y2df2-070",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 69",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\ln(x^3 / e^{2x}) \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Apply the log of a quotient: \\(\\ln(A/B) = \\ln A - \\ln B\\).", workingLatex: "\\ln\\!\\left(\\tfrac{x^3}{e^{2x}}\\right) = \\ln(x^3) - \\ln(e^{2x})", explanation: "Splitting before differentiating is much easier than a chain-rule attack on the quotient inside." },
        { stepNumber: 2, description: "Simplify each piece using log laws.", workingLatex: "\\ln(x^3) = 3\\ln x, \\quad \\ln(e^{2x}) = 2x", explanation: "Power law on the first; \\(\\ln(e^{u}) = u\\) on the second (inverse functions)." },
        { stepNumber: 3, description: "Rewrite \\(y\\) in simplified form.", workingLatex: "y = 3\\ln x - 2x", explanation: "Now a sum of standard terms." },
        { stepNumber: 4, description: "Differentiate term by term.", workingLatex: "\\tfrac{dy}{dx} = 3 \\cdot \\tfrac{1}{x} - 2 = \\tfrac{3}{x} - 2", explanation: "Constant 3 times \\(1/x\\), minus the derivative of \\(2x\\) which is 2." }
      ],
      finalAnswer: "\\( \\tfrac{3}{x} - 2 \\)"
    }
  },
  {
    id: "y2df2-071",
    topicRef: "y2df2",
    topicTitle: "Differentiating Exponentials and Logarithms 70",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = 6e^x - 5\\ln x + 4 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["exp", "log"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Differentiate the exponential term.", workingLatex: "\\tfrac{d}{dx}\\,(6e^x) = 6e^x", explanation: "Constant 6 stays put; \\(e^x\\) is its own derivative." },
        { stepNumber: 2, description: "Differentiate the log term.", workingLatex: "\\tfrac{d}{dx}\\,(5\\ln x) = \\tfrac{5}{x}", explanation: "Constant 5 times \\(1/x\\)." },
        { stepNumber: 3, description: "Differentiate the constant term.", workingLatex: "\\tfrac{d}{dx}\\,(4) = 0", explanation: "The derivative of any constant is zero." },
        { stepNumber: 4, description: "Combine, respecting signs.", workingLatex: "\\tfrac{dy}{dx} = 6e^x - \\tfrac{5}{x}", explanation: "The constant 4 contributes nothing; the minus sign in front of the log term is preserved." }
      ],
      finalAnswer: "\\( 6e^x - \\tfrac{5}{x} \\)"
    }
  },
];
