/**
 * Topic: Algebraic notation and conventions
 * Ref:   ga01
 * Strand: Algebra (GCSE Maths)  |  DfE reference: A1
 *
 * What this bank covers:
 *   Using and interpreting algebraic notation and the conventions that govern it:
 *     - writing products without the multiplication sign (ab for a×b),
 *     - repeated addition as a coefficient (3y for y+y+y),
 *     - index notation for repeated multiplication (a² for a×a, a²b for a×a×b),
 *     - division written as a fraction (a/b for a÷b),
 *     - coefficients and the "number before letter" convention (3y not y3),
 *     - alphabetical ordering of letters (ab not ba),
 *     - brackets and interpreting expressions written in correct notation,
 *     - translating worded instructions ("3 lots of n", "the square of x",
 *       "y less than x") into algebra,
 *     - spotting and correcting badly written notation.
 *   Strictly NOTATION & CONVENTIONS — NOT solving equations, NOT collecting
 *   like terms, NOT substitution.
 *
 * Difficulty split (30 total):
 *   - Foundation: 12  (ga01-001 .. ga01-012)  single-convention tasks
 *   - Standard:   10  (ga01-013 .. ga01-022)  combine 2 conventions
 *   - Challenge:   8  (ga01-023 .. ga01-030)  multi-convention / interpret / reason
 *   Id range: ga01-001 .. ga01-030
 *
 * LaTeX note:
 *   - Prose maths (questionText, finalAnswer) is wrapped in \\( ... \\).
 *     Display fractions in the STEM use \\dfrac.
 *   - workingLatex is RAW LaTeX (NOT wrapped in \\(...\\) or $...$).
 *     Fractions in steps use \\frac (NOT \\tfrac) — hard project rule.
 *   - Multiplication signs use \\times.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ----------------------------------------------------------------------
  // FOUNDATION (ga01-001 .. ga01-012)
  // ----------------------------------------------------------------------
  {
    id: "ga01-001",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(a \\times a \\times a\\) using index notation.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["index notation", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise this as repeated multiplication.",
          workingLatex: "a \\times a \\times a",
          explanation:
            "Index notation is shorthand for a letter multiplied by itself over and over. Before counting anything, notice that every factor here is the same letter \\(a\\) joined by multiplication signs — that is exactly the situation a power is designed to compress.",
        },
        {
          stepNumber: 2,
          description: "Count how many times the letter appears.",
          workingLatex: "a \\times a \\times a \\quad (a \\text{ appears } 3 \\text{ times})",
          explanation:
            "The number of factors becomes the power, so the whole job is to count them. Reading left to right, \\(a\\) appears three times. That count of \\(3\\) is the piece of information we still need.",
        },
        {
          stepNumber: 3,
          description: "Write the base once with the count as the index.",
          workingLatex: "a \\times a \\times a = a^{3}",
          explanation:
            "Write the letter (the base) once, then put the count as a small raised number (the index): \\(a^{3}\\). A common slip is to write \\(3a\\) instead, but \\(3a\\) means \\(a+a+a\\) — repeated addition, not repeated multiplication.",
        },
      ],
      finalAnswer: "\\(a^{3}\\)",
      canonicalAnswer: "a^3",
    },
  },
  {
    id: "ga01-002",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(5 \\times y\\) without using a multiplication sign.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coefficient", "product notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the number and the letter.",
          workingLatex: "5 \\times y",
          explanation:
            "In algebra we leave out the \\(\\times\\) sign when a number multiplies a letter, because the \\(\\times\\) can be confused with the letter \\(x\\). First pick out the two parts being multiplied: the number \\(5\\) and the letter \\(y\\).",
        },
        {
          stepNumber: 2,
          description: "Write the number directly in front of the letter.",
          workingLatex: "5 \\times y = 5y",
          explanation:
            "Push the two parts together with the number first and no sign between them: \\(5y\\). The \\(5\\) sitting in front is called the coefficient. By convention the number always comes before the letter, so writing \\(y5\\) — even though it would have the same value — is not accepted notation.",
        },
      ],
      finalAnswer: "\\(5y\\)",
      canonicalAnswer: "5y",
    },
  },
  {
    id: "ga01-003",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(p \\div q\\) as a fraction.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["division", "fraction notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the dividend and the divisor.",
          workingLatex: "p \\div q",
          explanation:
            "A division can always be rewritten as a fraction, and the order in the division tells us which letter goes where. The quantity being divided — written first, before the \\(\\div\\) — is the dividend \\(p\\); the quantity we divide by is the divisor \\(q\\).",
        },
        {
          stepNumber: 2,
          description: "Put the dividend over the divisor.",
          workingLatex: "p \\div q = \\frac{p}{q}",
          explanation:
            "The dividend goes on top (the numerator) and the divisor goes underneath (the denominator), so \\(p \\div q\\) becomes \\(\\frac{p}{q}\\). Keep the order exactly as in the original: flipping it to \\(\\frac{q}{p}\\) gives the reciprocal, which is a different value.",
        },
      ],
      finalAnswer: "\\(\\dfrac{p}{q}\\)",
      canonicalAnswer: "p/q",
    },
  },
  {
    id: "ga01-004",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(n + n + n + n\\) using a coefficient.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coefficient", "repeated addition"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Count how many letters are added.",
          workingLatex: "n + n + n + n \\quad (4 \\text{ terms})",
          explanation:
            "Repeated addition of the same letter can be written more compactly using a coefficient. The count of terms becomes that coefficient, so first tally them: there are four lots of \\(n\\) joined by plus signs.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the repeated sum as a multiplication.",
          workingLatex: "n + n + n + n = 4 \\times n",
          explanation:
            "Adding four copies of the same thing is the same as multiplying that thing by \\(4\\). This is the key idea that links repeated addition to a coefficient: \\(n+n+n+n = 4 \\times n\\).",
        },
        {
          stepNumber: 3,
          description: "Write the coefficient in front of the letter.",
          workingLatex: "4 \\times n = 4n",
          explanation:
            "Drop the \\(\\times\\) and place the \\(4\\) in front: \\(4n\\). The \\(4\\) is the coefficient. Watch the contrast — repeated addition gives a coefficient (\\(4n\\)), whereas repeated multiplication would give a power (\\(n^{4}\\)); don't mix the two up.",
        },
      ],
      finalAnswer: "\\(4n\\)",
      canonicalAnswer: "4n",
    },
  },
  {
    id: "ga01-005",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(a \\times b\\) without a multiplication sign, in the correct order.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["product notation", "alphabetical order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Remove the multiplication sign.",
          workingLatex: "a \\times b = ab",
          explanation:
            "When two letters are multiplied we simply write them next to each other and drop the \\(\\times\\) sign, since two letters side by side already means \"multiply\". So \\(a \\times b\\) becomes \\(ab\\).",
        },
        {
          stepNumber: 2,
          description: "Check the letters are in alphabetical order.",
          workingLatex: "ab \\quad (a \\text{ before } b)",
          explanation:
            "By convention the letters in a term are written in alphabetical order. Here \\(a\\) already comes before \\(b\\), so no rearranging is needed and \\(ab\\) is the finished form. Writing \\(ba\\) would have the same value but is not the conventional way to present it.",
        },
      ],
      finalAnswer: "\\(ab\\)",
      canonicalAnswer: "ab",
    },
  },
  {
    id: "ga01-006",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(x \\times x\\) using index notation.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["index notation", "squares"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Count the repeated factors.",
          workingLatex: "x \\times x \\quad (x \\text{ appears } 2 \\text{ times})",
          explanation:
            "Index notation collapses repeated multiplication into a base and a power, with the power equal to the number of factors. Count them here: the letter \\(x\\) appears twice.",
        },
        {
          stepNumber: 2,
          description: "Write the base with index 2.",
          workingLatex: "x \\times x = x^{2}",
          explanation:
            "Two factors of \\(x\\) multiplied together is written \\(x^{2}\\), read as \"\\(x\\) squared\". The index \\(2\\) records how many times \\(x\\) is used as a factor. Don't confuse this with \\(2x\\), which would mean \\(x+x\\).",
        },
      ],
      finalAnswer: "\\(x^{2}\\)",
      canonicalAnswer: "x^2",
    },
  },
  {
    id: "ga01-007",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(3 \\times m\\) in correct algebraic notation.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coefficient", "product notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the number and the letter.",
          workingLatex: "3 \\times m",
          explanation:
            "A number multiplied by a letter is written without the \\(\\times\\) sign. Identify the two parts being multiplied: the number \\(3\\) and the letter \\(m\\).",
        },
        {
          stepNumber: 2,
          description: "Write the number as the coefficient.",
          workingLatex: "3 \\times m = 3m",
          explanation:
            "Place the number directly in front of the letter, with no sign between them, to get \\(3m\\). The \\(3\\) is the coefficient and, by convention, always goes first — \\(m3\\) is not accepted notation.",
        },
      ],
      finalAnswer: "\\(3m\\)",
      canonicalAnswer: "3m",
    },
  },
  {
    id: "ga01-008",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(t \\div 4\\) as a fraction.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["division", "fraction notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify what is being divided.",
          workingLatex: "t \\div 4",
          explanation:
            "Division turns into a fraction, and the order in the division decides top from bottom. Here the letter \\(t\\) comes first, so it is the dividend (what is being divided), and \\(4\\) is the divisor (what we divide by).",
        },
        {
          stepNumber: 2,
          description: "Put the dividend over the divisor.",
          workingLatex: "t \\div 4 = \\frac{t}{4}",
          explanation:
            "The dividend \\(t\\) goes on top and the divisor \\(4\\) underneath, giving \\(\\frac{t}{4}\\). Writing \\(\\frac{4}{t}\\) would reverse the meaning into \\(4 \\div t\\), so keep the order matching the original division.",
        },
      ],
      finalAnswer: "\\(\\dfrac{t}{4}\\)",
      canonicalAnswer: "t/4",
    },
  },
  {
    id: "ga01-009",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \"three lots of \\(n\\)\" in algebraic notation.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["worded translation", "coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read 'lots of' as multiplication.",
          workingLatex: "3 \\times n",
          explanation:
            "The phrase \"three lots of \\(n\\)\" means three copies of \\(n\\) combined, which is the same as \\(3 \\times n\\). \"Lots of\" (like \"times\" or \"the product of\") is a multiplication word, so the worded instruction becomes a multiplication.",
        },
        {
          stepNumber: 2,
          description: "Write it with the coefficient, no sign.",
          workingLatex: "3 \\times n = 3n",
          explanation:
            "Drop the \\(\\times\\) and write the number directly in front of the letter: \\(3n\\). The number \\(3\\) is the coefficient and goes first by convention.",
        },
      ],
      finalAnswer: "\\(3n\\)",
      canonicalAnswer: "3n",
    },
  },
  {
    id: "ga01-010",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \"the square of \\(x\\)\" in algebraic notation.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["worded translation", "index notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what squaring means.",
          workingLatex: "x \\times x",
          explanation:
            "To square a quantity is to multiply it by itself. So \"the square of \\(x\\)\" means \\(x\\) multiplied by \\(x\\), that is \\(x \\times x\\) — not \\(x\\) multiplied by \\(2\\).",
        },
        {
          stepNumber: 2,
          description: "Write it using an index.",
          workingLatex: "x \\times x = x^{2}",
          explanation:
            "Two factors of \\(x\\) is written \\(x^{2}\\), with the index \\(2\\) recording the two factors. Be careful not to write \\(2x\\): that means \\(x+x\\) (double \\(x\\)), which is addition, not \\(x\\) squared.",
        },
      ],
      finalAnswer: "\\(x^{2}\\)",
      canonicalAnswer: "x^2",
    },
  },
  {
    id: "ga01-011",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(7 \\times c \\times d\\) without multiplication signs.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coefficient", "alphabetical order", "product notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the number and the letters.",
          workingLatex: "7 \\times c \\times d",
          explanation:
            "Pick out the parts of this product: the number \\(7\\) and the two letters \\(c\\) and \\(d\\). The number will become the coefficient and the letters will sit side by side.",
        },
        {
          stepNumber: 2,
          description: "Drop the multiplication signs.",
          workingLatex: "7 \\times c \\times d = 7cd",
          explanation:
            "Remove every \\(\\times\\) and write the factors next to one another. The coefficient \\(7\\) goes first, then the letters, giving \\(7cd\\).",
        },
        {
          stepNumber: 3,
          description: "Check the letters are alphabetical.",
          workingLatex: "7cd \\quad (c \\text{ before } d)",
          explanation:
            "Confirm the letters run in alphabetical order: \\(c\\) comes before \\(d\\), so no rearranging is needed. The finished term is \\(7cd\\), with the number first and the letters in order.",
        },
      ],
      finalAnswer: "\\(7cd\\)",
      canonicalAnswer: "7cd",
    },
  },
  {
    id: "ga01-012",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write \\(y + y + y + y + y\\) using a coefficient.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["repeated addition", "coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Count how many y terms are added.",
          workingLatex: "y + y + y + y + y \\quad (5 \\text{ terms})",
          explanation:
            "This is repeated addition of the same letter, so it can be written with a coefficient equal to the number of terms. Tally them: there are five lots of \\(y\\) joined by plus signs.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the repeated sum as a multiplication.",
          workingLatex: "y + y + y + y + y = 5 \\times y",
          explanation:
            "Adding five copies of \\(y\\) is the same as multiplying \\(y\\) by \\(5\\). This is the step that turns the long sum into a single coefficient.",
        },
        {
          stepNumber: 3,
          description: "Write the coefficient in front of the letter.",
          workingLatex: "5 \\times y = 5y",
          explanation:
            "Drop the \\(\\times\\) to get \\(5y\\); the coefficient \\(5\\) counts how many \\(y\\)'s were added. Adding gives a coefficient, not a power — \\(y^{5}\\) would mean \\(y\\) multiplied by itself five times, a completely different quantity.",
        },
      ],
      finalAnswer: "\\(5y\\)",
      canonicalAnswer: "5y",
    },
  },

  // ----------------------------------------------------------------------
  // STANDARD (ga01-013 .. ga01-022)
  // ----------------------------------------------------------------------
  {
    id: "ga01-013",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write \\(4 \\times y \\times y\\) in correct algebraic notation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coefficient", "index notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate the number from the repeated letter.",
          workingLatex: "4 \\times y \\times y = 4 \\times (y \\times y)",
          explanation:
            "This product mixes a coefficient (the \\(4\\)) with a repeated letter (the two \\(y\\)'s), so deal with each convention in turn. Group the two \\(y\\)'s together with a bracket and keep the \\(4\\) to one side, ready to become the coefficient.",
        },
        {
          stepNumber: 2,
          description: "Combine the repeated letter into a power.",
          workingLatex: "y \\times y = y^{2}",
          explanation:
            "The letter \\(y\\) appears twice as a factor, so it collapses to \\(y^{2}\\). Only the \\(y\\) is squared here — the \\(4\\) sits outside the bracket and is not part of the power.",
        },
        {
          stepNumber: 3,
          description: "Attach the coefficient in front.",
          workingLatex: "4 \\times y \\times y = 4y^{2}",
          explanation:
            "Write the coefficient \\(4\\) directly in front of \\(y^{2}\\) to get \\(4y^{2}\\). Read this carefully: \\(4y^{2}\\) means \\(4 \\times (y^{2})\\); it does not mean \\((4y)^{2}\\), which would square the \\(4\\) as well and give \\(16y^{2}\\).",
        },
      ],
      finalAnswer: "\\(4y^{2}\\)",
      canonicalAnswer: "4y^2",
    },
  },
  {
    id: "ga01-014",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write \\(3 \\times a \\div b\\) in correct algebraic notation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coefficient", "fraction notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the product of the number and the first letter.",
          workingLatex: "3 \\times a = 3a",
          explanation:
            "Multiplication and division have equal priority, so work left to right. First handle the multiplication: \\(3 \\times a\\) becomes \\(3a\\) by writing the coefficient in front of the letter.",
        },
        {
          stepNumber: 2,
          description: "Write the division by b as a fraction.",
          workingLatex: "3a \\div b = \\frac{3a}{b}",
          explanation:
            "Now apply the remaining division: \\(3a \\div b\\) becomes the fraction \\(\\frac{3a}{b}\\), with the whole product \\(3a\\) on top (because it is what gets divided) and \\(b\\) underneath. The coefficient \\(3\\) stays attached to \\(a\\) in the numerator — it does not slip under the line.",
        },
      ],
      finalAnswer: "\\(\\dfrac{3a}{b}\\)",
      canonicalAnswer: "3a/b",
    },
  },
  {
    id: "ga01-015",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write the product of \\(7\\) and \\((x + 2)\\) in correct algebraic notation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["brackets", "product notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read 'product' as multiplication.",
          workingLatex: "7 \\times (x + 2)",
          explanation:
            "\"Product\" is a multiplication word, so we want \\(7\\) multiplied by the whole expression \\((x + 2)\\). The bracket keeps \\(x+2\\) bundled together as a single quantity to be multiplied.",
        },
        {
          stepNumber: 2,
          description: "Drop the multiplication sign, keep the bracket.",
          workingLatex: "7 \\times (x + 2) = 7(x + 2)",
          explanation:
            "When a number multiplies a bracket we simply write them next to each other: \\(7(x + 2)\\). The bracket must stay in place — without it, \\(7x+2\\) would multiply only the \\(x\\) and leave the \\(2\\) untouched, which is a different expression entirely. Don't expand the bracket; the question only asks for correct notation.",
        },
      ],
      finalAnswer: "\\(7(x + 2)\\)",
      canonicalAnswer: "7(x+2)",
    },
  },
  {
    id: "ga01-016",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Translate \"\\(y\\) less than \\(x\\)\" into algebraic notation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["worded translation", "subtraction order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide what you start from.",
          workingLatex: "x",
          explanation:
            "\"\\(y\\) less than \\(x\\)\" describes a number that is \\(y\\) below \\(x\\), so we begin with \\(x\\) and take an amount away from it. The quantity we start from — the one being reduced — is \\(x\\).",
        },
        {
          stepNumber: 2,
          description: "Subtract the stated amount.",
          workingLatex: "x - y",
          explanation:
            "We remove \\(y\\) from \\(x\\), giving \\(x - y\\). The order is the trap here: \"\\(y\\) less than \\(x\\)\" is \\(x - y\\), not \\(y - x\\). The phrase tells you the result is smaller than \\(x\\), so \\(x\\) must come first and \\(y\\) is subtracted from it.",
        },
      ],
      finalAnswer: "\\(x - y\\)",
      canonicalAnswer: "x-y",
    },
  },
  {
    id: "ga01-017",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A student writes \\(y3\\) to mean three times \\(y\\). Write this correctly and state the convention they broke.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correct the error", "coefficient", "convention"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the intended meaning.",
          workingLatex: "y3 \\;\\rightarrow\\; 3 \\times y",
          explanation:
            "The student means \"three times \\(y\\)\", which is \\(3 \\times y\\). The value they intend is perfectly fine — only the way they have laid it out is wrong, so we focus on the notation rather than the arithmetic.",
        },
        {
          stepNumber: 2,
          description: "Rewrite with the coefficient in front.",
          workingLatex: "3 \\times y = 3y",
          explanation:
            "By convention the number (the coefficient) is written before the letter, so the correct form is \\(3y\\), not \\(y3\\). Putting the number after the letter is exactly the convention they broke: the coefficient must come first.",
        },
      ],
      finalAnswer:
        "\\(3y\\); the broken convention is that the number (coefficient) must come before the letter.",
      canonicalAnswer: "3y",
    },
  },
  {
    id: "ga01-018",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A student writes \\(ba\\) for the product of \\(a\\) and \\(b\\). Rewrite it in standard form and name the convention.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correct the error", "alphabetical order", "convention"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise ba and ab are the same product.",
          workingLatex: "ba = b \\times a = a \\times b",
          explanation:
            "Multiplication can be done in any order — this is the commutative law — so \\(b \\times a\\) equals \\(a \\times b\\). That means the student's value is not wrong: \\(ba\\) and \\(ab\\) are equal. The issue is purely how the term is presented.",
        },
        {
          stepNumber: 2,
          description: "Reorder the letters alphabetically.",
          workingLatex: "ba \\;\\rightarrow\\; ab",
          explanation:
            "The convention is to write the letters of a term in alphabetical order, so we swap them to write \\(ab\\) rather than \\(ba\\). The convention being applied here is alphabetical ordering of letters within a term.",
        },
      ],
      finalAnswer: "\\(ab\\); the convention is alphabetical ordering of letters within a term.",
      canonicalAnswer: "ab",
    },
  },
  {
    id: "ga01-019",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write \"\\(6\\) divided by \\(n\\)\" in algebraic notation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["worded translation", "fraction notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the dividend and divisor.",
          workingLatex: "6 \\div n",
          explanation:
            "\"\\(6\\) divided by \\(n\\)\" tells us \\(6\\) is the dividend (what is being divided) and \\(n\\) is the divisor (what we divide by). The word order matches the division order, so it reads straight off as \\(6 \\div n\\).",
        },
        {
          stepNumber: 2,
          description: "Write it as a fraction.",
          workingLatex: "6 \\div n = \\frac{6}{n}",
          explanation:
            "Put the dividend on top and the divisor underneath: \\(\\frac{6}{n}\\). Be careful with the order — \\(\\frac{n}{6}\\) would mean \"\\(n\\) divided by \\(6\\)\", the reverse of what the words say.",
        },
      ],
      finalAnswer: "\\(\\dfrac{6}{n}\\)",
      canonicalAnswer: "6/n",
    },
  },
  {
    id: "ga01-020",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write \\(2 \\times p \\times p \\times p\\) in correct algebraic notation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coefficient", "index notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate the coefficient from the repeated letter.",
          workingLatex: "2 \\times p \\times p \\times p = 2 \\times (p \\times p \\times p)",
          explanation:
            "Two conventions are in play: a coefficient and a power. Keep the number \\(2\\) to one side and bracket the three \\(p\\) factors together, so the coefficient and the power can be dealt with one at a time.",
        },
        {
          stepNumber: 2,
          description: "Write the three p factors as a power.",
          workingLatex: "p \\times p \\times p = p^{3}",
          explanation:
            "The letter \\(p\\) appears three times as a factor, so the bracket collapses to \\(p^{3}\\). Only \\(p\\) is raised to the power — the coefficient \\(2\\) sits outside the bracket and is untouched.",
        },
        {
          stepNumber: 3,
          description: "Place the coefficient in front of the power.",
          workingLatex: "2 \\times p \\times p \\times p = 2p^{3}",
          explanation:
            "Write the coefficient \\(2\\) in front of \\(p^{3}\\) to get \\(2p^{3}\\). This means \\(2 \\times p^{3}\\); it is not \\((2p)^{3}\\), which would cube the \\(2\\) as well and equal \\(8p^{3}\\). The absence of a bracket round \\(2p\\) is what keeps the \\(2\\) out of the power.",
        },
      ],
      finalAnswer: "\\(2p^{3}\\)",
      canonicalAnswer: "2p^3",
    },
  },
  {
    id: "ga01-021",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Write \\(a \\times a \\times b\\) in correct algebraic notation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["index notation", "alphabetical order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group the repeated letter separately.",
          workingLatex: "a \\times a \\times b = (a \\times a) \\times b",
          explanation:
            "Scan the product: the letter \\(a\\) is repeated but \\(b\\) appears only once. Bracket the two \\(a\\)'s together so we can turn them into a power, while leaving \\(b\\) on its own.",
        },
        {
          stepNumber: 2,
          description: "Write the two a factors as a power.",
          workingLatex: "a \\times a = a^{2}",
          explanation:
            "Two factors of \\(a\\) become \\(a^{2}\\). The single \\(b\\) gets no written power, because it appears once — a letter standing alone has an unwritten index of \\(1\\), so we leave it as just \\(b\\).",
        },
        {
          stepNumber: 3,
          description: "Write the power then the letter, alphabetically.",
          workingLatex: "a \\times a \\times b = a^{2}b",
          explanation:
            "Combine the pieces to get \\(a^{2}b\\). The letters are already in alphabetical order (\\(a\\) before \\(b\\)), so no reordering is needed. Note the index \\(2\\) belongs to \\(a\\) only, not to \\(b\\).",
        },
      ],
      finalAnswer: "\\(a^{2}b\\)",
      canonicalAnswer: "a^2b",
    },
  },
  {
    id: "ga01-022",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Translate \"\\(5\\) more than the product of \\(3\\) and \\(k\\)\" into algebraic notation.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["worded translation", "coefficient", "addition"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the product of 3 and k first.",
          workingLatex: "3 \\times k = 3k",
          explanation:
            "Break the phrase into parts and build the inner one first. \"The product of \\(3\\) and \\(k\\)\" means \\(3 \\times k\\), which we write as \\(3k\\) with the coefficient in front. Settle this before adding anything on.",
        },
        {
          stepNumber: 2,
          description: "Add 5 to that product.",
          workingLatex: "3k + 5",
          explanation:
            "\"\\(5\\) more than\" the product means add \\(5\\) to \\(3k\\), giving \\(3k + 5\\). The order of the words tells you the multiplication happens first and the \\(5\\) is tacked on afterwards — only \\(k\\) is multiplied by \\(3\\), not the whole \\(k+5\\), so no bracket is needed.",
        },
      ],
      finalAnswer: "\\(3k + 5\\)",
      canonicalAnswer: "3k+5",
    },
  },

  // ----------------------------------------------------------------------
  // CHALLENGE (ga01-023 .. ga01-030)
  // ----------------------------------------------------------------------
  {
    id: "ga01-023",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Write \\(2 \\times a \\times 3 \\times b\\) as simply as possible, justifying each step.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["multi-convention", "coefficient", "alphabetical order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group the numbers and the letters separately.",
          workingLatex: "2 \\times a \\times 3 \\times b = (2 \\times 3) \\times (a \\times b)",
          explanation:
            "Because multiplication can be done in any order (it is commutative and associative), we are free to rearrange the factors. The number \\(3\\) is currently stranded between the letters, so shuffle the numbers \\(2\\) and \\(3\\) together and the letters \\(a\\) and \\(b\\) together.",
        },
        {
          stepNumber: 2,
          description: "Multiply the numbers for the coefficient.",
          workingLatex: "2 \\times 3 = 6",
          explanation:
            "The two numbers multiply to give the single coefficient \\(6\\). A common slip is to leave a \\(2\\) and a \\(3\\) floating in the answer — they must be merged into one number at the front.",
        },
        {
          stepNumber: 3,
          description: "Combine the letters alphabetically.",
          workingLatex: "a \\times b = ab",
          explanation:
            "Drop the \\(\\times\\) between the letters and write them in alphabetical order: \\(ab\\). Here \\(a\\) already precedes \\(b\\), so they stay as they are.",
        },
        {
          stepNumber: 4,
          description: "Write the coefficient in front of the letters.",
          workingLatex: "2 \\times a \\times 3 \\times b = 6ab",
          explanation:
            "Put the coefficient \\(6\\) before \\(ab\\) to get \\(6ab\\). This single term used three conventions at once: combine the numbers into one coefficient, drop the \\(\\times\\) signs, and order the letters alphabetically.",
        },
      ],
      finalAnswer: "\\(6ab\\)",
      canonicalAnswer: "6ab",
    },
  },
  {
    id: "ga01-024",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The expression \\(5a^{2}b\\) is written in correct notation. Write it out fully as a product of separate factors.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["interpret notation", "index notation", "coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the coefficient, base and index.",
          workingLatex: "5a^{2}b",
          explanation:
            "Read the compact form part by part, since each piece unpacks differently. The \\(5\\) is the coefficient, \\(a^{2}\\) is a power of \\(a\\), and \\(b\\) is a single letter carrying an unwritten index of \\(1\\).",
        },
        {
          stepNumber: 2,
          description: "Expand the power into repeated factors.",
          workingLatex: "a^{2} = a \\times a",
          explanation:
            "The index \\(2\\) tells us \\(a\\) is used as a factor twice, so \\(a^{2} = a \\times a\\). Crucially the power applies only to \\(a\\), not to the coefficient \\(5\\) — there is no bracket round \\(5a\\) to drag the \\(5\\) into the power.",
        },
        {
          stepNumber: 3,
          description: "Reinsert all multiplication signs.",
          workingLatex: "5a^{2}b = 5 \\times a \\times a \\times b",
          explanation:
            "Put back every hidden \\(\\times\\): between the coefficient and the letters, between the two \\(a\\)'s, and before the \\(b\\). The \\(b\\), with its index of \\(1\\), simply appears once. The full product is \\(5 \\times a \\times a \\times b\\).",
        },
      ],
      finalAnswer: "\\(5 \\times a \\times a \\times b\\)",
      canonicalAnswer: "5*a*a*b",
    },
  },
  {
    id: "ga01-025",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Are \\(3a^{2}\\) and \\((3a)^{2}\\) the same? Write each as a product and give the correct simplified form of \\((3a)^{2}\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["equivalence", "brackets", "index notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand 3a² as a product.",
          workingLatex: "3a^{2} = 3 \\times a \\times a",
          explanation:
            "In \\(3a^{2}\\) the index \\(2\\) attaches only to the letter immediately beneath it, which is \\(a\\) — there is no bracket round the \\(3a\\). So only \\(a\\) is squared, and the \\(3\\) stays as a plain coefficient: \\(3a^{2} = 3 \\times a \\times a\\).",
        },
        {
          stepNumber: 2,
          description: "Expand (3a)² as a product.",
          workingLatex: "(3a)^{2} = (3a) \\times (3a) = 3 \\times a \\times 3 \\times a",
          explanation:
            "Here the bracket means the whole of \\(3a\\) is squared, so \\((3a)^{2}\\) is \\(3a\\) multiplied by \\(3a\\). Writing out each bracket as separate factors gives \\(3 \\times a \\times 3 \\times a\\). That bracket is the one detail that separates this from \\(3a^{2}\\).",
        },
        {
          stepNumber: 3,
          description: "Simplify (3a)² by collecting numbers and letters.",
          workingLatex:
            "3 \\times a \\times 3 \\times a = (3 \\times 3) \\times (a \\times a) = 9a^{2}",
          explanation:
            "Rearrange and group the numbers and the letters: \\(3 \\times 3 = 9\\) and \\(a \\times a = a^{2}\\), giving \\(9a^{2}\\). Squaring the bracket squares the coefficient as well as the letter — that is precisely where the \\(9\\) comes from.",
        },
        {
          stepNumber: 4,
          description: "Compare the two expressions.",
          workingLatex: "3a^{2} \\neq 9a^{2} \\quad\\Rightarrow\\quad 3a^{2} \\neq (3a)^{2}",
          explanation:
            "Line them up: \\(3a^{2}\\) has coefficient \\(3\\), but \\((3a)^{2} = 9a^{2}\\) has coefficient \\(9\\), so the two are not equal. The bracket decides whether the coefficient gets squared too — forgetting it is a very common slip.",
        },
      ],
      finalAnswer:
        "No — they are different; \\((3a)^{2} = 9a^{2}\\), whereas \\(3a^{2} = 3 \\times a \\times a\\).",
      canonicalAnswer: "9a^2",
    },
  },
  {
    id: "ga01-026",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A student writes \\(b2a \\times c\\) to mean two times \\(a\\), times \\(b\\), times \\(c\\). Rewrite it correctly and name every convention used.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["correct the error", "multi-convention", "alphabetical order"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate the intended meaning into a full product.",
          workingLatex: "2 \\times a \\times b \\times c",
          explanation:
            "Strip away the bad notation and write what the student actually means: two, times \\(a\\), times \\(b\\), times \\(c\\). That is \\(2 \\times a \\times b \\times c\\). The value they intend is fine — it is only the layout in \\(b2a \\times c\\) that is wrong.",
        },
        {
          stepNumber: 2,
          description: "Remove the multiplication signs.",
          workingLatex: "2 \\times a \\times b \\times c \\;\\rightarrow\\; 2abc",
          explanation:
            "Drop every \\(\\times\\) sign and write the factors side by side. This is the first convention: when factors are multiplied, the multiplication sign is omitted.",
        },
        {
          stepNumber: 3,
          description: "Place the coefficient first.",
          workingLatex: "2abc",
          explanation:
            "The number \\(2\\) is the coefficient, so by convention it sits at the very front of the term. The student's \\(b2a\\) broke this rule by burying the \\(2\\) between the letters.",
        },
        {
          stepNumber: 4,
          description: "Check the letters are alphabetical.",
          workingLatex: "2abc \\quad (a,\\,b,\\,c \\text{ in order})",
          explanation:
            "Finally confirm the letters run in alphabetical order: \\(a\\), then \\(b\\), then \\(c\\). The student's order was \\(b, a, c\\), which broke this third convention. With all three rules applied, the correct term is \\(2abc\\).",
        },
      ],
      finalAnswer:
        "\\(2abc\\); conventions: omit the \\(\\times\\) sign, coefficient (number) before letters, letters in alphabetical order.",
      canonicalAnswer: "2abc",
    },
  },
  {
    id: "ga01-027",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Translate into correct notation: \"the square of \\(x\\), divided by \\(2y\\)\".",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["worded translation", "index notation", "fraction notation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the square of x.",
          workingLatex: "x^{2}",
          explanation:
            "Take the phrase one clause at a time. \"The square of \\(x\\)\" means \\(x\\) multiplied by itself, written \\(x^{2}\\). This is the quantity that will sit on top of the fraction — the dividend.",
        },
        {
          stepNumber: 2,
          description: "Write the divisor 2y.",
          workingLatex: "2y = 2 \\times y",
          explanation:
            "Next, \"divided by \\(2y\\)\" tells us the divisor is \\(2y\\), which is \\(2\\) times \\(y\\) with the coefficient in front. The whole of \\(2y\\) — both the number and the letter together — is what we divide by.",
        },
        {
          stepNumber: 3,
          description: "Form the division as a fraction.",
          workingLatex: "x^{2} \\div 2y = \\frac{x^{2}}{2y}",
          explanation:
            "Put the dividend \\(x^{2}\\) on top and the divisor \\(2y\\) underneath, giving \\(\\frac{x^{2}}{2y}\\). The fraction bar acts as the division.",
        },
        {
          stepNumber: 4,
          description: "Confirm the whole 2y is in the denominator.",
          workingLatex: "\\frac{x^{2}}{2y}",
          explanation:
            "Check that both the \\(2\\) and the \\(y\\) sit below the line. Writing \\(\\frac{x^{2}}{2}y\\) would divide only by \\(2\\) and then multiply the result by \\(y\\) — a different expression. The single fraction bar groups \\(2y\\) together as one denominator.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x^{2}}{2y}\\)",
      canonicalAnswer: "x^2/(2y)",
    },
  },
  {
    id: "ga01-028",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Write \\(p \\times p \\times q \\times p \\times q\\) in correct algebraic notation.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["index notation", "alphabetical order", "multi-convention"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Count how many times each letter appears.",
          workingLatex: "p \\times p \\times q \\times p \\times q",
          explanation:
            "Scan the product and tally each letter separately, since the \\(p\\)'s and \\(q\\)'s are mixed up in the order. The letter \\(p\\) appears three times and \\(q\\) appears twice.",
        },
        {
          stepNumber: 2,
          description: "Group identical letters together.",
          workingLatex:
            "p \\times p \\times q \\times p \\times q = (p \\times p \\times p) \\times (q \\times q)",
          explanation:
            "Multiplication can be reordered freely, so gather the three \\(p\\)'s into one bracket and the two \\(q\\)'s into another. This sets up each group ready to become its own power.",
        },
        {
          stepNumber: 3,
          description: "Convert each group into a power.",
          workingLatex: "p \\times p \\times p = p^{3}, \\qquad q \\times q = q^{2}",
          explanation:
            "Three factors of \\(p\\) give \\(p^{3}\\), and two factors of \\(q\\) give \\(q^{2}\\). Each letter keeps its own separate index, recording how many of that letter were multiplied.",
        },
        {
          stepNumber: 4,
          description: "Write the powers in alphabetical order.",
          workingLatex: "p \\times p \\times q \\times p \\times q = p^{3}q^{2}",
          explanation:
            "Combine the two powers, writing the letters alphabetically: \\(p\\) before \\(q\\), giving \\(p^{3}q^{2}\\). Don't add the indices together into something like \\(p^{5}\\) — \\(p\\) and \\(q\\) are different letters, so they stay as separate powers.",
        },
      ],
      finalAnswer: "\\(p^{3}q^{2}\\)",
      canonicalAnswer: "p^3q^2",
    },
  },
  {
    id: "ga01-029",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Translate into correct notation: \"add \\(4\\) to \\(n\\), then multiply the result by \\(m\\)\".",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["worded translation", "brackets", "order of operations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Carry out the first instruction: add 4 to n.",
          workingLatex: "n + 4",
          explanation:
            "Follow the instructions in the order they are given. The first says add \\(4\\) to \\(n\\), which gives \\(n + 4\\).",
        },
        {
          stepNumber: 2,
          description: "Wrap the result in a bracket.",
          workingLatex: "(n + 4)",
          explanation:
            "The next instruction multiplies \"the result\" — and the result is the whole of \\(n+4\\), not just part of it. To keep both pieces together when the multiplication is applied, enclose them in a bracket: \\((n + 4)\\).",
        },
        {
          stepNumber: 3,
          description: "Multiply the bracket by m.",
          workingLatex: "(n + 4) \\times m",
          explanation:
            "Now multiply the bracketed result by \\(m\\): \\((n + 4) \\times m\\). The bracket guarantees both \\(n\\) and \\(4\\) are multiplied by \\(m\\), rather than \\(m\\) attaching to only the \\(4\\).",
        },
        {
          stepNumber: 4,
          description: "Tidy with the letter in front.",
          workingLatex: "(n + 4) \\times m = m(n + 4)",
          explanation:
            "Drop the \\(\\times\\) and, by convention, write the single letter in front of the bracket: \\(m(n + 4)\\). Keep the bracket — without it, \\(mn+4\\) would multiply only \\(n\\) by \\(m\\) and leave the \\(4\\) loose, a different expression.",
        },
      ],
      finalAnswer: "\\(m(n + 4)\\)",
      canonicalAnswer: "m(n+4)",
    },
  },
  {
    id: "ga01-030",
    topicRef: "ga01",
    topicTitle: "Algebraic notation and conventions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Two students write the same answer as \\(\\dfrac{ab}{2}\\) and \\(\\dfrac{1}{2}ab\\). Are these the same? Write the expression as a product to decide.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["equivalence", "fraction notation", "coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the first form as a division.",
          workingLatex: "\\frac{ab}{2} = (a \\times b) \\div 2",
          explanation:
            "Unpack each form into a plain product so they can be compared fairly. The fraction \\(\\frac{ab}{2}\\) means the product \\(ab\\) sitting over \\(2\\), i.e. \\(ab\\) divided by \\(2\\), which written out is \\((a \\times b) \\div 2\\).",
        },
        {
          stepNumber: 2,
          description: "Interpret the second form as a product.",
          workingLatex: "\\frac{1}{2}ab = \\frac{1}{2} \\times a \\times b",
          explanation:
            "The expression \\(\\frac{1}{2}ab\\) has \\(\\frac{1}{2}\\) sitting in front as a fractional coefficient, so it means \\(\\frac{1}{2} \\times a \\times b\\). A coefficient is allowed to be a fraction, not just a whole number.",
        },
        {
          stepNumber: 3,
          description: "Show dividing by 2 equals multiplying by one half.",
          workingLatex:
            "(a \\times b) \\div 2 = (a \\times b) \\times \\frac{1}{2} = \\frac{1}{2} \\times a \\times b",
          explanation:
            "Dividing by \\(2\\) is the same as multiplying by its reciprocal \\(\\frac{1}{2}\\). Applying that to the first form turns it into \\((a \\times b) \\times \\frac{1}{2}\\), which rearranges into exactly the second form, \\(\\frac{1}{2} \\times a \\times b\\).",
        },
        {
          stepNumber: 4,
          description: "State the conclusion.",
          workingLatex: "\\frac{ab}{2} = \\frac{1}{2}ab",
          explanation:
            "Since both forms reduce to the same product \\(\\frac{1}{2} \\times a \\times b\\), they are equal. The two students have simply written the same value in two equally valid ways — neither is wrong.",
        },
      ],
      finalAnswer:
        "Yes — both equal \\(\\tfrac{1}{2}\\) of \\(ab\\); \\(\\dfrac{ab}{2} = \\dfrac{1}{2}ab\\).",
      canonicalAnswer: "ab/2",
    },
  },
];
