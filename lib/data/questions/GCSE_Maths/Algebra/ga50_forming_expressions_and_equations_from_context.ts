/**
 * Topic: Forming expressions and equations from context
 * Ref: ga50  (DfE A21)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: ALGEBRAIC MODELLING — translating a worded/real-life situation into
 *   an algebraic expression or equation, then (for harder items) solving it.
 *   Includes: choosing a letter for an unknown, writing expressions for "more
 *   than / less than / times as many / per", consecutive integers, perimeter &
 *   age relationships, "I think of a number" puzzles, total cost (fixed +
 *   variable), sharing in a stated relationship, angle facts, and multi-step
 *   contexts that must first be MODELLED (form the equation) and then SOLVED.
 *   This is FORMING (and where stated, solving) from context — the algebraic
 *   manipulation itself (collecting terms, expanding) is assumed (ga04, ga05);
 *   pure equation-solving technique lives in ga36/ga37.
 *
 * Difficulty split (15 total):
 *   - Foundation: ga50-001 .. ga50-007  (7)
 *   - Standard:   ga50-008 .. ga50-012  (5)
 *   - Challenge:  ga50-013 .. ga50-015  (3)
 * Id range: ga50-001 .. ga50-015.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or $...$
 *   wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per project style rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–007) ─────────────────────────
  {
    id: "ga50-001",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A bag holds \\(n\\) marbles. Mia puts \\(5\\) more marbles into the bag. Write an expression for the number of marbles in the bag now.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["forming expressions", "addition", "modelling"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start from the unknown amount.",
          workingLatex: "n",
          explanation:
            "The letter \\(n\\) already stands for the number of marbles we start with. Whatever happens next is described in terms of this \\(n\\).",
        },
        {
          stepNumber: 2,
          description: "Add the marbles Mia puts in.",
          workingLatex: "n + 5",
          explanation:
            "\"\\(5\\) more\" means we add \\(5\\) to what was there. The total is therefore \\(n + 5\\). We leave it as an expression because \\(n\\) is unknown — there is nothing to simplify.",
        },
      ],
      finalAnswer: "\\(n + 5\\).",
      canonicalAnswer: "n+5",
      commonMistakes: [
        "Writing \\(5n\\) (which means five lots of \\(n\\), i.e. multiplying) instead of \\(n + 5\\).",
      ],
    },
  },
  {
    id: "ga50-002",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Pencils cost \\(30\\) pence each. Write an expression for the total cost, in pence, of \\(p\\) pencils.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["forming expressions", "multiplication", "cost"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify what changes and what stays fixed.",
          workingLatex: "\\text{cost per pencil} = 30,\\quad \\text{number of pencils} = p",
          explanation:
            "Each pencil costs the same \\(30\\) pence; the number of pencils \\(p\\) is what varies. The total cost is the price of one pencil repeated \\(p\\) times.",
        },
        {
          stepNumber: 2,
          description: "Multiply the price by the number of pencils.",
          workingLatex: "30 \\cdot p = 30p",
          explanation:
            "Repeated addition of \\(30\\) is multiplication: \\(p\\) pencils cost \\(30p\\) pence. By convention we write the number in front of the letter and omit the multiplication sign.",
        },
      ],
      finalAnswer: "\\(30p\\) pence.",
      canonicalAnswer: "30p",
      commonMistakes: [
        "Writing \\(30 + p\\) (adding) instead of \\(30p\\) (multiplying).",
        "Writing \\(p30\\) — the number should come before the letter.",
      ],
    },
  },
  {
    id: "ga50-003",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Sarah is \\(x\\) years old. Her brother is \\(3\\) years younger than Sarah. Write an expression for her brother's age.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["forming expressions", "subtraction", "age"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down Sarah's age.",
          workingLatex: "\\text{Sarah} = x",
          explanation:
            "We are told Sarah's age is \\(x\\). Everyone else's age is described relative to Sarah, so we build from this.",
        },
        {
          stepNumber: 2,
          description: "Subtract for \"younger\".",
          workingLatex: "x - 3",
          explanation:
            "\"\\(3\\) years younger\" means \\(3\\) less than Sarah's age, so we subtract \\(3\\). The brother's age is \\(x - 3\\). Order matters here: \\(3 - x\\) would be wrong because the brother is younger, not older.",
        },
      ],
      finalAnswer: "\\(x - 3\\).",
      canonicalAnswer: "x-3",
      commonMistakes: [
        "Writing \\(3 - x\\) instead of \\(x - 3\\) (subtracting the wrong way round).",
      ],
    },
  },
  {
    id: "ga50-004",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A taxi firm charges a fixed fee of \\(\\pounds 3\\) plus \\(\\pounds 2\\) for every mile travelled. Write an expression for the total cost, in pounds, of a journey of \\(m\\) miles.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["forming expressions", "fixed and variable cost", "modelling"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the cost of the miles.",
          workingLatex: "2 \\cdot m = 2m",
          explanation:
            "Each mile costs \\(\\pounds 2\\), so \\(m\\) miles cost \\(2m\\) pounds. This is the part of the bill that changes with the length of the journey.",
        },
        {
          stepNumber: 2,
          description: "Add the fixed fee.",
          workingLatex: "2m + 3",
          explanation:
            "The \\(\\pounds 3\\) fixed fee is charged once, no matter how far you go, so we add it on. The total cost is \\(2m + 3\\) pounds. The \\(3\\) is a constant; the \\(2m\\) is the variable part.",
        },
      ],
      finalAnswer: "\\(2m + 3\\) pounds.",
      canonicalAnswer: "2m+3",
      commonMistakes: [
        "Writing \\(5m\\) by combining \\(3\\) and \\(2\\) — the \\(\\pounds 3\\) is fixed and is not multiplied by the miles.",
        "Writing \\(3m + 2\\) by swapping the fixed fee and the per-mile rate.",
      ],
    },
  },
  {
    id: "ga50-005",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The smallest of three consecutive integers is \\(n\\). Write an expression for the sum of the three integers, giving your answer in its simplest form.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["forming expressions", "consecutive integers", "collecting like terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the three consecutive integers.",
          workingLatex: "n,\\ n + 1,\\ n + 2",
          explanation:
            "Consecutive integers go up in steps of \\(1\\). Starting from \\(n\\), the next is \\(n + 1\\) and the one after is \\(n + 2\\).",
        },
        {
          stepNumber: 2,
          description: "Add them together.",
          workingLatex: "n + (n + 1) + (n + 2)",
          explanation:
            "The sum is just the three expressions added. Writing them with brackets first helps keep track of every term before we simplify.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "3n + 3",
          explanation:
            "There are three \\(n\\) terms, giving \\(3n\\), and the numbers \\(1 + 2 = 3\\). So the simplified sum is \\(3n + 3\\). (Notice this is \\(3(n + 1)\\), i.e. three times the middle number.)",
        },
      ],
      finalAnswer: "\\(3n + 3\\).",
      canonicalAnswer: "3n+3",
      commonMistakes: [
        "Writing \\(n + n + n = 3n\\) but forgetting the \\(+1\\) and \\(+2\\).",
        "Using \\(n,\\ 2n,\\ 3n\\) (multiples) instead of \\(n,\\ n+1,\\ n+2\\) (consecutive).",
      ],
    },
  },
  {
    id: "ga50-006",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A rectangle has width \\(w\\) cm. Its length is twice its width. Write an expression for the perimeter of the rectangle, in its simplest form.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["forming expressions", "perimeter", "rectangle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the length in terms of the width.",
          workingLatex: "\\text{width} = w,\\quad \\text{length} = 2w",
          explanation:
            "\"Twice its width\" means \\(2 \\times w = 2w\\). Now both sides of the rectangle are written using the single unknown \\(w\\).",
        },
        {
          stepNumber: 2,
          description: "Add all four sides.",
          workingLatex: "P = w + 2w + w + 2w",
          explanation:
            "A rectangle has two widths and two lengths. Adding every side gives the perimeter before simplifying.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "P = 6w",
          explanation:
            "All four terms contain \\(w\\): \\(w + 2w + w + 2w = 6w\\). So the perimeter is \\(6w\\) cm.",
        },
      ],
      finalAnswer: "\\(6w\\) cm.",
      canonicalAnswer: "6w",
      commonMistakes: [
        "Adding only one length and one width (finding the semi-perimeter \\(3w\\) instead of \\(6w\\)).",
        "Treating \"twice the width\" as \\(w + 2\\) instead of \\(2w\\).",
      ],
    },
  },
  {
    id: "ga50-007",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "I think of a number. I multiply it by \\(4\\) and then add \\(7\\). The result is \\(31\\). Form an equation and solve it to find the number.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["forming equations", "think of a number", "solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Choose a letter and form the equation.",
          workingLatex: "4x + 7 = 31",
          explanation:
            "Let the number be \\(x\\). \"Multiply by \\(4\\)\" gives \\(4x\\); \"add \\(7\\)\" gives \\(4x + 7\\); \"the result is \\(31\\)\" means this equals \\(31\\).",
        },
        {
          stepNumber: 2,
          description: "Subtract 7 from both sides.",
          workingLatex: "4x = 24",
          explanation:
            "Undo the \"\\(+7\\)\" by subtracting \\(7\\) from both sides: \\(31 - 7 = 24\\), so \\(4x = 24\\).",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 4.",
          workingLatex: "x = 6",
          explanation:
            "Undo the \"\\(\\times 4\\)\" by dividing both sides by \\(4\\): \\(24 \\div 4 = 6\\). Check: \\(4 \\cdot 6 + 7 = 24 + 7 = 31\\). \\(\\checkmark\\)",
        },
      ],
      finalAnswer: "The number is \\(6\\).",
      canonicalAnswer: "6",
      commonMistakes: [
        "Dividing by \\(4\\) before subtracting \\(7\\), giving the wrong order of operations.",
      ],
    },
  },

  // ───────────────────────── STANDARD (008–012) ─────────────────────────
  {
    id: "ga50-008",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A rectangle has width \\(x\\) cm and length \\((x + 4)\\) cm. Its perimeter is \\(28\\) cm. Form an equation and solve it to find \\(x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["forming equations", "perimeter", "rectangle", "solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the perimeter in terms of x.",
          workingLatex: "P = x + (x + 4) + x + (x + 4)",
          explanation:
            "The perimeter is the sum of the two widths \\(x\\) and the two lengths \\(x + 4\\).",
        },
        {
          stepNumber: 2,
          description: "Simplify and set equal to 28.",
          workingLatex: "4x + 8 = 28",
          explanation:
            "Collecting like terms: four \\(x\\) terms give \\(4x\\) and \\(4 + 4 = 8\\). Since the perimeter is \\(28\\) cm, we set \\(4x + 8 = 28\\).",
        },
        {
          stepNumber: 3,
          description: "Subtract 8 from both sides.",
          workingLatex: "4x = 20",
          explanation:
            "Removing the constant: \\(28 - 8 = 20\\).",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 4.",
          workingLatex: "x = 5",
          explanation:
            "\\(20 \\div 4 = 5\\). Check: width \\(5\\), length \\(9\\), perimeter \\(5 + 9 + 5 + 9 = 28\\). \\(\\checkmark\\)",
        },
      ],
      finalAnswer: "\\(x = 5\\) (cm).",
      canonicalAnswer: "5",
      commonMistakes: [
        "Using perimeter \\(= x + (x+4) = 2x + 4\\) (only two sides) instead of all four.",
      ],
    },
  },
  {
    id: "ga50-009",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Three consecutive integers add up to \\(72\\). Form an equation and use it to find the smallest of the three integers.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["forming equations", "consecutive integers", "solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Form the equation.",
          workingLatex: "n + (n + 1) + (n + 2) = 72",
          explanation:
            "Let the smallest integer be \\(n\\); the next two are \\(n + 1\\) and \\(n + 2\\). Their sum is \\(72\\).",
        },
        {
          stepNumber: 2,
          description: "Collect like terms.",
          workingLatex: "3n + 3 = 72",
          explanation:
            "Three \\(n\\) terms give \\(3n\\); the numbers \\(1 + 2 = 3\\).",
        },
        {
          stepNumber: 3,
          description: "Subtract 3, then divide by 3.",
          workingLatex: "3n = 69 \\ \\Rightarrow\\ n = 23",
          explanation:
            "\\(72 - 3 = 69\\), then \\(69 \\div 3 = 23\\). Check: \\(23 + 24 + 25 = 72\\). \\(\\checkmark\\) The smallest integer is \\(23\\).",
        },
      ],
      finalAnswer: "The smallest integer is \\(23\\).",
      canonicalAnswer: "23",
      commonMistakes: [
        "Dividing \\(72\\) by \\(3\\) to get \\(24\\) and giving that as the smallest — \\(24\\) is the middle number.",
      ],
    },
  },
  {
    id: "ga50-010",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The three angles of a triangle are \\(x^\\circ\\), \\(2x^\\circ\\) and \\((2x + 30)^\\circ\\). Form an equation and solve it to find the value of \\(x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["forming equations", "angles in a triangle", "solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the angle sum of a triangle.",
          workingLatex: "x + 2x + (2x + 30) = 180",
          explanation:
            "The angles in a triangle add to \\(180^\\circ\\), so the three expressions sum to \\(180\\).",
        },
        {
          stepNumber: 2,
          description: "Collect like terms.",
          workingLatex: "5x + 30 = 180",
          explanation:
            "Adding the \\(x\\) terms: \\(x + 2x + 2x = 5x\\); the constant is \\(30\\).",
        },
        {
          stepNumber: 3,
          description: "Subtract 30 from both sides.",
          workingLatex: "5x = 150",
          explanation:
            "\\(180 - 30 = 150\\).",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 5.",
          workingLatex: "x = 30",
          explanation:
            "\\(150 \\div 5 = 30\\). Check: the angles are \\(30^\\circ\\), \\(60^\\circ\\) and \\(90^\\circ\\), which add to \\(180^\\circ\\). \\(\\checkmark\\)",
        },
      ],
      finalAnswer: "\\(x = 30\\).",
      canonicalAnswer: "30",
      commonMistakes: [
        "Setting the sum equal to \\(360\\) (angles round a point) instead of \\(180\\) for a triangle.",
      ],
    },
  },
  {
    id: "ga50-011",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Ahmed, Beth and Carl share some sweets. Beth has \\(4\\) more sweets than Ahmed. Carl has twice as many sweets as Ahmed. Altogether they have \\(40\\) sweets. How many sweets does Ahmed have?",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["forming equations", "sharing", "modelling", "solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write each person's amount in terms of one letter.",
          workingLatex: "\\text{Ahmed} = a,\\ \\ \\text{Beth} = a + 4,\\ \\ \\text{Carl} = 2a",
          explanation:
            "Let Ahmed have \\(a\\) sweets. Beth has \"\\(4\\) more\" so \\(a + 4\\); Carl has \"twice as many\" so \\(2a\\). Describing everyone with the same letter \\(a\\) is the key modelling step.",
        },
        {
          stepNumber: 2,
          description: "Form an equation for the total.",
          workingLatex: "a + (a + 4) + 2a = 40",
          explanation:
            "The three amounts add up to the \\(40\\) sweets shared.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "4a + 4 = 40",
          explanation:
            "\\(a + a + 2a = 4a\\) and the constant is \\(4\\).",
        },
        {
          stepNumber: 4,
          description: "Solve for a.",
          workingLatex: "4a = 36 \\ \\Rightarrow\\ a = 9",
          explanation:
            "\\(40 - 4 = 36\\), then \\(36 \\div 4 = 9\\). Check: Ahmed \\(9\\), Beth \\(13\\), Carl \\(18\\); \\(9 + 13 + 18 = 40\\). \\(\\checkmark\\)",
        },
      ],
      finalAnswer: "Ahmed has \\(9\\) sweets.",
      canonicalAnswer: "9",
      commonMistakes: [
        "Writing Carl as \\(a + 2\\) (\"\\(2\\) more\") instead of \\(2a\\) (\"twice as many\").",
      ],
    },
  },
  {
    id: "ga50-012",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "When a number is doubled and then \\(5\\) is subtracted, the result is the same as adding \\(8\\) to the original number. Form an equation and solve it to find the number.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["forming equations", "unknown on both sides", "solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate each side of the word \"same as\".",
          workingLatex: "2x - 5 = x + 8",
          explanation:
            "Let the number be \\(x\\). \"Doubled then subtract \\(5\\)\" is \\(2x - 5\\); \"adding \\(8\\) to the original\" is \\(x + 8\\). \"The same as\" makes them equal.",
        },
        {
          stepNumber: 2,
          description: "Subtract x from both sides.",
          workingLatex: "x - 5 = 8",
          explanation:
            "Removing one \\(x\\) from each side collects the unknown on the left: \\(2x - x = x\\).",
        },
        {
          stepNumber: 3,
          description: "Add 5 to both sides.",
          workingLatex: "x = 13",
          explanation:
            "\\(8 + 5 = 13\\). Check: \\(2 \\cdot 13 - 5 = 21\\) and \\(13 + 8 = 21\\). \\(\\checkmark\\)",
        },
      ],
      finalAnswer: "The number is \\(13\\).",
      canonicalAnswer: "13",
      commonMistakes: [
        "Forgetting to subtract \\(x\\) from both sides, so the unknown is left on both sides.",
      ],
    },
  },

  // ───────────────────────── CHALLENGE (013–015) ─────────────────────────
  {
    id: "ga50-013",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The length of a rectangle is \\(3\\) cm more than its width. The perimeter of the rectangle is \\(34\\) cm. Find the area of the rectangle.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["forming equations", "perimeter", "area", "multi-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up expressions for the sides.",
          workingLatex: "\\text{width} = w,\\quad \\text{length} = w + 3",
          explanation:
            "Let the width be \\(w\\) cm. The length is \"\\(3\\) more\", so \\(w + 3\\) cm.",
        },
        {
          stepNumber: 2,
          description: "Form the perimeter equation.",
          workingLatex: "2\\big(w + (w + 3)\\big) = 34",
          explanation:
            "Perimeter is twice the sum of one width and one length. Setting this equal to \\(34\\) gives the equation to solve.",
        },
        {
          stepNumber: 3,
          description: "Simplify and solve for w.",
          workingLatex: "4w + 6 = 34 \\ \\Rightarrow\\ 4w = 28 \\ \\Rightarrow\\ w = 7",
          explanation:
            "Expanding: \\(2(2w + 3) = 4w + 6\\). Then \\(34 - 6 = 28\\) and \\(28 \\div 4 = 7\\). So the width is \\(7\\) cm.",
        },
        {
          stepNumber: 4,
          description: "Find the length and the area.",
          workingLatex: "\\text{length} = 7 + 3 = 10,\\quad A = 10 \\cdot 7 = 70",
          explanation:
            "The length is \\(10\\) cm. Area \\(=\\) length \\(\\times\\) width \\(= 10 \\times 7 = 70\\,\\mathrm{cm^2}\\). (Check the perimeter: \\(2(10 + 7) = 34\\). \\(\\checkmark\\))",
        },
      ],
      finalAnswer: "The area is \\(70\\,\\mathrm{cm^2}\\).",
      canonicalAnswer: "70",
      commonMistakes: [
        "Stopping at \\(w = 7\\) and giving the width instead of the area.",
        "Giving the perimeter answer \\(34\\) or the length \\(10\\) as the final area.",
      ],
    },
  },
  {
    id: "ga50-014",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A father is currently \\(4\\) times as old as his son. In \\(5\\) years' time, the father will be \\(3\\) times as old as his son. How old is the son now?",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["forming equations", "age problem", "unknown on both sides"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the present ages.",
          workingLatex: "\\text{son} = s,\\quad \\text{father} = 4s",
          explanation:
            "Let the son's age now be \\(s\\). The father is \"\\(4\\) times as old\", so \\(4s\\).",
        },
        {
          stepNumber: 2,
          description: "Write the ages in 5 years' time.",
          workingLatex: "\\text{son} = s + 5,\\quad \\text{father} = 4s + 5",
          explanation:
            "In \\(5\\) years, add \\(5\\) to each person's current age.",
        },
        {
          stepNumber: 3,
          description: "Form the equation for the future relationship.",
          workingLatex: "4s + 5 = 3(s + 5)",
          explanation:
            "In \\(5\\) years the father (\\(4s + 5\\)) will be \\(3\\) times the son's age then, which is \\(3(s + 5)\\).",
        },
        {
          stepNumber: 4,
          description: "Expand and collect the unknown.",
          workingLatex: "4s + 5 = 3s + 15 \\ \\Rightarrow\\ s + 5 = 15",
          explanation:
            "Expanding the bracket gives \\(3s + 15\\). Subtracting \\(3s\\) from both sides leaves \\(s + 5 = 15\\).",
        },
        {
          stepNumber: 5,
          description: "Solve for s.",
          workingLatex: "s = 10",
          explanation:
            "\\(15 - 5 = 10\\). Check: now son \\(10\\), father \\(40\\) (\\(4\\times\\)); in \\(5\\) years son \\(15\\), father \\(45 = 3 \\times 15\\). \\(\\checkmark\\)",
        },
      ],
      finalAnswer: "The son is \\(10\\) years old now.",
      canonicalAnswer: "10",
      commonMistakes: [
        "Adding \\(5\\) to only one of the two ages when writing the future relationship.",
        "Forgetting to multiply out the bracket \\(3(s + 5)\\).",
      ],
    },
  },
  {
    id: "ga50-015",
    topicRef: "ga50",
    topicTitle: "Forming expressions and equations from context",
    difficulty: "Challenge",
    answerType: "numeric",
    answerMeta: { requiredDp: 2 },
    questionText:
      "In a café, a slice of cake costs \\(\\pounds x\\). A pot of tea costs \\(\\pounds 1.20\\) less than a slice of cake. Jo buys \\(2\\) slices of cake and \\(3\\) pots of tea and pays \\(\\pounds 9.40\\) in total. Find the cost of a slice of cake.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["forming equations", "money", "modelling", "solving"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the cost of a pot of tea in terms of x.",
          workingLatex: "\\text{cake} = x,\\quad \\text{tea} = x - 1.20",
          explanation:
            "A pot of tea is \"\\(\\pounds 1.20\\) less\" than a slice of cake, so its cost is \\(x - 1.20\\) pounds.",
        },
        {
          stepNumber: 2,
          description: "Form the total-cost equation.",
          workingLatex: "2x + 3(x - 1.20) = 9.40",
          explanation:
            "Two slices of cake cost \\(2x\\); three pots of tea cost \\(3(x - 1.20)\\). Together they cost \\(\\pounds 9.40\\).",
        },
        {
          stepNumber: 3,
          description: "Expand the bracket.",
          workingLatex: "2x + 3x - 3.60 = 9.40",
          explanation:
            "Multiplying out: \\(3 \\cdot x = 3x\\) and \\(3 \\cdot 1.20 = 3.60\\), which is subtracted.",
        },
        {
          stepNumber: 4,
          description: "Collect like terms.",
          workingLatex: "5x - 3.60 = 9.40 \\ \\Rightarrow\\ 5x = 13",
          explanation:
            "\\(2x + 3x = 5x\\). Adding \\(3.60\\) to both sides: \\(9.40 + 3.60 = 13\\).",
        },
        {
          stepNumber: 5,
          description: "Divide by 5.",
          workingLatex: "x = 2.60",
          explanation:
            "\\(13 \\div 5 = 2.60\\). So a slice of cake costs \\(\\pounds 2.60\\). Check: tea \\(= \\pounds 1.40\\); \\(2(2.60) + 3(1.40) = 5.20 + 4.20 = 9.40\\). \\(\\checkmark\\)",
        },
      ],
      finalAnswer: "A slice of cake costs \\(\\pounds 2.60\\).",
      canonicalAnswer: "2.60",
      commonMistakes: [
        "Not multiplying the \\(\\pounds 1.20\\) by \\(3\\) when expanding \\(3(x - 1.20)\\).",
        "Giving the price of the tea (\\(\\pounds 1.40\\)) instead of the cake.",
      ],
    },
  },
];
