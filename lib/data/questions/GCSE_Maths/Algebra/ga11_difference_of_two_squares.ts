/*
 * Topic: Difference of two squares
 * Ref:   ga11   (DfE A4)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: recognising and using the identity a^2 - b^2 = (a+b)(a-b) in BOTH
 *   directions. Five clusters:
 *     (1) factorise x^2 - n^2, e.g. x^2 - 25, x^2 - 1;
 *     (2) coefficient squares, e.g. 9x^2 - 16, 25x^2 - 49 -> (3x+4)(3x-4) etc;
 *     (3) two variables, e.g. x^2 - y^2, 4a^2 - 9b^2;
 *     (4) numerical evaluation using DOTS, e.g. 51^2 - 49^2, 103^2 - 97^2,
 *         computed via (a+b)(a-b) rather than squaring directly;
 *     (5) non-examples (x^2 + 25 does NOT factorise over the reals) and items
 *         needing a common factor first, e.g. 2x^2 - 18 = 2(x^2 - 9)
 *         = 2(x+3)(x-3).
 *   Expanding (a+b)(a-b) back to a^2 - b^2 is included as a contrast.
 *
 * Difficulty split (30 total):
 *   Foundation :  4  (ga11-001 .. ga11-004)
 *   Standard   : 14  (ga11-005 .. ga11-018)
 *   Challenge  : 12  (ga11-019 .. ga11-030)
 *
 * Id range: ga11-001 .. ga11-030 (zero-padded).
 *
 * LaTeX note: questionText maths is wrapped in \( ... \) and uses \dfrac for
 *   display fractions; workingLatex is RAW (unwrapped) and uses \frac (hard
 *   project rule — never \tfrac). Multiplication is shown with \cdot (never
 *   \times or *) except where the problem is explicitly about the × operation.
 *   answerType is "expression" for factorising items and "numeric" for the
 *   numerical-evaluation (DOTS) items.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ===================== FOUNDATION (001–004) =====================
  {
    id: "ga11-001",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 25\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["difference of two squares", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "x^2 - 25",
          explanation:
            "The expression is one square term MINUS another square term, with nothing in between — no \\( x \\) term and no extra constant. That exact pattern, \\( a^2 - b^2 \\), is called a difference of two squares, and it always factorises into two brackets. The key word is DIFFERENCE: there must be a minus sign. If it were \\( x^2 + 25 \\) (a sum) this method would not work at all. Spotting the pattern is the whole skill here.",
        },
        {
          stepNumber: 2,
          description: "Confirm the constant is a perfect square.",
          workingLatex: "25 = 5^2",
          explanation:
            "Before using the formula, check that the number really is a square. Here \\( 25 = 5^2 \\), so it qualifies. If the constant were, say, \\( 24 \\), it would not be a perfect square and this method would not apply.",
        },
        {
          stepNumber: 3,
          description: "Write each part as a square: find a and b.",
          workingLatex: "x^2 - 25 = x^2 - 5^2 \\quad\\Rightarrow\\quad a = x,\\; b = 5",
          explanation:
            "Rewrite the expression so both parts are visibly squared. The first part \\( x^2 \\) is already a square, so \\( a = x \\). The second part is \\( 5^2 \\), so \\( b = 5 \\). We have now matched the expression to \\( a^2 - b^2 \\) with \\( a = x \\) and \\( b = 5 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "x^2 - 5^2 = (x + 5)(x - 5)",
          explanation:
            "Substitute \\( a = x \\) and \\( b = 5 \\) into \\( (a+b)(a-b) \\). This gives \\( (x+5)(x-5) \\). The two brackets are identical apart from the sign in the middle — one has a plus, the other a minus. The order of the brackets doesn't matter, but each must contain the same \\( x \\) and the same \\( 5 \\).",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "(x+5)(x-5) = x^2 - 5x + 5x - 25 = x^2 - 25",
          explanation:
            "Multiply out to check: the middle terms \\( -5x \\) and \\( +5x \\) are equal and opposite, so they cancel, leaving \\( x^2 - 25 \\). This is the original expression, so the factorisation is correct.",
        },
      ],
      finalAnswer: "\\((x+5)(x-5)\\)",
      canonicalAnswer: "(x+5)(x-5)",
    },
  },
  {
    id: "ga11-002",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 1\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["difference of two squares", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "x^2 - 1",
          explanation:
            "This is a square term minus a constant, with no \\( x \\) term, so it has the shape \\( a^2 - b^2 \\). The thing to notice is that the constant \\( 1 \\) is itself a perfect square.",
        },
        {
          stepNumber: 2,
          description: "Confirm the constant is a perfect square.",
          workingLatex: "1 = 1^2",
          explanation:
            "Since \\( 1 = 1^2 \\), the constant is a square. Students often miss this because \\( 1 \\) does not look like the bigger squares such as \\( 25 \\) or \\( 100 \\); whenever you see \\( x^2 - 1 \\), think 'difference of two squares'.",
        },
        {
          stepNumber: 3,
          description: "Write each part as a square: find a and b.",
          workingLatex: "x^2 - 1 = x^2 - 1^2 \\quad\\Rightarrow\\quad a = x,\\; b = 1",
          explanation:
            "Rewrite so both parts are squared: \\( x^2 - 1^2 \\). The first part gives \\( a = x \\), and the second gives \\( b = 1 \\). We now match \\( a^2 - b^2 \\) with \\( a = x \\) and \\( b = 1 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "x^2 - 1^2 = (x + 1)(x - 1)",
          explanation:
            "Putting \\( a = x \\) and \\( b = 1 \\) into \\( (a+b)(a-b) \\) gives \\( (x+1)(x-1) \\). Again the two brackets differ only by the middle sign.",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "(x+1)(x-1) = x^2 - x + x - 1 = x^2 - 1",
          explanation:
            "Expanding, the \\( -x \\) and \\( +x \\) cancel, leaving \\( x^2 - 1 \\), which matches the question. The factorisation is correct.",
        },
      ],
      finalAnswer: "\\((x+1)(x-1)\\)",
      canonicalAnswer: "(x+1)(x-1)",
    },
  },
  {
    id: "ga11-003",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand and simplify \\((x + 7)(x - 7)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["difference of two squares", "expanding"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference-of-squares shape.",
          workingLatex: "(x + 7)(x - 7)",
          explanation:
            "Two brackets that are identical except for the sign in the middle, \\( (a+b)(a-b) \\), always multiply to give \\( a^2 - b^2 \\). Here \\( a = x \\) and \\( b = 7 \\). This is the reverse of factorising: instead of going from \\( a^2 - b^2 \\) to two brackets, we go from two brackets back to \\( a^2 - b^2 \\). We will expand in full to see exactly why the middle disappears.",
        },
        {
          stepNumber: 2,
          description: "Multiply out every pair of terms.",
          workingLatex: "(x+7)(x-7) = x \\cdot x + x \\cdot (-7) + 7 \\cdot x + 7 \\cdot (-7)",
          explanation:
            "Multiply each term in the first bracket by each term in the second — the FOIL pattern (First, Outer, Inner, Last). This produces four separate products before any simplifying.",
        },
        {
          stepNumber: 3,
          description: "Work out each of the four products.",
          workingLatex: "= x^2 - 7x + 7x - 49",
          explanation:
            "Evaluate each product in turn: \\( x \\cdot x = x^2 \\), \\( x \\cdot (-7) = -7x \\), \\( 7 \\cdot x = +7x \\), and \\( 7 \\cdot (-7) = -49 \\). Watch the signs carefully — only one of the two middle terms is negative.",
        },
        {
          stepNumber: 4,
          description: "Cancel the middle terms and simplify.",
          workingLatex: "= x^2 - 49",
          explanation:
            "The two middle terms \\( -7x \\) and \\( +7x \\) are equal and opposite, so they add to zero and cancel. We are left with \\( x^2 - 49 \\), a difference of two squares — exactly \\( a^2 - b^2 \\) with \\( a = x,\\, b = 7 \\).",
        },
      ],
      finalAnswer: "\\(x^2 - 49\\)",
      canonicalAnswer: "x^2-49",
    },
  },
  {
    id: "ga11-004",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - 100\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["difference of two squares", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "x^2 - 100",
          explanation:
            "A square term minus a constant, with no \\( x \\) term in between, so this has the shape \\( a^2 - b^2 \\). The next thing to do is confirm the constant is a perfect square.",
        },
        {
          stepNumber: 2,
          description: "Confirm the constant is a perfect square.",
          workingLatex: "100 = 10^2",
          explanation:
            "Check the constant: \\( 100 = 10^2 \\), so it is a perfect square and the method applies. If you are unsure, run through the small squares \\( 1, 4, 9, 16, 25, \\ldots, 100 \\) until you reach it.",
        },
        {
          stepNumber: 3,
          description: "Write each part as a square: find a and b.",
          workingLatex: "x^2 - 100 = x^2 - 10^2 \\quad\\Rightarrow\\quad a = x,\\; b = 10",
          explanation:
            "Take the square root of each part: \\( \\sqrt{x^2} = x \\) gives \\( a = x \\), and \\( \\sqrt{100} = 10 \\) gives \\( b = 10 \\). The expression is now in the form \\( a^2 - b^2 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "x^2 - 10^2 = (x + 10)(x - 10)",
          explanation:
            "Substitute \\( a = x \\) and \\( b = 10 \\) into \\( (a+b)(a-b) \\) to get \\( (x+10)(x-10) \\). One bracket gets the plus, the other gets the minus — a common slip is to write \\( (x+10)(x+10) \\), but that is \\( (x+10)^2 = x^2 + 20x + 100 \\), not a difference of squares.",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "(x+10)(x-10) = x^2 - 10x + 10x - 100 = x^2 - 100",
          explanation:
            "The middle terms \\( -10x \\) and \\( +10x \\) cancel, and we recover \\( x^2 - 100 \\), so the answer is correct.",
        },
      ],
      finalAnswer: "\\((x+10)(x-10)\\)",
      canonicalAnswer: "(x+10)(x-10)",
    },
  },

  // ===================== STANDARD (005–018) =====================
  {
    id: "ga11-005",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(9x^2 - 16\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "coefficient squares", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "9x^2 - 16",
          explanation:
            "Both parts are perfect squares: \\( 9x^2 \\) is a square because \\( 9 = 3^2 \\) and \\( x^2 \\) are both squares, and \\( 16 = 4^2 \\). One square minus another with nothing in between, so this is a difference of two squares — just with a coefficient on the \\( x^2 \\).",
        },
        {
          stepNumber: 2,
          description: "Square-root the first part to find a.",
          workingLatex: "\\sqrt{9x^2} = \\sqrt{9}\\,\\sqrt{x^2} = 3x \\quad\\Rightarrow\\quad a = 3x",
          explanation:
            "To find \\( a \\), take the square root of the whole first term. Root the number and the letter separately: \\( \\sqrt{9} = 3 \\) and \\( \\sqrt{x^2} = x \\), so \\( a = 3x \\). Check by squaring back: \\( (3x)^2 = 9x^2 \\). Correct. A common slip is to write \\( a = 9x \\) — don't forget to root the \\( 9 \\) too.",
        },
        {
          stepNumber: 3,
          description: "Square-root the second part to find b.",
          workingLatex: "\\sqrt{16} = 4 \\quad\\Rightarrow\\quad b = 4",
          explanation:
            "The second term is \\( 16 = 4^2 \\), so \\( b = 4 \\). We now have \\( 9x^2 - 16 = (3x)^2 - 4^2 \\), matching \\( a^2 - b^2 \\) with \\( a = 3x,\\, b = 4 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "(3x)^2 - 4^2 = (3x + 4)(3x - 4)",
          explanation:
            "Substitute \\( a = 3x \\) and \\( b = 4 \\) into \\( (a+b)(a-b) \\), giving \\( (3x+4)(3x-4) \\). The \\( 3x \\) stays whole inside each bracket.",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "(3x+4)(3x-4) = 9x^2 - 12x + 12x - 16 = 9x^2 - 16",
          explanation:
            "Expanding, the middle terms \\( -12x \\) and \\( +12x \\) cancel, leaving \\( 9x^2 - 16 \\). This matches the original expression, so the factorisation is correct.",
        },
      ],
      finalAnswer: "\\((3x+4)(3x-4)\\)",
      canonicalAnswer: "(3x+4)(3x-4)",
    },
  },
  {
    id: "ga11-006",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(25x^2 - 49\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "coefficient squares", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "25x^2 - 49",
          explanation:
            "Both terms are perfect squares — \\( 25x^2 \\) (since \\( 25 = 5^2 \\)) and \\( 49 = 7^2 \\) — separated by a minus sign, so it is a difference of two squares.",
        },
        {
          stepNumber: 2,
          description: "Square-root the first part to find a.",
          workingLatex: "\\sqrt{25x^2} = \\sqrt{25}\\,\\sqrt{x^2} = 5x \\quad\\Rightarrow\\quad a = 5x",
          explanation:
            "Root the number and the letter separately: \\( \\sqrt{25} = 5 \\) and \\( \\sqrt{x^2} = x \\), so \\( a = 5x \\). Check by squaring back: \\( (5x)^2 = 25x^2 \\). Correct.",
        },
        {
          stepNumber: 3,
          description: "Square-root the second part to find b.",
          workingLatex: "\\sqrt{49} = 7 \\quad\\Rightarrow\\quad b = 7",
          explanation:
            "Since \\( 49 = 7^2 \\), we have \\( b = 7 \\). Thus \\( 25x^2 - 49 = (5x)^2 - 7^2 \\), matching \\( a^2 - b^2 \\) with \\( a = 5x,\\, b = 7 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "(5x)^2 - 7^2 = (5x + 7)(5x - 7)",
          explanation:
            "With \\( a = 5x,\\, b = 7 \\), substituting into \\( (a+b)(a-b) \\) gives the factorisation \\( (5x+7)(5x-7) \\).",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "(5x+7)(5x-7) = 25x^2 - 35x + 35x - 49 = 25x^2 - 49",
          explanation:
            "The middle terms \\( -35x \\) and \\( +35x \\) cancel, leaving \\( 25x^2 - 49 \\), as required.",
        },
      ],
      finalAnswer: "\\((5x+7)(5x-7)\\)",
      canonicalAnswer: "(5x+7)(5x-7)",
    },
  },
  {
    id: "ga11-007",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(x^2 - y^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "two variables", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "x^2 - y^2",
          explanation:
            "This is the most basic form of the identity itself: one square \\( x^2 \\) minus another square \\( y^2 \\). There is no number to root and no common factor, so it factorises directly.",
        },
        {
          stepNumber: 2,
          description: "Identify a and b.",
          workingLatex: "x^2 - y^2 \\quad\\Rightarrow\\quad a = x,\\; b = y",
          explanation:
            "Taking square roots of each part, \\( \\sqrt{x^2} = x \\) so \\( a = x \\), and \\( \\sqrt{y^2} = y \\) so \\( b = y \\). Here both \\( a \\) and \\( b \\) are single letters rather than numbers.",
        },
        {
          stepNumber: 3,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "x^2 - y^2 = (x + y)(x - y)",
          explanation:
            "Substituting \\( a = x,\\, b = y \\) into \\( (a+b)(a-b) \\) gives \\( (x+y)(x-y) \\). This is the standard difference-of-two-squares identity written out in full — worth memorising, because every other question in this topic is just this same pattern with numbers or coefficients dressed on top.",
        },
        {
          stepNumber: 4,
          description: "Verify by expanding.",
          workingLatex: "(x+y)(x-y) = x^2 - xy + xy - y^2 = x^2 - y^2",
          explanation:
            "The cross terms \\( -xy \\) and \\( +xy \\) cancel, returning \\( x^2 - y^2 \\). Confirmed.",
        },
      ],
      finalAnswer: "\\((x+y)(x-y)\\)",
      canonicalAnswer: "(x+y)(x-y)",
    },
  },
  {
    id: "ga11-008",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(4a^2 - 9b^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "two variables", "coefficient squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "4a^2 - 9b^2",
          explanation:
            "Each term is a perfect square: \\( 4a^2 = (2a)^2 \\) and \\( 9b^2 = (3b)^2 \\). They are separated by a minus sign, so it is a difference of two squares — with two different letters this time, but the method is unchanged.",
        },
        {
          stepNumber: 2,
          description: "Square-root the first part to find a.",
          workingLatex: "\\sqrt{4a^2} = \\sqrt{4}\\,\\sqrt{a^2} = 2a",
          explanation:
            "The role of '\\( a \\)' in the formula is played by \\( 2a \\): root the number \\( \\sqrt{4} = 2 \\) and the letter \\( \\sqrt{a^2} = a \\). Check: \\( (2a)^2 = 4a^2 \\). Correct.",
        },
        {
          stepNumber: 3,
          description: "Square-root the second part to find b.",
          workingLatex: "\\sqrt{9b^2} = \\sqrt{9}\\,\\sqrt{b^2} = 3b",
          explanation:
            "The role of '\\( b \\)' is played by \\( 3b \\): \\( \\sqrt{9} = 3 \\) and \\( \\sqrt{b^2} = b \\). So \\( 4a^2 - 9b^2 = (2a)^2 - (3b)^2 \\), matching \\( a^2 - b^2 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "(2a)^2 - (3b)^2 = (2a + 3b)(2a - 3b)",
          explanation:
            "Substitute the two roots \\( 2a \\) and \\( 3b \\) into \\( (a+b)(a-b) \\) to get \\( (2a+3b)(2a-3b) \\).",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "(2a+3b)(2a-3b) = 4a^2 - 6ab + 6ab - 9b^2 = 4a^2 - 9b^2",
          explanation:
            "The middle terms \\( -6ab \\) and \\( +6ab \\) cancel, leaving \\( 4a^2 - 9b^2 \\), matching the question.",
        },
      ],
      finalAnswer: "\\((2a+3b)(2a-3b)\\)",
      canonicalAnswer: "(2a+3b)(2a-3b)",
    },
  },
  {
    id: "ga11-009",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Use the difference of two squares to evaluate \\(51^2 - 49^2\\) without a calculator.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "numerical evaluation", "DOTS"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "51^2 - 49^2 \\quad\\Rightarrow\\quad a = 51,\\; b = 49",
          explanation:
            "This is one square number minus another, exactly the shape \\( a^2 - b^2 \\) with \\( a = 51 \\) and \\( b = 49 \\). Rather than work out \\( 51^2 = 2601 \\) and \\( 49^2 = 2401 \\) separately, we use the factorised form to make the arithmetic easy.",
        },
        {
          stepNumber: 2,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "51^2 - 49^2 = (51 + 49)(51 - 49)",
          explanation:
            "Substitute \\( a = 51,\\, b = 49 \\) into \\( (a+b)(a-b) \\). The sum and the difference of the two numbers are both quick to compute mentally — that is the whole point of the trick.",
        },
        {
          stepNumber: 3,
          description: "Compute the sum.",
          workingLatex: "51 + 49 = 100",
          explanation:
            "The first bracket is the sum \\( 51 + 49 = 100 \\). Conveniently the two numbers were chosen to add to a round number.",
        },
        {
          stepNumber: 4,
          description: "Compute the difference.",
          workingLatex: "51 - 49 = 2",
          explanation:
            "The second bracket is the difference \\( 51 - 49 = 2 \\). The awkward squaring has now been replaced by two easy mental sums.",
        },
        {
          stepNumber: 5,
          description: "Multiply the two results.",
          workingLatex: "100 \\cdot 2 = 200",
          explanation:
            "Finally multiply the two brackets together: \\( 100 \\cdot 2 = 200 \\). Note we MULTIPLY the sum and the difference — a common slip is to add them. (Direct check: \\( 2601 - 2401 = 200 \\), which agrees.)",
        },
      ],
      finalAnswer: "\\(200\\)",
      canonicalAnswer: "200",
    },
  },
  {
    id: "ga11-010",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Use the difference of two squares to evaluate \\(103^2 - 97^2\\) without a calculator.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "numerical evaluation", "DOTS"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "103^2 - 97^2 \\quad\\Rightarrow\\quad a = 103,\\; b = 97",
          explanation:
            "Again this is \\( a^2 - b^2 \\), now with \\( a = 103 \\) and \\( b = 97 \\). Squaring three-digit numbers by hand is hard work, so we use the factorised form instead.",
        },
        {
          stepNumber: 2,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "103^2 - 97^2 = (103 + 97)(103 - 97)",
          explanation:
            "Substitute \\( a = 103,\\, b = 97 \\) into \\( (a+b)(a-b) \\), turning the two squares into a sum times a difference.",
        },
        {
          stepNumber: 3,
          description: "Compute the sum.",
          workingLatex: "103 + 97 = 200",
          explanation:
            "The first bracket is \\( 103 + 97 = 200 \\), a round number that is simple to handle.",
        },
        {
          stepNumber: 4,
          description: "Compute the difference.",
          workingLatex: "103 - 97 = 6",
          explanation:
            "The second bracket is \\( 103 - 97 = 6 \\). Both brackets are now single easy values.",
        },
        {
          stepNumber: 5,
          description: "Multiply the two results.",
          workingLatex: "200 \\cdot 6 = 1200",
          explanation:
            "So \\( 103^2 - 97^2 = 200 \\cdot 6 = 1200 \\). (Direct check: \\( 10609 - 9409 = 1200 \\).)",
        },
      ],
      finalAnswer: "\\(1200\\)",
      canonicalAnswer: "1200",
    },
  },
  {
    id: "ga11-011",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(2x^2 - 18\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "common factor", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check for a common factor first.",
          workingLatex: "2x^2 - 18 \\quad\\Rightarrow\\quad \\text{both terms even}",
          explanation:
            "Before reaching for difference of two squares, always look for a common factor. Here both terms are even: \\( 2x^2 \\) and \\( 18 \\) share a factor of \\( 2 \\). Note that \\( 2x^2 \\) on its own is NOT a perfect square (because \\( 2 \\) is not a square number), so we cannot apply DOTS directly — the common factor must come out first.",
        },
        {
          stepNumber: 2,
          description: "Take out the common factor of 2.",
          workingLatex: "2x^2 - 18 = 2(x^2 - 9)",
          explanation:
            "Factor out \\( 2 \\): \\( 2x^2 \\div 2 = x^2 \\) and \\( 18 \\div 2 = 9 \\). This leaves \\( 2(x^2 - 9) \\). Now the bracket \\( x^2 - 9 \\) is a genuine difference of two squares.",
        },
        {
          stepNumber: 3,
          description: "Identify a and b inside the bracket.",
          workingLatex: "x^2 - 9 = x^2 - 3^2 \\quad\\Rightarrow\\quad a = x,\\; b = 3",
          explanation:
            "Work inside the bracket only, leaving the \\( 2 \\) parked out front. Square-rooting, \\( \\sqrt{x^2} = x \\) gives \\( a = x \\) and \\( \\sqrt{9} = 3 \\) gives \\( b = 3 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula to the bracket.",
          workingLatex: "2(x^2 - 9) = 2(x + 3)(x - 3)",
          explanation:
            "Factorise \\( x^2 - 9 = (x+3)(x-3) \\) and keep the \\( 2 \\) out front. 'Factorise fully' means we must include that common factor, so the complete answer is \\( 2(x+3)(x-3) \\). Dropping the \\( 2 \\) would lose marks.",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "2(x+3)(x-3) = 2(x^2 - 9) = 2x^2 - 18",
          explanation:
            "Expanding back recovers \\( 2x^2 - 18 \\), the original expression, so the factorisation is correct and complete.",
        },
      ],
      finalAnswer: "\\(2(x+3)(x-3)\\)",
      canonicalAnswer: "2(x+3)(x-3)",
    },
  },
  {
    id: "ga11-012",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(36 - x^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares (constant first).",
          workingLatex: "36 - x^2 = 6^2 - x^2",
          explanation:
            "The square term being subtracted is the \\( x^2 \\) this time, so the larger square \\( 36 = 6^2 \\) comes first. It is still a difference of two squares \\( a^2 - b^2 \\), just written with the number term in front of the letter term. The order of subtraction matters: whatever comes first plays the role of \\( a \\), and whatever is subtracted plays the role of \\( b \\).",
        },
        {
          stepNumber: 2,
          description: "Identify a and b.",
          workingLatex: "6^2 - x^2 \\quad\\Rightarrow\\quad a = 6,\\; b = x",
          explanation:
            "Square-rooting each part: \\( \\sqrt{36} = 6 \\) gives \\( a = 6 \\), and \\( \\sqrt{x^2} = x \\) gives \\( b = x \\). Taking \\( a \\) to be the first (larger) square keeps the working tidy.",
        },
        {
          stepNumber: 3,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "6^2 - x^2 = (6 + x)(6 - x)",
          explanation:
            "Substitute \\( a = 6,\\, b = x \\) into \\( (a+b)(a-b) \\) to get \\( (6+x)(6-x) \\). Keeping the \\( 6 \\) first in both brackets avoids sign slips.",
        },
        {
          stepNumber: 4,
          description: "Verify by expanding.",
          workingLatex: "(6+x)(6-x) = 36 - 6x + 6x - x^2 = 36 - x^2",
          explanation:
            "The middle terms cancel, leaving \\( 36 - x^2 \\). Correct. (You may also write this as \\( -(x+6)(x-6) \\); both forms expand to \\( 36 - x^2 \\), so either is acceptable.)",
        },
      ],
      finalAnswer: "\\((6+x)(6-x)\\)",
      canonicalAnswer: "(6+x)(6-x)",
    },
  },
  {
    id: "ga11-013",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Decide whether \\(x^2 + 25\\) can be factorised over the real numbers. Explain your answer.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "non-example", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare with the difference-of-squares pattern.",
          workingLatex: "x^2 + 25 \\quad\\text{vs}\\quad a^2 - b^2",
          explanation:
            "The difference of two squares requires a MINUS sign between the two squares: \\( a^2 - b^2 \\). Here we have a PLUS sign, \\( x^2 + 25 \\). This is a SUM of two squares, not a difference, so the DOTS formula does not apply.",
        },
        {
          stepNumber: 2,
          description: "Check there is no common factor.",
          workingLatex: "x^2 + 25 \\quad\\Rightarrow\\quad \\gcd(1, 25) = 1",
          explanation:
            "Maybe something else could be factored out? Check for a common factor: \\( 1 \\) (the coefficient of \\( x^2 \\)) and \\( 25 \\) share no factor greater than \\( 1 \\), and there is no common \\( x \\). So nothing can be taken outside a bracket either.",
        },
        {
          stepNumber: 3,
          description: "Rule out the tempting wrong answer.",
          workingLatex: "(x + 5)(x - 5) = x^2 - 25 \\ne x^2 + 25",
          explanation:
            "A common mistake is to write \\( (x+5)(x-5) \\), but expanding that gives \\( x^2 - 25 \\), not \\( x^2 + 25 \\) — the sign of the constant is wrong. So this factorisation does not work.",
        },
        {
          stepNumber: 4,
          description: "Conclude it does not factorise over the reals.",
          workingLatex: "x^2 + 25 \\;\\text{is irreducible over } \\mathbb{R}",
          explanation:
            "A sum of two squares cannot be split into real linear brackets. To factorise \\( x^2 + 25 \\) as \\( (x+p)(x+q) \\) we would need two real numbers \\( p,q \\) with \\( p \\cdot q = +25 \\) and \\( p + q = 0 \\) (no \\( x \\) term); the only way to get \\( p+q=0 \\) is \\( q=-p \\), but then \\( pq = -p^2 \\le 0 \\), never \\( +25 \\). So \\( x^2 + 25 \\) does not factorise over the real numbers.",
        },
      ],
      finalAnswer:
        "It does not factorise over the reals: \\(x^2 + 25\\) is a SUM of two squares, not a difference, so the formula \\(a^2 - b^2 = (a+b)(a-b)\\) cannot be used.",
    },
  },
  {
    id: "ga11-014",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(49 - 16y^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "coefficient squares", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "49 - 16y^2 = 7^2 - (4y)^2",
          explanation:
            "Both parts are perfect squares: \\( 49 = 7^2 \\) and \\( 16y^2 = (4y)^2 \\). The number is being subtracted from, so the larger square is first, giving \\( a^2 - b^2 \\) with \\( a = 7,\\, b = 4y \\).",
        },
        {
          stepNumber: 2,
          description: "Square-root the first part to find a.",
          workingLatex: "\\sqrt{49} = 7 \\quad\\Rightarrow\\quad a = 7",
          explanation:
            "The first square is the plain number \\( 49 = 7^2 \\), so \\( a = 7 \\).",
        },
        {
          stepNumber: 3,
          description: "Square-root the second part to find b.",
          workingLatex: "\\sqrt{16y^2} = \\sqrt{16}\\,\\sqrt{y^2} = 4y \\quad\\Rightarrow\\quad b = 4y",
          explanation:
            "Root the number and the letter separately: \\( \\sqrt{16} = 4 \\) and \\( \\sqrt{y^2} = y \\), giving \\( b = 4y \\). Check: \\( (4y)^2 = 16y^2 \\). Correct.",
        },
        {
          stepNumber: 4,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "7^2 - (4y)^2 = (7 + 4y)(7 - 4y)",
          explanation:
            "Substitute \\( a = 7,\\, b = 4y \\) into \\( (a+b)(a-b) \\) to obtain \\( (7+4y)(7-4y) \\).",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "(7+4y)(7-4y) = 49 - 28y + 28y - 16y^2 = 49 - 16y^2",
          explanation:
            "The middle terms \\( -28y \\) and \\( +28y \\) cancel, leaving \\( 49 - 16y^2 \\), as required.",
        },
      ],
      finalAnswer: "\\((7+4y)(7-4y)\\)",
      canonicalAnswer: "(7+4y)(7-4y)",
    },
  },
  {
    id: "ga11-015",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise \\(100a^2 - 81b^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "two variables", "coefficient squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "100a^2 - 81b^2",
          explanation:
            "Both terms are perfect squares: \\( 100a^2 = (10a)^2 \\) and \\( 81b^2 = (9b)^2 \\). A difference of two squares with two letters and coefficients on each.",
        },
        {
          stepNumber: 2,
          description: "Square-root the first part to find a.",
          workingLatex: "\\sqrt{100a^2} = \\sqrt{100}\\,\\sqrt{a^2} = 10a",
          explanation:
            "Root the number and the letter: \\( \\sqrt{100} = 10 \\) and \\( \\sqrt{a^2} = a \\), so the first root is \\( 10a \\). Check: \\( (10a)^2 = 100a^2 \\).",
        },
        {
          stepNumber: 3,
          description: "Square-root the second part to find b.",
          workingLatex: "\\sqrt{81b^2} = \\sqrt{81}\\,\\sqrt{b^2} = 9b",
          explanation:
            "Similarly \\( \\sqrt{81} = 9 \\) and \\( \\sqrt{b^2} = b \\), so the second root is \\( 9b \\). So \\( 100a^2 - 81b^2 = (10a)^2 - (9b)^2 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "(10a)^2 - (9b)^2 = (10a + 9b)(10a - 9b)",
          explanation:
            "Substituting the roots \\( 10a \\) and \\( 9b \\) into \\( (a+b)(a-b) \\) gives \\( (10a+9b)(10a-9b) \\).",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "(10a+9b)(10a-9b) = 100a^2 - 90ab + 90ab - 81b^2 = 100a^2 - 81b^2",
          explanation:
            "The \\( -90ab \\) and \\( +90ab \\) cancel, returning \\( 100a^2 - 81b^2 \\). Correct.",
        },
      ],
      finalAnswer: "\\((10a+9b)(10a-9b)\\)",
      canonicalAnswer: "(10a+9b)(10a-9b)",
    },
  },
  {
    id: "ga11-016",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x + 5y)(2x - 5y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "expanding", "two variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference-of-squares shape.",
          workingLatex: "(2x + 5y)(2x - 5y)",
          explanation:
            "The brackets are identical except for the sign, \\( (a+b)(a-b) \\), with \\( a = 2x \\) and \\( b = 5y \\). The product will be \\( a^2 - b^2 \\); we expand in full to demonstrate that the cross terms vanish.",
        },
        {
          stepNumber: 2,
          description: "Multiply out every pair of terms.",
          workingLatex: "= 2x \\cdot 2x + 2x \\cdot (-5y) + 5y \\cdot 2x + 5y \\cdot (-5y)",
          explanation:
            "Apply FOIL: each term of the first bracket times each term of the second, giving four products before simplifying.",
        },
        {
          stepNumber: 3,
          description: "Work out each of the four products.",
          workingLatex: "= 4x^2 - 10xy + 10xy - 25y^2",
          explanation:
            "Evaluate each product: \\( 2x \\cdot 2x = 4x^2 \\), \\( 2x \\cdot (-5y) = -10xy \\), \\( 5y \\cdot 2x = +10xy \\), and \\( 5y \\cdot (-5y) = -25y^2 \\). Take care that \\( (2x)^2 = 4x^2 \\), not \\( 2x^2 \\).",
        },
        {
          stepNumber: 4,
          description: "Cancel the cross terms and simplify.",
          workingLatex: "= 4x^2 - 25y^2",
          explanation:
            "The cross terms \\( -10xy \\) and \\( +10xy \\) cancel. We are left with \\( 4x^2 - 25y^2 \\), which is \\( a^2 - b^2 \\) with \\( a = 2x,\\, b = 5y \\) — confirming the difference-of-squares pattern.",
        },
      ],
      finalAnswer: "\\(4x^2 - 25y^2\\)",
      canonicalAnswer: "4x^2-25y^2",
    },
  },
  {
    id: "ga11-017",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Factorise fully \\(3x^2 - 75\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "common factor", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check for a common factor first.",
          workingLatex: "3x^2 - 75 \\quad\\Rightarrow\\quad \\text{both divisible by } 3",
          explanation:
            "Look for a common factor before anything else. Both \\( 3x^2 \\) and \\( 75 \\) are divisible by \\( 3 \\). Note that \\( 3x^2 \\) is not itself a perfect square, so DOTS cannot be applied directly — the \\( 3 \\) has to come out first.",
        },
        {
          stepNumber: 2,
          description: "Take out the common factor of 3.",
          workingLatex: "3x^2 - 75 = 3(x^2 - 25)",
          explanation:
            "Divide each term by \\( 3 \\): \\( 3x^2 \\div 3 = x^2 \\) and \\( 75 \\div 3 = 25 \\). This gives \\( 3(x^2 - 25) \\), and now the bracket is a difference of two squares.",
        },
        {
          stepNumber: 3,
          description: "Identify a and b inside the bracket.",
          workingLatex: "x^2 - 25 = x^2 - 5^2 \\quad\\Rightarrow\\quad a = x,\\; b = 5",
          explanation:
            "Working inside the bracket, \\( \\sqrt{x^2} = x \\) gives \\( a = x \\) and \\( \\sqrt{25} = 5 \\) gives \\( b = 5 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula to the bracket.",
          workingLatex: "3(x^2 - 25) = 3(x + 5)(x - 5)",
          explanation:
            "Factorise the bracket as \\( (x+5)(x-5) \\) and keep the \\( 3 \\) outside. The fully factorised form is \\( 3(x+5)(x-5) \\) — remember to carry the \\( 3 \\) through.",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "3(x+5)(x-5) = 3(x^2 - 25) = 3x^2 - 75",
          explanation:
            "Expanding back gives \\( 3x^2 - 75 \\), the original expression, so the factorisation is complete and correct.",
        },
      ],
      finalAnswer: "\\(3(x+5)(x-5)\\)",
      canonicalAnswer: "3(x+5)(x-5)",
    },
  },
  {
    id: "ga11-018",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Use the difference of two squares to evaluate \\(85^2 - 15^2\\) without a calculator.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "numerical evaluation", "DOTS"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "85^2 - 15^2 \\quad\\Rightarrow\\quad a = 85,\\; b = 15",
          explanation:
            "This is \\( a^2 - b^2 \\) with \\( a = 85 \\) and \\( b = 15 \\). Squaring \\( 85 \\) and \\( 15 \\) by hand is slow, so the factorised form is much faster.",
        },
        {
          stepNumber: 2,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "85^2 - 15^2 = (85 + 15)(85 - 15)",
          explanation:
            "Substitute \\( a = 85,\\, b = 15 \\) into \\( (a+b)(a-b) \\) to replace the two squares with a sum times a difference.",
        },
        {
          stepNumber: 3,
          description: "Compute the sum.",
          workingLatex: "85 + 15 = 100",
          explanation:
            "The first bracket is \\( 85 + 15 = 100 \\), a convenient round number.",
        },
        {
          stepNumber: 4,
          description: "Compute the difference.",
          workingLatex: "85 - 15 = 70",
          explanation:
            "The second bracket is \\( 85 - 15 = 70 \\). Both brackets are now easy whole numbers.",
        },
        {
          stepNumber: 5,
          description: "Multiply the two results.",
          workingLatex: "100 \\cdot 70 = 7000",
          explanation:
            "So \\( 85^2 - 15^2 = 100 \\cdot 70 = 7000 \\). (Direct check: \\( 7225 - 225 = 7000 \\).)",
        },
      ],
      finalAnswer: "\\(7000\\)",
      canonicalAnswer: "7000",
    },
  },

  // ===================== CHALLENGE (019–030) =====================
  {
    id: "ga11-019",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(x^4 - 16\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "repeated DOTS", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite the fourth power as a square.",
          workingLatex: "x^4 - 16 = (x^2)^2 - 4^2",
          explanation:
            "Even though the power is \\( 4 \\), this is still a difference of two squares once you spot that \\( x^4 = (x^2)^2 \\) (using the index rule \\( (x^2)^2 = x^{2\\cdot 2} = x^4 \\)) and \\( 16 = 4^2 \\). So in the formula \\( a = x^2 \\) and \\( b = 4 \\). Any even power can be treated this way.",
        },
        {
          stepNumber: 2,
          description: "Apply DOTS once.",
          workingLatex: "(x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4)",
          explanation:
            "Substituting \\( a = x^2,\\, b = 4 \\) into \\( (a+b)(a-b) \\) gives \\( (x^2 + 4)(x^2 - 4) \\). But 'factorise fully' warns us to check each bracket — we are not finished if any factor itself factorises.",
        },
        {
          stepNumber: 3,
          description: "Test the sum-of-squares bracket.",
          workingLatex: "x^2 + 4 \\;\\text{is a sum of squares — does not factorise}",
          explanation:
            "The first bracket \\( x^2 + 4 \\) has a PLUS sign, so it is a sum of squares and cannot be factorised over the real numbers. It stays as it is.",
        },
        {
          stepNumber: 4,
          description: "Factorise the remaining difference of squares.",
          workingLatex: "x^2 - 4 = x^2 - 2^2 = (x + 2)(x - 2)",
          explanation:
            "The second bracket \\( x^2 - 4 \\) is itself a difference of two squares with \\( a = x,\\, b = 2 \\), so apply DOTS again to get \\( (x+2)(x-2) \\).",
        },
        {
          stepNumber: 5,
          description: "Combine for the full factorisation.",
          workingLatex: "x^4 - 16 = (x^2 + 4)(x + 2)(x - 2)",
          explanation:
            "Putting the pieces together, \\( x^4 - 16 = (x^2 + 4)(x+2)(x-2) \\). The \\( x^2 + 4 \\) cannot be broken down further over the reals, so this is fully factorised.",
        },
      ],
      finalAnswer: "\\((x^2 + 4)(x + 2)(x - 2)\\)",
      canonicalAnswer: "(x^2+4)(x+2)(x-2)",
    },
  },
  {
    id: "ga11-020",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(16x^4 - 81y^4\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "repeated DOTS", "two variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite the fourth powers as squares.",
          workingLatex: "16x^4 - 81y^4 = (4x^2)^2 - (9y^2)^2",
          explanation:
            "Both terms are fourth powers, but each can be written as a square: \\( 16x^4 = (4x^2)^2 \\) and \\( 81y^4 = (9y^2)^2 \\). So in the formula \\( a = 4x^2 \\) and \\( b = 9y^2 \\).",
        },
        {
          stepNumber: 2,
          description: "Apply DOTS once.",
          workingLatex: "(4x^2)^2 - (9y^2)^2 = (4x^2 + 9y^2)(4x^2 - 9y^2)",
          explanation:
            "Substitute \\( a = 4x^2,\\, b = 9y^2 \\) into \\( (a+b)(a-b) \\). Now inspect each bracket for further factorisation, since the question says 'fully'.",
        },
        {
          stepNumber: 3,
          description: "Test the sum-of-squares bracket.",
          workingLatex: "4x^2 + 9y^2 \\;\\text{is a sum of squares — does not factorise}",
          explanation:
            "The first bracket \\( 4x^2 + 9y^2 \\) has a plus sign, so it is a sum of squares and does not factorise over the reals. It stays as it is. The classic mistake on 'factorise fully' fourth-power questions is to stop after one application of DOTS; always re-inspect both brackets.",
        },
        {
          stepNumber: 4,
          description: "Factorise the remaining difference of squares.",
          workingLatex: "4x^2 - 9y^2 = (2x)^2 - (3y)^2 = (2x + 3y)(2x - 3y)",
          explanation:
            "The second bracket \\( 4x^2 - 9y^2 \\) is another difference of two squares with \\( a = 2x,\\, b = 3y \\). Apply DOTS again to get \\( (2x+3y)(2x-3y) \\).",
        },
        {
          stepNumber: 5,
          description: "Combine for the full factorisation.",
          workingLatex: "16x^4 - 81y^4 = (4x^2 + 9y^2)(2x + 3y)(2x - 3y)",
          explanation:
            "The fully factorised form is \\( (4x^2 + 9y^2)(2x+3y)(2x-3y) \\); the sum-of-squares factor cannot be reduced over the reals.",
        },
      ],
      finalAnswer: "\\((4x^2 + 9y^2)(2x + 3y)(2x - 3y)\\)",
      canonicalAnswer: "(4x^2+9y^2)(2x+3y)(2x-3y)",
    },
  },
  {
    id: "ga11-021",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(50x^2 - 8\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "common factor", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check for a common factor first.",
          workingLatex: "50x^2 - 8 \\quad\\Rightarrow\\quad \\text{both divisible by } 2",
          explanation:
            "Neither \\( 50x^2 \\) nor \\( 8 \\) is a perfect square (\\( 50 \\) and \\( 8 \\) are not square numbers), so DOTS cannot be applied yet. Look for a common factor instead: \\( 50 \\) and \\( 8 \\) are both divisible by \\( 2 \\).",
        },
        {
          stepNumber: 2,
          description: "Take out the common factor of 2.",
          workingLatex: "50x^2 - 8 = 2(25x^2 - 4)",
          explanation:
            "Divide each term by \\( 2 \\): \\( 50x^2 \\div 2 = 25x^2 \\) and \\( 8 \\div 2 = 4 \\). Now the bracket \\( 25x^2 - 4 \\) is a difference of two squares, since \\( 25x^2 = (5x)^2 \\) and \\( 4 = 2^2 \\).",
        },
        {
          stepNumber: 3,
          description: "Identify a and b inside the bracket.",
          workingLatex: "25x^2 - 4 = (5x)^2 - 2^2 \\quad\\Rightarrow\\quad a = 5x,\\; b = 2",
          explanation:
            "Square-root each part of the bracket: \\( \\sqrt{25x^2} = 5x \\) so \\( a = 5x \\), and \\( \\sqrt{4} = 2 \\) so \\( b = 2 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula to the bracket.",
          workingLatex: "2(25x^2 - 4) = 2(5x + 2)(5x - 2)",
          explanation:
            "Factorise \\( 25x^2 - 4 = (5x+2)(5x-2) \\), keeping the common factor \\( 2 \\) at the front. The full factorisation is \\( 2(5x+2)(5x-2) \\).",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "2(5x+2)(5x-2) = 2(25x^2 - 4) = 50x^2 - 8",
          explanation:
            "Expanding back gives \\( 50x^2 - 8 \\), confirming the factorisation is complete and correct.",
        },
      ],
      finalAnswer: "\\(2(5x+2)(5x-2)\\)",
      canonicalAnswer: "2(5x+2)(5x-2)",
    },
  },
  {
    id: "ga11-022",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Use the difference of two squares to show that \\(1000^2 - 999^2\\) equals the sum \\(1000 + 999\\), and hence state its value.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "numerical evaluation", "DOTS", "proof"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "1000^2 - 999^2 \\quad\\Rightarrow\\quad a = 1000,\\; b = 999",
          explanation:
            "This is \\( a^2 - b^2 \\) with \\( a = 1000 \\) and \\( b = 999 \\). The two numbers are consecutive, differing by exactly \\( 1 \\), which is the key feature the question is steering us towards.",
        },
        {
          stepNumber: 2,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "1000^2 - 999^2 = (1000 + 999)(1000 - 999)",
          explanation:
            "Substitute \\( a = 1000,\\, b = 999 \\) into \\( (a+b)(a-b) \\), turning the difference of squares into a product of the sum and the difference.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the difference bracket.",
          workingLatex: "1000 - 999 = 1",
          explanation:
            "Because the numbers are consecutive, the second bracket is \\( 1000 - 999 = 1 \\). This is exactly why consecutive squares behave so simply.",
        },
        {
          stepNumber: 4,
          description: "Show the product equals the sum.",
          workingLatex: "(1000 + 999) \\cdot 1 = 1000 + 999",
          explanation:
            "Multiplying the first bracket by \\( 1 \\) leaves it unchanged, so the result is exactly the sum \\( 1000 + 999 \\) — which is what the question asked us to show. (In general, for consecutive integers, \\( n^2 - (n-1)^2 = n + (n-1) \\).)",
        },
        {
          stepNumber: 5,
          description: "State the value.",
          workingLatex: "1000 + 999 = 1999",
          explanation:
            "Therefore \\( 1000^2 - 999^2 = 1999 \\). This is far quicker than computing \\( 1000000 - 998001 = 1999 \\) directly.",
        },
      ],
      finalAnswer: "\\(1000^2 - 999^2 = 1000 + 999 = 1999\\)",
      canonicalAnswer: "1999",
    },
  },
  {
    id: "ga11-023",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\((x + 3)^2 - 16\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "bracket as a square", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "(x + 3)^2 - 16 = (x + 3)^2 - 4^2",
          explanation:
            "The first part is already a square, \\( (x+3)^2 \\), and \\( 16 = 4^2 \\). So this is \\( a^2 - b^2 \\) where \\( a = x + 3 \\) (a whole bracket plays the role of \\( a \\)) and \\( b = 4 \\). Resist the urge to expand \\( (x+3)^2 \\) first — keeping it as a bracket is much quicker.",
        },
        {
          stepNumber: 2,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "(x + 3)^2 - 4^2 = \\big[(x + 3) + 4\\big]\\big[(x + 3) - 4\\big]",
          explanation:
            "Substitute \\( a = x + 3,\\, b = 4 \\) into \\( (a+b)(a-b) \\). Keep \\( x + 3 \\) inside its own brackets while substituting, so the \\( +4 \\) and \\( -4 \\) attach cleanly.",
        },
        {
          stepNumber: 3,
          description: "Simplify the first bracket.",
          workingLatex: "(x + 3) + 4 = x + 7",
          explanation:
            "Add the constants in the first bracket: \\( 3 + 4 = 7 \\), giving \\( x + 7 \\).",
        },
        {
          stepNumber: 4,
          description: "Simplify the second bracket.",
          workingLatex: "(x + 3) - 4 = x - 1",
          explanation:
            "Combine the constants in the second bracket: \\( 3 - 4 = -1 \\), giving \\( x - 1 \\). So the factorisation is \\( (x+7)(x-1) \\).",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding both sides.",
          workingLatex: "(x + 7)(x - 1) = x^2 + 6x - 7 = (x+3)^2 - 16",
          explanation:
            "Expanding the answer gives \\( x^2 + 6x - 7 \\). Check against the original: \\( (x+3)^2 - 16 = x^2 + 6x + 9 - 16 = x^2 + 6x - 7 \\). They match, so the factorisation is correct.",
        },
      ],
      finalAnswer: "\\((x + 7)(x - 1)\\)",
      canonicalAnswer: "(x+7)(x-1)",
    },
  },
  {
    id: "ga11-024",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Work out the exact value of \\(\\dfrac{124^2 - 76^2}{124 - 76}\\) without a calculator.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "numerical evaluation", "DOTS", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the numerator using DOTS.",
          workingLatex: "124^2 - 76^2 = (124 + 76)(124 - 76)",
          explanation:
            "The numerator is a difference of two squares with \\( a = 124,\\, b = 76 \\), so it equals \\( (124+76)(124-76) \\). Factorising before simplifying is the key idea — don't reach for the calculator-style squaring.",
        },
        {
          stepNumber: 2,
          description: "Write the whole fraction with the factorised numerator.",
          workingLatex: "\\frac{124^2 - 76^2}{124 - 76} = \\frac{(124 + 76)(124 - 76)}{124 - 76}",
          explanation:
            "Put the factorised numerator over the original denominator. Notice that \\( 124 - 76 \\) now appears as one of the factors on top as well as on the bottom, which sets up a cancellation.",
        },
        {
          stepNumber: 3,
          description: "Cancel the common factor.",
          workingLatex: "= \\frac{(124 + 76)\\,\\cancel{(124 - 76)}}{\\cancel{124 - 76}} = 124 + 76",
          explanation:
            "Since \\( 124 - 76 = 48 \\ne 0 \\), we may cancel the matching factor top and bottom. Cancelling a whole factor like this is only valid because it is non-zero — dividing by zero is never allowed. What remains is simply \\( 124 + 76 \\).",
        },
        {
          stepNumber: 4,
          description: "Add to get the value.",
          workingLatex: "124 + 76 = 200",
          explanation:
            "Therefore the expression equals \\( 200 \\). DOTS turned an ugly fraction into a single easy sum.",
        },
      ],
      finalAnswer: "\\(200\\)",
      canonicalAnswer: "200",
    },
  },
  {
    id: "ga11-025",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\(x^3 - 9x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "common factor", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the common factor of x.",
          workingLatex: "x^3 = x \\cdot x^2,\\qquad 9x = x \\cdot 9",
          explanation:
            "Before DOTS, look for a common factor. Both terms contain at least one \\( x \\): \\( x^3 = x \\cdot x^2 \\) and \\( 9x = x \\cdot 9 \\). Note that \\( x^3 \\) is not a square, so we cannot apply DOTS to the original directly.",
        },
        {
          stepNumber: 2,
          description: "Take out the common factor of x.",
          workingLatex: "x^3 - 9x = x(x^2 - 9)",
          explanation:
            "Factor the \\( x \\) out to get \\( x(x^2 - 9) \\). The bracket \\( x^2 - 9 \\) is now a difference of two squares.",
        },
        {
          stepNumber: 3,
          description: "Identify a and b inside the bracket.",
          workingLatex: "x^2 - 9 = x^2 - 3^2 \\quad\\Rightarrow\\quad a = x,\\; b = 3",
          explanation:
            "Square-rooting inside the bracket, \\( \\sqrt{x^2} = x \\) gives \\( a = x \\) and \\( \\sqrt{9} = 3 \\) gives \\( b = 3 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula to the bracket.",
          workingLatex: "x(x^2 - 9) = x(x + 3)(x - 3)",
          explanation:
            "Factorise \\( x^2 - 9 = (x+3)(x-3) \\), keeping the \\( x \\) outside. Fully factorised: \\( x(x+3)(x-3) \\) — a product of three factors.",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "x(x + 3)(x - 3) = x(x^2 - 9) = x^3 - 9x",
          explanation:
            "Expanding back recovers \\( x^3 - 9x \\), so the factorisation is complete and correct.",
        },
      ],
      finalAnswer: "\\(x(x + 3)(x - 3)\\)",
      canonicalAnswer: "x(x+3)(x-3)",
    },
  },
  {
    id: "ga11-026",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Simplify \\(\\dfrac{x^2 - 49}{x + 7}\\), stating any value of \\(x\\) for which it is not defined.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "algebraic fractions", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise the numerator using DOTS.",
          workingLatex: "x^2 - 49 = x^2 - 7^2 = (x + 7)(x - 7)",
          explanation:
            "The numerator is a difference of two squares with \\( a = x,\\, b = 7 \\), giving \\( (x+7)(x-7) \\). Factorising is what makes cancelling possible.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the fraction.",
          workingLatex: "\\frac{x^2 - 49}{x + 7} = \\frac{(x + 7)(x - 7)}{x + 7}",
          explanation:
            "Replace the numerator with its factorised form. The factor \\( x + 7 \\) now appears in both the numerator and the denominator, so it can be cancelled.",
        },
        {
          stepNumber: 3,
          description: "State the restriction on x.",
          workingLatex: "x + 7 \\ne 0 \\;\\Rightarrow\\; x \\ne -7",
          explanation:
            "We may only cancel \\( x + 7 \\) when it is non-zero, and the original fraction is undefined wherever the denominator is zero. So we must state that the expression is undefined at \\( x = -7 \\) (division by zero).",
        },
        {
          stepNumber: 4,
          description: "Cancel to simplify.",
          workingLatex: "\\frac{(x + 7)(x - 7)}{x + 7} = x - 7",
          explanation:
            "For all \\( x \\ne -7 \\), the common factor \\( x + 7 \\) cancels top and bottom, leaving \\( x - 7 \\).",
        },
      ],
      finalAnswer: "\\(x - 7\\) (undefined at \\(x = -7\\))",
      canonicalAnswer: "x-7",
    },
  },
  {
    id: "ga11-027",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise \\(\\dfrac{1}{4}x^2 - 9\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "fractional coefficient", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "\\frac{1}{4}x^2 - 9 = \\left(\\frac{1}{2}x\\right)^2 - 3^2",
          explanation:
            "A fractional coefficient does not stop DOTS working, as long as each part is a perfect square. Here \\( \\frac{1}{4}x^2 = \\left(\\frac{1}{2}x\\right)^2 \\) (because \\( \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2 \\)) and \\( 9 = 3^2 \\).",
        },
        {
          stepNumber: 2,
          description: "Square-root the first part to find a.",
          workingLatex: "\\sqrt{\\frac{1}{4}x^2} = \\sqrt{\\frac{1}{4}}\\,\\sqrt{x^2} = \\frac{1}{2}x",
          explanation:
            "Root the fraction and the letter separately: \\( \\sqrt{\\frac{1}{4}} = \\frac{1}{2} \\) and \\( \\sqrt{x^2} = x \\), so \\( a = \\frac{1}{2}x \\). Check: \\( \\left(\\frac{1}{2}x\\right)^2 = \\frac{1}{4}x^2 \\). Correct.",
        },
        {
          stepNumber: 3,
          description: "Square-root the second part to find b.",
          workingLatex: "\\sqrt{9} = 3 \\quad\\Rightarrow\\quad b = 3",
          explanation:
            "The constant is the ordinary square \\( 9 = 3^2 \\), so \\( b = 3 \\). We now have \\( \\frac{1}{4}x^2 - 9 = \\left(\\frac{1}{2}x\\right)^2 - 3^2 \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "\\left(\\frac{1}{2}x\\right)^2 - 3^2 = \\left(\\frac{1}{2}x + 3\\right)\\left(\\frac{1}{2}x - 3\\right)",
          explanation:
            "Substitute \\( a = \\frac{1}{2}x,\\, b = 3 \\) into \\( (a+b)(a-b) \\) to get \\( \\left(\\frac{1}{2}x + 3\\right)\\left(\\frac{1}{2}x - 3\\right) \\).",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding.",
          workingLatex: "\\left(\\frac{1}{2}x + 3\\right)\\left(\\frac{1}{2}x - 3\\right) = \\frac{1}{4}x^2 - \\frac{3}{2}x + \\frac{3}{2}x - 9 = \\frac{1}{4}x^2 - 9",
          explanation:
            "The middle terms \\( -\\frac{3}{2}x \\) and \\( +\\frac{3}{2}x \\) cancel, leaving \\( \\frac{1}{4}x^2 - 9 \\), as required.",
        },
      ],
      finalAnswer: "\\(\\left(\\frac{1}{2}x + 3\\right)\\left(\\frac{1}{2}x - 3\\right)\\)",
      canonicalAnswer: "(x/2+3)(x/2-3)",
    },
  },
  {
    id: "ga11-028",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The area of a square of side \\(a\\,\\text{cm}\\) is reduced by cutting away a smaller square of side \\(b\\,\\text{cm}\\) from a corner. Given \\(a = 6.5\\) and \\(b = 3.5\\), use the difference of two squares to find the remaining area in \\(\\text{cm}^2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "numerical evaluation", "DOTS", "area"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the remaining area as a difference of squares.",
          workingLatex: "\\text{Area} = a^2 - b^2 = 6.5^2 - 3.5^2",
          explanation:
            "The large square has area \\( a^2 \\) and the cut-away square has area \\( b^2 \\), so the remaining area is \\( a^2 - b^2 \\). Substituting the given values gives \\( 6.5^2 - 3.5^2 \\) — a difference of two squares.",
        },
        {
          stepNumber: 2,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "6.5^2 - 3.5^2 = (6.5 + 3.5)(6.5 - 3.5)",
          explanation:
            "Using DOTS avoids squaring the decimals, which is fiddly by hand. Substitute \\( a = 6.5,\\, b = 3.5 \\) into \\( (a+b)(a-b) \\).",
        },
        {
          stepNumber: 3,
          description: "Compute the sum.",
          workingLatex: "6.5 + 3.5 = 10",
          explanation:
            "The first bracket is \\( 6.5 + 3.5 = 10 \\) — a whole number, which is exactly why DOTS is so much neater here than squaring the decimals.",
        },
        {
          stepNumber: 4,
          description: "Compute the difference.",
          workingLatex: "6.5 - 3.5 = 3",
          explanation:
            "The second bracket is \\( 6.5 - 3.5 = 3 \\). Both decimal squares have now become a pair of simple whole numbers.",
        },
        {
          stepNumber: 5,
          description: "Multiply for the remaining area.",
          workingLatex: "10 \\cdot 3 = 30",
          explanation:
            "So the remaining area is \\( 10 \\cdot 3 = 30\\ \\text{cm}^2 \\). (Direct check: \\( 6.5^2 - 3.5^2 = 42.25 - 12.25 = 30 \\), which agrees.) Remember the units: it is an area, so \\( \\text{cm}^2 \\).",
        },
      ],
      finalAnswer: "\\(30\\ \\text{cm}^2\\)",
      canonicalAnswer: "30",
    },
  },
  {
    id: "ga11-029",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Factorise fully \\((2x + 1)^2 - (x - 4)^2\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "bracket as a square", "factorising"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the difference of two squares.",
          workingLatex: "(2x + 1)^2 - (x - 4)^2 \\quad\\Rightarrow\\quad a = 2x + 1,\\; b = x - 4",
          explanation:
            "Both parts are already squares of brackets, so this is \\( a^2 - b^2 \\) with \\( a = 2x + 1 \\) and \\( b = x - 4 \\). We can apply DOTS directly to the whole brackets rather than expanding the squares first.",
        },
        {
          stepNumber: 2,
          description: "Apply the formula a^2 - b^2 = (a+b)(a-b).",
          workingLatex: "= \\big[(2x + 1) + (x - 4)\\big]\\big[(2x + 1) - (x - 4)\\big]",
          explanation:
            "Substitute \\( a = 2x+1,\\, b = x-4 \\) into \\( (a+b)(a-b) \\). Keep each expression bracketed, especially for the subtraction, so the signs are handled carefully.",
        },
        {
          stepNumber: 3,
          description: "Simplify the first bracket (the sum).",
          workingLatex: "(2x + 1) + (x - 4) = 3x - 3",
          explanation:
            "Add the two brackets: \\( 2x + x = 3x \\) and \\( 1 + (-4) = -3 \\), giving \\( 3x - 3 \\).",
        },
        {
          stepNumber: 4,
          description: "Simplify the second bracket (the difference).",
          workingLatex: "(2x + 1) - (x - 4) = 2x + 1 - x + 4 = x + 5",
          explanation:
            "Subtract carefully: the minus sign flips BOTH terms of the second bracket, so \\( -(x - 4) = -x + 4 \\). Then \\( 2x - x = x \\) and \\( 1 + 4 = 5 \\), giving \\( x + 5 \\). The sign flip on the \\( -4 \\) is the classic slip to watch for.",
        },
        {
          stepNumber: 5,
          description: "Assemble the product of the two brackets.",
          workingLatex: "(2x + 1)^2 - (x - 4)^2 = (3x - 3)(x + 5)",
          explanation:
            "Put the simplified sum and difference together as the two factors. This is already a valid factorisation, but the instruction 'factorise fully' warns us to check whether either bracket can be broken down further.",
        },
        {
          stepNumber: 6,
          description: "Factor out the common 3.",
          workingLatex: "(3x - 3)(x + 5) = 3(x - 1)(x + 5)",
          explanation:
            "The first bracket has a common factor of \\( 3 \\): \\( 3x - 3 = 3(x - 1) \\). 'Factorise fully' means we must pull this out, so the answer is \\( 3(x-1)(x+5) \\). Leaving it as \\( (3x-3)(x+5) \\) would lose the final mark.",
        },
        {
          stepNumber: 7,
          description: "Verify by expanding both squares.",
          workingLatex: "(2x+1)^2 - (x-4)^2 = (4x^2 + 4x + 1) - (x^2 - 8x + 16) = 3x^2 + 12x - 15 = 3(x-1)(x+5)",
          explanation:
            "As a check, expand each square in the original and subtract: the minus sign flips every term of the second bracket, giving \\( 3x^2 + 12x - 15 \\). Factoring out \\( 3 \\) leaves \\( x^2 + 4x - 5 = (x-1)(x+5) \\), which matches our answer.",
        },
      ],
      finalAnswer: "\\(3(x - 1)(x + 5)\\)",
      canonicalAnswer: "3(x-1)(x+5)",
    },
  },
  {
    id: "ga11-030",
    topicRef: "ga11",
    topicTitle: "Difference of two squares",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Use the difference of two squares to evaluate \\(\\dfrac{17^2 - 13^2}{8^2 - 6^2}\\) without a calculator, giving your answer as a fraction in its simplest form.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["difference of two squares", "numerical evaluation", "DOTS", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply DOTS to the numerator.",
          workingLatex: "17^2 - 13^2 = (17 + 13)(17 - 13)",
          explanation:
            "The numerator is a difference of two squares with \\( a = 17,\\, b = 13 \\), so it factorises as \\( (17+13)(17-13) \\). Factorising first lets us evaluate it with two easy mental sums rather than squaring \\( 17 \\) and \\( 13 \\) by hand.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the numerator.",
          workingLatex: "(17 + 13)(17 - 13) = 30 \\cdot 4 = 120",
          explanation:
            "The sum is \\( 17 + 13 = 30 \\) and the difference is \\( 17 - 13 = 4 \\), so the numerator equals \\( 30 \\cdot 4 = 120 \\).",
        },
        {
          stepNumber: 3,
          description: "Apply DOTS to the denominator.",
          workingLatex: "8^2 - 6^2 = (8 + 6)(8 - 6)",
          explanation:
            "The denominator is also a difference of two squares, with \\( a = 8,\\, b = 6 \\), giving \\( (8+6)(8-6) \\). The same trick applies top and bottom.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the denominator.",
          workingLatex: "(8 + 6)(8 - 6) = 14 \\cdot 2 = 28",
          explanation:
            "The sum is \\( 8 + 6 = 14 \\) and the difference is \\( 8 - 6 = 2 \\), so the denominator equals \\( 14 \\cdot 2 = 28 \\).",
        },
        {
          stepNumber: 5,
          description: "Form the fraction.",
          workingLatex: "\\frac{17^2 - 13^2}{8^2 - 6^2} = \\frac{120}{28}",
          explanation:
            "Both squaring jobs have been replaced by two quick multiplications, giving the fraction \\( \\frac{120}{28} \\). The question asks for simplest form, so this is not yet the final answer.",
        },
        {
          stepNumber: 6,
          description: "Find the highest common factor.",
          workingLatex: "\\gcd(120, 28) = 4",
          explanation:
            "To simplify, find the highest common factor of \\( 120 \\) and \\( 28 \\). Both are divisible by \\( 4 \\) (and by nothing larger in common), so the HCF is \\( 4 \\). A common slip is to cancel by \\( 2 \\) once and stop too early at \\( \\frac{60}{14} \\), which is not yet fully simplified.",
        },
        {
          stepNumber: 7,
          description: "Divide top and bottom by 4.",
          workingLatex: "\\frac{120}{28} = \\frac{120 \\div 4}{28 \\div 4} = \\frac{30}{7}",
          explanation:
            "Dividing top and bottom by \\( 4 \\) gives \\( \\frac{30}{7} \\). This cannot be simplified further, since \\( 30 \\) and \\( 7 \\) share no common factor (\\( 7 \\) is prime and does not divide \\( 30 \\)).",
        },
      ],
      finalAnswer: "\\(\\dfrac{30}{7}\\)",
      canonicalAnswer: "30/7",
    },
  },
];
