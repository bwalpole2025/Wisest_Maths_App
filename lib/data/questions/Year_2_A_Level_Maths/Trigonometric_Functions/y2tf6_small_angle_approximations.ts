import { Question } from "@/lib/types";

/**
 * Year 2 — Trigonometry (Y2) § 6.6 Small Angle Approximations
 * Ref: y2tf6
 * 71 questions: \\(\\sin\\theta \\approx \\theta\\), \\(\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}\\),
 * \\(\\tan\\theta \\approx \\theta\\) for small \\(\\theta\\) (rad); simplification,
 * limit-style evaluations, percentage error, and applied problems.
 */
export const questions: Question[] = [
  {
    "id": "y2tf6-001",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 01",
    "difficulty": "Challenge",
    "questionText": "In this question \\(\\theta\\) is a small angle measured in radians. Use the small-angle approximations \\(\\sin\\theta\\approx\\theta\\), \\(\\tan\\theta\\approx\\theta\\) and \\(\\cos\\theta\\approx 1-\\displaystyle\\frac{\\theta^2}{2}\\) throughout.\n(a) Show that for small \\(\\theta\\), \\(\\cos\\theta-\\cos 3\\theta\\approx a\\theta^{n}\\), stating the values of the constants \\(a\\) and \\(n\\).\n(b) Hence find the value of \\(\\displaystyle\\lim_{\\theta\\to 0}\\displaystyle\\frac{\\cos\\theta-\\cos 3\\theta}{\\theta\\,\\sin 2\\theta}\\).\n(c) Use the result of part (a) to estimate \\(\\cos 0.1-\\cos 0.3\\). Given that the true value is \\(0.039668\\) (to \\(6\\) decimal places), find the percentage error in your estimate and comment briefly on whether this is consistent with the use of small-angle approximations.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "small-angle-approximations",
      "compound-expression",
      "limits",
      "estimation",
      "error",
      "radians"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the cosine approximation rule",
          "workingLatex": "\\cos x \\approx 1-\\frac{x^2}{2}",
          "explanation": "The quadratic small-angle approximation for cosine keeps the constant term \\(1\\) and the \\(\\theta^2\\) term, and drops all higher powers \\(\\theta^4,\\theta^6,\\dots\\). We will apply it separately to each cosine with the appropriate angle in place of \\(x\\)."
        },
        {
          "stepNumber": 2,
          "description": "Approximate the first cosine",
          "workingLatex": "\\cos\\theta \\approx 1-\\frac{\\theta^2}{2}",
          "explanation": "Apply the rule with \\(x=\\theta\\). The next neglected term is \\(+\\displaystyle\\frac{\\theta^4}{24}\\), which is tiny for small \\(\\theta\\), so discarding it is justified."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the angle into the second cosine",
          "workingLatex": "\\cos 3\\theta \\approx 1-\\frac{(3\\theta)^2}{2}",
          "explanation": "Use the same rule with \\(x=3\\theta\\), keeping the whole angle inside the square. A common slip is squaring only \\(\\theta\\) and writing \\(\\displaystyle\\frac{3\\theta^2}{2}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Expand the squared bracket",
          "workingLatex": "(3\\theta)^2 = 3^2\\,\\theta^2 = 9\\theta^2",
          "explanation": "Squaring a product squares each factor, so both the \\(3\\) and the \\(\\theta\\) are squared. This is exactly where the multiplier must be raised to the power \\(2\\)."
        },
        {
          "stepNumber": 5,
          "description": "Write the second cosine with coefficient 9",
          "workingLatex": "\\cos 3\\theta \\approx 1-\\frac{9\\theta^2}{2}",
          "explanation": "Substituting \\((3\\theta)^2=9\\theta^2\\) gives the coefficient \\(9\\), not \\(3\\). Forgetting to square the multiplier is the single most frequent error here."
        },
        {
          "stepNumber": 6,
          "description": "Write the difference with brackets",
          "workingLatex": "\\cos\\theta-\\cos 3\\theta \\approx \\left(1-\\frac{\\theta^2}{2}\\right)-\\left(1-\\frac{9\\theta^2}{2}\\right)",
          "explanation": "Bracket the second expression so that both of its terms change sign on subtraction. Dropping the bracket is a frequent sign error."
        },
        {
          "stepNumber": 7,
          "description": "Distribute the minus sign",
          "workingLatex": "= 1-\\frac{\\theta^2}{2}-1+\\frac{9\\theta^2}{2}",
          "explanation": "Each term inside the second bracket has its sign flipped: \\(-1\\) becomes \\(-1\\), and \\(-\\displaystyle\\frac{9\\theta^2}{2}\\) becomes \\(+\\displaystyle\\frac{9\\theta^2}{2}\\). Carrying out this step explicitly avoids losing a sign."
        },
        {
          "stepNumber": 8,
          "description": "Cancel the constant terms",
          "workingLatex": "= -\\frac{\\theta^2}{2}+\\frac{9\\theta^2}{2}",
          "explanation": "The two \\(1\\)s cancel since \\(1-1=0\\), leaving only \\(\\theta^2\\) terms. Note the second cosine now contributes \\(+\\displaystyle\\frac{9\\theta^2}{2}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Combine over a common denominator",
          "workingLatex": "= \\frac{-\\theta^2+9\\theta^2}{2}",
          "explanation": "Both fractions already share the denominator \\(2\\), so add the numerators directly. Both terms are \\(\\theta^2\\), so they combine like terms."
        },
        {
          "stepNumber": 10,
          "description": "Add the numerator coefficients",
          "workingLatex": "= \\frac{8\\theta^2}{2}",
          "explanation": "Adding the coefficients gives \\(-1+9=8\\), so the numerator is \\(8\\theta^2\\). Keep the power of \\(\\theta\\) the same throughout."
        },
        {
          "stepNumber": 11,
          "description": "Simplify to the required form",
          "workingLatex": "\\cos\\theta-\\cos 3\\theta \\approx 4\\theta^2",
          "explanation": "Dividing \\(8\\) by \\(2\\) gives \\(4\\). This is now exactly in the form \\(a\\theta^n\\)."
        },
        {
          "stepNumber": 12,
          "description": "Read off the constants",
          "workingLatex": "a=4, \\qquad n=2",
          "explanation": "Comparing \\(4\\theta^2\\) with \\(a\\theta^n\\) gives \\(a=4\\) and \\(n=2\\). This completes part (a)."
        },
        {
          "stepNumber": 13,
          "description": "State the sine approximation rule",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "For the denominator we need \\(\\sin 2\\theta\\). The linear approximation \\(\\sin x\\approx x\\) drops the \\(-\\displaystyle\\frac{x^3}{6}\\) term and higher, which is valid since \\(2\\theta\\) is also small."
        },
        {
          "stepNumber": 14,
          "description": "Approximate sin of the double angle",
          "workingLatex": "\\sin 2\\theta \\approx 2\\theta",
          "explanation": "Apply \\(\\sin x\\approx x\\) with \\(x=2\\theta\\). A slip is writing \\(\\sin 2\\theta\\approx\\theta\\), forgetting the factor of \\(2\\) inside the angle."
        },
        {
          "stepNumber": 15,
          "description": "Build the denominator",
          "workingLatex": "\\theta\\,\\sin 2\\theta \\approx \\theta\\cdot 2\\theta",
          "explanation": "Multiply the leading factor \\(\\theta\\) by the approximation \\(2\\theta\\). We keep the product unsimplified for one line so the multiplication is explicit."
        },
        {
          "stepNumber": 16,
          "description": "Simplify the denominator",
          "workingLatex": "\\theta\\,\\sin 2\\theta \\approx 2\\theta^2",
          "explanation": "Multiplying gives \\(2\\theta^2\\), the same order \\(\\theta^2\\) as the numerator. This matching of orders is what makes the limit finite and non-zero."
        },
        {
          "stepNumber": 17,
          "description": "Form the ratio for the limit",
          "workingLatex": "\\frac{\\cos\\theta-\\cos 3\\theta}{\\theta\\,\\sin 2\\theta} \\approx \\frac{4\\theta^2}{2\\theta^2}",
          "explanation": "Substitute the part (a) numerator and the step 16 denominator. Both are multiples of \\(\\theta^2\\), so the quotient is well defined as \\(\\theta\\to 0\\)."
        },
        {
          "stepNumber": 18,
          "description": "Cancel the common theta-squared factor",
          "workingLatex": "\\frac{4\\theta^2}{2\\theta^2} = \\frac{4}{2}",
          "explanation": "The \\(\\theta^2\\) factors cancel since \\(\\theta\\neq 0\\) on the approach to the limit. Do not conclude the value is \\(0\\) just because each part vanishes."
        },
        {
          "stepNumber": 19,
          "description": "Evaluate the numerical fraction",
          "workingLatex": "\\frac{4}{2} = 2",
          "explanation": "The constant fraction reduces to \\(2\\). Because the approximations become exact as \\(\\theta\\to 0\\), this constant is the exact limit."
        },
        {
          "stepNumber": 20,
          "description": "State the limit",
          "workingLatex": "\\lim_{\\theta\\to 0}\\frac{\\cos\\theta-\\cos 3\\theta}{\\theta\\,\\sin 2\\theta}=2",
          "explanation": "The ratio simplifies to the constant \\(2\\), so the limit is exactly \\(2\\). This completes part (b)."
        },
        {
          "stepNumber": 21,
          "description": "Match theta to the given angles",
          "workingLatex": "\\theta=0.1 \\;\\Rightarrow\\; 3\\theta=3(0.1)=0.3",
          "explanation": "Choosing \\(\\theta=0.1\\) reproduces both angles \\(0.1\\) and \\(0.3\\) simultaneously. Any other value of \\(\\theta\\) would not match both terms."
        },
        {
          "stepNumber": 22,
          "description": "Substitute into the part (a) result",
          "workingLatex": "\\cos 0.1-\\cos 0.3 \\approx 4(0.1)^2",
          "explanation": "Insert \\(\\theta=0.1\\) into \\(4\\theta^2\\). We evaluate the square before multiplying by \\(4\\)."
        },
        {
          "stepNumber": 23,
          "description": "Square the value",
          "workingLatex": "(0.1)^2 = 0.01",
          "explanation": "Squaring \\(0.1\\) gives \\(0.01\\). Watch the decimal placement: one zero before the \\(1\\)."
        },
        {
          "stepNumber": 24,
          "description": "Complete the estimate",
          "workingLatex": "\\cos 0.1-\\cos 0.3 \\approx 4\\times 0.01 = 0.04",
          "explanation": "Multiplying by \\(4\\) gives the estimate \\(0.04\\). This is the small-angle estimate for the difference."
        },
        {
          "stepNumber": 25,
          "description": "Compute the absolute error",
          "workingLatex": "\\left|0.04-0.039668\\right| = 0.000332",
          "explanation": "Take the size of the difference between estimate and true value. Keep enough decimal places so this tiny difference is not lost to rounding."
        },
        {
          "stepNumber": 26,
          "description": "Set up the relative error fraction",
          "workingLatex": "\\text{relative error} = \\frac{0.000332}{0.039668}",
          "explanation": "Percentage error uses the true value as the denominator, not the estimate. Dividing by the estimate gives a slightly different figure and loses marks."
        },
        {
          "stepNumber": 27,
          "description": "Evaluate the relative error",
          "workingLatex": "\\frac{0.000332}{0.039668} = 0.008369\\ldots",
          "explanation": "Carrying out the division gives approximately \\(0.008369\\). This is the error expressed as a decimal fraction of the true value."
        },
        {
          "stepNumber": 28,
          "description": "Convert to a percentage",
          "workingLatex": "0.008369\\ldots\\times 100\\% \\approx 0.84\\%",
          "explanation": "Multiply by \\(100\\) to express the relative error as a percentage. Rounding to two significant figures gives about \\(0.84\\%\\)."
        },
        {
          "stepNumber": 29,
          "description": "Comment on the accuracy",
          "workingLatex": "0.84\\% \\text{ error} \\;\\Rightarrow\\; \\text{consistent with small } \\theta",
          "explanation": "Since \\(\\theta=0.1\\) is genuinely small, the neglected higher-order \\(\\theta^4\\) terms are tiny, so a sub-\\(1\\%\\) error is exactly what the approximation should produce."
        }
      ],
      "finalAnswer": "(a) \\(\\cos\\theta-\\cos 3\\theta\\approx 4\\theta^2\\), so \\(a=4,\\ n=2\\). (b) \\(\\displaystyle\\lim_{\\theta\\to 0}\\displaystyle\\frac{\\cos\\theta-\\cos 3\\theta}{\\theta\\,\\sin 2\\theta}=2\\). (c) Estimate \\(=0.04\\); percentage error \\(\\approx 0.84\\%\\), which is small and consistent with \\(\\theta\\) being small.",
      "commonMistakes": [
        "Forgetting to square the multiplier: using \\(1-\\displaystyle\\frac{3\\theta^2}{2}\\) for \\(\\cos 3\\theta\\) instead of \\(1-\\displaystyle\\frac{9\\theta^2}{2}\\).",
        "Claiming the limit is \\(0\\) because numerator and denominator both vanish, instead of cancelling the common \\(\\theta^2\\).",
        "Computing percentage error relative to the estimate rather than the true value."
      ]
    }
  },
  {
    "id": "y2tf6-002",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 02",
    "difficulty": "Foundation",
    "questionText": "Why must \\(\\theta\\) be measured in radians for these approximations?",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "concept"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the source of the approximations",
          "workingLatex": "\\sin\\theta\\approx\\theta,\\quad \\tan\\theta\\approx\\theta,\\quad \\cos\\theta\\approx 1-\\frac{\\theta^2}{2}",
          "explanation": "These come from the Taylor (Maclaurin) series of the trigonometric functions expanded about \\(\\theta=0\\). Those series are derived using radian measure."
        },
        {
          "stepNumber": 2,
          "description": "Note the derivative used in the series",
          "workingLatex": "\\frac{d}{d\\theta}\\sin\\theta = \\cos\\theta \\quad (\\theta \\text{ in radians})",
          "explanation": "The clean derivative \\(\\displaystyle\\frac{d}{d\\theta}\\sin\\theta=\\cos\\theta\\) holds only when \\(\\theta\\) is in radians. This derivative is exactly what generates the leading term of each series."
        },
        {
          "stepNumber": 3,
          "description": "State the key geometric fact",
          "workingLatex": "\\text{arc length} = r\\theta \\quad (\\theta \\text{ in radians})",
          "explanation": "On a unit circle the arc equals the angle only in radians, which is why \\(\\sin\\theta\\approx\\theta\\) holds geometrically. In degrees this identity fails."
        },
        {
          "stepNumber": 4,
          "description": "Write the degree-to-radian conversion",
          "workingLatex": "\\theta_{\\text{deg}}=\\frac{180}{\\pi}\\,\\theta_{\\text{rad}}",
          "explanation": "Degrees and radians differ by the constant factor \\(\\displaystyle\\frac{180}{\\pi}\\). Any formula stated in radians picks up this factor if the angle is instead measured in degrees."
        },
        {
          "stepNumber": 5,
          "description": "Show degrees break the clean result",
          "workingLatex": "\\sin\\theta \\approx \\frac{\\pi}{180}\\,\\theta \\quad (\\theta \\text{ in degrees}) \\;\\neq\\; \\theta",
          "explanation": "If \\(\\theta\\) were in degrees, the linear approximation gains the factor \\(\\displaystyle\\frac{\\pi}{180}\\), so the simple result \\(\\sin\\theta\\approx\\theta\\) only works in radians."
        }
      ],
      "finalAnswer": "The series expansions and arc-length identity are only valid when \\(\\theta\\) is in radians.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-003",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 03",
    "difficulty": "Foundation",
    "questionText": "Estimate \\(\\sin 0.01\\) using the small-angle approximation.",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the angle is small and in radians",
          "workingLatex": "\\theta = 0.01 \\text{ rad}, \\quad 0.01 \\ll 1",
          "explanation": "The approximation requires a small angle measured in radians. Here \\(0.01\\) is already in radians and is much less than \\(1\\), so the rule applies without conversion."
        },
        {
          "stepNumber": 2,
          "description": "State the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle \\(\\theta\\) in radians, \\(\\sin\\theta\\approx\\theta\\). This drops the \\(-\\displaystyle\\frac{\\theta^3}{6}\\) term, which is negligible here."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the value",
          "workingLatex": "\\sin 0.01 \\approx 0.01",
          "explanation": "Replacing \\(\\theta\\) with \\(0.01\\) gives the estimate directly. A common slip is treating \\(0.01\\) as degrees."
        }
      ],
      "finalAnswer": "\\(\\approx 0.01\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-004",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 04",
    "difficulty": "Foundation",
    "questionText": "Estimate \\(\\sin 0.05\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the angle is small and in radians",
          "workingLatex": "\\theta = 0.05 \\text{ rad}, \\quad 0.05 \\ll 1",
          "explanation": "The approximation needs a small angle in radians. The value \\(0.05\\) is in radians and much smaller than \\(1\\), so the rule is valid here."
        },
        {
          "stepNumber": 2,
          "description": "State the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For a small angle \\(\\theta\\) in radians, \\(\\sin\\theta\\approx\\theta\\). The neglected term is \\(-\\displaystyle\\frac{\\theta^3}{6}\\), which is tiny for this \\(\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the value",
          "workingLatex": "\\sin 0.05 \\approx 0.05",
          "explanation": "Replacing \\(\\theta\\) with \\(0.05\\) gives the estimate directly. Remember the angle must be in radians, not degrees."
        }
      ],
      "finalAnswer": "\\(\\approx 0.05\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-005",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 05",
    "difficulty": "Foundation",
    "questionText": "Estimate \\(\\cos 0.02\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the angle is small and in radians",
          "workingLatex": "\\theta = 0.02 \\text{ rad}, \\quad 0.02 \\ll 1",
          "explanation": "The cosine approximation requires a small angle in radians. Here \\(0.02\\) is in radians and much less than \\(1\\), so the rule applies directly."
        },
        {
          "stepNumber": 2,
          "description": "State the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1-\\frac{\\theta^2}{2}",
          "explanation": "For a small angle \\(\\theta\\) in radians, use the quadratic approximation \\(\\cos\\theta\\approx 1-\\displaystyle\\frac{\\theta^2}{2}\\). Unlike sine, cosine needs the \\(\\theta^2\\) term; the dropped term is \\(+\\displaystyle\\frac{\\theta^4}{24}\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the angle",
          "workingLatex": "\\cos 0.02 \\approx 1-\\frac{(0.02)^2}{2}",
          "explanation": "Replace \\(\\theta\\) with \\(0.02\\), keeping the angle inside the square. We will evaluate the squared term before halving."
        },
        {
          "stepNumber": 4,
          "description": "Square the angle",
          "workingLatex": "(0.02)^2 = 0.0004",
          "explanation": "Compute \\(\\theta^2\\) first. A common slip is misplacing the decimal point: \\(0.02^2\\) is \\(0.0004\\), not \\(0.004\\)."
        },
        {
          "stepNumber": 5,
          "description": "Halve the squared term",
          "workingLatex": "\\frac{0.0004}{2} = 0.0002",
          "explanation": "Divide by \\(2\\) as required by the formula. This is the small correction to be subtracted from \\(1\\)."
        },
        {
          "stepNumber": 6,
          "description": "Subtract from one",
          "workingLatex": "\\cos 0.02 \\approx 1-0.0002 = 0.9998",
          "explanation": "Subtracting the correction from \\(1\\) gives the estimate. Cosine of a small angle is just below \\(1\\), which matches the answer."
        }
      ],
      "finalAnswer": "\\(\\approx 0.9998\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-006",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 06",
    "difficulty": "Foundation",
    "questionText": "Approximate \\(\\cos 0.1\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the angle is small and in radians",
          "workingLatex": "\\theta = 0.1 \\text{ radians (small)}",
          "explanation": "The angle \\(0.1\\) is small and given in radians, so the small angle approximations apply. If it were in degrees the result would not hold, so confirm the units before starting."
        },
        {
          "stepNumber": 2,
          "description": "State the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "For a small angle \\(\\theta\\) measured in radians, \\(\\cos\\theta\\) is close to \\(1-\\displaystyle\\frac{\\theta^2}{2}\\). A common slip is to use \\(\\cos\\theta\\approx 1\\), which is too crude here as it throws away the leading correction term."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the angle",
          "workingLatex": "\\cos 0.1 \\approx 1 - \\frac{(0.1)^2}{2}",
          "explanation": "Here \\(\\theta = 0.1\\) radians, so replace \\(\\theta\\) by \\(0.1\\). Keep the angle in radians; do not convert to degrees."
        },
        {
          "stepNumber": 4,
          "description": "Square the angle",
          "workingLatex": "(0.1)^2 = 0.1 \\times 0.1 = 0.01",
          "explanation": "Square first, before halving. A frequent error is writing \\((0.1)^2 = 0.1\\) or \\(0.2\\) instead of \\(0.01\\); multiplying \\(0.1\\times 0.1\\) explicitly avoids this slip."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the squared value",
          "workingLatex": "\\cos 0.1 \\approx 1 - \\frac{0.01}{2}",
          "explanation": "Replace \\((0.1)^2\\) by \\(0.01\\) inside the fraction, leaving the division by \\(2\\) still to be carried out."
        },
        {
          "stepNumber": 6,
          "description": "Halve the squared term",
          "workingLatex": "\\frac{0.01}{2} = 0.005",
          "explanation": "Dividing \\(0.01\\) by \\(2\\) gives \\(0.005\\). Track the leading zeros carefully to avoid a power-of-ten slip."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the correction term",
          "workingLatex": "\\cos 0.1 \\approx 1 - 0.005",
          "explanation": "Now the correction term \\(0.005\\) is the only quantity left to subtract from \\(1\\)."
        },
        {
          "stepNumber": 8,
          "description": "Complete the subtraction",
          "workingLatex": "1 - 0.005 = 0.995",
          "explanation": "Subtracting the correction from \\(1\\) gives \\(0.995\\). This is the small-angle estimate, very close to the true value of \\(\\cos 0.1\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 0.995\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-007",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 07",
    "difficulty": "Foundation",
    "questionText": "Approximate \\(\\tan 0.04\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the angle is small and in radians",
          "workingLatex": "\\theta = 0.04 \\text{ radians (small)}",
          "explanation": "The angle \\(0.04\\) is small and given in radians, so the tangent small angle approximation applies. The result fails for angles given in degrees, so confirm the units first."
        },
        {
          "stepNumber": 2,
          "description": "State the tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle \\(\\theta\\) in radians, \\(\\tan\\theta\\) is approximately equal to \\(\\theta\\) itself. This only holds when the angle is in radians, not degrees."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the angle",
          "workingLatex": "\\tan 0.04 \\approx 0.04",
          "explanation": "With \\(\\theta = 0.04\\) radians, the approximation gives \\(0.04\\) directly. A common slip is to convert to degrees first, which breaks the approximation."
        }
      ],
      "finalAnswer": "\\(\\approx 0.04\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-008",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 08",
    "difficulty": "Challenge",
    "questionText": "The angle \\(\\theta\\) is small and measured in radians, where \\(\\theta = 0.2\\).\nUsing the small angle result \\(\\cos\\theta \\approx 1 - \\displaystyle\\frac{\\theta^2}{2}\\), estimate the value of \\(\\cos 0.2\\), giving your answer exactly as a decimal.\nThe full series for cosine continues \\(\\cos\\theta = 1 - \\displaystyle\\frac{\\theta^2}{2} + \\displaystyle\\frac{\\theta^4}{24} - \\cdots\\), where the omitted terms involve \\(\\theta^6\\) and higher powers. By evaluating the first neglected term, estimate the size of the error in your approximation and state whether the approximation is an overestimate or an underestimate, justifying your answer.\nGiven that \\(\\cos 0.2 = 0.980067\\) to \\(6\\) decimal places, verify that the magnitude of your error estimate is accurate to within \\(1\\times 10^{-6}\\).",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "approximation",
      "small-angle",
      "error-bound",
      "cosine",
      "estimation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the angle is small and in radians",
          "workingLatex": "\\theta = 0.2 \\text{ radians (small)}",
          "explanation": "The angle \\(0.2\\) is small and measured in radians, so the cosine series and its truncation apply. If the angle were in degrees the approximation would not be valid, so the radian condition is essential."
        },
        {
          "stepNumber": 2,
          "description": "State the quadratic approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "This is the standard small angle result for cosine, valid for small \\(\\theta\\) in radians, obtained by truncating the full series after the \\(\\theta^2\\) term. A common slip is to write \\(\\cos\\theta\\approx 1\\), which is too crude to capture the leading correction."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given value",
          "workingLatex": "\\cos 0.2 \\approx 1 - \\frac{(0.2)^2}{2}",
          "explanation": "Replace \\(\\theta\\) with \\(0.2\\), keeping the angle in radians. Do not convert to degrees, as the approximation only holds when \\(\\theta\\) is in radians."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the squared term",
          "workingLatex": "(0.2)^2 = 0.2 \\times 0.2 = 0.04",
          "explanation": "Square the angle first before halving. A frequent error is computing \\((0.2)^2\\) as \\(0.4\\) rather than \\(0.04\\); writing the product \\(0.2\\times 0.2\\) explicitly guards against this."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the squared value",
          "workingLatex": "\\cos 0.2 \\approx 1 - \\frac{0.04}{2}",
          "explanation": "Replace \\((0.2)^2\\) by \\(0.04\\) inside the fraction, leaving the division by \\(2\\) still to be performed."
        },
        {
          "stepNumber": 6,
          "description": "Halve the squared term",
          "workingLatex": "\\frac{0.04}{2} = 0.02",
          "explanation": "Dividing \\(0.04\\) by \\(2\\) gives \\(0.02\\). This is the size of the leading correction subtracted from \\(1\\)."
        },
        {
          "stepNumber": 7,
          "description": "Complete the estimate",
          "workingLatex": "\\cos 0.2 \\approx 1 - 0.02 = 0.98",
          "explanation": "Subtracting gives the estimate \\(0.98\\) exactly. This is the value of the approximation, not the true cosine."
        },
        {
          "stepNumber": 8,
          "description": "Identify the first neglected term",
          "workingLatex": "\\text{first omitted term} = +\\frac{\\theta^4}{24}",
          "explanation": "The approximation drops everything from the \\(\\theta^4\\) term onwards, so the leading source of error is \\(+\\displaystyle\\frac{\\theta^4}{24}\\). Forgetting the factorial \\(4!=24\\) in the denominator is a common mistake."
        },
        {
          "stepNumber": 9,
          "description": "Compute the fourth power",
          "workingLatex": "(0.2)^4 = (0.04)^2 = 0.04 \\times 0.04 = 0.0016",
          "explanation": "Raise the angle to the fourth power by squaring the already-found square: \\((0.2)^4 = (0.04)^2 = 0.0016\\). Track the leading zeros carefully to avoid a power-of-ten slip."
        },
        {
          "stepNumber": 10,
          "description": "Substitute into the error term",
          "workingLatex": "\\frac{(0.2)^4}{24} = \\frac{0.0016}{24}",
          "explanation": "Replace \\((0.2)^4\\) by \\(0.0016\\) over the factorial \\(24\\), setting up the division that gives the predicted error magnitude."
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the error estimate",
          "workingLatex": "\\frac{0.0016}{24} \\approx 6.6667 \\times 10^{-5}",
          "explanation": "Dividing \\(0.0016\\) by \\(24\\) gives approximately \\(6.6667\\times 10^{-5}\\). This is the predicted magnitude of the error from neglecting the higher-order terms."
        },
        {
          "stepNumber": 12,
          "description": "Write the true value as estimate plus tail",
          "workingLatex": "\\cos 0.2 = \\underbrace{1 - \\frac{\\theta^2}{2}}_{\\text{estimate}} + \\underbrace{\\frac{\\theta^4}{24}}_{>0} - \\cdots",
          "explanation": "Writing the exact value as the estimate plus the neglected tail shows the first omitted term is added back on. The sign of that first term controls whether the estimate is too big or too small."
        },
        {
          "stepNumber": 13,
          "description": "Determine over or underestimate",
          "workingLatex": "+\\frac{\\theta^4}{24} > 0 \\;\\Rightarrow\\; \\cos 0.2 > 0.98",
          "explanation": "The first neglected term is positive, so the true value is larger than \\(0.98\\), meaning the approximation is an underestimate. The later \\(\\theta^6\\) term is negative but far smaller, so it does not change this conclusion."
        },
        {
          "stepNumber": 14,
          "description": "Set up the actual error",
          "workingLatex": "\\text{error} = \\cos 0.2 - 0.98 = 0.980067 - 0.98",
          "explanation": "The actual error is the true value minus the estimate. Using the given \\(\\cos 0.2 = 0.980067\\) lets us measure how good the approximation really is."
        },
        {
          "stepNumber": 15,
          "description": "Find the actual error from the true value",
          "workingLatex": "0.980067 - 0.98 = 0.000067 = 6.7 \\times 10^{-5}",
          "explanation": "Subtracting gives \\(0.000067\\). The positive result confirms the approximation undershoots the true cosine, agreeing with the underestimate conclusion above."
        },
        {
          "stepNumber": 16,
          "description": "Compare estimate with actual error",
          "workingLatex": "\\left| 6.7 \\times 10^{-5} - 6.6667 \\times 10^{-5} \\right| \\approx 3.3 \\times 10^{-7}",
          "explanation": "Take the absolute difference between the actual error and the predicted error. The two agree to about \\(3\\times 10^{-7}\\)."
        },
        {
          "stepNumber": 17,
          "description": "Verify the accuracy claim",
          "workingLatex": "3.3 \\times 10^{-7} < 1 \\times 10^{-6}",
          "explanation": "The difference \\(3.3\\times 10^{-7}\\) is comfortably within \\(1\\times 10^{-6}\\), so the \\(\\displaystyle\\frac{\\theta^4}{24}\\) term is an excellent estimate of the error. The tiny remaining discrepancy comes from the neglected \\(\\theta^6\\) term and rounding of the given true value."
        }
      ],
      "finalAnswer": "\\(\\cos 0.2 \\approx 0.98\\); error \\(\\approx \\displaystyle\\frac{(0.2)^4}{24} \\approx 6.67\\times 10^{-5}\\) (an underestimate, since the first neglected term \\(+\\displaystyle\\frac{\\theta^4}{24}>0\\)). The true error \\(6.7\\times 10^{-5}\\) agrees with the estimate to within \\(\\approx 3\\times 10^{-7}<1\\times 10^{-6}\\).",
      "commonMistakes": [
        "Using \\(\\cos\\theta\\approx 1\\), losing the leading correction entirely.",
        "Forgetting the 24 \\((=4!)\\) in the denominator of the \\(\\theta^4\\) error term.",
        "Concluding an overestimate by ignoring that the first neglected term is positive."
      ]
    }
  },
  {
    "id": "y2tf6-009",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 09",
    "difficulty": "Foundation",
    "questionText": "Approximate \\(\\cos 0.2\\) to 4 dp.",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Check the angle is small and in radians",
          "workingLatex": "\\theta = 0.2 \\text{ radians (small)}",
          "explanation": "The angle \\(0.2\\) is small and given in radians, so the cosine small angle approximation applies. Working in degrees would invalidate the result, so confirm the units first."
        },
        {
          "stepNumber": 2,
          "description": "State the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "For a small angle \\(\\theta\\) in radians, \\(\\cos\\theta\\approx 1-\\displaystyle\\frac{\\theta^2}{2}\\). Using \\(\\cos\\theta\\approx 1\\) would be too crude to give 4 decimal places."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the angle",
          "workingLatex": "\\cos 0.2 \\approx 1 - \\frac{(0.2)^2}{2}",
          "explanation": "Here \\(\\theta = 0.2\\) radians, so replace \\(\\theta\\) by \\(0.2\\). Keep the angle in radians throughout."
        },
        {
          "stepNumber": 4,
          "description": "Square the angle",
          "workingLatex": "(0.2)^2 = 0.2 \\times 0.2 = 0.04",
          "explanation": "Square first, before halving. A frequent error is writing \\((0.2)^2 = 0.4\\) instead of \\(0.04\\); writing the product explicitly avoids this slip."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the squared value",
          "workingLatex": "\\cos 0.2 \\approx 1 - \\frac{0.04}{2}",
          "explanation": "Replace \\((0.2)^2\\) by \\(0.04\\) inside the fraction, leaving only the division by \\(2\\) to carry out."
        },
        {
          "stepNumber": 6,
          "description": "Halve the squared term",
          "workingLatex": "\\frac{0.04}{2} = 0.02",
          "explanation": "Dividing \\(0.04\\) by \\(2\\) gives \\(0.02\\), the size of the leading correction."
        },
        {
          "stepNumber": 7,
          "description": "Complete the subtraction",
          "workingLatex": "\\cos 0.2 \\approx 1 - 0.02 = 0.98",
          "explanation": "Subtracting the correction from \\(1\\) gives the estimate \\(0.98\\)."
        },
        {
          "stepNumber": 8,
          "description": "Write the answer to 4 dp",
          "workingLatex": "0.98 = 0.9800",
          "explanation": "Padding with trailing zeros gives \\(0.9800\\) to 4 dp. The true value is \\(0.9801\\), so the approximation is accurate to about 1 in the fourth decimal place."
        }
      ],
      "finalAnswer": "\\(\\approx 0.9800\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-010",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 18",
    "difficulty": "Standard",
    "questionText": "Using a calculator, find \\(\\sin 0.1\\) and compare with the approximation 0.1. Calculate the percentage error.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the calculator to radian mode",
          "workingLatex": "\\text{mode} = \\text{radians}",
          "explanation": "The approximation \\(\\sin\\theta\\approx\\theta\\) is a radian result, so the calculator must be in radian mode. In degree mode \\(\\sin 0.1\\) gives a completely different value."
        },
        {
          "stepNumber": 2,
          "description": "Find the true value on a calculator",
          "workingLatex": "\\sin 0.1 = 0.0998334\\ldots",
          "explanation": "Reading off the calculator in radian mode gives \\(\\sin 0.1 = 0.0998334\\ldots\\). This is the accurate value against which the approximation is judged."
        },
        {
          "stepNumber": 3,
          "description": "State the approximation",
          "workingLatex": "\\sin 0.1 \\approx 0.1",
          "explanation": "The small angle approximation \\(\\sin\\theta\\approx\\theta\\) gives \\(0.1\\) directly. This slightly overshoots the true value, since the next series term \\(-\\displaystyle\\frac{\\theta^3}{6}\\) is negative."
        },
        {
          "stepNumber": 4,
          "description": "Subtract to find the raw error",
          "workingLatex": "0.1 - 0.0998334 = 0.0001666",
          "explanation": "Subtract the true value from the approximation. The positive result confirms the approximation is an overestimate."
        },
        {
          "stepNumber": 5,
          "description": "Take the magnitude of the error",
          "workingLatex": "|\\text{error}| = |0.0001666| = 0.000167",
          "explanation": "Take the absolute value so the percentage error comes out positive, and round to three significant figures as \\(0.000167\\)."
        },
        {
          "stepNumber": 6,
          "description": "Form the percentage error",
          "workingLatex": "\\text{percentage error} = \\frac{0.000167}{0.0998334} \\times 100",
          "explanation": "Percentage error divides the error by the true value, then multiplies by \\(100\\). A common slip is to divide by the approximation \\(0.1\\); here it barely changes the result."
        },
        {
          "stepNumber": 7,
          "description": "Carry out the division",
          "workingLatex": "\\frac{0.000167}{0.0998334} \\approx 0.001673",
          "explanation": "Dividing the error by the true value gives the fractional error \\(0.001673\\), before scaling up to a percentage."
        },
        {
          "stepNumber": 8,
          "description": "Convert to a percentage",
          "workingLatex": "0.001673 \\times 100 \\approx 0.167\\%",
          "explanation": "Multiplying by \\(100\\) gives about \\(0.167\\%\\), which rounds to \\(0.17\\%\\). The error is tiny, confirming the approximation is very good for \\(\\theta = 0.1\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 0.17\\%\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-011",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 10",
    "difficulty": "Foundation",
    "questionText": "Approximate \\(\\displaystyle\\frac{\\sin\\theta}{\\theta}\\) for small \\(\\theta\\).",
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
          "description": "State the radian condition",
          "workingLatex": "\\theta \\text{ small, measured in radians}",
          "explanation": "The small-angle results only hold when \\(\\theta\\) is in radians and close to \\(0\\). A common slip is to apply them with \\(\\theta\\) in degrees, where \\(\\sin\\theta\\) is far from \\(\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Recall the small-angle rule for sine",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\) in radians, the leading-order approximation to \\(\\sin\\theta\\) is \\(\\theta\\) itself. The next correction is the cubic term \\(-\\displaystyle\\frac{\\theta^3}{6}\\), which is negligible here."
        },
        {
          "stepNumber": 3,
          "description": "Write down the target expression",
          "workingLatex": "\\frac{\\sin\\theta}{\\theta}",
          "explanation": "We want a simple approximation to this ratio. The numerator is \\(\\sin\\theta\\) and the denominator is the angle \\(\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the approximation in the numerator",
          "workingLatex": "\\frac{\\sin\\theta}{\\theta} \\approx \\frac{\\theta}{\\theta}",
          "explanation": "Replace \\(\\sin\\theta\\) in the numerator by its approximation \\(\\theta\\). The denominator \\(\\theta\\) is left exactly as it is."
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor of theta",
          "workingLatex": "\\frac{\\theta}{\\theta} = 1",
          "explanation": "The factor \\(\\theta\\) cancels top and bottom, leaving \\(1\\). This cancellation is valid because \\(\\theta\\neq 0\\) (we take \\(\\theta\\) close to but not equal to \\(0\\))."
        },
        {
          "stepNumber": 6,
          "description": "State the limiting interpretation",
          "workingLatex": "\\frac{\\sin\\theta}{\\theta} \\to 1 \\text{ as } \\theta \\to 0",
          "explanation": "The result \\(1\\) is exactly the standard limit of \\(\\displaystyle\\frac{\\sin\\theta}{\\theta}\\) as \\(\\theta\\to 0\\), so the approximation is consistent with the limit."
        }
      ],
      "finalAnswer": "\\(\\approx 1\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-012",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 19",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\displaystyle\\frac{1 - \\cos\\theta}{\\theta^2}\\) for small \\(\\theta\\).",
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
          "description": "Decide which approximation order is needed",
          "workingLatex": "\\cos\\theta \\approx 1 \\;\\text{ is too crude here}",
          "explanation": "Using \\(\\cos\\theta\\approx 1\\) would make the numerator \\(1-\\cos\\theta\\) collapse to \\(0\\), losing the answer. We therefore need the quadratic correction term for cosine."
        },
        {
          "stepNumber": 2,
          "description": "Recall the small-angle rule for cosine",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "For small \\(\\theta\\) in radians, cosine keeps a quadratic correction term. The next dropped term is the quartic \\(+\\displaystyle\\frac{\\theta^4}{24}\\), which is negligible compared with \\(\\theta^2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the numerator separately",
          "workingLatex": "1 - \\cos\\theta",
          "explanation": "We treat the numerator on its own first, then divide by \\(\\theta^2\\) at the end. This keeps the sign work clear."
        },
        {
          "stepNumber": 4,
          "description": "Substitute cosine into the numerator",
          "workingLatex": "1 - \\cos\\theta \\approx 1 - \\left(1 - \\frac{\\theta^2}{2}\\right)",
          "explanation": "Replace \\(\\cos\\theta\\) by its approximation inside the numerator. The whole bracket is subtracted, so its sign must be distributed carefully in the next step."
        },
        {
          "stepNumber": 5,
          "description": "Distribute the minus sign over the bracket",
          "workingLatex": "= 1 - 1 + \\frac{\\theta^2}{2}",
          "explanation": "Subtracting the bracket flips both inner signs: \\(-1\\) and \\(-\\left(-\\displaystyle\\frac{\\theta^2}{2}\\right)=+\\displaystyle\\frac{\\theta^2}{2}\\). A common slip is to leave the \\(\\theta^2\\) term negative."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the constant terms",
          "workingLatex": "= \\frac{\\theta^2}{2}",
          "explanation": "The two \\(1\\)'s cancel, leaving \\(\\displaystyle\\frac{\\theta^2}{2}\\) as the simplified numerator. This is of order \\(\\theta^2\\), matching the denominator."
        },
        {
          "stepNumber": 7,
          "description": "Form the full ratio",
          "workingLatex": "\\frac{1-\\cos\\theta}{\\theta^2} \\approx \\frac{\\theta^2/2}{\\theta^2}",
          "explanation": "Place the simplified numerator over the original denominator \\(\\theta^2\\). Both numerator and denominator are now proportional to \\(\\theta^2\\)."
        },
        {
          "stepNumber": 8,
          "description": "Rewrite as a product to expose the factor",
          "workingLatex": "\\frac{\\theta^2/2}{\\theta^2} = \\frac{1}{2}\\cdot\\frac{\\theta^2}{\\theta^2}",
          "explanation": "Separate out the constant \\(\\displaystyle\\frac{1}{2}\\) so that the \\(\\theta^2\\) factor stands alone, ready to cancel."
        },
        {
          "stepNumber": 9,
          "description": "Cancel theta squared to finish",
          "workingLatex": "\\frac{1}{2}\\cdot\\frac{\\theta^2}{\\theta^2} = \\frac{1}{2}",
          "explanation": "The factor \\(\\theta^2\\) cancels (valid since \\(\\theta\\neq 0\\)), leaving the constant \\(\\displaystyle\\frac{1}{2}\\). This is the limit of the expression as \\(\\theta\\to 0\\)."
        }
      ],
      "finalAnswer": "\\(\\approx \\displaystyle\\frac{1}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-013",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 11",
    "difficulty": "Foundation",
    "questionText": "Approximate \\(\\displaystyle\\frac{\\tan\\theta}{\\theta}\\) for small \\(\\theta\\).",
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
          "description": "State the radian condition",
          "workingLatex": "\\theta \\text{ small, measured in radians}",
          "explanation": "The small-angle result \\(\\tan\\theta\\approx\\theta\\) only holds with \\(\\theta\\) in radians near \\(0\\). In degrees it fails badly, so always check the units first."
        },
        {
          "stepNumber": 2,
          "description": "Recall the small-angle rule for tangent",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\) in radians, \\(\\tan\\theta\\) is approximately \\(\\theta\\) at leading order. The next correction is \\(+\\displaystyle\\frac{\\theta^3}{3}\\); unlike cosine, no quadratic term is needed here."
        },
        {
          "stepNumber": 3,
          "description": "Write down the target expression",
          "workingLatex": "\\frac{\\tan\\theta}{\\theta}",
          "explanation": "We want a simple approximation to this ratio, with \\(\\tan\\theta\\) in the numerator and the angle \\(\\theta\\) in the denominator."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the approximation in the numerator",
          "workingLatex": "\\frac{\\tan\\theta}{\\theta} \\approx \\frac{\\theta}{\\theta}",
          "explanation": "Replace \\(\\tan\\theta\\) in the numerator by its approximation \\(\\theta\\). The denominator \\(\\theta\\) is left unchanged."
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor of theta",
          "workingLatex": "\\frac{\\theta}{\\theta} = 1",
          "explanation": "The factor \\(\\theta\\) cancels top and bottom, leaving \\(1\\). This is valid since \\(\\theta\\neq 0\\) (we take \\(\\theta\\) close to but not equal to \\(0\\))."
        },
        {
          "stepNumber": 6,
          "description": "State the limiting interpretation",
          "workingLatex": "\\frac{\\tan\\theta}{\\theta} \\to 1 \\text{ as } \\theta \\to 0",
          "explanation": "The result \\(1\\) is the standard limit of \\(\\displaystyle\\frac{\\tan\\theta}{\\theta}\\) as \\(\\theta\\to 0\\), confirming the approximation is consistent."
        }
      ],
      "finalAnswer": "\\(\\approx 1\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-014",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 20",
    "difficulty": "Standard",
    "questionText": "For small \\(\\theta\\), approximate \\(\\sin(3\\theta) - 3\\theta\\).",
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
          "description": "Recall the small-angle rule for sine",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "For a small angle \\(x\\) in radians, \\(\\sin x\\approx x\\) at leading order. We write the rule with a general symbol \\(x\\) so we can substitute the actual angle next."
        },
        {
          "stepNumber": 2,
          "description": "Check the inner angle is small",
          "workingLatex": "x = 3\\theta \\to 0 \\text{ as } \\theta \\to 0",
          "explanation": "The angle inside the sine is \\(3\\theta\\). Since \\(\\theta\\) is small, \\(3\\theta\\) is also small, so the rule \\(\\sin x\\approx x\\) applies with \\(x=3\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule with the angle 3 theta",
          "workingLatex": "\\sin(3\\theta) \\approx 3\\theta",
          "explanation": "Substitute \\(x = 3\\theta\\) into \\(\\sin x\\approx x\\). A common slip is to write \\(\\sin(3\\theta)\\approx\\theta\\); the angle is \\(3\\theta\\), so the approximation is \\(3\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Write down the target expression",
          "workingLatex": "\\sin(3\\theta) - 3\\theta",
          "explanation": "We now substitute the leading-order approximation for \\(\\sin(3\\theta)\\), keeping the \\(-3\\theta\\) term exactly as given."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the approximation",
          "workingLatex": "\\sin(3\\theta) - 3\\theta \\approx 3\\theta - 3\\theta",
          "explanation": "Replace \\(\\sin(3\\theta)\\) by \\(3\\theta\\). The two terms are now identical in size, so they are poised to cancel."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the matching terms",
          "workingLatex": "3\\theta - 3\\theta = 0",
          "explanation": "The two \\(3\\theta\\) terms cancel exactly, so to leading order the expression is \\(0\\). At the level of \\(\\sin x\\approx x\\) this is the required approximation."
        },
        {
          "stepNumber": 7,
          "description": "Note the true higher-order value",
          "workingLatex": "\\sin(3\\theta) - 3\\theta \\approx -\\frac{(3\\theta)^3}{6} = -\\frac{27\\theta^3}{6} = -\\frac{9}{2}\\theta^3",
          "explanation": "Including the cubic term \\(-\\displaystyle\\frac{(3\\theta)^3}{6}\\) shows the true value is a tiny negative \\(-\\displaystyle\\frac{9}{2}\\theta^3\\). This confirms the leading-order answer is \\(0\\), with the next term negative."
        }
      ],
      "finalAnswer": "\\(\\approx 0\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-015",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 21",
    "difficulty": "Challenge",
    "questionText": "Let \\(\\displaystyle f(\\theta) = \\displaystyle\\frac{\\cos\\theta - \\cos 5\\theta}{\\sin 3\\theta\\,\\tan\\theta}\\), where \\(\\theta\\) is measured in radians.\n(a) Using the small-angle approximations \\(\\sin\\theta\\approx\\theta\\), \\(\\tan\\theta\\approx\\theta\\) and \\(\\cos\\theta\\approx 1-\\displaystyle\\frac{\\theta^2}{2}\\), show that for small \\(\\theta\\), \\(f(\\theta)\\approx a\\) for a constant \\(a\\), and find the exact value of \\(a\\).\n(b) Use your result from part (a) to estimate \\(f(0.05)\\), and state, with a reason, whether your estimate is larger or smaller than the true value (the true value is \\(3.990\\) to 3 decimal places).",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify",
      "compound-expression",
      "limit",
      "estimation",
      "challenge"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the orders needed top and bottom",
          "workingLatex": "\\text{numerator: keep } \\theta^2; \\quad \\text{denominator: keep } \\theta^2",
          "explanation": "In the numerator the two cosines each start with \\(1\\), and those constants cancel, so the leading surviving term is \\(\\theta^2\\). The denominator is a product of two order-\\(\\theta\\) factors, giving \\(\\theta^2\\); we plan to match these powers."
        },
        {
          "stepNumber": 2,
          "description": "Recall the cosine rule for theta",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "We must keep the \\(\\theta^2\\) correction for cosine; dropping it would collapse the numerator to \\(0\\). The quartic term is negligible at this order."
        },
        {
          "stepNumber": 3,
          "description": "Apply the cosine rule to five theta",
          "workingLatex": "\\cos 5\\theta \\approx 1 - \\frac{(5\\theta)^2}{2}",
          "explanation": "Replace \\(\\theta\\) by \\(5\\theta\\) in the cosine rule. The entire angle \\(5\\theta\\) is squared, not just the \\(\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Square the angle five theta",
          "workingLatex": "\\cos 5\\theta \\approx 1 - \\frac{25\\theta^2}{2}",
          "explanation": "Squaring gives \\((5\\theta)^2 = 25\\theta^2\\). A common slip is to write \\(\\displaystyle\\frac{5\\theta^2}{2}\\) instead of squaring the \\(5\\)."
        },
        {
          "stepNumber": 5,
          "description": "Substitute both into the numerator",
          "workingLatex": "\\cos\\theta - \\cos 5\\theta \\approx \\left(1 - \\frac{\\theta^2}{2}\\right) - \\left(1 - \\frac{25\\theta^2}{2}\\right)",
          "explanation": "Place both approximations into the numerator. The second bracket is subtracted in full, so both of its terms will change sign."
        },
        {
          "stepNumber": 6,
          "description": "Distribute the minus over the second bracket",
          "workingLatex": "= 1 - \\frac{\\theta^2}{2} - 1 + \\frac{25\\theta^2}{2}",
          "explanation": "Subtracting the second bracket flips its signs: \\(-1\\) and \\(+\\displaystyle\\frac{25\\theta^2}{2}\\). The two \\(1\\)'s are now ready to cancel."
        },
        {
          "stepNumber": 7,
          "description": "Cancel the constant terms",
          "workingLatex": "= - \\frac{\\theta^2}{2} + \\frac{25\\theta^2}{2}",
          "explanation": "The \\(1\\) and \\(-1\\) cancel exactly, which is precisely why keeping the \\(\\theta^2\\) terms mattered. Only the quadratic terms remain."
        },
        {
          "stepNumber": 8,
          "description": "Combine the theta squared terms",
          "workingLatex": "= \\frac{-1 + 25}{2}\\,\\theta^2 = \\frac{24\\theta^2}{2}",
          "explanation": "Add the coefficients over the common denominator \\(2\\): \\(-1 + 25 = 24\\). This keeps the arithmetic explicit before simplifying."
        },
        {
          "stepNumber": 9,
          "description": "Simplify the numerator",
          "workingLatex": "\\cos\\theta - \\cos 5\\theta \\approx 12\\theta^2",
          "explanation": "Dividing \\(24\\) by \\(2\\) gives \\(12\\), so the numerator is \\(12\\theta^2\\). It is of order \\(\\theta^2\\), not a constant, as planned."
        },
        {
          "stepNumber": 10,
          "description": "Approximate sine of three theta",
          "workingLatex": "\\sin 3\\theta \\approx 3\\theta",
          "explanation": "Apply \\(\\sin x\\approx x\\) with \\(x = 3\\theta\\). Only the leading term is needed in the denominator, since we just need its lowest power of \\(\\theta\\)."
        },
        {
          "stepNumber": 11,
          "description": "Approximate tangent of theta",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "Apply \\(\\tan x\\approx x\\) with \\(x = \\theta\\). No correction term is needed; the leading term already gives the matching power of \\(\\theta\\)."
        },
        {
          "stepNumber": 12,
          "description": "Multiply to form the denominator",
          "workingLatex": "\\sin 3\\theta\\,\\tan\\theta \\approx (3\\theta)(\\theta)",
          "explanation": "Multiply the two leading-order approximations together. We keep the factors visible before collecting them."
        },
        {
          "stepNumber": 13,
          "description": "Simplify the denominator",
          "workingLatex": "\\sin 3\\theta\\,\\tan\\theta \\approx 3\\theta^2",
          "explanation": "The product \\((3\\theta)(\\theta) = 3\\theta^2\\) is order \\(\\theta^2\\), matching the numerator so the ratio is finite."
        },
        {
          "stepNumber": 14,
          "description": "Form the ratio f of theta",
          "workingLatex": "f(\\theta) \\approx \\frac{12\\theta^2}{3\\theta^2}",
          "explanation": "Substitute the approximate numerator \\(12\\theta^2\\) and denominator \\(3\\theta^2\\) into \\(f(\\theta)\\). Both are proportional to \\(\\theta^2\\)."
        },
        {
          "stepNumber": 15,
          "description": "Separate the constant and theta factors",
          "workingLatex": "f(\\theta) \\approx \\frac{12}{3}\\cdot\\frac{\\theta^2}{\\theta^2}",
          "explanation": "Split the fraction so the constant ratio and the \\(\\theta^2\\) ratio are clear before cancelling."
        },
        {
          "stepNumber": 16,
          "description": "Cancel theta squared",
          "workingLatex": "f(\\theta) \\approx \\frac{12}{3}",
          "explanation": "The common factor \\(\\theta^2\\) cancels (valid since \\(\\theta\\neq 0\\)), leaving a pure number. This confirms the expression tends to a constant as \\(\\theta\\to 0\\)."
        },
        {
          "stepNumber": 17,
          "description": "Identify the constant a",
          "workingLatex": "f(\\theta) \\approx 4 \\quad\\Rightarrow\\quad a = 4",
          "explanation": "Evaluating \\(\\displaystyle\\frac{12}{3}\\) gives \\(4\\), so \\(a = 4\\). A sign error in the subtraction at step 6 would wrongly give \\(a = -4\\)."
        },
        {
          "stepNumber": 18,
          "description": "Estimate f at theta equal 0.05",
          "workingLatex": "f(0.05) \\approx a = 4",
          "explanation": "The leading-order result is independent of \\(\\theta\\), so the estimate for any small \\(\\theta\\), including \\(\\theta = 0.05\\), is simply \\(4\\)."
        },
        {
          "stepNumber": 19,
          "description": "State the true value for comparison",
          "workingLatex": "f(0.05) = 3.990 \\;(3\\text{ d.p.})",
          "explanation": "The exact value at \\(\\theta = 0.05\\) is given as \\(3.990\\) to three decimal places. We compare our estimate \\(4\\) against this."
        },
        {
          "stepNumber": 20,
          "description": "Compare estimate with true value",
          "workingLatex": "4 > 3.990",
          "explanation": "The estimate \\(4\\) exceeds the true value \\(3.990\\), so it is an over-estimate. The neglected higher-order \\(\\theta^4\\) corrections are negative here, pulling the true value just below \\(4\\)."
        }
      ],
      "finalAnswer": "(a) \\(a = 4\\). (b) \\(f(0.05) \\approx 4\\), which is larger than the true value \\(3.990\\) (an over-estimate, since the neglected higher-order terms are negative).",
      "commonMistakes": [
        "Writing \\(\\cos 5\\theta \\approx 1 - \\displaystyle\\frac{5\\theta^2}{2}\\) instead of squaring the whole angle to get \\(\\displaystyle\\frac{25\\theta^2}{2}\\).",
        "Dropping the \\(\\theta^2\\) term in the cosines too early, making the numerator collapse to 0.",
        "Mishandling the subtraction sign and getting \\(-12\\theta^2\\), hence \\(a = -4\\)."
      ]
    }
  },
  {
    "id": "y2tf6-016",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 22",
    "difficulty": "Standard",
    "questionText": "For small \\(\\theta\\), approximate \\(1 - \\cos(4\\theta)\\).",
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
          "description": "Identify which approximation is needed",
          "workingLatex": "1 - \\cos(4\\theta)",
          "explanation": "The expression contains a cosine of a small angle, so we will need the small-angle approximation for \\(\\cos\\). Because the leading constant terms will cancel, we must keep the quadratic term and cannot use the crude \\(\\cos x \\approx 1\\)."
        },
        {
          "stepNumber": 2,
          "description": "State the cosine approximation",
          "workingLatex": "\\cos x \\approx 1 - \\frac{x^2}{2}",
          "explanation": "For a small angle \\(x\\) in radians, \\(\\cos x\\) is close to \\(1 - \\displaystyle\\frac{x^2}{2}\\). The next dropped term is \\(+\\displaystyle\\frac{x^4}{24}\\), which is of order \\(x^4\\) and negligible compared with the \\(x^2\\) term as \\(x \\to 0\\)."
        },
        {
          "stepNumber": 3,
          "description": "Note that \\(\\cos x \\approx 1\\) is too crude",
          "workingLatex": "1 - \\cos(4\\theta) \\approx 1 - 1 = 0",
          "explanation": "If we used \\(\\cos(4\\theta) \\approx 1\\) the whole expression would collapse to \\(0\\), which loses all the information. This confirms we must keep the \\(\\theta^2\\) term in the cosine."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the angle \\(4\\theta\\)",
          "workingLatex": "\\cos(4\\theta) \\approx 1 - \\frac{(4\\theta)^2}{2}",
          "explanation": "Here the angle is \\(4\\theta\\), so we replace \\(x\\) by \\(4\\theta\\) everywhere in the approximation. Note the entire \\(4\\theta\\) is squared, not just the \\(\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Square the angle",
          "workingLatex": "(4\\theta)^2 = 4^2 \\theta^2 = 16\\theta^2",
          "explanation": "Squaring multiplies both the \\(4\\) and the \\(\\theta\\): since \\(4^2 = 16\\) we get \\(16\\theta^2\\). Forgetting to square the \\(4\\) is the most frequent error and would give \\(2\\theta^2\\) instead of \\(8\\theta^2\\)."
        },
        {
          "stepNumber": 6,
          "description": "Substitute the squared angle back",
          "workingLatex": "\\cos(4\\theta) \\approx 1 - \\frac{16\\theta^2}{2}",
          "explanation": "Replace \\((4\\theta)^2\\) by \\(16\\theta^2\\) inside the approximation, ready to simplify the fraction."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction",
          "workingLatex": "\\frac{16\\theta^2}{2} = 8\\theta^2 \\;\\Rightarrow\\; \\cos(4\\theta) \\approx 1 - 8\\theta^2",
          "explanation": "Dividing \\(16\\theta^2\\) by \\(2\\) gives \\(8\\theta^2\\). So to order \\(\\theta^2\\), \\(\\cos(4\\theta) \\approx 1 - 8\\theta^2\\)."
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the expression",
          "workingLatex": "1 - \\cos(4\\theta) \\approx 1 - \\left(1 - 8\\theta^2\\right)",
          "explanation": "We replace \\(\\cos(4\\theta)\\) by its approximation. Keep the bracket so the minus sign distributes over both terms inside it."
        },
        {
          "stepNumber": 9,
          "description": "Distribute the minus sign",
          "workingLatex": "1 - \\left(1 - 8\\theta^2\\right) = 1 - 1 + 8\\theta^2",
          "explanation": "The leading minus sign multiplies both terms in the bracket: \\(-1\\) becomes \\(-1\\) and \\(-(-8\\theta^2)\\) becomes \\(+8\\theta^2\\). A common slip is to drop the sign on the bracket and get \\(2 - 8\\theta^2\\)."
        },
        {
          "stepNumber": 10,
          "description": "Cancel the constant terms",
          "workingLatex": "1 - 1 + 8\\theta^2 = 8\\theta^2",
          "explanation": "The \\(1\\) and \\(-1\\) cancel, leaving \\(8\\theta^2\\). This is the leading behaviour of \\(1 - \\cos(4\\theta)\\) for small \\(\\theta\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 8\\theta^2\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-017",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 23",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\displaystyle\\frac{\\sin(5\\theta)}{\\theta}\\) for small \\(\\theta\\).",
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
          "description": "Identify the approximation needed",
          "workingLatex": "\\frac{\\sin(5\\theta)}{\\theta}",
          "explanation": "The numerator is the sine of a small angle, so we use the small-angle sine approximation. The denominator \\(\\theta\\) is already a simple power and needs no approximation."
        },
        {
          "stepNumber": 2,
          "description": "State the sine approximation",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "For a small angle \\(x\\) in radians, \\(\\sin x\\) is approximately equal to \\(x\\) itself. The first dropped term is \\(-\\displaystyle\\frac{x^3}{6}\\), of order \\(x^3\\), which is negligible compared with \\(x\\) as \\(x \\to 0\\). This only works in radians, not degrees."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the angle \\(5\\theta\\)",
          "workingLatex": "\\sin(5\\theta) \\approx 5\\theta",
          "explanation": "The angle here is \\(5\\theta\\), so replacing \\(x\\) by \\(5\\theta\\) gives \\(\\sin(5\\theta) \\approx 5\\theta\\). A common slip is to write \\(\\sin(5\\theta) \\approx \\theta\\), forgetting the factor of \\(5\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the fraction",
          "workingLatex": "\\frac{\\sin(5\\theta)}{\\theta} \\approx \\frac{5\\theta}{\\theta}",
          "explanation": "Replace the numerator with its approximation \\(5\\theta\\) while keeping the denominator \\(\\theta\\) unchanged."
        },
        {
          "stepNumber": 5,
          "description": "Write as a constant times a ratio",
          "workingLatex": "\\frac{5\\theta}{\\theta} = 5 \\cdot \\frac{\\theta}{\\theta}",
          "explanation": "Factor the constant \\(5\\) out of the fraction so the cancellation of the \\(\\theta\\) factors is explicit."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "5 \\cdot \\frac{\\theta}{\\theta} = 5 \\cdot 1 = 5",
          "explanation": "The \\(\\theta\\) in top and bottom cancel to \\(1\\) (valid since \\(\\theta \\neq 0\\) as we approach the limit), leaving the constant \\(5\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 5\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-018",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 51",
    "difficulty": "Challenge",
    "questionText": "Approximate \\(\\displaystyle\\frac{1 - \\cos(2\\theta)}{\\sin^2\\theta}\\) for small \\(\\theta\\).",
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
          "description": "State the two approximations needed",
          "workingLatex": "\\cos x \\approx 1 - \\frac{x^2}{2}, \\qquad \\sin x \\approx x",
          "explanation": "The numerator needs the cosine approximation and the denominator needs the sine approximation. Both hold for small angles measured in radians."
        },
        {
          "stepNumber": 2,
          "description": "Note both numerator and denominator vanish",
          "workingLatex": "1 - \\cos(2\\theta) \\to 0, \\qquad \\sin^2\\theta \\to 0",
          "explanation": "As \\(\\theta \\to 0\\) both top and bottom tend to \\(0\\), an indeterminate \\(\\displaystyle\\frac{0}{0}\\) form. We must keep terms to order \\(\\theta^2\\) in each so the ratio is finite, so \\(\\cos x \\approx 1\\) alone is too crude."
        },
        {
          "stepNumber": 3,
          "description": "Approximate the numerator cosine",
          "workingLatex": "\\cos(2\\theta) \\approx 1 - \\frac{(2\\theta)^2}{2}",
          "explanation": "The angle is \\(2\\theta\\), so substitute \\(x = 2\\theta\\) into the cosine approximation. The whole \\(2\\theta\\) is squared, so do not forget to square the \\(2\\)."
        },
        {
          "stepNumber": 4,
          "description": "Square the angle",
          "workingLatex": "(2\\theta)^2 = 2^2 \\theta^2 = 4\\theta^2",
          "explanation": "Squaring both the \\(2\\) and the \\(\\theta\\) gives \\(4\\theta^2\\). The dropped order-\\(\\theta^4\\) term from the cosine series is negligible here."
        },
        {
          "stepNumber": 5,
          "description": "Simplify the cosine term",
          "workingLatex": "\\cos(2\\theta) \\approx 1 - \\frac{4\\theta^2}{2} = 1 - 2\\theta^2",
          "explanation": "Dividing \\(4\\theta^2\\) by \\(2\\) gives \\(2\\theta^2\\), so \\(\\cos(2\\theta) \\approx 1 - 2\\theta^2\\) to order \\(\\theta^2\\)."
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the numerator",
          "workingLatex": "1 - \\cos(2\\theta) \\approx 1 - \\left(1 - 2\\theta^2\\right)",
          "explanation": "Replace \\(\\cos(2\\theta)\\) by its approximation, keeping the bracket so the minus sign reaches both terms inside."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the numerator",
          "workingLatex": "1 - \\left(1 - 2\\theta^2\\right) = 1 - 1 + 2\\theta^2 = 2\\theta^2",
          "explanation": "The \\(1\\) and \\(-1\\) cancel, leaving \\(2\\theta^2\\). Dropping the sign on the bracket would wrongly give \\(2 - 2\\theta^2\\)."
        },
        {
          "stepNumber": 8,
          "description": "Approximate the sine",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "The denominator angle is just \\(\\theta\\), so the leading approximation is \\(\\sin\\theta \\approx \\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Square to form the denominator",
          "workingLatex": "\\sin^2\\theta = (\\sin\\theta)^2 \\approx \\theta^2",
          "explanation": "Squaring \\(\\sin\\theta \\approx \\theta\\) gives \\(\\sin^2\\theta \\approx \\theta^2\\). Note \\(\\sin^2\\theta\\) means \\((\\sin\\theta)^2\\), not \\(\\sin(\\theta^2)\\)."
        },
        {
          "stepNumber": 10,
          "description": "Substitute into the fraction",
          "workingLatex": "\\frac{1 - \\cos(2\\theta)}{\\sin^2\\theta} \\approx \\frac{2\\theta^2}{\\theta^2}",
          "explanation": "Replace the numerator and denominator with their leading \\(\\theta^2\\) terms. Both are of order \\(\\theta^2\\), so the ratio is finite."
        },
        {
          "stepNumber": 11,
          "description": "Cancel and evaluate",
          "workingLatex": "\\frac{2\\theta^2}{\\theta^2} = 2 \\cdot \\frac{\\theta^2}{\\theta^2} = 2 \\cdot 1 = 2",
          "explanation": "The \\(\\theta^2\\) factors cancel (valid as \\(\\theta \\to 0\\) with \\(\\theta \\neq 0\\)), leaving the constant \\(2\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 2\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-019",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 52",
    "difficulty": "Challenge",
    "questionText": "Approximate \\(\\cos\\theta - \\sin^2\\theta\\) to order \\(\\theta^2\\).",
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
          "description": "State the approximations needed",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}, \\qquad \\sin\\theta \\approx \\theta",
          "explanation": "We work to order \\(\\theta^2\\), so the cosine keeps its \\(\\theta^2\\) term and the sine keeps its leading \\(\\theta\\) term. Both hold for small \\(\\theta\\) in radians."
        },
        {
          "stepNumber": 2,
          "description": "Approximate the sine factor",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "Before squaring, write the leading approximation \\(\\sin\\theta \\approx \\theta\\). The dropped \\(-\\displaystyle\\frac{\\theta^3}{6}\\) term would contribute only at order \\(\\theta^4\\) once squared, beyond the order we keep."
        },
        {
          "stepNumber": 3,
          "description": "Square to get \\(\\sin^2\\theta\\)",
          "workingLatex": "\\sin^2\\theta = (\\sin\\theta)^2 \\approx \\theta^2",
          "explanation": "Squaring \\(\\sin\\theta \\approx \\theta\\) gives \\(\\theta^2\\). This is already exactly at order \\(\\theta^2\\), so no higher terms are needed."
        },
        {
          "stepNumber": 4,
          "description": "Substitute both approximations",
          "workingLatex": "\\cos\\theta - \\sin^2\\theta \\approx \\left(1 - \\frac{\\theta^2}{2}\\right) - \\theta^2",
          "explanation": "Replace each term by its approximation. Use a bracket around the cosine so the subtraction is applied to both of its terms correctly."
        },
        {
          "stepNumber": 5,
          "description": "Remove the bracket",
          "workingLatex": "\\left(1 - \\frac{\\theta^2}{2}\\right) - \\theta^2 = 1 - \\frac{\\theta^2}{2} - \\theta^2",
          "explanation": "The cosine bracket has a leading \\(+\\) sign, so it expands unchanged; the \\(-\\theta^2\\) from \\(\\sin^2\\theta\\) is then a separate term."
        },
        {
          "stepNumber": 6,
          "description": "Give the \\(\\theta^2\\) terms a common denominator",
          "workingLatex": "-\\frac{\\theta^2}{2} - \\theta^2 = -\\frac{\\theta^2}{2} - \\frac{2\\theta^2}{2}",
          "explanation": "Write \\(\\theta^2\\) as \\(\\displaystyle\\frac{2\\theta^2}{2}\\) so both \\(\\theta^2\\) terms share the denominator \\(2\\). A common slip is to forget the \\(-\\displaystyle\\frac{\\theta^2}{2}\\) from the cosine."
        },
        {
          "stepNumber": 7,
          "description": "Combine the \\(\\theta^2\\) terms",
          "workingLatex": "-\\frac{\\theta^2}{2} - \\frac{2\\theta^2}{2} = -\\frac{3\\theta^2}{2}",
          "explanation": "Adding the numerators, \\(-1 - 2 = -3\\), gives \\(-\\displaystyle\\frac{3\\theta^2}{2}\\)."
        },
        {
          "stepNumber": 8,
          "description": "Combine with the constant",
          "workingLatex": "\\cos\\theta - \\sin^2\\theta \\approx 1 - \\frac{3\\theta^2}{2}",
          "explanation": "The constant \\(1\\) carries through unchanged, giving the order-\\(\\theta^2\\) approximation \\(1 - \\displaystyle\\frac{3\\theta^2}{2}\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 1 - \\displaystyle\\frac{3\\theta^2}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-020",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 24",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\sin\\theta + \\cos\\theta\\) to order \\(\\theta^2\\) for small \\(\\theta\\).",
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
          "description": "Approximate the sine term",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\) in radians, \\(\\sin\\theta \\approx \\theta\\). This is the order-\\(\\theta\\) term and we keep it; the dropped \\(-\\displaystyle\\frac{\\theta^3}{6}\\) is order \\(\\theta^3\\), beyond what we need."
        },
        {
          "stepNumber": 2,
          "description": "Approximate the cosine term",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "The cosine keeps its constant \\(1\\) and its \\(\\theta^2\\) term. Do not approximate it as just \\(1\\), since we are asked to work to order \\(\\theta^2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Add the two approximations",
          "workingLatex": "\\sin\\theta + \\cos\\theta \\approx \\theta + \\left(1 - \\frac{\\theta^2}{2}\\right)",
          "explanation": "Substitute both approximations into the sum, keeping the cosine in a bracket for clarity."
        },
        {
          "stepNumber": 4,
          "description": "Remove the bracket",
          "workingLatex": "\\theta + \\left(1 - \\frac{\\theta^2}{2}\\right) = \\theta + 1 - \\frac{\\theta^2}{2}",
          "explanation": "The bracket has a leading \\(+\\) sign, so each term inside keeps its sign when the bracket is removed."
        },
        {
          "stepNumber": 5,
          "description": "Order the terms by power",
          "workingLatex": "\\sin\\theta + \\cos\\theta \\approx 1 + \\theta - \\frac{\\theta^2}{2}",
          "explanation": "Writing constant, then \\(\\theta\\), then \\(\\theta^2\\) gives the tidy form. All three terms are at order \\(\\theta^2\\) or lower, so none are dropped."
        }
      ],
      "finalAnswer": "\\(\\approx 1 + \\theta - \\displaystyle\\frac{\\theta^2}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-021",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 53",
    "difficulty": "Challenge",
    "questionText": "Approximate \\(\\displaystyle\\frac{\\sin\\theta}{1 - \\cos\\theta}\\) for small \\(\\theta\\).",
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
          "description": "Note the orders of numerator and denominator",
          "workingLatex": "\\frac{\\sin\\theta}{1 - \\cos\\theta}",
          "explanation": "Before substituting anything, observe that the numerator \\(\\sin\\theta\\) is order \\(\\theta\\) while the denominator \\(1-\\cos\\theta\\) loses its constant part, so it is order \\(\\theta^2\\). Tracking these orders tells us in advance that we must keep the \\(\\theta^2\\) term in the cosine, not just \\(\\cos\\theta\\approx 1\\)."
        },
        {
          "stepNumber": 2,
          "description": "State the sine approximation for the numerator",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\) measured in radians the leading-order approximation is \\(\\sin\\theta\\approx\\theta\\); the next term \\(-\\displaystyle\\frac{\\theta^3}{6}\\) is far smaller than \\(\\theta\\) and is dropped. A common slip is to leave the numerator as \\(\\sin\\theta\\) and forget to approximate it consistently with the denominator."
        },
        {
          "stepNumber": 3,
          "description": "State the cosine approximation for the denominator",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "The cosine approximation keeps the \\(\\theta^2\\) term, which is essential here because the constant terms will cancel and leave \\(\\theta^2\\) as the leading behaviour. A common slip is to use \\(\\cos\\theta\\approx 1\\), which would make the denominator \\(0\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the cosine into the denominator",
          "workingLatex": "1 - \\cos\\theta \\approx 1 - \\left(1 - \\frac{\\theta^2}{2}\\right)",
          "explanation": "Replace \\(\\cos\\theta\\) by its order-\\(\\theta^2\\) approximation inside the bracket. Keep the bracket intact for now so the sign change on each term is handled carefully."
        },
        {
          "stepNumber": 5,
          "description": "Distribute the minus sign",
          "workingLatex": "1 - \\left(1 - \\frac{\\theta^2}{2}\\right) = 1 - 1 + \\frac{\\theta^2}{2}",
          "explanation": "Removing the bracket flips the sign of each term inside it, so \\(-\\left(-\\displaystyle\\frac{\\theta^2}{2}\\right)\\) becomes \\(+\\displaystyle\\frac{\\theta^2}{2}\\). A common slip is to write \\(-\\displaystyle\\frac{\\theta^2}{2}\\) here by forgetting that the second minus sign cancels."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the constant terms in the denominator",
          "workingLatex": "1 - 1 + \\frac{\\theta^2}{2} = \\frac{\\theta^2}{2}",
          "explanation": "The two \\(1\\)s cancel exactly, leaving the leading \\(\\theta^2\\) behaviour. This is precisely why we could not drop the \\(\\theta^2\\) term earlier: it is the entire denominator."
        },
        {
          "stepNumber": 7,
          "description": "Form the quotient of the approximations",
          "workingLatex": "\\frac{\\sin\\theta}{1 - \\cos\\theta} \\approx \\frac{\\theta}{\\theta^2/2}",
          "explanation": "Substitute the order-\\(\\theta\\) numerator from Step 2 and the order-\\(\\theta^2\\) denominator from Step 6. Comparing orders \\(\\theta\\) over \\(\\theta^2\\) shows the result will behave like \\(1/\\theta\\), i.e. it blows up as \\(\\theta\\to 0\\)."
        },
        {
          "stepNumber": 8,
          "description": "Rewrite division by a fraction as multiplication",
          "workingLatex": "\\frac{\\theta}{\\theta^2/2} = \\theta \\cdot \\frac{2}{\\theta^2}",
          "explanation": "Dividing by \\(\\displaystyle\\frac{\\theta^2}{2}\\) is the same as multiplying by its reciprocal \\(\\displaystyle\\frac{2}{\\theta^2}\\). A common slip is to multiply by \\(\\displaystyle\\frac{\\theta^2}{2}\\) instead of inverting it, which gives the wrong power of \\(\\theta\\)."
        },
        {
          "stepNumber": 9,
          "description": "Cancel one factor of theta",
          "workingLatex": "\\theta \\cdot \\frac{2}{\\theta^2} = \\frac{2\\theta}{\\theta^2} = \\frac{2}{\\theta}",
          "explanation": "Multiply across to get \\(\\displaystyle\\frac{2\\theta}{\\theta^2}\\), then cancel one factor of \\(\\theta\\) from top and bottom. A common slip is writing \\(\\displaystyle\\frac{\\theta}{2}\\) instead of \\(\\displaystyle\\frac{2}{\\theta}\\) by mishandling the reciprocal."
        }
      ],
      "finalAnswer": "\\(\\approx \\displaystyle\\frac{2}{\\theta}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-022",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 54",
    "difficulty": "Challenge",
    "questionText": "Approximate \\(\\sec\\theta\\) for small \\(\\theta\\) to order \\(\\theta^2\\).",
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
          "description": "Write secant as a reciprocal",
          "workingLatex": "\\sec\\theta = \\frac{1}{\\cos\\theta}",
          "explanation": "By definition \\(\\sec\\theta\\) is \\(1/\\cos\\theta\\). A common slip is to confuse \\(\\sec\\) with \\(\\csc\\) (which is \\(1/\\sin\\))."
        },
        {
          "stepNumber": 2,
          "description": "Choose the cosine approximation to the required order",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "Since the answer is wanted to order \\(\\theta^2\\), we must keep the \\(\\theta^2\\) term of the cosine and drop the \\(\\theta^4\\) and higher terms. Using \\(\\cos\\theta\\approx 1\\) would lose the very term we are asked to find."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the cosine approximation",
          "workingLatex": "\\frac{1}{\\cos\\theta} \\approx \\frac{1}{1 - \\frac{\\theta^2}{2}}",
          "explanation": "Replace \\(\\cos\\theta\\) by \\(1-\\displaystyle\\frac{\\theta^2}{2}\\) inside the reciprocal. The denominator is now \\(1\\) minus a small quantity, which is the standard set-up for a binomial expansion."
        },
        {
          "stepNumber": 4,
          "description": "Identify the binomial form",
          "workingLatex": "\\frac{1}{1 - u} = (1 - u)^{-1} \\approx 1 + u \\quad\\text{for small } u",
          "explanation": "For small \\(u\\), the binomial expansion of \\((1-u)^{-1}\\) is \\(1+u+u^2+\\dots\\), and we keep only \\(1+u\\). A common slip is the sign: \\(\\displaystyle\\frac{1}{1-u}\\) gives \\(1+u\\), not \\(1-u\\)."
        },
        {
          "stepNumber": 5,
          "description": "Set the small quantity u",
          "workingLatex": "u = \\frac{\\theta^2}{2}",
          "explanation": "Matching our denominator \\(1-\\displaystyle\\frac{\\theta^2}{2}\\) to the pattern \\(1-u\\) identifies \\(u=\\displaystyle\\frac{\\theta^2}{2}\\), which is indeed small for small \\(\\theta\\), so the expansion is valid."
        },
        {
          "stepNumber": 6,
          "description": "Substitute u back into 1 + u",
          "workingLatex": "1 + u = 1 + \\frac{\\theta^2}{2}",
          "explanation": "Replacing \\(u\\) with \\(\\displaystyle\\frac{\\theta^2}{2}\\) gives the order-\\(\\theta^2\\) approximation."
        },
        {
          "stepNumber": 7,
          "description": "Confirm the discarded higher-order terms",
          "workingLatex": "u^2 = \\left(\\frac{\\theta^2}{2}\\right)^2 = \\frac{\\theta^4}{4}",
          "explanation": "The next binomial term \\(u^2=\\displaystyle\\frac{\\theta^4}{4}\\) is order \\(\\theta^4\\), which is negligible beside \\(\\theta^2\\) for small \\(\\theta\\) and is correctly dropped, so \\(\\sec\\theta\\approx 1+\\displaystyle\\frac{\\theta^2}{2}\\) is exact to order \\(\\theta^2\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 1 + \\displaystyle\\frac{\\theta^2}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-023",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 55",
    "difficulty": "Challenge",
    "questionText": "Approximate \\(\\csc\\theta\\) for small \\(\\theta > 0\\).",
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
          "description": "Write cosecant as a reciprocal",
          "workingLatex": "\\csc\\theta = \\frac{1}{\\sin\\theta}",
          "explanation": "By definition \\(\\csc\\theta\\) is \\(1/\\sin\\theta\\). A common slip is confusing \\(\\csc\\) with \\(\\sec\\) (which is \\(1/\\cos\\))."
        },
        {
          "stepNumber": 2,
          "description": "State the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\) in radians, \\(\\sin\\theta\\approx\\theta\\) to leading order; the correction \\(-\\displaystyle\\frac{\\theta^3}{6}\\) is far smaller and is dropped."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the reciprocal",
          "workingLatex": "\\frac{1}{\\sin\\theta} \\approx \\frac{1}{\\theta}",
          "explanation": "Replacing \\(\\sin\\theta\\) by \\(\\theta\\) gives the reciprocal \\(\\displaystyle\\frac{1}{\\theta}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Check the behaviour as theta tends to zero",
          "workingLatex": "\\theta \\to 0^{+} \\implies \\frac{1}{\\theta} \\to +\\infty",
          "explanation": "With \\(\\theta>0\\) the result \\(\\displaystyle\\frac{1}{\\theta}\\) is a large positive value, which matches \\(\\csc\\theta\\to\\infty\\) as \\(\\theta\\to 0^{+}\\); this sanity check confirms the sign and the size are correct."
        }
      ],
      "finalAnswer": "\\(\\approx \\displaystyle\\frac{1}{\\theta}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-024",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 56",
    "difficulty": "Challenge",
    "questionText": "Approximate \\(\\cot\\theta\\) for small \\(\\theta > 0\\).",
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
          "description": "Write cotangent as a ratio",
          "workingLatex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}",
          "explanation": "By definition \\(\\cot\\theta=\\cos\\theta/\\sin\\theta\\) (equivalently \\(1/\\tan\\theta\\)). A common slip is to write \\(\\sin\\theta/\\cos\\theta\\), which is \\(\\tan\\theta\\) instead."
        },
        {
          "stepNumber": 2,
          "description": "State the small-angle approximations",
          "workingLatex": "\\cos\\theta \\approx 1, \\qquad \\sin\\theta \\approx \\theta",
          "explanation": "To leading order \\(\\cos\\theta\\approx 1\\) and \\(\\sin\\theta\\approx\\theta\\). We use \\(\\cos\\theta\\approx 1\\) rather than \\(1-\\displaystyle\\frac{\\theta^2}{2}\\) because the leading term is enough for the dominant behaviour."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the ratio",
          "workingLatex": "\\frac{\\cos\\theta}{\\sin\\theta} \\approx \\frac{1}{\\theta}",
          "explanation": "Putting \\(\\cos\\theta\\approx 1\\) on top and \\(\\sin\\theta\\approx\\theta\\) on the bottom gives \\(\\displaystyle\\frac{1}{\\theta}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Justify dropping the cosine correction",
          "workingLatex": "\\frac{1 - \\frac{\\theta^2}{2}}{\\theta} = \\frac{1}{\\theta} - \\frac{\\theta}{2}",
          "explanation": "Keeping the fuller \\(\\cos\\theta\\approx 1-\\displaystyle\\frac{\\theta^2}{2}\\) would add only a \\(-\\displaystyle\\frac{\\theta}{2}\\) term, which vanishes as \\(\\theta\\to 0^{+}\\) and is negligible beside the dominant \\(\\displaystyle\\frac{1}{\\theta}\\); so the leading approximation \\(\\displaystyle\\frac{1}{\\theta}\\) stands."
        }
      ],
      "finalAnswer": "\\(\\approx \\displaystyle\\frac{1}{\\theta}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-025",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 57",
    "difficulty": "Challenge",
    "questionText": "For small \\(\\theta\\), approximate \\(\\sin(\\pi + \\theta)\\).",
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
          "description": "Expand using the addition formula",
          "workingLatex": "\\sin(\\pi + \\theta) = \\sin\\pi\\cos\\theta + \\cos\\pi\\sin\\theta",
          "explanation": "Apply \\(\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B\\) with \\(A=\\pi\\) and \\(B=\\theta\\). A common slip is to assume \\(\\sin(\\pi+\\theta)=\\sin\\theta\\) without accounting for the shift."
        },
        {
          "stepNumber": 2,
          "description": "State the exact value of sin pi",
          "workingLatex": "\\sin\\pi = 0",
          "explanation": "This is an exact standard value, not an approximation; it will remove the \\(\\cos\\theta\\) term entirely."
        },
        {
          "stepNumber": 3,
          "description": "State the exact value of cos pi",
          "workingLatex": "\\cos\\pi = -1",
          "explanation": "This is the other exact standard value at \\(\\pi\\); the minus sign is what flips the result, so it must be carried carefully."
        },
        {
          "stepNumber": 4,
          "description": "Substitute the exact values",
          "workingLatex": "\\sin(\\pi + \\theta) = 0\\cdot\\cos\\theta + (-1)\\cdot\\sin\\theta",
          "explanation": "Replace \\(\\sin\\pi\\) and \\(\\cos\\pi\\) by their values from Steps 2 and 3, keeping the trigonometric factors of \\(\\theta\\) intact for now."
        },
        {
          "stepNumber": 5,
          "description": "Simplify to a single term",
          "workingLatex": "0\\cdot\\cos\\theta + (-1)\\cdot\\sin\\theta = -\\sin\\theta",
          "explanation": "The first product is \\(0\\) and the second is \\(-\\sin\\theta\\), so only the \\(-\\sin\\theta\\) term survives. The sign is the key point: shifting by \\(\\pi\\) flips the sine."
        },
        {
          "stepNumber": 6,
          "description": "Apply the small-angle approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\) in radians, \\(\\sin\\theta\\approx\\theta\\) to leading order, dropping the negligible \\(-\\displaystyle\\frac{\\theta^3}{6}\\) term."
        },
        {
          "stepNumber": 7,
          "description": "Carry the minus sign through",
          "workingLatex": "-\\sin\\theta \\approx -\\theta",
          "explanation": "Multiplying the approximation by \\(-1\\) gives \\(-\\theta\\). A common slip is dropping the minus sign and answering \\(+\\theta\\)."
        }
      ],
      "finalAnswer": "\\(\\approx -\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-026",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 58",
    "difficulty": "Challenge",
    "questionText": "For small \\(\\theta\\), approximate \\(\\cos(\\pi - \\theta)\\).",
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
          "description": "State the cosine subtraction formula",
          "workingLatex": "\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B",
          "explanation": "Write down the general compound-angle identity for the cosine of a difference before substituting. A common slip is to write \\(\\cos(A-B)=\\cos A-\\cos B\\), but cosine of a difference is not the difference of cosines."
        },
        {
          "stepNumber": 2,
          "description": "Identify the two angles to substitute",
          "workingLatex": "A=\\pi,\\qquad B=\\theta",
          "explanation": "The argument is \\(\\pi-\\theta\\), which matches \\(A-B\\) with \\(A=\\pi\\) and \\(B=\\theta\\). Choosing \\(A=\\pi\\) lets us use exact known values at \\(\\pi\\) for the cosine and sine."
        },
        {
          "stepNumber": 3,
          "description": "Apply the formula with these angles",
          "workingLatex": "\\cos(\\pi-\\theta)=\\cos\\pi\\cos\\theta+\\sin\\pi\\sin\\theta",
          "explanation": "Substitute \\(A=\\pi\\) and \\(B=\\theta\\) directly into the identity. No approximation has been used yet; this line is exact for every \\(\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Write the exact value of cosine at pi",
          "workingLatex": "\\cos\\pi=-1",
          "explanation": "This is an exact value, not an approximation, since \\(\\pi\\) is a fixed angle. Confusing \\(\\cos\\pi=-1\\) with \\(\\cos\\displaystyle\\frac{\\pi}{2}=0\\) is a frequent error."
        },
        {
          "stepNumber": 5,
          "description": "Write the exact value of sine at pi",
          "workingLatex": "\\sin\\pi=0",
          "explanation": "The sine of \\(\\pi\\) is exactly zero, so the entire second term will vanish. This is what allows the expression to collapse to a single cosine term."
        },
        {
          "stepNumber": 6,
          "description": "Substitute the two exact values",
          "workingLatex": "\\cos(\\pi-\\theta)=(-1)\\cos\\theta+(0)\\sin\\theta",
          "explanation": "Replace \\(\\cos\\pi\\) by \\(-1\\) and \\(\\sin\\pi\\) by \\(0\\). Keeping the bracketed coefficients makes the next cancellation explicit."
        },
        {
          "stepNumber": 7,
          "description": "Cancel the vanishing sine term",
          "workingLatex": "(-1)\\cos\\theta+(0)\\sin\\theta=-\\cos\\theta",
          "explanation": "The \\((0)\\sin\\theta\\) term is zero and drops out, leaving \\(-\\cos\\theta\\). This exact identity holds for all \\(\\theta\\), before any small-angle work."
        },
        {
          "stepNumber": 8,
          "description": "State the small-angle approximation for cosine",
          "workingLatex": "\\cos\\theta\\approx 1-\\frac{\\theta^2}{2}",
          "explanation": "For small \\(\\theta\\) in radians the quadratic approximation is used, obtained by keeping the constant and \\(\\theta^2\\) terms of the cosine series and dropping the \\(\\displaystyle\\frac{\\theta^4}{24}\\) and higher terms as negligible. Remember it is \\(1-\\displaystyle\\frac{\\theta^2}{2}\\), not \\(1-\\displaystyle\\frac{\\theta}{2}\\); the leading correction is quadratic."
        },
        {
          "stepNumber": 9,
          "description": "Substitute the approximation into the negated term",
          "workingLatex": "-\\cos\\theta\\approx -\\left(1-\\frac{\\theta^2}{2}\\right)",
          "explanation": "Place the whole approximation inside the brackets so the leading minus sign is applied to every term. Forgetting the bracket flips the sign of the \\(\\theta^2\\) term."
        },
        {
          "stepNumber": 10,
          "description": "Distribute the minus sign across the bracket",
          "workingLatex": "-\\left(1-\\frac{\\theta^2}{2}\\right)=-1+\\frac{\\theta^2}{2}",
          "explanation": "Multiplying through by \\(-1\\) turns \\(-1\\) into the constant and \\(-\\displaystyle\\frac{\\theta^2}{2}\\) into \\(+\\displaystyle\\frac{\\theta^2}{2}\\). The result is \\(-1\\) plus a small positive correction."
        },
        {
          "stepNumber": 11,
          "description": "Check the limit as theta tends to zero",
          "workingLatex": "\\theta\\to 0:\\quad -1+\\frac{\\theta^2}{2}\\to -1=\\cos\\pi",
          "explanation": "As \\(\\theta\\to 0\\) the correction term vanishes and the approximation returns \\(-1\\), which equals \\(\\cos\\pi\\). This sanity check confirms the constant term is correct."
        }
      ],
      "finalAnswer": "\\(\\approx -(1 - \\displaystyle\\frac{\\theta^2}{2}) = -1 + \\displaystyle\\frac{\\theta^2}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-027",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 25",
    "difficulty": "Standard",
    "questionText": "Calculate the percentage error in using 0.2 as an approximation for \\(\\sin 0.2\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the small-angle rule used",
          "workingLatex": "\\sin\\theta\\approx\\theta",
          "explanation": "The approximation comes from keeping only the leading term of the sine series and dropping the \\(-\\displaystyle\\frac{\\theta^3}{6}\\) and higher terms. This rule requires \\(\\theta\\) to be measured in radians."
        },
        {
          "stepNumber": 2,
          "description": "Apply the rule at theta equals 0.2",
          "workingLatex": "\\sin 0.2\\approx 0.2",
          "explanation": "Substituting \\(\\theta=0.2\\) gives the approximate value \\(0.2\\). The \\(0.2\\) must be treated as radians, not degrees, for this rule to apply."
        },
        {
          "stepNumber": 3,
          "description": "Find the true value on a calculator",
          "workingLatex": "\\sin 0.2 = 0.198669\\ldots",
          "explanation": "Evaluate \\(\\sin 0.2\\) in radian mode to several decimal places. A common slip is leaving the calculator in degree mode, which would give \\(\\sin 0.2^{\\circ}\\approx 0.00349\\)."
        },
        {
          "stepNumber": 4,
          "description": "Write the absolute error as a difference",
          "workingLatex": "\\text{error}=|\\,0.2-0.198669\\,|",
          "explanation": "The absolute error is the size of the gap between the approximation \\(0.2\\) and the true value. Taking the modulus guarantees a non-negative error regardless of which value is larger."
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the subtraction",
          "workingLatex": "|\\,0.2-0.198669\\,|=0.001331",
          "explanation": "Carrying out the subtraction gives \\(0.001331\\). Keep several decimals here so the percentage that follows is accurate."
        },
        {
          "stepNumber": 6,
          "description": "State the percentage error formula",
          "workingLatex": "\\text{percentage error}=\\frac{\\text{error}}{\\text{true value}}\\times 100",
          "explanation": "Percentage error divides by the true value \\(\\sin 0.2\\), not by the approximation \\(0.2\\). Dividing by the wrong quantity is the usual mistake."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the error and true value",
          "workingLatex": "\\text{percentage error}=\\frac{0.001331}{0.198669}\\times 100",
          "explanation": "Insert the absolute error on top and the true value \\(0.198669\\) on the bottom. The approximation \\(0.2\\) does not appear in the denominator."
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the division",
          "workingLatex": "\\frac{0.001331}{0.198669}=0.006698\\ldots",
          "explanation": "Perform the division first to get the error as a fraction of the true value. This pure ratio is about \\(0.0067\\)."
        },
        {
          "stepNumber": 9,
          "description": "Multiply by 100 and round",
          "workingLatex": "0.006698\\ldots\\times 100 = 0.6698\\ldots\\%\\approx 0.67\\%",
          "explanation": "Multiplying by 100 converts the ratio to a percentage, giving about \\(0.67\\%\\). The small value confirms the approximation is very good for this small angle."
        }
      ],
      "finalAnswer": "\\(\\approx 0.67\\%\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-028",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 26",
    "difficulty": "Standard",
    "questionText": "Calculate the % error in approximating \\(\\cos 0.1\\) as \\(1 - \\displaystyle\\frac{(0.1)^2}{2}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Square the angle inside the approximation",
          "workingLatex": "(0.1)^2=0.01",
          "explanation": "Compute \\((0.1)^2\\) first, following the order of operations. A common slip is to forget to square and treat the term as \\(\\displaystyle\\frac{0.1}{2}=0.05\\)."
        },
        {
          "stepNumber": 2,
          "description": "Halve the squared term",
          "workingLatex": "\\frac{(0.1)^2}{2}=\\frac{0.01}{2}=0.005",
          "explanation": "Divide the squared value \\(0.01\\) by 2 to get the quadratic correction \\(0.005\\). This is the amount subtracted from 1."
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the full approximation",
          "workingLatex": "1-\\frac{(0.1)^2}{2}=1-0.005=0.995",
          "explanation": "Subtract the correction from 1 to obtain the approximate value \\(0.995\\). This is the estimate whose accuracy we are testing."
        },
        {
          "stepNumber": 4,
          "description": "Find the true value on a calculator",
          "workingLatex": "\\cos 0.1 = 0.995004\\ldots",
          "explanation": "Use radian mode to evaluate \\(\\cos 0.1\\). Keep at least six decimal places because the error is extremely small and would otherwise round away."
        },
        {
          "stepNumber": 5,
          "description": "Write the absolute error as a difference",
          "workingLatex": "\\text{error}=|\\,0.995004-0.995\\,|",
          "explanation": "The absolute error is the size of the gap between the true value and the approximation. Taking the modulus keeps it non-negative."
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the subtraction",
          "workingLatex": "|\\,0.995004-0.995\\,|=4.17\\times 10^{-6}",
          "explanation": "The difference is around four millionths, so scientific notation keeps the significant figures clear. The dropped \\(\\displaystyle\\frac{\\theta^4}{24}\\) term is the source of this tiny error."
        },
        {
          "stepNumber": 7,
          "description": "State the percentage error formula",
          "workingLatex": "\\text{percentage error}=\\frac{\\text{error}}{\\cos 0.1}\\times 100",
          "explanation": "Divide the error by the true value \\(\\cos 0.1\\) and multiply by 100. Dividing by the approximation \\(0.995\\) gives essentially the same answer here since the values are so close."
        },
        {
          "stepNumber": 8,
          "description": "Substitute the error and true value",
          "workingLatex": "\\text{percentage error}=\\frac{4.17\\times 10^{-6}}{0.995}\\times 100",
          "explanation": "Insert the absolute error on top and \\(\\cos 0.1\\approx 0.995\\) on the bottom. The numerator is the four-millionths difference found above."
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the division",
          "workingLatex": "\\frac{4.17\\times 10^{-6}}{0.995}=4.19\\times 10^{-6}",
          "explanation": "Dividing by a number just below 1 barely changes the value, leaving about \\(4.19\\times 10^{-6}\\) as the ratio."
        },
        {
          "stepNumber": 10,
          "description": "Multiply by 100 and round",
          "workingLatex": "4.19\\times 10^{-6}\\times 100 = 4.19\\times 10^{-4}\\,\\%\\approx 0.00042\\%",
          "explanation": "Multiplying by 100 gives about \\(0.00042\\%\\), an extremely small error showing the quadratic cosine approximation is excellent at \\(\\theta=0.1\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 0.00042\\%\\) (extremely small).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-029",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 12",
    "difficulty": "Foundation",
    "questionText": "Use the small-angle approximation to solve \\(\\sin\\theta = 0.1\\) for small \\(\\theta\\).",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "equation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the small-angle rule for sine",
          "workingLatex": "\\sin\\theta\\approx\\theta",
          "explanation": "For small \\(\\theta\\) measured in radians, sine is approximately equal to the angle itself. This comes from keeping only the leading term of the sine series."
        },
        {
          "stepNumber": 2,
          "description": "Replace sine in the equation",
          "workingLatex": "\\sin\\theta=0.1\\ \\Rightarrow\\ \\theta\\approx 0.1",
          "explanation": "Substituting \\(\\sin\\theta\\approx\\theta\\) into \\(\\sin\\theta=0.1\\) gives \\(\\theta\\approx 0.1\\). The answer is in radians; do not convert to degrees."
        }
      ],
      "finalAnswer": "\\(\\theta \\approx 0.1\\) rad.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-030",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 27",
    "difficulty": "Challenge",
    "questionText": "In this question \\(\\theta\\) is measured in radians and is small.\n(a) Using the small-angle approximations, show that for small \\(\\theta\\) the expression \\(\\displaystyle f(\\theta)=\\displaystyle\\frac{1-\\cos 2\\theta}{\\theta\\,\\sin\\theta}\\) satisfies \\(f(\\theta)\\approx a\\), and state the value of the constant \\(a\\).\n(b) Use the approximation \\(\\cos\\theta\\approx 1-\\displaystyle\\frac{\\theta^2}{2}\\) to obtain an estimate, to 4 decimal places, of the smallest positive solution of \\(\\cos\\theta=0.96\\).\n(c) By keeping the next term \\(\\cos\\theta\\approx 1-\\displaystyle\\frac{\\theta^2}{2}+\\displaystyle\\frac{\\theta^4}{24}\\), explain whether your estimate in part (b) is an over-estimate or an under-estimate of the true solution.",
    "marks": 7,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "small-angle-approximation",
      "limit",
      "equation",
      "error-analysis",
      "cosine"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the cosine approximation to apply",
          "workingLatex": "\\cos x\\approx 1-\\frac{x^2}{2}",
          "explanation": "For the numerator we use the quadratic cosine approximation, which keeps the constant and \\(x^2\\) terms and drops the \\(\\displaystyle\\frac{x^4}{24}\\) and higher terms as negligible for small arguments."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the argument 2 theta",
          "workingLatex": "\\cos 2\\theta\\approx 1-\\frac{(2\\theta)^2}{2}",
          "explanation": "Here the argument is \\(x=2\\theta\\), so it is \\(2\\theta\\) as a whole that gets squared. Writing \\(2\\cdot\\displaystyle\\frac{\\theta^2}{2}\\) instead loses the factor of 4."
        },
        {
          "stepNumber": 3,
          "description": "Expand the squared bracket",
          "workingLatex": "(2\\theta)^2=4\\theta^2",
          "explanation": "Squaring \\(2\\theta\\) squares both the 2 and the \\(\\theta\\), giving \\(4\\theta^2\\). Keeping the bracket on \\((2\\theta)\\) before squaring avoids dropping the 4."
        },
        {
          "stepNumber": 4,
          "description": "Simplify the cosine approximation",
          "workingLatex": "\\cos 2\\theta\\approx 1-\\frac{4\\theta^2}{2}=1-2\\theta^2",
          "explanation": "Dividing \\(4\\theta^2\\) by 2 leaves \\(2\\theta^2\\), so the approximation for \\(\\cos 2\\theta\\) is \\(1-2\\theta^2\\)."
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the numerator",
          "workingLatex": "1-\\cos 2\\theta\\approx 1-(1-2\\theta^2)",
          "explanation": "Replace \\(\\cos 2\\theta\\) by its approximation, keeping the whole expression in a bracket. Forgetting the bracket and writing \\(1-1-2\\theta^2\\) gives the wrong sign."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the constants in the numerator",
          "workingLatex": "1-(1-2\\theta^2)=2\\theta^2",
          "explanation": "The constant \\(1\\) cancels with the \\(-1\\) inside the bracket, leaving an order \\(\\theta^2\\) numerator \\(2\\theta^2\\)."
        },
        {
          "stepNumber": 7,
          "description": "State the sine approximation for the denominator",
          "workingLatex": "\\sin\\theta\\approx\\theta",
          "explanation": "Use the leading-order sine approximation, dropping the \\(-\\displaystyle\\frac{\\theta^3}{6}\\) and higher terms, since they are negligible compared with \\(\\theta\\) for small \\(\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Approximate the denominator",
          "workingLatex": "\\theta\\,\\sin\\theta\\approx\\theta\\cdot\\theta=\\theta^2",
          "explanation": "The product of \\(\\theta\\) with \\(\\sin\\theta\\approx\\theta\\) is order \\(\\theta^2\\), matching the order of the numerator so a finite ratio survives."
        },
        {
          "stepNumber": 9,
          "description": "Form the ratio of the two approximations",
          "workingLatex": "f(\\theta)\\approx\\frac{2\\theta^2}{\\theta^2}",
          "explanation": "Place the numerator approximation over the denominator approximation. Both top and bottom are \\(O(\\theta^2)\\), which is exactly why the limit is finite rather than \\(0\\) or \\(\\infty\\)."
        },
        {
          "stepNumber": 10,
          "description": "Cancel the theta-squared factors",
          "workingLatex": "\\frac{2\\theta^2}{\\theta^2}=2",
          "explanation": "The \\(\\theta^2\\) factors cancel, leaving the constant \\(2\\). The higher-order terms we dropped do not affect this leading value."
        },
        {
          "stepNumber": 11,
          "description": "State the constant a",
          "workingLatex": "f(\\theta)\\approx 2\\ \\Rightarrow\\ a=2",
          "explanation": "So \\(f(\\theta)\\to 2\\) as \\(\\theta\\to 0\\), giving the constant \\(a=2\\)."
        },
        {
          "stepNumber": 12,
          "description": "Set up part (b) with the approximation",
          "workingLatex": "1-\\frac{\\theta^2}{2}=0.96",
          "explanation": "Replace \\(\\cos\\theta\\) by its quadratic approximation in \\(\\cos\\theta=0.96\\). Keep the constant \\(0.96\\) exact rather than rounding early."
        },
        {
          "stepNumber": 13,
          "description": "Move the constants to one side",
          "workingLatex": "\\frac{\\theta^2}{2}=1-0.96",
          "explanation": "Rearrange so the \\(\\theta\\)-term is isolated on the left. A sign slip that writes \\(0.96-1\\) gives a negative value and falsely suggests no real solution."
        },
        {
          "stepNumber": 14,
          "description": "Evaluate the right-hand side",
          "workingLatex": "\\frac{\\theta^2}{2}=0.04",
          "explanation": "Subtracting gives \\(1-0.96=0.04\\). This is the value of the halved square."
        },
        {
          "stepNumber": 15,
          "description": "Clear the denominator",
          "workingLatex": "\\theta^2=2\\times 0.04=0.08",
          "explanation": "Multiply both sides by 2 to remove the fraction. Forgetting this factor of 2 would halve the answer."
        },
        {
          "stepNumber": 16,
          "description": "Take the positive square root",
          "workingLatex": "\\theta=\\sqrt{0.08}=0.282842\\ldots",
          "explanation": "Take the positive root because the smallest positive solution is wanted; the negative root \\(-\\sqrt{0.08}\\) is rejected."
        },
        {
          "stepNumber": 17,
          "description": "Round to four decimal places",
          "workingLatex": "\\theta\\approx 0.2828",
          "explanation": "Rounding \\(0.282842\\ldots\\) to 4 decimal places gives \\(0.2828\\), the required estimate for part (b)."
        },
        {
          "stepNumber": 18,
          "description": "Write the quartic model for part (c)",
          "workingLatex": "\\cos\\theta\\approx 1-\\frac{\\theta^2}{2}+\\frac{\\theta^4}{24}",
          "explanation": "The next term \\(+\\displaystyle\\frac{\\theta^4}{24}\\) is positive, so it raises the modelled value of \\(\\cos\\theta\\) above the quadratic estimate at any nonzero \\(\\theta\\)."
        },
        {
          "stepNumber": 19,
          "description": "Compute the fourth power of theta",
          "workingLatex": "\\theta^4=(\\theta^2)^2=0.08^2=0.0064",
          "explanation": "Since \\(\\theta^2=0.08\\), squaring it gives \\(\\theta^4=0.0064\\). Using \\(\\theta^2\\) directly avoids re-rounding the square root."
        },
        {
          "stepNumber": 20,
          "description": "Evaluate the quartic correction term",
          "workingLatex": "\\frac{\\theta^4}{24}=\\frac{0.0064}{24}=0.000267\\ldots",
          "explanation": "Dividing \\(0.0064\\) by 24 gives the small positive correction \\(0.000267\\), the amount by which the quartic model exceeds the quadratic one."
        },
        {
          "stepNumber": 21,
          "description": "Evaluate the quartic model at the estimate",
          "workingLatex": "1-\\frac{0.08}{2}+\\frac{0.0064}{24}=0.96+0.000267=0.960267",
          "explanation": "The first two terms reproduce \\(0.96\\) and the quartic term adds \\(0.000267\\), so the more accurate \\(\\cos\\theta\\) at \\(\\theta=0.2828\\) is slightly above \\(0.96\\)."
        },
        {
          "stepNumber": 22,
          "description": "Compare with the target value",
          "workingLatex": "\\cos(0.2828)\\approx 0.96027>0.96",
          "explanation": "The estimated angle actually gives a cosine larger than \\(0.96\\), so it has not yet decreased all the way down to the target \\(0.96\\)."
        },
        {
          "stepNumber": 23,
          "description": "Use that cosine is decreasing",
          "workingLatex": "\\theta\\in(0,\\pi):\\ \\cos\\theta\\ \\text{decreasing}",
          "explanation": "On \\((0,\\pi)\\) cosine is a decreasing function. To bring the cosine down from \\(0.96027\\) to \\(0.96\\), the angle must increase."
        },
        {
          "stepNumber": 24,
          "description": "Conclude over- or under-estimate",
          "workingLatex": "\\theta_{\\text{true}}>0.2828\\ \\Rightarrow\\ \\text{under-estimate}",
          "explanation": "The true root lies beyond \\(0.2828\\), so part (b) under-estimates it. A check gives \\(\\arccos 0.96\\approx 0.2838\\), confirming the conclusion."
        }
      ],
      "finalAnswer": "(a) \\(a=2\\); (b) \\(\\theta\\approx 0.2828\\) rad; (c) it is an under-estimate, since including \\(+\\displaystyle\\frac{\\theta^4}{24}>0\\) makes \\(\\cos\\theta\\) larger, so the true root (\\(\\arccos 0.96\\approx 0.2838\\)) is slightly greater than \\(0.2828\\).",
      "commonMistakes": [
        "Using \\(2\\cdot\\displaystyle\\frac{\\theta^2}{2}\\) for \\(1-\\cos 2\\theta\\) instead of \\(\\displaystyle\\frac{(2\\theta)^2}{2}=2\\theta^2\\), losing the factor of 4.",
        "Rounding \\(0.96\\) or intermediate values early and missing the 4 d.p. estimate \\(0.2828\\).",
        "Getting the direction of the error wrong by ignoring that cosine is decreasing, so a higher \\(\\cos\\theta\\) means a larger root."
      ]
    }
  },
  {
    "id": "y2tf6-031",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 59",
    "difficulty": "Challenge",
    "questionText": "The period of a simple pendulum for small swings is \\(T \\approx 2\\pi\\sqrt{\\displaystyle\\frac{L}{g}}\\). Explain how the small-angle approximation \\(\\sin\\theta \\approx \\theta\\) makes this possible.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the restoring force along the arc",
          "workingLatex": "F = -mg\\sin\\theta",
          "explanation": "The component of gravity tangent to the arc of motion is \\(mg\\sin\\theta\\), and it points back toward the vertical equilibrium position. The minus sign records that the force opposes the displacement, so it is a restoring force."
        },
        {
          "stepNumber": 2,
          "description": "Write the exact equation of motion",
          "workingLatex": "mL\\ddot{\\theta} = -mg\\sin\\theta",
          "explanation": "Newton's second law along the arc uses the tangential acceleration \\(L\\ddot{\\theta}\\), since the bob moves on a circle of radius \\(L\\). The mass \\(m\\) appears on both sides and is ready to cancel."
        },
        {
          "stepNumber": 3,
          "description": "Cancel the mass to isolate the acceleration",
          "workingLatex": "\\ddot{\\theta} = -\\frac{g}{L}\\sin\\theta",
          "explanation": "Dividing both sides by \\(mL\\) removes the mass entirely, so the motion does not depend on \\(m\\). A common slip is forgetting the minus sign, which encodes the restoring force pulling back to equilibrium."
        },
        {
          "stepNumber": 4,
          "description": "Note this exact equation is non-linear",
          "workingLatex": "\\sin\\theta \\neq \\theta \\quad \\text{in general}",
          "explanation": "Because \\(\\sin\\theta\\) is a non-linear function of \\(\\theta\\), the exact equation has no simple closed-form solution. The danger is assuming you can solve it directly, but the period of the exact equation actually depends on the amplitude."
        },
        {
          "stepNumber": 5,
          "description": "State the small-angle approximation",
          "workingLatex": "\\theta \\text{ small (radians)} \\implies \\sin\\theta \\approx \\theta",
          "explanation": "For small swings \\(\\theta\\) (measured in radians) is close to \\(0\\), so we may replace \\(\\sin\\theta\\) by \\(\\theta\\), keeping only the leading term. Remember the angle must be in radians, otherwise the approximation fails."
        },
        {
          "stepNumber": 6,
          "description": "Identify the higher-order terms dropped",
          "workingLatex": "\\sin\\theta = \\theta - \\frac{\\theta^3}{6} + \\cdots",
          "explanation": "The full series shows the next term is \\(-\\displaystyle\\frac{\\theta^3}{6}\\). For small \\(\\theta\\) this cubic term is tiny compared with \\(\\theta\\), so dropping it introduces only a negligible error that vanishes as \\(\\theta \\to 0\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute to linearise the equation",
          "workingLatex": "\\ddot{\\theta} \\approx -\\frac{g}{L}\\theta",
          "explanation": "Replacing \\(\\sin\\theta\\) by \\(\\theta\\) turns the equation into a linear one in \\(\\theta\\). The right-hand side is now directly proportional to the displacement \\(\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Compare with the SHM template",
          "workingLatex": "\\ddot{\\theta} = -\\omega^2\\theta",
          "explanation": "This is exactly the form that defines simple harmonic motion, where acceleration is proportional to displacement and directed back toward equilibrium. Matching the two equations is the key move."
        },
        {
          "stepNumber": 9,
          "description": "Read off the angular frequency squared",
          "workingLatex": "\\omega^2 = \\frac{g}{L}",
          "explanation": "Comparing \\(\\ddot{\\theta} = -\\omega^2\\theta\\) with \\(\\ddot{\\theta} = -\\displaystyle\\frac{g}{L}\\theta\\) matches the coefficients of \\(\\theta\\). This identifies \\(\\omega^2\\) directly."
        },
        {
          "stepNumber": 10,
          "description": "Take the square root for the angular frequency",
          "workingLatex": "\\omega = \\sqrt{\\frac{g}{L}}",
          "explanation": "Taking the positive square root gives \\(\\omega\\). Crucially \\(\\omega\\) depends only on \\(g\\) and \\(L\\), not on the amplitude, which is what makes a constant period possible."
        },
        {
          "stepNumber": 11,
          "description": "Use the period-frequency relation",
          "workingLatex": "T = \\frac{2\\pi}{\\omega}",
          "explanation": "For any SHM the period is \\(T = \\displaystyle\\frac{2\\pi}{\\omega}\\). We now substitute the value of \\(\\omega\\) found above."
        },
        {
          "stepNumber": 12,
          "description": "Substitute and simplify the period",
          "workingLatex": "T = \\frac{2\\pi}{\\sqrt{g/L}} = 2\\pi\\sqrt{\\frac{L}{g}}",
          "explanation": "Dividing by \\(\\sqrt{g/L}\\) is the same as multiplying by \\(\\sqrt{L/g}\\), which flips the fraction under the root. A common slip is inverting it the wrong way, leaving \\(\\sqrt{g/L}\\) instead of \\(\\sqrt{L/g}\\)."
        }
      ],
      "finalAnswer": "The approximation \\(\\sin\\theta \\approx \\theta\\) linearises the exact equation \\(\\ddot{\\theta} = -\\displaystyle\\frac{g}{L}\\sin\\theta\\) into \\(\\ddot{\\theta} = -\\displaystyle\\frac{g}{L}\\theta\\), which is SHM with \\(\\omega = \\sqrt{\\displaystyle\\frac{g}{L}}\\) and hence amplitude-independent period \\(T = 2\\pi\\sqrt{\\displaystyle\\frac{L}{g}}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-032",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 28",
    "difficulty": "Standard",
    "questionText": "Using the small-angle approximation, justify \\(\\lim_{\\theta \\to 0}\\displaystyle\\frac{\\sin\\theta}{\\theta} = 1\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "limit"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the angle is small",
          "workingLatex": "\\theta \\to 0 \\implies \\theta \\text{ is small}",
          "explanation": "The limit drives \\(\\theta\\) toward \\(0\\), so \\(\\theta\\) becomes arbitrarily small. This is precisely the regime where the small-angle approximation applies."
        },
        {
          "stepNumber": 2,
          "description": "State the relevant approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta \\quad \\text{for small } \\theta",
          "explanation": "The leading-order small-angle approximation replaces \\(\\sin\\theta\\) by \\(\\theta\\). The angle must be in radians for this to hold."
        },
        {
          "stepNumber": 3,
          "description": "Note the higher-order terms dropped",
          "workingLatex": "\\sin\\theta = \\theta - \\frac{\\theta^3}{6} + \\cdots",
          "explanation": "The full expansion carries a \\(-\\displaystyle\\frac{\\theta^3}{6}\\) correction and higher powers. Dividing by \\(\\theta\\) later turns this into a \\(-\\displaystyle\\frac{\\theta^2}{6}\\) term, which vanishes as \\(\\theta \\to 0\\), so keeping only \\(\\theta\\) is justified."
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the numerator",
          "workingLatex": "\\frac{\\sin\\theta}{\\theta} \\approx \\frac{\\theta}{\\theta}",
          "explanation": "Replace \\(\\sin\\theta\\) in the numerator by \\(\\theta\\). A common slip is also altering the denominator, but it is already exactly \\(\\theta\\) and stays unchanged."
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\frac{\\theta}{\\theta} = 1 \\quad (\\theta \\neq 0)",
          "explanation": "For \\(\\theta\\) near \\(0\\) but not equal to \\(0\\), the \\(\\theta\\) cancels to give \\(1\\). We never divide by zero because a limit considers values approaching \\(0\\), not \\(0\\) itself."
        },
        {
          "stepNumber": 6,
          "description": "Take the limit",
          "workingLatex": "\\lim_{\\theta \\to 0}\\frac{\\sin\\theta}{\\theta} = 1",
          "explanation": "Since the dropped terms vanish as \\(\\theta \\to 0\\), the approximation becomes exact and the ratio tends to \\(1\\). This is the standard small-angle limit used throughout calculus."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-033",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 29",
    "difficulty": "Standard",
    "questionText": "Using small-angle approximation, show \\(\\lim_{\\theta \\to 0}\\displaystyle\\frac{1 - \\cos\\theta}{\\theta^2} = \\displaystyle\\frac{1}{2}\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "limit"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise a second-order approximation is needed",
          "workingLatex": "\\cos\\theta \\approx 1 \\;\\Rightarrow\\; 1-\\cos\\theta \\approx 0 \\;(\\text{too crude})",
          "explanation": "The crudest approximation \\(\\cos\\theta \\approx 1\\) makes the numerator vanish, giving an indeterminate \\(\\displaystyle\\frac{0}{0}\\). We therefore need the next term in the cosine expansion."
        },
        {
          "stepNumber": 2,
          "description": "State the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2} \\quad \\text{for small } \\theta",
          "explanation": "As \\(\\theta \\to 0\\) we use the second-order small-angle approximation for cosine. The leading correction is the \\(-\\displaystyle\\frac{\\theta^2}{2}\\) term, which we must keep here because the numerator would vanish otherwise."
        },
        {
          "stepNumber": 3,
          "description": "Note the higher-order term dropped",
          "workingLatex": "\\cos\\theta = 1 - \\frac{\\theta^2}{2} + \\frac{\\theta^4}{24} - \\cdots",
          "explanation": "The next term is \\(+\\displaystyle\\frac{\\theta^4}{24}\\). Once divided by \\(\\theta^2\\) it becomes \\(\\displaystyle\\frac{\\theta^2}{24}\\), which tends to \\(0\\) as \\(\\theta \\to 0\\), so it is safe to drop while keeping the \\(\\theta^2\\) term."
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the numerator",
          "workingLatex": "1 - \\cos\\theta \\approx 1 - \\left(1 - \\frac{\\theta^2}{2}\\right)",
          "explanation": "Substitute the approximation into \\(1 - \\cos\\theta\\). Mind the bracket: the minus sign distributes over both terms inside."
        },
        {
          "stepNumber": 5,
          "description": "Distribute the minus sign",
          "workingLatex": "1 - \\cos\\theta \\approx 1 - 1 + \\frac{\\theta^2}{2}",
          "explanation": "Removing the bracket flips the signs of both interior terms, turning \\(-\\left(1 - \\displaystyle\\frac{\\theta^2}{2}\\right)\\) into \\(-1 + \\displaystyle\\frac{\\theta^2}{2}\\). Forgetting to flip the second sign is a common slip."
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "1 - 1 + \\frac{\\theta^2}{2} = \\frac{\\theta^2}{2}",
          "explanation": "The constant \\(1\\) cancels, leaving \\(\\displaystyle\\frac{\\theta^2}{2}\\). If you had only used \\(\\cos\\theta \\approx 1\\), the numerator would wrongly be \\(0\\), which is why the quadratic term was essential."
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the quotient",
          "workingLatex": "\\frac{1 - \\cos\\theta}{\\theta^2} \\approx \\frac{\\theta^2/2}{\\theta^2}",
          "explanation": "Place the simplified numerator over \\(\\theta^2\\). Both numerator and denominator now carry the same power of \\(\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Cancel the common factor",
          "workingLatex": "\\frac{\\theta^2/2}{\\theta^2} = \\frac{1}{2} \\quad (\\theta \\neq 0)",
          "explanation": "The \\(\\theta^2\\) cancels, which is valid because the limit uses values \\(\\theta \\neq 0\\). This leaves the constant \\(\\displaystyle\\frac{1}{2}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Take the limit",
          "workingLatex": "\\lim_{\\theta \\to 0}\\frac{1-\\cos\\theta}{\\theta^2} = \\frac{1}{2}",
          "explanation": "The dropped \\(\\theta^4\\) term contributes \\(\\displaystyle\\frac{\\theta^2}{24} \\to 0\\), so the approximation becomes exact as \\(\\theta \\to 0\\), confirming the limit is \\(\\displaystyle\\frac{1}{2}\\)."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-034",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 60",
    "difficulty": "Challenge",
    "questionText": "A circular arc of radius 1 and angle \\(\\theta\\) has chord length \\(2\\sin(\\theta/2)\\). Show that for small \\(\\theta\\), the difference between the arc and chord is approximately \\(\\displaystyle\\frac{\\theta^3}{24}\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the arc length",
          "workingLatex": "\\text{arc} = r\\theta = 1 \\cdot \\theta = \\theta",
          "explanation": "Arc length is radius times angle in radians, and here \\(r = 1\\). A common slip is using degrees, but arc length \\(= r\\theta\\) requires radians."
        },
        {
          "stepNumber": 2,
          "description": "Form the difference to evaluate",
          "workingLatex": "\\text{arc} - \\text{chord} = \\theta - 2\\sin\\!\\left(\\frac{\\theta}{2}\\right)",
          "explanation": "Subtract the given chord length from the arc. We need an approximation accurate to order \\(\\theta^3\\), because the leading \\(\\theta\\) terms will cancel."
        },
        {
          "stepNumber": 3,
          "description": "Recall the sine series",
          "workingLatex": "\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\cdots",
          "explanation": "The sine function expands as an alternating series in odd powers of \\(x\\). We will keep terms up to \\(x^3\\) and discard \\(x^5\\) and beyond."
        },
        {
          "stepNumber": 4,
          "description": "Truncate sine to third order",
          "workingLatex": "\\sin x \\approx x - \\frac{x^3}{6}",
          "explanation": "The term after \\(x\\) is \\(-\\displaystyle\\frac{x^3}{6}\\), and we must keep it: using only \\(\\sin x \\approx x\\) would make the difference vanish, hiding the answer. The dropped \\(x^5\\) term becomes order \\(\\theta^5\\), negligible next to \\(\\theta^3\\)."
        },
        {
          "stepNumber": 5,
          "description": "Substitute \\(x = \\theta/2\\) into the linear term",
          "workingLatex": "x = \\frac{\\theta}{2} \\implies x \\to \\frac{\\theta}{2}",
          "explanation": "The chord uses the half-angle \\(\\displaystyle\\frac{\\theta}{2}\\), so we set \\(x = \\displaystyle\\frac{\\theta}{2}\\). The linear part of the expansion contributes \\(\\displaystyle\\frac{\\theta}{2}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Cube the half-angle",
          "workingLatex": "\\left(\\frac{\\theta}{2}\\right)^3 = \\frac{\\theta^3}{8}",
          "explanation": "The cube acts on both the \\(\\theta\\) and the \\(2\\), giving \\(\\displaystyle\\frac{\\theta^3}{2^3} = \\displaystyle\\frac{\\theta^3}{8}\\). A common slip is cubing only the \\(\\theta\\) and leaving the \\(2\\) untouched."
        },
        {
          "stepNumber": 7,
          "description": "Form the cubic term of the expansion",
          "workingLatex": "\\frac{(\\theta/2)^3}{6} = \\frac{\\theta^3/8}{6} = \\frac{\\theta^3}{48}",
          "explanation": "Dividing \\(\\displaystyle\\frac{\\theta^3}{8}\\) by \\(6\\) multiplies the denominator to \\(48\\). This is the cubic correction for the half-angle sine."
        },
        {
          "stepNumber": 8,
          "description": "Assemble the half-angle sine",
          "workingLatex": "\\sin\\!\\left(\\frac{\\theta}{2}\\right) \\approx \\frac{\\theta}{2} - \\frac{\\theta^3}{48}",
          "explanation": "Combining the linear and cubic parts gives the third-order approximation of \\(\\sin(\\theta/2)\\). This is what enters the chord length."
        },
        {
          "stepNumber": 9,
          "description": "Multiply the chord by 2",
          "workingLatex": "2\\sin\\!\\left(\\frac{\\theta}{2}\\right) \\approx 2\\left(\\frac{\\theta}{2} - \\frac{\\theta^3}{48}\\right)",
          "explanation": "The chord is twice the half-angle sine, so distribute the factor \\(2\\) across both terms. A common slip is forgetting to multiply the cubic term as well."
        },
        {
          "stepNumber": 10,
          "description": "Simplify the chord",
          "workingLatex": "2\\sin\\!\\left(\\frac{\\theta}{2}\\right) \\approx \\theta - \\frac{\\theta^3}{24}",
          "explanation": "The linear term becomes \\(2 \\cdot \\displaystyle\\frac{\\theta}{2} = \\theta\\), and \\(\\displaystyle\\frac{\\theta^3}{48}\\) doubles to \\(\\displaystyle\\frac{\\theta^3}{24}\\). This is the chord accurate to third order."
        },
        {
          "stepNumber": 11,
          "description": "Subtract chord from arc",
          "workingLatex": "\\theta - \\left(\\theta - \\frac{\\theta^3}{24}\\right) = \\theta - \\theta + \\frac{\\theta^3}{24}",
          "explanation": "The minus sign in front of the bracket flips the sign of \\(-\\displaystyle\\frac{\\theta^3}{24}\\) to \\(+\\displaystyle\\frac{\\theta^3}{24}\\). Distributing carefully avoids a sign error here."
        },
        {
          "stepNumber": 12,
          "description": "Cancel the leading terms",
          "workingLatex": "\\theta - \\theta + \\frac{\\theta^3}{24} = \\frac{\\theta^3}{24}",
          "explanation": "The leading \\(\\theta\\) terms cancel exactly, which is why the cubic term was needed. Only the \\(\\displaystyle\\frac{\\theta^3}{24}\\) term survives."
        },
        {
          "stepNumber": 13,
          "description": "State the result",
          "workingLatex": "\\text{arc} - \\text{chord} \\approx \\frac{\\theta^3}{24}",
          "explanation": "The difference grows like \\(\\theta^3\\), so it is very small for small \\(\\theta\\). This confirms the chord underestimates the arc by about \\(\\displaystyle\\frac{\\theta^3}{24}\\)."
        }
      ],
      "finalAnswer": "\\(\\approx \\displaystyle\\frac{\\theta^3}{24}\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-035",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 30",
    "difficulty": "Standard",
    "questionText": "Using small-angle approximation, approximate \\(\\sin 3°\\) to 4 dp.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the degree-radian conversion",
          "workingLatex": "180° = \\pi \\text{ rad} \\implies 1° = \\frac{\\pi}{180} \\text{ rad}",
          "explanation": "The small-angle approximation only works in radians, so we first need the conversion factor. Half a turn is \\(\\pi\\) radians, giving \\(1° = \\displaystyle\\frac{\\pi}{180}\\)."
        },
        {
          "stepNumber": 2,
          "description": "Convert 3 degrees to radians",
          "workingLatex": "3° = 3 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{180}",
          "explanation": "Multiply the angle in degrees by the conversion factor. A common slip is plugging \\(3\\) straight in, which is not a small angle in radians and gives nonsense."
        },
        {
          "stepNumber": 3,
          "description": "Simplify the fraction",
          "workingLatex": "\\frac{3\\pi}{180} = \\frac{\\pi}{60}",
          "explanation": "Cancel the common factor of \\(3\\) in numerator and denominator, since \\(180 \\div 3 = 60\\). This gives the tidy form \\(\\displaystyle\\frac{\\pi}{60}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the angle numerically",
          "workingLatex": "\\frac{\\pi}{60} = \\frac{3.14159265\\ldots}{60} = 0.0523598\\ldots",
          "explanation": "Dividing \\(\\pi \\approx 3.14159265\\) by \\(60\\) gives about \\(0.05236\\), which is small, so the approximation is valid. Keep extra digits now so rounding at the end is accurate."
        },
        {
          "stepNumber": 5,
          "description": "Apply the approximation",
          "workingLatex": "\\sin\\!\\left(\\frac{\\pi}{60}\\right) \\approx \\frac{\\pi}{60} = 0.0523598\\ldots",
          "explanation": "Using \\(\\sin\\theta \\approx \\theta\\) with \\(\\theta = \\displaystyle\\frac{\\pi}{60}\\) replaces the sine by the angle itself in radians. The dropped term is of order \\(\\theta^3 \\approx 1.4\\times 10^{-4}\\), too small to affect the 4th decimal much."
        },
        {
          "stepNumber": 6,
          "description": "Round to 4 decimal places",
          "workingLatex": "0.0523598\\ldots \\approx 0.0524",
          "explanation": "The fifth decimal is \\(5\\) (with more nonzero digits after), so the \\(3\\) in the fourth place rounds up to \\(4\\), giving \\(0.0524\\). The true value \\(\\sin 3° = 0.0523\\) differs only in the 4th place, showing the approximation is excellent."
        }
      ],
      "finalAnswer": "\\(\\approx 0.0524\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-036",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 31",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\cos 2°\\) to 6 dp.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "The small angle result for cosine is \\(\\cos\\theta \\approx 1 - \\displaystyle\\frac{\\theta^2}{2}\\). This comes from the series \\(\\cos\\theta = 1 - \\displaystyle\\frac{\\theta^2}{2} + \\displaystyle\\frac{\\theta^4}{24} - \\cdots\\), keeping only the first two terms."
        },
        {
          "stepNumber": 2,
          "description": "Note the radians requirement",
          "workingLatex": "\\theta \\text{ in radians}",
          "explanation": "The approximation is only valid when \\(\\theta\\) is measured in radians, because the series for \\(\\cos\\theta\\) is derived using radian measure. The angle \\(2°\\) is in degrees, so it must be converted first."
        },
        {
          "stepNumber": 3,
          "description": "Write the conversion factor",
          "workingLatex": "1° = \\frac{\\pi}{180} \\text{ rad}",
          "explanation": "There are \\(\\pi\\) radians in \\(180°\\), so one degree equals \\(\\displaystyle\\frac{\\pi}{180}\\) radians. This is the factor used to convert any angle from degrees to radians."
        },
        {
          "stepNumber": 4,
          "description": "Convert the angle to radians",
          "workingLatex": "2° = 2 \\times \\frac{\\pi}{180} = \\frac{2\\pi}{180} = \\frac{\\pi}{90}",
          "explanation": "Multiply the \\(2\\) by \\(\\displaystyle\\frac{\\pi}{180}\\) and simplify \\(\\displaystyle\\frac{2\\pi}{180}\\) to \\(\\displaystyle\\frac{\\pi}{90}\\). A common slip is to leave the angle as \\(2\\) and substitute that, which gives a wildly wrong answer."
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the angle as a decimal",
          "workingLatex": "\\theta = \\frac{\\pi}{90} \\approx 0.0349066",
          "explanation": "Working out \\(\\displaystyle\\frac{\\pi}{90}\\) gives roughly \\(0.0349066\\) radians. Keep plenty of decimal places here so rounding does not creep into the final 6 dp answer."
        },
        {
          "stepNumber": 6,
          "description": "Square the angle",
          "workingLatex": "\\theta^2 = 0.0349066^2 \\approx 0.00121847",
          "explanation": "Square the radian value to form \\(\\theta^2\\). Because \\(\\theta\\) is so small, \\(\\theta^2\\) is tiny, which is exactly why the approximation is accurate."
        },
        {
          "stepNumber": 7,
          "description": "Halve the squared term",
          "workingLatex": "\\frac{\\theta^2}{2} = \\frac{0.00121847}{2} \\approx 0.000609235",
          "explanation": "Divide by \\(2\\) to form the correction term \\(\\displaystyle\\frac{\\theta^2}{2}\\). Forgetting this division (using \\(\\theta^2\\) directly) doubles the correction and gives the wrong value."
        },
        {
          "stepNumber": 8,
          "description": "Subtract the correction from 1",
          "workingLatex": "1 - \\frac{\\theta^2}{2} \\approx 1 - 0.000609235 = 0.999390765",
          "explanation": "Subtract the correction from \\(1\\) to get the unrounded estimate \\(0.999390765\\). The estimate is just below \\(1\\), as expected for a cosine of a small positive angle."
        },
        {
          "stepNumber": 9,
          "description": "Check the dropped term is negligible",
          "workingLatex": "\\frac{\\theta^4}{24} = \\frac{0.0349066^4}{24} \\approx 6.2 \\times 10^{-8}",
          "explanation": "The next series term is \\(+\\displaystyle\\frac{\\theta^4}{24}\\), worth about \\(6.2 \\times 10^{-8}\\). This is smaller than half a unit in the sixth decimal place, so it cannot change the 6 dp answer and is safely dropped."
        },
        {
          "stepNumber": 10,
          "description": "Round to 6 decimal places",
          "workingLatex": "\\cos 2° \\approx 0.999391",
          "explanation": "Round \\(0.999390765\\) to 6 dp: the seventh digit is \\(7\\), so round up to give \\(0.999391\\). This matches the true value \\(\\cos 2° = 0.999391\\) to 6 dp."
        }
      ],
      "finalAnswer": "\\(\\approx 0.999391\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-037",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 13",
    "difficulty": "Foundation",
    "questionText": "Approximate \\(\\tan 1°\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the tangent approximation",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For a small angle in radians, \\(\\tan\\theta \\approx \\theta\\). This is the leading term of the expansion \\(\\tan\\theta = \\theta + \\displaystyle\\frac{\\theta^3}{3} + \\cdots\\)."
        },
        {
          "stepNumber": 2,
          "description": "Note the radians requirement",
          "workingLatex": "\\theta \\text{ in radians}",
          "explanation": "The rule \\(\\tan\\theta \\approx \\theta\\) only works when \\(\\theta\\) is in radians. Writing \\(\\tan 1° \\approx 1\\) by using the bare \\(1\\) is the most common mistake here."
        },
        {
          "stepNumber": 3,
          "description": "Write the conversion factor",
          "workingLatex": "1° = \\frac{\\pi}{180} \\text{ rad}",
          "explanation": "Since \\(180° = \\pi\\) radians, one degree is \\(\\displaystyle\\frac{\\pi}{180}\\) radians. This converts the angle into the form the approximation needs."
        },
        {
          "stepNumber": 4,
          "description": "Convert 1 degree to radians",
          "workingLatex": "1° = 1 \\times \\frac{\\pi}{180} = \\frac{\\pi}{180}",
          "explanation": "Multiplying \\(1\\) by \\(\\displaystyle\\frac{\\pi}{180}\\) gives \\(\\displaystyle\\frac{\\pi}{180}\\) radians, which is the value to substitute into the approximation."
        },
        {
          "stepNumber": 5,
          "description": "Apply the approximation",
          "workingLatex": "\\tan 1° \\approx \\frac{\\pi}{180}",
          "explanation": "Using \\(\\tan\\theta \\approx \\theta\\) with \\(\\theta = \\displaystyle\\frac{\\pi}{180}\\) gives \\(\\tan 1° \\approx \\displaystyle\\frac{\\pi}{180}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Evaluate as a decimal",
          "workingLatex": "\\frac{\\pi}{180} \\approx 0.01745",
          "explanation": "Working out \\(\\displaystyle\\frac{\\pi}{180}\\) gives about \\(0.01745\\). Since \\(\\theta\\) is so small, \\(\\tan\\theta\\) and \\(\\theta\\) agree to several decimal places."
        }
      ],
      "finalAnswer": "\\(\\approx 0.01745\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-038",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 61",
    "difficulty": "Challenge",
    "questionText": "Is 0.5 rad a small angle? Compare \\(\\sin 0.5\\) with 0.5 and calculate the % error.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "error"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what the approximation predicts",
          "workingLatex": "\\sin\\theta \\approx \\theta \\implies \\sin 0.5 \\approx 0.5",
          "explanation": "The small angle rule \\(\\sin\\theta \\approx \\theta\\) would estimate \\(\\sin 0.5 \\approx 0.5\\). We will test how good this is."
        },
        {
          "stepNumber": 2,
          "description": "Confirm the angle is in radians",
          "workingLatex": "\\theta = 0.5 \\text{ rad}",
          "explanation": "The value \\(0.5\\) is already given in radians, so no degree-to-radian conversion is needed before applying the approximation."
        },
        {
          "stepNumber": 3,
          "description": "Find the true value",
          "workingLatex": "\\sin 0.5 = 0.4794 \\text{ (4 dp)}",
          "explanation": "From a calculator in radian mode, \\(\\sin 0.5 = 0.4794\\). A common slip is to leave the calculator in degree mode, which would give \\(\\sin 0.5° = 0.0087\\), a completely different number."
        },
        {
          "stepNumber": 4,
          "description": "Compare estimate with truth",
          "workingLatex": "\\text{estimate} = 0.5, \\quad \\text{true} = 0.4794",
          "explanation": "The estimate \\(0.5\\) is larger than the true value \\(0.4794\\), so the approximation overshoots. This is because it drops the \\(-\\displaystyle\\frac{\\theta^3}{6}\\) term, which is no longer negligible at \\(\\theta = 0.5\\)."
        },
        {
          "stepNumber": 5,
          "description": "Estimate the size of the dropped term",
          "workingLatex": "\\frac{\\theta^3}{6} = \\frac{0.5^3}{6} = \\frac{0.125}{6} \\approx 0.0208",
          "explanation": "The first dropped term is \\(\\displaystyle\\frac{\\theta^3}{6} \\approx 0.0208\\), which closely matches the error we are about to compute. This confirms the cubic term is the main source of the discrepancy."
        },
        {
          "stepNumber": 6,
          "description": "Compute the absolute error",
          "workingLatex": "\\text{error} = 0.5 - 0.4794 = 0.0206",
          "explanation": "The error is the gap between the estimate \\(0.5\\) and the true value \\(0.4794\\). Its size \\(0.0206\\) agrees with the cubic-term estimate above, as expected."
        },
        {
          "stepNumber": 7,
          "description": "Form the percentage error",
          "workingLatex": "\\text{\\% error} = \\frac{0.0206}{0.4794} \\times 100",
          "explanation": "Percentage error is \\(\\displaystyle\\frac{\\text{error}}{\\text{true value}} \\times 100\\). Dividing by the true value \\(0.4794\\) (not by the estimate \\(0.5\\)) is the standard convention here."
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the division",
          "workingLatex": "\\frac{0.0206}{0.4794} \\approx 0.04297",
          "explanation": "Carrying out the division gives about \\(0.04297\\). This is the error expressed as a fraction of the true value, before scaling to a percentage."
        },
        {
          "stepNumber": 9,
          "description": "Scale to a percentage and interpret",
          "workingLatex": "0.04297 \\times 100 \\approx 4.3\\%",
          "explanation": "Multiplying by \\(100\\) gives about \\(4.3\\%\\). An error of several percent shows \\(0.5\\) rad is not really small, so the linear approximation is starting to break down."
        }
      ],
      "finalAnswer": "Error \\(\\approx 4.3\\%\\) — no longer very small.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-039",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 32",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\displaystyle\\frac{\\sin(2\\theta)}{\\sin(3\\theta)}\\) for small \\(\\theta\\).",
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
          "description": "State the base approximation",
          "workingLatex": "\\sin x \\approx x \\text{ for small } x",
          "explanation": "The small angle rule \\(\\sin x \\approx x\\) holds for any small argument \\(x\\) in radians, where \\(x\\) need not be \\(\\theta\\) itself but can be a multiple of it."
        },
        {
          "stepNumber": 2,
          "description": "Approximate the numerator",
          "workingLatex": "\\sin(2\\theta) \\approx 2\\theta",
          "explanation": "Using \\(\\sin x \\approx x\\) with \\(x = 2\\theta\\) gives \\(\\sin(2\\theta) \\approx 2\\theta\\). The whole argument \\(2\\theta\\) replaces \\(x\\), not just \\(\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Approximate the denominator",
          "workingLatex": "\\sin(3\\theta) \\approx 3\\theta",
          "explanation": "Likewise \\(\\sin(3\\theta) \\approx 3\\theta\\) using \\(x = 3\\theta\\). Both are valid because as \\(\\theta \\to 0\\), \\(2\\theta\\) and \\(3\\theta\\) are also small."
        },
        {
          "stepNumber": 4,
          "description": "Form the ratio",
          "workingLatex": "\\frac{\\sin(2\\theta)}{\\sin(3\\theta)} \\approx \\frac{2\\theta}{3\\theta}",
          "explanation": "Substitute both approximations into the fraction. The leading terms are what survive as \\(\\theta \\to 0\\)."
        },
        {
          "stepNumber": 5,
          "description": "Cancel the common factor",
          "workingLatex": "\\frac{2\\theta}{3\\theta} = \\frac{2\\cancel{\\theta}}{3\\cancel{\\theta}} = \\frac{2}{3}",
          "explanation": "The factor \\(\\theta\\) appears in both top and bottom, so it cancels (valid since \\(\\theta \\neq 0\\) as \\(\\theta \\to 0\\)), leaving \\(\\displaystyle\\frac{2}{3}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Interpret the finite limit",
          "workingLatex": "\\lim_{\\theta \\to 0} \\frac{\\sin(2\\theta)}{\\sin(3\\theta)} = \\frac{2}{3}",
          "explanation": "A common slip is to think the ratio is \\(0\\) because each part tends to \\(0\\). The cancellation shows that the ratio of two quantities both tending to zero can settle to a finite value, here \\(\\displaystyle\\frac{2}{3}\\)."
        }
      ],
      "finalAnswer": "\\(\\approx \\displaystyle\\frac{2}{3}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-040",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 62",
    "difficulty": "Challenge",
    "questionText": "For small \\(\\theta\\), approximate \\(\\displaystyle\\frac{\\tan(2\\theta) - \\sin(2\\theta)}{\\theta^3}\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Why first-order is not enough",
          "workingLatex": "\\tan(2\\theta) \\approx 2\\theta, \\quad \\sin(2\\theta) \\approx 2\\theta",
          "explanation": "At first order both equal \\(2\\theta\\), so their difference looks like \\(0\\). The \\(\\theta^3\\) in the denominator means we must keep the cubic terms to see the real behaviour."
        },
        {
          "stepNumber": 2,
          "description": "Recall the cubic expansions",
          "workingLatex": "\\tan x \\approx x + \\frac{x^3}{3}, \\quad \\sin x \\approx x - \\frac{x^3}{6}",
          "explanation": "We need the next term of each series: tangent adds \\(+\\displaystyle\\frac{x^3}{3}\\) while sine subtracts \\(-\\displaystyle\\frac{x^3}{6}\\). The opposite signs are what make the difference non-zero at cubic order."
        },
        {
          "stepNumber": 3,
          "description": "Cube the argument 2 theta",
          "workingLatex": "(2\\theta)^3 = 8\\theta^3",
          "explanation": "Both cubic terms use \\((2\\theta)^3\\). Cubing the whole \\(2\\theta\\) gives \\(2^3\\theta^3 = 8\\theta^3\\); forgetting to cube the \\(2\\) is a frequent slip."
        },
        {
          "stepNumber": 4,
          "description": "Expand tangent to order three",
          "workingLatex": "\\tan(2\\theta) \\approx 2\\theta + \\frac{(2\\theta)^3}{3} = 2\\theta + \\frac{8\\theta^3}{3}",
          "explanation": "Using \\(\\tan x \\approx x + \\displaystyle\\frac{x^3}{3}\\) with \\(x = 2\\theta\\), the cubic term is \\(\\displaystyle\\frac{8\\theta^3}{3}\\)."
        },
        {
          "stepNumber": 5,
          "description": "Expand sine to order three",
          "workingLatex": "\\sin(2\\theta) \\approx 2\\theta - \\frac{(2\\theta)^3}{6} = 2\\theta - \\frac{8\\theta^3}{6} = 2\\theta - \\frac{4\\theta^3}{3}",
          "explanation": "Using \\(\\sin x \\approx x - \\displaystyle\\frac{x^3}{6}\\) with \\(x = 2\\theta\\), the cubic term is \\(-\\displaystyle\\frac{8\\theta^3}{6}\\), which simplifies to \\(-\\displaystyle\\frac{4\\theta^3}{3}\\). Note sine subtracts its cubic term."
        },
        {
          "stepNumber": 6,
          "description": "Set up the subtraction",
          "workingLatex": "\\tan(2\\theta) - \\sin(2\\theta) \\approx \\left(2\\theta + \\frac{8\\theta^3}{3}\\right) - \\left(2\\theta - \\frac{4\\theta^3}{3}\\right)",
          "explanation": "Write the difference using both expansions in full, ready to remove the matching linear terms and combine the cubic ones."
        },
        {
          "stepNumber": 7,
          "description": "Cancel the linear terms",
          "workingLatex": "2\\theta - 2\\theta = 0",
          "explanation": "The leading \\(2\\theta\\) terms cancel exactly, which is why a first-order approximation gave \\(0\\). Only the cubic terms remain."
        },
        {
          "stepNumber": 8,
          "description": "Handle the double minus sign",
          "workingLatex": "-\\left(-\\frac{4\\theta^3}{3}\\right) = +\\frac{4\\theta^3}{3}",
          "explanation": "Subtracting the sine expansion means subtracting \\(-\\displaystyle\\frac{4\\theta^3}{3}\\), which adds it back in as \\(+\\displaystyle\\frac{4\\theta^3}{3}\\). Mishandling this double minus is the most common error."
        },
        {
          "stepNumber": 9,
          "description": "Combine the cubic terms",
          "workingLatex": "\\frac{8\\theta^3}{3} + \\frac{4\\theta^3}{3} = \\frac{12\\theta^3}{3} = 4\\theta^3",
          "explanation": "Adding the two cubic contributions over the common denominator \\(3\\) gives \\(\\displaystyle\\frac{12\\theta^3}{3} = 4\\theta^3\\). The leading behaviour of the difference is therefore cubic in \\(\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Divide by the denominator",
          "workingLatex": "\\frac{\\tan(2\\theta) - \\sin(2\\theta)}{\\theta^3} \\approx \\frac{4\\theta^3}{\\theta^3} = 4",
          "explanation": "Dividing by \\(\\theta^3\\) cancels the \\(\\theta^3\\), leaving \\(4\\). Higher-order terms (in \\(\\theta^5\\)) vanish as \\(\\theta \\to 0\\), so the limit is exactly \\(4\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 4\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-041",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 33",
    "difficulty": "Challenge",
    "questionText": "Throughout, \\(\\theta\\) is small and measured in radians.\n(a) Show that for small \\(\\theta\\), \\((1 - \\cos 4\\theta)(1 + \\cos 2\\theta) \\approx a\\theta^{n}\\), stating the exact values of the constants \\(a\\) and \\(n\\).\n(b) Hence find the exact value of \\(\\displaystyle \\lim_{\\theta \\to 0} \\displaystyle\\frac{(1 - \\cos 4\\theta)(1 + \\cos 2\\theta)}{\\theta \\sin 4\\theta}\\).",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify",
      "compound-expression",
      "limit",
      "cosine-approximation",
      "leading-order"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the cosine approximation.",
          "workingLatex": "\\cos x \\approx 1 - \\frac{x^2}{2}",
          "explanation": "For small \\(x\\) measured in radians the standard quadratic approximation applies. We will substitute different multiples of \\(\\theta\\) for \\(x\\); the key is to square the whole argument each time."
        },
        {
          "stepNumber": 2,
          "description": "Substitute the argument four theta.",
          "workingLatex": "\\cos 4\\theta \\approx 1 - \\frac{(4\\theta)^2}{2}",
          "explanation": "Here \\(x = 4\\theta\\), so the squared term is \\((4\\theta)^2\\), not \\(4\\theta^2\\). A common slip is squaring only \\(\\theta\\) and forgetting the factor \\(4\\)."
        },
        {
          "stepNumber": 3,
          "description": "Square the argument.",
          "workingLatex": "(4\\theta)^2 = 16\\theta^2",
          "explanation": "Squaring a product squares each factor: \\(4^2 = 16\\) and \\(\\theta^2\\) stays. Forgetting to square the \\(4\\) is the single most common error here."
        },
        {
          "stepNumber": 4,
          "description": "Halve to finish the cosine.",
          "workingLatex": "\\cos 4\\theta \\approx 1 - \\frac{16\\theta^2}{2} = 1 - 8\\theta^2",
          "explanation": "Dividing \\(16\\theta^2\\) by \\(2\\) gives \\(8\\theta^2\\). So the second-order behaviour of \\(\\cos 4\\theta\\) is \\(1 - 8\\theta^2\\)."
        },
        {
          "stepNumber": 5,
          "description": "Form one minus that cosine.",
          "workingLatex": "1 - \\cos 4\\theta \\approx 1 - (1 - 8\\theta^2)",
          "explanation": "Subtract the whole approximation from \\(1\\). Keep the bracket so the sign of every term is tracked correctly."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the constant terms.",
          "workingLatex": "1 - (1 - 8\\theta^2) = 8\\theta^2",
          "explanation": "The two \\(1\\)s cancel and the double minus on \\(8\\theta^2\\) becomes a plus, leaving the leading quadratic term \\(8\\theta^2\\). This factor is of order \\(\\theta^2\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the argument two theta.",
          "workingLatex": "\\cos 2\\theta \\approx 1 - \\frac{(2\\theta)^2}{2}",
          "explanation": "Now \\(x = 2\\theta\\), so we form \\((2\\theta)^2\\). Again square the whole argument including the coefficient \\(2\\)."
        },
        {
          "stepNumber": 8,
          "description": "Square the argument.",
          "workingLatex": "(2\\theta)^2 = 4\\theta^2",
          "explanation": "Here \\(2^2 = 4\\), so \\((2\\theta)^2 = 4\\theta^2\\). Squaring the coefficient is again the step to watch."
        },
        {
          "stepNumber": 9,
          "description": "Halve to finish the cosine.",
          "workingLatex": "\\cos 2\\theta \\approx 1 - \\frac{4\\theta^2}{2} = 1 - 2\\theta^2",
          "explanation": "Halving \\(4\\theta^2\\) gives \\(2\\theta^2\\). The constant part of this factor is \\(1\\), and the correction is \\(-2\\theta^2\\)."
        },
        {
          "stepNumber": 10,
          "description": "Form one plus that cosine.",
          "workingLatex": "1 + \\cos 2\\theta \\approx 1 + (1 - 2\\theta^2)",
          "explanation": "Add the approximation to \\(1\\). Unlike the first factor, here the constants will reinforce rather than cancel."
        },
        {
          "stepNumber": 11,
          "description": "Add the constant terms.",
          "workingLatex": "1 + (1 - 2\\theta^2) = 2 - 2\\theta^2",
          "explanation": "The constants add to \\(2\\) rather than cancelling. The leading behaviour of this factor is the constant \\(2\\); the \\(-2\\theta^2\\) is a small correction, which is why treating \\(1 + \\cos 2\\theta\\) as small would be wrong."
        },
        {
          "stepNumber": 12,
          "description": "Multiply the two factors.",
          "workingLatex": "(1 - \\cos 4\\theta)(1 + \\cos 2\\theta) \\approx 8\\theta^2 (2 - 2\\theta^2)",
          "explanation": "Substitute both approximations into the product, keeping the bracket so both the leading and higher-order parts stay visible."
        },
        {
          "stepNumber": 13,
          "description": "Expand the leading term.",
          "workingLatex": "8\\theta^2 \\times 2 = 16\\theta^2",
          "explanation": "Distribute \\(8\\theta^2\\) over the first term of the bracket. This is the lowest-power, dominant term."
        },
        {
          "stepNumber": 14,
          "description": "Expand the correction term.",
          "workingLatex": "8\\theta^2 \\times (-2\\theta^2) = -16\\theta^4",
          "explanation": "Distribute \\(8\\theta^2\\) over the second term, giving an order-\\(\\theta^4\\) term."
        },
        {
          "stepNumber": 15,
          "description": "Write the full expansion.",
          "workingLatex": "8\\theta^2 (2 - 2\\theta^2) = 16\\theta^2 - 16\\theta^4",
          "explanation": "Collecting the two products gives a \\(\\theta^2\\) term and a \\(\\theta^4\\) term."
        },
        {
          "stepNumber": 16,
          "description": "Keep only the leading order.",
          "workingLatex": "16\\theta^2 - 16\\theta^4 \\approx 16\\theta^2",
          "explanation": "As \\(\\theta \\to 0\\) the ratio of the dropped term to the kept term is \\(\\theta^2 \\to 0\\), so the \\(\\theta^4\\) term is negligible and is discarded. Keeping it would not change the leading-order answer."
        },
        {
          "stepNumber": 17,
          "description": "State the constants a and n.",
          "workingLatex": "a = 16, \\quad n = 2",
          "explanation": "Matching \\(16\\theta^2\\) to the form \\(a\\theta^n\\) gives \\(a = 16\\) and \\(n = 2\\), completing part (a)."
        },
        {
          "stepNumber": 18,
          "description": "Write the limit to evaluate.",
          "workingLatex": "L = \\lim_{\\theta \\to 0} \\frac{(1 - \\cos 4\\theta)(1 + \\cos 2\\theta)}{\\theta \\sin 4\\theta}",
          "explanation": "We now use the part (a) numerator and approximate the denominator to the same order so the powers of \\(\\theta\\) match."
        },
        {
          "stepNumber": 19,
          "description": "Recall the sine approximation.",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "For small \\(x\\) in radians, \\(\\sin x \\approx x\\) to leading order. We apply it with \\(x = 4\\theta\\)."
        },
        {
          "stepNumber": 20,
          "description": "Approximate sine of four theta.",
          "workingLatex": "\\sin 4\\theta \\approx 4\\theta",
          "explanation": "Here \\(x = 4\\theta\\). A frequent error is writing \\(\\sin 4\\theta \\approx \\theta\\) and dropping the factor \\(4\\)."
        },
        {
          "stepNumber": 21,
          "description": "Build the full denominator.",
          "workingLatex": "\\theta \\sin 4\\theta \\approx \\theta (4\\theta) = 4\\theta^2",
          "explanation": "Multiply the leading factor \\(\\theta\\) by \\(\\sin 4\\theta \\approx 4\\theta\\). The denominator is of order \\(\\theta^2\\), matching the order of the numerator."
        },
        {
          "stepNumber": 22,
          "description": "Substitute numerator and denominator.",
          "workingLatex": "\\frac{(1 - \\cos 4\\theta)(1 + \\cos 2\\theta)}{\\theta \\sin 4\\theta} \\approx \\frac{16\\theta^2}{4\\theta^2}",
          "explanation": "Use the part (a) result on top and the previous step on the bottom. Both are constant multiples of \\(\\theta^2\\), so the ratio tends to a finite limit."
        },
        {
          "stepNumber": 23,
          "description": "Cancel the theta squared factors.",
          "workingLatex": "\\frac{16\\theta^2}{4\\theta^2} = \\frac{16}{4}",
          "explanation": "The common factor \\(\\theta^2\\) cancels exactly. This is valid because \\(\\theta \\neq 0\\) on the approach to the limit, so we never divide by zero."
        },
        {
          "stepNumber": 24,
          "description": "Evaluate the constant.",
          "workingLatex": "\\frac{16}{4} = 4",
          "explanation": "The remaining ratio of constants is \\(4\\)."
        },
        {
          "stepNumber": 25,
          "description": "State the limit.",
          "workingLatex": "\\lim_{\\theta \\to 0} \\frac{(1 - \\cos 4\\theta)(1 + \\cos 2\\theta)}{\\theta \\sin 4\\theta} = 4",
          "explanation": "Since the simplified expression equals the constant \\(4\\) independently of \\(\\theta\\), the limit is \\(4\\). Do not stop at the unsimplified fraction; the answer is a single number."
        }
      ],
      "finalAnswer": "(a) \\(a = 16,\\ n = 2\\); \\quad (b) \\(\\displaystyle \\lim_{\\theta \\to 0} \\displaystyle\\frac{(1 - \\cos 4\\theta)(1 + \\cos 2\\theta)}{\\theta \\sin 4\\theta} = 4\\).",
      "commonMistakes": [
        "Forgetting to square the multiplier, e.g. using \\(1 - \\cos 4\\theta \\approx 2\\theta^2\\) instead of \\(8\\theta^2\\).",
        "Treating \\(1 + \\cos 2\\theta\\) as small \\((\\approx 2\\theta^2)\\) rather than tending to the constant \\(2\\).",
        "Writing \\(\\sin 4\\theta \\approx \\theta\\), giving a denominator of \\(\\theta^2\\) and an incorrect limit of \\(16\\)."
      ]
    }
  },
  {
    "id": "y2tf6-042",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 34",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\displaystyle\\frac{\\sin(\\theta^2)}{\\theta}\\) for small \\(\\theta\\).",
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
          "description": "Recall the sine approximation.",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "For any small argument \\(x\\) in radians, \\(\\sin x \\approx x\\). The argument here is \\(\\theta^2\\), not \\(\\theta\\)."
        },
        {
          "stepNumber": 2,
          "description": "Check the argument is small.",
          "workingLatex": "\\theta \\text{ small} \\implies \\theta^2 \\text{ small}",
          "explanation": "Since \\(\\theta\\) is small, its square \\(\\theta^2\\) is even smaller, so the approximation is valid with \\(x = \\theta^2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Apply the approximation.",
          "workingLatex": "\\sin(\\theta^2) \\approx \\theta^2",
          "explanation": "Setting \\(x = \\theta^2\\) gives \\(\\sin(\\theta^2) \\approx \\theta^2\\). A common slip is writing \\(\\sin(\\theta^2) \\approx \\theta\\), dropping a power of \\(\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the fraction.",
          "workingLatex": "\\frac{\\sin(\\theta^2)}{\\theta} \\approx \\frac{\\theta^2}{\\theta}",
          "explanation": "Replace the numerator by its approximation while leaving the denominator \\(\\theta\\) unchanged."
        },
        {
          "stepNumber": 5,
          "description": "Cancel one factor of theta.",
          "workingLatex": "\\frac{\\theta^2}{\\theta} = \\theta",
          "explanation": "Dividing \\(\\theta^2\\) by \\(\\theta\\) leaves \\(\\theta\\), valid since \\(\\theta \\neq 0\\). The expression behaves like \\(\\theta\\) for small \\(\\theta\\), so it tends to \\(0\\)."
        }
      ],
      "finalAnswer": "\\(\\approx \\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-043",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 35",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\cos^2\\theta - \\sin^2\\theta\\) for small \\(\\theta\\) to order \\(\\theta^2\\).",
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
          "description": "Recall the cosine approximation.",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "We need cosine to order \\(\\theta^2\\), so we keep the quadratic term rather than just \\(\\cos\\theta \\approx 1\\)."
        },
        {
          "stepNumber": 2,
          "description": "Square the cosine approximation.",
          "workingLatex": "\\cos^2\\theta \\approx \\left(1 - \\frac{\\theta^2}{2}\\right)^2",
          "explanation": "Squaring the bracket will produce a constant, a \\(\\theta^2\\) term and a \\(\\theta^4\\) term."
        },
        {
          "stepNumber": 3,
          "description": "Expand the square fully.",
          "workingLatex": "\\left(1 - \\frac{\\theta^2}{2}\\right)^2 = 1 - \\theta^2 + \\frac{\\theta^4}{4}",
          "explanation": "Using \\((a-b)^2 = a^2 - 2ab + b^2\\): the cross term is \\(2 \\times 1 \\times \\displaystyle\\frac{\\theta^2}{2} = \\theta^2\\) and the last term is \\(\\displaystyle\\frac{\\theta^4}{4}\\)."
        },
        {
          "stepNumber": 4,
          "description": "Drop the higher-order term.",
          "workingLatex": "1 - \\theta^2 + \\frac{\\theta^4}{4} \\approx 1 - \\theta^2",
          "explanation": "The \\(\\displaystyle\\frac{\\theta^4}{4}\\) term is beyond order \\(\\theta^2\\), so to the required order it is discarded."
        },
        {
          "stepNumber": 5,
          "description": "Recall the sine approximation.",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "To leading order \\(\\sin\\theta \\approx \\theta\\), which is accurate to order \\(\\theta^2\\) once squared."
        },
        {
          "stepNumber": 6,
          "description": "Square the sine approximation.",
          "workingLatex": "\\sin^2\\theta \\approx \\theta^2",
          "explanation": "Squaring \\(\\theta\\) gives \\(\\theta^2\\). This is exact to order \\(\\theta^2\\); the first correction would be order \\(\\theta^4\\)."
        },
        {
          "stepNumber": 7,
          "description": "Subtract the two results.",
          "workingLatex": "\\cos^2\\theta - \\sin^2\\theta \\approx (1 - \\theta^2) - \\theta^2",
          "explanation": "Substitute both approximations into the difference, keeping all terms up to order \\(\\theta^2\\)."
        },
        {
          "stepNumber": 8,
          "description": "Collect the theta squared terms.",
          "workingLatex": "(1 - \\theta^2) - \\theta^2 = 1 - 2\\theta^2",
          "explanation": "Combine \\(-\\theta^2 - \\theta^2 = -2\\theta^2\\). This matches the double-angle identity \\(\\cos^2\\theta - \\sin^2\\theta = \\cos 2\\theta \\approx 1 - 2\\theta^2\\), a useful check."
        }
      ],
      "finalAnswer": "\\(\\approx 1 - 2\\theta^2\\) (which is \\(\\cos 2\\theta\\)).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-044",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 36",
    "difficulty": "Standard",
    "questionText": "Approximate \\(1 + \\sin\\theta \\cdot \\tan\\theta\\) for small \\(\\theta\\).",
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
          "description": "Approximate the sine factor.",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\) in radians, \\(\\sin\\theta \\approx \\theta\\) to leading order."
        },
        {
          "stepNumber": 2,
          "description": "Approximate the tangent factor.",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "Likewise \\(\\tan\\theta \\approx \\theta\\) for small \\(\\theta\\). Both factors are therefore of order \\(\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the product.",
          "workingLatex": "\\sin\\theta \\cdot \\tan\\theta \\approx \\theta \\cdot \\theta",
          "explanation": "Replace each trig factor in the product by \\(\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Multiply the theta factors.",
          "workingLatex": "\\theta \\cdot \\theta = \\theta^2",
          "explanation": "The product of two order-\\(\\theta\\) quantities is order \\(\\theta^2\\)."
        },
        {
          "stepNumber": 5,
          "description": "Add the constant term back.",
          "workingLatex": "1 + \\sin\\theta \\cdot \\tan\\theta \\approx 1 + \\theta^2",
          "explanation": "The constant \\(1\\) is unchanged and the product contributes an order-\\(\\theta^2\\) correction, giving \\(1 + \\theta^2\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 1 + \\theta^2\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-045",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 63",
    "difficulty": "Challenge",
    "questionText": "Show that for small \\(\\theta\\) (in radians), \\(\\cos(\\theta + \\phi) \\approx \\cos\\phi - \\theta\\sin\\phi\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the cosine addition formula.",
          "workingLatex": "\\cos(\\theta + \\phi) = \\cos\\theta\\cos\\phi - \\sin\\theta\\sin\\phi",
          "explanation": "Use the exact compound-angle identity for \\(\\cos(A+B)\\) with \\(A = \\theta\\) and \\(B = \\phi\\). Note the minus sign between the two products, a frequent source of error."
        },
        {
          "stepNumber": 2,
          "description": "Note phi is fixed, not small.",
          "workingLatex": "\\cos\\phi, \\ \\sin\\phi \\text{ are constants}",
          "explanation": "Only \\(\\theta\\) is small; \\(\\phi\\) is a fixed angle, so \\(\\cos\\phi\\) and \\(\\sin\\phi\\) are left exact and are not approximated."
        },
        {
          "stepNumber": 3,
          "description": "Approximate cosine of small theta.",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "Start from the full quadratic approximation so we can see which terms are kept and which are dropped."
        },
        {
          "stepNumber": 4,
          "description": "Reduce cosine to first order.",
          "workingLatex": "\\cos\\theta \\approx 1",
          "explanation": "We are working to first order in \\(\\theta\\). The \\(-\\displaystyle\\frac{\\theta^2}{2}\\) term is order \\(\\theta^2\\), negligible beside the order-\\(\\theta\\) terms we keep, so we drop it."
        },
        {
          "stepNumber": 5,
          "description": "Approximate sine of small theta.",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\), \\(\\sin\\theta \\approx \\theta\\) to first order, which is the order we retain."
        },
        {
          "stepNumber": 6,
          "description": "Substitute into the first product.",
          "workingLatex": "\\cos\\theta\\cos\\phi \\approx (1)\\cos\\phi = \\cos\\phi",
          "explanation": "Replace \\(\\cos\\theta\\) by \\(1\\); the first product reduces to the constant \\(\\cos\\phi\\)."
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the second product.",
          "workingLatex": "\\sin\\theta\\sin\\phi \\approx (\\theta)\\sin\\phi = \\theta\\sin\\phi",
          "explanation": "Replace \\(\\sin\\theta\\) by \\(\\theta\\); the second product becomes \\(\\theta\\sin\\phi\\), of order \\(\\theta\\)."
        },
        {
          "stepNumber": 8,
          "description": "Combine the two products.",
          "workingLatex": "\\cos(\\theta + \\phi) \\approx \\cos\\phi - \\theta\\sin\\phi",
          "explanation": "Subtracting the second product from the first gives exactly the stated result, completing the proof."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-046",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 64",
    "difficulty": "Challenge",
    "questionText": "Show that for small \\(\\theta\\), \\(\\sin(\\theta + \\phi) \\approx \\sin\\phi + \\theta\\cos\\phi\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the compound-angle identity.",
          "workingLatex": "\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B",
          "explanation": "Begin from the exact addition formula for sine, valid for any angles \\(A\\) and \\(B\\). No approximation is involved at this stage."
        },
        {
          "stepNumber": 2,
          "description": "Identify the two angles.",
          "workingLatex": "A = \\theta, \\qquad B = \\phi",
          "explanation": "We take the variable small angle as \\(A=\\theta\\) and the fixed reference angle as \\(B=\\phi\\). Only \\(\\theta\\) will be treated as small."
        },
        {
          "stepNumber": 3,
          "description": "Substitute the angles into the identity.",
          "workingLatex": "\\sin(\\theta + \\phi) = \\sin\\theta\\cos\\phi + \\cos\\theta\\sin\\phi",
          "explanation": "Replacing \\(A\\) and \\(B\\) gives the exact expansion. The angle \\(\\phi\\) is held constant, so \\(\\cos\\phi\\) and \\(\\sin\\phi\\) are exact fixed numbers."
        },
        {
          "stepNumber": 4,
          "description": "State the small-angle rule for sine.",
          "workingLatex": "\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6} + \\cdots \\;\\approx\\; \\theta",
          "explanation": "Because \\(\\theta\\) is small and measured in radians, \\(\\sin\\theta\\approx\\theta\\); the dropped term is \\(O(\\theta^3)\\), negligible to first order. A common slip is to apply this in degrees, where it fails."
        },
        {
          "stepNumber": 5,
          "description": "State the small-angle rule for cosine.",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2} + \\cdots",
          "explanation": "The cosine expansion begins at \\(1\\) with the first correction being the \\(\\displaystyle\\frac{\\theta^2}{2}\\) term. We write it out fully before deciding what to keep."
        },
        {
          "stepNumber": 6,
          "description": "Truncate cosine to first order.",
          "workingLatex": "\\cos\\theta \\approx 1",
          "explanation": "We want the result correct only to first order in \\(\\theta\\), so the \\(\\displaystyle\\frac{\\theta^2}{2}\\) term is dropped: it is second order and would multiply \\(\\sin\\phi\\) to give a discardable \\(O(\\theta^2)\\) contribution."
        },
        {
          "stepNumber": 7,
          "description": "Substitute the sine approximation.",
          "workingLatex": "\\sin\\theta\\cos\\phi + \\cos\\theta\\sin\\phi \\approx \\theta\\cos\\phi + \\cos\\theta\\sin\\phi",
          "explanation": "Replace \\(\\sin\\theta\\) by \\(\\theta\\) in the first term. The factor \\(\\cos\\phi\\) is an exact constant and is left untouched."
        },
        {
          "stepNumber": 8,
          "description": "Substitute the cosine approximation.",
          "workingLatex": "\\theta\\cos\\phi + \\cos\\theta\\sin\\phi \\approx \\theta\\cos\\phi + (1)\\sin\\phi",
          "explanation": "Replace \\(\\cos\\theta\\) by \\(1\\) in the second term. The factor \\(\\sin\\phi\\) is again an exact constant."
        },
        {
          "stepNumber": 9,
          "description": "Simplify the unit factor.",
          "workingLatex": "\\theta\\cos\\phi + (1)\\sin\\phi = \\theta\\cos\\phi + \\sin\\phi",
          "explanation": "Multiplying \\(\\sin\\phi\\) by \\(1\\) leaves it unchanged. No terms remain to combine at this stage."
        },
        {
          "stepNumber": 10,
          "description": "Reorder terms and conclude.",
          "workingLatex": "\\sin(\\theta + \\phi) \\approx \\sin\\phi + \\theta\\cos\\phi",
          "explanation": "Writing the constant term first gives the required form. This is precisely the linear (first-order Taylor) approximation of \\(\\sin\\) about the point \\(\\phi\\)."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-047",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 65",
    "difficulty": "Challenge",
    "questionText": "A pendulum of length 0.5 m oscillates with small angle \\(\\theta\\). Using \\(\\sin\\theta \\approx \\theta\\), derive SHM with \\(\\omega^2 = g/L\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied",
      "SHM"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the forces on the bob.",
          "workingLatex": "W = mg \\;\\text{(downward)}, \\qquad T \\;\\text{(along the string)}",
          "explanation": "The only forces on the bob are its weight \\(mg\\) acting vertically down and the string tension \\(T\\) acting along the string towards the pivot."
        },
        {
          "stepNumber": 2,
          "description": "Resolve weight along the arc.",
          "workingLatex": "F_t = -mg\\sin\\theta",
          "explanation": "The tension has no component along the arc, so only the tangential component of the weight, \\(mg\\sin\\theta\\), drives the motion. The minus sign shows it always points back towards the vertical, opposing the displacement."
        },
        {
          "stepNumber": 3,
          "description": "Apply the small-angle approximation.",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "Since \\(\\theta\\) is small and in radians, \\(\\sin\\theta\\approx\\theta\\); the dropped term is \\(O(\\theta^3)\\). This linearisation is the key step that produces SHM rather than a more complex pendulum motion."
        },
        {
          "stepNumber": 4,
          "description": "Linearise the restoring force.",
          "workingLatex": "F_t \\approx -mg\\theta",
          "explanation": "Substituting \\(\\sin\\theta\\approx\\theta\\) into the tangential force gives a force proportional to the angular displacement, the defining feature of SHM."
        },
        {
          "stepNumber": 5,
          "description": "Relate arc displacement to angle.",
          "workingLatex": "s = L\\theta",
          "explanation": "The bob moves along an arc of radius \\(L\\), so its displacement from the lowest point is \\(s=L\\theta\\). This is exact for \\(\\theta\\) in radians."
        },
        {
          "stepNumber": 6,
          "description": "Differentiate twice for acceleration.",
          "workingLatex": "\\dot{s} = L\\dot{\\theta}, \\qquad \\ddot{s} = L\\ddot{\\theta}",
          "explanation": "With \\(L\\) constant, differentiating \\(s=L\\theta\\) once gives the tangential velocity and twice gives the tangential acceleration \\(L\\ddot{\\theta}\\)."
        },
        {
          "stepNumber": 7,
          "description": "Apply Newton's second law along the arc.",
          "workingLatex": "m\\ddot{s} = F_t",
          "explanation": "Along the tangential direction, mass times acceleration equals the net tangential force. We now substitute the expressions found above."
        },
        {
          "stepNumber": 8,
          "description": "Substitute acceleration and force.",
          "workingLatex": "mL\\ddot{\\theta} = -mg\\theta",
          "explanation": "Replace \\(\\ddot{s}\\) by \\(L\\ddot{\\theta}\\) and \\(F_t\\) by \\(-mg\\theta\\). A common slip is to forget the factor \\(L\\) in the acceleration term."
        },
        {
          "stepNumber": 9,
          "description": "Cancel the mass.",
          "workingLatex": "L\\ddot{\\theta} = -g\\theta",
          "explanation": "Dividing both sides by \\(m\\) removes the mass entirely, so the resulting motion (and hence the period) is independent of the bob's mass."
        },
        {
          "stepNumber": 10,
          "description": "Isolate the angular acceleration.",
          "workingLatex": "\\ddot{\\theta} = -\\frac{g}{L}\\theta",
          "explanation": "Dividing by \\(L\\) gives the standard SHM form \\(\\ddot{\\theta}=-\\omega^2\\theta\\), with acceleration proportional and opposite to displacement."
        },
        {
          "stepNumber": 11,
          "description": "Compare with the SHM template.",
          "workingLatex": "\\ddot{\\theta} = -\\omega^2\\theta \\quad\\Rightarrow\\quad \\omega^2 = \\frac{g}{L}",
          "explanation": "Matching coefficients of \\(\\theta\\) identifies the angular frequency squared as \\(\\displaystyle\\frac{g}{L}\\)."
        },
        {
          "stepNumber": 12,
          "description": "Take the square root and find the period.",
          "workingLatex": "\\omega = \\sqrt{\\frac{g}{L}}, \\qquad T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L}{g}}",
          "explanation": "Taking the positive root gives \\(\\omega\\), and the period follows from \\(T=\\displaystyle\\frac{2\\pi}{\\omega}\\). For \\(L=0.5\\,\\text{m}\\) and \\(g\\approx 9.81\\,\\text{m s}^{-2}\\), this gives \\(T\\approx 1.42\\,\\text{s}\\)."
        }
      ],
      "finalAnswer": "SHM with \\(\\omega = \\sqrt{g/L}\\), period \\(T = 2\\pi\\sqrt{L/g}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-048",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 37",
    "difficulty": "Standard",
    "questionText": "A small-angle sector has arc \\(s\\) and chord \\(c\\). Show \\(s \\approx c\\) for small \\(\\theta\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "proof"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the exact arc length.",
          "workingLatex": "s = r\\theta",
          "explanation": "The arc length of a sector of radius \\(r\\) subtending angle \\(\\theta\\) (in radians) is \\(s=r\\theta\\). This is exact, with no approximation yet."
        },
        {
          "stepNumber": 2,
          "description": "Split the chord triangle in half.",
          "workingLatex": "\\text{half-chord} = r\\sin\\!\\left(\\frac{\\theta}{2}\\right)",
          "explanation": "The chord joins the two ends of the arc, forming an isosceles triangle with the centre. Dropping a perpendicular bisects the apex angle into two angles of \\(\\theta/2\\), and each right triangle has opposite side \\(r\\sin(\\theta/2)\\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the full chord length.",
          "workingLatex": "c = 2r\\sin\\!\\left(\\frac{\\theta}{2}\\right)",
          "explanation": "The full chord is twice the half-chord. A common slip is to use \\(\\sin\\theta\\) instead of \\(\\sin(\\theta/2)\\) here."
        },
        {
          "stepNumber": 4,
          "description": "State the small-angle rule for the half-angle.",
          "workingLatex": "\\sin\\!\\left(\\frac{\\theta}{2}\\right) \\approx \\frac{\\theta}{2}",
          "explanation": "Since \\(\\theta\\) is small, so is \\(\\theta/2\\), and \\(\\sin(\\theta/2)\\approx\\theta/2\\); the dropped term is \\(O(\\theta^3)\\). The angle must be in radians for this to hold."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the approximation into the chord.",
          "workingLatex": "c \\approx 2r\\cdot\\frac{\\theta}{2}",
          "explanation": "Replace \\(\\sin(\\theta/2)\\) by \\(\\theta/2\\) in the chord expression. The radius \\(r\\) is left as an exact factor."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the factor of two.",
          "workingLatex": "c \\approx 2r\\cdot\\frac{\\theta}{2} = r\\theta",
          "explanation": "The leading factor \\(2\\) cancels the denominator \\(2\\), leaving \\(c\\approx r\\theta\\)."
        },
        {
          "stepNumber": 7,
          "description": "Compare with the arc and conclude.",
          "workingLatex": "c \\approx r\\theta = s \\quad\\Rightarrow\\quad s \\approx c",
          "explanation": "Both arc and chord reduce to \\(r\\theta\\) to first order, so they are approximately equal for small \\(\\theta\\). Geometrically, a short arc is nearly straight, so it is close to its chord."
        }
      ],
      "finalAnswer": "\\(s \\approx c\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-049",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 66",
    "difficulty": "Challenge",
    "questionText": "Approximate \\(\\sqrt{1 + \\sin\\theta}\\) for small \\(\\theta\\) to order \\(\\theta^2\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "binomial"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the full sine series.",
          "workingLatex": "\\sin\\theta = \\theta - \\frac{\\theta^3}{6} + \\frac{\\theta^5}{120} - \\cdots",
          "explanation": "The Maclaurin series for sine contains only odd powers of \\(\\theta\\); crucially there is no \\(\\theta^2\\) term. We write it out to see which terms survive to order \\(\\theta^2\\)."
        },
        {
          "stepNumber": 2,
          "description": "Truncate the sine to order \\(\\theta^2\\).",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "The first correction to \\(\\theta\\) is the \\(\\displaystyle\\frac{\\theta^3}{6}\\) term, which is \\(O(\\theta^3)\\) and so negligible to order \\(\\theta^2\\). A common slip is to invent a spurious \\(\\theta^2\\) term here."
        },
        {
          "stepNumber": 3,
          "description": "Substitute inside the root.",
          "workingLatex": "\\sqrt{1 + \\sin\\theta} \\approx \\sqrt{1 + \\theta}",
          "explanation": "Replacing \\(\\sin\\theta\\) by \\(\\theta\\) inside the square root introduces only an \\(O(\\theta^3)\\) error, which is acceptable at this order."
        },
        {
          "stepNumber": 4,
          "description": "Rewrite as a binomial power.",
          "workingLatex": "\\sqrt{1 + \\theta} = (1 + \\theta)^{1/2}",
          "explanation": "Expressing the root as a power \\((1+\\theta)^{1/2}\\) puts it in the standard form \\((1+x)^n\\) with \\(x=\\theta\\) and \\(n=\\displaystyle\\frac{1}{2}\\)."
        },
        {
          "stepNumber": 5,
          "description": "State the binomial series to order \\(x^2\\).",
          "workingLatex": "(1 + x)^{n} \\approx 1 + nx + \\frac{n(n-1)}{2!}x^2",
          "explanation": "The generalised binomial expansion, valid for \\(|x|<1\\) which holds since \\(|\\theta|<1\\) for small \\(\\theta\\). We keep terms up to \\(x^2\\) as required."
        },
        {
          "stepNumber": 6,
          "description": "Substitute the exponent and variable.",
          "workingLatex": "(1 + \\theta)^{1/2} \\approx 1 + \\frac{1}{2}\\theta + \\frac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2!}\\theta^2",
          "explanation": "Put \\(n=\\displaystyle\\frac{1}{2}\\) and \\(x=\\theta\\). The linear coefficient is \\(\\displaystyle\\frac{1}{2}\\) and the quadratic coefficient is still to be simplified."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the quadratic coefficient.",
          "workingLatex": "\\frac{\\frac{1}{2}\\left(-\\frac{1}{2}\\right)}{2!} = \\frac{-\\frac{1}{4}}{2} = -\\frac{1}{8}",
          "explanation": "Multiply \\(\\displaystyle\\frac{1}{2}\\times\\left(-\\displaystyle\\frac{1}{2}\\right)=-\\displaystyle\\frac{1}{4}\\), then divide by \\(2!=2\\) to obtain \\(-\\displaystyle\\frac{1}{8}\\)."
        },
        {
          "stepNumber": 8,
          "description": "Write the final approximation.",
          "workingLatex": "(1 + \\theta)^{1/2} \\approx 1 + \\frac{\\theta}{2} - \\frac{\\theta^2}{8}",
          "explanation": "Collecting the simplified coefficients gives the result correct to order \\(\\theta^2\\). The \\(\\theta^3\\) and higher terms have all been discarded consistently."
        }
      ],
      "finalAnswer": "\\(\\approx 1 + \\displaystyle\\frac{\\theta}{2} - \\displaystyle\\frac{\\theta^2}{8}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-050",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 38",
    "difficulty": "Standard",
    "questionText": "Approximate \\((1 + \\tan\\theta)^3\\) for small \\(\\theta\\) to linear order.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "binomial"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the small-angle rule for tangent.",
          "workingLatex": "\\tan\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\) in radians, \\(\\tan\\theta\\approx\\theta\\); the next term in the series is \\(\\displaystyle\\frac{\\theta^3}{3}\\), which is \\(O(\\theta^3)\\) and negligible to linear order."
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the expression.",
          "workingLatex": "(1 + \\tan\\theta)^3 \\approx (1 + \\theta)^3",
          "explanation": "Replacing \\(\\tan\\theta\\) by \\(\\theta\\) gives the standard binomial form \\((1+x)^3\\) with \\(x=\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Expand the cube fully.",
          "workingLatex": "(1 + \\theta)^3 = 1 + 3\\theta + 3\\theta^2 + \\theta^3",
          "explanation": "Using the binomial coefficients \\(1, 3, 3, 1\\), we write out every term first so the orders are visible before any are discarded."
        },
        {
          "stepNumber": 4,
          "description": "Identify the higher-order terms.",
          "workingLatex": "3\\theta^2 = O(\\theta^2), \\qquad \\theta^3 = O(\\theta^3)",
          "explanation": "The terms \\(3\\theta^2\\) and \\(\\theta^3\\) are quadratic and cubic respectively, both beyond the requested linear order."
        },
        {
          "stepNumber": 5,
          "description": "Drop the higher-order terms.",
          "workingLatex": "(1 + \\theta)^3 \\approx 1 + 3\\theta",
          "explanation": "Keeping only the constant and linear terms gives the linear approximation. A common slip is to retain \\(3\\theta^2\\), which exceeds the requested order."
        }
      ],
      "finalAnswer": "\\(\\approx 1 + 3\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-051",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 14",
    "difficulty": "Foundation",
    "questionText": "True or false: \\(\\sin\\theta \\approx \\theta\\) works when \\(\\theta\\) is in degrees.",
    "marks": 1,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "concept"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the approximation and its condition",
          "workingLatex": "\\sin\\theta \\approx \\theta \\quad (\\theta \\text{ in radians})",
          "explanation": "The small angle result \\(\\sin\\theta\\approx\\theta\\) is stated only for \\(\\theta\\) measured in radians. A common slip is to forget this condition entirely and apply it to any angle in any unit."
        },
        {
          "stepNumber": 2,
          "description": "Explain why the unit matters",
          "workingLatex": "\\sin\\theta \\le 1 \\text{ for all } \\theta",
          "explanation": "The output of \\(\\sin\\) always lies between \\(-1\\) and \\(1\\). So if the angle measure on the right-hand side can grow larger than \\(1\\), the approximation cannot possibly hold for that measure."
        },
        {
          "stepNumber": 3,
          "description": "Pick a concrete small angle in degrees",
          "workingLatex": "\\theta = 10^{\\circ}",
          "explanation": "Choose \\(10^{\\circ}\\), a genuinely small angle, so we are testing the formula in exactly the situation where it is supposed to work well."
        },
        {
          "stepNumber": 4,
          "description": "Compute the true sine of the angle",
          "workingLatex": "\\sin(10^{\\circ}) \\approx 0.1736",
          "explanation": "The actual value of \\(\\sin(10^{\\circ})\\) is about \\(0.1736\\). This is the number the approximation should reproduce if it were valid in degrees."
        },
        {
          "stepNumber": 5,
          "description": "Compare with the degree value of theta",
          "workingLatex": "\\sin(10^{\\circ}) \\approx 0.1736 \\neq 10",
          "explanation": "If \\(\\theta\\) were in degrees, the formula would predict \\(\\sin(10^{\\circ})\\approx 10\\), which is impossible since \\(\\sin\\) never exceeds \\(1\\). The two sides disagree wildly."
        },
        {
          "stepNumber": 6,
          "description": "Show what happens after converting to radians",
          "workingLatex": "10^{\\circ} = 10 \\times \\frac{\\pi}{180} \\approx 0.1745 \\text{ rad}",
          "explanation": "Converting \\(10^{\\circ}\\) to radians gives about \\(0.1745\\). Now the right-hand side of the approximation is \\(0.1745\\), close to the true value \\(0.1736\\), so the formula works once the angle is in radians."
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "\\text{False: only valid in radians}",
          "explanation": "In degrees a small angle gives a tiny radian measure, so \\(\\sin\\theta\\approx\\theta\\) holds only after converting to radians. Hence the statement as written is false."
        }
      ],
      "finalAnswer": "False.",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-052",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 39",
    "difficulty": "Challenge",
    "questionText": "For small \\(\\theta\\) (in radians), the tangent function has the cubic-order expansion \\(\\tan\\theta \\approx \\theta + \\displaystyle\\frac{\\theta^3}{3}\\), while \\(\\sin\\theta \\approx \\theta - \\displaystyle\\frac{\\theta^3}{6}\\).\n(a) Show that, for small \\(\\theta\\), \\(\\tan\\theta - \\sin\\theta \\approx a\\theta^{n}\\), stating the values of the constants \\(a\\) and \\(n\\).\n(b) Hence find the value of \\(\\displaystyle\\lim_{\\theta \\to 0}\\displaystyle\\frac{\\tan\\theta - \\sin\\theta}{\\theta^{3}}\\).\n(c) Use your result from part (a) to estimate \\(\\tan\\theta - \\sin\\theta\\) when \\(\\theta = 0.1\\), giving your answer to four decimal places.",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "small-angle-approximations",
      "tan",
      "sin",
      "limits",
      "series",
      "estimation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the tangent expansion",
          "workingLatex": "\\tan\\theta \\approx \\theta + \\frac{\\theta^3}{3}",
          "explanation": "Record the cubic-order expansion for \\(\\tan\\theta\\). We must keep the \\(\\theta^3\\) term, not just the leading \\(\\theta\\), because the leading terms will cancel in the difference."
        },
        {
          "stepNumber": 2,
          "description": "Write down the sine expansion",
          "workingLatex": "\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6}",
          "explanation": "Record the matching cubic-order expansion for \\(\\sin\\theta\\). A common slip is keeping only \\(\\sin\\theta\\approx\\theta\\), which loses the whole answer once the linear terms cancel."
        },
        {
          "stepNumber": 3,
          "description": "Set up the subtraction",
          "workingLatex": "\\tan\\theta - \\sin\\theta \\approx \\left(\\theta + \\frac{\\theta^3}{3}\\right) - \\left(\\theta - \\frac{\\theta^3}{6}\\right)",
          "explanation": "Substitute both expansions into the difference, keeping the second expansion inside a bracket so the minus sign is applied to every term it contains. The bracket on the \\(\\sin\\theta\\) terms is essential."
        },
        {
          "stepNumber": 4,
          "description": "Distribute the minus sign over the bracket",
          "workingLatex": "-\\left(\\theta - \\frac{\\theta^3}{6}\\right) = -\\theta + \\frac{\\theta^3}{6}",
          "explanation": "Expand the second bracket on its own first. The double negative on the cubic term turns \\(-\\left(-\\displaystyle\\frac{\\theta^3}{6}\\right)\\) into \\(+\\displaystyle\\frac{\\theta^3}{6}\\), which is the step most often mishandled."
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the full expression with brackets removed",
          "workingLatex": "\\tan\\theta - \\sin\\theta \\approx \\theta + \\frac{\\theta^3}{3} - \\theta + \\frac{\\theta^3}{6}",
          "explanation": "Combine the first bracket with the expanded second bracket. Every term now appears with its correct sign, ready for collecting."
        },
        {
          "stepNumber": 6,
          "description": "Group the linear terms together",
          "workingLatex": "\\tan\\theta - \\sin\\theta \\approx (\\theta - \\theta) + \\frac{\\theta^3}{3} + \\frac{\\theta^3}{6}",
          "explanation": "Collect the two linear terms \\(\\theta\\) and \\(-\\theta\\) so it is clear they form a single group. Higher-order terms beyond \\(\\theta^3\\) are dropped because both expansions were only given to cubic order."
        },
        {
          "stepNumber": 7,
          "description": "Cancel the linear terms",
          "workingLatex": "\\tan\\theta - \\sin\\theta \\approx \\frac{\\theta^3}{3} + \\frac{\\theta^3}{6}",
          "explanation": "The \\(\\theta\\) and \\(-\\theta\\) cancel exactly, leaving only cubic terms. Forgetting that the linear parts vanish is what makes people wrongly expect a linear leading order."
        },
        {
          "stepNumber": 8,
          "description": "Rewrite the first fraction with denominator 6",
          "workingLatex": "\\frac{\\theta^3}{3} = \\frac{2\\theta^3}{6}",
          "explanation": "To add the two cubic fractions we need a common denominator. Multiply numerator and denominator of \\(\\displaystyle\\frac{\\theta^3}{3}\\) by \\(2\\) to get denominator \\(6\\)."
        },
        {
          "stepNumber": 9,
          "description": "Write both cubic terms over 6",
          "workingLatex": "\\frac{\\theta^3}{3} + \\frac{\\theta^3}{6} = \\frac{2\\theta^3}{6} + \\frac{\\theta^3}{6}",
          "explanation": "Now both fractions share denominator \\(6\\). A frequent error is adding numerators over \\(3+6=9\\) instead of finding the genuine common denominator."
        },
        {
          "stepNumber": 10,
          "description": "Add the numerators over the common denominator",
          "workingLatex": "\\frac{2\\theta^3}{6} + \\frac{\\theta^3}{6} = \\frac{3\\theta^3}{6}",
          "explanation": "With a common denominator, add the numerators: \\(2\\theta^3 + \\theta^3 = 3\\theta^3\\). The denominator stays \\(6\\)."
        },
        {
          "stepNumber": 11,
          "description": "Simplify the fraction",
          "workingLatex": "\\frac{3\\theta^3}{6} = \\frac{\\theta^3}{2}",
          "explanation": "Cancel the common factor \\(3\\) in numerator and denominator, reducing \\(\\displaystyle\\frac{3}{6}\\) to \\(\\displaystyle\\frac{1}{2}\\). Leaving it unsimplified would hide the clean constant."
        },
        {
          "stepNumber": 12,
          "description": "Identify the constants a and n",
          "workingLatex": "\\tan\\theta - \\sin\\theta \\approx \\frac{1}{2}\\,\\theta^{3} \\quad\\Rightarrow\\quad a = \\frac{1}{2},\\ n = 3",
          "explanation": "Writing the result in the form \\(a\\theta^n\\) reads off \\(a = \\displaystyle\\frac{1}{2}\\) and \\(n = 3\\). This completes part (a)."
        },
        {
          "stepNumber": 13,
          "description": "Substitute the part (a) result into the quotient",
          "workingLatex": "\\frac{\\tan\\theta - \\sin\\theta}{\\theta^{3}} \\approx \\frac{\\frac{1}{2}\\theta^{3}}{\\theta^{3}}",
          "explanation": "For part (b), replace the numerator with its leading-order form from part (a). The cubic in the numerator matches the \\(\\theta^3\\) in the denominator."
        },
        {
          "stepNumber": 14,
          "description": "Cancel the powers of theta",
          "workingLatex": "\\frac{\\frac{1}{2}\\theta^{3}}{\\theta^{3}} = \\frac{1}{2}",
          "explanation": "Provided \\(\\theta\\neq 0\\), the \\(\\theta^3\\) factors cancel, leaving the constant \\(\\displaystyle\\frac{1}{2}\\). Any terms of order higher than \\(\\theta^3\\) would carry a factor of \\(\\theta\\) and vanish as \\(\\theta\\to 0\\)."
        },
        {
          "stepNumber": 15,
          "description": "State the value of the limit",
          "workingLatex": "\\lim_{\\theta \\to 0}\\frac{\\tan\\theta - \\sin\\theta}{\\theta^{3}} = \\frac{1}{2}",
          "explanation": "The cubic leading-order term is exactly what survives the limit, so the indeterminate form \\(\\displaystyle\\frac{0}{0}\\) resolves to \\(\\displaystyle\\frac{1}{2}\\). A slip is to claim the limit is \\(0\\) or undefined without cancelling first."
        },
        {
          "stepNumber": 16,
          "description": "Substitute theta equals 0.1 into the formula",
          "workingLatex": "\\tan(0.1) - \\sin(0.1) \\approx \\frac{1}{2}(0.1)^{3}",
          "explanation": "For part (c), use the part (a) formula with \\(\\theta = 0.1\\). Remember \\(0.1\\) is in radians here, not degrees, or the estimate is meaningless."
        },
        {
          "stepNumber": 17,
          "description": "Cube the value of theta",
          "workingLatex": "(0.1)^{3} = 0.001",
          "explanation": "Compute the cube on its own: \\(0.1\\times 0.1\\times 0.1 = 0.001\\). A common slip is using \\((0.1)^2 = 0.01\\) or mishandling the number of decimal places in the cube."
        },
        {
          "stepNumber": 18,
          "description": "Multiply by the constant one half",
          "workingLatex": "\\frac{1}{2}(0.001) = 0.0005",
          "explanation": "Halving \\(0.001\\) gives \\(0.0005\\). This is the leading-order estimate of the difference."
        },
        {
          "stepNumber": 19,
          "description": "State the estimate and compare with the true value",
          "workingLatex": "\\tan(0.1) - \\sin(0.1) \\approx 0.0005",
          "explanation": "To four decimal places the estimate is \\(0.0005\\). The exact value is \\(0.0005013\\ldots\\), which also rounds to \\(0.0005\\), confirming the leading-order estimate is accurate to this precision."
        }
      ],
      "finalAnswer": "(a) \\(a = \\displaystyle\\frac{1}{2},\\ n = 3\\), so \\(\\tan\\theta - \\sin\\theta \\approx \\displaystyle\\frac{1}{2}\\theta^{3}\\). (b) \\(\\displaystyle\\lim_{\\theta\\to 0}\\displaystyle\\frac{\\tan\\theta-\\sin\\theta}{\\theta^{3}} = \\displaystyle\\frac{1}{2}\\). (c) \\(\\tan(0.1)-\\sin(0.1) \\approx 0.0005\\).",
      "commonMistakes": [
        "Using only sin theta approx theta and tan theta approx theta, so both cancel and the answer collapses to 0.",
        "Adding the cubic fractions over denominator 9 instead of the common denominator 6.",
        "Treating theta = 0.1 as degrees rather than radians when computing the numerical estimate."
      ]
    }
  },
  {
    "id": "y2tf6-053",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 40",
    "difficulty": "Standard",
    "questionText": "State \\(\\sin\\theta\\) to order \\(\\theta^3\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "concept"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the leading small angle term",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "To first order, the sine of a small angle in radians equals the angle itself. This is the term we will refine by adding the next correction."
        },
        {
          "stepNumber": 2,
          "description": "Note that sine is an odd function",
          "workingLatex": "\\sin(-\\theta) = -\\sin\\theta",
          "explanation": "Because \\(\\sin\\) is odd, its series contains only odd powers of \\(\\theta\\). Hence there is no \\(\\theta^2\\) term, and the next term after \\(\\theta\\) is the \\(\\theta^3\\) term."
        },
        {
          "stepNumber": 3,
          "description": "Identify the cubic coefficient",
          "workingLatex": "\\frac{1}{3!} = \\frac{1}{6}",
          "explanation": "The denominator of the cubic term is \\(3! = 6\\). Writing \\(3\\) instead of \\(6\\) is a frequent error; the factorial is what produces the \\(6\\)."
        },
        {
          "stepNumber": 4,
          "description": "Add the cubic correction term",
          "workingLatex": "\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6}",
          "explanation": "The cubic term is subtracted, giving \\(-\\displaystyle\\frac{\\theta^3}{6}\\). A common slip is using \\(+\\displaystyle\\frac{\\theta^3}{6}\\); the sign is negative."
        },
        {
          "stepNumber": 5,
          "description": "State the result to order theta cubed",
          "workingLatex": "\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6}",
          "explanation": "This is the expansion correct up to and including the \\(\\theta^3\\) term. The next omitted term is of order \\(\\theta^5\\), so nothing of order \\(\\theta^3\\) or below has been lost."
        }
      ],
      "finalAnswer": "\\(\\sin\\theta \\approx \\theta - \\displaystyle\\frac{\\theta^3}{6}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-054",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 41",
    "difficulty": "Standard",
    "questionText": "Write \\(\\cos\\theta\\) to order \\(\\theta^4\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "concept"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the standard small angle term",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "To second order, the cosine of a small angle in radians is \\(1-\\displaystyle\\frac{\\theta^2}{2}\\). This is the usual A-Level approximation that we now extend to higher order."
        },
        {
          "stepNumber": 2,
          "description": "Note that cosine is an even function",
          "workingLatex": "\\cos(-\\theta) = \\cos\\theta",
          "explanation": "Because \\(\\cos\\) is even, its series contains only even powers of \\(\\theta\\). So there is no \\(\\theta^3\\) term, and the next term after \\(\\theta^2\\) is the \\(\\theta^4\\) term."
        },
        {
          "stepNumber": 3,
          "description": "Identify the quartic coefficient",
          "workingLatex": "\\frac{1}{4!} = \\frac{1}{24}",
          "explanation": "The denominator of the quartic term is \\(4! = 24\\). A common slip is writing \\(12\\) instead of \\(24\\); it is the factorial that gives \\(24\\)."
        },
        {
          "stepNumber": 4,
          "description": "Determine the sign of the quartic term",
          "workingLatex": "+,\\ -,\\ +,\\ \\ldots",
          "explanation": "The signs of the cosine series alternate, starting \\(+1\\), then \\(-\\), then \\(+\\). So after \\(-\\displaystyle\\frac{\\theta^2}{2}\\) the \\(\\theta^4\\) term is positive."
        },
        {
          "stepNumber": 5,
          "description": "Add the quartic correction term",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2} + \\frac{\\theta^4}{24}",
          "explanation": "Append \\(+\\displaystyle\\frac{\\theta^4}{24}\\) to the second-order approximation. Forgetting that this term is positive is a frequent error."
        },
        {
          "stepNumber": 6,
          "description": "State the result to order theta to the fourth",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2} + \\frac{\\theta^4}{24}",
          "explanation": "This is correct up to and including the \\(\\theta^4\\) term, with signs \\(+,-,+\\). The next omitted term is of order \\(\\theta^6\\), so dropping the \\(\\theta^4\\) term would leave only order \\(\\theta^2\\)."
        }
      ],
      "finalAnswer": "\\(\\cos\\theta \\approx 1 - \\displaystyle\\frac{\\theta^2}{2} + \\displaystyle\\frac{\\theta^4}{24}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-055",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 15",
    "difficulty": "Foundation",
    "questionText": "Approximate \\(\\sin 0.3 + \\sin 0.1\\).",
    "marks": 2,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the approximation to the first term",
          "workingLatex": "\\sin 0.3 \\approx 0.3",
          "explanation": "Since \\(0.3\\) is a small angle in radians, use \\(\\sin\\theta\\approx\\theta\\) to replace \\(\\sin 0.3\\) with \\(0.3\\). Remember this is radians, not degrees, or the approximation does not apply."
        },
        {
          "stepNumber": 2,
          "description": "Apply the approximation to the second term",
          "workingLatex": "\\sin 0.1 \\approx 0.1",
          "explanation": "Likewise \\(0.1\\) is a small angle in radians, so \\(\\sin 0.1\\approx 0.1\\). A common slip is to apply \\(\\sin\\theta\\approx\\theta\\) to only one of the two terms."
        },
        {
          "stepNumber": 3,
          "description": "Substitute both approximations into the sum",
          "workingLatex": "\\sin 0.3 + \\sin 0.1 \\approx 0.3 + 0.1",
          "explanation": "Replace each sine in the original sum by its approximate value, so the whole expression becomes a simple addition of the two angles."
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the sum",
          "workingLatex": "0.3 + 0.1 = 0.4",
          "explanation": "Adding the two values gives \\(0.4\\)."
        },
        {
          "stepNumber": 5,
          "description": "Compare with the true value",
          "workingLatex": "\\sin 0.3 + \\sin 0.1 \\approx 0.3955",
          "explanation": "The true value is about \\(0.3955\\), so the small angle estimate \\(0.4\\) is accurate to one decimal place. The estimate is a slight overestimate because \\(\\sin\\theta\\) is a little less than \\(\\theta\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 0.4\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-056",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 42",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\cos 0.05 - \\cos 0.1\\) to 5 dp.",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1-\\frac{\\theta^2}{2}",
          "explanation": "For a small angle \\(\\theta\\) measured in radians the cosine is approximated by \\(1-\\displaystyle\\frac{\\theta^2}{2}\\), which is the Maclaurin series truncated after the quadratic term. The dropped terms begin at \\(+\\displaystyle\\frac{\\theta^4}{24}\\), which is utterly negligible at this scale."
        },
        {
          "stepNumber": 2,
          "description": "Check the angles are small enough",
          "workingLatex": "0.05 \\ll 1, \\qquad 0.1 \\ll 1",
          "explanation": "Both \\(0.05\\) and \\(0.1\\) are far less than \\(1\\) radian, so the approximation is valid for each. Remember the angles must already be in radians, not degrees, or the formula does not apply."
        },
        {
          "stepNumber": 3,
          "description": "Square the first angle",
          "workingLatex": "(0.05)^2 = 0.0025",
          "explanation": "Compute \\(\\theta^2\\) for the first term before halving. A common slip is to write \\(0.05^2=0.025\\); squaring two decimal places gives four decimal places, so the answer is \\(0.0025\\)."
        },
        {
          "stepNumber": 4,
          "description": "Halve the squared first angle",
          "workingLatex": "\\frac{(0.05)^2}{2}=\\frac{0.0025}{2}=0.00125",
          "explanation": "Divide \\(0.0025\\) by \\(2\\) to obtain the correction term \\(0.00125\\). Do not forget the division by \\(2\\) that appears in the formula."
        },
        {
          "stepNumber": 5,
          "description": "Approximate the first cosine",
          "workingLatex": "\\cos 0.05 \\approx 1-0.00125 = 0.99875",
          "explanation": "Subtract the correction from \\(1\\) to get \\(0.99875\\). This is the approximate value of the first cosine."
        },
        {
          "stepNumber": 6,
          "description": "Square the second angle",
          "workingLatex": "(0.1)^2 = 0.01",
          "explanation": "Compute \\(\\theta^2\\) for the second term. Squaring \\(0.1\\) gives \\(0.01\\), not \\(0.1\\); the decimal place count doubles."
        },
        {
          "stepNumber": 7,
          "description": "Halve the squared second angle",
          "workingLatex": "\\frac{(0.1)^2}{2}=\\frac{0.01}{2}=0.005",
          "explanation": "Divide \\(0.01\\) by \\(2\\) to get the correction term \\(0.005\\). Keeping it separate makes the next subtraction clear."
        },
        {
          "stepNumber": 8,
          "description": "Approximate the second cosine",
          "workingLatex": "\\cos 0.1 \\approx 1-0.005 = 0.995",
          "explanation": "Subtract \\(0.005\\) from \\(1\\) to get \\(0.995\\). Keep the leading \\(1\\) in mind so the cancellation in the next step is set up correctly."
        },
        {
          "stepNumber": 9,
          "description": "Substitute both approximations",
          "workingLatex": "\\cos 0.05 - \\cos 0.1 \\approx (1-0.00125)-(1-0.005)",
          "explanation": "Substitute both bracketed results into the original difference. The two \\(1\\)s will cancel, so keep the brackets and subtract the whole second expression."
        },
        {
          "stepNumber": 10,
          "description": "Expand the second bracket",
          "workingLatex": "(1-0.00125)-(1-0.005)=1-0.00125-1+0.005",
          "explanation": "Distribute the leading minus sign across the second bracket: \\(-(1-0.005)=-1+0.005\\). A frequent error is dropping the sign change on the \\(-0.005\\), which would turn it into \\(-0.005\\)."
        },
        {
          "stepNumber": 11,
          "description": "Cancel the ones",
          "workingLatex": "1-0.00125-1+0.005 = 0.005-0.00125",
          "explanation": "The \\(1-1\\) cancels to zero, leaving only the two correction terms. The \\(+0.005\\) comes from the doubled negative on the second bracket."
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the subtraction",
          "workingLatex": "0.005-0.00125 = 0.00375",
          "explanation": "Subtract to obtain \\(0.00375\\). Notice the smaller angle \\(0.05\\) contributes the smaller correction, so the difference is positive."
        },
        {
          "stepNumber": 13,
          "description": "State the answer to 5 decimal places",
          "workingLatex": "\\cos 0.05 - \\cos 0.1 \\approx 0.00375",
          "explanation": "The value \\(0.00375\\) already has five decimal places. For comparison, the exact value is \\(0.003746\\dots\\), so the approximation agrees to 5 dp as required."
        }
      ],
      "finalAnswer": "\\(\\approx 0.00375\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-057",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 43",
    "difficulty": "Standard",
    "questionText": "Approximate \\(3\\sin\\theta - \\theta\\cos\\theta\\) for small \\(\\theta\\) to order \\(\\theta\\).",
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
          "description": "State the sine approximation",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "For small \\(\\theta\\) in radians the leading behaviour of \\(\\sin\\theta\\) is linear, \\(\\sin\\theta\\approx\\theta\\). The first dropped term is \\(-\\displaystyle\\frac{\\theta^3}{6}\\), which is of higher order than \\(\\theta\\) and so does not affect the order-\\(\\theta\\) answer."
        },
        {
          "stepNumber": 2,
          "description": "Approximate the sine term",
          "workingLatex": "3\\sin\\theta \\approx 3\\theta",
          "explanation": "Multiply the approximation \\(\\sin\\theta\\approx\\theta\\) by the coefficient \\(3\\) in front. This contributes \\(3\\theta\\), which is an order-\\(\\theta\\) term."
        },
        {
          "stepNumber": 3,
          "description": "State the cosine approximation",
          "workingLatex": "\\cos\\theta \\approx 1-\\frac{\\theta^2}{2}",
          "explanation": "Use the quadratic cosine approximation for the second term, keeping the \\(\\theta^2\\) term for now. Holding on to it lets us see precisely which part becomes negligible after multiplying by \\(\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Multiply out the second term",
          "workingLatex": "\\theta\\cos\\theta \\approx \\theta\\left(1-\\frac{\\theta^2}{2}\\right)",
          "explanation": "Substitute the cosine approximation into \\(\\theta\\cos\\theta\\). The factor of \\(\\theta\\) outside the bracket must be distributed across both terms inside."
        },
        {
          "stepNumber": 5,
          "description": "Distribute the factor of theta",
          "workingLatex": "\\theta\\left(1-\\frac{\\theta^2}{2}\\right)=\\theta-\\frac{\\theta^3}{2}",
          "explanation": "Multiplying gives a linear term \\(\\theta\\) and a cubic term \\(\\displaystyle\\frac{\\theta^3}{2}\\). The cubic term arises because \\(\\theta\\times\\theta^2=\\theta^3\\)."
        },
        {
          "stepNumber": 6,
          "description": "Discard the higher-order term",
          "workingLatex": "\\theta-\\frac{\\theta^3}{2} \\approx \\theta",
          "explanation": "To order \\(\\theta\\) we keep only the linear term; the \\(\\displaystyle\\frac{\\theta^3}{2}\\) term is much smaller than \\(\\theta\\) as \\(\\theta\\to0\\) because the ratio \\(\\displaystyle\\frac{\\theta^3/2}{\\theta}=\\displaystyle\\frac{\\theta^2}{2}\\to0\\). Dropping it is exactly what \"to order \\(\\theta\\)\" requires."
        },
        {
          "stepNumber": 7,
          "description": "Combine both approximated terms",
          "workingLatex": "3\\sin\\theta-\\theta\\cos\\theta \\approx 3\\theta-\\theta",
          "explanation": "Substitute the two linear results into the original expression. Both terms are now of order \\(\\theta\\), ready to be collected."
        },
        {
          "stepNumber": 8,
          "description": "Collect the like terms",
          "workingLatex": "3\\theta-\\theta = 2\\theta",
          "explanation": "Subtract the coefficients \\(3-1=2\\) to get \\(2\\theta\\). A common slip is to treat \\(\\theta\\cos\\theta\\) as \\(0\\); its leading term is \\(\\theta\\), which must be subtracted."
        }
      ],
      "finalAnswer": "\\(\\approx 2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-058",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 67",
    "difficulty": "Challenge",
    "questionText": "Show that \\(\\displaystyle\\frac{\\theta - \\sin\\theta}{\\theta^3} \\to \\displaystyle\\frac{1}{6}\\) as \\(\\theta \\to 0\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "limit"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "See why the linear term is insufficient",
          "workingLatex": "\\theta-\\sin\\theta \\approx \\theta-\\theta = 0",
          "explanation": "If we only used \\(\\sin\\theta\\approx\\theta\\) the numerator would collapse to \\(0\\) and we would lose all information. The numerator is genuinely small but non-zero, so we need the next term of the series."
        },
        {
          "stepNumber": 2,
          "description": "Use the cubic-order sine series",
          "workingLatex": "\\sin\\theta \\approx \\theta-\\frac{\\theta^3}{6}",
          "explanation": "Keep the next Maclaurin term \\(-\\displaystyle\\frac{\\theta^3}{6}\\). The terms dropped after this start at \\(+\\displaystyle\\frac{\\theta^5}{120}\\), which is of higher order than \\(\\theta^3\\) and so cannot affect the limit."
        },
        {
          "stepNumber": 3,
          "description": "Form the numerator",
          "workingLatex": "\\theta-\\sin\\theta \\approx \\theta-\\left(\\theta-\\frac{\\theta^3}{6}\\right)",
          "explanation": "Substitute the series into \\(\\theta-\\sin\\theta\\). Use a bracket so the minus sign is applied to every term of the series, not just the first."
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "\\theta-\\left(\\theta-\\frac{\\theta^3}{6}\\right)=\\theta-\\theta+\\frac{\\theta^3}{6}",
          "explanation": "Distribute the leading minus sign: \\(-(\\theta)=-\\theta\\) and \\(-\\left(-\\displaystyle\\frac{\\theta^3}{6}\\right)=+\\displaystyle\\frac{\\theta^3}{6}\\). A common slip is mishandling this double negative and obtaining \\(-\\displaystyle\\frac{\\theta^3}{6}\\)."
        },
        {
          "stepNumber": 5,
          "description": "Cancel the linear terms",
          "workingLatex": "\\theta-\\theta+\\frac{\\theta^3}{6}=\\frac{\\theta^3}{6}",
          "explanation": "The \\(\\theta\\) terms cancel exactly, leaving the cubic term \\(\\displaystyle\\frac{\\theta^3}{6}\\) as the leading behaviour of the numerator."
        },
        {
          "stepNumber": 6,
          "description": "Divide by the cubed denominator",
          "workingLatex": "\\frac{\\theta-\\sin\\theta}{\\theta^3} \\approx \\frac{\\;\\frac{\\theta^3}{6}\\;}{\\theta^3}",
          "explanation": "Place the simplified numerator over \\(\\theta^3\\). The matching powers of \\(\\theta^3\\) are about to cancel exactly."
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the compound fraction",
          "workingLatex": "\\frac{\\;\\frac{\\theta^3}{6}\\;}{\\theta^3}=\\frac{\\theta^3}{6}\\cdot\\frac{1}{\\theta^3}",
          "explanation": "Dividing by \\(\\theta^3\\) is the same as multiplying by \\(\\displaystyle\\frac{1}{\\theta^3}\\). Writing it this way makes the cancellation of the \\(\\theta^3\\) factors explicit."
        },
        {
          "stepNumber": 8,
          "description": "Cancel the powers of theta",
          "workingLatex": "\\frac{\\theta^3}{6}\\cdot\\frac{1}{\\theta^3}=\\frac{1}{6}",
          "explanation": "Cancel \\(\\theta^3\\) from numerator and denominator, leaving the constant \\(\\displaystyle\\frac{1}{6}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Take the limit",
          "workingLatex": "\\lim_{\\theta\\to 0}\\frac{\\theta-\\sin\\theta}{\\theta^3}=\\frac{1}{6}",
          "explanation": "The neglected terms contribute a factor of order \\(\\theta^2\\) relative to the constant \\(\\displaystyle\\frac{1}{6}\\), and these tend to zero as \\(\\theta\\to0\\). Hence the ratio tends to exactly \\(\\displaystyle\\frac{1}{6}\\) as required."
        }
      ],
      "finalAnswer": "Proved. \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-059",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 44",
    "difficulty": "Standard",
    "questionText": "For small \\(\\theta\\), approximate \\(\\sin\\theta - \\sin(2\\theta)\\) to linear order.",
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
          "description": "State the sine approximation",
          "workingLatex": "\\sin x \\approx x",
          "explanation": "For a small argument \\(x\\) in radians, \\(\\sin x\\approx x\\). The first dropped term is \\(-\\displaystyle\\frac{x^3}{6}\\), which is higher order than \\(x\\) and so does not affect a linear-order answer."
        },
        {
          "stepNumber": 2,
          "description": "Approximate the first sine",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "Apply the rule with \\(x=\\theta\\). This is the order-\\(\\theta\\) contribution of the first term."
        },
        {
          "stepNumber": 3,
          "description": "Identify the argument of the second sine",
          "workingLatex": "\\sin(2\\theta) = \\sin x \\quad\\text{with}\\quad x=2\\theta",
          "explanation": "The second term has argument \\(2\\theta\\), which is also small when \\(\\theta\\) is small. Setting \\(x=2\\theta\\) prepares the approximation."
        },
        {
          "stepNumber": 4,
          "description": "Approximate the second sine",
          "workingLatex": "\\sin(2\\theta) \\approx 2\\theta",
          "explanation": "Apply \\(\\sin x\\approx x\\) with \\(x=2\\theta\\), giving \\(2\\theta\\). A common slip is writing \\(\\theta\\) instead of \\(2\\theta\\), forgetting that the whole argument is approximated."
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the expression",
          "workingLatex": "\\sin\\theta-\\sin(2\\theta) \\approx \\theta-2\\theta",
          "explanation": "Replace each sine with its linear approximation. Both terms are now of order \\(\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Collect like terms",
          "workingLatex": "\\theta-2\\theta = -\\theta",
          "explanation": "Combine the coefficients \\(1-2=-1\\) to get \\(-\\theta\\). The result is negative because the doubled-angle sine grows twice as fast as the single-angle sine."
        }
      ],
      "finalAnswer": "\\(\\approx -\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-060",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 45",
    "difficulty": "Challenge",
    "questionText": "A function is defined for small \\(\\theta\\) (in radians) by \\( \\displaystyle f(\\theta)=\\displaystyle\\frac{1-\\cos 2\\theta}{\\theta\\,\\bigl(1-\\cos\\theta\\bigr)} \\).\n(a) Using the small-angle approximations \\(\\sin\\theta\\approx\\theta\\), \\(\\cos\\theta\\approx 1-\\displaystyle\\frac{\\theta^2}{2}\\), show that for small \\(\\theta\\), \\( f(\\theta)\\approx \\displaystyle\\frac{a}{\\theta} \\), and state the value of the constant \\(a\\).\n(b) Hence evaluate \\( \\displaystyle\\lim_{\\theta\\to 0}\\,\\theta\\,f(\\theta) \\).\n(c) Use your approximation from part (a) to estimate \\(f(0.1)\\), giving your answer to one decimal place.",
    "marks": 6,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "small-angle",
      "limit",
      "compound-expression",
      "cosine-approximation",
      "challenge"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the cosine approximation",
          "workingLatex": "\\cos x \\approx 1-\\frac{x^2}{2}",
          "explanation": "For small \\(x\\) in radians the cosine is approximated by \\(1-\\displaystyle\\frac{x^2}{2}\\). We will apply this once with \\(x=2\\theta\\) for the numerator and once with \\(x=\\theta\\) for the denominator."
        },
        {
          "stepNumber": 2,
          "description": "Substitute x = 2 theta in the numerator",
          "workingLatex": "\\cos 2\\theta \\approx 1-\\frac{(2\\theta)^2}{2}",
          "explanation": "Apply \\(\\cos x\\approx 1-\\displaystyle\\frac{x^2}{2}\\) with \\(x=2\\theta\\). The entire argument \\(2\\theta\\) must be squared, so it is \\((2\\theta)^2\\), not \\(2\\theta^2\\)."
        },
        {
          "stepNumber": 3,
          "description": "Simplify the squared argument",
          "workingLatex": "1-\\frac{(2\\theta)^2}{2}=1-\\frac{4\\theta^2}{2}=1-2\\theta^2",
          "explanation": "Square to get \\((2\\theta)^2=4\\theta^2\\), then halve to get \\(2\\theta^2\\). A common slip is forgetting to square the \\(2\\), which would give \\(\\theta^2\\) instead of \\(2\\theta^2\\)."
        },
        {
          "stepNumber": 4,
          "description": "Form the numerator",
          "workingLatex": "1-\\cos 2\\theta \\approx 1-(1-2\\theta^2)",
          "explanation": "Substitute the approximation into \\(1-\\cos 2\\theta\\). Keep the bracket so the minus sign is applied to both terms inside."
        },
        {
          "stepNumber": 5,
          "description": "Simplify the numerator",
          "workingLatex": "1-(1-2\\theta^2)=1-1+2\\theta^2=2\\theta^2",
          "explanation": "The \\(1\\)s cancel and the double negative gives \\(+2\\theta^2\\). Watch the sign: the leading term is \\(+2\\theta^2\\), not \\(-2\\theta^2\\)."
        },
        {
          "stepNumber": 6,
          "description": "Substitute x = theta in the denominator cosine",
          "workingLatex": "\\cos\\theta \\approx 1-\\frac{\\theta^2}{2}",
          "explanation": "Apply the same expansion with \\(x=\\theta\\). Keep the quadratic term; dropping it would make \\(1-\\cos\\theta\\approx 0\\) and the whole expression undefined."
        },
        {
          "stepNumber": 7,
          "description": "Form the bracketed factor",
          "workingLatex": "1-\\cos\\theta \\approx 1-\\left(1-\\frac{\\theta^2}{2}\\right)",
          "explanation": "Substitute into \\(1-\\cos\\theta\\), again using a bracket to track the minus sign across both terms."
        },
        {
          "stepNumber": 8,
          "description": "Simplify the bracketed factor",
          "workingLatex": "1-\\left(1-\\frac{\\theta^2}{2}\\right)=1-1+\\frac{\\theta^2}{2}=\\frac{\\theta^2}{2}",
          "explanation": "The \\(1\\)s cancel and the sign flips, leaving the leading quadratic term \\(\\displaystyle\\frac{\\theta^2}{2}\\). A slip here is writing \\(\\theta^2\\) instead of \\(\\displaystyle\\frac{\\theta^2}{2}\\)."
        },
        {
          "stepNumber": 9,
          "description": "Form the full denominator",
          "workingLatex": "\\theta\\bigl(1-\\cos\\theta\\bigr)\\approx \\theta\\cdot\\frac{\\theta^2}{2}",
          "explanation": "The denominator has an extra factor of \\(\\theta\\) outside the bracket, which must be multiplied in. Omitting it gives the wrong power of \\(\\theta\\)."
        },
        {
          "stepNumber": 10,
          "description": "Simplify the denominator",
          "workingLatex": "\\theta\\cdot\\frac{\\theta^2}{2}=\\frac{\\theta^3}{2}",
          "explanation": "Multiplying \\(\\theta\\) by \\(\\theta^2\\) gives \\(\\theta^3\\), so the denominator is \\(\\displaystyle\\frac{\\theta^3}{2}\\)."
        },
        {
          "stepNumber": 11,
          "description": "Combine numerator over denominator",
          "workingLatex": "f(\\theta)\\approx \\frac{2\\theta^2}{\\;\\frac{\\theta^3}{2}\\;}",
          "explanation": "Substitute the two simplified pieces into \\(f(\\theta)\\). Keep the denominator's halved cube intact before dividing."
        },
        {
          "stepNumber": 12,
          "description": "Divide by multiplying by the reciprocal",
          "workingLatex": "f(\\theta)\\approx 2\\theta^2\\cdot\\frac{2}{\\theta^3}",
          "explanation": "Dividing by \\(\\displaystyle\\frac{\\theta^3}{2}\\) is the same as multiplying by its reciprocal \\(\\displaystyle\\frac{2}{\\theta^3}\\). A common error is forgetting to invert the fraction."
        },
        {
          "stepNumber": 13,
          "description": "Multiply the numerators",
          "workingLatex": "2\\theta^2\\cdot\\frac{2}{\\theta^3}=\\frac{4\\theta^2}{\\theta^3}",
          "explanation": "Multiply \\(2\\times 2=4\\) on top, keeping the powers of \\(\\theta\\) as \\(\\displaystyle\\frac{\\theta^2}{\\theta^3}\\) for now."
        },
        {
          "stepNumber": 14,
          "description": "Cancel powers of theta",
          "workingLatex": "\\frac{4\\theta^2}{\\theta^3}=\\frac{4}{\\theta}",
          "explanation": "Cancel \\(\\theta^2\\) from top and bottom, leaving one power of \\(\\theta\\) below. Hence \\(f(\\theta)\\approx\\displaystyle\\frac{4}{\\theta}\\) and the constant is \\(a=4\\)."
        },
        {
          "stepNumber": 15,
          "description": "Part (b): set up theta f(theta)",
          "workingLatex": "\\theta\\,f(\\theta)\\approx \\theta\\cdot\\frac{4}{\\theta}",
          "explanation": "Multiply the part (a) approximation by \\(\\theta\\). This is the quantity whose limit we need."
        },
        {
          "stepNumber": 16,
          "description": "Cancel theta in the product",
          "workingLatex": "\\theta\\cdot\\frac{4}{\\theta}=4",
          "explanation": "The factor \\(\\theta\\) cancels the remaining \\(\\theta\\) in the denominator, leaving the constant \\(4\\). The product stays finite even though \\(f(\\theta)\\) itself diverges."
        },
        {
          "stepNumber": 17,
          "description": "State the limit",
          "workingLatex": "\\lim_{\\theta\\to 0}\\,\\theta\\,f(\\theta)=4",
          "explanation": "As \\(\\theta\\to 0\\) the approximation becomes exact at leading order, so the limit is \\(4\\). Do not write the limit as \\(0\\); the \\(\\displaystyle\\frac{1}{\\theta}\\) growth in \\(f\\) exactly balances the factor \\(\\theta\\)."
        },
        {
          "stepNumber": 18,
          "description": "Part (c): substitute theta = 0.1",
          "workingLatex": "f(0.1)\\approx \\frac{4}{0.1}",
          "explanation": "Use the part (a) result with \\(\\theta=0.1\\) radians. Ensure the angle is treated in radians, as the approximations require."
        },
        {
          "stepNumber": 19,
          "description": "Evaluate the division",
          "workingLatex": "\\frac{4}{0.1}=40",
          "explanation": "Dividing \\(4\\) by \\(0.1\\) is the same as multiplying by \\(10\\), giving \\(40\\)."
        },
        {
          "stepNumber": 20,
          "description": "State to one decimal place",
          "workingLatex": "f(0.1)\\approx 40.0",
          "explanation": "To one decimal place the estimate is \\(40.0\\). For reference the exact value is about \\(39.9\\), so the leading-order estimate is close."
        }
      ],
      "finalAnswer": "(a) \\( f(\\theta)\\approx \\displaystyle\\frac{4}{\\theta} \\), so \\(a=4\\); (b) \\( \\displaystyle\\lim_{\\theta\\to 0}\\theta f(\\theta)=4 \\); (c) \\( f(0.1)\\approx 40.0 \\).",
      "commonMistakes": [
        "Forgetting to square the 2 in \\(\\cos 2\\theta\\), giving \\(1-\\cos 2\\theta\\approx \\theta^2\\) instead of \\(2\\theta^2\\).",
        "Dropping the \\(\\displaystyle\\frac{\\theta^2}{2}\\) term in \\(1-\\cos\\theta\\), making the denominator vanish.",
        "Omitting the extra factor of \\(\\theta\\) in the denominator, getting the wrong power of \\(\\theta\\)."
      ]
    }
  },
  {
    "id": "y2tf6-061",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 68",
    "difficulty": "Challenge",
    "questionText": "For small \\(\\theta\\), approximate \\(\\tan\\theta - \\sin\\theta\\) to order \\(\\theta^3\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "simplify"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide how many terms each series needs",
          "workingLatex": "\\text{target order } = \\theta^3 \\;\\Rightarrow\\; \\text{keep terms up to } \\theta^3",
          "explanation": "We are asked for the result to order \\(\\theta^3\\), so each input series must be kept at least as far as its \\(\\theta^3\\) term. Stopping at the leading \\(\\theta\\) term would cause the whole answer to cancel to \\(0\\), so the next term is essential."
        },
        {
          "stepNumber": 2,
          "description": "Write the cubic-order expansion of tangent",
          "workingLatex": "\\tan\\theta \\approx \\theta + \\frac{\\theta^3}{3}",
          "explanation": "The full Maclaurin series is \\(\\tan\\theta=\\theta+\\displaystyle\\frac{\\theta^3}{3}+\\cdots\\). We keep \\(+\\displaystyle\\frac{\\theta^3}{3}\\) and drop the next term (order \\(\\theta^5\\)) because it is higher than the requested order \\(\\theta^3\\)."
        },
        {
          "stepNumber": 3,
          "description": "Write the cubic-order expansion of sine",
          "workingLatex": "\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6}",
          "explanation": "The full series is \\(\\sin\\theta=\\theta-\\displaystyle\\frac{\\theta^3}{6}+\\cdots\\). We keep \\(-\\displaystyle\\frac{\\theta^3}{6}\\) and drop the order \\(\\theta^5\\) term. Note the sign: sine's cubic term is negative, while tangent's is positive."
        },
        {
          "stepNumber": 4,
          "description": "Substitute both expansions into the expression",
          "workingLatex": "\\tan\\theta - \\sin\\theta \\approx \\left(\\theta + \\frac{\\theta^3}{3}\\right) - \\left(\\theta - \\frac{\\theta^3}{6}\\right)",
          "explanation": "Replace each function by its expansion. Keep the second expansion inside a bracket so that the subtraction sign is applied to both of its terms, not just the first."
        },
        {
          "stepNumber": 5,
          "description": "Distribute the minus sign over the bracket",
          "workingLatex": "= \\theta + \\frac{\\theta^3}{3} - \\theta + \\frac{\\theta^3}{6}",
          "explanation": "Distributing the minus turns \\(-\\left(\\theta-\\displaystyle\\frac{\\theta^3}{6}\\right)\\) into \\(-\\theta+\\displaystyle\\frac{\\theta^3}{6}\\). Forgetting to flip the sign of \\(-\\displaystyle\\frac{\\theta^3}{6}\\) to \\(+\\displaystyle\\frac{\\theta^3}{6}\\) is the single most common error here."
        },
        {
          "stepNumber": 6,
          "description": "Cancel the leading theta terms",
          "workingLatex": "= \\frac{\\theta^3}{3} + \\frac{\\theta^3}{6}",
          "explanation": "The two first-order terms satisfy \\(\\theta-\\theta=0\\), so the leading behaviour vanishes. This cancellation is exactly why \\(\\tan\\theta\\) and \\(\\sin\\theta\\) agree to first and second order, leaving only cubic terms."
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the first cubic term over denominator six",
          "workingLatex": "= \\frac{2\\theta^3}{6} + \\frac{\\theta^3}{6}",
          "explanation": "To add the fractions we use the common denominator \\(6\\). Since \\(\\displaystyle\\frac{1}{3}=\\displaystyle\\frac{2}{6}\\), the term \\(\\displaystyle\\frac{\\theta^3}{3}\\) becomes \\(\\displaystyle\\frac{2\\theta^3}{6}\\)."
        },
        {
          "stepNumber": 8,
          "description": "Add the numerators",
          "workingLatex": "= \\frac{2\\theta^3 + \\theta^3}{6} = \\frac{3\\theta^3}{6}",
          "explanation": "Adding over the common denominator gives \\(\\displaystyle\\frac{3\\theta^3}{6}\\). Every retained term is order \\(\\theta^3\\), which matches the requested order exactly."
        },
        {
          "stepNumber": 9,
          "description": "Simplify the fraction",
          "workingLatex": "\\tan\\theta - \\sin\\theta \\approx \\frac{\\theta^3}{2}",
          "explanation": "Cancel the factor \\(3\\) in \\(\\displaystyle\\frac{3}{6}\\) to get \\(\\displaystyle\\frac{1}{2}\\). The result is positive and begins at \\(\\theta^3\\), confirming that the two functions agree up to second order."
        }
      ],
      "finalAnswer": "\\(\\approx \\displaystyle\\frac{\\theta^3}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-062",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 69",
    "difficulty": "Challenge",
    "questionText": "Approximate \\(e^{\\sin\\theta}\\) for small \\(\\theta\\) to order \\(\\theta^2\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the composition to expand",
          "workingLatex": "e^{\\sin\\theta} = e^{x} \\quad \\text{with } x = \\sin\\theta",
          "explanation": "This is a composition: an exponential of an inner function \\(\\sin\\theta\\). We will expand the inner function first, then feed it into the exponential series, keeping only terms up to \\(\\theta^2\\)."
        },
        {
          "stepNumber": 2,
          "description": "Expand the inner sine",
          "workingLatex": "\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6}",
          "explanation": "The full small-angle series for sine is \\(\\sin\\theta=\\theta-\\displaystyle\\frac{\\theta^3}{6}+\\cdots\\). We write the cubic term explicitly so we can see precisely where it lands when substituted."
        },
        {
          "stepNumber": 3,
          "description": "Keep the inner sine only to needed order",
          "workingLatex": "\\sin\\theta \\approx \\theta \\quad (\\text{up to } \\theta^2)",
          "explanation": "The \\(-\\displaystyle\\frac{\\theta^3}{6}\\) term is order \\(\\theta^3\\); once placed in the exponential its lowest contribution is still order \\(\\theta^3\\), beyond our target \\(\\theta^2\\). So we may safely use \\(\\sin\\theta\\approx\\theta\\)."
        },
        {
          "stepNumber": 4,
          "description": "Write the exponential series",
          "workingLatex": "e^{x} \\approx 1 + x + \\frac{x^2}{2}",
          "explanation": "The exponential expands as \\(e^{x}=1+x+\\displaystyle\\frac{x^2}{2}+\\displaystyle\\frac{x^3}{6}+\\cdots\\). We keep up to the \\(x^2\\) term and drop \\(\\displaystyle\\frac{x^3}{6}\\), since with \\(x\\approx\\theta\\) that term is order \\(\\theta^3\\)."
        },
        {
          "stepNumber": 5,
          "description": "Substitute the inner approximation",
          "workingLatex": "e^{\\sin\\theta} \\approx 1 + (\\theta) + \\frac{(\\theta)^2}{2}",
          "explanation": "Replace \\(x\\) by \\(\\theta\\) in each term of the series. The linear term becomes \\(\\theta\\) and the quadratic term becomes \\(\\displaystyle\\frac{\\theta^2}{2}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Justify the squared term to this order",
          "workingLatex": "x^2 = \\sin^2\\theta \\approx \\theta^2",
          "explanation": "Strictly \\(x^2=\\sin^2\\theta=\\left(\\theta-\\displaystyle\\frac{\\theta^3}{6}+\\cdots\\right)^2=\\theta^2-\\displaystyle\\frac{\\theta^4}{3}+\\cdots\\). The corrections are order \\(\\theta^4\\) or higher, so \\(\\sin^2\\theta\\approx\\theta^2\\) is exact to order \\(\\theta^2\\)."
        },
        {
          "stepNumber": 7,
          "description": "State the order-two approximation",
          "workingLatex": "e^{\\sin\\theta} \\approx 1 + \\theta + \\frac{\\theta^2}{2}",
          "explanation": "All retained terms are order \\(\\theta^2\\) or lower, as required. A common slip is forgetting the \\(\\displaystyle\\frac{\\theta^2}{2}\\) term and stopping at \\(1+\\theta\\)."
        }
      ],
      "finalAnswer": "\\(\\approx 1 + \\theta + \\displaystyle\\frac{\\theta^2}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-063",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 70",
    "difficulty": "Challenge",
    "questionText": "Approximate \\(\\ln(1 + \\sin\\theta)\\) for small \\(\\theta\\) to order \\(\\theta^2\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the composition to expand",
          "workingLatex": "\\ln(1 + \\sin\\theta) = \\ln(1 + x) \\quad \\text{with } x = \\sin\\theta",
          "explanation": "This is a logarithm of \\(1\\) plus an inner function \\(\\sin\\theta\\). We expand the inner function first, then substitute into the logarithm series, keeping terms only up to \\(\\theta^2\\)."
        },
        {
          "stepNumber": 2,
          "description": "Expand the inner sine",
          "workingLatex": "\\sin\\theta \\approx \\theta - \\frac{\\theta^3}{6}",
          "explanation": "The full small-angle series is \\(\\sin\\theta=\\theta-\\displaystyle\\frac{\\theta^3}{6}+\\cdots\\). Writing the cubic term explicitly lets us check where it lands after substitution."
        },
        {
          "stepNumber": 3,
          "description": "Keep the inner sine only to needed order",
          "workingLatex": "\\sin\\theta \\approx \\theta \\quad (\\text{up to } \\theta^2)",
          "explanation": "The \\(-\\displaystyle\\frac{\\theta^3}{6}\\) term is order \\(\\theta^3\\); inside the logarithm its lowest contribution remains order \\(\\theta^3\\), beyond the requested \\(\\theta^2\\). So \\(\\sin\\theta\\approx\\theta\\) suffices."
        },
        {
          "stepNumber": 4,
          "description": "Write the logarithm series",
          "workingLatex": "\\ln(1 + x) \\approx x - \\frac{x^2}{2}",
          "explanation": "The standard expansion is \\(\\ln(1+x)=x-\\displaystyle\\frac{x^2}{2}+\\displaystyle\\frac{x^3}{3}-\\cdots\\). We keep up to \\(x^2\\) and drop \\(\\displaystyle\\frac{x^3}{3}\\), which is order \\(\\theta^3\\) when \\(x\\approx\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Substitute sine in for x",
          "workingLatex": "\\ln(1 + \\sin\\theta) \\approx \\sin\\theta - \\frac{\\sin^2\\theta}{2}",
          "explanation": "Replace \\(x\\) by \\(\\sin\\theta\\) in each term. The linear term is \\(\\sin\\theta\\); the quadratic term carries the minus sign as \\(-\\displaystyle\\frac{\\sin^2\\theta}{2}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Replace the sine factors with theta",
          "workingLatex": "\\approx \\theta - \\frac{\\theta^2}{2}",
          "explanation": "Use \\(\\sin\\theta\\approx\\theta\\) for the linear term and \\(\\sin^2\\theta\\approx\\theta^2\\) for the quadratic term (the corrections to \\(\\sin^2\\theta\\) are order \\(\\theta^4\\)). Be careful to keep the minus sign on the second term."
        },
        {
          "stepNumber": 7,
          "description": "State the order-two approximation",
          "workingLatex": "\\ln(1 + \\sin\\theta) \\approx \\theta - \\frac{\\theta^2}{2}",
          "explanation": "All kept terms are order \\(\\theta^2\\) or lower. A common slip is writing \\(+\\displaystyle\\frac{\\theta^2}{2}\\); the logarithm's quadratic term is negative."
        }
      ],
      "finalAnswer": "\\(\\approx \\theta - \\displaystyle\\frac{\\theta^2}{2}\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-064",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 46",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\displaystyle\\frac{\\sin\\theta}{1 + \\theta}\\) for small \\(\\theta\\) to order \\(\\theta^2\\).",
    "marks": 3,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Approximate the numerator",
          "workingLatex": "\\sin\\theta \\approx \\theta",
          "explanation": "Use \\(\\sin\\theta\\approx\\theta\\). The next term \\(-\\displaystyle\\frac{\\theta^3}{6}\\) is order \\(\\theta^3\\); after multiplying by the reciprocal expansion its lowest contribution stays order \\(\\theta^3\\), so it is negligible for an answer to order \\(\\theta^2\\)."
        },
        {
          "stepNumber": 2,
          "description": "Rewrite the denominator as a power",
          "workingLatex": "\\frac{1}{1 + \\theta} = (1 + \\theta)^{-1}",
          "explanation": "Writing the reciprocal as \\((1+\\theta)^{-1}\\) lets us apply the binomial expansion for index \\(-1\\), valid for \\(|\\theta|<1\\), which certainly holds for small \\(\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Expand the reciprocal as a series",
          "workingLatex": "(1 + \\theta)^{-1} \\approx 1 - \\theta + \\theta^2",
          "explanation": "The binomial/geometric expansion gives \\((1+\\theta)^{-1}=1-\\theta+\\theta^2-\\theta^3+\\cdots\\). Keep up to \\(\\theta^2\\) for now; the dropped \\(-\\theta^3\\) is beyond our target order."
        },
        {
          "stepNumber": 4,
          "description": "Multiply numerator by the series",
          "workingLatex": "\\frac{\\sin\\theta}{1 + \\theta} \\approx \\theta\\left(1 - \\theta + \\theta^2\\right)",
          "explanation": "Combine the numerator \\(\\theta\\) with the reciprocal expansion. Multiplying by \\(\\theta\\) raises each power of \\(\\theta\\) inside the bracket by one."
        },
        {
          "stepNumber": 5,
          "description": "Distribute theta across each term",
          "workingLatex": "= \\theta\\cdot 1 - \\theta\\cdot\\theta + \\theta\\cdot\\theta^2",
          "explanation": "Apply the distributive law term by term so each product is visible before simplifying. This makes the order of each resulting power easy to track."
        },
        {
          "stepNumber": 6,
          "description": "Simplify each product",
          "workingLatex": "= \\theta - \\theta^2 + \\theta^3",
          "explanation": "Evaluate the products: \\(\\theta\\cdot1=\\theta\\), \\(\\theta\\cdot(-\\theta)=-\\theta^2\\), and \\(\\theta\\cdot\\theta^2=\\theta^3\\). The final \\(\\theta^3\\) term is above the requested order."
        },
        {
          "stepNumber": 7,
          "description": "Drop terms above order two",
          "workingLatex": "\\frac{\\sin\\theta}{1 + \\theta} \\approx \\theta - \\theta^2",
          "explanation": "Discard \\(\\theta^3\\) since we only want up to \\(\\theta^2\\). A common slip is keeping the \\(\\theta^3\\) term or dropping the sign on \\(-\\theta^2\\)."
        }
      ],
      "finalAnswer": "\\(\\approx \\theta - \\theta^2\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-065",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 47",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\displaystyle\\frac{\\cos\\theta - 1}{\\theta}\\) for small \\(\\theta\\).",
    "marks": 2,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "limit"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Approximate cosine for small theta",
          "workingLatex": "\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "Use the small-angle result \\(\\cos\\theta\\approx1-\\displaystyle\\frac{\\theta^2}{2}\\). Using the cruder \\(\\cos\\theta\\approx1\\) is too weak here: the numerator would collapse to \\(0\\) and hide the real leading behaviour."
        },
        {
          "stepNumber": 2,
          "description": "Substitute into the numerator",
          "workingLatex": "\\cos\\theta - 1 \\approx \\left(1 - \\frac{\\theta^2}{2}\\right) - 1",
          "explanation": "Replace \\(\\cos\\theta\\) by its approximation in the numerator. Keep the \\(-1\\) separate so the cancellation in the next step is explicit."
        },
        {
          "stepNumber": 3,
          "description": "Cancel the constant terms",
          "workingLatex": "= -\\frac{\\theta^2}{2}",
          "explanation": "The \\(+1\\) and \\(-1\\) cancel, leaving \\(-\\displaystyle\\frac{\\theta^2}{2}\\). This surviving \\(\\theta^2\\) term is exactly what the crude \\(\\cos\\theta\\approx1\\) would have destroyed."
        },
        {
          "stepNumber": 4,
          "description": "Form the full quotient",
          "workingLatex": "\\frac{\\cos\\theta - 1}{\\theta} \\approx \\frac{-\\frac{\\theta^2}{2}}{\\theta}",
          "explanation": "Place the simplified numerator over the denominator \\(\\theta\\). The next step will cancel a common factor of \\(\\theta\\)."
        },
        {
          "stepNumber": 5,
          "description": "Cancel one factor of theta",
          "workingLatex": "= -\\frac{\\theta}{2}",
          "explanation": "Dividing \\(\\theta^2\\) by \\(\\theta\\) leaves \\(\\theta\\), giving \\(-\\displaystyle\\frac{\\theta}{2}\\). Keep the minus sign in front; dropping it is a common error."
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the limit as theta tends to zero",
          "workingLatex": "\\lim_{\\theta \\to 0} \\frac{\\cos\\theta - 1}{\\theta} = \\lim_{\\theta \\to 0}\\left(-\\frac{\\theta}{2}\\right) = 0",
          "explanation": "As \\(\\theta\\to0\\), \\(-\\displaystyle\\frac{\\theta}{2}\\to0\\), so the expression tends to \\(0\\). The approximation \\(-\\displaystyle\\frac{\\theta}{2}\\) describes the leading linear behaviour near \\(0\\)."
        }
      ],
      "finalAnswer": "\\(\\approx -\\displaystyle\\frac{\\theta}{2}\\) (tends to 0).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-066",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 48",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\displaystyle\\frac{\\sin(3\\theta)\\cos(2\\theta)}{\\theta}\\).",
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
          "description": "Write down the expression",
          "workingLatex": "\\frac{\\sin(3\\theta)\\cos(2\\theta)}{\\theta}",
          "explanation": "We will replace each trigonometric factor by its small-angle form. The angle inside each function (here \\(3\\theta\\) and \\(2\\theta\\)) is the quantity that must be small, and it is what gets substituted into the standard approximations."
        },
        {
          "stepNumber": 2,
          "description": "Recall the standard small-angle forms",
          "workingLatex": "\\sin x\\approx x,\\qquad \\cos x\\approx 1-\\frac{x^2}{2}",
          "explanation": "These hold for small \\(x\\) measured in radians. Note that \\(x\\) stands for the entire argument of the function, so we substitute the full angle, not just \\(\\theta\\)."
        },
        {
          "stepNumber": 3,
          "description": "Identify the argument of the sine",
          "workingLatex": "x = 3\\theta",
          "explanation": "The argument of \\(\\sin\\) is \\(3\\theta\\), so this is the value of \\(x\\) we feed into \\(\\sin x\\approx x\\)."
        },
        {
          "stepNumber": 4,
          "description": "Apply \\(\\sin x\\approx x\\) with \\(x=3\\theta\\)",
          "workingLatex": "\\sin(3\\theta)\\approx 3\\theta",
          "explanation": "The whole angle \\(3\\theta\\) (not just \\(\\theta\\)) becomes the approximation. A common slip is writing \\(\\sin(3\\theta)\\approx\\theta\\), which drops the factor of \\(3\\)."
        },
        {
          "stepNumber": 5,
          "description": "Identify the argument of the cosine",
          "workingLatex": "x = 2\\theta",
          "explanation": "The argument of \\(\\cos\\) is \\(2\\theta\\), so this is the value of \\(x\\) we feed into \\(\\cos x\\approx 1-\\displaystyle\\frac{x^2}{2}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Write the full cosine expansion with \\(x=2\\theta\\)",
          "workingLatex": "\\cos(2\\theta)\\approx 1-\\frac{(2\\theta)^2}{2}",
          "explanation": "Substitute \\(x=2\\theta\\) into \\(1-\\displaystyle\\frac{x^2}{2}\\). We keep the bracket \\((2\\theta)^2\\) un-expanded for now to make the next simplification explicit."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the quadratic term",
          "workingLatex": "1-\\frac{(2\\theta)^2}{2}=1-\\frac{4\\theta^2}{2}=1-2\\theta^2",
          "explanation": "Square the bracket to get \\((2\\theta)^2=4\\theta^2\\), then divide by \\(2\\) to obtain \\(2\\theta^2\\). A common slip is forgetting to square the \\(2\\), giving \\(2\\theta^2\\) wrongly as \\(\\theta^2\\)."
        },
        {
          "stepNumber": 8,
          "description": "Decide which cosine terms to keep",
          "workingLatex": "\\cos(2\\theta)\\approx 1-2\\theta^2\\approx 1",
          "explanation": "The \\(2\\theta^2\\) term is order \\(\\theta^2\\). Since the leading behaviour of the answer is order \\(1\\), this correction is negligible compared with the constant \\(1\\), so we keep only \\(\\cos(2\\theta)\\approx 1\\)."
        },
        {
          "stepNumber": 9,
          "description": "Substitute both approximations",
          "workingLatex": "\\frac{\\sin(3\\theta)\\cos(2\\theta)}{\\theta}\\approx\\frac{(3\\theta)(1)}{\\theta}",
          "explanation": "Replace \\(\\sin(3\\theta)\\) by \\(3\\theta\\) and \\(\\cos(2\\theta)\\) by \\(1\\). Keeping only the leading \\(1\\) from the cosine is enough because we are dividing by \\(\\theta\\), not by \\(\\theta^2\\)."
        },
        {
          "stepNumber": 10,
          "description": "Multiply out the numerator",
          "workingLatex": "\\frac{(3\\theta)(1)}{\\theta}=\\frac{3\\theta}{\\theta}",
          "explanation": "Multiplying \\(3\\theta\\) by \\(1\\) leaves \\(3\\theta\\) unchanged in the numerator."
        },
        {
          "stepNumber": 11,
          "description": "Cancel the factor of \\(\\theta\\)",
          "workingLatex": "\\frac{3\\theta}{\\theta}=3",
          "explanation": "The single \\(\\theta\\) in the numerator cancels the \\(\\theta\\) in the denominator. Do not also cancel the \\(3\\); only the matching \\(\\theta\\) factors cancel."
        }
      ],
      "finalAnswer": "\\(\\approx 3\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-067",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 16",
    "difficulty": "Foundation",
    "questionText": "For small \\(\\theta\\), approximate \\(2\\sin\\theta\\cos\\theta\\) to linear order.",
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
          "description": "Apply \\(\\sin\\theta\\approx\\theta\\)",
          "workingLatex": "\\sin\\theta\\approx\\theta",
          "explanation": "For small \\(\\theta\\) in radians the sine is approximately equal to the angle itself. This is the linear (order \\(\\theta\\)) approximation."
        },
        {
          "stepNumber": 2,
          "description": "Write the full cosine expansion",
          "workingLatex": "\\cos\\theta\\approx 1-\\frac{\\theta^2}{2}",
          "explanation": "The standard quadratic-order form of the cosine keeps the constant and the \\(\\displaystyle\\frac{\\theta^2}{2}\\) term. We start from this before deciding what to keep."
        },
        {
          "stepNumber": 3,
          "description": "Reduce the cosine to linear order",
          "workingLatex": "\\cos\\theta\\approx 1-\\frac{\\theta^2}{2}\\approx 1",
          "explanation": "To linear order we keep only the constant term, since \\(\\displaystyle\\frac{\\theta^2}{2}\\) is order \\(\\theta^2\\) and is negligible compared with \\(1\\). A common slip is keeping the \\(\\theta^2\\) term when only linear order is asked for."
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the product",
          "workingLatex": "2\\sin\\theta\\cos\\theta\\approx 2(\\theta)(1)",
          "explanation": "Replace \\(\\sin\\theta\\) by \\(\\theta\\) and \\(\\cos\\theta\\) by \\(1\\), keeping the factor of \\(2\\) out front."
        },
        {
          "stepNumber": 5,
          "description": "Simplify the product",
          "workingLatex": "2(\\theta)(1)=2\\theta",
          "explanation": "Multiplying \\(\\theta\\) by \\(1\\) leaves the linear term unchanged, and the factor of \\(2\\) gives \\(2\\theta\\)."
        },
        {
          "stepNumber": 6,
          "description": "Check against the double-angle identity",
          "workingLatex": "2\\sin\\theta\\cos\\theta=\\sin 2\\theta\\approx 2\\theta",
          "explanation": "The expression equals \\(\\sin 2\\theta\\) exactly, and \\(\\sin 2\\theta\\approx 2\\theta\\) by the small-angle rule with argument \\(2\\theta\\). This confirms the answer."
        }
      ],
      "finalAnswer": "\\(\\approx 2\\theta\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-068",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 49",
    "difficulty": "Standard",
    "questionText": "Approximate \\(\\cos^2\\theta\\) for small \\(\\theta\\) to order \\(\\theta^2\\).",
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
          "description": "Apply \\(\\cos\\theta\\approx 1-\\displaystyle\\frac{\\theta^2}{2}\\)",
          "workingLatex": "\\cos\\theta\\approx 1-\\frac{\\theta^2}{2}",
          "explanation": "Since the answer is required to order \\(\\theta^2\\) we must keep the \\(\\displaystyle\\frac{\\theta^2}{2}\\) term in the cosine, not just \\(\\cos\\theta\\approx 1\\). Dropping it now would lose the entire \\(\\theta^2\\) part of the answer."
        },
        {
          "stepNumber": 2,
          "description": "Square the approximation",
          "workingLatex": "\\cos^2\\theta\\approx\\left(1-\\frac{\\theta^2}{2}\\right)^2",
          "explanation": "Squaring means multiplying the bracket by itself. Be careful to square the whole bracket, not just each term separately."
        },
        {
          "stepNumber": 3,
          "description": "Set up the binomial expansion",
          "workingLatex": "\\left(1-\\frac{\\theta^2}{2}\\right)^2=1^2-2\\cdot 1\\cdot\\frac{\\theta^2}{2}+\\left(\\frac{\\theta^2}{2}\\right)^2",
          "explanation": "Apply \\((a-b)^2=a^2-2ab+b^2\\) with \\(a=1\\) and \\(b=\\displaystyle\\frac{\\theta^2}{2}\\), writing each of the three terms before simplifying."
        },
        {
          "stepNumber": 4,
          "description": "Simplify the middle term",
          "workingLatex": "-2\\cdot 1\\cdot\\frac{\\theta^2}{2}=-\\theta^2",
          "explanation": "The factor of \\(2\\) cancels the \\(2\\) in the denominator, leaving \\(-\\theta^2\\). This is the order \\(\\theta^2\\) term we need."
        },
        {
          "stepNumber": 5,
          "description": "Simplify the last term",
          "workingLatex": "\\left(\\frac{\\theta^2}{2}\\right)^2=\\frac{\\theta^4}{4}",
          "explanation": "Square the numerator and the denominator separately: \\((\\theta^2)^2=\\theta^4\\) and \\(2^2=4\\), giving \\(\\displaystyle\\frac{\\theta^4}{4}\\)."
        },
        {
          "stepNumber": 6,
          "description": "Collect the expanded terms",
          "workingLatex": "\\left(1-\\frac{\\theta^2}{2}\\right)^2=1-\\theta^2+\\frac{\\theta^4}{4}",
          "explanation": "Combining the constant, the linear-in-\\(\\theta^2\\) term and the quartic term gives the full expansion."
        },
        {
          "stepNumber": 7,
          "description": "Discard the order \\(\\theta^4\\) term",
          "workingLatex": "1-\\theta^2+\\frac{\\theta^4}{4}\\approx 1-\\theta^2",
          "explanation": "The \\(\\displaystyle\\frac{\\theta^4}{4}\\) term is order \\(\\theta^4\\), higher than the requested order \\(\\theta^2\\), so it is negligible and we drop it. Keeping it would over-state the accuracy of the approximation."
        }
      ],
      "finalAnswer": "\\(\\approx 1 - \\theta^2\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-069",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 17",
    "difficulty": "Foundation",
    "questionText": "Approximate \\(\\tan^2\\theta\\) for small \\(\\theta\\).",
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
          "description": "Apply \\(\\tan\\theta\\approx\\theta\\)",
          "workingLatex": "\\tan\\theta\\approx\\theta",
          "explanation": "For small \\(\\theta\\) in radians, the tangent is approximately equal to the angle. This is the standard linear approximation."
        },
        {
          "stepNumber": 2,
          "description": "Square both sides",
          "workingLatex": "\\tan^2\\theta\\approx(\\theta)^2",
          "explanation": "Squaring the approximation means squaring each side. The notation \\(\\tan^2\\theta\\) means \\((\\tan\\theta)^2\\), so we square the right-hand side too."
        },
        {
          "stepNumber": 3,
          "description": "Simplify the square",
          "workingLatex": "(\\theta)^2=\\theta^2",
          "explanation": "Squaring \\(\\theta\\) gives \\(\\theta^2\\). A common slip is to write the answer as \\(\\theta\\); remember the original expression is squared."
        }
      ],
      "finalAnswer": "\\(\\approx \\theta^2\\).",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-070",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 71",
    "difficulty": "Challenge",
    "questionText": "Using small-angle approximations, show that for a circle of radius \\(r\\) and small angle \\(\\theta\\), the difference between arc length and chord length is \\(\\approx \\displaystyle\\frac{r\\theta^3}{24}\\).",
    "marks": 4,
    "examStyle": true,
    "yearCreated": 2026,
    "tags": [
      "applied"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the arc length",
          "workingLatex": "s = r\\theta",
          "explanation": "Arc length for a sector of radius \\(r\\) subtending angle \\(\\theta\\) (in radians) is \\(s=r\\theta\\). This is exact, with no approximation yet."
        },
        {
          "stepNumber": 2,
          "description": "Write the chord length",
          "workingLatex": "c = 2r\\sin\\!\\left(\\frac{\\theta}{2}\\right)",
          "explanation": "Dropping a perpendicular from the centre to the chord splits the isosceles triangle into two right triangles, each with half-angle \\(\\displaystyle\\frac{\\theta}{2}\\) and opposite side \\(r\\sin(\\theta/2)\\); doubling gives the chord."
        },
        {
          "stepNumber": 3,
          "description": "Explain why linear order is insufficient",
          "workingLatex": "s-c\\approx r\\theta-2r\\cdot\\frac{\\theta}{2}=r\\theta-r\\theta=0",
          "explanation": "Using only \\(\\sin x\\approx x\\) makes the chord equal to the arc, giving a difference of zero. The leading terms cancel, so we must retain the next term in the sine expansion to capture the difference."
        },
        {
          "stepNumber": 4,
          "description": "State the cubic-order sine expansion",
          "workingLatex": "\\sin x\\approx x-\\frac{x^3}{6}",
          "explanation": "The next term after the linear one is \\(-\\displaystyle\\frac{x^3}{6}\\). Keeping it is essential here because the linear parts of \\(s\\) and \\(c\\) cancel exactly."
        },
        {
          "stepNumber": 5,
          "description": "Apply the expansion with \\(x=\\displaystyle\\frac{\\theta}{2}\\)",
          "workingLatex": "\\sin\\!\\left(\\frac{\\theta}{2}\\right)\\approx \\frac{\\theta}{2}-\\frac{1}{6}\\left(\\frac{\\theta}{2}\\right)^3",
          "explanation": "Substitute \\(x=\\displaystyle\\frac{\\theta}{2}\\) into \\(x-\\displaystyle\\frac{x^3}{6}\\). We keep the cubic bracket un-expanded for the moment so the simplification is explicit."
        },
        {
          "stepNumber": 6,
          "description": "Cube the bracket",
          "workingLatex": "\\left(\\frac{\\theta}{2}\\right)^3=\\frac{\\theta^3}{8}",
          "explanation": "Cube the numerator and denominator separately: \\(\\theta^3\\) over \\(2^3=8\\). A common slip is forgetting to cube the \\(2\\) in the denominator."
        },
        {
          "stepNumber": 7,
          "description": "Simplify the cubic term",
          "workingLatex": "\\frac{1}{6}\\cdot\\frac{\\theta^3}{8}=\\frac{\\theta^3}{48}",
          "explanation": "Multiply the denominators \\(6\\) and \\(8\\) to get \\(48\\), giving the cubic correction \\(\\displaystyle\\frac{\\theta^3}{48}\\) inside the sine."
        },
        {
          "stepNumber": 8,
          "description": "Write the approximated sine",
          "workingLatex": "\\sin\\!\\left(\\frac{\\theta}{2}\\right)\\approx \\frac{\\theta}{2}-\\frac{\\theta^3}{48}",
          "explanation": "Collecting the linear and cubic parts gives the sine to cubic order, ready to substitute into the chord."
        },
        {
          "stepNumber": 9,
          "description": "Substitute into the chord length",
          "workingLatex": "c\\approx 2r\\left(\\frac{\\theta}{2}-\\frac{\\theta^3}{48}\\right)",
          "explanation": "Replace \\(\\sin(\\theta/2)\\) in \\(c=2r\\sin(\\theta/2)\\) by its cubic-order approximation, keeping the factor \\(2r\\) outside the bracket."
        },
        {
          "stepNumber": 10,
          "description": "Multiply out the bracket",
          "workingLatex": "c\\approx 2r\\cdot\\frac{\\theta}{2}-2r\\cdot\\frac{\\theta^3}{48}=r\\theta-\\frac{r\\theta^3}{24}",
          "explanation": "The first term gives \\(r\\theta\\) since \\(2r\\cdot\\displaystyle\\frac{\\theta}{2}=r\\theta\\), and the second gives \\(\\displaystyle\\frac{2r\\theta^3}{48}=\\displaystyle\\frac{r\\theta^3}{24}\\)."
        },
        {
          "stepNumber": 11,
          "description": "Form the difference \\(s-c\\)",
          "workingLatex": "s-c\\approx r\\theta-\\left(r\\theta-\\frac{r\\theta^3}{24}\\right)",
          "explanation": "Subtract the chord from the arc. Keep the bracket so the subtraction of each term is clear and signs are not mishandled."
        },
        {
          "stepNumber": 12,
          "description": "Distribute the minus sign",
          "workingLatex": "s-c\\approx r\\theta-r\\theta+\\frac{r\\theta^3}{24}",
          "explanation": "Removing the bracket flips the sign of each term inside, so \\(-(r\\theta)\\) becomes \\(-r\\theta\\) and \\(-\\left(-\\displaystyle\\frac{r\\theta^3}{24}\\right)\\) becomes \\(+\\displaystyle\\frac{r\\theta^3}{24}\\)."
        },
        {
          "stepNumber": 13,
          "description": "Cancel the linear terms",
          "workingLatex": "s-c\\approx\\frac{r\\theta^3}{24}",
          "explanation": "The \\(r\\theta\\) terms cancel, leaving only the cubic term. This is why the linear approximation alone would have wrongly given a difference of zero."
        }
      ],
      "finalAnswer": "\\(\\approx \\displaystyle\\frac{r\\theta^3}{24}\\). \\(\\blacksquare\\)",
      "commonMistakes": []
    }
  },
  {
    "id": "y2tf6-071",
    "topicRef": "y2tf6",
    "topicTitle": "Small Angle Approximations 50",
    "difficulty": "Standard",
    "questionText": "Using small-angle approximations, estimate \\(\\sin 0.04, \\cos 0.04, \\tan 0.04\\) to 4 dp.",
    "marks": 3,
    "examStyle": false,
    "yearCreated": 2026,
    "tags": [
      "approximation"
    ],
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the angle is in radians",
          "workingLatex": "\\theta = 0.04 \\text{ radians (small)}",
          "explanation": "The small-angle approximations only hold when \\(\\theta\\) is measured in radians, not degrees. Since \\(0.04\\) is small, the approximations will be very accurate. A common slip is to treat the number as degrees and use a calculator in the wrong mode."
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is genuinely small",
          "workingLatex": "0 < \\theta = 0.04 \\ll 1",
          "explanation": "The approximations are only reliable when \\(\\theta\\) is small compared with \\(1\\) radian, so that powers \\(\\theta^2, \\theta^3, \\dots\\) shrink rapidly. Here \\(\\theta = 0.04\\), which is well under \\(1\\), so the neglected terms will be extremely small."
        },
        {
          "stepNumber": 3,
          "description": "Recall the three approximations",
          "workingLatex": "\\sin\\theta \\approx \\theta,\\quad \\tan\\theta \\approx \\theta,\\quad \\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}",
          "explanation": "These come from truncating the Taylor series for small \\(\\theta\\). Note \\(\\sin\\) and \\(\\tan\\) keep only the first-order term, while \\(\\cos\\) keeps up to the second-order term."
        },
        {
          "stepNumber": 4,
          "description": "Identify the dropped higher-order terms",
          "workingLatex": "\\sin\\theta = \\theta - \\frac{\\theta^3}{6} + \\cdots,\\quad \\tan\\theta = \\theta + \\frac{\\theta^3}{3} + \\cdots,\\quad \\cos\\theta = 1 - \\frac{\\theta^2}{2} + \\frac{\\theta^4}{24} - \\cdots",
          "explanation": "Writing the full series shows exactly what is discarded: for \\(\\sin\\) and \\(\\tan\\) we drop the \\(\\theta^3\\) term and beyond, and for \\(\\cos\\) we drop the \\(\\theta^4\\) term and beyond. These dropped terms are negligible here because, as the next step shows, \\(\\theta^3\\) and \\(\\theta^4\\) are far smaller than \\(10^{-4}\\)."
        },
        {
          "stepNumber": 5,
          "description": "Estimate the size of the dropped terms",
          "workingLatex": "\\theta^3 = 6.4\\times 10^{-5},\\quad \\frac{\\theta^3}{6} \\approx 1.07\\times 10^{-5},\\quad \\theta^4 = 2.56\\times 10^{-6}",
          "explanation": "The largest dropped correction is \\(\\displaystyle\\frac{\\theta^3}{6}\\approx 1.07\\times 10^{-5}\\) for \\(\\sin\\) and \\(\\tan\\); the \\(\\cos\\) correction \\(\\displaystyle\\frac{\\theta^4}{24}\\) is even tinier. All are below \\(0.5\\times 10^{-4}\\), so they cannot affect the fourth decimal place, justifying the truncation at this precision."
        },
        {
          "stepNumber": 6,
          "description": "Apply sine approximation",
          "workingLatex": "\\sin 0.04 \\approx \\theta = 0.04",
          "explanation": "Using \\(\\sin\\theta \\approx \\theta\\) directly with \\(\\theta = 0.04\\), dropping the \\(\\displaystyle\\frac{\\theta^3}{6}\\) term identified above. The first-order term \\(\\theta\\) is the entire estimate."
        },
        {
          "stepNumber": 7,
          "description": "Write the sine estimate to 4 dp",
          "workingLatex": "\\sin 0.04 \\approx 0.0400",
          "explanation": "To 4 dp this is \\(0.0400\\). Remember to pad with trailing zeros to show all 4 decimal places."
        },
        {
          "stepNumber": 8,
          "description": "Square the angle for cosine",
          "workingLatex": "\\theta^2 = (0.04)^2 = 0.0016",
          "explanation": "We need \\(\\theta^2\\) for the cosine approximation. Squaring a small number makes it much smaller, which is why this second-order term is tiny. A common slip is to forget to square, using \\(0.04\\) instead of \\(0.0016\\)."
        },
        {
          "stepNumber": 9,
          "description": "Halve the squared term",
          "workingLatex": "\\frac{\\theta^2}{2} = \\frac{0.0016}{2} = 0.0008",
          "explanation": "Divide the squared value by \\(2\\) as required by \\(\\cos\\theta \\approx 1 - \\displaystyle\\frac{\\theta^2}{2}\\). This gives the small correction to subtract from \\(1\\)."
        },
        {
          "stepNumber": 10,
          "description": "Substitute into the cosine approximation",
          "workingLatex": "\\cos 0.04 \\approx 1 - \\frac{\\theta^2}{2} = 1 - 0.0008",
          "explanation": "Substitute the correction \\(0.0008\\) into \\(\\cos\\theta \\approx 1 - \\displaystyle\\frac{\\theta^2}{2}\\), dropping the \\(\\displaystyle\\frac{\\theta^4}{24}\\) term and beyond. The estimate is \\(1\\) minus the second-order correction."
        },
        {
          "stepNumber": 11,
          "description": "Evaluate and write to 4 dp",
          "workingLatex": "\\cos 0.04 \\approx 1 - 0.0008 = 0.9992",
          "explanation": "Subtracting the correction from \\(1\\) gives \\(0.9992\\) to 4 dp. The cosine is just below \\(1\\), as expected for a small angle. A common slip is to forget the term entirely and write \\(1.0000\\)."
        },
        {
          "stepNumber": 12,
          "description": "Apply tangent approximation",
          "workingLatex": "\\tan 0.04 \\approx \\theta = 0.04",
          "explanation": "Using \\(\\tan\\theta \\approx \\theta\\) with \\(\\theta = 0.04\\), dropping the \\(\\displaystyle\\frac{\\theta^3}{3}\\) term and beyond. To this order \\(\\tan\\) and \\(\\sin\\) share the same first-order term \\(\\theta\\)."
        },
        {
          "stepNumber": 13,
          "description": "Write the tangent estimate to 4 dp",
          "workingLatex": "\\tan 0.04 \\approx 0.0400",
          "explanation": "To 4 dp this is \\(0.0400\\), matching the sine estimate because their leading terms are identical. The difference between \\(\\sin\\) and \\(\\tan\\) only appears at the dropped third-order term."
        },
        {
          "stepNumber": 14,
          "description": "Collect the three estimates",
          "workingLatex": "\\sin 0.04 \\approx 0.0400,\\quad \\cos 0.04 \\approx 0.9992,\\quad \\tan 0.04 \\approx 0.0400",
          "explanation": "These match the true calculator values to 4 dp because \\(0.04\\) is small enough for the neglected higher-order terms to be negligible at this precision."
        }
      ],
      "finalAnswer": "\\(\\sin \\approx 0.0400, \\cos \\approx 0.9992, \\tan \\approx 0.0400\\).",
      "commonMistakes": []
    }
  }
];
