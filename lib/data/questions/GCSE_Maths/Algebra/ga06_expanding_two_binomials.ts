/**
 * Topic: Expanding two binomials
 * Ref: ga06  (DfE A4)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: expanding the product of two binomials using FOIL / the grid
 *   method to obtain a quadratic (expanded trinomial). Clusters:
 *     (1) (x+a)(x+b) with both constants positive;
 *     (2) negative constants, e.g. (x-3)(x+5), (x-2)(x-7);
 *     (3) perfect squares (x+a)^2 and (x-a)^2 — emphasising the doubled
 *         middle term and explicitly warning that (x+a)^2 ≠ x^2 + a^2;
 *     (4) leading coefficients (ax+b)(cx+d), e.g. (2x+3)(x-4), (3x-1)(2x+5);
 *     (5) two variables, e.g. (x+y)(x-2y).
 *   A small number of difference-of-two-squares forms appear but are always
 *   expanded fully via FOIL (DOTS has its own dedicated bank).
 *
 * Difficulty split (30 total):
 *   - Foundation: ga06-001 .. ga06-004  (4)
 *   - Standard:   ga06-005 .. ga06-018  (14)
 *   - Challenge:  ga06-019 .. ga06-030  (12)
 * Id range: ga06-001 .. ga06-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot
 *   for multiplication (never \\times or *), per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga06-001",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+2)(x+3)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding two binomials", "FOIL", "positive constants"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up FOIL: each term times each term.",
          workingLatex:
            "(x+2)(x+3) = \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot 3}_{\\text{Outer}} + \\underbrace{2 \\cdot x}_{\\text{Inner}} + \\underbrace{2 \\cdot 3}_{\\text{Last}}",
          explanation:
            "FOIL stands for First, Outer, Inner, Last — the four products you get when each of the two terms in the left bracket multiplies each of the two terms in the right bracket. Writing all four down before working any out guarantees you don't accidentally miss one.",
        },
        {
          stepNumber: 2,
          description: "Work out the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The First product multiplies the two leading x's together. Multiplying a letter by itself gives a square, so x \\cdot x = x^2 — this becomes the leading term of the answer.",
        },
        {
          stepNumber: 3,
          description: "Work out the Outer product.",
          workingLatex: "x \\cdot 3 = 3x",
          explanation:
            "The Outer product multiplies the two outermost terms, the x on the far left and the 3 on the far right. Three lots of x is 3x, and it is positive because both terms are positive.",
        },
        {
          stepNumber: 4,
          description: "Work out the Inner product.",
          workingLatex: "2 \\cdot x = 2x",
          explanation:
            "The Inner product multiplies the two innermost terms, the 2 and the x sitting next to each other in the middle. Two lots of x is 2x.",
        },
        {
          stepNumber: 5,
          description: "Work out the Last product.",
          workingLatex: "2 \\cdot 3 = 6",
          explanation:
            "The Last product multiplies the final term of each bracket, 2 and 3, giving the constant 6. With no x attached, this is just a plain number.",
        },
        {
          stepNumber: 6,
          description: "Write the four products in a line.",
          workingLatex: "= x^2 + 3x + 2x + 6",
          explanation:
            "Collecting the four pieces gives the unsimplified expansion. The two middle terms, 3x and 2x, are both a number of x's, so they are like terms still waiting to be combined.",
        },
        {
          stepNumber: 7,
          description: "Collect the two like terms in x.",
          workingLatex: "= x^2 + 5x + 6",
          explanation:
            "3x and 2x add to 5x. Quick check: at x = 1 the original is (1+2)(1+3) = 3 \\cdot 4 = 12, and 1 + 5 + 6 = 12. They agree.",
        },
      ],
      finalAnswer: "\\(x^2 + 5x + 6\\)",
      canonicalAnswer: "x^2+5x+6",
    },
  },
  {
    id: "ga06-002",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+4)(x+1)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding two binomials", "FOIL", "positive constants"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the four FOIL products.",
          workingLatex:
            "(x+4)(x+1) = \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot 1}_{\\text{Outer}} + \\underbrace{4 \\cdot x}_{\\text{Inner}} + \\underbrace{4 \\cdot 1}_{\\text{Last}}",
          explanation:
            "Each term in (x+4) multiplies each term in (x+1), giving four products. Keeping the First/Outer/Inner/Last labels in view is the safest way to make sure none is forgotten.",
        },
        {
          stepNumber: 2,
          description: "Work out the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "Multiplying the two leading x's gives x^2, the squared term that will lead the answer.",
        },
        {
          stepNumber: 3,
          description: "Work out the Outer product.",
          workingLatex: "x \\cdot 1 = x",
          explanation:
            "Multiplying x by 1 leaves it unchanged, so the Outer product is just x. A common slip is to write 0 here, but multiplying by 1 never removes a term.",
        },
        {
          stepNumber: 4,
          description: "Work out the Inner product.",
          workingLatex: "4 \\cdot x = 4x",
          explanation:
            "The Inner product multiplies the 4 by the x to give 4x, four lots of x.",
        },
        {
          stepNumber: 5,
          description: "Work out the Last product.",
          workingLatex: "4 \\cdot 1 = 4",
          explanation:
            "The Last product is 4 \\cdot 1 = 4. Again, multiplying by 1 leaves the 4 unchanged, giving the constant term.",
        },
        {
          stepNumber: 6,
          description: "Write the four products in a line.",
          workingLatex: "= x^2 + x + 4x + 4",
          explanation:
            "Lining up all four products gives the expansion before simplifying. The two terms in x, namely x and 4x, sit in the middle ready to be combined.",
        },
        {
          stepNumber: 7,
          description: "Combine the like terms x and 4x.",
          workingLatex: "= x^2 + 5x + 4",
          explanation:
            "x + 4x = 5x (think of x as 1x). Check at x = 2: (2+4)(2+1) = 6 \\cdot 3 = 18, and 4 + 10 + 4 = 18. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 + 5x + 4\\)",
      canonicalAnswer: "x^2+5x+4",
    },
  },
  {
    id: "ga06-003",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+5)(x+2)\\) using a grid (multiplication table).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding two binomials", "grid method", "positive constants"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Draw a 2-by-2 grid with the bracket terms as headings.",
          workingLatex:
            "\\begin{array}{c|cc} \\cdot & x & +5 \\\\ \\hline x & & \\\\ +2 & & \\end{array}",
          explanation:
            "The grid method splits one bracket across the columns (x and +5) and the other down the rows (x and +2). Each empty cell will hold the product of its row heading and column heading.",
        },
        {
          stepNumber: 2,
          description: "Fill the top row: x times each column.",
          workingLatex:
            "\\begin{array}{c|cc} \\cdot & x & +5 \\\\ \\hline x & x^2 & 5x \\\\ +2 & & \\end{array}",
          explanation:
            "The top row uses the heading x: x \\cdot x = x^2 in the first column, and x \\cdot 5 = 5x in the second. Doing one row at a time keeps the bookkeeping clean.",
        },
        {
          stepNumber: 3,
          description: "Fill the bottom row: +2 times each column.",
          workingLatex:
            "\\begin{array}{c|cc} \\cdot & x & +5 \\\\ \\hline x & x^2 & 5x \\\\ +2 & 2x & 10 \\end{array}",
          explanation:
            "The bottom row uses the heading 2: 2 \\cdot x = 2x and 2 \\cdot 5 = 10. These four cells are exactly the same four multiplications as FOIL, just arranged in a table.",
        },
        {
          stepNumber: 4,
          description: "Add up all four cells of the grid.",
          workingLatex: "= x^2 + 5x + 2x + 10",
          explanation:
            "Collecting every entry from the grid gives the full expansion before simplifying. The two x-terms, 5x and 2x, are still separate.",
        },
        {
          stepNumber: 5,
          description: "Collect the like terms 5x and 2x.",
          workingLatex: "= x^2 + 7x + 10",
          explanation:
            "5x + 2x = 7x. Check at x = 1: (1+5)(1+2) = 6 \\cdot 3 = 18, and 1 + 7 + 10 = 18. Correct.",
        },
      ],
      finalAnswer: "\\(x^2 + 7x + 10\\)",
      canonicalAnswer: "x^2+7x+10",
    },
  },
  {
    id: "ga06-004",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+6)(x+1)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding two binomials", "FOIL", "positive constants"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the four FOIL products.",
          workingLatex:
            "(x+6)(x+1) = \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot 1}_{\\text{Outer}} + \\underbrace{6 \\cdot x}_{\\text{Inner}} + \\underbrace{6 \\cdot 1}_{\\text{Last}}",
          explanation:
            "Multiply each term of the first bracket by each term of the second. Tracking First/Outer/Inner/Last stops you from forgetting one of the four products.",
        },
        {
          stepNumber: 2,
          description: "Work out the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two leading x's multiply to x^2, the squared term of the answer.",
        },
        {
          stepNumber: 3,
          description: "Work out the Outer product.",
          workingLatex: "x \\cdot 1 = x",
          explanation:
            "Multiplying x by 1 changes nothing, so the Outer product is x. Don't be tempted to drop it — multiplying by 1 keeps the term.",
        },
        {
          stepNumber: 4,
          description: "Work out the Inner product.",
          workingLatex: "6 \\cdot x = 6x",
          explanation:
            "The Inner product is 6 \\cdot x = 6x, six lots of x.",
        },
        {
          stepNumber: 5,
          description: "Work out the Last product.",
          workingLatex: "6 \\cdot 1 = 6",
          explanation:
            "The Last product is 6 \\cdot 1 = 6, the constant term of the answer.",
        },
        {
          stepNumber: 6,
          description: "Write the four products in a line.",
          workingLatex: "= x^2 + x + 6x + 6",
          explanation:
            "Lining up the four products gives the unsimplified expansion, with the two x-terms x and 6x in the middle.",
        },
        {
          stepNumber: 7,
          description: "Collect the middle like terms.",
          workingLatex: "= x^2 + 7x + 6",
          explanation:
            "x + 6x = 7x. Check at x = 1: (1+6)(1+1) = 7 \\cdot 2 = 14, and 1 + 7 + 6 = 14. Correct.",
        },
      ],
      finalAnswer: "\\(x^2 + 7x + 6\\)",
      canonicalAnswer: "x^2+7x+6",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga06-005",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-3)(x+5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "FOIL", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach the minus sign to the 3.",
          workingLatex: "(x-3)(x+5) = (x + (-3))(x + 5)",
          explanation:
            "The minus sign belongs to the 3, so the first bracket really contains the terms x and -3. Treating the sign as glued to its number is the single best way to avoid sign slips in FOIL.",
        },
        {
          stepNumber: 2,
          description: "Write out the four FOIL products with signs.",
          workingLatex:
            "= \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot 5}_{\\text{Outer}} + \\underbrace{(-3) \\cdot x}_{\\text{Inner}} + \\underbrace{(-3) \\cdot 5}_{\\text{Last}}",
          explanation:
            "Both the Inner and Last products involve -3, so both will come out negative. This is exactly where sign errors creep in, so the signs are kept explicit in brackets.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two leading x's are both positive, so the First product is simply x^2.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer product.",
          workingLatex: "x \\cdot 5 = 5x",
          explanation:
            "A positive x times a positive 5 gives +5x, the first of the two middle terms.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Inner product.",
          workingLatex: "(-3) \\cdot x = -3x",
          explanation:
            "A negative times a positive is negative, so the Inner product is -3x. The minus comes straight from the -3.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the Last product.",
          workingLatex: "(-3) \\cdot 5 = -15",
          explanation:
            "Negative 3 times positive 5 is -15, the constant term. It stays negative because only one of the two factors is negative.",
        },
        {
          stepNumber: 7,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 + 5x - 3x - 15",
          explanation:
            "Lining up the four results gives the expansion before collecting. The middle terms are +5x and -3x.",
        },
        {
          stepNumber: 8,
          description: "Collect the like terms 5x and -3x.",
          workingLatex: "= x^2 + 2x - 15",
          explanation:
            "5x - 3x = 2x. The -15 has nothing to combine with. Check at x = 1: (1-3)(1+5) = (-2) \\cdot 6 = -12, and 1 + 2 - 15 = -12. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 + 2x - 15\\)",
      canonicalAnswer: "x^2+2x-15",
    },
  },
  {
    id: "ga06-006",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-2)(x-7)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "FOIL", "two negative constants"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach each minus sign to its number.",
          workingLatex: "(x-2)(x-7) = (x + (-2))(x + (-7))",
          explanation:
            "Both constants are negative: the brackets contain x, -2 and x, -7. Carrying the minus signs along makes the four products unambiguous, especially the one where two negatives meet.",
        },
        {
          stepNumber: 2,
          description: "Write the four FOIL products.",
          workingLatex:
            "= \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot (-7)}_{\\text{Outer}} + \\underbrace{(-2) \\cdot x}_{\\text{Inner}} + \\underbrace{(-2) \\cdot (-7)}_{\\text{Last}}",
          explanation:
            "Notice the Last product multiplies two negatives — that result will be positive. The Outer and Inner each multiply one negative, so each will be negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two leading x's multiply to x^2, the leading term of the answer.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer product.",
          workingLatex: "x \\cdot (-7) = -7x",
          explanation:
            "A positive x times -7 gives -7x. One negative factor makes the product negative.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Inner product.",
          workingLatex: "(-2) \\cdot x = -2x",
          explanation:
            "Negative 2 times positive x is -2x, the second of the two middle terms.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the Last product.",
          workingLatex: "(-2) \\cdot (-7) = +14",
          explanation:
            "Negative times negative is positive, so (-2) \\cdot (-7) = +14 — a very common place to lose a mark by leaving it as -14.",
        },
        {
          stepNumber: 7,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 - 7x - 2x + 14",
          explanation:
            "Collecting the four results gives the expansion before simplifying. The two middle terms are both negative.",
        },
        {
          stepNumber: 8,
          description: "Collect the like terms -7x and -2x.",
          workingLatex: "= x^2 - 9x + 14",
          explanation:
            "-7x - 2x = -9x (the negatives add). Check at x = 1: (1-2)(1-7) = (-1)(-6) = 6, and 1 - 9 + 14 = 6. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 - 9x + 14\\)",
      canonicalAnswer: "x^2-9x+14",
    },
  },
  {
    id: "ga06-007",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+8)(x-3)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "FOIL", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach the minus sign to the 3.",
          workingLatex: "(x+8)(x-3) = (x + 8)(x + (-3))",
          explanation:
            "Only the second bracket has a negative term, -3. So just the products that use the -3 will come out negative.",
        },
        {
          stepNumber: 2,
          description: "List the four FOIL products.",
          workingLatex:
            "= \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot (-3)}_{\\text{Outer}} + \\underbrace{8 \\cdot x}_{\\text{Inner}} + \\underbrace{8 \\cdot (-3)}_{\\text{Last}}",
          explanation:
            "The Outer product x \\cdot (-3) and the Last product 8 \\cdot (-3) both contain the -3 and are therefore negative; the First and Inner products stay positive.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two leading x's give the squared term x^2.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer product.",
          workingLatex: "x \\cdot (-3) = -3x",
          explanation:
            "A positive x times -3 gives -3x, one of the two middle terms.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Inner product.",
          workingLatex: "8 \\cdot x = 8x",
          explanation:
            "Positive 8 times positive x is +8x, the other middle term.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the Last product.",
          workingLatex: "8 \\cdot (-3) = -24",
          explanation:
            "A positive 8 times a negative 3 is -24, the constant term.",
        },
        {
          stepNumber: 7,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 - 3x + 8x - 24",
          explanation:
            "Lining up the four results gives the expansion before collecting. The middle terms are -3x and +8x.",
        },
        {
          stepNumber: 8,
          description: "Collect the like terms -3x and 8x.",
          workingLatex: "= x^2 + 5x - 24",
          explanation:
            "-3x + 8x = 5x. Check at x = 1: (1+8)(1-3) = 9 \\cdot (-2) = -18, and 1 + 5 - 24 = -18. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 + 5x - 24\\)",
      canonicalAnswer: "x^2+5x-24",
    },
  },
  {
    id: "ga06-008",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+4)^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "perfect square", "common error"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite the square as two identical brackets.",
          workingLatex: "(x+4)^2 = (x+4)(x+4)",
          explanation:
            "A square means 'multiply the thing by itself'. WARNING: (x+4)^2 is NOT x^2 + 16. You cannot square each term separately — you must multiply the whole bracket by the whole bracket, and that produces a middle term.",
        },
        {
          stepNumber: 2,
          description: "Write the four FOIL products.",
          workingLatex:
            "= \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot 4}_{\\text{Outer}} + \\underbrace{4 \\cdot x}_{\\text{Inner}} + \\underbrace{4 \\cdot 4}_{\\text{Last}}",
          explanation:
            "Because the two brackets are identical, the Outer and Inner products are both 4x — that equality is exactly what creates the doubled middle term.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The First product squares the x to give x^2, the leading term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "4 \\cdot 4 = 16",
          explanation:
            "The Last product squares the 4 to give 16, the constant term. Note this is the 16 students wrongly think is the whole answer.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "x \\cdot 4 = 4x, \\quad 4 \\cdot x = 4x",
          explanation:
            "Both cross-products equal 4x. Seeing them come out the same is the signal that the middle term will be doubled — this is the term the wrong answer x^2 + 16 quietly drops.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 + 4x + 4x + 16",
          explanation:
            "Lining up the four products shows the two equal 4x terms side by side, ready to be added.",
        },
        {
          stepNumber: 7,
          description: "Collect the two equal middle terms.",
          workingLatex: "= x^2 + 8x + 16",
          explanation:
            "4x + 4x = 8x, the doubled middle term. In general (x+a)^2 = x^2 + 2ax + a^2, NOT x^2 + a^2. Check at x = 1: (1+4)^2 = 25, and 1 + 8 + 16 = 25. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 + 8x + 16\\)",
      canonicalAnswer: "x^2+8x+16",
    },
  },
  {
    id: "ga06-009",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-5)^2\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "perfect square", "negative", "common error"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the square as two identical brackets.",
          workingLatex: "(x-5)^2 = (x-5)(x-5)",
          explanation:
            "WARNING: (x-5)^2 is NOT x^2 - 25 and it is NOT x^2 + 25. Squaring a two-term bracket always produces a middle term, so you must expand it properly rather than squaring each term.",
        },
        {
          stepNumber: 2,
          description: "Attach the signs and list the FOIL products.",
          workingLatex:
            "= \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot (-5)}_{\\text{Outer}} + \\underbrace{(-5) \\cdot x}_{\\text{Inner}} + \\underbrace{(-5) \\cdot (-5)}_{\\text{Last}}",
          explanation:
            "Both brackets carry the -5. The Outer and Inner products will be negative; the Last product is a negative times a negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The First product squares the x to give x^2.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "(-5) \\cdot (-5) = +25",
          explanation:
            "Two negatives multiply to a positive, so (-5) \\cdot (-5) = +25 — the constant ends up positive even though the bracket had a minus.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "x \\cdot (-5) = -5x, \\quad (-5) \\cdot x = -5x",
          explanation:
            "Both cross-products equal -5x. They match because the two brackets are identical, which gives the doubled middle term.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 - 5x - 5x + 25",
          explanation:
            "Collecting the four results lines up the two equal -5x terms, ready to be added.",
        },
        {
          stepNumber: 7,
          description: "Collect the equal middle terms.",
          workingLatex: "= x^2 - 10x + 25",
          explanation:
            "-5x - 5x = -10x. In general (x-a)^2 = x^2 - 2ax + a^2: the middle term is negative but the last term is positive. Check at x = 1: (1-5)^2 = 16, and 1 - 10 + 25 = 16. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 - 10x + 25\\)",
      canonicalAnswer: "x^2-10x+25",
    },
  },
  {
    id: "ga06-010",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-6)(x-4)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "FOIL", "two negative constants"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach each minus sign to its constant.",
          workingLatex: "(x-6)(x-4) = (x + (-6))(x + (-4))",
          explanation:
            "Both constants are negative, so expect the Outer and Inner products to be negative and the Last product (negative times negative) to be positive.",
        },
        {
          stepNumber: 2,
          description: "List the four FOIL products.",
          workingLatex:
            "= \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot (-4)}_{\\text{Outer}} + \\underbrace{(-6) \\cdot x}_{\\text{Inner}} + \\underbrace{(-6) \\cdot (-4)}_{\\text{Last}}",
          explanation:
            "Keeping the brackets around the negatives makes the final product (-6)(-4) clearly visible as a product of two negatives.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two leading x's give the squared term x^2.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "(-6) \\cdot (-4) = +24",
          explanation:
            "Negative 6 times negative 4 is +24, positive because the two minus signs cancel.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "x \\cdot (-4) = -4x, \\quad (-6) \\cdot x = -6x",
          explanation:
            "Each cross-product multiplies one positive and one negative, so both are negative: -4x and -6x.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 - 4x - 6x + 24",
          explanation:
            "Lining up the four results gives the expansion before collecting; the two middle terms are both negative.",
        },
        {
          stepNumber: 7,
          description: "Collect the like terms -4x and -6x.",
          workingLatex: "= x^2 - 10x + 24",
          explanation:
            "-4x - 6x = -10x. Check at x = 1: (1-6)(1-4) = (-5)(-3) = 15, and 1 - 10 + 24 = 15. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 - 10x + 24\\)",
      canonicalAnswer: "x^2-10x+24",
    },
  },
  {
    id: "ga06-011",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x+3)(x-4)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "leading coefficient", "FOIL"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the coefficient 2 and attach the sign to 4.",
          workingLatex: "(2x+3)(x-4) = (2x + 3)(x + (-4))",
          explanation:
            "The 2 in front of x must be carried through every product that uses the 2x term. The -4 in the second bracket makes some products negative.",
        },
        {
          stepNumber: 2,
          description: "List the four FOIL products.",
          workingLatex:
            "= \\underbrace{2x \\cdot x}_{\\text{First}} + \\underbrace{2x \\cdot (-4)}_{\\text{Outer}} + \\underbrace{3 \\cdot x}_{\\text{Inner}} + \\underbrace{3 \\cdot (-4)}_{\\text{Last}}",
          explanation:
            "First multiplies 2x by x; Outer multiplies 2x by -4; Inner multiplies 3 by x; Last multiplies 3 by -4.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "2x \\cdot x = 2x^2",
          explanation:
            "Multiply the numbers (2 \\cdot 1 = 2) and the letters (x \\cdot x = x^2) to get 2x^2. The coefficient 2 carries straight through onto the squared term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer product.",
          workingLatex: "2x \\cdot (-4) = -8x",
          explanation:
            "Multiply 2 by -4 to get -8, keeping the single x, giving -8x. The 2 multiplies the 4, a step easy to overlook.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Inner product.",
          workingLatex: "3 \\cdot x = 3x",
          explanation:
            "The Inner product is simply 3 lots of x, that is 3x.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the Last product.",
          workingLatex: "3 \\cdot (-4) = -12",
          explanation:
            "Positive 3 times negative 4 is -12, the constant term.",
        },
        {
          stepNumber: 7,
          description: "Write all four products in a line.",
          workingLatex: "= 2x^2 - 8x + 3x - 12",
          explanation:
            "Lining up the four results gives the expansion before collecting. The middle terms are -8x and +3x.",
        },
        {
          stepNumber: 8,
          description: "Collect the like terms in x.",
          workingLatex: "= 2x^2 - 5x - 12",
          explanation:
            "-8x + 3x = -5x. The x^2 coefficient stays 2 — it had nothing to combine with. Check at x = 1: (2+3)(1-4) = 5 \\cdot (-3) = -15, and 2 - 5 - 12 = -15. Agreed.",
        },
      ],
      finalAnswer: "\\(2x^2 - 5x - 12\\)",
      canonicalAnswer: "2x^2-5x-12",
    },
  },
  {
    id: "ga06-012",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((3x-1)(2x+5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "leading coefficient", "FOIL", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach the sign to the 1.",
          workingLatex: "(3x-1)(2x+5) = (3x + (-1))(2x + 5)",
          explanation:
            "The first bracket holds 3x and -1; the second holds 2x and 5. Both x-terms carry coefficients, so the x^2 term will not simply be x^2 — it will be 3 \\cdot 2 = 6 times x^2.",
        },
        {
          stepNumber: 2,
          description: "List the four FOIL products.",
          workingLatex:
            "= \\underbrace{3x \\cdot 2x}_{\\text{First}} + \\underbrace{3x \\cdot 5}_{\\text{Outer}} + \\underbrace{(-1) \\cdot 2x}_{\\text{Inner}} + \\underbrace{(-1) \\cdot 5}_{\\text{Last}}",
          explanation:
            "Each term of the first bracket multiplies each term of the second. The Inner and Last products use the -1, so both will be negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "3x \\cdot 2x = 6x^2",
          explanation:
            "Multiply the numbers (3 \\cdot 2 = 6) and the letters (x \\cdot x = x^2) to get 6x^2. The two coefficients multiply together, so the leading coefficient is 6, not 1.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer product.",
          workingLatex: "3x \\cdot 5 = 15x",
          explanation:
            "Multiply 3 by 5 to get 15, keeping the single x, giving 15x.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Inner product.",
          workingLatex: "(-1) \\cdot 2x = -2x",
          explanation:
            "Multiplying 2x by -1 just flips the sign, giving -2x.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the Last product.",
          workingLatex: "(-1) \\cdot 5 = -5",
          explanation:
            "Negative 1 times 5 is -5, the constant term — multiplying by -1 only changes the sign.",
        },
        {
          stepNumber: 7,
          description: "Write all four products in a line.",
          workingLatex: "= 6x^2 + 15x - 2x - 5",
          explanation:
            "Lining up the four results gives the expansion before collecting. The middle terms are +15x and -2x.",
        },
        {
          stepNumber: 8,
          description: "Collect the like terms in x.",
          workingLatex: "= 6x^2 + 13x - 5",
          explanation:
            "15x - 2x = 13x. Check at x = 1: (3-1)(2+5) = 2 \\cdot 7 = 14, and 6 + 13 - 5 = 14. Agreed.",
        },
      ],
      finalAnswer: "\\(6x^2 + 13x - 5\\)",
      canonicalAnswer: "6x^2+13x-5",
    },
  },
  {
    id: "ga06-013",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+y)(x-2y)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "two variables", "FOIL"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach the sign to the 2y.",
          workingLatex: "(x+y)(x-2y) = (x + y)(x + (-2y))",
          explanation:
            "With two variables you treat x and y exactly as before. The second bracket contains x and -2y. The like terms to watch for will be the ones in xy.",
        },
        {
          stepNumber: 2,
          description: "List the four FOIL products.",
          workingLatex:
            "= \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot (-2y)}_{\\text{Outer}} + \\underbrace{y \\cdot x}_{\\text{Inner}} + \\underbrace{y \\cdot (-2y)}_{\\text{Last}}",
          explanation:
            "First multiplies the two x's; Outer and Inner each give a mixed xy term; Last multiplies the two y's.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two x's multiply to x^2, the pure-x squared term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "y \\cdot (-2y) = -2y^2",
          explanation:
            "Keep the -2 and combine the letters (y \\cdot y = y^2) to get -2y^2, the pure-y squared term.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "x \\cdot (-2y) = -2xy, \\quad y \\cdot x = xy",
          explanation:
            "Both cross-products are in xy: the Outer is -2xy and the Inner is xy. Note xy and yx mean the same thing, so they are like terms.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 - 2xy + xy - 2y^2",
          explanation:
            "Lining up the four results gives the expansion. The two xy terms sit in the middle, ready to combine.",
        },
        {
          stepNumber: 7,
          description: "Collect the like terms in xy.",
          workingLatex: "= x^2 - xy - 2y^2",
          explanation:
            "-2xy + xy = -xy. The x^2 and y^2 terms have nothing to combine with. Check at x = 2, y = 1: (2+1)(2-2) = 3 \\cdot 0 = 0, and 4 - 2 - 2 = 0. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 - xy - 2y^2\\)",
      canonicalAnswer: "x^2-xy-2y^2",
    },
  },
  {
    id: "ga06-014",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+7)(x-7)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "difference of two squares", "FOIL"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach the sign and write the FOIL products.",
          workingLatex:
            "(x+7)(x-7) = \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot (-7)}_{\\text{Outer}} + \\underbrace{7 \\cdot x}_{\\text{Inner}} + \\underbrace{7 \\cdot (-7)}_{\\text{Last}}",
          explanation:
            "Even though this is a 'difference of two squares' shape, we expand it the long way with FOIL to see exactly why the middle term vanishes.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two leading x's give x^2, the first of the two surviving terms.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the Last product.",
          workingLatex: "7 \\cdot (-7) = -49",
          explanation:
            "Positive 7 times negative 7 is -49, the constant term. This becomes the second surviving term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "x \\cdot (-7) = -7x, \\quad 7 \\cdot x = +7x",
          explanation:
            "The cross-products are -7x and +7x. They are equal in size but opposite in sign — that is the key to the difference of two squares.",
        },
        {
          stepNumber: 5,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 - 7x + 7x - 49",
          explanation:
            "Collecting the four results lines up -7x and +7x in the middle, ready to cancel.",
        },
        {
          stepNumber: 6,
          description: "Collect the middle terms (they cancel).",
          workingLatex: "= x^2 + 0x - 49 = x^2 - 49",
          explanation:
            "-7x + 7x = 0, so the x-term disappears. This is why (x+a)(x-a) = x^2 - a^2. Check at x = 2: (2+7)(2-7) = 9 \\cdot (-5) = -45, and 4 - 49 = -45. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 - 49\\)",
      canonicalAnswer: "x^2-49",
    },
  },
  {
    id: "ga06-015",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x-9)(x+4)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "FOIL", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach the minus sign to the 9.",
          workingLatex: "(x-9)(x+4) = (x + (-9))(x + 4)",
          explanation:
            "The first bracket holds x and -9. The Inner and Last products will use the -9 and so come out negative.",
        },
        {
          stepNumber: 2,
          description: "List the four FOIL products.",
          workingLatex:
            "= \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot 4}_{\\text{Outer}} + \\underbrace{(-9) \\cdot x}_{\\text{Inner}} + \\underbrace{(-9) \\cdot 4}_{\\text{Last}}",
          explanation:
            "Each term of (x-9) multiplies each term of (x+4). The -9 appears in the Inner and Last products.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two leading x's give the squared term x^2.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer product.",
          workingLatex: "x \\cdot 4 = 4x",
          explanation:
            "Both factors are positive, so the Outer product is +4x.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Inner product.",
          workingLatex: "(-9) \\cdot x = -9x",
          explanation:
            "Negative 9 times positive x is -9x, carrying the minus from the -9.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the Last product.",
          workingLatex: "(-9) \\cdot 4 = -36",
          explanation:
            "Negative 9 times positive 4 is -36, the constant term.",
        },
        {
          stepNumber: 7,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 + 4x - 9x - 36",
          explanation:
            "Lining up the four results gives the expansion before collecting; the middle terms are +4x and -9x.",
        },
        {
          stepNumber: 8,
          description: "Collect the like terms 4x and -9x.",
          workingLatex: "= x^2 - 5x - 36",
          explanation:
            "4x - 9x = -5x. Check at x = 1: (1-9)(1+4) = (-8) \\cdot 5 = -40, and 1 - 5 - 36 = -40. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 - 5x - 36\\)",
      canonicalAnswer: "x^2-5x-36",
    },
  },
  {
    id: "ga06-016",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((4x+1)(x+2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "leading coefficient", "FOIL"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Note the leading coefficient 4.",
          workingLatex: "(4x+1)(x+2) = (4x + 1)(x + 2)",
          explanation:
            "The 4x term means the leading x^2 coefficient will be 4. All terms are positive here, so no sign juggling is needed — just careful coefficient arithmetic.",
        },
        {
          stepNumber: 2,
          description: "List the four FOIL products.",
          workingLatex:
            "= \\underbrace{4x \\cdot x}_{\\text{First}} + \\underbrace{4x \\cdot 2}_{\\text{Outer}} + \\underbrace{1 \\cdot x}_{\\text{Inner}} + \\underbrace{1 \\cdot 2}_{\\text{Last}}",
          explanation:
            "Each term of (4x+1) multiplies each term of (x+2). The 4x appears in the First and Outer products.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "4x \\cdot x = 4x^2",
          explanation:
            "Keep the 4 and combine the letters (x \\cdot x = x^2) to get 4x^2, the leading term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer product.",
          workingLatex: "4x \\cdot 2 = 8x",
          explanation:
            "Multiply 4 by 2 to get 8, keeping the single x, giving 8x.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Inner product.",
          workingLatex: "1 \\cdot x = x",
          explanation:
            "Multiplying x by the 1 leaves it unchanged, so the Inner product is x.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the Last product.",
          workingLatex: "1 \\cdot 2 = 2",
          explanation:
            "The Last product is 1 \\cdot 2 = 2, the constant term.",
        },
        {
          stepNumber: 7,
          description: "Write all four products in a line.",
          workingLatex: "= 4x^2 + 8x + x + 2",
          explanation:
            "Lining up the four results gives the expansion before collecting. The middle terms are 8x and x.",
        },
        {
          stepNumber: 8,
          description: "Collect the like terms in x.",
          workingLatex: "= 4x^2 + 9x + 2",
          explanation:
            "8x + x = 9x (remember x is 1x). Check at x = 1: (4+1)(1+2) = 5 \\cdot 3 = 15, and 4 + 9 + 2 = 15. Agreed.",
        },
      ],
      finalAnswer: "\\(4x^2 + 9x + 2\\)",
      canonicalAnswer: "4x^2+9x+2",
    },
  },
  {
    id: "ga06-017",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((x+10)(x-2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "FOIL", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach the minus sign to the 2.",
          workingLatex: "(x+10)(x-2) = (x + 10)(x + (-2))",
          explanation:
            "The second bracket contains x and -2, so the Outer and Last products (the ones using the -2) will be negative.",
        },
        {
          stepNumber: 2,
          description: "List the four FOIL products.",
          workingLatex:
            "= \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot (-2)}_{\\text{Outer}} + \\underbrace{10 \\cdot x}_{\\text{Inner}} + \\underbrace{10 \\cdot (-2)}_{\\text{Last}}",
          explanation:
            "Each term of (x+10) multiplies each term of (x-2). The -2 appears in the Outer and Last products.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two leading x's give the squared term x^2.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer product.",
          workingLatex: "x \\cdot (-2) = -2x",
          explanation:
            "A positive x times -2 gives -2x, one of the two middle terms.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Inner product.",
          workingLatex: "10 \\cdot x = 10x",
          explanation:
            "Positive 10 times positive x is +10x, the other middle term.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the Last product.",
          workingLatex: "10 \\cdot (-2) = -20",
          explanation:
            "Positive 10 times negative 2 is -20, the constant term.",
        },
        {
          stepNumber: 7,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 - 2x + 10x - 20",
          explanation:
            "Lining up the four results gives the expansion before collecting. The middle terms are -2x and +10x.",
        },
        {
          stepNumber: 8,
          description: "Collect the like terms -2x and 10x.",
          workingLatex: "= x^2 + 8x - 20",
          explanation:
            "-2x + 10x = 8x. Check at x = 1: (1+10)(1-2) = 11 \\cdot (-1) = -11, and 1 + 8 - 20 = -11. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 + 8x - 20\\)",
      canonicalAnswer: "x^2+8x-20",
    },
  },
  {
    id: "ga06-018",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x-1)(2x+1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "difference of two squares", "leading coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach the sign and write the FOIL products.",
          workingLatex:
            "(2x-1)(2x+1) = \\underbrace{2x \\cdot 2x}_{\\text{First}} + \\underbrace{2x \\cdot 1}_{\\text{Outer}} + \\underbrace{(-1) \\cdot 2x}_{\\text{Inner}} + \\underbrace{(-1) \\cdot 1}_{\\text{Last}}",
          explanation:
            "This is a difference-of-two-squares shape with a coefficient on x, but we expand it fully via FOIL. Both x-terms carry a 2.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the First product.",
          workingLatex: "2x \\cdot 2x = 4x^2",
          explanation:
            "Multiply the numbers (2 \\cdot 2 = 4) and the letters (x \\cdot x = x^2) to get 4x^2, the leading term.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the Last product.",
          workingLatex: "(-1) \\cdot 1 = -1",
          explanation:
            "Negative 1 times 1 is -1, the constant term — the second of the two surviving terms.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "2x \\cdot 1 = 2x, \\quad (-1) \\cdot 2x = -2x",
          explanation:
            "The cross-products are +2x and -2x — equal in size, opposite in sign, which is exactly the difference-of-two-squares pattern.",
        },
        {
          stepNumber: 5,
          description: "Write all four products in a line.",
          workingLatex: "= 4x^2 + 2x - 2x - 1",
          explanation:
            "Collecting the four results lines up +2x and -2x in the middle, ready to cancel.",
        },
        {
          stepNumber: 6,
          description: "Collect the middle terms (they cancel).",
          workingLatex: "= 4x^2 + 0x - 1 = 4x^2 - 1",
          explanation:
            "2x - 2x = 0, so the x-term cancels, leaving (2x)^2 - 1^2 = 4x^2 - 1. Check at x = 1: (2-1)(2+1) = 1 \\cdot 3 = 3, and 4 - 1 = 3. Agreed.",
        },
      ],
      finalAnswer: "\\(4x^2 - 1\\)",
      canonicalAnswer: "4x^2-1",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga06-019",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x+3)(3x-5)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "leading coefficient", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the four terms with their signs.",
          workingLatex: "(2x+3)(3x-5) = (2x + 3)(3x + (-5))",
          explanation:
            "Both x-terms have coefficients (2 and 3), so the x^2 term will be 2 \\cdot 3 = 6 times x^2. The -5 makes the products that use it negative.",
        },
        {
          stepNumber: 2,
          description: "Write out all four FOIL products.",
          workingLatex:
            "= \\underbrace{2x \\cdot 3x}_{\\text{First}} + \\underbrace{2x \\cdot (-5)}_{\\text{Outer}} + \\underbrace{3 \\cdot 3x}_{\\text{Inner}} + \\underbrace{3 \\cdot (-5)}_{\\text{Last}}",
          explanation:
            "Outer multiplies 2x by -5; Inner multiplies 3 by 3x; both must keep their correct signs as we evaluate.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "2x \\cdot 3x = 6x^2",
          explanation:
            "Multiply the numbers (2 \\cdot 3 = 6) and the letters (x \\cdot x = x^2) to get 6x^2, the leading term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "3 \\cdot (-5) = -15",
          explanation:
            "Positive 3 times negative 5 is -15, the constant term.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "2x \\cdot (-5) = -10x, \\quad 3 \\cdot 3x = 9x",
          explanation:
            "The Outer product is 2 \\cdot (-5) = -10 with one x, giving -10x. The Inner product is 3 \\cdot 3 = 9 with one x, giving +9x.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= 6x^2 - 10x + 9x - 15",
          explanation:
            "Lining up the four results gives the expansion before collecting. The middle terms are -10x and +9x.",
        },
        {
          stepNumber: 7,
          description: "Collect the like terms in x.",
          workingLatex: "= 6x^2 - x - 15",
          explanation:
            "-10x + 9x = -x (a single negative x). Check at x = 1: (2+3)(3-5) = 5 \\cdot (-2) = -10, and 6 - 1 - 15 = -10. Agreed.",
        },
      ],
      finalAnswer: "\\(6x^2 - x - 15\\)",
      canonicalAnswer: "6x^2-x-15",
    },
  },
  {
    id: "ga06-020",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x+5)^2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "perfect square", "leading coefficient", "common error"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the square as two identical brackets.",
          workingLatex: "(2x+5)^2 = (2x+5)(2x+5)",
          explanation:
            "WARNING: (2x+5)^2 is NOT 4x^2 + 25 — you cannot square the terms separately. Squaring the whole bracket creates a middle term from the Outer and Inner products.",
        },
        {
          stepNumber: 2,
          description: "List the four FOIL products.",
          workingLatex:
            "= \\underbrace{2x \\cdot 2x}_{\\text{First}} + \\underbrace{2x \\cdot 5}_{\\text{Outer}} + \\underbrace{5 \\cdot 2x}_{\\text{Inner}} + \\underbrace{5 \\cdot 5}_{\\text{Last}}",
          explanation:
            "Because the brackets are identical, the Outer and Inner products are equal (both 10x), which is what produces the doubled middle term.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "2x \\cdot 2x = 4x^2",
          explanation:
            "The First product squares 2x: (2 \\cdot 2)(x \\cdot x) = 4x^2. Note the coefficient squares too, so it is 4, not 2.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "5 \\cdot 5 = 25",
          explanation:
            "The Last product squares the 5 to give 25, the constant term.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "2x \\cdot 5 = 10x, \\quad 5 \\cdot 2x = 10x",
          explanation:
            "Both cross-products equal 10x. Their equality is the signal that the middle term doubles — this is the term dropped by the wrong answer 4x^2 + 25.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= 4x^2 + 10x + 10x + 25",
          explanation:
            "Lining up the four results shows the two equal 10x terms side by side, ready to be added.",
        },
        {
          stepNumber: 7,
          description: "Collect the two equal middle terms.",
          workingLatex: "= 4x^2 + 20x + 25",
          explanation:
            "10x + 10x = 20x. Pattern: (2x+5)^2 = (2x)^2 + 2(2x)(5) + 5^2 = 4x^2 + 20x + 25. Check at x = 1: (2+5)^2 = 49, and 4 + 20 + 25 = 49. Agreed.",
        },
      ],
      finalAnswer: "\\(4x^2 + 20x + 25\\)",
      canonicalAnswer: "4x^2+20x+25",
    },
  },
  {
    id: "ga06-021",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((3x-4)^2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "perfect square", "leading coefficient", "negative", "common error"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the square as two identical brackets.",
          workingLatex: "(3x-4)^2 = (3x-4)(3x-4)",
          explanation:
            "WARNING: this is NOT 9x^2 - 16 and NOT 9x^2 + 16. A squared bracket always has a middle term, so expand it fully rather than squaring each term.",
        },
        {
          stepNumber: 2,
          description: "Attach signs and list the FOIL products.",
          workingLatex:
            "= \\underbrace{3x \\cdot 3x}_{\\text{First}} + \\underbrace{3x \\cdot (-4)}_{\\text{Outer}} + \\underbrace{(-4) \\cdot 3x}_{\\text{Inner}} + \\underbrace{(-4) \\cdot (-4)}_{\\text{Last}}",
          explanation:
            "Both brackets carry -4, so the Outer and Inner products are both -12x. The Last product multiplies two negatives.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "3x \\cdot 3x = 9x^2",
          explanation:
            "The First product squares 3x: (3 \\cdot 3)(x \\cdot x) = 9x^2. The coefficient squares to 9.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "(-4) \\cdot (-4) = +16",
          explanation:
            "Negative 4 times negative 4 is +16, positive because two negatives multiply to a positive.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "3x \\cdot (-4) = -12x, \\quad (-4) \\cdot 3x = -12x",
          explanation:
            "Both cross-products equal -12x. They match because the two brackets are identical, giving the doubled middle term.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= 9x^2 - 12x - 12x + 16",
          explanation:
            "Lining up the four results shows the two equal -12x terms side by side, ready to be added.",
        },
        {
          stepNumber: 7,
          description: "Collect the equal middle terms.",
          workingLatex: "= 9x^2 - 24x + 16",
          explanation:
            "-12x - 12x = -24x. Pattern: (3x-4)^2 = (3x)^2 - 2(3x)(4) + 4^2 = 9x^2 - 24x + 16. Check at x = 1: (3-4)^2 = 1, and 9 - 24 + 16 = 1. Agreed.",
        },
      ],
      finalAnswer: "\\(9x^2 - 24x + 16\\)",
      canonicalAnswer: "9x^2-24x+16",
    },
  },
  {
    id: "ga06-022",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((5x-2)(2x-3)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "leading coefficient", "two negative constants"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the four terms with their signs.",
          workingLatex: "(5x-2)(2x-3) = (5x + (-2))(2x + (-3))",
          explanation:
            "Both brackets contain a negative constant. Expect a negative Outer, a negative Inner, and a positive Last (negative times negative).",
        },
        {
          stepNumber: 2,
          description: "Write out the four FOIL products.",
          workingLatex:
            "= \\underbrace{5x \\cdot 2x}_{\\text{First}} + \\underbrace{5x \\cdot (-3)}_{\\text{Outer}} + \\underbrace{(-2) \\cdot 2x}_{\\text{Inner}} + \\underbrace{(-2) \\cdot (-3)}_{\\text{Last}}",
          explanation:
            "The brackets around the negatives make the final product (-2)(-3) clearly a product of two negatives.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "5x \\cdot 2x = 10x^2",
          explanation:
            "Multiply the numbers (5 \\cdot 2 = 10) and the letters (x \\cdot x = x^2) to get 10x^2, the leading term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "(-2) \\cdot (-3) = +6",
          explanation:
            "Negative 2 times negative 3 is +6, positive because the two minus signs cancel.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "5x \\cdot (-3) = -15x, \\quad (-2) \\cdot 2x = -4x",
          explanation:
            "The Outer product is 5 \\cdot (-3) = -15 with one x, giving -15x. The Inner product is (-2) \\cdot 2 = -4 with one x, giving -4x.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= 10x^2 - 15x - 4x + 6",
          explanation:
            "Lining up the four results gives the expansion before collecting. Both middle terms are negative.",
        },
        {
          stepNumber: 7,
          description: "Collect the like terms in x.",
          workingLatex: "= 10x^2 - 19x + 6",
          explanation:
            "-15x - 4x = -19x. Check at x = 1: (5-2)(2-3) = 3 \\cdot (-1) = -3, and 10 - 19 + 6 = -3. Agreed.",
        },
      ],
      finalAnswer: "\\(10x^2 - 19x + 6\\)",
      canonicalAnswer: "10x^2-19x+6",
    },
  },
  {
    id: "ga06-023",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((2x-3y)(3x+y)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "two variables", "leading coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the four terms, attaching the sign to 3y.",
          workingLatex: "(2x-3y)(3x+y) = (2x + (-3y))(3x + y)",
          explanation:
            "Now both terms in the first bracket and both in the second involve variables. The like terms to collect will be the xy terms.",
        },
        {
          stepNumber: 2,
          description: "Write out the four FOIL products.",
          workingLatex:
            "= \\underbrace{2x \\cdot 3x}_{\\text{First}} + \\underbrace{2x \\cdot y}_{\\text{Outer}} + \\underbrace{(-3y) \\cdot 3x}_{\\text{Inner}} + \\underbrace{(-3y) \\cdot y}_{\\text{Last}}",
          explanation:
            "First gives an x^2 term, Outer and Inner give xy terms, and Last gives a y^2 term.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "2x \\cdot 3x = 6x^2",
          explanation:
            "Multiply the numbers (2 \\cdot 3 = 6) and the letters (x \\cdot x = x^2) to get 6x^2, the pure-x squared term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "(-3y) \\cdot y = -3y^2",
          explanation:
            "Keep -3 and combine y \\cdot y = y^2 to get -3y^2, the pure-y squared term.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "2x \\cdot y = 2xy, \\quad (-3y) \\cdot 3x = -9xy",
          explanation:
            "The Outer product is 2xy. The Inner product is (-3) \\cdot 3 = -9 with xy, giving -9xy. Both are like terms in xy.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= 6x^2 + 2xy - 9xy - 3y^2",
          explanation:
            "Lining up the four results gives the expansion. The two xy terms sit in the middle, ready to combine.",
        },
        {
          stepNumber: 7,
          description: "Collect the like terms in xy.",
          workingLatex: "= 6x^2 - 7xy - 3y^2",
          explanation:
            "2xy - 9xy = -7xy. Check at x = 1, y = 1: (2-3)(3+1) = (-1) \\cdot 4 = -4, and 6 - 7 - 3 = -4. Agreed.",
        },
      ],
      finalAnswer: "\\(6x^2 - 7xy - 3y^2\\)",
      canonicalAnswer: "6x^2-7xy-3y^2",
    },
  },
  {
    id: "ga06-024",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((3x-2y)^2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "perfect square", "two variables", "common error"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the square as two identical brackets.",
          workingLatex: "(3x-2y)^2 = (3x-2y)(3x-2y)",
          explanation:
            "WARNING: (3x-2y)^2 is NOT 9x^2 + 4y^2. Squaring a two-term bracket always produces a middle term — here a term in xy.",
        },
        {
          stepNumber: 2,
          description: "Attach signs and list the FOIL products.",
          workingLatex:
            "= \\underbrace{3x \\cdot 3x}_{\\text{First}} + \\underbrace{3x \\cdot (-2y)}_{\\text{Outer}} + \\underbrace{(-2y) \\cdot 3x}_{\\text{Inner}} + \\underbrace{(-2y) \\cdot (-2y)}_{\\text{Last}}",
          explanation:
            "Both brackets carry -2y, so the Outer and Inner products are both -6xy. The Last product is a negative times a negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "3x \\cdot 3x = 9x^2",
          explanation:
            "The First product squares 3x to give (3 \\cdot 3)(x \\cdot x) = 9x^2.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "(-2y) \\cdot (-2y) = +4y^2",
          explanation:
            "Negative 2y times negative 2y is +4y^2, positive because the two negatives cancel and y \\cdot y = y^2.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "3x \\cdot (-2y) = -6xy, \\quad (-2y) \\cdot 3x = -6xy",
          explanation:
            "Both cross-products equal -6xy. They match because the two brackets are identical, giving the doubled middle term.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= 9x^2 - 6xy - 6xy + 4y^2",
          explanation:
            "Lining up the four results shows the two equal -6xy terms side by side, ready to be added.",
        },
        {
          stepNumber: 7,
          description: "Collect the equal middle terms.",
          workingLatex: "= 9x^2 - 12xy + 4y^2",
          explanation:
            "-6xy - 6xy = -12xy. Check at x = 1, y = 1: (3-2)^2 = 1, and 9 - 12 + 4 = 1. Agreed.",
        },
      ],
      finalAnswer: "\\(9x^2 - 12xy + 4y^2\\)",
      canonicalAnswer: "9x^2-12xy+4y^2",
    },
  },
  {
    id: "ga06-025",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((4x+3)(4x-3)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "difference of two squares", "leading coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Attach the sign and write out the FOIL products.",
          workingLatex:
            "(4x+3)(4x-3) = \\underbrace{4x \\cdot 4x}_{\\text{First}} + \\underbrace{4x \\cdot (-3)}_{\\text{Outer}} + \\underbrace{3 \\cdot 4x}_{\\text{Inner}} + \\underbrace{3 \\cdot (-3)}_{\\text{Last}}",
          explanation:
            "This is a difference-of-two-squares shape with coefficient 4 on x. We expand it fully via FOIL to confirm the middle term cancels.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the First product.",
          workingLatex: "4x \\cdot 4x = 16x^2",
          explanation:
            "Multiply the numbers (4 \\cdot 4 = 16) and the letters (x \\cdot x = x^2) to get 16x^2, the leading term.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the Last product.",
          workingLatex: "3 \\cdot (-3) = -9",
          explanation:
            "Positive 3 times negative 3 is -9, the constant term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "4x \\cdot (-3) = -12x, \\quad 3 \\cdot 4x = +12x",
          explanation:
            "The cross-products are -12x and +12x — equal in size but opposite in sign, the hallmark of the difference of two squares.",
        },
        {
          stepNumber: 5,
          description: "Write all four products in a line.",
          workingLatex: "= 16x^2 - 12x + 12x - 9",
          explanation:
            "Collecting the four results lines up -12x and +12x in the middle, ready to cancel.",
        },
        {
          stepNumber: 6,
          description: "Collect the middle terms (they cancel).",
          workingLatex: "= 16x^2 + 0x - 9 = 16x^2 - 9",
          explanation:
            "-12x + 12x = 0, so the x-term cancels, leaving (4x)^2 - 3^2 = 16x^2 - 9. Check at x = 1: (4+3)(4-3) = 7 \\cdot 1 = 7, and 16 - 9 = 7. Agreed.",
        },
      ],
      finalAnswer: "\\(16x^2 - 9\\)",
      canonicalAnswer: "16x^2-9",
    },
  },
  {
    id: "ga06-026",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(2(x+3)(x-5)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "constant multiplier", "FOIL"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Deal with the two brackets first, factor of 2 outside.",
          workingLatex: "2(x+3)(x-5) = 2\\big[(x+3)(x-5)\\big]",
          explanation:
            "Expand the product of the two binomials first, then multiply the whole result by 2 at the end. This avoids multiplying the 2 in too early, which is a common source of mistakes.",
        },
        {
          stepNumber: 2,
          description: "Write the four FOIL products for the inner brackets.",
          workingLatex:
            "(x+3)(x-5) = \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot (-5)}_{\\text{Outer}} + \\underbrace{3 \\cdot x}_{\\text{Inner}} + \\underbrace{3 \\cdot (-5)}_{\\text{Last}}",
          explanation:
            "Ignore the 2 for now and just expand (x+3)(x-5). The -5 makes the Outer and Last products negative.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the four products.",
          workingLatex: "= x^2 - 5x + 3x - 15",
          explanation:
            "x \\cdot x = x^2; x \\cdot (-5) = -5x; 3 \\cdot x = 3x; 3 \\cdot (-5) = -15. The middle terms are -5x and +3x.",
        },
        {
          stepNumber: 4,
          description: "Collect the like terms inside the brackets.",
          workingLatex: "= x^2 - 2x - 15",
          explanation:
            "-5x + 3x = -2x, so the inner bracket simplifies to x^2 - 2x - 15. This is the quadratic that still needs multiplying by 2.",
        },
        {
          stepNumber: 5,
          description: "Multiply every term of the quadratic by 2.",
          workingLatex: "2(x^2 - 2x - 15) = 2x^2 - 4x - 30",
          explanation:
            "Distribute the 2 across all three terms: 2 \\cdot x^2 = 2x^2, 2 \\cdot (-2x) = -4x, 2 \\cdot (-15) = -30. A common slip is to multiply only the first term — every term must be doubled. Check at x = 1: 2(1+3)(1-5) = 2 \\cdot 4 \\cdot (-4) = -32, and 2 - 4 - 30 = -32. Agreed.",
        },
      ],
      finalAnswer: "\\(2x^2 - 4x - 30\\)",
      canonicalAnswer: "2x^2-4x-30",
    },
  },
  {
    id: "ga06-027",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((6x-5)(2x+7)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "leading coefficient", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the four terms with their signs.",
          workingLatex: "(6x-5)(2x+7) = (6x + (-5))(2x + 7)",
          explanation:
            "First bracket: 6x and -5. Second bracket: 2x and 7. The x^2 coefficient will be 6 \\cdot 2 = 12.",
        },
        {
          stepNumber: 2,
          description: "Write out all four FOIL products.",
          workingLatex:
            "= \\underbrace{6x \\cdot 2x}_{\\text{First}} + \\underbrace{6x \\cdot 7}_{\\text{Outer}} + \\underbrace{(-5) \\cdot 2x}_{\\text{Inner}} + \\underbrace{(-5) \\cdot 7}_{\\text{Last}}",
          explanation:
            "The Inner and Last products carry the -5 and so will be negative; the First and Outer products are positive.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "6x \\cdot 2x = 12x^2",
          explanation:
            "Multiply the numbers (6 \\cdot 2 = 12) and the letters (x \\cdot x = x^2) to get 12x^2, the leading term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "(-5) \\cdot 7 = -35",
          explanation:
            "Negative 5 times positive 7 is -35, the constant term.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "6x \\cdot 7 = 42x, \\quad (-5) \\cdot 2x = -10x",
          explanation:
            "The Outer product is 6 \\cdot 7 = 42 with one x, giving 42x. The Inner product is (-5) \\cdot 2 = -10 with one x, giving -10x.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= 12x^2 + 42x - 10x - 35",
          explanation:
            "Lining up the four results gives the expansion before collecting. The middle terms are +42x and -10x.",
        },
        {
          stepNumber: 7,
          description: "Collect the like terms in x.",
          workingLatex: "= 12x^2 + 32x - 35",
          explanation:
            "42x - 10x = 32x. Check at x = 1: (6-5)(2+7) = 1 \\cdot 9 = 9, and 12 + 32 - 35 = 9. Agreed.",
        },
      ],
      finalAnswer: "\\(12x^2 + 32x - 35\\)",
      canonicalAnswer: "12x^2+32x-35",
    },
  },
  {
    id: "ga06-028",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(\\left(x+\\dfrac{1}{2}\\right)\\left(x+\\dfrac{3}{2}\\right)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "fractions", "FOIL"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write out the four FOIL products with the fractions.",
          workingLatex:
            "\\left(x+\\frac{1}{2}\\right)\\left(x+\\frac{3}{2}\\right) = \\underbrace{x \\cdot x}_{\\text{First}} + \\underbrace{x \\cdot \\frac{3}{2}}_{\\text{Outer}} + \\underbrace{\\frac{1}{2} \\cdot x}_{\\text{Inner}} + \\underbrace{\\frac{1}{2} \\cdot \\frac{3}{2}}_{\\text{Last}}",
          explanation:
            "Fractions behave exactly like any other number in FOIL. The only extra care is in adding the fractional coefficients later.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the First product.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "The two x's multiply to x^2, the leading term, with no fractions involved here.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the Last product.",
          workingLatex: "\\frac{1}{2} \\cdot \\frac{3}{2} = \\frac{1 \\cdot 3}{2 \\cdot 2} = \\frac{3}{4}",
          explanation:
            "To multiply two fractions, multiply the numerators (1 \\cdot 3 = 3) and the denominators (2 \\cdot 2 = 4), giving \\frac{3}{4}. This is the constant term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "x \\cdot \\frac{3}{2} = \\frac{3}{2}x, \\quad \\frac{1}{2} \\cdot x = \\frac{1}{2}x",
          explanation:
            "Each cross-product just attaches the fraction as a coefficient of x: \\frac{3}{2}x and \\frac{1}{2}x.",
        },
        {
          stepNumber: 5,
          description: "Write all four products in a line.",
          workingLatex: "= x^2 + \\frac{3}{2}x + \\frac{1}{2}x + \\frac{3}{4}",
          explanation:
            "Lining up the four results gives the expansion. The two fractional x-terms sit in the middle.",
        },
        {
          stepNumber: 6,
          description: "Add the two fractional coefficients of x.",
          workingLatex: "\\frac{3}{2}x + \\frac{1}{2}x = \\frac{3+1}{2}x = \\frac{4}{2}x = 2x",
          explanation:
            "The fractions already share the denominator 2, so just add the numerators: \\frac{3}{2} + \\frac{1}{2} = \\frac{4}{2} = 2. The middle term simplifies neatly to 2x.",
        },
        {
          stepNumber: 7,
          description: "State the simplified quadratic.",
          workingLatex: "= x^2 + 2x + \\frac{3}{4}",
          explanation:
            "Check at x = 1: \\left(1+\\frac{1}{2}\\right)\\left(1+\\frac{3}{2}\\right) = \\frac{3}{2} \\cdot \\frac{5}{2} = \\frac{15}{4}, and 1 + 2 + \\frac{3}{4} = \\frac{15}{4}. Agreed.",
        },
      ],
      finalAnswer: "\\(x^2 + 2x + \\dfrac{3}{4}\\)",
      canonicalAnswer: "x^2+2x+3/4",
    },
  },
  {
    id: "ga06-029",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "A rectangle has length \\((2x+1)\\) cm and width \\((x+4)\\) cm. Show that its area is \\(2x^2 + 9x + 4\\) square centimetres.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "area", "leading coefficient", "show that"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the area as length times width.",
          workingLatex: "\\text{Area} = (2x+1)(x+4)",
          explanation:
            "The area of a rectangle is length \\cdot width, so the area is the product of the two binomial side lengths. For a 'show that', we expand this and aim to reach the given expression exactly.",
        },
        {
          stepNumber: 2,
          description: "Write out the four FOIL products.",
          workingLatex:
            "= \\underbrace{2x \\cdot x}_{\\text{First}} + \\underbrace{2x \\cdot 4}_{\\text{Outer}} + \\underbrace{1 \\cdot x}_{\\text{Inner}} + \\underbrace{1 \\cdot 4}_{\\text{Last}}",
          explanation:
            "Each term of (2x+1) multiplies each term of (x+4). All terms are positive here, so no sign care is needed.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "2x \\cdot x = 2x^2",
          explanation:
            "Keep the 2 and combine x \\cdot x = x^2 to get 2x^2, the leading term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Outer product.",
          workingLatex: "2x \\cdot 4 = 8x",
          explanation:
            "Multiply 2 by 4 to get 8, keeping the single x, giving 8x.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Inner product.",
          workingLatex: "1 \\cdot x = x",
          explanation:
            "Multiplying x by the 1 leaves it unchanged, so the Inner product is x.",
        },
        {
          stepNumber: 6,
          description: "Evaluate the Last product.",
          workingLatex: "1 \\cdot 4 = 4",
          explanation:
            "The Last product is 1 \\cdot 4 = 4, the constant term.",
        },
        {
          stepNumber: 7,
          description: "Write all four products in a line.",
          workingLatex: "= 2x^2 + 8x + x + 4",
          explanation:
            "Lining up the four results gives the expansion before collecting. The middle terms are 8x and x.",
        },
        {
          stepNumber: 8,
          description: "Collect the like terms and compare with the target.",
          workingLatex: "= 2x^2 + 9x + 4 \\quad \\checkmark",
          explanation:
            "8x + x = 9x, giving 2x^2 + 9x + 4, exactly the required expression — so the area is shown. Check at x = 1: (2+1)(1+4) = 3 \\cdot 5 = 15, and 2 + 9 + 4 = 15. Agreed.",
        },
      ],
      finalAnswer: "\\(2x^2 + 9x + 4\\) (square centimetres)",
      canonicalAnswer: "2x^2+9x+4",
    },
  },
  {
    id: "ga06-030",
    topicRef: "ga06",
    topicTitle: "Expanding two binomials",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\((3x+2y)(2x-5y)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding two binomials", "two variables", "leading coefficient", "negative constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the four terms, attaching the sign to 5y.",
          workingLatex: "(3x+2y)(2x-5y) = (3x + 2y)(2x + (-5y))",
          explanation:
            "The first bracket has 3x and 2y; the second has 2x and -5y. The like terms to collect will be the xy terms.",
        },
        {
          stepNumber: 2,
          description: "Write out all four FOIL products.",
          workingLatex:
            "= \\underbrace{3x \\cdot 2x}_{\\text{First}} + \\underbrace{3x \\cdot (-5y)}_{\\text{Outer}} + \\underbrace{2y \\cdot 2x}_{\\text{Inner}} + \\underbrace{2y \\cdot (-5y)}_{\\text{Last}}",
          explanation:
            "First gives an x^2 term, Outer and Inner give xy terms (one negative, one positive), Last gives a y^2 term.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the First product.",
          workingLatex: "3x \\cdot 2x = 6x^2",
          explanation:
            "Multiply the numbers (3 \\cdot 2 = 6) and the letters (x \\cdot x = x^2) to get 6x^2, the pure-x squared term.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the Last product.",
          workingLatex: "2y \\cdot (-5y) = -10y^2",
          explanation:
            "Multiply 2 by -5 and combine y \\cdot y = y^2 to get -10y^2, the pure-y squared term.",
        },
        {
          stepNumber: 5,
          description: "Evaluate the Outer and Inner products.",
          workingLatex: "3x \\cdot (-5y) = -15xy, \\quad 2y \\cdot 2x = 4xy",
          explanation:
            "The Outer product is 3 \\cdot (-5) = -15 with xy, giving -15xy. The Inner product is 2 \\cdot 2 = 4 with xy, giving +4xy. Both are like terms in xy.",
        },
        {
          stepNumber: 6,
          description: "Write all four products in a line.",
          workingLatex: "= 6x^2 - 15xy + 4xy - 10y^2",
          explanation:
            "Lining up the four results gives the expansion. The two xy terms sit in the middle, ready to combine.",
        },
        {
          stepNumber: 7,
          description: "Collect the like terms in xy.",
          workingLatex: "= 6x^2 - 11xy - 10y^2",
          explanation:
            "-15xy + 4xy = -11xy. Check at x = 1, y = 1: (3+2)(2-5) = 5 \\cdot (-3) = -15, and 6 - 11 - 10 = -15. Agreed.",
        },
      ],
      finalAnswer: "\\(6x^2 - 11xy - 10y^2\\)",
      canonicalAnswer: "6x^2-11xy-10y^2",
    },
  },
];
