/**
 * Topic: Simplifying algebraic fractions
 * Ref: ga13  (DfE A4)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: simplifying algebraic fractions by factorising and cancelling
 *   COMMON FACTORS, plus the four operations on algebraic fractions —
 *   (1) cancelling monomial factors, e.g. 6x^2/(2x), (12a^3 b)/(8 a b^2);
 *   (2) factorising numerator and/or denominator then cancelling a common
 *       bracket, e.g. (x^2+3x)/(x^2-9) = x(x+3)/((x+3)(x-3)) = x/(x-3);
 *   (3) difference of two squares inside fractions;
 *   (4) multiplying and dividing algebraic fractions (flip-and-multiply),
 *       e.g. (x+2)/(x-1) ÷ (x^2-4)/(x-1);
 *   (5) adding and subtracting algebraic fractions over a common denominator,
 *       e.g. 2/x + 3/(x+1) combined into a single fraction.
 *   Throughout, solutions stress that you may ONLY cancel common FACTORS
 *   (things multiplying the whole top and whole bottom), never individual
 *   terms — e.g. the x in (x+2)/x cannot be cancelled.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga13-001 .. ga13-004  (4)   monomial cancelling (Higher content)
 *   - Standard:   ga13-005 .. ga13-018  (14)
 *   - Challenge:  ga13-019 .. ga13-030  (12)
 * Id range: ga13-001 .. ga13-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem (the fractions are the focus); workingLatex
 *   is RAW LaTeX (no \\(...\\) or $...$ wrappers) and uses \\frac (never
 *   \\tfrac) for fractions and \\cdot for multiplication, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga13-001",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{6x^2}{2x}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "cancelling monomials"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split the fraction into a number part and a letter part.",
          workingLatex: "\\frac{6x^2}{2x} = \\frac{6}{2} \\cdot \\frac{x^2}{x}",
          explanation:
            "The numerator 6x^2 and the denominator 2x are each a single product (no plus or minus signs), so we can deal with the numbers and the powers of x separately. This only works because top and bottom are pure products — if either were a sum you would have to factorise first.",
        },
        {
          stepNumber: 2,
          description: "Cancel the common numerical factor of 2.",
          workingLatex: "\\frac{6}{2} = 3",
          explanation:
            "6 and 2 share the factor 2; since 6 = 2 \\cdot 3, dividing top and bottom by 2 (a non-zero number) leaves 3. Cancelling a common factor never changes the value of a fraction.",
        },
        {
          stepNumber: 3,
          description: "Write x^2 as a product of two x's.",
          workingLatex: "\\frac{x^2}{x} = \\frac{x \\cdot x}{x}",
          explanation:
            "Spelling out x^2 as x \\cdot x makes the shared factor visible: there is one x on the bottom and two on top. Seeing the factors written out is the safest way to decide what is allowed to cancel.",
        },
        {
          stepNumber: 4,
          description: "Cancel one common factor of x.",
          workingLatex: "\\frac{x \\cdot x}{x} = x",
          explanation:
            "One x on top matches the x on the bottom, so dividing both by x (valid when x \\neq 0) removes one factor of x from each, leaving a single x on top.",
        },
        {
          stepNumber: 5,
          description: "Recombine the two simplified parts.",
          workingLatex: "\\frac{6x^2}{2x} = 3 \\cdot x = 3x",
          explanation:
            "Multiplying the surviving number part (3) by the surviving letter part (x) gives 3x. Check by substituting x=2: original 6(4)/(2 \\cdot 2)=24/4=6, simplified 3(2)=6. The two agree.",
        },
      ],
      finalAnswer: "\\(3x\\)",
      canonicalAnswer: "3x",
    },
  },
  {
    id: "ga13-002",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{12a^3 b}{8a b^2}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "cancelling monomials"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate the number part and each letter part.",
          workingLatex:
            "\\frac{12a^3 b}{8a b^2} = \\frac{12}{8} \\cdot \\frac{a^3}{a} \\cdot \\frac{b}{b^2}",
          explanation:
            "The numerator and denominator are each a single product, so we can treat the numbers, the a's and the b's as three separate fractions and simplify each on its own. This factor-by-factor approach is only valid because there are no plus or minus signs to break up.",
        },
        {
          stepNumber: 2,
          description: "Cancel the common factor of 4 from the numbers.",
          workingLatex: "\\frac{12}{8} = \\frac{3}{2}",
          explanation:
            "12 = 4 \\cdot 3 and 8 = 4 \\cdot 2, so 4 is the highest common factor; dividing each by 4 gives 3 over 2. Always reduce the numbers to lowest terms.",
        },
        {
          stepNumber: 3,
          description: "Subtract the powers of a (cancel one a from each).",
          workingLatex: "\\frac{a^3}{a} = a^{3-1} = a^2",
          explanation:
            "There are three factors of a on top and one on the bottom; cancelling the single common factor a (valid when a \\neq 0) uses the index law a^m/a^n = a^{m-n} and leaves a^2.",
        },
        {
          stepNumber: 4,
          description: "Subtract the powers of b — the larger power is on the bottom.",
          workingLatex: "\\frac{b}{b^2} = \\frac{1}{b^{2-1}} = \\frac{1}{b}",
          explanation:
            "One b on top cancels with one of the two b's on the bottom (valid when b \\neq 0), leaving a single b in the denominator. When the bigger power sits underneath, the surviving b's stay underneath — a common slip is to put them on top.",
        },
        {
          stepNumber: 5,
          description: "Multiply the surviving pieces together.",
          workingLatex:
            "\\frac{3}{2} \\cdot a^2 \\cdot \\frac{1}{b} = \\frac{3a^2}{2b}",
          explanation:
            "Collecting the three simplified parts puts the a^2 with the 3 on top and the b with the 2 on the bottom, giving 3a^2/(2b).",
        },
        {
          stepNumber: 6,
          description: "Check the result with a substitution.",
          workingLatex:
            "a=2, b=1: \\ \\frac{12 \\cdot 8 \\cdot 1}{8 \\cdot 2 \\cdot 1} = \\frac{96}{16} = 6, \\quad \\frac{3 \\cdot 4}{2 \\cdot 1} = \\frac{12}{2} = 6",
          explanation:
            "Substituting convenient values into the original and the simplified form gives the same number, which is good evidence the simplification is correct.",
        },
      ],
      finalAnswer: "\\(\\dfrac{3a^2}{2b}\\)",
      canonicalAnswer: "3a^2/(2b)",
    },
  },
  {
    id: "ga13-003",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{15x^4 y^2}{20x^2 y^5}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "cancelling monomials"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Break into number, x and y parts.",
          workingLatex:
            "\\frac{15x^4 y^2}{20x^2 y^5} = \\frac{15}{20} \\cdot \\frac{x^4}{x^2} \\cdot \\frac{y^2}{y^5}",
          explanation:
            "Top and bottom are each single products, so we can split the whole thing into three independent fractions — the numbers, the x's and the y's — and simplify each separately.",
        },
        {
          stepNumber: 2,
          description: "Cancel the common factor of 5 from the numbers.",
          workingLatex: "\\frac{15}{20} = \\frac{3}{4}",
          explanation:
            "15 = 5 \\cdot 3 and 20 = 5 \\cdot 4, so 5 is the highest common factor; dividing both by 5 leaves 3/4 in lowest terms.",
        },
        {
          stepNumber: 3,
          description: "Subtract powers of x (more on top).",
          workingLatex: "\\frac{x^4}{x^2} = x^{4-2} = x^2",
          explanation:
            "There are four x's on top and two on the bottom; cancelling the common factor x^2 (valid when x \\neq 0) removes two from each, leaving x^2 on top.",
        },
        {
          stepNumber: 4,
          description: "Subtract powers of y (more on the bottom).",
          workingLatex: "\\frac{y^2}{y^5} = \\frac{1}{y^{5-2}} = \\frac{1}{y^3}",
          explanation:
            "Here the larger power sits on the bottom, so after cancelling the common factor y^2 (valid when y \\neq 0) the surviving y^3 stays in the denominator. A common slip is to drop the y's onto the top — they belong wherever there were more of them to start with.",
        },
        {
          stepNumber: 5,
          description: "Combine all the surviving factors.",
          workingLatex:
            "\\frac{3}{4} \\cdot x^2 \\cdot \\frac{1}{y^3} = \\frac{3x^2}{4y^3}",
          explanation:
            "Multiplying the three simplified parts collects 3 and x^2 on top, and 4 and y^3 on the bottom.",
        },
        {
          stepNumber: 6,
          description: "Check the result with a substitution.",
          workingLatex:
            "x=2, y=1: \\ \\frac{15 \\cdot 16 \\cdot 1}{20 \\cdot 4 \\cdot 1} = \\frac{240}{80} = 3, \\quad \\frac{3 \\cdot 4}{4 \\cdot 1} = \\frac{12}{4} = 3",
          explanation:
            "Both forms give 3 for these values, which is good evidence the simplification is right.",
        },
      ],
      finalAnswer: "\\(\\dfrac{3x^2}{4y^3}\\)",
      canonicalAnswer: "3x^2/(4y^3)",
    },
  },
  {
    id: "ga13-004",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{10ab + 5a}{5a}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "common factor"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Warning: do NOT cancel term by term.",
          workingLatex: "\\frac{10ab + 5a}{5a} \\neq \\frac{10ab}{5a} \\;\\text{with}\\; +5a \\text{ ignored}",
          explanation:
            "The numerator is a SUM of two terms, so the 5a on the bottom is not yet a factor of the WHOLE top. You may only cancel something that multiplies the entire numerator, never a single term inside a sum. The fix is to factorise the numerator first.",
        },
        {
          stepNumber: 2,
          description: "Factorise the numerator by taking out the common factor 5a.",
          workingLatex: "10ab + 5a = 5a(2b + 1)",
          explanation:
            "Both terms contain 5a: 10ab = 5a \\cdot 2b and 5a = 5a \\cdot 1. Pulling 5a outside the bracket turns the sum into a single product. Don't forget the +1 — every term must be accounted for inside the bracket.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the fraction with the factorised numerator.",
          workingLatex: "\\frac{10ab + 5a}{5a} = \\frac{5a(2b + 1)}{5a}",
          explanation:
            "Now 5a appears as a factor multiplying the whole numerator and as the whole denominator, so it is a genuine common factor and is allowed to cancel.",
        },
        {
          stepNumber: 4,
          description: "Cancel the common factor 5a.",
          workingLatex: "\\frac{5a(2b + 1)}{5a} = 2b + 1",
          explanation:
            "Dividing top and bottom by 5a (valid when a \\neq 0) removes it from both, leaving just the bracket 2b + 1.",
        },
        {
          stepNumber: 5,
          description: "Check the result with a substitution.",
          workingLatex: "a=1, b=2: \\ \\frac{20 + 5}{5} = \\frac{25}{5} = 5, \\quad 2(2)+1 = 5",
          explanation:
            "Substituting a=1, b=2 into both the original and the simplified expression gives 5 each time, confirming the answer.",
        },
      ],
      finalAnswer: "\\(2b + 1\\)",
      canonicalAnswer: "2b+1",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga13-005",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{x^2 + 3x}{x^2 - 9}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the numerator by taking out the common factor x.",
          workingLatex: "x^2 + 3x = x(x + 3)",
          explanation:
            "Both terms contain x: x^2 = x \\cdot x and 3x = x \\cdot 3. Pulling x outside turns the numerator into a product, which is the only form from which factors can cancel.",
        },
        {
          stepNumber: 2,
          description: "Factorise the denominator as a difference of two squares.",
          workingLatex: "x^2 - 9 = x^2 - 3^2 = (x + 3)(x - 3)",
          explanation:
            "Recognise 9 as 3^2, so this is A^2 - B^2 with A=x, B=3, which always factorises as (A+B)(A-B). The denominator is now a product of two brackets.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the whole fraction in factorised form.",
          workingLatex: "\\frac{x^2 + 3x}{x^2 - 9} = \\frac{x(x + 3)}{(x + 3)(x - 3)}",
          explanation:
            "With top and bottom both written as products, line them up and look for a whole bracket that appears in both.",
        },
        {
          stepNumber: 4,
          description: "Identify and cancel the common factor (x + 3).",
          workingLatex: "\\frac{x\\,\\cancel{(x + 3)}}{\\cancel{(x + 3)}(x - 3)} = \\frac{x}{x - 3}",
          explanation:
            "(x+3) multiplies the whole top and the whole bottom, so dividing both by it — valid when x \\neq -3 — cancels it. You may NOT cancel the lone x against the x inside (x-3), nor the 3's; only entire matching brackets cancel.",
        },
        {
          stepNumber: 5,
          description: "State the simplified fraction and the excluded values.",
          workingLatex: "\\frac{x}{x - 3}, \\quad x \\neq 3,\\ x \\neq -3",
          explanation:
            "We exclude both x=3 (zero in the new denominator) and x=-3 (the value we cancelled), since neither was allowed in the original fraction.",
        },
        {
          stepNumber: 6,
          description: "Check the result with a substitution.",
          workingLatex: "x=2: \\ \\frac{4+6}{4-9} = \\frac{10}{-5} = -2, \\quad \\frac{2}{2-3} = \\frac{2}{-1} = -2",
          explanation:
            "Putting x=2 into the original and the simplified form gives -2 both times, which supports the simplification.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x}{x - 3}\\)",
      canonicalAnswer: "x/(x-3)",
    },
  },
  {
    id: "ga13-006",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{x^2 - 25}{x^2 + 5x}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the numerator as a difference of two squares.",
          workingLatex: "x^2 - 25 = x^2 - 5^2 = (x + 5)(x - 5)",
          explanation:
            "Recognise 25 as 5^2, so this is A^2 - B^2 = (A+B)(A-B) with A=x, B=5. A bare difference of two squares always splits into two brackets like this.",
        },
        {
          stepNumber: 2,
          description: "Factorise the denominator by taking out the common factor x.",
          workingLatex: "x^2 + 5x = x(x + 5)",
          explanation:
            "Both terms share x: x^2 = x \\cdot x and 5x = x \\cdot 5. Factoring x out makes the denominator a product, ready to be compared with the numerator.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the fraction with both parts factorised.",
          workingLatex: "\\frac{x^2 - 25}{x^2 + 5x} = \\frac{(x + 5)(x - 5)}{x(x + 5)}",
          explanation: "Now both top and bottom are products, so line up the brackets and look for a match.",
        },
        {
          stepNumber: 4,
          description: "Cancel the common factor (x + 5).",
          workingLatex: "\\frac{\\cancel{(x + 5)}(x - 5)}{x\\,\\cancel{(x + 5)}} = \\frac{x - 5}{x}",
          explanation:
            "(x+5) multiplies the whole numerator and whole denominator, so dividing both by it — valid when x \\neq -5 — is allowed. Do NOT try to cancel the lone x in the denominator against an x inside a bracket; a bracket is a single factor.",
        },
        {
          stepNumber: 5,
          description: "State the result and excluded values.",
          workingLatex: "\\frac{x - 5}{x}, \\quad x \\neq 0,\\ x \\neq -5",
          explanation:
            "We exclude x=0 (zero denominator in the answer) and x=-5 (the cancelled factor), as both made the original fraction undefined.",
        },
        {
          stepNumber: 6,
          description: "Check the result with a substitution.",
          workingLatex: "x=2: \\ \\frac{4-25}{4+10} = \\frac{-21}{14} = -\\frac{3}{2}, \\quad \\frac{2-5}{2} = -\\frac{3}{2}",
          explanation:
            "Both forms give -3/2 at x=2, supporting the simplification.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x - 5}{x}\\)",
      canonicalAnswer: "(x-5)/x",
    },
  },
  {
    id: "ga13-007",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{x^2 + 5x + 6}{x^2 + 2x}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "factorising quadratics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic numerator.",
          workingLatex: "x^2 + 5x + 6 = (x + 2)(x + 3)",
          explanation:
            "For a quadratic x^2 + bx + c we look for two numbers that multiply to c (+6) and add to b (+5). Here +2 and +3 work, giving the two brackets.",
        },
        {
          stepNumber: 2,
          description: "Factorise the denominator.",
          workingLatex: "x^2 + 2x = x(x + 2)",
          explanation: "Both terms contain x: x^2 = x \\cdot x and 2x = x \\cdot 2, so take x outside.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the fraction in factorised form.",
          workingLatex: "\\frac{x^2 + 5x + 6}{x^2 + 2x} = \\frac{(x + 2)(x + 3)}{x(x + 2)}",
          explanation: "Both top and bottom are now products; scan for a bracket common to each.",
        },
        {
          stepNumber: 4,
          description: "Cancel the common factor (x + 2).",
          workingLatex: "\\frac{\\cancel{(x + 2)}(x + 3)}{x\\,\\cancel{(x + 2)}} = \\frac{x + 3}{x}",
          explanation:
            "(x+2) multiplies the whole top and whole bottom, so cancelling it (valid when x \\neq -2) is legitimate. The surviving (x+3) and the x are not a shared factor, so nothing else cancels — in particular you cannot cancel the 3 or the x out of (x+3).",
        },
        {
          stepNumber: 5,
          description: "State the simplified fraction and excluded values.",
          workingLatex: "\\frac{x + 3}{x}, \\quad x \\neq 0,\\ x \\neq -2",
          explanation:
            "We exclude x=0 (zero denominator in the answer) and x=-2 (the cancelled factor), as both broke the original fraction.",
        },
        {
          stepNumber: 6,
          description: "Check the result with a substitution.",
          workingLatex: "x=1: \\ \\frac{1+5+6}{1+2} = \\frac{12}{3} = 4, \\quad \\frac{1+3}{1} = 4",
          explanation: "Both forms give 4 at x=1, supporting the simplification.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x + 3}{x}\\)",
      canonicalAnswer: "(x+3)/x",
    },
  },
  {
    id: "ga13-008",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{x^2 - x - 6}{x^2 - 9}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "factorising quadratics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the quadratic numerator.",
          workingLatex: "x^2 - x - 6 = (x - 3)(x + 2)",
          explanation:
            "We need two numbers multiplying to -6 and adding to -1 (the coefficient of x); -3 and +2 fit. The negative product means the two numbers have opposite signs.",
        },
        {
          stepNumber: 2,
          description: "Factorise the denominator as a difference of two squares.",
          workingLatex: "x^2 - 9 = (x + 3)(x - 3)",
          explanation: "This is A^2 - B^2 with A=x, B=3, so it splits as (x+3)(x-3).",
        },
        {
          stepNumber: 3,
          description: "Rewrite the fraction fully factorised.",
          workingLatex: "\\frac{x^2 - x - 6}{x^2 - 9} = \\frac{(x - 3)(x + 2)}{(x + 3)(x - 3)}",
          explanation: "With everything in bracket form, compare the four brackets for a match.",
        },
        {
          stepNumber: 4,
          description: "Cancel the common factor (x - 3).",
          workingLatex: "\\frac{\\cancel{(x - 3)}(x + 2)}{(x + 3)\\,\\cancel{(x - 3)}} = \\frac{x + 2}{x + 3}",
          explanation:
            "(x-3) is the shared factor; dividing top and bottom by it (valid when x \\neq 3) cancels it. (x+2) and (x+3) look similar but are different brackets, so they do NOT cancel — only identical factors can.",
        },
        {
          stepNumber: 5,
          description: "State the result and excluded values.",
          workingLatex: "\\frac{x + 2}{x + 3}, \\quad x \\neq 3,\\ x \\neq -3",
          explanation:
            "Exclude x=3 (the cancelled factor) and x=-3 (zero in the new denominator); both were forbidden in the original.",
        },
        {
          stepNumber: 6,
          description: "Check the result with a substitution.",
          workingLatex: "x=1: \\ \\frac{1-1-6}{1-9} = \\frac{-6}{-8} = \\frac{3}{4}, \\quad \\frac{1+2}{1+3} = \\frac{3}{4}",
          explanation: "Both forms give 3/4 at x=1, supporting the simplification.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x + 2}{x + 3}\\)",
      canonicalAnswer: "(x+2)/(x+3)",
    },
  },
  {
    id: "ga13-009",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{2x^2 - 8}{x^2 + 4x + 4}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take out the common factor 2 from the numerator first.",
          workingLatex: "2x^2 - 8 = 2(x^2 - 4)",
          explanation:
            "Always strip out a numerical common factor before hunting for structures like a difference of two squares. Skipping this hides the (x^2 - 4) inside and you may miss the factorisation.",
        },
        {
          stepNumber: 2,
          description: "Factorise the difference of two squares inside the bracket.",
          workingLatex: "2(x^2 - 4) = 2(x + 2)(x - 2)",
          explanation: "x^2 - 4 is A^2 - B^2 with A=x, B=2, so it becomes (x+2)(x-2); the factor of 2 stays out front.",
        },
        {
          stepNumber: 3,
          description: "Factorise the denominator (a perfect-square trinomial).",
          workingLatex: "x^2 + 4x + 4 = (x + 2)^2 = (x + 2)(x + 2)",
          explanation:
            "Two numbers multiplying to +4 and adding to +4 are both +2, giving a repeated factor. Writing it as (x+2)(x+2) rather than (x+2)^2 makes the cancelling easier to see.",
        },
        {
          stepNumber: 4,
          description: "Rewrite the fraction fully factorised.",
          workingLatex: "\\frac{2x^2 - 8}{x^2 + 4x + 4} = \\frac{2(x + 2)(x - 2)}{(x + 2)(x + 2)}",
          explanation: "Now count the (x+2) factors: one on top, two on the bottom — so only one pair can cancel.",
        },
        {
          stepNumber: 5,
          description: "Cancel one common factor of (x + 2).",
          workingLatex: "\\frac{2\\,\\cancel{(x + 2)}(x - 2)}{\\cancel{(x + 2)}(x + 2)} = \\frac{2(x - 2)}{x + 2}",
          explanation:
            "Cancel one (x+2) from each (valid when x \\neq -2); the bottom started with two, so one (x+2) survives below. A common slip is to cancel both and forget that the top only had one.",
        },
        {
          stepNumber: 6,
          description: "State the simplified fraction and excluded value.",
          workingLatex: "\\frac{2(x - 2)}{x + 2}, \\quad x \\neq -2",
          explanation:
            "Only x=-2 is excluded, since that is the value killing the surviving denominator. Check x=0: original (0-8)/(0+0+4)=-8/4=-2, simplified 2(0-2)/(0+2)=-4/2=-2. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{2(x - 2)}{x + 2}\\)",
      canonicalAnswer: "2(x-2)/(x+2)",
    },
  },
  {
    id: "ga13-010",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{2x^2 + 7x + 3}{x^2 - 9}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "factorising quadratics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the numerator (leading coefficient 2).",
          workingLatex: "2x^2 + 7x + 3 = 2x^2 + 6x + x + 3",
          explanation:
            "With a leading coefficient of 2 we use the split-the-middle method: find two numbers multiplying to 2 \\cdot 3 = 6 and adding to 7, namely 6 and 1, and split 7x into 6x + x.",
        },
        {
          stepNumber: 2,
          description: "Factorise by grouping.",
          workingLatex: "2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (x + 3)(2x + 1)",
          explanation:
            "Group in pairs: 2x is common to the first pair and 1 to the second, both leaving (x+3). Taking out the common bracket (x+3) gives the factorisation. Don't forget the +1 from the second group.",
        },
        {
          stepNumber: 3,
          description: "Factorise the denominator as a difference of two squares.",
          workingLatex: "x^2 - 9 = (x + 3)(x - 3)",
          explanation: "A^2 - B^2 with A=x, B=3, so it splits as (x+3)(x-3).",
        },
        {
          stepNumber: 4,
          description: "Rewrite the fraction fully factorised.",
          workingLatex: "\\frac{2x^2 + 7x + 3}{x^2 - 9} = \\frac{(x + 3)(2x + 1)}{(x + 3)(x - 3)}",
          explanation: "(x+3) now appears once on top and once on the bottom, ready to cancel.",
        },
        {
          stepNumber: 5,
          description: "Cancel the common factor (x + 3).",
          workingLatex: "\\frac{\\cancel{(x + 3)}(2x + 1)}{\\cancel{(x + 3)}(x - 3)} = \\frac{2x + 1}{x - 3}",
          explanation:
            "Dividing top and bottom by (x+3) — valid when x \\neq -3 — cancels it cleanly. (2x+1) and (x-3) share no factor, so nothing more cancels.",
        },
        {
          stepNumber: 6,
          description: "State the result and excluded values.",
          workingLatex: "\\frac{2x + 1}{x - 3}, \\quad x \\neq 3,\\ x \\neq -3",
          explanation:
            "Exclude x=3 (zero in the new denominator) and x=-3 (the cancelled factor). Check x=1: original (2+7+3)/(1-9)=12/-8=-3/2, simplified (2+1)/(1-3)=3/-2=-3/2. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{2x + 1}{x - 3}\\)",
      canonicalAnswer: "(2x+1)/(x-3)",
    },
  },
  {
    id: "ga13-011",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{x + 2}{x - 1} \\times \\dfrac{x^2 - 1}{x^2 + 2x}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "multiplying fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise every numerator and denominator before multiplying.",
          workingLatex: "x^2 - 1 = (x + 1)(x - 1), \\qquad x^2 + 2x = x(x + 2)",
          explanation:
            "Factorise first so that common factors can cancel before anything is multiplied out — expanding the brackets early just creates a mess you would have to re-factorise. x^2-1 is a difference of two squares; x^2+2x has a common x.",
        },
        {
          stepNumber: 2,
          description: "Write the product with everything factorised.",
          workingLatex: "\\frac{x + 2}{x - 1} \\cdot \\frac{(x + 1)(x - 1)}{x(x + 2)}",
          explanation:
            "Multiplying fractions means multiplying the tops together and the bottoms together, so collect every factor from both numerators and both denominators.",
        },
        {
          stepNumber: 3,
          description: "Combine into a single fraction.",
          workingLatex: "= \\frac{(x + 2)(x + 1)(x - 1)}{(x - 1)\\,x\\,(x + 2)}",
          explanation: "Writing it as one fraction lines up every factor so you can hunt for matches top and bottom.",
        },
        {
          stepNumber: 4,
          description: "Cancel the common factors (x + 2) and (x - 1).",
          workingLatex: "= \\frac{\\cancel{(x + 2)}(x + 1)\\,\\cancel{(x - 1)}}{\\cancel{(x - 1)}\\,x\\,\\cancel{(x + 2)}} = \\frac{x + 1}{x}",
          explanation:
            "(x+2) and (x-1) each appear once on top and once on the bottom; dividing by both (valid when x \\neq 1 and x \\neq -2) clears them, leaving (x+1) over x.",
        },
        {
          stepNumber: 5,
          description: "State the simplified expression and excluded values.",
          workingLatex: "\\frac{x + 1}{x}, \\quad x \\neq 0,\\ 1,\\ -2",
          explanation:
            "We exclude x=0 (answer's denominator), x=1 and x=-2 (the cancelled factors), since each made an original denominator zero. Check x=2: original (4/1) \\cdot (3/8)=12/8=3/2, simplified (2+1)/2=3/2. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x + 1}{x}\\)",
      canonicalAnswer: "(x+1)/x",
    },
  },
  {
    id: "ga13-012",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{x + 2}{x - 1} \\div \\dfrac{x^2 - 4}{x - 1}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "dividing fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Convert the division to a multiplication by flipping the divisor.",
          workingLatex: "\\frac{x + 2}{x - 1} \\div \\frac{x^2 - 4}{x - 1} = \\frac{x + 2}{x - 1} \\cdot \\frac{x - 1}{x^2 - 4}",
          explanation:
            "Dividing by a fraction is the same as multiplying by its reciprocal: keep the first fraction, turn the second upside down, and change ÷ to ×. Only the second fraction flips — a common slip is to flip the first one too.",
        },
        {
          stepNumber: 2,
          description: "Factorise the difference of two squares in the new denominator.",
          workingLatex: "x^2 - 4 = (x + 2)(x - 2)",
          explanation: "A^2 - B^2 with A=x, B=2, so x^2-4 = (x+2)(x-2). Everything else is already in simplest bracket form.",
        },
        {
          stepNumber: 3,
          description: "Write the product as one fraction.",
          workingLatex: "= \\frac{(x + 2)(x - 1)}{(x - 1)(x + 2)(x - 2)}",
          explanation: "Multiply the tops together and the bottoms together, keeping the denominator factorised so matches are visible.",
        },
        {
          stepNumber: 4,
          description: "Cancel the common factors (x + 2) and (x - 1).",
          workingLatex: "= \\frac{\\cancel{(x + 2)}\\,\\cancel{(x - 1)}}{\\cancel{(x - 1)}\\,\\cancel{(x + 2)}(x - 2)} = \\frac{1}{x - 2}",
          explanation:
            "Both (x+2) and (x-1) appear top and bottom; cancelling them (valid when x \\neq 1 and x \\neq -2) clears the whole numerator, so a 1 is left on top — don't write the top as 0.",
        },
        {
          stepNumber: 5,
          description: "State the simplified expression and excluded values.",
          workingLatex: "\\frac{1}{x - 2}, \\quad x \\neq 2,\\ 1,\\ -2",
          explanation:
            "Exclude x=2 (answer's denominator), x=1 (original denominator and cancelled factor) and x=-2 (cancelled factor). Check x=0: original (2/-1) ÷ ((-4)/-1)=(-2) ÷ 4=-1/2, simplified 1/(0-2)=-1/2. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{1}{x - 2}\\)",
      canonicalAnswer: "1/(x-2)",
    },
  },
  {
    id: "ga13-013",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{2}{x} + \\dfrac{3}{x + 1}\\) as a single fraction.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "adding fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find a common denominator.",
          workingLatex: "\\text{common denominator} = x(x + 1)",
          explanation:
            "The denominators x and (x+1) share no common factor, so the lowest common denominator is simply their product x(x+1). When denominators have nothing in common, the LCD is always the product.",
        },
        {
          stepNumber: 2,
          description: "Rewrite each fraction over the common denominator.",
          workingLatex: "\\frac{2}{x} = \\frac{2(x + 1)}{x(x + 1)}, \\qquad \\frac{3}{x + 1} = \\frac{3x}{x(x + 1)}",
          explanation:
            "Multiply the first fraction's top and bottom by (x+1) — the factor it is missing — and the second's by x. Multiplying top and bottom by the same thing leaves each fraction's value unchanged.",
        },
        {
          stepNumber: 3,
          description: "Add the numerators over the single denominator.",
          workingLatex: "\\frac{2(x + 1) + 3x}{x(x + 1)}",
          explanation:
            "With matching denominators you add the numerators and keep the common denominator once. Hold the 2(x+1) as a bracket so you remember to expand it next.",
        },
        {
          stepNumber: 4,
          description: "Expand and simplify the numerator.",
          workingLatex: "2(x + 1) + 3x = 2x + 2 + 3x = 5x + 2",
          explanation: "Expand 2(x+1) to 2x+2, then collect the x-terms 2x+3x = 5x to get 5x+2.",
        },
        {
          stepNumber: 5,
          description: "State the single fraction and excluded values.",
          workingLatex: "\\frac{5x + 2}{x(x + 1)}, \\quad x \\neq 0,\\ -1",
          explanation:
            "5x+2 shares no factor with x or (x+1), so nothing cancels and this is fully simplified. We exclude x=0 and x=-1, the values that make the denominator zero.",
        },
        {
          stepNumber: 6,
          description: "Check the result with a substitution.",
          workingLatex: "x=1: \\ \\frac{2}{1} + \\frac{3}{2} = \\frac{4}{2} + \\frac{3}{2} = \\frac{7}{2}, \\quad \\frac{5+2}{1 \\cdot 2} = \\frac{7}{2}",
          explanation: "Both forms give 7/2 at x=1, supporting the combined fraction.",
        },
      ],
      finalAnswer: "\\(\\dfrac{5x + 2}{x(x + 1)}\\)",
      canonicalAnswer: "(5x+2)/(x(x+1))",
    },
  },
  {
    id: "ga13-014",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{4}{x - 2} - \\dfrac{3}{x + 1}\\) as a single fraction.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "subtracting fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common denominator.",
          workingLatex: "\\text{common denominator} = (x - 2)(x + 1)",
          explanation:
            "The denominators (x-2) and (x+1) have no common factor, so the lowest common denominator is their product (x-2)(x+1).",
        },
        {
          stepNumber: 2,
          description: "Rewrite each fraction over the common denominator.",
          workingLatex: "\\frac{4}{x - 2} = \\frac{4(x + 1)}{(x - 2)(x + 1)}, \\qquad \\frac{3}{x + 1} = \\frac{3(x - 2)}{(x - 2)(x + 1)}",
          explanation:
            "Multiply each fraction's top and bottom by the bracket it is missing: the first by (x+1), the second by (x-2). This keeps both values unchanged.",
        },
        {
          stepNumber: 3,
          description: "Subtract the numerators over the common denominator.",
          workingLatex: "\\frac{4(x + 1) - 3(x - 2)}{(x - 2)(x + 1)}",
          explanation:
            "Keep the whole second numerator inside a bracket so the minus sign in front applies to BOTH of its terms when you expand. This is exactly where sign errors creep in.",
        },
        {
          stepNumber: 4,
          description: "Expand carefully, watching the signs.",
          workingLatex: "4(x + 1) - 3(x - 2) = 4x + 4 - 3x + 6 = x + 10",
          explanation:
            "-3(x-2) = -3x + 6, not -3x - 6: the minus times the minus 2 gives +6. Collect 4x-3x = x and 4+6 = 10 to get x+10.",
        },
        {
          stepNumber: 5,
          description: "State the single fraction and excluded values.",
          workingLatex: "\\frac{x + 10}{(x - 2)(x + 1)}, \\quad x \\neq 2,\\ -1",
          explanation:
            "x+10 shares no factor with either bracket, so this is fully simplified. Exclude x=2 and x=-1, which make the denominator zero.",
        },
        {
          stepNumber: 6,
          description: "Check the result with a substitution.",
          workingLatex: "x=0: \\ \\frac{4}{-2} - \\frac{3}{1} = -2 - 3 = -5, \\quad \\frac{0+10}{(-2)(1)} = \\frac{10}{-2} = -5",
          explanation: "Both forms give -5 at x=0, supporting the combined fraction.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x + 10}{(x - 2)(x + 1)}\\)",
      canonicalAnswer: "(x+10)/((x-2)(x+1))",
    },
  },
  {
    id: "ga13-015",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{5}{2x} + \\dfrac{1}{3x}\\) as a single simplified fraction.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "adding fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the lowest common denominator of 2x and 3x.",
          workingLatex: "\\text{LCM of } 2x \\text{ and } 3x = 6x",
          explanation:
            "Both denominators contain exactly one x, so we only need one x in the LCD; the numbers 2 and 3 have LCM 6. The LCD is therefore 6x, not 6x^2 — a common slip is to multiply the x's together unnecessarily.",
        },
        {
          stepNumber: 2,
          description: "Rewrite each fraction over 6x.",
          workingLatex: "\\frac{5}{2x} = \\frac{15}{6x}, \\qquad \\frac{1}{3x} = \\frac{2}{6x}",
          explanation:
            "To turn 2x into 6x multiply top and bottom by 3 (5 becomes 15); to turn 3x into 6x multiply by 2 (1 becomes 2).",
        },
        {
          stepNumber: 3,
          description: "Add the numerators.",
          workingLatex: "\\frac{15 + 2}{6x} = \\frac{17}{6x}",
          explanation: "The denominators now match, so add the tops 15+2 = 17 and keep the single denominator 6x.",
        },
        {
          stepNumber: 4,
          description: "Check for further cancellation.",
          workingLatex: "\\gcd(17, 6) = 1 \\Rightarrow \\frac{17}{6x} \\text{ is fully simplified}",
          explanation:
            "17 is prime and shares no factor with 6 or x, so nothing cancels.",
        },
        {
          stepNumber: 5,
          description: "Check the result with a substitution.",
          workingLatex: "x=1: \\ \\frac{5}{2} + \\frac{1}{3} = \\frac{15}{6} + \\frac{2}{6} = \\frac{17}{6}, \\quad \\frac{17}{6}",
          explanation: "Both forms give 17/6 at x=1, confirming the combined fraction.",
        },
      ],
      finalAnswer: "\\(\\dfrac{17}{6x}\\)",
      canonicalAnswer: "17/(6x)",
    },
  },
  {
    id: "ga13-016",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{3x^2 - 12x}{x^2 - 16}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "common factor"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the numerator by taking out the common factor 3x.",
          workingLatex: "3x^2 - 12x = 3x(x - 4)",
          explanation:
            "Both terms share 3x: 3x^2 = 3x \\cdot x and 12x = 3x \\cdot 4. Take out the full common factor 3x (not just x or just 3) so the numerator is a single product.",
        },
        {
          stepNumber: 2,
          description: "Factorise the denominator as a difference of two squares.",
          workingLatex: "x^2 - 16 = (x + 4)(x - 4)",
          explanation: "16 = 4^2, so this is A^2 - B^2 with A=x, B=4, splitting as (x+4)(x-4).",
        },
        {
          stepNumber: 3,
          description: "Rewrite the fraction fully factorised.",
          workingLatex: "\\frac{3x^2 - 12x}{x^2 - 16} = \\frac{3x(x - 4)}{(x + 4)(x - 4)}",
          explanation: "(x-4) now appears once on top and once on the bottom, ready to cancel.",
        },
        {
          stepNumber: 4,
          description: "Cancel the common factor (x - 4).",
          workingLatex: "\\frac{3x\\,\\cancel{(x - 4)}}{(x + 4)\\,\\cancel{(x - 4)}} = \\frac{3x}{x + 4}",
          explanation:
            "Dividing top and bottom by (x-4) — valid when x \\neq 4 — cancels it. The 3x and (x+4) share no factor, so nothing else cancels; in particular you cannot cancel the x of 3x against the x inside (x+4).",
        },
        {
          stepNumber: 5,
          description: "State the result and excluded values.",
          workingLatex: "\\frac{3x}{x + 4}, \\quad x \\neq 4,\\ -4",
          explanation:
            "Exclude x=4 (the cancelled factor) and x=-4 (zero in the new denominator). Check x=1: original (3-12)/(1-16)=-9/-15=3/5, simplified 3/(1+4)=3/5. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{3x}{x + 4}\\)",
      canonicalAnswer: "3x/(x+4)",
    },
  },
  {
    id: "ga13-017",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{x^2 - 4}{x + 3} \\times \\dfrac{x^2 + 6x + 9}{x - 2}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "multiplying fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise each quadratic.",
          workingLatex: "x^2 - 4 = (x + 2)(x - 2), \\qquad x^2 + 6x + 9 = (x + 3)^2",
          explanation:
            "The first is a difference of two squares; the second is a perfect-square trinomial since 3+3=6 (the x-coefficient) and 3 \\cdot 3=9 (the constant), giving the repeated factor (x+3).",
        },
        {
          stepNumber: 2,
          description: "Write the product with everything factorised.",
          workingLatex: "\\frac{(x + 2)(x - 2)}{x + 3} \\cdot \\frac{(x + 3)(x + 3)}{x - 2}",
          explanation: "Replace each quadratic by its brackets, keeping the (x+3)^2 written out as two factors so the cancelling is clear.",
        },
        {
          stepNumber: 3,
          description: "Combine into one fraction.",
          workingLatex: "= \\frac{(x + 2)(x - 2)(x + 3)(x + 3)}{(x + 3)(x - 2)}",
          explanation: "Multiply tops together and bottoms together, then scan for factors common to both.",
        },
        {
          stepNumber: 4,
          description: "Cancel the common factors (x - 2) and one (x + 3).",
          workingLatex: "= \\frac{(x + 2)\\,\\cancel{(x - 2)}\\,\\cancel{(x + 3)}(x + 3)}{\\cancel{(x + 3)}\\,\\cancel{(x - 2)}} = (x + 2)(x + 3)",
          explanation:
            "(x-2) cancels once, and one of the two (x+3) factors on top cancels the single (x+3) below (valid when x \\neq 2 and x \\neq -3). The bottom is fully cleared, so the surviving factors stay on top.",
        },
        {
          stepNumber: 5,
          description: "Expand to a single expression and state excluded values.",
          workingLatex: "(x + 2)(x + 3) = x^2 + 5x + 6, \\quad x \\neq 2,\\ -3",
          explanation:
            "Expanding the two brackets gives x^2+5x+6. Check x=0: original ((-4)/3) \\cdot (9/(-2)) = (-36)/(-6)=6, simplified 0+0+6=6. They match.",
        },
      ],
      finalAnswer: "\\((x + 2)(x + 3) = x^2 + 5x + 6\\)",
      canonicalAnswer: "x^2+5x+6",
    },
  },
  {
    id: "ga13-018",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{x^2 + 7x + 12}{x^2 - 9} \\div \\dfrac{x + 4}{x - 3}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "dividing fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Flip the divisor and change ÷ to ×.",
          workingLatex: "\\frac{x^2 + 7x + 12}{x^2 - 9} \\div \\frac{x + 4}{x - 3} = \\frac{x^2 + 7x + 12}{x^2 - 9} \\cdot \\frac{x - 3}{x + 4}",
          explanation:
            "Dividing by a fraction means multiplying by its reciprocal: keep the first fraction and turn only the second upside down, changing ÷ to ×.",
        },
        {
          stepNumber: 2,
          description: "Factorise the quadratics.",
          workingLatex: "x^2 + 7x + 12 = (x + 3)(x + 4), \\qquad x^2 - 9 = (x + 3)(x - 3)",
          explanation:
            "For the first, two numbers multiplying to 12 and adding to 7 are 3 and 4. The second is a difference of two squares, (x+3)(x-3).",
        },
        {
          stepNumber: 3,
          description: "Write the product fully factorised.",
          workingLatex: "= \\frac{(x + 3)(x + 4)}{(x + 3)(x - 3)} \\cdot \\frac{x - 3}{x + 4}",
          explanation: "Substitute the factorised quadratics back in; everything is now in bracket form, ready to combine.",
        },
        {
          stepNumber: 4,
          description: "Combine into one fraction.",
          workingLatex: "= \\frac{(x + 3)(x + 4)(x - 3)}{(x + 3)(x - 3)(x + 4)}",
          explanation: "Multiply tops and bottoms; now line up the three brackets on each side.",
        },
        {
          stepNumber: 5,
          description: "Cancel (x + 3), (x + 4) and (x - 3).",
          workingLatex: "= \\frac{\\cancel{(x + 3)}\\,\\cancel{(x + 4)}\\,\\cancel{(x - 3)}}{\\cancel{(x + 3)}\\,\\cancel{(x - 3)}\\,\\cancel{(x + 4)}} = 1",
          explanation:
            "Every factor on top matches one on the bottom (valid when x \\neq -3,\\ 3,\\ -4), so the whole thing cancels to 1 — remember a fully-cancelled fraction is 1, not 0.",
        },
        {
          stepNumber: 6,
          description: "State the result and excluded values.",
          workingLatex: "1, \\quad x \\neq 3,\\ -3,\\ -4",
          explanation:
            "Exclude every value that zeroed an original denominator or a cancelled factor: x=3, -3, -4. Check x=0: original ((12)/(-9)) ÷ (4/-3) = (-4/3) \\cdot (3/-4) = 1, simplified 1. They match.",
        },
      ],
      finalAnswer: "\\(1\\)",
      canonicalAnswer: "1",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga13-019",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{3}{x - 2} + \\dfrac{2}{x + 3}\\) as a single fraction in its simplest form.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "adding fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common denominator.",
          workingLatex: "\\text{common denominator} = (x - 2)(x + 3)",
          explanation:
            "The denominators (x-2) and (x+3) share no factor, so the lowest common denominator is their product.",
        },
        {
          stepNumber: 2,
          description: "Rewrite each fraction over the common denominator.",
          workingLatex: "\\frac{3}{x - 2} = \\frac{3(x + 3)}{(x - 2)(x + 3)}, \\qquad \\frac{2}{x + 3} = \\frac{2(x - 2)}{(x - 2)(x + 3)}",
          explanation: "Multiply each fraction's top and bottom by the bracket it is missing — the first by (x+3), the second by (x-2).",
        },
        {
          stepNumber: 3,
          description: "Add the numerators over the common denominator.",
          workingLatex: "\\frac{3(x + 3) + 2(x - 2)}{(x - 2)(x + 3)}",
          explanation: "With matching denominators, add the two numerators over the single common denominator.",
        },
        {
          stepNumber: 4,
          description: "Expand and collect terms in the numerator.",
          workingLatex: "3(x + 3) + 2(x - 2) = 3x + 9 + 2x - 4 = 5x + 5",
          explanation: "Expand both brackets, then collect: 3x+2x = 5x and 9-4 = 5, giving 5x+5.",
        },
        {
          stepNumber: 5,
          description: "Factorise the numerator and check for cancellation.",
          workingLatex: "5x + 5 = 5(x + 1) \\Rightarrow \\frac{5(x + 1)}{(x - 2)(x + 3)}",
          explanation:
            "Always factorise the new numerator to test for cancellation. (x+1) is not one of the denominator's brackets, so nothing cancels; leaving the 5 factored out is the tidy final form.",
        },
        {
          stepNumber: 6,
          description: "State the single fraction and excluded values.",
          workingLatex: "\\frac{5(x + 1)}{(x - 2)(x + 3)}, \\quad x \\neq 2,\\ -3",
          explanation:
            "Exclude x=2 and x=-3, the values that zero the denominator. Check x=0: original 3/-2 + 2/3 = -9/6 + 4/6 = -5/6, single 5(1)/((-2)(3))=5/-6=-5/6. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{5(x + 1)}{(x - 2)(x + 3)}\\)",
      canonicalAnswer: "5(x+1)/((x-2)(x+3))",
    },
  },
  {
    id: "ga13-020",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{x}{x + 2} - \\dfrac{3}{x - 1}\\) as a single fraction.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "subtracting fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the common denominator.",
          workingLatex: "\\text{common denominator} = (x + 2)(x - 1)",
          explanation: "The denominators (x+2) and (x-1) share no factor, so their product is the lowest common denominator.",
        },
        {
          stepNumber: 2,
          description: "Rewrite each fraction over the common denominator.",
          workingLatex: "\\frac{x}{x + 2} = \\frac{x(x - 1)}{(x + 2)(x - 1)}, \\qquad \\frac{3}{x - 1} = \\frac{3(x + 2)}{(x + 2)(x - 1)}",
          explanation: "Multiply each top and bottom by the bracket it is missing: the first by (x-1), the second by (x+2).",
        },
        {
          stepNumber: 3,
          description: "Subtract the numerators, keeping the second one bracketed.",
          workingLatex: "\\frac{x(x - 1) - 3(x + 2)}{(x + 2)(x - 1)}",
          explanation:
            "Hold 3(x+2) inside a bracket so the leading minus sign is applied to BOTH of its terms when expanded — this is the classic place to lose a sign.",
        },
        {
          stepNumber: 4,
          description: "Expand the numerator.",
          workingLatex: "x(x - 1) - 3(x + 2) = x^2 - x - 3x - 6 = x^2 - 4x - 6",
          explanation:
            "x(x-1) = x^2 - x and -3(x+2) = -3x - 6 (both signs negative). Collect -x-3x = -4x to get x^2 - 4x - 6.",
        },
        {
          stepNumber: 5,
          description: "Check whether the numerator factorises to cancel.",
          workingLatex: "x^2 - 4x - 6 \\text{ has no rational factors} \\Rightarrow \\text{no cancellation}",
          explanation:
            "Test the discriminant: (-4)^2 - 4(1)(-6) = 16+24 = 40, which is not a perfect square, so the numerator does not factorise over the integers and nothing can cancel.",
        },
        {
          stepNumber: 6,
          description: "State the single fraction and excluded values.",
          workingLatex: "\\frac{x^2 - 4x - 6}{(x + 2)(x - 1)}, \\quad x \\neq -2,\\ 1",
          explanation:
            "Exclude x=-2 and x=1, the values that zero the denominator. Check x=0: original 0/2 - 3/-1 = 0 + 3 = 3, single (0-0-6)/((2)(-1))=-6/-2=3. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x^2 - 4x - 6}{(x + 2)(x - 1)}\\)",
      canonicalAnswer: "(x^2-4x-6)/((x+2)(x-1))",
    },
  },
  {
    id: "ga13-021",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{2}{x - 3} + \\dfrac{5}{x^2 - 9}\\) as a single fraction in its simplest form.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "adding fractions", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the second denominator first.",
          workingLatex: "x^2 - 9 = (x + 3)(x - 3)",
          explanation:
            "Before reaching for a common denominator, factorise: x^2-9 is a difference of two squares containing (x-3), the first denominator. Spotting this keeps the common denominator small.",
        },
        {
          stepNumber: 2,
          description: "Identify the lowest common denominator.",
          workingLatex: "\\text{LCD} = (x + 3)(x - 3)",
          explanation:
            "(x-3) already divides (x+3)(x-3), so the LCD is just (x+3)(x-3) — not (x-3)(x^2-9), which would needlessly repeat the (x-3) factor.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the first fraction over the LCD.",
          workingLatex: "\\frac{2}{x - 3} = \\frac{2(x + 3)}{(x + 3)(x - 3)}",
          explanation:
            "Multiply the first fraction's top and bottom by the missing factor (x+3). The second fraction already has the LCD, so it is left alone.",
        },
        {
          stepNumber: 4,
          description: "Add the numerators over the common denominator.",
          workingLatex: "\\frac{2(x + 3) + 5}{(x + 3)(x - 3)}",
          explanation: "Both fractions now share (x+3)(x-3), so add their numerators 2(x+3) and 5.",
        },
        {
          stepNumber: 5,
          description: "Simplify the numerator.",
          workingLatex: "2(x + 3) + 5 = 2x + 6 + 5 = 2x + 11",
          explanation: "Expand 2(x+3) to 2x+6, then add the 5 to get 2x+11.",
        },
        {
          stepNumber: 6,
          description: "Check for cancellation and state the answer.",
          workingLatex: "\\frac{2x + 11}{(x + 3)(x - 3)}, \\quad x \\neq 3,\\ -3",
          explanation:
            "2x+11 shares no factor with either bracket, so this is simplest. Exclude x=3, -3. Check x=0: original 2/-3 + 5/-9 = -6/9 - 5/9 = -11/9, single (11)/((3)(-3))=11/-9=-11/9. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{2x + 11}{(x + 3)(x - 3)}\\)",
      canonicalAnswer: "(2x+11)/((x+3)(x-3))",
    },
  },
  {
    id: "ga13-022",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{x + 4}{x^2 - 4} - \\dfrac{2}{x + 2}\\) as a single fraction in its simplest form.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "subtracting fractions", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the first denominator.",
          workingLatex: "x^2 - 4 = (x + 2)(x - 2)",
          explanation: "x^2-4 is a difference of two squares with A=x, B=2; this exposes the (x+2) it shares with the second denominator.",
        },
        {
          stepNumber: 2,
          description: "Identify the lowest common denominator.",
          workingLatex: "\\text{LCD} = (x + 2)(x - 2)",
          explanation: "(x+2) already divides (x+2)(x-2), so the LCD is just (x+2)(x-2) — no need to bring in a second (x+2).",
        },
        {
          stepNumber: 3,
          description: "Rewrite the second fraction over the LCD.",
          workingLatex: "\\frac{2}{x + 2} = \\frac{2(x - 2)}{(x + 2)(x - 2)}",
          explanation: "Multiply the second fraction's top and bottom by the missing factor (x-2); the first already has the LCD.",
        },
        {
          stepNumber: 4,
          description: "Subtract the numerators, bracketing the second.",
          workingLatex: "\\frac{(x + 4) - 2(x - 2)}{(x + 2)(x - 2)}",
          explanation: "Bracket 2(x-2) so the minus sign hits BOTH of its terms when expanded — the usual sign trap.",
        },
        {
          stepNumber: 5,
          description: "Expand and simplify the numerator.",
          workingLatex: "(x + 4) - 2(x - 2) = x + 4 - 2x + 4 = -x + 8 = 8 - x",
          explanation:
            "-2(x-2) = -2x + 4 (minus times minus 2 gives +4). Combining with x+4 leaves -x+8, which we write as 8-x. Note 8-x = -(x-8), a sign factor worth keeping in mind, though here it doesn't cancel.",
        },
        {
          stepNumber: 6,
          description: "Check for cancellation and state the answer.",
          workingLatex: "\\frac{8 - x}{(x + 2)(x - 2)}, \\quad x \\neq 2,\\ -2",
          explanation:
            "8-x is neither (x+2) nor (x-2) (nor their negatives), so nothing cancels. Exclude x=2, -2. Check x=0: original 4/-4 - 2/2 = -1 - 1 = -2, single (8)/((2)(-2))=8/-4=-2. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{8 - x}{(x + 2)(x - 2)}\\)",
      canonicalAnswer: "(8-x)/((x+2)(x-2))",
    },
  },
  {
    id: "ga13-023",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{2x^2 + 5x - 3}{x^2 - 9} \\times \\dfrac{x + 3}{2x - 1}\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "multiplying fractions", "factorising quadratics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the leading quadratic by splitting the middle term.",
          workingLatex: "2x^2 + 5x - 3 = 2x^2 + 6x - x - 3",
          explanation:
            "With leading coefficient 2 we split the middle term: find two numbers multiplying to 2 \\cdot (-3) = -6 and adding to 5, namely 6 and -1, then write 5x as 6x - x.",
        },
        {
          stepNumber: 2,
          description: "Factorise by grouping.",
          workingLatex: "2x^2 + 6x - x - 3 = 2x(x + 3) - 1(x + 3) = (x + 3)(2x - 1)",
          explanation: "Group in pairs: 2x is common to the first pair, -1 to the second, both leaving (x+3). Take out the common bracket. Be careful: the second group factors as -1(x+3), giving -1 not +1.",
        },
        {
          stepNumber: 3,
          description: "Factorise the difference of two squares.",
          workingLatex: "x^2 - 9 = (x + 3)(x - 3)",
          explanation: "A^2 - B^2 with A=x, B=3, so x^2-9 = (x+3)(x-3).",
        },
        {
          stepNumber: 4,
          description: "Write the product fully factorised.",
          workingLatex: "\\frac{(x + 3)(2x - 1)}{(x + 3)(x - 3)} \\cdot \\frac{x + 3}{2x - 1}",
          explanation: "Substitute the factorisations back into the product, ready to combine.",
        },
        {
          stepNumber: 5,
          description: "Combine the multiplication into a single fraction.",
          workingLatex: "= \\frac{(x + 3)(2x - 1)(x + 3)}{(x + 3)(x - 3)(2x - 1)}",
          explanation: "Multiply tops together and bottoms together; the top now carries two (x+3) factors.",
        },
        {
          stepNumber: 6,
          description: "Cancel one (x + 3) and the (2x - 1).",
          workingLatex: "= \\frac{\\cancel{(x + 3)}\\,\\cancel{(2x - 1)}(x + 3)}{\\cancel{(x + 3)}(x - 3)\\,\\cancel{(2x - 1)}} = \\frac{x + 3}{x - 3}",
          explanation:
            "One (x+3) cancels (two on top, one on bottom, leaving one on top) and (2x-1) cancels entirely (valid when x \\neq -3,\\ 3,\\ 1/2).",
        },
        {
          stepNumber: 7,
          description: "State the result and excluded values.",
          workingLatex: "\\frac{x + 3}{x - 3}, \\quad x \\neq 3,\\ -3,\\ \\tfrac{1}{2}",
          explanation:
            "Exclude x=3, -3 and 1/2 (the last from the cancelled 2x-1). Check x=0: original ((-3)/(-9)) \\cdot (3/(-1)) = (1/3) \\cdot (-3) = -1, simplified (0+3)/(0-3)=3/-3=-1. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x + 3}{x - 3}\\)",
      canonicalAnswer: "(x+3)/(x-3)",
    },
  },
  {
    id: "ga13-024",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{x^2 - 5x + 6}{x^2 - 4} \\div \\dfrac{x^2 - 9}{x^2 + 5x + 6}\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "dividing fractions", "factorising quadratics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Convert division to multiplication by flipping the divisor.",
          workingLatex: "\\frac{x^2 - 5x + 6}{x^2 - 4} \\cdot \\frac{x^2 + 5x + 6}{x^2 - 9}",
          explanation: "Dividing by a fraction means multiplying by its reciprocal, so the divisor (x^2-9)/(x^2+5x+6) flips upside down.",
        },
        {
          stepNumber: 2,
          description: "Factorise the first two quadratics.",
          workingLatex: "x^2 - 5x + 6 = (x - 2)(x - 3), \\quad x^2 - 4 = (x + 2)(x - 2)",
          explanation: "First: two numbers multiplying to 6 and adding to -5 are -2 and -3. Second: a difference of two squares.",
        },
        {
          stepNumber: 3,
          description: "Factorise the remaining two quadratics.",
          workingLatex: "x^2 + 5x + 6 = (x + 2)(x + 3), \\quad x^2 - 9 = (x + 3)(x - 3)",
          explanation: "Third: +2 and +3. Fourth: a difference of two squares.",
        },
        {
          stepNumber: 4,
          description: "Write the product fully factorised.",
          workingLatex: "\\frac{(x - 2)(x - 3)}{(x + 2)(x - 2)} \\cdot \\frac{(x + 2)(x + 3)}{(x + 3)(x - 3)}",
          explanation: "Substitute all four factorisations back in; every quadratic is now a pair of brackets.",
        },
        {
          stepNumber: 5,
          description: "Combine into a single fraction.",
          workingLatex: "= \\frac{(x - 2)(x - 3)(x + 2)(x + 3)}{(x + 2)(x - 2)(x + 3)(x - 3)}",
          explanation: "Multiply tops and bottoms, then list the four brackets on each side to find matches.",
        },
        {
          stepNumber: 6,
          description: "Cancel the matching factors.",
          workingLatex: "= \\frac{\\cancel{(x - 2)}\\,\\cancel{(x - 3)}\\,\\cancel{(x + 2)}\\,\\cancel{(x + 3)}}{\\cancel{(x + 2)}\\,\\cancel{(x - 2)}\\,\\cancel{(x + 3)}\\,\\cancel{(x - 3)}} = 1",
          explanation:
            "Each of (x-2), (x-3), (x+2), (x+3) appears once on top and once on the bottom, so all four pairs cancel (valid when x \\neq 2,\\ 3,\\ -2,\\ -3), leaving 1.",
        },
        {
          stepNumber: 7,
          description: "State the result and excluded values.",
          workingLatex: "1, \\quad x \\neq 2,\\ -2,\\ 3,\\ -3",
          explanation:
            "Exclude every value that zeroed an original denominator or cancelled factor. Check x=0: original ((6)/(-4)) ÷ ((-9)/(6)) = (-3/2) ÷ (-3/2) = 1, simplified 1. They match.",
        },
      ],
      finalAnswer: "\\(1\\)",
      canonicalAnswer: "1",
    },
  },
  {
    id: "ga13-025",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{6x^2 + x - 2}{4x^2 - 1}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "factorising quadratics", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the numerator by splitting the middle term.",
          workingLatex: "6x^2 + x - 2 = 6x^2 + 4x - 3x - 2",
          explanation:
            "Find two numbers multiplying to 6 \\cdot (-2) = -12 and adding to +1 (the coefficient of x): these are +4 and -3. Split x into 4x - 3x.",
        },
        {
          stepNumber: 2,
          description: "Factorise by grouping.",
          workingLatex: "6x^2 + 4x - 3x - 2 = 2x(3x + 2) - 1(3x + 2) = (3x + 2)(2x - 1)",
          explanation: "Group in pairs: 2x is common to the first pair, -1 to the second, both leaving (3x+2). Take out that common bracket.",
        },
        {
          stepNumber: 3,
          description: "Factorise the denominator as a difference of two squares.",
          workingLatex: "4x^2 - 1 = (2x)^2 - 1^2 = (2x + 1)(2x - 1)",
          explanation: "Recognise 4x^2 as (2x)^2, so this is A^2 - B^2 with A=2x, B=1, giving (2x+1)(2x-1).",
        },
        {
          stepNumber: 4,
          description: "Rewrite the fraction fully factorised.",
          workingLatex: "\\frac{6x^2 + x - 2}{4x^2 - 1} = \\frac{(3x + 2)(2x - 1)}{(2x + 1)(2x - 1)}",
          explanation: "(2x-1) now appears once on top and once on the bottom, ready to cancel.",
        },
        {
          stepNumber: 5,
          description: "Cancel the common factor (2x - 1).",
          workingLatex: "\\frac{(3x + 2)\\,\\cancel{(2x - 1)}}{(2x + 1)\\,\\cancel{(2x - 1)}} = \\frac{3x + 2}{2x + 1}",
          explanation:
            "Dividing top and bottom by (2x-1) — valid when x \\neq 1/2 — cancels it. (3x+2) and (2x+1) are different brackets, so nothing else cancels.",
        },
        {
          stepNumber: 6,
          description: "State the result and excluded values.",
          workingLatex: "\\frac{3x + 2}{2x + 1}, \\quad x \\neq \\tfrac{1}{2},\\ -\\tfrac{1}{2}",
          explanation:
            "Exclude x=1/2 (cancelled factor) and x=-1/2 (zero in the new denominator). Check x=1: original (6+1-2)/(4-1)=5/3, simplified (3+2)/(2+1)=5/3. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{3x + 2}{2x + 1}\\)",
      canonicalAnswer: "(3x+2)/(2x+1)",
    },
  },
  {
    id: "ga13-026",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{3}{x - 1} - \\dfrac{2}{x^2 - 1}\\) as a single fraction in its simplest form.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "subtracting fractions", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the second denominator.",
          workingLatex: "x^2 - 1 = (x + 1)(x - 1)",
          explanation: "x^2-1 is a difference of two squares; factorising it reveals the (x-1) it shares with the first denominator.",
        },
        {
          stepNumber: 2,
          description: "Identify the lowest common denominator.",
          workingLatex: "\\text{LCD} = (x + 1)(x - 1)",
          explanation: "(x-1) already divides (x+1)(x-1), so the LCD is just (x+1)(x-1), not (x-1)(x^2-1).",
        },
        {
          stepNumber: 3,
          description: "Rewrite the first fraction over the LCD.",
          workingLatex: "\\frac{3}{x - 1} = \\frac{3(x + 1)}{(x + 1)(x - 1)}",
          explanation: "Multiply the first fraction's top and bottom by the missing factor (x+1).",
        },
        {
          stepNumber: 4,
          description: "Subtract the numerators over the common denominator.",
          workingLatex: "\\frac{3(x + 1) - 2}{(x + 1)(x - 1)}",
          explanation: "The second fraction already sits over the LCD, so its numerator is just 2; subtract it from 3(x+1).",
        },
        {
          stepNumber: 5,
          description: "Simplify the numerator.",
          workingLatex: "3(x + 1) - 2 = 3x + 3 - 2 = 3x + 1",
          explanation: "Expand 3(x+1) to 3x+3, then subtract 2 to get 3x+1.",
        },
        {
          stepNumber: 6,
          description: "Check for cancellation and state the answer.",
          workingLatex: "\\frac{3x + 1}{(x + 1)(x - 1)}, \\quad x \\neq 1,\\ -1",
          explanation:
            "3x+1 shares no factor with either bracket, so this is simplest. Exclude x=1, -1. Check x=0: original 3/-1 - 2/-1 = -3 + 2 = -1, single (1)/((1)(-1))=1/-1=-1. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{3x + 1}{(x + 1)(x - 1)}\\)",
      canonicalAnswer: "(3x+1)/((x+1)(x-1))",
    },
  },
  {
    id: "ga13-027",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{x^3 - x}{x^2 - 2x + 1}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "common factor", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take out the common factor x from the numerator.",
          workingLatex: "x^3 - x = x(x^2 - 1)",
          explanation: "Both terms contain x: x^3 = x \\cdot x^2 and x = x \\cdot 1. Factoring x out first is essential, otherwise the difference of two squares hiding inside stays invisible.",
        },
        {
          stepNumber: 2,
          description: "Factorise the difference of two squares inside.",
          workingLatex: "x(x^2 - 1) = x(x + 1)(x - 1)",
          explanation: "x^2 - 1 = (x+1)(x-1), so the numerator is now the product of three factors x, (x+1) and (x-1).",
        },
        {
          stepNumber: 3,
          description: "Factorise the denominator (a perfect-square trinomial).",
          workingLatex: "x^2 - 2x + 1 = (x - 1)^2 = (x - 1)(x - 1)",
          explanation: "Two numbers multiplying to +1 and adding to -2 are both -1, giving the repeated factor (x-1).",
        },
        {
          stepNumber: 4,
          description: "Rewrite the fraction fully factorised.",
          workingLatex: "\\frac{x^3 - x}{x^2 - 2x + 1} = \\frac{x(x + 1)(x - 1)}{(x - 1)(x - 1)}",
          explanation: "Count the (x-1) factors: one on top, two on the bottom — so only one pair can cancel.",
        },
        {
          stepNumber: 5,
          description: "Cancel one common factor of (x - 1).",
          workingLatex: "\\frac{x(x + 1)\\,\\cancel{(x - 1)}}{\\cancel{(x - 1)}(x - 1)} = \\frac{x(x + 1)}{x - 1}",
          explanation:
            "Cancel one (x-1) from each (valid when x \\neq 1); the bottom started with two, so one (x-1) survives below. The x(x+1) on top is not a factor of (x-1), so it stays.",
        },
        {
          stepNumber: 6,
          description: "State the result and excluded value.",
          workingLatex: "\\frac{x(x + 1)}{x - 1}, \\quad x \\neq 1",
          explanation:
            "Only x=1 is excluded, the value killing the surviving denominator. Check x=2: original (8-2)/(4-4+1)=6/1=6, simplified 2(3)/(2-1)=6/1=6. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x(x + 1)}{x - 1}\\)",
      canonicalAnswer: "x(x+1)/(x-1)",
    },
  },
  {
    id: "ga13-028",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{x + 1}{x^2 + 5x + 6} + \\dfrac{2}{x + 2}\\) as a single fraction in its simplest form.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "adding fractions", "factorising quadratics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the first denominator.",
          workingLatex: "x^2 + 5x + 6 = (x + 2)(x + 3)",
          explanation: "Two numbers multiplying to 6 and adding to 5 are 2 and 3, so x^2+5x+6 = (x+2)(x+3). This exposes the (x+2) shared with the second denominator.",
        },
        {
          stepNumber: 2,
          description: "Identify the lowest common denominator.",
          workingLatex: "\\text{LCD} = (x + 2)(x + 3)",
          explanation: "(x+2) already divides (x+2)(x+3), so the LCD is just (x+2)(x+3) — no extra (x+2) needed.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the second fraction over the LCD.",
          workingLatex: "\\frac{2}{x + 2} = \\frac{2(x + 3)}{(x + 2)(x + 3)}",
          explanation: "Multiply the second fraction's top and bottom by the missing factor (x+3); the first fraction already has the LCD.",
        },
        {
          stepNumber: 4,
          description: "Add the numerators over the common denominator.",
          workingLatex: "\\frac{(x + 1) + 2(x + 3)}{(x + 2)(x + 3)}",
          explanation: "Both fractions now share (x+2)(x+3), so add the numerators (x+1) and 2(x+3).",
        },
        {
          stepNumber: 5,
          description: "Expand and collect terms in the numerator.",
          workingLatex: "(x + 1) + 2(x + 3) = x + 1 + 2x + 6 = 3x + 7",
          explanation: "Expand 2(x+3) to 2x+6, then collect: x+2x = 3x and 1+6 = 7.",
        },
        {
          stepNumber: 6,
          description: "Check for cancellation and state the answer.",
          workingLatex: "\\frac{3x + 7}{(x + 2)(x + 3)}, \\quad x \\neq -2,\\ -3",
          explanation:
            "3x+7 shares no factor with either bracket, so this is simplest. Exclude x=-2, -3. Check x=0: original 1/6 + 2/2 = 1/6 + 1 = 7/6, single (7)/((2)(3))=7/6. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{3x + 7}{(x + 2)(x + 3)}\\)",
      canonicalAnswer: "(3x+7)/((x+2)(x+3))",
    },
  },
  {
    id: "ga13-029",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify fully \\(\\dfrac{2x^2 - 50}{x^2 + 10x + 25}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Take out the common factor 2 from the numerator.",
          workingLatex: "2x^2 - 50 = 2(x^2 - 25)",
          explanation: "Strip the numerical common factor 2 first; this uncovers the difference of two squares x^2-25 that would otherwise be hidden.",
        },
        {
          stepNumber: 2,
          description: "Factorise the difference of two squares.",
          workingLatex: "2(x^2 - 25) = 2(x + 5)(x - 5)",
          explanation: "x^2 - 25 = (x+5)(x-5) with A=x, B=5; the factor of 2 stays out front.",
        },
        {
          stepNumber: 3,
          description: "Factorise the denominator (a perfect square).",
          workingLatex: "x^2 + 10x + 25 = (x + 5)^2 = (x + 5)(x + 5)",
          explanation: "5+5=10 (the x-coefficient) and 5 \\cdot 5=25 (the constant), giving the repeated factor (x+5).",
        },
        {
          stepNumber: 4,
          description: "Rewrite the fraction fully factorised.",
          workingLatex: "\\frac{2x^2 - 50}{x^2 + 10x + 25} = \\frac{2(x + 5)(x - 5)}{(x + 5)(x + 5)}",
          explanation: "Count the (x+5) factors: one on top, two on the bottom — only one pair can cancel.",
        },
        {
          stepNumber: 5,
          description: "Cancel one common factor of (x + 5).",
          workingLatex: "\\frac{2\\,\\cancel{(x + 5)}(x - 5)}{\\cancel{(x + 5)}(x + 5)} = \\frac{2(x - 5)}{x + 5}",
          explanation:
            "Cancel one (x+5) from each (valid when x \\neq -5); since the bottom had two, one (x+5) survives below. Don't cancel both — the top only had one.",
        },
        {
          stepNumber: 6,
          description: "State the result and excluded value.",
          workingLatex: "\\frac{2(x - 5)}{x + 5}, \\quad x \\neq -5",
          explanation:
            "Only x=-5 is excluded, the value killing the surviving denominator. Check x=0: original (0-50)/(0+0+25)=-50/25=-2, simplified 2(0-5)/(0+5)=-10/5=-2. They match.",
        },
      ],
      finalAnswer: "\\(\\dfrac{2(x - 5)}{x + 5}\\)",
      canonicalAnswer: "2(x-5)/(x+5)",
    },
  },
  {
    id: "ga13-030",
    topicRef: "ga13",
    topicTitle: "Simplifying algebraic fractions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\left(\\dfrac{x^2 - 4}{x^2 + 4x + 4}\\right) \\div \\left(\\dfrac{x - 2}{x + 2}\\right)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simplifying algebraic fractions", "dividing fractions", "difference of two squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Flip the divisor and change ÷ to ×.",
          workingLatex: "\\frac{x^2 - 4}{x^2 + 4x + 4} \\cdot \\frac{x + 2}{x - 2}",
          explanation: "Dividing by (x-2)/(x+2) is the same as multiplying by its reciprocal (x+2)/(x-2); only the divisor flips.",
        },
        {
          stepNumber: 2,
          description: "Factorise the difference of two squares.",
          workingLatex: "x^2 - 4 = (x + 2)(x - 2)",
          explanation: "A^2 - B^2 with A=x, B=2, so x^2-4 = (x+2)(x-2).",
        },
        {
          stepNumber: 3,
          description: "Factorise the perfect-square denominator.",
          workingLatex: "x^2 + 4x + 4 = (x + 2)^2 = (x + 2)(x + 2)",
          explanation: "2+2=4 and 2 \\cdot 2=4, giving the repeated factor (x+2); written as two brackets to make cancelling clear.",
        },
        {
          stepNumber: 4,
          description: "Write the product fully factorised.",
          workingLatex: "\\frac{(x + 2)(x - 2)}{(x + 2)(x + 2)} \\cdot \\frac{x + 2}{x - 2}",
          explanation: "Substitute the factorisations into the product, ready to multiply out.",
        },
        {
          stepNumber: 5,
          description: "Combine into a single fraction.",
          workingLatex: "= \\frac{(x + 2)(x - 2)(x + 2)}{(x + 2)(x + 2)(x - 2)}",
          explanation: "Multiply tops and bottoms; both sides now carry two (x+2) and one (x-2).",
        },
        {
          stepNumber: 6,
          description: "Cancel the matching factors.",
          workingLatex: "= \\frac{\\cancel{(x + 2)}\\,\\cancel{(x - 2)}\\,\\cancel{(x + 2)}}{\\cancel{(x + 2)}\\,\\cancel{(x + 2)}\\,\\cancel{(x - 2)}} = 1",
          explanation:
            "The top and bottom have an identical set of factors — two (x+2) and one (x-2) each — so everything cancels (valid when x \\neq -2,\\ 2), leaving 1.",
        },
        {
          stepNumber: 7,
          description: "State the result and excluded values.",
          workingLatex: "1, \\quad x \\neq 2,\\ -2",
          explanation:
            "Exclude x=2 and x=-2, the values that zeroed an original denominator or cancelled factor. Check x=0: original ((-4)/4) ÷ ((-2)/2) = (-1) ÷ (-1) = 1, simplified 1. They match.",
        },
      ],
      finalAnswer: "\\(1\\)",
      canonicalAnswer: "1",
    },
  },
];
