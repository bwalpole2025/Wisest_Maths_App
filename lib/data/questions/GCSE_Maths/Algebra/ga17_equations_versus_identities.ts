/**
 * Topic: Equations versus identities
 * Ref: ga17  (DfE A6)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: the distinction between an EQUATION (true only for particular
 *   value(s) of the variable) and an IDENTITY (written with \equiv and true for
 *   EVERY value of the variable). Classify a statement as an equation, identity
 *   or formula and justify the choice; decide whether a statement holds for one
 *   value or for all values by substituting two different x-values; find unknown
 *   coefficients that make a statement an identity by comparing coefficients of
 *   x and the constant terms (e.g. 3(x+2) \equiv ax+b, a(x+1)+b(x-1) \equiv 5x+1);
 *   complete an identity / fill the gap (e.g. 4x+8 \equiv 4(x+\square),
 *   x^2+6x+? \equiv (x+3)^2+?); and challenge-level matching of coefficients on
 *   both sides of expanded brackets to find 2–3 unknowns, with reasoning for why
 *   an identity must match coefficient-by-coefficient.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga17-001 .. ga17-012  (12)
 *   - Standard:   ga17-013 .. ga17-022  (10)
 *   - Challenge:  ga17-023 .. ga17-030  (8)
 * Id range: ga17-001 .. ga17-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   fractions in the stem; the identity sign is \\equiv. workingLatex is RAW
 *   LaTeX (no \\(...\\) or $...$ wrappers) and uses \\frac (never \\tfrac),
 *   \\cdot for multiplication and \\equiv for the identity sign, per project
 *   style rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  //  ───────────────────────── FOUNDATION (001–012) ─────────────────────────
  {
    id: "ga17-001",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Is \\(2x + 3x = 5x\\) an equation or an identity? Explain your choice.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "equations", "classify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the two terms as like terms.",
          workingLatex: "2x + 3x",
          explanation:
            "Both terms on the left are multiples of the same letter x, which makes them like terms. Like terms can be added together by counting how many lots of x we have in total.",
        },
        {
          stepNumber: 2,
          description: "Collect the like terms.",
          workingLatex: "2x + 3x = 5x",
          explanation:
            "Two lots of x plus three lots of x make five lots of x, so the left-hand side simplifies to 5x. This now reads exactly the same as the right-hand side, which is the first hint we are looking at an identity.",
        },
        {
          stepNumber: 3,
          description: "Test the first value, x = 1.",
          workingLatex: "x=1:\\quad 2(1)+3(1)=2+3=5,\\qquad 5(1)=5\\;\\checkmark",
          explanation:
            "To tell an equation from an identity we substitute numbers. An equation is only true for special values, whereas an identity is true for all of them. Here x = 1 makes both sides equal 5, so the statement passes its first test.",
        },
        {
          stepNumber: 4,
          description: "Test a second, different value, x = 4.",
          workingLatex: "x=4:\\quad 2(4)+3(4)=8+12=20,\\qquad 5(4)=20\\;\\checkmark",
          explanation:
            "One successful value is not enough — an ordinary equation can pass one test by luck. Trying a second, unrelated value that also works is strong evidence the statement holds for every x. Always pick a value genuinely different from the first.",
        },
        {
          stepNumber: 5,
          description: "Name it: it is true for all x.",
          workingLatex: "2x + 3x \\equiv 5x \\quad \\text{(identity)}",
          explanation:
            "Because the two sides are literally the same expression after simplifying, they agree for every value of x. That is exactly what an identity is, so we may write it with the \\equiv sign rather than an ordinary equals sign.",
        },
      ],
      finalAnswer: "It is an identity (true for every value of \\( x \\)).",
      canonicalAnswer: "identity",
    },
  },
  {
    id: "ga17-002",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Is \\(3x - 1 = 8\\) an equation or an identity? Explain your choice.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "equations", "classify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test the value x = 3.",
          workingLatex: "x=3:\\quad 3(3)-1=9-1=8\\;\\checkmark",
          explanation:
            "We probe the statement with numbers. Starting with x = 3, the left-hand side works out to 8, which matches the right-hand side, so the statement is true here. This alone does not yet tell us whether it is an equation or an identity.",
        },
        {
          stepNumber: 2,
          description: "Test a second, different value, x = 0.",
          workingLatex: "x=0:\\quad 3(0)-1=-1\\ne 8",
          explanation:
            "An identity must survive every test. We try a second value: x = 0 gives -1 on the left, which is not 8. A single failing value is enough to rule an identity out — an identity has to work for absolutely every x.",
        },
        {
          stepNumber: 3,
          description: "It works for one value only, so it is an equation.",
          workingLatex: "3x - 1 = 8 \\quad \\text{(equation)}",
          explanation:
            "Because the statement is true for x = 3 but false for x = 0, it holds only for a particular value, not for all x. Being true only for special values is the defining feature of an equation rather than an identity.",
        },
      ],
      finalAnswer: "It is an equation (true only for the particular value \\( x = 3 \\)).",
      canonicalAnswer: "equation",
    },
  },
  {
    id: "ga17-003",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Is \\(4(x + 2) \\equiv 4x + 8\\) an equation or an identity? Explain your choice.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "expanding brackets", "classify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Distribute the 4 over both terms.",
          workingLatex: "4(x + 2) = 4 \\cdot x + 4 \\cdot 2",
          explanation:
            "Multiplying out means multiplying the 4 by each term inside the bracket separately, not just the first one. A common slip is to write 4x + 2, multiplying only the x — every term inside the bracket must be multiplied by the 4.",
        },
        {
          stepNumber: 2,
          description: "Work out the two products.",
          workingLatex: "4 \\cdot x + 4 \\cdot 2 = 4x + 8",
          explanation:
            "Carrying out the two multiplications gives 4x from the first product and 8 from the second. The expanded left-hand side is now 4x + 8, which is identical to the right-hand side.",
        },
        {
          stepNumber: 3,
          description: "Both sides match, so it holds for every x.",
          workingLatex: "4(x + 2) \\equiv 4x + 8 \\quad \\text{(identity)}",
          explanation:
            "Expanding turns the left-hand side into exactly the right-hand side, so the two are equal whatever value x takes. The \\equiv sign already signals an identity, and expanding confirms it really is one.",
        },
      ],
      finalAnswer:
        "It is an identity (both sides are equal for every value of \\( x \\), shown by the \\( \\equiv \\) sign).",
      canonicalAnswer: "identity",
    },
  },
  {
    id: "ga17-004",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Is \\(A = \\pi r^2\\) an equation, an identity or a formula? Explain your choice.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "equations", "formula", "classify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Count the different variables joined by the equals sign.",
          workingLatex: "A = \\pi r^2 \\quad \\text{(variables } A \\text{ and } r\\text{)}",
          explanation:
            "A formula relates two or more different quantities. Here there are two letters that stand for quantities, the area A and the radius r. The \\pi is not a variable — it is a fixed number, roughly 3.14159, so it does not count as a third quantity.",
        },
        {
          stepNumber: 2,
          description: "A rule linking different variables is a formula.",
          workingLatex: "A = \\pi r^2 \\quad \\text{(formula for the area of a circle)}",
          explanation:
            "Unlike an equation in one unknown (which you would solve for a value) or an identity (which is the same expression written two equal ways), this is a rule that lets you work out one quantity, A, once you know another, r. A rule connecting different quantities like this is called a formula.",
        },
      ],
      finalAnswer: "It is a formula (a rule linking the variables \\( A \\) and \\( r \\)).",
      canonicalAnswer: "formula",
    },
  },
  {
    id: "ga17-005",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Is \\((x + 1)^2 \\equiv x^2 + 2x + 1\\) an equation or an identity? Explain your choice.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "expanding brackets", "classify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the square as a product of two brackets.",
          workingLatex: "(x + 1)^2 = (x+1)(x+1)",
          explanation:
            "Squaring a bracket means multiplying it by itself, so the power of 2 becomes two identical factors side by side. A very common slip is to square each term separately and write x^2 + 1; that is wrong because it ignores the cross terms, so we must expand the full product instead.",
        },
        {
          stepNumber: 2,
          description: "Expand using each pair of terms.",
          workingLatex: "(x+1)(x+1) = x^2 + x + x + 1",
          explanation:
            "Every term in the first bracket multiplies every term in the second: x times x gives x^2, x times 1 gives x, 1 times x gives another x, and 1 times 1 gives 1. This produces four terms before we tidy up.",
        },
        {
          stepNumber: 3,
          description: "Collect the two middle terms.",
          workingLatex: "x^2 + x + x + 1 = x^2 + 2x + 1",
          explanation:
            "The two like terms x and x add to 2x — these are exactly the cross terms that the wrong shortcut would miss. The expanded left-hand side is now x^2 + 2x + 1, exactly matching the right-hand side.",
        },
        {
          stepNumber: 4,
          description: "Both sides agree for every x, so it is an identity.",
          workingLatex: "(x + 1)^2 \\equiv x^2 + 2x + 1 \\quad \\text{(identity)}",
          explanation:
            "Since expanding the left-hand side produces the right-hand side exactly, the two are equal for any value of x. This is a standard identity worth memorising, as it appears again and again when expanding and completing the square.",
        },
      ],
      finalAnswer: "It is an identity (true for every value of \\( x \\)).",
      canonicalAnswer: "identity",
    },
  },
  {
    id: "ga17-006",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Is \\(x + 4 = 10\\) an equation or an identity? Explain your choice.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "equations", "classify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test the value x = 6.",
          workingLatex: "x=6:\\quad 6+4=10\\;\\checkmark",
          explanation:
            "We try numbers to see how often the statement is true. With x = 6 the left-hand side is 10, matching the right-hand side, so it works here. One success is not yet enough to decide its type.",
        },
        {
          stepNumber: 2,
          description: "Test a second, different value, x = 1.",
          workingLatex: "x=1:\\quad 1+4=5\\ne 10",
          explanation:
            "An identity must work for every value, so we test a second one. Trying x = 1 gives 5, not 10, so the statement fails this test. A single failure is enough to rule an identity out.",
        },
        {
          stepNumber: 3,
          description: "Only one value works, so it is an equation.",
          workingLatex: "x + 4 = 10 \\quad \\text{(equation)}",
          explanation:
            "The statement is true for x = 6 but false for x = 1, so it holds only for one particular value. Holding only for special values rather than all values makes it an equation, not an identity.",
        },
      ],
      finalAnswer: "It is an equation (true only for the particular value \\( x = 6 \\)).",
      canonicalAnswer: "equation",
    },
  },
  {
    id: "ga17-007",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Is \\(x + x + x \\equiv 3x\\) an equation or an identity? Explain your choice.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "collecting like terms", "classify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Count how many lots of x there are.",
          workingLatex: "x + x + x = \\underbrace{x + x + x}_{3\\text{ lots of }x}",
          explanation:
            "Each term on the left is a single x, and there are three of them being added. Counting the copies of x is the key idea behind collecting like terms.",
        },
        {
          stepNumber: 2,
          description: "Collect the like terms on the left.",
          workingLatex: "x + x + x = 3x",
          explanation:
            "Adding x to itself three times is the same as 3 lots of x. Repeated addition of the same quantity is just multiplication, so x + x + x simplifies to 3x.",
        },
        {
          stepNumber: 3,
          description: "The two sides match for every x, so it is an identity.",
          workingLatex: "x + x + x \\equiv 3x \\quad \\text{(identity)}",
          explanation:
            "Once simplified, the left-hand side is exactly 3x, identical to the right-hand side. They are equal whatever value x takes, which is precisely the meaning of the \\equiv sign.",
        },
      ],
      finalAnswer: "It is an identity (true for every value of \\( x \\)).",
      canonicalAnswer: "identity",
    },
  },
  {
    id: "ga17-008",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The statement \\(5x = 20\\) is true for one value of \\(x\\) only. What is that value?",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["equations", "true for one value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Divide both sides by 5 to undo the multiplication.",
          workingLatex: "5x = 20 \\;\\Rightarrow\\; x = \\frac{20}{5}",
          explanation:
            "On the left x is multiplied by 5, so to get x on its own we do the inverse operation: dividing by 5. Whatever we do to one side of an equation we must do to the other to keep it balanced, so the right-hand side becomes 20 divided by 5.",
        },
        {
          stepNumber: 2,
          description: "Simplify the fraction.",
          workingLatex: "x = \\frac{20}{5} = 4",
          explanation:
            "20 divided by 5 is 4, so the single solution is x = 4. Because x came out as one definite number, the statement is satisfied by just this one value.",
        },
        {
          stepNumber: 3,
          description: "Confirm no other value works.",
          workingLatex: "x=4:\\; 5(4)=20\\;\\checkmark, \\qquad x=2:\\; 5(2)=10\\ne 20",
          explanation:
            "Checking x = 4 gives 20 as required, while a different value such as x = 2 gives 10. Because only one value works, this is an equation, true for that single value.",
        },
      ],
      finalAnswer: "\\(x = 4\\) (an equation, true for one value only).",
      canonicalAnswer: "x=4",
    },
  },
  {
    id: "ga17-009",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Complete the identity \\(4x + 8 \\equiv 4(x + \\square)\\) by finding the missing number.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "factorising", "fill the gap"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the common factor of the left-hand side.",
          workingLatex: "4x + 8 = 4 \\cdot x + 4 \\cdot 2",
          explanation:
            "Both 4x and 8 are divisible by 4, so 4 is a common factor of the two terms. Writing each term explicitly as 4 times something (4 times x, and 4 times 2) prepares us to take that shared 4 outside a bracket.",
        },
        {
          stepNumber: 2,
          description: "Factor the 4 out.",
          workingLatex: "4 \\cdot x + 4 \\cdot 2 = 4(x + 2)",
          explanation:
            "Pulling the shared factor 4 out front leaves x + 2 inside the bracket. Factorising is the reverse of expanding, so you can always check it by multiplying the bracket back out and seeing if you recover 4x + 8.",
        },
        {
          stepNumber: 3,
          description: "Read off the missing number.",
          workingLatex: "4(x + \\square) \\equiv 4(x + 2) \\;\\Rightarrow\\; \\square = 2",
          explanation:
            "Comparing our factorised form with the target bracket, the box must be the 2. For the identity to hold the two bracketed expressions have to be identical term for term, which pins the box down exactly.",
        },
      ],
      finalAnswer: "\\(\\square = 2\\), so \\(4x + 8 \\equiv 4(x + 2)\\).",
      canonicalAnswer: "2",
    },
  },
  {
    id: "ga17-010",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Is \\(2x - 5 = x + 1\\) an equation or an identity? Explain your choice.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "equations", "classify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test the value x = 6.",
          workingLatex: "x=6:\\quad 2(6)-5=12-5=7,\\qquad 6+1=7\\;\\checkmark",
          explanation:
            "We compare the two sides for a chosen value. At x = 6 the left side is 2(6) - 5 = 7 and the right side is 6 + 1 = 7, so both equal 7 and the statement is true here.",
        },
        {
          stepNumber: 2,
          description: "Test a second, different value, x = 0.",
          workingLatex: "x=0:\\quad 2(0)-5=-5,\\qquad 0+1=1,\\qquad -5\\ne 1",
          explanation:
            "An identity must hold for every value, so we test another. At x = 0 the left side is -5 and the right side is 1, so the two sides disagree. A single mismatch is enough to rule an identity out.",
        },
        {
          stepNumber: 3,
          description: "It works for one value only, so it is an equation.",
          workingLatex: "2x - 5 = x + 1 \\quad \\text{(equation, true only at } x=6\\text{)}",
          explanation:
            "Because the sides agree at x = 6 but not at x = 0, the statement is true for a particular value rather than for all values. Holding only for special values is what makes it an equation rather than an identity.",
        },
      ],
      finalAnswer: "It is an equation (true only for the particular value \\( x = 6 \\)).",
      canonicalAnswer: "equation",
    },
  },
  {
    id: "ga17-011",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Complete the identity \\(3x + 12 \\equiv 3(x + \\square)\\) by finding the missing number.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "factorising", "fill the gap"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the common factor of the left-hand side.",
          workingLatex: "3x + 12 = 3 \\cdot x + 3 \\cdot 4",
          explanation:
            "Both 3x and 12 divide exactly by 3, so 3 is a common factor of the two terms. Rewriting each term as 3 times something (3 times x, and 3 times 4) sets up the factorising cleanly.",
        },
        {
          stepNumber: 2,
          description: "Factor the 3 out.",
          workingLatex: "3 \\cdot x + 3 \\cdot 4 = 3(x + 4)",
          explanation:
            "Taking the shared 3 outside the bracket leaves x + 4 inside. The target form 3(x + \\square) tells us the box is whatever number ends up paired with x inside that bracket.",
        },
        {
          stepNumber: 3,
          description: "Read off the missing number.",
          workingLatex: "3(x + \\square) \\equiv 3(x + 4) \\;\\Rightarrow\\; \\square = 4",
          explanation:
            "Matching our factorised bracket against the target bracket term by term, the missing number must be 4 for the two to be identical.",
        },
        {
          stepNumber: 4,
          description: "Check by expanding back.",
          workingLatex: "3(x + 4) = 3x + 12 \\;\\checkmark",
          explanation:
            "Multiplying the answer back out returns the original left-hand side 3x + 12, confirming the factorisation. Expanding again is the natural way to verify any factorising step and catch slips.",
        },
      ],
      finalAnswer: "\\(\\square = 4\\), so \\(3x + 12 \\equiv 3(x + 4)\\).",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga17-012",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Decide whether \\(x^2 = 9\\) is true for all values of \\(x\\) or only some. State whether it is an equation or an identity.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "equations", "true for one value"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Test the value x = 3.",
          workingLatex: "x=3:\\quad 3^2=9\\;\\checkmark",
          explanation:
            "We try values to see how widely the statement holds. With x = 3 the left side is 3 squared, which is 9, matching the right side, so it is true here.",
        },
        {
          stepNumber: 2,
          description: "Test a second, different value, x = 1.",
          workingLatex: "x=1:\\quad 1^2=1\\ne 9",
          explanation:
            "An identity must hold for all values, so we test another. At x = 1 the left side is 1, not 9, so the statement fails this test and therefore cannot be an identity.",
        },
        {
          stepNumber: 3,
          description: "Identify exactly which values work.",
          workingLatex: "x^2 = 9 \\;\\Rightarrow\\; x = 3 \\text{ or } x = -3",
          explanation:
            "Squaring either 3 or -3 gives 9, so exactly two values satisfy the statement. A common slip is to forget the negative root -3, since a negative number squared is also positive.",
        },
        {
          stepNumber: 4,
          description: "Name it: true for some values only.",
          workingLatex: "x^2 = 9 \\quad \\text{(equation)}",
          explanation:
            "Because the statement holds only for x = 3 and x = -3 rather than for every value of x, it is an equation, not an identity. An identity would have to work for all x with no exceptions.",
        },
      ],
      finalAnswer:
        "It is only true for some values (\\(x = 3\\) and \\(x = -3\\)), so it is an equation, not an identity.",
      canonicalAnswer: "equation",
    },
  },
  //  ───────────────────────── STANDARD (013–022) ─────────────────────────
  {
    id: "ga17-013",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the value of \\(a\\) so that \\(a(x + 3) \\equiv 5x + 15\\) is an identity.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the left-hand side.",
          workingLatex: "a(x + 3) = ax + 3a",
          explanation:
            "Multiplying out lets us see the coefficient of x and the constant term written in terms of a. The a multiplies both terms inside the bracket, giving ax from the x and 3a from the 3.",
        },
        {
          stepNumber: 2,
          description: "Line up both sides in the same form.",
          workingLatex: "ax + 3a \\equiv 5x + 15",
          explanation:
            "With the left expanded, both sides are now in the form (coefficient of x)·x + (constant). Writing them aligned like this makes it easy to compare the matching parts.",
        },
        {
          stepNumber: 3,
          description: "Compare the coefficients of x.",
          workingLatex: "a = 5",
          explanation:
            "An identity holds for every value of x, which forces the coefficient of x to be the same on both sides — otherwise the two would differ as soon as x changed. The left has a lots of x and the right has 5, so a = 5.",
        },
        {
          stepNumber: 4,
          description: "Check the constant term agrees.",
          workingLatex: "3a = 3(5) = 15 \\;\\checkmark",
          explanation:
            "The constant terms must also match for a genuine identity. With a = 5 the left-hand constant 3a is 15, exactly the right-hand constant, so the value is consistent across both comparisons.",
        },
      ],
      finalAnswer: "\\(a = 5\\).",
      canonicalAnswer: "a=5",
    },
  },
  {
    id: "ga17-014",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the values of \\(a\\) and \\(b\\) so that \\(3(x + 2) \\equiv ax + b\\) is an identity.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the left-hand side.",
          workingLatex: "3(x + 2) = 3x + 6",
          explanation:
            "Multiplying the 3 across the bracket gives 3x from the x-term and 6 from the constant. Writing the result in the form (number)x + (number) puts it in the same shape as the right-hand side, making the comparison easy.",
        },
        {
          stepNumber: 2,
          description: "Compare the coefficients of x.",
          workingLatex: "3x + 6 \\equiv ax + b \\;\\Rightarrow\\; a = 3",
          explanation:
            "For an identity the amount of x on each side must agree, since the statement has to hold for every x. The left has 3 lots of x and the right has a lots, so a = 3.",
        },
        {
          stepNumber: 3,
          description: "Compare the constant terms.",
          workingLatex: "b = 6",
          explanation:
            "The number with no x attached must also match on both sides. The left-hand constant is 6 and the right-hand constant is b, so b = 6.",
        },
      ],
      finalAnswer: "\\(a = 3\\) and \\(b = 6\\).",
      canonicalAnswer: "a=3, b=6",
    },
  },
  {
    id: "ga17-015",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the value of \\(c\\) so that \\(x^2 + 6x + c \\equiv (x + 3)^2\\) is an identity.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "completing the square", "comparing coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the square as a product.",
          workingLatex: "(x + 3)^2 = (x + 3)(x + 3)",
          explanation:
            "The power of 2 means (x + 3) multiplied by itself. Writing it as a product first avoids the common slip of squaring each term to get x^2 + 9, which misses the cross terms.",
        },
        {
          stepNumber: 2,
          description: "Expand and collect the right-hand side.",
          workingLatex: "(x + 3)(x + 3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9",
          explanation:
            "Each term multiplies each term, giving four terms; the two middle terms 3x and 3x combine to 6x. Now both sides are in the same x^2 + (number)x + (constant) form, ready to compare.",
        },
        {
          stepNumber: 3,
          description: "Compare the constant terms.",
          workingLatex: "x^2 + 6x + c \\equiv x^2 + 6x + 9 \\;\\Rightarrow\\; c = 9",
          explanation:
            "The x^2 and 6x terms already agree on both sides, so the only thing left to match is the constant. The right-hand constant is 9, so c = 9.",
        },
      ],
      finalAnswer: "\\(c = 9\\).",
      canonicalAnswer: "c=9",
    },
  },
  {
    id: "ga17-016",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the values of \\(p\\) and \\(q\\) so that \\(2(x - 4) + 3 \\equiv px + q\\) is an identity.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket.",
          workingLatex: "2(x - 4) + 3 = 2x - 8 + 3",
          explanation:
            "The 2 multiplies both terms inside the bracket, giving 2x and 2 times -4. The loose + 3 outside the bracket stays as it is for now. Watch the sign carefully: 2 times -4 is -8, not +8.",
        },
        {
          stepNumber: 2,
          description: "Collect the constant terms.",
          workingLatex: "2x - 8 + 3 = 2x - 5",
          explanation:
            "Combining the two numbers, -8 + 3 = -5, since adding 3 to -8 moves us three steps up the number line. The left-hand side is now neatly in the form (number)x + (number).",
        },
        {
          stepNumber: 3,
          description: "Compare coefficients of x and the constants.",
          workingLatex: "2x - 5 \\equiv px + q \\;\\Rightarrow\\; p = 2,\\; q = -5",
          explanation:
            "Matching the two sides coefficient by coefficient, the x-terms give p = 2 and the constant terms give q = -5. A common slip is to drop the negative sign and write q = 5 — the constant really is -5.",
        },
      ],
      finalAnswer: "\\(p = 2\\) and \\(q = -5\\).",
      canonicalAnswer: "p=2, q=-5",
    },
  },
  {
    id: "ga17-017",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that \\(2(3x + 1) - (x - 4) \\equiv 5x + 6\\) is an identity by expanding and by checking two values of \\(x\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "expanding brackets", "comparing coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand both brackets, watching the signs.",
          workingLatex: "2(3x + 1) - (x - 4) = 6x + 2 - x + 4",
          explanation:
            "The 2 multiplies its bracket to give 6x + 2. The minus sign in front of (x - 4) acts like multiplying by -1, so it flips both terms: -(x - 4) = -x + 4. The biggest slip here is forgetting that the minus turns the -4 into +4.",
        },
        {
          stepNumber: 2,
          description: "Collect like terms.",
          workingLatex: "6x + 2 - x + 4 = 5x + 6",
          explanation:
            "The x-terms combine: 6x - x = 5x. The constant terms combine: 2 + 4 = 6. The left-hand side simplifies to 5x + 6, matching the right-hand side exactly, which already proves the identity.",
        },
        {
          stepNumber: 3,
          description: "Verify with the value x = 1.",
          workingLatex: "x=1:\\; 2(4)-(-3)=8+3=11,\\qquad 5(1)+6=11\\;\\checkmark",
          explanation:
            "Substituting x = 1 into the original left-hand side gives 11, and the right-hand side also gives 11. The expansion already proves the identity; the numerical checks are a reassuring confirmation.",
        },
        {
          stepNumber: 4,
          description: "Verify with a second value, x = 0.",
          workingLatex: "x=0:\\; 2(1)-(-4)=2+4=6,\\qquad 5(0)+6=6\\;\\checkmark",
          explanation:
            "A second independent value, x = 0, again gives 6 on both sides. Matching algebra plus two successful checks confirms the statement holds for every x.",
        },
      ],
      finalAnswer:
        "Both sides simplify to \\(5x + 6\\) and the checks agree, so \\(2(3x + 1) - (x - 4) \\equiv 5x + 6\\) is an identity.",
      canonicalAnswer: "identity",
    },
  },
  {
    id: "ga17-018",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the values of \\(a\\) and \\(b\\) so that \\(a(x + 1) + b(x - 1) \\equiv 5x + 1\\) is an identity.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients", "simultaneous equations"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand each bracket.",
          workingLatex: "a(x + 1) + b(x - 1) = ax + a + bx - b",
          explanation:
            "Multiplying a across its bracket gives ax + a, and b across its bracket gives bx - b — note the minus, since b multiplies the -1. Keeping the four terms separate for now makes the next grouping step clearer.",
        },
        {
          stepNumber: 2,
          description: "Group the x-terms and the constants.",
          workingLatex: "ax + bx + a - b = (a + b)x + (a - b)",
          explanation:
            "Collecting the two x-terms gives (a + b)x, and the two constant terms give (a - b). Factoring x out of the first pair is the key move. The left-hand side is now in the same (coefficient)x + (constant) form as the right.",
        },
        {
          stepNumber: 3,
          description: "Compare coefficients to form two equations.",
          workingLatex: "a + b = 5, \\qquad a - b = 1",
          explanation:
            "An identity matches coefficient-by-coefficient: the x-coefficients give a + b = 5, and the constants give a - b = 1. These are two simultaneous equations in a and b.",
        },
        {
          stepNumber: 4,
          description: "Add the two equations to eliminate b.",
          workingLatex: "(a + b) + (a - b) = 5 + 1 \\;\\Rightarrow\\; 2a = 6 \\;\\Rightarrow\\; a = 3",
          explanation:
            "Adding the equations cancels the b terms (+b and -b), leaving 2a = 6, so a = 3. Eliminating one unknown by adding is the quickest route here.",
        },
        {
          stepNumber: 5,
          description: "Substitute back to find b.",
          workingLatex: "a + b = 5 \\;\\Rightarrow\\; 3 + b = 5 \\;\\Rightarrow\\; b = 2",
          explanation:
            "Putting a = 3 into the first equation gives 3 + b = 5, so b = 2. You can check both equations: 3 + 2 = 5 and 3 - 2 = 1, both correct.",
        },
      ],
      finalAnswer: "\\(a = 3\\) and \\(b = 2\\).",
      canonicalAnswer: "a=3, b=2",
    },
  },
  {
    id: "ga17-019",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Complete the identity \\(x^2 + 8x + 20 \\equiv (x + 4)^2 + \\square\\) by finding the missing number.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "completing the square", "fill the gap"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the completed-square bracket.",
          workingLatex: "(x + 4)^2 = x^2 + 8x + 16",
          explanation:
            "Squaring (x + 4) means (x + 4)(x + 4), which gives x^2 + 8x + 16. Notice the x^2 and 8x terms already match the left-hand side, so only the constant will need adjusting via the box.",
        },
        {
          stepNumber: 2,
          description: "Write the right-hand side with the box.",
          workingLatex: "(x + 4)^2 + \\square = x^2 + 8x + 16 + \\square",
          explanation:
            "Adding the unknown box onto the expanded bracket gives a total constant of 16 + \\square on the right. For the identity to hold this must equal the constant 20 on the left.",
        },
        {
          stepNumber: 3,
          description: "Solve for the missing number.",
          workingLatex: "16 + \\square = 20 \\;\\Rightarrow\\; \\square = 4",
          explanation:
            "The bracket already supplies 16, so we need 4 more to reach 20. Hence the box is 4. This is exactly the idea behind completing the square.",
        },
      ],
      finalAnswer: "\\(\\square = 4\\), so \\(x^2 + 8x + 20 \\equiv (x + 4)^2 + 4\\).",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga17-020",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Decide whether \\(3(2x - 1) = 6x - 1\\) is an equation or an identity. Justify your answer.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "equations", "expanding brackets", "classify"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the left-hand side.",
          workingLatex: "3(2x - 1) = 6x - 3",
          explanation:
            "Multiplying the 3 across the bracket gives 6x from the x-term and -3 from the constant. Watch the sign here: 3 times -1 is -3, so the constant comes out negative.",
        },
        {
          stepNumber: 2,
          description: "Compare with the right-hand side.",
          workingLatex: "6x - 3 \\quad \\text{vs} \\quad 6x - 1 \\;\\Rightarrow\\; -3 \\ne -1",
          explanation:
            "The x-terms agree (both 6x), but the constant terms differ: -3 on the left against -1 on the right. For an identity every coefficient must match, so a single mismatched constant already means it cannot be an identity.",
        },
        {
          stepNumber: 3,
          description: "Try to solve to see for which x it holds.",
          workingLatex: "6x - 3 = 6x - 1 \\;\\Rightarrow\\; -3 = -1 \\quad \\text{(never true)}",
          explanation:
            "Setting the sides equal cancels the 6x from both, leaving -3 = -1, which is false. So there is no value of x that works at all — it is a (false) equation, certainly not an identity.",
        },
      ],
      finalAnswer:
        "It is an equation (in fact one with no solution); it is not an identity because the constant terms do not match.",
      canonicalAnswer: "equation",
    },
  },
  {
    id: "ga17-021",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the values of \\(a\\) and \\(b\\) so that \\((x + a)^2 \\equiv x^2 + 10x + b\\) is an identity.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "completing the square", "comparing coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the left-hand side in general form.",
          workingLatex: "(x + a)^2 = x^2 + 2ax + a^2",
          explanation:
            "Squaring (x + a) gives x^2 + 2ax + a^2, the standard expansion of a squared bracket. Keeping a as a symbol rather than a number lets us compare term by term with the right-hand side.",
        },
        {
          stepNumber: 2,
          description: "Compare the coefficients of x.",
          workingLatex: "2a = 10 \\;\\Rightarrow\\; a = 5",
          explanation:
            "The x-term on the left is 2ax and on the right is 10x, so their coefficients must agree: 2a = 10. Dividing both sides by 2 gives a = 5.",
        },
        {
          stepNumber: 3,
          description: "Compare the constant terms using a = 5.",
          workingLatex: "b = a^2 = 5^2 = 25",
          explanation:
            "The constant on the left is a^2, which must equal b. With a = 5 this gives b = 25. Don't forget to square the value of a fully — 5^2 is 25, not 10.",
        },
      ],
      finalAnswer: "\\(a = 5\\) and \\(b = 25\\).",
      canonicalAnswer: "a=5, b=25",
    },
  },
  {
    id: "ga17-022",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the value of \\(k\\) so that \\(\\dfrac{6x + 9}{3} \\equiv 2x + k\\) is an identity.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients", "fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split the fraction over each term of the numerator.",
          workingLatex: "\\frac{6x + 9}{3} = \\frac{6x}{3} + \\frac{9}{3}",
          explanation:
            "Dividing a sum by 3 means dividing each part of the numerator by 3 separately. A common slip is to divide only the first term, so keep both fractions written out until you simplify them.",
        },
        {
          stepNumber: 2,
          description: "Simplify each fraction.",
          workingLatex: "\\frac{6x}{3} + \\frac{9}{3} = 2x + 3",
          explanation:
            "6x divided by 3 is 2x, and 9 divided by 3 is 3. The left-hand side is now 2x + 3, in the same (coefficient)x + (constant) form as the right.",
        },
        {
          stepNumber: 3,
          description: "Compare the constant terms.",
          workingLatex: "2x + 3 \\equiv 2x + k \\;\\Rightarrow\\; k = 3",
          explanation:
            "The x-terms already match (both 2x), so the constants must match too. The left-hand constant is 3, giving k = 3.",
        },
      ],
      finalAnswer: "\\(k = 3\\).",
      canonicalAnswer: "k=3",
    },
  },
  //  ───────────────────────── CHALLENGE (023–030) ─────────────────────────
  {
    id: "ga17-023",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the values of \\(a\\), \\(b\\) and \\(c\\) so that \\(2(x + 1)^2 + 3 \\equiv ax^2 + bx + c\\) is an identity.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the squared bracket.",
          workingLatex: "(x + 1)^2 = x^2 + 2x + 1",
          explanation:
            "Square the inner bracket first, before dealing with the 2 outside, following the order of operations. (x + 1)^2 means (x + 1)(x + 1), which expands to x^2 + 2x + 1.",
        },
        {
          stepNumber: 2,
          description: "Multiply through by 2.",
          workingLatex: "2(x^2 + 2x + 1) = 2x^2 + 4x + 2",
          explanation:
            "Each term inside the bracket is doubled: x^2 becomes 2x^2, 2x becomes 4x, and 1 becomes 2. Distribute the 2 across every term, not just the first one.",
        },
        {
          stepNumber: 3,
          description: "Add the constant 3.",
          workingLatex: "2x^2 + 4x + 2 + 3 = 2x^2 + 4x + 5",
          explanation:
            "The loose + 3 outside combines with the constant 2 from the expansion to give 5. The left-hand side is now fully expanded as 2x^2 + 4x + 5.",
        },
        {
          stepNumber: 4,
          description: "Line up the two sides for comparison.",
          workingLatex: "2x^2 + 4x + 5 \\equiv ax^2 + bx + c",
          explanation:
            "An identity must hold for every x, which forces each power of x to match coefficient-by-coefficient. Writing both sides in the same order makes each pair easy to read off.",
        },
        {
          stepNumber: 5,
          description: "Read off a, b and c from each power.",
          workingLatex: "a = 2,\\quad b = 4,\\quad c = 5",
          explanation:
            "Comparing power by power: the x^2 terms give a = 2, the x terms give b = 4, and the constant terms give c = 5. Each unknown is fixed by its own power of x.",
        },
      ],
      finalAnswer: "\\(a = 2\\), \\(b = 4\\) and \\(c = 5\\).",
      canonicalAnswer: "a=2, b=4, c=5",
    },
  },
  {
    id: "ga17-024",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the values of \\(a\\) and \\(b\\) so that \\((2x + a)(x + 3) \\equiv 2x^2 + bx + 12\\) is an identity.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the product on the left.",
          workingLatex: "(2x + a)(x + 3) = 2x^2 + 6x + ax + 3a",
          explanation:
            "Each term in the first bracket multiplies each term in the second: 2x times x gives 2x^2, 2x times 3 gives 6x, then a times x gives ax and a times 3 gives 3a. This produces the four terms shown.",
        },
        {
          stepNumber: 2,
          description: "Group the x-terms together.",
          workingLatex: "2x^2 + 6x + ax + 3a = 2x^2 + (6 + a)x + 3a",
          explanation:
            "The two terms in x, namely 6x and ax, combine into (6 + a)x by factoring x out of them. The left-hand side is now in the standard quadratic form, ready for comparison.",
        },
        {
          stepNumber: 3,
          description: "Compare the constant terms to find a.",
          workingLatex: "3a = 12 \\;\\Rightarrow\\; a = 4",
          explanation:
            "The constant on the left is 3a and on the right is 12, so 3a = 12. Dividing by 3 gives a = 4. We solve for a first because the constant equation involves only a, with no other unknown to worry about.",
        },
        {
          stepNumber: 4,
          description: "Compare the coefficients of x using a = 4.",
          workingLatex: "b = 6 + a = 6 + 4 = 10",
          explanation:
            "The x-coefficient on the left is 6 + a, which must equal b on the right. Substituting a = 4 gives b = 10. The x^2 terms already agree (both 2), a useful free consistency check that the bracket structure is right.",
        },
        {
          stepNumber: 5,
          description: "Verify by expanding with the found values.",
          workingLatex: "(2x + 4)(x + 3) = 2x^2 + 10x + 12 \\;\\checkmark",
          explanation:
            "Putting a = 4 back in and expanding gives 2x^2 + 10x + 12, which matches the right-hand side with b = 10. Expanding back is the surest way to confirm coefficient-matching answers.",
        },
      ],
      finalAnswer: "\\(a = 4\\) and \\(b = 10\\).",
      canonicalAnswer: "a=4, b=10",
    },
  },
  {
    id: "ga17-025",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the values of \\(a\\), \\(b\\) and \\(c\\) so that \\(x^2 + 6x + 11 \\equiv a(x + b)^2 + c\\) is an identity.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "completing the square", "comparing coefficients"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Square the bracket in general form.",
          workingLatex: "(x + b)^2 = x^2 + 2bx + b^2",
          explanation:
            "Squaring (x + b) gives x^2 + 2bx + b^2. Keeping b as a symbol rather than a number lets us track exactly where it appears so we can compare term by term later.",
        },
        {
          stepNumber: 2,
          description: "Multiply through by a and add c.",
          workingLatex: "a(x^2 + 2bx + b^2) + c = ax^2 + 2abx + (ab^2 + c)",
          explanation:
            "Distribute a over all three terms, then tack on the loose + c onto the constant. The right-hand side is now ax^2 + 2abx + (ab^2 + c), in the same shape as the left.",
        },
        {
          stepNumber: 3,
          description: "Compare the coefficients of x^2.",
          workingLatex: "a = 1",
          explanation:
            "The left-hand side has a single x^2, so its coefficient is 1. On the right the coefficient of x^2 is a, giving a = 1 immediately.",
        },
        {
          stepNumber: 4,
          description: "Compare the coefficients of x using a = 1.",
          workingLatex: "2ab = 6 \\;\\Rightarrow\\; 2b = 6 \\;\\Rightarrow\\; b = 3",
          explanation:
            "The x-coefficient on the right is 2ab and on the left is 6. With a = 1 already known, this reduces to 2b = 6, so b = 3.",
        },
        {
          stepNumber: 5,
          description: "Compare the constant terms using a = 1 and b = 3.",
          workingLatex: "ab^2 + c = 11 \\;\\Rightarrow\\; 9 + c = 11 \\;\\Rightarrow\\; c = 2",
          explanation:
            "The right-hand constant is ab^2 + c, which must equal 11. With a = 1 and b = 3, ab^2 = 1 times 9 = 9, so 9 + c = 11, giving c = 2. This is exactly the completed-square form of the original quadratic.",
        },
      ],
      finalAnswer: "\\(a = 1\\), \\(b = 3\\) and \\(c = 2\\), so \\(x^2 + 6x + 11 \\equiv (x + 3)^2 + 2\\).",
      canonicalAnswer: "a=1, b=3, c=2",
    },
  },
  {
    id: "ga17-026",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the values of \\(A\\) and \\(B\\) so that \\(\\dfrac{5x + 1}{(x + 1)(x - 1)} \\equiv \\dfrac{A}{x + 1} + \\dfrac{B}{x - 1}\\) is an identity.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients", "partial fractions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Multiply both sides by (x + 1)(x - 1) to clear the fractions.",
          workingLatex: "5x + 1 \\equiv A(x - 1) + B(x + 1)",
          explanation:
            "Multiplying every term by the common denominator (x + 1)(x - 1) removes all the fractions at once. The A-fraction over (x + 1) cancels its (x + 1) and keeps the (x - 1) factor; the B-fraction over (x - 1) keeps the (x + 1) factor.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 1 to make the A-term vanish.",
          workingLatex: "5(1) + 1 = A(1 - 1) + B(1 + 1) \\;\\Rightarrow\\; 6 = 2B \\;\\Rightarrow\\; B = 3",
          explanation:
            "Because the identity holds for every x, we may pick convenient values. Choosing x = 1 makes (x - 1) zero, killing the A-term, so the equation gives B directly: 6 = 2B, hence B = 3.",
        },
        {
          stepNumber: 3,
          description: "Substitute x = -1 to make the B-term vanish.",
          workingLatex: "5(-1) + 1 = A(-1 - 1) + B(-1 + 1) \\;\\Rightarrow\\; -4 = -2A \\;\\Rightarrow\\; A = 2",
          explanation:
            "Now x = -1 makes (x + 1) zero, killing the B-term. The equation becomes -4 = -2A, so A = 2. The two strategic substitutions isolate each unknown in turn.",
        },
        {
          stepNumber: 4,
          description: "Check by comparing the x-coefficients.",
          workingLatex: "A + B = 2 + 3 = 5 \\;\\checkmark",
          explanation:
            "Expanding A(x - 1) + B(x + 1) gives (A + B)x + ..., so the coefficient of x is A + B, which should equal the 5 on the left. With A = 2 and B = 3 this is 5, confirming the values.",
        },
      ],
      finalAnswer: "\\(A = 2\\) and \\(B = 3\\).",
      canonicalAnswer: "A=2, B=3",
    },
  },
  {
    id: "ga17-027",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the value of \\(k\\) for which \\(k(x + 2) - 3(x - 1) \\equiv x + 11\\) is an identity, and explain why the constant terms then match automatically.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients", "reasoning"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand both brackets.",
          workingLatex: "k(x + 2) - 3(x - 1) = kx + 2k - 3x + 3",
          explanation:
            "The k multiplies its bracket to give kx + 2k. The -3 multiplies its bracket to give -3x + 3; note that -3 times -1 produces +3, not -3. Watch the signs carefully here, as this is the easiest place to slip.",
        },
        {
          stepNumber: 2,
          description: "Group by powers of x.",
          workingLatex: "kx - 3x + 2k + 3 = (k - 3)x + (2k + 3)",
          explanation:
            "Collecting the x-terms gives (k - 3)x and collecting the constant terms gives (2k + 3). The left-hand side is now in the standard linear form (coefficient)x + (constant).",
        },
        {
          stepNumber: 3,
          description: "Compare the coefficients of x.",
          workingLatex: "k - 3 = 1 \\;\\Rightarrow\\; k = 4",
          explanation:
            "Matching the x-coefficient, (k - 3) must equal the 1 on the right, so k = 4. This single equation fixes k.",
        },
        {
          stepNumber: 4,
          description: "Check the constant term with k = 4.",
          workingLatex: "2k + 3 = 2(4) + 3 = 11 \\;\\checkmark",
          explanation:
            "With k = 4 the constant term 2k + 3 works out to 11, exactly the right-hand constant. So once k makes the x-coefficients agree, the constants line up too — a single value of k satisfies both comparisons.",
        },
      ],
      finalAnswer:
        "\\(k = 4\\); the constant term \\(2k + 3\\) then equals \\(11\\), matching the right-hand side, so it is an identity.",
      canonicalAnswer: "k=4",
    },
  },
  {
    id: "ga17-028",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Explain why \\((x + 2)(x - 2) = x^2 - 5\\) cannot be an identity, and state the value(s) of \\(x\\) for which it is true.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "equations", "expanding brackets", "reasoning"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the product term by term.",
          workingLatex: "(x + 2)(x - 2) = x^2 - 2x + 2x - 4",
          explanation:
            "Each term multiplies each term: x times x gives x^2, x times -2 gives -2x, 2 times x gives +2x, and 2 times -2 gives -4. This produces four terms before tidying.",
        },
        {
          stepNumber: 2,
          description: "Cancel the middle terms.",
          workingLatex: "x^2 - 2x + 2x - 4 = x^2 - 4",
          explanation:
            "The two middle terms -2x and +2x cancel exactly, leaving x^2 - 4. This is the standard difference-of-two-squares pattern (a + b)(a - b) = a^2 - b^2, here with a = x and b = 2.",
        },
        {
          stepNumber: 3,
          description: "Compare the constant terms with the right-hand side.",
          workingLatex: "x^2 - 4 \\quad \\text{vs} \\quad x^2 - 5 \\;\\Rightarrow\\; -4 \\ne -5",
          explanation:
            "The x^2 terms agree, but the constant terms -4 and -5 do not. An identity needs every coefficient to match, so already this cannot be an identity.",
        },
        {
          stepNumber: 4,
          description: "Solve to see for which x it actually holds.",
          workingLatex: "x^2 - 4 = x^2 - 5 \\;\\Rightarrow\\; -4 = -5 \\quad \\text{(never true)}",
          explanation:
            "Setting the two sides equal cancels x^2 from both, leaving the false statement -4 = -5. Since this can never hold, there is no value of x that satisfies the statement at all — it is an equation with no solution.",
        },
      ],
      finalAnswer:
        "It is not an identity because the constant terms (\\(-4\\) and \\(-5\\)) do not match; in fact it is true for no value of \\(x\\).",
      canonicalAnswer: "not an identity; no solution",
    },
  },
  {
    id: "ga17-029",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the values of \\(a\\), \\(b\\) and \\(c\\) so that \\(x^3 + 1 \\equiv (x + 1)(x^2 + ax + b) + c\\) is an identity.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the product on the right-hand side.",
          workingLatex:
            "(x + 1)(x^2 + ax + b) = x^3 + ax^2 + bx + x^2 + ax + b",
          explanation:
            "Multiply each term of the second bracket first by x, then by 1: the x gives x^3 + ax^2 + bx, and the 1 gives x^2 + ax + b. Keep all six terms written out before collecting like terms.",
        },
        {
          stepNumber: 2,
          description: "Group by powers of x.",
          workingLatex:
            "x^3 + ax^2 + bx + x^2 + ax + b = x^3 + (a + 1)x^2 + (a + b)x + b",
          explanation:
            "Collect the x^2 terms ax^2 and x^2 into (a + 1)x^2, and the x terms bx and ax into (a + b)x. The constant from the bracket is b; the loose + c from the original statement is added next.",
        },
        {
          stepNumber: 3,
          description: "Compare the coefficient of x^2 (the left has none).",
          workingLatex: "a + 1 = 0 \\;\\Rightarrow\\; a = -1",
          explanation:
            "The left-hand side x^3 + 1 has no x^2 term, so its coefficient is 0. Matching gives a + 1 = 0, hence a = -1.",
        },
        {
          stepNumber: 4,
          description: "Compare the coefficient of x using a = -1.",
          workingLatex: "a + b = 0 \\;\\Rightarrow\\; -1 + b = 0 \\;\\Rightarrow\\; b = 1",
          explanation:
            "Likewise the left has no x term, so a + b = 0. Substituting a = -1 gives b = 1.",
        },
        {
          stepNumber: 5,
          description: "Compare the constant terms.",
          workingLatex: "b + c = 1 \\;\\Rightarrow\\; 1 + c = 1 \\;\\Rightarrow\\; c = 0",
          explanation:
            "The constant on the right is the bracket's b plus the loose c, so b + c, which must equal the 1 on the left. With b = 1 we get c = 0, confirming x^3 + 1 factorises cleanly as (x + 1)(x^2 - x + 1) with no remainder.",
        },
      ],
      finalAnswer: "\\(a = -1\\), \\(b = 1\\) and \\(c = 0\\).",
      canonicalAnswer: "a=-1, b=1, c=0",
    },
  },
  {
    id: "ga17-030",
    topicRef: "ga17",
    topicTitle: "Equations versus identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "The statement \\(a(x - 1)^2 + b(x - 1) + c \\equiv 2x^2 - 3x + 5\\) is an identity. Find \\(a\\), \\(b\\) and \\(c\\).",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["identities", "comparing coefficients", "expanding brackets"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the squared bracket inside the left-hand side.",
          workingLatex:
            "a(x - 1)^2 + b(x - 1) + c = a(x^2 - 2x + 1) + b(x - 1) + c",
          explanation:
            "First square (x - 1) to x^2 - 2x + 1, taking care with the sign of the middle term. Leaving a, b, c as symbols throughout means we can compare coefficients with the right-hand side at the end.",
        },
        {
          stepNumber: 2,
          description: "Multiply out and group by powers of x.",
          workingLatex:
            "ax^2 - 2ax + a + bx - b + c = ax^2 + (-2a + b)x + (a - b + c)",
          explanation:
            "Distribute a and b across their brackets, then collect like terms: the x^2 coefficient is a, the x coefficient gathers -2a and b into -2a + b, and the constant gathers a, -b and c into a - b + c.",
        },
        {
          stepNumber: 3,
          description: "Compare coefficients of x^2.",
          workingLatex: "a = 2",
          explanation:
            "The left has a lots of x^2 and the right has 2, so a = 2 immediately.",
        },
        {
          stepNumber: 4,
          description: "Compare coefficients of x using a = 2.",
          workingLatex: "-2a + b = -3 \\;\\Rightarrow\\; -4 + b = -3 \\;\\Rightarrow\\; b = 1",
          explanation:
            "The x-coefficient -2a + b must equal -3. With a = 2 this is -4 + b = -3, so b = 1. Mind the signs when substituting the negative -2a.",
        },
        {
          stepNumber: 5,
          description: "Compare constant terms using a = 2 and b = 1.",
          workingLatex: "a - b + c = 5 \\;\\Rightarrow\\; 2 - 1 + c = 5 \\;\\Rightarrow\\; c = 4",
          explanation:
            "The constant a - b + c must equal 5. Substituting a = 2 and b = 1 gives 1 + c = 5, so c = 4.",
        },
      ],
      finalAnswer: "\\(a = 2\\), \\(b = 1\\) and \\(c = 4\\).",
      canonicalAnswer: "a=2, b=1, c=4",
    },
  },
];
