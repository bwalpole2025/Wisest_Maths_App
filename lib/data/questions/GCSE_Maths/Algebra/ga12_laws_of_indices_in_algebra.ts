/*
 * Topic: Laws of indices in algebra
 * Ref:   ga12   (DfE A4)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: applying the laws of indices to algebraic terms.
 *   (1) Multiplication law  a^m·a^n = a^{m+n}  (incl. coefficients, e.g. 2x^3·5x^2).
 *   (2) Division law        a^m/a^n = a^{m-n}   (incl. coefficients, e.g. 12x^5/(3x^2)).
 *   (3) Power of a power    (a^m)^n = a^{mn}     (cube/square the coefficient too,
 *       e.g. (2x^2)^3 = 8x^6).
 *   (4) The zero index      a^0 = 1.
 *   (5) Combinations across several letters, e.g. (3x^2 y)^2·2xy^3.
 *   Challenge items touch simple negative indices, e.g. x^5·x^{-2}=x^3 and
 *   writing 1/x^2 as x^{-2}. Most content stays at positive integer indices;
 *   negatives are reserved for Challenge.
 *
 * Difficulty split (30 total):
 *   Foundation :  4  (ga12-001 .. ga12-004)
 *   Standard   : 14  (ga12-005 .. ga12-018)
 *   Challenge  : 12  (ga12-019 .. ga12-030)
 *
 * Id range: ga12-001 .. ga12-030 (zero-padded).
 *
 * LaTeX note: questionText maths is wrapped in \( ... \) and uses \dfrac for
 *   display fractions; workingLatex is RAW (unwrapped) and uses \frac (hard
 *   project rule — never \tfrac). Exponents are written ^{...} (e.g. x^{7}).
 *   Multiplication is \cdot (never \times or *) unless the question is about ×.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ======================= FOUNDATION (001–004) =======================
  {
    id: "ga12-001",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(x^{3} \\cdot x^{4}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the law to use.",
          workingLatex: "x^{3} \\cdot x^{4}",
          explanation:
            "Both factors are powers of the SAME base \\( x \\), and they are MULTIPLIED together. That is exactly the situation the multiplication law of indices is for: \\( a^{m} \\cdot a^{n} = a^{m+n} \\). The rule says that when you multiply powers of the same base you ADD the indices — you do NOT multiply them.",
        },
        {
          stepNumber: 2,
          description: "Add the indices.",
          workingLatex: "x^{3} \\cdot x^{4} = x^{3+4}",
          explanation:
            "Keep the base as a single \\( x \\) and write the new index as the sum of the two old indices, \\( 3 + 4 \\). At this stage just record the addition; we evaluate it on the next line.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the sum.",
          workingLatex: "x^{3+4} = x^{7}",
          explanation:
            "\\( 3 + 4 = 7 \\), so the answer is \\( x^{7} \\). Sanity check by writing the powers out in full: \\( (x\\cdot x\\cdot x)(x\\cdot x\\cdot x\\cdot x) \\) is seven \\( x \\)'s multiplied together, which is \\( x^{7} \\). A common slip is to write \\( x^{12} \\) by doing \\( 3\\times 4 \\) — that is the rule for a power of a power, not for multiplying.",
        },
      ],
      finalAnswer: "\\(x^{7}\\)",
      canonicalAnswer: "x^7",
    },
  },
  {
    id: "ga12-002",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{y^{8}}{y^{3}}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laws-of-indices", "division-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the law to use.",
          workingLatex: "\\frac{y^{8}}{y^{3}}",
          explanation:
            "We are DIVIDING two powers of the same base \\( y \\). That is the trigger for the division law: \\( \\frac{a^{m}}{a^{n}} = a^{m-n} \\). When you divide powers of the same base you SUBTRACT the indices (top index minus bottom index).",
        },
        {
          stepNumber: 2,
          description: "Subtract the indices.",
          workingLatex: "\\frac{y^{8}}{y^{3}} = y^{8-3}",
          explanation:
            "Take the bottom power away from the top power: the new index is \\( 8 - 3 \\). The order matters — it is always top minus bottom, not the other way round.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the subtraction.",
          workingLatex: "y^{8-3} = y^{5}",
          explanation:
            "\\( 8 - 3 = 5 \\), giving \\( y^{5} \\). Check by cancelling: three of the eight \\( y \\)'s on top cancel with the three on the bottom, leaving \\( 8 - 3 = 5 \\) factors of \\( y \\), so \\( y^{5} \\).",
        },
      ],
      finalAnswer: "\\(y^{5}\\)",
      canonicalAnswer: "y^5",
    },
  },
  {
    id: "ga12-003",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Simplify \\(\\left(x^{3}\\right)^{4}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the law to use.",
          workingLatex: "\\left(x^{3}\\right)^{4}",
          explanation:
            "Here one power, \\( x^{3} \\), is itself raised to ANOTHER power, \\( 4 \\). That is the power-of-a-power law: \\( (a^{m})^{n} = a^{mn} \\). When you raise a power to a power you MULTIPLY the two indices — you do NOT add them.",
        },
        {
          stepNumber: 2,
          description: "Multiply the indices.",
          workingLatex: "\\left(x^{3}\\right)^{4} = x^{3 \\cdot 4}",
          explanation:
            "The new index is the product of the inner and outer powers, \\( 3 \\cdot 4 \\). Why multiply? Because \\( (x^{3})^{4} = x^{3}\\cdot x^{3}\\cdot x^{3}\\cdot x^{3} \\) — four copies of \\( x^{3} \\) — and adding those indices gives \\( 3+3+3+3 \\), which is the same as \\( 3\\times 4 \\).",
        },
        {
          stepNumber: 3,
          description: "Evaluate the product.",
          workingLatex: "x^{3 \\cdot 4} = x^{12}",
          explanation:
            "\\( 3 \\times 4 = 12 \\), giving \\( x^{12} \\). The classic error is to ADD and write \\( x^{7} \\) — but that is the multiplication law, which only applies when you multiply two separate powers, not when you raise one to another.",
        },
      ],
      finalAnswer: "\\(x^{12}\\)",
      canonicalAnswer: "x^12",
    },
  },
  {
    id: "ga12-004",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Write down the value of \\(p^{0}\\), where \\(p\\) is any non-zero number.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["laws-of-indices", "zero-index"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the zero-index rule.",
          workingLatex: "p^{0} = 1",
          explanation:
            "Any non-zero base raised to the power \\( 0 \\) equals \\( 1 \\). This is the zero-index rule: \\( a^{0} = 1 \\) for \\( a \\neq 0 \\). It does not matter what \\( p \\) is — as long as it is not zero, \\( p^{0} \\) is exactly \\( 1 \\).",
        },
        {
          stepNumber: 2,
          description: "Set up a power divided by itself.",
          workingLatex: "\\frac{p^{3}}{p^{3}}",
          explanation:
            "To see why the rule is true, take any power of \\( p \\) and divide it by itself, for example \\( \\frac{p^{3}}{p^{3}} \\). Anything (non-zero) divided by itself is \\( 1 \\), so we already know this fraction equals \\( 1 \\).",
        },
        {
          stepNumber: 3,
          description: "Apply the division law to the same fraction.",
          workingLatex: "\\frac{p^{3}}{p^{3}} = p^{3-3} = p^{0}",
          explanation:
            "Now evaluate the same fraction with the division law instead: SUBTRACT the indices, \\( 3 - 3 = 0 \\), giving \\( p^{0} \\).",
        },
        {
          stepNumber: 4,
          description: "Conclude that the value is 1.",
          workingLatex: "p^{0} = 1",
          explanation:
            "The one fraction equals both \\( p^{0} \\) and \\( 1 \\), so the two must be equal: \\( p^{0} = 1 \\). A common slip is to write \\( p^{0} = 0 \\) — that is wrong; a zero index gives \\( 1 \\), not \\( 0 \\).",
        },
      ],
      finalAnswer: "\\(p^{0} = 1\\)",
      canonicalAnswer: "1",
    },
  },

  // ======================= STANDARD (005–018) =======================
  {
    id: "ga12-005",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(2x^{3} \\cdot 5x^{2}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law", "coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate the numbers from the powers of x.",
          workingLatex: "2x^{3} \\cdot 5x^{2} = (2 \\cdot 5)\\,(x^{3} \\cdot x^{2})",
          explanation:
            "Multiplication can be done in any order, so group the number parts (the coefficients) together and the \\( x \\)-parts together. The coefficients will be handled with ordinary arithmetic and the powers with the index laws — keep the two jobs SEPARATE.",
        },
        {
          stepNumber: 2,
          description: "Multiply the coefficients.",
          workingLatex: "2 \\cdot 5 = 10",
          explanation:
            "The numbers \\( 2 \\) and \\( 5 \\) are just multiplied normally: \\( 2 \\times 5 = 10 \\). Coefficients are never subject to the index laws — only the powers of \\( x \\) are.",
        },
        {
          stepNumber: 3,
          description: "Apply the multiplication law to the x-parts.",
          workingLatex: "x^{3} \\cdot x^{2} = x^{3+2} = x^{5}",
          explanation:
            "Same base \\( x \\), multiplied, so ADD the indices: \\( 3 + 2 = 5 \\), giving \\( x^{5} \\). (Adding, not multiplying — \\( 3\\times 2 \\) would be the wrong law here.)",
        },
        {
          stepNumber: 4,
          description: "Combine the coefficient and the power.",
          workingLatex: "2x^{3} \\cdot 5x^{2} = 10x^{5}",
          explanation:
            "Put the coefficient \\( 10 \\) in front of \\( x^{5} \\). Check with \\( x = 2 \\): the original is \\( 2\\cdot 2^{3} \\cdot 5 \\cdot 2^{2} = 16 \\cdot 20 = 320 \\); the answer is \\( 10\\cdot 2^{5} = 10\\cdot 32 = 320 \\). They match.",
        },
      ],
      finalAnswer: "\\(10x^{5}\\)",
      canonicalAnswer: "10x^5",
    },
  },
  {
    id: "ga12-006",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{12x^{5}}{3x^{2}}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "division-law", "coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Separate the numbers from the powers of x.",
          workingLatex: "\\frac{12x^{5}}{3x^{2}} = \\frac{12}{3} \\cdot \\frac{x^{5}}{x^{2}}",
          explanation:
            "Split the single fraction into a number fraction and an \\( x \\) fraction. The coefficients are divided with arithmetic; the powers are handled with the division law — kept SEPARATE so neither rule interferes with the other.",
        },
        {
          stepNumber: 2,
          description: "Divide the coefficients.",
          workingLatex: "\\frac{12}{3} = 4",
          explanation: "Divide the numbers normally: \\( 12 \\div 3 = 4 \\). This part has nothing to do with indices.",
        },
        {
          stepNumber: 3,
          description: "Apply the division law to the x-parts.",
          workingLatex: "\\frac{x^{5}}{x^{2}} = x^{5-2} = x^{3}",
          explanation:
            "Same base \\( x \\), divided, so SUBTRACT the indices (top minus bottom): \\( 5 - 2 = 3 \\), giving \\( x^{3} \\).",
        },
        {
          stepNumber: 4,
          description: "Combine the coefficient and the power.",
          workingLatex: "\\frac{12x^{5}}{3x^{2}} = 4x^{3}",
          explanation:
            "Multiply the results together: \\( 4 \\cdot x^{3} = 4x^{3} \\). Check with \\( x = 2 \\): original \\( = \\frac{12\\cdot 32}{3\\cdot 4} = \\frac{384}{12} = 32 \\); answer \\( = 4\\cdot 2^{3} = 32 \\). Match.",
        },
      ],
      finalAnswer: "\\(4x^{3}\\)",
      canonicalAnswer: "4x^3",
    },
  },
  {
    id: "ga12-007",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\left(2x^{2}\\right)^{3}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the outer power to EVERY factor inside the bracket.",
          workingLatex: "\\left(2x^{2}\\right)^{3} = 2^{3} \\cdot \\left(x^{2}\\right)^{3}",
          explanation:
            "Everything inside the bracket is raised to the power \\( 3 \\) — including the coefficient \\( 2 \\). This uses \\( (ab)^{n} = a^{n}b^{n} \\): a power outside a bracket spreads onto each factor inside. The single most common error here is to cube only the \\( x \\) and leave the \\( 2 \\) alone.",
        },
        {
          stepNumber: 2,
          description: "Cube the coefficient.",
          workingLatex: "2^{3} = 2 \\cdot 2 \\cdot 2 = 8",
          explanation:
            "Raise the number to the outer power: \\( 2^{3} = 8 \\). Note this is \\( 2 \\) cubed, not \\( 2\\times 3 = 6 \\); the power tells you how many copies to multiply, not what to multiply by.",
        },
        {
          stepNumber: 3,
          description: "Apply the power-of-a-power law to the x-part.",
          workingLatex: "\\left(x^{2}\\right)^{3} = x^{2 \\cdot 3} = x^{6}",
          explanation:
            "A power raised to a power: MULTIPLY the indices, \\( 2\\times 3 = 6 \\), giving \\( x^{6} \\).",
        },
        {
          stepNumber: 4,
          description: "Combine the coefficient and the power.",
          workingLatex: "\\left(2x^{2}\\right)^{3} = 8x^{6}",
          explanation:
            "Put the cubed coefficient in front: \\( 8x^{6} \\). Check with \\( x = 2 \\): original \\( = (2\\cdot 4)^{3} = 8^{3} = 512 \\); answer \\( = 8\\cdot 2^{6} = 8\\cdot 64 = 512 \\). Match.",
        },
      ],
      finalAnswer: "\\(8x^{6}\\)",
      canonicalAnswer: "8x^6",
    },
  },
  {
    id: "ga12-008",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(4a^{6} \\cdot 3a^{5}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law", "coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group coefficients and powers.",
          workingLatex: "4a^{6} \\cdot 3a^{5} = (4 \\cdot 3)\\,(a^{6} \\cdot a^{5})",
          explanation:
            "Rearrange so the numbers are together and the powers of \\( a \\) are together. Coefficients are dealt with by arithmetic; powers by the index law. Keeping them apart stops you accidentally applying an index rule to the numbers.",
        },
        {
          stepNumber: 2,
          description: "Multiply the coefficients.",
          workingLatex: "4 \\cdot 3 = 12",
          explanation:
            "Multiply the two numbers normally: \\( 4 \\times 3 = 12 \\). This is plain arithmetic — the index laws never touch the coefficients, only the powers of \\( a \\).",
        },
        {
          stepNumber: 3,
          description: "Add the indices (multiplication law).",
          workingLatex: "a^{6} \\cdot a^{5} = a^{6+5} = a^{11}",
          explanation:
            "Same base \\( a \\), multiplied, so ADD: \\( 6 + 5 = 11 \\), giving \\( a^{11} \\). (Adding, not multiplying — \\( 6\\times 5 = 30 \\) would be wrong.)",
        },
        {
          stepNumber: 4,
          description: "Combine the coefficient and the power.",
          workingLatex: "4a^{6} \\cdot 3a^{5} = 12a^{11}",
          explanation:
            "Write the coefficient \\( 12 \\) directly in front of \\( a^{11} \\), giving \\( 12a^{11} \\). The number and the power sit side by side — they are not added or multiplied into each other.",
        },
      ],
      finalAnswer: "\\(12a^{11}\\)",
      canonicalAnswer: "12a^11",
    },
  },
  {
    id: "ga12-009",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{20y^{9}}{4y^{4}}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "division-law", "coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split into number and power parts.",
          workingLatex: "\\frac{20y^{9}}{4y^{4}} = \\frac{20}{4} \\cdot \\frac{y^{9}}{y^{4}}",
          explanation:
            "Separate the coefficients from the powers of \\( y \\). The number fraction is ordinary division; the \\( y \\) fraction is for the division law.",
        },
        {
          stepNumber: 2,
          description: "Divide the coefficients.",
          workingLatex: "\\frac{20}{4} = 5",
          explanation:
            "Divide the numbers normally: \\( 20 \\div 4 = 5 \\). The coefficients are divided, never subtracted — subtraction is reserved for the indices in the next step.",
        },
        {
          stepNumber: 3,
          description: "Subtract the indices (division law).",
          workingLatex: "\\frac{y^{9}}{y^{4}} = y^{9-4} = y^{5}",
          explanation:
            "Same base \\( y \\), divided, so SUBTRACT (top minus bottom): \\( 9 - 4 = 5 \\), giving \\( y^{5} \\).",
        },
        {
          stepNumber: 4,
          description: "Combine the coefficient and the power.",
          workingLatex: "\\frac{20y^{9}}{4y^{4}} = 5y^{5}",
          explanation:
            "Multiply the two results back together: \\( 5 \\cdot y^{5} = 5y^{5} \\). The coefficient simply sits in front of the power.",
        },
      ],
      finalAnswer: "\\(5y^{5}\\)",
      canonicalAnswer: "5y^5",
    },
  },
  {
    id: "ga12-010",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\left(3m^{4}\\right)^{2}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square every factor inside the bracket.",
          workingLatex: "\\left(3m^{4}\\right)^{2} = 3^{2} \\cdot \\left(m^{4}\\right)^{2}",
          explanation:
            "The outer power \\( 2 \\) applies to BOTH the coefficient \\( 3 \\) and the power \\( m^{4} \\), because a power outside a bracket spreads onto every factor inside. Do not forget to square the \\( 3 \\) — leaving the coefficient alone is the usual mistake.",
        },
        {
          stepNumber: 2,
          description: "Square the coefficient.",
          workingLatex: "3^{2} = 9",
          explanation:
            "Raise the number to the outer power: \\( 3^{2} = 3\\times 3 = 9 \\). Squaring means '\\( 3 \\) times itself', not \\( 3\\times 2 = 6 \\) — the index counts how many copies you multiply.",
        },
        {
          stepNumber: 3,
          description: "Multiply the indices (power of a power).",
          workingLatex: "\\left(m^{4}\\right)^{2} = m^{4 \\cdot 2} = m^{8}",
          explanation:
            "Power raised to a power: MULTIPLY the indices, \\( 4\\times 2 = 8 \\), giving \\( m^{8} \\).",
        },
        {
          stepNumber: 4,
          description: "Combine the coefficient and the power.",
          workingLatex: "\\left(3m^{4}\\right)^{2} = 9m^{8}",
          explanation:
            "Put the squared coefficient in front: \\( 9m^{8} \\). Check with \\( m = 1 \\): original \\( = (3)^{2} = 9 \\); answer \\( = 9\\cdot 1 = 9 \\). Match.",
        },
      ],
      finalAnswer: "\\(9m^{8}\\)",
      canonicalAnswer: "9m^8",
    },
  },
  {
    id: "ga12-011",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(x^{4} \\cdot x \\cdot x^{6}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the index on the lone x.",
          workingLatex: "x^{4} \\cdot x \\cdot x^{6} = x^{4} \\cdot x^{1} \\cdot x^{6}",
          explanation:
            "A single \\( x \\) with no visible power means \\( x^{1} \\). Writing the hidden \\( 1 \\) in makes the next step clear and stops you forgetting to count that \\( x \\) when you add up the indices.",
        },
        {
          stepNumber: 2,
          description: "Add all the indices (multiplication law).",
          workingLatex: "x^{4} \\cdot x^{1} \\cdot x^{6} = x^{4+1+6}",
          explanation:
            "Three powers of the same base \\( x \\) multiplied together: ADD all the indices. The multiplication law extends to as many factors as you like — just total the powers.",
        },
        {
          stepNumber: 3,
          description: "Evaluate the sum.",
          workingLatex: "x^{4+1+6} = x^{11}",
          explanation:
            "Add the three indices: \\( 4 + 1 + 6 = 11 \\), giving \\( x^{11} \\). Don't forget the middle \\( 1 \\) — leaving it out would wrongly give \\( x^{10} \\).",
        },
      ],
      finalAnswer: "\\(x^{11}\\)",
      canonicalAnswer: "x^11",
    },
  },
  {
    id: "ga12-012",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{a^{5} \\cdot a^{3}}{a^{2}}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law", "division-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Simplify the numerator first (multiplication law).",
          workingLatex: "a^{5} \\cdot a^{3} = a^{5+3} = a^{8}",
          explanation:
            "On the top, two powers of \\( a \\) are multiplied, so ADD the indices: \\( 5 + 3 = 8 \\). Always tidy the numerator into a single power before you divide.",
        },
        {
          stepNumber: 2,
          description: "Rewrite the fraction.",
          workingLatex: "\\frac{a^{5} \\cdot a^{3}}{a^{2}} = \\frac{a^{8}}{a^{2}}",
          explanation: "Replace the top with \\( a^{8} \\), leaving \\( a^{2} \\) on the bottom. The expression is now a simple quotient of two powers.",
        },
        {
          stepNumber: 3,
          description: "Apply the division law.",
          workingLatex: "\\frac{a^{8}}{a^{2}} = a^{8-2} = a^{6}",
          explanation:
            "Now divide: SUBTRACT the indices (top minus bottom), \\( 8 - 2 = 6 \\), giving \\( a^{6} \\).",
        },
      ],
      finalAnswer: "\\(a^{6}\\)",
      canonicalAnswer: "a^6",
    },
  },
  {
    id: "ga12-013",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(7t^{0} + t^{3} \\cdot t^{0}\\), where \\(t \\neq 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "zero-index", "multiplication-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Apply the zero-index rule.",
          workingLatex: "t^{0} = 1",
          explanation:
            "Wherever \\( t^{0} \\) appears it equals \\( 1 \\) (zero-index rule, valid because \\( t \\neq 0 \\)). We will use this fact in both terms of the expression.",
        },
        {
          stepNumber: 2,
          description: "Deal with the first term.",
          workingLatex: "7t^{0} = 7 \\cdot 1 = 7",
          explanation:
            "The \\( 7 \\) is a coefficient and is unaffected by the index; only the \\( t \\)-part is raised to \\( 0 \\). Since \\( t^{0} = 1 \\), the term is \\( 7\\times 1 = 7 \\). A common slip is to think the whole term is \\( 1 \\) — but the \\( 7 \\) stays.",
        },
        {
          stepNumber: 3,
          description: "Deal with the second term (multiplication law).",
          workingLatex: "t^{3} \\cdot t^{0} = t^{3+0} = t^{3}",
          explanation:
            "Multiplying powers of \\( t \\): ADD the indices, \\( 3 + 0 = 3 \\), giving \\( t^{3} \\). (Equivalently \\( t^{3}\\cdot 1 = t^{3} \\), which is the same answer.)",
        },
        {
          stepNumber: 4,
          description: "Add the two terms.",
          workingLatex: "7 + t^{3} = t^{3} + 7",
          explanation:
            "These are unlike terms — a plain number and a \\( t^{3} \\) term — so they cannot be combined further; just write the sum. It is conventional to write the higher-power term first.",
        },
      ],
      finalAnswer: "\\(t^{3} + 7\\)",
      canonicalAnswer: "t^3 + 7",
    },
  },
  {
    id: "ga12-014",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(6p^{2} \\cdot 4p^{5} \\cdot p\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law", "coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group coefficients and powers; write the hidden index.",
          workingLatex: "6p^{2} \\cdot 4p^{5} \\cdot p = (6 \\cdot 4)\\,(p^{2} \\cdot p^{5} \\cdot p^{1})",
          explanation:
            "Collect the numbers \\( 6 \\) and \\( 4 \\) together and the powers of \\( p \\) together; the lone \\( p \\) is \\( p^{1} \\). Coefficients and powers are handled separately.",
        },
        {
          stepNumber: 2,
          description: "Multiply the coefficients.",
          workingLatex: "6 \\cdot 4 = 24",
          explanation:
            "Multiply the numbers normally: \\( 6 \\times 4 = 24 \\). There are only two coefficients here — the lone \\( p \\) has no number in front, so nothing else joins this product.",
        },
        {
          stepNumber: 3,
          description: "Add the indices (multiplication law).",
          workingLatex: "p^{2} \\cdot p^{5} \\cdot p^{1} = p^{2+5+1} = p^{8}",
          explanation:
            "Same base \\( p \\), all multiplied, so ADD every index: \\( 2 + 5 + 1 = 8 \\), giving \\( p^{8} \\). The hidden \\( 1 \\) from the lone \\( p \\) must be counted in the total.",
        },
        {
          stepNumber: 4,
          description: "Combine the coefficient and the power.",
          workingLatex: "6p^{2} \\cdot 4p^{5} \\cdot p = 24p^{8}",
          explanation:
            "Write the coefficient \\( 24 \\) in front of \\( p^{8} \\), giving \\( 24p^{8} \\). Check with \\( p = 1 \\): original \\( = 6\\cdot 4\\cdot 1 = 24 \\); answer \\( = 24\\cdot 1 = 24 \\). Match.",
        },
      ],
      finalAnswer: "\\(24p^{8}\\)",
      canonicalAnswer: "24p^8",
    },
  },
  {
    id: "ga12-015",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{15c^{8}}{5c^{8}}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "division-law", "zero-index"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split into number and power parts.",
          workingLatex: "\\frac{15c^{8}}{5c^{8}} = \\frac{15}{5} \\cdot \\frac{c^{8}}{c^{8}}",
          explanation: "Separate the coefficients from the powers of \\( c \\). Notice the powers on top and bottom are equal — that is the clue this will involve a zero index.",
        },
        {
          stepNumber: 2,
          description: "Divide the coefficients.",
          workingLatex: "\\frac{15}{5} = 3",
          explanation:
            "Divide the numbers: \\( 15 \\div 5 = 3 \\). The coefficients are unequal even though the powers are identical, so this \\( 3 \\) survives into the final answer.",
        },
        {
          stepNumber: 3,
          description: "Subtract the indices (division law).",
          workingLatex: "\\frac{c^{8}}{c^{8}} = c^{8-8} = c^{0}",
          explanation:
            "Same base \\( c \\), divided: SUBTRACT, \\( 8 - 8 = 0 \\), giving \\( c^{0} \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the zero-index rule.",
          workingLatex: "c^{0} = 1 \\quad\\Rightarrow\\quad 3 \\cdot c^{0} = 3 \\cdot 1 = 3",
          explanation:
            "Since \\( c^{0} = 1 \\), the \\( c \\)-part disappears and only the coefficient \\( 3 \\) remains. The answer is just the number \\( 3 \\) — there is no \\( c \\) left at all.",
        },
      ],
      finalAnswer: "\\(3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga12-016",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\left(5x^{3}\\right)^{2} \\cdot x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "multiplication-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Deal with the bracket first (power of a power).",
          workingLatex: "\\left(5x^{3}\\right)^{2} = 5^{2} \\cdot \\left(x^{3}\\right)^{2}",
          explanation:
            "Resolve the bracket before doing the multiplication by \\( x \\). The power \\( 2 \\) applies to both the coefficient \\( 5 \\) and the power \\( x^{3} \\).",
        },
        {
          stepNumber: 2,
          description: "Square the coefficient.",
          workingLatex: "5^{2} = 25",
          explanation:
            "Raise the number to the outer power: \\( 5^{2} = 5\\times 5 = 25 \\). Squaring the coefficient is the step most often skipped — the \\( 5 \\) gets the power just as much as the \\( x^{3} \\) does.",
        },
        {
          stepNumber: 3,
          description: "Multiply the indices for the x-part.",
          workingLatex: "\\left(x^{3}\\right)^{2} = x^{3 \\cdot 2} = x^{6}",
          explanation:
            "Power of a power: MULTIPLY the indices, \\( 3\\times 2 = 6 \\). So the whole bracket simplifies to \\( 25x^{6} \\).",
        },
        {
          stepNumber: 4,
          description: "Now multiply by x (multiplication law).",
          workingLatex: "25x^{6} \\cdot x = 25x^{6} \\cdot x^{1} = 25x^{6+1}",
          explanation:
            "The leftover \\( x \\) is \\( x^{1} \\). Multiplying powers of \\( x \\): ADD the indices. The coefficient \\( 25 \\) is unaffected and stays in front.",
        },
        {
          stepNumber: 5,
          description: "Finish.",
          workingLatex: "25x^{6+1} = 25x^{7}",
          explanation:
            "Add the indices: \\( 6 + 1 = 7 \\), giving \\( 25x^{7} \\). The coefficient \\( 25 \\) is unchanged — only the \\( x \\)-indices were added.",
        },
      ],
      finalAnswer: "\\(25x^{7}\\)",
      canonicalAnswer: "25x^7",
    },
  },
  {
    id: "ga12-017",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(2x^{2}y \\cdot 3x^{4}y^{5}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law", "several-letters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Group like parts together.",
          workingLatex: "2x^{2}y \\cdot 3x^{4}y^{5} = (2 \\cdot 3)\\,(x^{2} \\cdot x^{4})\\,(y \\cdot y^{5})",
          explanation:
            "With two letters, collect the coefficients, the \\( x \\)-powers and the \\( y \\)-powers into three separate groups. The index laws apply to each base on its own — you never combine an \\( x \\) with a \\( y \\).",
        },
        {
          stepNumber: 2,
          description: "Multiply the coefficients.",
          workingLatex: "2 \\cdot 3 = 6",
          explanation:
            "Multiply the numbers: \\( 2 \\times 3 = 6 \\). With two letters in play it helps to keep the coefficient as a separate running total so it doesn't get mixed into the index arithmetic.",
        },
        {
          stepNumber: 3,
          description: "Add the x-indices.",
          workingLatex: "x^{2} \\cdot x^{4} = x^{2+4} = x^{6}",
          explanation:
            "Same base \\( x \\), multiplied, so ADD the indices: \\( 2 + 4 = 6 \\), giving \\( x^{6} \\). The \\( y \\)-terms are ignored here — each base is handled on its own.",
        },
        {
          stepNumber: 4,
          description: "Add the y-indices (remember the hidden 1).",
          workingLatex: "y \\cdot y^{5} = y^{1} \\cdot y^{5} = y^{1+5} = y^{6}",
          explanation:
            "The lone \\( y \\) is \\( y^{1} \\). ADD: \\( 1 + 5 = 6 \\), giving \\( y^{6} \\). Forgetting that hidden \\( 1 \\) would wrongly give \\( y^{5} \\).",
        },
        {
          stepNumber: 5,
          description: "Combine all three groups.",
          workingLatex: "2x^{2}y \\cdot 3x^{4}y^{5} = 6x^{6}y^{6}",
          explanation:
            "Write coefficient, then \\( x \\)-power, then \\( y \\)-power: \\( 6x^{6}y^{6} \\). Keeping the letters in alphabetical order is the usual convention and makes answers easy to compare.",
        },
      ],
      finalAnswer: "\\(6x^{6}y^{6}\\)",
      canonicalAnswer: "6x^6*y^6",
    },
  },
  {
    id: "ga12-018",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{18a^{7}b^{4}}{6a^{2}b}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "division-law", "several-letters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split into number, a-part and b-part.",
          workingLatex: "\\frac{18a^{7}b^{4}}{6a^{2}b} = \\frac{18}{6} \\cdot \\frac{a^{7}}{a^{2}} \\cdot \\frac{b^{4}}{b^{1}}",
          explanation:
            "Separate the fraction into three: the coefficients, the \\( a \\)-powers and the \\( b \\)-powers. The bottom \\( b \\) is \\( b^{1} \\). Apply the division law to each letter independently.",
        },
        {
          stepNumber: 2,
          description: "Divide the coefficients.",
          workingLatex: "\\frac{18}{6} = 3",
          explanation:
            "Divide the numbers: \\( 18 \\div 6 = 3 \\). The coefficients divide cleanly here; with each letter handled separately, this \\( 3 \\) just becomes the number in front of the answer.",
        },
        {
          stepNumber: 3,
          description: "Subtract the a-indices.",
          workingLatex: "\\frac{a^{7}}{a^{2}} = a^{7-2} = a^{5}",
          explanation:
            "Same base \\( a \\), divided, so SUBTRACT (top minus bottom): \\( 7 - 2 = 5 \\), giving \\( a^{5} \\). The \\( b \\)-terms wait their turn — division law is applied to one base at a time.",
        },
        {
          stepNumber: 4,
          description: "Subtract the b-indices.",
          workingLatex: "\\frac{b^{4}}{b^{1}} = b^{4-1} = b^{3}",
          explanation: "Same base \\( b \\): SUBTRACT, \\( 4 - 1 = 3 \\), giving \\( b^{3} \\). Don't drop the hidden \\( 1 \\) on the bottom \\( b \\).",
        },
        {
          stepNumber: 5,
          description: "Combine all three parts.",
          workingLatex: "\\frac{18a^{7}b^{4}}{6a^{2}b} = 3a^{5}b^{3}",
          explanation:
            "Write coefficient, then \\( a \\)-power, then \\( b \\)-power: \\( 3a^{5}b^{3} \\). All three pieces are multiplied together — none cancels to \\( 1 \\) this time since every index stayed positive.",
        },
      ],
      finalAnswer: "\\(3a^{5}b^{3}\\)",
      canonicalAnswer: "3a^5*b^3",
    },
  },

  // ======================= CHALLENGE (019–030) =======================
  {
    id: "ga12-019",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\left(3x^{2}y\\right)^{2} \\cdot 2xy^{3}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "several-letters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket: apply the power 2 to every factor.",
          workingLatex: "\\left(3x^{2}y\\right)^{2} = 3^{2} \\cdot \\left(x^{2}\\right)^{2} \\cdot y^{2}",
          explanation:
            "Always resolve the bracket before multiplying by anything outside it. The outer power \\( 2 \\) hits the coefficient \\( 3 \\), the \\( x^{2} \\) and the \\( y \\) (which is \\( y^{1} \\)). Every factor inside the bracket is raised to the power.",
        },
        {
          stepNumber: 2,
          description: "Evaluate each part of the bracket.",
          workingLatex: "3^{2} = 9, \\quad \\left(x^{2}\\right)^{2} = x^{2 \\cdot 2} = x^{4}, \\quad y^{2} = y^{1 \\cdot 2} = y^{2}",
          explanation:
            "Square the coefficient: \\( 3^{2} = 9 \\). For the powers, MULTIPLY the indices (power of a power): \\( x \\) gives \\( 2\\times 2 = 4 \\); \\( y \\) gives \\( 1\\times 2 = 2 \\).",
        },
        {
          stepNumber: 3,
          description: "Write the expanded bracket.",
          workingLatex: "\\left(3x^{2}y\\right)^{2} = 9x^{4}y^{2}",
          explanation: "Collect the three results into a single expression: \\( 9x^{4}y^{2} \\).",
        },
        {
          stepNumber: 4,
          description: "Now multiply by 2xy^3; group like parts.",
          workingLatex: "9x^{4}y^{2} \\cdot 2xy^{3} = (9 \\cdot 2)\\,(x^{4} \\cdot x^{1})\\,(y^{2} \\cdot y^{3})",
          explanation:
            "Collect the coefficients \\( 9 \\) and \\( 2 \\), the \\( x \\)-powers (the lone \\( x \\) is \\( x^{1} \\)) and the \\( y \\)-powers. Now the multiplication law applies to each base.",
        },
        {
          stepNumber: 5,
          description: "Multiply coefficients and add indices.",
          workingLatex: "9 \\cdot 2 = 18, \\quad x^{4} \\cdot x^{1} = x^{4+1} = x^{5}, \\quad y^{2} \\cdot y^{3} = y^{2+3} = y^{5}",
          explanation:
            "Numbers: \\( 9\\times 2 = 18 \\). For multiplied powers, ADD the indices: \\( x \\) gives \\( 4+1 = 5 \\); \\( y \\) gives \\( 2+3 = 5 \\).",
        },
        {
          stepNumber: 6,
          description: "Combine.",
          workingLatex: "\\left(3x^{2}y\\right)^{2} \\cdot 2xy^{3} = 18x^{5}y^{5}",
          explanation:
            "Assemble coefficient, \\( x \\)-power and \\( y \\)-power into one expression: \\( 18x^{5}y^{5} \\). Notice the two laws were used in turn — power of a power to clear the bracket, then the multiplication law to merge the results.",
        },
      ],
      finalAnswer: "\\(18x^{5}y^{5}\\)",
      canonicalAnswer: "18x^5*y^5",
    },
  },
  {
    id: "ga12-020",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(x^{5} \\cdot x^{-2}\\), giving your answer with a positive index.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law", "negative-index"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the law.",
          workingLatex: "x^{5} \\cdot x^{-2}",
          explanation:
            "Same base \\( x \\), multiplied, so the multiplication law applies: ADD the indices, \\( a^{m}\\cdot a^{n} = a^{m+n} \\). The rule works for negative indices in exactly the same way — you just add a negative number.",
        },
        {
          stepNumber: 2,
          description: "Set up the sum of the indices.",
          workingLatex: "x^{5} \\cdot x^{-2} = x^{5 + (-2)}",
          explanation:
            "The new index is \\( 5 + (-2) \\). Keep the minus sign attached to the \\( 2 \\); the second index is \\( -2 \\), not \\( +2 \\).",
        },
        {
          stepNumber: 3,
          description: "Add the indices, being careful with the sign.",
          workingLatex: "x^{5 + (-2)} = x^{5-2}",
          explanation:
            "Adding a negative is the same as subtracting: \\( 5 + (-2) = 5 - 2 \\). A common slip is to write \\( 5 + 2 = 7 \\) — that ignores the minus sign.",
        },
        {
          stepNumber: 4,
          description: "Evaluate.",
          workingLatex: "x^{5-2} = x^{3}",
          explanation:
            "\\( 5 - 2 = 3 \\), giving \\( x^{3} \\). This index is already positive, so the answer is in the required form and no further rewriting is needed.",
        },
      ],
      finalAnswer: "\\(x^{3}\\)",
      canonicalAnswer: "x^3",
    },
  },
  {
    id: "ga12-021",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Write \\(\\dfrac{1}{x^{2}}\\) as a single power of \\(x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "negative-index", "division-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the negative-index meaning.",
          workingLatex: "a^{-n} = \\frac{1}{a^{n}}",
          explanation:
            "A negative index means 'one over' the positive power. Reading this rule backwards, \\( \\frac{1}{a^{n}} = a^{-n} \\). The expression we have is exactly of this 'one over a power' form, so it should rewrite as a negative power.",
        },
        {
          stepNumber: 2,
          description: "Write the 1 on top as a power of x.",
          workingLatex: "\\frac{1}{x^{2}} = \\frac{x^{0}}{x^{2}}",
          explanation:
            "To turn this into a division of powers, write the \\( 1 \\) on top as \\( x^{0} \\), since \\( x^{0} = 1 \\). Now both top and bottom are powers of \\( x \\).",
        },
        {
          stepNumber: 3,
          description: "Apply the division law.",
          workingLatex: "\\frac{x^{0}}{x^{2}} = x^{0-2}",
          explanation:
            "Divide the powers by SUBTRACTING the indices (top minus bottom): \\( 0 - 2 \\). This is where the negative sign comes from — the bigger power is on the bottom.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the index.",
          workingLatex: "x^{0-2} = x^{-2}",
          explanation:
            "\\( 0 - 2 = -2 \\), so \\( \\frac{1}{x^{2}} = x^{-2} \\). Check the sign: the power sat on the BOTTOM, so it comes up with a MINUS sign.",
        },
      ],
      finalAnswer: "\\(x^{-2}\\)",
      canonicalAnswer: "x^-2",
    },
  },
  {
    id: "ga12-022",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{\\left(2x^{3}\\right)^{2}}{4x^{2}}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "division-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket on top first.",
          workingLatex: "\\left(2x^{3}\\right)^{2} = 2^{2} \\cdot \\left(x^{3}\\right)^{2}",
          explanation:
            "Resolve the power of a power before dividing. The outer \\( 2 \\) applies to both the coefficient \\( 2 \\) and the power \\( x^{3} \\) — square the number and deal with the power separately.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the numerator.",
          workingLatex: "2^{2} = 4, \\quad \\left(x^{3}\\right)^{2} = x^{3 \\cdot 2} = x^{6} \\;\\Rightarrow\\; \\left(2x^{3}\\right)^{2} = 4x^{6}",
          explanation:
            "Square the coefficient: \\( 2^{2} = 4 \\). MULTIPLY the indices for the power of a power: \\( 3\\times 2 = 6 \\). The top becomes \\( 4x^{6} \\).",
        },
        {
          stepNumber: 3,
          description: "Rewrite the whole fraction.",
          workingLatex: "\\frac{\\left(2x^{3}\\right)^{2}}{4x^{2}} = \\frac{4x^{6}}{4x^{2}}",
          explanation: "Replace the numerator with \\( 4x^{6} \\); the denominator is still \\( 4x^{2} \\).",
        },
        {
          stepNumber: 4,
          description: "Split into number and power parts.",
          workingLatex: "\\frac{4x^{6}}{4x^{2}} = \\frac{4}{4} \\cdot \\frac{x^{6}}{x^{2}}",
          explanation: "Separate coefficients from powers of \\( x \\), ready for ordinary division and the division law.",
        },
        {
          stepNumber: 5,
          description: "Divide coefficients; subtract indices.",
          workingLatex: "\\frac{4}{4} = 1, \\quad \\frac{x^{6}}{x^{2}} = x^{6-2} = x^{4}",
          explanation:
            "The numbers give \\( 1 \\). The division law gives \\( 6 - 2 = 4 \\), so \\( x^{4} \\). Remember a coefficient of \\( 1 \\) is not written explicitly.",
        },
        {
          stepNumber: 6,
          description: "Combine.",
          workingLatex: "\\frac{\\left(2x^{3}\\right)^{2}}{4x^{2}} = x^{4}",
          explanation:
            "The answer is \\( x^{4} \\). Check with \\( x = 2 \\): top \\( = (2\\cdot 8)^{2} = 16^{2} = 256 \\), bottom \\( = 4\\cdot 4 = 16 \\), so \\( 256/16 = 16 = 2^{4} \\). Match.",
        },
      ],
      finalAnswer: "\\(x^{4}\\)",
      canonicalAnswer: "x^4",
    },
  },
  {
    id: "ga12-023",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{10x^{8}y^{3}}{2x^{8}y^{6}}\\), giving your answer with positive indices.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "division-law", "negative-index"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split into number, x-part and y-part.",
          workingLatex: "\\frac{10x^{8}y^{3}}{2x^{8}y^{6}} = \\frac{10}{2} \\cdot \\frac{x^{8}}{x^{8}} \\cdot \\frac{y^{3}}{y^{6}}",
          explanation: "Separate the coefficients and each letter into its own fraction. Apply the division law to each base independently.",
        },
        {
          stepNumber: 2,
          description: "Divide coefficients.",
          workingLatex: "\\frac{10}{2} = 5",
          explanation:
            "Divide the numbers: \\( 10 \\div 2 = 5 \\). This coefficient is unaffected by what happens to the letters — it stays as \\( 5 \\) throughout.",
        },
        {
          stepNumber: 3,
          description: "Subtract the x-indices.",
          workingLatex: "\\frac{x^{8}}{x^{8}} = x^{8-8} = x^{0} = 1",
          explanation:
            "Same base \\( x \\): SUBTRACT, \\( 8 - 8 = 0 \\). By the zero-index rule \\( x^{0} = 1 \\), so the \\( x \\)-part vanishes entirely.",
        },
        {
          stepNumber: 4,
          description: "Subtract the y-indices.",
          workingLatex: "\\frac{y^{3}}{y^{6}} = y^{3-6} = y^{-3}",
          explanation:
            "Same base \\( y \\): SUBTRACT, \\( 3 - 6 = -3 \\), giving \\( y^{-3} \\). The index is negative because the larger power was on the bottom.",
        },
        {
          stepNumber: 5,
          description: "Make the index positive.",
          workingLatex: "y^{-3} = \\frac{1}{y^{3}}",
          explanation:
            "The question asks for positive indices, so rewrite \\( y^{-3} \\) as \\( \\frac{1}{y^{3}} \\) using \\( a^{-n} = \\frac{1}{a^{n}} \\). A negative power moves the term to the denominator.",
        },
        {
          stepNumber: 6,
          description: "Combine.",
          workingLatex: "\\frac{10x^{8}y^{3}}{2x^{8}y^{6}} = 5 \\cdot 1 \\cdot \\frac{1}{y^{3}} = \\frac{5}{y^{3}}",
          explanation: "Coefficient \\( 5 \\), the \\( x \\)-part is \\( 1 \\) (so it drops out), and the \\( y \\)-part is \\( \\frac{1}{y^{3}} \\): the answer is \\( \\frac{5}{y^{3}} \\).",
        },
      ],
      finalAnswer: "\\(\\dfrac{5}{y^{3}}\\)",
      canonicalAnswer: "5/y^3",
    },
  },
  {
    id: "ga12-024",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\left(4x^{2}y^{3}\\right)^{2} \\cdot \\dfrac{1}{8x^{3}y^{4}}\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "division-law", "several-letters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the squared bracket.",
          workingLatex: "\\left(4x^{2}y^{3}\\right)^{2} = 4^{2} \\cdot \\left(x^{2}\\right)^{2} \\cdot \\left(y^{3}\\right)^{2}",
          explanation:
            "The power \\( 2 \\) applies to the coefficient \\( 4 \\) and to both powers inside the bracket. Square the coefficient and MULTIPLY each index by \\( 2 \\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate the bracket.",
          workingLatex: "4^{2} = 16, \\quad \\left(x^{2}\\right)^{2} = x^{4}, \\quad \\left(y^{3}\\right)^{2} = y^{6} \\;\\Rightarrow\\; 16x^{4}y^{6}",
          explanation:
            "\\( 4^{2} = 16 \\); \\( 2\\times 2 = 4 \\) gives \\( x^{4} \\); \\( 3\\times 2 = 6 \\) gives \\( y^{6} \\). The bracket is \\( 16x^{4}y^{6} \\).",
        },
        {
          stepNumber: 3,
          description: "Write the product as a single fraction.",
          workingLatex: "16x^{4}y^{6} \\cdot \\frac{1}{8x^{3}y^{4}} = \\frac{16x^{4}y^{6}}{8x^{3}y^{4}}",
          explanation: "Multiplying by \\( \\frac{1}{8x^{3}y^{4}} \\) just puts that whole expression onto the denominator, turning the product into one fraction.",
        },
        {
          stepNumber: 4,
          description: "Split into number, x-part and y-part.",
          workingLatex: "\\frac{16x^{4}y^{6}}{8x^{3}y^{4}} = \\frac{16}{8} \\cdot \\frac{x^{4}}{x^{3}} \\cdot \\frac{y^{6}}{y^{4}}",
          explanation: "Separate coefficients and letters into their own fractions, ready for the division law.",
        },
        {
          stepNumber: 5,
          description: "Divide coefficients; subtract indices.",
          workingLatex: "\\frac{16}{8} = 2, \\quad \\frac{x^{4}}{x^{3}} = x^{4-3} = x^{1}, \\quad \\frac{y^{6}}{y^{4}} = y^{6-4} = y^{2}",
          explanation:
            "Numbers: \\( 16 \\div 8 = 2 \\). SUBTRACT indices: \\( x \\) gives \\( 4-3 = 1 \\); \\( y \\) gives \\( 6-4 = 2 \\).",
        },
        {
          stepNumber: 6,
          description: "Combine.",
          workingLatex: "\\frac{16x^{4}y^{6}}{8x^{3}y^{4}} = 2xy^{2}",
          explanation:
            "Coefficient \\( 2 \\), then \\( x^{1} = x \\) (an index of \\( 1 \\) is not written), then \\( y^{2} \\): the answer is \\( 2xy^{2} \\). All indices came out positive, so nothing needs moving to a denominator.",
        },
      ],
      finalAnswer: "\\(2xy^{2}\\)",
      canonicalAnswer: "2x*y^2",
    },
  },
  {
    id: "ga12-025",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{6x^{4} \\cdot 4x^{5}}{8x^{3}}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law", "division-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply coefficients on the numerator.",
          workingLatex: "6x^{4} \\cdot 4x^{5} = (6 \\cdot 4)\\,(x^{4} \\cdot x^{5})",
          explanation:
            "Deal with the top first. Group the coefficients \\( 6 \\) and \\( 4 \\) and the powers of \\( x \\). The multiplication law will handle the powers.",
        },
        {
          stepNumber: 2,
          description: "Finish the numerator (multiplication law).",
          workingLatex: "(6 \\cdot 4)\\,(x^{4} \\cdot x^{5}) = 24x^{9}",
          explanation:
            "Multiply the numbers \\( 6\\times 4 = 24 \\) and ADD the indices \\( 4+5 = 9 \\). The numerator simplifies to \\( 24x^{9} \\).",
        },
        {
          stepNumber: 3,
          description: "Rewrite the fraction.",
          workingLatex: "\\frac{6x^{4} \\cdot 4x^{5}}{8x^{3}} = \\frac{24x^{9}}{8x^{3}}",
          explanation: "Place the simplified numerator \\( 24x^{9} \\) over the denominator \\( 8x^{3} \\).",
        },
        {
          stepNumber: 4,
          description: "Split into number and power parts.",
          workingLatex: "\\frac{24x^{9}}{8x^{3}} = \\frac{24}{8} \\cdot \\frac{x^{9}}{x^{3}}",
          explanation: "Separate coefficients from the powers of \\( x \\), ready for the division law.",
        },
        {
          stepNumber: 5,
          description: "Divide coefficients; subtract indices.",
          workingLatex: "\\frac{24}{8} = 3, \\quad \\frac{x^{9}}{x^{3}} = x^{9-3} = x^{6}",
          explanation:
            "Numbers: \\( 24 \\div 8 = 3 \\). Division law: \\( 9 - 3 = 6 \\), giving \\( x^{6} \\).",
        },
        {
          stepNumber: 6,
          description: "Combine.",
          workingLatex: "\\frac{6x^{4} \\cdot 4x^{5}}{8x^{3}} = 3x^{6}",
          explanation:
            "Answer \\( 3x^{6} \\). Check with \\( x = 1 \\): top \\( = 6\\cdot 4 = 24 \\), bottom \\( = 8 \\), \\( 24/8 = 3 = 3\\cdot 1^{6} \\). Match.",
        },
      ],
      finalAnswer: "\\(3x^{6}\\)",
      canonicalAnswer: "3x^6",
    },
  },
  {
    id: "ga12-026",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\left(2a^{3}b\\right)^{3} \\cdot \\left(3ab^{2}\\right)^{2}\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "multiplication-law", "several-letters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the first bracket (cube every factor).",
          workingLatex: "\\left(2a^{3}b\\right)^{3} = 2^{3} \\cdot \\left(a^{3}\\right)^{3} \\cdot b^{3}",
          explanation:
            "Resolve each bracket separately before multiplying them together. The outer power \\( 3 \\) hits the coefficient \\( 2 \\), the \\( a^{3} \\) and the \\( b \\) (which is \\( b^{1} \\)).",
        },
        {
          stepNumber: 2,
          description: "Evaluate the first bracket.",
          workingLatex: "2^{3} \\cdot \\left(a^{3}\\right)^{3} \\cdot b^{3} = 8a^{9}b^{3}",
          explanation:
            "Cube the coefficient: \\( 2^{3} = 8 \\). MULTIPLY indices: \\( a \\) gives \\( 3\\times 3 = 9 \\); \\( b \\) gives \\( 1\\times 3 = 3 \\). So the first bracket is \\( 8a^{9}b^{3} \\).",
        },
        {
          stepNumber: 3,
          description: "Expand the second bracket (square every factor).",
          workingLatex: "\\left(3ab^{2}\\right)^{2} = 3^{2} \\cdot a^{2} \\cdot \\left(b^{2}\\right)^{2} = 9a^{2}b^{4}",
          explanation:
            "Square the coefficient: \\( 3^{2} = 9 \\). MULTIPLY indices: \\( a^{1} \\) gives \\( 1\\times 2 = 2 \\); \\( b^{2} \\) gives \\( 2\\times 2 = 4 \\). So the second bracket is \\( 9a^{2}b^{4} \\).",
        },
        {
          stepNumber: 4,
          description: "Multiply the two results; group like parts.",
          workingLatex: "8a^{9}b^{3} \\cdot 9a^{2}b^{4} = (8 \\cdot 9)\\,(a^{9} \\cdot a^{2})\\,(b^{3} \\cdot b^{4})",
          explanation:
            "With both brackets expanded, collect the coefficients, the \\( a \\)-powers and the \\( b \\)-powers into three groups. Each base is then merged with the multiplication law — the \\( a \\)'s never mix with the \\( b \\)'s.",
        },
        {
          stepNumber: 5,
          description: "Multiply coefficients; add indices.",
          workingLatex: "8 \\cdot 9 = 72, \\quad a^{9} \\cdot a^{2} = a^{11}, \\quad b^{3} \\cdot b^{4} = b^{7}",
          explanation:
            "Numbers: \\( 8\\times 9 = 72 \\). ADD indices: \\( a \\) gives \\( 9+2 = 11 \\); \\( b \\) gives \\( 3+4 = 7 \\).",
        },
        {
          stepNumber: 6,
          description: "Combine.",
          workingLatex: "\\left(2a^{3}b\\right)^{3} \\cdot \\left(3ab^{2}\\right)^{2} = 72a^{11}b^{7}",
          explanation:
            "Assemble the pieces: \\( 72a^{11}b^{7} \\). The big indices come from cubing and squaring brackets and then adding — a good reminder that the coefficient arithmetic (\\( 8\\times 9 = 72 \\)) and the index arithmetic stay on separate tracks.",
        },
      ],
      finalAnswer: "\\(72a^{11}b^{7}\\)",
      canonicalAnswer: "72a^11*b^7",
    },
  },
  {
    id: "ga12-027",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{\\left(x^{4}\\right)^{3}}{x^{5} \\cdot x^{2}}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "multiplication-law", "division-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Simplify the numerator (power of a power).",
          workingLatex: "\\left(x^{4}\\right)^{3} = x^{4 \\cdot 3} = x^{12}",
          explanation:
            "On top a power is raised to a power, so MULTIPLY: \\( 4\\times 3 = 12 \\), giving \\( x^{12} \\). (Adding to get \\( x^{7} \\) would be the wrong law for a bracketed power.)",
        },
        {
          stepNumber: 2,
          description: "Simplify the denominator (multiplication law).",
          workingLatex: "x^{5} \\cdot x^{2} = x^{5+2} = x^{7}",
          explanation:
            "On the bottom two powers are multiplied, so ADD: \\( 5+2 = 7 \\), giving \\( x^{7} \\).",
        },
        {
          stepNumber: 3,
          description: "Rewrite the fraction.",
          workingLatex: "\\frac{\\left(x^{4}\\right)^{3}}{x^{5} \\cdot x^{2}} = \\frac{x^{12}}{x^{7}}",
          explanation: "With top and bottom each reduced to a single power, the fraction is now a simple quotient of two powers of \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "Apply the division law.",
          workingLatex: "\\frac{x^{12}}{x^{7}} = x^{12-7} = x^{5}",
          explanation:
            "SUBTRACT the indices: \\( 12 - 7 = 5 \\), giving \\( x^{5} \\). Notice how all three laws appeared here: power of a power on top, multiplication on the bottom, and division to finish.",
        },
      ],
      finalAnswer: "\\(x^{5}\\)",
      canonicalAnswer: "x^5",
    },
  },
  {
    id: "ga12-028",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(x^{2} \\cdot x^{-5} \\cdot x^{4}\\), giving your answer with a positive index.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "multiplication-law", "negative-index"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the law.",
          workingLatex: "x^{2} \\cdot x^{-5} \\cdot x^{4}",
          explanation:
            "Three powers of the same base \\( x \\), all multiplied, so the multiplication law applies: ADD all the indices, including the negative one. The negative index is added just like any other number.",
        },
        {
          stepNumber: 2,
          description: "Write the sum of the indices.",
          workingLatex: "x^{2} \\cdot x^{-5} \\cdot x^{4} = x^{2 + (-5) + 4}",
          explanation:
            "Total the three indices, keeping the minus sign on the \\( -5 \\): the new index is \\( 2 + (-5) + 4 \\).",
        },
        {
          stepNumber: 3,
          description: "Add the indices carefully.",
          workingLatex: "x^{2 + (-5) + 4} = x^{2 - 5 + 4}",
          explanation:
            "Adding \\( -5 \\) is the same as subtracting \\( 5 \\). Work left to right: \\( 2 - 5 = -3 \\), then \\( -3 + 4 = 1 \\).",
        },
        {
          stepNumber: 4,
          description: "Evaluate the index.",
          workingLatex: "x^{2 - 5 + 4} = x^{1}",
          explanation: "The total index works out to \\( 1 \\), so we have \\( x^{1} \\).",
        },
        {
          stepNumber: 5,
          description: "Tidy up.",
          workingLatex: "x^{1} = x",
          explanation:
            "\\( x^{1} \\) is just \\( x \\), and the index is positive as required. Sanity check with \\( x = 2 \\): \\( 2^{2}\\cdot 2^{-5}\\cdot 2^{4} = 4\\cdot \\frac{1}{32}\\cdot 16 = \\frac{64}{32} = 2 \\). Match.",
        },
      ],
      finalAnswer: "\\(x\\)",
      canonicalAnswer: "x",
    },
  },
  {
    id: "ga12-029",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{\\left(2x^{2}y^{3}\\right)^{3}}{4x^{4}y^{5}}\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "division-law", "several-letters"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the cubed bracket on top.",
          workingLatex: "\\left(2x^{2}y^{3}\\right)^{3} = 2^{3} \\cdot \\left(x^{2}\\right)^{3} \\cdot \\left(y^{3}\\right)^{3}",
          explanation:
            "Cube every factor inside the bracket — including the coefficient \\( 2 \\). For each power, MULTIPLY its index by the outer power \\( 3 \\).",
        },
        {
          stepNumber: 2,
          description: "Evaluate the numerator.",
          workingLatex: "2^{3} = 8, \\quad \\left(x^{2}\\right)^{3} = x^{6}, \\quad \\left(y^{3}\\right)^{3} = y^{9} \\;\\Rightarrow\\; 8x^{6}y^{9}",
          explanation:
            "\\( 2^{3} = 8 \\); \\( 2\\times 3 = 6 \\) gives \\( x^{6} \\); \\( 3\\times 3 = 9 \\) gives \\( y^{9} \\). The numerator is \\( 8x^{6}y^{9} \\).",
        },
        {
          stepNumber: 3,
          description: "Rewrite the fraction and split it up.",
          workingLatex: "\\frac{8x^{6}y^{9}}{4x^{4}y^{5}} = \\frac{8}{4} \\cdot \\frac{x^{6}}{x^{4}} \\cdot \\frac{y^{9}}{y^{5}}",
          explanation: "Separate coefficients, \\( x \\)-powers and \\( y \\)-powers into their own fractions, ready for the division law.",
        },
        {
          stepNumber: 4,
          description: "Divide coefficients; subtract indices.",
          workingLatex: "\\frac{8}{4} = 2, \\quad \\frac{x^{6}}{x^{4}} = x^{6-4} = x^{2}, \\quad \\frac{y^{9}}{y^{5}} = y^{9-5} = y^{4}",
          explanation:
            "Numbers: \\( 8 \\div 4 = 2 \\). SUBTRACT indices: \\( x \\) gives \\( 6-4 = 2 \\); \\( y \\) gives \\( 9-5 = 4 \\).",
        },
        {
          stepNumber: 5,
          description: "Combine.",
          workingLatex: "\\frac{\\left(2x^{2}y^{3}\\right)^{3}}{4x^{4}y^{5}} = 2x^{2}y^{4}",
          explanation:
            "Assemble coefficient, \\( x \\)-power and \\( y \\)-power: \\( 2x^{2}y^{4} \\). Both indices stayed positive, so the answer is a clean product with nothing in the denominator.",
        },
      ],
      finalAnswer: "\\(2x^{2}y^{4}\\)",
      canonicalAnswer: "2x^2*y^4",
    },
  },
  {
    id: "ga12-030",
    topicRef: "ga12",
    topicTitle: "Laws of indices in algebra",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Simplify \\(\\dfrac{\\left(3x^{2}\\right)^{2} \\cdot x^{-3}}{9x}\\), giving your answer as a single power of \\(x\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["laws-of-indices", "power-of-a-power", "negative-index", "division-law"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket (power of a power).",
          workingLatex: "\\left(3x^{2}\\right)^{2} = 3^{2} \\cdot \\left(x^{2}\\right)^{2} = 9x^{4}",
          explanation:
            "Square the coefficient: \\( 3^{2} = 9 \\). MULTIPLY the index: \\( 2\\times 2 = 4 \\), giving \\( x^{4} \\). So the bracket is \\( 9x^{4} \\).",
        },
        {
          stepNumber: 2,
          description: "Simplify the numerator (multiplication law).",
          workingLatex: "9x^{4} \\cdot x^{-3} = 9 \\cdot x^{4 + (-3)} = 9x^{1}",
          explanation:
            "The coefficient \\( 9 \\) stays in front. Multiplying powers of \\( x \\): ADD the indices, \\( 4 + (-3) = 1 \\), giving \\( 9x^{1} \\). Keep the minus sign on the \\( -3 \\).",
        },
        {
          stepNumber: 3,
          description: "Rewrite the fraction.",
          workingLatex: "\\frac{\\left(3x^{2}\\right)^{2} \\cdot x^{-3}}{9x} = \\frac{9x^{1}}{9x^{1}}",
          explanation: "The denominator \\( 9x \\) is \\( 9x^{1} \\). Top and bottom are now both \\( 9x^{1} \\), so this will simplify dramatically.",
        },
        {
          stepNumber: 4,
          description: "Divide coefficients; subtract indices.",
          workingLatex: "\\frac{9}{9} = 1, \\quad \\frac{x^{1}}{x^{1}} = x^{1-1} = x^{0}",
          explanation:
            "Numbers: \\( 9 \\div 9 = 1 \\). Division law: \\( 1 - 1 = 0 \\), giving \\( x^{0} \\).",
        },
        {
          stepNumber: 5,
          description: "Apply the zero-index rule.",
          workingLatex: "1 \\cdot x^{0} = x^{0} = 1",
          explanation:
            "\\( x^{0} = 1 \\), so the whole expression simplifies to \\( 1 \\). As a single power of \\( x \\) this is \\( x^{0} \\). Check with \\( x = 2 \\): numerator \\( = (3\\cdot 4)^{2}\\cdot 2^{-3} = 144\\cdot \\frac{1}{8} = 18 \\); denominator \\( = 9\\cdot 2 = 18 \\); \\( 18/18 = 1 \\). Match.",
        },
      ],
      finalAnswer: "\\(x^{0} = 1\\)",
      canonicalAnswer: "1",
    },
  },
];
