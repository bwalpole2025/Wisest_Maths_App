/**
 * Topic: Collecting like terms
 * Ref: ga04  (DfE A4)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: simplifying expressions by collecting (adding/subtracting) like
 *   terms. Clusters covered across the bank:
 *     (1) one variable, e.g. 5x + 3x, 7a - 2a;
 *     (2) several variables, e.g. 3x + 2y + 4x - y;
 *     (3) powers treated as UNLIKE terms, e.g. x^2 vs x, 2a^2 + 3a + a^2;
 *     (4) negative coefficients and subtraction (sign care);
 *     (5) two-letter (product) terms such as xy, 3ab (and xy = yx);
 *     (6) fractional and decimal coefficients.
 *   This bank is collecting like terms ONLY — there is NO expanding of
 *   brackets here (that lives in a separate bank).
 *
 * Difficulty split (30 total): 4F / 14S / 12C
 *   - Foundation: ga04-001 .. ga04-004  (4)   2 marks, examStyle:false
 *   - Standard:   ga04-005 .. ga04-018  (14)  3 marks, examStyle:true
 *   - Challenge:  ga04-019 .. ga04-030  (12)  4+ marks, examStyle:true
 * Id range: ga04-001 .. ga04-030.
 *
 * LaTeX note: questionText (prose) maths is wrapped in \\( ... \\) and uses
 *   \\dfrac for display fractions in the stem; workingLatex is RAW LaTeX (NOT
 *   wrapped in \\(...\\) or $...$) and uses \\frac (never \\tfrac) for
 *   fractions and \\cdot (never \\times, never *) for multiplication, per hard
 *   project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga04-001",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(5x + 3x\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["collecting like terms", "one variable", "addition of terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check the terms are like terms.",
          workingLatex: "5x \\text{ and } 3x \\text{ are both multiples of } x",
          explanation:
            "Like terms contain exactly the same letter raised to the same power. Both 5x and 3x are 'a number times x', so they share the identical letter part x and may be combined into a single term.",
        },
        {
          stepNumber: 2,
          description: "Pick out the coefficients.",
          workingLatex: "5x = 5 \\cdot x, \\qquad 3x = 3 \\cdot x",
          explanation:
            "The coefficient is the number multiplying the letter. Here they are 5 and 3. When we collect like terms it is only these numbers that get combined; the x is just carried along.",
        },
        {
          stepNumber: 3,
          description: "Factor out the common letter x.",
          workingLatex: "5x + 3x = (5 + 3)x",
          explanation:
            "Both terms are a number multiplied by x, so the x is a common factor we can pull outside a bracket. This makes it crystal clear that it is just the two numbers 5 and 3 that get added — the x is along for the ride.",
        },
        {
          stepNumber: 4,
          description: "Add the coefficients, keep the letter.",
          workingLatex: "(5 + 3)x = 8x",
          explanation:
            "Think of 5 lots of x plus 3 lots of x, which is 8 lots of x: 5 + 3 = 8, so the answer is 8x. The letter x itself never changes — a common slip is to also 'add the x's' and write 8x^2, but collecting like terms only ever touches the coefficients.",
        },
      ],
      finalAnswer: "\\(8x\\)",
      canonicalAnswer: "8x",
    },
  },
  {
    id: "ga04-002",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(7a - 2a\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["collecting like terms", "one variable", "subtraction of terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the like terms.",
          workingLatex: "7a \\text{ and } 2a \\text{ are both multiples of } a",
          explanation:
            "Both terms are a number multiplied by the same letter a, so they are like terms with identical letter part a and can be combined into one term.",
        },
        {
          stepNumber: 2,
          description: "Read off the coefficients.",
          workingLatex: "7a = 7 \\cdot a, \\qquad 2a = 2 \\cdot a",
          explanation:
            "The coefficients are 7 and 2. The operation between the terms is a subtraction, so we will subtract these two numbers while keeping the letter a.",
        },
        {
          stepNumber: 3,
          description: "Factor out the common letter a.",
          workingLatex: "7a - 2a = (7 - 2)a",
          explanation:
            "The a is a common factor of both terms, so we can write it outside a bracket. This shows the subtraction happens only between the two numbers; the letter is untouched.",
        },
        {
          stepNumber: 4,
          description: "Subtract the coefficients, keep the letter.",
          workingLatex: "(7 - 2)a = 5a",
          explanation:
            "Start with 7 lots of a and take away 2 lots of a, leaving 5 lots of a: 7 - 2 = 5. The a stays exactly as it is — don't be tempted to do anything to the letter itself.",
        },
      ],
      finalAnswer: "\\(5a\\)",
      canonicalAnswer: "5a",
    },
  },
  {
    id: "ga04-003",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(3x + 2y + 4x + 5y\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["collecting like terms", "several variables", "addition of terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the two different letters.",
          workingLatex: "x\\text{-terms: } 3x, 4x \\qquad y\\text{-terms: } 2y, 5y",
          explanation:
            "There are two kinds of term here: those in x and those in y. x and y are unlike, so an x-term can never combine with a y-term. Sorting them first prevents mixing.",
        },
        {
          stepNumber: 2,
          description: "Group the like terms by letter.",
          workingLatex: "(3x + 4x) + (2y + 5y)",
          explanation:
            "Gather each family into its own bracket: the x-terms together and the y-terms together. Because every term here is added, the rearrangement is straightforward.",
        },
        {
          stepNumber: 3,
          description: "Add each group of coefficients.",
          workingLatex: "3x + 4x = 7x, \\qquad 2y + 5y = 7y",
          explanation:
            "Within each group, add the coefficients and keep the letter: 3 + 4 = 7 gives 7x, and 2 + 5 = 7 gives 7y. The two groups stay separate because x and y are unlike — a common slip is to combine everything into one term like 14xy, which is wrong.",
        },
        {
          stepNumber: 4,
          description: "Write the simplified expression.",
          workingLatex: "7x + 7y",
          explanation:
            "Put the two combined terms back together. There is nothing further to merge — 7x and 7y are unlike — so this is fully simplified.",
        },
      ],
      finalAnswer: "\\(7x + 7y\\)",
      canonicalAnswer: "7x+7y",
    },
  },
  {
    id: "ga04-004",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(a^2 + 3a + 2a^2 + 4a\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "powers as unlike terms",
      "addition of terms",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise that a^2 and a are unlike.",
          workingLatex: "a^2 = a \\cdot a \\quad \\text{is different from} \\quad a",
          explanation:
            "a^2 means a multiplied by itself, whereas a is just a. They are raised to different powers, so they are UNLIKE terms and must be collected separately. This is the key idea this question tests.",
        },
        {
          stepNumber: 2,
          description: "Separate the a^2 terms from the a terms.",
          workingLatex: "(a^2 + 2a^2) + (3a + 4a)",
          explanation:
            "Put the a-squared terms in one bracket and the first-power a-terms in another. The squared terms are collected only with other squared terms.",
        },
        {
          stepNumber: 3,
          description: "Combine the a^2 terms.",
          workingLatex: "a^2 + 2a^2 = 1a^2 + 2a^2 = 3a^2",
          explanation:
            "The leading a^2 has an unwritten coefficient of 1, so it is really 1a^2. Then 1 + 2 = 3 gives 3a^2. Forgetting that hidden 1 is a common slip.",
        },
        {
          stepNumber: 4,
          description: "Combine the a terms.",
          workingLatex: "3a + 4a = 7a",
          explanation:
            "Add the coefficients of the first-power terms: 3 + 4 = 7, giving 7a.",
        },
        {
          stepNumber: 5,
          description: "Write the answer.",
          workingLatex: "3a^2 + 7a",
          explanation:
            "Bring the two results together. 3a^2 and 7a cannot be merged because they are unlike, so the expression is fully simplified. By convention the higher power is written first.",
        },
      ],
      finalAnswer: "\\(3a^2 + 7a\\)",
      canonicalAnswer: "3a^2+7a",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga04-005",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(3x + 2y + 4x - y\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "several variables",
      "negative coefficients",
      "subtraction of terms",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the term families.",
          workingLatex:
            "x\\text{-terms: } 3x, +4x \\qquad y\\text{-terms: } +2y, -y",
          explanation:
            "List the terms by letter, carrying each sign with the term it belongs to. The minus sign in front of the y belongs to that y-term, so it is -y, not +y.",
        },
        {
          stepNumber: 2,
          description: "Reorder so like terms are adjacent.",
          workingLatex: "3x + 4x + 2y - y",
          explanation:
            "We may rearrange terms freely because addition is commutative — order doesn't change the value — provided each term keeps its own sign as it moves.",
        },
        {
          stepNumber: 3,
          description: "Combine the x-terms.",
          workingLatex: "3x + 4x = 7x",
          explanation:
            "Add the coefficients 3 and 4 to get 7; the letter x is unchanged, giving 7x.",
        },
        {
          stepNumber: 4,
          description: "Combine the y-terms.",
          workingLatex: "2y - y = 2y - 1y = 1y = y",
          explanation:
            "A lone -y means -1y, so this is 2 lots of y minus 1 lot of y, which leaves 1 lot of y. We write 1y simply as y. Treating -y as 0 is a slip to avoid.",
        },
        {
          stepNumber: 5,
          description: "Assemble the simplified expression.",
          workingLatex: "7x + y",
          explanation:
            "x and y are unlike, so no further combining is possible. Quick check with x=1, y=1: original 3+2+4-1=8, answer 7+1=8 — they agree.",
        },
      ],
      finalAnswer: "\\(7x + y\\)",
      canonicalAnswer: "7x+y",
    },
  },
  {
    id: "ga04-006",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(8p - 3q - 5p + 7q\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "several variables",
      "negative coefficients",
      "subtraction of terms",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach each sign to its term.",
          workingLatex: "+8p, \\ -3q, \\ -5p, \\ +7q",
          explanation:
            "Writing the operator with the term that follows it stops sign mistakes. So the third term is -5p (not +5p), because the minus belongs to it.",
        },
        {
          stepNumber: 2,
          description: "Group like terms.",
          workingLatex: "(8p - 5p) + (-3q + 7q)",
          explanation:
            "Collect the p-terms together and the q-terms together; they are two separate families and cannot mix.",
        },
        {
          stepNumber: 3,
          description: "Combine the p-terms.",
          workingLatex: "8p - 5p = 3p",
          explanation:
            "Subtract the coefficients: 8 - 5 = 3, so the p-terms give 3p.",
        },
        {
          stepNumber: 4,
          description: "Combine the q-terms.",
          workingLatex: "-3q + 7q = 4q",
          explanation:
            "Adding 7q to -3q gives +4q. Equivalently 7 - 3 = 4, and the result is positive because the larger coefficient (7) is the positive one.",
        },
        {
          stepNumber: 5,
          description: "Write the final expression.",
          workingLatex: "3p + 4q",
          explanation:
            "p and q are unlike, so this is fully simplified. Check with p=1, q=1: original 8-3-5+7=7, answer 3+4=7. Correct.",
        },
      ],
      finalAnswer: "\\(3p + 4q\\)",
      canonicalAnswer: "3p+4q",
    },
  },
  {
    id: "ga04-007",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(2a^2 + 3a + a^2 - 5a\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "powers as unlike terms",
      "negative coefficients",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Sort terms by their power of a.",
          workingLatex:
            "a^2\\text{-terms: } 2a^2, +a^2 \\qquad a\\text{-terms: } +3a, -5a",
          explanation:
            "a^2 and a are unlike terms because the power is different — a^2 is a times a, while a is just a. Keep them in two separate columns, carrying each sign.",
        },
        {
          stepNumber: 2,
          description: "Combine the a^2 terms.",
          workingLatex: "2a^2 + a^2 = 2a^2 + 1a^2 = 3a^2",
          explanation:
            "The lone a^2 carries an invisible coefficient of 1, so it is 1a^2. Then 2 + 1 = 3 lots of a^2, giving 3a^2.",
        },
        {
          stepNumber: 3,
          description: "Combine the a terms.",
          workingLatex: "3a - 5a = -2a",
          explanation:
            "Subtract the coefficients: 3 - 5 = -2, so the a-terms give -2a. A negative result is perfectly valid inside an expression.",
        },
        {
          stepNumber: 4,
          description: "Write the simplified expression.",
          workingLatex: "3a^2 - 2a",
          explanation:
            "Conventionally the highest power is written first. Check with a=2: original 8+6+4-10=8; answer 12-4=8. Correct.",
        },
      ],
      finalAnswer: "\\(3a^2 - 2a\\)",
      canonicalAnswer: "3a^2-2a",
    },
  },
  {
    id: "ga04-008",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(5xy + 2x + 3xy - x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "two-letter terms",
      "products of variables",
      "negative coefficients",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the term families.",
          workingLatex:
            "xy\\text{-terms: } 5xy, +3xy \\qquad x\\text{-terms: } +2x, -x",
          explanation:
            "xy means x \\cdot y, which is a different kind of term from x on its own. So the xy-terms and the x-terms form two separate families that cannot be combined with each other.",
        },
        {
          stepNumber: 2,
          description: "Combine the xy-terms.",
          workingLatex: "5xy + 3xy = 8xy",
          explanation:
            "Both terms have the identical letter part xy, so add their coefficients: 5 + 3 = 8, giving 8xy.",
        },
        {
          stepNumber: 3,
          description: "Combine the x-terms.",
          workingLatex: "2x - x = 2x - 1x = x",
          explanation:
            "The lone -x is -1x, so this is 2 lots of x minus 1 lot of x, leaving 1x, which we write as x.",
        },
        {
          stepNumber: 4,
          description: "Write the final expression.",
          workingLatex: "8xy + x",
          explanation:
            "8xy and x are unlike, so this is fully simplified. Check with x=2, y=3: original 30+4+18-2=50; answer 48+2=50. Correct.",
        },
      ],
      finalAnswer: "\\(8xy + x\\)",
      canonicalAnswer: "8xy+x",
    },
  },
  {
    id: "ga04-009",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(7ab + 4ba - 2ab\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "two-letter terms",
      "commutative products",
      "subtraction of terms",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise that ba is the same as ab.",
          workingLatex: "4ba = 4ab",
          explanation:
            "Multiplication is commutative, so b \\cdot a = a \\cdot b. The order of the letters does not matter, which makes 4ba and 4ab the very same term. A common slip is to treat them as unlike because they look different.",
        },
        {
          stepNumber: 2,
          description: "Rewrite every term in the same letter order.",
          workingLatex: "7ab + 4ab - 2ab",
          explanation:
            "Putting the letters in alphabetical order throughout makes it obvious that all three are like terms sharing the part ab.",
        },
        {
          stepNumber: 3,
          description: "Combine the coefficients.",
          workingLatex: "7 + 4 - 2 = 9",
          explanation:
            "Work left to right: 7 + 4 = 11, then 11 - 2 = 9. All three terms share the letter part ab, so only the numbers are combined.",
        },
        {
          stepNumber: 4,
          description: "Write the simplified term.",
          workingLatex: "9ab",
          explanation:
            "Attach the result to the common letter part to get 9ab. Check with a=2, b=3 (so ab=6): original 42+24-12=54; answer 9 \\cdot 6=54. Correct.",
        },
      ],
      finalAnswer: "\\(9ab\\)",
      canonicalAnswer: "9ab",
    },
  },
  {
    id: "ga04-010",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{1}{2}x + \\dfrac{3}{4}x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "fractional coefficients",
      "one variable",
      "common denominator",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note both terms are multiples of x.",
          workingLatex: "\\frac{1}{2}x \\text{ and } \\frac{3}{4}x \\text{ are like terms}",
          explanation:
            "A fractional coefficient behaves like any other coefficient. Both terms are 'a number times x', so they are like terms and we add the coefficients \\frac{1}{2} and \\frac{3}{4}.",
        },
        {
          stepNumber: 2,
          description: "Find a common denominator.",
          workingLatex: "\\frac{1}{2} = \\frac{2}{4}",
          explanation:
            "To add fractions they must share a denominator. The denominators are 2 and 4, and 4 is a multiple of 2, so rewrite \\frac{1}{2} as \\frac{2}{4} by multiplying top and bottom by 2.",
        },
        {
          stepNumber: 3,
          description: "Add the coefficients.",
          workingLatex: "\\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}",
          explanation:
            "With a common denominator, add the numerators and keep the denominator: 2 + 3 = 5, giving \\frac{5}{4}. This is top-heavy but that is fine for a coefficient.",
        },
        {
          stepNumber: 4,
          description: "Attach the variable.",
          workingLatex: "\\frac{5}{4}x",
          explanation:
            "The combined coefficient \\frac{5}{4} multiplies x. Check with x=4: original 2+3=5; answer \\frac{5}{4}\\cdot 4 = 5. Correct.",
        },
      ],
      finalAnswer: "\\(\\dfrac{5}{4}x\\)",
      canonicalAnswer: "(5/4)x",
    },
  },
  {
    id: "ga04-011",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(0.5m + 1.2n - 0.3m + 0.8n\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "decimal coefficients",
      "several variables",
      "negative coefficients",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group the terms by letter.",
          workingLatex: "(0.5m - 0.3m) + (1.2n + 0.8n)",
          explanation:
            "Decimals are just coefficients, no different from whole numbers. Collect the m-terms together and the n-terms together, keeping each sign with its term.",
        },
        {
          stepNumber: 2,
          description: "Combine the m-terms.",
          workingLatex: "0.5m - 0.3m = 0.2m",
          explanation:
            "Subtract the decimal coefficients: 0.5 - 0.3 = 0.2, so the m-terms give 0.2m.",
        },
        {
          stepNumber: 3,
          description: "Combine the n-terms.",
          workingLatex: "1.2n + 0.8n = 2.0n = 2n",
          explanation:
            "Add the decimals: 1.2 + 0.8 = 2.0, which is just 2, so the n-terms give 2n. Drop the trailing .0 in the final answer.",
        },
        {
          stepNumber: 4,
          description: "Write the simplified expression.",
          workingLatex: "0.2m + 2n",
          explanation:
            "m and n are unlike, so nothing more combines. Check with m=10, n=10: original 5+12-3+8=22; answer 2+20=22. Correct.",
        },
      ],
      finalAnswer: "\\(0.2m + 2n\\)",
      canonicalAnswer: "0.2m+2n",
    },
  },
  {
    id: "ga04-012",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(4x - 7 + 2x + 3 - x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "constant terms",
      "negative coefficients",
      "one variable",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate the x-terms from the number terms.",
          workingLatex:
            "x\\text{-terms: } 4x, +2x, -x \\qquad constants: -7, +3",
          explanation:
            "Plain numbers (constants) are like terms with one another but unlike any x-term. Sort the expression into these two families, carrying each sign.",
        },
        {
          stepNumber: 2,
          description: "Add the first two x-terms.",
          workingLatex: "4x + 2x = 6x",
          explanation:
            "Working left to right through the x-family, the first two terms add: 4 + 2 = 6, giving 6x. We'll deal with the subtraction next.",
        },
        {
          stepNumber: 3,
          description: "Subtract the remaining x-term.",
          workingLatex: "6x - x = 6x - 1x = 5x",
          explanation:
            "The lone -x means -1x, so subtracting it from 6x gives 6 - 1 = 5, i.e. 5x. Treating -x as nothing (and leaving 6x) is the slip to avoid.",
        },
        {
          stepNumber: 4,
          description: "Combine the constants.",
          workingLatex: "-7 + 3 = -4",
          explanation:
            "Adding 3 to -7 gives -4. Keep the sign with each number so the -7 stays negative — losing that minus would give the wrong constant.",
        },
        {
          stepNumber: 5,
          description: "Write the simplified expression.",
          workingLatex: "5x - 4",
          explanation:
            "The variable part and constant part are unlike, so leave them as a sum. Check with x=2: original 8-7+4+3-2=6; answer 10-4=6. Correct.",
        },
      ],
      finalAnswer: "\\(5x - 4\\)",
      canonicalAnswer: "5x-4",
    },
  },
  {
    id: "ga04-013",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(6c - 9d + 2c + d - 4c\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "several variables",
      "negative coefficients",
      "subtraction of terms",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tag every term with its sign.",
          workingLatex: "+6c, \\ -9d, \\ +2c, \\ +d, \\ -4c",
          explanation:
            "Carry the sign in front of each term so nothing is lost when we regroup. Note +d means +1d — the hidden coefficient is 1.",
        },
        {
          stepNumber: 2,
          description: "Group like terms.",
          workingLatex: "(6c + 2c - 4c) + (-9d + d)",
          explanation:
            "Gather the c-terms into one bracket and the d-terms into another. They are two separate families.",
        },
        {
          stepNumber: 3,
          description: "Add the first two c-terms.",
          workingLatex: "6c + 2c = 8c",
          explanation:
            "Working through the c-family left to right, the two positive terms add first: 6 + 2 = 8, giving 8c.",
        },
        {
          stepNumber: 4,
          description: "Subtract the remaining c-term.",
          workingLatex: "8c - 4c = 4c",
          explanation:
            "Now take away the last c-term: 8 - 4 = 4, leaving 4c.",
        },
        {
          stepNumber: 5,
          description: "Combine the d-terms.",
          workingLatex: "-9d + d = -9d + 1d = -8d",
          explanation:
            "The lone +d is +1d, so adding it to -9d gives -8d. The result stays negative because -9 outweighs +1 — a common slip is to write +8d by ignoring the leading minus.",
        },
        {
          stepNumber: 6,
          description: "Write the simplified expression.",
          workingLatex: "4c - 8d",
          explanation:
            "c and d are unlike, so we are done. Check with c=1, d=1: original 6-9+2+1-4=-4; answer 4-8=-4. Correct.",
        },
      ],
      finalAnswer: "\\(4c - 8d\\)",
      canonicalAnswer: "4c-8d",
    },
  },
  {
    id: "ga04-014",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(x^2 + 4x + 3x^2 - 6x + 5\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "powers as unlike terms",
      "constant terms",
      "negative coefficients",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Sort into three families: x^2, x and constant.",
          workingLatex:
            "x^2\\text{: } x^2, +3x^2 \\quad x\\text{: } +4x, -6x \\quad const: +5",
          explanation:
            "x^2, x and a plain number are all unlike one another, so they stay in three separate groups. A classic error is to merge x^2 with x — don't, they are different powers.",
        },
        {
          stepNumber: 2,
          description: "Combine the x^2 terms.",
          workingLatex: "x^2 + 3x^2 = 1x^2 + 3x^2 = 4x^2",
          explanation:
            "The leading x^2 has coefficient 1, so it is 1x^2. Then 1 + 3 = 4 gives 4x^2.",
        },
        {
          stepNumber: 3,
          description: "Combine the x terms.",
          workingLatex: "4x - 6x = -2x",
          explanation:
            "Subtract the coefficients: 4 - 6 = -2, so the x-terms give -2x.",
        },
        {
          stepNumber: 4,
          description: "The constant stands alone.",
          workingLatex: "+5",
          explanation:
            "There is only one number term, so there is nothing to add it to — it is left as +5.",
        },
        {
          stepNumber: 5,
          description: "Write in descending powers.",
          workingLatex: "4x^2 - 2x + 5",
          explanation:
            "Order the three parts from highest power to lowest. Check with x=2: original 4+8+12-12+5=17; answer 16-4+5=17. Correct.",
        },
      ],
      finalAnswer: "\\(4x^2 - 2x + 5\\)",
      canonicalAnswer: "4x^2-2x+5",
    },
  },
  {
    id: "ga04-015",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(3pq + 5p - pq + 2q - 4p\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "two-letter terms",
      "several variables",
      "negative coefficients",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify three distinct families.",
          workingLatex:
            "pq\\text{: } 3pq, -pq \\quad p\\text{: } +5p, -4p \\quad q\\text{: } +2q",
          explanation:
            "pq is the product of the two letters and is unlike p alone and unlike q alone. So there are three separate term types here; keep each sign with its term.",
        },
        {
          stepNumber: 2,
          description: "Combine the pq-terms.",
          workingLatex: "3pq - pq = 3pq - 1pq = 2pq",
          explanation:
            "The lone -pq is -1pq, so 3 - 1 = 2 gives 2pq.",
        },
        {
          stepNumber: 3,
          description: "Combine the p-terms.",
          workingLatex: "5p - 4p = p",
          explanation:
            "Subtract the coefficients: 5 - 4 = 1, so the p-terms give 1p, written simply as p.",
        },
        {
          stepNumber: 4,
          description: "The q-term stands alone.",
          workingLatex: "+2q",
          explanation:
            "There is only one q-term, so it has nothing to combine with and is left unchanged.",
        },
        {
          stepNumber: 5,
          description: "Assemble the simplified expression.",
          workingLatex: "2pq + p + 2q",
          explanation:
            "All three families are unlike, so we just write their sum. Check with p=2, q=3 (pq=6): original 18+10-6+6-8=20; answer 12+2+6=20. Correct.",
        },
      ],
      finalAnswer: "\\(2pq + p + 2q\\)",
      canonicalAnswer: "2pq+p+2q",
    },
  },
  {
    id: "ga04-016",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Simplify \\(\\dfrac{2}{3}y + 4 - \\dfrac{1}{6}y + \\dfrac{1}{2}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "fractional coefficients",
      "constant terms",
      "common denominator",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate the y-terms from the constants.",
          workingLatex:
            "y\\text{-terms: } \\frac{2}{3}y, -\\frac{1}{6}y \\qquad constants: 4, \\frac{1}{2}",
          explanation:
            "The fractional coefficients only affect the y-terms; the plain numbers 4 and \\frac{1}{2} form a separate constant group. Sort first, then combine each group.",
        },
        {
          stepNumber: 2,
          description: "Put the y coefficients over denominator 6.",
          workingLatex: "\\frac{2}{3} - \\frac{1}{6} = \\frac{4}{6} - \\frac{1}{6}",
          explanation:
            "The denominators are 3 and 6, and 6 is a multiple of 3, so rewrite \\frac{2}{3} as \\frac{4}{6} so both share denominator 6.",
        },
        {
          stepNumber: 3,
          description: "Subtract the y coefficients.",
          workingLatex: "\\frac{4}{6} - \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}",
          explanation:
            "With a common denominator, subtract the numerators: 4 - 1 = 3, giving \\frac{3}{6}, which cancels to \\frac{1}{2}. So the y-term is \\frac{1}{2}y.",
        },
        {
          stepNumber: 4,
          description: "Add the constants.",
          workingLatex: "4 + \\frac{1}{2} = \\frac{8}{2} + \\frac{1}{2} = \\frac{9}{2}",
          explanation:
            "Write the whole number 4 as \\frac{8}{2} so it shares the denominator, then \\frac{8}{2} + \\frac{1}{2} = \\frac{9}{2}.",
        },
        {
          stepNumber: 5,
          description: "Write the simplified expression.",
          workingLatex: "\\frac{1}{2}y + \\frac{9}{2}",
          explanation:
            "The y-term and constant are unlike, so leave them as a sum. Check with y=6: original 4+4-1+0.5=7.5; answer 3+4.5=7.5. Correct.",
        },
      ],
      finalAnswer: "\\(\\dfrac{1}{2}y + \\dfrac{9}{2}\\)",
      canonicalAnswer: "(1/2)y+9/2",
    },
  },
  {
    id: "ga04-017",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(2a^2b + 5ab^2 - a^2b + 3ab^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "two-letter terms",
      "powers as unlike terms",
      "products of variables",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distinguish a^2b from ab^2.",
          workingLatex: "a^2b = a \\cdot a \\cdot b \\qquad ab^2 = a \\cdot b \\cdot b",
          explanation:
            "These are UNLIKE terms: a^2b has two a's and one b, whereas ab^2 has one a and two b's. The letters appear with different powers, so the two cannot be combined with each other.",
        },
        {
          stepNumber: 2,
          description: "Group each type.",
          workingLatex: "(2a^2b - a^2b) + (5ab^2 + 3ab^2)",
          explanation:
            "Collect the a^2b terms together and the ab^2 terms together, carrying each sign into its bracket.",
        },
        {
          stepNumber: 3,
          description: "Combine the a^2b terms.",
          workingLatex: "2a^2b - a^2b = 2a^2b - 1a^2b = a^2b",
          explanation:
            "The lone -a^2b is -1a^2b, so 2 - 1 = 1 gives 1a^2b, written a^2b.",
        },
        {
          stepNumber: 4,
          description: "Combine the ab^2 terms.",
          workingLatex: "5ab^2 + 3ab^2 = 8ab^2",
          explanation:
            "Add the coefficients: 5 + 3 = 8, giving 8ab^2.",
        },
        {
          stepNumber: 5,
          description: "Write the simplified expression.",
          workingLatex: "a^2b + 8ab^2",
          explanation:
            "The two terms are unlike, so this is fully simplified. Check with a=2, b=1: a^2b=4, ab^2=2; original 8+10-4+6=20; answer 4+16=20. Correct.",
        },
      ],
      finalAnswer: "\\(a^2b + 8ab^2\\)",
      canonicalAnswer: "a^2b+8ab^2",
    },
  },
  {
    id: "ga04-018",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(-5t + 8 - 3t - 11 + 9t\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "negative coefficients",
      "constant terms",
      "one variable",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach each sign to its term.",
          workingLatex: "-5t, \\ +8, \\ -3t, \\ -11, \\ +9t",
          explanation:
            "The very first term is negative, so carrying the sign with each term is essential here. The -5t and the -11 both stay negative.",
        },
        {
          stepNumber: 2,
          description: "Group like terms.",
          workingLatex: "(-5t - 3t + 9t) + (8 - 11)",
          explanation:
            "Gather the t-terms in one bracket and the constants in another. They are separate families.",
        },
        {
          stepNumber: 3,
          description: "Add the first two t-terms.",
          workingLatex: "-5t - 3t = -8t",
          explanation:
            "Both of the first t-terms are negative, so they pile up: -5 - 3 = -8, giving -8t. Keeping the running total negative here is essential.",
        },
        {
          stepNumber: 4,
          description: "Add the last t-term.",
          workingLatex: "-8t + 9t = 1t = t",
          explanation:
            "Now bring in the +9t: -8 + 9 = 1, so we have 1t, written simply as t. Losing the running negative and getting a different total is the classic slip.",
        },
        {
          stepNumber: 5,
          description: "Combine the constants.",
          workingLatex: "8 - 11 = -3",
          explanation:
            "Subtract: 8 - 11 = -3, a negative constant. The -11 keeps its sign throughout.",
        },
        {
          stepNumber: 6,
          description: "Write the simplified expression.",
          workingLatex: "t - 3",
          explanation:
            "The variable and constant parts are unlike, so leave them as a sum. Check with t=2: original -10+8-6-11+18=-1; answer 2-3=-1. Correct.",
        },
      ],
      finalAnswer: "\\(t - 3\\)",
      canonicalAnswer: "t-3",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga04-019",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Simplify fully \\(4x^2 - 3x + 7 - 2x^2 + 5x - 9 + x^2 - x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "powers as unlike terms",
      "constant terms",
      "negative coefficients",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the three families and their signed terms.",
          workingLatex:
            "x^2\\text{: } +4x^2, -2x^2, +x^2 \\quad x\\text{: } -3x, +5x, -x \\quad const: +7, -9",
          explanation:
            "Sort all eight terms into x^2, x and constant groups, keeping each sign attached. With this many terms, a careful sort up front prevents mistakes later.",
        },
        {
          stepNumber: 2,
          description: "Combine the first two x^2 terms.",
          workingLatex: "4x^2 - 2x^2 = 2x^2",
          explanation:
            "Working through the x^2-family left to right: 4 - 2 = 2, giving 2x^2.",
        },
        {
          stepNumber: 3,
          description: "Add the remaining x^2 term.",
          workingLatex: "2x^2 + x^2 = 2x^2 + 1x^2 = 3x^2",
          explanation:
            "The lone x^2 is 1x^2, so 2 + 1 = 3, giving 3x^2. Forgetting that hidden coefficient of 1 is a common slip.",
        },
        {
          stepNumber: 4,
          description: "Combine the first two x terms.",
          workingLatex: "-3x + 5x = 2x",
          explanation:
            "Add the signed coefficients: -3 + 5 = 2, giving 2x.",
        },
        {
          stepNumber: 5,
          description: "Subtract the remaining x term.",
          workingLatex: "2x - x = 2x - 1x = x",
          explanation:
            "The lone -x is -1x, so 2 - 1 = 1, giving 1x = x.",
        },
        {
          stepNumber: 6,
          description: "Combine the constants.",
          workingLatex: "7 - 9 = -2",
          explanation:
            "Subtract the two number terms: 7 - 9 = -2, a negative constant.",
        },
        {
          stepNumber: 7,
          description: "Write the answer in descending powers.",
          workingLatex: "3x^2 + x - 2",
          explanation:
            "Order from highest power down. Check with x=2: original 16-6+7-8+10-9+4-2=12; answer 12+2-2=12. Correct.",
        },
      ],
      finalAnswer: "\\(3x^2 + x - 2\\)",
      canonicalAnswer: "3x^2+x-2",
    },
  },
  {
    id: "ga04-020",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A rectangle has length \\((3x + 2y)\\) and width \\((x + 4y)\\). Write a fully simplified expression for its perimeter.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "perimeter",
      "several variables",
      "problem solving",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the perimeter rule for a rectangle.",
          workingLatex: "P = 2 \\cdot (\\text{length}) + 2 \\cdot (\\text{width})",
          explanation:
            "A rectangle has two lengths and two widths, so the perimeter is twice the length plus twice the width — equivalently, the sum of all four sides.",
        },
        {
          stepNumber: 2,
          description: "Substitute the given side expressions.",
          workingLatex: "P = (3x + 2y) + (3x + 2y) + (x + 4y) + (x + 4y)",
          explanation:
            "Add the two lengths and the two widths. Since this bank is about collecting like terms (not expanding), we write each side out twice and sum the terms directly rather than multiplying out 2(3x+2y).",
        },
        {
          stepNumber: 3,
          description: "Group the x-terms.",
          workingLatex: "3x + 3x + x + x = 8x",
          explanation:
            "There are four x-terms across the four sides: 3 + 3 + 1 + 1 = 8, giving 8x.",
        },
        {
          stepNumber: 4,
          description: "Group the y-terms.",
          workingLatex: "2y + 2y + 4y + 4y = 12y",
          explanation:
            "The four y-terms give 2 + 2 + 4 + 4 = 12, so 12y.",
        },
        {
          stepNumber: 5,
          description: "Write the simplified perimeter.",
          workingLatex: "P = 8x + 12y",
          explanation:
            "x and y are unlike, so this is fully simplified. Check with x=1, y=1: each length 5, each width 5, perimeter 20; answer 8+12=20. Correct.",
        },
      ],
      finalAnswer: "\\(8x + 12y\\)",
      canonicalAnswer: "8x+12y",
    },
  },
  {
    id: "ga04-021",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Simplify fully \\(\\dfrac{3}{4}a - \\dfrac{1}{2}b + \\dfrac{1}{8}a + \\dfrac{2}{3}b\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "fractional coefficients",
      "several variables",
      "common denominator",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group like terms.",
          workingLatex:
            "\\left(\\frac{3}{4}a + \\frac{1}{8}a\\right) + \\left(-\\frac{1}{2}b + \\frac{2}{3}b\\right)",
          explanation:
            "Collect the a-terms and the b-terms separately, carrying each sign. Each group will need its own common denominator because the fractions differ.",
        },
        {
          stepNumber: 2,
          description: "Put the a coefficients over denominator 8.",
          workingLatex: "\\frac{3}{4} + \\frac{1}{8} = \\frac{6}{8} + \\frac{1}{8}",
          explanation:
            "The denominators are 4 and 8, and 8 is a multiple of 4, so rewrite \\frac{3}{4} as \\frac{6}{8} (multiply top and bottom by 2).",
        },
        {
          stepNumber: 3,
          description: "Add the a coefficients.",
          workingLatex: "\\frac{6}{8} + \\frac{1}{8} = \\frac{7}{8} \\ \\Rightarrow\\ \\frac{7}{8}a",
          explanation:
            "Add the numerators: 6 + 1 = 7, giving \\frac{7}{8}. So the a-term is \\frac{7}{8}a.",
        },
        {
          stepNumber: 4,
          description: "Put the b coefficients over denominator 6.",
          workingLatex: "-\\frac{1}{2} + \\frac{2}{3} = -\\frac{3}{6} + \\frac{4}{6}",
          explanation:
            "The lowest common denominator of 2 and 3 is 6: -\\frac{1}{2} = -\\frac{3}{6} and \\frac{2}{3} = \\frac{4}{6}.",
        },
        {
          stepNumber: 5,
          description: "Add the b coefficients.",
          workingLatex: "-\\frac{3}{6} + \\frac{4}{6} = \\frac{1}{6} \\ \\Rightarrow\\ \\frac{1}{6}b",
          explanation:
            "Add the numerators with their signs: -3 + 4 = 1, giving \\frac{1}{6}. So the b-term is \\frac{1}{6}b.",
        },
        {
          stepNumber: 6,
          description: "Write the simplified expression.",
          workingLatex: "\\frac{7}{8}a + \\frac{1}{6}b",
          explanation:
            "a and b are unlike, so leave them as a sum. Check with a=8, b=6: original 6-3+1+4=8; answer 7+1=8. Correct.",
        },
      ],
      finalAnswer: "\\(\\dfrac{7}{8}a + \\dfrac{1}{6}b\\)",
      canonicalAnswer: "(7/8)a+(1/6)b",
    },
  },
  {
    id: "ga04-022",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Simplify fully \\(7mn + 3m^2 - 2nm + 5m^2 - 4mn - m^2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "two-letter terms",
      "commutative products",
      "powers as unlike terms",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise nm = mn and rewrite consistently.",
          workingLatex: "2nm = 2mn",
          explanation:
            "Order of multiplication does not matter, so nm = mn. Rewriting the one nm term as mn reveals that there are really three mn-terms hiding here.",
        },
        {
          stepNumber: 2,
          description: "List the two families.",
          workingLatex:
            "mn\\text{: } 7mn, -2mn, -4mn \\qquad m^2\\text{: } 3m^2, +5m^2, -m^2",
          explanation:
            "mn is a product of two different letters, while m^2 is m times itself. They are unlike, so keep them in two separate columns with their signs.",
        },
        {
          stepNumber: 3,
          description: "Add the first two mn-terms.",
          workingLatex: "7mn - 2mn = 5mn",
          explanation:
            "Working through the mn-family left to right: 7 - 2 = 5, giving 5mn.",
        },
        {
          stepNumber: 4,
          description: "Subtract the remaining mn-term.",
          workingLatex: "5mn - 4mn = mn",
          explanation:
            "Now take away the last mn-term: 5 - 4 = 1, leaving 1mn = mn.",
        },
        {
          stepNumber: 5,
          description: "Add the first two m^2 terms.",
          workingLatex: "3m^2 + 5m^2 = 8m^2",
          explanation:
            "Working through the m^2-family: 3 + 5 = 8, giving 8m^2.",
        },
        {
          stepNumber: 6,
          description: "Subtract the remaining m^2 term.",
          workingLatex: "8m^2 - m^2 = 8m^2 - 1m^2 = 7m^2",
          explanation:
            "The lone -m^2 is -1m^2, so 8 - 1 = 7, giving 7m^2.",
        },
        {
          stepNumber: 7,
          description: "Write the simplified expression in descending powers.",
          workingLatex: "7m^2 + mn",
          explanation:
            "Conventionally the higher-degree term is written first. Check with m=2, n=3 (mn=6, m^2=4): original 42+12-12+20-24-4=34; answer 28+6=34. Correct.",
        },
      ],
      finalAnswer: "\\(7m^2 + mn\\)",
      canonicalAnswer: "7m^2+mn",
    },
  },
  {
    id: "ga04-023",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The angles of a triangle are \\((2x + 10)^\\circ\\), \\((3x - 25)^\\circ\\) and \\((x + 15)^\\circ\\). Write a fully simplified expression for their sum.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "angle sum",
      "constant terms",
      "problem solving",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the sum of the three angle expressions.",
          workingLatex: "S = (2x + 10) + (3x - 25) + (x + 15)",
          explanation:
            "The sum is simply all three angle expressions added together. Note we are asked only to simplify the sum, not to solve for x by setting it equal to 180.",
        },
        {
          stepNumber: 2,
          description: "Remove brackets (all are added, so signs are unchanged).",
          workingLatex: "S = 2x + 10 + 3x - 25 + x + 15",
          explanation:
            "Each bracket is preceded by a plus, so every term keeps its sign when the brackets come off. No expansion is needed — we are just freeing the terms to collect them.",
        },
        {
          stepNumber: 3,
          description: "Combine the x-terms.",
          workingLatex: "2x + 3x + x = 6x",
          explanation:
            "Add the x coefficients: 2 + 3 + 1 = 6, giving 6x.",
        },
        {
          stepNumber: 4,
          description: "Combine the constant terms.",
          workingLatex: "10 - 25 + 15 = -15 + 15 = 0",
          explanation:
            "Work left to right: 10 - 25 = -15, then -15 + 15 = 0, so the constants cancel out entirely.",
        },
        {
          stepNumber: 5,
          description: "Write the simplified sum.",
          workingLatex: "S = 6x",
          explanation:
            "With the constants gone, only the x-term remains. Check with x=10: angles 30, 5, 25, sum 60; answer 6 \\cdot 10 = 60. Correct.",
        },
      ],
      finalAnswer: "\\(6x\\) (degrees)",
      canonicalAnswer: "6x",
    },
  },
  {
    id: "ga04-024",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Simplify fully \\(5x^2 - 2x + 3xy - x^2 + 4x - 5xy + 2yx\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "powers as unlike terms",
      "two-letter terms",
      "commutative products",
      "negative coefficients",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite yx as xy.",
          workingLatex: "2yx = 2xy",
          explanation:
            "yx and xy are the same product because multiplication is commutative. Writing both as xy lets us spot all the xy-terms together.",
        },
        {
          stepNumber: 2,
          description: "Sort into three families.",
          workingLatex:
            "x^2\\text{: } 5x^2, -x^2 \\quad x\\text{: } -2x, +4x \\quad xy\\text{: } +3xy, -5xy, +2xy",
          explanation:
            "x^2 (x squared), x (first power) and xy (product of two letters) are three pairwise-unlike types of term. Keep them in separate columns with their signs.",
        },
        {
          stepNumber: 3,
          description: "Combine the x^2 terms.",
          workingLatex: "5x^2 - x^2 = 5x^2 - 1x^2 = 4x^2",
          explanation:
            "The lone -x^2 is -1x^2, so 5 - 1 = 4 gives 4x^2.",
        },
        {
          stepNumber: 4,
          description: "Combine the x terms.",
          workingLatex: "-2x + 4x = 2x",
          explanation:
            "Add the coefficients with their signs: -2 + 4 = 2, giving 2x.",
        },
        {
          stepNumber: 5,
          description: "Add the first two xy terms.",
          workingLatex: "3xy - 5xy = -2xy",
          explanation:
            "Working through the xy-family left to right: 3 - 5 = -2, giving -2xy.",
        },
        {
          stepNumber: 6,
          description: "Add the remaining xy term.",
          workingLatex: "-2xy + 2xy = 0",
          explanation:
            "Now bring in the +2xy: -2 + 2 = 0, so the xy-terms cancel completely and vanish from the answer. Don't write 0xy in the final line — a zero coefficient means that whole term is simply gone.",
        },
        {
          stepNumber: 7,
          description: "Write the simplified expression.",
          workingLatex: "4x^2 + 2x",
          explanation:
            "Only the x^2 and x parts survive. Check with x=2, y=3: original 20-4+18-4+8-30+12=20; answer 16+4=20. Correct.",
        },
      ],
      finalAnswer: "\\(4x^2 + 2x\\)",
      canonicalAnswer: "4x^2+2x",
    },
  },
  {
    id: "ga04-025",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A student writes \\(6a + 2a^2 - 3a + a^2 = 6a^3\\). Identify the mistake and write the correct fully simplified expression.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "powers as unlike terms",
      "error analysis",
      "reasoning",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the student's error.",
          workingLatex: "a \\text{ and } a^2 \\text{ are UNLIKE terms}",
          explanation:
            "The student combined a-terms with a^2-terms and even added the powers to get a^3. Two rules are broken: you may only add coefficients of LIKE terms, and powers are never added when collecting like terms.",
        },
        {
          stepNumber: 2,
          description: "Sort correctly into two families.",
          workingLatex:
            "a\\text{-terms: } 6a, -3a \\qquad a^2\\text{-terms: } 2a^2, +a^2",
          explanation:
            "Group the first-power a-terms apart from the a^2-terms, carrying each sign. These are the two genuine families.",
        },
        {
          stepNumber: 3,
          description: "Combine the a-terms.",
          workingLatex: "6a - 3a = 3a",
          explanation:
            "Subtract the coefficients: 6 - 3 = 3, giving 3a.",
        },
        {
          stepNumber: 4,
          description: "Combine the a^2 terms.",
          workingLatex: "2a^2 + a^2 = 2a^2 + 1a^2 = 3a^2",
          explanation:
            "The lone a^2 is 1a^2, so 2 + 1 = 3 gives 3a^2.",
        },
        {
          stepNumber: 5,
          description: "Write the correct simplified expression.",
          workingLatex: "3a^2 + 3a",
          explanation:
            "The two terms are unlike, so leave them as a sum. Check with a=2: original 12+8-6+4=18; answer 12+6=18. The student's 6a^3 = 48, which is wrong.",
        },
      ],
      finalAnswer:
        "The mistake: \\(a\\) and \\(a^2\\) were treated as like terms. Correct answer \\(3a^2 + 3a\\).",
      canonicalAnswer: "3a^2+3a",
    },
  },
  {
    id: "ga04-026",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Simplify fully \\(0.4x + \\dfrac{1}{2}y - 0.9x + 1.5y - \\dfrac{1}{4}y\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "decimal coefficients",
      "fractional coefficients",
      "several variables",
      "negative coefficients",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group by letter.",
          workingLatex:
            "x\\text{-terms: } 0.4x, -0.9x \\qquad y\\text{-terms: } \\frac{1}{2}y, +1.5y, -\\frac{1}{4}y",
          explanation:
            "Collect the x-terms and the y-terms, carrying each sign. The y-terms mix fractions and decimals, so we will convert everything to one form before adding.",
        },
        {
          stepNumber: 2,
          description: "Combine the x-terms.",
          workingLatex: "0.4x - 0.9x = -0.5x",
          explanation:
            "Subtract the decimal coefficients: 0.4 - 0.9 = -0.5, giving -0.5x.",
        },
        {
          stepNumber: 3,
          description: "Convert all y coefficients to decimals.",
          workingLatex: "\\frac{1}{2} = 0.5, \\qquad \\frac{1}{4} = 0.25",
          explanation:
            "Turning the fractions into decimals lets us add them cleanly to the 1.5 that is already a decimal.",
        },
        {
          stepNumber: 4,
          description: "Combine the y-terms.",
          workingLatex: "0.5y + 1.5y - 0.25y = 2y - 0.25y = 1.75y",
          explanation:
            "Left to right: 0.5 + 1.5 = 2 gives 2y, then 2 - 0.25 = 1.75 gives 1.75y (equivalently \\frac{7}{4}y).",
        },
        {
          stepNumber: 5,
          description: "Write the simplified expression.",
          workingLatex: "-0.5x + 1.75y",
          explanation:
            "x and y are unlike, so leave them as a sum. Check with x=2, y=4: original 0.8+2-1.8+6-1=6; answer -1+7=6. Correct.",
        },
      ],
      finalAnswer: "\\(-0.5x + 1.75y\\)",
      canonicalAnswer: "-0.5x+1.75y",
    },
  },
  {
    id: "ga04-027",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Simplify fully \\(3a^2b + 4ab^2 - 5a^2b + 2ab - ab^2 + a^2b - 3ab\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "two-letter terms",
      "powers as unlike terms",
      "products of variables",
      "negative coefficients",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distinguish the three product types.",
          workingLatex: "a^2b \\ (\\text{two }a,\\ \\text{one }b), \\quad ab^2 \\ (\\text{one }a,\\ \\text{two }b), \\quad ab \\ (\\text{one each})",
          explanation:
            "a^2b, ab^2 and ab are three different terms — they differ in how many of each letter they contain, so none can combine with another type. Naming exactly what each contains keeps them straight.",
        },
        {
          stepNumber: 2,
          description: "List each family with signs.",
          workingLatex:
            "a^2b\\text{: } 3, -5, +1 \\quad ab^2\\text{: } 4, -1 \\quad ab\\text{: } +2, -3",
          explanation:
            "Read off the coefficient of each of the seven terms, keeping its sign. The lone a^2b and lone ab^2 each have coefficient 1.",
        },
        {
          stepNumber: 3,
          description: "Add the first two a^2b terms.",
          workingLatex: "3a^2b - 5a^2b = -2a^2b",
          explanation:
            "Working through the a^2b-family left to right: 3 - 5 = -2, giving -2a^2b.",
        },
        {
          stepNumber: 4,
          description: "Add the remaining a^2b term.",
          workingLatex: "-2a^2b + a^2b = -2a^2b + 1a^2b = -a^2b",
          explanation:
            "The lone +a^2b is +1a^2b, so -2 + 1 = -1, giving -1a^2b = -a^2b.",
        },
        {
          stepNumber: 5,
          description: "Combine the ab^2 terms.",
          workingLatex: "4ab^2 - ab^2 = 4ab^2 - 1ab^2 = 3ab^2",
          explanation:
            "The lone -ab^2 is -1ab^2, so 4 - 1 = 3 gives 3ab^2.",
        },
        {
          stepNumber: 6,
          description: "Combine the ab terms.",
          workingLatex: "2ab - 3ab = -ab",
          explanation:
            "Subtract the coefficients: 2 - 3 = -1, giving -1ab = -ab.",
        },
        {
          stepNumber: 7,
          description: "Write the simplified expression.",
          workingLatex: "-a^2b + 3ab^2 - ab",
          explanation:
            "The three families are unlike, so write their sum. Check with a=2, b=1: a^2b=4, ab^2=2, ab=2; original 12+8-20+4-2+4-6=0; answer -4+6-2=0. Correct.",
        },
      ],
      finalAnswer: "\\(-a^2b + 3ab^2 - ab\\)",
      canonicalAnswer: "-a^2b+3ab^2-ab",
    },
  },
  {
    id: "ga04-028",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The perimeter of a triangle is \\(9x + 5\\). Two of its sides are \\((2x + 3)\\) and \\((4x - 1)\\). Find a fully simplified expression for the length of the third side.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "perimeter",
      "subtraction of expressions",
      "problem solving",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the combined length of the two known sides.",
          workingLatex: "(2x + 3) + (4x - 1)",
          explanation:
            "The third side equals the perimeter minus the other two sides. So first we add the two known sides together to get their total.",
        },
        {
          stepNumber: 2,
          description: "Collect like terms in the two known sides.",
          workingLatex: "2x + 4x + 3 - 1 = 6x + 2",
          explanation:
            "x-terms: 2 + 4 = 6, giving 6x. Constants: 3 - 1 = 2. So the two known sides total 6x + 2.",
        },
        {
          stepNumber: 3,
          description: "Subtract this total from the perimeter.",
          workingLatex: "\\text{third side} = (9x + 5) - (6x + 2)",
          explanation:
            "The remaining side is what is left of the perimeter after removing the two known sides, so we subtract their total from 9x + 5.",
        },
        {
          stepNumber: 4,
          description: "Subtract term by term (the minus applies to both parts).",
          workingLatex: "9x + 5 - 6x - 2",
          explanation:
            "Subtracting the bracket means subtracting each term inside it: -(6x + 2) becomes -6x - 2. The sign change on the +2 (it becomes -2) is the classic slip to avoid here.",
        },
        {
          stepNumber: 5,
          description: "Collect like terms.",
          workingLatex: "9x - 6x + 5 - 2 = 3x + 3",
          explanation:
            "x-terms: 9 - 6 = 3, giving 3x. Constants: 5 - 2 = 3.",
        },
        {
          stepNumber: 6,
          description: "State the third side.",
          workingLatex: "\\text{third side} = 3x + 3",
          explanation:
            "Check with x=2: perimeter 23, the two sides are 7 and 7, so third = 23 - 14 = 9; answer 3 \\cdot 2 + 3 = 9. Correct.",
        },
      ],
      finalAnswer: "\\(3x + 3\\)",
      canonicalAnswer: "3x+3",
    },
  },
  {
    id: "ga04-029",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Simplify fully \\(\\dfrac{x}{2} + \\dfrac{2x}{3} - \\dfrac{x}{6} + 4 - \\dfrac{x}{3}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "fractional coefficients",
      "common denominator",
      "constant terms",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read each term as a coefficient times x.",
          workingLatex:
            "\\frac{x}{2} = \\frac{1}{2}x, \\ \\frac{2x}{3} = \\frac{2}{3}x, \\ \\frac{x}{6} = \\frac{1}{6}x, \\ \\frac{x}{3} = \\frac{1}{3}x",
          explanation:
            "Writing \\frac{x}{2} as \\frac{1}{2}x shows these four are all like x-terms with fractional coefficients; the +4 is a separate constant.",
        },
        {
          stepNumber: 2,
          description: "Choose a common denominator for the coefficients.",
          workingLatex:
            "\\frac{1}{2} = \\frac{3}{6}, \\ \\frac{2}{3} = \\frac{4}{6}, \\ \\frac{1}{6} = \\frac{1}{6}, \\ \\frac{1}{3} = \\frac{2}{6}",
          explanation:
            "The lowest common denominator of 2, 3 and 6 is 6. Convert every coefficient to sixths so they can be combined.",
        },
        {
          stepNumber: 3,
          description: "Combine the numerators.",
          workingLatex: "\\frac{3}{6} + \\frac{4}{6} - \\frac{1}{6} - \\frac{2}{6} = \\frac{3 + 4 - 1 - 2}{6} = \\frac{4}{6}",
          explanation:
            "With a common denominator, add and subtract the numerators in order: 3 + 4 - 1 - 2 = 4, over the denominator 6.",
        },
        {
          stepNumber: 4,
          description: "Simplify the x coefficient.",
          workingLatex: "\\frac{4}{6} = \\frac{2}{3} \\ \\Rightarrow\\ \\frac{2}{3}x",
          explanation:
            "\\frac{4}{6} cancels (divide top and bottom by 2) to \\frac{2}{3}, so the x-terms together give \\frac{2}{3}x.",
        },
        {
          stepNumber: 5,
          description: "Write the simplified expression including the constant.",
          workingLatex: "\\frac{2}{3}x + 4",
          explanation:
            "The single constant +4 was never combined with the x-terms, so it stays. Check with x=6: original 3+4-1+4-2=8; answer \\frac{2}{3}\\cdot 6 + 4 = 4 + 4 = 8. Correct.",
        },
      ],
      finalAnswer: "\\(\\dfrac{2}{3}x + 4\\)",
      canonicalAnswer: "(2/3)x+4",
    },
  },
  {
    id: "ga04-030",
    topicRef: "ga04",
    topicTitle: "Collecting like terms",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Simplify fully \\(4p - 3q + 2r - 5p + q - 4r + 8p - 2q + 3r\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [
      "collecting like terms",
      "several variables",
      "negative coefficients",
      "subtraction of terms",
    ],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Sort the nine terms into three families.",
          workingLatex:
            "p\\text{: } 4p, -5p, +8p \\quad q\\text{: } -3q, +q, -2q \\quad r\\text{: } +2r, -4r, +3r",
          explanation:
            "Three different letters means three separate families. With nine terms it is easy to drop one, so list them carefully with every sign attached.",
        },
        {
          stepNumber: 2,
          description: "Add the first two p-terms.",
          workingLatex: "4p - 5p = -p",
          explanation:
            "Working through the p-family left to right: 4 - 5 = -1, giving -p. Don't lose this negative when you carry on.",
        },
        {
          stepNumber: 3,
          description: "Add the remaining p-term.",
          workingLatex: "-p + 8p = -1p + 8p = 7p",
          explanation:
            "Now bring in the +8p: -1 + 8 = 7, giving 7p.",
        },
        {
          stepNumber: 4,
          description: "Add the first two q-terms.",
          workingLatex: "-3q + q = -3q + 1q = -2q",
          explanation:
            "The lone +q is +1q, so -3 + 1 = -2, giving -2q.",
        },
        {
          stepNumber: 5,
          description: "Add the remaining q-term.",
          workingLatex: "-2q - 2q = -4q",
          explanation:
            "Now take away the last q-term: -2 - 2 = -4, giving -4q.",
        },
        {
          stepNumber: 6,
          description: "Add the first two r-terms.",
          workingLatex: "2r - 4r = -2r",
          explanation:
            "Working through the r-family: 2 - 4 = -2, giving -2r.",
        },
        {
          stepNumber: 7,
          description: "Add the remaining r-term.",
          workingLatex: "-2r + 3r = r",
          explanation:
            "Now bring in the +3r: -2 + 3 = 1, giving 1r = r.",
        },
        {
          stepNumber: 8,
          description: "Write the simplified expression.",
          workingLatex: "7p - 4q + r",
          explanation:
            "The three families are unlike, so write their sum. Check with p=q=r=1: original 4-3+2-5+1-4+8-2+3=4; answer 7-4+1=4. Correct.",
        },
      ],
      finalAnswer: "\\(7p - 4q + r\\)",
      canonicalAnswer: "7p-4q+r",
    },
  },
];
