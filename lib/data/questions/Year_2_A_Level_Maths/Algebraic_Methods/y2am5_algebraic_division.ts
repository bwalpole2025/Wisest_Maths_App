import { Question } from "@/lib/types";

/**
 * Year 2 — Algebraic Methods § 1.5 Algebraic Division
 * Ref: y2am5
 * 71 questions covering polynomial long division of cubics and quartics by
 * linear and quadratic divisors, with and without remainder, factor-theorem
 * style "show (x-k) is a factor and factorise fully" problems, and division
 * with (ax ± b) divisors.
 *
 * All polynomials are built by multiplying divisor × quotient (+ remainder)
 * so answers are verified by construction.
 */
export const questions: Question[] = [
  {
    id: "y2am5-001",
    topicRef: "y2am5",
    topicTitle: "Algebraic Division 01",
    difficulty: "Standard",
    questionText: "Use algebraic division to show that \\( 2x^3 + 5x^2 - 2x - 5 = (2x + 5)(x^2 - 1) \\), hence factorise fully.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["polynomial division", "factorise"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 2x^3 + 5x^2 - 2x - 5 \\text{ by } (2x + 5).", explanation: "We want to verify the stated identity by performing the division. Write the dividend inside the long-division house and the divisor on the left." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "2x + 5", dividend: ["2x^3", "+5x^2", "-2x", "-5"], quotient: ["", "x^2", "", "-1"], steps: [{ subtrahend: ["-2x^3", "-5x^2", "", ""], remainder: ["", "", "-2x", "-5"] }, { subtrahend: ["", "", "2x", "+5"], remainder: ["", "", "", "0"] }] }, explanation: "Divide the leading term, multiply back, subtract, and bring down. Take care with signs when the divisor has a non-unit leading coefficient — at each step you're dividing by \\( 2x \\), not just \\( x \\)." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "2x^3 + 5x^2 - 2x - 5 = (2x + 5)\\,(x^2 - 1).", explanation: "The remainder is zero, confirming the stated identity." },
        { stepNumber: 4, description: "Factorise the quadratic quotient.", workingLatex: "x^2 - 1 = (x-1)(x+1).", explanation: "This is a difference of two squares: \\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = x\\) and \\(b = 1\\)." },
        { stepNumber: 5, description: "Combine to give the full factorisation.", workingLatex: "2x^3 + 5x^2 - 2x - 5 = (2x+5)(x-1)(x+1).", explanation: "All three factors are linear, so this is the complete factorisation over the reals." },
      ],
      finalAnswer: "\\( (2x+5)(x-1)(x+1) \\)",
    },
  },
  // ── Exact division: cubic ÷ (x-k) ────
  {
    id: "y2am5-002", topicRef: "y2am5", topicTitle: "Algebraic Division 02", difficulty: "Foundation", questionText: "Divide \\( x^3 + 2x^2 - x - 2 \\) by \\( (x-1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 2x^2 - x - 2 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^3", "+2x^2", "-x", "-2"], quotient: ["", "x^2", "+3x", "+2"], steps: [{ subtrahend: ["-x^3", "+x^2", "", ""], remainder: ["", "3x^2", "-x", "-2"] }, { subtrahend: ["", "-3x^2", "+3x", ""], remainder: ["", "", "2x", "-2"] }, { subtrahend: ["", "", "-2x", "+2"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 3x + 2, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 2x^2 - x - 2 = (x - 1)\\,(x^2 + 3x + 2).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 3x + 2 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-003", topicRef: "y2am5", topicTitle: "Algebraic Division 03", difficulty: "Foundation", questionText: "Divide \\( x^3 - 5x^2 + 7x - 3 \\) by \\( (x-1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 5x^2 + 7x - 3 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^3", "-5x^2", "+7x", "-3"], quotient: ["", "x^2", "-4x", "+3"], steps: [{ subtrahend: ["-x^3", "+x^2", "", ""], remainder: ["", "-4x^2", "+7x", "-3"] }, { subtrahend: ["", "4x^2", "-4x", ""], remainder: ["", "", "3x", "-3"] }, { subtrahend: ["", "", "-3x", "+3"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - 4x + 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 5x^2 + 7x - 3 = (x - 1)\\,(x^2 - 4x + 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 4x + 3 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-004", topicRef: "y2am5", topicTitle: "Algebraic Division 04", difficulty: "Foundation", questionText: "Divide \\( x^3 - x^2 - 8x + 12 \\) by \\( (x-2) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 - 8x + 12 \\text{ by } (x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["x^3", "-x^2", "-8x", "+12"], quotient: ["", "x^2", "+x", "-6"], steps: [{ subtrahend: ["-x^3", "+2x^2", "", ""], remainder: ["", "x^2", "-8x", "+12"] }, { subtrahend: ["", "-x^2", "+2x", ""], remainder: ["", "", "-6x", "+12"] }, { subtrahend: ["", "", "6x", "-12"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + x - 6, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 - 8x + 12 = (x - 2)\\,(x^2 + x - 6).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + x - 6 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-005", topicRef: "y2am5", topicTitle: "Algebraic Division 05", difficulty: "Foundation", questionText: "Divide \\( x^3 + 3x^2 - 4x - 12 \\) by \\( (x-2) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 3x^2 - 4x - 12 \\text{ by } (x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["x^3", "+3x^2", "-4x", "-12"], quotient: ["", "x^2", "+5x", "+6"], steps: [{ subtrahend: ["-x^3", "+2x^2", "", ""], remainder: ["", "5x^2", "-4x", "-12"] }, { subtrahend: ["", "-5x^2", "+10x", ""], remainder: ["", "", "6x", "-12"] }, { subtrahend: ["", "", "-6x", "+12"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 5x + 6, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 3x^2 - 4x - 12 = (x - 2)\\,(x^2 + 5x + 6).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 5x + 6 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-006", topicRef: "y2am5", topicTitle: "Algebraic Division 06", difficulty: "Foundation", questionText: "Divide \\( x^3 - x^2 - 11x + 15 \\) by \\( (x-3) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 - 11x + 15 \\text{ by } (x - 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 3", dividend: ["x^3", "-x^2", "-11x", "+15"], quotient: ["", "x^2", "+2x", "-5"], steps: [{ subtrahend: ["-x^3", "+3x^2", "", ""], remainder: ["", "2x^2", "-11x", "+15"] }, { subtrahend: ["", "-2x^2", "+6x", ""], remainder: ["", "", "-5x", "+15"] }, { subtrahend: ["", "", "5x", "-15"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 2x - 5, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 - 11x + 15 = (x - 3)\\,(x^2 + 2x - 5).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 2x - 5 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-007", topicRef: "y2am5", topicTitle: "Algebraic Division 07", difficulty: "Foundation", questionText: "Divide \\( x^3 - x^2 - 5x - 3 \\) by \\( (x+1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 - 5x - 3 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["x^3", "-x^2", "-5x", "-3"], quotient: ["", "x^2", "-2x", "-3"], steps: [{ subtrahend: ["-x^3", "-x^2", "", ""], remainder: ["", "-2x^2", "-5x", "-3"] }, { subtrahend: ["", "2x^2", "+2x", ""], remainder: ["", "", "-3x", "-3"] }, { subtrahend: ["", "", "3x", "+3"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - 2x - 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 - 5x - 3 = (x + 1)\\,(x^2 - 2x - 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 2x - 3 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-008", topicRef: "y2am5", topicTitle: "Algebraic Division 08", difficulty: "Foundation", questionText: "Divide \\( x^3 - 3x^2 - 4x + 12 \\) by \\( (x+2) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 3x^2 - 4x + 12 \\text{ by } (x + 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 2", dividend: ["x^3", "-3x^2", "-4x", "+12"], quotient: ["", "x^2", "-5x", "+6"], steps: [{ subtrahend: ["-x^3", "-2x^2", "", ""], remainder: ["", "-5x^2", "-4x", "+12"] }, { subtrahend: ["", "5x^2", "+10x", ""], remainder: ["", "", "6x", "+12"] }, { subtrahend: ["", "", "-6x", "-12"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - 5x + 6, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 3x^2 - 4x + 12 = (x + 2)\\,(x^2 - 5x + 6).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 5x + 6 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-009", topicRef: "y2am5", topicTitle: "Algebraic Division 09", difficulty: "Foundation", questionText: "Divide \\( x^3 - x^2 - 11x + 3 \\) by \\( (x+3) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 - 11x + 3 \\text{ by } (x + 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 3", dividend: ["x^3", "-x^2", "-11x", "+3"], quotient: ["", "x^2", "-4x", "+1"], steps: [{ subtrahend: ["-x^3", "-3x^2", "", ""], remainder: ["", "-4x^2", "-11x", "+3"] }, { subtrahend: ["", "4x^2", "+12x", ""], remainder: ["", "", "x", "+3"] }, { subtrahend: ["", "", "-x", "-3"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - 4x + 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 - 11x + 3 = (x + 3)\\,(x^2 - 4x + 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 4x + 1 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-010", topicRef: "y2am5", topicTitle: "Algebraic Division 10", difficulty: "Standard", questionText: "Divide \\( x^3 - 3x^2 - x - 12 \\) by \\( (x-4) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 3x^2 - x - 12 \\text{ by } (x - 4).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 4", dividend: ["x^3", "-3x^2", "-x", "-12"], quotient: ["", "x^2", "+x", "+3"], steps: [{ subtrahend: ["-x^3", "+4x^2", "", ""], remainder: ["", "x^2", "-x", "-12"] }, { subtrahend: ["", "-x^2", "+4x", ""], remainder: ["", "", "3x", "-12"] }, { subtrahend: ["", "", "-3x", "+12"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + x + 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 3x^2 - x - 12 = (x - 4)\\,(x^2 + x + 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + x + 3 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-011", topicRef: "y2am5", topicTitle: "Algebraic Division 11", difficulty: "Standard", questionText: "Divide \\( x^3 - 3x^2 - 9x - 5 \\) by \\( (x-5) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 3x^2 - 9x - 5 \\text{ by } (x - 5).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 5", dividend: ["x^3", "-3x^2", "-9x", "-5"], quotient: ["", "x^2", "+2x", "+1"], steps: [{ subtrahend: ["-x^3", "+5x^2", "", ""], remainder: ["", "2x^2", "-9x", "-5"] }, { subtrahend: ["", "-2x^2", "+10x", ""], remainder: ["", "", "x", "-5"] }, { subtrahend: ["", "", "-x", "+5"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 2x + 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 3x^2 - 9x - 5 = (x - 5)\\,(x^2 + 2x + 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 2x + 1 = (x+1)^2 \\).",
    }
  },
  {
    id: "y2am5-012", topicRef: "y2am5", topicTitle: "Algebraic Division 12", difficulty: "Foundation", questionText: "Divide \\( x^3 + 4x^2 + x - 6 \\) by \\( (x-1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 4x^2 + x - 6 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^3", "+4x^2", "+x", "-6"], quotient: ["", "x^2", "+5x", "+6"], steps: [{ subtrahend: ["-x^3", "+x^2", "", ""], remainder: ["", "5x^2", "+x", "-6"] }, { subtrahend: ["", "-5x^2", "+5x", ""], remainder: ["", "", "6x", "-6"] }, { subtrahend: ["", "", "-6x", "+6"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 5x + 6, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 4x^2 + x - 6 = (x - 1)\\,(x^2 + 5x + 6).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 5x + 6 \\).",
    }
  },
  {
    id: "y2am5-013", topicRef: "y2am5", topicTitle: "Algebraic Division 13", difficulty: "Foundation", questionText: "Divide \\( x^3 - 5x^2 + 2x + 8 \\) by \\( (x+1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 5x^2 + 2x + 8 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["x^3", "-5x^2", "+2x", "+8"], quotient: ["", "x^2", "-6x", "+8"], steps: [{ subtrahend: ["-x^3", "-x^2", "", ""], remainder: ["", "-6x^2", "+2x", "+8"] }, { subtrahend: ["", "6x^2", "+6x", ""], remainder: ["", "", "8x", "+8"] }, { subtrahend: ["", "", "-8x", "-8"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - 6x + 8, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 5x^2 + 2x + 8 = (x + 1)\\,(x^2 - 6x + 8).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 6x + 8 = (x-2)(x-4) \\).",
    }
  },
  {
    id: "y2am5-014", topicRef: "y2am5", topicTitle: "Algebraic Division 14", difficulty: "Standard", questionText: "Divide \\( x^3 - 3x^2 + 4 \\) by \\( (x-2) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 3x^2 + 4 \\text{ by } (x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["x^3", "-3x^2", "+0", "+4"], quotient: ["", "x^2", "-x", "-2"], steps: [{ subtrahend: ["-x^3", "+2x^2", "", ""], remainder: ["", "-x^2", "+0", "+4"] }, { subtrahend: ["", "x^2", "-2x", ""], remainder: ["", "", "-2x", "+4"] }, { subtrahend: ["", "", "2x", "-4"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - x - 2, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 3x^2 + 4 = (x - 2)\\,(x^2 - x - 2).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - x - 2 = (x-2)(x+1) \\).",
    }
  },
  {
    id: "y2am5-015", topicRef: "y2am5", topicTitle: "Algebraic Division 15", difficulty: "Standard", questionText: "Divide \\( x^3 - 4x^2 - 3x + 18 \\) by \\( (x-3) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 4x^2 - 3x + 18 \\text{ by } (x - 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 3", dividend: ["x^3", "-4x^2", "-3x", "+18"], quotient: ["", "x^2", "-x", "-6"], steps: [{ subtrahend: ["-x^3", "+3x^2", "", ""], remainder: ["", "-x^2", "-3x", "+18"] }, { subtrahend: ["", "x^2", "-3x", ""], remainder: ["", "", "-6x", "+18"] }, { subtrahend: ["", "", "6x", "-18"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - x - 6, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 4x^2 - 3x + 18 = (x - 3)\\,(x^2 - x - 6).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - x - 6 = (x-3)(x+2) \\).",
    }
  },
  {
    id: "y2am5-016", topicRef: "y2am5", topicTitle: "Algebraic Division 16", difficulty: "Standard", questionText: "Divide \\( x^3 + 5x^2 + 5x - 3 \\) by \\( (x+3) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 5x^2 + 5x - 3 \\text{ by } (x + 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 3", dividend: ["x^3", "+5x^2", "+5x", "-3"], quotient: ["", "x^2", "+2x", "-1"], steps: [{ subtrahend: ["-x^3", "-3x^2", "", ""], remainder: ["", "2x^2", "+5x", "-3"] }, { subtrahend: ["", "-2x^2", "-6x", ""], remainder: ["", "", "-x", "-3"] }, { subtrahend: ["", "", "x", "+3"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 2x - 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 5x^2 + 5x - 3 = (x + 3)\\,(x^2 + 2x - 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 2x - 1 \\).",
    }
  },
  {
    id: "y2am5-017", topicRef: "y2am5", topicTitle: "Algebraic Division 17", difficulty: "Standard", questionText: "Divide \\( x^3 + x^2 - x - 1 \\) by \\( (x-1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + x^2 - x - 1 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^3", "+x^2", "-x", "-1"], quotient: ["", "x^2", "+2x", "+1"], steps: [{ subtrahend: ["-x^3", "+x^2", "", ""], remainder: ["", "2x^2", "-x", "-1"] }, { subtrahend: ["", "-2x^2", "+2x", ""], remainder: ["", "", "x", "-1"] }, { subtrahend: ["", "", "-x", "+1"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 2x + 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + x^2 - x - 1 = (x - 1)\\,(x^2 + 2x + 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( (x+1)^2 \\).",
    }
  },
  {
    id: "y2am5-018", topicRef: "y2am5", topicTitle: "Algebraic Division 18", difficulty: "Standard", questionText: "Divide \\( x^3 + 4x^2 + 4x + 1 \\) by \\( (x+1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 4x^2 + 4x + 1 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["x^3", "+4x^2", "+4x", "+1"], quotient: ["", "x^2", "+3x", "+1"], steps: [{ subtrahend: ["-x^3", "-x^2", "", ""], remainder: ["", "3x^2", "+4x", "+1"] }, { subtrahend: ["", "-3x^2", "-3x", ""], remainder: ["", "", "x", "+1"] }, { subtrahend: ["", "", "-x", "-1"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 3x + 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 4x^2 + 4x + 1 = (x + 1)\\,(x^2 + 3x + 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 3x + 1 \\).",
    }
  },
  {
    id: "y2am5-019", topicRef: "y2am5", topicTitle: "Algebraic Division 19", difficulty: "Standard", questionText: "Divide \\( x^3 + x^2 - 2x - 8 \\) by \\( (x-2) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + x^2 - 2x - 8 \\text{ by } (x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["x^3", "+x^2", "-2x", "-8"], quotient: ["", "x^2", "+3x", "+4"], steps: [{ subtrahend: ["-x^3", "+2x^2", "", ""], remainder: ["", "3x^2", "-2x", "-8"] }, { subtrahend: ["", "-3x^2", "+6x", ""], remainder: ["", "", "4x", "-8"] }, { subtrahend: ["", "", "-4x", "+8"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 3x + 4, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + x^2 - 2x - 8 = (x - 2)\\,(x^2 + 3x + 4).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 3x + 4 \\) (has no real roots).",
    }
  },
  {
    id: "y2am5-020", topicRef: "y2am5", topicTitle: "Algebraic Division 20", difficulty: "Standard", questionText: "Divide \\( x^3 - 6x^2 + 11x - 12 \\) by \\( (x-4) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 6x^2 + 11x - 12 \\text{ by } (x - 4).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 4", dividend: ["x^3", "-6x^2", "+11x", "-12"], quotient: ["", "x^2", "-2x", "+3"], steps: [{ subtrahend: ["-x^3", "+4x^2", "", ""], remainder: ["", "-2x^2", "+11x", "-12"] }, { subtrahend: ["", "2x^2", "-8x", ""], remainder: ["", "", "3x", "-12"] }, { subtrahend: ["", "", "-3x", "+12"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - 2x + 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 6x^2 + 11x - 12 = (x - 4)\\,(x^2 - 2x + 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 2x + 3 \\) (discriminant \\(<0\\)).",
    }
  },
  {
    id: "y2am5-021", topicRef: "y2am5", topicTitle: "Algebraic Division 21", difficulty: "Standard", questionText: "Divide \\( x^3 - x^2 - 2x + 8 \\) by \\( (x+2) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 - 2x + 8 \\text{ by } (x + 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 2", dividend: ["x^3", "-x^2", "-2x", "+8"], quotient: ["", "x^2", "-3x", "+4"], steps: [{ subtrahend: ["-x^3", "-2x^2", "", ""], remainder: ["", "-3x^2", "-2x", "+8"] }, { subtrahend: ["", "3x^2", "+6x", ""], remainder: ["", "", "4x", "+8"] }, { subtrahend: ["", "", "-4x", "-8"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - 3x + 4, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 - 2x + 8 = (x + 2)\\,(x^2 - 3x + 4).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 3x + 4 \\).",
    }
  },
  {
    id: "y2am5-022", topicRef: "y2am5", topicTitle: "Algebraic Division 22", difficulty: "Standard", questionText: "Divide \\( x^3 + 3x^2 - x - 3 \\) by \\( (x-1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 3x^2 - x - 3 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^3", "+3x^2", "-x", "-3"], quotient: ["", "x^2", "+4x", "+3"], steps: [{ subtrahend: ["-x^3", "+x^2", "", ""], remainder: ["", "4x^2", "-x", "-3"] }, { subtrahend: ["", "-4x^2", "+4x", ""], remainder: ["", "", "3x", "-3"] }, { subtrahend: ["", "", "-3x", "+3"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 4x + 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 3x^2 - x - 3 = (x - 1)\\,(x^2 + 4x + 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( (x+1)(x+3) \\).",
    }
  },
  {
    id: "y2am5-023", topicRef: "y2am5", topicTitle: "Algebraic Division 23", difficulty: "Standard", questionText: "Divide \\( x^3 - 2x^2 - 2x - 3 \\) by \\( (x-3) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 2x^2 - 2x - 3 \\text{ by } (x - 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 3", dividend: ["x^3", "-2x^2", "-2x", "-3"], quotient: ["", "x^2", "+x", "+1"], steps: [{ subtrahend: ["-x^3", "+3x^2", "", ""], remainder: ["", "x^2", "-2x", "-3"] }, { subtrahend: ["", "-x^2", "+3x", ""], remainder: ["", "", "x", "-3"] }, { subtrahend: ["", "", "-x", "+3"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + x + 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 2x^2 - 2x - 3 = (x - 3)\\,(x^2 + x + 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + x + 1 \\).",
    }
  },
  {
    id: "y2am5-024", topicRef: "y2am5", topicTitle: "Algebraic Division 24", difficulty: "Standard", questionText: "Divide \\( x^3 + 2x^2 - x + 6 \\) by \\( (x+3) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 2x^2 - x + 6 \\text{ by } (x + 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 3", dividend: ["x^3", "+2x^2", "-x", "+6"], quotient: ["", "x^2", "-x", "+2"], steps: [{ subtrahend: ["-x^3", "-3x^2", "", ""], remainder: ["", "-x^2", "-x", "+6"] }, { subtrahend: ["", "x^2", "+3x", ""], remainder: ["", "", "2x", "+6"] }, { subtrahend: ["", "", "-2x", "-6"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - x + 2, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 2x^2 - x + 6 = (x + 3)\\,(x^2 - x + 2).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - x + 2 \\).",
    }
  },
  {
    id: "y2am5-025", topicRef: "y2am5", topicTitle: "Algebraic Division 25", difficulty: "Standard", questionText: "Divide \\( 2x^3 - 3x^2 - 5x + 6 \\) by \\( (x-2) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 2x^3 - 3x^2 - 5x + 6 \\text{ by } (x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["2x^3", "-3x^2", "-5x", "+6"], quotient: ["", "2x^2", "+x", "-3"], steps: [{ subtrahend: ["-2x^3", "+4x^2", "", ""], remainder: ["", "x^2", "-5x", "+6"] }, { subtrahend: ["", "-x^2", "+2x", ""], remainder: ["", "", "-3x", "+6"] }, { subtrahend: ["", "", "3x", "-6"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = 2x^2 + x - 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "2x^3 - 3x^2 - 5x + 6 = (x - 2)\\,(2x^2 + x - 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( 2x^2 + x - 3 = (2x+3)(x-1) \\).",
    }
  },
  {
    id: "y2am5-026", topicRef: "y2am5", topicTitle: "Algebraic Division 26", difficulty: "Standard", questionText: "Divide \\( 2x^3 - x^2 + x + 4 \\) by \\( (x+1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 2x^3 - x^2 + x + 4 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["2x^3", "-x^2", "+x", "+4"], quotient: ["", "2x^2", "-3x", "+4"], steps: [{ subtrahend: ["-2x^3", "-2x^2", "", ""], remainder: ["", "-3x^2", "+x", "+4"] }, { subtrahend: ["", "3x^2", "+3x", ""], remainder: ["", "", "4x", "+4"] }, { subtrahend: ["", "", "-4x", "-4"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = 2x^2 - 3x + 4, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "2x^3 - x^2 + x + 4 = (x + 1)\\,(2x^2 - 3x + 4).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( 2x^2 - 3x + 4 \\) (no real roots).",
    }
  },
  // ── With remainder ────
  {
    id: "y2am5-027", topicRef: "y2am5", topicTitle: "Algebraic Division 27", difficulty: "Standard", questionText: "Divide \\( x^3 + x^2 + x - 2 \\) by \\( (x-1) \\), stating the quotient and remainder.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + x^2 + x - 2 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^3", "+x^2", "+x", "-2"], quotient: ["", "x^2", "+2x", "+3"], steps: [{ subtrahend: ["-x^3", "+x^2", "", ""], remainder: ["", "2x^2", "+x", "-2"] }, { subtrahend: ["", "-2x^2", "+2x", ""], remainder: ["", "", "3x", "-2"] }, { subtrahend: ["", "", "-3x", "+3"], remainder: ["", "", "", "1"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + 2x + 3, \\quad \\text{Remainder} = 1.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + x^2 + x - 2 = (x - 1)\\,(x^2 + 2x + 3) + (1).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 2x + 3 \\), remainder \\( 1 \\).",
    }
  },
  {
    id: "y2am5-028", topicRef: "y2am5", topicTitle: "Algebraic Division 28", difficulty: "Standard", questionText: "Divide \\( x^3 - x^2 - x \\) by \\( (x-2) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 - x \\text{ by } (x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["x^3", "-x^2", "-x", "+0"], quotient: ["", "x^2", "+x", "+1"], steps: [{ subtrahend: ["-x^3", "+2x^2", "", ""], remainder: ["", "x^2", "-x", "+0"] }, { subtrahend: ["", "-x^2", "+2x", ""], remainder: ["", "", "x", "+0"] }, { subtrahend: ["", "", "-x", "+2"], remainder: ["", "", "", "2"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + x + 1, \\quad \\text{Remainder} = 2.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 - x = (x - 2)\\,(x^2 + x + 1) + (2).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + x + 1 \\), remainder \\( 2 \\).",
    }
  },
  {
    id: "y2am5-029", topicRef: "y2am5", topicTitle: "Algebraic Division 29", difficulty: "Standard", questionText: "Divide \\( x^3 - 4x^2 + 5x - 3 \\) by \\( (x-3) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 4x^2 + 5x - 3 \\text{ by } (x - 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 3", dividend: ["x^3", "-4x^2", "+5x", "-3"], quotient: ["", "x^2", "-x", "+2"], steps: [{ subtrahend: ["-x^3", "+3x^2", "", ""], remainder: ["", "-x^2", "+5x", "-3"] }, { subtrahend: ["", "x^2", "-3x", ""], remainder: ["", "", "2x", "-3"] }, { subtrahend: ["", "", "-2x", "+6"], remainder: ["", "", "", "3"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 - x + 2, \\quad \\text{Remainder} = 3.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 4x^2 + 5x - 3 = (x - 3)\\,(x^2 - x + 2) + (3).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - x + 2 \\), remainder \\( 3 \\).",
    }
  },
  {
    id: "y2am5-030", topicRef: "y2am5", topicTitle: "Algebraic Division 30", difficulty: "Standard", questionText: "Divide \\( x^3 + 2x^2 + 1 \\) by \\( (x+1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 2x^2 + 1 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["x^3", "+2x^2", "+0", "+1"], quotient: ["", "x^2", "+x", "-1"], steps: [{ subtrahend: ["-x^3", "-x^2", "", ""], remainder: ["", "x^2", "+0", "+1"] }, { subtrahend: ["", "-x^2", "-x", ""], remainder: ["", "", "-x", "+1"] }, { subtrahend: ["", "", "x", "+1"], remainder: ["", "", "", "2"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + x - 1, \\quad \\text{Remainder} = 2.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 2x^2 + 1 = (x + 1)\\,(x^2 + x - 1) + (2).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + x - 1 \\), remainder \\( 2 \\).",
    }
  },
  {
    id: "y2am5-031", topicRef: "y2am5", topicTitle: "Algebraic Division 31", difficulty: "Standard", questionText: "Divide \\( x^3 + 2x^2 - 3x - 2 \\) by \\( (x+2) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 2x^2 - 3x - 2 \\text{ by } (x + 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 2", dividend: ["x^3", "+2x^2", "-3x", "-2"], quotient: ["", "x^2", "", "-3"], steps: [{ subtrahend: ["-x^3", "-2x^2", "", ""], remainder: ["", "", "-3x", "-2"] }, { subtrahend: ["", "", "3x", "+6"], remainder: ["", "", "", "4"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 - 3, \\quad \\text{Remainder} = 4.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 2x^2 - 3x - 2 = (x + 2)\\,(x^2 - 3) + (4).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 3 \\), remainder \\( 4 \\).",
    }
  },
  {
    id: "y2am5-032", topicRef: "y2am5", topicTitle: "Algebraic Division 32", difficulty: "Standard", questionText: "Divide \\( x^3 - x^2 + 4x - 7 \\) by \\( (x-1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 + 4x - 7 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^3", "-x^2", "+4x", "-7"], quotient: ["", "x^2", "", "+4"], steps: [{ subtrahend: ["-x^3", "+x^2", "", ""], remainder: ["", "", "+4x", "-7"] }, { subtrahend: ["", "", "-4x", "+4"], remainder: ["", "", "", "-3"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + 4, \\quad \\text{Remainder} = -3.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 + 4x - 7 = (x - 1)\\,(x^2 + 4) + (-3).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 4 \\), remainder \\( -3 \\).",
    }
  },
  {
    id: "y2am5-033", topicRef: "y2am5", topicTitle: "Algebraic Division 33", difficulty: "Standard", questionText: "Divide \\( x^3 + x^2 - 5x + 8 \\) by \\( (x+3) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + x^2 - 5x + 8 \\text{ by } (x + 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 3", dividend: ["x^3", "+x^2", "-5x", "+8"], quotient: ["", "x^2", "-2x", "+1"], steps: [{ subtrahend: ["-x^3", "-3x^2", "", ""], remainder: ["", "-2x^2", "-5x", "+8"] }, { subtrahend: ["", "2x^2", "+6x", ""], remainder: ["", "", "x", "+8"] }, { subtrahend: ["", "", "-x", "-3"], remainder: ["", "", "", "5"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 - 2x + 1, \\quad \\text{Remainder} = 5.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + x^2 - 5x + 8 = (x + 3)\\,(x^2 - 2x + 1) + (5).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( (x-1)^2 \\), remainder \\( 5 \\).",
    }
  },
  {
    id: "y2am5-034", topicRef: "y2am5", topicTitle: "Algebraic Division 34", difficulty: "Standard", questionText: "Divide \\( x^3 - 4x^2 + x - 2 \\) by \\( (x-4) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 4x^2 + x - 2 \\text{ by } (x - 4).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 4", dividend: ["x^3", "-4x^2", "+x", "-2"], quotient: ["", "x^2", "", "+1"], steps: [{ subtrahend: ["-x^3", "+4x^2", "", ""], remainder: ["", "", "+x", "-2"] }, { subtrahend: ["", "", "-x", "+4"], remainder: ["", "", "", "2"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + 1, \\quad \\text{Remainder} = 2.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 4x^2 + x - 2 = (x - 4)\\,(x^2 + 1) + (2).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 1 \\), remainder \\( 2 \\).",
    }
  },
  {
    id: "y2am5-035", topicRef: "y2am5", topicTitle: "Algebraic Division 35", difficulty: "Standard", questionText: "Divide \\( 2x^3 - 5x^2 + 5x \\) by \\( (x-2) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 2x^3 - 5x^2 + 5x \\text{ by } (x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["2x^3", "-5x^2", "+5x", "+0"], quotient: ["", "2x^2", "-x", "+3"], steps: [{ subtrahend: ["-2x^3", "+4x^2", "", ""], remainder: ["", "-x^2", "+5x", "+0"] }, { subtrahend: ["", "x^2", "-2x", ""], remainder: ["", "", "3x", "+0"] }, { subtrahend: ["", "", "-3x", "+6"], remainder: ["", "", "", "6"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = 2x^2 - x + 3, \\quad \\text{Remainder} = 6.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "2x^3 - 5x^2 + 5x = (x - 2)\\,(2x^2 - x + 3) + (6).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( 2x^2 - x + 3 \\), remainder \\( 6 \\).",
    }
  },
  {
    id: "y2am5-036", topicRef: "y2am5", topicTitle: "Algebraic Division 36", difficulty: "Standard", questionText: "Divide \\( 3x^3 + 4x^2 - x - 1 \\) by \\( (x+1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 3x^3 + 4x^2 - x - 1 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["3x^3", "+4x^2", "-x", "-1"], quotient: ["", "3x^2", "+x", "-2"], steps: [{ subtrahend: ["-3x^3", "-3x^2", "", ""], remainder: ["", "x^2", "-x", "-1"] }, { subtrahend: ["", "-x^2", "-x", ""], remainder: ["", "", "-2x", "-1"] }, { subtrahend: ["", "", "2x", "+2"], remainder: ["", "", "", "1"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = 3x^2 + x - 2, \\quad \\text{Remainder} = 1.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "3x^3 + 4x^2 - x - 1 = (x + 1)\\,(3x^2 + x - 2) + (1).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( 3x^2 + x - 2 = (3x-2)(x+1) \\), remainder \\( 1 \\).",
    }
  },
  // ── Cubic ÷ quadratic ────
  {
    id: "y2am5-037", topicRef: "y2am5", topicTitle: "Algebraic Division 37", difficulty: "Standard", questionText: "Divide \\( x^3 + 2x^2 + x + 5 \\) by \\( (x^2 + 1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 2x^2 + x + 5 \\text{ by } (x^2 + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 + 1", dividend: ["x^3", "+2x^2", "+x", "+5"], quotient: ["", "", "x", "+2"], steps: [{ subtrahend: ["-x^3", "+0", "-x", ""], remainder: ["", "2x^2", "+0", "+5"] }, { subtrahend: ["", "-2x^2", "+0", "-2"], remainder: ["", "", "", "+3"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x + 2, \\quad \\text{Remainder} = 3.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 2x^2 + x + 5 = (x^2 + 1)\\,(x + 2) + (3).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x + 2 \\), remainder \\( 3 \\).",
    }
  },
  {
    id: "y2am5-038", topicRef: "y2am5", topicTitle: "Algebraic Division 38", difficulty: "Standard", questionText: "Divide \\( x^3 + 4x^2 + x - 6 \\) by \\( (x^2 + x - 2) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 4x^2 + x - 6 \\text{ by } (x^2 + x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 + x - 2", dividend: ["x^3", "+4x^2", "+x", "-6"], quotient: ["", "", "x", "+3"], steps: [{ subtrahend: ["-x^3", "-x^2", "+2x", ""], remainder: ["", "3x^2", "+3x", "-6"] }, { subtrahend: ["", "-3x^2", "-3x", "+6"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x + 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 4x^2 + x - 6 = (x^2 + x - 2)\\,(x + 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x + 3 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-039", topicRef: "y2am5", topicTitle: "Algebraic Division 39", difficulty: "Standard", questionText: "Divide \\( x^3 - x^2 - 2x + 4 \\) by \\( (x^2 - 4) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 - 2x + 4 \\text{ by } (x^2 - 4).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 - 4", dividend: ["x^3", "-x^2", "-2x", "+4"], quotient: ["", "", "x", "-1"], steps: [{ subtrahend: ["-x^3", "+0", "+4x", ""], remainder: ["", "-x^2", "+2x", "+4"] }, { subtrahend: ["", "x^2", "+0", "-4"], remainder: ["", "", "2x", "+0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x - 1, \\quad \\text{Remainder} = 2x.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 - 2x + 4 = (x^2 - 4)\\,(x - 1) + (2x).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x - 1 \\), remainder \\( 2x \\).",
    }
  },
  {
    id: "y2am5-040", topicRef: "y2am5", topicTitle: "Algebraic Division 40", difficulty: "Standard", questionText: "Divide \\( x^3 + 2x^2 - 3x - 5 \\) by \\( (x^2 - 3) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 2x^2 - 3x - 5 \\text{ by } (x^2 - 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 - 3", dividend: ["x^3", "+2x^2", "-3x", "-5"], quotient: ["", "", "x", "+2"], steps: [{ subtrahend: ["-x^3", "+0", "+3x", ""], remainder: ["", "2x^2", "+0", "-5"] }, { subtrahend: ["", "-2x^2", "+0", "+6"], remainder: ["", "", "", "+1"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x + 2, \\quad \\text{Remainder} = 1.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 2x^2 - 3x - 5 = (x^2 - 3)\\,(x + 2) + (1).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x + 2 \\), remainder \\( 1 \\).",
    }
  },
  {
    id: "y2am5-041", topicRef: "y2am5", topicTitle: "Algebraic Division 41", difficulty: "Standard", questionText: "Divide \\( x^3 - x^2 - 5x - 3 \\) by \\( (x^2 + 2x + 1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 - 5x - 3 \\text{ by } (x^2 + 2x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 + 2x + 1", dividend: ["x^3", "-x^2", "-5x", "-3"], quotient: ["", "", "x", "-3"], steps: [{ subtrahend: ["-x^3", "-2x^2", "-x", ""], remainder: ["", "-3x^2", "-6x", "-3"] }, { subtrahend: ["", "3x^2", "+6x", "+3"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x - 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 - 5x - 3 = (x^2 + 2x + 1)\\,(x - 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x - 3 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-042", topicRef: "y2am5", topicTitle: "Algebraic Division 42", difficulty: "Challenge", questionText: "Divide \\( x^3 - 3x^2 - 4x + 17 \\) by \\( (x^2 - x - 6) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 3x^2 - 4x + 17 \\text{ by } (x^2 - x - 6).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 - x - 6", dividend: ["x^3", "-3x^2", "-4x", "+17"], quotient: ["", "", "x", "-2"], steps: [{ subtrahend: ["-x^3", "+x^2", "+6x", ""], remainder: ["", "-2x^2", "+2x", "+17"] }, { subtrahend: ["", "2x^2", "-2x", "-12"], remainder: ["", "", "", "+5"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x - 2, \\quad \\text{Remainder} = 5.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 3x^2 - 4x + 17 = (x^2 - x - 6)\\,(x - 2) + (5).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x - 2 \\), remainder \\( 5 \\).",
    }
  },
  {
    id: "y2am5-043", topicRef: "y2am5", topicTitle: "Algebraic Division 43", difficulty: "Challenge", questionText: "Divide \\( x^3 - 4x^2 - 4 \\) by \\( (x^2 + 1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 4x^2 - 4 \\text{ by } (x^2 + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 + 1", dividend: ["x^3", "-4x^2", "+0", "-4"], quotient: ["", "", "x", "-4"], steps: [{ subtrahend: ["-x^3", "+0", "-x", ""], remainder: ["", "-4x^2", "-x", "-4"] }, { subtrahend: ["", "4x^2", "+0", "+4"], remainder: ["", "", "-x", "+0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x - 4, \\quad \\text{Remainder} = -x.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 4x^2 - 4 = (x^2 + 1)\\,(x - 4) + (-x).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x - 4 \\), remainder \\( -x \\).",
    }
  },
  {
    id: "y2am5-044", topicRef: "y2am5", topicTitle: "Algebraic Division 44", difficulty: "Standard", questionText: "Divide \\( x^3 - x^2 - 2x + 3 \\) by \\( (x^2 - 2x) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - x^2 - 2x + 3 \\text{ by } (x^2 - 2x).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 - 2x", dividend: ["x^3", "-x^2", "-2x", "+3"], quotient: ["", "", "x", "+1"], steps: [{ subtrahend: ["-x^3", "+2x^2", "+0", ""], remainder: ["", "x^2", "-2x", "+3"] }, { subtrahend: ["", "-x^2", "+2x", "+0"], remainder: ["", "", "", "+3"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x + 1, \\quad \\text{Remainder} = 3.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - x^2 - 2x + 3 = (x^2 - 2x)\\,(x + 1) + (3).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x + 1 \\), remainder \\( 3 \\).",
    }
  },
  {
    id: "y2am5-045", topicRef: "y2am5", topicTitle: "Algebraic Division 45", difficulty: "Standard", questionText: "Divide \\( x^3 - 3x + 6 \\) by \\( (x^2 + x - 2) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 3x + 6 \\text{ by } (x^2 + x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 + x - 2", dividend: ["x^3", "+0", "-3x", "+6"], quotient: ["", "", "x", "-1"], steps: [{ subtrahend: ["-x^3", "-x^2", "+2x", ""], remainder: ["", "-x^2", "-x", "+6"] }, { subtrahend: ["", "x^2", "+x", "-2"], remainder: ["", "", "", "+4"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x - 1, \\quad \\text{Remainder} = 4.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 3x + 6 = (x^2 + x - 2)\\,(x - 1) + (4).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x - 1 \\), remainder \\( 4 \\).",
    }
  },
  {
    id: "y2am5-046", topicRef: "y2am5", topicTitle: "Algebraic Division 46", difficulty: "Challenge", questionText: "Divide \\( x^3 + 5x^2 + 5x + 14 \\) by \\( (x^2 + 3) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 5x^2 + 5x + 14 \\text{ by } (x^2 + 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 + 3", dividend: ["x^3", "+5x^2", "+5x", "+14"], quotient: ["", "", "x", "+5"], steps: [{ subtrahend: ["-x^3", "+0", "-3x", ""], remainder: ["", "5x^2", "+2x", "+14"] }, { subtrahend: ["", "-5x^2", "+0", "-15"], remainder: ["", "", "2x", "-1"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x + 5, \\quad \\text{Remainder} = 2x - 1.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 5x^2 + 5x + 14 = (x^2 + 3)\\,(x + 5) + (2x - 1).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x + 5 \\), remainder \\( 2x - 1 \\).",
    }
  },
  // ── Quartic ÷ linear or quadratic ────
  {
    id: "y2am5-047", topicRef: "y2am5", topicTitle: "Algebraic Division 47", difficulty: "Challenge", questionText: "Divide \\( x^4 - 1 \\) by \\( (x - 1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 - 1 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^4", "+0", "+0", "+0", "-1"], quotient: ["", "x^3", "+x^2", "+x", "+1"], steps: [{ subtrahend: ["-x^4", "+x^3", "", "", ""], remainder: ["", "x^3", "+0", "+0", "-1"] }, { subtrahend: ["", "-x^3", "+x^2", "", ""], remainder: ["", "", "x^2", "+0", "-1"] }, { subtrahend: ["", "", "-x^2", "+x", ""], remainder: ["", "", "", "x", "-1"] }, { subtrahend: ["", "", "", "-x", "+1"], remainder: ["", "", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^3 + x^2 + x + 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 - 1 = (x - 1)\\,(x^3 + x^2 + x + 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^3 + x^2 + x + 1 \\).",
    }
  },
  {
    id: "y2am5-048", topicRef: "y2am5", topicTitle: "Algebraic Division 48", difficulty: "Challenge", questionText: "Divide \\( x^4 - x^3 - 8 \\) by \\( (x - 2) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 - x^3 - 8 \\text{ by } (x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["x^4", "-x^3", "+0", "+0", "-8"], quotient: ["", "x^3", "+x^2", "+2x", "+4"], steps: [{ subtrahend: ["-x^4", "+2x^3", "", "", ""], remainder: ["", "x^3", "+0", "+0", "-8"] }, { subtrahend: ["", "-x^3", "+2x^2", "", ""], remainder: ["", "", "2x^2", "+0", "-8"] }, { subtrahend: ["", "", "-2x^2", "+4x", ""], remainder: ["", "", "", "4x", "-8"] }, { subtrahend: ["", "", "", "-4x", "+8"], remainder: ["", "", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^3 + x^2 + 2x + 4, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 - x^3 - 8 = (x - 2)\\,(x^3 + x^2 + 2x + 4).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^3 + x^2 + 2x + 4 \\).",
    }
  },
  {
    id: "y2am5-049", topicRef: "y2am5", topicTitle: "Algebraic Division 49", difficulty: "Challenge", questionText: "Divide \\( x^4 - x^2 + 5x - 2 \\) by \\( (x + 2) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 - x^2 + 5x - 2 \\text{ by } (x + 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 2", dividend: ["x^4", "+0", "-x^2", "+5x", "-2"], quotient: ["", "x^3", "-2x^2", "+3x", "-1"], steps: [{ subtrahend: ["-x^4", "-2x^3", "", "", ""], remainder: ["", "-2x^3", "-x^2", "+5x", "-2"] }, { subtrahend: ["", "2x^3", "+4x^2", "", ""], remainder: ["", "", "3x^2", "+5x", "-2"] }, { subtrahend: ["", "", "-3x^2", "-6x", ""], remainder: ["", "", "", "-x", "-2"] }, { subtrahend: ["", "", "", "x", "+2"], remainder: ["", "", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^3 - 2x^2 + 3x - 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 - x^2 + 5x - 2 = (x + 2)\\,(x^3 - 2x^2 + 3x - 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^3 - 2x^2 + 3x - 1 \\).",
    }
  },
  {
    id: "y2am5-050", topicRef: "y2am5", topicTitle: "Algebraic Division 50", difficulty: "Challenge", questionText: "Divide \\( x^4 + x^3 - 3x^2 + 4x - 3 \\) by \\( (x - 1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 + x^3 - 3x^2 + 4x - 3 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^4", "+x^3", "-3x^2", "+4x", "-3"], quotient: ["", "x^3", "+2x^2", "-x", "+3"], steps: [{ subtrahend: ["-x^4", "+x^3", "", "", ""], remainder: ["", "2x^3", "-3x^2", "+4x", "-3"] }, { subtrahend: ["", "-2x^3", "+2x^2", "", ""], remainder: ["", "", "-x^2", "+4x", "-3"] }, { subtrahend: ["", "", "x^2", "-x", ""], remainder: ["", "", "", "3x", "-3"] }, { subtrahend: ["", "", "", "-3x", "+3"], remainder: ["", "", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^3 + 2x^2 - x + 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 + x^3 - 3x^2 + 4x - 3 = (x - 1)\\,(x^3 + 2x^2 - x + 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^3 + 2x^2 - x + 3 \\).",
    }
  },
  {
    id: "y2am5-051", topicRef: "y2am5", topicTitle: "Algebraic Division 51", difficulty: "Challenge", questionText: "Divide \\( x^4 + 2x^3 + 2x^2 - 2x - 3 \\) by \\( (x^2 - 1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 + 2x^3 + 2x^2 - 2x - 3 \\text{ by } (x^2 - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 - 1", dividend: ["x^4", "+2x^3", "+2x^2", "-2x", "-3"], quotient: ["", "", "x^2", "+2x", "+3"], steps: [{ subtrahend: ["-x^4", "+0", "+x^2", "", ""], remainder: ["", "2x^3", "+3x^2", "-2x", "-3"] }, { subtrahend: ["", "-2x^3", "+0", "+2x", ""], remainder: ["", "", "3x^2", "+0", "-3"] }, { subtrahend: ["", "", "-3x^2", "+0", "+3"], remainder: ["", "", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + 2x + 3, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 + 2x^3 + 2x^2 - 2x - 3 = (x^2 - 1)\\,(x^2 + 2x + 3).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 2x + 3 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-052", topicRef: "y2am5", topicTitle: "Algebraic Division 52", difficulty: "Challenge", questionText: "Divide \\( x^4 + x^2 + 1 \\) by \\( (x^2 + x + 1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 + x^2 + 1 \\text{ by } (x^2 + x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 + x + 1", dividend: ["x^4", "+0", "+x^2", "+0", "+1"], quotient: ["", "", "x^2", "-x", "+1"], steps: [{ subtrahend: ["-x^4", "-x^3", "-x^2", "", ""], remainder: ["", "-x^3", "+0", "+0", "+1"] }, { subtrahend: ["", "x^3", "+x^2", "+x", ""], remainder: ["", "", "x^2", "+x", "+1"] }, { subtrahend: ["", "", "-x^2", "-x", "-1"], remainder: ["", "", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - x + 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 + x^2 + 1 = (x^2 + x + 1)\\,(x^2 - x + 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - x + 1 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-053", topicRef: "y2am5", topicTitle: "Algebraic Division 53", difficulty: "Challenge", questionText: "Divide \\( x^4 - x^2 + x - 5 \\) by \\( (x^2 + 2) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 - x^2 + x - 5 \\text{ by } (x^2 + 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 + 2", dividend: ["x^4", "+0", "-x^2", "+x", "-5"], quotient: ["", "", "x^2", "", "-3"], steps: [{ subtrahend: ["-x^4", "+0", "-2x^2", "", ""], remainder: ["", "", "-3x^2", "+x", "-5"] }, { subtrahend: ["", "", "3x^2", "+0", "+6"], remainder: ["", "", "", "x", "+1"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 - 3, \\quad \\text{Remainder} = x + 1.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 - x^2 + x - 5 = (x^2 + 2)\\,(x^2 - 3) + (x + 1).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 3 \\), remainder \\( x + 1 \\).",
    }
  },
  {
    id: "y2am5-054", topicRef: "y2am5", topicTitle: "Algebraic Division 54", difficulty: "Challenge", questionText: "Divide \\( x^4 - x^2 + 1 \\) by \\( (x^2 - x) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 - x^2 + 1 \\text{ by } (x^2 - x).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 - x", dividend: ["x^4", "+0", "-x^2", "+0", "+1"], quotient: ["", "", "x^2", "+x", ""], steps: [{ subtrahend: ["-x^4", "+x^3", "+0", "", ""], remainder: ["", "x^3", "-x^2", "+0", "+1"] }, { subtrahend: ["", "-x^3", "+x^2", "+0", ""], remainder: ["", "", "", "+0", "+1"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + x, \\quad \\text{Remainder} = 1.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 - x^2 + 1 = (x^2 - x)\\,(x^2 + x) + (1).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + x \\), remainder \\( 1 \\).",
    }
  },
  {
    id: "y2am5-055", topicRef: "y2am5", topicTitle: "Algebraic Division 55", difficulty: "Challenge", questionText: "Divide \\( x^4 + x^3 + x^2 - x \\) by \\( (x - 1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "quartic", "remainder"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 + x^3 + x^2 - x \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^4", "+x^3", "+x^2", "-x", "+0"], quotient: ["", "x^3", "+2x^2", "+3x", "+2"], steps: [{ subtrahend: ["-x^4", "+x^3", "", "", ""], remainder: ["", "2x^3", "+x^2", "-x", "+0"] }, { subtrahend: ["", "-2x^3", "+2x^2", "", ""], remainder: ["", "", "3x^2", "-x", "+0"] }, { subtrahend: ["", "", "-3x^2", "+3x", ""], remainder: ["", "", "", "2x", "+0"] }, { subtrahend: ["", "", "", "-2x", "+2"], remainder: ["", "", "", "", "2"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^3 + 2x^2 + 3x + 2, \\quad \\text{Remainder} = 2.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 + x^3 + x^2 - x = (x - 1)\\,(x^3 + 2x^2 + 3x + 2) + (2).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^3 + 2x^2 + 3x + 2 \\), remainder \\( 2 \\).",
    }
  },
  {
    id: "y2am5-056", topicRef: "y2am5", topicTitle: "Algebraic Division 56", difficulty: "Challenge", questionText: "Divide \\( x^4 - 2x^3 - x^2 + 3x + 1 \\) by \\( (x + 1) \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 - 2x^3 - x^2 + 3x + 1 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["x^4", "-2x^3", "-x^2", "+3x", "+1"], quotient: ["", "x^3", "-3x^2", "+2x", "+1"], steps: [{ subtrahend: ["-x^4", "-x^3", "", "", ""], remainder: ["", "-3x^3", "-x^2", "+3x", "+1"] }, { subtrahend: ["", "3x^3", "+3x^2", "", ""], remainder: ["", "", "2x^2", "+3x", "+1"] }, { subtrahend: ["", "", "-2x^2", "-2x", ""], remainder: ["", "", "", "x", "+1"] }, { subtrahend: ["", "", "", "-x", "-1"], remainder: ["", "", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^3 - 3x^2 + 2x + 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^4 - 2x^3 - x^2 + 3x + 1 = (x + 1)\\,(x^3 - 3x^2 + 2x + 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^3 - 3x^2 + 2x + 1 \\).",
    }
  },
  // ── (ax + b) divisor ────
  {
    id: "y2am5-057", topicRef: "y2am5", topicTitle: "Algebraic Division 57", difficulty: "Challenge", questionText: "Divide \\( 2x^3 + 3x^2 - 2x + 1 \\) by \\( (2x - 1) \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 2x^3 + 3x^2 - 2x + 1 \\text{ by } (2x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "2x - 1", dividend: ["2x^3", "+3x^2", "-2x", "+1"], quotient: ["", "x^2", "+2x", ""], steps: [{ subtrahend: ["-2x^3", "+x^2", "", ""], remainder: ["", "4x^2", "-2x", "+1"] }, { subtrahend: ["", "-4x^2", "+2x", ""], remainder: ["", "", "", "+1"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + 2x, \\quad \\text{Remainder} = 1.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "2x^3 + 3x^2 - 2x + 1 = (2x - 1)\\,(x^2 + 2x) + (1).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 2x \\), remainder \\( 1 \\).",
    }
  },
  {
    id: "y2am5-058", topicRef: "y2am5", topicTitle: "Algebraic Division 58", difficulty: "Challenge", questionText: "Divide \\( 2x^3 + 3x^2 - 5x - 1 \\) by \\( (2x + 1) \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 2x^3 + 3x^2 - 5x - 1 \\text{ by } (2x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "2x + 1", dividend: ["2x^3", "+3x^2", "-5x", "-1"], quotient: ["", "x^2", "+x", "-3"], steps: [{ subtrahend: ["-2x^3", "-x^2", "", ""], remainder: ["", "2x^2", "-5x", "-1"] }, { subtrahend: ["", "-2x^2", "-x", ""], remainder: ["", "", "-6x", "-1"] }, { subtrahend: ["", "", "6x", "+3"], remainder: ["", "", "", "2"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + x - 3, \\quad \\text{Remainder} = 2.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "2x^3 + 3x^2 - 5x - 1 = (2x + 1)\\,(x^2 + x - 3) + (2).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + x - 3 \\), remainder \\( 2 \\).",
    }
  },
  {
    id: "y2am5-059", topicRef: "y2am5", topicTitle: "Algebraic Division 59", difficulty: "Challenge", questionText: "Divide \\( 3x^3 - x^2 + 6x + 3 \\) by \\( (3x - 1) \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 3x^3 - x^2 + 6x + 3 \\text{ by } (3x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "3x - 1", dividend: ["3x^3", "-x^2", "+6x", "+3"], quotient: ["", "x^2", "", "+2"], steps: [{ subtrahend: ["-3x^3", "+x^2", "", ""], remainder: ["", "", "+6x", "+3"] }, { subtrahend: ["", "", "-6x", "+2"], remainder: ["", "", "", "5"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + 2, \\quad \\text{Remainder} = 5.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "3x^3 - x^2 + 6x + 3 = (3x - 1)\\,(x^2 + 2) + (5).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 + 2 \\), remainder \\( 5 \\).",
    }
  },
  {
    id: "y2am5-060", topicRef: "y2am5", topicTitle: "Algebraic Division 60", difficulty: "Challenge", questionText: "Divide \\( 2x^3 - x^2 - 5x + 3 \\) by \\( (2x + 3) \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 2x^3 - x^2 - 5x + 3 \\text{ by } (2x + 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "2x + 3", dividend: ["2x^3", "-x^2", "-5x", "+3"], quotient: ["", "x^2", "-2x", "+\\frac{1}{2}"], steps: [{ subtrahend: ["-2x^3", "-3x^2", "", ""], remainder: ["", "-4x^2", "-5x", "+3"] }, { subtrahend: ["", "4x^2", "+6x", ""], remainder: ["", "", "x", "+3"] }, { subtrahend: ["", "", "-x", "-\\frac{3}{2}"], remainder: ["", "", "", "\\frac{3}{2}"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 - 2x + \\frac{1}{2}, \\quad \\text{Remainder} = \\frac{3}{2}.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "2x^3 - x^2 - 5x + 3 = (2x + 3)\\,(x^2 - 2x + \\frac{1}{2}) + (\\frac{3}{2}).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - 2x + \\tfrac{1}{2} \\), remainder \\( \\tfrac{3}{2} \\).",
    }
  },
  // ── Factor theorem → factorise fully ────
  {
    id: "y2am5-061", topicRef: "y2am5", topicTitle: "Algebraic Division 61", difficulty: "Standard", questionText: "Given that \\( (x - 1) \\) is a factor, factorise \\( x^3 - 6x^2 + 11x - 6 \\) completely.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["factorise", "polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 6x^2 + 11x - 6 \\text{ by } (x - 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^3", "-6x^2", "+11x", "-6"], quotient: ["", "x^2", "-5x", "+6"], steps: [{ subtrahend: ["-x^3", "+x^2", "", ""], remainder: ["", "-5x^2", "+11x", "-6"] }, { subtrahend: ["", "5x^2", "-5x", ""], remainder: ["", "", "6x", "-6"] }, { subtrahend: ["", "", "-6x", "+6"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - 5x + 6, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 6x^2 + 11x - 6 = (x - 1)\\,(x^2 - 5x + 6).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
        { stepNumber: 5, description: "Factorise the quadratic quotient.", workingLatex: "x^2 - 5x + 6 = (x - 3)(x - 2).", explanation: "Look for two numbers whose product is the constant term (times the leading coefficient if non-monic) and whose sum is the middle coefficient." },
        { stepNumber: 6, description: "Assemble the full factorisation.", workingLatex: "x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 3)(x - 2).", explanation: "Combine the given linear factor with the factorised quadratic to write the cubic as a product of three linear factors." },
      ],
      finalAnswer: "\\( (x-1)(x-2)(x-3) \\)",
    }
  },
  {
    id: "y2am5-062", topicRef: "y2am5", topicTitle: "Algebraic Division 62", difficulty: "Standard", questionText: "Given that \\( (x + 2) \\) is a factor, factorise \\( x^3 + x^2 - 4x - 4 \\) completely.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["factorise", "polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + x^2 - 4x - 4 \\text{ by } (x + 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 2", dividend: ["x^3", "+x^2", "-4x", "-4"], quotient: ["", "x^2", "-x", "-2"], steps: [{ subtrahend: ["-x^3", "-2x^2", "", ""], remainder: ["", "-x^2", "-4x", "-4"] }, { subtrahend: ["", "x^2", "+2x", ""], remainder: ["", "", "-2x", "-4"] }, { subtrahend: ["", "", "2x", "+4"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - x - 2, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + x^2 - 4x - 4 = (x + 2)\\,(x^2 - x - 2).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
        { stepNumber: 5, description: "Factorise the quadratic quotient.", workingLatex: "x^2 - x - 2 = (x + 1)(x - 2).", explanation: "Look for two numbers whose product is the constant term (times the leading coefficient if non-monic) and whose sum is the middle coefficient." },
        { stepNumber: 6, description: "Assemble the full factorisation.", workingLatex: "x^3 + x^2 - 4x - 4 = (x + 1)(x - 2)(x + 2).", explanation: "Combine the given linear factor with the factorised quadratic to write the cubic as a product of three linear factors." },
      ],
      finalAnswer: "\\( (x+2)(x-2)(x+1) \\)",
    }
  },
  {
    id: "y2am5-063", topicRef: "y2am5", topicTitle: "Algebraic Division 63", difficulty: "Standard", questionText: "Given that \\( (x - 3) \\) is a factor, factorise \\( x^3 - 2x^2 - 5x + 6 \\) completely.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["factorise", "polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 2x^2 - 5x + 6 \\text{ by } (x - 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 3", dividend: ["x^3", "-2x^2", "-5x", "+6"], quotient: ["", "x^2", "+x", "-2"], steps: [{ subtrahend: ["-x^3", "+3x^2", "", ""], remainder: ["", "x^2", "-5x", "+6"] }, { subtrahend: ["", "-x^2", "+3x", ""], remainder: ["", "", "-2x", "+6"] }, { subtrahend: ["", "", "2x", "-6"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 + x - 2, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 2x^2 - 5x + 6 = (x - 3)\\,(x^2 + x - 2).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
        { stepNumber: 5, description: "Factorise the quadratic quotient.", workingLatex: "x^2 + x - 2 = (x - 1)(x + 2).", explanation: "Look for two numbers whose product is the constant term (times the leading coefficient if non-monic) and whose sum is the middle coefficient." },
        { stepNumber: 6, description: "Assemble the full factorisation.", workingLatex: "x^3 - 2x^2 - 5x + 6 = (x - 1)(x - 3)(x + 2).", explanation: "Combine the given linear factor with the factorised quadratic to write the cubic as a product of three linear factors." },
      ],
      finalAnswer: "\\( (x-3)(x+2)(x-1) \\)",
    }
  },
  {
    id: "y2am5-064", topicRef: "y2am5", topicTitle: "Algebraic Division 64", difficulty: "Standard", questionText: "Given that \\( (x + 1) \\) is a factor, factorise \\( x^3 - 7x - 6 \\) completely.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["factorise", "polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 - 7x - 6 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["x^3", "+0", "-7x", "-6"], quotient: ["", "x^2", "-x", "-6"], steps: [{ subtrahend: ["-x^3", "-x^2", "", ""], remainder: ["", "-x^2", "-7x", "-6"] }, { subtrahend: ["", "x^2", "+x", ""], remainder: ["", "", "-6x", "-6"] }, { subtrahend: ["", "", "6x", "+6"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - x - 6, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 - 7x - 6 = (x + 1)\\,(x^2 - x - 6).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
        { stepNumber: 5, description: "Factorise the quadratic quotient.", workingLatex: "x^2 - x - 6 = (x - 3)(x + 2).", explanation: "Look for two numbers whose product is the constant term (times the leading coefficient if non-monic) and whose sum is the middle coefficient." },
        { stepNumber: 6, description: "Assemble the full factorisation.", workingLatex: "x^3 - 7x - 6 = (x + 1)(x - 3)(x + 2).", explanation: "Combine the given linear factor with the factorised quadratic to write the cubic as a product of three linear factors." },
      ],
      finalAnswer: "\\( (x+1)(x-3)(x+2) \\)",
    }
  },
  {
    id: "y2am5-065", topicRef: "y2am5", topicTitle: "Algebraic Division 65", difficulty: "Challenge", questionText: "Given that \\( (x + 3) \\) is a factor, factorise \\( 2x^3 + 5x^2 - 9x - 18 \\) completely.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["factorise", "polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 2x^3 + 5x^2 - 9x - 18 \\text{ by } (x + 3).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 3", dividend: ["2x^3", "+5x^2", "-9x", "-18"], quotient: ["", "2x^2", "-x", "-6"], steps: [{ subtrahend: ["-2x^3", "-6x^2", "", ""], remainder: ["", "-x^2", "-9x", "-18"] }, { subtrahend: ["", "x^2", "+3x", ""], remainder: ["", "", "-6x", "-18"] }, { subtrahend: ["", "", "6x", "+18"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = 2x^2 - x - 6, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "2x^3 + 5x^2 - 9x - 18 = (x + 3)\\,(2x^2 - x - 6).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
        { stepNumber: 5, description: "Factorise the quadratic quotient.", workingLatex: "2x^2 - x - 6 = (x - 2)(2x + 3).", explanation: "Look for two numbers whose product is the constant term (times the leading coefficient if non-monic) and whose sum is the middle coefficient." },
        { stepNumber: 6, description: "Assemble the full factorisation.", workingLatex: "2x^3 + 5x^2 - 9x - 18 = (x - 2)(x + 3)(2x + 3).", explanation: "Combine the given linear factor with the factorised quadratic to write the cubic as a product of three linear factors." },
      ],
      finalAnswer: "\\( (x+3)(2x+3)(x-2) \\)",
    }
  },
  {
    id: "y2am5-066", topicRef: "y2am5", topicTitle: "Algebraic Division 66", difficulty: "Challenge", questionText: "Given that \\( (x - 2) \\) is a factor, factorise \\( 3x^3 - 7x^2 + 4 \\) completely.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["factorise", "polynomial division"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 3x^3 - 7x^2 + 4 \\text{ by } (x - 2).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["3x^3", "-7x^2", "+0", "+4"], quotient: ["", "3x^2", "-x", "-2"], steps: [{ subtrahend: ["-3x^3", "+6x^2", "", ""], remainder: ["", "-x^2", "+0", "+4"] }, { subtrahend: ["", "x^2", "-2x", ""], remainder: ["", "", "-2x", "+4"] }, { subtrahend: ["", "", "2x", "-4"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = 3x^2 - x - 2, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "3x^3 - 7x^2 + 4 = (x - 2)\\,(3x^2 - x - 2).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
        { stepNumber: 5, description: "Factorise the quadratic quotient.", workingLatex: "3x^2 - x - 2 = (x - 1)(3x + 2).", explanation: "Look for two numbers whose product is the constant term (times the leading coefficient if non-monic) and whose sum is the middle coefficient." },
        { stepNumber: 6, description: "Assemble the full factorisation.", workingLatex: "3x^3 - 7x^2 + 4 = (x - 1)(x - 2)(3x + 2).", explanation: "Combine the given linear factor with the factorised quadratic to write the cubic as a product of three linear factors." },
      ],
      finalAnswer: "\\( (x-2)(3x+2)(x-1) \\)",
    }
  },
  {
    id: "y2am5-067", topicRef: "y2am5", topicTitle: "Algebraic Division 67", difficulty: "Challenge", questionText: "Divide \\( x^4 + 2x^3 - 7x^2 - 8x + 12 \\) by \\( (x - 2) \\), then factorise the quotient to fully factorise the quartic.", marks: 6, examStyle: true, yearCreated: 2026, tags: ["factorise", "polynomial division", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 + 2x^3 - 7x^2 - 8x + 12 \\text{ by } (x - 2).", explanation: "Place the quartic inside the long-division 'house' with all coefficients (including any zero coefficient for missing powers) and put the divisor on the left." },
        { stepNumber: 2, description: "Carry out the first long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["x^4", "+2x^3", "-7x^2", "-8x", "+12"], quotient: ["", "x^3", "+4x^2", "+x", "-6"], steps: [{ subtrahend: ["-x^4", "+2x^3", "", "", ""], remainder: ["", "4x^3", "-7x^2", "-8x", "+12"] }, { subtrahend: ["", "-4x^3", "+8x^2", "", ""], remainder: ["", "", "x^2", "-8x", "+12"] }, { subtrahend: ["", "", "-x^2", "+2x", ""], remainder: ["", "", "", "-6x", "+12"] }, { subtrahend: ["", "", "", "6x", "-12"], remainder: ["", "", "", "", "0"] }] }, explanation: "Divide leading terms, multiply back, subtract, repeat. At the end the remainder is zero, so \\( (x-2) \\) is indeed a factor of the quartic." },
        { stepNumber: 3, description: "Read off the cubic quotient.", workingLatex: "x^4 + 2x^3 - 7x^2 - 8x + 12 = (x - 2)\\,(x^3 + 4x^2 + x - 6).", explanation: "We have reduced the problem to factorising a cubic. The next move is to find another linear factor of that cubic." },
        { stepNumber: 4, description: "Test small values to find another factor of the cubic.", workingLatex: "p(x) = x^3 + 4x^2 + x - 6, \\quad p(1) = 0,", explanation: "By the factor theorem, since the cubic vanishes at \\( x = 1 \\), the polynomial \\( (x-1) \\) is a factor. Try the integer divisors of the constant term first." },
        { stepNumber: 5, description: "Divide the cubic by the new linear factor.", workingLatex: "", longDivision: { divisor: "x - 1", dividend: ["x^3", "+4x^2", "+x", "-6"], quotient: ["", "x^2", "+5x", "+6"], steps: [{ subtrahend: ["-x^3", "+x^2", "", ""], remainder: ["", "5x^2", "+x", "-6"] }, { subtrahend: ["", "-5x^2", "+5x", ""], remainder: ["", "", "6x", "-6"] }, { subtrahend: ["", "", "-6x", "+6"], remainder: ["", "", "", "0"] }] }, explanation: "Same procedure as before — divide, multiply back, subtract. The remainder is zero, confirming the factor." },
        { stepNumber: 6, description: "Factorise the resulting quadratic.", workingLatex: "x^2 + 5x + 6 = (x + 2)(x + 3).", explanation: "Two numbers that multiply to the constant term and add to the middle coefficient give the factorisation." },
        { stepNumber: 7, description: "Assemble the full factorisation of the quartic.", workingLatex: "x^4 + 2x^3 - 7x^2 - 8x + 12 = (x - 1)(x - 2)(x + 2)(x + 3).", explanation: "Combine the two linear factors found by division with the factorised quadratic. All four factors are linear, so this is the complete factorisation over the reals." },
      ],
      finalAnswer: "\\( (x-2)(x-1)(x+2)(x+3) \\)",
    }
  },
  {
    id: "y2am5-068", topicRef: "y2am5", topicTitle: "Algebraic Division 68", difficulty: "Standard", questionText: "Divide \\( x^3 + 1 \\) by \\( (x + 1) \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["polynomial division", "sum of cubes"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 1 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["x^3", "+0", "+0", "+1"], quotient: ["", "x^2", "-x", "+1"], steps: [{ subtrahend: ["-x^3", "-x^2", "", ""], remainder: ["", "-x^2", "+0", "+1"] }, { subtrahend: ["", "x^2", "+x", ""], remainder: ["", "", "x", "+1"] }, { subtrahend: ["", "", "-x", "-1"], remainder: ["", "", "", "0"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "\\text{Quotient} = x^2 - x + 1, \\quad \\text{Remainder} = 0.", explanation: "Because the remainder is zero the divisor is a factor of the dividend, so the dividend equals divisor times quotient exactly." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 1 = (x + 1)\\,(x^2 - x + 1).", explanation: "A quick sanity check: expand the right-hand side mentally and confirm it matches the dividend." },
      ],
      finalAnswer: "Quotient \\( x^2 - x + 1 \\), remainder \\( 0 \\).",
    }
  },
  {
    id: "y2am5-069", topicRef: "y2am5", topicTitle: "Algebraic Division 69", difficulty: "Challenge", questionText: "Divide \\( x^4 - 16 \\) by \\( (x - 2) \\), and hence factorise \\( x^4 - 16 \\) completely.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "factorise", "quartic"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^4 - 16 \\text{ by } (x - 2).", explanation: "Insert zero coefficients for the missing \\( x^3 \\), \\( x^2 \\) and \\( x \\) terms before dividing — keeping the columns aligned prevents subtraction slips." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x - 2", dividend: ["x^4", "+0", "+0", "+0", "-16"], quotient: ["", "x^3", "+2x^2", "+4x", "+8"], steps: [{ subtrahend: ["-x^4", "+2x^3", "", "", ""], remainder: ["", "2x^3", "+0", "+0", "-16"] }, { subtrahend: ["", "-2x^3", "+4x^2", "", ""], remainder: ["", "", "4x^2", "+0", "-16"] }, { subtrahend: ["", "", "-4x^2", "+8x", ""], remainder: ["", "", "", "8x", "-16"] }, { subtrahend: ["", "", "", "-8x", "+16"], remainder: ["", "", "", "", "0"] }] }, explanation: "At each stage divide the leading term, multiply back, subtract, then bring down. Watch the signs carefully on each subtraction step." },
        { stepNumber: 3, description: "Read off the quotient.", workingLatex: "x^4 - 16 = (x-2)(x^3 + 2x^2 + 4x + 8).", explanation: "The remainder is zero, so \\( (x-2) \\) is a factor — consistent with \\( x = 2 \\) giving \\( 2^4 - 16 = 0 \\)." },
        { stepNumber: 4, description: "Factorise the cubic by grouping.", workingLatex: "x^3 + 2x^2 + 4x + 8 = x^2(x+2) + 4(x+2) = (x+2)(x^2 + 4).", explanation: "Group the cubic in pairs and factor each pair, then take out the common bracket \\( (x+2) \\). The factor \\( x^2 + 4 \\) has no real roots, so it is irreducible over the reals." },
        { stepNumber: 5, description: "Combine to give the full real factorisation.", workingLatex: "x^4 - 16 = (x-2)(x+2)(x^2 + 4).", explanation: "Over the reals this is fully factorised — the quadratic \\( x^2 + 4 \\) cannot split further without complex numbers." },
      ],
      finalAnswer: "\\( (x-2)(x+2)(x^2 + 4) \\) (fully factorised over \\( \\mathbb{R} \\)).",
    }
  },
  {
    id: "y2am5-070", topicRef: "y2am5", topicTitle: "Algebraic Division 70", difficulty: "Challenge", questionText: "Use algebraic division to express \\( \\dfrac{x^3 + 2x^2 + 3}{x + 1} \\) in the form \\( ax^2 + bx + c + \\dfrac{r}{x+1} \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "improper"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } x^3 + 2x^2 + 3 \\text{ by } (x + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x + 1", dividend: ["x^3", "+2x^2", "+0", "+3"], quotient: ["", "x^2", "+x", "-1"], steps: [{ subtrahend: ["-x^3", "-x^2", "", ""], remainder: ["", "x^2", "+0", "+3"] }, { subtrahend: ["", "-x^2", "-x", ""], remainder: ["", "", "-x", "+3"] }, { subtrahend: ["", "", "x", "+1"], remainder: ["", "", "", "4"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = x^2 + x - 1, \\quad \\text{Remainder} = 4.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "x^3 + 2x^2 + 3 = (x + 1)\\,(x^2 + x - 1) + (4).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
        { stepNumber: 5, description: "Rewrite as polynomial plus proper fraction.", workingLatex: "\\dfrac{x^3 + 2x^2 + 3}{x + 1} = x^2 + x - 1 + \\dfrac{4}{x + 1}.", explanation: "Dividing the identity through by the divisor splits the improper fraction into a polynomial part and a proper fraction whose numerator has lower degree than the denominator." },
      ],
      finalAnswer: "\\( x^2 + x - 1 + \\dfrac{4}{x+1} \\)",
    }
  },
  {
    id: "y2am5-071", topicRef: "y2am5", topicTitle: "Algebraic Division 71", difficulty: "Challenge", questionText: "Express \\( \\dfrac{2x^3 + x^2 - x + 4}{x^2 + 1} \\) in the form \\( ax + b + \\dfrac{cx + d}{x^2+1} \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["polynomial division", "improper"], workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the long division.", workingLatex: "\\text{Divide } 2x^3 + x^2 - x + 4 \\text{ by } (x^2 + 1).", explanation: "Write the dividend inside the long-division 'house' and the divisor on the left. Make sure every power of \\( x \\) is represented — insert a zero coefficient for any missing term so the columns line up." },
        { stepNumber: 2, description: "Carry out the long division.", workingLatex: "", longDivision: { divisor: "x^2 + 1", dividend: ["2x^3", "+x^2", "-x", "+4"], quotient: ["", "", "2x", "+1"], steps: [{ subtrahend: ["-2x^3", "+0", "-2x", ""], remainder: ["", "x^2", "-3x", "+4"] }, { subtrahend: ["", "-x^2", "+0", "-1"], remainder: ["", "", "-3x", "+3"] }] }, explanation: "At each stage divide the leading term of the current remainder by the leading term of the divisor to find the next term of the quotient. Multiply the divisor by that term, subtract, and bring down the next column. Watch the signs when subtracting — a sign slip here is the most common error." },
        { stepNumber: 3, description: "Read off the quotient and remainder.", workingLatex: "\\text{Quotient} = 2x + 1, \\quad \\text{Remainder} = -3x + 3.", explanation: "The top row of the house gives the quotient; the polynomial below the final bar is the remainder. The remainder must have lower degree than the divisor — if yours doesn't, you stopped too early." },
        { stepNumber: 4, description: "Write the result as an identity.", workingLatex: "2x^3 + x^2 - x + 4 = (x^2 + 1)\\,(2x + 1) + (-3x + 3).", explanation: "This is the polynomial analogue of \\( 17 = 5 \\times 3 + 2 \\). Expanding the right-hand side should reproduce the dividend." },
        { stepNumber: 5, description: "Rewrite as polynomial plus proper fraction.", workingLatex: "\\dfrac{2x^3 + x^2 - x + 4}{x^2 + 1} = 2x + 1 + \\dfrac{-3x + 3}{x^2 + 1}.", explanation: "Dividing the identity through by the divisor splits the improper fraction into a polynomial part and a proper fraction whose numerator has lower degree than the denominator." },
      ],
      finalAnswer: "\\( 2x + 1 + \\dfrac{-3x + 3}{x^2 + 1} \\)",
    }
  },
];
