/**
 * Topic: Substitution into formulae and expressions
 * Ref: ga03  (DfE A2)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: substituting numerical values into expressions and formulae —
 *   positive integers, negatives, decimals and fractions into expressions such
 *   as 3x+2, x^2-4x, (a+b)/2; respecting BIDMAS (brackets/powers before
 *   multiply/divide before add/subtract); two-variable expressions; named
 *   scientific/real formulae (perimeter & area, v=u+at, F=9/5 C+32, speed =
 *   distance/time, A=pi r^2, volumes, s=ut+1/2 a t^2, E=1/2 m v^2, lens
 *   1/u + 1/v); and the crucial sign rules (-3)^2 = 9 versus -3^2 = -9.
 *   This is about SUBSTITUTION & EVALUATION only — no rearranging / change of subject.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga03-001 .. ga03-012  (12)
 *   - Standard:   ga03-013 .. ga03-022  (10)
 *   - Challenge:  ga03-023 .. ga03-030  (8)
 * Id range: ga03-001 .. ga03-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot
 *   for multiplication, per project style rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–012) ─────────────────────────
  {
    id: "ga03-001",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Work out the value of \\(3x + 2\\) when \\(x = 4\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "linear expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Replace the letter with its value in brackets.",
          workingLatex: "3x + 2 = 3(4) + 2",
          explanation:
            "Everywhere you see the letter x, write the number it stands for. Putting the 4 inside brackets keeps the 'times' clear: 3x means 3 multiplied by x, so it becomes 3 multiplied by 4.",
        },
        {
          stepNumber: 2,
          description: "Multiply before adding.",
          workingLatex: "3(4) + 2 = 12 + 2",
          explanation:
            "BIDMAS tells us to do the multiplication before the addition, so work out 3 times 4 = 12 first. Leave the + 2 untouched until the multiplication is done.",
        },
        {
          stepNumber: 3,
          description: "Add to finish.",
          workingLatex: "12 + 2 = 14",
          explanation:
            "With only the addition left, add the two numbers to reach the final value of 14.",
        },
      ],
      finalAnswer: "\\(3x+2 = 14\\) when \\(x=4\\).",
      canonicalAnswer: "14",
    },
  },
  {
    id: "ga03-002",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Work out the value of \\(5a - 1\\) when \\(a = 6\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "linear expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the value in brackets.",
          workingLatex: "5a - 1 = 5(6) - 1",
          explanation:
            "Replace the letter a with 6, written in brackets. The term 5a means 5 multiplied by a, so it becomes 5 multiplied by 6.",
        },
        {
          stepNumber: 2,
          description: "Multiply before subtracting.",
          workingLatex: "5(6) - 1 = 30 - 1",
          explanation:
            "Order of operations puts multiplication before subtraction, so evaluate 5 times 6 = 30 before touching the − 1.",
        },
        {
          stepNumber: 3,
          description: "Subtract to finish.",
          workingLatex: "30 - 1 = 29",
          explanation:
            "Only the subtraction remains, so take 1 away from 30 to get the answer 29.",
        },
      ],
      finalAnswer: "\\(5a-1 = 29\\) when \\(a=6\\).",
      canonicalAnswer: "29",
    },
  },
  {
    id: "ga03-003",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Work out the value of \\(\\dfrac{x}{2} + 3\\) when \\(x = 10\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "fraction", "linear expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the value into the fraction.",
          workingLatex: "\\frac{x}{2} + 3 = \\frac{10}{2} + 3",
          explanation:
            "The x sits on top of the fraction, so replace it with 10 to get 10 over 2. The + 3 outside the fraction is left untouched for now.",
        },
        {
          stepNumber: 2,
          description: "Carry out the division first.",
          workingLatex: "\\frac{10}{2} + 3 = 5 + 3",
          explanation:
            "A fraction is just a division, and division comes before addition in BIDMAS. So work out 10 divided by 2 = 5 before adding the 3.",
        },
        {
          stepNumber: 3,
          description: "Add to finish.",
          workingLatex: "5 + 3 = 8",
          explanation: "Add the two numbers to reach the final value of 8.",
        },
      ],
      finalAnswer: "\\(\\dfrac{x}{2}+3 = 8\\) when \\(x=10\\).",
      canonicalAnswer: "8",
    },
  },
  {
    id: "ga03-004",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The perimeter of a square is given by \\(P = 4s\\), where \\(s\\) is the side length. Find \\(P\\) when \\(s = 7\\,\\mathrm{cm}\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "perimeter"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the side length into the formula.",
          workingLatex: "P = 4s = 4(7)",
          explanation:
            "The letter s in the formula stands for the side length, which is 7 cm. Replace s with 7; the term 4s means 4 multiplied by the side.",
        },
        {
          stepNumber: 2,
          description: "Multiply to evaluate.",
          workingLatex: "4(7) = 28",
          explanation:
            "Work out 4 times 7 = 28. The four sides of a square are equal, so multiplying one side by 4 gives the total perimeter in cm.",
        },
      ],
      finalAnswer: "\\(P = 28\\,\\mathrm{cm}\\).",
      canonicalAnswer: "28",
    },
  },
  {
    id: "ga03-005",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Work out the value of \\(2x + 5\\) when \\(x = 9\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "linear expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the value in brackets.",
          workingLatex: "2x + 5 = 2(9) + 5",
          explanation:
            "Replace x with 9, written in brackets to keep the multiplication clear. The term 2x means 2 multiplied by x.",
        },
        {
          stepNumber: 2,
          description: "Multiply before adding.",
          workingLatex: "2(9) + 5 = 18 + 5",
          explanation:
            "Multiplication comes before addition, so evaluate 2 times 9 = 18 before dealing with the + 5.",
        },
        {
          stepNumber: 3,
          description: "Add to finish.",
          workingLatex: "18 + 5 = 23",
          explanation: "Add the remaining numbers to reach the answer 23.",
        },
      ],
      finalAnswer: "\\(2x+5 = 23\\) when \\(x=9\\).",
      canonicalAnswer: "23",
    },
  },
  {
    id: "ga03-006",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Work out the value of \\(10 - 2y\\) when \\(y = 3\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "linear expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the value in brackets.",
          workingLatex: "10 - 2y = 10 - 2(3)",
          explanation:
            "Replace y with 3. The 10 stays as it is; the term 2y means 2 multiplied by y, so it becomes 2 multiplied by 3.",
        },
        {
          stepNumber: 2,
          description: "Multiply before subtracting.",
          workingLatex: "10 - 2(3) = 10 - 6",
          explanation:
            "BIDMAS puts the multiplication before the subtraction, so work out 2 times 3 = 6 first. The 6 is what gets taken away from 10.",
        },
        {
          stepNumber: 3,
          description: "Subtract to finish.",
          workingLatex: "10 - 6 = 4",
          explanation: "Take 6 away from 10 to reach the final value of 4.",
        },
      ],
      finalAnswer: "\\(10-2y = 4\\) when \\(y=3\\).",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga03-007",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Work out the value of \\(x^2\\) when \\(x = 6\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the value in brackets.",
          workingLatex: "x^2 = (6)^2",
          explanation:
            "Replace x with 6, keeping the bracket so it is clear the whole number is being squared.",
        },
        {
          stepNumber: 2,
          description: "Write the square as a product.",
          workingLatex: "(6)^2 = 6 \\cdot 6",
          explanation:
            "Squaring a number means multiplying it by itself, so 6 squared is 6 times 6. It does not mean 6 times 2 — that is the most common slip with the small 2.",
        },
        {
          stepNumber: 3,
          description: "Multiply to finish.",
          workingLatex: "6 \\cdot 6 = 36",
          explanation: "Work out 6 times 6 = 36 to reach the final value.",
        },
      ],
      finalAnswer: "\\(x^2 = 36\\) when \\(x=6\\).",
      canonicalAnswer: "36",
    },
  },
  {
    id: "ga03-008",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Work out the value of \\(\\dfrac{a + b}{2}\\) when \\(a = 8\\) and \\(b = 6\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "fraction", "two variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute both values into the fraction.",
          workingLatex: "\\frac{a + b}{2} = \\frac{8 + 6}{2}",
          explanation:
            "Replace a with 8 and b with 6 in the numerator. The whole of a + b sits on top of the fraction, above the 2.",
        },
        {
          stepNumber: 2,
          description: "Work out the numerator first.",
          workingLatex: "\\frac{8 + 6}{2} = \\frac{14}{2}",
          explanation:
            "The line of a fraction acts like a bracket, so finish the top before dividing: 8 + 6 = 14. A common slip is to divide only the 6 by 2 instead of the whole sum.",
        },
        {
          stepNumber: 3,
          description: "Divide to finish.",
          workingLatex: "\\frac{14}{2} = 7",
          explanation:
            "Now carry out the division: 14 divided by 2 = 7. This is the mean (average) of 8 and 6.",
        },
      ],
      finalAnswer: "\\(\\dfrac{a+b}{2} = 7\\).",
      canonicalAnswer: "7",
    },
  },
  {
    id: "ga03-009",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Work out the value of \\(4x - 3\\) when \\(x = 2.5\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "decimals", "linear expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the decimal in brackets.",
          workingLatex: "4x - 3 = 4(2.5) - 3",
          explanation:
            "Replace x with the decimal 2.5, written in brackets. A decimal substitutes in exactly the same way as a whole number.",
        },
        {
          stepNumber: 2,
          description: "Multiply before subtracting.",
          workingLatex: "4(2.5) - 3 = 10 - 3",
          explanation:
            "Multiplication comes before subtraction, so work out 4 times 2.5 = 10 first. (Four lots of 2.5 is 2.5 + 2.5 + 2.5 + 2.5 = 10.)",
        },
        {
          stepNumber: 3,
          description: "Subtract to finish.",
          workingLatex: "10 - 3 = 7",
          explanation: "Take 3 away from 10 to reach the answer 7.",
        },
      ],
      finalAnswer: "\\(4x-3 = 7\\) when \\(x=2.5\\).",
      canonicalAnswer: "7",
    },
  },
  {
    id: "ga03-010",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The cost in pounds of hiring a tool is \\(C = 5d + 12\\), where \\(d\\) is the number of days. Find the cost when \\(d = 4\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the number of days into the formula.",
          workingLatex: "C = 5d + 12 = 5(4) + 12",
          explanation:
            "Here d stands for the number of days, which is 4. The 5d is a daily charge of £5 per day, and the + 12 is a fixed one-off fee.",
        },
        {
          stepNumber: 2,
          description: "Multiply before adding.",
          workingLatex: "5(4) + 12 = 20 + 12",
          explanation:
            "Order of operations puts the multiplication first: 5 times 4 = 20 is the cost of the four days' hire, before the fixed fee is added.",
        },
        {
          stepNumber: 3,
          description: "Add to finish.",
          workingLatex: "20 + 12 = 32",
          explanation:
            "Add the fixed £12 fee to the £20 hire charge to get the total cost of £32.",
        },
      ],
      finalAnswer: "\\(C = \\pounds 32\\).",
      canonicalAnswer: "32",
    },
  },
  {
    id: "ga03-011",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "Work out the value of \\(x^2 + x\\) when \\(x = 5\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "powers", "expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the value in brackets.",
          workingLatex: "x^2 + x = (5)^2 + 5",
          explanation:
            "Replace each x with 5. The first x is squared, so it becomes (5) squared; the second x is just 5 on its own.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the power first.",
          workingLatex: "(5)^2 + 5 = 25 + 5",
          explanation:
            "Powers come before addition in BIDMAS, so square the 5 first: 5 times 5 = 25. The lone + 5 is left for the final step.",
        },
        {
          stepNumber: 3,
          description: "Add to finish.",
          workingLatex: "25 + 5 = 30",
          explanation: "Add the two results together to reach the answer 30.",
        },
      ],
      finalAnswer: "\\(x^2 + x = 30\\) when \\(x=5\\).",
      canonicalAnswer: "30",
    },
  },
  {
    id: "ga03-012",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The area of a rectangle is \\(A = l w\\). Find the area when \\(l = 9\\,\\mathrm{cm}\\) and \\(w = 4\\,\\mathrm{cm}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "area", "two variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute both lengths into the formula.",
          workingLatex: "A = lw = (9)(4)",
          explanation:
            "The letters l and w stand for the length and width. Replace l with 9 and w with 4; writing them as (9)(4) shows they are multiplied.",
        },
        {
          stepNumber: 2,
          description: "Multiply to evaluate.",
          workingLatex: "(9)(4) = 36",
          explanation:
            "Multiply length by width: 9 times 4 = 36. Because both lengths are in cm, the area comes out in square cm.",
        },
      ],
      finalAnswer: "\\(A = 36\\,\\mathrm{cm^2}\\).",
      canonicalAnswer: "36",
    },
  },

  // ───────────────────────── STANDARD (013–022) ─────────────────────────
  {
    id: "ga03-013",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Work out the value of \\(x^2 - 4x\\) when \\(x = -3\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "negatives", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the negative value, using brackets.",
          workingLatex: "x^2 - 4x = (-3)^2 - 4(-3)",
          explanation:
            "Replace every x with −3, always wrapped in brackets. The brackets are essential with negatives: they make sure the minus sign is squared along with the 3.",
        },
        {
          stepNumber: 2,
          description: "Square the negative first.",
          workingLatex: "(-3)^2 - 4(-3) = 9 - 4(-3)",
          explanation:
            "Powers come before multiplication, so square first: (−3) squared = (−3)(−3). A negative times a negative is positive, so this is +9 — not −9.",
        },
        {
          stepNumber: 3,
          description: "Multiply the second term.",
          workingLatex: "9 - 4(-3) = 9 - (-12)",
          explanation:
            "Now do the multiplication 4 times (−3) = −12. Keep that result in brackets so the existing minus sign in front of it stays visible.",
        },
        {
          stepNumber: 4,
          description: "Turn minus a negative into plus.",
          workingLatex: "9 - (-12) = 9 + 12",
          explanation:
            "Subtracting a negative is the same as adding, so − (−12) becomes + 12. This 'minus a minus' is exactly the slip examiners look for.",
        },
        {
          stepNumber: 5,
          description: "Add to finish.",
          workingLatex: "9 + 12 = 21",
          explanation: "Add the two positive numbers to reach the final value of 21.",
        },
      ],
      finalAnswer: "\\(x^2 - 4x = 21\\) when \\(x = -3\\).",
      canonicalAnswer: "21",
    },
  },
  {
    id: "ga03-014",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Work out the value of \\(2a + 3b\\) when \\(a = 5\\) and \\(b = -2\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "two variables", "negatives"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute both values in brackets.",
          workingLatex: "2a + 3b = 2(5) + 3(-2)",
          explanation:
            "Replace a with 5 and b with −2. Bracketing the −2 keeps its sign attached, so the term 3b is clearly 3 multiplied by negative 2.",
        },
        {
          stepNumber: 2,
          description: "Work out the first product.",
          workingLatex: "2(5) + 3(-2) = 10 + 3(-2)",
          explanation:
            "Do the multiplications before the addition. The first term is straightforward: 2 times 5 = 10.",
        },
        {
          stepNumber: 3,
          description: "Work out the second product.",
          workingLatex: "10 + 3(-2) = 10 + (-6)",
          explanation:
            "The second term is 3 times (−2) = −6, since a positive times a negative is negative. Keep the −6 in brackets so its sign is clear.",
        },
        {
          stepNumber: 4,
          description: "Add the negative to finish.",
          workingLatex: "10 + (-6) = 10 - 6 = 4",
          explanation:
            "Adding a negative number is the same as subtracting, so + (−6) becomes − 6. That gives 10 − 6 = 4.",
        },
      ],
      finalAnswer: "\\(2a + 3b = 4\\).",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga03-015",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use \\(v = u + at\\) to find \\(v\\) when \\(u = 3\\), \\(a = 4\\) and \\(t = 5\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "kinematics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the three values into the formula.",
          workingLatex: "v = u + at = 3 + (4)(5)",
          explanation:
            "Replace u with 3, a with 4 and t with 5. The term at means a multiplied by t, so it becomes (4)(5); the + u stays as 3.",
        },
        {
          stepNumber: 2,
          description: "Multiply before adding.",
          workingLatex: "3 + (4)(5) = 3 + 20",
          explanation:
            "BIDMAS puts the multiplication first, so evaluate 4 times 5 = 20 before adding. Don't be tempted to add 3 + 4 first — the at must be combined before it meets the + 3.",
        },
        {
          stepNumber: 3,
          description: "Add to finish.",
          workingLatex: "3 + 20 = 23",
          explanation:
            "Add the starting velocity to the change in velocity to get the final value v = 23.",
        },
      ],
      finalAnswer: "\\(v = 23\\).",
      canonicalAnswer: "23",
    },
  },
  {
    id: "ga03-016",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "exactValue",
    questionText:
      "The area of a circle is \\(A = \\pi r^2\\). Find the exact area when \\(r = 5\\,\\mathrm{cm}\\), leaving your answer in terms of \\(\\pi\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "area", "pi", "powers"],
    answerMeta: { exactForm: true },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the radius into the formula.",
          workingLatex: "A = \\pi r^2 = \\pi (5)^2",
          explanation:
            "Replace r with 5, in brackets. Note that only the r is squared in the formula, not the pi, so the bracket goes around the 5 alone.",
        },
        {
          stepNumber: 2,
          description: "Square the radius first.",
          workingLatex: "\\pi (5)^2 = \\pi \\cdot 25",
          explanation:
            "Powers before multiplication, so square the radius: 5 squared = 25. The pi is just waiting to be multiplied by this result.",
        },
        {
          stepNumber: 3,
          description: "Write the exact answer in terms of pi.",
          workingLatex: "\\pi \\cdot 25 = 25\\pi",
          explanation:
            "Leaving the answer as 25 pi is the exact value. Don't multiply by a decimal for pi — the question asks for the answer in terms of pi.",
        },
      ],
      finalAnswer: "\\(A = 25\\pi\\,\\mathrm{cm^2}\\).",
      canonicalAnswer: "25*pi",
    },
  },
  {
    id: "ga03-017",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Work out the value of \\(\\dfrac{a + b}{a - b}\\) when \\(a = 7\\) and \\(b = 3\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "fraction", "two variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the values top and bottom.",
          workingLatex: "\\frac{a + b}{a - b} = \\frac{7 + 3}{7 - 3}",
          explanation:
            "Replace a with 7 and b with 3 in both the numerator and the denominator. The same letters appear in each, so each gets the same value.",
        },
        {
          stepNumber: 2,
          description: "Work out the numerator.",
          workingLatex: "\\frac{7 + 3}{7 - 3} = \\frac{10}{7 - 3}",
          explanation:
            "Treat the top of the fraction as if it were inside a bracket and finish it first: 7 + 3 = 10.",
        },
        {
          stepNumber: 3,
          description: "Work out the denominator.",
          workingLatex: "\\frac{10}{7 - 3} = \\frac{10}{4}",
          explanation:
            "Now finish the bottom the same way: 7 − 3 = 4. Both top and bottom must be single numbers before you divide.",
        },
        {
          stepNumber: 4,
          description: "Divide to finish.",
          workingLatex: "\\frac{10}{4} = 2.5",
          explanation:
            "Now carry out the division 10 divided by 4 = 2.5. (As a fraction this is 5/2, which equals 2.5 as a decimal.)",
        },
      ],
      finalAnswer: "\\(\\dfrac{a+b}{a-b} = 2.5\\).",
      canonicalAnswer: "2.5",
    },
  },
  {
    id: "ga03-018",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Speed is given by \\(\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}\\). A car travels \\(150\\,\\mathrm{km}\\) in \\(2.5\\,\\mathrm{hours}\\). Find its average speed in \\(\\mathrm{km\\,h^{-1}}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "speed", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the distance and time.",
          workingLatex: "\\text{speed} = \\frac{\\text{distance}}{\\text{time}} = \\frac{150}{2.5}",
          explanation:
            "Distance is 150 km and time is 2.5 hours, so put distance on top and time on the bottom. Keeping distance over time the right way up is important — flipping them gives the wrong quantity.",
        },
        {
          stepNumber: 2,
          description: "Carry out the division.",
          workingLatex: "\\frac{150}{2.5} = 60",
          explanation:
            "Divide 150 by 2.5 to get 60. (Doubling both gives 300 ÷ 5 = 60, which is an easy way to handle the decimal divisor.) The units km ÷ hours give km per hour.",
        },
      ],
      finalAnswer: "Average speed \\(= 60\\,\\mathrm{km\\,h^{-1}}\\).",
      canonicalAnswer: "60",
    },
  },
  {
    id: "ga03-019",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Work out the value of \\(3x^2 - 2x + 1\\) when \\(x = 4\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "powers", "quadratic expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the value in brackets.",
          workingLatex: "3x^2 - 2x + 1 = 3(4)^2 - 2(4) + 1",
          explanation:
            "Replace each x with 4. In the first term only the x is squared, not the 3, so write it as 3(4) squared with the bracket around the 4 alone.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the power first.",
          workingLatex: "3(4)^2 - 2(4) + 1 = 3(16) - 2(4) + 1",
          explanation:
            "Powers come before multiplication, so square the 4 first: 4 squared = 16. The 3 in front still needs multiplying in afterwards — a common slip is to do 3 times 4 and then square, which is wrong.",
        },
        {
          stepNumber: 3,
          description: "Do the multiplications.",
          workingLatex: "3(16) - 2(4) + 1 = 48 - 8 + 1",
          explanation:
            "Now the multiplications: 3 times 16 = 48 and 2 times 4 = 8. The + 1 at the end is just a constant.",
        },
        {
          stepNumber: 4,
          description: "Subtract working left to right.",
          workingLatex: "48 - 8 + 1 = 40 + 1",
          explanation:
            "With only addition and subtraction left, work strictly left to right: 48 − 8 = 40 comes before the final + 1.",
        },
        {
          stepNumber: 5,
          description: "Add to finish.",
          workingLatex: "40 + 1 = 41",
          explanation: "Add the remaining 1 to reach the final value of 41.",
        },
      ],
      finalAnswer: "\\(3x^2 - 2x + 1 = 41\\) when \\(x = 4\\).",
      canonicalAnswer: "41",
    },
  },
  {
    id: "ga03-020",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Compare \\((-4)^2\\) and \\(-4^2\\). Write down the value of \\((-4)^2 + (-4^2)\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "negatives", "powers", "sign rules"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate the bracketed square.",
          workingLatex: "(-4)^2 = (-4) \\cdot (-4) = 16",
          explanation:
            "The brackets mean the whole of −4 is squared, so the minus sign is included: (−4)(−4). A negative times a negative is positive, giving +16.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the unbracketed square.",
          workingLatex: "-4^2 = -(4 \\cdot 4) = -16",
          explanation:
            "Without brackets, the power binds tighter than the minus sign, so only the 4 is squared and the minus stays outside: −(4 times 4) = −16. This contrast with step 1 is the whole point of the question.",
        },
        {
          stepNumber: 3,
          description: "Add the two results.",
          workingLatex: "16 + (-16) = 16 - 16",
          explanation:
            "Now combine the two values. Adding a negative is the same as subtracting, so + (−16) becomes − 16.",
        },
        {
          stepNumber: 4,
          description: "Simplify to finish.",
          workingLatex: "16 - 16 = 0",
          explanation:
            "The two numbers are equal and opposite, so they cancel exactly: (−4) squared and −4 squared sum to 0.",
        },
      ],
      finalAnswer: "\\((-4)^2 = 16\\), \\(-4^2 = -16\\), and their sum is \\(0\\).",
      canonicalAnswer: "0",
    },
  },
  {
    id: "ga03-021",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Work out the value of \\(\\dfrac{1}{2}(a + b)h\\) (the area of a trapezium) when \\(a = 6\\), \\(b = 10\\) and \\(h = 4\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "area", "fraction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute all three values.",
          workingLatex: "\\frac{1}{2}(a + b)h = \\frac{1}{2}(6 + 10)(4)",
          explanation:
            "Replace a with 6, b with 10 and h with 4. The parallel sides a and b sit inside the bracket; h is the perpendicular height multiplying outside.",
        },
        {
          stepNumber: 2,
          description: "Work out the bracket first.",
          workingLatex: "\\frac{1}{2}(6 + 10)(4) = \\frac{1}{2}(16)(4)",
          explanation:
            "Brackets come first in BIDMAS, so add the two parallel sides: 6 + 10 = 16. This is the sum of the parallel sides.",
        },
        {
          stepNumber: 3,
          description: "Multiply the remaining factors.",
          workingLatex: "\\frac{1}{2}(16)(4) = \\frac{1}{2}(64)",
          explanation:
            "Multiply the 16 by the height: 16 times 4 = 64. The 'half' is left to apply last.",
        },
        {
          stepNumber: 4,
          description: "Halve to finish.",
          workingLatex: "\\frac{1}{2}(64) = 32",
          explanation:
            "Finally take half of 64 = 32. Halving and multiplying by 4 can be done in either order, but doing the half last keeps the numbers whole.",
        },
      ],
      finalAnswer: "Area \\(= 32\\) square units.",
      canonicalAnswer: "32",
    },
  },
  {
    id: "ga03-022",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Work out the value of \\(2x^2 + 3x\\) when \\(x = -2\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "negatives", "powers", "quadratic expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the negative value in brackets.",
          workingLatex: "2x^2 + 3x = 2(-2)^2 + 3(-2)",
          explanation:
            "Replace each x with −2, always in brackets. In the first term only the x is squared, so the 2 in front waits to be multiplied in after squaring.",
        },
        {
          stepNumber: 2,
          description: "Square the negative first.",
          workingLatex: "2(-2)^2 + 3(-2) = 2(4) + 3(-2)",
          explanation:
            "Powers first: (−2) squared = (−2)(−2) = +4. The negative disappears when squared because a negative times a negative is positive.",
        },
        {
          stepNumber: 3,
          description: "Do the multiplications.",
          workingLatex: "2(4) + 3(-2) = 8 + (-6)",
          explanation:
            "Now the multiplications: 2 times 4 = 8, and 3 times (−2) = −6 (positive times negative is negative).",
        },
        {
          stepNumber: 4,
          description: "Add the negative to finish.",
          workingLatex: "8 + (-6) = 8 - 6 = 2",
          explanation:
            "Adding a negative is the same as subtracting, so + (−6) becomes − 6, giving 8 − 6 = 2.",
        },
      ],
      finalAnswer: "\\(2x^2 + 3x = 2\\) when \\(x = -2\\).",
      canonicalAnswer: "2",
    },
  },

  // ───────────────────────── CHALLENGE (023–030) ─────────────────────────
  {
    id: "ga03-023",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Use \\(s = ut + \\dfrac{1}{2}at^2\\) to find \\(s\\) when \\(u = 8\\), \\(a = -10\\) and \\(t = 3\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "kinematics", "negatives", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute all values, keeping the negative in brackets.",
          workingLatex: "s = ut + \\frac{1}{2}at^2 = (8)(3) + \\frac{1}{2}(-10)(3)^2",
          explanation:
            "Replace u with 8, a with −10 and t with 3. Bracket the −10 so its sign stays attached, and note that only the t is squared (not the a), so the bracket in t squared goes around the 3 alone.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the power first.",
          workingLatex: "(8)(3) + \\frac{1}{2}(-10)(3)^2 = (8)(3) + \\frac{1}{2}(-10)(9)",
          explanation:
            "Powers come before multiplication, so square the time: 3 squared = 9. The first term ut has no power, so it is left untouched here.",
        },
        {
          stepNumber: 3,
          description: "Work out the first term.",
          workingLatex: "(8)(3) + \\frac{1}{2}(-10)(9) = 24 + \\frac{1}{2}(-10)(9)",
          explanation:
            "Evaluate the simple product first: 8 times 3 = 24. This is the distance the object would travel at constant speed before the acceleration is taken into account.",
        },
        {
          stepNumber: 4,
          description: "Work out the second term.",
          workingLatex: "24 + \\frac{1}{2}(-10)(9) = 24 + (-45)",
          explanation:
            "Combine the half-a-t-squared term: a half of −10 is −5, and −5 times 9 = −45. Keep the −45 in brackets so its sign is not lost when it meets the + 24.",
        },
        {
          stepNumber: 5,
          description: "Combine the terms.",
          workingLatex: "24 + (-45) = 24 - 45 = -21",
          explanation:
            "Adding a negative is subtracting, so 24 + (−45) = 24 − 45. Since 45 is bigger than 24, the result is negative: −21. (Physically, the displacement is negative because the deceleration overtakes the initial motion.)",
        },
      ],
      finalAnswer: "\\(s = -21\\).",
      canonicalAnswer: "-21",
    },
  },
  {
    id: "ga03-024",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The formula \\(F = \\dfrac{9}{5}C + 32\\) converts Celsius to Fahrenheit. Find \\(F\\) when \\(C = 20\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "fraction", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the temperature into the formula.",
          workingLatex: "F = \\frac{9}{5}C + 32 = \\frac{9}{5}(20) + 32",
          explanation:
            "Replace C with the Celsius value 20. The term (9/5)C means nine-fifths multiplied by C, so it becomes (9/5) multiplied by 20.",
        },
        {
          stepNumber: 2,
          description: "Multiply the numerator out first.",
          workingLatex: "\\frac{9}{5}(20) + 32 = \\frac{9 \\cdot 20}{5} + 32",
          explanation:
            "To multiply a fraction by a whole number, multiply the top: 9 times 20 = 180, keeping the denominator 5 underneath. The + 32 is left alone until the fraction term is finished.",
        },
        {
          stepNumber: 3,
          description: "Simplify the product.",
          workingLatex: "\\frac{9 \\cdot 20}{5} + 32 = \\frac{180}{5} + 32",
          explanation:
            "Tidy the numerator: 9 times 20 = 180, so the fraction term is now 180 over 5.",
        },
        {
          stepNumber: 4,
          description: "Divide to clear the fraction.",
          workingLatex: "\\frac{180}{5} + 32 = 36 + 32",
          explanation:
            "Now divide 180 by 5 = 36. (You could also divide first — 20 ÷ 5 = 4, then 9 × 4 = 36 — whichever keeps the numbers simpler.)",
        },
        {
          stepNumber: 5,
          description: "Add 32 to finish.",
          workingLatex: "36 + 32 = 68",
          explanation:
            "Finally add the constant 32 that handles the scale offset, giving F = 68 degrees Fahrenheit.",
        },
      ],
      finalAnswer: "\\(F = 68\\) (degrees Fahrenheit).",
      canonicalAnswer: "68",
    },
  },
  {
    id: "ga03-025",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The kinetic energy of an object is \\(E = \\dfrac{1}{2}mv^2\\). Find \\(E\\) (in joules) when \\(m = 4\\,\\mathrm{kg}\\) and \\(v = 6\\,\\mathrm{m\\,s^{-1}}\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "powers", "physics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the mass and speed.",
          workingLatex: "E = \\frac{1}{2}mv^2 = \\frac{1}{2}(4)(6)^2",
          explanation:
            "Replace m with 4 and v with 6. Only the v is squared in the formula, so the bracket in (6) squared goes around the 6 alone; the mass is not squared.",
        },
        {
          stepNumber: 2,
          description: "Square the speed first.",
          workingLatex: "\\frac{1}{2}(4)(6)^2 = \\frac{1}{2}(4)(36)",
          explanation:
            "Powers before multiplication, so square the speed: 6 squared = 36. A common slip is to do 6 times 2 = 12 — squaring means 6 times 6.",
        },
        {
          stepNumber: 3,
          description: "Multiply the factors together.",
          workingLatex: "\\frac{1}{2}(4)(36) = \\frac{1}{2}(144)",
          explanation:
            "Multiply the remaining whole numbers: 4 times 36 = 144, leaving the half to apply last.",
        },
        {
          stepNumber: 4,
          description: "Halve to finish.",
          workingLatex: "\\frac{1}{2}(144) = 72",
          explanation:
            "Take half of 144 = 72. With mass in kg and speed in m/s, the energy comes out in joules.",
        },
      ],
      finalAnswer: "\\(E = 72\\,\\mathrm{J}\\).",
      canonicalAnswer: "72",
    },
  },
  {
    id: "ga03-026",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Work out the value of \\(x^3 - 2x^2\\) when \\(x = -3\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "negatives", "powers", "cubes"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the negative value in brackets.",
          workingLatex: "x^3 - 2x^2 = (-3)^3 - 2(-3)^2",
          explanation:
            "Replace each x with −3, in brackets. One term cubes the value and the other squares it, so keep them separate and handle each power on its own.",
        },
        {
          stepNumber: 2,
          description: "Cube the negative.",
          workingLatex: "(-3)^3 = (-3) \\cdot (-3) \\cdot (-3) = -27",
          explanation:
            "Cubing means three factors of −3. Two negatives make +9, and one more negative makes the result negative: 9 times (−3) = −27. An odd power of a negative stays negative.",
        },
        {
          stepNumber: 3,
          description: "Square the negative.",
          workingLatex: "(-3)^2 = (-3) \\cdot (-3) = 9",
          explanation:
            "Squaring means two factors of −3, and a negative times a negative is positive, so this is +9. An even power of a negative is positive — the opposite sign behaviour to the cube above.",
        },
        {
          stepNumber: 4,
          description: "Substitute the power results back.",
          workingLatex: "(-3)^3 - 2(-3)^2 = -27 - 2(9)",
          explanation:
            "Put the two values just found back into the expression: the cube gave −27 and the square gave 9. The 2 in front of the square still needs multiplying in.",
        },
        {
          stepNumber: 5,
          description: "Multiply and subtract to finish.",
          workingLatex: "-27 - 2(9) = -27 - 18 = -45",
          explanation:
            "The second term is 2 times 9 = 18, which is being subtracted. Starting from −27 and taking away another 18 moves further down to −45.",
        },
      ],
      finalAnswer: "\\(x^3 - 2x^2 = -45\\) when \\(x = -3\\).",
      canonicalAnswer: "-45",
    },
  },
  {
    id: "ga03-027",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "In the lens formula \\(\\dfrac{1}{u} + \\dfrac{1}{v}\\), find the value when \\(u = 4\\) and \\(v = 12\\). Give your answer as a fraction in its simplest form.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "fraction", "physics", "common denominator"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the two values.",
          workingLatex: "\\frac{1}{u} + \\frac{1}{v} = \\frac{1}{4} + \\frac{1}{12}",
          explanation:
            "Replace u with 4 and v with 12. The 1 on each numerator stays as 1; only the denominators take the values.",
        },
        {
          stepNumber: 2,
          description: "Find a common denominator.",
          workingLatex: "\\frac{1}{4} = \\frac{3}{12}",
          explanation:
            "To add fractions they need the same denominator. Since 12 is a multiple of 4 (4 times 3), rewrite 1/4 as 3/12 by multiplying top and bottom by 3.",
        },
        {
          stepNumber: 3,
          description: "Rewrite the sum over a common denominator.",
          workingLatex: "\\frac{1}{4} + \\frac{1}{12} = \\frac{3}{12} + \\frac{1}{12}",
          explanation:
            "Replace 1/4 with its equivalent 3/12, leaving 1/12 as it already is. Both fractions now share the denominator 12.",
        },
        {
          stepNumber: 4,
          description: "Add the fractions.",
          workingLatex: "\\frac{3}{12} + \\frac{1}{12} = \\frac{4}{12}",
          explanation:
            "With matching denominators, add only the numerators: 3 + 1 = 4, keeping the denominator 12. Don't add the denominators together — that's a classic fraction slip.",
        },
        {
          stepNumber: 5,
          description: "Simplify the result.",
          workingLatex: "\\frac{4}{12} = \\frac{1}{3}",
          explanation:
            "Divide top and bottom by their common factor 4: 4 ÷ 4 = 1 and 12 ÷ 4 = 3, giving the simplest form 1/3.",
        },
      ],
      finalAnswer: "\\(\\dfrac{1}{u} + \\dfrac{1}{v} = \\dfrac{1}{3}\\).",
      canonicalAnswer: "1/3",
    },
  },
  {
    id: "ga03-028",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Work out the value of \\(\\dfrac{a^2 - b^2}{a + b}\\) when \\(a = 5\\) and \\(b = 2\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "fraction", "powers", "two variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the values top and bottom.",
          workingLatex: "\\frac{a^2 - b^2}{a + b} = \\frac{(5)^2 - (2)^2}{5 + 2}",
          explanation:
            "Replace a with 5 and b with 2 throughout. The squares are in the numerator; the denominator a + b has no powers.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the powers in the numerator.",
          workingLatex: "\\frac{(5)^2 - (2)^2}{5 + 2} = \\frac{25 - 4}{5 + 2}",
          explanation:
            "Powers first, so square each: 5 squared = 25 and 2 squared = 4. The denominator is left for the next step.",
        },
        {
          stepNumber: 3,
          description: "Finish the numerator.",
          workingLatex: "\\frac{25 - 4}{5 + 2} = \\frac{21}{5 + 2}",
          explanation:
            "Treat the top like a bracket and complete it: 25 − 4 = 21.",
        },
        {
          stepNumber: 4,
          description: "Finish the denominator.",
          workingLatex: "\\frac{21}{5 + 2} = \\frac{21}{7}",
          explanation:
            "Now complete the bottom the same way: 5 + 2 = 7. Both top and bottom must be single numbers before dividing.",
        },
        {
          stepNumber: 5,
          description: "Divide to finish.",
          workingLatex: "\\frac{21}{7} = 3",
          explanation:
            "Divide 21 by 7 = 3. (This is the difference-of-two-squares identity in action: (a² − b²)/(a + b) always simplifies to a − b = 5 − 2 = 3.)",
        },
      ],
      finalAnswer: "\\(\\dfrac{a^2 - b^2}{a + b} = 3\\).",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga03-029",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The volume of a cone is \\(V = \\dfrac{1}{3}\\pi r^2 h\\). Find \\(V\\) when \\(r = 3\\), \\(h = 7\\) and \\(\\pi = 3\\) (a rough approximation).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "formula", "volume", "powers", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute all values into the formula.",
          workingLatex: "V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}(3)(3)^2(7)",
          explanation:
            "Replace pi with the rough value 3, r with 3 and h with 7. Two different things equal 3 here — the approximate pi and the radius — but only the radius is squared.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the power first.",
          workingLatex: "\\frac{1}{3}(3)(3)^2(7) = \\frac{1}{3}(3)(9)(7)",
          explanation:
            "Powers before multiplication, so square the radius: 3 squared = 9. Be careful not to square the pi-value of 3 as well — only r is raised to a power.",
        },
        {
          stepNumber: 3,
          description: "Multiply the first two factors.",
          workingLatex: "\\frac{1}{3}(3)(9)(7) = \\frac{1}{3}(27)(7)",
          explanation:
            "Build up the product step by step: pi times r squared is 3 times 9 = 27. Keep the one-third and the height to apply afterwards.",
        },
        {
          stepNumber: 4,
          description: "Multiply by the height.",
          workingLatex: "\\frac{1}{3}(27)(7) = \\frac{1}{3}(189)",
          explanation:
            "Multiply in the height: 27 times 7 = 189. That leaves only the one-third factor still to apply.",
        },
        {
          stepNumber: 5,
          description: "Apply the one third to finish.",
          workingLatex: "\\frac{1}{3}(189) = 63",
          explanation:
            "Divide 189 by 3 = 63. The one-third factor is what makes a cone exactly a third of the cylinder with the same base and height.",
        },
      ],
      finalAnswer: "\\(V = 63\\) cubic units.",
      canonicalAnswer: "63",
    },
  },
  {
    id: "ga03-030",
    topicRef: "ga03",
    topicTitle: "Substitution into formulae and expressions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Work out the value of \\(\\dfrac{2p^2 - q}{p + q}\\) when \\(p = -2\\) and \\(q = 4\\).",
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["substitution", "negatives", "powers", "fraction", "two variables"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the values, bracketing the negative.",
          workingLatex: "\\frac{2p^2 - q}{p + q} = \\frac{2(-2)^2 - 4}{(-2) + 4}",
          explanation:
            "Replace p with −2 and q with 4 throughout. Bracket the −2 every time, including in the denominator, so the minus sign is never lost.",
        },
        {
          stepNumber: 2,
          description: "Square the negative in the numerator.",
          workingLatex: "\\frac{2(-2)^2 - 4}{(-2) + 4} = \\frac{2(4) - 4}{(-2) + 4}",
          explanation:
            "Powers first, so square: (−2) squared = (−2)(−2) = +4. The minus disappears because squaring a negative gives a positive. The 2 in front still needs multiplying in.",
        },
        {
          stepNumber: 3,
          description: "Multiply in the numerator.",
          workingLatex: "\\frac{2(4) - 4}{(-2) + 4} = \\frac{8 - 4}{(-2) + 4}",
          explanation:
            "Carry out the multiplication on the top: 2 times 4 = 8. The − 4 is left to combine in the next step.",
        },
        {
          stepNumber: 4,
          description: "Finish the numerator.",
          workingLatex: "\\frac{8 - 4}{(-2) + 4} = \\frac{4}{(-2) + 4}",
          explanation:
            "Complete the top of the fraction: 8 − 4 = 4. Leave the bottom for the next step.",
        },
        {
          stepNumber: 5,
          description: "Work out the denominator.",
          workingLatex: "\\frac{4}{(-2) + 4} = \\frac{4}{2}",
          explanation:
            "Now finish the bottom: (−2) + 4 = 2. Adding 4 to −2 moves up the number line to 2.",
        },
        {
          stepNumber: 6,
          description: "Divide to finish.",
          workingLatex: "\\frac{4}{2} = 2",
          explanation: "Divide 4 by 2 = 2 to reach the final value.",
        },
      ],
      finalAnswer: "\\(\\dfrac{2p^2 - q}{p + q} = 2\\).",
      canonicalAnswer: "2",
    },
  },
];
