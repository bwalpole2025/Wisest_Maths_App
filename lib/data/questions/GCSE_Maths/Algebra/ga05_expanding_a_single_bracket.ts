/**
 * Topic: Expanding a single bracket
 * Ref: ga05  (DfE A4)
 * Strand: Algebra — GCSE Maths (Foundation + Higher; both tiers)
 *
 * Coverage: multiplying out a single bracket by the distributive law. Clusters:
 *   (1) number × bracket, e.g. 3(x+4);
 *   (2) negative multiplier, e.g. -(x+3), -2(x-5);
 *   (3) variable multiplier, e.g. x(x+2), 2x(3x-1);
 *   (4) expand then collect like terms, e.g. 3(x+1)+2(x-2), 5(2x-3)-2(x+4);
 *   (5) powers, e.g. x(x^2-3x+2), 2a(a^2-a).
 *   This bank is single brackets ONLY — NO products of two binomials (separate bank).
 *
 * Difficulty split (30 total):
 *   - Foundation: ga05-001 .. ga05-004  (4)   — 2 marks, examStyle false
 *   - Standard:   ga05-005 .. ga05-018  (14)  — 3 marks, examStyle true
 *   - Challenge:  ga05-019 .. ga05-030  (12)  — 4+ marks, examStyle true
 * Id range: ga05-001 .. ga05-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga05-001",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand \\(3(x + 4)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding brackets", "distributive law", "number multiplier"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the multiplier and the two terms inside.",
          workingLatex: "3(x + 4)",
          explanation:
            "Expanding means removing the bracket using the distributive law. The number outside is 3, and inside there are two separate terms, x and +4. The key idea is that the 3 must reach BOTH of them, not just the first.",
        },
        {
          stepNumber: 2,
          description: "Multiply the 3 by each term inside.",
          workingLatex: "3(x + 4) = 3 \\cdot x + 3 \\cdot 4",
          explanation:
            "The distributive law says a(b + c) = a·b + a·c. Write the two products side by side before working them out. The most common slip is to multiply only the first term and forget the +4, so set out both pieces straight away.",
        },
        {
          stepNumber: 3,
          description: "Work out the first product.",
          workingLatex: "3 \\cdot x = 3x",
          explanation:
            "Multiplying a number by a single letter just writes the number in front: 3 times x is 3x. Both factors are positive, so this term is positive.",
        },
        {
          stepNumber: 4,
          description: "Work out the second product.",
          workingLatex: "3 \\cdot 4 = 12",
          explanation:
            "3 times 4 is 12, and it stays positive because the term inside the bracket was +4. This is the constant term of the answer.",
        },
        {
          stepNumber: 5,
          description: "Combine the two products.",
          workingLatex: "3(x + 4) = 3x + 12",
          explanation:
            "Putting the two products together gives 3x + 12. The terms 3x and 12 are unlike (one has an x, one does not), so they cannot be merged. Check: with x = 1 the original is 3(5) = 15 and 3(1) + 12 = 15, so they agree.",
        },
      ],
      finalAnswer: "\\(3x + 12\\)",
      canonicalAnswer: "3x+12",
    },
  },
  {
    id: "ga05-002",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand \\(5(2x + 1)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding brackets", "distributive law", "number multiplier"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply the 5 by each term inside the bracket.",
          workingLatex: "5(2x + 1) = 5 \\cdot 2x + 5 \\cdot 1",
          explanation:
            "By the distributive law the 5 must reach both the 2x and the 1. Set out both products before evaluating so that neither term is forgotten — dropping the +1 is the usual mistake.",
        },
        {
          stepNumber: 2,
          description: "Work out the first product.",
          workingLatex: "5 \\cdot 2x = 10x",
          explanation:
            "Multiply the numbers and keep the letter: 5 times 2 is 10, then attach the x to get 10x. Only the number part is multiplied — the x is just carried along.",
        },
        {
          stepNumber: 3,
          description: "Work out the second product.",
          workingLatex: "5 \\cdot 1 = 5",
          explanation:
            "5 times 1 is 5, so the constant term is +5. Multiplying by 1 leaves the value unchanged, but it is still worth writing out so the term is not forgotten.",
        },
        {
          stepNumber: 4,
          description: "Combine the two products.",
          workingLatex: "5(2x + 1) = 10x + 5",
          explanation:
            "Putting the pieces together gives 10x + 5. These are unlike terms, so the answer is left as a sum. Check: at x = 2 the original is 5(5) = 25 and 10(2) + 5 = 25.",
        },
      ],
      finalAnswer: "\\(10x + 5\\)",
      canonicalAnswer: "10x+5",
    },
  },
  {
    id: "ga05-003",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand \\(4(x - 3)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding brackets", "distributive law", "subtraction inside"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the second term as -3, then distribute the 4.",
          workingLatex: "4(x - 3) = 4 \\cdot x - 4 \\cdot 3",
          explanation:
            "The subtraction inside means the second term is -3, not 3. So think of it as 4 times x plus 4 times (-3); the minus sign travels with the 3 into the expansion. Keeping the sign attached now stops it being lost later.",
        },
        {
          stepNumber: 2,
          description: "Work out the first product.",
          workingLatex: "4 \\cdot x = 4x",
          explanation:
            "4 times x is 4x, a positive term since both factors are positive.",
        },
        {
          stepNumber: 3,
          description: "Work out the second product.",
          workingLatex: "4 \\cdot 3 = 12",
          explanation:
            "4 times 3 is 12. The minus sign in front (carried from the -3 inside) means this contributes -12 to the answer, so the subtraction is preserved.",
        },
        {
          stepNumber: 4,
          description: "Combine the two products.",
          workingLatex: "4(x - 3) = 4x - 12",
          explanation:
            "Putting the pieces together gives 4x - 12. Check: at x = 5 the original is 4(2) = 8 and 4(5) - 12 = 8, so they agree.",
        },
      ],
      finalAnswer: "\\(4x - 12\\)",
      canonicalAnswer: "4x-12",
    },
  },
  {
    id: "ga05-004",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Expand \\(x(x + 2)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["expanding brackets", "variable multiplier", "indices"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply the outside x by each term inside.",
          workingLatex: "x(x + 2) = x \\cdot x + x \\cdot 2",
          explanation:
            "Here the multiplier is a letter, not a number, but the distributive law is identical: the outside x reaches both the inside x and the +2. Set out both products first so the +2 is not dropped.",
        },
        {
          stepNumber: 2,
          description: "Simplify the first product using index rules.",
          workingLatex: "x \\cdot x = x^2",
          explanation:
            "A letter times itself raises its power by one: x^1 times x^1 means adding the indices, 1 + 1 = 2, giving x^2. A common slip is to write 2x here — but x·x is x squared, not double x.",
        },
        {
          stepNumber: 3,
          description: "Simplify the second product.",
          workingLatex: "x \\cdot 2 = 2x",
          explanation:
            "x times 2 is 2x, with the number written in front by convention. This is a single power of x, so it is genuinely different from the x^2 term above.",
        },
        {
          stepNumber: 4,
          description: "Combine the two products.",
          workingLatex: "x(x + 2) = x^2 + 2x",
          explanation:
            "Combining gives x^2 + 2x. Note x^2 and 2x are unlike terms (different powers of x), so they cannot be merged. Check: at x = 3 the original is 3(5) = 15 and 3^2 + 2(3) = 9 + 6 = 15.",
        },
      ],
      finalAnswer: "\\(x^2 + 2x\\)",
      canonicalAnswer: "x^2+2x",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga05-005",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand \\(7(3x - 2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "number multiplier", "subtraction inside"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the multiplier and the two terms inside.",
          workingLatex: "7(3x - 2)",
          explanation:
            "The multiplier is 7. Inside there are two terms: +3x and -2. The 7 must multiply both of them, and each product keeps the sign of the term it came from.",
        },
        {
          stepNumber: 2,
          description: "Distribute 7 across both terms.",
          workingLatex: "7(3x - 2) = 7 \\cdot 3x - 7 \\cdot 2",
          explanation:
            "Writing the expansion as two separate products first guards against the classic error of multiplying only the 3x and dropping the -2. The minus stays in place between the two products.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the first product.",
          workingLatex: "7 \\cdot 3x = 21x",
          explanation:
            "Multiply the coefficients: 7 times 3 is 21, then carry the x along to get 21x.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the second product.",
          workingLatex: "7 \\cdot 2 = 14",
          explanation:
            "7 times 2 is 14. The minus sign in front (from the -2 inside) means this term contributes -14, so the subtraction carries through.",
        },
        {
          stepNumber: 5,
          description: "Combine the two products.",
          workingLatex: "7(3x - 2) = 21x - 14",
          explanation:
            "So the answer is 21x - 14. Check: at x = 1 the original is 7(1) = 7 and 21(1) - 14 = 7.",
        },
      ],
      finalAnswer: "\\(21x - 14\\)",
      canonicalAnswer: "21x-14",
    },
  },
  {
    id: "ga05-006",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand \\(-(x + 3)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "negative multiplier", "sign rules"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the leading minus as a multiplier of -1.",
          workingLatex: "-(x + 3) = -1(x + 3)",
          explanation:
            "A bare minus sign in front of a bracket means 'multiply everything inside by -1'. Making the -1 explicit makes the sign of every term obvious and stops you from changing only the first term.",
        },
        {
          stepNumber: 2,
          description: "Distribute -1 across both terms.",
          workingLatex: "-1(x + 3) = -1 \\cdot x + (-1) \\cdot 3",
          explanation:
            "Each term inside is multiplied by -1. Notice the +3 becomes (-1) times 3, so its sign is about to flip — the step students most often forget.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the first product.",
          workingLatex: "-1 \\cdot x = -x",
          explanation:
            "Negative one times x is -x. Multiplying by -1 simply reverses the sign, so the positive x becomes negative.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the second product.",
          workingLatex: "(-1) \\cdot 3 = -3",
          explanation:
            "Negative one times 3 is -3. The +3 inside the bracket has flipped to -3 — this is the sign change a bare minus produces on the second term.",
        },
        {
          stepNumber: 5,
          description: "Combine the two products.",
          workingLatex: "-(x + 3) = -x - 3",
          explanation:
            "Both signs have flipped, so the expansion is -x - 3. Check: at x = 2 the original is -(5) = -5 and -2 - 3 = -5.",
        },
      ],
      finalAnswer: "\\(-x - 3\\)",
      canonicalAnswer: "-x-3",
    },
  },
  {
    id: "ga05-007",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand \\(-2(x - 5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "negative multiplier", "sign rules"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The multiplier is the negative number -2.",
          workingLatex: "-2(x - 5) = -2 \\cdot x + (-2) \\cdot (-5)",
          explanation:
            "-2 multiplies both x and -5. Keep the sign of every factor attached so the products come out right; the second factor is -5, not 5, and the multiplier is -2, not 2.",
        },
        {
          stepNumber: 2,
          description: "Apply the sign rule to the first product.",
          workingLatex: "-2 \\cdot x = -2x",
          explanation:
            "Negative times positive is negative, so -2 times x gives -2x. The x is carried along; only the sign and the number matter here.",
        },
        {
          stepNumber: 3,
          description: "Apply the sign rule to the second product.",
          workingLatex: "(-2) \\cdot (-5) = +10",
          explanation:
            "Negative times negative is POSITIVE, so (-2)(-5) = +10. The frequent slip here is to write -10 by forgetting that the two minus signs cancel.",
        },
        {
          stepNumber: 4,
          description: "Combine the two products.",
          workingLatex: "-2(x - 5) = -2x + 10",
          explanation:
            "Putting the products together gives -2x + 10. Notice the answer ends with +10 even though both numbers in the question looked negative — that is the double-negative at work. Check: at x = 1 the original is -2(-4) = 8 and -2(1) + 10 = 8.",
        },
      ],
      finalAnswer: "\\(-2x + 10\\)",
      canonicalAnswer: "-2x+10",
    },
  },
  {
    id: "ga05-008",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand \\(-3(2x + 4)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "negative multiplier", "sign rules"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distribute the negative multiplier -3.",
          workingLatex: "-3(2x + 4) = -3 \\cdot 2x + (-3) \\cdot 4",
          explanation:
            "Both terms inside are positive, but the multiplier is negative, so BOTH products will be negative. Keep the -3 attached to each term rather than treating the minus as a separate afterthought.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the first product with its sign.",
          workingLatex: "-3 \\cdot 2x = -6x",
          explanation:
            "Multiply the numbers, -3 times 2 = -6, and carry the x. Negative times positive is negative, so the result is -6x.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the second product with its sign.",
          workingLatex: "(-3) \\cdot 4 = -12",
          explanation:
            "-3 times 4 is -12, again negative times positive. There is no double-negative to catch here — both terms simply stay negative.",
        },
        {
          stepNumber: 4,
          description: "Write the expansion.",
          workingLatex: "-3(2x + 4) = -6x - 12",
          explanation:
            "Combining the two negative products gives -6x - 12. Check: at x = 1 the original is -3(6) = -18 and -6(1) - 12 = -18.",
        },
      ],
      finalAnswer: "\\(-6x - 12\\)",
      canonicalAnswer: "-6x-12",
    },
  },
  {
    id: "ga05-009",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand \\(2x(3x - 1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "variable multiplier", "indices"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The multiplier 2x must reach both terms.",
          workingLatex: "2x(3x - 1) = 2x \\cdot 3x - 2x \\cdot 1",
          explanation:
            "When the multiplier is a term like 2x, it still distributes across both terms exactly as a plain number would. Each product involves multiplying numbers and letters separately, so set out both products to avoid dropping the -1.",
        },
        {
          stepNumber: 2,
          description: "Multiply the first product, using index rules on x.",
          workingLatex: "2x \\cdot 3x = (2 \\cdot 3)(x \\cdot x) = 6x^2",
          explanation:
            "Split into numbers and letters: the coefficients give 2 times 3 = 6, and x times x = x^2 by adding the powers (1 + 1 = 2). So 2x times 3x is 6x^2 — note the answer has an x^2, not just an x.",
        },
        {
          stepNumber: 3,
          description: "Multiply the second product.",
          workingLatex: "2x \\cdot 1 = 2x",
          explanation:
            "2x times 1 is just 2x, since multiplying by 1 changes nothing. It stays negative because of the minus inside the bracket.",
        },
        {
          stepNumber: 4,
          description: "Combine the two products.",
          workingLatex: "2x(3x - 1) = 6x^2 - 2x",
          explanation:
            "Putting them together gives 6x^2 - 2x. Check: at x = 2 the original is 4(5) = 20 and 6(4) - 2(2) = 24 - 4 = 20.",
        },
      ],
      finalAnswer: "\\(6x^2 - 2x\\)",
      canonicalAnswer: "6x^2-2x",
    },
  },
  {
    id: "ga05-010",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand \\(x(x^2 - 3x + 2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "variable multiplier", "powers", "three terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distribute x across all THREE terms.",
          workingLatex: "x(x^2 - 3x + 2) = x \\cdot x^2 - x \\cdot 3x + x \\cdot 2",
          explanation:
            "There are three terms inside, so there are three products. Each product keeps the sign of the term it came from, so the middle one stays negative.",
        },
        {
          stepNumber: 2,
          description: "Multiply the first product using index rules.",
          workingLatex: "x \\cdot x^2 = x^3",
          explanation:
            "Multiplying powers of x means ADDING the indices: x^1 times x^2 = x^{1+2} = x^3. This is the highest-degree term of the answer.",
        },
        {
          stepNumber: 3,
          description: "Multiply the middle product.",
          workingLatex: "x \\cdot 3x = 3x^2",
          explanation:
            "x times x = x^2 with the 3 carried along, giving 3x^2. It stays negative because the term inside was -3x.",
        },
        {
          stepNumber: 4,
          description: "Multiply the last product.",
          workingLatex: "x \\cdot 2 = 2x",
          explanation:
            "x times 2 is 2x, a single power of x. This is the lowest-degree term.",
        },
        {
          stepNumber: 5,
          description: "Combine the three products.",
          workingLatex: "x(x^2 - 3x + 2) = x^3 - 3x^2 + 2x",
          explanation:
            "Keeping the signs from step 1, the full expansion is x^3 - 3x^2 + 2x. All three terms have different powers, so none can be merged. Check: at x = 2 the original is 2(4 - 6 + 2) = 2(0) = 0 and 8 - 12 + 4 = 0.",
        },
      ],
      finalAnswer: "\\(x^3 - 3x^2 + 2x\\)",
      canonicalAnswer: "x^3-3x^2+2x",
    },
  },
  {
    id: "ga05-011",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand \\(2a(a^2 - a)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "variable multiplier", "powers", "indices"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distribute the term 2a across both terms.",
          workingLatex: "2a(a^2 - a) = 2a \\cdot a^2 - 2a \\cdot a",
          explanation:
            "The multiplier 2a multiplies both a^2 and -a. As with any term multiplier, handle the coefficient (2) and the powers of a separately, and keep the minus on the second product.",
        },
        {
          stepNumber: 2,
          description: "Multiply the first product using index rules.",
          workingLatex: "2a \\cdot a^2 = 2(a^1 \\cdot a^2) = 2a^3",
          explanation:
            "The coefficient is 2 times 1 = 2, and a times a^2 = a^{1+2} = a^3 by adding the indices. So this product is 2a^3, the highest power in the answer.",
        },
        {
          stepNumber: 3,
          description: "Multiply the second product.",
          workingLatex: "2a \\cdot a = 2a^2",
          explanation:
            "Here a times a = a^{1+1} = a^2, with the 2 carried along, giving 2a^2. It stays negative because of the minus inside the bracket.",
        },
        {
          stepNumber: 4,
          description: "Combine the two products.",
          workingLatex: "2a(a^2 - a) = 2a^3 - 2a^2",
          explanation:
            "Putting them together gives 2a^3 - 2a^2. Check: at a = 2 the original is 4(4 - 2) = 8 and 2(8) - 2(4) = 16 - 8 = 8.",
        },
      ],
      finalAnswer: "\\(2a^3 - 2a^2\\)",
      canonicalAnswer: "2a^3-2a^2",
    },
  },
  {
    id: "ga05-012",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\(3(x + 1) + 2(x - 2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "collecting like terms", "two brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "3(x + 1) = 3x + 3",
          explanation:
            "Distribute the 3 across both terms: 3 times x is 3x and 3 times 1 is 3. Both terms are positive.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket.",
          workingLatex: "2(x - 2) = 2x - 4",
          explanation:
            "Distribute the 2: 2 times x is 2x and 2 times 2 is 4, kept negative because the term inside is -2.",
        },
        {
          stepNumber: 3,
          description: "Write both expansions together.",
          workingLatex: "3(x + 1) + 2(x - 2) = 3x + 3 + 2x - 4",
          explanation:
            "There is a + between the brackets, so neither expansion has its signs changed when they are joined into one line. Now the like terms can be gathered.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms.",
          workingLatex: "3x + 2x = 5x",
          explanation:
            "Like terms are terms with the same letter part. Add the coefficients of the x-terms: 3 + 2 = 5, giving 5x.",
        },
        {
          stepNumber: 5,
          description: "Collect the constants and combine.",
          workingLatex: "3 - 4 = -1 \\;\\Rightarrow\\; 5x - 1",
          explanation:
            "Add the constants: 3 - 4 = -1. The simplified answer is 5x - 1. Check: at x = 1 the original is 3(2) + 2(-1) = 6 - 2 = 4 and 5(1) - 1 = 4.",
        },
      ],
      finalAnswer: "\\(5x - 1\\)",
      canonicalAnswer: "5x-1",
    },
  },
  {
    id: "ga05-013",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\(4(2x + 3) + 3(x - 1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "collecting like terms", "two brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "4(2x + 3) = 8x + 12",
          explanation:
            "Distribute the 4: 4 times 2x is 8x and 4 times 3 is 12. Both terms are positive.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket.",
          workingLatex: "3(x - 1) = 3x - 3",
          explanation:
            "Distribute the 3: 3 times x is 3x and 3 times 1 is 3, negative because of the -1 inside.",
        },
        {
          stepNumber: 3,
          description: "Join the two expansions.",
          workingLatex: "4(2x + 3) + 3(x - 1) = 8x + 12 + 3x - 3",
          explanation:
            "The brackets are added, so each expansion keeps its own signs when written on one line, ready for collecting.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms.",
          workingLatex: "8x + 3x = 11x",
          explanation:
            "Add the coefficients of the like x-terms: 8 + 3 = 11, giving 11x.",
        },
        {
          stepNumber: 5,
          description: "Collect the constants and combine.",
          workingLatex: "12 - 3 = 9 \\;\\Rightarrow\\; 11x + 9",
          explanation:
            "Combine the constants: 12 - 3 = 9. So the answer is 11x + 9. Check: at x = 1 the original is 4(5) + 3(0) = 20 and 11(1) + 9 = 20.",
        },
      ],
      finalAnswer: "\\(11x + 9\\)",
      canonicalAnswer: "11x+9",
    },
  },
  {
    id: "ga05-014",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\(5(2x - 3) - 2(x + 4)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "negative multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "5(2x - 3) = 10x - 15",
          explanation:
            "Distribute the 5: 5 times 2x is 10x and 5 times 3 is 15, negative because of the -3 inside.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket — the multiplier is -2.",
          workingLatex: "-2(x + 4) = -2x - 8",
          explanation:
            "The sign in front of the second bracket is a MINUS, so the multiplier is -2, not 2. Then -2 times x = -2x and -2 times 4 = -8. Forgetting this minus is the single most common error in this type of question.",
        },
        {
          stepNumber: 3,
          description: "Combine the two expansions.",
          workingLatex: "5(2x - 3) - 2(x + 4) = 10x - 15 - 2x - 8",
          explanation:
            "Because the second bracket has already been expanded WITH its minus, simply write the four terms down in order — there are no further signs to change.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms.",
          workingLatex: "10x - 2x = 8x",
          explanation:
            "Combine the coefficients of the like x-terms: 10 - 2 = 8, giving 8x.",
        },
        {
          stepNumber: 5,
          description: "Collect the constants and combine.",
          workingLatex: "-15 - 8 = -23 \\;\\Rightarrow\\; 8x - 23",
          explanation:
            "Both constants are negative: -15 - 8 = -23. So the answer is 8x - 23. Check: at x = 1 the original is 5(-1) - 2(5) = -5 - 10 = -15 and 8(1) - 23 = -15.",
        },
      ],
      finalAnswer: "\\(8x - 23\\)",
      canonicalAnswer: "8x-23",
    },
  },
  {
    id: "ga05-015",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\(6(x - 2) - (x - 5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "negative multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "6(x - 2) = 6x - 12",
          explanation:
            "Distribute the 6: 6 times x is 6x and 6 times 2 is 12, negative because of the -2 inside.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket — the multiplier is -1.",
          workingLatex: "-(x - 5) = -x + 5",
          explanation:
            "A bare minus in front means multiply by -1. So -1 times x = -x, and -1 times (-5) = +5 because negative times negative is positive. The -5 becomes +5 — a sign students often miss.",
        },
        {
          stepNumber: 3,
          description: "Combine the two expansions.",
          workingLatex: "6(x - 2) - (x - 5) = 6x - 12 - x + 5",
          explanation:
            "Write the terms from both expansions on a single line, using the signs found above. The +5 is the result of the double negative, not a typo.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms.",
          workingLatex: "6x - x = 5x",
          explanation:
            "Combine the x-coefficients: 6 - 1 = 5, giving 5x. Remember a lone -x counts as -1x, so the coefficient is 1, not 0.",
        },
        {
          stepNumber: 5,
          description: "Collect the constants and combine.",
          workingLatex: "-12 + 5 = -7 \\;\\Rightarrow\\; 5x - 7",
          explanation:
            "Combine the constants: -12 + 5 = -7. So the answer is 5x - 7. Check: at x = 2 the original is 6(0) - (-3) = 3 and 5(2) - 7 = 3.",
        },
      ],
      finalAnswer: "\\(5x - 7\\)",
      canonicalAnswer: "5x-7",
    },
  },
  {
    id: "ga05-016",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand \\(3x(2x^2 - 4x + 1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "variable multiplier", "powers", "three terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distribute the term 3x across all three terms.",
          workingLatex: "3x(2x^2 - 4x + 1) = 3x \\cdot 2x^2 - 3x \\cdot 4x + 3x \\cdot 1",
          explanation:
            "Three terms inside means three products. The multiplier 3x carries both a number (3) and a letter (x) into each, and each product keeps the sign of the term it came from.",
        },
        {
          stepNumber: 2,
          description: "Multiply the first product using index rules.",
          workingLatex: "3x \\cdot 2x^2 = 6x^3",
          explanation:
            "Numbers: 3 times 2 = 6. Letters: x times x^2 = x^{1+2} = x^3. So the product is 6x^3, the highest-degree term.",
        },
        {
          stepNumber: 3,
          description: "Multiply the second product using index rules.",
          workingLatex: "3x \\cdot 4x = 12x^2",
          explanation:
            "Numbers: 3 times 4 = 12. Letters: x times x = x^2. So the product is 12x^2, kept negative by the minus inside.",
        },
        {
          stepNumber: 4,
          description: "Multiply the last product.",
          workingLatex: "3x \\cdot 1 = 3x",
          explanation:
            "3x times 1 is 3x, since multiplying by 1 leaves it unchanged. This is the lowest-degree term.",
        },
        {
          stepNumber: 5,
          description: "Combine the three products.",
          workingLatex: "3x(2x^2 - 4x + 1) = 6x^3 - 12x^2 + 3x",
          explanation:
            "Combining with the right signs gives 6x^3 - 12x^2 + 3x. The three powers are all different, so nothing collects. Check: at x = 1 the original is 3(2 - 4 + 1) = 3(-1) = -3 and 6 - 12 + 3 = -3.",
        },
      ],
      finalAnswer: "\\(6x^3 - 12x^2 + 3x\\)",
      canonicalAnswer: "6x^3-12x^2+3x",
    },
  },
  {
    id: "ga05-017",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand \\(-4(2x - 3y + 1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "negative multiplier", "two variables", "sign rules"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distribute the negative multiplier -4 across all three terms.",
          workingLatex: "-4(2x - 3y + 1) = -4 \\cdot 2x + (-4) \\cdot (-3y) + (-4) \\cdot 1",
          explanation:
            "Keep the -4 with each product and keep each inside term's sign. The middle term is -3y, so its factor is -3y, not 3y — getting that sign right is the whole game here.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the first product.",
          workingLatex: "-4 \\cdot 2x = -8x",
          explanation:
            "Negative times positive is negative: -4 times 2 = -8, carry the x to get -8x.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the middle product — watch the sign.",
          workingLatex: "(-4) \\cdot (-3y) = +12y",
          explanation:
            "Negative times negative is POSITIVE, so (-4)(-3y) = +12y. This middle sign flips to positive — the place students most often slip.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the last product.",
          workingLatex: "(-4) \\cdot 1 = -4",
          explanation:
            "-4 times 1 is -4, staying negative since +1 inside was positive and the multiplier is negative.",
        },
        {
          stepNumber: 5,
          description: "Combine the three products.",
          workingLatex: "-4(2x - 3y + 1) = -8x + 12y - 4",
          explanation:
            "Combining gives -8x + 12y - 4. The x, y and constant terms are all unlike, so none can be merged. Check: at x = 1, y = 1 the original is -4(2 - 3 + 1) = -4(0) = 0 and -8 + 12 - 4 = 0.",
        },
      ],
      finalAnswer: "\\(-8x + 12y - 4\\)",
      canonicalAnswer: "-8x+12y-4",
    },
  },
  {
    id: "ga05-018",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Expand and simplify \\(2(3x + 5) + 4(2x - 1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "collecting like terms", "two brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "2(3x + 5) = 6x + 10",
          explanation:
            "Distribute the 2: 2 times 3x is 6x and 2 times 5 is 10. Both terms are positive.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket.",
          workingLatex: "4(2x - 1) = 8x - 4",
          explanation:
            "Distribute the 4: 4 times 2x is 8x and 4 times 1 is 4, negative because of the -1 inside.",
        },
        {
          stepNumber: 3,
          description: "Join the expansions.",
          workingLatex: "2(3x + 5) + 4(2x - 1) = 6x + 10 + 8x - 4",
          explanation:
            "The brackets are added, so each set of terms keeps its signs on the combined line, ready for collecting.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms.",
          workingLatex: "6x + 8x = 14x",
          explanation:
            "Add the coefficients of the like x-terms: 6 + 8 = 14, giving 14x.",
        },
        {
          stepNumber: 5,
          description: "Collect the constants and combine.",
          workingLatex: "10 - 4 = 6 \\;\\Rightarrow\\; 14x + 6",
          explanation:
            "Combine the constants: 10 - 4 = 6. So the answer is 14x + 6. Check: at x = 1 the original is 2(8) + 4(1) = 20 and 14(1) + 6 = 20.",
        },
      ],
      finalAnswer: "\\(14x + 6\\)",
      canonicalAnswer: "14x+6",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga05-019",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(7(2x - 1) - 3(4x - 5)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "negative multiplier", "collecting like terms", "sign rules"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the multiplier of each bracket.",
          workingLatex: "7(2x - 1) - 3(4x - 5)",
          explanation:
            "The first multiplier is 7. The second is -3 (the minus belongs to the multiplier, not just to the bracket). Naming them now prevents the sign slips that cost most marks in this type of question.",
        },
        {
          stepNumber: 2,
          description: "Expand the first bracket.",
          workingLatex: "7(2x - 1) = 14x - 7",
          explanation:
            "7 times 2x is 14x and 7 times 1 is 7, negative because of the -1 inside.",
        },
        {
          stepNumber: 3,
          description: "Expand the second bracket with multiplier -3.",
          workingLatex: "-3(4x - 5) = -12x + 15",
          explanation:
            "-3 times 4x is -12x. For the constant, (-3)(-5) = +15 by negative times negative, so this term becomes positive. Writing -3·5 = -15 here is the classic error.",
        },
        {
          stepNumber: 4,
          description: "Write both expansions on one line.",
          workingLatex: "7(2x - 1) - 3(4x - 5) = 14x - 7 - 12x + 15",
          explanation:
            "All four terms appear with the signs found above, ready to be grouped by type.",
        },
        {
          stepNumber: 5,
          description: "Collect the x-terms.",
          workingLatex: "14x - 12x = 2x",
          explanation:
            "Combine the x-coefficients: 14 - 12 = 2, giving 2x.",
        },
        {
          stepNumber: 6,
          description: "Collect the constants and combine.",
          workingLatex: "-7 + 15 = 8 \\;\\Rightarrow\\; 2x + 8",
          explanation:
            "Combine the constants: -7 + 15 = 8. So the answer is 2x + 8. Check: at x = 1 the original is 7(1) - 3(-1) = 7 + 3 = 10 and 2(1) + 8 = 10.",
        },
      ],
      finalAnswer: "\\(2x + 8\\)",
      canonicalAnswer: "2x+8",
    },
  },
  {
    id: "ga05-020",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(x(x - 4) + 2x(x + 3)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "variable multiplier", "collecting like terms", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "x(x - 4) = x^2 - 4x",
          explanation:
            "x times x = x^2 (adding the indices 1 + 1 = 2) and x times 4 = 4x, negative because of the -4 inside.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket.",
          workingLatex: "2x(x + 3) = 2x^2 + 6x",
          explanation:
            "2x times x = 2x^2 (coefficients 2 times 1 = 2, and x times x = x^2) and 2x times 3 = 6x. Both terms positive.",
        },
        {
          stepNumber: 3,
          description: "Join the two expansions.",
          workingLatex: "x(x - 4) + 2x(x + 3) = x^2 - 4x + 2x^2 + 6x",
          explanation:
            "The brackets are added, so signs are unchanged when written together on one line. The like terms are the two x^2 terms and the two x terms.",
        },
        {
          stepNumber: 4,
          description: "Collect the x^2-terms.",
          workingLatex: "x^2 + 2x^2 = 3x^2",
          explanation:
            "Add the x^2-coefficients: 1 + 2 = 3, giving 3x^2. A lone x^2 has coefficient 1.",
        },
        {
          stepNumber: 5,
          description: "Collect the x-terms and combine.",
          workingLatex: "-4x + 6x = 2x \\;\\Rightarrow\\; 3x^2 + 2x",
          explanation:
            "Combine the x-terms: -4 + 6 = 2. Note x^2 and x are NOT like terms (different powers), so they stay separate. The answer is 3x^2 + 2x. Check: at x = 2 the original is 2(-2) + 4(5) = -4 + 20 = 16 and 3(4) + 2(2) = 16.",
        },
      ],
      finalAnswer: "\\(3x^2 + 2x\\)",
      canonicalAnswer: "3x^2+2x",
    },
  },
  {
    id: "ga05-021",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(3x(x + 2) - 2x(x - 5)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "variable multiplier", "negative multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "3x(x + 2) = 3x^2 + 6x",
          explanation:
            "3x times x = 3x^2 (3·1 = 3, x·x = x^2) and 3x times 2 = 6x. Both terms are positive.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket with multiplier -2x.",
          workingLatex: "-2x(x - 5) = -2x^2 + 10x",
          explanation:
            "The bracket is subtracted, so the multiplier is the whole -2x, not just 2x. Then -2x times x = -2x^2, and (-2x)(-5) = +10x because negative times negative is positive.",
        },
        {
          stepNumber: 3,
          description: "Combine the expansions.",
          workingLatex: "3x(x + 2) - 2x(x - 5) = 3x^2 + 6x - 2x^2 + 10x",
          explanation:
            "Write all four terms with the signs from the two expansions, ready to group by power.",
        },
        {
          stepNumber: 4,
          description: "Collect the x^2-terms.",
          workingLatex: "3x^2 - 2x^2 = x^2",
          explanation:
            "Combine the x^2-coefficients: 3 - 2 = 1, giving a single x^2 (coefficient 1 is not written).",
        },
        {
          stepNumber: 5,
          description: "Collect the x-terms and combine.",
          workingLatex: "6x + 10x = 16x \\;\\Rightarrow\\; x^2 + 16x",
          explanation:
            "Add the x-terms: 6 + 10 = 16. The answer is x^2 + 16x. Check: at x = 1 the original is 3(3) - 2(-4) = 9 + 8 = 17 and 1 + 16 = 17.",
        },
      ],
      finalAnswer: "\\(x^2 + 16x\\)",
      canonicalAnswer: "x^2+16x",
    },
  },
  {
    id: "ga05-022",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(2(3x + 4) - 5(x - 2) + 3\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "negative multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "2(3x + 4) = 6x + 8",
          explanation:
            "Distribute the 2: 2 times 3x is 6x and 2 times 4 is 8. Both terms positive.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket with multiplier -5.",
          workingLatex: "-5(x - 2) = -5x + 10",
          explanation:
            "The minus in front makes the multiplier -5. Then -5 times x = -5x, and (-5)(-2) = +10 because negative times negative is positive, so the constant becomes positive.",
        },
        {
          stepNumber: 3,
          description: "Bring everything together, including the lone +3.",
          workingLatex: "2(3x + 4) - 5(x - 2) + 3 = 6x + 8 - 5x + 10 + 3",
          explanation:
            "The trailing +3 is not inside any bracket, so it is unaffected by the expansions and simply joins the other constants on the line.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms.",
          workingLatex: "6x - 5x = x",
          explanation:
            "Combine the x-coefficients: 6 - 5 = 1, giving x (a coefficient of 1 is not written).",
        },
        {
          stepNumber: 5,
          description: "Collect the constants and combine.",
          workingLatex: "8 + 10 + 3 = 21 \\;\\Rightarrow\\; x + 21",
          explanation:
            "Add the three constants: 8 + 10 + 3 = 21. So the simplified answer is x + 21. Check: at x = 1 the original is 2(7) - 5(-1) + 3 = 14 + 5 + 3 = 22 and 1 + 21 = 22.",
        },
      ],
      finalAnswer: "\\(x + 21\\)",
      canonicalAnswer: "x+21",
    },
  },
  {
    id: "ga05-023",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(4a(2a - 3) - a(a - 6)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "variable multiplier", "negative multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "4a(2a - 3) = 8a^2 - 12a",
          explanation:
            "4a times 2a = 8a^2 (4 times 2 = 8, a times a = a^2) and 4a times 3 = 12a, kept negative because of the -3 inside.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket with multiplier -a.",
          workingLatex: "-a(a - 6) = -a^2 + 6a",
          explanation:
            "The bracket is subtracted, so the multiplier is -a (coefficient -1). Then -a times a = -a^2, and (-a)(-6) = +6a because negative times negative is positive.",
        },
        {
          stepNumber: 3,
          description: "Combine the expansions.",
          workingLatex: "4a(2a - 3) - a(a - 6) = 8a^2 - 12a - a^2 + 6a",
          explanation:
            "Write all four terms with the signs found above, ready to group the a^2 pair and the a pair.",
        },
        {
          stepNumber: 4,
          description: "Collect the a^2-terms.",
          workingLatex: "8a^2 - a^2 = 7a^2",
          explanation:
            "Combine the a^2-coefficients: 8 - 1 = 7, giving 7a^2. The -a^2 counts as coefficient -1.",
        },
        {
          stepNumber: 5,
          description: "Collect the a-terms and combine.",
          workingLatex: "-12a + 6a = -6a \\;\\Rightarrow\\; 7a^2 - 6a",
          explanation:
            "Combine the a-terms: -12 + 6 = -6. The answer is 7a^2 - 6a. Check: at a = 1 the original is 4(-1) - 1(-5) = -4 + 5 = 1 and 7 - 6 = 1.",
        },
      ],
      finalAnswer: "\\(7a^2 - 6a\\)",
      canonicalAnswer: "7a^2-6a",
    },
  },
  {
    id: "ga05-024",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(2x^2(x - 3) + x(x^2 + 4x)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "powers", "variable multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket; the multiplier is 2x^2.",
          workingLatex: "2x^2(x - 3) = 2x^3 - 6x^2",
          explanation:
            "2x^2 times x = 2x^3 (x^2 times x = x^{2+1} = x^3 by adding indices) and 2x^2 times 3 = 6x^2, kept negative because of the -3 inside.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket.",
          workingLatex: "x(x^2 + 4x) = x^3 + 4x^2",
          explanation:
            "x times x^2 = x^3 and x times 4x = 4x^2 (x times x = x^2 with the 4 carried along). Both terms positive.",
        },
        {
          stepNumber: 3,
          description: "Combine the two expansions.",
          workingLatex: "2x^2(x - 3) + x(x^2 + 4x) = 2x^3 - 6x^2 + x^3 + 4x^2",
          explanation:
            "The brackets are added, so signs are unchanged on the combined line. The like terms are the two x^3 terms and the two x^2 terms.",
        },
        {
          stepNumber: 4,
          description: "Collect the x^3-terms.",
          workingLatex: "2x^3 + x^3 = 3x^3",
          explanation:
            "Add the x^3-coefficients: 2 + 1 = 3, giving 3x^3.",
        },
        {
          stepNumber: 5,
          description: "Collect the x^2-terms and combine.",
          workingLatex: "-6x^2 + 4x^2 = -2x^2 \\;\\Rightarrow\\; 3x^3 - 2x^2",
          explanation:
            "Combine the x^2-terms: -6 + 4 = -2. The answer is 3x^3 - 2x^2. Check: at x = 2 the original is 2(4)(-1) + 2(4 + 8) = -8 + 24 = 16 and 3(8) - 2(4) = 24 - 8 = 16.",
        },
      ],
      finalAnswer: "\\(3x^3 - 2x^2\\)",
      canonicalAnswer: "3x^3-2x^2",
    },
  },
  {
    id: "ga05-025",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(\\dfrac{1}{2}(4x + 6) + \\dfrac{1}{3}(9x - 3)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "fraction multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distribute the fraction over the first bracket.",
          workingLatex: "\\frac{1}{2}(4x + 6) = \\frac{1}{2} \\cdot 4x + \\frac{1}{2} \\cdot 6",
          explanation:
            "A fraction multiplier obeys the same distributive law as a whole number: \\frac{1}{2} must multiply both the 4x and the 6. Set out both products before simplifying.",
        },
        {
          stepNumber: 2,
          description: "Simplify the first bracket.",
          workingLatex: "\\frac{1}{2} \\cdot 4x = 2x, \\quad \\frac{1}{2} \\cdot 6 = 3 \\;\\Rightarrow\\; 2x + 3",
          explanation:
            "Multiplying by \\frac{1}{2} halves each term: 4 divided by 2 is 2, and 6 divided by 2 is 3. Both coefficients come out whole here, which is the point of the chosen numbers.",
        },
        {
          stepNumber: 3,
          description: "Distribute the fraction over the second bracket.",
          workingLatex: "\\frac{1}{3}(9x - 3) = \\frac{1}{3} \\cdot 9x - \\frac{1}{3} \\cdot 3",
          explanation:
            "Likewise \\frac{1}{3} multiplies both terms of the second bracket. The minus on the -3 stays in place between the two products.",
        },
        {
          stepNumber: 4,
          description: "Simplify the second bracket.",
          workingLatex: "\\frac{1}{3} \\cdot 9x = 3x, \\quad \\frac{1}{3} \\cdot 3 = 1 \\;\\Rightarrow\\; 3x - 1",
          explanation:
            "Multiplying by \\frac{1}{3} divides each term by 3: 9 divided by 3 is 3, and 3 divided by 3 is 1, kept negative because of the -3 inside.",
        },
        {
          stepNumber: 5,
          description: "Join the two expansions.",
          workingLatex: "\\frac{1}{2}(4x + 6) + \\frac{1}{3}(9x - 3) = 2x + 3 + 3x - 1",
          explanation:
            "Both brackets simplified to whole-number coefficients, which now combine easily on one line.",
        },
        {
          stepNumber: 6,
          description: "Collect the x-terms.",
          workingLatex: "2x + 3x = 5x",
          explanation:
            "Add the x-coefficients: 2 + 3 = 5, giving 5x.",
        },
        {
          stepNumber: 7,
          description: "Collect the constants and combine.",
          workingLatex: "3 - 1 = 2 \\;\\Rightarrow\\; 5x + 2",
          explanation:
            "Combine the constants: 3 - 1 = 2. So the answer is 5x + 2. Check: at x = 1 the original is \\frac{1}{2}(10) + \\frac{1}{3}(6) = 5 + 2 = 7 and 5(1) + 2 = 7.",
        },
      ],
      finalAnswer: "\\(5x + 2\\)",
      canonicalAnswer: "5x+2",
    },
  },
  {
    id: "ga05-026",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(5(2x - 3y) - 2(3x - 4y)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "two variables", "negative multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "5(2x - 3y) = 10x - 15y",
          explanation:
            "5 times 2x = 10x and 5 times 3y = 15y, negative because of the -3y inside.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket with multiplier -2.",
          workingLatex: "-2(3x - 4y) = -6x + 8y",
          explanation:
            "The minus makes the multiplier -2. Then -2 times 3x = -6x, and (-2)(-4y) = +8y because negative times negative is positive, so the y-term becomes positive.",
        },
        {
          stepNumber: 3,
          description: "Combine the expansions.",
          workingLatex: "5(2x - 3y) - 2(3x - 4y) = 10x - 15y - 6x + 8y",
          explanation:
            "Write all four terms with their signs. The x-terms and the y-terms are collected separately, as x and y are unlike.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms.",
          workingLatex: "10x - 6x = 4x",
          explanation:
            "Subtract the x-coefficients: 10 - 6 = 4, giving 4x.",
        },
        {
          stepNumber: 5,
          description: "Collect the y-terms and combine.",
          workingLatex: "-15y + 8y = -7y \\;\\Rightarrow\\; 4x - 7y",
          explanation:
            "Combine the y-terms: -15 + 8 = -7. x and y are unlike, so they cannot merge. The answer is 4x - 7y. Check: at x = 1, y = 1 the original is 5(-1) - 2(-1) = -5 + 2 = -3 and 4 - 7 = -3.",
        },
      ],
      finalAnswer: "\\(4x - 7y\\)",
      canonicalAnswer: "4x-7y",
    },
  },
  {
    id: "ga05-027",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(3x(x^2 - 2x + 4) - x(2x^2 - x)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "powers", "variable multiplier", "negative multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket across its three terms.",
          workingLatex: "3x(x^2 - 2x + 4) = 3x^3 - 6x^2 + 12x",
          explanation:
            "Distribute 3x to all three terms: 3x times x^2 = 3x^3, 3x times 2x = 6x^2 (kept negative), and 3x times 4 = 12x. Each uses the index rule x^m times x = x^{m+1}.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket with multiplier -x.",
          workingLatex: "-x(2x^2 - x) = -2x^3 + x^2",
          explanation:
            "The bracket is subtracted, so the multiplier is -x (coefficient -1). Then -x times 2x^2 = -2x^3, and (-x)(-x) = +x^2 because negative times negative is positive.",
        },
        {
          stepNumber: 3,
          description: "Write both expansions together.",
          workingLatex: "3x^3 - 6x^2 + 12x - 2x^3 + x^2",
          explanation:
            "List all five terms on one line, ready to group by degree (powers of x).",
        },
        {
          stepNumber: 4,
          description: "Group like terms by degree.",
          workingLatex: "(3x^3 - 2x^3) + (-6x^2 + x^2) + 12x",
          explanation:
            "Bracket together the x^3-terms, the x^2-terms, and the single x-term, so each group can be simplified on its own. Only terms with the same power may be combined.",
        },
        {
          stepNumber: 5,
          description: "Simplify each group.",
          workingLatex: "3x^3 - 2x^3 = x^3, \\quad -6x^2 + x^2 = -5x^2 \\;\\Rightarrow\\; x^3 - 5x^2 + 12x",
          explanation:
            "x^3: 3 - 2 = 1. x^2: -6 + 1 = -5. The 12x stands alone. The answer is x^3 - 5x^2 + 12x. Check: at x = 1 the original is 3(3) - 1(1) = 9 - 1 = 8 and 1 - 5 + 12 = 8.",
        },
      ],
      finalAnswer: "\\(x^3 - 5x^2 + 12x\\)",
      canonicalAnswer: "x^3-5x^2+12x",
    },
  },
  {
    id: "ga05-028",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The perimeter of a rectangle is given by \\(P = 2\\big(3x + 5\\big) + 2\\big(2x - 1\\big)\\). Expand and simplify to find \\(P\\) in its simplest form.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "collecting like terms", "perimeter context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "2(3x + 5) = 6x + 10",
          explanation:
            "Distribute the 2: 2 times 3x is 6x and 2 times 5 is 10. This term represents twice the length of the rectangle.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket.",
          workingLatex: "2(2x - 1) = 4x - 2",
          explanation:
            "Distribute the 2: 2 times 2x is 4x and 2 times 1 is 2, negative because of the -1 inside. This term represents twice the width.",
        },
        {
          stepNumber: 3,
          description: "Add the two expansions for the total perimeter.",
          workingLatex: "P = 6x + 10 + 4x - 2",
          explanation:
            "Perimeter is the sum of twice the length and twice the width, so the brackets are added and each set of signs is kept on the combined line.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms.",
          workingLatex: "6x + 4x = 10x",
          explanation:
            "Add the like x-coefficients: 6 + 4 = 10, giving 10x.",
        },
        {
          stepNumber: 5,
          description: "Collect the constants and combine.",
          workingLatex: "10 - 2 = 8 \\;\\Rightarrow\\; P = 10x + 8",
          explanation:
            "Combine the constants: 10 - 2 = 8. So P = 10x + 8. Check: at x = 2 the original is 2(11) + 2(3) = 22 + 6 = 28 and 10(2) + 8 = 28.",
        },
      ],
      finalAnswer: "\\(P = 10x + 8\\)",
      canonicalAnswer: "10x+8",
    },
  },
  {
    id: "ga05-029",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(4(2x - 1) - 3(2x - 1)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "negative multiplier", "collecting like terms", "repeated bracket"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket.",
          workingLatex: "4(2x - 1) = 8x - 4",
          explanation:
            "Distribute the 4: 4 times 2x is 8x and 4 times 1 is 4, kept negative because of the -1 inside.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket with multiplier -3.",
          workingLatex: "-3(2x - 1) = -6x + 3",
          explanation:
            "-3 times 2x = -6x, and (-3)(-1) = +3 because negative times negative is positive. Although the brackets are identical, the second is being subtracted, so every term flips sign.",
        },
        {
          stepNumber: 3,
          description: "Combine the expansions.",
          workingLatex: "4(2x - 1) - 3(2x - 1) = 8x - 4 - 6x + 3",
          explanation:
            "List all four terms with the signs found above, ready to group.",
        },
        {
          stepNumber: 4,
          description: "Collect the x-terms.",
          workingLatex: "8x - 6x = 2x",
          explanation:
            "Combine the x-coefficients: 8 - 6 = 2, giving 2x.",
        },
        {
          stepNumber: 5,
          description: "Collect the constants and combine.",
          workingLatex: "-4 + 3 = -1 \\;\\Rightarrow\\; 2x - 1",
          explanation:
            "Combine the constants: -4 + 3 = -1. The answer is 2x - 1. As a sanity check, this also equals (4 - 3)(2x - 1) = 1(2x - 1); and at x = 1 the original is 4(1) - 3(1) = 1 while 2(1) - 1 = 1.",
        },
      ],
      finalAnswer: "\\(2x - 1\\)",
      canonicalAnswer: "2x-1",
    },
  },
  {
    id: "ga05-030",
    topicRef: "ga05",
    topicTitle: "Expanding a single bracket",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Expand and simplify \\(2ab(3a - 2b) - 3a(ab - b^2)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["expanding brackets", "two variables", "powers", "negative multiplier", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket; the multiplier is 2ab.",
          workingLatex: "2ab(3a - 2b) = 6a^2b - 4ab^2",
          explanation:
            "Handle numbers and each letter separately. 2ab times 3a = 6a^2b (2 times 3 = 6, a times a = a^2, the b just rides along) and 2ab times 2b = 4ab^2 (here b times b = b^2), kept negative because of the -2b inside.",
        },
        {
          stepNumber: 2,
          description: "Expand the second bracket with multiplier -3a.",
          workingLatex: "-3a(ab - b^2) = -3a^2b + 3ab^2",
          explanation:
            "The bracket is subtracted, so the multiplier is the whole -3a. Then -3a times ab = -3a^2b, and (-3a)(-b^2) = +3ab^2 because negative times negative is positive.",
        },
        {
          stepNumber: 3,
          description: "Write both expansions together.",
          workingLatex: "6a^2b - 4ab^2 - 3a^2b + 3ab^2",
          explanation:
            "List all four terms ready to group. The like terms are the a^2b pair and the ab^2 pair — matched by having identical letter parts.",
        },
        {
          stepNumber: 4,
          description: "Group like terms.",
          workingLatex: "(6a^2b - 3a^2b) + (-4ab^2 + 3ab^2)",
          explanation:
            "a^2b and ab^2 are DIFFERENT terms (different powers of a and b), so they cannot be merged with each other — only within their own group.",
        },
        {
          stepNumber: 5,
          description: "Simplify each group.",
          workingLatex: "6a^2b - 3a^2b = 3a^2b, \\quad -4ab^2 + 3ab^2 = -ab^2 \\;\\Rightarrow\\; 3a^2b - ab^2",
          explanation:
            "a^2b: 6 - 3 = 3. ab^2: -4 + 3 = -1, giving -ab^2. The answer is 3a^2b - ab^2. Check: at a = 1, b = 1 the original is 2(1) - 3(0) = 2 and 3 - 1 = 2.",
        },
      ],
      finalAnswer: "\\(3a^2b - ab^2\\)",
      canonicalAnswer: "3a^2b-ab^2",
    },
  },
];
