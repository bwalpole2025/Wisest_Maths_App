/**
 * Topic: Writing and using formulae
 * Ref: ga14  (DfE A5)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: WRITING a formula from a word description (perimeter P=2l+2w,
 *   total cost C=np+f, hire cost = call-out + hourly rate, age problems,
 *   nth-shape pattern formulae) and USING/EVALUATING real & scientific
 *   formulae by substitution (A=lw, A=1/2 bh, C=2 pi r, A=pi r^2, v=u+at,
 *   speed = distance/time, V=s^3, c^2=a^2+b^2, E=1/2 m v^2). Includes
 *   multi-step formulae with negatives and decimals, powers & roots inside a
 *   formula, and contextual problem solving where a formula must first be
 *   WRITTEN then USED (taxi fare, mobile tariff comparison, scaling a recipe,
 *   sequence term). This is WRITING & USING formulae only — NO rearranging /
 *   change of subject (that is ga15).
 *
 * Difficulty split (30 total):
 *   - Foundation: ga14-001 .. ga14-012  (12)
 *   - Standard:   ga14-013 .. ga14-022  (10)
 *   - Challenge:  ga14-023 .. ga14-030  (8)
 * Id range: ga14-001 .. ga14-030.
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
    id: "ga14-001",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A rectangle has length \\(l\\) and width \\(w\\). Write a formula for its perimeter \\(P\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "perimeter", "rectangle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the four sides of the rectangle.",
          workingLatex: "\\text{sides: } l, \\; w, \\; l, \\; w",
          explanation:
            "A rectangle has two lengths and two widths. The two lengths are equal to each other, and the two widths are equal to each other — that opposite-sides-equal property is what makes a rectangle a rectangle. Listing all four first means none gets forgotten.",
        },
        {
          stepNumber: 2,
          description: "Add the four sides to get the perimeter.",
          workingLatex: "P = l + w + l + w",
          explanation:
            "Perimeter means the total distance all the way round the edge, so we add every side. Writing them out in full before tidying up avoids accidentally missing a side or counting one twice.",
        },
        {
          stepNumber: 3,
          description: "Collect like terms.",
          workingLatex: "P = 2l + 2w",
          explanation:
            "There are two \\(l\\) terms and two \\(w\\) terms, so \\(l + l = 2l\\) and \\(w + w = 2w\\). We cannot combine \\(2l\\) and \\(2w\\) into a single term because \\(l\\) and \\(w\\) stand for different lengths — only matching letters can be added together.",
        },
      ],
      finalAnswer: "\\(P = 2l + 2w\\).",
      canonicalAnswer: "2l+2w",
    },
  },
  {
    id: "ga14-002",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Pens cost \\(£3\\) each. Write a formula for the total cost \\(C\\), in pounds, of buying \\(n\\) pens.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "cost", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply the price per pen by the number of pens.",
          workingLatex: "C = 3 \\cdot n",
          explanation:
            "Each pen costs £3, and there are \\(n\\) of them, so the total is £3 repeated \\(n\\) times — and repeated addition of the same amount is exactly multiplication. The cost grows in step with how many pens you buy.",
        },
        {
          stepNumber: 2,
          description: "Write the product without the multiplication sign.",
          workingLatex: "C = 3n",
          explanation:
            "In algebra we write a number directly next to a letter rather than with a \\(\\cdot\\) between them, so \\(3 \\cdot n\\) is written \\(3n\\). The number (the coefficient) always goes in front of the letter, never after it.",
        },
      ],
      finalAnswer: "\\(C = 3n\\).",
      canonicalAnswer: "3n",
    },
  },
  {
    id: "ga14-003",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The area of a rectangle is \\(A = lw\\). Find \\(A\\) when \\(l = 8\\,\\mathrm{cm}\\) and \\(w = 5\\,\\mathrm{cm}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "area", "rectangle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down the formula.",
          workingLatex: "A = lw",
          explanation:
            "Start from the given area formula \\(A = lw\\), where \\(lw\\) is shorthand for \\(l\\) times \\(w\\). Writing it down first gives a clear template to drop the numbers into.",
        },
        {
          stepNumber: 2,
          description: "Substitute both lengths.",
          workingLatex: "A = (8)(5)",
          explanation:
            "Replace \\(l\\) with 8 and \\(w\\) with 5. Putting each number in its own bracket makes it clear they are being multiplied, exactly as \\(l\\) and \\(w\\) were.",
        },
        {
          stepNumber: 3,
          description: "Multiply to evaluate.",
          workingLatex: "(8)(5) = 40",
          explanation:
            "Eight multiplied by five is 40. Because both sides were measured in centimetres, the area unit is square centimetres — multiplying two lengths always produces an area, and cm × cm gives cm².",
        },
      ],
      finalAnswer: "\\(A = 40\\,\\mathrm{cm^2}\\).",
      canonicalAnswer: "40",
    },
  },
  {
    id: "ga14-004",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Sam is \\(y\\) years old. His sister is \\(4\\) years older than Sam. Write a formula for his sister's age \\(S\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "age problem"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add 4 to Sam's age.",
          workingLatex: "S = y + 4",
          explanation:
            "\"Older\" means a bigger number, so the word translates to adding. Sam's age is \\(y\\), and the sister is exactly 4 years more, so her age \\(S\\) is \\(y + 4\\). A common slip is to subtract and write \\(y - 4\\) — but the older person must have the larger age, so it has to be a plus.",
        },
      ],
      finalAnswer: "\\(S = y + 4\\).",
      canonicalAnswer: "y+4",
    },
  },
  {
    id: "ga14-005",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The area of a triangle is \\(A = \\dfrac{1}{2}bh\\). Find \\(A\\) when \\(b = 10\\,\\mathrm{cm}\\) and \\(h = 6\\,\\mathrm{cm}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "area", "triangle"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the base and height.",
          workingLatex: "A = \\frac{1}{2}bh = \\frac{1}{2}(10)(6)",
          explanation:
            "Replace \\(b\\) with 10 and \\(h\\) with 6, keeping the \\(\\frac{1}{2}\\) sitting at the front untouched. The brackets show that the base, the height and the half are all multiplied together.",
        },
        {
          stepNumber: 2,
          description: "Multiply the base and height.",
          workingLatex: "\\frac{1}{2}(10)(6) = \\frac{1}{2}(60)",
          explanation:
            "Deal with the two lengths first: \\(10 \\times 6 = 60\\). It is fine to multiply the numbers in any order since multiplication is commutative; here we leave the \\(\\frac{1}{2}\\) until last because halving a whole number is the easiest step. This leaves one half of 60 still to find.",
        },
        {
          stepNumber: 3,
          description: "Halve to finish.",
          workingLatex: "\\frac{1}{2}(60) = 30",
          explanation:
            "Taking half of 60 gives 30. The units are square centimetres, because we multiplied two lengths each measured in centimetres — an area is always a length times a length.",
        },
      ],
      finalAnswer: "\\(A = 30\\,\\mathrm{cm^2}\\).",
      canonicalAnswer: "30",
    },
  },
  {
    id: "ga14-006",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Apples cost \\(£2\\) each. There is a fixed delivery charge of \\(£5\\). Write a formula for the total cost \\(C\\), in pounds, of buying \\(n\\) apples with delivery.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "cost", "fixed charge", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the cost of the apples.",
          workingLatex: "2n",
          explanation:
            "Each apple costs £2 and there are \\(n\\) of them, so the apples alone cost \\(2 \\times n = 2n\\). This is the variable part — it changes depending on how many apples you buy.",
        },
        {
          stepNumber: 2,
          description: "Add the fixed delivery charge.",
          workingLatex: "C = 2n + 5",
          explanation:
            "The £5 delivery is charged just once, no matter how many apples are bought, so it is a constant that we simply add on. A common slip is to write \\(5n\\) and multiply the delivery by \\(n\\) — but a fixed charge is added, not scaled with the number of apples.",
        },
      ],
      finalAnswer: "\\(C = 2n + 5\\).",
      canonicalAnswer: "2n+5",
    },
  },
  {
    id: "ga14-007",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The perimeter of a square is \\(P = 4s\\). A square has perimeter formula used with \\(s = 9\\,\\mathrm{cm}\\). Find \\(P\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "perimeter", "square"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the side length.",
          workingLatex: "P = 4s = 4(9)",
          explanation:
            "A square has four equal sides, so its perimeter formula is four times one side, \\(4s\\). Replace \\(s\\) with the given 9 to get \\(4(9)\\).",
        },
        {
          stepNumber: 2,
          description: "Multiply to evaluate.",
          workingLatex: "4(9) = 36",
          explanation:
            "Four lots of 9 is 36. Perimeter is a distance around the edge — a single length — so the answer is in centimetres, not square centimetres. Only multiplying two lengths would give a squared unit.",
        },
      ],
      finalAnswer: "\\(P = 36\\,\\mathrm{cm}\\).",
      canonicalAnswer: "36",
    },
  },
  {
    id: "ga14-008",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A plumber charges a \\(£40\\) call-out fee plus \\(£25\\) for each hour worked. Write a formula for the total charge \\(C\\), in pounds, for \\(h\\) hours of work.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "cost", "call-out", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the hourly part of the charge.",
          workingLatex: "25h",
          explanation:
            "The £25 rate is charged for each of the \\(h\\) hours, so this part is \\(25 \\times h = 25h\\). This is the variable part: it grows as the job takes longer.",
        },
        {
          stepNumber: 2,
          description: "Add the fixed call-out fee.",
          workingLatex: "C = 25h + 40",
          explanation:
            "The £40 call-out is paid just once regardless of how long the work takes, so it is a constant added on. Don't multiply it by \\(h\\): a call-out is a one-off charge, not an hourly one.",
        },
      ],
      finalAnswer: "\\(C = 25h + 40\\).",
      canonicalAnswer: "25h+40",
    },
  },
  {
    id: "ga14-009",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Using the plumber's formula \\(C = 25h + 40\\), find the total charge for \\(h = 3\\) hours of work.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "cost", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the number of hours.",
          workingLatex: "C = 25h + 40 = 25(3) + 40",
          explanation:
            "Replace \\(h\\) with 3, the number of hours worked. The \\(+40\\) call-out stays exactly as it is, because it is a fixed fee that does not depend on \\(h\\).",
        },
        {
          stepNumber: 2,
          description: "Multiply before adding.",
          workingLatex: "25(3) + 40 = 75 + 40",
          explanation:
            "By order of operations (BIDMAS), multiplication comes before addition, so work out \\(25 \\times 3 = 75\\) first. A common slip is to add the 3 and the 40 first — but the 3 belongs only to the £25 hourly rate, not to the call-out.",
        },
        {
          stepNumber: 3,
          description: "Add to finish.",
          workingLatex: "75 + 40 = 115",
          explanation:
            "Adding the £75 of hourly charges to the £40 call-out fee gives £115 in total for the three-hour job.",
        },
      ],
      finalAnswer: "\\(C = \\pounds 115\\).",
      canonicalAnswer: "115",
    },
  },
  {
    id: "ga14-010",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Speed is given by \\(\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}\\). A runner covers \\(40\\,\\mathrm{m}\\) in \\(8\\,\\mathrm{s}\\). Find the speed in \\(\\mathrm{m\\,s^{-1}}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "speed", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the distance and time.",
          workingLatex: "\\text{speed} = \\frac{\\text{distance}}{\\text{time}} = \\frac{40}{8}",
          explanation:
            "Put the distance (40 m) on top and the time (8 s) on the bottom, matching the layout of the formula. Keeping them the right way up matters: swapping them would give seconds per metre, the pace, not metres per second, the speed.",
        },
        {
          stepNumber: 2,
          description: "Divide to evaluate.",
          workingLatex: "\\frac{40}{8} = 5",
          explanation:
            "Forty divided by eight is 5. The unit \\(\\mathrm{m\\,s^{-1}}\\) (metres per second) comes directly from dividing a distance in metres by a time in seconds — the units divide just as the numbers do.",
        },
      ],
      finalAnswer: "Speed \\(= 5\\,\\mathrm{m\\,s^{-1}}\\).",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga14-011",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "A pattern is made from matchsticks. The \\(n\\)th shape uses \\(3\\) matchsticks for the first square and \\(2\\) more for each extra square. Write a formula for the number of matchsticks \\(M\\) in the \\(n\\)th shape.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "number pattern", "nth term"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Build the formula from the pattern's description.",
          workingLatex: "M = 3 + 2(n - 1)",
          explanation:
            "The first square uses 3 sticks. Every square after the first adds 2 more, and in the \\(n\\)th shape there are \\(n - 1\\) of those extra squares. A common slip is to use \\(n\\) rather than \\(n - 1\\) — but the very first square is already accounted for inside the 3, so only the ones beyond it get the \\(2\\).",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket.",
          workingLatex: "M = 3 + 2n - 2",
          explanation:
            "Multiply the 2 across both terms in the bracket: \\(2 \\times n = 2n\\) and \\(2 \\times (-1) = -2\\). This unpacks the formula into separate terms, ready for tidying up.",
        },
        {
          stepNumber: 3,
          description: "Collect the constants.",
          workingLatex: "M = 2n + 1",
          explanation:
            "Combine the plain number terms: \\(3 - 2 = 1\\). The \\(2n\\) term has a letter in it, so it cannot be merged with a constant, leaving the tidy formula \\(2n + 1\\). You can sanity-check it: the 1st shape gives \\(2(1)+1 = 3\\) sticks, which matches the description.",
        },
      ],
      finalAnswer: "\\(M = 2n + 1\\).",
      canonicalAnswer: "2n+1",
    },
  },
  {
    id: "ga14-012",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "The volume of a cube is \\(V = s^3\\). Find \\(V\\) when \\(s = 4\\,\\mathrm{cm}\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "volume", "cube", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the side length in brackets.",
          workingLatex: "V = s^3 = (4)^3",
          explanation:
            "Replace \\(s\\) with 4, keeping the power of 3 on it. The brackets make clear that the whole of 4 is being cubed.",
        },
        {
          stepNumber: 2,
          description: "Write the cube as repeated multiplication.",
          workingLatex: "(4)^3 = 4 \\cdot 4 \\cdot 4",
          explanation:
            "Cubing means multiplying the number by itself three times. Writing out the three factors explicitly guards against the most common slip — doing \\(4 \\times 3 = 12\\), which treats the power as ordinary multiplication by 3 rather than as repeated multiplication.",
        },
        {
          stepNumber: 3,
          description: "Multiply the three factors.",
          workingLatex: "4 \\cdot 4 \\cdot 4 = 64",
          explanation:
            "Work left to right: \\(4 \\times 4 = 16\\), then \\(16 \\times 4 = 64\\). The units are cubic centimetres because three lengths in centimetres were multiplied together.",
        },
      ],
      finalAnswer: "\\(V = 64\\,\\mathrm{cm^3}\\).",
      canonicalAnswer: "64",
    },
  },

  // ───────────────────────── STANDARD (013–022) ─────────────────────────
  {
    id: "ga14-013",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A taxi charges a fixed fee of \\(£3.50\\) plus \\(£1.20\\) for each mile travelled. Write a formula for the fare \\(F\\), in pounds, for a journey of \\(m\\) miles.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "cost", "taxi", "decimals", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the mileage part of the fare.",
          workingLatex: "1.2m",
          explanation:
            "Each mile costs £1.20, and there are \\(m\\) miles, so this part is \\(1.2 \\times m = 1.2m\\). We write £1.20 as 1.2 in pounds because the trailing zero adds nothing to the number — it only matters when we present money at the end.",
        },
        {
          stepNumber: 2,
          description: "Add the fixed fee.",
          workingLatex: "F = 1.2m + 3.5",
          explanation:
            "The £3.50 fixed fee is paid once per journey, so it is a constant added on, not multiplied by the miles. The mileage charge \\(1.2m\\) varies with distance, while the £3.50 stays the same no matter how far you go.",
        },
      ],
      finalAnswer: "\\(F = 1.2m + 3.5\\).",
      canonicalAnswer: "1.2m+3.5",
    },
  },
  {
    id: "ga14-014",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Using the taxi formula \\(F = 1.2m + 3.5\\), find the fare for a journey of \\(m = 12\\) miles.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "cost", "decimals", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the number of miles.",
          workingLatex: "F = 1.2m + 3.5 = 1.2(12) + 3.5",
          explanation:
            "Replace \\(m\\) with 12, the number of miles. The fixed fee \\(+3.5\\) is left untouched because it does not depend on the distance.",
        },
        {
          stepNumber: 2,
          description: "Multiply before adding.",
          workingLatex: "1.2(12) + 3.5 = 14.4 + 3.5",
          explanation:
            "By BIDMAS, do the multiplication first: \\(1.2 \\times 12 = 14.4\\). If the decimal feels awkward, split it as \\(1 \\times 12 + 0.2 \\times 12 = 12 + 2.4 = 14.4\\). The \\(+3.5\\) waits its turn.",
        },
        {
          stepNumber: 3,
          description: "Add to finish.",
          workingLatex: "14.4 + 3.5 = 17.9",
          explanation:
            "Line up the decimal points and add the mileage cost to the fixed fee: \\(14.4 + 3.5 = 17.9\\). In money this is written £17.90, with the extra zero added back so there are two decimal places for the pence.",
        },
      ],
      finalAnswer: "\\(F = \\pounds 17.90\\).",
      canonicalAnswer: "17.9",
    },
  },
  {
    id: "ga14-015",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Use \\(v = u + at\\) to find \\(v\\) when \\(u = 12\\), \\(a = -3\\) and \\(t = 4\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "kinematics", "negatives"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the values, keeping the negative in brackets.",
          workingLatex: "v = u + at = 12 + (-3)(4)",
          explanation:
            "Replace \\(u\\) with 12, \\(a\\) with \\(-3\\) and \\(t\\) with 4. Wrapping \\(-3\\) in its own brackets keeps the minus sign firmly attached to the acceleration, so it is not accidentally dropped when we multiply in the next step.",
        },
        {
          stepNumber: 2,
          description: "Multiply before adding.",
          workingLatex: "12 + (-3)(4) = 12 + (-12)",
          explanation:
            "By BIDMAS, work out \\(at\\) (the multiplication) before the addition. A negative times a positive is negative, so \\((-3)(4) = -12\\). The \\(+\\) sign from the formula stays put, giving \\(12 + (-12)\\).",
        },
        {
          stepNumber: 3,
          description: "Combine to finish.",
          workingLatex: "12 + (-12) = 0",
          explanation:
            "Adding a negative is the same as subtracting, so \\(12 + (-12) = 12 - 12 = 0\\). The two equal-and-opposite terms cancel exactly. Physically, the deceleration has brought the velocity down to zero after 4 seconds.",
        },
      ],
      finalAnswer: "\\(v = 0\\).",
      canonicalAnswer: "0",
    },
  },
  {
    id: "ga14-016",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "exactValue",
    questionText:
      "The circumference of a circle is \\(C = 2\\pi r\\). Find the exact circumference when \\(r = 7\\,\\mathrm{cm}\\), leaving your answer in terms of \\(\\pi\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "circle", "circumference", "pi"],
    answerMeta: { exactForm: true },
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the radius into the formula.",
          workingLatex: "C = 2\\pi r = 2\\pi (7)",
          explanation:
            "Replace \\(r\\) with 7, leaving the \\(2\\pi\\) in place. Because the question asks for an exact answer, we keep \\(\\pi\\) as a symbol throughout rather than typing it into a calculator and rounding.",
        },
        {
          stepNumber: 2,
          description: "Multiply the numbers, keeping pi.",
          workingLatex: "2\\pi (7) = 14\\pi",
          explanation:
            "Multiply only the ordinary numbers: \\(2 \\times 7 = 14\\), and the \\(\\pi\\) simply rides along as a factor, giving \\(14\\pi\\). \"In terms of \\(\\pi\\)\" means this exact form is the finished answer — turning it into a decimal like 43.98 would lose the exactness the question asked for.",
        },
      ],
      finalAnswer: "\\(C = 14\\pi\\,\\mathrm{cm}\\).",
      canonicalAnswer: "14*pi",
    },
  },
  {
    id: "ga14-017",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A taxi firm A charges \\(£2\\) plus \\(£3\\) per mile. A rival firm B charges \\(£8\\) plus \\(£1\\) per mile. Write a single expression for how much more firm A charges than firm B for a journey of \\(m\\) miles.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "cost comparison", "simplify", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write each firm's cost as a formula.",
          workingLatex: "A = 3m + 2, \\quad B = m + 8",
          explanation:
            "For each firm, the per-mile charge multiplies \\(m\\) and the fixed fee is added on. Firm A is \\(3m + 2\\); firm B is \\(1 \\times m + 8 = m + 8\\), where the per-mile coefficient of 1 is left invisible as usual.",
        },
        {
          stepNumber: 2,
          description: "Subtract B from A.",
          workingLatex: "A - B = (3m + 2) - (m + 8)",
          explanation:
            "\"How much more A charges than B\" is the difference \\(A - B\\). Putting each formula in its own brackets keeps the subtraction applied to the whole of B, not just its first term.",
        },
        {
          stepNumber: 3,
          description: "Remove the second bracket.",
          workingLatex: "A - B = 3m + 2 - m - 8",
          explanation:
            "The minus sign in front of the second bracket flips the sign of every term inside it: \\(-(m + 8) = -m - 8\\). Forgetting to flip the \\(+8\\) and writing \\(-m + 8\\) is the classic slip here — the minus must reach both terms.",
        },
        {
          stepNumber: 4,
          description: "Collect like terms.",
          workingLatex: "A - B = 2m - 6",
          explanation:
            "Gather the \\(m\\) terms and the number terms separately: \\(3m - m = 2m\\) and \\(2 - 8 = -6\\). The result \\(2m - 6\\) is the extra amount firm A charges over firm B.",
        },
      ],
      finalAnswer: "Firm A costs \\(2m - 6\\) pounds more.",
      canonicalAnswer: "2m-6",
    },
  },
  {
    id: "ga14-018",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The area of a trapezium is \\(A = \\dfrac{1}{2}(a + b)h\\). Find \\(A\\) when \\(a = 5\\), \\(b = 9\\) and \\(h = 6\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "area", "trapezium", "fraction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute all three values.",
          workingLatex: "A = \\frac{1}{2}(a + b)h = \\frac{1}{2}(5 + 9)(6)",
          explanation:
            "Replace \\(a\\) with 5, \\(b\\) with 9 and \\(h\\) with 6, keeping the brackets exactly as in the formula so the \\((a+b)\\) grouping is preserved.",
        },
        {
          stepNumber: 2,
          description: "Work out the bracket first.",
          workingLatex: "\\frac{1}{2}(5 + 9)(6) = \\frac{1}{2}(14)(6)",
          explanation:
            "By BIDMAS, brackets come first: \\(5 + 9 = 14\\), which is the sum of the two parallel sides. This addition must happen before any multiplying — adding the parallel sides is the heart of the trapezium formula.",
        },
        {
          stepNumber: 3,
          description: "Multiply the factors.",
          workingLatex: "\\frac{1}{2}(14)(6) = \\frac{1}{2}(84)",
          explanation:
            "Now multiply the bracket result by the height: \\(14 \\times 6 = 84\\). The \\(\\frac{1}{2}\\) is still waiting at the front, to be applied last.",
        },
        {
          stepNumber: 4,
          description: "Halve to finish.",
          workingLatex: "\\frac{1}{2}(84) = 42",
          explanation:
            "Half of 84 is 42. The trapezium area formula is really the average of the parallel sides times the height, and halving at the end produces that average.",
        },
      ],
      finalAnswer: "\\(A = 42\\) square units.",
      canonicalAnswer: "42",
    },
  },
  {
    id: "ga14-019",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A right-angled triangle has the two shorter sides \\(a = 6\\) and \\(b = 8\\). Use \\(c^2 = a^2 + b^2\\) to find the hypotenuse \\(c\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "Pythagoras", "powers", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the two shorter sides.",
          workingLatex: "c^2 = a^2 + b^2 = (6)^2 + (8)^2",
          explanation:
            "Replace \\(a\\) with 6 and \\(b\\) with 8. Note this formula gives \\(c^2\\), not \\(c\\) — we will need a square root at the very end to recover \\(c\\) itself.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the squares.",
          workingLatex: "(6)^2 + (8)^2 = 36 + 64",
          explanation:
            "Square each side: \\(6^2 = 36\\) and \\(8^2 = 64\\). Squaring means a number times itself, so \\(6 \\times 6\\) and \\(8 \\times 8\\), not \\(6 \\times 2\\) and \\(8 \\times 2\\).",
        },
        {
          stepNumber: 3,
          description: "Add to get c squared.",
          workingLatex: "36 + 64 = 100",
          explanation:
            "Adding the two squares gives \\(c^2 = 100\\). This is the squared length of the hypotenuse, not the hypotenuse itself yet.",
        },
        {
          stepNumber: 4,
          description: "Square root to find c.",
          workingLatex: "c = \\sqrt{100} = 10",
          explanation:
            "To undo the square, take the square root: \\(\\sqrt{100} = 10\\). A common slip is to stop at 100 and forget this final root.",
        },
      ],
      finalAnswer: "\\(c = 10\\).",
      canonicalAnswer: "10",
    },
  },
  {
    id: "ga14-020",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A recipe for \\(4\\) people uses \\(g = 50p\\) grams of flour, where \\(p\\) is the number of people. How many grams of flour are needed for \\(p = 10\\) people?",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "scaling", "recipe", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the number of people.",
          workingLatex: "g = 50p = 50(10)",
          explanation:
            "Replace \\(p\\) with 10, the number of people we are cooking for. The \"4 people\" in the wording is just background context — the formula \\(g = 50p\\) already builds in the 50 grams of flour per person, so we don't divide or scale by 4.",
        },
        {
          stepNumber: 2,
          description: "Multiply to evaluate.",
          workingLatex: "50(10) = 500",
          explanation:
            "Fifty multiplied by ten is 500. So 10 people need 500 grams of flour. The unit is grams because the formula was defined to give a mass in grams.",
        },
      ],
      finalAnswer: "\\(g = 500\\,\\mathrm{g}\\) of flour.",
      canonicalAnswer: "500",
    },
  },
  {
    id: "ga14-021",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "The cost in pounds of a gym membership is \\(C = 30 + 4.5w\\), where \\(w\\) is the number of weeks. Find the cost for \\(w = 8\\) weeks.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "cost", "decimals", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the number of weeks.",
          workingLatex: "C = 30 + 4.5w = 30 + 4.5(8)",
          explanation:
            "Replace \\(w\\) with 8, the number of weeks. The fixed \\(30\\) joining fee stays exactly as it is, since it is a one-off charge that does not depend on \\(w\\).",
        },
        {
          stepNumber: 2,
          description: "Multiply before adding.",
          workingLatex: "30 + 4.5(8) = 30 + 36",
          explanation:
            "By BIDMAS, do the multiplication before the addition: \\(4.5 \\times 8 = 36\\). If the decimal is awkward, split it as \\(4 \\times 8 + 0.5 \\times 8 = 32 + 4 = 36\\). The \\(+30\\) waits until the next step.",
        },
        {
          stepNumber: 3,
          description: "Add to finish.",
          workingLatex: "30 + 36 = 66",
          explanation:
            "Adding the £36 of weekly charges to the £30 fixed fee gives £66 for an eight-week membership.",
        },
      ],
      finalAnswer: "\\(C = \\pounds 66\\).",
      canonicalAnswer: "66",
    },
  },
  {
    id: "ga14-022",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The \\(n\\)th term of a sequence is found by multiplying the position by \\(5\\) and then subtracting \\(2\\). Write a formula for the \\(n\\)th term \\(T\\), and hence state \\(T\\) when \\(n = 1\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "nth term", "sequence"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply the position by 5.",
          workingLatex: "5n",
          explanation:
            "The position in the sequence is \\(n\\), and \"multiplying the position by 5\" gives \\(5 \\times n = 5n\\). This is the variable part that grows as you move along the sequence.",
        },
        {
          stepNumber: 2,
          description: "Subtract 2 to form the formula.",
          workingLatex: "T = 5n - 2",
          explanation:
            "Now \"subtract 2\" from the previous result, giving \\(T = 5n - 2\\). Carrying out the operations in the exact order the words state keeps the formula faithful to the description.",
        },
        {
          stepNumber: 3,
          description: "Substitute n = 1 into the formula.",
          workingLatex: "T = 5(1) - 2",
          explanation:
            "The question also asks for the first term, so put \\(n = 1\\) into the formula we just built, replacing the letter \\(n\\) with the number 1.",
        },
        {
          stepNumber: 4,
          description: "Evaluate using BIDMAS.",
          workingLatex: "T = 5 - 2 = 3",
          explanation:
            "Multiplication before subtraction: \\(5 \\times 1 = 5\\), then \\(5 - 2 = 3\\). So the first term is 3, which also acts as a quick sanity check that the formula behaves sensibly.",
        },
      ],
      finalAnswer: "\\(T = 5n - 2\\), and \\(T = 3\\) when \\(n = 1\\).",
      canonicalAnswer: "5n-2",
    },
  },

  // ───────────────────────── CHALLENGE (023–030) ─────────────────────────
  {
    id: "ga14-023",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Tariff A for a phone costs \\(£10\\) plus \\(5\\)p per minute. Tariff B costs \\(£18\\) plus \\(1\\)p per minute. For how many minutes \\(m\\) do the two tariffs cost the same? (Work in pence.)",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "tariff comparison", "solve equation", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write each cost in pence.",
          workingLatex: "A = 1000 + 5m, \\quad B = 1800 + m",
          explanation:
            "Working in pence keeps everything in whole numbers: £10 = 1000p and £18 = 1800p. Tariff A adds 5p per minute (\\(5m\\)); tariff B adds 1p per minute (\\(m\\)).",
        },
        {
          stepNumber: 2,
          description: "Set the two costs equal.",
          workingLatex: "1000 + 5m = 1800 + m",
          explanation:
            "\"Cost the same\" means the two expressions are equal, so we form an equation. Solving it finds the number of minutes where the tariffs break even.",
        },
        {
          stepNumber: 3,
          description: "Collect the m terms on one side.",
          workingLatex: "5m - m = 1800 - 1000",
          explanation:
            "Subtract \\(m\\) from both sides to gather the minute-terms on the left, and subtract 1000 from both sides to gather the constants on the right. Whatever you do to one side you must do to the other, which is what keeps the equation balanced.",
        },
        {
          stepNumber: 4,
          description: "Simplify both sides.",
          workingLatex: "4m = 800",
          explanation:
            "On the left, \\(5m - m = 4m\\); on the right, \\(1800 - 1000 = 800\\). This leaves a simple one-step equation.",
        },
        {
          stepNumber: 5,
          description: "Divide to find the minutes.",
          workingLatex: "m = \\frac{800}{4} = 200",
          explanation:
            "Divide both sides by 4 to undo the multiplication: \\(800 \\div 4 = 200\\). So both tariffs cost the same at 200 minutes.",
        },
      ],
      finalAnswer: "The tariffs cost the same at \\(m = 200\\) minutes.",
      canonicalAnswer: "200",
    },
  },
  {
    id: "ga14-024",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The kinetic energy of an object is \\(E = \\dfrac{1}{2}mv^2\\). Find \\(E\\) (in joules) when \\(m = 5\\,\\mathrm{kg}\\) and \\(v = 8\\,\\mathrm{m\\,s^{-1}}\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "kinetic energy", "powers", "physics"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the mass and speed.",
          workingLatex: "E = \\frac{1}{2}mv^2 = \\frac{1}{2}(5)(8)^2",
          explanation:
            "Replace \\(m\\) with 5 and \\(v\\) with 8, keeping the square sitting on the speed. The power applies only to \\(v\\) (the \\(v^2\\)), not to the mass and not to the \\(\\frac{1}{2}\\).",
        },
        {
          stepNumber: 2,
          description: "Square the speed first.",
          workingLatex: "\\frac{1}{2}(5)(8)^2 = \\frac{1}{2}(5)(64)",
          explanation:
            "By BIDMAS, powers come before multiplication, so deal with \\(8^2 = 64\\) before anything else. A common slip is to multiply \\(5 \\times 8\\) first and then square — the square belongs to \\(v\\) alone.",
        },
        {
          stepNumber: 3,
          description: "Multiply the factors.",
          workingLatex: "\\frac{1}{2}(5)(64) = \\frac{1}{2}(320)",
          explanation:
            "Multiply the two numbers: \\(5 \\times 64 = 320\\). The \\(\\frac{1}{2}\\) is still to be applied.",
        },
        {
          stepNumber: 4,
          description: "Halve to finish.",
          workingLatex: "\\frac{1}{2}(320) = 160",
          explanation:
            "Half of 320 is 160. The unit is joules, the standard unit of energy.",
        },
      ],
      finalAnswer: "\\(E = 160\\,\\mathrm{J}\\).",
      canonicalAnswer: "160",
    },
  },
  {
    id: "ga14-025",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A van hire firm charges a fixed fee of \\(£F\\) plus \\(£d\\) per day. Hiring for \\(5\\) days costs \\(£F + 5d\\). Write a simplified formula for the average cost per day, \\(A\\), of a \\(5\\)-day hire.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "average", "cost", "fraction", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the total cost of the 5-day hire.",
          workingLatex: "\\text{total} = F + 5d",
          explanation:
            "The fixed fee \\(F\\) is paid once, and the daily charge \\(d\\) applies to each of the 5 days, giving \\(5d\\). Together the whole hire costs \\(F + 5d\\).",
        },
        {
          stepNumber: 2,
          description: "Divide the total by the number of days.",
          workingLatex: "A = \\frac{F + 5d}{5}",
          explanation:
            "An average per day is the total cost shared equally over the days, so divide the whole total by 5. The entire numerator \\(F + 5d\\) sits over the 5 — both terms are being divided, which is why they stay grouped together on top.",
        },
        {
          stepNumber: 3,
          description: "Split the fraction to simplify.",
          workingLatex: "A = \\frac{F}{5} + d",
          explanation:
            "Divide each term on top by 5 separately: \\(\\frac{F}{5} + \\frac{5d}{5}\\), and \\(\\frac{5d}{5} = d\\). This shows the structure clearly — a share of the fixed fee plus the daily rate. Only cancel the 5 against the \\(5d\\) term, never against the \\(F\\).",
        },
      ],
      finalAnswer: "\\(A = \\dfrac{F}{5} + d\\).",
      canonicalAnswer: "F/5+d",
    },
  },
  {
    id: "ga14-026",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Use \\(s = ut + \\dfrac{1}{2}at^2\\) to find \\(s\\) when \\(u = 5\\), \\(a = -2\\) and \\(t = 4\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "kinematics", "negatives", "powers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute all values, keeping the negative in brackets.",
          workingLatex: "s = ut + \\frac{1}{2}at^2 = (5)(4) + \\frac{1}{2}(-2)(4)^2",
          explanation:
            "Replace \\(u = 5\\), \\(a = -2\\) and \\(t = 4\\). Bracketing \\(-2\\) keeps the minus sign tied to the acceleration, and the square stays on \\(t\\) only.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the power first.",
          workingLatex: "(5)(4) + \\frac{1}{2}(-2)(4)^2 = (5)(4) + \\frac{1}{2}(-2)(16)",
          explanation:
            "By BIDMAS, the index comes before any multiplication, so compute \\(4^2 = 16\\). Only the \\(t\\) is squared, not the whole \\(at^2\\) term.",
        },
        {
          stepNumber: 3,
          description: "Work out each term.",
          workingLatex: "(5)(4) + \\frac{1}{2}(-2)(16) = 20 + (-16)",
          explanation:
            "First term: \\(5 \\times 4 = 20\\). Second term, working left to right: \\(\\frac{1}{2} \\times (-2) = -1\\), then \\(-1 \\times 16 = -16\\). Keeping the negative carefully attached through both multiplications gives \\(20 + (-16)\\).",
        },
        {
          stepNumber: 4,
          description: "Combine to finish.",
          workingLatex: "20 + (-16) = 20 - 16 = 4",
          explanation:
            "Adding a negative is subtracting, so \\(20 + (-16) = 20 - 16 = 4\\). The negative acceleration reduces the displacement, which is why the answer is smaller than the \\(ut = 20\\) term alone.",
        },
      ],
      finalAnswer: "\\(s = 4\\).",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga14-027",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A square of side \\(x\\) has a smaller square of side \\(2\\) removed from one corner. Write a simplified formula for the remaining area \\(A\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["writing formula", "area", "powers", "simplify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the area of the large square.",
          workingLatex: "x^2",
          explanation:
            "A square's area is side squared, so the large square has area \\(x \\times x = x^2\\). This is the full area before anything is removed.",
        },
        {
          stepNumber: 2,
          description: "Write the area of the removed square.",
          workingLatex: "2^2 = 4",
          explanation:
            "The small square has side 2, so its area is \\(2^2 = 4\\). This is the piece cut out of the corner.",
        },
        {
          stepNumber: 3,
          description: "Subtract the removed area.",
          workingLatex: "A = x^2 - 4",
          explanation:
            "Remaining area is the large square minus the small square: \\(x^2 - 4\\). Note that \\(x^2\\) and 4 are not like terms — one has a letter, one is a plain number — so the expression cannot be simplified any further. In particular, do not try to square-root the terms and write \\(x - 2\\); that is a different (and smaller) quantity.",
        },
      ],
      finalAnswer: "\\(A = x^2 - 4\\).",
      canonicalAnswer: "x^2-4",
    },
  },
  {
    id: "ga14-028",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The cost in pounds of printing \\(n\\) leaflets is \\(C = 0.04n + 15\\). A customer pays \\(£75\\). Using the formula, find how many leaflets \\(n\\) were printed.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "cost", "solve equation", "decimals", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the formula equal to the amount paid.",
          workingLatex: "0.04n + 15 = 75",
          explanation:
            "The customer paid £75, so the cost \\(C\\) equals 75. Replacing \\(C\\) with 75 turns the formula into an equation. This is \"using a formula backwards\" — we know the output and want the input \\(n\\).",
        },
        {
          stepNumber: 2,
          description: "Subtract the fixed charge from both sides.",
          workingLatex: "0.04n = 75 - 15 = 60",
          explanation:
            "Take the £15 fixed charge off both sides to isolate the per-leaflet part: \\(75 - 15 = 60\\). This leaves \\(0.04n = 60\\).",
        },
        {
          stepNumber: 3,
          description: "Divide by the per-leaflet cost.",
          workingLatex: "n = \\frac{60}{0.04}",
          explanation:
            "Each leaflet costs £0.04, so divide the £60 spent on leaflets by 0.04 to find how many there were. Dividing undoes the multiplication by 0.04.",
        },
        {
          stepNumber: 4,
          description: "Evaluate the division.",
          workingLatex: "n = 1500",
          explanation:
            "To divide by 0.04, multiply top and bottom by 100: \\(\\frac{6000}{4} = 1500\\). So 1500 leaflets were printed.",
        },
      ],
      finalAnswer: "\\(n = 1500\\) leaflets.",
      canonicalAnswer: "1500",
    },
  },
  {
    id: "ga14-029",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The surface area of a closed cylinder is \\(S = 2\\pi r^2 + 2\\pi r h\\). Taking \\(\\pi = 3\\) (a rough approximation), find \\(S\\) when \\(r = 2\\) and \\(h = 5\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "surface area", "cylinder", "powers", "pi"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the radius, height and approximation for pi.",
          workingLatex: "S = 2\\pi r^2 + 2\\pi r h = 2(3)(2)^2 + 2(3)(2)(5)",
          explanation:
            "Replace \\(\\pi\\) with 3, \\(r\\) with 2 and \\(h\\) with 5 in both terms, taking care to make every substitution in each term. The square belongs to the \\(r\\) in the first term only; the second term has no power.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the power in the first term.",
          workingLatex: "2(3)(2)^2 + 2(3)(2)(5) = 2(3)(4) + 2(3)(2)(5)",
          explanation:
            "By BIDMAS, work out the index first: \\(2^2 = 4\\) in the first term. The second term has no power, so it is left as it is for now.",
        },
        {
          stepNumber: 3,
          description: "Multiply out each term.",
          workingLatex: "2(3)(4) + 2(3)(2)(5) = 24 + 60",
          explanation:
            "First term: \\(2 \\times 3 \\times 4 = 24\\). Second term: \\(2 \\times 3 \\times 2 \\times 5 = 60\\). Multiplying left to right keeps each product manageable.",
        },
        {
          stepNumber: 4,
          description: "Add to finish.",
          workingLatex: "24 + 60 = 84",
          explanation:
            "Adding the two-circle area to the curved side area gives \\(S = 84\\) square units. (With the true \\(\\pi\\) this would be larger; \\(\\pi = 3\\) is only a rough estimate.)",
        },
      ],
      finalAnswer: "\\(S = 84\\) square units.",
      canonicalAnswer: "84",
    },
  },
  {
    id: "ga14-030",
    topicRef: "ga14",
    topicTitle: "Writing and using formulae",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A delivery company charges \\(C = 6 + 0.5(w - 1)\\) pounds for a parcel of weight \\(w\\) kilograms, where \\(w \\ge 1\\). Find the charge for a parcel weighing \\(w = 13\\,\\mathrm{kg}\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["using formula", "cost", "brackets", "decimals", "real context"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the weight.",
          workingLatex: "C = 6 + 0.5(w - 1) = 6 + 0.5(13 - 1)",
          explanation:
            "Replace \\(w\\) with 13, keeping the \\((w - 1)\\) bracket intact so the subtraction happens inside it. The \\(+6\\) base charge is left untouched.",
        },
        {
          stepNumber: 2,
          description: "Work out the bracket first.",
          workingLatex: "6 + 0.5(13 - 1) = 6 + 0.5(12)",
          explanation:
            "By BIDMAS, brackets come first: \\(13 - 1 = 12\\). This is the number of kilograms above the first, which the company charges extra for.",
        },
        {
          stepNumber: 3,
          description: "Multiply before adding.",
          workingLatex: "6 + 0.5(12) = 6 + 6",
          explanation:
            "Next comes the multiplication: \\(0.5 \\times 12 = 6\\), since multiplying by 0.5 is just halving. Don't be tempted to add the leading 6 to the 12 first — BIDMAS puts this multiplication ahead of the addition. The \\(+6\\) base charge waits to be added last.",
        },
        {
          stepNumber: 4,
          description: "Add to finish.",
          workingLatex: "6 + 6 = 12",
          explanation:
            "Adding the £6 base charge to the £6 weight charge gives a total of £12 for the parcel.",
        },
      ],
      finalAnswer: "\\(C = \\pounds 12\\).",
      canonicalAnswer: "12",
    },
  },
];
