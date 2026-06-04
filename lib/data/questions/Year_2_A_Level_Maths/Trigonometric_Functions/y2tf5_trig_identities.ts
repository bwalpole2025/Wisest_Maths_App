import { Question } from "@/lib/types";

/**
 * Year 2 — Trigonometry (Y2) § 6.5 Trigonometric Identities
 * Ref: y2tf5
 * 71 questions: proofs of identities, simplification, equations reducing
 * via Pythagorean and reciprocal identities, and mixed algebra.
 */
export const questions: Question[] = [
  {
    "id": "y2tf5-001",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 14",
    "difficulty": "Standard",
    "questionText": "Prove that \\( 1 + \\tan^2\\theta \\equiv \\sec^2\\theta \\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the fundamental Pythagorean identity, true for every angle \\(\\theta\\). It is the starting point for deriving the \\(\\sec\\) and \\(\\csc\\) forms."
        },
        {
          "stepNumber": 2,
          "description": "Choose to divide by \\(\\cos^2\\theta\\).",
          "workingLatex": "\\text{divide every term by } \\cos^2\\theta",
          "explanation": "Because the target involves \\(\\sec\\) and \\(\\tan\\), both of which are built from \\(\\cos\\theta\\) in the denominator, dividing through by \\(\\cos^2\\theta\\) is the natural move. This is valid wherever \\(\\cos\\theta\\neq 0\\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide each term by \\(\\cos^2\\theta\\).",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta}",
          "explanation": "All three terms must be divided, not just one or two. A common slip is dividing only the left-hand side; every term across the equality is divided to keep it balanced."
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the first fraction as a squared ratio.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2",
          "explanation": "Since \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}=\\displaystyle\\frac{(\\sin\\theta)^2}{(\\cos\\theta)^2}\\), it equals the square of the single ratio \\(\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\). This prepares it for the quotient identity."
        },
        {
          "stepNumber": 5,
          "description": "Use the quotient identity for \\(\\tan\\).",
          "workingLatex": "\\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2 = \\tan^2\\theta",
          "explanation": "By the quotient identity \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\), the squared ratio becomes \\(\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Simplify the second fraction.",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\cos^2\\theta} = 1",
          "explanation": "A nonzero quantity divided by itself equals \\(1\\). This produces the constant term in the identity."
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the right side as a squared reciprocal.",
          "workingLatex": "\\frac{1}{\\cos^2\\theta} = \\left(\\frac{1}{\\cos\\theta}\\right)^2",
          "explanation": "The single fraction \\(\\displaystyle\\frac{1}{\\cos^2\\theta}\\) is the square of \\(\\displaystyle\\frac{1}{\\cos\\theta}\\), which sets up the reciprocal identity."
        },
        {
          "stepNumber": 8,
          "description": "Use the reciprocal identity for \\(\\sec\\).",
          "workingLatex": "\\left(\\frac{1}{\\cos\\theta}\\right)^2 = \\sec^2\\theta",
          "explanation": "By the reciprocal identity \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\), the right-hand side becomes \\(\\sec^2\\theta\\). Do not confuse \\(\\sec\\) with \\(\\displaystyle\\frac{1}{\\sin}\\), which is \\(\\csc\\)."
        },
        {
          "stepNumber": 9,
          "description": "Substitute the simplified terms back in.",
          "workingLatex": "\\tan^2\\theta + 1 = \\sec^2\\theta",
          "explanation": "Replacing each of the three terms with its simplified form turns the divided equation into a relation among \\(\\tan\\), \\(1\\) and \\(\\sec\\)."
        },
        {
          "stepNumber": 10,
          "description": "Reorder to match the required form.",
          "workingLatex": "1 + \\tan^2\\theta \\equiv \\sec^2\\theta",
          "explanation": "Addition is commutative, so writing \\(1\\) first gives the exact form requested. The proof is complete."
        }
      ],
      "finalAnswer": "\\(1 + \\tan^2\\theta \\equiv \\sec^2\\theta\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-002",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 15",
    "difficulty": "Standard",
    "questionText": "Prove \\(1 + \\cot^2\\theta \\equiv \\csc^2\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This identity holds for all \\(\\theta\\). It is the foundation from which the \\(\\cot\\) and \\(\\csc\\) form is obtained."
        },
        {
          "stepNumber": 2,
          "description": "Choose to divide by \\(\\sin^2\\theta\\).",
          "workingLatex": "\\text{divide every term by } \\sin^2\\theta",
          "explanation": "The target involves \\(\\cot\\) and \\(\\csc\\), both built from \\(\\sin\\theta\\) in the denominator, so dividing through by \\(\\sin^2\\theta\\) is the natural choice. This is valid wherever \\(\\sin\\theta\\neq 0\\)."
        },
        {
          "stepNumber": 3,
          "description": "Divide each term by \\(\\sin^2\\theta\\).",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Every term must be divided, not just one. Dividing all three keeps the equation balanced."
        },
        {
          "stepNumber": 4,
          "description": "Simplify the first fraction.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} = 1",
          "explanation": "A nonzero quantity over itself is \\(1\\), giving the constant term of the identity."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the second fraction as a squared ratio.",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\left(\\frac{\\cos\\theta}{\\sin\\theta}\\right)^2",
          "explanation": "Since \\(\\displaystyle\\frac{\\cos^2\\theta}{\\sin^2\\theta}=\\displaystyle\\frac{(\\cos\\theta)^2}{(\\sin\\theta)^2}\\), it is the square of the single ratio \\(\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Use the quotient identity for \\(\\cot\\).",
          "workingLatex": "\\left(\\frac{\\cos\\theta}{\\sin\\theta}\\right)^2 = \\cot^2\\theta",
          "explanation": "By the quotient identity \\(\\cot\\theta=\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\), the squared ratio is \\(\\cot^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the right side as a squared reciprocal.",
          "workingLatex": "\\frac{1}{\\sin^2\\theta} = \\left(\\frac{1}{\\sin\\theta}\\right)^2",
          "explanation": "The fraction \\(\\displaystyle\\frac{1}{\\sin^2\\theta}\\) is the square of \\(\\displaystyle\\frac{1}{\\sin\\theta}\\), preparing it for the reciprocal identity."
        },
        {
          "stepNumber": 8,
          "description": "Use the reciprocal identity for \\(\\csc\\).",
          "workingLatex": "\\left(\\frac{1}{\\sin\\theta}\\right)^2 = \\csc^2\\theta",
          "explanation": "By the reciprocal identity \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\), the right-hand side is \\(\\csc^2\\theta\\). Remember \\(\\csc\\) pairs with \\(\\sin\\), not \\(\\cos\\)."
        },
        {
          "stepNumber": 9,
          "description": "Substitute the simplified terms back in.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "Replacing each term with its simplified form produces the required identity exactly, completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-003",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 01",
    "difficulty": "Foundation",
    "questionText": "State and prove the standard rearrangement \\(\\sin^2\\theta = 1 - \\cos^2\\theta\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the standard Pythagorean identity, true for every angle \\(\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Subtract \\(\\cos^2\\theta\\) from both sides.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta - \\cos^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "To isolate \\(\\sin^2\\theta\\) we subtract \\(\\cos^2\\theta\\) from both sides, keeping the equation balanced."
        },
        {
          "stepNumber": 3,
          "description": "Cancel on the left-hand side.",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "On the left, \\(\\cos^2\\theta-\\cos^2\\theta=0\\), leaving \\(\\sin^2\\theta\\) alone. A common slip is a sign error: the term becomes negative once moved across, giving \\(-\\cos^2\\theta\\) on the right."
        }
      ],
      "finalAnswer": "Rearrangement of Pythagorean identity. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-004",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 41",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\tan^2\\theta - \\sin^2\\theta \\equiv \\tan^2\\theta \\sin^2\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide to work on the left-hand side.",
          "workingLatex": "\\text{LHS} = \\tan^2\\theta - \\sin^2\\theta",
          "explanation": "We start from the more complicated left-hand side and aim to transform it into the right-hand side. This is the standard strategy for proving an identity."
        },
        {
          "stepNumber": 2,
          "description": "Use the quotient identity for \\(\\tan\\).",
          "workingLatex": "\\tan^2\\theta = \\frac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "By \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\), squaring gives \\(\\tan^2\\theta=\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\). Converting to \\(\\sin\\) and \\(\\cos\\) lets us combine the terms."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the expression.",
          "workingLatex": "\\tan^2\\theta - \\sin^2\\theta = \\frac{\\sin^2\\theta}{\\cos^2\\theta} - \\sin^2\\theta",
          "explanation": "Replacing \\(\\tan^2\\theta\\) puts the whole expression in terms of \\(\\sin\\) and \\(\\cos\\) only."
        },
        {
          "stepNumber": 4,
          "description": "Write the second term over \\(\\cos^2\\theta\\).",
          "workingLatex": "\\sin^2\\theta = \\frac{\\sin^2\\theta\\cos^2\\theta}{\\cos^2\\theta}",
          "explanation": "To add the two terms we need a common denominator of \\(\\cos^2\\theta\\). Multiplying \\(\\sin^2\\theta\\) by \\(\\displaystyle\\frac{\\cos^2\\theta}{\\cos^2\\theta}\\) leaves its value unchanged. A common slip is forgetting to multiply this term."
        },
        {
          "stepNumber": 5,
          "description": "Combine over the common denominator.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} - \\frac{\\sin^2\\theta\\cos^2\\theta}{\\cos^2\\theta} = \\frac{\\sin^2\\theta - \\sin^2\\theta\\cos^2\\theta}{\\cos^2\\theta}",
          "explanation": "With matching denominators the numerators subtract directly, giving a single fraction."
        },
        {
          "stepNumber": 6,
          "description": "Factor \\(\\sin^2\\theta\\) from the numerator.",
          "workingLatex": "\\frac{\\sin^2\\theta - \\sin^2\\theta\\cos^2\\theta}{\\cos^2\\theta} = \\frac{\\sin^2\\theta\\left(1 - \\cos^2\\theta\\right)}{\\cos^2\\theta}",
          "explanation": "Both numerator terms share a factor of \\(\\sin^2\\theta\\). Factoring it out exposes the bracket \\(1-\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Apply \\(1-\\cos^2\\theta=\\sin^2\\theta\\).",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "The Pythagorean identity rearranges to \\(1-\\cos^2\\theta=\\sin^2\\theta\\). We substitute this for the bracket next."
        },
        {
          "stepNumber": 8,
          "description": "Substitute the bracket.",
          "workingLatex": "\\frac{\\sin^2\\theta\\left(1 - \\cos^2\\theta\\right)}{\\cos^2\\theta} = \\frac{\\sin^2\\theta \\cdot \\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Replacing the bracket with \\(\\sin^2\\theta\\) leaves a product of two \\(\\sin^2\\theta\\) factors in the numerator."
        },
        {
          "stepNumber": 9,
          "description": "Combine the numerator powers.",
          "workingLatex": "\\frac{\\sin^2\\theta \\cdot \\sin^2\\theta}{\\cos^2\\theta} = \\frac{\\sin^4\\theta}{\\cos^2\\theta}",
          "explanation": "Multiplying the two factors of \\(\\sin^2\\theta\\) gives \\(\\sin^4\\theta\\) on top."
        },
        {
          "stepNumber": 10,
          "description": "Split off a factor of \\(\\tan^2\\theta\\).",
          "workingLatex": "\\frac{\\sin^4\\theta}{\\cos^2\\theta} = \\frac{\\sin^2\\theta}{\\cos^2\\theta}\\cdot \\sin^2\\theta",
          "explanation": "Separating the fraction into \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\) times \\(\\sin^2\\theta\\) isolates a recognisable \\(\\tan^2\\theta\\) factor."
        },
        {
          "stepNumber": 11,
          "description": "Rewrite as \\(\\tan^2\\theta\\,\\sin^2\\theta\\).",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\cdot \\sin^2\\theta = \\tan^2\\theta\\,\\sin^2\\theta",
          "explanation": "Using \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}=\\tan^2\\theta\\) gives the right-hand side, so LHS \\(=\\) RHS and the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-005",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 16",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\cos^4\\theta - \\sin^4\\theta \\equiv \\cos^2\\theta - \\sin^2\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide to work on the left-hand side.",
          "workingLatex": "\\text{LHS} = \\cos^4\\theta - \\sin^4\\theta",
          "explanation": "We start from the left-hand side, which carries the higher powers, and aim to reduce it to the right-hand side."
        },
        {
          "stepNumber": 2,
          "description": "Write the fourth powers as squares of squares.",
          "workingLatex": "\\cos^4\\theta - \\sin^4\\theta = \\left(\\cos^2\\theta\\right)^2 - \\left(\\sin^2\\theta\\right)^2",
          "explanation": "Since \\(\\cos^4\\theta=(\\cos^2\\theta)^2\\) and \\(\\sin^4\\theta=(\\sin^2\\theta)^2\\), the expression takes the form \\(a^2-b^2\\) with \\(a=\\cos^2\\theta\\) and \\(b=\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Recall the difference of two squares.",
          "workingLatex": "a^2 - b^2 = (a-b)(a+b)",
          "explanation": "The difference of two squares factorisation will turn the expression into a product, which is the key to simplifying it."
        },
        {
          "stepNumber": 4,
          "description": "Apply the factorisation.",
          "workingLatex": "\\left(\\cos^2\\theta\\right)^2 - \\left(\\sin^2\\theta\\right)^2 = \\left(\\cos^2\\theta - \\sin^2\\theta\\right)\\left(\\cos^2\\theta + \\sin^2\\theta\\right)",
          "explanation": "Substituting \\(a=\\cos^2\\theta\\), \\(b=\\sin^2\\theta\\) gives the two brackets. A common slip is mishandling the order; keep \\(\\cos^2\\theta\\) first to match the target."
        },
        {
          "stepNumber": 5,
          "description": "State the Pythagorean identity for the second bracket.",
          "workingLatex": "\\cos^2\\theta + \\sin^2\\theta = 1",
          "explanation": "The second bracket is exactly the Pythagorean identity, so it equals \\(1\\) for every \\(\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Substitute \\(1\\) for the second bracket.",
          "workingLatex": "\\left(\\cos^2\\theta - \\sin^2\\theta\\right)\\left(\\cos^2\\theta + \\sin^2\\theta\\right) = \\left(\\cos^2\\theta - \\sin^2\\theta\\right)\\cdot 1",
          "explanation": "Replacing the second bracket with \\(1\\) is the central simplification of the proof."
        },
        {
          "stepNumber": 7,
          "description": "Multiply by \\(1\\) to finish.",
          "workingLatex": "\\left(\\cos^2\\theta - \\sin^2\\theta\\right)\\cdot 1 = \\cos^2\\theta - \\sin^2\\theta",
          "explanation": "Multiplying by \\(1\\) leaves the first bracket unchanged, giving the right-hand side and completing the proof."
        }
      ],
      "finalAnswer": "\\(= \\cos^2 - \\sin^2\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-006",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 02",
    "difficulty": "Foundation",
    "questionText": "Prove \\((\\sin\\theta + \\cos\\theta)^2 \\equiv 1 + 2\\sin\\theta\\cos\\theta\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = (\\sin\\theta + \\cos\\theta)^2",
          "explanation": "For an identity proof, begin with one side and work towards the other. Here we take the left-hand side and aim to reach \\(1 + 2\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Write the square as a product.",
          "workingLatex": "(\\sin\\theta + \\cos\\theta)(\\sin\\theta + \\cos\\theta)",
          "explanation": "Squaring means multiplying the bracket by itself. A common slip is to write \\(\\sin^2\\theta + \\cos^2\\theta\\) directly, forgetting the cross terms."
        },
        {
          "stepNumber": 3,
          "description": "Multiply the first bracket's sine term.",
          "workingLatex": "\\sin\\theta(\\sin\\theta + \\cos\\theta) = \\sin^2\\theta + \\sin\\theta\\cos\\theta",
          "explanation": "Distribute the \\(\\sin\\theta\\) from the first bracket across both terms of the second bracket. This is the first half of the full expansion."
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first bracket's cosine term.",
          "workingLatex": "\\cos\\theta(\\sin\\theta + \\cos\\theta) = \\cos\\theta\\sin\\theta + \\cos^2\\theta",
          "explanation": "Now distribute the \\(\\cos\\theta\\) from the first bracket across both terms of the second bracket. This is the second half of the expansion."
        },
        {
          "stepNumber": 5,
          "description": "Add the two partial products.",
          "workingLatex": "\\sin^2\\theta + \\sin\\theta\\cos\\theta + \\cos\\theta\\sin\\theta + \\cos^2\\theta",
          "explanation": "Collecting the results of the two distributions gives all four terms. This matches \\((a+b)^2 = a^2 + 2ab + b^2\\); the two middle products are identical."
        },
        {
          "stepNumber": 6,
          "description": "Recognise the two equal cross terms.",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\cos\\theta\\sin\\theta",
          "explanation": "Multiplication is commutative, so the two middle products are the same quantity. We can therefore add them as a single doubled term."
        },
        {
          "stepNumber": 7,
          "description": "Combine the two middle terms.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta + 2\\sin\\theta\\cos\\theta",
          "explanation": "Adding the two equal cross terms gives \\(2\\sin\\theta\\cos\\theta\\), and the squared terms are grouped together ready for the next identity."
        },
        {
          "stepNumber": 8,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "The Pythagorean identity holds for all \\(\\theta\\). It comes from the unit circle, where a point has coordinates \\((\\cos\\theta, \\sin\\theta)\\) at distance \\(1\\) from the origin."
        },
        {
          "stepNumber": 9,
          "description": "Substitute the value of the squared terms.",
          "workingLatex": "1 + 2\\sin\\theta\\cos\\theta",
          "explanation": "Replacing \\(\\sin^2\\theta + \\cos^2\\theta\\) by \\(1\\) leaves \\(1\\) plus the doubled cross term. Watch that this equals \\(1\\), not \\(0\\)."
        },
        {
          "stepNumber": 10,
          "description": "Confirm the right-hand side.",
          "workingLatex": "1 + 2\\sin\\theta\\cos\\theta = \\text{RHS}",
          "explanation": "The expression now matches the right-hand side exactly, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-007",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 03",
    "difficulty": "Foundation",
    "questionText": "Prove \\((\\sin\\theta - \\cos\\theta)^2 \\equiv 1 - 2\\sin\\theta\\cos\\theta\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = (\\sin\\theta - \\cos\\theta)^2",
          "explanation": "Begin with the left-hand side and aim to reach \\(1 - 2\\sin\\theta\\cos\\theta\\). Choosing the more complicated side to simplify is usually easier."
        },
        {
          "stepNumber": 2,
          "description": "Write the square as a product.",
          "workingLatex": "(\\sin\\theta - \\cos\\theta)(\\sin\\theta - \\cos\\theta)",
          "explanation": "Squaring means multiplying the bracket by itself. Keep careful track of the minus signs when expanding."
        },
        {
          "stepNumber": 3,
          "description": "Multiply the first bracket's sine term.",
          "workingLatex": "\\sin\\theta(\\sin\\theta - \\cos\\theta) = \\sin^2\\theta - \\sin\\theta\\cos\\theta",
          "explanation": "Distribute \\(\\sin\\theta\\) across both terms of the second bracket. The product of \\(\\sin\\theta\\) with \\(-\\cos\\theta\\) gives a negative cross term."
        },
        {
          "stepNumber": 4,
          "description": "Multiply the first bracket's cosine term.",
          "workingLatex": "-\\cos\\theta(\\sin\\theta - \\cos\\theta) = -\\cos\\theta\\sin\\theta + \\cos^2\\theta",
          "explanation": "Distribute \\(-\\cos\\theta\\) across the second bracket. Here \\((-\\cos\\theta)(-\\cos\\theta) = +\\cos^2\\theta\\); a common slip is to make this term negative."
        },
        {
          "stepNumber": 5,
          "description": "Add the two partial products.",
          "workingLatex": "\\sin^2\\theta - \\sin\\theta\\cos\\theta - \\cos\\theta\\sin\\theta + \\cos^2\\theta",
          "explanation": "Collecting the two distributions gives all four terms. This matches \\((a-b)^2 = a^2 - 2ab + b^2\\)."
        },
        {
          "stepNumber": 6,
          "description": "Recognise the two equal cross terms.",
          "workingLatex": "-\\sin\\theta\\cos\\theta = -\\cos\\theta\\sin\\theta",
          "explanation": "Multiplication is commutative, so the two negative middle products are identical and can be combined."
        },
        {
          "stepNumber": 7,
          "description": "Combine the two middle terms.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta - 2\\sin\\theta\\cos\\theta",
          "explanation": "The two equal negative cross terms combine to \\(-2\\sin\\theta\\cos\\theta\\), and the squared terms are grouped together."
        },
        {
          "stepNumber": 8,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "The Pythagorean identity holds for every angle \\(\\theta\\) and lets us replace the sum of the squared terms with \\(1\\)."
        },
        {
          "stepNumber": 9,
          "description": "Substitute the value of the squared terms.",
          "workingLatex": "1 - 2\\sin\\theta\\cos\\theta",
          "explanation": "Replacing \\(\\sin^2\\theta + \\cos^2\\theta\\) by \\(1\\) leaves \\(1\\) minus the doubled cross term."
        },
        {
          "stepNumber": 10,
          "description": "Confirm the right-hand side.",
          "workingLatex": "1 - 2\\sin\\theta\\cos\\theta = \\text{RHS}",
          "explanation": "This matches the right-hand side exactly, completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-008",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 42",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\sin^4\\theta + \\cos^4\\theta \\equiv 1 - 2\\sin^2\\theta\\cos^2\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\sin^4\\theta + \\cos^4\\theta",
          "explanation": "Begin with the left-hand side. The trick is to recognise \\(\\sin^4\\theta + \\cos^4\\theta\\) as part of a squared bracket."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite as squares of squares.",
          "workingLatex": "(\\sin^2\\theta)^2 + (\\cos^2\\theta)^2",
          "explanation": "Writing \\(\\sin^4\\theta = (\\sin^2\\theta)^2\\) makes the structure \\(a^2 + b^2\\) visible, where \\(a=\\sin^2\\theta\\) and \\(b=\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Write down the square of the sum.",
          "workingLatex": "(\\sin^2\\theta + \\cos^2\\theta)^2 = (\\sin^2\\theta)^2 + 2(\\sin^2\\theta)(\\cos^2\\theta) + (\\cos^2\\theta)^2",
          "explanation": "Apply \\((a+b)^2 = a^2 + 2ab + b^2\\) with \\(a=\\sin^2\\theta\\) and \\(b=\\cos^2\\theta\\). We will rearrange this to isolate \\(a^2+b^2\\)."
        },
        {
          "stepNumber": 4,
          "description": "Simplify the expanded square.",
          "workingLatex": "(\\sin^2\\theta + \\cos^2\\theta)^2 = \\sin^4\\theta + 2\\sin^2\\theta\\cos^2\\theta + \\cos^4\\theta",
          "explanation": "Writing \\((\\sin^2\\theta)^2 = \\sin^4\\theta\\) and \\((\\cos^2\\theta)^2 = \\cos^4\\theta\\) gives the standard expanded form. The cross term is \\(2\\sin^2\\theta\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Subtract the cross term from both sides.",
          "workingLatex": "(\\sin^2\\theta + \\cos^2\\theta)^2 - 2\\sin^2\\theta\\cos^2\\theta = \\sin^4\\theta + \\cos^4\\theta",
          "explanation": "Removing the cross term from the expanded square leaves exactly \\(\\sin^4\\theta + \\cos^4\\theta\\) on the right. A common slip is to forget this subtraction and equate \\(\\sin^4+\\cos^4\\) directly to the square."
        },
        {
          "stepNumber": 6,
          "description": "Read off the sum of fourth powers.",
          "workingLatex": "\\sin^4\\theta + \\cos^4\\theta = (\\sin^2\\theta + \\cos^2\\theta)^2 - 2\\sin^2\\theta\\cos^2\\theta",
          "explanation": "This rearranges the previous line so the left-hand side of the original identity is expressed via the squared bracket. Now we can simplify the bracket."
        },
        {
          "stepNumber": 7,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "Use \\(\\sin^2\\theta + \\cos^2\\theta \\equiv 1\\) for the bracket that is being squared. This identity holds for all \\(\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Substitute the value of the bracket.",
          "workingLatex": "(1)^2 - 2\\sin^2\\theta\\cos^2\\theta",
          "explanation": "Replacing the bracket with \\(1\\) leaves \\(1^2\\) minus the cross term. Remember to square the \\(1\\) rather than dropping the power."
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the squared one.",
          "workingLatex": "1 - 2\\sin^2\\theta\\cos^2\\theta",
          "explanation": "Since \\(1^2 = 1\\), the expression simplifies to \\(1\\) minus the cross term."
        },
        {
          "stepNumber": 10,
          "description": "Confirm the right-hand side.",
          "workingLatex": "1 - 2\\sin^2\\theta\\cos^2\\theta = \\text{RHS}",
          "explanation": "This is exactly the right-hand side, so the identity is proved."
        }
      ],
      "finalAnswer": "\\(= 1 - 2\\sin^2\\cos^2\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-009",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 04",
    "difficulty": "Foundation",
    "questionText": "Prove \\(\\displaystyle\\frac{1 - \\cos^2\\theta}{\\sin\\theta} \\equiv \\sin\\theta\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\frac{1 - \\cos^2\\theta}{\\sin\\theta}",
          "explanation": "Begin with the left-hand side. The numerator can be rewritten using the Pythagorean identity."
        },
        {
          "stepNumber": 2,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "The Pythagorean identity holds for all \\(\\theta\\). We will rearrange it to express \\(1 - \\cos^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the numerator.",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "Subtracting \\(\\cos^2\\theta\\) from both sides gives \\(1 - \\cos^2\\theta = \\sin^2\\theta\\). A common slip is to write \\(1 - \\cos^2\\theta = \\cos^2\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Replace the numerator.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin\\theta}",
          "explanation": "Substituting \\(1-\\cos^2\\theta = \\sin^2\\theta\\) turns the fraction into \\(\\sin^2\\theta\\) over \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Write the numerator as a product.",
          "workingLatex": "\\frac{\\sin\\theta \\cdot \\sin\\theta}{\\sin\\theta}",
          "explanation": "Writing \\(\\sin^2\\theta = \\sin\\theta \\cdot \\sin\\theta\\) exposes the common factor of \\(\\sin\\theta\\) shared with the denominator."
        },
        {
          "stepNumber": 6,
          "description": "Cancel one factor of sine.",
          "workingLatex": "\\frac{\\sin\\theta \\cdot \\sin\\theta}{\\sin\\theta} = \\sin\\theta",
          "explanation": "Dividing top and bottom by \\(\\sin\\theta\\) leaves \\(\\sin\\theta\\), valid where \\(\\sin\\theta \\neq 0\\)."
        },
        {
          "stepNumber": 7,
          "description": "Confirm the right-hand side.",
          "workingLatex": "\\sin\\theta = \\text{RHS}",
          "explanation": "This equals the right-hand side, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-010",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 05",
    "difficulty": "Foundation",
    "questionText": "Prove \\(\\displaystyle\\frac{\\cos\\theta}{1 - \\sin^2\\theta} \\equiv \\sec\\theta\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\frac{\\cos\\theta}{1 - \\sin^2\\theta}",
          "explanation": "Begin with the left-hand side and aim to reach \\(\\sec\\theta\\). The denominator can be simplified using the Pythagorean identity."
        },
        {
          "stepNumber": 2,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta \\equiv 1",
          "explanation": "The Pythagorean identity holds for all \\(\\theta\\). We will rearrange it to express \\(1 - \\sin^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the denominator.",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "Subtracting \\(\\sin^2\\theta\\) from both sides gives \\(1 - \\sin^2\\theta = \\cos^2\\theta\\). A common slip is to confuse this with \\(1-\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Replace the denominator.",
          "workingLatex": "\\frac{\\cos\\theta}{\\cos^2\\theta}",
          "explanation": "Substituting \\(1-\\sin^2\\theta = \\cos^2\\theta\\) turns the denominator into \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Write the denominator as a product.",
          "workingLatex": "\\frac{\\cos\\theta}{\\cos\\theta \\cdot \\cos\\theta}",
          "explanation": "Writing \\(\\cos^2\\theta = \\cos\\theta \\cdot \\cos\\theta\\) exposes the common factor of \\(\\cos\\theta\\) shared with the numerator."
        },
        {
          "stepNumber": 6,
          "description": "Cancel one factor of cosine.",
          "workingLatex": "\\frac{\\cos\\theta}{\\cos\\theta \\cdot \\cos\\theta} = \\frac{1}{\\cos\\theta}",
          "explanation": "Cancelling one \\(\\cos\\theta\\) from top and bottom leaves \\(\\displaystyle\\frac{1}{\\cos\\theta}\\), valid where \\(\\cos\\theta \\neq 0\\)."
        },
        {
          "stepNumber": 7,
          "description": "Apply the reciprocal identity.",
          "workingLatex": "\\frac{1}{\\cos\\theta} = \\sec\\theta",
          "explanation": "By definition \\(\\sec\\theta \\equiv \\displaystyle\\frac{1}{\\cos\\theta}\\), so the fraction becomes \\(\\sec\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Confirm the right-hand side.",
          "workingLatex": "\\sec\\theta = \\text{RHS}",
          "explanation": "This is the right-hand side, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-011",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 06",
    "difficulty": "Foundation",
    "questionText": "Simplify \\((1 - \\sin\\theta)(1 + \\sin\\theta)\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the structure as a conjugate pair",
          "workingLatex": "(1 - \\sin\\theta)(1 + \\sin\\theta)",
          "explanation": "The two brackets differ only in the sign between the terms, so they form a conjugate pair of the form \\((a-b)(a+b)\\). Spotting this lets us avoid a full term-by-term expansion."
        },
        {
          "stepNumber": 2,
          "description": "Match the terms to a and b",
          "workingLatex": "a = 1, \\quad b = \\sin\\theta",
          "explanation": "Comparing with \\((a-b)(a+b)\\), the first term gives \\(a=1\\) and the second gives \\(b=\\sin\\theta\\). Naming \\(a\\) and \\(b\\) explicitly keeps the next step error-free."
        },
        {
          "stepNumber": 3,
          "description": "Apply the difference of two squares",
          "workingLatex": "(a - b)(a + b) = a^2 - b^2",
          "explanation": "The product of a conjugate pair always collapses to \\(a^2-b^2\\) because the two cross terms \\(-ab\\) and \\(+ab\\) cancel. A common slip is to keep these middle terms."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the matched values back in",
          "workingLatex": "(1 - \\sin\\theta)(1 + \\sin\\theta) = (1)^2 - (\\sin\\theta)^2",
          "explanation": "Replacing \\(a\\) with \\(1\\) and \\(b\\) with \\(\\sin\\theta\\) gives \\((1)^2-(\\sin\\theta)^2\\). The square applies to the whole of \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the squared terms",
          "workingLatex": "= 1 - \\sin^2\\theta",
          "explanation": "Since \\(1^2=1\\) and \\((\\sin\\theta)^2=\\sin^2\\theta\\), the expression becomes \\(1-\\sin^2\\theta\\). Note \\(\\sin^2\\theta\\) means \\((\\sin\\theta)^2\\), not \\(\\sin(\\theta^2)\\)."
        },
        {
          "stepNumber": 6,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The Pythagorean identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\) holds for every \\(\\theta\\). We will rearrange it to deal with the \\(1-\\sin^2\\theta\\) we have produced."
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the identity to isolate the target",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "Subtracting \\(\\sin^2\\theta\\) from both sides of \\(\\sin^2\\theta+\\cos^2\\theta=1\\) gives \\(1-\\sin^2\\theta=\\cos^2\\theta\\). A common error is to write \\(\\cos\\theta\\) instead of \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "State the simplified result",
          "workingLatex": "(1 - \\sin\\theta)(1 + \\sin\\theta) = \\cos^2\\theta",
          "explanation": "The fully simplified single-term answer is \\(\\cos^2\\theta\\). This is the cleanest equivalent form of the original product."
        }
      ],
      "finalAnswer": "\\(\\cos^2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-012",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 07",
    "difficulty": "Foundation",
    "questionText": "Simplify \\((1 - \\cos\\theta)(1 + \\cos\\theta)\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the structure as a conjugate pair",
          "workingLatex": "(1 - \\cos\\theta)(1 + \\cos\\theta)",
          "explanation": "The two brackets differ only in the sign between the terms, so they form a conjugate pair of the form \\((a-b)(a+b)\\). Spotting this avoids a full term-by-term expansion."
        },
        {
          "stepNumber": 2,
          "description": "Match the terms to a and b",
          "workingLatex": "a = 1, \\quad b = \\cos\\theta",
          "explanation": "Comparing with \\((a-b)(a+b)\\), the first term gives \\(a=1\\) and the second gives \\(b=\\cos\\theta\\). Naming \\(a\\) and \\(b\\) explicitly keeps the next step error-free."
        },
        {
          "stepNumber": 3,
          "description": "Apply the difference of two squares",
          "workingLatex": "(a - b)(a + b) = a^2 - b^2",
          "explanation": "The product of a conjugate pair always collapses to \\(a^2-b^2\\) because the cross terms \\(-ab\\) and \\(+ab\\) cancel. A common slip is to keep these middle terms."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the matched values back in",
          "workingLatex": "(1 - \\cos\\theta)(1 + \\cos\\theta) = (1)^2 - (\\cos\\theta)^2",
          "explanation": "Replacing \\(a\\) with \\(1\\) and \\(b\\) with \\(\\cos\\theta\\) gives \\((1)^2-(\\cos\\theta)^2\\). The square applies to the whole of \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the squared terms",
          "workingLatex": "= 1 - \\cos^2\\theta",
          "explanation": "Since \\(1^2=1\\) and \\((\\cos\\theta)^2=\\cos^2\\theta\\), the expression becomes \\(1-\\cos^2\\theta\\). Remember \\(\\cos^2\\theta\\) means \\((\\cos\\theta)^2\\)."
        },
        {
          "stepNumber": 6,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The Pythagorean identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\) holds for every \\(\\theta\\). We will rearrange it to deal with the \\(1-\\cos^2\\theta\\) we have produced."
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the identity to isolate the target",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "Subtracting \\(\\cos^2\\theta\\) from both sides of \\(\\sin^2\\theta+\\cos^2\\theta=1\\) gives \\(1-\\cos^2\\theta=\\sin^2\\theta\\). A common error is to drop the square and write \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "State the simplified result",
          "workingLatex": "(1 - \\cos\\theta)(1 + \\cos\\theta) = \\sin^2\\theta",
          "explanation": "The fully simplified single-term answer is \\(\\sin^2\\theta\\). This is the cleanest equivalent form of the original product."
        }
      ],
      "finalAnswer": "\\(\\sin^2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-013",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 17",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\sec\\theta - \\cos\\theta\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the reciprocal identity for secant",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "The reciprocal identity \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\) lets us convert the secant to cosine. A common slip is to confuse \\(\\sec\\theta\\) with \\(\\displaystyle\\frac{1}{\\sin\\theta}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the expression in cosine only",
          "workingLatex": "\\sec\\theta - \\cos\\theta = \\frac{1}{\\cos\\theta} - \\cos\\theta",
          "explanation": "Substituting the identity expresses everything in terms of \\(\\cos\\theta\\), which is the single function we will work with throughout."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the lone cosine as a fraction",
          "workingLatex": "\\cos\\theta = \\frac{\\cos\\theta \\cdot \\cos\\theta}{\\cos\\theta} = \\frac{\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "Multiplying \\(\\cos\\theta\\) by \\(\\displaystyle\\frac{\\cos\\theta}{\\cos\\theta}\\) gives it the denominator \\(\\cos\\theta\\). Forgetting to square \\(\\cos\\theta\\) in the numerator is a frequent error."
        },
        {
          "stepNumber": 4,
          "description": "Write both terms over the common denominator",
          "workingLatex": "\\frac{1}{\\cos\\theta} - \\cos\\theta = \\frac{1}{\\cos\\theta} - \\frac{\\cos^2\\theta}{\\cos\\theta}",
          "explanation": "Both fractions now share the denominator \\(\\cos\\theta\\), so they are ready to be combined into one fraction."
        },
        {
          "stepNumber": 5,
          "description": "Subtract the numerators",
          "workingLatex": "= \\frac{1 - \\cos^2\\theta}{\\cos\\theta}",
          "explanation": "With a common denominator the numerators subtract directly to give \\(1-\\cos^2\\theta\\). Keep the denominator unchanged when combining."
        },
        {
          "stepNumber": 6,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The Pythagorean identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\) will let us replace the numerator \\(1-\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the identity for the numerator",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "Subtracting \\(\\cos^2\\theta\\) from both sides gives \\(1-\\cos^2\\theta=\\sin^2\\theta\\). Watch the sign: it is \\(1-\\cos^2\\), giving \\(+\\sin^2\\), not \\(-\\sin^2\\)."
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the fraction",
          "workingLatex": "\\frac{1 - \\cos^2\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta}",
          "explanation": "Replacing the numerator gives \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos\\theta}\\). This is already simpler, but it can be written as a neat product."
        },
        {
          "stepNumber": 9,
          "description": "Split off one factor of sine",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos\\theta} = \\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Writing \\(\\sin^2\\theta\\) as \\(\\sin\\theta\\cdot\\sin\\theta\\) lets one factor of \\(\\sin\\theta\\) stay outside while the remaining \\(\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\) can be named."
        },
        {
          "stepNumber": 10,
          "description": "State the quotient identity for tangent",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta",
          "explanation": "The quotient identity \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\) identifies the remaining fraction as \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "State the simplified result",
          "workingLatex": "\\sec\\theta - \\cos\\theta = \\sin\\theta\\tan\\theta",
          "explanation": "Substituting \\(\\tan\\theta\\) for the fraction gives the simplified product \\(\\sin\\theta\\tan\\theta\\)."
        }
      ],
      "finalAnswer": "\\(\\sin\\theta \\tan\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-014",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 18",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\csc\\theta - \\sin\\theta\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the reciprocal identity for cosecant",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "The reciprocal identity \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\) lets us convert the cosecant to sine. A common slip is to confuse \\(\\csc\\theta\\) with \\(\\displaystyle\\frac{1}{\\cos\\theta}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the expression in sine only",
          "workingLatex": "\\csc\\theta - \\sin\\theta = \\frac{1}{\\sin\\theta} - \\sin\\theta",
          "explanation": "Substituting the identity expresses everything in terms of \\(\\sin\\theta\\), which is the single function we will work with throughout."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the lone sine as a fraction",
          "workingLatex": "\\sin\\theta = \\frac{\\sin\\theta \\cdot \\sin\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta}",
          "explanation": "Multiplying \\(\\sin\\theta\\) by \\(\\displaystyle\\frac{\\sin\\theta}{\\sin\\theta}\\) gives it the denominator \\(\\sin\\theta\\). Forgetting to square \\(\\sin\\theta\\) in the numerator is a frequent error."
        },
        {
          "stepNumber": 4,
          "description": "Write both terms over the common denominator",
          "workingLatex": "\\frac{1}{\\sin\\theta} - \\sin\\theta = \\frac{1}{\\sin\\theta} - \\frac{\\sin^2\\theta}{\\sin\\theta}",
          "explanation": "Both fractions now share the denominator \\(\\sin\\theta\\), so they are ready to be combined into one fraction."
        },
        {
          "stepNumber": 5,
          "description": "Subtract the numerators",
          "workingLatex": "= \\frac{1 - \\sin^2\\theta}{\\sin\\theta}",
          "explanation": "With a common denominator the numerators subtract directly to give \\(1-\\sin^2\\theta\\). Keep the denominator unchanged when combining."
        },
        {
          "stepNumber": 6,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The Pythagorean identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\) will let us replace the numerator \\(1-\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the identity for the numerator",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "Subtracting \\(\\sin^2\\theta\\) from both sides gives \\(1-\\sin^2\\theta=\\cos^2\\theta\\). Watch the sign: it is \\(1-\\sin^2\\), giving \\(+\\cos^2\\), not \\(-\\cos^2\\)."
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the fraction",
          "workingLatex": "\\frac{1 - \\sin^2\\theta}{\\sin\\theta} = \\frac{\\cos^2\\theta}{\\sin\\theta}",
          "explanation": "Replacing the numerator gives \\(\\displaystyle\\frac{\\cos^2\\theta}{\\sin\\theta}\\). This is already simpler, but it can be written as a neat product."
        },
        {
          "stepNumber": 9,
          "description": "Split off one factor of cosine",
          "workingLatex": "\\frac{\\cos^2\\theta}{\\sin\\theta} = \\cos\\theta \\cdot \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Writing \\(\\cos^2\\theta\\) as \\(\\cos\\theta\\cdot\\cos\\theta\\) lets one factor of \\(\\cos\\theta\\) stay outside while the remaining \\(\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\) can be named."
        },
        {
          "stepNumber": 10,
          "description": "State the quotient identity for cotangent",
          "workingLatex": "\\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta",
          "explanation": "The quotient identity \\(\\cot\\theta=\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\) identifies the remaining fraction as \\(\\cot\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "State the simplified result",
          "workingLatex": "\\csc\\theta - \\sin\\theta = \\cos\\theta\\cot\\theta",
          "explanation": "Substituting \\(\\cot\\theta\\) for the fraction gives the simplified product \\(\\cos\\theta\\cot\\theta\\)."
        }
      ],
      "finalAnswer": "\\(\\cos\\theta \\cot\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-015",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 19",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\tan\\theta + \\cot\\theta\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the quotient identity for tangent",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The quotient identity \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\) rewrites tangent in sine and cosine, the common language for combining the two terms."
        },
        {
          "stepNumber": 2,
          "description": "State the quotient identity for cotangent",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "The quotient identity \\(\\cot\\theta=\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\) is the reciprocal arrangement. A common slip is to swap them, writing \\(\\cot\\theta\\) as \\(\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\)."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the sum in sine and cosine",
          "workingLatex": "\\tan\\theta + \\cot\\theta = \\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Substituting both identities turns the sum into two fractions, ready to be combined over a common denominator."
        },
        {
          "stepNumber": 4,
          "description": "Identify the common denominator",
          "workingLatex": "\\text{common denominator} = \\sin\\theta\\cos\\theta",
          "explanation": "The denominators \\(\\cos\\theta\\) and \\(\\sin\\theta\\) share no factors, so the lowest common denominator is their product \\(\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Scale the first fraction",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\sin\\theta \\cdot \\sin\\theta}{\\cos\\theta\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiplying top and bottom by \\(\\sin\\theta\\) reaches the common denominator. Multiply the numerator by the same factor used on the denominator."
        },
        {
          "stepNumber": 6,
          "description": "Scale the second fraction",
          "workingLatex": "\\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\cos\\theta \\cdot \\cos\\theta}{\\sin\\theta\\cos\\theta} = \\frac{\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiplying top and bottom by \\(\\cos\\theta\\) reaches the same common denominator \\(\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Write both fractions over one denominator",
          "workingLatex": "\\tan\\theta + \\cot\\theta = \\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta} + \\frac{\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Both terms now share the denominator \\(\\sin\\theta\\cos\\theta\\) and are ready to be combined."
        },
        {
          "stepNumber": 8,
          "description": "Add the numerators",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "With a shared denominator the numerators add directly to give \\(\\sin^2\\theta+\\cos^2\\theta\\). Do not add the denominators together."
        },
        {
          "stepNumber": 9,
          "description": "State the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The Pythagorean identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\) is exactly the numerator we have, so it can be replaced by \\(1\\)."
        },
        {
          "stepNumber": 10,
          "description": "Replace the numerator with one",
          "workingLatex": "\\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "Substituting \\(1\\) for the numerator is the key simplification, leaving a single tidy fraction."
        },
        {
          "stepNumber": 11,
          "description": "Split into reciprocal factors",
          "workingLatex": "\\frac{1}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta} \\cdot \\frac{1}{\\cos\\theta}",
          "explanation": "Separating the single fraction into a product of two reciprocals lets each factor be named using a reciprocal identity."
        },
        {
          "stepNumber": 12,
          "description": "State the reciprocal identities",
          "workingLatex": "\\frac{1}{\\sin\\theta} = \\csc\\theta, \\quad \\frac{1}{\\cos\\theta} = \\sec\\theta",
          "explanation": "The reciprocal identities \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\) and \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\) name each factor."
        },
        {
          "stepNumber": 13,
          "description": "State the simplified result",
          "workingLatex": "\\tan\\theta + \\cot\\theta = \\sec\\theta\\csc\\theta",
          "explanation": "Combining the two reciprocals gives \\(\\sec\\theta\\csc\\theta\\). The order of the factors does not matter, so \\(\\csc\\theta\\sec\\theta\\) is equally valid."
        }
      ],
      "finalAnswer": "\\(\\sec\\theta\\csc\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-016",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 43",
    "difficulty": "Challenge",
    "questionText": "Simplify \\(\\tan\\theta - \\cot\\theta\\) in terms of \\(\\sin 2\\theta\\)-free form.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Replace the tangent term",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Apply the quotient identity \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\). Writing each reciprocal-type ratio in terms of \\(\\sin\\theta\\) and \\(\\cos\\theta\\) is the standard first move for simplifying mixed trig expressions."
        },
        {
          "stepNumber": 2,
          "description": "Replace the cotangent term",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Apply the quotient identity \\(\\cot\\theta=\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\). A common slip is writing \\(\\cot\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\); remember cotangent is cosine over sine, the reciprocal of tangent."
        },
        {
          "stepNumber": 3,
          "description": "Substitute both ratios into the expression",
          "workingLatex": "\\tan\\theta - \\cot\\theta = \\frac{\\sin\\theta}{\\cos\\theta} - \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Combine the two replacements into the original difference. The expression is now a subtraction of two simple fractions in \\(\\sin\\theta\\) and \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Identify the common denominator",
          "workingLatex": "\\text{LCD of } \\cos\\theta \\text{ and } \\sin\\theta = \\sin\\theta\\cos\\theta",
          "explanation": "The two denominators \\(\\cos\\theta\\) and \\(\\sin\\theta\\) share no common factor, so the lowest common denominator is their product \\(\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Rescale the first fraction",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta}\\cdot\\frac{\\sin\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply top and bottom by \\(\\sin\\theta\\), the factor this fraction is missing, so its denominator becomes the LCD. Multiplying by \\(\\displaystyle\\frac{\\sin\\theta}{\\sin\\theta}=1\\) does not change the value."
        },
        {
          "stepNumber": 6,
          "description": "Rescale the second fraction",
          "workingLatex": "\\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}\\cdot\\frac{\\cos\\theta}{\\cos\\theta} = \\frac{\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply top and bottom by \\(\\cos\\theta\\), the factor this fraction is missing, so it too has denominator \\(\\sin\\theta\\cos\\theta\\). Both fractions now share the LCD."
        },
        {
          "stepNumber": 7,
          "description": "Combine over the shared denominator",
          "workingLatex": "= \\frac{\\sin^2\\theta - \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Subtract the numerators over the common denominator \\(\\sin\\theta\\cos\\theta\\). Keep the subtraction order: the \\(\\sin^2\\theta\\) term came from \\(\\tan\\theta\\), so it stays first in the numerator."
        },
        {
          "stepNumber": 8,
          "description": "State the simplified form",
          "workingLatex": "\\tan\\theta - \\cot\\theta = \\frac{\\sin^2\\theta - \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "This is the required form built only from \\(\\sin\\theta\\) and \\(\\cos\\theta\\), free of \\(\\sin 2\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Cross-check with double-angle identities",
          "workingLatex": "\\sin^2\\theta - \\cos^2\\theta = -\\cos 2\\theta, \\quad \\sin\\theta\\cos\\theta = \\frac12\\sin 2\\theta \\;\\Rightarrow\\; -2\\cot 2\\theta",
          "explanation": "As a sanity check, \\(\\sin^2\\theta-\\cos^2\\theta=-\\cos 2\\theta\\) and \\(\\sin\\theta\\cos\\theta=\\displaystyle\\frac12\\sin 2\\theta\\), so the expression equals \\(-2\\cot 2\\theta\\). This confirms the algebra without changing the required answer."
        }
      ],
      "finalAnswer": "\\(\\displaystyle\\frac{\\sin^2\\theta - \\cos^2\\theta}{\\sin\\theta\\cos\\theta}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-017",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 44",
    "difficulty": "Challenge",
    "questionText": "Simplify \\(\\displaystyle\\frac{1 - \\cos\\theta}{\\sin\\theta} + \\displaystyle\\frac{\\sin\\theta}{1 - \\cos\\theta}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the two denominators",
          "workingLatex": "\\frac{1 - \\cos\\theta}{\\sin\\theta} + \\frac{\\sin\\theta}{1 - \\cos\\theta}",
          "explanation": "The two fractions have denominators \\(\\sin\\theta\\) and \\(1-\\cos\\theta\\). Before adding, we must put them over a common denominator; adding the numerators directly would be a serious slip."
        },
        {
          "stepNumber": 2,
          "description": "Choose the lowest common denominator",
          "workingLatex": "\\text{LCD} = \\sin\\theta\\,(1 - \\cos\\theta)",
          "explanation": "The denominators \\(\\sin\\theta\\) and \\(1-\\cos\\theta\\) share no common factor, so the lowest common denominator is simply their product."
        },
        {
          "stepNumber": 3,
          "description": "Rescale the first fraction",
          "workingLatex": "\\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{(1 - \\cos\\theta)(1 - \\cos\\theta)}{\\sin\\theta\\,(1 - \\cos\\theta)} = \\frac{(1 - \\cos\\theta)^2}{\\sin\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "Multiply top and bottom by \\((1-\\cos\\theta)\\), the missing factor, so its denominator becomes the LCD. The numerator becomes \\((1-\\cos\\theta)^2\\)."
        },
        {
          "stepNumber": 4,
          "description": "Rescale the second fraction",
          "workingLatex": "\\frac{\\sin\\theta}{1 - \\cos\\theta} = \\frac{\\sin\\theta\\cdot\\sin\\theta}{(1 - \\cos\\theta)\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "Multiply top and bottom by \\(\\sin\\theta\\), the missing factor, so its denominator also becomes the LCD. The numerator becomes \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Combine into a single fraction",
          "workingLatex": "= \\frac{(1 - \\cos\\theta)^2 + \\sin^2\\theta}{\\sin\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "With a shared denominator, add the numerators. Keep the bracket on \\((1-\\cos\\theta)^2\\) so you square the whole expression, not just part of it."
        },
        {
          "stepNumber": 6,
          "description": "Expand the squared bracket",
          "workingLatex": "(1 - \\cos\\theta)^2 = 1 - 2\\cos\\theta + \\cos^2\\theta",
          "explanation": "Use \\((a-b)^2=a^2-2ab+b^2\\) with \\(a=1\\) and \\(b=\\cos\\theta\\). A frequent error is dropping the middle term \\(-2\\cos\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the expansion into the numerator",
          "workingLatex": "= \\frac{1 - 2\\cos\\theta + \\cos^2\\theta + \\sin^2\\theta}{\\sin\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "Replace \\((1-\\cos\\theta)^2\\) by its expansion. The numerator now contains both \\(\\cos^2\\theta\\) and \\(\\sin^2\\theta\\), ready for the Pythagorean identity."
        },
        {
          "stepNumber": 8,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "\\cos^2\\theta + \\sin^2\\theta = 1",
          "explanation": "The identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\) lets us collapse the two squared terms in the numerator to \\(1\\)."
        },
        {
          "stepNumber": 9,
          "description": "Replace the squared terms by 1",
          "workingLatex": "= \\frac{1 - 2\\cos\\theta + 1}{\\sin\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "Substituting \\(\\cos^2\\theta+\\sin^2\\theta=1\\) leaves the numerator as \\(1-2\\cos\\theta+1\\)."
        },
        {
          "stepNumber": 10,
          "description": "Collect the constant terms",
          "workingLatex": "= \\frac{2 - 2\\cos\\theta}{\\sin\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "Combine \\(1+1=2\\) in the numerator. The expression is now a single fraction with numerator \\(2-2\\cos\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "Factor the numerator",
          "workingLatex": "= \\frac{2(1 - \\cos\\theta)}{\\sin\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "Take out the common factor \\(2\\) so the numerator shows the bracket \\((1-\\cos\\theta)\\). Spotting this shared factor is the key to cancelling against the denominator."
        },
        {
          "stepNumber": 12,
          "description": "Cancel the common factor",
          "workingLatex": "= \\frac{2}{\\sin\\theta}",
          "explanation": "Cancel \\((1-\\cos\\theta)\\) from top and bottom, valid where \\(\\cos\\theta\\neq1\\). Cancelling a whole bracket like this is allowed because it is a factor, not a term."
        },
        {
          "stepNumber": 13,
          "description": "Rewrite with the reciprocal identity",
          "workingLatex": "= 2\\csc\\theta",
          "explanation": "Use the reciprocal identity \\(\\displaystyle\\frac{1}{\\sin\\theta}=\\csc\\theta\\) to express the result compactly as \\(2\\csc\\theta\\)."
        }
      ],
      "finalAnswer": "\\(2\\csc\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-018",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 20",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\cos^2\\theta}{1 - \\sin\\theta}\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The Pythagorean identity links \\(\\sin\\theta\\) and \\(\\cos\\theta\\). We will use it to convert the \\(\\cos^2\\theta\\) numerator into an expression in \\(\\sin\\theta\\) that can share a factor with the denominator."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for the numerator",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "Subtract \\(\\sin^2\\theta\\) from both sides to isolate \\(\\cos^2\\theta\\). This rewrites the numerator as a difference of two squares in \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Factor the difference of two squares",
          "workingLatex": "1 - \\sin^2\\theta = (1 - \\sin\\theta)(1 + \\sin\\theta)",
          "explanation": "Treat it as \\(1^2-(\\sin\\theta)^2\\) and use \\(a^2-b^2=(a-b)(a+b)\\). One factor is \\((1-\\sin\\theta)\\), which matches the denominator."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the factored numerator",
          "workingLatex": "\\frac{\\cos^2\\theta}{1 - \\sin\\theta} = \\frac{(1 - \\sin\\theta)(1 + \\sin\\theta)}{1 - \\sin\\theta}",
          "explanation": "Place the factored form over the original denominator. The factor \\((1-\\sin\\theta)\\) now appears in both numerator and denominator."
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "= 1 + \\sin\\theta",
          "explanation": "Cancel the bracket \\((1-\\sin\\theta)\\) from top and bottom, valid where \\(\\sin\\theta\\neq1\\). A common slip is cancelling only one term inside a factor instead of the whole bracket."
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\frac{\\cos^2\\theta}{1 - \\sin\\theta} = 1 + \\sin\\theta",
          "explanation": "The surviving factor \\(1+\\sin\\theta\\) is the simplest form. As a quick check, multiplying \\((1+\\sin\\theta)(1-\\sin\\theta)=1-\\sin^2\\theta=\\cos^2\\theta\\) recovers the original numerator."
        }
      ],
      "finalAnswer": "\\(1 + \\sin\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-019",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 21",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\sin^2\\theta}{1 + \\cos\\theta}\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The Pythagorean identity links \\(\\sin\\theta\\) and \\(\\cos\\theta\\). We use it to turn the \\(\\sin^2\\theta\\) numerator into an expression in \\(\\cos\\theta\\) that shares a factor with the denominator."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for the numerator",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "Subtract \\(\\cos^2\\theta\\) from both sides to isolate \\(\\sin^2\\theta\\). This rewrites the numerator as a difference of two squares in \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Factor the difference of two squares",
          "workingLatex": "1 - \\cos^2\\theta = (1 - \\cos\\theta)(1 + \\cos\\theta)",
          "explanation": "Treat it as \\(1^2-(\\cos\\theta)^2\\) and use \\(a^2-b^2=(a-b)(a+b)\\). The factor \\((1+\\cos\\theta)\\) matches the denominator, enabling cancellation."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the factored numerator",
          "workingLatex": "\\frac{\\sin^2\\theta}{1 + \\cos\\theta} = \\frac{(1 - \\cos\\theta)(1 + \\cos\\theta)}{1 + \\cos\\theta}",
          "explanation": "Place the factored form over the original denominator. The factor \\((1+\\cos\\theta)\\) is now common to top and bottom."
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "= 1 - \\cos\\theta",
          "explanation": "Cancel the bracket \\((1+\\cos\\theta)\\) from top and bottom, valid where \\(\\cos\\theta\\neq-1\\). Be careful to keep the surviving factor as \\((1-\\cos\\theta)\\), not \\((1+\\cos\\theta)\\)."
        },
        {
          "stepNumber": 6,
          "description": "State the simplified result",
          "workingLatex": "\\frac{\\sin^2\\theta}{1 + \\cos\\theta} = 1 - \\cos\\theta",
          "explanation": "The surviving factor \\(1-\\cos\\theta\\) is the simplest form. As a check, \\((1-\\cos\\theta)(1+\\cos\\theta)=1-\\cos^2\\theta=\\sin^2\\theta\\) recovers the original numerator."
        }
      ],
      "finalAnswer": "\\(1 - \\cos\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-020",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 45",
    "difficulty": "Challenge",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\sec\\theta - 1}{\\sec\\theta + 1}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reciprocal identity",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Use the reciprocal identity \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\) so the whole expression can be built from cosine only. A common slip is to confuse \\(\\sec\\theta\\) with \\(\\csc\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Substitute secant in the numerator",
          "workingLatex": "\\sec\\theta - 1 = \\frac{1}{\\cos\\theta} - 1",
          "explanation": "Replace \\(\\sec\\theta\\) in the top by \\(\\displaystyle\\frac{1}{\\cos\\theta}\\). The numerator is now a difference involving an inner fraction."
        },
        {
          "stepNumber": 3,
          "description": "Substitute secant in the denominator",
          "workingLatex": "\\sec\\theta + 1 = \\frac{1}{\\cos\\theta} + 1",
          "explanation": "Replace \\(\\sec\\theta\\) in the bottom by \\(\\displaystyle\\frac{1}{\\cos\\theta}\\) as well, so the whole expression is in terms of \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Write the compound fraction",
          "workingLatex": "\\frac{\\sec\\theta - 1}{\\sec\\theta + 1} = \\frac{\\frac{1}{\\cos\\theta} - 1}{\\frac{1}{\\cos\\theta} + 1}",
          "explanation": "Combine the two substitutions. This produces a fraction of fractions, with \\(\\cos\\theta\\) appearing in the inner denominators."
        },
        {
          "stepNumber": 5,
          "description": "Multiply top and bottom by cosine",
          "workingLatex": "= \\frac{\\left(\\frac{1}{\\cos\\theta} - 1\\right)\\cos\\theta}{\\left(\\frac{1}{\\cos\\theta} + 1\\right)\\cos\\theta}",
          "explanation": "Multiplying numerator and denominator by the same factor \\(\\cos\\theta\\) does not change the value, and it will clear the inner fractions. This is the standard way to tidy a compound fraction."
        },
        {
          "stepNumber": 6,
          "description": "Distribute cosine in the numerator",
          "workingLatex": "\\left(\\frac{1}{\\cos\\theta} - 1\\right)\\cos\\theta = 1 - \\cos\\theta",
          "explanation": "Here \\(\\displaystyle\\frac{1}{\\cos\\theta}\\cdot\\cos\\theta=1\\) and \\(-1\\cdot\\cos\\theta=-\\cos\\theta\\). Make sure the \\(\\cos\\theta\\) multiplies every term inside the bracket."
        },
        {
          "stepNumber": 7,
          "description": "Distribute cosine in the denominator",
          "workingLatex": "\\left(\\frac{1}{\\cos\\theta} + 1\\right)\\cos\\theta = 1 + \\cos\\theta",
          "explanation": "Similarly \\(\\displaystyle\\frac{1}{\\cos\\theta}\\cdot\\cos\\theta=1\\) and \\(1\\cdot\\cos\\theta=\\cos\\theta\\), giving \\(1+\\cos\\theta\\) on the bottom."
        },
        {
          "stepNumber": 8,
          "description": "Assemble the cleared fraction",
          "workingLatex": "= \\frac{1 - \\cos\\theta}{1 + \\cos\\theta}",
          "explanation": "Substituting the two distributed results gives a single clean fraction in \\(\\cos\\theta\\), with no inner fractions remaining."
        },
        {
          "stepNumber": 9,
          "description": "State the simplified form",
          "workingLatex": "\\frac{\\sec\\theta - 1}{\\sec\\theta + 1} = \\frac{1 - \\cos\\theta}{1 + \\cos\\theta}",
          "explanation": "This is the simplest cosine-only form. It cannot be reduced further without extra context, so leave it as a single fraction."
        }
      ],
      "finalAnswer": "\\(\\displaystyle\\frac{1 - \\cos\\theta}{1 + \\cos\\theta}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-021",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 46",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\tan\\theta + \\sec\\theta \\equiv \\displaystyle\\frac{1}{\\sec\\theta - \\tan\\theta}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal of the proof.",
          "workingLatex": "\\text{Show } \\tan\\theta + \\sec\\theta = \\frac{1}{\\sec\\theta - \\tan\\theta}",
          "explanation": "An identity must be shown to hold for all valid \\(\\theta\\). We will start from one side and transform it into the other, rather than assuming the result and working backwards."
        },
        {
          "stepNumber": 2,
          "description": "Choose the side to work on.",
          "workingLatex": "\\text{RHS} = \\frac{1}{\\sec\\theta - \\tan\\theta}",
          "explanation": "It is easier to manipulate the side that is already a single fraction, so we work on the RHS until it matches the LHS. A common slip is cross-multiplying both sides at once, which assumes the very thing being proved."
        },
        {
          "stepNumber": 3,
          "description": "Identify the conjugate of the denominator.",
          "workingLatex": "\\text{conjugate of } (\\sec\\theta - \\tan\\theta) = \\sec\\theta + \\tan\\theta",
          "explanation": "The conjugate of a difference \\(a-b\\) is the sum \\(a+b\\). Multiplying a difference by its conjugate produces a difference of squares, which is what we want here."
        },
        {
          "stepNumber": 4,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "= \\frac{1}{\\sec\\theta - \\tan\\theta} \\times \\frac{\\sec\\theta + \\tan\\theta}{\\sec\\theta + \\tan\\theta}",
          "explanation": "The extra factor \\(\\displaystyle\\frac{\\sec\\theta + \\tan\\theta}{\\sec\\theta + \\tan\\theta}\\) equals \\(1\\), so the value is unchanged. This is the standard trick for clearing a difference of trig terms."
        },
        {
          "stepNumber": 5,
          "description": "Multiply the numerators together.",
          "workingLatex": "\\text{numerator} = 1 \\times (\\sec\\theta + \\tan\\theta) = \\sec\\theta + \\tan\\theta",
          "explanation": "The top of the first fraction is \\(1\\), so multiplying gives simply \\(\\sec\\theta + \\tan\\theta\\) on top."
        },
        {
          "stepNumber": 6,
          "description": "Write the result as a single fraction.",
          "workingLatex": "= \\frac{\\sec\\theta + \\tan\\theta}{(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta)}",
          "explanation": "Collecting numerator over denominator keeps the denominator as a product of conjugates, ready to expand. Keep the brackets intact for the next step."
        },
        {
          "stepNumber": 7,
          "description": "Expand the denominator (difference of squares).",
          "workingLatex": "(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = \\sec^2\\theta - \\tan^2\\theta",
          "explanation": "Using \\((a-b)(a+b)=a^2-b^2\\) with \\(a=\\sec\\theta\\) and \\(b=\\tan\\theta\\). The cross terms \\(+\\sec\\theta\\tan\\theta\\) and \\(-\\sec\\theta\\tan\\theta\\) cancel, so do not expand them by hand and risk a sign error."
        },
        {
          "stepNumber": 8,
          "description": "Substitute the expanded denominator.",
          "workingLatex": "= \\frac{\\sec\\theta + \\tan\\theta}{\\sec^2\\theta - \\tan^2\\theta}",
          "explanation": "Replacing the bracketed product by \\(\\sec^2\\theta - \\tan^2\\theta\\) leaves a fraction we can simplify using a Pythagorean identity."
        },
        {
          "stepNumber": 9,
          "description": "Recall the relevant Pythagorean identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This is the secant form of the Pythagorean identity, obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Rearrange to evaluate the denominator.",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtracting \\(\\tan^2\\theta\\) from both sides of \\(1+\\tan^2\\theta=\\sec^2\\theta\\) gives this. Students often misremember it as \\(\\tan^2\\theta-\\sec^2\\theta=1\\), which has the wrong sign."
        },
        {
          "stepNumber": 11,
          "description": "Substitute the denominator equals one.",
          "workingLatex": "= \\frac{\\sec\\theta + \\tan\\theta}{1}",
          "explanation": "Replacing the denominator by \\(1\\) leaves just the numerator, because any quantity divided by \\(1\\) is itself."
        },
        {
          "stepNumber": 12,
          "description": "Simplify the fraction.",
          "workingLatex": "= \\sec\\theta + \\tan\\theta",
          "explanation": "Dividing by \\(1\\) does nothing, so we are left with the numerator on its own."
        },
        {
          "stepNumber": 13,
          "description": "Reorder to match the left-hand side.",
          "workingLatex": "= \\tan\\theta + \\sec\\theta = \\text{LHS}",
          "explanation": "Addition is commutative, so \\(\\sec\\theta+\\tan\\theta\\) is the same as \\(\\tan\\theta+\\sec\\theta\\). Since RHS \\(=\\) LHS, the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-022",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 47",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\cot\\theta + \\csc\\theta \\equiv \\displaystyle\\frac{1}{\\csc\\theta - \\cot\\theta}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity",
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the goal of the proof.",
          "workingLatex": "\\text{Show } \\cot\\theta + \\csc\\theta = \\frac{1}{\\csc\\theta - \\cot\\theta}",
          "explanation": "We must show this holds for all valid \\(\\theta\\). The plan is to start from one side and transform it into the other, not to assume equality and cross-multiply."
        },
        {
          "stepNumber": 2,
          "description": "Choose the side to work on.",
          "workingLatex": "\\text{RHS} = \\frac{1}{\\csc\\theta - \\cot\\theta}",
          "explanation": "We work on the single-fraction RHS and aim to reach the LHS \\(\\cot\\theta+\\csc\\theta\\). A common slip is mixing up \\(\\csc\\) and \\(\\sec\\); note this proof uses the cosec form throughout."
        },
        {
          "stepNumber": 3,
          "description": "Identify the conjugate of the denominator.",
          "workingLatex": "\\text{conjugate of } (\\csc\\theta - \\cot\\theta) = \\csc\\theta + \\cot\\theta",
          "explanation": "The conjugate of a difference \\(a-b\\) is the sum \\(a+b\\). Multiplying by it will create a difference of squares in the denominator."
        },
        {
          "stepNumber": 4,
          "description": "Multiply top and bottom by the conjugate.",
          "workingLatex": "= \\frac{1}{\\csc\\theta - \\cot\\theta} \\times \\frac{\\csc\\theta + \\cot\\theta}{\\csc\\theta + \\cot\\theta}",
          "explanation": "Multiplying by \\(\\displaystyle\\frac{\\csc\\theta + \\cot\\theta}{\\csc\\theta + \\cot\\theta}\\) is multiplying by \\(1\\), so the value is unchanged."
        },
        {
          "stepNumber": 5,
          "description": "Multiply the numerators together.",
          "workingLatex": "\\text{numerator} = 1 \\times (\\csc\\theta + \\cot\\theta) = \\csc\\theta + \\cot\\theta",
          "explanation": "The top of the first fraction is \\(1\\), so the numerator becomes simply \\(\\csc\\theta + \\cot\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Write the result as a single fraction.",
          "workingLatex": "= \\frac{\\csc\\theta + \\cot\\theta}{(\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta)}",
          "explanation": "Hold the denominator as a product of conjugates, ready to expand. Keep the brackets together for the next step."
        },
        {
          "stepNumber": 7,
          "description": "Expand the denominator (difference of squares).",
          "workingLatex": "(\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta) = \\csc^2\\theta - \\cot^2\\theta",
          "explanation": "Apply \\((a-b)(a+b)=a^2-b^2\\) with \\(a=\\csc\\theta\\) and \\(b=\\cot\\theta\\). The cross terms cancel, so no sign errors should creep in."
        },
        {
          "stepNumber": 8,
          "description": "Substitute the expanded denominator.",
          "workingLatex": "= \\frac{\\csc\\theta + \\cot\\theta}{\\csc^2\\theta - \\cot^2\\theta}",
          "explanation": "Replacing the bracketed product gives a fraction ready to simplify with a Pythagorean identity."
        },
        {
          "stepNumber": 9,
          "description": "Recall the relevant Pythagorean identity.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This is the cosec form of the Pythagorean identity, obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Rearrange to evaluate the denominator.",
          "workingLatex": "\\csc^2\\theta - \\cot^2\\theta = 1",
          "explanation": "Subtracting \\(\\cot^2\\theta\\) from both sides of \\(1+\\cot^2\\theta=\\csc^2\\theta\\) gives this. Take care: this is the cosec form, not \\(1+\\tan^2\\theta=\\sec^2\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "Substitute the denominator equals one.",
          "workingLatex": "= \\frac{\\csc\\theta + \\cot\\theta}{1}",
          "explanation": "With the denominator equal to \\(1\\), only the numerator remains."
        },
        {
          "stepNumber": 12,
          "description": "Simplify the fraction.",
          "workingLatex": "= \\csc\\theta + \\cot\\theta",
          "explanation": "Dividing by \\(1\\) does nothing, leaving the numerator on its own."
        },
        {
          "stepNumber": 13,
          "description": "Reorder to match the left-hand side.",
          "workingLatex": "= \\cot\\theta + \\csc\\theta = \\text{LHS}",
          "explanation": "Reordering the sum (addition is commutative) gives exactly \\(\\cot\\theta+\\csc\\theta\\). Since RHS \\(=\\) LHS, the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-023",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 22",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\sin\\theta(\\tan\\theta + \\cot\\theta) \\equiv \\sec\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\sin\\theta\\left(\\tan\\theta + \\cot\\theta\\right)",
          "explanation": "We aim to transform the LHS into the RHS \\(\\sec\\theta\\). Converting everything to \\(\\sin\\theta\\) and \\(\\cos\\theta\\) is the safest route for trig proofs."
        },
        {
          "stepNumber": 2,
          "description": "State the quotient identity for tan.",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The quotient identity for tangent has \\(\\sin\\) on top. Inverting it is a frequent slip."
        },
        {
          "stepNumber": 3,
          "description": "State the quotient identity for cot.",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cotangent is the reciprocal of tangent, so it has \\(\\cos\\) on top. Keep this distinct from \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute inside the bracket.",
          "workingLatex": "= \\sin\\theta\\left(\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}\\right)",
          "explanation": "Replace each function by its sin/cos form. The expression in the bracket is now a sum of two fractions, ready to combine."
        },
        {
          "stepNumber": 5,
          "description": "Find the common denominator inside the bracket.",
          "workingLatex": "\\text{common denominator} = \\sin\\theta\\cos\\theta",
          "explanation": "The denominators \\(\\cos\\theta\\) and \\(\\sin\\theta\\) have least common denominator \\(\\sin\\theta\\cos\\theta\\). Each fraction must be rescaled to this denominator before adding."
        },
        {
          "stepNumber": 6,
          "description": "Rewrite each fraction over the common denominator.",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta} + \\frac{\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply the first fraction top and bottom by \\(\\sin\\theta\\) and the second by \\(\\cos\\theta\\). This is where the squared terms appear."
        },
        {
          "stepNumber": 7,
          "description": "Add the two fractions.",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "With a common denominator, add the numerators. Do not forget the \\(\\sin\\theta\\) factor still waiting outside the bracket."
        },
        {
          "stepNumber": 8,
          "description": "Reattach the outside factor.",
          "workingLatex": "= \\sin\\theta \\cdot \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "The \\(\\sin\\theta\\) that was multiplying the bracket now multiplies the combined fraction."
        },
        {
          "stepNumber": 9,
          "description": "Apply the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The fundamental identity collapses the numerator to \\(1\\). This is the heart of the proof."
        },
        {
          "stepNumber": 10,
          "description": "Substitute the numerator equals one.",
          "workingLatex": "= \\sin\\theta \\cdot \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "Replacing \\(\\sin^2\\theta+\\cos^2\\theta\\) by \\(1\\) simplifies the fraction considerably."
        },
        {
          "stepNumber": 11,
          "description": "Multiply the outside factor into the fraction.",
          "workingLatex": "= \\frac{\\sin\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiplying \\(\\sin\\theta\\) by \\(\\displaystyle\\frac{1}{\\sin\\theta\\cos\\theta}\\) places \\(\\sin\\theta\\) on the numerator."
        },
        {
          "stepNumber": 12,
          "description": "Cancel the common factor of sin.",
          "workingLatex": "= \\frac{1}{\\cos\\theta}",
          "explanation": "One \\(\\sin\\theta\\) on top cancels the \\(\\sin\\theta\\) on the bottom (valid since \\(\\sin\\theta\\neq0\\)). Do not cancel the \\(\\cos\\theta\\) as well."
        },
        {
          "stepNumber": 13,
          "description": "Rewrite as sec to match the RHS.",
          "workingLatex": "= \\sec\\theta = \\text{RHS}",
          "explanation": "By the reciprocal identity \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\). Since LHS \\(=\\) RHS, the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-024",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 23",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\cos\\theta(\\tan\\theta + \\cot\\theta) \\equiv \\csc\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\cos\\theta\\left(\\tan\\theta + \\cot\\theta\\right)",
          "explanation": "We aim to transform the LHS into the RHS \\(\\csc\\theta\\). Rewriting everything in terms of \\(\\sin\\theta\\) and \\(\\cos\\theta\\) is the reliable approach."
        },
        {
          "stepNumber": 2,
          "description": "State the quotient identity for tan.",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The quotient identity for tangent has \\(\\sin\\) on top. Swapping numerator and denominator is a common error."
        },
        {
          "stepNumber": 3,
          "description": "State the quotient identity for cot.",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Cotangent has \\(\\cos\\) on top, being the reciprocal of tangent. Keep it distinct from \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute inside the bracket.",
          "workingLatex": "= \\cos\\theta\\left(\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}\\right)",
          "explanation": "Each function is replaced by its sin/cos form, leaving a sum of two fractions in the bracket."
        },
        {
          "stepNumber": 5,
          "description": "Find the common denominator inside the bracket.",
          "workingLatex": "\\text{common denominator} = \\sin\\theta\\cos\\theta",
          "explanation": "The denominators \\(\\cos\\theta\\) and \\(\\sin\\theta\\) have least common denominator \\(\\sin\\theta\\cos\\theta\\). Each fraction is rescaled to this before adding."
        },
        {
          "stepNumber": 6,
          "description": "Rewrite each fraction over the common denominator.",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta} + \\frac{\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply the first fraction top and bottom by \\(\\sin\\theta\\) and the second by \\(\\cos\\theta\\). The squared terms appear here."
        },
        {
          "stepNumber": 7,
          "description": "Add the two fractions.",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "With a common denominator, add the numerators. Remember the \\(\\cos\\theta\\) factor still waiting outside the bracket."
        },
        {
          "stepNumber": 8,
          "description": "Reattach the outside factor.",
          "workingLatex": "= \\cos\\theta \\cdot \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "The \\(\\cos\\theta\\) that was multiplying the bracket now multiplies the combined fraction."
        },
        {
          "stepNumber": 9,
          "description": "Apply the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The fundamental identity reduces the numerator to \\(1\\). This is the key step."
        },
        {
          "stepNumber": 10,
          "description": "Substitute the numerator equals one.",
          "workingLatex": "= \\cos\\theta \\cdot \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "Replacing \\(\\sin^2\\theta+\\cos^2\\theta\\) by \\(1\\) simplifies the fraction."
        },
        {
          "stepNumber": 11,
          "description": "Multiply the outside factor into the fraction.",
          "workingLatex": "= \\frac{\\cos\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiplying \\(\\cos\\theta\\) by \\(\\displaystyle\\frac{1}{\\sin\\theta\\cos\\theta}\\) places \\(\\cos\\theta\\) on the numerator."
        },
        {
          "stepNumber": 12,
          "description": "Cancel the common factor of cos.",
          "workingLatex": "= \\frac{1}{\\sin\\theta}",
          "explanation": "The \\(\\cos\\theta\\) on top cancels the \\(\\cos\\theta\\) on the bottom (valid since \\(\\cos\\theta\\neq0\\)). Do not also cancel the \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 13,
          "description": "Rewrite as cosec to match the RHS.",
          "workingLatex": "= \\csc\\theta = \\text{RHS}",
          "explanation": "By the reciprocal identity \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\). Since LHS \\(=\\) RHS, the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-025",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 24",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\displaystyle\\frac{1 + \\tan^2\\theta}{1 + \\cot^2\\theta} \\equiv \\tan^2\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\frac{1 + \\tan^2\\theta}{1 + \\cot^2\\theta}",
          "explanation": "We simplify the LHS down to \\(\\tan^2\\theta\\). Both the numerator and the denominator match a Pythagorean identity."
        },
        {
          "stepNumber": 2,
          "description": "State the secant Pythagorean identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "Obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\cos^2\\theta\\). This replaces the numerator."
        },
        {
          "stepNumber": 3,
          "description": "State the cosec Pythagorean identity.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "Obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\sin^2\\theta\\). Pairing matters: \\(\\tan\\) goes with \\(\\sec\\), and \\(\\cot\\) goes with \\(\\csc\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute both identities into the fraction.",
          "workingLatex": "= \\frac{\\sec^2\\theta}{\\csc^2\\theta}",
          "explanation": "The fraction is now a ratio of two reciprocal-squared functions, which is easy to convert to sin and cos."
        },
        {
          "stepNumber": 5,
          "description": "State the reciprocal identity for sec squared.",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Since \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\), squaring gives \\(\\displaystyle\\frac{1}{\\cos^2\\theta}\\). Remember to square the denominator too."
        },
        {
          "stepNumber": 6,
          "description": "State the reciprocal identity for cosec squared.",
          "workingLatex": "\\csc^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Since \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\), squaring gives \\(\\displaystyle\\frac{1}{\\sin^2\\theta}\\). A common slip is forgetting to square the denominator."
        },
        {
          "stepNumber": 7,
          "description": "Write the ratio as a complex fraction.",
          "workingLatex": "= \\frac{\\frac{1}{\\cos^2\\theta}}{\\frac{1}{\\sin^2\\theta}}",
          "explanation": "Substituting both forms gives a fraction divided by a fraction. Dividing by a fraction means multiplying by its reciprocal."
        },
        {
          "stepNumber": 8,
          "description": "Multiply by the reciprocal of the bottom fraction.",
          "workingLatex": "= \\frac{1}{\\cos^2\\theta} \\times \\frac{\\sin^2\\theta}{1}",
          "explanation": "Flip the denominator fraction \\(\\displaystyle\\frac{1}{\\sin^2\\theta}\\) to \\(\\displaystyle\\frac{\\sin^2\\theta}{1}\\) and multiply."
        },
        {
          "stepNumber": 9,
          "description": "Carry out the multiplication.",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Multiplying numerators and denominators, the \\(1\\)s disappear, leaving \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\)."
        },
        {
          "stepNumber": 10,
          "description": "Express as a single squared quotient.",
          "workingLatex": "= \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right)^2",
          "explanation": "A ratio of squares equals the square of the ratio, which sets up the quotient identity for tangent."
        },
        {
          "stepNumber": 11,
          "description": "Rewrite as tan squared to match the RHS.",
          "workingLatex": "= \\tan^2\\theta = \\text{RHS}",
          "explanation": "Since \\(\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta\\), the square is \\(\\tan^2\\theta\\). LHS \\(=\\) RHS, so the identity is proved."
        }
      ],
      "finalAnswer": "\\(= \\tan^2\\theta\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-026",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 25",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\sec^2\\theta + \\csc^2\\theta \\equiv \\sec^2\\theta\\csc^2\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\sec^2\\theta + \\csc^2\\theta",
          "explanation": "We work on the more complicated side and aim to reach the right-hand side. A common slip is trying to manipulate both sides at once."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the secant term.",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}",
          "explanation": "By the reciprocal identity \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\), so squaring gives \\(\\displaystyle\\frac{1}{\\cos^2\\theta}\\). Treat each reciprocal term separately to avoid errors."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the cosecant term.",
          "workingLatex": "\\csc^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "By the reciprocal identity \\(\\csc\\theta = \\displaystyle\\frac{1}{\\sin\\theta}\\). Watch that \\(\\csc\\theta\\) pairs with \\(\\sin\\theta\\), not \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute both reciprocal forms.",
          "workingLatex": "= \\frac{1}{\\cos^2\\theta} + \\frac{1}{\\sin^2\\theta}",
          "explanation": "Replace each term in the LHS with the fraction found above. We now have a sum of two fractions to combine."
        },
        {
          "stepNumber": 5,
          "description": "Identify the common denominator.",
          "workingLatex": "\\text{common denominator} = \\sin^2\\theta\\cos^2\\theta",
          "explanation": "The lowest common denominator of \\(\\cos^2\\theta\\) and \\(\\sin^2\\theta\\) is their product \\(\\sin^2\\theta\\cos^2\\theta\\). Naming it first keeps the rescaling tidy."
        },
        {
          "stepNumber": 6,
          "description": "Rescale the first fraction.",
          "workingLatex": "\\frac{1}{\\cos^2\\theta} = \\frac{\\sin^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Multiply numerator and denominator by the missing factor \\(\\sin^2\\theta\\). A common slip is forgetting to also multiply the numerator."
        },
        {
          "stepNumber": 7,
          "description": "Rescale the second fraction.",
          "workingLatex": "\\frac{1}{\\sin^2\\theta} = \\frac{\\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Multiply numerator and denominator by the missing factor \\(\\cos^2\\theta\\). Both fractions now share the common denominator."
        },
        {
          "stepNumber": 8,
          "description": "Write the rescaled sum.",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\sin^2\\theta\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Both terms now sit over the same denominator, ready to be added as a single fraction."
        },
        {
          "stepNumber": 9,
          "description": "Add the two fractions.",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Combine over the single denominator. Keep the numerator as a sum for now so the Pythagorean identity is visible."
        },
        {
          "stepNumber": 10,
          "description": "Use the Pythagorean identity.",
          "workingLatex": "= \\frac{1}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "By the Pythagorean identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\), the numerator becomes \\(1\\). This is the key simplification of the proof."
        },
        {
          "stepNumber": 11,
          "description": "Split into a product of reciprocals.",
          "workingLatex": "= \\frac{1}{\\cos^2\\theta} \\cdot \\frac{1}{\\sin^2\\theta}",
          "explanation": "Factor the single fraction as a product of two reciprocal squares so we can rename them. Order of the factors does not matter."
        },
        {
          "stepNumber": 12,
          "description": "Rewrite using reciprocal identities.",
          "workingLatex": "= \\sec^2\\theta\\,\\csc^2\\theta = \\text{RHS}",
          "explanation": "Again \\(\\displaystyle\\frac{1}{\\cos^2\\theta} = \\sec^2\\theta\\) and \\(\\displaystyle\\frac{1}{\\sin^2\\theta} = \\csc^2\\theta\\), giving the right-hand side and completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-027",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 48",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\displaystyle\\frac{\\sin\\theta \\tan\\theta}{1 - \\cos\\theta} \\equiv 1 + \\sec\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\frac{\\sin\\theta\\,\\tan\\theta}{1 - \\cos\\theta}",
          "explanation": "Begin with the more complicated left-hand side. The plan is to convert to sines and cosines, then use a difference of squares."
        },
        {
          "stepNumber": 2,
          "description": "State the quotient identity for tan.",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Recall the quotient identity \\(\\tan\\theta = \\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\). Converting everything to sin and cos is the standard first move in trig proofs."
        },
        {
          "stepNumber": 3,
          "description": "Substitute tan into the numerator.",
          "workingLatex": "= \\frac{\\sin\\theta\\cdot\\frac{\\sin\\theta}{\\cos\\theta}}{1 - \\cos\\theta}",
          "explanation": "Replace \\(\\tan\\theta\\) by \\(\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\) inside the numerator only. The denominator \\(1-\\cos\\theta\\) is untouched."
        },
        {
          "stepNumber": 4,
          "description": "Multiply the numerator factors.",
          "workingLatex": "= \\frac{\\frac{\\sin^2\\theta}{\\cos\\theta}}{1 - \\cos\\theta}",
          "explanation": "Multiply \\(\\sin\\theta\\) by \\(\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\) to get \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos\\theta}\\). Keep the \\(\\cos\\theta\\) in the denominator of the numerator for now."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the compound fraction as a division.",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\cos\\theta} \\div (1 - \\cos\\theta)",
          "explanation": "A fraction over a quantity means dividing by that quantity. Writing it as an explicit division clarifies the next step."
        },
        {
          "stepNumber": 6,
          "description": "Simplify the compound fraction.",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\cos\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "Dividing by \\((1-\\cos\\theta)\\) multiplies the denominator by it. A common slip is to lose the \\(\\cos\\theta\\) factor when tidying the stacked fraction."
        },
        {
          "stepNumber": 7,
          "description": "State the Pythagorean rearrangement.",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "Rearranging the Pythagorean identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) gives \\(\\sin^2\\theta = 1 - \\cos^2\\theta\\). This sets up a difference of squares."
        },
        {
          "stepNumber": 8,
          "description": "Replace sin squared in the numerator.",
          "workingLatex": "= \\frac{1 - \\cos^2\\theta}{\\cos\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "Substitute the rearranged identity into the numerator only. The denominator is unchanged."
        },
        {
          "stepNumber": 9,
          "description": "Factor the difference of squares.",
          "workingLatex": "= \\frac{(1 - \\cos\\theta)(1 + \\cos\\theta)}{\\cos\\theta\\,(1 - \\cos\\theta)}",
          "explanation": "Since \\(1 - \\cos^2\\theta = (1-\\cos\\theta)(1+\\cos\\theta)\\). Spotting this factorisation lets the \\((1-\\cos\\theta)\\) terms cancel."
        },
        {
          "stepNumber": 10,
          "description": "Cancel the common factor.",
          "workingLatex": "= \\frac{1 + \\cos\\theta}{\\cos\\theta}",
          "explanation": "Cancel \\((1-\\cos\\theta)\\) from top and bottom. This is valid because \\(1-\\cos\\theta \\neq 0\\) where the identity is defined."
        },
        {
          "stepNumber": 11,
          "description": "Split the fraction into two terms.",
          "workingLatex": "= \\frac{1}{\\cos\\theta} + \\frac{\\cos\\theta}{\\cos\\theta}",
          "explanation": "Separate the single fraction term by term over \\(\\cos\\theta\\). A common slip is to split only one term and forget the other."
        },
        {
          "stepNumber": 12,
          "description": "Simplify the second term.",
          "workingLatex": "= \\frac{1}{\\cos\\theta} + 1",
          "explanation": "Here \\(\\displaystyle\\frac{\\cos\\theta}{\\cos\\theta} = 1\\). Only the first term still needs renaming."
        },
        {
          "stepNumber": 13,
          "description": "Use the reciprocal identity for sec.",
          "workingLatex": "= \\sec\\theta + 1 = 1 + \\sec\\theta = \\text{RHS}",
          "explanation": "Here \\(\\displaystyle\\frac{1}{\\cos\\theta} = \\sec\\theta\\), and reordering the sum gives \\(1 + \\sec\\theta\\), the right-hand side, completing the proof."
        }
      ],
      "finalAnswer": "\\(= \\sec\\theta + 1\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-028",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 49",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\displaystyle\\frac{\\cos\\theta \\cot\\theta}{1 - \\sin\\theta} \\equiv 1 + \\csc\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\frac{\\cos\\theta\\,\\cot\\theta}{1 - \\sin\\theta}",
          "explanation": "Begin with the more complicated left-hand side. The plan mirrors the sin/cos version: convert, then use a difference of squares."
        },
        {
          "stepNumber": 2,
          "description": "State the quotient identity for cot.",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Recall the quotient identity \\(\\cot\\theta = \\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\). Converting to sin and cos is the standard opening move."
        },
        {
          "stepNumber": 3,
          "description": "Substitute cot into the numerator.",
          "workingLatex": "= \\frac{\\cos\\theta\\cdot\\frac{\\cos\\theta}{\\sin\\theta}}{1 - \\sin\\theta}",
          "explanation": "Replace \\(\\cot\\theta\\) by \\(\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\) inside the numerator only. The denominator \\(1-\\sin\\theta\\) is untouched."
        },
        {
          "stepNumber": 4,
          "description": "Multiply the numerator factors.",
          "workingLatex": "= \\frac{\\frac{\\cos^2\\theta}{\\sin\\theta}}{1 - \\sin\\theta}",
          "explanation": "Multiply \\(\\cos\\theta\\) by \\(\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\) to get \\(\\displaystyle\\frac{\\cos^2\\theta}{\\sin\\theta}\\). Keep the \\(\\sin\\theta\\) denominator inside for now."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the compound fraction as a division.",
          "workingLatex": "= \\frac{\\cos^2\\theta}{\\sin\\theta} \\div (1 - \\sin\\theta)",
          "explanation": "A fraction over a quantity means dividing by that quantity. Writing it as an explicit division clarifies the next step."
        },
        {
          "stepNumber": 6,
          "description": "Simplify the compound fraction.",
          "workingLatex": "= \\frac{\\cos^2\\theta}{\\sin\\theta\\,(1 - \\sin\\theta)}",
          "explanation": "Dividing by \\((1-\\sin\\theta)\\) multiplies the denominator by it. A common slip is dropping the \\(\\sin\\theta\\) factor when tidying."
        },
        {
          "stepNumber": 7,
          "description": "State the Pythagorean rearrangement.",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "Rearranging the Pythagorean identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) gives \\(\\cos^2\\theta = 1 - \\sin^2\\theta\\). This sets up a difference of squares."
        },
        {
          "stepNumber": 8,
          "description": "Replace cos squared in the numerator.",
          "workingLatex": "= \\frac{1 - \\sin^2\\theta}{\\sin\\theta\\,(1 - \\sin\\theta)}",
          "explanation": "Substitute the rearranged identity into the numerator only. The denominator is unchanged."
        },
        {
          "stepNumber": 9,
          "description": "Factor the difference of squares.",
          "workingLatex": "= \\frac{(1 - \\sin\\theta)(1 + \\sin\\theta)}{\\sin\\theta\\,(1 - \\sin\\theta)}",
          "explanation": "Since \\(1 - \\sin^2\\theta = (1-\\sin\\theta)(1+\\sin\\theta)\\). This lets the \\((1-\\sin\\theta)\\) terms cancel."
        },
        {
          "stepNumber": 10,
          "description": "Cancel the common factor.",
          "workingLatex": "= \\frac{1 + \\sin\\theta}{\\sin\\theta}",
          "explanation": "Cancel \\((1-\\sin\\theta)\\) from top and bottom, valid wherever \\(1-\\sin\\theta \\neq 0\\)."
        },
        {
          "stepNumber": 11,
          "description": "Split the fraction into two terms.",
          "workingLatex": "= \\frac{1}{\\sin\\theta} + \\frac{\\sin\\theta}{\\sin\\theta}",
          "explanation": "Separate term by term over \\(\\sin\\theta\\). A common slip is to split only one of the two terms."
        },
        {
          "stepNumber": 12,
          "description": "Simplify the second term.",
          "workingLatex": "= \\frac{1}{\\sin\\theta} + 1",
          "explanation": "Here \\(\\displaystyle\\frac{\\sin\\theta}{\\sin\\theta} = 1\\). Only the first term still needs renaming."
        },
        {
          "stepNumber": 13,
          "description": "Use the reciprocal identity for csc.",
          "workingLatex": "= \\csc\\theta + 1 = 1 + \\csc\\theta = \\text{RHS}",
          "explanation": "Here \\(\\displaystyle\\frac{1}{\\sin\\theta} = \\csc\\theta\\), and reordering the sum gives \\(1 + \\csc\\theta\\), the right-hand side, completing the proof."
        }
      ],
      "finalAnswer": "\\(= 1 + \\csc\\theta\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-029",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 50",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\displaystyle\\frac{1 + \\cos\\theta}{1 - \\cos\\theta} \\equiv (\\csc\\theta + \\cot\\theta)^2\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\frac{1 + \\cos\\theta}{1 - \\cos\\theta}",
          "explanation": "Begin with the left-hand side. The right-hand side is a square, so we aim to make the left a perfect square fraction."
        },
        {
          "stepNumber": 2,
          "description": "Choose a multiplier equal to one.",
          "workingLatex": "\\frac{1 + \\cos\\theta}{1 + \\cos\\theta} = 1",
          "explanation": "We will multiply by \\(\\displaystyle\\frac{1+\\cos\\theta}{1+\\cos\\theta}\\), which equals \\(1\\) so the value is unchanged. It is chosen to create \\(1-\\cos^2\\theta\\) in the denominator."
        },
        {
          "stepNumber": 3,
          "description": "Multiply top and bottom by that factor.",
          "workingLatex": "= \\frac{(1 + \\cos\\theta)}{(1 - \\cos\\theta)}\\cdot\\frac{(1 + \\cos\\theta)}{(1 + \\cos\\theta)}",
          "explanation": "Apply the multiplier to the fraction. This pairs \\((1-\\cos\\theta)\\) with \\((1+\\cos\\theta)\\) in the denominator."
        },
        {
          "stepNumber": 4,
          "description": "Combine the products.",
          "workingLatex": "= \\frac{(1 + \\cos\\theta)^2}{(1 - \\cos\\theta)(1 + \\cos\\theta)}",
          "explanation": "The numerator becomes a perfect square; the denominator is a difference of squares. A common slip is to square only the numerator and forget to expand the denominator."
        },
        {
          "stepNumber": 5,
          "description": "Expand the denominator.",
          "workingLatex": "= \\frac{(1 + \\cos\\theta)^2}{1 - \\cos^2\\theta}",
          "explanation": "Using \\((1-\\cos\\theta)(1+\\cos\\theta) = 1 - \\cos^2\\theta\\). This is the difference of two squares."
        },
        {
          "stepNumber": 6,
          "description": "State the Pythagorean rearrangement.",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "Rearranging \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) gives \\(1 - \\cos^2\\theta = \\sin^2\\theta\\), a perfect square in the denominator."
        },
        {
          "stepNumber": 7,
          "description": "Replace the denominator via Pythagoras.",
          "workingLatex": "= \\frac{(1 + \\cos\\theta)^2}{\\sin^2\\theta}",
          "explanation": "Substitute \\(\\sin^2\\theta\\) for \\(1-\\cos^2\\theta\\). Now both top and bottom are squares."
        },
        {
          "stepNumber": 8,
          "description": "Write as a single squared fraction.",
          "workingLatex": "= \\left(\\frac{1 + \\cos\\theta}{\\sin\\theta}\\right)^2",
          "explanation": "Since numerator and denominator are both squares, the whole fraction is the square of \\(\\displaystyle\\frac{1+\\cos\\theta}{\\sin\\theta}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Split the inner fraction.",
          "workingLatex": "= \\left(\\frac{1}{\\sin\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}\\right)^2",
          "explanation": "Separate the inside term by term over \\(\\sin\\theta\\). Keep the whole bracket squared throughout."
        },
        {
          "stepNumber": 10,
          "description": "Rename the first inner term.",
          "workingLatex": "= \\left(\\csc\\theta + \\frac{\\cos\\theta}{\\sin\\theta}\\right)^2",
          "explanation": "By the reciprocal identity \\(\\displaystyle\\frac{1}{\\sin\\theta} = \\csc\\theta\\). The bracket stays squared."
        },
        {
          "stepNumber": 11,
          "description": "Rename the second inner term.",
          "workingLatex": "= (\\csc\\theta + \\cot\\theta)^2 = \\text{RHS}",
          "explanation": "By the quotient identity \\(\\displaystyle\\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta\\), giving the right-hand side and completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-030",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 51",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\displaystyle\\frac{1 - \\sin\\theta}{1 + \\sin\\theta} \\equiv (\\sec\\theta - \\tan\\theta)^2\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\text{LHS} = \\frac{1 - \\sin\\theta}{1 + \\sin\\theta}",
          "explanation": "Begin with the left-hand side. The right-hand side is a square, so we aim to turn the left into a perfect square fraction."
        },
        {
          "stepNumber": 2,
          "description": "Choose a multiplier equal to one.",
          "workingLatex": "\\frac{1 - \\sin\\theta}{1 - \\sin\\theta} = 1",
          "explanation": "We will multiply by \\(\\displaystyle\\frac{1-\\sin\\theta}{1-\\sin\\theta}\\), which equals \\(1\\) so the value is unchanged. It is chosen to create \\(1-\\sin^2\\theta\\) in the denominator."
        },
        {
          "stepNumber": 3,
          "description": "Multiply top and bottom by that factor.",
          "workingLatex": "= \\frac{(1 - \\sin\\theta)}{(1 + \\sin\\theta)}\\cdot\\frac{(1 - \\sin\\theta)}{(1 - \\sin\\theta)}",
          "explanation": "Apply the multiplier to the fraction. This pairs \\((1+\\sin\\theta)\\) with \\((1-\\sin\\theta)\\) in the denominator."
        },
        {
          "stepNumber": 4,
          "description": "Combine the products.",
          "workingLatex": "= \\frac{(1 - \\sin\\theta)^2}{(1 + \\sin\\theta)(1 - \\sin\\theta)}",
          "explanation": "The numerator becomes a perfect square; the denominator is a difference of squares. A common slip is to square only the numerator and forget to expand the denominator."
        },
        {
          "stepNumber": 5,
          "description": "Expand the denominator.",
          "workingLatex": "= \\frac{(1 - \\sin\\theta)^2}{1 - \\sin^2\\theta}",
          "explanation": "Using \\((1+\\sin\\theta)(1-\\sin\\theta) = 1 - \\sin^2\\theta\\). This is the difference of two squares."
        },
        {
          "stepNumber": 6,
          "description": "State the Pythagorean rearrangement.",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "Rearranging \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) gives \\(1 - \\sin^2\\theta = \\cos^2\\theta\\), a perfect square in the denominator."
        },
        {
          "stepNumber": 7,
          "description": "Replace the denominator via Pythagoras.",
          "workingLatex": "= \\frac{(1 - \\sin\\theta)^2}{\\cos^2\\theta}",
          "explanation": "Substitute \\(\\cos^2\\theta\\) for \\(1-\\sin^2\\theta\\). Now both top and bottom are squares."
        },
        {
          "stepNumber": 8,
          "description": "Write as a single squared fraction.",
          "workingLatex": "= \\left(\\frac{1 - \\sin\\theta}{\\cos\\theta}\\right)^2",
          "explanation": "Since numerator and denominator are both squares, the whole fraction is the square of \\(\\displaystyle\\frac{1-\\sin\\theta}{\\cos\\theta}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Split the inner fraction.",
          "workingLatex": "= \\left(\\frac{1}{\\cos\\theta} - \\frac{\\sin\\theta}{\\cos\\theta}\\right)^2",
          "explanation": "Separate the inside term by term over \\(\\cos\\theta\\), keeping the minus sign. Keep the whole bracket squared throughout."
        },
        {
          "stepNumber": 10,
          "description": "Rename the first inner term.",
          "workingLatex": "= \\left(\\sec\\theta - \\frac{\\sin\\theta}{\\cos\\theta}\\right)^2",
          "explanation": "By the reciprocal identity \\(\\displaystyle\\frac{1}{\\cos\\theta} = \\sec\\theta\\). The bracket stays squared and the minus sign is preserved."
        },
        {
          "stepNumber": 11,
          "description": "Rename the second inner term.",
          "workingLatex": "= (\\sec\\theta - \\tan\\theta)^2 = \\text{RHS}",
          "explanation": "By the quotient identity \\(\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta\\), giving the right-hand side and completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-031",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 52",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\sin^3\\theta + \\cos^3\\theta \\equiv (\\sin\\theta + \\cos\\theta)(1 - \\sin\\theta\\cos\\theta)\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sum of cubes rule.",
          "workingLatex": "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
          "explanation": "This is the standard algebraic factorisation of a sum of two cubes. A common slip is to misremember the middle sign as \\(+ab\\); for a sum of cubes the middle term is \\(-ab\\)."
        },
        {
          "stepNumber": 2,
          "description": "Choose the substitution to use.",
          "workingLatex": "a = \\sin\\theta, \\quad b = \\cos\\theta",
          "explanation": "We match the LHS \\(\\sin^3\\theta + \\cos^3\\theta\\) to the pattern \\(a^3 + b^3\\) by setting \\(a = \\sin\\theta\\) and \\(b = \\cos\\theta\\). Naming the pieces first reduces sign errors later."
        },
        {
          "stepNumber": 3,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\sin^3\\theta + \\cos^3\\theta",
          "explanation": "We work on the left-hand side (LHS) and aim to transform it into the right-hand side (RHS). For a proof it is cleanest to manipulate one side only."
        },
        {
          "stepNumber": 4,
          "description": "Apply the sum of cubes factorisation.",
          "workingLatex": "\\sin^3\\theta + \\cos^3\\theta = (\\sin\\theta + \\cos\\theta)\\left(\\sin^2\\theta - \\sin\\theta\\cos\\theta + \\cos^2\\theta\\right)",
          "explanation": "Substituting \\(a = \\sin\\theta\\), \\(b = \\cos\\theta\\) into the rule from Step 1. Here \\(a^2 = \\sin^2\\theta\\), \\(ab = \\sin\\theta\\cos\\theta\\) and \\(b^2 = \\cos^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Reorder the second bracket.",
          "workingLatex": "= (\\sin\\theta + \\cos\\theta)\\left(\\sin^2\\theta + \\cos^2\\theta - \\sin\\theta\\cos\\theta\\right)",
          "explanation": "Reordering the second bracket so the two squares sit side by side, ready for the Pythagorean identity. Reordering is allowed because addition is commutative."
        },
        {
          "stepNumber": 6,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the fundamental Pythagorean identity. It lets us replace the pair of squared terms inside the bracket by \\(1\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute 1 for the squares.",
          "workingLatex": "= (\\sin\\theta + \\cos\\theta)\\left(1 - \\sin\\theta\\cos\\theta\\right)",
          "explanation": "Replacing \\(\\sin^2\\theta + \\cos^2\\theta\\) with \\(1\\) inside the bracket. This is exactly the RHS we were asked to reach."
        },
        {
          "stepNumber": 8,
          "description": "Conclude the proof.",
          "workingLatex": "\\sin^3\\theta + \\cos^3\\theta \\equiv (\\sin\\theta + \\cos\\theta)(1 - \\sin\\theta\\cos\\theta)",
          "explanation": "Since the LHS has been transformed into the RHS using valid identities, the result holds for all \\(\\theta\\). Use \\(\\equiv\\) to show it is an identity, not just an equation."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-032",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 53",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\sin^3\\theta - \\cos^3\\theta \\equiv (\\sin\\theta - \\cos\\theta)(1 + \\sin\\theta\\cos\\theta)\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the difference of cubes rule.",
          "workingLatex": "a^3 - b^3 = (a - b)(a^2 + ab + b^2)",
          "explanation": "This is the standard factorisation of a difference of two cubes. Note the middle term is now \\(+ab\\), unlike the sum of cubes where it is \\(-ab\\)."
        },
        {
          "stepNumber": 2,
          "description": "Choose the substitution to use.",
          "workingLatex": "a = \\sin\\theta, \\quad b = \\cos\\theta",
          "explanation": "We match the LHS \\(\\sin^3\\theta - \\cos^3\\theta\\) to the pattern \\(a^3 - b^3\\) by setting \\(a = \\sin\\theta\\) and \\(b = \\cos\\theta\\). Naming the pieces first reduces sign errors."
        },
        {
          "stepNumber": 3,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\sin^3\\theta - \\cos^3\\theta",
          "explanation": "We manipulate the LHS to reach the RHS. Working a single side avoids the trap of assuming what you are trying to prove."
        },
        {
          "stepNumber": 4,
          "description": "Apply the difference of cubes factorisation.",
          "workingLatex": "\\sin^3\\theta - \\cos^3\\theta = (\\sin\\theta - \\cos\\theta)\\left(\\sin^2\\theta + \\sin\\theta\\cos\\theta + \\cos^2\\theta\\right)",
          "explanation": "Substituting \\(a = \\sin\\theta\\), \\(b = \\cos\\theta\\) into the rule from Step 1. Here \\(a^2 = \\sin^2\\theta\\), \\(ab = \\sin\\theta\\cos\\theta\\) and \\(b^2 = \\cos^2\\theta\\). Keep the middle term positive."
        },
        {
          "stepNumber": 5,
          "description": "Reorder the second bracket.",
          "workingLatex": "= (\\sin\\theta - \\cos\\theta)\\left(\\sin^2\\theta + \\cos^2\\theta + \\sin\\theta\\cos\\theta\\right)",
          "explanation": "Reordering the second bracket so the two squares are adjacent, ready for the Pythagorean identity. Order does not matter for addition."
        },
        {
          "stepNumber": 6,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The fundamental Pythagorean identity, which replaces the squared pair inside the bracket with \\(1\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute 1 for the squares.",
          "workingLatex": "= (\\sin\\theta - \\cos\\theta)\\left(1 + \\sin\\theta\\cos\\theta\\right)",
          "explanation": "Replacing \\(\\sin^2\\theta + \\cos^2\\theta\\) with \\(1\\) gives exactly the RHS we were asked to reach."
        },
        {
          "stepNumber": 8,
          "description": "Conclude the proof.",
          "workingLatex": "\\sin^3\\theta - \\cos^3\\theta \\equiv (\\sin\\theta - \\cos\\theta)(1 + \\sin\\theta\\cos\\theta)",
          "explanation": "The LHS has been turned into the RHS using only valid identities, so the result holds for all \\(\\theta\\). The \\(\\equiv\\) sign marks it as an identity."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-033",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 54",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\sin^6\\theta + \\cos^6\\theta \\equiv 1 - 3\\sin^2\\theta\\cos^2\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\sin^6\\theta + \\cos^6\\theta",
          "explanation": "We transform the LHS into the RHS \\(1 - 3\\sin^2\\theta\\cos^2\\theta\\). Working one side keeps the proof rigorous."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite sixth powers as cubes.",
          "workingLatex": "\\sin^6\\theta + \\cos^6\\theta = (\\sin^2\\theta)^3 + (\\cos^2\\theta)^3",
          "explanation": "Recognising \\(\\sin^6\\theta = (\\sin^2\\theta)^3\\) lets us treat this as a sum of cubes. A common slip is to write \\(\\sin^6\\theta = (\\sin^3\\theta)^2\\) and stall; the cube form is more useful here."
        },
        {
          "stepNumber": 3,
          "description": "Choose the substitution for the cube rule.",
          "workingLatex": "a = \\sin^2\\theta, \\quad b = \\cos^2\\theta",
          "explanation": "We will apply \\(a^3 + b^3 = (a+b)(a^2 - ab + b^2)\\) with \\(a = \\sin^2\\theta\\) and \\(b = \\cos^2\\theta\\). Naming the pieces clarifies the squaring that follows."
        },
        {
          "stepNumber": 4,
          "description": "Apply the sum of cubes rule.",
          "workingLatex": "(\\sin^2\\theta)^3 + (\\cos^2\\theta)^3 = (\\sin^2\\theta + \\cos^2\\theta)\\left(\\sin^4\\theta - \\sin^2\\theta\\cos^2\\theta + \\cos^4\\theta\\right)",
          "explanation": "Squaring \\(a = \\sin^2\\theta\\) gives \\(a^2 = \\sin^4\\theta\\), squaring \\(b\\) gives \\(\\cos^4\\theta\\), and the product \\(ab = \\sin^2\\theta\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The first bracket is exactly the Pythagorean identity, so it equals \\(1\\)."
        },
        {
          "stepNumber": 6,
          "description": "Simplify using the first bracket.",
          "workingLatex": "= \\sin^4\\theta - \\sin^2\\theta\\cos^2\\theta + \\cos^4\\theta",
          "explanation": "Multiplying the second bracket by \\(1\\) leaves it unchanged. Now we must show this equals \\(1 - 3\\sin^2\\theta\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Square the Pythagorean identity.",
          "workingLatex": "(\\sin^2\\theta + \\cos^2\\theta)^2 = \\sin^4\\theta + 2\\sin^2\\theta\\cos^2\\theta + \\cos^4\\theta",
          "explanation": "Squaring the left side of \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) using \\((a+b)^2 = a^2 + 2ab + b^2\\). This links \\(\\sin^4\\theta + \\cos^4\\theta\\) to \\(\\sin^2\\theta\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the squared identity.",
          "workingLatex": "1 = \\sin^4\\theta + 2\\sin^2\\theta\\cos^2\\theta + \\cos^4\\theta",
          "explanation": "Since \\(\\sin^2\\theta + \\cos^2\\theta = 1\\), the left side is \\(1^2 = 1\\). This gives an equation we can rearrange."
        },
        {
          "stepNumber": 9,
          "description": "Rearrange for the fourth powers.",
          "workingLatex": "\\sin^4\\theta + \\cos^4\\theta = 1 - 2\\sin^2\\theta\\cos^2\\theta",
          "explanation": "Subtracting \\(2\\sin^2\\theta\\cos^2\\theta\\) from both sides of Step 8 isolates \\(\\sin^4\\theta + \\cos^4\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Substitute into the expression.",
          "workingLatex": "\\sin^4\\theta - \\sin^2\\theta\\cos^2\\theta + \\cos^4\\theta = \\left(1 - 2\\sin^2\\theta\\cos^2\\theta\\right) - \\sin^2\\theta\\cos^2\\theta",
          "explanation": "Replacing \\(\\sin^4\\theta + \\cos^4\\theta\\) from Step 6 by the result of Step 9, keeping the separate \\(-\\sin^2\\theta\\cos^2\\theta\\) term outside."
        },
        {
          "stepNumber": 11,
          "description": "Collect the like terms.",
          "workingLatex": "= 1 - 3\\sin^2\\theta\\cos^2\\theta",
          "explanation": "Combining \\(-2\\sin^2\\theta\\cos^2\\theta - \\sin^2\\theta\\cos^2\\theta = -3\\sin^2\\theta\\cos^2\\theta\\). This matches the RHS."
        },
        {
          "stepNumber": 12,
          "description": "Conclude the proof.",
          "workingLatex": "\\sin^6\\theta + \\cos^6\\theta \\equiv 1 - 3\\sin^2\\theta\\cos^2\\theta",
          "explanation": "The LHS has been reduced to the RHS using valid identities, proving the result for all \\(\\theta\\)."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-034",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 08",
    "difficulty": "Foundation",
    "questionText": "Using the relation \\(\\sin^2 = 1 - \\cos^2\\), briefly prove \\(\\tan^2\\theta - \\sin^2\\theta = \\tan^2\\theta\\sin^2\\theta\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\tan^2\\theta - \\sin^2\\theta",
          "explanation": "We will transform the LHS into the RHS. Choosing the more complicated side to work on usually makes the proof easier."
        },
        {
          "stepNumber": 2,
          "description": "Write tan as sin over cos.",
          "workingLatex": "\\tan^2\\theta = \\frac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Using the quotient identity \\(\\tan\\theta = \\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\), then squaring. Converting to sin and cos is the standard first move in trig proofs."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the expression.",
          "workingLatex": "\\tan^2\\theta - \\sin^2\\theta = \\frac{\\sin^2\\theta}{\\cos^2\\theta} - \\sin^2\\theta",
          "explanation": "Replacing \\(\\tan^2\\theta\\) by \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\). Now both terms contain a factor of \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Factor out sin squared.",
          "workingLatex": "= \\sin^2\\theta\\left(\\frac{1}{\\cos^2\\theta} - 1\\right)",
          "explanation": "Taking the common factor \\(\\sin^2\\theta\\) out of both terms. Remember that \\(\\sin^2\\theta\\) on its own is \\(\\sin^2\\theta \\times 1\\), leaving the \\(-1\\) inside."
        },
        {
          "stepNumber": 5,
          "description": "Write 1 over a common denominator.",
          "workingLatex": "= \\sin^2\\theta\\left(\\frac{1}{\\cos^2\\theta} - \\frac{\\cos^2\\theta}{\\cos^2\\theta}\\right)",
          "explanation": "Rewriting \\(1\\) as \\(\\displaystyle\\frac{\\cos^2\\theta}{\\cos^2\\theta}\\) so both terms in the bracket share the denominator \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Combine the bracket into one fraction.",
          "workingLatex": "= \\sin^2\\theta\\left(\\frac{1 - \\cos^2\\theta}{\\cos^2\\theta}\\right)",
          "explanation": "Subtracting the two fractions over the common denominator gives \\(\\displaystyle\\frac{1 - \\cos^2\\theta}{\\cos^2\\theta}\\)."
        },
        {
          "stepNumber": 7,
          "description": "Apply the given relation.",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "This is the supplied rearrangement of the Pythagorean identity, used to simplify the numerator."
        },
        {
          "stepNumber": 8,
          "description": "Substitute sin squared for the numerator.",
          "workingLatex": "= \\sin^2\\theta \\cdot \\frac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Replacing \\(1 - \\cos^2\\theta\\) by \\(\\sin^2\\theta\\). The fraction \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\) is now recognisable as \\(\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Rewrite the fraction as tan squared.",
          "workingLatex": "= \\sin^2\\theta \\cdot \\tan^2\\theta",
          "explanation": "Using \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\tan^2\\theta\\) to convert the fraction back into a tangent."
        },
        {
          "stepNumber": 10,
          "description": "Reach the right-hand side.",
          "workingLatex": "= \\tan^2\\theta\\sin^2\\theta",
          "explanation": "Reordering the product gives exactly the RHS, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-035",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 55",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\displaystyle\\frac{1 + \\sin\\theta}{\\cos\\theta} + \\displaystyle\\frac{\\cos\\theta}{1 + \\sin\\theta} \\equiv 2\\sec\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the left-hand side.",
          "workingLatex": "\\frac{1 + \\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{1 + \\sin\\theta}",
          "explanation": "We combine these two fractions and simplify towards \\(2\\sec\\theta\\). Working the LHS is natural since it is the more complicated side."
        },
        {
          "stepNumber": 2,
          "description": "Identify the common denominator.",
          "workingLatex": "\\cos\\theta\\,(1 + \\sin\\theta)",
          "explanation": "The common denominator is the product of the two distinct denominators. A common slip is to forget one factor when cross-multiplying."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the first fraction over it.",
          "workingLatex": "\\frac{1 + \\sin\\theta}{\\cos\\theta} = \\frac{(1 + \\sin\\theta)(1 + \\sin\\theta)}{\\cos\\theta\\,(1 + \\sin\\theta)} = \\frac{(1 + \\sin\\theta)^2}{\\cos\\theta\\,(1 + \\sin\\theta)}",
          "explanation": "Multiplying top and bottom of the first fraction by \\((1 + \\sin\\theta)\\) so its denominator becomes the common one. The numerator becomes \\((1 + \\sin\\theta)^2\\)."
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the second fraction over it.",
          "workingLatex": "\\frac{\\cos\\theta}{1 + \\sin\\theta} = \\frac{\\cos\\theta\\cdot\\cos\\theta}{\\cos\\theta\\,(1 + \\sin\\theta)} = \\frac{\\cos^2\\theta}{\\cos\\theta\\,(1 + \\sin\\theta)}",
          "explanation": "Multiplying top and bottom of the second fraction by \\(\\cos\\theta\\) so its denominator matches. The numerator becomes \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Add the two fractions.",
          "workingLatex": "= \\frac{(1 + \\sin\\theta)^2 + \\cos^2\\theta}{\\cos\\theta\\,(1 + \\sin\\theta)}",
          "explanation": "With a shared denominator, add the numerators. This places both pieces over the single common denominator."
        },
        {
          "stepNumber": 6,
          "description": "Expand the squared bracket.",
          "workingLatex": "(1 + \\sin\\theta)^2 = 1 + 2\\sin\\theta + \\sin^2\\theta",
          "explanation": "Using \\((a+b)^2 = a^2 + 2ab + b^2\\) with \\(a = 1\\) and \\(b = \\sin\\theta\\). Do not forget the middle term \\(2\\sin\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the expansion into the numerator.",
          "workingLatex": "= \\frac{1 + 2\\sin\\theta + \\sin^2\\theta + \\cos^2\\theta}{\\cos\\theta\\,(1 + \\sin\\theta)}",
          "explanation": "Replacing \\((1+\\sin\\theta)^2\\) by its expansion. Now look for the Pythagorean identity in the numerator."
        },
        {
          "stepNumber": 8,
          "description": "Apply the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The fundamental Pythagorean identity lets us replace \\(\\sin^2\\theta + \\cos^2\\theta\\) with \\(1\\)."
        },
        {
          "stepNumber": 9,
          "description": "Substitute and combine the constants.",
          "workingLatex": "= \\frac{1 + 2\\sin\\theta + 1}{\\cos\\theta\\,(1 + \\sin\\theta)} = \\frac{2 + 2\\sin\\theta}{\\cos\\theta\\,(1 + \\sin\\theta)}",
          "explanation": "Replacing \\(\\sin^2\\theta + \\cos^2\\theta\\) by \\(1\\) and combining the two \\(1\\)s gives the numerator \\(2 + 2\\sin\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Factor 2 out of the numerator.",
          "workingLatex": "= \\frac{2(1 + \\sin\\theta)}{\\cos\\theta\\,(1 + \\sin\\theta)}",
          "explanation": "Taking out the common factor \\(2\\) exposes the matching \\((1+\\sin\\theta)\\) in numerator and denominator."
        },
        {
          "stepNumber": 11,
          "description": "Cancel the common factor.",
          "workingLatex": "= \\frac{2}{\\cos\\theta}",
          "explanation": "Cancelling \\((1+\\sin\\theta)\\) top and bottom (valid since \\(1+\\sin\\theta \\neq 0\\) wherever \\(\\cos\\theta \\neq 0\\)). Only cancel a whole bracketed factor, never individual terms."
        },
        {
          "stepNumber": 12,
          "description": "Rewrite using the reciprocal identity.",
          "workingLatex": "= 2 \\cdot \\frac{1}{\\cos\\theta} = 2\\sec\\theta",
          "explanation": "Using \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\) gives the RHS, completing the proof."
        },
        {
          "stepNumber": 13,
          "description": "Conclude the proof.",
          "workingLatex": "\\frac{1 + \\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{1 + \\sin\\theta} \\equiv 2\\sec\\theta",
          "explanation": "The LHS has been simplified to the RHS using valid identities, so the result holds for all valid \\(\\theta\\)."
        }
      ],
      "finalAnswer": "\\(= 2\\sec\\theta\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-036",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 26",
    "difficulty": "Standard",
    "questionText": "Solve \\(2\\cos^2\\theta - \\sin\\theta = 1\\) on \\([0, 2\\pi]\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "Begin from the fundamental Pythagorean identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\). This is the tool that lets us trade one squared function for the other."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the identity for cosine.",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "Subtract \\(\\sin^2\\theta\\) from both sides to isolate \\(\\cos^2\\theta\\). We choose this direction because the equation already contains \\(\\sin\\theta\\), so converting everything to sine leaves a single variable."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation.",
          "workingLatex": "2(1 - \\sin^2\\theta) - \\sin\\theta = 1",
          "explanation": "Replace \\(\\cos^2\\theta\\) with \\(1 - \\sin^2\\theta\\) so the whole equation is in \\(\\sin\\theta\\). A common slip is forgetting that the factor \\(2\\) multiplies the entire bracket."
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket.",
          "workingLatex": "2 - 2\\sin^2\\theta - \\sin\\theta = 1",
          "explanation": "Multiply the \\(2\\) through: \\(2 \\times 1 = 2\\) and \\(2 \\times (-\\sin^2\\theta) = -2\\sin^2\\theta\\). The \\(-\\sin\\theta\\) term is left unchanged."
        },
        {
          "stepNumber": 5,
          "description": "Subtract 1 from both sides.",
          "workingLatex": "2 - 2\\sin^2\\theta - \\sin\\theta - 1 = 0",
          "explanation": "Move the right-hand side to the left so the equation equals zero, ready to form a quadratic. We keep the constants separate for now and tidy them next."
        },
        {
          "stepNumber": 6,
          "description": "Combine the constant terms.",
          "workingLatex": "-2\\sin^2\\theta - \\sin\\theta + 1 = 0",
          "explanation": "Simplify \\(2 - 1 = 1\\). The leading term is still negative, which is awkward for factorising, so we will fix that next."
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by minus one.",
          "workingLatex": "2\\sin^2\\theta + \\sin\\theta - 1 = 0",
          "explanation": "Multiplying every term by \\(-1\\) makes the \\(\\sin^2\\theta\\) coefficient positive. A common slip is leaving the leading term negative and then mis-factorising the quadratic."
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic.",
          "workingLatex": "(2\\sin\\theta - 1)(\\sin\\theta + 1) = 0",
          "explanation": "Treat \\(\\sin\\theta\\) like \\(x\\): \\(2x^2 + x - 1 = (2x - 1)(x + 1)\\). We look for factors of \\(2 \\times (-1) = -2\\) that add to \\(+1\\), namely \\(+2\\) and \\(-1\\)."
        },
        {
          "stepNumber": 9,
          "description": "Check the factorisation by expanding.",
          "workingLatex": "2\\sin^2\\theta + 2\\sin\\theta - \\sin\\theta - 1 = 2\\sin^2\\theta + \\sin\\theta - 1",
          "explanation": "Expanding confirms the middle term is \\(+\\sin\\theta\\), matching the quadratic. This verification guards against a sign error in the factors."
        },
        {
          "stepNumber": 10,
          "description": "Set the first factor to zero.",
          "workingLatex": "2\\sin\\theta - 1 = 0 \\Rightarrow \\sin\\theta = \\frac{1}{2}",
          "explanation": "A product is zero when a factor is zero. Solving \\(2\\sin\\theta - 1 = 0\\) gives \\(\\sin\\theta = \\displaystyle\\frac12\\)."
        },
        {
          "stepNumber": 11,
          "description": "Set the second factor to zero.",
          "workingLatex": "\\sin\\theta + 1 = 0 \\Rightarrow \\sin\\theta = -1",
          "explanation": "Solving the other factor \\(\\sin\\theta + 1 = 0\\) gives \\(\\sin\\theta = -1\\). We now solve each branch on the interval."
        },
        {
          "stepNumber": 12,
          "description": "Find the principal value of the first branch.",
          "workingLatex": "\\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}",
          "explanation": "The inverse sine of \\(\\displaystyle\\frac12\\) is \\(\\displaystyle\\frac{\\pi}{6}\\). This is the reference angle and the first-quadrant solution."
        },
        {
          "stepNumber": 13,
          "description": "Find the second-quadrant value.",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "Sine is also positive in the second quadrant, where the angle is \\(\\pi\\) minus the reference angle. This gives \\(\\displaystyle\\frac{5\\pi}{6}\\)."
        },
        {
          "stepNumber": 14,
          "description": "Solve the second branch on the interval.",
          "workingLatex": "\\sin\\theta = -1 \\Rightarrow \\theta = \\frac{3\\pi}{2}",
          "explanation": "Sine reaches its minimum \\(-1\\) only at \\(\\displaystyle\\frac{3\\pi}{2}\\) within \\([0, 2\\pi]\\). A common slip is to discard this root by wrongly assuming \\(\\sin\\theta = -1\\) has no solution."
        },
        {
          "stepNumber": 15,
          "description": "List all solutions in order.",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\ \\frac{5\\pi}{6}, \\ \\frac{3\\pi}{2}",
          "explanation": "Collect the three values and check each lies in \\([0, 2\\pi]\\). All do, so none is rejected.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.106,
                    0.106
                  ],
                  [
                    0.213,
                    0.211
                  ],
                  [
                    0.319,
                    0.314
                  ],
                  [
                    0.426,
                    0.413
                  ],
                  [
                    0.532,
                    0.508
                  ],
                  [
                    0.639,
                    0.596
                  ],
                  [
                    0.745,
                    0.678
                  ],
                  [
                    0.852,
                    0.753
                  ],
                  [
                    0.958,
                    0.818
                  ],
                  [
                    1.065,
                    0.875
                  ],
                  [
                    1.171,
                    0.921
                  ],
                  [
                    1.278,
                    0.957
                  ],
                  [
                    1.384,
                    0.983
                  ],
                  [
                    1.491,
                    0.997
                  ],
                  [
                    1.597,
                    1
                  ],
                  [
                    1.704,
                    0.991
                  ],
                  [
                    1.81,
                    0.971
                  ],
                  [
                    1.917,
                    0.941
                  ],
                  [
                    2.023,
                    0.899
                  ],
                  [
                    2.13,
                    0.848
                  ],
                  [
                    2.236,
                    0.787
                  ],
                  [
                    2.343,
                    0.716
                  ],
                  [
                    2.449,
                    0.638
                  ],
                  [
                    2.556,
                    0.553
                  ],
                  [
                    2.662,
                    0.461
                  ],
                  [
                    2.769,
                    0.364
                  ],
                  [
                    2.875,
                    0.263
                  ],
                  [
                    2.982,
                    0.159
                  ],
                  [
                    3.088,
                    0.053
                  ],
                  [
                    3.195,
                    -0.053
                  ],
                  [
                    3.301,
                    -0.159
                  ],
                  [
                    3.408,
                    -0.263
                  ],
                  [
                    3.514,
                    -0.364
                  ],
                  [
                    3.621,
                    -0.461
                  ],
                  [
                    3.727,
                    -0.553
                  ],
                  [
                    3.834,
                    -0.638
                  ],
                  [
                    3.94,
                    -0.716
                  ],
                  [
                    4.047,
                    -0.787
                  ],
                  [
                    4.153,
                    -0.848
                  ],
                  [
                    4.26,
                    -0.899
                  ],
                  [
                    4.366,
                    -0.941
                  ],
                  [
                    4.473,
                    -0.971
                  ],
                  [
                    4.579,
                    -0.991
                  ],
                  [
                    4.686,
                    -1
                  ],
                  [
                    4.792,
                    -0.997
                  ],
                  [
                    4.899,
                    -0.983
                  ],
                  [
                    5.005,
                    -0.957
                  ],
                  [
                    5.112,
                    -0.921
                  ],
                  [
                    5.218,
                    -0.875
                  ],
                  [
                    5.325,
                    -0.818
                  ],
                  [
                    5.431,
                    -0.753
                  ],
                  [
                    5.538,
                    -0.678
                  ],
                  [
                    5.644,
                    -0.596
                  ],
                  [
                    5.751,
                    -0.508
                  ],
                  [
                    5.857,
                    -0.413
                  ],
                  [
                    5.964,
                    -0.314
                  ],
                  [
                    6.07,
                    -0.211
                  ],
                  [
                    6.177,
                    -0.106
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\sin\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.5
                ],
                "to": [
                  6.283,
                  0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  0.72
                ]
              },
              {
                "from": [
                  0,
                  -1
                ],
                "to": [
                  6.283,
                  -1
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-1",
                "labelAt": [
                  5.383,
                  -1.22
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.524,
                  0.5
                ],
                "label": "\\tfrac{\\pi}{6}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.618,
                  0.5
                ],
                "label": "\\tfrac{5\\pi}{6}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  4.712,
                  -1
                ],
                "label": "\\tfrac{3\\pi}{2}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{6}, \\displaystyle\\frac{5\\pi}{6}, \\displaystyle\\frac{3\\pi}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-037",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 27",
    "difficulty": "Standard",
    "questionText": "Solve \\(2\\sin^2\\theta + 3\\cos\\theta = 3\\) on \\([0, 2\\pi]\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "Start from the fundamental identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\). It lets us replace the squared term so the equation uses a single trigonometric function."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange the identity for sine.",
          "workingLatex": "\\sin^2\\theta = 1 - \\cos^2\\theta",
          "explanation": "Subtract \\(\\cos^2\\theta\\) from both sides to isolate \\(\\sin^2\\theta\\). The equation already has a \\(\\cos\\theta\\) term, so converting to cosine leaves one variable."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation.",
          "workingLatex": "2(1 - \\cos^2\\theta) + 3\\cos\\theta = 3",
          "explanation": "Replace \\(\\sin^2\\theta\\) with \\(1 - \\cos^2\\theta\\). Be careful to keep the \\(2\\) multiplying the whole bracket."
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket.",
          "workingLatex": "2 - 2\\cos^2\\theta + 3\\cos\\theta = 3",
          "explanation": "Distribute the \\(2\\): \\(2 \\times 1 = 2\\) and \\(2 \\times (-\\cos^2\\theta) = -2\\cos^2\\theta\\). The \\(3\\cos\\theta\\) term is unchanged."
        },
        {
          "stepNumber": 5,
          "description": "Subtract 3 from both sides.",
          "workingLatex": "2 - 2\\cos^2\\theta + 3\\cos\\theta - 3 = 0",
          "explanation": "Move the right-hand side over so the equation equals zero. We keep the constants separate for now and combine them next."
        },
        {
          "stepNumber": 6,
          "description": "Combine the constant terms.",
          "workingLatex": "-2\\cos^2\\theta + 3\\cos\\theta - 1 = 0",
          "explanation": "Simplify \\(2 - 3 = -1\\). The leading coefficient is negative, which we will correct before factorising."
        },
        {
          "stepNumber": 7,
          "description": "Multiply through by minus one.",
          "workingLatex": "2\\cos^2\\theta - 3\\cos\\theta + 1 = 0",
          "explanation": "Multiplying every term by \\(-1\\) makes the leading coefficient positive. A common slip is a sign error on the middle term when doing this."
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic.",
          "workingLatex": "(2\\cos\\theta - 1)(\\cos\\theta - 1) = 0",
          "explanation": "Treat \\(\\cos\\theta\\) like \\(x\\): \\(2x^2 - 3x + 1 = (2x - 1)(x - 1)\\). We seek factors of \\(2 \\times 1 = 2\\) summing to \\(-3\\), namely \\(-2\\) and \\(-1\\)."
        },
        {
          "stepNumber": 9,
          "description": "Check the factorisation by expanding.",
          "workingLatex": "2\\cos^2\\theta - 2\\cos\\theta - \\cos\\theta + 1 = 2\\cos^2\\theta - 3\\cos\\theta + 1",
          "explanation": "Expanding confirms the middle term is \\(-3\\cos\\theta\\), matching the quadratic. This guards against a sign error in the factors."
        },
        {
          "stepNumber": 10,
          "description": "Set the first factor to zero.",
          "workingLatex": "2\\cos\\theta - 1 = 0 \\Rightarrow \\cos\\theta = \\frac{1}{2}",
          "explanation": "A product is zero when a factor is zero. Solving \\(2\\cos\\theta - 1 = 0\\) gives \\(\\cos\\theta = \\displaystyle\\frac12\\)."
        },
        {
          "stepNumber": 11,
          "description": "Set the second factor to zero.",
          "workingLatex": "\\cos\\theta - 1 = 0 \\Rightarrow \\cos\\theta = 1",
          "explanation": "Solving the other factor \\(\\cos\\theta - 1 = 0\\) gives \\(\\cos\\theta = 1\\). We now solve each branch on the interval."
        },
        {
          "stepNumber": 12,
          "description": "Find the principal value of the first branch.",
          "workingLatex": "\\cos\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{3}",
          "explanation": "The inverse cosine of \\(\\displaystyle\\frac12\\) is \\(\\displaystyle\\frac{\\pi}{3}\\), the first-quadrant solution and reference angle."
        },
        {
          "stepNumber": 13,
          "description": "Find the fourth-quadrant value.",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          "explanation": "Cosine is also positive in the fourth quadrant, where the angle is \\(2\\pi\\) minus the reference angle. This gives \\(\\displaystyle\\frac{5\\pi}{3}\\)."
        },
        {
          "stepNumber": 14,
          "description": "Solve the second branch on the interval.",
          "workingLatex": "\\cos\\theta = 1 \\Rightarrow \\theta = 0, \\ 2\\pi",
          "explanation": "Cosine equals \\(1\\) at \\(\\theta = 0\\) and again at \\(\\theta = 2\\pi\\), both endpoints of the closed interval. A common slip is to omit \\(2\\pi\\) when the interval includes it."
        },
        {
          "stepNumber": 15,
          "description": "List all solutions in order.",
          "workingLatex": "\\theta = 0, \\ \\frac{\\pi}{3}, \\ \\frac{5\\pi}{3}, \\ 2\\pi",
          "explanation": "Collect the four values; each lies in the closed interval \\([0, 2\\pi]\\), so all are kept.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    0.106,
                    0.994
                  ],
                  [
                    0.213,
                    0.977
                  ],
                  [
                    0.319,
                    0.949
                  ],
                  [
                    0.426,
                    0.911
                  ],
                  [
                    0.532,
                    0.862
                  ],
                  [
                    0.639,
                    0.803
                  ],
                  [
                    0.745,
                    0.735
                  ],
                  [
                    0.852,
                    0.659
                  ],
                  [
                    0.958,
                    0.575
                  ],
                  [
                    1.065,
                    0.485
                  ],
                  [
                    1.171,
                    0.389
                  ],
                  [
                    1.278,
                    0.289
                  ],
                  [
                    1.384,
                    0.185
                  ],
                  [
                    1.491,
                    0.08
                  ],
                  [
                    1.597,
                    -0.027
                  ],
                  [
                    1.704,
                    -0.133
                  ],
                  [
                    1.81,
                    -0.237
                  ],
                  [
                    1.917,
                    -0.339
                  ],
                  [
                    2.023,
                    -0.437
                  ],
                  [
                    2.13,
                    -0.53
                  ],
                  [
                    2.236,
                    -0.618
                  ],
                  [
                    2.343,
                    -0.698
                  ],
                  [
                    2.449,
                    -0.77
                  ],
                  [
                    2.556,
                    -0.833
                  ],
                  [
                    2.662,
                    -0.887
                  ],
                  [
                    2.769,
                    -0.931
                  ],
                  [
                    2.875,
                    -0.965
                  ],
                  [
                    2.982,
                    -0.987
                  ],
                  [
                    3.088,
                    -0.999
                  ],
                  [
                    3.195,
                    -0.999
                  ],
                  [
                    3.301,
                    -0.987
                  ],
                  [
                    3.408,
                    -0.965
                  ],
                  [
                    3.514,
                    -0.931
                  ],
                  [
                    3.621,
                    -0.887
                  ],
                  [
                    3.727,
                    -0.833
                  ],
                  [
                    3.834,
                    -0.77
                  ],
                  [
                    3.94,
                    -0.698
                  ],
                  [
                    4.047,
                    -0.618
                  ],
                  [
                    4.153,
                    -0.53
                  ],
                  [
                    4.26,
                    -0.437
                  ],
                  [
                    4.366,
                    -0.339
                  ],
                  [
                    4.473,
                    -0.237
                  ],
                  [
                    4.579,
                    -0.133
                  ],
                  [
                    4.686,
                    -0.027
                  ],
                  [
                    4.792,
                    0.08
                  ],
                  [
                    4.899,
                    0.185
                  ],
                  [
                    5.005,
                    0.289
                  ],
                  [
                    5.112,
                    0.389
                  ],
                  [
                    5.218,
                    0.485
                  ],
                  [
                    5.325,
                    0.575
                  ],
                  [
                    5.431,
                    0.659
                  ],
                  [
                    5.538,
                    0.735
                  ],
                  [
                    5.644,
                    0.803
                  ],
                  [
                    5.751,
                    0.862
                  ],
                  [
                    5.857,
                    0.911
                  ],
                  [
                    5.964,
                    0.949
                  ],
                  [
                    6.07,
                    0.977
                  ],
                  [
                    6.177,
                    0.994
                  ],
                  [
                    6.283,
                    1
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\cos\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.5
                ],
                "to": [
                  6.283,
                  0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  0.72
                ]
              },
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  6.283,
                  1
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=1",
                "labelAt": [
                  5.383,
                  1.22
                ]
              }
            ],
            "points": [
              {
                "at": [
                  1.047,
                  0.5
                ],
                "label": "\\tfrac{\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.236,
                  0.5
                ],
                "label": "\\tfrac{5\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  0,
                  1
                ],
                "label": "0",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  6.283,
                  1
                ],
                "label": "2\\pi",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = 0, \\displaystyle\\frac{\\pi}{3}, \\displaystyle\\frac{5\\pi}{3}, 2\\pi\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-038",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 28",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\sin^2\\theta = 3\\cos^2\\theta\\) on \\([0, 2\\pi]\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check that dividing by cosine is safe.",
          "workingLatex": "\\cos\\theta = 0 \\Rightarrow \\sin^2\\theta = 0 \\ \\text{contradiction}",
          "explanation": "If \\(\\cos\\theta = 0\\) the right-hand side is \\(0\\), forcing \\(\\sin\\theta = 0\\) too; but \\(\\sin\\theta\\) and \\(\\cos\\theta\\) cannot both be zero. So no solution has \\(\\cos\\theta = 0\\), and dividing by \\(\\cos^2\\theta\\) loses nothing."
        },
        {
          "stepNumber": 2,
          "description": "Divide both sides by cosine squared.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} = 3",
          "explanation": "Dividing each side by \\(\\cos^2\\theta\\) gathers both trigonometric terms into a single ratio on the left. This sets up the tangent form."
        },
        {
          "stepNumber": 3,
          "description": "Apply the quotient identity.",
          "workingLatex": "\\tan^2\\theta = 3",
          "explanation": "Using \\(\\tan\\theta = \\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\), the left side becomes \\(\\tan^2\\theta\\). This is the key simplification of the problem."
        },
        {
          "stepNumber": 4,
          "description": "Take the square root of both sides.",
          "workingLatex": "\\tan\\theta = \\pm\\sqrt{3}",
          "explanation": "Square-rooting gives BOTH a positive and a negative value. A common slip is to keep only \\(+\\sqrt{3}\\) and lose half the solutions."
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle.",
          "workingLatex": "\\tan^{-1}\\sqrt{3} = \\frac{\\pi}{3}",
          "explanation": "The inverse tangent of \\(\\sqrt{3}\\) is \\(\\displaystyle\\frac{\\pi}{3}\\). This reference angle generates all four solutions, since tangent has period \\(\\pi\\)."
        },
        {
          "stepNumber": 6,
          "description": "Solve the positive branch, first solution.",
          "workingLatex": "\\tan\\theta = \\sqrt{3} \\Rightarrow \\theta = \\frac{\\pi}{3}",
          "explanation": "Tangent is positive in the first quadrant, giving the principal value \\(\\displaystyle\\frac{\\pi}{3}\\)."
        },
        {
          "stepNumber": 7,
          "description": "Solve the positive branch, second solution.",
          "workingLatex": "\\theta = \\frac{\\pi}{3} + \\pi = \\frac{4\\pi}{3}",
          "explanation": "Adding the tangent period \\(\\pi\\) gives the third-quadrant solution \\(\\displaystyle\\frac{4\\pi}{3}\\), where tangent is also positive."
        },
        {
          "stepNumber": 8,
          "description": "Solve the negative branch, first solution.",
          "workingLatex": "\\tan\\theta = -\\sqrt{3} \\Rightarrow \\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}",
          "explanation": "Tangent is negative in the second quadrant, where \\(\\theta = \\pi\\) minus the reference angle. This gives \\(\\displaystyle\\frac{2\\pi}{3}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Solve the negative branch, second solution.",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          "explanation": "Tangent is also negative in the fourth quadrant, where \\(\\theta = 2\\pi\\) minus the reference angle. This gives \\(\\displaystyle\\frac{5\\pi}{3}\\)."
        },
        {
          "stepNumber": 10,
          "description": "List all solutions in order.",
          "workingLatex": "\\theta = \\frac{\\pi}{3}, \\ \\frac{2\\pi}{3}, \\ \\frac{4\\pi}{3}, \\ \\frac{5\\pi}{3}",
          "explanation": "Collect all four values; each lies in \\([0, 2\\pi]\\), so all are kept. The roots are spaced consistently with the period of tangent.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -5,
            "yMax": 5,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -4,
              -2,
              0,
              2,
              4
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0.06,
                    0.06
                  ],
                  [
                    0.101,
                    0.102
                  ],
                  [
                    0.143,
                    0.144
                  ],
                  [
                    0.184,
                    0.186
                  ],
                  [
                    0.226,
                    0.23
                  ],
                  [
                    0.267,
                    0.274
                  ],
                  [
                    0.309,
                    0.319
                  ],
                  [
                    0.35,
                    0.365
                  ],
                  [
                    0.392,
                    0.413
                  ],
                  [
                    0.433,
                    0.462
                  ],
                  [
                    0.475,
                    0.514
                  ],
                  [
                    0.516,
                    0.567
                  ],
                  [
                    0.557,
                    0.623
                  ],
                  [
                    0.599,
                    0.682
                  ],
                  [
                    0.64,
                    0.745
                  ],
                  [
                    0.682,
                    0.812
                  ],
                  [
                    0.723,
                    0.883
                  ],
                  [
                    0.765,
                    0.959
                  ],
                  [
                    0.806,
                    1.042
                  ],
                  [
                    0.848,
                    1.133
                  ],
                  [
                    0.889,
                    1.232
                  ],
                  [
                    0.93,
                    1.342
                  ],
                  [
                    0.972,
                    1.465
                  ],
                  [
                    1.013,
                    1.604
                  ],
                  [
                    1.055,
                    1.763
                  ],
                  [
                    1.096,
                    1.947
                  ],
                  [
                    1.138,
                    2.163
                  ],
                  [
                    1.179,
                    2.422
                  ],
                  [
                    1.221,
                    2.738
                  ],
                  [
                    1.262,
                    3.136
                  ],
                  [
                    1.304,
                    3.652
                  ],
                  [
                    1.345,
                    4.353
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              },
              {
                "points": [
                  [
                    1.803,
                    -4.22
                  ],
                  [
                    1.89,
                    -3.028
                  ],
                  [
                    1.976,
                    -2.331
                  ],
                  [
                    2.062,
                    -1.867
                  ],
                  [
                    2.149,
                    -1.533
                  ],
                  [
                    2.235,
                    -1.277
                  ],
                  [
                    2.321,
                    -1.072
                  ],
                  [
                    2.408,
                    -0.902
                  ],
                  [
                    2.494,
                    -0.756
                  ],
                  [
                    2.58,
                    -0.629
                  ],
                  [
                    2.667,
                    -0.514
                  ],
                  [
                    2.753,
                    -0.409
                  ],
                  [
                    2.839,
                    -0.312
                  ],
                  [
                    2.926,
                    -0.219
                  ],
                  [
                    3.012,
                    -0.13
                  ],
                  [
                    3.098,
                    -0.043
                  ],
                  [
                    3.185,
                    0.043
                  ],
                  [
                    3.271,
                    0.13
                  ],
                  [
                    3.357,
                    0.219
                  ],
                  [
                    3.444,
                    0.312
                  ],
                  [
                    3.53,
                    0.409
                  ],
                  [
                    3.616,
                    0.514
                  ],
                  [
                    3.703,
                    0.629
                  ],
                  [
                    3.789,
                    0.756
                  ],
                  [
                    3.875,
                    0.902
                  ],
                  [
                    3.962,
                    1.072
                  ],
                  [
                    4.048,
                    1.277
                  ],
                  [
                    4.134,
                    1.533
                  ],
                  [
                    4.221,
                    1.867
                  ],
                  [
                    4.307,
                    2.331
                  ],
                  [
                    4.393,
                    3.028
                  ],
                  [
                    4.48,
                    4.22
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              },
              {
                "points": [
                  [
                    4.938,
                    -4.353
                  ],
                  [
                    4.98,
                    -3.652
                  ],
                  [
                    5.021,
                    -3.136
                  ],
                  [
                    5.063,
                    -2.738
                  ],
                  [
                    5.104,
                    -2.422
                  ],
                  [
                    5.145,
                    -2.163
                  ],
                  [
                    5.187,
                    -1.947
                  ],
                  [
                    5.228,
                    -1.763
                  ],
                  [
                    5.27,
                    -1.604
                  ],
                  [
                    5.311,
                    -1.465
                  ],
                  [
                    5.353,
                    -1.342
                  ],
                  [
                    5.394,
                    -1.232
                  ],
                  [
                    5.436,
                    -1.133
                  ],
                  [
                    5.477,
                    -1.042
                  ],
                  [
                    5.519,
                    -0.959
                  ],
                  [
                    5.56,
                    -0.883
                  ],
                  [
                    5.601,
                    -0.812
                  ],
                  [
                    5.643,
                    -0.745
                  ],
                  [
                    5.684,
                    -0.682
                  ],
                  [
                    5.726,
                    -0.623
                  ],
                  [
                    5.767,
                    -0.567
                  ],
                  [
                    5.809,
                    -0.514
                  ],
                  [
                    5.85,
                    -0.462
                  ],
                  [
                    5.892,
                    -0.413
                  ],
                  [
                    5.933,
                    -0.365
                  ],
                  [
                    5.974,
                    -0.319
                  ],
                  [
                    6.016,
                    -0.274
                  ],
                  [
                    6.057,
                    -0.23
                  ],
                  [
                    6.099,
                    -0.186
                  ],
                  [
                    6.14,
                    -0.144
                  ],
                  [
                    6.182,
                    -0.102
                  ],
                  [
                    6.223,
                    -0.06
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  1.732
                ],
                "to": [
                  6.283,
                  1.732
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\sqrt{3}",
                "labelAt": [
                  5.383,
                  1.952
                ]
              },
              {
                "from": [
                  0,
                  -1.732
                ],
                "to": [
                  6.283,
                  -1.732
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-\\sqrt{3}",
                "labelAt": [
                  5.383,
                  -1.952
                ]
              }
            ],
            "points": [
              {
                "at": [
                  1.047,
                  1.732
                ],
                "label": "\\tfrac{\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.094,
                  -1.732
                ],
                "label": "\\tfrac{2\\pi}{3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  4.189,
                  1.732
                ],
                "label": "\\tfrac{4\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.236,
                  -1.732
                ],
                "label": "\\tfrac{5\\pi}{3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{3}, \\displaystyle\\frac{2\\pi}{3}, \\displaystyle\\frac{4\\pi}{3}, \\displaystyle\\frac{5\\pi}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-039",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 56",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\tan^2\\theta = 1 + \\sec\\theta\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity for tangent.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "Recall the identity \\(1 + \\tan^2\\theta = \\sec^2\\theta\\), obtained by dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\cos^2\\theta\\). It links the two functions in the equation."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for tangent squared.",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "Subtract \\(1\\) from both sides to express \\(\\tan^2\\theta\\) in terms of \\(\\sec\\theta\\). We convert to secant because the right-hand side already contains \\(\\sec\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation.",
          "workingLatex": "\\sec^2\\theta - 1 = 1 + \\sec\\theta",
          "explanation": "Replace \\(\\tan^2\\theta\\) with \\(\\sec^2\\theta - 1\\) so the whole equation is in \\(\\sec\\theta\\). It is now a quadratic in \\(\\sec\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Subtract the right-hand side terms.",
          "workingLatex": "\\sec^2\\theta - 1 - 1 - \\sec\\theta = 0",
          "explanation": "Move \\(1\\) and \\(\\sec\\theta\\) to the left so the equation equals zero. Keep the two constants separate for now to avoid an arithmetic slip."
        },
        {
          "stepNumber": 5,
          "description": "Combine the constant terms.",
          "workingLatex": "\\sec^2\\theta - \\sec\\theta - 2 = 0",
          "explanation": "Combine \\(-1 - 1 = -2\\) and order the terms as a standard quadratic. A common slip is mishandling the two constant terms here."
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic.",
          "workingLatex": "(\\sec\\theta - 2)(\\sec\\theta + 1) = 0",
          "explanation": "Treat \\(\\sec\\theta\\) like \\(x\\): \\(x^2 - x - 2 = (x - 2)(x + 1)\\). We need factors of \\(-2\\) that add to \\(-1\\), namely \\(-2\\) and \\(+1\\)."
        },
        {
          "stepNumber": 7,
          "description": "Check the factorisation by expanding.",
          "workingLatex": "\\sec^2\\theta + \\sec\\theta - 2\\sec\\theta - 2 = \\sec^2\\theta - \\sec\\theta - 2",
          "explanation": "Expanding confirms the middle term is \\(-\\sec\\theta\\), matching the quadratic. This verification guards against a sign error."
        },
        {
          "stepNumber": 8,
          "description": "Set the first factor to zero.",
          "workingLatex": "\\sec\\theta - 2 = 0 \\Rightarrow \\sec\\theta = 2",
          "explanation": "A product is zero when a factor is zero. The first factor gives \\(\\sec\\theta = 2\\)."
        },
        {
          "stepNumber": 9,
          "description": "Set the second factor to zero.",
          "workingLatex": "\\sec\\theta + 1 = 0 \\Rightarrow \\sec\\theta = -1",
          "explanation": "The second factor gives \\(\\sec\\theta = -1\\). We now convert each to cosine, which is easier to solve."
        },
        {
          "stepNumber": 10,
          "description": "Convert the first value to cosine.",
          "workingLatex": "\\sec\\theta = 2 \\Rightarrow \\cos\\theta = \\frac{1}{2}",
          "explanation": "Since \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\), inverting \\(\\sec\\theta = 2\\) gives \\(\\cos\\theta = \\displaystyle\\frac12\\)."
        },
        {
          "stepNumber": 11,
          "description": "Convert the second value to cosine.",
          "workingLatex": "\\sec\\theta = -1 \\Rightarrow \\cos\\theta = -1",
          "explanation": "Likewise inverting \\(\\sec\\theta = -1\\) gives \\(\\cos\\theta = -1\\)."
        },
        {
          "stepNumber": 12,
          "description": "Solve the first cosine equation, principal value.",
          "workingLatex": "\\cos\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{3}",
          "explanation": "The inverse cosine of \\(\\displaystyle\\frac12\\) is \\(\\displaystyle\\frac{\\pi}{3}\\), the first-quadrant solution."
        },
        {
          "stepNumber": 13,
          "description": "Find the fourth-quadrant value.",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          "explanation": "Cosine is also positive in the fourth quadrant, where \\(\\theta = 2\\pi\\) minus the reference angle. This gives \\(\\displaystyle\\frac{5\\pi}{3}\\)."
        },
        {
          "stepNumber": 14,
          "description": "Solve the second cosine equation.",
          "workingLatex": "\\cos\\theta = -1 \\Rightarrow \\theta = \\pi",
          "explanation": "Cosine equals \\(-1\\) only at \\(\\theta = \\pi\\) in \\([0, 2\\pi]\\). Here \\(\\sec\\theta = -1\\) and \\(\\tan\\theta = 0\\) are both defined, so \\(\\theta = \\pi\\) is valid."
        },
        {
          "stepNumber": 15,
          "description": "Check no solution is at an undefined point.",
          "workingLatex": "\\theta \\ne \\frac{\\pi}{2}, \\ \\frac{3\\pi}{2}",
          "explanation": "Secant and tangent are undefined where \\(\\cos\\theta = 0\\), namely at \\(\\displaystyle\\frac{\\pi}{2}\\) and \\(\\displaystyle\\frac{3\\pi}{2}\\). None of our roots fall there, so all are valid."
        },
        {
          "stepNumber": 16,
          "description": "List all solutions in order.",
          "workingLatex": "\\theta = \\frac{\\pi}{3}, \\ \\pi, \\ \\frac{5\\pi}{3}",
          "explanation": "Collect the three values; each lies in \\([0, 2\\pi]\\) and is in the domain of the original equation, so all are kept.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    0.106,
                    0.994
                  ],
                  [
                    0.213,
                    0.977
                  ],
                  [
                    0.319,
                    0.949
                  ],
                  [
                    0.426,
                    0.911
                  ],
                  [
                    0.532,
                    0.862
                  ],
                  [
                    0.639,
                    0.803
                  ],
                  [
                    0.745,
                    0.735
                  ],
                  [
                    0.852,
                    0.659
                  ],
                  [
                    0.958,
                    0.575
                  ],
                  [
                    1.065,
                    0.485
                  ],
                  [
                    1.171,
                    0.389
                  ],
                  [
                    1.278,
                    0.289
                  ],
                  [
                    1.384,
                    0.185
                  ],
                  [
                    1.491,
                    0.08
                  ],
                  [
                    1.597,
                    -0.027
                  ],
                  [
                    1.704,
                    -0.133
                  ],
                  [
                    1.81,
                    -0.237
                  ],
                  [
                    1.917,
                    -0.339
                  ],
                  [
                    2.023,
                    -0.437
                  ],
                  [
                    2.13,
                    -0.53
                  ],
                  [
                    2.236,
                    -0.618
                  ],
                  [
                    2.343,
                    -0.698
                  ],
                  [
                    2.449,
                    -0.77
                  ],
                  [
                    2.556,
                    -0.833
                  ],
                  [
                    2.662,
                    -0.887
                  ],
                  [
                    2.769,
                    -0.931
                  ],
                  [
                    2.875,
                    -0.965
                  ],
                  [
                    2.982,
                    -0.987
                  ],
                  [
                    3.088,
                    -0.999
                  ],
                  [
                    3.195,
                    -0.999
                  ],
                  [
                    3.301,
                    -0.987
                  ],
                  [
                    3.408,
                    -0.965
                  ],
                  [
                    3.514,
                    -0.931
                  ],
                  [
                    3.621,
                    -0.887
                  ],
                  [
                    3.727,
                    -0.833
                  ],
                  [
                    3.834,
                    -0.77
                  ],
                  [
                    3.94,
                    -0.698
                  ],
                  [
                    4.047,
                    -0.618
                  ],
                  [
                    4.153,
                    -0.53
                  ],
                  [
                    4.26,
                    -0.437
                  ],
                  [
                    4.366,
                    -0.339
                  ],
                  [
                    4.473,
                    -0.237
                  ],
                  [
                    4.579,
                    -0.133
                  ],
                  [
                    4.686,
                    -0.027
                  ],
                  [
                    4.792,
                    0.08
                  ],
                  [
                    4.899,
                    0.185
                  ],
                  [
                    5.005,
                    0.289
                  ],
                  [
                    5.112,
                    0.389
                  ],
                  [
                    5.218,
                    0.485
                  ],
                  [
                    5.325,
                    0.575
                  ],
                  [
                    5.431,
                    0.659
                  ],
                  [
                    5.538,
                    0.735
                  ],
                  [
                    5.644,
                    0.803
                  ],
                  [
                    5.751,
                    0.862
                  ],
                  [
                    5.857,
                    0.911
                  ],
                  [
                    5.964,
                    0.949
                  ],
                  [
                    6.07,
                    0.977
                  ],
                  [
                    6.177,
                    0.994
                  ],
                  [
                    6.283,
                    1
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\cos\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.5
                ],
                "to": [
                  6.283,
                  0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  0.72
                ]
              },
              {
                "from": [
                  0,
                  -1
                ],
                "to": [
                  6.283,
                  -1
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-1",
                "labelAt": [
                  5.383,
                  -1.22
                ]
              }
            ],
            "points": [
              {
                "at": [
                  1.047,
                  0.5
                ],
                "label": "\\tfrac{\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.236,
                  0.5
                ],
                "label": "\\tfrac{5\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  3.142,
                  -1
                ],
                "label": "\\pi",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{3}, \\pi, \\displaystyle\\frac{5\\pi}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-040",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 57",
    "difficulty": "Challenge",
    "questionText": "Solve \\(3\\tan^2\\theta - 5\\sec\\theta + 1 = 0\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the Pythagorean identity for tangent.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "Recall \\(1 + \\tan^2\\theta = \\sec^2\\theta\\), found by dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\cos^2\\theta\\). It connects the \\(\\tan^2\\theta\\) and \\(\\sec\\theta\\) terms."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange for tangent squared.",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "Subtract \\(1\\) from both sides to write \\(\\tan^2\\theta\\) in terms of \\(\\sec\\theta\\). We convert to secant since the equation already contains \\(\\sec\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the equation.",
          "workingLatex": "3(\\sec^2\\theta - 1) - 5\\sec\\theta + 1 = 0",
          "explanation": "Replace \\(\\tan^2\\theta\\) with \\(\\sec^2\\theta - 1\\). Keep the factor \\(3\\) multiplying the whole bracket."
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket.",
          "workingLatex": "3\\sec^2\\theta - 3 - 5\\sec\\theta + 1 = 0",
          "explanation": "Distribute the \\(3\\): \\(3 \\times \\sec^2\\theta = 3\\sec^2\\theta\\) and \\(3 \\times (-1) = -3\\). The other terms are unchanged."
        },
        {
          "stepNumber": 5,
          "description": "Combine the constant terms.",
          "workingLatex": "3\\sec^2\\theta - 5\\sec\\theta - 2 = 0",
          "explanation": "Combine the constants \\(-3 + 1 = -2\\). A common slip is mis-adding these to get \\(-4\\) or \\(+2\\)."
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic.",
          "workingLatex": "(3\\sec\\theta + 1)(\\sec\\theta - 2) = 0",
          "explanation": "Treat \\(\\sec\\theta\\) like \\(x\\): \\(3x^2 - 5x - 2 = (3x + 1)(x - 2)\\). We split the middle term using \\(+1\\) and \\(-6\\), which multiply to \\(3 \\times (-2) = -6\\)."
        },
        {
          "stepNumber": 7,
          "description": "Check the factorisation by expanding.",
          "workingLatex": "3\\sec^2\\theta - 6\\sec\\theta + \\sec\\theta - 2 = 3\\sec^2\\theta - 5\\sec\\theta - 2",
          "explanation": "Expanding confirms the middle term is \\(-5\\sec\\theta\\), matching the quadratic. This verification guards against a sign error."
        },
        {
          "stepNumber": 8,
          "description": "Set the first factor to zero.",
          "workingLatex": "3\\sec\\theta + 1 = 0 \\Rightarrow \\sec\\theta = -\\frac{1}{3}",
          "explanation": "A product is zero when a factor is zero. Solving \\(3\\sec\\theta + 1 = 0\\) gives \\(\\sec\\theta = -\\displaystyle\\frac13\\)."
        },
        {
          "stepNumber": 9,
          "description": "Set the second factor to zero.",
          "workingLatex": "\\sec\\theta - 2 = 0 \\Rightarrow \\sec\\theta = 2",
          "explanation": "The other factor gives \\(\\sec\\theta = 2\\). We now convert each value to cosine."
        },
        {
          "stepNumber": 10,
          "description": "Convert the first value to cosine.",
          "workingLatex": "\\sec\\theta = -\\frac{1}{3} \\Rightarrow \\cos\\theta = -3",
          "explanation": "Since \\(\\cos\\theta = \\displaystyle\\frac{1}{\\sec\\theta}\\), inverting \\(\\sec\\theta = -\\displaystyle\\frac13\\) gives \\(\\cos\\theta = -3\\)."
        },
        {
          "stepNumber": 11,
          "description": "Convert the second value to cosine.",
          "workingLatex": "\\sec\\theta = 2 \\Rightarrow \\cos\\theta = \\frac{1}{2}",
          "explanation": "Likewise inverting \\(\\sec\\theta = 2\\) gives \\(\\cos\\theta = \\displaystyle\\frac12\\)."
        },
        {
          "stepNumber": 12,
          "description": "Reject the impossible branch.",
          "workingLatex": "\\cos\\theta = -3 \\ \\text{has no solution since} \\ |\\cos\\theta| \\le 1",
          "explanation": "Cosine always lies between \\(-1\\) and \\(1\\), so \\(\\cos\\theta = -3\\) is impossible and this branch gives no roots. Forgetting to discard it is a common error."
        },
        {
          "stepNumber": 13,
          "description": "Solve the valid equation, principal value.",
          "workingLatex": "\\cos\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{3}",
          "explanation": "The inverse cosine of \\(\\displaystyle\\frac12\\) is \\(\\displaystyle\\frac{\\pi}{3}\\), the first-quadrant solution."
        },
        {
          "stepNumber": 14,
          "description": "Find the fourth-quadrant value.",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}",
          "explanation": "Cosine is also positive in the fourth quadrant, where \\(\\theta = 2\\pi\\) minus the reference angle. This gives \\(\\displaystyle\\frac{5\\pi}{3}\\)."
        },
        {
          "stepNumber": 15,
          "description": "State the final solutions.",
          "workingLatex": "\\theta = \\frac{\\pi}{3}, \\ \\frac{5\\pi}{3}",
          "explanation": "Both values lie in \\([0, 2\\pi]\\) and avoid \\(\\displaystyle\\frac{\\pi}{2}\\) and \\(\\displaystyle\\frac{3\\pi}{2}\\) where \\(\\sec\\theta\\) is undefined, so both are kept.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    0.106,
                    0.994
                  ],
                  [
                    0.213,
                    0.977
                  ],
                  [
                    0.319,
                    0.949
                  ],
                  [
                    0.426,
                    0.911
                  ],
                  [
                    0.532,
                    0.862
                  ],
                  [
                    0.639,
                    0.803
                  ],
                  [
                    0.745,
                    0.735
                  ],
                  [
                    0.852,
                    0.659
                  ],
                  [
                    0.958,
                    0.575
                  ],
                  [
                    1.065,
                    0.485
                  ],
                  [
                    1.171,
                    0.389
                  ],
                  [
                    1.278,
                    0.289
                  ],
                  [
                    1.384,
                    0.185
                  ],
                  [
                    1.491,
                    0.08
                  ],
                  [
                    1.597,
                    -0.027
                  ],
                  [
                    1.704,
                    -0.133
                  ],
                  [
                    1.81,
                    -0.237
                  ],
                  [
                    1.917,
                    -0.339
                  ],
                  [
                    2.023,
                    -0.437
                  ],
                  [
                    2.13,
                    -0.53
                  ],
                  [
                    2.236,
                    -0.618
                  ],
                  [
                    2.343,
                    -0.698
                  ],
                  [
                    2.449,
                    -0.77
                  ],
                  [
                    2.556,
                    -0.833
                  ],
                  [
                    2.662,
                    -0.887
                  ],
                  [
                    2.769,
                    -0.931
                  ],
                  [
                    2.875,
                    -0.965
                  ],
                  [
                    2.982,
                    -0.987
                  ],
                  [
                    3.088,
                    -0.999
                  ],
                  [
                    3.195,
                    -0.999
                  ],
                  [
                    3.301,
                    -0.987
                  ],
                  [
                    3.408,
                    -0.965
                  ],
                  [
                    3.514,
                    -0.931
                  ],
                  [
                    3.621,
                    -0.887
                  ],
                  [
                    3.727,
                    -0.833
                  ],
                  [
                    3.834,
                    -0.77
                  ],
                  [
                    3.94,
                    -0.698
                  ],
                  [
                    4.047,
                    -0.618
                  ],
                  [
                    4.153,
                    -0.53
                  ],
                  [
                    4.26,
                    -0.437
                  ],
                  [
                    4.366,
                    -0.339
                  ],
                  [
                    4.473,
                    -0.237
                  ],
                  [
                    4.579,
                    -0.133
                  ],
                  [
                    4.686,
                    -0.027
                  ],
                  [
                    4.792,
                    0.08
                  ],
                  [
                    4.899,
                    0.185
                  ],
                  [
                    5.005,
                    0.289
                  ],
                  [
                    5.112,
                    0.389
                  ],
                  [
                    5.218,
                    0.485
                  ],
                  [
                    5.325,
                    0.575
                  ],
                  [
                    5.431,
                    0.659
                  ],
                  [
                    5.538,
                    0.735
                  ],
                  [
                    5.644,
                    0.803
                  ],
                  [
                    5.751,
                    0.862
                  ],
                  [
                    5.857,
                    0.911
                  ],
                  [
                    5.964,
                    0.949
                  ],
                  [
                    6.07,
                    0.977
                  ],
                  [
                    6.177,
                    0.994
                  ],
                  [
                    6.283,
                    1
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\cos\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.5
                ],
                "to": [
                  6.283,
                  0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  0.72
                ]
              }
            ],
            "points": [
              {
                "at": [
                  1.047,
                  0.5
                ],
                "label": "\\tfrac{\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.236,
                  0.5
                ],
                "label": "\\tfrac{5\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{3}, \\displaystyle\\frac{5\\pi}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-041",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 58",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\csc^2\\theta = 3 + \\cot\\theta\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note both functions share a denominator.",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}, \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Both \\(\\csc\\theta\\) and \\(\\cot\\theta\\) are built from \\(\\sin\\theta\\), so we will look for one Pythagorean identity linking them rather than converting fully to \\(\\sin\\theta\\) and \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity needed.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This identity comes from dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\sin^2\\theta\\). A common slip is to write \\(1+\\tan^2\\theta=\\csc^2\\theta\\); that is wrong, since \\(1+\\tan^2\\theta=\\sec^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Confirm the identity by the derivation.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Dividing each term of \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\sin^2\\theta\\) gives \\(1+\\cot^2\\theta=\\csc^2\\theta\\) term by term, which justifies using it next."
        },
        {
          "stepNumber": 4,
          "description": "Replace the left side.",
          "workingLatex": "1 + \\cot^2\\theta = 3 + \\cot\\theta",
          "explanation": "Substituting \\(\\csc^2\\theta\\) by \\(1+\\cot^2\\theta\\) leaves only \\(\\cot\\theta\\) in the equation, so it becomes a quadratic in one function."
        },
        {
          "stepNumber": 5,
          "description": "Subtract the constant from both sides.",
          "workingLatex": "\\cot^2\\theta = 2 + \\cot\\theta",
          "explanation": "Take \\(1\\) from each side: \\(3-1=2\\). This isolates the squared term before we gather everything to one side."
        },
        {
          "stepNumber": 6,
          "description": "Move all terms to one side.",
          "workingLatex": "\\cot^2\\theta - \\cot\\theta - 2 = 0",
          "explanation": "Subtract \\(2+\\cot\\theta\\) from both sides. Keep the squared term positive so the quadratic is in standard form."
        },
        {
          "stepNumber": 7,
          "description": "Set up the factor pair search.",
          "workingLatex": "\\text{find } a,b: \\; ab = -2, \\; a+b = -1",
          "explanation": "For a monic quadratic we need two numbers whose product is the constant \\(-2\\) and whose sum is the coefficient of \\(\\cot\\theta\\), namely \\(-1\\)."
        },
        {
          "stepNumber": 8,
          "description": "Factor the quadratic.",
          "workingLatex": "(\\cot\\theta - 2)(\\cot\\theta + 1) = 0",
          "explanation": "The numbers \\(-2\\) and \\(+1\\) multiply to \\(-2\\) and add to \\(-1\\). Expanding gives \\(\\cot^2\\theta-\\cot\\theta-2\\), confirming the factorisation."
        },
        {
          "stepNumber": 9,
          "description": "Split into two cases.",
          "workingLatex": "\\cot\\theta = 2 \\quad\\text{or}\\quad \\cot\\theta = -1",
          "explanation": "A product is zero when a factor is zero. Each case is solved separately."
        },
        {
          "stepNumber": 10,
          "description": "Convert each to tangent.",
          "workingLatex": "\\tan\\theta = \\frac{1}{2} \\quad\\text{or}\\quad \\tan\\theta = -1",
          "explanation": "Since \\(\\cot\\theta = \\displaystyle\\frac{1}{\\tan\\theta}\\), take reciprocals. It is usually easier to solve with \\(\\tan\\theta\\) on a calculator."
        },
        {
          "stepNumber": 11,
          "description": "Find the principal value of the first case.",
          "workingLatex": "\\theta = \\arctan\\frac{1}{2} \\approx 0.4636",
          "explanation": "This is the principal value in the first quadrant where \\(\\tan\\theta\\) is positive."
        },
        {
          "stepNumber": 12,
          "description": "Add the period of tangent.",
          "workingLatex": "\\theta = \\pi + \\arctan\\frac{1}{2} \\approx 3.605",
          "explanation": "Tangent repeats every \\(\\pi\\), so add \\(\\pi\\) to get the third-quadrant solution. Both values lie in \\([0,2\\pi]\\)."
        },
        {
          "stepNumber": 13,
          "description": "Identify the reference angle for the second case.",
          "workingLatex": "\\tan\\theta = -1 \\Rightarrow \\text{reference angle } \\frac{\\pi}{4}",
          "explanation": "Since \\(\\tan\\displaystyle\\frac{\\pi}{4}=1\\), the related acute angle is \\(\\displaystyle\\frac{\\pi}{4}\\); the negative sign tells us which quadrants to use."
        },
        {
          "stepNumber": 14,
          "description": "Place the second-case solutions.",
          "workingLatex": "\\theta = \\frac{3\\pi}{4}, \\; \\frac{7\\pi}{4}",
          "explanation": "Tangent is negative in the second and fourth quadrants, giving \\(\\pi-\\displaystyle\\frac{\\pi}{4}\\) and \\(2\\pi-\\displaystyle\\frac{\\pi}{4}\\). A common slip is to forget the second of these two angles."
        },
        {
          "stepNumber": 15,
          "description": "Check none make the original undefined.",
          "workingLatex": "\\sin\\theta \\neq 0 \\text{ at each of the four } \\theta",
          "explanation": "Both \\(\\csc\\theta\\) and \\(\\cot\\theta\\) require \\(\\sin\\theta\\neq0\\). None of these angles is a multiple of \\(\\pi\\), so all four are valid."
        },
        {
          "stepNumber": 16,
          "description": "Collect all solutions in range.",
          "workingLatex": "\\theta = \\arctan\\frac{1}{2},\\ \\pi+\\arctan\\frac{1}{2},\\ \\frac{3\\pi}{4},\\ \\frac{7\\pi}{4}",
          "explanation": "All four values are inside \\([0,2\\pi]\\), so these are the complete solutions.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -5,
            "yMax": 5,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -4,
              -2,
              0,
              2,
              4
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0.06,
                    0.06
                  ],
                  [
                    0.101,
                    0.102
                  ],
                  [
                    0.143,
                    0.144
                  ],
                  [
                    0.184,
                    0.186
                  ],
                  [
                    0.226,
                    0.23
                  ],
                  [
                    0.267,
                    0.274
                  ],
                  [
                    0.309,
                    0.319
                  ],
                  [
                    0.35,
                    0.365
                  ],
                  [
                    0.392,
                    0.413
                  ],
                  [
                    0.433,
                    0.462
                  ],
                  [
                    0.475,
                    0.514
                  ],
                  [
                    0.516,
                    0.567
                  ],
                  [
                    0.557,
                    0.623
                  ],
                  [
                    0.599,
                    0.682
                  ],
                  [
                    0.64,
                    0.745
                  ],
                  [
                    0.682,
                    0.812
                  ],
                  [
                    0.723,
                    0.883
                  ],
                  [
                    0.765,
                    0.959
                  ],
                  [
                    0.806,
                    1.042
                  ],
                  [
                    0.848,
                    1.133
                  ],
                  [
                    0.889,
                    1.232
                  ],
                  [
                    0.93,
                    1.342
                  ],
                  [
                    0.972,
                    1.465
                  ],
                  [
                    1.013,
                    1.604
                  ],
                  [
                    1.055,
                    1.763
                  ],
                  [
                    1.096,
                    1.947
                  ],
                  [
                    1.138,
                    2.163
                  ],
                  [
                    1.179,
                    2.422
                  ],
                  [
                    1.221,
                    2.738
                  ],
                  [
                    1.262,
                    3.136
                  ],
                  [
                    1.304,
                    3.652
                  ],
                  [
                    1.345,
                    4.353
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              },
              {
                "points": [
                  [
                    1.803,
                    -4.22
                  ],
                  [
                    1.89,
                    -3.028
                  ],
                  [
                    1.976,
                    -2.331
                  ],
                  [
                    2.062,
                    -1.867
                  ],
                  [
                    2.149,
                    -1.533
                  ],
                  [
                    2.235,
                    -1.277
                  ],
                  [
                    2.321,
                    -1.072
                  ],
                  [
                    2.408,
                    -0.902
                  ],
                  [
                    2.494,
                    -0.756
                  ],
                  [
                    2.58,
                    -0.629
                  ],
                  [
                    2.667,
                    -0.514
                  ],
                  [
                    2.753,
                    -0.409
                  ],
                  [
                    2.839,
                    -0.312
                  ],
                  [
                    2.926,
                    -0.219
                  ],
                  [
                    3.012,
                    -0.13
                  ],
                  [
                    3.098,
                    -0.043
                  ],
                  [
                    3.185,
                    0.043
                  ],
                  [
                    3.271,
                    0.13
                  ],
                  [
                    3.357,
                    0.219
                  ],
                  [
                    3.444,
                    0.312
                  ],
                  [
                    3.53,
                    0.409
                  ],
                  [
                    3.616,
                    0.514
                  ],
                  [
                    3.703,
                    0.629
                  ],
                  [
                    3.789,
                    0.756
                  ],
                  [
                    3.875,
                    0.902
                  ],
                  [
                    3.962,
                    1.072
                  ],
                  [
                    4.048,
                    1.277
                  ],
                  [
                    4.134,
                    1.533
                  ],
                  [
                    4.221,
                    1.867
                  ],
                  [
                    4.307,
                    2.331
                  ],
                  [
                    4.393,
                    3.028
                  ],
                  [
                    4.48,
                    4.22
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              },
              {
                "points": [
                  [
                    4.938,
                    -4.353
                  ],
                  [
                    4.98,
                    -3.652
                  ],
                  [
                    5.021,
                    -3.136
                  ],
                  [
                    5.063,
                    -2.738
                  ],
                  [
                    5.104,
                    -2.422
                  ],
                  [
                    5.145,
                    -2.163
                  ],
                  [
                    5.187,
                    -1.947
                  ],
                  [
                    5.228,
                    -1.763
                  ],
                  [
                    5.27,
                    -1.604
                  ],
                  [
                    5.311,
                    -1.465
                  ],
                  [
                    5.353,
                    -1.342
                  ],
                  [
                    5.394,
                    -1.232
                  ],
                  [
                    5.436,
                    -1.133
                  ],
                  [
                    5.477,
                    -1.042
                  ],
                  [
                    5.519,
                    -0.959
                  ],
                  [
                    5.56,
                    -0.883
                  ],
                  [
                    5.601,
                    -0.812
                  ],
                  [
                    5.643,
                    -0.745
                  ],
                  [
                    5.684,
                    -0.682
                  ],
                  [
                    5.726,
                    -0.623
                  ],
                  [
                    5.767,
                    -0.567
                  ],
                  [
                    5.809,
                    -0.514
                  ],
                  [
                    5.85,
                    -0.462
                  ],
                  [
                    5.892,
                    -0.413
                  ],
                  [
                    5.933,
                    -0.365
                  ],
                  [
                    5.974,
                    -0.319
                  ],
                  [
                    6.016,
                    -0.274
                  ],
                  [
                    6.057,
                    -0.23
                  ],
                  [
                    6.099,
                    -0.186
                  ],
                  [
                    6.14,
                    -0.144
                  ],
                  [
                    6.182,
                    -0.102
                  ],
                  [
                    6.223,
                    -0.06
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.5
                ],
                "to": [
                  6.283,
                  0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  0.72
                ]
              },
              {
                "from": [
                  0,
                  -1
                ],
                "to": [
                  6.283,
                  -1
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-1",
                "labelAt": [
                  5.383,
                  -1.22
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.464,
                  0.5
                ],
                "label": "\\arctan\\tfrac{1}{2}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  3.605,
                  0.5
                ],
                "label": "\\pi+\\arctan\\tfrac{1}{2}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.356,
                  -1
                ],
                "label": "\\tfrac{3\\pi}{4}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.498,
                  -1
                ],
                "label": "\\tfrac{7\\pi}{4}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\arctan\\displaystyle\\frac{1}{2}, \\pi + \\arctan\\displaystyle\\frac{1}{2}, \\displaystyle\\frac{3\\pi}{4}, \\displaystyle\\frac{7\\pi}{4}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-042",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 59",
    "difficulty": "Challenge",
    "questionText": "Solve \\(6\\cos^2\\theta + \\sin\\theta = 5\\) on \\([0, 2\\pi]\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Spot the mixed functions.",
          "workingLatex": "6\\cos^2\\theta + \\sin\\theta = 5",
          "explanation": "The equation contains both \\(\\cos^2\\theta\\) and \\(\\sin\\theta\\). To make a single-variable quadratic we must rewrite one in terms of the other."
        },
        {
          "stepNumber": 2,
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the core identity. We rearrange it so that the squared term we want to remove, \\(\\cos^2\\theta\\), is the subject."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate the cosine square.",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "Writing \\(\\cos^2\\theta\\) in terms of \\(\\sin\\theta\\) is the right choice because the equation already contains \\(\\sin\\theta\\) unsquared."
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the squared term.",
          "workingLatex": "6(1 - \\sin^2\\theta) + \\sin\\theta = 5",
          "explanation": "Replacing \\(\\cos^2\\theta\\) makes the whole equation depend on \\(\\sin\\theta\\) only, giving a single-variable quadratic."
        },
        {
          "stepNumber": 5,
          "description": "Expand the bracket.",
          "workingLatex": "6 - 6\\sin^2\\theta + \\sin\\theta = 5",
          "explanation": "Multiply \\(6\\) through \\((1-\\sin^2\\theta)\\). Be careful that the sign of the squared term becomes negative."
        },
        {
          "stepNumber": 6,
          "description": "Subtract 5 from both sides.",
          "workingLatex": "6 - 6\\sin^2\\theta + \\sin\\theta - 5 = 0",
          "explanation": "Bring the constant across first, before simplifying, so the cancellation of \\(6-5\\) is visible."
        },
        {
          "stepNumber": 7,
          "description": "Combine the constants.",
          "workingLatex": "-6\\sin^2\\theta + \\sin\\theta + 1 = 0",
          "explanation": "Since \\(6-5=1\\), the constant term is \\(+1\\). The leading coefficient is negative for now."
        },
        {
          "stepNumber": 8,
          "description": "Multiply through by \\(-1\\).",
          "workingLatex": "6\\sin^2\\theta - \\sin\\theta - 1 = 0",
          "explanation": "A positive leading coefficient is easier to factor. Multiplying by \\(-1\\) flips every sign."
        },
        {
          "stepNumber": 9,
          "description": "Set up the factorisation.",
          "workingLatex": "6\\sin^2\\theta = (3\\sin\\theta)(2\\sin\\theta), \\quad -1 = (+1)(-1)",
          "explanation": "We look for factors of the \\(6\\sin^2\\theta\\) and constant terms whose cross-products combine to the middle term \\(-\\sin\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Factor the quadratic.",
          "workingLatex": "(3\\sin\\theta + 1)(2\\sin\\theta - 1) = 0",
          "explanation": "Check the middle term: \\(3\\sin\\theta\\cdot(-1)+1\\cdot2\\sin\\theta=-3\\sin\\theta+2\\sin\\theta=-\\sin\\theta\\), as required."
        },
        {
          "stepNumber": 11,
          "description": "Split into two cases.",
          "workingLatex": "3\\sin\\theta + 1 = 0 \\quad\\text{or}\\quad 2\\sin\\theta - 1 = 0",
          "explanation": "Set each factor equal to zero; a product is zero only if a factor is zero."
        },
        {
          "stepNumber": 12,
          "description": "Solve each factor for sine.",
          "workingLatex": "\\sin\\theta = -\\frac{1}{3} \\quad\\text{or}\\quad \\sin\\theta = \\frac{1}{2}",
          "explanation": "Both values lie between \\(-1\\) and \\(1\\), so both are attainable by the sine function."
        },
        {
          "stepNumber": 13,
          "description": "Reference angle for the positive case.",
          "workingLatex": "\\arcsin\\frac{1}{2} = \\frac{\\pi}{6}",
          "explanation": "This is the exact acute angle whose sine is \\(\\displaystyle\\frac{1}{2}\\), used to locate both solutions."
        },
        {
          "stepNumber": 14,
          "description": "Solve \\(\\sin\\theta=\\displaystyle\\frac{1}{2}\\).",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\; \\frac{5\\pi}{6}",
          "explanation": "Sine is positive in quadrants one and two, giving \\(\\displaystyle\\frac{\\pi}{6}\\) and \\(\\pi-\\displaystyle\\frac{\\pi}{6}=\\displaystyle\\frac{5\\pi}{6}\\)."
        },
        {
          "stepNumber": 15,
          "description": "Find the acute angle for the negative case.",
          "workingLatex": "\\arcsin\\frac{1}{3} \\approx 0.3398",
          "explanation": "Use the positive value \\(\\displaystyle\\frac{1}{3}\\) to get the reference angle, then place the solutions where sine is negative."
        },
        {
          "stepNumber": 16,
          "description": "Place the third-quadrant solution.",
          "workingLatex": "\\theta = \\pi + \\arcsin\\frac{1}{3} \\approx 3.481",
          "explanation": "In the third quadrant the angle is the reference angle added to \\(\\pi\\), where sine is negative."
        },
        {
          "stepNumber": 17,
          "description": "Place the fourth-quadrant solution.",
          "workingLatex": "\\theta = 2\\pi - \\arcsin\\frac{1}{3} \\approx 5.943",
          "explanation": "In the fourth quadrant sine is also negative. A common slip is to write \\(-\\arcsin\\displaystyle\\frac{1}{3}\\), which falls outside \\([0,2\\pi]\\)."
        },
        {
          "stepNumber": 18,
          "description": "Collect all solutions in range.",
          "workingLatex": "\\theta = \\frac{\\pi}{6},\\ \\frac{5\\pi}{6},\\ \\pi+\\arcsin\\frac{1}{3},\\ 2\\pi-\\arcsin\\frac{1}{3}",
          "explanation": "All four values lie in \\([0,2\\pi]\\), so the equation has four solutions.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.106,
                    0.106
                  ],
                  [
                    0.213,
                    0.211
                  ],
                  [
                    0.319,
                    0.314
                  ],
                  [
                    0.426,
                    0.413
                  ],
                  [
                    0.532,
                    0.508
                  ],
                  [
                    0.639,
                    0.596
                  ],
                  [
                    0.745,
                    0.678
                  ],
                  [
                    0.852,
                    0.753
                  ],
                  [
                    0.958,
                    0.818
                  ],
                  [
                    1.065,
                    0.875
                  ],
                  [
                    1.171,
                    0.921
                  ],
                  [
                    1.278,
                    0.957
                  ],
                  [
                    1.384,
                    0.983
                  ],
                  [
                    1.491,
                    0.997
                  ],
                  [
                    1.597,
                    1
                  ],
                  [
                    1.704,
                    0.991
                  ],
                  [
                    1.81,
                    0.971
                  ],
                  [
                    1.917,
                    0.941
                  ],
                  [
                    2.023,
                    0.899
                  ],
                  [
                    2.13,
                    0.848
                  ],
                  [
                    2.236,
                    0.787
                  ],
                  [
                    2.343,
                    0.716
                  ],
                  [
                    2.449,
                    0.638
                  ],
                  [
                    2.556,
                    0.553
                  ],
                  [
                    2.662,
                    0.461
                  ],
                  [
                    2.769,
                    0.364
                  ],
                  [
                    2.875,
                    0.263
                  ],
                  [
                    2.982,
                    0.159
                  ],
                  [
                    3.088,
                    0.053
                  ],
                  [
                    3.195,
                    -0.053
                  ],
                  [
                    3.301,
                    -0.159
                  ],
                  [
                    3.408,
                    -0.263
                  ],
                  [
                    3.514,
                    -0.364
                  ],
                  [
                    3.621,
                    -0.461
                  ],
                  [
                    3.727,
                    -0.553
                  ],
                  [
                    3.834,
                    -0.638
                  ],
                  [
                    3.94,
                    -0.716
                  ],
                  [
                    4.047,
                    -0.787
                  ],
                  [
                    4.153,
                    -0.848
                  ],
                  [
                    4.26,
                    -0.899
                  ],
                  [
                    4.366,
                    -0.941
                  ],
                  [
                    4.473,
                    -0.971
                  ],
                  [
                    4.579,
                    -0.991
                  ],
                  [
                    4.686,
                    -1
                  ],
                  [
                    4.792,
                    -0.997
                  ],
                  [
                    4.899,
                    -0.983
                  ],
                  [
                    5.005,
                    -0.957
                  ],
                  [
                    5.112,
                    -0.921
                  ],
                  [
                    5.218,
                    -0.875
                  ],
                  [
                    5.325,
                    -0.818
                  ],
                  [
                    5.431,
                    -0.753
                  ],
                  [
                    5.538,
                    -0.678
                  ],
                  [
                    5.644,
                    -0.596
                  ],
                  [
                    5.751,
                    -0.508
                  ],
                  [
                    5.857,
                    -0.413
                  ],
                  [
                    5.964,
                    -0.314
                  ],
                  [
                    6.07,
                    -0.211
                  ],
                  [
                    6.177,
                    -0.106
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\sin\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.5
                ],
                "to": [
                  6.283,
                  0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  0.72
                ]
              },
              {
                "from": [
                  0,
                  -0.333
                ],
                "to": [
                  6.283,
                  -0.333
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-\\tfrac{1}{3}",
                "labelAt": [
                  5.383,
                  -0.553
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.524,
                  0.5
                ],
                "label": "\\tfrac{\\pi}{6}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.618,
                  0.5
                ],
                "label": "\\tfrac{5\\pi}{6}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  3.481,
                  -0.333
                ],
                "label": "\\pi+\\arcsin\\tfrac{1}{3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.943,
                  -0.333
                ],
                "label": "2\\pi-\\arcsin\\tfrac{1}{3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{6}, \\displaystyle\\frac{5\\pi}{6}, \\pi + \\arcsin\\displaystyle\\frac{1}{3}, 2\\pi - \\arcsin\\displaystyle\\frac{1}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-043",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 60",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\sec\\theta - 2\\cos\\theta = \\sec\\theta\\tan^2\\theta\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Group the secant terms.",
          "workingLatex": "\\sec\\theta - \\sec\\theta\\tan^2\\theta = 2\\cos\\theta",
          "explanation": "Move \\(\\sec\\theta\\tan^2\\theta\\) to the left so both \\(\\sec\\theta\\) terms are together, ready to factor."
        },
        {
          "stepNumber": 2,
          "description": "Factor out \\(\\sec\\theta\\).",
          "workingLatex": "\\sec\\theta\\,(1 - \\tan^2\\theta) = 2\\cos\\theta",
          "explanation": "Both left-hand terms share \\(\\sec\\theta\\). Factoring exposes the bracket \\(1-\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Write \\(\\sec\\theta\\) as a reciprocal.",
          "workingLatex": "\\frac{1}{\\cos\\theta}(1 - \\tan^2\\theta) = 2\\cos\\theta",
          "explanation": "Reciprocal identity \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\). This assumes \\(\\cos\\theta\\neq0\\), which is required for \\(\\sec\\theta\\) to exist anyway."
        },
        {
          "stepNumber": 4,
          "description": "Multiply both sides by \\(\\cos\\theta\\).",
          "workingLatex": "1 - \\tan^2\\theta = 2\\cos^2\\theta",
          "explanation": "Clearing the denominator removes the secant. The right side becomes \\(2\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Convert tangent to sin over cos.",
          "workingLatex": "1 - \\frac{\\sin^2\\theta}{\\cos^2\\theta} = 2\\cos^2\\theta",
          "explanation": "Quotient identity \\(\\tan^2\\theta=\\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\). Now everything is in \\(\\sin\\theta\\) and \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Multiply each term by \\(\\cos^2\\theta\\).",
          "workingLatex": "1\\cdot\\cos^2\\theta - \\frac{\\sin^2\\theta}{\\cos^2\\theta}\\cdot\\cos^2\\theta = 2\\cos^2\\theta\\cdot\\cos^2\\theta",
          "explanation": "Write the multiplication out on every term first, so the cancellation in the fraction is explicit before simplifying."
        },
        {
          "stepNumber": 7,
          "description": "Simplify after clearing the fraction.",
          "workingLatex": "\\cos^2\\theta - \\sin^2\\theta = 2\\cos^4\\theta",
          "explanation": "The \\(\\cos^2\\theta\\) cancels in the fraction term, leaving a polynomial relation in \\(\\sin\\theta\\) and \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Replace \\(\\sin^2\\theta\\) using Pythagoras.",
          "workingLatex": "\\cos^2\\theta - (1 - \\cos^2\\theta) = 2\\cos^4\\theta",
          "explanation": "Use \\(\\sin^2\\theta=1-\\cos^2\\theta\\) so the left side is purely in \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Remove the bracket.",
          "workingLatex": "\\cos^2\\theta - 1 + \\cos^2\\theta = 2\\cos^4\\theta",
          "explanation": "Distribute the minus sign over the bracket: \\(-(1-\\cos^2\\theta)=-1+\\cos^2\\theta\\). Watch the sign on the \\(-1\\)."
        },
        {
          "stepNumber": 10,
          "description": "Simplify the left side.",
          "workingLatex": "2\\cos^2\\theta - 1 = 2\\cos^4\\theta",
          "explanation": "Combine the like terms: \\(\\cos^2\\theta+\\cos^2\\theta=2\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "Rearrange into a quartic.",
          "workingLatex": "2\\cos^4\\theta - 2\\cos^2\\theta + 1 = 0",
          "explanation": "Move every term to the right-hand side so the highest power is positive and the equation is set to zero."
        },
        {
          "stepNumber": 12,
          "description": "Substitute to get a quadratic.",
          "workingLatex": "\\text{let } u = \\cos^2\\theta: \\quad 2u^2 - 2u + 1 = 0",
          "explanation": "Letting \\(u=\\cos^2\\theta\\) turns the quartic into a quadratic in \\(u\\). This is the key step to test for real solutions."
        },
        {
          "stepNumber": 13,
          "description": "Compute the discriminant.",
          "workingLatex": "\\Delta = (-2)^2 - 4(2)(1) = 4 - 8 = -4",
          "explanation": "A negative discriminant means the quadratic in \\(u\\) has no real root, so \\(\\cos^2\\theta\\) has no real value."
        },
        {
          "stepNumber": 14,
          "description": "Interpret the negative discriminant.",
          "workingLatex": "u = \\cos^2\\theta \\notin \\mathbb{R} \\Rightarrow \\text{no real } \\cos\\theta",
          "explanation": "Since \\(\\cos^2\\theta\\) cannot take a complex value for a real angle, no real \\(\\theta\\) can satisfy the equation."
        },
        {
          "stepNumber": 15,
          "description": "Cross-check via a double-angle form.",
          "workingLatex": "2\\cos^2\\theta\\,\\sin^2\\theta = 1",
          "explanation": "Rearranging \\(\\cos^2\\theta-\\sin^2\\theta=2\\cos^4\\theta\\) another way, or starting again, leads to \\(2\\cos^2\\theta\\sin^2\\theta=1\\); we test whether this can hold."
        },
        {
          "stepNumber": 16,
          "description": "Rewrite using \\(\\sin 2\\theta\\).",
          "workingLatex": "\\frac{1}{2}\\sin^2 2\\theta = 1 \\;\\Rightarrow\\; \\sin^2 2\\theta = 2",
          "explanation": "Since \\(\\sin 2\\theta=2\\sin\\theta\\cos\\theta\\), we have \\(4\\sin^2\\theta\\cos^2\\theta=\\sin^2 2\\theta\\), so \\(2\\sin^2\\theta\\cos^2\\theta=\\displaystyle\\frac12\\sin^2 2\\theta\\)."
        },
        {
          "stepNumber": 17,
          "description": "Show this is impossible.",
          "workingLatex": "\\sin^2 2\\theta \\le 1 < 2",
          "explanation": "A squared sine can never exceed \\(1\\), so \\(\\sin^2 2\\theta=2\\) is impossible. Both methods agree there is no solution."
        },
        {
          "stepNumber": 18,
          "description": "State the conclusion.",
          "workingLatex": "\\text{No real } \\theta \\text{ satisfies the equation on } [0,2\\pi]",
          "explanation": "Since no real value of \\(\\cos\\theta\\) works, there are no solutions in the interval."
        }
      ],
      "finalAnswer": "No solutions (RHS would exceed 1).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-044",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 29",
    "difficulty": "Standard",
    "questionText": "Solve \\(4\\sin^2\\theta = 3\\) on \\([0, 2\\pi]\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the squared term.",
          "workingLatex": "\\sin^2\\theta = \\frac{3}{4}",
          "explanation": "Divide both sides by \\(4\\). This leaves \\(\\sin^2\\theta\\) by itself, ready for a square root."
        },
        {
          "stepNumber": 2,
          "description": "Take the square root, keeping both signs.",
          "workingLatex": "\\sin\\theta = \\pm\\sqrt{\\frac{3}{4}}",
          "explanation": "Square rooting introduces a \\(\\pm\\). Forgetting the negative root is the most common mistake here and loses half the solutions."
        },
        {
          "stepNumber": 3,
          "description": "Simplify the surd.",
          "workingLatex": "\\sin\\theta = \\pm\\frac{\\sqrt{3}}{2}",
          "explanation": "Since \\(\\sqrt{4}=2\\), we get \\(\\displaystyle\\frac{\\sqrt{3}}{2}\\). This is a standard exact value linked to a \\(\\displaystyle\\frac{\\pi}{3}\\) reference angle."
        },
        {
          "stepNumber": 4,
          "description": "Identify the reference angle.",
          "workingLatex": "\\arcsin\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{3}",
          "explanation": "The acute angle whose sine is \\(\\displaystyle\\frac{\\sqrt{3}}{2}\\) is \\(\\displaystyle\\frac{\\pi}{3}\\); every solution is built from this reference angle."
        },
        {
          "stepNumber": 5,
          "description": "Solve the positive case.",
          "workingLatex": "\\sin\\theta = \\frac{\\sqrt{3}}{2} \\Rightarrow \\theta = \\frac{\\pi}{3}, \\frac{2\\pi}{3}",
          "explanation": "Sine is positive in quadrants one and two, so the second angle is \\(\\pi-\\displaystyle\\frac{\\pi}{3}=\\displaystyle\\frac{2\\pi}{3}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Solve the negative case.",
          "workingLatex": "\\sin\\theta = -\\frac{\\sqrt{3}}{2} \\Rightarrow \\theta = \\frac{4\\pi}{3}, \\frac{5\\pi}{3}",
          "explanation": "Sine is negative in quadrants three and four; the same reference angle gives \\(\\pi+\\displaystyle\\frac{\\pi}{3}=\\displaystyle\\frac{4\\pi}{3}\\) and \\(2\\pi-\\displaystyle\\frac{\\pi}{3}=\\displaystyle\\frac{5\\pi}{3}\\)."
        },
        {
          "stepNumber": 7,
          "description": "List all solutions in range.",
          "workingLatex": "\\theta = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}",
          "explanation": "All four values lie within \\([0,2\\pi]\\), so the equation has four solutions.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.106,
                    0.106
                  ],
                  [
                    0.213,
                    0.211
                  ],
                  [
                    0.319,
                    0.314
                  ],
                  [
                    0.426,
                    0.413
                  ],
                  [
                    0.532,
                    0.508
                  ],
                  [
                    0.639,
                    0.596
                  ],
                  [
                    0.745,
                    0.678
                  ],
                  [
                    0.852,
                    0.753
                  ],
                  [
                    0.958,
                    0.818
                  ],
                  [
                    1.065,
                    0.875
                  ],
                  [
                    1.171,
                    0.921
                  ],
                  [
                    1.278,
                    0.957
                  ],
                  [
                    1.384,
                    0.983
                  ],
                  [
                    1.491,
                    0.997
                  ],
                  [
                    1.597,
                    1
                  ],
                  [
                    1.704,
                    0.991
                  ],
                  [
                    1.81,
                    0.971
                  ],
                  [
                    1.917,
                    0.941
                  ],
                  [
                    2.023,
                    0.899
                  ],
                  [
                    2.13,
                    0.848
                  ],
                  [
                    2.236,
                    0.787
                  ],
                  [
                    2.343,
                    0.716
                  ],
                  [
                    2.449,
                    0.638
                  ],
                  [
                    2.556,
                    0.553
                  ],
                  [
                    2.662,
                    0.461
                  ],
                  [
                    2.769,
                    0.364
                  ],
                  [
                    2.875,
                    0.263
                  ],
                  [
                    2.982,
                    0.159
                  ],
                  [
                    3.088,
                    0.053
                  ],
                  [
                    3.195,
                    -0.053
                  ],
                  [
                    3.301,
                    -0.159
                  ],
                  [
                    3.408,
                    -0.263
                  ],
                  [
                    3.514,
                    -0.364
                  ],
                  [
                    3.621,
                    -0.461
                  ],
                  [
                    3.727,
                    -0.553
                  ],
                  [
                    3.834,
                    -0.638
                  ],
                  [
                    3.94,
                    -0.716
                  ],
                  [
                    4.047,
                    -0.787
                  ],
                  [
                    4.153,
                    -0.848
                  ],
                  [
                    4.26,
                    -0.899
                  ],
                  [
                    4.366,
                    -0.941
                  ],
                  [
                    4.473,
                    -0.971
                  ],
                  [
                    4.579,
                    -0.991
                  ],
                  [
                    4.686,
                    -1
                  ],
                  [
                    4.792,
                    -0.997
                  ],
                  [
                    4.899,
                    -0.983
                  ],
                  [
                    5.005,
                    -0.957
                  ],
                  [
                    5.112,
                    -0.921
                  ],
                  [
                    5.218,
                    -0.875
                  ],
                  [
                    5.325,
                    -0.818
                  ],
                  [
                    5.431,
                    -0.753
                  ],
                  [
                    5.538,
                    -0.678
                  ],
                  [
                    5.644,
                    -0.596
                  ],
                  [
                    5.751,
                    -0.508
                  ],
                  [
                    5.857,
                    -0.413
                  ],
                  [
                    5.964,
                    -0.314
                  ],
                  [
                    6.07,
                    -0.211
                  ],
                  [
                    6.177,
                    -0.106
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\sin\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.866
                ],
                "to": [
                  6.283,
                  0.866
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{\\sqrt3}{2}",
                "labelAt": [
                  5.383,
                  1.086
                ]
              },
              {
                "from": [
                  0,
                  -0.866
                ],
                "to": [
                  6.283,
                  -0.866
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-\\tfrac{\\sqrt3}{2}",
                "labelAt": [
                  5.383,
                  -1.086
                ]
              }
            ],
            "points": [
              {
                "at": [
                  1.047,
                  0.866
                ],
                "label": "\\tfrac{\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.094,
                  0.866
                ],
                "label": "\\tfrac{2\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  4.189,
                  -0.866
                ],
                "label": "\\tfrac{4\\pi}{3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.236,
                  -0.866
                ],
                "label": "\\tfrac{5\\pi}{3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{3}, \\displaystyle\\frac{2\\pi}{3}, \\displaystyle\\frac{4\\pi}{3}, \\displaystyle\\frac{5\\pi}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-045",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 30",
    "difficulty": "Standard",
    "questionText": "Solve \\(2\\sin\\theta\\cos\\theta = \\sin\\theta\\) on \\([0, 2\\pi]\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Move everything to one side.",
          "workingLatex": "2\\sin\\theta\\cos\\theta - \\sin\\theta = 0",
          "explanation": "Never divide both sides by \\(\\sin\\theta\\); that would discard the solutions where \\(\\sin\\theta=0\\). Subtract instead."
        },
        {
          "stepNumber": 2,
          "description": "Spot the common factor.",
          "workingLatex": "2\\sin\\theta\\cos\\theta - \\sin\\theta = \\sin\\theta(2\\cos\\theta) - \\sin\\theta(1)",
          "explanation": "Each term contains \\(\\sin\\theta\\). Writing both terms with \\(\\sin\\theta\\) shown makes the factorisation explicit."
        },
        {
          "stepNumber": 3,
          "description": "Factor out \\(\\sin\\theta\\).",
          "workingLatex": "\\sin\\theta\\,(2\\cos\\theta - 1) = 0",
          "explanation": "Factoring turns the equation into a product equal to zero, which we can split into cases."
        },
        {
          "stepNumber": 4,
          "description": "Split into two cases.",
          "workingLatex": "\\sin\\theta = 0 \\quad\\text{or}\\quad 2\\cos\\theta - 1 = 0",
          "explanation": "A product is zero when at least one factor is zero, so solve each case separately."
        },
        {
          "stepNumber": 5,
          "description": "Solve \\(\\sin\\theta = 0\\).",
          "workingLatex": "\\theta = 0, \\pi, 2\\pi",
          "explanation": "Sine is zero at multiples of \\(\\pi\\); within the closed interval \\([0,2\\pi]\\) the endpoints \\(0\\) and \\(2\\pi\\) are both included."
        },
        {
          "stepNumber": 6,
          "description": "Rearrange the second factor.",
          "workingLatex": "2\\cos\\theta = 1",
          "explanation": "Add \\(1\\) to both sides of \\(2\\cos\\theta-1=0\\) to isolate the cosine term before dividing."
        },
        {
          "stepNumber": 7,
          "description": "Solve for cosine.",
          "workingLatex": "\\cos\\theta = \\frac{1}{2}",
          "explanation": "Divide by \\(2\\). This gives a standard exact cosine value with reference angle \\(\\displaystyle\\frac{\\pi}{3}\\)."
        },
        {
          "stepNumber": 8,
          "description": "Solve \\(\\cos\\theta = \\displaystyle\\frac{1}{2}\\).",
          "workingLatex": "\\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}",
          "explanation": "Cosine is positive in quadrants one and four; the reference angle is \\(\\displaystyle\\frac{\\pi}{3}\\), giving \\(2\\pi-\\displaystyle\\frac{\\pi}{3}=\\displaystyle\\frac{5\\pi}{3}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Collect all solutions in range.",
          "workingLatex": "\\theta = 0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}, 2\\pi",
          "explanation": "Five values lie in \\([0,2\\pi]\\). Keeping the \\(\\sin\\theta=0\\) roots is exactly why we factored rather than divided.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.063,
                    0.127
                  ],
                  [
                    0.127,
                    0.251
                  ],
                  [
                    0.19,
                    0.372
                  ],
                  [
                    0.254,
                    0.486
                  ],
                  [
                    0.317,
                    0.593
                  ],
                  [
                    0.381,
                    0.69
                  ],
                  [
                    0.444,
                    0.776
                  ],
                  [
                    0.508,
                    0.85
                  ],
                  [
                    0.571,
                    0.91
                  ],
                  [
                    0.635,
                    0.955
                  ],
                  [
                    0.698,
                    0.985
                  ],
                  [
                    0.762,
                    0.999
                  ],
                  [
                    0.825,
                    0.997
                  ],
                  [
                    0.889,
                    0.979
                  ],
                  [
                    0.952,
                    0.945
                  ],
                  [
                    1.015,
                    0.896
                  ],
                  [
                    1.079,
                    0.833
                  ],
                  [
                    1.142,
                    0.756
                  ],
                  [
                    1.206,
                    0.667
                  ],
                  [
                    1.269,
                    0.567
                  ],
                  [
                    1.333,
                    0.458
                  ],
                  [
                    1.396,
                    0.342
                  ],
                  [
                    1.46,
                    0.22
                  ],
                  [
                    1.523,
                    0.095
                  ],
                  [
                    1.587,
                    -0.032
                  ],
                  [
                    1.65,
                    -0.158
                  ],
                  [
                    1.714,
                    -0.282
                  ],
                  [
                    1.777,
                    -0.401
                  ],
                  [
                    1.841,
                    -0.514
                  ],
                  [
                    1.904,
                    -0.618
                  ],
                  [
                    1.967,
                    -0.713
                  ],
                  [
                    2.031,
                    -0.796
                  ],
                  [
                    2.094,
                    -0.866
                  ],
                  [
                    2.158,
                    -0.922
                  ],
                  [
                    2.221,
                    -0.964
                  ],
                  [
                    2.285,
                    -0.99
                  ],
                  [
                    2.348,
                    -1
                  ],
                  [
                    2.412,
                    -0.994
                  ],
                  [
                    2.475,
                    -0.972
                  ],
                  [
                    2.539,
                    -0.934
                  ],
                  [
                    2.602,
                    -0.881
                  ],
                  [
                    2.666,
                    -0.815
                  ],
                  [
                    2.729,
                    -0.735
                  ],
                  [
                    2.793,
                    -0.643
                  ],
                  [
                    2.856,
                    -0.541
                  ],
                  [
                    2.919,
                    -0.43
                  ],
                  [
                    2.983,
                    -0.312
                  ],
                  [
                    3.046,
                    -0.189
                  ],
                  [
                    3.11,
                    -0.063
                  ],
                  [
                    3.173,
                    0.063
                  ],
                  [
                    3.237,
                    0.189
                  ],
                  [
                    3.3,
                    0.312
                  ],
                  [
                    3.364,
                    0.43
                  ],
                  [
                    3.427,
                    0.541
                  ],
                  [
                    3.491,
                    0.643
                  ],
                  [
                    3.554,
                    0.735
                  ],
                  [
                    3.618,
                    0.815
                  ],
                  [
                    3.681,
                    0.881
                  ],
                  [
                    3.745,
                    0.934
                  ],
                  [
                    3.808,
                    0.972
                  ],
                  [
                    3.871,
                    0.994
                  ],
                  [
                    3.935,
                    1
                  ],
                  [
                    3.998,
                    0.99
                  ],
                  [
                    4.062,
                    0.964
                  ],
                  [
                    4.125,
                    0.922
                  ],
                  [
                    4.189,
                    0.866
                  ],
                  [
                    4.252,
                    0.796
                  ],
                  [
                    4.316,
                    0.713
                  ],
                  [
                    4.379,
                    0.618
                  ],
                  [
                    4.443,
                    0.514
                  ],
                  [
                    4.506,
                    0.401
                  ],
                  [
                    4.57,
                    0.282
                  ],
                  [
                    4.633,
                    0.158
                  ],
                  [
                    4.697,
                    0.032
                  ],
                  [
                    4.76,
                    -0.095
                  ],
                  [
                    4.823,
                    -0.22
                  ],
                  [
                    4.887,
                    -0.342
                  ],
                  [
                    4.95,
                    -0.458
                  ],
                  [
                    5.014,
                    -0.567
                  ],
                  [
                    5.077,
                    -0.667
                  ],
                  [
                    5.141,
                    -0.756
                  ],
                  [
                    5.204,
                    -0.833
                  ],
                  [
                    5.268,
                    -0.896
                  ],
                  [
                    5.331,
                    -0.945
                  ],
                  [
                    5.395,
                    -0.979
                  ],
                  [
                    5.458,
                    -0.997
                  ],
                  [
                    5.522,
                    -0.999
                  ],
                  [
                    5.585,
                    -0.985
                  ],
                  [
                    5.649,
                    -0.955
                  ],
                  [
                    5.712,
                    -0.91
                  ],
                  [
                    5.775,
                    -0.85
                  ],
                  [
                    5.839,
                    -0.776
                  ],
                  [
                    5.902,
                    -0.69
                  ],
                  [
                    5.966,
                    -0.593
                  ],
                  [
                    6.029,
                    -0.486
                  ],
                  [
                    6.093,
                    -0.372
                  ],
                  [
                    6.156,
                    -0.251
                  ],
                  [
                    6.22,
                    -0.127
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = 2\\sin\\theta\\cos\\theta",
                "labelAt": [
                  0.685,
                  1.18
                ],
                "width": 2
              },
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.106,
                    0.106
                  ],
                  [
                    0.213,
                    0.211
                  ],
                  [
                    0.319,
                    0.314
                  ],
                  [
                    0.426,
                    0.413
                  ],
                  [
                    0.532,
                    0.508
                  ],
                  [
                    0.639,
                    0.596
                  ],
                  [
                    0.745,
                    0.678
                  ],
                  [
                    0.852,
                    0.753
                  ],
                  [
                    0.958,
                    0.818
                  ],
                  [
                    1.065,
                    0.875
                  ],
                  [
                    1.171,
                    0.921
                  ],
                  [
                    1.278,
                    0.957
                  ],
                  [
                    1.384,
                    0.983
                  ],
                  [
                    1.491,
                    0.997
                  ],
                  [
                    1.597,
                    1
                  ],
                  [
                    1.704,
                    0.991
                  ],
                  [
                    1.81,
                    0.971
                  ],
                  [
                    1.917,
                    0.941
                  ],
                  [
                    2.023,
                    0.899
                  ],
                  [
                    2.13,
                    0.848
                  ],
                  [
                    2.236,
                    0.787
                  ],
                  [
                    2.343,
                    0.716
                  ],
                  [
                    2.449,
                    0.638
                  ],
                  [
                    2.556,
                    0.553
                  ],
                  [
                    2.662,
                    0.461
                  ],
                  [
                    2.769,
                    0.364
                  ],
                  [
                    2.875,
                    0.263
                  ],
                  [
                    2.982,
                    0.159
                  ],
                  [
                    3.088,
                    0.053
                  ],
                  [
                    3.195,
                    -0.053
                  ],
                  [
                    3.301,
                    -0.159
                  ],
                  [
                    3.408,
                    -0.263
                  ],
                  [
                    3.514,
                    -0.364
                  ],
                  [
                    3.621,
                    -0.461
                  ],
                  [
                    3.727,
                    -0.553
                  ],
                  [
                    3.834,
                    -0.638
                  ],
                  [
                    3.94,
                    -0.716
                  ],
                  [
                    4.047,
                    -0.787
                  ],
                  [
                    4.153,
                    -0.848
                  ],
                  [
                    4.26,
                    -0.899
                  ],
                  [
                    4.366,
                    -0.941
                  ],
                  [
                    4.473,
                    -0.971
                  ],
                  [
                    4.579,
                    -0.991
                  ],
                  [
                    4.686,
                    -1
                  ],
                  [
                    4.792,
                    -0.997
                  ],
                  [
                    4.899,
                    -0.983
                  ],
                  [
                    5.005,
                    -0.957
                  ],
                  [
                    5.112,
                    -0.921
                  ],
                  [
                    5.218,
                    -0.875
                  ],
                  [
                    5.325,
                    -0.818
                  ],
                  [
                    5.431,
                    -0.753
                  ],
                  [
                    5.538,
                    -0.678
                  ],
                  [
                    5.644,
                    -0.596
                  ],
                  [
                    5.751,
                    -0.508
                  ],
                  [
                    5.857,
                    -0.413
                  ],
                  [
                    5.964,
                    -0.314
                  ],
                  [
                    6.07,
                    -0.211
                  ],
                  [
                    6.177,
                    -0.106
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#0f766e",
                "label": "y = \\sin\\theta",
                "labelAt": [
                  3.927,
                  1.18
                ],
                "width": 2
              }
            ],
            "points": [
              {
                "at": [
                  0,
                  0
                ],
                "label": "0",
                "labelAnchor": "sw",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  1.047,
                  0.866
                ],
                "label": "\\tfrac{\\pi}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  3.142,
                  0
                ],
                "label": "\\pi",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.236,
                  -0.866
                ],
                "label": "\\tfrac{5\\pi}{3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  6.283,
                  0
                ],
                "label": "2\\pi",
                "labelAnchor": "se",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = 0, \\pi, 2\\pi, \\displaystyle\\frac{\\pi}{3}, \\displaystyle\\frac{5\\pi}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-046",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 31",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\sin^2\\theta - \\sin^2\\theta\\cos^2\\theta}{\\cos^2\\theta}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out the expression.",
          "workingLatex": "\\frac{\\sin^2\\theta - \\sin^2\\theta\\cos^2\\theta}{\\cos^2\\theta}",
          "explanation": "We aim to simplify this single fraction to a compact trig form. The denominator is fixed as \\(\\cos^2\\theta\\), so all the work happens in the numerator first."
        },
        {
          "stepNumber": 2,
          "description": "Identify the common factor.",
          "workingLatex": "\\sin^2\\theta - \\sin^2\\theta\\cos^2\\theta",
          "explanation": "Look only at the numerator. Both terms contain a factor of \\(\\sin^2\\theta\\), which signals that factorising will be the cleanest route."
        },
        {
          "stepNumber": 3,
          "description": "Factor the numerator.",
          "workingLatex": "\\frac{\\sin^2\\theta\\left(1 - \\cos^2\\theta\\right)}{\\cos^2\\theta}",
          "explanation": "Take \\(\\sin^2\\theta\\) outside the bracket. A common slip is to forget the \\(1\\) left behind from the first term, which has no extra factor once \\(\\sin^2\\theta\\) is removed."
        },
        {
          "stepNumber": 4,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "We will use the fundamental Pythagorean identity to deal with the bracket \\(1 - \\cos^2\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Rearrange the identity.",
          "workingLatex": "1 - \\cos^2\\theta = \\sin^2\\theta",
          "explanation": "Subtracting \\(\\cos^2\\theta\\) from both sides isolates the bracket form we need. Do not confuse this with \\(1 - \\sin^2\\theta = \\cos^2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the bracket.",
          "workingLatex": "\\frac{\\sin^2\\theta \\cdot \\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Replacing \\(1 - \\cos^2\\theta\\) with \\(\\sin^2\\theta\\) turns the numerator into a product of two \\(\\sin^2\\theta\\) factors."
        },
        {
          "stepNumber": 7,
          "description": "Combine the numerator powers.",
          "workingLatex": "\\frac{\\sin^4\\theta}{\\cos^2\\theta}",
          "explanation": "Multiplying \\(\\sin^2\\theta\\) by \\(\\sin^2\\theta\\) adds the indices to give \\(\\sin^4\\theta\\). Add indices when multiplying like bases, never multiply them."
        },
        {
          "stepNumber": 8,
          "description": "Split off a tangent factor.",
          "workingLatex": "\\frac{\\sin^4\\theta}{\\cos^2\\theta} = \\sin^2\\theta \\cdot \\frac{\\sin^2\\theta}{\\cos^2\\theta}",
          "explanation": "Separate \\(\\sin^4\\theta\\) as \\(\\sin^2\\theta \\times \\sin^2\\theta\\) so one part can pair with \\(\\cos^2\\theta\\) to form a tangent."
        },
        {
          "stepNumber": 9,
          "description": "State the quotient identity for tangent.",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The quotient identity defines \\(\\tan\\theta\\) as the ratio of sine to cosine, which we now square."
        },
        {
          "stepNumber": 10,
          "description": "Square the quotient identity.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\tan^2\\theta",
          "explanation": "Squaring both sides of \\(\\tan\\theta = \\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\) gives \\(\\tan^2\\theta = \\displaystyle\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\), matching the paired factor exactly."
        },
        {
          "stepNumber": 11,
          "description": "State the simplified result.",
          "workingLatex": "\\sin^2\\theta\\,\\tan^2\\theta",
          "explanation": "Combining the leftover \\(\\sin^2\\theta\\) with the \\(\\tan^2\\theta\\) gives the final simplified form. This is fully simplified as a single product of trig powers."
        }
      ],
      "finalAnswer": "\\(\\sin^2\\theta \\tan^2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-047",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 32",
    "difficulty": "Standard",
    "questionText": "Simplify \\(\\displaystyle\\frac{\\cos\\theta}{\\csc\\theta} + \\displaystyle\\frac{\\sin\\theta}{\\sec\\theta}\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out the expression.",
          "workingLatex": "\\frac{\\cos\\theta}{\\csc\\theta} + \\frac{\\sin\\theta}{\\sec\\theta}",
          "explanation": "The plan is to convert the reciprocal functions \\(\\csc\\theta\\) and \\(\\sec\\theta\\) into sine and cosine before simplifying each fraction."
        },
        {
          "stepNumber": 2,
          "description": "Replace cosec with sine.",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "By the reciprocal identity, \\(\\csc\\theta = \\displaystyle\\frac{1}{\\sin\\theta}\\). Take care not to confuse \\(\\csc\\) with \\(\\sec\\)."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the first fraction.",
          "workingLatex": "\\frac{\\cos\\theta}{\\csc\\theta} = \\frac{\\cos\\theta}{\\frac{1}{\\sin\\theta}}",
          "explanation": "Substitute the reciprocal form into the denominator, giving a fraction divided by a fraction."
        },
        {
          "stepNumber": 4,
          "description": "Simplify the first fraction.",
          "workingLatex": "\\frac{\\cos\\theta}{\\frac{1}{\\sin\\theta}} = \\cos\\theta \\cdot \\sin\\theta = \\cos\\theta\\sin\\theta",
          "explanation": "Dividing by \\(\\displaystyle\\frac{1}{\\sin\\theta}\\) is the same as multiplying by \\(\\sin\\theta\\). Flip the divisor and multiply."
        },
        {
          "stepNumber": 5,
          "description": "Replace sec with cosine.",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "By the reciprocal identity, \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the second fraction.",
          "workingLatex": "\\frac{\\sin\\theta}{\\sec\\theta} = \\frac{\\sin\\theta}{\\frac{1}{\\cos\\theta}}",
          "explanation": "Substitute the reciprocal form into the denominator of the second fraction."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the second fraction.",
          "workingLatex": "\\frac{\\sin\\theta}{\\frac{1}{\\cos\\theta}} = \\sin\\theta \\cdot \\cos\\theta = \\sin\\theta\\cos\\theta",
          "explanation": "Dividing by \\(\\displaystyle\\frac{1}{\\cos\\theta}\\) means multiplying by \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Write the sum of both results.",
          "workingLatex": "\\sin\\theta\\cos\\theta + \\sin\\theta\\cos\\theta",
          "explanation": "Both fractions simplified to the same product \\(\\sin\\theta\\cos\\theta\\), so the original sum becomes this expression."
        },
        {
          "stepNumber": 9,
          "description": "Add the two equal terms.",
          "workingLatex": "\\sin\\theta\\cos\\theta + \\sin\\theta\\cos\\theta = 2\\sin\\theta\\cos\\theta",
          "explanation": "Adding two identical terms doubles one of them. Do not square anything here; it is a sum of like terms, not a product."
        },
        {
          "stepNumber": 10,
          "description": "Optionally use the double-angle form.",
          "workingLatex": "2\\sin\\theta\\cos\\theta = \\sin 2\\theta",
          "explanation": "The double-angle identity \\(\\sin 2\\theta = 2\\sin\\theta\\cos\\theta\\) gives a compact equivalent answer."
        }
      ],
      "finalAnswer": "\\(2\\sin\\theta\\cos\\theta\\) (= \\(\\sin 2\\theta\\)).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-048",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 61",
    "difficulty": "Challenge",
    "questionText": "Simplify \\(1 - 2\\sin^2\\theta + \\sin^4\\theta\\) using identities.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out the expression.",
          "workingLatex": "1 - 2\\sin^2\\theta + \\sin^4\\theta",
          "explanation": "We aim to fold this into a compact trig power. Notice the structure looks like a quadratic, which hints at a factorisation."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the quartic term as a square.",
          "workingLatex": "\\sin^4\\theta = \\left(\\sin^2\\theta\\right)^2",
          "explanation": "Recognising \\(\\sin^4\\theta\\) as the square of \\(\\sin^2\\theta\\) lets us treat the whole expression as a quadratic in \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "View it as a quadratic in one variable.",
          "workingLatex": "1 - 2\\sin^2\\theta + \\left(\\sin^2\\theta\\right)^2",
          "explanation": "Letting the variable be \\(\\sin^2\\theta\\), the expression has the shape constant, linear, square \\(-\\) exactly a quadratic pattern."
        },
        {
          "stepNumber": 4,
          "description": "Recall the perfect-square pattern.",
          "workingLatex": "a^2 - 2ab + b^2 = (a - b)^2",
          "explanation": "Here \\(a = 1\\) and \\(b = \\sin^2\\theta\\). The middle term \\(-2\\sin^2\\theta\\) matches \\(-2ab = -2(1)(\\sin^2\\theta)\\)."
        },
        {
          "stepNumber": 5,
          "description": "Factor as a square.",
          "workingLatex": "1 - 2\\sin^2\\theta + \\sin^4\\theta = \\left(1 - \\sin^2\\theta\\right)^2",
          "explanation": "Folding the quadratic into a square gives \\((1 - \\sin^2\\theta)^2\\). You can check by expanding to confirm the middle term reappears."
        },
        {
          "stepNumber": 6,
          "description": "State the Pythagorean identity.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "We use the fundamental Pythagorean identity to rewrite the bracket \\(1 - \\sin^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Rearrange the identity.",
          "workingLatex": "1 - \\sin^2\\theta = \\cos^2\\theta",
          "explanation": "Subtracting \\(\\sin^2\\theta\\) from both sides gives the form inside the bracket. Do not mix this up with \\(1 - \\cos^2\\theta = \\sin^2\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the square.",
          "workingLatex": "\\left(\\cos^2\\theta\\right)^2",
          "explanation": "Replace \\(1 - \\sin^2\\theta\\) inside the bracket with \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Simplify the power of a power.",
          "workingLatex": "\\left(\\cos^2\\theta\\right)^2 = \\cos^4\\theta",
          "explanation": "Raising \\(\\cos^2\\theta\\) to the power \\(2\\) multiplies the indices: \\(2 \\times 2 = 4\\), giving the fully simplified result."
        }
      ],
      "finalAnswer": "\\(\\cos^4\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-049",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 62",
    "difficulty": "Challenge",
    "questionText": "Simplify \\((\\sin\\theta + \\csc\\theta)^2\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out the expression.",
          "workingLatex": "\\left(\\sin\\theta + \\csc\\theta\\right)^2",
          "explanation": "We will expand this bracket and then simplify the cross term using a reciprocal identity."
        },
        {
          "stepNumber": 2,
          "description": "Recall the squaring formula.",
          "workingLatex": "(a + b)^2 = a^2 + 2ab + b^2",
          "explanation": "Apply the standard expansion with \\(a = \\sin\\theta\\) and \\(b = \\csc\\theta\\). The middle term \\(2ab\\) is the one that will simplify nicely."
        },
        {
          "stepNumber": 3,
          "description": "Expand the square.",
          "workingLatex": "\\sin^2\\theta + 2\\sin\\theta\\csc\\theta + \\csc^2\\theta",
          "explanation": "Write all three terms of the expansion. A common slip is to drop the middle cross term \\(2\\sin\\theta\\csc\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Use the reciprocal identity.",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "Since \\(\\csc\\theta\\) is the reciprocal of \\(\\sin\\theta\\), the middle term contains \\(\\sin\\theta \\times \\displaystyle\\frac{1}{\\sin\\theta}\\)."
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the middle term.",
          "workingLatex": "2\\sin\\theta\\csc\\theta = 2\\sin\\theta \\cdot \\frac{1}{\\sin\\theta}",
          "explanation": "Replace \\(\\csc\\theta\\) by \\(\\displaystyle\\frac{1}{\\sin\\theta}\\) only in the cross term, leaving the squared terms untouched for now."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the sine factors.",
          "workingLatex": "2\\sin\\theta \\cdot \\frac{1}{\\sin\\theta} = 2",
          "explanation": "The \\(\\sin\\theta\\) in the numerator cancels the \\(\\sin\\theta\\) in the denominator, leaving just \\(2\\). This is the key simplification in the whole expansion."
        },
        {
          "stepNumber": 7,
          "description": "Collect the simplified terms.",
          "workingLatex": "\\sin^2\\theta + 2 + \\csc^2\\theta",
          "explanation": "The outer squared terms stay as they are; only the cross term collapsed to the constant \\(2\\), giving the simplified form."
        }
      ],
      "finalAnswer": "\\(\\sin^2\\theta + 2 + \\csc^2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-050",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 63",
    "difficulty": "Challenge",
    "questionText": "Simplify \\((\\cos\\theta + \\sec\\theta)^2\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write out the expression.",
          "workingLatex": "\\left(\\cos\\theta + \\sec\\theta\\right)^2",
          "explanation": "We will expand this bracket and then simplify the cross term using a reciprocal identity."
        },
        {
          "stepNumber": 2,
          "description": "Recall the squaring formula.",
          "workingLatex": "(a + b)^2 = a^2 + 2ab + b^2",
          "explanation": "Apply the standard expansion with \\(a = \\cos\\theta\\) and \\(b = \\sec\\theta\\). The middle term \\(2ab\\) is the one that will simplify nicely."
        },
        {
          "stepNumber": 3,
          "description": "Expand the square.",
          "workingLatex": "\\cos^2\\theta + 2\\cos\\theta\\sec\\theta + \\sec^2\\theta",
          "explanation": "Write all three terms. A common slip is to forget the middle cross term \\(2\\cos\\theta\\sec\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Use the reciprocal identity.",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "Since \\(\\sec\\theta\\) is the reciprocal of \\(\\cos\\theta\\), the middle term contains \\(\\cos\\theta \\times \\displaystyle\\frac{1}{\\cos\\theta}\\)."
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the middle term.",
          "workingLatex": "2\\cos\\theta\\sec\\theta = 2\\cos\\theta \\cdot \\frac{1}{\\cos\\theta}",
          "explanation": "Replace \\(\\sec\\theta\\) by \\(\\displaystyle\\frac{1}{\\cos\\theta}\\) only in the cross term, leaving the squared terms untouched for now."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the cosine factors.",
          "workingLatex": "2\\cos\\theta \\cdot \\frac{1}{\\cos\\theta} = 2",
          "explanation": "The \\(\\cos\\theta\\) in the numerator cancels the \\(\\cos\\theta\\) in the denominator, leaving \\(2\\). This is the key step in the simplification."
        },
        {
          "stepNumber": 7,
          "description": "Collect the simplified terms.",
          "workingLatex": "\\cos^2\\theta + 2 + \\sec^2\\theta",
          "explanation": "The outer squared terms remain; only the cross term reduced to the constant \\(2\\), giving the simplified form."
        }
      ],
      "finalAnswer": "\\(\\cos^2\\theta + 2 + \\sec^2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-051",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 64",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\sin\\theta + \\cos\\theta = \\displaystyle\\frac{1}{2}\\), find \\(\\sin\\theta\\cos\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note what the target term suggests",
          "workingLatex": "\\text{Target: } \\sin\\theta\\cos\\theta \\quad\\text{from}\\quad \\sin\\theta+\\cos\\theta=\\frac{1}{2}",
          "explanation": "We are given a sum but asked for a product. Squaring a sum is the standard trick because \\((a+b)^2\\) generates the cross term \\(2ab\\), which here is \\(2\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Square both sides of the equation",
          "workingLatex": "(\\sin\\theta + \\cos\\theta)^2 = \\left(\\frac{1}{2}\\right)^2",
          "explanation": "Squaring is the key move: it creates a \\(\\sin\\theta\\cos\\theta\\) cross term that we can isolate. Both sides must be squared, not just the left."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the right-hand side",
          "workingLatex": "(\\sin\\theta + \\cos\\theta)^2 = \\frac{1}{4}",
          "explanation": "Square the right side: \\(\\left(\\displaystyle\\frac12\\right)^2=\\displaystyle\\frac{1}{4}\\). Keep this isolated before touching the left side."
        },
        {
          "stepNumber": 4,
          "description": "Expand the left-hand bracket",
          "workingLatex": "\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\frac{1}{4}",
          "explanation": "Use \\((a+b)^2=a^2+2ab+b^2\\) with \\(a=\\sin\\theta\\), \\(b=\\cos\\theta\\). The cross term is \\(2\\sin\\theta\\cos\\theta\\); students often drop the factor of \\(2\\)."
        },
        {
          "stepNumber": 5,
          "description": "Group the Pythagorean pair together",
          "workingLatex": "(\\sin^2\\theta + \\cos^2\\theta) + 2\\sin\\theta\\cos\\theta = \\frac{1}{4}",
          "explanation": "Reordering lets us spot \\(\\sin^2\\theta+\\cos^2\\theta\\), which is ready for the Pythagorean identity. Only the order changes; nothing is added or removed."
        },
        {
          "stepNumber": 6,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 + 2\\sin\\theta\\cos\\theta = \\frac{1}{4}",
          "explanation": "By the Pythagorean identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\). This is the only identity needed here; the rest is algebra."
        },
        {
          "stepNumber": 7,
          "description": "Subtract one from both sides",
          "workingLatex": "2\\sin\\theta\\cos\\theta = \\frac{1}{4} - 1",
          "explanation": "Move the constant \\(1\\) to the right so the product term stands alone. The right side is now a single subtraction."
        },
        {
          "stepNumber": 8,
          "description": "Combine over a common denominator",
          "workingLatex": "2\\sin\\theta\\cos\\theta = \\frac{1}{4} - \\frac{4}{4} = -\\frac{3}{4}",
          "explanation": "Write \\(1=\\displaystyle\\frac{4}{4}\\) so the denominators match, then subtract numerators: \\(1-4=-3\\). A common error is a sign slip giving \\(+\\displaystyle\\frac34\\)."
        },
        {
          "stepNumber": 9,
          "description": "Divide both sides by two",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\frac{-3/4}{2}",
          "explanation": "To isolate the product, divide both sides by the coefficient \\(2\\). Dividing a fraction by \\(2\\) means multiplying its denominator by \\(2\\)."
        },
        {
          "stepNumber": 10,
          "description": "Simplify the final value",
          "workingLatex": "\\sin\\theta\\cos\\theta = -\\frac{3}{8}",
          "explanation": "Dividing \\(-\\displaystyle\\frac34\\) by \\(2\\) gives \\(-\\displaystyle\\frac38\\). The negative value is fine: it just means one of \\(\\sin\\theta,\\cos\\theta\\) is negative."
        }
      ],
      "finalAnswer": "\\(\\sin\\theta\\cos\\theta = -\\displaystyle\\frac{3}{8}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-052",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 65",
    "difficulty": "Challenge",
    "questionText": "Given \\(\\sin\\theta - \\cos\\theta = \\displaystyle\\frac{1}{3}\\), find \\(\\sin\\theta\\cos\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note what the target term suggests",
          "workingLatex": "\\text{Target: } \\sin\\theta\\cos\\theta \\quad\\text{from}\\quad \\sin\\theta-\\cos\\theta=\\frac{1}{3}",
          "explanation": "We are given a difference but asked for a product. Squaring is the standard trick because \\((a-b)^2\\) generates the cross term \\(-2ab\\), which here is \\(-2\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Square both sides of the equation",
          "workingLatex": "(\\sin\\theta - \\cos\\theta)^2 = \\left(\\frac{1}{3}\\right)^2",
          "explanation": "Squaring produces a \\(\\sin\\theta\\cos\\theta\\) cross term we can isolate. Both sides must be squared, not just the left."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the right-hand side",
          "workingLatex": "(\\sin\\theta - \\cos\\theta)^2 = \\frac{1}{9}",
          "explanation": "Square the right side: \\(\\left(\\displaystyle\\frac13\\right)^2=\\displaystyle\\frac{1}{9}\\). The square of the numerator over the square of the denominator."
        },
        {
          "stepNumber": 4,
          "description": "Expand the left-hand bracket",
          "workingLatex": "\\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\frac{1}{9}",
          "explanation": "Use \\((a-b)^2=a^2-2ab+b^2\\); the cross term is now negative. Watch the minus sign on \\(2\\sin\\theta\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Group the Pythagorean pair together",
          "workingLatex": "(\\sin^2\\theta + \\cos^2\\theta) - 2\\sin\\theta\\cos\\theta = \\frac{1}{9}",
          "explanation": "Reordering exposes \\(\\sin^2\\theta+\\cos^2\\theta\\) for the identity. Only the order changes; the values are untouched."
        },
        {
          "stepNumber": 6,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "1 - 2\\sin\\theta\\cos\\theta = \\frac{1}{9}",
          "explanation": "By the Pythagorean identity \\(\\sin^2\\theta+\\cos^2\\theta=1\\). This is the only identity required."
        },
        {
          "stepNumber": 7,
          "description": "Subtract one from both sides",
          "workingLatex": "-2\\sin\\theta\\cos\\theta = \\frac{1}{9} - 1",
          "explanation": "Move the constant \\(1\\) to the right so the product term stands alone. The left side still carries the leading minus."
        },
        {
          "stepNumber": 8,
          "description": "Combine over a common denominator",
          "workingLatex": "-2\\sin\\theta\\cos\\theta = \\frac{1}{9} - \\frac{9}{9} = -\\frac{8}{9}",
          "explanation": "Write \\(1=\\displaystyle\\frac{9}{9}\\) so the denominators match, then subtract numerators: \\(1-9=-8\\)."
        },
        {
          "stepNumber": 9,
          "description": "Divide both sides by negative two",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\frac{-8/9}{-2}",
          "explanation": "Isolate the product by dividing by the coefficient \\(-2\\). A negative divided by a negative will give a positive result."
        },
        {
          "stepNumber": 10,
          "description": "Simplify the final value",
          "workingLatex": "\\sin\\theta\\cos\\theta = \\frac{8}{18} = \\frac{4}{9}",
          "explanation": "Dividing two negatives gives a positive: \\(-\\displaystyle\\frac89 \\div (-2)=\\displaystyle\\frac{8}{18}=\\displaystyle\\frac{4}{9}\\). Forgetting the sign cancellation is the usual mistake here."
        }
      ],
      "finalAnswer": "\\(\\sin\\theta\\cos\\theta = \\displaystyle\\frac{4}{9}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-053",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 33",
    "difficulty": "Standard",
    "questionText": "If \\(\\tan\\theta = 2\\), find \\(\\sin^2\\theta + 3\\cos^2\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the coefficient of cosine squared",
          "workingLatex": "\\sin^2\\theta + 3\\cos^2\\theta = \\sin^2\\theta + \\cos^2\\theta + 2\\cos^2\\theta",
          "explanation": "Split \\(3\\cos^2\\theta\\) as \\(\\cos^2\\theta+2\\cos^2\\theta\\) so a Pythagorean pair appears. This avoids finding \\(\\sin\\theta\\) and \\(\\cos\\theta\\) separately."
        },
        {
          "stepNumber": 2,
          "description": "Bracket the Pythagorean pair",
          "workingLatex": "= (\\sin^2\\theta + \\cos^2\\theta) + 2\\cos^2\\theta",
          "explanation": "Group the first two terms to make the identity \\(\\sin^2\\theta+\\cos^2\\theta\\) visible. The grouping does not change the value."
        },
        {
          "stepNumber": 3,
          "description": "Apply the Pythagorean identity",
          "workingLatex": "= 1 + 2\\cos^2\\theta",
          "explanation": "Using \\(\\sin^2\\theta+\\cos^2\\theta=1\\). Now only \\(\\cos^2\\theta\\) remains to evaluate."
        },
        {
          "stepNumber": 4,
          "description": "Recall the tangent-secant identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This Pythagorean identity links the given \\(\\tan\\theta\\) to \\(\\sec\\theta\\). It is the bridge from \\(\\tan\\theta\\) to \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Express secant squared via cosine",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Since \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\), squaring gives \\(\\sec^2\\theta=\\displaystyle\\frac{1}{\\cos^2\\theta}\\). This connects the identity to \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Invert to get cosine squared",
          "workingLatex": "\\cos^2\\theta = \\frac{1}{1 + \\tan^2\\theta}",
          "explanation": "Taking reciprocals of \\(\\sec^2\\theta=\\displaystyle\\frac{1}{\\cos^2\\theta}=1+\\tan^2\\theta\\). This formula works for any quadrant since it uses \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the given tangent value",
          "workingLatex": "\\cos^2\\theta = \\frac{1}{1 + 2^2}",
          "explanation": "With \\(\\tan\\theta=2\\), replace \\(\\tan^2\\theta\\) by \\(2^2\\). Square the value before adding, not after."
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the denominator",
          "workingLatex": "\\cos^2\\theta = \\frac{1}{1 + 4} = \\frac{1}{5}",
          "explanation": "Squaring \\(2\\) gives \\(4\\), so the denominator is \\(1+4=5\\). Squaring \\(2\\) gives \\(4\\), not \\(2\\)."
        },
        {
          "stepNumber": 9,
          "description": "Insert into the expression",
          "workingLatex": "1 + 2\\cos^2\\theta = 1 + 2 \\cdot \\frac{1}{5}",
          "explanation": "Replace \\(\\cos^2\\theta\\) by \\(\\displaystyle\\frac15\\) in the simplified expression from step 3."
        },
        {
          "stepNumber": 10,
          "description": "Multiply out the product term",
          "workingLatex": "= 1 + \\frac{2}{5}",
          "explanation": "Multiplying \\(2\\) by \\(\\displaystyle\\frac15\\) gives \\(\\displaystyle\\frac25\\)."
        },
        {
          "stepNumber": 11,
          "description": "Add the fractions",
          "workingLatex": "= \\frac{5}{5} + \\frac{2}{5} = \\frac{7}{5}",
          "explanation": "Write \\(1=\\displaystyle\\frac55\\) before adding so the denominators match, then add numerators: \\(5+2=7\\)."
        }
      ],
      "finalAnswer": "\\(\\displaystyle\\frac{7}{5}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-054",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 09",
    "difficulty": "Foundation",
    "questionText": "If \\(\\tan\\theta = \\displaystyle\\frac{3}{4}\\) and \\(\\theta\\) is acute, find \\(\\sec\\theta\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the relevant identity",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This Pythagorean identity links \\(\\tan\\theta\\) directly to \\(\\sec\\theta\\), so no triangle is needed."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given tangent",
          "workingLatex": "\\sec^2\\theta = 1 + \\left(\\frac{3}{4}\\right)^2",
          "explanation": "Replace \\(\\tan\\theta\\) by \\(\\displaystyle\\frac34\\) inside the square."
        },
        {
          "stepNumber": 3,
          "description": "Square the numerator",
          "workingLatex": "\\sec^2\\theta = 1 + \\frac{3^2}{4^2}",
          "explanation": "Squaring a fraction squares both the top and the bottom. Squaring only the numerator is a common slip."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the squared fraction",
          "workingLatex": "\\sec^2\\theta = 1 + \\frac{9}{16}",
          "explanation": "Here \\(3^2=9\\) and \\(4^2=16\\), giving \\(\\displaystyle\\frac{9}{16}\\)."
        },
        {
          "stepNumber": 5,
          "description": "Write one as a like fraction",
          "workingLatex": "\\sec^2\\theta = \\frac{16}{16} + \\frac{9}{16}",
          "explanation": "Write \\(1=\\displaystyle\\frac{16}{16}\\) so the denominators match before adding."
        },
        {
          "stepNumber": 6,
          "description": "Add the fractions",
          "workingLatex": "\\sec^2\\theta = \\frac{25}{16}",
          "explanation": "Add the numerators: \\(16+9=25\\), keeping the common denominator \\(16\\)."
        },
        {
          "stepNumber": 7,
          "description": "Square root both sides",
          "workingLatex": "\\sec\\theta = \\pm\\sqrt{\\frac{25}{16}} = \\pm\\frac{5}{4}",
          "explanation": "Take the square root of numerator and denominator separately: \\(\\sqrt{25}=5\\), \\(\\sqrt{16}=4\\). Keep both signs for now, then use the quadrant."
        },
        {
          "stepNumber": 8,
          "description": "Choose the sign using acute angle",
          "workingLatex": "\\theta \\text{ acute} \\Rightarrow \\cos\\theta > 0 \\Rightarrow \\sec\\theta = \\frac{5}{4}",
          "explanation": "An acute \\(\\theta\\) lies in the first quadrant where \\(\\cos\\theta>0\\), so \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}>0\\). Reject the negative root."
        }
      ],
      "finalAnswer": "\\(\\sec\\theta = \\displaystyle\\frac{5}{4}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-055",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 34",
    "difficulty": "Standard",
    "questionText": "\\(\\cot\\theta = -\\displaystyle\\frac{5}{12}\\), \\(\\theta \\in\\) \\(90^\\circ < \\theta < 180^\\circ\\). Find \\(\\csc\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity",
      "quadrant"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the relevant identity",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This Pythagorean identity connects \\(\\cot\\theta\\) directly to \\(\\csc\\theta\\). It is obtained by dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) through by \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the given cotangent",
          "workingLatex": "\\csc^2\\theta = 1 + \\left(-\\frac{5}{12}\\right)^2",
          "explanation": "Replace \\(\\cot\\theta\\) by \\(-\\displaystyle\\frac{5}{12}\\). Keep the bracket so the whole value, including the sign, is squared."
        },
        {
          "stepNumber": 3,
          "description": "Square the fraction",
          "workingLatex": "\\csc^2\\theta = 1 + \\frac{25}{144}",
          "explanation": "Squaring removes the sign: \\((-\\displaystyle\\frac{5}{12})^2=\\displaystyle\\frac{25}{144}\\), since \\(5^2=25\\) and \\(12^2=144\\). The minus sign disappears here."
        },
        {
          "stepNumber": 4,
          "description": "Write one as a like fraction",
          "workingLatex": "\\csc^2\\theta = \\frac{144}{144} + \\frac{25}{144}",
          "explanation": "Write \\(1=\\displaystyle\\frac{144}{144}\\) so denominators match before adding."
        },
        {
          "stepNumber": 5,
          "description": "Add the fractions",
          "workingLatex": "\\csc^2\\theta = \\frac{169}{144}",
          "explanation": "Add the numerators: \\(144+25=169\\), keeping the common denominator \\(144\\)."
        },
        {
          "stepNumber": 6,
          "description": "Square root both sides",
          "workingLatex": "\\csc\\theta = \\pm\\sqrt{\\frac{169}{144}} = \\pm\\frac{13}{12}",
          "explanation": "Root numerator and denominator separately: \\(\\sqrt{169}=13\\), \\(\\sqrt{144}=12\\). Keep both signs until the quadrant decides."
        },
        {
          "stepNumber": 7,
          "description": "Identify the sign of sine in the quadrant",
          "workingLatex": "90^\\circ < \\theta < 180^\\circ \\Rightarrow \\sin\\theta > 0",
          "explanation": "In quadrant 2 sine is positive, even though cosine and cotangent are negative there. The sign of \\(\\cot\\theta\\) does not directly set the sign of \\(\\csc\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Choose the matching sign for cosecant",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta} > 0 \\Rightarrow \\csc\\theta = \\frac{13}{12}",
          "explanation": "Since \\(\\csc\\theta=\\displaystyle\\frac{1}{\\sin\\theta}\\) and \\(\\sin\\theta>0\\), the cosecant is positive. Reject the negative root."
        }
      ],
      "finalAnswer": "\\(\\csc\\theta = \\displaystyle\\frac{13}{12}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-056",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 66",
    "difficulty": "Challenge",
    "questionText": "Solve \\(3\\sec^2\\theta - 4\\tan\\theta - 2 = 0\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the starting equation.",
          "workingLatex": "3\\sec^2\\theta - 4\\tan\\theta - 2 = 0",
          "explanation": "We must solve this on \\([0,2\\pi]\\). Notice it contains two different trig functions, \\(\\sec^2\\theta\\) and \\(\\tan\\theta\\), so it cannot be solved as it stands."
        },
        {
          "stepNumber": 2,
          "description": "Recall the relevant Pythagorean identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "Dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\) gives \\(\\tan^2\\theta+1=\\sec^2\\theta\\). This identity lets us trade \\(\\sec^2\\theta\\) for an expression in \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "State the form we will substitute.",
          "workingLatex": "\\sec^2\\theta = 1 + \\tan^2\\theta",
          "explanation": "Rearranging the identity isolates \\(\\sec^2\\theta\\). Substituting this will reduce the whole equation to a single function, \\(\\tan\\theta\\). A common slip is to forget this identity and try to solve directly."
        },
        {
          "stepNumber": 4,
          "description": "Substitute \\(\\sec^2\\theta = 1+\\tan^2\\theta\\).",
          "workingLatex": "3\\left(1 + \\tan^2\\theta\\right) - 4\\tan\\theta - 2 = 0",
          "explanation": "Replace \\(\\sec^2\\theta\\) by the bracket \\(1+\\tan^2\\theta\\). Keep the bracket so the multiplying \\(3\\) is applied to both terms inside."
        },
        {
          "stepNumber": 5,
          "description": "Multiply the \\(3\\) into the bracket.",
          "workingLatex": "3 + 3\\tan^2\\theta - 4\\tan\\theta - 2 = 0",
          "explanation": "Distribute: \\(3\\times 1 = 3\\) and \\(3\\times\\tan^2\\theta = 3\\tan^2\\theta\\). A common slip is to multiply only the first term inside the bracket."
        },
        {
          "stepNumber": 6,
          "description": "Combine the two constant terms.",
          "workingLatex": "3\\tan^2\\theta - 4\\tan\\theta + 1 = 0",
          "explanation": "Add the constants \\(3 - 2 = 1\\). Ordering in descending powers of \\(\\tan\\theta\\) reveals a quadratic in \\(\\tan\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Let \\(t = \\tan\\theta\\) to see the quadratic.",
          "workingLatex": "3t^2 - 4t + 1 = 0",
          "explanation": "Substituting \\(t=\\tan\\theta\\) makes the structure explicit: a standard quadratic in \\(t\\) that we can factorise."
        },
        {
          "stepNumber": 8,
          "description": "Factorise the quadratic.",
          "workingLatex": "\\left(3t - 1\\right)\\left(t - 1\\right) = 0",
          "explanation": "Splitting the middle term \\(-4t = -3t - t\\) gives \\(3t^2-3t-t+1=(3t-1)(t-1)\\). Expanding back confirms \\(3t^2-4t+1\\)."
        },
        {
          "stepNumber": 9,
          "description": "Return to \\(\\tan\\theta\\).",
          "workingLatex": "\\left(3\\tan\\theta - 1\\right)\\left(\\tan\\theta - 1\\right) = 0",
          "explanation": "Replace \\(t\\) by \\(\\tan\\theta\\) again so we can solve for the angle."
        },
        {
          "stepNumber": 10,
          "description": "Apply the zero-product principle.",
          "workingLatex": "3\\tan\\theta - 1 = 0 \\quad \\text{or} \\quad \\tan\\theta - 1 = 0",
          "explanation": "A product equals zero only when one of its factors is zero, so we treat each bracket separately."
        },
        {
          "stepNumber": 11,
          "description": "Solve each bracket for \\(\\tan\\theta\\).",
          "workingLatex": "\\tan\\theta = \\frac{1}{3} \\quad \\text{or} \\quad \\tan\\theta = 1",
          "explanation": "From \\(3\\tan\\theta-1=0\\) we get \\(\\tan\\theta=\\displaystyle\\frac13\\); from \\(\\tan\\theta-1=0\\) we get \\(\\tan\\theta=1\\). Both are positive, so solutions sit in quadrants 1 and 3."
        },
        {
          "stepNumber": 12,
          "description": "Find the principal value for \\(\\tan\\theta=1\\).",
          "workingLatex": "\\theta = \\arctan 1 = \\frac{\\pi}{4}",
          "explanation": "The inverse tangent of \\(1\\) is \\(\\displaystyle\\frac{\\pi}{4}\\), the first-quadrant solution."
        },
        {
          "stepNumber": 13,
          "description": "Add the period to reach the third quadrant.",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\quad \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}",
          "explanation": "\\(\\tan\\theta\\) has period \\(\\pi\\), so the next solution is \\(\\displaystyle\\frac{\\pi}{4}+\\pi=\\displaystyle\\frac{5\\pi}{4}\\). Both lie in \\([0,2\\pi]\\)."
        },
        {
          "stepNumber": 14,
          "description": "Find the principal value for \\(\\tan\\theta=\\displaystyle\\frac13\\).",
          "workingLatex": "\\theta = \\arctan\\frac{1}{3} \\approx 0.322",
          "explanation": "The principal value is \\(\\arctan\\displaystyle\\frac13\\approx 0.322\\) radians, the first-quadrant solution."
        },
        {
          "stepNumber": 15,
          "description": "Add the period for the third-quadrant solution.",
          "workingLatex": "\\theta = \\pi + \\arctan\\frac{1}{3} \\approx 3.463",
          "explanation": "Adding the period \\(\\pi\\) gives the second solution \\(\\pi+\\arctan\\displaystyle\\frac13\\approx 3.463\\). A common slip is to give only the principal value and miss this third-quadrant root."
        },
        {
          "stepNumber": 16,
          "description": "List all four solutions in the interval.",
          "workingLatex": "\\theta = \\arctan\\frac{1}{3},\\; \\frac{\\pi}{4},\\; \\pi + \\arctan\\frac{1}{3},\\; \\frac{5\\pi}{4}",
          "explanation": "All four values lie in \\([0,2\\pi]\\). Always confirm each candidate is inside the stated interval before listing it.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -5,
            "yMax": 5,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -4,
              -2,
              0,
              2,
              4
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0.06,
                    0.06
                  ],
                  [
                    0.101,
                    0.102
                  ],
                  [
                    0.143,
                    0.144
                  ],
                  [
                    0.184,
                    0.186
                  ],
                  [
                    0.226,
                    0.23
                  ],
                  [
                    0.267,
                    0.274
                  ],
                  [
                    0.309,
                    0.319
                  ],
                  [
                    0.35,
                    0.365
                  ],
                  [
                    0.392,
                    0.413
                  ],
                  [
                    0.433,
                    0.462
                  ],
                  [
                    0.475,
                    0.514
                  ],
                  [
                    0.516,
                    0.567
                  ],
                  [
                    0.557,
                    0.623
                  ],
                  [
                    0.599,
                    0.682
                  ],
                  [
                    0.64,
                    0.745
                  ],
                  [
                    0.682,
                    0.812
                  ],
                  [
                    0.723,
                    0.883
                  ],
                  [
                    0.765,
                    0.959
                  ],
                  [
                    0.806,
                    1.042
                  ],
                  [
                    0.848,
                    1.133
                  ],
                  [
                    0.889,
                    1.232
                  ],
                  [
                    0.93,
                    1.342
                  ],
                  [
                    0.972,
                    1.465
                  ],
                  [
                    1.013,
                    1.604
                  ],
                  [
                    1.055,
                    1.763
                  ],
                  [
                    1.096,
                    1.947
                  ],
                  [
                    1.138,
                    2.163
                  ],
                  [
                    1.179,
                    2.422
                  ],
                  [
                    1.221,
                    2.738
                  ],
                  [
                    1.262,
                    3.136
                  ],
                  [
                    1.304,
                    3.652
                  ],
                  [
                    1.345,
                    4.353
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              },
              {
                "points": [
                  [
                    1.803,
                    -4.22
                  ],
                  [
                    1.89,
                    -3.028
                  ],
                  [
                    1.976,
                    -2.331
                  ],
                  [
                    2.062,
                    -1.867
                  ],
                  [
                    2.149,
                    -1.533
                  ],
                  [
                    2.235,
                    -1.277
                  ],
                  [
                    2.321,
                    -1.072
                  ],
                  [
                    2.408,
                    -0.902
                  ],
                  [
                    2.494,
                    -0.756
                  ],
                  [
                    2.58,
                    -0.629
                  ],
                  [
                    2.667,
                    -0.514
                  ],
                  [
                    2.753,
                    -0.409
                  ],
                  [
                    2.839,
                    -0.312
                  ],
                  [
                    2.926,
                    -0.219
                  ],
                  [
                    3.012,
                    -0.13
                  ],
                  [
                    3.098,
                    -0.043
                  ],
                  [
                    3.185,
                    0.043
                  ],
                  [
                    3.271,
                    0.13
                  ],
                  [
                    3.357,
                    0.219
                  ],
                  [
                    3.444,
                    0.312
                  ],
                  [
                    3.53,
                    0.409
                  ],
                  [
                    3.616,
                    0.514
                  ],
                  [
                    3.703,
                    0.629
                  ],
                  [
                    3.789,
                    0.756
                  ],
                  [
                    3.875,
                    0.902
                  ],
                  [
                    3.962,
                    1.072
                  ],
                  [
                    4.048,
                    1.277
                  ],
                  [
                    4.134,
                    1.533
                  ],
                  [
                    4.221,
                    1.867
                  ],
                  [
                    4.307,
                    2.331
                  ],
                  [
                    4.393,
                    3.028
                  ],
                  [
                    4.48,
                    4.22
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              },
              {
                "points": [
                  [
                    4.938,
                    -4.353
                  ],
                  [
                    4.98,
                    -3.652
                  ],
                  [
                    5.021,
                    -3.136
                  ],
                  [
                    5.063,
                    -2.738
                  ],
                  [
                    5.104,
                    -2.422
                  ],
                  [
                    5.145,
                    -2.163
                  ],
                  [
                    5.187,
                    -1.947
                  ],
                  [
                    5.228,
                    -1.763
                  ],
                  [
                    5.27,
                    -1.604
                  ],
                  [
                    5.311,
                    -1.465
                  ],
                  [
                    5.353,
                    -1.342
                  ],
                  [
                    5.394,
                    -1.232
                  ],
                  [
                    5.436,
                    -1.133
                  ],
                  [
                    5.477,
                    -1.042
                  ],
                  [
                    5.519,
                    -0.959
                  ],
                  [
                    5.56,
                    -0.883
                  ],
                  [
                    5.601,
                    -0.812
                  ],
                  [
                    5.643,
                    -0.745
                  ],
                  [
                    5.684,
                    -0.682
                  ],
                  [
                    5.726,
                    -0.623
                  ],
                  [
                    5.767,
                    -0.567
                  ],
                  [
                    5.809,
                    -0.514
                  ],
                  [
                    5.85,
                    -0.462
                  ],
                  [
                    5.892,
                    -0.413
                  ],
                  [
                    5.933,
                    -0.365
                  ],
                  [
                    5.974,
                    -0.319
                  ],
                  [
                    6.016,
                    -0.274
                  ],
                  [
                    6.057,
                    -0.23
                  ],
                  [
                    6.099,
                    -0.186
                  ],
                  [
                    6.14,
                    -0.144
                  ],
                  [
                    6.182,
                    -0.102
                  ],
                  [
                    6.223,
                    -0.06
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.333
                ],
                "to": [
                  6.283,
                  0.333
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{3}",
                "labelAt": [
                  5.383,
                  0.553
                ]
              },
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  6.283,
                  1
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=1",
                "labelAt": [
                  5.383,
                  1.22
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.322,
                  0.333
                ],
                "label": "\\arctan\\tfrac{1}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  3.463,
                  0.333
                ],
                "label": "\\pi+\\arctan\\tfrac{1}{3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  0.785,
                  1
                ],
                "label": "\\tfrac{\\pi}{4}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  3.927,
                  1
                ],
                "label": "\\tfrac{5\\pi}{4}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\arctan\\displaystyle\\frac{1}{3},\\ \\displaystyle\\frac{\\pi}{4},\\ \\pi + \\arctan\\displaystyle\\frac{1}{3},\\ \\displaystyle\\frac{5\\pi}{4}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-057",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 67",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\sec^4\\theta + \\tan^4\\theta \\equiv 2\\sec^2\\theta\\tan^2\\theta + 1\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the Pythagorean identity for tangent.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "Dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\) gives \\(\\tan^2\\theta+1=\\sec^2\\theta\\). This is the link between the two functions in the identity."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to the difference form.",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtracting \\(\\tan^2\\theta\\) from both sides of \\(1+\\tan^2\\theta=\\sec^2\\theta\\) gives \\(\\sec^2\\theta-\\tan^2\\theta=1\\). This difference is what we will square."
        },
        {
          "stepNumber": 3,
          "description": "Square both sides of the identity.",
          "workingLatex": "\\left(\\sec^2\\theta - \\tan^2\\theta\\right)^2 = 1^2",
          "explanation": "Squaring a true equation keeps it true, and it will produce the fourth powers \\(\\sec^4\\theta\\) and \\(\\tan^4\\theta\\) that appear in the target identity."
        },
        {
          "stepNumber": 4,
          "description": "Note the right-hand side.",
          "workingLatex": "\\left(\\sec^2\\theta - \\tan^2\\theta\\right)^2 = 1",
          "explanation": "Since \\(1^2=1\\), the right-hand side is simply \\(1\\). A common slip is to think \\(1^2\\ne 1\\)."
        },
        {
          "stepNumber": 5,
          "description": "Set up the binomial expansion.",
          "workingLatex": "\\left(\\sec^2\\theta\\right)^2 - 2\\left(\\sec^2\\theta\\right)\\left(\\tan^2\\theta\\right) + \\left(\\tan^2\\theta\\right)^2 = 1",
          "explanation": "Apply \\((a-b)^2=a^2-2ab+b^2\\) with \\(a=\\sec^2\\theta\\) and \\(b=\\tan^2\\theta\\). Writing it before simplifying makes the middle term harder to drop."
        },
        {
          "stepNumber": 6,
          "description": "Simplify the powers.",
          "workingLatex": "\\sec^4\\theta - 2\\sec^2\\theta\\tan^2\\theta + \\tan^4\\theta = 1",
          "explanation": "Using \\(\\left(\\sec^2\\theta\\right)^2=\\sec^4\\theta\\) and \\(\\left(\\tan^2\\theta\\right)^2=\\tan^4\\theta\\) gives the expanded form, including the cross term \\(-2\\sec^2\\theta\\tan^2\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Add \\(2\\sec^2\\theta\\tan^2\\theta\\) to both sides.",
          "workingLatex": "\\sec^4\\theta + \\tan^4\\theta = 1 + 2\\sec^2\\theta\\tan^2\\theta",
          "explanation": "Transposing the cross term to the right isolates \\(\\sec^4\\theta+\\tan^4\\theta\\), the left-hand side of the required identity."
        },
        {
          "stepNumber": 8,
          "description": "Reorder the right-hand side.",
          "workingLatex": "\\sec^4\\theta + \\tan^4\\theta = 2\\sec^2\\theta\\tan^2\\theta + 1",
          "explanation": "Writing the cross term first matches the layout of the target identity exactly."
        },
        {
          "stepNumber": 9,
          "description": "State the result is proved.",
          "workingLatex": "\\sec^4\\theta + \\tan^4\\theta \\equiv 2\\sec^2\\theta\\tan^2\\theta + 1",
          "explanation": "The derived equation matches the required identity for all valid \\(\\theta\\), so the proof is complete."
        }
      ],
      "finalAnswer": "Rearranged. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-058",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 68",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\csc^4\\theta + \\cot^4\\theta \\equiv 2\\csc^2\\theta\\cot^2\\theta + 1\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the Pythagorean identity for cotangent.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "Dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\sin^2\\theta\\) gives \\(1+\\cot^2\\theta=\\csc^2\\theta\\). This is the link between cosecant and cotangent."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to the difference form.",
          "workingLatex": "\\csc^2\\theta - \\cot^2\\theta = 1",
          "explanation": "Subtracting \\(\\cot^2\\theta\\) from both sides gives \\(\\csc^2\\theta-\\cot^2\\theta=1\\). This difference is what we will square."
        },
        {
          "stepNumber": 3,
          "description": "Square both sides of the identity.",
          "workingLatex": "\\left(\\csc^2\\theta - \\cot^2\\theta\\right)^2 = 1^2",
          "explanation": "Squaring both sides preserves the equality and introduces the fourth powers \\(\\csc^4\\theta\\) and \\(\\cot^4\\theta\\) that the identity requires."
        },
        {
          "stepNumber": 4,
          "description": "Note the right-hand side.",
          "workingLatex": "\\left(\\csc^2\\theta - \\cot^2\\theta\\right)^2 = 1",
          "explanation": "Since \\(1^2=1\\), the right-hand side stays \\(1\\)."
        },
        {
          "stepNumber": 5,
          "description": "Set up the binomial expansion.",
          "workingLatex": "\\left(\\csc^2\\theta\\right)^2 - 2\\left(\\csc^2\\theta\\right)\\left(\\cot^2\\theta\\right) + \\left(\\cot^2\\theta\\right)^2 = 1",
          "explanation": "Apply \\((a-b)^2=a^2-2ab+b^2\\) with \\(a=\\csc^2\\theta\\) and \\(b=\\cot^2\\theta\\). The middle term is easy to drop accidentally, so write it out."
        },
        {
          "stepNumber": 6,
          "description": "Simplify the powers.",
          "workingLatex": "\\csc^4\\theta - 2\\csc^2\\theta\\cot^2\\theta + \\cot^4\\theta = 1",
          "explanation": "Using \\(\\left(\\csc^2\\theta\\right)^2=\\csc^4\\theta\\) and \\(\\left(\\cot^2\\theta\\right)^2=\\cot^4\\theta\\) gives the expanded form with the cross term."
        },
        {
          "stepNumber": 7,
          "description": "Add \\(2\\csc^2\\theta\\cot^2\\theta\\) to both sides.",
          "workingLatex": "\\csc^4\\theta + \\cot^4\\theta = 1 + 2\\csc^2\\theta\\cot^2\\theta",
          "explanation": "Transposing the cross term isolates \\(\\csc^4\\theta+\\cot^4\\theta\\), the left side of the target identity."
        },
        {
          "stepNumber": 8,
          "description": "Reorder the right-hand side.",
          "workingLatex": "\\csc^4\\theta + \\cot^4\\theta = 2\\csc^2\\theta\\cot^2\\theta + 1",
          "explanation": "Placing the cross term first matches the layout of the required identity exactly."
        },
        {
          "stepNumber": 9,
          "description": "State the result is proved.",
          "workingLatex": "\\csc^4\\theta + \\cot^4\\theta \\equiv 2\\csc^2\\theta\\cot^2\\theta + 1",
          "explanation": "The derived equation equals the required identity for all valid \\(\\theta\\), completing the proof."
        }
      ],
      "finalAnswer": "Rearranged. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-059",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 35",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\displaystyle\\frac{\\tan\\theta - \\sin\\theta}{\\tan\\theta\\sin\\theta} \\equiv \\displaystyle\\frac{1 - \\cos\\theta}{\\sin\\theta}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start with the left-hand side.",
          "workingLatex": "\\text{LHS} = \\frac{\\tan\\theta - \\sin\\theta}{\\tan\\theta\\sin\\theta}",
          "explanation": "We work on the more complicated side and aim to reach the right-hand side. Converting everything to sine and cosine is the standard strategy."
        },
        {
          "stepNumber": 2,
          "description": "Recall the quotient identity for tangent.",
          "workingLatex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "The quotient identity \\(\\tan\\theta=\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\) is what lets us rewrite the whole expression in sine and cosine only."
        },
        {
          "stepNumber": 3,
          "description": "Substitute \\(\\tan\\theta\\) everywhere.",
          "workingLatex": "\\text{LHS} = \\frac{\\frac{\\sin\\theta}{\\cos\\theta} - \\sin\\theta}{\\frac{\\sin\\theta}{\\cos\\theta}\\cdot\\sin\\theta}",
          "explanation": "Replace both occurrences of \\(\\tan\\theta\\) by \\(\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\), in the numerator and in the denominator."
        },
        {
          "stepNumber": 4,
          "description": "Simplify the main denominator.",
          "workingLatex": "\\text{LHS} = \\frac{\\frac{\\sin\\theta}{\\cos\\theta} - \\sin\\theta}{\\frac{\\sin^2\\theta}{\\cos\\theta}}",
          "explanation": "Multiply \\(\\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\times\\sin\\theta=\\displaystyle\\frac{\\sin^2\\theta}{\\cos\\theta}\\). The denominator is now a single fraction."
        },
        {
          "stepNumber": 5,
          "description": "Give the numerator a common denominator.",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} - \\sin\\theta = \\frac{\\sin\\theta}{\\cos\\theta} - \\frac{\\sin\\theta\\cos\\theta}{\\cos\\theta}",
          "explanation": "Write the second term over \\(\\cos\\theta\\) using \\(\\sin\\theta=\\displaystyle\\frac{\\sin\\theta\\cos\\theta}{\\cos\\theta}\\) so both terms share the denominator \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Combine the numerator over \\(\\cos\\theta\\).",
          "workingLatex": "\\frac{\\sin\\theta}{\\cos\\theta} - \\sin\\theta = \\frac{\\sin\\theta - \\sin\\theta\\cos\\theta}{\\cos\\theta}",
          "explanation": "Subtracting over the common denominator gives a single fraction \\(\\displaystyle\\frac{\\sin\\theta-\\sin\\theta\\cos\\theta}{\\cos\\theta}\\)."
        },
        {
          "stepNumber": 7,
          "description": "Factor \\(\\sin\\theta\\) from the numerator.",
          "workingLatex": "\\frac{\\sin\\theta - \\sin\\theta\\cos\\theta}{\\cos\\theta} = \\frac{\\sin\\theta\\left(1 - \\cos\\theta\\right)}{\\cos\\theta}",
          "explanation": "Both terms in the numerator contain \\(\\sin\\theta\\), so factor it out to expose the \\(1-\\cos\\theta\\) we want on the right-hand side."
        },
        {
          "stepNumber": 8,
          "description": "Rewrite the whole expression.",
          "workingLatex": "\\text{LHS} = \\frac{\\frac{\\sin\\theta\\left(1 - \\cos\\theta\\right)}{\\cos\\theta}}{\\frac{\\sin^2\\theta}{\\cos\\theta}}",
          "explanation": "Now both the numerator and the denominator are single fractions over \\(\\cos\\theta\\), which makes the division clean."
        },
        {
          "stepNumber": 9,
          "description": "Divide by multiplying by the reciprocal.",
          "workingLatex": "\\text{LHS} = \\frac{\\sin\\theta\\left(1 - \\cos\\theta\\right)}{\\cos\\theta}\\cdot\\frac{\\cos\\theta}{\\sin^2\\theta}",
          "explanation": "Dividing by \\(\\displaystyle\\frac{\\sin^2\\theta}{\\cos\\theta}\\) is the same as multiplying by its reciprocal \\(\\displaystyle\\frac{\\cos\\theta}{\\sin^2\\theta}\\)."
        },
        {
          "stepNumber": 10,
          "description": "Cancel the common \\(\\cos\\theta\\).",
          "workingLatex": "\\text{LHS} = \\frac{\\sin\\theta\\left(1 - \\cos\\theta\\right)}{\\sin^2\\theta}",
          "explanation": "The \\(\\cos\\theta\\) in the numerator cancels the \\(\\cos\\theta\\) in the denominator, leaving the expression in sines only."
        },
        {
          "stepNumber": 11,
          "description": "Cancel one factor of \\(\\sin\\theta\\).",
          "workingLatex": "\\text{LHS} = \\frac{1 - \\cos\\theta}{\\sin\\theta}",
          "explanation": "Since \\(\\displaystyle\\frac{\\sin\\theta}{\\sin^2\\theta}=\\displaystyle\\frac{1}{\\sin\\theta}\\), one \\(\\sin\\theta\\) cancels, giving exactly the right-hand side."
        },
        {
          "stepNumber": 12,
          "description": "State the conclusion.",
          "workingLatex": "\\frac{\\tan\\theta - \\sin\\theta}{\\tan\\theta\\sin\\theta} \\equiv \\frac{1 - \\cos\\theta}{\\sin\\theta}",
          "explanation": "The LHS has been transformed into the RHS using only valid identities, so the proof is complete."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-060",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 69",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\tan^2\\theta + \\sec\\theta - 1 = 0\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the starting equation.",
          "workingLatex": "\\tan^2\\theta + \\sec\\theta - 1 = 0",
          "explanation": "We must solve this on \\([0,2\\pi]\\). It mixes \\(\\tan^2\\theta\\) and \\(\\sec\\theta\\), so we first reduce it to one trig function."
        },
        {
          "stepNumber": 2,
          "description": "Recall the relevant Pythagorean identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "Dividing \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\) gives \\(\\tan^2\\theta+1=\\sec^2\\theta\\). This lets us trade \\(\\tan^2\\theta\\) for secant."
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to isolate \\(\\tan^2\\theta\\).",
          "workingLatex": "\\tan^2\\theta = \\sec^2\\theta - 1",
          "explanation": "Subtracting \\(1\\) from both sides gives \\(\\tan^2\\theta=\\sec^2\\theta-1\\). A common slip is to write \\(\\tan^2\\theta=1-\\sec^2\\theta\\) with the signs swapped."
        },
        {
          "stepNumber": 4,
          "description": "Substitute \\(\\tan^2\\theta = \\sec^2\\theta - 1\\).",
          "workingLatex": "\\left(\\sec^2\\theta - 1\\right) + \\sec\\theta - 1 = 0",
          "explanation": "Replace \\(\\tan^2\\theta\\) by \\(\\sec^2\\theta-1\\). Everything is now in terms of \\(\\sec\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Combine the constant terms.",
          "workingLatex": "\\sec^2\\theta + \\sec\\theta - 2 = 0",
          "explanation": "Add the constants \\(-1-1=-2\\). This is now a quadratic in \\(\\sec\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Let \\(s = \\sec\\theta\\) to see the quadratic.",
          "workingLatex": "s^2 + s - 2 = 0",
          "explanation": "Substituting \\(s=\\sec\\theta\\) shows the structure clearly: a standard quadratic in \\(s\\)."
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic.",
          "workingLatex": "\\left(s - 1\\right)\\left(s + 2\\right) = 0",
          "explanation": "Find two numbers multiplying to \\(-2\\) and summing to \\(+1\\): they are \\(-1\\) and \\(+2\\), so \\(s^2+s-2=(s-1)(s+2)\\)."
        },
        {
          "stepNumber": 8,
          "description": "Return to \\(\\sec\\theta\\).",
          "workingLatex": "\\left(\\sec\\theta - 1\\right)\\left(\\sec\\theta + 2\\right) = 0",
          "explanation": "Replace \\(s\\) by \\(\\sec\\theta\\) so we can solve for the angle."
        },
        {
          "stepNumber": 9,
          "description": "Apply the zero-product principle.",
          "workingLatex": "\\sec\\theta = 1 \\quad \\text{or} \\quad \\sec\\theta = -2",
          "explanation": "A product is zero when a factor is zero. Both values are reachable since \\(\\sec\\theta\\) takes all values with \\(|\\sec\\theta|\\ge 1\\)."
        },
        {
          "stepNumber": 10,
          "description": "Convert \\(\\sec\\theta = 1\\) to cosine.",
          "workingLatex": "\\cos\\theta = 1",
          "explanation": "Since \\(\\sec\\theta=\\displaystyle\\frac{1}{\\cos\\theta}\\), \\(\\sec\\theta=1\\) means \\(\\cos\\theta=1\\). Working in cosine makes finding angles easier."
        },
        {
          "stepNumber": 11,
          "description": "Solve \\(\\cos\\theta = 1\\) on \\([0,2\\pi]\\).",
          "workingLatex": "\\theta = 0, \\quad 2\\pi",
          "explanation": "Cosine equals \\(1\\) at the ends of the interval. Both endpoints are included because the interval is closed."
        },
        {
          "stepNumber": 12,
          "description": "Convert \\(\\sec\\theta = -2\\) to cosine.",
          "workingLatex": "\\cos\\theta = -\\frac{1}{2}",
          "explanation": "From \\(\\sec\\theta=-2\\) we get \\(\\cos\\theta=\\displaystyle\\frac{1}{-2}=-\\displaystyle\\frac12\\). Don't invert incorrectly to \\(-2\\)."
        },
        {
          "stepNumber": 13,
          "description": "Find the related acute angle.",
          "workingLatex": "\\cos^{-1}\\frac{1}{2} = \\frac{\\pi}{3}",
          "explanation": "The acute angle whose cosine has magnitude \\(\\displaystyle\\frac12\\) is \\(\\displaystyle\\frac{\\pi}{3}\\); we use it to place the solutions by quadrant."
        },
        {
          "stepNumber": 14,
          "description": "Solve \\(\\cos\\theta = -\\displaystyle\\frac12\\) on \\([0,2\\pi]\\).",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{3}, \\quad \\pi + \\frac{\\pi}{3} = \\frac{2\\pi}{3}, \\quad \\frac{4\\pi}{3}",
          "explanation": "Cosine is negative in the second and third quadrants, giving \\(\\pi-\\displaystyle\\frac{\\pi}{3}=\\displaystyle\\frac{2\\pi}{3}\\) and \\(\\pi+\\displaystyle\\frac{\\pi}{3}=\\displaystyle\\frac{4\\pi}{3}\\)."
        },
        {
          "stepNumber": 15,
          "description": "List all four solutions in the interval.",
          "workingLatex": "\\theta = 0,\\; \\frac{2\\pi}{3},\\; \\frac{4\\pi}{3},\\; 2\\pi",
          "explanation": "All four values lie in \\([0,2\\pi]\\) and \\(\\tan\\theta\\) and \\(\\sec\\theta\\) are defined at each, so all are valid solutions.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    0.106,
                    0.994
                  ],
                  [
                    0.213,
                    0.977
                  ],
                  [
                    0.319,
                    0.949
                  ],
                  [
                    0.426,
                    0.911
                  ],
                  [
                    0.532,
                    0.862
                  ],
                  [
                    0.639,
                    0.803
                  ],
                  [
                    0.745,
                    0.735
                  ],
                  [
                    0.852,
                    0.659
                  ],
                  [
                    0.958,
                    0.575
                  ],
                  [
                    1.065,
                    0.485
                  ],
                  [
                    1.171,
                    0.389
                  ],
                  [
                    1.278,
                    0.289
                  ],
                  [
                    1.384,
                    0.185
                  ],
                  [
                    1.491,
                    0.08
                  ],
                  [
                    1.597,
                    -0.027
                  ],
                  [
                    1.704,
                    -0.133
                  ],
                  [
                    1.81,
                    -0.237
                  ],
                  [
                    1.917,
                    -0.339
                  ],
                  [
                    2.023,
                    -0.437
                  ],
                  [
                    2.13,
                    -0.53
                  ],
                  [
                    2.236,
                    -0.618
                  ],
                  [
                    2.343,
                    -0.698
                  ],
                  [
                    2.449,
                    -0.77
                  ],
                  [
                    2.556,
                    -0.833
                  ],
                  [
                    2.662,
                    -0.887
                  ],
                  [
                    2.769,
                    -0.931
                  ],
                  [
                    2.875,
                    -0.965
                  ],
                  [
                    2.982,
                    -0.987
                  ],
                  [
                    3.088,
                    -0.999
                  ],
                  [
                    3.195,
                    -0.999
                  ],
                  [
                    3.301,
                    -0.987
                  ],
                  [
                    3.408,
                    -0.965
                  ],
                  [
                    3.514,
                    -0.931
                  ],
                  [
                    3.621,
                    -0.887
                  ],
                  [
                    3.727,
                    -0.833
                  ],
                  [
                    3.834,
                    -0.77
                  ],
                  [
                    3.94,
                    -0.698
                  ],
                  [
                    4.047,
                    -0.618
                  ],
                  [
                    4.153,
                    -0.53
                  ],
                  [
                    4.26,
                    -0.437
                  ],
                  [
                    4.366,
                    -0.339
                  ],
                  [
                    4.473,
                    -0.237
                  ],
                  [
                    4.579,
                    -0.133
                  ],
                  [
                    4.686,
                    -0.027
                  ],
                  [
                    4.792,
                    0.08
                  ],
                  [
                    4.899,
                    0.185
                  ],
                  [
                    5.005,
                    0.289
                  ],
                  [
                    5.112,
                    0.389
                  ],
                  [
                    5.218,
                    0.485
                  ],
                  [
                    5.325,
                    0.575
                  ],
                  [
                    5.431,
                    0.659
                  ],
                  [
                    5.538,
                    0.735
                  ],
                  [
                    5.644,
                    0.803
                  ],
                  [
                    5.751,
                    0.862
                  ],
                  [
                    5.857,
                    0.911
                  ],
                  [
                    5.964,
                    0.949
                  ],
                  [
                    6.07,
                    0.977
                  ],
                  [
                    6.177,
                    0.994
                  ],
                  [
                    6.283,
                    1
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\cos\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  -0.5
                ],
                "to": [
                  6.283,
                  -0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  -0.72
                ]
              },
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  6.283,
                  1
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=1",
                "labelAt": [
                  5.383,
                  1.22
                ]
              }
            ],
            "points": [
              {
                "at": [
                  2.094,
                  -0.5
                ],
                "label": "\\tfrac{2\\pi}{3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  4.189,
                  -0.5
                ],
                "label": "\\tfrac{4\\pi}{3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  0,
                  1
                ],
                "label": "0",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  6.283,
                  1
                ],
                "label": "2\\pi",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = 0,\\ \\displaystyle\\frac{2\\pi}{3},\\ \\displaystyle\\frac{4\\pi}{3},\\ 2\\pi\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-061",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 70",
    "difficulty": "Challenge",
    "questionText": "Solve \\(\\cot^2\\theta = 3\\csc\\theta - 3\\) on \\([0, 2\\pi]\\).",
    "marks": 5,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the Pythagorean identity in sin/cos.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "We want the equation in a single trig function. Begin with the fundamental Pythagorean identity, which we will reshape into one connecting \\(\\cot\\theta\\) and \\(\\csc\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Divide every term by \\(\\sin^2\\theta\\).",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Dividing through by \\(\\sin^2\\theta\\) introduces the ratios \\(\\cos\\theta/\\sin\\theta\\) and \\(1/\\sin\\theta\\), which are exactly \\(\\cot\\theta\\) and \\(\\csc\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite each ratio as cot and csc.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "Using \\(\\cot\\theta = \\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\) and \\(\\csc\\theta = \\displaystyle\\frac{1}{\\sin\\theta}\\). This is the Pythagorean identity we need."
        },
        {
          "stepNumber": 4,
          "description": "Rearrange to isolate \\(\\cot^2\\theta\\).",
          "workingLatex": "\\cot^2\\theta = \\csc^2\\theta - 1",
          "explanation": "Subtract \\(1\\) from both sides. A common slip is to write \\(\\cot^2\\theta = \\csc^2\\theta + 1\\) with the wrong sign; the \\(-1\\) is essential here."
        },
        {
          "stepNumber": 5,
          "description": "Substitute this into the given equation.",
          "workingLatex": "\\csc^2\\theta - 1 = 3\\csc\\theta - 3",
          "explanation": "Replace \\(\\cot^2\\theta\\) in \\(\\cot^2\\theta = 3\\csc\\theta - 3\\). The equation is now purely in \\(\\csc\\theta\\), which we can treat as one variable."
        },
        {
          "stepNumber": 6,
          "description": "Move the right-hand terms across.",
          "workingLatex": "\\csc^2\\theta - 1 - 3\\csc\\theta + 3 = 0",
          "explanation": "Bring \\(3\\csc\\theta\\) and \\(-3\\) over to the left, flipping their signs. Keep the terms unsimplified for one line so the sign changes are visible."
        },
        {
          "stepNumber": 7,
          "description": "Combine the constant terms.",
          "workingLatex": "\\csc^2\\theta - 3\\csc\\theta + 2 = 0",
          "explanation": "Combine \\(-1 + 3 = 2\\). A common slip is mishandling the constants: \\(-1 -(-3) = +2\\), not \\(-4\\)."
        },
        {
          "stepNumber": 8,
          "description": "Look for two numbers for the factorisation.",
          "workingLatex": "(-1)\\times(-2) = 2, \\qquad (-1)+(-2) = -3",
          "explanation": "For a quadratic \\(x^2 - 3x + 2\\) we need two numbers multiplying to \\(+2\\) and adding to \\(-3\\). These are \\(-1\\) and \\(-2\\)."
        },
        {
          "stepNumber": 9,
          "description": "Factorise the quadratic in \\(\\csc\\theta\\).",
          "workingLatex": "(\\csc\\theta - 1)(\\csc\\theta - 2) = 0",
          "explanation": "Write the factors using the two numbers found. Expanding back gives the middle term \\(-3\\csc\\theta\\), confirming the factorisation."
        },
        {
          "stepNumber": 10,
          "description": "Set each factor equal to zero.",
          "workingLatex": "\\csc\\theta - 1 = 0 \\quad\\text{or}\\quad \\csc\\theta - 2 = 0",
          "explanation": "A product is zero only when one of its factors is zero. Treat each factor as a separate branch."
        },
        {
          "stepNumber": 11,
          "description": "Solve each branch for \\(\\csc\\theta\\).",
          "workingLatex": "\\csc\\theta = 1 \\quad\\text{or}\\quad \\csc\\theta = 2",
          "explanation": "Add the constant across in each case. We now have two simple values of \\(\\csc\\theta\\) to convert."
        },
        {
          "stepNumber": 12,
          "description": "Take reciprocals to convert to \\(\\sin\\theta\\).",
          "workingLatex": "\\sin\\theta = \\frac{1}{\\csc\\theta}",
          "explanation": "Since \\(\\csc\\theta = 1/\\sin\\theta\\), the reciprocal gives \\(\\sin\\theta\\). A common slip is leaving the answer in \\(\\csc\\theta\\) without converting to a solvable form."
        },
        {
          "stepNumber": 13,
          "description": "Apply the reciprocal to each value.",
          "workingLatex": "\\sin\\theta = 1 \\quad\\text{or}\\quad \\sin\\theta = \\frac{1}{2}",
          "explanation": "Reciprocal of \\(1\\) is \\(1\\); reciprocal of \\(2\\) is \\(\\displaystyle\\frac{1}{2}\\). These are the two sine equations to solve on the interval."
        },
        {
          "stepNumber": 14,
          "description": "Solve \\(\\sin\\theta = 1\\) on the interval.",
          "workingLatex": "\\theta = \\frac{\\pi}{2}",
          "explanation": "On \\([0, 2\\pi]\\) the sine curve reaches its maximum of \\(1\\) only at \\(\\theta = \\displaystyle\\frac{\\pi}{2}\\). There is exactly one solution from this branch."
        },
        {
          "stepNumber": 15,
          "description": "Find the principal value for \\(\\sin\\theta = \\displaystyle\\frac{1}{2}\\).",
          "workingLatex": "\\theta = \\arcsin\\frac{1}{2} = \\frac{\\pi}{6}",
          "explanation": "The principal value of \\(\\arcsin\\displaystyle\\frac{1}{2}\\) is \\(\\displaystyle\\frac{\\pi}{6}\\), the first-quadrant solution."
        },
        {
          "stepNumber": 16,
          "description": "Find the second-quadrant solution.",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "Sine is also positive in the second quadrant, so \\(\\pi - \\displaystyle\\frac{\\pi}{6}\\) is a second solution. Don't forget this quadrant."
        },
        {
          "stepNumber": 17,
          "description": "Check no root must be rejected.",
          "workingLatex": "\\sin\\frac{\\pi}{6}, \\sin\\frac{\\pi}{2}, \\sin\\frac{5\\pi}{6} \\neq 0",
          "explanation": "Each value gives \\(\\sin\\theta \\neq 0\\), so \\(\\csc\\theta\\) and \\(\\cot\\theta\\) are defined and no solution is invalid."
        },
        {
          "stepNumber": 18,
          "description": "List all solutions in \\([0, 2\\pi]\\).",
          "workingLatex": "\\theta = \\frac{\\pi}{6}, \\; \\frac{\\pi}{2}, \\; \\frac{5\\pi}{6}",
          "explanation": "Collect the three valid values; all lie within \\([0, 2\\pi]\\).",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.106,
                    0.106
                  ],
                  [
                    0.213,
                    0.211
                  ],
                  [
                    0.319,
                    0.314
                  ],
                  [
                    0.426,
                    0.413
                  ],
                  [
                    0.532,
                    0.508
                  ],
                  [
                    0.639,
                    0.596
                  ],
                  [
                    0.745,
                    0.678
                  ],
                  [
                    0.852,
                    0.753
                  ],
                  [
                    0.958,
                    0.818
                  ],
                  [
                    1.065,
                    0.875
                  ],
                  [
                    1.171,
                    0.921
                  ],
                  [
                    1.278,
                    0.957
                  ],
                  [
                    1.384,
                    0.983
                  ],
                  [
                    1.491,
                    0.997
                  ],
                  [
                    1.597,
                    1
                  ],
                  [
                    1.704,
                    0.991
                  ],
                  [
                    1.81,
                    0.971
                  ],
                  [
                    1.917,
                    0.941
                  ],
                  [
                    2.023,
                    0.899
                  ],
                  [
                    2.13,
                    0.848
                  ],
                  [
                    2.236,
                    0.787
                  ],
                  [
                    2.343,
                    0.716
                  ],
                  [
                    2.449,
                    0.638
                  ],
                  [
                    2.556,
                    0.553
                  ],
                  [
                    2.662,
                    0.461
                  ],
                  [
                    2.769,
                    0.364
                  ],
                  [
                    2.875,
                    0.263
                  ],
                  [
                    2.982,
                    0.159
                  ],
                  [
                    3.088,
                    0.053
                  ],
                  [
                    3.195,
                    -0.053
                  ],
                  [
                    3.301,
                    -0.159
                  ],
                  [
                    3.408,
                    -0.263
                  ],
                  [
                    3.514,
                    -0.364
                  ],
                  [
                    3.621,
                    -0.461
                  ],
                  [
                    3.727,
                    -0.553
                  ],
                  [
                    3.834,
                    -0.638
                  ],
                  [
                    3.94,
                    -0.716
                  ],
                  [
                    4.047,
                    -0.787
                  ],
                  [
                    4.153,
                    -0.848
                  ],
                  [
                    4.26,
                    -0.899
                  ],
                  [
                    4.366,
                    -0.941
                  ],
                  [
                    4.473,
                    -0.971
                  ],
                  [
                    4.579,
                    -0.991
                  ],
                  [
                    4.686,
                    -1
                  ],
                  [
                    4.792,
                    -0.997
                  ],
                  [
                    4.899,
                    -0.983
                  ],
                  [
                    5.005,
                    -0.957
                  ],
                  [
                    5.112,
                    -0.921
                  ],
                  [
                    5.218,
                    -0.875
                  ],
                  [
                    5.325,
                    -0.818
                  ],
                  [
                    5.431,
                    -0.753
                  ],
                  [
                    5.538,
                    -0.678
                  ],
                  [
                    5.644,
                    -0.596
                  ],
                  [
                    5.751,
                    -0.508
                  ],
                  [
                    5.857,
                    -0.413
                  ],
                  [
                    5.964,
                    -0.314
                  ],
                  [
                    6.07,
                    -0.211
                  ],
                  [
                    6.177,
                    -0.106
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\sin\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  6.283,
                  1
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=1",
                "labelAt": [
                  5.383,
                  1.22
                ]
              },
              {
                "from": [
                  0,
                  0.5
                ],
                "to": [
                  6.283,
                  0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  0.72
                ]
              }
            ],
            "points": [
              {
                "at": [
                  1.571,
                  1
                ],
                "label": "\\tfrac{\\pi}{2}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  0.524,
                  0.5
                ],
                "label": "\\tfrac{\\pi}{6}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.618,
                  0.5
                ],
                "label": "\\tfrac{5\\pi}{6}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{2}, \\displaystyle\\frac{\\pi}{6}, \\displaystyle\\frac{5\\pi}{6}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-062",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 36",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\sin^2\\theta \\tan\\theta + \\cos^2\\theta \\cot\\theta \\equiv \\displaystyle\\frac{1}{\\sin\\theta\\cos\\theta} - 2\\sin\\theta\\cos\\theta + 2\\sin\\theta\\cos\\theta / \\ldots \\)... Actually prove \\(\\sin^2 \\tan + \\cos^2 \\cot + 2\\sin\\cos = \\sec\\csc\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the left-hand side.",
          "workingLatex": "\\text{LHS} = \\sin^2\\theta\\,\\tan\\theta + \\cos^2\\theta\\,\\cot\\theta + 2\\sin\\theta\\cos\\theta",
          "explanation": "State the LHS clearly so each transformation can be tracked. We aim to reach \\(\\sec\\theta\\csc\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Replace tan and cot with sin/cos.",
          "workingLatex": "= \\sin^2\\theta\\,\\frac{\\sin\\theta}{\\cos\\theta} + \\cos^2\\theta\\,\\frac{\\cos\\theta}{\\sin\\theta} + 2\\sin\\theta\\cos\\theta",
          "explanation": "Use the quotient identities \\(\\tan\\theta = \\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\) and \\(\\cot\\theta = \\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\). Converting to sines and cosines first is the standard opening move."
        },
        {
          "stepNumber": 3,
          "description": "Multiply the first numerator.",
          "workingLatex": "\\sin^2\\theta\\cdot\\sin\\theta = \\sin^3\\theta \\;\\Rightarrow\\; \\frac{\\sin^3\\theta}{\\cos\\theta}",
          "explanation": "Multiplying \\(\\sin^2\\theta\\) by \\(\\sin\\theta\\) adds the exponents to give \\(\\sin^3\\theta\\). A common slip is forgetting to raise the power."
        },
        {
          "stepNumber": 4,
          "description": "Multiply the second numerator.",
          "workingLatex": "\\cos^2\\theta\\cdot\\cos\\theta = \\cos^3\\theta \\;\\Rightarrow\\; \\frac{\\cos^3\\theta}{\\sin\\theta}",
          "explanation": "Likewise \\(\\cos^2\\theta\\cdot\\cos\\theta = \\cos^3\\theta\\). The middle term stays as \\(2\\sin\\theta\\cos\\theta\\) for now."
        },
        {
          "stepNumber": 5,
          "description": "Collect the rewritten three terms.",
          "workingLatex": "= \\frac{\\sin^3\\theta}{\\cos\\theta} + \\frac{\\cos^3\\theta}{\\sin\\theta} + 2\\sin\\theta\\cos\\theta",
          "explanation": "Bring the two simplified fractions together with the unchanged third term, ready to put over a common denominator."
        },
        {
          "stepNumber": 6,
          "description": "Identify the common denominator.",
          "workingLatex": "\\text{common denominator} = \\sin\\theta\\cos\\theta",
          "explanation": "The denominators are \\(\\cos\\theta\\) and \\(\\sin\\theta\\); their product \\(\\sin\\theta\\cos\\theta\\) clears both. The third term must be rewritten over the same denominator."
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the first term over the common denominator.",
          "workingLatex": "\\frac{\\sin^3\\theta}{\\cos\\theta} = \\frac{\\sin^3\\theta\\cdot\\sin\\theta}{\\sin\\theta\\cos\\theta} = \\frac{\\sin^4\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply top and bottom by \\(\\sin\\theta\\). Take care to raise \\(\\sin^3\\theta\\) to \\(\\sin^4\\theta\\) in the numerator."
        },
        {
          "stepNumber": 8,
          "description": "Rewrite the second term over the common denominator.",
          "workingLatex": "\\frac{\\cos^3\\theta}{\\sin\\theta} = \\frac{\\cos^3\\theta\\cdot\\cos\\theta}{\\sin\\theta\\cos\\theta} = \\frac{\\cos^4\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply top and bottom by \\(\\cos\\theta\\), giving \\(\\cos^4\\theta\\) on top."
        },
        {
          "stepNumber": 9,
          "description": "Rewrite the third term over the common denominator.",
          "workingLatex": "2\\sin\\theta\\cos\\theta = \\frac{2\\sin\\theta\\cos\\theta\\cdot\\sin\\theta\\cos\\theta}{\\sin\\theta\\cos\\theta} = \\frac{2\\sin^2\\theta\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "Multiply top and bottom by \\(\\sin\\theta\\cos\\theta\\). The numerator becomes \\(2\\sin^2\\theta\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Add the three fractions.",
          "workingLatex": "= \\frac{\\sin^4\\theta + \\cos^4\\theta + 2\\sin^2\\theta\\cos^2\\theta}{\\sin\\theta\\cos\\theta}",
          "explanation": "With a shared denominator, add the numerators. Keep all three terms; the next step recognises their structure."
        },
        {
          "stepNumber": 11,
          "description": "Recognise the numerator as a perfect square.",
          "workingLatex": "\\sin^4\\theta + 2\\sin^2\\theta\\cos^2\\theta + \\cos^4\\theta = (\\sin^2\\theta + \\cos^2\\theta)^2",
          "explanation": "The numerator has the form \\(a^2 + 2ab + b^2 = (a+b)^2\\) with \\(a = \\sin^2\\theta\\) and \\(b = \\cos^2\\theta\\). Spotting this is the key step."
        },
        {
          "stepNumber": 12,
          "description": "Rewrite the fraction with the squared bracket.",
          "workingLatex": "= \\frac{(\\sin^2\\theta + \\cos^2\\theta)^2}{\\sin\\theta\\cos\\theta}",
          "explanation": "Substitute the factored numerator back into the fraction, leaving the denominator unchanged."
        },
        {
          "stepNumber": 13,
          "description": "Apply the Pythagorean identity inside the bracket.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1 \\;\\Rightarrow\\; \\frac{(1)^2}{\\sin\\theta\\cos\\theta}",
          "explanation": "Since \\(\\sin^2\\theta + \\cos^2\\theta = 1\\), the bracket collapses to \\(1\\). This is the heart of the simplification."
        },
        {
          "stepNumber": 14,
          "description": "Simplify the squared one.",
          "workingLatex": "= \\frac{1}{\\sin\\theta\\cos\\theta}",
          "explanation": "Because \\(1^2 = 1\\), the numerator is just \\(1\\), leaving a single reciprocal-product fraction."
        },
        {
          "stepNumber": 15,
          "description": "Split into a product of reciprocals.",
          "workingLatex": "\\frac{1}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta}\\cdot\\frac{1}{\\cos\\theta}",
          "explanation": "Separate the single fraction into a product so each factor can be named as a reciprocal trig function."
        },
        {
          "stepNumber": 16,
          "description": "Rewrite as csc and sec to match the RHS.",
          "workingLatex": "= \\csc\\theta\\sec\\theta = \\text{RHS}",
          "explanation": "Using \\(\\displaystyle\\frac{1}{\\sin\\theta} = \\csc\\theta\\) and \\(\\displaystyle\\frac{1}{\\cos\\theta} = \\sec\\theta\\). Since LHS equals RHS, the identity is proved."
        }
      ],
      "finalAnswer": "\\(\\sec\\theta\\csc\\theta\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-063",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 71",
    "difficulty": "Challenge",
    "questionText": "Prove \\(\\displaystyle\\frac{\\cos\\theta}{1 - \\tan\\theta} + \\displaystyle\\frac{\\sin\\theta}{1 - \\cot\\theta} \\equiv \\sin\\theta + \\cos\\theta\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rewrite tan in the first denominator.",
          "workingLatex": "\\frac{\\cos\\theta}{1 - \\tan\\theta} = \\frac{\\cos\\theta}{1 - \\frac{\\sin\\theta}{\\cos\\theta}}",
          "explanation": "Use the quotient identity \\(\\tan\\theta = \\displaystyle\\frac{\\sin\\theta}{\\cos\\theta}\\). Converting to sin/cos lets us clear the compound fraction."
        },
        {
          "stepNumber": 2,
          "description": "Write the 1 in the denominator over \\(\\cos\\theta\\).",
          "workingLatex": "1 - \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\cos\\theta}{\\cos\\theta} - \\frac{\\sin\\theta}{\\cos\\theta}",
          "explanation": "Replace \\(1\\) with \\(\\displaystyle\\frac{\\cos\\theta}{\\cos\\theta}\\) so both pieces share a denominator before combining."
        },
        {
          "stepNumber": 3,
          "description": "Combine the first denominator into one fraction.",
          "workingLatex": "= \\frac{\\cos\\theta}{\\frac{\\cos\\theta - \\sin\\theta}{\\cos\\theta}}",
          "explanation": "Subtract the numerators over the common \\(\\cos\\theta\\). Take care to keep the order \\(\\cos\\theta - \\sin\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Convert the division into multiplication by the reciprocal.",
          "workingLatex": "= \\cos\\theta \\cdot \\frac{\\cos\\theta}{\\cos\\theta - \\sin\\theta}",
          "explanation": "Dividing by a fraction means multiplying by its reciprocal. A common slip is forgetting to invert the bottom fraction."
        },
        {
          "stepNumber": 5,
          "description": "Simplify the first term.",
          "workingLatex": "= \\frac{\\cos^2\\theta}{\\cos\\theta - \\sin\\theta}",
          "explanation": "Multiply \\(\\cos\\theta\\) into the numerator to get \\(\\cos^2\\theta\\). This is the cleaned-up first term."
        },
        {
          "stepNumber": 6,
          "description": "Rewrite cot in the second denominator.",
          "workingLatex": "\\frac{\\sin\\theta}{1 - \\cot\\theta} = \\frac{\\sin\\theta}{1 - \\frac{\\cos\\theta}{\\sin\\theta}}",
          "explanation": "Use \\(\\cot\\theta = \\displaystyle\\frac{\\cos\\theta}{\\sin\\theta}\\). Handle the second term exactly as we did the first."
        },
        {
          "stepNumber": 7,
          "description": "Write the 1 in the denominator over \\(\\sin\\theta\\).",
          "workingLatex": "1 - \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{\\sin\\theta} - \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "Replace \\(1\\) with \\(\\displaystyle\\frac{\\sin\\theta}{\\sin\\theta}\\) so the denominator pieces share a base."
        },
        {
          "stepNumber": 8,
          "description": "Combine the second denominator into one fraction.",
          "workingLatex": "= \\frac{\\sin\\theta}{\\frac{\\sin\\theta - \\cos\\theta}{\\sin\\theta}}",
          "explanation": "Subtract the numerators over the common \\(\\sin\\theta\\). Note the denominator is \\(\\sin\\theta - \\cos\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Convert the division into multiplication by the reciprocal.",
          "workingLatex": "= \\sin\\theta\\cdot\\frac{\\sin\\theta}{\\sin\\theta - \\cos\\theta}",
          "explanation": "Again multiply by the reciprocal of the bottom fraction, just as in the first term."
        },
        {
          "stepNumber": 10,
          "description": "Simplify the second term.",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\sin\\theta - \\cos\\theta}",
          "explanation": "Multiply \\(\\sin\\theta\\) into the numerator to get \\(\\sin^2\\theta\\). Its denominator is the negative of the first term's denominator."
        },
        {
          "stepNumber": 11,
          "description": "Flip the sign so both share a denominator.",
          "workingLatex": "\\frac{\\sin^2\\theta}{\\sin\\theta - \\cos\\theta} = \\frac{-\\sin^2\\theta}{\\cos\\theta - \\sin\\theta}",
          "explanation": "Since \\(\\sin\\theta - \\cos\\theta = -(\\cos\\theta - \\sin\\theta)\\), multiplying top and bottom by \\(-1\\) matches the first term's denominator. This is the trick that lets us add the fractions."
        },
        {
          "stepNumber": 12,
          "description": "Write both terms over the common denominator.",
          "workingLatex": "\\text{LHS} = \\frac{\\cos^2\\theta}{\\cos\\theta - \\sin\\theta} + \\frac{-\\sin^2\\theta}{\\cos\\theta - \\sin\\theta}",
          "explanation": "Both fractions now have denominator \\(\\cos\\theta - \\sin\\theta\\), so they are ready to combine into a single fraction."
        },
        {
          "stepNumber": 13,
          "description": "Add the numerators.",
          "workingLatex": "= \\frac{\\cos^2\\theta - \\sin^2\\theta}{\\cos\\theta - \\sin\\theta}",
          "explanation": "Add the numerators \\(\\cos^2\\theta + (-\\sin^2\\theta)\\). Keep the sign on \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 14,
          "description": "Factor the numerator as a difference of squares.",
          "workingLatex": "= \\frac{(\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)}{\\cos\\theta - \\sin\\theta}",
          "explanation": "\\(\\cos^2\\theta - \\sin^2\\theta = (\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)\\). This exposes the common factor to cancel."
        },
        {
          "stepNumber": 15,
          "description": "Cancel the common factor.",
          "workingLatex": "= \\cos\\theta + \\sin\\theta",
          "explanation": "Cancel \\(\\cos\\theta - \\sin\\theta\\) from top and bottom (valid where \\(\\tan\\theta \\neq 1\\), so the original fractions are defined)."
        },
        {
          "stepNumber": 16,
          "description": "Match the order of the RHS.",
          "workingLatex": "= \\sin\\theta + \\cos\\theta = \\text{RHS}",
          "explanation": "Addition is commutative, so \\(\\cos\\theta + \\sin\\theta = \\sin\\theta + \\cos\\theta\\). The LHS equals the RHS, so the identity is proved."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-064",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 37",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\sec^2\\theta - 3 = 0\\) on \\([0, 2\\pi]\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate \\(\\sec^2\\theta\\).",
          "workingLatex": "\\sec^2\\theta = 3",
          "explanation": "Add \\(3\\) to both sides of \\(\\sec^2\\theta - 3 = 0\\). Keeping it in \\(\\sec\\theta\\) form for one more step avoids early errors."
        },
        {
          "stepNumber": 2,
          "description": "Write sec as a reciprocal of cos.",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Since \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\), squaring gives \\(\\sec^2\\theta = \\displaystyle\\frac{1}{\\cos^2\\theta}\\). This lets us solve in terms of cosine."
        },
        {
          "stepNumber": 3,
          "description": "Set the reciprocal equal to 3.",
          "workingLatex": "\\frac{1}{\\cos^2\\theta} = 3",
          "explanation": "Substitute the reciprocal form into \\(\\sec^2\\theta = 3\\). Now invert both sides to free \\(\\cos^2\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Take reciprocals to find \\(\\cos^2\\theta\\).",
          "workingLatex": "\\cos^2\\theta = \\frac{1}{3}",
          "explanation": "Reciprocating both sides gives \\(\\cos^2\\theta = \\displaystyle\\frac{1}{3}\\). A common slip is writing \\(\\cos^2\\theta = 3\\), which is impossible since \\(|\\cos\\theta|\\le 1\\)."
        },
        {
          "stepNumber": 5,
          "description": "Take the square root, keeping both signs.",
          "workingLatex": "\\cos\\theta = \\pm\\frac{1}{\\sqrt{3}}",
          "explanation": "Square-rooting gives both a positive and a negative root. Forgetting the \\(\\pm\\) loses half the solutions."
        },
        {
          "stepNumber": 6,
          "description": "Find the acute reference angle.",
          "workingLatex": "\\alpha = \\arccos\\frac{1}{\\sqrt{3}} \\approx 0.9553",
          "explanation": "The reference angle comes from the positive value. All four solutions are built from this \\(\\alpha\\)."
        },
        {
          "stepNumber": 7,
          "description": "First-quadrant solution for the positive root.",
          "workingLatex": "\\cos\\theta = +\\frac{1}{\\sqrt{3}} \\;\\Rightarrow\\; \\theta = \\alpha",
          "explanation": "Cosine is positive in the first quadrant, so the reference angle itself is a solution."
        },
        {
          "stepNumber": 8,
          "description": "Fourth-quadrant solution for the positive root.",
          "workingLatex": "\\theta = 2\\pi - \\alpha",
          "explanation": "Cosine is also positive in the fourth quadrant; by the symmetry of the cosine curve about \\(\\theta = \\pi\\), \\(2\\pi - \\alpha\\) is a solution."
        },
        {
          "stepNumber": 9,
          "description": "Second-quadrant solution for the negative root.",
          "workingLatex": "\\cos\\theta = -\\frac{1}{\\sqrt{3}} \\;\\Rightarrow\\; \\theta = \\pi - \\alpha",
          "explanation": "Cosine is negative in the second quadrant, giving \\(\\pi - \\alpha\\). Don't forget the negative-cosine branch."
        },
        {
          "stepNumber": 10,
          "description": "Third-quadrant solution for the negative root.",
          "workingLatex": "\\theta = \\pi + \\alpha",
          "explanation": "Cosine is also negative in the third quadrant, giving \\(\\pi + \\alpha\\)."
        },
        {
          "stepNumber": 11,
          "description": "List all four solutions in \\([0, 2\\pi]\\).",
          "workingLatex": "\\theta = \\alpha,\\; \\pi - \\alpha,\\; \\pi + \\alpha,\\; 2\\pi - \\alpha,\\quad \\alpha = \\arccos\\frac{1}{\\sqrt{3}}",
          "explanation": "All four lie within \\([0, 2\\pi]\\) and \\(\\cos\\theta \\neq 0\\), so \\(\\sec\\theta\\) is defined for each. None are rejected.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    1
                  ],
                  [
                    0.106,
                    0.994
                  ],
                  [
                    0.213,
                    0.977
                  ],
                  [
                    0.319,
                    0.949
                  ],
                  [
                    0.426,
                    0.911
                  ],
                  [
                    0.532,
                    0.862
                  ],
                  [
                    0.639,
                    0.803
                  ],
                  [
                    0.745,
                    0.735
                  ],
                  [
                    0.852,
                    0.659
                  ],
                  [
                    0.958,
                    0.575
                  ],
                  [
                    1.065,
                    0.485
                  ],
                  [
                    1.171,
                    0.389
                  ],
                  [
                    1.278,
                    0.289
                  ],
                  [
                    1.384,
                    0.185
                  ],
                  [
                    1.491,
                    0.08
                  ],
                  [
                    1.597,
                    -0.027
                  ],
                  [
                    1.704,
                    -0.133
                  ],
                  [
                    1.81,
                    -0.237
                  ],
                  [
                    1.917,
                    -0.339
                  ],
                  [
                    2.023,
                    -0.437
                  ],
                  [
                    2.13,
                    -0.53
                  ],
                  [
                    2.236,
                    -0.618
                  ],
                  [
                    2.343,
                    -0.698
                  ],
                  [
                    2.449,
                    -0.77
                  ],
                  [
                    2.556,
                    -0.833
                  ],
                  [
                    2.662,
                    -0.887
                  ],
                  [
                    2.769,
                    -0.931
                  ],
                  [
                    2.875,
                    -0.965
                  ],
                  [
                    2.982,
                    -0.987
                  ],
                  [
                    3.088,
                    -0.999
                  ],
                  [
                    3.195,
                    -0.999
                  ],
                  [
                    3.301,
                    -0.987
                  ],
                  [
                    3.408,
                    -0.965
                  ],
                  [
                    3.514,
                    -0.931
                  ],
                  [
                    3.621,
                    -0.887
                  ],
                  [
                    3.727,
                    -0.833
                  ],
                  [
                    3.834,
                    -0.77
                  ],
                  [
                    3.94,
                    -0.698
                  ],
                  [
                    4.047,
                    -0.618
                  ],
                  [
                    4.153,
                    -0.53
                  ],
                  [
                    4.26,
                    -0.437
                  ],
                  [
                    4.366,
                    -0.339
                  ],
                  [
                    4.473,
                    -0.237
                  ],
                  [
                    4.579,
                    -0.133
                  ],
                  [
                    4.686,
                    -0.027
                  ],
                  [
                    4.792,
                    0.08
                  ],
                  [
                    4.899,
                    0.185
                  ],
                  [
                    5.005,
                    0.289
                  ],
                  [
                    5.112,
                    0.389
                  ],
                  [
                    5.218,
                    0.485
                  ],
                  [
                    5.325,
                    0.575
                  ],
                  [
                    5.431,
                    0.659
                  ],
                  [
                    5.538,
                    0.735
                  ],
                  [
                    5.644,
                    0.803
                  ],
                  [
                    5.751,
                    0.862
                  ],
                  [
                    5.857,
                    0.911
                  ],
                  [
                    5.964,
                    0.949
                  ],
                  [
                    6.07,
                    0.977
                  ],
                  [
                    6.177,
                    0.994
                  ],
                  [
                    6.283,
                    1
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\cos\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.577
                ],
                "to": [
                  6.283,
                  0.577
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{\\sqrt3}",
                "labelAt": [
                  5.383,
                  0.7969999999999999
                ]
              },
              {
                "from": [
                  0,
                  -0.577
                ],
                "to": [
                  6.283,
                  -0.577
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-\\tfrac{1}{\\sqrt3}",
                "labelAt": [
                  5.383,
                  -0.7969999999999999
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.955,
                  0.577
                ],
                "label": "\\arccos\\tfrac{1}{\\sqrt3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.328,
                  0.577
                ],
                "label": "2\\pi-\\arccos\\tfrac{1}{\\sqrt3}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.186,
                  -0.577
                ],
                "label": "\\pi-\\arccos\\tfrac{1}{\\sqrt3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  4.097,
                  -0.577
                ],
                "label": "\\pi+\\arccos\\tfrac{1}{\\sqrt3}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\arccos\\displaystyle\\frac{1}{\\sqrt 3}, \\pi - \\arccos\\displaystyle\\frac{1}{\\sqrt 3}, \\pi + \\arccos\\displaystyle\\frac{1}{\\sqrt 3}, 2\\pi - \\arccos\\displaystyle\\frac{1}{\\sqrt 3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-065",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 38",
    "difficulty": "Standard",
    "questionText": "Solve \\(\\csc^2\\theta = 4\\) on \\([0, 2\\pi]\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write csc as a reciprocal of sin.",
          "workingLatex": "\\csc^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Since \\(\\csc\\theta = \\displaystyle\\frac{1}{\\sin\\theta}\\), squaring gives \\(\\csc^2\\theta = \\displaystyle\\frac{1}{\\sin^2\\theta}\\). This lets us solve in terms of sine."
        },
        {
          "stepNumber": 2,
          "description": "Set the reciprocal equal to 4.",
          "workingLatex": "\\frac{1}{\\sin^2\\theta} = 4",
          "explanation": "Substitute the reciprocal form into \\(\\csc^2\\theta = 4\\). Now invert both sides to free \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Take reciprocals to find \\(\\sin^2\\theta\\).",
          "workingLatex": "\\sin^2\\theta = \\frac{1}{4}",
          "explanation": "Reciprocating both sides gives \\(\\sin^2\\theta = \\displaystyle\\frac{1}{4}\\). A common slip is writing \\(\\sin^2\\theta = 4\\), which is impossible since \\(|\\sin\\theta|\\le 1\\)."
        },
        {
          "stepNumber": 4,
          "description": "Take the square root, keeping both signs.",
          "workingLatex": "\\sin\\theta = \\pm\\frac{1}{2}",
          "explanation": "Square-rooting gives both signs. Omitting the \\(\\pm\\) would lose the negative-sine solutions in the third and fourth quadrants."
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle.",
          "workingLatex": "\\alpha = \\arcsin\\frac{1}{2} = \\frac{\\pi}{6}",
          "explanation": "The acute reference angle from the positive value is \\(\\displaystyle\\frac{\\pi}{6}\\). All four solutions are built from this angle."
        },
        {
          "stepNumber": 6,
          "description": "First-quadrant solution for the positive root.",
          "workingLatex": "\\sin\\theta = +\\frac{1}{2} \\;\\Rightarrow\\; \\theta = \\frac{\\pi}{6}",
          "explanation": "Sine is positive in the first quadrant, so the reference angle itself is a solution."
        },
        {
          "stepNumber": 7,
          "description": "Second-quadrant solution for the positive root.",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}",
          "explanation": "Sine is also positive in the second quadrant, giving \\(\\pi - \\displaystyle\\frac{\\pi}{6} = \\displaystyle\\frac{5\\pi}{6}\\)."
        },
        {
          "stepNumber": 8,
          "description": "Third-quadrant solution for the negative root.",
          "workingLatex": "\\sin\\theta = -\\frac{1}{2} \\;\\Rightarrow\\; \\theta = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}",
          "explanation": "Sine is negative in the third quadrant; measuring the reference angle \\(\\displaystyle\\frac{\\pi}{6}\\) past \\(\\pi\\) gives \\(\\displaystyle\\frac{7\\pi}{6}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Fourth-quadrant solution for the negative root.",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}",
          "explanation": "Sine is also negative in the fourth quadrant, giving \\(2\\pi - \\displaystyle\\frac{\\pi}{6} = \\displaystyle\\frac{11\\pi}{6}\\)."
        },
        {
          "stepNumber": 10,
          "description": "List all four solutions in \\([0, 2\\pi]\\).",
          "workingLatex": "\\theta = \\frac{\\pi}{6},\\; \\frac{5\\pi}{6},\\; \\frac{7\\pi}{6},\\; \\frac{11\\pi}{6}",
          "explanation": "All four have \\(\\sin\\theta \\neq 0\\), so \\(\\csc\\theta\\) is defined, and all lie within \\([0, 2\\pi]\\). None are rejected.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.106,
                    0.106
                  ],
                  [
                    0.213,
                    0.211
                  ],
                  [
                    0.319,
                    0.314
                  ],
                  [
                    0.426,
                    0.413
                  ],
                  [
                    0.532,
                    0.508
                  ],
                  [
                    0.639,
                    0.596
                  ],
                  [
                    0.745,
                    0.678
                  ],
                  [
                    0.852,
                    0.753
                  ],
                  [
                    0.958,
                    0.818
                  ],
                  [
                    1.065,
                    0.875
                  ],
                  [
                    1.171,
                    0.921
                  ],
                  [
                    1.278,
                    0.957
                  ],
                  [
                    1.384,
                    0.983
                  ],
                  [
                    1.491,
                    0.997
                  ],
                  [
                    1.597,
                    1
                  ],
                  [
                    1.704,
                    0.991
                  ],
                  [
                    1.81,
                    0.971
                  ],
                  [
                    1.917,
                    0.941
                  ],
                  [
                    2.023,
                    0.899
                  ],
                  [
                    2.13,
                    0.848
                  ],
                  [
                    2.236,
                    0.787
                  ],
                  [
                    2.343,
                    0.716
                  ],
                  [
                    2.449,
                    0.638
                  ],
                  [
                    2.556,
                    0.553
                  ],
                  [
                    2.662,
                    0.461
                  ],
                  [
                    2.769,
                    0.364
                  ],
                  [
                    2.875,
                    0.263
                  ],
                  [
                    2.982,
                    0.159
                  ],
                  [
                    3.088,
                    0.053
                  ],
                  [
                    3.195,
                    -0.053
                  ],
                  [
                    3.301,
                    -0.159
                  ],
                  [
                    3.408,
                    -0.263
                  ],
                  [
                    3.514,
                    -0.364
                  ],
                  [
                    3.621,
                    -0.461
                  ],
                  [
                    3.727,
                    -0.553
                  ],
                  [
                    3.834,
                    -0.638
                  ],
                  [
                    3.94,
                    -0.716
                  ],
                  [
                    4.047,
                    -0.787
                  ],
                  [
                    4.153,
                    -0.848
                  ],
                  [
                    4.26,
                    -0.899
                  ],
                  [
                    4.366,
                    -0.941
                  ],
                  [
                    4.473,
                    -0.971
                  ],
                  [
                    4.579,
                    -0.991
                  ],
                  [
                    4.686,
                    -1
                  ],
                  [
                    4.792,
                    -0.997
                  ],
                  [
                    4.899,
                    -0.983
                  ],
                  [
                    5.005,
                    -0.957
                  ],
                  [
                    5.112,
                    -0.921
                  ],
                  [
                    5.218,
                    -0.875
                  ],
                  [
                    5.325,
                    -0.818
                  ],
                  [
                    5.431,
                    -0.753
                  ],
                  [
                    5.538,
                    -0.678
                  ],
                  [
                    5.644,
                    -0.596
                  ],
                  [
                    5.751,
                    -0.508
                  ],
                  [
                    5.857,
                    -0.413
                  ],
                  [
                    5.964,
                    -0.314
                  ],
                  [
                    6.07,
                    -0.211
                  ],
                  [
                    6.177,
                    -0.106
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\sin\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.5
                ],
                "to": [
                  6.283,
                  0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  0.72
                ]
              },
              {
                "from": [
                  0,
                  -0.5
                ],
                "to": [
                  6.283,
                  -0.5
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-\\tfrac{1}{2}",
                "labelAt": [
                  5.383,
                  -0.72
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.524,
                  0.5
                ],
                "label": "\\tfrac{\\pi}{6}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.618,
                  0.5
                ],
                "label": "\\tfrac{5\\pi}{6}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  3.665,
                  -0.5
                ],
                "label": "\\tfrac{7\\pi}{6}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.76,
                  -0.5
                ],
                "label": "\\tfrac{11\\pi}{6}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{6}, \\displaystyle\\frac{5\\pi}{6}, \\displaystyle\\frac{7\\pi}{6}, \\displaystyle\\frac{11\\pi}{6}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-066",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 10",
    "difficulty": "Foundation",
    "questionText": "Solve \\(\\cot^2\\theta = 1\\) on \\([0, 2\\pi]\\).",
    "marks": 3,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the squared-function structure.",
          "workingLatex": "\\cot^2\\theta = 1",
          "explanation": "The unknown appears as \\(\\cot^2\\theta\\), so the first move is to undo the square by taking a square root. Treat \\(\\cot\\theta\\) as a single quantity for now."
        },
        {
          "stepNumber": 2,
          "description": "Take the square root of both sides.",
          "workingLatex": "\\cot\\theta = \\pm\\sqrt{1}",
          "explanation": "Taking a square root of an equation introduces a \\(\\pm\\) sign, because both a positive and a negative number square to give \\(1\\). Keeping both signs is essential here."
        },
        {
          "stepNumber": 3,
          "description": "Simplify the square root.",
          "workingLatex": "\\cot\\theta = \\pm 1",
          "explanation": "Since \\(\\sqrt{1} = 1\\), we have \\(\\cot\\theta = +1\\) or \\(\\cot\\theta = -1\\). A common slip is to forget the negative root and lose half the solutions."
        },
        {
          "stepNumber": 4,
          "description": "Rewrite \\(\\cot\\theta\\) as \\(\\displaystyle\\frac{1}{\\tan\\theta}\\).",
          "workingLatex": "\\frac{1}{\\tan\\theta} = \\pm 1",
          "explanation": "Use the reciprocal identity \\(\\cot\\theta = \\displaystyle\\frac{1}{\\tan\\theta}\\). Converting to \\(\\tan\\theta\\) is helpful because \\(\\tan\\) is the function on most calculators and in the standard solution patterns."
        },
        {
          "stepNumber": 5,
          "description": "Take reciprocals to isolate \\(\\tan\\theta\\).",
          "workingLatex": "\\tan\\theta = \\pm 1",
          "explanation": "The reciprocal of \\(\\pm 1\\) is again \\(\\pm 1\\), so the equation becomes \\(\\tan\\theta = \\pm 1\\). We now solve the two cases separately."
        },
        {
          "stepNumber": 6,
          "description": "Find the basic (reference) angle.",
          "workingLatex": "\\tan^{-1}(1) = \\frac{\\pi}{4}",
          "explanation": "The acute angle whose tangent is \\(1\\) is \\(\\displaystyle\\frac{\\pi}{4}\\). This reference angle is used to locate every solution in both cases."
        },
        {
          "stepNumber": 7,
          "description": "Solve \\(\\tan\\theta = 1\\) (first quadrant).",
          "workingLatex": "\\theta = \\frac{\\pi}{4}",
          "explanation": "\\(\\tan\\) is positive in the first quadrant, giving the principal solution \\(\\theta = \\displaystyle\\frac{\\pi}{4}\\)."
        },
        {
          "stepNumber": 8,
          "description": "Solve \\(\\tan\\theta = 1\\) (third quadrant).",
          "workingLatex": "\\theta = \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}",
          "explanation": "Since \\(\\tan\\) has period \\(\\pi\\), add \\(\\pi\\) to get the third-quadrant solution, where \\(\\tan\\) is also positive."
        },
        {
          "stepNumber": 9,
          "description": "Solve \\(\\tan\\theta = -1\\) (second quadrant).",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}",
          "explanation": "\\(\\tan\\) is negative in the second quadrant. Reflecting the reference angle gives \\(\\pi - \\displaystyle\\frac{\\pi}{4} = \\displaystyle\\frac{3\\pi}{4}\\)."
        },
        {
          "stepNumber": 10,
          "description": "Solve \\(\\tan\\theta = -1\\) (fourth quadrant).",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}",
          "explanation": "\\(\\tan\\) is also negative in the fourth quadrant, giving \\(2\\pi - \\displaystyle\\frac{\\pi}{4} = \\displaystyle\\frac{7\\pi}{4}\\). Forgetting these negative-root solutions is the usual error."
        },
        {
          "stepNumber": 11,
          "description": "Check the interval and excluded points.",
          "workingLatex": "\\cot\\theta \\text{ undefined at } \\theta = 0, \\pi, 2\\pi",
          "explanation": "\\(\\cot\\theta\\) is undefined where \\(\\sin\\theta = 0\\), i.e. at \\(0, \\pi, 2\\pi\\). None of our solutions hit these points, so all four are valid."
        },
        {
          "stepNumber": 12,
          "description": "Collect all solutions in \\([0,2\\pi]\\).",
          "workingLatex": "\\theta = \\frac{\\pi}{4}, \\; \\frac{3\\pi}{4}, \\; \\frac{5\\pi}{4}, \\; \\frac{7\\pi}{4}",
          "explanation": "All four values lie within the closed interval \\([0,2\\pi]\\), so they form the complete solution set.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -5,
            "yMax": 5,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -4,
              -2,
              0,
              2,
              4
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0.06,
                    0.06
                  ],
                  [
                    0.101,
                    0.102
                  ],
                  [
                    0.143,
                    0.144
                  ],
                  [
                    0.184,
                    0.186
                  ],
                  [
                    0.226,
                    0.23
                  ],
                  [
                    0.267,
                    0.274
                  ],
                  [
                    0.309,
                    0.319
                  ],
                  [
                    0.35,
                    0.365
                  ],
                  [
                    0.392,
                    0.413
                  ],
                  [
                    0.433,
                    0.462
                  ],
                  [
                    0.475,
                    0.514
                  ],
                  [
                    0.516,
                    0.567
                  ],
                  [
                    0.557,
                    0.623
                  ],
                  [
                    0.599,
                    0.682
                  ],
                  [
                    0.64,
                    0.745
                  ],
                  [
                    0.682,
                    0.812
                  ],
                  [
                    0.723,
                    0.883
                  ],
                  [
                    0.765,
                    0.959
                  ],
                  [
                    0.806,
                    1.042
                  ],
                  [
                    0.848,
                    1.133
                  ],
                  [
                    0.889,
                    1.232
                  ],
                  [
                    0.93,
                    1.342
                  ],
                  [
                    0.972,
                    1.465
                  ],
                  [
                    1.013,
                    1.604
                  ],
                  [
                    1.055,
                    1.763
                  ],
                  [
                    1.096,
                    1.947
                  ],
                  [
                    1.138,
                    2.163
                  ],
                  [
                    1.179,
                    2.422
                  ],
                  [
                    1.221,
                    2.738
                  ],
                  [
                    1.262,
                    3.136
                  ],
                  [
                    1.304,
                    3.652
                  ],
                  [
                    1.345,
                    4.353
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              },
              {
                "points": [
                  [
                    1.803,
                    -4.22
                  ],
                  [
                    1.89,
                    -3.028
                  ],
                  [
                    1.976,
                    -2.331
                  ],
                  [
                    2.062,
                    -1.867
                  ],
                  [
                    2.149,
                    -1.533
                  ],
                  [
                    2.235,
                    -1.277
                  ],
                  [
                    2.321,
                    -1.072
                  ],
                  [
                    2.408,
                    -0.902
                  ],
                  [
                    2.494,
                    -0.756
                  ],
                  [
                    2.58,
                    -0.629
                  ],
                  [
                    2.667,
                    -0.514
                  ],
                  [
                    2.753,
                    -0.409
                  ],
                  [
                    2.839,
                    -0.312
                  ],
                  [
                    2.926,
                    -0.219
                  ],
                  [
                    3.012,
                    -0.13
                  ],
                  [
                    3.098,
                    -0.043
                  ],
                  [
                    3.185,
                    0.043
                  ],
                  [
                    3.271,
                    0.13
                  ],
                  [
                    3.357,
                    0.219
                  ],
                  [
                    3.444,
                    0.312
                  ],
                  [
                    3.53,
                    0.409
                  ],
                  [
                    3.616,
                    0.514
                  ],
                  [
                    3.703,
                    0.629
                  ],
                  [
                    3.789,
                    0.756
                  ],
                  [
                    3.875,
                    0.902
                  ],
                  [
                    3.962,
                    1.072
                  ],
                  [
                    4.048,
                    1.277
                  ],
                  [
                    4.134,
                    1.533
                  ],
                  [
                    4.221,
                    1.867
                  ],
                  [
                    4.307,
                    2.331
                  ],
                  [
                    4.393,
                    3.028
                  ],
                  [
                    4.48,
                    4.22
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              },
              {
                "points": [
                  [
                    4.938,
                    -4.353
                  ],
                  [
                    4.98,
                    -3.652
                  ],
                  [
                    5.021,
                    -3.136
                  ],
                  [
                    5.063,
                    -2.738
                  ],
                  [
                    5.104,
                    -2.422
                  ],
                  [
                    5.145,
                    -2.163
                  ],
                  [
                    5.187,
                    -1.947
                  ],
                  [
                    5.228,
                    -1.763
                  ],
                  [
                    5.27,
                    -1.604
                  ],
                  [
                    5.311,
                    -1.465
                  ],
                  [
                    5.353,
                    -1.342
                  ],
                  [
                    5.394,
                    -1.232
                  ],
                  [
                    5.436,
                    -1.133
                  ],
                  [
                    5.477,
                    -1.042
                  ],
                  [
                    5.519,
                    -0.959
                  ],
                  [
                    5.56,
                    -0.883
                  ],
                  [
                    5.601,
                    -0.812
                  ],
                  [
                    5.643,
                    -0.745
                  ],
                  [
                    5.684,
                    -0.682
                  ],
                  [
                    5.726,
                    -0.623
                  ],
                  [
                    5.767,
                    -0.567
                  ],
                  [
                    5.809,
                    -0.514
                  ],
                  [
                    5.85,
                    -0.462
                  ],
                  [
                    5.892,
                    -0.413
                  ],
                  [
                    5.933,
                    -0.365
                  ],
                  [
                    5.974,
                    -0.319
                  ],
                  [
                    6.016,
                    -0.274
                  ],
                  [
                    6.057,
                    -0.23
                  ],
                  [
                    6.099,
                    -0.186
                  ],
                  [
                    6.14,
                    -0.144
                  ],
                  [
                    6.182,
                    -0.102
                  ],
                  [
                    6.223,
                    -0.06
                  ]
                ],
                "color": "#1d4ed8",
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  6.283,
                  1
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=1",
                "labelAt": [
                  5.383,
                  1.22
                ]
              },
              {
                "from": [
                  0,
                  -1
                ],
                "to": [
                  6.283,
                  -1
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-1",
                "labelAt": [
                  5.383,
                  -1.22
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.785,
                  1
                ],
                "label": "\\tfrac{\\pi}{4}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  3.927,
                  1
                ],
                "label": "\\tfrac{5\\pi}{4}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.356,
                  -1
                ],
                "label": "\\tfrac{3\\pi}{4}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.498,
                  -1
                ],
                "label": "\\tfrac{7\\pi}{4}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{4}, \\displaystyle\\frac{3\\pi}{4}, \\displaystyle\\frac{5\\pi}{4}, \\displaystyle\\frac{7\\pi}{4}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-067",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 39",
    "difficulty": "Standard",
    "questionText": "Prove \\(\\sec^2\\theta\\csc^2\\theta \\equiv \\sec^2\\theta + \\csc^2\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State which side you start with.",
          "workingLatex": "\\text{RHS} = \\sec^2\\theta + \\csc^2\\theta",
          "explanation": "Working from one side towards the other is the standard proof strategy. Beginning with the right-hand side is convenient because the sum is easier to combine into a single fraction."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite \\(\\sec^2\\theta\\) in \\(\\cos\\).",
          "workingLatex": "\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}",
          "explanation": "Use the reciprocal identity \\(\\sec\\theta = \\displaystyle\\frac{1}{\\cos\\theta}\\), then square it. Converting to \\(\\sin/\\cos\\) almost always unlocks a trig proof."
        },
        {
          "stepNumber": 3,
          "description": "Rewrite \\(\\csc^2\\theta\\) in \\(\\sin\\).",
          "workingLatex": "\\csc^2\\theta = \\frac{1}{\\sin^2\\theta}",
          "explanation": "Similarly \\(\\csc\\theta = \\displaystyle\\frac{1}{\\sin\\theta}\\), so squaring gives \\(\\displaystyle\\frac{1}{\\sin^2\\theta}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute both terms into the RHS.",
          "workingLatex": "\\text{RHS} = \\frac{1}{\\cos^2\\theta} + \\frac{1}{\\sin^2\\theta}",
          "explanation": "Both reciprocal squares now sit over single squared terms, ready to be combined into one fraction."
        },
        {
          "stepNumber": 5,
          "description": "Identify the common denominator.",
          "workingLatex": "\\text{common denominator} = \\sin^2\\theta\\cos^2\\theta",
          "explanation": "The lowest common denominator of \\(\\cos^2\\theta\\) and \\(\\sin^2\\theta\\) is their product \\(\\sin^2\\theta\\cos^2\\theta\\). Naming it first reduces errors when rewriting each fraction."
        },
        {
          "stepNumber": 6,
          "description": "Rewrite each fraction over that denominator.",
          "workingLatex": "= \\frac{\\sin^2\\theta}{\\sin^2\\theta\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Multiply the first fraction top and bottom by \\(\\sin^2\\theta\\) and the second by \\(\\cos^2\\theta\\). Take care not to swap which factor goes with which term."
        },
        {
          "stepNumber": 7,
          "description": "Combine into a single fraction.",
          "workingLatex": "= \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "With a common denominator the numerators add directly, giving \\(\\sin^2\\theta + \\cos^2\\theta\\) on top."
        },
        {
          "stepNumber": 8,
          "description": "Apply the Pythagorean identity to the numerator.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "The fundamental Pythagorean identity collapses the numerator to \\(1\\). A common slip is to leave the numerator unsimplified."
        },
        {
          "stepNumber": 9,
          "description": "Substitute the simplified numerator.",
          "workingLatex": "= \\frac{1}{\\sin^2\\theta\\cos^2\\theta}",
          "explanation": "Replacing the numerator with \\(1\\) leaves a single reciprocal fraction over the product of the squares."
        },
        {
          "stepNumber": 10,
          "description": "Split the denominator into factors.",
          "workingLatex": "= \\frac{1}{\\cos^2\\theta}\\cdot\\frac{1}{\\sin^2\\theta}",
          "explanation": "Because the denominator factorises as \\(\\cos^2\\theta\\cdot\\sin^2\\theta\\), the single fraction equals a product of two reciprocals."
        },
        {
          "stepNumber": 11,
          "description": "Rewrite the reciprocals as \\(\\sec^2\\) and \\(\\csc^2\\).",
          "workingLatex": "= \\sec^2\\theta\\csc^2\\theta",
          "explanation": "Apply \\(\\sec^2\\theta = \\displaystyle\\frac{1}{\\cos^2\\theta}\\) and \\(\\csc^2\\theta = \\displaystyle\\frac{1}{\\sin^2\\theta}\\) in reverse to recover the reciprocal functions."
        },
        {
          "stepNumber": 12,
          "description": "Conclude the proof.",
          "workingLatex": "\\sec^2\\theta\\csc^2\\theta = \\text{LHS}",
          "explanation": "The right-hand side has been transformed into the left-hand side, so the identity is established for all valid \\(\\theta\\)."
        }
      ],
      "finalAnswer": "\\(= \\sec^2\\csc^2\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-068",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 11",
    "difficulty": "Foundation",
    "questionText": "Evaluate \\(\\sec^2 15° - \\tan^2 15°\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "1 + \\tan^2\\theta = \\sec^2\\theta",
          "explanation": "This identity comes from dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\cos^2\\theta\\), and it holds for every angle \\(\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to isolate the difference.",
          "workingLatex": "\\sec^2\\theta - \\tan^2\\theta = 1",
          "explanation": "Subtract \\(\\tan^2\\theta\\) from both sides so the left-hand side matches the form of the expression we must evaluate."
        },
        {
          "stepNumber": 3,
          "description": "Substitute \\(\\theta = 15°\\).",
          "workingLatex": "\\sec^2 15° - \\tan^2 15° = 1",
          "explanation": "The value of the angle does not matter — the difference is always \\(1\\). A common slip is to reach for a calculator instead of using the identity."
        }
      ],
      "finalAnswer": "1.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-069",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 12",
    "difficulty": "Foundation",
    "questionText": "Evaluate \\(\\csc^2 40° - \\cot^2 40°\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "identity"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the Pythagorean identity.",
          "workingLatex": "1 + \\cot^2\\theta = \\csc^2\\theta",
          "explanation": "This identity comes from dividing \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by \\(\\sin^2\\theta\\), and it holds for every angle \\(\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to isolate the difference.",
          "workingLatex": "\\csc^2\\theta - \\cot^2\\theta = 1",
          "explanation": "Subtract \\(\\cot^2\\theta\\) from both sides so the left-hand side matches the expression we are asked to evaluate."
        },
        {
          "stepNumber": 3,
          "description": "Substitute \\(\\theta = 40°\\).",
          "workingLatex": "\\csc^2 40° - \\cot^2 40° = 1",
          "explanation": "The value of the angle does not matter — the difference is always \\(1\\). A common slip is to confuse this with the \\(\\sec/\\tan\\) version of the identity."
        }
      ],
      "finalAnswer": "1.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-070",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 13",
    "difficulty": "Foundation",
    "questionText": "Use a right triangle with hypotenuse 1 and acute angle \\(\\theta\\) to show \\(\\sin^2\\theta + \\cos^2\\theta = 1\\).",
    "marks": 3,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of \\(\\sin\\theta\\).",
          "workingLatex": "\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}",
          "explanation": "In a right-angled triangle, \\(\\sin\\theta\\) is the ratio of the side opposite \\(\\theta\\) to the hypotenuse. We will use this to find the opposite side."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the hypotenuse of \\(1\\).",
          "workingLatex": "\\sin\\theta = \\frac{\\text{opp}}{1} \\;\\Rightarrow\\; \\text{opp} = \\sin\\theta",
          "explanation": "Because the hypotenuse is \\(1\\), the denominator disappears, so the opposite side has length exactly \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Recall the definition of \\(\\cos\\theta\\).",
          "workingLatex": "\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}",
          "explanation": "Here \\(\\cos\\theta\\) is the ratio of the side adjacent to \\(\\theta\\) to the hypotenuse. This gives the length of the adjacent side."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the hypotenuse of \\(1\\).",
          "workingLatex": "\\cos\\theta = \\frac{\\text{adj}}{1} \\;\\Rightarrow\\; \\text{adj} = \\cos\\theta",
          "explanation": "With hypotenuse \\(1\\), the adjacent side has length exactly \\(\\cos\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "State Pythagoras' theorem.",
          "workingLatex": "\\text{opp}^2 + \\text{adj}^2 = \\text{hyp}^2",
          "explanation": "In any right-angled triangle the squares of the two legs sum to the square of the hypotenuse. Make sure the hypotenuse stays on the right."
        },
        {
          "stepNumber": 6,
          "description": "Substitute the side lengths.",
          "workingLatex": "(\\sin\\theta)^2 + (\\cos\\theta)^2 = 1^2",
          "explanation": "Replace opp with \\(\\sin\\theta\\), adj with \\(\\cos\\theta\\), and hyp with \\(1\\) from the previous steps."
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the right-hand side.",
          "workingLatex": "(\\sin\\theta)^2 + (\\cos\\theta)^2 = 1",
          "explanation": "Since \\(1^2 = 1\\), the right-hand side simplifies to \\(1\\)."
        },
        {
          "stepNumber": 8,
          "description": "Write the squares in standard notation.",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "Writing \\((\\sin\\theta)^2\\) as \\(\\sin^2\\theta\\) and \\((\\cos\\theta)^2\\) as \\(\\cos^2\\theta\\) gives exactly the Pythagorean identity, completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf5-071",
    "topicRef": "y2tf5",
    "topicTitle": "Trigonometric Identities 40",
    "difficulty": "Standard",
    "questionText": "Solve \\(5\\sin^2\\theta + 3\\cos^2\\theta = 4\\) on \\([0, 2\\pi]\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the equation to solve",
          "workingLatex": "5\\sin^2\\theta + 3\\cos^2\\theta = 4",
          "explanation": "We must solve this on \\([0, 2\\pi]\\). The left side mixes two different functions, \\(\\sin^2\\theta\\) and \\(\\cos^2\\theta\\), which we cannot solve directly."
        },
        {
          "stepNumber": 2,
          "description": "State the strategy",
          "workingLatex": "5\\sin^2\\theta + 3\\cos^2\\theta = 4 \\;\\Rightarrow\\; \\text{reduce to one function}",
          "explanation": "The standard plan is to eliminate one of the squared functions using a Pythagorean identity, leaving a single function we can solve. Here we choose to keep \\(\\sin\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Recall the Pythagorean identity",
          "workingLatex": "\\sin^2\\theta + \\cos^2\\theta = 1",
          "explanation": "This is the fundamental Pythagorean identity, true for every angle \\(\\theta\\). It links the two squared functions so we can swap one for the other."
        },
        {
          "stepNumber": 4,
          "description": "Rearrange the identity for cosine squared",
          "workingLatex": "\\cos^2\\theta = 1 - \\sin^2\\theta",
          "explanation": "Subtracting \\(\\sin^2\\theta\\) from both sides isolates \\(\\cos^2\\theta\\). A common slip is to write \\(\\cos\\theta = 1-\\sin\\theta\\); the squares must stay attached because the identity is about the squared functions."
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the equation",
          "workingLatex": "5\\sin^2\\theta + 3\\left(1 - \\sin^2\\theta\\right) = 4",
          "explanation": "Replacing \\(\\cos^2\\theta\\) with \\(1-\\sin^2\\theta\\) leaves a single variable. Keep the bracket so the factor of \\(3\\) multiplies both terms inside it."
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket",
          "workingLatex": "5\\sin^2\\theta + 3 - 3\\sin^2\\theta = 4",
          "explanation": "Multiply the \\(3\\) through: \\(3\\times 1 = 3\\) and \\(3\\times(-\\sin^2\\theta) = -3\\sin^2\\theta\\). Watch the sign on the second term."
        },
        {
          "stepNumber": 7,
          "description": "Group the squared terms",
          "workingLatex": "\\left(5 - 3\\right)\\sin^2\\theta + 3 = 4",
          "explanation": "The two terms in \\(\\sin^2\\theta\\) are like terms, so we collect their coefficients before adding. This makes the next combine explicit."
        },
        {
          "stepNumber": 8,
          "description": "Simplify the coefficient",
          "workingLatex": "2\\sin^2\\theta + 3 = 4",
          "explanation": "Since \\(5 - 3 = 2\\), the squared terms combine to \\(2\\sin^2\\theta\\). The constant \\(3\\) stays on the left for now."
        },
        {
          "stepNumber": 9,
          "description": "Subtract the constant from both sides",
          "workingLatex": "2\\sin^2\\theta = 4 - 3",
          "explanation": "Taking \\(3\\) from both sides moves the constant to the right, isolating the term containing \\(\\sin^2\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Simplify the right-hand side",
          "workingLatex": "2\\sin^2\\theta = 1",
          "explanation": "Computing \\(4 - 3 = 1\\) leaves a clean equation in \\(\\sin^2\\theta\\) only."
        },
        {
          "stepNumber": 11,
          "description": "Divide to isolate sine squared",
          "workingLatex": "\\sin^2\\theta = \\frac{1}{2}",
          "explanation": "Divide both sides by \\(2\\). Now we are ready to take the square root, remembering both signs."
        },
        {
          "stepNumber": 12,
          "description": "Take the square root, both signs",
          "workingLatex": "\\sin\\theta = \\pm\\sqrt{\\frac{1}{2}}",
          "explanation": "Square-rooting a squared quantity introduces a plus and a minus value. Forgetting the negative root would lose half the solutions in the interval."
        },
        {
          "stepNumber": 13,
          "description": "Rationalise the surd",
          "workingLatex": "\\sin\\theta = \\pm\\frac{1}{\\sqrt{2}} = \\pm\\frac{\\sqrt{2}}{2}",
          "explanation": "Writing \\(\\displaystyle\\frac{1}{\\sqrt{2}}\\) as \\(\\displaystyle\\frac{\\sqrt{2}}{2}\\) rationalises the denominator. Both forms denote the same exact value."
        },
        {
          "stepNumber": 14,
          "description": "Find the base (acute) angle",
          "workingLatex": "\\alpha = \\sin^{-1}\\!\\left(\\frac{1}{\\sqrt{2}}\\right) = \\frac{\\pi}{4}",
          "explanation": "The acute angle whose sine is \\(\\displaystyle\\frac{1}{\\sqrt{2}}\\) is \\(\\displaystyle\\frac{\\pi}{4}\\). This base angle generates all four solutions by quadrant symmetry."
        },
        {
          "stepNumber": 15,
          "description": "Positive root: first-quadrant solution",
          "workingLatex": "\\sin\\theta = +\\frac{1}{\\sqrt{2}} \\;\\Rightarrow\\; \\theta = \\frac{\\pi}{4}",
          "explanation": "Sine is positive in quadrant 1, so the base angle itself is a solution. This is the principal value from the inverse sine."
        },
        {
          "stepNumber": 16,
          "description": "Positive root: second-quadrant solution",
          "workingLatex": "\\theta = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}",
          "explanation": "Sine is also positive in quadrant 2, where the solution is \\(\\pi - \\alpha\\). This gives the second value for the positive root."
        },
        {
          "stepNumber": 17,
          "description": "Negative root: third-quadrant solution",
          "workingLatex": "\\sin\\theta = -\\frac{1}{\\sqrt{2}} \\;\\Rightarrow\\; \\theta = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}",
          "explanation": "Sine is negative in quadrant 3, where the solution is \\(\\pi + \\alpha\\). This handles the first half of the negative root."
        },
        {
          "stepNumber": 18,
          "description": "Negative root: fourth-quadrant solution",
          "workingLatex": "\\theta = 2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}",
          "explanation": "Sine is also negative in quadrant 4, where the solution is \\(2\\pi - \\alpha\\). This completes the negative root."
        },
        {
          "stepNumber": 19,
          "description": "List all solutions in the interval",
          "workingLatex": "\\theta = \\frac{\\pi}{4},\\ \\frac{3\\pi}{4},\\ \\frac{5\\pi}{4},\\ \\frac{7\\pi}{4}",
          "explanation": "All four values lie within \\([0, 2\\pi]\\), so none are rejected. Each comes from one quadrant, confirming no solution was dropped by the square root."
        },
        {
          "stepNumber": 20,
          "description": "Verify by substitution",
          "workingLatex": "\\sin^2\\theta = \\frac{1}{2},\\ \\cos^2\\theta = \\frac{1}{2}: \\quad 5\\cdot\\frac{1}{2} + 3\\cdot\\frac{1}{2} = \\frac{8}{2} = 4",
          "explanation": "At each solution \\(\\sin^2\\theta = \\cos^2\\theta = \\displaystyle\\frac{1}{2}\\), so the left side equals \\(4\\), matching the right side and confirming the answers.",
          "diagram": {
            "dropLinesForPoints": true,
            "xMin": 0,
            "xMax": 6.283,
            "yMin": -1.3,
            "yMax": 1.3,
            "xTicks": [
              0,
              1.571,
              3.142,
              4.712,
              6.283
            ],
            "xTickLabels": [
              "0",
              "\\tfrac{\\pi}{2}",
              "\\pi",
              "\\tfrac{3\\pi}{2}",
              "2\\pi"
            ],
            "yTicks": [
              -1,
              0,
              1
            ],
            "xLabel": "\\theta",
            "yLabel": "y",
            "curves": [
              {
                "points": [
                  [
                    0,
                    0
                  ],
                  [
                    0.106,
                    0.106
                  ],
                  [
                    0.213,
                    0.211
                  ],
                  [
                    0.319,
                    0.314
                  ],
                  [
                    0.426,
                    0.413
                  ],
                  [
                    0.532,
                    0.508
                  ],
                  [
                    0.639,
                    0.596
                  ],
                  [
                    0.745,
                    0.678
                  ],
                  [
                    0.852,
                    0.753
                  ],
                  [
                    0.958,
                    0.818
                  ],
                  [
                    1.065,
                    0.875
                  ],
                  [
                    1.171,
                    0.921
                  ],
                  [
                    1.278,
                    0.957
                  ],
                  [
                    1.384,
                    0.983
                  ],
                  [
                    1.491,
                    0.997
                  ],
                  [
                    1.597,
                    1
                  ],
                  [
                    1.704,
                    0.991
                  ],
                  [
                    1.81,
                    0.971
                  ],
                  [
                    1.917,
                    0.941
                  ],
                  [
                    2.023,
                    0.899
                  ],
                  [
                    2.13,
                    0.848
                  ],
                  [
                    2.236,
                    0.787
                  ],
                  [
                    2.343,
                    0.716
                  ],
                  [
                    2.449,
                    0.638
                  ],
                  [
                    2.556,
                    0.553
                  ],
                  [
                    2.662,
                    0.461
                  ],
                  [
                    2.769,
                    0.364
                  ],
                  [
                    2.875,
                    0.263
                  ],
                  [
                    2.982,
                    0.159
                  ],
                  [
                    3.088,
                    0.053
                  ],
                  [
                    3.195,
                    -0.053
                  ],
                  [
                    3.301,
                    -0.159
                  ],
                  [
                    3.408,
                    -0.263
                  ],
                  [
                    3.514,
                    -0.364
                  ],
                  [
                    3.621,
                    -0.461
                  ],
                  [
                    3.727,
                    -0.553
                  ],
                  [
                    3.834,
                    -0.638
                  ],
                  [
                    3.94,
                    -0.716
                  ],
                  [
                    4.047,
                    -0.787
                  ],
                  [
                    4.153,
                    -0.848
                  ],
                  [
                    4.26,
                    -0.899
                  ],
                  [
                    4.366,
                    -0.941
                  ],
                  [
                    4.473,
                    -0.971
                  ],
                  [
                    4.579,
                    -0.991
                  ],
                  [
                    4.686,
                    -1
                  ],
                  [
                    4.792,
                    -0.997
                  ],
                  [
                    4.899,
                    -0.983
                  ],
                  [
                    5.005,
                    -0.957
                  ],
                  [
                    5.112,
                    -0.921
                  ],
                  [
                    5.218,
                    -0.875
                  ],
                  [
                    5.325,
                    -0.818
                  ],
                  [
                    5.431,
                    -0.753
                  ],
                  [
                    5.538,
                    -0.678
                  ],
                  [
                    5.644,
                    -0.596
                  ],
                  [
                    5.751,
                    -0.508
                  ],
                  [
                    5.857,
                    -0.413
                  ],
                  [
                    5.964,
                    -0.314
                  ],
                  [
                    6.07,
                    -0.211
                  ],
                  [
                    6.177,
                    -0.106
                  ],
                  [
                    6.283,
                    0
                  ]
                ],
                "color": "#1d4ed8",
                "label": "y = \\sin\\theta",
                "labelAt": [
                  0.785,
                  1.18
                ],
                "width": 2
              }
            ],
            "lines": [
              {
                "from": [
                  0,
                  0.707
                ],
                "to": [
                  6.283,
                  0.707
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=\\tfrac{\\sqrt2}{2}",
                "labelAt": [
                  5.383,
                  0.9269999999999999
                ]
              },
              {
                "from": [
                  0,
                  -0.707
                ],
                "to": [
                  6.283,
                  -0.707
                ],
                "color": "#dc2626",
                "dashed": true,
                "label": "y=-\\tfrac{\\sqrt2}{2}",
                "labelAt": [
                  5.383,
                  -0.9269999999999999
                ]
              }
            ],
            "points": [
              {
                "at": [
                  0.785,
                  0.707
                ],
                "label": "\\tfrac{\\pi}{4}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  2.356,
                  0.707
                ],
                "label": "\\tfrac{3\\pi}{4}",
                "labelAnchor": "n",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  3.927,
                  -0.707
                ],
                "label": "\\tfrac{5\\pi}{4}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              },
              {
                "at": [
                  5.498,
                  -0.707
                ],
                "label": "\\tfrac{7\\pi}{4}",
                "labelAnchor": "s",
                "color": "#dc2626",
                "r": 4
              }
            ]
          }
        }
      ],
      "finalAnswer": "\\(\\theta = \\displaystyle\\frac{\\pi}{4}, \\displaystyle\\frac{3\\pi}{4}, \\displaystyle\\frac{5\\pi}{4}, \\displaystyle\\frac{7\\pi}{4}\\).",
      "commonMistakes": []
    }
  }
];
