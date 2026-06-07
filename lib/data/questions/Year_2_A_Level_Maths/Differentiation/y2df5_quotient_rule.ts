import { Question } from "@/lib/types";

/**
 * Year 2 — Differentiation § 9.5 The Quotient Rule
 * Ref: y2df5
 * 71 questions. Apply (u/v)' = (u'v − uv')/v² to polynomial/polynomial,
 * polynomial/exponential, polynomial/log, and trig quotients.
 */
export const questions: Question[] = [
  {
    id: "y2df5-001",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 01",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\sin x}{x} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\sin x,\\quad v = x", explanation: "The function is a quotient with \\(\\sin x\\) on top and \\(x\\) on the bottom. The numerator is \\(u\\), the denominator is \\(v\\) — that ordering is what makes the quotient rule formula work." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\cos x", explanation: "The derivative of \\(\\sin x\\) is \\(\\cos x\\) — a standard result you should know without thinking." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "The derivative of \\(x\\) with respect to \\(x\\) is \\(1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Write the formula symbolically before substituting. The numerator is \\(u'v - uv'\\) in that exact order — many students slip and write \\(uv' - u'v\\), which has the sign flipped." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^2}", explanation: "Replace each symbol with its value from steps 1–3. Don't simplify yet — keeping every piece visible makes it easy to check the substitution." },
        { stepNumber: 6, description: "Simplify.", workingLatex: "\\frac{dy}{dx} = \\frac{x\\cos x - \\sin x}{x^2}", explanation: "Tidy the numerator and keep \\(x^2\\) in the denominator. There is no obvious common factor to cancel, so this is as simple as it gets." }
      ],
      finalAnswer: "\\( \\frac{x\\cos x - \\sin x}{x^2} \\)"
    }
  },
  // ── Polynomial/polynomial ────
  {
    id: "y2df5-002",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 02",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1}{x+1} \\) using the quotient rule.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1,\\quad v = x+1", explanation: "Top of the fraction is the constant \\(1\\); bottom is \\(x+1\\). Even though \\(u\\) is just a number, we still feed it through the quotient rule." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 0", explanation: "The derivative of a constant is zero. Write this out explicitly — it's the term that kills the \\(u'v\\) part of the numerator." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "The derivative of \\(x+1\\) is \\(1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Write the formula before substituting. The numerator order is \\(u'v - uv'\\) — getting the sign right here is the single most common quotient rule slip." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{0\\cdot(x+1) - 1\\cdot 1}{(x+1)^2}", explanation: "Slot each piece in. The first term vanishes because \\(u'=0\\); the second term becomes \\(-1\\)." },
        { stepNumber: 6, description: "Simplify.", workingLatex: "\\frac{dy}{dx} = -\\frac{1}{(x+1)^2}", explanation: "Keep the denominator factored as \\((x+1)^2\\) — do not expand it. The minus sign comes from \\(-uv'\\) in the numerator." }
      ],
      finalAnswer: "\\( -\\frac{1}{(x+1)^2} \\)"
    }
  },
  {
    id: "y2df5-003",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 03",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x}{x+1} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x,\\quad v = x+1", explanation: "Numerator on top, denominator on bottom — the standard split." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "The derivative of \\(x\\) is \\(1\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "The derivative of \\(x+1\\) is also \\(1\\) — the constant drops out." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form first. The numerator order \\(u'v - uv'\\) matters: swapping it flips the sign of the answer." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot(x+1) - x\\cdot 1}{(x+1)^2}", explanation: "Plug in each derivative and each factor exactly as named." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{(x+1) - x}{(x+1)^2} = \\frac{1}{(x+1)^2}", explanation: "The \\(x\\) terms cancel and leave just \\(1\\). Keep the denominator factored." }
      ],
      finalAnswer: "\\( \\frac{1}{(x+1)^2} \\)"
    }
  },
  {
    id: "y2df5-004",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 04",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x+1}{x-1} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x+1,\\quad v = x-1", explanation: "Both top and bottom are linear in \\(x\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "The derivative of \\(x+1\\) is \\(1\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "The derivative of \\(x-1\\) is \\(1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Numerator is \\(u'v - uv'\\) — that minus sign is doing all the work here." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot(x-1) - (x+1)\\cdot 1}{(x-1)^2}", explanation: "Bracket the \\(x+1\\) when substituting so the minus sign distributes correctly across both of its terms." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{(x-1) - (x+1)}{(x-1)^2} = -\\frac{2}{(x-1)^2}", explanation: "Expand the minus: \\(x - 1 - x - 1 = -2\\). The \\(x\\)'s cancel and the constants combine." }
      ],
      finalAnswer: "\\( -\\frac{2}{(x-1)^2} \\)"
    }
  },
  {
    id: "y2df5-005",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 05",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x-1}{x+1} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x-1,\\quad v = x+1", explanation: "This is the previous question with top and bottom swapped — expect the answer to flip sign." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "Derivative of \\(x-1\\) is \\(1\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x+1\\) is \\(1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form, then substitute." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot(x+1) - (x-1)\\cdot 1}{(x+1)^2}", explanation: "Bracket the \\(x-1\\) so the minus distributes correctly." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{(x+1) - (x-1)}{(x+1)^2} = \\frac{2}{(x+1)^2}", explanation: "\\(x+1 - x+1 = 2\\). The \\(x\\)'s cancel; the constants now add (since the minus turns \\(-1\\) into \\(+1\\))." }
      ],
      finalAnswer: "\\( \\frac{2}{(x+1)^2} \\)"
    }
  },
  {
    id: "y2df5-006",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 06",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x}{2x+1} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x,\\quad v = 2x+1", explanation: "Linear top, linear bottom." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "Derivative of \\(x\\) is \\(1\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2", explanation: "Derivative of \\(2x+1\\) is \\(2\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Write the formula before substituting." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot(2x+1) - x\\cdot 2}{(2x+1)^2}", explanation: "Slot each piece in carefully." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{(2x+1) - 2x}{(2x+1)^2} = \\frac{1}{(2x+1)^2}", explanation: "The \\(2x\\) terms cancel, leaving just \\(1\\) in the numerator." }
      ],
      finalAnswer: "\\( \\frac{1}{(2x+1)^2} \\)"
    }
  },
  {
    id: "y2df5-007",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 07",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{2x-1}{x+3} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 2x-1,\\quad v = x+3", explanation: "Linear over linear." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2", explanation: "Derivative of \\(2x-1\\) is \\(2\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x+3\\) is \\(1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first; sign on the numerator is \\(u'v - uv'\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2(x+3) - (2x-1)\\cdot 1}{(x+3)^2}", explanation: "Bracket the \\(2x-1\\); the minus must distribute across both terms." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{2x + 6 - 2x + 1}{(x+3)^2} = \\frac{7}{(x+3)^2}", explanation: "The \\(2x\\) terms cancel, and \\(6 + 1 = 7\\)." }
      ],
      finalAnswer: "\\( \\frac{7}{(x+3)^2} \\)"
    }
  },
  {
    id: "y2df5-008",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 08",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{2x+1}{3x-1} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 2x+1,\\quad v = 3x-1", explanation: "Linear top, linear bottom." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2", explanation: "Constant coefficient of \\(x\\) in \\(u\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 3", explanation: "Constant coefficient of \\(x\\) in \\(v\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Numerator is \\(u'v - uv'\\) — that order matters." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2(3x-1) - (2x+1)\\cdot 3}{(3x-1)^2}", explanation: "Substitute, keeping brackets around the \\(2x+1\\)." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{6x - 2 - 6x - 3}{(3x-1)^2} = -\\frac{5}{(3x-1)^2}", explanation: "The \\(6x\\) terms cancel; \\(-2 - 3 = -5\\)." }
      ],
      finalAnswer: "\\( -\\frac{5}{(3x-1)^2} \\)"
    }
  },
  {
    id: "y2df5-009",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 09",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{3x+2}{x-4} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 3x+2,\\quad v = x-4", explanation: "Linear over linear." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 3", explanation: "Derivative of \\(3x+2\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x-4\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{3(x-4) - (3x+2)\\cdot 1}{(x-4)^2}", explanation: "Bracket the numerator term so the minus distributes." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{3x - 12 - 3x - 2}{(x-4)^2} = -\\frac{14}{(x-4)^2}", explanation: "The \\(3x\\) terms cancel; \\(-12 - 2 = -14\\)." }
      ],
      finalAnswer: "\\( -\\frac{14}{(x-4)^2} \\)"
    }
  },
  {
    id: "y2df5-010",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 10",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x}{x^2+1} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x,\\quad v = x^2+1", explanation: "Linear over quadratic — the denominator is never zero, so the function is smooth on \\(\\mathbb{R}\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Power rule on \\(x^2\\); the \\(+1\\) drops out." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula before substitution." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot(x^2+1) - x\\cdot 2x}{(x^2+1)^2}", explanation: "Slot in each piece carefully." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{x^2 + 1 - 2x^2}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}", explanation: "\\(x^2 - 2x^2 = -x^2\\). The numerator changes sign at \\(x = \\pm 1\\), corresponding to stationary points." }
      ],
      finalAnswer: "\\( \\frac{1 - x^2}{(x^2+1)^2} \\)"
    }
  },
  {
    id: "y2df5-011",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x^2}{x+1} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x^2,\\quad v = x+1", explanation: "Quadratic over linear." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2x", explanation: "Power rule." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x+1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2x(x+1) - x^2\\cdot 1}{(x+1)^2}", explanation: "Plug in the four pieces." },
        { stepNumber: 6, description: "Expand the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{2x^2 + 2x - x^2}{(x+1)^2} = \\frac{x^2 + 2x}{(x+1)^2}", explanation: "Combine like terms: \\(2x^2 - x^2 = x^2\\)." },
        { stepNumber: 7, description: "Factor the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{x(x+2)}{(x+1)^2}", explanation: "Pull \\(x\\) out as a common factor. This factored form makes it easy to spot stationary points at \\(x = 0\\) and \\(x = -2\\)." }
      ],
      finalAnswer: "\\( \\frac{x(x+2)}{(x+1)^2} \\)"
    }
  },
  {
    id: "y2df5-012",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 12",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x^2-1}{x^2+1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x^2-1,\\quad v = x^2+1", explanation: "Two similar quadratics — expect significant cancellation in the numerator." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2x", explanation: "Power rule on \\(x^2\\); the \\(-1\\) drops out." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Same derivative — both \\(u\\) and \\(v\\) differ only by a constant." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula before substitution. Numerator order \\(u'v - uv'\\) (not \\(uv' - u'v\\)) — this is the most common quotient rule slip." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2x(x^2+1) - (x^2-1)\\cdot 2x}{(x^2+1)^2}", explanation: "Bracket each factor. The common \\(2x\\) hints at factoring shortly." },
        { stepNumber: 6, description: "Factor \\(2x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{2x[(x^2+1) - (x^2-1)]}{(x^2+1)^2}", explanation: "Both terms in the numerator share a factor of \\(2x\\). Pulling it out makes the cancellation obvious." },
        { stepNumber: 7, description: "Expand the bracket.", workingLatex: "(x^2+1) - (x^2-1) = x^2 + 1 - x^2 + 1", explanation: "Distribute the minus across both terms of the second bracket — that minus is doing the work." },
        { stepNumber: 8, description: "Simplify the bracket.", workingLatex: "= 2", explanation: "The \\(x^2\\) terms cancel; \\(1 + 1 = 2\\)." },
        { stepNumber: 9, description: "Combine.", workingLatex: "\\frac{dy}{dx} = \\frac{2x\\cdot 2}{(x^2+1)^2} = \\frac{4x}{(x^2+1)^2}", explanation: "Slot the bracket value back in. Stationary at \\(x=0\\); the denominator stays factored." }
      ],
      finalAnswer: "\\( \\frac{4x}{(x^2+1)^2} \\)"
    }
  },
  {
    id: "y2df5-013",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 13",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x^2+1}{x-1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x^2+1,\\quad v = x-1", explanation: "Quadratic over linear. The denominator is zero at \\(x=1\\), so the function has a vertical asymptote there." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2x", explanation: "Power rule on \\(x^2\\); the \\(+1\\) drops." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x-1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form before substituting. Numerator order \\(u'v - uv'\\) — the single most common quotient rule slip is flipping that sign." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2x(x-1) - (x^2+1)\\cdot 1}{(x-1)^2}", explanation: "Bracket the \\(x^2+1\\); the minus has to reach both terms." },
        { stepNumber: 6, description: "Distribute \\(2x\\) into the first bracket.", workingLatex: "2x(x-1) = 2x^2 - 2x", explanation: "Standard binomial expansion." },
        { stepNumber: 7, description: "Rewrite the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{2x^2 - 2x - x^2 - 1}{(x-1)^2}", explanation: "Subtract every term inside the second bracket: \\(-(x^2+1) = -x^2 - 1\\)." },
        { stepNumber: 8, description: "Collect like terms.", workingLatex: "\\frac{dy}{dx} = \\frac{x^2 - 2x - 1}{(x-1)^2}", explanation: "\\(2x^2 - x^2 = x^2\\); the \\(-2x\\) and \\(-1\\) remain. Keep the denominator factored." }
      ],
      finalAnswer: "\\( \\frac{x^2 - 2x - 1}{(x-1)^2} \\)"
    }
  },
  {
    id: "y2df5-014",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1}{x^2+1} \\) using the quotient rule.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1,\\quad v = x^2+1", explanation: "Constant on top, quadratic on bottom." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 0", explanation: "Derivative of a constant is zero; this kills the first term in the numerator." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Power rule on \\(x^2\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula before substitution. With \\(u'=0\\) the numerator collapses to just \\(-uv'\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{0\\cdot(x^2+1) - 1\\cdot 2x}{(x^2+1)^2}", explanation: "First term vanishes; second term is \\(-2x\\)." },
        { stepNumber: 6, description: "Simplify.", workingLatex: "\\frac{dy}{dx} = -\\frac{2x}{(x^2+1)^2}", explanation: "Keep the denominator factored as \\((x^2+1)^2\\). The minus sign is critical — it tells you the function is decreasing for \\(x>0\\)." }
      ],
      finalAnswer: "\\( -\\frac{2x}{(x^2+1)^2} \\)"
    }
  },
  {
    id: "y2df5-015",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 15",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1}{x^2-1} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1,\\quad v = x^2-1", explanation: "Reciprocal of a quadratic; note \\(v=0\\) at \\(x=\\pm 1\\), so the function is undefined there." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 0", explanation: "Constant numerator gives \\(u'=0\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Power rule on \\(x^2\\); the \\(-1\\) drops." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. With \\(u'=0\\), only \\(-uv'\\) survives." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{0 - 1\\cdot 2x}{(x^2-1)^2}", explanation: "First term zero; second term \\(-2x\\)." },
        { stepNumber: 6, description: "Simplify.", workingLatex: "\\frac{dy}{dx} = -\\frac{2x}{(x^2-1)^2}", explanation: "Keep the denominator factored. Same structure as the previous question, just \\(-1\\) instead of \\(+1\\)." }
      ],
      finalAnswer: "\\( -\\frac{2x}{(x^2-1)^2} \\)"
    }
  },
  {
    id: "y2df5-016",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 16",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x+2}{x^2+1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x+2,\\quad v = x^2+1", explanation: "Linear over quadratic. The denominator is always positive, so the function is defined everywhere." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "Derivative of \\(x+2\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Power rule on \\(x^2\\); the \\(+1\\) drops out." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Numerator order \\(u'v - uv'\\) — not \\(uv' - u'v\\), which is the most common quotient rule slip." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot(x^2+1) - (x+2)\\cdot 2x}{(x^2+1)^2}", explanation: "Bracket the \\(x+2\\) so the \\(2x\\) multiplies through correctly." },
        { stepNumber: 6, description: "Distribute \\(2x\\) into the second bracket.", workingLatex: "(x+2)\\cdot 2x = 2x^2 + 4x", explanation: "Standard distribution; keep the result bracketed to track the minus sign." },
        { stepNumber: 7, description: "Expand the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{x^2 + 1 - (2x^2 + 4x)}{(x^2+1)^2} = \\frac{x^2 + 1 - 2x^2 - 4x}{(x^2+1)^2}", explanation: "The minus distributes across both terms of the second bracket — sign error magnet." },
        { stepNumber: 8, description: "Collect like terms.", workingLatex: "\\frac{dy}{dx} = \\frac{1 - 4x - x^2}{(x^2+1)^2}", explanation: "\\(x^2 - 2x^2 = -x^2\\). Conventional ordering writes the constant first." }
      ],
      finalAnswer: "\\( \\frac{1 - 4x - x^2}{(x^2+1)^2} \\)"
    }
  },
  // ── polynomial / exp ────
  {
    id: "y2df5-017",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 17",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x}{e^x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x,\\quad v = e^x", explanation: "Polynomial over exponential. We could rewrite as \\(xe^{-x}\\) and use the product rule, but the question asks for the quotient rule." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = e^x", explanation: "The exponential function is its own derivative." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula before substituting." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot e^x - x\\cdot e^x}{(e^x)^2}", explanation: "\\((e^x)^2 = e^{2x}\\); we'll cancel a factor of \\(e^x\\) shortly." },
        { stepNumber: 6, description: "Factor \\(e^x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(1 - x)}{e^{2x}}", explanation: "Both numerator terms share \\(e^x\\); pull it out to set up cancellation." },
        { stepNumber: 7, description: "Cancel \\(e^x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{1 - x}{e^x}", explanation: "Divide top and bottom by \\(e^x\\). This is the cleanest form." }
      ],
      finalAnswer: "\\( \\frac{1 - x}{e^x} \\)"
    }
  },
  {
    id: "y2df5-018",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 18",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x^2}{e^x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x^2,\\quad v = e^x", explanation: "Polynomial over exponential." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2x", explanation: "Power rule." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = e^x", explanation: "Self-derivative of \\(e^x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Numerator order: \\(u'v - uv'\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2x\\cdot e^x - x^2\\cdot e^x}{(e^x)^2}", explanation: "Plug each piece in and remember \\((e^x)^2 = e^{2x}\\)." },
        { stepNumber: 6, description: "Factor \\(xe^x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{xe^x(2 - x)}{e^{2x}}", explanation: "Both numerator terms share \\(xe^x\\); factoring it out sets up cancellation." },
        { stepNumber: 7, description: "Cancel \\(e^x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{x(2 - x)}{e^x}", explanation: "Divide top and bottom by \\(e^x\\). The factored form makes stationary points at \\(x=0\\) and \\(x=2\\) immediately visible." }
      ],
      finalAnswer: "\\( \\frac{x(2 - x)}{e^x} \\)"
    }
  },
  {
    id: "y2df5-019",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 19",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{e^x}{x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = e^x,\\quad v = x", explanation: "Exponential over polynomial — the opposite arrangement to the previous two questions." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = e^x", explanation: "The exponential is its own derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x\\) is \\(1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x\\cdot x - e^x\\cdot 1}{x^2}", explanation: "Slot each piece in." },
        { stepNumber: 6, description: "Factor \\(e^x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(x - 1)}{x^2}", explanation: "Both numerator terms share \\(e^x\\); factoring it out gives the cleanest form. The factor \\((x-1)\\) shows there's a stationary point at \\(x=1\\)." }
      ],
      finalAnswer: "\\( \\frac{e^x(x-1)}{x^2} \\)"
    }
  },
  {
    id: "y2df5-020",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{e^{2x}}{x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = e^{2x},\\quad v = x", explanation: "Composite exponential over polynomial. The numerator is a composition, so differentiating it will need the chain rule." },
        { stepNumber: 2, description: "Set up the chain rule for \\(u\\).", workingLatex: "u = e^{w},\\; w = 2x", explanation: "Outer function is \\(e^{w}\\); inner function is \\(w=2x\\). Naming the inner function explicitly helps avoid forgetting the inner derivative." },
        { stepNumber: 3, description: "Differentiate \\(u\\) using the chain rule.", workingLatex: "u' = e^{2x}\\cdot 2 = 2e^{2x}", explanation: "Outer derivative \\(e^{w}\\) evaluated at \\(w=2x\\) gives \\(e^{2x}\\); inner derivative of \\(2x\\) is \\(2\\). Multiply. Forgetting the inner \\(2\\) is the single most common slip here." },
        { stepNumber: 4, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 5, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Numerator order is \\(u'v - uv'\\), not \\(uv' - u'v\\)." },
        { stepNumber: 6, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2e^{2x}\\cdot x - e^{2x}\\cdot 1}{x^2}", explanation: "Plug each piece in. Both numerator terms share \\(e^{2x}\\)." },
        { stepNumber: 7, description: "Factor \\(e^{2x}\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{e^{2x}(2x - 1)}{x^2}", explanation: "Common factor pulled out; the leftover bracket is \\(2x - 1\\)." },
        { stepNumber: 8, description: "Final form.", workingLatex: "\\frac{dy}{dx} = \\frac{e^{2x}(2x-1)}{x^2}", explanation: "Denominator stays as \\(x^2\\). The factor \\(2x-1\\) reveals a stationary point at \\(x=\\frac12\\)." }
      ],
      finalAnswer: "\\( \\frac{e^{2x}(2x-1)}{x^2} \\)"
    }
  },
  {
    id: "y2df5-021",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{e^x}{x^2} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = e^x,\\quad v = x^2", explanation: "Exponential over polynomial." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = e^x", explanation: "Self-derivative — \\(e^x\\) is its own derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Power rule on \\(x^2\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Numerator order \\(u'v - uv'\\) — flipping it is the most common slip." },
        { stepNumber: 5, description: "Compute \\(v^2\\).", workingLatex: "v^2 = (x^2)^2 = x^4", explanation: "Square the denominator; index laws give \\(x^4\\)." },
        { stepNumber: 6, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x\\cdot x^2 - e^x\\cdot 2x}{x^4}", explanation: "Plug each piece in. Both numerator terms share \\(xe^x\\)." },
        { stepNumber: 7, description: "Factor \\(xe^x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{xe^x(x - 2)}{x^4}", explanation: "Common factor: \\(xe^x\\); leftover bracket is \\((x-2)\\)." },
        { stepNumber: 8, description: "Cancel one factor of \\(x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(x - 2)}{x^3}", explanation: "Top and bottom share an \\(x\\); divide once. The factor \\((x-2)\\) reveals a stationary point at \\(x=2\\)." }
      ],
      finalAnswer: "\\( \\frac{e^x(x - 2)}{x^3} \\)"
    }
  },
  {
    id: "y2df5-022",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 22",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{e^x}{x+1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = e^x,\\quad v = x+1", explanation: "Exponential over linear. The denominator is zero at \\(x=-1\\), so the function has an asymptote there." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = e^x", explanation: "Self-derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x+1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form first. Numerator order \\(u'v - uv'\\) — wrong sign here flips the whole answer." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(x+1) - e^x\\cdot 1}{(x+1)^2}", explanation: "Slot each piece in carefully." },
        { stepNumber: 6, description: "Factor \\(e^x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x[(x+1) - 1]}{(x+1)^2}", explanation: "Both numerator terms share \\(e^x\\); factoring leaves \\((x+1) - 1\\) in the bracket." },
        { stepNumber: 7, description: "Simplify the bracket.", workingLatex: "(x+1) - 1 = x", explanation: "The constants cancel: \\(+1 - 1 = 0\\). Numerator collapses dramatically." },
        { stepNumber: 8, description: "Combine.", workingLatex: "\\frac{dy}{dx} = \\frac{xe^x}{(x+1)^2}", explanation: "Slot back in. The factor \\(x\\) reveals a stationary point at \\(x=0\\)." }
      ],
      finalAnswer: "\\( \\frac{xe^x}{(x+1)^2} \\)"
    }
  },
  // ── polynomial / ln ────
  {
    id: "y2df5-023",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 23",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\ln x}{x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\ln x,\\quad v = x", explanation: "Logarithm over polynomial; defined for \\(x>0\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\frac{1}{x}", explanation: "Standard derivative of \\(\\ln x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula before substituting." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{(1/x)\\cdot x - \\ln x \\cdot 1}{x^2}", explanation: "Slot each piece in; \\((1/x)\\cdot x\\) will simplify to \\(1\\)." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{1 - \\ln x}{x^2}", explanation: "The numerator collapses dramatically: \\((1/x)\\cdot x = 1\\). The factor \\(1 - \\ln x\\) reveals a stationary point at \\(x = e\\)." }
      ],
      finalAnswer: "\\( \\frac{1 - \\ln x}{x^2} \\)"
    }
  },
  {
    id: "y2df5-024",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x}{\\ln x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x,\\quad v = \\ln x", explanation: "Polynomial over logarithm. Domain \\(x>0\\) (so \\(\\ln x\\) is defined) and \\(x\\ne 1\\) (so the denominator is nonzero)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\frac{1}{x}", explanation: "Standard derivative of \\(\\ln x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Numerator order is \\(u'v - uv'\\) — flipping it is the most common slip." },
        { stepNumber: 5, description: "Compute \\(v^2\\).", workingLatex: "v^2 = (\\ln x)^2", explanation: "Square the denominator. Write it as \\((\\ln x)^2\\), not \\(\\ln(x^2)\\) — those are different functions." },
        { stepNumber: 6, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot \\ln x - x\\cdot(1/x)}{(\\ln x)^2}", explanation: "Slot each piece in. The product \\(x\\cdot(1/x)\\) is set up to collapse." },
        { stepNumber: 7, description: "Simplify \\(x\\cdot(1/x)\\).", workingLatex: "x\\cdot(1/x) = 1", explanation: "Numerator collapses dramatically — this is the typical pattern with \\(\\ln\\) quotients." },
        { stepNumber: 8, description: "Combine.", workingLatex: "\\frac{dy}{dx} = \\frac{\\ln x - 1}{(\\ln x)^2}", explanation: "The factor \\(\\ln x - 1\\) shows a stationary point at \\(x = e\\) (where \\(\\ln x = 1\\))." }
      ],
      finalAnswer: "\\( \\frac{\\ln x - 1}{(\\ln x)^2} \\)"
    }
  },
  {
    id: "y2df5-025",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 25",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\ln x}{x^2} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\ln x,\\quad v = x^2", explanation: "Logarithm over polynomial; defined for \\(x>0\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\frac{1}{x}", explanation: "Standard log derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Power rule." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula before substituting. Numerator order \\(u'v - uv'\\) — wrong sign here flips the answer." },
        { stepNumber: 5, description: "Compute \\(v^2\\).", workingLatex: "v^2 = (x^2)^2 = x^4", explanation: "Square the denominator using index laws." },
        { stepNumber: 6, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{(1/x)\\cdot x^2 - \\ln x\\cdot 2x}{x^4}", explanation: "Plug each piece in." },
        { stepNumber: 7, description: "Simplify \\((1/x)\\cdot x^2 = x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{x - 2x\\ln x}{x^4}", explanation: "The nested \\(1/x\\) collapses against \\(x^2\\) to leave a single \\(x\\)." },
        { stepNumber: 8, description: "Factor \\(x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{x(1 - 2\\ln x)}{x^4}", explanation: "Both terms share \\(x\\); pulling it out sets up cancellation." },
        { stepNumber: 9, description: "Cancel one \\(x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{1 - 2\\ln x}{x^3}", explanation: "Top and bottom share \\(x\\). Stationary when \\(\\ln x = \\frac12\\), i.e. \\(x = \\sqrt{e}\\)." }
      ],
      finalAnswer: "\\( \\frac{1 - 2\\ln x}{x^3} \\)"
    }
  },
  {
    id: "y2df5-026",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\ln x}{x+1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\ln x,\\quad v = x+1", explanation: "Logarithm over linear; domain \\(x>0\\) and \\(x\\ne -1\\) (the latter is automatic from the first)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\frac{1}{x}", explanation: "Standard log derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x+1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Numerator order \\(u'v - uv'\\) — getting that sign right is critical." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{(1/x)(x+1) - \\ln x \\cdot 1}{(x+1)^2}", explanation: "Bracket the \\(x+1\\) so the \\(1/x\\) multiplies through cleanly." },
        { stepNumber: 6, description: "Simplify \\((1/x)(x+1)\\).", workingLatex: "(1/x)(x+1) = \\frac{x+1}{x}", explanation: "Distributing keeps it as one fraction; we'll combine over a common denominator next." },
        { stepNumber: 7, description: "Rewrite the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{\\frac{x+1}{x} - \\ln x}{(x+1)^2}", explanation: "Visible nested fraction — clear it by multiplying top and bottom by \\(x\\)." },
        { stepNumber: 8, description: "Multiply top and bottom by \\(x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{(x+1) - x\\ln x}{x(x+1)^2}", explanation: "The \\(\\frac{x+1}{x}\\) becomes \\((x+1)\\); the \\(-\\ln x\\) becomes \\(-x\\ln x\\); the denominator gains a factor of \\(x\\). Clean form." }
      ],
      finalAnswer: "\\( \\frac{(x+1) - x\\ln x}{x(x+1)^2} \\)"
    }
  },
  {
    id: "y2df5-027",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 27",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{e^x}{\\ln x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = e^x,\\quad v = \\ln x", explanation: "Exponential over logarithm; defined for \\(x>0,\\,x\\ne 1\\) (where \\(\\ln x = 0\\))." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = e^x", explanation: "Self-derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\frac{1}{x}", explanation: "Standard log derivative." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. The numerator must be \\(u'v - uv'\\), not the other way round." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x \\ln x - e^x\\cdot(1/x)}{(\\ln x)^2}", explanation: "Plug each piece in. The numerator has an awkward \\(1/x\\) inside that we will clear shortly." },
        { stepNumber: 6, description: "Factor \\(e^x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(\\ln x - 1/x)}{(\\ln x)^2}", explanation: "Both numerator terms share \\(e^x\\); pulling it out isolates the awkward \\(1/x\\)." },
        { stepNumber: 7, description: "Combine the inner bracket over \\(x\\).", workingLatex: "\\ln x - \\frac{1}{x} = \\frac{x\\ln x - 1}{x}", explanation: "Common denominator \\(x\\); multiply \\(\\ln x\\) by \\(x/x\\)." },
        { stepNumber: 8, description: "Combine.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(x\\ln x - 1)}{x(\\ln x)^2}", explanation: "Slot the simplified bracket back. The \\(x\\) in its denominator joins the outer denominator." }
      ],
      finalAnswer: "\\( \\frac{e^x(x\\ln x - 1)}{x(\\ln x)^2} \\)"
    }
  },
  // ── Trig quotients ────
  {
    id: "y2df5-028",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 28",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Using the quotient rule, show \\( \\tfrac{d}{dx}\\tan x = \\sec^2 x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule", "trig"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite \\(\\tan x\\) as a quotient.", workingLatex: "\\tan x = \\frac{\\sin x}{\\cos x}", explanation: "Tan is defined as sine over cosine — this is the form the quotient rule needs." },
        { stepNumber: 2, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\sin x,\\quad v = \\cos x", explanation: "Sine on top, cosine on bottom." },
        { stepNumber: 3, description: "Differentiate \\(u\\).", workingLatex: "u' = \\cos x", explanation: "Standard derivative of sine." },
        { stepNumber: 4, description: "Differentiate \\(v\\).", workingLatex: "v' = -\\sin x", explanation: "Derivative of cosine is minus sine — the minus sign is crucial to the algebra below." },
        { stepNumber: 5, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form first." },
        { stepNumber: 6, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x \\cdot \\cos x - \\sin x\\cdot(-\\sin x)}{\\cos^2 x}", explanation: "The two minuses on the right combine to a plus — that's where the Pythagorean identity comes in." },
        { stepNumber: 7, description: "Use \\(\\sin^2 x + \\cos^2 x = 1\\).", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x", explanation: "The numerator simplifies to \\(1\\); the result is \\(1/\\cos^2 x = \\sec^2 x\\), as required." }
      ],
      finalAnswer: "\\( \\sec^2 x \\). \\(\\blacksquare\\)"
    }
  },
  {
    id: "y2df5-029",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 29",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Using the quotient rule, show \\( \\tfrac{d}{dx}\\cot x = -\\csc^2 x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule", "trig"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite \\(\\cot x\\) as a quotient.", workingLatex: "\\cot x = \\frac{\\cos x}{\\sin x}", explanation: "Cotangent is cosine over sine — the reciprocal of tan." },
        { stepNumber: 2, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\cos x,\\quad v = \\sin x", explanation: "Cosine on top, sine on bottom." },
        { stepNumber: 3, description: "Differentiate \\(u\\).", workingLatex: "u' = -\\sin x", explanation: "Standard derivative of cosine — note the minus sign." },
        { stepNumber: 4, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x", explanation: "Derivative of sine is cosine." },
        { stepNumber: 5, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula before substitution." },
        { stepNumber: 6, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{-\\sin x\\cdot \\sin x - \\cos x\\cdot \\cos x}{\\sin^2 x}", explanation: "Plug everything in. Both terms in the numerator are negative." },
        { stepNumber: 7, description: "Use \\(\\sin^2 x + \\cos^2 x = 1\\).", workingLatex: "\\frac{dy}{dx} = \\frac{-(\\sin^2 x + \\cos^2 x)}{\\sin^2 x} = -\\frac{1}{\\sin^2 x} = -\\csc^2 x", explanation: "Factor out the minus; the bracket collapses to \\(1\\)." }
      ],
      finalAnswer: "\\( -\\csc^2 x \\). \\(\\blacksquare\\)"
    }
  },
  {
    id: "y2df5-030",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 30",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Using the quotient rule, show \\( \\tfrac{d}{dx}\\sec x = \\sec x \\tan x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite \\(\\sec x\\) as a quotient.", workingLatex: "\\sec x = \\frac{1}{\\cos x}", explanation: "Secant is the reciprocal of cosine." },
        { stepNumber: 2, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1,\\quad v = \\cos x", explanation: "Constant numerator, cosine denominator." },
        { stepNumber: 3, description: "Differentiate \\(u\\).", workingLatex: "u' = 0", explanation: "Derivative of a constant is zero." },
        { stepNumber: 4, description: "Differentiate \\(v\\).", workingLatex: "v' = -\\sin x", explanation: "Standard derivative of cosine." },
        { stepNumber: 5, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. With \\(u'=0\\), only \\(-uv'\\) survives." },
        { stepNumber: 6, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{0 - 1\\cdot(-\\sin x)}{\\cos^2 x} = \\frac{\\sin x}{\\cos^2 x}", explanation: "Double negative becomes plus." },
        { stepNumber: 7, description: "Split into \\(\\sec x\\tan x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{1}{\\cos x}\\cdot\\frac{\\sin x}{\\cos x} = \\sec x\\tan x", explanation: "Recognise \\(1/\\cos x = \\sec x\\) and \\(\\sin x/\\cos x = \\tan x\\); the product gives the required form." }
      ],
      finalAnswer: "\\( \\sec x \\tan x \\). \\(\\blacksquare\\)"
    }
  },
  {
    id: "y2df5-031",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 31",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Using the quotient rule, show \\( \\tfrac{d}{dx}\\csc x = -\\csc x \\cot x \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite \\(\\csc x\\) as a quotient.", workingLatex: "\\csc x = \\frac{1}{\\sin x}", explanation: "Cosecant is the reciprocal of sine." },
        { stepNumber: 2, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1,\\quad v = \\sin x", explanation: "Constant numerator, sine denominator." },
        { stepNumber: 3, description: "Differentiate \\(u\\).", workingLatex: "u' = 0", explanation: "Derivative of a constant." },
        { stepNumber: 4, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x", explanation: "Standard derivative of sine." },
        { stepNumber: 5, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first; only \\(-uv'\\) survives because \\(u'=0\\)." },
        { stepNumber: 6, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{0 - 1\\cdot\\cos x}{\\sin^2 x} = -\\frac{\\cos x}{\\sin^2 x}", explanation: "Slot in the values. Sign is negative — coming straight from the \\(-uv'\\) term." },
        { stepNumber: 7, description: "Split into \\(-\\csc x\\cot x\\).", workingLatex: "\\frac{dy}{dx} = -\\frac{1}{\\sin x}\\cdot\\frac{\\cos x}{\\sin x} = -\\csc x\\cot x", explanation: "Factor: \\(1/\\sin x = \\csc x\\), \\(\\cos x/\\sin x = \\cot x\\)." }
      ],
      finalAnswer: "\\( -\\csc x \\cot x \\). \\(\\blacksquare\\)"
    }
  },
  {
    id: "y2df5-032",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 32",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\sin x}{1 + \\cos x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\sin x,\\quad v = 1 + \\cos x", explanation: "Sine on top; the denominator combines a constant and a trig term." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\cos x", explanation: "Standard sine derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = -\\sin x", explanation: "Derivative of \\(\\cos x\\) is \\(-\\sin x\\); the constant \\(1\\) drops out." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Numerator order \\(u'v - uv'\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x(1+\\cos x) - \\sin x\\cdot(-\\sin x)}{(1+\\cos x)^2}", explanation: "The two minuses combine to give \\(+\\sin^2 x\\) — set up for the Pythagorean identity." },
        { stepNumber: 6, description: "Expand the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x + \\cos^2 x + \\sin^2 x}{(1+\\cos x)^2}", explanation: "Distribute the \\(\\cos x\\). The \\(\\cos^2 x + \\sin^2 x\\) screams Pythagorean identity." },
        { stepNumber: 7, description: "Apply the identity.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x + 1}{(1+\\cos x)^2} = \\frac{1+\\cos x}{(1+\\cos x)^2}", explanation: "\\(\\cos^2 x + \\sin^2 x = 1\\); the numerator becomes \\(\\cos x + 1\\)." },
        { stepNumber: 8, description: "Cancel a factor of \\((1+\\cos x)\\).", workingLatex: "\\frac{dy}{dx} = \\frac{1}{1+\\cos x}", explanation: "Top and bottom share \\((1+\\cos x)\\); cancel one factor." }
      ],
      finalAnswer: "\\( \\frac{1}{1+\\cos x} \\)"
    }
  },
  {
    id: "y2df5-033",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 33",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\cos x}{1 + \\sin x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\cos x,\\quad v = 1 + \\sin x", explanation: "Cosine on top, constant-plus-sine on bottom." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = -\\sin x", explanation: "Standard cosine derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x", explanation: "Derivative of \\(1 + \\sin x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{-\\sin x(1+\\sin x) - \\cos x\\cdot\\cos x}{(1+\\sin x)^2}", explanation: "Plug each piece in. Both numerator terms will be negative." },
        { stepNumber: 6, description: "Expand the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{-\\sin x - \\sin^2 x - \\cos^2 x}{(1+\\sin x)^2}", explanation: "Distribute and watch the signs. The \\(-\\sin^2 x - \\cos^2 x\\) collapses by Pythagoras." },
        { stepNumber: 7, description: "Apply the identity.", workingLatex: "\\frac{dy}{dx} = \\frac{-\\sin x - 1}{(1+\\sin x)^2} = \\frac{-(1+\\sin x)}{(1+\\sin x)^2}", explanation: "\\(-(\\sin^2 x + \\cos^2 x) = -1\\); factor out the minus." },
        { stepNumber: 8, description: "Cancel a factor of \\((1+\\sin x)\\).", workingLatex: "\\frac{dy}{dx} = -\\frac{1}{1+\\sin x}", explanation: "One \\((1+\\sin x)\\) cancels from top and bottom." }
      ],
      finalAnswer: "\\( -\\frac{1}{1+\\sin x} \\)"
    }
  },
  {
    id: "y2df5-034",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 34",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x}{\\sin x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x,\\quad v = \\sin x", explanation: "Polynomial over trig." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x", explanation: "Standard sine derivative." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot\\sin x - x\\cos x}{\\sin^2 x}", explanation: "Slot each piece in." },
        { stepNumber: 6, description: "Simplify.", workingLatex: "\\frac{dy}{dx} = \\frac{\\sin x - x\\cos x}{\\sin^2 x}", explanation: "No common factor to cancel; this is the simplest form." }
      ],
      finalAnswer: "\\( \\frac{\\sin x - x\\cos x}{\\sin^2 x} \\)"
    }
  },
  {
    id: "y2df5-035",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 35",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x}{\\cos x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x,\\quad v = \\cos x", explanation: "Polynomial over trig." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = -\\sin x", explanation: "Derivative of cosine. The minus is what flips the sign in step 6." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot\\cos x - x\\cdot(-\\sin x)}{\\cos^2 x}", explanation: "Plug in; note the two minuses on the second term." },
        { stepNumber: 6, description: "Simplify.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x + x\\sin x}{\\cos^2 x}", explanation: "\\(-(-\\sin x) = +\\sin x\\). The numerator is a sum, not a difference." }
      ],
      finalAnswer: "\\( \\frac{\\cos x + x\\sin x}{\\cos^2 x} \\)"
    }
  },
  {
    id: "y2df5-036",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 36",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\sin x}{x^2} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\sin x,\\quad v = x^2", explanation: "Trig over polynomial." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\cos x", explanation: "Standard sine derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Power rule." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x\\cdot x^2 - \\sin x\\cdot 2x}{(x^2)^2}", explanation: "\\((x^2)^2 = x^4\\); we'll cancel a factor of \\(x\\) below." },
        { stepNumber: 6, description: "Factor and cancel \\(x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{x(x\\cos x - 2\\sin x)}{x^4} = \\frac{x\\cos x - 2\\sin x}{x^3}", explanation: "Pull \\(x\\) out of the numerator, then divide top and bottom by \\(x\\)." }
      ],
      finalAnswer: "\\( \\frac{x\\cos x - 2\\sin x}{x^3} \\)"
    }
  },
  {
    id: "y2df5-037",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 37",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\cos x}{x} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\cos x,\\quad v = x", explanation: "Trig over polynomial." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = -\\sin x", explanation: "Standard cosine derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{-\\sin x\\cdot x - \\cos x\\cdot 1}{x^2}", explanation: "Plug each piece in. Both numerator terms are negative." },
        { stepNumber: 6, description: "Factor out the minus.", workingLatex: "\\frac{dy}{dx} = -\\frac{x\\sin x + \\cos x}{x^2}", explanation: "Common minus pulled out of the numerator to keep the form tidy." }
      ],
      finalAnswer: "\\( -\\frac{x\\sin x + \\cos x}{x^2} \\)"
    }
  },
  {
    id: "y2df5-038",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 38",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x^2}{\\sin x} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x^2,\\quad v = \\sin x", explanation: "Polynomial over trig." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2x", explanation: "Power rule." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x", explanation: "Standard sine derivative." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2x\\sin x - x^2\\cos x}{\\sin^2 x}", explanation: "Plug each piece in." },
        { stepNumber: 6, description: "Factor \\(x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{x(2\\sin x - x\\cos x)}{\\sin^2 x}", explanation: "Both numerator terms share \\(x\\); pulling it out gives the cleanest form." }
      ],
      finalAnswer: "\\( \\frac{x(2\\sin x - x\\cos x)}{\\sin^2 x} \\)"
    }
  },
  {
    id: "y2df5-039",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 39",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\sin x + \\cos x}{\\sin x - \\cos x} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\sin x + \\cos x,\\quad v = \\sin x - \\cos x", explanation: "Both numerator and denominator are sums/differences of sine and cosine." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\cos x - \\sin x", explanation: "Differentiate term by term: \\(\\sin x\\to\\cos x\\), \\(\\cos x\\to -\\sin x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x + \\sin x", explanation: "Same idea: \\(\\sin x\\to\\cos x\\), \\(-\\cos x\\to +\\sin x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first; numerator order \\(u'v - uv'\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{(\\cos x - \\sin x)(\\sin x - \\cos x) - (\\sin x + \\cos x)(\\cos x + \\sin x)}{(\\sin x - \\cos x)^2}", explanation: "Plug everything in. Both products in the numerator are squares in disguise." },
        { stepNumber: 6, description: "Recognise the squares.", workingLatex: "(\\cos x - \\sin x)(\\sin x - \\cos x) = -(\\sin x - \\cos x)^2", explanation: "The two brackets differ only by a sign, so their product is the negative of a square." },
        { stepNumber: 7, description: "Rewrite the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{-(\\sin x - \\cos x)^2 - (\\sin x + \\cos x)^2}{(\\sin x - \\cos x)^2}", explanation: "The second product is just \\((\\sin x + \\cos x)^2\\)." },
        { stepNumber: 8, description: "Expand both squares.", workingLatex: "(\\sin x - \\cos x)^2 = 1 - \\sin 2x,\\quad (\\sin x + \\cos x)^2 = 1 + \\sin 2x", explanation: "Each square expands using \\(\\sin^2 + \\cos^2 = 1\\) and \\(2\\sin x\\cos x = \\sin 2x\\)." },
        { stepNumber: 9, description: "Combine.", workingLatex: "\\frac{dy}{dx} = \\frac{-(1 - \\sin 2x) - (1 + \\sin 2x)}{(\\sin x - \\cos x)^2} = \\frac{-2}{(\\sin x - \\cos x)^2}", explanation: "\\(-1 + \\sin 2x - 1 - \\sin 2x = -2\\); the \\(\\sin 2x\\) terms cancel." }
      ],
      finalAnswer: "\\( \\frac{-2}{(\\sin x - \\cos x)^2} \\)"
    }
  },
  // ── More polynomial / polynomial ────
  {
    id: "y2df5-040",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 40",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{3x+1}{x+2} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 3x+1,\\quad v = x+2", explanation: "Linear over linear." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 3", explanation: "Constant coefficient of \\(x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x+2\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{3(x+2) - (3x+1)\\cdot 1}{(x+2)^2}", explanation: "Bracket the \\(3x+1\\); the minus has to distribute." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{3x + 6 - 3x - 1}{(x+2)^2} = \\frac{5}{(x+2)^2}", explanation: "\\(3x - 3x = 0\\); \\(6 - 1 = 5\\)." }
      ],
      finalAnswer: "\\( \\frac{5}{(x+2)^2} \\)"
    }
  },
  {
    id: "y2df5-041",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 41",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{4x+3}{x-1} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 4x+3,\\quad v = x-1", explanation: "Linear over linear." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 4", explanation: "Coefficient of \\(x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x-1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{4(x-1) - (4x+3)\\cdot 1}{(x-1)^2}", explanation: "Bracket the \\(4x+3\\); the minus has to reach both terms." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{4x - 4 - 4x - 3}{(x-1)^2} = -\\frac{7}{(x-1)^2}", explanation: "\\(4x - 4x = 0\\); \\(-4 - 3 = -7\\)." }
      ],
      finalAnswer: "\\( -\\frac{7}{(x-1)^2} \\)"
    }
  },
  {
    id: "y2df5-042",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 42",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{5}{2x+1} \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 5,\\quad v = 2x+1", explanation: "Constant on top, linear on bottom." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 0", explanation: "Derivative of a constant is zero." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2", explanation: "Coefficient of \\(x\\) in \\(2x+1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. With \\(u'=0\\), only \\(-uv'\\) survives in the numerator." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{0\\cdot(2x+1) - 5\\cdot 2}{(2x+1)^2}", explanation: "Plug in. First term zero; second term \\(-10\\)." },
        { stepNumber: 6, description: "Simplify.", workingLatex: "\\frac{dy}{dx} = -\\frac{10}{(2x+1)^2}", explanation: "Keep the denominator factored. The minus sign comes from \\(-uv'\\)." }
      ],
      finalAnswer: "\\( -\\frac{10}{(2x+1)^2} \\)"
    }
  },
  {
    id: "y2df5-043",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 43",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x+1}{2x^2} \\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x+1,\\quad v = 2x^2", explanation: "Linear over quadratic." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "Derivative of \\(x+1\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 4x", explanation: "Power rule on \\(2x^2\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first; \\(v^2 = (2x^2)^2 = 4x^4\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot 2x^2 - (x+1)\\cdot 4x}{(2x^2)^2}", explanation: "Plug in each piece carefully." },
        { stepNumber: 6, description: "Expand and simplify.", workingLatex: "\\frac{dy}{dx} = \\frac{2x^2 - 4x^2 - 4x}{4x^4} = \\frac{-2x^2 - 4x}{4x^4}", explanation: "Distribute \\(4x\\) into \\(x+1\\); combine like terms." },
        { stepNumber: 7, description: "Factor and cancel.", workingLatex: "\\frac{dy}{dx} = \\frac{-2x(x+2)}{4x^4} = -\\frac{x+2}{2x^3}", explanation: "Pull \\(-2x\\) from the numerator; cancel with one \\(x\\) from the bottom and the factor of \\(2\\) in \\(4\\)." }
      ],
      finalAnswer: "\\( -\\frac{x+2}{2x^3} \\)"
    }
  },
  {
    id: "y2df5-044",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 44",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x^2+x}{x-3} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x^2+x,\\quad v = x-3", explanation: "Quadratic over linear. The denominator is zero at \\(x=3\\), giving an asymptote there." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2x+1", explanation: "Differentiate \\(x^2\\to 2x\\) and \\(x\\to 1\\) term by term." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x-3\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Numerator order \\(u'v - uv'\\) — wrong sign flips the answer." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{(2x+1)(x-3) - (x^2+x)\\cdot 1}{(x-3)^2}", explanation: "Bracket both numerator pieces so the minus distributes properly." },
        { stepNumber: 6, description: "Expand \\((2x+1)(x-3)\\).", workingLatex: "(2x+1)(x-3) = 2x^2 - 6x + x - 3", explanation: "FOIL: \\(2x\\cdot x = 2x^2\\); \\(2x\\cdot(-3) = -6x\\); \\(1\\cdot x = x\\); \\(1\\cdot(-3) = -3\\)." },
        { stepNumber: 7, description: "Simplify.", workingLatex: "= 2x^2 - 5x - 3", explanation: "Combine the middle terms: \\(-6x + x = -5x\\)." },
        { stepNumber: 8, description: "Subtract \\((x^2 + x)\\) in the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{2x^2 - 5x - 3 - x^2 - x}{(x-3)^2}", explanation: "Distribute the minus across both terms of \\((x^2+x)\\)." },
        { stepNumber: 9, description: "Collect like terms.", workingLatex: "\\frac{dy}{dx} = \\frac{x^2 - 6x - 3}{(x-3)^2}", explanation: "\\(2x^2 - x^2 = x^2\\); \\(-5x - x = -6x\\); \\(-3\\) stays. Keep the denominator factored." }
      ],
      finalAnswer: "\\( \\frac{x^2 - 6x - 3}{(x-3)^2} \\)"
    }
  },
  {
    id: "y2df5-045",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 45",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{2x-3}{x^2+1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 2x-3,\\quad v = x^2+1", explanation: "Linear over quadratic. The denominator is never zero, so the function is defined on all of \\(\\mathbb{R}\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2", explanation: "Coefficient of \\(x\\) in \\(2x-3\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Power rule on \\(x^2\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Numerator order \\(u'v - uv'\\) — the most common slip is writing \\(uv' - u'v\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2(x^2+1) - (2x-3)\\cdot 2x}{(x^2+1)^2}", explanation: "Bracket both numerator pieces so the minus distributes." },
        { stepNumber: 6, description: "Distribute \\(2\\) into the first bracket.", workingLatex: "2(x^2+1) = 2x^2 + 2", explanation: "Standard expansion." },
        { stepNumber: 7, description: "Distribute \\(2x\\) into the second bracket.", workingLatex: "(2x-3)\\cdot 2x = 4x^2 - 6x", explanation: "\\(2x\\cdot 2x = 4x^2\\); \\(-3\\cdot 2x = -6x\\)." },
        { stepNumber: 8, description: "Combine with the minus.", workingLatex: "\\frac{dy}{dx} = \\frac{2x^2 + 2 - 4x^2 + 6x}{(x^2+1)^2}", explanation: "Subtracting \\((4x^2 - 6x)\\) gives \\(-4x^2 + 6x\\) — watch the sign on \\(-(-6x) = +6x\\)." },
        { stepNumber: 9, description: "Collect and factor.", workingLatex: "\\frac{dy}{dx} = \\frac{-2x^2 + 6x + 2}{(x^2+1)^2} = \\frac{2(3x - x^2 + 1)}{(x^2+1)^2}", explanation: "\\(2x^2 - 4x^2 = -2x^2\\); factor out the common \\(2\\) for tidiness." }
      ],
      finalAnswer: "\\( \\frac{2(3x - x^2 + 1)}{(x^2+1)^2} \\)"
    }
  },
  // ── Applications ────
  {
    id: "y2df5-046",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 46",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = \\dfrac{x}{x+1} \\) at \\( x = 1 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x,\\quad v = x+1", explanation: "The function is linear-over-linear. Numerator becomes \\(u\\), denominator becomes \\(v\\) — that order is what makes the quotient rule formula valid." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 1", explanation: "The derivative of \\(x\\) is \\(1\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "The derivative of \\(x+1\\) is \\(1\\); the constant drops out." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Write the formula symbolically first. The numerator order is \\(u'v - uv'\\) — not the reverse — and getting that sign right is the most common slip in quotient rule questions." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot(x+1) - x\\cdot 1}{(x+1)^2}", explanation: "Slot each piece into the formula, keeping everything visible before any simplification so the bookkeeping is easy to check." },
        { stepNumber: 6, description: "Expand and simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{(x+1) - x}{(x+1)^2} = \\frac{1}{(x+1)^2}", explanation: "Distribute the minus, then collect: \\((x+1) - x = 1\\). The denominator stays factored as \\((x+1)^2\\) — never expand it." },
        { stepNumber: 7, description: "Substitute \\(x = 1\\).", workingLatex: "\\frac{dy}{dx}\\Big|_{x=1} = \\frac{1}{(1+1)^2}", explanation: "The question asks for the gradient at a specific point, so substitute \\(x=1\\) into the derivative expression." },
        { stepNumber: 8, description: "Simplify the arithmetic.", workingLatex: "\\frac{1}{(1+1)^2} = \\frac{1}{2^2} = \\frac{1}{4}", explanation: "Evaluate the denominator: \\(1+1 = 2\\), then \\(2^2 = 4\\)." },
        { stepNumber: 9, description: "State the gradient.", workingLatex: "\\text{Gradient} = \\frac{1}{4}", explanation: "The gradient of the curve at \\(x=1\\) is \\(\\frac{1}{4}\\) — positive, so the curve is increasing there." }
      ],
      finalAnswer: "\\( \\frac{1}{4} \\)"
    }
  },
  {
    id: "y2df5-047",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 47",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = \\dfrac{\\ln x}{x} \\) at \\( x = e \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\ln x,\\quad v = x", explanation: "Log on top, polynomial on bottom. Domain restriction \\(x>0\\) carries through from the \\(\\ln x\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\frac{1}{x}", explanation: "Standard log derivative — one of the half-dozen results worth memorising cold." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "The derivative of \\(x\\) is \\(1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Note the order \\(u'v - uv'\\), not \\(uv' - u'v\\) — that sign flip is the single most common error in quotient rule questions." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{(1/x)\\cdot x - \\ln x\\cdot 1}{x^2}", explanation: "Slot each piece in. Keep everything visible so the substitution can be sanity-checked before simplification." },
        { stepNumber: 6, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{1 - \\ln x}{x^2}", explanation: "The first term \\((1/x)\\cdot x\\) collapses to \\(1\\); the second term is just \\(-\\ln x\\). This is the general derivative." },
        { stepNumber: 7, description: "Substitute \\(x = e\\).", workingLatex: "\\frac{dy}{dx}\\Big|_{x=e} = \\frac{1 - \\ln e}{e^2}", explanation: "Plug the specified \\(x\\)-value into the derivative expression." },
        { stepNumber: 8, description: "Simplify using \\(\\ln e = 1\\).", workingLatex: "\\frac{1 - 1}{e^2} = \\frac{0}{e^2} = 0", explanation: "\\(\\ln e = 1\\) by definition of the natural log, so the numerator vanishes." },
        { stepNumber: 9, description: "State the gradient.", workingLatex: "\\text{Gradient at } x=e \\text{ is } 0", explanation: "The tangent is horizontal at \\(x=e\\), meaning \\((e, 1/e)\\) is a stationary point of \\(y = \\ln x / x\\)." }
      ],
      finalAnswer: "\\( 0 \\) (stationary)."
    }
  },
  {
    id: "y2df5-048",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 48",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find and classify the stationary point of \\( y = \\dfrac{\\ln x}{x} \\) for \\( x > 0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule", "stationary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\ln x,\\quad v = x", explanation: "Log over polynomial; domain \\(x>0\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\) and \\(v\\).", workingLatex: "u' = \\frac{1}{x},\\quad v' = 1", explanation: "Standard derivatives." },
        { stepNumber: 3, description: "Apply the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{(1/x)\\cdot x - \\ln x}{x^2} = \\frac{1 - \\ln x}{x^2}", explanation: "\\((1/x)\\cdot x = 1\\); standard simplification." },
        { stepNumber: 4, description: "Set \\(dy/dx = 0\\).", workingLatex: "\\frac{1 - \\ln x}{x^2} = 0 \\Rightarrow 1 - \\ln x = 0", explanation: "A fraction is zero when its numerator is zero (and denominator is nonzero, which is true for \\(x>0\\))." },
        { stepNumber: 5, description: "Solve for \\(x\\).", workingLatex: "\\ln x = 1 \\Rightarrow x = e", explanation: "Exponentiate both sides." },
        { stepNumber: 6, description: "Find the \\(y\\)-coordinate.", workingLatex: "y(e) = \\frac{\\ln e}{e} = \\frac{1}{e}", explanation: "Plug \\(x=e\\) back into the original function." },
        { stepNumber: 7, description: "Classify using the sign of \\(dy/dx\\).", workingLatex: "x < e: \\ln x < 1 \\Rightarrow dy/dx > 0;\\quad x > e: \\ln x > 1 \\Rightarrow dy/dx < 0", explanation: "Gradient changes from positive to negative through \\(x=e\\), so the point is a local maximum." },
        { stepNumber: 8, description: "State the result.", workingLatex: "\\text{Maximum at } (e, 1/e)", explanation: "Combine the coordinates and the classification." }
      ],
      finalAnswer: "Maximum at \\( (e, 1/e) \\)."
    }
  },
  {
    id: "y2df5-049",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 49",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the stationary point of \\( y = \\dfrac{x}{e^x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule", "stationary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x,\\quad v = e^x", explanation: "Polynomial over exponential." },
        { stepNumber: 2, description: "Differentiate \\(u\\) and \\(v\\).", workingLatex: "u' = 1,\\quad v' = e^x", explanation: "Standard derivatives." },
        { stepNumber: 3, description: "Apply the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x - xe^x}{(e^x)^2} = \\frac{e^x(1-x)}{e^{2x}} = \\frac{1-x}{e^x}", explanation: "Factor \\(e^x\\) from the numerator, then cancel with one \\(e^x\\) on the bottom." },
        { stepNumber: 4, description: "Set \\(dy/dx = 0\\).", workingLatex: "\\frac{1 - x}{e^x} = 0 \\Rightarrow 1 - x = 0", explanation: "\\(e^x\\) is never zero, so the numerator does all the work." },
        { stepNumber: 5, description: "Solve for \\(x\\).", workingLatex: "x = 1", explanation: "Direct solve." },
        { stepNumber: 6, description: "Find the \\(y\\)-coordinate.", workingLatex: "y(1) = \\frac{1}{e^1} = \\frac{1}{e}", explanation: "Plug back into the original." },
        { stepNumber: 7, description: "Classify.", workingLatex: "x < 1: dy/dx > 0;\\quad x > 1: dy/dx < 0", explanation: "The numerator \\(1-x\\) changes from positive to negative through \\(x=1\\) (denominator is always positive), so this is a local maximum." },
        { stepNumber: 8, description: "State the result.", workingLatex: "\\text{Maximum at } (1, 1/e)", explanation: "Combine coordinates and classification." }
      ],
      finalAnswer: "Maximum at \\( (1, 1/e) \\)."
    }
  },
  {
    id: "y2df5-050",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 50",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the equation of the tangent to \\( y = \\dfrac{x-1}{x+1} \\) at \\( x = 0 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule", "tangent"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x-1,\\quad v = x+1", explanation: "Linear over linear." },
        { stepNumber: 2, description: "Differentiate \\(u\\) and \\(v\\).", workingLatex: "u' = 1,\\quad v' = 1", explanation: "Both derivatives are \\(1\\)." },
        { stepNumber: 3, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Symbolic form first. Numerator is \\(u'v - uv'\\), not the other way round." },
        { stepNumber: 4, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{1\\cdot(x+1) - (x-1)\\cdot 1}{(x+1)^2}", explanation: "Bracket the \\(x-1\\) so the minus distributes." },
        { stepNumber: 5, description: "Simplify the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{(x+1) - (x-1)}{(x+1)^2} = \\frac{2}{(x+1)^2}", explanation: "\\(x+1 - x+1 = 2\\); the \\(x\\) terms cancel and constants combine." },
        { stepNumber: 6, description: "Evaluate the gradient at \\(x=0\\).", workingLatex: "m = \\frac{2}{(0+1)^2} = 2", explanation: "Plug \\(x=0\\) into \\(dy/dx\\); denominator is \\(1\\)." },
        { stepNumber: 7, description: "Find the \\(y\\)-coordinate at \\(x=0\\).", workingLatex: "y(0) = \\frac{0-1}{0+1} = -1", explanation: "Plug \\(x=0\\) into the original \\(y\\); the tangent passes through \\((0, -1)\\)." },
        { stepNumber: 8, description: "Use point-gradient form.", workingLatex: "y - (-1) = 2(x - 0) \\Rightarrow y + 1 = 2x", explanation: "Standard tangent equation: \\(y - y_0 = m(x - x_0)\\)." },
        { stepNumber: 9, description: "Rearrange to \\(y = mx + c\\) form.", workingLatex: "y = 2x - 1", explanation: "Subtract \\(1\\) from both sides." }
      ],
      finalAnswer: "\\( y = 2x - 1 \\)"
    }
  },
  {
    id: "y2df5-051",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 51",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the gradient of \\( y = \\dfrac{\\sin x}{x} \\) at \\( x = \\pi \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\sin x,\\quad v = x", explanation: "Trig over polynomial." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\cos x", explanation: "Standard sine derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Numerator \\(u'v - uv'\\) — that order matters." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x\\cdot x - \\sin x\\cdot 1}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}", explanation: "Plug each piece in and tidy." },
        { stepNumber: 6, description: "Recall trig values at \\(\\pi\\).", workingLatex: "\\sin\\pi = 0,\\quad \\cos\\pi = -1", explanation: "Standard exact values you should know." },
        { stepNumber: 7, description: "Substitute \\(x = \\pi\\).", workingLatex: "\\frac{dy}{dx}\\Big|_{x=\\pi} = \\frac{\\pi\\cdot(-1) - 0}{\\pi^2} = \\frac{-\\pi}{\\pi^2}", explanation: "Plug \\(\\pi\\) and the trig values into the formula." },
        { stepNumber: 8, description: "Simplify.", workingLatex: "\\frac{dy}{dx}\\Big|_{x=\\pi} = -\\frac{1}{\\pi}", explanation: "Cancel one \\(\\pi\\) from top and bottom." }
      ],
      finalAnswer: "\\( -\\frac{1}{\\pi} \\)"
    }
  },
  // ── More trig quotients ────
  {
    id: "y2df5-052",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 52",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1 + \\sin x}{\\cos x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1 + \\sin x,\\quad v = \\cos x", explanation: "Constant-plus-sine on top, cosine on bottom." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\cos x", explanation: "Derivative of \\(1\\) is zero; derivative of \\(\\sin x\\) is \\(\\cos x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = -\\sin x", explanation: "Standard cosine derivative. The minus sign matters in step 5." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first; numerator order \\(u'v - uv'\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x\\cdot \\cos x - (1+\\sin x)(-\\sin x)}{\\cos^2 x}", explanation: "Plug each piece in. The double minus on the second term will become a plus." },
        { stepNumber: 6, description: "Simplify the double minus.", workingLatex: "-(1+\\sin x)(-\\sin x) = +(1+\\sin x)\\sin x", explanation: "The two minuses combine; now distribute the \\(\\sin x\\)." },
        { stepNumber: 7, description: "Expand the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos^2 x + \\sin x + \\sin^2 x}{\\cos^2 x}", explanation: "Distribute \\(\\sin x\\) into \\((1 + \\sin x)\\). The \\(\\cos^2 x + \\sin^2 x\\) is a Pythagorean identity in disguise." },
        { stepNumber: 8, description: "Apply the identity.", workingLatex: "\\frac{dy}{dx} = \\frac{1 + \\sin x}{\\cos^2 x}", explanation: "\\(\\cos^2 x + \\sin^2 x = 1\\); the remaining \\(\\sin x\\) stays." }
      ],
      finalAnswer: "\\( \\frac{1 + \\sin x}{\\cos^2 x} \\)"
    }
  },
  {
    id: "y2df5-053",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 53",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\sin 2x}{\\cos x} \\). (Simplify first if possible.)",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Read the hint and look for simplification.", workingLatex: "y = \\frac{\\sin 2x}{\\cos x}", explanation: "The bracket says \"simplify first if possible\" — that's a signal a trig identity will collapse the quotient before differentiating." },
        { stepNumber: 2, description: "Recall the double-angle identity.", workingLatex: "\\sin 2x = 2\\sin x\\cos x", explanation: "This is the standard double-angle formula for sine; the right-hand side has a \\(\\cos x\\) that will cancel with the denominator." },
        { stepNumber: 3, description: "Substitute the identity.", workingLatex: "y = \\frac{2\\sin x\\cos x}{\\cos x}", explanation: "Replace \\(\\sin 2x\\) with \\(2\\sin x\\cos x\\)." },
        { stepNumber: 4, description: "Cancel \\(\\cos x\\).", workingLatex: "y = 2\\sin x", explanation: "Provided \\(\\cos x \\ne 0\\), the \\(\\cos x\\) cancels top and bottom — the quotient rule isn't needed at all once we simplify. Always check whether the algebra simplifies before reaching for the quotient rule." },
        { stepNumber: 5, description: "Differentiate.", workingLatex: "\\frac{dy}{dx} = 2\\cos x", explanation: "Derivative of \\(2\\sin x\\) is \\(2\\cos x\\) — the factor \\(2\\) carries through." },
        { stepNumber: 6, description: "Sanity check against the quotient rule.", workingLatex: "\\text{Quotient-rule answer matches}", explanation: "If you do apply the quotient rule directly to the original form, you eventually get the same result after using the Pythagorean identity — the simplification just saved several lines." },
        { stepNumber: 7, description: "Note the domain.", workingLatex: "\\text{Valid where } \\cos x \\ne 0", explanation: "The simplification used cancellation by \\(\\cos x\\), so the result is valid for all \\(x\\) where the original quotient is defined." },
        { stepNumber: 8, description: "Final form.", workingLatex: "\\frac{dy}{dx} = 2\\cos x", explanation: "Clean answer with no further simplification possible." }
      ],
      finalAnswer: "\\( 2\\cos x \\)"
    }
  },
  // ── General and mixed ────
  {
    id: "y2df5-054",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 54",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write down the quotient rule for \\( y = \\dfrac{u(x)}{v(x)} \\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["quotient rule", "theory"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Name the numerator and denominator.", workingLatex: "u = u(x),\\quad v = v(x)", explanation: "By convention, \\(u\\) is the top of the fraction and \\(v\\) is the bottom." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\frac{du}{dx}", explanation: "We'll need both \\(u'\\) and \\(v'\\) in the formula." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\frac{dv}{dx}", explanation: "Same idea for the denominator." },
        { stepNumber: 4, description: "State the numerator structure.", workingLatex: "\\text{Numerator: } u'v - uv'", explanation: "Critical: it is \\(u'v - uv'\\), not \\(uv' - u'v\\). Get this sign right or the whole answer flips." },
        { stepNumber: 5, description: "State the denominator.", workingLatex: "\\text{Denominator: } v^2", explanation: "It is \\(v^2\\), not just \\(v\\). A common slip is to forget to square the denominator." },
        { stepNumber: 6, description: "Combine into the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "This is the standard formula sheet form. Memorise the numerator order: derivative-of-top times bottom, minus top times derivative-of-bottom, all over bottom squared." }
      ],
      finalAnswer: "\\( \\dfrac{u'v - uv'}{v^2} \\)"
    }
  },
  {
    id: "y2df5-055",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 55",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\sqrt{x}}{x+1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\sqrt{x} = x^{1/2},\\quad v = x+1", explanation: "The surd on top is best rewritten as the half-power \\(x^{1/2}\\) so the power rule applies directly. Numerator is \\(u\\); denominator is \\(v\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}", explanation: "Power rule: bring the \\(\\frac12\\) down as a coefficient and reduce the exponent by one to get \\(-\\frac12\\). Then rewrite \\(x^{-1/2}\\) as \\(1/\\sqrt{x}\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "The derivative of \\(x+1\\) is \\(1\\); the constant drops out." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. The numerator is \\(u'v - uv'\\) in that order — not \\(uv' - u'v\\); a sign flip here is the most common quotient-rule error." },
        { stepNumber: 5, description: "Substitute \\(u'\\), \\(v\\), \\(u\\), \\(v'\\) into the formula.", workingLatex: "\\frac{dy}{dx} = \\frac{\\frac{1}{2\\sqrt{x}}\\cdot(x+1) - \\sqrt{x}\\cdot 1}{(x+1)^2}", explanation: "Plug each piece in carefully. The numerator now has an awkward nested fraction (one term is divided by \\(2\\sqrt{x}\\), the other is not) which we'll clear next." },
        { stepNumber: 6, description: "Clear the nested fraction by multiplying numerator and denominator by \\(2\\sqrt{x}\\).", workingLatex: "\\frac{dy}{dx} = \\frac{(x+1) - 2\\sqrt{x}\\cdot\\sqrt{x}}{2\\sqrt{x}\\,(x+1)^2}", explanation: "This is the standard trick for clearing nested surds — multiplying the whole fraction by \\(2\\sqrt{x}/2\\sqrt{x} = 1\\) doesn't change its value but cancels the inner denominator. The second numerator term becomes \\(2\\sqrt{x}\\cdot\\sqrt{x}\\)." },
        { stepNumber: 7, description: "Simplify \\(\\sqrt{x}\\cdot\\sqrt{x} = x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{(x+1) - 2x}{2\\sqrt{x}\\,(x+1)^2}", explanation: "\\(\\sqrt{x}\\cdot\\sqrt{x} = (x^{1/2})^2 = x^1 = x\\), so the second numerator term becomes \\(2x\\)." },
        { stepNumber: 8, description: "Combine like terms in the numerator.", workingLatex: "(x+1) - 2x = 1 - x", explanation: "Distribute the minus: the \\(+x\\) and \\(-2x\\) combine to \\(-x\\), leaving \\(1 - x\\)." },
        { stepNumber: 9, description: "State the final form.", workingLatex: "\\frac{dy}{dx} = \\frac{1 - x}{2\\sqrt{x}\\,(x+1)^2}", explanation: "Leave the denominator factored. Note the derivative is zero at \\(x=1\\), so the curve has a stationary point there." }
      ],
      finalAnswer: "\\( \\frac{1 - x}{2\\sqrt{x}(x+1)^2} \\)"
    }
  },
  {
    id: "y2df5-056",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 56",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x^2+1}{\\sqrt{x}} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x^2 + 1,\\quad v = \\sqrt{x} = x^{1/2}", explanation: "Numerator on top is \\(u\\), denominator (rewritten as a half-power for easy differentiation) is \\(v\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2x", explanation: "Power rule on \\(x^2\\) gives \\(2x\\); the constant \\(1\\) drops out." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}", explanation: "Power rule: bring the \\(\\frac12\\) down and reduce the exponent by one to get \\(-\\frac12\\), then rewrite \\(x^{-1/2}\\) as \\(1/\\sqrt{x}\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first, with the numerator in the order \\(u'v - uv'\\) — never \\(uv' - u'v\\). Note \\(v^2 = (\\sqrt{x})^2 = x\\)." },
        { stepNumber: 5, description: "Substitute \\(u'\\), \\(v\\), \\(u\\), \\(v'\\) into the formula.", workingLatex: "\\frac{dy}{dx} = \\frac{2x\\cdot\\sqrt{x} - (x^2+1)\\cdot\\frac{1}{2\\sqrt{x}}}{x}", explanation: "Plug each piece in. The second numerator term is divided by \\(2\\sqrt{x}\\); the first is not — a nested fraction we'll clear next." },
        { stepNumber: 6, description: "Multiply numerator and denominator by \\(\\sqrt{x}\\) to clear the nested radical.", workingLatex: "\\frac{dy}{dx} = \\frac{2x\\cdot\\sqrt{x}\\cdot\\sqrt{x} - (x^2+1)\\cdot\\frac{\\sqrt{x}}{2\\sqrt{x}}}{x\\cdot\\sqrt{x}}", explanation: "The standard trick for clearing nested surds: multiplying the whole fraction by \\(\\sqrt{x}/\\sqrt{x} = 1\\) doesn't change its value but cancels the inner \\(\\sqrt{x}\\) in the second term." },
        { stepNumber: 7, description: "Simplify each factor using \\(\\sqrt{x}\\cdot\\sqrt{x} = x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{2x\\cdot x - \\frac{x^2+1}{2}}{x\\sqrt{x}} = \\frac{2x^2 - \\frac{x^2+1}{2}}{x\\sqrt{x}}", explanation: "\\(2x\\cdot\\sqrt{x}\\cdot\\sqrt{x} = 2x^2\\); the second term becomes \\((x^2+1)/2\\). The denominator becomes \\(x\\sqrt{x}\\)." },
        { stepNumber: 8, description: "Clear the remaining inner fraction by multiplying through by \\(2/2\\).", workingLatex: "\\frac{dy}{dx} = \\frac{4x^2 - (x^2+1)}{2x\\sqrt{x}}", explanation: "Multiply top and bottom of the outer fraction by \\(2\\): the first numerator term becomes \\(4x^2\\), the second becomes \\(x^2+1\\) (no longer halved), and the denominator picks up a factor of \\(2\\)." },
        { stepNumber: 9, description: "Combine like terms in the numerator.", workingLatex: "4x^2 - (x^2 + 1) = 3x^2 - 1", explanation: "Distribute the minus across the bracket: \\(4x^2 - x^2 - 1 = 3x^2 - 1\\)." },
        { stepNumber: 10, description: "State the consolidated derivative.", workingLatex: "\\frac{dy}{dx} = \\frac{3x^2 - 1}{2x\\sqrt{x}}", explanation: "This is one valid final form, with everything over a single denominator." },
        { stepNumber: 11, description: "Split into separate terms to match the stated answer.", workingLatex: "\\frac{3x^2 - 1}{2x\\sqrt{x}} = \\frac{3x^2}{2x\\sqrt{x}} - \\frac{1}{2x\\sqrt{x}} = \\frac{3\\sqrt{x}}{2} - \\frac{1}{2x\\sqrt{x}}", explanation: "Split the fraction term by term. The first simplifies because \\(3x^2/(x\\sqrt{x}) = 3x/\\sqrt{x} = 3\\sqrt{x}\\) (after rationalising). The two forms are equivalent." }
      ],
      finalAnswer: "\\( \\frac{3\\sqrt{x}}{2} - \\frac{1}{2x\\sqrt{x}} \\)"
    }
  },
  {
    id: "y2df5-057",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 57",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{e^x + 1}{e^x - 1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = e^x + 1,\\quad v = e^x - 1", explanation: "Both numerator and denominator are exponential plus/minus a constant." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = e^x", explanation: "The constant drops out." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = e^x", explanation: "Same — the \\(-1\\) drops out." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(e^x - 1) - (e^x + 1)\\cdot e^x}{(e^x - 1)^2}", explanation: "Bracket both numerator pieces. Both share a factor of \\(e^x\\), so factor it out next." },
        { stepNumber: 6, description: "Factor \\(e^x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x[(e^x - 1) - (e^x + 1)]}{(e^x - 1)^2}", explanation: "Both numerator terms share \\(e^x\\); pulling it out simplifies the bracket." },
        { stepNumber: 7, description: "Simplify the bracket.", workingLatex: "(e^x - 1) - (e^x + 1) = -2", explanation: "The \\(e^x\\) terms cancel; \\(-1 - 1 = -2\\)." },
        { stepNumber: 8, description: "Combine.", workingLatex: "\\frac{dy}{dx} = -\\frac{2e^x}{(e^x - 1)^2}", explanation: "Slot the bracket value back in." }
      ],
      finalAnswer: "\\( -\\frac{2e^x}{(e^x-1)^2} \\)"
    }
  },
  {
    id: "y2df5-058",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 58",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\ln x - 1}{\\ln x + 1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\ln x - 1,\\quad v = \\ln x + 1", explanation: "Both numerator and denominator are \\(\\ln x\\) plus/minus a constant." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\frac{1}{x}", explanation: "Derivative of \\(\\ln x\\); the constant drops out." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\frac{1}{x}", explanation: "Same derivative." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{(1/x)(\\ln x + 1) - (\\ln x - 1)(1/x)}{(\\ln x + 1)^2}", explanation: "Bracket both numerator pieces. Both share \\(1/x\\), so factor it." },
        { stepNumber: 6, description: "Factor \\(1/x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{(1/x)[(\\ln x + 1) - (\\ln x - 1)]}{(\\ln x + 1)^2}", explanation: "Pulls the awkward \\(1/x\\) outside, leaving a clean bracket." },
        { stepNumber: 7, description: "Simplify the bracket.", workingLatex: "(\\ln x + 1) - (\\ln x - 1) = 2", explanation: "The \\(\\ln x\\) terms cancel; \\(1 - (-1) = 2\\)." },
        { stepNumber: 8, description: "Combine.", workingLatex: "\\frac{dy}{dx} = \\frac{2}{x(\\ln x + 1)^2}", explanation: "Multiply: \\((1/x)\\cdot 2 = 2/x\\). The denominator becomes \\(x(\\ln x + 1)^2\\)." }
      ],
      finalAnswer: "\\( \\frac{2}{x(\\ln x + 1)^2} \\)"
    }
  },
  {
    id: "y2df5-059",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 59",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Use the quotient rule to show that \\( \\tfrac{d}{dx}\\bigl(\\dfrac{1}{x^n}\\bigr) = -\\dfrac{n}{x^{n+1}} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule", "proof"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1,\\quad v = x^n", explanation: "Constant on top, power on the bottom." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 0", explanation: "Derivative of a constant." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = nx^{n-1}", explanation: "Power rule." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first; \\(v^2 = (x^n)^2 = x^{2n}\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{0\\cdot x^n - 1\\cdot nx^{n-1}}{x^{2n}} = -\\frac{nx^{n-1}}{x^{2n}}", explanation: "First term zero; second term \\(-nx^{n-1}\\)." },
        { stepNumber: 6, description: "Simplify using index laws.", workingLatex: "\\frac{dy}{dx} = -nx^{n-1-2n} = -nx^{-n-1} = -\\frac{n}{x^{n+1}}", explanation: "Subtract exponents: \\((n-1) - 2n = -n-1\\). This matches the result of differentiating \\(x^{-n}\\) directly via the power rule." }
      ],
      finalAnswer: "\\( -\\frac{n}{x^{n+1}} \\). \\(\\blacksquare\\)"
    }
  },
  {
    id: "y2df5-060",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 60",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1}{\\sin x + \\cos x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1,\\quad v = \\sin x + \\cos x", explanation: "The constant \\(1\\) is the numerator; the trig sum is the denominator. Even with \\(u\\) constant, the quotient rule still works directly." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 0", explanation: "The derivative of any constant is zero. This is important — it kills the \\(u'v\\) term in the numerator." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x - \\sin x", explanation: "Differentiate term by term: \\(\\sin x \\to \\cos x\\) and \\(\\cos x \\to -\\sin x\\). Watch the sign — many students forget the minus on the \\(\\cos x\\) derivative." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. The order is \\(u'v - uv'\\), not \\(uv' - u'v\\); with \\(u'=0\\) only the \\(-uv'\\) term will survive." },
        { stepNumber: 5, description: "Substitute \\(u'\\), \\(v\\), \\(u\\), \\(v'\\) into the formula.", workingLatex: "\\frac{dy}{dx} = \\frac{0\\cdot(\\sin x + \\cos x) - 1\\cdot(\\cos x - \\sin x)}{(\\sin x + \\cos x)^2}", explanation: "Slot every piece in carefully, keeping the bracket around \\(v' = \\cos x - \\sin x\\) so the minus sign can be distributed correctly in the next step." },
        { stepNumber: 6, description: "Expand the numerator — watch the minus distributing.", workingLatex: "\\frac{dy}{dx} = \\frac{0 - (\\cos x - \\sin x)}{(\\sin x + \\cos x)^2} = \\frac{-\\cos x + \\sin x}{(\\sin x + \\cos x)^2}", explanation: "The first term vanishes; the second has its leading minus distributed across the bracket. Distribute carefully: \\(-(\\cos x - \\sin x) = -\\cos x + \\sin x\\)." },
        { stepNumber: 7, description: "Tidy the numerator order.", workingLatex: "\\frac{dy}{dx} = \\frac{\\sin x - \\cos x}{(\\sin x + \\cos x)^2}", explanation: "Rewrite \\(-\\cos x + \\sin x\\) as \\(\\sin x - \\cos x\\) — convention is to lead with the positive term." },
        { stepNumber: 8, description: "State the final form.", workingLatex: "\\frac{dy}{dx} = \\frac{\\sin x - \\cos x}{(\\sin x + \\cos x)^2}", explanation: "Leave the denominator factored as \\((\\sin x + \\cos x)^2\\); expanding via the Pythagorean identity \\(\\sin^2 x + \\cos^2 x = 1\\) would give \\(1 + 2\\sin x\\cos x = 1 + \\sin 2x\\), but the factored form is cleaner. The derivative is zero when \\(\\sin x = \\cos x\\), i.e. \\(\\tan x = 1\\)." }
      ],
      finalAnswer: "\\( \\frac{\\sin x - \\cos x}{(\\sin x + \\cos x)^2} \\)"
    }
  },
  {
    id: "y2df5-061",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 61",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\ln x}{\\sin x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\ln x,\\quad v = \\sin x", explanation: "Log on top, sine on bottom. Domain restrictions: \\(x > 0\\) (from \\(\\ln x\\)) and \\(\\sin x \\ne 0\\) (denominator nonzero), i.e. \\(x \\ne n\\pi\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = \\frac{1}{x}", explanation: "Standard log derivative: \\(\\frac{d}{dx}\\ln x = 1/x\\) for \\(x > 0\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x", explanation: "Standard sine derivative: \\(\\frac{d}{dx}\\sin x = \\cos x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. The numerator is \\(u'v - uv'\\) in that exact order — a sign flip here is the single most common quotient-rule error." },
        { stepNumber: 5, description: "Substitute \\(u'\\), \\(v\\), \\(u\\), \\(v'\\) into the formula.", workingLatex: "\\frac{dy}{dx} = \\frac{\\frac{1}{x}\\cdot\\sin x - \\ln x\\cdot\\cos x}{\\sin^2 x}", explanation: "Plug each piece in, keeping everything visible. The numerator has a nested fraction (one term divided by \\(x\\), the other not) which we'll clear next." },
        { stepNumber: 6, description: "Expand the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{\\frac{\\sin x}{x} - \\cos x\\,\\ln x}{\\sin^2 x}", explanation: "Just tidy notation: \\(\\frac{1}{x}\\cdot\\sin x = \\sin x / x\\), and the second term is the product \\(\\cos x \\cdot \\ln x\\)." },
        { stepNumber: 7, description: "Clear the inner fraction by multiplying numerator and denominator by \\(x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{x\\cdot\\frac{\\sin x}{x} - x\\cdot\\cos x\\,\\ln x}{x\\cdot\\sin^2 x} = \\frac{\\sin x - x\\cos x\\,\\ln x}{x\\sin^2 x}", explanation: "Multiplying the whole fraction by \\(x/x = 1\\) doesn't change its value but cancels the \\(1/x\\) inside the numerator. The first term becomes \\(\\sin x\\); the second picks up an \\(x\\); the denominator becomes \\(x\\sin^2 x\\)." },
        { stepNumber: 8, description: "State the final form.", workingLatex: "\\frac{dy}{dx} = \\frac{\\sin x - x\\cos x\\,\\ln x}{x\\sin^2 x}", explanation: "This is the tidiest single-fraction form, with no nested fractions and the denominator factored." }
      ],
      finalAnswer: "\\( \\frac{\\sin x - x\\cos x\\,\\ln x}{x\\sin^2 x} \\)"
    }
  },
  {
    id: "y2df5-062",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 62",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{e^x}{\\sin x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = e^x,\\quad v = \\sin x", explanation: "Exponential on top, sine on bottom. Domain: \\(\\sin x \\ne 0\\), so \\(x \\ne n\\pi\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = e^x", explanation: "The exponential function is its own derivative — a defining property of \\(e^x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x", explanation: "Standard sine derivative: \\(\\frac{d}{dx}\\sin x = \\cos x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Numerator order is \\(u'v - uv'\\), not \\(uv' - u'v\\) — getting that sign right is the most common slip." },
        { stepNumber: 5, description: "Substitute \\(u'\\), \\(v\\), \\(u\\), \\(v'\\) into the formula.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x\\cdot\\sin x - e^x\\cdot\\cos x}{\\sin^2 x}", explanation: "Slot each piece in. Both numerator terms involve \\(e^x\\), which sets up a clean factorisation in the next step." },
        { stepNumber: 6, description: "Expand the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x\\sin x - e^x\\cos x}{\\sin^2 x}", explanation: "Just tidying notation — the two products are written out with no hidden signs. The minus between them came from the formula, not from any derivative." },
        { stepNumber: 7, description: "Factor \\(e^x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(\\sin x - \\cos x)}{\\sin^2 x}", explanation: "Both numerator terms share \\(e^x\\) — pull it out to give the cleanest factored form. The bracket \\((\\sin x - \\cos x)\\) is zero when \\(\\tan x = 1\\); since \\(e^x > 0\\) always, that's exactly where the derivative is zero." },
        { stepNumber: 8, description: "State the final form.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(\\sin x - \\cos x)}{\\sin^2 x}", explanation: "Leave it factored — expanding would lose the structural information about where the derivative vanishes." }
      ],
      finalAnswer: "\\( \\frac{e^x(\\sin x - \\cos x)}{\\sin^2 x} \\)"
    }
  },
  {
    id: "y2df5-063",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 63",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\cos x}{e^x} \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\cos x,\\quad v = e^x", explanation: "Trig over exponential." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = -\\sin x", explanation: "Standard cosine derivative." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = e^x", explanation: "Self-derivative." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first; \\(v^2 = e^{2x}\\)." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{-\\sin x\\cdot e^x - \\cos x\\cdot e^x}{e^{2x}}", explanation: "Plug each piece in; both terms in the numerator are negative." },
        { stepNumber: 6, description: "Factor and cancel \\(e^x\\).", workingLatex: "\\frac{dy}{dx} = \\frac{-e^x(\\sin x + \\cos x)}{e^{2x}} = -\\frac{\\sin x + \\cos x}{e^x}", explanation: "Pull \\(-e^x\\) from the numerator and cancel with one \\(e^x\\) on the bottom." }
      ],
      finalAnswer: "\\( -\\frac{\\sin x + \\cos x}{e^x} \\)"
    }
  },
  {
    id: "y2df5-064",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 64",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x^3+1}{x^3-1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x^3+1,\\quad v = x^3-1", explanation: "Similar cubics; expect big cancellation in the numerator." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 3x^2", explanation: "Power rule; constant drops." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 3x^2", explanation: "Same — \\(u\\) and \\(v\\) differ only by a constant." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{3x^2(x^3-1) - (x^3+1)\\cdot 3x^2}{(x^3-1)^2}", explanation: "Both numerator pieces share \\(3x^2\\); factoring next will collapse the cubic terms." },
        { stepNumber: 6, description: "Factor \\(3x^2\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{3x^2[(x^3-1) - (x^3+1)]}{(x^3-1)^2}", explanation: "Common factor pulled out; the bracket simplifies dramatically." },
        { stepNumber: 7, description: "Simplify the bracket.", workingLatex: "(x^3-1) - (x^3+1) = -2", explanation: "The \\(x^3\\) terms cancel; constants give \\(-2\\)." },
        { stepNumber: 8, description: "Combine.", workingLatex: "\\frac{dy}{dx} = \\frac{3x^2\\cdot(-2)}{(x^3-1)^2} = -\\frac{6x^2}{(x^3-1)^2}", explanation: "Slot the bracket value back in." }
      ],
      finalAnswer: "\\( -\\frac{6x^2}{(x^3-1)^2} \\)"
    }
  },
  {
    id: "y2df5-065",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 65",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{\\sqrt{x+1}}{x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule", "chain"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = \\sqrt{x+1} = (x+1)^{1/2},\\quad v = x", explanation: "The numerator is a composite — we'll need the chain rule to differentiate it." },
        { stepNumber: 2, description: "Differentiate \\(u\\) using the chain rule.", workingLatex: "u' = \\frac{1}{2}(x+1)^{-1/2}\\cdot 1 = \\frac{1}{2\\sqrt{x+1}}", explanation: "Outer derivative \\(\\frac12(x+1)^{-1/2}\\); inner derivative of \\(x+1\\) is \\(1\\); multiply." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{x/(2\\sqrt{x+1}) - \\sqrt{x+1}\\cdot 1}{x^2}", explanation: "Plug each piece in. The numerator has an awkward nested fraction we'll clear." },
        { stepNumber: 6, description: "Combine the numerator over \\(2\\sqrt{x+1}\\).", workingLatex: "\\frac{dy}{dx} = \\frac{x - 2(x+1)}{2x^2\\sqrt{x+1}}", explanation: "Multiply top and bottom by \\(2\\sqrt{x+1}\\). The trick: \\(\\sqrt{x+1}\\cdot 2\\sqrt{x+1} = 2(x+1)\\)." },
        { stepNumber: 7, description: "Simplify the numerator.", workingLatex: "x - 2(x+1) = x - 2x - 2 = -x - 2 = -(x+2)", explanation: "Distribute the \\(-2\\) carefully." },
        { stepNumber: 8, description: "Final form.", workingLatex: "\\frac{dy}{dx} = -\\frac{x+2}{2x^2\\sqrt{x+1}}", explanation: "Pull the minus out front for tidiness." }
      ],
      finalAnswer: "\\( -\\frac{x+2}{2x^2\\sqrt{x+1}} \\)"
    }
  },
  {
    id: "y2df5-066",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 66",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the stationary point of \\( y = \\dfrac{e^x}{1+x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule", "stationary"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = e^x,\\quad v = 1+x", explanation: "Exponential over linear." },
        { stepNumber: 2, description: "Differentiate \\(u\\) and \\(v\\).", workingLatex: "u' = e^x,\\quad v' = 1", explanation: "Standard derivatives." },
        { stepNumber: 3, description: "Apply the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(1+x) - e^x\\cdot 1}{(1+x)^2}", explanation: "Substitute into the formula." },
        { stepNumber: 4, description: "Factor \\(e^x\\) and simplify.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x[(1+x) - 1]}{(1+x)^2} = \\frac{xe^x}{(1+x)^2}", explanation: "Numerator collapses: \\((1+x) - 1 = x\\)." },
        { stepNumber: 5, description: "Set \\(dy/dx = 0\\).", workingLatex: "\\frac{xe^x}{(1+x)^2} = 0 \\Rightarrow xe^x = 0", explanation: "\\(e^x>0\\) and denominator is nonzero (\\(x\\ne -1\\)), so the numerator factor \\(x\\) drives the zero." },
        { stepNumber: 6, description: "Solve.", workingLatex: "x = 0", explanation: "Direct." },
        { stepNumber: 7, description: "Find the \\(y\\)-coordinate.", workingLatex: "y(0) = \\frac{e^0}{1+0} = \\frac{1}{1} = 1", explanation: "Plug back into the original." },
        { stepNumber: 8, description: "State the stationary point.", workingLatex: "(0, 1)", explanation: "Coordinates of the stationary point." }
      ],
      finalAnswer: "Stationary at \\((0, 1)\\)."
    }
  },
  {
    id: "y2df5-067",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 67",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1 - \\cos x}{\\sin x} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1 - \\cos x,\\quad v = \\sin x", explanation: "Numerator is \\(1 - \\cos x\\); denominator is \\(\\sin x\\). Domain: \\(\\sin x \\ne 0\\), so \\(x \\ne n\\pi\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 0 - (-\\sin x) = \\sin x", explanation: "Derivative of the constant \\(1\\) is zero; derivative of \\(-\\cos x\\) is \\(-(-\\sin x) = +\\sin x\\). Two minus signs combine to a plus — a small but easy slip." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = \\cos x", explanation: "Standard sine derivative: \\(\\frac{d}{dx}\\sin x = \\cos x\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. Order is \\(u'v - uv'\\), not \\(uv' - u'v\\); the sign on the second term must be negative." },
        { stepNumber: 5, description: "Substitute \\(u'\\), \\(v\\), \\(u\\), \\(v'\\) into the formula.", workingLatex: "\\frac{dy}{dx} = \\frac{\\sin x\\cdot\\sin x - (1-\\cos x)\\cdot\\cos x}{\\sin^2 x}", explanation: "Slot each piece in. Keep the bracket around \\(u = 1 - \\cos x\\) so the minus sign distributes correctly across both inner terms in the next step." },
        { stepNumber: 6, description: "Expand the numerator — watch the minus distributing.", workingLatex: "\\frac{dy}{dx} = \\frac{\\sin^2 x - (\\cos x - \\cos^2 x)}{\\sin^2 x} = \\frac{\\sin^2 x - \\cos x + \\cos^2 x}{\\sin^2 x}", explanation: "First write \\(\\sin x \\cdot \\sin x = \\sin^2 x\\) and distribute \\(\\cos x\\) into \\((1-\\cos x)\\) to get \\(\\cos x - \\cos^2 x\\). Then distribute the outer minus: \\(-(\\cos x - \\cos^2 x) = -\\cos x + \\cos^2 x\\)." },
        { stepNumber: 7, description: "Group \\(\\sin^2 x + \\cos^2 x\\) together.", workingLatex: "\\frac{dy}{dx} = \\frac{(\\sin^2 x + \\cos^2 x) - \\cos x}{\\sin^2 x}", explanation: "Reorder the numerator so the two squared-trig terms are adjacent. They are about to collapse via the Pythagorean identity." },
        { stepNumber: 8, description: "Apply the Pythagorean identity \\(\\sin^2 x + \\cos^2 x = 1\\).", workingLatex: "\\frac{dy}{dx} = \\frac{1 - \\cos x}{\\sin^2 x}", explanation: "Replace \\(\\sin^2 x + \\cos^2 x\\) with \\(1\\); the numerator collapses to \\(1 - \\cos x\\). This is the standard Pythagorean simplification you should always look for in trig quotients." },
        { stepNumber: 9, description: "State the final form.", workingLatex: "\\frac{dy}{dx} = \\frac{1 - \\cos x}{\\sin^2 x}", explanation: "The derivative happens to share the structure of the original function (its numerator is the original numerator). Note \\(1 - \\cos x \\ge 0\\) and \\(\\sin^2 x > 0\\) on the domain, so the derivative is non-negative — the function is monotonically increasing on each branch." }
      ],
      finalAnswer: "\\( \\frac{1 - \\cos x}{\\sin^2 x} \\)"
    }
  },
  {
    id: "y2df5-068",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 68",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{1}{x \\ln x} \\) using the quotient rule.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = 1,\\quad v = x\\ln x", explanation: "Numerator is the constant \\(1\\); denominator is the product \\(x\\ln x\\). Domain: \\(x > 0\\) and \\(\\ln x \\ne 0\\), so \\(x > 0\\) with \\(x \\ne 1\\)." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 0", explanation: "The derivative of a constant is zero. This will kill the \\(u'v\\) term in the quotient-rule numerator." },
        { stepNumber: 3, description: "Differentiate \\(v\\) using the product rule.", workingLatex: "v' = \\frac{d}{dx}(x)\\cdot\\ln x + x\\cdot\\frac{d}{dx}(\\ln x) = 1\\cdot\\ln x + x\\cdot\\frac{1}{x}", explanation: "Apply the product rule to \\(x\\ln x\\): derivative of the first factor times the second, plus the first times the derivative of the second. \\(\\frac{d}{dx}\\ln x = 1/x\\)." },
        { stepNumber: 4, description: "Simplify \\(v'\\).", workingLatex: "v' = \\ln x + 1", explanation: "The second term \\(x\\cdot(1/x)\\) collapses to \\(1\\). So \\(v' = \\ln x + 1\\) — a clean expression." },
        { stepNumber: 5, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first. With \\(u' = 0\\) and \\(u = 1\\), the numerator collapses to \\(-v'\\); only the second term survives." },
        { stepNumber: 6, description: "Substitute \\(u'\\), \\(v\\), \\(u\\), \\(v'\\) into the formula.", workingLatex: "\\frac{dy}{dx} = \\frac{0\\cdot(x\\ln x) - 1\\cdot(\\ln x + 1)}{(x\\ln x)^2}", explanation: "Plug each piece in. Keep the brackets around \\(v' = \\ln x + 1\\) so the leading minus distributes correctly in the next step." },
        { stepNumber: 7, description: "Expand the numerator — watch the minus distributing.", workingLatex: "\\frac{dy}{dx} = \\frac{-(\\ln x + 1)}{(x\\ln x)^2}", explanation: "The first term vanishes; the second becomes \\(-(\\ln x + 1)\\). The minus stays outside the bracket — do not flip the signs inside without good reason." },
        { stepNumber: 8, description: "Expand the denominator using \\((ab)^2 = a^2 b^2\\).", workingLatex: "(x\\ln x)^2 = x^2(\\ln x)^2", explanation: "Square each factor of the product separately. The result \\(x^2(\\ln x)^2\\) is cleaner to work with than the squared product." },
        { stepNumber: 9, description: "State the final form.", workingLatex: "\\frac{dy}{dx} = -\\frac{\\ln x + 1}{x^2(\\ln x)^2}", explanation: "Slot the expanded denominator in. The derivative is zero when \\(\\ln x + 1 = 0\\), i.e. \\(x = e^{-1} = 1/e\\) — a stationary point of \\(1/(x\\ln x)\\)." }
      ],
      finalAnswer: "\\( -\\frac{\\ln x + 1}{x^2(\\ln x)^2} \\)"
    }
  },
  {
    id: "y2df5-069",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 69",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x e^x}{x+1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule", "product rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = xe^x,\\quad v = x+1", explanation: "Product on top — differentiating \\(u\\) will need the product rule." },
        { stepNumber: 2, description: "Differentiate \\(u\\) using the product rule.", workingLatex: "u' = 1\\cdot e^x + x\\cdot e^x = e^x(1+x)", explanation: "Product rule: derivative of \\(x\\) times \\(e^x\\), plus \\(x\\) times derivative of \\(e^x\\)." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 1", explanation: "Derivative of \\(x+1\\)." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(1+x)(x+1) - xe^x\\cdot 1}{(x+1)^2}", explanation: "Plug each piece in. Note \\((1+x) = (x+1)\\), so the first term is \\(e^x(x+1)^2\\)." },
        { stepNumber: 6, description: "Factor \\(e^x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x[(x+1)^2 - x]}{(x+1)^2}", explanation: "Both terms share \\(e^x\\); pull it out." },
        { stepNumber: 7, description: "Expand and simplify the bracket.", workingLatex: "(x+1)^2 - x = x^2 + 2x + 1 - x = x^2 + x + 1", explanation: "Standard binomial expansion, then combine." },
        { stepNumber: 8, description: "Combine.", workingLatex: "\\frac{dy}{dx} = \\frac{e^x(x^2 + x + 1)}{(x+1)^2}", explanation: "Slot the simplified bracket back in. The quadratic \\(x^2 + x + 1\\) has discriminant \\(-3 < 0\\), so it is never zero — meaning the derivative is never zero, and the function has no stationary points." }
      ],
      finalAnswer: "\\( \\frac{e^x(x^2 + x + 1)}{(x+1)^2} \\)"
    }
  },
  {
    id: "y2df5-070",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 70",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Verify the derivative of \\( y = \\dfrac{\\sin x}{x} \\) is \\( \\dfrac{x\\cos x - \\sin x}{x^2} \\) by another method (differentiate \\(\\sin x \\cdot x^{-1}\\) via the product rule).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["verification"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Rewrite the quotient as a product.", workingLatex: "y = \\dfrac{\\sin x}{x} = \\sin x\\cdot x^{-1}", explanation: "Move the \\(x\\) from the denominator to the numerator as a negative power. The product rule can now be applied directly to two factors." },
        { stepNumber: 2, description: "Identify \\(u\\) and \\(v\\) for the product rule.", workingLatex: "u = \\sin x,\\quad v = x^{-1}", explanation: "Two factors in a product: \\(u\\) is the trig factor, \\(v\\) is the polynomial (negative-power) factor." },
        { stepNumber: 3, description: "Differentiate \\(u\\).", workingLatex: "u' = \\cos x", explanation: "Standard sine derivative: \\(\\frac{d}{dx}\\sin x = \\cos x\\)." },
        { stepNumber: 4, description: "Differentiate \\(v\\) using the power rule.", workingLatex: "v' = -1\\cdot x^{-2} = -x^{-2}", explanation: "Power rule: bring the exponent \\(-1\\) down as a coefficient and reduce the exponent by one to get \\(-2\\)." },
        { stepNumber: 5, description: "State the product rule.", workingLatex: "\\frac{dy}{dx} = u'v + uv'", explanation: "Formula first. Note the product rule uses a PLUS, unlike the quotient rule's minus." },
        { stepNumber: 6, description: "Substitute \\(u'\\), \\(v\\), \\(u\\), \\(v'\\) into the formula.", workingLatex: "\\frac{dy}{dx} = \\cos x\\cdot x^{-1} + \\sin x\\cdot(-x^{-2})", explanation: "Slot each piece in. Keep everything visible — the negative power in the second term will be tidied next." },
        { stepNumber: 7, description: "Rewrite without negative powers.", workingLatex: "\\frac{dy}{dx} = \\frac{\\cos x}{x} - \\frac{\\sin x}{x^2}", explanation: "Move \\(x^{-1}\\) and \\(x^{-2}\\) back to denominators. The minus sign in front of the second term comes from \\(v' = -x^{-2}\\)." },
        { stepNumber: 8, description: "Combine over a common denominator of \\(x^2\\).", workingLatex: "\\frac{dy}{dx} = \\frac{x\\cos x}{x^2} - \\frac{\\sin x}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}", explanation: "Multiply the first fraction by \\(x/x = 1\\) so both fractions share the denominator \\(x^2\\), then combine the numerators." },
        { stepNumber: 9, description: "Compare with the stated quotient-rule result.", workingLatex: "\\frac{x\\cos x - \\sin x}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}\\quad\\checkmark", explanation: "Both methods produce identical expressions, term for term. The product rule applied to \\(\\sin x \\cdot x^{-1}\\) gives the same answer as the quotient rule applied to \\(\\sin x / x\\) — verifying the result." }
      ],
      finalAnswer: "Matches \\( \\frac{x\\cos x - \\sin x}{x^2} \\). \\(\\checkmark\\)"
    }
  },
  {
    id: "y2df5-071",
    topicRef: "y2df5",
    topicTitle: "The Quotient Rule 71",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Differentiate \\( y = \\dfrac{x^2}{x^2+1} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quotient rule"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify \\(u\\) and \\(v\\).", workingLatex: "u = x^2,\\quad v = x^2+1", explanation: "Quadratic over quadratic." },
        { stepNumber: 2, description: "Differentiate \\(u\\).", workingLatex: "u' = 2x", explanation: "Power rule." },
        { stepNumber: 3, description: "Differentiate \\(v\\).", workingLatex: "v' = 2x", explanation: "Same derivative — \\(u\\) and \\(v\\) differ only by a constant." },
        { stepNumber: 4, description: "State the quotient rule.", workingLatex: "\\frac{dy}{dx} = \\frac{u'v - uv'}{v^2}", explanation: "Formula first." },
        { stepNumber: 5, description: "Substitute.", workingLatex: "\\frac{dy}{dx} = \\frac{2x(x^2+1) - x^2\\cdot 2x}{(x^2+1)^2}", explanation: "Plug each piece in. Both numerator terms share \\(2x\\)." },
        { stepNumber: 6, description: "Factor \\(2x\\) from the numerator.", workingLatex: "\\frac{dy}{dx} = \\frac{2x[(x^2+1) - x^2]}{(x^2+1)^2}", explanation: "Pull \\(2x\\) out; the bracket simplifies dramatically." },
        { stepNumber: 7, description: "Simplify the bracket.", workingLatex: "(x^2+1) - x^2 = 1", explanation: "The \\(x^2\\) terms cancel." },
        { stepNumber: 8, description: "Combine.", workingLatex: "\\frac{dy}{dx} = \\frac{2x}{(x^2+1)^2}", explanation: "Slot the bracket value back in. Stationary at \\(x=0\\)." }
      ],
      finalAnswer: "\\( \\frac{2x}{(x^2+1)^2} \\)"
    }
  },
];
