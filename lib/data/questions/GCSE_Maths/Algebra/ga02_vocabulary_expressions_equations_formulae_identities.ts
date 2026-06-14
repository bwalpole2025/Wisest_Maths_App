/*
 * Topic: Vocabulary — expressions, equations, formulae, identities
 * Ref:   ga02   (DfE A3)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: understand and use the concepts and vocabulary of expressions,
 *   equations, formulae, identities, inequalities, terms and factors.
 *   Classify a statement as one of {expression, equation, formula, identity,
 *   inequality}; count the number of terms; identify the coefficient of a
 *   given term; identify the constant term; recognise the identity sign
 *   (\equiv); list factors of a term; name parts of an expression; decide
 *   whether a statement is true for all values (identity) or only some
 *   (equation). STRICTLY vocabulary & classification — no solving or
 *   rearranging.
 *
 * Difficulty split (30 total):
 *   Foundation : 12  (ga02-001 .. ga02-012)
 *   Standard   : 10  (ga02-013 .. ga02-022)
 *   Challenge  :  8  (ga02-023 .. ga02-030)
 *
 * Id range: ga02-001 .. ga02-030 (zero-padded).
 *
 * LaTeX note: questionText maths is wrapped in \( ... \) and uses \dfrac for
 *   display fractions; workingLatex is RAW (unwrapped) and uses \frac (hard
 *   project rule — never \tfrac). The identity sign is \equiv. Words inside
 *   maths use \text{...}.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ===================== FOUNDATION (001–012) =====================
  {
    id: "ga02-001",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State whether \\(3x + 5\\) is an expression, an equation, a formula or an identity.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Scan for a relation sign.",
          workingLatex: "3x + 5 \\quad \\text{(look for } =, \\equiv, >, <\\text{)}",
          explanation:
            "The very first thing to check when naming an algebraic object is whether two sides are joined by a relation symbol such as \\( = \\), \\( \\equiv \\), \\( > \\) or \\( < \\). Run your eye along the whole statement looking for one.",
        },
        {
          stepNumber: 2,
          description: "Note there is no relation sign.",
          workingLatex: "3x + 5 \\quad \\text{(no } =, \\equiv, >, < \\text{ anywhere)}",
          explanation:
            "There is no such sign anywhere here — we just have some terms written one after another. That single observation rules out four of the five types in one go.",
        },
        {
          stepNumber: 3,
          description: "Rule out the types that need two sides.",
          workingLatex: "\\text{equation, formula, identity, inequality all compare two sides}",
          explanation:
            "An equation, formula, identity and inequality each compare a left-hand side with a right-hand side, so they all require a relation sign. With none present, the object cannot be any of these four.",
        },
        {
          stepNumber: 4,
          description: "Name the object.",
          workingLatex: "3x + 5 \\quad \\text{(expression)}",
          explanation:
            "What is left is an expression: a string of terms added or subtracted with no relation sign. A common slip is to call it an equation just because it contains a letter — but a letter alone is not enough; you need an \\( = \\) sign to have an equation.",
        },
      ],
      finalAnswer: "It is an expression (no equals sign, just terms added together).",
    },
  },
  {
    id: "ga02-002",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State whether \\(2x - 7 = 11\\) is an expression, an equation, a formula or an identity.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Scan for a relation sign.",
          workingLatex: "2x - 7 = 11 \\quad \\text{(sign is } = \\text{)}",
          explanation:
            "There is an \\( = \\) sign, so this is not just an expression — it compares two sides. That narrows the choices to equation, formula or identity. It is not an inequality, because the sign is \\( = \\), not \\( <, >, \\le \\) or \\( \\ge \\).",
        },
        {
          stepNumber: 2,
          description: "Note there is only one variable.",
          workingLatex: "2x - 7 = 11 \\quad \\text{(only letter is } x\\text{)}",
          explanation:
            "Only one letter, \\( x \\), appears. A formula normally links several different variables together as a rule, so a single-unknown statement like this is far more likely to be an equation. To settle it for certain, we test whether it holds for all values or only some.",
        },
        {
          stepNumber: 3,
          description: "Test a value that should work.",
          workingLatex: "x = 9: \\quad 2(9) - 7 = 18 - 7 = 11 \\;\\checkmark",
          explanation:
            "Substituting \\( x = 9 \\) makes the left-hand side equal \\( 11 \\), matching the right-hand side. So the statement is true for at least this one value.",
        },
        {
          stepNumber: 4,
          description: "Test a different value.",
          workingLatex: "x = 0: \\quad 2(0) - 7 = -7 \\ne 11 \\;\\times",
          explanation:
            "Trying \\( x = 0 \\) gives \\( -7 \\), which is not \\( 11 \\). So the statement is false here. Because it is true for some values but not all, it cannot be an identity (which would hold for every value).",
        },
        {
          stepNumber: 5,
          description: "Name the object.",
          workingLatex: "2x - 7 = 11 \\quad \\text{(equation, true only when } x = 9\\text{)}",
          explanation:
            "It has an \\( = \\) sign, a single unknown, and is true only for the particular value \\( x = 9 \\). Being true for a particular value of one unknown rather than for all values is the hallmark of an equation.",
        },
      ],
      finalAnswer: "It is an equation (it is only true for a particular value of \\( x \\)).",
    },
  },
  {
    id: "ga02-003",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State whether \\(A = \\ell w\\) is an expression, an equation, a formula or an identity.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "formula"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Scan for a relation sign.",
          workingLatex: "A = \\ell w \\quad \\text{(sign is } = \\text{)}",
          explanation:
            "There is an \\( = \\) sign, so this is not just an expression — it compares two sides. The sign is \\( = \\), not an inequality sign, so the choices narrow to equation, formula or identity.",
        },
        {
          stepNumber: 2,
          description: "Count how many different letters appear.",
          workingLatex: "A, \\;\\; \\ell, \\;\\; w \\quad \\text{(three different variables)}",
          explanation:
            "Now count the distinct letters. There are three — \\( A \\), \\( \\ell \\) and \\( w \\) — each standing for a quantity that can change. An ordinary equation usually has just one unknown to find, so three linked variables is a strong hint we are not looking at an equation.",
        },
        {
          stepNumber: 3,
          description: "Decide between formula and identity.",
          workingLatex: "A = \\ell w \\quad \\text{(rule giving } A \\text{ from } \\ell \\text{ and } w\\text{)}",
          explanation:
            "It is not an identity, because the two sides are genuinely different quantities that depend on \\( \\ell \\) and \\( w \\) — not the same expression rearranged. When a statement links several variables with an \\( = \\) sign as a general rule, that is a formula.",
        },
        {
          stepNumber: 4,
          description: "Name the object.",
          workingLatex: "A = \\ell w \\quad \\text{(formula for the area of a rectangle)}",
          explanation:
            "So this is a formula: a general rule that gives the area \\( A \\) of a rectangle from its length \\( \\ell \\) and width \\( w \\). You substitute values for \\( \\ell \\) and \\( w \\) into it rather than solving it. A common slip is to call any statement with an \\( = \\) sign an 'equation' — but a rule linking several variables is more precisely a formula.",
        },
      ],
      finalAnswer: "It is a formula (a rule linking the different variables \\( A \\), \\( \\ell \\) and \\( w \\)).",
    },
  },
  {
    id: "ga02-004",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State whether \\(2(x + 4) \\equiv 2x + 8\\) is an expression, an equation, a formula or an identity.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "identity"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recognise the special sign.",
          workingLatex: "2(x + 4) \\equiv 2x + 8",
          explanation:
            "The sign joining the two sides is \\( \\equiv \\) (three bars), not the ordinary \\( = \\). The \\( \\equiv \\) sign means 'is identically equal to' — true for every value of \\( x \\). This is a strong hint that we are looking at an identity.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket on the left.",
          workingLatex: "2(x + 4) = 2 \\cdot x + 2 \\cdot 4 = 2x + 8",
          explanation:
            "To confirm the \\( \\equiv \\) is being used correctly, expand the brackets on the left. Multiply the \\( 2 \\) into each term inside: \\( 2 \\cdot x = 2x \\) and \\( 2 \\cdot 4 = 8 \\). A common slip is to multiply only the first term and write \\( 2x + 4 \\) — the \\( 2 \\) must hit both.",
        },
        {
          stepNumber: 3,
          description: "Compare the expanded form with the right-hand side.",
          workingLatex: "2x + 8 \\;=\\; 2x + 8 \\quad \\checkmark",
          explanation:
            "The expanded left side \\( 2x + 8 \\) is identical to the right side. Since it came from rearranging one side into the other, the two sides must be equal for every value of \\( x \\), not just a special one.",
        },
        {
          stepNumber: 4,
          description: "Name the object.",
          workingLatex: "2(x + 4) \\equiv 2x + 8 \\quad \\text{(identity)}",
          explanation:
            "Because both sides are equal for every value of \\( x \\), it is an identity. The give-away is the \\( \\equiv \\) sign together with the fact that expanding one side reproduces the other exactly.",
        },
      ],
      finalAnswer: "It is an identity (both sides are equal for every value of \\( x \\), shown by the \\( \\equiv \\) sign).",
    },
  },
  {
    id: "ga02-005",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State whether \\(3x + 1 > 10\\) is an expression, an equation, a formula or an identity.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Look at the symbol joining the two sides.",
          workingLatex: "3x + 1 \\; \\boxed{>} \\; 10",
          explanation:
            "The deciding feature is always the symbol in the middle. Here the two sides are joined by \\( > \\) (greater than), not by an equals sign or the identity sign.",
        },
        {
          stepNumber: 2,
          description: "Recognise it as an inequality sign.",
          workingLatex: "> \\in \\{<, >, \\le, \\ge\\} \\quad \\text{(inequality signs)}",
          explanation:
            "The symbol \\( > \\) is one of the four inequality signs \\( <, >, \\le, \\ge \\). Any statement built with one of these is an inequality, whatever else is going on around it.",
        },
        {
          stepNumber: 3,
          description: "Name the object.",
          workingLatex: "3x + 1 > 10 \\quad \\text{(inequality)}",
          explanation:
            "So this is an inequality. A common slip is to treat it like an equation and expect a single value — but an inequality is satisfied by a whole range of values, and the type is fixed by the \\( > \\) sign alone.",
        },
      ],
      finalAnswer: "It is an inequality (it uses the \\( > \\) sign, not an equals sign).",
    },
  },
  {
    id: "ga02-006",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "How many terms are there in the expression \\(4x + 3y - 7\\)?",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "terms"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what a term is.",
          workingLatex: "\\text{a term is a single number, letter, or product of numbers and letters}",
          explanation:
            "A term is one 'chunk' of an expression: it can be a plain number, a letter, or numbers and letters multiplied together (like \\( 4x \\)). Terms are separated from each other by \\( + \\) and \\( - \\) signs.",
        },
        {
          stepNumber: 2,
          description: "Split the expression at every \\( + \\) or \\( - \\) sign.",
          workingLatex: "\\underbrace{4x}_{1} \\;\\; + \\;\\; \\underbrace{3y}_{2} \\;\\; - \\;\\; \\underbrace{7}_{3}",
          explanation:
            "Cut the expression wherever you meet a \\( + \\) or a \\( - \\). That gives the chunks \\( 4x \\), \\( 3y \\) and \\( 7 \\). Each chunk is one term. Notice \\( 4x \\) is a single term even though it is a number times a letter — the multiplication inside it does not split it.",
        },
        {
          stepNumber: 3,
          description: "Count the chunks.",
          workingLatex: "4x, \\;\\; 3y, \\;\\; -7 \\;\\Rightarrow\\; 3 \\text{ terms}",
          explanation:
            "There are three chunks, so three terms. Note the last term carries its minus sign, but a sign in front does not split a chunk into two terms — it just tells you that term is being subtracted.",
        },
      ],
      finalAnswer: "There are \\( 3 \\) terms: \\( 4x \\), \\( 3y \\) and \\( -7 \\).",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga02-007",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Write down the coefficient of \\(x\\) in the expression \\(7x - 2\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what a coefficient is.",
          workingLatex: "\\text{coefficient of } x = \\text{the number multiplying the } x",
          explanation:
            "The coefficient of \\( x \\) is simply the number that \\( x \\) is being multiplied by. So in any term of the form 'number times \\( x \\)', that number is the coefficient.",
        },
        {
          stepNumber: 2,
          description: "Locate the term containing \\( x \\).",
          workingLatex: "7x - 2 \\;\\Rightarrow\\; \\text{the } x\\text{-term is } 7x",
          explanation:
            "Scan for the term with an \\( x \\) in it. It is \\( 7x \\), which means \\( 7 \\times x \\). The \\( -2 \\) is a separate constant term with no letter, so it plays no part in the coefficient of \\( x \\).",
        },
        {
          stepNumber: 3,
          description: "Read off the number multiplying \\( x \\).",
          workingLatex: "7x \\;\\Rightarrow\\; \\text{coefficient} = 7",
          explanation:
            "The number multiplying \\( x \\) in \\( 7x \\) is \\( 7 \\), so the coefficient of \\( x \\) is \\( 7 \\).",
        },
      ],
      finalAnswer: "The coefficient of \\( x \\) is \\( 7 \\).",
      canonicalAnswer: "7",
    },
  },
  {
    id: "ga02-008",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Write down the coefficient of \\(x\\) in the expression \\(7 - 3x\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "coefficient", "sign"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split the expression into terms with signs.",
          workingLatex: "7 \\;\\; - \\;\\; 3x \\quad \\text{(terms: } 7 \\text{ and } -3x\\text{)}",
          explanation:
            "Cut at the \\( - \\) sign, carrying the sign with the term it sits in front of. The two terms are \\( 7 \\) and \\( -3x \\). Keeping the sign attached now is what stops it being dropped later.",
        },
        {
          stepNumber: 2,
          description: "Locate the term containing \\( x \\).",
          workingLatex: "7 - 3x \\;\\Rightarrow\\; \\text{the } x \\text{-term is } -3x",
          explanation:
            "The term with an \\( x \\) in it is \\( -3x \\). The minus sign sitting in front of it is part of that term, not a separate operation to be ignored.",
        },
        {
          stepNumber: 3,
          description: "Read off the number, keeping its sign.",
          workingLatex: "-3x \\;\\Rightarrow\\; \\text{coefficient} = -3",
          explanation:
            "The coefficient is the number multiplying \\( x \\), taken together with its sign. Here the term is \\( -3x \\), so the coefficient is \\( -3 \\), not \\( 3 \\). Dropping the minus sign is the single most common mistake on this type of question.",
        },
      ],
      finalAnswer: "The coefficient of \\( x \\) is \\( -3 \\) (you must keep the minus sign).",
      canonicalAnswer: "-3",
    },
  },
  {
    id: "ga02-009",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "Write down the constant term in the expression \\(5x^{2} + 2x - 9\\).",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what a constant term is.",
          workingLatex: "\\text{constant term} = \\text{the term with no letter in it}",
          explanation:
            "A constant term is the part of an expression that has no letter attached — just a plain number. Its value never changes when \\( x \\) changes, which is why it is called 'constant'.",
        },
        {
          stepNumber: 2,
          description: "List the terms with their signs.",
          workingLatex: "5x^{2}, \\;\\; +2x, \\;\\; -9",
          explanation:
            "Split at the \\( + \\) and \\( - \\) signs, keeping each sign attached. The three terms are \\( 5x^{2} \\), \\( +2x \\) and \\( -9 \\).",
        },
        {
          stepNumber: 3,
          description: "Pick the term with no letter.",
          workingLatex: "5x^{2}, \\; 2x \\;\\text{have an } x; \\quad -9 \\;\\text{has none} \\Rightarrow \\text{constant} = -9",
          explanation:
            "The first two terms both contain an \\( x \\), but \\( -9 \\) is a plain number with no letter, so it is the constant term. Keep the minus sign: the constant is \\( -9 \\), not \\( 9 \\).",
        },
      ],
      finalAnswer: "The constant term is \\( -9 \\).",
      canonicalAnswer: "-9",
    },
  },
  {
    id: "ga02-010",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "True or false: an expression can be solved to find the value of the letter.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "expression", "true-false"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what solving means.",
          workingLatex: "\\text{solving} \\Rightarrow \\text{finding values that balance an } = \\text{ sign}",
          explanation:
            "To 'solve' means to find the value(s) of the letter that make two sides balance. That balancing act only makes sense when there is an \\( = \\) sign with something on each side of it.",
        },
        {
          stepNumber: 2,
          description: "Check whether an expression has two sides to balance.",
          workingLatex: "3x + 5 \\quad \\text{(no = sign} \\Rightarrow \\text{nothing to balance)}",
          explanation:
            "Take a typical expression such as \\( 3x + 5 \\). It has no equals sign, so there is no second side to balance against. With nothing to balance, there is nothing to solve — \\( x \\) is free to be any value.",
        },
        {
          stepNumber: 3,
          description: "State the verdict.",
          workingLatex: "\\text{expression} \\Rightarrow \\text{can simplify or evaluate, but not solve}",
          explanation:
            "So the statement is false. You can simplify an expression or evaluate it by substituting a number for the letter, but you cannot solve it. Solving is reserved for equations.",
        },
      ],
      finalAnswer: "False — an expression has no equals sign, so it cannot be solved; it can only be simplified or evaluated.",
    },
  },
  {
    id: "ga02-011",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "How many terms are there in the expression \\(8\\)?",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "terms", "constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall that a lone number is itself a term.",
          workingLatex: "\\text{a single number with no } +/- \\text{ around it is one term}",
          explanation:
            "A term does not have to contain a letter. A plain number standing on its own is a perfectly good term — a constant term. So \\( 8 \\) by itself counts.",
        },
        {
          stepNumber: 2,
          description: "Count the chunks.",
          workingLatex: "8 \\;\\Rightarrow\\; 1 \\text{ term}",
          explanation:
            "There are no \\( + \\) or \\( - \\) signs to split anything, so the whole expression is a single chunk: one term. A common slip is to answer \\( 0 \\) because there is no letter — but a constant on its own is still a perfectly good term, so the count is \\( 1 \\).",
        },
      ],
      finalAnswer: "There is \\( 1 \\) term (the constant \\( 8 \\)).",
      canonicalAnswer: "1",
    },
  },
  {
    id: "ga02-012",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State whether \\(x^{2} - 5x + 6\\) is an expression, an equation, a formula or an identity.",
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "expression", "quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Scan for a relation sign.",
          workingLatex: "x^{2} - 5x + 6 \\quad \\text{(no } =, \\equiv, <, > \\text{)}",
          explanation:
            "Check for any relation sign first. There is no \\( =, \\equiv, < \\) or \\( > \\) here — just terms joined by \\( - \\) and \\( + \\). With no relation sign, the object must be an expression.",
        },
        {
          stepNumber: 2,
          description: "Split it into terms.",
          workingLatex: "x^{2} \\;\\; - \\;\\; 5x \\;\\; + \\;\\; 6 \\quad \\text{(three terms)}",
          explanation:
            "Splitting at the \\( + \\) and \\( - \\) signs gives three terms: \\( x^{2} \\), \\( -5x \\) and \\( 6 \\). These are just being listed — there is no claim that the whole thing equals anything.",
        },
        {
          stepNumber: 3,
          description: "Name the object.",
          workingLatex: "x^{2} - 5x + 6 \\quad \\text{(expression)}",
          explanation:
            "So it is an expression of three terms. A common slip is to call this an equation because it looks like a quadratic 'ready to be solved' — but without an \\( = 0 \\) (or any \\( = \\)) it is only an expression.",
        },
      ],
      finalAnswer: "It is an expression (no equals sign), made up of the three terms \\( x^{2} \\), \\( -5x \\) and \\( 6 \\).",
    },
  },

  // ===================== STANDARD (013–022) =====================
  {
    id: "ga02-013",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "By testing the values \\(x = 0\\) and \\(x = 1\\), decide whether \\(3(x + 2) = 3x + 6\\) is an equation or an identity.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "identity", "equation", "testing-values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the test that distinguishes them.",
          workingLatex: "\\text{identity: true for ALL } x; \\quad \\text{equation: true for SOME } x",
          explanation:
            "The difference is about how many values make the statement true. An identity holds for every single value of \\( x \\); an ordinary equation holds only for particular values. Testing a couple of values cannot prove an identity outright, but if even one value fails we know it is not an identity.",
        },
        {
          stepNumber: 2,
          description: "Test \\( x = 0 \\).",
          workingLatex: "\\text{LHS} = 3(0 + 2) = 3(2) = 6, \\quad \\text{RHS} = 3(0) + 6 = 6 \\;\\checkmark",
          explanation:
            "Substitute \\( x = 0 \\) into each side separately. The left side is \\( 3(0+2) = 6 \\) and the right side is \\( 3(0)+6 = 6 \\). They match, so the statement passes at \\( x = 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Test \\( x = 1 \\).",
          workingLatex: "\\text{LHS} = 3(1 + 2) = 3(3) = 9, \\quad \\text{RHS} = 3(1) + 6 = 9 \\;\\checkmark",
          explanation:
            "Now try \\( x = 1 \\). The left side is \\( 3(1+2) = 9 \\) and the right side is \\( 3(1)+6 = 9 \\). They match again — and they match for a reason: expanding \\( 3(x+2) \\) gives exactly \\( 3x+6 \\).",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "3(x + 2) \\equiv 3x + 6 \\quad \\text{(identity)}",
          explanation:
            "Both test values agree, and because the right side is just the bracket expanded out (\\( 3 \\cdot x + 3 \\cdot 2 = 3x + 6 \\)), the two sides agree for every value of \\( x \\). So it is an identity, properly written with \\( \\equiv \\). Remember that testing values can disprove an identity but only the expansion truly confirms one.",
        },
      ],
      finalAnswer: "It is an identity: both sides equal \\( 6 \\) when \\( x = 0 \\) and \\( 9 \\) when \\( x = 1 \\), and they agree for every value of \\( x \\).",
    },
  },
  {
    id: "ga02-014",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "By testing the values \\(x = 0\\) and \\(x = 2\\), decide whether \\(3(x + 2) = 12\\) is an equation or an identity.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "equation", "identity", "testing-values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the test.",
          workingLatex: "\\text{identity: true for ALL } x; \\quad \\text{equation: true for SOME } x",
          explanation:
            "Same test as before: an identity must hold for every value of \\( x \\), whereas an equation holds only for particular values. Finding a single value that fails is enough to rule out 'identity'.",
        },
        {
          stepNumber: 2,
          description: "Test \\( x = 0 \\).",
          workingLatex: "\\text{LHS} = 3(0 + 2) = 6, \\quad \\text{RHS} = 12 \\;\\Rightarrow\\; 6 \\ne 12 \\;\\times",
          explanation:
            "Substitute \\( x = 0 \\). The left side is \\( 3(0+2) = 6 \\), but the right side is the fixed number \\( 12 \\). Since \\( 6 \\ne 12 \\), the statement is false at \\( x = 0 \\). It therefore cannot be an identity.",
        },
        {
          stepNumber: 3,
          description: "Test \\( x = 2 \\).",
          workingLatex: "\\text{LHS} = 3(2 + 2) = 3(4) = 12, \\quad \\text{RHS} = 12 \\;\\checkmark",
          explanation:
            "Now try \\( x = 2 \\). The left side is \\( 3(2+2) = 12 \\), which does equal the right side. So the statement is true for this special value.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "3(x + 2) = 12 \\quad \\text{(equation, true only when } x = 2\\text{)}",
          explanation:
            "It fails for some values (\\( x = 0 \\)) but holds for at least one (\\( x = 2 \\)). A statement that is true only for particular values is an equation, not an identity. Notice the right-hand side here is a fixed number \\( 12 \\), not the bracket expanded — that is why it pins \\( x \\) down to one value.",
        },
      ],
      finalAnswer: "It is an equation: it fails at \\( x = 0 \\) (\\( 6 \\ne 12 \\)) but holds at \\( x = 2 \\), so it is true only for a particular value.",
    },
  },
  {
    id: "ga02-015",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "For the expression \\(6x^{2} - 4x + 9\\), write down (a) the coefficient of \\(x^{2}\\), (b) the coefficient of \\(x\\), and (c) the constant term.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "coefficient", "constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "List the terms with their signs.",
          workingLatex: "6x^{2}, \\;\\; -4x, \\;\\; +9",
          explanation:
            "Split the expression at the \\( + \\) and \\( - \\) signs, keeping each sign with the term that follows it. The three terms are \\( 6x^{2} \\), \\( -4x \\) and \\( +9 \\). Carrying the signs now avoids dropping them later.",
        },
        {
          stepNumber: 2,
          description: "Read the coefficient of \\( x^{2} \\).",
          workingLatex: "6x^{2} \\;\\Rightarrow\\; \\text{coefficient of } x^{2} = 6",
          explanation:
            "The coefficient of \\( x^{2} \\) is the number multiplying the \\( x^{2} \\). The term is \\( 6x^{2} \\), so that number is \\( 6 \\).",
        },
        {
          stepNumber: 3,
          description: "Read the coefficient of \\( x \\) (with its sign).",
          workingLatex: "-4x \\;\\Rightarrow\\; \\text{coefficient of } x = -4",
          explanation:
            "The term in \\( x \\) is \\( -4x \\), so its coefficient is \\( -4 \\). Be careful to include the minus sign — the coefficient of \\( x \\) here is negative.",
        },
        {
          stepNumber: 4,
          description: "Identify the constant term.",
          workingLatex: "+9 \\;\\Rightarrow\\; \\text{constant} = 9",
          explanation:
            "The constant term is the one with no letter: \\( +9 \\). Its sign is positive, so the constant is \\( 9 \\). Both other terms carry an \\( x \\), confirming \\( +9 \\) is the only constant.",
        },
      ],
      finalAnswer: "(a) coefficient of \\( x^{2} \\) is \\( 6 \\); (b) coefficient of \\( x \\) is \\( -4 \\); (c) constant term is \\( 9 \\).",
    },
  },
  {
    id: "ga02-016",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "State whether \\(v = u + at\\) is an expression, an equation, a formula or an identity, and explain why.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "formula", "science"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the equals sign.",
          workingLatex: "v = u + at \\quad \\text{(sign is } = \\text{)}",
          explanation:
            "There is an \\( = \\) sign, so this is not just an expression — it compares two sides. The sign is \\( = \\), not an inequality sign, so the choices are equation, formula or identity.",
        },
        {
          stepNumber: 2,
          description: "Count the distinct variables.",
          workingLatex: "v, \\; u, \\; a, \\; t \\quad \\text{(four different variables)}",
          explanation:
            "Now count the distinct letters: \\( v, u, a \\) and \\( t \\). Four different variables are linked together. An ordinary equation usually has a single unknown to find, so four linked variables points away from 'equation'.",
        },
        {
          stepNumber: 3,
          description: "Decide between formula and identity.",
          workingLatex: "v = u + at \\quad \\text{(rule giving one variable from the others)}",
          explanation:
            "It is not an identity, because the two sides are not the same expression rearranged — they genuinely depend on the values of \\( u, a, t \\). It is a rule that lets you work out \\( v \\) once you know \\( u, a \\) and \\( t \\), which is exactly what a formula is.",
        },
      ],
      finalAnswer: "It is a formula: it is a rule connecting the different variables \\( v \\), \\( u \\), \\( a \\) and \\( t \\) (the suvat rule for final velocity).",
    },
  },
  {
    id: "ga02-017",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "State whether \\(A = \\pi r^{2}\\) is an expression, an equation, a formula or an identity, and explain why.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "formula", "area"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Spot the equals sign.",
          workingLatex: "A = \\pi r^{2} \\quad \\text{(sign is } = \\text{)}",
          explanation:
            "There is an \\( = \\) sign, so it compares two sides rather than being a bare expression. The choices are now equation, formula or identity.",
        },
        {
          stepNumber: 2,
          description: "Separate the variables from the constant \\( \\pi \\).",
          workingLatex: "\\text{variables: } A, \\; r \\quad ; \\quad \\pi \\approx 3.14159 \\text{ (fixed)}",
          explanation:
            "The letters that genuinely vary are \\( A \\) and \\( r \\). The symbol \\( \\pi \\) is not a variable but a fixed number (about \\( 3.14159 \\)), so it does not count when we ask how many quantities are linked. A common slip is to treat \\( \\pi \\) as a third variable.",
        },
        {
          stepNumber: 3,
          description: "Decide on the type.",
          workingLatex: "A = \\pi r^{2} \\quad \\text{(rule giving } A \\text{ from } r\\text{)}",
          explanation:
            "This is a rule for producing the area \\( A \\) of a circle from its radius \\( r \\): substitute a value of \\( r \\) and out comes \\( A \\). A rule that links variables like this is a formula, not an equation to be solved.",
        },
      ],
      finalAnswer: "It is a formula: it is a rule linking the variables \\( A \\) and \\( r \\) (the area of a circle), with \\( \\pi \\) a fixed constant.",
    },
  },
  {
    id: "ga02-018",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "List all the positive factors of the term \\(6xy\\) (include numerical and letter factors).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "factors"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what a factor is.",
          workingLatex: "\\text{a factor divides exactly into the term with nothing left over}",
          explanation:
            "A factor of \\( 6xy \\) is anything that divides into it exactly. To find them all, we deal with the number part and the letter part separately, then combine them.",
        },
        {
          stepNumber: 2,
          description: "Find the numerical factors of \\( 6 \\).",
          workingLatex: "6 = 1 \\times 6 = 2 \\times 3 \\;\\Rightarrow\\; 1, \\; 2, \\; 3, \\; 6",
          explanation:
            "The whole numbers that divide \\( 6 \\) exactly are \\( 1, 2, 3 \\) and \\( 6 \\). These are the possible number parts of a factor.",
        },
        {
          stepNumber: 3,
          description: "Find the letter factors.",
          workingLatex: "x, \\;\\; y, \\;\\; xy \\quad (\\text{plus the empty choice — no letter})",
          explanation:
            "From the letters \\( x \\) and \\( y \\) we can take \\( x \\) alone, \\( y \\) alone, both as \\( xy \\), or neither. So the possible letter parts are: nothing, \\( x \\), \\( y \\), or \\( xy \\) — four choices in all.",
        },
        {
          stepNumber: 4,
          description: "Combine every number with every letter choice.",
          workingLatex: "\\{1,2,3,6\\} \\times \\{1, x, y, xy\\} \\;\\Rightarrow\\; 4 \\times 4 = 16 \\text{ factors}",
          explanation:
            "Pair each of the four numbers with each of the four letter choices. That gives \\( 4 \\times 4 = 16 \\) factors in total: \\( 1,2,3,6 \\) (numbers alone), then the same multiplied by \\( x \\), by \\( y \\), and by \\( xy \\). A common slip is to forget the 'no letter' and 'no number above 1' choices and undercount.",
        },
      ],
      finalAnswer: "The factors are \\( 1, 2, 3, 6, x, 2x, 3x, 6x, y, 2y, 3y, 6y, xy, 2xy, 3xy \\) and \\( 6xy \\).",
    },
  },
  {
    id: "ga02-019",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "State whether \\(5x + 2 = 5x + 7\\) is an equation that can be solved or has no solution, and explain what this tells you about whether it is an identity.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "equation", "identity", "no-solution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare the two sides term by term.",
          workingLatex: "5x + 2 \\quad \\text{vs} \\quad 5x + 7",
          explanation:
            "Both sides have the same \\( x \\)-term, \\( 5x \\). The only difference is the constant: \\( +2 \\) on the left, \\( +7 \\) on the right. Whatever \\( x \\) is, the \\( 5x \\) parts are equal, so the sides can only be equal if \\( 2 = 7 \\) — which is never true.",
        },
        {
          stepNumber: 2,
          description: "Confirm by testing a value.",
          workingLatex: "x = 0: \\quad \\text{LHS} = 2, \\; \\text{RHS} = 7 \\;\\Rightarrow\\; 2 \\ne 7 \\;\\times",
          explanation:
            "Putting \\( x = 0 \\) gives \\( 2 \\) on the left and \\( 7 \\) on the right — they disagree. And because the \\( 5x \\) terms always cancel out the same way, every other value of \\( x \\) fails for the same reason. So there is no solution at all.",
        },
        {
          stepNumber: 3,
          description: "Interpret and classify.",
          workingLatex: "5x + 2 = 5x + 7 \\quad \\text{(equation with no solution)}",
          explanation:
            "It is an equation — it has an \\( = \\) sign and claims two sides are equal — but it has no solution because no value of \\( x \\) works. This is the exact opposite of an identity: an identity is true for all \\( x \\), whereas this is true for none. Note 'no solution' still makes it an equation, just an inconsistent one.",
        },
      ],
      finalAnswer: "It is an equation with no solution: the constants \\( 2 \\) and \\( 7 \\) differ, so no value of \\( x \\) works. It is the opposite of an identity (true for none, not all).",
    },
  },
  {
    id: "ga02-020",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "In the expression \\(\\dfrac{x}{4} + 9 - 2x\\), what is the coefficient of \\(x\\) in the first term \\(\\dfrac{x}{4}\\)?",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "coefficient", "fraction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rewrite the fractional term as a number times \\( x \\).",
          workingLatex: "\\frac{x}{4} = \\frac{1 \\cdot x}{4} = \\frac{1}{4} \\cdot x = \\frac{1}{4}x",
          explanation:
            "Dividing \\( x \\) by \\( 4 \\) is the same as multiplying \\( x \\) by \\( \\frac{1}{4} \\). Writing the term as \\( \\frac{1}{4}x \\) puts it in the familiar 'number times \\( x \\)' shape, which makes the coefficient easy to read.",
        },
        {
          stepNumber: 2,
          description: "Read off the coefficient.",
          workingLatex: "\\frac{1}{4}x \\;\\Rightarrow\\; \\text{coefficient} = \\frac{1}{4}",
          explanation:
            "Now the number multiplying \\( x \\) is plainly \\( \\frac{1}{4} \\), so that is the coefficient. A coefficient does not have to be a whole number — fractions and decimals are allowed. A common slip is to answer \\( 4 \\) (the denominator) instead of \\( \\frac{1}{4} \\).",
        },
      ],
      finalAnswer: "The coefficient of \\( x \\) in the term \\( \\dfrac{x}{4} \\) is \\( \\dfrac{1}{4} \\) (\\( 0.25 \\)).",
      canonicalAnswer: "1/4",
    },
  },
  {
    id: "ga02-021",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "State whether \\(2x + 3y \\le 12\\) is an expression, an equation, a formula, an identity or an inequality, and explain how you can tell.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Look at the central symbol.",
          workingLatex: "2x + 3y \\le 12 \\quad \\text{(symbol is } \\le \\text{)}",
          explanation:
            "The deciding feature is always the symbol joining the two sides. Here it is \\( \\le \\) (less than or equal to), one of the four inequality signs \\( <, >, \\le, \\ge \\). That single symbol settles the classification.",
        },
        {
          stepNumber: 2,
          description: "Name the object.",
          workingLatex: "2x + 3y \\le 12 \\quad \\text{(inequality)}",
          explanation:
            "Because the sides are joined by \\( \\le \\) rather than \\( = \\), it is an inequality — not an equation or formula, even though it contains two variables. Any \\( <, >, \\le \\) or \\( \\ge \\) makes a statement an inequality, no matter how many letters appear.",
        },
      ],
      finalAnswer: "It is an inequality, because the sides are joined by \\( \\le \\) rather than an equals sign.",
    },
  },
  {
    id: "ga02-022",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A student writes: 'In \\(9 - 4x\\), the coefficient of \\(x\\) is 4.' Explain the mistake and give the correct coefficient.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "coefficient", "misconception", "sign"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the term in \\( x \\) with its sign.",
          workingLatex: "9 - 4x \\;\\Rightarrow\\; \\text{the } x\\text{-term is } -4x",
          explanation:
            "Find the term containing \\( x \\): cut at the \\( - \\) sign and the term is \\( -4x \\). The minus sign in front of the \\( 4 \\) is part of that term, not a separate operation that can be ignored.",
        },
        {
          stepNumber: 2,
          description: "Pinpoint the student's mistake.",
          workingLatex: "\\text{student read } 4, \\;\\text{but dropped the } - \\text{ sign}",
          explanation:
            "The student read off the digit \\( 4 \\) but left the sign behind. Because the \\( 4 \\) is being subtracted, the term is negative, and the coefficient must carry that minus sign too.",
        },
        {
          stepNumber: 3,
          description: "State the correct coefficient and the rule.",
          workingLatex: "-4x \\;\\Rightarrow\\; \\text{coefficient of } x = -4",
          explanation:
            "The coefficient is the number multiplying \\( x \\), taken together with its sign. Since the term is \\( -4x \\), the coefficient is \\( -4 \\), not \\( 4 \\). The rule to remember: always include the sign that sits directly in front of the term.",
        },
      ],
      finalAnswer: "The student dropped the minus sign. The term is \\( -4x \\), so the coefficient of \\( x \\) is \\( -4 \\), not \\( 4 \\).",
      canonicalAnswer: "-4",
    },
  },

  // ===================== CHALLENGE (023–030) =====================
  {
    id: "ga02-023",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Explain, by substituting two different values of \\(x\\), why \\(2(x + 3) \\equiv 2x + 6\\) is an identity but \\(2(x + 3) = 10\\) is an equation.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "identity", "equation", "testing-values", "compare"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the distinction.",
          workingLatex: "\\text{identity: true for ALL } x; \\quad \\text{equation: true for SOME } x",
          explanation:
            "An identity must hold for every value of \\( x \\); an equation holds only for particular values. We will test the same left-hand side, \\( 2(x+3) \\), against two different right-hand sides and watch how the two statements behave differently.",
        },
        {
          stepNumber: 2,
          description: "Test the identity at \\( x = 0 \\).",
          workingLatex: "x = 0: \\quad 2(0 + 3) = 6, \\quad 2(0) + 6 = 6 \\;\\checkmark",
          explanation:
            "Start with \\( 2(x+3) \\equiv 2x + 6 \\). At \\( x = 0 \\), the left side is \\( 2(3) = 6 \\) and the right side is \\( 0 + 6 = 6 \\). They agree.",
        },
        {
          stepNumber: 3,
          description: "Test the identity at \\( x = 1 \\).",
          workingLatex: "x = 1: \\quad 2(1 + 3) = 8, \\quad 2(1) + 6 = 8 \\;\\checkmark",
          explanation:
            "At \\( x = 1 \\), the left side is \\( 2(4) = 8 \\) and the right side is \\( 2 + 6 = 8 \\). They agree again — and they must, because expanding \\( 2(x+3) \\) gives exactly \\( 2x + 6 \\).",
        },
        {
          stepNumber: 4,
          description: "Test the equation at \\( x = 0 \\).",
          workingLatex: "x = 0: \\quad 2(0 + 3) = 6 \\ne 10 \\;\\times",
          explanation:
            "Now the equation \\( 2(x+3) = 10 \\). At \\( x = 0 \\) the left side is \\( 6 \\), which is not the fixed \\( 10 \\), so it fails here. That already shows it cannot be an identity.",
        },
        {
          stepNumber: 5,
          description: "Test the equation at \\( x = 2 \\).",
          workingLatex: "x = 2: \\quad 2(2 + 3) = 2(5) = 10 \\;\\checkmark",
          explanation:
            "At \\( x = 2 \\) the left side is \\( 2(5) = 10 \\), which matches. So the equation is true for some values but not others.",
        },
        {
          stepNumber: 6,
          description: "Draw the conclusion.",
          workingLatex: "2(x + 3) \\equiv 2x + 6 \\; \\text{(all } x) \\qquad 2(x + 3) = 10 \\; \\text{(only } x = 2)",
          explanation:
            "The first statement holds for all \\( x \\), so it is an identity (note the \\( \\equiv \\)). The second holds only at the single value \\( x = 2 \\), so it is an equation. The contrast — 'all' versus 'some' — is exactly what separates the two ideas.",
        },
      ],
      finalAnswer: "\\( 2(x+3) \\equiv 2x+6 \\) is an identity because both sides match for all \\( x \\) (\\( 6 \\) and \\( 6 \\) at \\( x=0 \\), \\( 8 \\) and \\( 8 \\) at \\( x=1 \\)). \\( 2(x+3)=10 \\) is an equation because it fails at \\( x=0 \\) (\\( 6 \\ne 10 \\)) and holds only at \\( x=2 \\).",
    },
  },
  {
    id: "ga02-024",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Explain in full sentences the difference between a formula and an equation, giving one example of each.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "formula", "equation", "explain"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Give and describe an equation.",
          workingLatex: "3x - 1 = 8 \\quad \\text{(equation: one unknown } x \\text{ to find)}",
          explanation:
            "An equation joins two expressions with an \\( = \\) sign and is usually true only for particular values of a single unknown. For example, \\( 3x - 1 = 8 \\) is true only when \\( x = 3 \\); you 'solve' it to find that value.",
        },
        {
          stepNumber: 2,
          description: "Give and describe a formula.",
          workingLatex: "A = \\ell w \\quad \\text{(formula: rule linking } A, \\ell, w)",
          explanation:
            "A formula also uses an \\( = \\) sign, but it links several different variables as a general rule. For example, \\( A = \\ell w \\) gives the area of any rectangle from its length and width; you 'substitute into' it rather than solve it.",
        },
        {
          stepNumber: 3,
          description: "State the key contrast.",
          workingLatex: "\\text{equation: solve for one unknown} \\quad \\Big| \\quad \\text{formula: substitute several variables}",
          explanation:
            "The shared feature is the \\( = \\) sign; the difference is in their purpose. An equation typically has one unknown that you solve for, while a formula relates several variables and is used by substituting known values to find another. A formula can be turned into an equation once you fix all but one of its variables, but on its own it stays a general rule.",
        },
      ],
      finalAnswer: "An equation (e.g. \\( 3x - 1 = 8 \\)) joins two expressions and is true only for particular values of one unknown, which you solve for. A formula (e.g. \\( A = \\ell w \\)) is a general rule linking several different variables that you substitute values into. Both use an equals sign, but a formula relates variables while an equation is solved.",
    },
  },
  {
    id: "ga02-025",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Classify each item in this list as an expression, equation, formula, identity or inequality: (a) \\(4x - 1\\); (b) \\(P = 2(\\ell + w)\\); (c) \\(x^{2} \\equiv x \\cdot x\\); (d) \\(5x = 20\\); (e) \\(x + 3 < 9\\).",
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "classification", "mixed"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Classify (a).",
          workingLatex: "4x - 1 \\quad \\text{(no relation sign} \\Rightarrow \\text{expression)}",
          explanation:
            "Check (a) for a relation sign first. There is none — just two terms joined by a minus. With no \\( =, \\equiv, <, > \\), it can only be an expression.",
        },
        {
          stepNumber: 2,
          description: "Classify (b).",
          workingLatex: "P = 2(\\ell + w) \\quad \\text{(variables } P, \\ell, w \\Rightarrow \\text{formula)}",
          explanation:
            "Item (b) has an \\( = \\) sign and links three variables \\( P, \\ell \\) and \\( w \\) as a rule (it is the perimeter of a rectangle). A rule connecting several variables is a formula.",
        },
        {
          stepNumber: 3,
          description: "Classify (c).",
          workingLatex: "x^{2} \\equiv x \\cdot x \\quad \\text{(true for all } x \\Rightarrow \\text{identity)}",
          explanation:
            "Item (c) uses the \\( \\equiv \\) sign, and \\( x \\cdot x \\) really is \\( x^{2} \\) for every value of \\( x \\). True for all \\( x \\) means it is an identity.",
        },
        {
          stepNumber: 4,
          description: "Classify (d).",
          workingLatex: "5x = 20 \\quad \\text{(true only when } x = 4 \\Rightarrow \\text{equation)}",
          explanation:
            "Item (d) has an \\( = \\) sign and a single unknown \\( x \\). It is true only when \\( x = 4 \\) (since \\( 5 \\times 4 = 20 \\)), not for all \\( x \\), so it is an equation rather than an identity. The single unknown and ordinary \\( = \\) sign distinguish it from the formula in (b).",
        },
        {
          stepNumber: 5,
          description: "Classify (e).",
          workingLatex: "x + 3 < 9 \\quad \\text{(uses } < \\Rightarrow \\text{inequality)}",
          explanation:
            "Item (e) is joined by \\( < \\), one of the inequality signs, so it is an inequality. The presence of \\( < \\) overrides everything else about its appearance.",
        },
      ],
      finalAnswer: "(a) expression; (b) formula; (c) identity; (d) equation; (e) inequality.",
    },
  },
  {
    id: "ga02-026",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Is \\((x + 1)^{2} = x^{2} + 2x + 1\\) true for all values of \\(x\\)? Justify your answer by testing \\(x = 3\\) and \\(x = -2\\), and state what kind of statement it is.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "identity", "testing-values", "expansion"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide what 'true for all' would mean.",
          workingLatex: "\\text{true for all } x \\;\\Rightarrow\\; \\text{identity}",
          explanation:
            "If the statement holds for every value of \\( x \\), it is an identity. We cannot test infinitely many values, but if two carefully chosen values both work — and the right side is what you get by expanding the left — that is strong evidence it is an identity.",
        },
        {
          stepNumber: 2,
          description: "Test \\( x = 3 \\).",
          workingLatex: "(3 + 1)^{2} = 4^{2} = 16, \\quad 3^{2} + 2(3) + 1 = 9 + 6 + 1 = 16 \\;\\checkmark",
          explanation:
            "Put \\( x = 3 \\) into each side. The left side is \\( (3+1)^{2} = 16 \\); the right side is \\( 9 + 6 + 1 = 16 \\). They agree, so the statement passes at \\( x = 3 \\).",
        },
        {
          stepNumber: 3,
          description: "Test \\( x = -2 \\).",
          workingLatex: "(-2 + 1)^{2} = (-1)^{2} = 1, \\quad (-2)^{2} + 2(-2) + 1 = 4 - 4 + 1 = 1 \\;\\checkmark",
          explanation:
            "Now use the negative value \\( x = -2 \\). The left side is \\( (-1)^{2} = 1 \\); the right side is \\( 4 - 4 + 1 = 1 \\). Watch the signs: \\( (-2)^{2} = 4 \\) (positive) and \\( 2(-2) = -4 \\). Both sides give \\( 1 \\), so it passes again.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "(x + 1)^{2} \\equiv x^{2} + 2x + 1",
          explanation:
            "Both values agree, and the right side is precisely the expansion of \\( (x+1)^{2} = (x+1)(x+1) \\), so the statement is true for all \\( x \\). It is therefore an identity, properly written with \\( \\equiv \\). Testing two values is good evidence, but it is the expansion that truly guarantees it holds everywhere.",
        },
      ],
      finalAnswer: "Yes, it is true for all \\( x \\) (\\( 16 = 16 \\) at \\( x = 3 \\), and \\( 1 = 1 \\) at \\( x = -2 \\)), so it is an identity: \\( (x+1)^{2} \\equiv x^{2} + 2x + 1 \\).",
    },
  },
  {
    id: "ga02-027",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Explain in full sentences the difference between an expression and an equation, and explain why it makes no sense to 'solve' an expression.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "expression", "equation", "explain"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Describe an expression.",
          workingLatex: "2x + 5 \\quad \\text{(expression — no = sign, just terms)}",
          explanation:
            "An expression is a collection of terms joined by \\( + \\) and \\( - \\), with no relation sign. For example \\( 2x + 5 \\). It represents a value once you know \\( x \\), but on its own it makes no claim that anything equals anything.",
        },
        {
          stepNumber: 2,
          description: "Describe an equation.",
          workingLatex: "2x + 5 = 11 \\quad \\text{(equation — has = sign joining two sides)}",
          explanation:
            "An equation puts an \\( = \\) sign between two expressions, claiming they are equal. For example \\( 2x + 5 = 11 \\) claims the expression \\( 2x + 5 \\) equals \\( 11 \\). This claim is true only for particular values of \\( x \\) — here, \\( x = 3 \\).",
        },
        {
          stepNumber: 3,
          description: "Explain why an expression cannot be solved.",
          workingLatex: "\\text{solving} \\Rightarrow \\text{balancing two sides of an } = \\text{ sign}",
          explanation:
            "Solving means finding the values that make two sides balance across an \\( = \\) sign. An expression like \\( 2x + 5 \\) has no \\( = \\) sign and therefore no second side to balance against, so there is nothing to solve. You can only simplify it or evaluate it for a chosen \\( x \\). Saying 'solve \\( 2x + 5 \\)' is a category error, like asking what colour the number seven is.",
        },
      ],
      finalAnswer: "An expression (e.g. \\( 2x + 5 \\)) is just terms with no equals sign; an equation (e.g. \\( 2x + 5 = 11 \\)) claims two expressions are equal and is true only for particular values. You cannot solve an expression because there is no equals sign and so nothing to balance — you can only simplify or evaluate it.",
    },
  },
  {
    id: "ga02-028",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A student claims \\(3(x + 4) = 3x + 12\\) is an equation because it has an equals sign. Explain why it is better described as an identity, and how it could be written more precisely.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "identity", "equation", "misconception"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Acknowledge the equals sign but question the label.",
          workingLatex: "3(x + 4) = 3x + 12 \\quad \\text{(has = , but is it true for ALL } x?)",
          explanation:
            "Having an \\( = \\) sign does make this look like an equation, and the student is right that far. But the \\( = \\) sign alone does not settle whether it is an ordinary equation or an identity — for that we must check whether it holds for every value of \\( x \\) or only some.",
        },
        {
          stepNumber: 2,
          description: "Test the value \\( x = 0 \\).",
          workingLatex: "x = 0: \\quad 3(0 + 4) = 12, \\quad 3(0) + 12 = 12 \\;\\checkmark",
          explanation:
            "Substitute \\( x = 0 \\) into each side. The left side is \\( 3(4) = 12 \\) and the right side is \\( 0 + 12 = 12 \\). They agree at this value.",
        },
        {
          stepNumber: 3,
          description: "Test a second value \\( x = 5 \\).",
          workingLatex: "x = 5: \\quad 3(5 + 4) = 3(9) = 27, \\quad 3(5) + 12 = 27 \\;\\checkmark",
          explanation:
            "Now try \\( x = 5 \\): the left side is \\( 3(9) = 27 \\) and the right side is \\( 15 + 12 = 27 \\). They agree again — which makes sense, because expanding \\( 3(x+4) \\) gives exactly \\( 3x + 12 \\). So the two sides are equal for all \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "Reclassify and rewrite precisely.",
          workingLatex: "3(x + 4) \\equiv 3x + 12",
          explanation:
            "Because it is true for all \\( x \\), not just some, it is an identity rather than an ordinary equation. To show this precisely we replace the \\( = \\) with the identity sign \\( \\equiv \\), writing \\( 3(x+4) \\equiv 3x + 12 \\).",
        },
      ],
      finalAnswer: "Having an equals sign is not enough. Since both sides are equal for all \\( x \\) (\\( 12 = 12 \\) at \\( x = 0 \\), \\( 27 = 27 \\) at \\( x = 5 \\)), it is true for every value, which makes it an identity rather than an equation. It is written precisely as \\( 3(x + 4) \\equiv 3x + 12 \\) using the \\( \\equiv \\) sign.",
    },
  },
  {
    id: "ga02-029",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For the expression \\(7 - \\dfrac{x}{2} + 4x^{3}\\), state the number of terms, the coefficient of \\(x\\), the coefficient of \\(x^{3}\\) and the constant term.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "terms", "coefficient", "constant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Split into terms, keeping signs.",
          workingLatex: "7, \\;\\; -\\frac{x}{2}, \\;\\; +4x^{3} \\;\\Rightarrow\\; 3 \\text{ terms}",
          explanation:
            "Cut the expression at each \\( + \\) and \\( - \\), carrying the sign with the following term. That gives three chunks: \\( 7 \\), \\( -\\frac{x}{2} \\) and \\( +4x^{3} \\). So there are \\( 3 \\) terms. The fraction \\( \\frac{x}{2} \\) is a single term, not two — the division bar does not split a chunk.",
        },
        {
          stepNumber: 2,
          description: "Find the coefficient of \\( x \\).",
          workingLatex: "-\\frac{x}{2} = -\\frac{1}{2}x \\;\\Rightarrow\\; \\text{coefficient of } x = -\\frac{1}{2}",
          explanation:
            "The term in \\( x \\) is \\( -\\frac{x}{2} \\). Dividing by \\( 2 \\) is multiplying by \\( \\frac{1}{2} \\), so this is \\( -\\frac{1}{2}x \\). The coefficient is therefore \\( -\\frac{1}{2} \\) — keep both the fraction and the minus sign.",
        },
        {
          stepNumber: 3,
          description: "Find the coefficient of \\( x^{3} \\).",
          workingLatex: "4x^{3} \\;\\Rightarrow\\; \\text{coefficient of } x^{3} = 4",
          explanation:
            "The term containing \\( x^{3} \\) is \\( 4x^{3} \\), so the number multiplying \\( x^{3} \\) is \\( 4 \\). Note we want the coefficient of \\( x^{3} \\) specifically, not of \\( x \\) — they are different terms.",
        },
        {
          stepNumber: 4,
          description: "Identify the constant term.",
          workingLatex: "7 \\;\\Rightarrow\\; \\text{constant} = 7",
          explanation:
            "The only term with no letter is \\( 7 \\), so the constant term is \\( 7 \\). It does not matter that it is written first; a constant is identified by having no \\( x \\), not by its position.",
        },
      ],
      finalAnswer: "\\( 3 \\) terms; coefficient of \\( x \\) is \\( -\\dfrac{1}{2} \\); coefficient of \\( x^{3} \\) is \\( 4 \\); constant term is \\( 7 \\).",
    },
  },
  {
    id: "ga02-030",
    topicRef: "ga02",
    topicTitle: "Vocabulary: expressions, equations, formulae, identities",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Decide whether \\(x + x \\equiv x^{2}\\) is a correct identity. Justify your answer by testing \\(x = 2\\) and \\(x = 3\\), and state correctly what kind of statement it really is.",
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: ["vocabulary", "identity", "equation", "misconception", "testing-values"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Understand the claim.",
          workingLatex: "x + x \\equiv x^{2} \\quad \\text{(the } \\equiv \\text{ claims true for ALL } x)",
          explanation:
            "The \\( \\equiv \\) sign asserts that \\( x + x \\) equals \\( x^{2} \\) for every value of \\( x \\). To check whether that strong claim is justified, we test some values — and finding even one value where it fails disproves the identity.",
        },
        {
          stepNumber: 2,
          description: "Test \\( x = 2 \\).",
          workingLatex: "x + x = 2 + 2 = 4, \\quad x^{2} = 2^{2} = 4 \\;\\checkmark",
          explanation:
            "At \\( x = 2 \\): the left side is \\( 2 + 2 = 4 \\), and the right side is \\( 2^{2} = 4 \\). They happen to agree here. That is encouraging but not yet proof — one matching value never proves an identity.",
        },
        {
          stepNumber: 3,
          description: "Test \\( x = 3 \\).",
          workingLatex: "x + x = 3 + 3 = 6, \\quad x^{2} = 3^{2} = 9 \\;\\Rightarrow\\; 6 \\ne 9 \\;\\times",
          explanation:
            "Now try \\( x = 3 \\): the left side is \\( 3 + 3 = 6 \\), but the right side is \\( 3^{2} = 9 \\). Since \\( 6 \\ne 9 \\), the statement fails here. A single failure is enough to show it is not true for all \\( x \\).",
        },
        {
          stepNumber: 4,
          description: "Reclassify correctly.",
          workingLatex: "2x = x^{2} \\;\\Leftrightarrow\\; x^{2} - 2x = 0 \\;\\Leftrightarrow\\; x(x - 2) = 0 \\;\\Rightarrow\\; x = 0 \\text{ or } x = 2",
          explanation:
            "So the \\( \\equiv \\) sign is being used incorrectly. The left side \\( x + x \\) simplifies to \\( 2x \\), giving \\( 2x = x^{2} \\); rearranging to \\( x(x-2) = 0 \\) shows this holds only at \\( x = 0 \\) and \\( x = 2 \\). A statement true only for particular values is an equation, not an identity.",
        },
      ],
      finalAnswer: "It is NOT a correct identity: it holds at \\( x = 2 \\) (\\( 4 = 4 \\)) but fails at \\( x = 3 \\) (\\( 6 \\ne 9 \\)). Since it is only true for particular values (\\( x = 0 \\) and \\( x = 2 \\)), it is really an equation (\\( 2x = x^{2} \\)), and the \\( \\equiv \\) sign is being used incorrectly.",
    },
  },
];
